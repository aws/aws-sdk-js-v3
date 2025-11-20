// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const UnlockDelayUnit = {
  DAYS: "DAYS",
} as const;
/**
 * @public
 */
export type UnlockDelayUnit = (typeof UnlockDelayUnit)[keyof typeof UnlockDelayUnit];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  EBS_SNAPSHOT: "EBS_SNAPSHOT",
  EBS_VOLUME: "EBS_VOLUME",
  EC2_IMAGE: "EC2_IMAGE",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const RetentionPeriodUnit = {
  DAYS: "DAYS",
} as const;
/**
 * @public
 */
export type RetentionPeriodUnit = (typeof RetentionPeriodUnit)[keyof typeof RetentionPeriodUnit];

/**
 * @public
 * @enum
 */
export const LockState = {
  LOCKED: "locked",
  PENDING_UNLOCK: "pending_unlock",
  UNLOCKED: "unlocked",
} as const;
/**
 * @public
 */
export type LockState = (typeof LockState)[keyof typeof LockState];

/**
 * @public
 * @enum
 */
export const RuleStatus = {
  AVAILABLE: "available",
  PENDING: "pending",
} as const;
/**
 * @public
 */
export type RuleStatus = (typeof RuleStatus)[keyof typeof RuleStatus];

/**
 * @public
 * @enum
 */
export const ServiceQuotaExceededExceptionReason = {
  SERVICE_QUOTA_EXCEEDED: "SERVICE_QUOTA_EXCEEDED",
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
  INVALID_PAGE_TOKEN: "INVALID_PAGE_TOKEN",
  INVALID_PARAMETER_VALUE: "INVALID_PARAMETER_VALUE",
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
  INVALID_RULE_STATE: "INVALID_RULE_STATE",
} as const;
/**
 * @public
 */
export type ConflictExceptionReason = (typeof ConflictExceptionReason)[keyof typeof ConflictExceptionReason];

/**
 * @public
 * @enum
 */
export const ResourceNotFoundExceptionReason = {
  RULE_NOT_FOUND: "RULE_NOT_FOUND",
} as const;
/**
 * @public
 */
export type ResourceNotFoundExceptionReason =
  (typeof ResourceNotFoundExceptionReason)[keyof typeof ResourceNotFoundExceptionReason];
