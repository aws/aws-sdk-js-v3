// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ExecutionAction = {
  ACTIVATE: "activate",
  DEACTIVATE: "deactivate",
} as const;
/**
 * @public
 */
export type ExecutionAction = (typeof ExecutionAction)[keyof typeof ExecutionAction];

/**
 * @public
 * @enum
 */
export const ExecutionState = {
  CANCELLED: "canceled",
  COMPLETED: "completed",
  COMPLETED_MONITORING_APPLICATION_HEALTH: "completedMonitoringApplicationHealth",
  COMPLETED_WITH_EXCEPTIONS: "completedWithExceptions",
  FAILED: "failed",
  IN_PROGRESS: "inProgress",
  PAUSED_BY_FAILED_STEP: "pausedByFailedStep",
  PAUSED_BY_OPERATOR: "pausedByOperator",
  PENDING: "pending",
  PENDING_MANUAL_APPROVAL: "pendingManualApproval",
  PLAN_EXECUTION_TIMED_OUT: "planExecutionTimedOut",
} as const;
/**
 * @public
 */
export type ExecutionState = (typeof ExecutionState)[keyof typeof ExecutionState];

/**
 * @public
 * @enum
 */
export const ExecutionMode = {
  GRACEFUL: "graceful",
  UNGRACEFUL: "ungraceful",
} as const;
/**
 * @public
 */
export type ExecutionMode = (typeof ExecutionMode)[keyof typeof ExecutionMode];

/**
 * @public
 * @enum
 */
export const RecoveryApproach = {
  ACTIVE_ACTIVE: "activeActive",
  ACTIVE_PASSIVE: "activePassive",
} as const;
/**
 * @public
 */
export type RecoveryApproach = (typeof RecoveryApproach)[keyof typeof RecoveryApproach];

/**
 * @public
 * @enum
 */
export const AlarmCondition = {
  GREEN: "green",
  RED: "red",
} as const;
/**
 * @public
 */
export type AlarmCondition = (typeof AlarmCondition)[keyof typeof AlarmCondition];

/**
 * @public
 * @enum
 */
export const AlarmType = {
  APPLICATION_HEALTH: "applicationHealth",
  TRIGGER: "trigger",
} as const;
/**
 * @public
 */
export type AlarmType = (typeof AlarmType)[keyof typeof AlarmType];

/**
 * @public
 * @enum
 */
export const Approval = {
  APPROVE: "approve",
  DECLINE: "decline",
} as const;
/**
 * @public
 */
export type Approval = (typeof Approval)[keyof typeof Approval];

/**
 * @public
 * @enum
 */
export const EvaluationStatus = {
  ACTION_REQUIRED: "actionRequired",
  PASSED: "passed",
  PENDING_EVALUATION: "pendingEvaluation",
  UNKNOWN: "unknown",
} as const;
/**
 * @public
 */
export type EvaluationStatus = (typeof EvaluationStatus)[keyof typeof EvaluationStatus];

/**
 * @public
 * @enum
 */
export const ResourceWarningStatus = {
  ACTIVE: "active",
  RESOLVED: "resolved",
} as const;
/**
 * @public
 */
export type ResourceWarningStatus = (typeof ResourceWarningStatus)[keyof typeof ResourceWarningStatus];

/**
 * @public
 * @enum
 */
export const WorkflowTargetAction = {
  ACTIVATE: "activate",
  DEACTIVATE: "deactivate",
} as const;
/**
 * @public
 */
export type WorkflowTargetAction = (typeof WorkflowTargetAction)[keyof typeof WorkflowTargetAction];

/**
 * @public
 * @enum
 */
export const RoutingControlStateChange = {
  OFF: "Off",
  ON: "On",
} as const;
/**
 * @public
 */
export type RoutingControlStateChange = (typeof RoutingControlStateChange)[keyof typeof RoutingControlStateChange];

/**
 * @public
 * @enum
 */
export const RegionToRunIn = {
  ACTIVATING_REGION: "activatingRegion",
  DEACTIVATING_REGION: "deactivatingRegion",
} as const;
/**
 * @public
 */
export type RegionToRunIn = (typeof RegionToRunIn)[keyof typeof RegionToRunIn];

/**
 * @public
 * @enum
 */
export const LambdaUngracefulBehavior = {
  SKIP: "skip",
} as const;
/**
 * @public
 */
export type LambdaUngracefulBehavior = (typeof LambdaUngracefulBehavior)[keyof typeof LambdaUngracefulBehavior];

/**
 * @public
 * @enum
 */
export const Ec2AsgCapacityMonitoringApproach = {
  AUTOSCALING_MAX_IN_LAST_24_HOURS: "autoscalingMaxInLast24Hours",
  SAMPLED_MAX_IN_LAST_24_HOURS: "sampledMaxInLast24Hours",
} as const;
/**
 * @public
 */
export type Ec2AsgCapacityMonitoringApproach =
  (typeof Ec2AsgCapacityMonitoringApproach)[keyof typeof Ec2AsgCapacityMonitoringApproach];

/**
 * @public
 * @enum
 */
export const EcsCapacityMonitoringApproach = {
  CONTAINER_INSIGHTS_MAX_IN_LAST_24_HOURS: "containerInsightsMaxInLast24Hours",
  SAMPLED_MAX_IN_LAST_24_HOURS: "sampledMaxInLast24Hours",
} as const;
/**
 * @public
 */
export type EcsCapacityMonitoringApproach =
  (typeof EcsCapacityMonitoringApproach)[keyof typeof EcsCapacityMonitoringApproach];

/**
 * @public
 * @enum
 */
export const EksCapacityMonitoringApproach = {
  SAMPLED_MAX_IN_LAST_24_HOURS: "sampledMaxInLast24Hours",
} as const;
/**
 * @public
 */
export type EksCapacityMonitoringApproach =
  (typeof EksCapacityMonitoringApproach)[keyof typeof EksCapacityMonitoringApproach];

/**
 * @public
 * @enum
 */
export const GlobalAuroraDefaultBehavior = {
  FAILOVER: "failover",
  SWITCHOVER_ONLY: "switchoverOnly",
} as const;
/**
 * @public
 */
export type GlobalAuroraDefaultBehavior =
  (typeof GlobalAuroraDefaultBehavior)[keyof typeof GlobalAuroraDefaultBehavior];

/**
 * @public
 * @enum
 */
export const GlobalAuroraUngracefulBehavior = {
  FAILOVER: "failover",
} as const;
/**
 * @public
 */
export type GlobalAuroraUngracefulBehavior =
  (typeof GlobalAuroraUngracefulBehavior)[keyof typeof GlobalAuroraUngracefulBehavior];

/**
 * @public
 * @enum
 */
export const ExecutionBlockType = {
  AURORA: "AuroraGlobalDatabase",
  CUSTOM_ACTION_LAMBDA: "CustomActionLambda",
  EC2_ASG: "EC2AutoScaling",
  ECS: "ECSServiceScaling",
  EKS_RESOURCE_SCALING: "EKSResourceScaling",
  EXECUTION_APPROVAL: "ManualApproval",
  PARALLEL: "Parallel",
  REGION_SWITCH: "ARCRegionSwitchPlan",
  ROUTE53_HEALTH_CHECK: "Route53HealthCheck",
  ROUTING_CONTROL: "ARCRoutingControl",
} as const;
/**
 * @public
 */
export type ExecutionBlockType = (typeof ExecutionBlockType)[keyof typeof ExecutionBlockType];

/**
 * @public
 * @enum
 */
export const StepStatus = {
  CANCELLED: "canceled",
  COMPLETED: "completed",
  FAILED: "failed",
  NOT_STARTED: "notStarted",
  PENDING_APPROVAL: "pendingApproval",
  RUNNING: "running",
  SKIPPED: "skipped",
} as const;
/**
 * @public
 */
export type StepStatus = (typeof StepStatus)[keyof typeof StepStatus];

/**
 * @public
 * @enum
 */
export const ExecutionEventType = {
  EXECUTION_BEHAVIOR_CHANGED_TO_GRACEFUL: "executionBehaviorChangedToGraceful",
  EXECUTION_BEHAVIOR_CHANGED_TO_UNGRACEFUL: "executionBehaviorChangedToUngraceful",
  EXECUTION_CANCELED: "executionCanceled",
  EXECUTION_CANCELING: "executionCanceling",
  EXECUTION_FAILED: "executionFailed",
  EXECUTION_PAUSED: "executionPaused",
  EXECUTION_PAUSING: "executionPausing",
  EXECUTION_PENDING: "executionPending",
  EXECUTION_PENDING_APPROVAL: "executionPendingApproval",
  EXECUTION_PENDING_CHILD_PLAN_MANUAL_APPROVAL: "executionPendingChildPlanManualApproval",
  EXECUTION_STARTED: "executionStarted",
  EXECUTION_SUCCEEDED: "executionSucceeded",
  EXECUTION_SUCCESS_MONITORING_APPLICATION_HEALTH: "executionSuccessMonitoringApplicationHealth",
  STEP_CANCELED: "stepCanceled",
  STEP_EXECUTION_BEHAVIOR_CHANGED_TO_UNGRACEFUL: "stepExecutionBehaviorChangedToUngraceful",
  STEP_FAILED: "stepFailed",
  STEP_PAUSED_BY_ERROR: "stepPausedByError",
  STEP_PAUSED_BY_OPERATOR: "stepPausedByOperator",
  STEP_PENDING_APPLICATION_HEALTH_MONITOR: "stepPendingApplicationHealthMonitor",
  STEP_PENDING_APPROVAL: "stepPendingApproval",
  STEP_SKIPPED: "stepSkipped",
  STEP_STARTED: "stepStarted",
  STEP_SUCCEEDED: "stepSucceeded",
  STEP_UPDATE: "stepUpdate",
  UNKNOWN: "unknown",
} as const;
/**
 * @public
 */
export type ExecutionEventType = (typeof ExecutionEventType)[keyof typeof ExecutionEventType];

/**
 * @public
 * @enum
 */
export const Route53HealthCheckStatus = {
  HEALTHY: "healthy",
  UNHEALTHY: "unhealthy",
  UNKNOWN: "unknown",
} as const;
/**
 * @public
 */
export type Route53HealthCheckStatus = (typeof Route53HealthCheckStatus)[keyof typeof Route53HealthCheckStatus];

/**
 * @public
 * @enum
 */
export const UpdatePlanExecutionAction = {
  PAUSE: "pause",
  RESUME: "resume",
  SWITCH_TO_GRACEFUL: "switchToGraceful",
  SWITCH_TO_UNGRACEFUL: "switchToUngraceful",
} as const;
/**
 * @public
 */
export type UpdatePlanExecutionAction = (typeof UpdatePlanExecutionAction)[keyof typeof UpdatePlanExecutionAction];

/**
 * @public
 * @enum
 */
export const UpdatePlanExecutionStepAction = {
  SKIP: "skip",
  SWITCH_TO_UNGRACEFUL: "switchToUngraceful",
} as const;
/**
 * @public
 */
export type UpdatePlanExecutionStepAction =
  (typeof UpdatePlanExecutionStepAction)[keyof typeof UpdatePlanExecutionStepAction];
