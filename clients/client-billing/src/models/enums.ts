// smithy-typescript generated code
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
export const Dimension = {
  LINKED_ACCOUNT: "LINKED_ACCOUNT",
} as const;
/**
 * @public
 */
export type Dimension = (typeof Dimension)[keyof typeof Dimension];

/**
 * @public
 * @enum
 */
export const BillingViewType = {
  BILLING_GROUP: "BILLING_GROUP",
  CUSTOM: "CUSTOM",
  PRIMARY: "PRIMARY",
} as const;
/**
 * @public
 */
export type BillingViewType = (typeof BillingViewType)[keyof typeof BillingViewType];

/**
 * @public
 * @enum
 */
export const BillingViewStatus = {
  CREATING: "CREATING",
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type BillingViewStatus = (typeof BillingViewStatus)[keyof typeof BillingViewStatus];

/**
 * @public
 * @enum
 */
export const BillingViewStatusReason = {
  AGGREGATE_SOURCE: "AGGREGATE_SOURCE",
  CYCLIC_DEPENDENCY: "CYCLIC_DEPENDENCY",
  SOURCE_VIEW_ACCESS_DENIED: "SOURCE_VIEW_ACCESS_DENIED",
  SOURCE_VIEW_DEPTH_EXCEEDED: "SOURCE_VIEW_DEPTH_EXCEEDED",
  SOURCE_VIEW_NOT_FOUND: "SOURCE_VIEW_NOT_FOUND",
  SOURCE_VIEW_UNHEALTHY: "SOURCE_VIEW_UNHEALTHY",
  SOURCE_VIEW_UPDATING: "SOURCE_VIEW_UPDATING",
  VIEW_OWNER_NOT_MANAGEMENT_ACCOUNT: "VIEW_OWNER_NOT_MANAGEMENT_ACCOUNT",
} as const;
/**
 * @public
 */
export type BillingViewStatusReason = (typeof BillingViewStatusReason)[keyof typeof BillingViewStatusReason];
