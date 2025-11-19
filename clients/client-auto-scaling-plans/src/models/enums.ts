// smithy-typescript generated code
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
export const LoadMetricType = {
  ALBTargetGroupRequestCount: "ALBTargetGroupRequestCount",
  ASGTotalCPUUtilization: "ASGTotalCPUUtilization",
  ASGTotalNetworkIn: "ASGTotalNetworkIn",
  ASGTotalNetworkOut: "ASGTotalNetworkOut",
} as const;
/**
 * @public
 */
export type LoadMetricType = (typeof LoadMetricType)[keyof typeof LoadMetricType];

/**
 * @public
 * @enum
 */
export const PredictiveScalingMaxCapacityBehavior = {
  SetForecastCapacityToMaxCapacity: "SetForecastCapacityToMaxCapacity",
  SetMaxCapacityAboveForecastCapacity: "SetMaxCapacityAboveForecastCapacity",
  SetMaxCapacityToForecastCapacity: "SetMaxCapacityToForecastCapacity",
} as const;
/**
 * @public
 */
export type PredictiveScalingMaxCapacityBehavior =
  (typeof PredictiveScalingMaxCapacityBehavior)[keyof typeof PredictiveScalingMaxCapacityBehavior];

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
export const ScalableDimension = {
  AutoScalingGroupDesiredCapacity: "autoscaling:autoScalingGroup:DesiredCapacity",
  DynamoDBIndexReadCapacityUnits: "dynamodb:index:ReadCapacityUnits",
  DynamoDBIndexWriteCapacityUnits: "dynamodb:index:WriteCapacityUnits",
  DynamoDBTableReadCapacityUnits: "dynamodb:table:ReadCapacityUnits",
  DynamoDBTableWriteCapacityUnits: "dynamodb:table:WriteCapacityUnits",
  EC2SpotFleetRequestTargetCapacity: "ec2:spot-fleet-request:TargetCapacity",
  ECSServiceDesiredCount: "ecs:service:DesiredCount",
  RDSClusterReadReplicaCount: "rds:cluster:ReadReplicaCount",
} as const;
/**
 * @public
 */
export type ScalableDimension = (typeof ScalableDimension)[keyof typeof ScalableDimension];

/**
 * @public
 * @enum
 */
export const ScalingPolicyUpdateBehavior = {
  KeepExternalPolicies: "KeepExternalPolicies",
  ReplaceExternalPolicies: "ReplaceExternalPolicies",
} as const;
/**
 * @public
 */
export type ScalingPolicyUpdateBehavior =
  (typeof ScalingPolicyUpdateBehavior)[keyof typeof ScalingPolicyUpdateBehavior];

/**
 * @public
 * @enum
 */
export const ServiceNamespace = {
  AUTOSCALING: "autoscaling",
  DYNAMODB: "dynamodb",
  EC2: "ec2",
  ECS: "ecs",
  RDS: "rds",
} as const;
/**
 * @public
 */
export type ServiceNamespace = (typeof ServiceNamespace)[keyof typeof ServiceNamespace];

/**
 * @public
 * @enum
 */
export const ScalingMetricType = {
  ALBRequestCountPerTarget: "ALBRequestCountPerTarget",
  ASGAverageCPUUtilization: "ASGAverageCPUUtilization",
  ASGAverageNetworkIn: "ASGAverageNetworkIn",
  ASGAverageNetworkOut: "ASGAverageNetworkOut",
  DynamoDBReadCapacityUtilization: "DynamoDBReadCapacityUtilization",
  DynamoDBWriteCapacityUtilization: "DynamoDBWriteCapacityUtilization",
  EC2SpotFleetRequestAverageCPUUtilization: "EC2SpotFleetRequestAverageCPUUtilization",
  EC2SpotFleetRequestAverageNetworkIn: "EC2SpotFleetRequestAverageNetworkIn",
  EC2SpotFleetRequestAverageNetworkOut: "EC2SpotFleetRequestAverageNetworkOut",
  ECSServiceAverageCPUUtilization: "ECSServiceAverageCPUUtilization",
  ECSServiceAverageMemoryUtilization: "ECSServiceAverageMemoryUtilization",
  RDSReaderAverageCPUUtilization: "RDSReaderAverageCPUUtilization",
  RDSReaderAverageDatabaseConnections: "RDSReaderAverageDatabaseConnections",
} as const;
/**
 * @public
 */
export type ScalingMetricType = (typeof ScalingMetricType)[keyof typeof ScalingMetricType];

/**
 * @public
 * @enum
 */
export const PolicyType = {
  TargetTrackingScaling: "TargetTrackingScaling",
} as const;
/**
 * @public
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];

/**
 * @public
 * @enum
 */
export const ScalingStatusCode = {
  Active: "Active",
  Inactive: "Inactive",
  PartiallyActive: "PartiallyActive",
} as const;
/**
 * @public
 */
export type ScalingStatusCode = (typeof ScalingStatusCode)[keyof typeof ScalingStatusCode];

/**
 * @public
 * @enum
 */
export const ScalingPlanStatusCode = {
  Active: "Active",
  ActiveWithProblems: "ActiveWithProblems",
  CreationFailed: "CreationFailed",
  CreationInProgress: "CreationInProgress",
  DeletionFailed: "DeletionFailed",
  DeletionInProgress: "DeletionInProgress",
  UpdateFailed: "UpdateFailed",
  UpdateInProgress: "UpdateInProgress",
} as const;
/**
 * @public
 */
export type ScalingPlanStatusCode = (typeof ScalingPlanStatusCode)[keyof typeof ScalingPlanStatusCode];

/**
 * @public
 * @enum
 */
export const ForecastDataType = {
  CapacityForecast: "CapacityForecast",
  LoadForecast: "LoadForecast",
  ScheduledActionMaxCapacity: "ScheduledActionMaxCapacity",
  ScheduledActionMinCapacity: "ScheduledActionMinCapacity",
} as const;
/**
 * @public
 */
export type ForecastDataType = (typeof ForecastDataType)[keyof typeof ForecastDataType];
