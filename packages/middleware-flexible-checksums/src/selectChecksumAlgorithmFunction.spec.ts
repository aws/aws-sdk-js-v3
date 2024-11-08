import { AwsCrc32c } from "@aws-crypto/crc32c";
import { describe, expect, test as it, vi } from "vitest";

import { ChecksumAlgorithm } from "./constants";
// import { getCrc32ChecksumAlgorithmFunction } from "./getCrc32ChecksumAlgorithmFunction";
import { selectChecksumAlgorithmFunction } from "./selectChecksumAlgorithmFunction";

describe(selectChecksumAlgorithmFunction.name, () => {
  const mockConfig = {
    md5: vi.fn(),
    sha1: vi.fn(),
    sha256: vi.fn(),
  };

  it.each([
    [ChecksumAlgorithm.MD5, mockConfig.md5],
    // [ChecksumAlgorithm.CRC32, getCrc32ChecksumAlgorithmFunction()],
    [ChecksumAlgorithm.CRC32C, AwsCrc32c],
    [ChecksumAlgorithm.SHA1, mockConfig.sha1],
    [ChecksumAlgorithm.SHA256, mockConfig.sha256],
  ])("testing %s", (checksumAlgorithm, output) => {
    expect(selectChecksumAlgorithmFunction(checksumAlgorithm, mockConfig as any)).toEqual(output);
  });
});
