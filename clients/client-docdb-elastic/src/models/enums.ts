// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const OptInType = {
  APPLY_ON: "APPLY_ON",
  IMMEDIATE: "IMMEDIATE",
  NEXT_MAINTENANCE: "NEXT_MAINTENANCE",
  UNDO_OPT_IN: "UNDO_OPT_IN",
} as const;
/**
 * @public
 */
export type OptInType = (typeof OptInType)[keyof typeof OptInType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
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
export const Auth = {
  PLAIN_TEXT: "PLAIN_TEXT",
  SECRET_ARN: "SECRET_ARN",
} as const;
/**
 * @public
 */
export type Auth = (typeof Auth)[keyof typeof Auth];

/**
 * @public
 * @enum
 */
export const SnapshotType = {
  AUTOMATED: "AUTOMATED",
  MANUAL: "MANUAL",
} as const;
/**
 * @public
 */
export type SnapshotType = (typeof SnapshotType)[keyof typeof SnapshotType];

/**
 * @public
 * @enum
 */
export const Status = {
  ACTIVE: "ACTIVE",
  COPYING: "COPYING",
  CREATING: "CREATING",
  DELETING: "DELETING",
  INACCESSIBLE_ENCRYPTION_CREDENTIALS_RECOVERABLE: "INACCESSIBLE_ENCRYPTION_CREDENTIALS_RECOVERABLE",
  INACCESSIBLE_ENCRYPTION_CREDS: "INACCESSIBLE_ENCRYPTION_CREDS",
  INACCESSIBLE_SECRET_ARN: "INACCESSIBLE_SECRET_ARN",
  INACCESSIBLE_VPC_ENDPOINT: "INACCESSIBLE_VPC_ENDPOINT",
  INCOMPATIBLE_NETWORK: "INCOMPATIBLE_NETWORK",
  INVALID_SECURITY_GROUP_ID: "INVALID_SECURITY_GROUP_ID",
  INVALID_SUBNET_ID: "INVALID_SUBNET_ID",
  IP_ADDRESS_LIMIT_EXCEEDED: "IP_ADDRESS_LIMIT_EXCEEDED",
  MAINTENANCE: "MAINTENANCE",
  MERGING: "MERGING",
  MODIFYING: "MODIFYING",
  SPLITTING: "SPLITTING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UPDATING: "UPDATING",
  VPC_ENDPOINT_LIMIT_EXCEEDED: "VPC_ENDPOINT_LIMIT_EXCEEDED",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];
