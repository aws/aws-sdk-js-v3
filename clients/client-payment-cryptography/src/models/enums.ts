// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const SymmetricKeyAlgorithm = {
  AES_128: "AES_128",
  AES_192: "AES_192",
  AES_256: "AES_256",
  HMAC_SHA224: "HMAC_SHA224",
  HMAC_SHA256: "HMAC_SHA256",
  HMAC_SHA384: "HMAC_SHA384",
  HMAC_SHA512: "HMAC_SHA512",
  TDES_2KEY: "TDES_2KEY",
  TDES_3KEY: "TDES_3KEY",
} as const;
/**
 * @public
 */
export type SymmetricKeyAlgorithm = (typeof SymmetricKeyAlgorithm)[keyof typeof SymmetricKeyAlgorithm];

/**
 * @public
 * @enum
 */
export const KeyDerivationFunction = {
  ANSI_X963: "ANSI_X963",
  NIST_SP800: "NIST_SP800",
} as const;
/**
 * @public
 */
export type KeyDerivationFunction = (typeof KeyDerivationFunction)[keyof typeof KeyDerivationFunction];

/**
 * @public
 * @enum
 */
export const KeyDerivationHashAlgorithm = {
  SHA_256: "SHA_256",
  SHA_384: "SHA_384",
  SHA_512: "SHA_512",
} as const;
/**
 * @public
 */
export type KeyDerivationHashAlgorithm = (typeof KeyDerivationHashAlgorithm)[keyof typeof KeyDerivationHashAlgorithm];
