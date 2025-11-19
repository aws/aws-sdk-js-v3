// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const RescoreExecutionPlanStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type RescoreExecutionPlanStatus = (typeof RescoreExecutionPlanStatus)[keyof typeof RescoreExecutionPlanStatus];
