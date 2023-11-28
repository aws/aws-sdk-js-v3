/**
 * Checksum Algorithms supported by the SDK.
 */
export enum ChecksumAlgorithm {
  MD5 = "MD5",
  CRC32 = "CRC32",
  CRC32C = "CRC32C",
  SHA1 = "SHA1",
  SHA256 = "SHA256",
}

/**
 * Location when the checksum is stored in the request body.
 */
export enum ChecksumLocation {
  HEADER = "header",
  TRAILER = "trailer",
}

/**
 * @internal
 */
export const DEFAULT_CHECKSUM_ALGORITHM = ChecksumAlgorithm.MD5;

/**
 * @internal
 */
export const S3_EXPRESS_DEFAULT_CHECKSUM_ALGORITHM = ChecksumAlgorithm.CRC32;
