// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const RuleFailureAction = {
  /**
   * <p>The failed rule is recorded as a <code>WARNING</code> instead and the request ends <code>APPROVED</code>. Overlap with another time off request for the user that is <code>APPROVED</code> or being approved (<code>CONFLICTING_TIME_OFF_REQUEST</code>) is always an <code>ERROR</code> and is never waived.</p>
   */
  OVERRIDE: "OVERRIDE",
  /**
   * <p>The failed rule is recorded as an <code>ERROR</code> and the request ends <code>REJECTED</code>.</p>
   */
  REJECT: "REJECT",
} as const;
/**
 * @public
 */
export type RuleFailureAction = (typeof RuleFailureAction)[keyof typeof RuleFailureAction];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  /**
   * <p>The request body could not be parsed.</p>
   */
  CANNOT_PARSE: "CANNOT_PARSE",
  /**
   * <p>One or more input fields failed validation. See <code>FieldList</code>.</p>
   */
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  /**
   * <p>The input is invalid for a reason not covered by the other values.</p>
   */
  OTHER: "OTHER",
  /**
   * <p>The request referenced an operation that does not exist.</p>
   */
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
export const ApprovalType = {
  /**
   * <p>Connect Customer decides the request itself, with no second decision call needed. The request may be <code>PENDING</code> while that decision is processed, then ends <code>APPROVED</code> or <code>REJECTED</code>. Does not bypass rule evaluation.</p>
   */
  AUTOMATIC: "AUTOMATIC",
  /**
   * <p>The request is created in <code>AWAITING_APPROVAL</code> and rests there until an explicit <code>ApproveTimeOff</code> or <code>RejectTimeOff</code> call decides it.</p>
   */
  AWAIT_APPROVAL: "AWAIT_APPROVAL",
} as const;
/**
 * @public
 */
export type ApprovalType = (typeof ApprovalType)[keyof typeof ApprovalType];

/**
 * @public
 * @enum
 */
export const TimeOffStatus = {
  /**
   * <p>The request passed rule evaluation, or a failed rule was overridden with <code>RuleFailureAction</code> <code>OVERRIDE</code>, and the time off is applied to the user's schedule.</p>
   */
  APPROVED: "APPROVED",
  /**
   * <p>The request is waiting for an <code>ApproveTimeOff</code> or <code>RejectTimeOff</code> decision.</p>
   */
  AWAITING_APPROVAL: "AWAITING_APPROVAL",
  /**
   * <p>The request is cancelled.</p>
   */
  CANCELLED: "CANCELLED",
  /**
   * <p>Connect Customer is processing a change to the request, such as a create, approval, rejection, or cancellation, or an edit in the Connect Customer admin website. The request changes to another status when processing completes.</p>
   */
  PENDING: "PENDING",
  /**
   * <p>The request was rejected, either explicitly or by a failed rule during rule evaluation.</p>
   */
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type TimeOffStatus = (typeof TimeOffStatus)[keyof typeof TimeOffStatus];

/**
 * @public
 * @enum
 */
export const TimeOffValidationCode = {
  /**
   * <p>The requested period overlaps another time off request for the user that is <code>APPROVED</code> or being approved. On <code>CreateTimeOff</code> with <code>AUTOMATIC</code>, overlapping overtime and voluntary time off activities count too. <code>ApproveTimeOff</code> cancels them instead.</p>
   */
  CONFLICTING_TIME_OFF_REQUEST: "CONFLICTING_TIME_OFF_REQUEST",
  /**
   * <p>The time off allowance shared by the user's forecast or demand group for the requested activity is too low to cover this request.</p>
   */
  INSUFFICIENT_GROUP_TIME_OFF_ALLOWANCE: "INSUFFICIENT_GROUP_TIME_OFF_ALLOWANCE",
  /**
   * <p>The daily time off allowance shared by the user's staffing group for the requested activity is too low to cover this request.</p>
   */
  INSUFFICIENT_STAFFING_GROUP_TIME_OFF_ALLOWANCE: "INSUFFICIENT_STAFFING_GROUP_TIME_OFF_ALLOWANCE",
  /**
   * <p>The user's own time off balance for the requested activity is less than the time this request deducts. Connect Customer deducts only working time in the request window, not the full window.</p>
   */
  INSUFFICIENT_USER_TIME_OFF_BALANCE: "INSUFFICIENT_USER_TIME_OFF_BALANCE",
} as const;
/**
 * @public
 */
export type TimeOffValidationCode = (typeof TimeOffValidationCode)[keyof typeof TimeOffValidationCode];

/**
 * @public
 * @enum
 */
export const TimeOffValidationSeverity = {
  /**
   * <p>This validation result is a reason the request was rejected.</p>
   */
  ERROR: "ERROR",
  /**
   * <p>This validation result is a breach of the configured rules that is not sufficient to reject the request, either due to rules configuration or because the caller sent <code>RuleFailureAction</code> <code>OVERRIDE</code>.</p>
   */
  WARNING: "WARNING",
} as const;
/**
 * @public
 */
export type TimeOffValidationSeverity = (typeof TimeOffValidationSeverity)[keyof typeof TimeOffValidationSeverity];

/**
 * @public
 * @enum
 */
export const DurationUnit = {
  DAYS: "DAYS",
  HOURS: "HOURS",
  MINUTES: "MINUTES",
} as const;
/**
 * @public
 */
export type DurationUnit = (typeof DurationUnit)[keyof typeof DurationUnit];
