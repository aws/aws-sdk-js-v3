import { AbortController } from "@aws-sdk/abort-controller";
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { rejects } from "assert";
import http2, { ClientHttp2Session, ClientHttp2Stream, constants, Http2Server, Http2Stream } from "http2";
import { Duplex } from "stream";
import { promisify } from "util";

import { NodeHttp2ConnectionPool } from "./node-http2-connection-pool";
import { NodeHttp2Handler, NodeHttp2HandlerOptions } from "./node-http2-handler";
import { createMockHttp2Server, createResponseFunction, createResponseFunctionWithDelay } from "./server.mock";

describe(NodeHttp2Handler.name, () => {
  let nodeH2Handler: NodeHttp2Handler;

  const protocol = "http:";
  const hostname = "localhost";
  const port = 45321;
  let mockH2Server: any = undefined;
  let mockH2Servers: Record<number, Http2Server> = {};

  const authority = `${protocol}//${hostname}:${port}/`;
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
    mockH2Servers = {
      45321: createMockHttp2Server().listen(port),
      45322: createMockHttp2Server().listen(port + 1),
      45323: createMockHttp2Server().listen(port + 2),
      45324: createMockHttp2Server().listen(port + 3),
    };
    mockH2Server = mockH2Servers[port];
    mockH2Server.on("request", createResponseFunction(mockResponse));
  });

  afterEach(() => {
    mockH2Server.removeAllListeners("request");
    jest.clearAllMocks();
    for (const p in mockH2Servers) {
      mockH2Servers[p].removeAllListeners("request");
      mockH2Servers[p].close();
    }
  });

  describe.each([
    ["undefined", undefined],
    ["empty object", {}],
    ["undefined provider", async () => void 0],
    ["empty object provider", async () => ({})],
  ])("without options in constructor parameter of %s", (_, option) => {
    let createdSessions!: ClientHttp2Session[];
    const connectReal = http2.connect;
    let connectSpy!: jest.SpiedFunction<typeof http2.connect>;

    beforeEach(() => {
      createdSessions = [];
      connectSpy = jest.spyOn(http2, "connect").mockImplementation((...args) => {
        const session = connectReal(...args);
        jest.spyOn(session, "ref");
        jest.spyOn(session, "unref");
        jest.spyOn(session, "settings");
        createdSessions.push(session);
        return session;
      });

      nodeH2Handler = new NodeHttp2Handler(option);
    });

    const closeConnection = async (response: HttpResponse) => {
      const responseBody = response.body as ClientHttp2Stream;
      const closePromise = new Promise((resolve) => responseBody.once("close", resolve));
      responseBody.destroy();
      await closePromise;
    };

    // Keeping node alive while request is open.
    const expectSessionCreatedAndReferred = (session: ClientHttp2Session, requestCount = 1) => {
      expect(session.ref).toHaveBeenCalledTimes(requestCount);
      expect(session.unref).toHaveBeenCalledTimes(1);
    };

    // No longer keeping node alive
    const expectSessionCreatedAndUnreffed = (session: ClientHttp2Session, requestCount = 1) => {
      expect(session.ref).toHaveBeenCalledTimes(requestCount);
      expect(session.unref).toHaveBeenCalledTimes(requestCount + 1);
    };

    afterEach(() => {
      nodeH2Handler.destroy();
    });

    it("has metadata", () => {
      expect(nodeH2Handler.metadata.handlerProtocol).toContain("h2");
    });

    describe("number calls to http2.connect", () => {
      it("is zero on initialization", () => {
        expect(connectSpy).not.toHaveBeenCalled();
      });

      it("is one when request is made", async () => {
        // Make single request.
        const { response } = await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

        expect(connectSpy).toHaveBeenCalledTimes(1);
        expect(connectSpy).toHaveBeenCalledWith(authority);

        expectSessionCreatedAndReferred(createdSessions[0]);
        await closeConnection(response);
        expectSessionCreatedAndUnreffed(createdSessions[0]);
      });

      it("is one if multiple requests are made on same URL", async () => {
        const connectSpy = jest.spyOn(http2, "connect");

        // Make two requests.
        const { response: response1 } = await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});
        const { response: response2 } = await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

        expect(connectSpy).toHaveBeenCalledTimes(1);
        expect(connectSpy).toHaveBeenCalledWith(authority);

        expectSessionCreatedAndReferred(createdSessions[0], 2);
        await closeConnection(response1);
        await closeConnection(response2);
        expectSessionCreatedAndUnreffed(createdSessions[0], 2);
      });

      it("is many if requests are made on different URLs", async () => {
        const connectSpy = jest.spyOn(http2, "connect");

        // Make first request on default URL.
        const { response: response1 } = await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

        const port2 = port + 1;
        const mockH2Server2 = mockH2Servers[port2];
        mockH2Server2.on("request", createResponseFunction(mockResponse));

        // Make second request on URL with port2.
        const { response: response2 } = await nodeH2Handler.handle(
          new HttpRequest({ ...getMockReqOptions(), port: port2 }),
          {}
        );

        const authorityPrefix = `${protocol}//${hostname}`;
        expect(connectSpy).toHaveBeenCalledTimes(2);
        expect(connectSpy).toHaveBeenNthCalledWith(1, `${authorityPrefix}:${port}/`);
        expect(connectSpy).toHaveBeenNthCalledWith(2, `${authorityPrefix}:${port2}/`);
        mockH2Server2.close();

        expectSessionCreatedAndReferred(createdSessions[0]);
        expectSessionCreatedAndReferred(createdSessions[1]);
        await closeConnection(response1);
        await closeConnection(response2);
        expectSessionCreatedAndUnreffed(createdSessions[0]);
        expectSessionCreatedAndUnreffed(createdSessions[1]);
      });
    });

    describe("errors", () => {
      const UNEXPECTEDLY_CLOSED_REGEX = /closed|destroy|cancel|did not get a response/i;
      it("handles goaway frames", async () => {
        const port3 = port + 2;
        const mockH2Server3 = mockH2Servers[port3];
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

        // Not keeping node alive
        expect(createdSessions).toHaveLength(3);
        expectSessionCreatedAndUnreffed(createdSessions[0]);
        expectSessionCreatedAndUnreffed(createdSessions[1]);
        expectSessionCreatedAndUnreffed(createdSessions[2]);

        // should be able to recover from goaway after reconnecting to a server
        // that doesn't send goaway, and reuse the TCP connection (Http2Session)
        shouldSendGoAway = false;
        mockH2Server3.on("request", createResponseFunction(mockResponse));
        const result = await nodeH2Handler.handle(req, {});
        const resultReader = result.response.body;

        // Keeping node alive
        expect(createdSessions).toHaveLength(4);
        expectSessionCreatedAndReferred(createdSessions[3]);

        // ...and validate that the mocked response is received
        const responseBody = await new Promise((resolve) => {
          const buffers: any[] = [];
          resultReader.on("data", (chunk) => buffers.push(chunk));
          resultReader.on("close", () => {
            resolve(Buffer.concat(buffers).toString("utf8"));
          });
        });
        expect(responseBody).toBe("test");
        expect(establishedConnections).toBe(4);
        expect(numRequests).toBe(4);
        mockH2Server3.close();

        // Not keeping node alive
        expect(createdSessions).toHaveLength(4);
        expectSessionCreatedAndUnreffed(createdSessions[3]);
      });

      it.each([
        ["destroy", port + 2],
        ["close", port + 3],
      ])("handles servers calling connections %s", async (func, port) => {
        const mockH2Server4 = mockH2Servers[port];
        let establishedConnections = 0;
        let numRequests = 0;

        mockH2Server4.on("stream", (request: Http2Stream) => {
          numRequests += 1;
          request.session[func]();
        });
        mockH2Server4.on("connection", () => {
          establishedConnections += 1;
        });
        const req = new HttpRequest({ ...getMockReqOptions(), port });
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
        mockH2Server4.close();

        // Not keeping node alive
        expect(createdSessions).toHaveLength(3);
        expectSessionCreatedAndUnreffed(createdSessions[0]);
        expectSessionCreatedAndUnreffed(createdSessions[1]);
        expectSessionCreatedAndUnreffed(createdSessions[2]);
      });
    });

    describe("destroy", () => {
      it("destroys session and clears sessionCache", async () => {
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

        // @ts-ignore: access private property
        const session: ClientHttp2Session = nodeH2Handler.connectionManager.sessionCache.get(authority).sessions[0];

        // @ts-ignore: access private property
        expect(nodeH2Handler.connectionManager.sessionCache.size).toBe(1);
        expect(session.destroyed).toBe(false);
        nodeH2Handler.destroy();
        // @ts-ignore: access private property
        expect(nodeH2Handler.connectionManager.sessionCache.size).toBe(0);
        expect(session.destroyed).toBe(true);
      });
    });

    describe("abortSignal", () => {
      it("will not create session if request already aborted", async () => {
        // @ts-ignore: access private property
        expect(nodeH2Handler.connectionManager.sessionCache.size).toBe(0);
        await expect(
          nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {
            abortSignal: {
              aborted: true,
              onabort: null,
            },
          })
        ).rejects.toHaveProperty("name", "AbortError");
        // @ts-ignore: access private property
        expect(nodeH2Handler.connectionManager.sessionCache.size).toBe(0);
      });

      it("will not create request on session if request already aborted", async () => {
        // Create a session by sending a request.
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

        // @ts-ignore: access private property
        const session: ClientHttp2Session = nodeH2Handler.connectionManager.sessionCache.get(authority).sessions[0];
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
      it.each([
        ["static object", { requestTimeout }],
        ["object provider", async () => ({ requestTimeout })],
      ])("disableConcurrentStreams: false (default) in constructor parameter of %s", async (_, options) => {
        mockH2Server.removeAllListeners("request");
        mockH2Server.on("request", createResponseFunctionWithDelay(mockResponse, requestTimeout - 100));

        nodeH2Handler = new NodeHttp2Handler(options);
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});
      });

      it.each([
        ["static object", { requestTimeout, disableConcurrentStreams: true }],
        ["object provider", async () => ({ requestTimeout, disableConcurrentStreams: true })],
      ])("disableConcurrentStreams: true in constructor parameter of %s", async (_, options) => {
        mockH2Server.removeAllListeners("request");
        mockH2Server.on("request", createResponseFunctionWithDelay(mockResponse, requestTimeout - 100));

        nodeH2Handler = new NodeHttp2Handler(options);
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});
      });
    });

    describe("throws timeoutError on requestTimeout", () => {
      it.each([
        ["static object", { requestTimeout }],
        ["object provider", async () => ({ requestTimeout })],
      ])("disableConcurrentStreams: false (default) in constructor parameter of %s", async (_, options) => {
        mockH2Server.removeAllListeners("request");
        mockH2Server.on("request", createResponseFunctionWithDelay(mockResponse, requestTimeout + 100));

        nodeH2Handler = new NodeHttp2Handler(options);
        await rejects(nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {}), {
          name: "TimeoutError",
          message: `Stream timed out because of no activity for ${requestTimeout} ms`,
        });
      });

      it.each([
        ["object provider", async () => ({ requestTimeout })],
        ["static object", { requestTimeout }],
      ])("disableConcurrentStreams: true in constructor parameter of %s", async () => {
        mockH2Server.removeAllListeners("request");
        mockH2Server.on("request", createResponseFunctionWithDelay(mockResponse, requestTimeout + 100));

        nodeH2Handler = new NodeHttp2Handler({ requestTimeout, disableConcurrentStreams: true });
        await rejects(nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {}), {
          name: "TimeoutError",
          message: `Stream timed out because of no activity for ${requestTimeout} ms`,
        });
      });
    });
  });

  describe("sessionTimeout", () => {
    const sessionTimeout = 200;

    describe("destroys sessions on sessionTimeout", () => {
      it.each([
        ["object provider", async () => ({ sessionTimeout })],
        ["static object", { sessionTimeout }],
      ])("disableConcurrentStreams: false (default) in constructor parameter of %s", async (_, options) => {
        nodeH2Handler = new NodeHttp2Handler(options);
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), { requestTimeout: sessionTimeout });

        // @ts-ignore: access private property
        const session: ClientHttp2Session = nodeH2Handler.connectionManager.sessionCache.get(authority).sessions[0];
        expect(session.destroyed).toBe(false);
        // @ts-ignore: access private property
        expect(nodeH2Handler.connectionManager.sessionCache.get(authority).sessions.length).toStrictEqual(1);
        await promisify(setTimeout)(sessionTimeout + 100);
        expect(session.destroyed).toBe(true);
        // @ts-ignore: access private property
        expect(nodeH2Handler.connectionManager.sessionCache.get(authority).sessions.length).toStrictEqual(0);
      });

      it.each([
        ["object provider", async () => ({ sessionTimeout, disableConcurrentStreams: true })],
        ["static object", { sessionTimeout, disableConcurrentStreams: true }],
      ])("disableConcurrentStreams: true in constructor parameter of %s", async (_, options) => {
        let session;

        nodeH2Handler = new NodeHttp2Handler(options);

        mockH2Server.removeAllListeners("request");
        mockH2Server.on("request", (request: any, response: any) => {
          // @ts-ignore: access private property
          session = nodeH2Handler.connectionManager.sessionCache.get(authority).sessions[0];
          createResponseFunction(mockResponse)(request, response);
        });
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

        expect(session.destroyed).toBe(false);
        await promisify(setTimeout)(sessionTimeout + 100);
        expect(session.destroyed).toBe(true);
      });
    });
  });

  describe("maxConcurrency", () => {
    it.each([
      ["static object", {}],
      ["static object", { maxConcurrentStreams: 0 }],
      ["static object", { maxConcurrentStreams: 1 }],
      ["static object", { maxConcurrentStreams: 2 }],
      ["static object", { maxConcurrentStreams: 3 }],
    ])("verify session settings' maxConcurrentStreams", async (_, options: NodeHttp2HandlerOptions) => {
      nodeH2Handler = new NodeHttp2Handler(options);
      await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

      // @ts-ignore: access private property
      const session = nodeH2Handler.connectionManager.sessionCache.get(authority).sessions[0];

      if (options.maxConcurrentStreams) {
        expect(session.localSettings.maxConcurrentStreams).toBe(options.maxConcurrentStreams);
        expect(session.settings).toHaveBeenCalled();
      } else {
        expect(session.localSettings.maxConcurrentStreams).toBe(4294967295);
      }
    });

    it("verify error thrown when maxConcurrentStreams is negative", async () => {
      let error: Error | undefined = undefined;
      try {
        nodeH2Handler = new NodeHttp2Handler({ maxConcurrentStreams: -1 });
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});
      } catch (e) {
        error = e;
      }

      expect(error).toBeDefined();
      expect(error!.message).toEqual('Invalid value for setting "maxConcurrentStreams": -1');
    });
  });

  it("will throw reasonable error when connection aborted abnormally", async () => {
    nodeH2Handler = new NodeHttp2Handler();
    // Create a session by sending a request.
    await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});
    // @ts-ignore: access private property
    const session: ClientHttp2Session = nodeH2Handler.connectionManager.sessionCache.get(authority).sessions[0];
    const fakeStream = new Duplex() as ClientHttp2Stream;
    const fakeRstCode = 1;
    // @ts-ignore: fake result code
    fakeStream.rstCode = fakeRstCode;
    jest.spyOn(session, "request").mockImplementation(() => fakeStream);
    // @ts-ignore: access private property
    nodeH2Handler.connectionManager.sessionCache.set(authority, new NodeHttp2ConnectionPool([session]));
    // Delay response so that onabort is called earlier
    setTimeout(() => {
      fakeStream.emit("aborted");
    }, 0);

    await expect(nodeH2Handler.handle(new HttpRequest({ ...getMockReqOptions() }), {})).rejects.toHaveProperty(
      "message",
      `HTTP/2 stream is abnormally aborted in mid-communication with result code ${fakeRstCode}.`
    );
  });

  it("will throw reasonable error when frameError is thrown", async () => {
    nodeH2Handler = new NodeHttp2Handler();
    // Create a session by sending a request.
    await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});
    // @ts-ignore: access private property
    const session: ClientHttp2Session = nodeH2Handler.connectionManager.sessionCache.get(authority).sessions[0];
    const fakeStream = new Duplex() as ClientHttp2Stream;
    jest.spyOn(session, "request").mockImplementation(() => fakeStream);
    // @ts-ignore: access private property
    nodeH2Handler.connectionManager.sessionCache.set(authority, new NodeHttp2ConnectionPool([session]));
    // Delay response so that onabort is called earlier
    setTimeout(() => {
      fakeStream.emit("frameError", "TYPE", "CODE", "ID");
    }, 0);

    await expect(nodeH2Handler.handle(new HttpRequest({ ...getMockReqOptions() }), {})).rejects.toHaveProperty(
      "message",
      `Frame type id TYPE in stream id ID has failed with code CODE.`
    );
  });

  describe.each([
    ["object provider", async () => ({ disableConcurrentStreams: true })],
    ["static object", { disableConcurrentStreams: true }],
  ])("disableConcurrentStreams in constructor parameter of %s", (_, options) => {
    beforeEach(() => {
      nodeH2Handler = new NodeHttp2Handler(options);
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
        expect(connectSpy).toHaveBeenCalledTimes(1);
        expect(connectSpy).toHaveBeenCalledWith(authority);
      });

      it("is many if multiple requests are made on same URL", async () => {
        const connectSpy = jest.spyOn(http2, "connect");

        // Make two requests.
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

        expect(connectSpy).toHaveBeenCalledTimes(2);
        expect(connectSpy).toHaveBeenNthCalledWith(1, authority);
        expect(connectSpy).toHaveBeenNthCalledWith(2, authority);
      });

      it("is many if requests are made on different URLs", async () => {
        const connectSpy = jest.spyOn(http2, "connect");

        // Make first request on default URL.
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

        const port2 = port + 1;
        const mockH2Server2 = mockH2Servers[port2];
        mockH2Server2.on("request", createResponseFunction(mockResponse));

        // Make second request on URL with port2.
        await nodeH2Handler.handle(new HttpRequest({ ...getMockReqOptions(), port: port2 }), {});

        const authorityPrefix = `${protocol}//${hostname}`;
        expect(connectSpy).toHaveBeenCalledTimes(2);
        expect(connectSpy).toHaveBeenNthCalledWith(1, `${authorityPrefix}:${port}/`);
        expect(connectSpy).toHaveBeenNthCalledWith(2, `${authorityPrefix}:${port2}/`);
        mockH2Server2.close();
      });
    });

    describe("destroy", () => {
      it("destroys session and empties sessionCache", async () => {
        await nodeH2Handler.handle(new HttpRequest(getMockReqOptions()), {});

        // @ts-ignore: access private property
        const session: ClientHttp2Session = nodeH2Handler.connectionManager.sessionCache.get(authority).sessions[0];

        // @ts-ignore: access private property
        expect(nodeH2Handler.connectionManager.sessionCache.size).toBe(1);
        expect(session.destroyed).toBe(false);

        nodeH2Handler.destroy();
        // @ts-ignore: access private property
        expect(nodeH2Handler.connectionManager.sessionCache.size).toBe(0);
        expect(session.destroyed).toBe(true);
      });
    });
  });

  it("sends the request to the correct url", async () => {
    const server = createMockHttp2Server();
    server.on("request", (request, response) => {
      expect(request.url).toBe("http://foo:bar@localhost/foo/bar?foo=bar#foo");
      response.statusCode = 200;
    });
    const handler = new NodeHttp2Handler({});
    await handler.handle({
      ...getMockReqOptions(),
      username: "foo",
      password: "bar",
      path: "/foo/bar",
      query: { foo: "bar" },
      fragment: "foo",
    } as any);
    handler.destroy();
  });
});
