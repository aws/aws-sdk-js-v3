// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AcceleratorManufacturer = {
  AMAZON_WEB_SERVICES: "amazon-web-services",
  AMD: "amd",
  HABANA: "habana",
  NVIDIA: "nvidia",
  XILINX: "xilinx",
} as const;
/**
 * @public
 */
export type AcceleratorManufacturer = (typeof AcceleratorManufacturer)[keyof typeof AcceleratorManufacturer];

/**
 * @public
 * @enum
 */
export const AcceleratorName = {
  A100: "a100",
  A10G: "a10g",
  H100: "h100",
  INFERENTIA: "inferentia",
  K520: "k520",
  K80: "k80",
  M60: "m60",
  RADEON_PRO_V520: "radeon-pro-v520",
  T4: "t4",
  T4G: "t4g",
  V100: "v100",
  VU9P: "vu9p",
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
  FPGA: "fpga",
  GPU: "gpu",
  INFERENCE: "inference",
} as const;
/**
 * @public
 */
export type AcceleratorType = (typeof AcceleratorType)[keyof typeof AcceleratorType];

/**
 * @public
 * @enum
 */
export const AccessType = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
} as const;
/**
 * @public
 */
export type AccessType = (typeof AccessType)[keyof typeof AccessType];

/**
 * @public
 * @enum
 */
export const AgentUpdateStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  STAGED: "STAGED",
  STAGING: "STAGING",
  UPDATED: "UPDATED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type AgentUpdateStatus = (typeof AgentUpdateStatus)[keyof typeof AgentUpdateStatus];

/**
 * @public
 * @enum
 */
export const ManagedDraining = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ManagedDraining = (typeof ManagedDraining)[keyof typeof ManagedDraining];

/**
 * @public
 * @enum
 */
export const ManagedScalingStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ManagedScalingStatus = (typeof ManagedScalingStatus)[keyof typeof ManagedScalingStatus];

/**
 * @public
 * @enum
 */
export const ManagedTerminationProtection = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ManagedTerminationProtection =
  (typeof ManagedTerminationProtection)[keyof typeof ManagedTerminationProtection];

/**
 * @public
 * @enum
 */
export const CapacityOptionType = {
  ON_DEMAND: "ON_DEMAND",
  SPOT: "SPOT",
} as const;
/**
 * @public
 */
export type CapacityOptionType = (typeof CapacityOptionType)[keyof typeof CapacityOptionType];

/**
 * @public
 * @enum
 */
export const BareMetal = {
  EXCLUDED: "excluded",
  INCLUDED: "included",
  REQUIRED: "required",
} as const;
/**
 * @public
 */
export type BareMetal = (typeof BareMetal)[keyof typeof BareMetal];

/**
 * @public
 * @enum
 */
export const BurstablePerformance = {
  EXCLUDED: "excluded",
  INCLUDED: "included",
  REQUIRED: "required",
} as const;
/**
 * @public
 */
export type BurstablePerformance = (typeof BurstablePerformance)[keyof typeof BurstablePerformance];

/**
 * @public
 * @enum
 */
export const CpuManufacturer = {
  AMAZON_WEB_SERVICES: "amazon-web-services",
  AMD: "amd",
  INTEL: "intel",
} as const;
/**
 * @public
 */
export type CpuManufacturer = (typeof CpuManufacturer)[keyof typeof CpuManufacturer];

/**
 * @public
 * @enum
 */
export const InstanceGeneration = {
  CURRENT: "current",
  PREVIOUS: "previous",
} as const;
/**
 * @public
 */
export type InstanceGeneration = (typeof InstanceGeneration)[keyof typeof InstanceGeneration];

/**
 * @public
 * @enum
 */
export const LocalStorage = {
  EXCLUDED: "excluded",
  INCLUDED: "included",
  REQUIRED: "required",
} as const;
/**
 * @public
 */
export type LocalStorage = (typeof LocalStorage)[keyof typeof LocalStorage];

/**
 * @public
 * @enum
 */
export const LocalStorageType = {
  HDD: "hdd",
  SSD: "ssd",
} as const;
/**
 * @public
 */
export type LocalStorageType = (typeof LocalStorageType)[keyof typeof LocalStorageType];

/**
 * @public
 * @enum
 */
export const ManagedInstancesMonitoringOptions = {
  BASIC: "BASIC",
  DETAILED: "DETAILED",
} as const;
/**
 * @public
 */
export type ManagedInstancesMonitoringOptions =
  (typeof ManagedInstancesMonitoringOptions)[keyof typeof ManagedInstancesMonitoringOptions];

/**
 * @public
 * @enum
 */
export const PropagateMITags = {
  CAPACITY_PROVIDER: "CAPACITY_PROVIDER",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type PropagateMITags = (typeof PropagateMITags)[keyof typeof PropagateMITags];

/**
 * @public
 * @enum
 */
export const CapacityProviderStatus = {
  ACTIVE: "ACTIVE",
  DEPROVISIONING: "DEPROVISIONING",
  INACTIVE: "INACTIVE",
  PROVISIONING: "PROVISIONING",
} as const;
/**
 * @public
 */
export type CapacityProviderStatus = (typeof CapacityProviderStatus)[keyof typeof CapacityProviderStatus];

/**
 * @public
 * @enum
 */
export const CapacityProviderType = {
  EC2_AUTOSCALING: "EC2_AUTOSCALING",
  FARGATE: "FARGATE",
  FARGATE_SPOT: "FARGATE_SPOT",
  MANAGED_INSTANCES: "MANAGED_INSTANCES",
} as const;
/**
 * @public
 */
export type CapacityProviderType = (typeof CapacityProviderType)[keyof typeof CapacityProviderType];

/**
 * @public
 * @enum
 */
export const CapacityProviderUpdateStatus = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_COMPLETE: "DELETE_COMPLETE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  UPDATE_COMPLETE: "UPDATE_COMPLETE",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type CapacityProviderUpdateStatus =
  (typeof CapacityProviderUpdateStatus)[keyof typeof CapacityProviderUpdateStatus];

/**
 * @public
 * @enum
 */
export const ExecuteCommandLogging = {
  DEFAULT: "DEFAULT",
  NONE: "NONE",
  OVERRIDE: "OVERRIDE",
} as const;
/**
 * @public
 */
export type ExecuteCommandLogging = (typeof ExecuteCommandLogging)[keyof typeof ExecuteCommandLogging];

/**
 * @public
 * @enum
 */
export const ClusterSettingName = {
  CONTAINER_INSIGHTS: "containerInsights",
} as const;
/**
 * @public
 */
export type ClusterSettingName = (typeof ClusterSettingName)[keyof typeof ClusterSettingName];

/**
 * @public
 * @enum
 */
export const ExpressGatewayServiceScalingMetric = {
  AverageCPUUtilization: "AVERAGE_CPU",
  AverageMemoryUtilization: "AVERAGE_MEMORY",
  RequestCountPerTarget: "REQUEST_COUNT_PER_TARGET",
} as const;
/**
 * @public
 */
export type ExpressGatewayServiceScalingMetric =
  (typeof ExpressGatewayServiceScalingMetric)[keyof typeof ExpressGatewayServiceScalingMetric];

/**
 * @public
 * @enum
 */
export const ExpressGatewayServiceStatusCode = {
  ACTIVE: "ACTIVE",
  DRAINING: "DRAINING",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type ExpressGatewayServiceStatusCode =
  (typeof ExpressGatewayServiceStatusCode)[keyof typeof ExpressGatewayServiceStatusCode];

/**
 * @public
 * @enum
 */
export const AvailabilityZoneRebalancing = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AvailabilityZoneRebalancing =
  (typeof AvailabilityZoneRebalancing)[keyof typeof AvailabilityZoneRebalancing];

/**
 * @public
 * @enum
 */
export const DeploymentLifecycleHookStage = {
  POST_PRODUCTION_TRAFFIC_SHIFT: "POST_PRODUCTION_TRAFFIC_SHIFT",
  POST_SCALE_UP: "POST_SCALE_UP",
  POST_TEST_TRAFFIC_SHIFT: "POST_TEST_TRAFFIC_SHIFT",
  PRE_SCALE_UP: "PRE_SCALE_UP",
  PRODUCTION_TRAFFIC_SHIFT: "PRODUCTION_TRAFFIC_SHIFT",
  RECONCILE_SERVICE: "RECONCILE_SERVICE",
  TEST_TRAFFIC_SHIFT: "TEST_TRAFFIC_SHIFT",
} as const;
/**
 * @public
 */
export type DeploymentLifecycleHookStage =
  (typeof DeploymentLifecycleHookStage)[keyof typeof DeploymentLifecycleHookStage];

/**
 * @public
 * @enum
 */
export const DeploymentStrategy = {
  BLUE_GREEN: "BLUE_GREEN",
  CANARY: "CANARY",
  LINEAR: "LINEAR",
  ROLLING: "ROLLING",
} as const;
/**
 * @public
 */
export type DeploymentStrategy = (typeof DeploymentStrategy)[keyof typeof DeploymentStrategy];

/**
 * @public
 * @enum
 */
export const DeploymentControllerType = {
  CODE_DEPLOY: "CODE_DEPLOY",
  ECS: "ECS",
  EXTERNAL: "EXTERNAL",
} as const;
/**
 * @public
 */
export type DeploymentControllerType = (typeof DeploymentControllerType)[keyof typeof DeploymentControllerType];

/**
 * @public
 * @enum
 */
export const LaunchType = {
  EC2: "EC2",
  EXTERNAL: "EXTERNAL",
  FARGATE: "FARGATE",
  MANAGED_INSTANCES: "MANAGED_INSTANCES",
} as const;
/**
 * @public
 */
export type LaunchType = (typeof LaunchType)[keyof typeof LaunchType];

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
  NONE: "NONE",
  SERVICE: "SERVICE",
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
export const SchedulingStrategy = {
  DAEMON: "DAEMON",
  REPLICA: "REPLICA",
} as const;
/**
 * @public
 */
export type SchedulingStrategy = (typeof SchedulingStrategy)[keyof typeof SchedulingStrategy];

/**
 * @public
 * @enum
 */
export const ServiceConnectAccessLoggingFormat = {
  JSON: "JSON",
  TEXT: "TEXT",
} as const;
/**
 * @public
 */
export type ServiceConnectAccessLoggingFormat =
  (typeof ServiceConnectAccessLoggingFormat)[keyof typeof ServiceConnectAccessLoggingFormat];

/**
 * @public
 * @enum
 */
export const ServiceConnectIncludeQueryParameters = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ServiceConnectIncludeQueryParameters =
  (typeof ServiceConnectIncludeQueryParameters)[keyof typeof ServiceConnectIncludeQueryParameters];

/**
 * @public
 * @enum
 */
export const LogDriver = {
  AWSFIRELENS: "awsfirelens",
  AWSLOGS: "awslogs",
  FLUENTD: "fluentd",
  GELF: "gelf",
  JOURNALD: "journald",
  JSON_FILE: "json-file",
  SPLUNK: "splunk",
  SYSLOG: "syslog",
} as const;
/**
 * @public
 */
export type LogDriver = (typeof LogDriver)[keyof typeof LogDriver];

/**
 * @public
 * @enum
 */
export const TaskFilesystemType = {
  EXT3: "ext3",
  EXT4: "ext4",
  NTFS: "ntfs",
  XFS: "xfs",
} as const;
/**
 * @public
 */
export type TaskFilesystemType = (typeof TaskFilesystemType)[keyof typeof TaskFilesystemType];

/**
 * @public
 * @enum
 */
export const EBSResourceType = {
  VOLUME: "volume",
} as const;
/**
 * @public
 */
export type EBSResourceType = (typeof EBSResourceType)[keyof typeof EBSResourceType];

/**
 * @public
 * @enum
 */
export const DeploymentRolloutState = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type DeploymentRolloutState = (typeof DeploymentRolloutState)[keyof typeof DeploymentRolloutState];

/**
 * @public
 * @enum
 */
export const ResourceManagementType = {
  CUSTOMER: "CUSTOMER",
  ECS: "ECS",
} as const;
/**
 * @public
 */
export type ResourceManagementType = (typeof ResourceManagementType)[keyof typeof ResourceManagementType];

/**
 * @public
 * @enum
 */
export const ScaleUnit = {
  PERCENT: "PERCENT",
} as const;
/**
 * @public
 */
export type ScaleUnit = (typeof ScaleUnit)[keyof typeof ScaleUnit];

/**
 * @public
 * @enum
 */
export const StabilityStatus = {
  STABILIZING: "STABILIZING",
  STEADY_STATE: "STEADY_STATE",
} as const;
/**
 * @public
 */
export type StabilityStatus = (typeof StabilityStatus)[keyof typeof StabilityStatus];

/**
 * @public
 * @enum
 */
export const SettingName = {
  AWSVPC_TRUNKING: "awsvpcTrunking",
  CONTAINER_INSIGHTS: "containerInsights",
  CONTAINER_INSTANCE_LONG_ARN_FORMAT: "containerInstanceLongArnFormat",
  DEFAULT_LOG_DRIVER_MODE: "defaultLogDriverMode",
  FARGATE_EVENT_WINDOWS: "fargateEventWindows",
  FARGATE_FIPS_MODE: "fargateFIPSMode",
  FARGATE_TASK_RETIREMENT_WAIT_PERIOD: "fargateTaskRetirementWaitPeriod",
  GUARD_DUTY_ACTIVATE: "guardDutyActivate",
  SERVICE_LONG_ARN_FORMAT: "serviceLongArnFormat",
  TAG_RESOURCE_AUTHORIZATION: "tagResourceAuthorization",
  TASK_LONG_ARN_FORMAT: "taskLongArnFormat",
} as const;
/**
 * @public
 */
export type SettingName = (typeof SettingName)[keyof typeof SettingName];

/**
 * @public
 * @enum
 */
export const SettingType = {
  AWS_MANAGED: "aws_managed",
  USER: "user",
} as const;
/**
 * @public
 */
export type SettingType = (typeof SettingType)[keyof typeof SettingType];

/**
 * @public
 * @enum
 */
export const TargetType = {
  CONTAINER_INSTANCE: "container-instance",
} as const;
/**
 * @public
 */
export type TargetType = (typeof TargetType)[keyof typeof TargetType];

/**
 * @public
 * @enum
 */
export const Compatibility = {
  EC2: "EC2",
  EXTERNAL: "EXTERNAL",
  FARGATE: "FARGATE",
  MANAGED_INSTANCES: "MANAGED_INSTANCES",
} as const;
/**
 * @public
 */
export type Compatibility = (typeof Compatibility)[keyof typeof Compatibility];

/**
 * @public
 * @enum
 */
export const ContainerCondition = {
  COMPLETE: "COMPLETE",
  HEALTHY: "HEALTHY",
  START: "START",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type ContainerCondition = (typeof ContainerCondition)[keyof typeof ContainerCondition];

/**
 * @public
 * @enum
 */
export const EnvironmentFileType = {
  S3: "s3",
} as const;
/**
 * @public
 */
export type EnvironmentFileType = (typeof EnvironmentFileType)[keyof typeof EnvironmentFileType];

/**
 * @public
 * @enum
 */
export const FirelensConfigurationType = {
  FLUENTBIT: "fluentbit",
  FLUENTD: "fluentd",
} as const;
/**
 * @public
 */
export type FirelensConfigurationType = (typeof FirelensConfigurationType)[keyof typeof FirelensConfigurationType];

/**
 * @public
 * @enum
 */
export const DeviceCgroupPermission = {
  MKNOD: "mknod",
  READ: "read",
  WRITE: "write",
} as const;
/**
 * @public
 */
export type DeviceCgroupPermission = (typeof DeviceCgroupPermission)[keyof typeof DeviceCgroupPermission];

/**
 * @public
 * @enum
 */
export const ApplicationProtocol = {
  GRPC: "grpc",
  HTTP: "http",
  HTTP2: "http2",
} as const;
/**
 * @public
 */
export type ApplicationProtocol = (typeof ApplicationProtocol)[keyof typeof ApplicationProtocol];

/**
 * @public
 * @enum
 */
export const TransportProtocol = {
  TCP: "tcp",
  UDP: "udp",
} as const;
/**
 * @public
 */
export type TransportProtocol = (typeof TransportProtocol)[keyof typeof TransportProtocol];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  GPU: "GPU",
  INFERENCE_ACCELERATOR: "InferenceAccelerator",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const UlimitName = {
  CORE: "core",
  CPU: "cpu",
  DATA: "data",
  FSIZE: "fsize",
  LOCKS: "locks",
  MEMLOCK: "memlock",
  MSGQUEUE: "msgqueue",
  NICE: "nice",
  NOFILE: "nofile",
  NPROC: "nproc",
  RSS: "rss",
  RTPRIO: "rtprio",
  RTTIME: "rttime",
  SIGPENDING: "sigpending",
  STACK: "stack",
} as const;
/**
 * @public
 */
export type UlimitName = (typeof UlimitName)[keyof typeof UlimitName];

/**
 * @public
 * @enum
 */
export const VersionConsistency = {
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;
/**
 * @public
 */
export type VersionConsistency = (typeof VersionConsistency)[keyof typeof VersionConsistency];

/**
 * @public
 * @enum
 */
export const IpcMode = {
  HOST: "host",
  NONE: "none",
  TASK: "task",
} as const;
/**
 * @public
 */
export type IpcMode = (typeof IpcMode)[keyof typeof IpcMode];

/**
 * @public
 * @enum
 */
export const NetworkMode = {
  AWSVPC: "awsvpc",
  BRIDGE: "bridge",
  HOST: "host",
  NONE: "none",
} as const;
/**
 * @public
 */
export type NetworkMode = (typeof NetworkMode)[keyof typeof NetworkMode];

/**
 * @public
 * @enum
 */
export const PidMode = {
  HOST: "host",
  TASK: "task",
} as const;
/**
 * @public
 */
export type PidMode = (typeof PidMode)[keyof typeof PidMode];

/**
 * @public
 * @enum
 */
export const TaskDefinitionPlacementConstraintType = {
  MEMBER_OF: "memberOf",
} as const;
/**
 * @public
 */
export type TaskDefinitionPlacementConstraintType =
  (typeof TaskDefinitionPlacementConstraintType)[keyof typeof TaskDefinitionPlacementConstraintType];

/**
 * @public
 * @enum
 */
export const ProxyConfigurationType = {
  APPMESH: "APPMESH",
} as const;
/**
 * @public
 */
export type ProxyConfigurationType = (typeof ProxyConfigurationType)[keyof typeof ProxyConfigurationType];

/**
 * @public
 * @enum
 */
export const CPUArchitecture = {
  ARM64: "ARM64",
  X86_64: "X86_64",
} as const;
/**
 * @public
 */
export type CPUArchitecture = (typeof CPUArchitecture)[keyof typeof CPUArchitecture];

/**
 * @public
 * @enum
 */
export const OSFamily = {
  LINUX: "LINUX",
  WINDOWS_SERVER_2004_CORE: "WINDOWS_SERVER_2004_CORE",
  WINDOWS_SERVER_2016_FULL: "WINDOWS_SERVER_2016_FULL",
  WINDOWS_SERVER_2019_CORE: "WINDOWS_SERVER_2019_CORE",
  WINDOWS_SERVER_2019_FULL: "WINDOWS_SERVER_2019_FULL",
  WINDOWS_SERVER_2022_CORE: "WINDOWS_SERVER_2022_CORE",
  WINDOWS_SERVER_2022_FULL: "WINDOWS_SERVER_2022_FULL",
  WINDOWS_SERVER_2025_CORE: "WINDOWS_SERVER_2025_CORE",
  WINDOWS_SERVER_2025_FULL: "WINDOWS_SERVER_2025_FULL",
  WINDOWS_SERVER_20H2_CORE: "WINDOWS_SERVER_20H2_CORE",
} as const;
/**
 * @public
 */
export type OSFamily = (typeof OSFamily)[keyof typeof OSFamily];

/**
 * @public
 * @enum
 */
export const TaskDefinitionStatus = {
  ACTIVE: "ACTIVE",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type TaskDefinitionStatus = (typeof TaskDefinitionStatus)[keyof typeof TaskDefinitionStatus];

/**
 * @public
 * @enum
 */
export const Scope = {
  SHARED: "shared",
  TASK: "task",
} as const;
/**
 * @public
 */
export type Scope = (typeof Scope)[keyof typeof Scope];

/**
 * @public
 * @enum
 */
export const EFSAuthorizationConfigIAM = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type EFSAuthorizationConfigIAM = (typeof EFSAuthorizationConfigIAM)[keyof typeof EFSAuthorizationConfigIAM];

/**
 * @public
 * @enum
 */
export const EFSTransitEncryption = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type EFSTransitEncryption = (typeof EFSTransitEncryption)[keyof typeof EFSTransitEncryption];

/**
 * @public
 * @enum
 */
export const InstanceHealthCheckState = {
  IMPAIRED: "IMPAIRED",
  INITIALIZING: "INITIALIZING",
  INSUFFICIENT_DATA: "INSUFFICIENT_DATA",
  OK: "OK",
} as const;
/**
 * @public
 */
export type InstanceHealthCheckState = (typeof InstanceHealthCheckState)[keyof typeof InstanceHealthCheckState];

/**
 * @public
 * @enum
 */
export const InstanceHealthCheckType = {
  CONTAINER_RUNTIME: "CONTAINER_RUNTIME",
} as const;
/**
 * @public
 */
export type InstanceHealthCheckType = (typeof InstanceHealthCheckType)[keyof typeof InstanceHealthCheckType];

/**
 * @public
 * @enum
 */
export const CapacityProviderField = {
  TAGS: "TAGS",
} as const;
/**
 * @public
 */
export type CapacityProviderField = (typeof CapacityProviderField)[keyof typeof CapacityProviderField];

/**
 * @public
 * @enum
 */
export const ClusterField = {
  ATTACHMENTS: "ATTACHMENTS",
  CONFIGURATIONS: "CONFIGURATIONS",
  SETTINGS: "SETTINGS",
  STATISTICS: "STATISTICS",
  TAGS: "TAGS",
} as const;
/**
 * @public
 */
export type ClusterField = (typeof ClusterField)[keyof typeof ClusterField];

/**
 * @public
 * @enum
 */
export const ContainerInstanceField = {
  CONTAINER_INSTANCE_HEALTH: "CONTAINER_INSTANCE_HEALTH",
  TAGS: "TAGS",
} as const;
/**
 * @public
 */
export type ContainerInstanceField = (typeof ContainerInstanceField)[keyof typeof ContainerInstanceField];

/**
 * @public
 * @enum
 */
export const ExpressGatewayServiceInclude = {
  TAGS: "TAGS",
} as const;
/**
 * @public
 */
export type ExpressGatewayServiceInclude =
  (typeof ExpressGatewayServiceInclude)[keyof typeof ExpressGatewayServiceInclude];

/**
 * @public
 * @enum
 */
export const ServiceDeploymentRollbackMonitorsStatus = {
  DISABLED: "DISABLED",
  MONITORING: "MONITORING",
  MONITORING_COMPLETE: "MONITORING_COMPLETE",
  TRIGGERED: "TRIGGERED",
} as const;
/**
 * @public
 */
export type ServiceDeploymentRollbackMonitorsStatus =
  (typeof ServiceDeploymentRollbackMonitorsStatus)[keyof typeof ServiceDeploymentRollbackMonitorsStatus];

/**
 * @public
 * @enum
 */
export const ServiceDeploymentLifecycleStage = {
  BAKE_TIME: "BAKE_TIME",
  CLEAN_UP: "CLEAN_UP",
  POST_PRODUCTION_TRAFFIC_SHIFT: "POST_PRODUCTION_TRAFFIC_SHIFT",
  POST_SCALE_UP: "POST_SCALE_UP",
  POST_TEST_TRAFFIC_SHIFT: "POST_TEST_TRAFFIC_SHIFT",
  PRE_SCALE_UP: "PRE_SCALE_UP",
  PRODUCTION_TRAFFIC_SHIFT: "PRODUCTION_TRAFFIC_SHIFT",
  RECONCILE_SERVICE: "RECONCILE_SERVICE",
  SCALE_UP: "SCALE_UP",
  TEST_TRAFFIC_SHIFT: "TEST_TRAFFIC_SHIFT",
} as const;
/**
 * @public
 */
export type ServiceDeploymentLifecycleStage =
  (typeof ServiceDeploymentLifecycleStage)[keyof typeof ServiceDeploymentLifecycleStage];

/**
 * @public
 * @enum
 */
export const ServiceDeploymentStatus = {
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  ROLLBACK_FAILED: "ROLLBACK_FAILED",
  ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS",
  ROLLBACK_REQUESTED: "ROLLBACK_REQUESTED",
  ROLLBACK_SUCCESSFUL: "ROLLBACK_SUCCESSFUL",
  STOPPED: "STOPPED",
  STOP_REQUESTED: "STOP_REQUESTED",
  SUCCESSFUL: "SUCCESSFUL",
} as const;
/**
 * @public
 */
export type ServiceDeploymentStatus = (typeof ServiceDeploymentStatus)[keyof typeof ServiceDeploymentStatus];

/**
 * @public
 * @enum
 */
export const ManagedResourceStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DEPROVISIONING: "DEPROVISIONING",
  FAILED: "FAILED",
  PROVISIONING: "PROVISIONING",
} as const;
/**
 * @public
 */
export type ManagedResourceStatus = (typeof ManagedResourceStatus)[keyof typeof ManagedResourceStatus];

/**
 * @public
 * @enum
 */
export const ServiceField = {
  TAGS: "TAGS",
} as const;
/**
 * @public
 */
export type ServiceField = (typeof ServiceField)[keyof typeof ServiceField];

/**
 * @public
 * @enum
 */
export const TaskDefinitionField = {
  TAGS: "TAGS",
} as const;
/**
 * @public
 */
export type TaskDefinitionField = (typeof TaskDefinitionField)[keyof typeof TaskDefinitionField];

/**
 * @public
 * @enum
 */
export const TaskField = {
  TAGS: "TAGS",
} as const;
/**
 * @public
 */
export type TaskField = (typeof TaskField)[keyof typeof TaskField];

/**
 * @public
 * @enum
 */
export const Connectivity = {
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED",
} as const;
/**
 * @public
 */
export type Connectivity = (typeof Connectivity)[keyof typeof Connectivity];

/**
 * @public
 * @enum
 */
export const HealthStatus = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type HealthStatus = (typeof HealthStatus)[keyof typeof HealthStatus];

/**
 * @public
 * @enum
 */
export const ManagedAgentName = {
  ExecuteCommandAgent: "ExecuteCommandAgent",
} as const;
/**
 * @public
 */
export type ManagedAgentName = (typeof ManagedAgentName)[keyof typeof ManagedAgentName];

/**
 * @public
 * @enum
 */
export const TaskStopCode = {
  ESSENTIAL_CONTAINER_EXITED: "EssentialContainerExited",
  SERVICE_SCHEDULER_INITIATED: "ServiceSchedulerInitiated",
  SPOT_INTERRUPTION: "SpotInterruption",
  TASK_FAILED_TO_START: "TaskFailedToStart",
  TERMINATION_NOTICE: "TerminationNotice",
  USER_INITIATED: "UserInitiated",
} as const;
/**
 * @public
 */
export type TaskStopCode = (typeof TaskStopCode)[keyof typeof TaskStopCode];

/**
 * @public
 * @enum
 */
export const TaskSetField = {
  TAGS: "TAGS",
} as const;
/**
 * @public
 */
export type TaskSetField = (typeof TaskSetField)[keyof typeof TaskSetField];

/**
 * @public
 * @enum
 */
export const ContainerInstanceStatus = {
  ACTIVE: "ACTIVE",
  DEREGISTERING: "DEREGISTERING",
  DRAINING: "DRAINING",
  REGISTERING: "REGISTERING",
  REGISTRATION_FAILED: "REGISTRATION_FAILED",
} as const;
/**
 * @public
 */
export type ContainerInstanceStatus = (typeof ContainerInstanceStatus)[keyof typeof ContainerInstanceStatus];

/**
 * @public
 * @enum
 */
export const TaskDefinitionFamilyStatus = {
  ACTIVE: "ACTIVE",
  ALL: "ALL",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type TaskDefinitionFamilyStatus = (typeof TaskDefinitionFamilyStatus)[keyof typeof TaskDefinitionFamilyStatus];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASC: "ASC",
  DESC: "DESC",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const DesiredStatus = {
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type DesiredStatus = (typeof DesiredStatus)[keyof typeof DesiredStatus];

/**
 * @public
 * @enum
 */
export const PlatformDeviceType = {
  GPU: "GPU",
} as const;
/**
 * @public
 */
export type PlatformDeviceType = (typeof PlatformDeviceType)[keyof typeof PlatformDeviceType];

/**
 * @public
 * @enum
 */
export const StopServiceDeploymentStopType = {
  ABORT: "ABORT",
  ROLLBACK: "ROLLBACK",
} as const;
/**
 * @public
 */
export type StopServiceDeploymentStopType =
  (typeof StopServiceDeploymentStopType)[keyof typeof StopServiceDeploymentStopType];
