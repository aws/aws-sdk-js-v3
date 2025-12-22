import { AwsCrc32c } from "@aws-crypto/crc32c";
import { crc64NvmeCrtContainer } from "@aws-sdk/crc64-nvme";
import { describe, expect, test as it, vi } from "vitest";

import { ChecksumAlgorithm } from "./constants";
import { getCrc32ChecksumAlgorithmFunction } from "./getCrc32ChecksumAlgorithmFunction";
import { selectChecksumAlgorithmFunction } from "./selectChecksumAlgorithmFunction";

describe(selectChecksumAlgorithmFunction.name, () => {
  const mockConfig = {
    md5: vi.fn(),
    sha1: vi.fn(),
    sha256: vi.fn(),
  };

  it.each([
    [ChecksumAlgorithm.MD5, mockConfig.md5],
    [ChecksumAlgorithm.CRC32, getCrc32ChecksumAlgorithmFunction()],
    [ChecksumAlgorithm.CRC32C, AwsCrc32c],
    [ChecksumAlgorithm.SHA1, mockConfig.sha1],
    [ChecksumAlgorithm.SHA256, mockConfig.sha256],
  ])("testing %s", (checksumAlgorithm, output) => {
    expect(selectChecksumAlgorithmFunction(checksumAlgorithm, mockConfig as any)).toEqual(output);
  });

  it("throws an error for unsupported checksum algorithm", () => {
    expect(() => selectChecksumAlgorithmFunction("UNSUPPORTED" as any, mockConfig as any)).toThrow();
  });

  it("throws error if crc64NvmeCrtContainer.CrtCrc64Nvme is not a function", () => {
    expect(() => selectChecksumAlgorithmFunction(ChecksumAlgorithm.CRC64NVME, mockConfig as any)).toThrow();
  });

  it("returns crc64NvmeCrtContainer.CrtCrc64Nvme if available from container", () => {
    crc64NvmeCrtContainer.CrtCrc64Nvme = vi.fn();
    expect(selectChecksumAlgorithmFunction(ChecksumAlgorithm.CRC64NVME, mockConfig as any)).toEqual(
      crc64NvmeCrtContainer.CrtCrc64Nvme
    );
  });
});
