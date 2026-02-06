import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { BedrockRuntime, BidirectionalOutputPayloadPart$ } from "@aws-sdk/client-bedrock-runtime";
import { RekognitionStreaming } from "@aws-sdk/client-rekognitionstreaming";
import { LogLevel } from "@aws-sdk/config/logger";
import { EventStreamCodec } from "@smithy/eventstream-codec";
import { toBase64 } from "@smithy/util-base64";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";
import { WebSocket } from "mock-socket";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";
import WS from "vitest-websocket-mock";

import { WebSocketFetchHandler } from "./WebSocketFetchHandler";

describe("middleware-websocket", () => {
  const logger = {
    trace() {},
    debug() {},
    info() {},
    warn() {},
    error() {},
  };

  describe(RekognitionStreaming.name, () => {
    it("sets protocol, headers, moves params to query, and signs in the query", async () => {
      const client = new RekognitionStreaming({
        region: "us-west-2",
        logger,
        credentials: {
          accessKeyId: "INTEG",
          secretAccessKey: "INTEG",
        },
      });
      requireRequestsFrom(client).toMatch({
        protocol: "wss:",
        path: "/start-face-liveness-session-websocket",
        headers: {
          host: "streaming-rekognition.us-west-2.amazonaws.com",
          "content-type": /^undefined$/,
          "x-amz-content-sha256": /^undefined$/,
          "user-agent": /^aws-sdk-js/,
        },
        query: {
          "session-id": "abcd-1234",
          "video-width": "1024",
          "video-height": "1024",
          "challenge-versions": "a,b,c",
          "x-amz-user-agent": /^aws-sdk-js/,
          "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
          "X-Amz-Credential": /(.*?)\/(.*?)\/us-west-2\/rekognition\/aws4_request/,
          "X-Amz-Date": /./,
          "X-Amz-Expires": "60",
          "X-Amz-SignedHeaders": "host",
          "X-Amz-Signature": /./,
        },
      });
      client.config.requestHandler.metadata = {
        handlerProtocol: "websocket",
      };
      await client.startFaceLivenessSession({
        SessionId: "abcd-1234",
        VideoWidth: "1024",
        VideoHeight: "1024",
        ChallengeVersions: "a,b,c",
        LivenessRequestStream: (async function* () {})(),
      });
    });
  });

  describe("WebSocket Event Streams", () => {
    const mockHostname = "localhost:6855";
    const mockUrl = `ws://${mockHostname}/mock-websocket`;
    const logSink = vi.fn();
    const eventStreamCodec = new EventStreamCodec(toUtf8, fromUtf8);

    const flintstone = new BedrockRuntime({
      credentials: {
        accessKeyId: "INTEG",
        secretAccessKey: "INTEG",
      },
      region: "us-west-2",
      requestHandler: new (class extends WebSocketFetchHandler {
        async handle(request) {
          request.hostname = `localhost`;
          request.protocol = "ws:";
          request.port = 6855;
          request.path = "/mock-websocket";

          return super.handle(request);
        }
      })({
        logger: new LogLevel("debug", {
          ...console,
          debug(msg) {
            logSink(msg);
          },
        }),
      }),
    });

    const jsonCodec = flintstone.config.protocol.getPayloadCodec();
    const deserializer = jsonCodec.createDeserializer();

    beforeEach(() => {
      (global as any).WebSocket = WebSocket;
    });

    afterEach(() => {
      WS.clean();
    });

    it("should transform user input asyncIterable to socket events", async () => {
      const server = new WS(mockUrl);

      const body: Uint8Array = fromUtf8(
        JSON.stringify({
          bytes: Buffer.from(new Uint8Array([48, 49, 50, 51, 52, 56, 57, 57, 57])).toString("base64"),
        })
      );

      const event = {
        headers: {
          ":event-type": {
            type: "string",
            value: "chunk",
          },
          ":content-type": {
            type: "string",
            value: "application/json",
          },
          ":message-type": {
            type: "string",
            value: "event",
          },
        },
        body,
      } as const;

      /**
       * Byte alignment:
       * 4 - message size
       * 4 - header size
       * 4 - prelude crc32
       * variable - headers
       * variable - body
       * 4 message crc32
       */
      const bytes = eventStreamCodec.encode(event);

      let receiveCount = 0;
      const [serverConfirmation, resolve, reject] = (() => {
        let resolve: (value?: unknown) => void;
        let reject: (value?: unknown) => void;
        const p = new Promise((res, rej) => {
          resolve = res;
          reject = rej;
        });
        return [p, resolve, reject];
      })();

      server.on("connection", async (socket) => {
        await server.connected;

        socket.send(toBase64(bytes));
        socket.send(toBase64(bytes));
        socket.send(toBase64(bytes));

        socket.on("message", async (data) => {
          socket.send(toBase64(bytes));

          try {
            const decoded = eventStreamCodec.decode(data as any);

            const view = new DataView(decoded.body.buffer, decoded.body.byteOffset, decoded.body.byteLength);
            const headerByteCount = view.getInt32(4);
            const bodyPosition = 12 + headerByteCount;
            const bodySlice = decoded.body.subarray(bodyPosition, -4);

            const deserialized = {
              headers: decoded.headers,
              body: await deserializer.read(BidirectionalOutputPayloadPart$, toUtf8(bodySlice)),
            };

            expect(deserialized.headers).toMatchObject({
              ":date": {
                type: "timestamp",
                value: expect.any(Date),
              },
              ":chunk-signature": {
                type: "binary",
                value: expect.any(Uint8Array),
              },
            });

            switch (receiveCount++) {
              case 0:
                expect(deserialized.body).toEqual({ bytes: new Uint8Array([0, 1, 2, 3]) });
                break;
              case 1:
                expect(deserialized.body).toEqual({ bytes: new Uint8Array([4, 5, 6, 7]) });
                break;
              case 2:
                expect(deserialized.body).toEqual({
                  bytes: new Uint8Array([8, 9, 10, 11]),
                });
                resolve();
                break;
              default:
                reject(new Error(`Exceeded expected message count=${receiveCount}`));
            }
          } catch (e) {
            reject(new Error(`In socket receiveCount=${receiveCount}`, { cause: e }));
          }
        });
      });

      const websocketResponse = await flintstone.invokeModelWithBidirectionalStream({
        modelId: "bedrock",
        body: {
          async *[Symbol.asyncIterator]() {
            yield {
              chunk: {
                bytes: new Uint8Array([0, 1, 2, 3]),
              },
            };

            yield {
              chunk: {
                bytes: new Uint8Array([4, 5, 6, 7]),
              },
            };

            yield {
              chunk: {
                bytes: new Uint8Array([8, 9, 10, 11]),
              },
            };

            // holds socket open for a bit after final input.
            // to receive server events.
            await new Promise((r) => setTimeout(r, 2000));
          },
        },
      });

      server.send(toBase64(bytes));

      expect(logSink).toHaveBeenCalledWith("@aws-sdk - ws connecting ws://localhost:6855/mock-websocket");
      await serverConfirmation;

      server.send(toBase64(bytes));
      server.send(toBase64(bytes));

      const responseChunks = [];
      for await (const event of websocketResponse.body) {
        responseChunks.push(event);
        expect(event).toEqual({
          chunk: {
            bytes: new Uint8Array([48, 49, 50, 51, 52, 56, 57, 57, 57]),
          },
        });
      }

      expect(responseChunks.length).toBe(10);
    });
  });
});
