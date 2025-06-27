// smithy-typescript generated code
import {
  AutomaticJsonStringConversion as __AutomaticJsonStringConversion,
  ExceptionOptionType as __ExceptionOptionType,
} from "@smithy/smithy-client";

import { LookoutEquipmentServiceException as __BaseException } from "./LookoutEquipmentServiceException";

/**
 * <p>The request could not be completed because you do not have access to the resource.
 *       </p>
 * @public
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
 * @public
 * @enum
 */
export const AutoPromotionResult = {
  MODEL_NOT_PROMOTED: "MODEL_NOT_PROMOTED",
  MODEL_PROMOTED: "MODEL_PROMOTED",
  RETRAINING_CANCELLED: "RETRAINING_CANCELLED",
  RETRAINING_CUSTOMER_ERROR: "RETRAINING_CUSTOMER_ERROR",
  RETRAINING_INTERNAL_ERROR: "RETRAINING_INTERNAL_ERROR",
} as const;

/**
 * @public
 */
export type AutoPromotionResult = (typeof AutoPromotionResult)[keyof typeof AutoPromotionResult];

/**
 * <p> The request could not be completed due to a conflict with the current state of the
 *          target resource. </p>
 * @public
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
 * @public
 */
export interface DatasetSchema {
  /**
   * <p>The data schema used within the given dataset.</p>
   * @public
   */
  InlineDataSchema?: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * <p>A tag is a key-value pair that can be added to a resource as metadata. </p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key for the specified tag. </p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value for the specified tag. </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateDatasetRequest {
  /**
   * <p>The name of the dataset being created. </p>
   * @public
   */
  DatasetName: string | undefined;

  /**
   * <p>A JSON description of the data that is in each time series dataset, including names,
   *          column names, and data types. </p>
   * @public
   */
  DatasetSchema?: DatasetSchema | undefined;

  /**
   * <p>Provides the identifier of the KMS key used to encrypt dataset data by Amazon Lookout
   *          for Equipment. </p>
   * @public
   */
  ServerSideKmsKeyId?: string | undefined;

  /**
   * <p> A unique identifier for the request. If you do not set the client request token, Amazon
   *          Lookout for Equipment generates one. </p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Any tags associated with the ingested data described in the dataset. </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DatasetStatus = {
  ACTIVE: "ACTIVE",
  CREATED: "CREATED",
  IMPORT_IN_PROGRESS: "IMPORT_IN_PROGRESS",
  INGESTION_IN_PROGRESS: "INGESTION_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type DatasetStatus = (typeof DatasetStatus)[keyof typeof DatasetStatus];

/**
 * @public
 */
export interface CreateDatasetResponse {
  /**
   * <p>The name of the dataset being created. </p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the dataset being created. </p>
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * <p>Indicates the status of the <code>CreateDataset</code> operation. </p>
   * @public
   */
  Status?: DatasetStatus | undefined;
}

/**
 * <p> Processing of the request has failed because of an unknown error, exception or failure.
 *       </p>
 * @public
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
 * @public
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
 * @public
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
 * <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services
 *          service that's being utilized. </p>
 * @public
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
 * @public
 */
export interface InferenceInputNameConfiguration {
  /**
   * <p>The format of the timestamp, whether Epoch time, or standard, with or without hyphens
   *          (-). </p>
   * @public
   */
  TimestampFormat?: string | undefined;

  /**
   * <p>Indicates the delimiter character used between items in the data. </p>
   * @public
   */
  ComponentTimestampDelimiter?: string | undefined;
}

/**
 * <p> Specifies configuration information for the input data for the inference, including
 *          input data S3 location. </p>
 * @public
 */
export interface InferenceS3InputConfiguration {
  /**
   * <p>The bucket containing the input dataset for the inference. </p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The prefix for the S3 bucket used for the input data for the inference. </p>
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * <p>Specifies configuration information for the input data for the inference, including
 *             Amazon S3 location of input data.. </p>
 * @public
 */
export interface InferenceInputConfiguration {
  /**
   * <p> Specifies configuration information for the input data for the inference, including
   *             Amazon S3 location of input data.</p>
   * @public
   */
  S3InputConfiguration?: InferenceS3InputConfiguration | undefined;

  /**
   * <p>Indicates the difference between your time zone and Coordinated Universal Time
   *          (UTC).</p>
   * @public
   */
  InputTimeZoneOffset?: string | undefined;

  /**
   * <p>Specifies configuration information for the input data for the inference, including
   *          timestamp format and delimiter. </p>
   * @public
   */
  InferenceInputNameConfiguration?: InferenceInputNameConfiguration | undefined;
}

/**
 * <p> Specifies configuration information for the output results from the inference,
 *          including output S3 location. </p>
 * @public
 */
export interface InferenceS3OutputConfiguration {
  /**
   * <p> The bucket containing the output results from the inference </p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p> The prefix for the S3 bucket used for the output results from the inference. </p>
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * <p> Specifies configuration information for the output results from for the inference,
 *          including KMS key ID and output S3 location. </p>
 * @public
 */
export interface InferenceOutputConfiguration {
  /**
   * <p> Specifies configuration information for the output results from for the inference,
   *          output S3 location. </p>
   * @public
   */
  S3OutputConfiguration: InferenceS3OutputConfiguration | undefined;

  /**
   * <p>The ID number for the KMS key key used to encrypt the inference output. </p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DataUploadFrequency = {
  PT10M: "PT10M",
  PT15M: "PT15M",
  PT1H: "PT1H",
  PT30M: "PT30M",
  PT5M: "PT5M",
} as const;

/**
 * @public
 */
export type DataUploadFrequency = (typeof DataUploadFrequency)[keyof typeof DataUploadFrequency];

/**
 * @public
 */
export interface CreateInferenceSchedulerRequest {
  /**
   * <p>The name of the previously trained machine learning model being used to create the
   *          inference scheduler. </p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>The name of the inference scheduler being created. </p>
   * @public
   */
  InferenceSchedulerName: string | undefined;

  /**
   * <p>The interval (in minutes) of planned delay at the start of each inference segment. For
   *          example, if inference is set to run every ten minutes, the delay is set to five minutes and
   *          the time is 09:08. The inference scheduler will wake up at the configured interval (which,
   *          without a delay configured, would be 09:10) plus the additional five minute delay time (so
   *          09:15) to check your Amazon S3 bucket. The delay provides a buffer for you to upload data at the
   *          same frequency, so that you don't have to stop and restart the scheduler when uploading new
   *          data.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/understanding-inference-process.html">Understanding
   *             the inference process</a>.</p>
   * @public
   */
  DataDelayOffsetInMinutes?: number | undefined;

  /**
   * <p> How often data is uploaded to the source Amazon S3 bucket for the input data. The value
   *          chosen is the length of time between data uploads. For instance, if you select 5 minutes,
   *          Amazon Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This
   *          frequency also determines how often Amazon Lookout for Equipment runs inference on your data.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/understanding-inference-process.html">Understanding
   *             the inference process</a>.</p>
   * @public
   */
  DataUploadFrequency: DataUploadFrequency | undefined;

  /**
   * <p>Specifies configuration information for the input data for the inference scheduler,
   *          including delimiter, format, and dataset location. </p>
   * @public
   */
  DataInputConfiguration: InferenceInputConfiguration | undefined;

  /**
   * <p>Specifies configuration information for the output results for the inference scheduler,
   *          including the S3 location for the output. </p>
   * @public
   */
  DataOutputConfiguration: InferenceOutputConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a role with permission to access the data source being
   *          used for the inference. </p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>Provides the identifier of the KMS key used to encrypt inference scheduler data by
   *          Amazon Lookout for Equipment. </p>
   * @public
   */
  ServerSideKmsKeyId?: string | undefined;

  /**
   * <p> A unique identifier for the request. If you do not set the client request token, Amazon
   *          Lookout for Equipment generates one. </p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Any tags associated with the inference scheduler. </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelQuality = {
  CANNOT_DETERMINE_QUALITY: "CANNOT_DETERMINE_QUALITY",
  POOR_QUALITY_DETECTED: "POOR_QUALITY_DETECTED",
  QUALITY_THRESHOLD_MET: "QUALITY_THRESHOLD_MET",
} as const;

/**
 * @public
 */
export type ModelQuality = (typeof ModelQuality)[keyof typeof ModelQuality];

/**
 * @public
 * @enum
 */
export const InferenceSchedulerStatus = {
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type InferenceSchedulerStatus = (typeof InferenceSchedulerStatus)[keyof typeof InferenceSchedulerStatus];

/**
 * @public
 */
export interface CreateInferenceSchedulerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the inference scheduler being created. </p>
   * @public
   */
  InferenceSchedulerArn?: string | undefined;

  /**
   * <p>The name of inference scheduler being created. </p>
   * @public
   */
  InferenceSchedulerName?: string | undefined;

  /**
   * <p>Indicates the status of the <code>CreateInferenceScheduler</code> operation. </p>
   * @public
   */
  Status?: InferenceSchedulerStatus | undefined;

  /**
   * <p>Provides a quality assessment for a model that uses labels.
   *          If Lookout for Equipment determines that the
   *          model quality is poor based on training metrics, the value is
   *          <code>POOR_QUALITY_DETECTED</code>. Otherwise, the value is
   *          <code>QUALITY_THRESHOLD_MET</code>. </p>
   *          <p>If the model is unlabeled, the model quality can't
   *          be assessed and the value of <code>ModelQuality</code> is
   *          <code>CANNOT_DETERMINE_QUALITY</code>. In this situation, you can get a model quality
   *          assessment by adding labels to the input dataset and retraining the model.</p>
   *          <p>For information about using labels with your models, see <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/understanding-labeling.html">Understanding labeling</a>.</p>
   *          <p>For information about improving the quality of a model, see <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/best-practices.html">Best practices with
   *          Amazon Lookout for Equipment</a>.</p>
   * @public
   */
  ModelQuality?: ModelQuality | undefined;
}

/**
 * <p> The resource requested could not be found. Verify the resource ID and retry your
 *          request. </p>
 * @public
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

/**
 * @public
 * @enum
 */
export const LabelRating = {
  ANOMALY: "ANOMALY",
  NEUTRAL: "NEUTRAL",
  NO_ANOMALY: "NO_ANOMALY",
} as const;

/**
 * @public
 */
export type LabelRating = (typeof LabelRating)[keyof typeof LabelRating];

/**
 * @public
 */
export interface CreateLabelRequest {
  /**
   * <p> The name of a group of labels. </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data. </p>
   * @public
   */
  LabelGroupName: string | undefined;

  /**
   * <p> The start time of the labeled event. </p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p> The end time of the labeled event. </p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p> Indicates whether a labeled event represents an anomaly. </p>
   * @public
   */
  Rating: LabelRating | undefined;

  /**
   * <p> Provides additional information about the label. The fault code must be defined in the
   *          FaultCodes attribute of the label group.</p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data. </p>
   * @public
   */
  FaultCode?: string | undefined;

  /**
   * <p> Metadata providing additional information about the label. </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p> Indicates that a label pertains to a particular piece of equipment. </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data.</p>
   * @public
   */
  Equipment?: string | undefined;

  /**
   * <p> A unique identifier for the request to create a label. If you do not set the client
   *          request token, Lookout for Equipment generates one. </p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateLabelResponse {
  /**
   * <p> The ID of the label that you have created. </p>
   * @public
   */
  LabelId?: string | undefined;
}

/**
 * @public
 */
export interface CreateLabelGroupRequest {
  /**
   * <p> Names a group of labels.</p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data. </p>
   * @public
   */
  LabelGroupName: string | undefined;

  /**
   * <p> The acceptable fault codes (indicating the type of anomaly associated with the label)
   *          that can be used with this label group.</p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data.</p>
   * @public
   */
  FaultCodes?: string[] | undefined;

  /**
   * <p> A unique identifier for the request to create a label group. If you do not set the
   *          client request token, Lookout for Equipment generates one. </p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p> Tags that provide metadata about the label group you are creating. </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateLabelGroupResponse {
  /**
   * <p> The name of the label group that you have created. Data in this field will be retained
   *          for service usage. Follow best practices for the security of your data. </p>
   * @public
   */
  LabelGroupName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the label group that you have created. </p>
   * @public
   */
  LabelGroupArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TargetSamplingRate = {
  PT10M: "PT10M",
  PT10S: "PT10S",
  PT15M: "PT15M",
  PT15S: "PT15S",
  PT1H: "PT1H",
  PT1M: "PT1M",
  PT1S: "PT1S",
  PT30M: "PT30M",
  PT30S: "PT30S",
  PT5M: "PT5M",
  PT5S: "PT5S",
} as const;

/**
 * @public
 */
export type TargetSamplingRate = (typeof TargetSamplingRate)[keyof typeof TargetSamplingRate];

/**
 * <p>The configuration is the <code>TargetSamplingRate</code>, which is the sampling rate of
 *          the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been
 *          collected at a 1 second level and you want the system to resample the data at a 1 minute
 *          rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p>
 *          <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the
 *          prefix "PT" to the rate you want. The value for a 1 second rate is therefore
 *             <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>,
 *          and the value for a 1 hour rate is <i>PT1H</i>
 *          </p>
 * @public
 */
export interface DataPreProcessingConfiguration {
  /**
   * <p>The sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you
   *          provide data that has been collected at a 1 second level and you want the system to
   *          resample the data at a 1 minute rate before training, the <code>TargetSamplingRate</code>
   *          is 1 minute.</p>
   *          <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the
   *          prefix "PT" to the rate you want. The value for a 1 second rate is therefore
   *             <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>,
   *          and the value for a 1 hour rate is <i>PT1H</i>
   *          </p>
   * @public
   */
  TargetSamplingRate?: TargetSamplingRate | undefined;
}

/**
 * <p>The location information (prefix and bucket name) for the s3 location being used for
 *          label data. </p>
 * @public
 */
export interface LabelsS3InputConfiguration {
  /**
   * <p>The name of the S3 bucket holding the label data. </p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p> The prefix for the S3 bucket used for the label data. </p>
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * <p>Contains the configuration information for the S3 location being used to hold label
 *          data. </p>
 * @public
 */
export interface LabelsInputConfiguration {
  /**
   * <p>Contains location information for the S3 location being used for label data. </p>
   * @public
   */
  S3InputConfiguration?: LabelsS3InputConfiguration | undefined;

  /**
   * <p> The name of the label group to be used for label data. </p>
   * @public
   */
  LabelGroupName?: string | undefined;
}

/**
 * <p>The Amazon S3 location for the pointwise model diagnostics for an Amazon Lookout for Equipment model. </p>
 * @public
 */
export interface ModelDiagnosticsS3OutputConfiguration {
  /**
   * <p>The name of the Amazon S3 bucket where the pointwise model diagnostics are located. You must be the owner of the Amazon S3 bucket. </p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The Amazon S3 prefix for the location of the pointwise model diagnostics. The
   *          prefix specifies the folder and evaluation result file name.
   *          (<code>bucket</code>).</p>
   *          <p>When you call <code>CreateModel</code> or <code>UpdateModel</code>, specify the path
   *          within the bucket that you want Lookout for Equipment to save the model to. During training, Lookout for Equipment creates the model evaluation model
   *          as a compressed JSON file with the name <code>model_diagnostics_results.json.gz</code>.</p>
   *          <p>When you call <code>DescribeModel</code> or <code>DescribeModelVersion</code>, <code>prefix</code> contains
   *          the file path and filename of the model evaluation file. </p>
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * <p>Output configuration information for the pointwise model diagnostics for an Amazon Lookout for Equipment model.</p>
 * @public
 */
export interface ModelDiagnosticsOutputConfiguration {
  /**
   * <p>The Amazon S3 location for the pointwise model diagnostics. </p>
   * @public
   */
  S3OutputConfiguration: ModelDiagnosticsS3OutputConfiguration | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (KMS) key identifier to encrypt the pointwise model diagnostics files.</p>
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateModelRequest {
  /**
   * <p>The name for the machine learning model to be created.</p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>The name of the dataset for the machine learning model being created. </p>
   * @public
   */
  DatasetName: string | undefined;

  /**
   * <p>The data schema for the machine learning model being created. </p>
   * @public
   */
  DatasetSchema?: DatasetSchema | undefined;

  /**
   * <p>The input configuration for the labels being used for the machine learning model that's
   *          being created. </p>
   * @public
   */
  LabelsInputConfiguration?: LabelsInputConfiguration | undefined;

  /**
   * <p>A unique identifier for the request. If you do not set the client request token, Amazon
   *          Lookout for Equipment generates one. </p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Indicates the time reference in the dataset that should be used to begin the subset of
   *          training data for the machine learning model. </p>
   * @public
   */
  TrainingDataStartTime?: Date | undefined;

  /**
   * <p>Indicates the time reference in the dataset that should be used to end the subset of
   *          training data for the machine learning model. </p>
   * @public
   */
  TrainingDataEndTime?: Date | undefined;

  /**
   * <p>Indicates the time reference in the dataset that should be used to begin the subset of
   *          evaluation data for the machine learning model. </p>
   * @public
   */
  EvaluationDataStartTime?: Date | undefined;

  /**
   * <p> Indicates the time reference in the dataset that should be used to end the subset of
   *          evaluation data for the machine learning model. </p>
   * @public
   */
  EvaluationDataEndTime?: Date | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of a role with permission to access the data source
   *          being used to create the machine learning model. </p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The configuration is the <code>TargetSamplingRate</code>, which is the sampling rate of
   *          the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been
   *          collected at a 1 second level and you want the system to resample the data at a 1 minute
   *          rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p>
   *          <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the
   *          prefix "PT" to the rate you want. The value for a 1 second rate is therefore
   *             <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>,
   *          and the value for a 1 hour rate is <i>PT1H</i>
   *          </p>
   * @public
   */
  DataPreProcessingConfiguration?: DataPreProcessingConfiguration | undefined;

  /**
   * <p>Provides the identifier of the KMS key used to encrypt model data by Amazon Lookout
   *          for Equipment. </p>
   * @public
   */
  ServerSideKmsKeyId?: string | undefined;

  /**
   * <p> Any tags associated with the machine learning model being created. </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Indicates that the asset associated with this sensor has been shut off. As long as this
   *          condition is met, Lookout for Equipment will not use data from this asset for training,
   *          evaluation, or inference.</p>
   * @public
   */
  OffCondition?: string | undefined;

  /**
   * <p>The Amazon S3 location where you want Amazon Lookout for Equipment to save the pointwise model diagnostics.
   *
   *
   *       You must also specify the <code>RoleArn</code> request parameter.</p>
   * @public
   */
  ModelDiagnosticsOutputConfiguration?: ModelDiagnosticsOutputConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelStatus = {
  FAILED: "FAILED",
  IMPORT_IN_PROGRESS: "IMPORT_IN_PROGRESS",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type ModelStatus = (typeof ModelStatus)[keyof typeof ModelStatus];

/**
 * @public
 */
export interface CreateModelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model being created. </p>
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * <p>Indicates the status of the <code>CreateModel</code> operation. </p>
   * @public
   */
  Status?: ModelStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelPromoteMode = {
  MANAGED: "MANAGED",
  MANUAL: "MANUAL",
} as const;

/**
 * @public
 */
export type ModelPromoteMode = (typeof ModelPromoteMode)[keyof typeof ModelPromoteMode];

/**
 * @public
 */
export interface CreateRetrainingSchedulerRequest {
  /**
   * <p>The name of the model to add the retraining scheduler to. </p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>The start date for the retraining scheduler. Lookout for Equipment truncates the time you provide to the
   *          nearest UTC day.</p>
   * @public
   */
  RetrainingStartDate?: Date | undefined;

  /**
   * <p>This parameter uses the <a href="https://en.wikipedia.org/wiki/ISO_8601#Durations">ISO 8601</a> standard to set the frequency at which you want retraining to occur in
   *          terms of Years, Months, and/or Days (note: other parameters like Time are not currently
   *          supported). The minimum value is 30 days (P30D) and the maximum value is 1 year (P1Y). For
   *          example, the following values are valid:</p>
   *          <ul>
   *             <li>
   *                <p>P3M15D – Every 3 months and 15 days</p>
   *             </li>
   *             <li>
   *                <p>P2M – Every 2 months</p>
   *             </li>
   *             <li>
   *                <p>P150D – Every 150 days</p>
   *             </li>
   *          </ul>
   * @public
   */
  RetrainingFrequency: string | undefined;

  /**
   * <p>The number of past days of data that will be used for retraining.</p>
   * @public
   */
  LookbackWindow: string | undefined;

  /**
   * <p>Indicates how the service will use new models. In <code>MANAGED</code> mode, new models
   *          will automatically be used for inference if they have better performance than the current
   *          model. In <code>MANUAL</code> mode, the new models will not be used <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/versioning-model.html#model-activation">until they
   *             are manually activated</a>.</p>
   * @public
   */
  PromoteMode?: ModelPromoteMode | undefined;

  /**
   * <p>A unique identifier for the request. If you do not set the client request token, Amazon
   *          Lookout for Equipment generates one. </p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RetrainingSchedulerStatus = {
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type RetrainingSchedulerStatus = (typeof RetrainingSchedulerStatus)[keyof typeof RetrainingSchedulerStatus];

/**
 * @public
 */
export interface CreateRetrainingSchedulerResponse {
  /**
   * <p>The name of the model that you added the retraining scheduler to. </p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>The ARN of the model that you added the retraining scheduler to. </p>
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * <p>The status of the retraining scheduler. </p>
   * @public
   */
  Status?: RetrainingSchedulerStatus | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetRequest {
  /**
   * <p>The name of the dataset to be deleted. </p>
   * @public
   */
  DatasetName: string | undefined;
}

/**
 * @public
 */
export interface DeleteInferenceSchedulerRequest {
  /**
   * <p>The name of the inference scheduler to be deleted. </p>
   * @public
   */
  InferenceSchedulerName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLabelRequest {
  /**
   * <p> The name of the label group that contains the label that you want to delete. Data in
   *          this field will be retained for service usage. Follow best practices for the security of
   *          your data. </p>
   * @public
   */
  LabelGroupName: string | undefined;

  /**
   * <p> The ID of the label that you want to delete. </p>
   * @public
   */
  LabelId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLabelGroupRequest {
  /**
   * <p> The name of the label group that you want to delete. Data in this field will be
   *          retained for service usage. Follow best practices for the security of your data. </p>
   * @public
   */
  LabelGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelRequest {
  /**
   * <p>The name of the machine learning model to be deleted. </p>
   * @public
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which the resource policy should be
   *          deleted.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRetrainingSchedulerRequest {
  /**
   * <p>The name of the model whose retraining scheduler you want to delete. </p>
   * @public
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataIngestionJobRequest {
  /**
   * <p>The job ID of the data ingestion job. </p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p> Entity that comprises information abount duplicate timestamps in the dataset. </p>
 * @public
 */
export interface DuplicateTimestamps {
  /**
   * <p> Indicates the total number of duplicate timestamps. </p>
   * @public
   */
  TotalNumberOfDuplicateTimestamps: number | undefined;
}

/**
 * <p> Entity that comprises information on sensors that have sensor data completely missing.
 *       </p>
 * @public
 */
export interface MissingCompleteSensorData {
  /**
   * <p> Indicates the number of sensors that have data missing completely. </p>
   * @public
   */
  AffectedSensorCount: number | undefined;
}

/**
 * <p> Entity that comprises information on sensors that have shorter date range. </p>
 * @public
 */
export interface SensorsWithShortDateRange {
  /**
   * <p> Indicates the number of sensors that have less than 14 days of data. </p>
   * @public
   */
  AffectedSensorCount: number | undefined;
}

/**
 * <p> Entity that comprises aggregated information on sensors having insufficient data.
 *       </p>
 * @public
 */
export interface InsufficientSensorData {
  /**
   * <p> Parameter that describes the total number of sensors that have data completely missing
   *          for it. </p>
   * @public
   */
  MissingCompleteSensorData: MissingCompleteSensorData | undefined;

  /**
   * <p> Parameter that describes the total number of sensors that have a short date range of
   *          less than 14 days of data overall. </p>
   * @public
   */
  SensorsWithShortDateRange: SensorsWithShortDateRange | undefined;
}

/**
 * <p> Entity that comprises aggregated information on sensors having insufficient data.
 *       </p>
 * @public
 */
export interface InvalidSensorData {
  /**
   * <p> Indicates the number of sensors that have at least some invalid values. </p>
   * @public
   */
  AffectedSensorCount: number | undefined;

  /**
   * <p> Indicates the total number of invalid values across all the sensors. </p>
   * @public
   */
  TotalNumberOfInvalidValues: number | undefined;
}

/**
 * <p> Entity that comprises aggregated information on sensors having missing data. </p>
 * @public
 */
export interface MissingSensorData {
  /**
   * <p> Indicates the number of sensors that have atleast some data missing. </p>
   * @public
   */
  AffectedSensorCount: number | undefined;

  /**
   * <p> Indicates the total number of missing values across all the sensors. </p>
   * @public
   */
  TotalNumberOfMissingValues: number | undefined;
}

/**
 * <p> Entity that comprises information abount unsupported timestamps in the dataset. </p>
 * @public
 */
export interface UnsupportedTimestamps {
  /**
   * <p> Indicates the total number of unsupported timestamps across the ingested data. </p>
   * @public
   */
  TotalNumberOfUnsupportedTimestamps: number | undefined;
}

/**
 * <p> DataQualitySummary gives aggregated statistics over all the sensors about a completed
 *          ingestion job. It primarily gives more information about statistics over different
 *          incorrect data like MissingCompleteSensorData, MissingSensorData, UnsupportedDateFormats,
 *          InsufficientSensorData, DuplicateTimeStamps. </p>
 * @public
 */
export interface DataQualitySummary {
  /**
   * <p> Parameter that gives information about insufficient data for sensors in the dataset.
   *          This includes information about those sensors that have complete data missing and those
   *          with a short date range. </p>
   * @public
   */
  InsufficientSensorData: InsufficientSensorData | undefined;

  /**
   * <p> Parameter that gives information about data that is missing over all the sensors in the
   *          input data. </p>
   * @public
   */
  MissingSensorData: MissingSensorData | undefined;

  /**
   * <p> Parameter that gives information about data that is invalid over all the sensors in the
   *          input data. </p>
   * @public
   */
  InvalidSensorData: InvalidSensorData | undefined;

  /**
   * <p> Parameter that gives information about unsupported timestamps in the input data.
   *       </p>
   * @public
   */
  UnsupportedTimestamps: UnsupportedTimestamps | undefined;

  /**
   * <p> Parameter that gives information about duplicate timestamps in the input data. </p>
   * @public
   */
  DuplicateTimestamps: DuplicateTimestamps | undefined;
}

/**
 * <p>Contains information about an S3 bucket. </p>
 * @public
 */
export interface S3Object {
  /**
   * <p>The name of the specific S3 bucket. </p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The Amazon Web Services Key Management Service (KMS key) key being used to encrypt the S3 object.
   *          Without this key, data in the bucket is not accessible. </p>
   * @public
   */
  Key: string | undefined;
}

/**
 * <p>Gives statistics about how many files have been ingested, and which files have not been
 *          ingested, for a particular ingestion job.</p>
 * @public
 */
export interface IngestedFilesSummary {
  /**
   * <p>Indicates the total number of files that were submitted for ingestion.</p>
   * @public
   */
  TotalNumberOfFiles: number | undefined;

  /**
   * <p>Indicates the number of files that were successfully ingested.</p>
   * @public
   */
  IngestedNumberOfFiles: number | undefined;

  /**
   * <p>Indicates the number of files that were discarded. A file could be discarded because its
   *          format is invalid (for example, a jpg or pdf) or not readable.</p>
   * @public
   */
  DiscardedFiles?: S3Object[] | undefined;
}

/**
 * <p> Specifies S3 configuration information for the input data for the data ingestion job.
 *       </p>
 * @public
 */
export interface IngestionS3InputConfiguration {
  /**
   * <p>The name of the S3 bucket used for the input data for the data ingestion. </p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The prefix for the S3 location being used for the input data for the data ingestion.
   *       </p>
   * @public
   */
  Prefix?: string | undefined;

  /**
   * <p> The pattern for matching the Amazon S3 files that will be used for ingestion.
   *          If the schema was created previously without any KeyPattern, then the default KeyPattern
   *          \{prefix\}/\{component_name\}/* is used to download files from Amazon S3 according to
   *          the schema. This field is required when ingestion is being done for the first time.</p>
   *          <p>Valid Values: \{prefix\}/\{component_name\}_* | \{prefix\}/\{component_name\}/* |
   *          \{prefix\}/\{component_name\}[DELIMITER]* (Allowed delimiters : space, dot, underscore,
   *          hyphen)</p>
   * @public
   */
  KeyPattern?: string | undefined;
}

/**
 * <p> Specifies configuration information for the input data for the data ingestion job,
 *          including input data S3 location. </p>
 * @public
 */
export interface IngestionInputConfiguration {
  /**
   * <p>The location information for the S3 bucket used for input data for the data ingestion.
   *       </p>
   * @public
   */
  S3InputConfiguration: IngestionS3InputConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const IngestionJobStatus = {
  FAILED: "FAILED",
  IMPORT_IN_PROGRESS: "IMPORT_IN_PROGRESS",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type IngestionJobStatus = (typeof IngestionJobStatus)[keyof typeof IngestionJobStatus];

/**
 * @public
 */
export interface DescribeDataIngestionJobResponse {
  /**
   * <p>Indicates the job ID of the data ingestion job. </p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset being used in the data ingestion job.
   *       </p>
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * <p>Specifies the S3 location configuration for the data input for the data ingestion job.
   *       </p>
   * @public
   */
  IngestionInputConfiguration?: IngestionInputConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role with permission to access the data source
   *          being ingested. </p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The time at which the data ingestion job was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>Indicates the status of the <code>DataIngestionJob</code> operation. </p>
   * @public
   */
  Status?: IngestionJobStatus | undefined;

  /**
   * <p>Specifies the reason for failure when a data ingestion job has failed. </p>
   * @public
   */
  FailedReason?: string | undefined;

  /**
   * <p> Gives statistics about a completed ingestion job. These statistics primarily relate to
   *          quantifying incorrect data such as MissingCompleteSensorData, MissingSensorData,
   *          UnsupportedDateFormats, InsufficientSensorData, and DuplicateTimeStamps. </p>
   * @public
   */
  DataQualitySummary?: DataQualitySummary | undefined;

  /**
   * <p>Gives statistics about how many files have been ingested, and which files have not been
   *          ingested, for a particular ingestion job.</p>
   * @public
   */
  IngestedFilesSummary?: IngestedFilesSummary | undefined;

  /**
   * <p> Provides details about status of the ingestion job that is currently in progress.
   *       </p>
   * @public
   */
  StatusDetail?: string | undefined;

  /**
   * <p> Indicates the size of the ingested dataset. </p>
   * @public
   */
  IngestedDataSize?: number | undefined;

  /**
   * <p> Indicates the earliest timestamp corresponding to data that was successfully ingested
   *          during this specific ingestion job. </p>
   * @public
   */
  DataStartTime?: Date | undefined;

  /**
   * <p> Indicates the latest timestamp corresponding to data that was successfully ingested
   *          during this specific ingestion job. </p>
   * @public
   */
  DataEndTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source dataset from which the data used for the
   *          data ingestion job was imported from.</p>
   * @public
   */
  SourceDatasetArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetRequest {
  /**
   * <p>The name of the dataset to be described. </p>
   * @public
   */
  DatasetName: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetResponse {
  /**
   * <p>The name of the dataset being described. </p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset being described. </p>
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * <p>Specifies the time the dataset was created in Lookout for Equipment. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>Specifies the time the dataset was last updated, if it was. </p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>Indicates the status of the dataset. </p>
   * @public
   */
  Status?: DatasetStatus | undefined;

  /**
   * <p>A JSON description of the data that is in each time series dataset, including names,
   *          column names, and data types. </p>
   * @public
   */
  Schema?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * <p>Provides the identifier of the KMS key used to encrypt dataset data by Amazon Lookout
   *          for Equipment. </p>
   * @public
   */
  ServerSideKmsKeyId?: string | undefined;

  /**
   * <p>Specifies the S3 location configuration for the data input for the data ingestion job.
   *       </p>
   * @public
   */
  IngestionInputConfiguration?: IngestionInputConfiguration | undefined;

  /**
   * <p> Gives statistics associated with the given dataset for the latest successful associated
   *          ingestion job id. These statistics primarily relate to quantifying incorrect data such as
   *          MissingCompleteSensorData, MissingSensorData, UnsupportedDateFormats,
   *          InsufficientSensorData, and DuplicateTimeStamps. </p>
   * @public
   */
  DataQualitySummary?: DataQualitySummary | undefined;

  /**
   * <p>IngestedFilesSummary associated with the given dataset for the latest successful
   *          associated ingestion job id. </p>
   * @public
   */
  IngestedFilesSummary?: IngestedFilesSummary | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM role that you are using for this the data
   *          ingestion job. </p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p> Indicates the earliest timestamp corresponding to data that was successfully ingested
   *          during the most recent ingestion of this particular dataset. </p>
   * @public
   */
  DataStartTime?: Date | undefined;

  /**
   * <p> Indicates the latest timestamp corresponding to data that was successfully ingested
   *          during the most recent ingestion of this particular dataset. </p>
   * @public
   */
  DataEndTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source dataset from which the current data being
   *          described was imported from.</p>
   * @public
   */
  SourceDatasetArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInferenceSchedulerRequest {
  /**
   * <p>The name of the inference scheduler being described. </p>
   * @public
   */
  InferenceSchedulerName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LatestInferenceResult = {
  ANOMALOUS: "ANOMALOUS",
  NORMAL: "NORMAL",
} as const;

/**
 * @public
 */
export type LatestInferenceResult = (typeof LatestInferenceResult)[keyof typeof LatestInferenceResult];

/**
 * @public
 */
export interface DescribeInferenceSchedulerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the machine learning model of the inference scheduler
   *          being described. </p>
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * <p>The name of the machine learning model of the inference scheduler being described.
   *       </p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>The name of the inference scheduler being described. </p>
   * @public
   */
  InferenceSchedulerName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the inference scheduler being described. </p>
   * @public
   */
  InferenceSchedulerArn?: string | undefined;

  /**
   * <p>Indicates the status of the inference scheduler. </p>
   * @public
   */
  Status?: InferenceSchedulerStatus | undefined;

  /**
   * <p> A period of time (in minutes) by which inference on the data is delayed after the data
   *          starts. For instance, if you select an offset delay time of five minutes, inference will
   *          not begin on the data until the first data measurement after the five minute mark. For
   *          example, if five minutes is selected, the inference scheduler will wake up at the
   *          configured frequency with the additional five minute delay time to check the customer S3
   *          bucket. The customer can upload data at the same frequency and they don't need to stop and
   *          restart the scheduler when uploading new data.</p>
   * @public
   */
  DataDelayOffsetInMinutes?: number | undefined;

  /**
   * <p>Specifies how often data is uploaded to the source S3 bucket for the input data. This
   *          value is the length of time between data uploads. For instance, if you select 5 minutes,
   *          Amazon Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This
   *          frequency also determines how often Amazon Lookout for Equipment starts a scheduled inference on your data. In
   *          this example, it starts once every 5 minutes. </p>
   * @public
   */
  DataUploadFrequency?: DataUploadFrequency | undefined;

  /**
   * <p>Specifies the time at which the inference scheduler was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>Specifies the time at which the inference scheduler was last updated, if it was. </p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p> Specifies configuration information for the input data for the inference scheduler,
   *          including delimiter, format, and dataset location. </p>
   * @public
   */
  DataInputConfiguration?: InferenceInputConfiguration | undefined;

  /**
   * <p> Specifies information for the output results for the inference scheduler, including
   *          the output S3 location. </p>
   * @public
   */
  DataOutputConfiguration?: InferenceOutputConfiguration | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of a role with permission to access the data source for
   *          the inference scheduler being described. </p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>Provides the identifier of the KMS key used to encrypt inference scheduler data by
   *          Amazon Lookout for Equipment. </p>
   * @public
   */
  ServerSideKmsKeyId?: string | undefined;

  /**
   * <p>Indicates whether the latest execution for the inference scheduler was Anomalous
   *          (anomalous events found) or Normal (no anomalous events found).</p>
   * @public
   */
  LatestInferenceResult?: LatestInferenceResult | undefined;
}

/**
 * @public
 */
export interface DescribeLabelRequest {
  /**
   * <p> Returns the name of the group containing the label. </p>
   * @public
   */
  LabelGroupName: string | undefined;

  /**
   * <p> Returns the ID of the label. </p>
   * @public
   */
  LabelId: string | undefined;
}

/**
 * @public
 */
export interface DescribeLabelResponse {
  /**
   * <p> The name of the requested label group. </p>
   * @public
   */
  LabelGroupName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the requested label group. </p>
   * @public
   */
  LabelGroupArn?: string | undefined;

  /**
   * <p> The ID of the requested label. </p>
   * @public
   */
  LabelId?: string | undefined;

  /**
   * <p> The start time of the requested label. </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p> The end time of the requested label. </p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p> Indicates whether a labeled event represents an anomaly. </p>
   * @public
   */
  Rating?: LabelRating | undefined;

  /**
   * <p> Indicates the type of anomaly associated with the label. </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data.</p>
   * @public
   */
  FaultCode?: string | undefined;

  /**
   * <p>Metadata providing additional information about the label.</p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data.</p>
   * @public
   */
  Notes?: string | undefined;

  /**
   * <p> Indicates that a label pertains to a particular piece of equipment. </p>
   * @public
   */
  Equipment?: string | undefined;

  /**
   * <p> The time at which the label was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeLabelGroupRequest {
  /**
   * <p> Returns the name of the label group. </p>
   * @public
   */
  LabelGroupName: string | undefined;
}

/**
 * @public
 */
export interface DescribeLabelGroupResponse {
  /**
   * <p> The name of the label group. </p>
   * @public
   */
  LabelGroupName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the label group. </p>
   * @public
   */
  LabelGroupArn?: string | undefined;

  /**
   * <p> Codes indicating the type of anomaly associated with the labels in the lagbel group.
   *       </p>
   * @public
   */
  FaultCodes?: string[] | undefined;

  /**
   * <p> The time at which the label group was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p> The time at which the label group was updated. </p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeModelRequest {
  /**
   * <p>The name of the machine learning model to be described. </p>
   * @public
   */
  ModelName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelVersionStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IMPORT_IN_PROGRESS: "IMPORT_IN_PROGRESS",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type ModelVersionStatus = (typeof ModelVersionStatus)[keyof typeof ModelVersionStatus];

/**
 * @public
 */
export interface DescribeModelResponse {
  /**
   * <p>The name of the machine learning model being described. </p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the machine learning model being described. </p>
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * <p>The name of the dataset being used by the machine learning being described. </p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>The Amazon Resouce Name (ARN) of the dataset used to create the machine learning model
   *          being described. </p>
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * <p>A JSON description of the data that is in each time series dataset, including names,
   *          column names, and data types. </p>
   * @public
   */
  Schema?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * <p>Specifies configuration information about the labels input, including its S3 location.
   *       </p>
   * @public
   */
  LabelsInputConfiguration?: LabelsInputConfiguration | undefined;

  /**
   * <p> Indicates the time reference in the dataset that was used to begin the subset of
   *          training data for the machine learning model. </p>
   * @public
   */
  TrainingDataStartTime?: Date | undefined;

  /**
   * <p> Indicates the time reference in the dataset that was used to end the subset of training
   *          data for the machine learning model. </p>
   * @public
   */
  TrainingDataEndTime?: Date | undefined;

  /**
   * <p> Indicates the time reference in the dataset that was used to begin the subset of
   *          evaluation data for the machine learning model. </p>
   * @public
   */
  EvaluationDataStartTime?: Date | undefined;

  /**
   * <p> Indicates the time reference in the dataset that was used to end the subset of
   *          evaluation data for the machine learning model. </p>
   * @public
   */
  EvaluationDataEndTime?: Date | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of a role with permission to access the data source for
   *          the machine learning model being described. </p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The configuration is the <code>TargetSamplingRate</code>, which is the sampling rate of
   *          the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been
   *          collected at a 1 second level and you want the system to resample the data at a 1 minute
   *          rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p>
   *          <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the
   *          prefix "PT" to the rate you want. The value for a 1 second rate is therefore
   *             <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>,
   *          and the value for a 1 hour rate is <i>PT1H</i>
   *          </p>
   * @public
   */
  DataPreProcessingConfiguration?: DataPreProcessingConfiguration | undefined;

  /**
   * <p>Specifies the current status of the model being described. Status describes the status
   *          of the most recent action of the model. </p>
   * @public
   */
  Status?: ModelStatus | undefined;

  /**
   * <p>Indicates the time at which the training of the machine learning model began. </p>
   * @public
   */
  TrainingExecutionStartTime?: Date | undefined;

  /**
   * <p>Indicates the time at which the training of the machine learning model was completed.
   *       </p>
   * @public
   */
  TrainingExecutionEndTime?: Date | undefined;

  /**
   * <p>If the training of the machine learning model failed, this indicates the reason for that
   *          failure. </p>
   * @public
   */
  FailedReason?: string | undefined;

  /**
   * <p>The Model Metrics show an aggregated summary of the model's performance within the
   *          evaluation time range. This is the JSON content of the metrics created when evaluating the
   *          model. </p>
   * @public
   */
  ModelMetrics?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * <p>Indicates the last time the machine learning model was updated. The type of update is
   *          not specified. </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>Indicates the time and date at which the machine learning model was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>Provides the identifier of the KMS key used to encrypt model data by Amazon Lookout
   *          for Equipment. </p>
   * @public
   */
  ServerSideKmsKeyId?: string | undefined;

  /**
   * <p>Indicates that the asset associated with this sensor has been shut off. As long as this
   *          condition is met, Lookout for Equipment will not use data from this asset for training, evaluation, or
   *          inference.</p>
   * @public
   */
  OffCondition?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source model version. This field appears if the
   *          active model version was imported.</p>
   * @public
   */
  SourceModelVersionArn?: string | undefined;

  /**
   * <p>The date and time when the import job was started. This field appears if the active
   *          model version was imported.</p>
   * @public
   */
  ImportJobStartTime?: Date | undefined;

  /**
   * <p>The date and time when the import job was completed. This field appears if the active
   *          model version was imported.</p>
   * @public
   */
  ImportJobEndTime?: Date | undefined;

  /**
   * <p>The name of the model version used by the inference schedular when running a scheduled
   *          inference execution.</p>
   * @public
   */
  ActiveModelVersion?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model version used by the inference scheduler when
   *          running a scheduled inference execution.</p>
   * @public
   */
  ActiveModelVersionArn?: string | undefined;

  /**
   * <p>The date the active model version was activated.</p>
   * @public
   */
  ModelVersionActivatedAt?: Date | undefined;

  /**
   * <p>The model version that was set as the active model version prior to the current active
   *          model version.</p>
   * @public
   */
  PreviousActiveModelVersion?: number | undefined;

  /**
   * <p>The ARN of the model version that was set as the active model version prior to the
   *          current active model version.</p>
   * @public
   */
  PreviousActiveModelVersionArn?: string | undefined;

  /**
   * <p>The date and time when the previous active model version was activated.</p>
   * @public
   */
  PreviousModelVersionActivatedAt?: Date | undefined;

  /**
   * <p>If the model version was retrained, this field shows a summary of the performance of the
   *          prior model on the new training range. You can use the information in this JSON-formatted
   *          object to compare the new model version and the prior model version.</p>
   * @public
   */
  PriorModelMetrics?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * <p>If the model version was generated by retraining and the training failed, this indicates
   *          the reason for that failure. </p>
   * @public
   */
  LatestScheduledRetrainingFailedReason?: string | undefined;

  /**
   * <p>Indicates the status of the most recent scheduled retraining run. </p>
   * @public
   */
  LatestScheduledRetrainingStatus?: ModelVersionStatus | undefined;

  /**
   * <p>Indicates the most recent model version that was generated by retraining. </p>
   * @public
   */
  LatestScheduledRetrainingModelVersion?: number | undefined;

  /**
   * <p>Indicates the start time of the most recent scheduled retraining run. </p>
   * @public
   */
  LatestScheduledRetrainingStartTime?: Date | undefined;

  /**
   * <p>Indicates the number of days of data used in the most recent scheduled retraining run.
   *       </p>
   * @public
   */
  LatestScheduledRetrainingAvailableDataInDays?: number | undefined;

  /**
   * <p>Indicates the date and time that the next scheduled retraining run will start on. Lookout for Equipment
   *          truncates the time you provide to the nearest UTC day.</p>
   * @public
   */
  NextScheduledRetrainingStartDate?: Date | undefined;

  /**
   * <p>Indicates the start time of the inference data that has been accumulated. </p>
   * @public
   */
  AccumulatedInferenceDataStartTime?: Date | undefined;

  /**
   * <p>Indicates the end time of the inference data that has been accumulated. </p>
   * @public
   */
  AccumulatedInferenceDataEndTime?: Date | undefined;

  /**
   * <p>Indicates the status of the retraining scheduler. </p>
   * @public
   */
  RetrainingSchedulerStatus?: RetrainingSchedulerStatus | undefined;

  /**
   * <p>Configuration information for the model's pointwise model diagnostics.</p>
   * @public
   */
  ModelDiagnosticsOutputConfiguration?: ModelDiagnosticsOutputConfiguration | undefined;

  /**
   * <p>Provides a quality assessment for a model that uses labels. If Lookout for Equipment determines that the
   *          model quality is poor based on training metrics, the value is
   *          <code>POOR_QUALITY_DETECTED</code>. Otherwise, the value is
   *          <code>QUALITY_THRESHOLD_MET</code>.</p>
   *          <p>If the model is unlabeled, the model quality can't
   *          be assessed and the value of <code>ModelQuality</code> is
   *          <code>CANNOT_DETERMINE_QUALITY</code>. In this situation, you can get a model quality
   *          assessment by adding labels to the input dataset and retraining the model.</p>
   *          <p>For information about using labels with your models, see <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/understanding-labeling.html">Understanding labeling</a>.</p>
   *          <p>For information about improving the quality of a model, see <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/best-practices.html">Best practices with
   *          Amazon Lookout for Equipment</a>.</p>
   * @public
   */
  ModelQuality?: ModelQuality | undefined;
}

/**
 * @public
 */
export interface DescribeModelVersionRequest {
  /**
   * <p>The name of the machine learning model that this version belongs to.</p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>The version of the machine learning model.</p>
   * @public
   */
  ModelVersion: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelVersionSourceType = {
  IMPORT: "IMPORT",
  RETRAINING: "RETRAINING",
  TRAINING: "TRAINING",
} as const;

/**
 * @public
 */
export type ModelVersionSourceType = (typeof ModelVersionSourceType)[keyof typeof ModelVersionSourceType];

/**
 * @public
 */
export interface DescribeModelVersionResponse {
  /**
   * <p>The name of the machine learning model that this version belongs to.</p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the parent machine learning model that this version
   *          belong to.</p>
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * <p>The version of the machine learning model.</p>
   * @public
   */
  ModelVersion?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model version.</p>
   * @public
   */
  ModelVersionArn?: string | undefined;

  /**
   * <p>The current status of the model version.</p>
   * @public
   */
  Status?: ModelVersionStatus | undefined;

  /**
   * <p>Indicates whether this model version was created by training or by importing.</p>
   * @public
   */
  SourceType?: ModelVersionSourceType | undefined;

  /**
   * <p>The name of the dataset used to train the model version.</p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset used to train the model version.</p>
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * <p>The schema of the data used to train the model version.</p>
   * @public
   */
  Schema?: string | undefined;

  /**
   * <p>Contains the configuration information for the S3 location being used to hold label
   *          data. </p>
   * @public
   */
  LabelsInputConfiguration?: LabelsInputConfiguration | undefined;

  /**
   * <p>The date on which the training data began being gathered. If you imported the version,
   *          this is the date that the training data in the source version began being gathered.</p>
   * @public
   */
  TrainingDataStartTime?: Date | undefined;

  /**
   * <p>The date on which the training data finished being gathered. If you imported the
   *          version, this is the date that the training data in the source version finished being
   *          gathered.</p>
   * @public
   */
  TrainingDataEndTime?: Date | undefined;

  /**
   * <p>The date on which the data in the evaluation set began being gathered. If you imported
   *          the version, this is the date that the evaluation set data in the source version began
   *          being gathered.</p>
   * @public
   */
  EvaluationDataStartTime?: Date | undefined;

  /**
   * <p>The date on which the data in the evaluation set began being gathered. If you imported
   *          the version, this is the date that the evaluation set data in the source version finished
   *          being gathered.</p>
   * @public
   */
  EvaluationDataEndTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that was used to train the model
   *          version.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The configuration is the <code>TargetSamplingRate</code>, which is the sampling rate of
   *          the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been
   *          collected at a 1 second level and you want the system to resample the data at a 1 minute
   *          rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p>
   *          <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the
   *          prefix "PT" to the rate you want. The value for a 1 second rate is therefore
   *             <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>,
   *          and the value for a 1 hour rate is <i>PT1H</i>
   *          </p>
   * @public
   */
  DataPreProcessingConfiguration?: DataPreProcessingConfiguration | undefined;

  /**
   * <p>The time when the training of the version began.</p>
   * @public
   */
  TrainingExecutionStartTime?: Date | undefined;

  /**
   * <p>The time when the training of the version completed.</p>
   * @public
   */
  TrainingExecutionEndTime?: Date | undefined;

  /**
   * <p>The failure message if the training of the model version failed.</p>
   * @public
   */
  FailedReason?: string | undefined;

  /**
   * <p>Shows an aggregated summary, in JSON format, of the model's performance within the
   *          evaluation time range. These metrics are created when evaluating the model.</p>
   * @public
   */
  ModelMetrics?: string | undefined;

  /**
   * <p>Indicates the last time the machine learning model version was updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>Indicates the time and date at which the machine learning model version was
   *          created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The identifier of the KMS key key used to encrypt model version data by
   *          Amazon Lookout for Equipment.</p>
   * @public
   */
  ServerSideKmsKeyId?: string | undefined;

  /**
   * <p>Indicates that the asset associated with this sensor has been shut off. As long as this
   *          condition is met, Lookout for Equipment will not use data from this asset for training,
   *          evaluation, or inference.</p>
   * @public
   */
  OffCondition?: string | undefined;

  /**
   * <p>If model version was imported, then this field is the arn of the source model
   *          version.</p>
   * @public
   */
  SourceModelVersionArn?: string | undefined;

  /**
   * <p>The date and time when the import job began. This field appears if the model version was
   *          imported.</p>
   * @public
   */
  ImportJobStartTime?: Date | undefined;

  /**
   * <p>The date and time when the import job completed. This field appears if the model version
   *          was imported.</p>
   * @public
   */
  ImportJobEndTime?: Date | undefined;

  /**
   * <p>The size in bytes of the imported data. This field appears if the model version was
   *          imported.</p>
   * @public
   */
  ImportedDataSizeInBytes?: number | undefined;

  /**
   * <p>If the model version was retrained, this field shows a summary of the performance of the
   *          prior model on the new training range. You can use the information in this JSON-formatted
   *          object to compare the new model version and the prior model version.</p>
   * @public
   */
  PriorModelMetrics?: string | undefined;

  /**
   * <p>Indicates the number of days of data used in the most recent scheduled retraining run.
   *       </p>
   * @public
   */
  RetrainingAvailableDataInDays?: number | undefined;

  /**
   * <p>Indicates whether the model version was promoted to be the active version after
   *          retraining or if there was an error with or cancellation of the retraining. </p>
   * @public
   */
  AutoPromotionResult?: AutoPromotionResult | undefined;

  /**
   * <p>Indicates the reason for the <code>AutoPromotionResult</code>. For example, a model
   *          might not be promoted if its performance was worse than the active version, if there was an
   *          error during training, or if the retraining scheduler was using <code>MANUAL</code> promote
   *          mode. The model will be promoted in <code>MANAGED</code> promote mode if the performance is
   *          better than the previous model. </p>
   * @public
   */
  AutoPromotionResultReason?: string | undefined;

  /**
   * <p>The Amazon S3 location where Amazon Lookout for Equipment saves the pointwise model diagnostics for the model version.</p>
   * @public
   */
  ModelDiagnosticsOutputConfiguration?: ModelDiagnosticsOutputConfiguration | undefined;

  /**
   * <p>The Amazon S3 output prefix for where Lookout for Equipment saves the pointwise model diagnostics for the model version.</p>
   * @public
   */
  ModelDiagnosticsResultsObject?: S3Object | undefined;

  /**
   * <p>Provides a quality assessment for a model that uses labels. If Lookout for Equipment determines that the
   *          model quality is poor based on training metrics, the value is
   *          <code>POOR_QUALITY_DETECTED</code>. Otherwise, the value is
   *          <code>QUALITY_THRESHOLD_MET</code>.</p>
   *          <p>If the model is unlabeled, the model quality can't
   *          be assessed and the value of <code>ModelQuality</code> is
   *          <code>CANNOT_DETERMINE_QUALITY</code>. In this situation, you can get a model quality
   *          assessment by adding labels to the input dataset and retraining the model.</p>
   *          <p>For information about using labels with your models, see <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/understanding-labeling.html">Understanding labeling</a>.</p>
   *          <p>For information about improving the quality of a model, see <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/best-practices.html">Best practices with
   *          Amazon Lookout for Equipment</a>.</p>
   * @public
   */
  ModelQuality?: ModelQuality | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that is associated with the resource
   *          policy.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyResponse {
  /**
   * <p>A unique identifier for a revision of the resource policy.</p>
   * @public
   */
  PolicyRevisionId?: string | undefined;

  /**
   * <p>The resource policy in a JSON-formatted string.</p>
   * @public
   */
  ResourcePolicy?: string | undefined;

  /**
   * <p>The time when the resource policy was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time when the resource policy was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRetrainingSchedulerRequest {
  /**
   * <p>The name of the model that the retraining scheduler is attached to. </p>
   * @public
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface DescribeRetrainingSchedulerResponse {
  /**
   * <p>The name of the model that the retraining scheduler is attached to. </p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>The ARN of the model that the retraining scheduler is attached to. </p>
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * <p>The start date for the retraining scheduler. Lookout for Equipment truncates the time you provide to the
   *          nearest UTC day.</p>
   * @public
   */
  RetrainingStartDate?: Date | undefined;

  /**
   * <p>The frequency at which the model retraining is set. This follows the <a href="https://en.wikipedia.org/wiki/ISO_8601#Durations">ISO 8601</a>
   *          guidelines.</p>
   * @public
   */
  RetrainingFrequency?: string | undefined;

  /**
   * <p>The number of past days of data used for retraining.</p>
   * @public
   */
  LookbackWindow?: string | undefined;

  /**
   * <p>The status of the retraining scheduler. </p>
   * @public
   */
  Status?: RetrainingSchedulerStatus | undefined;

  /**
   * <p>Indicates how the service uses new models. In <code>MANAGED</code> mode, new models are
   *          used for inference if they have better performance than the current model. In
   *             <code>MANUAL</code> mode, the new models are not used until they are <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/versioning-model.html#model-activation">manually
   *             activated</a>.</p>
   * @public
   */
  PromoteMode?: ModelPromoteMode | undefined;

  /**
   * <p>Indicates the time and date at which the retraining scheduler was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>Indicates the time and date at which the retraining scheduler was updated. </p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ImportDatasetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset to import.</p>
   * @public
   */
  SourceDatasetArn: string | undefined;

  /**
   * <p>The name of the machine learning dataset to be created. If the dataset already exists,
   *          Amazon Lookout for Equipment overwrites the existing dataset. If you don't specify this field, it is filled
   *          with the name of the source dataset.</p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>A unique identifier for the request. If you do not set the client request token,
   *          Amazon Lookout for Equipment generates one. </p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Provides the identifier of the KMS key key used to encrypt model data by Amazon Lookout for Equipment.
   *       </p>
   * @public
   */
  ServerSideKmsKeyId?: string | undefined;

  /**
   * <p>Any tags associated with the dataset to be created.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportDatasetResponse {
  /**
   * <p>The name of the created machine learning dataset.</p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that was imported.</p>
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * <p>The status of the <code>ImportDataset</code> operation.</p>
   * @public
   */
  Status?: DatasetStatus | undefined;

  /**
   * <p>A unique identifier for the job of importing the dataset.</p>
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InferenceDataImportStrategy = {
  ADD_WHEN_EMPTY: "ADD_WHEN_EMPTY",
  NO_IMPORT: "NO_IMPORT",
  OVERWRITE: "OVERWRITE",
} as const;

/**
 * @public
 */
export type InferenceDataImportStrategy =
  (typeof InferenceDataImportStrategy)[keyof typeof InferenceDataImportStrategy];

/**
 * @public
 */
export interface ImportModelVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the model version to import.</p>
   * @public
   */
  SourceModelVersionArn: string | undefined;

  /**
   * <p>The name for the machine learning model to be created. If the model already exists,
   *          Amazon Lookout for Equipment creates a new version. If you do not specify this field, it is filled with the
   *          name of the source model.</p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>The name of the dataset for the machine learning model being imported. </p>
   * @public
   */
  DatasetName: string | undefined;

  /**
   * <p>Contains the configuration information for the S3 location being used to hold label
   *          data. </p>
   * @public
   */
  LabelsInputConfiguration?: LabelsInputConfiguration | undefined;

  /**
   * <p>A unique identifier for the request. If you do not set the client request token,
   *          Amazon Lookout for Equipment generates one. </p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a role with permission to access the data source being
   *          used to create the machine learning model. </p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>Provides the identifier of the KMS key key used to encrypt model data by Amazon Lookout for Equipment.
   *       </p>
   * @public
   */
  ServerSideKmsKeyId?: string | undefined;

  /**
   * <p>The tags associated with the machine learning model to be created. </p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Indicates how to import the accumulated inference data when a model version is imported.
   *          The possible values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>NO_IMPORT – Don't import the data.</p>
   *             </li>
   *             <li>
   *                <p>ADD_WHEN_EMPTY – Only import the data from the source model if there is no
   *                existing data in the target model.</p>
   *             </li>
   *             <li>
   *                <p>OVERWRITE – Import the data from the source model and overwrite the
   *                existing data in the target model.</p>
   *             </li>
   *          </ul>
   * @public
   */
  InferenceDataImportStrategy?: InferenceDataImportStrategy | undefined;
}

/**
 * @public
 */
export interface ImportModelVersionResponse {
  /**
   * <p>The name for the machine learning model.</p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model being created. </p>
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model version being created. </p>
   * @public
   */
  ModelVersionArn?: string | undefined;

  /**
   * <p>The version of the model being created.</p>
   * @public
   */
  ModelVersion?: number | undefined;

  /**
   * <p>The status of the <code>ImportModelVersion</code> operation. </p>
   * @public
   */
  Status?: ModelVersionStatus | undefined;
}

/**
 * @public
 */
export interface ListDataIngestionJobsRequest {
  /**
   * <p>The name of the dataset being used for the data ingestion job. </p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>An opaque pagination token indicating where to continue the listing of data ingestion
   *          jobs. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> Specifies the maximum number of data ingestion jobs to list. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Indicates the status of the data ingestion job. </p>
   * @public
   */
  Status?: IngestionJobStatus | undefined;
}

/**
 * <p>Provides information about a specified data ingestion job, including dataset
 *          information, data ingestion configuration, and status. </p>
 * @public
 */
export interface DataIngestionJobSummary {
  /**
   * <p>Indicates the job ID of the data ingestion job. </p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The name of the dataset used for the data ingestion job. </p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset used in the data ingestion job. </p>
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * <p> Specifies information for the input data for the data inference job, including data
   *             Amazon S3 location parameters. </p>
   * @public
   */
  IngestionInputConfiguration?: IngestionInputConfiguration | undefined;

  /**
   * <p>Indicates the status of the data ingestion job. </p>
   * @public
   */
  Status?: IngestionJobStatus | undefined;
}

/**
 * @public
 */
export interface ListDataIngestionJobsResponse {
  /**
   * <p> An opaque pagination token indicating where to continue the listing of data ingestion
   *          jobs. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies information about the specific data ingestion job, including dataset name and
   *          status. </p>
   * @public
   */
  DataIngestionJobSummaries?: DataIngestionJobSummary[] | undefined;
}

/**
 * @public
 */
export interface ListDatasetsRequest {
  /**
   * <p> An opaque pagination token indicating where to continue the listing of datasets.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> Specifies the maximum number of datasets to list. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The beginning of the name of the datasets to be listed. </p>
   * @public
   */
  DatasetNameBeginsWith?: string | undefined;
}

/**
 * <p>Contains information about the specific data set, including name, ARN, and status.
 *       </p>
 * @public
 */
export interface DatasetSummary {
  /**
   * <p>The name of the dataset. </p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the specified dataset. </p>
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * <p>Indicates the status of the dataset. </p>
   * @public
   */
  Status?: DatasetStatus | undefined;

  /**
   * <p>The time at which the dataset was created in Amazon Lookout for Equipment. </p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListDatasetsResponse {
  /**
   * <p> An opaque pagination token indicating where to continue the listing of datasets.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Provides information about the specified dataset, including creation time, dataset ARN,
   *          and status. </p>
   * @public
   */
  DatasetSummaries?: DatasetSummary[] | undefined;
}

/**
 * @public
 */
export interface ListInferenceEventsRequest {
  /**
   * <p>An opaque pagination token indicating where to continue the listing of inference
   *          events.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies the maximum number of inference events to list. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The name of the inference scheduler for the inference events listed. </p>
   * @public
   */
  InferenceSchedulerName: string | undefined;

  /**
   * <p> Lookout for Equipment will return all the inference events with an end time equal to or greater than
   *          the start time given.</p>
   * @public
   */
  IntervalStartTime: Date | undefined;

  /**
   * <p>Returns all the inference events with an end start time equal to or greater than less
   *          than the end time given.</p>
   * @public
   */
  IntervalEndTime: Date | undefined;
}

/**
 * <p>Contains information about the specific inference event, including start and end time,
 *          diagnostics information, event duration and so on.</p>
 * @public
 */
export interface InferenceEventSummary {
  /**
   * <p> The Amazon Resource Name (ARN) of the inference scheduler being used for the inference
   *          event. </p>
   * @public
   */
  InferenceSchedulerArn?: string | undefined;

  /**
   * <p>The name of the inference scheduler being used for the inference events. </p>
   * @public
   */
  InferenceSchedulerName?: string | undefined;

  /**
   * <p>Indicates the starting time of an inference event. </p>
   * @public
   */
  EventStartTime?: Date | undefined;

  /**
   * <p>Indicates the ending time of an inference event. </p>
   * @public
   */
  EventEndTime?: Date | undefined;

  /**
   * <p> An array which specifies the names and values of all sensors contributing to an
   *          inference event.</p>
   * @public
   */
  Diagnostics?: string | undefined;

  /**
   * <p> Indicates the size of an inference event in seconds. </p>
   * @public
   */
  EventDurationInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface ListInferenceEventsResponse {
  /**
   * <p>An opaque pagination token indicating where to continue the listing of inference
   *          executions. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Provides an array of information about the individual inference events returned from the
   *             <code>ListInferenceEvents</code> operation, including scheduler used, event start time,
   *          event end time, diagnostics, and so on. </p>
   * @public
   */
  InferenceEventSummaries?: InferenceEventSummary[] | undefined;
}

/**
 * @public
 * @enum
 */
export const InferenceExecutionStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type InferenceExecutionStatus = (typeof InferenceExecutionStatus)[keyof typeof InferenceExecutionStatus];

/**
 * @public
 */
export interface ListInferenceExecutionsRequest {
  /**
   * <p>An opaque pagination token indicating where to continue the listing of inference
   *          executions.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies the maximum number of inference executions to list. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The name of the inference scheduler for the inference execution listed. </p>
   * @public
   */
  InferenceSchedulerName: string | undefined;

  /**
   * <p>The time reference in the inferenced dataset after which Amazon Lookout for Equipment started the inference
   *          execution. </p>
   * @public
   */
  DataStartTimeAfter?: Date | undefined;

  /**
   * <p>The time reference in the inferenced dataset before which Amazon Lookout for Equipment stopped the
   *          inference execution. </p>
   * @public
   */
  DataEndTimeBefore?: Date | undefined;

  /**
   * <p>The status of the inference execution. </p>
   * @public
   */
  Status?: InferenceExecutionStatus | undefined;
}

/**
 * <p>Contains information about the specific inference execution, including input and output
 *          data configuration, inference scheduling information, status, and so on. </p>
 * @public
 */
export interface InferenceExecutionSummary {
  /**
   * <p>The name of the machine learning model being used for the inference execution. </p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the machine learning model used for the inference
   *          execution. </p>
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * <p>The name of the inference scheduler being used for the inference execution. </p>
   * @public
   */
  InferenceSchedulerName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the inference scheduler being used for the inference
   *          execution. </p>
   * @public
   */
  InferenceSchedulerArn?: string | undefined;

  /**
   * <p>Indicates the start time at which the inference scheduler began the specific inference
   *          execution. </p>
   * @public
   */
  ScheduledStartTime?: Date | undefined;

  /**
   * <p>Indicates the time reference in the dataset at which the inference execution began.
   *       </p>
   * @public
   */
  DataStartTime?: Date | undefined;

  /**
   * <p>Indicates the time reference in the dataset at which the inference execution stopped.
   *       </p>
   * @public
   */
  DataEndTime?: Date | undefined;

  /**
   * <p> Specifies configuration information for the input data for the inference scheduler,
   *          including delimiter, format, and dataset location. </p>
   * @public
   */
  DataInputConfiguration?: InferenceInputConfiguration | undefined;

  /**
   * <p> Specifies configuration information for the output results from for the inference
   *          execution, including the output Amazon S3 location.
   *       </p>
   * @public
   */
  DataOutputConfiguration?: InferenceOutputConfiguration | undefined;

  /**
   * <p>The S3 object that the inference execution results were uploaded to.</p>
   * @public
   */
  CustomerResultObject?: S3Object | undefined;

  /**
   * <p>Indicates the status of the inference execution. </p>
   * @public
   */
  Status?: InferenceExecutionStatus | undefined;

  /**
   * <p> Specifies the reason for failure when an inference execution has failed. </p>
   * @public
   */
  FailedReason?: string | undefined;

  /**
   * <p>The model version used for the inference execution.</p>
   * @public
   */
  ModelVersion?: number | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the model version used for the inference
   *          execution.</p>
   * @public
   */
  ModelVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface ListInferenceExecutionsResponse {
  /**
   * <p> An opaque pagination token indicating where to continue the listing of inference
   *          executions. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Provides an array of information about the individual inference executions returned from
   *          the <code>ListInferenceExecutions</code> operation, including model used, inference
   *          scheduler, data configuration, and so on.  </p>
   *          <note>
   *             <p>If you don't supply the <code>InferenceSchedulerName</code> request parameter, or
   *             if you supply the name of an inference scheduler that doesn't exist,
   *                <code>ListInferenceExecutions</code> returns an empty array in
   *                <code>InferenceExecutionSummaries</code>.</p>
   *          </note>
   * @public
   */
  InferenceExecutionSummaries?: InferenceExecutionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListInferenceSchedulersRequest {
  /**
   * <p> An opaque pagination token indicating where to continue the listing of inference
   *          schedulers. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> Specifies the maximum number of inference schedulers to list. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The beginning of the name of the inference schedulers to be listed. </p>
   * @public
   */
  InferenceSchedulerNameBeginsWith?: string | undefined;

  /**
   * <p>The name of the machine learning model used by the inference scheduler to be listed.
   *       </p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>Specifies the current status of the inference schedulers.</p>
   * @public
   */
  Status?: InferenceSchedulerStatus | undefined;
}

/**
 * <p>Contains information about the specific inference scheduler, including data delay
 *          offset, model name and ARN, status, and so on. </p>
 * @public
 */
export interface InferenceSchedulerSummary {
  /**
   * <p>The name of the machine learning model used for the inference scheduler. </p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the machine learning model used by the inference
   *          scheduler. </p>
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * <p>The name of the inference scheduler. </p>
   * @public
   */
  InferenceSchedulerName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the inference scheduler. </p>
   * @public
   */
  InferenceSchedulerArn?: string | undefined;

  /**
   * <p>Indicates the status of the inference scheduler. </p>
   * @public
   */
  Status?: InferenceSchedulerStatus | undefined;

  /**
   * <p>A period of time (in minutes) by which inference on the data is delayed after the data
   *          starts. For instance, if an offset delay time of five minutes was selected, inference will
   *          not begin on the data until the first data measurement after the five minute mark. For
   *          example, if five minutes is selected, the inference scheduler will wake up at the
   *          configured frequency with the additional five minute delay time to check the customer S3
   *          bucket. The customer can upload data at the same frequency and they don't need to stop and
   *          restart the scheduler when uploading new data. </p>
   * @public
   */
  DataDelayOffsetInMinutes?: number | undefined;

  /**
   * <p>How often data is uploaded to the source S3 bucket for the input data. This value is the
   *          length of time between data uploads. For instance, if you select 5 minutes, Amazon Lookout
   *          for Equipment will upload the real-time data to the source bucket once every 5 minutes.
   *          This frequency also determines how often Amazon Lookout for Equipment starts a scheduled inference on your
   *          data. In this example, it starts once every 5 minutes. </p>
   * @public
   */
  DataUploadFrequency?: DataUploadFrequency | undefined;

  /**
   * <p>Indicates whether the latest execution for the inference scheduler was Anomalous
   *          (anomalous events found) or Normal (no anomalous events found).</p>
   * @public
   */
  LatestInferenceResult?: LatestInferenceResult | undefined;
}

/**
 * @public
 */
export interface ListInferenceSchedulersResponse {
  /**
   * <p> An opaque pagination token indicating where to continue the listing of inference
   *          schedulers. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Provides information about the specified inference scheduler, including data upload
   *          frequency, model name and ARN, and status. </p>
   * @public
   */
  InferenceSchedulerSummaries?: InferenceSchedulerSummary[] | undefined;
}

/**
 * @public
 */
export interface ListLabelGroupsRequest {
  /**
   * <p> The beginning of the name of the label groups to be listed. </p>
   * @public
   */
  LabelGroupNameBeginsWith?: string | undefined;

  /**
   * <p> An opaque pagination token indicating where to continue the listing of label groups.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> Specifies the maximum number of label groups to list. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p> Contains information about the label group. </p>
 * @public
 */
export interface LabelGroupSummary {
  /**
   * <p> The name of the label group. </p>
   * @public
   */
  LabelGroupName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the label group. </p>
   * @public
   */
  LabelGroupArn?: string | undefined;

  /**
   * <p> The time at which the label group was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p> The time at which the label group was updated. </p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListLabelGroupsResponse {
  /**
   * <p> An opaque pagination token indicating where to continue the listing of label groups.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> A summary of the label groups. </p>
   * @public
   */
  LabelGroupSummaries?: LabelGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface ListLabelsRequest {
  /**
   * <p> Returns the name of the label group. </p>
   * @public
   */
  LabelGroupName: string | undefined;

  /**
   * <p> Returns all the labels with a end time equal to or later than the start time given.
   *       </p>
   * @public
   */
  IntervalStartTime?: Date | undefined;

  /**
   * <p> Returns all labels with a start time earlier than the end time given. </p>
   * @public
   */
  IntervalEndTime?: Date | undefined;

  /**
   * <p> Returns labels with a particular fault code. </p>
   * @public
   */
  FaultCode?: string | undefined;

  /**
   * <p> Lists the labels that pertain to a particular piece of equipment. </p>
   * @public
   */
  Equipment?: string | undefined;

  /**
   * <p> An opaque pagination token indicating where to continue the listing of label groups.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> Specifies the maximum number of labels to list. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p> Information about the label. </p>
 * @public
 */
export interface LabelSummary {
  /**
   * <p> The name of the label group. </p>
   * @public
   */
  LabelGroupName?: string | undefined;

  /**
   * <p> The ID of the label. </p>
   * @public
   */
  LabelId?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the label group. </p>
   * @public
   */
  LabelGroupArn?: string | undefined;

  /**
   * <p> The timestamp indicating the start of the label. </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p> The timestamp indicating the end of the label. </p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p> Indicates whether a labeled event represents an anomaly. </p>
   * @public
   */
  Rating?: LabelRating | undefined;

  /**
   * <p> Indicates the type of anomaly associated with the label. </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data.</p>
   * @public
   */
  FaultCode?: string | undefined;

  /**
   * <p> Indicates that a label pertains to a particular piece of equipment. </p>
   * @public
   */
  Equipment?: string | undefined;

  /**
   * <p> The time at which the label was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListLabelsResponse {
  /**
   * <p> An opaque pagination token indicating where to continue the listing of datasets.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> A summary of the items in the label group. </p>
   *          <note>
   *             <p>If you don't supply the <code>LabelGroupName</code> request parameter, or if you supply
   *             the name of a label group that doesn't exist, <code>ListLabels</code> returns an empty array in
   *                <code>LabelSummaries</code>.</p>
   *          </note>
   * @public
   */
  LabelSummaries?: LabelSummary[] | undefined;
}

/**
 * @public
 */
export interface ListModelsRequest {
  /**
   * <p> An opaque pagination token indicating where to continue the listing of machine learning
   *          models. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> Specifies the maximum number of machine learning models to list. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The status of the machine learning model. </p>
   * @public
   */
  Status?: ModelStatus | undefined;

  /**
   * <p>The beginning of the name of the machine learning models being listed. </p>
   * @public
   */
  ModelNameBeginsWith?: string | undefined;

  /**
   * <p>The beginning of the name of the dataset of the machine learning models to be listed.
   *       </p>
   * @public
   */
  DatasetNameBeginsWith?: string | undefined;
}

/**
 * <p>Provides information about the specified machine learning model, including dataset and
 *          model names and ARNs, as well as status. </p>
 * @public
 */
export interface ModelSummary {
  /**
   * <p>The name of the machine learning model. </p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the machine learning model. </p>
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * <p>The name of the dataset being used for the machine learning model. </p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the dataset used to create the model. </p>
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * <p>Indicates the status of the machine learning model. </p>
   * @public
   */
  Status?: ModelStatus | undefined;

  /**
   * <p>The time at which the specific model was created. </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The model version that the inference scheduler uses to run an inference
   *          execution.</p>
   * @public
   */
  ActiveModelVersion?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model version that is set as active. The active
   *          model version is the model version that the inference scheduler uses to run an inference
   *          execution.</p>
   * @public
   */
  ActiveModelVersionArn?: string | undefined;

  /**
   * <p>Indicates the status of the most recent scheduled retraining run. </p>
   * @public
   */
  LatestScheduledRetrainingStatus?: ModelVersionStatus | undefined;

  /**
   * <p>Indicates the most recent model version that was generated by retraining. </p>
   * @public
   */
  LatestScheduledRetrainingModelVersion?: number | undefined;

  /**
   * <p>Indicates the start time of the most recent scheduled retraining run. </p>
   * @public
   */
  LatestScheduledRetrainingStartTime?: Date | undefined;

  /**
   * <p>Indicates the date that the next scheduled retraining run will start on. Lookout for Equipment truncates
   *          the time you provide to <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp">the nearest UTC day</a>.</p>
   * @public
   */
  NextScheduledRetrainingStartDate?: Date | undefined;

  /**
   * <p>Indicates the status of the retraining scheduler. </p>
   * @public
   */
  RetrainingSchedulerStatus?: RetrainingSchedulerStatus | undefined;

  /**
   * <p>Output configuration information for the pointwise model diagnostics for an Amazon Lookout for Equipment model.</p>
   * @public
   */
  ModelDiagnosticsOutputConfiguration?: ModelDiagnosticsOutputConfiguration | undefined;

  /**
   * <p>Provides a quality assessment for a model that uses labels. If Lookout for Equipment determines that the
   *          model quality is poor based on training metrics, the value is
   *          <code>POOR_QUALITY_DETECTED</code>. Otherwise, the value is
   *          <code>QUALITY_THRESHOLD_MET</code>.</p>
   *          <p>If the model is unlabeled, the model quality can't
   *          be assessed and the value of <code>ModelQuality</code> is
   *          <code>CANNOT_DETERMINE_QUALITY</code>. In this situation, you can get a model quality
   *          assessment by adding labels to the input dataset and retraining the model.</p>
   *          <p>For information about using labels with your models, see <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/understanding-labeling.html">Understanding labeling</a>.</p>
   *          <p>For information about improving the quality of a model, see <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/best-practices.html">Best practices with
   *          Amazon Lookout for Equipment</a>.</p>
   * @public
   */
  ModelQuality?: ModelQuality | undefined;
}

/**
 * @public
 */
export interface ListModelsResponse {
  /**
   * <p> An opaque pagination token indicating where to continue the listing of machine learning
   *          models. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Provides information on the specified model, including created time, model and dataset
   *          ARNs, and status. </p>
   * @public
   */
  ModelSummaries?: ModelSummary[] | undefined;
}

/**
 * @public
 */
export interface ListModelVersionsRequest {
  /**
   * <p>Then name of the machine learning model for which the model versions are to be
   *          listed.</p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>If the total number of results exceeds the limit that the response can display, the
   *          response returns an opaque pagination token indicating where to continue the listing of
   *          machine learning model versions. Use this token in the <code>NextToken</code> field in the
   *          request to list the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies the maximum number of machine learning model versions to list.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filter the results based on the current status of the model version.</p>
   * @public
   */
  Status?: ModelVersionStatus | undefined;

  /**
   * <p>Filter the results based on the way the model version was generated.</p>
   * @public
   */
  SourceType?: ModelVersionSourceType | undefined;

  /**
   * <p>Filter results to return all the model versions created before this time.</p>
   * @public
   */
  CreatedAtEndTime?: Date | undefined;

  /**
   * <p>Filter results to return all the model versions created after this time.</p>
   * @public
   */
  CreatedAtStartTime?: Date | undefined;

  /**
   * <p>Specifies the highest version of the model to return in the list.</p>
   * @public
   */
  MaxModelVersion?: number | undefined;

  /**
   * <p>Specifies the lowest version of the model to return in the list.</p>
   * @public
   */
  MinModelVersion?: number | undefined;
}

/**
 * <p>Contains information about the specific model version.</p>
 * @public
 */
export interface ModelVersionSummary {
  /**
   * <p>The name of the model that this model version is a version of.</p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model that this model version is a version
   *          of.</p>
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * <p>The version of the model.</p>
   * @public
   */
  ModelVersion?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model version.</p>
   * @public
   */
  ModelVersionArn?: string | undefined;

  /**
   * <p>The time when this model version was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The current status of the model version.</p>
   * @public
   */
  Status?: ModelVersionStatus | undefined;

  /**
   * <p>Indicates how this model version was generated.</p>
   * @public
   */
  SourceType?: ModelVersionSourceType | undefined;

  /**
   * <p>Provides a quality assessment for a model that uses labels. If Lookout for Equipment determines that the
   *          model quality is poor based on training metrics, the value is
   *          <code>POOR_QUALITY_DETECTED</code>. Otherwise, the value is
   *          <code>QUALITY_THRESHOLD_MET</code>. </p>
   *          <p>If the model is unlabeled, the model quality can't
   *          be assessed and the value of <code>ModelQuality</code> is
   *          <code>CANNOT_DETERMINE_QUALITY</code>. In this situation, you can get a model quality
   *          assessment by adding labels to the input dataset and retraining the model.</p>
   *          <p>For information about improving the quality of a model, see <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/best-practices.html">Best practices with
   *          Amazon Lookout for Equipment</a>.</p>
   * @public
   */
  ModelQuality?: ModelQuality | undefined;
}

/**
 * @public
 */
export interface ListModelVersionsResponse {
  /**
   * <p>If the total number of results exceeds the limit that the response can display, the
   *          response returns an opaque pagination token indicating where to continue the listing of
   *          machine learning model versions. Use this token in the <code>NextToken</code> field in the
   *          request to list the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Provides information on the specified model version, including the created time, model
   *          and dataset ARNs, and status.</p>
   *          <note>
   *             <p>If you don't supply the <code>ModelName</code> request parameter, or if you supply the name
   *             of a model that doesn't exist, <code>ListModelVersions</code> returns an empty array in
   *                <code>ModelVersionSummaries</code>. </p>
   *          </note>
   * @public
   */
  ModelVersionSummaries?: ModelVersionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListRetrainingSchedulersRequest {
  /**
   * <p>Specify this field to only list retraining schedulers whose machine learning models
   *          begin with the value you specify. </p>
   * @public
   */
  ModelNameBeginsWith?: string | undefined;

  /**
   * <p>Specify this field to only list retraining schedulers whose status matches the value you
   *          specify. </p>
   * @public
   */
  Status?: RetrainingSchedulerStatus | undefined;

  /**
   * <p>If the number of results exceeds the maximum, a pagination token is returned. Use the
   *          token in the request to show the next page of retraining schedulers.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies the maximum number of retraining schedulers to list. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Provides information about the specified retraining scheduler, including model name,
 *          status, start date, frequency, and lookback window. </p>
 * @public
 */
export interface RetrainingSchedulerSummary {
  /**
   * <p>The name of the model that the retraining scheduler is attached to. </p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>The ARN of the model that the retraining scheduler is attached to. </p>
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * <p>The status of the retraining scheduler. </p>
   * @public
   */
  Status?: RetrainingSchedulerStatus | undefined;

  /**
   * <p>The start date for the retraining scheduler. Lookout for Equipment truncates the time you provide to the
   *          nearest UTC day.</p>
   * @public
   */
  RetrainingStartDate?: Date | undefined;

  /**
   * <p>The frequency at which the model retraining is set. This follows the <a href="https://en.wikipedia.org/wiki/ISO_8601#Durations">ISO 8601</a>
   *          guidelines.</p>
   * @public
   */
  RetrainingFrequency?: string | undefined;

  /**
   * <p>The number of past days of data used for retraining.</p>
   * @public
   */
  LookbackWindow?: string | undefined;
}

/**
 * @public
 */
export interface ListRetrainingSchedulersResponse {
  /**
   * <p>Provides information on the specified retraining scheduler, including the model name,
   *          model ARN, status, and start date. </p>
   * @public
   */
  RetrainingSchedulerSummaries?: RetrainingSchedulerSummary[] | undefined;

  /**
   * <p>If the number of results exceeds the maximum, this pagination token is returned. Use
   *          this token in the request to show the next page of retraining schedulers.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSensorStatisticsRequest {
  /**
   * <p> The name of the dataset associated with the list of Sensor Statistics. </p>
   * @public
   */
  DatasetName: string | undefined;

  /**
   * <p> The ingestion job id associated with the list of Sensor Statistics. To get sensor
   *          statistics for a particular ingestion job id, both dataset name and ingestion job id must
   *          be submitted as inputs. </p>
   * @public
   */
  IngestionJobId?: string | undefined;

  /**
   * <p>Specifies the maximum number of sensors for which to retrieve statistics. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An opaque pagination token indicating where to continue the listing of sensor
   *          statistics. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StatisticalIssueStatus = {
  NO_ISSUE_DETECTED: "NO_ISSUE_DETECTED",
  POTENTIAL_ISSUE_DETECTED: "POTENTIAL_ISSUE_DETECTED",
} as const;

/**
 * @public
 */
export type StatisticalIssueStatus = (typeof StatisticalIssueStatus)[keyof typeof StatisticalIssueStatus];

/**
 * <p> Entity that comprises information on categorical values in data. </p>
 * @public
 */
export interface CategoricalValues {
  /**
   * <p> Indicates whether there is a potential data issue related to categorical values.
   *       </p>
   * @public
   */
  Status: StatisticalIssueStatus | undefined;

  /**
   * <p> Indicates the number of categories in the data. </p>
   * @public
   */
  NumberOfCategory?: number | undefined;
}

/**
 * <p> Entity that comprises information of count and percentage. </p>
 * @public
 */
export interface CountPercent {
  /**
   * <p> Indicates the count of occurences of the given statistic. </p>
   * @public
   */
  Count: number | undefined;

  /**
   * <p> Indicates the percentage of occurances of the given statistic. </p>
   * @public
   */
  Percentage: number | undefined;
}

/**
 * <p> Entity that comprises information on large gaps between consecutive timestamps in data.
 *       </p>
 * @public
 */
export interface LargeTimestampGaps {
  /**
   * <p> Indicates whether there is a potential data issue related to large gaps in timestamps.
   *       </p>
   * @public
   */
  Status: StatisticalIssueStatus | undefined;

  /**
   * <p> Indicates the number of large timestamp gaps, if there are any. </p>
   * @public
   */
  NumberOfLargeTimestampGaps?: number | undefined;

  /**
   * <p> Indicates the size of the largest timestamp gap, in days. </p>
   * @public
   */
  MaxTimestampGapInDays?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const Monotonicity = {
  DECREASING: "DECREASING",
  INCREASING: "INCREASING",
  STATIC: "STATIC",
} as const;

/**
 * @public
 */
export type Monotonicity = (typeof Monotonicity)[keyof typeof Monotonicity];

/**
 * <p> Entity that comprises information on monotonic values in the data. </p>
 * @public
 */
export interface MonotonicValues {
  /**
   * <p> Indicates whether there is a potential data issue related to having monotonic values.
   *       </p>
   * @public
   */
  Status: StatisticalIssueStatus | undefined;

  /**
   * <p> Indicates the monotonicity of values. Can be INCREASING, DECREASING, or STATIC. </p>
   * @public
   */
  Monotonicity?: Monotonicity | undefined;
}

/**
 * <p> Entity that comprises information on operating modes in data. </p>
 * @public
 */
export interface MultipleOperatingModes {
  /**
   * <p> Indicates whether there is a potential data issue related to having multiple operating
   *          modes. </p>
   * @public
   */
  Status: StatisticalIssueStatus | undefined;
}

/**
 * <p> Summary of ingestion statistics like whether data exists, number of missing values,
 *          number of invalid values and so on related to the particular sensor. </p>
 * @public
 */
export interface SensorStatisticsSummary {
  /**
   * <p> Name of the component to which the particular sensor belongs for which the statistics
   *          belong to. </p>
   * @public
   */
  ComponentName?: string | undefined;

  /**
   * <p> Name of the sensor that the statistics belong to. </p>
   * @public
   */
  SensorName?: string | undefined;

  /**
   * <p> Parameter that indicates whether data exists for the sensor that the statistics belong
   *          to. </p>
   * @public
   */
  DataExists?: boolean | undefined;

  /**
   * <p> Parameter that describes the total number of, and percentage of, values that are
   *          missing for the sensor that the statistics belong to. </p>
   * @public
   */
  MissingValues?: CountPercent | undefined;

  /**
   * <p> Parameter that describes the total number of, and percentage of, values that are
   *          invalid for the sensor that the statistics belong to. </p>
   * @public
   */
  InvalidValues?: CountPercent | undefined;

  /**
   * <p> Parameter that describes the total number of invalid date entries associated with the
   *          sensor that the statistics belong to. </p>
   * @public
   */
  InvalidDateEntries?: CountPercent | undefined;

  /**
   * <p> Parameter that describes the total number of duplicate timestamp records associated
   *          with the sensor that the statistics belong to. </p>
   * @public
   */
  DuplicateTimestamps?: CountPercent | undefined;

  /**
   * <p> Parameter that describes potential risk about whether data associated with the sensor
   *          is categorical. </p>
   * @public
   */
  CategoricalValues?: CategoricalValues | undefined;

  /**
   * <p> Parameter that describes potential risk about whether data associated with the sensor
   *          has more than one operating mode. </p>
   * @public
   */
  MultipleOperatingModes?: MultipleOperatingModes | undefined;

  /**
   * <p> Parameter that describes potential risk about whether data associated with the sensor
   *          contains one or more large gaps between consecutive timestamps. </p>
   * @public
   */
  LargeTimestampGaps?: LargeTimestampGaps | undefined;

  /**
   * <p> Parameter that describes potential risk about whether data associated with the sensor
   *          is mostly monotonic. </p>
   * @public
   */
  MonotonicValues?: MonotonicValues | undefined;

  /**
   * <p> Indicates the time reference to indicate the beginning of valid data associated with
   *          the sensor that the statistics belong to. </p>
   * @public
   */
  DataStartTime?: Date | undefined;

  /**
   * <p> Indicates the time reference to indicate the end of valid data associated with the
   *          sensor that the statistics belong to. </p>
   * @public
   */
  DataEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSensorStatisticsResponse {
  /**
   * <p>Provides ingestion-based statistics regarding the specified sensor with respect to
   *          various validation types, such as whether data exists, the number and percentage of missing
   *          values, and the number and percentage of duplicate timestamps. </p>
   * @public
   */
  SensorStatisticsSummaries?: SensorStatisticsSummary[] | undefined;

  /**
   * <p>An opaque pagination token indicating where to continue the listing of sensor
   *          statistics. </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource (such as the dataset or model) that is
   *          the focus of the <code>ListTagsForResource</code> operation. </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p> Any tags associated with the resource. </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which the policy is being
   *          created.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The JSON-formatted resource policy to create.</p>
   * @public
   */
  ResourcePolicy: string | undefined;

  /**
   * <p>A unique identifier for a revision of the resource policy.</p>
   * @public
   */
  PolicyRevisionId?: string | undefined;

  /**
   * <p>A unique identifier for the request. If you do not set the client request token,
   *          Amazon Lookout for Equipment generates one. </p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which the policy was created.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>A unique identifier for a revision of the resource policy.</p>
   * @public
   */
  PolicyRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface StartDataIngestionJobRequest {
  /**
   * <p>The name of the dataset being used by the data ingestion job. </p>
   * @public
   */
  DatasetName: string | undefined;

  /**
   * <p> Specifies information for the input data for the data ingestion job, including dataset
   *          S3 location. </p>
   * @public
   */
  IngestionInputConfiguration: IngestionInputConfiguration | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of a role with permission to access the data source for
   *          the data ingestion job. </p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p> A unique identifier for the request. If you do not set the client request token, Amazon
   *          Lookout for Equipment generates one. </p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartDataIngestionJobResponse {
  /**
   * <p>Indicates the job ID of the data ingestion job. </p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>Indicates the status of the <code>StartDataIngestionJob</code> operation. </p>
   * @public
   */
  Status?: IngestionJobStatus | undefined;
}

/**
 * @public
 */
export interface StartInferenceSchedulerRequest {
  /**
   * <p>The name of the inference scheduler to be started. </p>
   * @public
   */
  InferenceSchedulerName: string | undefined;
}

/**
 * @public
 */
export interface StartInferenceSchedulerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the machine learning model being used by the inference
   *          scheduler. </p>
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * <p>The name of the machine learning model being used by the inference scheduler. </p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>The name of the inference scheduler being started. </p>
   * @public
   */
  InferenceSchedulerName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the inference scheduler being started. </p>
   * @public
   */
  InferenceSchedulerArn?: string | undefined;

  /**
   * <p>Indicates the status of the inference scheduler. </p>
   * @public
   */
  Status?: InferenceSchedulerStatus | undefined;
}

/**
 * @public
 */
export interface StartRetrainingSchedulerRequest {
  /**
   * <p>The name of the model whose retraining scheduler you want to start.</p>
   * @public
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface StartRetrainingSchedulerResponse {
  /**
   * <p>The name of the model whose retraining scheduler is being started. </p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>The ARN of the model whose retraining scheduler is being started. </p>
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * <p>The status of the retraining scheduler. </p>
   * @public
   */
  Status?: RetrainingSchedulerStatus | undefined;
}

/**
 * @public
 */
export interface StopInferenceSchedulerRequest {
  /**
   * <p>The name of the inference scheduler to be stopped. </p>
   * @public
   */
  InferenceSchedulerName: string | undefined;
}

/**
 * @public
 */
export interface StopInferenceSchedulerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the machine learning model used by the inference
   *          scheduler being stopped. </p>
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * <p>The name of the machine learning model used by the inference scheduler being stopped.
   *       </p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>The name of the inference scheduler being stopped. </p>
   * @public
   */
  InferenceSchedulerName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the inference schedule being stopped. </p>
   * @public
   */
  InferenceSchedulerArn?: string | undefined;

  /**
   * <p>Indicates the status of the inference scheduler. </p>
   * @public
   */
  Status?: InferenceSchedulerStatus | undefined;
}

/**
 * @public
 */
export interface StopRetrainingSchedulerRequest {
  /**
   * <p>The name of the model whose retraining scheduler you want to stop.</p>
   * @public
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface StopRetrainingSchedulerResponse {
  /**
   * <p>The name of the model whose retraining scheduler is being stopped. </p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>The ARN of the model whose retraining scheduler is being stopped. </p>
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * <p>The status of the retraining scheduler. </p>
   * @public
   */
  Status?: RetrainingSchedulerStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the specific resource to which the tag should be
   *          associated. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag or tags to be associated with a specific resource. Both the tag key and value
   *          are specified. </p>
   * @public
   */
  Tags: Tag[] | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the resource to which the tag is currently associated.
   *       </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies the key of the tag to be removed from a specified resource. </p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateActiveModelVersionRequest {
  /**
   * <p>The name of the machine learning model for which the active model version is being
   *          set.</p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>The version of the machine learning model for which the active model version is being
   *          set.</p>
   * @public
   */
  ModelVersion: number | undefined;
}

/**
 * @public
 */
export interface UpdateActiveModelVersionResponse {
  /**
   * <p>The name of the machine learning model for which the active model version was
   *          set.</p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the machine learning model for which the active model
   *          version was set.</p>
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * <p>The version that is currently active of the machine learning model for which the active
   *          model version was set.</p>
   * @public
   */
  CurrentActiveVersion?: number | undefined;

  /**
   * <p>The previous version that was active of the machine learning model for which the active
   *          model version was set.</p>
   * @public
   */
  PreviousActiveVersion?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the machine learning model version that is the current
   *          active model version.</p>
   * @public
   */
  CurrentActiveVersionArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the machine learning model version that was the
   *          previous active model version.</p>
   * @public
   */
  PreviousActiveVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateInferenceSchedulerRequest {
  /**
   * <p>The name of the inference scheduler to be updated. </p>
   * @public
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
   * @public
   */
  DataDelayOffsetInMinutes?: number | undefined;

  /**
   * <p>How often data is uploaded to the source S3 bucket for the input data. The value chosen
   *          is the length of time between data uploads. For instance, if you select 5 minutes, Amazon
   *          Lookout for Equipment will upload the real-time data to the source bucket once every 5
   *          minutes. This frequency also determines how often Amazon Lookout for Equipment starts a scheduled inference on
   *          your data. In this example, it starts once every 5 minutes. </p>
   * @public
   */
  DataUploadFrequency?: DataUploadFrequency | undefined;

  /**
   * <p> Specifies information for the input data for the inference scheduler, including
   *          delimiter, format, and dataset location. </p>
   * @public
   */
  DataInputConfiguration?: InferenceInputConfiguration | undefined;

  /**
   * <p> Specifies information for the output results from the inference scheduler, including
   *          the output S3 location. </p>
   * @public
   */
  DataOutputConfiguration?: InferenceOutputConfiguration | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of a role with permission to access the data source for
   *          the inference scheduler. </p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLabelGroupRequest {
  /**
   * <p> The name of the label group to be updated. </p>
   * @public
   */
  LabelGroupName: string | undefined;

  /**
   * <p> Updates the code indicating the type of anomaly associated with the label. </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data.</p>
   * @public
   */
  FaultCodes?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateModelRequest {
  /**
   * <p>The name of the model to update.</p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>Contains the configuration information for the S3 location being used to hold label
   *          data. </p>
   * @public
   */
  LabelsInputConfiguration?: LabelsInputConfiguration | undefined;

  /**
   * <p>The ARN of the model to update.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The Amazon S3 location where you want Amazon Lookout for Equipment to save the pointwise model diagnostics for the model.
   *          You must also specify the <code>RoleArn</code> request parameter.</p>
   * @public
   */
  ModelDiagnosticsOutputConfiguration?: ModelDiagnosticsOutputConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRetrainingSchedulerRequest {
  /**
   * <p>The name of the model whose retraining scheduler you want to update. </p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>The start date for the retraining scheduler. Lookout for Equipment truncates the time you provide to the
   *          nearest UTC day.</p>
   * @public
   */
  RetrainingStartDate?: Date | undefined;

  /**
   * <p>This parameter uses the <a href="https://en.wikipedia.org/wiki/ISO_8601#Durations">ISO 8601</a> standard to set the frequency at which you want retraining to occur in
   *          terms of Years, Months, and/or Days (note: other parameters like Time are not currently
   *          supported). The minimum value is 30 days (P30D) and the maximum value is 1 year (P1Y). For
   *          example, the following values are valid:</p>
   *          <ul>
   *             <li>
   *                <p>P3M15D – Every 3 months and 15 days</p>
   *             </li>
   *             <li>
   *                <p>P2M – Every 2 months</p>
   *             </li>
   *             <li>
   *                <p>P150D – Every 150 days</p>
   *             </li>
   *          </ul>
   * @public
   */
  RetrainingFrequency?: string | undefined;

  /**
   * <p>The number of past days of data that will be used for retraining.</p>
   * @public
   */
  LookbackWindow?: string | undefined;

  /**
   * <p>Indicates how the service will use new models. In <code>MANAGED</code> mode, new models
   *          will automatically be used for inference if they have better performance than the current
   *          model. In <code>MANUAL</code> mode, the new models will not be used <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/versioning-model.html#model-activation">until they
   *             are manually activated</a>.</p>
   * @public
   */
  PromoteMode?: ModelPromoteMode | undefined;
}
