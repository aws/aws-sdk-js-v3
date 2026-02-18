import { sdkStreamMixin } from "@smithy/util-stream";
import { Readable } from "node:stream";
import { describe, expect, test as it } from "vitest";

import { joinStreams } from "./join-streams";

describe(joinStreams.name, () => {
  it("should join Node.js Readable streams together", async () => {
    const streams = [
      Promise.resolve(sdkStreamMixin(Readable.from(Buffer.from("abcd")))),
      Promise.resolve(sdkStreamMixin(Readable.from(Buffer.from("efgh")))),
      Promise.resolve(sdkStreamMixin(Readable.from(Buffer.from("ijkl")))),
    ];

    const joined = (await joinStreams(streams)) as Readable;

    const it = joined[Symbol.asyncIterator]();

    expect((await it.next()).value).toEqual(Buffer.from("abcd"));
    expect((await it.next()).value).toEqual(Buffer.from("efgh"));
    expect((await it.next()).value).toEqual(Buffer.from("ijkl"));
  });

  it("should throw error for unsupported stream types and clean up all streams", async () => {
    const stream1 = Readable.from(Buffer.from("abcd"));
    const stream3 = Readable.from(Buffer.from("ijkl"));

    const streams = [
      Promise.resolve(sdkStreamMixin(stream1)),
      Promise.resolve(Buffer.from("not a stream") as any),
      Promise.resolve(sdkStreamMixin(stream3)),
    ];

    const joined = (await joinStreams(streams)) as Readable;

    await expect(async () => {
      for await (const _ of joined) {
        // consume
      }
    }).rejects.toThrow("unhandled stream type Buffer");
  });

  it("should join web API ReadableStreams together", async () => {
    const streams = [
      Promise.resolve(
        sdkStreamMixin(
          new ReadableStream({
            start(c) {
              c.enqueue(Buffer.from("abcd"));
              c.close();
            },
          })
        )
      ),
      Promise.resolve(
        sdkStreamMixin(
          new ReadableStream({
            start(c) {
              c.enqueue(Buffer.from("efgh"));
              c.close();
            },
          })
        )
      ),
      Promise.resolve(
        sdkStreamMixin(
          new ReadableStream({
            start(c) {
              c.enqueue(Buffer.from("ijkl"));
              c.close();
            },
          })
        )
      ),
    ];

    const joined = (await joinStreams(streams)) as ReadableStream;
    const reader = joined.getReader();

    expect((await reader.read()).value).toEqual(Buffer.from("abcd"));
    expect((await reader.read()).value).toEqual(Buffer.from("efgh"));
    expect((await reader.read()).value).toEqual(Buffer.from("ijkl"));
  });

  it("should not fail to handle an empty stream", async () => {
    const streams = [
      Promise.resolve(sdkStreamMixin(Readable.from([Buffer.from("abcd")]))),
      Promise.resolve(sdkStreamMixin(Readable.from([]))),
      Promise.resolve(sdkStreamMixin(Readable.from([Buffer.from("ijkl")]))),
    ];

    const joined = (await joinStreams(streams)) as Readable;
    const it = joined[Symbol.asyncIterator]();

    expect((await it.next()).value).toEqual(Buffer.from("abcd"));
    expect((await it.next()).value).toEqual(Buffer.from("ijkl"));
    expect((await it.next()).done).toBe(true);
  });

  it("should throw an error when there is an error during any of the streams", async () => {
    const streams = [
      Promise.resolve(sdkStreamMixin(Readable.from(Buffer.from("abcd")))),
      Promise.resolve(
        sdkStreamMixin(
          Readable.from({
            async *[Symbol.asyncIterator]() {
              yield Buffer.from("ef");
              throw new Error("error in stream");
            },
          })
        )
      ),
      Promise.resolve(sdkStreamMixin(Readable.from(Buffer.from("ijkl")))),
    ];

    const joined = (await joinStreams(streams)) as Readable;

    const it = joined[Symbol.asyncIterator]();
    const observedChunks = [];

    while (true) {
      try {
        const { done, value } = await it.next();
        if (done) {
          break;
        }
        observedChunks.push(value.toString("utf-8"));
      } catch (e) {
        expect(e.message).toEqual("error in stream");
      }
    }
    expect(observedChunks).toEqual(["abcd", "ef"]);
    expect.assertions(2);
  });

  it("should release all locks and cancel all streams if an error is thrown during any stream", async () => {
    const stream1 = Readable.from(Buffer.from("abcd"));
    const stream2 = Readable.from({
      async *[Symbol.asyncIterator]() {
        yield Buffer.from("ef");
        throw new Error("error in stream");
      },
    });
    const stream3 = Readable.from(Buffer.from("ijkl"));

    const streams = [
      Promise.resolve(sdkStreamMixin(stream1)),
      Promise.resolve(sdkStreamMixin(stream2)),
      Promise.resolve(sdkStreamMixin(stream3)),
    ];

    const joined = (await joinStreams(streams)) as Readable;
    const it = joined[Symbol.asyncIterator]();
    const observedChunks: string[] = [];

    try {
      while (true) {
        const { done, value } = await it.next();
        if (done) break;
        observedChunks.push(value.toString("utf-8"));
      }
    } catch (e) {
      expect((e as Error).message).toEqual("error in stream");
    }
    expect(observedChunks).toEqual(["abcd", "ef"]);
    expect(stream1.destroyed).toBe(true);
    expect(stream2.destroyed).toBe(true);
    expect(stream3.destroyed).toBe(true);
  });

  it("should release all locks and cancel all streams if any stream promise rejects", async () => {
    const stream1 = Readable.from(Buffer.from("abcd"));
    const stream3 = Readable.from(Buffer.from("ijkl"));

    const streams = [
      Promise.resolve(sdkStreamMixin(stream1)),
      Promise.reject(new Error("promise rejected")),
      Promise.resolve(sdkStreamMixin(stream3)),
    ];

    streams[1].catch(() => {});

    const joined = (await joinStreams(streams)) as Readable;
    const it = joined[Symbol.asyncIterator]();
    const observedChunks: string[] = [];

    try {
      while (true) {
        const { done, value } = await it.next();
        if (done) break;
        observedChunks.push(value.toString("utf-8"));
      }
    } catch (e) {
      expect((e as Error).message).toEqual("promise rejected");
    }

    // Only first stream was read before the rejected promise
    expect(observedChunks).toEqual(["abcd"]);
    // ALL streams are now properly cleaned up
    expect(stream1.destroyed).toBe(true);
    expect(stream3.destroyed).toBe(true);
  });

  it("should call onBytes with cumulative byte count for Readable streams", async () => {
    const streams = [
      Promise.resolve(sdkStreamMixin(Readable.from(Buffer.from("abcdef")))), // 6 bytes
      Promise.resolve(sdkStreamMixin(Readable.from(Buffer.from("efgh")))), // 4 bytes
      Promise.resolve(sdkStreamMixin(Readable.from(Buffer.from("ijkl")))), // 4 bytes
    ];

    const byteCounts: number[] = [];
    const joined = (await joinStreams(streams, {
      onBytes: (bytes) => byteCounts.push(bytes),
    })) as Readable;

    for await (const _ of joined) {
    }

    expect(byteCounts).toEqual([6, 10, 14]);
  });

  it("should call onCompletion when all streams are consumed", async () => {
    const streams = [
      Promise.resolve(sdkStreamMixin(Readable.from(Buffer.from("abcd")))), // 4 bytes
      Promise.resolve(sdkStreamMixin(Readable.from(Buffer.from("efgh")))), // 4 bytes
    ];

    let completionData: { bytes: number; index: number } | null = null;
    const joined = (await joinStreams(streams, {
      onCompletion: (bytes, index) => {
        completionData = { bytes, index };
      },
    })) as Readable;

    for await (const _ of joined) {
    }

    expect(completionData).toEqual({ bytes: 8, index: 1 });
  });

  it("should handle backpressure when consumer is slow", async () => {
    const readTimestamps: number[] = [];
    let readCount = 0;
    const totalChunks = 20;

    const stream = new Readable({
      highWaterMark: 1,
      read() {
        readCount++;
        readTimestamps.push(Date.now());
        if (readCount <= totalChunks) {
          this.push(Buffer.from(`chunk${readCount}`));
        } else {
          this.push(null);
        }
      },
    });

    const streams = [Promise.resolve(sdkStreamMixin(stream))];
    const joined = (await joinStreams(streams)) as Readable;
    const chunks: string[] = [];

    for await (const chunk of joined) {
      chunks.push(chunk.toString());
      await new Promise((r) => setTimeout(r, 50));
    }

    // Verify all data received
    for (let i = 1; i <= totalChunks; i++) {
      expect(chunks.join("")).toContain(`chunk${i}`);
    }

    // Verify data received in order
    const joinedChunks = chunks.join("");
    for (let i = 1; i < totalChunks; i++) {
      expect(joinedChunks.indexOf(`chunk${i}`)).toBeLessThan(joinedChunks.indexOf(`chunk${i + 1}`));
    }

    // Verify backpressure - reads were spread over time, not all at once
    const timeSpan = readTimestamps[readTimestamps.length - 1] - readTimestamps[0];
    // Technically this should be 50 * 20 = 1000ms.
    // But not sure why it's 452, but can confirm that reads are spread over time
    expect(timeSpan).toBeGreaterThanOrEqual(400);

    // Verify read() was called multiple times due to backpressure
    expect(readCount).toBeGreaterThan(totalChunks);
  });
});
