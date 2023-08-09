/**
 * @jest-environment jsdom
 */
import { EventStreamCodec } from "@smithy/eventstream-codec";
import { Decoder, Encoder, FinalizeHandler, FinalizeHandlerArguments, HttpRequest, MessageSigner } from "@smithy/types";
import { ReadableStream, TransformStream } from "web-streams-polyfill";

import { EventStreamPayloadHandler } from "./EventStreamPayloadHandler";
import { getEventSigningTransformStream } from "./get-event-signing-stream";
jest.mock("./get-event-signing-stream");
jest.mock("@smithy/eventstream-codec");

describe(EventStreamPayloadHandler.name, () => {
  const mockSigner: MessageSigner = {
    sign: jest.fn(),
    signMessage: jest.fn(),
  };
  const mockUtf8Decoder: Decoder = jest.fn();
  const mockUtf8encoder: Encoder = jest.fn();
  const mockNextHandler: FinalizeHandler<any, any> = jest.fn();
  const originalTransformStreamCtor = window.TransformStream;

  beforeEach(() => {
    window.TransformStream = TransformStream;
    (getEventSigningTransformStream as unknown as jest.Mock).mockImplementation(() => new TransformStream());
    (EventStreamCodec as jest.Mock).mockImplementation(() => {});
  });

  afterEach(() => {
    window.TransformStream = originalTransformStreamCtor;
    jest.clearAllMocks();
  });

  it("should throw if request payload is not a stream", () => {
    const handler = new EventStreamPayloadHandler({
      messageSigner: () => Promise.resolve(mockSigner),
      utf8Decoder: mockUtf8Decoder,
      utf8Encoder: mockUtf8encoder,
    });
    expect(
      handler.handle(mockNextHandler, {
        request: { body: "body" } as HttpRequest,
        input: {},
      })
    ).rejects.toThrow("Eventstream payload must be a ReadableStream.");
  });

  it("should close the request payload if downstream middleware throws", async () => {
    const mockError = new Error("mockError");
    (mockNextHandler as any).mockImplementationOnce(() => Promise.reject(mockError));

    const handler = new EventStreamPayloadHandler({
      messageSigner: () => Promise.resolve(mockSigner),
      utf8Decoder: mockUtf8Decoder,
      utf8Encoder: mockUtf8encoder,
    });
    const mockRequest = { body: new ReadableStream() } as HttpRequest;

    try {
      await handler.handle(mockNextHandler, {
        request: mockRequest,
        input: {},
      });
      fail(`Expected ${mockError} to be thrown.`);
    } catch (error) {
      expect(error).toBe(mockError);
    }

    // Stream unlocked means the stream is canceled.
    expect((mockRequest.body as ReadableStream).locked).toEqual(false);
  });

  it("should call event signer with request signature from signing middleware", async () => {
    const priorSignature = "1234567890";
    const authorization = `AWS4-HMAC-SHA256 Credential=AKID/20200510/us-west-2/foo/aws4_request, SignedHeaders=host, Signature=${priorSignature}`;

    const mockRequest = {
      body: new ReadableStream(),
      headers: { authorization },
    } as any;

    const handler = new EventStreamPayloadHandler({
      messageSigner: () => Promise.resolve(mockSigner),
      utf8Decoder: mockUtf8Decoder,
      utf8Encoder: mockUtf8encoder,
    });

    await handler.handle(mockNextHandler, {
      request: mockRequest,
      input: {},
    });

    expect(getEventSigningTransformStream).toHaveBeenCalledTimes(1);
    expect(getEventSigningTransformStream).toHaveBeenCalledWith(priorSignature, expect.anything(), expect.anything());
  });

  it("should call event signer with request signature from query string if no signature headers are found", async () => {
    const priorSignature = "1234567890";
    const authorization = `AWS4-HMAC-SHA256 Credential=AKID/20200510/us-west-2/foo/aws4_request, SignedHeaders=host, Signature=`;

    const mockRequest = {
      body: new ReadableStream(),
      headers: { authorization },
      query: {
        "X-Amz-Signature": priorSignature,
      },
    } as any;

    const handler = new EventStreamPayloadHandler({
      messageSigner: () => Promise.resolve(mockSigner),
      utf8Decoder: mockUtf8Decoder,
      utf8Encoder: mockUtf8encoder,
    });

    await handler.handle(mockNextHandler, {
      request: mockRequest,
      input: {},
    });

    expect(getEventSigningTransformStream).toHaveBeenCalledTimes(1);
    expect(getEventSigningTransformStream).toHaveBeenCalledWith(priorSignature, expect.anything(), expect.anything());
  });

  it("should start piping to request payload through event signer if downstream middleware returns", async () => {
    const authorization =
      "AWS4-HMAC-SHA256 Credential=AKID/20200510/us-west-2/foo/aws4_request, SignedHeaders=host, Signature=1234567890";
    const originalPayload = new TransformStream();
    const mockRequest = {
      body: originalPayload.readable,
      headers: { authorization },
    } as any;
    const handler = new EventStreamPayloadHandler({
      messageSigner: () => Promise.resolve(mockSigner),
      utf8Decoder: mockUtf8Decoder,
      utf8Encoder: mockUtf8encoder,
    });
    // Middleware that returns the request from payload handler.
    (mockNextHandler as any).mockImplementationOnce((args: FinalizeHandlerArguments<any>) => {
      const handledRequest = args.request as HttpRequest;
      // This middleware returns the output request from eventstream payload handler
      return Promise.resolve({ output: { handledRequest } });
    });
    const {
      output: { handledRequest },
    } = await handler.handle(mockNextHandler, {
      request: mockRequest,
      input: {},
    });
    // Expect the output payload stream from handler is not the exact stream supplied to the handler
    expect(handledRequest.body).not.toBe(originalPayload.readable);
    // Expect the data from the output payload from eventstream payload handler the same as from the
    // stream supplied to the handler.
    const chunks: any = [];
    const reader = handledRequest.body.getReader();
    const push = () => {
      reader.read().then(({ done, value }) => {
        if (!done) {
          chunks.push(value);
          push();
        }
      });
    };
    push();

    const writer = originalPayload.writable.getWriter();
    writer.ready.then(() => writer.write(Buffer.from("Some Data")));
    await writer.ready;
    await writer.close();
    await writer.closed;

    const collectedData = Buffer.concat(chunks).toString("utf8");
    expect(collectedData).toEqual("Some Data");
  });
});
