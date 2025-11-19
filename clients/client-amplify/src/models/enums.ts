// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Stage = {
  BETA: "BETA",
  DEVELOPMENT: "DEVELOPMENT",
  EXPERIMENTAL: "EXPERIMENTAL",
  PRODUCTION: "PRODUCTION",
  PULL_REQUEST: "PULL_REQUEST",
} as const;
/**
 * @public
 */
export type Stage = (typeof Stage)[keyof typeof Stage];

/**
 * @public
 * @enum
 */
export const CacheConfigType = {
  AMPLIFY_MANAGED: "AMPLIFY_MANAGED",
  AMPLIFY_MANAGED_NO_COOKIES: "AMPLIFY_MANAGED_NO_COOKIES",
} as const;
/**
 * @public
 */
export type CacheConfigType = (typeof CacheConfigType)[keyof typeof CacheConfigType];

/**
 * @public
 * @enum
 */
export const BuildComputeType = {
  LARGE_16GB: "LARGE_16GB",
  STANDARD_8GB: "STANDARD_8GB",
  XLARGE_72GB: "XLARGE_72GB",
} as const;
/**
 * @public
 */
export type BuildComputeType = (typeof BuildComputeType)[keyof typeof BuildComputeType];

/**
 * @public
 * @enum
 */
export const Platform = {
  WEB: "WEB",
  WEB_COMPUTE: "WEB_COMPUTE",
  WEB_DYNAMIC: "WEB_DYNAMIC",
} as const;
/**
 * @public
 */
export type Platform = (typeof Platform)[keyof typeof Platform];

/**
 * @public
 * @enum
 */
export const RepositoryCloneMethod = {
  SIGV4: "SIGV4",
  SSH: "SSH",
  TOKEN: "TOKEN",
} as const;
/**
 * @public
 */
export type RepositoryCloneMethod = (typeof RepositoryCloneMethod)[keyof typeof RepositoryCloneMethod];

/**
 * @public
 * @enum
 */
export const WafStatus = {
  ASSOCIATING: "ASSOCIATING",
  ASSOCIATION_FAILED: "ASSOCIATION_FAILED",
  ASSOCIATION_SUCCESS: "ASSOCIATION_SUCCESS",
  DISASSOCIATING: "DISASSOCIATING",
  DISASSOCIATION_FAILED: "DISASSOCIATION_FAILED",
} as const;
/**
 * @public
 */
export type WafStatus = (typeof WafStatus)[keyof typeof WafStatus];

/**
 * @public
 * @enum
 */
export const CertificateType = {
  AMPLIFY_MANAGED: "AMPLIFY_MANAGED",
  CUSTOM: "CUSTOM",
} as const;
/**
 * @public
 */
export type CertificateType = (typeof CertificateType)[keyof typeof CertificateType];

/**
 * @public
 * @enum
 */
export const DomainStatus = {
  AVAILABLE: "AVAILABLE",
  AWAITING_APP_CNAME: "AWAITING_APP_CNAME",
  CREATING: "CREATING",
  FAILED: "FAILED",
  IMPORTING_CUSTOM_CERTIFICATE: "IMPORTING_CUSTOM_CERTIFICATE",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING_DEPLOYMENT: "PENDING_DEPLOYMENT",
  PENDING_VERIFICATION: "PENDING_VERIFICATION",
  REQUESTING_CERTIFICATE: "REQUESTING_CERTIFICATE",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus];

/**
 * @public
 * @enum
 */
export const UpdateStatus = {
  AWAITING_APP_CNAME: "AWAITING_APP_CNAME",
  IMPORTING_CUSTOM_CERTIFICATE: "IMPORTING_CUSTOM_CERTIFICATE",
  PENDING_DEPLOYMENT: "PENDING_DEPLOYMENT",
  PENDING_VERIFICATION: "PENDING_VERIFICATION",
  REQUESTING_CERTIFICATE: "REQUESTING_CERTIFICATE",
  UPDATE_COMPLETE: "UPDATE_COMPLETE",
  UPDATE_FAILED: "UPDATE_FAILED",
} as const;
/**
 * @public
 */
export type UpdateStatus = (typeof UpdateStatus)[keyof typeof UpdateStatus];

/**
 * @public
 * @enum
 */
export const JobType = {
  MANUAL: "MANUAL",
  RELEASE: "RELEASE",
  RETRY: "RETRY",
  WEB_HOOK: "WEB_HOOK",
} as const;
/**
 * @public
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

/**
 * @public
 * @enum
 */
export const SourceUrlType = {
  BUCKET_PREFIX: "BUCKET_PREFIX",
  ZIP: "ZIP",
} as const;
/**
 * @public
 */
export type SourceUrlType = (typeof SourceUrlType)[keyof typeof SourceUrlType];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  CREATED: "CREATED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  PROVISIONING: "PROVISIONING",
  RUNNING: "RUNNING",
  SUCCEED: "SUCCEED",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];
