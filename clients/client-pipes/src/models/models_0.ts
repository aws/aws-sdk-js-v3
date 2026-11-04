// smithy-typescript generated code
import type {
  AssignPublicIp,
  BatchJobDependencyType,
  BatchResourceRequirementType,
  DimensionValueType,
  DynamoDBStreamStartPosition,
  EcsEnvironmentFileType,
  EcsResourceRequirementType,
  EpochTimeUnit,
  IncludeExecutionDataOption,
  KinesisStreamStartPosition,
  LaunchType,
  LogLevel,
  MeasureValueType,
  MSKStartPosition,
  OnPartialBatchItemFailureStreams,
  PipeState,
  PipeTargetInvocationType,
  PlacementConstraintType,
  PlacementStrategyType,
  PropagateTags,
  RequestedPipeState,
  RequestedPipeStateDescribeResponse,
  S3OutputFormat,
  SelfManagedKafkaStartPosition,
  TimeFieldType,
} from "./enums";

/**
 * This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the `awsvpc` network mode.
 *
 * @public
 */
export interface AwsVpcConfiguration {
  /**
   * Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.
   *
   * @public
   */
  Subnets: string[] | undefined;

  /**
   * Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * Specifies whether the task's elastic network interface receives a public IP address. You can specify `ENABLED` only when `LaunchType` in `EcsParameters` is set to `FARGATE`.
   *
   * @public
   */
  AssignPublicIp?: AssignPublicIp | undefined;
}

/**
 * The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job.
 *
 * @public
 */
export interface BatchArrayProperties {
  /**
   * The size of the array, if this is an array batch job.
   *
   * @public
   */
  Size?: number | undefined;
}

/**
 * The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition.
 *
 * > **Note:** Environment variables cannot start with "`Batch`". This naming convention is reserved for variables that Batch sets.
 *
 * @public
 */
export interface BatchEnvironmentVariable {
  /**
   * The name of the key-value pair. For environment variables, this is the name of the environment variable.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value of the key-value pair. For environment variables, this is the value of the environment variable.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The type and amount of a resource to assign to a container. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
 *
 * @public
 */
export interface BatchResourceRequirement {
  /**
   * The type of resource to assign to a container. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
   *
   * @public
   */
  Type: BatchResourceRequirementType | undefined;

  /**
   * The quantity of the specified resource to reserve for the container. The values vary based on the `type` specified.
   *
   * - **type="GPU"**
   *
   *   The number of physical GPUs to reserve for the container. Make sure that the number of GPUs reserved for all containers in a job doesn't exceed the number of available GPUs on the compute resource that the job is launched on.
   *
   *   > **Note:** GPUs aren't available for jobs that are running on Fargate resources.
   *
   * - **type="MEMORY"**
   *
   *   The memory hard limit (in MiB) present to the container. This parameter is supported for jobs that are running on EC2 resources. If your container attempts to exceed the memory specified, the container is terminated. This parameter maps to `Memory` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--memory` option to [docker run](https://docs.docker.com/engine/reference/run/). You must specify at least 4 MiB of memory for a job. This is required but can be specified in several places for multi-node parallel (MNP) jobs. It must be specified for each node at least once. This parameter maps to `Memory` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--memory` option to [docker run](https://docs.docker.com/engine/reference/run/).
   *
   *   > **Note:** If you're trying to maximize your resource utilization by providing your jobs as much memory as possible for a particular instance type, see [Memory management](https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html) in the *Batch User Guide*.
   *
   *   For jobs that are running on Fargate resources, then `value` is the hard limit (in MiB), and must match one of the supported values and the `VCPU` values must be one of the values supported for that memory value.
   *
   *   - **value = 512**
   *
   *     `VCPU` = 0.25
   *
   *   - **value = 1024**
   *
   *     `VCPU` = 0.25 or 0.5
   *
   *   - **value = 2048**
   *
   *     `VCPU` = 0.25, 0.5, or 1
   *
   *   - **value = 3072**
   *
   *     `VCPU` = 0.5, or 1
   *
   *   - **value = 4096**
   *
   *     `VCPU` = 0.5, 1, or 2
   *
   *   - **value = 5120, 6144, or 7168**
   *
   *     `VCPU` = 1 or 2
   *
   *   - **value = 8192**
   *
   *     `VCPU` = 1, 2, 4, or 8
   *
   *   - **value = 9216, 10240, 11264, 12288, 13312, 14336, or 15360**
   *
   *     `VCPU` = 2 or 4
   *
   *   - **value = 16384**
   *
   *     `VCPU` = 2, 4, or 8
   *
   *   - **value = 17408, 18432, 19456, 21504, 22528, 23552, 25600, 26624, 27648, 29696, or 30720**
   *
   *     `VCPU` = 4
   *
   *   - **value = 20480, 24576, or 28672**
   *
   *     `VCPU` = 4 or 8
   *
   *   - **value = 36864, 45056, 53248, or 61440**
   *
   *     `VCPU` = 8
   *
   *   - **value = 32768, 40960, 49152, or 57344**
   *
   *     `VCPU` = 8 or 16
   *
   *   - **value = 65536, 73728, 81920, 90112, 98304, 106496, 114688, or 122880**
   *
   *     `VCPU` = 16
   *
   * - **type="VCPU"**
   *
   *   The number of vCPUs reserved for the container. This parameter maps to `CpuShares` in the [Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--cpu-shares` option to [docker run](https://docs.docker.com/engine/reference/run/). Each vCPU is equivalent to 1,024 CPU shares. For EC2 resources, you must specify at least one vCPU. This is required but can be specified in several places; it must be specified for each node at least once.
   *
   *   The default for the Fargate On-Demand vCPU resource count quota is 6 vCPUs. For more information about Fargate quotas, see [Fargate quotas](https://docs.aws.amazon.com/general/latest/gr/ecs-service.html#service-quotas-fargate) in the *Amazon Web Services General Reference*.
   *
   *   For jobs that are running on Fargate resources, then `value` must match one of the supported values and the `MEMORY` values must be one of the values supported for that `VCPU` value. The supported values are 0.25, 0.5, 1, 2, 4, 8, and 16
   *
   *   - **value = 0.25**
   *
   *     `MEMORY` = 512, 1024, or 2048
   *
   *   - **value = 0.5**
   *
   *     `MEMORY` = 1024, 2048, 3072, or 4096
   *
   *   - **value = 1**
   *
   *     `MEMORY` = 2048, 3072, 4096, 5120, 6144, 7168, or 8192
   *
   *   - **value = 2**
   *
   *     `MEMORY` = 4096, 5120, 6144, 7168, 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, or 16384
   *
   *   - **value = 4**
   *
   *     `MEMORY` = 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, 16384, 17408, 18432, 19456, 20480, 21504, 22528, 23552, 24576, 25600, 26624, 27648, 28672, 29696, or 30720
   *
   *   - **value = 8**
   *
   *     `MEMORY` = 16384, 20480, 24576, 28672, 32768, 36864, 40960, 45056, 49152, 53248, 57344, or 61440
   *
   *   - **value = 16**
   *
   *     `MEMORY` = 32768, 40960, 49152, 57344, 65536, 73728, 81920, 90112, 98304, 106496, 114688, or 122880
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * The overrides that are sent to a container.
 *
 * @public
 */
export interface BatchContainerOverrides {
  /**
   * The command to send to the container that overrides the default command from the Docker image or the task definition.
   *
   * @public
   */
  Command?: string[] | undefined;

  /**
   * The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition.
   *
   * > **Note:** Environment variables cannot start with "`Batch`". This naming convention is reserved for variables that Batch sets.
   *
   * @public
   */
  Environment?: BatchEnvironmentVariable[] | undefined;

  /**
   * The instance type to use for a multi-node parallel job.
   *
   * > **Note:** This parameter isn't applicable to single-node container jobs or jobs that run on Fargate resources, and shouldn't be provided.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The type and amount of resources to assign to a container. This overrides the settings in the job definition. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
   *
   * @public
   */
  ResourceRequirements?: BatchResourceRequirement[] | undefined;
}

/**
 * An object that represents an Batch job dependency.
 *
 * @public
 */
export interface BatchJobDependency {
  /**
   * The job ID of the Batch job that's associated with this dependency.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The type of the job dependency.
   *
   * @public
   */
  Type?: BatchJobDependencyType | undefined;
}

/**
 * The retry strategy that's associated with a job. For more information, see [Automated job retries](https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html) in the *Batch User Guide*.
 *
 * @public
 */
export interface BatchRetryStrategy {
  /**
   * The number of times to move a job to the `RUNNABLE` status. If the value of `attempts` is greater than one, the job is retried on failure the same number of attempts as the value.
   *
   * @public
   */
  Attempts?: number | undefined;
}

/**
 * The details of a capacity provider strategy. To learn more, see [CapacityProviderStrategyItem](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html) in the Amazon ECS API Reference.
 *
 * @public
 */
export interface CapacityProviderStrategyItem {
  /**
   * The short name of the capacity provider.
   *
   * @public
   */
  capacityProvider: string | undefined;

  /**
   * The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied.
   *
   * @public
   */
  weight?: number | undefined;

  /**
   * The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of 0 is used.
   *
   * @public
   */
  base?: number | undefined;
}

/**
 * The Amazon CloudWatch Logs logging configuration settings for the pipe.
 *
 * @public
 */
export interface CloudwatchLogsLogDestination {
  /**
   * The Amazon Web Services Resource Name (ARN) for the CloudWatch log group to which EventBridge sends the log records.
   *
   * @public
   */
  LogGroupArn?: string | undefined;
}

/**
 * The Amazon CloudWatch Logs logging configuration settings for the pipe.
 *
 * @public
 */
export interface CloudwatchLogsLogDestinationParameters {
  /**
   * The Amazon Web Services Resource Name (ARN) for the CloudWatch log group to which EventBridge sends the log records.
   *
   * @public
   */
  LogGroupArn: string | undefined;
}

/**
 * These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations. In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence.
 *
 * @public
 */
export interface PipeEnrichmentHttpParameters {
  /**
   * The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*").
   *
   * @public
   */
  PathParameterValues?: string[] | undefined;

  /**
   * The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
   *
   * @public
   */
  HeaderParameters?: Record<string, string> | undefined;

  /**
   * The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
   *
   * @public
   */
  QueryStringParameters?: Record<string, string> | undefined;
}

/**
 * The parameters required to set up enrichment on your pipe.
 *
 * @public
 */
export interface PipeEnrichmentParameters {
  /**
   * Valid JSON text passed to the enrichment. In this case, nothing from the event itself is passed to the enrichment. For more information, see [The JavaScript Object Notation (JSON) Data Interchange Format](http://www.rfc-editor.org/rfc/rfc7159.txt).
   *
   * To remove an input template, specify an empty string.
   *
   * @public
   */
  InputTemplate?: string | undefined;

  /**
   * Contains the HTTP parameters to use when the target is a API Gateway REST endpoint or EventBridge ApiDestination.
   *
   * If you specify an API Gateway REST API or EventBridge ApiDestination as a target, you can use this parameter to specify headers, path parameters, and query string keys/values as part of your target invoking request. If you're using ApiDestinations, the corresponding Connection can also have these values configured. In case of any conflicting keys, values from the Connection take precedence.
   *
   * @public
   */
  HttpParameters?: PipeEnrichmentHttpParameters | undefined;
}

/**
 * The Amazon Data Firehose logging configuration settings for the pipe.
 *
 * @public
 */
export interface FirehoseLogDestinationParameters {
  /**
   * Specifies the Amazon Resource Name (ARN) of the Firehose delivery stream to which EventBridge delivers the pipe log records.
   *
   * @public
   */
  DeliveryStreamArn: string | undefined;
}

/**
 * The Amazon S3 logging configuration settings for the pipe.
 *
 * @public
 */
export interface S3LogDestinationParameters {
  /**
   * Specifies the name of the Amazon S3 bucket to which EventBridge delivers the log records for the pipe.
   *
   * @public
   */
  BucketName: string | undefined;

  /**
   * Specifies the Amazon Web Services account that owns the Amazon S3 bucket to which EventBridge delivers the log records for the pipe.
   *
   * @public
   */
  BucketOwner: string | undefined;

  /**
   * How EventBridge should format the log records.
   *
   * EventBridge currently only supports `json` formatting.
   *
   * @public
   */
  OutputFormat?: S3OutputFormat | undefined;

  /**
   * Specifies any prefix text with which to begin Amazon S3 log object names.
   *
   * You can use prefixes to organize the data that you store in Amazon S3 buckets. A prefix is a string of characters at the beginning of the object key name. A prefix can be any length, subject to the maximum length of the object key name (1,024 bytes). For more information, see [Organizing objects using prefixes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html) in the *Amazon Simple Storage Service User Guide*.
   *
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * Specifies the logging configuration settings for the pipe.
 *
 * When you call `UpdatePipe`, EventBridge updates the fields in the `PipeLogConfigurationParameters` object atomically as one and overrides existing values. This is by design. If you don't specify an optional field in any of the Amazon Web Services service parameters objects (`CloudwatchLogsLogDestinationParameters`, `FirehoseLogDestinationParameters`, or `S3LogDestinationParameters`), EventBridge sets that field to its system-default value during the update.
 *
 * For example, suppose when you created the pipe you specified a Firehose stream log destination. You then update the pipe to add an Amazon S3 log destination. In addition to specifying the `S3LogDestinationParameters` for the new log destination, you must also specify the fields in the `FirehoseLogDestinationParameters` object in order to retain the Firehose stream log destination.
 *
 * For more information on generating pipe log records, see [Log EventBridge Pipes](eventbridge/latest/userguide/eb-pipes-logs.html) in the *Amazon EventBridge User Guide*.
 *
 * @public
 */
export interface PipeLogConfigurationParameters {
  /**
   * The Amazon S3 logging configuration settings for the pipe.
   *
   * @public
   */
  S3LogDestination?: S3LogDestinationParameters | undefined;

  /**
   * The Amazon Data Firehose logging configuration settings for the pipe.
   *
   * @public
   */
  FirehoseLogDestination?: FirehoseLogDestinationParameters | undefined;

  /**
   * The Amazon CloudWatch Logs logging configuration settings for the pipe.
   *
   * @public
   */
  CloudwatchLogsLogDestination?: CloudwatchLogsLogDestinationParameters | undefined;

  /**
   * The level of logging detail to include. This applies to all log destinations for the pipe.
   *
   * For more information, see [Specifying EventBridge Pipes log level](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-logs.html#eb-pipes-logs-level) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  Level: LogLevel | undefined;

  /**
   * Specify `ALL` to include the execution data (specifically, the `payload`, `awsRequest`, and `awsResponse` fields) in the log messages for this pipe.
   *
   * This applies to all log destinations for the pipe.
   *
   * For more information, see [Including execution data in logs](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-logs.html#eb-pipes-logs-execution-data) in the *Amazon EventBridge User Guide*.
   *
   * By default, execution data is not included.
   *
   * @public
   */
  IncludeExecutionData?: IncludeExecutionDataOption[] | undefined;
}

/**
 * The Secrets Manager secret that stores your broker credentials.
 *
 * @public
 */
export type MQBrokerAccessCredentials =
  | MQBrokerAccessCredentials.BasicAuthMember
  | MQBrokerAccessCredentials.$UnknownMember;

/**
 * @public
 */
export namespace MQBrokerAccessCredentials {
  /**
   * The ARN of the Secrets Manager secret.
   *
   * @public
   */
  export interface BasicAuthMember {
    BasicAuth: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    BasicAuth?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    BasicAuth: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The parameters for using an Active MQ broker as a source.
 *
 * @public
 */
export interface PipeSourceActiveMQBrokerParameters {
  /**
   * The credentials needed to access the resource.
   *
   * @public
   */
  Credentials: MQBrokerAccessCredentials | undefined;

  /**
   * The name of the destination queue to consume.
   *
   * @public
   */
  QueueName: string | undefined;

  /**
   * The maximum number of records to include in each batch.
   *
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * The maximum length of a time to wait for events.
   *
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;
}

/**
 * A `DeadLetterConfig` object that contains information about a dead-letter queue configuration.
 *
 * @public
 */
export interface DeadLetterConfig {
  /**
   * The ARN of the specified target for the dead-letter queue.
   *
   * For Amazon Kinesis stream and Amazon DynamoDB stream sources, specify either an Amazon SNS topic or Amazon SQS queue ARN.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * The parameters for using a DynamoDB stream as a source.
 *
 * @public
 */
export interface PipeSourceDynamoDBStreamParameters {
  /**
   * The maximum number of records to include in each batch.
   *
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * Define the target queue to send dead-letter queue events to.
   *
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * Define how to handle item process failures. `AUTOMATIC_BISECT` halves each batch and retry each half until all the records are processed or there is one failed message left in the batch.
   *
   * @public
   */
  OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams | undefined;

  /**
   * The maximum length of a time to wait for events.
   *
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;

  /**
   * Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, EventBridge never discards old records.
   *
   * @public
   */
  MaximumRecordAgeInSeconds?: number | undefined;

  /**
   * Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.
   *
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * The number of batches to process concurrently from each shard. The default value is 1.
   *
   * @public
   */
  ParallelizationFactor?: number | undefined;

  /**
   * The position in a stream from which to start reading.
   *
   * @public
   */
  StartingPosition: DynamoDBStreamStartPosition | undefined;
}

/**
 * Filter events using an event pattern. For more information, see [Events and Event Patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) in the *Amazon EventBridge User Guide*.
 *
 * @public
 */
export interface Filter {
  /**
   * The event pattern.
   *
   * @public
   */
  Pattern?: string | undefined;
}

/**
 * The collection of event patterns used to filter events.
 *
 * To remove a filter, specify a `FilterCriteria` object with an empty array of `Filter` objects.
 *
 * For more information, see [Events and Event Patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) in the *Amazon EventBridge User Guide*.
 *
 * @public
 */
export interface FilterCriteria {
  /**
   * The event patterns.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * The parameters for using a Kinesis stream as a source.
 *
 * @public
 */
export interface PipeSourceKinesisStreamParameters {
  /**
   * The maximum number of records to include in each batch.
   *
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * Define the target queue to send dead-letter queue events to.
   *
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * Define how to handle item process failures. `AUTOMATIC_BISECT` halves each batch and retry each half until all the records are processed or there is one failed message left in the batch.
   *
   * @public
   */
  OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams | undefined;

  /**
   * The maximum length of a time to wait for events.
   *
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;

  /**
   * Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, EventBridge never discards old records.
   *
   * @public
   */
  MaximumRecordAgeInSeconds?: number | undefined;

  /**
   * Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.
   *
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * The number of batches to process concurrently from each shard. The default value is 1.
   *
   * @public
   */
  ParallelizationFactor?: number | undefined;

  /**
   * The position in a stream from which to start reading.
   *
   * @public
   */
  StartingPosition: KinesisStreamStartPosition | undefined;

  /**
   * With `StartingPosition` set to `AT_TIMESTAMP`, the time from which to start reading, in Unix time seconds.
   *
   * @public
   */
  StartingPositionTimestamp?: Date | undefined;
}

/**
 * The Secrets Manager secret that stores your stream credentials.
 *
 * @public
 */
export type MSKAccessCredentials =
  | MSKAccessCredentials.ClientCertificateTlsAuthMember
  | MSKAccessCredentials.SaslScram512AuthMember
  | MSKAccessCredentials.$UnknownMember;

/**
 * @public
 */
export namespace MSKAccessCredentials {
  /**
   * The ARN of the Secrets Manager secret.
   *
   * @public
   */
  export interface SaslScram512AuthMember {
    SaslScram512Auth: string;
    ClientCertificateTlsAuth?: never;
    $unknown?: never;
  }

  /**
   * The ARN of the Secrets Manager secret.
   *
   * @public
   */
  export interface ClientCertificateTlsAuthMember {
    SaslScram512Auth?: never;
    ClientCertificateTlsAuth: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    SaslScram512Auth?: never;
    ClientCertificateTlsAuth?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    SaslScram512Auth: (value: string) => T;
    ClientCertificateTlsAuth: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The parameters for using an MSK stream as a source.
 *
 * @public
 */
export interface PipeSourceManagedStreamingKafkaParameters {
  /**
   * The name of the topic that the pipe will read from.
   *
   * @public
   */
  TopicName: string | undefined;

  /**
   * The position in a stream from which to start reading.
   *
   * @public
   */
  StartingPosition?: MSKStartPosition | undefined;

  /**
   * The maximum number of records to include in each batch.
   *
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * The maximum length of a time to wait for events.
   *
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;

  /**
   * The name of the destination queue to consume.
   *
   * @public
   */
  ConsumerGroupID?: string | undefined;

  /**
   * The credentials needed to access the resource.
   *
   * @public
   */
  Credentials?: MSKAccessCredentials | undefined;
}

/**
 * The parameters for using a Rabbit MQ broker as a source.
 *
 * @public
 */
export interface PipeSourceRabbitMQBrokerParameters {
  /**
   * The credentials needed to access the resource.
   *
   * @public
   */
  Credentials: MQBrokerAccessCredentials | undefined;

  /**
   * The name of the destination queue to consume.
   *
   * @public
   */
  QueueName: string | undefined;

  /**
   * The name of the virtual host associated with the source broker.
   *
   * @public
   */
  VirtualHost?: string | undefined;

  /**
   * The maximum number of records to include in each batch.
   *
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * The maximum length of a time to wait for events.
   *
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;
}

/**
 * The Secrets Manager secret that stores your stream credentials.
 *
 * @public
 */
export type SelfManagedKafkaAccessConfigurationCredentials =
  | SelfManagedKafkaAccessConfigurationCredentials.BasicAuthMember
  | SelfManagedKafkaAccessConfigurationCredentials.ClientCertificateTlsAuthMember
  | SelfManagedKafkaAccessConfigurationCredentials.SaslScram256AuthMember
  | SelfManagedKafkaAccessConfigurationCredentials.SaslScram512AuthMember
  | SelfManagedKafkaAccessConfigurationCredentials.$UnknownMember;

/**
 * @public
 */
export namespace SelfManagedKafkaAccessConfigurationCredentials {
  /**
   * The ARN of the Secrets Manager secret.
   *
   * @public
   */
  export interface BasicAuthMember {
    BasicAuth: string;
    SaslScram512Auth?: never;
    SaslScram256Auth?: never;
    ClientCertificateTlsAuth?: never;
    $unknown?: never;
  }

  /**
   * The ARN of the Secrets Manager secret.
   *
   * @public
   */
  export interface SaslScram512AuthMember {
    BasicAuth?: never;
    SaslScram512Auth: string;
    SaslScram256Auth?: never;
    ClientCertificateTlsAuth?: never;
    $unknown?: never;
  }

  /**
   * The ARN of the Secrets Manager secret.
   *
   * @public
   */
  export interface SaslScram256AuthMember {
    BasicAuth?: never;
    SaslScram512Auth?: never;
    SaslScram256Auth: string;
    ClientCertificateTlsAuth?: never;
    $unknown?: never;
  }

  /**
   * The ARN of the Secrets Manager secret.
   *
   * @public
   */
  export interface ClientCertificateTlsAuthMember {
    BasicAuth?: never;
    SaslScram512Auth?: never;
    SaslScram256Auth?: never;
    ClientCertificateTlsAuth: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    BasicAuth?: never;
    SaslScram512Auth?: never;
    SaslScram256Auth?: never;
    ClientCertificateTlsAuth?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    BasicAuth: (value: string) => T;
    SaslScram512Auth: (value: string) => T;
    SaslScram256Auth: (value: string) => T;
    ClientCertificateTlsAuth: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used.
 *
 * @public
 */
export interface SelfManagedKafkaAccessConfigurationVpc {
  /**
   * Specifies the subnets associated with the stream. These subnets must all be in the same VPC. You can specify as many as 16 subnets.
   *
   * @public
   */
  Subnets?: string[] | undefined;

  /**
   * Specifies the security groups associated with the stream. These security groups must all be in the same VPC. You can specify as many as five security groups.
   *
   * @public
   */
  SecurityGroup?: string[] | undefined;
}

/**
 * The parameters for using a self-managed Apache Kafka stream as a source.
 *
 * A *self managed* cluster refers to any Apache Kafka cluster not hosted by Amazon Web Services. This includes both clusters you manage yourself, as well as those hosted by a third-party provider, such as [Confluent Cloud](https://www.confluent.io/), [CloudKarafka](https://www.cloudkarafka.com/), or [Redpanda](https://redpanda.com/). For more information, see [Apache Kafka streams as a source](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-kafka.html) in the *Amazon EventBridge User Guide*.
 *
 * @public
 */
export interface PipeSourceSelfManagedKafkaParameters {
  /**
   * The name of the topic that the pipe will read from.
   *
   * @public
   */
  TopicName: string | undefined;

  /**
   * The position in a stream from which to start reading.
   *
   * @public
   */
  StartingPosition?: SelfManagedKafkaStartPosition | undefined;

  /**
   * An array of server URLs.
   *
   * @public
   */
  AdditionalBootstrapServers?: string[] | undefined;

  /**
   * The maximum number of records to include in each batch.
   *
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * The maximum length of a time to wait for events.
   *
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;

  /**
   * The name of the destination queue to consume.
   *
   * @public
   */
  ConsumerGroupID?: string | undefined;

  /**
   * The credentials needed to access the resource.
   *
   * @public
   */
  Credentials?: SelfManagedKafkaAccessConfigurationCredentials | undefined;

  /**
   * The ARN of the Secrets Manager secret used for certification.
   *
   * @public
   */
  ServerRootCaCertificate?: string | undefined;

  /**
   * This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used.
   *
   * @public
   */
  Vpc?: SelfManagedKafkaAccessConfigurationVpc | undefined;
}

/**
 * The parameters for using a Amazon SQS stream as a source.
 *
 * @public
 */
export interface PipeSourceSqsQueueParameters {
  /**
   * The maximum number of records to include in each batch.
   *
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * The maximum length of a time to wait for events.
   *
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;
}

/**
 * The parameters required to set up a source for your pipe.
 *
 * @public
 */
export interface PipeSourceParameters {
  /**
   * The collection of event patterns used to filter events.
   *
   * To remove a filter, specify a `FilterCriteria` object with an empty array of `Filter` objects.
   *
   * For more information, see [Events and Event Patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  FilterCriteria?: FilterCriteria | undefined;

  /**
   * The parameters for using a Kinesis stream as a source.
   *
   * @public
   */
  KinesisStreamParameters?: PipeSourceKinesisStreamParameters | undefined;

  /**
   * The parameters for using a DynamoDB stream as a source.
   *
   * @public
   */
  DynamoDBStreamParameters?: PipeSourceDynamoDBStreamParameters | undefined;

  /**
   * The parameters for using a Amazon SQS stream as a source.
   *
   * @public
   */
  SqsQueueParameters?: PipeSourceSqsQueueParameters | undefined;

  /**
   * The parameters for using an Active MQ broker as a source.
   *
   * @public
   */
  ActiveMQBrokerParameters?: PipeSourceActiveMQBrokerParameters | undefined;

  /**
   * The parameters for using a Rabbit MQ broker as a source.
   *
   * @public
   */
  RabbitMQBrokerParameters?: PipeSourceRabbitMQBrokerParameters | undefined;

  /**
   * The parameters for using an MSK stream as a source.
   *
   * @public
   */
  ManagedStreamingKafkaParameters?: PipeSourceManagedStreamingKafkaParameters | undefined;

  /**
   * The parameters for using a self-managed Apache Kafka stream as a source.
   *
   * A *self managed* cluster refers to any Apache Kafka cluster not hosted by Amazon Web Services. This includes both clusters you manage yourself, as well as those hosted by a third-party provider, such as [Confluent Cloud](https://www.confluent.io/), [CloudKarafka](https://www.cloudkarafka.com/), or [Redpanda](https://redpanda.com/). For more information, see [Apache Kafka streams as a source](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-kafka.html) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  SelfManagedKafkaParameters?: PipeSourceSelfManagedKafkaParameters | undefined;
}

/**
 * The parameters for using an Batch job as a target.
 *
 * @public
 */
export interface PipeTargetBatchJobParameters {
  /**
   * The job definition used by this job. This value can be one of `name`, `name:revision`, or the Amazon Resource Name (ARN) for the job definition. If name is specified without a revision then the latest active revision is used.
   *
   * @public
   */
  JobDefinition: string | undefined;

  /**
   * The name of the job. It can be up to 128 letters long. The first character must be alphanumeric, can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job.
   *
   * @public
   */
  ArrayProperties?: BatchArrayProperties | undefined;

  /**
   * The retry strategy to use for failed jobs. When a retry strategy is specified here, it overrides the retry strategy defined in the job definition.
   *
   * @public
   */
  RetryStrategy?: BatchRetryStrategy | undefined;

  /**
   * The overrides that are sent to a container.
   *
   * @public
   */
  ContainerOverrides?: BatchContainerOverrides | undefined;

  /**
   * A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a `SEQUENTIAL` type dependency without specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an `N_TO_N` type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each dependency to complete before it can begin.
   *
   * @public
   */
  DependsOn?: BatchJobDependency[] | undefined;

  /**
   * Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters included here override any corresponding parameter defaults from the job definition.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * The parameters for using an CloudWatch Logs log stream as a target.
 *
 * @public
 */
export interface PipeTargetCloudWatchLogsParameters {
  /**
   * The name of the log stream.
   *
   * @public
   */
  LogStreamName?: string | undefined;

  /**
   * The time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   *
   * @public
   */
  Timestamp?: string | undefined;
}

/**
 * This structure specifies the network configuration for an Amazon ECS task.
 *
 * @public
 */
export interface NetworkConfiguration {
  /**
   * Use this structure to specify the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the `awsvpc` network mode.
   *
   * @public
   */
  awsvpcConfiguration?: AwsVpcConfiguration | undefined;
}

/**
 * The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name.
 *
 * @public
 */
export interface EcsEnvironmentVariable {
  /**
   * The name of the key-value pair. For environment variables, this is the name of the environment variable.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The value of the key-value pair. For environment variables, this is the value of the environment variable.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * A list of files containing the environment variables to pass to a container. You can specify up to ten environment files. The file must have a `.env` file extension. Each line in an environment file should contain an environment variable in `VARIABLE=VALUE` format. Lines beginning with `#` are treated as comments and are ignored. For more information about the environment variable file syntax, see [Declare default environment variables in file](https://docs.docker.com/compose/env-file/).
 *
 * If there are environment variables specified using the `environment` parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they're processed from the top down. We recommend that you use unique variable names. For more information, see [Specifying environment variables](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * This parameter is only supported for tasks hosted on Fargate using the following platform versions:
 *
 * - Linux platform version `1.4.0` or later.
 * - Windows platform version `1.0.0` or later.
 *
 * @public
 */
export interface EcsEnvironmentFile {
  /**
   * The file type to use. The only supported value is `s3`.
   *
   * @public
   */
  type: EcsEnvironmentFileType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 object containing the environment variable file.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * The type and amount of a resource to assign to a container. The supported resource types are GPUs and Elastic Inference accelerators. For more information, see [Working with GPUs on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html) or [Working with Amazon Elastic Inference on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html) in the *Amazon Elastic Container Service Developer Guide*
 *
 * @public
 */
export interface EcsResourceRequirement {
  /**
   * The type of resource to assign to a container. The supported values are `GPU` or `InferenceAccelerator`.
   *
   * @public
   */
  type: EcsResourceRequirementType | undefined;

  /**
   * The value for the specified resource type.
   *
   * If the `GPU` type is used, the value is the number of physical `GPUs` the Amazon ECS container agent reserves for the container. The number of GPUs that's reserved for all containers in a task can't exceed the number of available GPUs on the container instance that the task is launched on.
   *
   * If the `InferenceAccelerator` type is used, the `value` matches the `deviceName` for an InferenceAccelerator specified in a task definition.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * The overrides that are sent to a container. An empty container override can be passed in. An example of an empty container override is `\{"containerOverrides": [ ] \}`. If a non-empty container override is specified, the `name` parameter must be included.
 *
 * @public
 */
export interface EcsContainerOverride {
  /**
   * The command to send to the container that overrides the default command from the Docker image or the task definition. You must also specify a container name.
   *
   * @public
   */
  Command?: string[] | undefined;

  /**
   * The number of `cpu` units reserved for the container, instead of the default value from the task definition. You must also specify a container name.
   *
   * @public
   */
  Cpu?: number | undefined;

  /**
   * The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name.
   *
   * @public
   */
  Environment?: EcsEnvironmentVariable[] | undefined;

  /**
   * A list of files containing the environment variables to pass to a container, instead of the value from the container definition.
   *
   * @public
   */
  EnvironmentFiles?: EcsEnvironmentFile[] | undefined;

  /**
   * The hard limit (in MiB) of memory to present to the container, instead of the default value from the task definition. If your container attempts to exceed the memory specified here, the container is killed. You must also specify a container name.
   *
   * @public
   */
  Memory?: number | undefined;

  /**
   * The soft limit (in MiB) of memory to reserve for the container, instead of the default value from the task definition. You must also specify a container name.
   *
   * @public
   */
  MemoryReservation?: number | undefined;

  /**
   * The name of the container that receives the override. This parameter is required if any override is specified.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type and amount of a resource to assign to a container, instead of the default value from the task definition. The only supported resource is a GPU.
   *
   * @public
   */
  ResourceRequirements?: EcsResourceRequirement[] | undefined;
}

/**
 * The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate. For more information, see [Fargate task storage](https://docs.aws.amazon.com/AmazonECS/latest/userguide/using_data_volumes.html) in the *Amazon ECS User Guide for Fargate*.
 *
 * > **Note:** This parameter is only supported for tasks hosted on Fargate using Linux platform version `1.4.0` or later. This parameter is not supported for Windows containers on Fargate.
 *
 * @public
 */
export interface EcsEphemeralStorage {
  /**
   * The total amount, in GiB, of ephemeral storage to set for the task. The minimum supported value is `21` GiB and the maximum supported value is `200` GiB.
   *
   * @public
   */
  sizeInGiB: number | undefined;
}

/**
 * Details on an Elastic Inference accelerator task override. This parameter is used to override the Elastic Inference accelerator specified in the task definition. For more information, see [Working with Amazon Elastic Inference on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/userguide/ecs-inference.html) in the *Amazon Elastic Container Service Developer Guide*.
 *
 * @public
 */
export interface EcsInferenceAcceleratorOverride {
  /**
   * The Elastic Inference accelerator device name to override for the task. This parameter must match a `deviceName` specified in the task definition.
   *
   * @public
   */
  deviceName?: string | undefined;

  /**
   * The Elastic Inference accelerator type to use.
   *
   * @public
   */
  deviceType?: string | undefined;
}

/**
 * The overrides that are associated with a task.
 *
 * @public
 */
export interface EcsTaskOverride {
  /**
   * One or more container overrides that are sent to a task.
   *
   * @public
   */
  ContainerOverrides?: EcsContainerOverride[] | undefined;

  /**
   * The cpu override for the task.
   *
   * @public
   */
  Cpu?: string | undefined;

  /**
   * The ephemeral storage setting override for the task.
   *
   * > **Note:**
   * >
   * > This parameter is only supported for tasks hosted on Fargate that use the following platform versions:
   * >
   * > - Linux platform version `1.4.0` or later.
   * > - Windows platform version `1.0.0` or later.
   *
   * @public
   */
  EphemeralStorage?: EcsEphemeralStorage | undefined;

  /**
   * The Amazon Resource Name (ARN) of the task execution IAM role override for the task. For more information, see [Amazon ECS task execution IAM role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * The Elastic Inference accelerator override for the task.
   *
   * @public
   */
  InferenceAcceleratorOverrides?: EcsInferenceAcceleratorOverride[] | undefined;

  /**
   * The memory override for the task.
   *
   * @public
   */
  Memory?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role. For more information, see [IAM Role for Tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  TaskRoleArn?: string | undefined;
}

/**
 * An object representing a constraint on task placement. To learn more, see [Task Placement Constraints](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html) in the Amazon Elastic Container Service Developer Guide.
 *
 * @public
 */
export interface PlacementConstraint {
  /**
   * The type of constraint. Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates.
   *
   * @public
   */
  type?: PlacementConstraintType | undefined;

  /**
   * A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is `distinctInstance`. To learn more, see [Cluster Query Language](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html) in the Amazon Elastic Container Service Developer Guide.
   *
   * @public
   */
  expression?: string | undefined;
}

/**
 * The task placement strategy for a task or service. To learn more, see [Task Placement Strategies](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html) in the Amazon Elastic Container Service Service Developer Guide.
 *
 * @public
 */
export interface PlacementStrategy {
  /**
   * The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).
   *
   * @public
   */
  type?: PlacementStrategyType | undefined;

  /**
   * The field to apply the placement strategy against. For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used.
   *
   * @public
   */
  field?: string | undefined;
}

/**
 * A key-value pair associated with an Amazon Web Services resource. In EventBridge, rules and event buses support tagging.
 *
 * @public
 */
export interface Tag {
  /**
   * A string you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value for the specified tag key.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * The parameters for using an Amazon ECS task as a target.
 *
 * @public
 */
export interface PipeTargetEcsTaskParameters {
  /**
   * The ARN of the task definition to use if the event target is an Amazon ECS task.
   *
   * @public
   */
  TaskDefinitionArn: string | undefined;

  /**
   * The number of tasks to create based on `TaskDefinition`. The default is 1.
   *
   * @public
   */
  TaskCount?: number | undefined;

  /**
   * Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The `FARGATE` value is supported only in the Regions where Fargate with Amazon ECS is supported. For more information, see [Fargate on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS-Fargate.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  LaunchType?: LaunchType | undefined;

  /**
   * Use this structure if the Amazon ECS task uses the `awsvpc` network mode. This structure specifies the VPC subnets and security groups associated with the task, and whether a public IP address is to be used. This structure is required if `LaunchType` is `FARGATE` because the `awsvpc` mode is required for Fargate tasks.
   *
   * If you specify `NetworkConfiguration` when the target ECS task does not use the `awsvpc` network mode, the task fails.
   *
   * @public
   */
  NetworkConfiguration?: NetworkConfiguration | undefined;

  /**
   * Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as `1.1.0`.
   *
   * This structure is used only if `LaunchType` is `FARGATE`. For more information about valid platform versions, see [Fargate Platform Versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * Specifies an Amazon ECS task group for the task. The maximum length is 255 characters.
   *
   * @public
   */
  Group?: string | undefined;

  /**
   * The capacity provider strategy to use for the task.
   *
   * If a `capacityProviderStrategy` is specified, the `launchType` parameter must be omitted. If no `capacityProviderStrategy` or launchType is specified, the `defaultCapacityProviderStrategy` for the cluster is used.
   *
   * @public
   */
  CapacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * Specifies whether to enable Amazon ECS managed tags for the task. For more information, see [Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the Amazon Elastic Container Service Developer Guide.
   *
   * @public
   */
  EnableECSManagedTags?: boolean | undefined;

  /**
   * Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task.
   *
   * @public
   */
  EnableExecuteCommand?: boolean | undefined;

  /**
   * An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).
   *
   * @public
   */
  PlacementConstraints?: PlacementConstraint[] | undefined;

  /**
   * The placement strategy objects to use for the task. You can specify a maximum of five strategy rules per task.
   *
   * @public
   */
  PlacementStrategy?: PlacementStrategy[] | undefined;

  /**
   * Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the `TagResource` API action.
   *
   * @public
   */
  PropagateTags?: PropagateTags | undefined;

  /**
   * The reference ID to use for the task.
   *
   * @public
   */
  ReferenceId?: string | undefined;

  /**
   * The overrides that are associated with a task.
   *
   * @public
   */
  Overrides?: EcsTaskOverride | undefined;

  /**
   * The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. To learn more, see [RunTask](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-tags) in the Amazon ECS API Reference.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The parameters for using an EventBridge event bus as a target.
 *
 * @public
 */
export interface PipeTargetEventBridgeEventBusParameters {
  /**
   * The URL subdomain of the endpoint. For example, if the URL for Endpoint is https://abcde.veo.endpoints.event.amazonaws.com, then the EndpointId is `abcde.veo`.
   *
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * A free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.
   *
   * @public
   */
  DetailType?: string | undefined;

  /**
   * The source of the event.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * Amazon Web Services resources, identified by Amazon Resource Name (ARN), which the event primarily concerns. Any number, including zero, may be present.
   *
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * The time stamp of the event, per [RFC3339](https://www.rfc-editor.org/rfc/rfc3339.txt). If no time stamp is provided, the time stamp of the [PutEvents](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html) call is used.
   *
   * @public
   */
  Time?: string | undefined;
}

/**
 * These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations.
 *
 * @public
 */
export interface PipeTargetHttpParameters {
  /**
   * The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*").
   *
   * @public
   */
  PathParameterValues?: string[] | undefined;

  /**
   * The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
   *
   * @public
   */
  HeaderParameters?: Record<string, string> | undefined;

  /**
   * The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
   *
   * @public
   */
  QueryStringParameters?: Record<string, string> | undefined;
}

/**
 * The parameters for using a Kinesis stream as a target.
 *
 * @public
 */
export interface PipeTargetKinesisStreamParameters {
  /**
   * Determines which shard in the stream the data record is assigned to. Partition keys are Unicode strings with a maximum length limit of 256 characters for each key. Amazon Kinesis Data Streams uses the partition key as input to a hash function that maps the partition key and associated data to a specific shard. Specifically, an MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this hashing mechanism, all data records with the same partition key map to the same shard within the stream.
   *
   * @public
   */
  PartitionKey: string | undefined;
}

/**
 * The parameters for using a Lambda function as a target.
 *
 * @public
 */
export interface PipeTargetLambdaFunctionParameters {
  /**
   * Specify whether to invoke the function synchronously or asynchronously.
   *
   * - `REQUEST_RESPONSE` (default) - Invoke synchronously. This corresponds to the `RequestResponse` option in the `InvocationType` parameter for the Lambda [Invoke](https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html#API_Invoke_RequestSyntax) API.
   * - `FIRE_AND_FORGET` - Invoke asynchronously. This corresponds to the `Event` option in the `InvocationType` parameter for the Lambda [Invoke](https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html#API_Invoke_RequestSyntax) API.
   *
   * For more information, see [Invocation types](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html#pipes-invocation) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  InvocationType?: PipeTargetInvocationType | undefined;
}

/**
 * These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API BatchExecuteStatement.
 *
 * @public
 */
export interface PipeTargetRedshiftDataParameters {
  /**
   * The name or ARN of the secret that enables access to the database. Required when authenticating using Secrets Manager.
   *
   * @public
   */
  SecretManagerArn?: string | undefined;

  /**
   * The name of the database. Required when authenticating using temporary credentials.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The database user name. Required when authenticating using temporary credentials.
   *
   * @public
   */
  DbUser?: string | undefined;

  /**
   * The name of the SQL statement. You can name the SQL statement when you create it to identify the query.
   *
   * @public
   */
  StatementName?: string | undefined;

  /**
   * Indicates whether to send an event back to EventBridge after the SQL statement runs.
   *
   * @public
   */
  WithEvent?: boolean | undefined;

  /**
   * The SQL statement text to run.
   *
   * @public
   */
  Sqls: string[] | undefined;
}

/**
 * Name/Value pair of a parameter to start execution of a SageMaker Model Building Pipeline.
 *
 * @public
 */
export interface SageMakerPipelineParameter {
  /**
   * Name of parameter to start execution of a SageMaker Model Building Pipeline.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Value of parameter to start execution of a SageMaker Model Building Pipeline.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * The parameters for using a SageMaker pipeline as a target.
 *
 * @public
 */
export interface PipeTargetSageMakerPipelineParameters {
  /**
   * List of Parameter names and values for SageMaker Model Building Pipeline execution.
   *
   * @public
   */
  PipelineParameterList?: SageMakerPipelineParameter[] | undefined;
}

/**
 * The parameters for using a Amazon SQS stream as a target.
 *
 * @public
 */
export interface PipeTargetSqsQueueParameters {
  /**
   * The FIFO message group ID to use as the target.
   *
   * @public
   */
  MessageGroupId?: string | undefined;

  /**
   * This parameter applies only to FIFO (first-in-first-out) queues.
   *
   * The token used for deduplication of sent messages.
   *
   * @public
   */
  MessageDeduplicationId?: string | undefined;
}

/**
 * The parameters for using a Step Functions state machine as a target.
 *
 * @public
 */
export interface PipeTargetStateMachineParameters {
  /**
   * Specify whether to invoke the Step Functions state machine synchronously or asynchronously.
   *
   * - `REQUEST_RESPONSE` (default) - Invoke synchronously. For more information, see [StartSyncExecution](https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartSyncExecution.html) in the *Step Functions API Reference*.
   *
   *   > **Note:** `REQUEST_RESPONSE` is not supported for `STANDARD` state machine workflows.
   * - `FIRE_AND_FORGET` - Invoke asynchronously. For more information, see [StartExecution](https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html) in the *Step Functions API Reference*.
   *
   * For more information, see [Invocation types](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html#pipes-invocation) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  InvocationType?: PipeTargetInvocationType | undefined;
}

/**
 * Maps source data to a dimension in the target Timestream for LiveAnalytics table.
 *
 * For more information, see [Amazon Timestream for LiveAnalytics concepts](https://docs.aws.amazon.com/timestream/latest/developerguide/concepts.html)
 *
 * @public
 */
export interface DimensionMapping {
  /**
   * Dynamic path to the dimension value in the source event.
   *
   * @public
   */
  DimensionValue: string | undefined;

  /**
   * The data type of the dimension for the time-series data.
   *
   * @public
   */
  DimensionValueType: DimensionValueType | undefined;

  /**
   * The metadata attributes of the time series. For example, the name and Availability Zone of an Amazon EC2 instance or the name of the manufacturer of a wind turbine are dimensions.
   *
   * @public
   */
  DimensionName: string | undefined;
}

/**
 * A mapping of a source event data field to a measure in a Timestream for LiveAnalytics record.
 *
 * @public
 */
export interface MultiMeasureAttributeMapping {
  /**
   * Dynamic path to the measurement attribute in the source event.
   *
   * @public
   */
  MeasureValue: string | undefined;

  /**
   * Data type of the measurement attribute in the source event.
   *
   * @public
   */
  MeasureValueType: MeasureValueType | undefined;

  /**
   * Target measure name to be used.
   *
   * @public
   */
  MultiMeasureAttributeName: string | undefined;
}

/**
 * Maps multiple measures from the source event to the same Timestream for LiveAnalytics record.
 *
 * For more information, see [Amazon Timestream for LiveAnalytics concepts](https://docs.aws.amazon.com/timestream/latest/developerguide/concepts.html)
 *
 * @public
 */
export interface MultiMeasureMapping {
  /**
   * The name of the multiple measurements per record (multi-measure).
   *
   * @public
   */
  MultiMeasureName: string | undefined;

  /**
   * Mappings that represent multiple source event fields mapped to measures in the same Timestream for LiveAnalytics record.
   *
   * @public
   */
  MultiMeasureAttributeMappings: MultiMeasureAttributeMapping[] | undefined;
}

/**
 * Maps a single source data field to a single record in the specified Timestream for LiveAnalytics table.
 *
 * For more information, see [Amazon Timestream for LiveAnalytics concepts](https://docs.aws.amazon.com/timestream/latest/developerguide/concepts.html)
 *
 * @public
 */
export interface SingleMeasureMapping {
  /**
   * Dynamic path of the source field to map to the measure in the record.
   *
   * @public
   */
  MeasureValue: string | undefined;

  /**
   * Data type of the source field.
   *
   * @public
   */
  MeasureValueType: MeasureValueType | undefined;

  /**
   * Target measure name for the measurement attribute in the Timestream table.
   *
   * @public
   */
  MeasureName: string | undefined;
}

/**
 * The parameters for using a Timestream for LiveAnalytics table as a target.
 *
 * @public
 */
export interface PipeTargetTimestreamParameters {
  /**
   * Dynamic path to the source data field that represents the time value for your data.
   *
   * @public
   */
  TimeValue: string | undefined;

  /**
   * The granularity of the time units used. Default is `MILLISECONDS`.
   *
   * Required if `TimeFieldType` is specified as `EPOCH`.
   *
   * @public
   */
  EpochTimeUnit?: EpochTimeUnit | undefined;

  /**
   * The type of time value used.
   *
   * The default is `EPOCH`.
   *
   * @public
   */
  TimeFieldType?: TimeFieldType | undefined;

  /**
   * How to format the timestamps. For example, `yyyy-MM-dd'T'HH:mm:ss'Z'`.
   *
   * Required if `TimeFieldType` is specified as `TIMESTAMP_FORMAT`.
   *
   * @public
   */
  TimestampFormat?: string | undefined;

  /**
   * 64 bit version value or source data field that represents the version value for your data.
   *
   * Write requests with a higher version number will update the existing measure values of the record and version. In cases where the measure value is the same, the version will still be updated.
   *
   * Default value is 1.
   *
   * Timestream for LiveAnalytics does not support updating partial measure values in a record.
   *
   * Write requests for duplicate data with a higher version number will update the existing measure value and version. In cases where the measure value is the same, `Version` will still be updated. Default value is `1`.
   *
   * > **Note:** `Version` must be `1` or greater, or you will receive a `ValidationException` error.
   *
   * @public
   */
  VersionValue: string | undefined;

  /**
   * Map source data to dimensions in the target Timestream for LiveAnalytics table.
   *
   * For more information, see [Amazon Timestream for LiveAnalytics concepts](https://docs.aws.amazon.com/timestream/latest/developerguide/concepts.html)
   *
   * @public
   */
  DimensionMappings: DimensionMapping[] | undefined;

  /**
   * Mappings of single source data fields to individual records in the specified Timestream for LiveAnalytics table.
   *
   * @public
   */
  SingleMeasureMappings?: SingleMeasureMapping[] | undefined;

  /**
   * Maps multiple measures from the source event to the same record in the specified Timestream for LiveAnalytics table.
   *
   * @public
   */
  MultiMeasureMappings?: MultiMeasureMapping[] | undefined;
}

/**
 * The parameters required to set up a target for your pipe.
 *
 * For more information about pipe target parameters, including how to use dynamic path parameters, see [Target parameters](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html) in the *Amazon EventBridge User Guide*.
 *
 * @public
 */
export interface PipeTargetParameters {
  /**
   * Valid JSON text passed to the target. In this case, nothing from the event itself is passed to the target. For more information, see [The JavaScript Object Notation (JSON) Data Interchange Format](http://www.rfc-editor.org/rfc/rfc7159.txt).
   *
   * To remove an input template, specify an empty string.
   *
   * @public
   */
  InputTemplate?: string | undefined;

  /**
   * The parameters for using a Lambda function as a target.
   *
   * @public
   */
  LambdaFunctionParameters?: PipeTargetLambdaFunctionParameters | undefined;

  /**
   * The parameters for using a Step Functions state machine as a target.
   *
   * @public
   */
  StepFunctionStateMachineParameters?: PipeTargetStateMachineParameters | undefined;

  /**
   * The parameters for using a Kinesis stream as a target.
   *
   * @public
   */
  KinesisStreamParameters?: PipeTargetKinesisStreamParameters | undefined;

  /**
   * The parameters for using an Amazon ECS task as a target.
   *
   * @public
   */
  EcsTaskParameters?: PipeTargetEcsTaskParameters | undefined;

  /**
   * The parameters for using an Batch job as a target.
   *
   * @public
   */
  BatchJobParameters?: PipeTargetBatchJobParameters | undefined;

  /**
   * The parameters for using a Amazon SQS stream as a target.
   *
   * @public
   */
  SqsQueueParameters?: PipeTargetSqsQueueParameters | undefined;

  /**
   * These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations.
   *
   * @public
   */
  HttpParameters?: PipeTargetHttpParameters | undefined;

  /**
   * These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API BatchExecuteStatement.
   *
   * @public
   */
  RedshiftDataParameters?: PipeTargetRedshiftDataParameters | undefined;

  /**
   * The parameters for using a SageMaker pipeline as a target.
   *
   * @public
   */
  SageMakerPipelineParameters?: PipeTargetSageMakerPipelineParameters | undefined;

  /**
   * The parameters for using an EventBridge event bus as a target.
   *
   * @public
   */
  EventBridgeEventBusParameters?: PipeTargetEventBridgeEventBusParameters | undefined;

  /**
   * The parameters for using an CloudWatch Logs log stream as a target.
   *
   * @public
   */
  CloudWatchLogsParameters?: PipeTargetCloudWatchLogsParameters | undefined;

  /**
   * The parameters for using a Timestream for LiveAnalytics table as a target.
   *
   * @public
   */
  TimestreamParameters?: PipeTargetTimestreamParameters | undefined;
}

/**
 * @public
 */
export interface CreatePipeRequest {
  /**
   * The name of the pipe.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the pipe.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The state the pipe should be in.
   *
   * @public
   */
  DesiredState?: RequestedPipeState | undefined;

  /**
   * The ARN of the source resource.
   *
   * @public
   */
  Source: string | undefined;

  /**
   * The parameters required to set up a source for your pipe.
   *
   * @public
   */
  SourceParameters?: PipeSourceParameters | undefined;

  /**
   * The ARN of the enrichment resource.
   *
   * @public
   */
  Enrichment?: string | undefined;

  /**
   * The parameters required to set up enrichment on your pipe.
   *
   * @public
   */
  EnrichmentParameters?: PipeEnrichmentParameters | undefined;

  /**
   * The ARN of the target resource.
   *
   * @public
   */
  Target: string | undefined;

  /**
   * The parameters required to set up a target for your pipe.
   *
   * For more information about pipe target parameters, including how to use dynamic path parameters, see [Target parameters](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  TargetParameters?: PipeTargetParameters | undefined;

  /**
   * The ARN of the role that allows the pipe to send data to the target.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The list of key-value pairs to associate with the pipe.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The logging configuration settings for the pipe.
   *
   * @public
   */
  LogConfiguration?: PipeLogConfigurationParameters | undefined;

  /**
   * The identifier of the KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt pipe data. The identifier can be the key Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN.
   *
   * If you do not specify a customer managed key identifier, EventBridge uses an Amazon Web Services owned key to encrypt pipe data.
   *
   * For more information, see [Managing keys](https://docs.aws.amazon.com/kms/latest/developerguide/getting-started.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  KmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface CreatePipeResponse {
  /**
   * The ARN of the pipe.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the pipe.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The state the pipe should be in.
   *
   * @public
   */
  DesiredState?: RequestedPipeState | undefined;

  /**
   * The state the pipe is in.
   *
   * @public
   */
  CurrentState?: PipeState | undefined;

  /**
   * The time the pipe was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * When the pipe was last updated, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * Indicates that an error has occurred while performing a validate operation.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the exception.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The message of the exception.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeletePipeRequest {
  /**
   * The name of the pipe.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeletePipeResponse {
  /**
   * The ARN of the pipe.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the pipe.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The state the pipe should be in.
   *
   * @public
   */
  DesiredState?: RequestedPipeStateDescribeResponse | undefined;

  /**
   * The state the pipe is in.
   *
   * @public
   */
  CurrentState?: PipeState | undefined;

  /**
   * The time the pipe was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * When the pipe was last updated, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribePipeRequest {
  /**
   * The name of the pipe.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * The Amazon Data Firehose logging configuration settings for the pipe.
 *
 * @public
 */
export interface FirehoseLogDestination {
  /**
   * The Amazon Resource Name (ARN) of the Firehose delivery stream to which EventBridge delivers the pipe log records.
   *
   * @public
   */
  DeliveryStreamArn?: string | undefined;
}

/**
 * The Amazon S3 logging configuration settings for the pipe.
 *
 * @public
 */
export interface S3LogDestination {
  /**
   * The name of the Amazon S3 bucket to which EventBridge delivers the log records for the pipe.
   *
   * @public
   */
  BucketName?: string | undefined;

  /**
   * The prefix text with which to begin Amazon S3 log object names.
   *
   * For more information, see [Organizing objects using prefixes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html) in the *Amazon Simple Storage Service User Guide*.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * The Amazon Web Services account that owns the Amazon S3 bucket to which EventBridge delivers the log records for the pipe.
   *
   * @public
   */
  BucketOwner?: string | undefined;

  /**
   * The format EventBridge uses for the log records.
   *
   * EventBridge currently only supports `json` formatting.
   *
   * @public
   */
  OutputFormat?: S3OutputFormat | undefined;
}

/**
 * The logging configuration settings for the pipe.
 *
 * @public
 */
export interface PipeLogConfiguration {
  /**
   * The Amazon S3 logging configuration settings for the pipe.
   *
   * @public
   */
  S3LogDestination?: S3LogDestination | undefined;

  /**
   * The Amazon Data Firehose logging configuration settings for the pipe.
   *
   * @public
   */
  FirehoseLogDestination?: FirehoseLogDestination | undefined;

  /**
   * The Amazon CloudWatch Logs logging configuration settings for the pipe.
   *
   * @public
   */
  CloudwatchLogsLogDestination?: CloudwatchLogsLogDestination | undefined;

  /**
   * The level of logging detail to include. This applies to all log destinations for the pipe.
   *
   * @public
   */
  Level?: LogLevel | undefined;

  /**
   * Whether the execution data (specifically, the `payload`, `awsRequest`, and `awsResponse` fields) is included in the log messages for this pipe.
   *
   * This applies to all log destinations for the pipe.
   *
   * For more information, see [Including execution data in logs](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-logs.html#eb-pipes-logs-execution-data) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  IncludeExecutionData?: IncludeExecutionDataOption[] | undefined;
}

/**
 * @public
 */
export interface DescribePipeResponse {
  /**
   * The ARN of the pipe.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the pipe.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the pipe.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The state the pipe should be in.
   *
   * @public
   */
  DesiredState?: RequestedPipeStateDescribeResponse | undefined;

  /**
   * The state the pipe is in.
   *
   * @public
   */
  CurrentState?: PipeState | undefined;

  /**
   * The reason the pipe is in its current state.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * The ARN of the source resource.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The parameters required to set up a source for your pipe.
   *
   * @public
   */
  SourceParameters?: PipeSourceParameters | undefined;

  /**
   * The ARN of the enrichment resource.
   *
   * @public
   */
  Enrichment?: string | undefined;

  /**
   * The parameters required to set up enrichment on your pipe.
   *
   * @public
   */
  EnrichmentParameters?: PipeEnrichmentParameters | undefined;

  /**
   * The ARN of the target resource.
   *
   * @public
   */
  Target?: string | undefined;

  /**
   * The parameters required to set up a target for your pipe.
   *
   * For more information about pipe target parameters, including how to use dynamic path parameters, see [Target parameters](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  TargetParameters?: PipeTargetParameters | undefined;

  /**
   * The ARN of the role that allows the pipe to send data to the target.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The list of key-value pairs to associate with the pipe.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The time the pipe was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * When the pipe was last updated, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The logging configuration settings for the pipe.
   *
   * @public
   */
  LogConfiguration?: PipeLogConfiguration | undefined;

  /**
   * The identifier of the KMS customer managed key for EventBridge to use to encrypt pipe data, if one has been specified.
   *
   * For more information, see [Data encryption in EventBridge](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-encryption.html) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  KmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface ListPipesRequest {
  /**
   * A value that will return a subset of the pipes associated with this account. For example, `"NamePrefix": "ABC"` will return all endpoints with "ABC" in the name.
   *
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * The state the pipe should be in.
   *
   * @public
   */
  DesiredState?: RequestedPipeState | undefined;

  /**
   * The state the pipe is in.
   *
   * @public
   */
  CurrentState?: PipeState | undefined;

  /**
   * The prefix matching the pipe source.
   *
   * @public
   */
  SourcePrefix?: string | undefined;

  /**
   * The prefix matching the pipe target.
   *
   * @public
   */
  TargetPrefix?: string | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of pipes to include in the response.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * An object that represents a pipe. Amazon EventBridgePipes connect event sources to targets and reduces the need for specialized knowledge and integration code.
 *
 * @public
 */
export interface Pipe {
  /**
   * The name of the pipe.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ARN of the pipe.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The state the pipe should be in.
   *
   * @public
   */
  DesiredState?: RequestedPipeState | undefined;

  /**
   * The state the pipe is in.
   *
   * @public
   */
  CurrentState?: PipeState | undefined;

  /**
   * The reason the pipe is in its current state.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * The time the pipe was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * When the pipe was last updated, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The ARN of the source resource.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * The ARN of the target resource.
   *
   * @public
   */
  Target?: string | undefined;

  /**
   * The ARN of the enrichment resource.
   *
   * @public
   */
  Enrichment?: string | undefined;
}

/**
 * @public
 */
export interface ListPipesResponse {
  /**
   * The pipes returned by the call.
   *
   * @public
   */
  Pipes?: Pipe[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the pipe for which you want to view tags.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The list of key-value pairs to associate with the pipe.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartPipeRequest {
  /**
   * The name of the pipe.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartPipeResponse {
  /**
   * The ARN of the pipe.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the pipe.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The state the pipe should be in.
   *
   * @public
   */
  DesiredState?: RequestedPipeState | undefined;

  /**
   * The state the pipe is in.
   *
   * @public
   */
  CurrentState?: PipeState | undefined;

  /**
   * The time the pipe was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * When the pipe was last updated, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface StopPipeRequest {
  /**
   * The name of the pipe.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StopPipeResponse {
  /**
   * The ARN of the pipe.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the pipe.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The state the pipe should be in.
   *
   * @public
   */
  DesiredState?: RequestedPipeState | undefined;

  /**
   * The state the pipe is in.
   *
   * @public
   */
  CurrentState?: PipeState | undefined;

  /**
   * The time the pipe was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * When the pipe was last updated, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * The parameters for using an Active MQ broker as a source.
 *
 * @public
 */
export interface UpdatePipeSourceActiveMQBrokerParameters {
  /**
   * The credentials needed to access the resource.
   *
   * @public
   */
  Credentials: MQBrokerAccessCredentials | undefined;

  /**
   * The maximum number of records to include in each batch.
   *
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * The maximum length of a time to wait for events.
   *
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;
}

/**
 * The parameters for using a DynamoDB stream as a source.
 *
 * @public
 */
export interface UpdatePipeSourceDynamoDBStreamParameters {
  /**
   * The maximum number of records to include in each batch.
   *
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * Define the target queue to send dead-letter queue events to.
   *
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * Define how to handle item process failures. `AUTOMATIC_BISECT` halves each batch and retry each half until all the records are processed or there is one failed message left in the batch.
   *
   * @public
   */
  OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams | undefined;

  /**
   * The maximum length of a time to wait for events.
   *
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;

  /**
   * Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, EventBridge never discards old records.
   *
   * @public
   */
  MaximumRecordAgeInSeconds?: number | undefined;

  /**
   * Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.
   *
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * The number of batches to process concurrently from each shard. The default value is 1.
   *
   * @public
   */
  ParallelizationFactor?: number | undefined;
}

/**
 * The parameters for using a Kinesis stream as a source.
 *
 * @public
 */
export interface UpdatePipeSourceKinesisStreamParameters {
  /**
   * The maximum number of records to include in each batch.
   *
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * Define the target queue to send dead-letter queue events to.
   *
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * Define how to handle item process failures. `AUTOMATIC_BISECT` halves each batch and retry each half until all the records are processed or there is one failed message left in the batch.
   *
   * @public
   */
  OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams | undefined;

  /**
   * The maximum length of a time to wait for events.
   *
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;

  /**
   * Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, EventBridge never discards old records.
   *
   * @public
   */
  MaximumRecordAgeInSeconds?: number | undefined;

  /**
   * Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.
   *
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * The number of batches to process concurrently from each shard. The default value is 1.
   *
   * @public
   */
  ParallelizationFactor?: number | undefined;
}

/**
 * The parameters for using an MSK stream as a source.
 *
 * @public
 */
export interface UpdatePipeSourceManagedStreamingKafkaParameters {
  /**
   * The maximum number of records to include in each batch.
   *
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * The credentials needed to access the resource.
   *
   * @public
   */
  Credentials?: MSKAccessCredentials | undefined;

  /**
   * The maximum length of a time to wait for events.
   *
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;
}

/**
 * The parameters for using a Rabbit MQ broker as a source.
 *
 * @public
 */
export interface UpdatePipeSourceRabbitMQBrokerParameters {
  /**
   * The credentials needed to access the resource.
   *
   * @public
   */
  Credentials: MQBrokerAccessCredentials | undefined;

  /**
   * The maximum number of records to include in each batch.
   *
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * The maximum length of a time to wait for events.
   *
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;
}

/**
 * The parameters for using a self-managed Apache Kafka stream as a source.
 *
 * A *self managed* cluster refers to any Apache Kafka cluster not hosted by Amazon Web Services. This includes both clusters you manage yourself, as well as those hosted by a third-party provider, such as [Confluent Cloud](https://www.confluent.io/), [CloudKarafka](https://www.cloudkarafka.com/), or [Redpanda](https://redpanda.com/). For more information, see [Apache Kafka streams as a source](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-kafka.html) in the *Amazon EventBridge User Guide*.
 *
 * @public
 */
export interface UpdatePipeSourceSelfManagedKafkaParameters {
  /**
   * The maximum number of records to include in each batch.
   *
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * The maximum length of a time to wait for events.
   *
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;

  /**
   * The credentials needed to access the resource.
   *
   * @public
   */
  Credentials?: SelfManagedKafkaAccessConfigurationCredentials | undefined;

  /**
   * The ARN of the Secrets Manager secret used for certification.
   *
   * @public
   */
  ServerRootCaCertificate?: string | undefined;

  /**
   * This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used.
   *
   * @public
   */
  Vpc?: SelfManagedKafkaAccessConfigurationVpc | undefined;
}

/**
 * The parameters for using a Amazon SQS stream as a source.
 *
 * @public
 */
export interface UpdatePipeSourceSqsQueueParameters {
  /**
   * The maximum number of records to include in each batch.
   *
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * The maximum length of a time to wait for events.
   *
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;
}

/**
 * The parameters required to set up a source for your pipe.
 *
 * @public
 */
export interface UpdatePipeSourceParameters {
  /**
   * The collection of event patterns used to filter events.
   *
   * To remove a filter, specify a `FilterCriteria` object with an empty array of `Filter` objects.
   *
   * For more information, see [Events and Event Patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  FilterCriteria?: FilterCriteria | undefined;

  /**
   * The parameters for using a Kinesis stream as a source.
   *
   * @public
   */
  KinesisStreamParameters?: UpdatePipeSourceKinesisStreamParameters | undefined;

  /**
   * The parameters for using a DynamoDB stream as a source.
   *
   * @public
   */
  DynamoDBStreamParameters?: UpdatePipeSourceDynamoDBStreamParameters | undefined;

  /**
   * The parameters for using a Amazon SQS stream as a source.
   *
   * @public
   */
  SqsQueueParameters?: UpdatePipeSourceSqsQueueParameters | undefined;

  /**
   * The parameters for using an Active MQ broker as a source.
   *
   * @public
   */
  ActiveMQBrokerParameters?: UpdatePipeSourceActiveMQBrokerParameters | undefined;

  /**
   * The parameters for using a Rabbit MQ broker as a source.
   *
   * @public
   */
  RabbitMQBrokerParameters?: UpdatePipeSourceRabbitMQBrokerParameters | undefined;

  /**
   * The parameters for using an MSK stream as a source.
   *
   * @public
   */
  ManagedStreamingKafkaParameters?: UpdatePipeSourceManagedStreamingKafkaParameters | undefined;

  /**
   * The parameters for using a self-managed Apache Kafka stream as a source.
   *
   * A *self managed* cluster refers to any Apache Kafka cluster not hosted by Amazon Web Services. This includes both clusters you manage yourself, as well as those hosted by a third-party provider, such as [Confluent Cloud](https://www.confluent.io/), [CloudKarafka](https://www.cloudkarafka.com/), or [Redpanda](https://redpanda.com/). For more information, see [Apache Kafka streams as a source](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-kafka.html) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  SelfManagedKafkaParameters?: UpdatePipeSourceSelfManagedKafkaParameters | undefined;
}

/**
 * @public
 */
export interface UpdatePipeRequest {
  /**
   * The name of the pipe.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the pipe.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The state the pipe should be in.
   *
   * @public
   */
  DesiredState?: RequestedPipeState | undefined;

  /**
   * The parameters required to set up a source for your pipe.
   *
   * @public
   */
  SourceParameters?: UpdatePipeSourceParameters | undefined;

  /**
   * The ARN of the enrichment resource.
   *
   * @public
   */
  Enrichment?: string | undefined;

  /**
   * The parameters required to set up enrichment on your pipe.
   *
   * @public
   */
  EnrichmentParameters?: PipeEnrichmentParameters | undefined;

  /**
   * The ARN of the target resource.
   *
   * @public
   */
  Target?: string | undefined;

  /**
   * The parameters required to set up a target for your pipe.
   *
   * For more information about pipe target parameters, including how to use dynamic path parameters, see [Target parameters](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  TargetParameters?: PipeTargetParameters | undefined;

  /**
   * The ARN of the role that allows the pipe to send data to the target.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The logging configuration settings for the pipe.
   *
   * @public
   */
  LogConfiguration?: PipeLogConfigurationParameters | undefined;

  /**
   * The identifier of the KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt pipe data. The identifier can be the key Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN.
   *
   * To update a pipe that is using the default Amazon Web Services owned key to use a customer managed key instead, or update a pipe that is using a customer managed key to use a different customer managed key, specify a customer managed key identifier.
   *
   * To update a pipe that is using a customer managed key to use the default Amazon Web Services owned key, specify an empty string.
   *
   * For more information, see [Managing keys](https://docs.aws.amazon.com/kms/latest/developerguide/getting-started.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  KmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePipeResponse {
  /**
   * The ARN of the pipe.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the pipe.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The state the pipe should be in.
   *
   * @public
   */
  DesiredState?: RequestedPipeState | undefined;

  /**
   * The state the pipe is in.
   *
   * @public
   */
  CurrentState?: PipeState | undefined;

  /**
   * The time the pipe was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * When the pipe was last updated, in [ISO-8601 format](https://www.w3.org/TR/NOTE-datetime) (YYYY-MM-DDThh:mm:ss.sTZD).
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the pipe.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of key-value pairs associated with the pipe.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the pipe.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of tag keys to remove from the pipe.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
