import { LazyJsonString as __LazyJsonString } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>The request could not be completed because you do not have access to the resource.
 *       </p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message: string | undefined;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p> The request could not be completed due to a conflict with the current state of the
 *          target resource. </p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
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

export namespace DatasetSchema {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetSchema): any => ({
    ...obj,
  });
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

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
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
  DatasetSchema: DatasetSchema | undefined;

  /**
   * <p>Provides the identifier of the KMS key used to encrypt dataset data by Amazon Lookout for Equipment. </p>
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

export namespace CreateDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetRequest): any => ({
    ...obj,
  });
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

export namespace CreateDatasetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetResponse): any => ({
    ...obj,
  });
}

/**
 * <p> Processing of the request has failed because of an unknown error, exception or failure.
 *       </p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message: string | undefined;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p> Resource limitations have been exceeded. </p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p> The input fails to satisfy constraints specified by Amazon Lookout for Equipment or a related AWS
 *          service that's being utilized. </p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
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

export namespace InferenceInputNameConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceInputNameConfiguration): any => ({
    ...obj,
  });
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

export namespace InferenceS3InputConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceS3InputConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configuration information for the input data for the inference, including S3
 *          location of input data.. </p>
 */
export interface InferenceInputConfiguration {
  /**
   * <p> Specifies configuration information for the input data for the inference, including S3
   *          location of input data.. </p>
   */
  S3InputConfiguration?: InferenceS3InputConfiguration;

  /**
   * <p>Indicates the difference between your time zone and Greenwich Mean Time (GMT). </p>
   */
  InputTimeZoneOffset?: string;

  /**
   * <p>Specifies configuration information for the input data for the inference, including
   *          timestamp format and delimiter. </p>
   */
  InferenceInputNameConfiguration?: InferenceInputNameConfiguration;
}

export namespace InferenceInputConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceInputConfiguration): any => ({
    ...obj,
  });
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

export namespace InferenceS3OutputConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceS3OutputConfiguration): any => ({
    ...obj,
  });
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

export namespace InferenceOutputConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceOutputConfiguration): any => ({
    ...obj,
  });
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
   * <p>A period of time (in minutes) by which inference on the data is delayed after the data
   *          starts. For instance, if you select an offset delay time of five minutes, inference will
   *          not begin on the data until the first data measurement after the five minute mark. For example, if
   *          five minutes is selected, the inference scheduler will wake up at the configured frequency with the
   *          additional five minute delay time to check the customer S3 bucket. The customer can upload data at
   *          the same frequency and they don't need to stop and restart the scheduler when uploading new data. </p>
   */
  DataDelayOffsetInMinutes?: number;

  /**
   * <p> How often data is uploaded to the source S3 bucket for the input data. The value chosen
   *          is the length of time between data uploads. For instance, if you select 5 minutes, Amazon
   *          Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This frequency
   *          also determines how often Amazon Lookout for Equipment starts a scheduled inference on your data. In this
   *          example, it starts once every 5 minutes. </p>
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
   * <p>Provides the identifier of the KMS key used to encrypt inference scheduler data by Amazon Lookout for Equipment. </p>
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

export namespace CreateInferenceSchedulerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInferenceSchedulerRequest): any => ({
    ...obj,
  });
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

export namespace CreateInferenceSchedulerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInferenceSchedulerResponse): any => ({
    ...obj,
  });
}

/**
 * <p> The resource requested could not be found. Verify the resource ID and retry your
 *          request. </p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message: string | undefined;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
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
 *          the data after post processing by
 *          Amazon Lookout for Equipment. For example, if you provide data that
 *          has been collected at a 1 second level and you want the system to resample
 *          the data at a 1 minute rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p>
 *             <p>When providing a value for the <code>TargetSamplingRate</code>, you must
 *                attach the prefix "PT" to the rate you want.  The value for a 1 second rate
 *                is therefore <i>PT1S</i>, the value for a 15 minute rate
 *                is <i>PT15M</i>, and the value for a 1 hour rate
 *                is <i>PT1H</i>
 *          </p>
 */
export interface DataPreProcessingConfiguration {
  /**
   * <p>The sampling rate of the data after post processing by Amazon Lookout for Equipment.
   *          For example, if you provide data that has been collected at a 1 second level and
   *          you want the system to resample the data at a 1 minute rate before training,
   *          the <code>TargetSamplingRate</code> is 1 minute.</p>
   *          <p>When providing a value for the <code>TargetSamplingRate</code>, you must attach
   *             the prefix "PT" to the rate you want.  The value for a 1 second rate is
   *             therefore <i>PT1S</i>, the value for a 15 minute
   *             rate is <i>PT15M</i>, and the value for a 1 hour rate
   *             is <i>PT1H</i>
   *          </p>
   */
  TargetSamplingRate?: TargetSamplingRate | string;
}

export namespace DataPreProcessingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataPreProcessingConfiguration): any => ({
    ...obj,
  });
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

export namespace LabelsS3InputConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelsS3InputConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the configuration information for the S3 location being used to hold label
 *          data. </p>
 */
export interface LabelsInputConfiguration {
  /**
   * <p>Contains location information for the S3 location being used for label data. </p>
   */
  S3InputConfiguration: LabelsS3InputConfiguration | undefined;
}

export namespace LabelsInputConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelsInputConfiguration): any => ({
    ...obj,
  });
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
   *          the data after post processing by
   *          Amazon Lookout for Equipment. For example, if you provide data that
   *          has been collected at a 1 second level and you want the system to resample
   *          the data at a 1 minute rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p>
   *          <p>When providing a value for the <code>TargetSamplingRate</code>, you must
   *             attach the prefix "PT" to the rate you want.  The value for a 1 second rate
   *             is therefore <i>PT1S</i>, the value for a 15 minute rate
   *             is <i>PT15M</i>, and the value for a 1 hour rate
   *             is <i>PT1H</i>
   *          </p>
   */
  DataPreProcessingConfiguration?: DataPreProcessingConfiguration;

  /**
   * <p>Provides the identifier of the KMS key used to encrypt model data by Amazon Lookout for Equipment. </p>
   */
  ServerSideKmsKeyId?: string;

  /**
   * <p> Any tags associated with the ML model being created. </p>
   */
  Tags?: Tag[];

  /**
   * <p>Indicates that the asset associated with this sensor has been shut off. As long as this condition is met, Lookout for Equipment will not use data from this asset for training, evaluation, or inference.</p>
   */
  OffCondition?: string;
}

export namespace CreateModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelRequest): any => ({
    ...obj,
  });
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

export namespace CreateModelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateModelResponse): any => ({
    ...obj,
  });
}

export interface DeleteDatasetRequest {
  /**
   * <p>The name of the dataset to be deleted. </p>
   */
  DatasetName: string | undefined;
}

export namespace DeleteDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDatasetRequest): any => ({
    ...obj,
  });
}

export interface DeleteInferenceSchedulerRequest {
  /**
   * <p>The name of the inference scheduler to be deleted. </p>
   */
  InferenceSchedulerName: string | undefined;
}

export namespace DeleteInferenceSchedulerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInferenceSchedulerRequest): any => ({
    ...obj,
  });
}

export interface DeleteModelRequest {
  /**
   * <p>The name of the ML model to be deleted. </p>
   */
  ModelName: string | undefined;
}

export namespace DeleteModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteModelRequest): any => ({
    ...obj,
  });
}

export interface DescribeDataIngestionJobRequest {
  /**
   * <p>The job ID of the data ingestion job. </p>
   */
  JobId: string | undefined;
}

export namespace DescribeDataIngestionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDataIngestionJobRequest): any => ({
    ...obj,
  });
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
}

export namespace IngestionS3InputConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IngestionS3InputConfiguration): any => ({
    ...obj,
  });
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

export namespace IngestionInputConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IngestionInputConfiguration): any => ({
    ...obj,
  });
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
}

export namespace DescribeDataIngestionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDataIngestionJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeDatasetRequest {
  /**
   * <p>The name of the dataset to be described. </p>
   */
  DatasetName: string | undefined;
}

export namespace DescribeDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatasetRequest): any => ({
    ...obj,
  });
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
   * <p>Specifies the time the dataset was created in Amazon Lookout for Equipment. </p>
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
   * <p>Provides the identifier of the KMS key used to encrypt dataset data by Amazon Lookout for Equipment. </p>
   */
  ServerSideKmsKeyId?: string;

  /**
   * <p>Specifies the S3 location configuration for the data input for the data ingestion job. </p>
   */
  IngestionInputConfiguration?: IngestionInputConfiguration;
}

export namespace DescribeDatasetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatasetResponse): any => ({
    ...obj,
  });
}

export interface DescribeInferenceSchedulerRequest {
  /**
   * <p>The name of the inference scheduler being described. </p>
   */
  InferenceSchedulerName: string | undefined;
}

export namespace DescribeInferenceSchedulerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInferenceSchedulerRequest): any => ({
    ...obj,
  });
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
   *          not begin on the data until the first data measurement after the five minute mark. For example, if
   *          five minutes is selected, the inference scheduler will wake up at the configured frequency with the
   *          additional five minute delay time to check the customer S3 bucket. The customer can upload data at
   *          the same frequency and they don't need to stop and restart the scheduler when uploading new data.</p>
   */
  DataDelayOffsetInMinutes?: number;

  /**
   * <p>Specifies how often data is uploaded to the source S3 bucket for the input data. This
   *          value is the length of time between data uploads. For instance, if you select 5 minutes,
   *          Amazon Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This
   *          frequency also determines how often Amazon Lookout for Equipment starts a scheduled inference on your data.
   *          In this example, it starts once every 5 minutes. </p>
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
   * <p> Specifies information for the output results for the inference scheduler,
   *          including the output S3 location. </p>
   */
  DataOutputConfiguration?: InferenceOutputConfiguration;

  /**
   * <p> The Amazon Resource Name (ARN) of a role with permission to access the data source for
   *          the inference scheduler being described. </p>
   */
  RoleArn?: string;

  /**
   * <p>Provides the identifier of the KMS key used to encrypt inference scheduler data by Amazon Lookout for Equipment. </p>
   */
  ServerSideKmsKeyId?: string;
}

export namespace DescribeInferenceSchedulerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInferenceSchedulerResponse): any => ({
    ...obj,
  });
}

export interface DescribeModelRequest {
  /**
   * <p>The name of the ML model to be described. </p>
   */
  ModelName: string | undefined;
}

export namespace DescribeModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeModelRequest): any => ({
    ...obj,
  });
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
   *          the data after post processing by
   *          Amazon Lookout for Equipment. For example, if you provide data that
   *          has been collected at a 1 second level and you want the system to resample
   *          the data at a 1 minute rate before training, the <code>TargetSamplingRate</code> is 1 minute.</p>
   *             <p>When providing a value for the <code>TargetSamplingRate</code>, you must
   *                attach the prefix "PT" to the rate you want.  The value for a 1 second rate
   *                is therefore <i>PT1S</i>, the value for a 15 minute rate
   *                is <i>PT15M</i>, and the value for a 1 hour rate
   *                is <i>PT1H</i>
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
   * <p>The Model Metrics show an aggregated summary of the model's performance within the evaluation time
   *          range. This is the JSON content of the metrics created when evaluating the model. </p>
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
   * <p>Provides the identifier of the KMS key used to encrypt model data by Amazon Lookout for Equipment. </p>
   */
  ServerSideKmsKeyId?: string;

  /**
   * <p>Indicates that the asset associated with this sensor has been shut off. As long as this condition is met, Lookout for Equipment will not use data from this asset for training, evaluation, or inference.</p>
   */
  OffCondition?: string;
}

export namespace DescribeModelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeModelResponse): any => ({
    ...obj,
  });
}

export interface ListDataIngestionJobsRequest {
  /**
   * <p>The name of the dataset being used for the data ingestion job. </p>
   */
  DatasetName?: string;

  /**
   * <p> An opaque pagination token indicating where to continue the listing of data ingestion
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

export namespace ListDataIngestionJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataIngestionJobsRequest): any => ({
    ...obj,
  });
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
   * <p> Specifies information for the input data for the data inference job, including data S3
   *          location parameters. </p>
   */
  IngestionInputConfiguration?: IngestionInputConfiguration;

  /**
   * <p>Indicates the status of the data ingestion job. </p>
   */
  Status?: IngestionJobStatus | string;
}

export namespace DataIngestionJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataIngestionJobSummary): any => ({
    ...obj,
  });
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

export namespace ListDataIngestionJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataIngestionJobsResponse): any => ({
    ...obj,
  });
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

export namespace ListDatasetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetsRequest): any => ({
    ...obj,
  });
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

export namespace DatasetSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetSummary): any => ({
    ...obj,
  });
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

export namespace ListDatasetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetsResponse): any => ({
    ...obj,
  });
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
   * <p>The time reference in the inferenced dataset after which Amazon Lookout for Equipment started the
   *          inference execution. </p>
   */
  DataStartTimeAfter?: Date;

  /**
   * <p>The time reference in the inferenced dataset before which Amazon Lookout for Equipment stopped the
   *          inference execution. </p>
   */
  DataEndTimeBefore?: Date;

  /**
   * <p>The status of the inference execution. </p>
   */
  Status?: InferenceExecutionStatus | string;
}

export namespace ListInferenceExecutionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInferenceExecutionsRequest): any => ({
    ...obj,
  });
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

export namespace S3Object {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Object): any => ({
    ...obj,
  });
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
   *          execution, including the output S3 location. </p>
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

export namespace InferenceExecutionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceExecutionSummary): any => ({
    ...obj,
  });
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

export namespace ListInferenceExecutionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInferenceExecutionsResponse): any => ({
    ...obj,
  });
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
}

export namespace ListInferenceSchedulersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInferenceSchedulersRequest): any => ({
    ...obj,
  });
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
   *          not begin on the data until the first data measurement after the five minute mark. For example, if
   *          five minutes is selected, the inference scheduler will wake up at the configured frequency with the
   *          additional five minute delay time to check the customer S3 bucket. The customer can upload data at
   *          the same frequency and they don't need to stop and restart the scheduler when uploading new data.
   *       </p>
   */
  DataDelayOffsetInMinutes?: number;

  /**
   * <p>How often data is uploaded to the source S3 bucket for the input data. This value is the
   *          length of time between data uploads. For instance, if you select 5 minutes, Amazon Lookout for Equipment
   *          will upload the real-time data to the source bucket once every 5 minutes. This frequency also
   *          determines how often Amazon Lookout for Equipment starts a scheduled inference on your data. In this
   *          example, it starts once every 5 minutes. </p>
   */
  DataUploadFrequency?: DataUploadFrequency | string;
}

export namespace InferenceSchedulerSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InferenceSchedulerSummary): any => ({
    ...obj,
  });
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

export namespace ListInferenceSchedulersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInferenceSchedulersResponse): any => ({
    ...obj,
  });
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

export namespace ListModelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListModelsRequest): any => ({
    ...obj,
  });
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

export namespace ModelSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModelSummary): any => ({
    ...obj,
  });
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

export namespace ListModelsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListModelsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource (such as the dataset or model) that is
   *          the focus of the <code>ListTagsForResource</code> operation. </p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p> Any tags associated with the resource. </p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace StartDataIngestionJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDataIngestionJobRequest): any => ({
    ...obj,
  });
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

export namespace StartDataIngestionJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDataIngestionJobResponse): any => ({
    ...obj,
  });
}

export interface StartInferenceSchedulerRequest {
  /**
   * <p>The name of the inference scheduler to be started. </p>
   */
  InferenceSchedulerName: string | undefined;
}

export namespace StartInferenceSchedulerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartInferenceSchedulerRequest): any => ({
    ...obj,
  });
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

export namespace StartInferenceSchedulerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartInferenceSchedulerResponse): any => ({
    ...obj,
  });
}

export interface StopInferenceSchedulerRequest {
  /**
   * <p>The name of the inference scheduler to be stopped. </p>
   */
  InferenceSchedulerName: string | undefined;
}

export namespace StopInferenceSchedulerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopInferenceSchedulerRequest): any => ({
    ...obj,
  });
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

export namespace StopInferenceSchedulerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopInferenceSchedulerResponse): any => ({
    ...obj,
  });
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

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateInferenceSchedulerRequest {
  /**
   * <p>The name of the inference scheduler to be updated. </p>
   */
  InferenceSchedulerName: string | undefined;

  /**
   * <p> A period of time (in minutes) by which inference on the data is delayed after the data
   *          starts. For instance, if you select an offset delay time of five minutes, inference will
   *          not begin on the data until the first data measurement after the five minute mark. For example, if
   *          five minutes is selected, the inference scheduler will wake up at the configured frequency with the
   *          additional five minute delay time to check the customer S3 bucket. The customer can upload data at
   *          the same frequency and they don't need to stop and restart the scheduler when uploading new data.</p>
   */
  DataDelayOffsetInMinutes?: number;

  /**
   * <p>How often data is uploaded to the source S3 bucket for the input data. The value chosen
   *          is the length of time between data uploads. For instance, if you select 5 minutes, Amazon
   *          Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This frequency
   *          also determines how often Amazon Lookout for Equipment starts a scheduled inference on your data. In this
   *          example, it starts once every 5 minutes. </p>
   */
  DataUploadFrequency?: DataUploadFrequency | string;

  /**
   * <p> Specifies information for the input data for the inference scheduler, including
   *          delimiter, format, and dataset location. </p>
   */
  DataInputConfiguration?: InferenceInputConfiguration;

  /**
   * <p> Specifies information for the output results from the inference scheduler, including the output S3 location. </p>
   */
  DataOutputConfiguration?: InferenceOutputConfiguration;

  /**
   * <p> The Amazon Resource Name (ARN) of a role with permission to access the data source for
   *          the inference scheduler. </p>
   */
  RoleArn?: string;
}

export namespace UpdateInferenceSchedulerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInferenceSchedulerRequest): any => ({
    ...obj,
  });
}
