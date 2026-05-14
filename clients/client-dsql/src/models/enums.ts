// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ClusterStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  IDLE: "IDLE",
  INACTIVE: "INACTIVE",
  PENDING_DELETE: "PENDING_DELETE",
  PENDING_SETUP: "PENDING_SETUP",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ClusterStatus = (typeof ClusterStatus)[keyof typeof ClusterStatus];

/**
 * @public
 * @enum
 */
export const EncryptionStatus = {
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
  KMS_KEY_INACCESSIBLE: "KMS_KEY_INACCESSIBLE",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type EncryptionStatus = (typeof EncryptionStatus)[keyof typeof EncryptionStatus];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  AWS_OWNED_KMS_KEY: "AWS_OWNED_KMS_KEY",
  CUSTOMER_MANAGED_KMS_KEY: "CUSTOMER_MANAGED_KMS_KEY",
} as const;
/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  DELETION_PROTECTION_ENABLED: "deletionProtectionEnabled",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const StreamFormat = {
  JSON: "JSON",
} as const;
/**
 * @public
 */
export type StreamFormat = (typeof StreamFormat)[keyof typeof StreamFormat];

/**
 * @public
 * @enum
 */
export const StreamOrdering = {
  UNORDERED: "UNORDERED",
} as const;
/**
 * @public
 */
export type StreamOrdering = (typeof StreamOrdering)[keyof typeof StreamOrdering];

/**
 * @public
 * @enum
 */
export const StreamStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  IMPAIRED: "IMPAIRED",
} as const;
/**
 * @public
 */
export type StreamStatus = (typeof StreamStatus)[keyof typeof StreamStatus];

/**
 * @public
 * @enum
 */
export const StreamFailureErrorCode = {
  CLUSTER_CMK_INACCESSIBLE: "CLUSTER_CMK_INACCESSIBLE",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  KINESIS_ACCESS_DENIED: "KINESIS_ACCESS_DENIED",
  KINESIS_KMS_ACCESS_DENIED: "KINESIS_KMS_ACCESS_DENIED",
  KINESIS_OVERSIZE_RECORD: "KINESIS_OVERSIZE_RECORD",
  KINESIS_STREAM_NOT_FOUND: "KINESIS_STREAM_NOT_FOUND",
  KINESIS_THROUGHPUT_EXCEEDED: "KINESIS_THROUGHPUT_EXCEEDED",
  ROLE_ACCESS_DENIED: "ROLE_ACCESS_DENIED",
} as const;
/**
 * @public
 */
export type StreamFailureErrorCode = (typeof StreamFailureErrorCode)[keyof typeof StreamFailureErrorCode];
