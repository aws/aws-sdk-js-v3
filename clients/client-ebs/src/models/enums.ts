// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessDeniedExceptionReason = {
  DEPENDENCY_ACCESS_DENIED: "DEPENDENCY_ACCESS_DENIED",
  UNAUTHORIZED_ACCOUNT: "UNAUTHORIZED_ACCOUNT",
} as const;
/**
 * @public
 */
export type AccessDeniedExceptionReason =
  (typeof AccessDeniedExceptionReason)[keyof typeof AccessDeniedExceptionReason];

/**
 * @public
 * @enum
 */
export const ChecksumAggregationMethod = {
  CHECKSUM_AGGREGATION_LINEAR: "LINEAR",
} as const;
/**
 * @public
 */
export type ChecksumAggregationMethod = (typeof ChecksumAggregationMethod)[keyof typeof ChecksumAggregationMethod];

/**
 * @public
 * @enum
 */
export const ChecksumAlgorithm = {
  CHECKSUM_ALGORITHM_SHA256: "SHA256",
} as const;
/**
 * @public
 */
export type ChecksumAlgorithm = (typeof ChecksumAlgorithm)[keyof typeof ChecksumAlgorithm];

/**
 * @public
 * @enum
 */
export const Status = {
  COMPLETED: "completed",
  ERROR: "error",
  PENDING: "pending",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const RequestThrottledExceptionReason = {
  ACCOUNT_THROTTLED: "ACCOUNT_THROTTLED",
  DEPENDENCY_REQUEST_THROTTLED: "DEPENDENCY_REQUEST_THROTTLED",
  RESOURCE_LEVEL_THROTTLE: "RESOURCE_LEVEL_THROTTLE",
} as const;
/**
 * @public
 */
export type RequestThrottledExceptionReason =
  (typeof RequestThrottledExceptionReason)[keyof typeof RequestThrottledExceptionReason];

/**
 * @public
 * @enum
 */
export const ResourceNotFoundExceptionReason = {
  DEPENDENCY_RESOURCE_NOT_FOUND: "DEPENDENCY_RESOURCE_NOT_FOUND",
  GRANT_NOT_FOUND: "GRANT_NOT_FOUND",
  IMAGE_NOT_FOUND: "IMAGE_NOT_FOUND",
  SNAPSHOT_NOT_FOUND: "SNAPSHOT_NOT_FOUND",
} as const;
/**
 * @public
 */
export type ResourceNotFoundExceptionReason =
  (typeof ResourceNotFoundExceptionReason)[keyof typeof ResourceNotFoundExceptionReason];

/**
 * @public
 * @enum
 */
export const ServiceQuotaExceededExceptionReason = {
  DEPENDENCY_SERVICE_QUOTA_EXCEEDED: "DEPENDENCY_SERVICE_QUOTA_EXCEEDED",
} as const;
/**
 * @public
 */
export type ServiceQuotaExceededExceptionReason =
  (typeof ServiceQuotaExceededExceptionReason)[keyof typeof ServiceQuotaExceededExceptionReason];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CONFLICTING_BLOCK_UPDATE: "CONFLICTING_BLOCK_UPDATE",
  INVALID_BLOCK: "INVALID_BLOCK",
  INVALID_BLOCK_TOKEN: "INVALID_BLOCK_TOKEN",
  INVALID_CONTENT_ENCODING: "INVALID_CONTENT_ENCODING",
  INVALID_CUSTOMER_KEY: "INVALID_CUSTOMER_KEY",
  INVALID_DEPENDENCY_REQUEST: "INVALID_DEPENDENCY_REQUEST",
  INVALID_GRANT_TOKEN: "INVALID_GRANT_TOKEN",
  INVALID_IMAGE_ID: "INVALID_IMAGE_ID",
  INVALID_PAGE_TOKEN: "INVALID_PAGE_TOKEN",
  INVALID_PARAMETER_VALUE: "INVALID_PARAMETER_VALUE",
  INVALID_SNAPSHOT_ID: "INVALID_SNAPSHOT_ID",
  INVALID_TAG: "INVALID_TAG",
  INVALID_VOLUME_SIZE: "INVALID_VOLUME_SIZE",
  UNRELATED_SNAPSHOTS: "UNRELATED_SNAPSHOTS",
  WRITE_REQUEST_TIMEOUT: "WRITE_REQUEST_TIMEOUT",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const SSEType = {
  NONE: "none",
  SSE_EBS: "sse-ebs",
  SSE_KMS: "sse-kms",
} as const;
/**
 * @public
 */
export type SSEType = (typeof SSEType)[keyof typeof SSEType];
