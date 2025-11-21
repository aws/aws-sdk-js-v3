// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AlgorithmSpec = {
  RSAES_OAEP_SHA_1: "RSAES_OAEP_SHA_1",
  RSAES_OAEP_SHA_256: "RSAES_OAEP_SHA_256",
  RSAES_PKCS1_V1_5: "RSAES_PKCS1_V1_5",
  RSA_AES_KEY_WRAP_SHA_1: "RSA_AES_KEY_WRAP_SHA_1",
  RSA_AES_KEY_WRAP_SHA_256: "RSA_AES_KEY_WRAP_SHA_256",
  SM2PKE: "SM2PKE",
} as const;
/**
 * @public
 */
export type AlgorithmSpec = (typeof AlgorithmSpec)[keyof typeof AlgorithmSpec];

/**
 * @public
 * @enum
 */
export const ConnectionErrorCodeType = {
  CLUSTER_NOT_FOUND: "CLUSTER_NOT_FOUND",
  INSUFFICIENT_CLOUDHSM_HSMS: "INSUFFICIENT_CLOUDHSM_HSMS",
  INSUFFICIENT_FREE_ADDRESSES_IN_SUBNET: "INSUFFICIENT_FREE_ADDRESSES_IN_SUBNET",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_CREDENTIALS: "INVALID_CREDENTIALS",
  NETWORK_ERRORS: "NETWORK_ERRORS",
  SUBNET_NOT_FOUND: "SUBNET_NOT_FOUND",
  USER_LOCKED_OUT: "USER_LOCKED_OUT",
  USER_LOGGED_IN: "USER_LOGGED_IN",
  USER_NOT_FOUND: "USER_NOT_FOUND",
  XKS_PROXY_ACCESS_DENIED: "XKS_PROXY_ACCESS_DENIED",
  XKS_PROXY_INVALID_CONFIGURATION: "XKS_PROXY_INVALID_CONFIGURATION",
  XKS_PROXY_INVALID_RESPONSE: "XKS_PROXY_INVALID_RESPONSE",
  XKS_PROXY_INVALID_TLS_CONFIGURATION: "XKS_PROXY_INVALID_TLS_CONFIGURATION",
  XKS_PROXY_NOT_REACHABLE: "XKS_PROXY_NOT_REACHABLE",
  XKS_PROXY_TIMED_OUT: "XKS_PROXY_TIMED_OUT",
  XKS_VPC_ENDPOINT_SERVICE_INVALID_CONFIGURATION: "XKS_VPC_ENDPOINT_SERVICE_INVALID_CONFIGURATION",
  XKS_VPC_ENDPOINT_SERVICE_NOT_FOUND: "XKS_VPC_ENDPOINT_SERVICE_NOT_FOUND",
} as const;
/**
 * @public
 */
export type ConnectionErrorCodeType = (typeof ConnectionErrorCodeType)[keyof typeof ConnectionErrorCodeType];

/**
 * @public
 * @enum
 */
export const ConnectionStateType = {
  CONNECTED: "CONNECTED",
  CONNECTING: "CONNECTING",
  DISCONNECTED: "DISCONNECTED",
  DISCONNECTING: "DISCONNECTING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type ConnectionStateType = (typeof ConnectionStateType)[keyof typeof ConnectionStateType];

/**
 * @public
 * @enum
 */
export const CustomKeyStoreType = {
  AWS_CLOUDHSM: "AWS_CLOUDHSM",
  EXTERNAL_KEY_STORE: "EXTERNAL_KEY_STORE",
} as const;
/**
 * @public
 */
export type CustomKeyStoreType = (typeof CustomKeyStoreType)[keyof typeof CustomKeyStoreType];

/**
 * @public
 * @enum
 */
export const XksProxyConnectivityType = {
  PUBLIC_ENDPOINT: "PUBLIC_ENDPOINT",
  VPC_ENDPOINT_SERVICE: "VPC_ENDPOINT_SERVICE",
} as const;
/**
 * @public
 */
export type XksProxyConnectivityType = (typeof XksProxyConnectivityType)[keyof typeof XksProxyConnectivityType];

/**
 * @public
 * @enum
 */
export const GrantOperation = {
  CreateGrant: "CreateGrant",
  Decrypt: "Decrypt",
  DeriveSharedSecret: "DeriveSharedSecret",
  DescribeKey: "DescribeKey",
  Encrypt: "Encrypt",
  GenerateDataKey: "GenerateDataKey",
  GenerateDataKeyPair: "GenerateDataKeyPair",
  GenerateDataKeyPairWithoutPlaintext: "GenerateDataKeyPairWithoutPlaintext",
  GenerateDataKeyWithoutPlaintext: "GenerateDataKeyWithoutPlaintext",
  GenerateMac: "GenerateMac",
  GetPublicKey: "GetPublicKey",
  ReEncryptFrom: "ReEncryptFrom",
  ReEncryptTo: "ReEncryptTo",
  RetireGrant: "RetireGrant",
  Sign: "Sign",
  Verify: "Verify",
  VerifyMac: "VerifyMac",
} as const;
/**
 * @public
 */
export type GrantOperation = (typeof GrantOperation)[keyof typeof GrantOperation];

/**
 * @public
 * @enum
 */
export const CustomerMasterKeySpec = {
  ECC_NIST_P256: "ECC_NIST_P256",
  ECC_NIST_P384: "ECC_NIST_P384",
  ECC_NIST_P521: "ECC_NIST_P521",
  ECC_SECG_P256K1: "ECC_SECG_P256K1",
  HMAC_224: "HMAC_224",
  HMAC_256: "HMAC_256",
  HMAC_384: "HMAC_384",
  HMAC_512: "HMAC_512",
  RSA_2048: "RSA_2048",
  RSA_3072: "RSA_3072",
  RSA_4096: "RSA_4096",
  SM2: "SM2",
  SYMMETRIC_DEFAULT: "SYMMETRIC_DEFAULT",
} as const;
/**
 * @public
 */
export type CustomerMasterKeySpec = (typeof CustomerMasterKeySpec)[keyof typeof CustomerMasterKeySpec];

/**
 * @public
 * @enum
 */
export const KeySpec = {
  ECC_NIST_EDWARDS25519: "ECC_NIST_EDWARDS25519",
  ECC_NIST_P256: "ECC_NIST_P256",
  ECC_NIST_P384: "ECC_NIST_P384",
  ECC_NIST_P521: "ECC_NIST_P521",
  ECC_SECG_P256K1: "ECC_SECG_P256K1",
  HMAC_224: "HMAC_224",
  HMAC_256: "HMAC_256",
  HMAC_384: "HMAC_384",
  HMAC_512: "HMAC_512",
  ML_DSA_44: "ML_DSA_44",
  ML_DSA_65: "ML_DSA_65",
  ML_DSA_87: "ML_DSA_87",
  RSA_2048: "RSA_2048",
  RSA_3072: "RSA_3072",
  RSA_4096: "RSA_4096",
  SM2: "SM2",
  SYMMETRIC_DEFAULT: "SYMMETRIC_DEFAULT",
} as const;
/**
 * @public
 */
export type KeySpec = (typeof KeySpec)[keyof typeof KeySpec];

/**
 * @public
 * @enum
 */
export const KeyUsageType = {
  ENCRYPT_DECRYPT: "ENCRYPT_DECRYPT",
  GENERATE_VERIFY_MAC: "GENERATE_VERIFY_MAC",
  KEY_AGREEMENT: "KEY_AGREEMENT",
  SIGN_VERIFY: "SIGN_VERIFY",
} as const;
/**
 * @public
 */
export type KeyUsageType = (typeof KeyUsageType)[keyof typeof KeyUsageType];

/**
 * @public
 * @enum
 */
export const OriginType = {
  AWS_CLOUDHSM: "AWS_CLOUDHSM",
  AWS_KMS: "AWS_KMS",
  EXTERNAL: "EXTERNAL",
  EXTERNAL_KEY_STORE: "EXTERNAL_KEY_STORE",
} as const;
/**
 * @public
 */
export type OriginType = (typeof OriginType)[keyof typeof OriginType];

/**
 * @public
 * @enum
 */
export const EncryptionAlgorithmSpec = {
  RSAES_OAEP_SHA_1: "RSAES_OAEP_SHA_1",
  RSAES_OAEP_SHA_256: "RSAES_OAEP_SHA_256",
  SM2PKE: "SM2PKE",
  SYMMETRIC_DEFAULT: "SYMMETRIC_DEFAULT",
} as const;
/**
 * @public
 */
export type EncryptionAlgorithmSpec = (typeof EncryptionAlgorithmSpec)[keyof typeof EncryptionAlgorithmSpec];

/**
 * @public
 * @enum
 */
export const ExpirationModelType = {
  KEY_MATERIAL_DOES_NOT_EXPIRE: "KEY_MATERIAL_DOES_NOT_EXPIRE",
  KEY_MATERIAL_EXPIRES: "KEY_MATERIAL_EXPIRES",
} as const;
/**
 * @public
 */
export type ExpirationModelType = (typeof ExpirationModelType)[keyof typeof ExpirationModelType];

/**
 * @public
 * @enum
 */
export const KeyAgreementAlgorithmSpec = {
  ECDH: "ECDH",
} as const;
/**
 * @public
 */
export type KeyAgreementAlgorithmSpec = (typeof KeyAgreementAlgorithmSpec)[keyof typeof KeyAgreementAlgorithmSpec];

/**
 * @public
 * @enum
 */
export const KeyManagerType = {
  AWS: "AWS",
  CUSTOMER: "CUSTOMER",
} as const;
/**
 * @public
 */
export type KeyManagerType = (typeof KeyManagerType)[keyof typeof KeyManagerType];

/**
 * @public
 * @enum
 */
export const KeyState = {
  Creating: "Creating",
  Disabled: "Disabled",
  Enabled: "Enabled",
  PendingDeletion: "PendingDeletion",
  PendingImport: "PendingImport",
  PendingReplicaDeletion: "PendingReplicaDeletion",
  Unavailable: "Unavailable",
  Updating: "Updating",
} as const;
/**
 * @public
 */
export type KeyState = (typeof KeyState)[keyof typeof KeyState];

/**
 * @public
 * @enum
 */
export const MacAlgorithmSpec = {
  HMAC_SHA_224: "HMAC_SHA_224",
  HMAC_SHA_256: "HMAC_SHA_256",
  HMAC_SHA_384: "HMAC_SHA_384",
  HMAC_SHA_512: "HMAC_SHA_512",
} as const;
/**
 * @public
 */
export type MacAlgorithmSpec = (typeof MacAlgorithmSpec)[keyof typeof MacAlgorithmSpec];

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
export const SigningAlgorithmSpec = {
  ECDSA_SHA_256: "ECDSA_SHA_256",
  ECDSA_SHA_384: "ECDSA_SHA_384",
  ECDSA_SHA_512: "ECDSA_SHA_512",
  ED25519_PH_SHA_512: "ED25519_PH_SHA_512",
  ED25519_SHA_512: "ED25519_SHA_512",
  ML_DSA_SHAKE_256: "ML_DSA_SHAKE_256",
  RSASSA_PKCS1_V1_5_SHA_256: "RSASSA_PKCS1_V1_5_SHA_256",
  RSASSA_PKCS1_V1_5_SHA_384: "RSASSA_PKCS1_V1_5_SHA_384",
  RSASSA_PKCS1_V1_5_SHA_512: "RSASSA_PKCS1_V1_5_SHA_512",
  RSASSA_PSS_SHA_256: "RSASSA_PSS_SHA_256",
  RSASSA_PSS_SHA_384: "RSASSA_PSS_SHA_384",
  RSASSA_PSS_SHA_512: "RSASSA_PSS_SHA_512",
  SM2DSA: "SM2DSA",
} as const;
/**
 * @public
 */
export type SigningAlgorithmSpec = (typeof SigningAlgorithmSpec)[keyof typeof SigningAlgorithmSpec];

/**
 * @public
 * @enum
 */
export const DataKeyPairSpec = {
  ECC_NIST_EDWARDS25519: "ECC_NIST_EDWARDS25519",
  ECC_NIST_P256: "ECC_NIST_P256",
  ECC_NIST_P384: "ECC_NIST_P384",
  ECC_NIST_P521: "ECC_NIST_P521",
  ECC_SECG_P256K1: "ECC_SECG_P256K1",
  RSA_2048: "RSA_2048",
  RSA_3072: "RSA_3072",
  RSA_4096: "RSA_4096",
  SM2: "SM2",
} as const;
/**
 * @public
 */
export type DataKeyPairSpec = (typeof DataKeyPairSpec)[keyof typeof DataKeyPairSpec];

/**
 * @public
 * @enum
 */
export const DataKeySpec = {
  AES_128: "AES_128",
  AES_256: "AES_256",
} as const;
/**
 * @public
 */
export type DataKeySpec = (typeof DataKeySpec)[keyof typeof DataKeySpec];

/**
 * @public
 * @enum
 */
export const KeyEncryptionMechanism = {
  RSAES_OAEP_SHA_256: "RSAES_OAEP_SHA_256",
} as const;
/**
 * @public
 */
export type KeyEncryptionMechanism = (typeof KeyEncryptionMechanism)[keyof typeof KeyEncryptionMechanism];

/**
 * @public
 * @enum
 */
export const WrappingKeySpec = {
  RSA_2048: "RSA_2048",
  RSA_3072: "RSA_3072",
  RSA_4096: "RSA_4096",
  SM2: "SM2",
} as const;
/**
 * @public
 */
export type WrappingKeySpec = (typeof WrappingKeySpec)[keyof typeof WrappingKeySpec];

/**
 * @public
 * @enum
 */
export const ImportType = {
  EXISTING_KEY_MATERIAL: "EXISTING_KEY_MATERIAL",
  NEW_KEY_MATERIAL: "NEW_KEY_MATERIAL",
} as const;
/**
 * @public
 */
export type ImportType = (typeof ImportType)[keyof typeof ImportType];

/**
 * @public
 * @enum
 */
export const ImportState = {
  IMPORTED: "IMPORTED",
  PENDING_IMPORT: "PENDING_IMPORT",
} as const;
/**
 * @public
 */
export type ImportState = (typeof ImportState)[keyof typeof ImportState];

/**
 * @public
 * @enum
 */
export const IncludeKeyMaterial = {
  ALL_KEY_MATERIAL: "ALL_KEY_MATERIAL",
  ROTATIONS_ONLY: "ROTATIONS_ONLY",
} as const;
/**
 * @public
 */
export type IncludeKeyMaterial = (typeof IncludeKeyMaterial)[keyof typeof IncludeKeyMaterial];

/**
 * @public
 * @enum
 */
export const KeyMaterialState = {
  CURRENT: "CURRENT",
  NON_CURRENT: "NON_CURRENT",
  PENDING_MULTI_REGION_IMPORT_AND_ROTATION: "PENDING_MULTI_REGION_IMPORT_AND_ROTATION",
  PENDING_ROTATION: "PENDING_ROTATION",
} as const;
/**
 * @public
 */
export type KeyMaterialState = (typeof KeyMaterialState)[keyof typeof KeyMaterialState];

/**
 * @public
 * @enum
 */
export const RotationType = {
  AUTOMATIC: "AUTOMATIC",
  ON_DEMAND: "ON_DEMAND",
} as const;
/**
 * @public
 */
export type RotationType = (typeof RotationType)[keyof typeof RotationType];

/**
 * @public
 * @enum
 */
export const MessageType = {
  DIGEST: "DIGEST",
  EXTERNAL_MU: "EXTERNAL_MU",
  RAW: "RAW",
} as const;
/**
 * @public
 */
export type MessageType = (typeof MessageType)[keyof typeof MessageType];
