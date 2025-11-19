// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const RecordType = {
  CNAME: "CNAME",
} as const;
/**
 * @public
 */
export type RecordType = (typeof RecordType)[keyof typeof RecordType];

/**
 * @public
 * @enum
 */
export const ValidationMethod = {
  DNS: "DNS",
  EMAIL: "EMAIL",
  HTTP: "HTTP",
} as const;
/**
 * @public
 */
export type ValidationMethod = (typeof ValidationMethod)[keyof typeof ValidationMethod];

/**
 * @public
 * @enum
 */
export const DomainStatus = {
  FAILED: "FAILED",
  PENDING_VALIDATION: "PENDING_VALIDATION",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus];

/**
 * @public
 * @enum
 */
export const ExtendedKeyUsageName = {
  ANY: "ANY",
  CODE_SIGNING: "CODE_SIGNING",
  CUSTOM: "CUSTOM",
  EMAIL_PROTECTION: "EMAIL_PROTECTION",
  IPSEC_END_SYSTEM: "IPSEC_END_SYSTEM",
  IPSEC_TUNNEL: "IPSEC_TUNNEL",
  IPSEC_USER: "IPSEC_USER",
  NONE: "NONE",
  OCSP_SIGNING: "OCSP_SIGNING",
  TIME_STAMPING: "TIME_STAMPING",
  TLS_WEB_CLIENT_AUTHENTICATION: "TLS_WEB_CLIENT_AUTHENTICATION",
  TLS_WEB_SERVER_AUTHENTICATION: "TLS_WEB_SERVER_AUTHENTICATION",
} as const;
/**
 * @public
 */
export type ExtendedKeyUsageName = (typeof ExtendedKeyUsageName)[keyof typeof ExtendedKeyUsageName];

/**
 * @public
 * @enum
 */
export const FailureReason = {
  ADDITIONAL_VERIFICATION_REQUIRED: "ADDITIONAL_VERIFICATION_REQUIRED",
  CAA_ERROR: "CAA_ERROR",
  DOMAIN_NOT_ALLOWED: "DOMAIN_NOT_ALLOWED",
  DOMAIN_VALIDATION_DENIED: "DOMAIN_VALIDATION_DENIED",
  INVALID_PUBLIC_DOMAIN: "INVALID_PUBLIC_DOMAIN",
  NO_AVAILABLE_CONTACTS: "NO_AVAILABLE_CONTACTS",
  OTHER: "OTHER",
  PCA_ACCESS_DENIED: "PCA_ACCESS_DENIED",
  PCA_INVALID_ARGS: "PCA_INVALID_ARGS",
  PCA_INVALID_ARN: "PCA_INVALID_ARN",
  PCA_INVALID_DURATION: "PCA_INVALID_DURATION",
  PCA_INVALID_STATE: "PCA_INVALID_STATE",
  PCA_LIMIT_EXCEEDED: "PCA_LIMIT_EXCEEDED",
  PCA_NAME_CONSTRAINTS_VALIDATION: "PCA_NAME_CONSTRAINTS_VALIDATION",
  PCA_REQUEST_FAILED: "PCA_REQUEST_FAILED",
  PCA_RESOURCE_NOT_FOUND: "PCA_RESOURCE_NOT_FOUND",
  SLR_NOT_FOUND: "SLR_NOT_FOUND",
} as const;
/**
 * @public
 */
export type FailureReason = (typeof FailureReason)[keyof typeof FailureReason];

/**
 * @public
 * @enum
 */
export const KeyAlgorithm = {
  EC_prime256v1: "EC_prime256v1",
  EC_secp384r1: "EC_secp384r1",
  EC_secp521r1: "EC_secp521r1",
  RSA_1024: "RSA_1024",
  RSA_2048: "RSA_2048",
  RSA_3072: "RSA_3072",
  RSA_4096: "RSA_4096",
} as const;
/**
 * @public
 */
export type KeyAlgorithm = (typeof KeyAlgorithm)[keyof typeof KeyAlgorithm];

/**
 * @public
 * @enum
 */
export const KeyUsageName = {
  ANY: "ANY",
  CERTIFICATE_SIGNING: "CERTIFICATE_SIGNING",
  CRL_SIGNING: "CRL_SIGNING",
  CUSTOM: "CUSTOM",
  DATA_ENCIPHERMENT: "DATA_ENCIPHERMENT",
  DECIPHER_ONLY: "DECIPHER_ONLY",
  DIGITAL_SIGNATURE: "DIGITAL_SIGNATURE",
  ENCHIPER_ONLY: "ENCIPHER_ONLY",
  KEY_AGREEMENT: "KEY_AGREEMENT",
  KEY_ENCIPHERMENT: "KEY_ENCIPHERMENT",
  NON_REPUDATION: "NON_REPUDIATION",
} as const;
/**
 * @public
 */
export type KeyUsageName = (typeof KeyUsageName)[keyof typeof KeyUsageName];

/**
 * @public
 * @enum
 */
export const CertificateManagedBy = {
  CLOUDFRONT: "CLOUDFRONT",
} as const;
/**
 * @public
 */
export type CertificateManagedBy = (typeof CertificateManagedBy)[keyof typeof CertificateManagedBy];

/**
 * @public
 * @enum
 */
export const CertificateTransparencyLoggingPreference = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type CertificateTransparencyLoggingPreference =
  (typeof CertificateTransparencyLoggingPreference)[keyof typeof CertificateTransparencyLoggingPreference];

/**
 * @public
 * @enum
 */
export const CertificateExport = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type CertificateExport = (typeof CertificateExport)[keyof typeof CertificateExport];

/**
 * @public
 * @enum
 */
export const RenewalEligibility = {
  ELIGIBLE: "ELIGIBLE",
  INELIGIBLE: "INELIGIBLE",
} as const;
/**
 * @public
 */
export type RenewalEligibility = (typeof RenewalEligibility)[keyof typeof RenewalEligibility];

/**
 * @public
 * @enum
 */
export const RenewalStatus = {
  FAILED: "FAILED",
  PENDING_AUTO_RENEWAL: "PENDING_AUTO_RENEWAL",
  PENDING_VALIDATION: "PENDING_VALIDATION",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type RenewalStatus = (typeof RenewalStatus)[keyof typeof RenewalStatus];

/**
 * @public
 * @enum
 */
export const RevocationReason = {
  AFFILIATION_CHANGED: "AFFILIATION_CHANGED",
  A_A_COMPROMISE: "A_A_COMPROMISE",
  CA_COMPROMISE: "CA_COMPROMISE",
  CERTIFICATE_HOLD: "CERTIFICATE_HOLD",
  CESSATION_OF_OPERATION: "CESSATION_OF_OPERATION",
  KEY_COMPROMISE: "KEY_COMPROMISE",
  PRIVILEGE_WITHDRAWN: "PRIVILEGE_WITHDRAWN",
  REMOVE_FROM_CRL: "REMOVE_FROM_CRL",
  SUPERCEDED: "SUPERCEDED",
  SUPERSEDED: "SUPERSEDED",
  UNSPECIFIED: "UNSPECIFIED",
} as const;
/**
 * @public
 */
export type RevocationReason = (typeof RevocationReason)[keyof typeof RevocationReason];

/**
 * @public
 * @enum
 */
export const CertificateStatus = {
  EXPIRED: "EXPIRED",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
  ISSUED: "ISSUED",
  PENDING_VALIDATION: "PENDING_VALIDATION",
  REVOKED: "REVOKED",
  VALIDATION_TIMED_OUT: "VALIDATION_TIMED_OUT",
} as const;
/**
 * @public
 */
export type CertificateStatus = (typeof CertificateStatus)[keyof typeof CertificateStatus];

/**
 * @public
 * @enum
 */
export const CertificateType = {
  AMAZON_ISSUED: "AMAZON_ISSUED",
  IMPORTED: "IMPORTED",
  PRIVATE: "PRIVATE",
} as const;
/**
 * @public
 */
export type CertificateType = (typeof CertificateType)[keyof typeof CertificateType];

/**
 * @public
 * @enum
 */
export const SortBy = {
  CREATED_AT: "CREATED_AT",
} as const;
/**
 * @public
 */
export type SortBy = (typeof SortBy)[keyof typeof SortBy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
