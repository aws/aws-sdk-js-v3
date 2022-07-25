// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@aws-sdk/smithy-client";

import { BraketServiceException as __BaseException } from "./BraketServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
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
 */
export interface ContainerImage {
  /**
   * <p>The URI locating the container image.</p>
   */
  uri: string | undefined;
}

export enum CompressionType {
  GZIP = "GZIP",
  NONE = "NONE",
}

/**
 * <p>Contains information about the Python scripts used for entry and by an Amazon Braket
 *          job.</p>
 */
export interface ScriptModeConfig {
  /**
   * <p>The path to the Python script that serves as the entry point for an Amazon Braket
   *          job.</p>
   */
  entryPoint: string | undefined;

  /**
   * <p>The URI that specifies the S3 path to the Python script module that contains the
   *          training script used by an Amazon Braket job.</p>
   */
  s3Uri: string | undefined;

  /**
   * <p>The type of compression used by the Python scripts for an Amazon Braket job.</p>
   */
  compressionType?: CompressionType | string;
}

/**
 * <p>Defines the Amazon Braket job to be created. Specifies the container image the job uses
 *          and the paths to the Python scripts used for entry and training.</p>
 */
export interface AlgorithmSpecification {
  /**
   * <p>Configures the paths to the Python scripts used for entry and training.</p>
   */
  scriptModeConfig?: ScriptModeConfig;

  /**
   * <p>The container image used to create an Amazon Braket job.</p>
   */
  containerImage?: ContainerImage;
}

export interface GetDeviceRequest {
  /**
   * <p>The ARN of the device to retrieve.</p>
   */
  deviceArn: string | undefined;
}

export enum DeviceStatus {
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE",
  RETIRED = "RETIRED",
}

export enum DeviceType {
  QPU = "QPU",
  SIMULATOR = "SIMULATOR",
}

export interface GetDeviceResponse {
  /**
   * <p>The ARN of the device.</p>
   */
  deviceArn: string | undefined;

  /**
   * <p>The name of the device.</p>
   */
  deviceName: string | undefined;

  /**
   * <p>The name of the partner company for the device.</p>
   */
  providerName: string | undefined;

  /**
   * <p>The type of the device.</p>
   */
  deviceType: DeviceType | string | undefined;

  /**
   * <p>The status of the device.</p>
   */
  deviceStatus: DeviceStatus | string | undefined;

  /**
   * <p>Details about the capabilities of the device.</p>
   */
  deviceCapabilities: __LazyJsonString | string | undefined;
}

/**
 * <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
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
 */
export interface SearchDevicesFilter {
  /**
   * <p>The name to use to filter results.</p>
   */
  name: string | undefined;

  /**
   * <p>The values to use to filter results.</p>
   */
  values: string[] | undefined;
}

export interface SearchDevicesRequest {
  /**
   * <p>A token used for pagination of results returned in the response. Use the token returned
   *          from the previous request continue results where the previous request ended.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The filter values to use to search for a device.</p>
   */
  filters: SearchDevicesFilter[] | undefined;
}

/**
 * <p>Includes information about the device.</p>
 */
export interface DeviceSummary {
  /**
   * <p>The ARN of the device.</p>
   */
  deviceArn: string | undefined;

  /**
   * <p>The name of the device.</p>
   */
  deviceName: string | undefined;

  /**
   * <p>The provider of the device.</p>
   */
  providerName: string | undefined;

  /**
   * <p>The type of the device.</p>
   */
  deviceType: DeviceType | string | undefined;

  /**
   * <p>The status of the device.</p>
   */
  deviceStatus: DeviceStatus | string | undefined;
}

export interface SearchDevicesResponse {
  /**
   * <p>An array of <code>DeviceSummary</code> objects for devices that match the specified
   *          filter values.</p>
   */
  devices: DeviceSummary[] | undefined;

  /**
   * <p>A token used for pagination of results, or null if there are no additional results. Use
   *          the token value in a subsequent request to continue results where the previous request
   *          ended.</p>
   */
  nextToken?: string;
}

export interface CancelJobRequest {
  /**
   * <p>The ARN of the Amazon Braket job to cancel.</p>
   */
  jobArn: string | undefined;
}

export enum CancellationStatus {
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
}

export interface CancelJobResponse {
  /**
   * <p>The ARN of the Amazon Braket job.</p>
   */
  jobArn: string | undefined;

  /**
   * <p>The status of the job cancellation request.</p>
   */
  cancellationStatus: CancellationStatus | string | undefined;
}

/**
 * <p>An error occurred due to a conflict.</p>
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
 */
export interface JobCheckpointConfig {
  /**
   * <p>(Optional) The local directory where checkpoints are written. The default directory is
   *             <code>/opt/braket/checkpoints/</code>.</p>
   */
  localPath?: string;

  /**
   * <p>Identifies the S3 path where you want Amazon Braket to store checkpoints. For example,
   *             <code>s3://bucket-name/key-name-prefix</code>.</p>
   */
  s3Uri: string | undefined;
}

/**
 * <p>Configures the quantum processing units (QPUs) or simulator used to create and run an
 *          Amazon Braket job.</p>
 */
export interface DeviceConfig {
  /**
   * <p>The primary quantum processing unit (QPU) or simulator used to create and run an Amazon
   *          Braket job.</p>
   */
  device: string | undefined;
}

/**
 * <p>Information about the data stored in Amazon S3 used by the Amazon Braket job.</p>
 */
export interface S3DataSource {
  /**
   * <p>Depending on the value specified for the <code>S3DataType</code>, identifies either a
   *          key name prefix or a manifest that locates the S3 data source.</p>
   */
  s3Uri: string | undefined;
}

/**
 * <p>Information about the source of the data used by the Amazon Braket job.</p>
 */
export interface DataSource {
  /**
   * <p>Information about the data stored in Amazon S3 used by the Amazon Braket job.</p>
   */
  s3DataSource: S3DataSource | undefined;
}

/**
 * <p>A list of parameters that specify the input channels, type of input data, and where it
 *          is located.</p>
 */
export interface InputFileConfig {
  /**
   * <p>A named input source that an Amazon Braket job can consume.</p>
   */
  channelName: string | undefined;

  /**
   * <p>The MIME type of the data.</p>
   */
  contentType?: string;

  /**
   * <p>The location of the channel data.</p>
   */
  dataSource: DataSource | undefined;
}

export enum _InstanceType {
  ML_C4_2XLARGE = "ml.c4.2xlarge",
  ML_C4_4XLARGE = "ml.c4.4xlarge",
  ML_C4_8XLARGE = "ml.c4.8xlarge",
  ML_C4_XLARGE = "ml.c4.xlarge",
  ML_C5N_18XLARGE = "ml.c5n.18xlarge",
  ML_C5N_2XLARGE = "ml.c5n.2xlarge",
  ML_C5N_4XLARGE = "ml.c5n.4xlarge",
  ML_C5N_9XLARGE = "ml.c5n.9xlarge",
  ML_C5N_XLARGE = "ml.c5n.xlarge",
  ML_C5_18XLARGE = "ml.c5.18xlarge",
  ML_C5_2XLARGE = "ml.c5.2xlarge",
  ML_C5_4XLARGE = "ml.c5.4xlarge",
  ML_C5_9XLARGE = "ml.c5.9xlarge",
  ML_C5_XLARGE = "ml.c5.xlarge",
  ML_G4DN_12XLARGE = "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE = "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE = "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE = "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE = "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE = "ml.g4dn.xlarge",
  ML_M4_10XLARGE = "ml.m4.10xlarge",
  ML_M4_16XLARGE = "ml.m4.16xlarge",
  ML_M4_2XLARGE = "ml.m4.2xlarge",
  ML_M4_4XLARGE = "ml.m4.4xlarge",
  ML_M4_XLARGE = "ml.m4.xlarge",
  ML_M5_12XLARGE = "ml.m5.12xlarge",
  ML_M5_24XLARGE = "ml.m5.24xlarge",
  ML_M5_2XLARGE = "ml.m5.2xlarge",
  ML_M5_4XLARGE = "ml.m5.4xlarge",
  ML_M5_LARGE = "ml.m5.large",
  ML_M5_XLARGE = "ml.m5.xlarge",
  ML_P2_16XLARGE = "ml.p2.16xlarge",
  ML_P2_8XLARGE = "ml.p2.8xlarge",
  ML_P2_XLARGE = "ml.p2.xlarge",
  ML_P3DN_24XLARGE = "ml.p3dn.24xlarge",
  ML_P3_16XLARGE = "ml.p3.16xlarge",
  ML_P3_2XLARGE = "ml.p3.2xlarge",
  ML_P3_8XLARGE = "ml.p3.8xlarge",
  ML_P4D_24XLARGE = "ml.p4d.24xlarge",
}

/**
 * <p>Configures the resource instances to use while running the Amazon Braket hybrid job on
 *          Amazon Braket.</p>
 */
export interface InstanceConfig {
  /**
   * <p>Configures the type resource instances to use while running an Amazon Braket hybrid
   *          job.</p>
   */
  instanceType: _InstanceType | string | undefined;

  /**
   * <p>The size of the storage volume, in GB, that user wants to provision.</p>
   */
  volumeSizeInGb: number | undefined;

  /**
   * <p>Configures the number of resource instances to use while running an Amazon Braket job on
   *          Amazon Braket. The default value is 1.</p>
   */
  instanceCount?: number;
}

/**
 * <p>Specifies the path to the S3 location where you want to store job artifacts and the
 *          encryption key used to store them.</p>
 */
export interface JobOutputDataConfig {
  /**
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon Braket uses to encrypt the job
   *          training artifacts at rest using Amazon S3 server-side encryption.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>Identifies the S3 path where you want Amazon Braket to store the job training artifacts.
   *          For example, <code>s3://bucket-name/key-name-prefix</code>.</p>
   */
  s3Path: string | undefined;
}

/**
 * <p>Specifies limits for how long an Amazon Braket job can run. </p>
 */
export interface JobStoppingCondition {
  /**
   * <p>The maximum length of time, in seconds, that an Amazon Braket job can run.</p>
   */
  maxRuntimeInSeconds?: number;
}

export interface CreateJobRequest {
  /**
   * <p>A unique token that guarantees that the call to this API is idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p>Definition of the Amazon Braket job to be created. Specifies the container image the job
   *          uses and information about the Python scripts used for entry and training.</p>
   */
  algorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * <p>A list of parameters that specify the name and type of input data and where it is
   *          located.</p>
   */
  inputDataConfig?: InputFileConfig[];

  /**
   * <p>The path to the S3 location where you want to store job artifacts and the encryption key
   *          used to store them.</p>
   */
  outputDataConfig: JobOutputDataConfig | undefined;

  /**
   * <p>Information about the output locations for job checkpoint data.</p>
   */
  checkpointConfig?: JobCheckpointConfig;

  /**
   * <p>The name of the Amazon Braket job.</p>
   */
  jobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon Braket can assume to perform
   *          tasks on behalf of a user. It can access user resources, run an Amazon Braket job container
   *          on behalf of user, and output resources to the users' s3 buckets.</p>
   */
  roleArn: string | undefined;

  /**
   * <p> The user-defined criteria that specifies when a job stops running.</p>
   */
  stoppingCondition?: JobStoppingCondition;

  /**
   * <p>Configuration of the resource instances to use while running the hybrid job on Amazon
   *          Braket.</p>
   */
  instanceConfig: InstanceConfig | undefined;

  /**
   * <p>Algorithm-specific parameters used by an Amazon Braket job that influence the quality of
   *          the training job. The values are set with a string of JSON key:value pairs, where the key
   *          is the name of the hyperparameter and the value is the value of th hyperparameter.</p>
   */
  hyperParameters?: Record<string, string>;

  /**
   * <p>The quantum processing unit (QPU) or simulator used to create an Amazon Braket
   *          job.</p>
   */
  deviceConfig: DeviceConfig | undefined;

  /**
   * <p>A tag object that consists of a key and an optional value, used to manage metadata for
   *          Amazon Braket resources.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateJobResponse {
  /**
   * <p>The ARN of the Amazon Braket job created.</p>
   */
  jobArn: string | undefined;
}

/**
 * <p>The specified device has been retired.</p>
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

export interface GetJobRequest {
  /**
   * <p>The ARN of the job to retrieve.</p>
   */
  jobArn: string | undefined;
}

export enum JobEventType {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  DEPRIORITIZED_DUE_TO_INACTIVITY = "DEPRIORITIZED_DUE_TO_INACTIVITY",
  DOWNLOADING_DATA = "DOWNLOADING_DATA",
  FAILED = "FAILED",
  MAX_RUNTIME_EXCEEDED = "MAX_RUNTIME_EXCEEDED",
  QUEUED_FOR_EXECUTION = "QUEUED_FOR_EXECUTION",
  RUNNING = "RUNNING",
  STARTING_INSTANCE = "STARTING_INSTANCE",
  UPLOADING_RESULTS = "UPLOADING_RESULTS",
  WAITING_FOR_PRIORITY = "WAITING_FOR_PRIORITY",
}

/**
 * <p>Details about the type and time events occurred related to the Amazon Braket job.</p>
 */
export interface JobEventDetails {
  /**
   * <p>The type of event that occurred related to the Amazon Braket job.</p>
   */
  eventType?: JobEventType | string;

  /**
   * <p>TThe type of event that occurred related to the Amazon Braket job.</p>
   */
  timeOfEvent?: Date;

  /**
   * <p>A message describing the event that occurred related to the Amazon Braket job.</p>
   */
  message?: string;
}

export enum JobPrimaryStatus {
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  QUEUED = "QUEUED",
  RUNNING = "RUNNING",
}

export interface GetJobResponse {
  /**
   * <p>The status of the Amazon Braket job.</p>
   */
  status: JobPrimaryStatus | string | undefined;

  /**
   * <p>The ARN of the Amazon Braket job.</p>
   */
  jobArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon Braket can assume to perform
   *          tasks on behalf of a user. It can access user resources, run an Amazon Braket job container
   *          on behalf of user, and output resources to the s3 buckets of a user.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>A description of the reason why an Amazon Braket job failed, if it failed.</p>
   */
  failureReason?: string;

  /**
   * <p>The name of the Amazon Braket job.</p>
   */
  jobName: string | undefined;

  /**
   * <p>Algorithm-specific parameters used by an Amazon Braket job that influence the quality of
   *          the traiing job. The values are set with a string of JSON key:value pairs, where the key is
   *          the name of the hyperparameter and the value is the value of th hyperparameter.</p>
   */
  hyperParameters?: Record<string, string>;

  /**
   * <p>A list of parameters that specify the name and type of input data and where it is
   *          located.</p>
   */
  inputDataConfig?: InputFileConfig[];

  /**
   * <p>The path to the S3 location where job artifacts are stored and the encryption key used
   *          to store them there.</p>
   */
  outputDataConfig: JobOutputDataConfig | undefined;

  /**
   * <p>The user-defined criteria that specifies when to stop a job running.</p>
   */
  stoppingCondition?: JobStoppingCondition;

  /**
   * <p>Information about the output locations for job checkpoint data.</p>
   */
  checkpointConfig?: JobCheckpointConfig;

  /**
   * <p>Definition of the Amazon Braket job created. Specifies the container image the job uses,
   *          information about the Python scripts used for entry and training, and the user-defined
   *          metrics used to evaluation the job.</p>
   */
  algorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * <p>The resource instances to use while running the hybrid job on Amazon Braket.</p>
   */
  instanceConfig: InstanceConfig | undefined;

  /**
   * <p>The date and time that the Amazon Braket job was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time that the Amazon Braket job was started.</p>
   */
  startedAt?: Date;

  /**
   * <p>The date and time that the Amazon Braket job ended.</p>
   */
  endedAt?: Date;

  /**
   * <p>The billable time the Amazon Braket job used to complete.</p>
   */
  billableDuration?: number;

  /**
   * <p>The quantum processing unit (QPU) or simulator used to run the Amazon Braket job.</p>
   */
  deviceConfig?: DeviceConfig;

  /**
   * <p>Details about the type and time events occurred related to the Amazon Braket job.</p>
   */
  events?: JobEventDetails[];

  /**
   * <p>A tag object that consists of a key and an optional value, used to manage metadata for
   *          Amazon Braket resources.</p>
   */
  tags?: Record<string, string>;
}

export enum SearchJobsFilterOperator {
  BETWEEN = "BETWEEN",
  CONTAINS = "CONTAINS",
  EQUAL = "EQUAL",
  GT = "GT",
  GTE = "GTE",
  LT = "LT",
  LTE = "LTE",
}

/**
 * <p>A filter used to search for Amazon Braket jobs.</p>
 */
export interface SearchJobsFilter {
  /**
   * <p>The name to use for the jobs filter.</p>
   */
  name: string | undefined;

  /**
   * <p>The values to use for the jobs filter.</p>
   */
  values: string[] | undefined;

  /**
   * <p>An operator to use for the jobs filter.</p>
   */
  operator: SearchJobsFilterOperator | string | undefined;
}

export interface SearchJobsRequest {
  /**
   * <p>A token used for pagination of results returned in the response. Use the token returned
   *          from the previous request to continue results where the previous request ended.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The filter values to use when searching for a job.</p>
   */
  filters: SearchJobsFilter[] | undefined;
}

/**
 * <p>Provides summary information about an Amazon Braket job.</p>
 */
export interface JobSummary {
  /**
   * <p>The status of the Amazon Braket job.</p>
   */
  status: JobPrimaryStatus | string | undefined;

  /**
   * <p>The ARN of the Amazon Braket job.</p>
   */
  jobArn: string | undefined;

  /**
   * <p>The name of the Amazon Braket job.</p>
   */
  jobName: string | undefined;

  /**
   * <p>Provides summary information about the primary device used by an Amazon Braket
   *          job.</p>
   */
  device: string | undefined;

  /**
   * <p>The date and time that the Amazon Braket job was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time that the Amazon Braket job was started.</p>
   */
  startedAt?: Date;

  /**
   * <p>The date and time that the Amazon Braket job ended.</p>
   */
  endedAt?: Date;

  /**
   * <p>A tag object that consists of a key and an optional value, used to manage metadata for
   *          Amazon Braket resources.</p>
   */
  tags?: Record<string, string>;
}

export interface SearchJobsResponse {
  /**
   * <p>An array of <code>JobSummary</code> objects for devices that match the specified filter
   *          values.</p>
   */
  jobs: JobSummary[] | undefined;

  /**
   * <p>A token used for pagination of results, or <code>null</code> if there are no additional
   *          results. Use the token value in a subsequent request to continue results where the previous
   *          request ended.</p>
   */
  nextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>Specify the <code>resourceArn</code> for the resource whose tags to display.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Displays the key, value pairs of tags associated with this resource.</p>
   */
  tags?: Record<string, string>;
}

export interface CancelQuantumTaskRequest {
  /**
   * <p>The ARN of the task to cancel.</p>
   */
  quantumTaskArn: string | undefined;

  /**
   * <p>The client token associated with the request.</p>
   */
  clientToken?: string;
}

export interface CancelQuantumTaskResponse {
  /**
   * <p>The ARN of the task.</p>
   */
  quantumTaskArn: string | undefined;

  /**
   * <p>The status of the cancellation request.</p>
   */
  cancellationStatus: CancellationStatus | string | undefined;
}

export interface CreateQuantumTaskRequest {
  /**
   * <p>The client token associated with the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The ARN of the device to run the task on.</p>
   */
  deviceArn: string | undefined;

  /**
   * <p>The parameters for the device to run the task on.</p>
   */
  deviceParameters?: __LazyJsonString | string;

  /**
   * <p>The number of shots to use for the task.</p>
   */
  shots: number | undefined;

  /**
   * <p>The S3 bucket to store task result files in.</p>
   */
  outputS3Bucket: string | undefined;

  /**
   * <p>The key prefix for the location in the S3 bucket to store task results in.</p>
   */
  outputS3KeyPrefix: string | undefined;

  /**
   * <p>The action associated with the task.</p>
   */
  action: __LazyJsonString | string | undefined;

  /**
   * <p>Tags to be added to the quantum task you're creating.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The token for an Amazon Braket job that associates it with the quantum task.</p>
   */
  jobToken?: string;
}

export interface CreateQuantumTaskResponse {
  /**
   * <p>The ARN of the task created by the request.</p>
   */
  quantumTaskArn: string | undefined;
}

/**
 * <p>The specified device is currently offline.</p>
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

export interface GetQuantumTaskRequest {
  /**
   * <p>the ARN of the task to retrieve.</p>
   */
  quantumTaskArn: string | undefined;
}

export enum QuantumTaskStatus {
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
  COMPLETED = "COMPLETED",
  CREATED = "CREATED",
  FAILED = "FAILED",
  QUEUED = "QUEUED",
  RUNNING = "RUNNING",
}

export interface GetQuantumTaskResponse {
  /**
   * <p>The ARN of the task.</p>
   */
  quantumTaskArn: string | undefined;

  /**
   * <p>The status of the task.</p>
   */
  status: QuantumTaskStatus | string | undefined;

  /**
   * <p>The reason that a task failed.</p>
   */
  failureReason?: string;

  /**
   * <p>The ARN of the device the task was run on.</p>
   */
  deviceArn: string | undefined;

  /**
   * <p>The parameters for the device on which the task ran.</p>
   */
  deviceParameters: __LazyJsonString | string | undefined;

  /**
   * <p>The number of shots used in the task.</p>
   */
  shots: number | undefined;

  /**
   * <p>The S3 bucket where task results are stored.</p>
   */
  outputS3Bucket: string | undefined;

  /**
   * <p>The folder in the S3 bucket where task results are stored.</p>
   */
  outputS3Directory: string | undefined;

  /**
   * <p>The time at which the task was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the task ended.</p>
   */
  endedAt?: Date;

  /**
   * <p>The tags that belong to this task.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The ARN of the Amazon Braket job associated with the quantum task.</p>
   */
  jobArn?: string;
}

export enum SearchQuantumTasksFilterOperator {
  BETWEEN = "BETWEEN",
  EQUAL = "EQUAL",
  GT = "GT",
  GTE = "GTE",
  LT = "LT",
  LTE = "LTE",
}

/**
 * <p>A filter to use to search for tasks.</p>
 */
export interface SearchQuantumTasksFilter {
  /**
   * <p>The name of the device used for the task.</p>
   */
  name: string | undefined;

  /**
   * <p>The values to use for the filter.</p>
   */
  values: string[] | undefined;

  /**
   * <p>An operator to use in the filter.</p>
   */
  operator: SearchQuantumTasksFilterOperator | string | undefined;
}

export interface SearchQuantumTasksRequest {
  /**
   * <p>A token used for pagination of results returned in the response. Use the token returned
   *          from the previous request continue results where the previous request ended.</p>
   */
  nextToken?: string;

  /**
   * <p>Maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>Array of <code>SearchQuantumTasksFilter</code> objects.</p>
   */
  filters: SearchQuantumTasksFilter[] | undefined;
}

/**
 * <p>Includes information about a quantum task.</p>
 */
export interface QuantumTaskSummary {
  /**
   * <p>The ARN of the task.</p>
   */
  quantumTaskArn: string | undefined;

  /**
   * <p>The status of the task.</p>
   */
  status: QuantumTaskStatus | string | undefined;

  /**
   * <p>The ARN of the device the task ran on.</p>
   */
  deviceArn: string | undefined;

  /**
   * <p>The shots used for the task.</p>
   */
  shots: number | undefined;

  /**
   * <p>The S3 bucket where the task result file is stored..</p>
   */
  outputS3Bucket: string | undefined;

  /**
   * <p>The folder in the S3 bucket where the task result file is stored.</p>
   */
  outputS3Directory: string | undefined;

  /**
   * <p>The time at which the task was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the task finished.</p>
   */
  endedAt?: Date;

  /**
   * <p>Displays the key, value pairs of tags associated with this quantum task.</p>
   */
  tags?: Record<string, string>;
}

export interface SearchQuantumTasksResponse {
  /**
   * <p>An array of <code>QuantumTaskSummary</code> objects for tasks that match the specified
   *          filters.</p>
   */
  quantumTasks: QuantumTaskSummary[] | undefined;

  /**
   * <p>A token used for pagination of results, or null if there are no additional results. Use
   *          the token value in a subsequent request to continue results where the previous request
   *          ended.</p>
   */
  nextToken?: string;
}

export interface TagResourceRequest {
  /**
   * <p>Specify the <code>resourceArn</code> of the resource to which a tag will be
   *          added.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Specify the tags to add to the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>Specify the <code>resourceArn</code> for the resource from which to remove the
   *          tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Specify the keys for the tags to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
 * @internal
 */
export const ContainerImageFilterSensitiveLog = (obj: ContainerImage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScriptModeConfigFilterSensitiveLog = (obj: ScriptModeConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlgorithmSpecificationFilterSensitiveLog = (obj: AlgorithmSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeviceRequestFilterSensitiveLog = (obj: GetDeviceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeviceResponseFilterSensitiveLog = (obj: GetDeviceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchDevicesFilterFilterSensitiveLog = (obj: SearchDevicesFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchDevicesRequestFilterSensitiveLog = (obj: SearchDevicesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceSummaryFilterSensitiveLog = (obj: DeviceSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchDevicesResponseFilterSensitiveLog = (obj: SearchDevicesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelJobRequestFilterSensitiveLog = (obj: CancelJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelJobResponseFilterSensitiveLog = (obj: CancelJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobCheckpointConfigFilterSensitiveLog = (obj: JobCheckpointConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceConfigFilterSensitiveLog = (obj: DeviceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3DataSourceFilterSensitiveLog = (obj: S3DataSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSourceFilterSensitiveLog = (obj: DataSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputFileConfigFilterSensitiveLog = (obj: InputFileConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceConfigFilterSensitiveLog = (obj: InstanceConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobOutputDataConfigFilterSensitiveLog = (obj: JobOutputDataConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobStoppingConditionFilterSensitiveLog = (obj: JobStoppingCondition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateJobRequestFilterSensitiveLog = (obj: CreateJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateJobResponseFilterSensitiveLog = (obj: CreateJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetJobRequestFilterSensitiveLog = (obj: GetJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobEventDetailsFilterSensitiveLog = (obj: JobEventDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetJobResponseFilterSensitiveLog = (obj: GetJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchJobsFilterFilterSensitiveLog = (obj: SearchJobsFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchJobsRequestFilterSensitiveLog = (obj: SearchJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobSummaryFilterSensitiveLog = (obj: JobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchJobsResponseFilterSensitiveLog = (obj: SearchJobsResponse): any => ({
  ...obj,
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
});

/**
 * @internal
 */
export const CancelQuantumTaskRequestFilterSensitiveLog = (obj: CancelQuantumTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelQuantumTaskResponseFilterSensitiveLog = (obj: CancelQuantumTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateQuantumTaskRequestFilterSensitiveLog = (obj: CreateQuantumTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateQuantumTaskResponseFilterSensitiveLog = (obj: CreateQuantumTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetQuantumTaskRequestFilterSensitiveLog = (obj: GetQuantumTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetQuantumTaskResponseFilterSensitiveLog = (obj: GetQuantumTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchQuantumTasksFilterFilterSensitiveLog = (obj: SearchQuantumTasksFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchQuantumTasksRequestFilterSensitiveLog = (obj: SearchQuantumTasksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QuantumTaskSummaryFilterSensitiveLog = (obj: QuantumTaskSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchQuantumTasksResponseFilterSensitiveLog = (obj: SearchQuantumTasksResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
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
