// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const DeriveKeyUsage = {
  TR31_B0_BASE_DERIVATION_KEY: "TR31_B0_BASE_DERIVATION_KEY",
  TR31_C0_CARD_VERIFICATION_KEY: "TR31_C0_CARD_VERIFICATION_KEY",
  TR31_D0_SYMMETRIC_DATA_ENCRYPTION_KEY: "TR31_D0_SYMMETRIC_DATA_ENCRYPTION_KEY",
  TR31_E0_EMV_MKEY_APP_CRYPTOGRAMS: "TR31_E0_EMV_MKEY_APP_CRYPTOGRAMS",
  TR31_E1_EMV_MKEY_CONFIDENTIALITY: "TR31_E1_EMV_MKEY_CONFIDENTIALITY",
  TR31_E2_EMV_MKEY_INTEGRITY: "TR31_E2_EMV_MKEY_INTEGRITY",
  TR31_E4_EMV_MKEY_DYNAMIC_NUMBERS: "TR31_E4_EMV_MKEY_DYNAMIC_NUMBERS",
  TR31_E5_EMV_MKEY_CARD_PERSONALIZATION: "TR31_E5_EMV_MKEY_CARD_PERSONALIZATION",
  TR31_E6_EMV_MKEY_OTHER: "TR31_E6_EMV_MKEY_OTHER",
  TR31_K0_KEY_ENCRYPTION_KEY: "TR31_K0_KEY_ENCRYPTION_KEY",
  TR31_K1_KEY_BLOCK_PROTECTION_KEY: "TR31_K1_KEY_BLOCK_PROTECTION_KEY",
  TR31_M1_ISO_9797_1_MAC_KEY: "TR31_M1_ISO_9797_1_MAC_KEY",
  TR31_M3_ISO_9797_3_MAC_KEY: "TR31_M3_ISO_9797_3_MAC_KEY",
  TR31_M6_ISO_9797_5_CMAC_KEY: "TR31_M6_ISO_9797_5_CMAC_KEY",
  TR31_M7_HMAC_KEY: "TR31_M7_HMAC_KEY",
  TR31_P0_PIN_ENCRYPTION_KEY: "TR31_P0_PIN_ENCRYPTION_KEY",
  TR31_P1_PIN_GENERATION_KEY: "TR31_P1_PIN_GENERATION_KEY",
  TR31_V1_IBM3624_PIN_VERIFICATION_KEY: "TR31_V1_IBM3624_PIN_VERIFICATION_KEY",
  TR31_V2_VISA_PIN_VERIFICATION_KEY: "TR31_V2_VISA_PIN_VERIFICATION_KEY",
} as const;
/**
 * @public
 */
export type DeriveKeyUsage = (typeof DeriveKeyUsage)[keyof typeof DeriveKeyUsage];

/**
 * @public
 * @enum
 */
export const KeyAlgorithm = {
  AES_128: "AES_128",
  AES_192: "AES_192",
  AES_256: "AES_256",
  ECC_NIST_P256: "ECC_NIST_P256",
  ECC_NIST_P384: "ECC_NIST_P384",
  ECC_NIST_P521: "ECC_NIST_P521",
  HMAC_SHA224: "HMAC_SHA224",
  HMAC_SHA256: "HMAC_SHA256",
  HMAC_SHA384: "HMAC_SHA384",
  HMAC_SHA512: "HMAC_SHA512",
  RSA_2048: "RSA_2048",
  RSA_3072: "RSA_3072",
  RSA_4096: "RSA_4096",
  TDES_2KEY: "TDES_2KEY",
  TDES_3KEY: "TDES_3KEY",
} as const;
/**
 * @public
 */
export type KeyAlgorithm = (typeof KeyAlgorithm)[keyof typeof KeyAlgorithm];

/**
 * @public
 * @enum
 */
export const KeyClass = {
  ASYMMETRIC_KEY_PAIR: "ASYMMETRIC_KEY_PAIR",
  PRIVATE_KEY: "PRIVATE_KEY",
  PUBLIC_KEY: "PUBLIC_KEY",
  SYMMETRIC_KEY: "SYMMETRIC_KEY",
} as const;
/**
 * @public
 */
export type KeyClass = (typeof KeyClass)[keyof typeof KeyClass];

/**
 * @public
 * @enum
 */
export const KeyUsage = {
  TR31_B0_BASE_DERIVATION_KEY: "TR31_B0_BASE_DERIVATION_KEY",
  TR31_C0_CARD_VERIFICATION_KEY: "TR31_C0_CARD_VERIFICATION_KEY",
  TR31_D0_SYMMETRIC_DATA_ENCRYPTION_KEY: "TR31_D0_SYMMETRIC_DATA_ENCRYPTION_KEY",
  TR31_D1_ASYMMETRIC_KEY_FOR_DATA_ENCRYPTION: "TR31_D1_ASYMMETRIC_KEY_FOR_DATA_ENCRYPTION",
  TR31_E0_EMV_MKEY_APP_CRYPTOGRAMS: "TR31_E0_EMV_MKEY_APP_CRYPTOGRAMS",
  TR31_E1_EMV_MKEY_CONFIDENTIALITY: "TR31_E1_EMV_MKEY_CONFIDENTIALITY",
  TR31_E2_EMV_MKEY_INTEGRITY: "TR31_E2_EMV_MKEY_INTEGRITY",
  TR31_E4_EMV_MKEY_DYNAMIC_NUMBERS: "TR31_E4_EMV_MKEY_DYNAMIC_NUMBERS",
  TR31_E5_EMV_MKEY_CARD_PERSONALIZATION: "TR31_E5_EMV_MKEY_CARD_PERSONALIZATION",
  TR31_E6_EMV_MKEY_OTHER: "TR31_E6_EMV_MKEY_OTHER",
  TR31_K0_KEY_ENCRYPTION_KEY: "TR31_K0_KEY_ENCRYPTION_KEY",
  TR31_K1_KEY_BLOCK_PROTECTION_KEY: "TR31_K1_KEY_BLOCK_PROTECTION_KEY",
  TR31_K2_TR34_ASYMMETRIC_KEY: "TR31_K2_TR34_ASYMMETRIC_KEY",
  TR31_K3_ASYMMETRIC_KEY_FOR_KEY_AGREEMENT: "TR31_K3_ASYMMETRIC_KEY_FOR_KEY_AGREEMENT",
  TR31_M0_ISO_16609_MAC_KEY: "TR31_M0_ISO_16609_MAC_KEY",
  TR31_M1_ISO_9797_1_MAC_KEY: "TR31_M1_ISO_9797_1_MAC_KEY",
  TR31_M3_ISO_9797_3_MAC_KEY: "TR31_M3_ISO_9797_3_MAC_KEY",
  TR31_M6_ISO_9797_5_CMAC_KEY: "TR31_M6_ISO_9797_5_CMAC_KEY",
  TR31_M7_HMAC_KEY: "TR31_M7_HMAC_KEY",
  TR31_P0_PIN_ENCRYPTION_KEY: "TR31_P0_PIN_ENCRYPTION_KEY",
  TR31_P1_PIN_GENERATION_KEY: "TR31_P1_PIN_GENERATION_KEY",
  TR31_S0_ASYMMETRIC_KEY_FOR_DIGITAL_SIGNATURE: "TR31_S0_ASYMMETRIC_KEY_FOR_DIGITAL_SIGNATURE",
  TR31_V1_IBM3624_PIN_VERIFICATION_KEY: "TR31_V1_IBM3624_PIN_VERIFICATION_KEY",
  TR31_V2_VISA_PIN_VERIFICATION_KEY: "TR31_V2_VISA_PIN_VERIFICATION_KEY",
} as const;
/**
 * @public
 */
export type KeyUsage = (typeof KeyUsage)[keyof typeof KeyUsage];

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
export const KeyOrigin = {
  AWS_PAYMENT_CRYPTOGRAPHY: "AWS_PAYMENT_CRYPTOGRAPHY",
  EXTERNAL: "EXTERNAL",
} as const;
/**
 * @public
 */
export type KeyOrigin = (typeof KeyOrigin)[keyof typeof KeyOrigin];

/**
 * @public
 * @enum
 */
export const KeyState = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_COMPLETE: "DELETE_COMPLETE",
  DELETE_PENDING: "DELETE_PENDING",
} as const;
/**
 * @public
 */
export type KeyState = (typeof KeyState)[keyof typeof KeyState];

/**
 * @public
 * @enum
 */
export const MultiRegionKeyType = {
  PRIMARY: "PRIMARY",
  REPLICA: "REPLICA",
} as const;
/**
 * @public
 */
export type MultiRegionKeyType = (typeof MultiRegionKeyType)[keyof typeof MultiRegionKeyType];

/**
 * @public
 * @enum
 */
export const KeyReplicationState = {
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SYNCHRONIZED: "SYNCHRONIZED",
} as const;
/**
 * @public
 */
export type KeyReplicationState = (typeof KeyReplicationState)[keyof typeof KeyReplicationState];

/**
 * @public
 * @enum
 */
export const As2805KeyVariant = {
  DATA_ENCRYPTION_KEY_VARIANT_22: "DATA_ENCRYPTION_KEY_VARIANT_22",
  MESSAGE_AUTHENTICATION_KEY_VARIANT_24: "MESSAGE_AUTHENTICATION_KEY_VARIANT_24",
  PIN_ENCRYPTION_KEY_VARIANT_28: "PIN_ENCRYPTION_KEY_VARIANT_28",
  TERMINAL_MAJOR_KEY_VARIANT_00: "TERMINAL_MAJOR_KEY_VARIANT_00",
} as const;
/**
 * @public
 */
export type As2805KeyVariant = (typeof As2805KeyVariant)[keyof typeof As2805KeyVariant];

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
export const KeyExportability = {
  EXPORTABLE: "EXPORTABLE",
  NON_EXPORTABLE: "NON_EXPORTABLE",
  SENSITIVE: "SENSITIVE",
} as const;
/**
 * @public
 */
export type KeyExportability = (typeof KeyExportability)[keyof typeof KeyExportability];

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
export const WrappingKeySpec = {
  RSA_OAEP_SHA_256: "RSA_OAEP_SHA_256",
  RSA_OAEP_SHA_512: "RSA_OAEP_SHA_512",
} as const;
/**
 * @public
 */
export type WrappingKeySpec = (typeof WrappingKeySpec)[keyof typeof WrappingKeySpec];

/**
 * @public
 * @enum
 */
export const Tr34KeyBlockFormat = {
  X9_TR34_2012: "X9_TR34_2012",
} as const;
/**
 * @public
 */
export type Tr34KeyBlockFormat = (typeof Tr34KeyBlockFormat)[keyof typeof Tr34KeyBlockFormat];

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
export const SigningAlgorithmType = {
  SHA224: "SHA224",
  SHA256: "SHA256",
  SHA384: "SHA384",
  SHA512: "SHA512",
} as const;
/**
 * @public
 */
export type SigningAlgorithmType = (typeof SigningAlgorithmType)[keyof typeof SigningAlgorithmType];

/**
 * @public
 * @enum
 */
export const KeyMaterialType = {
  KEY_CRYPTOGRAM: "KEY_CRYPTOGRAM",
  ROOT_PUBLIC_KEY_CERTIFICATE: "ROOT_PUBLIC_KEY_CERTIFICATE",
  TR31_KEY_BLOCK: "TR31_KEY_BLOCK",
  TR34_KEY_BLOCK: "TR34_KEY_BLOCK",
  TRUSTED_PUBLIC_KEY_CERTIFICATE: "TRUSTED_PUBLIC_KEY_CERTIFICATE",
} as const;
/**
 * @public
 */
export type KeyMaterialType = (typeof KeyMaterialType)[keyof typeof KeyMaterialType];
