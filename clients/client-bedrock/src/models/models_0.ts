// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { BedrockServiceException as __BaseException } from "./BedrockServiceException";

/**
 * <p>The request is denied because of missing access permissions.</p>
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
 * @public
 */
export interface DeleteModelInvocationLoggingConfigurationRequest {}

/**
 * @public
 */
export interface DeleteModelInvocationLoggingConfigurationResponse {}

/**
 * <p>An internal server error occurred. Retry your request.</p>
 * @public
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
 * <p>The number of requests exceeds the limit. Resubmit your request later.</p>
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
 * @public
 */
export interface GetModelInvocationLoggingConfigurationRequest {}

/**
 * <p>S3 configuration for storing log data.</p>
 * @public
 */
export interface S3Config {
  /**
   * <p>S3 bucket name.</p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p>S3 prefix. </p>
   * @public
   */
  keyPrefix?: string;
}

/**
 * <p>CloudWatch logging configuration.</p>
 * @public
 */
export interface CloudWatchConfig {
  /**
   * <p>The log group name.</p>
   * @public
   */
  logGroupName: string | undefined;

  /**
   * <p>The role ARN.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>S3 configuration for delivering a large amount of data.</p>
   * @public
   */
  largeDataDeliveryS3Config?: S3Config;
}

/**
 * <p>Configuration fields for invokation logging.</p>
 * @public
 */
export interface LoggingConfig {
  /**
   * <p>CloudWatch logging configuration.</p>
   * @public
   */
  cloudWatchConfig?: CloudWatchConfig;

  /**
   * <p>S3 configuration for storing log data.</p>
   * @public
   */
  s3Config?: S3Config;

  /**
   * <p>Set to include text data in the log delivery.</p>
   * @public
   */
  textDataDeliveryEnabled?: boolean;

  /**
   * <p>Set to include image data in the log delivery.</p>
   * @public
   */
  imageDataDeliveryEnabled?: boolean;

  /**
   * <p>Set to include embeddings data in the log delivery.</p>
   * @public
   */
  embeddingDataDeliveryEnabled?: boolean;
}

/**
 * @public
 */
export interface GetModelInvocationLoggingConfigurationResponse {
  /**
   * <p>The current configuration values.</p>
   * @public
   */
  loggingConfig?: LoggingConfig;
}

/**
 * @public
 */
export interface PutModelInvocationLoggingConfigurationRequest {
  /**
   * <p>The logging configuration values to set.</p>
   * @public
   */
  loggingConfig: LoggingConfig | undefined;
}

/**
 * @public
 */
export interface PutModelInvocationLoggingConfigurationResponse {}

/**
 * <p>Input validation failed. Check your request parameters and retry the request.</p>
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
 * <p>Error occurred because of a conflict while performing an operation.</p>
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
 * @public
 */
export interface DeleteCustomModelRequest {
  /**
   * <p>Name of the model to delete.</p>
   * @public
   */
  modelIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomModelResponse {}

/**
 * <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
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
 * @public
 */
export interface GetCustomModelRequest {
  /**
   * <p>Name or ARN of the custom model.</p>
   * @public
   */
  modelIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CustomizationType = {
  CONTINUED_PRE_TRAINING: "CONTINUED_PRE_TRAINING",
  FINE_TUNING: "FINE_TUNING",
} as const;

/**
 * @public
 */
export type CustomizationType = (typeof CustomizationType)[keyof typeof CustomizationType];

/**
 * <p>S3 Location of the output data.</p>
 * @public
 */
export interface OutputDataConfig {
  /**
   * <p>The S3 URI where the output data is stored.</p>
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * <p>S3 Location of the training data.</p>
 * @public
 */
export interface TrainingDataConfig {
  /**
   * <p>The S3 URI where the training data is stored.</p>
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * <p>Metrics associated with the custom job.</p>
 * @public
 */
export interface TrainingMetrics {
  /**
   * <p>Loss metric associated with the custom job.</p>
   * @public
   */
  trainingLoss?: number;
}

/**
 * <p>Information about a validator.</p>
 * @public
 */
export interface Validator {
  /**
   * <p>The S3 URI where the validation data is stored.</p>
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * <p>Array of up to 10 validators.</p>
 * @public
 */
export interface ValidationDataConfig {
  /**
   * <p>Information about the validators.</p>
   * @public
   */
  validators: Validator[] | undefined;
}

/**
 * <p>The metric for the validator.</p>
 * @public
 */
export interface ValidatorMetric {
  /**
   * <p>The validation loss associated with this validator.</p>
   * @public
   */
  validationLoss?: number;
}

/**
 * @public
 */
export interface GetCustomModelResponse {
  /**
   * <p>ARN associated with this model.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>Model name associated with this model.</p>
   * @public
   */
  modelName: string | undefined;

  /**
   * <p>Job name associated with this model.</p>
   * @public
   */
  jobName?: string;

  /**
   * <p>Job ARN associated with this model.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>ARN of the base model.</p>
   * @public
   */
  baseModelArn: string | undefined;

  /**
   * <p>The type of model customization.</p>
   * @public
   */
  customizationType?: CustomizationType;

  /**
   * <p>The custom model is encrypted at rest using this key.</p>
   * @public
   */
  modelKmsKeyArn?: string;

  /**
   * <p>Hyperparameter values associated with this model.</p>
   * @public
   */
  hyperParameters?: Record<string, string>;

  /**
   * <p>Information about the training dataset.</p>
   * @public
   */
  trainingDataConfig: TrainingDataConfig | undefined;

  /**
   * <p>Array of up to 10 validators.</p>
   * @public
   */
  validationDataConfig?: ValidationDataConfig;

  /**
   * <p>Output data configuration associated with this custom model.</p>
   * @public
   */
  outputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The training metrics from the job creation.</p>
   * @public
   */
  trainingMetrics?: TrainingMetrics;

  /**
   * <p>The validation metrics from the job creation.</p>
   * @public
   */
  validationMetrics?: ValidatorMetric[];

  /**
   * <p>Creation time of the model.</p>
   * @public
   */
  creationTime: Date | undefined;
}

/**
 * @public
 */
export interface GetFoundationModelRequest {
  /**
   * <p>The model identifier. </p>
   * @public
   */
  modelIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelCustomization = {
  CONTINUED_PRE_TRAINING: "CONTINUED_PRE_TRAINING",
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
 * @enum
 */
export const FoundationModelLifecycleStatus = {
  ACTIVE: "ACTIVE",
  LEGACY: "LEGACY",
} as const;

/**
 * @public
 */
export type FoundationModelLifecycleStatus =
  (typeof FoundationModelLifecycleStatus)[keyof typeof FoundationModelLifecycleStatus];

/**
 * <p>Details about whether a model version is available or deprecated.</p>
 * @public
 */
export interface FoundationModelLifecycle {
  /**
   * <p>Specifies whether a model version is available (<code>ACTIVE</code>) or deprecated (<code>LEGACY</code>.</p>
   * @public
   */
  status: FoundationModelLifecycleStatus | undefined;
}

/**
 * <p>Information about a foundation model.</p>
 * @public
 */
export interface FoundationModelDetails {
  /**
   * <p>The model ARN.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>The model identifier.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The model name.</p>
   * @public
   */
  modelName?: string;

  /**
   * <p>he model's provider name.</p>
   * @public
   */
  providerName?: string;

  /**
   * <p>The input modalities that the model supports.</p>
   * @public
   */
  inputModalities?: ModelModality[];

  /**
   * <p>The output modalities that the model supports.</p>
   * @public
   */
  outputModalities?: ModelModality[];

  /**
   * <p>Indicates whether the model supports streaming.</p>
   * @public
   */
  responseStreamingSupported?: boolean;

  /**
   * <p>The customization that the model supports.</p>
   * @public
   */
  customizationsSupported?: ModelCustomization[];

  /**
   * <p>The inference types that the model supports.</p>
   * @public
   */
  inferenceTypesSupported?: InferenceType[];

  /**
   * <p>Contains details about whether a model version is available or deprecated</p>
   * @public
   */
  modelLifecycle?: FoundationModelLifecycle;
}

/**
 * @public
 */
export interface GetFoundationModelResponse {
  /**
   * <p>Information about the foundation model.</p>
   * @public
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
   * <p>Return custom models created before the specified time. </p>
   * @public
   */
  creationTimeBefore?: Date;

  /**
   * <p>Return custom models created after the specified time. </p>
   * @public
   */
  creationTimeAfter?: Date;

  /**
   * <p>Return custom models only if the job name contains these characters.</p>
   * @public
   */
  nameContains?: string;

  /**
   * <p>Return custom models only if the base model ARN matches this parameter.</p>
   * @public
   */
  baseModelArnEquals?: string;

  /**
   * <p>Return custom models only if the foundation model ARN matches this parameter.</p>
   * @public
   */
  foundationModelArnEquals?: string;

  /**
   * <p>Maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Continuation token from the previous response, for Amazon Bedrock to list the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The field to sort by in the returned list of models.</p>
   * @public
   */
  sortBy?: SortModelsBy;

  /**
   * <p>The sort order of the results.</p>
   * @public
   */
  sortOrder?: SortOrder;
}

/**
 * <p>Summary information for a custom model.</p>
 * @public
 */
export interface CustomModelSummary {
  /**
   * <p>The ARN of the custom model.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>The name of the custom model.</p>
   * @public
   */
  modelName: string | undefined;

  /**
   * <p>Creation time of the model.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The base model ARN.</p>
   * @public
   */
  baseModelArn: string | undefined;

  /**
   * <p>The base model name.</p>
   * @public
   */
  baseModelName: string | undefined;

  /**
   * <p>Specifies whether to carry out continued pre-training of a model or whether to fine-tune it. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html">Custom models</a>.</p>
   * @public
   */
  customizationType?: CustomizationType;
}

/**
 * @public
 */
export interface ListCustomModelsResponse {
  /**
   * <p>Continuation token for the next request to list the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Model summaries.</p>
   * @public
   */
  modelSummaries?: CustomModelSummary[];
}

/**
 * @public
 */
export interface ListFoundationModelsRequest {
  /**
   * <p>A Amazon Bedrock model provider.</p>
   * @public
   */
  byProvider?: string;

  /**
   * <p>List by customization type.</p>
   * @public
   */
  byCustomizationType?: ModelCustomization;

  /**
   * <p>List by output modality type.</p>
   * @public
   */
  byOutputModality?: ModelModality;

  /**
   * <p>List by inference type.</p>
   * @public
   */
  byInferenceType?: InferenceType;
}

/**
 * <p>Summary information for a foundation model.</p>
 * @public
 */
export interface FoundationModelSummary {
  /**
   * <p>The ARN of the foundation model.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>The model Id of the foundation model.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The name of the model.</p>
   * @public
   */
  modelName?: string;

  /**
   * <p>The model's provider name.</p>
   * @public
   */
  providerName?: string;

  /**
   * <p>The input modalities that the model supports.</p>
   * @public
   */
  inputModalities?: ModelModality[];

  /**
   * <p>The output modalities that the model supports.</p>
   * @public
   */
  outputModalities?: ModelModality[];

  /**
   * <p>Indicates whether the model supports streaming.</p>
   * @public
   */
  responseStreamingSupported?: boolean;

  /**
   * <p>Whether the model supports fine-tuning or continual pre-training.</p>
   * @public
   */
  customizationsSupported?: ModelCustomization[];

  /**
   * <p>The inference types that the model supports.</p>
   * @public
   */
  inferenceTypesSupported?: InferenceType[];

  /**
   * <p>Contains details about whether a model version is available or deprecated.</p>
   * @public
   */
  modelLifecycle?: FoundationModelLifecycle;
}

/**
 * @public
 */
export interface ListFoundationModelsResponse {
  /**
   * <p>A list of Amazon Bedrock foundation models.</p>
   * @public
   */
  modelSummaries?: FoundationModelSummary[];
}

/**
 * @public
 * @enum
 */
export const CommitmentDuration = {
  ONE_MONTH: "OneMonth",
  SIX_MONTHS: "SixMonths",
} as const;

/**
 * @public
 */
export type CommitmentDuration = (typeof CommitmentDuration)[keyof typeof CommitmentDuration];

/**
 * <p>Definition of the key/value pair for a tag.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>Key for the tag.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>Value for the tag.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateProvisionedModelThroughputRequest {
  /**
   * <p>Unique token value that you can provide. If this token matches a previous request,
   *           Amazon Bedrock ignores the request, but does not return an error.</p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>Number of model units to allocate.</p>
   * @public
   */
  modelUnits: number | undefined;

  /**
   * <p>Unique name for this provisioned throughput.</p>
   * @public
   */
  provisionedModelName: string | undefined;

  /**
   * <p>Name or ARN of the model to associate with this provisioned throughput.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>Commitment duration requested for the provisioned throughput.</p>
   * @public
   */
  commitmentDuration?: CommitmentDuration;

  /**
   * <p>Tags to associate with this provisioned throughput.</p>
   * @public
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateProvisionedModelThroughputResponse {
  /**
   * <p>The ARN for this provisioned throughput.</p>
   * @public
   */
  provisionedModelArn: string | undefined;
}

/**
 * <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
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
 * <p>The request contains more tags than can be associated with a resource (50 tags per resource).
 *          The maximum number of tags includes both existing tags and those included in your current request. </p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The name of the resource with too many tags.</p>
   * @public
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
export interface DeleteProvisionedModelThroughputRequest {
  /**
   * <p>The ARN or name of the provisioned throughput.</p>
   * @public
   */
  provisionedModelId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProvisionedModelThroughputResponse {}

/**
 * @public
 */
export interface GetProvisionedModelThroughputRequest {
  /**
   * <p>The ARN or name of the provisioned throughput.</p>
   * @public
   */
  provisionedModelId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProvisionedModelStatus = {
  CREATING: "Creating",
  FAILED: "Failed",
  IN_SERVICE: "InService",
  UPDATING: "Updating",
} as const;

/**
 * @public
 */
export type ProvisionedModelStatus = (typeof ProvisionedModelStatus)[keyof typeof ProvisionedModelStatus];

/**
 * @public
 */
export interface GetProvisionedModelThroughputResponse {
  /**
   * <p>The current number of model units requested to be available for this provisioned throughput.</p>
   * @public
   */
  modelUnits: number | undefined;

  /**
   * <p>The desired number of model units that was requested to be available for this provisioned throughput.</p>
   * @public
   */
  desiredModelUnits: number | undefined;

  /**
   * <p>The name of the provisioned throughput.</p>
   * @public
   */
  provisionedModelName: string | undefined;

  /**
   * <p>The ARN of the provisioned throughput.</p>
   * @public
   */
  provisionedModelArn: string | undefined;

  /**
   * <p>The ARN or name of the model associated with this provisioned throughput.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>The ARN of the new model to asssociate with this provisioned throughput.</p>
   * @public
   */
  desiredModelArn: string | undefined;

  /**
   * <p>ARN of the foundation model.</p>
   * @public
   */
  foundationModelArn: string | undefined;

  /**
   * <p>Status of the provisioned throughput. </p>
   * @public
   */
  status: ProvisionedModelStatus | undefined;

  /**
   * <p>The timestamp of the creation time for this provisioned throughput. </p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The timestamp of the last modified time of this provisioned throughput. </p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>Failure message for any issues that the create operation encounters.</p>
   * @public
   */
  failureMessage?: string;

  /**
   * <p>Commitment duration of the provisioned throughput.</p>
   * @public
   */
  commitmentDuration?: CommitmentDuration;

  /**
   * <p>Commitment expiration time for the provisioned throughput.</p>
   * @public
   */
  commitmentExpirationTime?: Date;
}

/**
 * @public
 * @enum
 */
export const SortByProvisionedModels = {
  CREATION_TIME: "CreationTime",
} as const;

/**
 * @public
 */
export type SortByProvisionedModels = (typeof SortByProvisionedModels)[keyof typeof SortByProvisionedModels];

/**
 * @public
 */
export interface ListProvisionedModelThroughputsRequest {
  /**
   * <p>Return provisioned capacities created after the specified time. </p>
   * @public
   */
  creationTimeAfter?: Date;

  /**
   * <p>Return provisioned capacities created before the specified time. </p>
   * @public
   */
  creationTimeBefore?: Date;

  /**
   * <p>Return the list of provisioned capacities that match the specified status.</p>
   * @public
   */
  statusEquals?: ProvisionedModelStatus;

  /**
   * <p>Return the list of provisioned capacities where their model ARN is equal to this parameter.</p>
   * @public
   */
  modelArnEquals?: string;

  /**
   * <p>Return the list of provisioned capacities if their name contains these characters.</p>
   * @public
   */
  nameContains?: string;

  /**
   * <p>THe maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Continuation token from the previous response, for Amazon Bedrock to list the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The field to sort by in the returned list of provisioned capacities.</p>
   * @public
   */
  sortBy?: SortByProvisionedModels;

  /**
   * <p>The sort order of the results.</p>
   * @public
   */
  sortOrder?: SortOrder;
}

/**
 * <p>Set of fields associated with a provisioned throughput.</p>
 * @public
 */
export interface ProvisionedModelSummary {
  /**
   * <p>The name of the provisioned throughput.</p>
   * @public
   */
  provisionedModelName: string | undefined;

  /**
   * <p>The ARN of the provisioned throughput.</p>
   * @public
   */
  provisionedModelArn: string | undefined;

  /**
   * <p>The ARN of the model associated with this provisioned throughput.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>Desired model ARN.</p>
   * @public
   */
  desiredModelArn: string | undefined;

  /**
   * <p>Foundation model ARN.</p>
   * @public
   */
  foundationModelArn: string | undefined;

  /**
   * <p>The number of model units allocated.</p>
   * @public
   */
  modelUnits: number | undefined;

  /**
   * <p>Desired model units.</p>
   * @public
   */
  desiredModelUnits: number | undefined;

  /**
   * <p>Status of the provisioned throughput.</p>
   * @public
   */
  status: ProvisionedModelStatus | undefined;

  /**
   * <p>Commitment duration for the provisioned throughput.</p>
   * @public
   */
  commitmentDuration?: CommitmentDuration;

  /**
   * <p>Commitment expiration time for the provisioned throughput.</p>
   * @public
   */
  commitmentExpirationTime?: Date;

  /**
   * <p>The time that this provisioned throughput was created. </p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The time that this provisioned throughput was last modified. </p>
   * @public
   */
  lastModifiedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListProvisionedModelThroughputsResponse {
  /**
   * <p>Continuation token for the next request to list the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>List of summaries, one for each provisioned throughput in the response.</p>
   * @public
   */
  provisionedModelSummaries?: ProvisionedModelSummary[];
}

/**
 * @public
 */
export interface UpdateProvisionedModelThroughputRequest {
  /**
   * <p>The ARN or name of the provisioned throughput to update.</p>
   * @public
   */
  provisionedModelId: string | undefined;

  /**
   * <p>The new name for this provisioned throughput.</p>
   * @public
   */
  desiredProvisionedModelName?: string;

  /**
   * <p>The ARN of the new model to associate with this provisioned throughput.</p>
   * @public
   */
  desiredModelId?: string;
}

/**
 * @public
 */
export interface UpdateProvisionedModelThroughputResponse {}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>An array of the tags associated with this resource.</p>
   * @public
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to tag.</p>
   * @public
   */
  resourceARN: string | undefined;

  /**
   * <p>Tags to associate with the resource.</p>
   * @public
   */
  tags: Tag[] | undefined;
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
   * <p>The ARN of the resource to untag.</p>
   * @public
   */
  resourceARN: string | undefined;

  /**
   * <p>Tag keys of the tags to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>VPC configuration.</p>
 * @public
 */
export interface VpcConfig {
  /**
   * <p>VPC configuration subnets.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>VPC configuration security group Ids.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface CreateModelCustomizationJobRequest {
  /**
   * <p>Enter a unique name for the fine-tuning job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>Enter a name for the custom model.</p>
   * @public
   */
  customModelName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that Amazon Bedrock can assume to perform tasks on your behalf.
   *          For example, during model training, Amazon Bedrock needs your permission to read input data from an S3 bucket, write model artifacts to an S3 bucket.
   *          To pass this role to Amazon Bedrock, the caller of this API must have the <code>iam:PassRole</code> permission.
   *       </p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Unique token value that you can provide. The GetModelCustomizationJob response includes the same token value.</p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>Name of the base model.</p>
   * @public
   */
  baseModelIdentifier: string | undefined;

  /**
   * <p>The customization type.</p>
   * @public
   */
  customizationType?: CustomizationType;

  /**
   * <p>The custom model is encrypted at rest using this key.</p>
   * @public
   */
  customModelKmsKeyId?: string;

  /**
   * <p>Assign tags to the job.</p>
   * @public
   */
  jobTags?: Tag[];

  /**
   * <p>Assign tags to the custom model.</p>
   * @public
   */
  customModelTags?: Tag[];

  /**
   * <p>Information about the training dataset.</p>
   * @public
   */
  trainingDataConfig: TrainingDataConfig | undefined;

  /**
   * <p>Information about the validation dataset. </p>
   * @public
   */
  validationDataConfig?: ValidationDataConfig;

  /**
   * <p>S3 location for the output data.</p>
   * @public
   */
  outputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>Parameters related to tuning the model.</p>
   * @public
   */
  hyperParameters: Record<string, string> | undefined;

  /**
   * <p>VPC configuration (optional). Configuration parameters for the
   *            private Virtual Private Cloud (VPC) that contains the resources you are using for this job.</p>
   * @public
   */
  vpcConfig?: VpcConfig;
}

/**
 * @public
 */
export interface CreateModelCustomizationJobResponse {
  /**
   * <p>ARN of the fine tuning job</p>
   * @public
   */
  jobArn: string | undefined;
}

/**
 * @public
 */
export interface GetModelCustomizationJobRequest {
  /**
   * <p>Identifier for the customization job.</p>
   * @public
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
   * <p>The ARN of the customization job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>The name of the customization job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The name of the output model.</p>
   * @public
   */
  outputModelName: string | undefined;

  /**
   * <p>The ARN of the output model.</p>
   * @public
   */
  outputModelArn?: string;

  /**
   * <p>The token that you specified in the CreateCustomizationJob request.</p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>The ARN of the IAM role.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The status of the job. A successful job transitions from in-progress to completed when the output model is ready to use.
   *       If the job failed, the failure message contains information about why the job failed.</p>
   * @public
   */
  status?: ModelCustomizationJobStatus;

  /**
   * <p>Information about why the job failed.</p>
   * @public
   */
  failureMessage?: string;

  /**
   * <p>Time that the resource was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>Time that the resource was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date;

  /**
   * <p>Time that the resource transitioned to terminal state.</p>
   * @public
   */
  endTime?: Date;

  /**
   * <p>ARN of the base model.</p>
   * @public
   */
  baseModelArn: string | undefined;

  /**
   * <p>The hyperparameter values for the job. For information about hyperparameters for specific models, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-guidelines.html">Guidelines for model customization</a>.</p>
   * @public
   */
  hyperParameters: Record<string, string> | undefined;

  /**
   * <p>S3 Location of the training data.</p>
   * @public
   */
  trainingDataConfig: TrainingDataConfig | undefined;

  /**
   * <p>Array of up to 10 validators.</p>
   * @public
   */
  validationDataConfig: ValidationDataConfig | undefined;

  /**
   * <p>Output data configuration </p>
   * @public
   */
  outputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>The type of model customization.</p>
   * @public
   */
  customizationType?: CustomizationType;

  /**
   * <p>The custom model is encrypted at rest using this key.</p>
   * @public
   */
  outputModelKmsKeyArn?: string;

  /**
   * <p>Metrics associated with the custom job.</p>
   * @public
   */
  trainingMetrics?: TrainingMetrics;

  /**
   * <p>The loss metric for each validator that you provided in the createjob request.</p>
   * @public
   */
  validationMetrics?: ValidatorMetric[];

  /**
   * <p>VPC configuration for the custom model job.</p>
   * @public
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
   * <p>Return customization jobs created after the specified time. </p>
   * @public
   */
  creationTimeAfter?: Date;

  /**
   * <p>Return customization jobs created before the specified time. </p>
   * @public
   */
  creationTimeBefore?: Date;

  /**
   * <p>Return customization jobs with the specified status. </p>
   * @public
   */
  statusEquals?: FineTuningJobStatus;

  /**
   * <p>Return customization jobs only if the job name contains these characters.</p>
   * @public
   */
  nameContains?: string;

  /**
   * <p>Maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>Continuation token from the previous response, for Amazon Bedrock to list the next set of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The field to sort by in the returned list of jobs.</p>
   * @public
   */
  sortBy?: SortJobsBy;

  /**
   * <p>The sort order of the results.</p>
   * @public
   */
  sortOrder?: SortOrder;
}

/**
 * <p>Information about one customization job</p>
 * @public
 */
export interface ModelCustomizationJobSummary {
  /**
   * <p>ARN of the customization job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>ARN of the base model.</p>
   * @public
   */
  baseModelArn: string | undefined;

  /**
   * <p>Name of the customization job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>Status of the customization job. </p>
   * @public
   */
  status: ModelCustomizationJobStatus | undefined;

  /**
   * <p>Time that the customization job was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date;

  /**
   * <p>Creation time of the custom model. </p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>Time that the customization job ended.</p>
   * @public
   */
  endTime?: Date;

  /**
   * <p>ARN of the custom model.</p>
   * @public
   */
  customModelArn?: string;

  /**
   * <p>Name of the custom model.</p>
   * @public
   */
  customModelName?: string;

  /**
   * <p>Specifies whether to carry out continued pre-training of a model or whether to fine-tune it. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html">Custom models</a>.</p>
   * @public
   */
  customizationType?: CustomizationType;
}

/**
 * @public
 */
export interface ListModelCustomizationJobsResponse {
  /**
   * <p>Page continuation token to use in the next request.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Job summaries.</p>
   * @public
   */
  modelCustomizationJobSummaries?: ModelCustomizationJobSummary[];
}

/**
 * @public
 */
export interface StopModelCustomizationJobRequest {
  /**
   * <p>Job identifier of the job to stop.</p>
   * @public
   */
  jobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopModelCustomizationJobResponse {}
