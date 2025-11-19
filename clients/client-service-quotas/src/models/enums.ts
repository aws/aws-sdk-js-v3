// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AppliedLevelEnum = {
  ACCOUNT: "ACCOUNT",
  ALL: "ALL",
  RESOURCE: "RESOURCE",
} as const;
/**
 * @public
 */
export type AppliedLevelEnum = (typeof AppliedLevelEnum)[keyof typeof AppliedLevelEnum];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  DEPENDENCY_ACCESS_DENIED_ERROR: "DEPENDENCY_ACCESS_DENIED_ERROR",
  DEPENDENCY_SERVICE_ERROR: "DEPENDENCY_SERVICE_ERROR",
  DEPENDENCY_THROTTLING_ERROR: "DEPENDENCY_THROTTLING_ERROR",
  SERVICE_QUOTA_NOT_AVAILABLE_ERROR: "SERVICE_QUOTA_NOT_AVAILABLE_ERROR",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const ServiceQuotaTemplateAssociationStatus = {
  ASSOCIATED: "ASSOCIATED",
  DISASSOCIATED: "DISASSOCIATED",
} as const;
/**
 * @public
 */
export type ServiceQuotaTemplateAssociationStatus =
  (typeof ServiceQuotaTemplateAssociationStatus)[keyof typeof ServiceQuotaTemplateAssociationStatus];

/**
 * @public
 * @enum
 */
export const OptInLevel = {
  ACCOUNT: "ACCOUNT",
} as const;
/**
 * @public
 */
export type OptInLevel = (typeof OptInLevel)[keyof typeof OptInLevel];

/**
 * @public
 * @enum
 */
export const OptInStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type OptInStatus = (typeof OptInStatus)[keyof typeof OptInStatus];

/**
 * @public
 * @enum
 */
export const OptInType = {
  NotifyAndAdjust: "NotifyAndAdjust",
  NotifyOnly: "NotifyOnly",
} as const;
/**
 * @public
 */
export type OptInType = (typeof OptInType)[keyof typeof OptInType];

/**
 * @public
 * @enum
 */
export const PeriodUnit = {
  DAY: "DAY",
  HOUR: "HOUR",
  MICROSECOND: "MICROSECOND",
  MILLISECOND: "MILLISECOND",
  MINUTE: "MINUTE",
  SECOND: "SECOND",
  WEEK: "WEEK",
} as const;
/**
 * @public
 */
export type PeriodUnit = (typeof PeriodUnit)[keyof typeof PeriodUnit];

/**
 * @public
 * @enum
 */
export const QuotaContextScope = {
  ACCOUNT: "ACCOUNT",
  RESOURCE: "RESOURCE",
} as const;
/**
 * @public
 */
export type QuotaContextScope = (typeof QuotaContextScope)[keyof typeof QuotaContextScope];

/**
 * @public
 * @enum
 */
export const RequestStatus = {
  APPROVED: "APPROVED",
  CASE_CLOSED: "CASE_CLOSED",
  CASE_OPENED: "CASE_OPENED",
  DENIED: "DENIED",
  INVALID_REQUEST: "INVALID_REQUEST",
  NOT_APPROVED: "NOT_APPROVED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus];
