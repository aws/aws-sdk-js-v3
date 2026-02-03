import { AwsCrc32 } from "@aws-crypto/crc32";
import { numToUint8 } from "@aws-crypto/util";
import { describe, expect, test as it, vi } from "vitest";
import * as zlib from "zlib";

import { getCrc32ChecksumAlgorithmFunction } from "./getCrc32ChecksumAlgorithmFunction";

describe(getCrc32ChecksumAlgorithmFunction.name, () => {
  it("returns AwsCrc32 if zlib.crc32 is undefined", () => {
    vi.mock("zlib", () => ({ crc32: undefined }));
    expect(getCrc32ChecksumAlgorithmFunction()).toBe(AwsCrc32);
  });

  it("returns NodeCrc32 if zlib.crc32 is defined", async () => {
    const mockData = new Uint8Array([1, 2, 3]);
    const mockChecksum = 42;

    // @ts-ignore
    zlib.crc32 = vi
      .fn()
      .mockReturnValueOnce(mockChecksum)
      .mockReturnValueOnce(2 * mockChecksum);

    const crc32Fn = getCrc32ChecksumAlgorithmFunction();
    expect(crc32Fn).not.toBe(AwsCrc32);

    // @ts-ignore
    expect(zlib.crc32).not.toHaveBeenCalled();
    const crc32 = new crc32Fn();
    // @ts-ignore
    expect(zlib.crc32).not.toHaveBeenCalled();
    expect(await crc32.digest()).toEqual(numToUint8(0));

    crc32.update(mockData);
    // @ts-ignore
    expect(zlib.crc32).toHaveBeenCalledWith(mockData, 0);
    expect(await crc32.digest()).toEqual(numToUint8(mockChecksum));

    crc32.update(mockData);
    // @ts-ignore
    expect(zlib.crc32).toHaveBeenCalledWith(mockData, mockChecksum);
    expect(await crc32.digest()).toEqual(numToUint8(2 * mockChecksum));

    crc32.reset();
    expect(await crc32.digest()).toEqual(numToUint8(0));
  });
});
