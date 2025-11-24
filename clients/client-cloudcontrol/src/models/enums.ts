// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const HandlerErrorCode = {
  ACCESS_DENIED: "AccessDenied",
  ALREADY_EXISTS: "AlreadyExists",
  GENERAL_SERVICE_EXCEPTION: "GeneralServiceException",
  INTERNAL_FAILURE: "InternalFailure",
  INVALID_CREDENTIALS: "InvalidCredentials",
  INVALID_REQUEST: "InvalidRequest",
  NETWORK_FAILURE: "NetworkFailure",
  NOT_FOUND: "NotFound",
  NOT_STABILIZED: "NotStabilized",
  NOT_UPDATABLE: "NotUpdatable",
  RESOURCE_CONFLICT: "ResourceConflict",
  SERVICE_INTERNAL_ERROR: "ServiceInternalError",
  SERVICE_LIMIT_EXCEEDED: "ServiceLimitExceeded",
  SERVICE_TIMEOUT: "ServiceTimeout",
  THROTTLING: "Throttling",
  UNAUTHORIZED_TAGGING_OPERATION: "UnauthorizedTaggingOperation",
} as const;
/**
 * @public
 */
export type HandlerErrorCode = (typeof HandlerErrorCode)[keyof typeof HandlerErrorCode];

/**
 * @public
 * @enum
 */
export const Operation = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
} as const;
/**
 * @public
 */
export type Operation = (typeof Operation)[keyof typeof Operation];

/**
 * @public
 * @enum
 */
export const OperationStatus = {
  CANCEL_COMPLETE: "CANCEL_COMPLETE",
  CANCEL_IN_PROGRESS: "CANCEL_IN_PROGRESS",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type OperationStatus = (typeof OperationStatus)[keyof typeof OperationStatus];
