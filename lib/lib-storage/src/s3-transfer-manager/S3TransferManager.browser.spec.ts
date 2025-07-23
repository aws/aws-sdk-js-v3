import { StreamingBlobPayloadOutputTypes } from "@smithy/types";
import { sdkStreamMixin } from "@smithy/util-stream";
import { describe, expect, it, vi } from "vitest";

import { joinStreams } from "./join-streams.browser";

describe("join-streams tests", () => {
  const createReadableStreamWithContent = (content: Uint8Array) =>
    new ReadableStream({
      start(controller) {
        controller.enqueue(content);
        controller.close();
      },
    });

  const createEmptyReadableStream = () =>
    new ReadableStream({
      start(controller) {
        controller.close();
      },
    });

  const consumeReadableStream = async (stream: any): Promise<Uint8Array[]> => {
    const reader = stream.getReader();
    const chunks: Uint8Array[] = [];

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) chunks.push(value);
    }

    return chunks;
  };

  const testCases = [
    {
      name: "ReadableStream",
      createStream: () => new ReadableStream(),
      createWithContent: createReadableStreamWithContent,
      createEmpty: createEmptyReadableStream,
      consume: consumeReadableStream,
      isInstance: (stream: any) => typeof stream.getReader === "function",
    },
  ];

  testCases.forEach(({ name, createStream, createWithContent, createEmpty, consume, isInstance }) => {
    describe(`joinStreams() with ${name}`, () => {
      it("should return single stream when only one stream is provided", async () => {
        const stream = createStream();
        const mixedStream = sdkStreamMixin(stream);
        const result = await joinStreams([Promise.resolve(mixedStream as StreamingBlobPayloadOutputTypes)]);

        expect(result).toBeDefined();
        expect(result).not.toBe(stream);
        expect(isInstance(result)).toBe(true);
      });

      it("should join multiple streams into a single stream", async () => {
        const contents = [
          new Uint8Array([67, 104, 117, 110, 107, 32, 49]), // "Chunk 1"
          new Uint8Array([67, 104, 117, 110, 107, 32, 50]), // "Chunk 2"
          new Uint8Array([67, 104, 117, 110, 107, 32, 51]), // "Chunk 3"
        ];

        const streams = contents.map((content) =>
          Promise.resolve(sdkStreamMixin(createWithContent(content)) as StreamingBlobPayloadOutputTypes)
        );

        const joinedStream = await joinStreams(streams);

        const chunks = await consume(joinedStream);

        expect(chunks.length).toBe(contents.length);
        chunks.forEach((chunk, i) => {
          expect(chunk).toEqual(contents[i]);
        });
      });

      it("should handle consecutive calls of joining multiple streams into a single stream", async () => {
        for (let i = 0; i <= 3; i++) {
          const contents = [
            new Uint8Array([67, 104, 117, 110, 107, 32, 49]), // "Chunk 1"
            new Uint8Array([67, 104, 117, 110, 107, 32, 50]), // "Chunk 2"
            new Uint8Array([67, 104, 117, 110, 107, 32, 51]), // "Chunk 3"
          ];

          const streams = contents.map((content) =>
            Promise.resolve(sdkStreamMixin(createWithContent(content)) as StreamingBlobPayloadOutputTypes)
          );

          const joinedStream = await joinStreams(streams);

          const chunks = await consume(joinedStream);

          expect(chunks.length).toBe(contents.length);
          chunks.forEach((chunk, i) => {
            expect(chunk).toEqual(contents[i]);
          });
        }
      });

      it("should handle streams with no data", async () => {
        const streams = [
          Promise.resolve(sdkStreamMixin(createEmpty()) as StreamingBlobPayloadOutputTypes),
          Promise.resolve(sdkStreamMixin(createEmpty()) as StreamingBlobPayloadOutputTypes),
        ];

        const joinedStream = await joinStreams(streams);

        const chunks = await consume(joinedStream);

        expect(chunks.length).toBe(0);
      });

      it("should report progress via eventListeners", async () => {
        const streams = [
          Promise.resolve(
            sdkStreamMixin(createWithContent(new Uint8Array([100, 97, 116, 97]))) as StreamingBlobPayloadOutputTypes
          ), // "data"
          Promise.resolve(
            sdkStreamMixin(createWithContent(new Uint8Array([109, 111, 114, 101]))) as StreamingBlobPayloadOutputTypes
          ), // "more"
        ];

        const onBytesSpy = vi.fn();
        const onCompletionSpy = vi.fn();

        const joinedStream = await joinStreams(streams, {
          onBytes: onBytesSpy,
          onCompletion: onCompletionSpy,
        });

        await consume(joinedStream);

        expect(onBytesSpy).toHaveBeenCalled();
        expect(onCompletionSpy).toHaveBeenCalledWith(expect.any(Number), 1);
      });

      it("should throw error for unsupported stream types", async () => {
        const blob = new Blob(["test"]);
        await expect(
          joinStreams([Promise.resolve(blob as unknown as StreamingBlobPayloadOutputTypes)])
        ).rejects.toThrow("Unsupported Stream Type");
      });
    });
  });
});
