// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@smithy/smithy-client";

import { BraketServiceException as __BaseException } from "./BraketServiceException";

/**
 * @public
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
 * @public
 * <p>The container image used to create an Amazon Braket job.</p>
 */
export interface ContainerImage {
  /**
   * @public
   * <p>The URI locating the container image.</p>
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
 * @public
 * <p>Contains information about the Python scripts used for entry and by an Amazon Braket
 *          job.</p>
 */
export interface ScriptModeConfig {
  /**
   * @public
   * <p>The path to the Python script that serves as the entry point for an Amazon Braket
   *          job.</p>
   */
  entryPoint: string | undefined;

  /**
   * @public
   * <p>The URI that specifies the S3 path to the Python script module that contains the
   *          training script used by an Amazon Braket job.</p>
   */
  s3Uri: string | undefined;

  /**
   * @public
   * <p>The type of compression used by the Python scripts for an Amazon Braket job.</p>
   */
  compressionType?: CompressionType | string;
}

/**
 * @public
 * <p>Defines the Amazon Braket job to be created. Specifies the container image the job uses
 *          and the paths to the Python scripts used for entry and training.</p>
 */
export interface AlgorithmSpecification {
  /**
   * @public
   * <p>Configures the paths to the Python scripts used for entry and training.</p>
   */
  scriptModeConfig?: ScriptModeConfig;

  /**
   * @public
   * <p>The container image used to create an Amazon Braket job.</p>
   */
  containerImage?: ContainerImage;
}

/**
 * @public
 */
export interface GetDeviceRequest {
  /**
   * @public
   * <p>The ARN of the device to retrieve.</p>
   */
  deviceArn: string | undefined;
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
   * @public
   * <p>The ARN of the device.</p>
   */
  deviceArn: string | undefined;

  /**
   * @public
   * <p>The name of the device.</p>
   */
  deviceName: string | undefined;

  /**
   * @public
   * <p>The name of the partner company for the device.</p>
   */
  providerName: string | undefined;

  /**
   * @public
   * <p>The type of the device.</p>
   */
  deviceType: DeviceType | string | undefined;

  /**
   * @public
   * <p>The status of the device.</p>
   */
  deviceStatus: DeviceStatus | string | undefined;

  /**
   * @public
   * <p>Details about the capabilities of the device.</p>
   */
  deviceCapabilities: __LazyJsonString | string | undefined;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 * <p>The filter to use for searching devices.</p>
 */
export interface SearchDevicesFilter {
  /**
   * @public
   * <p>The name to use to filter results.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The values to use to filter results.</p>
   */
  values: string[] | undefined;
}

/**
 * @public
 */
export interface SearchDevicesRequest {
  /**
   * @public
   * <p>A token used for pagination of results returned in the response. Use the token returned
   *          from the previous request continue results where the previous request ended.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The filter values to use to search for a device.</p>
   */
  filters: SearchDevicesFilter[] | undefined;
}

/**
 * @public
 * <p>Includes information about the device.</p>
 */
export interface DeviceSummary {
  /**
   * @public
   * <p>The ARN of the device.</p>
   */
  deviceArn: string | undefined;

  /**
   * @public
   * <p>The name of the device.</p>
   */
  deviceName: string | undefined;

  /**
   * @public
   * <p>The provider of the device.</p>
   */
  providerName: string | undefined;

  /**
   * @public
   * <p>The type of the device.</p>
   */
  deviceType: DeviceType | string | undefined;

  /**
   * @public
   * <p>The status of the device.</p>
   */
  deviceStatus: DeviceStatus | string | undefined;
}

/**
 * @public
 */
export interface SearchDevicesResponse {
  /**
   * @public
   * <p>An array of <code>DeviceSummary</code> objects for devices that match the specified
   *          filter values.</p>
   */
  devices: DeviceSummary[] | undefined;

  /**
   * @public
   * <p>A token used for pagination of results, or null if there are no additional results. Use
   *          the token value in a subsequent request to continue results where the previous request
   *          ended.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface CancelJobRequest {
  /**
   * @public
   * <p>The ARN of the Amazon Braket job to cancel.</p>
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
   * @public
   * <p>The ARN of the Amazon Braket job.</p>
   */
  jobArn: string | undefined;

  /**
   * @public
   * <p>The status of the job cancellation request.</p>
   */
  cancellationStatus: CancellationStatus | string | undefined;
}

/**
 * @public
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
 * @public
 * <p>Contains information about the output locations for job checkpoint data.</p>
 */
export interface JobCheckpointConfig {
  /**
   * @public
   * <p>(Optional) The local directory where checkpoints are written. The default directory is
   *             <code>/opt/braket/checkpoints/</code>.</p>
   */
  localPath?: string;

  /**
   * @public
   * <p>Identifies the S3 path where you want Amazon Braket to store checkpoints. For example,
   *             <code>s3://bucket-name/key-name-prefix</code>.</p>
   */
  s3Uri: string | undefined;
}

/**
 * @public
 * <p>Configures the quantum processing units (QPUs) or simulator used to create and run an
 *          Amazon Braket job.</p>
 */
export interface DeviceConfig {
  /**
   * @public
   * <p>The primary quantum processing unit (QPU) or simulator used to create and run an Amazon
   *          Braket job.</p>
   */
  device: string | undefined;
}

/**
 * @public
 * <p>Information about the data stored in Amazon S3 used by the Amazon Braket job.</p>
 */
export interface S3DataSource {
  /**
   * @public
   * <p>Depending on the value specified for the <code>S3DataType</code>, identifies either a
   *          key name prefix or a manifest that locates the S3 data source.</p>
   */
  s3Uri: string | undefined;
}

/**
 * @public
 * <p>Information about the source of the data used by the Amazon Braket job.</p>
 */
export interface DataSource {
  /**
   * @public
   * <p>Information about the data stored in Amazon S3 used by the Amazon Braket job.</p>
   */
  s3DataSource: S3DataSource | undefined;
}

/**
 * @public
 * <p>A list of parameters that specify the input channels, type of input data, and where it
 *          is located.</p>
 */
export interface InputFileConfig {
  /**
   * @public
   * <p>A named input source that an Amazon Braket job can consume.</p>
   */
  channelName: string | undefined;

  /**
   * @public
   * <p>The MIME type of the data.</p>
   */
  contentType?: string;

  /**
   * @public
   * <p>The location of the channel data.</p>
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
 * @public
 * <p>Configures the resource instances to use while running the Amazon Braket hybrid job on
 *          Amazon Braket.</p>
 */
export interface InstanceConfig {
  /**
   * @public
   * <p>Configures the type resource instances to use while running an Amazon Braket hybrid
   *          job.</p>
   */
  instanceType: _InstanceType | string | undefined;

  /**
   * @public
   * <p>The size of the storage volume, in GB, that user wants to provision.</p>
   */
  volumeSizeInGb: number | undefined;

  /**
   * @public
   * <p>Configures the number of resource instances to use while running an Amazon Braket job on
   *          Amazon Braket. The default value is 1.</p>
   */
  instanceCount?: number;
}

/**
 * @public
 * <p>Specifies the path to the S3 location where you want to store job artifacts and the
 *          encryption key used to store them.</p>
 */
export interface JobOutputDataConfig {
  /**
   * @public
   * <p>The AWS Key Management Service (AWS KMS) key that Amazon Braket uses to encrypt the job
   *          training artifacts at rest using Amazon S3 server-side encryption.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>Identifies the S3 path where you want Amazon Braket to store the job training artifacts.
   *          For example, <code>s3://bucket-name/key-name-prefix</code>.</p>
   */
  s3Path: string | undefined;
}

/**
 * @public
 * <p>Specifies limits for how long an Amazon Braket job can run. </p>
 */
export interface JobStoppingCondition {
  /**
   * @public
   * <p>The maximum length of time, in seconds, that an Amazon Braket job can run.</p>
   */
  maxRuntimeInSeconds?: number;
}

/**
 * @public
 */
export interface CreateJobRequest {
  /**
   * @public
   * <p>A unique token that guarantees that the call to this API is idempotent.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>Definition of the Amazon Braket job to be created. Specifies the container image the job
   *          uses and information about the Python scripts used for entry and training.</p>
   */
  algorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * @public
   * <p>A list of parameters that specify the name and type of input data and where it is
   *          located.</p>
   */
  inputDataConfig?: InputFileConfig[];

  /**
   * @public
   * <p>The path to the S3 location where you want to store job artifacts and the encryption key
   *          used to store them.</p>
   */
  outputDataConfig: JobOutputDataConfig | undefined;

  /**
   * @public
   * <p>Information about the output locations for job checkpoint data.</p>
   */
  checkpointConfig?: JobCheckpointConfig;

  /**
   * @public
   * <p>The name of the Amazon Braket job.</p>
   */
  jobName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon Braket can assume to perform
   *          tasks on behalf of a user. It can access user resources, run an Amazon Braket job container
   *          on behalf of user, and output resources to the users' s3 buckets.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p> The user-defined criteria that specifies when a job stops running.</p>
   */
  stoppingCondition?: JobStoppingCondition;

  /**
   * @public
   * <p>Configuration of the resource instances to use while running the hybrid job on Amazon
   *          Braket.</p>
   */
  instanceConfig: InstanceConfig | undefined;

  /**
   * @public
   * <p>Algorithm-specific parameters used by an Amazon Braket job that influence the quality of
   *          the training job. The values are set with a string of JSON key:value pairs, where the key
   *          is the name of the hyperparameter and the value is the value of th hyperparameter.</p>
   */
  hyperParameters?: Record<string, string>;

  /**
   * @public
   * <p>The quantum processing unit (QPU) or simulator used to create an Amazon Braket
   *          job.</p>
   */
  deviceConfig: DeviceConfig | undefined;

  /**
   * @public
   * <p>A tag object that consists of a key and an optional value, used to manage metadata for
   *          Amazon Braket resources.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateJobResponse {
  /**
   * @public
   * <p>The ARN of the Amazon Braket job created.</p>
   */
  jobArn: string | undefined;
}

/**
 * @public
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
 * @public
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

/**
 * @public
 */
export interface GetJobRequest {
  /**
   * @public
   * <p>The ARN of the job to retrieve.</p>
   */
  jobArn: string | undefined;
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
 * @public
 * <p>Details about the type and time events occurred related to the Amazon Braket job.</p>
 */
export interface JobEventDetails {
  /**
   * @public
   * <p>The type of event that occurred related to the Amazon Braket job.</p>
   */
  eventType?: JobEventType | string;

  /**
   * @public
   * <p>TThe type of event that occurred related to the Amazon Braket job.</p>
   */
  timeOfEvent?: Date;

  /**
   * @public
   * <p>A message describing the event that occurred related to the Amazon Braket job.</p>
   */
  message?: string;
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
   * @public
   * <p>The status of the Amazon Braket job.</p>
   */
  status: JobPrimaryStatus | string | undefined;

  /**
   * @public
   * <p>The ARN of the Amazon Braket job.</p>
   */
  jobArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon Braket can assume to perform
   *          tasks on behalf of a user. It can access user resources, run an Amazon Braket job container
   *          on behalf of user, and output resources to the s3 buckets of a user.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>A description of the reason why an Amazon Braket job failed, if it failed.</p>
   */
  failureReason?: string;

  /**
   * @public
   * <p>The name of the Amazon Braket job.</p>
   */
  jobName: string | undefined;

  /**
   * @public
   * <p>Algorithm-specific parameters used by an Amazon Braket job that influence the quality of
   *          the traiing job. The values are set with a string of JSON key:value pairs, where the key is
   *          the name of the hyperparameter and the value is the value of th hyperparameter.</p>
   */
  hyperParameters?: Record<string, string>;

  /**
   * @public
   * <p>A list of parameters that specify the name and type of input data and where it is
   *          located.</p>
   */
  inputDataConfig?: InputFileConfig[];

  /**
   * @public
   * <p>The path to the S3 location where job artifacts are stored and the encryption key used
   *          to store them there.</p>
   */
  outputDataConfig: JobOutputDataConfig | undefined;

  /**
   * @public
   * <p>The user-defined criteria that specifies when to stop a job running.</p>
   */
  stoppingCondition?: JobStoppingCondition;

  /**
   * @public
   * <p>Information about the output locations for job checkpoint data.</p>
   */
  checkpointConfig?: JobCheckpointConfig;

  /**
   * @public
   * <p>Definition of the Amazon Braket job created. Specifies the container image the job uses,
   *          information about the Python scripts used for entry and training, and the user-defined
   *          metrics used to evaluation the job.</p>
   */
  algorithmSpecification: AlgorithmSpecification | undefined;

  /**
   * @public
   * <p>The resource instances to use while running the hybrid job on Amazon Braket.</p>
   */
  instanceConfig: InstanceConfig | undefined;

  /**
   * @public
   * <p>The date and time that the Amazon Braket job was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The date and time that the Amazon Braket job was started.</p>
   */
  startedAt?: Date;

  /**
   * @public
   * <p>The date and time that the Amazon Braket job ended.</p>
   */
  endedAt?: Date;

  /**
   * @public
   * <p>The billable time the Amazon Braket job used to complete.</p>
   */
  billableDuration?: number;

  /**
   * @public
   * <p>The quantum processing unit (QPU) or simulator used to run the Amazon Braket job.</p>
   */
  deviceConfig?: DeviceConfig;

  /**
   * @public
   * <p>Details about the type and time events occurred related to the Amazon Braket job.</p>
   */
  events?: JobEventDetails[];

  /**
   * @public
   * <p>A tag object that consists of a key and an optional value, used to manage metadata for
   *          Amazon Braket resources.</p>
   */
  tags?: Record<string, string>;
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
 * @public
 * <p>A filter used to search for Amazon Braket jobs.</p>
 */
export interface SearchJobsFilter {
  /**
   * @public
   * <p>The name to use for the jobs filter.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The values to use for the jobs filter.</p>
   */
  values: string[] | undefined;

  /**
   * @public
   * <p>An operator to use for the jobs filter.</p>
   */
  operator: SearchJobsFilterOperator | string | undefined;
}

/**
 * @public
 */
export interface SearchJobsRequest {
  /**
   * @public
   * <p>A token used for pagination of results returned in the response. Use the token returned
   *          from the previous request to continue results where the previous request ended.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The filter values to use when searching for a job.</p>
   */
  filters: SearchJobsFilter[] | undefined;
}

/**
 * @public
 * <p>Provides summary information about an Amazon Braket job.</p>
 */
export interface JobSummary {
  /**
   * @public
   * <p>The status of the Amazon Braket job.</p>
   */
  status: JobPrimaryStatus | string | undefined;

  /**
   * @public
   * <p>The ARN of the Amazon Braket job.</p>
   */
  jobArn: string | undefined;

  /**
   * @public
   * <p>The name of the Amazon Braket job.</p>
   */
  jobName: string | undefined;

  /**
   * @public
   * <p>Provides summary information about the primary device used by an Amazon Braket
   *          job.</p>
   */
  device: string | undefined;

  /**
   * @public
   * <p>The date and time that the Amazon Braket job was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The date and time that the Amazon Braket job was started.</p>
   */
  startedAt?: Date;

  /**
   * @public
   * <p>The date and time that the Amazon Braket job ended.</p>
   */
  endedAt?: Date;

  /**
   * @public
   * <p>A tag object that consists of a key and an optional value, used to manage metadata for
   *          Amazon Braket resources.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface SearchJobsResponse {
  /**
   * @public
   * <p>An array of <code>JobSummary</code> objects for devices that match the specified filter
   *          values.</p>
   */
  jobs: JobSummary[] | undefined;

  /**
   * @public
   * <p>A token used for pagination of results, or <code>null</code> if there are no additional
   *          results. Use the token value in a subsequent request to continue results where the previous
   *          request ended.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>Specify the <code>resourceArn</code> for the resource whose tags to display.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>Displays the key, value pairs of tags associated with this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CancelQuantumTaskRequest {
  /**
   * @public
   * <p>The ARN of the task to cancel.</p>
   */
  quantumTaskArn: string | undefined;

  /**
   * @public
   * <p>The client token associated with the request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CancelQuantumTaskResponse {
  /**
   * @public
   * <p>The ARN of the task.</p>
   */
  quantumTaskArn: string | undefined;

  /**
   * @public
   * <p>The status of the cancellation request.</p>
   */
  cancellationStatus: CancellationStatus | string | undefined;
}

/**
 * @public
 */
export interface CreateQuantumTaskRequest {
  /**
   * @public
   * <p>The client token associated with the request.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The ARN of the device to run the task on.</p>
   */
  deviceArn: string | undefined;

  /**
   * @public
   * <p>The parameters for the device to run the task on.</p>
   */
  deviceParameters?: __LazyJsonString | string;

  /**
   * @public
   * <p>The number of shots to use for the task.</p>
   */
  shots: number | undefined;

  /**
   * @public
   * <p>The S3 bucket to store task result files in.</p>
   */
  outputS3Bucket: string | undefined;

  /**
   * @public
   * <p>The key prefix for the location in the S3 bucket to store task results in.</p>
   */
  outputS3KeyPrefix: string | undefined;

  /**
   * @public
   * <p>The action associated with the task.</p>
   */
  action: __LazyJsonString | string | undefined;

  /**
   * @public
   * <p>Tags to be added to the quantum task you're creating.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The token for an Amazon Braket job that associates it with the quantum task.</p>
   */
  jobToken?: string;
}

/**
 * @public
 */
export interface CreateQuantumTaskResponse {
  /**
   * @public
   * <p>The ARN of the task created by the request.</p>
   */
  quantumTaskArn: string | undefined;
}

/**
 * @public
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

/**
 * @public
 */
export interface GetQuantumTaskRequest {
  /**
   * @public
   * <p>the ARN of the task to retrieve.</p>
   */
  quantumTaskArn: string | undefined;
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
   * @public
   * <p>The ARN of the task.</p>
   */
  quantumTaskArn: string | undefined;

  /**
   * @public
   * <p>The status of the task.</p>
   */
  status: QuantumTaskStatus | string | undefined;

  /**
   * @public
   * <p>The reason that a task failed.</p>
   */
  failureReason?: string;

  /**
   * @public
   * <p>The ARN of the device the task was run on.</p>
   */
  deviceArn: string | undefined;

  /**
   * @public
   * <p>The parameters for the device on which the task ran.</p>
   */
  deviceParameters: __LazyJsonString | string | undefined;

  /**
   * @public
   * <p>The number of shots used in the task.</p>
   */
  shots: number | undefined;

  /**
   * @public
   * <p>The S3 bucket where task results are stored.</p>
   */
  outputS3Bucket: string | undefined;

  /**
   * @public
   * <p>The folder in the S3 bucket where task results are stored.</p>
   */
  outputS3Directory: string | undefined;

  /**
   * @public
   * <p>The time at which the task was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time at which the task ended.</p>
   */
  endedAt?: Date;

  /**
   * @public
   * <p>The tags that belong to this task.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The ARN of the Amazon Braket job associated with the quantum task.</p>
   */
  jobArn?: string;
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
 * @public
 * <p>A filter to use to search for tasks.</p>
 */
export interface SearchQuantumTasksFilter {
  /**
   * @public
   * <p>The name of the device used for the task.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The values to use for the filter.</p>
   */
  values: string[] | undefined;

  /**
   * @public
   * <p>An operator to use in the filter.</p>
   */
  operator: SearchQuantumTasksFilterOperator | string | undefined;
}

/**
 * @public
 */
export interface SearchQuantumTasksRequest {
  /**
   * @public
   * <p>A token used for pagination of results returned in the response. Use the token returned
   *          from the previous request continue results where the previous request ended.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Array of <code>SearchQuantumTasksFilter</code> objects.</p>
   */
  filters: SearchQuantumTasksFilter[] | undefined;
}

/**
 * @public
 * <p>Includes information about a quantum task.</p>
 */
export interface QuantumTaskSummary {
  /**
   * @public
   * <p>The ARN of the task.</p>
   */
  quantumTaskArn: string | undefined;

  /**
   * @public
   * <p>The status of the task.</p>
   */
  status: QuantumTaskStatus | string | undefined;

  /**
   * @public
   * <p>The ARN of the device the task ran on.</p>
   */
  deviceArn: string | undefined;

  /**
   * @public
   * <p>The shots used for the task.</p>
   */
  shots: number | undefined;

  /**
   * @public
   * <p>The S3 bucket where the task result file is stored..</p>
   */
  outputS3Bucket: string | undefined;

  /**
   * @public
   * <p>The folder in the S3 bucket where the task result file is stored.</p>
   */
  outputS3Directory: string | undefined;

  /**
   * @public
   * <p>The time at which the task was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time at which the task finished.</p>
   */
  endedAt?: Date;

  /**
   * @public
   * <p>Displays the key, value pairs of tags associated with this quantum task.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface SearchQuantumTasksResponse {
  /**
   * @public
   * <p>An array of <code>QuantumTaskSummary</code> objects for tasks that match the specified
   *          filters.</p>
   */
  quantumTasks: QuantumTaskSummary[] | undefined;

  /**
   * @public
   * <p>A token used for pagination of results, or null if there are no additional results. Use
   *          the token value in a subsequent request to continue results where the previous request
   *          ended.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>Specify the <code>resourceArn</code> of the resource to which a tag will be
   *          added.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Specify the tags to add to the resource.</p>
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
   * @public
   * <p>Specify the <code>resourceArn</code> for the resource from which to remove the
   *          tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Specify the keys for the tags to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
