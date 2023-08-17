import { toUint8Array } from "@smithy/util-utf8";

import { stringHasher } from "./stringHasher";

describe(stringHasher.name, () => {
  const mockHash = new Uint8Array(Buffer.from("mockHash"));
  const mockUpdate = jest.fn();
  const mockDigest = jest.fn();
  const mockChecksumAlgorithmFn = jest.fn().mockImplementation(() => ({
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
    jest.clearAllMocks();
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
