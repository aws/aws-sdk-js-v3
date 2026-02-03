import type { FinalizeHandler, FinalizeHandlerArguments, HttpRequest, MessageSigner } from "@smithy/types";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";
import { afterEach, describe, expect, test as it, vi } from "vitest";

import { EventStreamPayloadHandler } from "./EventStreamPayloadHandler";

describe(EventStreamPayloadHandler.name, () => {
  const mockSigner: MessageSigner = {
    sign: vi.fn().mockImplementation(async function () {
      return {
        signature: "FFFFFF",
      };
    }),
    signMessage: vi.fn(),
  };
  const mockNextHandler: FinalizeHandler<any, any> = vi.fn().mockImplementation(async function ({ request }) {
    for await (const chunk of request.body) {
      // drain request body stream.
    }
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should throw if request payload is not a stream", async () => {
    const handler = new EventStreamPayloadHandler({
      messageSigner: () => Promise.resolve(mockSigner),
      utf8Decoder: fromUtf8,
      utf8Encoder: toUtf8,
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
      utf8Decoder: fromUtf8,
      utf8Encoder: toUtf8,
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
      body: new ReadableStream({
        start(controller) {
          controller.enqueue(new Uint8Array([0, 1, 2, 3]));
          controller.close();
        },
      }),
      headers: { authorization },
    } as any;

    const handler = new EventStreamPayloadHandler({
      messageSigner: () => Promise.resolve(mockSigner),
      utf8Decoder: fromUtf8,
      utf8Encoder: toUtf8,
    });

    await handler.handle(mockNextHandler, {
      request: mockRequest,
      input: {},
    });

    expect(mockSigner.sign).toHaveBeenCalledTimes(1);
    expect(mockSigner.sign).toHaveBeenCalledWith(
      expect.objectContaining({
        priorSignature,
      }),
      expect.anything()
    );
  });

  it("should call event signer with request signature from query string if no signature headers are found", async () => {
    const priorSignature = "1234567890";
    const authorization = `AWS4-HMAC-SHA256 Credential=AKID/20200510/us-west-2/foo/aws4_request, SignedHeaders=host, Signature=`;

    const mockRequest = {
      body: new ReadableStream({
        start(controller) {
          controller.enqueue(new Uint8Array([0, 1, 2, 3]));
          controller.close();
        },
      }),
      headers: { authorization },
      query: {
        "X-Amz-Signature": priorSignature,
      },
    } as any;

    const handler = new EventStreamPayloadHandler({
      messageSigner: () => Promise.resolve(mockSigner),
      utf8Decoder: fromUtf8,
      utf8Encoder: toUtf8,
    });

    await handler.handle(mockNextHandler, {
      request: mockRequest,
      input: {},
    });

    expect(mockSigner.sign).toHaveBeenCalledTimes(1);
    expect(mockSigner.sign).toHaveBeenCalledWith(
      expect.objectContaining({
        priorSignature,
      }),
      expect.anything()
    );
  });

  it("should start piping regardless of whether the downstream resolves", async () => {
    const authorization =
      "AWS4-HMAC-SHA256 Credential=AKID/20200510/us-west-2/foo/aws4_request, SignedHeaders=host, Signature=1234567890";
    const mockRequest = {
      body: new ReadableStream({
        start(controller) {
          controller.enqueue(new Uint8Array([0, 1, 2, 3]));
          controller.close();
        },
      }),
      headers: { authorization },
    } as any as HttpRequest;
    const handler = new EventStreamPayloadHandler({
      messageSigner: () => Promise.resolve(mockSigner),
      utf8Decoder: fromUtf8,
      utf8Encoder: toUtf8,
    });

    await handler.handle(
      async (args: FinalizeHandlerArguments<any>) => {
        const handledRequest = args.request as HttpRequest;

        const reader = handledRequest.body.getReader();
        const { value, done } = await reader.read();
        expect(done).toBe(false);

        // this means the stream is flowing without this downstream middleware
        // having resolved yet.
        expect(value.subarray(-8, -4)).toEqual(new Uint8Array([0, 1, 2, 3]));

        return Promise.resolve({ output: { handledRequest, $metadata: {} }, response: null });
      },
      {
        request: mockRequest,
        input: {},
      }
    );
    expect.assertions(2);
  });

  it("should start piping to request payload through event signer if downstream middleware returns", async () => {
    const authorization =
      "AWS4-HMAC-SHA256 Credential=AKID/20200510/us-west-2/foo/aws4_request, SignedHeaders=host, Signature=1234567890";
    const mockRequest = {
      body: new ReadableStream({
        start(controller) {
          controller.enqueue(new Uint8Array([0, 1, 2, 3]));
          controller.enqueue(new Uint8Array([4, 5, 6, 7]));
          controller.close();
        },
      }),
      headers: { authorization },
    } as any as HttpRequest;
    const handler = new EventStreamPayloadHandler({
      messageSigner: () => Promise.resolve(mockSigner),
      utf8Decoder: fromUtf8,
      utf8Encoder: toUtf8,
    });

    await handler.handle(
      async (args: FinalizeHandlerArguments<any>) => {
        const handledRequest = args.request as HttpRequest;

        const reader = handledRequest.body.getReader();
        const { value, done } = await reader.read();
        expect(done).toBe(false);
        reader.releaseLock();

        // chunk pre-resolve.
        expect(value.subarray(-8, -4)).toEqual(new Uint8Array([0, 1, 2, 3]));

        return Promise.resolve({ output: { handledRequest, $metadata: {} }, response: null });
      },
      {
        request: mockRequest,
        input: {},
      }
    );

    for await (const chunk of mockRequest.body) {
      // chunk post-resolve.
      expect(chunk.subarray(-8, -4)).toEqual(new Uint8Array([4, 5, 6, 7]));
    }
    expect.assertions(3);
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
      utf8Decoder: fromUtf8,
      utf8Encoder: toUtf8,
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
