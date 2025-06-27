import { EventStreamCodec } from "@smithy/eventstream-codec";
import { Decoder, Encoder, FinalizeHandler, FinalizeHandlerArguments, HttpRequest, MessageSigner } from "@smithy/types";
import { PassThrough, Readable } from "stream";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { EventSigningStream } from "./EventSigningStream";
import { EventStreamPayloadHandler } from "./EventStreamPayloadHandler";

vi.mock("./EventSigningStream");
vi.mock("@smithy/eventstream-codec");

describe(EventStreamPayloadHandler.name, () => {
  const collectData = (stream: Readable) => {
    const chunks: any = [];
    return new Promise((resolve, reject) => {
      stream.on("data", (chunk) => chunks.push(chunk));
      stream.on("error", reject);
      stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    });
  };

  const mockMessageSigner: MessageSigner = {
    sign: vi.fn(),
    signMessage: vi.fn(),
  };
  const mockUtf8Decoder: Decoder = vi.fn();
  const mockUtf8encoder: Encoder = vi.fn();
  const mockNextHandler: FinalizeHandler<any, any> = vi.fn();

  beforeEach(() => {
    (EventSigningStream as unknown as any).mockImplementation(() => new PassThrough());
    vi.mocked(EventStreamCodec).mockImplementation((() => {}) as any);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should throw if request payload is not a stream", async () => {
    const handler = new EventStreamPayloadHandler({
      messageSigner: () => Promise.resolve(mockMessageSigner),
      utf8Decoder: mockUtf8Decoder,
      utf8Encoder: mockUtf8encoder,
    });
    await expect(
      handler.handle(mockNextHandler, {
        request: { body: "body" } as HttpRequest,
        input: {},
      })
    ).rejects.toThrow("Eventstream payload must be a Readable stream.");
  });

  it("should close the request payload if downstream middleware throws", async () => {
    const mockError = new Error("mockError");
    (mockNextHandler as any).mockImplementationOnce(() => Promise.reject(mockError));

    const handler = new EventStreamPayloadHandler({
      messageSigner: () => Promise.resolve(mockMessageSigner),
      utf8Decoder: mockUtf8Decoder,
      utf8Encoder: mockUtf8encoder,
    });
    const mockRequest = { body: new PassThrough() } as HttpRequest;

    try {
      await handler.handle(mockNextHandler, {
        request: mockRequest,
        input: {},
      });
      fail(`Expected ${mockError} to be thrown.`);
    } catch (error) {
      expect(error).toBe(mockError);
    }

    // Expect stream is closed
    expect(mockRequest.body.writableEnded).toEqual(true);
  });

  it("should call event signer with request signature from signing middleware", async () => {
    const priorSignature = "1234567890";
    const authorization = `AWS4-HMAC-SHA256 Credential=AKID/20200510/us-west-2/foo/aws4_request, SignedHeaders=host, Signature=${priorSignature}`;

    const mockRequest = {
      body: new PassThrough(),
      headers: { authorization },
    } as any;

    const handler = new EventStreamPayloadHandler({
      messageSigner: () => Promise.resolve(mockMessageSigner),
      utf8Decoder: mockUtf8Decoder,
      utf8Encoder: mockUtf8encoder,
    });

    await handler.handle(mockNextHandler, {
      request: mockRequest,
      input: {},
    });

    expect(EventSigningStream).toHaveBeenCalledTimes(1);
    expect(EventSigningStream).toHaveBeenCalledWith({
      priorSignature,
      eventStreamCodec: expect.anything(),
      messageSigner: expect.anything(),
      systemClockOffsetProvider: expect.any(Function),
    });
  });

  it("should call event signer with request signature from query string if no signature headers are found", async () => {
    const priorSignature = "1234567890";
    const authorization = `AWS4-HMAC-SHA256 Credential=AKID/20200510/us-west-2/foo/aws4_request, SignedHeaders=host, Signature=`;

    const mockRequest = {
      body: new PassThrough(),
      headers: { authorization },
      query: {
        "X-Amz-Signature": priorSignature,
      },
    } as any;

    const handler = new EventStreamPayloadHandler({
      messageSigner: () => Promise.resolve(mockMessageSigner),
      utf8Decoder: mockUtf8Decoder,
      utf8Encoder: mockUtf8encoder,
    });

    await handler.handle(mockNextHandler, {
      request: mockRequest,
      input: {},
    });

    expect(EventSigningStream).toHaveBeenCalledTimes(1);
    expect(EventSigningStream).toHaveBeenCalledWith({
      priorSignature,
      eventStreamCodec: expect.anything(),
      messageSigner: expect.anything(),
      systemClockOffsetProvider: expect.any(Function),
    });
  });

  it("should start piping regardless of whether the downstream resolves", async () => {
    const authorization =
      "AWS4-HMAC-SHA256 Credential=AKID/20200510/us-west-2/foo/aws4_request, SignedHeaders=host, Signature=1234567890";
    const originalPayload = new PassThrough();
    const mockRequest = {
      body: originalPayload,
      headers: { authorization },
    } as any;
    const handler = new EventStreamPayloadHandler({
      messageSigner: () => Promise.resolve(mockMessageSigner),
      utf8Decoder: mockUtf8Decoder,
      utf8Encoder: mockUtf8encoder,
    });

    (mockNextHandler as any).mockImplementationOnce(async (args: FinalizeHandlerArguments<any>) => {
      const handledRequest = args.request as HttpRequest;

      originalPayload.end("Some Data");
      const collected = await collectData(handledRequest.body);

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
    const originalPayload = new PassThrough();
    const mockRequest = {
      body: originalPayload,
      headers: { authorization },
    } as any;
    const handler = new EventStreamPayloadHandler({
      messageSigner: () => Promise.resolve(mockMessageSigner),
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
    expect(handledRequest.body).not.toBe(originalPayload);
    // Expect the data from the output payload from eventstream payload handler the same as from the
    // stream supplied to the handler.
    originalPayload.end("Some Data");
    const collected = await collectData(handledRequest.body);
    expect(collected).toEqual("Some Data");
  });
});
