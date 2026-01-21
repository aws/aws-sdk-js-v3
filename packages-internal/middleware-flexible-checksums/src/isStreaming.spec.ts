import { isArrayBuffer } from "@smithy/is-array-buffer";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { isStreaming } from "./isStreaming";

vi.mock("@smithy/is-array-buffer");

describe(isStreaming.name, () => {
  beforeEach(() => {
    (isArrayBuffer as unknown as any).mockReturnValue(true);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("returns true when body is a stream", () => {
    (isArrayBuffer as unknown as any).mockReturnValue(false);
    // Mocking {} as a stream
    const mockStream = {};
    expect(isStreaming(mockStream)).toBe(true);
    expect(isArrayBuffer).toHaveBeenCalledTimes(1);
    expect(isArrayBuffer).toHaveBeenCalledWith(mockStream);
  });

  describe("returns false when body is", () => {
    it.each([undefined, "str"])("special case: %s", (val) => {
      expect(isStreaming(val)).toBe(false);
      expect(isArrayBuffer).not.toHaveBeenCalled();
    });

    it.each([null, true, 1])("primitive data type: %s", (val) => {
      expect(isStreaming(val)).toBe(false);
      expect(isArrayBuffer).toHaveBeenCalledTimes(1);
      expect(isArrayBuffer).toHaveBeenCalledWith(val);
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
      expect(isArrayBuffer).not.toHaveBeenCalled();
    });
  });
});
