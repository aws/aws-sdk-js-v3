/**
 * Determines when a checksum will be calculated for request payloads.
 */
export const RequestChecksumCalculation = {
  /**
   * When set, a checksum will be calculated for all request payloads of operations
   * modeled with the {@link httpChecksum} trait where `requestChecksumRequired` is `true`
   * AND/OR a `requestAlgorithmMember` is modeled.
   * {@link https://smithy.io/2.0/aws/aws-core.html#aws-protocols-httpchecksum-trait httpChecksum}
   */
  WHEN_SUPPORTED: "WHEN_SUPPORTED",

  /**
   * When set, a checksum will only be calculated for request payloads of operations
   * modeled with the {@link httpChecksum} trait where `requestChecksumRequired` is `true`
   * OR where a `requestAlgorithmMember` is modeled and the user sets it.
   * {@link https://smithy.io/2.0/aws/aws-core.html#aws-protocols-httpchecksum-trait httpChecksum}
   */
  WHEN_REQUIRED: "WHEN_REQUIRED",
} as const;

export type RequestChecksumCalculation = (typeof RequestChecksumCalculation)[keyof typeof RequestChecksumCalculation];

export const DEFAULT_REQUEST_CHECKSUM_CALCULATION = RequestChecksumCalculation.WHEN_SUPPORTED;

/**
 * Determines when checksum validation will be performed on response payloads.
 */
export const ResponseChecksumValidation = {
  /**
   * When set, checksum validation MUST be performed on all response payloads of operations
   * modeled with the {@link httpChecksum} trait where `responseAlgorithms` is modeled,
   * except when no modeled checksum algorithms are supported by an SDK.
   * {@link https://smithy.io/2.0/aws/aws-core.html#aws-protocols-httpchecksum-trait httpChecksum}
   */
  WHEN_SUPPORTED: "WHEN_SUPPORTED",

  /**
   * When set, checksum validation MUST NOT be performed on response payloads of operations UNLESS
   * the SDK supports the modeled checksum algorithms AND the user has set the `requestValidationModeMember` to `ENABLED`.
   * It is currently impossible to model an operation as requiring a response checksum,
   * but this setting leaves the door open for future updates.
   */
  WHEN_REQUIRED: "WHEN_REQUIRED",
} as const;

export type ResponseChecksumValidation = (typeof ResponseChecksumValidation)[keyof typeof ResponseChecksumValidation];

export const DEFAULT_RESPONSE_CHECKSUM_VALIDATION = RequestChecksumCalculation.WHEN_SUPPORTED;

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
