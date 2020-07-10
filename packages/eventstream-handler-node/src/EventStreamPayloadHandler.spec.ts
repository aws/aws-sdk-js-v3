import { PassThrough, Readable } from "stream";
const mockSingingStream = jest.fn().mockImplementation(() => new PassThrough());
jest.mock("./EventSigningStream", () => ({
  EventSigningStream: mockSingingStream,
}));
import { Decoder, Encoder, EventSigner, FinalizeHandler, FinalizeHandlerArguments, HttpRequest } from "@aws-sdk/types";

import { EventStreamPayloadHandler } from "./EventStreamPayloadHandler";

describe("EventStreamPayloadHandler", () => {
  const mockSigner: EventSigner = {
    sign: jest.fn(),
  };
  const mockUtf8Decoder: Decoder = jest.fn();
  const mockUtf8encoder: Encoder = jest.fn();
  const mockNextHandler: FinalizeHandler<any, any> = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should throw if request payload is not a stream", () => {
    const handler = new EventStreamPayloadHandler({
      eventSigner: () => Promise.resolve(mockSigner),
      utf8Decoder: mockUtf8Decoder,
      utf8Encoder: mockUtf8encoder,
    });
    expect(
      handler.handle(mockNextHandler, {
        request: { body: "body" } as HttpRequest,
        input: {},
      })
    ).rejects.toThrow("Eventstream payload must be a Readable stream.");
  });

  it("should close the request payload if downstream middleware throws", async (done) => {
    expect.assertions(2);
    (mockNextHandler as any).mockImplementationOnce(() => Promise.reject(new Error()));
    const handler = new EventStreamPayloadHandler({
      eventSigner: () => Promise.resolve(mockSigner),
      utf8Decoder: mockUtf8Decoder,
      utf8Encoder: mockUtf8encoder,
    });
    const mockRequest = { body: new Readable() } as HttpRequest;
    let error;
    try {
      await handler.handle(mockNextHandler, {
        request: mockRequest,
        input: {},
      });
    } catch (e) {
      error = e;
    }
    expect(error instanceof Error).toBe(true);
    //Expect stream is closed
    //Ref: should use writableEnded when bumped to Node 13+
    (mockRequest.body as PassThrough).on("error", (err) => {
      expect(err.message).toEqual("write after end");
      done();
    });
    mockRequest.body.write("This should be allowed to write.");
  });

  it("should call event signer with request signature from signing middleware", async () => {
    const authorization =
      "AWS4-HMAC-SHA256 Credential=AKID/20200510/us-west-2/foo/aws4_request, SignedHeaders=host, Signature=1234567890";
    const mockRequest = {
      body: new PassThrough(),
      headers: { authorization },
    } as any;
    const handler = new EventStreamPayloadHandler({
      eventSigner: () => Promise.resolve(mockSigner),
      utf8Decoder: mockUtf8Decoder,
      utf8Encoder: mockUtf8encoder,
    });
    await handler.handle(mockNextHandler, {
      request: mockRequest,
      input: {},
    });
    expect(mockSingingStream.mock.calls.length).toBe(1);
    expect(mockSingingStream.mock.calls[0][0].priorSignature).toBe("1234567890");
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
      eventSigner: () => Promise.resolve(mockSigner),
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
    const collectData = (stream: Readable) => {
      const chunks: any = [];
      return new Promise((resolve, reject) => {
        stream.on("data", (chunk) => chunks.push(chunk));
        stream.on("error", reject);
        stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
      });
    };
    originalPayload.end("Some Data");
    const collected = await collectData(handledRequest.body);
    expect(collected).toEqual("Some Data");
  });
});
