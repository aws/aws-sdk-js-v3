import { HttpRequest } from "@aws-sdk/protocol-http";
import WS from "jest-websocket-mock";
import { WebSocket } from "mock-socket";
import { PassThrough } from "stream";

import { WebSocketHandler } from "./websocket-handler";

describe("WebSocketHandler", () => {
  const mockHostname = "localhost:6789";
  const mockUrl = `ws://${mockHostname}/`;

  beforeEach(() => {
    (global as any).WebSocket = WebSocket;
  });

  afterEach(() => {
    WS.clean();
    jest.clearAllMocks();
  });

  it("should contain protocol metadata", () => {
    const handler = new WebSocketHandler();
    expect(handler.metadata.handlerProtocol).toEqual("websocket");
  });

  it("populates socket in socket pool based on handle() requests", async () => {
    const handler = new WebSocketHandler();
    const server = new WS(mockUrl);

    // @ts-expect-error Property 'sockets' is private and only accessible within class 'WebSocketHandler'.
    expect(handler.sockets[mockUrl]).not.toBeDefined();

    await handler.handle(
      new HttpRequest({
        body: new PassThrough(),
        hostname: mockHostname,
        protocol: "ws:",
      })
    );

    // @ts-expect-error Property 'sockets' is private and only accessible within class 'WebSocketHandler'.
    expect(handler.sockets[mockUrl]).toBeDefined();
    // @ts-expect-error Property 'sockets' is private and only accessible within class 'WebSocketHandler'.
    expect(handler.sockets[mockUrl].length).toBe(1);

    await handler.handle(
      new HttpRequest({
        body: new PassThrough(),
        hostname: mockHostname,
        protocol: "ws:",
      })
    );

    // @ts-expect-error Property 'sockets' is private and only accessible within class 'WebSocketHandler'.
    expect(handler.sockets[mockUrl].length).toBe(2);
  });

  it("closes socket in socket pool on handler.destroy()", async () => {
    const handler = new WebSocketHandler();
    const server = new WS(mockUrl);

    await handler.handle(
      new HttpRequest({
        body: new PassThrough(),
        hostname: mockHostname,
        protocol: "ws:",
      })
    );

    // @ts-expect-error Property 'sockets' is private and only accessible within class 'WebSocketHandler'.
    const socket = handler.sockets[mockUrl][0];

    expect(socket.readyState).toBe(WebSocket.OPEN);
    handler.destroy();

    // Verify that socket.close() is called
    expect(socket.readyState).toBe(WebSocket.CLOSING);
  });

  it("should throw in output stream if input stream throws", async () => {
    expect.assertions(3);
    const handler = new WebSocketHandler();
    //Using Node stream is fine because they are also async iterables.
    const payload = new PassThrough();

    const server = new WS(mockUrl);

    const {
      response: { body: responsePayload },
    } = await handler.handle(
      new HttpRequest({
        body: payload,
        hostname: mockHostname,
        protocol: "ws:",
      })
    );

    await server.connected;
    payload.emit("error", new Error("FakeError"));

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for await (const chunk of responsePayload) {
        /** pass */
      }
    } catch (err) {
      expect(err).toBeDefined();
      expect(err.message).toEqual("FakeError");
      // @ts-expect-error Property 'sockets' is private and only accessible within class 'WebSocketHandler'.
      expect(handler.sockets[mockUrl].length).toBe(0);
    }
  });

  it("should return retryable error if cannot setup ws connection", async () => {
    expect.assertions(5);

    const originalFn = setTimeout;
    (global as any).setTimeout = jest.fn().mockImplementation(setTimeout);

    const connectionTimeout = 1000;
    const handler = new WebSocketHandler({ connectionTimeout });

    //Using Node stream is fine because they are also async iterables.
    const payload = new PassThrough();
    const mockInvalidHostname = "localhost:9876";
    const mockInvalidUrl = `ws://${mockInvalidHostname}/`;

    try {
      await handler.handle(
        new HttpRequest({
          body: payload,
          hostname: mockInvalidHostname, //invalid websocket endpoint
          protocol: "ws:",
        })
      );
    } catch (err) {
      expect(err).toBeDefined();
      expect(err.$metadata).toBeDefined();
      expect(err.$metadata.httpStatusCode >= 500).toBe(true);
      expect(
        ((global as any).setTimeout as jest.Mock).mock.calls.filter((args) => {
          //find the 'setTimeout' call from the websocket handler
          return args[0].toString().indexOf("$metadata") >= 0;
        })[0][1]
      ).toBe(connectionTimeout);
      // @ts-expect-error Property 'sockets' is private and only accessible within class 'WebSocketHandler'.
      expect(handler.sockets[mockInvalidUrl].length).toBe(0);
    }
    (global as any).setTimeout = originalFn;
  });
});
