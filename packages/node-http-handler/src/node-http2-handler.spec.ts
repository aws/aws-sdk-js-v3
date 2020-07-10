import { HttpRequest } from "@aws-sdk/protocol-http";

import { NodeHttp2Handler } from "./node-http2-handler";
import { createMockHttp2Server, createResponseFunction } from "./server.mock";

describe("NodeHttp2Handler", () => {
  let nodeH2Handler: NodeHttp2Handler;

  const protocol = "http:";
  const hostname = "localhost";
  const port = 45321;
  const mockH2Server = createMockHttp2Server().listen(port);
  const getMockReqOptions = () => ({
    protocol,
    hostname,
    port,
    method: "GET",
    path: "/",
    headers: {},
  });

  const mockResponse = {
    statusCode: 200,
    headers: {},
    body: "test",
  };

  beforeEach(() => {
    nodeH2Handler = new NodeHttp2Handler();
    mockH2Server.on("request", createResponseFunction(mockResponse));
  });

  afterEach(() => {
    mockH2Server.removeAllListeners("request");
    // @ts-ignore: access private property
    const connectionPool = nodeH2Handler.connectionPool;
    for (const [, session] of connectionPool) {
      session.destroy();
    }
    connectionPool.clear();
  });

  afterAll(() => {
    mockH2Server.close();
  });

  it("has metadata", () => {
    expect(nodeH2Handler.metadata.handlerProtocol).toContain("h2");
  });

  describe("connectionPool", () => {
    it("is empty on initialization", () => {
      // @ts-ignore: access private property
      expect(nodeH2Handler.connectionPool.size).toBe(0);
    });

    it("creates and stores session when request is made", async () => {
      await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

      // @ts-ignore: access private property
      expect(nodeH2Handler.connectionPool.size).toBe(1);
      expect(
        // @ts-ignore: access private property
        nodeH2Handler.connectionPool.get(`${protocol}//${hostname}:${port}`)
      ).toBeDefined();
    });

    it("reuses existing session if request is made on same authority again", async () => {
      await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});
      // @ts-ignore: access private property
      expect(nodeH2Handler.connectionPool.size).toBe(1);

      // @ts-ignore: access private property
      const session: ClientHttp2Session = nodeH2Handler.connectionPool.get(`${protocol}//${hostname}:${port}`);
      const requestSpy = jest.spyOn(session, "request");

      await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});
      // @ts-ignore: access private property
      expect(nodeH2Handler.connectionPool.size).toBe(1);
      expect(requestSpy.mock.calls.length).toBe(1);
    });

    it("creates new session if request is made on new authority", async () => {
      await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});
      // @ts-ignore: access private property
      expect(nodeH2Handler.connectionPool.size).toBe(1);

      const port2 = port + 1;
      const mockH2Server2 = createMockHttp2Server().listen(port2);
      mockH2Server2.on("request", createResponseFunction(mockResponse));

      await nodeH2Handler.handle(new HttpRequest({ ...getMockReqOptions(), port: port2 }), {});
      // @ts-ignore: access private property
      expect(nodeH2Handler.connectionPool.size).toBe(2);
      expect(
        // @ts-ignore: access private property
        nodeH2Handler.connectionPool.get(`${protocol}//${hostname}:${port2}`)
      ).toBeDefined();

      mockH2Server2.close();
    });

    it("closes and removes session on sessionTimeout", async (done) => {
      const sessionTimeout = 500;
      nodeH2Handler = new NodeHttp2Handler({ sessionTimeout });
      await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

      const authority = `${protocol}//${hostname}:${port}`;
      // @ts-ignore: access private property
      const session: ClientHttp2Session = nodeH2Handler.connectionPool.get(authority);
      expect(session.closed).toBe(false);
      setTimeout(() => {
        expect(session.closed).toBe(true);
        // @ts-ignore: access private property
        expect(nodeH2Handler.connectionPool.get(authority)).not.toBeDefined();
        done();
      }, sessionTimeout + 100);
    });
  });

  describe("destroy", () => {
    it("destroys sessions and clears connectionPool", async () => {
      await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

      // @ts-ignore: access private property
      const session: ClientHttp2Session = nodeH2Handler.connectionPool.get(`${protocol}//${hostname}:${port}`);

      // @ts-ignore: access private property
      expect(nodeH2Handler.connectionPool.size).toBe(1);
      expect(session.destroyed).toBe(false);
      nodeH2Handler.destroy();
      // @ts-ignore: access private property
      expect(nodeH2Handler.connectionPool.size).toBe(0);
      expect(session.destroyed).toBe(true);
    });
  });

  describe("abortSignal", () => {
    it("will not create session if request already aborted", async () => {
      // @ts-ignore: access private property
      expect(nodeH2Handler.connectionPool.size).toBe(0);
      await expect(
        nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {
          abortSignal: {
            aborted: true,
          },
        })
      ).rejects.toHaveProperty("name", "AbortError");
      // @ts-ignore: access private property
      expect(nodeH2Handler.connectionPool.size).toBe(0);
    });

    it("will not create request on session if request already aborted", async () => {
      await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

      // @ts-ignore: access private property
      const session: ClientHttp2Session = nodeH2Handler.connectionPool.get(`${protocol}//${hostname}:${port}`);
      const requestSpy = jest.spyOn(session, "request");

      await expect(
        nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {
          abortSignal: {
            aborted: true,
          },
        })
      ).rejects.toHaveProperty("name", "AbortError");
      expect(requestSpy.mock.calls.length).toBe(0);
    });

    /* Commenting out as the test is flaky https://github.com/aws/aws-sdk-js-v3/issues/487
    it("will close request on session when aborted", async () => {
      await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

      // @ts-ignore: access private property
      const session: ClientHttp2Session = nodeH2Handler.connectionPool.get(
        `${protocol}//${hostname}:${port}`
      );
      const requestSpy = jest.spyOn(session, "request");

      const abortController = new AbortController();
      // Delay response so that onabort is called earlier
      setTimeout(() => {
        abortController.abort();
      }, 0);
      mockH2Server.on(
        "request",
        async () =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve(createResponseFunction(mockResponse));
            }, 1000);
          })
      );

      await expect(
        nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {
          abortSignal: abortController.signal
        })
      ).rejects.toHaveProperty("name", "AbortError");
      expect(requestSpy.mock.calls.length).toBe(1);
    });
    */
  });
});
