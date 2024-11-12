// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

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
export interface BatchDeleteEvaluationJobRequest {
  /**
   * <p>An array of model evaluation job ARNs to be deleted.</p>
   * @public
   */
  jobIdentifiers: string[] | undefined;
}

/**
 * <p>A JSON array that provides the status of the model evaluation jobs being deleted.</p>
 * @public
 */
export interface BatchDeleteEvaluationJobError {
  /**
   * <p>The ARN of the model evaluation job being deleted.</p>
   * @public
   */
  jobIdentifier: string | undefined;

  /**
   * <p>A HTTP status code of the model evaluation job being deleted.</p>
   * @public
   */
  code: string | undefined;

  /**
   * <p>A status message about the model evaluation job deletion.</p>
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
 * <p>An array of model evaluation jobs to be deleted, and their associated statuses.</p>
 * @public
 */
export interface BatchDeleteEvaluationJobItem {
  /**
   * <p>The ARN of model evaluation job to be deleted.</p>
   * @public
   */
  jobIdentifier: string | undefined;

  /**
   * <p>The status of the job's deletion.</p>
   * @public
   */
  jobStatus: EvaluationJobStatus | undefined;
}

/**
 * @public
 */
export interface BatchDeleteEvaluationJobResponse {
  /**
   * <p>A JSON object containing the HTTP status codes and the ARNs of model evaluation jobs that failed to be deleted.</p>
   * @public
   */
  errors: BatchDeleteEvaluationJobError[] | undefined;

  /**
   * <p>The list of model evaluation jobs to be deleted.</p>
   * @public
   */
  evaluationJobs: BatchDeleteEvaluationJobItem[] | undefined;
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
 * <p>Defines the built-in prompt datasets, built-in metric names and custom metric names, and the task type.</p>
 * @public
 */
export interface EvaluationDatasetMetricConfig {
  /**
   * <p>The task type you want the model to carry out.  </p>
   * @public
   */
  taskType: EvaluationTaskType | undefined;

  /**
   * <p>Specifies the prompt dataset.</p>
   * @public
   */
  dataset: EvaluationDataset | undefined;

  /**
   * <p>The names of the metrics used. For automated model evaluation jobs valid values are <code>"Builtin.Accuracy"</code>, <code>"Builtin.Robustness"</code>, and <code>"Builtin.Toxicity"</code>. In human-based model evaluation jobs the array of strings must match the <code>name</code> parameter specified in <code>HumanEvaluationCustomMetric</code>. </p>
   * @public
   */
  metricNames: string[] | undefined;
}

/**
 * <p>Use to specify a automatic model evaluation job. The <code>EvaluationDatasetMetricConfig</code> object is used to specify the prompt datasets, task type, and metric names.</p>
 * @public
 */
export interface AutomatedEvaluationConfig {
  /**
   * <p>Specifies the required elements for an automatic model evaluation job.</p>
   * @public
   */
  datasetMetricConfigs: EvaluationDatasetMetricConfig[] | undefined;
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
 * <p>Used to specify either a <code>AutomatedEvaluationConfig</code> or <code>HumanEvaluationConfig</code> object.</p>
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
   * <p>Used to specify an automated model evaluation job.
   *          See <code>AutomatedEvaluationConfig</code> to view the required parameters.</p>
   * @public
   */
  export interface AutomatedMember {
    automated: AutomatedEvaluationConfig;
    human?: never;
    $unknown?: never;
  }

  /**
   * <p>Used to specify a model evaluation job that uses human workers.See <code>HumanEvaluationConfig</code> to view the required parameters.</p>
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
 * <p>Contains the ARN of the Amazon Bedrock model or <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">inference profile</a> specified in your model evaluation job. Each Amazon Bedrock model supports different <code>inferenceParams</code>. To learn more about supported inference parameters for Amazon Bedrock models, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters for foundation models</a>.</p>
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
  inferenceParams: string | undefined;
}

/**
 * <p>Defines the models used in the model evaluation job.</p>
 * @public
 */
export type EvaluationModelConfig = EvaluationModelConfig.BedrockModelMember | EvaluationModelConfig.$UnknownMember;

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
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    bedrockModel?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    bedrockModel: (value: EvaluationBedrockModel) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EvaluationModelConfig, visitor: Visitor<T>): T => {
    if (value.bedrockModel !== undefined) return visitor.bedrockModel(value.bedrockModel);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Used to define the models you want used in your model evaluation job. Automated model evaluation jobs support only a single model. In a human-based model evaluation job, your annotator can compare the responses for up to two different models.</p>
 * @public
 */
export type EvaluationInferenceConfig =
  | EvaluationInferenceConfig.ModelsMember
  | EvaluationInferenceConfig.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationInferenceConfig {
  /**
   * <p>Used to specify the models.</p>
   * @public
   */
  export interface ModelsMember {
    models: EvaluationModelConfig[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    models?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    models: (value: EvaluationModelConfig[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EvaluationInferenceConfig, visitor: Visitor<T>): T => {
    if (value.models !== undefined) return visitor.models(value.models);
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
 * <p>The  Amazon S3 location where the results of your model evaluation job are saved.</p>
 * @public
 */
export interface EvaluationOutputDataConfig {
  /**
   * <p>The Amazon S3 URI where the results of model evaluation job are saved.</p>
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * @public
 */
export interface CreateEvaluationJobRequest {
  /**
   * <p>The name of the model evaluation job. Model evaluation job names must unique with your AWS account, and your account's AWS region.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>A description of the model evaluation job.</p>
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
   * <p>The Amazon Resource Name (ARN) of an IAM service role that Amazon Bedrock can assume to perform tasks on your behalf. The service role must have Amazon Bedrock as the service principal, and provide access to any Amazon S3 buckets specified in the <code>EvaluationConfig</code> object. To pass this role to Amazon Bedrock, the caller of this API must have the <code>iam:PassRole</code> permission. To learn more about the required permissions, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-security.html">Required permissions</a>.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Specify your customer managed key ARN that will be used to encrypt your model evaluation job.</p>
   * @public
   */
  customerEncryptionKeyId?: string | undefined;

  /**
   * <p>Tags to attach to the model evaluation job.</p>
   * @public
   */
  jobTags?: Tag[] | undefined;

  /**
   * <p>Specifies whether the model evaluation job is automatic or uses human worker.</p>
   * @public
   */
  evaluationConfig: EvaluationConfig | undefined;

  /**
   * <p>Specify the models you want to use in your model evaluation job. Automatic model evaluation jobs support a single model or <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">inference profile</a>, and model evaluation job that use human workers support two models or inference profiles.</p>
   * @public
   */
  inferenceConfig: EvaluationInferenceConfig | undefined;

  /**
   * <p>An object that defines where the results of model evaluation job will be saved in Amazon S3.</p>
   * @public
   */
  outputDataConfig: EvaluationOutputDataConfig | undefined;
}

/**
 * @public
 */
export interface CreateEvaluationJobResponse {
  /**
   * <p>The ARN of the model evaluation job.</p>
   * @public
   */
  jobArn: string | undefined;
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
 * @public
 */
export interface GetEvaluationJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the model evaluation job.</p>
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
 */
export interface GetEvaluationJobResponse {
  /**
   * <p>The name of the model evaluation job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The status of the model evaluation job.</p>
   * @public
   */
  status: EvaluationJobStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the model evaluation job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>The description of the model evaluation job.</p>
   * @public
   */
  jobDescription?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM service role used in the model evaluation job.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer managed key specified when the model evaluation job was created.</p>
   * @public
   */
  customerEncryptionKeyId?: string | undefined;

  /**
   * <p>The type of model evaluation job.</p>
   * @public
   */
  jobType: EvaluationJobType | undefined;

  /**
   * <p>Contains details about the type of model evaluation job, the metrics used, the task type selected, the datasets used, and any custom metrics you defined.</p>
   * @public
   */
  evaluationConfig: EvaluationConfig | undefined;

  /**
   * <p>Details about the models you specified in your model evaluation job.</p>
   * @public
   */
  inferenceConfig: EvaluationInferenceConfig | undefined;

  /**
   * <p>Amazon S3 location for where output data is saved.</p>
   * @public
   */
  outputDataConfig: EvaluationOutputDataConfig | undefined;

  /**
   * <p>When the model evaluation job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>When the model evaluation job was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * <p>An array of strings the specify why the model evaluation job has failed.</p>
   * @public
   */
  failureMessages?: string[] | undefined;
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
   * <p>A filter that includes model evaluation jobs created after the time specified.</p>
   * @public
   */
  creationTimeAfter?: Date | undefined;

  /**
   * <p>A filter that includes model evaluation jobs created prior to the time specified.</p>
   * @public
   */
  creationTimeBefore?: Date | undefined;

  /**
   * <p>Only return jobs where the status condition is met.</p>
   * @public
   */
  statusEquals?: EvaluationJobStatus | undefined;

  /**
   * <p>Query parameter string for model evaluation job names.</p>
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
   * <p>Allows you to sort model evaluation jobs by when they were created.</p>
   * @public
   */
  sortBy?: SortJobsBy | undefined;

  /**
   * <p>How you want the order of jobs sorted.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * <p>A summary of the model evaluation job.</p>
 * @public
 */
export interface EvaluationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the model evaluation job.</p>
   * @public
   */
  jobArn: string | undefined;

  /**
   * <p>The name of the model evaluation job.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The current status of the model evaluation job. </p>
   * @public
   */
  status: EvaluationJobStatus | undefined;

  /**
   * <p>When the model evaluation job was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>The type, either human or automatic, of model evaluation job.</p>
   * @public
   */
  jobType: EvaluationJobType | undefined;

  /**
   * <p>What task type was used in the model evaluation job.</p>
   * @public
   */
  evaluationTaskTypes: EvaluationTaskType[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the model(s) used in the model evaluation job.</p>
   * @public
   */
  modelIdentifiers: string[] | undefined;
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
   * <p>A summary of the model evaluation jobs.</p>
   * @public
   */
  jobSummaries?: EvaluationSummary[] | undefined;
}

/**
 * @public
 */
export interface StopEvaluationJobRequest {
  /**
   * <p>The ARN of the model evaluation job you want to stop.</p>
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
   *                      example, in the phrase "I am 40 years old," Guarrails recognizes "40 years"
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
   *                         <b>REDIT_DEBIT_CARD_CVV</b>
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
   * <p>The type of PII entity. For exampvle, Social Security Number.</p>
   * @public
   */
  type: GuardrailPiiEntityType | undefined;

  /**
   * <p>The configured guardrail action when PII entity is detected.</p>
   * @public
   */
  action: GuardrailSensitiveInformationAction | undefined;
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
   * <p>The configuration of the Virtual Private Cloud (VPC) for the data in the batch inference job. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference-vpc">Protect batch inference jobs using a VPC</a>.</p>
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
   * <p>The configuration of the Virtual Private Cloud (VPC) for the data in the batch inference job. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference-vpc">Protect batch inference jobs using a VPC</a>.</p>
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
   * <p>The configuration of the Virtual Private Cloud (VPC) for the data in the batch inference job. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference-vpc">Protect batch inference jobs using a VPC</a>.</p>
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
  hyperParameters: Record<string, string> | undefined;

  /**
   * <p>The configuration of the Virtual Private Cloud (VPC) that contains the resources that you're using for this job. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/vpc-model-customization.html">Protect your model customization jobs using a VPC</a>.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;
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
  hyperParameters: Record<string, string> | undefined;

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
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const EvaluationInferenceConfigFilterSensitiveLog = (obj: EvaluationInferenceConfig): any => {
  if (obj.models !== undefined)
    return { models: obj.models.map((item) => EvaluationModelConfigFilterSensitiveLog(item)) };
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
export const GetEvaluationJobRequestFilterSensitiveLog = (obj: GetEvaluationJobRequest): any => ({
  ...obj,
  ...(obj.jobIdentifier && { jobIdentifier: SENSITIVE_STRING }),
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
export const GuardrailTopicConfigFilterSensitiveLog = (obj: GuardrailTopicConfig): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.definition && { definition: SENSITIVE_STRING }),
  ...(obj.examples && { examples: SENSITIVE_STRING }),
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
export const CreateGuardrailRequestFilterSensitiveLog = (obj: CreateGuardrailRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.topicPolicyConfig && {
    topicPolicyConfig: GuardrailTopicPolicyConfigFilterSensitiveLog(obj.topicPolicyConfig),
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
export const GuardrailTopicFilterSensitiveLog = (obj: GuardrailTopic): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.definition && { definition: SENSITIVE_STRING }),
  ...(obj.examples && { examples: SENSITIVE_STRING }),
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
export const GetGuardrailResponseFilterSensitiveLog = (obj: GetGuardrailResponse): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.topicPolicy && { topicPolicy: GuardrailTopicPolicyFilterSensitiveLog(obj.topicPolicy) }),
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
