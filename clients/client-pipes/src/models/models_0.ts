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
 * <p>This structure specifies the VPC subnets and security groups for the task, and whether a
 *          public IP address is to be used. This structure is relevant only for ECS tasks that use the
 *             <code>awsvpc</code> network mode.</p>
 * @public
 */
export interface AwsVpcConfiguration {
  /**
   * <p>Specifies the subnets associated with the task. These subnets must all be in the same
   *          VPC. You can specify as many as 16 subnets.</p>
   * @public
   */
  Subnets: string[] | undefined;

  /**
   * <p>Specifies the security groups associated with the task. These security groups must all
   *          be in the same VPC. You can specify as many as five security groups. If you do not specify
   *          a security group, the default security group for the VPC is used.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>Specifies whether the task's elastic network interface receives a public IP address. You
   *          can specify <code>ENABLED</code> only when <code>LaunchType</code> in
   *             <code>EcsParameters</code> is set to <code>FARGATE</code>.</p>
   * @public
   */
  AssignPublicIp?: AssignPublicIp | undefined;
}

/**
 * <p>The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000.
 *          If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job.</p>
 * @public
 */
export interface BatchArrayProperties {
  /**
   * <p>The size of the array, if this is an array batch job.</p>
   * @public
   */
  Size?: number | undefined;
}

/**
 * <p>The environment variables to send to the container. You can add new environment
 *          variables, which are added to the container at launch, or you can override the existing
 *          environment variables from the Docker image or the task definition.</p>
 *          <note>
 *             <p>Environment variables cannot start with "<code>Batch</code>". This
 *             naming convention is reserved for variables that Batch sets.</p>
 *          </note>
 * @public
 */
export interface BatchEnvironmentVariable {
  /**
   * <p>The name of the key-value pair. For environment variables, this is the name of the
   *          environment variable.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The value of the key-value pair. For environment variables, this is the value of the
   *          environment variable.</p>
   * @public
   */
  Value?: string | undefined;
}

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
 * <p>The type and amount of a resource to assign to a container. The supported resources
 *          include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.</p>
 * @public
 */
export interface BatchResourceRequirement {
  /**
   * <p>The type of resource to assign to a container. The supported resources include
   *             <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.</p>
   * @public
   */
  Type: BatchResourceRequirementType | undefined;

  /**
   * <p>The quantity of the specified resource to reserve for the container. The values vary
   *          based on the <code>type</code> specified.</p>
   *          <dl>
   *             <dt>type="GPU"</dt>
   *             <dd>
   *                <p>The number of physical GPUs to reserve for the container. Make sure that the
   *                   number of GPUs reserved for all containers in a job doesn't exceed the number of
   *                   available GPUs on the compute resource that the job is launched on.</p>
   *                <note>
   *                   <p>GPUs aren't available for jobs that are running on Fargate
   *                      resources.</p>
   *                </note>
   *             </dd>
   *             <dt>type="MEMORY"</dt>
   *             <dd>
   *                <p>The memory hard limit (in MiB) present to the container. This parameter is
   *                   supported for jobs that are running on EC2 resources. If your container attempts
   *                   to exceed the memory specified, the container is terminated. This parameter maps
   *                   to <code>Memory</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container"> Create a
   *                      container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and
   *                   the <code>--memory</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. You
   *                   must specify at least 4 MiB of memory for a job. This is required but can be
   *                   specified in several places for multi-node parallel (MNP) jobs. It must be
   *                   specified for each node at least once. This parameter maps to <code>Memory</code>
   *                   in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">
   *                      Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and
   *                   the <code>--memory</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *                <note>
   *                   <p>If you're trying to maximize your resource utilization by providing your
   *                      jobs as much memory as possible for a particular instance type, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html">Memory management</a> in the <i>Batch User
   *                         Guide</i>.</p>
   *                </note>
   *                <p>For jobs that are running on Fargate resources, then
   *                      <code>value</code> is the hard limit (in MiB), and must match one of the
   *                   supported values and the <code>VCPU</code> values must be one of the values
   *                   supported for that memory value.</p>
   *                <dl>
   *                   <dt>value = 512</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 0.25</p>
   *                   </dd>
   *                   <dt>value = 1024</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 0.25 or 0.5</p>
   *                   </dd>
   *                   <dt>value = 2048</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 0.25, 0.5, or 1</p>
   *                   </dd>
   *                   <dt>value = 3072</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 0.5, or 1</p>
   *                   </dd>
   *                   <dt>value = 4096</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 0.5, 1, or 2</p>
   *                   </dd>
   *                   <dt>value = 5120, 6144, or 7168</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 1 or 2</p>
   *                   </dd>
   *                   <dt>value = 8192</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 1, 2, 4, or 8</p>
   *                   </dd>
   *                   <dt>value = 9216, 10240, 11264, 12288, 13312, 14336, or 15360</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 2 or 4</p>
   *                   </dd>
   *                   <dt>value = 16384</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 2, 4, or 8</p>
   *                   </dd>
   *                   <dt>value = 17408, 18432, 19456, 21504, 22528, 23552, 25600, 26624, 27648,
   *                         29696, or 30720</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 4</p>
   *                   </dd>
   *                   <dt>value = 20480, 24576, or 28672</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 4 or 8</p>
   *                   </dd>
   *                   <dt>value = 36864, 45056, 53248, or 61440</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 8</p>
   *                   </dd>
   *                   <dt>value = 32768, 40960, 49152, or 57344</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 8 or 16</p>
   *                   </dd>
   *                   <dt>value = 65536, 73728, 81920, 90112, 98304, 106496, 114688, or
   *                         122880</dt>
   *                   <dd>
   *                      <p>
   *                         <code>VCPU</code> = 16</p>
   *                   </dd>
   *                </dl>
   *             </dd>
   *             <dt>type="VCPU"</dt>
   *             <dd>
   *                <p>The number of vCPUs reserved for the container. This parameter maps to
   *                      <code>CpuShares</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container"> Create a
   *                      container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and
   *                   the <code>--cpu-shares</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. Each
   *                   vCPU is equivalent to 1,024 CPU shares. For EC2 resources, you must specify at
   *                   least one vCPU. This is required but can be specified in several places; it must
   *                   be specified for each node at least once.</p>
   *                <p>The default for the Fargate On-Demand vCPU resource count quota
   *                   is 6 vCPUs. For more information about Fargate quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/ecs-service.html#service-quotas-fargate">Fargate quotas</a> in the <i>Amazon Web Services
   *                      General Reference</i>.</p>
   *                <p>For jobs that are running on Fargate resources, then
   *                      <code>value</code> must match one of the supported values and the
   *                      <code>MEMORY</code> values must be one of the values supported for that
   *                      <code>VCPU</code> value. The supported values are 0.25, 0.5, 1, 2, 4, 8, and
   *                   16</p>
   *                <dl>
   *                   <dt>value = 0.25</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 512, 1024, or 2048</p>
   *                   </dd>
   *                   <dt>value = 0.5</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 1024, 2048, 3072, or 4096</p>
   *                   </dd>
   *                   <dt>value = 1</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 2048, 3072, 4096, 5120, 6144, 7168, or
   *                            8192</p>
   *                   </dd>
   *                   <dt>value = 2</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 4096, 5120, 6144, 7168, 8192, 9216, 10240,
   *                            11264, 12288, 13312, 14336, 15360, or 16384</p>
   *                   </dd>
   *                   <dt>value = 4</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 8192, 9216, 10240, 11264, 12288, 13312, 14336,
   *                            15360, 16384, 17408, 18432, 19456, 20480, 21504, 22528, 23552, 24576,
   *                            25600, 26624, 27648, 28672, 29696, or 30720</p>
   *                   </dd>
   *                   <dt>value = 8</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 16384, 20480, 24576, 28672, 32768, 36864, 40960,
   *                            45056, 49152, 53248, 57344, or 61440 </p>
   *                   </dd>
   *                   <dt>value = 16</dt>
   *                   <dd>
   *                      <p>
   *                         <code>MEMORY</code> = 32768, 40960, 49152, 57344, 65536, 73728, 81920,
   *                            90112, 98304, 106496, 114688, or 122880 </p>
   *                   </dd>
   *                </dl>
   *             </dd>
   *          </dl>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>The overrides that are sent to a container.</p>
 * @public
 */
export interface BatchContainerOverrides {
  /**
   * <p>The command to send to the container that overrides the default command from the Docker
   *          image or the task definition.</p>
   * @public
   */
  Command?: string[] | undefined;

  /**
   * <p>The environment variables to send to the container. You can add new environment
   *          variables, which are added to the container at launch, or you can override the existing
   *          environment variables from the Docker image or the task definition.</p>
   *          <note>
   *             <p>Environment variables cannot start with "<code>Batch</code>". This
   *             naming convention is reserved for variables that Batch sets.</p>
   *          </note>
   * @public
   */
  Environment?: BatchEnvironmentVariable[] | undefined;

  /**
   * <p>The instance type to use for a multi-node parallel job.</p>
   *          <note>
   *             <p>This parameter isn't applicable to single-node container jobs or jobs that run on
   *             Fargate resources, and shouldn't be provided.</p>
   *          </note>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The type and amount of resources to assign to a container. This overrides the settings
   *          in the job definition. The supported resources include <code>GPU</code>,
   *             <code>MEMORY</code>, and <code>VCPU</code>.</p>
   * @public
   */
  ResourceRequirements?: BatchResourceRequirement[] | undefined;
}

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
 * <p>An object that represents an Batch job dependency.</p>
 * @public
 */
export interface BatchJobDependency {
  /**
   * <p>The job ID of the Batch job that's associated with this
   *          dependency.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The type of the job dependency.</p>
   * @public
   */
  Type?: BatchJobDependencyType | undefined;
}

/**
 * <p>The retry strategy that's associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html"> Automated job
 *             retries</a> in the <i>Batch User Guide</i>.</p>
 * @public
 */
export interface BatchRetryStrategy {
  /**
   * <p>The number of times to move a job to the <code>RUNNABLE</code> status. If the value of
   *             <code>attempts</code> is greater than one, the job is retried on failure the same number
   *          of attempts as the value.</p>
   * @public
   */
  Attempts?: number | undefined;
}

/**
 * <p>The details of a capacity provider strategy. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html">CapacityProviderStrategyItem</a> in the Amazon ECS API Reference.</p>
 * @public
 */
export interface CapacityProviderStrategyItem {
  /**
   * <p>The short name of the capacity provider.</p>
   * @public
   */
  capacityProvider: string | undefined;

  /**
   * <p>The weight value designates the relative percentage of the total number of tasks
   *          launched that should use the specified capacity provider. The weight value is taken into
   *          consideration after the base value, if defined, is satisfied.</p>
   * @public
   */
  weight?: number | undefined;

  /**
   * <p>The base value designates how many tasks, at a minimum, to run on the specified capacity
   *          provider. Only one capacity provider in a capacity provider strategy can have a base
   *          defined. If no value is specified, the default value of 0 is used. </p>
   * @public
   */
  base?: number | undefined;
}

/**
 * <p>The Amazon CloudWatch Logs logging configuration settings for the pipe.</p>
 * @public
 */
export interface CloudwatchLogsLogDestination {
  /**
   * <p>The Amazon Web Services Resource Name (ARN) for the CloudWatch log group to which EventBridge sends the log records.</p>
   * @public
   */
  LogGroupArn?: string | undefined;
}

/**
 * <p>The Amazon CloudWatch Logs logging configuration settings for the pipe.</p>
 * @public
 */
export interface CloudwatchLogsLogDestinationParameters {
  /**
   * <p>The Amazon Web Services Resource Name (ARN) for the CloudWatch log group to which EventBridge sends the log records.</p>
   * @public
   */
  LogGroupArn: string | undefined;
}

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
 * <p>These are custom parameter to be used when the target is an API Gateway REST APIs
 *          or EventBridge ApiDestinations. In the latter case, these are merged with any
 *          InvocationParameters specified on the Connection, with any values from the Connection
 *          taking precedence.</p>
 * @public
 */
export interface PipeEnrichmentHttpParameters {
  /**
   * <p>The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*").</p>
   * @public
   */
  PathParameterValues?: string[] | undefined;

  /**
   * <p>The headers that need to be sent as part of request invoking the API Gateway REST
   *          API or EventBridge ApiDestination.</p>
   * @public
   */
  HeaderParameters?: Record<string, string> | undefined;

  /**
   * <p>The query string keys/values that need to be sent as part of request invoking the
   *             API Gateway REST API or EventBridge ApiDestination.</p>
   * @public
   */
  QueryStringParameters?: Record<string, string> | undefined;
}

/**
 * <p>The parameters required to set up enrichment on your pipe.</p>
 * @public
 */
export interface PipeEnrichmentParameters {
  /**
   * <p>Valid JSON text passed to the enrichment. In this case, nothing from the event itself is
   *          passed to the enrichment. For more information, see <a href="http://www.rfc-editor.org/rfc/rfc7159.txt">The JavaScript Object Notation (JSON)
   *             Data Interchange Format</a>.</p>
   *          <p>To remove an input template, specify an empty string.</p>
   * @public
   */
  InputTemplate?: string | undefined;

  /**
   * <p>Contains the HTTP parameters to use when the target is a API Gateway REST
   *          endpoint or EventBridge ApiDestination.</p>
   *          <p>If you specify an API Gateway REST API or EventBridge ApiDestination as a
   *          target, you can use this parameter to specify headers, path parameters, and query string
   *          keys/values as part of your target invoking request. If you're using ApiDestinations, the
   *          corresponding Connection can also have these values configured. In case of any conflicting
   *          keys, values from the Connection take precedence.</p>
   * @public
   */
  HttpParameters?: PipeEnrichmentHttpParameters | undefined;
}

/**
 * <p>The Amazon Data Firehose logging configuration settings for the pipe.</p>
 * @public
 */
export interface FirehoseLogDestinationParameters {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the Firehose delivery stream to
   *          which EventBridge delivers the pipe log records.</p>
   * @public
   */
  DeliveryStreamArn: string | undefined;
}

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
 * <p>The Amazon S3 logging configuration settings for the pipe.</p>
 * @public
 */
export interface S3LogDestinationParameters {
  /**
   * <p>Specifies the name of the Amazon S3 bucket to which EventBridge delivers
   *          the log records for the pipe.</p>
   * @public
   */
  BucketName: string | undefined;

  /**
   * <p>Specifies the Amazon Web Services account that owns the Amazon S3 bucket to which
   *             EventBridge delivers the log records for the pipe.</p>
   * @public
   */
  BucketOwner: string | undefined;

  /**
   * <p>How EventBridge should format the log records.</p>
   *          <p>EventBridge currently only supports <code>json</code> formatting.</p>
   * @public
   */
  OutputFormat?: S3OutputFormat | undefined;

  /**
   * <p>Specifies any prefix text with which to begin Amazon S3 log object names.</p>
   *          <p>You can use prefixes to organize the data that you store in Amazon S3 buckets. A
   *          prefix is a string of characters at the beginning of the object key name. A prefix can be
   *          any length, subject to the maximum length of the object key name (1,024 bytes). For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html">Organizing objects using
   *             prefixes</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * <p>Specifies the logging configuration settings for the pipe.</p>
 *          <p>When you call <code>UpdatePipe</code>, EventBridge updates the fields in the
 *             <code>PipeLogConfigurationParameters</code> object atomically as one and overrides
 *          existing values. This is by design. If you don't specify an optional field in any of the
 *             Amazon Web Services service parameters objects
 *             (<code>CloudwatchLogsLogDestinationParameters</code>,
 *             <code>FirehoseLogDestinationParameters</code>, or
 *             <code>S3LogDestinationParameters</code>), EventBridge sets that field to its
 *          system-default value during the update. </p>
 *          <p>For example, suppose when you created the pipe you specified a Firehose stream
 *          log destination. You then update the pipe to add an Amazon S3 log destination. In
 *          addition to specifying the <code>S3LogDestinationParameters</code> for the new log
 *          destination, you must also specify the fields in the
 *             <code>FirehoseLogDestinationParameters</code> object in order to retain the Firehose stream log destination. </p>
 *          <p>For more information on generating pipe log records, see <a href="eventbridge/latest/userguide/eb-pipes-logs.html">Log EventBridge
 *             Pipes</a> in the <i>Amazon EventBridge User Guide</i>.</p>
 * @public
 */
export interface PipeLogConfigurationParameters {
  /**
   * <p>The Amazon S3 logging configuration settings for the pipe.</p>
   * @public
   */
  S3LogDestination?: S3LogDestinationParameters | undefined;

  /**
   * <p>The Amazon Data Firehose logging configuration settings for the pipe.</p>
   * @public
   */
  FirehoseLogDestination?: FirehoseLogDestinationParameters | undefined;

  /**
   * <p>The Amazon CloudWatch Logs logging configuration settings for the pipe.</p>
   * @public
   */
  CloudwatchLogsLogDestination?: CloudwatchLogsLogDestinationParameters | undefined;

  /**
   * <p>The level of logging detail to include. This applies to all log destinations for the pipe.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-logs.html#eb-pipes-logs-level">Specifying
   *                EventBridge Pipes log level</a> in the <i>Amazon EventBridge User
   *             Guide</i>.</p>
   * @public
   */
  Level: LogLevel | undefined;

  /**
   * <p>Specify <code>ALL</code> to include the execution data (specifically, the
   *             <code>payload</code>, <code>awsRequest</code>, and <code>awsResponse</code> fields) in
   *          the log messages for this pipe.</p>
   *          <p>This applies to all log destinations for the pipe.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-logs.html#eb-pipes-logs-execution-data">Including execution data in logs</a> in the <i>Amazon EventBridge User
   *             Guide</i>.</p>
   *          <p>By default, execution data is not included.</p>
   * @public
   */
  IncludeExecutionData?: IncludeExecutionDataOption[] | undefined;
}

/**
 * <p>The Secrets Manager secret that stores your broker credentials.</p>
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
   * <p>The ARN of the Secrets Manager secret.</p>
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
 * <p>The parameters for using an Active MQ broker as a source.</p>
 * @public
 */
export interface PipeSourceActiveMQBrokerParameters {
  /**
   * <p>The credentials needed to access the resource.</p>
   * @public
   */
  Credentials: MQBrokerAccessCredentials | undefined;

  /**
   * <p>The name of the destination queue to consume.</p>
   * @public
   */
  QueueName: string | undefined;

  /**
   * <p>The maximum number of records to include in each batch.</p>
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;
}

/**
 * <p>A <code>DeadLetterConfig</code> object that contains information about a dead-letter
 *          queue configuration.</p>
 * @public
 */
export interface DeadLetterConfig {
  /**
   * <p>The ARN of the specified target for the dead-letter queue. </p>
   *          <p>For Amazon Kinesis stream and Amazon DynamoDB stream sources, specify
   *          either an Amazon SNS topic or Amazon SQS queue ARN.</p>
   * @public
   */
  Arn?: string | undefined;
}

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
 * <p>The parameters for using a DynamoDB stream as a source.</p>
 * @public
 */
export interface PipeSourceDynamoDBStreamParameters {
  /**
   * <p>The maximum number of records to include in each batch.</p>
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * <p>Define the target queue to send dead-letter queue events to.</p>
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * <p>Define how to handle item process failures. <code>AUTOMATIC_BISECT</code> halves each batch and retry each half
   * until all the records are processed or there is one failed message left in the batch.</p>
   * @public
   */
  OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams | undefined;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;

  /**
   * <p>Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite.
   * When the value is set to infinite, EventBridge never discards old records. </p>
   * @public
   */
  MaximumRecordAgeInSeconds?: number | undefined;

  /**
   * <p>Discard records after the specified number of retries. The default value is -1, which sets the maximum number of
   * retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.</p>
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * <p>The number of batches to process concurrently from each shard. The default value is 1.</p>
   * @public
   */
  ParallelizationFactor?: number | undefined;

  /**
   * <p>The position in a stream from which to start reading.</p>
   * @public
   */
  StartingPosition: DynamoDBStreamStartPosition | undefined;
}

/**
 * <p>Filter events using an event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
 *             Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The event pattern.</p>
   * @public
   */
  Pattern?: string | undefined;
}

/**
 * <p>The collection of event patterns used to filter events.</p>
 *          <p>To remove a filter, specify a <code>FilterCriteria</code> object with an empty array of <code>Filter</code> objects.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
 *          Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
 * @public
 */
export interface FilterCriteria {
  /**
   * <p>The event patterns.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

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
 * <p>The parameters for using a Kinesis stream as a source.</p>
 * @public
 */
export interface PipeSourceKinesisStreamParameters {
  /**
   * <p>The maximum number of records to include in each batch.</p>
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * <p>Define the target queue to send dead-letter queue events to.</p>
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * <p>Define how to handle item process failures. <code>AUTOMATIC_BISECT</code> halves each batch and retry each half
   * until all the records are processed or there is one failed message left in the batch.</p>
   * @public
   */
  OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams | undefined;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;

  /**
   * <p>Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite.
   * When the value is set to infinite, EventBridge never discards old records. </p>
   * @public
   */
  MaximumRecordAgeInSeconds?: number | undefined;

  /**
   * <p>Discard records after the specified number of retries. The default value is -1, which sets the maximum number of
   * retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.</p>
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * <p>The number of batches to process concurrently from each shard. The default value is 1.</p>
   * @public
   */
  ParallelizationFactor?: number | undefined;

  /**
   * <p>The position in a stream from which to start reading.</p>
   * @public
   */
  StartingPosition: KinesisStreamStartPosition | undefined;

  /**
   * <p>With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which
   *          to start reading, in Unix time seconds.</p>
   * @public
   */
  StartingPositionTimestamp?: Date | undefined;
}

/**
 * <p>The Secrets Manager secret that stores your stream credentials.</p>
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
   * <p>The ARN of the Secrets Manager secret.</p>
   * @public
   */
  export interface SaslScram512AuthMember {
    SaslScram512Auth: string;
    ClientCertificateTlsAuth?: never;
    $unknown?: never;
  }

  /**
   * <p>The ARN of the Secrets Manager secret.</p>
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
 * <p>The parameters for using an MSK stream as a source.</p>
 * @public
 */
export interface PipeSourceManagedStreamingKafkaParameters {
  /**
   * <p>The name of the topic that the pipe will read from.</p>
   * @public
   */
  TopicName: string | undefined;

  /**
   * <p>The position in a stream from which to start reading.</p>
   * @public
   */
  StartingPosition?: MSKStartPosition | undefined;

  /**
   * <p>The maximum number of records to include in each batch.</p>
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;

  /**
   * <p>The name of the destination queue to consume.</p>
   * @public
   */
  ConsumerGroupID?: string | undefined;

  /**
   * <p>The credentials needed to access the resource.</p>
   * @public
   */
  Credentials?: MSKAccessCredentials | undefined;
}

/**
 * <p>The parameters for using a Rabbit MQ broker as a source.</p>
 * @public
 */
export interface PipeSourceRabbitMQBrokerParameters {
  /**
   * <p>The credentials needed to access the resource.</p>
   * @public
   */
  Credentials: MQBrokerAccessCredentials | undefined;

  /**
   * <p>The name of the destination queue to consume.</p>
   * @public
   */
  QueueName: string | undefined;

  /**
   * <p>The name of the virtual host associated with the source broker.</p>
   * @public
   */
  VirtualHost?: string | undefined;

  /**
   * <p>The maximum number of records to include in each batch.</p>
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;
}

/**
 * <p>The Secrets Manager secret that stores your stream credentials.</p>
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
   * <p>The ARN of the Secrets Manager secret.</p>
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
   * <p>The ARN of the Secrets Manager secret.</p>
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
   * <p>The ARN of the Secrets Manager secret.</p>
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
   * <p>The ARN of the Secrets Manager secret.</p>
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
 * <p>This structure specifies the VPC subnets and security groups for the stream, and whether
 *          a public IP address is to be used.</p>
 * @public
 */
export interface SelfManagedKafkaAccessConfigurationVpc {
  /**
   * <p>Specifies the subnets associated with the stream. These subnets must all be in the same
   *          VPC. You can specify as many as 16 subnets.</p>
   * @public
   */
  Subnets?: string[] | undefined;

  /**
   * <p>Specifies the security groups associated with the stream. These security groups must all
   *          be in the same VPC. You can specify as many as five security groups.</p>
   * @public
   */
  SecurityGroup?: string[] | undefined;
}

/**
 * <p>The parameters for using a self-managed Apache Kafka stream as a source.</p>
 *          <p>A <i>self managed</i> cluster refers to any Apache Kafka cluster not hosted by Amazon Web Services.
 *     This includes both clusters you manage yourself, as well as those hosted by a third-party
 *     provider, such as <a href="https://www.confluent.io/">Confluent
 *       Cloud</a>, <a href="https://www.cloudkarafka.com/">CloudKarafka</a>, or <a href="https://redpanda.com/">Redpanda</a>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-kafka.html">Apache Kafka streams as a source</a> in the <i>Amazon EventBridge User Guide</i>.</p>
 * @public
 */
export interface PipeSourceSelfManagedKafkaParameters {
  /**
   * <p>The name of the topic that the pipe will read from.</p>
   * @public
   */
  TopicName: string | undefined;

  /**
   * <p>The position in a stream from which to start reading.</p>
   * @public
   */
  StartingPosition?: SelfManagedKafkaStartPosition | undefined;

  /**
   * <p>An array of server URLs.</p>
   * @public
   */
  AdditionalBootstrapServers?: string[] | undefined;

  /**
   * <p>The maximum number of records to include in each batch.</p>
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;

  /**
   * <p>The name of the destination queue to consume.</p>
   * @public
   */
  ConsumerGroupID?: string | undefined;

  /**
   * <p>The credentials needed to access the resource.</p>
   * @public
   */
  Credentials?: SelfManagedKafkaAccessConfigurationCredentials | undefined;

  /**
   * <p>The ARN of the Secrets Manager secret used for certification.</p>
   * @public
   */
  ServerRootCaCertificate?: string | undefined;

  /**
   * <p>This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used.</p>
   * @public
   */
  Vpc?: SelfManagedKafkaAccessConfigurationVpc | undefined;
}

/**
 * <p>The parameters for using a Amazon SQS stream as a source.</p>
 * @public
 */
export interface PipeSourceSqsQueueParameters {
  /**
   * <p>The maximum number of records to include in each batch.</p>
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;
}

/**
 * <p>The parameters required to set up a source for your pipe.</p>
 * @public
 */
export interface PipeSourceParameters {
  /**
   * <p>The collection of event patterns used to filter events.</p>
   *          <p>To remove a filter, specify a <code>FilterCriteria</code> object with an empty array of <code>Filter</code> objects.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
   *          Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  FilterCriteria?: FilterCriteria | undefined;

  /**
   * <p>The parameters for using a Kinesis stream as a source.</p>
   * @public
   */
  KinesisStreamParameters?: PipeSourceKinesisStreamParameters | undefined;

  /**
   * <p>The parameters for using a DynamoDB stream as a source.</p>
   * @public
   */
  DynamoDBStreamParameters?: PipeSourceDynamoDBStreamParameters | undefined;

  /**
   * <p>The parameters for using a Amazon SQS stream as a source.</p>
   * @public
   */
  SqsQueueParameters?: PipeSourceSqsQueueParameters | undefined;

  /**
   * <p>The parameters for using an Active MQ broker as a source.</p>
   * @public
   */
  ActiveMQBrokerParameters?: PipeSourceActiveMQBrokerParameters | undefined;

  /**
   * <p>The parameters for using a Rabbit MQ broker as a source.</p>
   * @public
   */
  RabbitMQBrokerParameters?: PipeSourceRabbitMQBrokerParameters | undefined;

  /**
   * <p>The parameters for using an MSK stream as a source.</p>
   * @public
   */
  ManagedStreamingKafkaParameters?: PipeSourceManagedStreamingKafkaParameters | undefined;

  /**
   * <p>The parameters for using a self-managed Apache Kafka stream as a source.</p>
   *          <p>A <i>self managed</i> cluster refers to any Apache Kafka cluster not hosted by Amazon Web Services.
   *     This includes both clusters you manage yourself, as well as those hosted by a third-party
   *     provider, such as <a href="https://www.confluent.io/">Confluent
   *       Cloud</a>, <a href="https://www.cloudkarafka.com/">CloudKarafka</a>, or <a href="https://redpanda.com/">Redpanda</a>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-kafka.html">Apache Kafka streams as a source</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  SelfManagedKafkaParameters?: PipeSourceSelfManagedKafkaParameters | undefined;
}

/**
 * <p>The parameters for using an Batch job as a target.</p>
 * @public
 */
export interface PipeTargetBatchJobParameters {
  /**
   * <p>The job definition used by this job. This value can be one of <code>name</code>,
   *             <code>name:revision</code>, or the Amazon Resource Name (ARN) for the job definition. If
   *          name is specified without a revision then the latest active revision is used.</p>
   * @public
   */
  JobDefinition: string | undefined;

  /**
   * <p>The name of the job. It can be up to 128 letters long. The first character must be
   *          alphanumeric, can contain uppercase and lowercase letters, numbers, hyphens (-), and
   *          underscores (_).</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000.
   *          If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job.</p>
   * @public
   */
  ArrayProperties?: BatchArrayProperties | undefined;

  /**
   * <p>The retry strategy to use for failed jobs. When a retry strategy is specified here, it
   *          overrides the retry strategy defined in the job definition.</p>
   * @public
   */
  RetryStrategy?: BatchRetryStrategy | undefined;

  /**
   * <p>The overrides that are sent to a container.</p>
   * @public
   */
  ContainerOverrides?: BatchContainerOverrides | undefined;

  /**
   * <p>A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can
   *          specify a <code>SEQUENTIAL</code> type dependency without specifying a job ID for array
   *          jobs so that each child array job completes sequentially, starting at index 0. You can also
   *          specify an <code>N_TO_N</code> type dependency with a job ID for array jobs. In that case,
   *          each index child of this job must wait for the corresponding index child of each dependency
   *          to complete before it can begin.</p>
   * @public
   */
  DependsOn?: BatchJobDependency[] | undefined;

  /**
   * <p>Additional parameters passed to the job that replace parameter substitution placeholders
   *          that are set in the job definition. Parameters are specified as a key and value pair
   *          mapping. Parameters included here override any corresponding parameter defaults from the
   *          job definition.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * <p>The parameters for using an CloudWatch Logs log stream as a target.</p>
 * @public
 */
export interface PipeTargetCloudWatchLogsParameters {
  /**
   * <p>The name of the log stream.</p>
   * @public
   */
  LogStreamName?: string | undefined;

  /**
   * <p>The time the event occurred, expressed as the number of milliseconds after Jan 1, 1970
   *          00:00:00 UTC.</p>
   * @public
   */
  Timestamp?: string | undefined;
}

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
 * <p>This structure specifies the network configuration for an Amazon ECS
 *          task.</p>
 * @public
 */
export interface NetworkConfiguration {
  /**
   * <p>Use this structure to specify the VPC subnets and security groups for the task, and
   *          whether a public IP address is to be used. This structure is relevant only for ECS tasks
   *          that use the <code>awsvpc</code> network mode.</p>
   * @public
   */
  awsvpcConfiguration?: AwsVpcConfiguration | undefined;
}

/**
 * <p>The environment variables to send to the container. You can add new environment
 *          variables, which are added to the container at launch, or you can override the existing
 *          environment variables from the Docker image or the task definition. You must also specify a
 *          container name.</p>
 * @public
 */
export interface EcsEnvironmentVariable {
  /**
   * <p>The name of the key-value pair. For environment variables, this is the name of the
   *          environment variable.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The value of the key-value pair. For environment variables, this is the value of the
   *          environment variable.</p>
   * @public
   */
  value?: string | undefined;
}

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
 * <p>A list of files containing the environment variables to pass to a container. You can
 *          specify up to ten environment files. The file must have a <code>.env</code> file extension.
 *          Each line in an environment file should contain an environment variable in
 *             <code>VARIABLE=VALUE</code> format. Lines beginning with <code>#</code> are treated as
 *          comments and are ignored. For more information about the environment variable file syntax,
 *          see <a href="https://docs.docker.com/compose/env-file/">Declare default environment
 *             variables in file</a>.</p>
 *          <p>If there are environment variables specified using the <code>environment</code>
 *          parameter in a container definition, they take precedence over the variables contained
 *          within an environment file. If multiple environment files are specified that contain the
 *          same variable, they're processed from the top down. We recommend that you use unique
 *          variable names. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html">Specifying environment
 *             variables</a> in the <i>Amazon Elastic Container Service Developer
 *          Guide</i>.</p>
 *          <p>This parameter is only supported for tasks hosted on Fargate using the
 *          following platform versions:</p>
 *          <ul>
 *             <li>
 *                <p>Linux platform version <code>1.4.0</code> or later.</p>
 *             </li>
 *             <li>
 *                <p>Windows platform version <code>1.0.0</code> or later.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface EcsEnvironmentFile {
  /**
   * <p>The file type to use. The only supported value is <code>s3</code>.</p>
   * @public
   */
  type: EcsEnvironmentFileType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 object containing the
   *          environment variable file.</p>
   * @public
   */
  value: string | undefined;
}

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
 * <p>The type and amount of a resource to assign to a container. The supported resource types
 *          are GPUs and Elastic Inference accelerators. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html">Working with
 *             GPUs on Amazon ECS</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html">Working with Amazon Elastic
 *             Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service
 *             Developer Guide</i>
 *          </p>
 * @public
 */
export interface EcsResourceRequirement {
  /**
   * <p>The type of resource to assign to a container. The supported values are <code>GPU</code>
   *          or <code>InferenceAccelerator</code>.</p>
   * @public
   */
  type: EcsResourceRequirementType | undefined;

  /**
   * <p>The value for the specified resource type.</p>
   *          <p>If the <code>GPU</code> type is used, the value is the number of physical
   *             <code>GPUs</code> the Amazon ECS container agent reserves for the container. The
   *          number of GPUs that's reserved for all containers in a task can't exceed the number of
   *          available GPUs on the container instance that the task is launched on.</p>
   *          <p>If the <code>InferenceAccelerator</code> type is used, the <code>value</code> matches
   *          the <code>deviceName</code> for an InferenceAccelerator specified in a task
   *          definition.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>The overrides that are sent to a container. An empty container override can be passed
 *          in. An example of an empty container override is <code>\{"containerOverrides": [ ] \}</code>.
 *          If a non-empty container override is specified, the <code>name</code> parameter must be
 *          included.</p>
 * @public
 */
export interface EcsContainerOverride {
  /**
   * <p>The command to send to the container that overrides the default command from the Docker
   *          image or the task definition. You must also specify a container name.</p>
   * @public
   */
  Command?: string[] | undefined;

  /**
   * <p>The number of <code>cpu</code> units reserved for the container, instead of the default
   *          value from the task definition. You must also specify a container name.</p>
   * @public
   */
  Cpu?: number | undefined;

  /**
   * <p>The environment variables to send to the container. You can add new environment
   *          variables, which are added to the container at launch, or you can override the existing
   *          environment variables from the Docker image or the task definition. You must also specify a
   *          container name.</p>
   * @public
   */
  Environment?: EcsEnvironmentVariable[] | undefined;

  /**
   * <p>A list of files containing the environment variables to pass to a container, instead of
   *          the value from the container definition.</p>
   * @public
   */
  EnvironmentFiles?: EcsEnvironmentFile[] | undefined;

  /**
   * <p>The hard limit (in MiB) of memory to present to the container, instead of the default
   *          value from the task definition. If your container attempts to exceed the memory specified
   *          here, the container is killed. You must also specify a container name.</p>
   * @public
   */
  Memory?: number | undefined;

  /**
   * <p>The soft limit (in MiB) of memory to reserve for the container, instead of the default
   *          value from the task definition. You must also specify a container name.</p>
   * @public
   */
  MemoryReservation?: number | undefined;

  /**
   * <p>The name of the container that receives the override. This parameter is required if any
   *          override is specified.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type and amount of a resource to assign to a container, instead of the default value
   *          from the task definition. The only supported resource is a GPU.</p>
   * @public
   */
  ResourceRequirements?: EcsResourceRequirement[] | undefined;
}

/**
 * <p>The amount of ephemeral storage to allocate for the task. This parameter is used to
 *          expand the total amount of ephemeral storage available, beyond the default amount, for
 *          tasks hosted on Fargate. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/userguide/using_data_volumes.html">Fargate task storage</a> in the <i>Amazon ECS User Guide
 *             for Fargate</i>.</p>
 *          <note>
 *             <p>This parameter is only supported for tasks hosted on Fargate using
 *             Linux platform version <code>1.4.0</code> or later. This parameter is not supported for
 *             Windows containers on Fargate.</p>
 *          </note>
 * @public
 */
export interface EcsEphemeralStorage {
  /**
   * <p>The total amount, in GiB, of ephemeral storage to set for the task. The minimum
   *          supported value is <code>21</code> GiB and the maximum supported value is <code>200</code>
   *          GiB.</p>
   * @public
   */
  sizeInGiB: number | undefined;
}

/**
 * <p>Details on an Elastic Inference accelerator task override. This parameter is used to
 *          override the Elastic Inference accelerator specified in the task definition. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/userguide/ecs-inference.html">Working with Amazon Elastic
 *             Inference on Amazon ECS</a> in the <i>Amazon Elastic Container Service
 *             Developer Guide</i>.</p>
 * @public
 */
export interface EcsInferenceAcceleratorOverride {
  /**
   * <p>The Elastic Inference accelerator device name to override for the task. This parameter
   *          must match a <code>deviceName</code> specified in the task definition.</p>
   * @public
   */
  deviceName?: string | undefined;

  /**
   * <p>The Elastic Inference accelerator type to use.</p>
   * @public
   */
  deviceType?: string | undefined;
}

/**
 * <p>The overrides that are associated with a task.</p>
 * @public
 */
export interface EcsTaskOverride {
  /**
   * <p>One or more container overrides that are sent to a task.</p>
   * @public
   */
  ContainerOverrides?: EcsContainerOverride[] | undefined;

  /**
   * <p>The cpu override for the task.</p>
   * @public
   */
  Cpu?: string | undefined;

  /**
   * <p>The ephemeral storage setting override for the task.</p>
   *          <note>
   *             <p>This parameter is only supported for tasks hosted on Fargate that use
   *             the following platform versions:</p>
   *             <ul>
   *                <li>
   *                   <p>Linux platform version <code>1.4.0</code> or later.</p>
   *                </li>
   *                <li>
   *                   <p>Windows platform version <code>1.0.0</code> or later.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  EphemeralStorage?: EcsEphemeralStorage | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the task execution IAM role override for the task. For
   *          more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html">Amazon ECS
   *             task execution IAM role</a> in the <i>Amazon Elastic Container Service Developer
   *             Guide</i>.</p>
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * <p>The Elastic Inference accelerator override for the task.</p>
   * @public
   */
  InferenceAcceleratorOverrides?: EcsInferenceAcceleratorOverride[] | undefined;

  /**
   * <p>The memory override for the task.</p>
   * @public
   */
  Memory?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that containers in this task can assume.
   *          All containers in this task are granted the permissions that are specified in this role.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM Role for Tasks</a> in
   *          the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  TaskRoleArn?: string | undefined;
}

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
 * <p>An object representing a constraint on task placement. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement
 *             Constraints</a> in the Amazon Elastic Container Service Developer Guide.</p>
 * @public
 */
export interface PlacementConstraint {
  /**
   * <p>The type of constraint. Use distinctInstance to ensure that each task in a particular
   *          group is running on a different container instance. Use memberOf to restrict the selection
   *          to a group of valid candidates. </p>
   * @public
   */
  type?: PlacementConstraintType | undefined;

  /**
   * <p>A cluster query language expression to apply to the constraint. You cannot specify an
   *          expression if the constraint type is <code>distinctInstance</code>. To learn more, see
   *             <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query
   *             Language</a> in the Amazon Elastic Container Service Developer Guide. </p>
   * @public
   */
  expression?: string | undefined;
}

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
 * <p>The task placement strategy for a task or service. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement
 *             Strategies</a> in the Amazon Elastic Container Service Service Developer Guide.</p>
 * @public
 */
export interface PlacementStrategy {
  /**
   * <p>The type of placement strategy. The random placement strategy randomly places tasks on
   *          available candidates. The spread placement strategy spreads placement across available
   *          candidates evenly based on the field parameter. The binpack strategy places tasks on
   *          available candidates that have the least available amount of the resource that is specified
   *          with the field parameter. For example, if you binpack on memory, a task is placed on the
   *          instance with the least amount of remaining memory (but still enough to run the task).
   *       </p>
   * @public
   */
  type?: PlacementStrategyType | undefined;

  /**
   * <p>The field to apply the placement strategy against. For the spread placement strategy,
   *          valid values are instanceId (or host, which has the same effect), or any platform or custom
   *          attribute that is applied to a container instance, such as attribute:ecs.availability-zone.
   *          For the binpack placement strategy, valid values are cpu and memory. For the random
   *          placement strategy, this field is not used. </p>
   * @public
   */
  field?: string | undefined;
}

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
 * <p>A key-value pair associated with an Amazon Web Services resource. In EventBridge,
 *          rules and event buses support tagging.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>A string you can use to assign a value. The combination of tag keys and values can help
   *          you organize and categorize your resources.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value for the specified tag key.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>The parameters for using an Amazon ECS task as a target.</p>
 * @public
 */
export interface PipeTargetEcsTaskParameters {
  /**
   * <p>The ARN of the task definition to use if the event target is an Amazon ECS task.
   *       </p>
   * @public
   */
  TaskDefinitionArn: string | undefined;

  /**
   * <p>The number of tasks to create based on <code>TaskDefinition</code>. The default is
   *          1.</p>
   * @public
   */
  TaskCount?: number | undefined;

  /**
   * <p>Specifies the launch type on which your task is running. The launch type that you
   *          specify here must match one of the launch type (compatibilities) of the target task. The
   *             <code>FARGATE</code> value is supported only in the Regions where Fargate with Amazon ECS is supported. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS-Fargate.html">Fargate on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   * @public
   */
  LaunchType?: LaunchType | undefined;

  /**
   * <p>Use this structure if the Amazon ECS task uses the <code>awsvpc</code> network
   *          mode. This structure specifies the VPC subnets and security groups associated with the
   *          task, and whether a public IP address is to be used. This structure is required if
   *             <code>LaunchType</code> is <code>FARGATE</code> because the <code>awsvpc</code> mode is
   *          required for Fargate tasks.</p>
   *          <p>If you specify <code>NetworkConfiguration</code> when the target ECS task does not use
   *          the <code>awsvpc</code> network mode, the task fails.</p>
   * @public
   */
  NetworkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>Specifies the platform version for the task. Specify only the numeric portion of the
   *          platform version, such as <code>1.1.0</code>.</p>
   *          <p>This structure is used only if <code>LaunchType</code> is <code>FARGATE</code>. For more
   *          information about valid platform versions, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate
   *             Platform Versions</a> in the <i>Amazon Elastic Container Service Developer
   *             Guide</i>.</p>
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * <p>Specifies an Amazon ECS task group for the task. The maximum length is 255
   *          characters.</p>
   * @public
   */
  Group?: string | undefined;

  /**
   * <p>The capacity provider strategy to use for the task.</p>
   *          <p>If a <code>capacityProviderStrategy</code> is specified, the <code>launchType</code>
   *          parameter must be omitted. If no <code>capacityProviderStrategy</code> or launchType is
   *          specified, the <code>defaultCapacityProviderStrategy</code> for the cluster is used.
   *       </p>
   * @public
   */
  CapacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * <p>Specifies whether to enable Amazon ECS managed tags for the task. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS Resources</a> in the Amazon Elastic Container Service Developer Guide. </p>
   * @public
   */
  EnableECSManagedTags?: boolean | undefined;

  /**
   * <p>Whether or not to enable the execute command functionality for the containers in this
   *          task. If true, this enables execute command functionality on all containers in the
   *          task.</p>
   * @public
   */
  EnableExecuteCommand?: boolean | undefined;

  /**
   * <p>An array of placement constraint objects to use for the task. You can specify up to 10
   *          constraints per task (including constraints in the task definition and those specified at
   *          runtime).</p>
   * @public
   */
  PlacementConstraints?: PlacementConstraint[] | undefined;

  /**
   * <p>The placement strategy objects to use for the task. You can specify a maximum of five
   *          strategy rules per task. </p>
   * @public
   */
  PlacementStrategy?: PlacementStrategy[] | undefined;

  /**
   * <p>Specifies whether to propagate the tags from the task definition to the task. If no
   *          value is specified, the tags are not propagated. Tags can only be propagated to the task
   *          during task creation. To add tags to a task after task creation, use the
   *             <code>TagResource</code> API action. </p>
   * @public
   */
  PropagateTags?: PropagateTags | undefined;

  /**
   * <p>The reference ID to use for the task.</p>
   * @public
   */
  ReferenceId?: string | undefined;

  /**
   * <p>The overrides that are associated with a task.</p>
   * @public
   */
  Overrides?: EcsTaskOverride | undefined;

  /**
   * <p>The metadata that you apply to the task to help you categorize and organize them. Each
   *          tag consists of a key and an optional value, both of which you define. To learn more, see
   *             <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-tags">RunTask</a> in the Amazon ECS API Reference.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>The parameters for using an EventBridge event bus as a target.</p>
 * @public
 */
export interface PipeTargetEventBridgeEventBusParameters {
  /**
   * <p>The URL subdomain of the endpoint. For example, if the URL for Endpoint is
   *          https://abcde.veo.endpoints.event.amazonaws.com, then the EndpointId is
   *             <code>abcde.veo</code>.</p>
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * <p>A free-form string, with a maximum of 128 characters, used to decide what fields to
   *          expect in the event detail.</p>
   * @public
   */
  DetailType?: string | undefined;

  /**
   * <p>The source of the event.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>Amazon Web Services resources, identified by Amazon Resource Name (ARN), which the event
   *          primarily concerns. Any number, including zero, may be present.</p>
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * <p>The time stamp of the event, per <a href="https://www.rfc-editor.org/rfc/rfc3339.txt">RFC3339</a>. If no time stamp is provided, the time stamp of the <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html">PutEvents</a> call is used.</p>
   * @public
   */
  Time?: string | undefined;
}

/**
 * <p>These are custom parameter to be used when the target is an API Gateway REST APIs or
 *       EventBridge ApiDestinations.</p>
 * @public
 */
export interface PipeTargetHttpParameters {
  /**
   * <p>The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*").</p>
   * @public
   */
  PathParameterValues?: string[] | undefined;

  /**
   * <p>The headers that need to be sent as part of request invoking the API Gateway REST
   *          API or EventBridge ApiDestination.</p>
   * @public
   */
  HeaderParameters?: Record<string, string> | undefined;

  /**
   * <p>The query string keys/values that need to be sent as part of request invoking the
   *             API Gateway REST API or EventBridge ApiDestination.</p>
   * @public
   */
  QueryStringParameters?: Record<string, string> | undefined;
}

/**
 * <p>The parameters for using a Kinesis stream as a target.</p>
 * @public
 */
export interface PipeTargetKinesisStreamParameters {
  /**
   * <p>Determines which shard in the stream the data record is assigned to. Partition keys are
   *          Unicode strings with a maximum length limit of 256 characters for each key. Amazon Kinesis Data Streams uses the partition key as input to a hash function that maps the
   *          partition key and associated data to a specific shard. Specifically, an MD5 hash function
   *          is used to map partition keys to 128-bit integer values and to map associated data records
   *          to shards. As a result of this hashing mechanism, all data records with the same partition
   *          key map to the same shard within the stream.</p>
   * @public
   */
  PartitionKey: string | undefined;
}

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
 * <p>The parameters for using a Lambda function as a target.</p>
 * @public
 */
export interface PipeTargetLambdaFunctionParameters {
  /**
   * <p>Specify whether to invoke the function synchronously or asynchronously.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REQUEST_RESPONSE</code> (default) - Invoke synchronously. This corresponds
   *                to the <code>RequestResponse</code> option in the <code>InvocationType</code>
   *                parameter for the Lambda
   *                <a href="https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html#API_Invoke_RequestSyntax">Invoke</a>
   *                API.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FIRE_AND_FORGET</code> - Invoke asynchronously. This corresponds to the
   *                   <code>Event</code> option in the <code>InvocationType</code> parameter for the
   *                   Lambda
   *                <a href="https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html#API_Invoke_RequestSyntax">Invoke</a>
   *                API.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html#pipes-invocation">Invocation
   *             types</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  InvocationType?: PipeTargetInvocationType | undefined;
}

/**
 * <p>These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the
 *       Amazon Redshift Data API BatchExecuteStatement.</p>
 * @public
 */
export interface PipeTargetRedshiftDataParameters {
  /**
   * <p>The name or ARN of the secret that enables access to the database. Required when
   *          authenticating using Secrets Manager.</p>
   * @public
   */
  SecretManagerArn?: string | undefined;

  /**
   * <p>The name of the database. Required when authenticating using temporary
   *          credentials.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The database user name. Required when authenticating using temporary credentials.</p>
   * @public
   */
  DbUser?: string | undefined;

  /**
   * <p>The name of the SQL statement. You can name the SQL statement when you create it to
   *          identify the query.</p>
   * @public
   */
  StatementName?: string | undefined;

  /**
   * <p>Indicates whether to send an event back to EventBridge after the SQL statement
   *          runs.</p>
   * @public
   */
  WithEvent?: boolean | undefined;

  /**
   * <p>The SQL statement text to run.</p>
   * @public
   */
  Sqls: string[] | undefined;
}

/**
 * <p>Name/Value pair of a parameter to start execution of a SageMaker Model Building
 *          Pipeline.</p>
 * @public
 */
export interface SageMakerPipelineParameter {
  /**
   * <p>Name of parameter to start execution of a SageMaker Model Building
   *          Pipeline.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Value of parameter to start execution of a SageMaker Model Building
   *          Pipeline.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>The parameters for using a SageMaker pipeline as a target.</p>
 * @public
 */
export interface PipeTargetSageMakerPipelineParameters {
  /**
   * <p>List of Parameter names and values for SageMaker Model Building Pipeline
   *          execution.</p>
   * @public
   */
  PipelineParameterList?: SageMakerPipelineParameter[] | undefined;
}

/**
 * <p>The parameters for using a Amazon SQS stream as a target.</p>
 * @public
 */
export interface PipeTargetSqsQueueParameters {
  /**
   * <p>The FIFO message group ID to use as the target.</p>
   * @public
   */
  MessageGroupId?: string | undefined;

  /**
   * <p>This parameter applies only to FIFO (first-in-first-out) queues.</p>
   *          <p>The token used for deduplication of sent messages.</p>
   * @public
   */
  MessageDeduplicationId?: string | undefined;
}

/**
 * <p>The parameters for using a Step Functions state machine as a target.</p>
 * @public
 */
export interface PipeTargetStateMachineParameters {
  /**
   * <p>Specify whether to invoke the Step Functions state machine synchronously or
   *          asynchronously.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REQUEST_RESPONSE</code> (default) - Invoke synchronously. For more
   *                information, see <a href="https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartSyncExecution.html">StartSyncExecution</a> in the <i>Step Functions API
   *                   Reference</i>.</p>
   *                <note>
   *                   <p>
   *                      <code>REQUEST_RESPONSE</code> is not supported for <code>STANDARD</code> state
   *                   machine workflows.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FIRE_AND_FORGET</code> - Invoke asynchronously. For more information, see
   *                   <a href="https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html">StartExecution</a> in the <i>Step Functions API
   *                   Reference</i>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html#pipes-invocation">Invocation
   *             types</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  InvocationType?: PipeTargetInvocationType | undefined;
}

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
 * <p>Maps source data to a dimension in the target Timestream for LiveAnalytics
 *          table.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/concepts.html">Amazon Timestream for LiveAnalytics concepts</a>
 *          </p>
 * @public
 */
export interface DimensionMapping {
  /**
   * <p>Dynamic path to the dimension value in the source event.</p>
   * @public
   */
  DimensionValue: string | undefined;

  /**
   * <p>The data type of the dimension for the time-series data.</p>
   * @public
   */
  DimensionValueType: DimensionValueType | undefined;

  /**
   * <p>The metadata attributes of the time series. For example, the name and Availability Zone
   *          of an Amazon EC2 instance or the name of the manufacturer of a wind turbine are
   *          dimensions.</p>
   * @public
   */
  DimensionName: string | undefined;
}

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
 * <p>A mapping of a source event data field to a measure in a Timestream for
 *          LiveAnalytics record.</p>
 * @public
 */
export interface MultiMeasureAttributeMapping {
  /**
   * <p>Dynamic path to the measurement attribute in the source event.</p>
   * @public
   */
  MeasureValue: string | undefined;

  /**
   * <p>Data type of the measurement attribute in the source event.</p>
   * @public
   */
  MeasureValueType: MeasureValueType | undefined;

  /**
   * <p>Target measure name to be used.</p>
   * @public
   */
  MultiMeasureAttributeName: string | undefined;
}

/**
 * <p>Maps multiple measures from the source event to the same Timestream for
 *          LiveAnalytics record.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/concepts.html">Amazon Timestream for LiveAnalytics concepts</a>
 *          </p>
 * @public
 */
export interface MultiMeasureMapping {
  /**
   * <p>The name of the multiple measurements per record (multi-measure).</p>
   * @public
   */
  MultiMeasureName: string | undefined;

  /**
   * <p>Mappings that represent multiple source event fields mapped to measures in the same
   *             Timestream for LiveAnalytics record.</p>
   * @public
   */
  MultiMeasureAttributeMappings: MultiMeasureAttributeMapping[] | undefined;
}

/**
 * <p>Maps a single source data field to a single record in the specified Timestream
 *          for LiveAnalytics table.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/concepts.html">Amazon Timestream for LiveAnalytics concepts</a>
 *          </p>
 * @public
 */
export interface SingleMeasureMapping {
  /**
   * <p>Dynamic path of the source field to map to the measure in the record.</p>
   * @public
   */
  MeasureValue: string | undefined;

  /**
   * <p>Data type of the source field.</p>
   * @public
   */
  MeasureValueType: MeasureValueType | undefined;

  /**
   * <p>Target measure name for the measurement attribute in the Timestream table.</p>
   * @public
   */
  MeasureName: string | undefined;
}

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
 * <p>The parameters for using a Timestream for LiveAnalytics table as a
 *          target.</p>
 * @public
 */
export interface PipeTargetTimestreamParameters {
  /**
   * <p>Dynamic path to the source data field that represents the time value for your data.</p>
   * @public
   */
  TimeValue: string | undefined;

  /**
   * <p>The granularity of the time units used. Default is <code>MILLISECONDS</code>.</p>
   *          <p>Required if <code>TimeFieldType</code> is specified as <code>EPOCH</code>.</p>
   * @public
   */
  EpochTimeUnit?: EpochTimeUnit | undefined;

  /**
   * <p>The type of time value used.</p>
   *          <p>The default is <code>EPOCH</code>.</p>
   * @public
   */
  TimeFieldType?: TimeFieldType | undefined;

  /**
   * <p>How to format the timestamps. For example,
   *          <code>yyyy-MM-dd'T'HH:mm:ss'Z'</code>.</p>
   *          <p>Required if <code>TimeFieldType</code> is specified as
   *          <code>TIMESTAMP_FORMAT</code>.</p>
   * @public
   */
  TimestampFormat?: string | undefined;

  /**
   * <p>64 bit version value or source data field that represents the version value for your data.</p>
   *          <p>Write requests with a higher version number will update the existing measure values of the record and version.
   *          In cases where the measure value is the same, the version will still be updated. </p>
   *          <p>Default value is 1. </p>
   *          <p>Timestream for LiveAnalytics does not support updating partial measure values in a record.</p>
   *          <p>Write requests for duplicate data with a
   *          higher version number will update the existing measure value and version. In cases where
   *          the measure value is the same, <code>Version</code> will still be updated. Default value is
   *             <code>1</code>.</p>
   *          <note>
   *             <p>
   *                <code>Version</code> must be <code>1</code> or greater, or you will receive a
   *                <code>ValidationException</code> error.</p>
   *          </note>
   * @public
   */
  VersionValue: string | undefined;

  /**
   * <p>Map source data to dimensions in the target Timestream for LiveAnalytics
   *          table.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/concepts.html">Amazon Timestream for LiveAnalytics concepts</a>
   *          </p>
   * @public
   */
  DimensionMappings: DimensionMapping[] | undefined;

  /**
   * <p>Mappings of single source data fields to individual records in the specified Timestream for LiveAnalytics table.</p>
   * @public
   */
  SingleMeasureMappings?: SingleMeasureMapping[] | undefined;

  /**
   * <p>Maps multiple measures from the source event to the same record in the specified Timestream for LiveAnalytics table.</p>
   * @public
   */
  MultiMeasureMappings?: MultiMeasureMapping[] | undefined;
}

/**
 * <p>The parameters required to set up a target for your pipe.</p>
 *          <p>For more information about pipe target parameters, including how to use dynamic path parameters, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html">Target parameters</a> in the <i>Amazon EventBridge User Guide</i>.</p>
 * @public
 */
export interface PipeTargetParameters {
  /**
   * <p>Valid JSON text passed to the target. In this case, nothing from the event itself is
   *          passed to the target. For more information, see <a href="http://www.rfc-editor.org/rfc/rfc7159.txt">The JavaScript Object Notation (JSON)
   *             Data Interchange Format</a>.</p>
   *          <p>To remove an input template, specify an empty string.</p>
   * @public
   */
  InputTemplate?: string | undefined;

  /**
   * <p>The parameters for using a Lambda function as a target.</p>
   * @public
   */
  LambdaFunctionParameters?: PipeTargetLambdaFunctionParameters | undefined;

  /**
   * <p>The parameters for using a Step Functions state machine as a target.</p>
   * @public
   */
  StepFunctionStateMachineParameters?: PipeTargetStateMachineParameters | undefined;

  /**
   * <p>The parameters for using a Kinesis stream as a target.</p>
   * @public
   */
  KinesisStreamParameters?: PipeTargetKinesisStreamParameters | undefined;

  /**
   * <p>The parameters for using an Amazon ECS task as a target.</p>
   * @public
   */
  EcsTaskParameters?: PipeTargetEcsTaskParameters | undefined;

  /**
   * <p>The parameters for using an Batch job as a target.</p>
   * @public
   */
  BatchJobParameters?: PipeTargetBatchJobParameters | undefined;

  /**
   * <p>The parameters for using a Amazon SQS stream as a target.</p>
   * @public
   */
  SqsQueueParameters?: PipeTargetSqsQueueParameters | undefined;

  /**
   * <p>These are custom parameter to be used when the target is an API Gateway REST APIs or
   *       EventBridge ApiDestinations.</p>
   * @public
   */
  HttpParameters?: PipeTargetHttpParameters | undefined;

  /**
   * <p>These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the
   *       Amazon Redshift Data API BatchExecuteStatement.</p>
   * @public
   */
  RedshiftDataParameters?: PipeTargetRedshiftDataParameters | undefined;

  /**
   * <p>The parameters for using a SageMaker pipeline as a target.</p>
   * @public
   */
  SageMakerPipelineParameters?: PipeTargetSageMakerPipelineParameters | undefined;

  /**
   * <p>The parameters for using an EventBridge event bus as a target.</p>
   * @public
   */
  EventBridgeEventBusParameters?: PipeTargetEventBridgeEventBusParameters | undefined;

  /**
   * <p>The parameters for using an CloudWatch Logs log stream as a target.</p>
   * @public
   */
  CloudWatchLogsParameters?: PipeTargetCloudWatchLogsParameters | undefined;

  /**
   * <p>The parameters for using a Timestream for LiveAnalytics table as a
   *          target.</p>
   * @public
   */
  TimestreamParameters?: PipeTargetTimestreamParameters | undefined;
}

/**
 * @public
 */
export interface CreatePipeRequest {
  /**
   * <p>The name of the pipe.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the pipe.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The state the pipe should be in.</p>
   * @public
   */
  DesiredState?: RequestedPipeState | undefined;

  /**
   * <p>The ARN of the source resource.</p>
   * @public
   */
  Source: string | undefined;

  /**
   * <p>The parameters required to set up a source for your pipe.</p>
   * @public
   */
  SourceParameters?: PipeSourceParameters | undefined;

  /**
   * <p>The ARN of the enrichment resource.</p>
   * @public
   */
  Enrichment?: string | undefined;

  /**
   * <p>The parameters required to set up enrichment on your pipe.</p>
   * @public
   */
  EnrichmentParameters?: PipeEnrichmentParameters | undefined;

  /**
   * <p>The ARN of the target resource.</p>
   * @public
   */
  Target: string | undefined;

  /**
   * <p>The parameters required to set up a target for your pipe.</p>
   *          <p>For more information about pipe target parameters, including how to use dynamic path parameters, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html">Target parameters</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  TargetParameters?: PipeTargetParameters | undefined;

  /**
   * <p>The ARN of the role that allows the pipe to send data to the target.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the pipe.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The logging configuration settings for the pipe.</p>
   * @public
   */
  LogConfiguration?: PipeLogConfigurationParameters | undefined;

  /**
   * <p>The identifier of the KMS
   *       customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt pipe data. The identifier can be the key
   *       Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN.</p>
   *          <p>If you do not specify a customer managed key identifier, EventBridge uses an
   *         Amazon Web Services owned key to encrypt pipe data.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/getting-started.html">Managing keys</a> in the <i>Key Management Service
   *                                 Developer Guide</i>. </p>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;
}

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
 */
export interface CreatePipeResponse {
  /**
   * <p>The ARN of the pipe.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the pipe.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The state the pipe should be in.</p>
   * @public
   */
  DesiredState?: RequestedPipeState | undefined;

  /**
   * <p>The state the pipe is in.</p>
   * @public
   */
  CurrentState?: PipeState | undefined;

  /**
   * <p>The time the pipe was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * <p>Indicates that an error has occurred while performing a validate operation.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the exception.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The message of the exception.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeletePipeRequest {
  /**
   * <p>The name of the pipe.</p>
   * @public
   */
  Name: string | undefined;
}

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

/**
 * @public
 */
export interface DeletePipeResponse {
  /**
   * <p>The ARN of the pipe.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the pipe.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The state the pipe should be in.</p>
   * @public
   */
  DesiredState?: RequestedPipeStateDescribeResponse | undefined;

  /**
   * <p>The state the pipe is in.</p>
   * @public
   */
  CurrentState?: PipeState | undefined;

  /**
   * <p>The time the pipe was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribePipeRequest {
  /**
   * <p>The name of the pipe.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>The Amazon Data Firehose logging configuration settings for the pipe.</p>
 * @public
 */
export interface FirehoseLogDestination {
  /**
   * <p>The Amazon Resource Name (ARN) of the Firehose delivery stream to which EventBridge delivers the pipe log records.</p>
   * @public
   */
  DeliveryStreamArn?: string | undefined;
}

/**
 * <p>The Amazon S3 logging configuration settings for the pipe.</p>
 * @public
 */
export interface S3LogDestination {
  /**
   * <p>The name of the Amazon S3 bucket to which EventBridge delivers the log
   *          records for the pipe.</p>
   * @public
   */
  BucketName?: string | undefined;

  /**
   * <p>The prefix text with which to begin Amazon S3 log object names.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html">Organizing objects using
   *             prefixes</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p>The Amazon Web Services account that owns the Amazon S3 bucket to which EventBridge delivers the log records for the pipe.</p>
   * @public
   */
  BucketOwner?: string | undefined;

  /**
   * <p>The format EventBridge uses for the log records.</p>
   *          <p>EventBridge currently only supports <code>json</code> formatting.</p>
   * @public
   */
  OutputFormat?: S3OutputFormat | undefined;
}

/**
 * <p>The logging configuration settings for the pipe.</p>
 * @public
 */
export interface PipeLogConfiguration {
  /**
   * <p>The Amazon S3 logging configuration settings for the pipe.</p>
   * @public
   */
  S3LogDestination?: S3LogDestination | undefined;

  /**
   * <p>The Amazon Data Firehose logging configuration settings for the pipe.</p>
   * @public
   */
  FirehoseLogDestination?: FirehoseLogDestination | undefined;

  /**
   * <p>The Amazon CloudWatch Logs logging configuration settings for the pipe.</p>
   * @public
   */
  CloudwatchLogsLogDestination?: CloudwatchLogsLogDestination | undefined;

  /**
   * <p>The level of logging detail to include. This applies to all log destinations for the pipe.</p>
   * @public
   */
  Level?: LogLevel | undefined;

  /**
   * <p>Whether the execution data (specifically, the <code>payload</code>,
   *             <code>awsRequest</code>, and <code>awsResponse</code> fields) is included in the log
   *          messages for this pipe.</p>
   *          <p>This applies to all log destinations for the pipe.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-logs.html#eb-pipes-logs-execution-data">Including execution data in logs</a> in the <i>Amazon EventBridge User
   *             Guide</i>.</p>
   * @public
   */
  IncludeExecutionData?: IncludeExecutionDataOption[] | undefined;
}

/**
 * @public
 */
export interface DescribePipeResponse {
  /**
   * <p>The ARN of the pipe.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the pipe.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the pipe.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The state the pipe should be in.</p>
   * @public
   */
  DesiredState?: RequestedPipeStateDescribeResponse | undefined;

  /**
   * <p>The state the pipe is in.</p>
   * @public
   */
  CurrentState?: PipeState | undefined;

  /**
   * <p>The reason the pipe is in its current state.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The ARN of the source resource.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The parameters required to set up a source for your pipe.</p>
   * @public
   */
  SourceParameters?: PipeSourceParameters | undefined;

  /**
   * <p>The ARN of the enrichment resource.</p>
   * @public
   */
  Enrichment?: string | undefined;

  /**
   * <p>The parameters required to set up enrichment on your pipe.</p>
   * @public
   */
  EnrichmentParameters?: PipeEnrichmentParameters | undefined;

  /**
   * <p>The ARN of the target resource.</p>
   * @public
   */
  Target?: string | undefined;

  /**
   * <p>The parameters required to set up a target for your pipe.</p>
   *          <p>For more information about pipe target parameters, including how to use dynamic path parameters, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html">Target parameters</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  TargetParameters?: PipeTargetParameters | undefined;

  /**
   * <p>The ARN of the role that allows the pipe to send data to the target.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the pipe.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The time the pipe was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The logging configuration settings for the pipe.</p>
   * @public
   */
  LogConfiguration?: PipeLogConfiguration | undefined;

  /**
   * <p>The identifier of the KMS
   *       customer managed key for EventBridge to use to encrypt pipe data, if one has been specified.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-encryption.html">Data encryption in EventBridge</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface ListPipesRequest {
  /**
   * <p>A value that will return a subset of the pipes associated with this account. For
   *          example, <code>"NamePrefix": "ABC"</code> will return all endpoints with "ABC" in the
   *          name.</p>
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * <p>The state the pipe should be in.</p>
   * @public
   */
  DesiredState?: RequestedPipeState | undefined;

  /**
   * <p>The state the pipe is in.</p>
   * @public
   */
  CurrentState?: PipeState | undefined;

  /**
   * <p>The prefix matching the pipe source.</p>
   * @public
   */
  SourcePrefix?: string | undefined;

  /**
   * <p>The prefix matching the pipe target.</p>
   * @public
   */
  TargetPrefix?: string | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination
   *          token will return an HTTP 400 InvalidToken error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of pipes to include in the response.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p>An object that represents a pipe. Amazon EventBridgePipes connect event sources to
 *          targets and reduces the need for specialized knowledge and integration code.</p>
 * @public
 */
export interface Pipe {
  /**
   * <p>The name of the pipe.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ARN of the pipe.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The state the pipe should be in.</p>
   * @public
   */
  DesiredState?: RequestedPipeState | undefined;

  /**
   * <p>The state the pipe is in.</p>
   * @public
   */
  CurrentState?: PipeState | undefined;

  /**
   * <p>The reason the pipe is in its current state.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The time the pipe was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The ARN of the source resource.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The ARN of the target resource.</p>
   * @public
   */
  Target?: string | undefined;

  /**
   * <p>The ARN of the enrichment resource.</p>
   * @public
   */
  Enrichment?: string | undefined;
}

/**
 * @public
 */
export interface ListPipesResponse {
  /**
   * <p>The pipes returned by the call.</p>
   * @public
   */
  Pipes?: Pipe[] | undefined;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination
   *          token will return an HTTP 400 InvalidToken error.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the pipe for which you want to view tags.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of key-value pairs to associate with the pipe.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartPipeRequest {
  /**
   * <p>The name of the pipe.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartPipeResponse {
  /**
   * <p>The ARN of the pipe.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the pipe.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The state the pipe should be in.</p>
   * @public
   */
  DesiredState?: RequestedPipeState | undefined;

  /**
   * <p>The state the pipe is in.</p>
   * @public
   */
  CurrentState?: PipeState | undefined;

  /**
   * <p>The time the pipe was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface StopPipeRequest {
  /**
   * <p>The name of the pipe.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StopPipeResponse {
  /**
   * <p>The ARN of the pipe.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the pipe.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The state the pipe should be in.</p>
   * @public
   */
  DesiredState?: RequestedPipeState | undefined;

  /**
   * <p>The state the pipe is in.</p>
   * @public
   */
  CurrentState?: PipeState | undefined;

  /**
   * <p>The time the pipe was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * <p>The parameters for using an Active MQ broker as a source.</p>
 * @public
 */
export interface UpdatePipeSourceActiveMQBrokerParameters {
  /**
   * <p>The credentials needed to access the resource.</p>
   * @public
   */
  Credentials: MQBrokerAccessCredentials | undefined;

  /**
   * <p>The maximum number of records to include in each batch.</p>
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;
}

/**
 * <p>The parameters for using a DynamoDB stream as a source.</p>
 * @public
 */
export interface UpdatePipeSourceDynamoDBStreamParameters {
  /**
   * <p>The maximum number of records to include in each batch.</p>
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * <p>Define the target queue to send dead-letter queue events to.</p>
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * <p>Define how to handle item process failures. <code>AUTOMATIC_BISECT</code> halves each batch and retry each half
   * until all the records are processed or there is one failed message left in the batch.</p>
   * @public
   */
  OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams | undefined;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;

  /**
   * <p>Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite.
   * When the value is set to infinite, EventBridge never discards old records. </p>
   * @public
   */
  MaximumRecordAgeInSeconds?: number | undefined;

  /**
   * <p>Discard records after the specified number of retries. The default value is -1, which sets the maximum number of
   * retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.</p>
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * <p>The number of batches to process concurrently from each shard. The default value is 1.</p>
   * @public
   */
  ParallelizationFactor?: number | undefined;
}

/**
 * <p>The parameters for using a Kinesis stream as a source.</p>
 * @public
 */
export interface UpdatePipeSourceKinesisStreamParameters {
  /**
   * <p>The maximum number of records to include in each batch.</p>
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * <p>Define the target queue to send dead-letter queue events to.</p>
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * <p>Define how to handle item process failures. <code>AUTOMATIC_BISECT</code> halves each batch and retry each half
   * until all the records are processed or there is one failed message left in the batch.</p>
   * @public
   */
  OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams | undefined;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;

  /**
   * <p>Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite.
   * When the value is set to infinite, EventBridge never discards old records. </p>
   * @public
   */
  MaximumRecordAgeInSeconds?: number | undefined;

  /**
   * <p>Discard records after the specified number of retries. The default value is -1, which sets the maximum number of
   * retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.</p>
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * <p>The number of batches to process concurrently from each shard. The default value is 1.</p>
   * @public
   */
  ParallelizationFactor?: number | undefined;
}

/**
 * <p>The parameters for using an MSK stream as a source.</p>
 * @public
 */
export interface UpdatePipeSourceManagedStreamingKafkaParameters {
  /**
   * <p>The maximum number of records to include in each batch.</p>
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * <p>The credentials needed to access the resource.</p>
   * @public
   */
  Credentials?: MSKAccessCredentials | undefined;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;
}

/**
 * <p>The parameters for using a Rabbit MQ broker as a source.</p>
 * @public
 */
export interface UpdatePipeSourceRabbitMQBrokerParameters {
  /**
   * <p>The credentials needed to access the resource.</p>
   * @public
   */
  Credentials: MQBrokerAccessCredentials | undefined;

  /**
   * <p>The maximum number of records to include in each batch.</p>
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;
}

/**
 * <p>The parameters for using a self-managed Apache Kafka stream as a source.</p>
 *          <p>A <i>self managed</i> cluster refers to any Apache Kafka cluster not hosted by Amazon Web Services.
 *     This includes both clusters you manage yourself, as well as those hosted by a third-party
 *     provider, such as <a href="https://www.confluent.io/">Confluent
 *       Cloud</a>, <a href="https://www.cloudkarafka.com/">CloudKarafka</a>, or <a href="https://redpanda.com/">Redpanda</a>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-kafka.html">Apache Kafka streams as a source</a> in the <i>Amazon EventBridge User Guide</i>.</p>
 * @public
 */
export interface UpdatePipeSourceSelfManagedKafkaParameters {
  /**
   * <p>The maximum number of records to include in each batch.</p>
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;

  /**
   * <p>The credentials needed to access the resource.</p>
   * @public
   */
  Credentials?: SelfManagedKafkaAccessConfigurationCredentials | undefined;

  /**
   * <p>The ARN of the Secrets Manager secret used for certification.</p>
   * @public
   */
  ServerRootCaCertificate?: string | undefined;

  /**
   * <p>This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used.</p>
   * @public
   */
  Vpc?: SelfManagedKafkaAccessConfigurationVpc | undefined;
}

/**
 * <p>The parameters for using a Amazon SQS stream as a source.</p>
 * @public
 */
export interface UpdatePipeSourceSqsQueueParameters {
  /**
   * <p>The maximum number of records to include in each batch.</p>
   * @public
   */
  BatchSize?: number | undefined;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   * @public
   */
  MaximumBatchingWindowInSeconds?: number | undefined;
}

/**
 * <p>The parameters required to set up a source for your pipe.</p>
 * @public
 */
export interface UpdatePipeSourceParameters {
  /**
   * <p>The collection of event patterns used to filter events.</p>
   *          <p>To remove a filter, specify a <code>FilterCriteria</code> object with an empty array of <code>Filter</code> objects.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
   *          Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  FilterCriteria?: FilterCriteria | undefined;

  /**
   * <p>The parameters for using a Kinesis stream as a source.</p>
   * @public
   */
  KinesisStreamParameters?: UpdatePipeSourceKinesisStreamParameters | undefined;

  /**
   * <p>The parameters for using a DynamoDB stream as a source.</p>
   * @public
   */
  DynamoDBStreamParameters?: UpdatePipeSourceDynamoDBStreamParameters | undefined;

  /**
   * <p>The parameters for using a Amazon SQS stream as a source.</p>
   * @public
   */
  SqsQueueParameters?: UpdatePipeSourceSqsQueueParameters | undefined;

  /**
   * <p>The parameters for using an Active MQ broker as a source.</p>
   * @public
   */
  ActiveMQBrokerParameters?: UpdatePipeSourceActiveMQBrokerParameters | undefined;

  /**
   * <p>The parameters for using a Rabbit MQ broker as a source.</p>
   * @public
   */
  RabbitMQBrokerParameters?: UpdatePipeSourceRabbitMQBrokerParameters | undefined;

  /**
   * <p>The parameters for using an MSK stream as a source.</p>
   * @public
   */
  ManagedStreamingKafkaParameters?: UpdatePipeSourceManagedStreamingKafkaParameters | undefined;

  /**
   * <p>The parameters for using a self-managed Apache Kafka stream as a source.</p>
   *          <p>A <i>self managed</i> cluster refers to any Apache Kafka cluster not hosted by Amazon Web Services.
   *     This includes both clusters you manage yourself, as well as those hosted by a third-party
   *     provider, such as <a href="https://www.confluent.io/">Confluent
   *       Cloud</a>, <a href="https://www.cloudkarafka.com/">CloudKarafka</a>, or <a href="https://redpanda.com/">Redpanda</a>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-kafka.html">Apache Kafka streams as a source</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  SelfManagedKafkaParameters?: UpdatePipeSourceSelfManagedKafkaParameters | undefined;
}

/**
 * @public
 */
export interface UpdatePipeRequest {
  /**
   * <p>The name of the pipe.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the pipe.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The state the pipe should be in.</p>
   * @public
   */
  DesiredState?: RequestedPipeState | undefined;

  /**
   * <p>The parameters required to set up a source for your pipe.</p>
   * @public
   */
  SourceParameters?: UpdatePipeSourceParameters | undefined;

  /**
   * <p>The ARN of the enrichment resource.</p>
   * @public
   */
  Enrichment?: string | undefined;

  /**
   * <p>The parameters required to set up enrichment on your pipe.</p>
   * @public
   */
  EnrichmentParameters?: PipeEnrichmentParameters | undefined;

  /**
   * <p>The ARN of the target resource.</p>
   * @public
   */
  Target?: string | undefined;

  /**
   * <p>The parameters required to set up a target for your pipe.</p>
   *          <p>For more information about pipe target parameters, including how to use dynamic path parameters, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html">Target parameters</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  TargetParameters?: PipeTargetParameters | undefined;

  /**
   * <p>The ARN of the role that allows the pipe to send data to the target.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The logging configuration settings for the pipe.</p>
   * @public
   */
  LogConfiguration?: PipeLogConfigurationParameters | undefined;

  /**
   * <p>The identifier of the KMS
   *          customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt pipe data. The identifier can be the key
   *          Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN.</p>
   *          <p>To update a pipe that is using the default Amazon Web Services owned key to use a customer managed key instead, or update a pipe that is using a customer managed key to use a
   *          different customer managed key, specify a customer managed key identifier.</p>
   *          <p>To update a pipe that is using a customer managed key to use the default Amazon Web Services owned key, specify an empty string.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/getting-started.html">Managing keys</a> in the <i>Key Management Service
   *             Developer Guide</i>. </p>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePipeResponse {
  /**
   * <p>The ARN of the pipe.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the pipe.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The state the pipe should be in.</p>
   * @public
   */
  DesiredState?: RequestedPipeState | undefined;

  /**
   * <p>The state the pipe is in.</p>
   * @public
   */
  CurrentState?: PipeState | undefined;

  /**
   * <p>The time the pipe was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the pipe.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of key-value pairs associated with the pipe.</p>
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
   * <p>The ARN of the pipe.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the pipe.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
