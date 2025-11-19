// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ResourceType = {
  EBS: "EBS",
  S3: "S3",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const SearchJobState = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type SearchJobState = (typeof SearchJobState)[keyof typeof SearchJobState];

/**
 * @public
 * @enum
 */
export const TimeConditionOperator = {
  EQUALS_TO: "EQUALS_TO",
  GREATER_THAN_EQUAL_TO: "GREATER_THAN_EQUAL_TO",
  LESS_THAN_EQUAL_TO: "LESS_THAN_EQUAL_TO",
  NOT_EQUALS_TO: "NOT_EQUALS_TO",
} as const;
/**
 * @public
 */
export type TimeConditionOperator = (typeof TimeConditionOperator)[keyof typeof TimeConditionOperator];

/**
 * @public
 * @enum
 */
export const StringConditionOperator = {
  BEGINS_WITH: "BEGINS_WITH",
  CONTAINS: "CONTAINS",
  DOES_NOT_BEGIN_WITH: "DOES_NOT_BEGIN_WITH",
  DOES_NOT_CONTAIN: "DOES_NOT_CONTAIN",
  DOES_NOT_END_WITH: "DOES_NOT_END_WITH",
  ENDS_WITH: "ENDS_WITH",
  EQUALS_TO: "EQUALS_TO",
  NOT_EQUALS_TO: "NOT_EQUALS_TO",
} as const;
/**
 * @public
 */
export type StringConditionOperator = (typeof StringConditionOperator)[keyof typeof StringConditionOperator];

/**
 * @public
 * @enum
 */
export const LongConditionOperator = {
  EQUALS_TO: "EQUALS_TO",
  GREATER_THAN_EQUAL_TO: "GREATER_THAN_EQUAL_TO",
  LESS_THAN_EQUAL_TO: "LESS_THAN_EQUAL_TO",
  NOT_EQUALS_TO: "NOT_EQUALS_TO",
} as const;
/**
 * @public
 */
export type LongConditionOperator = (typeof LongConditionOperator)[keyof typeof LongConditionOperator];

/**
 * @public
 * @enum
 */
export const ExportJobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type ExportJobStatus = (typeof ExportJobStatus)[keyof typeof ExportJobStatus];
