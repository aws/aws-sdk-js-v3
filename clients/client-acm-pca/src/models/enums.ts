// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessMethodType = {
  CA_REPOSITORY: "CA_REPOSITORY",
  RESOURCE_PKI_MANIFEST: "RESOURCE_PKI_MANIFEST",
  RESOURCE_PKI_NOTIFY: "RESOURCE_PKI_NOTIFY",
} as const;
/**
 * @public
 */
export type AccessMethodType = (typeof AccessMethodType)[keyof typeof AccessMethodType];

/**
 * @public
 * @enum
 */
export const KeyAlgorithm = {
  EC_prime256v1: "EC_prime256v1",
  EC_secp384r1: "EC_secp384r1",
  EC_secp521r1: "EC_secp521r1",
  ML_DSA_44: "ML_DSA_44",
  ML_DSA_65: "ML_DSA_65",
  ML_DSA_87: "ML_DSA_87",
  RSA_2048: "RSA_2048",
  RSA_3072: "RSA_3072",
  RSA_4096: "RSA_4096",
  SM2: "SM2",
} as const;
/**
 * @public
 */
export type KeyAlgorithm = (typeof KeyAlgorithm)[keyof typeof KeyAlgorithm];

/**
 * @public
 * @enum
 */
export const SigningAlgorithm = {
  ML_DSA_44: "ML_DSA_44",
  ML_DSA_65: "ML_DSA_65",
  ML_DSA_87: "ML_DSA_87",
  SHA256WITHECDSA: "SHA256WITHECDSA",
  SHA256WITHRSA: "SHA256WITHRSA",
  SHA384WITHECDSA: "SHA384WITHECDSA",
  SHA384WITHRSA: "SHA384WITHRSA",
  SHA512WITHECDSA: "SHA512WITHECDSA",
  SHA512WITHRSA: "SHA512WITHRSA",
  SM3WITHSM2: "SM3WITHSM2",
} as const;
/**
 * @public
 */
export type SigningAlgorithm = (typeof SigningAlgorithm)[keyof typeof SigningAlgorithm];

/**
 * @public
 * @enum
 */
export const CertificateAuthorityType = {
  ROOT: "ROOT",
  SUBORDINATE: "SUBORDINATE",
} as const;
/**
 * @public
 */
export type CertificateAuthorityType = (typeof CertificateAuthorityType)[keyof typeof CertificateAuthorityType];

/**
 * @public
 * @enum
 */
export const KeyStorageSecurityStandard = {
  CCPC_LEVEL_1_OR_HIGHER: "CCPC_LEVEL_1_OR_HIGHER",
  FIPS_140_2_LEVEL_2_OR_HIGHER: "FIPS_140_2_LEVEL_2_OR_HIGHER",
  FIPS_140_2_LEVEL_3_OR_HIGHER: "FIPS_140_2_LEVEL_3_OR_HIGHER",
} as const;
/**
 * @public
 */
export type KeyStorageSecurityStandard = (typeof KeyStorageSecurityStandard)[keyof typeof KeyStorageSecurityStandard];

/**
 * @public
 * @enum
 */
export const CrlType = {
  COMPLETE: "COMPLETE",
  PARTITIONED: "PARTITIONED",
} as const;
/**
 * @public
 */
export type CrlType = (typeof CrlType)[keyof typeof CrlType];

/**
 * @public
 * @enum
 */
export const S3ObjectAcl = {
  BUCKET_OWNER_FULL_CONTROL: "BUCKET_OWNER_FULL_CONTROL",
  PUBLIC_READ: "PUBLIC_READ",
} as const;
/**
 * @public
 */
export type S3ObjectAcl = (typeof S3ObjectAcl)[keyof typeof S3ObjectAcl];

/**
 * @public
 * @enum
 */
export const CertificateAuthorityUsageMode = {
  GENERAL_PURPOSE: "GENERAL_PURPOSE",
  SHORT_LIVED_CERTIFICATE: "SHORT_LIVED_CERTIFICATE",
} as const;
/**
 * @public
 */
export type CertificateAuthorityUsageMode =
  (typeof CertificateAuthorityUsageMode)[keyof typeof CertificateAuthorityUsageMode];

/**
 * @public
 * @enum
 */
export const AuditReportResponseFormat = {
  CSV: "CSV",
  JSON: "JSON",
} as const;
/**
 * @public
 */
export type AuditReportResponseFormat = (typeof AuditReportResponseFormat)[keyof typeof AuditReportResponseFormat];

/**
 * @public
 * @enum
 */
export const ActionType = {
  GetCertificate: "GetCertificate",
  IssueCertificate: "IssueCertificate",
  ListPermissions: "ListPermissions",
} as const;
/**
 * @public
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

/**
 * @public
 * @enum
 */
export const FailureReason = {
  OTHER: "OTHER",
  REQUEST_TIMED_OUT: "REQUEST_TIMED_OUT",
  UNSUPPORTED_ALGORITHM: "UNSUPPORTED_ALGORITHM",
} as const;
/**
 * @public
 */
export type FailureReason = (typeof FailureReason)[keyof typeof FailureReason];

/**
 * @public
 * @enum
 */
export const CertificateAuthorityStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DISABLED: "DISABLED",
  EXPIRED: "EXPIRED",
  FAILED: "FAILED",
  PENDING_CERTIFICATE: "PENDING_CERTIFICATE",
} as const;
/**
 * @public
 */
export type CertificateAuthorityStatus = (typeof CertificateAuthorityStatus)[keyof typeof CertificateAuthorityStatus];

/**
 * @public
 * @enum
 */
export const AuditReportStatus = {
  CREATING: "CREATING",
  FAILED: "FAILED",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type AuditReportStatus = (typeof AuditReportStatus)[keyof typeof AuditReportStatus];

/**
 * @public
 * @enum
 */
export const PolicyQualifierId = {
  CPS: "CPS",
} as const;
/**
 * @public
 */
export type PolicyQualifierId = (typeof PolicyQualifierId)[keyof typeof PolicyQualifierId];

/**
 * @public
 * @enum
 */
export const ExtendedKeyUsageType = {
  CERTIFICATE_TRANSPARENCY: "CERTIFICATE_TRANSPARENCY",
  CLIENT_AUTH: "CLIENT_AUTH",
  CODE_SIGNING: "CODE_SIGNING",
  DOCUMENT_SIGNING: "DOCUMENT_SIGNING",
  EMAIL_PROTECTION: "EMAIL_PROTECTION",
  OCSP_SIGNING: "OCSP_SIGNING",
  SERVER_AUTH: "SERVER_AUTH",
  SMART_CARD_LOGIN: "SMART_CARD_LOGIN",
  TIME_STAMPING: "TIME_STAMPING",
} as const;
/**
 * @public
 */
export type ExtendedKeyUsageType = (typeof ExtendedKeyUsageType)[keyof typeof ExtendedKeyUsageType];

/**
 * @public
 * @enum
 */
export const ValidityPeriodType = {
  ABSOLUTE: "ABSOLUTE",
  DAYS: "DAYS",
  END_DATE: "END_DATE",
  MONTHS: "MONTHS",
  YEARS: "YEARS",
} as const;
/**
 * @public
 */
export type ValidityPeriodType = (typeof ValidityPeriodType)[keyof typeof ValidityPeriodType];

/**
 * @public
 * @enum
 */
export const ResourceOwner = {
  OTHER_ACCOUNTS: "OTHER_ACCOUNTS",
  SELF: "SELF",
} as const;
/**
 * @public
 */
export type ResourceOwner = (typeof ResourceOwner)[keyof typeof ResourceOwner];

/**
 * @public
 * @enum
 */
export const RevocationReason = {
  AFFILIATION_CHANGED: "AFFILIATION_CHANGED",
  A_A_COMPROMISE: "A_A_COMPROMISE",
  CERTIFICATE_AUTHORITY_COMPROMISE: "CERTIFICATE_AUTHORITY_COMPROMISE",
  CESSATION_OF_OPERATION: "CESSATION_OF_OPERATION",
  KEY_COMPROMISE: "KEY_COMPROMISE",
  PRIVILEGE_WITHDRAWN: "PRIVILEGE_WITHDRAWN",
  SUPERSEDED: "SUPERSEDED",
  UNSPECIFIED: "UNSPECIFIED",
} as const;
/**
 * @public
 */
export type RevocationReason = (typeof RevocationReason)[keyof typeof RevocationReason];
