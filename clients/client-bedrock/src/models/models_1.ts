// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AgreementAvailability,
  ApplicationType,
  CommitmentDuration,
  CustomizationConfig,
  CustomizationType,
  EvaluationConfig,
  EvaluationConfigFilterSensitiveLog,
  EvaluationJobStatus,
  EvaluationJobType,
  EvaluationModelConfig,
  EvaluationModelConfigFilterSensitiveLog,
  EvaluationOutputDataConfig,
  EvaluationPrecomputedRagSourceConfig,
  ExternalSourcesRetrieveAndGenerateConfiguration,
  ExternalSourcesRetrieveAndGenerateConfigurationFilterSensitiveLog,
  FilterAttribute,
  GenerationConfiguration,
  GenerationConfigurationFilterSensitiveLog,
  ImplicitFilterConfiguration,
  ImplicitFilterConfigurationFilterSensitiveLog,
  OrchestrationConfiguration,
  OutputDataConfig,
  ProvisionedModelStatus,
  RetrieveAndGenerateType,
  SearchType,
  SortJobsBy,
  SortOrder,
  Tag,
  TrainingDataConfig,
  TrainingDataConfigFilterSensitiveLog,
  TrainingMetrics,
  ValidationDataConfig,
  ValidatorMetric,
  VectorSearchRerankingConfiguration,
  VectorSearchRerankingConfigurationFilterSensitiveLog,
  VpcConfig,
} from "./models_0";

/**
 * <p>A summary of information about a Provisioned Throughput.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListProvisionedModelThroughputs.html#API_ListProvisionedModelThroughputs_ResponseSyntax">ListProvisionedThroughputs response</a> </p> </li> </ul>
 * @public
 */
export interface ProvisionedModelSummary {
  /**
   * <p>The name of the Provisioned Throughput.</p>
   * @public
   */
  provisionedModelName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Provisioned Throughput.</p>
   * @public
   */
  provisionedModelArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model associated with the Provisioned Throughput.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model requested to be associated to this Provisioned Throughput. This value differs from the <code>modelArn</code> if updating hasn't completed.</p>
   * @public
   */
  desiredModelArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the base model for which the Provisioned Throughput was created, or of the base model that the custom model for which the Provisioned Throughput was created was customized.</p>
   * @public
   */
  foundationModelArn: string | undefined;

  /**
   * <p>The number of model units allocated to the Provisioned Throughput.</p>
   * @public
   */
  modelUnits: number | undefined;

  /**
   * <p>The number of model units that was requested to be allocated to the Provisioned Throughput.</p>
   * @public
   */
  desiredModelUnits: number | undefined;

  /**
   * <p>The status of the Provisioned Throughput.</p>
   * @public
   */
  status: ProvisionedModelStatus | undefined;

  /**
   * <p>The duration for which the Provisioned Throughput was committed.</p>
   * @public
   */
  commitmentDuration?: CommitmentDuration | undefined;

  /**
   * <p>The timestamp for when the commitment term of the Provisioned Throughput expires.</p>
   * @public
   */
  commitmentExpirationTime?: Date | undefined;

  /**
   * <p>The time that the Provisioned Throughput was created. </p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The time that the Provisioned Throughput was last modified. </p>
   * @public
   */
  lastModifiedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListProvisionedModelThroughputsResponse {
  /**
   * <p>If there are more results than the number you specified in the <code>maxResults</code> field, this value is returned. To see the next batch of results, include this value in the <code>nextToken</code> field in another list request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of summaries, one for each Provisioned Throughput in the response.</p>
   * @public
   */
  provisionedModelSummaries?: ProvisionedModelSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateProvisionedModelThroughputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or name of the Provisioned Throughput to update.</p>
   * @public
   */
  provisionedModelId: string | undefined;

  /**
   * <p>The new name for this Provisioned Throughput.</p>
   * @public
   */
  desiredProvisionedModelName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the new model to associate with this Provisioned Throughput. You can't specify this field if this Provisioned Throughput is associated with a base model.</p> <p>If this Provisioned Throughput is associated with a custom model, you can specify one of the following options:</p> <ul> <li> <p>The base model from which the custom model was customized.</p> </li> <li> <p>Another custom model that was customized from the same base model as the custom model.</p> </li> </ul>
   * @public
   */
  desiredModelId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProvisionedModelThroughputResponse {}

/**
 * @public
 */
export interface CreateFoundationModelAgreementRequest {
  /**
   * <p>An offer token encapsulates the information for an offer.</p>
   * @public
   */
  offerToken: string | undefined;

  /**
   * <p>Model Id of the model for the access request.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * @public
 */
export interface CreateFoundationModelAgreementResponse {
  /**
   * <p>Model Id of the model for the access request.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFoundationModelAgreementRequest {
  /**
   * <p>Model Id of the model access to delete.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * @public
 */
export interface DeleteFoundationModelAgreementResponse {}

/**
 * @public
 */
export interface GetFoundationModelAvailabilityRequest {
  /**
   * <p>The model Id of the foundation model.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AuthorizationStatus = {
  AUTHORIZED: "AUTHORIZED",
  NOT_AUTHORIZED: "NOT_AUTHORIZED",
} as const;

/**
 * @public
 */
export type AuthorizationStatus = (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];

/**
 * @public
 * @enum
 */
export const EntitlementAvailability = {
  AVAILABLE: "AVAILABLE",
  NOT_AVAILABLE: "NOT_AVAILABLE",
} as const;

/**
 * @public
 */
export type EntitlementAvailability = (typeof EntitlementAvailability)[keyof typeof EntitlementAvailability];

/**
 * @public
 * @enum
 */
export const RegionAvailability = {
  AVAILABLE: "AVAILABLE",
  NOT_AVAILABLE: "NOT_AVAILABLE",
} as const;

/**
 * @public
 */
export type RegionAvailability = (typeof RegionAvailability)[keyof typeof RegionAvailability];

/**
 * @public
 */
export interface GetFoundationModelAvailabilityResponse {
  /**
   * <p>The model Id of the foundation model.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>Agreement availability. </p>
   * @public
   */
  agreementAvailability: AgreementAvailability | undefined;

  /**
   * <p>Authorization status.</p>
   * @public
   */
  authorizationStatus: AuthorizationStatus | undefined;

  /**
   * <p>Entitlement availability. </p>
   * @public
   */
  entitlementAvailability: EntitlementAvailability | undefined;

  /**
   * <p>Region availability. </p>
   * @public
   */
  regionAvailability: RegionAvailability | undefined;
}

/**
 * @public
 * @enum
 */
export const OfferType = {
  ALL: "ALL",
  PUBLIC: "PUBLIC",
} as const;

/**
 * @public
 */
export type OfferType = (typeof OfferType)[keyof typeof OfferType];

/**
 * @public
 */
export interface ListFoundationModelAgreementOffersRequest {
  /**
   * <p>Model Id of the foundation model.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>Type of offer associated with the model.</p>
   * @public
   */
  offerType?: OfferType | undefined;
}

/**
 * <p>The legal term of the agreement.</p>
 * @public
 */
export interface LegalTerm {
  /**
   * <p>URL to the legal term document.</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * <p>Describes a support term.</p>
 * @public
 */
export interface SupportTerm {
  /**
   * <p>Describes the refund policy.</p>
   * @public
   */
  refundPolicyDescription?: string | undefined;
}

/**
 * <p>Dimensional price rate.</p>
 * @public
 */
export interface DimensionalPriceRate {
  /**
   * <p>Dimension for the price rate.</p>
   * @public
   */
  dimension?: string | undefined;

  /**
   * <p>Single-dimensional rate information.</p>
   * @public
   */
  price?: string | undefined;

  /**
   * <p>Description of the price rate.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Unit associated with the price.</p>
   * @public
   */
  unit?: string | undefined;
}

/**
 * <p>Describes the usage-based pricing term.</p>
 * @public
 */
export interface PricingTerm {
  /**
   * <p>Describes a usage price for each dimension.</p>
   * @public
   */
  rateCard: DimensionalPriceRate[] | undefined;
}

/**
 * <p>Describes the validity terms.</p>
 * @public
 */
export interface ValidityTerm {
  /**
   * <p>Describes the agreement duration.</p>
   * @public
   */
  agreementDuration?: string | undefined;
}

/**
 * <p>Describes the usage terms of an offer.</p>
 * @public
 */
export interface TermDetails {
  /**
   * <p>Describes the usage-based pricing term.</p>
   * @public
   */
  usageBasedPricingTerm: PricingTerm | undefined;

  /**
   * <p>Describes the legal terms.</p>
   * @public
   */
  legalTerm: LegalTerm | undefined;

  /**
   * <p>Describes the support terms.</p>
   * @public
   */
  supportTerm: SupportTerm | undefined;

  /**
   * <p>Describes the validity terms.</p>
   * @public
   */
  validityTerm?: ValidityTerm | undefined;
}

/**
 * <p>An offer dictates usage terms for the model.</p>
 * @public
 */
export interface Offer {
  /**
   * <p>Offer Id for a model offer.</p>
   * @public
   */
  offerId?: string | undefined;

  /**
   * <p>Offer token.</p>
   * @public
   */
  offerToken: string | undefined;

  /**
   * <p>Details about the terms of the offer.</p>
   * @public
   */
  termDetails: TermDetails | undefined;
}

/**
 * @public
 */
export interface ListFoundationModelAgreementOffersResponse {
  /**
   * <p>Model Id of the foundation model.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>List of the offers associated with the specified model.</p>
   * @public
   */
  offers: Offer[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
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
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to tag.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource to untag.</p>
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
 * @public
 */
export interface CreateModelCustomizationJobRequest {
  /**
   * <p>A name for the fine-tuning job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>A name for the resulting custom model.</p>
   * @public
   */
  customModelName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM service role that Amazon Bedrock can assume to perform tasks on your behalf. For example, during model training, Amazon Bedrock needs your permission to read input data from an S3 bucket, write model artifacts to an S3 bucket. To pass this role to Amazon Bedrock, the caller of this API must have the <code>iam:PassRole</code> permission. </p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>Name of the base model.</p>
   * @public
   */
  baseModelIdentifier: string | undefined;

  /**
   * <p>The customization type.</p>
   * @public
   */
  customizationType?: CustomizationType | undefined;

  /**
   * <p>The custom model is encrypted at rest using this key.</p>
   * @public
   */
  customModelKmsKeyId?: string | undefined;

  /**
   * <p>Tags to attach to the job.</p>
   * @public
   */
  jobTags?: Tag[] | undefined;

  /**
   * <p>Tags to attach to the resulting custom model.</p>
   * @public
   */
  customModelTags?: Tag[] | undefined;

  /**
   * <p>Information about the training dataset.</p>
   * @public
   */
  trainingDataConfig: TrainingDataConfig | undefined;

  /**
   * <p>Information about the validation dataset. </p>
   * @public
   */
  validationDataConfig?: ValidationDataConfig | undefined;

  /**
   * <p>S3 location for the output data.</p>
   * @public
   */
  outputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>Parameters related to tuning the model. For details on the format for different models, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models-hp.html">Custom model hyperparameters</a>.</p>
   * @public
   */
  hyperParameters?: Record<string, string> | undefined;

  /**
   * <p>The configuration of the Virtual Private Cloud (VPC) that contains the resources that you're using for this job. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/vpc-model-customization.html">Protect your model customization jobs using a VPC</a>.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>The customization configuration for the model customization job.</p>
   * @public
   */
  customizationConfig?: CustomizationConfig | undefined;
}

/**
 * @public
 */
export interface CreateModelCustomizationJobResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the fine tuning job</p>
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
 * @enum
 */
export const JobStatusDetails = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  NOT_STARTED: "NotStarted",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type JobStatusDetails = (typeof JobStatusDetails)[keyof typeof JobStatusDetails];

/**
 * <p>For a Distillation job, the status details for the data processing sub-task of the job.</p>
 * @public
 */
export interface DataProcessingDetails {
  /**
   * <p>The status of the data processing sub-task of the job.</p>
   * @public
   */
  status?: JobStatusDetails | undefined;

  /**
   * <p>The start time of the data processing sub-task of the job.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The latest update to the data processing sub-task of the job.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;
}

/**
 * <p>For a Distillation job, the status details for the training sub-task of the job.</p>
 * @public
 */
export interface TrainingDetails {
  /**
   * <p>The status of the training sub-task of the job.</p>
   * @public
   */
  status?: JobStatusDetails | undefined;

  /**
   * <p>The start time of the training sub-task of the job.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The latest update to the training sub-task of the job.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;
}

/**
 * <p>For a Distillation job, the status details for the validation sub-task of the job.</p>
 * @public
 */
export interface ValidationDetails {
  /**
   * <p>The status of the validation sub-task of the job.</p>
   * @public
   */
  status?: JobStatusDetails | undefined;

  /**
   * <p>The start time of the validation sub-task of the job.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The latest update to the validation sub-task of the job.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;
}

/**
 * <p>For a Distillation job, the status details for sub-tasks of the job. Possible statuses for each sub-task include the following:</p> <ul> <li> <p>NotStarted</p> </li> <li> <p>InProgress</p> </li> <li> <p>Completed</p> </li> <li> <p>Stopping</p> </li> <li> <p>Stopped</p> </li> <li> <p>Failed</p> </li> </ul>
 * @public
 */
export interface StatusDetails {
  /**
   * <p>The status details for the validation sub-task of the job.</p>
   * @public
   */
  validationDetails?: ValidationDetails | undefined;

  /**
   * <p>The status details for the data processing sub-task of the job.</p>
   * @public
   */
  dataProcessingDetails?: DataProcessingDetails | undefined;

  /**
   * <p>The status details for the training sub-task of the job.</p>
   * @public
   */
  trainingDetails?: TrainingDetails | undefined;
}

/**
 * @public
 */
export interface GetModelCustomizationJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the customization job.</p>
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
   * <p>The Amazon Resource Name (ARN) of the output model.</p>
   * @public
   */
  outputModelArn?: string | undefined;

  /**
   * <p>The token that you specified in the <code>CreateCustomizationJob</code> request.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The status of the job. A successful job transitions from in-progress to completed when the output model is ready to use. If the job failed, the failure message contains information about why the job failed.</p>
   * @public
   */
  status?: ModelCustomizationJobStatus | undefined;

  /**
   * <p>For a Distillation job, the details about the statuses of the sub-tasks of the customization job. </p>
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * <p>Information about why the job failed.</p>
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * <p>Time that the resource was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>Time that the resource was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * <p>Time that the resource transitioned to terminal state.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the base model.</p>
   * @public
   */
  baseModelArn: string | undefined;

  /**
   * <p>The hyperparameter values for the job. For details on the format for different models, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models-hp.html">Custom model hyperparameters</a>.</p>
   * @public
   */
  hyperParameters?: Record<string, string> | undefined;

  /**
   * <p>Contains information about the training dataset.</p>
   * @public
   */
  trainingDataConfig: TrainingDataConfig | undefined;

  /**
   * <p>Contains information about the validation dataset.</p>
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
  customizationType?: CustomizationType | undefined;

  /**
   * <p>The custom model is encrypted at rest using this key.</p>
   * @public
   */
  outputModelKmsKeyArn?: string | undefined;

  /**
   * <p>Contains training metrics from the job creation.</p>
   * @public
   */
  trainingMetrics?: TrainingMetrics | undefined;

  /**
   * <p>The loss metric for each validator that you provided in the createjob request.</p>
   * @public
   */
  validationMetrics?: ValidatorMetric[] | undefined;

  /**
   * <p>VPC configuration for the custom model job.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>The customization configuration for the model customization job.</p>
   * @public
   */
  customizationConfig?: CustomizationConfig | undefined;
}

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
  creationTimeAfter?: Date | undefined;

  /**
   * <p>Return customization jobs created before the specified time. </p>
   * @public
   */
  creationTimeBefore?: Date | undefined;

  /**
   * <p>Return customization jobs with the specified status. </p>
   * @public
   */
  statusEquals?: FineTuningJobStatus | undefined;

  /**
   * <p>Return customization jobs only if the job name contains these characters.</p>
   * @public
   */
  nameContains?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The field to sort by in the returned list of jobs.</p>
   * @public
   */
  sortBy?: SortJobsBy | undefined;

  /**
   * <p>The sort order of the results.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * <p>Information about one customization job</p>
 * @public
 */
export interface ModelCustomizationJobSummary {
  /**
   * <p>Amazon Resource Name (ARN) of the customization job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the base model.</p>
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
   * <p>Details about the status of the data processing sub-task of the job.</p>
   * @public
   */
  statusDetails?: StatusDetails | undefined;

  /**
   * <p>Time that the customization job was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * <p>Creation time of the custom model. </p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>Time that the customization job ended.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the custom model.</p>
   * @public
   */
  customModelArn?: string | undefined;

  /**
   * <p>Name of the custom model.</p>
   * @public
   */
  customModelName?: string | undefined;

  /**
   * <p>Specifies whether to carry out continued pre-training of a model or whether to fine-tune it. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html">Custom models</a>.</p>
   * @public
   */
  customizationType?: CustomizationType | undefined;
}

/**
 * @public
 */
export interface ListModelCustomizationJobsResponse {
  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Job summaries.</p>
   * @public
   */
  modelCustomizationJobSummaries?: ModelCustomizationJobSummary[] | undefined;
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

/**
 * <p>Specifies the filters to use on the metadata attributes/fields in the knowledge base data sources before returning results.</p>
 * @public
 */
export type RetrievalFilter =
  | RetrievalFilter.AndAllMember
  | RetrievalFilter.EqualsMember
  | RetrievalFilter.GreaterThanMember
  | RetrievalFilter.GreaterThanOrEqualsMember
  | RetrievalFilter.InMember
  | RetrievalFilter.LessThanMember
  | RetrievalFilter.LessThanOrEqualsMember
  | RetrievalFilter.ListContainsMember
  | RetrievalFilter.NotEqualsMember
  | RetrievalFilter.NotInMember
  | RetrievalFilter.OrAllMember
  | RetrievalFilter.StartsWithMember
  | RetrievalFilter.StringContainsMember
  | RetrievalFilter.$UnknownMember;

/**
 * @public
 */
export namespace RetrievalFilter {
  /**
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value matches the value in this object.</p> <p>The following example would return data sources with an animal attribute whose value is 'cat': <code>"equals": \{ "key": "animal", "value": "cat" \}</code> </p>
   * @public
   */
  export interface EqualsMember {
    equals: FilterAttribute;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources that contain a metadata attribute whose name matches the key and whose value doesn't match the value in this object are returned.</p> <p>The following example would return data sources that don't contain an animal attribute whose value is 'cat': <code>"notEquals": \{ "key": "animal", "value": "cat" \}</code> </p>
   * @public
   */
  export interface NotEqualsMember {
    equals?: never;
    notEquals: FilterAttribute;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is greater than the value in this object.</p> <p>The following example would return data sources with an year attribute whose value is greater than '1989': <code>"greaterThan": \{ "key": "year", "value": 1989 \}</code> </p>
   * @public
   */
  export interface GreaterThanMember {
    equals?: never;
    notEquals?: never;
    greaterThan: FilterAttribute;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is greater than or equal to the value in this object.</p> <p>The following example would return data sources with an year attribute whose value is greater than or equal to '1989': <code>"greaterThanOrEquals": \{ "key": "year", "value": 1989 \}</code> </p>
   * @public
   */
  export interface GreaterThanOrEqualsMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals: FilterAttribute;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is less than the value in this object.</p> <p>The following example would return data sources with an year attribute whose value is less than to '1989': <code>"lessThan": \{ "key": "year", "value": 1989 \}</code> </p>
   * @public
   */
  export interface LessThanMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan: FilterAttribute;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is less than or equal to the value in this object.</p> <p>The following example would return data sources with an year attribute whose value is less than or equal to '1989': <code>"lessThanOrEquals": \{ "key": "year", "value": 1989 \}</code> </p>
   * @public
   */
  export interface LessThanOrEqualsMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals: FilterAttribute;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is in the list specified in the value in this object.</p> <p>The following example would return data sources with an animal attribute that is either 'cat' or 'dog': <code>"in": \{ "key": "animal", "value": ["cat", "dog"] \}</code> </p>
   * @public
   */
  export interface InMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in: FilterAttribute;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value isn't in the list specified in the value in this object.</p> <p>The following example would return data sources whose animal attribute is neither 'cat' nor 'dog': <code>"notIn": \{ "key": "animal", "value": ["cat", "dog"] \}</code> </p>
   * @public
   */
  export interface NotInMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn: FilterAttribute;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value starts with the value in this object. This filter is currently only supported for Amazon OpenSearch Serverless vector stores.</p> <p>The following example would return data sources with an animal attribute starts with 'ca' (for example, 'cat' or 'camel'). <code>"startsWith": \{ "key": "animal", "value": "ca" \}</code> </p>
   * @public
   */
  export interface StartsWithMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith: FilterAttribute;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is a list that contains the value as one of its members.</p> <p>The following example would return data sources with an animals attribute that is a list containing a cat member (for example, <code>["dog", "cat"]</code>): <code>"listContains": \{ "key": "animals", "value": "cat" \}</code> </p>
   * @public
   */
  export interface ListContainsMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains: FilterAttribute;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key and whose value is one of the following:</p> <p>A string that contains the value as a substring. The following example would return data sources with an animal attribute that contains the substring at (for example, 'cat'): <code>"stringContains": \{ "key": "animal", "value": "at" \}</code> </p> <p>A list with a member that contains the value as a substring. The following example would return data sources with an animals attribute that is a list containing a member that contains the substring at (for example, <code>["dog", "cat"]</code>): <code>"stringContains": \{ "key": "animals", "value": "at" \}</code> </p>
   * @public
   */
  export interface StringContainsMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains: FilterAttribute;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if their metadata attributes fulfill all the filter conditions inside this list.</p>
   * @public
   */
  export interface AndAllMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll: RetrievalFilter[];
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources are returned if their metadata attributes fulfill at least one of the filter conditions inside this list.</p>
   * @public
   */
  export interface OrAllMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll: RetrievalFilter[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    equals?: never;
    notEquals?: never;
    greaterThan?: never;
    greaterThanOrEquals?: never;
    lessThan?: never;
    lessThanOrEquals?: never;
    in?: never;
    notIn?: never;
    startsWith?: never;
    listContains?: never;
    stringContains?: never;
    andAll?: never;
    orAll?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    equals: (value: FilterAttribute) => T;
    notEquals: (value: FilterAttribute) => T;
    greaterThan: (value: FilterAttribute) => T;
    greaterThanOrEquals: (value: FilterAttribute) => T;
    lessThan: (value: FilterAttribute) => T;
    lessThanOrEquals: (value: FilterAttribute) => T;
    in: (value: FilterAttribute) => T;
    notIn: (value: FilterAttribute) => T;
    startsWith: (value: FilterAttribute) => T;
    listContains: (value: FilterAttribute) => T;
    stringContains: (value: FilterAttribute) => T;
    andAll: (value: RetrievalFilter[]) => T;
    orAll: (value: RetrievalFilter[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RetrievalFilter, visitor: Visitor<T>): T => {
    if (value.equals !== undefined) return visitor.equals(value.equals);
    if (value.notEquals !== undefined) return visitor.notEquals(value.notEquals);
    if (value.greaterThan !== undefined) return visitor.greaterThan(value.greaterThan);
    if (value.greaterThanOrEquals !== undefined) return visitor.greaterThanOrEquals(value.greaterThanOrEquals);
    if (value.lessThan !== undefined) return visitor.lessThan(value.lessThan);
    if (value.lessThanOrEquals !== undefined) return visitor.lessThanOrEquals(value.lessThanOrEquals);
    if (value.in !== undefined) return visitor.in(value.in);
    if (value.notIn !== undefined) return visitor.notIn(value.notIn);
    if (value.startsWith !== undefined) return visitor.startsWith(value.startsWith);
    if (value.listContains !== undefined) return visitor.listContains(value.listContains);
    if (value.stringContains !== undefined) return visitor.stringContains(value.stringContains);
    if (value.andAll !== undefined) return visitor.andAll(value.andAll);
    if (value.orAll !== undefined) return visitor.orAll(value.orAll);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The configuration details for returning the results from the knowledge base vector search.</p>
 * @public
 */
export interface KnowledgeBaseVectorSearchConfiguration {
  /**
   * <p>The number of text chunks to retrieve; the number of results to return.</p>
   * @public
   */
  numberOfResults?: number | undefined;

  /**
   * <p>By default, Amazon Bedrock decides a search strategy for you. If you're using an Amazon OpenSearch Serverless vector store that contains a filterable text field, you can specify whether to query the knowledge base with a <code>HYBRID</code> search using both vector embeddings and raw text, or <code>SEMANTIC</code> search using only vector embeddings. For other vector store configurations, only <code>SEMANTIC</code> search is available.</p>
   * @public
   */
  overrideSearchType?: SearchType | undefined;

  /**
   * <p>Specifies the filters to use on the metadata fields in the knowledge base data sources before returning results.</p>
   * @public
   */
  filter?: RetrievalFilter | undefined;

  /**
   * <p>Configuration for implicit filtering in Knowledge Base vector searches. This allows the system to automatically apply filters based on the query context without requiring explicit filter expressions.</p>
   * @public
   */
  implicitFilterConfiguration?: ImplicitFilterConfiguration | undefined;

  /**
   * <p>Configuration for reranking search results in Knowledge Base vector searches. Reranking improves search relevance by reordering initial vector search results using more sophisticated relevance models.</p>
   * @public
   */
  rerankingConfiguration?: VectorSearchRerankingConfiguration | undefined;
}

/**
 * <p>Contains configuration details for retrieving information from a knowledge base.</p>
 * @public
 */
export interface KnowledgeBaseRetrievalConfiguration {
  /**
   * <p>Contains configuration details for returning the results from the vector search.</p>
   * @public
   */
  vectorSearchConfiguration: KnowledgeBaseVectorSearchConfiguration | undefined;
}

/**
 * <p>Contains configuration details for retrieving information from a knowledge base and generating responses.</p>
 * @public
 */
export interface KnowledgeBaseRetrieveAndGenerateConfiguration {
  /**
   * <p>The unique identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the foundation model or <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">inference profile</a> used to generate responses.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>Contains configuration details for retrieving text chunks.</p>
   * @public
   */
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration | undefined;

  /**
   * <p>Contains configurations details for response generation based on retrieved text chunks.</p>
   * @public
   */
  generationConfiguration?: GenerationConfiguration | undefined;

  /**
   * <p>Contains configuration details for the model to process the prompt prior to retrieval and response generation.</p>
   * @public
   */
  orchestrationConfiguration?: OrchestrationConfiguration | undefined;
}

/**
 * <p>The configuration details for retrieving information from a knowledge base.</p>
 * @public
 */
export interface RetrieveConfig {
  /**
   * <p>The unique identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>Contains configuration details for knowledge base retrieval.</p>
   * @public
   */
  knowledgeBaseRetrievalConfiguration: KnowledgeBaseRetrievalConfiguration | undefined;
}

/**
 * <p>Contains configuration details for a knowledge base retrieval and response generation.</p>
 * @public
 */
export interface RetrieveAndGenerateConfiguration {
  /**
   * <p>The type of resource that contains your data for retrieving information and generating responses.</p> <p>If you choose to use <code>EXTERNAL_SOURCES</code>, then currently only Claude 3 Sonnet models for knowledge bases are supported.</p>
   * @public
   */
  type: RetrieveAndGenerateType | undefined;

  /**
   * <p>Contains configuration details for the knowledge base retrieval and response generation.</p>
   * @public
   */
  knowledgeBaseConfiguration?: KnowledgeBaseRetrieveAndGenerateConfiguration | undefined;

  /**
   * <p>The configuration for the external source wrapper object in the <code>retrieveAndGenerate</code> function.</p>
   * @public
   */
  externalSourcesConfiguration?: ExternalSourcesRetrieveAndGenerateConfiguration | undefined;
}

/**
 * <p>The configuration details for retrieving information from a knowledge base and generating responses.</p>
 * @public
 */
export type KnowledgeBaseConfig =
  | KnowledgeBaseConfig.RetrieveAndGenerateConfigMember
  | KnowledgeBaseConfig.RetrieveConfigMember
  | KnowledgeBaseConfig.$UnknownMember;

/**
 * @public
 */
export namespace KnowledgeBaseConfig {
  /**
   * <p>Contains configuration details for retrieving information from a knowledge base.</p>
   * @public
   */
  export interface RetrieveConfigMember {
    retrieveConfig: RetrieveConfig;
    retrieveAndGenerateConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains configuration details for retrieving information from a knowledge base and generating responses.</p>
   * @public
   */
  export interface RetrieveAndGenerateConfigMember {
    retrieveConfig?: never;
    retrieveAndGenerateConfig: RetrieveAndGenerateConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    retrieveConfig?: never;
    retrieveAndGenerateConfig?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    retrieveConfig: (value: RetrieveConfig) => T;
    retrieveAndGenerateConfig: (value: RetrieveAndGenerateConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: KnowledgeBaseConfig, visitor: Visitor<T>): T => {
    if (value.retrieveConfig !== undefined) return visitor.retrieveConfig(value.retrieveConfig);
    if (value.retrieveAndGenerateConfig !== undefined)
      return visitor.retrieveAndGenerateConfig(value.retrieveAndGenerateConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains configuration details for retrieval of information and response generation.</p>
 * @public
 */
export type RAGConfig =
  | RAGConfig.KnowledgeBaseConfigMember
  | RAGConfig.PrecomputedRagSourceConfigMember
  | RAGConfig.$UnknownMember;

/**
 * @public
 */
export namespace RAGConfig {
  /**
   * <p>Contains configuration details for knowledge base retrieval and response generation.</p>
   * @public
   */
  export interface KnowledgeBaseConfigMember {
    knowledgeBaseConfig: KnowledgeBaseConfig;
    precomputedRagSourceConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains configuration details about the RAG source used to generate inference response data for a Knowledge Base evaluation job.</p>
   * @public
   */
  export interface PrecomputedRagSourceConfigMember {
    knowledgeBaseConfig?: never;
    precomputedRagSourceConfig: EvaluationPrecomputedRagSourceConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    knowledgeBaseConfig?: never;
    precomputedRagSourceConfig?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    knowledgeBaseConfig: (value: KnowledgeBaseConfig) => T;
    precomputedRagSourceConfig: (value: EvaluationPrecomputedRagSourceConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RAGConfig, visitor: Visitor<T>): T => {
    if (value.knowledgeBaseConfig !== undefined) return visitor.knowledgeBaseConfig(value.knowledgeBaseConfig);
    if (value.precomputedRagSourceConfig !== undefined)
      return visitor.precomputedRagSourceConfig(value.precomputedRagSourceConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The configuration details of the inference model for an evaluation job.</p> <p>For automated model evaluation jobs, only a single model is supported.</p> <p>For human-based model evaluation jobs, your annotator can compare the responses for up to two different models.</p>
 * @public
 */
export type EvaluationInferenceConfig =
  | EvaluationInferenceConfig.ModelsMember
  | EvaluationInferenceConfig.RagConfigsMember
  | EvaluationInferenceConfig.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationInferenceConfig {
  /**
   * <p>Specifies the inference models.</p>
   * @public
   */
  export interface ModelsMember {
    models: EvaluationModelConfig[];
    ragConfigs?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains the configuration details of the inference for a knowledge base evaluation job, including either the retrieval only configuration or the retrieval with response generation configuration.</p>
   * @public
   */
  export interface RagConfigsMember {
    models?: never;
    ragConfigs: RAGConfig[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    models?: never;
    ragConfigs?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    models: (value: EvaluationModelConfig[]) => T;
    ragConfigs: (value: RAGConfig[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EvaluationInferenceConfig, visitor: Visitor<T>): T => {
    if (value.models !== undefined) return visitor.models(value.models);
    if (value.ragConfigs !== undefined) return visitor.ragConfigs(value.ragConfigs);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateEvaluationJobRequest {
  /**
   * <p>A name for the evaluation job. Names must unique with your Amazon Web Services account, and your account's Amazon Web Services region.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>A description of the evaluation job.</p>
   * @public
   */
  jobDescription?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM service role that Amazon Bedrock can assume to perform tasks on your behalf. To learn more about the required permissions, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-security.html">Required permissions for model evaluations</a>.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Specify your customer managed encryption key Amazon Resource Name (ARN) that will be used to encrypt your evaluation job.</p>
   * @public
   */
  customerEncryptionKeyId?: string | undefined;

  /**
   * <p>Tags to attach to the model evaluation job.</p>
   * @public
   */
  jobTags?: Tag[] | undefined;

  /**
   * <p>Specifies whether the evaluation job is for evaluating a model or evaluating a knowledge base (retrieval and response generation).</p>
   * @public
   */
  applicationType?: ApplicationType | undefined;

  /**
   * <p>Contains the configuration details of either an automated or human-based evaluation job.</p>
   * @public
   */
  evaluationConfig: EvaluationConfig | undefined;

  /**
   * <p>Contains the configuration details of the inference model for the evaluation job.</p> <p>For model evaluation jobs, automated jobs support a single model or <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">inference profile</a>, and jobs that use human workers support two models or inference profiles.</p>
   * @public
   */
  inferenceConfig: EvaluationInferenceConfig | undefined;

  /**
   * <p>Contains the configuration details of the Amazon S3 bucket for storing the results of the evaluation job.</p>
   * @public
   */
  outputDataConfig: EvaluationOutputDataConfig | undefined;
}

/**
 * @public
 */
export interface GetEvaluationJobResponse {
  /**
   * <p>The name for the evaluation job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The current status of the evaluation job.</p>
   * @public
   */
  status: EvaluationJobStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the evaluation job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>The description of the evaluation job.</p>
   * @public
   */
  jobDescription?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role used in the evaluation job.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer managed encryption key specified when the evaluation job was created.</p>
   * @public
   */
  customerEncryptionKeyId?: string | undefined;

  /**
   * <p>Specifies whether the evaluation job is automated or human-based.</p>
   * @public
   */
  jobType: EvaluationJobType | undefined;

  /**
   * <p>Specifies whether the evaluation job is for evaluating a model or evaluating a knowledge base (retrieval and response generation).</p>
   * @public
   */
  applicationType?: ApplicationType | undefined;

  /**
   * <p>Contains the configuration details of either an automated or human-based evaluation job.</p>
   * @public
   */
  evaluationConfig: EvaluationConfig | undefined;

  /**
   * <p>Contains the configuration details of the inference model used for the evaluation job. </p>
   * @public
   */
  inferenceConfig: EvaluationInferenceConfig | undefined;

  /**
   * <p>Contains the configuration details of the Amazon S3 bucket for storing the results of the evaluation job.</p>
   * @public
   */
  outputDataConfig: EvaluationOutputDataConfig | undefined;

  /**
   * <p>The time the evaluation job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The time the evaluation job was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * <p>A list of strings that specify why the evaluation job failed to create.</p>
   * @public
   */
  failureMessages?: string[] | undefined;
}

/**
 * @internal
 */
export const CreateModelCustomizationJobRequestFilterSensitiveLog = (obj: CreateModelCustomizationJobRequest): any => ({
  ...obj,
  ...(obj.trainingDataConfig && { trainingDataConfig: TrainingDataConfigFilterSensitiveLog(obj.trainingDataConfig) }),
  ...(obj.customizationConfig && { customizationConfig: obj.customizationConfig }),
});

/**
 * @internal
 */
export const GetModelCustomizationJobResponseFilterSensitiveLog = (obj: GetModelCustomizationJobResponse): any => ({
  ...obj,
  ...(obj.trainingDataConfig && { trainingDataConfig: TrainingDataConfigFilterSensitiveLog(obj.trainingDataConfig) }),
  ...(obj.customizationConfig && { customizationConfig: obj.customizationConfig }),
});

/**
 * @internal
 */
export const RetrievalFilterFilterSensitiveLog = (obj: RetrievalFilter): any => {
  if (obj.equals !== undefined) return { equals: obj.equals };
  if (obj.notEquals !== undefined) return { notEquals: obj.notEquals };
  if (obj.greaterThan !== undefined) return { greaterThan: obj.greaterThan };
  if (obj.greaterThanOrEquals !== undefined) return { greaterThanOrEquals: obj.greaterThanOrEquals };
  if (obj.lessThan !== undefined) return { lessThan: obj.lessThan };
  if (obj.lessThanOrEquals !== undefined) return { lessThanOrEquals: obj.lessThanOrEquals };
  if (obj.in !== undefined) return { in: obj.in };
  if (obj.notIn !== undefined) return { notIn: obj.notIn };
  if (obj.startsWith !== undefined) return { startsWith: obj.startsWith };
  if (obj.listContains !== undefined) return { listContains: obj.listContains };
  if (obj.stringContains !== undefined) return { stringContains: obj.stringContains };
  if (obj.andAll !== undefined) return { andAll: SENSITIVE_STRING };
  if (obj.orAll !== undefined) return { orAll: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const KnowledgeBaseVectorSearchConfigurationFilterSensitiveLog = (
  obj: KnowledgeBaseVectorSearchConfiguration
): any => ({
  ...obj,
  ...(obj.filter && { filter: SENSITIVE_STRING }),
  ...(obj.implicitFilterConfiguration && {
    implicitFilterConfiguration: ImplicitFilterConfigurationFilterSensitiveLog(obj.implicitFilterConfiguration),
  }),
  ...(obj.rerankingConfiguration && {
    rerankingConfiguration: VectorSearchRerankingConfigurationFilterSensitiveLog(obj.rerankingConfiguration),
  }),
});

/**
 * @internal
 */
export const KnowledgeBaseRetrievalConfigurationFilterSensitiveLog = (
  obj: KnowledgeBaseRetrievalConfiguration
): any => ({
  ...obj,
  ...(obj.vectorSearchConfiguration && {
    vectorSearchConfiguration: KnowledgeBaseVectorSearchConfigurationFilterSensitiveLog(obj.vectorSearchConfiguration),
  }),
});

/**
 * @internal
 */
export const KnowledgeBaseRetrieveAndGenerateConfigurationFilterSensitiveLog = (
  obj: KnowledgeBaseRetrieveAndGenerateConfiguration
): any => ({
  ...obj,
  ...(obj.retrievalConfiguration && {
    retrievalConfiguration: KnowledgeBaseRetrievalConfigurationFilterSensitiveLog(obj.retrievalConfiguration),
  }),
  ...(obj.generationConfiguration && {
    generationConfiguration: GenerationConfigurationFilterSensitiveLog(obj.generationConfiguration),
  }),
});

/**
 * @internal
 */
export const RetrieveConfigFilterSensitiveLog = (obj: RetrieveConfig): any => ({
  ...obj,
  ...(obj.knowledgeBaseRetrievalConfiguration && {
    knowledgeBaseRetrievalConfiguration: KnowledgeBaseRetrievalConfigurationFilterSensitiveLog(
      obj.knowledgeBaseRetrievalConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const RetrieveAndGenerateConfigurationFilterSensitiveLog = (obj: RetrieveAndGenerateConfiguration): any => ({
  ...obj,
  ...(obj.knowledgeBaseConfiguration && {
    knowledgeBaseConfiguration: KnowledgeBaseRetrieveAndGenerateConfigurationFilterSensitiveLog(
      obj.knowledgeBaseConfiguration
    ),
  }),
  ...(obj.externalSourcesConfiguration && {
    externalSourcesConfiguration: ExternalSourcesRetrieveAndGenerateConfigurationFilterSensitiveLog(
      obj.externalSourcesConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const KnowledgeBaseConfigFilterSensitiveLog = (obj: KnowledgeBaseConfig): any => {
  if (obj.retrieveConfig !== undefined) return { retrieveConfig: RetrieveConfigFilterSensitiveLog(obj.retrieveConfig) };
  if (obj.retrieveAndGenerateConfig !== undefined)
    return {
      retrieveAndGenerateConfig: RetrieveAndGenerateConfigurationFilterSensitiveLog(obj.retrieveAndGenerateConfig),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const RAGConfigFilterSensitiveLog = (obj: RAGConfig): any => {
  if (obj.knowledgeBaseConfig !== undefined)
    return { knowledgeBaseConfig: KnowledgeBaseConfigFilterSensitiveLog(obj.knowledgeBaseConfig) };
  if (obj.precomputedRagSourceConfig !== undefined)
    return { precomputedRagSourceConfig: obj.precomputedRagSourceConfig };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const EvaluationInferenceConfigFilterSensitiveLog = (obj: EvaluationInferenceConfig): any => {
  if (obj.models !== undefined)
    return { models: obj.models.map((item) => EvaluationModelConfigFilterSensitiveLog(item)) };
  if (obj.ragConfigs !== undefined)
    return { ragConfigs: obj.ragConfigs.map((item) => RAGConfigFilterSensitiveLog(item)) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateEvaluationJobRequestFilterSensitiveLog = (obj: CreateEvaluationJobRequest): any => ({
  ...obj,
  ...(obj.jobDescription && { jobDescription: SENSITIVE_STRING }),
  ...(obj.evaluationConfig && { evaluationConfig: EvaluationConfigFilterSensitiveLog(obj.evaluationConfig) }),
  ...(obj.inferenceConfig && { inferenceConfig: EvaluationInferenceConfigFilterSensitiveLog(obj.inferenceConfig) }),
});

/**
 * @internal
 */
export const GetEvaluationJobResponseFilterSensitiveLog = (obj: GetEvaluationJobResponse): any => ({
  ...obj,
  ...(obj.jobDescription && { jobDescription: SENSITIVE_STRING }),
  ...(obj.evaluationConfig && { evaluationConfig: EvaluationConfigFilterSensitiveLog(obj.evaluationConfig) }),
  ...(obj.inferenceConfig && { inferenceConfig: EvaluationInferenceConfigFilterSensitiveLog(obj.inferenceConfig) }),
});
