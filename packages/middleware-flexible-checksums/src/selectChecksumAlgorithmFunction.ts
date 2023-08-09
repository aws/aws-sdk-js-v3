import { AwsCrc32 } from "@aws-crypto/crc32";
import { AwsCrc32c } from "@aws-crypto/crc32c";
import { Checksum, ChecksumConstructor, HashConstructor } from "@smithy/types";

import { PreviouslyResolved } from "./configuration";
import { ChecksumAlgorithm } from "./constants";

/**
 * Returns the function that will compute the checksum for the given {@link ChecksumAlgorithm}.
 */
export const selectChecksumAlgorithmFunction = (
  checksumAlgorithm: ChecksumAlgorithm,
  config: PreviouslyResolved
): ChecksumConstructor | HashConstructor =>
  ({
    [ChecksumAlgorithm.MD5]: config.md5,
    [ChecksumAlgorithm.CRC32]: AwsCrc32,
    [ChecksumAlgorithm.CRC32C]: AwsCrc32c,
    [ChecksumAlgorithm.SHA1]: config.sha1,
    [ChecksumAlgorithm.SHA256]: config.sha256,
  }[checksumAlgorithm]);
