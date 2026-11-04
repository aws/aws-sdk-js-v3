// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AdvancedPromptOptimizationJobStatus,
  AgreementStatus,
  ApplicationType,
  AttributeType,
  AutomatedReasoningCheckLogicWarningType,
  AutomatedReasoningCheckResult,
  AutomatedReasoningPolicyAnnotationStatus,
  AutomatedReasoningPolicyBuildDocumentContentType,
  AutomatedReasoningPolicyBuildMessageType,
  AutomatedReasoningPolicyBuildResultAssetType,
  AutomatedReasoningPolicyBuildWorkflowStatus,
  AutomatedReasoningPolicyBuildWorkflowType,
  AutomatedReasoningPolicyTestRunResult,
  AutomatedReasoningPolicyTestRunStatus,
  ConfigurationOwner,
  CustomizationType,
  CustomModelDeploymentStatus,
  CustomModelDeploymentUpdateStatus,
  DataRetentionMode,
  EvaluationJobStatus,
  EvaluationJobType,
  EvaluationTaskType,
  ExternalSourceType,
  GuardrailContentFilterAction,
  GuardrailContentFiltersTierName,
  GuardrailContentFilterType,
  GuardrailContextualGroundingAction,
  GuardrailContextualGroundingFilterType,
  GuardrailContextualGroundingTierName,
  GuardrailFilterStrength,
  GuardrailModality,
  InputTags,
  ModelStatus,
  PerformanceConfigLatency,
  QueryTransformationType,
  ReasoningEffort,
  RerankingMetadataSelectionMode,
  SelectiveGuardingMode,
  SortJobsBy,
  SortModelsBy,
  SortOrder,
  Status,
  VectorSearchRerankingConfigurationType,
} from "./enums";

/**
 * Model-specific information for the enforced guardrail configuration.
 *
 * @public
 */
export interface ModelEnforcement {
  /**
   * Models to enforce the guardrail on.
   *
   * @public
   */
  includedModels: string[] | undefined;

  /**
   * Models to exclude from enforcement of the guardrail.
   *
   * @public
   */
  excludedModels: string[] | undefined;
}

/**
 * Selective content guarding controls for enforced guardrails.
 *
 * @public
 */
export interface SelectiveContentGuarding {
  /**
   * Selective guarding mode for system prompts."
   *
   * @public
   */
  system?: SelectiveGuardingMode | undefined;

  /**
   * Selective guarding mode for user messages.
   *
   * @public
   */
  messages?: SelectiveGuardingMode | undefined;
}

/**
 * Account-level enforced guardrail input configuration.
 *
 * @public
 */
export interface AccountEnforcedGuardrailInferenceInputConfiguration {
  /**
   * Identifier for the guardrail, could be the ID or the ARN.
   *
   * @public
   */
  guardrailIdentifier: string | undefined;

  /**
   * Numerical guardrail version.
   *
   * @public
   */
  guardrailVersion: string | undefined;

  /**
   * Selective content guarding controls for enforced guardrails.
   *
   * @public
   */
  selectiveContentGuarding?: SelectiveContentGuarding | undefined;

  /**
   * Model-specific information for the enforced guardrail configuration. If not present, the configuration is enforced on all models
   *
   * @public
   */
  modelEnforcement?: ModelEnforcement | undefined;
}

/**
 * Account enforced guardrail output configuration.
 *
 * @public
 */
export interface AccountEnforcedGuardrailOutputConfiguration {
  /**
   * Unique ID for the account enforced configuration.
   *
   * @public
   */
  configId?: string | undefined;

  /**
   * ARN representation for the guardrail.
   *
   * @public
   */
  guardrailArn?: string | undefined;

  /**
   * Unique ID for the guardrail.
   *
   * @public
   */
  guardrailId?: string | undefined;

  /**
   * Whether to honor or ignore input tags at runtime.
   *
   * @deprecated (since 2026-04-03) This field is being deprecated and will be removed once customers transition their existing policies to the new schema.
   * @public
   */
  inputTags?: InputTags | undefined;

  /**
   * Selective content guarding controls for enforced guardrails.
   *
   * @public
   */
  selectiveContentGuarding?: SelectiveContentGuarding | undefined;

  /**
   * Numerical guardrail version.
   *
   * @public
   */
  guardrailVersion?: string | undefined;

  /**
   * Timestamp.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The ARN of the role used to update the configuration.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * Timestamp.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The ARN of the role used to update the configuration.
   *
   * @public
   */
  updatedBy?: string | undefined;

  /**
   * Configuration owner type.
   *
   * @public
   */
  owner?: ConfigurationOwner | undefined;

  /**
   * Model-specific information for the enforced guardrail configuration.
   *
   * @public
   */
  modelEnforcement?: ModelEnforcement | undefined;
}

/**
 * Contains the input data configuration for an advanced prompt optimization job.
 *
 * @public
 */
export interface AdvancedPromptOptimizationInputConfig {
  /**
   * The S3 URI of the JSONL input file containing prompt templates and evaluation samples.
   *
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * Batch Delete Advanced Prompt Optimization Jobs Request
 *
 * @public
 */
export interface BatchDeleteAdvancedPromptOptimizationJobRequest {
  /**
   * A list of advanced prompt optimization job identifiers (ARNs or IDs) to delete.
   *
   * @public
   */
  jobIdentifiers: string[] | undefined;
}

/**
 * Contains information about a successfully deleted advanced prompt optimization job.
 *
 * @public
 */
export interface BatchDeleteAdvancedPromptOptimizationJobItem {
  /**
   * The identifier of the deleted job.
   *
   * @public
   */
  jobIdentifier: string | undefined;

  /**
   * The status of the deleted job.
   *
   * @public
   */
  jobStatus: AdvancedPromptOptimizationJobStatus | undefined;
}

/**
 * Contains information about an error that occurred when deleting an advanced prompt optimization job.
 *
 * @public
 */
export interface BatchDeleteAdvancedPromptOptimizationJobError {
  /**
   * The identifier of the job that could not be deleted.
   *
   * @public
   */
  jobIdentifier: string | undefined;

  /**
   * The error code for the deletion failure.
   *
   * @public
   */
  code: string | undefined;

  /**
   * A message describing the error.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Batch Delete Advanced Prompt Optimization Jobs Response
 *
 * @public
 */
export interface BatchDeleteAdvancedPromptOptimizationJobResponse {
  /**
   * A list of errors encountered during batch deletion.
   *
   * @public
   */
  errors: BatchDeleteAdvancedPromptOptimizationJobError[] | undefined;

  /**
   * A list of successfully deleted advanced prompt optimization jobs.
   *
   * @public
   */
  advancedPromptOptimizationJobs: BatchDeleteAdvancedPromptOptimizationJobItem[] | undefined;
}

/**
 * Base inference parameters to pass to a model. For more information, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html).
 *
 * @public
 */
export interface InferenceConfiguration {
  /**
   * The maximum number of tokens to allow in the generated response. The default value is the maximum allowed value for the model that you are using.
   *
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * The likelihood of the model selecting higher-probability options while generating a response. A lower value makes the model more likely to choose higher-probability options, while a higher value makes the model more likely to choose lower-probability options.
   *
   * @public
   */
  temperature?: number | undefined;

  /**
   * The percentage of most-likely candidates that the model considers for the next token. For example, if you choose a value of 0.8 for `topP`, the model selects from the top 80% of the probability distribution of tokens that could be next in the sequence.
   *
   * @public
   */
  topP?: number | undefined;

  /**
   * A list of stop sequences. A stop sequence is a sequence of characters that causes the model to stop generating the response.
   *
   * @public
   */
  stopSequences?: string[] | undefined;
}

/**
 * Contains the configuration for a model used in an advanced prompt optimization job, including the model ID and inference parameters.
 *
 * @public
 */
export interface ModelConfiguration {
  /**
   * The model to use for optimization. The value depends on the resource that you use:
   *
   * - If you use a base model, specify the model ID or its ARN. For a list of model IDs, see [Models at a glance](https://docs.aws.amazon.com/bedrock/latest/userguide/model-cards.html) in the Amazon Bedrock User Guide.
   * - If you use a cross-Region (system-defined) inference profile, specify the inference profile ID or its ARN. For a list of inference profile IDs, see [Supported Regions and models for inference profiles](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference-support.html) in the Amazon Bedrock User Guide.
   * - If you use an application inference profile, specify its full ARN, including the account ID and Region.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The inference configuration for the model, including parameters such as maximum tokens, temperature, and top-p.
   *
   * @public
   */
  inferenceConfig?: InferenceConfiguration | undefined;

  /**
   * Additional model request fields. Use this to pass model-specific parameters that are not included in the standard inference configuration.
   *
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;
}

/**
 * Contains the output data configuration for an advanced prompt optimization job.
 *
 * @public
 */
export interface AdvancedPromptOptimizationOutputConfig {
  /**
   * The S3 URI prefix where the optimization results will be written.
   *
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * Definition of the key/value pair for a tag.
 *
 * @public
 */
export interface Tag {
  /**
   * Key for the tag.
   *
   * @public
   */
  key: string | undefined;

  /**
   * Value for the tag.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Create Advanced Prompt Optimization Job Request
 *
 * @public
 */
export interface CreateAdvancedPromptOptimizationJobRequest {
  /**
   * A name for the advanced prompt optimization job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * A description of the advanced prompt optimization job.
   *
   * @public
   */
  jobDescription?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Specifies the S3 location of your JSONL input file containing prompt templates and evaluation samples.
   *
   * @public
   */
  inputConfig: AdvancedPromptOptimizationInputConfig | undefined;

  /**
   * Specifies the S3 location where optimization results will be stored.
   *
   * @public
   */
  outputConfig: AdvancedPromptOptimizationOutputConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used for encrypting the output data. If not specified, the output is encrypted with an Amazon-owned KMS key.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * Tags to associate with the advanced prompt optimization job.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * A list of model configurations specifying the target models for prompt optimization. You can specify up to 5 models.
   *
   * @public
   */
  modelConfigurations: ModelConfiguration[] | undefined;
}

/**
 * Create Advanced Prompt Optimization Job Response
 *
 * @public
 */
export interface CreateAdvancedPromptOptimizationJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the created advanced prompt optimization job.
   *
   * @public
   */
  jobArn: string | undefined;
}

/**
 * Get Advanced Prompt Optimization Job Request
 *
 * @public
 */
export interface GetAdvancedPromptOptimizationJobRequest {
  /**
   * The ARN or ID of the advanced prompt optimization job.
   *
   * @public
   */
  jobIdentifier: string | undefined;
}

/**
 * Get Advanced Prompt Optimization Job Response
 *
 * @public
 */
export interface GetAdvancedPromptOptimizationJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the advanced prompt optimization job.
   *
   * @public
   */
  jobArn: string | undefined;

  /**
   * The name of the advanced prompt optimization job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The description of the advanced prompt optimization job.
   *
   * @public
   */
  jobDescription?: string | undefined;

  /**
   * The status of the advanced prompt optimization job.
   *
   * @public
   */
  jobStatus: AdvancedPromptOptimizationJobStatus | undefined;

  /**
   * The input data configuration for the optimization job.
   *
   * @public
   */
  inputConfig: AdvancedPromptOptimizationInputConfig | undefined;

  /**
   * The output data configuration for the optimization job.
   *
   * @public
   */
  outputConfig: AdvancedPromptOptimizationOutputConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the output data.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * The time at which the advanced prompt optimization job was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The time at which the advanced prompt optimization job was last modified.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * If the job failed, a message describing the reason for the failure.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The model configurations used in the optimization job.
   *
   * @public
   */
  modelConfigurations: ModelConfiguration[] | undefined;
}

/**
 * List Advanced Prompt Optimization Jobs Request
 *
 * @public
 */
export interface ListAdvancedPromptOptimizationJobsRequest {
  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token in a subsequent request to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The field to sort the results by.
   *
   * @public
   */
  sortBy?: SortJobsBy | undefined;

  /**
   * The sort order for the results.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * Contains a summary of an advanced prompt optimization job.
 *
 * @public
 */
export interface AdvancedPromptOptimizationJobSummary {
  /**
   * The Amazon Resource Name (ARN) of the job.
   *
   * @public
   */
  jobArn: string | undefined;

  /**
   * The name of the job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The status of the job.
   *
   * @public
   */
  jobStatus: AdvancedPromptOptimizationJobStatus | undefined;

  /**
   * The time at which the job was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The time at which the job was last modified.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;
}

/**
 * List Advanced Prompt Optimization Jobs Response
 *
 * @public
 */
export interface ListAdvancedPromptOptimizationJobsResponse {
  /**
   * A list of advanced prompt optimization job summaries.
   *
   * @public
   */
  jobSummaries?: AdvancedPromptOptimizationJobSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token in a subsequent request to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Stop Advanced Prompt Optimization Job Request
 *
 * @public
 */
export interface StopAdvancedPromptOptimizationJobRequest {
  /**
   * The ARN or ID of the advanced prompt optimization job to stop.
   *
   * @public
   */
  jobIdentifier: string | undefined;
}

/**
 * Stop Advanced Prompt Optimization Job Response
 *
 * @public
 */
export interface StopAdvancedPromptOptimizationJobResponse {}

/**
 * Information about the agreement availability
 *
 * @public
 */
export interface AgreementAvailability {
  /**
   * Status of the agreement.
   *
   * @public
   */
  status: AgreementStatus | undefined;

  /**
   * Error message.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetUseCaseForModelAccessRequest {}

/**
 * @public
 */
export interface GetUseCaseForModelAccessResponse {
  /**
   * Get customer profile Response.
   *
   * @public
   */
  formData: Uint8Array | undefined;
}

/**
 * @public
 */
export interface PutUseCaseForModelAccessRequest {
  /**
   * Put customer profile Request.
   *
   * @public
   */
  formData: Uint8Array | undefined;
}

/**
 * @public
 */
export interface PutUseCaseForModelAccessResponse {}

/**
 * @public
 */
export interface CancelAutomatedReasoningPolicyBuildWorkflowRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy whose build workflow you want to cancel.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The unique identifier of the build workflow to cancel. You can get this ID from the StartAutomatedReasoningPolicyBuildWorkflow response or by listing build workflows.
   *
   * @public
   */
  buildWorkflowId: string | undefined;
}

/**
 * @public
 */
export interface CancelAutomatedReasoningPolicyBuildWorkflowResponse {}

/**
 * Represents a formal logic rule in an Automated Reasoning policy. For example, rules can be expressed as if-then statements that define logical constraints.
 *
 * @public
 */
export interface AutomatedReasoningPolicyDefinitionRule {
  /**
   * The unique identifier of the rule within the policy.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The formal logic expression of the rule.
   *
   * @public
   */
  expression: string | undefined;

  /**
   * The human-readable form of the rule expression, often in natural language or simplified notation.
   *
   * @public
   */
  alternateExpression?: string | undefined;
}

/**
 * Represents a single value within a custom type definition, including its identifier and description.
 *
 * @public
 */
export interface AutomatedReasoningPolicyDefinitionTypeValue {
  /**
   * The actual value or identifier for this type value.
   *
   * @public
   */
  value: string | undefined;

  /**
   * A human-readable description explaining what this type value represents and when it should be used.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Represents a custom user-defined viarble type in an Automated Reasoning policy. Types are enum-based and provide additional context beyond predefined variable types.
 *
 * @public
 */
export interface AutomatedReasoningPolicyDefinitionType {
  /**
   * The name of the custom type.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of what the custom type represents.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The possible values for this enum-based type, each with its own description.
   *
   * @public
   */
  values: AutomatedReasoningPolicyDefinitionTypeValue[] | undefined;
}

/**
 * Represents a variable in an Automated Reasoning policy. Variables represent concepts that can have values assigned during natural language translation.
 *
 * @public
 */
export interface AutomatedReasoningPolicyDefinitionVariable {
  /**
   * The name of the variable. Use descriptive names that clearly indicate the concept being represented.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The data type of the variable. Valid types include bool, int, real, enum, and custom types that you can provide.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The description of the variable that explains what it represents and how users might refer to it. Clear and comprehensive descriptions are essential for accurate natural language translation.
   *
   * @public
   */
  description: string | undefined;
}

/**
 * Contains the formal logic rules, variables, and custom variable types that define an Automated Reasoning policy. The policy definition specifies the constraints used to validate foundation model responses for accuracy and logical consistency.
 *
 * @public
 */
export interface AutomatedReasoningPolicyDefinition {
  /**
   * The version of the policy definition format.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The custom user-defined vairable types used in the policy. Types are enum-based variable types that provide additional context beyond the predefined variable types.
   *
   * @public
   */
  types?: AutomatedReasoningPolicyDefinitionType[] | undefined;

  /**
   * The formal logic rules extracted from the source document. Rules define the logical constraints that determine whether model responses are valid, invalid, or satisfiable.
   *
   * @public
   */
  rules?: AutomatedReasoningPolicyDefinitionRule[] | undefined;

  /**
   * The variables that represent concepts in the policy. Variables can have values assigned when translating natural language into formal logic. Their descriptions are crucial for accurate translation.
   *
   * @public
   */
  variables?: AutomatedReasoningPolicyDefinitionVariable[] | undefined;
}

/**
 * @public
 */
export interface CreateAutomatedReasoningPolicyRequest {
  /**
   * A unique name for the Automated Reasoning policy. The name must be between 1 and 63 characters and can contain letters, numbers, hyphens, and underscores.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the Automated Reasoning policy. Use this to provide context about the policy's purpose and the types of validations it performs.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than once. If this token matches a previous request, Amazon Bedrock ignores the request but doesn't return an error.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The policy definition that contains the formal logic rules, variables, and custom variable types used to validate foundation model responses in your application.
   *
   * @public
   */
  policyDefinition?: AutomatedReasoningPolicyDefinition | undefined;

  /**
   * The identifier of the KMS key to use for encrypting the automated reasoning policy and its associated artifacts. If you don't specify a KMS key, Amazon Bedrock uses an KMS managed key for encryption. For enhanced security and control, you can specify a customer managed KMS key.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * A list of tags to associate with the Automated Reasoning policy. Tags help you organize and manage your policies.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAutomatedReasoningPolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy that you created.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The version number of the newly created Automated Reasoning policy. The initial version is always DRAFT.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The name of the Automated Reasoning policy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the Automated Reasoning policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The hash of the policy definition. This is used as a concurrency token for creating policy versions that you can use in your application.
   *
   * @public
   */
  definitionHash?: string | undefined;

  /**
   * The timestamp when the policy was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the policy was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateAutomatedReasoningPolicyTestCaseRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy for which to create the test.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The output content that's validated by the Automated Reasoning policy. This represents the foundation model response that will be checked for accuracy.
   *
   * @public
   */
  guardContent: string | undefined;

  /**
   * The input query or prompt that generated the content. This provides context for the validation.
   *
   * @public
   */
  queryContent?: string | undefined;

  /**
   * The expected result of the Automated Reasoning check. Valid values include: , TOO_COMPLEX, and NO_TRANSLATIONS.
   *
   * - `VALID` - The claims are true. The claims are implied by the premises and the Automated Reasoning policy. Given the Automated Reasoning policy and premises, it is not possible for these claims to be false. In other words, there are no alternative answers that are true that contradict the claims.
   * - `INVALID` - The claims are false. The claims are not implied by the premises and Automated Reasoning policy. Furthermore, there exists different claims that are consistent with the premises and Automated Reasoning policy.
   * - `SATISFIABLE` - The claims can be true or false. It depends on what assumptions are made for the claim to be implied from the premises and Automated Reasoning policy rules. In this situation, different assumptions can make input claims false and alternative claims true.
   * - `IMPOSSIBLE` - Automated Reasoning can’t make a statement about the claims. This can happen if the premises are logically incorrect, or if there is a conflict within the Automated Reasoning policy itself.
   * - `TRANSLATION_AMBIGUOUS` - Detected an ambiguity in the translation meant it would be unsound to continue with validity checking. Additional context or follow-up questions might be needed to get translation to succeed.
   * - `TOO_COMPLEX` - The input contains too much information for Automated Reasoning to process within its latency limits.
   * - `NO_TRANSLATIONS` - Identifies that some or all of the input prompt wasn't translated into logic. This can happen if the input isn't relevant to the Automated Reasoning policy, or if the policy doesn't have variables to model relevant input. If Automated Reasoning can't translate anything, you get a single `NO_TRANSLATIONS` finding. You might also see a `NO_TRANSLATIONS` (along with other findings) if some part of the validation isn't translated.
   *
   * @public
   */
  expectedAggregatedFindingsResult: AutomatedReasoningCheckResult | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The minimum confidence level for logic validation. Content that meets the threshold is considered a high-confidence finding that can be validated.
   *
   * @public
   */
  confidenceThreshold?: number | undefined;
}

/**
 * @public
 */
export interface CreateAutomatedReasoningPolicyTestCaseResponse {
  /**
   * The Amazon Resource Name (ARN) of the policy for which the test was created.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The unique identifier of the created test.
   *
   * @public
   */
  testCaseId: string | undefined;
}

/**
 * @public
 */
export interface CreateAutomatedReasoningPolicyVersionRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy for which to create a version.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The hash of the current policy definition used as a concurrency token to ensure the policy hasn't been modified since you last retrieved it.
   *
   * @public
   */
  lastUpdatedDefinitionHash: string | undefined;

  /**
   * A list of tags to associate with the policy version.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAutomatedReasoningPolicyVersionResponse {
  /**
   * The versioned Amazon Resource Name (ARN) of the policy version.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The version number of the policy version.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The name of the policy version.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the policy version.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The hash of the policy definition for this version.
   *
   * @public
   */
  definitionHash: string | undefined;

  /**
   * The timestamp when the policy version was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAutomatedReasoningPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy to delete.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * Specifies whether to force delete the automated reasoning policy even if it has active resources. When `false`, Amazon Bedrock validates if all artifacts have been deleted (e.g. policy version, test case, test result) for a policy before deletion. When `true`, Amazon Bedrock will delete the policy and all its artifacts without validation. Default is `false`.
   *
   * @public
   */
  force?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteAutomatedReasoningPolicyResponse {}

/**
 * @public
 */
export interface DeleteAutomatedReasoningPolicyBuildWorkflowRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy whose build workflow you want to delete.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The unique identifier of the build workflow to delete.
   *
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * The timestamp when the build workflow was last updated. This is used for optimistic concurrency control to prevent accidental deletion of workflows that have been modified.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAutomatedReasoningPolicyBuildWorkflowResponse {}

/**
 * @public
 */
export interface DeleteAutomatedReasoningPolicyTestCaseRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy that contains the test.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The unique identifier of the test to delete.
   *
   * @public
   */
  testCaseId: string | undefined;

  /**
   * The timestamp when the test was last updated. This is used as a concurrency token to prevent conflicting modifications.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAutomatedReasoningPolicyTestCaseResponse {}

/**
 * @public
 */
export interface ExportAutomatedReasoningPolicyVersionRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy to export. Can be either the unversioned ARN for the draft policy or a versioned ARN for a specific policy version.
   *
   * @public
   */
  policyArn: string | undefined;
}

/**
 * @public
 */
export interface ExportAutomatedReasoningPolicyVersionResponse {
  /**
   * The exported policy definition containing the formal logic rules, variables, and custom variable types.
   *
   * @public
   */
  policyDefinition: AutomatedReasoningPolicyDefinition | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy to retrieve. Can be either the unversioned ARN for the draft policy or an ARN for a specific policy version.
   *
   * @public
   */
  policyArn: string | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the policy.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version of the policy.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The unique identifier of the policy.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The description of the policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The hash of the policy definition used as a concurrency token.
   *
   * @public
   */
  definitionHash: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the automated reasoning policy and its associated artifacts. If a KMS key is not provided during the initial CreateAutomatedReasoningPolicyRequest, the kmsKeyArn won't be included in the GetAutomatedReasoningPolicyResponse.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The timestamp when the policy was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the policy was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyAnnotationsRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy whose annotations you want to retrieve.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The unique identifier of the build workflow whose annotations you want to retrieve.
   *
   * @public
   */
  buildWorkflowId: string | undefined;
}

/**
 * An annotation for adding a new rule to an Automated Reasoning policy using a formal logical expression.
 *
 * @public
 */
export interface AutomatedReasoningPolicyAddRuleAnnotation {
  /**
   * The formal logical expression that defines the rule, using mathematical notation and referencing policy variables and types.
   *
   * @public
   */
  expression: string | undefined;
}

/**
 * An annotation for adding a new rule to the policy by converting a natural language description into a formal logical expression.
 *
 * @public
 */
export interface AutomatedReasoningPolicyAddRuleFromNaturalLanguageAnnotation {
  /**
   * The natural language description of the rule that should be converted into a formal logical expression.
   *
   * @public
   */
  naturalLanguage: string | undefined;
}

/**
 * An annotation for adding a new custom type to an Automated Reasoning policy, defining a set of possible values for variables.
 *
 * @public
 */
export interface AutomatedReasoningPolicyAddTypeAnnotation {
  /**
   * The name of the new custom type. This name will be used to reference the type in variable definitions and rules.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of what the custom type represents and how it should be used in the policy.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The list of possible values that variables of this type can take, each with its own description and identifier.
   *
   * @public
   */
  values: AutomatedReasoningPolicyDefinitionTypeValue[] | undefined;
}

/**
 * An annotation for adding a new variable to an Automated Reasoning policy, which can be used in rule expressions.
 *
 * @public
 */
export interface AutomatedReasoningPolicyAddVariableAnnotation {
  /**
   * The name of the new variable. This name will be used to reference the variable in rule expressions.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the variable, which can be a built-in type (like string or number) or a custom type defined in the policy.
   *
   * @public
   */
  type: string | undefined;

  /**
   * A description of what the variable represents and how it should be used in rules.
   *
   * @public
   */
  description: string | undefined;
}

/**
 * An annotation for removing a rule from an Automated Reasoning policy.
 *
 * @public
 */
export interface AutomatedReasoningPolicyDeleteRuleAnnotation {
  /**
   * The unique identifier of the rule to delete from the policy.
   *
   * @public
   */
  ruleId: string | undefined;
}

/**
 * An annotation for removing a custom type from an Automated Reasoning policy.
 *
 * @public
 */
export interface AutomatedReasoningPolicyDeleteTypeAnnotation {
  /**
   * The name of the custom type to delete from the policy. The type must not be referenced by any variables or rules.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * An annotation for removing a variable from an Automated Reasoning policy.
 *
 * @public
 */
export interface AutomatedReasoningPolicyDeleteVariableAnnotation {
  /**
   * The name of the variable to delete from the policy. The variable must not be referenced by any rules.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * An annotation for processing and incorporating new content into an Automated Reasoning policy.
 *
 * @public
 */
export interface AutomatedReasoningPolicyIngestContentAnnotation {
  /**
   * The new content to be analyzed and incorporated into the policy, such as additional documents or rule descriptions.
   *
   * @public
   */
  content: string | undefined;
}

/**
 * An annotation for updating the policy based on feedback about how specific rules performed during testing or real-world usage.
 *
 * @public
 */
export interface AutomatedReasoningPolicyUpdateFromRuleFeedbackAnnotation {
  /**
   * The list of rule identifiers that the feedback applies to.
   *
   * @public
   */
  ruleIds?: string[] | undefined;

  /**
   * The feedback information about rule performance, including suggestions for improvements or corrections.
   *
   * @public
   */
  feedback: string | undefined;
}

/**
 * An annotation for updating the policy based on feedback about how it performed on specific test scenarios.
 *
 * @public
 */
export interface AutomatedReasoningPolicyUpdateFromScenarioFeedbackAnnotation {
  /**
   * The list of rule identifiers that were involved in the scenario being evaluated.
   *
   * @public
   */
  ruleIds?: string[] | undefined;

  /**
   * The logical expression that defines the test scenario that generated this feedback.
   *
   * @public
   */
  scenarioExpression: string | undefined;

  /**
   * The feedback information about scenario performance, including any issues or improvements identified.
   *
   * @public
   */
  feedback?: string | undefined;
}

/**
 * An annotation for modifying an existing rule in an Automated Reasoning policy.
 *
 * @public
 */
export interface AutomatedReasoningPolicyUpdateRuleAnnotation {
  /**
   * The unique identifier of the rule to update.
   *
   * @public
   */
  ruleId: string | undefined;

  /**
   * The new formal logical expression for the rule, replacing the previous expression.
   *
   * @public
   */
  expression: string | undefined;
}

/**
 * Represents a single value that can be added to an existing custom type in the policy.
 *
 * @public
 */
export interface AutomatedReasoningPolicyAddTypeValue {
  /**
   * The identifier or name of the new value to add to the type.
   *
   * @public
   */
  value: string | undefined;

  /**
   * A description of what this new type value represents and when it should be used.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Represents a value to be removed from an existing custom type in the policy.
 *
 * @public
 */
export interface AutomatedReasoningPolicyDeleteTypeValue {
  /**
   * The identifier or name of the value to remove from the type.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Represents a modification to a value within an existing custom type.
 *
 * @public
 */
export interface AutomatedReasoningPolicyUpdateTypeValue {
  /**
   * The current identifier or name of the type value to update.
   *
   * @public
   */
  value: string | undefined;

  /**
   * The new identifier or name for the type value, if you want to rename it.
   *
   * @public
   */
  newValue?: string | undefined;

  /**
   * The new description for the type value, replacing the previous description.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * An annotation for managing values within custom types, including adding, updating, or removing specific type values.
 *
 * @public
 */
export type AutomatedReasoningPolicyTypeValueAnnotation =
  | AutomatedReasoningPolicyTypeValueAnnotation.AddTypeValueMember
  | AutomatedReasoningPolicyTypeValueAnnotation.DeleteTypeValueMember
  | AutomatedReasoningPolicyTypeValueAnnotation.UpdateTypeValueMember
  | AutomatedReasoningPolicyTypeValueAnnotation.$UnknownMember;

/**
 * @public
 */
export namespace AutomatedReasoningPolicyTypeValueAnnotation {
  /**
   * An operation to add a new value to an existing custom type.
   *
   * @public
   */
  export interface AddTypeValueMember {
    addTypeValue: AutomatedReasoningPolicyAddTypeValue;
    updateTypeValue?: never;
    deleteTypeValue?: never;
    $unknown?: never;
  }

  /**
   * An operation to modify an existing value within a custom type.
   *
   * @public
   */
  export interface UpdateTypeValueMember {
    addTypeValue?: never;
    updateTypeValue: AutomatedReasoningPolicyUpdateTypeValue;
    deleteTypeValue?: never;
    $unknown?: never;
  }

  /**
   * An operation to remove a value from an existing custom type.
   *
   * @public
   */
  export interface DeleteTypeValueMember {
    addTypeValue?: never;
    updateTypeValue?: never;
    deleteTypeValue: AutomatedReasoningPolicyDeleteTypeValue;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    addTypeValue?: never;
    updateTypeValue?: never;
    deleteTypeValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    addTypeValue: (value: AutomatedReasoningPolicyAddTypeValue) => T;
    updateTypeValue: (value: AutomatedReasoningPolicyUpdateTypeValue) => T;
    deleteTypeValue: (value: AutomatedReasoningPolicyDeleteTypeValue) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An annotation for modifying an existing custom type in an Automated Reasoning policy.
 *
 * @public
 */
export interface AutomatedReasoningPolicyUpdateTypeAnnotation {
  /**
   * The current name of the custom type to update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The new name for the custom type, if you want to rename it. If not provided, the name remains unchanged.
   *
   * @public
   */
  newName?: string | undefined;

  /**
   * The new description for the custom type, replacing the previous description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated list of values for the custom type, which can include additions, modifications, or removals.
   *
   * @public
   */
  values: AutomatedReasoningPolicyTypeValueAnnotation[] | undefined;
}

/**
 * An annotation for modifying an existing variable in an Automated Reasoning policy.
 *
 * @public
 */
export interface AutomatedReasoningPolicyUpdateVariableAnnotation {
  /**
   * The current name of the variable to update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The new name for the variable, if you want to rename it. If not provided, the name remains unchanged.
   *
   * @public
   */
  newName?: string | undefined;

  /**
   * The new description for the variable, replacing the previous description.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Contains the various operations that can be performed on an Automated Reasoning policy, including adding, updating, and deleting rules, variables, and types.
 *
 * @public
 */
export type AutomatedReasoningPolicyAnnotation =
  | AutomatedReasoningPolicyAnnotation.AddRuleMember
  | AutomatedReasoningPolicyAnnotation.AddRuleFromNaturalLanguageMember
  | AutomatedReasoningPolicyAnnotation.AddTypeMember
  | AutomatedReasoningPolicyAnnotation.AddVariableMember
  | AutomatedReasoningPolicyAnnotation.DeleteRuleMember
  | AutomatedReasoningPolicyAnnotation.DeleteTypeMember
  | AutomatedReasoningPolicyAnnotation.DeleteVariableMember
  | AutomatedReasoningPolicyAnnotation.IngestContentMember
  | AutomatedReasoningPolicyAnnotation.UpdateFromRulesFeedbackMember
  | AutomatedReasoningPolicyAnnotation.UpdateFromScenarioFeedbackMember
  | AutomatedReasoningPolicyAnnotation.UpdateRuleMember
  | AutomatedReasoningPolicyAnnotation.UpdateTypeMember
  | AutomatedReasoningPolicyAnnotation.UpdateVariableMember
  | AutomatedReasoningPolicyAnnotation.$UnknownMember;

/**
 * @public
 */
export namespace AutomatedReasoningPolicyAnnotation {
  /**
   * An operation to add a new custom type to the policy, defining a set of possible values for policy variables.
   *
   * @public
   */
  export interface AddTypeMember {
    addType: AutomatedReasoningPolicyAddTypeAnnotation;
    updateType?: never;
    deleteType?: never;
    addVariable?: never;
    updateVariable?: never;
    deleteVariable?: never;
    addRule?: never;
    updateRule?: never;
    deleteRule?: never;
    addRuleFromNaturalLanguage?: never;
    updateFromRulesFeedback?: never;
    updateFromScenarioFeedback?: never;
    ingestContent?: never;
    $unknown?: never;
  }

  /**
   * An operation to modify an existing custom type in the policy, such as changing its name, description, or allowed values.
   *
   * @public
   */
  export interface UpdateTypeMember {
    addType?: never;
    updateType: AutomatedReasoningPolicyUpdateTypeAnnotation;
    deleteType?: never;
    addVariable?: never;
    updateVariable?: never;
    deleteVariable?: never;
    addRule?: never;
    updateRule?: never;
    deleteRule?: never;
    addRuleFromNaturalLanguage?: never;
    updateFromRulesFeedback?: never;
    updateFromScenarioFeedback?: never;
    ingestContent?: never;
    $unknown?: never;
  }

  /**
   * An operation to remove a custom type from the policy. The type must not be referenced by any variables or rules.
   *
   * @public
   */
  export interface DeleteTypeMember {
    addType?: never;
    updateType?: never;
    deleteType: AutomatedReasoningPolicyDeleteTypeAnnotation;
    addVariable?: never;
    updateVariable?: never;
    deleteVariable?: never;
    addRule?: never;
    updateRule?: never;
    deleteRule?: never;
    addRuleFromNaturalLanguage?: never;
    updateFromRulesFeedback?: never;
    updateFromScenarioFeedback?: never;
    ingestContent?: never;
    $unknown?: never;
  }

  /**
   * An operation to add a new variable to the policy, which can be used in rule expressions to represent dynamic values.
   *
   * @public
   */
  export interface AddVariableMember {
    addType?: never;
    updateType?: never;
    deleteType?: never;
    addVariable: AutomatedReasoningPolicyAddVariableAnnotation;
    updateVariable?: never;
    deleteVariable?: never;
    addRule?: never;
    updateRule?: never;
    deleteRule?: never;
    addRuleFromNaturalLanguage?: never;
    updateFromRulesFeedback?: never;
    updateFromScenarioFeedback?: never;
    ingestContent?: never;
    $unknown?: never;
  }

  /**
   * An operation to modify an existing variable in the policy, such as changing its name, type, or description.
   *
   * @public
   */
  export interface UpdateVariableMember {
    addType?: never;
    updateType?: never;
    deleteType?: never;
    addVariable?: never;
    updateVariable: AutomatedReasoningPolicyUpdateVariableAnnotation;
    deleteVariable?: never;
    addRule?: never;
    updateRule?: never;
    deleteRule?: never;
    addRuleFromNaturalLanguage?: never;
    updateFromRulesFeedback?: never;
    updateFromScenarioFeedback?: never;
    ingestContent?: never;
    $unknown?: never;
  }

  /**
   * An operation to remove a variable from the policy. The variable must not be referenced by any rules.
   *
   * @public
   */
  export interface DeleteVariableMember {
    addType?: never;
    updateType?: never;
    deleteType?: never;
    addVariable?: never;
    updateVariable?: never;
    deleteVariable: AutomatedReasoningPolicyDeleteVariableAnnotation;
    addRule?: never;
    updateRule?: never;
    deleteRule?: never;
    addRuleFromNaturalLanguage?: never;
    updateFromRulesFeedback?: never;
    updateFromScenarioFeedback?: never;
    ingestContent?: never;
    $unknown?: never;
  }

  /**
   * An operation to add a new logical rule to the policy using formal mathematical expressions.
   *
   * @public
   */
  export interface AddRuleMember {
    addType?: never;
    updateType?: never;
    deleteType?: never;
    addVariable?: never;
    updateVariable?: never;
    deleteVariable?: never;
    addRule: AutomatedReasoningPolicyAddRuleAnnotation;
    updateRule?: never;
    deleteRule?: never;
    addRuleFromNaturalLanguage?: never;
    updateFromRulesFeedback?: never;
    updateFromScenarioFeedback?: never;
    ingestContent?: never;
    $unknown?: never;
  }

  /**
   * An operation to modify an existing rule in the policy, such as changing its logical expression or conditions.
   *
   * @public
   */
  export interface UpdateRuleMember {
    addType?: never;
    updateType?: never;
    deleteType?: never;
    addVariable?: never;
    updateVariable?: never;
    deleteVariable?: never;
    addRule?: never;
    updateRule: AutomatedReasoningPolicyUpdateRuleAnnotation;
    deleteRule?: never;
    addRuleFromNaturalLanguage?: never;
    updateFromRulesFeedback?: never;
    updateFromScenarioFeedback?: never;
    ingestContent?: never;
    $unknown?: never;
  }

  /**
   * An operation to remove a rule from the policy.
   *
   * @public
   */
  export interface DeleteRuleMember {
    addType?: never;
    updateType?: never;
    deleteType?: never;
    addVariable?: never;
    updateVariable?: never;
    deleteVariable?: never;
    addRule?: never;
    updateRule?: never;
    deleteRule: AutomatedReasoningPolicyDeleteRuleAnnotation;
    addRuleFromNaturalLanguage?: never;
    updateFromRulesFeedback?: never;
    updateFromScenarioFeedback?: never;
    ingestContent?: never;
    $unknown?: never;
  }

  /**
   * An operation to add a new rule by converting natural language descriptions into formal logical expressions.
   *
   * @public
   */
  export interface AddRuleFromNaturalLanguageMember {
    addType?: never;
    updateType?: never;
    deleteType?: never;
    addVariable?: never;
    updateVariable?: never;
    deleteVariable?: never;
    addRule?: never;
    updateRule?: never;
    deleteRule?: never;
    addRuleFromNaturalLanguage: AutomatedReasoningPolicyAddRuleFromNaturalLanguageAnnotation;
    updateFromRulesFeedback?: never;
    updateFromScenarioFeedback?: never;
    ingestContent?: never;
    $unknown?: never;
  }

  /**
   * An operation to update the policy based on feedback about how specific rules performed during testing or validation.
   *
   * @public
   */
  export interface UpdateFromRulesFeedbackMember {
    addType?: never;
    updateType?: never;
    deleteType?: never;
    addVariable?: never;
    updateVariable?: never;
    deleteVariable?: never;
    addRule?: never;
    updateRule?: never;
    deleteRule?: never;
    addRuleFromNaturalLanguage?: never;
    updateFromRulesFeedback: AutomatedReasoningPolicyUpdateFromRuleFeedbackAnnotation;
    updateFromScenarioFeedback?: never;
    ingestContent?: never;
    $unknown?: never;
  }

  /**
   * An operation to update the policy based on feedback about how it performed on specific test scenarios.
   *
   * @public
   */
  export interface UpdateFromScenarioFeedbackMember {
    addType?: never;
    updateType?: never;
    deleteType?: never;
    addVariable?: never;
    updateVariable?: never;
    deleteVariable?: never;
    addRule?: never;
    updateRule?: never;
    deleteRule?: never;
    addRuleFromNaturalLanguage?: never;
    updateFromRulesFeedback?: never;
    updateFromScenarioFeedback: AutomatedReasoningPolicyUpdateFromScenarioFeedbackAnnotation;
    ingestContent?: never;
    $unknown?: never;
  }

  /**
   * An operation to process and incorporate new content into the policy, extracting additional rules and concepts.
   *
   * @public
   */
  export interface IngestContentMember {
    addType?: never;
    updateType?: never;
    deleteType?: never;
    addVariable?: never;
    updateVariable?: never;
    deleteVariable?: never;
    addRule?: never;
    updateRule?: never;
    deleteRule?: never;
    addRuleFromNaturalLanguage?: never;
    updateFromRulesFeedback?: never;
    updateFromScenarioFeedback?: never;
    ingestContent: AutomatedReasoningPolicyIngestContentAnnotation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    addType?: never;
    updateType?: never;
    deleteType?: never;
    addVariable?: never;
    updateVariable?: never;
    deleteVariable?: never;
    addRule?: never;
    updateRule?: never;
    deleteRule?: never;
    addRuleFromNaturalLanguage?: never;
    updateFromRulesFeedback?: never;
    updateFromScenarioFeedback?: never;
    ingestContent?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    addType: (value: AutomatedReasoningPolicyAddTypeAnnotation) => T;
    updateType: (value: AutomatedReasoningPolicyUpdateTypeAnnotation) => T;
    deleteType: (value: AutomatedReasoningPolicyDeleteTypeAnnotation) => T;
    addVariable: (value: AutomatedReasoningPolicyAddVariableAnnotation) => T;
    updateVariable: (value: AutomatedReasoningPolicyUpdateVariableAnnotation) => T;
    deleteVariable: (value: AutomatedReasoningPolicyDeleteVariableAnnotation) => T;
    addRule: (value: AutomatedReasoningPolicyAddRuleAnnotation) => T;
    updateRule: (value: AutomatedReasoningPolicyUpdateRuleAnnotation) => T;
    deleteRule: (value: AutomatedReasoningPolicyDeleteRuleAnnotation) => T;
    addRuleFromNaturalLanguage: (value: AutomatedReasoningPolicyAddRuleFromNaturalLanguageAnnotation) => T;
    updateFromRulesFeedback: (value: AutomatedReasoningPolicyUpdateFromRuleFeedbackAnnotation) => T;
    updateFromScenarioFeedback: (value: AutomatedReasoningPolicyUpdateFromScenarioFeedbackAnnotation) => T;
    ingestContent: (value: AutomatedReasoningPolicyIngestContentAnnotation) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyAnnotationsResponse {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The name of the Automated Reasoning policy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The unique identifier of the build workflow.
   *
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * The current set of annotations containing rules, variables, and types extracted from the source documents. These can be modified before finalizing the policy.
   *
   * @public
   */
  annotations: AutomatedReasoningPolicyAnnotation[] | undefined;

  /**
   * A hash value representing the current state of the annotations. This is used for optimistic concurrency control when updating annotations.
   *
   * @public
   */
  annotationSetHash: string | undefined;

  /**
   * The timestamp when the annotations were last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyBuildWorkflowRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy whose build workflow you want to retrieve.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The unique identifier of the build workflow to retrieve.
   *
   * @public
   */
  buildWorkflowId: string | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyBuildWorkflowResponse {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The unique identifier of the build workflow.
   *
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * The current status of the build workflow (e.g., RUNNING, COMPLETED, FAILED, CANCELLED).
   *
   * @public
   */
  status: AutomatedReasoningPolicyBuildWorkflowStatus | undefined;

  /**
   * The type of build workflow being executed (e.g., DOCUMENT_INGESTION, POLICY_REPAIR).
   *
   * @public
   */
  buildWorkflowType: AutomatedReasoningPolicyBuildWorkflowType | undefined;

  /**
   * The name of the source document used in the build workflow.
   *
   * @public
   */
  documentName?: string | undefined;

  /**
   * The content type of the source document (e.g., text/plain, application/pdf).
   *
   * @public
   */
  documentContentType?: AutomatedReasoningPolicyBuildDocumentContentType | undefined;

  /**
   * A detailed description of the document's content and how it should be used in the policy generation process.
   *
   * @public
   */
  documentDescription?: string | undefined;

  /**
   * The timestamp when the build workflow was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the build workflow was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyBuildWorkflowResultAssetsRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy whose build workflow assets you want to retrieve.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The unique identifier of the build workflow whose result assets you want to retrieve.
   *
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * The type of asset to retrieve (e.g., BUILD_LOG, QUALITY_REPORT, POLICY_DEFINITION, GENERATED_TEST_CASES, POLICY_SCENARIOS, FIDELITY_REPORT, ASSET_MANIFEST, SOURCE_DOCUMENT).
   *
   * @public
   */
  assetType: AutomatedReasoningPolicyBuildResultAssetType | undefined;

  /**
   * The unique identifier of the specific asset to retrieve when multiple assets of the same type exist. This is required when retrieving SOURCE_DOCUMENT assets, as multiple source documents may have been used in the workflow. The asset ID can be obtained from the asset manifest.
   *
   * @public
   */
  assetId?: string | undefined;
}

/**
 * Represents a single entry in the asset manifest, describing one artifact produced by the build workflow.
 *
 * @public
 */
export interface AutomatedReasoningPolicyBuildResultAssetManifestEntry {
  /**
   * The type of asset (e.g., BUILD_LOG, QUALITY_REPORT, POLICY_DEFINITION, GENERATED_TEST_CASES, POLICY_SCENARIOS, FIDELITY_REPORT, ASSET_MANIFEST, SOURCE_DOCUMENT).
   *
   * @public
   */
  assetType: AutomatedReasoningPolicyBuildResultAssetType | undefined;

  /**
   * A human-readable name for the asset, if applicable. This helps identify specific documents or reports within the workflow results.
   *
   * @public
   */
  assetName?: string | undefined;

  /**
   * A unique identifier for the asset, if applicable. Use this ID when requesting specific assets through the API.
   *
   * @public
   */
  assetId?: string | undefined;
}

/**
 * A catalog of all artifacts produced by a build workflow, providing a comprehensive list of available assets including their types and identifiers.
 *
 * @public
 */
export interface AutomatedReasoningPolicyBuildResultAssetManifest {
  /**
   * The list of asset entries in the manifest, each describing an available artifact that can be retrieved.
   *
   * @public
   */
  entries: AutomatedReasoningPolicyBuildResultAssetManifestEntry[] | undefined;
}

/**
 * A mutation operation that adds a new rule to the policy definition during the build process.
 *
 * @public
 */
export interface AutomatedReasoningPolicyAddRuleMutation {
  /**
   * The rule definition that specifies the formal logical expression and metadata for the new rule being added to the policy.
   *
   * @public
   */
  rule: AutomatedReasoningPolicyDefinitionRule | undefined;
}

/**
 * A mutation operation that adds a new custom type to the policy definition during the build process.
 *
 * @public
 */
export interface AutomatedReasoningPolicyAddTypeMutation {
  /**
   * The type definition that specifies the name, description, and possible values for the new custom type being added to the policy.
   *
   * @public
   */
  type: AutomatedReasoningPolicyDefinitionType | undefined;
}

/**
 * A mutation operation that adds a new variable to the policy definition during the build process.
 *
 * @public
 */
export interface AutomatedReasoningPolicyAddVariableMutation {
  /**
   * The variable definition that specifies the name, type, and description for the new variable being added to the policy.
   *
   * @public
   */
  variable: AutomatedReasoningPolicyDefinitionVariable | undefined;
}

/**
 * A mutation operation that removes a rule from the policy definition during the build process.
 *
 * @public
 */
export interface AutomatedReasoningPolicyDeleteRuleMutation {
  /**
   * The unique identifier of the rule to delete.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * A mutation operation that removes a custom type from the policy definition during the build process.
 *
 * @public
 */
export interface AutomatedReasoningPolicyDeleteTypeMutation {
  /**
   * The name of the custom type to delete.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * A mutation operation that removes a variable from the policy definition during the build process.
 *
 * @public
 */
export interface AutomatedReasoningPolicyDeleteVariableMutation {
  /**
   * The name of the variable to delete.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * A mutation operation that modifies an existing rule in the policy definition during the build process.
 *
 * @public
 */
export interface AutomatedReasoningPolicyUpdateRuleMutation {
  /**
   * The updated rule definition containing the modified formal logical expression and any changed metadata for the existing rule.
   *
   * @public
   */
  rule: AutomatedReasoningPolicyDefinitionRule | undefined;
}

/**
 * A mutation operation that modifies an existing custom type in the policy definition during the build process.
 *
 * @public
 */
export interface AutomatedReasoningPolicyUpdateTypeMutation {
  /**
   * The updated type definition containing the modified name, description, or values for the existing custom type.
   *
   * @public
   */
  type: AutomatedReasoningPolicyDefinitionType | undefined;
}

/**
 * A mutation operation that modifies an existing variable in the policy definition during the build process.
 *
 * @public
 */
export interface AutomatedReasoningPolicyUpdateVariableMutation {
  /**
   * The updated variable definition containing the modified name, type, or description for the existing variable.
   *
   * @public
   */
  variable: AutomatedReasoningPolicyDefinitionVariable | undefined;
}

/**
 * A container for various mutation operations that can be applied to an Automated Reasoning policy, including adding, updating, and deleting policy elements.
 *
 * @public
 */
export type AutomatedReasoningPolicyMutation =
  | AutomatedReasoningPolicyMutation.AddRuleMember
  | AutomatedReasoningPolicyMutation.AddTypeMember
  | AutomatedReasoningPolicyMutation.AddVariableMember
  | AutomatedReasoningPolicyMutation.DeleteRuleMember
  | AutomatedReasoningPolicyMutation.DeleteTypeMember
  | AutomatedReasoningPolicyMutation.DeleteVariableMember
  | AutomatedReasoningPolicyMutation.UpdateRuleMember
  | AutomatedReasoningPolicyMutation.UpdateTypeMember
  | AutomatedReasoningPolicyMutation.UpdateVariableMember
  | AutomatedReasoningPolicyMutation.$UnknownMember;

/**
 * @public
 */
export namespace AutomatedReasoningPolicyMutation {
  /**
   * A mutation to add a new custom type to the policy.
   *
   * @public
   */
  export interface AddTypeMember {
    addType: AutomatedReasoningPolicyAddTypeMutation;
    updateType?: never;
    deleteType?: never;
    addVariable?: never;
    updateVariable?: never;
    deleteVariable?: never;
    addRule?: never;
    updateRule?: never;
    deleteRule?: never;
    $unknown?: never;
  }

  /**
   * A mutation to modify an existing custom type in the policy.
   *
   * @public
   */
  export interface UpdateTypeMember {
    addType?: never;
    updateType: AutomatedReasoningPolicyUpdateTypeMutation;
    deleteType?: never;
    addVariable?: never;
    updateVariable?: never;
    deleteVariable?: never;
    addRule?: never;
    updateRule?: never;
    deleteRule?: never;
    $unknown?: never;
  }

  /**
   * A mutation to remove a custom type from the policy.
   *
   * @public
   */
  export interface DeleteTypeMember {
    addType?: never;
    updateType?: never;
    deleteType: AutomatedReasoningPolicyDeleteTypeMutation;
    addVariable?: never;
    updateVariable?: never;
    deleteVariable?: never;
    addRule?: never;
    updateRule?: never;
    deleteRule?: never;
    $unknown?: never;
  }

  /**
   * A mutation to add a new variable to the policy.
   *
   * @public
   */
  export interface AddVariableMember {
    addType?: never;
    updateType?: never;
    deleteType?: never;
    addVariable: AutomatedReasoningPolicyAddVariableMutation;
    updateVariable?: never;
    deleteVariable?: never;
    addRule?: never;
    updateRule?: never;
    deleteRule?: never;
    $unknown?: never;
  }

  /**
   * A mutation to modify an existing variable in the policy.
   *
   * @public
   */
  export interface UpdateVariableMember {
    addType?: never;
    updateType?: never;
    deleteType?: never;
    addVariable?: never;
    updateVariable: AutomatedReasoningPolicyUpdateVariableMutation;
    deleteVariable?: never;
    addRule?: never;
    updateRule?: never;
    deleteRule?: never;
    $unknown?: never;
  }

  /**
   * A mutation to remove a variable from the policy.
   *
   * @public
   */
  export interface DeleteVariableMember {
    addType?: never;
    updateType?: never;
    deleteType?: never;
    addVariable?: never;
    updateVariable?: never;
    deleteVariable: AutomatedReasoningPolicyDeleteVariableMutation;
    addRule?: never;
    updateRule?: never;
    deleteRule?: never;
    $unknown?: never;
  }

  /**
   * A mutation to add a new rule to the policy.
   *
   * @public
   */
  export interface AddRuleMember {
    addType?: never;
    updateType?: never;
    deleteType?: never;
    addVariable?: never;
    updateVariable?: never;
    deleteVariable?: never;
    addRule: AutomatedReasoningPolicyAddRuleMutation;
    updateRule?: never;
    deleteRule?: never;
    $unknown?: never;
  }

  /**
   * A mutation to modify an existing rule in the policy.
   *
   * @public
   */
  export interface UpdateRuleMember {
    addType?: never;
    updateType?: never;
    deleteType?: never;
    addVariable?: never;
    updateVariable?: never;
    deleteVariable?: never;
    addRule?: never;
    updateRule: AutomatedReasoningPolicyUpdateRuleMutation;
    deleteRule?: never;
    $unknown?: never;
  }

  /**
   * A mutation to remove a rule from the policy.
   *
   * @public
   */
  export interface DeleteRuleMember {
    addType?: never;
    updateType?: never;
    deleteType?: never;
    addVariable?: never;
    updateVariable?: never;
    deleteVariable?: never;
    addRule?: never;
    updateRule?: never;
    deleteRule: AutomatedReasoningPolicyDeleteRuleMutation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    addType?: never;
    updateType?: never;
    deleteType?: never;
    addVariable?: never;
    updateVariable?: never;
    deleteVariable?: never;
    addRule?: never;
    updateRule?: never;
    deleteRule?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    addType: (value: AutomatedReasoningPolicyAddTypeMutation) => T;
    updateType: (value: AutomatedReasoningPolicyUpdateTypeMutation) => T;
    deleteType: (value: AutomatedReasoningPolicyDeleteTypeMutation) => T;
    addVariable: (value: AutomatedReasoningPolicyAddVariableMutation) => T;
    updateVariable: (value: AutomatedReasoningPolicyUpdateVariableMutation) => T;
    deleteVariable: (value: AutomatedReasoningPolicyDeleteVariableMutation) => T;
    addRule: (value: AutomatedReasoningPolicyAddRuleMutation) => T;
    updateRule: (value: AutomatedReasoningPolicyUpdateRuleMutation) => T;
    deleteRule: (value: AutomatedReasoningPolicyDeleteRuleMutation) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Represents the planning phase of policy build workflow, where the system analyzes source content and determines what operations to perform.
 *
 * @public
 */
export interface AutomatedReasoningPolicyPlanning {}

/**
 * Provides context about what type of operation was being performed during a build step.
 *
 * @public
 */
export type AutomatedReasoningPolicyBuildStepContext =
  | AutomatedReasoningPolicyBuildStepContext.MutationMember
  | AutomatedReasoningPolicyBuildStepContext.PlanningMember
  | AutomatedReasoningPolicyBuildStepContext.$UnknownMember;

/**
 * @public
 */
export namespace AutomatedReasoningPolicyBuildStepContext {
  /**
   * Indicates that this build step was part of the planning phase, where the system determines what operations to perform.
   *
   * @public
   */
  export interface PlanningMember {
    planning: AutomatedReasoningPolicyPlanning;
    mutation?: never;
    $unknown?: never;
  }

  /**
   * Indicates that this build step involved modifying the policy structure, such as adding or updating rules, variables, or types.
   *
   * @public
   */
  export interface MutationMember {
    planning?: never;
    mutation: AutomatedReasoningPolicyMutation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    planning?: never;
    mutation?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    planning: (value: AutomatedReasoningPolicyPlanning) => T;
    mutation: (value: AutomatedReasoningPolicyMutation) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Represents a message generated during a build step, providing information about what happened or any issues encountered.
 *
 * @public
 */
export interface AutomatedReasoningPolicyBuildStepMessage {
  /**
   * The content of the message, describing what occurred during the build step.
   *
   * @public
   */
  message: string | undefined;

  /**
   * The type of message (e.g., INFO, WARNING, ERROR) indicating its severity and purpose.
   *
   * @public
   */
  messageType: AutomatedReasoningPolicyBuildMessageType | undefined;
}

/**
 * Represents a single element in an Automated Reasoning policy definition, such as a rule, variable, or type definition.
 *
 * @public
 */
export type AutomatedReasoningPolicyDefinitionElement =
  | AutomatedReasoningPolicyDefinitionElement.PolicyDefinitionRuleMember
  | AutomatedReasoningPolicyDefinitionElement.PolicyDefinitionTypeMember
  | AutomatedReasoningPolicyDefinitionElement.PolicyDefinitionVariableMember
  | AutomatedReasoningPolicyDefinitionElement.$UnknownMember;

/**
 * @public
 */
export namespace AutomatedReasoningPolicyDefinitionElement {
  /**
   * A variable element within the policy definition that represents a concept used in logical expressions and rules.
   *
   * @public
   */
  export interface PolicyDefinitionVariableMember {
    policyDefinitionVariable: AutomatedReasoningPolicyDefinitionVariable;
    policyDefinitionType?: never;
    policyDefinitionRule?: never;
    $unknown?: never;
  }

  /**
   * A custom type element within the policy definition that defines a set of possible values for variables.
   *
   * @public
   */
  export interface PolicyDefinitionTypeMember {
    policyDefinitionVariable?: never;
    policyDefinitionType: AutomatedReasoningPolicyDefinitionType;
    policyDefinitionRule?: never;
    $unknown?: never;
  }

  /**
   * A rule element within the policy definition that contains a formal logical expression used for validation.
   *
   * @public
   */
  export interface PolicyDefinitionRuleMember {
    policyDefinitionVariable?: never;
    policyDefinitionType?: never;
    policyDefinitionRule: AutomatedReasoningPolicyDefinitionRule;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    policyDefinitionVariable?: never;
    policyDefinitionType?: never;
    policyDefinitionRule?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    policyDefinitionVariable: (value: AutomatedReasoningPolicyDefinitionVariable) => T;
    policyDefinitionType: (value: AutomatedReasoningPolicyDefinitionType) => T;
    policyDefinitionRule: (value: AutomatedReasoningPolicyDefinitionRule) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Represents a single step in the policy build process, containing context about what was being processed and any messages or results.
 *
 * @public
 */
export interface AutomatedReasoningPolicyBuildStep {
  /**
   * Contextual information about what was being processed during this build step, such as the type of operation or the source material being analyzed.
   *
   * @public
   */
  context: AutomatedReasoningPolicyBuildStepContext | undefined;

  /**
   * Reference to the previous element or step in the build process, helping to trace the sequence of operations.
   *
   * @public
   */
  priorElement?: AutomatedReasoningPolicyDefinitionElement | undefined;

  /**
   * A list of messages generated during this build step, including informational messages, warnings, and error details.
   *
   * @public
   */
  messages: AutomatedReasoningPolicyBuildStepMessage[] | undefined;
}

/**
 * Represents a single entry in the policy build log, containing information about a specific step or event in the build process.
 *
 * @public
 */
export interface AutomatedReasoningPolicyBuildLogEntry {
  /**
   * The annotation or operation that was being processed when this log entry was created.
   *
   * @public
   */
  annotation: AutomatedReasoningPolicyAnnotation | undefined;

  /**
   * The status of the build step (e.g., SUCCESS, FAILED, IN_PROGRESS).
   *
   * @public
   */
  status: AutomatedReasoningPolicyAnnotationStatus | undefined;

  /**
   * Detailed information about the specific build steps that were executed, including any sub-operations or transformations.
   *
   * @public
   */
  buildSteps: AutomatedReasoningPolicyBuildStep[] | undefined;
}

/**
 * Contains detailed logging information about the policy build process, including steps taken, decisions made, and any issues encountered.
 *
 * @public
 */
export interface AutomatedReasoningPolicyBuildLog {
  /**
   * A list of log entries documenting each step in the policy build process, including timestamps, status, and detailed messages.
   *
   * @public
   */
  entries: AutomatedReasoningPolicyBuildLogEntry[] | undefined;
}

/**
 * Represents a source document that was processed during a build workflow. Contains the document content, metadata, and a hash for verification.
 *
 * @public
 */
export interface AutomatedReasoningPolicySourceDocument {
  /**
   * The raw content of the source document as a binary blob.
   *
   * @public
   */
  document: Uint8Array | undefined;

  /**
   * The MIME type of the document (e.g., application/pdf, text/plain).
   *
   * @public
   */
  documentContentType: AutomatedReasoningPolicyBuildDocumentContentType | undefined;

  /**
   * The name of the source document for identification purposes.
   *
   * @public
   */
  documentName: string | undefined;

  /**
   * An optional description providing context about the document's content and purpose.
   *
   * @public
   */
  documentDescription?: string | undefined;

  /**
   * A SHA-256 hash of the document content, used for verification and integrity checking.
   *
   * @public
   */
  documentHash: string | undefined;
}

/**
 * Describes the location of a statement within a source document using line numbers.
 *
 * @public
 */
export interface AutomatedReasoningPolicyStatementLocation {
  /**
   * The line numbers in the source document where this statement appears.
   *
   * @public
   */
  lines: number[] | undefined;
}

/**
 * Represents a single, indivisible statement extracted from a source document. Atomic statements are the fundamental units used to ground policy rules and variables to their source material.
 *
 * @public
 */
export interface AutomatedReasoningPolicyAtomicStatement {
  /**
   * A unique identifier for this atomic statement within the fidelity report.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The actual text content of the atomic statement as extracted from the source document.
   *
   * @public
   */
  text: string | undefined;

  /**
   * Information about where this statement appears in the source document, including line numbers.
   *
   * @public
   */
  location: AutomatedReasoningPolicyStatementLocation | undefined;
}

/**
 * Represents a single line of text from a source document, annotated with its line number for precise referencing.
 *
 * @public
 */
export interface AutomatedReasoningPolicyAnnotatedLine {
  /**
   * The line number of this text within the source document.
   *
   * @public
   */
  lineNumber?: number | undefined;

  /**
   * The actual text content of this line from the source document.
   *
   * @public
   */
  lineText?: string | undefined;
}

/**
 * Represents a content element within an annotated chunk. This union type allows for different types of content elements to be included in document chunks, such as individual lines of text with their line numbers.
 *
 * @public
 */
export type AutomatedReasoningPolicyAnnotatedContent =
  | AutomatedReasoningPolicyAnnotatedContent.LineMember
  | AutomatedReasoningPolicyAnnotatedContent.$UnknownMember;

/**
 * @public
 */
export namespace AutomatedReasoningPolicyAnnotatedContent {
  /**
   * An annotated line of text from the source document, including both the line number and the text content.
   *
   * @public
   */
  export interface LineMember {
    line: AutomatedReasoningPolicyAnnotatedLine;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    line?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    line: (value: AutomatedReasoningPolicyAnnotatedLine) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Represents a portion of a source document with line number annotations. Chunks help organize document content for easier navigation and reference.
 *
 * @public
 */
export interface AutomatedReasoningPolicyAnnotatedChunk {
  /**
   * The page number where this chunk begins, if the document is divided into pages.
   *
   * @public
   */
  pageNumber?: number | undefined;

  /**
   * The lines of text contained within this chunk, each annotated with its line number.
   *
   * @public
   */
  content: AutomatedReasoningPolicyAnnotatedContent[] | undefined;
}

/**
 * Represents a source document that was analyzed during fidelity report generation, including the document's metadata and its content broken down into atomic statements.
 *
 * @public
 */
export interface AutomatedReasoningPolicyReportSourceDocument {
  /**
   * The name of the source document that was analyzed.
   *
   * @public
   */
  documentName: string | undefined;

  /**
   * A SHA-256 hash of the document content, used for verification and ensuring the document hasn't changed since analysis.
   *
   * @public
   */
  documentHash: string | undefined;

  /**
   * A unique identifier for this document within the fidelity report.
   *
   * @public
   */
  documentId: string | undefined;

  /**
   * The list of atomic statements extracted from this document, representing the fundamental units of meaning used for grounding.
   *
   * @public
   */
  atomicStatements: AutomatedReasoningPolicyAtomicStatement[] | undefined;

  /**
   * The document's content organized into annotated chunks with line number information for precise referencing.
   *
   * @public
   */
  documentContent: AutomatedReasoningPolicyAnnotatedChunk[] | undefined;
}

/**
 * References a specific atomic statement within a source document, used to link policy elements back to their source material.
 *
 * @public
 */
export interface AutomatedReasoningPolicyStatementReference {
  /**
   * The unique identifier of the document containing the referenced statement.
   *
   * @public
   */
  documentId: string | undefined;

  /**
   * The unique identifier of the specific atomic statement being referenced.
   *
   * @public
   */
  statementId: string | undefined;
}

/**
 * Provides detailed fidelity analysis for a specific policy rule, including which source document statements support it and how accurate the rule is.
 *
 * @public
 */
export interface AutomatedReasoningPolicyRuleReport {
  /**
   * The identifier of the policy rule being analyzed in this report.
   *
   * @public
   */
  rule: string | undefined;

  /**
   * References to statements from the source documents that provide the basis or justification for this rule.
   *
   * @public
   */
  groundingStatements?: AutomatedReasoningPolicyStatementReference[] | undefined;

  /**
   * Explanations describing how the source statements support and justify this specific rule.
   *
   * @public
   */
  groundingJustifications?: string[] | undefined;

  /**
   * A score from 0.0 to 1.0 indicating how accurately this rule represents the source material.
   *
   * @public
   */
  accuracyScore?: number | undefined;

  /**
   * A textual explanation of the accuracy score, describing why the rule received this particular accuracy rating.
   *
   * @public
   */
  accuracyJustification?: string | undefined;
}

/**
 * Provides detailed fidelity analysis for a specific policy variable, including which source document statements support it and how accurate the variable definition is.
 *
 * @public
 */
export interface AutomatedReasoningPolicyVariableReport {
  /**
   * The name of the policy variable being analyzed in this report.
   *
   * @public
   */
  policyVariable: string | undefined;

  /**
   * References to statements from the source documents that provide the basis or justification for this variable.
   *
   * @public
   */
  groundingStatements?: AutomatedReasoningPolicyStatementReference[] | undefined;

  /**
   * Explanations describing how the source statements support and justify this specific variable definition.
   *
   * @public
   */
  groundingJustifications?: string[] | undefined;

  /**
   * A score from 0.0 to 1.0 indicating how accurately this variable represents concepts from the source material.
   *
   * @public
   */
  accuracyScore?: number | undefined;

  /**
   * A textual explanation of the accuracy score, describing why the variable received this particular accuracy rating.
   *
   * @public
   */
  accuracyJustification?: string | undefined;
}

/**
 * A comprehensive analysis report that measures how accurately a generated policy represents the source documents. The report includes coverage and accuracy scores, detailed grounding information linking policy elements to source statements, and annotated document content.
 *
 * @public
 */
export interface AutomatedReasoningPolicyFidelityReport {
  /**
   * A score from 0.0 to 1.0 indicating how well the policy covers the statements in the source documents. A higher score means more of the source content is represented in the policy.
   *
   * @public
   */
  coverageScore: number | undefined;

  /**
   * A score from 0.0 to 1.0 indicating how accurate the policy rules are relative to the source documents. A higher score means the policy rules more faithfully represent the source material.
   *
   * @public
   */
  accuracyScore: number | undefined;

  /**
   * A mapping from rule identifiers to detailed fidelity reports for each rule, showing which source statements ground each rule and how accurate it is.
   *
   * @public
   */
  ruleReports: Record<string, AutomatedReasoningPolicyRuleReport> | undefined;

  /**
   * A mapping from variable names to detailed fidelity reports for each variable, showing which source statements ground each variable and how accurate it is.
   *
   * @public
   */
  variableReports: Record<string, AutomatedReasoningPolicyVariableReport> | undefined;

  /**
   * A list of source documents with their content broken down into atomic statements and annotated with line numbers for precise referencing.
   *
   * @public
   */
  documentSources: AutomatedReasoningPolicyReportSourceDocument[] | undefined;
}

/**
 * Represents a generated test case, consisting of query content, guard content, and expected results.
 *
 * @public
 */
export interface AutomatedReasoningPolicyGeneratedTestCase {
  /**
   * The input query or prompt that generated the content. This provides context for the validation.
   *
   * @public
   */
  queryContent: string | undefined;

  /**
   * The output content that's validated by the Automated Reasoning policy. This represents the foundation model response that will be checked for accuracy.
   *
   * @public
   */
  guardContent: string | undefined;

  /**
   * The expected results of the generated test case. Possible values include:
   *
   * - `VALID` - The claims are true. The claims are implied by the premises and the Automated Reasoning policy. Given the Automated Reasoning policy and premises, it is not possible for these claims to be false. In other words, there are no alternative answers that are true that contradict the claims.
   * - `INVALID` - The claims are false. The claims are not implied by the premises and Automated Reasoning policy. Furthermore, there exists different claims that are consistent with the premises and Automated Reasoning policy.
   * - `SATISFIABLE` - The claims can be true or false. It depends on what assumptions are made for the claim to be implied from the premises and Automated Reasoning policy rules. In this situation, different assumptions can make input claims false and alternative claims true.
   * - `IMPOSSIBLE` - Automated Reasoning can’t make a statement about the claims. This can happen if the premises are logically incorrect, or if there is a conflict within the Automated Reasoning policy itself.
   *
   * @public
   */
  expectedAggregatedFindingsResult: AutomatedReasoningCheckResult | undefined;
}

/**
 * Contains a comprehensive test suite generated by the build workflow, providing validation capabilities for automated reasoning policies.
 *
 * @public
 */
export interface AutomatedReasoningPolicyGeneratedTestCases {
  /**
   * Represents a collection of generated test cases.
   *
   * @public
   */
  generatedTestCases: AutomatedReasoningPolicyGeneratedTestCase[] | undefined;
}

/**
 * Represents a test scenario used to validate an Automated Reasoning policy, including the test conditions and expected outcomes.
 *
 * @public
 */
export interface AutomatedReasoningPolicyScenario {
  /**
   * The logical expression or condition that defines this test scenario.
   *
   * @public
   */
  expression: string | undefined;

  /**
   * An alternative way to express the same test scenario, used for validation and comparison purposes.
   *
   * @public
   */
  alternateExpression: string | undefined;

  /**
   * The expected outcome when this scenario is evaluated against the policy (e.g., PASS, FAIL, VIOLATION).
   *
   * @public
   */
  expectedResult: AutomatedReasoningCheckResult | undefined;

  /**
   * The list of rule identifiers that are expected to be triggered or evaluated by this test scenario.
   *
   * @public
   */
  ruleIds: string[] | undefined;
}

/**
 * Contains a comprehensive entity encompassing all the scenarios generated by the build workflow, which can be used to validate an Automated Reasoning policy.
 *
 * @public
 */
export interface AutomatedReasoningPolicyScenarios {
  /**
   * Represents a collection of generated policy scenarios.
   *
   * @public
   */
  policyScenarios: AutomatedReasoningPolicyScenario[] | undefined;
}

/**
 * Represents a set of rules that operate on completely separate variables, indicating they address different concerns or domains within the policy.
 *
 * @public
 */
export interface AutomatedReasoningPolicyDisjointRuleSet {
  /**
   * The set of variables that are used by the rules in this disjoint set.
   *
   * @public
   */
  variables: string[] | undefined;

  /**
   * The list of rules that form this disjoint set, all operating on the same set of variables.
   *
   * @public
   */
  rules: string[] | undefined;
}

/**
 * Associates a type name with a specific value name, used for referencing type values in rules and other policy elements.
 *
 * @public
 */
export interface AutomatedReasoningPolicyDefinitionTypeValuePair {
  /**
   * The name of the custom type that contains the referenced value.
   *
   * @public
   */
  typeName: string | undefined;

  /**
   * The name of the specific value within the type.
   *
   * @public
   */
  valueName: string | undefined;
}

/**
 * Provides a comprehensive analysis of the quality and completeness of an Automated Reasoning policy definition, highlighting potential issues and optimization opportunities.
 *
 * @public
 */
export interface AutomatedReasoningPolicyDefinitionQualityReport {
  /**
   * The total number of custom types defined in the policy.
   *
   * @public
   */
  typeCount: number | undefined;

  /**
   * The total number of variables defined in the policy.
   *
   * @public
   */
  variableCount: number | undefined;

  /**
   * The total number of rules defined in the policy.
   *
   * @public
   */
  ruleCount: number | undefined;

  /**
   * A list of custom types that are defined but not referenced by any variables or rules, suggesting they may be unnecessary.
   *
   * @public
   */
  unusedTypes: string[] | undefined;

  /**
   * A list of type values that are defined but never used in any rules, indicating potential cleanup opportunities.
   *
   * @public
   */
  unusedTypeValues: AutomatedReasoningPolicyDefinitionTypeValuePair[] | undefined;

  /**
   * A list of variables that are defined but not referenced by any rules, suggesting they may be unnecessary.
   *
   * @public
   */
  unusedVariables: string[] | undefined;

  /**
   * A list of rules that may conflict with each other, potentially leading to inconsistent policy behavior.
   *
   * @public
   */
  conflictingRules: string[] | undefined;

  /**
   * Groups of rules that operate on completely separate sets of variables, indicating the policy may be addressing multiple unrelated concerns.
   *
   * @public
   */
  disjointRuleSets: AutomatedReasoningPolicyDisjointRuleSet[] | undefined;
}

/**
 * Contains the various assets generated during a policy build workflow, including logs, quality reports, test cases, and the final policy definition.
 *
 * @public
 */
export type AutomatedReasoningPolicyBuildResultAssets =
  | AutomatedReasoningPolicyBuildResultAssets.AssetManifestMember
  | AutomatedReasoningPolicyBuildResultAssets.BuildLogMember
  | AutomatedReasoningPolicyBuildResultAssets.DocumentMember
  | AutomatedReasoningPolicyBuildResultAssets.FidelityReportMember
  | AutomatedReasoningPolicyBuildResultAssets.GeneratedTestCasesMember
  | AutomatedReasoningPolicyBuildResultAssets.PolicyDefinitionMember
  | AutomatedReasoningPolicyBuildResultAssets.PolicyScenariosMember
  | AutomatedReasoningPolicyBuildResultAssets.QualityReportMember
  | AutomatedReasoningPolicyBuildResultAssets.$UnknownMember;

/**
 * @public
 */
export namespace AutomatedReasoningPolicyBuildResultAssets {
  /**
   * The complete policy definition generated by the build workflow, containing all rules, variables, and custom types extracted from the source documents.
   *
   * @public
   */
  export interface PolicyDefinitionMember {
    policyDefinition: AutomatedReasoningPolicyDefinition;
    qualityReport?: never;
    buildLog?: never;
    generatedTestCases?: never;
    policyScenarios?: never;
    assetManifest?: never;
    document?: never;
    fidelityReport?: never;
    $unknown?: never;
  }

  /**
   * A comprehensive report analyzing the quality of the generated policy, including metrics about rule coverage, potential conflicts, and unused elements.
   *
   * @public
   */
  export interface QualityReportMember {
    policyDefinition?: never;
    qualityReport: AutomatedReasoningPolicyDefinitionQualityReport;
    buildLog?: never;
    generatedTestCases?: never;
    policyScenarios?: never;
    assetManifest?: never;
    document?: never;
    fidelityReport?: never;
    $unknown?: never;
  }

  /**
   * The complete build log containing detailed information about each step in the policy generation process.
   *
   * @public
   */
  export interface BuildLogMember {
    policyDefinition?: never;
    qualityReport?: never;
    buildLog: AutomatedReasoningPolicyBuildLog;
    generatedTestCases?: never;
    policyScenarios?: never;
    assetManifest?: never;
    document?: never;
    fidelityReport?: never;
    $unknown?: never;
  }

  /**
   * A comprehensive test suite generated by the build workflow, providing validation capabilities for automated reasoning policies.
   *
   * @public
   */
  export interface GeneratedTestCasesMember {
    policyDefinition?: never;
    qualityReport?: never;
    buildLog?: never;
    generatedTestCases: AutomatedReasoningPolicyGeneratedTestCases;
    policyScenarios?: never;
    assetManifest?: never;
    document?: never;
    fidelityReport?: never;
    $unknown?: never;
  }

  /**
   * An entity encompassing all the policy scenarios generated by the build workflow, which can be used to validate an Automated Reasoning policy.
   *
   * @public
   */
  export interface PolicyScenariosMember {
    policyDefinition?: never;
    qualityReport?: never;
    buildLog?: never;
    generatedTestCases?: never;
    policyScenarios: AutomatedReasoningPolicyScenarios;
    assetManifest?: never;
    document?: never;
    fidelityReport?: never;
    $unknown?: never;
  }

  /**
   * A manifest listing all available artifacts produced by the build workflow. This provides a catalog of all assets that can be retrieved, including their types, names, and identifiers.
   *
   * @public
   */
  export interface AssetManifestMember {
    policyDefinition?: never;
    qualityReport?: never;
    buildLog?: never;
    generatedTestCases?: never;
    policyScenarios?: never;
    assetManifest: AutomatedReasoningPolicyBuildResultAssetManifest;
    document?: never;
    fidelityReport?: never;
    $unknown?: never;
  }

  /**
   * A source document that was used as input during the build workflow. This allows you to retrieve the original documents that were processed to generate the policy.
   *
   * @public
   */
  export interface DocumentMember {
    policyDefinition?: never;
    qualityReport?: never;
    buildLog?: never;
    generatedTestCases?: never;
    policyScenarios?: never;
    assetManifest?: never;
    document: AutomatedReasoningPolicySourceDocument;
    fidelityReport?: never;
    $unknown?: never;
  }

  /**
   * A comprehensive fidelity report that measures how accurately the generated policy represents the source documents. The report includes coverage and accuracy scores, along with detailed grounding information for rules and variables.
   *
   * @public
   */
  export interface FidelityReportMember {
    policyDefinition?: never;
    qualityReport?: never;
    buildLog?: never;
    generatedTestCases?: never;
    policyScenarios?: never;
    assetManifest?: never;
    document?: never;
    fidelityReport: AutomatedReasoningPolicyFidelityReport;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    policyDefinition?: never;
    qualityReport?: never;
    buildLog?: never;
    generatedTestCases?: never;
    policyScenarios?: never;
    assetManifest?: never;
    document?: never;
    fidelityReport?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    policyDefinition: (value: AutomatedReasoningPolicyDefinition) => T;
    qualityReport: (value: AutomatedReasoningPolicyDefinitionQualityReport) => T;
    buildLog: (value: AutomatedReasoningPolicyBuildLog) => T;
    generatedTestCases: (value: AutomatedReasoningPolicyGeneratedTestCases) => T;
    policyScenarios: (value: AutomatedReasoningPolicyScenarios) => T;
    assetManifest: (value: AutomatedReasoningPolicyBuildResultAssetManifest) => T;
    document: (value: AutomatedReasoningPolicySourceDocument) => T;
    fidelityReport: (value: AutomatedReasoningPolicyFidelityReport) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyBuildWorkflowResultAssetsResponse {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The unique identifier of the build workflow.
   *
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * The requested build workflow asset. This is a union type that returns only one of the available asset types (logs, reports, or generated artifacts) based on the specific asset type requested in the API call.
   *
   * @public
   */
  buildWorkflowAssets?: AutomatedReasoningPolicyBuildResultAssets | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyNextScenarioRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy for which you want to get the next test scenario.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The unique identifier of the build workflow associated with the test scenarios.
   *
   * @public
   */
  buildWorkflowId: string | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyNextScenarioResponse {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The next test scenario to validate, including the test expression and expected results.
   *
   * @public
   */
  scenario?: AutomatedReasoningPolicyScenario | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyTestCaseRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy that contains the test.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The unique identifier of the test to retrieve.
   *
   * @public
   */
  testCaseId: string | undefined;
}

/**
 * Represents a test for validating an Automated Reasoning policy. tests contain sample inputs and expected outcomes to verify policy behavior.
 *
 * @public
 */
export interface AutomatedReasoningPolicyTestCase {
  /**
   * The unique identifier of the test.
   *
   * @public
   */
  testCaseId: string | undefined;

  /**
   * The output content to be validated by the policy, typically representing a foundation model response.
   *
   * @public
   */
  guardContent: string | undefined;

  /**
   * The input query or prompt that generated the content. This provides context for the validation.
   *
   * @public
   */
  queryContent?: string | undefined;

  /**
   * The expected result of the Automated Reasoning check for this test.
   *
   * @public
   */
  expectedAggregatedFindingsResult?: AutomatedReasoningCheckResult | undefined;

  /**
   * The timestamp when the test was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the test was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The minimum confidence level for logic validation. Content meeting this threshold is considered high-confidence and can be validated.
   *
   * @public
   */
  confidenceThreshold?: number | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyTestCaseResponse {
  /**
   * The Amazon Resource Name (ARN) of the policy that contains the test.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The test details including the content, query, expected result, and metadata.
   *
   * @public
   */
  testCase: AutomatedReasoningPolicyTestCase | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyTestResultRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The build workflow identifier. The build workflow must display a `COMPLETED` status to get results.
   *
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * The unique identifier of the test for which to retrieve results.
   *
   * @public
   */
  testCaseId: string | undefined;
}

/**
 * References a specific automated reasoning policy rule that was applied during evaluation.
 *
 * @public
 */
export interface AutomatedReasoningCheckRule {
  /**
   * The unique identifier of the automated reasoning rule.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The ARN of the automated reasoning policy version that contains this rule.
   *
   * @public
   */
  policyVersionArn?: string | undefined;
}

/**
 * Represents a logical statement that can be expressed both in formal logic notation and natural language, providing dual representations for better understanding and validation.
 *
 * @public
 */
export interface AutomatedReasoningLogicStatement {
  /**
   * The formal logic representation of the statement using mathematical notation and logical operators.
   *
   * @public
   */
  logic: string | undefined;

  /**
   * The natural language representation of the logical statement, providing a human-readable interpretation of the formal logic.
   *
   * @public
   */
  naturalLanguage?: string | undefined;
}

/**
 * Identifies logical issues in the translated statements that exist independent of any policy rules, such as statements that are always true or always false.
 *
 * @public
 */
export interface AutomatedReasoningCheckLogicWarning {
  /**
   * The category of the detected logical issue, such as statements that are always true or always false.
   *
   * @public
   */
  type?: AutomatedReasoningCheckLogicWarningType | undefined;

  /**
   * The logical statements that serve as premises under which the claims are validated.
   *
   * @public
   */
  premises?: AutomatedReasoningLogicStatement[] | undefined;

  /**
   * The logical statements that are validated while assuming the policy and premises.
   *
   * @public
   */
  claims?: AutomatedReasoningLogicStatement[] | undefined;
}

/**
 * References a portion of the original input text that corresponds to logical elements.
 *
 * @public
 */
export interface AutomatedReasoningCheckInputTextReference {
  /**
   * The specific text from the original input that this reference points to.
   *
   * @public
   */
  text?: string | undefined;
}

/**
 * Contains the logical translation of natural language input into formal logical statements, including premises, claims, and confidence scores.
 *
 * @public
 */
export interface AutomatedReasoningCheckTranslation {
  /**
   * The logical statements that serve as the foundation or assumptions for the claims.
   *
   * @public
   */
  premises?: AutomatedReasoningLogicStatement[] | undefined;

  /**
   * The logical statements that are being validated against the premises and policy rules.
   *
   * @public
   */
  claims: AutomatedReasoningLogicStatement[] | undefined;

  /**
   * References to portions of the original input text that correspond to the premises but could not be fully translated.
   *
   * @public
   */
  untranslatedPremises?: AutomatedReasoningCheckInputTextReference[] | undefined;

  /**
   * References to portions of the original input text that correspond to the claims but could not be fully translated.
   *
   * @public
   */
  untranslatedClaims?: AutomatedReasoningCheckInputTextReference[] | undefined;

  /**
   * A confidence score between 0 and 1 indicating how certain the system is about the logical translation.
   *
   * @public
   */
  confidence: number | undefined;
}

/**
 * Indicates that no valid claims can be made due to logical contradictions in the premises or rules.
 *
 * @public
 */
export interface AutomatedReasoningCheckImpossibleFinding {
  /**
   * The logical translation of the input that this finding evaluates.
   *
   * @public
   */
  translation?: AutomatedReasoningCheckTranslation | undefined;

  /**
   * The automated reasoning policy rules that contradict the claims and/or premises in the input.
   *
   * @public
   */
  contradictingRules?: AutomatedReasoningCheckRule[] | undefined;

  /**
   * Indication of a logic issue with the translation without needing to consider the automated reasoning policy rules.
   *
   * @public
   */
  logicWarning?: AutomatedReasoningCheckLogicWarning | undefined;
}

/**
 * Indicates that the claims are logically false and contradictory to the established rules or premises.
 *
 * @public
 */
export interface AutomatedReasoningCheckInvalidFinding {
  /**
   * The logical translation of the input that this finding invalidates.
   *
   * @public
   */
  translation?: AutomatedReasoningCheckTranslation | undefined;

  /**
   * The automated reasoning policy rules that contradict the claims in the input.
   *
   * @public
   */
  contradictingRules?: AutomatedReasoningCheckRule[] | undefined;

  /**
   * Indication of a logic issue with the translation without needing to consider the automated reasoning policy rules.
   *
   * @public
   */
  logicWarning?: AutomatedReasoningCheckLogicWarning | undefined;
}

/**
 * Indicates that no relevant logical information could be extracted from the input for validation.
 *
 * @public
 */
export interface AutomatedReasoningCheckNoTranslationsFinding {}

/**
 * Represents a logical scenario where claims can be evaluated as true or false, containing specific logical assignments.
 *
 * @public
 */
export interface AutomatedReasoningCheckScenario {
  /**
   * List of logical assignments and statements that define this scenario.
   *
   * @public
   */
  statements?: AutomatedReasoningLogicStatement[] | undefined;
}

/**
 * Indicates that the claims could be either true or false depending on additional assumptions not provided in the input.
 *
 * @public
 */
export interface AutomatedReasoningCheckSatisfiableFinding {
  /**
   * The logical translation of the input that this finding evaluates.
   *
   * @public
   */
  translation?: AutomatedReasoningCheckTranslation | undefined;

  /**
   * An example scenario demonstrating how the claims could be logically true.
   *
   * @public
   */
  claimsTrueScenario?: AutomatedReasoningCheckScenario | undefined;

  /**
   * An example scenario demonstrating how the claims could be logically false.
   *
   * @public
   */
  claimsFalseScenario?: AutomatedReasoningCheckScenario | undefined;

  /**
   * Indication of a logic issue with the translation without needing to consider the automated reasoning policy rules.
   *
   * @public
   */
  logicWarning?: AutomatedReasoningCheckLogicWarning | undefined;
}

/**
 * Indicates that the input exceeds the processing capacity due to the volume or complexity of the logical information.
 *
 * @public
 */
export interface AutomatedReasoningCheckTooComplexFinding {}

/**
 * Represents one possible logical interpretation of ambiguous input content.
 *
 * @public
 */
export interface AutomatedReasoningCheckTranslationOption {
  /**
   * Different logical interpretations that were detected during translation of the input.
   *
   * @public
   */
  translations?: AutomatedReasoningCheckTranslation[] | undefined;
}

/**
 * Indicates that the input has multiple valid logical interpretations, requiring additional context or clarification.
 *
 * @public
 */
export interface AutomatedReasoningCheckTranslationAmbiguousFinding {
  /**
   * Different logical interpretations that were detected during translation of the input.
   *
   * @public
   */
  options?: AutomatedReasoningCheckTranslationOption[] | undefined;

  /**
   * Scenarios showing how the different translation options differ in meaning.
   *
   * @public
   */
  differenceScenarios?: AutomatedReasoningCheckScenario[] | undefined;
}

/**
 * Indicates that the claims are definitively true and logically implied by the premises, with no possible alternative interpretations.
 *
 * @public
 */
export interface AutomatedReasoningCheckValidFinding {
  /**
   * The logical translation of the input that this finding validates.
   *
   * @public
   */
  translation?: AutomatedReasoningCheckTranslation | undefined;

  /**
   * An example scenario demonstrating how the claims are logically true.
   *
   * @public
   */
  claimsTrueScenario?: AutomatedReasoningCheckScenario | undefined;

  /**
   * The automated reasoning policy rules that support why this result is considered valid.
   *
   * @public
   */
  supportingRules?: AutomatedReasoningCheckRule[] | undefined;

  /**
   * Indication of a logic issue with the translation without needing to consider the automated reasoning policy rules.
   *
   * @public
   */
  logicWarning?: AutomatedReasoningCheckLogicWarning | undefined;
}

/**
 * Represents the result of an Automated Reasoning validation check, indicating whether the content is logically valid, invalid, or falls into other categories based on the policy rules.
 *
 * @public
 */
export type AutomatedReasoningCheckFinding =
  | AutomatedReasoningCheckFinding.ImpossibleMember
  | AutomatedReasoningCheckFinding.InvalidMember
  | AutomatedReasoningCheckFinding.NoTranslationsMember
  | AutomatedReasoningCheckFinding.SatisfiableMember
  | AutomatedReasoningCheckFinding.TooComplexMember
  | AutomatedReasoningCheckFinding.TranslationAmbiguousMember
  | AutomatedReasoningCheckFinding.ValidMember
  | AutomatedReasoningCheckFinding.$UnknownMember;

/**
 * @public
 */
export namespace AutomatedReasoningCheckFinding {
  /**
   * Indicates that the claims are true. The claims are implied by the premises and the Automated Reasoning policy. Given the Automated Reasoning policy and premises, it is not possible for these claims to be false.
   *
   * @public
   */
  export interface ValidMember {
    valid: AutomatedReasoningCheckValidFinding;
    invalid?: never;
    satisfiable?: never;
    impossible?: never;
    translationAmbiguous?: never;
    tooComplex?: never;
    noTranslations?: never;
    $unknown?: never;
  }

  /**
   * Indicates that the claims are false. The claims are not implied by the premises and Automated Reasoning policy. Furthermore, there exist different claims that are consistent with the premises and Automated Reasoning policy.
   *
   * @public
   */
  export interface InvalidMember {
    valid?: never;
    invalid: AutomatedReasoningCheckInvalidFinding;
    satisfiable?: never;
    impossible?: never;
    translationAmbiguous?: never;
    tooComplex?: never;
    noTranslations?: never;
    $unknown?: never;
  }

  /**
   * Indicates that the claims can be true or false. It depends on what assumptions are made for the claim to be implied from the premises and Automated Reasoning policy rules. In this situation, different assumptions can make input claims false and alternative claims true.
   *
   * @public
   */
  export interface SatisfiableMember {
    valid?: never;
    invalid?: never;
    satisfiable: AutomatedReasoningCheckSatisfiableFinding;
    impossible?: never;
    translationAmbiguous?: never;
    tooComplex?: never;
    noTranslations?: never;
    $unknown?: never;
  }

  /**
   * Indicates that Automated Reasoning cannot make a statement about the claims. This can happen if the premises are logically incorrect, or if there is a conflict within the Automated Reasoning policy itself.
   *
   * @public
   */
  export interface ImpossibleMember {
    valid?: never;
    invalid?: never;
    satisfiable?: never;
    impossible: AutomatedReasoningCheckImpossibleFinding;
    translationAmbiguous?: never;
    tooComplex?: never;
    noTranslations?: never;
    $unknown?: never;
  }

  /**
   * Indicates that an ambiguity was detected in the translation, making it unsound to continue with validity checking. Additional context or follow-up questions might be needed to get translation to succeed.
   *
   * @public
   */
  export interface TranslationAmbiguousMember {
    valid?: never;
    invalid?: never;
    satisfiable?: never;
    impossible?: never;
    translationAmbiguous: AutomatedReasoningCheckTranslationAmbiguousFinding;
    tooComplex?: never;
    noTranslations?: never;
    $unknown?: never;
  }

  /**
   * Indicates that the input contains too much information for Automated Reasoning to process within its latency limits.
   *
   * @public
   */
  export interface TooComplexMember {
    valid?: never;
    invalid?: never;
    satisfiable?: never;
    impossible?: never;
    translationAmbiguous?: never;
    tooComplex: AutomatedReasoningCheckTooComplexFinding;
    noTranslations?: never;
    $unknown?: never;
  }

  /**
   * Identifies that some or all of the input prompt wasn't translated into logic. This can happen if the input isn't relevant to the Automated Reasoning policy, or if the policy doesn't have variables to model relevant input.
   *
   * @public
   */
  export interface NoTranslationsMember {
    valid?: never;
    invalid?: never;
    satisfiable?: never;
    impossible?: never;
    translationAmbiguous?: never;
    tooComplex?: never;
    noTranslations: AutomatedReasoningCheckNoTranslationsFinding;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    valid?: never;
    invalid?: never;
    satisfiable?: never;
    impossible?: never;
    translationAmbiguous?: never;
    tooComplex?: never;
    noTranslations?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    valid: (value: AutomatedReasoningCheckValidFinding) => T;
    invalid: (value: AutomatedReasoningCheckInvalidFinding) => T;
    satisfiable: (value: AutomatedReasoningCheckSatisfiableFinding) => T;
    impossible: (value: AutomatedReasoningCheckImpossibleFinding) => T;
    translationAmbiguous: (value: AutomatedReasoningCheckTranslationAmbiguousFinding) => T;
    tooComplex: (value: AutomatedReasoningCheckTooComplexFinding) => T;
    noTranslations: (value: AutomatedReasoningCheckNoTranslationsFinding) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains the results of testing an Automated Reasoning policy against various scenarios and validation checks.
 *
 * @public
 */
export interface AutomatedReasoningPolicyTestResult {
  /**
   * The test case that was executed, including the input content, expected results, and configuration parameters used during validation.
   *
   * @public
   */
  testCase: AutomatedReasoningPolicyTestCase | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy that was tested.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The overall status of the test run (e.g., COMPLETED, FAILED, IN_PROGRESS).
   *
   * @public
   */
  testRunStatus: AutomatedReasoningPolicyTestRunStatus | undefined;

  /**
   * Detailed findings from the test run, including any issues, violations, or unexpected behaviors discovered.
   *
   * @public
   */
  testFindings?: AutomatedReasoningCheckFinding[] | undefined;

  /**
   * The overall result of the test run, indicating whether the policy passed or failed validation.
   *
   * @public
   */
  testRunResult?: AutomatedReasoningPolicyTestRunResult | undefined;

  /**
   * A summary of all test findings, aggregated to provide an overall assessment of policy quality and correctness.
   *
   * @public
   */
  aggregatedTestFindingsResult?: AutomatedReasoningCheckResult | undefined;

  /**
   * The timestamp when the test results were last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyTestResultResponse {
  /**
   * The test result containing validation findings, execution status, and detailed analysis.
   *
   * @public
   */
  testResult: AutomatedReasoningPolicyTestResult | undefined;
}

/**
 * @public
 */
export interface ListAutomatedReasoningPoliciesRequest {
  /**
   * Optional filter to list only the policy versions with the specified Amazon Resource Name (ARN). If not provided, the DRAFT versions for all policies are listed.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * The pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of policies to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains summary information about an Automated Reasoning policy, including metadata and timestamps.
 *
 * @public
 */
export interface AutomatedReasoningPolicySummary {
  /**
   * The Amazon Resource Name (ARN) of the policy.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The version of the policy.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The unique identifier of the policy.
   *
   * @public
   */
  policyId: string | undefined;

  /**
   * The timestamp when the policy was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the policy was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAutomatedReasoningPoliciesResponse {
  /**
   * A list of Automated Reasoning policy summaries.
   *
   * @public
   */
  automatedReasoningPolicySummaries: AutomatedReasoningPolicySummary[] | undefined;

  /**
   * The pagination token to use in a subsequent request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomatedReasoningPolicyBuildWorkflowsRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy whose build workflows you want to list.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * A pagination token from a previous request to continue listing build workflows from where the previous request left off.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of build workflows to return in a single response. Valid range is 1-100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides a summary of a policy build workflow, including its current status, timing information, and key identifiers.
 *
 * @public
 */
export interface AutomatedReasoningPolicyBuildWorkflowSummary {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy associated with this build workflow.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The unique identifier of the build workflow.
   *
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * The current status of the build workflow (e.g., RUNNING, COMPLETED, FAILED, CANCELLED).
   *
   * @public
   */
  status: AutomatedReasoningPolicyBuildWorkflowStatus | undefined;

  /**
   * The type of build workflow (e.g., DOCUMENT_INGESTION, POLICY_REPAIR).
   *
   * @public
   */
  buildWorkflowType: AutomatedReasoningPolicyBuildWorkflowType | undefined;

  /**
   * The timestamp when the build workflow was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the build workflow was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAutomatedReasoningPolicyBuildWorkflowsResponse {
  /**
   * A list of build workflow summaries, each containing key information about a build workflow including its status and timestamps.
   *
   * @public
   */
  automatedReasoningPolicyBuildWorkflowSummaries: AutomatedReasoningPolicyBuildWorkflowSummary[] | undefined;

  /**
   * A pagination token to use in subsequent requests to retrieve additional build workflows.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomatedReasoningPolicyTestCasesRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy for which to list tests.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of tests to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAutomatedReasoningPolicyTestCasesResponse {
  /**
   * A list of tests for the specified policy.
   *
   * @public
   */
  testCases: AutomatedReasoningPolicyTestCase[] | undefined;

  /**
   * The pagination token to use in a subsequent request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomatedReasoningPolicyTestResultsRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy whose test results you want to list.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The unique identifier of the build workflow whose test results you want to list.
   *
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * A pagination token from a previous request to continue listing test results from where the previous request left off.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of test results to return in a single response. Valid range is 1-100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAutomatedReasoningPolicyTestResultsResponse {
  /**
   * A list of test results, each containing information about how the policy performed on specific test scenarios.
   *
   * @public
   */
  testResults: AutomatedReasoningPolicyTestResult[] | undefined;

  /**
   * A pagination token to use in subsequent requests to retrieve additional test results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents a source document used in the policy build workflow, containing the content and metadata needed for policy generation.
 *
 * @public
 */
export interface AutomatedReasoningPolicyBuildWorkflowDocument {
  /**
   * The actual content of the source document that will be analyzed to extract policy rules and concepts.
   *
   * @public
   */
  document: Uint8Array | undefined;

  /**
   * The MIME type of the document content (e.g., text/plain, application/pdf, text/markdown).
   *
   * @public
   */
  documentContentType: AutomatedReasoningPolicyBuildDocumentContentType | undefined;

  /**
   * A descriptive name for the document that helps identify its purpose and content.
   *
   * @public
   */
  documentName: string | undefined;

  /**
   * A detailed description of the document's content and how it should be used in the policy generation process.
   *
   * @public
   */
  documentDescription?: string | undefined;
}

/**
 * Configuration for generating a fidelity report, which can either analyze new documents or update an existing fidelity report with a new policy definition.
 *
 * @public
 */
export type AutomatedReasoningPolicyGenerateFidelityReportContent =
  | AutomatedReasoningPolicyGenerateFidelityReportContent.DocumentsMember
  | AutomatedReasoningPolicyGenerateFidelityReportContent.$UnknownMember;

/**
 * @public
 */
export namespace AutomatedReasoningPolicyGenerateFidelityReportContent {
  /**
   * Source documents to analyze for generating a new fidelity report. The documents will be processed to create atomic statements and grounding information.
   *
   * @public
   */
  export interface DocumentsMember {
    documents: AutomatedReasoningPolicyBuildWorkflowDocument[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    documents?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    documents: (value: AutomatedReasoningPolicyBuildWorkflowDocument[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration for an iterative policy refinement workflow, including source documents to process and optional feedback to guide the refinement.
 *
 * @public
 */
export interface AutomatedReasoningPolicyIterativeRefinementContent {
  /**
   * Source documents used for iterative policy refinement. These documents provide context for refining the policy definition.
   *
   * @public
   */
  documents: AutomatedReasoningPolicyBuildWorkflowDocument[] | undefined;

  /**
   * Optional feedback to guide the iterative refinement workflow. Provide specific instructions or constraints for policy refinement.
   *
   * @public
   */
  feedback?: string | undefined;
}

/**
 * Contains content and instructions for repairing or improving an existing Automated Reasoning policy.
 *
 * @public
 */
export interface AutomatedReasoningPolicyBuildWorkflowRepairContent {
  /**
   * Specific annotations or modifications to apply during the policy repair process, such as rule corrections or variable updates.
   *
   * @public
   */
  annotations: AutomatedReasoningPolicyAnnotation[] | undefined;
}

/**
 * Defines the content and configuration for different types of policy build workflows.
 *
 * @public
 */
export type AutomatedReasoningPolicyWorkflowTypeContent =
  | AutomatedReasoningPolicyWorkflowTypeContent.DocumentsMember
  | AutomatedReasoningPolicyWorkflowTypeContent.GenerateFidelityReportContentMember
  | AutomatedReasoningPolicyWorkflowTypeContent.IterativeRefinementContentMember
  | AutomatedReasoningPolicyWorkflowTypeContent.PolicyRepairAssetsMember
  | AutomatedReasoningPolicyWorkflowTypeContent.$UnknownMember;

/**
 * @public
 */
export namespace AutomatedReasoningPolicyWorkflowTypeContent {
  /**
   * The list of documents to be processed in a document ingestion workflow.
   *
   * @public
   */
  export interface DocumentsMember {
    documents: AutomatedReasoningPolicyBuildWorkflowDocument[];
    policyRepairAssets?: never;
    generateFidelityReportContent?: never;
    iterativeRefinementContent?: never;
    $unknown?: never;
  }

  /**
   * The assets and instructions needed for a policy repair workflow, including repair annotations and guidance.
   *
   * @public
   */
  export interface PolicyRepairAssetsMember {
    documents?: never;
    policyRepairAssets: AutomatedReasoningPolicyBuildWorkflowRepairContent;
    generateFidelityReportContent?: never;
    iterativeRefinementContent?: never;
    $unknown?: never;
  }

  /**
   * The content configuration for generating a fidelity report workflow. This can include source documents to analyze or an existing fidelity report to update with a new policy definition.
   *
   * @public
   */
  export interface GenerateFidelityReportContentMember {
    documents?: never;
    policyRepairAssets?: never;
    generateFidelityReportContent: AutomatedReasoningPolicyGenerateFidelityReportContent;
    iterativeRefinementContent?: never;
    $unknown?: never;
  }

  /**
   * Content configuration to start an iterative policy refinement workflow that uses generative AI to automatically make changes to the policy based on test results and the optional feedback provided.
   *
   * @public
   */
  export interface IterativeRefinementContentMember {
    documents?: never;
    policyRepairAssets?: never;
    generateFidelityReportContent?: never;
    iterativeRefinementContent: AutomatedReasoningPolicyIterativeRefinementContent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    documents?: never;
    policyRepairAssets?: never;
    generateFidelityReportContent?: never;
    iterativeRefinementContent?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    documents: (value: AutomatedReasoningPolicyBuildWorkflowDocument[]) => T;
    policyRepairAssets: (value: AutomatedReasoningPolicyBuildWorkflowRepairContent) => T;
    generateFidelityReportContent: (value: AutomatedReasoningPolicyGenerateFidelityReportContent) => T;
    iterativeRefinementContent: (value: AutomatedReasoningPolicyIterativeRefinementContent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Defines the source content for a policy build workflow, which can include documents, repair instructions, or other input materials.
 *
 * @public
 */
export interface AutomatedReasoningPolicyBuildWorkflowSource {
  /**
   * An existing policy definition that serves as the starting point for the build workflow, typically used in policy repair or update scenarios.
   *
   * @public
   */
  policyDefinition?: AutomatedReasoningPolicyDefinition | undefined;

  /**
   * The actual content to be processed in the build workflow, such as documents to analyze or repair instructions to apply.
   *
   * @public
   */
  workflowContent?: AutomatedReasoningPolicyWorkflowTypeContent | undefined;
}

/**
 * @public
 */
export interface StartAutomatedReasoningPolicyBuildWorkflowRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy for which to start the build workflow.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The type of build workflow to start (e.g., DOCUMENT_INGESTION for processing new documents, POLICY_REPAIR for fixing existing policies).
   *
   * @public
   */
  buildWorkflowType: AutomatedReasoningPolicyBuildWorkflowType | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than once. If this token matches a previous request, Amazon Bedrock ignores the request but doesn't return an error.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The source content for the build workflow, such as documents to analyze or repair instructions for existing policies.
   *
   * @public
   */
  sourceContent: AutomatedReasoningPolicyBuildWorkflowSource | undefined;
}

/**
 * @public
 */
export interface StartAutomatedReasoningPolicyBuildWorkflowResponse {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The unique identifier of the newly started build workflow. Use this ID to track the workflow's progress and retrieve its results.
   *
   * @public
   */
  buildWorkflowId: string | undefined;
}

/**
 * @public
 */
export interface StartAutomatedReasoningPolicyTestWorkflowRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy to test.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The build workflow identifier. The build workflow must show a `COMPLETED` status before running tests.
   *
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * The list of test identifiers to run. If not provided, all tests for the policy are run.
   *
   * @public
   */
  testCaseIds?: string[] | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request but doesn't return an error.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface StartAutomatedReasoningPolicyTestWorkflowResponse {
  /**
   * The Amazon Resource Name (ARN) of the policy for which the test workflow was started.
   *
   * @public
   */
  policyArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateAutomatedReasoningPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy to update. This must be the ARN of a draft policy.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The updated policy definition containing the formal logic rules, variables, and types.
   *
   * @public
   */
  policyDefinition: AutomatedReasoningPolicyDefinition | undefined;

  /**
   * The updated name for the Automated Reasoning policy.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The updated description for the Automated Reasoning policy.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAutomatedReasoningPolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated policy.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The updated name of the policy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The hash of the updated policy definition.
   *
   * @public
   */
  definitionHash: string | undefined;

  /**
   * The timestamp when the policy was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateAutomatedReasoningPolicyAnnotationsRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy whose annotations you want to update.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The unique identifier of the build workflow whose annotations you want to update.
   *
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * The updated annotations containing modified rules, variables, and types for the policy.
   *
   * @public
   */
  annotations: AutomatedReasoningPolicyAnnotation[] | undefined;

  /**
   * The hash value of the annotation set that you're updating. This is used for optimistic concurrency control to prevent conflicting updates.
   *
   * @public
   */
  lastUpdatedAnnotationSetHash: string | undefined;
}

/**
 * @public
 */
export interface UpdateAutomatedReasoningPolicyAnnotationsResponse {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The unique identifier of the build workflow.
   *
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * The new hash value representing the updated state of the annotations.
   *
   * @public
   */
  annotationSetHash: string | undefined;

  /**
   * The timestamp when the annotations were updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateAutomatedReasoningPolicyTestCaseRequest {
  /**
   * The Amazon Resource Name (ARN) of the Automated Reasoning policy that contains the test.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The unique identifier of the test to update.
   *
   * @public
   */
  testCaseId: string | undefined;

  /**
   * The updated content to be validated by the Automated Reasoning policy.
   *
   * @public
   */
  guardContent: string | undefined;

  /**
   * The updated input query or prompt that generated the content.
   *
   * @public
   */
  queryContent?: string | undefined;

  /**
   * The timestamp when the test was last updated. This is used as a concurrency token to prevent conflicting modifications.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * The updated expected result of the Automated Reasoning check.
   *
   * @public
   */
  expectedAggregatedFindingsResult: AutomatedReasoningCheckResult | undefined;

  /**
   * The updated minimum confidence level for logic validation. If null is provided, the threshold will be removed.
   *
   * @public
   */
  confidenceThreshold?: number | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAutomatedReasoningPolicyTestCaseResponse {
  /**
   * The Amazon Resource Name (ARN) of the policy that contains the updated test.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The unique identifier of the updated test.
   *
   * @public
   */
  testCaseId: string | undefined;
}

/**
 * The configuration of a virtual private cloud (VPC). For more information, see [Protect your data using Amazon Virtual Private Cloud and Amazon Web Services PrivateLink](https://docs.aws.amazon.com/bedrock/latest/userguide/usingVPC.html).
 *
 * @public
 */
export interface VpcConfig {
  /**
   * An array of IDs for each subnet in the VPC to use.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * An array of IDs for each security group in the VPC to use.
   *
   * @public
   */
  securityGroupIds: string[] | undefined;
}

/**
 * Specifies the configuration for a Amazon SageMaker endpoint.
 *
 * @public
 */
export interface SageMakerEndpoint {
  /**
   * The number of Amazon EC2 compute instances to deploy for initial endpoint creation.
   *
   * @public
   */
  initialInstanceCount: number | undefined;

  /**
   * The Amazon EC2 compute instance type to deploy for hosting the model.
   *
   * @public
   */
  instanceType: string | undefined;

  /**
   * The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and docker image for deployment on Amazon EC2 compute instances or for batch transform jobs.
   *
   * @public
   */
  executionRole: string | undefined;

  /**
   * The Amazon Web Services KMS key that Amazon SageMaker uses to encrypt data on the storage volume attached to the Amazon EC2 compute instance that hosts the endpoint.
   *
   * @public
   */
  kmsEncryptionKey?: string | undefined;

  /**
   * The VPC configuration for the endpoint.
   *
   * @public
   */
  vpc?: VpcConfig | undefined;
}

/**
 * Specifies the configuration for the endpoint.
 *
 * @public
 */
export type EndpointConfig =
  | EndpointConfig.SageMakerMember
  | EndpointConfig.$UnknownMember;

/**
 * @public
 */
export namespace EndpointConfig {
  /**
   * The configuration specific to Amazon SageMaker for the endpoint.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    sageMaker: (value: SageMakerEndpoint) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateMarketplaceModelEndpointRequest {
  /**
   * The ARN of the model from Amazon Bedrock Marketplace that you want to deploy to the endpoint.
   *
   * @public
   */
  modelSourceIdentifier: string | undefined;

  /**
   * The configuration for the endpoint, including the number and type of instances to use.
   *
   * @public
   */
  endpointConfig: EndpointConfig | undefined;

  /**
   * Indicates whether you accept the end-user license agreement (EULA) for the model. Set to `true` to accept the EULA.
   *
   * @public
   */
  acceptEula?: boolean | undefined;

  /**
   * The name of the endpoint. This name must be unique within your Amazon Web Services account and region.
   *
   * @public
   */
  endpointName: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This token is listed as not required because Amazon Web Services SDKs automatically generate it for you and set this parameter. If you're not using the Amazon Web Services SDK or the CLI, you must provide this token or the action will fail.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * An array of key-value pairs to apply to the underlying Amazon SageMaker endpoint. You can use these tags to organize and identify your Amazon Web Services resources.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Contains details about an endpoint for a model from Amazon Bedrock Marketplace.
 *
 * @public
 */
export interface MarketplaceModelEndpoint {
  /**
   * The Amazon Resource Name (ARN) of the endpoint.
   *
   * @public
   */
  endpointArn: string | undefined;

  /**
   * The ARN of the model from Amazon Bedrock Marketplace that is deployed on this endpoint.
   *
   * @public
   */
  modelSourceIdentifier: string | undefined;

  /**
   * The overall status of the endpoint in Amazon Bedrock Marketplace (e.g., ACTIVE, INACTIVE).
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * Additional information about the overall status, if available.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The timestamp when the endpoint was registered.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the endpoint was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The configuration of the endpoint, including the number and type of instances used.
   *
   * @public
   */
  endpointConfig: EndpointConfig | undefined;

  /**
   * The current status of the endpoint (e.g., Creating, InService, Updating, Failed).
   *
   * @public
   */
  endpointStatus: string | undefined;

  /**
   * Additional information about the endpoint status, if available.
   *
   * @public
   */
  endpointStatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface CreateMarketplaceModelEndpointResponse {
  /**
   * Details about the created endpoint.
   *
   * @public
   */
  marketplaceModelEndpoint: MarketplaceModelEndpoint | undefined;
}

/**
 * @public
 */
export interface DeleteMarketplaceModelEndpointRequest {
  /**
   * The Amazon Resource Name (ARN) of the endpoint you want to delete.
   *
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
   * The Amazon Resource Name (ARN) of the endpoint you want to deregister.
   *
   * @public
   */
  endpointArn: string | undefined;
}

/**
 * @public
 */
export interface DeregisterMarketplaceModelEndpointResponse {}

/**
 * @public
 */
export interface GetMarketplaceModelEndpointRequest {
  /**
   * The Amazon Resource Name (ARN) of the endpoint you want to get information about.
   *
   * @public
   */
  endpointArn: string | undefined;
}

/**
 * @public
 */
export interface GetMarketplaceModelEndpointResponse {
  /**
   * Details about the requested endpoint.
   *
   * @public
   */
  marketplaceModelEndpoint?: MarketplaceModelEndpoint | undefined;
}

/**
 * @public
 */
export interface ListMarketplaceModelEndpointsRequest {
  /**
   * The maximum number of results to return in a single call. If more results are available, the operation returns a `NextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. You receive this token from a previous `ListMarketplaceModelEndpoints` call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * If specified, only endpoints for the given model source identifier are returned.
   *
   * @public
   */
  modelSourceEquals?: string | undefined;
}

/**
 * Provides a summary of an endpoint for a model from Amazon Bedrock Marketplace.
 *
 * @public
 */
export interface MarketplaceModelEndpointSummary {
  /**
   * The Amazon Resource Name (ARN) of the endpoint.
   *
   * @public
   */
  endpointArn: string | undefined;

  /**
   * The ARN of the model from Amazon Bedrock Marketplace that is deployed on this endpoint.
   *
   * @public
   */
  modelSourceIdentifier: string | undefined;

  /**
   * The overall status of the endpoint in Amazon Bedrock Marketplace.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * Additional information about the overall status, if available.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * The timestamp when the endpoint was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the endpoint was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListMarketplaceModelEndpointsResponse {
  /**
   * An array of endpoint summaries.
   *
   * @public
   */
  marketplaceModelEndpoints?: MarketplaceModelEndpointSummary[] | undefined;

  /**
   * The token for the next set of results. Use this token to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterMarketplaceModelEndpointRequest {
  /**
   * The ARN of the Amazon SageMaker endpoint you want to register with Amazon Bedrock Marketplace.
   *
   * @public
   */
  endpointIdentifier: string | undefined;

  /**
   * The ARN of the model from Amazon Bedrock Marketplace that is deployed on the endpoint.
   *
   * @public
   */
  modelSourceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RegisterMarketplaceModelEndpointResponse {
  /**
   * Details about the registered endpoint.
   *
   * @public
   */
  marketplaceModelEndpoint: MarketplaceModelEndpoint | undefined;
}

/**
 * @public
 */
export interface UpdateMarketplaceModelEndpointRequest {
  /**
   * The Amazon Resource Name (ARN) of the endpoint you want to update.
   *
   * @public
   */
  endpointArn: string | undefined;

  /**
   * The new configuration for the endpoint, including the number and type of instances to use.
   *
   * @public
   */
  endpointConfig: EndpointConfig | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This token is listed as not required because Amazon Web Services SDKs automatically generate it for you and set this parameter. If you're not using the Amazon Web Services SDK or the CLI, you must provide this token or the action will fail.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMarketplaceModelEndpointResponse {
  /**
   * Details about the updated endpoint.
   *
   * @public
   */
  marketplaceModelEndpoint: MarketplaceModelEndpoint | undefined;
}

/**
 * @public
 */
export interface CreateCustomModelDeploymentRequest {
  /**
   * The name for the custom model deployment. The name must be unique within your Amazon Web Services account and Region.
   *
   * @public
   */
  modelDeploymentName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the custom model to deploy for on-demand inference. The custom model must be in the `Active` state.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * A description for the custom model deployment to help you identify its purpose.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Tags to assign to the custom model deployment. You can use tags to organize and track your Amazon Web Services resources for cost allocation and management purposes.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-idempotency.html).
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateCustomModelDeploymentResponse {
  /**
   * The Amazon Resource Name (ARN) of the custom model deployment. Use this ARN as the `modelId` parameter when invoking the model with the `InvokeModel` or `Converse` operations.
   *
   * @public
   */
  customModelDeploymentArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomModelDeploymentRequest {
  /**
   * The Amazon Resource Name (ARN) or name of the custom model deployment to delete.
   *
   * @public
   */
  customModelDeploymentIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomModelDeploymentResponse {}

/**
 * @public
 */
export interface GetCustomModelDeploymentRequest {
  /**
   * The Amazon Resource Name (ARN) or name of the custom model deployment to retrieve information about.
   *
   * @public
   */
  customModelDeploymentIdentifier: string | undefined;
}

/**
 * Details about an update to a custom model deployment, including the new custom model resource ARN and current update status.
 *
 * @public
 */
export interface CustomModelDeploymentUpdateDetails {
  /**
   * ARN of the new custom model being deployed as part of the update.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * Current status of the deployment update.
   *
   * @public
   */
  updateStatus: CustomModelDeploymentUpdateStatus | undefined;
}

/**
 * @public
 */
export interface GetCustomModelDeploymentResponse {
  /**
   * The Amazon Resource Name (ARN) of the custom model deployment.
   *
   * @public
   */
  customModelDeploymentArn: string | undefined;

  /**
   * The name of the custom model deployment.
   *
   * @public
   */
  modelDeploymentName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the custom model associated with this deployment.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * The date and time when the custom model deployment was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The status of the custom model deployment. Possible values are:
   *
   * - `CREATING` - The deployment is being set up and prepared for inference.
   * - `ACTIVE` - The deployment is ready and available for inference requests.
   * - `FAILED` - The deployment failed to be created or became unavailable.
   *
   * @public
   */
  status: CustomModelDeploymentStatus | undefined;

  /**
   * The description of the custom model deployment.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Details about any pending or completed updates to the custom model deployment, including the new model ARN and update status.
   *
   * @public
   */
  updateDetails?: CustomModelDeploymentUpdateDetails | undefined;

  /**
   * If the deployment status is `FAILED`, this field contains a message describing the failure reason.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The date and time when the custom model deployment was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListCustomModelDeploymentsRequest {
  /**
   * Filters deployments created before the specified date and time.
   *
   * @public
   */
  createdBefore?: Date | undefined;

  /**
   * Filters deployments created after the specified date and time.
   *
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * Filters deployments whose names contain the specified string.
   *
   * @public
   */
  nameContains?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use this token to retrieve additional results when the response is truncated.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The field to sort the results by. The only supported value is `CreationTime`.
   *
   * @public
   */
  sortBy?: SortModelsBy | undefined;

  /**
   * The sort order for the results. Valid values are `Ascending` and `Descending`. Default is `Descending`.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * Filters deployments by status. Valid values are `CREATING`, `ACTIVE`, and `FAILED`.
   *
   * @public
   */
  statusEquals?: CustomModelDeploymentStatus | undefined;

  /**
   * Filters deployments by the Amazon Resource Name (ARN) of the associated custom model.
   *
   * @public
   */
  modelArnEquals?: string | undefined;
}

/**
 * Contains summary information about a custom model deployment, including its ARN, name, status, and associated custom model.
 *
 * @public
 */
export interface CustomModelDeploymentSummary {
  /**
   * The Amazon Resource Name (ARN) of the custom model deployment.
   *
   * @public
   */
  customModelDeploymentArn: string | undefined;

  /**
   * The name of the custom model deployment.
   *
   * @public
   */
  customModelDeploymentName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the custom model associated with this deployment.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * The date and time when the custom model deployment was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The status of the custom model deployment. Possible values are `CREATING`, `ACTIVE`, and `FAILED`.
   *
   * @public
   */
  status: CustomModelDeploymentStatus | undefined;

  /**
   * The date and time when the custom model deployment was last modified.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * If the deployment status is `FAILED`, this field contains a message describing the failure reason.
   *
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomModelDeploymentsResponse {
  /**
   * The token for the next set of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of custom model deployment summaries.
   *
   * @public
   */
  modelDeploymentSummaries?: CustomModelDeploymentSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateCustomModelDeploymentRequest {
  /**
   * ARN of the new custom model to deploy. This replaces the currently deployed model.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * Identifier of the custom model deployment to update with the new custom model.
   *
   * @public
   */
  customModelDeploymentIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateCustomModelDeploymentResponse {
  /**
   * ARN of the custom model deployment being updated.
   *
   * @public
   */
  customModelDeploymentArn: string | undefined;
}

/**
 * Contains the Amazon Resource Name (ARN) of a SageMaker AI model package to use as the data source for a custom model.
 *
 * @public
 */
export interface ModelPackageArnDataSource {
  /**
   * The Amazon Resource Name (ARN) of the SageMaker AI model package. The ARN must be for a model package of `restricted` type.
   *
   * To use a model package ARN, you must have the `sagemaker:DescribeModelPackage` and `sagemaker:AccessModelPackageData` permissions on the model package resource.
   *
   * @public
   */
  modelPackageArn: string | undefined;
}

/**
 * The data source for a custom model. This is a union type that supports the following member:
 *
 * - `modelPackageArnDataSource` — Specifies a SageMaker AI model package as the data source.
 *
 * @public
 */
export type CustomModelDataSource =
  | CustomModelDataSource.ModelPackageArnDataSourceMember
  | CustomModelDataSource.$UnknownMember;

/**
 * @public
 */
export namespace CustomModelDataSource {
  /**
   * A SageMaker AI model package ARN as the data source for the custom model. When you specify a model package ARN, Amazon Bedrock resolves the model package to retrieve the model artifacts.
   *
   * @public
   */
  export interface ModelPackageArnDataSourceMember {
    modelPackageArnDataSource: ModelPackageArnDataSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    modelPackageArnDataSource?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    modelPackageArnDataSource: (value: ModelPackageArnDataSource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The Amazon S3 data source of the model to import.
 *
 * @public
 */
export interface S3DataSource {
  /**
   * The URI of the Amazon S3 data source.
   *
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * The data source of the model to import.
 *
 * @public
 */
export type ModelDataSource =
  | ModelDataSource.S3DataSourceMember
  | ModelDataSource.$UnknownMember;

/**
 * @public
 */
export namespace ModelDataSource {
  /**
   * The Amazon S3 data source of the model to import.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3DataSource: (value: S3DataSource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateCustomModelRequest {
  /**
   * A unique name for the custom model.
   *
   * @public
   */
  modelName: string | undefined;

  /**
   * The data source for the model. The Amazon S3 URI in the model source must be for the Amazon-managed Amazon S3 bucket containing your model artifacts.
   *
   * @public
   */
  modelSourceConfig?: ModelDataSource | undefined;

  /**
   * The data source for the custom model. Use this field to specify a SageMaker AI model package ARN as the source for your custom model. Amazon Bedrock resolves the model package to retrieve the model artifacts.
   *
   * You can specify either `customModelDataSource` or `modelSourceConfig`, but not both.
   *
   * @public
   */
  customModelDataSource?: CustomModelDataSource | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer managed KMS key to encrypt the custom model. If you don't provide a KMS key, Amazon Bedrock uses an Amazon Web Services-managed KMS key to encrypt the model.
   *
   * If you provide a customer managed KMS key, your Amazon Bedrock service role must have permissions to use it. For more information see [Encryption of imported models](https://docs.aws.amazon.com/bedrock/latest/userguide/encryption-import-model.html).
   *
   * @public
   */
  modelKmsKeyArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM service role that Amazon Bedrock assumes to perform tasks on your behalf. This role must have permissions to access the Amazon S3 bucket containing your model artifacts and the KMS key (if specified). For more information, see [Setting up an IAM service role for importing models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-import-iam-role.html) in the Amazon Bedrock User Guide.
   *
   * This field is required when you use `modelSourceConfig` with an Amazon S3 data source. It is not required when you use `customModelDataSource` with a model package ARN, because Amazon Bedrock uses its own credentials to access the model artifacts.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * A list of key-value pairs to associate with the custom model resource. You can use these tags to organize and identify your resources.
   *
   * For more information, see [Tagging resources](https://docs.aws.amazon.com/bedrock/latest/userguide/tagging.html) in the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html).
   *
   * @public
   */
  modelTags?: Tag[] | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateCustomModelResponse {
  /**
   * The Amazon Resource Name (ARN) of the new custom model.
   *
   * @public
   */
  modelArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomModelRequest {
  /**
   * Name of the model to delete.
   *
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
   * Name or Amazon Resource Name (ARN) of the custom model.
   *
   * @public
   */
  modelIdentifier: string | undefined;
}

/**
 * Details about a teacher model used for model customization.
 *
 * @public
 */
export interface TeacherModelConfig {
  /**
   * The identifier of the teacher model.
   *
   * @public
   */
  teacherModelIdentifier: string | undefined;

  /**
   * The maximum number of tokens requested when the customization job invokes the teacher model.
   *
   * @public
   */
  maxResponseLengthForInference?: number | undefined;
}

/**
 * Settings for distilling a foundation model into a smaller and more efficient model.
 *
 * @public
 */
export interface DistillationConfig {
  /**
   * The teacher model configuration.
   *
   * @public
   */
  teacherModelConfig: TeacherModelConfig | undefined;
}

/**
 * Configuration for using an AWS Lambda function to grade model responses during reinforcement fine-tuning training.
 *
 * @public
 */
export interface LambdaGraderConfig {
  /**
   * ARN of the AWS Lambda function that will evaluate model responses and return reward scores for RFT training.
   *
   * @public
   */
  lambdaArn: string | undefined;
}

/**
 * Configuration for the grader used in reinforcement fine-tuning to evaluate model responses and provide reward signals.
 *
 * @public
 */
export type GraderConfig =
  | GraderConfig.LambdaGraderMember
  | GraderConfig.$UnknownMember;

/**
 * @public
 */
export namespace GraderConfig {
  /**
   * Configuration for using an AWS Lambda function as the grader for evaluating model responses and provide reward signals in reinforcement fine-tuning.
   *
   * @public
   */
  export interface LambdaGraderMember {
    lambdaGrader: LambdaGraderConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    lambdaGrader?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    lambdaGrader: (value: LambdaGraderConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Hyperparameters for controlling the reinforcement fine-tuning training process, including learning settings and evaluation intervals.
 *
 * @public
 */
export interface RFTHyperParameters {
  /**
   * Number of training epochs to run during reinforcement fine-tuning. Higher values may improve performance but increase training time.
   *
   * @public
   */
  epochCount?: number | undefined;

  /**
   * Number of training samples processed in each batch during reinforcement fine-tuning (RFT) training. Larger batches may improve training stability.
   *
   * @public
   */
  batchSize?: number | undefined;

  /**
   * Learning rate for the reinforcement fine-tuning. Controls how quickly the model adapts to reward signals.
   *
   * @public
   */
  learningRate?: number | undefined;

  /**
   * Maximum length of input prompts during RFT training, measured in tokens. Longer prompts allow more context but increase memory usage and training-time.
   *
   * @public
   */
  maxPromptLength?: number | undefined;

  /**
   * Number of response samples generated per prompt during RFT training. More samples provide better reward signal estimation.
   *
   * @public
   */
  trainingSamplePerPrompt?: number | undefined;

  /**
   * Maximum number of tokens the model can generate in response to each prompt during RFT training.
   *
   * @public
   */
  inferenceMaxTokens?: number | undefined;

  /**
   * Level of reasoning effort applied during RFT training. Higher values may improve response quality but increase training time.
   *
   * @public
   */
  reasoningEffort?: ReasoningEffort | undefined;

  /**
   * Interval between evaluation runs during RFT training, measured in training steps. More frequent evaluation provides better monitoring.
   *
   * @public
   */
  evalInterval?: number | undefined;
}

/**
 * Configuration settings for reinforcement fine-tuning (RFT), including grader configuration and training hyperparameters.
 *
 * @public
 */
export interface RFTConfig {
  /**
   * Configuration for the grader that evaluates model responses and provides reward signals during RFT training.
   *
   * @public
   */
  graderConfig?: GraderConfig | undefined;

  /**
   * Hyperparameters that control the reinforcement fine-tuning training process, including learning rate, batch size, and epoch count.
   *
   * @public
   */
  hyperParameters?: RFTHyperParameters | undefined;
}

/**
 * A model customization configuration
 *
 * @public
 */
export type CustomizationConfig =
  | CustomizationConfig.DistillationConfigMember
  | CustomizationConfig.RftConfigMember
  | CustomizationConfig.$UnknownMember;

/**
 * @public
 */
export namespace CustomizationConfig {
  /**
   * The Distillation configuration for the custom model.
   *
   * @public
   */
  export interface DistillationConfigMember {
    distillationConfig: DistillationConfig;
    rftConfig?: never;
    $unknown?: never;
  }

  /**
   * Configuration settings for reinforcement fine-tuning (RFT) model customization, including grader configuration and hyperparameters.
   *
   * @public
   */
  export interface RftConfigMember {
    distillationConfig?: never;
    rftConfig: RFTConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    distillationConfig?: never;
    rftConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    distillationConfig: (value: DistillationConfig) => T;
    rftConfig: (value: RFTConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * S3 Location of the output data.
 *
 * @public
 */
export interface OutputDataConfig {
  /**
   * The S3 URI where the output data is stored.
   *
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * A storage location for invocation logs.
 *
 * @public
 */
export type InvocationLogSource =
  | InvocationLogSource.S3UriMember
  | InvocationLogSource.$UnknownMember;

/**
 * @public
 */
export namespace InvocationLogSource {
  /**
   * The URI of an invocation log in a bucket.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3Uri: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A mapping of a metadata key to a value that it should or should not equal.
 *
 * @public
 */
export interface RequestMetadataBaseFilters {
  /**
   * Include results where the key equals the value.
   *
   * @public
   */
  equals?: Record<string, string> | undefined;

  /**
   * Include results where the key does not equal the value.
   *
   * @public
   */
  notEquals?: Record<string, string> | undefined;
}

/**
 * Rules for filtering invocation logs. A filter can be a mapping of a metadata key to a value that it should or should not equal (a base filter), or a list of base filters that are all applied with `AND` or `OR` logical operators
 *
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
   * Include results where the key equals the value.
   *
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
   * Include results where the key does not equal the value.
   *
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
   * Include results where all of the based filters match.
   *
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
   * Include results where any of the base filters match.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    equals: (value: Record<string, string>) => T;
    notEquals: (value: Record<string, string>) => T;
    andAll: (value: RequestMetadataBaseFilters[]) => T;
    orAll: (value: RequestMetadataBaseFilters[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Settings for using invocation logs to customize a model.
 *
 * @public
 */
export interface InvocationLogsConfig {
  /**
   * Whether to use the model's response for training, or just the prompt. The default value is `False`.
   *
   * @public
   */
  usePromptResponse?: boolean | undefined;

  /**
   * The source of the invocation logs.
   *
   * @public
   */
  invocationLogSource: InvocationLogSource | undefined;

  /**
   * Rules for filtering invocation logs based on request metadata.
   *
   * @public
   */
  requestMetadataFilters?: RequestMetadataFilters | undefined;
}

/**
 * S3 Location of the training data.
 *
 * @public
 */
export interface TrainingDataConfig {
  /**
   * The S3 URI where the training data is stored.
   *
   * @public
   */
  s3Uri?: string | undefined;

  /**
   * Settings for using invocation logs to customize a model.
   *
   * @public
   */
  invocationLogsConfig?: InvocationLogsConfig | undefined;
}

/**
 * Metrics associated with the custom job.
 *
 * @public
 */
export interface TrainingMetrics {
  /**
   * Loss metric associated with the custom job.
   *
   * @public
   */
  trainingLoss?: number | undefined;
}

/**
 * Information about a validator.
 *
 * @public
 */
export interface Validator {
  /**
   * The S3 URI where the validation data is stored.
   *
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * Array of up to 10 validators.
 *
 * @public
 */
export interface ValidationDataConfig {
  /**
   * Information about the validators.
   *
   * @public
   */
  validators: Validator[] | undefined;
}

/**
 * The metric for the validator.
 *
 * @public
 */
export interface ValidatorMetric {
  /**
   * The validation loss associated with this validator.
   *
   * @public
   */
  validationLoss?: number | undefined;
}

/**
 * @public
 */
export interface GetCustomModelResponse {
  /**
   * Amazon Resource Name (ARN) associated with this model.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * Model name associated with this model.
   *
   * @public
   */
  modelName: string | undefined;

  /**
   * Job name associated with this model.
   *
   * @public
   */
  jobName?: string | undefined;

  /**
   * Job Amazon Resource Name (ARN) associated with this model. For models that you create with the [CreateCustomModel](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateCustomModel.html) API operation, this is `NULL`.
   *
   * @public
   */
  jobArn?: string | undefined;

  /**
   * Amazon Resource Name (ARN) of the base model.
   *
   * @public
   */
  baseModelArn?: string | undefined;

  /**
   * The type of model customization.
   *
   * @public
   */
  customizationType?: CustomizationType | undefined;

  /**
   * The custom model is encrypted at rest using this key.
   *
   * @public
   */
  modelKmsKeyArn?: string | undefined;

  /**
   * Hyperparameter values associated with this model. For details on the format for different models, see [Custom model hyperparameters](https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models-hp.html).
   *
   * @public
   */
  hyperParameters?: Record<string, string> | undefined;

  /**
   * Contains information about the training dataset.
   *
   * @public
   */
  trainingDataConfig?: TrainingDataConfig | undefined;

  /**
   * Contains information about the validation dataset.
   *
   * @public
   */
  validationDataConfig?: ValidationDataConfig | undefined;

  /**
   * Output data configuration associated with this custom model.
   *
   * @public
   */
  outputDataConfig?: OutputDataConfig | undefined;

  /**
   * Contains training metrics from the job creation.
   *
   * @public
   */
  trainingMetrics?: TrainingMetrics | undefined;

  /**
   * The validation metrics from the job creation.
   *
   * @public
   */
  validationMetrics?: ValidatorMetric[] | undefined;

  /**
   * Creation time of the model.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The customization configuration for the custom model.
   *
   * @public
   */
  customizationConfig?: CustomizationConfig | undefined;

  /**
   * The current status of the custom model. Possible values include:
   *
   * - `Creating` - The model is being created and validated.
   * - `Active` - The model has been successfully created and is ready for use.
   * - `Failed` - The model creation process failed. Check the `failureMessage` field for details.
   *
   * @public
   */
  modelStatus?: ModelStatus | undefined;

  /**
   * A failure message for any issues that occurred when creating the custom model. This is included for only a failed CreateCustomModel operation.
   *
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomModelsRequest {
  /**
   * Return custom models created before the specified time.
   *
   * @public
   */
  creationTimeBefore?: Date | undefined;

  /**
   * Return custom models created after the specified time.
   *
   * @public
   */
  creationTimeAfter?: Date | undefined;

  /**
   * Return custom models only if the job name contains these characters.
   *
   * @public
   */
  nameContains?: string | undefined;

  /**
   * Return custom models only if the base model Amazon Resource Name (ARN) matches this parameter.
   *
   * @public
   */
  baseModelArnEquals?: string | undefined;

  /**
   * Return custom models only if the foundation model Amazon Resource Name (ARN) matches this parameter.
   *
   * @public
   */
  foundationModelArnEquals?: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The field to sort by in the returned list of models.
   *
   * @public
   */
  sortBy?: SortModelsBy | undefined;

  /**
   * The sort order of the results.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * Return custom models depending on if the current account owns them (`true`) or if they were shared with the current account (`false`).
   *
   * @public
   */
  isOwned?: boolean | undefined;

  /**
   * The status of them model to filter results by. Possible values include:
   *
   * - `Creating` - Include only models that are currently being created and validated.
   * - `Active` - Include only models that have been successfully created and are ready for use.
   * - `Failed` - Include only models where the creation process failed.
   *
   * If you don't specify a status, the API returns models in all states.
   *
   * @public
   */
  modelStatus?: ModelStatus | undefined;
}

/**
 * Summary information for a custom model.
 *
 * @public
 */
export interface CustomModelSummary {
  /**
   * The Amazon Resource Name (ARN) of the custom model.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * The name of the custom model.
   *
   * @public
   */
  modelName: string | undefined;

  /**
   * Creation time of the model.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * The base model Amazon Resource Name (ARN).
   *
   * @public
   */
  baseModelArn: string | undefined;

  /**
   * The base model name.
   *
   * @public
   */
  baseModelName: string | undefined;

  /**
   * Specifies whether to carry out continued pre-training of a model or whether to fine-tune it. For more information, see [Custom models](https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html).
   *
   * @public
   */
  customizationType?: CustomizationType | undefined;

  /**
   * The unique identifier of the account that owns the model.
   *
   * @public
   */
  ownerAccountId?: string | undefined;

  /**
   * The current status of the custom model. Possible values include:
   *
   * - `Creating` - The model is being created and validated.
   * - `Active` - The model has been successfully created and is ready for use.
   * - `Failed` - The model creation process failed.
   *
   * @public
   */
  modelStatus?: ModelStatus | undefined;
}

/**
 * @public
 */
export interface ListCustomModelsResponse {
  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Model summaries.
   *
   * @public
   */
  modelSummaries?: CustomModelSummary[] | undefined;
}

/**
 * @public
 */
export interface GetAccountDataRetentionRequest {}

/**
 * @public
 */
export interface GetAccountDataRetentionResponse {
  /**
   * The data retention mode configured for the account.
   *
   * @public
   */
  mode: DataRetentionMode | undefined;

  /**
   * The time at which the data retention mode was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface PutAccountDataRetentionRequest {
  /**
   * The data retention mode to set for the account.
   *
   * @public
   */
  mode: DataRetentionMode | undefined;
}

/**
 * @public
 */
export interface PutAccountDataRetentionResponse {
  /**
   * The data retention mode set for the account.
   *
   * @public
   */
  mode: DataRetentionMode | undefined;

  /**
   * The time at which the data retention mode was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteEnforcedGuardrailConfigurationRequest {
  /**
   * Unique ID for the account enforced configuration.
   *
   * @public
   */
  configId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnforcedGuardrailConfigurationResponse {}

/**
 * @public
 */
export interface ListEnforcedGuardrailsConfigurationRequest {
  /**
   * Opaque continuation token of previous paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEnforcedGuardrailsConfigurationResponse {
  /**
   * Array of AccountEnforcedGuardrailOutputConfiguration objects.
   *
   * @public
   */
  guardrailsConfig: AccountEnforcedGuardrailOutputConfiguration[] | undefined;

  /**
   * Opaque continuation token of previous paginated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutEnforcedGuardrailConfigurationRequest {
  /**
   * Unique ID for the account enforced configuration.
   *
   * @public
   */
  configId?: string | undefined;

  /**
   * Account-level enforced guardrail input configuration.
   *
   * @public
   */
  guardrailInferenceConfig: AccountEnforcedGuardrailInferenceInputConfiguration | undefined;
}

/**
 * @public
 */
export interface PutEnforcedGuardrailConfigurationResponse {
  /**
   * Unique ID for the account enforced configuration.
   *
   * @public
   */
  configId?: string | undefined;

  /**
   * Timestamp.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The ARN of the role used to update the configuration.
   *
   * @public
   */
  updatedBy?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteEvaluationJobRequest {
  /**
   * A list of one or more evaluation job Amazon Resource Names (ARNs) you want to delete.
   *
   * @public
   */
  jobIdentifiers: string[] | undefined;
}

/**
 * A JSON array that provides the status of the evaluation jobs being deleted.
 *
 * @public
 */
export interface BatchDeleteEvaluationJobError {
  /**
   * The ARN of the evaluation job being deleted.
   *
   * @public
   */
  jobIdentifier: string | undefined;

  /**
   * A HTTP status code of the evaluation job being deleted.
   *
   * @public
   */
  code: string | undefined;

  /**
   * A status message about the evaluation job deletion.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * An evaluation job for deletion, and it’s current status.
 *
 * @public
 */
export interface BatchDeleteEvaluationJobItem {
  /**
   * The Amazon Resource Name (ARN) of the evaluation job for deletion.
   *
   * @public
   */
  jobIdentifier: string | undefined;

  /**
   * The status of the evaluation job for deletion.
   *
   * @public
   */
  jobStatus: EvaluationJobStatus | undefined;
}

/**
 * @public
 */
export interface BatchDeleteEvaluationJobResponse {
  /**
   * A JSON object containing the HTTP status codes and the ARNs of evaluation jobs that failed to be deleted.
   *
   * @public
   */
  errors: BatchDeleteEvaluationJobError[] | undefined;

  /**
   * The list of evaluation jobs for deletion.
   *
   * @public
   */
  evaluationJobs: BatchDeleteEvaluationJobItem[] | undefined;
}

/**
 * Defines the value for one rating in a custom metric rating scale.
 *
 * @public
 */
export type RatingScaleItemValue =
  | RatingScaleItemValue.FloatValueMember
  | RatingScaleItemValue.StringValueMember
  | RatingScaleItemValue.$UnknownMember;

/**
 * @public
 */
export namespace RatingScaleItemValue {
  /**
   * A string representing the value for a rating in a custom metric rating scale.
   *
   * @public
   */
  export interface StringValueMember {
    stringValue: string;
    floatValue?: never;
    $unknown?: never;
  }

  /**
   * A floating point number representing the value for a rating in a custom metric rating scale.
   *
   * @public
   */
  export interface FloatValueMember {
    stringValue?: never;
    floatValue: number;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    stringValue?: never;
    floatValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    stringValue: (value: string) => T;
    floatValue: (value: number) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Defines the value and corresponding definition for one rating in a custom metric rating scale.
 *
 * @public
 */
export interface RatingScaleItem {
  /**
   * Defines the definition for one rating in a custom metric rating scale.
   *
   * @public
   */
  definition: string | undefined;

  /**
   * Defines the value for one rating in a custom metric rating scale.
   *
   * @public
   */
  value: RatingScaleItemValue | undefined;
}

/**
 * The definition of a custom metric for use in an Amazon Bedrock evaluation job. A custom metric definition includes a metric name, prompt (instructions) and optionally, a rating scale. Your prompt must include a task description and input variables. The required input variables are different for model-as-a-judge and RAG evaluations.
 *
 * For more information about how to define a custom metric in Amazon Bedrock, see [Create a prompt for a custom metrics (LLM-as-a-judge model evaluations)](https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-custom-metrics-prompt-formats.html) and [Create a prompt for a custom metrics (RAG evaluations)](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-evaluation-custom-metrics-prompt-formats.html).
 *
 * @public
 */
export interface CustomMetricDefinition {
  /**
   * The name for a custom metric. Names must be unique in your Amazon Web Services region.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The prompt for a custom metric that instructs the evaluator model how to rate the model or RAG source under evaluation.
   *
   * @public
   */
  instructions: string | undefined;

  /**
   * Defines the rating scale to be used for a custom metric. We recommend that you always define a ratings scale when creating a custom metric. If you don't define a scale, Amazon Bedrock won't be able to visually display the results of the evaluation in the console or calculate average values of numerical scores. For more information on specifying a rating scale, see [Specifying an output schema (rating scale)](https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-custom-metrics-prompt-formats.html#model-evaluation-custom-metrics-prompt-formats-schema).
   *
   * @public
   */
  ratingScale?: RatingScaleItem[] | undefined;
}

/**
 * An array item definining a single custom metric for use in an Amazon Bedrock evaluation job.
 *
 * @public
 */
export type AutomatedEvaluationCustomMetricSource =
  | AutomatedEvaluationCustomMetricSource.CustomMetricDefinitionMember
  | AutomatedEvaluationCustomMetricSource.$UnknownMember;

/**
 * @public
 */
export namespace AutomatedEvaluationCustomMetricSource {
  /**
   * The definition of a custom metric for use in an Amazon Bedrock evaluation job.
   *
   * @public
   */
  export interface CustomMetricDefinitionMember {
    customMetricDefinition: CustomMetricDefinition;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customMetricDefinition?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    customMetricDefinition: (value: CustomMetricDefinition) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Defines the model you want to evaluate custom metrics in an Amazon Bedrock evaluation job.
 *
 * @public
 */
export interface CustomMetricBedrockEvaluatorModel {
  /**
   * The Amazon Resource Name (ARN) of the evaluator model for custom metrics. For a list of supported evaluator models, see [Evaluate model performance using another LLM as a judge](https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation-judge.html) and [Evaluate the performance of RAG sources using Amazon Bedrock evaluations](https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation-kb.html).
   *
   * @public
   */
  modelIdentifier: string | undefined;
}

/**
 * Configuration of the evaluator model you want to use to evaluate custom metrics in an Amazon Bedrock evaluation job.
 *
 * @public
 */
export interface CustomMetricEvaluatorModelConfig {
  /**
   * Defines the model you want to evaluate custom metrics in an Amazon Bedrock evaluation job.
   *
   * @public
   */
  bedrockEvaluatorModels: CustomMetricBedrockEvaluatorModel[] | undefined;
}

/**
 * Defines the configuration of custom metrics to be used in an evaluation job. To learn more about using custom metrics in Amazon Bedrock evaluation jobs, see [Create a prompt for a custom metrics (LLM-as-a-judge model evaluations)](https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-custom-metrics-prompt-formats.html) and [Create a prompt for a custom metrics (RAG evaluations)](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-evaluation-custom-metrics-prompt-formats.html).
 *
 * @public
 */
export interface AutomatedEvaluationCustomMetricConfig {
  /**
   * Defines a list of custom metrics to be used in an Amazon Bedrock evaluation job.
   *
   * @public
   */
  customMetrics: AutomatedEvaluationCustomMetricSource[] | undefined;

  /**
   * Configuration of the evaluator model you want to use to evaluate custom metrics in an Amazon Bedrock evaluation job.
   *
   * @public
   */
  evaluatorModelConfig: CustomMetricEvaluatorModelConfig | undefined;
}

/**
 * The location in Amazon S3 where your prompt dataset is stored.
 *
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
   * The S3 URI of the S3 bucket specified in the job.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3Uri: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Used to specify the name of a built-in prompt dataset and optionally, the Amazon S3 bucket where a custom prompt dataset is saved.
 *
 * @public
 */
export interface EvaluationDataset {
  /**
   * Used to specify supported built-in prompt datasets. Valid values are `Builtin.Bold`, `Builtin.BoolQ`, `Builtin.NaturalQuestions`, `Builtin.Gigaword`, `Builtin.RealToxicityPrompts`, `Builtin.TriviaQA`, `Builtin.T-Rex`, `Builtin.WomensEcommerceClothingReviews` and `Builtin.Wikitext2`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * For custom prompt datasets, you must specify the location in Amazon S3 where the prompt dataset is saved.
   *
   * @public
   */
  datasetLocation?: EvaluationDatasetLocation | undefined;
}

/**
 * Defines the prompt datasets, built-in metric names and custom metric names, and the task type.
 *
 * @public
 */
export interface EvaluationDatasetMetricConfig {
  /**
   * The the type of task you want to evaluate for your evaluation job. This applies only to model evaluation jobs and is ignored for knowledge base evaluation jobs.
   *
   * @public
   */
  taskType: EvaluationTaskType | undefined;

  /**
   * Specifies the prompt dataset.
   *
   * @public
   */
  dataset: EvaluationDataset | undefined;

  /**
   * The names of the metrics you want to use for your evaluation job.
   *
   * For knowledge base evaluation jobs that evaluate retrieval only, valid values are "`Builtin.ContextRelevance`", "`Builtin.ContextCoverage`".
   *
   * For knowledge base evaluation jobs that evaluate retrieval with response generation, valid values are "`Builtin.Correctness`", "`Builtin.Completeness`", "`Builtin.Helpfulness`", "`Builtin.LogicalCoherence`", "`Builtin.Faithfulness`", "`Builtin.Harmfulness`", "`Builtin.Stereotyping`", "`Builtin.Refusal`".
   *
   * For automated model evaluation jobs, valid values are "`Builtin.Accuracy`", "`Builtin.Robustness`", and "`Builtin.Toxicity`". In model evaluation jobs that use a LLM as judge you can specify "`Builtin.Correctness`", "`Builtin.Completeness"`, "`Builtin.Faithfulness"`, "`Builtin.Helpfulness`", "`Builtin.Coherence`", "`Builtin.Relevance`", "`Builtin.FollowingInstructions`", "`Builtin.ProfessionalStyleAndTone`", You can also specify the following responsible AI related metrics only for model evaluation job that use a LLM as judge "`Builtin.Harmfulness`", "`Builtin.Stereotyping`", and "`Builtin.Refusal`".
   *
   * For human-based model evaluation jobs, the list of strings must match the `name` parameter specified in `HumanEvaluationCustomMetric`.
   *
   * @public
   */
  metricNames: string[] | undefined;
}

/**
 * The evaluator model used in knowledge base evaluation job or in model evaluation job that use a model as judge. This model computes all evaluation related metrics.
 *
 * @public
 */
export interface BedrockEvaluatorModel {
  /**
   * The Amazon Resource Name (ARN) of the evaluator model used used in knowledge base evaluation job or in model evaluation job that use a model as judge.
   *
   * @public
   */
  modelIdentifier: string | undefined;
}

/**
 * Specifies the model configuration for the evaluator model. `EvaluatorModelConfig` is required for evaluation jobs that use a knowledge base or in model evaluation job that use a model as judge. This model computes all evaluation related metrics.
 *
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
   * The evaluator model used in knowledge base evaluation job or in model evaluation job that use a model as judge. This model computes all evaluation related metrics.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    bedrockEvaluatorModels: (value: BedrockEvaluatorModel[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration details of an automated evaluation job. The `EvaluationDatasetMetricConfig` object is used to specify the prompt datasets, task type, and metric names.
 *
 * @public
 */
export interface AutomatedEvaluationConfig {
  /**
   * Configuration details of the prompt datasets and metrics you want to use for your evaluation job.
   *
   * @public
   */
  datasetMetricConfigs: EvaluationDatasetMetricConfig[] | undefined;

  /**
   * Contains the evaluator model configuration details. `EvaluatorModelConfig` is required for evaluation jobs that use a knowledge base or in model evaluation job that use a model as judge. This model computes all evaluation related metrics.
   *
   * @public
   */
  evaluatorModelConfig?: EvaluatorModelConfig | undefined;

  /**
   * Defines the configuration of custom metrics to be used in an evaluation job.
   *
   * @public
   */
  customMetricConfig?: AutomatedEvaluationCustomMetricConfig | undefined;
}

/**
 * In a model evaluation job that uses human workers you must define the name of the metric, and how you want that metric rated `ratingMethod`, and an optional description of the metric.
 *
 * @public
 */
export interface HumanEvaluationCustomMetric {
  /**
   * The name of the metric. Your human evaluators will see this name in the evaluation UI.
   *
   * @public
   */
  name: string | undefined;

  /**
   * An optional description of the metric. Use this parameter to provide more details about the metric.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Choose how you want your human workers to evaluation your model. Valid values for rating methods are `ThumbsUpDown`, `IndividualLikertScale`,`ComparisonLikertScale`, `ComparisonChoice`, and `ComparisonRank`
   *
   * @public
   */
  ratingMethod: string | undefined;
}

/**
 * Contains `SageMakerFlowDefinition` object. The object is used to specify the prompt dataset, task type, rating method and metric names.
 *
 * @public
 */
export interface HumanWorkflowConfig {
  /**
   * The Amazon Resource Number (ARN) for the flow definition
   *
   * @public
   */
  flowDefinitionArn: string | undefined;

  /**
   * Instructions for the flow definition
   *
   * @public
   */
  instructions?: string | undefined;
}

/**
 * Specifies the custom metrics, how tasks will be rated, the flow definition ARN, and your custom prompt datasets. Model evaluation jobs use human workers *only* support the use of custom prompt datasets. To learn more about custom prompt datasets and the required format, see [Custom prompt datasets](https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-prompt-datasets-custom.html).
 *
 * When you create custom metrics in `HumanEvaluationCustomMetric` you must specify the metric's `name`. The list of `names` specified in the `HumanEvaluationCustomMetric` array, must match the `metricNames` array of strings specified in `EvaluationDatasetMetricConfig`. For example, if in the `HumanEvaluationCustomMetric` array your specified the names `"accuracy", "toxicity", "readability"` as custom metrics *then* the `metricNames` array would need to look like the following `["accuracy", "toxicity", "readability"]` in `EvaluationDatasetMetricConfig`.
 *
 * @public
 */
export interface HumanEvaluationConfig {
  /**
   * The parameters of the human workflow.
   *
   * @public
   */
  humanWorkflowConfig?: HumanWorkflowConfig | undefined;

  /**
   * A `HumanEvaluationCustomMetric` object. It contains the names the metrics, how the metrics are to be evaluated, an optional description.
   *
   * @public
   */
  customMetrics?: HumanEvaluationCustomMetric[] | undefined;

  /**
   * Use to specify the metrics, task, and prompt dataset to be used in your model evaluation job.
   *
   * @public
   */
  datasetMetricConfigs: EvaluationDatasetMetricConfig[] | undefined;
}

/**
 * The configuration details of either an automated or human-based evaluation job.
 *
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
   * Contains the configuration details of an automated evaluation job that computes metrics.
   *
   * @public
   */
  export interface AutomatedMember {
    automated: AutomatedEvaluationConfig;
    human?: never;
    $unknown?: never;
  }

  /**
   * Contains the configuration details of an evaluation job that uses human workers.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    automated: (value: AutomatedEvaluationConfig) => T;
    human: (value: HumanEvaluationConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains performance settings for a model.
 *
 * @public
 */
export interface PerformanceConfiguration {
  /**
   * Specifies whether to use the latency-optimized or standard version of a model or inference profile.
   *
   * @public
   */
  latency?: PerformanceConfigLatency | undefined;
}

/**
 * Contains the ARN of the Amazon Bedrock model or [inference profile](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html) specified in your evaluation job. Each Amazon Bedrock model supports different `inferenceParams`. To learn more about supported inference parameters for Amazon Bedrock models, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html).
 *
 * The `inferenceParams` are specified using JSON. To successfully insert JSON as string make sure that all quotations are properly escaped. For example, `"temperature":"0.25"` key value pair would need to be formatted as `\"temperature\":\"0.25\"` to successfully accepted in the request.
 *
 * @public
 */
export interface EvaluationBedrockModel {
  /**
   * The ARN of the Amazon Bedrock model or inference profile specified.
   *
   * @public
   */
  modelIdentifier: string | undefined;

  /**
   * Each Amazon Bedrock support different inference parameters that change how the model behaves during inference.
   *
   * @public
   */
  inferenceParams?: string | undefined;

  /**
   * Specifies performance settings for the model or inference profile.
   *
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;
}

/**
 * A summary of a model used for a model evaluation job where you provide your own inference response data.
 *
 * @public
 */
export interface EvaluationPrecomputedInferenceSource {
  /**
   * A label that identifies a model used in a model evaluation job where you provide your own inference response data.
   *
   * @public
   */
  inferenceSourceIdentifier: string | undefined;
}

/**
 * Defines the models used in the model evaluation job.
 *
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
   * Defines the Amazon Bedrock model or inference profile and inference parameters you want used.
   *
   * @public
   */
  export interface BedrockModelMember {
    bedrockModel: EvaluationBedrockModel;
    precomputedInferenceSource?: never;
    $unknown?: never;
  }

  /**
   * Defines the model used to generate inference response data for a model evaluation job where you provide your own inference response data.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    bedrockModel: (value: EvaluationBedrockModel) => T;
    precomputedInferenceSource: (value: EvaluationPrecomputedInferenceSource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration details for the guardrail.
 *
 * @public
 */
export interface GuardrailConfiguration {
  /**
   * The unique identifier for the guardrail.
   *
   * @public
   */
  guardrailId: string | undefined;

  /**
   * The version of the guardrail.
   *
   * @public
   */
  guardrailVersion: string | undefined;
}

/**
 * The configuration details for text generation using a language model via the `RetrieveAndGenerate` function.
 *
 * @public
 */
export interface TextInferenceConfig {
  /**
   * Controls the random-ness of text generated by the language model, influencing how much the model sticks to the most predictable next words versus exploring more surprising options. A lower temperature value (e.g. 0.2 or 0.3) makes model outputs more deterministic or predictable, while a higher temperature (e.g. 0.8 or 0.9) makes the outputs more creative or unpredictable.
   *
   * @public
   */
  temperature?: number | undefined;

  /**
   * A probability distribution threshold which controls what the model considers for the set of possible next tokens. The model will only consider the top p% of the probability distribution when generating the next token.
   *
   * @public
   */
  topP?: number | undefined;

  /**
   * The maximum number of tokens to generate in the output text. Do not use the minimum of 0 or the maximum of 65536. The limit values described here are arbitrary values, for actual values consult the limits defined by your specific model.
   *
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * A list of sequences of characters that, if generated, will cause the model to stop generating further tokens. Do not use a minimum length of 1 or a maximum length of 1000. The limit values described here are arbitrary values, for actual values consult the limits defined by your specific model.
   *
   * @public
   */
  stopSequences?: string[] | undefined;
}

/**
 * Contains configuration details of the inference for knowledge base retrieval and response generation.
 *
 * @public
 */
export interface KbInferenceConfig {
  /**
   * Contains configuration details for text generation using a language model via the `RetrieveAndGenerate` function.
   *
   * @public
   */
  textInferenceConfig?: TextInferenceConfig | undefined;
}

/**
 * The template for the prompt that's sent to the model for response generation.
 *
 * @public
 */
export interface PromptTemplate {
  /**
   * The template for the prompt that's sent to the model for response generation. You can include prompt placeholders, which become replaced before the prompt is sent to the model to provide instructions and context to the model. In addition, you can include XML tags to delineate meaningful sections of the prompt template.
   *
   * For more information, see [Knowledge base prompt template](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html) and [Use XML tags with Anthropic Claude models](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags).
   *
   * @public
   */
  textPromptTemplate?: string | undefined;
}

/**
 * The response generation configuration of the external source wrapper object.
 *
 * @public
 */
export interface ExternalSourcesGenerationConfiguration {
  /**
   * Contains the template for the prompt for the external source wrapper object.
   *
   * @public
   */
  promptTemplate?: PromptTemplate | undefined;

  /**
   * Configuration details for the guardrail.
   *
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * Configuration details for inference when using `RetrieveAndGenerate` to generate responses while using an external source.
   *
   * @public
   */
  kbInferenceConfig?: KbInferenceConfig | undefined;

  /**
   * Additional model parameters and their corresponding values not included in the text inference configuration for an external source. Takes in custom model parameters specific to the language model being used.
   *
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;
}

/**
 * Contains the document contained in the wrapper object, along with its attributes/fields.
 *
 * @public
 */
export interface ByteContentDoc {
  /**
   * The file name of the document contained in the wrapper object.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The MIME type of the document contained in the wrapper object.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * The byte value of the file to upload, encoded as a Base-64 string.
   *
   * @public
   */
  data: Uint8Array | undefined;
}

/**
 * The unique wrapper object of the document from the S3 location.
 *
 * @public
 */
export interface S3ObjectDoc {
  /**
   * The S3 URI location for the wrapper object of the document.
   *
   * @public
   */
  uri: string | undefined;
}

/**
 * The unique external source of the content contained in the wrapper object.
 *
 * @public
 */
export interface ExternalSource {
  /**
   * The source type of the external source wrapper object.
   *
   * @public
   */
  sourceType: ExternalSourceType | undefined;

  /**
   * The S3 location of the external source wrapper object.
   *
   * @public
   */
  s3Location?: S3ObjectDoc | undefined;

  /**
   * The identifier, content type, and data of the external source wrapper object.
   *
   * @public
   */
  byteContent?: ByteContentDoc | undefined;
}

/**
 * The configuration of the external source wrapper object in the `retrieveAndGenerate` function.
 *
 * @public
 */
export interface ExternalSourcesRetrieveAndGenerateConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the foundation model or [inference profile](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html) used to generate responses.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * The document for the external source wrapper object in the `retrieveAndGenerate` function.
   *
   * @public
   */
  sources: ExternalSource[] | undefined;

  /**
   * Contains configurations details for response generation based on retrieved text chunks.
   *
   * @public
   */
  generationConfiguration?: ExternalSourcesGenerationConfiguration | undefined;
}

/**
 * The configuration details for response generation based on retrieved text chunks.
 *
 * @public
 */
export interface GenerationConfiguration {
  /**
   * Contains the template for the prompt that's sent to the model for response generation.
   *
   * @public
   */
  promptTemplate?: PromptTemplate | undefined;

  /**
   * Contains configuration details for the guardrail.
   *
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * Contains configuration details for inference for knowledge base retrieval and response generation.
   *
   * @public
   */
  kbInferenceConfig?: KbInferenceConfig | undefined;

  /**
   * Additional model parameters and corresponding values not included in the `textInferenceConfig` structure for a knowledge base. This allows you to provide custom model parameters specific to the language model being used.
   *
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;
}

/**
 * The configuration details for transforming the prompt.
 *
 * @public
 */
export interface QueryTransformationConfiguration {
  /**
   * The type of transformation to apply to the prompt.
   *
   * @public
   */
  type: QueryTransformationType | undefined;
}

/**
 * The configuration details for the model to process the prompt prior to retrieval and response generation.
 *
 * @public
 */
export interface OrchestrationConfiguration {
  /**
   * Contains configuration details for transforming the prompt.
   *
   * @public
   */
  queryTransformationConfiguration: QueryTransformationConfiguration | undefined;
}

/**
 * Specifies the name of the metadata attribute/field to apply filters. You must match the name of the attribute/field in your data source/document metadata.
 *
 * @public
 */
export interface FilterAttribute {
  /**
   * The name of metadata attribute/field, which must match the name in your data source/document metadata.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of the metadata attribute/field.
   *
   * @public
   */
  value: __DocumentType | undefined;
}

/**
 * Defines the schema for a metadata attribute used in Knowledge Base vector searches. Metadata attributes provide additional context for documents and can be used for filtering and reranking search results.
 *
 * @public
 */
export interface MetadataAttributeSchema {
  /**
   * The unique identifier for the metadata attribute. This key is used to reference the attribute in filter expressions and reranking configurations.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The data type of the metadata attribute. The type determines how the attribute can be used in filter expressions and reranking.
   *
   * @public
   */
  type: AttributeType | undefined;

  /**
   * An optional description of the metadata attribute that provides additional context about its purpose and usage.
   *
   * @public
   */
  description: string | undefined;
}

/**
 * Configuration for implicit filtering in Knowledge Base vector searches. Implicit filtering allows you to automatically filter search results based on metadata attributes without requiring explicit filter expressions in each query.
 *
 * @public
 */
export interface ImplicitFilterConfiguration {
  /**
   * A list of metadata attribute schemas that define the structure and properties of metadata fields used for implicit filtering. Each attribute defines a key, type, and optional description.
   *
   * @public
   */
  metadataAttributes: MetadataAttributeSchema[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the foundation model used for implicit filtering. This model processes the query to extract relevant filtering criteria.
   *
   * @public
   */
  modelArn: string | undefined;
}

/**
 * Specifies a field to be used during the reranking process in a Knowledge Base vector search. This structure identifies metadata fields that should be considered when reordering search results to improve relevance.
 *
 * @public
 */
export interface FieldForReranking {
  /**
   * The name of the metadata field to be used during the reranking process.
   *
   * @public
   */
  fieldName: string | undefined;
}

/**
 * Configuration for selectively including or excluding metadata fields during the reranking process. This allows you to control which metadata attributes are considered when reordering search results.
 *
 * @public
 */
export type RerankingMetadataSelectiveModeConfiguration =
  | RerankingMetadataSelectiveModeConfiguration.FieldsToExcludeMember
  | RerankingMetadataSelectiveModeConfiguration.FieldsToIncludeMember
  | RerankingMetadataSelectiveModeConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace RerankingMetadataSelectiveModeConfiguration {
  /**
   * A list of metadata field names to explicitly include in the reranking process. Only these fields will be considered when reordering search results. This parameter cannot be used together with fieldsToExclude.
   *
   * @public
   */
  export interface FieldsToIncludeMember {
    fieldsToInclude: FieldForReranking[];
    fieldsToExclude?: never;
    $unknown?: never;
  }

  /**
   * A list of metadata field names to explicitly exclude from the reranking process. All metadata fields except these will be considered when reordering search results. This parameter cannot be used together with fieldsToInclude.
   *
   * @public
   */
  export interface FieldsToExcludeMember {
    fieldsToInclude?: never;
    fieldsToExclude: FieldForReranking[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    fieldsToInclude?: never;
    fieldsToExclude?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    fieldsToInclude: (value: FieldForReranking[]) => T;
    fieldsToExclude: (value: FieldForReranking[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration for how metadata should be used during the reranking process in Knowledge Base vector searches. This determines which metadata fields are included or excluded when reordering search results.
 *
 * @public
 */
export interface MetadataConfigurationForReranking {
  /**
   * The mode for selecting which metadata fields to include in the reranking process. Valid values are ALL (use all available metadata fields) or SELECTIVE (use only specified fields).
   *
   * @public
   */
  selectionMode: RerankingMetadataSelectionMode | undefined;

  /**
   * Configuration for selective mode, which allows you to explicitly include or exclude specific metadata fields during reranking. This is only used when selectionMode is set to SELECTIVE.
   *
   * @public
   */
  selectiveModeConfiguration?: RerankingMetadataSelectiveModeConfiguration | undefined;
}

/**
 * Configuration for the Amazon Bedrock foundation model used for reranking vector search results. This specifies which model to use and any additional parameters required by the model.
 *
 * @public
 */
export interface VectorSearchBedrockRerankingModelConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the foundation model to use for reranking. This model processes the query and search results to determine a more relevant ordering.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * A list of additional fields to include in the model request during reranking. These fields provide extra context or configuration options specific to the selected foundation model.
   *
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;
}

/**
 * Configuration for using Amazon Bedrock foundation models to rerank Knowledge Base vector search results. This enables more sophisticated relevance ranking using large language models.
 *
 * @public
 */
export interface VectorSearchBedrockRerankingConfiguration {
  /**
   * Configuration for the Amazon Bedrock foundation model used for reranking. This includes the model ARN and any additional request fields required by the model.
   *
   * @public
   */
  modelConfiguration: VectorSearchBedrockRerankingModelConfiguration | undefined;

  /**
   * The maximum number of results to rerank. This limits how many of the initial vector search results will be processed by the reranking model. A smaller number improves performance but may exclude potentially relevant results.
   *
   * @public
   */
  numberOfRerankedResults?: number | undefined;

  /**
   * Configuration for how document metadata should be used during the reranking process. This determines which metadata fields are included when reordering search results.
   *
   * @public
   */
  metadataConfiguration?: MetadataConfigurationForReranking | undefined;
}

/**
 * Configuration for reranking vector search results to improve relevance. Reranking applies additional relevance models to reorder the initial vector search results based on more sophisticated criteria.
 *
 * @public
 */
export interface VectorSearchRerankingConfiguration {
  /**
   * The type of reranking to apply to vector search results. Currently, the only supported value is BEDROCK, which uses Amazon Bedrock foundation models for reranking.
   *
   * @public
   */
  type: VectorSearchRerankingConfigurationType | undefined;

  /**
   * Configuration for using Amazon Bedrock foundation models to rerank search results. This is required when the reranking type is set to BEDROCK.
   *
   * @public
   */
  bedrockRerankingConfiguration?: VectorSearchBedrockRerankingConfiguration | undefined;
}

/**
 * A summary of a RAG source used for a retrieve-and-generate Knowledge Base evaluation job where you provide your own inference response data.
 *
 * @public
 */
export interface EvaluationPrecomputedRetrieveAndGenerateSourceConfig {
  /**
   * A label that identifies the RAG source used for a retrieve-and-generate Knowledge Base evaluation job where you provide your own inference response data.
   *
   * @public
   */
  ragSourceIdentifier: string | undefined;
}

/**
 * A summary of a RAG source used for a retrieve-only Knowledge Base evaluation job where you provide your own inference response data.
 *
 * @public
 */
export interface EvaluationPrecomputedRetrieveSourceConfig {
  /**
   * A label that identifies the RAG source used for a retrieve-only Knowledge Base evaluation job where you provide your own inference response data.
   *
   * @public
   */
  ragSourceIdentifier: string | undefined;
}

/**
 * A summary of a RAG source used for a Knowledge Base evaluation job where you provide your own inference response data.
 *
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
   * A summary of a RAG source used for a retrieve-only Knowledge Base evaluation job where you provide your own inference response data.
   *
   * @public
   */
  export interface RetrieveSourceConfigMember {
    retrieveSourceConfig: EvaluationPrecomputedRetrieveSourceConfig;
    retrieveAndGenerateSourceConfig?: never;
    $unknown?: never;
  }

  /**
   * A summary of a RAG source used for a retrieve-and-generate Knowledge Base evaluation job where you provide your own inference response data.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    retrieveSourceConfig: (value: EvaluationPrecomputedRetrieveSourceConfig) => T;
    retrieveAndGenerateSourceConfig: (value: EvaluationPrecomputedRetrieveAndGenerateSourceConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The Amazon S3 location where the results of your evaluation job are saved.
 *
 * @public
 */
export interface EvaluationOutputDataConfig {
  /**
   * The Amazon S3 URI where the results of the evaluation job are saved.
   *
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * @public
 */
export interface CreateEvaluationJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the evaluation job.
   *
   * @public
   */
  jobArn: string | undefined;
}

/**
 * @public
 */
export interface GetEvaluationJobRequest {
  /**
   * The Amazon Resource Name (ARN) of the evaluation job you want get information on.
   *
   * @public
   */
  jobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ListEvaluationJobsRequest {
  /**
   * A filter to only list evaluation jobs created after a specified time.
   *
   * @public
   */
  creationTimeAfter?: Date | undefined;

  /**
   * A filter to only list evaluation jobs created before a specified time.
   *
   * @public
   */
  creationTimeBefore?: Date | undefined;

  /**
   * A filter to only list evaluation jobs that are of a certain status.
   *
   * @public
   */
  statusEquals?: EvaluationJobStatus | undefined;

  /**
   * A filter to only list evaluation jobs that are either model evaluations or knowledge base evaluations.
   *
   * @public
   */
  applicationTypeEquals?: ApplicationType | undefined;

  /**
   * A filter to only list evaluation jobs that contain a specified string in the job name.
   *
   * @public
   */
  nameContains?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Continuation token from the previous response, for Amazon Bedrock to list the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies a creation time to sort the list of evaluation jobs by when they were created.
   *
   * @public
   */
  sortBy?: SortJobsBy | undefined;

  /**
   * Specifies whether to sort the list of evaluation jobs by either ascending or descending order.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * A summary of the models used in an Amazon Bedrock model evaluation job. These resources can be models in Amazon Bedrock or models outside of Amazon Bedrock that you use to generate your own inference response data.
 *
 * @public
 */
export interface EvaluationModelConfigSummary {
  /**
   * The Amazon Resource Names (ARNs) of the models used for the evaluation job.
   *
   * @public
   */
  bedrockModelIdentifiers?: string[] | undefined;

  /**
   * A label that identifies the models used for a model evaluation job where you provide your own inference response data.
   *
   * @public
   */
  precomputedInferenceSourceIdentifiers?: string[] | undefined;
}

/**
 * A summary of the RAG resources used in an Amazon Bedrock Knowledge Base evaluation job. These resources can be Knowledge Bases in Amazon Bedrock or RAG sources outside of Amazon Bedrock that you use to generate your own inference response data.
 *
 * @public
 */
export interface EvaluationRagConfigSummary {
  /**
   * The Amazon Resource Names (ARNs) of the Knowledge Base resources used for a Knowledge Base evaluation job where Amazon Bedrock invokes the Knowledge Base for you.
   *
   * @public
   */
  bedrockKnowledgeBaseIdentifiers?: string[] | undefined;

  /**
   * A label that identifies the RAG sources used for a Knowledge Base evaluation job where you provide your own inference response data.
   *
   * @public
   */
  precomputedRagSourceIdentifiers?: string[] | undefined;
}

/**
 * Identifies the models, Knowledge Bases, or other RAG sources evaluated in a model or Knowledge Base evaluation job.
 *
 * @public
 */
export interface EvaluationInferenceConfigSummary {
  /**
   * A summary of the models used in an Amazon Bedrock model evaluation job. These resources can be models in Amazon Bedrock or models outside of Amazon Bedrock that you use to generate your own inference response data.
   *
   * @public
   */
  modelConfigSummary?: EvaluationModelConfigSummary | undefined;

  /**
   * A summary of the RAG resources used in an Amazon Bedrock Knowledge Base evaluation job. These resources can be Knowledge Bases in Amazon Bedrock or RAG sources outside of Amazon Bedrock that you use to generate your own inference response data.
   *
   * @public
   */
  ragConfigSummary?: EvaluationRagConfigSummary | undefined;
}

/**
 * Summary information of an evaluation job.
 *
 * @public
 */
export interface EvaluationSummary {
  /**
   * The Amazon Resource Name (ARN) of the evaluation job.
   *
   * @public
   */
  jobArn: string | undefined;

  /**
   * The name for the evaluation job.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The current status of the evaluation job.
   *
   * @public
   */
  status: EvaluationJobStatus | undefined;

  /**
   * The time the evaluation job was created.
   *
   * @public
   */
  creationTime: Date | undefined;

  /**
   * Specifies whether the evaluation job is automated or human-based.
   *
   * @public
   */
  jobType: EvaluationJobType | undefined;

  /**
   * The type of task for model evaluation.
   *
   * @public
   */
  evaluationTaskTypes: EvaluationTaskType[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the model(s) used for the evaluation job.
   *
   * @deprecated (since 2025-03-07) Inference identifiers should be retrieved from the inferenceConfigSummary.
   * @public
   */
  modelIdentifiers?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the knowledge base resources used for a knowledge base evaluation job.
   *
   * @deprecated (since 2025-03-07) Inference identifiers should be retrieved from the inferenceConfigSummary.
   * @public
   */
  ragIdentifiers?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the models used to compute the metrics for a knowledge base evaluation job.
   *
   * @public
   */
  evaluatorModelIdentifiers?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the models used to compute custom metrics in an Amazon Bedrock evaluation job.
   *
   * @public
   */
  customMetricsEvaluatorModelIdentifiers?: string[] | undefined;

  /**
   * Identifies the models, Knowledge Bases, or other RAG sources evaluated in a model or Knowledge Base evaluation job.
   *
   * @public
   */
  inferenceConfigSummary?: EvaluationInferenceConfigSummary | undefined;

  /**
   * Specifies whether the evaluation job is for evaluating a model or evaluating a knowledge base (retrieval and response generation).
   *
   * @public
   */
  applicationType?: ApplicationType | undefined;
}

/**
 * @public
 */
export interface ListEvaluationJobsResponse {
  /**
   * Continuation token from the previous response, for Amazon Bedrock to list the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of summaries of the evaluation jobs.
   *
   * @public
   */
  jobSummaries?: EvaluationSummary[] | undefined;
}

/**
 * @public
 */
export interface StopEvaluationJobRequest {
  /**
   * The Amazon Resource Name (ARN) of the evaluation job you want to stop.
   *
   * @public
   */
  jobIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopEvaluationJobResponse {}

/**
 * Configuration settings for integrating Automated Reasoning policies with Amazon Bedrock Guardrails.
 *
 * @public
 */
export interface GuardrailAutomatedReasoningPolicyConfig {
  /**
   * The list of Automated Reasoning policy ARNs to include in the guardrail configuration.
   *
   * @public
   */
  policies: string[] | undefined;

  /**
   * The confidence threshold for triggering guardrail actions based on Automated Reasoning policy violations.
   *
   * @public
   */
  confidenceThreshold?: number | undefined;
}

/**
 * Contains filter strengths for harmful content. Guardrails support the following content filters to detect and filter harmful user inputs and FM-generated outputs.
 *
 * - **Hate** – Describes language or a statement that discriminates, criticizes, insults, denounces, or dehumanizes a person or group on the basis of an identity (such as race, ethnicity, gender, religion, sexual orientation, ability, and national origin).
 * - **Insults** – Describes language or a statement that includes demeaning, humiliating, mocking, insulting, or belittling language. This type of language is also labeled as bullying.
 * - **Sexual** – Describes language or a statement that indicates sexual interest, activity, or arousal using direct or indirect references to body parts, physical traits, or sex.
 * - **Violence** – Describes language or a statement that includes glorification of or threats to inflict physical pain, hurt, or injury toward a person, group or thing.
 *
 * Content filtering depends on the confidence classification of user inputs and FM responses across each of the four harmful categories. All input and output statements are classified into one of four confidence levels (NONE, LOW, MEDIUM, HIGH) for each harmful category. For example, if a statement is classified as *Hate* with HIGH confidence, the likelihood of the statement representing hateful content is high. A single statement can be classified across multiple categories with varying confidence levels. For example, a single statement can be classified as *Hate* with HIGH confidence, *Insults* with LOW confidence, *Sexual* with NONE confidence, and *Violence* with MEDIUM confidence.
 *
 * For more information, see [Guardrails content filters](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-filters.html).
 *
 * @public
 */
export interface GuardrailContentFilterConfig {
  /**
   * The harmful category that the content filter is applied to.
   *
   * @public
   */
  type: GuardrailContentFilterType | undefined;

  /**
   * The strength of the content filter to apply to prompts. As you increase the filter strength, the likelihood of filtering harmful content increases and the probability of seeing harmful content in your application reduces.
   *
   * @public
   */
  inputStrength: GuardrailFilterStrength | undefined;

  /**
   * The strength of the content filter to apply to model responses. As you increase the filter strength, the likelihood of filtering harmful content increases and the probability of seeing harmful content in your application reduces.
   *
   * @public
   */
  outputStrength: GuardrailFilterStrength | undefined;

  /**
   * The input modalities selected for the guardrail content filter configuration.
   *
   * @public
   */
  inputModalities?: GuardrailModality[] | undefined;

  /**
   * The output modalities selected for the guardrail content filter configuration.
   *
   * @public
   */
  outputModalities?: GuardrailModality[] | undefined;

  /**
   * Specifies the action to take when harmful content is detected. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  inputAction?: GuardrailContentFilterAction | undefined;

  /**
   * Specifies the action to take when harmful content is detected in the output. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  outputAction?: GuardrailContentFilterAction | undefined;

  /**
   * Specifies whether to enable guardrail evaluation on the input. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * Specifies whether to enable guardrail evaluation on the output. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * The tier that your guardrail uses for content filters. Consider using a tier that balances performance, accuracy, and compatibility with your existing generative AI workflows.
 *
 * @public
 */
export interface GuardrailContentFiltersTierConfig {
  /**
   * The tier that your guardrail uses for content filters. Valid values include:
   *
   * - `CLASSIC` tier – Provides established guardrails functionality supporting English, French, and Spanish languages.
   * - `STANDARD` tier – Provides a more robust solution than the `CLASSIC` tier and has more comprehensive language support. This tier requires that your guardrail use [cross-Region inference](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-cross-region.html).
   *
   * @public
   */
  tierName: GuardrailContentFiltersTierName | undefined;
}

/**
 * Contains details about how to handle harmful content.
 *
 * @public
 */
export interface GuardrailContentPolicyConfig {
  /**
   * Contains the type of the content filter and how strongly it should apply to prompts and model responses.
   *
   * @public
   */
  filtersConfig: GuardrailContentFilterConfig[] | undefined;

  /**
   * The tier that your guardrail uses for content filters.
   *
   * @public
   */
  tierConfig?: GuardrailContentFiltersTierConfig | undefined;
}

/**
 * The filter configuration details for the guardrails contextual grounding filter.
 *
 * @public
 */
export interface GuardrailContextualGroundingFilterConfig {
  /**
   * The filter details for the guardrails contextual grounding filter.
   *
   * @public
   */
  type: GuardrailContextualGroundingFilterType | undefined;

  /**
   * The threshold details for the guardrails contextual grounding filter.
   *
   * @public
   */
  threshold: number | undefined;

  /**
   * Specifies the action to take when content fails the contextual grounding evaluation. Supported values include:
   *
   * - `BLOCK` – Block the content and replace it with blocked messaging.
   * - `NONE` – Take no action but return detection information in the trace response.
   *
   * @public
   */
  action?: GuardrailContextualGroundingAction | undefined;

  /**
   * Specifies whether to enable contextual grounding evaluation. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.
   *
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * Specifies the tier that your guardrail uses for contextual grounding checks.
 *
 * @public
 */
export interface GuardrailContextualGroundingTierConfig {
  /**
   * The tier that your guardrail uses for contextual grounding. Valid values include:
   *
   * - `CLASSIC` tier – Provides established contextual grounding functionality supporting English, French, and Spanish languages.
   * - `STANDARD` tier – Provides a more robust solution than the `CLASSIC` tier, with support for reasoning, conversational content and more comprehensive language support. This tier requires that your guardrail use [cross-Region inference](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-cross-region.html).
   *
   * @public
   */
  tierName: GuardrailContextualGroundingTierName | undefined;
}

/**
 * The policy configuration details for the guardrails contextual grounding policy.
 *
 * @public
 */
export interface GuardrailContextualGroundingPolicyConfig {
  /**
   * The filter configuration details for the guardrails contextual grounding policy.
   *
   * @public
   */
  filtersConfig: GuardrailContextualGroundingFilterConfig[] | undefined;

  /**
   * The tier that your guardrail uses for contextual grounding.
   *
   * @public
   */
  tierConfig?: GuardrailContextualGroundingTierConfig | undefined;
}

/**
 * The system-defined guardrail profile that you're using with your guardrail. Guardrail profiles define the destination Amazon Web Services Regions where guardrail inference requests can be automatically routed. Using guardrail profiles helps maintain guardrail performance and reliability when demand increases.
 *
 * For more information, see the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-cross-region.html).
 *
 * @public
 */
export interface GuardrailCrossRegionConfig {
  /**
   * The ID or Amazon Resource Name (ARN) of the guardrail profile that your guardrail is using. Guardrail profile availability depends on your current Amazon Web Services Region. For more information, see the [Amazon Bedrock User Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-cross-region-support.html).
   *
   * @public
   */
  guardrailProfileIdentifier: string | undefined;
}
