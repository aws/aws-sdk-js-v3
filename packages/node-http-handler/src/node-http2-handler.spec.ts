import { NodeHttp2Handler } from "./node-http2-handler";
import { createMockHttp2Server, createResponseFunction } from "./server.mock";

describe("NodeHttp2Handler", () => {
  let nodeH2Handler: NodeHttp2Handler;

  const protocol = "http:";
  const hostname = "localhost";
  const port = 54322;
  const mockH2Server = createMockHttp2Server().listen(port);
  const getMockRequest = () => ({
    protocol,
    hostname,
    port,
    method: "GET",
    path: "/",
    headers: {}
  });

  const mockResponse = {
    statusCode: 200,
    headers: {},
    body: "test"
  };

  beforeEach(() => {
    nodeH2Handler = new NodeHttp2Handler();
    mockH2Server.on("request", createResponseFunction(mockResponse));
  });

  afterEach(() => {
    mockH2Server.removeAllListeners("request");
    // @ts-ignore: access private property
    for (const [, session] of nodeH2Handler.connectionPool) {
      session.destroy();
    }
  });

  afterAll(() => {
    mockH2Server.close();
  });

  describe("connectionPool", () => {
    it("is empty on initialization", () => {
      // @ts-ignore: access private property
      expect(nodeH2Handler.connectionPool.size).toBe(0);
    });

    it("creates session when request is made", async () => {
      await nodeH2Handler.handle(getMockRequest(), {});

      // @ts-ignore: access private property
      expect(nodeH2Handler.connectionPool.size).toBe(1);
      expect(
        // @ts-ignore: access private property
        nodeH2Handler.connectionPool.get(`${protocol}//${hostname}:${port}`)
      ).toBeDefined();
    });

    it("reuses existing session if request is made on same authority again", async () => {
      await nodeH2Handler.handle(getMockRequest(), {});
      // @ts-ignore: access private property
      expect(nodeH2Handler.connectionPool.size).toBe(1);

      await nodeH2Handler.handle(getMockRequest(), {});
      // @ts-ignore: access private property
      expect(nodeH2Handler.connectionPool.size).toBe(1);
    });

    it("creates new session if request is made on new authority", async () => {
      await nodeH2Handler.handle(getMockRequest(), {});
      // @ts-ignore: access private property
      expect(nodeH2Handler.connectionPool.size).toBe(1);

      const port2 = port + 1;
      const mockH2Server2 = createMockHttp2Server().listen(port2);
      mockH2Server2.on("request", createResponseFunction(mockResponse));

      await nodeH2Handler.handle({ ...getMockRequest(), port: port2 }, {});
      // @ts-ignore: access private property
      expect(nodeH2Handler.connectionPool.size).toBe(2);
      expect(
        // @ts-ignore: access private property
        nodeH2Handler.connectionPool.get(`${protocol}//${hostname}:${port2}`)
      ).toBeDefined();

      mockH2Server2.close();
    });

    it("closes and removes session on sessionTimeout", async done => {
      const sessionTimeout = 500;
      nodeH2Handler = new NodeHttp2Handler({ sessionTimeout });
      await nodeH2Handler.handle(getMockRequest(), {});

      const authority = `${protocol}//${hostname}:${port}`;
      // @ts-ignore: access private property
      const session = nodeH2Handler.connectionPool.get(authority);
      // @ts-ignore: session is defined
      expect(session.closed).toBe(false);
      setTimeout(() => {
        // @ts-ignore: session is defined
        expect(session.closed).toBe(true);
        // @ts-ignore: access private property
        expect(nodeH2Handler.connectionPool.get(authority)).not.toBeDefined();
        done();
      }, sessionTimeout + 100);
    });
  });
});
