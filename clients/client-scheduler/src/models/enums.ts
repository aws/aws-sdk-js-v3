// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ActionAfterCompletion = {
  DELETE: "DELETE",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type ActionAfterCompletion = (typeof ActionAfterCompletion)[keyof typeof ActionAfterCompletion];

/**
 * @public
 * @enum
 */
export const AssignPublicIp = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AssignPublicIp = (typeof AssignPublicIp)[keyof typeof AssignPublicIp];

/**
 * @public
 * @enum
 */
export const FlexibleTimeWindowMode = {
  FLEXIBLE: "FLEXIBLE",
  OFF: "OFF",
} as const;
/**
 * @public
 */
export type FlexibleTimeWindowMode = (typeof FlexibleTimeWindowMode)[keyof typeof FlexibleTimeWindowMode];

/**
 * @public
 * @enum
 */
export const ScheduleState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ScheduleState = (typeof ScheduleState)[keyof typeof ScheduleState];

/**
 * @public
 * @enum
 */
export const LaunchType = {
  EC2: "EC2",
  EXTERNAL: "EXTERNAL",
  FARGATE: "FARGATE",
} as const;
/**
 * @public
 */
export type LaunchType = (typeof LaunchType)[keyof typeof LaunchType];

/**
 * @public
 * @enum
 */
export const PlacementConstraintType = {
  DISTINCT_INSTANCE: "distinctInstance",
  MEMBER_OF: "memberOf",
} as const;
/**
 * @public
 */
export type PlacementConstraintType = (typeof PlacementConstraintType)[keyof typeof PlacementConstraintType];

/**
 * @public
 * @enum
 */
export const PlacementStrategyType = {
  BINPACK: "binpack",
  RANDOM: "random",
  SPREAD: "spread",
} as const;
/**
 * @public
 */
export type PlacementStrategyType = (typeof PlacementStrategyType)[keyof typeof PlacementStrategyType];

/**
 * @public
 * @enum
 */
export const PropagateTags = {
  TASK_DEFINITION: "TASK_DEFINITION",
} as const;
/**
 * @public
 */
export type PropagateTags = (typeof PropagateTags)[keyof typeof PropagateTags];

/**
 * @public
 * @enum
 */
export const ScheduleGroupState = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type ScheduleGroupState = (typeof ScheduleGroupState)[keyof typeof ScheduleGroupState];
