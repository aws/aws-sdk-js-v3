// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AcceleratorName = {
  A10G: "a10g",
  L4: "l4",
  L40S: "l40s",
  T4: "t4",
} as const;
/**
 * @public
 */
export type AcceleratorName = (typeof AcceleratorName)[keyof typeof AcceleratorName];

/**
 * @public
 * @enum
 */
export const AcceleratorType = {
  /**
   * GPU accelerator type.
   */
  GPU: "gpu",
} as const;
/**
 * @public
 */
export type AcceleratorType = (typeof AcceleratorType)[keyof typeof AcceleratorType];

/**
 * @public
 * @enum
 */
export const MembershipLevel = {
  CONTRIBUTOR: "CONTRIBUTOR",
  MANAGER: "MANAGER",
  OWNER: "OWNER",
  VIEWER: "VIEWER",
} as const;
/**
 * @public
 */
export type MembershipLevel = (typeof MembershipLevel)[keyof typeof MembershipLevel];

/**
 * @public
 * @enum
 */
export const DeadlinePrincipalType = {
  GROUP: "GROUP",
  USER: "USER",
} as const;
/**
 * @public
 */
export type DeadlinePrincipalType = (typeof DeadlinePrincipalType)[keyof typeof DeadlinePrincipalType];

/**
 * @public
 * @enum
 */
export const ServiceQuotaExceededExceptionReason = {
  DEPENDENCY_LIMIT_EXCEEDED: "DEPENDENCY_LIMIT_EXCEEDED",
  KMS_KEY_LIMIT_EXCEEDED: "KMS_KEY_LIMIT_EXCEEDED",
  SERVICE_QUOTA_EXCEEDED_EXCEPTION: "SERVICE_QUOTA_EXCEEDED_EXCEPTION",
} as const;
/**
 * @public
 */
export type ServiceQuotaExceededExceptionReason =
  (typeof ServiceQuotaExceededExceptionReason)[keyof typeof ServiceQuotaExceededExceptionReason];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const ConflictExceptionReason = {
  CONCURRENT_MODIFICATION: "CONCURRENT_MODIFICATION",
  CONFLICT_EXCEPTION: "CONFLICT_EXCEPTION",
  RESOURCE_ALREADY_EXISTS: "RESOURCE_ALREADY_EXISTS",
  RESOURCE_IN_USE: "RESOURCE_IN_USE",
  STATUS_CONFLICT: "STATUS_CONFLICT",
} as const;
/**
 * @public
 */
export type ConflictExceptionReason = (typeof ConflictExceptionReason)[keyof typeof ConflictExceptionReason];

/**
 * @public
 * @enum
 */
export const JobAttachmentsFileSystem = {
  COPIED: "COPIED",
  VIRTUAL: "VIRTUAL",
} as const;
/**
 * @public
 */
export type JobAttachmentsFileSystem = (typeof JobAttachmentsFileSystem)[keyof typeof JobAttachmentsFileSystem];

/**
 * @public
 * @enum
 */
export const PathFormat = {
  POSIX: "posix",
  WINDOWS: "windows",
} as const;
/**
 * @public
 */
export type PathFormat = (typeof PathFormat)[keyof typeof PathFormat];

/**
 * @public
 * @enum
 */
export const AutoScalingMode = {
  EVENT_BASED_AUTO_SCALING: "EVENT_BASED_AUTO_SCALING",
  NO_SCALING: "NO_SCALING",
} as const;
/**
 * @public
 */
export type AutoScalingMode = (typeof AutoScalingMode)[keyof typeof AutoScalingMode];

/**
 * @public
 * @enum
 */
export const AutoScalingStatus = {
  GROWING: "GROWING",
  SHRINKING: "SHRINKING",
  STEADY: "STEADY",
} as const;
/**
 * @public
 */
export type AutoScalingStatus = (typeof AutoScalingStatus)[keyof typeof AutoScalingStatus];

/**
 * @public
 * @enum
 */
export const RunAs = {
  QUEUE_CONFIGURED_USER: "QUEUE_CONFIGURED_USER",
  WORKER_AGENT_USER: "WORKER_AGENT_USER",
} as const;
/**
 * @public
 */
export type RunAs = (typeof RunAs)[keyof typeof RunAs];

/**
 * @public
 * @enum
 */
export const JobEntityErrorCode = {
  AccessDeniedException: "AccessDeniedException",
  ConflictException: "ConflictException",
  InternalServerException: "InternalServerException",
  MaxPayloadSizeExceeded: "MaxPayloadSizeExceeded",
  ResourceNotFoundException: "ResourceNotFoundException",
  ValidationException: "ValidationException",
} as const;
/**
 * @public
 */
export type JobEntityErrorCode = (typeof JobEntityErrorCode)[keyof typeof JobEntityErrorCode];

/**
 * @public
 * @enum
 */
export const BudgetActionType = {
  STOP_SCHEDULING_AND_CANCEL_TASKS: "STOP_SCHEDULING_AND_CANCEL_TASKS",
  STOP_SCHEDULING_AND_COMPLETE_TASKS: "STOP_SCHEDULING_AND_COMPLETE_TASKS",
} as const;
/**
 * @public
 */
export type BudgetActionType = (typeof BudgetActionType)[keyof typeof BudgetActionType];

/**
 * @public
 * @enum
 */
export const BudgetStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type BudgetStatus = (typeof BudgetStatus)[keyof typeof BudgetStatus];

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  EQUAL: "EQUAL",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_EQUAL_TO: "GREATER_THAN_EQUAL_TO",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_EQUAL_TO: "LESS_THAN_EQUAL_TO",
  NOT_EQUAL: "NOT_EQUAL",
} as const;
/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const CompletedStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  INTERRUPTED: "INTERRUPTED",
  NEVER_ATTEMPTED: "NEVER_ATTEMPTED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type CompletedStatus = (typeof CompletedStatus)[keyof typeof CompletedStatus];

/**
 * @public
 * @enum
 */
export const JobTemplateType = {
  JSON: "JSON",
  YAML: "YAML",
} as const;
/**
 * @public
 */
export type JobTemplateType = (typeof JobTemplateType)[keyof typeof JobTemplateType];

/**
 * @public
 * @enum
 */
export const CpuArchitectureType = {
  ARM64: "arm64",
  X86_64: "x86_64",
} as const;
/**
 * @public
 */
export type CpuArchitectureType = (typeof CpuArchitectureType)[keyof typeof CpuArchitectureType];

/**
 * @public
 * @enum
 */
export const TagPropagationMode = {
  NO_PROPAGATION: "NO_PROPAGATION",
  PROPAGATE_TAGS_TO_WORKERS_AT_LAUNCH: "PROPAGATE_TAGS_TO_WORKERS_AT_LAUNCH",
} as const;
/**
 * @public
 */
export type TagPropagationMode = (typeof TagPropagationMode)[keyof typeof TagPropagationMode];

/**
 * @public
 * @enum
 */
export const CustomerManagedFleetOperatingSystemFamily = {
  LINUX: "LINUX",
  MACOS: "MACOS",
  WINDOWS: "WINDOWS",
} as const;
/**
 * @public
 */
export type CustomerManagedFleetOperatingSystemFamily =
  (typeof CustomerManagedFleetOperatingSystemFamily)[keyof typeof CustomerManagedFleetOperatingSystemFamily];

/**
 * @public
 * @enum
 */
export const ServiceManagedFleetOperatingSystemFamily = {
  LINUX: "LINUX",
  WINDOWS: "WINDOWS",
} as const;
/**
 * @public
 */
export type ServiceManagedFleetOperatingSystemFamily =
  (typeof ServiceManagedFleetOperatingSystemFamily)[keyof typeof ServiceManagedFleetOperatingSystemFamily];

/**
 * @public
 * @enum
 */
export const Ec2MarketType = {
  ON_DEMAND: "on-demand",
  SPOT: "spot",
  WAIT_AND_SAVE: "wait-and-save",
} as const;
/**
 * @public
 */
export type Ec2MarketType = (typeof Ec2MarketType)[keyof typeof Ec2MarketType];

/**
 * @public
 * @enum
 */
export const CreateJobTargetTaskRunStatus = {
  READY: "READY",
  SUSPENDED: "SUSPENDED",
} as const;
/**
 * @public
 */
export type CreateJobTargetTaskRunStatus =
  (typeof CreateJobTargetTaskRunStatus)[keyof typeof CreateJobTargetTaskRunStatus];

/**
 * @public
 * @enum
 */
export const DefaultQueueBudgetAction = {
  NONE: "NONE",
  STOP_SCHEDULING_AND_CANCEL_TASKS: "STOP_SCHEDULING_AND_CANCEL_TASKS",
  STOP_SCHEDULING_AND_COMPLETE_TASKS: "STOP_SCHEDULING_AND_COMPLETE_TASKS",
} as const;
/**
 * @public
 */
export type DefaultQueueBudgetAction = (typeof DefaultQueueBudgetAction)[keyof typeof DefaultQueueBudgetAction];

/**
 * @public
 * @enum
 */
export const EnvironmentTemplateType = {
  JSON: "JSON",
  YAML: "YAML",
} as const;
/**
 * @public
 */
export type EnvironmentTemplateType = (typeof EnvironmentTemplateType)[keyof typeof EnvironmentTemplateType];

/**
 * @public
 * @enum
 */
export const FileSystemLocationType = {
  LOCAL: "LOCAL",
  SHARED: "SHARED",
} as const;
/**
 * @public
 */
export type FileSystemLocationType = (typeof FileSystemLocationType)[keyof typeof FileSystemLocationType];

/**
 * @public
 * @enum
 */
export const StorageProfileOperatingSystemFamily = {
  LINUX: "LINUX",
  MACOS: "MACOS",
  WINDOWS: "WINDOWS",
} as const;
/**
 * @public
 */
export type StorageProfileOperatingSystemFamily =
  (typeof StorageProfileOperatingSystemFamily)[keyof typeof StorageProfileOperatingSystemFamily];

/**
 * @public
 * @enum
 */
export const FleetStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  SUSPENDED: "SUSPENDED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type FleetStatus = (typeof FleetStatus)[keyof typeof FleetStatus];

/**
 * @public
 * @enum
 */
export const WorkerStatus = {
  CREATED: "CREATED",
  IDLE: "IDLE",
  NOT_COMPATIBLE: "NOT_COMPATIBLE",
  NOT_RESPONDING: "NOT_RESPONDING",
  RUNNING: "RUNNING",
  STARTED: "STARTED",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type WorkerStatus = (typeof WorkerStatus)[keyof typeof WorkerStatus];

/**
 * @public
 * @enum
 */
export const SessionLifecycleStatus = {
  ENDED: "ENDED",
  STARTED: "STARTED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_SUCCEEDED: "UPDATE_SUCCEEDED",
} as const;
/**
 * @public
 */
export type SessionLifecycleStatus = (typeof SessionLifecycleStatus)[keyof typeof SessionLifecycleStatus];

/**
 * @public
 * @enum
 */
export const SessionLifecycleTargetStatus = {
  ENDED: "ENDED",
} as const;
/**
 * @public
 */
export type SessionLifecycleTargetStatus =
  (typeof SessionLifecycleTargetStatus)[keyof typeof SessionLifecycleTargetStatus];

/**
 * @public
 * @enum
 */
export const UpdatedWorkerStatus = {
  STARTED: "STARTED",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type UpdatedWorkerStatus = (typeof UpdatedWorkerStatus)[keyof typeof UpdatedWorkerStatus];

/**
 * @public
 * @enum
 */
export const DesiredWorkerStatus = {
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type DesiredWorkerStatus = (typeof DesiredWorkerStatus)[keyof typeof DesiredWorkerStatus];

/**
 * @public
 * @enum
 */
export const QueueBlockedReason = {
  BUDGET_THRESHOLD_REACHED: "BUDGET_THRESHOLD_REACHED",
  NO_BUDGET_CONFIGURED: "NO_BUDGET_CONFIGURED",
} as const;
/**
 * @public
 */
export type QueueBlockedReason = (typeof QueueBlockedReason)[keyof typeof QueueBlockedReason];

/**
 * @public
 * @enum
 */
export const QueueStatus = {
  IDLE: "IDLE",
  SCHEDULING: "SCHEDULING",
  SCHEDULING_BLOCKED: "SCHEDULING_BLOCKED",
} as const;
/**
 * @public
 */
export type QueueStatus = (typeof QueueStatus)[keyof typeof QueueStatus];

/**
 * @public
 * @enum
 */
export const JobLifecycleStatus = {
  ARCHIVED: "ARCHIVED",
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_SUCCEEDED: "UPDATE_SUCCEEDED",
  UPLOAD_FAILED: "UPLOAD_FAILED",
  UPLOAD_IN_PROGRESS: "UPLOAD_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type JobLifecycleStatus = (typeof JobLifecycleStatus)[keyof typeof JobLifecycleStatus];

/**
 * @public
 * @enum
 */
export const JobTargetTaskRunStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  READY: "READY",
  SUCCEEDED: "SUCCEEDED",
  SUSPENDED: "SUSPENDED",
} as const;
/**
 * @public
 */
export type JobTargetTaskRunStatus = (typeof JobTargetTaskRunStatus)[keyof typeof JobTargetTaskRunStatus];

/**
 * @public
 * @enum
 */
export const TaskRunStatus = {
  ASSIGNED: "ASSIGNED",
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  INTERRUPTING: "INTERRUPTING",
  NOT_COMPATIBLE: "NOT_COMPATIBLE",
  PENDING: "PENDING",
  READY: "READY",
  RUNNING: "RUNNING",
  SCHEDULED: "SCHEDULED",
  STARTING: "STARTING",
  SUCCEEDED: "SUCCEEDED",
  SUSPENDED: "SUSPENDED",
} as const;
/**
 * @public
 */
export type TaskRunStatus = (typeof TaskRunStatus)[keyof typeof TaskRunStatus];

/**
 * @public
 * @enum
 */
export const SessionActionStatus = {
  ASSIGNED: "ASSIGNED",
  CANCELED: "CANCELED",
  CANCELING: "CANCELING",
  FAILED: "FAILED",
  INTERRUPTED: "INTERRUPTED",
  NEVER_ATTEMPTED: "NEVER_ATTEMPTED",
  RECLAIMED: "RECLAIMED",
  RECLAIMING: "RECLAIMING",
  RUNNING: "RUNNING",
  SCHEDULED: "SCHEDULED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type SessionActionStatus = (typeof SessionActionStatus)[keyof typeof SessionActionStatus];

/**
 * @public
 * @enum
 */
export const StepLifecycleStatus = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_SUCCEEDED: "UPDATE_SUCCEEDED",
} as const;
/**
 * @public
 */
export type StepLifecycleStatus = (typeof StepLifecycleStatus)[keyof typeof StepLifecycleStatus];

/**
 * @public
 * @enum
 */
export const StepParameterType = {
  CHUNK_INT: "CHUNK_INT",
  FLOAT: "FLOAT",
  INT: "INT",
  PATH: "PATH",
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type StepParameterType = (typeof StepParameterType)[keyof typeof StepParameterType];

/**
 * @public
 * @enum
 */
export const StepTargetTaskRunStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  READY: "READY",
  SUCCEEDED: "SUCCEEDED",
  SUSPENDED: "SUSPENDED",
} as const;
/**
 * @public
 */
export type StepTargetTaskRunStatus = (typeof StepTargetTaskRunStatus)[keyof typeof StepTargetTaskRunStatus];

/**
 * @public
 * @enum
 */
export const TaskTargetRunStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  READY: "READY",
  SUCCEEDED: "SUCCEEDED",
  SUSPENDED: "SUSPENDED",
} as const;
/**
 * @public
 */
export type TaskTargetRunStatus = (typeof TaskTargetRunStatus)[keyof typeof TaskTargetRunStatus];

/**
 * @public
 * @enum
 */
export const DependencyConsumerResolutionStatus = {
  RESOLVED: "RESOLVED",
  UNRESOLVED: "UNRESOLVED",
} as const;
/**
 * @public
 */
export type DependencyConsumerResolutionStatus =
  (typeof DependencyConsumerResolutionStatus)[keyof typeof DependencyConsumerResolutionStatus];

/**
 * @public
 * @enum
 */
export const UpdateJobLifecycleStatus = {
  ARCHIVED: "ARCHIVED",
} as const;
/**
 * @public
 */
export type UpdateJobLifecycleStatus = (typeof UpdateJobLifecycleStatus)[keyof typeof UpdateJobLifecycleStatus];

/**
 * @public
 * @enum
 */
export const QueueFleetAssociationStatus = {
  ACTIVE: "ACTIVE",
  STOPPED: "STOPPED",
  STOP_SCHEDULING_AND_CANCEL_TASKS: "STOP_SCHEDULING_AND_CANCEL_TASKS",
  STOP_SCHEDULING_AND_COMPLETE_TASKS: "STOP_SCHEDULING_AND_COMPLETE_TASKS",
} as const;
/**
 * @public
 */
export type QueueFleetAssociationStatus =
  (typeof QueueFleetAssociationStatus)[keyof typeof QueueFleetAssociationStatus];

/**
 * @public
 * @enum
 */
export const QueueLimitAssociationStatus = {
  ACTIVE: "ACTIVE",
  STOPPED: "STOPPED",
  STOP_LIMIT_USAGE_AND_CANCEL_TASKS: "STOP_LIMIT_USAGE_AND_CANCEL_TASKS",
  STOP_LIMIT_USAGE_AND_COMPLETE_TASKS: "STOP_LIMIT_USAGE_AND_COMPLETE_TASKS",
} as const;
/**
 * @public
 */
export type QueueLimitAssociationStatus =
  (typeof QueueLimitAssociationStatus)[keyof typeof QueueLimitAssociationStatus];

/**
 * @public
 * @enum
 */
export const UsageType = {
  COMPUTE: "COMPUTE",
  LICENSE: "LICENSE",
} as const;
/**
 * @public
 */
export type UsageType = (typeof UsageType)[keyof typeof UsageType];

/**
 * @public
 * @enum
 */
export const SessionsStatisticsAggregationStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  TIMEOUT: "TIMEOUT",
} as const;
/**
 * @public
 */
export type SessionsStatisticsAggregationStatus =
  (typeof SessionsStatisticsAggregationStatus)[keyof typeof SessionsStatisticsAggregationStatus];

/**
 * @public
 * @enum
 */
export const LicenseEndpointStatus = {
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  NOT_READY: "NOT_READY",
  READY: "READY",
} as const;
/**
 * @public
 */
export type LicenseEndpointStatus = (typeof LicenseEndpointStatus)[keyof typeof LicenseEndpointStatus];

/**
 * @public
 * @enum
 */
export const SearchTermMatchingType = {
  CONTAINS: "CONTAINS",
  FUZZY_MATCH: "FUZZY_MATCH",
} as const;
/**
 * @public
 */
export type SearchTermMatchingType = (typeof SearchTermMatchingType)[keyof typeof SearchTermMatchingType];

/**
 * @public
 * @enum
 */
export const LogicalOperator = {
  AND: "AND",
  OR: "OR",
} as const;
/**
 * @public
 */
export type LogicalOperator = (typeof LogicalOperator)[keyof typeof LogicalOperator];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const UsageGroupByField = {
  FLEET_ID: "FLEET_ID",
  INSTANCE_TYPE: "INSTANCE_TYPE",
  JOB_ID: "JOB_ID",
  LICENSE_PRODUCT: "LICENSE_PRODUCT",
  QUEUE_ID: "QUEUE_ID",
  USAGE_TYPE: "USAGE_TYPE",
  USER_ID: "USER_ID",
} as const;
/**
 * @public
 */
export type UsageGroupByField = (typeof UsageGroupByField)[keyof typeof UsageGroupByField];

/**
 * @public
 * @enum
 */
export const Period = {
  DAILY: "DAILY",
  HOURLY: "HOURLY",
  MONTHLY: "MONTHLY",
  WEEKLY: "WEEKLY",
} as const;
/**
 * @public
 */
export type Period = (typeof Period)[keyof typeof Period];

/**
 * @public
 * @enum
 */
export const UsageStatistic = {
  AVG: "AVG",
  MAX: "MAX",
  MIN: "MIN",
  SUM: "SUM",
} as const;
/**
 * @public
 */
export type UsageStatistic = (typeof UsageStatistic)[keyof typeof UsageStatistic];

/**
 * @public
 * @enum
 */
export const UpdateQueueFleetAssociationStatus = {
  ACTIVE: "ACTIVE",
  STOP_SCHEDULING_AND_CANCEL_TASKS: "STOP_SCHEDULING_AND_CANCEL_TASKS",
  STOP_SCHEDULING_AND_COMPLETE_TASKS: "STOP_SCHEDULING_AND_COMPLETE_TASKS",
} as const;
/**
 * @public
 */
export type UpdateQueueFleetAssociationStatus =
  (typeof UpdateQueueFleetAssociationStatus)[keyof typeof UpdateQueueFleetAssociationStatus];

/**
 * @public
 * @enum
 */
export const UpdateQueueLimitAssociationStatus = {
  ACTIVE: "ACTIVE",
  STOP_LIMIT_USAGE_AND_CANCEL_TASKS: "STOP_LIMIT_USAGE_AND_CANCEL_TASKS",
  STOP_LIMIT_USAGE_AND_COMPLETE_TASKS: "STOP_LIMIT_USAGE_AND_COMPLETE_TASKS",
} as const;
/**
 * @public
 */
export type UpdateQueueLimitAssociationStatus =
  (typeof UpdateQueueLimitAssociationStatus)[keyof typeof UpdateQueueLimitAssociationStatus];
