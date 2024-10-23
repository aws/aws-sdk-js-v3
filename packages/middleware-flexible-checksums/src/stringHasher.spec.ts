import { toUint8Array } from "@smithy/util-utf8";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { stringHasher } from "./stringHasher";

describe(stringHasher.name, () => {
  const mockHash = new Uint8Array(Buffer.from("mockHash"));
  const mockUpdate = vi.fn();
  const mockDigest = vi.fn();
  const mockChecksumAlgorithmFn = vi.fn().mockImplementation(() => ({
    update: mockUpdate,
    digest: mockDigest,
  }));

  beforeEach(() => {
    mockDigest.mockResolvedValueOnce(mockHash);
  });

  afterEach(() => {
    expect(mockChecksumAlgorithmFn).toHaveBeenCalledTimes(1);
    expect(mockUpdate).toHaveBeenCalledTimes(1);
    expect(mockDigest).toHaveBeenCalledTimes(1);
    vi.clearAllMocks();
  });

  it("calculates hash of the provided string", async () => {
    const mockBody = "mockBody";
    const digest = await stringHasher(mockChecksumAlgorithmFn, mockBody);
    expect(digest).toEqual(mockHash);
    expect(mockUpdate).toHaveBeenCalledWith(toUint8Array(mockBody));
  });

  it("calculates hash of empty string if undefined", async () => {
    const mockBody = undefined;
    const digest = await stringHasher(mockChecksumAlgorithmFn, mockBody);
    expect(digest).toEqual(mockHash);
    expect(mockUpdate).toHaveBeenCalledWith(toUint8Array(""));
  });
});
