// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const CertificateKeyPairOrigin = {
  ACME: "ACME",
  AWS_MANAGED: "AWS_MANAGED",
  CUSTOMER_PROVIDED: "CUSTOMER_PROVIDED",
} as const;
/**
 * @public
 */
export type CertificateKeyPairOrigin = (typeof CertificateKeyPairOrigin)[keyof typeof CertificateKeyPairOrigin];

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
export const AcmeAccountStatus = {
  DEACTIVATED: "DEACTIVATED",
  REVOKED: "REVOKED",
  VALID: "VALID",
} as const;
/**
 * @public
 */
export type AcmeAccountStatus = (typeof AcmeAccountStatus)[keyof typeof AcmeAccountStatus];

/**
 * @public
 * @enum
 */
export const AcmeAuthorizationBehavior = {
  PRE_APPROVED: "PRE_APPROVED",
} as const;
/**
 * @public
 */
export type AcmeAuthorizationBehavior = (typeof AcmeAuthorizationBehavior)[keyof typeof AcmeAuthorizationBehavior];

/**
 * @public
 * @enum
 */
export const AcmeContact = {
  NOT_REQUIRED: "NOT_REQUIRED",
  REQUIRED: "REQUIRED",
} as const;
/**
 * @public
 */
export type AcmeContact = (typeof AcmeContact)[keyof typeof AcmeContact];

/**
 * @public
 * @enum
 */
export const AcmeDomainValidationFailureReason = {
  ACCESS_DENIED: "ACCESS_DENIED",
  DOMAIN_MISMATCH: "DOMAIN_MISMATCH",
  DOMAIN_NOT_ALLOWED: "DOMAIN_NOT_ALLOWED",
  ENDPOINT_NOT_ACTIVE: "ENDPOINT_NOT_ACTIVE",
  HOSTED_ZONE_NOT_FOUND: "HOSTED_ZONE_NOT_FOUND",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  INVALID_CHANGE_BATCH: "INVALID_CHANGE_BATCH",
  INVALID_PUBLIC_DOMAIN: "INVALID_PUBLIC_DOMAIN",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type AcmeDomainValidationFailureReason =
  (typeof AcmeDomainValidationFailureReason)[keyof typeof AcmeDomainValidationFailureReason];

/**
 * @public
 * @enum
 */
export const DomainScopeOption = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DomainScopeOption = (typeof DomainScopeOption)[keyof typeof DomainScopeOption];

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
export const PrevalidationType = {
  DNS_PREVALIDATION: "DNS_PREVALIDATION",
} as const;
/**
 * @public
 */
export type PrevalidationType = (typeof PrevalidationType)[keyof typeof PrevalidationType];

/**
 * @public
 * @enum
 */
export const AcmeDomainValidationStatus = {
  DELETING: "DELETING",
  INVALID: "INVALID",
  VALID: "VALID",
  VALIDATING: "VALIDATING",
} as const;
/**
 * @public
 */
export type AcmeDomainValidationStatus = (typeof AcmeDomainValidationStatus)[keyof typeof AcmeDomainValidationStatus];

/**
 * @public
 * @enum
 */
export const PublicKeyAlgorithm = {
  EC_PRIME256_V1: "EC_prime256v1",
  EC_SECP384_R1: "EC_secp384r1",
  RSA_2048: "RSA_2048",
} as const;
/**
 * @public
 */
export type PublicKeyAlgorithm = (typeof PublicKeyAlgorithm)[keyof typeof PublicKeyAlgorithm];

/**
 * @public
 * @enum
 */
export const AcmeEndpointStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type AcmeEndpointStatus = (typeof AcmeEndpointStatus)[keyof typeof AcmeEndpointStatus];

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
export const ComparisonOperator = {
  CONTAINS: "CONTAINS",
  EQUALS: "EQUALS",
} as const;
/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const TimeType = {
  DAYS: "DAYS",
  HOURS: "HOURS",
  MINUTES: "MINUTES",
} as const;
/**
 * @public
 */
export type TimeType = (typeof TimeType)[keyof typeof TimeType];

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

/**
 * @public
 * @enum
 */
export const SearchCertificatesSortBy = {
  ACME_ACCOUNT_ID: "ACME_ACCOUNT_ID",
  ACME_ENDPOINT_ARN: "ACME_ENDPOINT_ARN",
  CERTIFICATE_ARN: "CERTIFICATE_ARN",
  CERTIFICATE_KEY_PAIR_ORIGIN: "CERTIFICATE_KEY_PAIR_ORIGIN",
  COMMON_NAME: "COMMON_NAME",
  CREATED_AT: "CREATED_AT",
  EXPORTED: "EXPORTED",
  EXPORT_OPTION: "EXPORT_OPTION",
  IMPORTED_AT: "IMPORTED_AT",
  IN_USE: "IN_USE",
  ISSUED_AT: "ISSUED_AT",
  KEY_ALGORITHM: "KEY_ALGORITHM",
  MANAGED_BY: "MANAGED_BY",
  NOT_AFTER: "NOT_AFTER",
  NOT_BEFORE: "NOT_BEFORE",
  RENEWAL_ELIGIBILITY: "RENEWAL_ELIGIBILITY",
  RENEWAL_STATUS: "RENEWAL_STATUS",
  REVOKED_AT: "REVOKED_AT",
  STATUS: "STATUS",
  TYPE: "TYPE",
  VALIDATION_METHOD: "VALIDATION_METHOD",
} as const;
/**
 * @public
 */
export type SearchCertificatesSortBy = (typeof SearchCertificatesSortBy)[keyof typeof SearchCertificatesSortBy];

/**
 * @public
 * @enum
 */
export const SearchCertificatesSortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SearchCertificatesSortOrder =
  (typeof SearchCertificatesSortOrder)[keyof typeof SearchCertificatesSortOrder];
