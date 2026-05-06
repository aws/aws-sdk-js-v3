import { Readable } from "stream";
import { describe, expect, test as it } from "vitest";

import { isStreaming } from "./isStreaming";

describe(isStreaming.name, () => {
  describe("returns true when body is", () => {
    it("a Node.js Readable stream", () => {
      const readable = Readable.from([Buffer.from("x")]);
      expect(isStreaming(readable)).toBe(true);
    });

    it("a web ReadableStream", () => {
      const stream = new ReadableStream({
        start(controller) {
          controller.close();
        },
      });
      expect(isStreaming(stream)).toBe(true);
    });

    it("an AsyncIterable", () => {
      const asyncIterable = (async function* () {
        yield 1;
      })();
      expect(isStreaming(asyncIterable)).toBe(true);
    });

    it("an object with a pipe() method", () => {
      const fakeReadable = { pipe: () => {} };
      expect(isStreaming(fakeReadable)).toBe(true);
    });

    it("an object with a getReader() method", () => {
      const fakeReadableStream = { getReader: () => {} };
      expect(isStreaming(fakeReadableStream)).toBe(true);
    });
  });

  describe("returns false when body is", () => {
    it.each([undefined, null])("special case: %s", (val) => {
      expect(isStreaming(val)).toBe(false);
    });

    it.each([true, 1, "str"])("primitive data type: %s", (val) => {
      expect(isStreaming(val)).toBe(false);
    });

    it("a Blob (regression for #6834)", () => {
      const blob = new Blob(["hello"], { type: "text/plain" });
      expect(isStreaming(blob)).toBe(false);
    });

    it("a File (regression for #6834)", () => {
      const file = new File(["hello"], "x.txt", { type: "text/plain" });
      expect(isStreaming(file)).toBe(false);
    });

    it("a plain object", () => {
      expect(isStreaming({})).toBe(false);
    });

    const buffer = new ArrayBuffer(4);
    const arr = [...Array(4).keys()];
    const addPointOne = (num: number) => num + 0.1;
    it.each([
      Buffer.from(buffer),
      new DataView(buffer),
      new Int8Array(arr),
      new Uint8Array(arr),
      new Uint8ClampedArray(arr),
      new Int16Array(arr),
      new Uint16Array(arr),
      new Int32Array(arr),
      new Uint32Array(arr),
      new Float32Array(arr.map(addPointOne)),
      new Float64Array(arr.map(addPointOne)),
      new BigInt64Array(arr.map(BigInt)),
      new BigUint64Array(arr.map(BigInt)),
    ])("ArrayBuffer View: %s", (arrayBufferView) => {
      expect(isStreaming(arrayBufferView)).toBe(false);
    });

    it("an ArrayBuffer", () => {
      expect(isStreaming(new ArrayBuffer(4))).toBe(false);
    });
  });
});
