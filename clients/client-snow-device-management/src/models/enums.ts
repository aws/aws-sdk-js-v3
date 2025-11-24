// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AttachmentStatus = {
  ATTACHED: "ATTACHED",
  ATTACHING: "ATTACHING",
  DETACHED: "DETACHED",
  DETACHING: "DETACHING",
} as const;
/**
 * @public
 */
export type AttachmentStatus = (typeof AttachmentStatus)[keyof typeof AttachmentStatus];

/**
 * @public
 * @enum
 */
export const UnlockState = {
  LOCKED: "LOCKED",
  UNLOCKED: "UNLOCKED",
  UNLOCKING: "UNLOCKING",
} as const;
/**
 * @public
 */
export type UnlockState = (typeof UnlockState)[keyof typeof UnlockState];

/**
 * @public
 * @enum
 */
export const IpAddressAssignment = {
  DHCP: "DHCP",
  STATIC: "STATIC",
} as const;
/**
 * @public
 */
export type IpAddressAssignment = (typeof IpAddressAssignment)[keyof typeof IpAddressAssignment];

/**
 * @public
 * @enum
 */
export const PhysicalConnectorType = {
  QSFP: "QSFP",
  RJ45: "RJ45",
  RJ45_2: "RJ45_2",
  SFP_PLUS: "SFP_PLUS",
  WIFI: "WIFI",
} as const;
/**
 * @public
 */
export type PhysicalConnectorType = (typeof PhysicalConnectorType)[keyof typeof PhysicalConnectorType];

/**
 * @public
 * @enum
 */
export const InstanceStateName = {
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  SHUTTING_DOWN: "SHUTTING_DOWN",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  TERMINATED: "TERMINATED",
} as const;
/**
 * @public
 */
export type InstanceStateName = (typeof InstanceStateName)[keyof typeof InstanceStateName];

/**
 * @public
 * @enum
 */
export const ExecutionState = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
  REJECTED: "REJECTED",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type ExecutionState = (typeof ExecutionState)[keyof typeof ExecutionState];

/**
 * @public
 * @enum
 */
export const TaskState = {
  CANCELED: "CANCELED",
  COMPLETED: "COMPLETED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type TaskState = (typeof TaskState)[keyof typeof TaskState];
