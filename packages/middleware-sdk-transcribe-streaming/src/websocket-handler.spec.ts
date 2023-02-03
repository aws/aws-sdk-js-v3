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
    expect.assertions(4);
    const originalFn = setTimeout;
    (global as any).setTimeout = jest.fn().mockImplementation(setTimeout);
    const connectionTimeout = 1000;
    const handler = new WebSocketHandler({ connectionTimeout });
    //Using Node stream is fine because they are also async iterables.
    const payload = new PassThrough();
    try {
      await handler.handle(
        new HttpRequest({
          body: payload,
          hostname: "localhost:9876", //invalid websocket endpoint
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
    }
    (global as any).setTimeout = originalFn;
  });
});
