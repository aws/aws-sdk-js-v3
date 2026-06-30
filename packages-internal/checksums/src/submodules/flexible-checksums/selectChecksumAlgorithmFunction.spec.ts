import { Crc32, Crc32c, Crc64Nvme } from "@aws-sdk/checksums/crc";
import { describe, expect, test as it, vi } from "vitest";

import { ChecksumAlgorithm } from "./constants";
import { selectChecksumAlgorithmFunction } from "./selectChecksumAlgorithmFunction";

describe(selectChecksumAlgorithmFunction.name, () => {
  const mockConfig = {
    md5: vi.fn(),
    sha1: vi.fn(),
    sha256: vi.fn(),
    checksumAlgorithms: {
      novel: class {},
    },
  };

  it.each([
    [ChecksumAlgorithm.MD5, mockConfig.md5],
    [ChecksumAlgorithm.CRC32, Crc32],
    [ChecksumAlgorithm.CRC32C, Crc32c],
    [ChecksumAlgorithm.SHA1, mockConfig.sha1],
    [ChecksumAlgorithm.SHA256, mockConfig.sha256],
  ])("testing %s", (checksumAlgorithm, output) => {
    expect(selectChecksumAlgorithmFunction(checksumAlgorithm, mockConfig as any)).toEqual(output);
  });

  it("throws an error for unsupported checksum algorithm", () => {
    expect(() => selectChecksumAlgorithmFunction("UNSUPPORTED", mockConfig as any)).toThrow();
  });

  it("doesn't throw an error if the unknown algo's implementation was provided", () => {
    expect(() => selectChecksumAlgorithmFunction("novel", mockConfig as any)).not.toThrow();
  });

  it("returns Crc64Nvme for CRC64NVME", () => {
    expect(selectChecksumAlgorithmFunction(ChecksumAlgorithm.CRC64NVME, mockConfig as any)).toBe(Crc64Nvme);
  });
});
