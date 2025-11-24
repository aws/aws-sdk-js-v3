// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ChatTokenCapability = {
  DELETE_MESSAGE: "DELETE_MESSAGE",
  DISCONNECT_USER: "DISCONNECT_USER",
  SEND_MESSAGE: "SEND_MESSAGE",
} as const;
/**
 * @public
 */
export type ChatTokenCapability = (typeof ChatTokenCapability)[keyof typeof ChatTokenCapability];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  ROOM: "ROOM",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const CreateLoggingConfigurationState = {
  ACTIVE: "ACTIVE",
} as const;
/**
 * @public
 */
export type CreateLoggingConfigurationState =
  (typeof CreateLoggingConfigurationState)[keyof typeof CreateLoggingConfigurationState];

/**
 * @public
 * @enum
 */
export const FallbackResult = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;
/**
 * @public
 */
export type FallbackResult = (typeof FallbackResult)[keyof typeof FallbackResult];

/**
 * @public
 * @enum
 */
export const LoggingConfigurationState = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type LoggingConfigurationState = (typeof LoggingConfigurationState)[keyof typeof LoggingConfigurationState];

/**
 * @public
 * @enum
 */
export const UpdateLoggingConfigurationState = {
  ACTIVE: "ACTIVE",
} as const;
/**
 * @public
 */
export type UpdateLoggingConfigurationState =
  (typeof UpdateLoggingConfigurationState)[keyof typeof UpdateLoggingConfigurationState];
