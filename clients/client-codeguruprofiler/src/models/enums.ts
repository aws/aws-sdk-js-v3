// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ActionGroup = {
  /**
   * Permission group type for Agent APIs - ConfigureAgent, PostAgentProfile
   */
  AGENT_PERMISSIONS: "agentPermissions",
} as const;
/**
 * @public
 */
export type ActionGroup = (typeof ActionGroup)[keyof typeof ActionGroup];

/**
 * @public
 * @enum
 */
export const EventPublisher = {
  /**
   * Notifications for Anomaly Detection
   */
  ANOMALY_DETECTION: "AnomalyDetection",
} as const;
/**
 * @public
 */
export type EventPublisher = (typeof EventPublisher)[keyof typeof EventPublisher];

/**
 * @public
 * @enum
 */
export const AgentParameterField = {
  /**
   * Maximum stack depth to be captured by the CodeGuru Profiler.
   */
  MAX_STACK_DEPTH: "MaxStackDepth",
  /**
   * Percentage of memory to be used by CodeGuru profiler. Minimum of 30MB is required for the agent.
   */
  MEMORY_USAGE_LIMIT_PERCENT: "MemoryUsageLimitPercent",
  /**
   * Minimum time in milliseconds between sending reports.
   */
  MINIMUM_TIME_FOR_REPORTING_IN_MILLISECONDS: "MinimumTimeForReportingInMilliseconds",
  /**
   * Reporting interval in milliseconds used to report profiles.
   */
  REPORTING_INTERVAL_IN_MILLISECONDS: "ReportingIntervalInMilliseconds",
  /**
   * Sampling interval in milliseconds used to sample profiles.
   */
  SAMPLING_INTERVAL_IN_MILLISECONDS: "SamplingIntervalInMilliseconds",
} as const;
/**
 * @public
 */
export type AgentParameterField = (typeof AgentParameterField)[keyof typeof AgentParameterField];

/**
 * @public
 * @enum
 */
export const AggregationPeriod = {
  /**
   * Period of one day.
   */
  P1D: "P1D",
  /**
   * Period of one hour.
   */
  PT1H: "PT1H",
  /**
   * Period of five minutes.
   */
  PT5M: "PT5M",
} as const;
/**
 * @public
 */
export type AggregationPeriod = (typeof AggregationPeriod)[keyof typeof AggregationPeriod];

/**
 * @public
 * @enum
 */
export const FeedbackType = {
  /**
   * Profiler recommendation flagged as not useful.
   */
  Negative: "Negative",
  /**
   * Profiler recommendation flagged as useful.
   */
  Positive: "Positive",
} as const;
/**
 * @public
 */
export type FeedbackType = (typeof FeedbackType)[keyof typeof FeedbackType];

/**
 * @public
 * @enum
 */
export const MetricType = {
  /**
   * Metric value aggregated for all instances of a frame name in a profile relative to the root frame.
   */
  AggregatedRelativeTotalTime: "AggregatedRelativeTotalTime",
} as const;
/**
 * @public
 */
export type MetricType = (typeof MetricType)[keyof typeof MetricType];

/**
 * @public
 * @enum
 */
export const MetadataField = {
  /**
   * Unique identifier for the agent instance.
   */
  AGENT_ID: "AgentId",
  /**
   * AWS requestId of the Lambda invocation.
   */
  AWS_REQUEST_ID: "AwsRequestId",
  /**
   * Compute platform on which agent is running.
   */
  COMPUTE_PLATFORM: "ComputePlatform",
  /**
   * Execution environment on which Lambda function is running.
   */
  EXECUTION_ENVIRONMENT: "ExecutionEnvironment",
  /**
   * Function ARN that's used to invoke the Lambda function.
   */
  LAMBDA_FUNCTION_ARN: "LambdaFunctionArn",
  /**
   * Memory allocated for the Lambda function.
   */
  LAMBDA_MEMORY_LIMIT_IN_MB: "LambdaMemoryLimitInMB",
  /**
   * Time in milliseconds for the previous Lambda invocation.
   */
  LAMBDA_PREVIOUS_EXECUTION_TIME_IN_MILLISECONDS: "LambdaPreviousExecutionTimeInMilliseconds",
  /**
   * Time in milliseconds left before the execution times out.
   */
  LAMBDA_REMAINING_TIME_IN_MILLISECONDS: "LambdaRemainingTimeInMilliseconds",
  /**
   * Time in milliseconds between two invocations of the Lambda function.
   */
  LAMBDA_TIME_GAP_BETWEEN_INVOKES_IN_MILLISECONDS: "LambdaTimeGapBetweenInvokesInMilliseconds",
} as const;
/**
 * @public
 */
export type MetadataField = (typeof MetadataField)[keyof typeof MetadataField];

/**
 * @public
 * @enum
 */
export const ComputePlatform = {
  /**
   * Compute platform meant to used for AWS Lambda.
   */
  AWSLAMBDA: "AWSLambda",
  /**
   * Compute platform meant to used for all usecases (like EC2, Fargate, physical servers etc.) but AWS Lambda.
   */
  DEFAULT: "Default",
} as const;
/**
 * @public
 */
export type ComputePlatform = (typeof ComputePlatform)[keyof typeof ComputePlatform];

/**
 * @public
 * @enum
 */
export const OrderBy = {
  /**
   * Order by timestamp in ascending order.
   */
  TIMESTAMP_ASCENDING: "TimestampAscending",
  /**
   * Order by timestamp in descending order.
   */
  TIMESTAMP_DESCENDING: "TimestampDescending",
} as const;
/**
 * @public
 */
export type OrderBy = (typeof OrderBy)[keyof typeof OrderBy];
