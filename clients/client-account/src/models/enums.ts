// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const PrimaryEmailUpdateStatus = {
  ACCEPTED: "ACCEPTED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type PrimaryEmailUpdateStatus = (typeof PrimaryEmailUpdateStatus)[keyof typeof PrimaryEmailUpdateStatus];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  INVALID_REGION_OPT_TARGET: "invalidRegionOptTarget",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const AlternateContactType = {
  BILLING: "BILLING",
  OPERATIONS: "OPERATIONS",
  SECURITY: "SECURITY",
} as const;
/**
 * @public
 */
export type AlternateContactType = (typeof AlternateContactType)[keyof typeof AlternateContactType];

/**
 * @public
 * @enum
 */
export const AwsAccountState = {
  ACTIVE: "ACTIVE",
  CLOSED: "CLOSED",
  PENDING_ACTIVATION: "PENDING_ACTIVATION",
  SUSPENDED: "SUSPENDED",
} as const;
/**
 * @public
 */
export type AwsAccountState = (typeof AwsAccountState)[keyof typeof AwsAccountState];

/**
 * @public
 * @enum
 */
export const RegionOptStatus = {
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  ENABLED: "ENABLED",
  ENABLED_BY_DEFAULT: "ENABLED_BY_DEFAULT",
  ENABLING: "ENABLING",
} as const;
/**
 * @public
 */
export type RegionOptStatus = (typeof RegionOptStatus)[keyof typeof RegionOptStatus];
