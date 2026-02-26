import { sdkStreamMixin } from "@smithy/util-stream";
import { describe, expect, test as it } from "vitest";

import { joinStreams } from "./join-streams.browser";

describe(joinStreams.name, () => {
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
    expect((await reader.read()).value).toEqual(Buffer.from("ijkl"));
    expect((await reader.read()).done).toBe(true);
  });

  it("should throw an error when there is an error during any of the streams", async () => {
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
              c.error(new Error("error in stream"));
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

    // Read first chunk successfully
    expect((await reader.read()).value).toEqual(Buffer.from("abcd"));

    // Second stream errors
    await expect(reader.read()).rejects.toThrow("error in stream");
  });

  it("should release all locks and cancel all streams if an error is thrown during any stream", async () => {
    let stream3Cancelled = false;

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
              c.error(new Error("error in stream"));
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
            cancel() {
              stream3Cancelled = true;
            },
          })
        )
      ),
    ];

    const joined = (await joinStreams(streams)) as ReadableStream;
    const reader = joined.getReader();

    try {
      while (true) {
        const { done } = await reader.read();
        if (done) break;
      }
    } catch (e) {
      // expected
    }

    expect(stream3Cancelled).toBe(true);
  });

  it("should release all locks and cancel all streams if any stream promise rejects", async () => {
    let stream3Cancelled = false;

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
      Promise.reject(new Error("promise rejected")),
      Promise.resolve(
        sdkStreamMixin(
          new ReadableStream({
            start(c) {
              c.enqueue(Buffer.from("ijkl"));
              c.close();
            },
            cancel() {
              stream3Cancelled = true;
            },
          })
        )
      ),
    ];

    streams[1].catch(() => {});

    const joined = (await joinStreams(streams)) as ReadableStream;
    const reader = joined.getReader();

    // Read first chunk successfully
    expect((await reader.read()).value).toEqual(Buffer.from("abcd"));

    // Second promise rejects
    await expect(reader.read()).rejects.toThrow("promise rejected");

    expect(stream3Cancelled).toBe(true);
  });

  it("should throw error for unsupported stream types", async () => {
    const streams = [Promise.resolve(Buffer.from("not a stream") as any)];

    await expect(joinStreams(streams)).rejects.toThrow("Unsupported Stream Type");
  });

  it("should call onBytes with cumulative byte count for ReadableStreams", async () => {
    const streams = [
      Promise.resolve(
        sdkStreamMixin(
          new ReadableStream({
            start(c) {
              c.enqueue(Buffer.from("abcdef")); // 6 bytes
              c.close();
            },
          })
        )
      ),
      Promise.resolve(
        sdkStreamMixin(
          new ReadableStream({
            start(c) {
              c.enqueue(Buffer.from("efgh")); // 4 bytes
              c.close();
            },
          })
        )
      ),
      Promise.resolve(
        sdkStreamMixin(
          new ReadableStream({
            start(c) {
              c.enqueue(Buffer.from("ijkl")); // 4 bytes
              c.close();
            },
          })
        )
      ),
    ];

    const byteCounts: number[] = [];
    const joined = (await joinStreams(streams, {
      onBytes: (bytes) => byteCounts.push(bytes),
    })) as ReadableStream;

    const reader = joined.getReader();
    while (!(await reader.read()).done) {}

    expect(byteCounts).toEqual([6, 10, 14]);
  });

  it("should call onCompletion when all streams are consumed", async () => {
    const streams = [
      Promise.resolve(
        sdkStreamMixin(
          new ReadableStream({
            start(c) {
              c.enqueue(Buffer.from("abcd")); // 4 bytes
              c.close();
            },
          })
        )
      ),
      Promise.resolve(
        sdkStreamMixin(
          new ReadableStream({
            start(c) {
              c.enqueue(Buffer.from("efgh")); // 4 bytes
              c.close();
            },
          })
        )
      ),
    ];

    let completionData: { bytes: number; index: number } | null = null;
    const joined = (await joinStreams(streams, {
      onCompletion: (bytes, index) => {
        completionData = { bytes, index };
      },
    })) as ReadableStream;

    const reader = joined.getReader();
    while (!(await reader.read()).done) {}

    expect(completionData).toEqual({ bytes: 8, index: 1 });
  });

  it("should handle Blob streams", async () => {
    const streams = [
      Promise.resolve(new Blob(["abcd"]) as any),
      Promise.resolve(new Blob(["efgh"]) as any),
      Promise.resolve(new Blob(["ijkl"]) as any),
    ];

    const joined = (await joinStreams(streams)) as ReadableStream;
    const reader = joined.getReader();

    const chunks: string[] = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(new TextDecoder().decode(value));
    }

    expect(chunks).toEqual(["abcd", "efgh", "ijkl"]);
  });

  it("should handle mixed ReadableStream and Blob streams", async () => {
    const streams = [
      Promise.resolve(
        sdkStreamMixin(
          new ReadableStream({
            start(c) {
              c.enqueue(new TextEncoder().encode("abcd"));
              c.close();
            },
          })
        )
      ),
      Promise.resolve(new Blob(["efgh"]) as any),
      Promise.resolve(
        sdkStreamMixin(
          new ReadableStream({
            start(c) {
              c.enqueue(new TextEncoder().encode("ijkl"));
              c.close();
            },
          })
        )
      ),
    ];

    const joined = (await joinStreams(streams)) as ReadableStream;
    const reader = joined.getReader();

    const chunks: string[] = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(new TextDecoder().decode(value));
    }

    expect(chunks).toEqual(["abcd", "efgh", "ijkl"]);
  });
});
