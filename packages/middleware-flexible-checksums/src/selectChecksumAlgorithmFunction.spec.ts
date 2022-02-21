import { AwsCrc32 } from "@aws-crypto/crc32";
import { AwsCrc32c } from "@aws-crypto/crc32c";

import { ChecksumAlgorithm } from "./constants";
import { selectChecksumAlgorithmFunction } from "./selectChecksumAlgorithmFunction";

describe(selectChecksumAlgorithmFunction.name, () => {
  const mockConfig = {
    md5: jest.fn(),
    sha1: jest.fn(),
    sha256: jest.fn(),
  };

  it.each([
    [ChecksumAlgorithm.MD5, mockConfig.md5],
    [ChecksumAlgorithm.CRC32, AwsCrc32],
    [ChecksumAlgorithm.CRC32C, AwsCrc32c],
    [ChecksumAlgorithm.SHA1, mockConfig.sha1],
    [ChecksumAlgorithm.SHA256, mockConfig.sha256],
  ])("testing %s", (checksumAlgorithm, output) => {
    expect(selectChecksumAlgorithmFunction(checksumAlgorithm, mockConfig as any)).toEqual(output);
  });
});
