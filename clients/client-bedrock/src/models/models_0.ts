// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { BedrockServiceException as __BaseException } from "./BedrockServiceException";

/**
 * @public
 * <p>The request is denied because of missing access permissions.</p>
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
 */
export interface DeleteModelInvocationLoggingConfigurationRequest {}

/**
 * @public
 */
export interface DeleteModelInvocationLoggingConfigurationResponse {}

/**
 * @public
 * <p>An internal server error occurred. Retry your request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
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
  }
}

/**
 * @public
 * <p>The number of requests exceeds the limit. Resubmit your request later.</p>
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
 */
export interface GetModelInvocationLoggingConfigurationRequest {}

/**
 * @public
 * <p>S3 configuration for storing log data.</p>
 */
export interface S3Config {
  /**
   * @public
   * <p>S3 bucket name.</p>
   */
  bucketName: string | undefined;

  /**
   * @public
   * <p>S3 prefix. </p>
   */
  keyPrefix?: string;
}

/**
 * @public
 * <p>CloudWatch logging configuration.</p>
 */
export interface CloudWatchConfig {
  /**
   * @public
   * <p>The log group name.</p>
   */
  logGroupName: string | undefined;

  /**
   * @public
   * <p>The role ARN.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>S3 configuration for delivering a large amount of data.</p>
   */
  largeDataDeliveryS3Config?: S3Config;
}

/**
 * @public
 * <p>Configuration fields for invokation logging.</p>
 */
export interface LoggingConfig {
  /**
   * @public
   * <p>CloudWatch logging configuration.</p>
   */
  cloudWatchConfig?: CloudWatchConfig;

  /**
   * @public
   * <p>S3 configuration for storing log data.</p>
   */
  s3Config?: S3Config;

  /**
   * @public
   * <p>Set to include text data in the log delivery.</p>
   */
  textDataDeliveryEnabled?: boolean;

  /**
   * @public
   * <p>Set to include image data in the log delivery.</p>
   */
  imageDataDeliveryEnabled?: boolean;

  /**
   * @public
   * <p>Set to include embeddings data in the log delivery.</p>
   */
  embeddingDataDeliveryEnabled?: boolean;
}

/**
 * @public
 */
export interface GetModelInvocationLoggingConfigurationResponse {
  /**
   * @public
   * <p>The current configuration values.</p>
   */
  loggingConfig?: LoggingConfig;
}

/**
 * @public
 */
export interface PutModelInvocationLoggingConfigurationRequest {
  /**
   * @public
   * <p>The logging configuration values to set.</p>
   */
  loggingConfig: LoggingConfig | undefined;
}

/**
 * @public
 */
export interface PutModelInvocationLoggingConfigurationResponse {}

/**
 * @public
 * <p>Input validation failed. Check your request parameters and retry the request.</p>
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
 * <p>Error occurred because of a conflict while performing an operation.</p>
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
 */
export interface DeleteCustomModelRequest {
  /**
   * @public
   * <p>Name of the model to delete.</p>
   */
  modelIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomModelResponse {}

/**
 * @public
 * <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
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
 */
export interface GetCustomModelRequest {
  /**
   * @public
   * <p>Name or ARN of the custom model.</p>
   */
  modelIdentifier: string | undefined;
}

/**
 * @public
 * <p>S3 Location of the output data.</p>
 */
export interface OutputDataConfig {
  /**
   * @public
   * <p>The S3 URI where the output data is stored.</p>
   */
  s3Uri: string | undefined;
}

/**
 * @public
 * <p>S3 Location of the training data.</p>
 */
export interface TrainingDataConfig {
  /**
   * @public
   * <p>The S3 URI where the training data is stored.</p>
   */
  s3Uri: string | undefined;
}

/**
 * @public
 * <p>Metrics associated with the custom job.</p>
 */
export interface TrainingMetrics {
  /**
   * @public
   * <p>Loss metric associated with the custom job.</p>
   */
  trainingLoss?: number;
}

/**
 * @public
 * <p>Information about a validator.</p>
 */
export interface Validator {
  /**
   * @public
   * <p>The S3 URI where the validation data is stored.</p>
   */
  s3Uri: string | undefined;
}

/**
 * @public
 * <p>Array of up to 10 validators.</p>
 */
export interface ValidationDataConfig {
  /**
   * @public
   * <p>Information about the validators.</p>
   */
  validators: Validator[] | undefined;
}

/**
 * @public
 * <p>The metric for the validator.</p>
 */
export interface ValidatorMetric {
  /**
   * @public
   * <p>The validation loss associated with this validator.</p>
   */
  validationLoss?: number;
}

/**
 * @public
 */
export interface GetCustomModelResponse {
  /**
   * @public
   * <p>ARN associated with this model.</p>
   */
  modelArn: string | undefined;

  /**
   * @public
   * <p>Model name associated with this model.</p>
   */
  modelName: string | undefined;

  /**
   * @public
   * <p>Job name associated with this model.</p>
   */
  jobName?: string;

  /**
   * @public
   * <p>Job ARN associated with this model.</p>
   */
  jobArn: string | undefined;

  /**
   * @public
   * <p>ARN of the base model.</p>
   */
  baseModelArn: string | undefined;

  /**
   * @public
   * <p>The custom model is encrypted at rest using this key.</p>
   */
  modelKmsKeyArn?: string;

  /**
   * @public
   * <p>Hyperparameter values associated with this model.</p>
   */
  hyperParameters?: Record<string, string>;

  /**
   * @public
   * <p>Information about the training dataset.</p>
   */
  trainingDataConfig: TrainingDataConfig | undefined;

  /**
   * @public
   * <p>Array of up to 10 validators.</p>
   */
  validationDataConfig?: ValidationDataConfig;

  /**
   * @public
   * <p>Output data configuration associated with this custom model.</p>
   */
  outputDataConfig: OutputDataConfig | undefined;

  /**
   * @public
   * <p>The training metrics from the job creation.</p>
   */
  trainingMetrics?: TrainingMetrics;

  /**
   * @public
   * <p>The validation metrics from the job creation.</p>
   */
  validationMetrics?: ValidatorMetric[];

  /**
   * @public
   * <p>Creation time of the model.</p>
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface GetFoundationModelRequest {
  /**
   * @public
   * <p>The model identifier. </p>
   */
  modelIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelCustomization = {
  FINE_TUNING: "FINE_TUNING",
} as const;

/**
 * @public
 */
export type ModelCustomization = (typeof ModelCustomization)[keyof typeof ModelCustomization];

/**
 * @public
 * @enum
 */
export const InferenceType = {
  ON_DEMAND: "ON_DEMAND",
  PROVISIONED: "PROVISIONED",
} as const;

/**
 * @public
 */
export type InferenceType = (typeof InferenceType)[keyof typeof InferenceType];

/**
 * @public
 * @enum
 */
export const ModelModality = {
  EMBEDDING: "EMBEDDING",
  IMAGE: "IMAGE",
  TEXT: "TEXT",
} as const;

/**
 * @public
 */
export type ModelModality = (typeof ModelModality)[keyof typeof ModelModality];

/**
 * @public
 * <p>Information about a foundation model.</p>
 */
export interface FoundationModelDetails {
  /**
   * @public
   * <p>The model ARN.</p>
   */
  modelArn: string | undefined;

  /**
   * @public
   * <p>The model identifier.</p>
   */
  modelId: string | undefined;

  /**
   * @public
   * <p>The model name.</p>
   */
  modelName?: string;

  /**
   * @public
   * <p>he model's provider name.</p>
   */
  providerName?: string;

  /**
   * @public
   * <p>The input modalities that the model supports.</p>
   */
  inputModalities?: (ModelModality | string)[];

  /**
   * @public
   * <p>The output modalities that the model supports.</p>
   */
  outputModalities?: (ModelModality | string)[];

  /**
   * @public
   * <p>Indicates whether the model supports streaming.</p>
   */
  responseStreamingSupported?: boolean;

  /**
   * @public
   * <p>The customization that the model supports.</p>
   */
  customizationsSupported?: (ModelCustomization | string)[];

  /**
   * @public
   * <p>The inference types that the model supports.</p>
   */
  inferenceTypesSupported?: (InferenceType | string)[];
}

/**
 * @public
 */
export interface GetFoundationModelResponse {
  /**
   * @public
   * <p>Information about the foundation model.</p>
   */
  modelDetails?: FoundationModelDetails;
}

/**
 * @public
 * @enum
 */
export const SortModelsBy = {
  CREATION_TIME: "CreationTime",
} as const;

/**
 * @public
 */
export type SortModelsBy = (typeof SortModelsBy)[keyof typeof SortModelsBy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 */
export interface ListCustomModelsRequest {
  /**
   * @public
   * <p>Return custom models created before the specified time. </p>
   */
  creationTimeBefore?: Date;

  /**
   * @public
   * <p>Return custom models created after the specified time. </p>
   */
  creationTimeAfter?: Date;

  /**
   * @public
   * <p>Return custom models only if the job name contains these characters.</p>
   */
  nameContains?: string;

  /**
   * @public
   * <p>Return custom models only if the base model ARN matches this parameter.</p>
   */
  baseModelArnEquals?: string;

  /**
   * @public
   * <p>Return custom models only if the foundation model ARN matches this parameter.</p>
   */
  foundationModelArnEquals?: string;

  /**
   * @public
   * <p>Maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Continuation token from the previous response, for Bedrock to list the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The field to sort by in the returned list of models.</p>
   */
  sortBy?: SortModelsBy | string;

  /**
   * @public
   * <p>The sort order of the results.</p>
   */
  sortOrder?: SortOrder | string;
}

/**
 * @public
 * <p>Summary information for a custom model.</p>
 */
export interface CustomModelSummary {
  /**
   * @public
   * <p>The ARN of the custom model.</p>
   */
  modelArn: string | undefined;

  /**
   * @public
   * <p>The name of the custom model.</p>
   */
  modelName: string | undefined;

  /**
   * @public
   * <p>Creation time of the model.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>The base model ARN.</p>
   */
  baseModelArn: string | undefined;

  /**
   * @public
   * <p>The base model name.</p>
   */
  baseModelName: string | undefined;
}

/**
 * @public
 */
export interface ListCustomModelsResponse {
  /**
   * @public
   * <p>Continuation token for the next request to list the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Model summaries.</p>
   */
  modelSummaries?: CustomModelSummary[];
}

/**
 * @public
 */
export interface ListFoundationModelsRequest {
  /**
   * @public
   * <p>A Bedrock model provider.</p>
   */
  byProvider?: string;

  /**
   * @public
   * <p>List by customization type.</p>
   */
  byCustomizationType?: ModelCustomization | string;

  /**
   * @public
   * <p>List by output modality type.</p>
   */
  byOutputModality?: ModelModality | string;

  /**
   * @public
   * <p>List by inference type.</p>
   */
  byInferenceType?: InferenceType | string;
}

/**
 * @public
 * <p>Summary information for a foundation model.</p>
 */
export interface FoundationModelSummary {
  /**
   * @public
   * <p>The ARN of the foundation model.</p>
   */
  modelArn: string | undefined;

  /**
   * @public
   * <p>The model Id of the foundation model.</p>
   */
  modelId: string | undefined;

  /**
   * @public
   * <p>The name of the model.</p>
   */
  modelName?: string;

  /**
   * @public
   * <p>The model's provider name.</p>
   */
  providerName?: string;

  /**
   * @public
   * <p>The input modalities that the model supports.</p>
   */
  inputModalities?: (ModelModality | string)[];

  /**
   * @public
   * <p>The output modalities that the model supports.</p>
   */
  outputModalities?: (ModelModality | string)[];

  /**
   * @public
   * <p>Indicates whether the model supports streaming.</p>
   */
  responseStreamingSupported?: boolean;

  /**
   * @public
   * <p>Whether the model supports fine-tuning or continual pre-training.</p>
   */
  customizationsSupported?: (ModelCustomization | string)[];

  /**
   * @public
   * <p>The inference types that the model supports.</p>
   */
  inferenceTypesSupported?: (InferenceType | string)[];
}

/**
 * @public
 */
export interface ListFoundationModelsResponse {
  /**
   * @public
   * <p>A list of bedrock foundation models.</p>
   */
  modelSummaries?: FoundationModelSummary[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  resourceARN: string | undefined;
}

/**
 * @public
 * <p>Definition of the key/value pair for a tag.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>Key for the tag.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>Value for the tag.</p>
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>An array of the tags associated with this resource.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource to tag.</p>
   */
  resourceARN: string | undefined;

  /**
   * @public
   * <p>Tags to associate with the resource.</p>
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 * <p>The request contains more tags than can be associated with a resource (50 tags per resource).
 *          The maximum number of tags includes both existing tags and those included in your current request. </p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The name of the resource with too many tags.</p>
   */
  resourceName?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource to untag.</p>
   */
  resourceARN: string | undefined;

  /**
   * @public
   * <p>Tag keys of the tags to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 * <p>VPC configuration.</p>
 */
export interface VpcConfig {
  /**
   * @public
   * <p>VPC configuration subnets.</p>
   */
  subnetIds: string[] | undefined;

  /**
   * @public
   * <p>VPC configuration security group Ids.</p>
   */
  securityGroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface CreateModelCustomizationJobRequest {
  /**
   * @public
   * <p>Enter a unique name for the fine-tuning job.</p>
   */
  jobName: string | undefined;

  /**
   * @public
   * <p>Enter a name for the custom model.</p>
   */
  customModelName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that Bedrock can assume to perform tasks on your behalf.
   *          For example, during model training, Bedrock needs your permission to read input data from an S3 bucket, write model artifacts to an S3 bucket.
   *          To pass this role to Bedrock, the caller of this API must have the <code>iam:PassRole</code> permission.
   *       </p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>Unique token value that you can provide. The GetModelCustomizationJob response includes the same token value.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>Name of the base model.</p>
   */
  baseModelIdentifier: string | undefined;

  /**
   * @public
   * <p>The custom model is encrypted at rest using this key.</p>
   */
  customModelKmsKeyId?: string;

  /**
   * @public
   * <p>Assign tags to the job.</p>
   */
  jobTags?: Tag[];

  /**
   * @public
   * <p>Assign tags to the custom model.</p>
   */
  customModelTags?: Tag[];

  /**
   * @public
   * <p>Information about the training dataset.</p>
   */
  trainingDataConfig: TrainingDataConfig | undefined;

  /**
   * @public
   * <p>Information about the validation dataset. </p>
   */
  validationDataConfig?: ValidationDataConfig;

  /**
   * @public
   * <p>S3 location for the output data.</p>
   */
  outputDataConfig: OutputDataConfig | undefined;

  /**
   * @public
   * <p>Parameters related to tuning the model.</p>
   */
  hyperParameters: Record<string, string> | undefined;

  /**
   * @public
   * <p>VPC configuration (optional). Configuration parameters for the
   *            private Virtual Private Cloud (VPC) that contains the resources you are using for this job.</p>
   */
  vpcConfig?: VpcConfig;
}

/**
 * @public
 */
export interface CreateModelCustomizationJobResponse {
  /**
   * @public
   * <p>ARN of the fine tuning job</p>
   */
  jobArn: string | undefined;
}

/**
 * @public
 * <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
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
export interface GetModelCustomizationJobRequest {
  /**
   * @public
   * <p>Identifier for the customization job.</p>
   */
  jobIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelCustomizationJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type ModelCustomizationJobStatus =
  (typeof ModelCustomizationJobStatus)[keyof typeof ModelCustomizationJobStatus];

/**
 * @public
 */
export interface GetModelCustomizationJobResponse {
  /**
   * @public
   * <p>The ARN of the customization job.</p>
   */
  jobArn: string | undefined;

  /**
   * @public
   * <p>The name of the customization job.</p>
   */
  jobName: string | undefined;

  /**
   * @public
   * <p>The name of the output model.</p>
   */
  outputModelName: string | undefined;

  /**
   * @public
   * <p>The ARN of the output model.</p>
   */
  outputModelArn?: string;

  /**
   * @public
   * <p>The token that you specified in the CreateCustomizationJob request.</p>
   */
  clientRequestToken?: string;

  /**
   * @public
   * <p>The ARN of the IAM role.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>The status of the job. A successful job transitions from in-progress to completed when the output model is ready to use.
   *       If the job failed, the failure message contains information about why the job failed.</p>
   */
  status?: ModelCustomizationJobStatus | string;

  /**
   * @public
   * <p>Information about why the job failed.</p>
   */
  failureMessage?: string;

  /**
   * @public
   * <p>Time that the resource was created.</p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>Time that the resource was last modified.</p>
   */
  lastModifiedTime?: Date;

  /**
   * @public
   * <p>Time that the resource transitioned to terminal state.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>ARN of the base model.</p>
   */
  baseModelArn: string | undefined;

  /**
   * @public
   * <p>The hyperparameter values for the job.</p>
   */
  hyperParameters: Record<string, string> | undefined;

  /**
   * @public
   * <p>S3 Location of the training data.</p>
   */
  trainingDataConfig: TrainingDataConfig | undefined;

  /**
   * @public
   * <p>Array of up to 10 validators.</p>
   */
  validationDataConfig: ValidationDataConfig | undefined;

  /**
   * @public
   * <p>Output data configuration </p>
   */
  outputDataConfig: OutputDataConfig | undefined;

  /**
   * @public
   * <p>The custom model is encrypted at rest using this key.</p>
   */
  outputModelKmsKeyArn?: string;

  /**
   * @public
   * <p>Metrics associated with the custom job.</p>
   */
  trainingMetrics?: TrainingMetrics;

  /**
   * @public
   * <p>The loss metric for each validator that you provided in the createjob request.</p>
   */
  validationMetrics?: ValidatorMetric[];

  /**
   * @public
   * <p>VPC configuration for the custom model job.</p>
   */
  vpcConfig?: VpcConfig;
}

/**
 * @public
 * @enum
 */
export const SortJobsBy = {
  CREATION_TIME: "CreationTime",
} as const;

/**
 * @public
 */
export type SortJobsBy = (typeof SortJobsBy)[keyof typeof SortJobsBy];

/**
 * @public
 * @enum
 */
export const FineTuningJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type FineTuningJobStatus = (typeof FineTuningJobStatus)[keyof typeof FineTuningJobStatus];

/**
 * @public
 */
export interface ListModelCustomizationJobsRequest {
  /**
   * @public
   * <p>Return customization jobs created after the specified time. </p>
   */
  creationTimeAfter?: Date;

  /**
   * @public
   * <p>Return customization jobs created before the specified time. </p>
   */
  creationTimeBefore?: Date;

  /**
   * @public
   * <p>Return customization jobs with the specified status. </p>
   */
  statusEquals?: FineTuningJobStatus | string;

  /**
   * @public
   * <p>Return customization jobs only if the job name contains these characters.</p>
   */
  nameContains?: string;

  /**
   * @public
   * <p>Maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Continuation token from the previous response, for Bedrock to list the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The field to sort by in the returned list of jobs.</p>
   */
  sortBy?: SortJobsBy | string;

  /**
   * @public
   * <p>The sort order of the results.</p>
   */
  sortOrder?: SortOrder | string;
}

/**
 * @public
 * <p>Information about one customization job</p>
 */
export interface ModelCustomizationJobSummary {
  /**
   * @public
   * <p>ARN of the customization job.</p>
   */
  jobArn: string | undefined;

  /**
   * @public
   * <p>ARN of the base model.</p>
   */
  baseModelArn: string | undefined;

  /**
   * @public
   * <p>Name of the customization job.</p>
   */
  jobName: string | undefined;

  /**
   * @public
   * <p>Status of the customization job. </p>
   */
  status: ModelCustomizationJobStatus | string | undefined;

  /**
   * @public
   * <p>Time that the customization job was last modified.</p>
   */
  lastModifiedTime?: Date;

  /**
   * @public
   * <p>Creation time of the custom model. </p>
   */
  creationTime: Date | undefined;

  /**
   * @public
   * <p>Time that the customization job ended.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>ARN of the custom model.</p>
   */
  customModelArn?: string;

  /**
   * @public
   * <p>Name of the custom model.</p>
   */
  customModelName?: string;
}

/**
 * @public
 */
export interface ListModelCustomizationJobsResponse {
  /**
   * @public
   * <p>Page continuation token to use in the next request.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Job summaries.</p>
   */
  modelCustomizationJobSummaries?: ModelCustomizationJobSummary[];
}

/**
 * @public
 */
export interface StopModelCustomizationJobRequest {
  /**
   * @public
   * <p>Job identifier of the job to stop.</p>
   */
  jobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopModelCustomizationJobResponse {}
