// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ApprovalMode = {
  IMMEDIATE: "IMMEDIATE",
  MANUAL: "MANUAL",
} as const;
/**
 * @public
 */
export type ApprovalMode = (typeof ApprovalMode)[keyof typeof ApprovalMode];

/**
 * @public
 * @enum
 */
export const ScheduledChangeType = {
  CANCELLATION: "CANCELLATION",
  DOWNGRADE: "DOWNGRADE",
} as const;
/**
 * @public
 */
export type ScheduledChangeType = (typeof ScheduledChangeType)[keyof typeof ScheduledChangeType];

/**
 * @public
 * @enum
 */
export const Status = {
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
  PENDING_APPROVAL: "PENDING_APPROVAL",
  SYNC_IN_PROGRESS: "SYNC_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];
