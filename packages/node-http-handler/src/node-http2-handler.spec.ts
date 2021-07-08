import { AbortController } from "@aws-sdk/abort-controller";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { rejects } from "assert";
import http2, { constants, Http2Stream } from "http2";

import { NodeHttp2Handler } from "./node-http2-handler";
import { createMockHttp2Server, createResponseFunction, createResponseFunctionWithDelay } from "./server.mock";

describe(NodeHttp2Handler.name, () => {
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
    mockH2Server.on("request", createResponseFunction(mockResponse));
  });

  afterEach(() => {
    mockH2Server.removeAllListeners("request");
    jest.clearAllMocks();
  });

  afterAll(() => {
    mockH2Server.close();
  });

  describe("without options", () => {
    beforeEach(() => {
      nodeH2Handler = new NodeHttp2Handler();
    });

    afterEach(() => {
      // @ts-ignore: access private property
      const sessionPool = nodeH2Handler.sessionPool;
      for (const [, session] of sessionPool) {
        session.destroy();
      }
      sessionPool.clear();
    });

    it("has metadata", () => {
      expect(nodeH2Handler.metadata.handlerProtocol).toContain("h2");
    });

    describe("number calls to http2.connect", () => {
      it("is zero on initialization", () => {
        const connectSpy = jest.spyOn(http2, "connect");
        expect(connectSpy).not.toHaveBeenCalled();
      });

      it("is one when request is made", async () => {
        const connectSpy = jest.spyOn(http2, "connect");

        // Make single request.
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

        const authority = `${protocol}//${hostname}:${port}`;
        expect(connectSpy).toHaveBeenCalledTimes(1);
        expect(connectSpy).toHaveBeenCalledWith(authority);
      });

      it("is one if multiple requests are made on same URL", async () => {
        const connectSpy = jest.spyOn(http2, "connect");

        // Make two requests.
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

        const authority = `${protocol}//${hostname}:${port}`;
        expect(connectSpy).toHaveBeenCalledTimes(1);
        expect(connectSpy).toHaveBeenCalledWith(authority);
      });

      it("is many if requests are made on different URLs", async () => {
        const connectSpy = jest.spyOn(http2, "connect");

        // Make first request on default URL.
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

        const port2 = port + 1;
        const mockH2Server2 = createMockHttp2Server().listen(port2);
        mockH2Server2.on("request", createResponseFunction(mockResponse));

        // Make second request on URL with port2.
        await nodeH2Handler.handle(new HttpRequest({ ...getMockReqOptions(), port: port2 }), {});

        const authorityPrefix = `${protocol}//${hostname}`;
        expect(connectSpy).toHaveBeenCalledTimes(2);
        expect(connectSpy).toHaveBeenNthCalledWith(1, `${authorityPrefix}:${port}`);
        expect(connectSpy).toHaveBeenNthCalledWith(2, `${authorityPrefix}:${port2}`);
        mockH2Server2.close();
      });
    });

    describe("errors", () => {
      const UNEXPECTEDLY_CLOSED_REGEX = /closed|destroy|cancel|did not get a response/i;
      it("handles goaway frames", async () => {
        const port3 = port + 2;
        const mockH2Server3 = createMockHttp2Server().listen(port3);
        let establishedConnections = 0;
        let numRequests = 0;
        let shouldSendGoAway = true;

        mockH2Server3.on("stream", (request: Http2Stream) => {
          // transmit goaway frame without shutting down the connection
          // to simulate an unlikely error mode.
          numRequests += 1;
          if (shouldSendGoAway) {
            request.session.goaway(constants.NGHTTP2_PROTOCOL_ERROR);
          }
        });
        mockH2Server3.on("connection", () => {
          establishedConnections += 1;
        });
        const req = new HttpRequest({ ...getMockReqOptions(), port: port3 });
        expect(establishedConnections).toBe(0);
        expect(numRequests).toBe(0);
        await rejects(
          nodeH2Handler.handle(req, {}),
          UNEXPECTEDLY_CLOSED_REGEX,
          "should be rejected promptly due to goaway frame"
        );
        expect(establishedConnections).toBe(1);
        expect(numRequests).toBe(1);
        await rejects(
          nodeH2Handler.handle(req, {}),
          UNEXPECTEDLY_CLOSED_REGEX,
          "should be rejected promptly due to goaway frame"
        );
        expect(establishedConnections).toBe(2);
        expect(numRequests).toBe(2);
        await rejects(
          nodeH2Handler.handle(req, {}),
          UNEXPECTEDLY_CLOSED_REGEX,
          "should be rejected promptly due to goaway frame"
        );
        expect(establishedConnections).toBe(3);
        expect(numRequests).toBe(3);

        // should be able to recover from goaway after reconnecting to a server
        // that doesn't send goaway, and reuse the TCP connection (Http2Session)
        shouldSendGoAway = false;
        mockH2Server3.on("request", createResponseFunction(mockResponse));
        await nodeH2Handler.handle(req, {});
        const result = await nodeH2Handler.handle(req, {});
        const resultReader = result.response.body;

        // ...and validate that the mocked response is received
        const responseBody = await new Promise((resolve) => {
          const buffers = [];
          resultReader.on("data", (chunk) => buffers.push(chunk));
          resultReader.on("end", () => {
            resolve(Buffer.concat(buffers).toString("utf8"));
          });
        });
        expect(responseBody).toBe("test");
        expect(establishedConnections).toBe(4);
        expect(numRequests).toBe(5);
        mockH2Server3.close();
      });

      it("handles connections destroyed by servers", async () => {
        const port3 = port + 2;
        const mockH2Server3 = createMockHttp2Server().listen(port3);
        let establishedConnections = 0;
        let numRequests = 0;

        mockH2Server3.on("stream", (request: Http2Stream) => {
          // transmit goaway frame and then shut down the connection.
          numRequests += 1;
          request.session.destroy();
        });
        mockH2Server3.on("connection", () => {
          establishedConnections += 1;
        });
        const req = new HttpRequest({ ...getMockReqOptions(), port: port3 });
        expect(establishedConnections).toBe(0);
        expect(numRequests).toBe(0);
        await rejects(
          nodeH2Handler.handle(req, {}),
          UNEXPECTEDLY_CLOSED_REGEX,
          "should be rejected promptly due to goaway frame or destroyed connection"
        );
        expect(establishedConnections).toBe(1);
        expect(numRequests).toBe(1);
        await rejects(
          nodeH2Handler.handle(req, {}),
          UNEXPECTEDLY_CLOSED_REGEX,
          "should be rejected promptly due to goaway frame or destroyed connection"
        );
        expect(establishedConnections).toBe(2);
        expect(numRequests).toBe(2);
        await rejects(
          nodeH2Handler.handle(req, {}),
          UNEXPECTEDLY_CLOSED_REGEX,
          "should be rejected promptly due to goaway frame or destroyed connection"
        );
        expect(establishedConnections).toBe(3);
        expect(numRequests).toBe(3);
        mockH2Server3.close();
      });
    });

    describe("destroy", () => {
      it("destroys session and clears sessionPool", async () => {
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

        // @ts-ignore: access private property
        const session: ClientHttp2Session = nodeH2Handler.sessions[0];

        // @ts-ignore: access private property
        expect(nodeH2Handler.sessionPool.size).toBe(1);
        // @ts-ignore: access private property
        expect(nodeH2Handler.sessions.length).toBe(1);
        expect(session.destroyed).toBe(false);
        nodeH2Handler.destroy();
        // @ts-ignore: access private property
        expect(nodeH2Handler.sessionPool.size).toBe(0);
        // @ts-ignore: access private property
        expect(nodeH2Handler.sessions.length).toBe(0);
        expect(session.destroyed).toBe(true);
      });
    });

    describe("abortSignal", () => {
      it("will not create session if request already aborted", async () => {
        // @ts-ignore: access private property
        expect(nodeH2Handler.sessionPool.size).toBe(0);
        await expect(
          nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {
            abortSignal: {
              aborted: true,
              onabort: null,
            },
          })
        ).rejects.toHaveProperty("name", "AbortError");
        // @ts-ignore: access private property
        expect(nodeH2Handler.sessionPool.size).toBe(0);
      });

      it("will not create request on session if request already aborted", async () => {
        // Create a session by sending a request.
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

        // @ts-ignore: access private property
        const session: ClientHttp2Session = nodeH2Handler.sessions[0];
        const requestSpy = jest.spyOn(session, "request");

        await expect(
          nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {
            abortSignal: {
              aborted: true,
              onabort: null,
            },
          })
        ).rejects.toHaveProperty("name", "AbortError");
        expect(requestSpy.mock.calls.length).toBe(0);
      });

      it("will close request on session when aborted", async () => {
        const abortController = new AbortController();
        mockH2Server.removeAllListeners("request");
        mockH2Server.on("request", (request: any, response: any) => {
          abortController.abort();
          return createResponseFunction(mockResponse);
        });

        await expect(
          nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {
            abortSignal: abortController.signal,
          })
        ).rejects.toHaveProperty("name", "AbortError");
      });
    });
  });

  describe("requestTimeout", () => {
    const requestTimeout = 200;

    describe("does not throw error when request not timed out", () => {
      it("disableSessionCache: false (default)", async () => {
        mockH2Server.removeAllListeners("request");
        mockH2Server.on("request", createResponseFunctionWithDelay(mockResponse, requestTimeout - 100));

        nodeH2Handler = new NodeHttp2Handler({ requestTimeout });
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});
      });

      it("disableSessionCache: true", async () => {
        mockH2Server.removeAllListeners("request");
        mockH2Server.on("request", createResponseFunctionWithDelay(mockResponse, requestTimeout - 100));

        nodeH2Handler = new NodeHttp2Handler({ requestTimeout, disableSessionCache: true });
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});
      });
    });

    describe("throws timeoutError on requestTimeout", () => {
      it("disableSessionCache: false (default)", async () => {
        mockH2Server.removeAllListeners("request");
        mockH2Server.on("request", createResponseFunctionWithDelay(mockResponse, requestTimeout + 100));

        nodeH2Handler = new NodeHttp2Handler({ requestTimeout });
        await rejects(nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {}), {
          name: "TimeoutError",
          message: `Stream timed out because of no activity for ${requestTimeout} ms`,
        });
      });

      it("disableSessionCache: true", async () => {
        mockH2Server.removeAllListeners("request");
        mockH2Server.on("request", createResponseFunctionWithDelay(mockResponse, requestTimeout + 100));

        nodeH2Handler = new NodeHttp2Handler({ requestTimeout, disableSessionCache: true });
        await rejects(nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {}), {
          name: "TimeoutError",
          message: `Stream timed out because of no activity for ${requestTimeout} ms`,
        });
      });
    });
  });

  describe("sessionTimeout", () => {
    const sessionTimeout = 200;

    describe("destroys session on sessionTimeout", () => {
      it("disableSessionCache: false (default)", async (done) => {
        nodeH2Handler = new NodeHttp2Handler({ sessionTimeout });
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

        const authority = `${protocol}//${hostname}:${port}`;
        // @ts-ignore: access private property
        const session: ClientHttp2Session = nodeH2Handler.sessions[0];
        expect(session.closed).toBe(false);
        // @ts-ignore: access private property
        expect(nodeH2Handler.sessionPool.get(authority)).toBeDefined();
        setTimeout(() => {
          expect(session.closed).toBe(true);
          expect(session.destroyed).toBe(false);
          // @ts-ignore: access private property
          expect(nodeH2Handler.sessionPool.get(authority)).not.toBeDefined();
          done();
        }, sessionTimeout + 100);
      });

      it("disableSessionCache: true", async (done) => {
        nodeH2Handler = new NodeHttp2Handler({ sessionTimeout, disableSessionCache: true });
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

        // @ts-ignore: access private property
        const session: ClientHttp2Session = nodeH2Handler.sessions[0];
        expect(session.closed).toBe(false);
        setTimeout(() => {
          expect(session.closed).toBe(true);
          expect(session.destroyed).toBe(false);
          done();
        }, sessionTimeout + 100);
      });
    });
  });

  describe("disableSessionCache", () => {
    beforeEach(() => {
      nodeH2Handler = new NodeHttp2Handler({
        disableSessionCache: true,
      });
    });

    describe("number calls to http2.connect", () => {
      it("is zero on initialization", () => {
        const connectSpy = jest.spyOn(http2, "connect");
        expect(connectSpy).not.toHaveBeenCalled();
      });

      it("is one when request is made", async () => {
        const connectSpy = jest.spyOn(http2, "connect");

        // Make single request.
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

        const authority = `${protocol}//${hostname}:${port}`;
        expect(connectSpy).toHaveBeenCalledTimes(1);
        expect(connectSpy).toHaveBeenCalledWith(authority);
      });

      it("is many if multiple requests are made on same URL", async () => {
        const connectSpy = jest.spyOn(http2, "connect");

        // Make two requests.
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

        const authority = `${protocol}//${hostname}:${port}`;
        expect(connectSpy).toHaveBeenCalledTimes(2);
        expect(connectSpy).toHaveBeenNthCalledWith(1, authority);
        expect(connectSpy).toHaveBeenNthCalledWith(2, authority);
      });

      it("is many if requests are made on different URLs", async () => {
        const connectSpy = jest.spyOn(http2, "connect");

        // Make first request on default URL.
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

        const port2 = port + 1;
        const mockH2Server2 = createMockHttp2Server().listen(port2);
        mockH2Server2.on("request", createResponseFunction(mockResponse));

        // Make second request on URL with port2.
        await nodeH2Handler.handle(new HttpRequest({ ...getMockReqOptions(), port: port2 }), {});

        const authorityPrefix = `${protocol}//${hostname}`;
        expect(connectSpy).toHaveBeenCalledTimes(2);
        expect(connectSpy).toHaveBeenNthCalledWith(1, `${authorityPrefix}:${port}`);
        expect(connectSpy).toHaveBeenNthCalledWith(2, `${authorityPrefix}:${port2}`);
        mockH2Server2.close();
      });
    });

    describe("destroy", () => {
      it("destroys session and clears connections", async () => {
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

        // @ts-ignore: access private property
        const session: ClientHttp2Session = nodeH2Handler.sessions[0];

        // @ts-ignore: access private property
        expect(nodeH2Handler.sessions.length).toBe(1);
        expect(session.destroyed).toBe(false);
        nodeH2Handler.destroy();
        // @ts-ignore: access private property
        expect(nodeH2Handler.sessions.length).toBe(0);
        expect(session.destroyed).toBe(true);
      });
    });
  });
});
