// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
} from "@smithy/smithy-client";

import { LookoutEquipmentServiceException as __BaseException } from "./LookoutEquipmentServiceException";

/**
 * @public
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
 * @public
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
 * @public
 * <p>Provides information about the data schema used with the given dataset. </p>
 */
export interface DatasetSchema {
  /**
   * @public
   * <p>The data schema used within the given dataset.</p>
   */
  InlineDataSchema?: __LazyJsonString | string;
}

/**
 * @public
 * <p>A tag is a key-value pair that can be added to a resource as metadata. </p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key for the specified tag. </p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value for the specified tag. </p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateDatasetRequest {
  /**
   * @public
   * <p>The name of the dataset being created. </p>
   */
  DatasetName: string | undefined;

  /**
   * @public
   * <p>A JSON description of the data that is in each time series dataset, including names,
   *          column names, and data types. </p>
   */
  DatasetSchema?: DatasetSchema;

  /**
   * @public
   * <p>Provides the identifier of the KMS key used to encrypt dataset data by Amazon Lookout
   *          for Equipment. </p>
   */
  ServerSideKmsKeyId?: string;

  /**
   * @public
   * <p> A unique identifier for the request. If you do not set the client request token, Amazon
   *          Lookout for Equipment generates one. </p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Any tags associated with the ingested data described in the dataset. </p>
   */
  Tags?: Tag[];
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
   * @public
   * <p>The name of the dataset being created. </p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the dataset being created. </p>
   */
  DatasetArn?: string;

  /**
   * @public
   * <p>Indicates the status of the <code>CreateDataset</code> operation. </p>
   */
  Status?: DatasetStatus;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
 * <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related Amazon Web Services
 *          service that's being utilized. </p>
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
 * @public
 * <p>Specifies configuration information for the input data for the inference, including
 *          timestamp format and delimiter. </p>
 */
export interface InferenceInputNameConfiguration {
  /**
   * @public
   * <p>The format of the timestamp, whether Epoch time, or standard, with or without hyphens
   *          (-). </p>
   */
  TimestampFormat?: string;

  /**
   * @public
   * <p>Indicates the delimiter character used between items in the data. </p>
   */
  ComponentTimestampDelimiter?: string;
}

/**
 * @public
 * <p> Specifies configuration information for the input data for the inference, including
 *          input data S3 location. </p>
 */
export interface InferenceS3InputConfiguration {
  /**
   * @public
   * <p>The bucket containing the input dataset for the inference. </p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The prefix for the S3 bucket used for the input data for the inference. </p>
   */
  Prefix?: string;
}

/**
 * @public
 * <p>Specifies configuration information for the input data for the inference, including
 *             Amazon S3 location of input data.. </p>
 */
export interface InferenceInputConfiguration {
  /**
   * @public
   * <p> Specifies configuration information for the input data for the inference, including
   *             Amazon S3 location of input data.</p>
   */
  S3InputConfiguration?: InferenceS3InputConfiguration;

  /**
   * @public
   * <p>Indicates the difference between your time zone and Coordinated Universal Time
   *          (UTC).</p>
   */
  InputTimeZoneOffset?: string;

  /**
   * @public
   * <p>Specifies configuration information for the input data for the inference, including
   *          timestamp format and delimiter. </p>
   */
  InferenceInputNameConfiguration?: InferenceInputNameConfiguration;
}

/**
 * @public
 * <p> Specifies configuration information for the output results from the inference,
 *          including output S3 location. </p>
 */
export interface InferenceS3OutputConfiguration {
  /**
   * @public
   * <p> The bucket containing the output results from the inference </p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p> The prefix for the S3 bucket used for the output results from the inference. </p>
   */
  Prefix?: string;
}

/**
 * @public
 * <p> Specifies configuration information for the output results from for the inference,
 *          including KMS key ID and output S3 location. </p>
 */
export interface InferenceOutputConfiguration {
  /**
   * @public
   * <p> Specifies configuration information for the output results from for the inference,
   *          output S3 location. </p>
   */
  S3OutputConfiguration: InferenceS3OutputConfiguration | undefined;

  /**
   * @public
   * <p>The ID number for the KMS key key used to encrypt the inference output. </p>
   */
  KmsKeyId?: string;
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
   * @public
   * <p>The name of the previously trained machine learning model being used to create the
   *          inference scheduler. </p>
   */
  ModelName: string | undefined;

  /**
   * @public
   * <p>The name of the inference scheduler being created. </p>
   */
  InferenceSchedulerName: string | undefined;

  /**
   * @public
   * <p>The interval (in minutes) of planned delay at the start of each inference segment. For
   *          example, if inference is set to run every ten minutes, the delay is set to five minutes and
   *          the time is 09:08. The inference scheduler will wake up at the configured interval (which,
   *          without a delay configured, would be 09:10) plus the additional five minute delay time (so
   *          09:15) to check your Amazon S3 bucket. The delay provides a buffer for you to upload data at the
   *          same frequency, so that you don't have to stop and restart the scheduler when uploading new
   *          data.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/understanding-inference-process.html">Understanding
   *             the inference process</a>.</p>
   */
  DataDelayOffsetInMinutes?: number;

  /**
   * @public
   * <p> How often data is uploaded to the source Amazon S3 bucket for the input data. The value
   *          chosen is the length of time between data uploads. For instance, if you select 5 minutes,
   *          Amazon Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This
   *          frequency also determines how often Amazon Lookout for Equipment runs inference on your data.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/understanding-inference-process.html">Understanding
   *             the inference process</a>.</p>
   */
  DataUploadFrequency: DataUploadFrequency | undefined;

  /**
   * @public
   * <p>Specifies configuration information for the input data for the inference scheduler,
   *          including delimiter, format, and dataset location. </p>
   */
  DataInputConfiguration: InferenceInputConfiguration | undefined;

  /**
   * @public
   * <p>Specifies configuration information for the output results for the inference scheduler,
   *          including the S3 location for the output. </p>
   */
  DataOutputConfiguration: InferenceOutputConfiguration | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a role with permission to access the data source being
   *          used for the inference. </p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>Provides the identifier of the KMS key used to encrypt inference scheduler data by
   *          Amazon Lookout for Equipment. </p>
   */
  ServerSideKmsKeyId?: string;

  /**
   * @public
   * <p> A unique identifier for the request. If you do not set the client request token, Amazon
   *          Lookout for Equipment generates one. </p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Any tags associated with the inference scheduler. </p>
   */
  Tags?: Tag[];
}

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
   * @public
   * <p>The Amazon Resource Name (ARN) of the inference scheduler being created. </p>
   */
  InferenceSchedulerArn?: string;

  /**
   * @public
   * <p>The name of inference scheduler being created. </p>
   */
  InferenceSchedulerName?: string;

  /**
   * @public
   * <p>Indicates the status of the <code>CreateInferenceScheduler</code> operation. </p>
   */
  Status?: InferenceSchedulerStatus;
}

/**
 * @public
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
   * @public
   * <p> The name of a group of labels. </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data. </p>
   */
  LabelGroupName: string | undefined;

  /**
   * @public
   * <p> The start time of the labeled event. </p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p> The end time of the labeled event. </p>
   */
  EndTime: Date | undefined;

  /**
   * @public
   * <p> Indicates whether a labeled event represents an anomaly. </p>
   */
  Rating: LabelRating | undefined;

  /**
   * @public
   * <p> Provides additional information about the label. The fault code must be defined in the
   *          FaultCodes attribute of the label group.</p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data. </p>
   */
  FaultCode?: string;

  /**
   * @public
   * <p> Metadata providing additional information about the label. </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data.</p>
   */
  Notes?: string;

  /**
   * @public
   * <p> Indicates that a label pertains to a particular piece of equipment. </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data.</p>
   */
  Equipment?: string;

  /**
   * @public
   * <p> A unique identifier for the request to create a label. If you do not set the client
   *          request token, Lookout for Equipment generates one. </p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateLabelResponse {
  /**
   * @public
   * <p> The ID of the label that you have created. </p>
   */
  LabelId?: string;
}

/**
 * @public
 */
export interface CreateLabelGroupRequest {
  /**
   * @public
   * <p> Names a group of labels.</p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data. </p>
   */
  LabelGroupName: string | undefined;

  /**
   * @public
   * <p> The acceptable fault codes (indicating the type of anomaly associated with the label)
   *          that can be used with this label group.</p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data.</p>
   */
  FaultCodes?: string[];

  /**
   * @public
   * <p> A unique identifier for the request to create a label group. If you do not set the
   *          client request token, Lookout for Equipment generates one. </p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p> Tags that provide metadata about the label group you are creating. </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateLabelGroupResponse {
  /**
   * @public
   * <p> The name of the label group that you have created. Data in this field will be retained
   *          for service usage. Follow best practices for the security of your data. </p>
   */
  LabelGroupName?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the label group that you have created. </p>
   */
  LabelGroupArn?: string;
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
 * @public
 * <p>The configuration is the <code>TargetSamplingRate</code>, which is the sampling rate of
 *          the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been
 *          collected at a 1 second level and you want the system to resample the data at a 1 minute
 *          rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p>
 *          <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the
 *          prefix "PT" to the rate you want. The value for a 1 second rate is therefore
 *             <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>,
 *          and the value for a 1 hour rate is <i>PT1H</i>
 *          </p>
 */
export interface DataPreProcessingConfiguration {
  /**
   * @public
   * <p>The sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you
   *          provide data that has been collected at a 1 second level and you want the system to
   *          resample the data at a 1 minute rate before training, the <code>TargetSamplingRate</code>
   *          is 1 minute.</p>
   *          <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the
   *          prefix "PT" to the rate you want. The value for a 1 second rate is therefore
   *             <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>,
   *          and the value for a 1 hour rate is <i>PT1H</i>
   *          </p>
   */
  TargetSamplingRate?: TargetSamplingRate;
}

/**
 * @public
 * <p>The location information (prefix and bucket name) for the s3 location being used for
 *          label data. </p>
 */
export interface LabelsS3InputConfiguration {
  /**
   * @public
   * <p>The name of the S3 bucket holding the label data. </p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p> The prefix for the S3 bucket used for the label data. </p>
   */
  Prefix?: string;
}

/**
 * @public
 * <p>Contains the configuration information for the S3 location being used to hold label
 *          data. </p>
 */
export interface LabelsInputConfiguration {
  /**
   * @public
   * <p>Contains location information for the S3 location being used for label data. </p>
   */
  S3InputConfiguration?: LabelsS3InputConfiguration;

  /**
   * @public
   * <p> The name of the label group to be used for label data. </p>
   */
  LabelGroupName?: string;
}

/**
 * @public
 */
export interface CreateModelRequest {
  /**
   * @public
   * <p>The name for the machine learning model to be created.</p>
   */
  ModelName: string | undefined;

  /**
   * @public
   * <p>The name of the dataset for the machine learning model being created. </p>
   */
  DatasetName: string | undefined;

  /**
   * @public
   * <p>The data schema for the machine learning model being created. </p>
   */
  DatasetSchema?: DatasetSchema;

  /**
   * @public
   * <p>The input configuration for the labels being used for the machine learning model that's
   *          being created. </p>
   */
  LabelsInputConfiguration?: LabelsInputConfiguration;

  /**
   * @public
   * <p>A unique identifier for the request. If you do not set the client request token, Amazon
   *          Lookout for Equipment generates one. </p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Indicates the time reference in the dataset that should be used to begin the subset of
   *          training data for the machine learning model. </p>
   */
  TrainingDataStartTime?: Date;

  /**
   * @public
   * <p>Indicates the time reference in the dataset that should be used to end the subset of
   *          training data for the machine learning model. </p>
   */
  TrainingDataEndTime?: Date;

  /**
   * @public
   * <p>Indicates the time reference in the dataset that should be used to begin the subset of
   *          evaluation data for the machine learning model. </p>
   */
  EvaluationDataStartTime?: Date;

  /**
   * @public
   * <p> Indicates the time reference in the dataset that should be used to end the subset of
   *          evaluation data for the machine learning model. </p>
   */
  EvaluationDataEndTime?: Date;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of a role with permission to access the data source
   *          being used to create the machine learning model. </p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The configuration is the <code>TargetSamplingRate</code>, which is the sampling rate of
   *          the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been
   *          collected at a 1 second level and you want the system to resample the data at a 1 minute
   *          rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p>
   *          <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the
   *          prefix "PT" to the rate you want. The value for a 1 second rate is therefore
   *             <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>,
   *          and the value for a 1 hour rate is <i>PT1H</i>
   *          </p>
   */
  DataPreProcessingConfiguration?: DataPreProcessingConfiguration;

  /**
   * @public
   * <p>Provides the identifier of the KMS key used to encrypt model data by Amazon Lookout
   *          for Equipment. </p>
   */
  ServerSideKmsKeyId?: string;

  /**
   * @public
   * <p> Any tags associated with the machine learning model being created. </p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Indicates that the asset associated with this sensor has been shut off. As long as this
   *          condition is met, Lookout for Equipment will not use data from this asset for training,
   *          evaluation, or inference.</p>
   */
  OffCondition?: string;
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the model being created. </p>
   */
  ModelArn?: string;

  /**
   * @public
   * <p>Indicates the status of the <code>CreateModel</code> operation. </p>
   */
  Status?: ModelStatus;
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
   * @public
   * <p>The name of the model to add the retraining scheduler to. </p>
   */
  ModelName: string | undefined;

  /**
   * @public
   * <p>The start date for the retraining scheduler. Lookout for Equipment truncates the time you provide to the
   *          nearest UTC day.</p>
   */
  RetrainingStartDate?: Date;

  /**
   * @public
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
   */
  RetrainingFrequency: string | undefined;

  /**
   * @public
   * <p>The number of past days of data that will be used for retraining.</p>
   */
  LookbackWindow: string | undefined;

  /**
   * @public
   * <p>Indicates how the service will use new models. In <code>MANAGED</code> mode, new models
   *          will automatically be used for inference if they have better performance than the current
   *          model. In <code>MANUAL</code> mode, the new models will not be used <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/versioning-model.html#model-activation">until they
   *             are manually activated</a>.</p>
   */
  PromoteMode?: ModelPromoteMode;

  /**
   * @public
   * <p>A unique identifier for the request. If you do not set the client request token, Amazon
   *          Lookout for Equipment generates one. </p>
   */
  ClientToken?: string;
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
   * @public
   * <p>The name of the model that you added the retraining scheduler to. </p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The ARN of the model that you added the retraining scheduler to. </p>
   */
  ModelArn?: string;

  /**
   * @public
   * <p>The status of the retraining scheduler. </p>
   */
  Status?: RetrainingSchedulerStatus;
}

/**
 * @public
 */
export interface DeleteDatasetRequest {
  /**
   * @public
   * <p>The name of the dataset to be deleted. </p>
   */
  DatasetName: string | undefined;
}

/**
 * @public
 */
export interface DeleteInferenceSchedulerRequest {
  /**
   * @public
   * <p>The name of the inference scheduler to be deleted. </p>
   */
  InferenceSchedulerName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLabelRequest {
  /**
   * @public
   * <p> The name of the label group that contains the label that you want to delete. Data in
   *          this field will be retained for service usage. Follow best practices for the security of
   *          your data. </p>
   */
  LabelGroupName: string | undefined;

  /**
   * @public
   * <p> The ID of the label that you want to delete. </p>
   */
  LabelId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLabelGroupRequest {
  /**
   * @public
   * <p> The name of the label group that you want to delete. Data in this field will be
   *          retained for service usage. Follow best practices for the security of your data. </p>
   */
  LabelGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelRequest {
  /**
   * @public
   * <p>The name of the machine learning model to be deleted. </p>
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource for which the resource policy should be
   *          deleted.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRetrainingSchedulerRequest {
  /**
   * @public
   * <p>The name of the model whose retraining scheduler you want to delete. </p>
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataIngestionJobRequest {
  /**
   * @public
   * <p>The job ID of the data ingestion job. </p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * <p> Entity that comprises information abount duplicate timestamps in the dataset. </p>
 */
export interface DuplicateTimestamps {
  /**
   * @public
   * <p> Indicates the total number of duplicate timestamps. </p>
   */
  TotalNumberOfDuplicateTimestamps: number | undefined;
}

/**
 * @public
 * <p> Entity that comprises information on sensors that have sensor data completely missing.
 *       </p>
 */
export interface MissingCompleteSensorData {
  /**
   * @public
   * <p> Indicates the number of sensors that have data missing completely. </p>
   */
  AffectedSensorCount: number | undefined;
}

/**
 * @public
 * <p> Entity that comprises information on sensors that have shorter date range. </p>
 */
export interface SensorsWithShortDateRange {
  /**
   * @public
   * <p> Indicates the number of sensors that have less than 90 days of data. </p>
   */
  AffectedSensorCount: number | undefined;
}

/**
 * @public
 * <p> Entity that comprises aggregated information on sensors having insufficient data.
 *       </p>
 */
export interface InsufficientSensorData {
  /**
   * @public
   * <p> Parameter that describes the total number of sensors that have data completely missing
   *          for it. </p>
   */
  MissingCompleteSensorData: MissingCompleteSensorData | undefined;

  /**
   * @public
   * <p> Parameter that describes the total number of sensors that have a short date range of
   *          less than 90 days of data overall. </p>
   */
  SensorsWithShortDateRange: SensorsWithShortDateRange | undefined;
}

/**
 * @public
 * <p> Entity that comprises aggregated information on sensors having insufficient data.
 *       </p>
 */
export interface InvalidSensorData {
  /**
   * @public
   * <p> Indicates the number of sensors that have at least some invalid values. </p>
   */
  AffectedSensorCount: number | undefined;

  /**
   * @public
   * <p> Indicates the total number of invalid values across all the sensors. </p>
   */
  TotalNumberOfInvalidValues: number | undefined;
}

/**
 * @public
 * <p> Entity that comprises aggregated information on sensors having missing data. </p>
 */
export interface MissingSensorData {
  /**
   * @public
   * <p> Indicates the number of sensors that have atleast some data missing. </p>
   */
  AffectedSensorCount: number | undefined;

  /**
   * @public
   * <p> Indicates the total number of missing values across all the sensors. </p>
   */
  TotalNumberOfMissingValues: number | undefined;
}

/**
 * @public
 * <p> Entity that comprises information abount unsupported timestamps in the dataset. </p>
 */
export interface UnsupportedTimestamps {
  /**
   * @public
   * <p> Indicates the total number of unsupported timestamps across the ingested data. </p>
   */
  TotalNumberOfUnsupportedTimestamps: number | undefined;
}

/**
 * @public
 * <p> DataQualitySummary gives aggregated statistics over all the sensors about a completed
 *          ingestion job. It primarily gives more information about statistics over different
 *          incorrect data like MissingCompleteSensorData, MissingSensorData, UnsupportedDateFormats,
 *          InsufficientSensorData, DuplicateTimeStamps. </p>
 */
export interface DataQualitySummary {
  /**
   * @public
   * <p> Parameter that gives information about insufficient data for sensors in the dataset.
   *          This includes information about those sensors that have complete data missing and those
   *          with a short date range. </p>
   */
  InsufficientSensorData: InsufficientSensorData | undefined;

  /**
   * @public
   * <p> Parameter that gives information about data that is missing over all the sensors in the
   *          input data. </p>
   */
  MissingSensorData: MissingSensorData | undefined;

  /**
   * @public
   * <p> Parameter that gives information about data that is invalid over all the sensors in the
   *          input data. </p>
   */
  InvalidSensorData: InvalidSensorData | undefined;

  /**
   * @public
   * <p> Parameter that gives information about unsupported timestamps in the input data.
   *       </p>
   */
  UnsupportedTimestamps: UnsupportedTimestamps | undefined;

  /**
   * @public
   * <p> Parameter that gives information about duplicate timestamps in the input data. </p>
   */
  DuplicateTimestamps: DuplicateTimestamps | undefined;
}

/**
 * @public
 * <p>Contains information about an S3 bucket. </p>
 */
export interface S3Object {
  /**
   * @public
   * <p>The name of the specific S3 bucket. </p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Key Management Service (KMS key) key being used to encrypt the S3 object.
   *          Without this key, data in the bucket is not accessible. </p>
   */
  Key: string | undefined;
}

/**
 * @public
 * <p>Gives statistics about how many files have been ingested, and which files have not been
 *          ingested, for a particular ingestion job.</p>
 */
export interface IngestedFilesSummary {
  /**
   * @public
   * <p>Indicates the total number of files that were submitted for ingestion.</p>
   */
  TotalNumberOfFiles: number | undefined;

  /**
   * @public
   * <p>Indicates the number of files that were successfully ingested.</p>
   */
  IngestedNumberOfFiles: number | undefined;

  /**
   * @public
   * <p>Indicates the number of files that were discarded. A file could be discarded because its
   *          format is invalid (for example, a jpg or pdf) or not readable.</p>
   */
  DiscardedFiles?: S3Object[];
}

/**
 * @public
 * <p> Specifies S3 configuration information for the input data for the data ingestion job.
 *       </p>
 */
export interface IngestionS3InputConfiguration {
  /**
   * @public
   * <p>The name of the S3 bucket used for the input data for the data ingestion. </p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The prefix for the S3 location being used for the input data for the data ingestion.
   *       </p>
   */
  Prefix?: string;

  /**
   * @public
   * <p> The pattern for matching the Amazon S3 files that will be used for ingestion.
   *          If the schema was created previously without any KeyPattern, then the default KeyPattern
   *          \{prefix\}/\{component_name\}/* is used to download files from Amazon S3 according to
   *          the schema. This field is required when ingestion is being done for the first time.</p>
   *          <p>Valid Values: \{prefix\}/\{component_name\}_* | \{prefix\}/\{component_name\}/* |
   *          \{prefix\}/\{component_name\}[DELIMITER]* (Allowed delimiters : space, dot, underscore,
   *          hyphen)</p>
   */
  KeyPattern?: string;
}

/**
 * @public
 * <p> Specifies configuration information for the input data for the data ingestion job,
 *          including input data S3 location. </p>
 */
export interface IngestionInputConfiguration {
  /**
   * @public
   * <p>The location information for the S3 bucket used for input data for the data ingestion.
   *       </p>
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
   * @public
   * <p>Indicates the job ID of the data ingestion job. </p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset being used in the data ingestion job.
   *       </p>
   */
  DatasetArn?: string;

  /**
   * @public
   * <p>Specifies the S3 location configuration for the data input for the data ingestion job.
   *       </p>
   */
  IngestionInputConfiguration?: IngestionInputConfiguration;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role with permission to access the data source
   *          being ingested. </p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The time at which the data ingestion job was created. </p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>Indicates the status of the <code>DataIngestionJob</code> operation. </p>
   */
  Status?: IngestionJobStatus;

  /**
   * @public
   * <p>Specifies the reason for failure when a data ingestion job has failed. </p>
   */
  FailedReason?: string;

  /**
   * @public
   * <p> Gives statistics about a completed ingestion job. These statistics primarily relate to
   *          quantifying incorrect data such as MissingCompleteSensorData, MissingSensorData,
   *          UnsupportedDateFormats, InsufficientSensorData, and DuplicateTimeStamps. </p>
   */
  DataQualitySummary?: DataQualitySummary;

  /**
   * @public
   * <p>Gives statistics about how many files have been ingested, and which files have not been
   *          ingested, for a particular ingestion job.</p>
   */
  IngestedFilesSummary?: IngestedFilesSummary;

  /**
   * @public
   * <p> Provides details about status of the ingestion job that is currently in progress.
   *       </p>
   */
  StatusDetail?: string;

  /**
   * @public
   * <p> Indicates the size of the ingested dataset. </p>
   */
  IngestedDataSize?: number;

  /**
   * @public
   * <p> Indicates the earliest timestamp corresponding to data that was successfully ingested
   *          during this specific ingestion job. </p>
   */
  DataStartTime?: Date;

  /**
   * @public
   * <p> Indicates the latest timestamp corresponding to data that was successfully ingested
   *          during this specific ingestion job. </p>
   */
  DataEndTime?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source dataset from which the data used for the
   *          data ingestion job was imported from.</p>
   */
  SourceDatasetArn?: string;
}

/**
 * @public
 */
export interface DescribeDatasetRequest {
  /**
   * @public
   * <p>The name of the dataset to be described. </p>
   */
  DatasetName: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetResponse {
  /**
   * @public
   * <p>The name of the dataset being described. </p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset being described. </p>
   */
  DatasetArn?: string;

  /**
   * @public
   * <p>Specifies the time the dataset was created in Lookout for Equipment. </p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>Specifies the time the dataset was last updated, if it was. </p>
   */
  LastUpdatedAt?: Date;

  /**
   * @public
   * <p>Indicates the status of the dataset. </p>
   */
  Status?: DatasetStatus;

  /**
   * @public
   * <p>A JSON description of the data that is in each time series dataset, including names,
   *          column names, and data types. </p>
   */
  Schema?: __LazyJsonString | string;

  /**
   * @public
   * <p>Provides the identifier of the KMS key used to encrypt dataset data by Amazon Lookout
   *          for Equipment. </p>
   */
  ServerSideKmsKeyId?: string;

  /**
   * @public
   * <p>Specifies the S3 location configuration for the data input for the data ingestion job.
   *       </p>
   */
  IngestionInputConfiguration?: IngestionInputConfiguration;

  /**
   * @public
   * <p> Gives statistics associated with the given dataset for the latest successful associated
   *          ingestion job id. These statistics primarily relate to quantifying incorrect data such as
   *          MissingCompleteSensorData, MissingSensorData, UnsupportedDateFormats,
   *          InsufficientSensorData, and DuplicateTimeStamps. </p>
   */
  DataQualitySummary?: DataQualitySummary;

  /**
   * @public
   * <p> IngestedFilesSummary associated with the given dataset for the latest successful
   *          associated ingestion job id. </p>
   */
  IngestedFilesSummary?: IngestedFilesSummary;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the IAM role that you are using for this the data
   *          ingestion job. </p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p> Indicates the earliest timestamp corresponding to data that was successfully ingested
   *          during the most recent ingestion of this particular dataset. </p>
   */
  DataStartTime?: Date;

  /**
   * @public
   * <p> Indicates the latest timestamp corresponding to data that was successfully ingested
   *          during the most recent ingestion of this particular dataset. </p>
   */
  DataEndTime?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source dataset from which the current data being
   *          described was imported from.</p>
   */
  SourceDatasetArn?: string;
}

/**
 * @public
 */
export interface DescribeInferenceSchedulerRequest {
  /**
   * @public
   * <p>The name of the inference scheduler being described. </p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the machine learning model of the inference scheduler
   *          being described. </p>
   */
  ModelArn?: string;

  /**
   * @public
   * <p>The name of the machine learning model of the inference scheduler being described.
   *       </p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The name of the inference scheduler being described. </p>
   */
  InferenceSchedulerName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the inference scheduler being described. </p>
   */
  InferenceSchedulerArn?: string;

  /**
   * @public
   * <p>Indicates the status of the inference scheduler. </p>
   */
  Status?: InferenceSchedulerStatus;

  /**
   * @public
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
   * @public
   * <p>Specifies how often data is uploaded to the source S3 bucket for the input data. This
   *          value is the length of time between data uploads. For instance, if you select 5 minutes,
   *          Amazon Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This
   *          frequency also determines how often Amazon Lookout for Equipment starts a scheduled inference on your data. In
   *          this example, it starts once every 5 minutes. </p>
   */
  DataUploadFrequency?: DataUploadFrequency;

  /**
   * @public
   * <p>Specifies the time at which the inference scheduler was created. </p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>Specifies the time at which the inference scheduler was last updated, if it was. </p>
   */
  UpdatedAt?: Date;

  /**
   * @public
   * <p> Specifies configuration information for the input data for the inference scheduler,
   *          including delimiter, format, and dataset location. </p>
   */
  DataInputConfiguration?: InferenceInputConfiguration;

  /**
   * @public
   * <p> Specifies information for the output results for the inference scheduler, including
   *          the output S3 location. </p>
   */
  DataOutputConfiguration?: InferenceOutputConfiguration;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of a role with permission to access the data source for
   *          the inference scheduler being described. </p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>Provides the identifier of the KMS key used to encrypt inference scheduler data by
   *          Amazon Lookout for Equipment. </p>
   */
  ServerSideKmsKeyId?: string;

  /**
   * @public
   * <p>Indicates whether the latest execution for the inference scheduler was Anomalous
   *          (anomalous events found) or Normal (no anomalous events found).</p>
   */
  LatestInferenceResult?: LatestInferenceResult;
}

/**
 * @public
 */
export interface DescribeLabelRequest {
  /**
   * @public
   * <p> Returns the name of the group containing the label. </p>
   */
  LabelGroupName: string | undefined;

  /**
   * @public
   * <p> Returns the ID of the label. </p>
   */
  LabelId: string | undefined;
}

/**
 * @public
 */
export interface DescribeLabelResponse {
  /**
   * @public
   * <p> The name of the requested label group. </p>
   */
  LabelGroupName?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the requested label group. </p>
   */
  LabelGroupArn?: string;

  /**
   * @public
   * <p> The ID of the requested label. </p>
   */
  LabelId?: string;

  /**
   * @public
   * <p> The start time of the requested label. </p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p> The end time of the requested label. </p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p> Indicates whether a labeled event represents an anomaly. </p>
   */
  Rating?: LabelRating;

  /**
   * @public
   * <p> Indicates the type of anomaly associated with the label. </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data.</p>
   */
  FaultCode?: string;

  /**
   * @public
   * <p>Metadata providing additional information about the label.</p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data.</p>
   */
  Notes?: string;

  /**
   * @public
   * <p> Indicates that a label pertains to a particular piece of equipment. </p>
   */
  Equipment?: string;

  /**
   * @public
   * <p> The time at which the label was created. </p>
   */
  CreatedAt?: Date;
}

/**
 * @public
 */
export interface DescribeLabelGroupRequest {
  /**
   * @public
   * <p> Returns the name of the label group. </p>
   */
  LabelGroupName: string | undefined;
}

/**
 * @public
 */
export interface DescribeLabelGroupResponse {
  /**
   * @public
   * <p> The name of the label group. </p>
   */
  LabelGroupName?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the label group. </p>
   */
  LabelGroupArn?: string;

  /**
   * @public
   * <p> Codes indicating the type of anomaly associated with the labels in the lagbel group.
   *       </p>
   */
  FaultCodes?: string[];

  /**
   * @public
   * <p> The time at which the label group was created. </p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p> The time at which the label group was updated. </p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface DescribeModelRequest {
  /**
   * @public
   * <p>The name of the machine learning model to be described. </p>
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
   * @public
   * <p>The name of the machine learning model being described. </p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the machine learning model being described. </p>
   */
  ModelArn?: string;

  /**
   * @public
   * <p>The name of the dataset being used by the machine learning being described. </p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>The Amazon Resouce Name (ARN) of the dataset used to create the machine learning model
   *          being described. </p>
   */
  DatasetArn?: string;

  /**
   * @public
   * <p>A JSON description of the data that is in each time series dataset, including names,
   *          column names, and data types. </p>
   */
  Schema?: __LazyJsonString | string;

  /**
   * @public
   * <p>Specifies configuration information about the labels input, including its S3 location.
   *       </p>
   */
  LabelsInputConfiguration?: LabelsInputConfiguration;

  /**
   * @public
   * <p> Indicates the time reference in the dataset that was used to begin the subset of
   *          training data for the machine learning model. </p>
   */
  TrainingDataStartTime?: Date;

  /**
   * @public
   * <p> Indicates the time reference in the dataset that was used to end the subset of training
   *          data for the machine learning model. </p>
   */
  TrainingDataEndTime?: Date;

  /**
   * @public
   * <p> Indicates the time reference in the dataset that was used to begin the subset of
   *          evaluation data for the machine learning model. </p>
   */
  EvaluationDataStartTime?: Date;

  /**
   * @public
   * <p> Indicates the time reference in the dataset that was used to end the subset of
   *          evaluation data for the machine learning model. </p>
   */
  EvaluationDataEndTime?: Date;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of a role with permission to access the data source for
   *          the machine learning model being described. </p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The configuration is the <code>TargetSamplingRate</code>, which is the sampling rate of
   *          the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been
   *          collected at a 1 second level and you want the system to resample the data at a 1 minute
   *          rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p>
   *          <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the
   *          prefix "PT" to the rate you want. The value for a 1 second rate is therefore
   *             <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>,
   *          and the value for a 1 hour rate is <i>PT1H</i>
   *          </p>
   */
  DataPreProcessingConfiguration?: DataPreProcessingConfiguration;

  /**
   * @public
   * <p>Specifies the current status of the model being described. Status describes the status
   *          of the most recent action of the model. </p>
   */
  Status?: ModelStatus;

  /**
   * @public
   * <p>Indicates the time at which the training of the machine learning model began. </p>
   */
  TrainingExecutionStartTime?: Date;

  /**
   * @public
   * <p>Indicates the time at which the training of the machine learning model was completed.
   *       </p>
   */
  TrainingExecutionEndTime?: Date;

  /**
   * @public
   * <p>If the training of the machine learning model failed, this indicates the reason for that
   *          failure. </p>
   */
  FailedReason?: string;

  /**
   * @public
   * <p>The Model Metrics show an aggregated summary of the model's performance within the
   *          evaluation time range. This is the JSON content of the metrics created when evaluating the
   *          model. </p>
   */
  ModelMetrics?: __LazyJsonString | string;

  /**
   * @public
   * <p>Indicates the last time the machine learning model was updated. The type of update is
   *          not specified. </p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>Indicates the time and date at which the machine learning model was created. </p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>Provides the identifier of the KMS key used to encrypt model data by Amazon Lookout
   *          for Equipment. </p>
   */
  ServerSideKmsKeyId?: string;

  /**
   * @public
   * <p>Indicates that the asset associated with this sensor has been shut off. As long as this
   *          condition is met, Lookout for Equipment will not use data from this asset for training, evaluation, or
   *          inference.</p>
   */
  OffCondition?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source model version. This field appears if the
   *          active model version was imported.</p>
   */
  SourceModelVersionArn?: string;

  /**
   * @public
   * <p>The date and time when the import job was started. This field appears if the active
   *          model version was imported.</p>
   */
  ImportJobStartTime?: Date;

  /**
   * @public
   * <p>The date and time when the import job was completed. This field appears if the active
   *          model version was imported.</p>
   */
  ImportJobEndTime?: Date;

  /**
   * @public
   * <p>The name of the model version used by the inference schedular when running a scheduled
   *          inference execution.</p>
   */
  ActiveModelVersion?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model version used by the inference scheduler when
   *          running a scheduled inference execution.</p>
   */
  ActiveModelVersionArn?: string;

  /**
   * @public
   * <p>The date the active model version was activated.</p>
   */
  ModelVersionActivatedAt?: Date;

  /**
   * @public
   * <p>The model version that was set as the active model version prior to the current active
   *          model version.</p>
   */
  PreviousActiveModelVersion?: number;

  /**
   * @public
   * <p>The ARN of the model version that was set as the active model version prior to the
   *          current active model version.</p>
   */
  PreviousActiveModelVersionArn?: string;

  /**
   * @public
   * <p>The date and time when the previous active model version was activated.</p>
   */
  PreviousModelVersionActivatedAt?: Date;

  /**
   * @public
   * <p>If the model version was retrained, this field shows a summary of the performance of the
   *          prior model on the new training range. You can use the information in this JSON-formatted
   *          object to compare the new model version and the prior model version.</p>
   */
  PriorModelMetrics?: __LazyJsonString | string;

  /**
   * @public
   * <p>If the model version was generated by retraining and the training failed, this indicates
   *          the reason for that failure. </p>
   */
  LatestScheduledRetrainingFailedReason?: string;

  /**
   * @public
   * <p>Indicates the status of the most recent scheduled retraining run. </p>
   */
  LatestScheduledRetrainingStatus?: ModelVersionStatus;

  /**
   * @public
   * <p>Indicates the most recent model version that was generated by retraining. </p>
   */
  LatestScheduledRetrainingModelVersion?: number;

  /**
   * @public
   * <p>Indicates the start time of the most recent scheduled retraining run. </p>
   */
  LatestScheduledRetrainingStartTime?: Date;

  /**
   * @public
   * <p>Indicates the number of days of data used in the most recent scheduled retraining run.
   *       </p>
   */
  LatestScheduledRetrainingAvailableDataInDays?: number;

  /**
   * @public
   * <p>Indicates the date and time that the next scheduled retraining run will start on. Lookout for Equipment
   *          truncates the time you provide to the nearest UTC day.</p>
   */
  NextScheduledRetrainingStartDate?: Date;

  /**
   * @public
   * <p>Indicates the start time of the inference data that has been accumulated. </p>
   */
  AccumulatedInferenceDataStartTime?: Date;

  /**
   * @public
   * <p>Indicates the end time of the inference data that has been accumulated. </p>
   */
  AccumulatedInferenceDataEndTime?: Date;

  /**
   * @public
   * <p>Indicates the status of the retraining scheduler. </p>
   */
  RetrainingSchedulerStatus?: RetrainingSchedulerStatus;
}

/**
 * @public
 */
export interface DescribeModelVersionRequest {
  /**
   * @public
   * <p>The name of the machine learning model that this version belongs to.</p>
   */
  ModelName: string | undefined;

  /**
   * @public
   * <p>The version of the machine learning model.</p>
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
   * @public
   * <p>The name of the machine learning model that this version belongs to.</p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the parent machine learning model that this version
   *          belong to.</p>
   */
  ModelArn?: string;

  /**
   * @public
   * <p>The version of the machine learning model.</p>
   */
  ModelVersion?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model version.</p>
   */
  ModelVersionArn?: string;

  /**
   * @public
   * <p>The current status of the model version.</p>
   */
  Status?: ModelVersionStatus;

  /**
   * @public
   * <p>Indicates whether this model version was created by training or by importing.</p>
   */
  SourceType?: ModelVersionSourceType;

  /**
   * @public
   * <p>The name of the dataset used to train the model version.</p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset used to train the model version.</p>
   */
  DatasetArn?: string;

  /**
   * @public
   * <p>The schema of the data used to train the model version.</p>
   */
  Schema?: string;

  /**
   * @public
   * <p>Contains the configuration information for the S3 location being used to hold label
   *          data. </p>
   */
  LabelsInputConfiguration?: LabelsInputConfiguration;

  /**
   * @public
   * <p>The date on which the training data began being gathered. If you imported the version,
   *          this is the date that the training data in the source version began being gathered.</p>
   */
  TrainingDataStartTime?: Date;

  /**
   * @public
   * <p>The date on which the training data finished being gathered. If you imported the
   *          version, this is the date that the training data in the source version finished being
   *          gathered.</p>
   */
  TrainingDataEndTime?: Date;

  /**
   * @public
   * <p>The date on which the data in the evaluation set began being gathered. If you imported
   *          the version, this is the date that the evaluation set data in the source version began
   *          being gathered.</p>
   */
  EvaluationDataStartTime?: Date;

  /**
   * @public
   * <p>The date on which the data in the evaluation set began being gathered. If you imported
   *          the version, this is the date that the evaluation set data in the source version finished
   *          being gathered.</p>
   */
  EvaluationDataEndTime?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role that was used to train the model
   *          version.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The configuration is the <code>TargetSamplingRate</code>, which is the sampling rate of
   *          the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been
   *          collected at a 1 second level and you want the system to resample the data at a 1 minute
   *          rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p>
   *          <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach the
   *          prefix "PT" to the rate you want. The value for a 1 second rate is therefore
   *             <i>PT1S</i>, the value for a 15 minute rate is <i>PT15M</i>,
   *          and the value for a 1 hour rate is <i>PT1H</i>
   *          </p>
   */
  DataPreProcessingConfiguration?: DataPreProcessingConfiguration;

  /**
   * @public
   * <p>The time when the training of the version began.</p>
   */
  TrainingExecutionStartTime?: Date;

  /**
   * @public
   * <p>The time when the training of the version completed.</p>
   */
  TrainingExecutionEndTime?: Date;

  /**
   * @public
   * <p>The failure message if the training of the model version failed.</p>
   */
  FailedReason?: string;

  /**
   * @public
   * <p>Shows an aggregated summary, in JSON format, of the model's performance within the
   *          evaluation time range. These metrics are created when evaluating the model.</p>
   */
  ModelMetrics?: string;

  /**
   * @public
   * <p>Indicates the last time the machine learning model version was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>Indicates the time and date at which the machine learning model version was
   *          created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The identifier of the KMS key key used to encrypt model version data by
   *          Amazon Lookout for Equipment.</p>
   */
  ServerSideKmsKeyId?: string;

  /**
   * @public
   * <p>Indicates that the asset associated with this sensor has been shut off. As long as this
   *          condition is met, Lookout for Equipment will not use data from this asset for training,
   *          evaluation, or inference.</p>
   */
  OffCondition?: string;

  /**
   * @public
   * <p>If model version was imported, then this field is the arn of the source model
   *          version.</p>
   */
  SourceModelVersionArn?: string;

  /**
   * @public
   * <p>The date and time when the import job began. This field appears if the model version was
   *          imported.</p>
   */
  ImportJobStartTime?: Date;

  /**
   * @public
   * <p>The date and time when the import job completed. This field appears if the model version
   *          was imported.</p>
   */
  ImportJobEndTime?: Date;

  /**
   * @public
   * <p>The size in bytes of the imported data. This field appears if the model version was
   *          imported.</p>
   */
  ImportedDataSizeInBytes?: number;

  /**
   * @public
   * <p>If the model version was retrained, this field shows a summary of the performance of the
   *          prior model on the new training range. You can use the information in this JSON-formatted
   *          object to compare the new model version and the prior model version.</p>
   */
  PriorModelMetrics?: string;

  /**
   * @public
   * <p>Indicates the number of days of data used in the most recent scheduled retraining run.
   *       </p>
   */
  RetrainingAvailableDataInDays?: number;

  /**
   * @public
   * <p>Indicates whether the model version was promoted to be the active version after
   *          retraining or if there was an error with or cancellation of the retraining. </p>
   */
  AutoPromotionResult?: AutoPromotionResult;

  /**
   * @public
   * <p>Indicates the reason for the <code>AutoPromotionResult</code>. For example, a model
   *          might not be promoted if its performance was worse than the active version, if there was an
   *          error during training, or if the retraining scheduler was using <code>MANUAL</code> promote
   *          mode. The model will be promoted in <code>MANAGED</code> promote mode if the performance is
   *          better than the previous model. </p>
   */
  AutoPromotionResultReason?: string;
}

/**
 * @public
 */
export interface DescribeResourcePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that is associated with the resource
   *          policy.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyResponse {
  /**
   * @public
   * <p>A unique identifier for a revision of the resource policy.</p>
   */
  PolicyRevisionId?: string;

  /**
   * @public
   * <p>The resource policy in a JSON-formatted string.</p>
   */
  ResourcePolicy?: string;

  /**
   * @public
   * <p>The time when the resource policy was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time when the resource policy was last modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface DescribeRetrainingSchedulerRequest {
  /**
   * @public
   * <p>The name of the model that the retraining scheduler is attached to. </p>
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface DescribeRetrainingSchedulerResponse {
  /**
   * @public
   * <p>The name of the model that the retraining scheduler is attached to. </p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The ARN of the model that the retraining scheduler is attached to. </p>
   */
  ModelArn?: string;

  /**
   * @public
   * <p>The start date for the retraining scheduler. Lookout for Equipment truncates the time you provide to the
   *          nearest UTC day.</p>
   */
  RetrainingStartDate?: Date;

  /**
   * @public
   * <p>The frequency at which the model retraining is set. This follows the <a href="https://en.wikipedia.org/wiki/ISO_8601#Durations">ISO 8601</a>
   *          guidelines.</p>
   */
  RetrainingFrequency?: string;

  /**
   * @public
   * <p>The number of past days of data used for retraining.</p>
   */
  LookbackWindow?: string;

  /**
   * @public
   * <p>The status of the retraining scheduler. </p>
   */
  Status?: RetrainingSchedulerStatus;

  /**
   * @public
   * <p>Indicates how the service uses new models. In <code>MANAGED</code> mode, new models are
   *          used for inference if they have better performance than the current model. In
   *             <code>MANUAL</code> mode, the new models are not used until they are <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/versioning-model.html#model-activation">manually
   *             activated</a>.</p>
   */
  PromoteMode?: ModelPromoteMode;

  /**
   * @public
   * <p>Indicates the time and date at which the retraining scheduler was created. </p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>Indicates the time and date at which the retraining scheduler was updated. </p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface ImportDatasetRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset to import.</p>
   */
  SourceDatasetArn: string | undefined;

  /**
   * @public
   * <p>The name of the machine learning dataset to be created. If the dataset already exists,
   *          Amazon Lookout for Equipment overwrites the existing dataset. If you don't specify this field, it is filled
   *          with the name of the source dataset.</p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>A unique identifier for the request. If you do not set the client request token,
   *          Amazon Lookout for Equipment generates one. </p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Provides the identifier of the KMS key key used to encrypt model data by Amazon Lookout for Equipment.
   *       </p>
   */
  ServerSideKmsKeyId?: string;

  /**
   * @public
   * <p>Any tags associated with the dataset to be created.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ImportDatasetResponse {
  /**
   * @public
   * <p>The name of the created machine learning dataset.</p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset that was imported.</p>
   */
  DatasetArn?: string;

  /**
   * @public
   * <p>The status of the <code>ImportDataset</code> operation.</p>
   */
  Status?: DatasetStatus;

  /**
   * @public
   * <p>A unique identifier for the job of importing the dataset.</p>
   */
  JobId?: string;
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the model version to import.</p>
   */
  SourceModelVersionArn: string | undefined;

  /**
   * @public
   * <p>The name for the machine learning model to be created. If the model already exists,
   *          Amazon Lookout for Equipment creates a new version. If you do not specify this field, it is filled with the
   *          name of the source model.</p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The name of the dataset for the machine learning model being imported. </p>
   */
  DatasetName: string | undefined;

  /**
   * @public
   * <p>Contains the configuration information for the S3 location being used to hold label
   *          data. </p>
   */
  LabelsInputConfiguration?: LabelsInputConfiguration;

  /**
   * @public
   * <p>A unique identifier for the request. If you do not set the client request token,
   *          Amazon Lookout for Equipment generates one. </p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a role with permission to access the data source being
   *          used to create the machine learning model. </p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>Provides the identifier of the KMS key key used to encrypt model data by Amazon Lookout for Equipment.
   *       </p>
   */
  ServerSideKmsKeyId?: string;

  /**
   * @public
   * <p>The tags associated with the machine learning model to be created. </p>
   */
  Tags?: Tag[];

  /**
   * @public
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
   */
  InferenceDataImportStrategy?: InferenceDataImportStrategy;
}

/**
 * @public
 */
export interface ImportModelVersionResponse {
  /**
   * @public
   * <p>The name for the machine learning model.</p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model being created. </p>
   */
  ModelArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model version being created. </p>
   */
  ModelVersionArn?: string;

  /**
   * @public
   * <p>The version of the model being created.</p>
   */
  ModelVersion?: number;

  /**
   * @public
   * <p>The status of the <code>ImportModelVersion</code> operation. </p>
   */
  Status?: ModelVersionStatus;
}

/**
 * @public
 */
export interface ListDataIngestionJobsRequest {
  /**
   * @public
   * <p>The name of the dataset being used for the data ingestion job. </p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>An opaque pagination token indicating where to continue the listing of data ingestion
   *          jobs. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> Specifies the maximum number of data ingestion jobs to list. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Indicates the status of the data ingestion job. </p>
   */
  Status?: IngestionJobStatus;
}

/**
 * @public
 * <p>Provides information about a specified data ingestion job, including dataset
 *          information, data ingestion configuration, and status. </p>
 */
export interface DataIngestionJobSummary {
  /**
   * @public
   * <p>Indicates the job ID of the data ingestion job. </p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The name of the dataset used for the data ingestion job. </p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset used in the data ingestion job. </p>
   */
  DatasetArn?: string;

  /**
   * @public
   * <p> Specifies information for the input data for the data inference job, including data
   *             Amazon S3 location parameters. </p>
   */
  IngestionInputConfiguration?: IngestionInputConfiguration;

  /**
   * @public
   * <p>Indicates the status of the data ingestion job. </p>
   */
  Status?: IngestionJobStatus;
}

/**
 * @public
 */
export interface ListDataIngestionJobsResponse {
  /**
   * @public
   * <p> An opaque pagination token indicating where to continue the listing of data ingestion
   *          jobs. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies information about the specific data ingestion job, including dataset name and
   *          status. </p>
   */
  DataIngestionJobSummaries?: DataIngestionJobSummary[];
}

/**
 * @public
 */
export interface ListDatasetsRequest {
  /**
   * @public
   * <p> An opaque pagination token indicating where to continue the listing of datasets.
   *       </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> Specifies the maximum number of datasets to list. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The beginning of the name of the datasets to be listed. </p>
   */
  DatasetNameBeginsWith?: string;
}

/**
 * @public
 * <p>Contains information about the specific data set, including name, ARN, and status.
 *       </p>
 */
export interface DatasetSummary {
  /**
   * @public
   * <p>The name of the dataset. </p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the specified dataset. </p>
   */
  DatasetArn?: string;

  /**
   * @public
   * <p>Indicates the status of the dataset. </p>
   */
  Status?: DatasetStatus;

  /**
   * @public
   * <p>The time at which the dataset was created in Amazon Lookout for Equipment. </p>
   */
  CreatedAt?: Date;
}

/**
 * @public
 */
export interface ListDatasetsResponse {
  /**
   * @public
   * <p> An opaque pagination token indicating where to continue the listing of datasets.
   *       </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Provides information about the specified dataset, including creation time, dataset ARN,
   *          and status. </p>
   */
  DatasetSummaries?: DatasetSummary[];
}

/**
 * @public
 */
export interface ListInferenceEventsRequest {
  /**
   * @public
   * <p>An opaque pagination token indicating where to continue the listing of inference
   *          events.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies the maximum number of inference events to list. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The name of the inference scheduler for the inference events listed. </p>
   */
  InferenceSchedulerName: string | undefined;

  /**
   * @public
   * <p> Lookout for Equipment will return all the inference events with an end time equal to or greater than
   *          the start time given.</p>
   */
  IntervalStartTime: Date | undefined;

  /**
   * @public
   * <p>Returns all the inference events with an end start time equal to or greater than less
   *          than the end time given.</p>
   */
  IntervalEndTime: Date | undefined;
}

/**
 * @public
 * <p>Contains information about the specific inference event, including start and end time,
 *          diagnostics information, event duration and so on.</p>
 */
export interface InferenceEventSummary {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the inference scheduler being used for the inference
   *          event. </p>
   */
  InferenceSchedulerArn?: string;

  /**
   * @public
   * <p>The name of the inference scheduler being used for the inference events. </p>
   */
  InferenceSchedulerName?: string;

  /**
   * @public
   * <p>Indicates the starting time of an inference event. </p>
   */
  EventStartTime?: Date;

  /**
   * @public
   * <p>Indicates the ending time of an inference event. </p>
   */
  EventEndTime?: Date;

  /**
   * @public
   * <p> An array which specifies the names and values of all sensors contributing to an
   *          inference event.</p>
   */
  Diagnostics?: string;

  /**
   * @public
   * <p> Indicates the size of an inference event in seconds. </p>
   */
  EventDurationInSeconds?: number;
}

/**
 * @public
 */
export interface ListInferenceEventsResponse {
  /**
   * @public
   * <p>An opaque pagination token indicating where to continue the listing of inference
   *          executions. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Provides an array of information about the individual inference events returned from the
   *             <code>ListInferenceEvents</code> operation, including scheduler used, event start time,
   *          event end time, diagnostics, and so on. </p>
   */
  InferenceEventSummaries?: InferenceEventSummary[];
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
   * @public
   * <p>An opaque pagination token indicating where to continue the listing of inference
   *          executions.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies the maximum number of inference executions to list. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The name of the inference scheduler for the inference execution listed. </p>
   */
  InferenceSchedulerName: string | undefined;

  /**
   * @public
   * <p>The time reference in the inferenced dataset after which Amazon Lookout for Equipment started the inference
   *          execution. </p>
   */
  DataStartTimeAfter?: Date;

  /**
   * @public
   * <p>The time reference in the inferenced dataset before which Amazon Lookout for Equipment stopped the
   *          inference execution. </p>
   */
  DataEndTimeBefore?: Date;

  /**
   * @public
   * <p>The status of the inference execution. </p>
   */
  Status?: InferenceExecutionStatus;
}

/**
 * @public
 * <p>Contains information about the specific inference execution, including input and output
 *          data configuration, inference scheduling information, status, and so on. </p>
 */
export interface InferenceExecutionSummary {
  /**
   * @public
   * <p>The name of the machine learning model being used for the inference execution. </p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the machine learning model used for the inference
   *          execution. </p>
   */
  ModelArn?: string;

  /**
   * @public
   * <p>The name of the inference scheduler being used for the inference execution. </p>
   */
  InferenceSchedulerName?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the inference scheduler being used for the inference
   *          execution. </p>
   */
  InferenceSchedulerArn?: string;

  /**
   * @public
   * <p>Indicates the start time at which the inference scheduler began the specific inference
   *          execution. </p>
   */
  ScheduledStartTime?: Date;

  /**
   * @public
   * <p>Indicates the time reference in the dataset at which the inference execution began.
   *       </p>
   */
  DataStartTime?: Date;

  /**
   * @public
   * <p>Indicates the time reference in the dataset at which the inference execution stopped.
   *       </p>
   */
  DataEndTime?: Date;

  /**
   * @public
   * <p> Specifies configuration information for the input data for the inference scheduler,
   *          including delimiter, format, and dataset location. </p>
   */
  DataInputConfiguration?: InferenceInputConfiguration;

  /**
   * @public
   * <p> Specifies configuration information for the output results from for the inference
   *          execution, including the output Amazon S3 location.
   *       </p>
   */
  DataOutputConfiguration?: InferenceOutputConfiguration;

  /**
   * @public
   * <p>The S3 object that the inference execution results were uploaded to.</p>
   */
  CustomerResultObject?: S3Object;

  /**
   * @public
   * <p>Indicates the status of the inference execution. </p>
   */
  Status?: InferenceExecutionStatus;

  /**
   * @public
   * <p> Specifies the reason for failure when an inference execution has failed. </p>
   */
  FailedReason?: string;

  /**
   * @public
   * <p>The model version used for the inference execution.</p>
   */
  ModelVersion?: number;

  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the model version used for the inference
   *          execution.</p>
   */
  ModelVersionArn?: string;
}

/**
 * @public
 */
export interface ListInferenceExecutionsResponse {
  /**
   * @public
   * <p> An opaque pagination token indicating where to continue the listing of inference
   *          executions. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Provides an array of information about the individual inference executions returned from
   *          the <code>ListInferenceExecutions</code> operation, including model used, inference
   *          scheduler, data configuration, and so on. </p>
   */
  InferenceExecutionSummaries?: InferenceExecutionSummary[];
}

/**
 * @public
 */
export interface ListInferenceSchedulersRequest {
  /**
   * @public
   * <p> An opaque pagination token indicating where to continue the listing of inference
   *          schedulers. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> Specifies the maximum number of inference schedulers to list. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The beginning of the name of the inference schedulers to be listed. </p>
   */
  InferenceSchedulerNameBeginsWith?: string;

  /**
   * @public
   * <p>The name of the machine learning model used by the inference scheduler to be listed.
   *       </p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>Specifies the current status of the inference schedulers.</p>
   */
  Status?: InferenceSchedulerStatus;
}

/**
 * @public
 * <p>Contains information about the specific inference scheduler, including data delay
 *          offset, model name and ARN, status, and so on. </p>
 */
export interface InferenceSchedulerSummary {
  /**
   * @public
   * <p>The name of the machine learning model used for the inference scheduler. </p>
   */
  ModelName?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the machine learning model used by the inference
   *          scheduler. </p>
   */
  ModelArn?: string;

  /**
   * @public
   * <p>The name of the inference scheduler. </p>
   */
  InferenceSchedulerName?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the inference scheduler. </p>
   */
  InferenceSchedulerArn?: string;

  /**
   * @public
   * <p>Indicates the status of the inference scheduler. </p>
   */
  Status?: InferenceSchedulerStatus;

  /**
   * @public
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
   * @public
   * <p>How often data is uploaded to the source S3 bucket for the input data. This value is the
   *          length of time between data uploads. For instance, if you select 5 minutes, Amazon Lookout
   *          for Equipment will upload the real-time data to the source bucket once every 5 minutes.
   *          This frequency also determines how often Amazon Lookout for Equipment starts a scheduled inference on your
   *          data. In this example, it starts once every 5 minutes. </p>
   */
  DataUploadFrequency?: DataUploadFrequency;

  /**
   * @public
   * <p>Indicates whether the latest execution for the inference scheduler was Anomalous
   *          (anomalous events found) or Normal (no anomalous events found).</p>
   */
  LatestInferenceResult?: LatestInferenceResult;
}

/**
 * @public
 */
export interface ListInferenceSchedulersResponse {
  /**
   * @public
   * <p> An opaque pagination token indicating where to continue the listing of inference
   *          schedulers. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Provides information about the specified inference scheduler, including data upload
   *          frequency, model name and ARN, and status. </p>
   */
  InferenceSchedulerSummaries?: InferenceSchedulerSummary[];
}

/**
 * @public
 */
export interface ListLabelGroupsRequest {
  /**
   * @public
   * <p> The beginning of the name of the label groups to be listed. </p>
   */
  LabelGroupNameBeginsWith?: string;

  /**
   * @public
   * <p> An opaque pagination token indicating where to continue the listing of label groups.
   *       </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> Specifies the maximum number of label groups to list. </p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p> Contains information about the label group. </p>
 */
export interface LabelGroupSummary {
  /**
   * @public
   * <p> The name of the label group. </p>
   */
  LabelGroupName?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the label group. </p>
   */
  LabelGroupArn?: string;

  /**
   * @public
   * <p> The time at which the label group was created. </p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p> The time at which the label group was updated. </p>
   */
  UpdatedAt?: Date;
}

/**
 * @public
 */
export interface ListLabelGroupsResponse {
  /**
   * @public
   * <p> An opaque pagination token indicating where to continue the listing of label groups.
   *       </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> A summary of the label groups. </p>
   */
  LabelGroupSummaries?: LabelGroupSummary[];
}

/**
 * @public
 */
export interface ListLabelsRequest {
  /**
   * @public
   * <p> Retruns the name of the label group. </p>
   */
  LabelGroupName: string | undefined;

  /**
   * @public
   * <p> Returns all the labels with a end time equal to or later than the start time given.
   *       </p>
   */
  IntervalStartTime?: Date;

  /**
   * @public
   * <p> Returns all labels with a start time earlier than the end time given. </p>
   */
  IntervalEndTime?: Date;

  /**
   * @public
   * <p> Returns labels with a particular fault code. </p>
   */
  FaultCode?: string;

  /**
   * @public
   * <p> Lists the labels that pertain to a particular piece of equipment. </p>
   */
  Equipment?: string;

  /**
   * @public
   * <p> An opaque pagination token indicating where to continue the listing of label groups.
   *       </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> Specifies the maximum number of labels to list. </p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p> Information about the label. </p>
 */
export interface LabelSummary {
  /**
   * @public
   * <p> The name of the label group. </p>
   */
  LabelGroupName?: string;

  /**
   * @public
   * <p> The ID of the label. </p>
   */
  LabelId?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the label group. </p>
   */
  LabelGroupArn?: string;

  /**
   * @public
   * <p> The timestamp indicating the start of the label. </p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p> The timestamp indicating the end of the label. </p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p> Indicates whether a labeled event represents an anomaly. </p>
   */
  Rating?: LabelRating;

  /**
   * @public
   * <p> Indicates the type of anomaly associated with the label. </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data.</p>
   */
  FaultCode?: string;

  /**
   * @public
   * <p> Indicates that a label pertains to a particular piece of equipment. </p>
   */
  Equipment?: string;

  /**
   * @public
   * <p> The time at which the label was created. </p>
   */
  CreatedAt?: Date;
}

/**
 * @public
 */
export interface ListLabelsResponse {
  /**
   * @public
   * <p> An opaque pagination token indicating where to continue the listing of datasets.
   *       </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> A summary of the items in the label group. </p>
   */
  LabelSummaries?: LabelSummary[];
}

/**
 * @public
 */
export interface ListModelsRequest {
  /**
   * @public
   * <p> An opaque pagination token indicating where to continue the listing of machine learning
   *          models. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p> Specifies the maximum number of machine learning models to list. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The status of the machine learning model. </p>
   */
  Status?: ModelStatus;

  /**
   * @public
   * <p>The beginning of the name of the machine learning models being listed. </p>
   */
  ModelNameBeginsWith?: string;

  /**
   * @public
   * <p>The beginning of the name of the dataset of the machine learning models to be listed.
   *       </p>
   */
  DatasetNameBeginsWith?: string;
}

/**
 * @public
 * <p>Provides information about the specified machine learning model, including dataset and
 *          model names and ARNs, as well as status. </p>
 */
export interface ModelSummary {
  /**
   * @public
   * <p>The name of the machine learning model. </p>
   */
  ModelName?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the machine learning model. </p>
   */
  ModelArn?: string;

  /**
   * @public
   * <p>The name of the dataset being used for the machine learning model. </p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the dataset used to create the model. </p>
   */
  DatasetArn?: string;

  /**
   * @public
   * <p>Indicates the status of the machine learning model. </p>
   */
  Status?: ModelStatus;

  /**
   * @public
   * <p>The time at which the specific model was created. </p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The model version that the inference scheduler uses to run an inference
   *          execution.</p>
   */
  ActiveModelVersion?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model version that is set as active. The active
   *          model version is the model version that the inference scheduler uses to run an inference
   *          execution.</p>
   */
  ActiveModelVersionArn?: string;

  /**
   * @public
   * <p>Indicates the status of the most recent scheduled retraining run. </p>
   */
  LatestScheduledRetrainingStatus?: ModelVersionStatus;

  /**
   * @public
   * <p>Indicates the most recent model version that was generated by retraining. </p>
   */
  LatestScheduledRetrainingModelVersion?: number;

  /**
   * @public
   * <p>Indicates the start time of the most recent scheduled retraining run. </p>
   */
  LatestScheduledRetrainingStartTime?: Date;

  /**
   * @public
   * <p>Indicates the date that the next scheduled retraining run will start on. Lookout for Equipment truncates
   *          the time you provide to <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp">the nearest UTC day</a>.</p>
   */
  NextScheduledRetrainingStartDate?: Date;

  /**
   * @public
   * <p>Indicates the status of the retraining scheduler. </p>
   */
  RetrainingSchedulerStatus?: RetrainingSchedulerStatus;
}

/**
 * @public
 */
export interface ListModelsResponse {
  /**
   * @public
   * <p> An opaque pagination token indicating where to continue the listing of machine learning
   *          models. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Provides information on the specified model, including created time, model and dataset
   *          ARNs, and status. </p>
   */
  ModelSummaries?: ModelSummary[];
}

/**
 * @public
 */
export interface ListModelVersionsRequest {
  /**
   * @public
   * <p>Then name of the machine learning model for which the model versions are to be
   *          listed.</p>
   */
  ModelName: string | undefined;

  /**
   * @public
   * <p>If the total number of results exceeds the limit that the response can display, the
   *          response returns an opaque pagination token indicating where to continue the listing of
   *          machine learning model versions. Use this token in the <code>NextToken</code> field in the
   *          request to list the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies the maximum number of machine learning model versions to list.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filter the results based on the current status of the model version.</p>
   */
  Status?: ModelVersionStatus;

  /**
   * @public
   * <p>Filter the results based on the way the model version was generated.</p>
   */
  SourceType?: ModelVersionSourceType;

  /**
   * @public
   * <p>Filter results to return all the model versions created before this time.</p>
   */
  CreatedAtEndTime?: Date;

  /**
   * @public
   * <p>Filter results to return all the model versions created after this time.</p>
   */
  CreatedAtStartTime?: Date;

  /**
   * @public
   * <p>Specifies the highest version of the model to return in the list.</p>
   */
  MaxModelVersion?: number;

  /**
   * @public
   * <p>Specifies the lowest version of the model to return in the list.</p>
   */
  MinModelVersion?: number;
}

/**
 * @public
 * <p>Contains information about the specific model version.</p>
 */
export interface ModelVersionSummary {
  /**
   * @public
   * <p>The name of the model that this model version is a version of.</p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model that this model version is a version
   *          of.</p>
   */
  ModelArn?: string;

  /**
   * @public
   * <p>The version of the model.</p>
   */
  ModelVersion?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the model version.</p>
   */
  ModelVersionArn?: string;

  /**
   * @public
   * <p>The time when this model version was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>The current status of the model version.</p>
   */
  Status?: ModelVersionStatus;

  /**
   * @public
   * <p>Indicates how this model version was generated.</p>
   */
  SourceType?: ModelVersionSourceType;
}

/**
 * @public
 */
export interface ListModelVersionsResponse {
  /**
   * @public
   * <p>If the total number of results exceeds the limit that the response can display, the
   *          response returns an opaque pagination token indicating where to continue the listing of
   *          machine learning model versions. Use this token in the <code>NextToken</code> field in the
   *          request to list the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Provides information on the specified model version, including the created time, model
   *          and dataset ARNs, and status.</p>
   */
  ModelVersionSummaries?: ModelVersionSummary[];
}

/**
 * @public
 */
export interface ListRetrainingSchedulersRequest {
  /**
   * @public
   * <p>Specify this field to only list retraining schedulers whose machine learning models
   *          begin with the value you specify. </p>
   */
  ModelNameBeginsWith?: string;

  /**
   * @public
   * <p>Specify this field to only list retraining schedulers whose status matches the value you
   *          specify. </p>
   */
  Status?: RetrainingSchedulerStatus;

  /**
   * @public
   * <p>If the number of results exceeds the maximum, a pagination token is returned. Use the
   *          token in the request to show the next page of retraining schedulers.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies the maximum number of retraining schedulers to list. </p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Provides information about the specified retraining scheduler, including model name,
 *          status, start date, frequency, and lookback window. </p>
 */
export interface RetrainingSchedulerSummary {
  /**
   * @public
   * <p>The name of the model that the retraining scheduler is attached to. </p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The ARN of the model that the retraining scheduler is attached to. </p>
   */
  ModelArn?: string;

  /**
   * @public
   * <p>The status of the retraining scheduler. </p>
   */
  Status?: RetrainingSchedulerStatus;

  /**
   * @public
   * <p>The start date for the retraining scheduler. Lookout for Equipment truncates the time you provide to the
   *          nearest UTC day.</p>
   */
  RetrainingStartDate?: Date;

  /**
   * @public
   * <p>The frequency at which the model retraining is set. This follows the <a href="https://en.wikipedia.org/wiki/ISO_8601#Durations">ISO 8601</a>
   *          guidelines.</p>
   */
  RetrainingFrequency?: string;

  /**
   * @public
   * <p>The number of past days of data used for retraining.</p>
   */
  LookbackWindow?: string;
}

/**
 * @public
 */
export interface ListRetrainingSchedulersResponse {
  /**
   * @public
   * <p>Provides information on the specified retraining scheduler, including the model name,
   *          model ARN, status, and start date. </p>
   */
  RetrainingSchedulerSummaries?: RetrainingSchedulerSummary[];

  /**
   * @public
   * <p>If the number of results exceeds the maximum, this pagination token is returned. Use
   *          this token in the request to show the next page of retraining schedulers.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSensorStatisticsRequest {
  /**
   * @public
   * <p> The name of the dataset associated with the list of Sensor Statistics. </p>
   */
  DatasetName: string | undefined;

  /**
   * @public
   * <p> The ingestion job id associated with the list of Sensor Statistics. To get sensor
   *          statistics for a particular ingestion job id, both dataset name and ingestion job id must
   *          be submitted as inputs. </p>
   */
  IngestionJobId?: string;

  /**
   * @public
   * <p>Specifies the maximum number of sensors for which to retrieve statistics. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An opaque pagination token indicating where to continue the listing of sensor
   *          statistics. </p>
   */
  NextToken?: string;
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
 * @public
 * <p> Entity that comprises information on categorical values in data. </p>
 */
export interface CategoricalValues {
  /**
   * @public
   * <p> Indicates whether there is a potential data issue related to categorical values.
   *       </p>
   */
  Status: StatisticalIssueStatus | undefined;

  /**
   * @public
   * <p> Indicates the number of categories in the data. </p>
   */
  NumberOfCategory?: number;
}

/**
 * @public
 * <p> Entity that comprises information of count and percentage. </p>
 */
export interface CountPercent {
  /**
   * @public
   * <p> Indicates the count of occurences of the given statistic. </p>
   */
  Count: number | undefined;

  /**
   * @public
   * <p> Indicates the percentage of occurances of the given statistic. </p>
   */
  Percentage: number | undefined;
}

/**
 * @public
 * <p> Entity that comprises information on large gaps between consecutive timestamps in data.
 *       </p>
 */
export interface LargeTimestampGaps {
  /**
   * @public
   * <p> Indicates whether there is a potential data issue related to large gaps in timestamps.
   *       </p>
   */
  Status: StatisticalIssueStatus | undefined;

  /**
   * @public
   * <p> Indicates the number of large timestamp gaps, if there are any. </p>
   */
  NumberOfLargeTimestampGaps?: number;

  /**
   * @public
   * <p> Indicates the size of the largest timestamp gap, in days. </p>
   */
  MaxTimestampGapInDays?: number;
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
 * @public
 * <p> Entity that comprises information on monotonic values in the data. </p>
 */
export interface MonotonicValues {
  /**
   * @public
   * <p> Indicates whether there is a potential data issue related to having monotonic values.
   *       </p>
   */
  Status: StatisticalIssueStatus | undefined;

  /**
   * @public
   * <p> Indicates the monotonicity of values. Can be INCREASING, DECREASING, or STATIC. </p>
   */
  Monotonicity?: Monotonicity;
}

/**
 * @public
 * <p> Entity that comprises information on operating modes in data. </p>
 */
export interface MultipleOperatingModes {
  /**
   * @public
   * <p> Indicates whether there is a potential data issue related to having multiple operating
   *          modes. </p>
   */
  Status: StatisticalIssueStatus | undefined;
}

/**
 * @public
 * <p> Summary of ingestion statistics like whether data exists, number of missing values,
 *          number of invalid values and so on related to the particular sensor. </p>
 */
export interface SensorStatisticsSummary {
  /**
   * @public
   * <p> Name of the component to which the particular sensor belongs for which the statistics
   *          belong to. </p>
   */
  ComponentName?: string;

  /**
   * @public
   * <p> Name of the sensor that the statistics belong to. </p>
   */
  SensorName?: string;

  /**
   * @public
   * <p> Parameter that indicates whether data exists for the sensor that the statistics belong
   *          to. </p>
   */
  DataExists?: boolean;

  /**
   * @public
   * <p> Parameter that describes the total number of, and percentage of, values that are
   *          missing for the sensor that the statistics belong to. </p>
   */
  MissingValues?: CountPercent;

  /**
   * @public
   * <p> Parameter that describes the total number of, and percentage of, values that are
   *          invalid for the sensor that the statistics belong to. </p>
   */
  InvalidValues?: CountPercent;

  /**
   * @public
   * <p> Parameter that describes the total number of invalid date entries associated with the
   *          sensor that the statistics belong to. </p>
   */
  InvalidDateEntries?: CountPercent;

  /**
   * @public
   * <p> Parameter that describes the total number of duplicate timestamp records associated
   *          with the sensor that the statistics belong to. </p>
   */
  DuplicateTimestamps?: CountPercent;

  /**
   * @public
   * <p> Parameter that describes potential risk about whether data associated with the sensor
   *          is categorical. </p>
   */
  CategoricalValues?: CategoricalValues;

  /**
   * @public
   * <p> Parameter that describes potential risk about whether data associated with the sensor
   *          has more than one operating mode. </p>
   */
  MultipleOperatingModes?: MultipleOperatingModes;

  /**
   * @public
   * <p> Parameter that describes potential risk about whether data associated with the sensor
   *          contains one or more large gaps between consecutive timestamps. </p>
   */
  LargeTimestampGaps?: LargeTimestampGaps;

  /**
   * @public
   * <p> Parameter that describes potential risk about whether data associated with the sensor
   *          is mostly monotonic. </p>
   */
  MonotonicValues?: MonotonicValues;

  /**
   * @public
   * <p> Indicates the time reference to indicate the beginning of valid data associated with
   *          the sensor that the statistics belong to. </p>
   */
  DataStartTime?: Date;

  /**
   * @public
   * <p> Indicates the time reference to indicate the end of valid data associated with the
   *          sensor that the statistics belong to. </p>
   */
  DataEndTime?: Date;
}

/**
 * @public
 */
export interface ListSensorStatisticsResponse {
  /**
   * @public
   * <p>Provides ingestion-based statistics regarding the specified sensor with respect to
   *          various validation types, such as whether data exists, the number and percentage of missing
   *          values, and the number and percentage of duplicate timestamps. </p>
   */
  SensorStatisticsSummaries?: SensorStatisticsSummary[];

  /**
   * @public
   * <p>An opaque pagination token indicating where to continue the listing of sensor
   *          statistics. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource (such as the dataset or model) that is
   *          the focus of the <code>ListTagsForResource</code> operation. </p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p> Any tags associated with the resource. </p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource for which the policy is being
   *          created.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The JSON-formatted resource policy to create.</p>
   */
  ResourcePolicy: string | undefined;

  /**
   * @public
   * <p>A unique identifier for a revision of the resource policy.</p>
   */
  PolicyRevisionId?: string;

  /**
   * @public
   * <p>A unique identifier for the request. If you do not set the client request token,
   *          Amazon Lookout for Equipment generates one. </p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource for which the policy was created.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>A unique identifier for a revision of the resource policy.</p>
   */
  PolicyRevisionId?: string;
}

/**
 * @public
 */
export interface StartDataIngestionJobRequest {
  /**
   * @public
   * <p>The name of the dataset being used by the data ingestion job. </p>
   */
  DatasetName: string | undefined;

  /**
   * @public
   * <p> Specifies information for the input data for the data ingestion job, including dataset
   *          S3 location. </p>
   */
  IngestionInputConfiguration: IngestionInputConfiguration | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of a role with permission to access the data source for
   *          the data ingestion job. </p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p> A unique identifier for the request. If you do not set the client request token, Amazon
   *          Lookout for Equipment generates one. </p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface StartDataIngestionJobResponse {
  /**
   * @public
   * <p>Indicates the job ID of the data ingestion job. </p>
   */
  JobId?: string;

  /**
   * @public
   * <p>Indicates the status of the <code>StartDataIngestionJob</code> operation. </p>
   */
  Status?: IngestionJobStatus;
}

/**
 * @public
 */
export interface StartInferenceSchedulerRequest {
  /**
   * @public
   * <p>The name of the inference scheduler to be started. </p>
   */
  InferenceSchedulerName: string | undefined;
}

/**
 * @public
 */
export interface StartInferenceSchedulerResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the machine learning model being used by the inference
   *          scheduler. </p>
   */
  ModelArn?: string;

  /**
   * @public
   * <p>The name of the machine learning model being used by the inference scheduler. </p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The name of the inference scheduler being started. </p>
   */
  InferenceSchedulerName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the inference scheduler being started. </p>
   */
  InferenceSchedulerArn?: string;

  /**
   * @public
   * <p>Indicates the status of the inference scheduler. </p>
   */
  Status?: InferenceSchedulerStatus;
}

/**
 * @public
 */
export interface StartRetrainingSchedulerRequest {
  /**
   * @public
   * <p>The name of the model whose retraining scheduler you want to start.</p>
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface StartRetrainingSchedulerResponse {
  /**
   * @public
   * <p>The name of the model whose retraining scheduler is being started. </p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The ARN of the model whose retraining scheduler is being started. </p>
   */
  ModelArn?: string;

  /**
   * @public
   * <p>The status of the retraining scheduler. </p>
   */
  Status?: RetrainingSchedulerStatus;
}

/**
 * @public
 */
export interface StopInferenceSchedulerRequest {
  /**
   * @public
   * <p>The name of the inference scheduler to be stopped. </p>
   */
  InferenceSchedulerName: string | undefined;
}

/**
 * @public
 */
export interface StopInferenceSchedulerResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the machine learning model used by the inference
   *          scheduler being stopped. </p>
   */
  ModelArn?: string;

  /**
   * @public
   * <p>The name of the machine learning model used by the inference scheduler being stopped.
   *       </p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The name of the inference scheduler being stopped. </p>
   */
  InferenceSchedulerName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the inference schedule being stopped. </p>
   */
  InferenceSchedulerArn?: string;

  /**
   * @public
   * <p>Indicates the status of the inference scheduler. </p>
   */
  Status?: InferenceSchedulerStatus;
}

/**
 * @public
 */
export interface StopRetrainingSchedulerRequest {
  /**
   * @public
   * <p>The name of the model whose retraining scheduler you want to stop.</p>
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface StopRetrainingSchedulerResponse {
  /**
   * @public
   * <p>The name of the model whose retraining scheduler is being stopped. </p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The ARN of the model whose retraining scheduler is being stopped. </p>
   */
  ModelArn?: string;

  /**
   * @public
   * <p>The status of the retraining scheduler. </p>
   */
  Status?: RetrainingSchedulerStatus;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the specific resource to which the tag should be
   *          associated. </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tag or tags to be associated with a specific resource. Both the tag key and value
   *          are specified. </p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to which the tag is currently associated.
   *       </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Specifies the key of the tag to be removed from a specified resource. </p>
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
   * @public
   * <p>The name of the machine learning model for which the active model version is being
   *          set.</p>
   */
  ModelName: string | undefined;

  /**
   * @public
   * <p>The version of the machine learning model for which the active model version is being
   *          set.</p>
   */
  ModelVersion: number | undefined;
}

/**
 * @public
 */
export interface UpdateActiveModelVersionResponse {
  /**
   * @public
   * <p>The name of the machine learning model for which the active model version was
   *          set.</p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the machine learning model for which the active model
   *          version was set.</p>
   */
  ModelArn?: string;

  /**
   * @public
   * <p>The version that is currently active of the machine learning model for which the active
   *          model version was set.</p>
   */
  CurrentActiveVersion?: number;

  /**
   * @public
   * <p>The previous version that was active of the machine learning model for which the active
   *          model version was set.</p>
   */
  PreviousActiveVersion?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the machine learning model version that is the current
   *          active model version.</p>
   */
  CurrentActiveVersionArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the machine learning model version that was the
   *          previous active model version.</p>
   */
  PreviousActiveVersionArn?: string;
}

/**
 * @public
 */
export interface UpdateInferenceSchedulerRequest {
  /**
   * @public
   * <p>The name of the inference scheduler to be updated. </p>
   */
  InferenceSchedulerName: string | undefined;

  /**
   * @public
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
   * @public
   * <p>How often data is uploaded to the source S3 bucket for the input data. The value chosen
   *          is the length of time between data uploads. For instance, if you select 5 minutes, Amazon
   *          Lookout for Equipment will upload the real-time data to the source bucket once every 5
   *          minutes. This frequency also determines how often Amazon Lookout for Equipment starts a scheduled inference on
   *          your data. In this example, it starts once every 5 minutes. </p>
   */
  DataUploadFrequency?: DataUploadFrequency;

  /**
   * @public
   * <p> Specifies information for the input data for the inference scheduler, including
   *          delimiter, format, and dataset location. </p>
   */
  DataInputConfiguration?: InferenceInputConfiguration;

  /**
   * @public
   * <p> Specifies information for the output results from the inference scheduler, including
   *          the output S3 location. </p>
   */
  DataOutputConfiguration?: InferenceOutputConfiguration;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of a role with permission to access the data source for
   *          the inference scheduler. </p>
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface UpdateLabelGroupRequest {
  /**
   * @public
   * <p> The name of the label group to be updated. </p>
   */
  LabelGroupName: string | undefined;

  /**
   * @public
   * <p> Updates the code indicating the type of anomaly associated with the label. </p>
   *          <p>Data in this field will be retained for service usage. Follow best practices for the
   *          security of your data.</p>
   */
  FaultCodes?: string[];
}

/**
 * @public
 */
export interface UpdateModelRequest {
  /**
   * @public
   * <p>The name of the model to update.</p>
   */
  ModelName: string | undefined;

  /**
   * @public
   * <p>Contains the configuration information for the S3 location being used to hold label
   *          data. </p>
   */
  LabelsInputConfiguration?: LabelsInputConfiguration;

  /**
   * @public
   * <p>The ARN of the model to update.</p>
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface UpdateRetrainingSchedulerRequest {
  /**
   * @public
   * <p>The name of the model whose retraining scheduler you want to update. </p>
   */
  ModelName: string | undefined;

  /**
   * @public
   * <p>The start date for the retraining scheduler. Lookout for Equipment truncates the time you provide to the
   *          nearest UTC day.</p>
   */
  RetrainingStartDate?: Date;

  /**
   * @public
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
   */
  RetrainingFrequency?: string;

  /**
   * @public
   * <p>The number of past days of data that will be used for retraining.</p>
   */
  LookbackWindow?: string;

  /**
   * @public
   * <p>Indicates how the service will use new models. In <code>MANAGED</code> mode, new models
   *          will automatically be used for inference if they have better performance than the current
   *          model. In <code>MANUAL</code> mode, the new models will not be used <a href="https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/versioning-model.html#model-activation">until they
   *             are manually activated</a>.</p>
   */
  PromoteMode?: ModelPromoteMode;
}
