// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AppliedStatus = {
  APPLIED: "APPLIED",
  NOT_APPLIED: "NOT_APPLIED",
} as const;
/**
 * @public
 */
export type AppliedStatus = (typeof AppliedStatus)[keyof typeof AppliedStatus];

/**
 * @public
 * @enum
 */
export const AutoshiftExecutionStatus = {
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED",
} as const;
/**
 * @public
 */
export type AutoshiftExecutionStatus = (typeof AutoshiftExecutionStatus)[keyof typeof AutoshiftExecutionStatus];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  AUTOSHIFT_UPDATE_NOT_ALLOWED: "AutoshiftUpdateNotAllowed",
  CONFLICTING_PRACTICE_WINDOWS: "InvalidPracticeWindows",
  FIS_EXPERIMENT_UPDATE_NOT_ALLOWED: "FISExperimentUpdateNotAllowed",
  INVALID_ALARM_CONDITION: "InvalidAlarmCondition",
  INVALID_AZ: "InvalidAz",
  INVALID_CONDITION_TYPE: "InvalidConditionType",
  INVALID_EXPIRES_IN: "InvalidExpiresIn",
  INVALID_PRACTICE_ALLOWED_WINDOW: "InvalidPracticeAllowedWindow",
  INVALID_PRACTICE_BLOCKER: "InvalidPracticeBlocker",
  INVALID_RESOURCE_IDENTIFIER: "InvalidResourceIdentifier",
  INVALID_STATUS: "InvalidStatus",
  INVALID_TOKEN: "InvalidToken",
  MISSING_VALUE: "MissingValue",
  UNSUPPORTED_AZ: "UnsupportedAz",
  UNSUPPORTED_PRACTICE_CANCEL_SHIFT_TYPE: "UnsupportedPracticeCancelShiftType",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const AutoshiftAppliedStatus = {
  APPLIED: "APPLIED",
  NOT_APPLIED: "NOT_APPLIED",
} as const;
/**
 * @public
 */
export type AutoshiftAppliedStatus = (typeof AutoshiftAppliedStatus)[keyof typeof AutoshiftAppliedStatus];

/**
 * @public
 * @enum
 */
export const AutoshiftObserverNotificationStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AutoshiftObserverNotificationStatus =
  (typeof AutoshiftObserverNotificationStatus)[keyof typeof AutoshiftObserverNotificationStatus];

/**
 * @public
 * @enum
 */
export const ControlConditionType = {
  CLOUDWATCH: "CLOUDWATCH",
} as const;
/**
 * @public
 */
export type ControlConditionType = (typeof ControlConditionType)[keyof typeof ControlConditionType];

/**
 * @public
 * @enum
 */
export const ZonalShiftStatus = {
  ACTIVE: "ACTIVE",
  CANCELED: "CANCELED",
  EXPIRED: "EXPIRED",
} as const;
/**
 * @public
 */
export type ZonalShiftStatus = (typeof ZonalShiftStatus)[keyof typeof ZonalShiftStatus];

/**
 * @public
 * @enum
 */
export const ConflictExceptionReason = {
  AUTOSHIFT_ENABLED: "AutoShiftEnabled",
  PRACTICE_BLOCKING_ALARMS_RED: "PracticeBlockingAlarmsRed",
  PRACTICE_CONFIGURATION_ALREADY_EXISTS: "PracticeConfigurationAlreadyExists",
  PRACTICE_CONFIGURATION_DOES_NOT_EXIST: "PracticeConfigurationDoesNotExist",
  PRACTICE_IN_BLOCKED_DATES: "PracticeInBlockedDates",
  PRACTICE_IN_BLOCKED_WINDOWS: "PracticeInBlockedWindows",
  PRACTICE_OUTCOME_ALARMS_RED: "PracticeOutcomeAlarmsRed",
  PRACTICE_OUTSIDE_ALLOWED_WINDOWS: "PracticeOutsideAllowedWindows",
  SIMULTANEOUS_ZONAL_SHIFTS_CONFLICT: "SimultaneousZonalShiftsConflict",
  ZONAL_AUTOSHIFT_ACTIVE: "ZonalAutoshiftActive",
  ZONAL_SHIFT_ALREADY_EXISTS: "ZonalShiftAlreadyExists",
  ZONAL_SHIFT_STATUS_NOT_ACTIVE: "ZonalShiftStatusNotActive",
} as const;
/**
 * @public
 */
export type ConflictExceptionReason = (typeof ConflictExceptionReason)[keyof typeof ConflictExceptionReason];

/**
 * @public
 * @enum
 */
export const ZonalAutoshiftStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ZonalAutoshiftStatus = (typeof ZonalAutoshiftStatus)[keyof typeof ZonalAutoshiftStatus];

/**
 * @public
 * @enum
 */
export const PracticeRunOutcome = {
  CAPACITY_CHECK_FAILED: "CAPACITY_CHECK_FAILED",
  FAILED: "FAILED",
  INTERRUPTED: "INTERRUPTED",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type PracticeRunOutcome = (typeof PracticeRunOutcome)[keyof typeof PracticeRunOutcome];

/**
 * @public
 * @enum
 */
export const ShiftType = {
  FIS_EXPERIMENT: "FIS_EXPERIMENT",
  PRACTICE_RUN: "PRACTICE_RUN",
  ZONAL_AUTOSHIFT: "ZONAL_AUTOSHIFT",
  ZONAL_SHIFT: "ZONAL_SHIFT",
} as const;
/**
 * @public
 */
export type ShiftType = (typeof ShiftType)[keyof typeof ShiftType];
