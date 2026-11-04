// smithy-typescript generated code
import { AutomaticJsonStringConversion as __AutomaticJsonStringConversion } from "@smithy/core/serde";

import type {
  _InstanceType,
  AssociationType,
  CancellationStatus,
  CompressionType,
  DeviceStatus,
  DeviceType,
  ExperimentalCapabilitiesEnablementType,
  HybridJobAdditionalAttributeName,
  JobEventType,
  JobPrimaryStatus,
  QuantumTaskAdditionalAttributeName,
  QuantumTaskStatus,
  QueueName,
  QueuePriority,
  SearchJobsFilterOperator,
  SearchQuantumTasksFilterOperator,
  SearchSpendingLimitsFilterOperator,
} from "./enums";

/**
 * Contains metadata about the quantum task action, including the action type and program statistics.
 *
 * @public
 */
export interface ActionMetadata {
  /**
   * The type of action associated with the quantum task.
   *
   * @public
   */
  actionType: string | undefined;

  /**
   * The number of programs in a program set. This is only available for a program set.
   *
   * @public
   */
  programCount?: number | undefined;

  /**
   * The number of executables in a program set. This is only available for a program set.
   *
   * @public
   */
  executableCount?: number | undefined;
}

/**
 * The container image used to create an Amazon Braket hybrid job.
 *
 * @public
 */
export interface ContainerImage {
  /**
   * The URI locating the container image.
   *
   * @public
   */
  uri: string | undefined;
}

/**
 * Contains information about algorithm scripts used for the Amazon Braket hybrid job.
 *
 * @public
 */
export interface ScriptModeConfig {
  /**
   * The entry point in the algorithm scripts from where the execution begins in the hybrid job.
   *
   * @public
   */
  entryPoint: string | undefined;

  /**
   * The URI that specifies the S3 path to the algorithm scripts used by an Amazon Braket hybrid job.
   *
   * @public
   */
  s3Uri: string | undefined;

  /**
   * The type of compression used to store the algorithm scripts in Amazon S3 storage.
   *
   * @public
   */
  compressionType?: CompressionType | undefined;
}

/**
 * Defines the Amazon Braket hybrid job to be created. Specifies the container image the job uses and the paths to the Python scripts used for entry and training.
 *
 * @public
 */
export interface AlgorithmSpecification {
  /**
   * Configures the paths to the Python scripts used for entry and training.
   *
   * @public
   */
  scriptModeConfig?: ScriptModeConfig | undefined;

  /**
   * The container image used to create an Amazon Braket hybrid job.
   *
   * @public
   */
  containerImage?: ContainerImage | undefined;
}

/**
 * The Amazon Braket resource and the association type.
 *
 * @public
 */
export interface Association {
  /**
   * The Amazon Braket resource arn.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The association type for the specified Amazon Braket resource arn.
   *
   * @public
   */
  type: AssociationType | undefined;
}

/**
 * @public
 */
export interface GetDeviceRequest {
  /**
   * The ARN of the device to retrieve.
   *
   * @public
   */
  deviceArn: string | undefined;
}

/**
 * Information about quantum tasks and hybrid jobs queued on a device.
 *
 * @public
 */
export interface DeviceQueueInfo {
  /**
   * The name of the queue.
   *
   * @public
   */
  queue: QueueName | undefined;

  /**
   * The number of hybrid jobs or quantum tasks in the queue for a given device.
   *
   * @public
   */
  queueSize: string | undefined;

  /**
   * Optional. Specifies the priority of the queue. Quantum tasks in a priority queue are processed before the quantum tasks in a normal queue.
   *
   * @public
   */
  queuePriority?: QueuePriority | undefined;
}

/**
 * @public
 */
export interface GetDeviceResponse {
  /**
   * The ARN of the device.
   *
   * @public
   */
  deviceArn: string | undefined;

  /**
   * The name of the device.
   *
   * @public
   */
  deviceName: string | undefined;

  /**
   * The name of the partner company for the device.
   *
   * @public
   */
  providerName: string | undefined;

  /**
   * The type of the device.
   *
   * @public
   */
  deviceType: DeviceType | undefined;

  /**
   * The status of the device.
   *
   * @public
   */
  deviceStatus: DeviceStatus | undefined;

  /**
   * Details about the capabilities of the device.
   *
   * @public
   */
  deviceCapabilities: __AutomaticJsonStringConversion | string | undefined;

  /**
   * The number of quantum tasks and hybrid jobs currently queued on the device.
   *
   * @public
   */
  deviceQueueInfo?: DeviceQueueInfo[] | undefined;
}

/**
 * Contains information about validation failures that occurred during the processing of a program set in a quantum task.
 *
 * @public
 */
export interface ProgramSetValidationFailure {
  /**
   * The index of the program within the program set that failed validation.
   *
   * @public
   */
  programIndex: number | undefined;

  /**
   * The index of the input within the program set that failed validation.
   *
   * @public
   */
  inputsIndex?: number | undefined;

  /**
   * A list of error messages describing the validation failures that occurred.
   *
   * @public
   */
  errors?: string[] | undefined;
}

/**
 * The filter used to search for devices.
 *
 * @public
 */
export interface SearchDevicesFilter {
  /**
   * The name of the device parameter to filter based on. Only `deviceArn` filter name is currently supported.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The values used to filter devices based on the filter name.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * @public
 */
export interface SearchDevicesRequest {
  /**
   * A token used for pagination of results returned in the response. Use the token returned from the previous request to continue search where the previous request ended.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Array of SearchDevicesFilter objects to use when searching for devices.
   *
   * @public
   */
  filters: SearchDevicesFilter[] | undefined;
}

/**
 * Includes information about the device.
 *
 * @public
 */
export interface DeviceSummary {
  /**
   * The ARN of the device.
   *
   * @public
   */
  deviceArn: string | undefined;

  /**
   * The name of the device.
   *
   * @public
   */
  deviceName: string | undefined;

  /**
   * The provider of the device.
   *
   * @public
   */
  providerName: string | undefined;

  /**
   * The type of the device.
   *
   * @public
   */
  deviceType: DeviceType | undefined;

  /**
   * The status of the device.
   *
   * @public
   */
  deviceStatus: DeviceStatus | undefined;
}

/**
 * @public
 */
export interface SearchDevicesResponse {
  /**
   * An array of `DeviceSummary` objects for devices that match the specified filter values.
   *
   * @public
   */
  devices: DeviceSummary[] | undefined;

  /**
   * A token used for pagination of results, or null if there are no additional results. Use the token value in a subsequent request to continue search where the previous request ended.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelJobRequest {
  /**
   * The ARN of the Amazon Braket hybrid job to cancel.
   *
   * @public
   */
  jobArn: string | undefined;
}

/**
 * @public
 */
export interface CancelJobResponse {
  /**
   * The ARN of the Amazon Braket job.
   *
   * @public
   */
  jobArn: string | undefined;

  /**
   * The status of the hybrid job.
   *
   * @public
   */
  cancellationStatus: CancellationStatus | undefined;
}

/**
 * Contains information about the output locations for hybrid job checkpoint data.
 *
 * @public
 */
export interface JobCheckpointConfig {
  /**
   * (Optional) The local directory where checkpoint data is stored. The default directory is `/opt/braket/checkpoints/`.
   *
   * @public
   */
  localPath?: string | undefined;

  /**
   * Identifies the S3 path where you want Amazon Braket to store checkpoint data. For example, `s3://bucket-name/key-name-prefix`.
   *
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * Configures the primary device used to create and run an Amazon Braket hybrid job.
 *
 * @public
 */
export interface DeviceConfig {
  /**
   * The primary device ARN used to create and run an Amazon Braket hybrid job.
   *
   * @public
   */
  device: string | undefined;
}

/**
 * Information about the Amazon S3 storage used by the Amazon Braket hybrid job.
 *
 * @public
 */
export interface S3DataSource {
  /**
   * Depending on the value specified for the `S3DataType`, identifies either a key name prefix or a manifest that locates the S3 data source.
   *
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * Information about the source of the input data used by the Amazon Braket hybrid job.
 *
 * @public
 */
export interface DataSource {
  /**
   * Amazon S3 path of the input data used by the hybrid job.
   *
   * @public
   */
  s3DataSource: S3DataSource | undefined;
}

/**
 * A list of parameters that specify the input channels, type of input data, and where it is located.
 *
 * @public
 */
export interface InputFileConfig {
  /**
   * A named input source that an Amazon Braket hybrid job can consume.
   *
   * @public
   */
  channelName: string | undefined;

  /**
   * The MIME type of the data.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * The location of the input data.
   *
   * @public
   */
  dataSource: DataSource | undefined;
}

/**
 * Configures the resource instances to use while running the Amazon Braket hybrid job on Amazon Braket.
 *
 * @public
 */
export interface InstanceConfig {
  /**
   * Configures the type of resource instances to use while running an Amazon Braket hybrid job.
   *
   * @public
   */
  instanceType: _InstanceType | undefined;

  /**
   * The size of the storage volume, in GB, to provision.
   *
   * @public
   */
  volumeSizeInGb: number | undefined;

  /**
   * Configures the number of resource instances to use while running an Amazon Braket hybrid job on Amazon Braket. The default value is 1.
   *
   * @public
   */
  instanceCount?: number | undefined;
}

/**
 * Specifies the path to the S3 location where you want to store hybrid job artifacts and the encryption key used to store them.
 *
 * @public
 */
export interface JobOutputDataConfig {
  /**
   * The AWS Key Management Service (AWS KMS) key that Amazon Braket uses to encrypt the hybrid job training artifacts at rest using Amazon S3 server-side encryption.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * Identifies the S3 path where you want Amazon Braket to store the hybrid job training artifacts. For example, `s3://bucket-name/key-name-prefix`.
   *
   * @public
   */
  s3Path: string | undefined;
}

/**
 * Specifies limits for how long an Amazon Braket hybrid job can run.
 *
 * @public
 */
export interface JobStoppingCondition {
  /**
   * The maximum length of time, in seconds, that an Amazon Braket hybrid job can run.
   *
   * @public
   */
  maxRuntimeInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * The client token associated with this request that guarantees that the request is idempotent.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Definition of the Amazon Braket job to be created. Specifies the container image the job uses and information about the Python scripts used for entry and training.
   *
   * @public
   */
  algorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * A list of parameters that specify the name and type of input data and where it is located.
   *
   * @public
   */
  inputDataConfig?: InputFileConfig[] | undefined;

  /**
   * The path to the S3 location where you want to store hybrid job artifacts and the encryption key used to store them.
   *
   * @public
   */
  outputDataConfig: JobOutputDataConfig | undefined;

  /**
   * Information about the output locations for hybrid job checkpoint data.
   *
   * @public
   */
  checkpointConfig?: JobCheckpointConfig | undefined;

  /**
   * The name of the Amazon Braket hybrid job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that Amazon Braket can assume to perform tasks on behalf of a user. It can access user resources, run an Amazon Braket job container on behalf of user, and output results and hybrid job details to the users' s3 buckets.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The user-defined criteria that specifies when a hybrid job stops running.
   *
   * @public
   */
  stoppingCondition?: JobStoppingCondition | undefined;

  /**
   * Configuration of the resource instances to use while running the hybrid job on Amazon Braket.
   *
   * @public
   */
  instanceConfig: InstanceConfig | undefined;

  /**
   * Algorithm-specific parameters used by an Amazon Braket hybrid job that influence the quality of the training job. The values are set with a map of JSON key:value pairs, where the key is the name of the hyperparameter and the value is the value of the hyperparameter.
   *
   * > **Important:** Do not include any security-sensitive information including account access IDs, secrets, or tokens in any hyperparameter fields. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by security-sensitive information included in the request hyperparameter variable or plain text fields.
   *
   * @public
   */
  hyperParameters?: Record<string, string> | undefined;

  /**
   * The quantum processing unit (QPU) or simulator used to create an Amazon Braket hybrid job.
   *
   * @public
   */
  deviceConfig: DeviceConfig | undefined;

  /**
   * Tags to be added to the hybrid job you're creating.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The list of Amazon Braket resources associated with the hybrid job.
   *
   * @public
   */
  associations?: Association[] | undefined;
}

/**
 * @public
 */
export interface CreateJobResponse {
  /**
   * The ARN of the Amazon Braket hybrid job created.
   *
   * @public
   */
  jobArn: string | undefined;
}

/**
 * @public
 */
export interface GetJobRequest {
  /**
   * The ARN of the hybrid job to retrieve.
   *
   * @public
   */
  jobArn: string | undefined;

  /**
   * A list of attributes to return additional information for. Only the QueueInfo additional attribute name is currently supported.
   *
   * @public
   */
  additionalAttributeNames?: HybridJobAdditionalAttributeName[] | undefined;
}

/**
 * Details about the type and time events that occurred related to the Amazon Braket hybrid job.
 *
 * @public
 */
export interface JobEventDetails {
  /**
   * The type of event that occurred related to the Amazon Braket hybrid job.
   *
   * @public
   */
  eventType?: JobEventType | undefined;

  /**
   * The time of the event that occurred related to the Amazon Braket hybrid job.
   *
   * @public
   */
  timeOfEvent?: Date | undefined;

  /**
   * A message describing the event that occurred related to the Amazon Braket hybrid job.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Information about the queue for a specified hybrid job.
 *
 * @public
 */
export interface HybridJobQueueInfo {
  /**
   * The name of the queue.
   *
   * @public
   */
  queue: QueueName | undefined;

  /**
   * Current position of the hybrid job in the jobs queue.
   *
   * @public
   */
  position: string | undefined;

  /**
   * Optional. Provides more information about the queue position. For example, if the hybrid job is complete and no longer in the queue, the message field contains that information.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface GetJobResponse {
  /**
   * The status of the Amazon Braket hybrid job.
   *
   * @public
   */
  status: JobPrimaryStatus | undefined;

  /**
   * The ARN of the Amazon Braket hybrid job.
   *
   * @public
   */
  jobArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that Amazon Braket can assume to perform tasks on behalf of a user. It can access user resources, run an Amazon Braket job container on behalf of user, and output results and other hybrid job details to the s3 buckets of a user.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * A description of the reason why an Amazon Braket hybrid job failed, if it failed.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The name of the Amazon Braket hybrid job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * Algorithm-specific parameters used by an Amazon Braket hybrid job that influence the quality of the traiing job. The values are set with a map of JSON key:value pairs, where the key is the name of the hyperparameter and the value is the value of th hyperparameter.
   *
   * @public
   */
  hyperParameters?: Record<string, string> | undefined;

  /**
   * A list of parameters that specify the name and type of input data and where it is located.
   *
   * @public
   */
  inputDataConfig?: InputFileConfig[] | undefined;

  /**
   * The path to the S3 location where hybrid job artifacts are stored and the encryption key used to store them there.
   *
   * @public
   */
  outputDataConfig: JobOutputDataConfig | undefined;

  /**
   * The user-defined criteria that specifies when to stop a running hybrid job.
   *
   * @public
   */
  stoppingCondition?: JobStoppingCondition | undefined;

  /**
   * Information about the output locations for hybrid job checkpoint data.
   *
   * @public
   */
  checkpointConfig?: JobCheckpointConfig | undefined;

  /**
   * Definition of the Amazon Braket hybrid job created. Provides information about the container image used, and the Python scripts used for training.
   *
   * @public
   */
  algorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * The resource instances to use while running the hybrid job on Amazon Braket.
   *
   * @public
   */
  instanceConfig: InstanceConfig | undefined;

  /**
   * The time at which the Amazon Braket hybrid job was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the Amazon Braket hybrid job was started.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The time at which the Amazon Braket hybrid job ended.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The billable time for which the Amazon Braket hybrid job used to complete.
   *
   * @public
   */
  billableDuration?: number | undefined;

  /**
   * The primary device used by the Amazon Braket hybrid job.
   *
   * @public
   */
  deviceConfig?: DeviceConfig | undefined;

  /**
   * Details about the time and type of events occurred related to the Amazon Braket hybrid job.
   *
   * @public
   */
  events?: JobEventDetails[] | undefined;

  /**
   * The tags associated with this hybrid job.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Queue information for the requested hybrid job. Only returned if `QueueInfo` is specified in the `additionalAttributeNames"` field in the `GetJob` API request.
   *
   * @public
   */
  queueInfo?: HybridJobQueueInfo | undefined;

  /**
   * The list of Amazon Braket resources associated with the hybrid job.
   *
   * @public
   */
  associations?: Association[] | undefined;
}

/**
 * A filter used to search for Amazon Braket hybrid jobs.
 *
 * @public
 */
export interface SearchJobsFilter {
  /**
   * The name of the hybrid job parameter to filter based on. Filter name can be either `jobArn` or `createdAt`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The values used to filter hybrid jobs based on the filter name and operator.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * An operator to use for the filter.
   *
   * @public
   */
  operator: SearchJobsFilterOperator | undefined;
}

/**
 * @public
 */
export interface SearchJobsRequest {
  /**
   * A token used for pagination of results returned in the response. Use the token returned from the previous request to continue search where the previous request ended.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Array of SearchJobsFilter objects to use when searching for hybrid jobs.
   *
   * @public
   */
  filters: SearchJobsFilter[] | undefined;
}

/**
 * Provides summary information about an Amazon Braket hybrid job.
 *
 * @public
 */
export interface JobSummary {
  /**
   * The status of the Amazon Braket hybrid job.
   *
   * @public
   */
  status: JobPrimaryStatus | undefined;

  /**
   * The ARN of the Amazon Braket hybrid job.
   *
   * @public
   */
  jobArn: string | undefined;

  /**
   * The name of the Amazon Braket hybrid job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The primary device used by an Amazon Braket hybrid job.
   *
   * @public
   */
  device: string | undefined;

  /**
   * The time at which the Amazon Braket hybrid job was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the Amazon Braket hybrid job was started.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The time at which the Amazon Braket hybrid job ended.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * Displays the key, value pairs of tags associated with this hybrid job.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchJobsResponse {
  /**
   * An array of `JobSummary` objects for devices that match the specified filter values.
   *
   * @public
   */
  jobs: JobSummary[] | undefined;

  /**
   * A token used for pagination of results, or `null` if there are no additional results. Use the token value in a subsequent request to continue search where the previous request ended.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * Specify the `resourceArn` for the resource whose tags to display.
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
   * Displays the key, value pairs of tags associated with this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CancelQuantumTaskRequest {
  /**
   * The ARN of the quantum task to cancel.
   *
   * @public
   */
  quantumTaskArn: string | undefined;

  /**
   * The client token associated with the cancellation request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelQuantumTaskResponse {
  /**
   * The ARN of the quantum task.
   *
   * @public
   */
  quantumTaskArn: string | undefined;

  /**
   * The status of the quantum task.
   *
   * @public
   */
  cancellationStatus: CancellationStatus | undefined;
}

/**
 * Enabled experimental capabilities for quantum hardware. Note that the use of these features may impact device capabilities and performance beyond its standard specifications.
 *
 * @public
 */
export type ExperimentalCapabilities =
  | ExperimentalCapabilities.EnabledMember
  | ExperimentalCapabilities.$UnknownMember;

/**
 * @public
 */
export namespace ExperimentalCapabilities {
  /**
   * Enabled experimental capabilities.
   *
   * @public
   */
  export interface EnabledMember {
    enabled: ExperimentalCapabilitiesEnablementType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    enabled?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    enabled: (value: ExperimentalCapabilitiesEnablementType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateQuantumTaskRequest {
  /**
   * The client token associated with the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The ARN of the device to run the quantum task on.
   *
   * @public
   */
  deviceArn: string | undefined;

  /**
   * The parameters for the device to run the quantum task on.
   *
   * @public
   */
  deviceParameters?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * The number of shots to use for the quantum task.
   *
   * @public
   */
  shots: number | undefined;

  /**
   * The S3 bucket to store quantum task result files in.
   *
   * @public
   */
  outputS3Bucket: string | undefined;

  /**
   * The key prefix for the location in the S3 bucket to store quantum task results in.
   *
   * @public
   */
  outputS3KeyPrefix: string | undefined;

  /**
   * The action associated with the quantum task.
   *
   * @public
   */
  action: __AutomaticJsonStringConversion | string | undefined;

  /**
   * Tags to be added to the quantum task you're creating.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The token for an Amazon Braket hybrid job that associates it with the quantum task.
   *
   * @public
   */
  jobToken?: string | undefined;

  /**
   * The list of Amazon Braket resources associated with the quantum task.
   *
   * @public
   */
  associations?: Association[] | undefined;

  /**
   * Enable experimental capabilities for the quantum task.
   *
   * @public
   */
  experimentalCapabilities?: ExperimentalCapabilities | undefined;
}

/**
 * @public
 */
export interface CreateQuantumTaskResponse {
  /**
   * The ARN of the quantum task created by the request.
   *
   * @public
   */
  quantumTaskArn: string | undefined;
}

/**
 * @public
 */
export interface GetQuantumTaskRequest {
  /**
   * The ARN of the quantum task to retrieve.
   *
   * @public
   */
  quantumTaskArn: string | undefined;

  /**
   * A list of attributes to return additional information for. Only the QueueInfo additional attribute name is currently supported.
   *
   * @public
   */
  additionalAttributeNames?: QuantumTaskAdditionalAttributeName[] | undefined;
}

/**
 * The queue information for the specified quantum task.
 *
 * @public
 */
export interface QuantumTaskQueueInfo {
  /**
   * The name of the queue.
   *
   * @public
   */
  queue: QueueName | undefined;

  /**
   * Current position of the quantum task in the quantum tasks queue.
   *
   * @public
   */
  position: string | undefined;

  /**
   * Optional. Specifies the priority of the queue. Quantum tasks in a priority queue are processed before the quantum tasks in a normal queue.
   *
   * @public
   */
  queuePriority?: QueuePriority | undefined;

  /**
   * Optional. Provides more information about the queue position. For example, if the quantum task is complete and no longer in the queue, the message field contains that information.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface GetQuantumTaskResponse {
  /**
   * The ARN of the quantum task.
   *
   * @public
   */
  quantumTaskArn: string | undefined;

  /**
   * The status of the quantum task.
   *
   * @public
   */
  status: QuantumTaskStatus | undefined;

  /**
   * The reason that a quantum task failed.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The ARN of the device the quantum task was run on.
   *
   * @public
   */
  deviceArn: string | undefined;

  /**
   * The parameters for the device on which the quantum task ran.
   *
   * @public
   */
  deviceParameters: __AutomaticJsonStringConversion | string | undefined;

  /**
   * The number of shots used in the quantum task.
   *
   * @public
   */
  shots: number | undefined;

  /**
   * The S3 bucket where quantum task results are stored.
   *
   * @public
   */
  outputS3Bucket: string | undefined;

  /**
   * The folder in the S3 bucket where quantum task results are stored.
   *
   * @public
   */
  outputS3Directory: string | undefined;

  /**
   * The time at which the quantum task was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the quantum task ended.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * The tags that belong to this quantum task.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The ARN of the Amazon Braket job associated with the quantum task.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * Queue information for the requested quantum task. Only returned if `QueueInfo` is specified in the `additionalAttributeNames"` field in the `GetQuantumTask` API request.
   *
   * @public
   */
  queueInfo?: QuantumTaskQueueInfo | undefined;

  /**
   * The list of Amazon Braket resources associated with the quantum task.
   *
   * @public
   */
  associations?: Association[] | undefined;

  /**
   * The number of successful shots for the quantum task. This is available after a successfully completed quantum task.
   *
   * @public
   */
  numSuccessfulShots?: number | undefined;

  /**
   * Metadata about the action performed by the quantum task, including information about the type of action and program counts.
   *
   * @public
   */
  actionMetadata?: ActionMetadata | undefined;

  /**
   * Enabled experimental capabilities for the quantum task, if any.
   *
   * @public
   */
  experimentalCapabilities?: ExperimentalCapabilities | undefined;
}

/**
 * A filter used to search for quantum tasks.
 *
 * @public
 */
export interface SearchQuantumTasksFilter {
  /**
   * The name of the quantum task parameter to filter based on. Filter name can be either `quantumTaskArn`, `deviceArn`, `jobArn`, `status` or `createdAt`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The values used to filter quantum tasks based on the filter name and operator.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * An operator to use for the filter.
   *
   * @public
   */
  operator: SearchQuantumTasksFilterOperator | undefined;
}

/**
 * @public
 */
export interface SearchQuantumTasksRequest {
  /**
   * A token used for pagination of results returned in the response. Use the token returned from the previous request to continue search where the previous request ended.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Array of `SearchQuantumTasksFilter` objects to use when searching for quantum tasks.
   *
   * @public
   */
  filters: SearchQuantumTasksFilter[] | undefined;
}

/**
 * Includes information about a quantum task.
 *
 * @public
 */
export interface QuantumTaskSummary {
  /**
   * The ARN of the quantum task.
   *
   * @public
   */
  quantumTaskArn: string | undefined;

  /**
   * The status of the quantum task.
   *
   * @public
   */
  status: QuantumTaskStatus | undefined;

  /**
   * The ARN of the device the quantum task ran on.
   *
   * @public
   */
  deviceArn: string | undefined;

  /**
   * The shots used for the quantum task.
   *
   * @public
   */
  shots: number | undefined;

  /**
   * The S3 bucket where the quantum task result file is stored.
   *
   * @public
   */
  outputS3Bucket: string | undefined;

  /**
   * The folder in the S3 bucket where the quantum task result file is stored.
   *
   * @public
   */
  outputS3Directory: string | undefined;

  /**
   * The time at which the quantum task was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time at which the quantum task finished.
   *
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * Displays the key, value pairs of tags associated with this quantum task.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchQuantumTasksResponse {
  /**
   * An array of `QuantumTaskSummary` objects for quantum tasks that match the specified filters.
   *
   * @public
   */
  quantumTasks: QuantumTaskSummary[] | undefined;

  /**
   * A token used for pagination of results, or null if there are no additional results. Use the token value in a subsequent request to continue search where the previous request ended.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Defines a time range for spending limits, specifying when the limit is active.
 *
 * @public
 */
export interface TimePeriod {
  /**
   * The start date and time for the spending limit period, in epoch seconds.
   *
   * @public
   */
  startAt: Date | undefined;

  /**
   * The end date and time for the spending limit period, in epoch seconds.
   *
   * @public
   */
  endAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateSpendingLimitRequest {
  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Braket ignores the request, but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the quantum device to apply the spending limit to.
   *
   * @public
   */
  deviceArn: string | undefined;

  /**
   * The maximum amount that can be spent on the specified device, in USD.
   *
   * @public
   */
  spendingLimit: string | undefined;

  /**
   * The time period during which the spending limit is active, including start and end dates.
   *
   * @public
   */
  timePeriod?: TimePeriod | undefined;

  /**
   * The tags to apply to the spending limit. Each tag consists of a key and an optional value.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSpendingLimitResponse {
  /**
   * The Amazon Resource Name (ARN) of the created spending limit.
   *
   * @public
   */
  spendingLimitArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpendingLimitRequest {
  /**
   * The Amazon Resource Name (ARN) of the spending limit to delete.
   *
   * @public
   */
  spendingLimitArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpendingLimitResponse {}

/**
 * Specifies filter criteria for searching spending limits. Use filters to narrow down results based on specific attributes.
 *
 * @public
 */
export interface SearchSpendingLimitsFilter {
  /**
   * The name of the field to filter on. Currently only supports `deviceArn`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * An array of values to match against the specified field.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * The comparison operator to use when filtering.
   *
   * @public
   */
  operator: SearchSpendingLimitsFilterOperator | undefined;
}

/**
 * @public
 */
export interface SearchSpendingLimitsRequest {
  /**
   * The token to retrieve the next page of results. This value is returned from a previous call to SearchSpendingLimits when there are more results available.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call. Minimum value of 1, maximum value of 100. Default is 20.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The filters to apply when searching for spending limits. Use filters to narrow down the results based on specific criteria.
   *
   * @public
   */
  filters?: SearchSpendingLimitsFilter[] | undefined;
}

/**
 * Contains summary information about a spending limit, including current spending status and configuration details.
 *
 * @public
 */
export interface SpendingLimitSummary {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the spending limit.
   *
   * @public
   */
  spendingLimitArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the quantum device associated with this spending limit.
   *
   * @public
   */
  deviceArn: string | undefined;

  /**
   * The time period during which the spending limit is active.
   *
   * @public
   */
  timePeriod: TimePeriod | undefined;

  /**
   * The maximum spending amount allowed for the device during the specified time period, in USD.
   *
   * @public
   */
  spendingLimit: string | undefined;

  /**
   * The amount currently queued for spending on the device, in USD.
   *
   * @public
   */
  queuedSpend: string | undefined;

  /**
   * The total amount spent on the device so far during the current time period, in USD.
   *
   * @public
   */
  totalSpend: string | undefined;

  /**
   * The date and time when the spending limit was created, in epoch seconds.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the spending limit was last modified, in epoch seconds.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The tags associated with the spending limit. Each tag consists of a key and an optional value.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchSpendingLimitsResponse {
  /**
   * An array of spending limit summaries that match the specified filters.
   *
   * @public
   */
  spendingLimits: SpendingLimitSummary[] | undefined;

  /**
   * The token to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSpendingLimitRequest {
  /**
   * The Amazon Resource Name (ARN) of the spending limit to update.
   *
   * @public
   */
  spendingLimitArn: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Braket ignores the request, but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The new maximum amount that can be spent on the specified device, in USD.
   *
   * @public
   */
  spendingLimit?: string | undefined;

  /**
   * The new time period during which the spending limit is active, including start and end dates.
   *
   * @public
   */
  timePeriod?: TimePeriod | undefined;
}

/**
 * @public
 */
export interface UpdateSpendingLimitResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * Specify the `resourceArn` of the resource to which a tag will be added.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Specify the tags to add to the resource. Tags can be specified as a key-value map.
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
   * Specify the `resourceArn` for the resource from which to remove the tags.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Specify the keys for the tags to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
