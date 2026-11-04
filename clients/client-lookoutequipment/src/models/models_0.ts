// smithy-typescript generated code
import { AutomaticJsonStringConversion as __AutomaticJsonStringConversion } from "@smithy/core/serde";

import type {
  AutoPromotionResult,
  DatasetStatus,
  DataUploadFrequency,
  InferenceDataImportStrategy,
  InferenceExecutionStatus,
  InferenceSchedulerStatus,
  IngestionJobStatus,
  LabelRating,
  LatestInferenceResult,
  ModelPromoteMode,
  ModelQuality,
  ModelStatus,
  ModelVersionSourceType,
  ModelVersionStatus,
  Monotonicity,
  RetrainingSchedulerStatus,
  StatisticalIssueStatus,
  TargetSamplingRate,
} from "./enums";

/**
 * Provides information about the data schema used with the given dataset.
 *
 * @public
 */
export interface DatasetSchema {
  /**
   * The data schema used within the given dataset.
   *
   * @public
   */
  InlineDataSchema?: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * A tag is a key-value pair that can be added to a resource as metadata.
 *
 * @public
 */
export interface Tag {
  /**
   * The key for the specified tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value for the specified tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateDatasetRequest {
  /**
   * The name of the dataset being created.
   *
   * @public
   */
  DatasetName: string | undefined;

  /**
   * A JSON description of the data that is in each time series dataset, including names, column names, and data types.
   *
   * @public
   */
  DatasetSchema?: DatasetSchema | undefined;

  /**
   * Provides the identifier of the KMS key used to encrypt dataset data by Amazon Lookout for Equipment.
   *
   * @public
   */
  ServerSideKmsKeyId?: string | undefined;

  /**
   * A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Any tags associated with the ingested data described in the dataset.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDatasetResponse {
  /**
   * The name of the dataset being created.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset being created.
   *
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * Indicates the status of the `CreateDataset` operation.
   *
   * @public
   */
  Status?: DatasetStatus | undefined;
}

/**
 * Specifies configuration information for the input data for the inference, including timestamp format and delimiter.
 *
 * @public
 */
export interface InferenceInputNameConfiguration {
  /**
   * The format of the timestamp, whether Epoch time, or standard, with or without hyphens (-).
   *
   * @public
   */
  TimestampFormat?: string | undefined;

  /**
   * Indicates the delimiter character used between items in the data.
   *
   * @public
   */
  ComponentTimestampDelimiter?: string | undefined;
}

/**
 * Specifies configuration information for the input data for the inference, including input data S3 location.
 *
 * @public
 */
export interface InferenceS3InputConfiguration {
  /**
   * The bucket containing the input dataset for the inference.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The prefix for the S3 bucket used for the input data for the inference.
   *
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * Specifies configuration information for the input data for the inference, including Amazon S3 location of input data..
 *
 * @public
 */
export interface InferenceInputConfiguration {
  /**
   * Specifies configuration information for the input data for the inference, including Amazon S3 location of input data.
   *
   * @public
   */
  S3InputConfiguration?: InferenceS3InputConfiguration | undefined;

  /**
   * Indicates the difference between your time zone and Coordinated Universal Time (UTC).
   *
   * @public
   */
  InputTimeZoneOffset?: string | undefined;

  /**
   * Specifies configuration information for the input data for the inference, including timestamp format and delimiter.
   *
   * @public
   */
  InferenceInputNameConfiguration?: InferenceInputNameConfiguration | undefined;
}

/**
 * Specifies configuration information for the output results from the inference, including output S3 location.
 *
 * @public
 */
export interface InferenceS3OutputConfiguration {
  /**
   * The bucket containing the output results from the inference
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The prefix for the S3 bucket used for the output results from the inference.
   *
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * Specifies configuration information for the output results from for the inference, including KMS key ID and output S3 location.
 *
 * @public
 */
export interface InferenceOutputConfiguration {
  /**
   * Specifies configuration information for the output results from for the inference, output S3 location.
   *
   * @public
   */
  S3OutputConfiguration: InferenceS3OutputConfiguration | undefined;

  /**
   * The ID number for the KMS key key used to encrypt the inference output.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateInferenceSchedulerRequest {
  /**
   * The name of the previously trained machine learning model being used to create the inference scheduler.
   *
   * @public
   */
  ModelName: string | undefined;

  /**
   * The name of the inference scheduler being created.
   *
   * @public
   */
  InferenceSchedulerName: string | undefined;

  /**
   * The interval (in minutes) of planned delay at the start of each inference segment. For example, if inference is set to run every ten minutes, the delay is set to five minutes and the time is 09:08. The inference scheduler will wake up at the configured interval (which, without a delay configured, would be 09:10) plus the additional five minute delay time (so 09:15) to check your Amazon S3 bucket. The delay provides a buffer for you to upload data at the same frequency, so that you don't have to stop and restart the scheduler when uploading new data.
   *
   * For more information, see [Understanding the inference process](https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/understanding-inference-process.html).
   *
   * @public
   */
  DataDelayOffsetInMinutes?: number | undefined;

  /**
   * How often data is uploaded to the source Amazon S3 bucket for the input data. The value chosen is the length of time between data uploads. For instance, if you select 5 minutes, Amazon Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This frequency also determines how often Amazon Lookout for Equipment runs inference on your data.
   *
   * For more information, see [Understanding the inference process](https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/understanding-inference-process.html).
   *
   * @public
   */
  DataUploadFrequency: DataUploadFrequency | undefined;

  /**
   * Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.
   *
   * @public
   */
  DataInputConfiguration: InferenceInputConfiguration | undefined;

  /**
   * Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output.
   *
   * @public
   */
  DataOutputConfiguration: InferenceOutputConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * Provides the identifier of the KMS key used to encrypt inference scheduler data by Amazon Lookout for Equipment.
   *
   * @public
   */
  ServerSideKmsKeyId?: string | undefined;

  /**
   * A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Any tags associated with the inference scheduler.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateInferenceSchedulerResponse {
  /**
   * The Amazon Resource Name (ARN) of the inference scheduler being created.
   *
   * @public
   */
  InferenceSchedulerArn?: string | undefined;

  /**
   * The name of inference scheduler being created.
   *
   * @public
   */
  InferenceSchedulerName?: string | undefined;

  /**
   * Indicates the status of the `CreateInferenceScheduler` operation.
   *
   * @public
   */
  Status?: InferenceSchedulerStatus | undefined;

  /**
   * Provides a quality assessment for a model that uses labels. If Lookout for Equipment determines that the model quality is poor based on training metrics, the value is `POOR_QUALITY_DETECTED`. Otherwise, the value is `QUALITY_THRESHOLD_MET`.
   *
   * If the model is unlabeled, the model quality can't be assessed and the value of `ModelQuality` is `CANNOT_DETERMINE_QUALITY`. In this situation, you can get a model quality assessment by adding labels to the input dataset and retraining the model.
   *
   * For information about using labels with your models, see [Understanding labeling](https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/understanding-labeling.html).
   *
   * For information about improving the quality of a model, see [Best practices with Amazon Lookout for Equipment](https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/best-practices.html).
   *
   * @public
   */
  ModelQuality?: ModelQuality | undefined;
}

/**
 * @public
 */
export interface CreateLabelRequest {
  /**
   * The name of a group of labels.
   *
   * Data in this field will be retained for service usage. Follow best practices for the security of your data.
   *
   * @public
   */
  LabelGroupName: string | undefined;

  /**
   * The start time of the labeled event.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end time of the labeled event.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * Indicates whether a labeled event represents an anomaly.
   *
   * @public
   */
  Rating: LabelRating | undefined;

  /**
   * Provides additional information about the label. The fault code must be defined in the FaultCodes attribute of the label group.
   *
   * Data in this field will be retained for service usage. Follow best practices for the security of your data.
   *
   * @public
   */
  FaultCode?: string | undefined;

  /**
   * Metadata providing additional information about the label.
   *
   * Data in this field will be retained for service usage. Follow best practices for the security of your data.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * Indicates that a label pertains to a particular piece of equipment.
   *
   * Data in this field will be retained for service usage. Follow best practices for the security of your data.
   *
   * @public
   */
  Equipment?: string | undefined;

  /**
   * A unique identifier for the request to create a label. If you do not set the client request token, Lookout for Equipment generates one.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateLabelResponse {
  /**
   * The ID of the label that you have created.
   *
   * @public
   */
  LabelId?: string | undefined;
}

/**
 * @public
 */
export interface CreateLabelGroupRequest {
  /**
   * Names a group of labels.
   *
   * Data in this field will be retained for service usage. Follow best practices for the security of your data.
   *
   * @public
   */
  LabelGroupName: string | undefined;

  /**
   * The acceptable fault codes (indicating the type of anomaly associated with the label) that can be used with this label group.
   *
   * Data in this field will be retained for service usage. Follow best practices for the security of your data.
   *
   * @public
   */
  FaultCodes?: string[] | undefined;

  /**
   * A unique identifier for the request to create a label group. If you do not set the client request token, Lookout for Equipment generates one.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Tags that provide metadata about the label group you are creating.
   *
   * Data in this field will be retained for service usage. Follow best practices for the security of your data.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateLabelGroupResponse {
  /**
   * The name of the label group that you have created. Data in this field will be retained for service usage. Follow best practices for the security of your data.
   *
   * @public
   */
  LabelGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the label group that you have created.
   *
   * @public
   */
  LabelGroupArn?: string | undefined;
}

/**
 * The configuration is the `TargetSamplingRate`, which is the sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been collected at a 1 second level and you want the system to resample the data at a 1 minute rate before training, the `TargetSamplingRate` is 1 minute.
 *
 * When providing a value for the `TargetSamplingRate`, you must attach the prefix "PT" to the rate you want. The value for a 1 second rate is therefore *PT1S*, the value for a 15 minute rate is *PT15M*, and the value for a 1 hour rate is *PT1H*
 *
 * @public
 */
export interface DataPreProcessingConfiguration {
  /**
   * The sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been collected at a 1 second level and you want the system to resample the data at a 1 minute rate before training, the `TargetSamplingRate` is 1 minute.
   *
   * When providing a value for the `TargetSamplingRate`, you must attach the prefix "PT" to the rate you want. The value for a 1 second rate is therefore *PT1S*, the value for a 15 minute rate is *PT15M*, and the value for a 1 hour rate is *PT1H*
   *
   * @public
   */
  TargetSamplingRate?: TargetSamplingRate | undefined;
}

/**
 * The location information (prefix and bucket name) for the s3 location being used for label data.
 *
 * @public
 */
export interface LabelsS3InputConfiguration {
  /**
   * The name of the S3 bucket holding the label data.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The prefix for the S3 bucket used for the label data.
   *
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * Contains the configuration information for the S3 location being used to hold label data.
 *
 * @public
 */
export interface LabelsInputConfiguration {
  /**
   * Contains location information for the S3 location being used for label data.
   *
   * @public
   */
  S3InputConfiguration?: LabelsS3InputConfiguration | undefined;

  /**
   * The name of the label group to be used for label data.
   *
   * @public
   */
  LabelGroupName?: string | undefined;
}

/**
 * The Amazon S3 location for the pointwise model diagnostics for an Amazon Lookout for Equipment model.
 *
 * @public
 */
export interface ModelDiagnosticsS3OutputConfiguration {
  /**
   * The name of the Amazon S3 bucket where the pointwise model diagnostics are located. You must be the owner of the Amazon S3 bucket.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The Amazon S3 prefix for the location of the pointwise model diagnostics. The prefix specifies the folder and evaluation result file name. (`bucket`).
   *
   * When you call `CreateModel` or `UpdateModel`, specify the path within the bucket that you want Lookout for Equipment to save the model to. During training, Lookout for Equipment creates the model evaluation model as a compressed JSON file with the name `model_diagnostics_results.json.gz`.
   *
   * When you call `DescribeModel` or `DescribeModelVersion`, `prefix` contains the file path and filename of the model evaluation file.
   *
   * @public
   */
  Prefix?: string | undefined;
}

/**
 * Output configuration information for the pointwise model diagnostics for an Amazon Lookout for Equipment model.
 *
 * @public
 */
export interface ModelDiagnosticsOutputConfiguration {
  /**
   * The Amazon S3 location for the pointwise model diagnostics.
   *
   * @public
   */
  S3OutputConfiguration: ModelDiagnosticsS3OutputConfiguration | undefined;

  /**
   * The Amazon Web Services Key Management Service (KMS) key identifier to encrypt the pointwise model diagnostics files.
   *
   * @public
   */
  KmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateModelRequest {
  /**
   * The name for the machine learning model to be created.
   *
   * @public
   */
  ModelName: string | undefined;

  /**
   * The name of the dataset for the machine learning model being created.
   *
   * @public
   */
  DatasetName: string | undefined;

  /**
   * The data schema for the machine learning model being created.
   *
   * @public
   */
  DatasetSchema?: DatasetSchema | undefined;

  /**
   * The input configuration for the labels being used for the machine learning model that's being created.
   *
   * @public
   */
  LabelsInputConfiguration?: LabelsInputConfiguration | undefined;

  /**
   * A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Indicates the time reference in the dataset that should be used to begin the subset of training data for the machine learning model.
   *
   * @public
   */
  TrainingDataStartTime?: Date | undefined;

  /**
   * Indicates the time reference in the dataset that should be used to end the subset of training data for the machine learning model.
   *
   * @public
   */
  TrainingDataEndTime?: Date | undefined;

  /**
   * Indicates the time reference in the dataset that should be used to begin the subset of evaluation data for the machine learning model.
   *
   * @public
   */
  EvaluationDataStartTime?: Date | undefined;

  /**
   * Indicates the time reference in the dataset that should be used to end the subset of evaluation data for the machine learning model.
   *
   * @public
   */
  EvaluationDataEndTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of a role with permission to access the data source being used to create the machine learning model.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The configuration is the `TargetSamplingRate`, which is the sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been collected at a 1 second level and you want the system to resample the data at a 1 minute rate before training, the `TargetSamplingRate` is 1 minute.
   *
   * When providing a value for the `TargetSamplingRate`, you must attach the prefix "PT" to the rate you want. The value for a 1 second rate is therefore *PT1S*, the value for a 15 minute rate is *PT15M*, and the value for a 1 hour rate is *PT1H*
   *
   * @public
   */
  DataPreProcessingConfiguration?: DataPreProcessingConfiguration | undefined;

  /**
   * Provides the identifier of the KMS key used to encrypt model data by Amazon Lookout for Equipment.
   *
   * @public
   */
  ServerSideKmsKeyId?: string | undefined;

  /**
   * Any tags associated with the machine learning model being created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Indicates that the asset associated with this sensor has been shut off. As long as this condition is met, Lookout for Equipment will not use data from this asset for training, evaluation, or inference.
   *
   * @public
   */
  OffCondition?: string | undefined;

  /**
   * The Amazon S3 location where you want Amazon Lookout for Equipment to save the pointwise model diagnostics. You must also specify the `RoleArn` request parameter.
   *
   * @public
   */
  ModelDiagnosticsOutputConfiguration?: ModelDiagnosticsOutputConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateModelResponse {
  /**
   * The Amazon Resource Name (ARN) of the model being created.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * Indicates the status of the `CreateModel` operation.
   *
   * @public
   */
  Status?: ModelStatus | undefined;
}

/**
 * @public
 */
export interface CreateRetrainingSchedulerRequest {
  /**
   * The name of the model to add the retraining scheduler to.
   *
   * @public
   */
  ModelName: string | undefined;

  /**
   * The start date for the retraining scheduler. Lookout for Equipment truncates the time you provide to the nearest UTC day.
   *
   * @public
   */
  RetrainingStartDate?: Date | undefined;

  /**
   * This parameter uses the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) standard to set the frequency at which you want retraining to occur in terms of Years, Months, and/or Days (note: other parameters like Time are not currently supported). The minimum value is 30 days (P30D) and the maximum value is 1 year (P1Y). For example, the following values are valid:
   *
   * - P3M15D – Every 3 months and 15 days
   * - P2M – Every 2 months
   * - P150D – Every 150 days
   *
   * @public
   */
  RetrainingFrequency: string | undefined;

  /**
   * The number of past days of data that will be used for retraining.
   *
   * @public
   */
  LookbackWindow: string | undefined;

  /**
   * Indicates how the service will use new models. In `MANAGED` mode, new models will automatically be used for inference if they have better performance than the current model. In `MANUAL` mode, the new models will not be used [until they are manually activated](https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/versioning-model.html#model-activation).
   *
   * @public
   */
  PromoteMode?: ModelPromoteMode | undefined;

  /**
   * A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRetrainingSchedulerResponse {
  /**
   * The name of the model that you added the retraining scheduler to.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The ARN of the model that you added the retraining scheduler to.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * The status of the retraining scheduler.
   *
   * @public
   */
  Status?: RetrainingSchedulerStatus | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetRequest {
  /**
   * The name of the dataset to be deleted.
   *
   * @public
   */
  DatasetName: string | undefined;
}

/**
 * @public
 */
export interface DeleteInferenceSchedulerRequest {
  /**
   * The name of the inference scheduler to be deleted.
   *
   * @public
   */
  InferenceSchedulerName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLabelRequest {
  /**
   * The name of the label group that contains the label that you want to delete. Data in this field will be retained for service usage. Follow best practices for the security of your data.
   *
   * @public
   */
  LabelGroupName: string | undefined;

  /**
   * The ID of the label that you want to delete.
   *
   * @public
   */
  LabelId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLabelGroupRequest {
  /**
   * The name of the label group that you want to delete. Data in this field will be retained for service usage. Follow best practices for the security of your data.
   *
   * @public
   */
  LabelGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelRequest {
  /**
   * The name of the machine learning model to be deleted.
   *
   * @public
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource for which the resource policy should be deleted.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRetrainingSchedulerRequest {
  /**
   * The name of the model whose retraining scheduler you want to delete.
   *
   * @public
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataIngestionJobRequest {
  /**
   * The job ID of the data ingestion job.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * Entity that comprises information abount duplicate timestamps in the dataset.
 *
 * @public
 */
export interface DuplicateTimestamps {
  /**
   * Indicates the total number of duplicate timestamps.
   *
   * @public
   */
  TotalNumberOfDuplicateTimestamps: number | undefined;
}

/**
 * Entity that comprises information on sensors that have sensor data completely missing.
 *
 * @public
 */
export interface MissingCompleteSensorData {
  /**
   * Indicates the number of sensors that have data missing completely.
   *
   * @public
   */
  AffectedSensorCount: number | undefined;
}

/**
 * Entity that comprises information on sensors that have shorter date range.
 *
 * @public
 */
export interface SensorsWithShortDateRange {
  /**
   * Indicates the number of sensors that have less than 14 days of data.
   *
   * @public
   */
  AffectedSensorCount: number | undefined;
}

/**
 * Entity that comprises aggregated information on sensors having insufficient data.
 *
 * @public
 */
export interface InsufficientSensorData {
  /**
   * Parameter that describes the total number of sensors that have data completely missing for it.
   *
   * @public
   */
  MissingCompleteSensorData: MissingCompleteSensorData | undefined;

  /**
   * Parameter that describes the total number of sensors that have a short date range of less than 14 days of data overall.
   *
   * @public
   */
  SensorsWithShortDateRange: SensorsWithShortDateRange | undefined;
}

/**
 * Entity that comprises aggregated information on sensors having insufficient data.
 *
 * @public
 */
export interface InvalidSensorData {
  /**
   * Indicates the number of sensors that have at least some invalid values.
   *
   * @public
   */
  AffectedSensorCount: number | undefined;

  /**
   * Indicates the total number of invalid values across all the sensors.
   *
   * @public
   */
  TotalNumberOfInvalidValues: number | undefined;
}

/**
 * Entity that comprises aggregated information on sensors having missing data.
 *
 * @public
 */
export interface MissingSensorData {
  /**
   * Indicates the number of sensors that have atleast some data missing.
   *
   * @public
   */
  AffectedSensorCount: number | undefined;

  /**
   * Indicates the total number of missing values across all the sensors.
   *
   * @public
   */
  TotalNumberOfMissingValues: number | undefined;
}

/**
 * Entity that comprises information abount unsupported timestamps in the dataset.
 *
 * @public
 */
export interface UnsupportedTimestamps {
  /**
   * Indicates the total number of unsupported timestamps across the ingested data.
   *
   * @public
   */
  TotalNumberOfUnsupportedTimestamps: number | undefined;
}

/**
 * DataQualitySummary gives aggregated statistics over all the sensors about a completed ingestion job. It primarily gives more information about statistics over different incorrect data like MissingCompleteSensorData, MissingSensorData, UnsupportedDateFormats, InsufficientSensorData, DuplicateTimeStamps.
 *
 * @public
 */
export interface DataQualitySummary {
  /**
   * Parameter that gives information about insufficient data for sensors in the dataset. This includes information about those sensors that have complete data missing and those with a short date range.
   *
   * @public
   */
  InsufficientSensorData: InsufficientSensorData | undefined;

  /**
   * Parameter that gives information about data that is missing over all the sensors in the input data.
   *
   * @public
   */
  MissingSensorData: MissingSensorData | undefined;

  /**
   * Parameter that gives information about data that is invalid over all the sensors in the input data.
   *
   * @public
   */
  InvalidSensorData: InvalidSensorData | undefined;

  /**
   * Parameter that gives information about unsupported timestamps in the input data.
   *
   * @public
   */
  UnsupportedTimestamps: UnsupportedTimestamps | undefined;

  /**
   * Parameter that gives information about duplicate timestamps in the input data.
   *
   * @public
   */
  DuplicateTimestamps: DuplicateTimestamps | undefined;
}

/**
 * Contains information about an S3 bucket.
 *
 * @public
 */
export interface S3Object {
  /**
   * The name of the specific S3 bucket.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The Amazon Web Services Key Management Service (KMS key) key being used to encrypt the S3 object. Without this key, data in the bucket is not accessible.
   *
   * @public
   */
  Key: string | undefined;
}

/**
 * Gives statistics about how many files have been ingested, and which files have not been ingested, for a particular ingestion job.
 *
 * @public
 */
export interface IngestedFilesSummary {
  /**
   * Indicates the total number of files that were submitted for ingestion.
   *
   * @public
   */
  TotalNumberOfFiles: number | undefined;

  /**
   * Indicates the number of files that were successfully ingested.
   *
   * @public
   */
  IngestedNumberOfFiles: number | undefined;

  /**
   * Indicates the number of files that were discarded. A file could be discarded because its format is invalid (for example, a jpg or pdf) or not readable.
   *
   * @public
   */
  DiscardedFiles?: S3Object[] | undefined;
}

/**
 * Specifies S3 configuration information for the input data for the data ingestion job.
 *
 * @public
 */
export interface IngestionS3InputConfiguration {
  /**
   * The name of the S3 bucket used for the input data for the data ingestion.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The prefix for the S3 location being used for the input data for the data ingestion.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * The pattern for matching the Amazon S3 files that will be used for ingestion. If the schema was created previously without any KeyPattern, then the default KeyPattern \{prefix\}/\{component_name\}/* is used to download files from Amazon S3 according to the schema. This field is required when ingestion is being done for the first time.
   *
   * Valid Values: \{prefix\}/\{component_name\}_* | \{prefix\}/\{component_name\}/* | \{prefix\}/\{component_name\}[DELIMITER]* (Allowed delimiters : space, dot, underscore, hyphen)
   *
   * @public
   */
  KeyPattern?: string | undefined;
}

/**
 * Specifies configuration information for the input data for the data ingestion job, including input data S3 location.
 *
 * @public
 */
export interface IngestionInputConfiguration {
  /**
   * The location information for the S3 bucket used for input data for the data ingestion.
   *
   * @public
   */
  S3InputConfiguration: IngestionS3InputConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeDataIngestionJobResponse {
  /**
   * Indicates the job ID of the data ingestion job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset being used in the data ingestion job.
   *
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * Specifies the S3 location configuration for the data input for the data ingestion job.
   *
   * @public
   */
  IngestionInputConfiguration?: IngestionInputConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role with permission to access the data source being ingested.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The time at which the data ingestion job was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * Indicates the status of the `DataIngestionJob` operation.
   *
   * @public
   */
  Status?: IngestionJobStatus | undefined;

  /**
   * Specifies the reason for failure when a data ingestion job has failed.
   *
   * @public
   */
  FailedReason?: string | undefined;

  /**
   * Gives statistics about a completed ingestion job. These statistics primarily relate to quantifying incorrect data such as MissingCompleteSensorData, MissingSensorData, UnsupportedDateFormats, InsufficientSensorData, and DuplicateTimeStamps.
   *
   * @public
   */
  DataQualitySummary?: DataQualitySummary | undefined;

  /**
   * Gives statistics about how many files have been ingested, and which files have not been ingested, for a particular ingestion job.
   *
   * @public
   */
  IngestedFilesSummary?: IngestedFilesSummary | undefined;

  /**
   * Provides details about status of the ingestion job that is currently in progress.
   *
   * @public
   */
  StatusDetail?: string | undefined;

  /**
   * Indicates the size of the ingested dataset.
   *
   * @public
   */
  IngestedDataSize?: number | undefined;

  /**
   * Indicates the earliest timestamp corresponding to data that was successfully ingested during this specific ingestion job.
   *
   * @public
   */
  DataStartTime?: Date | undefined;

  /**
   * Indicates the latest timestamp corresponding to data that was successfully ingested during this specific ingestion job.
   *
   * @public
   */
  DataEndTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source dataset from which the data used for the data ingestion job was imported from.
   *
   * @public
   */
  SourceDatasetArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetRequest {
  /**
   * The name of the dataset to be described.
   *
   * @public
   */
  DatasetName: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetResponse {
  /**
   * The name of the dataset being described.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset being described.
   *
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * Specifies the time the dataset was created in Lookout for Equipment.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * Specifies the time the dataset was last updated, if it was.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * Indicates the status of the dataset.
   *
   * @public
   */
  Status?: DatasetStatus | undefined;

  /**
   * A JSON description of the data that is in each time series dataset, including names, column names, and data types.
   *
   * @public
   */
  Schema?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * Provides the identifier of the KMS key used to encrypt dataset data by Amazon Lookout for Equipment.
   *
   * @public
   */
  ServerSideKmsKeyId?: string | undefined;

  /**
   * Specifies the S3 location configuration for the data input for the data ingestion job.
   *
   * @public
   */
  IngestionInputConfiguration?: IngestionInputConfiguration | undefined;

  /**
   * Gives statistics associated with the given dataset for the latest successful associated ingestion job id. These statistics primarily relate to quantifying incorrect data such as MissingCompleteSensorData, MissingSensorData, UnsupportedDateFormats, InsufficientSensorData, and DuplicateTimeStamps.
   *
   * @public
   */
  DataQualitySummary?: DataQualitySummary | undefined;

  /**
   * IngestedFilesSummary associated with the given dataset for the latest successful associated ingestion job id.
   *
   * @public
   */
  IngestedFilesSummary?: IngestedFilesSummary | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that you are using for this the data ingestion job.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Indicates the earliest timestamp corresponding to data that was successfully ingested during the most recent ingestion of this particular dataset.
   *
   * @public
   */
  DataStartTime?: Date | undefined;

  /**
   * Indicates the latest timestamp corresponding to data that was successfully ingested during the most recent ingestion of this particular dataset.
   *
   * @public
   */
  DataEndTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source dataset from which the current data being described was imported from.
   *
   * @public
   */
  SourceDatasetArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInferenceSchedulerRequest {
  /**
   * The name of the inference scheduler being described.
   *
   * @public
   */
  InferenceSchedulerName: string | undefined;
}

/**
 * @public
 */
export interface DescribeInferenceSchedulerResponse {
  /**
   * The Amazon Resource Name (ARN) of the machine learning model of the inference scheduler being described.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * The name of the machine learning model of the inference scheduler being described.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The name of the inference scheduler being described.
   *
   * @public
   */
  InferenceSchedulerName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the inference scheduler being described.
   *
   * @public
   */
  InferenceSchedulerArn?: string | undefined;

  /**
   * Indicates the status of the inference scheduler.
   *
   * @public
   */
  Status?: InferenceSchedulerStatus | undefined;

  /**
   * A period of time (in minutes) by which inference on the data is delayed after the data starts. For instance, if you select an offset delay time of five minutes, inference will not begin on the data until the first data measurement after the five minute mark. For example, if five minutes is selected, the inference scheduler will wake up at the configured frequency with the additional five minute delay time to check the customer S3 bucket. The customer can upload data at the same frequency and they don't need to stop and restart the scheduler when uploading new data.
   *
   * @public
   */
  DataDelayOffsetInMinutes?: number | undefined;

  /**
   * Specifies how often data is uploaded to the source S3 bucket for the input data. This value is the length of time between data uploads. For instance, if you select 5 minutes, Amazon Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This frequency also determines how often Amazon Lookout for Equipment starts a scheduled inference on your data. In this example, it starts once every 5 minutes.
   *
   * @public
   */
  DataUploadFrequency?: DataUploadFrequency | undefined;

  /**
   * Specifies the time at which the inference scheduler was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * Specifies the time at which the inference scheduler was last updated, if it was.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.
   *
   * @public
   */
  DataInputConfiguration?: InferenceInputConfiguration | undefined;

  /**
   * Specifies information for the output results for the inference scheduler, including the output S3 location.
   *
   * @public
   */
  DataOutputConfiguration?: InferenceOutputConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of a role with permission to access the data source for the inference scheduler being described.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Provides the identifier of the KMS key used to encrypt inference scheduler data by Amazon Lookout for Equipment.
   *
   * @public
   */
  ServerSideKmsKeyId?: string | undefined;

  /**
   * Indicates whether the latest execution for the inference scheduler was Anomalous (anomalous events found) or Normal (no anomalous events found).
   *
   * @public
   */
  LatestInferenceResult?: LatestInferenceResult | undefined;
}

/**
 * @public
 */
export interface DescribeLabelRequest {
  /**
   * Returns the name of the group containing the label.
   *
   * @public
   */
  LabelGroupName: string | undefined;

  /**
   * Returns the ID of the label.
   *
   * @public
   */
  LabelId: string | undefined;
}

/**
 * @public
 */
export interface DescribeLabelResponse {
  /**
   * The name of the requested label group.
   *
   * @public
   */
  LabelGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the requested label group.
   *
   * @public
   */
  LabelGroupArn?: string | undefined;

  /**
   * The ID of the requested label.
   *
   * @public
   */
  LabelId?: string | undefined;

  /**
   * The start time of the requested label.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end time of the requested label.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * Indicates whether a labeled event represents an anomaly.
   *
   * @public
   */
  Rating?: LabelRating | undefined;

  /**
   * Indicates the type of anomaly associated with the label.
   *
   * Data in this field will be retained for service usage. Follow best practices for the security of your data.
   *
   * @public
   */
  FaultCode?: string | undefined;

  /**
   * Metadata providing additional information about the label.
   *
   * Data in this field will be retained for service usage. Follow best practices for the security of your data.
   *
   * @public
   */
  Notes?: string | undefined;

  /**
   * Indicates that a label pertains to a particular piece of equipment.
   *
   * @public
   */
  Equipment?: string | undefined;

  /**
   * The time at which the label was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeLabelGroupRequest {
  /**
   * Returns the name of the label group.
   *
   * @public
   */
  LabelGroupName: string | undefined;
}

/**
 * @public
 */
export interface DescribeLabelGroupResponse {
  /**
   * The name of the label group.
   *
   * @public
   */
  LabelGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the label group.
   *
   * @public
   */
  LabelGroupArn?: string | undefined;

  /**
   * Codes indicating the type of anomaly associated with the labels in the lagbel group.
   *
   * @public
   */
  FaultCodes?: string[] | undefined;

  /**
   * The time at which the label group was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time at which the label group was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeModelRequest {
  /**
   * The name of the machine learning model to be described.
   *
   * @public
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface DescribeModelResponse {
  /**
   * The name of the machine learning model being described.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the machine learning model being described.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * The name of the dataset being used by the machine learning being described.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * The Amazon Resouce Name (ARN) of the dataset used to create the machine learning model being described.
   *
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * A JSON description of the data that is in each time series dataset, including names, column names, and data types.
   *
   * @public
   */
  Schema?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * Specifies configuration information about the labels input, including its S3 location.
   *
   * @public
   */
  LabelsInputConfiguration?: LabelsInputConfiguration | undefined;

  /**
   * Indicates the time reference in the dataset that was used to begin the subset of training data for the machine learning model.
   *
   * @public
   */
  TrainingDataStartTime?: Date | undefined;

  /**
   * Indicates the time reference in the dataset that was used to end the subset of training data for the machine learning model.
   *
   * @public
   */
  TrainingDataEndTime?: Date | undefined;

  /**
   * Indicates the time reference in the dataset that was used to begin the subset of evaluation data for the machine learning model.
   *
   * @public
   */
  EvaluationDataStartTime?: Date | undefined;

  /**
   * Indicates the time reference in the dataset that was used to end the subset of evaluation data for the machine learning model.
   *
   * @public
   */
  EvaluationDataEndTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of a role with permission to access the data source for the machine learning model being described.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The configuration is the `TargetSamplingRate`, which is the sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been collected at a 1 second level and you want the system to resample the data at a 1 minute rate before training, the `TargetSamplingRate` is 1 minute.
   *
   * When providing a value for the `TargetSamplingRate`, you must attach the prefix "PT" to the rate you want. The value for a 1 second rate is therefore *PT1S*, the value for a 15 minute rate is *PT15M*, and the value for a 1 hour rate is *PT1H*
   *
   * @public
   */
  DataPreProcessingConfiguration?: DataPreProcessingConfiguration | undefined;

  /**
   * Specifies the current status of the model being described. Status describes the status of the most recent action of the model.
   *
   * @public
   */
  Status?: ModelStatus | undefined;

  /**
   * Indicates the time at which the training of the machine learning model began.
   *
   * @public
   */
  TrainingExecutionStartTime?: Date | undefined;

  /**
   * Indicates the time at which the training of the machine learning model was completed.
   *
   * @public
   */
  TrainingExecutionEndTime?: Date | undefined;

  /**
   * If the training of the machine learning model failed, this indicates the reason for that failure.
   *
   * @public
   */
  FailedReason?: string | undefined;

  /**
   * The Model Metrics show an aggregated summary of the model's performance within the evaluation time range. This is the JSON content of the metrics created when evaluating the model.
   *
   * @public
   */
  ModelMetrics?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * Indicates the last time the machine learning model was updated. The type of update is not specified.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * Indicates the time and date at which the machine learning model was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * Provides the identifier of the KMS key used to encrypt model data by Amazon Lookout for Equipment.
   *
   * @public
   */
  ServerSideKmsKeyId?: string | undefined;

  /**
   * Indicates that the asset associated with this sensor has been shut off. As long as this condition is met, Lookout for Equipment will not use data from this asset for training, evaluation, or inference.
   *
   * @public
   */
  OffCondition?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source model version. This field appears if the active model version was imported.
   *
   * @public
   */
  SourceModelVersionArn?: string | undefined;

  /**
   * The date and time when the import job was started. This field appears if the active model version was imported.
   *
   * @public
   */
  ImportJobStartTime?: Date | undefined;

  /**
   * The date and time when the import job was completed. This field appears if the active model version was imported.
   *
   * @public
   */
  ImportJobEndTime?: Date | undefined;

  /**
   * The name of the model version used by the inference schedular when running a scheduled inference execution.
   *
   * @public
   */
  ActiveModelVersion?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model version used by the inference scheduler when running a scheduled inference execution.
   *
   * @public
   */
  ActiveModelVersionArn?: string | undefined;

  /**
   * The date the active model version was activated.
   *
   * @public
   */
  ModelVersionActivatedAt?: Date | undefined;

  /**
   * The model version that was set as the active model version prior to the current active model version.
   *
   * @public
   */
  PreviousActiveModelVersion?: number | undefined;

  /**
   * The ARN of the model version that was set as the active model version prior to the current active model version.
   *
   * @public
   */
  PreviousActiveModelVersionArn?: string | undefined;

  /**
   * The date and time when the previous active model version was activated.
   *
   * @public
   */
  PreviousModelVersionActivatedAt?: Date | undefined;

  /**
   * If the model version was retrained, this field shows a summary of the performance of the prior model on the new training range. You can use the information in this JSON-formatted object to compare the new model version and the prior model version.
   *
   * @public
   */
  PriorModelMetrics?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * If the model version was generated by retraining and the training failed, this indicates the reason for that failure.
   *
   * @public
   */
  LatestScheduledRetrainingFailedReason?: string | undefined;

  /**
   * Indicates the status of the most recent scheduled retraining run.
   *
   * @public
   */
  LatestScheduledRetrainingStatus?: ModelVersionStatus | undefined;

  /**
   * Indicates the most recent model version that was generated by retraining.
   *
   * @public
   */
  LatestScheduledRetrainingModelVersion?: number | undefined;

  /**
   * Indicates the start time of the most recent scheduled retraining run.
   *
   * @public
   */
  LatestScheduledRetrainingStartTime?: Date | undefined;

  /**
   * Indicates the number of days of data used in the most recent scheduled retraining run.
   *
   * @public
   */
  LatestScheduledRetrainingAvailableDataInDays?: number | undefined;

  /**
   * Indicates the date and time that the next scheduled retraining run will start on. Lookout for Equipment truncates the time you provide to the nearest UTC day.
   *
   * @public
   */
  NextScheduledRetrainingStartDate?: Date | undefined;

  /**
   * Indicates the start time of the inference data that has been accumulated.
   *
   * @public
   */
  AccumulatedInferenceDataStartTime?: Date | undefined;

  /**
   * Indicates the end time of the inference data that has been accumulated.
   *
   * @public
   */
  AccumulatedInferenceDataEndTime?: Date | undefined;

  /**
   * Indicates the status of the retraining scheduler.
   *
   * @public
   */
  RetrainingSchedulerStatus?: RetrainingSchedulerStatus | undefined;

  /**
   * Configuration information for the model's pointwise model diagnostics.
   *
   * @public
   */
  ModelDiagnosticsOutputConfiguration?: ModelDiagnosticsOutputConfiguration | undefined;

  /**
   * Provides a quality assessment for a model that uses labels. If Lookout for Equipment determines that the model quality is poor based on training metrics, the value is `POOR_QUALITY_DETECTED`. Otherwise, the value is `QUALITY_THRESHOLD_MET`.
   *
   * If the model is unlabeled, the model quality can't be assessed and the value of `ModelQuality` is `CANNOT_DETERMINE_QUALITY`. In this situation, you can get a model quality assessment by adding labels to the input dataset and retraining the model.
   *
   * For information about using labels with your models, see [Understanding labeling](https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/understanding-labeling.html).
   *
   * For information about improving the quality of a model, see [Best practices with Amazon Lookout for Equipment](https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/best-practices.html).
   *
   * @public
   */
  ModelQuality?: ModelQuality | undefined;
}

/**
 * @public
 */
export interface DescribeModelVersionRequest {
  /**
   * The name of the machine learning model that this version belongs to.
   *
   * @public
   */
  ModelName: string | undefined;

  /**
   * The version of the machine learning model.
   *
   * @public
   */
  ModelVersion: number | undefined;
}

/**
 * @public
 */
export interface DescribeModelVersionResponse {
  /**
   * The name of the machine learning model that this version belongs to.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the parent machine learning model that this version belong to.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * The version of the machine learning model.
   *
   * @public
   */
  ModelVersion?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model version.
   *
   * @public
   */
  ModelVersionArn?: string | undefined;

  /**
   * The current status of the model version.
   *
   * @public
   */
  Status?: ModelVersionStatus | undefined;

  /**
   * Indicates whether this model version was created by training or by importing.
   *
   * @public
   */
  SourceType?: ModelVersionSourceType | undefined;

  /**
   * The name of the dataset used to train the model version.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset used to train the model version.
   *
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * The schema of the data used to train the model version.
   *
   * @public
   */
  Schema?: string | undefined;

  /**
   * Contains the configuration information for the S3 location being used to hold label data.
   *
   * @public
   */
  LabelsInputConfiguration?: LabelsInputConfiguration | undefined;

  /**
   * The date on which the training data began being gathered. If you imported the version, this is the date that the training data in the source version began being gathered.
   *
   * @public
   */
  TrainingDataStartTime?: Date | undefined;

  /**
   * The date on which the training data finished being gathered. If you imported the version, this is the date that the training data in the source version finished being gathered.
   *
   * @public
   */
  TrainingDataEndTime?: Date | undefined;

  /**
   * The date on which the data in the evaluation set began being gathered. If you imported the version, this is the date that the evaluation set data in the source version began being gathered.
   *
   * @public
   */
  EvaluationDataStartTime?: Date | undefined;

  /**
   * The date on which the data in the evaluation set began being gathered. If you imported the version, this is the date that the evaluation set data in the source version finished being gathered.
   *
   * @public
   */
  EvaluationDataEndTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role that was used to train the model version.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The configuration is the `TargetSamplingRate`, which is the sampling rate of the data after post processing by Amazon Lookout for Equipment. For example, if you provide data that has been collected at a 1 second level and you want the system to resample the data at a 1 minute rate before training, the `TargetSamplingRate` is 1 minute.
   *
   * When providing a value for the `TargetSamplingRate`, you must attach the prefix "PT" to the rate you want. The value for a 1 second rate is therefore *PT1S*, the value for a 15 minute rate is *PT15M*, and the value for a 1 hour rate is *PT1H*
   *
   * @public
   */
  DataPreProcessingConfiguration?: DataPreProcessingConfiguration | undefined;

  /**
   * The time when the training of the version began.
   *
   * @public
   */
  TrainingExecutionStartTime?: Date | undefined;

  /**
   * The time when the training of the version completed.
   *
   * @public
   */
  TrainingExecutionEndTime?: Date | undefined;

  /**
   * The failure message if the training of the model version failed.
   *
   * @public
   */
  FailedReason?: string | undefined;

  /**
   * Shows an aggregated summary, in JSON format, of the model's performance within the evaluation time range. These metrics are created when evaluating the model.
   *
   * @public
   */
  ModelMetrics?: string | undefined;

  /**
   * Indicates the last time the machine learning model version was updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * Indicates the time and date at which the machine learning model version was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The identifier of the KMS key key used to encrypt model version data by Amazon Lookout for Equipment.
   *
   * @public
   */
  ServerSideKmsKeyId?: string | undefined;

  /**
   * Indicates that the asset associated with this sensor has been shut off. As long as this condition is met, Lookout for Equipment will not use data from this asset for training, evaluation, or inference.
   *
   * @public
   */
  OffCondition?: string | undefined;

  /**
   * If model version was imported, then this field is the arn of the source model version.
   *
   * @public
   */
  SourceModelVersionArn?: string | undefined;

  /**
   * The date and time when the import job began. This field appears if the model version was imported.
   *
   * @public
   */
  ImportJobStartTime?: Date | undefined;

  /**
   * The date and time when the import job completed. This field appears if the model version was imported.
   *
   * @public
   */
  ImportJobEndTime?: Date | undefined;

  /**
   * The size in bytes of the imported data. This field appears if the model version was imported.
   *
   * @public
   */
  ImportedDataSizeInBytes?: number | undefined;

  /**
   * If the model version was retrained, this field shows a summary of the performance of the prior model on the new training range. You can use the information in this JSON-formatted object to compare the new model version and the prior model version.
   *
   * @public
   */
  PriorModelMetrics?: string | undefined;

  /**
   * Indicates the number of days of data used in the most recent scheduled retraining run.
   *
   * @public
   */
  RetrainingAvailableDataInDays?: number | undefined;

  /**
   * Indicates whether the model version was promoted to be the active version after retraining or if there was an error with or cancellation of the retraining.
   *
   * @public
   */
  AutoPromotionResult?: AutoPromotionResult | undefined;

  /**
   * Indicates the reason for the `AutoPromotionResult`. For example, a model might not be promoted if its performance was worse than the active version, if there was an error during training, or if the retraining scheduler was using `MANUAL` promote mode. The model will be promoted in `MANAGED` promote mode if the performance is better than the previous model.
   *
   * @public
   */
  AutoPromotionResultReason?: string | undefined;

  /**
   * The Amazon S3 location where Amazon Lookout for Equipment saves the pointwise model diagnostics for the model version.
   *
   * @public
   */
  ModelDiagnosticsOutputConfiguration?: ModelDiagnosticsOutputConfiguration | undefined;

  /**
   * The Amazon S3 output prefix for where Lookout for Equipment saves the pointwise model diagnostics for the model version.
   *
   * @public
   */
  ModelDiagnosticsResultsObject?: S3Object | undefined;

  /**
   * Provides a quality assessment for a model that uses labels. If Lookout for Equipment determines that the model quality is poor based on training metrics, the value is `POOR_QUALITY_DETECTED`. Otherwise, the value is `QUALITY_THRESHOLD_MET`.
   *
   * If the model is unlabeled, the model quality can't be assessed and the value of `ModelQuality` is `CANNOT_DETERMINE_QUALITY`. In this situation, you can get a model quality assessment by adding labels to the input dataset and retraining the model.
   *
   * For information about using labels with your models, see [Understanding labeling](https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/understanding-labeling.html).
   *
   * For information about improving the quality of a model, see [Best practices with Amazon Lookout for Equipment](https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/best-practices.html).
   *
   * @public
   */
  ModelQuality?: ModelQuality | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that is associated with the resource policy.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyResponse {
  /**
   * A unique identifier for a revision of the resource policy.
   *
   * @public
   */
  PolicyRevisionId?: string | undefined;

  /**
   * The resource policy in a JSON-formatted string.
   *
   * @public
   */
  ResourcePolicy?: string | undefined;

  /**
   * The time when the resource policy was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time when the resource policy was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRetrainingSchedulerRequest {
  /**
   * The name of the model that the retraining scheduler is attached to.
   *
   * @public
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface DescribeRetrainingSchedulerResponse {
  /**
   * The name of the model that the retraining scheduler is attached to.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The ARN of the model that the retraining scheduler is attached to.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * The start date for the retraining scheduler. Lookout for Equipment truncates the time you provide to the nearest UTC day.
   *
   * @public
   */
  RetrainingStartDate?: Date | undefined;

  /**
   * The frequency at which the model retraining is set. This follows the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) guidelines.
   *
   * @public
   */
  RetrainingFrequency?: string | undefined;

  /**
   * The number of past days of data used for retraining.
   *
   * @public
   */
  LookbackWindow?: string | undefined;

  /**
   * The status of the retraining scheduler.
   *
   * @public
   */
  Status?: RetrainingSchedulerStatus | undefined;

  /**
   * Indicates how the service uses new models. In `MANAGED` mode, new models are used for inference if they have better performance than the current model. In `MANUAL` mode, the new models are not used until they are [manually activated](https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/versioning-model.html#model-activation).
   *
   * @public
   */
  PromoteMode?: ModelPromoteMode | undefined;

  /**
   * Indicates the time and date at which the retraining scheduler was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * Indicates the time and date at which the retraining scheduler was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ImportDatasetRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset to import.
   *
   * @public
   */
  SourceDatasetArn: string | undefined;

  /**
   * The name of the machine learning dataset to be created. If the dataset already exists, Amazon Lookout for Equipment overwrites the existing dataset. If you don't specify this field, it is filled with the name of the source dataset.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * Provides the identifier of the KMS key key used to encrypt model data by Amazon Lookout for Equipment.
   *
   * @public
   */
  ServerSideKmsKeyId?: string | undefined;

  /**
   * Any tags associated with the dataset to be created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportDatasetResponse {
  /**
   * The name of the created machine learning dataset.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset that was imported.
   *
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * The status of the `ImportDataset` operation.
   *
   * @public
   */
  Status?: DatasetStatus | undefined;

  /**
   * A unique identifier for the job of importing the dataset.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * @public
 */
export interface ImportModelVersionRequest {
  /**
   * The Amazon Resource Name (ARN) of the model version to import.
   *
   * @public
   */
  SourceModelVersionArn: string | undefined;

  /**
   * The name for the machine learning model to be created. If the model already exists, Amazon Lookout for Equipment creates a new version. If you do not specify this field, it is filled with the name of the source model.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The name of the dataset for the machine learning model being imported.
   *
   * @public
   */
  DatasetName: string | undefined;

  /**
   * Contains the configuration information for the S3 location being used to hold label data.
   *
   * @public
   */
  LabelsInputConfiguration?: LabelsInputConfiguration | undefined;

  /**
   * A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a role with permission to access the data source being used to create the machine learning model.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Provides the identifier of the KMS key key used to encrypt model data by Amazon Lookout for Equipment.
   *
   * @public
   */
  ServerSideKmsKeyId?: string | undefined;

  /**
   * The tags associated with the machine learning model to be created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Indicates how to import the accumulated inference data when a model version is imported. The possible values are as follows:
   *
   * - NO_IMPORT – Don't import the data.
   * - ADD_WHEN_EMPTY – Only import the data from the source model if there is no existing data in the target model.
   * - OVERWRITE – Import the data from the source model and overwrite the existing data in the target model.
   *
   * @public
   */
  InferenceDataImportStrategy?: InferenceDataImportStrategy | undefined;
}

/**
 * @public
 */
export interface ImportModelVersionResponse {
  /**
   * The name for the machine learning model.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model being created.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model version being created.
   *
   * @public
   */
  ModelVersionArn?: string | undefined;

  /**
   * The version of the model being created.
   *
   * @public
   */
  ModelVersion?: number | undefined;

  /**
   * The status of the `ImportModelVersion` operation.
   *
   * @public
   */
  Status?: ModelVersionStatus | undefined;
}

/**
 * @public
 */
export interface ListDataIngestionJobsRequest {
  /**
   * The name of the dataset being used for the data ingestion job.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * An opaque pagination token indicating where to continue the listing of data ingestion jobs.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of data ingestion jobs to list.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Indicates the status of the data ingestion job.
   *
   * @public
   */
  Status?: IngestionJobStatus | undefined;
}

/**
 * Provides information about a specified data ingestion job, including dataset information, data ingestion configuration, and status.
 *
 * @public
 */
export interface DataIngestionJobSummary {
  /**
   * Indicates the job ID of the data ingestion job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The name of the dataset used for the data ingestion job.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset used in the data ingestion job.
   *
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * Specifies information for the input data for the data inference job, including data Amazon S3 location parameters.
   *
   * @public
   */
  IngestionInputConfiguration?: IngestionInputConfiguration | undefined;

  /**
   * Indicates the status of the data ingestion job.
   *
   * @public
   */
  Status?: IngestionJobStatus | undefined;
}

/**
 * @public
 */
export interface ListDataIngestionJobsResponse {
  /**
   * An opaque pagination token indicating where to continue the listing of data ingestion jobs.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies information about the specific data ingestion job, including dataset name and status.
   *
   * @public
   */
  DataIngestionJobSummaries?: DataIngestionJobSummary[] | undefined;
}

/**
 * @public
 */
export interface ListDatasetsRequest {
  /**
   * An opaque pagination token indicating where to continue the listing of datasets.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of datasets to list.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The beginning of the name of the datasets to be listed.
   *
   * @public
   */
  DatasetNameBeginsWith?: string | undefined;
}

/**
 * Contains information about the specific data set, including name, ARN, and status.
 *
 * @public
 */
export interface DatasetSummary {
  /**
   * The name of the dataset.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the specified dataset.
   *
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * Indicates the status of the dataset.
   *
   * @public
   */
  Status?: DatasetStatus | undefined;

  /**
   * The time at which the dataset was created in Amazon Lookout for Equipment.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListDatasetsResponse {
  /**
   * An opaque pagination token indicating where to continue the listing of datasets.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Provides information about the specified dataset, including creation time, dataset ARN, and status.
   *
   * @public
   */
  DatasetSummaries?: DatasetSummary[] | undefined;
}

/**
 * @public
 */
export interface ListInferenceEventsRequest {
  /**
   * An opaque pagination token indicating where to continue the listing of inference events.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of inference events to list.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The name of the inference scheduler for the inference events listed.
   *
   * @public
   */
  InferenceSchedulerName: string | undefined;

  /**
   * Lookout for Equipment will return all the inference events with an end time equal to or greater than the start time given.
   *
   * @public
   */
  IntervalStartTime: Date | undefined;

  /**
   * Returns all the inference events with an end start time equal to or greater than less than the end time given.
   *
   * @public
   */
  IntervalEndTime: Date | undefined;
}

/**
 * Contains information about the specific inference event, including start and end time, diagnostics information, event duration and so on.
 *
 * @public
 */
export interface InferenceEventSummary {
  /**
   * The Amazon Resource Name (ARN) of the inference scheduler being used for the inference event.
   *
   * @public
   */
  InferenceSchedulerArn?: string | undefined;

  /**
   * The name of the inference scheduler being used for the inference events.
   *
   * @public
   */
  InferenceSchedulerName?: string | undefined;

  /**
   * Indicates the starting time of an inference event.
   *
   * @public
   */
  EventStartTime?: Date | undefined;

  /**
   * Indicates the ending time of an inference event.
   *
   * @public
   */
  EventEndTime?: Date | undefined;

  /**
   * An array which specifies the names and values of all sensors contributing to an inference event.
   *
   * @public
   */
  Diagnostics?: string | undefined;

  /**
   * Indicates the size of an inference event in seconds.
   *
   * @public
   */
  EventDurationInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface ListInferenceEventsResponse {
  /**
   * An opaque pagination token indicating where to continue the listing of inference executions.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Provides an array of information about the individual inference events returned from the `ListInferenceEvents` operation, including scheduler used, event start time, event end time, diagnostics, and so on.
   *
   * @public
   */
  InferenceEventSummaries?: InferenceEventSummary[] | undefined;
}

/**
 * @public
 */
export interface ListInferenceExecutionsRequest {
  /**
   * An opaque pagination token indicating where to continue the listing of inference executions.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of inference executions to list.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The name of the inference scheduler for the inference execution listed.
   *
   * @public
   */
  InferenceSchedulerName: string | undefined;

  /**
   * The time reference in the inferenced dataset after which Amazon Lookout for Equipment started the inference execution.
   *
   * @public
   */
  DataStartTimeAfter?: Date | undefined;

  /**
   * The time reference in the inferenced dataset before which Amazon Lookout for Equipment stopped the inference execution.
   *
   * @public
   */
  DataEndTimeBefore?: Date | undefined;

  /**
   * The status of the inference execution.
   *
   * @public
   */
  Status?: InferenceExecutionStatus | undefined;
}

/**
 * Contains information about the specific inference execution, including input and output data configuration, inference scheduling information, status, and so on.
 *
 * @public
 */
export interface InferenceExecutionSummary {
  /**
   * The name of the machine learning model being used for the inference execution.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the machine learning model used for the inference execution.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * The name of the inference scheduler being used for the inference execution.
   *
   * @public
   */
  InferenceSchedulerName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the inference scheduler being used for the inference execution.
   *
   * @public
   */
  InferenceSchedulerArn?: string | undefined;

  /**
   * Indicates the start time at which the inference scheduler began the specific inference execution.
   *
   * @public
   */
  ScheduledStartTime?: Date | undefined;

  /**
   * Indicates the time reference in the dataset at which the inference execution began.
   *
   * @public
   */
  DataStartTime?: Date | undefined;

  /**
   * Indicates the time reference in the dataset at which the inference execution stopped.
   *
   * @public
   */
  DataEndTime?: Date | undefined;

  /**
   * Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.
   *
   * @public
   */
  DataInputConfiguration?: InferenceInputConfiguration | undefined;

  /**
   * Specifies configuration information for the output results from for the inference execution, including the output Amazon S3 location.
   *
   * @public
   */
  DataOutputConfiguration?: InferenceOutputConfiguration | undefined;

  /**
   * The S3 object that the inference execution results were uploaded to.
   *
   * @public
   */
  CustomerResultObject?: S3Object | undefined;

  /**
   * Indicates the status of the inference execution.
   *
   * @public
   */
  Status?: InferenceExecutionStatus | undefined;

  /**
   * Specifies the reason for failure when an inference execution has failed.
   *
   * @public
   */
  FailedReason?: string | undefined;

  /**
   * The model version used for the inference execution.
   *
   * @public
   */
  ModelVersion?: number | undefined;

  /**
   * The Amazon Resource Number (ARN) of the model version used for the inference execution.
   *
   * @public
   */
  ModelVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface ListInferenceExecutionsResponse {
  /**
   * An opaque pagination token indicating where to continue the listing of inference executions.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Provides an array of information about the individual inference executions returned from the `ListInferenceExecutions` operation, including model used, inference scheduler, data configuration, and so on.
   *
   * > **Note:** If you don't supply the `InferenceSchedulerName` request parameter, or if you supply the name of an inference scheduler that doesn't exist, `ListInferenceExecutions` returns an empty array in `InferenceExecutionSummaries`.
   *
   * @public
   */
  InferenceExecutionSummaries?: InferenceExecutionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListInferenceSchedulersRequest {
  /**
   * An opaque pagination token indicating where to continue the listing of inference schedulers.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of inference schedulers to list.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The beginning of the name of the inference schedulers to be listed.
   *
   * @public
   */
  InferenceSchedulerNameBeginsWith?: string | undefined;

  /**
   * The name of the machine learning model used by the inference scheduler to be listed.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * Specifies the current status of the inference schedulers.
   *
   * @public
   */
  Status?: InferenceSchedulerStatus | undefined;
}

/**
 * Contains information about the specific inference scheduler, including data delay offset, model name and ARN, status, and so on.
 *
 * @public
 */
export interface InferenceSchedulerSummary {
  /**
   * The name of the machine learning model used for the inference scheduler.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the machine learning model used by the inference scheduler.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * The name of the inference scheduler.
   *
   * @public
   */
  InferenceSchedulerName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the inference scheduler.
   *
   * @public
   */
  InferenceSchedulerArn?: string | undefined;

  /**
   * Indicates the status of the inference scheduler.
   *
   * @public
   */
  Status?: InferenceSchedulerStatus | undefined;

  /**
   * A period of time (in minutes) by which inference on the data is delayed after the data starts. For instance, if an offset delay time of five minutes was selected, inference will not begin on the data until the first data measurement after the five minute mark. For example, if five minutes is selected, the inference scheduler will wake up at the configured frequency with the additional five minute delay time to check the customer S3 bucket. The customer can upload data at the same frequency and they don't need to stop and restart the scheduler when uploading new data.
   *
   * @public
   */
  DataDelayOffsetInMinutes?: number | undefined;

  /**
   * How often data is uploaded to the source S3 bucket for the input data. This value is the length of time between data uploads. For instance, if you select 5 minutes, Amazon Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This frequency also determines how often Amazon Lookout for Equipment starts a scheduled inference on your data. In this example, it starts once every 5 minutes.
   *
   * @public
   */
  DataUploadFrequency?: DataUploadFrequency | undefined;

  /**
   * Indicates whether the latest execution for the inference scheduler was Anomalous (anomalous events found) or Normal (no anomalous events found).
   *
   * @public
   */
  LatestInferenceResult?: LatestInferenceResult | undefined;
}

/**
 * @public
 */
export interface ListInferenceSchedulersResponse {
  /**
   * An opaque pagination token indicating where to continue the listing of inference schedulers.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Provides information about the specified inference scheduler, including data upload frequency, model name and ARN, and status.
   *
   * @public
   */
  InferenceSchedulerSummaries?: InferenceSchedulerSummary[] | undefined;
}

/**
 * @public
 */
export interface ListLabelGroupsRequest {
  /**
   * The beginning of the name of the label groups to be listed.
   *
   * @public
   */
  LabelGroupNameBeginsWith?: string | undefined;

  /**
   * An opaque pagination token indicating where to continue the listing of label groups.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of label groups to list.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Contains information about the label group.
 *
 * @public
 */
export interface LabelGroupSummary {
  /**
   * The name of the label group.
   *
   * @public
   */
  LabelGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the label group.
   *
   * @public
   */
  LabelGroupArn?: string | undefined;

  /**
   * The time at which the label group was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time at which the label group was updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListLabelGroupsResponse {
  /**
   * An opaque pagination token indicating where to continue the listing of label groups.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A summary of the label groups.
   *
   * @public
   */
  LabelGroupSummaries?: LabelGroupSummary[] | undefined;
}

/**
 * @public
 */
export interface ListLabelsRequest {
  /**
   * Returns the name of the label group.
   *
   * @public
   */
  LabelGroupName: string | undefined;

  /**
   * Returns all the labels with a end time equal to or later than the start time given.
   *
   * @public
   */
  IntervalStartTime?: Date | undefined;

  /**
   * Returns all labels with a start time earlier than the end time given.
   *
   * @public
   */
  IntervalEndTime?: Date | undefined;

  /**
   * Returns labels with a particular fault code.
   *
   * @public
   */
  FaultCode?: string | undefined;

  /**
   * Lists the labels that pertain to a particular piece of equipment.
   *
   * @public
   */
  Equipment?: string | undefined;

  /**
   * An opaque pagination token indicating where to continue the listing of label groups.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of labels to list.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Information about the label.
 *
 * @public
 */
export interface LabelSummary {
  /**
   * The name of the label group.
   *
   * @public
   */
  LabelGroupName?: string | undefined;

  /**
   * The ID of the label.
   *
   * @public
   */
  LabelId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the label group.
   *
   * @public
   */
  LabelGroupArn?: string | undefined;

  /**
   * The timestamp indicating the start of the label.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The timestamp indicating the end of the label.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * Indicates whether a labeled event represents an anomaly.
   *
   * @public
   */
  Rating?: LabelRating | undefined;

  /**
   * Indicates the type of anomaly associated with the label.
   *
   * Data in this field will be retained for service usage. Follow best practices for the security of your data.
   *
   * @public
   */
  FaultCode?: string | undefined;

  /**
   * Indicates that a label pertains to a particular piece of equipment.
   *
   * @public
   */
  Equipment?: string | undefined;

  /**
   * The time at which the label was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListLabelsResponse {
  /**
   * An opaque pagination token indicating where to continue the listing of datasets.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A summary of the items in the label group.
   *
   * > **Note:** If you don't supply the `LabelGroupName` request parameter, or if you supply the name of a label group that doesn't exist, `ListLabels` returns an empty array in `LabelSummaries`.
   *
   * @public
   */
  LabelSummaries?: LabelSummary[] | undefined;
}

/**
 * @public
 */
export interface ListModelsRequest {
  /**
   * An opaque pagination token indicating where to continue the listing of machine learning models.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of machine learning models to list.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The status of the machine learning model.
   *
   * @public
   */
  Status?: ModelStatus | undefined;

  /**
   * The beginning of the name of the machine learning models being listed.
   *
   * @public
   */
  ModelNameBeginsWith?: string | undefined;

  /**
   * The beginning of the name of the dataset of the machine learning models to be listed.
   *
   * @public
   */
  DatasetNameBeginsWith?: string | undefined;
}

/**
 * Provides information about the specified machine learning model, including dataset and model names and ARNs, as well as status.
 *
 * @public
 */
export interface ModelSummary {
  /**
   * The name of the machine learning model.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the machine learning model.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * The name of the dataset being used for the machine learning model.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset used to create the model.
   *
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * Indicates the status of the machine learning model.
   *
   * @public
   */
  Status?: ModelStatus | undefined;

  /**
   * The time at which the specific model was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The model version that the inference scheduler uses to run an inference execution.
   *
   * @public
   */
  ActiveModelVersion?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model version that is set as active. The active model version is the model version that the inference scheduler uses to run an inference execution.
   *
   * @public
   */
  ActiveModelVersionArn?: string | undefined;

  /**
   * Indicates the status of the most recent scheduled retraining run.
   *
   * @public
   */
  LatestScheduledRetrainingStatus?: ModelVersionStatus | undefined;

  /**
   * Indicates the most recent model version that was generated by retraining.
   *
   * @public
   */
  LatestScheduledRetrainingModelVersion?: number | undefined;

  /**
   * Indicates the start time of the most recent scheduled retraining run.
   *
   * @public
   */
  LatestScheduledRetrainingStartTime?: Date | undefined;

  /**
   * Indicates the date that the next scheduled retraining run will start on. Lookout for Equipment truncates the time you provide to [the nearest UTC day](https://docs.aws.amazon.com/https:/docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-types.html#parameter-type-timestamp).
   *
   * @public
   */
  NextScheduledRetrainingStartDate?: Date | undefined;

  /**
   * Indicates the status of the retraining scheduler.
   *
   * @public
   */
  RetrainingSchedulerStatus?: RetrainingSchedulerStatus | undefined;

  /**
   * Output configuration information for the pointwise model diagnostics for an Amazon Lookout for Equipment model.
   *
   * @public
   */
  ModelDiagnosticsOutputConfiguration?: ModelDiagnosticsOutputConfiguration | undefined;

  /**
   * Provides a quality assessment for a model that uses labels. If Lookout for Equipment determines that the model quality is poor based on training metrics, the value is `POOR_QUALITY_DETECTED`. Otherwise, the value is `QUALITY_THRESHOLD_MET`.
   *
   * If the model is unlabeled, the model quality can't be assessed and the value of `ModelQuality` is `CANNOT_DETERMINE_QUALITY`. In this situation, you can get a model quality assessment by adding labels to the input dataset and retraining the model.
   *
   * For information about using labels with your models, see [Understanding labeling](https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/understanding-labeling.html).
   *
   * For information about improving the quality of a model, see [Best practices with Amazon Lookout for Equipment](https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/best-practices.html).
   *
   * @public
   */
  ModelQuality?: ModelQuality | undefined;
}

/**
 * @public
 */
export interface ListModelsResponse {
  /**
   * An opaque pagination token indicating where to continue the listing of machine learning models.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Provides information on the specified model, including created time, model and dataset ARNs, and status.
   *
   * @public
   */
  ModelSummaries?: ModelSummary[] | undefined;
}

/**
 * @public
 */
export interface ListModelVersionsRequest {
  /**
   * Then name of the machine learning model for which the model versions are to be listed.
   *
   * @public
   */
  ModelName: string | undefined;

  /**
   * If the total number of results exceeds the limit that the response can display, the response returns an opaque pagination token indicating where to continue the listing of machine learning model versions. Use this token in the `NextToken` field in the request to list the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of machine learning model versions to list.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filter the results based on the current status of the model version.
   *
   * @public
   */
  Status?: ModelVersionStatus | undefined;

  /**
   * Filter the results based on the way the model version was generated.
   *
   * @public
   */
  SourceType?: ModelVersionSourceType | undefined;

  /**
   * Filter results to return all the model versions created before this time.
   *
   * @public
   */
  CreatedAtEndTime?: Date | undefined;

  /**
   * Filter results to return all the model versions created after this time.
   *
   * @public
   */
  CreatedAtStartTime?: Date | undefined;

  /**
   * Specifies the highest version of the model to return in the list.
   *
   * @public
   */
  MaxModelVersion?: number | undefined;

  /**
   * Specifies the lowest version of the model to return in the list.
   *
   * @public
   */
  MinModelVersion?: number | undefined;
}

/**
 * Contains information about the specific model version.
 *
 * @public
 */
export interface ModelVersionSummary {
  /**
   * The name of the model that this model version is a version of.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model that this model version is a version of.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * The version of the model.
   *
   * @public
   */
  ModelVersion?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the model version.
   *
   * @public
   */
  ModelVersionArn?: string | undefined;

  /**
   * The time when this model version was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The current status of the model version.
   *
   * @public
   */
  Status?: ModelVersionStatus | undefined;

  /**
   * Indicates how this model version was generated.
   *
   * @public
   */
  SourceType?: ModelVersionSourceType | undefined;

  /**
   * Provides a quality assessment for a model that uses labels. If Lookout for Equipment determines that the model quality is poor based on training metrics, the value is `POOR_QUALITY_DETECTED`. Otherwise, the value is `QUALITY_THRESHOLD_MET`.
   *
   * If the model is unlabeled, the model quality can't be assessed and the value of `ModelQuality` is `CANNOT_DETERMINE_QUALITY`. In this situation, you can get a model quality assessment by adding labels to the input dataset and retraining the model.
   *
   * For information about improving the quality of a model, see [Best practices with Amazon Lookout for Equipment](https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/best-practices.html).
   *
   * @public
   */
  ModelQuality?: ModelQuality | undefined;
}

/**
 * @public
 */
export interface ListModelVersionsResponse {
  /**
   * If the total number of results exceeds the limit that the response can display, the response returns an opaque pagination token indicating where to continue the listing of machine learning model versions. Use this token in the `NextToken` field in the request to list the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Provides information on the specified model version, including the created time, model and dataset ARNs, and status.
   *
   * > **Note:** If you don't supply the `ModelName` request parameter, or if you supply the name of a model that doesn't exist, `ListModelVersions` returns an empty array in `ModelVersionSummaries`.
   *
   * @public
   */
  ModelVersionSummaries?: ModelVersionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListRetrainingSchedulersRequest {
  /**
   * Specify this field to only list retraining schedulers whose machine learning models begin with the value you specify.
   *
   * @public
   */
  ModelNameBeginsWith?: string | undefined;

  /**
   * Specify this field to only list retraining schedulers whose status matches the value you specify.
   *
   * @public
   */
  Status?: RetrainingSchedulerStatus | undefined;

  /**
   * If the number of results exceeds the maximum, a pagination token is returned. Use the token in the request to show the next page of retraining schedulers.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the maximum number of retraining schedulers to list.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides information about the specified retraining scheduler, including model name, status, start date, frequency, and lookback window.
 *
 * @public
 */
export interface RetrainingSchedulerSummary {
  /**
   * The name of the model that the retraining scheduler is attached to.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The ARN of the model that the retraining scheduler is attached to.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * The status of the retraining scheduler.
   *
   * @public
   */
  Status?: RetrainingSchedulerStatus | undefined;

  /**
   * The start date for the retraining scheduler. Lookout for Equipment truncates the time you provide to the nearest UTC day.
   *
   * @public
   */
  RetrainingStartDate?: Date | undefined;

  /**
   * The frequency at which the model retraining is set. This follows the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) guidelines.
   *
   * @public
   */
  RetrainingFrequency?: string | undefined;

  /**
   * The number of past days of data used for retraining.
   *
   * @public
   */
  LookbackWindow?: string | undefined;
}

/**
 * @public
 */
export interface ListRetrainingSchedulersResponse {
  /**
   * Provides information on the specified retraining scheduler, including the model name, model ARN, status, and start date.
   *
   * @public
   */
  RetrainingSchedulerSummaries?: RetrainingSchedulerSummary[] | undefined;

  /**
   * If the number of results exceeds the maximum, this pagination token is returned. Use this token in the request to show the next page of retraining schedulers.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSensorStatisticsRequest {
  /**
   * The name of the dataset associated with the list of Sensor Statistics.
   *
   * @public
   */
  DatasetName: string | undefined;

  /**
   * The ingestion job id associated with the list of Sensor Statistics. To get sensor statistics for a particular ingestion job id, both dataset name and ingestion job id must be submitted as inputs.
   *
   * @public
   */
  IngestionJobId?: string | undefined;

  /**
   * Specifies the maximum number of sensors for which to retrieve statistics.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An opaque pagination token indicating where to continue the listing of sensor statistics.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Entity that comprises information on categorical values in data.
 *
 * @public
 */
export interface CategoricalValues {
  /**
   * Indicates whether there is a potential data issue related to categorical values.
   *
   * @public
   */
  Status: StatisticalIssueStatus | undefined;

  /**
   * Indicates the number of categories in the data.
   *
   * @public
   */
  NumberOfCategory?: number | undefined;
}

/**
 * Entity that comprises information of count and percentage.
 *
 * @public
 */
export interface CountPercent {
  /**
   * Indicates the count of occurences of the given statistic.
   *
   * @public
   */
  Count: number | undefined;

  /**
   * Indicates the percentage of occurances of the given statistic.
   *
   * @public
   */
  Percentage: number | undefined;
}

/**
 * Entity that comprises information on large gaps between consecutive timestamps in data.
 *
 * @public
 */
export interface LargeTimestampGaps {
  /**
   * Indicates whether there is a potential data issue related to large gaps in timestamps.
   *
   * @public
   */
  Status: StatisticalIssueStatus | undefined;

  /**
   * Indicates the number of large timestamp gaps, if there are any.
   *
   * @public
   */
  NumberOfLargeTimestampGaps?: number | undefined;

  /**
   * Indicates the size of the largest timestamp gap, in days.
   *
   * @public
   */
  MaxTimestampGapInDays?: number | undefined;
}

/**
 * Entity that comprises information on monotonic values in the data.
 *
 * @public
 */
export interface MonotonicValues {
  /**
   * Indicates whether there is a potential data issue related to having monotonic values.
   *
   * @public
   */
  Status: StatisticalIssueStatus | undefined;

  /**
   * Indicates the monotonicity of values. Can be INCREASING, DECREASING, or STATIC.
   *
   * @public
   */
  Monotonicity?: Monotonicity | undefined;
}

/**
 * Entity that comprises information on operating modes in data.
 *
 * @public
 */
export interface MultipleOperatingModes {
  /**
   * Indicates whether there is a potential data issue related to having multiple operating modes.
   *
   * @public
   */
  Status: StatisticalIssueStatus | undefined;
}

/**
 * Summary of ingestion statistics like whether data exists, number of missing values, number of invalid values and so on related to the particular sensor.
 *
 * @public
 */
export interface SensorStatisticsSummary {
  /**
   * Name of the component to which the particular sensor belongs for which the statistics belong to.
   *
   * @public
   */
  ComponentName?: string | undefined;

  /**
   * Name of the sensor that the statistics belong to.
   *
   * @public
   */
  SensorName?: string | undefined;

  /**
   * Parameter that indicates whether data exists for the sensor that the statistics belong to.
   *
   * @public
   */
  DataExists?: boolean | undefined;

  /**
   * Parameter that describes the total number of, and percentage of, values that are missing for the sensor that the statistics belong to.
   *
   * @public
   */
  MissingValues?: CountPercent | undefined;

  /**
   * Parameter that describes the total number of, and percentage of, values that are invalid for the sensor that the statistics belong to.
   *
   * @public
   */
  InvalidValues?: CountPercent | undefined;

  /**
   * Parameter that describes the total number of invalid date entries associated with the sensor that the statistics belong to.
   *
   * @public
   */
  InvalidDateEntries?: CountPercent | undefined;

  /**
   * Parameter that describes the total number of duplicate timestamp records associated with the sensor that the statistics belong to.
   *
   * @public
   */
  DuplicateTimestamps?: CountPercent | undefined;

  /**
   * Parameter that describes potential risk about whether data associated with the sensor is categorical.
   *
   * @public
   */
  CategoricalValues?: CategoricalValues | undefined;

  /**
   * Parameter that describes potential risk about whether data associated with the sensor has more than one operating mode.
   *
   * @public
   */
  MultipleOperatingModes?: MultipleOperatingModes | undefined;

  /**
   * Parameter that describes potential risk about whether data associated with the sensor contains one or more large gaps between consecutive timestamps.
   *
   * @public
   */
  LargeTimestampGaps?: LargeTimestampGaps | undefined;

  /**
   * Parameter that describes potential risk about whether data associated with the sensor is mostly monotonic.
   *
   * @public
   */
  MonotonicValues?: MonotonicValues | undefined;

  /**
   * Indicates the time reference to indicate the beginning of valid data associated with the sensor that the statistics belong to.
   *
   * @public
   */
  DataStartTime?: Date | undefined;

  /**
   * Indicates the time reference to indicate the end of valid data associated with the sensor that the statistics belong to.
   *
   * @public
   */
  DataEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSensorStatisticsResponse {
  /**
   * Provides ingestion-based statistics regarding the specified sensor with respect to various validation types, such as whether data exists, the number and percentage of missing values, and the number and percentage of duplicate timestamps.
   *
   * @public
   */
  SensorStatisticsSummaries?: SensorStatisticsSummary[] | undefined;

  /**
   * An opaque pagination token indicating where to continue the listing of sensor statistics.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource (such as the dataset or model) that is the focus of the `ListTagsForResource` operation.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Any tags associated with the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource for which the policy is being created.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The JSON-formatted resource policy to create.
   *
   * @public
   */
  ResourcePolicy: string | undefined;

  /**
   * A unique identifier for a revision of the resource policy.
   *
   * @public
   */
  PolicyRevisionId?: string | undefined;

  /**
   * A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the resource for which the policy was created.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * A unique identifier for a revision of the resource policy.
   *
   * @public
   */
  PolicyRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface StartDataIngestionJobRequest {
  /**
   * The name of the dataset being used by the data ingestion job.
   *
   * @public
   */
  DatasetName: string | undefined;

  /**
   * Specifies information for the input data for the data ingestion job, including dataset S3 location.
   *
   * @public
   */
  IngestionInputConfiguration: IngestionInputConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of a role with permission to access the data source for the data ingestion job.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartDataIngestionJobResponse {
  /**
   * Indicates the job ID of the data ingestion job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * Indicates the status of the `StartDataIngestionJob` operation.
   *
   * @public
   */
  Status?: IngestionJobStatus | undefined;
}

/**
 * @public
 */
export interface StartInferenceSchedulerRequest {
  /**
   * The name of the inference scheduler to be started.
   *
   * @public
   */
  InferenceSchedulerName: string | undefined;
}

/**
 * @public
 */
export interface StartInferenceSchedulerResponse {
  /**
   * The Amazon Resource Name (ARN) of the machine learning model being used by the inference scheduler.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * The name of the machine learning model being used by the inference scheduler.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The name of the inference scheduler being started.
   *
   * @public
   */
  InferenceSchedulerName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the inference scheduler being started.
   *
   * @public
   */
  InferenceSchedulerArn?: string | undefined;

  /**
   * Indicates the status of the inference scheduler.
   *
   * @public
   */
  Status?: InferenceSchedulerStatus | undefined;
}

/**
 * @public
 */
export interface StartRetrainingSchedulerRequest {
  /**
   * The name of the model whose retraining scheduler you want to start.
   *
   * @public
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface StartRetrainingSchedulerResponse {
  /**
   * The name of the model whose retraining scheduler is being started.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The ARN of the model whose retraining scheduler is being started.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * The status of the retraining scheduler.
   *
   * @public
   */
  Status?: RetrainingSchedulerStatus | undefined;
}

/**
 * @public
 */
export interface StopInferenceSchedulerRequest {
  /**
   * The name of the inference scheduler to be stopped.
   *
   * @public
   */
  InferenceSchedulerName: string | undefined;
}

/**
 * @public
 */
export interface StopInferenceSchedulerResponse {
  /**
   * The Amazon Resource Name (ARN) of the machine learning model used by the inference scheduler being stopped.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * The name of the machine learning model used by the inference scheduler being stopped.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The name of the inference scheduler being stopped.
   *
   * @public
   */
  InferenceSchedulerName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the inference schedule being stopped.
   *
   * @public
   */
  InferenceSchedulerArn?: string | undefined;

  /**
   * Indicates the status of the inference scheduler.
   *
   * @public
   */
  Status?: InferenceSchedulerStatus | undefined;
}

/**
 * @public
 */
export interface StopRetrainingSchedulerRequest {
  /**
   * The name of the model whose retraining scheduler you want to stop.
   *
   * @public
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface StopRetrainingSchedulerResponse {
  /**
   * The name of the model whose retraining scheduler is being stopped.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The ARN of the model whose retraining scheduler is being stopped.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * The status of the retraining scheduler.
   *
   * @public
   */
  Status?: RetrainingSchedulerStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the specific resource to which the tag should be associated.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tag or tags to be associated with a specific resource. Both the tag key and value are specified.
   *
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
   * The Amazon Resource Name (ARN) of the resource to which the tag is currently associated.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Specifies the key of the tag to be removed from a specified resource.
   *
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
   * The name of the machine learning model for which the active model version is being set.
   *
   * @public
   */
  ModelName: string | undefined;

  /**
   * The version of the machine learning model for which the active model version is being set.
   *
   * @public
   */
  ModelVersion: number | undefined;
}

/**
 * @public
 */
export interface UpdateActiveModelVersionResponse {
  /**
   * The name of the machine learning model for which the active model version was set.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the machine learning model for which the active model version was set.
   *
   * @public
   */
  ModelArn?: string | undefined;

  /**
   * The version that is currently active of the machine learning model for which the active model version was set.
   *
   * @public
   */
  CurrentActiveVersion?: number | undefined;

  /**
   * The previous version that was active of the machine learning model for which the active model version was set.
   *
   * @public
   */
  PreviousActiveVersion?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the machine learning model version that is the current active model version.
   *
   * @public
   */
  CurrentActiveVersionArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the machine learning model version that was the previous active model version.
   *
   * @public
   */
  PreviousActiveVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateInferenceSchedulerRequest {
  /**
   * The name of the inference scheduler to be updated.
   *
   * @public
   */
  InferenceSchedulerName: string | undefined;

  /**
   * A period of time (in minutes) by which inference on the data is delayed after the data starts. For instance, if you select an offset delay time of five minutes, inference will not begin on the data until the first data measurement after the five minute mark. For example, if five minutes is selected, the inference scheduler will wake up at the configured frequency with the additional five minute delay time to check the customer S3 bucket. The customer can upload data at the same frequency and they don't need to stop and restart the scheduler when uploading new data.
   *
   * @public
   */
  DataDelayOffsetInMinutes?: number | undefined;

  /**
   * How often data is uploaded to the source S3 bucket for the input data. The value chosen is the length of time between data uploads. For instance, if you select 5 minutes, Amazon Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This frequency also determines how often Amazon Lookout for Equipment starts a scheduled inference on your data. In this example, it starts once every 5 minutes.
   *
   * @public
   */
  DataUploadFrequency?: DataUploadFrequency | undefined;

  /**
   * Specifies information for the input data for the inference scheduler, including delimiter, format, and dataset location.
   *
   * @public
   */
  DataInputConfiguration?: InferenceInputConfiguration | undefined;

  /**
   * Specifies information for the output results from the inference scheduler, including the output S3 location.
   *
   * @public
   */
  DataOutputConfiguration?: InferenceOutputConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of a role with permission to access the data source for the inference scheduler.
   *
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLabelGroupRequest {
  /**
   * The name of the label group to be updated.
   *
   * @public
   */
  LabelGroupName: string | undefined;

  /**
   * Updates the code indicating the type of anomaly associated with the label.
   *
   * Data in this field will be retained for service usage. Follow best practices for the security of your data.
   *
   * @public
   */
  FaultCodes?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateModelRequest {
  /**
   * The name of the model to update.
   *
   * @public
   */
  ModelName: string | undefined;

  /**
   * Contains the configuration information for the S3 location being used to hold label data.
   *
   * @public
   */
  LabelsInputConfiguration?: LabelsInputConfiguration | undefined;

  /**
   * The ARN of the model to update.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The Amazon S3 location where you want Amazon Lookout for Equipment to save the pointwise model diagnostics for the model. You must also specify the `RoleArn` request parameter.
   *
   * @public
   */
  ModelDiagnosticsOutputConfiguration?: ModelDiagnosticsOutputConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRetrainingSchedulerRequest {
  /**
   * The name of the model whose retraining scheduler you want to update.
   *
   * @public
   */
  ModelName: string | undefined;

  /**
   * The start date for the retraining scheduler. Lookout for Equipment truncates the time you provide to the nearest UTC day.
   *
   * @public
   */
  RetrainingStartDate?: Date | undefined;

  /**
   * This parameter uses the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) standard to set the frequency at which you want retraining to occur in terms of Years, Months, and/or Days (note: other parameters like Time are not currently supported). The minimum value is 30 days (P30D) and the maximum value is 1 year (P1Y). For example, the following values are valid:
   *
   * - P3M15D – Every 3 months and 15 days
   * - P2M – Every 2 months
   * - P150D – Every 150 days
   *
   * @public
   */
  RetrainingFrequency?: string | undefined;

  /**
   * The number of past days of data that will be used for retraining.
   *
   * @public
   */
  LookbackWindow?: string | undefined;

  /**
   * Indicates how the service will use new models. In `MANAGED` mode, new models will automatically be used for inference if they have better performance than the current model. In `MANUAL` mode, the new models will not be used [until they are manually activated](https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/versioning-model.html#model-activation).
   *
   * @public
   */
  PromoteMode?: ModelPromoteMode | undefined;
}
