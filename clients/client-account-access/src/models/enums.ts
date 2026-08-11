// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ErrorCode = {
  AUTHORIZATION_ERROR: "AUTHORIZATION_ERROR",
  INTERNAL_SERVICE_ERROR: "INTERNAL_SERVICE_ERROR",
  RESOURCE_NOT_FOUND_ERROR: "RESOURCE_NOT_FOUND_ERROR",
  SERVICE_QUOTA_EXCEEDED_ERROR: "SERVICE_QUOTA_EXCEEDED_ERROR",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const Status = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];
