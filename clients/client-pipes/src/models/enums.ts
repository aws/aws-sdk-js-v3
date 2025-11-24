// smithy-typescript generated code
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
export const BatchResourceRequirementType = {
  GPU: "GPU",
  MEMORY: "MEMORY",
  VCPU: "VCPU",
} as const;
/**
 * @public
 */
export type BatchResourceRequirementType =
  (typeof BatchResourceRequirementType)[keyof typeof BatchResourceRequirementType];

/**
 * @public
 * @enum
 */
export const BatchJobDependencyType = {
  N_TO_N: "N_TO_N",
  SEQUENTIAL: "SEQUENTIAL",
} as const;
/**
 * @public
 */
export type BatchJobDependencyType = (typeof BatchJobDependencyType)[keyof typeof BatchJobDependencyType];

/**
 * @public
 * @enum
 */
export const RequestedPipeState = {
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type RequestedPipeState = (typeof RequestedPipeState)[keyof typeof RequestedPipeState];

/**
 * @public
 * @enum
 */
export const IncludeExecutionDataOption = {
  ALL: "ALL",
} as const;
/**
 * @public
 */
export type IncludeExecutionDataOption = (typeof IncludeExecutionDataOption)[keyof typeof IncludeExecutionDataOption];

/**
 * @public
 * @enum
 */
export const LogLevel = {
  ERROR: "ERROR",
  INFO: "INFO",
  OFF: "OFF",
  TRACE: "TRACE",
} as const;
/**
 * @public
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * @public
 * @enum
 */
export const S3OutputFormat = {
  JSON: "json",
  PLAIN: "plain",
  W3C: "w3c",
} as const;
/**
 * @public
 */
export type S3OutputFormat = (typeof S3OutputFormat)[keyof typeof S3OutputFormat];

/**
 * @public
 * @enum
 */
export const OnPartialBatchItemFailureStreams = {
  AUTOMATIC_BISECT: "AUTOMATIC_BISECT",
} as const;
/**
 * @public
 */
export type OnPartialBatchItemFailureStreams =
  (typeof OnPartialBatchItemFailureStreams)[keyof typeof OnPartialBatchItemFailureStreams];

/**
 * @public
 * @enum
 */
export const DynamoDBStreamStartPosition = {
  LATEST: "LATEST",
  TRIM_HORIZON: "TRIM_HORIZON",
} as const;
/**
 * @public
 */
export type DynamoDBStreamStartPosition =
  (typeof DynamoDBStreamStartPosition)[keyof typeof DynamoDBStreamStartPosition];

/**
 * @public
 * @enum
 */
export const KinesisStreamStartPosition = {
  AT_TIMESTAMP: "AT_TIMESTAMP",
  LATEST: "LATEST",
  TRIM_HORIZON: "TRIM_HORIZON",
} as const;
/**
 * @public
 */
export type KinesisStreamStartPosition = (typeof KinesisStreamStartPosition)[keyof typeof KinesisStreamStartPosition];

/**
 * @public
 * @enum
 */
export const MSKStartPosition = {
  LATEST: "LATEST",
  TRIM_HORIZON: "TRIM_HORIZON",
} as const;
/**
 * @public
 */
export type MSKStartPosition = (typeof MSKStartPosition)[keyof typeof MSKStartPosition];

/**
 * @public
 * @enum
 */
export const SelfManagedKafkaStartPosition = {
  LATEST: "LATEST",
  TRIM_HORIZON: "TRIM_HORIZON",
} as const;
/**
 * @public
 */
export type SelfManagedKafkaStartPosition =
  (typeof SelfManagedKafkaStartPosition)[keyof typeof SelfManagedKafkaStartPosition];

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
export const EcsEnvironmentFileType = {
  s3: "s3",
} as const;
/**
 * @public
 */
export type EcsEnvironmentFileType = (typeof EcsEnvironmentFileType)[keyof typeof EcsEnvironmentFileType];

/**
 * @public
 * @enum
 */
export const EcsResourceRequirementType = {
  GPU: "GPU",
  InferenceAccelerator: "InferenceAccelerator",
} as const;
/**
 * @public
 */
export type EcsResourceRequirementType = (typeof EcsResourceRequirementType)[keyof typeof EcsResourceRequirementType];

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
export const PipeTargetInvocationType = {
  FIRE_AND_FORGET: "FIRE_AND_FORGET",
  REQUEST_RESPONSE: "REQUEST_RESPONSE",
} as const;
/**
 * @public
 */
export type PipeTargetInvocationType = (typeof PipeTargetInvocationType)[keyof typeof PipeTargetInvocationType];

/**
 * @public
 * @enum
 */
export const DimensionValueType = {
  VARCHAR: "VARCHAR",
} as const;
/**
 * @public
 */
export type DimensionValueType = (typeof DimensionValueType)[keyof typeof DimensionValueType];

/**
 * @public
 * @enum
 */
export const EpochTimeUnit = {
  MICROSECONDS: "MICROSECONDS",
  MILLISECONDS: "MILLISECONDS",
  NANOSECONDS: "NANOSECONDS",
  SECONDS: "SECONDS",
} as const;
/**
 * @public
 */
export type EpochTimeUnit = (typeof EpochTimeUnit)[keyof typeof EpochTimeUnit];

/**
 * @public
 * @enum
 */
export const MeasureValueType = {
  BIGINT: "BIGINT",
  BOOLEAN: "BOOLEAN",
  DOUBLE: "DOUBLE",
  TIMESTAMP: "TIMESTAMP",
  VARCHAR: "VARCHAR",
} as const;
/**
 * @public
 */
export type MeasureValueType = (typeof MeasureValueType)[keyof typeof MeasureValueType];

/**
 * @public
 * @enum
 */
export const TimeFieldType = {
  EPOCH: "EPOCH",
  TIMESTAMP_FORMAT: "TIMESTAMP_FORMAT",
} as const;
/**
 * @public
 */
export type TimeFieldType = (typeof TimeFieldType)[keyof typeof TimeFieldType];

/**
 * @public
 * @enum
 */
export const PipeState = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_ROLLBACK_FAILED: "CREATE_ROLLBACK_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_ROLLBACK_FAILED: "DELETE_ROLLBACK_FAILED",
  DELETING: "DELETING",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  START_FAILED: "START_FAILED",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  STOP_FAILED: "STOP_FAILED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_ROLLBACK_FAILED: "UPDATE_ROLLBACK_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type PipeState = (typeof PipeState)[keyof typeof PipeState];

/**
 * @public
 * @enum
 */
export const RequestedPipeStateDescribeResponse = {
  DELETED: "DELETED",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type RequestedPipeStateDescribeResponse =
  (typeof RequestedPipeStateDescribeResponse)[keyof typeof RequestedPipeStateDescribeResponse];
