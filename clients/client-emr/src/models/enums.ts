// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ActionOnFailure = {
  CANCEL_AND_WAIT: "CANCEL_AND_WAIT",
  CONTINUE: "CONTINUE",
  TERMINATE_CLUSTER: "TERMINATE_CLUSTER",
  TERMINATE_JOB_FLOW: "TERMINATE_JOB_FLOW",
} as const;
/**
 * @public
 */
export type ActionOnFailure = (typeof ActionOnFailure)[keyof typeof ActionOnFailure];

/**
 * @public
 * @enum
 */
export const InstanceFleetType = {
  CORE: "CORE",
  MASTER: "MASTER",
  TASK: "TASK",
} as const;
/**
 * @public
 */
export type InstanceFleetType = (typeof InstanceFleetType)[keyof typeof InstanceFleetType];

/**
 * @public
 * @enum
 */
export const OnDemandProvisioningAllocationStrategy = {
  LOWEST_PRICE: "lowest-price",
  PRIORITIZED: "prioritized",
} as const;
/**
 * @public
 */
export type OnDemandProvisioningAllocationStrategy =
  (typeof OnDemandProvisioningAllocationStrategy)[keyof typeof OnDemandProvisioningAllocationStrategy];

/**
 * @public
 * @enum
 */
export const OnDemandCapacityReservationPreference = {
  NONE: "none",
  OPEN: "open",
} as const;
/**
 * @public
 */
export type OnDemandCapacityReservationPreference =
  (typeof OnDemandCapacityReservationPreference)[keyof typeof OnDemandCapacityReservationPreference];

/**
 * @public
 * @enum
 */
export const OnDemandCapacityReservationUsageStrategy = {
  USE_CAPACITY_RESERVATIONS_FIRST: "use-capacity-reservations-first",
} as const;
/**
 * @public
 */
export type OnDemandCapacityReservationUsageStrategy =
  (typeof OnDemandCapacityReservationUsageStrategy)[keyof typeof OnDemandCapacityReservationUsageStrategy];

/**
 * @public
 * @enum
 */
export const SpotProvisioningAllocationStrategy = {
  CAPACITY_OPTIMIZED: "capacity-optimized",
  CAPACITY_OPTIMIZED_PRIORITIZED: "capacity-optimized-prioritized",
  DIVERSIFIED: "diversified",
  LOWEST_PRICE: "lowest-price",
  PRICE_CAPACITY_OPTIMIZED: "price-capacity-optimized",
} as const;
/**
 * @public
 */
export type SpotProvisioningAllocationStrategy =
  (typeof SpotProvisioningAllocationStrategy)[keyof typeof SpotProvisioningAllocationStrategy];

/**
 * @public
 * @enum
 */
export const SpotProvisioningTimeoutAction = {
  SWITCH_TO_ON_DEMAND: "SWITCH_TO_ON_DEMAND",
  TERMINATE_CLUSTER: "TERMINATE_CLUSTER",
} as const;
/**
 * @public
 */
export type SpotProvisioningTimeoutAction =
  (typeof SpotProvisioningTimeoutAction)[keyof typeof SpotProvisioningTimeoutAction];

/**
 * @public
 * @enum
 */
export const MarketType = {
  ON_DEMAND: "ON_DEMAND",
  SPOT: "SPOT",
} as const;
/**
 * @public
 */
export type MarketType = (typeof MarketType)[keyof typeof MarketType];

/**
 * @public
 * @enum
 */
export const AdjustmentType = {
  CHANGE_IN_CAPACITY: "CHANGE_IN_CAPACITY",
  EXACT_CAPACITY: "EXACT_CAPACITY",
  PERCENT_CHANGE_IN_CAPACITY: "PERCENT_CHANGE_IN_CAPACITY",
} as const;
/**
 * @public
 */
export type AdjustmentType = (typeof AdjustmentType)[keyof typeof AdjustmentType];

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL: "GREATER_THAN_OR_EQUAL",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL: "LESS_THAN_OR_EQUAL",
} as const;
/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const Statistic = {
  AVERAGE: "AVERAGE",
  MAXIMUM: "MAXIMUM",
  MINIMUM: "MINIMUM",
  SAMPLE_COUNT: "SAMPLE_COUNT",
  SUM: "SUM",
} as const;
/**
 * @public
 */
export type Statistic = (typeof Statistic)[keyof typeof Statistic];

/**
 * @public
 * @enum
 */
export const Unit = {
  BITS: "BITS",
  BITS_PER_SECOND: "BITS_PER_SECOND",
  BYTES: "BYTES",
  BYTES_PER_SECOND: "BYTES_PER_SECOND",
  COUNT: "COUNT",
  COUNT_PER_SECOND: "COUNT_PER_SECOND",
  GIGA_BITS: "GIGA_BITS",
  GIGA_BITS_PER_SECOND: "GIGA_BITS_PER_SECOND",
  GIGA_BYTES: "GIGA_BYTES",
  GIGA_BYTES_PER_SECOND: "GIGA_BYTES_PER_SECOND",
  KILO_BITS: "KILO_BITS",
  KILO_BITS_PER_SECOND: "KILO_BITS_PER_SECOND",
  KILO_BYTES: "KILO_BYTES",
  KILO_BYTES_PER_SECOND: "KILO_BYTES_PER_SECOND",
  MEGA_BITS: "MEGA_BITS",
  MEGA_BITS_PER_SECOND: "MEGA_BITS_PER_SECOND",
  MEGA_BYTES: "MEGA_BYTES",
  MEGA_BYTES_PER_SECOND: "MEGA_BYTES_PER_SECOND",
  MICRO_SECONDS: "MICRO_SECONDS",
  MILLI_SECONDS: "MILLI_SECONDS",
  NONE: "NONE",
  PERCENT: "PERCENT",
  SECONDS: "SECONDS",
  TERA_BITS: "TERA_BITS",
  TERA_BITS_PER_SECOND: "TERA_BITS_PER_SECOND",
  TERA_BYTES: "TERA_BYTES",
  TERA_BYTES_PER_SECOND: "TERA_BYTES_PER_SECOND",
} as const;
/**
 * @public
 */
export type Unit = (typeof Unit)[keyof typeof Unit];

/**
 * @public
 * @enum
 */
export const InstanceRoleType = {
  CORE: "CORE",
  MASTER: "MASTER",
  TASK: "TASK",
} as const;
/**
 * @public
 */
export type InstanceRoleType = (typeof InstanceRoleType)[keyof typeof InstanceRoleType];

/**
 * @public
 * @enum
 */
export const AuthMode = {
  IAM: "IAM",
  SSO: "SSO",
} as const;
/**
 * @public
 */
export type AuthMode = (typeof AuthMode)[keyof typeof AuthMode];

/**
 * @public
 * @enum
 */
export const AutoScalingPolicyState = {
  ATTACHED: "ATTACHED",
  ATTACHING: "ATTACHING",
  DETACHED: "DETACHED",
  DETACHING: "DETACHING",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type AutoScalingPolicyState = (typeof AutoScalingPolicyState)[keyof typeof AutoScalingPolicyState];

/**
 * @public
 * @enum
 */
export const AutoScalingPolicyStateChangeReasonCode = {
  CLEANUP_FAILURE: "CLEANUP_FAILURE",
  PROVISION_FAILURE: "PROVISION_FAILURE",
  USER_REQUEST: "USER_REQUEST",
} as const;
/**
 * @public
 */
export type AutoScalingPolicyStateChangeReasonCode =
  (typeof AutoScalingPolicyStateChangeReasonCode)[keyof typeof AutoScalingPolicyStateChangeReasonCode];

/**
 * @public
 * @enum
 */
export const StepCancellationOption = {
  SEND_INTERRUPT: "SEND_INTERRUPT",
  TERMINATE_PROCESS: "TERMINATE_PROCESS",
} as const;
/**
 * @public
 */
export type StepCancellationOption = (typeof StepCancellationOption)[keyof typeof StepCancellationOption];

/**
 * @public
 * @enum
 */
export const CancelStepsRequestStatus = {
  FAILED: "FAILED",
  SUBMITTED: "SUBMITTED",
} as const;
/**
 * @public
 */
export type CancelStepsRequestStatus = (typeof CancelStepsRequestStatus)[keyof typeof CancelStepsRequestStatus];

/**
 * @public
 * @enum
 */
export const InstanceCollectionType = {
  INSTANCE_FLEET: "INSTANCE_FLEET",
  INSTANCE_GROUP: "INSTANCE_GROUP",
} as const;
/**
 * @public
 */
export type InstanceCollectionType = (typeof InstanceCollectionType)[keyof typeof InstanceCollectionType];

/**
 * @public
 * @enum
 */
export const PlacementGroupStrategy = {
  CLUSTER: "CLUSTER",
  NONE: "NONE",
  PARTITION: "PARTITION",
  SPREAD: "SPREAD",
} as const;
/**
 * @public
 */
export type PlacementGroupStrategy = (typeof PlacementGroupStrategy)[keyof typeof PlacementGroupStrategy];

/**
 * @public
 * @enum
 */
export const RepoUpgradeOnBoot = {
  NONE: "NONE",
  SECURITY: "SECURITY",
} as const;
/**
 * @public
 */
export type RepoUpgradeOnBoot = (typeof RepoUpgradeOnBoot)[keyof typeof RepoUpgradeOnBoot];

/**
 * @public
 * @enum
 */
export const ScaleDownBehavior = {
  TERMINATE_AT_INSTANCE_HOUR: "TERMINATE_AT_INSTANCE_HOUR",
  TERMINATE_AT_TASK_COMPLETION: "TERMINATE_AT_TASK_COMPLETION",
} as const;
/**
 * @public
 */
export type ScaleDownBehavior = (typeof ScaleDownBehavior)[keyof typeof ScaleDownBehavior];

/**
 * @public
 * @enum
 */
export const ClusterState = {
  BOOTSTRAPPING: "BOOTSTRAPPING",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  TERMINATED: "TERMINATED",
  TERMINATED_WITH_ERRORS: "TERMINATED_WITH_ERRORS",
  TERMINATING: "TERMINATING",
  WAITING: "WAITING",
} as const;
/**
 * @public
 */
export type ClusterState = (typeof ClusterState)[keyof typeof ClusterState];

/**
 * @public
 * @enum
 */
export const ClusterStateChangeReasonCode = {
  ALL_STEPS_COMPLETED: "ALL_STEPS_COMPLETED",
  BOOTSTRAP_FAILURE: "BOOTSTRAP_FAILURE",
  INSTANCE_FAILURE: "INSTANCE_FAILURE",
  INSTANCE_FLEET_TIMEOUT: "INSTANCE_FLEET_TIMEOUT",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  STEP_FAILURE: "STEP_FAILURE",
  USER_REQUEST: "USER_REQUEST",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;
/**
 * @public
 */
export type ClusterStateChangeReasonCode =
  (typeof ClusterStateChangeReasonCode)[keyof typeof ClusterStateChangeReasonCode];

/**
 * @public
 * @enum
 */
export const ComputeLimitsUnitType = {
  InstanceFleetUnits: "InstanceFleetUnits",
  Instances: "Instances",
  VCPU: "VCPU",
} as const;
/**
 * @public
 */
export type ComputeLimitsUnitType = (typeof ComputeLimitsUnitType)[keyof typeof ComputeLimitsUnitType];

/**
 * @public
 * @enum
 */
export const ProfilerType = {
  SHS: "SHS",
  TEZUI: "TEZUI",
  YTS: "YTS",
} as const;
/**
 * @public
 */
export type ProfilerType = (typeof ProfilerType)[keyof typeof ProfilerType];

/**
 * @public
 * @enum
 */
export const IdcUserAssignment = {
  OPTIONAL: "OPTIONAL",
  REQUIRED: "REQUIRED",
} as const;
/**
 * @public
 */
export type IdcUserAssignment = (typeof IdcUserAssignment)[keyof typeof IdcUserAssignment];

/**
 * @public
 * @enum
 */
export const IdentityType = {
  GROUP: "GROUP",
  USER: "USER",
} as const;
/**
 * @public
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

/**
 * @public
 * @enum
 */
export const JobFlowExecutionState = {
  BOOTSTRAPPING: "BOOTSTRAPPING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SHUTTING_DOWN: "SHUTTING_DOWN",
  STARTING: "STARTING",
  TERMINATED: "TERMINATED",
  WAITING: "WAITING",
} as const;
/**
 * @public
 */
export type JobFlowExecutionState = (typeof JobFlowExecutionState)[keyof typeof JobFlowExecutionState];

/**
 * @public
 * @enum
 */
export const InstanceGroupState = {
  ARRESTED: "ARRESTED",
  BOOTSTRAPPING: "BOOTSTRAPPING",
  ENDED: "ENDED",
  PROVISIONING: "PROVISIONING",
  RECONFIGURING: "RECONFIGURING",
  RESIZING: "RESIZING",
  RUNNING: "RUNNING",
  SHUTTING_DOWN: "SHUTTING_DOWN",
  SUSPENDED: "SUSPENDED",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
} as const;
/**
 * @public
 */
export type InstanceGroupState = (typeof InstanceGroupState)[keyof typeof InstanceGroupState];

/**
 * @public
 * @enum
 */
export const StepExecutionState = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  CONTINUE: "CONTINUE",
  FAILED: "FAILED",
  INTERRUPTED: "INTERRUPTED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type StepExecutionState = (typeof StepExecutionState)[keyof typeof StepExecutionState];

/**
 * @public
 * @enum
 */
export const ExecutionEngineType = {
  EMR: "EMR",
} as const;
/**
 * @public
 */
export type ExecutionEngineType = (typeof ExecutionEngineType)[keyof typeof ExecutionEngineType];

/**
 * @public
 * @enum
 */
export const OutputNotebookFormat = {
  HTML: "HTML",
} as const;
/**
 * @public
 */
export type OutputNotebookFormat = (typeof OutputNotebookFormat)[keyof typeof OutputNotebookFormat];

/**
 * @public
 * @enum
 */
export const NotebookExecutionStatus = {
  FAILED: "FAILED",
  FAILING: "FAILING",
  FINISHED: "FINISHED",
  FINISHING: "FINISHING",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  START_PENDING: "START_PENDING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  STOP_PENDING: "STOP_PENDING",
} as const;
/**
 * @public
 */
export type NotebookExecutionStatus = (typeof NotebookExecutionStatus)[keyof typeof NotebookExecutionStatus];

/**
 * @public
 * @enum
 */
export const PersistentAppUIType = {
  SHS: "SHS",
  TEZ: "TEZ",
  YTS: "YTS",
} as const;
/**
 * @public
 */
export type PersistentAppUIType = (typeof PersistentAppUIType)[keyof typeof PersistentAppUIType];

/**
 * @public
 * @enum
 */
export const StepState = {
  CANCELLED: "CANCELLED",
  CANCEL_PENDING: "CANCEL_PENDING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  INTERRUPTED: "INTERRUPTED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
} as const;
/**
 * @public
 */
export type StepState = (typeof StepState)[keyof typeof StepState];

/**
 * @public
 * @enum
 */
export const StepStateChangeReasonCode = {
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type StepStateChangeReasonCode = (typeof StepStateChangeReasonCode)[keyof typeof StepStateChangeReasonCode];

/**
 * @public
 * @enum
 */
export const ScalingStrategy = {
  ADVANCED: "ADVANCED",
  DEFAULT: "DEFAULT",
} as const;
/**
 * @public
 */
export type ScalingStrategy = (typeof ScalingStrategy)[keyof typeof ScalingStrategy];

/**
 * @public
 * @enum
 */
export const OnClusterAppUIType = {
  ApplicationMaster: "ApplicationMaster",
  JobHistoryServer: "JobHistoryServer",
  ResourceManager: "ResourceManager",
  SparkHistoryServer: "SparkHistoryServer",
  TezUI: "TezUI",
  YarnTimelineService: "YarnTimelineService",
} as const;
/**
 * @public
 */
export type OnClusterAppUIType = (typeof OnClusterAppUIType)[keyof typeof OnClusterAppUIType];

/**
 * @public
 * @enum
 */
export const InstanceFleetState = {
  BOOTSTRAPPING: "BOOTSTRAPPING",
  PROVISIONING: "PROVISIONING",
  RECONFIGURING: "RECONFIGURING",
  RESIZING: "RESIZING",
  RUNNING: "RUNNING",
  SUSPENDED: "SUSPENDED",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
} as const;
/**
 * @public
 */
export type InstanceFleetState = (typeof InstanceFleetState)[keyof typeof InstanceFleetState];

/**
 * @public
 * @enum
 */
export const InstanceFleetStateChangeReasonCode = {
  CLUSTER_TERMINATED: "CLUSTER_TERMINATED",
  INSTANCE_FAILURE: "INSTANCE_FAILURE",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;
/**
 * @public
 */
export type InstanceFleetStateChangeReasonCode =
  (typeof InstanceFleetStateChangeReasonCode)[keyof typeof InstanceFleetStateChangeReasonCode];

/**
 * @public
 * @enum
 */
export const InstanceGroupType = {
  CORE: "CORE",
  MASTER: "MASTER",
  TASK: "TASK",
} as const;
/**
 * @public
 */
export type InstanceGroupType = (typeof InstanceGroupType)[keyof typeof InstanceGroupType];

/**
 * @public
 * @enum
 */
export const InstanceGroupStateChangeReasonCode = {
  CLUSTER_TERMINATED: "CLUSTER_TERMINATED",
  INSTANCE_FAILURE: "INSTANCE_FAILURE",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;
/**
 * @public
 */
export type InstanceGroupStateChangeReasonCode =
  (typeof InstanceGroupStateChangeReasonCode)[keyof typeof InstanceGroupStateChangeReasonCode];

/**
 * @public
 * @enum
 */
export const InstanceState = {
  AWAITING_FULFILLMENT: "AWAITING_FULFILLMENT",
  BOOTSTRAPPING: "BOOTSTRAPPING",
  PROVISIONING: "PROVISIONING",
  RUNNING: "RUNNING",
  TERMINATED: "TERMINATED",
} as const;
/**
 * @public
 */
export type InstanceState = (typeof InstanceState)[keyof typeof InstanceState];

/**
 * @public
 * @enum
 */
export const InstanceStateChangeReasonCode = {
  BOOTSTRAP_FAILURE: "BOOTSTRAP_FAILURE",
  CLUSTER_TERMINATED: "CLUSTER_TERMINATED",
  INSTANCE_FAILURE: "INSTANCE_FAILURE",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;
/**
 * @public
 */
export type InstanceStateChangeReasonCode =
  (typeof InstanceStateChangeReasonCode)[keyof typeof InstanceStateChangeReasonCode];

/**
 * @public
 * @enum
 */
export const ReconfigurationType = {
  MERGE: "MERGE",
  OVERWRITE: "OVERWRITE",
} as const;
/**
 * @public
 */
export type ReconfigurationType = (typeof ReconfigurationType)[keyof typeof ReconfigurationType];
