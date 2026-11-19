// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const CertificateField = {
  x509Issuer: "x509Issuer",
  x509SAN: "x509SAN",
  x509Subject: "x509Subject",
} as const;
/**
 * @public
 */
export type CertificateField = (typeof CertificateField)[keyof typeof CertificateField];

/**
 * @public
 * @enum
 */
export const TipStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type TipStatus = (typeof TipStatus)[keyof typeof TipStatus];

/**
 * @public
 * @enum
 */
export const TipSubjectSource = {
  x509SAN_URI: "x509SAN/URI",
  x509Subject_CN: "x509Subject/CN",
} as const;
/**
 * @public
 */
export type TipSubjectSource = (typeof TipSubjectSource)[keyof typeof TipSubjectSource];

/**
 * @public
 * @enum
 */
export const TipSubjectType = {
  user: "user",
  workload: "workload",
} as const;
/**
 * @public
 */
export type TipSubjectType = (typeof TipSubjectType)[keyof typeof TipSubjectType];

/**
 * @public
 * @enum
 */
export const NotificationChannel = {
  ALL: "ALL",
} as const;
/**
 * @public
 */
export type NotificationChannel = (typeof NotificationChannel)[keyof typeof NotificationChannel];

/**
 * @public
 * @enum
 */
export const NotificationEvent = {
  CA_CERTIFICATE_EXPIRY: "CA_CERTIFICATE_EXPIRY",
  END_ENTITY_CERTIFICATE_EXPIRY: "END_ENTITY_CERTIFICATE_EXPIRY",
} as const;
/**
 * @public
 */
export type NotificationEvent = (typeof NotificationEvent)[keyof typeof NotificationEvent];

/**
 * @public
 * @enum
 */
export const TrustAnchorType = {
  AWS_ACM_PCA: "AWS_ACM_PCA",
  CERTIFICATE_BUNDLE: "CERTIFICATE_BUNDLE",
  SELF_SIGNED_REPOSITORY: "SELF_SIGNED_REPOSITORY",
} as const;
/**
 * @public
 */
export type TrustAnchorType = (typeof TrustAnchorType)[keyof typeof TrustAnchorType];
