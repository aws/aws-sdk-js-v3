// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AdjustmentType = {
  ChangeInCapacity: "ChangeInCapacity",
  ExactCapacity: "ExactCapacity",
  PercentChangeInCapacity: "PercentChangeInCapacity",
} as const;
/**
 * @public
 */
export type AdjustmentType = (typeof AdjustmentType)[keyof typeof AdjustmentType];

/**
 * @public
 * @enum
 */
export const ScalableDimension = {
  AppstreamFleetDesiredCapacity: "appstream:fleet:DesiredCapacity",
  CassandraTableReadCapacityUnits: "cassandra:table:ReadCapacityUnits",
  CassandraTableWriteCapacityUnits: "cassandra:table:WriteCapacityUnits",
  ComprehendDocClassifierEndpointInferenceUnits: "comprehend:document-classifier-endpoint:DesiredInferenceUnits",
  ComprehendEntityRecognizerEndpointInferenceUnits: "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits",
  CustomResourceScalableDimension: "custom-resource:ResourceType:Property",
  DynamoDBIndexReadCapacityUnits: "dynamodb:index:ReadCapacityUnits",
  DynamoDBIndexWriteCapacityUnits: "dynamodb:index:WriteCapacityUnits",
  DynamoDBTableReadCapacityUnits: "dynamodb:table:ReadCapacityUnits",
  DynamoDBTableWriteCapacityUnits: "dynamodb:table:WriteCapacityUnits",
  EC2SpotFleetRequestTargetCapacity: "ec2:spot-fleet-request:TargetCapacity",
  ECSServiceDesiredCount: "ecs:service:DesiredCount",
  EMRInstanceGroupInstanceCount: "elasticmapreduce:instancegroup:InstanceCount",
  ElastiCacheCacheClusterNodes: "elasticache:cache-cluster:Nodes",
  ElastiCacheReplicationGroupNodeGroups: "elasticache:replication-group:NodeGroups",
  ElastiCacheReplicationGroupReplicas: "elasticache:replication-group:Replicas",
  KafkaBrokerStorageVolumeSize: "kafka:broker-storage:VolumeSize",
  LambdaFunctionProvisionedConcurrency: "lambda:function:ProvisionedConcurrency",
  NeptuneClusterReadReplicaCount: "neptune:cluster:ReadReplicaCount",
  RDSClusterReadReplicaCount: "rds:cluster:ReadReplicaCount",
  SageMakerInferenceComponentDesiredCopyCount: "sagemaker:inference-component:DesiredCopyCount",
  SageMakerVariantDesiredInstanceCount: "sagemaker:variant:DesiredInstanceCount",
  SageMakerVariantDesiredProvisionedConcurrency: "sagemaker:variant:DesiredProvisionedConcurrency",
  WorkSpacesWorkSpacesPoolDesiredUserSessions: "workspaces:workspacespool:DesiredUserSessions",
} as const;
/**
 * @public
 */
export type ScalableDimension = (typeof ScalableDimension)[keyof typeof ScalableDimension];

/**
 * @public
 * @enum
 */
export const ServiceNamespace = {
  APPSTREAM: "appstream",
  CASSANDRA: "cassandra",
  COMPREHEND: "comprehend",
  CUSTOM_RESOURCE: "custom-resource",
  DYNAMODB: "dynamodb",
  EC2: "ec2",
  ECS: "ecs",
  ELASTICACHE: "elasticache",
  EMR: "elasticmapreduce",
  KAFKA: "kafka",
  LAMBDA: "lambda",
  NEPTUNE: "neptune",
  RDS: "rds",
  SAGEMAKER: "sagemaker",
  WORKSPACES: "workspaces",
} as const;
/**
 * @public
 */
export type ServiceNamespace = (typeof ServiceNamespace)[keyof typeof ServiceNamespace];

/**
 * @public
 * @enum
 */
export const ScalingActivityStatusCode = {
  Failed: "Failed",
  InProgress: "InProgress",
  Overridden: "Overridden",
  Pending: "Pending",
  Successful: "Successful",
  Unfulfilled: "Unfulfilled",
} as const;
/**
 * @public
 */
export type ScalingActivityStatusCode = (typeof ScalingActivityStatusCode)[keyof typeof ScalingActivityStatusCode];

/**
 * @public
 * @enum
 */
export const PolicyType = {
  PredictiveScaling: "PredictiveScaling",
  StepScaling: "StepScaling",
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
export const MetricAggregationType = {
  Average: "Average",
  Maximum: "Maximum",
  Minimum: "Minimum",
} as const;
/**
 * @public
 */
export type MetricAggregationType = (typeof MetricAggregationType)[keyof typeof MetricAggregationType];

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
  AppStreamAverageCapacityUtilization: "AppStreamAverageCapacityUtilization",
  CassandraReadCapacityUtilization: "CassandraReadCapacityUtilization",
  CassandraWriteCapacityUtilization: "CassandraWriteCapacityUtilization",
  ComprehendInferenceUtilization: "ComprehendInferenceUtilization",
  DynamoDBReadCapacityUtilization: "DynamoDBReadCapacityUtilization",
  DynamoDBWriteCapacityUtilization: "DynamoDBWriteCapacityUtilization",
  EC2SpotFleetRequestAverageCPUUtilization: "EC2SpotFleetRequestAverageCPUUtilization",
  EC2SpotFleetRequestAverageNetworkIn: "EC2SpotFleetRequestAverageNetworkIn",
  EC2SpotFleetRequestAverageNetworkOut: "EC2SpotFleetRequestAverageNetworkOut",
  ECSServiceAverageCPUUtilization: "ECSServiceAverageCPUUtilization",
  ECSServiceAverageMemoryUtilization: "ECSServiceAverageMemoryUtilization",
  ElastiCacheDatabaseCapacityUsageCountedForEvictPercentage:
    "ElastiCacheDatabaseCapacityUsageCountedForEvictPercentage",
  ElastiCacheDatabaseMemoryUsageCountedForEvictPercentage: "ElastiCacheDatabaseMemoryUsageCountedForEvictPercentage",
  ElastiCacheDatabaseMemoryUsagePercentage: "ElastiCacheDatabaseMemoryUsagePercentage",
  ElastiCacheEngineCPUUtilization: "ElastiCacheEngineCPUUtilization",
  ElastiCachePrimaryEngineCPUUtilization: "ElastiCachePrimaryEngineCPUUtilization",
  ElastiCacheReplicaEngineCPUUtilization: "ElastiCacheReplicaEngineCPUUtilization",
  KafkaBrokerStorageUtilization: "KafkaBrokerStorageUtilization",
  LambdaProvisionedConcurrencyUtilization: "LambdaProvisionedConcurrencyUtilization",
  NeptuneReaderAverageCPUUtilization: "NeptuneReaderAverageCPUUtilization",
  RDSReaderAverageCPUUtilization: "RDSReaderAverageCPUUtilization",
  RDSReaderAverageDatabaseConnections: "RDSReaderAverageDatabaseConnections",
  SageMakerInferenceComponentConcurrentRequestsPerCopyHighResolution:
    "SageMakerInferenceComponentConcurrentRequestsPerCopyHighResolution",
  SageMakerInferenceComponentInvocationsPerCopy: "SageMakerInferenceComponentInvocationsPerCopy",
  SageMakerVariantConcurrentRequestsPerModelHighResolution: "SageMakerVariantConcurrentRequestsPerModelHighResolution",
  SageMakerVariantInvocationsPerInstance: "SageMakerVariantInvocationsPerInstance",
  SageMakerVariantProvisionedConcurrencyUtilization: "SageMakerVariantProvisionedConcurrencyUtilization",
  WorkSpacesAverageUserSessionsCapacityUtilization: "WorkSpacesAverageUserSessionsCapacityUtilization",
} as const;
/**
 * @public
 */
export type MetricType = (typeof MetricType)[keyof typeof MetricType];
