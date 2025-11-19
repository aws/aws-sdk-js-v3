// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const OperatorType = {
  Between: "BETWEEN",
  Equal: "EQ",
  GreaterThanOrEqual: "GE",
  LessThanOrEqual: "LE",
  ReferenceEqual: "REF_EQ",
} as const;
/**
 * @public
 */
export type OperatorType = (typeof OperatorType)[keyof typeof OperatorType];

/**
 * @public
 * @enum
 */
export const TaskStatus = {
  FAILED: "FAILED",
  FALSE: "FALSE",
  FINISHED: "FINISHED",
} as const;
/**
 * @public
 */
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
