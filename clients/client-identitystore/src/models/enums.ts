// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessDeniedExceptionReason = {
  KMS_ACCESS_DENIED: "KMS_ACCESS_DENIED",
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
export const ResourceNotFoundExceptionReason = {
  KMS_KEY_NOT_FOUND: "KMS_KEY_NOT_FOUND",
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
export const ResourceType = {
  GROUP: "GROUP",
  GROUP_MEMBERSHIP: "GROUP_MEMBERSHIP",
  IDENTITY_STORE: "IDENTITY_STORE",
  RESOURCE_POLICY: "RESOURCE_POLICY",
  USER: "USER",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ThrottlingExceptionReason = {
  KMS_THROTTLING: "KMS_THROTTLING",
} as const;
/**
 * @public
 */
export type ThrottlingExceptionReason = (typeof ThrottlingExceptionReason)[keyof typeof ThrottlingExceptionReason];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  KMS_DISABLED: "KMS_DISABLED",
  KMS_INVALID_ARN: "KMS_INVALID_ARN",
  KMS_INVALID_KEY_USAGE: "KMS_INVALID_KEY_USAGE",
  KMS_INVALID_STATE: "KMS_INVALID_STATE",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const ConflictExceptionReason = {
  CONCURRENT_MODIFICATION: "CONCURRENT_MODIFICATION",
  UNIQUENESS_CONSTRAINT_VIOLATION: "UNIQUENESS_CONSTRAINT_VIOLATION",
} as const;
/**
 * @public
 */
export type ConflictExceptionReason = (typeof ConflictExceptionReason)[keyof typeof ConflictExceptionReason];

/**
 * @public
 * @enum
 */
export const UserStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
