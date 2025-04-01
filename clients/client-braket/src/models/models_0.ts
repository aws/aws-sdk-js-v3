// smithy-typescript generated code
import {
  AutomaticJsonStringConversion as __AutomaticJsonStringConversion,
  ExceptionOptionType as __ExceptionOptionType,
} from "@smithy/smithy-client";

import { BraketServiceException as __BaseException } from "./BraketServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>The container image used to create an Amazon Braket job.</p>
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
 * <p>Contains information about the Python scripts used for entry and by an Amazon Braket
 *          job.</p>
 * @public
 */
export interface ScriptModeConfig {
  /**
   * <p>The path to the Python script that serves as the entry point for an Amazon Braket
   *          job.</p>
   * @public
   */
  entryPoint: string | undefined;

  /**
   * <p>The URI that specifies the S3 path to the Python script module that contains the
   *          training script used by an Amazon Braket job.</p>
   * @public
   */
  s3Uri: string | undefined;

  /**
   * <p>The type of compression used by the Python scripts for an Amazon Braket job.</p>
   * @public
   */
  compressionType?: CompressionType | undefined;
}

/**
 * <p>Defines the Amazon Braket job to be created. Specifies the container image the job uses
 *          and the paths to the Python scripts used for entry and training.</p>
 * @public
 */
export interface AlgorithmSpecification {
  /**
   * <p>Configures the paths to the Python scripts used for entry and training.</p>
   * @public
   */
  scriptModeConfig?: ScriptModeConfig | undefined;

  /**
   * <p>The container image used to create an Amazon Braket job.</p>
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
 * <p>Information about tasks and jobs queued on a device.</p>
 * @public
 */
export interface DeviceQueueInfo {
  /**
   * <p>The name of the queue. </p>
   * @public
   */
  queue: QueueName | undefined;

  /**
   * <p>The number of jobs or tasks in the queue for a given device. </p>
   * @public
   */
  queueSize: string | undefined;

  /**
   * <p>Optional. Specifies the priority of the queue. Tasks in a priority queue
   *          are processed before the tasks in a normal queue.</p>
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
   * <p>List of information about tasks and jobs queued on a device.</p>
   * @public
   */
  deviceQueueInfo?: DeviceQueueInfo[] | undefined;
}

/**
 * <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
  }
}

/**
 * <p>The specified resource was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>The throttling rate limit is met.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The filter to use for searching devices.</p>
 * @public
 */
export interface SearchDevicesFilter {
  /**
   * <p>The name to use to filter results.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The values to use to filter results.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * @public
 */
export interface SearchDevicesRequest {
  /**
   * <p>A token used for pagination of results returned in the response. Use the token returned
   *          from the previous request continue results where the previous request ended.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The filter values to use to search for a device.</p>
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
   * <p>An array of <code>DeviceSummary</code> objects for devices that match the specified
   *          filter values.</p>
   * @public
   */
  devices: DeviceSummary[] | undefined;

  /**
   * <p>A token used for pagination of results, or null if there are no additional results. Use
   *          the token value in a subsequent request to continue results where the previous request
   *          ended.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelJobRequest {
  /**
   * <p>The ARN of the Amazon Braket job to cancel.</p>
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
   * <p>The status of the job cancellation request.</p>
   * @public
   */
  cancellationStatus: CancellationStatus | undefined;
}

/**
 * <p>An error occurred due to a conflict.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>Contains information about the output locations for job checkpoint data.</p>
 * @public
 */
export interface JobCheckpointConfig {
  /**
   * <p>(Optional) The local directory where checkpoints are written. The default directory is
   *             <code>/opt/braket/checkpoints/</code>.</p>
   * @public
   */
  localPath?: string | undefined;

  /**
   * <p>Identifies the S3 path where you want Amazon Braket to store checkpoints. For example,
   *             <code>s3://bucket-name/key-name-prefix</code>.</p>
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * <p>Configures the quantum processing units (QPUs) or simulator used to create and run an
 *          Amazon Braket job.</p>
 * @public
 */
export interface DeviceConfig {
  /**
   * <p>The primary quantum processing unit (QPU) or simulator used to create and run an Amazon
   *          Braket job.</p>
   * @public
   */
  device: string | undefined;
}

/**
 * <p>Information about the data stored in Amazon S3 used by the Amazon Braket job.</p>
 * @public
 */
export interface S3DataSource {
  /**
   * <p>Depending on the value specified for the <code>S3DataType</code>, identifies either a
   *          key name prefix or a manifest that locates the S3 data source.</p>
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * <p>Information about the source of the data used by the Amazon Braket job.</p>
 * @public
 */
export interface DataSource {
  /**
   * <p>Information about the data stored in Amazon S3 used by the Amazon Braket job.</p>
   * @public
   */
  s3DataSource: S3DataSource | undefined;
}

/**
 * <p>A list of parameters that specify the input channels, type of input data, and where it
 *          is located.</p>
 * @public
 */
export interface InputFileConfig {
  /**
   * <p>A named input source that an Amazon Braket job can consume.</p>
   * @public
   */
  channelName: string | undefined;

  /**
   * <p>The MIME type of the data.</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>The location of the channel data.</p>
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
 * <p>Configures the resource instances to use while running the Amazon Braket hybrid job on
 *          Amazon Braket.</p>
 * @public
 */
export interface InstanceConfig {
  /**
   * <p>Configures the type resource instances to use while running an Amazon Braket hybrid
   *          job.</p>
   * @public
   */
  instanceType: _InstanceType | undefined;

  /**
   * <p>The size of the storage volume, in GB, that user wants to provision.</p>
   * @public
   */
  volumeSizeInGb: number | undefined;

  /**
   * <p>Configures the number of resource instances to use while running an Amazon Braket job on
   *          Amazon Braket. The default value is 1.</p>
   * @public
   */
  instanceCount?: number | undefined;
}

/**
 * <p>Specifies the path to the S3 location where you want to store job artifacts and the
 *          encryption key used to store them.</p>
 * @public
 */
export interface JobOutputDataConfig {
  /**
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon Braket uses to encrypt the job
   *          training artifacts at rest using Amazon S3 server-side encryption.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>Identifies the S3 path where you want Amazon Braket to store the job training artifacts.
   *          For example, <code>s3://bucket-name/key-name-prefix</code>.</p>
   * @public
   */
  s3Path: string | undefined;
}

/**
 * <p>Specifies limits for how long an Amazon Braket job can run. </p>
 * @public
 */
export interface JobStoppingCondition {
  /**
   * <p>The maximum length of time, in seconds, that an Amazon Braket job can run.</p>
   * @public
   */
  maxRuntimeInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * <p>A unique token that guarantees that the call to this API is idempotent.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Definition of the Amazon Braket job to be created. Specifies the container image the job
   *          uses and information about the Python scripts used for entry and training.</p>
   * @public
   */
  algorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * <p>A list of parameters that specify the name and type of input data and where it is
   *          located.</p>
   * @public
   */
  inputDataConfig?: InputFileConfig[] | undefined;

  /**
   * <p>The path to the S3 location where you want to store job artifacts and the encryption key
   *          used to store them.</p>
   * @public
   */
  outputDataConfig: JobOutputDataConfig | undefined;

  /**
   * <p>Information about the output locations for job checkpoint data.</p>
   * @public
   */
  checkpointConfig?: JobCheckpointConfig | undefined;

  /**
   * <p>The name of the Amazon Braket job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon Braket can assume to perform
   *          tasks on behalf of a user. It can access user resources, run an Amazon Braket job container
   *          on behalf of user, and output resources to the users' s3 buckets.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p> The user-defined criteria that specifies when a job stops running.</p>
   * @public
   */
  stoppingCondition?: JobStoppingCondition | undefined;

  /**
   * <p>Configuration of the resource instances to use while running the hybrid job on Amazon
   *          Braket.</p>
   * @public
   */
  instanceConfig: InstanceConfig | undefined;

  /**
   * <p>Algorithm-specific parameters used by an Amazon Braket job that influence the quality of
   *          the training job. The values are set with a string of JSON key:value pairs, where the key
   *          is the name of the hyperparameter and the value is the value of th hyperparameter.</p>
   * @public
   */
  hyperParameters?: Record<string, string> | undefined;

  /**
   * <p>The quantum processing unit (QPU) or simulator used to create an Amazon Braket
   *          job.</p>
   * @public
   */
  deviceConfig: DeviceConfig | undefined;

  /**
   * <p>A tag object that consists of a key and an optional value, used to manage metadata for
   *          Amazon Braket resources.</p>
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
   * <p>The ARN of the Amazon Braket job created.</p>
   * @public
   */
  jobArn: string | undefined;
}

/**
 * <p>The specified device is currently offline.</p>
 * @public
 */
export class DeviceOfflineException extends __BaseException {
  readonly name: "DeviceOfflineException" = "DeviceOfflineException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeviceOfflineException, __BaseException>) {
    super({
      name: "DeviceOfflineException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeviceOfflineException.prototype);
  }
}

/**
 * <p>The specified device has been retired.</p>
 * @public
 */
export class DeviceRetiredException extends __BaseException {
  readonly name: "DeviceRetiredException" = "DeviceRetiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeviceRetiredException, __BaseException>) {
    super({
      name: "DeviceRetiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeviceRetiredException.prototype);
  }
}

/**
 * <p>The request failed because a service quota is exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
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
  }
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
   * <p>The ARN of the job to retrieve.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>A list of attributes to return information for.</p>
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
 * <p>Details about the type and time events occurred related to the Amazon Braket job.</p>
 * @public
 */
export interface JobEventDetails {
  /**
   * <p>The type of event that occurred related to the Amazon Braket job.</p>
   * @public
   */
  eventType?: JobEventType | undefined;

  /**
   * <p>The type of event that occurred related to the Amazon Braket job.</p>
   * @public
   */
  timeOfEvent?: Date | undefined;

  /**
   * <p>A message describing the event that occurred related to the Amazon Braket job.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>Information about the queue for a specified job.</p>
 * @public
 */
export interface HybridJobQueueInfo {
  /**
   * <p>The name of the queue.</p>
   * @public
   */
  queue: QueueName | undefined;

  /**
   * <p>Current position of the job in the jobs queue.</p>
   * @public
   */
  position: string | undefined;

  /**
   * <p>Optional. Provides more information about the queue position. For example,
   *          if the job is complete and no longer in the queue, the message field contains
   *          that information.</p>
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
   * <p>The status of the Amazon Braket job.</p>
   * @public
   */
  status: JobPrimaryStatus | undefined;

  /**
   * <p>The ARN of the Amazon Braket job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon Braket can assume to perform
   *          tasks on behalf of a user. It can access user resources, run an Amazon Braket job container
   *          on behalf of user, and output resources to the s3 buckets of a user.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A description of the reason why an Amazon Braket job failed, if it failed.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The name of the Amazon Braket job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>Algorithm-specific parameters used by an Amazon Braket job that influence the quality of
   *          the traiing job. The values are set with a string of JSON key:value pairs, where the key is
   *          the name of the hyperparameter and the value is the value of th hyperparameter.</p>
   * @public
   */
  hyperParameters?: Record<string, string> | undefined;

  /**
   * <p>A list of parameters that specify the name and type of input data and where it is
   *          located.</p>
   * @public
   */
  inputDataConfig?: InputFileConfig[] | undefined;

  /**
   * <p>The path to the S3 location where job artifacts are stored and the encryption key used
   *          to store them there.</p>
   * @public
   */
  outputDataConfig: JobOutputDataConfig | undefined;

  /**
   * <p>The user-defined criteria that specifies when to stop a job running.</p>
   * @public
   */
  stoppingCondition?: JobStoppingCondition | undefined;

  /**
   * <p>Information about the output locations for job checkpoint data.</p>
   * @public
   */
  checkpointConfig?: JobCheckpointConfig | undefined;

  /**
   * <p>Definition of the Amazon Braket job created. Specifies the container image the job uses,
   *          information about the Python scripts used for entry and training, and the user-defined
   *          metrics used to evaluation the job.</p>
   * @public
   */
  algorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * <p>The resource instances to use while running the hybrid job on Amazon Braket.</p>
   * @public
   */
  instanceConfig: InstanceConfig | undefined;

  /**
   * <p>The date and time that the Amazon Braket job was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time that the Amazon Braket job was started.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The date and time that the Amazon Braket job ended.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The billable time the Amazon Braket job used to complete.</p>
   * @public
   */
  billableDuration?: number | undefined;

  /**
   * <p>The quantum processing unit (QPU) or simulator used to run the Amazon Braket job.</p>
   * @public
   */
  deviceConfig?: DeviceConfig | undefined;

  /**
   * <p>Details about the type and time events occurred related to the Amazon Braket job.</p>
   * @public
   */
  events?: JobEventDetails[] | undefined;

  /**
   * <p>A tag object that consists of a key and an optional value, used to manage metadata for
   *          Amazon Braket resources.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Queue information for the requested job. Only returned if
   *          <code>QueueInfo</code> is specified in the <code>additionalAttributeNames"</code>
   *          field in the <code>GetJob</code> API request.</p>
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
 * <p>A filter used to search for Amazon Braket jobs.</p>
 * @public
 */
export interface SearchJobsFilter {
  /**
   * <p>The name to use for the jobs filter.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The values to use for the jobs filter.</p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>An operator to use for the jobs filter.</p>
   * @public
   */
  operator: SearchJobsFilterOperator | undefined;
}

/**
 * @public
 */
export interface SearchJobsRequest {
  /**
   * <p>A token used for pagination of results returned in the response. Use the token returned
   *          from the previous request to continue results where the previous request ended.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The filter values to use when searching for a job.</p>
   * @public
   */
  filters: SearchJobsFilter[] | undefined;
}

/**
 * <p>Provides summary information about an Amazon Braket job.</p>
 * @public
 */
export interface JobSummary {
  /**
   * <p>The status of the Amazon Braket job.</p>
   * @public
   */
  status: JobPrimaryStatus | undefined;

  /**
   * <p>The ARN of the Amazon Braket job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>The name of the Amazon Braket job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>Provides summary information about the primary device used by an Amazon Braket
   *          job.</p>
   * @public
   */
  device: string | undefined;

  /**
   * <p>The date and time that the Amazon Braket job was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time that the Amazon Braket job was started.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The date and time that the Amazon Braket job ended.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>A tag object that consists of a key and an optional value, used to manage metadata for
   *          Amazon Braket resources.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchJobsResponse {
  /**
   * <p>An array of <code>JobSummary</code> objects for devices that match the specified filter
   *          values.</p>
   * @public
   */
  jobs: JobSummary[] | undefined;

  /**
   * <p>A token used for pagination of results, or <code>null</code> if there are no additional
   *          results. Use the token value in a subsequent request to continue results where the previous
   *          request ended.</p>
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
   * <p>The ARN of the task to cancel.</p>
   * @public
   */
  quantumTaskArn: string | undefined;

  /**
   * <p>The client token associated with the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelQuantumTaskResponse {
  /**
   * <p>The ARN of the task.</p>
   * @public
   */
  quantumTaskArn: string | undefined;

  /**
   * <p>The status of the cancellation request.</p>
   * @public
   */
  cancellationStatus: CancellationStatus | undefined;
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
   * <p>The ARN of the device to run the task on.</p>
   * @public
   */
  deviceArn: string | undefined;

  /**
   * <p>The parameters for the device to run the task on.</p>
   * @public
   */
  deviceParameters?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * <p>The number of shots to use for the task.</p>
   * @public
   */
  shots: number | undefined;

  /**
   * <p>The S3 bucket to store task result files in.</p>
   * @public
   */
  outputS3Bucket: string | undefined;

  /**
   * <p>The key prefix for the location in the S3 bucket to store task results in.</p>
   * @public
   */
  outputS3KeyPrefix: string | undefined;

  /**
   * <p>The action associated with the task.</p>
   * @public
   */
  action: __AutomaticJsonStringConversion | string | undefined;

  /**
   * <p>Tags to be added to the quantum task you're creating.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The token for an Amazon Braket job that associates it with the quantum task.</p>
   * @public
   */
  jobToken?: string | undefined;

  /**
   * <p>The list of Amazon Braket resources associated with the quantum task.</p>
   * @public
   */
  associations?: Association[] | undefined;
}

/**
 * @public
 */
export interface CreateQuantumTaskResponse {
  /**
   * <p>The ARN of the task created by the request.</p>
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
   * <p>The ARN of the task to retrieve.</p>
   * @public
   */
  quantumTaskArn: string | undefined;

  /**
   * <p>A list of attributes to return information for.</p>
   * @public
   */
  additionalAttributeNames?: QuantumTaskAdditionalAttributeName[] | undefined;
}

/**
 * <p>Information about the queue for the specified quantum task.</p>
 * @public
 */
export interface QuantumTaskQueueInfo {
  /**
   * <p>The name of the queue. </p>
   * @public
   */
  queue: QueueName | undefined;

  /**
   * <p>Current position of the task in the quantum tasks queue.</p>
   * @public
   */
  position: string | undefined;

  /**
   * <p>Optional. Specifies the priority of the queue. Quantum tasks in a priority queue
   *          are processed before the tasks in a normal queue.</p>
   * @public
   */
  queuePriority?: QueuePriority | undefined;

  /**
   * <p>Optional. Provides more information about the queue position. For example,
   *          if the task is complete and no longer in the queue, the message field contains
   *          that information.</p>
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
   * <p>The ARN of the task.</p>
   * @public
   */
  quantumTaskArn: string | undefined;

  /**
   * <p>The status of the task.</p>
   * @public
   */
  status: QuantumTaskStatus | undefined;

  /**
   * <p>The reason that a task failed.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The ARN of the device the task was run on.</p>
   * @public
   */
  deviceArn: string | undefined;

  /**
   * <p>The parameters for the device on which the task ran.</p>
   * @public
   */
  deviceParameters: __AutomaticJsonStringConversion | string | undefined;

  /**
   * <p>The number of shots used in the task.</p>
   * @public
   */
  shots: number | undefined;

  /**
   * <p>The S3 bucket where task results are stored.</p>
   * @public
   */
  outputS3Bucket: string | undefined;

  /**
   * <p>The folder in the S3 bucket where task results are stored.</p>
   * @public
   */
  outputS3Directory: string | undefined;

  /**
   * <p>The time at which the task was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the task ended.</p>
   * @public
   */
  endedAt?: Date | undefined;

  /**
   * <p>The tags that belong to this task.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The ARN of the Amazon Braket job associated with the quantum task.</p>
   * @public
   */
  jobArn?: string | undefined;

  /**
   * <p>Queue information for the requested quantum task. Only returned if
   *          <code>QueueInfo</code> is specified in the <code>additionalAttributeNames"</code>
   *          field in the <code>GetQuantumTask</code> API request.</p>
   * @public
   */
  queueInfo?: QuantumTaskQueueInfo | undefined;

  /**
   * <p>The list of Amazon Braket resources associated with the quantum task.</p>
   * @public
   */
  associations?: Association[] | undefined;
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
 * <p>A filter to use to search for tasks.</p>
 * @public
 */
export interface SearchQuantumTasksFilter {
  /**
   * <p>The name of the device used for the task.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The values to use for the filter.</p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>An operator to use in the filter.</p>
   * @public
   */
  operator: SearchQuantumTasksFilterOperator | undefined;
}

/**
 * @public
 */
export interface SearchQuantumTasksRequest {
  /**
   * <p>A token used for pagination of results returned in the response. Use the token returned
   *          from the previous request continue results where the previous request ended.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Array of <code>SearchQuantumTasksFilter</code> objects.</p>
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
   * <p>The ARN of the task.</p>
   * @public
   */
  quantumTaskArn: string | undefined;

  /**
   * <p>The status of the task.</p>
   * @public
   */
  status: QuantumTaskStatus | undefined;

  /**
   * <p>The ARN of the device the task ran on.</p>
   * @public
   */
  deviceArn: string | undefined;

  /**
   * <p>The shots used for the task.</p>
   * @public
   */
  shots: number | undefined;

  /**
   * <p>The S3 bucket where the task result file is stored..</p>
   * @public
   */
  outputS3Bucket: string | undefined;

  /**
   * <p>The folder in the S3 bucket where the task result file is stored.</p>
   * @public
   */
  outputS3Directory: string | undefined;

  /**
   * <p>The time at which the task was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the task finished.</p>
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
   * <p>An array of <code>QuantumTaskSummary</code> objects for tasks that match the specified
   *          filters.</p>
   * @public
   */
  quantumTasks: QuantumTaskSummary[] | undefined;

  /**
   * <p>A token used for pagination of results, or null if there are no additional results. Use
   *          the token value in a subsequent request to continue results where the previous request
   *          ended.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>Specify the <code>resourceArn</code> of the resource to which a tag will be
   *          added.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Specify the tags to add to the resource.</p>
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
   * <p>Specify the <code>resourceArn</code> for the resource from which to remove the
   *          tags.</p>
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
