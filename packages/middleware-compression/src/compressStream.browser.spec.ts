// @jest-environment jsdom
import { AsyncGzip } from "fflate";
import { ReadableStream } from "web-streams-polyfill";

import { compressStream } from "./compressStream.browser";

jest.mock("fflate");

describe(compressStream.name, () => {
  const compressionSuffix = "compressed";
  const compressionSeparator = ".";
  const asyncGzip = {
    ondata: jest.fn(),
    push: jest.fn().mockImplementation((chunk, final) => {
      const data = typeof chunk === "string" ? [chunk, compressionSuffix].join(compressionSeparator) : null;
      asyncGzip.ondata(undefined, data, final);
    }),
  };

  beforeEach(() => {
    (AsyncGzip as jest.Mock).mockImplementation(() => asyncGzip);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("compresses a stream", async () => {
    const inputChunks = ["hello", "world"];
    const inputStream = new ReadableStream({
      start(controller) {
        for (const inputChunk of inputChunks) {
          controller.enqueue(inputChunk);
        }
        controller.close();
      },
    });

    const compressionStream = await compressStream(inputStream);
    const reader = compressionStream.getReader();
    for (const inputChunk of inputChunks) {
      const { value, done } = await reader.read();
      expect(value).toEqual([inputChunk, compressionSuffix].join(compressionSeparator));
      expect(done).toEqual(false);
    }

    // Mock for last push.
    const { value, done } = await reader.read();
    expect(value).toEqual(null);
    expect(done).toEqual(false);

    // Mock for stream ending.
    const { value: valueFinal, done: doneFinal } = await reader.read();
    expect(valueFinal).toEqual(undefined);
    expect(doneFinal).toEqual(true);
  });

  it("should throw an error if compression fails", async () => {
    const compressionErrorMsg = "compression error message";
    const compressionError = new Error(compressionErrorMsg);
    (AsyncGzip as jest.Mock).mockImplementationOnce(() => {
      throw compressionError;
    });

    const inputStream = new ReadableStream({
      start(controller) {
        controller.close();
      },
    });

    await expect(compressStream(inputStream)).rejects.toThrow(compressionError);
  });
});
