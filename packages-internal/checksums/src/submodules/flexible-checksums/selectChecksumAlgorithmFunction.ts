import { Crc32, Crc32c, Crc64Nvme } from "@aws-sdk/checksums/crc";
import type { ChecksumConstructor, HashConstructor } from "@smithy/types";

import type { PreviouslyResolved } from "./configuration";
import { ChecksumAlgorithm } from "./constants";
import { CLIENT_SUPPORTED_ALGORITHMS } from "./types";

/**
 * Returns the function that will compute the checksum for the given {@link ChecksumAlgorithm}.
 */
export const selectChecksumAlgorithmFunction = (
  checksumAlgorithm: ChecksumAlgorithm | string,
  config: PreviouslyResolved
): ChecksumConstructor | HashConstructor => {
  const { checksumAlgorithms = {} } = config;
  switch (checksumAlgorithm) {
    case ChecksumAlgorithm.MD5:
      return checksumAlgorithms?.MD5 ?? config.md5;
    case ChecksumAlgorithm.CRC32:
      return checksumAlgorithms?.CRC32 ?? Crc32;
    case ChecksumAlgorithm.CRC32C:
      return checksumAlgorithms?.CRC32C ?? Crc32c;
    case ChecksumAlgorithm.CRC64NVME:
      return checksumAlgorithms?.CRC64NVME ?? Crc64Nvme;
    case ChecksumAlgorithm.SHA1:
      return checksumAlgorithms?.SHA1 ?? config.sha1;
    case ChecksumAlgorithm.SHA256:
      return checksumAlgorithms?.SHA256 ?? config.sha256;
    default:
      if (checksumAlgorithms?.[checksumAlgorithm]) {
        return checksumAlgorithms[checksumAlgorithm];
      }
      throw new Error(
        `The checksum algorithm "${checksumAlgorithm}" is not supported by the client.` +
          ` Select one of ${CLIENT_SUPPORTED_ALGORITHMS}, or provide an implementation to ` +
          ` the client constructor checksums field.`
      );
  }
};
