// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const MajorKeyDerivationMode = {
  EMV_OPTION_A: "EMV_OPTION_A",
  EMV_OPTION_B: "EMV_OPTION_B",
} as const;
/**
 * @public
 */
export type MajorKeyDerivationMode = (typeof MajorKeyDerivationMode)[keyof typeof MajorKeyDerivationMode];

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
export const PaddingType = {
  OAEP_SHA1: "OAEP_SHA1",
  OAEP_SHA256: "OAEP_SHA256",
  OAEP_SHA512: "OAEP_SHA512",
  PKCS1: "PKCS1",
} as const;
/**
 * @public
 */
export type PaddingType = (typeof PaddingType)[keyof typeof PaddingType];

/**
 * @public
 * @enum
 */
export const DukptDerivationType = {
  AES_128: "AES_128",
  AES_192: "AES_192",
  AES_256: "AES_256",
  TDES_2KEY: "TDES_2KEY",
  TDES_3KEY: "TDES_3KEY",
} as const;
/**
 * @public
 */
export type DukptDerivationType = (typeof DukptDerivationType)[keyof typeof DukptDerivationType];

/**
 * @public
 * @enum
 */
export const DukptKeyVariant = {
  BIDIRECTIONAL: "BIDIRECTIONAL",
  REQUEST: "REQUEST",
  RESPONSE: "RESPONSE",
} as const;
/**
 * @public
 */
export type DukptKeyVariant = (typeof DukptKeyVariant)[keyof typeof DukptKeyVariant];

/**
 * @public
 * @enum
 */
export const DukptEncryptionMode = {
  CBC: "CBC",
  ECB: "ECB",
} as const;
/**
 * @public
 */
export type DukptEncryptionMode = (typeof DukptEncryptionMode)[keyof typeof DukptEncryptionMode];

/**
 * @public
 * @enum
 */
export const EmvMajorKeyDerivationMode = {
  EMV_OPTION_A: "EMV_OPTION_A",
  EMV_OPTION_B: "EMV_OPTION_B",
} as const;
/**
 * @public
 */
export type EmvMajorKeyDerivationMode = (typeof EmvMajorKeyDerivationMode)[keyof typeof EmvMajorKeyDerivationMode];

/**
 * @public
 * @enum
 */
export const EmvEncryptionMode = {
  CBC: "CBC",
  ECB: "ECB",
} as const;
/**
 * @public
 */
export type EmvEncryptionMode = (typeof EmvEncryptionMode)[keyof typeof EmvEncryptionMode];

/**
 * @public
 * @enum
 */
export const EncryptionMode = {
  CBC: "CBC",
  CFB: "CFB",
  CFB1: "CFB1",
  CFB128: "CFB128",
  CFB64: "CFB64",
  CFB8: "CFB8",
  ECB: "ECB",
  OFB: "OFB",
} as const;
/**
 * @public
 */
export type EncryptionMode = (typeof EncryptionMode)[keyof typeof EncryptionMode];

/**
 * @public
 * @enum
 */
export const KeyCheckValueAlgorithm = {
  ANSI_X9_24: "ANSI_X9_24",
  CMAC: "CMAC",
  HMAC: "HMAC",
  SHA_1: "SHA_1",
} as const;
/**
 * @public
 */
export type KeyCheckValueAlgorithm = (typeof KeyCheckValueAlgorithm)[keyof typeof KeyCheckValueAlgorithm];

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

/**
 * @public
 * @enum
 */
export const PinBlockLengthPosition = {
  FRONT_OF_PIN_BLOCK: "FRONT_OF_PIN_BLOCK",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type PinBlockLengthPosition = (typeof PinBlockLengthPosition)[keyof typeof PinBlockLengthPosition];

/**
 * @public
 * @enum
 */
export const PinBlockPaddingType = {
  ISO_IEC_7816_4: "ISO_IEC_7816_4",
  NO_PADDING: "NO_PADDING",
} as const;
/**
 * @public
 */
export type PinBlockPaddingType = (typeof PinBlockPaddingType)[keyof typeof PinBlockPaddingType];

/**
 * @public
 * @enum
 */
export const RandomKeySendVariantMask = {
  VARIANT_MASK_82: "VARIANT_MASK_82",
  VARIANT_MASK_82C0: "VARIANT_MASK_82C0",
} as const;
/**
 * @public
 */
export type RandomKeySendVariantMask = (typeof RandomKeySendVariantMask)[keyof typeof RandomKeySendVariantMask];

/**
 * @public
 * @enum
 */
export const MacAlgorithm = {
  AS2805_4_1: "AS2805_4_1",
  CMAC: "CMAC",
  HMAC: "HMAC",
  HMAC_SHA224: "HMAC_SHA224",
  HMAC_SHA256: "HMAC_SHA256",
  HMAC_SHA384: "HMAC_SHA384",
  HMAC_SHA512: "HMAC_SHA512",
  ISO9797_ALGORITHM1: "ISO9797_ALGORITHM1",
  ISO9797_ALGORITHM3: "ISO9797_ALGORITHM3",
} as const;
/**
 * @public
 */
export type MacAlgorithm = (typeof MacAlgorithm)[keyof typeof MacAlgorithm];

/**
 * @public
 * @enum
 */
export const SessionKeyDerivationMode = {
  AMEX: "AMEX",
  EMV2000: "EMV2000",
  EMV_COMMON_SESSION_KEY: "EMV_COMMON_SESSION_KEY",
  MASTERCARD_SESSION_KEY: "MASTERCARD_SESSION_KEY",
  VISA: "VISA",
} as const;
/**
 * @public
 */
export type SessionKeyDerivationMode = (typeof SessionKeyDerivationMode)[keyof typeof SessionKeyDerivationMode];

/**
 * @public
 * @enum
 */
export const PinBlockFormatForEmvPinChange = {
  ISO_FORMAT_0: "ISO_FORMAT_0",
  ISO_FORMAT_1: "ISO_FORMAT_1",
  ISO_FORMAT_3: "ISO_FORMAT_3",
} as const;
/**
 * @public
 */
export type PinBlockFormatForEmvPinChange =
  (typeof PinBlockFormatForEmvPinChange)[keyof typeof PinBlockFormatForEmvPinChange];

/**
 * @public
 * @enum
 */
export const PinBlockFormatForPinData = {
  ISO_FORMAT_0: "ISO_FORMAT_0",
  ISO_FORMAT_1: "ISO_FORMAT_1",
  ISO_FORMAT_3: "ISO_FORMAT_3",
  ISO_FORMAT_4: "ISO_FORMAT_4",
} as const;
/**
 * @public
 */
export type PinBlockFormatForPinData = (typeof PinBlockFormatForPinData)[keyof typeof PinBlockFormatForPinData];

/**
 * @public
 * @enum
 */
export const WrappedKeyMaterialFormat = {
  KEY_CRYPTOGRAM: "KEY_CRYPTOGRAM",
  TR31_KEY_BLOCK: "TR31_KEY_BLOCK",
  TR34_KEY_BLOCK: "TR34_KEY_BLOCK",
} as const;
/**
 * @public
 */
export type WrappedKeyMaterialFormat = (typeof WrappedKeyMaterialFormat)[keyof typeof WrappedKeyMaterialFormat];

/**
 * @public
 * @enum
 */
export const VerificationFailedReason = {
  INVALID_AUTH_REQUEST_CRYPTOGRAM: "INVALID_AUTH_REQUEST_CRYPTOGRAM",
  INVALID_MAC: "INVALID_MAC",
  INVALID_PIN: "INVALID_PIN",
  INVALID_VALIDATION_DATA: "INVALID_VALIDATION_DATA",
} as const;
/**
 * @public
 */
export type VerificationFailedReason = (typeof VerificationFailedReason)[keyof typeof VerificationFailedReason];
