// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const MetricStatistic = {
  AVG: "Avg",
  COUNT: "Count",
  LAST: "Last",
  MAX: "Max",
  MIN: "Min",
  STD_DEV: "StdDev",
} as const;
/**
 * @public
 */
export type MetricStatistic = (typeof MetricStatistic)[keyof typeof MetricStatistic];

/**
 * @public
 * @enum
 */
export const Period = {
  FIVE_MINUTE: "FiveMinute",
  ITERATION_NUMBER: "IterationNumber",
  ONE_HOUR: "OneHour",
  ONE_MINUTE: "OneMinute",
} as const;
/**
 * @public
 */
export type Period = (typeof Period)[keyof typeof Period];

/**
 * @public
 * @enum
 */
export const XAxisType = {
  ITERATION_NUMBER: "IterationNumber",
  TIMESTAMP: "Timestamp",
} as const;
/**
 * @public
 */
export type XAxisType = (typeof XAxisType)[keyof typeof XAxisType];

/**
 * @public
 * @enum
 */
export const MetricQueryResultStatus = {
  COMPLETE: "Complete",
  INTERNAL_ERROR: "InternalError",
  TRUNCATED: "Truncated",
  VALIDATION_ERROR: "ValidationError",
} as const;
/**
 * @public
 */
export type MetricQueryResultStatus = (typeof MetricQueryResultStatus)[keyof typeof MetricQueryResultStatus];

/**
 * @public
 * @enum
 */
export const PutMetricsErrorCode = {
  CONFLICT_ERROR: "CONFLICT_ERROR",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  METRIC_LIMIT_EXCEEDED: "METRIC_LIMIT_EXCEEDED",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;
/**
 * @public
 */
export type PutMetricsErrorCode = (typeof PutMetricsErrorCode)[keyof typeof PutMetricsErrorCode];
