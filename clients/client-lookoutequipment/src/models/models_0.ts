// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@aws-sdk/smithy-client";

import { LookoutEquipmentServiceException as __BaseException } from "./LookoutEquipmentServiceException";

/**
 * <p>The request could not be completed because you do not have access to the resource.
 *       </p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p> The request could not be completed due to a conflict with the current state of the
 *          target resource. </p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>Provides information about the data schema used with the given dataset. </p>
 */
export interface DatasetSchema {
  /**
   * <p>
   *       </p>
   */
  InlineDataSchema?: __LazyJsonString | string;
}

/**
 * <p>A tag is a key-value pair that can be added to a resource as metadata. </p>
 */
export interface Tag {
  /**
   * <p>The key for the specified tag. </p>
   */
  Key: string | undefined;

  /**
   * <p>The value for the specified tag. </p>
   */
  Value: string | undefined;
}

export interface CreateDatasetRequest {
  /**
   * <p>The name of the dataset being created. </p>
   */
  DatasetName: string | undefined;

  /**
   * <p>A JSON description of the data that is in each time series dataset, including names,
   *          column names, and data types. </p>
   */
  DatasetSchema?: DatasetSchema;

  /**
   * <p>Provides the identifier of the KMS key used to encrypt dataset data by Amazon Lookout
   *          for Equipment. </p>
   */
  ServerSideKmsKeyId?: string;

  /**
   * <p> A unique identifier for the request. If you do not set the client request token, Amazon
   *          Lookout for Equipment generates one. </p>
   */
  ClientToken?: string;

  /**
   * <p>Any tags associated with the ingested data described in the dataset. </p>
   */
  Tags?: Tag[];
}

export enum DatasetStatus {
  ACTIVE = "ACTIVE",
  CREATED = "CREATED",
  INGESTION_IN_PROGRESS = "INGESTION_IN_PROGRESS",
}

export interface CreateDatasetResponse {
  /**
   * <p>The name of the dataset being created. </p>
   */
  DatasetName?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the dataset being created. </p>
   */
  DatasetArn?: string;

  /**
   * <p>Indicates the status of the <code>CreateDataset</code> operation. </p>
   */
  Status?: DatasetStatus | string;
}

/**
 * <p> Processing of the request has failed because of an unknown error, exception or failure.
 *       </p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> Resource limitations have been exceeded. </p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a
 *          related AWS service that's being utilized. </p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>Specifies configuration information for the input data for the inference, including
 *          timestamp format and delimiter. </p>
 */
export interface InferenceInputNameConfiguration {
  /**
   * <p>The format of the timestamp, whether Epoch time, or standard, with or without hyphens
   *          (-). </p>
   */
  TimestampFormat?: string;

  /**
   * <p>Indicates the delimiter character used between items in the data. </p>
   */
  ComponentTimestampDelimiter?: string;
}

/**
 * <p> Specifies configuration information for the input data for the inference, including
 *          input data S3 location. </p>
 */
export interface InferenceS3InputConfiguration {
  /**
   * <p>The bucket containing the input dataset for the inference. </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The prefix for the S3 bucket used for the input data for the inference. </p>
   */
  Prefix?: string;
}

/**
 * <p>Specifies configuration information for the input data for the inference, including
 *             Amazon S3 location of input data.. </p>
 */
export interface InferenceInputConfiguration {
  /**
   * <p> Specifies configuration information for the input data for the inference, including
   *             Amazon S3 location of input data.</p>
   */
  S3InputConfiguration?: InferenceS3InputConfiguration;

  /**
   * <p>Indicates the difference between your time zone and Coordinated Universal Time
   *          (UTC).</p>
   */
  InputTimeZoneOffset?: string;

  /**
   * <p>Specifies configuration information for the input data for the inference, including
   *          timestamp format and delimiter. </p>
   */
  InferenceInputNameConfiguration?: InferenceInputNameConfiguration;
}

/**
 * <p> Specifies configuration information for the output results from the inference,
 *          including output S3 location. </p>
 */
export interface InferenceS3OutputConfiguration {
  /**
   * <p> The bucket containing the output results from the inference </p>
   */
  Bucket: string | undefined;

  /**
   * <p> The prefix for the S3 bucket used for the output results from the inference. </p>
   */
  Prefix?: string;
}

/**
 * <p> Specifies configuration information for the output results from for the inference,
 *          including KMS key ID and output S3 location. </p>
 */
export interface InferenceOutputConfiguration {
  /**
   * <p> Specifies configuration information for the output results from for the inference,
   *          output S3 location. </p>
   */
  S3OutputConfiguration: InferenceS3OutputConfiguration | undefined;

  /**
   * <p>The ID number for the AWS KMS key used to encrypt the inference output. </p>
   */
  KmsKeyId?: string;
}

export enum DataUploadFrequency {
  PT10M = "PT10M",
  PT15M = "PT15M",
  PT1H = "PT1H",
  PT30M = "PT30M",
  PT5M = "PT5M",
}

export interface CreateInferenceSchedulerRequest {
  /**
   * <p>The name of the previously trained ML model being used to create the inference
   *          scheduler. </p>
   */
  ModelName: string | undefined;

  /**
   * <p>The name of the inference scheduler being created. </p>
   */
  InferenceSchedulerName: string | undefined;

  /**
   * <p>The interval (in minutes) of planned delay at the start of each inference segment. For
   *          example, if inference is set to run every ten minutes, the delay is set to five minutes and the time is 09:08. The inference scheduler will wake up at the
   *          configured interval (which, without a delay configured, would be 09:10) plus the additional five minute delay time (so 09:15) to check your Amazon S3
   *          bucket. The delay provides a buffer for you to upload data at the same frequency, so that you don't have to stop and
   *          restart the scheduler when uploading new data.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/understanding-inference-process.html">Understanding the inference process</a>.</p>
   */
  DataDelayOffsetInMinutes?: number;

  /**
   * <p> How often data is uploaded to the source Amazon S3 bucket for the input data. The value chosen
   *          is the length of time between data uploads. For instance, if you select 5 minutes, Amazon Lookout for Equipment will upload the real-time data to the source bucket once every 5
   *          minutes. This frequency also determines how often Amazon Lookout for Equipment runs inference on your data.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/understanding-inference-process.html">Understanding the inference process</a>.</p>
   */
  DataUploadFrequency: DataUploadFrequency | string | undefined;

  /**
   * <p>Specifies configuration information for the input data for the inference scheduler,
   *          including delimiter, format, and dataset location. </p>
   */
  DataInputConfiguration: InferenceInputConfiguration | undefined;

  /**
   * <p>Specifies configuration information for the output results for the inference scheduler,
   *          including the S3 location for the output. </p>
   */
  DataOutputConfiguration: InferenceOutputConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a role with permission to access the data source being
   *          used for the inference. </p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Provides the identifier of the KMS key used to encrypt inference scheduler data by
   *          Amazon Lookout for Equipment. </p>
   */
  ServerSideKmsKeyId?: string;

  /**
   * <p> A unique identifier for the request. If you do not set the client request token, Amazon
   *          Lookout for Equipment generates one. </p>
   */
  ClientToken?: string;

  /**
   * <p>Any tags associated with the inference scheduler. </p>
   */
  Tags?: Tag[];
}

export enum InferenceSchedulerStatus {
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
}

export interface CreateInferenceSchedulerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the inference scheduler being created. </p>
   */
  InferenceSchedulerArn?: string;

  /**
   * <p>The name of inference scheduler being created. </p>
   */
  InferenceSchedulerName?: string;

  /**
   * <p>Indicates the status of the <code>CreateInferenceScheduler</code> operation. </p>
   */
  Status?: InferenceSchedulerStatus | string;
}

/**
 * <p> The resource requested could not be found. Verify the resource ID and retry your
 *          request. </p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

export enum LabelRating {
  ANOMALY = "ANOMALY",
  NEUTRAL = "NEUTRAL",
  NO_ANOMALY = "NO_ANOMALY",
}

export interface CreateLabelRequest {
  /**
   * <p>
   * The name of a group of labels. </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the security of your data.
   * </p>
   */
  LabelGroupName: string | undefined;

  /**
   * <p>
   * The start time of the labeled event.
   * </p>
   */
  StartTime: Date | undefined;

  /**
   * <p>
   * The end time of the labeled event.
   * </p>
   */
  EndTime: Date | undefined;

  /**
   * <p>
   * Indicates whether a labeled event represents an anomaly.
   * </p>
   */
  Rating: LabelRating | string | undefined;

  /**
   * <p>
   * Provides additional information about the label. The fault code must be defined in the FaultCodes attribute of the label group.</p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the security of your data.
   * </p>
   */
  FaultCode?: string;

  /**
   * <p>
   * Metadata providing additional information about the label.
   * </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the security of your data.</p>
   */
  Notes?: string;

  /**
   * <p>
   * Indicates that a label pertains to a particular piece of equipment.
   * </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the security of your data.</p>
   */
  Equipment?: string;

  /**
   * <p>
   * A unique identifier for the request to create a label. If you do not set the client request token, Lookout for Equipment generates one.
   * </p>
   */
  ClientToken?: string;
}

export interface CreateLabelResponse {
  /**
   * <p>
   * The ID of the label that you have created.
   * </p>
   */
  LabelId?: string;
}

export interface CreateLabelGroupRequest {
  /**
   * <p>
   * Names a group of labels.</p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the security of your data.
   * </p>
   */
  LabelGroupName: string | undefined;

  /**
   * <p>
   * The acceptable fault codes (indicating the type of anomaly associated with the label) that can be used with this label group.</p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the security of your data.</p>
   */
  FaultCodes?: string[];

  /**
   * <p>
   * A unique identifier for the request to create a label group. If you do not set the client request token, Lookout for Equipment generates one.
   * </p>
   */
  ClientToken?: string;

  /**
   * <p>
   * Tags that provide metadata about the label group you are creating.
   * </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the security of your data.</p>
   */
  Tags?: Tag[];
}

export interface CreateLabelGroupResponse {
  /**
   * <p>
   * The name of the label group that you have created. Data in this field will be retained for service usage. Follow best practices for the security of your data.
   * </p>
   */
  LabelGroupName?: string;

  /**
   * <p>
   * The ARN of the label group that you have created.
   * </p>
   */
  LabelGroupArn?: string;
}

export enum TargetSamplingRate {
  PT10M = "PT10M",
  PT10S = "PT10S",
  PT15M = "PT15M",
  PT15S = "PT15S",
  PT1H = "PT1H",
  PT1M = "PT1M",
  PT1S = "PT1S",
  PT30M = "PT30M",
  PT30S = "PT30S",
  PT5M = "PT5M",
  PT5S = "PT5S",
}

/**
 * <p>The configuration is the <code>TargetSamplingRate</code>, which is the sampling rate of
 *          the data after post processing by Amazon Lookout for Equipment. For example, if you provide
 *          data that has been collected at a 1 second level and you want the system to resample the
 *          data at a 1 minute rate before training, the <code>TargetSamplingRate</code> is 1
 *          minute.</p>
 *          <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the
 *          prefix "PT" to the rate you want. The value for a 1 second rate is therefore
 *             <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>,
 *          and the value for a 1 hour rate is <i>PT1H</i>
 *          </p>
 */
export interface DataPreProcessingConfiguration {
  /**
   * <p>The sampling rate of the data after post processing by Amazon Lookout for Equipment. For
   *          example, if you provide data that has been collected at a 1 second level and you want the
   *          system to resample the data at a 1 minute rate before training, the
   *             <code>TargetSamplingRate</code> is 1 minute.</p>
   *          <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the
   *          prefix "PT" to the rate you want. The value for a 1 second rate is therefore
   *             <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>,
   *          and the value for a 1 hour rate is <i>PT1H</i>
   *          </p>
   */
  TargetSamplingRate?: TargetSamplingRate | string;
}

/**
 * <p>The location information (prefix and bucket name) for the s3 location being used for
 *          label data. </p>
 */
export interface LabelsS3InputConfiguration {
  /**
   * <p>The name of the S3 bucket holding the label data. </p>
   */
  Bucket: string | undefined;

  /**
   * <p> The prefix for the S3 bucket used for the label data. </p>
   */
  Prefix?: string;
}

/**
 * <p>Contains the configuration information for the S3 location being used to hold label
 *          data. </p>
 */
export interface LabelsInputConfiguration {
  /**
   * <p>Contains location information for the S3 location being used for label data. </p>
   */
  S3InputConfiguration?: LabelsS3InputConfiguration;

  /**
   * <p>
   * The name of the label group to be used for label data.
   * </p>
   */
  LabelGroupName?: string;
}

export interface CreateModelRequest {
  /**
   * <p>The name for the ML model to be created.</p>
   */
  ModelName: string | undefined;

  /**
   * <p>The name of the dataset for the ML model being created. </p>
   */
  DatasetName: string | undefined;

  /**
   * <p>The data schema for the ML model being created. </p>
   */
  DatasetSchema?: DatasetSchema;

  /**
   * <p>The input configuration for the labels being used for the ML model that's being created.
   *       </p>
   */
  LabelsInputConfiguration?: LabelsInputConfiguration;

  /**
   * <p>A unique identifier for the request. If you do not set the client request token, Amazon
   *          Lookout for Equipment generates one. </p>
   */
  ClientToken?: string;

  /**
   * <p>Indicates the time reference in the dataset that should be used to begin the subset of
   *          training data for the ML model. </p>
   */
  TrainingDataStartTime?: Date;

  /**
   * <p>Indicates the time reference in the dataset that should be used to end the subset of
   *          training data for the ML model. </p>
   */
  TrainingDataEndTime?: Date;

  /**
   * <p>Indicates the time reference in the dataset that should be used to begin the subset of
   *          evaluation data for the ML model. </p>
   */
  EvaluationDataStartTime?: Date;

  /**
   * <p> Indicates the time reference in the dataset that should be used to end the subset of
   *          evaluation data for the ML model. </p>
   */
  EvaluationDataEndTime?: Date;

  /**
   * <p> The Amazon Resource Name (ARN) of a role with permission to access the data source
   *          being used to create the ML model. </p>
   */
  RoleArn?: string;

  /**
   * <p>The configuration is the <code>TargetSamplingRate</code>, which is the sampling rate of
   *          the data after post processing by Amazon Lookout for Equipment. For example, if you provide
   *          data that has been collected at a 1 second level and you want the system to resample the
   *          data at a 1 minute rate before training, the <code>TargetSamplingRate</code> is 1
   *          minute.</p>
   *          <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the
   *          prefix "PT" to the rate you want. The value for a 1 second rate is therefore
   *             <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>,
   *          and the value for a 1 hour rate is <i>PT1H</i>
   *          </p>
   */
  DataPreProcessingConfiguration?: DataPreProcessingConfiguration;

  /**
   * <p>Provides the identifier of the KMS key used to encrypt model data by Amazon Lookout
   *          for Equipment. </p>
   */
  ServerSideKmsKeyId?: string;

  /**
   * <p> Any tags associated with the ML model being created. </p>
   */
  Tags?: Tag[];

  /**
   * <p>Indicates that the asset associated with this sensor has been shut off. As long as this
   *          condition is met, Lookout for Equipment will not use data from this asset for training,
   *          evaluation, or inference.</p>
   */
  OffCondition?: string;
}

export enum ModelStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCESS = "SUCCESS",
}

export interface CreateModelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model being created. </p>
   */
  ModelArn?: string;

  /**
   * <p>Indicates the status of the <code>CreateModel</code> operation. </p>
   */
  Status?: ModelStatus | string;
}

export interface DeleteDatasetRequest {
  /**
   * <p>The name of the dataset to be deleted. </p>
   */
  DatasetName: string | undefined;
}

export interface DeleteInferenceSchedulerRequest {
  /**
   * <p>The name of the inference scheduler to be deleted. </p>
   */
  InferenceSchedulerName: string | undefined;
}

export interface DeleteLabelRequest {
  /**
   * <p>
   * The name of the label group that contains the label that you want to delete. Data in this field will be retained for service usage. Follow best practices for the security of your data.
   * </p>
   */
  LabelGroupName: string | undefined;

  /**
   * <p>
   * The ID of the label that you want to delete.
   * </p>
   */
  LabelId: string | undefined;
}

export interface DeleteLabelGroupRequest {
  /**
   * <p>
   * The name of the label group that you want to delete. Data in this field will be retained for service usage. Follow best practices for the security of your data.
   * </p>
   */
  LabelGroupName: string | undefined;
}

export interface DeleteModelRequest {
  /**
   * <p>The name of the ML model to be deleted. </p>
   */
  ModelName: string | undefined;
}

export interface DescribeDataIngestionJobRequest {
  /**
   * <p>The job ID of the data ingestion job. </p>
   */
  JobId: string | undefined;
}

/**
 * <p> Entity that comprises information abount duplicate timestamps in the dataset. </p>
 */
export interface DuplicateTimestamps {
  /**
   * <p> Indicates the total number of duplicate timestamps. </p>
   */
  TotalNumberOfDuplicateTimestamps: number | undefined;
}

/**
 * <p> Entity that comprises information on sensors that have sensor data completely missing.
 *       </p>
 */
export interface MissingCompleteSensorData {
  /**
   * <p> Indicates the number of sensors that have data missing completely. </p>
   */
  AffectedSensorCount: number | undefined;
}

/**
 * <p> Entity that comprises information on sensors that have shorter date range. </p>
 */
export interface SensorsWithShortDateRange {
  /**
   * <p> Indicates the number of sensors that have less than 90 days of data. </p>
   */
  AffectedSensorCount: number | undefined;
}

/**
 * <p> Entity that comprises aggregated information on sensors having insufficient data.
 *       </p>
 */
export interface InsufficientSensorData {
  /**
   * <p> Parameter that describes the total number of sensors that have data completely missing
   *          for it. </p>
   */
  MissingCompleteSensorData: MissingCompleteSensorData | undefined;

  /**
   * <p> Parameter that describes the total number of sensors that have a short date range of
   *          less than 90 days of data overall. </p>
   */
  SensorsWithShortDateRange: SensorsWithShortDateRange | undefined;
}

/**
 * <p> Entity that comprises aggregated information on sensors having insufficient data.
 *       </p>
 */
export interface InvalidSensorData {
  /**
   * <p> Indicates the number of sensors that have at least some invalid values. </p>
   */
  AffectedSensorCount: number | undefined;

  /**
   * <p> Indicates the total number of invalid values across all the sensors. </p>
   */
  TotalNumberOfInvalidValues: number | undefined;
}

/**
 * <p> Entity that comprises aggregated information on sensors having missing data. </p>
 */
export interface MissingSensorData {
  /**
   * <p> Indicates the number of sensors that have atleast some data missing. </p>
   */
  AffectedSensorCount: number | undefined;

  /**
   * <p> Indicates the total number of missing values across all the sensors. </p>
   */
  TotalNumberOfMissingValues: number | undefined;
}

/**
 * <p> Entity that comprises information abount unsupported timestamps in the dataset. </p>
 */
export interface UnsupportedTimestamps {
  /**
   * <p> Indicates the total number of unsupported timestamps across the ingested data. </p>
   */
  TotalNumberOfUnsupportedTimestamps: number | undefined;
}

/**
 * <p> DataQualitySummary gives aggregated statistics over all the sensors about a completed
 *          ingestion job. It primarily gives more information about statistics over different
 *          incorrect data like MissingCompleteSensorData, MissingSensorData, UnsupportedDateFormats,
 *          InsufficientSensorData, DuplicateTimeStamps. </p>
 */
export interface DataQualitySummary {
  /**
   * <p> Parameter that gives information about insufficient data for sensors in the dataset.
   *          This includes information about those sensors that have complete data missing and those
   *          with a short date range. </p>
   */
  InsufficientSensorData: InsufficientSensorData | undefined;

  /**
   * <p> Parameter that gives information about data that is missing over all the sensors in the
   *          input data. </p>
   */
  MissingSensorData: MissingSensorData | undefined;

  /**
   * <p> Parameter that gives information about data that is invalid over all the sensors in the
   *          input data. </p>
   */
  InvalidSensorData: InvalidSensorData | undefined;

  /**
   * <p> Parameter that gives information about unsupported timestamps in the input data.
   *       </p>
   */
  UnsupportedTimestamps: UnsupportedTimestamps | undefined;

  /**
   * <p> Parameter that gives information about duplicate timestamps in the input data. </p>
   */
  DuplicateTimestamps: DuplicateTimestamps | undefined;
}

/**
 * <p>Contains information about an S3 bucket. </p>
 */
export interface S3Object {
  /**
   * <p>The name of the specific S3 bucket. </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The AWS Key Management Service (AWS KMS) key being used to encrypt the S3 object.
   *          Without this key, data in the bucket is not accessible. </p>
   */
  Key: string | undefined;
}

/**
 * <p>Gives statistics about how many files have been ingested, and which files have not been
 *          ingested, for a particular ingestion job.</p>
 */
export interface IngestedFilesSummary {
  /**
   * <p>Indicates the total number of files that were submitted for ingestion.</p>
   */
  TotalNumberOfFiles: number | undefined;

  /**
   * <p>Indicates the number of files that were successfully ingested.</p>
   */
  IngestedNumberOfFiles: number | undefined;

  /**
   * <p>Indicates the number of files that were discarded. A file could be discarded because its
   *          format is invalid (for example, a jpg or pdf) or not readable.</p>
   */
  DiscardedFiles?: S3Object[];
}

/**
 * <p> Specifies S3 configuration information for the input data for the data ingestion job.
 *       </p>
 */
export interface IngestionS3InputConfiguration {
  /**
   * <p>The name of the S3 bucket used for the input data for the data ingestion. </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The prefix for the S3 location being used for the input data for the data ingestion.
   *       </p>
   */
  Prefix?: string;

  /**
   * <p> Pattern for matching the Amazon S3 files which will be used for ingestion. If
   *          no KeyPattern is provided, we will use the default hierarchy file structure, which is same
   *          as KeyPattern {prefix}/{component_name}/* </p>
   */
  KeyPattern?: string;
}

/**
 * <p> Specifies configuration information for the input data for the data ingestion job,
 *          including input data S3 location. </p>
 */
export interface IngestionInputConfiguration {
  /**
   * <p>The location information for the S3 bucket used for input data for the data ingestion.
   *       </p>
   */
  S3InputConfiguration: IngestionS3InputConfiguration | undefined;
}

export enum IngestionJobStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCESS = "SUCCESS",
}

export interface DescribeDataIngestionJobResponse {
  /**
   * <p>Indicates the job ID of the data ingestion job. </p>
   */
  JobId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset being used in the data ingestion job.
   *       </p>
   */
  DatasetArn?: string;

  /**
   * <p>Specifies the S3 location configuration for the data input for the data ingestion job.
   *       </p>
   */
  IngestionInputConfiguration?: IngestionInputConfiguration;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role with permission to access the data source
   *          being ingested. </p>
   */
  RoleArn?: string;

  /**
   * <p>The time at which the data ingestion job was created. </p>
   */
  CreatedAt?: Date;

  /**
   * <p>Indicates the status of the <code>DataIngestionJob</code> operation. </p>
   */
  Status?: IngestionJobStatus | string;

  /**
   * <p>Specifies the reason for failure when a data ingestion job has failed. </p>
   */
  FailedReason?: string;

  /**
   * <p> Gives statistics about a completed ingestion job. These statistics primarily relate to
   *          quantifying incorrect data such as MissingCompleteSensorData, MissingSensorData,
   *          UnsupportedDateFormats, InsufficientSensorData, and DuplicateTimeStamps. </p>
   */
  DataQualitySummary?: DataQualitySummary;

  /**
   * <p>Gives statistics about how many files have been ingested, and which files have not been
   *          ingested, for a particular ingestion job.</p>
   */
  IngestedFilesSummary?: IngestedFilesSummary;

  /**
   * <p> Provides details about status of the ingestion job that is currently in progress.
   *       </p>
   */
  StatusDetail?: string;

  /**
   * <p> Indicates the size of the ingested dataset. </p>
   */
  IngestedDataSize?: number;

  /**
   * <p> Indicates the earliest timestamp corresponding to data that was successfully ingested
   *          during this specific ingestion job. </p>
   */
  DataStartTime?: Date;

  /**
   * <p> Indicates the latest timestamp corresponding to data that was successfully ingested
   *          during this specific ingestion job. </p>
   */
  DataEndTime?: Date;
}

export interface DescribeDatasetRequest {
  /**
   * <p>The name of the dataset to be described. </p>
   */
  DatasetName: string | undefined;
}

export interface DescribeDatasetResponse {
  /**
   * <p>The name of the dataset being described. </p>
   */
  DatasetName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset being described. </p>
   */
  DatasetArn?: string;

  /**
   * <p>Specifies the time the dataset was created in Lookout for Equipment. </p>
   */
  CreatedAt?: Date;

  /**
   * <p>Specifies the time the dataset was last updated, if it was. </p>
   */
  LastUpdatedAt?: Date;

  /**
   * <p>Indicates the status of the dataset. </p>
   */
  Status?: DatasetStatus | string;

  /**
   * <p>A JSON description of the data that is in each time series dataset, including names,
   *          column names, and data types. </p>
   */
  Schema?: __LazyJsonString | string;

  /**
   * <p>Provides the identifier of the KMS key used to encrypt dataset data by Amazon Lookout
   *          for Equipment. </p>
   */
  ServerSideKmsKeyId?: string;

  /**
   * <p>Specifies the S3 location configuration for the data input for the data ingestion job.
   *       </p>
   */
  IngestionInputConfiguration?: IngestionInputConfiguration;

  /**
   * <p> Gives statistics associated with the given dataset for the latest successful associated
   *          ingestion job id. These statistics primarily relate to quantifying incorrect data such as
   *          MissingCompleteSensorData, MissingSensorData, UnsupportedDateFormats,
   *          InsufficientSensorData, and DuplicateTimeStamps. </p>
   */
  DataQualitySummary?: DataQualitySummary;

  /**
   * <p> IngestedFilesSummary associated with the given dataset for the latest successful
   *          associated ingestion job id. </p>
   */
  IngestedFilesSummary?: IngestedFilesSummary;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM role that you are using for this the data
   *          ingestion job. </p>
   */
  RoleArn?: string;

  /**
   * <p> Indicates the earliest timestamp corresponding to data that was successfully ingested
   *          during the most recent ingestion of this particular dataset. </p>
   */
  DataStartTime?: Date;

  /**
   * <p> Indicates the latest timestamp corresponding to data that was successfully ingested
   *          during the most recent ingestion of this particular dataset. </p>
   */
  DataEndTime?: Date;
}

export interface DescribeInferenceSchedulerRequest {
  /**
   * <p>The name of the inference scheduler being described. </p>
   */
  InferenceSchedulerName: string | undefined;
}

export enum LatestInferenceResult {
  ANOMALOUS = "ANOMALOUS",
  NORMAL = "NORMAL",
}

export interface DescribeInferenceSchedulerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the ML model of the inference scheduler being
   *          described. </p>
   */
  ModelArn?: string;

  /**
   * <p>The name of the ML model of the inference scheduler being described. </p>
   */
  ModelName?: string;

  /**
   * <p>The name of the inference scheduler being described. </p>
   */
  InferenceSchedulerName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the inference scheduler being described. </p>
   */
  InferenceSchedulerArn?: string;

  /**
   * <p>Indicates the status of the inference scheduler. </p>
   */
  Status?: InferenceSchedulerStatus | string;

  /**
   * <p> A period of time (in minutes) by which inference on the data is delayed after the data
   *          starts. For instance, if you select an offset delay time of five minutes, inference will
   *          not begin on the data until the first data measurement after the five minute mark. For
   *          example, if five minutes is selected, the inference scheduler will wake up at the
   *          configured frequency with the additional five minute delay time to check the customer S3
   *          bucket. The customer can upload data at the same frequency and they don't need to stop and
   *          restart the scheduler when uploading new data.</p>
   */
  DataDelayOffsetInMinutes?: number;

  /**
   * <p>Specifies how often data is uploaded to the source S3 bucket for the input data. This
   *          value is the length of time between data uploads. For instance, if you select 5 minutes,
   *          Amazon Lookout for Equipment will upload the real-time data to the source bucket once every
   *          5 minutes. This frequency also determines how often Amazon Lookout for Equipment starts a
   *          scheduled inference on your data. In this example, it starts once every 5 minutes. </p>
   */
  DataUploadFrequency?: DataUploadFrequency | string;

  /**
   * <p>Specifies the time at which the inference scheduler was created. </p>
   */
  CreatedAt?: Date;

  /**
   * <p>Specifies the time at which the inference scheduler was last updated, if it was. </p>
   */
  UpdatedAt?: Date;

  /**
   * <p> Specifies configuration information for the input data for the inference scheduler,
   *          including delimiter, format, and dataset location. </p>
   */
  DataInputConfiguration?: InferenceInputConfiguration;

  /**
   * <p> Specifies information for the output results for the inference scheduler, including
   *          the output S3 location. </p>
   */
  DataOutputConfiguration?: InferenceOutputConfiguration;

  /**
   * <p> The Amazon Resource Name (ARN) of a role with permission to access the data source for
   *          the inference scheduler being described. </p>
   */
  RoleArn?: string;

  /**
   * <p>Provides the identifier of the KMS key used to encrypt inference scheduler data by
   *          Amazon Lookout for Equipment. </p>
   */
  ServerSideKmsKeyId?: string;

  /**
   * <p>Indicates whether the latest execution for the inference scheduler was Anomalous
   *          (anomalous events found) or Normal (no anomalous events found).</p>
   */
  LatestInferenceResult?: LatestInferenceResult | string;
}

export interface DescribeLabelRequest {
  /**
   * <p>
   * Returns the name of the group containing the label.
   * </p>
   */
  LabelGroupName: string | undefined;

  /**
   * <p>
   * Returns the ID of the label.
   * </p>
   */
  LabelId: string | undefined;
}

export interface DescribeLabelResponse {
  /**
   * <p>
   * The name of the requested label group.
   * </p>
   */
  LabelGroupName?: string;

  /**
   * <p>
   * The ARN of the requested label group.
   * </p>
   */
  LabelGroupArn?: string;

  /**
   * <p>
   * The ID of the requested label.
   * </p>
   */
  LabelId?: string;

  /**
   * <p>
   * The start time of the requested label.
   * </p>
   */
  StartTime?: Date;

  /**
   * <p>
   * The end time of the requested label.
   * </p>
   */
  EndTime?: Date;

  /**
   * <p>
   * Indicates whether a labeled event represents an anomaly.
   * </p>
   */
  Rating?: LabelRating | string;

  /**
   * <p>
   * Indicates the type of anomaly associated with the label.
   * </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the security of your data.</p>
   */
  FaultCode?: string;

  /**
   * <p>Metadata providing additional information about the label.</p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the security of your data.</p>
   */
  Notes?: string;

  /**
   * <p>
   * Indicates that a label pertains to a particular piece of equipment.
   * </p>
   */
  Equipment?: string;

  /**
   * <p>
   * The time at which the label was created.
   * </p>
   */
  CreatedAt?: Date;
}

export interface DescribeLabelGroupRequest {
  /**
   * <p>
   * Returns the name of the label group.
   * </p>
   */
  LabelGroupName: string | undefined;
}

export interface DescribeLabelGroupResponse {
  /**
   * <p>
   * The name of the label group.
   * </p>
   */
  LabelGroupName?: string;

  /**
   * <p>
   * The ARN of the label group.
   * </p>
   */
  LabelGroupArn?: string;

  /**
   * <p>
   * Codes indicating the type of anomaly associated with the labels in the lagbel group.
   * </p>
   */
  FaultCodes?: string[];

  /**
   * <p>
   * The time at which the label group was created.
   * </p>
   */
  CreatedAt?: Date;

  /**
   * <p>
   * The time at which the label group was updated.
   * </p>
   */
  UpdatedAt?: Date;
}

export interface DescribeModelRequest {
  /**
   * <p>The name of the ML model to be described. </p>
   */
  ModelName: string | undefined;
}

export interface DescribeModelResponse {
  /**
   * <p>The name of the ML model being described. </p>
   */
  ModelName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the ML model being described. </p>
   */
  ModelArn?: string;

  /**
   * <p>The name of the dataset being used by the ML being described. </p>
   */
  DatasetName?: string;

  /**
   * <p>The Amazon Resouce Name (ARN) of the dataset used to create the ML model being
   *          described. </p>
   */
  DatasetArn?: string;

  /**
   * <p>A JSON description of the data that is in each time series dataset, including names,
   *          column names, and data types. </p>
   */
  Schema?: __LazyJsonString | string;

  /**
   * <p>Specifies configuration information about the labels input, including its S3 location.
   *       </p>
   */
  LabelsInputConfiguration?: LabelsInputConfiguration;

  /**
   * <p> Indicates the time reference in the dataset that was used to begin the subset of
   *          training data for the ML model. </p>
   */
  TrainingDataStartTime?: Date;

  /**
   * <p> Indicates the time reference in the dataset that was used to end the subset of training
   *          data for the ML model. </p>
   */
  TrainingDataEndTime?: Date;

  /**
   * <p> Indicates the time reference in the dataset that was used to begin the subset of
   *          evaluation data for the ML model. </p>
   */
  EvaluationDataStartTime?: Date;

  /**
   * <p> Indicates the time reference in the dataset that was used to end the subset of
   *          evaluation data for the ML model. </p>
   */
  EvaluationDataEndTime?: Date;

  /**
   * <p> The Amazon Resource Name (ARN) of a role with permission to access the data source for
   *          the ML model being described. </p>
   */
  RoleArn?: string;

  /**
   * <p>The configuration is the <code>TargetSamplingRate</code>, which is the sampling rate of
   *          the data after post processing by Amazon Lookout for Equipment. For example, if you provide
   *          data that has been collected at a 1 second level and you want the system to resample the
   *          data at a 1 minute rate before training, the <code>TargetSamplingRate</code> is 1
   *          minute.</p>
   *          <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the
   *          prefix "PT" to the rate you want. The value for a 1 second rate is therefore
   *             <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>,
   *          and the value for a 1 hour rate is <i>PT1H</i>
   *          </p>
   */
  DataPreProcessingConfiguration?: DataPreProcessingConfiguration;

  /**
   * <p>Specifies the current status of the model being described. Status describes the status
   *          of the most recent action of the model. </p>
   */
  Status?: ModelStatus | string;

  /**
   * <p>Indicates the time at which the training of the ML model began. </p>
   */
  TrainingExecutionStartTime?: Date;

  /**
   * <p>Indicates the time at which the training of the ML model was completed. </p>
   */
  TrainingExecutionEndTime?: Date;

  /**
   * <p>If the training of the ML model failed, this indicates the reason for that failure.
   *       </p>
   */
  FailedReason?: string;

  /**
   * <p>The Model Metrics show an aggregated summary of the model's performance within the
   *          evaluation time range. This is the JSON content of the metrics created when evaluating the
   *          model. </p>
   */
  ModelMetrics?: __LazyJsonString | string;

  /**
   * <p>Indicates the last time the ML model was updated. The type of update is not specified.
   *       </p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>Indicates the time and date at which the ML model was created. </p>
   */
  CreatedAt?: Date;

  /**
   * <p>Provides the identifier of the KMS key used to encrypt model data by Amazon Lookout
   *          for Equipment. </p>
   */
  ServerSideKmsKeyId?: string;

  /**
   * <p>Indicates that the asset associated with this sensor has been shut off. As long as this
   *          condition is met, Lookout for Equipment will not use data from this asset for training,
   *          evaluation, or inference.</p>
   */
  OffCondition?: string;
}

export interface ListDataIngestionJobsRequest {
  /**
   * <p>The name of the dataset being used for the data ingestion job. </p>
   */
  DatasetName?: string;

  /**
   * <p>An opaque pagination token indicating where to continue the listing of data ingestion
   *          jobs. </p>
   */
  NextToken?: string;

  /**
   * <p> Specifies the maximum number of data ingestion jobs to list. </p>
   */
  MaxResults?: number;

  /**
   * <p>Indicates the status of the data ingestion job. </p>
   */
  Status?: IngestionJobStatus | string;
}

/**
 * <p>Provides information about a specified data ingestion job, including dataset
 *          information, data ingestion configuration, and status. </p>
 */
export interface DataIngestionJobSummary {
  /**
   * <p>Indicates the job ID of the data ingestion job. </p>
   */
  JobId?: string;

  /**
   * <p>The name of the dataset used for the data ingestion job. </p>
   */
  DatasetName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset used in the data ingestion job. </p>
   */
  DatasetArn?: string;

  /**
   * <p> Specifies information for the input data for the data inference job, including data
   *             Amazon S3 location parameters. </p>
   */
  IngestionInputConfiguration?: IngestionInputConfiguration;

  /**
   * <p>Indicates the status of the data ingestion job. </p>
   */
  Status?: IngestionJobStatus | string;
}

export interface ListDataIngestionJobsResponse {
  /**
   * <p> An opaque pagination token indicating where to continue the listing of data ingestion
   *          jobs. </p>
   */
  NextToken?: string;

  /**
   * <p>Specifies information about the specific data ingestion job, including dataset name and
   *          status. </p>
   */
  DataIngestionJobSummaries?: DataIngestionJobSummary[];
}

export interface ListDatasetsRequest {
  /**
   * <p> An opaque pagination token indicating where to continue the listing of datasets.
   *       </p>
   */
  NextToken?: string;

  /**
   * <p> Specifies the maximum number of datasets to list. </p>
   */
  MaxResults?: number;

  /**
   * <p>The beginning of the name of the datasets to be listed. </p>
   */
  DatasetNameBeginsWith?: string;
}

/**
 * <p>Contains information about the specific data set, including name, ARN, and status.
 *       </p>
 */
export interface DatasetSummary {
  /**
   * <p>The name of the dataset. </p>
   */
  DatasetName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the specified dataset. </p>
   */
  DatasetArn?: string;

  /**
   * <p>Indicates the status of the dataset. </p>
   */
  Status?: DatasetStatus | string;

  /**
   * <p>The time at which the dataset was created in Amazon Lookout for Equipment. </p>
   */
  CreatedAt?: Date;
}

export interface ListDatasetsResponse {
  /**
   * <p> An opaque pagination token indicating where to continue the listing of datasets.
   *       </p>
   */
  NextToken?: string;

  /**
   * <p>Provides information about the specified dataset, including creation time, dataset ARN,
   *          and status. </p>
   */
  DatasetSummaries?: DatasetSummary[];
}

export interface ListInferenceEventsRequest {
  /**
   * <p>An opaque pagination token indicating where to continue the listing of inference
   *          events.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the maximum number of inference events to list. </p>
   */
  MaxResults?: number;

  /**
   * <p>The name of the inference scheduler for the inference events listed. </p>
   */
  InferenceSchedulerName: string | undefined;

  /**
   * <p> Lookout for Equipment will return all the inference events with an end time equal to or greater than the
   *          start time given.</p>
   */
  IntervalStartTime: Date | undefined;

  /**
   * <p>Returns all the inference events with an end start time equal to or greater than less than the end time given</p>
   */
  IntervalEndTime: Date | undefined;
}

/**
 * <p>Contains information about the specific inference event, including start and end time,
 *          diagnostics information, event duration and so on.</p>
 */
export interface InferenceEventSummary {
  /**
   * <p> The Amazon Resource Name (ARN) of the inference scheduler being used for the inference
   *          event. </p>
   */
  InferenceSchedulerArn?: string;

  /**
   * <p>The name of the inference scheduler being used for the inference events. </p>
   */
  InferenceSchedulerName?: string;

  /**
   * <p>Indicates the starting time of an inference event. </p>
   */
  EventStartTime?: Date;

  /**
   * <p>Indicates the ending time of an inference event. </p>
   */
  EventEndTime?: Date;

  /**
   * <p> An array which specifies the names and values of all sensors contributing to an
   *          inference event.</p>
   */
  Diagnostics?: string;

  /**
   * <p> Indicates the size of an inference event in seconds. </p>
   */
  EventDurationInSeconds?: number;
}

export interface ListInferenceEventsResponse {
  /**
   * <p>An opaque pagination token indicating where to continue the listing of inference
   *          executions. </p>
   */
  NextToken?: string;

  /**
   * <p>Provides an array of information about the individual inference events returned from the
   *             <code>ListInferenceEvents</code> operation, including scheduler used, event start time,
   *          event end time, diagnostics, and so on. </p>
   */
  InferenceEventSummaries?: InferenceEventSummary[];
}

export enum InferenceExecutionStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCESS = "SUCCESS",
}

export interface ListInferenceExecutionsRequest {
  /**
   * <p>An opaque pagination token indicating where to continue the listing of inference
   *          executions.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the maximum number of inference executions to list. </p>
   */
  MaxResults?: number;

  /**
   * <p>The name of the inference scheduler for the inference execution listed. </p>
   */
  InferenceSchedulerName: string | undefined;

  /**
   * <p>The time reference in the inferenced dataset after which Amazon Lookout for Equipment
   *          started the inference execution. </p>
   */
  DataStartTimeAfter?: Date;

  /**
   * <p>The time reference in the inferenced dataset before which Amazon Lookout for Equipment
   *          stopped the inference execution. </p>
   */
  DataEndTimeBefore?: Date;

  /**
   * <p>The status of the inference execution. </p>
   */
  Status?: InferenceExecutionStatus | string;
}

/**
 * <p>Contains information about the specific inference execution, including input and output
 *          data configuration, inference scheduling information, status, and so on. </p>
 */
export interface InferenceExecutionSummary {
  /**
   * <p>The name of the ML model being used for the inference execution. </p>
   */
  ModelName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the ML model used for the inference execution. </p>
   */
  ModelArn?: string;

  /**
   * <p>The name of the inference scheduler being used for the inference execution. </p>
   */
  InferenceSchedulerName?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the inference scheduler being used for the inference
   *          execution. </p>
   */
  InferenceSchedulerArn?: string;

  /**
   * <p>Indicates the start time at which the inference scheduler began the specific inference
   *          execution. </p>
   */
  ScheduledStartTime?: Date;

  /**
   * <p>Indicates the time reference in the dataset at which the inference execution began.
   *       </p>
   */
  DataStartTime?: Date;

  /**
   * <p>Indicates the time reference in the dataset at which the inference execution stopped.
   *       </p>
   */
  DataEndTime?: Date;

  /**
   * <p> Specifies configuration information for the input data for the inference scheduler,
   *          including delimiter, format, and dataset location. </p>
   */
  DataInputConfiguration?: InferenceInputConfiguration;

  /**
   * <p> Specifies configuration information for the output results from for the inference
   *          execution, including the output Amazon S3 location.
   *       </p>
   */
  DataOutputConfiguration?: InferenceOutputConfiguration;

  /**
   * <p>
   *       </p>
   */
  CustomerResultObject?: S3Object;

  /**
   * <p>Indicates the status of the inference execution. </p>
   */
  Status?: InferenceExecutionStatus | string;

  /**
   * <p> Specifies the reason for failure when an inference execution has failed. </p>
   */
  FailedReason?: string;
}

export interface ListInferenceExecutionsResponse {
  /**
   * <p> An opaque pagination token indicating where to continue the listing of inference
   *          executions. </p>
   */
  NextToken?: string;

  /**
   * <p>Provides an array of information about the individual inference executions returned from
   *          the <code>ListInferenceExecutions</code> operation, including model used, inference
   *          scheduler, data configuration, and so on. </p>
   */
  InferenceExecutionSummaries?: InferenceExecutionSummary[];
}

export interface ListInferenceSchedulersRequest {
  /**
   * <p> An opaque pagination token indicating where to continue the listing of inference
   *          schedulers. </p>
   */
  NextToken?: string;

  /**
   * <p> Specifies the maximum number of inference schedulers to list. </p>
   */
  MaxResults?: number;

  /**
   * <p>The beginning of the name of the inference schedulers to be listed. </p>
   */
  InferenceSchedulerNameBeginsWith?: string;

  /**
   * <p>The name of the ML model used by the inference scheduler to be listed. </p>
   */
  ModelName?: string;

  /**
   * <p>Specifies the current status of the inference schedulers to list.</p>
   */
  Status?: InferenceSchedulerStatus | string;
}

/**
 * <p>Contains information about the specific inference scheduler, including data delay
 *          offset, model name and ARN, status, and so on. </p>
 */
export interface InferenceSchedulerSummary {
  /**
   * <p>The name of the ML model used for the inference scheduler. </p>
   */
  ModelName?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the ML model used by the inference scheduler. </p>
   */
  ModelArn?: string;

  /**
   * <p>The name of the inference scheduler. </p>
   */
  InferenceSchedulerName?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the inference scheduler. </p>
   */
  InferenceSchedulerArn?: string;

  /**
   * <p>Indicates the status of the inference scheduler. </p>
   */
  Status?: InferenceSchedulerStatus | string;

  /**
   * <p>A period of time (in minutes) by which inference on the data is delayed after the data
   *          starts. For instance, if an offset delay time of five minutes was selected, inference will
   *          not begin on the data until the first data measurement after the five minute mark. For
   *          example, if five minutes is selected, the inference scheduler will wake up at the
   *          configured frequency with the additional five minute delay time to check the customer S3
   *          bucket. The customer can upload data at the same frequency and they don't need to stop and
   *          restart the scheduler when uploading new data. </p>
   */
  DataDelayOffsetInMinutes?: number;

  /**
   * <p>How often data is uploaded to the source S3 bucket for the input data. This value is the
   *          length of time between data uploads. For instance, if you select 5 minutes, Amazon Lookout
   *          for Equipment will upload the real-time data to the source bucket once every 5 minutes.
   *          This frequency also determines how often Amazon Lookout for Equipment starts a scheduled
   *          inference on your data. In this example, it starts once every 5 minutes. </p>
   */
  DataUploadFrequency?: DataUploadFrequency | string;

  /**
   * <p>Indicates whether the latest execution for the inference scheduler was Anomalous
   *          (anomalous events found) or Normal (no anomalous events found).</p>
   */
  LatestInferenceResult?: LatestInferenceResult | string;
}

export interface ListInferenceSchedulersResponse {
  /**
   * <p> An opaque pagination token indicating where to continue the listing of inference
   *          schedulers. </p>
   */
  NextToken?: string;

  /**
   * <p>Provides information about the specified inference scheduler, including data upload
   *          frequency, model name and ARN, and status. </p>
   */
  InferenceSchedulerSummaries?: InferenceSchedulerSummary[];
}

export interface ListLabelGroupsRequest {
  /**
   * <p>
   * The beginning of the name of the label groups to be listed.
   * </p>
   */
  LabelGroupNameBeginsWith?: string;

  /**
   * <p>
   * An opaque pagination token indicating where to continue the listing of label groups.
   * </p>
   */
  NextToken?: string;

  /**
   * <p>
   * Specifies the maximum number of label groups to list.
   * </p>
   */
  MaxResults?: number;
}

/**
 * <p>
 * Contains information about the label group.
 * </p>
 */
export interface LabelGroupSummary {
  /**
   * <p>
   * The name of the label group.
   * </p>
   */
  LabelGroupName?: string;

  /**
   * <p>
   * The ARN of the label group.
   * </p>
   */
  LabelGroupArn?: string;

  /**
   * <p>
   * The time at which the label group was created.
   * </p>
   */
  CreatedAt?: Date;

  /**
   * <p>
   * The time at which the label group was updated.
   * </p>
   */
  UpdatedAt?: Date;
}

export interface ListLabelGroupsResponse {
  /**
   * <p>
   * An opaque pagination token indicating where to continue the listing of label groups.
   * </p>
   */
  NextToken?: string;

  /**
   * <p>
   * A summary of the label groups.
   * </p>
   */
  LabelGroupSummaries?: LabelGroupSummary[];
}

export interface ListLabelsRequest {
  /**
   * <p>
   * Retruns the name of the label group.
   * </p>
   */
  LabelGroupName: string | undefined;

  /**
   * <p>
   * Returns all the labels with a end time equal to or later than the start time given.
   * </p>
   */
  IntervalStartTime?: Date;

  /**
   * <p>
   * Returns all labels with a start time earlier than the end time given.
   * </p>
   */
  IntervalEndTime?: Date;

  /**
   * <p>
   * Returns labels with a particular fault code.
   * </p>
   */
  FaultCode?: string;

  /**
   * <p>
   * Lists the labels that pertain to a particular piece of equipment.
   * </p>
   */
  Equipment?: string;

  /**
   * <p>
   * An opaque pagination token indicating where to continue the listing of label groups.
   * </p>
   */
  NextToken?: string;

  /**
   * <p>
   * Specifies the maximum number of labels to list.
   * </p>
   */
  MaxResults?: number;
}

/**
 * <p>
 * Information about the label.
 * </p>
 */
export interface LabelSummary {
  /**
   * <p>
   * The name of the label group.
   * </p>
   */
  LabelGroupName?: string;

  /**
   * <p>
   * The ID of the label.
   * </p>
   */
  LabelId?: string;

  /**
   * <p>
   * The ARN of the label group.
   * </p>
   */
  LabelGroupArn?: string;

  /**
   * <p>
   * The timestamp indicating the start of the label.
   * </p>
   */
  StartTime?: Date;

  /**
   * <p>
   * The timestamp indicating the end of the label.
   * </p>
   */
  EndTime?: Date;

  /**
   * <p>
   * Indicates whether a labeled event represents an anomaly.
   * </p>
   */
  Rating?: LabelRating | string;

  /**
   * <p>
   * Indicates the type of anomaly associated with the label.
   * </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the security of your data.</p>
   */
  FaultCode?: string;

  /**
   * <p>
   * Indicates that a label pertains to a particular piece of equipment.
   * </p>
   */
  Equipment?: string;

  /**
   * <p>
   * The time at which the label was created.
   * </p>
   */
  CreatedAt?: Date;
}

export interface ListLabelsResponse {
  /**
   * <p>
   * An opaque pagination token indicating where to continue the listing of datasets.
   * </p>
   */
  NextToken?: string;

  /**
   * <p>
   * A summary of the items in the label group.
   * </p>
   */
  LabelSummaries?: LabelSummary[];
}

export interface ListModelsRequest {
  /**
   * <p> An opaque pagination token indicating where to continue the listing of ML models.
   *       </p>
   */
  NextToken?: string;

  /**
   * <p> Specifies the maximum number of ML models to list. </p>
   */
  MaxResults?: number;

  /**
   * <p>The status of the ML model. </p>
   */
  Status?: ModelStatus | string;

  /**
   * <p>The beginning of the name of the ML models being listed. </p>
   */
  ModelNameBeginsWith?: string;

  /**
   * <p>The beginning of the name of the dataset of the ML models to be listed. </p>
   */
  DatasetNameBeginsWith?: string;
}

/**
 * <p>Provides information about the specified ML model, including dataset and model names and
 *          ARNs, as well as status. </p>
 */
export interface ModelSummary {
  /**
   * <p>The name of the ML model. </p>
   */
  ModelName?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the ML model. </p>
   */
  ModelArn?: string;

  /**
   * <p>The name of the dataset being used for the ML model. </p>
   */
  DatasetName?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the dataset used to create the model. </p>
   */
  DatasetArn?: string;

  /**
   * <p>Indicates the status of the ML model. </p>
   */
  Status?: ModelStatus | string;

  /**
   * <p>The time at which the specific model was created. </p>
   */
  CreatedAt?: Date;
}

export interface ListModelsResponse {
  /**
   * <p> An opaque pagination token indicating where to continue the listing of ML models.
   *       </p>
   */
  NextToken?: string;

  /**
   * <p>Provides information on the specified model, including created time, model and dataset
   *          ARNs, and status. </p>
   */
  ModelSummaries?: ModelSummary[];
}

export interface ListSensorStatisticsRequest {
  /**
   * <p> The name of the dataset associated with the list of Sensor Statistics. </p>
   */
  DatasetName: string | undefined;

  /**
   * <p> The ingestion job id associated with the list of Sensor Statistics. To get sensor
   *          statistics for a particular ingestion job id, both dataset name and ingestion job id must
   *          be submitted as inputs. </p>
   */
  IngestionJobId?: string;

  /**
   * <p>Specifies the maximum number of sensors for which to retrieve statistics. </p>
   */
  MaxResults?: number;

  /**
   * <p>An opaque pagination token indicating where to continue the listing of sensor
   *          statistics. </p>
   */
  NextToken?: string;
}

export enum StatisticalIssueStatus {
  NO_ISSUE_DETECTED = "NO_ISSUE_DETECTED",
  POTENTIAL_ISSUE_DETECTED = "POTENTIAL_ISSUE_DETECTED",
}

/**
 * <p> Entity that comprises information on categorical values in data. </p>
 */
export interface CategoricalValues {
  /**
   * <p> Indicates whether there is a potential data issue related to categorical values.
   *       </p>
   */
  Status: StatisticalIssueStatus | string | undefined;

  /**
   * <p> Indicates the number of categories in the data. </p>
   */
  NumberOfCategory?: number;
}

/**
 * <p> Entity that comprises information of count and percentage. </p>
 */
export interface CountPercent {
  /**
   * <p> Indicates the count of occurences of the given statistic. </p>
   */
  Count: number | undefined;

  /**
   * <p> Indicates the percentage of occurances of the given statistic. </p>
   */
  Percentage: number | undefined;
}

/**
 * <p> Entity that comprises information on large gaps between consecutive timestamps in data.
 *       </p>
 */
export interface LargeTimestampGaps {
  /**
   * <p> Indicates whether there is a potential data issue related to large gaps in timestamps.
   *       </p>
   */
  Status: StatisticalIssueStatus | string | undefined;

  /**
   * <p> Indicates the number of large timestamp gaps, if there are any. </p>
   */
  NumberOfLargeTimestampGaps?: number;

  /**
   * <p> Indicates the size of the largest timestamp gap, in days. </p>
   */
  MaxTimestampGapInDays?: number;
}

export enum Monotonicity {
  DECREASING = "DECREASING",
  INCREASING = "INCREASING",
  STATIC = "STATIC",
}

/**
 * <p> Entity that comprises information on monotonic values in the data. </p>
 */
export interface MonotonicValues {
  /**
   * <p> Indicates whether there is a potential data issue related to having monotonic values.
   *       </p>
   */
  Status: StatisticalIssueStatus | string | undefined;

  /**
   * <p> Indicates the monotonicity of values. Can be INCREASING, DECREASING, or STATIC. </p>
   */
  Monotonicity?: Monotonicity | string;
}

/**
 * <p> Entity that comprises information on operating modes in data. </p>
 */
export interface MultipleOperatingModes {
  /**
   * <p> Indicates whether there is a potential data issue related to having multiple operating
   *          modes. </p>
   */
  Status: StatisticalIssueStatus | string | undefined;
}

/**
 * <p> Summary of ingestion statistics like whether data exists, number of missing values,
 *          number of invalid values and so on related to the particular sensor. </p>
 */
export interface SensorStatisticsSummary {
  /**
   * <p> Name of the component to which the particular sensor belongs for which the statistics
   *          belong to. </p>
   */
  ComponentName?: string;

  /**
   * <p> Name of the sensor that the statistics belong to. </p>
   */
  SensorName?: string;

  /**
   * <p> Parameter that indicates whether data exists for the sensor that the statistics belong
   *          to. </p>
   */
  DataExists?: boolean;

  /**
   * <p> Parameter that describes the total number of, and percentage of, values that are
   *          missing for the sensor that the statistics belong to. </p>
   */
  MissingValues?: CountPercent;

  /**
   * <p> Parameter that describes the total number of, and percentage of, values that are
   *          invalid for the sensor that the statistics belong to. </p>
   */
  InvalidValues?: CountPercent;

  /**
   * <p> Parameter that describes the total number of invalid date entries associated with the
   *          sensor that the statistics belong to. </p>
   */
  InvalidDateEntries?: CountPercent;

  /**
   * <p> Parameter that describes the total number of duplicate timestamp records associated
   *          with the sensor that the statistics belong to. </p>
   */
  DuplicateTimestamps?: CountPercent;

  /**
   * <p> Parameter that describes potential risk about whether data associated with the sensor
   *          is categorical. </p>
   */
  CategoricalValues?: CategoricalValues;

  /**
   * <p> Parameter that describes potential risk about whether data associated with the sensor
   *          has more than one operating mode. </p>
   */
  MultipleOperatingModes?: MultipleOperatingModes;

  /**
   * <p> Parameter that describes potential risk about whether data associated with the sensor
   *          contains one or more large gaps between consecutive timestamps. </p>
   */
  LargeTimestampGaps?: LargeTimestampGaps;

  /**
   * <p> Parameter that describes potential risk about whether data associated with the sensor
   *          is mostly monotonic. </p>
   */
  MonotonicValues?: MonotonicValues;

  /**
   * <p> Indicates the time reference to indicate the beginning of valid data associated with
   *          the sensor that the statistics belong to. </p>
   */
  DataStartTime?: Date;

  /**
   * <p> Indicates the time reference to indicate the end of valid data associated with the
   *          sensor that the statistics belong to. </p>
   */
  DataEndTime?: Date;
}

export interface ListSensorStatisticsResponse {
  /**
   * <p>Provides ingestion-based statistics regarding the specified sensor with respect to
   *          various validation types, such as whether data exists, the number and percentage of missing
   *          values, and the number and percentage of duplicate timestamps. </p>
   */
  SensorStatisticsSummaries?: SensorStatisticsSummary[];

  /**
   * <p>An opaque pagination token indicating where to continue the listing of sensor
   *          statistics. </p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource (such as the dataset or model) that is
   *          the focus of the <code>ListTagsForResource</code> operation. </p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p> Any tags associated with the resource. </p>
   */
  Tags?: Tag[];
}

export interface StartDataIngestionJobRequest {
  /**
   * <p>The name of the dataset being used by the data ingestion job. </p>
   */
  DatasetName: string | undefined;

  /**
   * <p> Specifies information for the input data for the data ingestion job, including dataset
   *          S3 location. </p>
   */
  IngestionInputConfiguration: IngestionInputConfiguration | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of a role with permission to access the data source for
   *          the data ingestion job. </p>
   */
  RoleArn: string | undefined;

  /**
   * <p> A unique identifier for the request. If you do not set the client request token, Amazon
   *          Lookout for Equipment generates one. </p>
   */
  ClientToken?: string;
}

export interface StartDataIngestionJobResponse {
  /**
   * <p>Indicates the job ID of the data ingestion job. </p>
   */
  JobId?: string;

  /**
   * <p>Indicates the status of the <code>StartDataIngestionJob</code> operation. </p>
   */
  Status?: IngestionJobStatus | string;
}

export interface StartInferenceSchedulerRequest {
  /**
   * <p>The name of the inference scheduler to be started. </p>
   */
  InferenceSchedulerName: string | undefined;
}

export interface StartInferenceSchedulerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the ML model being used by the inference scheduler.
   *       </p>
   */
  ModelArn?: string;

  /**
   * <p>The name of the ML model being used by the inference scheduler. </p>
   */
  ModelName?: string;

  /**
   * <p>The name of the inference scheduler being started. </p>
   */
  InferenceSchedulerName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the inference scheduler being started. </p>
   */
  InferenceSchedulerArn?: string;

  /**
   * <p>Indicates the status of the inference scheduler. </p>
   */
  Status?: InferenceSchedulerStatus | string;
}

export interface StopInferenceSchedulerRequest {
  /**
   * <p>The name of the inference scheduler to be stopped. </p>
   */
  InferenceSchedulerName: string | undefined;
}

export interface StopInferenceSchedulerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the ML model used by the inference scheduler being
   *          stopped. </p>
   */
  ModelArn?: string;

  /**
   * <p>The name of the ML model used by the inference scheduler being stopped. </p>
   */
  ModelName?: string;

  /**
   * <p>The name of the inference scheduler being stopped. </p>
   */
  InferenceSchedulerName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the inference schedule being stopped. </p>
   */
  InferenceSchedulerArn?: string;

  /**
   * <p>Indicates the status of the inference scheduler. </p>
   */
  Status?: InferenceSchedulerStatus | string;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the specific resource to which the tag should be
   *          associated. </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag or tags to be associated with a specific resource. Both the tag key and value
   *          are specified. </p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which the tag is currently associated.
   *       </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies the key of the tag to be removed from a specified resource. </p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateInferenceSchedulerRequest {
  /**
   * <p>The name of the inference scheduler to be updated. </p>
   */
  InferenceSchedulerName: string | undefined;

  /**
   * <p> A period of time (in minutes) by which inference on the data is delayed after the data
   *          starts. For instance, if you select an offset delay time of five minutes, inference will
   *          not begin on the data until the first data measurement after the five minute mark. For
   *          example, if five minutes is selected, the inference scheduler will wake up at the
   *          configured frequency with the additional five minute delay time to check the customer S3
   *          bucket. The customer can upload data at the same frequency and they don't need to stop and
   *          restart the scheduler when uploading new data.</p>
   */
  DataDelayOffsetInMinutes?: number;

  /**
   * <p>How often data is uploaded to the source S3 bucket for the input data. The value chosen
   *          is the length of time between data uploads. For instance, if you select 5 minutes, Amazon
   *          Lookout for Equipment will upload the real-time data to the source bucket once every 5
   *          minutes. This frequency also determines how often Amazon Lookout for Equipment starts a
   *          scheduled inference on your data. In this example, it starts once every 5 minutes. </p>
   */
  DataUploadFrequency?: DataUploadFrequency | string;

  /**
   * <p> Specifies information for the input data for the inference scheduler, including
   *          delimiter, format, and dataset location. </p>
   */
  DataInputConfiguration?: InferenceInputConfiguration;

  /**
   * <p> Specifies information for the output results from the inference scheduler, including
   *          the output S3 location. </p>
   */
  DataOutputConfiguration?: InferenceOutputConfiguration;

  /**
   * <p> The Amazon Resource Name (ARN) of a role with permission to access the data source for
   *          the inference scheduler. </p>
   */
  RoleArn?: string;
}

export interface UpdateLabelGroupRequest {
  /**
   * <p>
   * The name of the label group to be updated.
   * </p>
   */
  LabelGroupName: string | undefined;

  /**
   * <p>
   * Updates the code indicating the type of anomaly associated with the label.
   * </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the security of your data.</p>
   */
  FaultCodes?: string[];
}

/**
 * @internal
 */
export const DatasetSchemaFilterSensitiveLog = (obj: DatasetSchema): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatasetRequestFilterSensitiveLog = (obj: CreateDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatasetResponseFilterSensitiveLog = (obj: CreateDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InferenceInputNameConfigurationFilterSensitiveLog = (obj: InferenceInputNameConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InferenceS3InputConfigurationFilterSensitiveLog = (obj: InferenceS3InputConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InferenceInputConfigurationFilterSensitiveLog = (obj: InferenceInputConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InferenceS3OutputConfigurationFilterSensitiveLog = (obj: InferenceS3OutputConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InferenceOutputConfigurationFilterSensitiveLog = (obj: InferenceOutputConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInferenceSchedulerRequestFilterSensitiveLog = (obj: CreateInferenceSchedulerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInferenceSchedulerResponseFilterSensitiveLog = (obj: CreateInferenceSchedulerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLabelRequestFilterSensitiveLog = (obj: CreateLabelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLabelResponseFilterSensitiveLog = (obj: CreateLabelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLabelGroupRequestFilterSensitiveLog = (obj: CreateLabelGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLabelGroupResponseFilterSensitiveLog = (obj: CreateLabelGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataPreProcessingConfigurationFilterSensitiveLog = (obj: DataPreProcessingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelsS3InputConfigurationFilterSensitiveLog = (obj: LabelsS3InputConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelsInputConfigurationFilterSensitiveLog = (obj: LabelsInputConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateModelRequestFilterSensitiveLog = (obj: CreateModelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateModelResponseFilterSensitiveLog = (obj: CreateModelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatasetRequestFilterSensitiveLog = (obj: DeleteDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInferenceSchedulerRequestFilterSensitiveLog = (obj: DeleteInferenceSchedulerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLabelRequestFilterSensitiveLog = (obj: DeleteLabelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLabelGroupRequestFilterSensitiveLog = (obj: DeleteLabelGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteModelRequestFilterSensitiveLog = (obj: DeleteModelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDataIngestionJobRequestFilterSensitiveLog = (obj: DescribeDataIngestionJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DuplicateTimestampsFilterSensitiveLog = (obj: DuplicateTimestamps): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MissingCompleteSensorDataFilterSensitiveLog = (obj: MissingCompleteSensorData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SensorsWithShortDateRangeFilterSensitiveLog = (obj: SensorsWithShortDateRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InsufficientSensorDataFilterSensitiveLog = (obj: InsufficientSensorData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InvalidSensorDataFilterSensitiveLog = (obj: InvalidSensorData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MissingSensorDataFilterSensitiveLog = (obj: MissingSensorData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnsupportedTimestampsFilterSensitiveLog = (obj: UnsupportedTimestamps): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataQualitySummaryFilterSensitiveLog = (obj: DataQualitySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ObjectFilterSensitiveLog = (obj: S3Object): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IngestedFilesSummaryFilterSensitiveLog = (obj: IngestedFilesSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IngestionS3InputConfigurationFilterSensitiveLog = (obj: IngestionS3InputConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IngestionInputConfigurationFilterSensitiveLog = (obj: IngestionInputConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDataIngestionJobResponseFilterSensitiveLog = (obj: DescribeDataIngestionJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDatasetRequestFilterSensitiveLog = (obj: DescribeDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDatasetResponseFilterSensitiveLog = (obj: DescribeDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInferenceSchedulerRequestFilterSensitiveLog = (obj: DescribeInferenceSchedulerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInferenceSchedulerResponseFilterSensitiveLog = (obj: DescribeInferenceSchedulerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLabelRequestFilterSensitiveLog = (obj: DescribeLabelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLabelResponseFilterSensitiveLog = (obj: DescribeLabelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLabelGroupRequestFilterSensitiveLog = (obj: DescribeLabelGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLabelGroupResponseFilterSensitiveLog = (obj: DescribeLabelGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeModelRequestFilterSensitiveLog = (obj: DescribeModelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeModelResponseFilterSensitiveLog = (obj: DescribeModelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataIngestionJobsRequestFilterSensitiveLog = (obj: ListDataIngestionJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataIngestionJobSummaryFilterSensitiveLog = (obj: DataIngestionJobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataIngestionJobsResponseFilterSensitiveLog = (obj: ListDataIngestionJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetsRequestFilterSensitiveLog = (obj: ListDatasetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetSummaryFilterSensitiveLog = (obj: DatasetSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetsResponseFilterSensitiveLog = (obj: ListDatasetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInferenceEventsRequestFilterSensitiveLog = (obj: ListInferenceEventsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InferenceEventSummaryFilterSensitiveLog = (obj: InferenceEventSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInferenceEventsResponseFilterSensitiveLog = (obj: ListInferenceEventsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInferenceExecutionsRequestFilterSensitiveLog = (obj: ListInferenceExecutionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InferenceExecutionSummaryFilterSensitiveLog = (obj: InferenceExecutionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInferenceExecutionsResponseFilterSensitiveLog = (obj: ListInferenceExecutionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInferenceSchedulersRequestFilterSensitiveLog = (obj: ListInferenceSchedulersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InferenceSchedulerSummaryFilterSensitiveLog = (obj: InferenceSchedulerSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInferenceSchedulersResponseFilterSensitiveLog = (obj: ListInferenceSchedulersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLabelGroupsRequestFilterSensitiveLog = (obj: ListLabelGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelGroupSummaryFilterSensitiveLog = (obj: LabelGroupSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLabelGroupsResponseFilterSensitiveLog = (obj: ListLabelGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLabelsRequestFilterSensitiveLog = (obj: ListLabelsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LabelSummaryFilterSensitiveLog = (obj: LabelSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLabelsResponseFilterSensitiveLog = (obj: ListLabelsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelsRequestFilterSensitiveLog = (obj: ListModelsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModelSummaryFilterSensitiveLog = (obj: ModelSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListModelsResponseFilterSensitiveLog = (obj: ListModelsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSensorStatisticsRequestFilterSensitiveLog = (obj: ListSensorStatisticsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CategoricalValuesFilterSensitiveLog = (obj: CategoricalValues): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CountPercentFilterSensitiveLog = (obj: CountPercent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LargeTimestampGapsFilterSensitiveLog = (obj: LargeTimestampGaps): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonotonicValuesFilterSensitiveLog = (obj: MonotonicValues): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultipleOperatingModesFilterSensitiveLog = (obj: MultipleOperatingModes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SensorStatisticsSummaryFilterSensitiveLog = (obj: SensorStatisticsSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSensorStatisticsResponseFilterSensitiveLog = (obj: ListSensorStatisticsResponse): any => ({
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
export const StartDataIngestionJobRequestFilterSensitiveLog = (obj: StartDataIngestionJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartDataIngestionJobResponseFilterSensitiveLog = (obj: StartDataIngestionJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartInferenceSchedulerRequestFilterSensitiveLog = (obj: StartInferenceSchedulerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartInferenceSchedulerResponseFilterSensitiveLog = (obj: StartInferenceSchedulerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopInferenceSchedulerRequestFilterSensitiveLog = (obj: StopInferenceSchedulerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopInferenceSchedulerResponseFilterSensitiveLog = (obj: StopInferenceSchedulerResponse): any => ({
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

/**
 * @internal
 */
export const UpdateInferenceSchedulerRequestFilterSensitiveLog = (obj: UpdateInferenceSchedulerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLabelGroupRequestFilterSensitiveLog = (obj: UpdateLabelGroupRequest): any => ({
  ...obj,
});
