import { EventStreamCodec } from "@smithy/eventstream-codec";
import { Decoder, Encoder, FinalizeHandler, FinalizeHandlerArguments, HttpRequest, MessageSigner } from "@smithy/types";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { EventStreamPayloadHandler } from "./EventStreamPayloadHandler";
import { getEventSigningTransformStream } from "./get-event-signing-stream";
vi.mock("./get-event-signing-stream");
vi.mock("@smithy/eventstream-codec");

describe(EventStreamPayloadHandler.name, () => {
  const mockSigner: MessageSigner = {
    sign: vi.fn(),
    signMessage: vi.fn(),
  };
  const mockUtf8Decoder: Decoder = vi.fn();
  const mockUtf8encoder: Encoder = vi.fn();
  const mockNextHandler: FinalizeHandler<any, any> = vi.fn();
  const originalTransformStreamCtor = window.TransformStream;

  beforeEach(() => {
    window.TransformStream = TransformStream;
    (getEventSigningTransformStream as unknown as any).mockImplementation(() => new TransformStream());
    vi.mocked(EventStreamCodec).mockImplementation(function () {});
  });

  afterEach(() => {
    window.TransformStream = originalTransformStreamCtor;
    vi.clearAllMocks();
  });

  it("should throw if request payload is not a stream", async () => {
    const handler = new EventStreamPayloadHandler({
      messageSigner: () => Promise.resolve(mockSigner),
      utf8Decoder: mockUtf8Decoder,
      utf8Encoder: mockUtf8encoder,
    });
    await expect(
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
    expect(getEventSigningTransformStream).toHaveBeenCalledWith(
      priorSignature,
      expect.anything(),
      expect.anything(),
      expect.anything()
    );
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
    expect(getEventSigningTransformStream).toHaveBeenCalledWith(
      priorSignature,
      expect.anything(),
      expect.anything(),
      expect.anything()
    );
  });

  it("should start piping regardless of whether the downstream resolves", async () => {
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

    const sourceStream = new ReadableStream({
      start(controller) {
        controller.enqueue(Buffer.from("Some Data"));
        controller.close();
      },
    });
    sourceStream.pipeThrough(originalPayload);

    (mockNextHandler as any).mockImplementationOnce(async (args: FinalizeHandlerArguments<any>) => {
      const handledRequest = args.request as HttpRequest;

      const reader = handledRequest.body.getReader();
      const { value } = await reader.read();
      const collected = Buffer.from(value).toString("utf8");

      // this means the stream is flowing without this downstream middleware
      // having resolved yet.
      expect(collected).toEqual("Some Data");

      return Promise.resolve({ output: { handledRequest } });
    });

    const {
      output: { handledRequest },
    } = await handler.handle(mockNextHandler, {
      request: mockRequest,
      input: {},
    });
    expect(handledRequest.body).not.toBe(originalPayload);
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
      reader.read().then(({ done, value }: { done: any; value: any }) => {
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

  /**
   * This test doesn't test our code. It is a reminder of how web streams work.
   */
  it("cancelling the readable side of a TransformStream propagates through its pipeline", async () => {
    const transform1 = new TransformStream();
    const transform2 = new TransformStream();

    const source = new ReadableStream({
      async start(controller) {
        controller.enqueue(Buffer.from("Some Data"));
        controller.enqueue(Buffer.from("Some More Data"));
        controller.close();
      },
    });

    source.pipeThrough(transform1).pipeThrough(transform2);

    const read: Uint8Array[] = [];

    const reader = transform2.readable.getReader();

    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        break;
      }
      read.push(value);
      await reader.cancel();
    }

    expect(read).toEqual([Buffer.from("Some Data")]);
  });

  it("if the handler's downstream throws, the stream's cancel method is called", async () => {
    const authorization =
      "AWS4-HMAC-SHA256 Credential=AKID/20200510/us-west-2/foo/aws4_request, SignedHeaders=host, Signature=1234567890";

    const sourceStream = new ReadableStream({
      start(controller) {
        controller.enqueue(Buffer.from("Some data"));
        controller.enqueue(Buffer.from("Some more data"));
        controller.close();
      },
    });
    sourceStream.cancel = vi.fn();

    const mockRequest = {
      body: sourceStream,
      headers: { authorization },
    } as any;

    const handler = new EventStreamPayloadHandler({
      messageSigner: () => Promise.resolve(mockSigner),
      utf8Decoder: mockUtf8Decoder,
      utf8Encoder: mockUtf8encoder,
    });

    (mockNextHandler as any).mockImplementationOnce(() => {
      return Promise.reject(new Error("test error"));
    });

    let err: any;
    try {
      await handler.handle(mockNextHandler, {
        request: mockRequest,
        input: {},
      });
    } catch (e) {
      err = e;
    }

    expect(err.message).toEqual("test error");
    expect(sourceStream.locked).toBe(true);
    expect(sourceStream.cancel).toHaveBeenCalledTimes(1);
  });
});
