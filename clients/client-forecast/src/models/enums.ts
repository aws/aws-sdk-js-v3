// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Operation = {
  ADD: "ADD",
  DIVIDE: "DIVIDE",
  MULTIPLY: "MULTIPLY",
  SUBTRACT: "SUBTRACT",
} as const;
/**
 * @public
 */
export type Operation = (typeof Operation)[keyof typeof Operation];

/**
 * @public
 * @enum
 */
export const OptimizationMetric = {
  AverageWeightedQuantileLoss: "AverageWeightedQuantileLoss",
  MAPE: "MAPE",
  MASE: "MASE",
  RMSE: "RMSE",
  WAPE: "WAPE",
} as const;
/**
 * @public
 */
export type OptimizationMetric = (typeof OptimizationMetric)[keyof typeof OptimizationMetric];

/**
 * @public
 * @enum
 */
export const DayOfWeek = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;
/**
 * @public
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

/**
 * @public
 * @enum
 */
export const Month = {
  APRIL: "APRIL",
  AUGUST: "AUGUST",
  DECEMBER: "DECEMBER",
  FEBRUARY: "FEBRUARY",
  JANUARY: "JANUARY",
  JULY: "JULY",
  JUNE: "JUNE",
  MARCH: "MARCH",
  MAY: "MAY",
  NOVEMBER: "NOVEMBER",
  OCTOBER: "OCTOBER",
  SEPTEMBER: "SEPTEMBER",
} as const;
/**
 * @public
 */
export type Month = (typeof Month)[keyof typeof Month];

/**
 * @public
 * @enum
 */
export const DatasetType = {
  ITEM_METADATA: "ITEM_METADATA",
  RELATED_TIME_SERIES: "RELATED_TIME_SERIES",
  TARGET_TIME_SERIES: "TARGET_TIME_SERIES",
} as const;
/**
 * @public
 */
export type DatasetType = (typeof DatasetType)[keyof typeof DatasetType];

/**
 * @public
 * @enum
 */
export const Domain = {
  CUSTOM: "CUSTOM",
  EC2_CAPACITY: "EC2_CAPACITY",
  INVENTORY_PLANNING: "INVENTORY_PLANNING",
  METRICS: "METRICS",
  RETAIL: "RETAIL",
  WEB_TRAFFIC: "WEB_TRAFFIC",
  WORK_FORCE: "WORK_FORCE",
} as const;
/**
 * @public
 */
export type Domain = (typeof Domain)[keyof typeof Domain];

/**
 * @public
 * @enum
 */
export const AttributeType = {
  FLOAT: "float",
  GEOLOCATION: "geolocation",
  INTEGER: "integer",
  STRING: "string",
  TIMESTAMP: "timestamp",
} as const;
/**
 * @public
 */
export type AttributeType = (typeof AttributeType)[keyof typeof AttributeType];

/**
 * @public
 * @enum
 */
export const ImportMode = {
  FULL: "FULL",
  INCREMENTAL: "INCREMENTAL",
} as const;
/**
 * @public
 */
export type ImportMode = (typeof ImportMode)[keyof typeof ImportMode];

/**
 * @public
 * @enum
 */
export const TimePointGranularity = {
  ALL: "ALL",
  SPECIFIC: "SPECIFIC",
} as const;
/**
 * @public
 */
export type TimePointGranularity = (typeof TimePointGranularity)[keyof typeof TimePointGranularity];

/**
 * @public
 * @enum
 */
export const TimeSeriesGranularity = {
  ALL: "ALL",
  SPECIFIC: "SPECIFIC",
} as const;
/**
 * @public
 */
export type TimeSeriesGranularity = (typeof TimeSeriesGranularity)[keyof typeof TimeSeriesGranularity];

/**
 * @public
 * @enum
 */
export const AutoMLOverrideStrategy = {
  AccuracyOptimized: "AccuracyOptimized",
  LatencyOptimized: "LatencyOptimized",
} as const;
/**
 * @public
 */
export type AutoMLOverrideStrategy = (typeof AutoMLOverrideStrategy)[keyof typeof AutoMLOverrideStrategy];

/**
 * @public
 * @enum
 */
export const FeaturizationMethodName = {
  filling: "filling",
} as const;
/**
 * @public
 */
export type FeaturizationMethodName = (typeof FeaturizationMethodName)[keyof typeof FeaturizationMethodName];

/**
 * @public
 * @enum
 */
export const ScalingType = {
  Auto: "Auto",
  Linear: "Linear",
  Logarithmic: "Logarithmic",
  ReverseLogarithmic: "ReverseLogarithmic",
} as const;
/**
 * @public
 */
export type ScalingType = (typeof ScalingType)[keyof typeof ScalingType];

/**
 * @public
 * @enum
 */
export const Condition = {
  EQUALS: "EQUALS",
  GREATER_THAN: "GREATER_THAN",
  LESS_THAN: "LESS_THAN",
  NOT_EQUALS: "NOT_EQUALS",
} as const;
/**
 * @public
 */
export type Condition = (typeof Condition)[keyof typeof Condition];

/**
 * @public
 * @enum
 */
export const State = {
  Active: "Active",
  Deleted: "Deleted",
} as const;
/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

/**
 * @public
 * @enum
 */
export const EvaluationType = {
  COMPUTED: "COMPUTED",
  SUMMARY: "SUMMARY",
} as const;
/**
 * @public
 */
export type EvaluationType = (typeof EvaluationType)[keyof typeof EvaluationType];

/**
 * @public
 * @enum
 */
export const FilterConditionString = {
  IS: "IS",
  IS_NOT: "IS_NOT",
} as const;
/**
 * @public
 */
export type FilterConditionString = (typeof FilterConditionString)[keyof typeof FilterConditionString];
