import { Readable } from "node:stream";
import { describe, expect, test as it } from "vitest";

import { joinStreams } from "./join-streams";

describe(joinStreams.name, () => {
  it("should join Node.js Readable streams together", async () => {
    const streams = [
      Promise.resolve(Readable.from(Buffer.from("abcd"))),
      Promise.resolve(Readable.from(Buffer.from("efgh"))),
      Promise.resolve(Readable.from(Buffer.from("ijkl"))),
    ];

    const joined = (await joinStreams(streams)) as Readable;

    const it = joined[Symbol.asyncIterator]();

    expect((await it.next()).value).toEqual(Buffer.from("abcd"));
    expect((await it.next()).value).toEqual(Buffer.from("efgh"));
    expect((await it.next()).value).toEqual(Buffer.from("ijkl"));
  });

  it("should join web API ReadableStreams together", async () => {
    expect.fail();
  });

  it("should not fail to handle an empty stream", async () => {
    expect.fail();
  });

  it("should throw an error when there is an error during any of the streams", async () => {
    const streams = [
      Promise.resolve(Readable.from(Buffer.from("abcd"))),
      Promise.resolve(
        Readable.from({
          async *[Symbol.asyncIterator]() {
            yield Buffer.from("ef");
            throw new Error("error in stream");
          },
        })
      ),
      Promise.resolve(Readable.from(Buffer.from("ijkl"))),
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
    expect.fail();
  });

  it("should release all locks and cancel all streams if any stream promise rejects", async () => {
    expect.fail();
  });
});
