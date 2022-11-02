import { AwsCrc32 } from "@aws-crypto/crc32";
import { AwsCrc32c } from "@aws-crypto/crc32c";
import { HashConstructor } from "@aws-sdk/types";

import { ChecksumAlgorithm } from "./constants";

export interface SelectChecksumAlgorithmInputConfig {
  md5: HashConstructor;
  sha1: HashConstructor;
  sha256: HashConstructor;
}
/**
 * Returns the function that will compute the checksum for the given {@link ChecksumAlgorithm}.
 */
export const selectChecksumAlgorithmFunction = (
  checksumAlgorithm: ChecksumAlgorithm,
  config: SelectChecksumAlgorithmInputConfig
): HashConstructor =>
  ({
    [ChecksumAlgorithm.MD5]: config.md5,
    [ChecksumAlgorithm.CRC32]: AwsCrc32,
    [ChecksumAlgorithm.CRC32C]: AwsCrc32c,
    [ChecksumAlgorithm.SHA1]: config.sha1,
    [ChecksumAlgorithm.SHA256]: config.sha256,
  }[checksumAlgorithm]);
