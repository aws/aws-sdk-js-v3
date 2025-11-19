// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Category = {
  AWSIoT: "AWSIoT",
} as const;
/**
 * @public
 */
export type Category = (typeof Category)[keyof typeof Category];

/**
 * @public
 * @enum
 */
export const EncryptionAlgorithm = {
  ECDSA: "ECDSA",
  RSA: "RSA",
} as const;
/**
 * @public
 */
export type EncryptionAlgorithm = (typeof EncryptionAlgorithm)[keyof typeof EncryptionAlgorithm];

/**
 * @public
 * @enum
 */
export const HashAlgorithm = {
  SHA1: "SHA1",
  SHA256: "SHA256",
} as const;
/**
 * @public
 */
export type HashAlgorithm = (typeof HashAlgorithm)[keyof typeof HashAlgorithm];

/**
 * @public
 * @enum
 */
export const ImageFormat = {
  JSON: "JSON",
  JSONDetached: "JSONDetached",
  JSONEmbedded: "JSONEmbedded",
} as const;
/**
 * @public
 */
export type ImageFormat = (typeof ImageFormat)[keyof typeof ImageFormat];

/**
 * @public
 * @enum
 */
export const SigningStatus = {
  Failed: "Failed",
  InProgress: "InProgress",
  Succeeded: "Succeeded",
} as const;
/**
 * @public
 */
export type SigningStatus = (typeof SigningStatus)[keyof typeof SigningStatus];

/**
 * @public
 * @enum
 */
export const ValidityType = {
  DAYS: "DAYS",
  MONTHS: "MONTHS",
  YEARS: "YEARS",
} as const;
/**
 * @public
 */
export type ValidityType = (typeof ValidityType)[keyof typeof ValidityType];

/**
 * @public
 * @enum
 */
export const SigningProfileStatus = {
  Active: "Active",
  Canceled: "Canceled",
  Revoked: "Revoked",
} as const;
/**
 * @public
 */
export type SigningProfileStatus = (typeof SigningProfileStatus)[keyof typeof SigningProfileStatus];
