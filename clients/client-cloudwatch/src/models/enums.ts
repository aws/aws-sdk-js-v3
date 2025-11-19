// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ActionsSuppressedBy = {
  Alarm: "Alarm",
  ExtensionPeriod: "ExtensionPeriod",
  WaitPeriod: "WaitPeriod",
} as const;
/**
 * @public
 */
export type ActionsSuppressedBy = (typeof ActionsSuppressedBy)[keyof typeof ActionsSuppressedBy];

/**
 * @public
 * @enum
 */
export const AlarmType = {
  CompositeAlarm: "CompositeAlarm",
  MetricAlarm: "MetricAlarm",
} as const;
/**
 * @public
 */
export type AlarmType = (typeof AlarmType)[keyof typeof AlarmType];

/**
 * @public
 * @enum
 */
export const HistoryItemType = {
  Action: "Action",
  AlarmContributorAction: "AlarmContributorAction",
  AlarmContributorStateUpdate: "AlarmContributorStateUpdate",
  ConfigurationUpdate: "ConfigurationUpdate",
  StateUpdate: "StateUpdate",
} as const;
/**
 * @public
 */
export type HistoryItemType = (typeof HistoryItemType)[keyof typeof HistoryItemType];

/**
 * @public
 * @enum
 */
export const StandardUnit = {
  Bits: "Bits",
  Bits_Second: "Bits/Second",
  Bytes: "Bytes",
  Bytes_Second: "Bytes/Second",
  Count: "Count",
  Count_Second: "Count/Second",
  Gigabits: "Gigabits",
  Gigabits_Second: "Gigabits/Second",
  Gigabytes: "Gigabytes",
  Gigabytes_Second: "Gigabytes/Second",
  Kilobits: "Kilobits",
  Kilobits_Second: "Kilobits/Second",
  Kilobytes: "Kilobytes",
  Kilobytes_Second: "Kilobytes/Second",
  Megabits: "Megabits",
  Megabits_Second: "Megabits/Second",
  Megabytes: "Megabytes",
  Megabytes_Second: "Megabytes/Second",
  Microseconds: "Microseconds",
  Milliseconds: "Milliseconds",
  None: "None",
  Percent: "Percent",
  Seconds: "Seconds",
  Terabits: "Terabits",
  Terabits_Second: "Terabits/Second",
  Terabytes: "Terabytes",
  Terabytes_Second: "Terabytes/Second",
} as const;
/**
 * @public
 */
export type StandardUnit = (typeof StandardUnit)[keyof typeof StandardUnit];

/**
 * @public
 * @enum
 */
export const AnomalyDetectorStateValue = {
  PENDING_TRAINING: "PENDING_TRAINING",
  TRAINED: "TRAINED",
  TRAINED_INSUFFICIENT_DATA: "TRAINED_INSUFFICIENT_DATA",
} as const;
/**
 * @public
 */
export type AnomalyDetectorStateValue = (typeof AnomalyDetectorStateValue)[keyof typeof AnomalyDetectorStateValue];

/**
 * @public
 * @enum
 */
export const AnomalyDetectorType = {
  METRIC_MATH: "METRIC_MATH",
  SINGLE_METRIC: "SINGLE_METRIC",
} as const;
/**
 * @public
 */
export type AnomalyDetectorType = (typeof AnomalyDetectorType)[keyof typeof AnomalyDetectorType];

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  GreaterThanOrEqualToThreshold: "GreaterThanOrEqualToThreshold",
  GreaterThanThreshold: "GreaterThanThreshold",
  GreaterThanUpperThreshold: "GreaterThanUpperThreshold",
  LessThanLowerOrGreaterThanUpperThreshold: "LessThanLowerOrGreaterThanUpperThreshold",
  LessThanLowerThreshold: "LessThanLowerThreshold",
  LessThanOrEqualToThreshold: "LessThanOrEqualToThreshold",
  LessThanThreshold: "LessThanThreshold",
} as const;
/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const StateValue = {
  ALARM: "ALARM",
  INSUFFICIENT_DATA: "INSUFFICIENT_DATA",
  OK: "OK",
} as const;
/**
 * @public
 */
export type StateValue = (typeof StateValue)[keyof typeof StateValue];

/**
 * @public
 * @enum
 */
export const ScanBy = {
  TIMESTAMP_ASCENDING: "TimestampAscending",
  TIMESTAMP_DESCENDING: "TimestampDescending",
} as const;
/**
 * @public
 */
export type ScanBy = (typeof ScanBy)[keyof typeof ScanBy];

/**
 * @public
 * @enum
 */
export const EvaluationState = {
  PARTIAL_DATA: "PARTIAL_DATA",
} as const;
/**
 * @public
 */
export type EvaluationState = (typeof EvaluationState)[keyof typeof EvaluationState];

/**
 * @public
 * @enum
 */
export const Statistic = {
  Average: "Average",
  Maximum: "Maximum",
  Minimum: "Minimum",
  SampleCount: "SampleCount",
  Sum: "Sum",
} as const;
/**
 * @public
 */
export type Statistic = (typeof Statistic)[keyof typeof Statistic];

/**
 * @public
 * @enum
 */
export const StatusCode = {
  COMPLETE: "Complete",
  FORBIDDEN: "Forbidden",
  INTERNAL_ERROR: "InternalError",
  PARTIAL_DATA: "PartialData",
} as const;
/**
 * @public
 */
export type StatusCode = (typeof StatusCode)[keyof typeof StatusCode];

/**
 * @public
 * @enum
 */
export const MetricStreamOutputFormat = {
  JSON: "json",
  OPEN_TELEMETRY_0_7: "opentelemetry0.7",
  OPEN_TELEMETRY_1_0: "opentelemetry1.0",
} as const;
/**
 * @public
 */
export type MetricStreamOutputFormat = (typeof MetricStreamOutputFormat)[keyof typeof MetricStreamOutputFormat];

/**
 * @public
 * @enum
 */
export const RecentlyActive = {
  PT3H: "PT3H",
} as const;
/**
 * @public
 */
export type RecentlyActive = (typeof RecentlyActive)[keyof typeof RecentlyActive];
