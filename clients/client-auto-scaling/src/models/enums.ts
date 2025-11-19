// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AcceleratorManufacturer = {
  AMAZON_WEB_SERVICES: "amazon-web-services",
  AMD: "amd",
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
  K80: "k80",
  M60: "m60",
  RADEON_PRO_V520: "radeon-pro-v520",
  T4: "t4",
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
export const ScalingActivityStatusCode = {
  Cancelled: "Cancelled",
  Failed: "Failed",
  InProgress: "InProgress",
  MidLifecycleAction: "MidLifecycleAction",
  PendingSpotBidPlacement: "PendingSpotBidPlacement",
  PreInService: "PreInService",
  Successful: "Successful",
  WaitingForConnectionDraining: "WaitingForConnectionDraining",
  WaitingForELBConnectionDraining: "WaitingForELBConnectionDraining",
  WaitingForInstanceId: "WaitingForInstanceId",
  WaitingForInstanceWarmup: "WaitingForInstanceWarmup",
  WaitingForSpotInstanceId: "WaitingForSpotInstanceId",
  WaitingForSpotInstanceRequestId: "WaitingForSpotInstanceRequestId",
} as const;
/**
 * @public
 */
export type ScalingActivityStatusCode = (typeof ScalingActivityStatusCode)[keyof typeof ScalingActivityStatusCode];

/**
 * @public
 * @enum
 */
export const CapacityDistributionStrategy = {
  BALANCED_BEST_EFFORT: "balanced-best-effort",
  BALANCED_ONLY: "balanced-only",
} as const;
/**
 * @public
 */
export type CapacityDistributionStrategy =
  (typeof CapacityDistributionStrategy)[keyof typeof CapacityDistributionStrategy];

/**
 * @public
 * @enum
 */
export const ImpairedZoneHealthCheckBehavior = {
  IgnoreUnhealthy: "IgnoreUnhealthy",
  ReplaceUnhealthy: "ReplaceUnhealthy",
} as const;
/**
 * @public
 */
export type ImpairedZoneHealthCheckBehavior =
  (typeof ImpairedZoneHealthCheckBehavior)[keyof typeof ImpairedZoneHealthCheckBehavior];

/**
 * @public
 * @enum
 */
export const CapacityReservationPreference = {
  CapacityReservationsFirst: "capacity-reservations-first",
  CapacityReservationsOnly: "capacity-reservations-only",
  Default: "default",
  None: "none",
} as const;
/**
 * @public
 */
export type CapacityReservationPreference =
  (typeof CapacityReservationPreference)[keyof typeof CapacityReservationPreference];

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
  APPLE: "apple",
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
export const InstanceMetadataEndpointState = {
  Disabled: "disabled",
  Enabled: "enabled",
} as const;
/**
 * @public
 */
export type InstanceMetadataEndpointState =
  (typeof InstanceMetadataEndpointState)[keyof typeof InstanceMetadataEndpointState];

/**
 * @public
 * @enum
 */
export const InstanceMetadataHttpTokensState = {
  Optional: "optional",
  Required: "required",
} as const;
/**
 * @public
 */
export type InstanceMetadataHttpTokensState =
  (typeof InstanceMetadataHttpTokensState)[keyof typeof InstanceMetadataHttpTokensState];

/**
 * @public
 * @enum
 */
export const LifecycleState = {
  DETACHED: "Detached",
  DETACHING: "Detaching",
  ENTERING_STANDBY: "EnteringStandby",
  IN_SERVICE: "InService",
  PENDING: "Pending",
  PENDING_PROCEED: "Pending:Proceed",
  PENDING_WAIT: "Pending:Wait",
  QUARANTINED: "Quarantined",
  STANDBY: "Standby",
  TERMINATED: "Terminated",
  TERMINATING: "Terminating",
  TERMINATING_PROCEED: "Terminating:Proceed",
  TERMINATING_WAIT: "Terminating:Wait",
  WARMED_HIBERNATED: "Warmed:Hibernated",
  WARMED_PENDING: "Warmed:Pending",
  WARMED_PENDING_PROCEED: "Warmed:Pending:Proceed",
  WARMED_PENDING_WAIT: "Warmed:Pending:Wait",
  WARMED_RUNNING: "Warmed:Running",
  WARMED_STOPPED: "Warmed:Stopped",
  WARMED_TERMINATED: "Warmed:Terminated",
  WARMED_TERMINATING: "Warmed:Terminating",
  WARMED_TERMINATING_PROCEED: "Warmed:Terminating:Proceed",
  WARMED_TERMINATING_WAIT: "Warmed:Terminating:Wait",
} as const;
/**
 * @public
 */
export type LifecycleState = (typeof LifecycleState)[keyof typeof LifecycleState];

/**
 * @public
 * @enum
 */
export const WarmPoolState = {
  Hibernated: "Hibernated",
  Running: "Running",
  Stopped: "Stopped",
} as const;
/**
 * @public
 */
export type WarmPoolState = (typeof WarmPoolState)[keyof typeof WarmPoolState];

/**
 * @public
 * @enum
 */
export const WarmPoolStatus = {
  PendingDelete: "PendingDelete",
} as const;
/**
 * @public
 */
export type WarmPoolStatus = (typeof WarmPoolStatus)[keyof typeof WarmPoolStatus];

/**
 * @public
 * @enum
 */
export const ScaleInProtectedInstances = {
  Ignore: "Ignore",
  Refresh: "Refresh",
  Wait: "Wait",
} as const;
/**
 * @public
 */
export type ScaleInProtectedInstances = (typeof ScaleInProtectedInstances)[keyof typeof ScaleInProtectedInstances];

/**
 * @public
 * @enum
 */
export const StandbyInstances = {
  Ignore: "Ignore",
  Terminate: "Terminate",
  Wait: "Wait",
} as const;
/**
 * @public
 */
export type StandbyInstances = (typeof StandbyInstances)[keyof typeof StandbyInstances];

/**
 * @public
 * @enum
 */
export const InstanceRefreshStatus = {
  Baking: "Baking",
  Cancelled: "Cancelled",
  Cancelling: "Cancelling",
  Failed: "Failed",
  InProgress: "InProgress",
  Pending: "Pending",
  RollbackFailed: "RollbackFailed",
  RollbackInProgress: "RollbackInProgress",
  RollbackSuccessful: "RollbackSuccessful",
  Successful: "Successful",
} as const;
/**
 * @public
 */
export type InstanceRefreshStatus = (typeof InstanceRefreshStatus)[keyof typeof InstanceRefreshStatus];

/**
 * @public
 * @enum
 */
export const PredictiveScalingMaxCapacityBreachBehavior = {
  HonorMaxCapacity: "HonorMaxCapacity",
  IncreaseMaxCapacity: "IncreaseMaxCapacity",
} as const;
/**
 * @public
 */
export type PredictiveScalingMaxCapacityBreachBehavior =
  (typeof PredictiveScalingMaxCapacityBreachBehavior)[keyof typeof PredictiveScalingMaxCapacityBreachBehavior];

/**
 * @public
 * @enum
 */
export const PredefinedLoadMetricType = {
  ALBTargetGroupRequestCount: "ALBTargetGroupRequestCount",
  ASGTotalCPUUtilization: "ASGTotalCPUUtilization",
  ASGTotalNetworkIn: "ASGTotalNetworkIn",
  ASGTotalNetworkOut: "ASGTotalNetworkOut",
} as const;
/**
 * @public
 */
export type PredefinedLoadMetricType = (typeof PredefinedLoadMetricType)[keyof typeof PredefinedLoadMetricType];

/**
 * @public
 * @enum
 */
export const PredefinedMetricPairType = {
  ALBRequestCount: "ALBRequestCount",
  ASGCPUUtilization: "ASGCPUUtilization",
  ASGNetworkIn: "ASGNetworkIn",
  ASGNetworkOut: "ASGNetworkOut",
} as const;
/**
 * @public
 */
export type PredefinedMetricPairType = (typeof PredefinedMetricPairType)[keyof typeof PredefinedMetricPairType];

/**
 * @public
 * @enum
 */
export const PredefinedScalingMetricType = {
  ALBRequestCountPerTarget: "ALBRequestCountPerTarget",
  ASGAverageCPUUtilization: "ASGAverageCPUUtilization",
  ASGAverageNetworkIn: "ASGAverageNetworkIn",
  ASGAverageNetworkOut: "ASGAverageNetworkOut",
} as const;
/**
 * @public
 */
export type PredefinedScalingMetricType =
  (typeof PredefinedScalingMetricType)[keyof typeof PredefinedScalingMetricType];

/**
 * @public
 * @enum
 */
export const PredictiveScalingMode = {
  ForecastAndScale: "ForecastAndScale",
  ForecastOnly: "ForecastOnly",
} as const;
/**
 * @public
 */
export type PredictiveScalingMode = (typeof PredictiveScalingMode)[keyof typeof PredictiveScalingMode];

/**
 * @public
 * @enum
 */
export const MetricStatistic = {
  Average: "Average",
  Maximum: "Maximum",
  Minimum: "Minimum",
  SampleCount: "SampleCount",
  Sum: "Sum",
} as const;
/**
 * @public
 */
export type MetricStatistic = (typeof MetricStatistic)[keyof typeof MetricStatistic];

/**
 * @public
 * @enum
 */
export const MetricType = {
  ALBRequestCountPerTarget: "ALBRequestCountPerTarget",
  ASGAverageCPUUtilization: "ASGAverageCPUUtilization",
  ASGAverageNetworkIn: "ASGAverageNetworkIn",
  ASGAverageNetworkOut: "ASGAverageNetworkOut",
} as const;
/**
 * @public
 */
export type MetricType = (typeof MetricType)[keyof typeof MetricType];

/**
 * @public
 * @enum
 */
export const RetryStrategy = {
  NONE: "none",
  RETRY_WITH_GROUP_CONFIGURATION: "retry-with-group-configuration",
} as const;
/**
 * @public
 */
export type RetryStrategy = (typeof RetryStrategy)[keyof typeof RetryStrategy];

/**
 * @public
 * @enum
 */
export const RefreshStrategy = {
  Rolling: "Rolling",
} as const;
/**
 * @public
 */
export type RefreshStrategy = (typeof RefreshStrategy)[keyof typeof RefreshStrategy];
