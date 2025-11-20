// smithy-typescript generated code
import { AutomaticJsonStringConversion as __AutomaticJsonStringConversion } from "@smithy/smithy-client";

/**
 * <p>Contains metadata about the quantum task action, including the action type and program statistics.</p>
 * @public
 */
export interface ActionMetadata {
  /**
   * <p>The type of action associated with the quantum task.</p>
   * @public
   */
  actionType: string | undefined;

  /**
   * <p>The number of programs in a program set. This is only available for a program set.</p>
   * @public
   */
  programCount?: number | undefined;

  /**
   * <p>The number of executables in a program set. This is only available for a program set.</p>
   * @public
   */
  executableCount?: number | undefined;
}

/**
 * <p>The container image used to create an Amazon Braket hybrid job.</p>
 * @public
 */
export interface ContainerImage {
  /**
   * <p>The URI locating the container image.</p>
   * @public
   */
  uri: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CompressionType = {
  GZIP: "GZIP",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type CompressionType = (typeof CompressionType)[keyof typeof CompressionType];

/**
 * <p>Contains information about algorithm scripts used for the Amazon Braket hybrid job.</p>
 * @public
 */
export interface ScriptModeConfig {
  /**
   * <p>The entry point in the algorithm scripts from where the execution begins in the hybrid job.</p>
   * @public
   */
  entryPoint: string | undefined;

  /**
   * <p>The URI that specifies the S3 path to the algorithm scripts used by an Amazon Braket hybrid job.</p>
   * @public
   */
  s3Uri: string | undefined;

  /**
   * <p>The type of compression used to store the algorithm scripts in Amazon S3 storage.</p>
   * @public
   */
  compressionType?: CompressionType | undefined;
}

/**
 * <p>Defines the Amazon Braket hybrid job to be created. Specifies the container image the job uses and the paths to the Python scripts used for entry and training.</p>
 * @public
 */
export interface AlgorithmSpecification {
  /**
   * <p>Configures the paths to the Python scripts used for entry and training.</p>
   * @public
   */
  scriptModeConfig?: ScriptModeConfig | undefined;

  /**
   * <p>The container image used to create an Amazon Braket hybrid job.</p>
   * @public
   */
  containerImage?: ContainerImage | undefined;
}

/**
 * @public
 * @enum
 */
export const AssociationType = {
  RESERVATION_TIME_WINDOW_ARN: "RESERVATION_TIME_WINDOW_ARN",
} as const;

/**
 * @public
 */
export type AssociationType = (typeof AssociationType)[keyof typeof AssociationType];

/**
 * <p>The Amazon Braket resource and the association type.</p>
 * @public
 */
export interface Association {
  /**
   * <p>The Amazon Braket resource arn.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The association type for the specified Amazon Braket resource arn.</p>
   * @public
   */
  type: AssociationType | undefined;
}

/**
 * @public
 */
export interface GetDeviceRequest {
  /**
   * <p>The ARN of the device to retrieve.</p>
   * @public
   */
  deviceArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QueueName = {
  JOBS_QUEUE: "JOBS_QUEUE",
  QUANTUM_TASKS_QUEUE: "QUANTUM_TASKS_QUEUE",
} as const;

/**
 * @public
 */
export type QueueName = (typeof QueueName)[keyof typeof QueueName];

/**
 * @public
 * @enum
 */
export const QueuePriority = {
  NORMAL: "Normal",
  PRIORITY: "Priority",
} as const;

/**
 * @public
 */
export type QueuePriority = (typeof QueuePriority)[keyof typeof QueuePriority];

/**
 * <p>Information about quantum tasks and hybrid jobs queued on a device.</p>
 * @public
 */
export interface DeviceQueueInfo {
  /**
   * <p>The name of the queue. </p>
   * @public
   */
  queue: QueueName | undefined;

  /**
   * <p>The number of hybrid jobs or quantum tasks in the queue for a given device. </p>
   * @public
   */
  queueSize: string | undefined;

  /**
   * <p>Optional. Specifies the priority of the queue. Quantum tasks in a priority queue are processed before the quantum tasks in a normal queue.</p>
   * @public
   */
  queuePriority?: QueuePriority | undefined;
}

/**
 * @public
 * @enum
 */
export const DeviceStatus = {
  OFFLINE: "OFFLINE",
  ONLINE: "ONLINE",
  RETIRED: "RETIRED",
} as const;

/**
 * @public
 */
export type DeviceStatus = (typeof DeviceStatus)[keyof typeof DeviceStatus];

/**
 * @public
 * @enum
 */
export const DeviceType = {
  QPU: "QPU",
  SIMULATOR: "SIMULATOR",
} as const;

/**
 * @public
 */
export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType];

/**
 * @public
 */
export interface GetDeviceResponse {
  /**
   * <p>The ARN of the device.</p>
   * @public
   */
  deviceArn: string | undefined;

  /**
   * <p>The name of the device.</p>
   * @public
   */
  deviceName: string | undefined;

  /**
   * <p>The name of the partner company for the device.</p>
   * @public
   */
  providerName: string | undefined;

  /**
   * <p>The type of the device.</p>
   * @public
   */
  deviceType: DeviceType | undefined;

  /**
   * <p>The status of the device.</p>
   * @public
   */
  deviceStatus: DeviceStatus | undefined;

  /**
   * <p>Details about the capabilities of the device.</p>
   * @public
   */
  deviceCapabilities: __AutomaticJsonStringConversion | string | undefined;

  /**
   * <p>The number of quantum tasks and hybrid jobs currently queued on the device.</p>
   * @public
   */
  deviceQueueInfo?: DeviceQueueInfo[] | undefined;
}

/**
 * <p>Contains information about validation failures that occurred during the processing of a program set in a quantum task.</p>
 * @public
 */
export interface ProgramSetValidationFailure {
  /**
   * <p>The index of the program within the program set that failed validation.</p>
   * @public
   */
  programIndex: number | undefined;

  /**
   * <p>The index of the input within the program set that failed validation.</p>
   * @public
   */
  inputsIndex?: number | undefined;

  /**
   * <p>A list of error messages describing the validation failures that occurred.</p>
   * @public
   */
  errors?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  PROGRAM_SET_VALIDATION_FAILED: "ProgramSetValidationFailed",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The filter used to search for devices.</p>
 * @public
 */
export interface SearchDevicesFilter {
  /**
   * <p>The name of the device parameter to filter based on. Only <code>deviceArn</code> filter name is currently supported.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The values used to filter devices based on the filter name.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * @public
 */
export interface SearchDevicesRequest {
  /**
   * <p>A token used for pagination of results returned in the response. Use the token returned from the previous request to continue search where the previous request ended.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Array of SearchDevicesFilter objects to use when searching for devices.</p>
   * @public
   */
  filters: SearchDevicesFilter[] | undefined;
}

/**
 * <p>Includes information about the device.</p>
 * @public
 */
export interface DeviceSummary {
  /**
   * <p>The ARN of the device.</p>
   * @public
   */
  deviceArn: string | undefined;

  /**
   * <p>The name of the device.</p>
   * @public
   */
  deviceName: string | undefined;

  /**
   * <p>The provider of the device.</p>
   * @public
   */
  providerName: string | undefined;

  /**
   * <p>The type of the device.</p>
   * @public
   */
  deviceType: DeviceType | undefined;

  /**
   * <p>The status of the device.</p>
   * @public
   */
  deviceStatus: DeviceStatus | undefined;
}

/**
 * @public
 */
export interface SearchDevicesResponse {
  /**
   * <p>An array of <code>DeviceSummary</code> objects for devices that match the specified filter values.</p>
   * @public
   */
  devices: DeviceSummary[] | undefined;

  /**
   * <p>A token used for pagination of results, or null if there are no additional results. Use the token value in a subsequent request to continue search where the previous request ended.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelJobRequest {
  /**
   * <p>The ARN of the Amazon Braket hybrid job to cancel.</p>
   * @public
   */
  jobArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CancellationStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
} as const;

/**
 * @public
 */
export type CancellationStatus = (typeof CancellationStatus)[keyof typeof CancellationStatus];

/**
 * @public
 */
export interface CancelJobResponse {
  /**
   * <p>The ARN of the Amazon Braket job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>The status of the hybrid job.</p>
   * @public
   */
  cancellationStatus: CancellationStatus | undefined;
}

/**
 * <p>Contains information about the output locations for hybrid job checkpoint data.</p>
 * @public
 */
export interface JobCheckpointConfig {
  /**
   * <p>(Optional) The local directory where checkpoint data is stored. The default directory is <code>/opt/braket/checkpoints/</code>.</p>
   * @public
   */
  localPath?: string | undefined;

  /**
   * <p>Identifies the S3 path where you want Amazon Braket to store checkpoint data. For example, <code>s3://bucket-name/key-name-prefix</code>.</p>
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * <p>Configures the primary device used to create and run an Amazon Braket hybrid job.</p>
 * @public
 */
export interface DeviceConfig {
  /**
   * <p>The primary device ARN used to create and run an Amazon Braket hybrid job.</p>
   * @public
   */
  device: string | undefined;
}

/**
 * <p>Information about the Amazon S3 storage used by the Amazon Braket hybrid job.</p>
 * @public
 */
export interface S3DataSource {
  /**
   * <p>Depending on the value specified for the <code>S3DataType</code>, identifies either a key name prefix or a manifest that locates the S3 data source.</p>
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * <p>Information about the source of the input data used by the Amazon Braket hybrid job.</p>
 * @public
 */
export interface DataSource {
  /**
   * <p>Amazon S3 path of the input data used by the hybrid job.</p>
   * @public
   */
  s3DataSource: S3DataSource | undefined;
}

/**
 * <p>A list of parameters that specify the input channels, type of input data, and where it is located.</p>
 * @public
 */
export interface InputFileConfig {
  /**
   * <p>A named input source that an Amazon Braket hybrid job can consume.</p>
   * @public
   */
  channelName: string | undefined;

  /**
   * <p>The MIME type of the data.</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>The location of the input data.</p>
   * @public
   */
  dataSource: DataSource | undefined;
}

/**
 * @public
 * @enum
 */
export const _InstanceType = {
  ML_C4_2XLARGE: "ml.c4.2xlarge",
  ML_C4_4XLARGE: "ml.c4.4xlarge",
  ML_C4_8XLARGE: "ml.c4.8xlarge",
  ML_C4_XLARGE: "ml.c4.xlarge",
  ML_C5N_18XLARGE: "ml.c5n.18xlarge",
  ML_C5N_2XLARGE: "ml.c5n.2xlarge",
  ML_C5N_4XLARGE: "ml.c5n.4xlarge",
  ML_C5N_9XLARGE: "ml.c5n.9xlarge",
  ML_C5N_XLARGE: "ml.c5n.xlarge",
  ML_C5_18XLARGE: "ml.c5.18xlarge",
  ML_C5_2XLARGE: "ml.c5.2xlarge",
  ML_C5_4XLARGE: "ml.c5.4xlarge",
  ML_C5_9XLARGE: "ml.c5.9xlarge",
  ML_C5_XLARGE: "ml.c5.xlarge",
  ML_G4DN_12XLARGE: "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE: "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE: "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE: "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE: "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE: "ml.g4dn.xlarge",
  ML_M4_10XLARGE: "ml.m4.10xlarge",
  ML_M4_16XLARGE: "ml.m4.16xlarge",
  ML_M4_2XLARGE: "ml.m4.2xlarge",
  ML_M4_4XLARGE: "ml.m4.4xlarge",
  ML_M4_XLARGE: "ml.m4.xlarge",
  ML_M5_12XLARGE: "ml.m5.12xlarge",
  ML_M5_24XLARGE: "ml.m5.24xlarge",
  ML_M5_2XLARGE: "ml.m5.2xlarge",
  ML_M5_4XLARGE: "ml.m5.4xlarge",
  ML_M5_LARGE: "ml.m5.large",
  ML_M5_XLARGE: "ml.m5.xlarge",
  ML_P2_16XLARGE: "ml.p2.16xlarge",
  ML_P2_8XLARGE: "ml.p2.8xlarge",
  ML_P2_XLARGE: "ml.p2.xlarge",
  ML_P3DN_24XLARGE: "ml.p3dn.24xlarge",
  ML_P3_16XLARGE: "ml.p3.16xlarge",
  ML_P3_2XLARGE: "ml.p3.2xlarge",
  ML_P3_8XLARGE: "ml.p3.8xlarge",
  ML_P4D_24XLARGE: "ml.p4d.24xlarge",
} as const;

/**
 * @public
 */
export type _InstanceType = (typeof _InstanceType)[keyof typeof _InstanceType];

/**
 * <p>Configures the resource instances to use while running the Amazon Braket hybrid job on Amazon Braket.</p>
 * @public
 */
export interface InstanceConfig {
  /**
   * <p>Configures the type of resource instances to use while running an Amazon Braket hybrid job.</p>
   * @public
   */
  instanceType: _InstanceType | undefined;

  /**
   * <p>The size of the storage volume, in GB, to provision.</p>
   * @public
   */
  volumeSizeInGb: number | undefined;

  /**
   * <p>Configures the number of resource instances to use while running an Amazon Braket hybrid job on Amazon Braket. The default value is 1.</p>
   * @public
   */
  instanceCount?: number | undefined;
}

/**
 * <p>Specifies the path to the S3 location where you want to store hybrid job artifacts and the encryption key used to store them.</p>
 * @public
 */
export interface JobOutputDataConfig {
  /**
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon Braket uses to encrypt the hybrid job training artifacts at rest using Amazon S3 server-side encryption.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>Identifies the S3 path where you want Amazon Braket to store the hybrid job training artifacts. For example, <code>s3://bucket-name/key-name-prefix</code>.</p>
   * @public
   */
  s3Path: string | undefined;
}

/**
 * <p>Specifies limits for how long an Amazon Braket hybrid job can run. </p>
 * @public
 */
export interface JobStoppingCondition {
  /**
   * <p>The maximum length of time, in seconds, that an Amazon Braket hybrid job can run.</p>
   * @public
   */
  maxRuntimeInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * <p>The client token associated with this request that guarantees that the request is idempotent.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Definition of the Amazon Braket job to be created. Specifies the container image the job uses and information about the Python scripts used for entry and training.</p>
   * @public
   */
  algorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * <p>A list of parameters that specify the name and type of input data and where it is located.</p>
   * @public
   */
  inputDataConfig?: InputFileConfig[] | undefined;

  /**
   * <p>The path to the S3 location where you want to store hybrid job artifacts and the encryption key used to store them.</p>
   * @public
   */
  outputDataConfig: JobOutputDataConfig | undefined;

  /**
   * <p>Information about the output locations for hybrid job checkpoint data.</p>
   * @public
   */
  checkpointConfig?: JobCheckpointConfig | undefined;

  /**
   * <p>The name of the Amazon Braket hybrid job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon Braket can assume to perform tasks on behalf of a user. It can access user resources, run an Amazon Braket job container on behalf of user, and output results and hybrid job details to the users' s3 buckets.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p> The user-defined criteria that specifies when a hybrid job stops running.</p>
   * @public
   */
  stoppingCondition?: JobStoppingCondition | undefined;

  /**
   * <p>Configuration of the resource instances to use while running the hybrid job on Amazon Braket.</p>
   * @public
   */
  instanceConfig: InstanceConfig | undefined;

  /**
   * <p>Algorithm-specific parameters used by an Amazon Braket hybrid job that influence the quality of the training job. The values are set with a map of JSON key:value pairs, where the key is the name of the hyperparameter and the value is the value of the hyperparameter.</p> <important> <p>Do not include any security-sensitive information including account access IDs, secrets, or tokens in any hyperparameter fields. As part of the shared responsibility model, you are responsible for any potential exposure, unauthorized access, or compromise of your sensitive data if caused by security-sensitive information included in the request hyperparameter variable or plain text fields.</p> </important>
   * @public
   */
  hyperParameters?: Record<string, string> | undefined;

  /**
   * <p>The quantum processing unit (QPU) or simulator used to create an Amazon Braket hybrid job.</p>
   * @public
   */
  deviceConfig: DeviceConfig | undefined;

  /**
   * <p>Tags to be added to the hybrid job you're creating.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The list of Amazon Braket resources associated with the hybrid job.</p>
   * @public
   */
  associations?: Association[] | undefined;
}

/**
 * @public
 */
export interface CreateJobResponse {
  /**
   * <p>The ARN of the Amazon Braket hybrid job created.</p>
   * @public
   */
  jobArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HybridJobAdditionalAttributeName = {
  QUEUE_INFO: "QueueInfo",
} as const;

/**
 * @public
 */
export type HybridJobAdditionalAttributeName =
  (typeof HybridJobAdditionalAttributeName)[keyof typeof HybridJobAdditionalAttributeName];

/**
 * @public
 */
export interface GetJobRequest {
  /**
   * <p>The ARN of the hybrid job to retrieve.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>A list of attributes to return additional information for. Only the QueueInfo additional attribute name is currently supported. </p>
   * @public
   */
  additionalAttributeNames?: HybridJobAdditionalAttributeName[] | undefined;
}

/**
 * @public
 * @enum
 */
export const JobEventType = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  DEPRIORITIZED_DUE_TO_INACTIVITY: "DEPRIORITIZED_DUE_TO_INACTIVITY",
  DOWNLOADING_DATA: "DOWNLOADING_DATA",
  FAILED: "FAILED",
  MAX_RUNTIME_EXCEEDED: "MAX_RUNTIME_EXCEEDED",
  QUEUED_FOR_EXECUTION: "QUEUED_FOR_EXECUTION",
  RUNNING: "RUNNING",
  STARTING_INSTANCE: "STARTING_INSTANCE",
  UPLOADING_RESULTS: "UPLOADING_RESULTS",
  WAITING_FOR_PRIORITY: "WAITING_FOR_PRIORITY",
} as const;

/**
 * @public
 */
export type JobEventType = (typeof JobEventType)[keyof typeof JobEventType];

/**
 * <p>Details about the type and time events that occurred related to the Amazon Braket hybrid job.</p>
 * @public
 */
export interface JobEventDetails {
  /**
   * <p>The type of event that occurred related to the Amazon Braket hybrid job.</p>
   * @public
   */
  eventType?: JobEventType | undefined;

  /**
   * <p>The time of the event that occurred related to the Amazon Braket hybrid job.</p>
   * @public
   */
  timeOfEvent?: Date | undefined;

  /**
   * <p>A message describing the event that occurred related to the Amazon Braket hybrid job.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>Information about the queue for a specified hybrid job.</p>
 * @public
 */
export interface HybridJobQueueInfo {
  /**
   * <p>The name of the queue.</p>
   * @public
   */
  queue: QueueName | undefined;

  /**
   * <p>Current position of the hybrid job in the jobs queue.</p>
   * @public
   */
  position: string | undefined;

  /**
   * <p>Optional. Provides more information about the queue position. For example, if the hybrid job is complete and no longer in the queue, the message field contains that information.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JobPrimaryStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type JobPrimaryStatus = (typeof JobPrimaryStatus)[keyof typeof JobPrimaryStatus];

/**
 * @public
 */
export interface GetJobResponse {
  /**
   * <p>The status of the Amazon Braket hybrid job.</p>
   * @public
   */
  status: JobPrimaryStatus | undefined;

  /**
   * <p>The ARN of the Amazon Braket hybrid job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon Braket can assume to perform tasks on behalf of a user. It can access user resources, run an Amazon Braket job container on behalf of user, and output results and other hybrid job details to the s3 buckets of a user.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A description of the reason why an Amazon Braket hybrid job failed, if it failed.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The name of the Amazon Braket hybrid job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>Algorithm-specific parameters used by an Amazon Braket hybrid job that influence the quality of the traiing job. The values are set with a map of JSON key:value pairs, where the key is the name of the hyperparameter and the value is the value of th hyperparameter.</p>
   * @public
   */
  hyperParameters?: Record<string, string> | undefined;

  /**
   * <p>A list of parameters that specify the name and type of input data and where it is located.</p>
   * @public
   */
  inputDataConfig?: InputFileConfig[] | undefined;

  /**
   * <p>The path to the S3 location where hybrid job artifacts are stored and the encryption key used to store them there.</p>
   * @public
   */
  outputDataConfig: JobOutputDataConfig | undefined;

  /**
   * <p>The user-defined criteria that specifies when to stop a running hybrid job.</p>
   * @public
   */
  stoppingCondition?: JobStoppingCondition | undefined;

  /**
   * <p>Information about the output locations for hybrid job checkpoint data.</p>
   * @public
   */
  checkpointConfig?: JobCheckpointConfig | undefined;

  /**
   * <p>Definition of the Amazon Braket hybrid job created. Provides information about the container image used, and the Python scripts used for training.</p>
   * @public
   */
  algorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * <p>The resource instances to use while running the hybrid job on Amazon Braket.</p>
   * @public
   */
  instanceConfig: InstanceConfig | undefined;

  /**
   * <p>The time at which the Amazon Braket hybrid job was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the Amazon Braket hybrid job was started.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The time at which the Amazon Braket hybrid job ended.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The billable time for which the Amazon Braket hybrid job used to complete.</p>
   * @public
   */
  billableDuration?: number | undefined;

  /**
   * <p>The primary device used by the Amazon Braket hybrid job.</p>
   * @public
   */
  deviceConfig?: DeviceConfig | undefined;

  /**
   * <p>Details about the time and type of events occurred related to the Amazon Braket hybrid job.</p>
   * @public
   */
  events?: JobEventDetails[] | undefined;

  /**
   * <p>The tags associated with this hybrid job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Queue information for the requested hybrid job. Only returned if <code>QueueInfo</code> is specified in the <code>additionalAttributeNames"</code> field in the <code>GetJob</code> API request.</p>
   * @public
   */
  queueInfo?: HybridJobQueueInfo | undefined;

  /**
   * <p>The list of Amazon Braket resources associated with the hybrid job.</p>
   * @public
   */
  associations?: Association[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SearchJobsFilterOperator = {
  BETWEEN: "BETWEEN",
  CONTAINS: "CONTAINS",
  EQUAL: "EQUAL",
  GT: "GT",
  GTE: "GTE",
  LT: "LT",
  LTE: "LTE",
} as const;

/**
 * @public
 */
export type SearchJobsFilterOperator = (typeof SearchJobsFilterOperator)[keyof typeof SearchJobsFilterOperator];

/**
 * <p>A filter used to search for Amazon Braket hybrid jobs.</p>
 * @public
 */
export interface SearchJobsFilter {
  /**
   * <p>The name of the hybrid job parameter to filter based on. Filter name can be either <code>jobArn</code> or <code>createdAt</code>. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The values used to filter hybrid jobs based on the filter name and operator.</p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>An operator to use for the filter.</p>
   * @public
   */
  operator: SearchJobsFilterOperator | undefined;
}

/**
 * @public
 */
export interface SearchJobsRequest {
  /**
   * <p>A token used for pagination of results returned in the response. Use the token returned from the previous request to continue search where the previous request ended.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Array of SearchJobsFilter objects to use when searching for hybrid jobs.</p>
   * @public
   */
  filters: SearchJobsFilter[] | undefined;
}

/**
 * <p>Provides summary information about an Amazon Braket hybrid job.</p>
 * @public
 */
export interface JobSummary {
  /**
   * <p>The status of the Amazon Braket hybrid job.</p>
   * @public
   */
  status: JobPrimaryStatus | undefined;

  /**
   * <p>The ARN of the Amazon Braket hybrid job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>The name of the Amazon Braket hybrid job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The primary device used by an Amazon Braket hybrid job.</p>
   * @public
   */
  device: string | undefined;

  /**
   * <p>The time at which the Amazon Braket hybrid job was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the Amazon Braket hybrid job was started.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The time at which the Amazon Braket hybrid job ended.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>Displays the key, value pairs of tags associated with this hybrid job.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchJobsResponse {
  /**
   * <p>An array of <code>JobSummary</code> objects for devices that match the specified filter values.</p>
   * @public
   */
  jobs: JobSummary[] | undefined;

  /**
   * <p>A token used for pagination of results, or <code>null</code> if there are no additional results. Use the token value in a subsequent request to continue search where the previous request ended.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>Specify the <code>resourceArn</code> for the resource whose tags to display.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Displays the key, value pairs of tags associated with this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CancelQuantumTaskRequest {
  /**
   * <p>The ARN of the quantum task to cancel.</p>
   * @public
   */
  quantumTaskArn: string | undefined;

  /**
   * <p>The client token associated with the cancellation request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelQuantumTaskResponse {
  /**
   * <p>The ARN of the quantum task.</p>
   * @public
   */
  quantumTaskArn: string | undefined;

  /**
   * <p>The status of the quantum task.</p>
   * @public
   */
  cancellationStatus: CancellationStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const ExperimentalCapabilitiesEnablementType = {
  ALL: "ALL",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type ExperimentalCapabilitiesEnablementType =
  (typeof ExperimentalCapabilitiesEnablementType)[keyof typeof ExperimentalCapabilitiesEnablementType];

/**
 * <p>Enabled experimental capabilities for quantum hardware. Note that the use of these features may impact device capabilities and performance beyond its standard specifications.</p>
 * @public
 */
export type ExperimentalCapabilities = ExperimentalCapabilities.EnabledMember | ExperimentalCapabilities.$UnknownMember;

/**
 * @public
 */
export namespace ExperimentalCapabilities {
  /**
   * <p>Enabled experimental capabilities.</p>
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
   * <p>The client token associated with the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The ARN of the device to run the quantum task on.</p>
   * @public
   */
  deviceArn: string | undefined;

  /**
   * <p>The parameters for the device to run the quantum task on.</p>
   * @public
   */
  deviceParameters?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * <p>The number of shots to use for the quantum task.</p>
   * @public
   */
  shots: number | undefined;

  /**
   * <p>The S3 bucket to store quantum task result files in.</p>
   * @public
   */
  outputS3Bucket: string | undefined;

  /**
   * <p>The key prefix for the location in the S3 bucket to store quantum task results in.</p>
   * @public
   */
  outputS3KeyPrefix: string | undefined;

  /**
   * <p>The action associated with the quantum task.</p>
   * @public
   */
  action: __AutomaticJsonStringConversion | string | undefined;

  /**
   * <p>Tags to be added to the quantum task you're creating.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The token for an Amazon Braket hybrid job that associates it with the quantum task.</p>
   * @public
   */
  jobToken?: string | undefined;

  /**
   * <p>The list of Amazon Braket resources associated with the quantum task.</p>
   * @public
   */
  associations?: Association[] | undefined;

  /**
   * <p>Enable experimental capabilities for the quantum task.</p>
   * @public
   */
  experimentalCapabilities?: ExperimentalCapabilities | undefined;
}

/**
 * @public
 */
export interface CreateQuantumTaskResponse {
  /**
   * <p>The ARN of the quantum task created by the request.</p>
   * @public
   */
  quantumTaskArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QuantumTaskAdditionalAttributeName = {
  QUEUE_INFO: "QueueInfo",
} as const;

/**
 * @public
 */
export type QuantumTaskAdditionalAttributeName =
  (typeof QuantumTaskAdditionalAttributeName)[keyof typeof QuantumTaskAdditionalAttributeName];

/**
 * @public
 */
export interface GetQuantumTaskRequest {
  /**
   * <p>The ARN of the quantum task to retrieve.</p>
   * @public
   */
  quantumTaskArn: string | undefined;

  /**
   * <p>A list of attributes to return additional information for. Only the QueueInfo additional attribute name is currently supported.</p>
   * @public
   */
  additionalAttributeNames?: QuantumTaskAdditionalAttributeName[] | undefined;
}

/**
 * <p>The queue information for the specified quantum task.</p>
 * @public
 */
export interface QuantumTaskQueueInfo {
  /**
   * <p>The name of the queue. </p>
   * @public
   */
  queue: QueueName | undefined;

  /**
   * <p>Current position of the quantum task in the quantum tasks queue.</p>
   * @public
   */
  position: string | undefined;

  /**
   * <p>Optional. Specifies the priority of the queue. Quantum tasks in a priority queue are processed before the quantum tasks in a normal queue.</p>
   * @public
   */
  queuePriority?: QueuePriority | undefined;

  /**
   * <p>Optional. Provides more information about the queue position. For example, if the quantum task is complete and no longer in the queue, the message field contains that information.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QuantumTaskStatus = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type QuantumTaskStatus = (typeof QuantumTaskStatus)[keyof typeof QuantumTaskStatus];

/**
 * @public
 */
export interface GetQuantumTaskResponse {
  /**
   * <p>The ARN of the quantum task.</p>
   * @public
   */
  quantumTaskArn: string | undefined;

  /**
   * <p>The status of the quantum task.</p>
   * @public
   */
  status: QuantumTaskStatus | undefined;

  /**
   * <p>The reason that a quantum task failed.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The ARN of the device the quantum task was run on.</p>
   * @public
   */
  deviceArn: string | undefined;

  /**
   * <p>The parameters for the device on which the quantum task ran.</p>
   * @public
   */
  deviceParameters: __AutomaticJsonStringConversion | string | undefined;

  /**
   * <p>The number of shots used in the quantum task.</p>
   * @public
   */
  shots: number | undefined;

  /**
   * <p>The S3 bucket where quantum task results are stored.</p>
   * @public
   */
  outputS3Bucket: string | undefined;

  /**
   * <p>The folder in the S3 bucket where quantum task results are stored.</p>
   * @public
   */
  outputS3Directory: string | undefined;

  /**
   * <p>The time at which the quantum task was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the quantum task ended.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The tags that belong to this quantum task.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The ARN of the Amazon Braket job associated with the quantum task.</p>
   * @public
   */
  jobArn?: string | undefined;

  /**
   * <p>Queue information for the requested quantum task. Only returned if <code>QueueInfo</code> is specified in the <code>additionalAttributeNames"</code> field in the <code>GetQuantumTask</code> API request.</p>
   * @public
   */
  queueInfo?: QuantumTaskQueueInfo | undefined;

  /**
   * <p>The list of Amazon Braket resources associated with the quantum task.</p>
   * @public
   */
  associations?: Association[] | undefined;

  /**
   * <p>The number of successful shots for the quantum task. This is available after a successfully completed quantum task.</p>
   * @public
   */
  numSuccessfulShots?: number | undefined;

  /**
   * <p>Metadata about the action performed by the quantum task, including information about the type of action and program counts.</p>
   * @public
   */
  actionMetadata?: ActionMetadata | undefined;

  /**
   * <p>Enabled experimental capabilities for the quantum task, if any.</p>
   * @public
   */
  experimentalCapabilities?: ExperimentalCapabilities | undefined;
}

/**
 * @public
 * @enum
 */
export const SearchQuantumTasksFilterOperator = {
  BETWEEN: "BETWEEN",
  EQUAL: "EQUAL",
  GT: "GT",
  GTE: "GTE",
  LT: "LT",
  LTE: "LTE",
} as const;

/**
 * @public
 */
export type SearchQuantumTasksFilterOperator =
  (typeof SearchQuantumTasksFilterOperator)[keyof typeof SearchQuantumTasksFilterOperator];

/**
 * <p>A filter used to search for quantum tasks.</p>
 * @public
 */
export interface SearchQuantumTasksFilter {
  /**
   * <p>The name of the quantum task parameter to filter based on. Filter name can be either <code>quantumTaskArn</code>, <code>deviceArn</code>, <code>jobArn</code>, <code>status</code> or <code>createdAt</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The values used to filter quantum tasks based on the filter name and operator.</p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>An operator to use for the filter.</p>
   * @public
   */
  operator: SearchQuantumTasksFilterOperator | undefined;
}

/**
 * @public
 */
export interface SearchQuantumTasksRequest {
  /**
   * <p>A token used for pagination of results returned in the response. Use the token returned from the previous request to continue search where the previous request ended.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Array of <code>SearchQuantumTasksFilter</code> objects to use when searching for quantum tasks.</p>
   * @public
   */
  filters: SearchQuantumTasksFilter[] | undefined;
}

/**
 * <p>Includes information about a quantum task.</p>
 * @public
 */
export interface QuantumTaskSummary {
  /**
   * <p>The ARN of the quantum task.</p>
   * @public
   */
  quantumTaskArn: string | undefined;

  /**
   * <p>The status of the quantum task.</p>
   * @public
   */
  status: QuantumTaskStatus | undefined;

  /**
   * <p>The ARN of the device the quantum task ran on.</p>
   * @public
   */
  deviceArn: string | undefined;

  /**
   * <p>The shots used for the quantum task.</p>
   * @public
   */
  shots: number | undefined;

  /**
   * <p>The S3 bucket where the quantum task result file is stored.</p>
   * @public
   */
  outputS3Bucket: string | undefined;

  /**
   * <p>The folder in the S3 bucket where the quantum task result file is stored.</p>
   * @public
   */
  outputS3Directory: string | undefined;

  /**
   * <p>The time at which the quantum task was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the quantum task finished.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>Displays the key, value pairs of tags associated with this quantum task.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchQuantumTasksResponse {
  /**
   * <p>An array of <code>QuantumTaskSummary</code> objects for quantum tasks that match the specified filters.</p>
   * @public
   */
  quantumTasks: QuantumTaskSummary[] | undefined;

  /**
   * <p>A token used for pagination of results, or null if there are no additional results. Use the token value in a subsequent request to continue search where the previous request ended.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Defines a time range for spending limits, specifying when the limit is active.</p>
 * @public
 */
export interface TimePeriod {
  /**
   * <p>The start date and time for the spending limit period, in epoch seconds.</p>
   * @public
   */
  startAt: Date | undefined;

  /**
   * <p>The end date and time for the spending limit period, in epoch seconds.</p>
   * @public
   */
  endAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateSpendingLimitRequest {
  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Braket ignores the request, but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the quantum device to apply the spending limit to.</p>
   * @public
   */
  deviceArn: string | undefined;

  /**
   * <p>The maximum amount that can be spent on the specified device, in USD.</p>
   * @public
   */
  spendingLimit: string | undefined;

  /**
   * <p>The time period during which the spending limit is active, including start and end dates.</p>
   * @public
   */
  timePeriod?: TimePeriod | undefined;

  /**
   * <p>The tags to apply to the spending limit. Each tag consists of a key and an optional value.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSpendingLimitResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created spending limit.</p>
   * @public
   */
  spendingLimitArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpendingLimitRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the spending limit to delete.</p>
   * @public
   */
  spendingLimitArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpendingLimitResponse {}

/**
 * @public
 * @enum
 */
export const SearchSpendingLimitsFilterOperator = {
  EQUAL: "EQUAL",
} as const;

/**
 * @public
 */
export type SearchSpendingLimitsFilterOperator =
  (typeof SearchSpendingLimitsFilterOperator)[keyof typeof SearchSpendingLimitsFilterOperator];

/**
 * <p>Specifies filter criteria for searching spending limits. Use filters to narrow down results based on specific attributes.</p>
 * @public
 */
export interface SearchSpendingLimitsFilter {
  /**
   * <p>The name of the field to filter on. Currently only supports <code>deviceArn</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An array of values to match against the specified field.</p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>The comparison operator to use when filtering.</p>
   * @public
   */
  operator: SearchSpendingLimitsFilterOperator | undefined;
}

/**
 * @public
 */
export interface SearchSpendingLimitsRequest {
  /**
   * <p>The token to retrieve the next page of results. This value is returned from a previous call to SearchSpendingLimits when there are more results available.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Minimum value of 1, maximum value of 100. Default is 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The filters to apply when searching for spending limits. Use filters to narrow down the results based on specific criteria.</p>
   * @public
   */
  filters?: SearchSpendingLimitsFilter[] | undefined;
}

/**
 * <p>Contains summary information about a spending limit, including current spending status and configuration details.</p>
 * @public
 */
export interface SpendingLimitSummary {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the spending limit.</p>
   * @public
   */
  spendingLimitArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the quantum device associated with this spending limit.</p>
   * @public
   */
  deviceArn: string | undefined;

  /**
   * <p>The time period during which the spending limit is active.</p>
   * @public
   */
  timePeriod: TimePeriod | undefined;

  /**
   * <p>The maximum spending amount allowed for the device during the specified time period, in USD.</p>
   * @public
   */
  spendingLimit: string | undefined;

  /**
   * <p>The amount currently queued for spending on the device, in USD.</p>
   * @public
   */
  queuedSpend: string | undefined;

  /**
   * <p>The total amount spent on the device so far during the current time period, in USD.</p>
   * @public
   */
  totalSpend: string | undefined;

  /**
   * <p>The date and time when the spending limit was created, in epoch seconds.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the spending limit was last modified, in epoch seconds.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The tags associated with the spending limit. Each tag consists of a key and an optional value.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchSpendingLimitsResponse {
  /**
   * <p>An array of spending limit summaries that match the specified filters.</p>
   * @public
   */
  spendingLimits: SpendingLimitSummary[] | undefined;

  /**
   * <p>The token to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSpendingLimitRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the spending limit to update.</p>
   * @public
   */
  spendingLimitArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Braket ignores the request, but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The new maximum amount that can be spent on the specified device, in USD.</p>
   * @public
   */
  spendingLimit?: string | undefined;

  /**
   * <p>The new time period during which the spending limit is active, including start and end dates.</p>
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
   * <p>Specify the <code>resourceArn</code> of the resource to which a tag will be added.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Specify the tags to add to the resource. Tags can be specified as a key-value map.</p>
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
   * <p>Specify the <code>resourceArn</code> for the resource from which to remove the tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Specify the keys for the tags to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
