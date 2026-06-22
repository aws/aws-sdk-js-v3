// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const InstrumentationType = {
  /**
   * Temporary instrumentation that expires automatically (default 24 hours)
   */
  BREAKPOINT: "BREAKPOINT",
  /**
   * Permanent instrumentation that persists until explicitly deleted
   */
  PROBE: "PROBE",
} as const;
/**
 * @public
 */
export type InstrumentationType = (typeof InstrumentationType)[keyof typeof InstrumentationType];

/**
 * @public
 * @enum
 */
export const BatchDeleteErrorCode = {
  /**
   * Insufficient permissions to delete the configuration.
   */
  ACCESS_DENIED: "AccessDeniedException",
  /**
   * Internal service error for this item.
   */
  INTERNAL_SERVICE_ERROR: "InternalServiceException",
  /**
   * Configuration already deleted or expired.
   */
  RESOURCE_NOT_FOUND: "ResourceNotFoundException",
} as const;
/**
 * @public
 */
export type BatchDeleteErrorCode = (typeof BatchDeleteErrorCode)[keyof typeof BatchDeleteErrorCode];

/**
 * @public
 * @enum
 */
export const ServiceLevelObjectiveBudgetStatus = {
  BREACHED: "BREACHED",
  INSUFFICIENT_DATA: "INSUFFICIENT_DATA",
  OK: "OK",
  WARNING: "WARNING",
} as const;
/**
 * @public
 */
export type ServiceLevelObjectiveBudgetStatus =
  (typeof ServiceLevelObjectiveBudgetStatus)[keyof typeof ServiceLevelObjectiveBudgetStatus];

/**
 * @public
 * @enum
 */
export const EvaluationType = {
  PERIOD_BASED: "PeriodBased",
  REQUEST_BASED: "RequestBased",
} as const;
/**
 * @public
 */
export type EvaluationType = (typeof EvaluationType)[keyof typeof EvaluationType];

/**
 * @public
 * @enum
 */
export const DurationUnit = {
  DAY: "DAY",
  HOUR: "HOUR",
  MINUTE: "MINUTE",
  MONTH: "MONTH",
} as const;
/**
 * @public
 */
export type DurationUnit = (typeof DurationUnit)[keyof typeof DurationUnit];

/**
 * @public
 * @enum
 */
export const ServiceLevelIndicatorComparisonOperator = {
  GREATER_THAN: "GreaterThan",
  GREATER_THAN_OR_EQUAL_TO: "GreaterThanOrEqualTo",
  LESS_THAN: "LessThan",
  LESS_THAN_OR_EQUAL_TO: "LessThanOrEqualTo",
} as const;
/**
 * @public
 */
export type ServiceLevelIndicatorComparisonOperator =
  (typeof ServiceLevelIndicatorComparisonOperator)[keyof typeof ServiceLevelIndicatorComparisonOperator];

/**
 * @public
 * @enum
 */
export const SelectionType = {
  EXPLICIT: "EXPLICIT",
  PREFIX: "PREFIX",
  REGEX: "REGEX",
} as const;
/**
 * @public
 */
export type SelectionType = (typeof SelectionType)[keyof typeof SelectionType];

/**
 * @public
 * @enum
 */
export const ServiceLevelIndicatorMetricType = {
  AVAILABILITY: "AVAILABILITY",
  LATENCY: "LATENCY",
} as const;
/**
 * @public
 */
export type ServiceLevelIndicatorMetricType =
  (typeof ServiceLevelIndicatorMetricType)[keyof typeof ServiceLevelIndicatorMetricType];

/**
 * @public
 * @enum
 */
export const StandardUnit = {
  BITS: "Bits",
  BITS_SECOND: "Bits/Second",
  BYTES: "Bytes",
  BYTES_SECOND: "Bytes/Second",
  COUNT: "Count",
  COUNT_SECOND: "Count/Second",
  GIGABITS: "Gigabits",
  GIGABITS_SECOND: "Gigabits/Second",
  GIGABYTES: "Gigabytes",
  GIGABYTES_SECOND: "Gigabytes/Second",
  KILOBITS: "Kilobits",
  KILOBITS_SECOND: "Kilobits/Second",
  KILOBYTES: "Kilobytes",
  KILOBYTES_SECOND: "Kilobytes/Second",
  MEGABITS: "Megabits",
  MEGABITS_SECOND: "Megabits/Second",
  MEGABYTES: "Megabytes",
  MEGABYTES_SECOND: "Megabytes/Second",
  MICROSECONDS: "Microseconds",
  MILLISECONDS: "Milliseconds",
  NONE: "None",
  PERCENT: "Percent",
  SECONDS: "Seconds",
  TERABITS: "Terabits",
  TERABITS_SECOND: "Terabits/Second",
  TERABYTES: "Terabytes",
  TERABYTES_SECOND: "Terabytes/Second",
} as const;
/**
 * @public
 */
export type StandardUnit = (typeof StandardUnit)[keyof typeof StandardUnit];

/**
 * @public
 * @enum
 */
export const ProgrammingLanguage = {
  JAVA: "Java",
  JAVASCRIPT: "Javascript",
  PYTHON: "Python",
} as const;
/**
 * @public
 */
export type ProgrammingLanguage = (typeof ProgrammingLanguage)[keyof typeof ProgrammingLanguage];

/**
 * @public
 * @enum
 */
export const DynamicInstrumentationSignalType = {
  SNAPSHOT: "SNAPSHOT",
} as const;
/**
 * @public
 */
export type DynamicInstrumentationSignalType =
  (typeof DynamicInstrumentationSignalType)[keyof typeof DynamicInstrumentationSignalType];

/**
 * @public
 * @enum
 */
export const DynamicInstrumentationDeletionStatus = {
  DELETED: "DELETED",
} as const;
/**
 * @public
 */
export type DynamicInstrumentationDeletionStatus =
  (typeof DynamicInstrumentationDeletionStatus)[keyof typeof DynamicInstrumentationDeletionStatus];

/**
 * @public
 * @enum
 */
export const InstrumentationConfigurationStatus = {
  ACTIVE: "ACTIVE",
  DISABLED: "DISABLED",
  ERROR: "ERROR",
  READY: "READY",
} as const;
/**
 * @public
 */
export type InstrumentationConfigurationStatus =
  (typeof InstrumentationConfigurationStatus)[keyof typeof InstrumentationConfigurationStatus];

/**
 * @public
 * @enum
 */
export const InstrumentationErrorCause = {
  FILE_NOT_FOUND: "FILE_NOT_FOUND",
  LANGUAGE_MISMATCH: "LANGUAGE_MISMATCH",
  LINE_NOT_EXECUTABLE: "LINE_NOT_EXECUTABLE",
  METHOD_NOT_FOUND: "METHOD_NOT_FOUND",
  OVERLOADED_METHODS: "OVERLOADED_METHODS",
  RUNTIME_ERROR: "RUNTIME_ERROR",
} as const;
/**
 * @public
 */
export type InstrumentationErrorCause = (typeof InstrumentationErrorCause)[keyof typeof InstrumentationErrorCause];

/**
 * @public
 * @enum
 */
export const DetailLevel = {
  BRIEF: "BRIEF",
  DETAILED: "DETAILED",
} as const;
/**
 * @public
 */
export type DetailLevel = (typeof DetailLevel)[keyof typeof DetailLevel];

/**
 * @public
 * @enum
 */
export const Severity = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type Severity = (typeof Severity)[keyof typeof Severity];

/**
 * @public
 * @enum
 */
export const ConnectionType = {
  DIRECT: "DIRECT",
  INDIRECT: "INDIRECT",
} as const;
/**
 * @public
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

/**
 * @public
 * @enum
 */
export const ChangeEventType = {
  CONFIGURATION: "CONFIGURATION",
  DEPLOYMENT: "DEPLOYMENT",
} as const;
/**
 * @public
 */
export type ChangeEventType = (typeof ChangeEventType)[keyof typeof ChangeEventType];

/**
 * @public
 * @enum
 */
export const UnprocessedStatusEventFailureReason = {
  INTERNAL_ERROR: "INTERNAL_ERROR",
  THROTTLED: "THROTTLED",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;
/**
 * @public
 */
export type UnprocessedStatusEventFailureReason =
  (typeof UnprocessedStatusEventFailureReason)[keyof typeof UnprocessedStatusEventFailureReason];

/**
 * @public
 * @enum
 */
export const MetricSourceType = {
  APPMONITOR: "AppMonitor",
  CANARY: "Canary",
  CLOUDWATCH_METRIC: "CloudWatchMetric",
  SERVICE: "Service",
  SERVICE_DEPENDENCY: "ServiceDependency",
  SERVICE_OPERATION: "ServiceOperation",
} as const;
/**
 * @public
 */
export type MetricSourceType = (typeof MetricSourceType)[keyof typeof MetricSourceType];
