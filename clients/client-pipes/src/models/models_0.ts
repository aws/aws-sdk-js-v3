// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { PipesServiceException as __BaseException } from "./PipesServiceException";

export enum AssignPublicIp {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used.
 *          This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode.</p>
 */
export interface AwsVpcConfiguration {
  /**
   * <p>Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.</p>
   */
  Subnets: string[] | undefined;

  /**
   * <p>Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many
   *          as five security groups. If you do not specify a security group, the default security group for the VPC is used.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>Specifies whether the task's elastic network interface receives a public IP address. You can specify <code>ENABLED</code> only when
   *          <code>LaunchType</code> in <code>EcsParameters</code> is set to <code>FARGATE</code>.</p>
   */
  AssignPublicIp?: AssignPublicIp | string;
}

/**
 * <p>The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000.
 *          If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job.</p>
 */
export interface BatchArrayProperties {
  /**
   * <p>The size of the array, if this is an array batch job.</p>
   */
  Size?: number;
}

/**
 * <p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing
 *          environment variables from the Docker image or the task definition.</p>
 *          <note>
 *             <p>Environment variables cannot start with "<code>Batch</code>". This naming convention is reserved for variables that Batch sets.</p>
 *          </note>
 */
export interface BatchEnvironmentVariable {
  /**
   * <p>The name of the key-value pair. For environment variables, this is the name of the environment variable.</p>
   */
  Name?: string;

  /**
   * <p>The value of the key-value pair. For environment variables, this is the value of the environment variable.</p>
   */
  Value?: string;
}

export enum BatchResourceRequirementType {
  GPU = "GPU",
  MEMORY = "MEMORY",
  VCPU = "VCPU",
}

/**
 * <p>The type and amount of a resource to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.</p>
 */
export interface BatchResourceRequirement {
  /**
   * <p>The type of resource to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.</p>
   */
  Type: BatchResourceRequirementType | string | undefined;

  /**
   * <p>The quantity of the specified resource to reserve for the container. The values vary based on the
   *          <code>type</code> specified.</p>
   *          <dl>
   *             <dt>type="GPU"</dt>
   *             <dd>
   *                <p>The number of physical GPUs to reserve for the container. Make sure that the number of GPUs reserved for all
   *                   containers in a job doesn't exceed the number of available GPUs on the compute resource that the job is launched
   *                   on.</p>
   *                <note>
   *                   <p>GPUs aren't available for jobs that are running on Fargate resources.</p>
   *                </note>
   *             </dd>
   *             <dt>type="MEMORY"</dt>
   *             <dd>
   *                <p>The memory hard limit (in MiB) present to the container. This parameter is supported for jobs that are
   *                   running on EC2 resources. If your container attempts to exceed the memory specified, the container is terminated.
   *                   This parameter maps to <code>Memory</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">
   *                      Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a>
   *                   and the <code>--memory</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.
   *                   You must specify at least 4 MiB of memory for a job. This is required but can be specified in several places for
   *                   multi-node parallel (MNP) jobs. It must be specified for each node at least once. This parameter maps to
   *                   <code>Memory</code> in the <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">
   *                      Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a> and the
   *                   <code>--memory</code> option to <a href="https://docs.docker.com/engine/reference/run/">docker run</a>.</p>
   *                <note>
   *                   <p>If you're trying to maximize your resource utilization by providing your jobs as much memory as possible for
   *                      a particular instance type, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html">Memory
   *                         management</a> in the <i>Batch User Guide</i>.</p>
   *                </note>
   *                <p>For jobs that are running on Fargate resources, then <code>value</code> is the hard limit (in MiB), and
   *                   must match one of the supported values and the <code>VCPU</code> values must be one of the values supported for
   *                   that memory value.</p>
   *                <dl>
   *                   <dt>value = 512</dt>
   *                   <dd>
   *                         <p>
   *                         <code>VCPU</code> = 0.25</p>
   *                      </dd>
   *                   <dt>value = 1024</dt>
   *                   <dd>
   *                         <p>
   *                         <code>VCPU</code> = 0.25 or 0.5</p>
   *                      </dd>
   *                   <dt>value = 2048</dt>
   *                   <dd>
   *                         <p>
   *                         <code>VCPU</code> = 0.25, 0.5, or 1</p>
   *                      </dd>
   *                   <dt>value = 3072</dt>
   *                   <dd>
   *                         <p>
   *                         <code>VCPU</code> = 0.5, or 1</p>
   *                      </dd>
   *                   <dt>value = 4096</dt>
   *                   <dd>
   *                         <p>
   *                         <code>VCPU</code> = 0.5, 1, or 2</p>
   *                      </dd>
   *                   <dt>value = 5120, 6144, or 7168</dt>
   *                   <dd>
   *                         <p>
   *                         <code>VCPU</code> = 1 or 2</p>
   *                      </dd>
   *                   <dt>value = 8192</dt>
   *                   <dd>
   *                         <p>
   *                         <code>VCPU</code> = 1, 2, 4, or 8</p>
   *                      </dd>
   *                   <dt>value = 9216, 10240, 11264, 12288, 13312, 14336, or 15360</dt>
   *                   <dd>
   *                         <p>
   *                         <code>VCPU</code> = 2 or 4</p>
   *                      </dd>
   *                   <dt>value = 16384</dt>
   *                   <dd>
   *                         <p>
   *                         <code>VCPU</code> = 2, 4, or 8</p>
   *                      </dd>
   *                   <dt>value = 17408, 18432, 19456, 21504, 22528, 23552, 25600, 26624, 27648, 29696, or 30720</dt>
   *                   <dd>
   *                         <p>
   *                         <code>VCPU</code> = 4</p>
   *                      </dd>
   *                   <dt>value = 20480, 24576, or 28672</dt>
   *                   <dd>
   *                         <p>
   *                         <code>VCPU</code> = 4 or 8</p>
   *                      </dd>
   *                   <dt>value = 36864, 45056, 53248, or 61440</dt>
   *                   <dd>
   *                         <p>
   *                         <code>VCPU</code> = 8</p>
   *                      </dd>
   *                   <dt>value = 32768, 40960, 49152, or 57344</dt>
   *                   <dd>
   *                         <p>
   *                         <code>VCPU</code> = 8 or 16</p>
   *                      </dd>
   *                   <dt>value = 65536, 73728, 81920, 90112, 98304, 106496, 114688, or 122880</dt>
   *                   <dd>
   *                         <p>
   *                         <code>VCPU</code> = 16</p>
   *                      </dd>
   *                </dl>
   *             </dd>
   *             <dt>type="VCPU"</dt>
   *             <dd>
   *                <p>The number of vCPUs reserved for the container. This parameter maps to <code>CpuShares</code> in the
   *                   <a href="https://docs.docker.com/engine/api/v1.23/#create-a-container">
   *                      Create a container</a> section of the <a href="https://docs.docker.com/engine/api/v1.23/">Docker Remote API</a>
   *                   and the <code>--cpu-shares</code> option to
   *                   <a href="https://docs.docker.com/engine/reference/run/">docker run</a>. Each vCPU is equivalent to 1,024 CPU shares. For EC2
   *                   resources, you must specify at least one vCPU. This is required but can be specified in several places; it must be
   *                   specified for each node at least once.</p>
   *                <p>The default for the Fargate On-Demand vCPU resource count quota is 6 vCPUs. For more information about
   *                   Fargate quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/ecs-service.html#service-quotas-fargate">Fargate quotas</a> in the <i>Amazon Web Services General Reference</i>.</p>
   *                <p>For jobs that are running on Fargate resources, then <code>value</code> must match one of the supported
   *                   values and the <code>MEMORY</code> values must be one of the values supported for that <code>VCPU</code> value.
   *                   The supported values are 0.25, 0.5, 1, 2, 4, 8, and 16</p>
   *                <dl>
   *                   <dt>value = 0.25</dt>
   *                   <dd>
   *                         <p>
   *                         <code>MEMORY</code> = 512, 1024, or 2048</p>
   *                      </dd>
   *                   <dt>value = 0.5</dt>
   *                   <dd>
   *                         <p>
   *                         <code>MEMORY</code> = 1024, 2048, 3072, or 4096</p>
   *                      </dd>
   *                   <dt>value = 1</dt>
   *                   <dd>
   *                         <p>
   *                         <code>MEMORY</code> = 2048, 3072, 4096, 5120, 6144, 7168, or 8192</p>
   *                      </dd>
   *                   <dt>value = 2</dt>
   *                   <dd>
   *                         <p>
   *                         <code>MEMORY</code> = 4096, 5120, 6144, 7168, 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, or 16384</p>
   *                      </dd>
   *                   <dt>value = 4</dt>
   *                   <dd>
   *                         <p>
   *                         <code>MEMORY</code> = 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, 16384, 17408, 18432, 19456,
   *                            20480, 21504, 22528, 23552, 24576, 25600, 26624, 27648, 28672, 29696, or 30720</p>
   *                      </dd>
   *                   <dt>value = 8</dt>
   *                   <dd>
   *                         <p>
   *                         <code>MEMORY</code> = 16384, 20480, 24576, 28672, 32768, 36864, 40960, 45056, 49152, 53248, 57344, or 61440
   *                         </p>
   *                      </dd>
   *                   <dt>value = 16</dt>
   *                   <dd>
   *                         <p>
   *                         <code>MEMORY</code> = 32768, 40960, 49152, 57344, 65536, 73728, 81920, 90112, 98304, 106496, 114688, or 122880
   *                         </p>
   *                      </dd>
   *                </dl>
   *             </dd>
   *          </dl>
   */
  Value: string | undefined;
}

/**
 * <p>The overrides that are sent to a container.</p>
 */
export interface BatchContainerOverrides {
  /**
   * <p>The command to send to the container that overrides the default command from the Docker image or the task definition.</p>
   */
  Command?: string[];

  /**
   * <p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing
   *          environment variables from the Docker image or the task definition.</p>
   *          <note>
   *             <p>Environment variables cannot start with "<code>Batch</code>". This naming convention is reserved for variables that Batch sets.</p>
   *          </note>
   */
  Environment?: BatchEnvironmentVariable[];

  /**
   * <p>The instance type to use for a multi-node parallel job.</p>
   *          <note>
   *             <p>This parameter isn't applicable to single-node container jobs or jobs that run on Fargate resources, and shouldn't be provided.</p>
   *          </note>
   */
  InstanceType?: string;

  /**
   * <p>The type and amount of resources to assign to a container. This overrides the settings in the job definition. The supported resources include <code>GPU</code>, <code>MEMORY</code>,
   *          and <code>VCPU</code>.</p>
   */
  ResourceRequirements?: BatchResourceRequirement[];
}

export enum BatchJobDependencyType {
  N_TO_N = "N_TO_N",
  SEQUENTIAL = "SEQUENTIAL",
}

/**
 * <p>An object that represents an Batch job dependency.</p>
 */
export interface BatchJobDependency {
  /**
   * <p>The job ID of the Batch job that's associated with this dependency.</p>
   */
  JobId?: string;

  /**
   * <p>The type of the job dependency.</p>
   */
  Type?: BatchJobDependencyType | string;
}

/**
 * <p>The retry strategy that's associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">
 *          Automated job retries</a> in the <i>Batch User Guide</i>.</p>
 */
export interface BatchRetryStrategy {
  /**
   * <p>The number of times to move a job to the <code>RUNNABLE</code> status. If the value of <code>attempts</code> is greater than one, the job is retried on
   *          failure the same number of attempts as the value.</p>
   */
  Attempts?: number;
}

/**
 * <p>The details of a capacity provider strategy. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html">CapacityProviderStrategyItem</a> in the Amazon ECS API Reference.</p>
 */
export interface CapacityProviderStrategyItem {
  /**
   * <p>The short name of the capacity provider.</p>
   */
  capacityProvider: string | undefined;

  /**
   * <p>The weight value designates the relative percentage of the total number of tasks launched
   *          that should use the specified capacity provider. The weight value is taken into consideration
   *          after the base value, if defined, is satisfied.</p>
   */
  weight?: number;

  /**
   * <p>The base value designates how many tasks, at a minimum, to run on the specified capacity
   *          provider. Only one capacity provider in a capacity provider strategy can have a base defined.
   *          If no value is specified, the default value of 0 is used. </p>
   */
  base?: number;
}

/**
 * <p>An action you attempted resulted in an exception.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that caused the exception.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The type of resource that caused the exception.</p>
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

export enum RequestedPipeState {
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
}

/**
 * <p>These are custom parameter to be used when the target is an API Gateway REST APIs or
 *          EventBridge ApiDestinations. In the latter case, these are merged with any
 *          InvocationParameters specified on the Connection, with any values from the Connection taking
 *          precedence.</p>
 */
export interface PipeEnrichmentHttpParameters {
  /**
   * <p>The path parameter values to be used to populate API Gateway REST API or EventBridge
   *          ApiDestination path wildcards ("*").</p>
   */
  PathParameterValues?: string[];

  /**
   * <p>The headers that need to be sent as part of request invoking the API Gateway REST API or
   *          EventBridge ApiDestination.</p>
   */
  HeaderParameters?: Record<string, string>;

  /**
   * <p>The query string keys/values that need to be sent as part of request invoking the API Gateway
   *          REST API or EventBridge ApiDestination.</p>
   */
  QueryStringParameters?: Record<string, string>;
}

/**
 * <p>The parameters required to set up enrichment on your pipe.</p>
 */
export interface PipeEnrichmentParameters {
  /**
   * <p>Valid JSON text passed to the enrichment. In this case, nothing from the event itself is
   *          passed to the enrichment. For more information, see <a href="http://www.rfc-editor.org/rfc/rfc7159.txt">The JavaScript Object Notation (JSON) Data
   *             Interchange Format</a>.</p>
   */
  InputTemplate?: string;

  /**
   * <p>Contains the HTTP parameters to use when the target is a API Gateway REST endpoint or
   *          EventBridge ApiDestination.</p>
   *          <p>If you specify an API Gateway REST API or EventBridge ApiDestination as a target, you can
   *          use this parameter to specify headers, path parameters, and query string keys/values as part
   *          of your target invoking request. If you're using ApiDestinations, the corresponding Connection
   *          can also have these values configured. In case of any conflicting keys, values from the
   *          Connection take precedence.</p>
   */
  HttpParameters?: PipeEnrichmentHttpParameters;
}

/**
 * <p>The Secrets Manager secret that stores your broker credentials.</p>
 */
export type MQBrokerAccessCredentials =
  | MQBrokerAccessCredentials.BasicAuthMember
  | MQBrokerAccessCredentials.$UnknownMember;

export namespace MQBrokerAccessCredentials {
  /**
   * <p>The ARN of the Secrets Manager secret.</p>
   */
  export interface BasicAuthMember {
    BasicAuth: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    BasicAuth?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    BasicAuth: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MQBrokerAccessCredentials, visitor: Visitor<T>): T => {
    if (value.BasicAuth !== undefined) return visitor.BasicAuth(value.BasicAuth);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The parameters for using an Active MQ broker as a source.</p>
 */
export interface PipeSourceActiveMQBrokerParameters {
  /**
   * <p>The credentials needed to access the resource.</p>
   */
  Credentials: MQBrokerAccessCredentials | undefined;

  /**
   * <p>The name of the destination queue to consume.</p>
   */
  QueueName: string | undefined;

  /**
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;
}

/**
 * <p>A <code>DeadLetterConfig</code> object that contains information about a dead-letter queue configuration.</p>
 */
export interface DeadLetterConfig {
  /**
   * <p>The ARN of the Amazon SQS queue specified as the target for the dead-letter queue.</p>
   */
  Arn?: string;
}

export enum OnPartialBatchItemFailureStreams {
  AUTOMATIC_BISECT = "AUTOMATIC_BISECT",
}

export enum DynamoDBStreamStartPosition {
  LATEST = "LATEST",
  TRIM_HORIZON = "TRIM_HORIZON",
}

/**
 * <p>The parameters for using a DynamoDB stream as a source.</p>
 */
export interface PipeSourceDynamoDBStreamParameters {
  /**
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * <p>Define the target queue to send dead-letter queue events to.</p>
   */
  DeadLetterConfig?: DeadLetterConfig;

  /**
   * <p>(Streams only) Define how to handle item process failures. <code>AUTOMATIC_BISECT</code> halves each batch and retry each half
   * until all the records are processed or there is one failed message left in the batch.</p>
   */
  OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams | string;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;

  /**
   * <p>(Streams only) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite.
   * When the value is set to infinite, EventBridge never discards old records. </p>
   */
  MaximumRecordAgeInSeconds?: number;

  /**
   * <p>(Streams only) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of
   * retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * <p>(Streams only) The number of batches to process concurrently from each shard. The default value is 1.</p>
   */
  ParallelizationFactor?: number;

  /**
   * <p>(Streams only) The position in a stream from which to start reading.</p>
   */
  StartingPosition: DynamoDBStreamStartPosition | string | undefined;
}

/**
 * <p>Filter events using an event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
 *          Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
 */
export interface Filter {
  /**
   * <p>The event pattern.</p>
   */
  Pattern?: string;
}

/**
 * <p>The collection of event patterns used to filter events. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
 *          Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
 */
export interface FilterCriteria {
  /**
   * <p>The event patterns.</p>
   */
  Filters?: Filter[];
}

export enum KinesisStreamStartPosition {
  AT_TIMESTAMP = "AT_TIMESTAMP",
  LATEST = "LATEST",
  TRIM_HORIZON = "TRIM_HORIZON",
}

/**
 * <p>The parameters for using a Kinesis stream as a source.</p>
 */
export interface PipeSourceKinesisStreamParameters {
  /**
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * <p>Define the target queue to send dead-letter queue events to.</p>
   */
  DeadLetterConfig?: DeadLetterConfig;

  /**
   * <p>(Streams only) Define how to handle item process failures. <code>AUTOMATIC_BISECT</code> halves each batch and retry each half
   * until all the records are processed or there is one failed message left in the batch.</p>
   */
  OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams | string;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;

  /**
   * <p>(Streams only) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite.
   * When the value is set to infinite, EventBridge never discards old records. </p>
   */
  MaximumRecordAgeInSeconds?: number;

  /**
   * <p>(Streams only) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of
   * retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * <p>(Streams only) The number of batches to process concurrently from each shard. The default value is 1.</p>
   */
  ParallelizationFactor?: number;

  /**
   * <p>(Streams only) The position in a stream from which to start reading.</p>
   */
  StartingPosition: KinesisStreamStartPosition | string | undefined;

  /**
   * <p>With <code>StartingPosition</code> set to <code>AT_TIMESTAMP</code>, the time from which to start reading, in Unix time seconds.</p>
   */
  StartingPositionTimestamp?: Date;
}

/**
 * <p>The Secrets Manager secret that stores your stream credentials.</p>
 */
export type MSKAccessCredentials =
  | MSKAccessCredentials.ClientCertificateTlsAuthMember
  | MSKAccessCredentials.SaslScram512AuthMember
  | MSKAccessCredentials.$UnknownMember;

export namespace MSKAccessCredentials {
  /**
   * <p>The ARN of the Secrets Manager secret.</p>
   */
  export interface SaslScram512AuthMember {
    SaslScram512Auth: string;
    ClientCertificateTlsAuth?: never;
    $unknown?: never;
  }

  /**
   * <p>The ARN of the Secrets Manager secret.</p>
   */
  export interface ClientCertificateTlsAuthMember {
    SaslScram512Auth?: never;
    ClientCertificateTlsAuth: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    SaslScram512Auth?: never;
    ClientCertificateTlsAuth?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    SaslScram512Auth: (value: string) => T;
    ClientCertificateTlsAuth: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MSKAccessCredentials, visitor: Visitor<T>): T => {
    if (value.SaslScram512Auth !== undefined) return visitor.SaslScram512Auth(value.SaslScram512Auth);
    if (value.ClientCertificateTlsAuth !== undefined)
      return visitor.ClientCertificateTlsAuth(value.ClientCertificateTlsAuth);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

export enum MSKStartPosition {
  LATEST = "LATEST",
  TRIM_HORIZON = "TRIM_HORIZON",
}

/**
 * <p>The parameters for using an MSK stream as a source.</p>
 */
export interface PipeSourceManagedStreamingKafkaParameters {
  /**
   * <p>The name of the topic that the pipe will read from.</p>
   */
  TopicName: string | undefined;

  /**
   * <p>(Streams only) The position in a stream from which to start reading.</p>
   */
  StartingPosition?: MSKStartPosition | string;

  /**
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;

  /**
   * <p>The name of the destination queue to consume.</p>
   */
  ConsumerGroupID?: string;

  /**
   * <p>The credentials needed to access the resource.</p>
   */
  Credentials?: MSKAccessCredentials;
}

/**
 * <p>The parameters for using a Rabbit MQ broker as a source.</p>
 */
export interface PipeSourceRabbitMQBrokerParameters {
  /**
   * <p>The credentials needed to access the resource.</p>
   */
  Credentials: MQBrokerAccessCredentials | undefined;

  /**
   * <p>The name of the destination queue to consume.</p>
   */
  QueueName: string | undefined;

  /**
   * <p>The name of the virtual host associated with the source broker.</p>
   */
  VirtualHost?: string;

  /**
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;
}

/**
 * <p>The Secrets Manager secret that stores your stream credentials.</p>
 */
export type SelfManagedKafkaAccessConfigurationCredentials =
  | SelfManagedKafkaAccessConfigurationCredentials.BasicAuthMember
  | SelfManagedKafkaAccessConfigurationCredentials.ClientCertificateTlsAuthMember
  | SelfManagedKafkaAccessConfigurationCredentials.SaslScram256AuthMember
  | SelfManagedKafkaAccessConfigurationCredentials.SaslScram512AuthMember
  | SelfManagedKafkaAccessConfigurationCredentials.$UnknownMember;

export namespace SelfManagedKafkaAccessConfigurationCredentials {
  /**
   * <p>The ARN of the Secrets Manager secret.</p>
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
   */
  export interface ClientCertificateTlsAuthMember {
    BasicAuth?: never;
    SaslScram512Auth?: never;
    SaslScram256Auth?: never;
    ClientCertificateTlsAuth: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    BasicAuth?: never;
    SaslScram512Auth?: never;
    SaslScram256Auth?: never;
    ClientCertificateTlsAuth?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    BasicAuth: (value: string) => T;
    SaslScram512Auth: (value: string) => T;
    SaslScram256Auth: (value: string) => T;
    ClientCertificateTlsAuth: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SelfManagedKafkaAccessConfigurationCredentials, visitor: Visitor<T>): T => {
    if (value.BasicAuth !== undefined) return visitor.BasicAuth(value.BasicAuth);
    if (value.SaslScram512Auth !== undefined) return visitor.SaslScram512Auth(value.SaslScram512Auth);
    if (value.SaslScram256Auth !== undefined) return visitor.SaslScram256Auth(value.SaslScram256Auth);
    if (value.ClientCertificateTlsAuth !== undefined)
      return visitor.ClientCertificateTlsAuth(value.ClientCertificateTlsAuth);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

export enum SelfManagedKafkaStartPosition {
  LATEST = "LATEST",
  TRIM_HORIZON = "TRIM_HORIZON",
}

/**
 * <p>This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used.</p>
 */
export interface SelfManagedKafkaAccessConfigurationVpc {
  /**
   * <p>Specifies the subnets associated with the stream. These subnets must all be in the same VPC. You can specify as many as 16 subnets.</p>
   */
  Subnets?: string[];

  /**
   * <p>Specifies the security groups associated with the stream. These security groups must all be in the same VPC. You can specify as many
   *          as five security groups. If you do not specify a security group, the default security group for the VPC is used.</p>
   */
  SecurityGroup?: string[];
}

/**
 * <p>The parameters for using a self-managed Apache Kafka stream as a source.</p>
 */
export interface PipeSourceSelfManagedKafkaParameters {
  /**
   * <p>The name of the topic that the pipe will read from.</p>
   */
  TopicName: string | undefined;

  /**
   * <p>(Streams only) The position in a stream from which to start reading.</p>
   */
  StartingPosition?: SelfManagedKafkaStartPosition | string;

  /**
   * <p>An array of server URLs.</p>
   */
  AdditionalBootstrapServers?: string[];

  /**
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;

  /**
   * <p>The name of the destination queue to consume.</p>
   */
  ConsumerGroupID?: string;

  /**
   * <p>The credentials needed to access the resource.</p>
   */
  Credentials?: SelfManagedKafkaAccessConfigurationCredentials;

  /**
   * <p>The ARN of the Secrets Manager secret used for certification.</p>
   */
  ServerRootCaCertificate?: string;

  /**
   * <p>This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used.</p>
   */
  Vpc?: SelfManagedKafkaAccessConfigurationVpc;
}

/**
 * <p>The parameters for using a Amazon SQS stream as a source.</p>
 */
export interface PipeSourceSqsQueueParameters {
  /**
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;
}

/**
 * <p>The parameters required to set up a source for your pipe.</p>
 */
export interface PipeSourceParameters {
  /**
   * <p>The collection of event patterns used to filter events. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
   *          Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  FilterCriteria?: FilterCriteria;

  /**
   * <p>The parameters for using a Kinesis stream as a source.</p>
   */
  KinesisStreamParameters?: PipeSourceKinesisStreamParameters;

  /**
   * <p>The parameters for using a DynamoDB stream as a source.</p>
   */
  DynamoDBStreamParameters?: PipeSourceDynamoDBStreamParameters;

  /**
   * <p>The parameters for using a Amazon SQS stream as a source.</p>
   */
  SqsQueueParameters?: PipeSourceSqsQueueParameters;

  /**
   * <p>The parameters for using an Active MQ broker as a source.</p>
   */
  ActiveMQBrokerParameters?: PipeSourceActiveMQBrokerParameters;

  /**
   * <p>The parameters for using a Rabbit MQ broker as a source.</p>
   */
  RabbitMQBrokerParameters?: PipeSourceRabbitMQBrokerParameters;

  /**
   * <p>The parameters for using an MSK stream as a source.</p>
   */
  ManagedStreamingKafkaParameters?: PipeSourceManagedStreamingKafkaParameters;

  /**
   * <p>The parameters for using a self-managed Apache Kafka stream as a source.</p>
   */
  SelfManagedKafkaParameters?: PipeSourceSelfManagedKafkaParameters;
}

/**
 * <p>The parameters for using an Batch job as a target.</p>
 */
export interface PipeTargetBatchJobParameters {
  /**
   * <p>The job definition used by this job. This value can be one of <code>name</code>, <code>name:revision</code>, or the Amazon Resource Name (ARN) for the job definition.
   *          If name is specified without a revision then the latest active revision is used.</p>
   */
  JobDefinition: string | undefined;

  /**
   * <p>The name of the job. It can be up to 128 letters long. The first character must be alphanumeric, can contain uppercase and lowercase letters, numbers, hyphens (-),
   *          and underscores (_).</p>
   */
  JobName: string | undefined;

  /**
   * <p>The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000.
   *          If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job.</p>
   */
  ArrayProperties?: BatchArrayProperties;

  /**
   * <p>The retry strategy to use for failed jobs. When a retry strategy is specified here, it overrides the retry strategy defined in the job definition.</p>
   */
  RetryStrategy?: BatchRetryStrategy;

  /**
   * <p>The overrides that are sent to a container.</p>
   */
  ContainerOverrides?: BatchContainerOverrides;

  /**
   * <p>A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a <code>SEQUENTIAL</code> type dependency without
   *          specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an <code>N_TO_N</code>
   *          type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each
   *          dependency to complete before it can begin.</p>
   */
  DependsOn?: BatchJobDependency[];

  /**
   * <p>Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and
   *          value pair mapping. Parameters included here override any corresponding parameter defaults from the job definition.</p>
   */
  Parameters?: Record<string, string>;
}

/**
 * <p>The parameters for using an CloudWatch Logs log stream as a target.</p>
 */
export interface PipeTargetCloudWatchLogsParameters {
  /**
   * <p>The name of the log stream.</p>
   */
  LogStreamName?: string;

  /**
   * <p>The time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</p>
   */
  Timestamp?: string;
}

export enum LaunchType {
  EC2 = "EC2",
  EXTERNAL = "EXTERNAL",
  FARGATE = "FARGATE",
}

/**
 * <p>This structure specifies the network configuration for an Amazon ECS task.</p>
 */
export interface NetworkConfiguration {
  /**
   * <p>Use this structure to specify the VPC subnets and security groups for the task, and
   *          whether a public IP address is to be used. This structure is relevant only for ECS tasks that
   *          use the <code>awsvpc</code> network mode.</p>
   */
  awsvpcConfiguration?: AwsVpcConfiguration;
}

/**
 * <p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can
 *          override the existing environment variables from the Docker image or the task definition. You must also specify a container name.</p>
 */
export interface EcsEnvironmentVariable {
  /**
   * <p>The name of the key-value pair. For environment variables, this is the name of the environment variable.</p>
   */
  name?: string;

  /**
   * <p>The value of the key-value pair. For environment variables, this is the value of the environment variable.</p>
   */
  value?: string;
}

export enum EcsEnvironmentFileType {
  s3 = "s3",
}

/**
 * <p>A list of files containing the environment variables to pass to a container. You can
 *          specify up to ten environment files. The file must have a <code>.env</code> file
 *          extension. Each line in an environment file should contain an environment variable in
 *          <code>VARIABLE=VALUE</code> format. Lines beginning with <code>#</code> are treated
 *          as comments and are ignored. For more information about the environment variable file
 *          syntax, see <a href="https://docs.docker.com/compose/env-file/">Declare default
 *             environment variables in file</a>.</p>
 *          <p>If there are environment variables specified using the <code>environment</code>
 *             parameter in a container definition, they take precedence over the variables contained
 *             within an environment file. If multiple environment files are specified that contain the
 *             same variable, they're processed from the top down. We recommend that you use unique
 *             variable names. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html">Specifying environment
 *                variables</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 *          <p>This parameter is only supported for tasks hosted on Fargate using the
 *             following platform versions:</p>
 *          <ul>
 *             <li>
 *                <p>Linux platform version <code>1.4.0</code> or later.</p>
 *             </li>
 *             <li>
 *                <p>Windows platform version <code>1.0.0</code> or later.</p>
 *             </li>
 *          </ul>
 */
export interface EcsEnvironmentFile {
  /**
   * <p>The file type to use. The only supported value is <code>s3</code>.</p>
   */
  type: EcsEnvironmentFileType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon S3 object containing the environment variable file.</p>
   */
  value: string | undefined;
}

export enum EcsResourceRequirementType {
  GPU = "GPU",
  InferenceAccelerator = "InferenceAccelerator",
}

/**
 * <p>The type and amount of a resource to assign to a container. The supported resource
 *          types are GPUs and Elastic Inference accelerators. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html">Working with
 *             GPUs on Amazon ECS</a> or <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html">Working with
 *                Amazon Elastic Inference on Amazon ECS</a> in the
 *          <i>Amazon Elastic Container Service Developer Guide</i>
 *          </p>
 */
export interface EcsResourceRequirement {
  /**
   * <p>The type of resource to assign to a container. The supported values are
   *          <code>GPU</code> or <code>InferenceAccelerator</code>.</p>
   */
  type: EcsResourceRequirementType | string | undefined;

  /**
   * <p>The value for the specified resource type.</p>
   *          <p>If the <code>GPU</code> type is used, the value is the number of physical
   *          <code>GPUs</code> the Amazon ECS container agent reserves for the container. The number
   *          of GPUs that's reserved for all containers in a task can't exceed the number of
   *          available GPUs on the container instance that the task is launched on.</p>
   *          <p>If the <code>InferenceAccelerator</code> type is used, the <code>value</code> matches
   *          the <code>deviceName</code> for an InferenceAccelerator specified in a
   *          task definition.</p>
   */
  value: string | undefined;
}

/**
 * <p>The overrides that are sent to a container. An empty container override can be passed in. An example of an empty
 *          container override is <code>{"containerOverrides": [ ] }</code>. If a non-empty container override is specified, the <code>name</code> parameter must be included.</p>
 */
export interface EcsContainerOverride {
  /**
   * <p>The command to send to the container that overrides the default command from the Docker image or the task definition. You must also specify a container name.</p>
   */
  Command?: string[];

  /**
   * <p>The number of <code>cpu</code> units reserved for the container, instead of the default value from the task definition. You must also specify a container name.</p>
   */
  Cpu?: number;

  /**
   * <p>The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can
   *          override the existing environment variables from the Docker image or the task definition. You must also specify a container name.</p>
   */
  Environment?: EcsEnvironmentVariable[];

  /**
   * <p>A list of files containing the environment variables to pass to a container, instead of the value from the container definition.</p>
   */
  EnvironmentFiles?: EcsEnvironmentFile[];

  /**
   * <p>The hard limit (in MiB) of memory to present to the container, instead of the default value from the task definition.
   *          If your container attempts to exceed the memory specified here, the container is killed. You must also specify a container name.</p>
   */
  Memory?: number;

  /**
   * <p>The soft limit (in MiB) of memory to reserve for the container, instead of the default value from the task definition.
   *          You must also specify a container name.</p>
   */
  MemoryReservation?: number;

  /**
   * <p>The name of the container that receives the override. This parameter is required if any override is specified.</p>
   */
  Name?: string;

  /**
   * <p>The type and amount of a resource to assign to a container, instead of the default value from the task definition. The only supported resource is a GPU.</p>
   */
  ResourceRequirements?: EcsResourceRequirement[];
}

/**
 * <p>The amount of ephemeral storage to allocate for the task. This parameter is used to
 *          expand the total amount of ephemeral storage available, beyond the default amount, for
 *          tasks hosted on Fargate. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/userguide/using_data_volumes.html">Fargate task
 *             storage</a> in the <i>Amazon ECS User Guide for Fargate</i>.</p>
 *          <note>
 *             <p>This parameter is only supported for tasks hosted on Fargate using
 *                Linux platform version <code>1.4.0</code> or later. This parameter is not supported
 *                for Windows containers on Fargate.</p>
 *          </note>
 */
export interface EcsEphemeralStorage {
  /**
   * <p>The total amount, in GiB, of ephemeral storage to set for the task. The minimum
   *          supported value is <code>21</code> GiB and the maximum supported value is
   *          <code>200</code> GiB.</p>
   */
  sizeInGiB: number | undefined;
}

/**
 * <p>Details on an Elastic Inference accelerator task override. This parameter is used to
 *          override the Elastic Inference accelerator specified in the task definition. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/userguide/ecs-inference.html">Working with Amazon
 *             Elastic Inference on Amazon ECS</a> in the
 *          <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export interface EcsInferenceAcceleratorOverride {
  /**
   * <p>The Elastic Inference accelerator device name to override for the task. This parameter must match a <code>deviceName</code> specified in the task definition.</p>
   */
  deviceName?: string;

  /**
   * <p>The Elastic Inference accelerator type to use.</p>
   */
  deviceType?: string;
}

/**
 * <p>The overrides that are associated with a task.</p>
 */
export interface EcsTaskOverride {
  /**
   * <p>One or more container overrides that are sent to a task.</p>
   */
  ContainerOverrides?: EcsContainerOverride[];

  /**
   * <p>The cpu override for the task.</p>
   */
  Cpu?: string;

  /**
   * <p>The ephemeral storage setting override for the task.</p>
   *          <note>
   *             <p>This parameter is only supported for tasks hosted on Fargate that
   *             use the following platform versions:</p>
   *             <ul>
   *                <li>
   *                   <p>Linux platform version <code>1.4.0</code> or later.</p>
   *                </li>
   *                <li>
   *                   <p>Windows platform version <code>1.0.0</code> or later.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  EphemeralStorage?: EcsEphemeralStorage;

  /**
   * <p>The Amazon Resource Name (ARN) of the task execution IAM role override for the task. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html">Amazon ECS task
   *             execution IAM role</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>The Elastic Inference accelerator override for the task.</p>
   */
  InferenceAcceleratorOverrides?: EcsInferenceAcceleratorOverride[];

  /**
   * <p>The memory override for the task.</p>
   */
  Memory?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. All containers
   *          in this task are granted the permissions that are specified in this role. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html">IAM Role for Tasks</a>
   *          in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  TaskRoleArn?: string;
}

export enum PlacementConstraintType {
  DISTINCT_INSTANCE = "distinctInstance",
  MEMBER_OF = "memberOf",
}

/**
 * <p>An object representing a constraint on task placement. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the Amazon Elastic Container Service Developer
 *          Guide.</p>
 */
export interface PlacementConstraint {
  /**
   * <p>The type of constraint. Use distinctInstance to ensure that each task in a particular
   *          group is running on a different container instance. Use memberOf to restrict the selection to
   *          a group of valid candidates. </p>
   */
  type?: PlacementConstraintType | string;

  /**
   * <p>A cluster query language expression to apply to the constraint. You cannot specify an
   *          expression if the constraint type is <code>distinctInstance</code>. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the Amazon Elastic Container Service Developer Guide.
   *       </p>
   */
  expression?: string;
}

export enum PlacementStrategyType {
  BINPACK = "binpack",
  RANDOM = "random",
  SPREAD = "spread",
}

/**
 * <p>The task placement strategy for a task or service. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the Amazon Elastic Container Service Service Developer
 *          Guide.</p>
 */
export interface PlacementStrategy {
  /**
   * <p>The type of placement strategy. The random placement strategy randomly places tasks on
   *          available candidates. The spread placement strategy spreads placement across available
   *          candidates evenly based on the field parameter. The binpack strategy places tasks on available
   *          candidates that have the least available amount of the resource that is specified with the
   *          field parameter. For example, if you binpack on memory, a task is placed on the instance with
   *          the least amount of remaining memory (but still enough to run the task). </p>
   */
  type?: PlacementStrategyType | string;

  /**
   * <p>The field to apply the placement strategy against. For the spread placement strategy,
   *          valid values are instanceId (or host, which has the same effect), or any platform or custom
   *          attribute that is applied to a container instance, such as attribute:ecs.availability-zone.
   *          For the binpack placement strategy, valid values are cpu and memory. For the random placement
   *          strategy, this field is not used. </p>
   */
  field?: string;
}

export enum PropagateTags {
  TASK_DEFINITION = "TASK_DEFINITION",
}

/**
 * <p>A key-value pair associated with an Amazon Web Services resource. In EventBridge, rules and event buses
 *          support tagging.</p>
 */
export interface Tag {
  /**
   * <p>A string you can use to assign a value. The combination of tag keys and values can help
   *          you organize and categorize your resources.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value for the specified tag key.</p>
   */
  Value: string | undefined;
}

/**
 * <p>The parameters for using an Amazon ECS task as a target.</p>
 */
export interface PipeTargetEcsTaskParameters {
  /**
   * <p>The ARN of the task definition to use if the event target is an Amazon ECS task. </p>
   */
  TaskDefinitionArn: string | undefined;

  /**
   * <p>The number of tasks to create based on <code>TaskDefinition</code>. The default is 1.</p>
   */
  TaskCount?: number;

  /**
   * <p>Specifies the launch type on which your task is running. The launch type that you specify
   *          here must match one of the launch type (compatibilities) of the target task. The
   *          <code>FARGATE</code> value is supported only in the Regions where Fargate with Amazon ECS
   *          is supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS-Fargate.html">Fargate on Amazon ECS</a> in
   *          the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  LaunchType?: LaunchType | string;

  /**
   * <p>Use this structure if the Amazon ECS task uses the <code>awsvpc</code> network mode. This
   *          structure specifies the VPC subnets and security groups associated with the task, and whether
   *          a public IP address is to be used. This structure is required if <code>LaunchType</code> is
   *          <code>FARGATE</code> because the <code>awsvpc</code> mode is required for Fargate
   *          tasks.</p>
   *          <p>If you specify <code>NetworkConfiguration</code> when the target ECS task does not use the
   *          <code>awsvpc</code> network mode, the task fails.</p>
   */
  NetworkConfiguration?: NetworkConfiguration;

  /**
   * <p>Specifies the platform version for the task. Specify only the numeric portion of the
   *          platform version, such as <code>1.1.0</code>.</p>
   *          <p>This structure is used only if <code>LaunchType</code> is <code>FARGATE</code>. For more
   *          information about valid platform versions, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate Platform
   *             Versions</a> in the <i>Amazon Elastic Container Service Developer
   *                Guide</i>.</p>
   */
  PlatformVersion?: string;

  /**
   * <p>Specifies an Amazon ECS task group for the task. The maximum length is 255 characters.</p>
   */
  Group?: string;

  /**
   * <p>The capacity provider strategy to use for the task.</p>
   *          <p>If a <code>capacityProviderStrategy</code> is specified, the <code>launchType</code>
   *          parameter must be omitted. If no <code>capacityProviderStrategy</code> or launchType is
   *          specified, the <code>defaultCapacityProviderStrategy</code> for the cluster is used. </p>
   */
  CapacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * <p>Specifies whether to enable Amazon ECS managed tags for the task. For more information,
   *          see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS Resources</a> in the Amazon Elastic Container Service Developer
   *          Guide. </p>
   */
  EnableECSManagedTags?: boolean;

  /**
   * <p>Whether or not to enable the execute command functionality for the containers in this
   *          task. If true, this enables execute command functionality on all containers in the
   *          task.</p>
   */
  EnableExecuteCommand?: boolean;

  /**
   * <p>An array of placement constraint objects to use for the task. You can specify up to 10
   *          constraints per task (including constraints in the task definition and those specified at
   *          runtime).</p>
   */
  PlacementConstraints?: PlacementConstraint[];

  /**
   * <p>The placement strategy objects to use for the task. You can specify a maximum of five
   *          strategy rules per task. </p>
   */
  PlacementStrategy?: PlacementStrategy[];

  /**
   * <p>Specifies whether to propagate the tags from the task definition to the task. If no value
   *          is specified, the tags are not propagated. Tags can only be propagated to the task during task
   *          creation. To add tags to a task after task creation, use the <code>TagResource</code> API action. </p>
   */
  PropagateTags?: PropagateTags | string;

  /**
   * <p>The reference ID to use for the task.</p>
   */
  ReferenceId?: string;

  /**
   * <p>The overrides that are associated with a task.</p>
   */
  Overrides?: EcsTaskOverride;

  /**
   * <p>The metadata that you apply to the task to help you categorize and organize them. Each tag
   *          consists of a key and an optional value, both of which you define. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-tags">RunTask</a> in the Amazon ECS API Reference.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>The parameters for using an EventBridge event bus as a target.</p>
 */
export interface PipeTargetEventBridgeEventBusParameters {
  /**
   * <p>The URL subdomain of the endpoint. For example, if the URL for Endpoint is https://abcde.veo.endpoints.event.amazonaws.com, then the EndpointId is <code>abcde.veo</code>.</p>
   *          <important>
   *             <p>When using Java, you must include <code>auth-crt</code> on the class path.</p>
   *          </important>
   */
  EndpointId?: string;

  /**
   * <p>A free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.</p>
   */
  DetailType?: string;

  /**
   * <p>The source of the event.</p>
   */
  Source?: string;

  /**
   * <p>Amazon Web Services resources, identified by Amazon Resource Name (ARN), which the event primarily
   *          concerns. Any number, including zero, may be present.</p>
   */
  Resources?: string[];

  /**
   * <p>The time stamp of the event, per <a href="https://www.rfc-editor.org/rfc/rfc3339.txt">RFC3339</a>. If no time stamp is provided, the time stamp of the <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html">PutEvents</a> call is used.</p>
   */
  Time?: string;
}

/**
 * <p>These are custom parameter to be used when the target is an API Gateway REST APIs or
 *       EventBridge ApiDestinations.</p>
 */
export interface PipeTargetHttpParameters {
  /**
   * <p>The path parameter values to be used to populate API Gateway REST API or EventBridge
   *          ApiDestination path wildcards ("*").</p>
   */
  PathParameterValues?: string[];

  /**
   * <p>The headers that need to be sent as part of request invoking the API Gateway REST API or
   *          EventBridge ApiDestination.</p>
   */
  HeaderParameters?: Record<string, string>;

  /**
   * <p>The query string keys/values that need to be sent as part of request invoking the API Gateway
   *          REST API or EventBridge ApiDestination.</p>
   */
  QueryStringParameters?: Record<string, string>;
}

/**
 * <p>The parameters for using a Kinesis stream as a source.</p>
 */
export interface PipeTargetKinesisStreamParameters {
  /**
   * <p>Determines which shard in the stream the data record is assigned to. Partition keys are Unicode strings with a maximum length limit of 256 characters
   *          for each key. Amazon Kinesis Data Streams uses the partition key as input to a hash function that maps the partition key and associated data to a specific shard.
   *          Specifically, an MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this
   *          hashing mechanism, all data records with the same partition key map to the same shard within the stream.</p>
   */
  PartitionKey: string | undefined;
}

export enum PipeTargetInvocationType {
  FIRE_AND_FORGET = "FIRE_AND_FORGET",
  REQUEST_RESPONSE = "REQUEST_RESPONSE",
}

/**
 * <p>The parameters for using a Lambda function as a target.</p>
 */
export interface PipeTargetLambdaFunctionParameters {
  /**
   * <p>Choose from the following options.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RequestResponse</code> (default) - Invoke the function synchronously. Keep the connection open until
   *                the function returns a response or times out. The API response includes the function response and additional
   *                data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Event</code> - Invoke the function asynchronously. Send events that fail multiple times to the
   *                function's dead-letter queue (if it's configured). The API response only includes a status code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DryRun</code> - Validate parameter values and verify that the user or role has permission to invoke
   *                the function.</p>
   *             </li>
   *          </ul>
   */
  InvocationType?: PipeTargetInvocationType | string;
}

/**
 * <p>These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the
 *       Amazon Redshift Data API ExecuteStatement.</p>
 */
export interface PipeTargetRedshiftDataParameters {
  /**
   * <p>The name or ARN of the secret that enables access to the database. Required when
   *          authenticating using SageMaker.</p>
   */
  SecretManagerArn?: string;

  /**
   * <p>The name of the database. Required when authenticating using temporary credentials.</p>
   */
  Database: string | undefined;

  /**
   * <p>The database user name. Required when authenticating using temporary credentials.</p>
   */
  DbUser?: string;

  /**
   * <p>The name of the SQL statement. You can name the SQL statement when you create it to
   *          identify the query.</p>
   */
  StatementName?: string;

  /**
   * <p>Indicates whether to send an event back to EventBridge after the SQL statement
   *          runs.</p>
   */
  WithEvent?: boolean;

  /**
   * <p>The SQL statement text to run.</p>
   */
  Sqls: string[] | undefined;
}

/**
 * <p>Name/Value pair of a parameter to start execution of a SageMaker Model Building
 *          Pipeline.</p>
 */
export interface SageMakerPipelineParameter {
  /**
   * <p>Name of parameter to start execution of a SageMaker Model Building Pipeline.</p>
   */
  Name: string | undefined;

  /**
   * <p>Value of parameter to start execution of a SageMaker Model Building Pipeline.</p>
   */
  Value: string | undefined;
}

/**
 * <p>The parameters for using a SageMaker pipeline as a target.</p>
 */
export interface PipeTargetSageMakerPipelineParameters {
  /**
   * <p>List of Parameter names and values for SageMaker Model Building Pipeline execution.</p>
   */
  PipelineParameterList?: SageMakerPipelineParameter[];
}

/**
 * <p>The parameters for using a Amazon SQS stream as a source.</p>
 */
export interface PipeTargetSqsQueueParameters {
  /**
   * <p>The FIFO message group ID to use as the target.</p>
   */
  MessageGroupId?: string;

  /**
   * <p>This parameter applies only to FIFO (first-in-first-out) queues.</p>
   *          <p>The token used for deduplication of sent messages.</p>
   */
  MessageDeduplicationId?: string;
}

/**
 * <p>The parameters for using a Step Functions state machine as a target.</p>
 */
export interface PipeTargetStateMachineParameters {
  /**
   * <p>Specify whether to wait for the state machine to finish or not.</p>
   */
  InvocationType?: PipeTargetInvocationType | string;
}

/**
 * <p>The parameters required to set up a target for your pipe.</p>
 */
export interface PipeTargetParameters {
  /**
   * <p>Valid JSON text passed to the target. In this case, nothing from the event itself is
   *          passed to the target. For more information, see <a href="http://www.rfc-editor.org/rfc/rfc7159.txt">The JavaScript Object Notation (JSON) Data
   *             Interchange Format</a>.</p>
   */
  InputTemplate?: string;

  /**
   * <p>The parameters for using a Lambda function as a target.</p>
   */
  LambdaFunctionParameters?: PipeTargetLambdaFunctionParameters;

  /**
   * <p>The parameters for using a Step Functions state machine as a target.</p>
   */
  StepFunctionStateMachineParameters?: PipeTargetStateMachineParameters;

  /**
   * <p>The parameters for using a Kinesis stream as a source.</p>
   */
  KinesisStreamParameters?: PipeTargetKinesisStreamParameters;

  /**
   * <p>The parameters for using an Amazon ECS task as a target.</p>
   */
  EcsTaskParameters?: PipeTargetEcsTaskParameters;

  /**
   * <p>The parameters for using an Batch job as a target.</p>
   */
  BatchJobParameters?: PipeTargetBatchJobParameters;

  /**
   * <p>The parameters for using a Amazon SQS stream as a source.</p>
   */
  SqsQueueParameters?: PipeTargetSqsQueueParameters;

  /**
   * <p>These are custom parameter to be used when the target is an API Gateway REST APIs or
   *       EventBridge ApiDestinations.</p>
   */
  HttpParameters?: PipeTargetHttpParameters;

  /**
   * <p>These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the
   *       Amazon Redshift Data API ExecuteStatement.</p>
   */
  RedshiftDataParameters?: PipeTargetRedshiftDataParameters;

  /**
   * <p>The parameters for using a SageMaker pipeline as a target.</p>
   */
  SageMakerPipelineParameters?: PipeTargetSageMakerPipelineParameters;

  /**
   * <p>The parameters for using an EventBridge event bus as a target.</p>
   */
  EventBridgeEventBusParameters?: PipeTargetEventBridgeEventBusParameters;

  /**
   * <p>The parameters for using an CloudWatch Logs log stream as a target.</p>
   */
  CloudWatchLogsParameters?: PipeTargetCloudWatchLogsParameters;
}

export interface CreatePipeRequest {
  /**
   * <p>The name of the pipe.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the pipe.</p>
   */
  Description?: string;

  /**
   * <p>The state the pipe should be in.</p>
   */
  DesiredState?: RequestedPipeState | string;

  /**
   * <p>The ARN of the source resource.</p>
   */
  Source: string | undefined;

  /**
   * <p>The parameters required to set up a source for your pipe.</p>
   */
  SourceParameters?: PipeSourceParameters;

  /**
   * <p>The ARN of the enrichment resource.</p>
   */
  Enrichment?: string;

  /**
   * <p>The parameters required to set up enrichment on your pipe.</p>
   */
  EnrichmentParameters?: PipeEnrichmentParameters;

  /**
   * <p>The ARN of the target resource.</p>
   */
  Target: string | undefined;

  /**
   * <p>The parameters required to set up a target for your pipe.</p>
   */
  TargetParameters?: PipeTargetParameters;

  /**
   * <p>The ARN of the role that allows the pipe to send data to the target.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the pipe.</p>
   */
  Tags?: Record<string, string>;
}

export enum PipeState {
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETING = "DELETING",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  START_FAILED = "START_FAILED",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  STOP_FAILED = "STOP_FAILED",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATING = "UPDATING",
}

export interface CreatePipeResponse {
  /**
   * <p>The ARN of the pipe.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the pipe.</p>
   */
  Name?: string;

  /**
   * <p>The state the pipe should be in.</p>
   */
  DesiredState?: RequestedPipeState | string;

  /**
   * <p>The state the pipe is in.</p>
   */
  CurrentState?: PipeState | string;

  /**
   * <p>The time the pipe was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  LastModifiedTime?: Date;
}

/**
 * <p>This exception occurs due to unexpected causes.</p>
 */
export class InternalException extends __BaseException {
  readonly name: "InternalException" = "InternalException";
  readonly $fault: "server" = "server";
  /**
   * <p>The number of seconds to wait before retrying the action that caused the exception.</p>
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalException, __BaseException>) {
    super({
      name: "InternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>An entity that you specified does not exist.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * <p>A quota has been exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that caused the exception.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The type of resource that caused the exception.</p>
   */
  resourceType: string | undefined;

  /**
   * <p>The identifier of the service that caused the exception.</p>
   */
  serviceCode: string | undefined;

  /**
   * <p>The identifier of the quota that caused the exception.</p>
   */
  quotaCode: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * <p>An action was throttled.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier of the service that caused the exception.</p>
   */
  serviceCode?: string;

  /**
   * <p>The identifier of the quota that caused the exception.</p>
   */
  quotaCode?: string;

  /**
   * <p>The number of seconds to wait before retrying the action that caused the exception.</p>
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>Indicates that an error has occurred while performing a validate operation.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the exception.</p>
   */
  name: string | undefined;

  /**
   * <p>The message of the exception.</p>
   */
  message: string | undefined;
}

/**
 * <p>Indicates that an error has occurred while performing a validate operation.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The list of fields for which validation failed and the corresponding failure messages.</p>
   */
  fieldList?: ValidationExceptionField[];

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.fieldList = opts.fieldList;
  }
}

export interface DeletePipeRequest {
  /**
   * <p>The name of the pipe.</p>
   */
  Name: string | undefined;
}

export enum RequestedPipeStateDescribeResponse {
  DELETED = "DELETED",
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
}

export interface DeletePipeResponse {
  /**
   * <p>The ARN of the pipe.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the pipe.</p>
   */
  Name?: string;

  /**
   * <p>The state the pipe should be in.</p>
   */
  DesiredState?: RequestedPipeStateDescribeResponse | string;

  /**
   * <p>The state the pipe is in.</p>
   */
  CurrentState?: PipeState | string;

  /**
   * <p>The time the pipe was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  LastModifiedTime?: Date;
}

export interface DescribePipeRequest {
  /**
   * <p>The name of the pipe.</p>
   */
  Name: string | undefined;
}

export interface DescribePipeResponse {
  /**
   * <p>The ARN of the pipe.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the pipe.</p>
   */
  Name?: string;

  /**
   * <p>A description of the pipe.</p>
   */
  Description?: string;

  /**
   * <p>The state the pipe should be in.</p>
   */
  DesiredState?: RequestedPipeStateDescribeResponse | string;

  /**
   * <p>The state the pipe is in.</p>
   */
  CurrentState?: PipeState | string;

  /**
   * <p>The reason the pipe is in its current state.</p>
   */
  StateReason?: string;

  /**
   * <p>The ARN of the source resource.</p>
   */
  Source?: string;

  /**
   * <p>The parameters required to set up a source for your pipe.</p>
   */
  SourceParameters?: PipeSourceParameters;

  /**
   * <p>The ARN of the enrichment resource.</p>
   */
  Enrichment?: string;

  /**
   * <p>The parameters required to set up enrichment on your pipe.</p>
   */
  EnrichmentParameters?: PipeEnrichmentParameters;

  /**
   * <p>The ARN of the target resource.</p>
   */
  Target?: string;

  /**
   * <p>The parameters required to set up a target for your pipe.</p>
   */
  TargetParameters?: PipeTargetParameters;

  /**
   * <p>The ARN of the role that allows the pipe to send data to the target.</p>
   */
  RoleArn?: string;

  /**
   * <p>The list of key-value pairs to associate with the pipe.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The time the pipe was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  LastModifiedTime?: Date;
}

export interface ListPipesRequest {
  /**
   * <p>A value that will return a subset of the pipes associated with this account. For example, <code>"NamePrefix": "ABC"</code> will return
   *          all endpoints with "ABC" in the name.</p>
   */
  NamePrefix?: string;

  /**
   * <p>The state the pipe should be in.</p>
   */
  DesiredState?: RequestedPipeState | string;

  /**
   * <p>The state the pipe is in.</p>
   */
  CurrentState?: PipeState | string;

  /**
   * <p>The prefix matching the pipe source.</p>
   */
  SourcePrefix?: string;

  /**
   * <p>The prefix matching the pipe target.</p>
   */
  TargetPrefix?: string;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination
   *          token will return an HTTP 400 InvalidToken error.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of pipes to include in the response.</p>
   */
  Limit?: number;
}

/**
 * <p>An object that represents a pipe. Amazon EventBridgePipes connect event sources to targets and reduces the need for specialized knowledge and integration code.</p>
 */
export interface Pipe {
  /**
   * <p>The name of the pipe.</p>
   */
  Name?: string;

  /**
   * <p>The ARN of the pipe.</p>
   */
  Arn?: string;

  /**
   * <p>The state the pipe should be in.</p>
   */
  DesiredState?: RequestedPipeState | string;

  /**
   * <p>The state the pipe is in.</p>
   */
  CurrentState?: PipeState | string;

  /**
   * <p>The reason the pipe is in its current state.</p>
   */
  StateReason?: string;

  /**
   * <p>The time the pipe was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The ARN of the source resource.</p>
   */
  Source?: string;

  /**
   * <p>The ARN of the target resource.</p>
   */
  Target?: string;

  /**
   * <p>The ARN of the enrichment resource.</p>
   */
  Enrichment?: string;
}

export interface ListPipesResponse {
  /**
   * <p>The pipes returned by the call.</p>
   */
  Pipes?: Pipe[];

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination
   *          token will return an HTTP 400 InvalidToken error.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the pipe for which you want to view tags.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of key-value pairs to associate with the pipe.</p>
   */
  tags?: Record<string, string>;
}

export interface StartPipeRequest {
  /**
   * <p>The name of the pipe.</p>
   */
  Name: string | undefined;
}

export interface StartPipeResponse {
  /**
   * <p>The ARN of the pipe.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the pipe.</p>
   */
  Name?: string;

  /**
   * <p>The state the pipe should be in.</p>
   */
  DesiredState?: RequestedPipeState | string;

  /**
   * <p>The state the pipe is in.</p>
   */
  CurrentState?: PipeState | string;

  /**
   * <p>The time the pipe was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  LastModifiedTime?: Date;
}

export interface StopPipeRequest {
  /**
   * <p>The name of the pipe.</p>
   */
  Name: string | undefined;
}

export interface StopPipeResponse {
  /**
   * <p>The ARN of the pipe.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the pipe.</p>
   */
  Name?: string;

  /**
   * <p>The state the pipe should be in.</p>
   */
  DesiredState?: RequestedPipeState | string;

  /**
   * <p>The state the pipe is in.</p>
   */
  CurrentState?: PipeState | string;

  /**
   * <p>The time the pipe was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  LastModifiedTime?: Date;
}

/**
 * <p>The parameters for using an Active MQ broker as a source.</p>
 */
export interface UpdatePipeSourceActiveMQBrokerParameters {
  /**
   * <p>The credentials needed to access the resource.</p>
   */
  Credentials: MQBrokerAccessCredentials | undefined;

  /**
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;
}

/**
 * <p>The parameters for using a DynamoDB stream as a source.</p>
 */
export interface UpdatePipeSourceDynamoDBStreamParameters {
  /**
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * <p>Define the target queue to send dead-letter queue events to.</p>
   */
  DeadLetterConfig?: DeadLetterConfig;

  /**
   * <p>(Streams only) Define how to handle item process failures. <code>AUTOMATIC_BISECT</code> halves each batch and retry each half
   * until all the records are processed or there is one failed message left in the batch.</p>
   */
  OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams | string;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;

  /**
   * <p>(Streams only) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite.
   * When the value is set to infinite, EventBridge never discards old records. </p>
   */
  MaximumRecordAgeInSeconds?: number;

  /**
   * <p>(Streams only) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of
   * retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * <p>(Streams only) The number of batches to process concurrently from each shard. The default value is 1.</p>
   */
  ParallelizationFactor?: number;
}

/**
 * <p>The parameters for using a Kinesis stream as a source.</p>
 */
export interface UpdatePipeSourceKinesisStreamParameters {
  /**
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * <p>Define the target queue to send dead-letter queue events to.</p>
   */
  DeadLetterConfig?: DeadLetterConfig;

  /**
   * <p>(Streams only) Define how to handle item process failures. <code>AUTOMATIC_BISECT</code> halves each batch and retry each half
   * until all the records are processed or there is one failed message left in the batch.</p>
   */
  OnPartialBatchItemFailure?: OnPartialBatchItemFailureStreams | string;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;

  /**
   * <p>(Streams only) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite.
   * When the value is set to infinite, EventBridge never discards old records. </p>
   */
  MaximumRecordAgeInSeconds?: number;

  /**
   * <p>(Streams only) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of
   * retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * <p>(Streams only) The number of batches to process concurrently from each shard. The default value is 1.</p>
   */
  ParallelizationFactor?: number;
}

/**
 * <p>The parameters for using an MSK stream as a source.</p>
 */
export interface UpdatePipeSourceManagedStreamingKafkaParameters {
  /**
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * <p>The credentials needed to access the resource.</p>
   */
  Credentials?: MSKAccessCredentials;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;
}

/**
 * <p>The parameters for using a Rabbit MQ broker as a source.</p>
 */
export interface UpdatePipeSourceRabbitMQBrokerParameters {
  /**
   * <p>The credentials needed to access the resource.</p>
   */
  Credentials: MQBrokerAccessCredentials | undefined;

  /**
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;
}

/**
 * <p>The parameters for using a self-managed Apache Kafka stream as a source.</p>
 */
export interface UpdatePipeSourceSelfManagedKafkaParameters {
  /**
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;

  /**
   * <p>The credentials needed to access the resource.</p>
   */
  Credentials?: SelfManagedKafkaAccessConfigurationCredentials;

  /**
   * <p>The ARN of the Secrets Manager secret used for certification.</p>
   */
  ServerRootCaCertificate?: string;

  /**
   * <p>This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used.</p>
   */
  Vpc?: SelfManagedKafkaAccessConfigurationVpc;
}

/**
 * <p>The parameters for using a Amazon SQS stream as a source.</p>
 */
export interface UpdatePipeSourceSqsQueueParameters {
  /**
   * <p>The maximum number of records to include in each batch.</p>
   */
  BatchSize?: number;

  /**
   * <p>The maximum length of a time to wait for events.</p>
   */
  MaximumBatchingWindowInSeconds?: number;
}

/**
 * <p>The parameters required to set up a source for your pipe.</p>
 */
export interface UpdatePipeSourceParameters {
  /**
   * <p>The collection of event patterns used to filter events. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
   *          Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  FilterCriteria?: FilterCriteria;

  /**
   * <p>The parameters for using a Kinesis stream as a source.</p>
   */
  KinesisStreamParameters?: UpdatePipeSourceKinesisStreamParameters;

  /**
   * <p>The parameters for using a DynamoDB stream as a source.</p>
   */
  DynamoDBStreamParameters?: UpdatePipeSourceDynamoDBStreamParameters;

  /**
   * <p>The parameters for using a Amazon SQS stream as a source.</p>
   */
  SqsQueueParameters?: UpdatePipeSourceSqsQueueParameters;

  /**
   * <p>The parameters for using an Active MQ broker as a source.</p>
   */
  ActiveMQBrokerParameters?: UpdatePipeSourceActiveMQBrokerParameters;

  /**
   * <p>The parameters for using a Rabbit MQ broker as a source.</p>
   */
  RabbitMQBrokerParameters?: UpdatePipeSourceRabbitMQBrokerParameters;

  /**
   * <p>The parameters for using an MSK stream as a source.</p>
   */
  ManagedStreamingKafkaParameters?: UpdatePipeSourceManagedStreamingKafkaParameters;

  /**
   * <p>The parameters for using a self-managed Apache Kafka stream as a source.</p>
   */
  SelfManagedKafkaParameters?: UpdatePipeSourceSelfManagedKafkaParameters;
}

export interface UpdatePipeRequest {
  /**
   * <p>The name of the pipe.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the pipe.</p>
   */
  Description?: string;

  /**
   * <p>The state the pipe should be in.</p>
   */
  DesiredState?: RequestedPipeState | string;

  /**
   * <p>The parameters required to set up a source for your pipe.</p>
   */
  SourceParameters?: UpdatePipeSourceParameters;

  /**
   * <p>The ARN of the enrichment resource.</p>
   */
  Enrichment?: string;

  /**
   * <p>The parameters required to set up enrichment on your pipe.</p>
   */
  EnrichmentParameters?: PipeEnrichmentParameters;

  /**
   * <p>The ARN of the target resource.</p>
   */
  Target?: string;

  /**
   * <p>The parameters required to set up a target for your pipe.</p>
   */
  TargetParameters?: PipeTargetParameters;

  /**
   * <p>The ARN of the role that allows the pipe to send data to the target.</p>
   */
  RoleArn: string | undefined;
}

export interface UpdatePipeResponse {
  /**
   * <p>The ARN of the pipe.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the pipe.</p>
   */
  Name?: string;

  /**
   * <p>The state the pipe should be in.</p>
   */
  DesiredState?: RequestedPipeState | string;

  /**
   * <p>The state the pipe is in.</p>
   */
  CurrentState?: PipeState | string;

  /**
   * <p>The time the pipe was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the pipe was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  LastModifiedTime?: Date;
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the pipe.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of key-value pairs associated with the pipe.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the pipe.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the pipe.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
 * @internal
 */
export const AwsVpcConfigurationFilterSensitiveLog = (obj: AwsVpcConfiguration): any => ({
  ...obj,
  ...(obj.Subnets && { Subnets: SENSITIVE_STRING }),
  ...(obj.SecurityGroups && { SecurityGroups: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchArrayPropertiesFilterSensitiveLog = (obj: BatchArrayProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchEnvironmentVariableFilterSensitiveLog = (obj: BatchEnvironmentVariable): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchResourceRequirementFilterSensitiveLog = (obj: BatchResourceRequirement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchContainerOverridesFilterSensitiveLog = (obj: BatchContainerOverrides): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchJobDependencyFilterSensitiveLog = (obj: BatchJobDependency): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchRetryStrategyFilterSensitiveLog = (obj: BatchRetryStrategy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CapacityProviderStrategyItemFilterSensitiveLog = (obj: CapacityProviderStrategyItem): any => ({
  ...obj,
  ...(obj.capacityProvider && { capacityProvider: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PipeEnrichmentHttpParametersFilterSensitiveLog = (obj: PipeEnrichmentHttpParameters): any => ({
  ...obj,
  ...(obj.PathParameterValues && { PathParameterValues: SENSITIVE_STRING }),
  ...(obj.HeaderParameters && { HeaderParameters: SENSITIVE_STRING }),
  ...(obj.QueryStringParameters && { QueryStringParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PipeEnrichmentParametersFilterSensitiveLog = (obj: PipeEnrichmentParameters): any => ({
  ...obj,
  ...(obj.InputTemplate && { InputTemplate: SENSITIVE_STRING }),
  ...(obj.HttpParameters && { HttpParameters: PipeEnrichmentHttpParametersFilterSensitiveLog(obj.HttpParameters) }),
});

/**
 * @internal
 */
export const MQBrokerAccessCredentialsFilterSensitiveLog = (obj: MQBrokerAccessCredentials): any => {
  if (obj.BasicAuth !== undefined) return { BasicAuth: obj.BasicAuth };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const PipeSourceActiveMQBrokerParametersFilterSensitiveLog = (obj: PipeSourceActiveMQBrokerParameters): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: MQBrokerAccessCredentialsFilterSensitiveLog(obj.Credentials) }),
  ...(obj.QueueName && { QueueName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeadLetterConfigFilterSensitiveLog = (obj: DeadLetterConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PipeSourceDynamoDBStreamParametersFilterSensitiveLog = (obj: PipeSourceDynamoDBStreamParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
  ...(obj.Pattern && { Pattern: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FilterCriteriaFilterSensitiveLog = (obj: FilterCriteria): any => ({
  ...obj,
  ...(obj.Filters && { Filters: obj.Filters.map((item) => FilterFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PipeSourceKinesisStreamParametersFilterSensitiveLog = (obj: PipeSourceKinesisStreamParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MSKAccessCredentialsFilterSensitiveLog = (obj: MSKAccessCredentials): any => {
  if (obj.SaslScram512Auth !== undefined) return { SaslScram512Auth: obj.SaslScram512Auth };
  if (obj.ClientCertificateTlsAuth !== undefined) return { ClientCertificateTlsAuth: obj.ClientCertificateTlsAuth };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const PipeSourceManagedStreamingKafkaParametersFilterSensitiveLog = (
  obj: PipeSourceManagedStreamingKafkaParameters
): any => ({
  ...obj,
  ...(obj.TopicName && { TopicName: SENSITIVE_STRING }),
  ...(obj.ConsumerGroupID && { ConsumerGroupID: SENSITIVE_STRING }),
  ...(obj.Credentials && { Credentials: MSKAccessCredentialsFilterSensitiveLog(obj.Credentials) }),
});

/**
 * @internal
 */
export const PipeSourceRabbitMQBrokerParametersFilterSensitiveLog = (obj: PipeSourceRabbitMQBrokerParameters): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: MQBrokerAccessCredentialsFilterSensitiveLog(obj.Credentials) }),
  ...(obj.QueueName && { QueueName: SENSITIVE_STRING }),
  ...(obj.VirtualHost && { VirtualHost: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SelfManagedKafkaAccessConfigurationCredentialsFilterSensitiveLog = (
  obj: SelfManagedKafkaAccessConfigurationCredentials
): any => {
  if (obj.BasicAuth !== undefined) return { BasicAuth: obj.BasicAuth };
  if (obj.SaslScram512Auth !== undefined) return { SaslScram512Auth: obj.SaslScram512Auth };
  if (obj.SaslScram256Auth !== undefined) return { SaslScram256Auth: obj.SaslScram256Auth };
  if (obj.ClientCertificateTlsAuth !== undefined) return { ClientCertificateTlsAuth: obj.ClientCertificateTlsAuth };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SelfManagedKafkaAccessConfigurationVpcFilterSensitiveLog = (
  obj: SelfManagedKafkaAccessConfigurationVpc
): any => ({
  ...obj,
  ...(obj.Subnets && { Subnets: SENSITIVE_STRING }),
  ...(obj.SecurityGroup && { SecurityGroup: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PipeSourceSelfManagedKafkaParametersFilterSensitiveLog = (
  obj: PipeSourceSelfManagedKafkaParameters
): any => ({
  ...obj,
  ...(obj.TopicName && { TopicName: SENSITIVE_STRING }),
  ...(obj.AdditionalBootstrapServers && { AdditionalBootstrapServers: SENSITIVE_STRING }),
  ...(obj.ConsumerGroupID && { ConsumerGroupID: SENSITIVE_STRING }),
  ...(obj.Credentials && {
    Credentials: SelfManagedKafkaAccessConfigurationCredentialsFilterSensitiveLog(obj.Credentials),
  }),
  ...(obj.Vpc && { Vpc: SelfManagedKafkaAccessConfigurationVpcFilterSensitiveLog(obj.Vpc) }),
});

/**
 * @internal
 */
export const PipeSourceSqsQueueParametersFilterSensitiveLog = (obj: PipeSourceSqsQueueParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PipeSourceParametersFilterSensitiveLog = (obj: PipeSourceParameters): any => ({
  ...obj,
  ...(obj.FilterCriteria && { FilterCriteria: FilterCriteriaFilterSensitiveLog(obj.FilterCriteria) }),
  ...(obj.ActiveMQBrokerParameters && {
    ActiveMQBrokerParameters: PipeSourceActiveMQBrokerParametersFilterSensitiveLog(obj.ActiveMQBrokerParameters),
  }),
  ...(obj.RabbitMQBrokerParameters && {
    RabbitMQBrokerParameters: PipeSourceRabbitMQBrokerParametersFilterSensitiveLog(obj.RabbitMQBrokerParameters),
  }),
  ...(obj.ManagedStreamingKafkaParameters && {
    ManagedStreamingKafkaParameters: PipeSourceManagedStreamingKafkaParametersFilterSensitiveLog(
      obj.ManagedStreamingKafkaParameters
    ),
  }),
  ...(obj.SelfManagedKafkaParameters && {
    SelfManagedKafkaParameters: PipeSourceSelfManagedKafkaParametersFilterSensitiveLog(obj.SelfManagedKafkaParameters),
  }),
});

/**
 * @internal
 */
export const PipeTargetBatchJobParametersFilterSensitiveLog = (obj: PipeTargetBatchJobParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PipeTargetCloudWatchLogsParametersFilterSensitiveLog = (obj: PipeTargetCloudWatchLogsParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkConfigurationFilterSensitiveLog = (obj: NetworkConfiguration): any => ({
  ...obj,
  ...(obj.awsvpcConfiguration && {
    awsvpcConfiguration: AwsVpcConfigurationFilterSensitiveLog(obj.awsvpcConfiguration),
  }),
});

/**
 * @internal
 */
export const EcsEnvironmentVariableFilterSensitiveLog = (obj: EcsEnvironmentVariable): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EcsEnvironmentFileFilterSensitiveLog = (obj: EcsEnvironmentFile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EcsResourceRequirementFilterSensitiveLog = (obj: EcsResourceRequirement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EcsContainerOverrideFilterSensitiveLog = (obj: EcsContainerOverride): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EcsEphemeralStorageFilterSensitiveLog = (obj: EcsEphemeralStorage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EcsInferenceAcceleratorOverrideFilterSensitiveLog = (obj: EcsInferenceAcceleratorOverride): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EcsTaskOverrideFilterSensitiveLog = (obj: EcsTaskOverride): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlacementConstraintFilterSensitiveLog = (obj: PlacementConstraint): any => ({
  ...obj,
  ...(obj.expression && { expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PlacementStrategyFilterSensitiveLog = (obj: PlacementStrategy): any => ({
  ...obj,
  ...(obj.field && { field: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PipeTargetEcsTaskParametersFilterSensitiveLog = (obj: PipeTargetEcsTaskParameters): any => ({
  ...obj,
  ...(obj.NetworkConfiguration && {
    NetworkConfiguration: NetworkConfigurationFilterSensitiveLog(obj.NetworkConfiguration),
  }),
  ...(obj.CapacityProviderStrategy && {
    CapacityProviderStrategy: obj.CapacityProviderStrategy.map((item) =>
      CapacityProviderStrategyItemFilterSensitiveLog(item)
    ),
  }),
  ...(obj.PlacementConstraints && {
    PlacementConstraints: obj.PlacementConstraints.map((item) => PlacementConstraintFilterSensitiveLog(item)),
  }),
  ...(obj.PlacementStrategy && {
    PlacementStrategy: obj.PlacementStrategy.map((item) => PlacementStrategyFilterSensitiveLog(item)),
  }),
  ...(obj.ReferenceId && { ReferenceId: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PipeTargetEventBridgeEventBusParametersFilterSensitiveLog = (
  obj: PipeTargetEventBridgeEventBusParameters
): any => ({
  ...obj,
  ...(obj.EndpointId && { EndpointId: SENSITIVE_STRING }),
  ...(obj.DetailType && { DetailType: SENSITIVE_STRING }),
  ...(obj.Source && { Source: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PipeTargetHttpParametersFilterSensitiveLog = (obj: PipeTargetHttpParameters): any => ({
  ...obj,
  ...(obj.PathParameterValues && { PathParameterValues: SENSITIVE_STRING }),
  ...(obj.HeaderParameters && { HeaderParameters: SENSITIVE_STRING }),
  ...(obj.QueryStringParameters && { QueryStringParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PipeTargetKinesisStreamParametersFilterSensitiveLog = (obj: PipeTargetKinesisStreamParameters): any => ({
  ...obj,
  ...(obj.PartitionKey && { PartitionKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PipeTargetLambdaFunctionParametersFilterSensitiveLog = (obj: PipeTargetLambdaFunctionParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PipeTargetRedshiftDataParametersFilterSensitiveLog = (obj: PipeTargetRedshiftDataParameters): any => ({
  ...obj,
  ...(obj.Database && { Database: SENSITIVE_STRING }),
  ...(obj.DbUser && { DbUser: SENSITIVE_STRING }),
  ...(obj.StatementName && { StatementName: SENSITIVE_STRING }),
  ...(obj.Sqls && { Sqls: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SageMakerPipelineParameterFilterSensitiveLog = (obj: SageMakerPipelineParameter): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PipeTargetSageMakerPipelineParametersFilterSensitiveLog = (
  obj: PipeTargetSageMakerPipelineParameters
): any => ({
  ...obj,
  ...(obj.PipelineParameterList && {
    PipelineParameterList: obj.PipelineParameterList.map((item) => SageMakerPipelineParameterFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const PipeTargetSqsQueueParametersFilterSensitiveLog = (obj: PipeTargetSqsQueueParameters): any => ({
  ...obj,
  ...(obj.MessageGroupId && { MessageGroupId: SENSITIVE_STRING }),
  ...(obj.MessageDeduplicationId && { MessageDeduplicationId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PipeTargetStateMachineParametersFilterSensitiveLog = (obj: PipeTargetStateMachineParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PipeTargetParametersFilterSensitiveLog = (obj: PipeTargetParameters): any => ({
  ...obj,
  ...(obj.InputTemplate && { InputTemplate: SENSITIVE_STRING }),
  ...(obj.KinesisStreamParameters && {
    KinesisStreamParameters: PipeTargetKinesisStreamParametersFilterSensitiveLog(obj.KinesisStreamParameters),
  }),
  ...(obj.EcsTaskParameters && {
    EcsTaskParameters: PipeTargetEcsTaskParametersFilterSensitiveLog(obj.EcsTaskParameters),
  }),
  ...(obj.SqsQueueParameters && {
    SqsQueueParameters: PipeTargetSqsQueueParametersFilterSensitiveLog(obj.SqsQueueParameters),
  }),
  ...(obj.HttpParameters && { HttpParameters: PipeTargetHttpParametersFilterSensitiveLog(obj.HttpParameters) }),
  ...(obj.RedshiftDataParameters && {
    RedshiftDataParameters: PipeTargetRedshiftDataParametersFilterSensitiveLog(obj.RedshiftDataParameters),
  }),
  ...(obj.SageMakerPipelineParameters && {
    SageMakerPipelineParameters: PipeTargetSageMakerPipelineParametersFilterSensitiveLog(
      obj.SageMakerPipelineParameters
    ),
  }),
  ...(obj.EventBridgeEventBusParameters && {
    EventBridgeEventBusParameters: PipeTargetEventBridgeEventBusParametersFilterSensitiveLog(
      obj.EventBridgeEventBusParameters
    ),
  }),
});

/**
 * @internal
 */
export const CreatePipeRequestFilterSensitiveLog = (obj: CreatePipeRequest): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.SourceParameters && { SourceParameters: PipeSourceParametersFilterSensitiveLog(obj.SourceParameters) }),
  ...(obj.EnrichmentParameters && {
    EnrichmentParameters: PipeEnrichmentParametersFilterSensitiveLog(obj.EnrichmentParameters),
  }),
  ...(obj.TargetParameters && { TargetParameters: PipeTargetParametersFilterSensitiveLog(obj.TargetParameters) }),
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePipeResponseFilterSensitiveLog = (obj: CreatePipeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePipeRequestFilterSensitiveLog = (obj: DeletePipeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePipeResponseFilterSensitiveLog = (obj: DeletePipeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePipeRequestFilterSensitiveLog = (obj: DescribePipeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePipeResponseFilterSensitiveLog = (obj: DescribePipeResponse): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.SourceParameters && { SourceParameters: PipeSourceParametersFilterSensitiveLog(obj.SourceParameters) }),
  ...(obj.EnrichmentParameters && {
    EnrichmentParameters: PipeEnrichmentParametersFilterSensitiveLog(obj.EnrichmentParameters),
  }),
  ...(obj.TargetParameters && { TargetParameters: PipeTargetParametersFilterSensitiveLog(obj.TargetParameters) }),
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListPipesRequestFilterSensitiveLog = (obj: ListPipesRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PipeFilterSensitiveLog = (obj: Pipe): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPipesResponseFilterSensitiveLog = (obj: ListPipesResponse): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartPipeRequestFilterSensitiveLog = (obj: StartPipeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartPipeResponseFilterSensitiveLog = (obj: StartPipeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopPipeRequestFilterSensitiveLog = (obj: StopPipeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopPipeResponseFilterSensitiveLog = (obj: StopPipeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePipeSourceActiveMQBrokerParametersFilterSensitiveLog = (
  obj: UpdatePipeSourceActiveMQBrokerParameters
): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: MQBrokerAccessCredentialsFilterSensitiveLog(obj.Credentials) }),
});

/**
 * @internal
 */
export const UpdatePipeSourceDynamoDBStreamParametersFilterSensitiveLog = (
  obj: UpdatePipeSourceDynamoDBStreamParameters
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePipeSourceKinesisStreamParametersFilterSensitiveLog = (
  obj: UpdatePipeSourceKinesisStreamParameters
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePipeSourceManagedStreamingKafkaParametersFilterSensitiveLog = (
  obj: UpdatePipeSourceManagedStreamingKafkaParameters
): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: MSKAccessCredentialsFilterSensitiveLog(obj.Credentials) }),
});

/**
 * @internal
 */
export const UpdatePipeSourceRabbitMQBrokerParametersFilterSensitiveLog = (
  obj: UpdatePipeSourceRabbitMQBrokerParameters
): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: MQBrokerAccessCredentialsFilterSensitiveLog(obj.Credentials) }),
});

/**
 * @internal
 */
export const UpdatePipeSourceSelfManagedKafkaParametersFilterSensitiveLog = (
  obj: UpdatePipeSourceSelfManagedKafkaParameters
): any => ({
  ...obj,
  ...(obj.Credentials && {
    Credentials: SelfManagedKafkaAccessConfigurationCredentialsFilterSensitiveLog(obj.Credentials),
  }),
  ...(obj.Vpc && { Vpc: SelfManagedKafkaAccessConfigurationVpcFilterSensitiveLog(obj.Vpc) }),
});

/**
 * @internal
 */
export const UpdatePipeSourceSqsQueueParametersFilterSensitiveLog = (obj: UpdatePipeSourceSqsQueueParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePipeSourceParametersFilterSensitiveLog = (obj: UpdatePipeSourceParameters): any => ({
  ...obj,
  ...(obj.FilterCriteria && { FilterCriteria: FilterCriteriaFilterSensitiveLog(obj.FilterCriteria) }),
  ...(obj.ActiveMQBrokerParameters && {
    ActiveMQBrokerParameters: UpdatePipeSourceActiveMQBrokerParametersFilterSensitiveLog(obj.ActiveMQBrokerParameters),
  }),
  ...(obj.RabbitMQBrokerParameters && {
    RabbitMQBrokerParameters: UpdatePipeSourceRabbitMQBrokerParametersFilterSensitiveLog(obj.RabbitMQBrokerParameters),
  }),
  ...(obj.ManagedStreamingKafkaParameters && {
    ManagedStreamingKafkaParameters: UpdatePipeSourceManagedStreamingKafkaParametersFilterSensitiveLog(
      obj.ManagedStreamingKafkaParameters
    ),
  }),
  ...(obj.SelfManagedKafkaParameters && {
    SelfManagedKafkaParameters: UpdatePipeSourceSelfManagedKafkaParametersFilterSensitiveLog(
      obj.SelfManagedKafkaParameters
    ),
  }),
});

/**
 * @internal
 */
export const UpdatePipeRequestFilterSensitiveLog = (obj: UpdatePipeRequest): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.SourceParameters && { SourceParameters: UpdatePipeSourceParametersFilterSensitiveLog(obj.SourceParameters) }),
  ...(obj.EnrichmentParameters && {
    EnrichmentParameters: PipeEnrichmentParametersFilterSensitiveLog(obj.EnrichmentParameters),
  }),
  ...(obj.TargetParameters && { TargetParameters: PipeTargetParametersFilterSensitiveLog(obj.TargetParameters) }),
});

/**
 * @internal
 */
export const UpdatePipeResponseFilterSensitiveLog = (obj: UpdatePipeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});
