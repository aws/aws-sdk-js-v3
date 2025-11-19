// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ComputePlatform = {
  ECS: "ECS",
  LAMBDA: "Lambda",
  SERVER: "Server",
} as const;
/**
 * @public
 */
export type ComputePlatform = (typeof ComputePlatform)[keyof typeof ComputePlatform];

/**
 * @public
 * @enum
 */
export const ApplicationRevisionSortBy = {
  FirstUsedTime: "firstUsedTime",
  LastUsedTime: "lastUsedTime",
  RegisterTime: "registerTime",
} as const;
/**
 * @public
 */
export type ApplicationRevisionSortBy = (typeof ApplicationRevisionSortBy)[keyof typeof ApplicationRevisionSortBy];

/**
 * @public
 * @enum
 */
export const AutoRollbackEvent = {
  DEPLOYMENT_FAILURE: "DEPLOYMENT_FAILURE",
  DEPLOYMENT_STOP_ON_ALARM: "DEPLOYMENT_STOP_ON_ALARM",
  DEPLOYMENT_STOP_ON_REQUEST: "DEPLOYMENT_STOP_ON_REQUEST",
} as const;
/**
 * @public
 */
export type AutoRollbackEvent = (typeof AutoRollbackEvent)[keyof typeof AutoRollbackEvent];

/**
 * @public
 * @enum
 */
export const RevisionLocationType = {
  AppSpecContent: "AppSpecContent",
  GitHub: "GitHub",
  S3: "S3",
  String: "String",
} as const;
/**
 * @public
 */
export type RevisionLocationType = (typeof RevisionLocationType)[keyof typeof RevisionLocationType];

/**
 * @public
 * @enum
 */
export const BundleType = {
  JSON: "JSON",
  Tar: "tar",
  TarGZip: "tgz",
  YAML: "YAML",
  Zip: "zip",
} as const;
/**
 * @public
 */
export type BundleType = (typeof BundleType)[keyof typeof BundleType];

/**
 * @public
 * @enum
 */
export const DeploymentReadyAction = {
  CONTINUE_DEPLOYMENT: "CONTINUE_DEPLOYMENT",
  STOP_DEPLOYMENT: "STOP_DEPLOYMENT",
} as const;
/**
 * @public
 */
export type DeploymentReadyAction = (typeof DeploymentReadyAction)[keyof typeof DeploymentReadyAction];

/**
 * @public
 * @enum
 */
export const GreenFleetProvisioningAction = {
  COPY_AUTO_SCALING_GROUP: "COPY_AUTO_SCALING_GROUP",
  DISCOVER_EXISTING: "DISCOVER_EXISTING",
} as const;
/**
 * @public
 */
export type GreenFleetProvisioningAction =
  (typeof GreenFleetProvisioningAction)[keyof typeof GreenFleetProvisioningAction];

/**
 * @public
 * @enum
 */
export const InstanceAction = {
  KEEP_ALIVE: "KEEP_ALIVE",
  TERMINATE: "TERMINATE",
} as const;
/**
 * @public
 */
export type InstanceAction = (typeof InstanceAction)[keyof typeof InstanceAction];

/**
 * @public
 * @enum
 */
export const DeploymentOption = {
  WITHOUT_TRAFFIC_CONTROL: "WITHOUT_TRAFFIC_CONTROL",
  WITH_TRAFFIC_CONTROL: "WITH_TRAFFIC_CONTROL",
} as const;
/**
 * @public
 */
export type DeploymentOption = (typeof DeploymentOption)[keyof typeof DeploymentOption];

/**
 * @public
 * @enum
 */
export const DeploymentType = {
  BLUE_GREEN: "BLUE_GREEN",
  IN_PLACE: "IN_PLACE",
} as const;
/**
 * @public
 */
export type DeploymentType = (typeof DeploymentType)[keyof typeof DeploymentType];

/**
 * @public
 * @enum
 */
export const EC2TagFilterType = {
  KEY_AND_VALUE: "KEY_AND_VALUE",
  KEY_ONLY: "KEY_ONLY",
  VALUE_ONLY: "VALUE_ONLY",
} as const;
/**
 * @public
 */
export type EC2TagFilterType = (typeof EC2TagFilterType)[keyof typeof EC2TagFilterType];

/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  BAKING: "Baking",
  CREATED: "Created",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  QUEUED: "Queued",
  READY: "Ready",
  STOPPED: "Stopped",
  SUCCEEDED: "Succeeded",
} as const;
/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

/**
 * @public
 * @enum
 */
export const TagFilterType = {
  KEY_AND_VALUE: "KEY_AND_VALUE",
  KEY_ONLY: "KEY_ONLY",
  VALUE_ONLY: "VALUE_ONLY",
} as const;
/**
 * @public
 */
export type TagFilterType = (typeof TagFilterType)[keyof typeof TagFilterType];

/**
 * @public
 * @enum
 */
export const OutdatedInstancesStrategy = {
  Ignore: "IGNORE",
  Update: "UPDATE",
} as const;
/**
 * @public
 */
export type OutdatedInstancesStrategy = (typeof OutdatedInstancesStrategy)[keyof typeof OutdatedInstancesStrategy];

/**
 * @public
 * @enum
 */
export const TriggerEventType = {
  DEPLOYMENT_FAILURE: "DeploymentFailure",
  DEPLOYMENT_READY: "DeploymentReady",
  DEPLOYMENT_ROLLBACK: "DeploymentRollback",
  DEPLOYMENT_START: "DeploymentStart",
  DEPLOYMENT_STOP: "DeploymentStop",
  DEPLOYMENT_SUCCESS: "DeploymentSuccess",
  INSTANCE_FAILURE: "InstanceFailure",
  INSTANCE_READY: "InstanceReady",
  INSTANCE_START: "InstanceStart",
  INSTANCE_SUCCESS: "InstanceSuccess",
} as const;
/**
 * @public
 */
export type TriggerEventType = (typeof TriggerEventType)[keyof typeof TriggerEventType];

/**
 * @public
 * @enum
 */
export const _InstanceType = {
  BLUE: "Blue",
  GREEN: "Green",
} as const;
/**
 * @public
 */
export type _InstanceType = (typeof _InstanceType)[keyof typeof _InstanceType];

/**
 * @public
 * @enum
 */
export const LifecycleErrorCode = {
  SCRIPT_FAILED: "ScriptFailed",
  SCRIPT_MISSING: "ScriptMissing",
  SCRIPT_NOT_EXECUTABLE: "ScriptNotExecutable",
  SCRIPT_TIMED_OUT: "ScriptTimedOut",
  SUCCESS: "Success",
  UNKNOWN_ERROR: "UnknownError",
} as const;
/**
 * @public
 */
export type LifecycleErrorCode = (typeof LifecycleErrorCode)[keyof typeof LifecycleErrorCode];

/**
 * @public
 * @enum
 */
export const LifecycleEventStatus = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  SKIPPED: "Skipped",
  SUCCEEDED: "Succeeded",
  UNKNOWN: "Unknown",
} as const;
/**
 * @public
 */
export type LifecycleEventStatus = (typeof LifecycleEventStatus)[keyof typeof LifecycleEventStatus];

/**
 * @public
 * @enum
 */
export const InstanceStatus = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  READY: "Ready",
  SKIPPED: "Skipped",
  SUCCEEDED: "Succeeded",
  UNKNOWN: "Unknown",
} as const;
/**
 * @public
 */
export type InstanceStatus = (typeof InstanceStatus)[keyof typeof InstanceStatus];

/**
 * @public
 * @enum
 */
export const DeploymentCreator = {
  Autoscaling: "autoscaling",
  AutoscalingTermination: "autoscalingTermination",
  CloudFormation: "CloudFormation",
  CloudFormationRollback: "CloudFormationRollback",
  CodeDeploy: "CodeDeploy",
  CodeDeployAutoUpdate: "CodeDeployAutoUpdate",
  CodeDeployRollback: "codeDeployRollback",
  User: "user",
} as const;
/**
 * @public
 */
export type DeploymentCreator = (typeof DeploymentCreator)[keyof typeof DeploymentCreator];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  AGENT_ISSUE: "AGENT_ISSUE",
  ALARM_ACTIVE: "ALARM_ACTIVE",
  APPLICATION_MISSING: "APPLICATION_MISSING",
  AUTOSCALING_VALIDATION_ERROR: "AUTOSCALING_VALIDATION_ERROR",
  AUTO_SCALING_CONFIGURATION: "AUTO_SCALING_CONFIGURATION",
  AUTO_SCALING_IAM_ROLE_PERMISSIONS: "AUTO_SCALING_IAM_ROLE_PERMISSIONS",
  CLOUDFORMATION_STACK_FAILURE: "CLOUDFORMATION_STACK_FAILURE",
  CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND: "CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND",
  CUSTOMER_APPLICATION_UNHEALTHY: "CUSTOMER_APPLICATION_UNHEALTHY",
  DEPLOYMENT_GROUP_MISSING: "DEPLOYMENT_GROUP_MISSING",
  ECS_UPDATE_ERROR: "ECS_UPDATE_ERROR",
  ELASTIC_LOAD_BALANCING_INVALID: "ELASTIC_LOAD_BALANCING_INVALID",
  ELB_INVALID_INSTANCE: "ELB_INVALID_INSTANCE",
  HEALTH_CONSTRAINTS: "HEALTH_CONSTRAINTS",
  HEALTH_CONSTRAINTS_INVALID: "HEALTH_CONSTRAINTS_INVALID",
  HOOK_EXECUTION_FAILURE: "HOOK_EXECUTION_FAILURE",
  IAM_ROLE_MISSING: "IAM_ROLE_MISSING",
  IAM_ROLE_PERMISSIONS: "IAM_ROLE_PERMISSIONS",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_ECS_SERVICE: "INVALID_ECS_SERVICE",
  INVALID_LAMBDA_CONFIGURATION: "INVALID_LAMBDA_CONFIGURATION",
  INVALID_LAMBDA_FUNCTION: "INVALID_LAMBDA_FUNCTION",
  INVALID_REVISION: "INVALID_REVISION",
  MANUAL_STOP: "MANUAL_STOP",
  MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION: "MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION",
  MISSING_ELB_INFORMATION: "MISSING_ELB_INFORMATION",
  MISSING_GITHUB_TOKEN: "MISSING_GITHUB_TOKEN",
  NO_EC2_SUBSCRIPTION: "NO_EC2_SUBSCRIPTION",
  NO_INSTANCES: "NO_INSTANCES",
  OVER_MAX_INSTANCES: "OVER_MAX_INSTANCES",
  RESOURCE_LIMIT_EXCEEDED: "RESOURCE_LIMIT_EXCEEDED",
  REVISION_MISSING: "REVISION_MISSING",
  THROTTLED: "THROTTLED",
  TIMEOUT: "TIMEOUT",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const FileExistsBehavior = {
  DISALLOW: "DISALLOW",
  OVERWRITE: "OVERWRITE",
  RETAIN: "RETAIN",
} as const;
/**
 * @public
 */
export type FileExistsBehavior = (typeof FileExistsBehavior)[keyof typeof FileExistsBehavior];

/**
 * @public
 * @enum
 */
export const TargetStatus = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  READY: "Ready",
  SKIPPED: "Skipped",
  SUCCEEDED: "Succeeded",
  UNKNOWN: "Unknown",
} as const;
/**
 * @public
 */
export type TargetStatus = (typeof TargetStatus)[keyof typeof TargetStatus];

/**
 * @public
 * @enum
 */
export const DeploymentTargetType = {
  CLOUDFORMATION_TARGET: "CloudFormationTarget",
  ECS_TARGET: "ECSTarget",
  INSTANCE_TARGET: "InstanceTarget",
  LAMBDA_TARGET: "LambdaTarget",
} as const;
/**
 * @public
 */
export type DeploymentTargetType = (typeof DeploymentTargetType)[keyof typeof DeploymentTargetType];

/**
 * @public
 * @enum
 */
export const TargetLabel = {
  BLUE: "Blue",
  GREEN: "Green",
} as const;
/**
 * @public
 */
export type TargetLabel = (typeof TargetLabel)[keyof typeof TargetLabel];

/**
 * @public
 * @enum
 */
export const DeploymentWaitType = {
  READY_WAIT: "READY_WAIT",
  TERMINATION_WAIT: "TERMINATION_WAIT",
} as const;
/**
 * @public
 */
export type DeploymentWaitType = (typeof DeploymentWaitType)[keyof typeof DeploymentWaitType];

/**
 * @public
 * @enum
 */
export const MinimumHealthyHostsType = {
  FLEET_PERCENT: "FLEET_PERCENT",
  HOST_COUNT: "HOST_COUNT",
} as const;
/**
 * @public
 */
export type MinimumHealthyHostsType = (typeof MinimumHealthyHostsType)[keyof typeof MinimumHealthyHostsType];

/**
 * @public
 * @enum
 */
export const TrafficRoutingType = {
  AllAtOnce: "AllAtOnce",
  TimeBasedCanary: "TimeBasedCanary",
  TimeBasedLinear: "TimeBasedLinear",
} as const;
/**
 * @public
 */
export type TrafficRoutingType = (typeof TrafficRoutingType)[keyof typeof TrafficRoutingType];

/**
 * @public
 * @enum
 */
export const MinimumHealthyHostsPerZoneType = {
  FLEET_PERCENT: "FLEET_PERCENT",
  HOST_COUNT: "HOST_COUNT",
} as const;
/**
 * @public
 */
export type MinimumHealthyHostsPerZoneType =
  (typeof MinimumHealthyHostsPerZoneType)[keyof typeof MinimumHealthyHostsPerZoneType];

/**
 * @public
 * @enum
 */
export const ListStateFilterAction = {
  Exclude: "exclude",
  Ignore: "ignore",
  Include: "include",
} as const;
/**
 * @public
 */
export type ListStateFilterAction = (typeof ListStateFilterAction)[keyof typeof ListStateFilterAction];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  Ascending: "ascending",
  Descending: "descending",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const TargetFilterName = {
  SERVER_INSTANCE_LABEL: "ServerInstanceLabel",
  TARGET_STATUS: "TargetStatus",
} as const;
/**
 * @public
 */
export type TargetFilterName = (typeof TargetFilterName)[keyof typeof TargetFilterName];

/**
 * @public
 * @enum
 */
export const RegistrationStatus = {
  Deregistered: "Deregistered",
  Registered: "Registered",
} as const;
/**
 * @public
 */
export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus];

/**
 * @public
 * @enum
 */
export const StopStatus = {
  PENDING: "Pending",
  SUCCEEDED: "Succeeded",
} as const;
/**
 * @public
 */
export type StopStatus = (typeof StopStatus)[keyof typeof StopStatus];
