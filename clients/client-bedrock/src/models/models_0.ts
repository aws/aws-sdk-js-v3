// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

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
 * <p>The configuration of a virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/usingVPC.html">Protect your data using Amazon Virtual Private Cloud and Amazon Web Services PrivateLink</a>.</p>
 * @public
 */
export interface VpcConfig {
  /**
   * <p>An array of IDs for each subnet in the VPC to use.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>An array of IDs for each security group in the VPC to use.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;
}

/**
 * <p>Specifies the configuration for a Amazon SageMaker endpoint.</p>
 * @public
 */
export interface SageMakerEndpoint {
  /**
   * <p>The number of Amazon EC2 compute instances to deploy for initial endpoint
   *             creation.</p>
   * @public
   */
  initialInstanceCount: number | undefined;

  /**
   * <p>The Amazon EC2 compute instance type to deploy for hosting the model.</p>
   * @public
   */
  instanceType: string | undefined;

  /**
   * <p>The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts
   *             and docker image for deployment on Amazon EC2 compute instances or for batch
   *             transform jobs.</p>
   * @public
   */
  executionRole: string | undefined;

  /**
   * <p>The Amazon Web Services KMS key that Amazon SageMaker uses to encrypt data on the storage volume
   *             attached to the Amazon EC2 compute instance that hosts the endpoint.</p>
   * @public
   */
  kmsEncryptionKey?: string | undefined;

  /**
   * <p>The VPC configuration for the endpoint.</p>
   * @public
   */
  vpc?: VpcConfig | undefined;
}

/**
 * <p>Specifies the configuration for the endpoint.</p>
 * @public
 */
export type EndpointConfig = EndpointConfig.SageMakerMember | EndpointConfig.$UnknownMember;

/**
 * @public
 */
export namespace EndpointConfig {
  /**
   * <p>The configuration specific to Amazon SageMaker for the endpoint.</p>
   * @public
   */
  export interface SageMakerMember {
    sageMaker: SageMakerEndpoint;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sageMaker?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    sageMaker: (value: SageMakerEndpoint) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EndpointConfig, visitor: Visitor<T>): T => {
    if (value.sageMaker !== undefined) return visitor.sageMaker(value.sageMaker);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

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
export interface CreateMarketplaceModelEndpointRequest {
  /**
   * <p>The ARN of the model from Amazon Bedrock Marketplace that you want to deploy to the
   *             endpoint.</p>
   * @public
   */
  modelSourceIdentifier: string | undefined;

  /**
   * <p>The configuration for the endpoint, including the number and type of instances to
   *             use.</p>
   * @public
   */
  endpointConfig: EndpointConfig | undefined;

  /**
   * <p>Indicates whether you accept the end-user license agreement (EULA) for the model. Set
   *             to <code>true</code> to accept the EULA.</p>
   * @public
   */
  acceptEula?: boolean | undefined;

  /**
   * <p>The name of the endpoint. This name must be unique within your Amazon Web Services
   *             account and region.</p>
   * @public
   */
  endpointName: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. This token is listed as not required because Amazon Web Services SDKs
   *             automatically generate it for you and set this parameter. If you're not using the
   *                 Amazon Web Services SDK or the CLI, you must provide this token or the
   *             action will fail.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>An array of key-value pairs to apply to the underlying Amazon SageMaker endpoint. You can use
   *             these tags to organize and identify your Amazon Web Services resources.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const Status = {
  INCOMPATIBLE_ENDPOINT: "INCOMPATIBLE_ENDPOINT",
  REGISTERED: "REGISTERED",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * <p>Contains details about an endpoint for a model from Amazon Bedrock Marketplace.</p>
 * @public
 */
export interface MarketplaceModelEndpoint {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   * @public
   */
  endpointArn: string | undefined;

  /**
   * <p>The ARN of the model from Amazon Bedrock Marketplace that is deployed on this endpoint.</p>
   * @public
   */
  modelSourceIdentifier: string | undefined;

  /**
   * <p>The overall status of the endpoint in Amazon Bedrock Marketplace (e.g., ACTIVE,
   *             INACTIVE).</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>Additional information about the overall status, if available.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The timestamp when the endpoint was registered.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the endpoint was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The configuration of the endpoint, including the number and type of instances
   *             used.</p>
   * @public
   */
  endpointConfig: EndpointConfig | undefined;

  /**
   * <p>The current status of the endpoint (e.g., Creating, InService, Updating,
   *             Failed).</p>
   * @public
   */
  endpointStatus: string | undefined;

  /**
   * <p>Additional information about the endpoint status, if available.</p>
   * @public
   */
  endpointStatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface CreateMarketplaceModelEndpointResponse {
  /**
   * <p>Details about the created endpoint.</p>
   * @public
   */
  marketplaceModelEndpoint: MarketplaceModelEndpoint | undefined;
}

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
 * <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
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
 * @public
 */
export interface DeleteMarketplaceModelEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint you want to delete.</p>
   * @public
   */
  endpointArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteMarketplaceModelEndpointResponse {}

/**
 * @public
 */
export interface DeregisterMarketplaceModelEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint you want to deregister.</p>
   * @public
   */
  endpointArn: string | undefined;
}

/**
 * @public
 */
export interface DeregisterMarketplaceModelEndpointResponse {}

/**
 * <p>Returned if the service cannot complete the request.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * @public
 */
export interface GetMarketplaceModelEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint you want to get information
   *             about.</p>
   * @public
   */
  endpointArn: string | undefined;
}

/**
 * @public
 */
export interface GetMarketplaceModelEndpointResponse {
  /**
   * <p>Details about the requested endpoint.</p>
   * @public
   */
  marketplaceModelEndpoint?: MarketplaceModelEndpoint | undefined;
}

/**
 * @public
 */
export interface ListMarketplaceModelEndpointsRequest {
  /**
   * <p>The maximum number of results to return in a single call. If more results are
   *             available, the operation returns a <code>NextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous
   *                 <code>ListMarketplaceModelEndpoints</code> call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>If specified, only endpoints for the given model source identifier are
   *             returned.</p>
   * @public
   */
  modelSourceEquals?: string | undefined;
}

/**
 * <p>Provides a summary of an endpoint for a model from Amazon Bedrock Marketplace.</p>
 * @public
 */
export interface MarketplaceModelEndpointSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint.</p>
   * @public
   */
  endpointArn: string | undefined;

  /**
   * <p>The ARN of the model from Amazon Bedrock Marketplace that is deployed on this endpoint.</p>
   * @public
   */
  modelSourceIdentifier: string | undefined;

  /**
   * <p>The overall status of the endpoint in Amazon Bedrock Marketplace.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>Additional information about the overall status, if available.</p>
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * <p>The timestamp when the endpoint was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the endpoint was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListMarketplaceModelEndpointsResponse {
  /**
   * <p>An array of endpoint summaries.</p>
   * @public
   */
  marketplaceModelEndpoints?: MarketplaceModelEndpointSummary[] | undefined;

  /**
   * <p>The token for the next set of results. Use this token to get the next set of
   *             results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterMarketplaceModelEndpointRequest {
  /**
   * <p>The ARN of the Amazon SageMaker endpoint you want to register with Amazon Bedrock Marketplace.</p>
   * @public
   */
  endpointIdentifier: string | undefined;

  /**
   * <p>The ARN of the model from Amazon Bedrock Marketplace that is deployed on the endpoint.</p>
   * @public
   */
  modelSourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RegisterMarketplaceModelEndpointResponse {
  /**
   * <p>Details about the registered endpoint.</p>
   * @public
   */
  marketplaceModelEndpoint: MarketplaceModelEndpoint | undefined;
}

/**
 * @public
 */
export interface UpdateMarketplaceModelEndpointRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the endpoint you want to update.</p>
   * @public
   */
  endpointArn: string | undefined;

  /**
   * <p>The new configuration for the endpoint, including the number and type of instances to
   *             use.</p>
   * @public
   */
  endpointConfig: EndpointConfig | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. This token is listed as not required because Amazon Web Services SDKs
   *             automatically generate it for you and set this parameter. If you're not using the
   *                 Amazon Web Services SDK or the CLI, you must provide this token or the
   *             action will fail.</p>
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMarketplaceModelEndpointResponse {
  /**
   * <p>Details about the updated endpoint.</p>
   * @public
   */
  marketplaceModelEndpoint: MarketplaceModelEndpoint | undefined;
}

/**
 * @public
 */
export interface BatchDeleteEvaluationJobRequest {
  /**
   * <p>A list of one or more evaluation job Amazon Resource Names (ARNs) you want to delete.</p>
   * @public
   */
  jobIdentifiers: string[] | undefined;
}

/**
 * <p>A JSON array that provides the status of the evaluation jobs being deleted.</p>
 * @public
 */
export interface BatchDeleteEvaluationJobError {
  /**
   * <p>The ARN of the evaluation job being deleted.</p>
   * @public
   */
  jobIdentifier: string | undefined;

  /**
   * <p>A HTTP status code of the evaluation job being deleted.</p>
   * @public
   */
  code: string | undefined;

  /**
   * <p>A status message about the evaluation job deletion.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EvaluationJobStatus = {
  COMPLETED: "Completed",
  DELETING: "Deleting",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type EvaluationJobStatus = (typeof EvaluationJobStatus)[keyof typeof EvaluationJobStatus];

/**
 * <p>An evaluation job for deletion, and it’s current status.</p>
 * @public
 */
export interface BatchDeleteEvaluationJobItem {
  /**
   * <p>The Amazon Resource Name (ARN) of the evaluation job for deletion.</p>
   * @public
   */
  jobIdentifier: string | undefined;

  /**
   * <p>The status of the evaluation job for deletion.</p>
   * @public
   */
  jobStatus: EvaluationJobStatus | undefined;
}

/**
 * @public
 */
export interface BatchDeleteEvaluationJobResponse {
  /**
   * <p>A JSON object containing the HTTP status codes and the ARNs of evaluation jobs that failed to be deleted.</p>
   * @public
   */
  errors: BatchDeleteEvaluationJobError[] | undefined;

  /**
   * <p>The list of evaluation jobs for deletion.</p>
   * @public
   */
  evaluationJobs: BatchDeleteEvaluationJobItem[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ApplicationType = {
  MODEL_EVALUATION: "ModelEvaluation",
  RAG_EVALUATION: "RagEvaluation",
} as const;

/**
 * @public
 */
export type ApplicationType = (typeof ApplicationType)[keyof typeof ApplicationType];

/**
 * <p>The location in Amazon S3 where your prompt dataset is stored.</p>
 * @public
 */
export type EvaluationDatasetLocation =
  | EvaluationDatasetLocation.S3UriMember
  | EvaluationDatasetLocation.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationDatasetLocation {
  /**
   * <p>The S3 URI of the S3 bucket specified in the job.</p>
   * @public
   */
  export interface S3UriMember {
    s3Uri: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3Uri?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3Uri: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EvaluationDatasetLocation, visitor: Visitor<T>): T => {
    if (value.s3Uri !== undefined) return visitor.s3Uri(value.s3Uri);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Used to specify the name of a built-in prompt dataset and optionally, the Amazon S3 bucket where a custom prompt dataset is saved.</p>
 * @public
 */
export interface EvaluationDataset {
  /**
   * <p>Used to specify supported built-in prompt datasets. Valid values are <code>Builtin.Bold</code>, <code>Builtin.BoolQ</code>, <code>Builtin.NaturalQuestions</code>, <code>Builtin.Gigaword</code>, <code>Builtin.RealToxicityPrompts</code>, <code>Builtin.TriviaQA</code>, <code>Builtin.T-Rex</code>, <code>Builtin.WomensEcommerceClothingReviews</code> and <code>Builtin.Wikitext2</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>For custom prompt datasets, you must specify the location in Amazon S3 where the prompt dataset is saved.</p>
   * @public
   */
  datasetLocation?: EvaluationDatasetLocation | undefined;
}

/**
 * @public
 * @enum
 */
export const EvaluationTaskType = {
  CLASSIFICATION: "Classification",
  CUSTOM: "Custom",
  GENERATION: "Generation",
  QUESTION_AND_ANSWER: "QuestionAndAnswer",
  SUMMARIZATION: "Summarization",
} as const;

/**
 * @public
 */
export type EvaluationTaskType = (typeof EvaluationTaskType)[keyof typeof EvaluationTaskType];

/**
 * <p>Defines the prompt datasets, built-in metric names and custom metric names, and the task type.</p>
 * @public
 */
export interface EvaluationDatasetMetricConfig {
  /**
   * <p>The the type of task you want to evaluate for your evaluation job. This applies only
   *          to model evaluation jobs and is ignored for knowledge base evaluation jobs.</p>
   * @public
   */
  taskType: EvaluationTaskType | undefined;

  /**
   * <p>Specifies the prompt dataset.</p>
   * @public
   */
  dataset: EvaluationDataset | undefined;

  /**
   * <p>The names of the metrics you want to use for your evaluation job.</p>
   *          <p>For knowledge base evaluation jobs that evaluate retrieval only, valid values are
   *          "<code>Builtin.ContextRelevance</code>", "<code>Builtin.ContextConverage</code>".</p>
   *          <p>For knowledge base evaluation jobs that evaluate retrieval with response generation,
   *          valid values are  "<code>Builtin.Correctness</code>", "<code>Builtin.Completeness</code>",
   *          "<code>Builtin.Helpfulness</code>", "<code>Builtin.LogicalCoherence</code>",
   *          "<code>Builtin.Faithfulness</code>", "<code>Builtin.Harmfulness</code>",
   *          "<code>Builtin.Stereotyping</code>", "<code>Builtin.Refusal</code>".</p>
   *          <p>For automated model evaluation jobs, valid values are "<code>Builtin.Accuracy</code>", "<code>Builtin.Robustness</code>", and "<code>Builtin.Toxicity</code>". In model evaluation jobs that use a LLM as judge you can specify "<code>Builtin.Correctness</code>", "<code>Builtin.Completeness"</code>, "<code>Builtin.Faithfulness"</code>, "<code>Builtin.Helpfulness</code>", "<code>Builtin.Coherence</code>", "<code>Builtin.Relevance</code>", "<code>Builtin.FollowingInstructions</code>", "<code>Builtin.ProfessionalStyleAndTone</code>", You can also specify the following responsible AI related metrics only for model evaluation job that use a LLM as judge "<code>Builtin.Harmfulness</code>", "<code>Builtin.Stereotyping</code>", and "<code>Builtin.Refusal</code>".</p>
   *          <p>For human-based model evaluation jobs, the list of strings must match the
   *          <code>name</code> parameter specified in <code>HumanEvaluationCustomMetric</code>.</p>
   * @public
   */
  metricNames: string[] | undefined;
}

/**
 * <p>The evaluator model used in knowledge base evaluation job or in model evaluation job that use a model as judge. This model computes all evaluation related metrics.</p>
 * @public
 */
export interface BedrockEvaluatorModel {
  /**
   * <p>The Amazon Resource Name (ARN) of the evaluator model used used in knowledge base evaluation job or in model evaluation job that use a model as judge.</p>
   * @public
   */
  modelIdentifier: string | undefined;
}

/**
 * <p>Specifies the model configuration for the evaluator model. <code>EvaluatorModelConfig</code> is required for evaluation jobs that use a knowledge base or in model evaluation job that use a model as judge. This model computes all evaluation related metrics.</p>
 * @public
 */
export type EvaluatorModelConfig =
  | EvaluatorModelConfig.BedrockEvaluatorModelsMember
  | EvaluatorModelConfig.$UnknownMember;

/**
 * @public
 */
export namespace EvaluatorModelConfig {
  /**
   * <p>The evaluator model used in knowledge base evaluation job or in model evaluation job that use a model as judge. This model computes all evaluation related metrics.</p>
   * @public
   */
  export interface BedrockEvaluatorModelsMember {
    bedrockEvaluatorModels: BedrockEvaluatorModel[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    bedrockEvaluatorModels?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    bedrockEvaluatorModels: (value: BedrockEvaluatorModel[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EvaluatorModelConfig, visitor: Visitor<T>): T => {
    if (value.bedrockEvaluatorModels !== undefined) return visitor.bedrockEvaluatorModels(value.bedrockEvaluatorModels);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The configuration details of an automated evaluation job. The <code>EvaluationDatasetMetricConfig</code> object
 *          is used to specify the prompt datasets, task type, and metric names.</p>
 * @public
 */
export interface AutomatedEvaluationConfig {
  /**
   * <p>Configuration details of the prompt datasets and metrics you want to use for your evaluation job.</p>
   * @public
   */
  datasetMetricConfigs: EvaluationDatasetMetricConfig[] | undefined;

  /**
   * <p>Contains the evaluator model configuration details. <code>EvaluatorModelConfig</code> is required for evaluation jobs that use a knowledge base or in model evaluation job that use a model as judge. This model computes all evaluation related metrics.</p>
   * @public
   */
  evaluatorModelConfig?: EvaluatorModelConfig | undefined;
}

/**
 * <p>In a model evaluation job that uses human workers you must
 *          define the name of the metric, and how you want that metric rated
 *          <code>ratingMethod</code>, and an optional description of the metric.</p>
 * @public
 */
export interface HumanEvaluationCustomMetric {
  /**
   * <p>The name of the metric. Your human evaluators will see this name in the evaluation UI.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An optional description of the metric. Use this parameter to provide more details about the metric.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Choose how you want your human workers to evaluation your model. Valid values for rating methods are <code>ThumbsUpDown</code>, <code>IndividualLikertScale</code>,<code>ComparisonLikertScale</code>, <code>ComparisonChoice</code>, and <code>ComparisonRank</code>
   *          </p>
   * @public
   */
  ratingMethod: string | undefined;
}

/**
 * <p>Contains <code>SageMakerFlowDefinition</code> object. The object is used to specify the prompt dataset, task type, rating method and metric names.</p>
 * @public
 */
export interface HumanWorkflowConfig {
  /**
   * <p>The Amazon Resource Number (ARN) for the flow definition</p>
   * @public
   */
  flowDefinitionArn: string | undefined;

  /**
   * <p>Instructions for the flow definition</p>
   * @public
   */
  instructions?: string | undefined;
}

/**
 * <p>Specifies the custom metrics, how tasks will be rated, the flow definition ARN, and your custom prompt datasets. Model evaluation jobs use human workers <i>only</i> support the use of custom prompt datasets. To learn more about custom prompt datasets and the required format, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-prompt-datasets-custom.html">Custom prompt datasets</a>.</p>
 *          <p>When you create custom metrics in <code>HumanEvaluationCustomMetric</code> you must specify the metric's <code>name</code>. The list of <code>names</code> specified in the <code>HumanEvaluationCustomMetric</code> array, must match the <code>metricNames</code> array of strings specified in <code>EvaluationDatasetMetricConfig</code>. For example, if in the <code>HumanEvaluationCustomMetric</code> array your specified the names <code>"accuracy", "toxicity", "readability"</code> as custom metrics <i>then</i> the <code>metricNames</code> array would need to look like the following <code>["accuracy", "toxicity", "readability"]</code> in <code>EvaluationDatasetMetricConfig</code>.</p>
 * @public
 */
export interface HumanEvaluationConfig {
  /**
   * <p>The parameters of the human workflow.</p>
   * @public
   */
  humanWorkflowConfig?: HumanWorkflowConfig | undefined;

  /**
   * <p>A <code>HumanEvaluationCustomMetric</code> object. It contains the names the metrics, how the metrics are to be evaluated, an optional description.</p>
   * @public
   */
  customMetrics?: HumanEvaluationCustomMetric[] | undefined;

  /**
   * <p>Use to specify the metrics, task, and prompt dataset to be used in your model evaluation job.</p>
   * @public
   */
  datasetMetricConfigs: EvaluationDatasetMetricConfig[] | undefined;
}

/**
 * <p>The configuration details of either an automated or human-based evaluation job.</p>
 * @public
 */
export type EvaluationConfig =
  | EvaluationConfig.AutomatedMember
  | EvaluationConfig.HumanMember
  | EvaluationConfig.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationConfig {
  /**
   * <p>Contains the configuration details of an automated evaluation job that computes metrics.</p>
   * @public
   */
  export interface AutomatedMember {
    automated: AutomatedEvaluationConfig;
    human?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains the configuration details of an evaluation job that uses human workers.</p>
   * @public
   */
  export interface HumanMember {
    automated?: never;
    human: HumanEvaluationConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    automated?: never;
    human?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    automated: (value: AutomatedEvaluationConfig) => T;
    human: (value: HumanEvaluationConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EvaluationConfig, visitor: Visitor<T>): T => {
    if (value.automated !== undefined) return visitor.automated(value.automated);
    if (value.human !== undefined) return visitor.human(value.human);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const PerformanceConfigLatency = {
  OPTIMIZED: "optimized",
  STANDARD: "standard",
} as const;

/**
 * @public
 */
export type PerformanceConfigLatency = (typeof PerformanceConfigLatency)[keyof typeof PerformanceConfigLatency];

/**
 * <p>Contains performance settings for a model.</p>
 * @public
 */
export interface PerformanceConfiguration {
  /**
   * <p>Specifies whether to use the latency-optimized or standard version of a model or inference profile.</p>
   * @public
   */
  latency?: PerformanceConfigLatency | undefined;
}

/**
 * <p>Contains the ARN of the Amazon Bedrock model or <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">inference profile</a> specified in your evaluation job. Each Amazon Bedrock model supports different <code>inferenceParams</code>. To learn more about supported inference parameters for Amazon Bedrock models, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters for foundation models</a>.</p>
 *          <p>The <code>inferenceParams</code> are specified using JSON. To successfully insert JSON as string make sure that all quotations are properly escaped. For example, <code>"temperature":"0.25"</code> key value pair would need to be formatted as <code>\"temperature\":\"0.25\"</code> to successfully accepted in the request.</p>
 * @public
 */
export interface EvaluationBedrockModel {
  /**
   * <p>The ARN of the Amazon Bedrock model or inference profile specified.</p>
   * @public
   */
  modelIdentifier: string | undefined;

  /**
   * <p>Each Amazon Bedrock support different inference parameters that change how the model behaves during inference.</p>
   * @public
   */
  inferenceParams?: string | undefined;

  /**
   * <p>Specifies performance settings for the model or inference profile.</p>
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;
}

/**
 * <p>A summary of a model used for a model evaluation job where you provide your own inference response data.</p>
 * @public
 */
export interface EvaluationPrecomputedInferenceSource {
  /**
   * <p>A label that identifies a model used in a model evaluation job where you provide your own inference response data.</p>
   * @public
   */
  inferenceSourceIdentifier: string | undefined;
}

/**
 * <p>Defines the models used in the model evaluation job.</p>
 * @public
 */
export type EvaluationModelConfig =
  | EvaluationModelConfig.BedrockModelMember
  | EvaluationModelConfig.PrecomputedInferenceSourceMember
  | EvaluationModelConfig.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationModelConfig {
  /**
   * <p>Defines the Amazon Bedrock model or inference profile and inference parameters you want used.</p>
   * @public
   */
  export interface BedrockModelMember {
    bedrockModel: EvaluationBedrockModel;
    precomputedInferenceSource?: never;
    $unknown?: never;
  }

  /**
   * <p>Defines the model used to generate inference response data for a model evaluation job where you provide your own inference response data.</p>
   * @public
   */
  export interface PrecomputedInferenceSourceMember {
    bedrockModel?: never;
    precomputedInferenceSource: EvaluationPrecomputedInferenceSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    bedrockModel?: never;
    precomputedInferenceSource?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    bedrockModel: (value: EvaluationBedrockModel) => T;
    precomputedInferenceSource: (value: EvaluationPrecomputedInferenceSource) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EvaluationModelConfig, visitor: Visitor<T>): T => {
    if (value.bedrockModel !== undefined) return visitor.bedrockModel(value.bedrockModel);
    if (value.precomputedInferenceSource !== undefined)
      return visitor.precomputedInferenceSource(value.precomputedInferenceSource);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The configuration details for the guardrail.</p>
 * @public
 */
export interface GuardrailConfiguration {
  /**
   * <p>The unique identifier for the guardrail.</p>
   * @public
   */
  guardrailId: string | undefined;

  /**
   * <p>The version of the guardrail.</p>
   * @public
   */
  guardrailVersion: string | undefined;
}

/**
 * <p>The configuration details for text generation using a language model via the
 *             <code>RetrieveAndGenerate</code> function.</p>
 * @public
 */
export interface TextInferenceConfig {
  /**
   * <p>Controls the random-ness of text generated by the language model, influencing how
   *             much the model sticks to the most predictable next words versus exploring more
   *             surprising options. A lower temperature value (e.g. 0.2 or 0.3) makes model outputs
   *             more deterministic or predictable, while a higher temperature (e.g. 0.8 or 0.9) makes
   *             the outputs more creative or unpredictable.</p>
   * @public
   */
  temperature?: number | undefined;

  /**
   * <p>A probability distribution threshold which controls what the model considers for
   *             the set of possible next tokens. The model will only consider the top p% of the
   *             probability distribution when generating the next token.</p>
   * @public
   */
  topP?: number | undefined;

  /**
   * <p>The maximum number of tokens to generate in the output text. Do not use the minimum of 0
   *             or the maximum of 65536. The limit values described here are arbitrary values, for actual
   *             values consult the limits defined by your specific model.</p>
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * <p>A list of sequences of characters that, if generated, will cause the model to stop
   *             generating further tokens. Do not use a minimum length of 1 or a maximum length of 1000.
   *             The limit values described here are arbitrary values, for actual values consult the
   *             limits defined by your specific model.</p>
   * @public
   */
  stopSequences?: string[] | undefined;
}

/**
 * <p>Contains configuration details of the inference for knowledge base retrieval and response generation.</p>
 * @public
 */
export interface KbInferenceConfig {
  /**
   * <p>Contains configuration details for text generation using a language model via the
   *             <code>RetrieveAndGenerate</code> function.</p>
   * @public
   */
  textInferenceConfig?: TextInferenceConfig | undefined;
}

/**
 * <p>The template for the prompt that's sent to the model for response generation.</p>
 * @public
 */
export interface PromptTemplate {
  /**
   * <p>The template for the prompt that's sent to the model for response generation. You can include
   *             prompt placeholders, which become replaced before the prompt is sent to the model to provide
   *             instructions and context to the model. In addition, you can include XML tags to delineate
   *             meaningful sections of the prompt template.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Knowledge base prompt template</a> and
   *             <a href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags">Use XML tags with Anthropic Claude models</a>.</p>
   * @public
   */
  textPromptTemplate?: string | undefined;
}

/**
 * <p>The response generation configuration of the external source wrapper object.</p>
 * @public
 */
export interface ExternalSourcesGenerationConfiguration {
  /**
   * <p>Contains the template for the prompt for the external source wrapper object.</p>
   * @public
   */
  promptTemplate?: PromptTemplate | undefined;

  /**
   * <p>Configuration details for the guardrail.</p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * <p>Configuration details for inference when using <code>RetrieveAndGenerate</code> to generate
   *             responses while using an external source.</p>
   * @public
   */
  kbInferenceConfig?: KbInferenceConfig | undefined;

  /**
   * <p>Additional model parameters and their corresponding values not included in the
   *             text inference configuration for an external source. Takes in custom model parameters
   *             specific to the language model being used.</p>
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;
}

/**
 * <p>Contains the document contained in the wrapper object, along with its attributes/fields.</p>
 * @public
 */
export interface ByteContentDoc {
  /**
   * <p>The file name of the document contained in the wrapper object.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The MIME type of the document contained in the wrapper object.</p>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The byte value of the file to upload, encoded as a Base-64 string.</p>
   * @public
   */
  data: Uint8Array | undefined;
}

/**
 * <p>The unique wrapper object of the document from the S3 location.</p>
 * @public
 */
export interface S3ObjectDoc {
  /**
   * <p>The S3 URI location for the wrapper object of the document.</p>
   * @public
   */
  uri: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExternalSourceType = {
  BYTE_CONTENT: "BYTE_CONTENT",
  S3: "S3",
} as const;

/**
 * @public
 */
export type ExternalSourceType = (typeof ExternalSourceType)[keyof typeof ExternalSourceType];

/**
 * <p>The unique external source of the content contained in the wrapper object.</p>
 * @public
 */
export interface ExternalSource {
  /**
   * <p>The source type of the external source wrapper object.</p>
   * @public
   */
  sourceType: ExternalSourceType | undefined;

  /**
   * <p>The S3 location of the external source wrapper object.</p>
   * @public
   */
  s3Location?: S3ObjectDoc | undefined;

  /**
   * <p>The identifier, content type, and data of the external source wrapper object.</p>
   * @public
   */
  byteContent?: ByteContentDoc | undefined;
}

/**
 * <p>The configuration of the external source wrapper object in the <code>retrieveAndGenerate</code>
 *             function.</p>
 * @public
 */
export interface ExternalSourcesRetrieveAndGenerateConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the foundation model or <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">inference profile</a>
   *             used to generate responses.
   *         </p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>The document for the external source wrapper object in the <code>retrieveAndGenerate</code> function.</p>
   * @public
   */
  sources: ExternalSource[] | undefined;

  /**
   * <p>Contains configurations details for response generation based on retrieved text chunks.</p>
   * @public
   */
  generationConfiguration?: ExternalSourcesGenerationConfiguration | undefined;
}

/**
 * <p>The configuration details for response generation based on retrieved text chunks.</p>
 * @public
 */
export interface GenerationConfiguration {
  /**
   * <p>Contains the template for the prompt that's sent to the model for response generation.</p>
   * @public
   */
  promptTemplate?: PromptTemplate | undefined;

  /**
   * <p>Contains configuration details for the guardrail.</p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * <p>Contains configuration details for inference for knowledge base retrieval and response generation.</p>
   * @public
   */
  kbInferenceConfig?: KbInferenceConfig | undefined;

  /**
   * <p>Additional model parameters and corresponding values not included in the
   *             <code>textInferenceConfig</code> structure for a knowledge base. This allows
   *             you to provide custom model parameters specific to the language model being
   *             used.</p>
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryTransformationType = {
  QUERY_DECOMPOSITION: "QUERY_DECOMPOSITION",
} as const;

/**
 * @public
 */
export type QueryTransformationType = (typeof QueryTransformationType)[keyof typeof QueryTransformationType];

/**
 * <p>The configuration details for transforming the prompt.</p>
 * @public
 */
export interface QueryTransformationConfiguration {
  /**
   * <p>The type of transformation to apply to the prompt.</p>
   * @public
   */
  type: QueryTransformationType | undefined;
}

/**
 * <p>The configuration details for the model to process the prompt prior to retrieval and response generation.</p>
 * @public
 */
export interface OrchestrationConfiguration {
  /**
   * <p>Contains configuration details for transforming the prompt.</p>
   * @public
   */
  queryTransformationConfiguration: QueryTransformationConfiguration | undefined;
}

/**
 * <p>Specifies the name of the metadata attribute/field to apply filters.
 *             You must match the name of the attribute/field in your data source/document metadata.</p>
 * @public
 */
export interface FilterAttribute {
  /**
   * <p>The name of metadata attribute/field, which must match the name in your
   *             data source/document metadata.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of the metadata attribute/field.</p>
   * @public
   */
  value: __DocumentType | undefined;
}

/**
 * @public
 * @enum
 */
export const SearchType = {
  HYBRID: "HYBRID",
  SEMANTIC: "SEMANTIC",
} as const;

/**
 * @public
 */
export type SearchType = (typeof SearchType)[keyof typeof SearchType];

/**
 * @public
 * @enum
 */
export const RetrieveAndGenerateType = {
  EXTERNAL_SOURCES: "EXTERNAL_SOURCES",
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
} as const;

/**
 * @public
 */
export type RetrieveAndGenerateType = (typeof RetrieveAndGenerateType)[keyof typeof RetrieveAndGenerateType];

/**
 * <p>A summary of a RAG source used for a retrieve-and-generate Knowledge Base evaluation job where you provide your own inference response data.</p>
 * @public
 */
export interface EvaluationPrecomputedRetrieveAndGenerateSourceConfig {
  /**
   * <p>A label that identifies the RAG source used for a retrieve-and-generate Knowledge Base evaluation job where you provide your own inference response data.</p>
   * @public
   */
  ragSourceIdentifier: string | undefined;
}

/**
 * <p>A summary of a RAG source used for a retrieve-only Knowledge Base evaluation job where you provide your own inference response data.</p>
 * @public
 */
export interface EvaluationPrecomputedRetrieveSourceConfig {
  /**
   * <p>A label that identifies the RAG source used for a retrieve-only Knowledge Base evaluation job where you provide your own inference response data.</p>
   * @public
   */
  ragSourceIdentifier: string | undefined;
}

/**
 * <p>A summary of a RAG source used for a Knowledge Base evaluation job where you provide your own inference response data.</p>
 * @public
 */
export type EvaluationPrecomputedRagSourceConfig =
  | EvaluationPrecomputedRagSourceConfig.RetrieveAndGenerateSourceConfigMember
  | EvaluationPrecomputedRagSourceConfig.RetrieveSourceConfigMember
  | EvaluationPrecomputedRagSourceConfig.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationPrecomputedRagSourceConfig {
  /**
   * <p>A summary of a RAG source used for a retrieve-only Knowledge Base evaluation job where you provide your own inference response data.</p>
   * @public
   */
  export interface RetrieveSourceConfigMember {
    retrieveSourceConfig: EvaluationPrecomputedRetrieveSourceConfig;
    retrieveAndGenerateSourceConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>A summary of a RAG source used for a retrieve-and-generate Knowledge Base evaluation job where you provide your own inference response data.</p>
   * @public
   */
  export interface RetrieveAndGenerateSourceConfigMember {
    retrieveSourceConfig?: never;
    retrieveAndGenerateSourceConfig: EvaluationPrecomputedRetrieveAndGenerateSourceConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    retrieveSourceConfig?: never;
    retrieveAndGenerateSourceConfig?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    retrieveSourceConfig: (value: EvaluationPrecomputedRetrieveSourceConfig) => T;
    retrieveAndGenerateSourceConfig: (value: EvaluationPrecomputedRetrieveAndGenerateSourceConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EvaluationPrecomputedRagSourceConfig, visitor: Visitor<T>): T => {
    if (value.retrieveSourceConfig !== undefined) return visitor.retrieveSourceConfig(value.retrieveSourceConfig);
    if (value.retrieveAndGenerateSourceConfig !== undefined)
      return visitor.retrieveAndGenerateSourceConfig(value.retrieveAndGenerateSourceConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The  Amazon S3 location where the results of your evaluation job are saved.</p>
 * @public
 */
export interface EvaluationOutputDataConfig {
  /**
   * <p>The Amazon S3 URI where the results of the evaluation job are saved.</p>
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * @public
 */
export interface CreateEvaluationJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the evaluation job.</p>
   * @public
   */
  jobArn: string | undefined;
}

/**
 * @public
 */
export interface GetEvaluationJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the evaluation job you want get information on.</p>
   * @public
   */
  jobIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EvaluationJobType = {
  AUTOMATED: "Automated",
  HUMAN: "Human",
} as const;

/**
 * @public
 */
export type EvaluationJobType = (typeof EvaluationJobType)[keyof typeof EvaluationJobType];

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
export interface ListEvaluationJobsRequest {
  /**
   * <p>A filter to only list evaluation jobs created after a specified time.</p>
   * @public
   */
  creationTimeAfter?: Date | undefined;

  /**
   * <p>A filter to only list evaluation jobs created before a specified time.</p>
   * @public
   */
  creationTimeBefore?: Date | undefined;

  /**
   * <p>A filter to only list evaluation jobs that are of a certain status.</p>
   * @public
   */
  statusEquals?: EvaluationJobStatus | undefined;

  /**
   * <p>A filter to only list evaluation jobs that are either model evaluations or knowledge base evaluations.</p>
   * @public
   */
  applicationTypeEquals?: ApplicationType | undefined;

  /**
   * <p>A filter to only list evaluation jobs that contain a specified string in the job name.</p>
   * @public
   */
  nameContains?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Continuation token from the previous response, for Amazon Bedrock to list the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Specifies a creation time to sort the list of evaluation jobs by when they were created.</p>
   * @public
   */
  sortBy?: SortJobsBy | undefined;

  /**
   * <p>Specifies whether to sort the list of evaluation jobs by either ascending or descending order.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * <p>A summary of the models used in an Amazon Bedrock model evaluation job. These resources can be models in Amazon Bedrock
 *          or models outside of Amazon Bedrock that you use to generate your own inference response data.</p>
 * @public
 */
export interface EvaluationModelConfigSummary {
  /**
   * <p>The Amazon Resource Names (ARNs) of the models used for the evaluation job.</p>
   * @public
   */
  bedrockModelIdentifiers?: string[] | undefined;

  /**
   * <p>A label that identifies the models used for a model evaluation job where you provide your own inference response data.</p>
   * @public
   */
  precomputedInferenceSourceIdentifiers?: string[] | undefined;
}

/**
 * <p>A summary of the RAG resources used in an Amazon Bedrock Knowledge Base evaluation job. These resources can be Knowledge Bases in Amazon Bedrock
 *          or RAG sources outside of Amazon Bedrock that you use to generate your own inference response data.</p>
 * @public
 */
export interface EvaluationRagConfigSummary {
  /**
   * <p>The Amazon Resource Names (ARNs) of the Knowledge Base resources used for a Knowledge Base evaluation job where Amazon Bedrock invokes the Knowledge Base for you.</p>
   * @public
   */
  bedrockKnowledgeBaseIdentifiers?: string[] | undefined;

  /**
   * <p>A label that identifies the RAG sources used for a Knowledge Base evaluation job where you provide your own inference response data.</p>
   * @public
   */
  precomputedRagSourceIdentifiers?: string[] | undefined;
}

/**
 * <p>Identifies the models, Knowledge Bases, or other RAG sources evaluated in a model or Knowledge Base evaluation job.</p>
 * @public
 */
export interface EvaluationInferenceConfigSummary {
  /**
   * <p>A summary of the models used in an Amazon Bedrock model evaluation job. These resources can be models in Amazon Bedrock
   *          or models outside of Amazon Bedrock that you use to generate your own inference response data.</p>
   * @public
   */
  modelConfigSummary?: EvaluationModelConfigSummary | undefined;

  /**
   * <p>A summary of the RAG resources used in an Amazon Bedrock Knowledge Base evaluation job. These resources can be Knowledge Bases in
   *          Amazon Bedrock or RAG sources outside of Amazon Bedrock that you use to generate your own inference response data.</p>
   * @public
   */
  ragConfigSummary?: EvaluationRagConfigSummary | undefined;
}

/**
 * <p>Summary information of an evaluation job.</p>
 * @public
 */
export interface EvaluationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the evaluation job.</p>
   * @public
   */
  jobArn: string | undefined;

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
   * <p>The time the evaluation job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>Specifies whether the evaluation job is automated or human-based.</p>
   * @public
   */
  jobType: EvaluationJobType | undefined;

  /**
   * <p>The type of task for model evaluation.</p>
   * @public
   */
  evaluationTaskTypes: EvaluationTaskType[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the model(s) used for the evaluation job.</p>
   *
   * @deprecated
   * @public
   */
  modelIdentifiers?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the knowledge base resources used for a knowledge base evaluation job.</p>
   *
   * @deprecated
   * @public
   */
  ragIdentifiers?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the models used to compute the metrics for a knowledge base evaluation job.</p>
   * @public
   */
  evaluatorModelIdentifiers?: string[] | undefined;

  /**
   * <p>Identifies the models, Knowledge Bases, or other RAG sources evaluated in a model or Knowledge Base evaluation job.</p>
   * @public
   */
  inferenceConfigSummary?: EvaluationInferenceConfigSummary | undefined;

  /**
   * <p>Specifies whether the evaluation job is for evaluating a model or evaluating a knowledge base (retrieval and response generation).</p>
   * @public
   */
  applicationType?: ApplicationType | undefined;
}

/**
 * @public
 */
export interface ListEvaluationJobsResponse {
  /**
   * <p>Continuation token from the previous response, for Amazon Bedrock to list the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of summaries of the evaluation jobs.</p>
   * @public
   */
  jobSummaries?: EvaluationSummary[] | undefined;
}

/**
 * @public
 */
export interface StopEvaluationJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the evaluation job you want to stop.</p>
   * @public
   */
  jobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopEvaluationJobResponse {}

/**
 * @public
 * @enum
 */
export const GuardrailContentFilterAction = {
  BLOCK: "BLOCK",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GuardrailContentFilterAction =
  (typeof GuardrailContentFilterAction)[keyof typeof GuardrailContentFilterAction];

/**
 * @public
 * @enum
 */
export const GuardrailModality = {
  IMAGE: "IMAGE",
  TEXT: "TEXT",
} as const;

/**
 * @public
 */
export type GuardrailModality = (typeof GuardrailModality)[keyof typeof GuardrailModality];

/**
 * @public
 * @enum
 */
export const GuardrailFilterStrength = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GuardrailFilterStrength = (typeof GuardrailFilterStrength)[keyof typeof GuardrailFilterStrength];

/**
 * @public
 * @enum
 */
export const GuardrailContentFilterType = {
  HATE: "HATE",
  INSULTS: "INSULTS",
  MISCONDUCT: "MISCONDUCT",
  PROMPT_ATTACK: "PROMPT_ATTACK",
  SEXUAL: "SEXUAL",
  VIOLENCE: "VIOLENCE",
} as const;

/**
 * @public
 */
export type GuardrailContentFilterType = (typeof GuardrailContentFilterType)[keyof typeof GuardrailContentFilterType];

/**
 * <p>Contains filter strengths for harmful content. Guardrails support the following content filters to detect and filter harmful user inputs and FM-generated outputs.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Hate</b> – Describes language or a statement that discriminates, criticizes, insults, denounces, or dehumanizes a person or group on the basis of an identity (such as race, ethnicity, gender, religion, sexual orientation, ability, and national origin).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Insults</b> – Describes language or a statement that includes demeaning, humiliating, mocking, insulting, or belittling language. This type of language is also labeled as bullying.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Sexual</b> – Describes language or a statement that indicates sexual interest, activity, or arousal using direct or indirect references to body parts, physical traits, or sex.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Violence</b> – Describes language or a statement that includes glorification of or threats to inflict physical pain, hurt, or injury toward a person, group or thing.</p>
 *             </li>
 *          </ul>
 *          <p>Content filtering depends on the confidence classification of user inputs and FM
 *          responses across each of the four harmful categories. All input and output statements are
 *          classified into one of four confidence levels (NONE, LOW, MEDIUM, HIGH) for each
 *          harmful category. For example, if a statement is classified as
 *          <i>Hate</i> with HIGH confidence, the likelihood of the statement
 *          representing hateful content is high. A single statement can be classified across
 *          multiple categories with varying confidence levels. For example, a single statement
 *          can be classified as <i>Hate</i> with HIGH confidence, <i>Insults</i> with LOW confidence, <i>Sexual</i> with NONE confidence, and <i>Violence</i> with MEDIUM confidence.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-filters.html">Guardrails content filters</a>.</p>
 * @public
 */
export interface GuardrailContentFilterConfig {
  /**
   * <p>The harmful category that the content filter is applied to.</p>
   * @public
   */
  type: GuardrailContentFilterType | undefined;

  /**
   * <p>The strength of the content filter to apply to prompts. As you
   *          increase the filter strength, the likelihood of filtering harmful content increases
   *          and the probability of seeing harmful content in your application reduces.</p>
   * @public
   */
  inputStrength: GuardrailFilterStrength | undefined;

  /**
   * <p>The strength of the content filter to apply to model responses. As you
   *          increase the filter strength, the likelihood of filtering harmful content increases
   *          and the probability of seeing harmful content in your application reduces.</p>
   * @public
   */
  outputStrength: GuardrailFilterStrength | undefined;

  /**
   * <p>The input modalities selected for the guardrail content filter configuration.</p>
   * @public
   */
  inputModalities?: GuardrailModality[] | undefined;

  /**
   * <p>The output modalities selected for the guardrail content filter configuration.</p>
   * @public
   */
  outputModalities?: GuardrailModality[] | undefined;

  /**
   * <p>Specifies the action to take when harmful content is detected. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the
   *                trace response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  inputAction?: GuardrailContentFilterAction | undefined;

  /**
   * <p>Specifies the action to take when harmful content is detected in the output. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the trace
   *                response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  outputAction?: GuardrailContentFilterAction | undefined;

  /**
   * <p>Specifies whether to enable guardrail evaluation on the input. When disabled, you aren't
   *          charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * <p>Specifies whether to enable guardrail evaluation on the output. When disabled, you
   *          aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * <p>Contains details about how to handle harmful content.</p>
 * @public
 */
export interface GuardrailContentPolicyConfig {
  /**
   * <p>Contains the type of the content filter and how strongly it should apply to prompts and model responses.</p>
   * @public
   */
  filtersConfig: GuardrailContentFilterConfig[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailContextualGroundingAction = {
  BLOCK: "BLOCK",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GuardrailContextualGroundingAction =
  (typeof GuardrailContextualGroundingAction)[keyof typeof GuardrailContextualGroundingAction];

/**
 * @public
 * @enum
 */
export const GuardrailContextualGroundingFilterType = {
  GROUNDING: "GROUNDING",
  RELEVANCE: "RELEVANCE",
} as const;

/**
 * @public
 */
export type GuardrailContextualGroundingFilterType =
  (typeof GuardrailContextualGroundingFilterType)[keyof typeof GuardrailContextualGroundingFilterType];

/**
 * <p>The filter configuration details for the guardrails contextual grounding filter.</p>
 * @public
 */
export interface GuardrailContextualGroundingFilterConfig {
  /**
   * <p>The filter details for the guardrails contextual grounding filter.</p>
   * @public
   */
  type: GuardrailContextualGroundingFilterType | undefined;

  /**
   * <p>The threshold details for the guardrails contextual grounding filter.</p>
   * @public
   */
  threshold: number | undefined;

  /**
   * <p>Specifies the action to take when content fails the contextual grounding evaluation. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the trace
   *                response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  action?: GuardrailContextualGroundingAction | undefined;

  /**
   * <p>Specifies whether to enable contextual grounding evaluation. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * <p>The policy configuration details for the guardrails contextual grounding policy.</p>
 * @public
 */
export interface GuardrailContextualGroundingPolicyConfig {
  /**
   * <p>The filter configuration details for the guardrails contextual grounding policy.</p>
   * @public
   */
  filtersConfig: GuardrailContextualGroundingFilterConfig[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailSensitiveInformationAction = {
  ANONYMIZE: "ANONYMIZE",
  BLOCK: "BLOCK",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GuardrailSensitiveInformationAction =
  (typeof GuardrailSensitiveInformationAction)[keyof typeof GuardrailSensitiveInformationAction];

/**
 * @public
 * @enum
 */
export const GuardrailPiiEntityType = {
  ADDRESS: "ADDRESS",
  AGE: "AGE",
  AWS_ACCESS_KEY: "AWS_ACCESS_KEY",
  AWS_SECRET_KEY: "AWS_SECRET_KEY",
  CA_HEALTH_NUMBER: "CA_HEALTH_NUMBER",
  CA_SOCIAL_INSURANCE_NUMBER: "CA_SOCIAL_INSURANCE_NUMBER",
  CREDIT_DEBIT_CARD_CVV: "CREDIT_DEBIT_CARD_CVV",
  CREDIT_DEBIT_CARD_EXPIRY: "CREDIT_DEBIT_CARD_EXPIRY",
  CREDIT_DEBIT_CARD_NUMBER: "CREDIT_DEBIT_CARD_NUMBER",
  DRIVER_ID: "DRIVER_ID",
  EMAIL: "EMAIL",
  INTERNATIONAL_BANK_ACCOUNT_NUMBER: "INTERNATIONAL_BANK_ACCOUNT_NUMBER",
  IP_ADDRESS: "IP_ADDRESS",
  LICENSE_PLATE: "LICENSE_PLATE",
  MAC_ADDRESS: "MAC_ADDRESS",
  NAME: "NAME",
  PASSWORD: "PASSWORD",
  PHONE: "PHONE",
  PIN: "PIN",
  SWIFT_CODE: "SWIFT_CODE",
  UK_NATIONAL_HEALTH_SERVICE_NUMBER: "UK_NATIONAL_HEALTH_SERVICE_NUMBER",
  UK_NATIONAL_INSURANCE_NUMBER: "UK_NATIONAL_INSURANCE_NUMBER",
  UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER: "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
  URL: "URL",
  USERNAME: "USERNAME",
  US_BANK_ACCOUNT_NUMBER: "US_BANK_ACCOUNT_NUMBER",
  US_BANK_ROUTING_NUMBER: "US_BANK_ROUTING_NUMBER",
  US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER: "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER",
  US_PASSPORT_NUMBER: "US_PASSPORT_NUMBER",
  US_SOCIAL_SECURITY_NUMBER: "US_SOCIAL_SECURITY_NUMBER",
  VEHICLE_IDENTIFICATION_NUMBER: "VEHICLE_IDENTIFICATION_NUMBER",
} as const;

/**
 * @public
 */
export type GuardrailPiiEntityType = (typeof GuardrailPiiEntityType)[keyof typeof GuardrailPiiEntityType];

/**
 * <p>The PII entity to configure for the guardrail.</p>
 * @public
 */
export interface GuardrailPiiEntityConfig {
  /**
   * <p>Configure guardrail type when the PII entity is detected.</p>
   *          <p>The following PIIs are used to block or mask sensitive information:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>General</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>ADDRESS</b>
   *                      </p>
   *                      <p>A physical address, such as "100 Main Street, Anytown, USA"
   *                      or "Suite #12, Building 123". An address can include information
   *                      such as the street, building, location, city, state, country, county,
   *                      zip code, precinct, and neighborhood. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>AGE</b>
   *                      </p>
   *                      <p>An individual's age, including the quantity and unit of time. For
   *                      example, in the phrase "I am 40 years old," Guardrails recognizes "40 years"
   *                      as an age.
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>NAME</b>
   *                      </p>
   *                      <p>An individual's name. This entity type does not include titles, such as
   *                      Dr., Mr., Mrs., or Miss. guardrails doesn't apply this entity type to names that
   *                      are part of organizations or addresses. For example, guardrails recognizes
   *                      the "John Doe Organization" as an organization, and it recognizes "Jane Doe
   *                      Street" as an address.
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>EMAIL</b>
   *                      </p>
   *                      <p>An email address, such as <i>marymajor@email.com</i>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>PHONE</b>
   *                      </p>
   *                      <p>A phone number. This entity type also includes fax and pager numbers.
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>USERNAME</b>
   *                      </p>
   *                      <p>A user name that identifies an account, such as a login name, screen name,
   *                      nick name, or handle.
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>PASSWORD</b>
   *                      </p>
   *                      <p>An alphanumeric string that is used as a password, such as
   *                      "*<i>very20special#pass*</i>".
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>DRIVER_ID</b>
   *                      </p>
   *                      <p>The number assigned to a driver's license, which is an official
   *                      document permitting an individual to operate one or more motorized
   *                      vehicles on a public road. A driver's license number consists of
   *                      alphanumeric characters.
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>LICENSE_PLATE</b>
   *                      </p>
   *                      <p>A license plate for a vehicle is issued by the state or country where
   *                      the vehicle is registered. The format for passenger vehicles is typically
   *                      five to eight digits, consisting of upper-case letters and numbers. The
   *                      format varies depending on the location of the issuing state or country.
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>VEHICLE_IDENTIFICATION_NUMBER</b>
   *                      </p>
   *                      <p>A Vehicle Identification Number (VIN) uniquely identifies a vehicle.
   *                      VIN content and format are defined in the <i>ISO 3779</i> specification.
   *                      Each country has specific codes and formats for VINs.
   *                   </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Finance</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>CREDIT_DEBIT_CARD_CVV</b>
   *                      </p>
   *                      <p>A three-digit card verification code (CVV) that is present on VISA,
   *                   MasterCard, and Discover credit and debit cards. For American Express
   *                   credit or debit cards, the CVV is a four-digit numeric code.
   *                </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>CREDIT_DEBIT_CARD_EXPIRY</b>
   *                      </p>
   *                      <p>The expiration date for a credit or debit card. This number is usually
   *                      four digits long and is often formatted as <i>month/year</i> or
   *                      <i>MM/YY</i>. Guardrails recognizes expiration dates such as
   *                      <i>01/21</i>, <i>01/2021</i>, and <i>Jan 2021</i>.
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>CREDIT_DEBIT_CARD_NUMBER</b>
   *                      </p>
   *                      <p>The number for a credit or debit card. These numbers can vary from 13 to 16
   *                      digits in length. However, Amazon Comprehend also recognizes credit or debit
   *                      card numbers when only the last four digits are present.
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>PIN</b>
   *                      </p>
   *                      <p>A four-digit personal identification number (PIN) with which you can
   *                      access your bank account.
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>INTERNATIONAL_BANK_ACCOUNT_NUMBER</b>
   *                      </p>
   *                      <p>An International Bank Account Number has specific formats in each country.
   *                      For more information, see <a href="https://www.iban.com/structure">www.iban.com/structure</a>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>SWIFT_CODE</b>
   *                      </p>
   *                      <p>A SWIFT code is a standard format of Bank Identifier Code (BIC) used to specify
   *                      a particular bank or branch. Banks use these codes for money transfers such as
   *                      international wire transfers.</p>
   *                      <p>SWIFT codes consist of eight or 11 characters. The 11-digit codes refer to specific
   *                      branches, while eight-digit codes (or 11-digit codes ending in 'XXX') refer to the
   *                      head or primary office.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>IT</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>IP_ADDRESS</b>
   *                      </p>
   *                      <p>An IPv4 address, such as <i>198.51.100.0</i>.
   *                </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>MAC_ADDRESS</b>
   *                      </p>
   *                      <p>A <i>media access control</i> (MAC) address is a unique identifier
   *                      assigned to a network interface controller (NIC).
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>URL</b>
   *                      </p>
   *                      <p>A web address, such as <i>www.example.com</i>.
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>AWS_ACCESS_KEY</b>
   *                      </p>
   *                      <p>A unique identifier that's associated with a secret access key;
   *                      you use the access key ID and secret access key to sign programmatic
   *                      Amazon Web Services requests cryptographically.
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>AWS_SECRET_KEY</b>
   *                      </p>
   *                      <p>A unique identifier that's associated with an access key. You use the
   *                      access key ID and secret access key to sign programmatic Amazon Web Services
   *                      requests cryptographically.
   *                   </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>USA specific</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>US_BANK_ACCOUNT_NUMBER</b>
   *                      </p>
   *                      <p>A US bank account number, which is typically 10 to 12 digits long.
   *                </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>US_BANK_ROUTING_NUMBER</b>
   *                      </p>
   *                      <p>A US bank account routing number. These are typically nine digits long,
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER</b>
   *                      </p>
   *                      <p>A US Individual Taxpayer Identification Number (ITIN) is a nine-digit number
   *                      that starts with a "9" and contain a "7" or "8" as the fourth digit. An ITIN
   *                      can be formatted with a space or a dash after the third and forth digits.
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>US_PASSPORT_NUMBER</b>
   *                      </p>
   *                      <p>A US passport number. Passport numbers range from six to nine alphanumeric
   *                      characters.
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>US_SOCIAL_SECURITY_NUMBER</b>
   *                      </p>
   *                      <p>A US Social Security Number (SSN) is a nine-digit number that is issued to
   *                      US citizens, permanent residents, and temporary working residents.
   *                   </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Canada specific</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>CA_HEALTH_NUMBER</b>
   *                      </p>
   *                      <p>A Canadian Health Service Number is a 10-digit unique identifier,
   *                   required for individuals to access healthcare benefits.
   *                </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>CA_SOCIAL_INSURANCE_NUMBER</b>
   *                      </p>
   *                      <p>A Canadian Social Insurance Number (SIN) is a nine-digit unique identifier,
   *                      required for individuals to access government programs and benefits.</p>
   *                      <p>The SIN is formatted as three groups of three digits, such as
   *                      <i>123-456-789</i>. A SIN can be validated through a simple
   *                      check-digit process called the <a href="https://www.wikipedia.org/wiki/Luhn_algorithm">Luhn algorithm</a>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>UK Specific</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>UK_NATIONAL_HEALTH_SERVICE_NUMBER</b>
   *                      </p>
   *                      <p>A UK National Health Service Number is a 10-17 digit number,
   *                   such as <i>485 777 3456</i>. The current system formats the 10-digit
   *                   number with spaces after the third and sixth digits. The final digit is an
   *                   error-detecting checksum.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>UK_NATIONAL_INSURANCE_NUMBER</b>
   *                      </p>
   *                      <p>A UK National Insurance Number (NINO) provides individuals with access to National
   *                      Insurance (social security) benefits. It is also used for some purposes in the UK
   *                      tax system.</p>
   *                      <p>The number is nine digits long and starts with two letters, followed by six
   *                      numbers and one letter. A NINO can be formatted with a space or a dash after
   *                      the two letters and after the second, forth, and sixth digits.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <b>UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER</b>
   *                      </p>
   *                      <p>A UK Unique Taxpayer Reference (UTR) is a 10-digit number that identifies a taxpayer or a business.
   *                   </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Custom</b>
   *                </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <b>Regex filter</b> - You can use
   *                   a regular expressions to define patterns for a guardrail to recognize
   *                   and act upon such as serial number, booking ID etc..</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  type: GuardrailPiiEntityType | undefined;

  /**
   * <p>Configure guardrail action when the PII entity is detected.</p>
   * @public
   */
  action: GuardrailSensitiveInformationAction | undefined;

  /**
   * <p>Specifies the action to take when harmful content is detected in the input. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ANONYMIZE</code> – Mask the content and replace it with identifier
   *                tags.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the
   *                trace response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  inputAction?: GuardrailSensitiveInformationAction | undefined;

  /**
   * <p>Specifies the action to take when harmful content is detected in the output. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ANONYMIZE</code> – Mask the content and replace it with identifier
   *                tags.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the
   *                trace response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  outputAction?: GuardrailSensitiveInformationAction | undefined;

  /**
   * <p>Specifies whether to enable guardrail evaluation on the input. When disabled, you aren't
   *          charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * <p>Specifies whether to enable guardrail evaluation on the output. When disabled, you
   *          aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * <p>The regular expression to configure for the guardrail.</p>
 * @public
 */
export interface GuardrailRegexConfig {
  /**
   * <p>The name of the regular expression to configure for the guardrail.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the regular expression to configure for the guardrail.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The regular expression pattern to configure for the guardrail.</p>
   * @public
   */
  pattern: string | undefined;

  /**
   * <p>The guardrail action to configure when matching regular expression is detected.</p>
   * @public
   */
  action: GuardrailSensitiveInformationAction | undefined;

  /**
   * <p>Specifies the action to take when harmful content is detected in the input. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the trace
   *                response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  inputAction?: GuardrailSensitiveInformationAction | undefined;

  /**
   * <p>Specifies the action to take when harmful content is detected in the output. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the trace
   *                response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  outputAction?: GuardrailSensitiveInformationAction | undefined;

  /**
   * <p>Specifies whether to enable guardrail evaluation on the input. When disabled, you aren't
   *          charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * <p>Specifies whether to enable guardrail evaluation on the output. When disabled, you
   *          aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * <p>Contains details about PII entities and regular expressions to configure for the guardrail.</p>
 * @public
 */
export interface GuardrailSensitiveInformationPolicyConfig {
  /**
   * <p>A list of PII entities to configure to the guardrail.</p>
   * @public
   */
  piiEntitiesConfig?: GuardrailPiiEntityConfig[] | undefined;

  /**
   * <p>A list of regular expressions to configure to the guardrail.</p>
   * @public
   */
  regexesConfig?: GuardrailRegexConfig[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailTopicAction = {
  BLOCK: "BLOCK",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GuardrailTopicAction = (typeof GuardrailTopicAction)[keyof typeof GuardrailTopicAction];

/**
 * @public
 * @enum
 */
export const GuardrailTopicType = {
  DENY: "DENY",
} as const;

/**
 * @public
 */
export type GuardrailTopicType = (typeof GuardrailTopicType)[keyof typeof GuardrailTopicType];

/**
 * <p>Details about topics for the guardrail to identify and deny.</p>
 * @public
 */
export interface GuardrailTopicConfig {
  /**
   * <p>The name of the topic to deny.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A definition of the topic to deny.</p>
   * @public
   */
  definition: string | undefined;

  /**
   * <p>A list of prompts, each of which is an example of a prompt that can be categorized as belonging to the topic.</p>
   * @public
   */
  examples?: string[] | undefined;

  /**
   * <p>Specifies to deny the topic.</p>
   * @public
   */
  type: GuardrailTopicType | undefined;

  /**
   * <p>Specifies the action to take when harmful content is detected in the input. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the trace
   *                response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  inputAction?: GuardrailTopicAction | undefined;

  /**
   * <p>Specifies the action to take when harmful content is detected in the output. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the trace
   *                response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  outputAction?: GuardrailTopicAction | undefined;

  /**
   * <p>Specifies whether to enable guardrail evaluation on the input. When disabled, you aren't
   *          charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * <p>Specifies whether to enable guardrail evaluation on the output. When disabled, you
   *          aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * <p>Contains details about topics that the guardrail should identify and deny.</p>
 * @public
 */
export interface GuardrailTopicPolicyConfig {
  /**
   * <p>A list of policies related to topics that the guardrail should deny.</p>
   * @public
   */
  topicsConfig: GuardrailTopicConfig[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailWordAction = {
  BLOCK: "BLOCK",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GuardrailWordAction = (typeof GuardrailWordAction)[keyof typeof GuardrailWordAction];

/**
 * @public
 * @enum
 */
export const GuardrailManagedWordsType = {
  PROFANITY: "PROFANITY",
} as const;

/**
 * @public
 */
export type GuardrailManagedWordsType = (typeof GuardrailManagedWordsType)[keyof typeof GuardrailManagedWordsType];

/**
 * <p>The managed word list to configure for the guardrail.</p>
 * @public
 */
export interface GuardrailManagedWordsConfig {
  /**
   * <p>The managed word type to configure for the guardrail.</p>
   * @public
   */
  type: GuardrailManagedWordsType | undefined;

  /**
   * <p>Specifies the action to take when harmful content is detected in the input. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the trace
   *                response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  inputAction?: GuardrailWordAction | undefined;

  /**
   * <p>Specifies the action to take when harmful content is detected in the output. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the trace
   *                response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  outputAction?: GuardrailWordAction | undefined;

  /**
   * <p>Specifies whether to enable guardrail evaluation on the input. When disabled, you
   *          aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * <p>Specifies whether to enable guardrail evaluation on the output. When disabled, you
   *          aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * <p>A word to configure for the guardrail.</p>
 * @public
 */
export interface GuardrailWordConfig {
  /**
   * <p>Text of the word configured for the guardrail to block.</p>
   * @public
   */
  text: string | undefined;

  /**
   * <p>Specifies the action to take when harmful content is detected in the input. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the trace
   *                response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  inputAction?: GuardrailWordAction | undefined;

  /**
   * <p>Specifies the action to take when harmful content is detected in the output. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the trace
   *                response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  outputAction?: GuardrailWordAction | undefined;

  /**
   * <p>Specifies whether to enable guardrail evaluation on the intput. When disabled, you
   *          aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * <p>Specifies whether to enable guardrail evaluation on the output. When disabled, you
   *          aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * <p>Contains details about the word policy to configured for the guardrail.</p>
 * @public
 */
export interface GuardrailWordPolicyConfig {
  /**
   * <p>A list of words to configure for the guardrail.</p>
   * @public
   */
  wordsConfig?: GuardrailWordConfig[] | undefined;

  /**
   * <p>A list of managed words to configure for the guardrail.</p>
   * @public
   */
  managedWordListsConfig?: GuardrailManagedWordsConfig[] | undefined;
}

/**
 * @public
 */
export interface CreateGuardrailRequest {
  /**
   * <p>The name to give the guardrail.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the guardrail.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The topic policies to configure for the guardrail.</p>
   * @public
   */
  topicPolicyConfig?: GuardrailTopicPolicyConfig | undefined;

  /**
   * <p>The content filter policies to configure for the guardrail.</p>
   * @public
   */
  contentPolicyConfig?: GuardrailContentPolicyConfig | undefined;

  /**
   * <p>The word policy you configure for the guardrail.</p>
   * @public
   */
  wordPolicyConfig?: GuardrailWordPolicyConfig | undefined;

  /**
   * <p>The sensitive information policy to configure for the guardrail.</p>
   * @public
   */
  sensitiveInformationPolicyConfig?: GuardrailSensitiveInformationPolicyConfig | undefined;

  /**
   * <p>The contextual grounding policy configuration used to create a guardrail.</p>
   * @public
   */
  contextualGroundingPolicyConfig?: GuardrailContextualGroundingPolicyConfig | undefined;

  /**
   * <p>The message to return when the guardrail blocks a prompt.</p>
   * @public
   */
  blockedInputMessaging: string | undefined;

  /**
   * <p>The message to return when the guardrail blocks a model response.</p>
   * @public
   */
  blockedOutputsMessaging: string | undefined;

  /**
   * <p>The ARN of the KMS key that you use to encrypt the guardrail.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The tags that you want to attach to the guardrail. </p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request
   *          completes no more than once. If this token matches a previous request,
   *          Amazon Bedrock ignores the request, but does not return an error.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *             idempotency</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGuardrailResponse {
  /**
   * <p>The unique identifier of the guardrail that was created.</p>
   * @public
   */
  guardrailId: string | undefined;

  /**
   * <p>The ARN of the guardrail.</p>
   * @public
   */
  guardrailArn: string | undefined;

  /**
   * <p>The version of the guardrail that was created.
   *          This value will always be <code>DRAFT</code>.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The time at which the guardrail was created.</p>
   * @public
   */
  createdAt: Date | undefined;
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
  resourceName?: string | undefined;

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
export interface CreateGuardrailVersionRequest {
  /**
   * <p>The unique identifier of the guardrail. This can be an ID or the ARN.</p>
   * @public
   */
  guardrailIdentifier: string | undefined;

  /**
   * <p>A description of the guardrail version.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request
   *          completes no more than once. If this token matches a previous request,
   *          Amazon Bedrock ignores the request, but does not return an error.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring
   *             idempotency</a> in the <i>Amazon S3 User Guide</i>.</p>
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateGuardrailVersionResponse {
  /**
   * <p>The unique identifier of the guardrail.</p>
   * @public
   */
  guardrailId: string | undefined;

  /**
   * <p>The number of the version of the guardrail.</p>
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface DeleteGuardrailRequest {
  /**
   * <p>The unique identifier of the guardrail.  This can be an ID or the ARN.</p>
   * @public
   */
  guardrailIdentifier: string | undefined;

  /**
   * <p>The version of the guardrail.</p>
   * @public
   */
  guardrailVersion?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGuardrailResponse {}

/**
 * @public
 */
export interface GetGuardrailRequest {
  /**
   * <p>The unique identifier of the guardrail for which to get details.  This can be an ID or the ARN.</p>
   * @public
   */
  guardrailIdentifier: string | undefined;

  /**
   * <p>The version of the guardrail for which to get details. If you don't specify a version, the response returns details for the <code>DRAFT</code> version.</p>
   * @public
   */
  guardrailVersion?: string | undefined;
}

/**
 * <p>Contains filter strengths for harmful content. Guardrails support the following content filters to detect and filter harmful user inputs and FM-generated outputs.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Hate</b> – Describes language or a statement that discriminates, criticizes, insults, denounces, or dehumanizes a person or group on the basis of an identity (such as race, ethnicity, gender, religion, sexual orientation, ability, and national origin).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Insults</b> – Describes language or a statement that includes demeaning, humiliating, mocking, insulting, or belittling language. This type of language is also labeled as bullying.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Sexual</b> – Describes language or a statement that indicates sexual interest, activity, or arousal using direct or indirect references to body parts, physical traits, or sex.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Violence</b> – Describes language or a statement that includes glorification of or threats to inflict physical pain, hurt, or injury toward a person, group or thing.</p>
 *             </li>
 *          </ul>
 *          <p>Content filtering depends on the confidence classification of user inputs and FM
 *          responses across each of the four harmful categories. All input and output statements are
 *          classified into one of four confidence levels (NONE, LOW, MEDIUM, HIGH) for each
 *          harmful category. For example, if a statement is classified as
 *          <i>Hate</i> with HIGH confidence, the likelihood of the statement
 *          representing hateful content is high. A single statement can be classified across
 *          multiple categories with varying confidence levels. For example, a single statement
 *          can be classified as <i>Hate</i> with HIGH confidence, <i>Insults</i> with LOW confidence, <i>Sexual</i> with NONE confidence, and <i>Violence</i> with MEDIUM confidence.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-filters.html">Guardrails content filters</a>.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetGuardrail.html#API_GetGuardrail_ResponseSyntax">GetGuardrail response body</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface GuardrailContentFilter {
  /**
   * <p>The harmful category that the content filter is applied to.</p>
   * @public
   */
  type: GuardrailContentFilterType | undefined;

  /**
   * <p>The strength of the content filter to apply to prompts. As you
   *          increase the filter strength, the likelihood of filtering harmful content increases
   *          and the probability of seeing harmful content in your application reduces.</p>
   * @public
   */
  inputStrength: GuardrailFilterStrength | undefined;

  /**
   * <p>The strength of the content filter to apply to model responses. As you
   *          increase the filter strength, the likelihood of filtering harmful content increases
   *          and the probability of seeing harmful content in your application reduces.</p>
   * @public
   */
  outputStrength: GuardrailFilterStrength | undefined;

  /**
   * <p>The input modalities selected for the guardrail content filter.</p>
   * @public
   */
  inputModalities?: GuardrailModality[] | undefined;

  /**
   * <p>The output modalities selected for the guardrail content filter.</p>
   * @public
   */
  outputModalities?: GuardrailModality[] | undefined;

  /**
   * <p>The action to take when harmful content is detected in the input. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the
   *                trace response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  inputAction?: GuardrailContentFilterAction | undefined;

  /**
   * <p>The action to take when harmful content is detected in the output. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the trace
   *                response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  outputAction?: GuardrailContentFilterAction | undefined;

  /**
   * <p>Indicates whether guardrail evaluation is enabled on the input. When disabled, you aren't
   *          charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * <p>Indicates whether guardrail evaluation is enabled on the output. When disabled, you
   *          aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * <p>Contains details about how to handle harmful content.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetGuardrail.html#API_GetGuardrail_ResponseSyntax">GetGuardrail response body</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface GuardrailContentPolicy {
  /**
   * <p>Contains the type of the content filter and how strongly it should apply to prompts and model responses.</p>
   * @public
   */
  filters?: GuardrailContentFilter[] | undefined;
}

/**
 * <p>The details for the guardrails contextual grounding filter.</p>
 * @public
 */
export interface GuardrailContextualGroundingFilter {
  /**
   * <p>The filter type details for the guardrails contextual grounding filter.</p>
   * @public
   */
  type: GuardrailContextualGroundingFilterType | undefined;

  /**
   * <p>The threshold details for the guardrails contextual grounding filter.</p>
   * @public
   */
  threshold: number | undefined;

  /**
   * <p>The action to take when content fails the contextual grounding evaluation. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the trace
   *                response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  action?: GuardrailContextualGroundingAction | undefined;

  /**
   * <p>Indicates whether contextual grounding is enabled for evaluation. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * <p>The details for the guardrails contextual grounding policy.</p>
 * @public
 */
export interface GuardrailContextualGroundingPolicy {
  /**
   * <p>The filter details for the guardrails contextual grounding policy.</p>
   * @public
   */
  filters: GuardrailContextualGroundingFilter[] | undefined;
}

/**
 * <p>The PII entity configured for the guardrail.</p>
 * @public
 */
export interface GuardrailPiiEntity {
  /**
   * <p>The type of PII entity. For example, Social Security Number.</p>
   * @public
   */
  type: GuardrailPiiEntityType | undefined;

  /**
   * <p>The configured guardrail action when PII entity is detected.</p>
   * @public
   */
  action: GuardrailSensitiveInformationAction | undefined;

  /**
   * <p>The action to take when harmful content is detected in the input. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ANONYMIZE</code> – Mask the content and replace it with identifier
   *                tags.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the
   *                trace response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  inputAction?: GuardrailSensitiveInformationAction | undefined;

  /**
   * <p>The action to take when harmful content is detected in the output. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ANONYMIZE</code> – Mask the content and replace it with identifier
   *                tags.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the
   *                trace response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  outputAction?: GuardrailSensitiveInformationAction | undefined;

  /**
   * <p>Indicates whether guardrail evaluation is enabled on the input. When disabled, you aren't
   *          charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * <p>Indicates whether guardrail evaluation is enabled on the output. When disabled, you
   *          aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * <p>The regular expression configured for the guardrail.</p>
 * @public
 */
export interface GuardrailRegex {
  /**
   * <p>The name of the regular expression for the guardrail.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the regular expression for the guardrail.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The pattern of the regular expression configured for the guardrail.</p>
   * @public
   */
  pattern: string | undefined;

  /**
   * <p>The action taken when a match to the regular expression is detected.</p>
   * @public
   */
  action: GuardrailSensitiveInformationAction | undefined;

  /**
   * <p>The action to take when harmful content is detected in the input. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the trace
   *                response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  inputAction?: GuardrailSensitiveInformationAction | undefined;

  /**
   * <p>The action to take when harmful content is detected in the output. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the trace
   *                response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  outputAction?: GuardrailSensitiveInformationAction | undefined;

  /**
   * <p>Indicates whether guardrail evaluation is enabled on the input. When disabled, you aren't
   *          charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * <p>Indicates whether guardrail evaluation is enabled on the output. When disabled, you
   *          aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * <p>Contains details about PII entities and regular expressions configured for the guardrail.</p>
 * @public
 */
export interface GuardrailSensitiveInformationPolicy {
  /**
   * <p>The list of PII entities configured for the guardrail.</p>
   * @public
   */
  piiEntities?: GuardrailPiiEntity[] | undefined;

  /**
   * <p>The list of regular expressions configured for the guardrail.</p>
   * @public
   */
  regexes?: GuardrailRegex[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  READY: "READY",
  UPDATING: "UPDATING",
  VERSIONING: "VERSIONING",
} as const;

/**
 * @public
 */
export type GuardrailStatus = (typeof GuardrailStatus)[keyof typeof GuardrailStatus];

/**
 * <p>Details about topics for the guardrail to identify and deny.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetGuardrail.html#API_GetGuardrail_ResponseSyntax">GetGuardrail response body</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface GuardrailTopic {
  /**
   * <p>The name of the topic to deny.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A definition of the topic to deny.</p>
   * @public
   */
  definition: string | undefined;

  /**
   * <p>A list of prompts, each of which is an example of a prompt that can be categorized as belonging to the topic.</p>
   * @public
   */
  examples?: string[] | undefined;

  /**
   * <p>Specifies to deny the topic.</p>
   * @public
   */
  type?: GuardrailTopicType | undefined;

  /**
   * <p>The action to take when harmful content is detected in the input. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the trace
   *                response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  inputAction?: GuardrailTopicAction | undefined;

  /**
   * <p>The action to take when harmful content is detected in the output. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the trace
   *                response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  outputAction?: GuardrailTopicAction | undefined;

  /**
   * <p>Indicates whether guardrail evaluation is enabled on the input. When disabled, you
   *          aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * <p>Indicates whether guardrail evaluation is enabled on the output. When disabled, you
   *          aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * <p>Contains details about topics that the guardrail should identify and deny.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_GetGuardrail.html#API_GetGuardrail_ResponseSyntax">GetGuardrail response body</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface GuardrailTopicPolicy {
  /**
   * <p>A list of policies related to topics that the guardrail should deny.</p>
   * @public
   */
  topics: GuardrailTopic[] | undefined;
}

/**
 * <p>The managed word list that was configured for the guardrail.
 *          (This is a list of words that are pre-defined and managed by guardrails only.)</p>
 * @public
 */
export interface GuardrailManagedWords {
  /**
   * <p>ManagedWords$type
   *          The managed word type that was configured for the guardrail.
   *          (For now, we only offer profanity word list)</p>
   * @public
   */
  type: GuardrailManagedWordsType | undefined;

  /**
   * <p>The action to take when harmful content is detected in the input. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the trace
   *                response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  inputAction?: GuardrailWordAction | undefined;

  /**
   * <p>The action to take when harmful content is detected in the output. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the trace
   *                response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  outputAction?: GuardrailWordAction | undefined;

  /**
   * <p>Indicates whether guardrail evaluation is enabled on the input. When disabled, you aren't
   *          charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * <p>Indicates whether guardrail evaluation is enabled on the output. When disabled, you
   *          aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * <p>A word configured for the guardrail.</p>
 * @public
 */
export interface GuardrailWord {
  /**
   * <p>Text of the word configured for the guardrail to block.</p>
   * @public
   */
  text: string | undefined;

  /**
   * <p>The action to take when harmful content is detected in the input. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the trace
   *                response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  inputAction?: GuardrailWordAction | undefined;

  /**
   * <p>The action to take when harmful content is detected in the output. Supported values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> – Block the content and replace it with blocked
   *                messaging.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code> – Take no action but return detection information in the trace
   *                response.</p>
   *             </li>
   *          </ul>
   * @public
   */
  outputAction?: GuardrailWordAction | undefined;

  /**
   * <p>Indicates whether guardrail evaluation is enabled on the input. When disabled, you aren't
   *          charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * <p>Indicates whether guardrail evaluation is enabled on the output. When disabled, you
   *          aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * <p>Contains details about the word policy configured for the guardrail.</p>
 * @public
 */
export interface GuardrailWordPolicy {
  /**
   * <p>A list of words configured for the guardrail.</p>
   * @public
   */
  words?: GuardrailWord[] | undefined;

  /**
   * <p>A list of managed words configured for the guardrail.</p>
   * @public
   */
  managedWordLists?: GuardrailManagedWords[] | undefined;
}

/**
 * @public
 */
export interface GetGuardrailResponse {
  /**
   * <p>The name of the guardrail.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the guardrail.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier of the guardrail.</p>
   * @public
   */
  guardrailId: string | undefined;

  /**
   * <p>The ARN of the guardrail.</p>
   * @public
   */
  guardrailArn: string | undefined;

  /**
   * <p>The version of the guardrail.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The status of the guardrail.</p>
   * @public
   */
  status: GuardrailStatus | undefined;

  /**
   * <p>The topic policy that was configured for the guardrail.</p>
   * @public
   */
  topicPolicy?: GuardrailTopicPolicy | undefined;

  /**
   * <p>The content policy that was configured for the guardrail.</p>
   * @public
   */
  contentPolicy?: GuardrailContentPolicy | undefined;

  /**
   * <p>The word policy that was configured for the guardrail.</p>
   * @public
   */
  wordPolicy?: GuardrailWordPolicy | undefined;

  /**
   * <p>The sensitive information policy that was configured for the guardrail.</p>
   * @public
   */
  sensitiveInformationPolicy?: GuardrailSensitiveInformationPolicy | undefined;

  /**
   * <p>The contextual grounding policy used in the guardrail.</p>
   * @public
   */
  contextualGroundingPolicy?: GuardrailContextualGroundingPolicy | undefined;

  /**
   * <p>The date and time at which the guardrail was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time at which the guardrail was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>Appears if the <code>status</code> is <code>FAILED</code>. A list of reasons for why the guardrail failed to be created, updated, versioned, or deleted.</p>
   * @public
   */
  statusReasons?: string[] | undefined;

  /**
   * <p>Appears if the <code>status</code> of the guardrail is <code>FAILED</code>. A list of recommendations to carry out before retrying the request.</p>
   * @public
   */
  failureRecommendations?: string[] | undefined;

  /**
   * <p>The message that the guardrail returns when it blocks a prompt.</p>
   * @public
   */
  blockedInputMessaging: string | undefined;

  /**
   * <p>The message that the guardrail returns when it blocks a model response.</p>
   * @public
   */
  blockedOutputsMessaging: string | undefined;

  /**
   * <p>The ARN of the KMS key that encrypts the guardrail.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListGuardrailsRequest {
  /**
   * <p>The unique identifier of the guardrail.  This can be an ID or the ARN.</p>
   * @public
   */
  guardrailIdentifier?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If there are more results than were returned in the response, the response returns a <code>nextToken</code> that you can send in another <code>ListGuardrails</code> request to see the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains details about a guardrail.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListGuardrails.html#API_ListGuardrails_ResponseSyntax">ListGuardrails response body</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface GuardrailSummary {
  /**
   * <p>The unique identifier of the guardrail.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ARN of the guardrail.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the guardrail.</p>
   * @public
   */
  status: GuardrailStatus | undefined;

  /**
   * <p>The name of the guardrail.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the guardrail.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The version of the guardrail.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The date and time at which the guardrail was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time at which the guardrail was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListGuardrailsResponse {
  /**
   * <p>A list of objects, each of which contains details about a guardrail.</p>
   * @public
   */
  guardrails: GuardrailSummary[] | undefined;

  /**
   * <p>If there are more results than were returned in the response, the response returns a <code>nextToken</code> that you can send in another <code>ListGuardrails</code> request to see the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGuardrailRequest {
  /**
   * <p>The unique identifier of the guardrail.  This can be an ID or the ARN.</p>
   * @public
   */
  guardrailIdentifier: string | undefined;

  /**
   * <p>A name for the guardrail.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the guardrail.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The topic policy to configure for the guardrail.</p>
   * @public
   */
  topicPolicyConfig?: GuardrailTopicPolicyConfig | undefined;

  /**
   * <p>The content policy to configure for the guardrail.</p>
   * @public
   */
  contentPolicyConfig?: GuardrailContentPolicyConfig | undefined;

  /**
   * <p>The word policy to configure for the guardrail.</p>
   * @public
   */
  wordPolicyConfig?: GuardrailWordPolicyConfig | undefined;

  /**
   * <p>The sensitive information policy to configure for the guardrail.</p>
   * @public
   */
  sensitiveInformationPolicyConfig?: GuardrailSensitiveInformationPolicyConfig | undefined;

  /**
   * <p>The contextual grounding policy configuration used to update a guardrail.</p>
   * @public
   */
  contextualGroundingPolicyConfig?: GuardrailContextualGroundingPolicyConfig | undefined;

  /**
   * <p>The message to return when the guardrail blocks a prompt.</p>
   * @public
   */
  blockedInputMessaging: string | undefined;

  /**
   * <p>The message to return when the guardrail blocks a model response.</p>
   * @public
   */
  blockedOutputsMessaging: string | undefined;

  /**
   * <p>The ARN of the KMS key with which to encrypt the guardrail.</p>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGuardrailResponse {
  /**
   * <p>The unique identifier of the guardrail</p>
   * @public
   */
  guardrailId: string | undefined;

  /**
   * <p>The ARN of the guardrail.</p>
   * @public
   */
  guardrailArn: string | undefined;

  /**
   * <p>The version of the guardrail.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The date and time at which the guardrail was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Contains information about the model or system-defined inference profile that is the source for an inference profile..</p>
 * @public
 */
export type InferenceProfileModelSource =
  | InferenceProfileModelSource.CopyFromMember
  | InferenceProfileModelSource.$UnknownMember;

/**
 * @public
 */
export namespace InferenceProfileModelSource {
  /**
   * <p>The ARN of the model or system-defined inference profile that is the source for the inference profile.</p>
   * @public
   */
  export interface CopyFromMember {
    copyFrom: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    copyFrom?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    copyFrom: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: InferenceProfileModelSource, visitor: Visitor<T>): T => {
    if (value.copyFrom !== undefined) return visitor.copyFrom(value.copyFrom);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateInferenceProfileRequest {
  /**
   * <p>A name for the inference profile.</p>
   * @public
   */
  inferenceProfileName: string | undefined;

  /**
   * <p>A description for the inference profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The foundation model or system-defined inference profile that the inference profile will track metrics and costs for.</p>
   * @public
   */
  modelSource: InferenceProfileModelSource | undefined;

  /**
   * <p>An array of objects, each of which contains a tag and its value. For more information, see  <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Tagging resources</a> in the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Amazon Bedrock User Guide</a>.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const InferenceProfileStatus = {
  ACTIVE: "ACTIVE",
} as const;

/**
 * @public
 */
export type InferenceProfileStatus = (typeof InferenceProfileStatus)[keyof typeof InferenceProfileStatus];

/**
 * @public
 */
export interface CreateInferenceProfileResponse {
  /**
   * <p>The ARN of the inference profile that you created.</p>
   * @public
   */
  inferenceProfileArn: string | undefined;

  /**
   * <p>The status of the inference profile. <code>ACTIVE</code> means that the inference profile is ready to be used.</p>
   * @public
   */
  status?: InferenceProfileStatus | undefined;
}

/**
 * @public
 */
export interface DeleteInferenceProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or ID of the application inference profile to delete.</p>
   * @public
   */
  inferenceProfileIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteInferenceProfileResponse {}

/**
 * @public
 */
export interface GetInferenceProfileRequest {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the inference profile.</p>
   * @public
   */
  inferenceProfileIdentifier: string | undefined;
}

/**
 * <p>Contains information about a model.</p>
 * @public
 */
export interface InferenceProfileModel {
  /**
   * <p>The Amazon Resource Name (ARN) of the model.</p>
   * @public
   */
  modelArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InferenceProfileType = {
  APPLICATION: "APPLICATION",
  SYSTEM_DEFINED: "SYSTEM_DEFINED",
} as const;

/**
 * @public
 */
export type InferenceProfileType = (typeof InferenceProfileType)[keyof typeof InferenceProfileType];

/**
 * @public
 */
export interface GetInferenceProfileResponse {
  /**
   * <p>The name of the inference profile.</p>
   * @public
   */
  inferenceProfileName: string | undefined;

  /**
   * <p>The description of the inference profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The time at which the inference profile was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time at which the inference profile was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the inference profile.</p>
   * @public
   */
  inferenceProfileArn: string | undefined;

  /**
   * <p>A list of information about each model in the inference profile.</p>
   * @public
   */
  models: InferenceProfileModel[] | undefined;

  /**
   * <p>The unique identifier of the inference profile.</p>
   * @public
   */
  inferenceProfileId: string | undefined;

  /**
   * <p>The status of the inference profile. <code>ACTIVE</code> means that the inference profile is ready to be used.</p>
   * @public
   */
  status: InferenceProfileStatus | undefined;

  /**
   * <p>The type of the inference profile. The following types are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SYSTEM_DEFINED</code> – The inference profile is defined by Amazon Bedrock. You can route inference requests across regions with these inference profiles.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPLICATION</code> – The inference profile was created by a user. This type of inference profile can track metrics and costs when invoking the model in it. The inference profile may route requests to one or multiple regions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type: InferenceProfileType | undefined;
}

/**
 * @public
 */
export interface ListInferenceProfilesRequest {
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
   * <p>Filters for inference profiles that match the type you specify.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SYSTEM_DEFINED</code> – The inference profile is defined by Amazon Bedrock. You can route inference requests across regions with these inference profiles.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPLICATION</code> – The inference profile was created by a user. This type of inference profile can track metrics and costs when invoking the model in it. The inference profile may route requests to one or multiple regions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  typeEquals?: InferenceProfileType | undefined;
}

/**
 * <p>Contains information about an inference profile.</p>
 * @public
 */
export interface InferenceProfileSummary {
  /**
   * <p>The name of the inference profile.</p>
   * @public
   */
  inferenceProfileName: string | undefined;

  /**
   * <p>The description of the inference profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The time at which the inference profile was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time at which the inference profile was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the inference profile.</p>
   * @public
   */
  inferenceProfileArn: string | undefined;

  /**
   * <p>A list of information about each model in the inference profile.</p>
   * @public
   */
  models: InferenceProfileModel[] | undefined;

  /**
   * <p>The unique identifier of the inference profile.</p>
   * @public
   */
  inferenceProfileId: string | undefined;

  /**
   * <p>The status of the inference profile. <code>ACTIVE</code> means that the inference profile is ready to be used.</p>
   * @public
   */
  status: InferenceProfileStatus | undefined;

  /**
   * <p>The type of the inference profile. The following types are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SYSTEM_DEFINED</code> – The inference profile is defined by Amazon Bedrock. You can route inference requests across regions with these inference profiles.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APPLICATION</code> – The inference profile was created by a user. This type of inference profile can track metrics and costs when invoking the model in it. The inference profile may route requests to one or multiple regions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type: InferenceProfileType | undefined;
}

/**
 * @public
 */
export interface ListInferenceProfilesResponse {
  /**
   * <p>A list of information about each inference profile that you can use.</p>
   * @public
   */
  inferenceProfileSummaries?: InferenceProfileSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
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
  keyPrefix?: string | undefined;
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
   * <p>The role Amazon Resource Name (ARN).</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>S3 configuration for delivering a large amount of data.</p>
   * @public
   */
  largeDataDeliveryS3Config?: S3Config | undefined;
}

/**
 * <p>Configuration fields for invocation logging.</p>
 * @public
 */
export interface LoggingConfig {
  /**
   * <p>CloudWatch logging configuration.</p>
   * @public
   */
  cloudWatchConfig?: CloudWatchConfig | undefined;

  /**
   * <p>S3 configuration for storing log data.</p>
   * @public
   */
  s3Config?: S3Config | undefined;

  /**
   * <p>Set to include text data in the log delivery.</p>
   * @public
   */
  textDataDeliveryEnabled?: boolean | undefined;

  /**
   * <p>Set to include image data in the log delivery.</p>
   * @public
   */
  imageDataDeliveryEnabled?: boolean | undefined;

  /**
   * <p>Set to include embeddings data in the log delivery.</p>
   * @public
   */
  embeddingDataDeliveryEnabled?: boolean | undefined;

  /**
   * <p>Set to include video data in the log delivery.</p>
   * @public
   */
  videoDataDeliveryEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface GetModelInvocationLoggingConfigurationResponse {
  /**
   * <p>The current configuration values.</p>
   * @public
   */
  loggingConfig?: LoggingConfig | undefined;
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
 * @public
 */
export interface CreateModelCopyJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the model to be copied.</p>
   * @public
   */
  sourceModelArn: string | undefined;

  /**
   * <p>A name for the copied model.</p>
   * @public
   */
  targetModelName: string | undefined;

  /**
   * <p>The ARN of the KMS key that you use to encrypt the model copy.</p>
   * @public
   */
  modelKmsKeyId?: string | undefined;

  /**
   * <p>Tags to associate with the target model. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tagging.html">Tag resources</a> in the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Amazon Bedrock User Guide</a>.</p>
   * @public
   */
  targetModelTags?: Tag[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateModelCopyJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model copy job.</p>
   * @public
   */
  jobArn: string | undefined;
}

/**
 * @public
 */
export interface GetModelCopyJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the model copy job.</p>
   * @public
   */
  jobArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelCopyJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
} as const;

/**
 * @public
 */
export type ModelCopyJobStatus = (typeof ModelCopyJobStatus)[keyof typeof ModelCopyJobStatus];

/**
 * @public
 */
export interface GetModelCopyJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model copy job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>The status of the model copy job.</p>
   * @public
   */
  status: ModelCopyJobStatus | undefined;

  /**
   * <p>The time at which the model copy job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the copied model.</p>
   * @public
   */
  targetModelArn: string | undefined;

  /**
   * <p>The name of the copied model.</p>
   * @public
   */
  targetModelName?: string | undefined;

  /**
   * <p>The unique identifier of the account that the model being copied originated from.</p>
   * @public
   */
  sourceAccountId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the original model being copied.</p>
   * @public
   */
  sourceModelArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key encrypting the copied model.</p>
   * @public
   */
  targetModelKmsKeyArn?: string | undefined;

  /**
   * <p>The tags associated with the copied model.</p>
   * @public
   */
  targetModelTags?: Tag[] | undefined;

  /**
   * <p>An error message for why the model copy job failed.</p>
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * <p>The name of the original model being copied.</p>
   * @public
   */
  sourceModelName?: string | undefined;
}

/**
 * @public
 */
export interface ListModelCopyJobsRequest {
  /**
   * <p>Filters for model copy jobs created after the specified time.</p>
   * @public
   */
  creationTimeAfter?: Date | undefined;

  /**
   * <p>Filters for model copy jobs created before the specified time. </p>
   * @public
   */
  creationTimeBefore?: Date | undefined;

  /**
   * <p>Filters for model copy jobs whose status matches the value that you specify.</p>
   * @public
   */
  statusEquals?: ModelCopyJobStatus | undefined;

  /**
   * <p>Filters for model copy jobs in which the account that the source model belongs to is equal to the value that you specify.</p>
   * @public
   */
  sourceAccountEquals?: string | undefined;

  /**
   * <p>Filters for model copy jobs in which the Amazon Resource Name (ARN) of the source model to is equal to the value that you specify.</p>
   * @public
   */
  sourceModelArnEquals?: string | undefined;

  /**
   * <p>Filters for model copy jobs in which the name of the copied model contains the string that you specify.</p>
   * @public
   */
  targetModelNameContains?: string | undefined;

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
   * <p>The field to sort by in the returned list of model copy jobs.</p>
   * @public
   */
  sortBy?: SortJobsBy | undefined;

  /**
   * <p>Specifies whether to sort the results in ascending or descending order.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * <p>Contains details about each model copy job.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListModelCopyJobs.html#API_ListModelCopyJobs_ResponseSyntax">ListModelCopyJobs response</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ModelCopyJobSummary {
  /**
   * <p>The Amazon Resoource Name (ARN) of the model copy job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>The status of the model copy job.</p>
   * @public
   */
  status: ModelCopyJobStatus | undefined;

  /**
   * <p>The time that the model copy job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the copied model.</p>
   * @public
   */
  targetModelArn: string | undefined;

  /**
   * <p>The name of the copied model.</p>
   * @public
   */
  targetModelName?: string | undefined;

  /**
   * <p>The unique identifier of the account that the model being copied originated from.</p>
   * @public
   */
  sourceAccountId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the original model being copied.</p>
   * @public
   */
  sourceModelArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the copied model.</p>
   * @public
   */
  targetModelKmsKeyArn?: string | undefined;

  /**
   * <p>Tags associated with the copied model.</p>
   * @public
   */
  targetModelTags?: Tag[] | undefined;

  /**
   * <p>If a model fails to be copied, a message describing why the job failed is included here.</p>
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * <p>The name of the original model being copied.</p>
   * @public
   */
  sourceModelName?: string | undefined;
}

/**
 * @public
 */
export interface ListModelCopyJobsResponse {
  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of information about each model copy job.</p>
   * @public
   */
  modelCopyJobSummaries?: ModelCopyJobSummary[] | undefined;
}

/**
 * <p>The Amazon S3 data source of the imported job.</p>
 * @public
 */
export interface S3DataSource {
  /**
   * <p>The URI of the Amazon S3 data source.</p>
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * <p>Data source for the imported model.</p>
 * @public
 */
export type ModelDataSource = ModelDataSource.S3DataSourceMember | ModelDataSource.$UnknownMember;

/**
 * @public
 */
export namespace ModelDataSource {
  /**
   * <p>The Amazon S3 data source of the imported model.</p>
   * @public
   */
  export interface S3DataSourceMember {
    s3DataSource: S3DataSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3DataSource?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3DataSource: (value: S3DataSource) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ModelDataSource, visitor: Visitor<T>): T => {
    if (value.s3DataSource !== undefined) return visitor.s3DataSource(value.s3DataSource);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateModelImportJobRequest {
  /**
   * <p>The name of the import job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The name of the imported model.</p>
   * @public
   */
  importedModelName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model import job.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The data source for the imported model.</p>
   * @public
   */
  modelDataSource: ModelDataSource | undefined;

  /**
   * <p>Tags to attach to this import job. </p>
   * @public
   */
  jobTags?: Tag[] | undefined;

  /**
   * <p>Tags to attach to the imported model.</p>
   * @public
   */
  importedModelTags?: Tag[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *         Amazon Bedrock ignores the request, but does not return an error. For more information,
   *         see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>VPC configuration parameters for the
   *         private Virtual Private Cloud (VPC) that contains the resources you are using for the import job.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>The imported model is encrypted at rest using this key.</p>
   * @public
   */
  importedModelKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateModelImportJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the model import job.</p>
   * @public
   */
  jobArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteImportedModelRequest {
  /**
   * <p>Name of the imported model to delete.</p>
   * @public
   */
  modelIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteImportedModelResponse {}

/**
 * @public
 */
export interface GetImportedModelRequest {
  /**
   * <p>Name or Amazon Resource Name (ARN) of the imported model.</p>
   * @public
   */
  modelIdentifier: string | undefined;
}

/**
 * <p>A <code>CustomModelUnit</code> (CMU) is an abstract view of the hardware utilization that
 *      Amazon Bedrock needs to host a single copy of your custom model. A model copy represents a
 *      single instance of your imported model that is ready to serve inference requests. Amazon Bedrock
 *      determines the number of custom model units that a model copy needs when you import the custom model.
 *  </p>
 *          <p>You can use <code>CustomModelUnits</code> to estimate the cost of running
 *      your custom model. For more information, see Calculate the cost of running a custom model in the
 *      Amazon Bedrock user guide.
 *  </p>
 * @public
 */
export interface CustomModelUnits {
  /**
   * <p>The number of custom model units used to host a model copy. </p>
   * @public
   */
  customModelUnitsPerModelCopy?: number | undefined;

  /**
   * <p>The version of the custom model unit. Use to determine the billing rate for the custom model unit.</p>
   * @public
   */
  customModelUnitsVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetImportedModelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) associated with this imported model.</p>
   * @public
   */
  modelArn?: string | undefined;

  /**
   * <p>The name of the imported model.</p>
   * @public
   */
  modelName?: string | undefined;

  /**
   * <p>Job name associated with the imported model.</p>
   * @public
   */
  jobName?: string | undefined;

  /**
   * <p>Job Amazon Resource Name (ARN) associated with the imported model.</p>
   * @public
   */
  jobArn?: string | undefined;

  /**
   * <p>The data source for this imported model.</p>
   * @public
   */
  modelDataSource?: ModelDataSource | undefined;

  /**
   * <p>Creation time of the imported model.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The architecture of the imported model.</p>
   * @public
   */
  modelArchitecture?: string | undefined;

  /**
   * <p>The imported model is encrypted at rest using this key.</p>
   * @public
   */
  modelKmsKeyArn?: string | undefined;

  /**
   * <p>Specifies if the imported model supports converse.</p>
   * @public
   */
  instructSupported?: boolean | undefined;

  /**
   * <p>Information about the hardware utilization for a single copy of the model.</p>
   * @public
   */
  customModelUnits?: CustomModelUnits | undefined;
}

/**
 * @public
 */
export interface GetModelImportJobRequest {
  /**
   * <p>The identifier of the import job.</p>
   * @public
   */
  jobIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelImportJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
} as const;

/**
 * @public
 */
export type ModelImportJobStatus = (typeof ModelImportJobStatus)[keyof typeof ModelImportJobStatus];

/**
 * @public
 */
export interface GetModelImportJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the import job.</p>
   * @public
   */
  jobArn?: string | undefined;

  /**
   * <p>The name of the import job.</p>
   * @public
   */
  jobName?: string | undefined;

  /**
   * <p>The name of the imported model.</p>
   * @public
   */
  importedModelName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the imported model.</p>
   * @public
   */
  importedModelArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with this job.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The data source for the imported model.</p>
   * @public
   */
  modelDataSource?: ModelDataSource | undefined;

  /**
   * <p>The status of the job. A successful job transitions from in-progress to completed when the imported model is ready to use.
   *         If the job failed, the failure message contains information about why the job failed.</p>
   * @public
   */
  status?: ModelImportJobStatus | undefined;

  /**
   * <p>Information about why the import job failed.</p>
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * <p>The time the resource was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>Time the resource was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * <p>Time that the resource transitioned to terminal state.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The Virtual Private Cloud (VPC) configuration of the import model job.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>The imported model is encrypted at rest using this key.</p>
   * @public
   */
  importedModelKmsKeyArn?: string | undefined;
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
 */
export interface ListImportedModelsRequest {
  /**
   * <p>Return imported models that created before the specified time.</p>
   * @public
   */
  creationTimeBefore?: Date | undefined;

  /**
   * <p>Return imported models that were created after the specified time.</p>
   * @public
   */
  creationTimeAfter?: Date | undefined;

  /**
   * <p>Return imported models only if the model name contains these characters.</p>
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
   * <p>The field to sort by in the returned list of imported models.</p>
   * @public
   */
  sortBy?: SortModelsBy | undefined;

  /**
   * <p>Specifies whetehr to sort the results in ascending or descending order.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * <p>Information about the imported model.</p>
 * @public
 */
export interface ImportedModelSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the imported model.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>Name of the imported model.</p>
   * @public
   */
  modelName: string | undefined;

  /**
   * <p>Creation time of the imported model.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>Specifies if the imported model supports converse.</p>
   * @public
   */
  instructSupported?: boolean | undefined;

  /**
   * <p>The architecture of the imported model.</p>
   * @public
   */
  modelArchitecture?: string | undefined;
}

/**
 * @public
 */
export interface ListImportedModelsResponse {
  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Model summaries.</p>
   * @public
   */
  modelSummaries?: ImportedModelSummary[] | undefined;
}

/**
 * @public
 */
export interface ListModelImportJobsRequest {
  /**
   * <p>Return import jobs that were created after the specified time.</p>
   * @public
   */
  creationTimeAfter?: Date | undefined;

  /**
   * <p>Return import jobs that were created before the specified time.</p>
   * @public
   */
  creationTimeBefore?: Date | undefined;

  /**
   * <p>Return imported jobs with the specified status.</p>
   * @public
   */
  statusEquals?: ModelImportJobStatus | undefined;

  /**
   * <p>Return imported jobs only if the job name contains these characters.</p>
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
   * <p>The field to sort by in the returned list of imported jobs.</p>
   * @public
   */
  sortBy?: SortJobsBy | undefined;

  /**
   * <p>Specifies whether to sort the results in ascending or descending order.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * <p>Information about the import job.</p>
 * @public
 */
export interface ModelImportJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the import job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>The name of the import job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The status of the imported job. </p>
   * @public
   */
  status: ModelImportJobStatus | undefined;

  /**
   * <p>The time when the import job was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * <p>The time import job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The time when import job ended.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The Amazon resource Name (ARN) of the imported model.</p>
   * @public
   */
  importedModelArn?: string | undefined;

  /**
   * <p>The name of the imported model.</p>
   * @public
   */
  importedModelName?: string | undefined;
}

/**
 * @public
 */
export interface ListModelImportJobsResponse {
  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Import job summaries.</p>
   * @public
   */
  modelImportJobSummaries?: ModelImportJobSummary[] | undefined;
}

/**
 * @public
 * @enum
 */
export const S3InputFormat = {
  JSONL: "JSONL",
} as const;

/**
 * @public
 */
export type S3InputFormat = (typeof S3InputFormat)[keyof typeof S3InputFormat];

/**
 * <p>Contains the configuration of the S3 location of the input data.</p>
 * @public
 */
export interface ModelInvocationJobS3InputDataConfig {
  /**
   * <p>The format of the input data.</p>
   * @public
   */
  s3InputFormat?: S3InputFormat | undefined;

  /**
   * <p>The S3 location of the input data.</p>
   * @public
   */
  s3Uri: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the S3 bucket containing the input data.</p>
   * @public
   */
  s3BucketOwner?: string | undefined;
}

/**
 * <p>Details about the location of the input to the batch inference job.</p>
 * @public
 */
export type ModelInvocationJobInputDataConfig =
  | ModelInvocationJobInputDataConfig.S3InputDataConfigMember
  | ModelInvocationJobInputDataConfig.$UnknownMember;

/**
 * @public
 */
export namespace ModelInvocationJobInputDataConfig {
  /**
   * <p>Contains the configuration of the S3 location of the input data.</p>
   * @public
   */
  export interface S3InputDataConfigMember {
    s3InputDataConfig: ModelInvocationJobS3InputDataConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3InputDataConfig?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3InputDataConfig: (value: ModelInvocationJobS3InputDataConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ModelInvocationJobInputDataConfig, visitor: Visitor<T>): T => {
    if (value.s3InputDataConfig !== undefined) return visitor.s3InputDataConfig(value.s3InputDataConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains the configuration of the S3 location of the output data.</p>
 * @public
 */
export interface ModelInvocationJobS3OutputDataConfig {
  /**
   * <p>The S3 location of the output data.</p>
   * @public
   */
  s3Uri: string | undefined;

  /**
   * <p>The unique identifier of the key that encrypts the S3 location of the output data.</p>
   * @public
   */
  s3EncryptionKeyId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the S3 bucket containing the output data.</p>
   * @public
   */
  s3BucketOwner?: string | undefined;
}

/**
 * <p>Contains the configuration of the S3 location of the output data.</p>
 * @public
 */
export type ModelInvocationJobOutputDataConfig =
  | ModelInvocationJobOutputDataConfig.S3OutputDataConfigMember
  | ModelInvocationJobOutputDataConfig.$UnknownMember;

/**
 * @public
 */
export namespace ModelInvocationJobOutputDataConfig {
  /**
   * <p>Contains the configuration of the S3 location of the output data.</p>
   * @public
   */
  export interface S3OutputDataConfigMember {
    s3OutputDataConfig: ModelInvocationJobS3OutputDataConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3OutputDataConfig?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3OutputDataConfig: (value: ModelInvocationJobS3OutputDataConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ModelInvocationJobOutputDataConfig, visitor: Visitor<T>): T => {
    if (value.s3OutputDataConfig !== undefined) return visitor.s3OutputDataConfig(value.s3OutputDataConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateModelInvocationJobRequest {
  /**
   * <p>A name to give the batch inference job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role with permissions to carry out and manage batch inference. You can use the console to create a default service role or follow the steps at <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/batch-iam-sr.html">Create a service role for batch inference</a>.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The unique identifier of the foundation model to use for the batch inference job.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>Details about the location of the input to the batch inference job.</p>
   * @public
   */
  inputDataConfig: ModelInvocationJobInputDataConfig | undefined;

  /**
   * <p>Details about the location of the output of the batch inference job.</p>
   * @public
   */
  outputDataConfig: ModelInvocationJobOutputDataConfig | undefined;

  /**
   * <p>The configuration of the Virtual Private Cloud (VPC) for the data in the batch inference job. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/batch-vpc">Protect batch inference jobs using a VPC</a>.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>The number of hours after which to force the batch inference job to time out.</p>
   * @public
   */
  timeoutDurationInHours?: number | undefined;

  /**
   * <p>Any tags to associate with the batch inference job. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tagging.html">Tagging Amazon Bedrock resources</a>.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateModelInvocationJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the batch inference job.</p>
   * @public
   */
  jobArn: string | undefined;
}

/**
 * @public
 */
export interface GetModelInvocationJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the batch inference job.</p>
   * @public
   */
  jobIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelInvocationJobStatus = {
  COMPLETED: "Completed",
  EXPIRED: "Expired",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PARTIALLY_COMPLETED: "PartiallyCompleted",
  SCHEDULED: "Scheduled",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
  SUBMITTED: "Submitted",
  VALIDATING: "Validating",
} as const;

/**
 * @public
 */
export type ModelInvocationJobStatus = (typeof ModelInvocationJobStatus)[keyof typeof ModelInvocationJobStatus];

/**
 * @public
 */
export interface GetModelInvocationJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the batch inference job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>The name of the batch inference job.</p>
   * @public
   */
  jobName?: string | undefined;

  /**
   * <p>The unique identifier of the foundation model used for model inference.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role with permissions to carry out and manage batch inference. You can use the console to create a default service role or follow the steps at <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/batch-iam-sr.html">Create a service role for batch inference</a>.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The status of the batch inference job.</p>
   *          <p>The following statuses are possible:</p>
   *          <ul>
   *             <li>
   *                <p>Submitted – This job has been submitted to a queue for validation.</p>
   *             </li>
   *             <li>
   *                <p>Validating – This job is being validated for the requirements described in <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference-data.html">Format and upload your batch inference data</a>. The criteria include the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>Your IAM service role has access to the Amazon S3 buckets containing your files.</p>
   *                   </li>
   *                   <li>
   *                      <p>Your files are .jsonl files and each individual record is a JSON object in the correct format. Note that validation doesn't check if the <code>modelInput</code> value matches the request body for the model.</p>
   *                   </li>
   *                   <li>
   *                      <p>Your files fulfill the requirements for file size and number of records. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/quotas.html">Quotas for Amazon Bedrock</a>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Scheduled – This job has been validated and is now in a queue. The job will automatically start when it reaches its turn.</p>
   *             </li>
   *             <li>
   *                <p>Expired – This job timed out because it was scheduled but didn't begin before the set timeout duration. Submit a new job request.</p>
   *             </li>
   *             <li>
   *                <p>InProgress – This job has begun. You can start viewing the results in the output S3 location.</p>
   *             </li>
   *             <li>
   *                <p>Completed – This job has successfully completed. View the output files in the output S3 location.</p>
   *             </li>
   *             <li>
   *                <p>PartiallyCompleted – This job has partially completed. Not all of your records could be processed in time. View the output files in the output S3 location.</p>
   *             </li>
   *             <li>
   *                <p>Failed – This job has failed. Check the failure message for any further details. For further assistance, reach out to the <a href="https://console.aws.amazon.com/support/home/">Amazon Web Services Support Center</a>.</p>
   *             </li>
   *             <li>
   *                <p>Stopped – This job was stopped by a user.</p>
   *             </li>
   *             <li>
   *                <p>Stopping – This job is being stopped by a user.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: ModelInvocationJobStatus | undefined;

  /**
   * <p>If the batch inference job failed, this field contains a message describing why the job failed.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The time at which the batch inference job was submitted.</p>
   * @public
   */
  submitTime: Date | undefined;

  /**
   * <p>The time at which the batch inference job was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * <p>The time at which the batch inference job ended.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>Details about the location of the input to the batch inference job.</p>
   * @public
   */
  inputDataConfig: ModelInvocationJobInputDataConfig | undefined;

  /**
   * <p>Details about the location of the output of the batch inference job.</p>
   * @public
   */
  outputDataConfig: ModelInvocationJobOutputDataConfig | undefined;

  /**
   * <p>The configuration of the Virtual Private Cloud (VPC) for the data in the batch inference job. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/batch-vpc">Protect batch inference jobs using a VPC</a>.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>The number of hours after which batch inference job was set to time out.</p>
   * @public
   */
  timeoutDurationInHours?: number | undefined;

  /**
   * <p>The time at which the batch inference job times or timed out.</p>
   * @public
   */
  jobExpirationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListModelInvocationJobsRequest {
  /**
   * <p>Specify a time to filter for batch inference jobs that were submitted after the time you specify.</p>
   * @public
   */
  submitTimeAfter?: Date | undefined;

  /**
   * <p>Specify a time to filter for batch inference jobs that were submitted before the time you specify.</p>
   * @public
   */
  submitTimeBefore?: Date | undefined;

  /**
   * <p>Specify a status to filter for batch inference jobs whose statuses match the string you specify.</p>
   *          <p>The following statuses are possible:</p>
   *          <ul>
   *             <li>
   *                <p>Submitted – This job has been submitted to a queue for validation.</p>
   *             </li>
   *             <li>
   *                <p>Validating – This job is being validated for the requirements described in <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference-data.html">Format and upload your batch inference data</a>. The criteria include the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>Your IAM service role has access to the Amazon S3 buckets containing your files.</p>
   *                   </li>
   *                   <li>
   *                      <p>Your files are .jsonl files and each individual record is a JSON object in the correct format. Note that validation doesn't check if the <code>modelInput</code> value matches the request body for the model.</p>
   *                   </li>
   *                   <li>
   *                      <p>Your files fulfill the requirements for file size and number of records. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/quotas.html">Quotas for Amazon Bedrock</a>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Scheduled – This job has been validated and is now in a queue. The job will automatically start when it reaches its turn.</p>
   *             </li>
   *             <li>
   *                <p>Expired – This job timed out because it was scheduled but didn't begin before the set timeout duration. Submit a new job request.</p>
   *             </li>
   *             <li>
   *                <p>InProgress – This job has begun. You can start viewing the results in the output S3 location.</p>
   *             </li>
   *             <li>
   *                <p>Completed – This job has successfully completed. View the output files in the output S3 location.</p>
   *             </li>
   *             <li>
   *                <p>PartiallyCompleted – This job has partially completed. Not all of your records could be processed in time. View the output files in the output S3 location.</p>
   *             </li>
   *             <li>
   *                <p>Failed – This job has failed. Check the failure message for any further details. For further assistance, reach out to the <a href="https://console.aws.amazon.com/support/home/">Amazon Web Services Support Center</a>.</p>
   *             </li>
   *             <li>
   *                <p>Stopped – This job was stopped by a user.</p>
   *             </li>
   *             <li>
   *                <p>Stopping – This job is being stopped by a user.</p>
   *             </li>
   *          </ul>
   * @public
   */
  statusEquals?: ModelInvocationJobStatus | undefined;

  /**
   * <p>Specify a string to filter for batch inference jobs whose names contain the string.</p>
   * @public
   */
  nameContains?: string | undefined;

  /**
   * <p>The maximum number of results to return. If there are more results than the number that you specify, a <code>nextToken</code> value is returned. Use the <code>nextToken</code> in a request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If there were more results than the value you specified
   *             in the <code>maxResults</code> field in a previous <code>ListModelInvocationJobs</code> request, the response would have returned a <code>nextToken</code>
   *             value. To see the next batch of results, send the
   *             <code>nextToken</code> value in another
   *             request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An attribute by which to sort the results.</p>
   * @public
   */
  sortBy?: SortJobsBy | undefined;

  /**
   * <p>Specifies whether to sort the results by ascending or descending order.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * <p>A summary of a batch inference job.</p>
 * @public
 */
export interface ModelInvocationJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the batch inference job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>The name of the batch inference job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The unique identifier of the foundation model used for model inference.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role with permissions to carry out and manage batch inference. You can use the console to create a default service role or follow the steps at <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/batch-iam-sr.html">Create a service role for batch inference</a>.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The status of the batch inference job.</p>
   *          <p>The following statuses are possible:</p>
   *          <ul>
   *             <li>
   *                <p>Submitted – This job has been submitted to a queue for validation.</p>
   *             </li>
   *             <li>
   *                <p>Validating – This job is being validated for the requirements described in <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference-data.html">Format and upload your batch inference data</a>. The criteria include the following:</p>
   *                <ul>
   *                   <li>
   *                      <p>Your IAM service role has access to the Amazon S3 buckets containing your files.</p>
   *                   </li>
   *                   <li>
   *                      <p>Your files are .jsonl files and each individual record is a JSON object in the correct format. Note that validation doesn't check if the <code>modelInput</code> value matches the request body for the model.</p>
   *                   </li>
   *                   <li>
   *                      <p>Your files fulfill the requirements for file size and number of records. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/quotas.html">Quotas for Amazon Bedrock</a>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Scheduled – This job has been validated and is now in a queue. The job will automatically start when it reaches its turn.</p>
   *             </li>
   *             <li>
   *                <p>Expired – This job timed out because it was scheduled but didn't begin before the set timeout duration. Submit a new job request.</p>
   *             </li>
   *             <li>
   *                <p>InProgress – This job has begun. You can start viewing the results in the output S3 location.</p>
   *             </li>
   *             <li>
   *                <p>Completed – This job has successfully completed. View the output files in the output S3 location.</p>
   *             </li>
   *             <li>
   *                <p>PartiallyCompleted – This job has partially completed. Not all of your records could be processed in time. View the output files in the output S3 location.</p>
   *             </li>
   *             <li>
   *                <p>Failed – This job has failed. Check the failure message for any further details. For further assistance, reach out to the <a href="https://console.aws.amazon.com/support/home/">Amazon Web Services Support Center</a>.</p>
   *             </li>
   *             <li>
   *                <p>Stopped – This job was stopped by a user.</p>
   *             </li>
   *             <li>
   *                <p>Stopping – This job is being stopped by a user.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: ModelInvocationJobStatus | undefined;

  /**
   * <p>If the batch inference job failed, this field contains a message describing why the job failed.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The time at which the batch inference job was submitted.</p>
   * @public
   */
  submitTime: Date | undefined;

  /**
   * <p>The time at which the batch inference job was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * <p>The time at which the batch inference job ended.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>Details about the location of the input to the batch inference job.</p>
   * @public
   */
  inputDataConfig: ModelInvocationJobInputDataConfig | undefined;

  /**
   * <p>Details about the location of the output of the batch inference job.</p>
   * @public
   */
  outputDataConfig: ModelInvocationJobOutputDataConfig | undefined;

  /**
   * <p>The configuration of the Virtual Private Cloud (VPC) for the data in the batch inference job. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/batch-vpc">Protect batch inference jobs using a VPC</a>.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>The number of hours after which the batch inference job was set to time out.</p>
   * @public
   */
  timeoutDurationInHours?: number | undefined;

  /**
   * <p>The time at which the batch inference job times or timed out.</p>
   * @public
   */
  jobExpirationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListModelInvocationJobsResponse {
  /**
   * <p>If there are more results than can fit in the response, a <code>nextToken</code> is returned. Use the <code>nextToken</code> in a request to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of items, each of which contains a summary about a batch inference job.</p>
   * @public
   */
  invocationJobSummaries?: ModelInvocationJobSummary[] | undefined;
}

/**
 * @public
 */
export interface StopModelInvocationJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the batch inference job to stop.</p>
   * @public
   */
  jobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopModelInvocationJobResponse {}

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
 * @public
 */
export interface GetCustomModelRequest {
  /**
   * <p>Name or Amazon Resource Name (ARN) of the custom model.</p>
   * @public
   */
  modelIdentifier: string | undefined;
}

/**
 * <p>Details about a teacher model used for model customization.</p>
 * @public
 */
export interface TeacherModelConfig {
  /**
   * <p>The identifier of the teacher model.</p>
   * @public
   */
  teacherModelIdentifier: string | undefined;

  /**
   * <p>The maximum number of tokens requested when the customization job invokes the teacher model.</p>
   * @public
   */
  maxResponseLengthForInference?: number | undefined;
}

/**
 * <p>Settings for distilling a foundation model into a smaller and more efficient model.</p>
 * @public
 */
export interface DistillationConfig {
  /**
   * <p>The teacher model configuration.</p>
   * @public
   */
  teacherModelConfig: TeacherModelConfig | undefined;
}

/**
 * <p>A model customization configuration</p>
 * @public
 */
export type CustomizationConfig = CustomizationConfig.DistillationConfigMember | CustomizationConfig.$UnknownMember;

/**
 * @public
 */
export namespace CustomizationConfig {
  /**
   * <p>The distillation configuration for the custom model.</p>
   * @public
   */
  export interface DistillationConfigMember {
    distillationConfig: DistillationConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    distillationConfig?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    distillationConfig: (value: DistillationConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CustomizationConfig, visitor: Visitor<T>): T => {
    if (value.distillationConfig !== undefined) return visitor.distillationConfig(value.distillationConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const CustomizationType = {
  CONTINUED_PRE_TRAINING: "CONTINUED_PRE_TRAINING",
  DISTILLATION: "DISTILLATION",
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
 * <p>A storage location for invocation logs.</p>
 * @public
 */
export type InvocationLogSource = InvocationLogSource.S3UriMember | InvocationLogSource.$UnknownMember;

/**
 * @public
 */
export namespace InvocationLogSource {
  /**
   * <p>The URI of an invocation log in a bucket.</p>
   * @public
   */
  export interface S3UriMember {
    s3Uri: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3Uri?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3Uri: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: InvocationLogSource, visitor: Visitor<T>): T => {
    if (value.s3Uri !== undefined) return visitor.s3Uri(value.s3Uri);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>A mapping of a metadata key to a value that it should or should not equal.</p>
 * @public
 */
export interface RequestMetadataBaseFilters {
  /**
   * <p>Include results where the key equals the value.</p>
   * @public
   */
  equals?: Record<string, string> | undefined;

  /**
   * <p>Include results where the key does not equal the value.</p>
   * @public
   */
  notEquals?: Record<string, string> | undefined;
}

/**
 * <p>Rules for filtering invocation logs. A filter can be a mapping of a metadata
 *     key to a value that it should or should not equal (a base filter), or a list of base filters
 *     that are all applied with <code>AND</code> or <code>OR</code> logical operators</p>
 * @public
 */
export type RequestMetadataFilters =
  | RequestMetadataFilters.AndAllMember
  | RequestMetadataFilters.EqualsMember
  | RequestMetadataFilters.NotEqualsMember
  | RequestMetadataFilters.OrAllMember
  | RequestMetadataFilters.$UnknownMember;

/**
 * @public
 */
export namespace RequestMetadataFilters {
  /**
   * <p>Include results where the key equals the value.</p>
   * @public
   */
  export interface EqualsMember {
    equals: Record<string, string>;
    notEquals?: never;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Include results where the key does not equal the value.</p>
   * @public
   */
  export interface NotEqualsMember {
    equals?: never;
    notEquals: Record<string, string>;
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Include results where all of the based filters match.</p>
   * @public
   */
  export interface AndAllMember {
    equals?: never;
    notEquals?: never;
    andAll: RequestMetadataBaseFilters[];
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Include results where any of the base filters match.</p>
   * @public
   */
  export interface OrAllMember {
    equals?: never;
    notEquals?: never;
    andAll?: never;
    orAll: RequestMetadataBaseFilters[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    equals?: never;
    notEquals?: never;
    andAll?: never;
    orAll?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    equals: (value: Record<string, string>) => T;
    notEquals: (value: Record<string, string>) => T;
    andAll: (value: RequestMetadataBaseFilters[]) => T;
    orAll: (value: RequestMetadataBaseFilters[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RequestMetadataFilters, visitor: Visitor<T>): T => {
    if (value.equals !== undefined) return visitor.equals(value.equals);
    if (value.notEquals !== undefined) return visitor.notEquals(value.notEquals);
    if (value.andAll !== undefined) return visitor.andAll(value.andAll);
    if (value.orAll !== undefined) return visitor.orAll(value.orAll);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Settings for using invocation logs to customize a model.</p>
 * @public
 */
export interface InvocationLogsConfig {
  /**
   * <p>Whether to use the model's response for training, or just the prompt. The default value is <code>False</code>.</p>
   * @public
   */
  usePromptResponse?: boolean | undefined;

  /**
   * <p>The source of the invocation logs.</p>
   * @public
   */
  invocationLogSource: InvocationLogSource | undefined;

  /**
   * <p>Rules for filtering invocation logs based on request metadata.</p>
   * @public
   */
  requestMetadataFilters?: RequestMetadataFilters | undefined;
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
  s3Uri?: string | undefined;

  /**
   * <p>Settings for using invocation logs to customize a model.</p>
   * @public
   */
  invocationLogsConfig?: InvocationLogsConfig | undefined;
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
  trainingLoss?: number | undefined;
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
  validationLoss?: number | undefined;
}

/**
 * @public
 */
export interface GetCustomModelResponse {
  /**
   * <p>Amazon Resource Name (ARN) associated with this model.</p>
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
  jobName?: string | undefined;

  /**
   * <p>Job Amazon Resource Name (ARN) associated with this model.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the base model.</p>
   * @public
   */
  baseModelArn: string | undefined;

  /**
   * <p>The type of model customization.</p>
   * @public
   */
  customizationType?: CustomizationType | undefined;

  /**
   * <p>The custom model is encrypted at rest using this key.</p>
   * @public
   */
  modelKmsKeyArn?: string | undefined;

  /**
   * <p>Hyperparameter values associated with this model. For details on the format for different models, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models-hp.html">Custom model hyperparameters</a>.</p>
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
  validationDataConfig?: ValidationDataConfig | undefined;

  /**
   * <p>Output data configuration associated with this custom model.</p>
   * @public
   */
  outputDataConfig: OutputDataConfig | undefined;

  /**
   * <p>Contains training metrics from the job creation.</p>
   * @public
   */
  trainingMetrics?: TrainingMetrics | undefined;

  /**
   * <p>The validation metrics from the job creation.</p>
   * @public
   */
  validationMetrics?: ValidatorMetric[] | undefined;

  /**
   * <p>Creation time of the model.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The customization configuration for the custom model.</p>
   * @public
   */
  customizationConfig?: CustomizationConfig | undefined;
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
  DISTILLATION: "DISTILLATION",
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
   * <p>The model Amazon Resource Name (ARN).</p>
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
  modelName?: string | undefined;

  /**
   * <p>The model's provider name.</p>
   * @public
   */
  providerName?: string | undefined;

  /**
   * <p>The input modalities that the model supports.</p>
   * @public
   */
  inputModalities?: ModelModality[] | undefined;

  /**
   * <p>The output modalities that the model supports.</p>
   * @public
   */
  outputModalities?: ModelModality[] | undefined;

  /**
   * <p>Indicates whether the model supports streaming.</p>
   * @public
   */
  responseStreamingSupported?: boolean | undefined;

  /**
   * <p>The customization that the model supports.</p>
   * @public
   */
  customizationsSupported?: ModelCustomization[] | undefined;

  /**
   * <p>The inference types that the model supports.</p>
   * @public
   */
  inferenceTypesSupported?: InferenceType[] | undefined;

  /**
   * <p>Contains details about whether a model version is available or deprecated</p>
   * @public
   */
  modelLifecycle?: FoundationModelLifecycle | undefined;
}

/**
 * @public
 */
export interface GetFoundationModelResponse {
  /**
   * <p>Information about the foundation model.</p>
   * @public
   */
  modelDetails?: FoundationModelDetails | undefined;
}

/**
 * @public
 */
export interface ListCustomModelsRequest {
  /**
   * <p>Return custom models created before the specified time. </p>
   * @public
   */
  creationTimeBefore?: Date | undefined;

  /**
   * <p>Return custom models created after the specified time. </p>
   * @public
   */
  creationTimeAfter?: Date | undefined;

  /**
   * <p>Return custom models only if the job name contains these characters.</p>
   * @public
   */
  nameContains?: string | undefined;

  /**
   * <p>Return custom models only if the base model Amazon Resource Name (ARN) matches this parameter.</p>
   * @public
   */
  baseModelArnEquals?: string | undefined;

  /**
   * <p>Return custom models only if the foundation model Amazon Resource Name (ARN) matches this parameter.</p>
   * @public
   */
  foundationModelArnEquals?: string | undefined;

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
   * <p>The field to sort by in the returned list of models.</p>
   * @public
   */
  sortBy?: SortModelsBy | undefined;

  /**
   * <p>The sort order of the results.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>Return custom models depending on if the current account owns them (<code>true</code>) or if they were shared with the current account (<code>false</code>).</p>
   * @public
   */
  isOwned?: boolean | undefined;
}

/**
 * <p>Summary information for a custom model.</p>
 * @public
 */
export interface CustomModelSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom model.</p>
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
   * <p>The base model Amazon Resource Name (ARN).</p>
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
  customizationType?: CustomizationType | undefined;

  /**
   * <p>The unique identifier of the account that owns the model.</p>
   * @public
   */
  ownerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomModelsResponse {
  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Model summaries.</p>
   * @public
   */
  modelSummaries?: CustomModelSummary[] | undefined;
}

/**
 * @public
 */
export interface ListFoundationModelsRequest {
  /**
   * <p>Return models belonging to the model provider that you specify.</p>
   * @public
   */
  byProvider?: string | undefined;

  /**
   * <p>Return models that support the customization type that you specify. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html">Custom models</a> in the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Amazon Bedrock User Guide</a>.</p>
   * @public
   */
  byCustomizationType?: ModelCustomization | undefined;

  /**
   * <p>Return models that support the output modality that you specify.</p>
   * @public
   */
  byOutputModality?: ModelModality | undefined;

  /**
   * <p>Return models that support the inference type that you specify. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html">Provisioned Throughput</a> in the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Amazon Bedrock User Guide</a>.</p>
   * @public
   */
  byInferenceType?: InferenceType | undefined;
}

/**
 * <p>Summary information for a foundation model.</p>
 * @public
 */
export interface FoundationModelSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the foundation model.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>The model ID of the foundation model.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The name of the model.</p>
   * @public
   */
  modelName?: string | undefined;

  /**
   * <p>The model's provider name.</p>
   * @public
   */
  providerName?: string | undefined;

  /**
   * <p>The input modalities that the model supports.</p>
   * @public
   */
  inputModalities?: ModelModality[] | undefined;

  /**
   * <p>The output modalities that the model supports.</p>
   * @public
   */
  outputModalities?: ModelModality[] | undefined;

  /**
   * <p>Indicates whether the model supports streaming.</p>
   * @public
   */
  responseStreamingSupported?: boolean | undefined;

  /**
   * <p>Whether the model supports fine-tuning or continual pre-training.</p>
   * @public
   */
  customizationsSupported?: ModelCustomization[] | undefined;

  /**
   * <p>The inference types that the model supports.</p>
   * @public
   */
  inferenceTypesSupported?: InferenceType[] | undefined;

  /**
   * <p>Contains details about whether a model version is available or deprecated.</p>
   * @public
   */
  modelLifecycle?: FoundationModelLifecycle | undefined;
}

/**
 * @public
 */
export interface ListFoundationModelsResponse {
  /**
   * <p>A list of Amazon Bedrock foundation models.</p>
   * @public
   */
  modelSummaries?: FoundationModelSummary[] | undefined;
}

/**
 * <p>The target model for a prompt router.</p>
 * @public
 */
export interface PromptRouterTargetModel {
  /**
   * <p>The target model's ARN.</p>
   * @public
   */
  modelArn: string | undefined;
}

/**
 * <p>Routing criteria for a prompt router.</p>
 * @public
 */
export interface RoutingCriteria {
  /**
   * <p>The criteria's response quality difference.</p>
   * @public
   */
  responseQualityDifference: number | undefined;
}

/**
 * @public
 */
export interface CreatePromptRouterRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure idempotency of your requests. If not specified, the Amazon Web Services SDK
   *             automatically generates one for you.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The name of the prompt router. The name must be unique within your Amazon Web Services account in the current region.</p>
   * @public
   */
  promptRouterName: string | undefined;

  /**
   * <p>A list of foundation models that the prompt router can route requests to. At least one model must be specified.</p>
   * @public
   */
  models: PromptRouterTargetModel[] | undefined;

  /**
   * <p>An optional description of the prompt router to help identify its purpose.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The criteria, which is the response quality difference, used to determine how incoming requests are routed to different models.</p>
   * @public
   */
  routingCriteria: RoutingCriteria | undefined;

  /**
   * <p>The default model to use when the routing criteria is not met.</p>
   * @public
   */
  fallbackModel: PromptRouterTargetModel | undefined;

  /**
   * <p>An array of key-value pairs to apply to this resource as tags. You can use tags to categorize and manage your Amazon Web Services resources.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreatePromptRouterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the prompt router.</p>
   * @public
   */
  promptRouterArn?: string | undefined;
}

/**
 * @public
 */
export interface DeletePromptRouterRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the prompt router to delete.</p>
   * @public
   */
  promptRouterArn: string | undefined;
}

/**
 * @public
 */
export interface DeletePromptRouterResponse {}

/**
 * @public
 */
export interface GetPromptRouterRequest {
  /**
   * <p>The prompt router's ARN</p>
   * @public
   */
  promptRouterArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PromptRouterStatus = {
  AVAILABLE: "AVAILABLE",
} as const;

/**
 * @public
 */
export type PromptRouterStatus = (typeof PromptRouterStatus)[keyof typeof PromptRouterStatus];

/**
 * @public
 * @enum
 */
export const PromptRouterType = {
  CUSTOM: "custom",
  DEFAULT: "default",
} as const;

/**
 * @public
 */
export type PromptRouterType = (typeof PromptRouterType)[keyof typeof PromptRouterType];

/**
 * @public
 */
export interface GetPromptRouterResponse {
  /**
   * <p>The router's name.</p>
   * @public
   */
  promptRouterName: string | undefined;

  /**
   * <p>The router's routing criteria.</p>
   * @public
   */
  routingCriteria: RoutingCriteria | undefined;

  /**
   * <p>The router's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>When the router was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>When the router was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The prompt router's ARN</p>
   * @public
   */
  promptRouterArn: string | undefined;

  /**
   * <p>The router's models.</p>
   * @public
   */
  models: PromptRouterTargetModel[] | undefined;

  /**
   * <p>The router's fallback model.</p>
   * @public
   */
  fallbackModel: PromptRouterTargetModel | undefined;

  /**
   * <p>The router's status.</p>
   * @public
   */
  status: PromptRouterStatus | undefined;

  /**
   * <p>The router's type.</p>
   * @public
   */
  type: PromptRouterType | undefined;
}

/**
 * @public
 */
export interface ListPromptRoutersRequest {
  /**
   * <p>The maximum number of prompt routers to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The type of the prompt routers, such as whether it's default or custom.</p>
   * @public
   */
  type?: PromptRouterType | undefined;
}

/**
 * <p>Details about a prompt router.</p>
 * @public
 */
export interface PromptRouterSummary {
  /**
   * <p>The router's name.</p>
   * @public
   */
  promptRouterName: string | undefined;

  /**
   * <p>The router's routing criteria.</p>
   * @public
   */
  routingCriteria: RoutingCriteria | undefined;

  /**
   * <p>The router's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>When the router was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>When the router was updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The router's ARN.</p>
   * @public
   */
  promptRouterArn: string | undefined;

  /**
   * <p>The router's models.</p>
   * @public
   */
  models: PromptRouterTargetModel[] | undefined;

  /**
   * <p>The router's fallback model.</p>
   * @public
   */
  fallbackModel: PromptRouterTargetModel | undefined;

  /**
   * <p>The router's status.</p>
   * @public
   */
  status: PromptRouterStatus | undefined;

  /**
   * <p>The summary's type.</p>
   * @public
   */
  type: PromptRouterType | undefined;
}

/**
 * @public
 */
export interface ListPromptRoutersResponse {
  /**
   * <p>A list of prompt router summaries.</p>
   * @public
   */
  promptRouterSummaries?: PromptRouterSummary[] | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
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
 * @public
 */
export interface CreateProvisionedModelThroughputRequest {
  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *          Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a> in the Amazon S3 User Guide.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>Number of model units to allocate. A model unit delivers a specific throughput level for the specified model. The throughput level of a model unit specifies the total number of input and output tokens that it can process and generate within a span of one minute. By default, your account has no model units for purchasing Provisioned Throughputs with commitment. You must first visit the <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase">Amazon Web Services support center</a> to request MUs.</p>
   *          <p>For model unit quotas, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/quotas.html#prov-thru-quotas">Provisioned Throughput quotas</a> in the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Amazon Bedrock User Guide</a>.</p>
   *          <p>For more information about what an MU specifies, contact your Amazon Web Services account manager.</p>
   * @public
   */
  modelUnits: number | undefined;

  /**
   * <p>The name for this Provisioned Throughput.</p>
   * @public
   */
  provisionedModelName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) or name of the model to associate with this Provisioned Throughput. For a list of models for which you can purchase Provisioned Throughput, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#prov-throughput-models">Amazon Bedrock model IDs for purchasing Provisioned Throughput</a> in the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Amazon Bedrock User Guide</a>.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The commitment duration requested for the Provisioned Throughput. Billing occurs hourly and is discounted for longer commitment terms. To request a no-commit Provisioned Throughput, omit this field.</p>
   *          <p>Custom models support all levels of commitment. To see which base models support no commitment, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/pt-supported.html">Supported regions and models for Provisioned Throughput</a> in the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Amazon Bedrock User Guide</a>
   *          </p>
   * @public
   */
  commitmentDuration?: CommitmentDuration | undefined;

  /**
   * <p>Tags to associate with this Provisioned Throughput.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateProvisionedModelThroughputResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for this Provisioned Throughput.</p>
   * @public
   */
  provisionedModelArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteProvisionedModelThroughputRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or name of the Provisioned Throughput.</p>
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
   * <p>The Amazon Resource Name (ARN) or name of the Provisioned Throughput.</p>
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
   * <p>The number of model units allocated to this Provisioned Throughput.</p>
   * @public
   */
  modelUnits: number | undefined;

  /**
   * <p>The number of model units that was requested for this Provisioned Throughput.</p>
   * @public
   */
  desiredModelUnits: number | undefined;

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
   * <p>The Amazon Resource Name (ARN) of the model associated with this Provisioned Throughput.</p>
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
   * <p>The status of the Provisioned Throughput. </p>
   * @public
   */
  status: ProvisionedModelStatus | undefined;

  /**
   * <p>The timestamp of the creation time for this Provisioned Throughput. </p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The timestamp of the last time that this Provisioned Throughput was modified. </p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>A failure message for any issues that occurred during creation, updating, or deletion of the Provisioned Throughput.</p>
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * <p>Commitment duration of the Provisioned Throughput.</p>
   * @public
   */
  commitmentDuration?: CommitmentDuration | undefined;

  /**
   * <p>The timestamp for when the commitment term for the Provisioned Throughput expires.</p>
   * @public
   */
  commitmentExpirationTime?: Date | undefined;
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
   * <p>A filter that returns Provisioned Throughputs created after the specified time. </p>
   * @public
   */
  creationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that returns Provisioned Throughputs created before the specified time. </p>
   * @public
   */
  creationTimeBefore?: Date | undefined;

  /**
   * <p>A filter that returns Provisioned Throughputs if their statuses matches the value that you specify.</p>
   * @public
   */
  statusEquals?: ProvisionedModelStatus | undefined;

  /**
   * <p>A filter that returns Provisioned Throughputs whose model Amazon Resource Name (ARN) is equal to the value that you specify.</p>
   * @public
   */
  modelArnEquals?: string | undefined;

  /**
   * <p>A filter that returns Provisioned Throughputs if their name contains the expression that you specify.</p>
   * @public
   */
  nameContains?: string | undefined;

  /**
   * <p>THe maximum number of results to return in the response. If there are more results than the number you specified, the response returns a <code>nextToken</code>
   *          value. To see the next batch of results, send the <code>nextToken</code> value in another list request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If there are more results than the number you specified in the <code>maxResults</code> field, the response returns a <code>nextToken</code>
   *          value. To see the next batch of results, specify the <code>nextToken</code> value in this field.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The field by which to sort the returned list of Provisioned Throughputs.</p>
   * @public
   */
  sortBy?: SortByProvisionedModels | undefined;

  /**
   * <p>The sort order of the results.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * <p>A summary of information about a Provisioned Throughput.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_ListProvisionedModelThroughputs.html#API_ListProvisionedModelThroughputs_ResponseSyntax">ListProvisionedThroughputs response</a>
 *                </p>
 *             </li>
 *          </ul>
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
   * <p>The Amazon Resource Name (ARN) of the new model to associate with this Provisioned Throughput. You can't specify this field if this Provisioned Throughput is associated with a base model.</p>
   *          <p>If this Provisioned Throughput is associated with a custom model, you can specify one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>The base model from which the custom model was customized.</p>
   *             </li>
   *             <li>
   *                <p>Another custom model that was customized from the same base model as the custom model.</p>
   *             </li>
   *          </ul>
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
   * <p>The Amazon Resource Name (ARN) of an IAM service role that Amazon Bedrock can assume to perform tasks on your behalf.
   *          For example, during model training, Amazon Bedrock needs your permission to read input data from an S3 bucket, write model artifacts to an S3 bucket.
   *          To pass this role to Amazon Bedrock, the caller of this API must have the <code>iam:PassRole</code> permission.
   *       </p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *          Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
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
   * <p>The status of the job. A successful job transitions from in-progress to completed when the output model is ready to use.
   *       If the job failed, the failure message contains information about why the job failed.</p>
   * @public
   */
  status?: ModelCustomizationJobStatus | undefined;

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
 * <p>Specifies the filters to use on the metadata attributes/fields in the knowledge base data
 *             sources before returning results.</p>
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
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose
   *             name matches the key and whose value matches the value in this object.</p>
   *          <p>The following example would return data sources with an animal attribute whose value is 'cat':
   *             <code>"equals": \{ "key": "animal", "value": "cat" \}</code>
   *          </p>
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
   * <p>Knowledge base data sources that contain a metadata attribute whose name matches the key and whose value
   *             doesn't match the value in this object are returned.</p>
   *          <p>The following example would return data sources that don't contain an animal attribute whose value is 'cat':
   *             <code>"notEquals": \{ "key": "animal", "value": "cat" \}</code>
   *          </p>
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
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name
   *             matches the key and whose value is greater than the value in this object.</p>
   *          <p>The following example would return data sources with an year attribute whose value is
   *             greater than '1989': <code>"greaterThan": \{ "key": "year", "value": 1989 \}</code>
   *          </p>
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
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name
   *             matches the key and whose value is greater than or equal to the value in this object.</p>
   *          <p>The following example would return data sources with an year attribute whose value is
   *             greater than or equal to '1989': <code>"greaterThanOrEquals": \{ "key": "year", "value": 1989 \}</code>
   *          </p>
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
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the
   *             key and whose value is less than the value in this object.</p>
   *          <p>The following example would return data sources with an year attribute whose value is less than to '1989':
   *             <code>"lessThan": \{ "key": "year", "value": 1989 \}</code>
   *          </p>
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
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key
   *             and whose value is less than or equal to the value in this object.</p>
   *          <p>The following example would return data sources with an year attribute whose value is less than or equal
   *             to '1989': <code>"lessThanOrEquals": \{ "key": "year", "value": 1989 \}</code>
   *          </p>
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
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose
   *             name matches the key and whose value is in the list specified in the value in this object.</p>
   *          <p>The following example would return data sources with an animal attribute that is either 'cat' or 'dog':
   *             <code>"in": \{ "key": "animal", "value": ["cat", "dog"] \}</code>
   *          </p>
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
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key
   *             and whose value isn't in the list specified in the value in this object.</p>
   *          <p>The following example would return data sources whose animal attribute is neither 'cat' nor 'dog':
   *             <code>"notIn": \{ "key": "animal", "value": ["cat", "dog"] \}</code>
   *          </p>
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
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key
   *             and whose value starts with the value in this object. This filter is currently only supported for
   *             Amazon OpenSearch Serverless vector stores.</p>
   *          <p>The following example would return data sources with an animal attribute starts with 'ca' (for example, 'cat' or 'camel').
   *             <code>"startsWith": \{ "key": "animal", "value": "ca" \}</code>
   *          </p>
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
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key
   *             and whose value is a list that contains the value as one of its members.</p>
   *          <p>The following example would return data sources with an animals attribute that is a list containing a cat
   *             member (for example, <code>["dog", "cat"]</code>): <code>"listContains": \{ "key": "animals", "value": "cat" \}</code>
   *          </p>
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
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the key
   *             and whose value is one of the following:</p>
   *          <p>A string that contains the value as a substring. The following example would return data sources with an
   *             animal attribute that contains the substring at (for example, 'cat'):
   *             <code>"stringContains": \{ "key": "animal", "value": "at" \}</code>
   *          </p>
   *          <p>A list with a member that contains the value as a substring. The following example would return data
   *             sources with an animals attribute that is a list containing a member that contains the substring at
   *             (for example, <code>["dog", "cat"]</code>): <code>"stringContains": \{ "key": "animals", "value": "at" \}</code>
   *          </p>
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
   * <p>Knowledge base data sources are returned if their metadata attributes fulfill all the
   *             filter conditions inside this list.</p>
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
   * <p>Knowledge base data sources are returned if their metadata attributes fulfill at least one of the filter
   *             conditions inside this list.</p>
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
   * <p>By default, Amazon Bedrock decides a search strategy for you. If you're using an
   *             Amazon OpenSearch Serverless vector store that contains a filterable text field, you
   *             can specify whether to query the knowledge base with a <code>HYBRID</code> search
   *             using both vector embeddings and raw text, or <code>SEMANTIC</code> search using
   *             only vector embeddings. For other vector store configurations, only <code>SEMANTIC</code>
   *             search is available.</p>
   * @public
   */
  overrideSearchType?: SearchType | undefined;

  /**
   * <p>Specifies the filters to use on the metadata fields in the knowledge base data sources before returning results.</p>
   * @public
   */
  filter?: RetrievalFilter | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the foundation model or <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">inference profile</a>
   *             used to generate responses.</p>
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
   * <p>The type of resource that contains your data for retrieving information and generating responses.</p>
   *          <p>If you choose to use <code>EXTERNAL_SOURCES</code>, then currently only Claude 3 Sonnet models for knowledge bases are supported.</p>
   * @public
   */
  type: RetrieveAndGenerateType | undefined;

  /**
   * <p>Contains configuration details for the knowledge base retrieval and response generation.</p>
   * @public
   */
  knowledgeBaseConfiguration?: KnowledgeBaseRetrieveAndGenerateConfiguration | undefined;

  /**
   * <p>The configuration for the external source wrapper object in the
   *             <code>retrieveAndGenerate</code> function.</p>
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
 * <p>The configuration details of the inference model for an evaluation job.</p>
 *          <p>For automated model evaluation jobs, only a single model is supported.</p>
 *          <p>For human-based model evaluation jobs, your annotator can compare the responses for up to two different models.</p>
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
   * <p>Contains the configuration details of the inference for a knowledge base evaluation
   *          job, including either the retrieval only configuration or the retrieval with response
   *          generation configuration.</p>
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
   * <p>A name for the evaluation job. Names must unique with your Amazon Web Services account,
   *          and your account's Amazon Web Services region.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>A description of the evaluation job.</p>
   * @public
   */
  jobDescription?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM service role that Amazon Bedrock can
   *          assume to perform tasks on your behalf. To learn more about the required permissions,
   *          see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-security.html">Required
   *             permissions for model evaluations</a>.</p>
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
   * <p>Specifies whether the evaluation job is for evaluating a model or evaluating a knowledge base
   *          (retrieval and response generation).</p>
   * @public
   */
  applicationType?: ApplicationType | undefined;

  /**
   * <p>Contains the configuration details of either an automated or human-based evaluation job.</p>
   * @public
   */
  evaluationConfig: EvaluationConfig | undefined;

  /**
   * <p>Contains the configuration details of the inference model for the evaluation job.</p>
   *          <p>For model evaluation jobs, automated jobs support a single model or
   *          <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">inference profile</a>, and jobs that use human workers support
   *          two models or inference profiles.</p>
   * @public
   */
  inferenceConfig: EvaluationInferenceConfig | undefined;

  /**
   * <p>Contains the configuration details of the Amazon S3 bucket for storing the results
   *          of the evaluation job.</p>
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
   * <p>Contains the configuration details of the Amazon S3 bucket for
   *          storing the results of the evaluation job.</p>
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
export const BatchDeleteEvaluationJobRequestFilterSensitiveLog = (obj: BatchDeleteEvaluationJobRequest): any => ({
  ...obj,
  ...(obj.jobIdentifiers && { jobIdentifiers: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchDeleteEvaluationJobErrorFilterSensitiveLog = (obj: BatchDeleteEvaluationJobError): any => ({
  ...obj,
  ...(obj.jobIdentifier && { jobIdentifier: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchDeleteEvaluationJobItemFilterSensitiveLog = (obj: BatchDeleteEvaluationJobItem): any => ({
  ...obj,
  ...(obj.jobIdentifier && { jobIdentifier: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchDeleteEvaluationJobResponseFilterSensitiveLog = (obj: BatchDeleteEvaluationJobResponse): any => ({
  ...obj,
  ...(obj.errors && { errors: obj.errors.map((item) => BatchDeleteEvaluationJobErrorFilterSensitiveLog(item)) }),
  ...(obj.evaluationJobs && {
    evaluationJobs: obj.evaluationJobs.map((item) => BatchDeleteEvaluationJobItemFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const EvaluationDatasetFilterSensitiveLog = (obj: EvaluationDataset): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.datasetLocation && { datasetLocation: obj.datasetLocation }),
});

/**
 * @internal
 */
export const EvaluationDatasetMetricConfigFilterSensitiveLog = (obj: EvaluationDatasetMetricConfig): any => ({
  ...obj,
  ...(obj.dataset && { dataset: EvaluationDatasetFilterSensitiveLog(obj.dataset) }),
  ...(obj.metricNames && { metricNames: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedEvaluationConfigFilterSensitiveLog = (obj: AutomatedEvaluationConfig): any => ({
  ...obj,
  ...(obj.datasetMetricConfigs && {
    datasetMetricConfigs: obj.datasetMetricConfigs.map((item) => EvaluationDatasetMetricConfigFilterSensitiveLog(item)),
  }),
  ...(obj.evaluatorModelConfig && { evaluatorModelConfig: obj.evaluatorModelConfig }),
});

/**
 * @internal
 */
export const HumanEvaluationCustomMetricFilterSensitiveLog = (obj: HumanEvaluationCustomMetric): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const HumanWorkflowConfigFilterSensitiveLog = (obj: HumanWorkflowConfig): any => ({
  ...obj,
  ...(obj.instructions && { instructions: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const HumanEvaluationConfigFilterSensitiveLog = (obj: HumanEvaluationConfig): any => ({
  ...obj,
  ...(obj.humanWorkflowConfig && {
    humanWorkflowConfig: HumanWorkflowConfigFilterSensitiveLog(obj.humanWorkflowConfig),
  }),
  ...(obj.customMetrics && {
    customMetrics: obj.customMetrics.map((item) => HumanEvaluationCustomMetricFilterSensitiveLog(item)),
  }),
  ...(obj.datasetMetricConfigs && {
    datasetMetricConfigs: obj.datasetMetricConfigs.map((item) => EvaluationDatasetMetricConfigFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const EvaluationConfigFilterSensitiveLog = (obj: EvaluationConfig): any => {
  if (obj.automated !== undefined) return { automated: AutomatedEvaluationConfigFilterSensitiveLog(obj.automated) };
  if (obj.human !== undefined) return { human: HumanEvaluationConfigFilterSensitiveLog(obj.human) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const EvaluationBedrockModelFilterSensitiveLog = (obj: EvaluationBedrockModel): any => ({
  ...obj,
  ...(obj.inferenceParams && { inferenceParams: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EvaluationModelConfigFilterSensitiveLog = (obj: EvaluationModelConfig): any => {
  if (obj.bedrockModel !== undefined)
    return { bedrockModel: EvaluationBedrockModelFilterSensitiveLog(obj.bedrockModel) };
  if (obj.precomputedInferenceSource !== undefined)
    return { precomputedInferenceSource: obj.precomputedInferenceSource };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const PromptTemplateFilterSensitiveLog = (obj: PromptTemplate): any => ({
  ...obj,
  ...(obj.textPromptTemplate && { textPromptTemplate: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ExternalSourcesGenerationConfigurationFilterSensitiveLog = (
  obj: ExternalSourcesGenerationConfiguration
): any => ({
  ...obj,
  ...(obj.promptTemplate && { promptTemplate: PromptTemplateFilterSensitiveLog(obj.promptTemplate) }),
});

/**
 * @internal
 */
export const ByteContentDocFilterSensitiveLog = (obj: ByteContentDoc): any => ({
  ...obj,
  ...(obj.identifier && { identifier: SENSITIVE_STRING }),
  ...(obj.data && { data: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ExternalSourceFilterSensitiveLog = (obj: ExternalSource): any => ({
  ...obj,
  ...(obj.byteContent && { byteContent: ByteContentDocFilterSensitiveLog(obj.byteContent) }),
});

/**
 * @internal
 */
export const ExternalSourcesRetrieveAndGenerateConfigurationFilterSensitiveLog = (
  obj: ExternalSourcesRetrieveAndGenerateConfiguration
): any => ({
  ...obj,
  ...(obj.sources && { sources: obj.sources.map((item) => ExternalSourceFilterSensitiveLog(item)) }),
  ...(obj.generationConfiguration && {
    generationConfiguration: ExternalSourcesGenerationConfigurationFilterSensitiveLog(obj.generationConfiguration),
  }),
});

/**
 * @internal
 */
export const GenerationConfigurationFilterSensitiveLog = (obj: GenerationConfiguration): any => ({
  ...obj,
  ...(obj.promptTemplate && { promptTemplate: PromptTemplateFilterSensitiveLog(obj.promptTemplate) }),
});

/**
 * @internal
 */
export const GetEvaluationJobRequestFilterSensitiveLog = (obj: GetEvaluationJobRequest): any => ({
  ...obj,
  ...(obj.jobIdentifier && { jobIdentifier: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StopEvaluationJobRequestFilterSensitiveLog = (obj: StopEvaluationJobRequest): any => ({
  ...obj,
  ...(obj.jobIdentifier && { jobIdentifier: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailContentFilterConfigFilterSensitiveLog = (obj: GuardrailContentFilterConfig): any => ({
  ...obj,
  ...(obj.inputModalities && { inputModalities: SENSITIVE_STRING }),
  ...(obj.outputModalities && { outputModalities: SENSITIVE_STRING }),
  ...(obj.inputAction && { inputAction: SENSITIVE_STRING }),
  ...(obj.outputAction && { outputAction: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailContentPolicyConfigFilterSensitiveLog = (obj: GuardrailContentPolicyConfig): any => ({
  ...obj,
  ...(obj.filtersConfig && {
    filtersConfig: obj.filtersConfig.map((item) => GuardrailContentFilterConfigFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GuardrailContextualGroundingFilterConfigFilterSensitiveLog = (
  obj: GuardrailContextualGroundingFilterConfig
): any => ({
  ...obj,
  ...(obj.action && { action: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailContextualGroundingPolicyConfigFilterSensitiveLog = (
  obj: GuardrailContextualGroundingPolicyConfig
): any => ({
  ...obj,
  ...(obj.filtersConfig && {
    filtersConfig: obj.filtersConfig.map((item) => GuardrailContextualGroundingFilterConfigFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GuardrailTopicConfigFilterSensitiveLog = (obj: GuardrailTopicConfig): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.definition && { definition: SENSITIVE_STRING }),
  ...(obj.examples && { examples: SENSITIVE_STRING }),
  ...(obj.inputAction && { inputAction: SENSITIVE_STRING }),
  ...(obj.outputAction && { outputAction: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailTopicPolicyConfigFilterSensitiveLog = (obj: GuardrailTopicPolicyConfig): any => ({
  ...obj,
  ...(obj.topicsConfig && {
    topicsConfig: obj.topicsConfig.map((item) => GuardrailTopicConfigFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GuardrailManagedWordsConfigFilterSensitiveLog = (obj: GuardrailManagedWordsConfig): any => ({
  ...obj,
  ...(obj.inputAction && { inputAction: SENSITIVE_STRING }),
  ...(obj.outputAction && { outputAction: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailWordConfigFilterSensitiveLog = (obj: GuardrailWordConfig): any => ({
  ...obj,
  ...(obj.inputAction && { inputAction: SENSITIVE_STRING }),
  ...(obj.outputAction && { outputAction: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailWordPolicyConfigFilterSensitiveLog = (obj: GuardrailWordPolicyConfig): any => ({
  ...obj,
  ...(obj.wordsConfig && { wordsConfig: obj.wordsConfig.map((item) => GuardrailWordConfigFilterSensitiveLog(item)) }),
  ...(obj.managedWordListsConfig && {
    managedWordListsConfig: obj.managedWordListsConfig.map((item) =>
      GuardrailManagedWordsConfigFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const CreateGuardrailRequestFilterSensitiveLog = (obj: CreateGuardrailRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.topicPolicyConfig && {
    topicPolicyConfig: GuardrailTopicPolicyConfigFilterSensitiveLog(obj.topicPolicyConfig),
  }),
  ...(obj.contentPolicyConfig && {
    contentPolicyConfig: GuardrailContentPolicyConfigFilterSensitiveLog(obj.contentPolicyConfig),
  }),
  ...(obj.wordPolicyConfig && { wordPolicyConfig: GuardrailWordPolicyConfigFilterSensitiveLog(obj.wordPolicyConfig) }),
  ...(obj.contextualGroundingPolicyConfig && {
    contextualGroundingPolicyConfig: GuardrailContextualGroundingPolicyConfigFilterSensitiveLog(
      obj.contextualGroundingPolicyConfig
    ),
  }),
  ...(obj.blockedInputMessaging && { blockedInputMessaging: SENSITIVE_STRING }),
  ...(obj.blockedOutputsMessaging && { blockedOutputsMessaging: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateGuardrailVersionRequestFilterSensitiveLog = (obj: CreateGuardrailVersionRequest): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailContentFilterFilterSensitiveLog = (obj: GuardrailContentFilter): any => ({
  ...obj,
  ...(obj.inputModalities && { inputModalities: SENSITIVE_STRING }),
  ...(obj.outputModalities && { outputModalities: SENSITIVE_STRING }),
  ...(obj.inputAction && { inputAction: SENSITIVE_STRING }),
  ...(obj.outputAction && { outputAction: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailContentPolicyFilterSensitiveLog = (obj: GuardrailContentPolicy): any => ({
  ...obj,
  ...(obj.filters && { filters: obj.filters.map((item) => GuardrailContentFilterFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GuardrailContextualGroundingFilterFilterSensitiveLog = (obj: GuardrailContextualGroundingFilter): any => ({
  ...obj,
  ...(obj.action && { action: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailContextualGroundingPolicyFilterSensitiveLog = (obj: GuardrailContextualGroundingPolicy): any => ({
  ...obj,
  ...(obj.filters && {
    filters: obj.filters.map((item) => GuardrailContextualGroundingFilterFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GuardrailTopicFilterSensitiveLog = (obj: GuardrailTopic): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.definition && { definition: SENSITIVE_STRING }),
  ...(obj.examples && { examples: SENSITIVE_STRING }),
  ...(obj.inputAction && { inputAction: SENSITIVE_STRING }),
  ...(obj.outputAction && { outputAction: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailTopicPolicyFilterSensitiveLog = (obj: GuardrailTopicPolicy): any => ({
  ...obj,
  ...(obj.topics && { topics: obj.topics.map((item) => GuardrailTopicFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GuardrailManagedWordsFilterSensitiveLog = (obj: GuardrailManagedWords): any => ({
  ...obj,
  ...(obj.inputAction && { inputAction: SENSITIVE_STRING }),
  ...(obj.outputAction && { outputAction: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailWordFilterSensitiveLog = (obj: GuardrailWord): any => ({
  ...obj,
  ...(obj.inputAction && { inputAction: SENSITIVE_STRING }),
  ...(obj.outputAction && { outputAction: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailWordPolicyFilterSensitiveLog = (obj: GuardrailWordPolicy): any => ({
  ...obj,
  ...(obj.words && { words: obj.words.map((item) => GuardrailWordFilterSensitiveLog(item)) }),
  ...(obj.managedWordLists && {
    managedWordLists: obj.managedWordLists.map((item) => GuardrailManagedWordsFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GetGuardrailResponseFilterSensitiveLog = (obj: GetGuardrailResponse): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.topicPolicy && { topicPolicy: GuardrailTopicPolicyFilterSensitiveLog(obj.topicPolicy) }),
  ...(obj.contentPolicy && { contentPolicy: GuardrailContentPolicyFilterSensitiveLog(obj.contentPolicy) }),
  ...(obj.wordPolicy && { wordPolicy: GuardrailWordPolicyFilterSensitiveLog(obj.wordPolicy) }),
  ...(obj.contextualGroundingPolicy && {
    contextualGroundingPolicy: GuardrailContextualGroundingPolicyFilterSensitiveLog(obj.contextualGroundingPolicy),
  }),
  ...(obj.statusReasons && { statusReasons: SENSITIVE_STRING }),
  ...(obj.failureRecommendations && { failureRecommendations: SENSITIVE_STRING }),
  ...(obj.blockedInputMessaging && { blockedInputMessaging: SENSITIVE_STRING }),
  ...(obj.blockedOutputsMessaging && { blockedOutputsMessaging: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailSummaryFilterSensitiveLog = (obj: GuardrailSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListGuardrailsResponseFilterSensitiveLog = (obj: ListGuardrailsResponse): any => ({
  ...obj,
  ...(obj.guardrails && { guardrails: obj.guardrails.map((item) => GuardrailSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateGuardrailRequestFilterSensitiveLog = (obj: UpdateGuardrailRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.topicPolicyConfig && {
    topicPolicyConfig: GuardrailTopicPolicyConfigFilterSensitiveLog(obj.topicPolicyConfig),
  }),
  ...(obj.contentPolicyConfig && {
    contentPolicyConfig: GuardrailContentPolicyConfigFilterSensitiveLog(obj.contentPolicyConfig),
  }),
  ...(obj.wordPolicyConfig && { wordPolicyConfig: GuardrailWordPolicyConfigFilterSensitiveLog(obj.wordPolicyConfig) }),
  ...(obj.contextualGroundingPolicyConfig && {
    contextualGroundingPolicyConfig: GuardrailContextualGroundingPolicyConfigFilterSensitiveLog(
      obj.contextualGroundingPolicyConfig
    ),
  }),
  ...(obj.blockedInputMessaging && { blockedInputMessaging: SENSITIVE_STRING }),
  ...(obj.blockedOutputsMessaging && { blockedOutputsMessaging: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateInferenceProfileRequestFilterSensitiveLog = (obj: CreateInferenceProfileRequest): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.modelSource && { modelSource: obj.modelSource }),
});

/**
 * @internal
 */
export const GetInferenceProfileResponseFilterSensitiveLog = (obj: GetInferenceProfileResponse): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InferenceProfileSummaryFilterSensitiveLog = (obj: InferenceProfileSummary): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListInferenceProfilesResponseFilterSensitiveLog = (obj: ListInferenceProfilesResponse): any => ({
  ...obj,
  ...(obj.inferenceProfileSummaries && {
    inferenceProfileSummaries: obj.inferenceProfileSummaries.map((item) =>
      InferenceProfileSummaryFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const GetModelInvocationJobResponseFilterSensitiveLog = (obj: GetModelInvocationJobResponse): any => ({
  ...obj,
  ...(obj.message && { message: SENSITIVE_STRING }),
  ...(obj.inputDataConfig && { inputDataConfig: obj.inputDataConfig }),
  ...(obj.outputDataConfig && { outputDataConfig: obj.outputDataConfig }),
});

/**
 * @internal
 */
export const ModelInvocationJobSummaryFilterSensitiveLog = (obj: ModelInvocationJobSummary): any => ({
  ...obj,
  ...(obj.message && { message: SENSITIVE_STRING }),
  ...(obj.inputDataConfig && { inputDataConfig: obj.inputDataConfig }),
  ...(obj.outputDataConfig && { outputDataConfig: obj.outputDataConfig }),
});

/**
 * @internal
 */
export const ListModelInvocationJobsResponseFilterSensitiveLog = (obj: ListModelInvocationJobsResponse): any => ({
  ...obj,
  ...(obj.invocationJobSummaries && {
    invocationJobSummaries: obj.invocationJobSummaries.map((item) => ModelInvocationJobSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const RequestMetadataBaseFiltersFilterSensitiveLog = (obj: RequestMetadataBaseFilters): any => ({
  ...obj,
  ...(obj.equals && { equals: SENSITIVE_STRING }),
  ...(obj.notEquals && { notEquals: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RequestMetadataFiltersFilterSensitiveLog = (obj: RequestMetadataFilters): any => {
  if (obj.equals !== undefined) return { equals: SENSITIVE_STRING };
  if (obj.notEquals !== undefined) return { notEquals: SENSITIVE_STRING };
  if (obj.andAll !== undefined)
    return { andAll: obj.andAll.map((item) => RequestMetadataBaseFiltersFilterSensitiveLog(item)) };
  if (obj.orAll !== undefined)
    return { orAll: obj.orAll.map((item) => RequestMetadataBaseFiltersFilterSensitiveLog(item)) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const InvocationLogsConfigFilterSensitiveLog = (obj: InvocationLogsConfig): any => ({
  ...obj,
  ...(obj.invocationLogSource && { invocationLogSource: obj.invocationLogSource }),
  ...(obj.requestMetadataFilters && {
    requestMetadataFilters: RequestMetadataFiltersFilterSensitiveLog(obj.requestMetadataFilters),
  }),
});

/**
 * @internal
 */
export const TrainingDataConfigFilterSensitiveLog = (obj: TrainingDataConfig): any => ({
  ...obj,
  ...(obj.invocationLogsConfig && {
    invocationLogsConfig: InvocationLogsConfigFilterSensitiveLog(obj.invocationLogsConfig),
  }),
});

/**
 * @internal
 */
export const GetCustomModelResponseFilterSensitiveLog = (obj: GetCustomModelResponse): any => ({
  ...obj,
  ...(obj.trainingDataConfig && { trainingDataConfig: TrainingDataConfigFilterSensitiveLog(obj.trainingDataConfig) }),
  ...(obj.customizationConfig && { customizationConfig: obj.customizationConfig }),
});

/**
 * @internal
 */
export const CreatePromptRouterRequestFilterSensitiveLog = (obj: CreatePromptRouterRequest): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetPromptRouterResponseFilterSensitiveLog = (obj: GetPromptRouterResponse): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PromptRouterSummaryFilterSensitiveLog = (obj: PromptRouterSummary): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListPromptRoutersResponseFilterSensitiveLog = (obj: ListPromptRoutersResponse): any => ({
  ...obj,
  ...(obj.promptRouterSummaries && {
    promptRouterSummaries: obj.promptRouterSummaries.map((item) => PromptRouterSummaryFilterSensitiveLog(item)),
  }),
});

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
