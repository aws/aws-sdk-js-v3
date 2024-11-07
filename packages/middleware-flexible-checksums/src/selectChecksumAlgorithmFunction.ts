import { AwsCrc32c } from "@aws-crypto/crc32c";
import { ChecksumConstructor, HashConstructor } from "@smithy/types";

import { PreviouslyResolved } from "./configuration";
import { ChecksumAlgorithm } from "./constants";
import { getCrc32ChecksumAlgorithmFunction } from "./getCrc32ChecksumAlgorithmFunction";

/**
 * Returns the function that will compute the checksum for the given {@link ChecksumAlgorithm}.
 */
export const selectChecksumAlgorithmFunction = (
  checksumAlgorithm: ChecksumAlgorithm,
  config: PreviouslyResolved
): ChecksumConstructor | HashConstructor =>
  ({
    [ChecksumAlgorithm.MD5]: config.md5,
    [ChecksumAlgorithm.CRC32]: getCrc32ChecksumAlgorithmFunction(),
    [ChecksumAlgorithm.CRC32C]: AwsCrc32c,
    [ChecksumAlgorithm.SHA1]: config.sha1,
    [ChecksumAlgorithm.SHA256]: config.sha256,
  }[checksumAlgorithm]);
