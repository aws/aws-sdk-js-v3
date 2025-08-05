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
 * @public
 * @enum
 */
export const AgreementStatus = {
  AVAILABLE: "AVAILABLE",
  ERROR: "ERROR",
  NOT_AVAILABLE: "NOT_AVAILABLE",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type AgreementStatus = (typeof AgreementStatus)[keyof typeof AgreementStatus];

/**
 * <p>Information about the agreement availability</p>
 * @public
 */
export interface AgreementAvailability {
  /**
   * <p>Status of the agreement.</p>
   * @public
   */
  status: AgreementStatus | undefined;

  /**
   * <p>Error message.</p>
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
   * <p>Get customer profile Response.</p>
   * @public
   */
  formData: Uint8Array | undefined;
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
 * @public
 */
export interface PutUseCaseForModelAccessRequest {
  /**
   * <p>Put customer profile Request.</p>
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
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy whose build workflow you want to cancel.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The unique identifier of the build workflow to cancel. You can get this ID from the StartAutomatedReasoningPolicyBuildWorkflow response or by listing build workflows.</p>
   * @public
   */
  buildWorkflowId: string | undefined;
}

/**
 * @public
 */
export interface CancelAutomatedReasoningPolicyBuildWorkflowResponse {}

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
 * <p>Represents a formal logic rule in an Automated Reasoning policy. For example, rules can be expressed as if-then statements that define logical constraints.</p>
 * @public
 */
export interface AutomatedReasoningPolicyDefinitionRule {
  /**
   * <p>The unique identifier of the rule within the policy.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The formal logic expression of the rule.</p>
   * @public
   */
  expression: string | undefined;

  /**
   * <p>The human-readable form of the rule expression, often in natural language or simplified notation.</p>
   * @public
   */
  alternateExpression?: string | undefined;
}

/**
 * <p>Represents a single value within a custom type definition, including its identifier and description.</p>
 * @public
 */
export interface AutomatedReasoningPolicyDefinitionTypeValue {
  /**
   * <p>The actual value or identifier for this type value.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>A human-readable description explaining what this type value represents and when it should be used.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>Represents a custom user-defined viarble type in an Automated Reasoning policy. Types are enum-based and provide additional context beyond predefined variable types.</p>
 * @public
 */
export interface AutomatedReasoningPolicyDefinitionType {
  /**
   * <p>The name of the custom type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of what the custom type represents.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The possible values for this enum-based type, each with its own description.</p>
   * @public
   */
  values: AutomatedReasoningPolicyDefinitionTypeValue[] | undefined;
}

/**
 * <p>Represents a variable in an Automated Reasoning policy. Variables represent concepts that can have values assigned during natural language translation.</p>
 * @public
 */
export interface AutomatedReasoningPolicyDefinitionVariable {
  /**
   * <p>The name of the variable. Use descriptive names that clearly indicate the concept being represented.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The data type of the variable. Valid types include bool, int, real, enum, and custom types that you can provide.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The description of the variable that explains what it represents and how users might refer to it. Clear and comprehensive descriptions are essential for accurate natural language translation.</p>
   * @public
   */
  description: string | undefined;
}

/**
 * <p>Contains the formal logic rules, variables, and custom variable types that define an Automated Reasoning policy. The policy definition specifies the constraints used to validate foundation model responses for accuracy and logical consistency.</p>
 * @public
 */
export interface AutomatedReasoningPolicyDefinition {
  /**
   * <p>The version of the policy definition format.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The custom user-defined vairable types used in the policy. Types are enum-based variable types that provide additional context beyond the predefined variable types.</p>
   * @public
   */
  types?: AutomatedReasoningPolicyDefinitionType[] | undefined;

  /**
   * <p>The formal logic rules extracted from the source document. Rules define the logical constraints that determine whether model responses are valid, invalid, or satisfiable.</p>
   * @public
   */
  rules?: AutomatedReasoningPolicyDefinitionRule[] | undefined;

  /**
   * <p>The variables that represent concepts in the policy. Variables can have values assigned when translating natural language into formal logic. Their descriptions are crucial for accurate translation.</p>
   * @public
   */
  variables?: AutomatedReasoningPolicyDefinitionVariable[] | undefined;
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
export interface CreateAutomatedReasoningPolicyRequest {
  /**
   * <p>A unique name for the Automated Reasoning policy. The name must be between 1 and 63 characters and can contain letters, numbers, hyphens, and underscores.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the Automated Reasoning policy. Use this to provide context about the policy's purpose and the types of validations it performs.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than once. If this token matches a previous request, Amazon Bedrock ignores the request but doesn't return an error.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The policy definition that contains the formal logic rules, variables, and custom variable types used to validate foundation model responses in your application.</p>
   * @public
   */
  policyDefinition?: AutomatedReasoningPolicyDefinition | undefined;

  /**
   * <p>A list of tags to associate with the Automated Reasoning policy. Tags help you organize and manage your policies.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAutomatedReasoningPolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy that you created.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The version number of the newly created Automated Reasoning policy. The initial version is always DRAFT.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The name of the Automated Reasoning policy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the Automated Reasoning policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The hash of the policy definition. This is used as a concurrency token for creating policy versions that you can use in your application.</p>
   * @public
   */
  definitionHash?: string | undefined;

  /**
   * <p>The timestamp when the policy was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
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
 * <p>The request contains more tags than can be associated with a resource (50 tags per resource). The maximum number of tags includes both existing tags and those included in your current request. </p>
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
 * @enum
 */
export const AutomatedReasoningCheckResult = {
  IMPOSSIBLE: "IMPOSSIBLE",
  INVALID: "INVALID",
  NO_TRANSLATION: "NO_TRANSLATION",
  SATISFIABLE: "SATISFIABLE",
  TOO_COMPLEX: "TOO_COMPLEX",
  TRANSLATION_AMBIGUOUS: "TRANSLATION_AMBIGUOUS",
  VALID: "VALID",
} as const;

/**
 * @public
 */
export type AutomatedReasoningCheckResult =
  (typeof AutomatedReasoningCheckResult)[keyof typeof AutomatedReasoningCheckResult];

/**
 * @public
 */
export interface CreateAutomatedReasoningPolicyTestCaseRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy for which to create the test.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The output content that's validated by the Automated Reasoning policy. This represents the foundation model response that will be checked for accuracy.</p>
   * @public
   */
  guardContent: string | undefined;

  /**
   * <p>The input query or prompt that generated the content. This provides context for the validation.</p>
   * @public
   */
  queryContent?: string | undefined;

  /**
   * <p>The expected result of the Automated Reasoning check. Valid values include: , TOO_COMPLEX, and NO_TRANSLATIONS.</p> <ul> <li> <p> <code>VALID</code> - The claims are true. The claims are implied by the premises and the Automated Reasoning policy. Given the Automated Reasoning policy and premises, it is not possible for these claims to be false. In other words, there are no alternative answers that are true that contradict the claims.</p> </li> <li> <p> <code>INVALID</code> - The claims are false. The claims are not implied by the premises and Automated Reasoning policy. Furthermore, there exists different claims that are consistent with the premises and Automated Reasoning policy.</p> </li> <li> <p> <code>SATISFIABLE</code> - The claims can be true or false. It depends on what assumptions are made for the claim to be implied from the premises and Automated Reasoning policy rules. In this situation, different assumptions can make input claims false and alternative claims true.</p> </li> <li> <p> <code>IMPOSSIBLE</code> - Automated Reasoning can’t make a statement about the claims. This can happen if the premises are logically incorrect, or if there is a conflict within the Automated Reasoning policy itself.</p> </li> <li> <p> <code>TRANSLATION_AMBIGUOUS</code> - Detected an ambiguity in the translation meant it would be unsound to continue with validity checking. Additional context or follow-up questions might be needed to get translation to succeed.</p> </li> <li> <p> <code>TOO_COMPLEX</code> - The input contains too much information for Automated Reasoning to process within its latency limits.</p> </li> <li> <p> <code>NO_TRANSLATIONS</code> - Identifies that some or all of the input prompt wasn't translated into logic. This can happen if the input isn't relevant to the Automated Reasoning policy, or if the policy doesn't have variables to model relevant input. If Automated Reasoning can't translate anything, you get a single <code>NO_TRANSLATIONS</code> finding. You might also see a <code>NO_TRANSLATIONS</code> (along with other findings) if some part of the validation isn't translated.</p> </li> </ul>
   * @public
   */
  expectedAggregatedFindingsResult: AutomatedReasoningCheckResult | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The minimum confidence level for logic validation. Content that meets the threshold is considered a high-confidence finding that can be validated.</p>
   * @public
   */
  confidenceThreshold?: number | undefined;
}

/**
 * @public
 */
export interface CreateAutomatedReasoningPolicyTestCaseResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the policy for which the test was created.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The unique identifier of the created test.</p>
   * @public
   */
  testCaseId: string | undefined;
}

/**
 * @public
 */
export interface CreateAutomatedReasoningPolicyVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy for which to create a version.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The hash of the current policy definition used as a concurrency token to ensure the policy hasn't been modified since you last retrieved it.</p>
   * @public
   */
  lastUpdatedDefinitionHash: string | undefined;

  /**
   * <p>A list of tags to associate with the policy version.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAutomatedReasoningPolicyVersionResponse {
  /**
   * <p>The versioned Amazon Resource Name (ARN) of the policy version.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The version number of the policy version.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The name of the policy version.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the policy version.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The hash of the policy definition for this version.</p>
   * @public
   */
  definitionHash: string | undefined;

  /**
   * <p>The timestamp when the policy version was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAutomatedReasoningPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy to delete.</p>
   * @public
   */
  policyArn: string | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy whose build workflow you want to delete.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The unique identifier of the build workflow to delete.</p>
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * <p>The timestamp when the build workflow was last updated. This is used for optimistic concurrency control to prevent accidental deletion of workflows that have been modified.</p>
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
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy that contains the test.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The unique identifier of the test to delete.</p>
   * @public
   */
  testCaseId: string | undefined;

  /**
   * <p>The timestamp when the test was last updated. This is used as a concurrency token to prevent conflicting modifications.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAutomatedReasoningPolicyTestCaseResponse {}

/**
 * <p>Thrown when attempting to delete or modify a resource that is currently being used by other resources or operations. For example, trying to delete an Automated Reasoning policy that is referenced by an active guardrail.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
  }
}

/**
 * @public
 */
export interface ExportAutomatedReasoningPolicyVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy to export. Can be either the unversioned ARN for the draft policy or a versioned ARN for a specific policy version.</p>
   * @public
   */
  policyArn: string | undefined;
}

/**
 * @public
 */
export interface ExportAutomatedReasoningPolicyVersionResponse {
  /**
   * <p>The exported policy definition containing the formal logic rules, variables, and custom variable types.</p>
   * @public
   */
  policyDefinition: AutomatedReasoningPolicyDefinition | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy to retrieve. Can be either the unversioned ARN for the draft policy or an ARN for a specific policy version.</p>
   * @public
   */
  policyArn: string | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version of the policy.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The unique identifier of the policy.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The description of the policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The hash of the policy definition used as a concurrency token.</p>
   * @public
   */
  definitionHash: string | undefined;

  /**
   * <p>The timestamp when the policy was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the policy was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyAnnotationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy whose annotations you want to retrieve.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The unique identifier of the build workflow whose annotations you want to retrieve.</p>
   * @public
   */
  buildWorkflowId: string | undefined;
}

/**
 * <p>An annotation for adding a new rule to an Automated Reasoning policy using a formal logical expression.</p>
 * @public
 */
export interface AutomatedReasoningPolicyAddRuleAnnotation {
  /**
   * <p>The formal logical expression that defines the rule, using mathematical notation and referencing policy variables and types.</p>
   * @public
   */
  expression: string | undefined;
}

/**
 * <p>An annotation for adding a new rule to the policy by converting a natural language description into a formal logical expression.</p>
 * @public
 */
export interface AutomatedReasoningPolicyAddRuleFromNaturalLanguageAnnotation {
  /**
   * <p>The natural language description of the rule that should be converted into a formal logical expression.</p>
   * @public
   */
  naturalLanguage: string | undefined;
}

/**
 * <p>An annotation for adding a new custom type to an Automated Reasoning policy, defining a set of possible values for variables.</p>
 * @public
 */
export interface AutomatedReasoningPolicyAddTypeAnnotation {
  /**
   * <p>The name of the new custom type. This name will be used to reference the type in variable definitions and rules.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of what the custom type represents and how it should be used in the policy.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The list of possible values that variables of this type can take, each with its own description and identifier.</p>
   * @public
   */
  values: AutomatedReasoningPolicyDefinitionTypeValue[] | undefined;
}

/**
 * <p>An annotation for adding a new variable to an Automated Reasoning policy, which can be used in rule expressions.</p>
 * @public
 */
export interface AutomatedReasoningPolicyAddVariableAnnotation {
  /**
   * <p>The name of the new variable. This name will be used to reference the variable in rule expressions.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the variable, which can be a built-in type (like string or number) or a custom type defined in the policy.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>A description of what the variable represents and how it should be used in rules.</p>
   * @public
   */
  description: string | undefined;
}

/**
 * <p>An annotation for removing a rule from an Automated Reasoning policy.</p>
 * @public
 */
export interface AutomatedReasoningPolicyDeleteRuleAnnotation {
  /**
   * <p>The unique identifier of the rule to delete from the policy.</p>
   * @public
   */
  ruleId: string | undefined;
}

/**
 * <p>An annotation for removing a custom type from an Automated Reasoning policy.</p>
 * @public
 */
export interface AutomatedReasoningPolicyDeleteTypeAnnotation {
  /**
   * <p>The name of the custom type to delete from the policy. The type must not be referenced by any variables or rules.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>An annotation for removing a variable from an Automated Reasoning policy.</p>
 * @public
 */
export interface AutomatedReasoningPolicyDeleteVariableAnnotation {
  /**
   * <p>The name of the variable to delete from the policy. The variable must not be referenced by any rules.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>An annotation for processing and incorporating new content into an Automated Reasoning policy.</p>
 * @public
 */
export interface AutomatedReasoningPolicyIngestContentAnnotation {
  /**
   * <p>The new content to be analyzed and incorporated into the policy, such as additional documents or rule descriptions.</p>
   * @public
   */
  content: string | undefined;
}

/**
 * <p>An annotation for updating the policy based on feedback about how specific rules performed during testing or real-world usage.</p>
 * @public
 */
export interface AutomatedReasoningPolicyUpdateFromRuleFeedbackAnnotation {
  /**
   * <p>The list of rule identifiers that the feedback applies to.</p>
   * @public
   */
  ruleIds?: string[] | undefined;

  /**
   * <p>The feedback information about rule performance, including suggestions for improvements or corrections.</p>
   * @public
   */
  feedback: string | undefined;
}

/**
 * <p>An annotation for updating the policy based on feedback about how it performed on specific test scenarios.</p>
 * @public
 */
export interface AutomatedReasoningPolicyUpdateFromScenarioFeedbackAnnotation {
  /**
   * <p>The list of rule identifiers that were involved in the scenario being evaluated.</p>
   * @public
   */
  ruleIds?: string[] | undefined;

  /**
   * <p>The logical expression that defines the test scenario that generated this feedback.</p>
   * @public
   */
  scenarioExpression: string | undefined;

  /**
   * <p>The feedback information about scenario performance, including any issues or improvements identified.</p>
   * @public
   */
  feedback?: string | undefined;
}

/**
 * <p>An annotation for modifying an existing rule in an Automated Reasoning policy.</p>
 * @public
 */
export interface AutomatedReasoningPolicyUpdateRuleAnnotation {
  /**
   * <p>The unique identifier of the rule to update.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The new formal logical expression for the rule, replacing the previous expression.</p>
   * @public
   */
  expression: string | undefined;
}

/**
 * <p>Represents a single value that can be added to an existing custom type in the policy.</p>
 * @public
 */
export interface AutomatedReasoningPolicyAddTypeValue {
  /**
   * <p>The identifier or name of the new value to add to the type.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>A description of what this new type value represents and when it should be used.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>Represents a value to be removed from an existing custom type in the policy.</p>
 * @public
 */
export interface AutomatedReasoningPolicyDeleteTypeValue {
  /**
   * <p>The identifier or name of the value to remove from the type.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Represents a modification to a value within an existing custom type.</p>
 * @public
 */
export interface AutomatedReasoningPolicyUpdateTypeValue {
  /**
   * <p>The current identifier or name of the type value to update.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The new identifier or name for the type value, if you want to rename it.</p>
   * @public
   */
  newValue?: string | undefined;

  /**
   * <p>The new description for the type value, replacing the previous description.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>An annotation for managing values within custom types, including adding, updating, or removing specific type values.</p>
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
   * <p>An operation to add a new value to an existing custom type.</p>
   * @public
   */
  export interface AddTypeValueMember {
    addTypeValue: AutomatedReasoningPolicyAddTypeValue;
    updateTypeValue?: never;
    deleteTypeValue?: never;
    $unknown?: never;
  }

  /**
   * <p>An operation to modify an existing value within a custom type.</p>
   * @public
   */
  export interface UpdateTypeValueMember {
    addTypeValue?: never;
    updateTypeValue: AutomatedReasoningPolicyUpdateTypeValue;
    deleteTypeValue?: never;
    $unknown?: never;
  }

  /**
   * <p>An operation to remove a value from an existing custom type.</p>
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

  export interface Visitor<T> {
    addTypeValue: (value: AutomatedReasoningPolicyAddTypeValue) => T;
    updateTypeValue: (value: AutomatedReasoningPolicyUpdateTypeValue) => T;
    deleteTypeValue: (value: AutomatedReasoningPolicyDeleteTypeValue) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AutomatedReasoningPolicyTypeValueAnnotation, visitor: Visitor<T>): T => {
    if (value.addTypeValue !== undefined) return visitor.addTypeValue(value.addTypeValue);
    if (value.updateTypeValue !== undefined) return visitor.updateTypeValue(value.updateTypeValue);
    if (value.deleteTypeValue !== undefined) return visitor.deleteTypeValue(value.deleteTypeValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>An annotation for modifying an existing custom type in an Automated Reasoning policy.</p>
 * @public
 */
export interface AutomatedReasoningPolicyUpdateTypeAnnotation {
  /**
   * <p>The current name of the custom type to update.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The new name for the custom type, if you want to rename it. If not provided, the name remains unchanged.</p>
   * @public
   */
  newName?: string | undefined;

  /**
   * <p>The new description for the custom type, replacing the previous description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated list of values for the custom type, which can include additions, modifications, or removals.</p>
   * @public
   */
  values: AutomatedReasoningPolicyTypeValueAnnotation[] | undefined;
}

/**
 * <p>An annotation for modifying an existing variable in an Automated Reasoning policy.</p>
 * @public
 */
export interface AutomatedReasoningPolicyUpdateVariableAnnotation {
  /**
   * <p>The current name of the variable to update.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The new name for the variable, if you want to rename it. If not provided, the name remains unchanged.</p>
   * @public
   */
  newName?: string | undefined;

  /**
   * <p>The new description for the variable, replacing the previous description.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>Contains the various operations that can be performed on an Automated Reasoning policy, including adding, updating, and deleting rules, variables, and types.</p>
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
   * <p>An operation to add a new custom type to the policy, defining a set of possible values for policy variables.</p>
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
   * <p>An operation to modify an existing custom type in the policy, such as changing its name, description, or allowed values.</p>
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
   * <p>An operation to remove a custom type from the policy. The type must not be referenced by any variables or rules.</p>
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
   * <p>An operation to add a new variable to the policy, which can be used in rule expressions to represent dynamic values.</p>
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
   * <p>An operation to modify an existing variable in the policy, such as changing its name, type, or description.</p>
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
   * <p>An operation to remove a variable from the policy. The variable must not be referenced by any rules.</p>
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
   * <p>An operation to add a new logical rule to the policy using formal mathematical expressions.</p>
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
   * <p>An operation to modify an existing rule in the policy, such as changing its logical expression or conditions.</p>
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
   * <p>An operation to remove a rule from the policy.</p>
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
   * <p>An operation to add a new rule by converting natural language descriptions into formal logical expressions.</p>
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
   * <p>An operation to update the policy based on feedback about how specific rules performed during testing or validation.</p>
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
   * <p>An operation to update the policy based on feedback about how it performed on specific test scenarios.</p>
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
   * <p>An operation to process and incorporate new content into the policy, extracting additional rules and concepts.</p>
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

  export const visit = <T>(value: AutomatedReasoningPolicyAnnotation, visitor: Visitor<T>): T => {
    if (value.addType !== undefined) return visitor.addType(value.addType);
    if (value.updateType !== undefined) return visitor.updateType(value.updateType);
    if (value.deleteType !== undefined) return visitor.deleteType(value.deleteType);
    if (value.addVariable !== undefined) return visitor.addVariable(value.addVariable);
    if (value.updateVariable !== undefined) return visitor.updateVariable(value.updateVariable);
    if (value.deleteVariable !== undefined) return visitor.deleteVariable(value.deleteVariable);
    if (value.addRule !== undefined) return visitor.addRule(value.addRule);
    if (value.updateRule !== undefined) return visitor.updateRule(value.updateRule);
    if (value.deleteRule !== undefined) return visitor.deleteRule(value.deleteRule);
    if (value.addRuleFromNaturalLanguage !== undefined)
      return visitor.addRuleFromNaturalLanguage(value.addRuleFromNaturalLanguage);
    if (value.updateFromRulesFeedback !== undefined)
      return visitor.updateFromRulesFeedback(value.updateFromRulesFeedback);
    if (value.updateFromScenarioFeedback !== undefined)
      return visitor.updateFromScenarioFeedback(value.updateFromScenarioFeedback);
    if (value.ingestContent !== undefined) return visitor.ingestContent(value.ingestContent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyAnnotationsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The name of the Automated Reasoning policy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The unique identifier of the build workflow.</p>
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * <p>The current set of annotations containing rules, variables, and types extracted from the source documents. These can be modified before finalizing the policy.</p>
   * @public
   */
  annotations: AutomatedReasoningPolicyAnnotation[] | undefined;

  /**
   * <p>A hash value representing the current state of the annotations. This is used for optimistic concurrency control when updating annotations.</p>
   * @public
   */
  annotationSetHash: string | undefined;

  /**
   * <p>The timestamp when the annotations were last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyBuildWorkflowRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy whose build workflow you want to retrieve.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The unique identifier of the build workflow to retrieve.</p>
   * @public
   */
  buildWorkflowId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AutomatedReasoningPolicyBuildWorkflowType = {
  IMPORT_POLICY: "IMPORT_POLICY",
  INGEST_CONTENT: "INGEST_CONTENT",
  REFINE_POLICY: "REFINE_POLICY",
} as const;

/**
 * @public
 */
export type AutomatedReasoningPolicyBuildWorkflowType =
  (typeof AutomatedReasoningPolicyBuildWorkflowType)[keyof typeof AutomatedReasoningPolicyBuildWorkflowType];

/**
 * @public
 * @enum
 */
export const AutomatedReasoningPolicyBuildDocumentContentType = {
  PDF: "pdf",
  TEXT: "txt",
} as const;

/**
 * @public
 */
export type AutomatedReasoningPolicyBuildDocumentContentType =
  (typeof AutomatedReasoningPolicyBuildDocumentContentType)[keyof typeof AutomatedReasoningPolicyBuildDocumentContentType];

/**
 * @public
 * @enum
 */
export const AutomatedReasoningPolicyBuildWorkflowStatus = {
  BUILDING: "BUILDING",
  CANCELLED: "CANCELLED",
  CANCEL_REQUESTED: "CANCEL_REQUESTED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PREPROCESSING: "PREPROCESSING",
  SCHEDULED: "SCHEDULED",
  TESTING: "TESTING",
} as const;

/**
 * @public
 */
export type AutomatedReasoningPolicyBuildWorkflowStatus =
  (typeof AutomatedReasoningPolicyBuildWorkflowStatus)[keyof typeof AutomatedReasoningPolicyBuildWorkflowStatus];

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyBuildWorkflowResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The unique identifier of the build workflow.</p>
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * <p>The current status of the build workflow (e.g., RUNNING, COMPLETED, FAILED, CANCELLED).</p>
   * @public
   */
  status: AutomatedReasoningPolicyBuildWorkflowStatus | undefined;

  /**
   * <p>The type of build workflow being executed (e.g., DOCUMENT_INGESTION, POLICY_REPAIR).</p>
   * @public
   */
  buildWorkflowType: AutomatedReasoningPolicyBuildWorkflowType | undefined;

  /**
   * <p>The name of the source document used in the build workflow.</p>
   * @public
   */
  documentName?: string | undefined;

  /**
   * <p>The content type of the source document (e.g., text/plain, application/pdf).</p>
   * @public
   */
  documentContentType?: AutomatedReasoningPolicyBuildDocumentContentType | undefined;

  /**
   * <p>A detailed description of the document's content and how it should be used in the policy generation process.</p>
   * @public
   */
  documentDescription?: string | undefined;

  /**
   * <p>The timestamp when the build workflow was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the build workflow was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const AutomatedReasoningPolicyBuildResultAssetType = {
  BUILD_LOG: "BUILD_LOG",
  POLICY_DEFINITION: "POLICY_DEFINITION",
  QUALITY_REPORT: "QUALITY_REPORT",
} as const;

/**
 * @public
 */
export type AutomatedReasoningPolicyBuildResultAssetType =
  (typeof AutomatedReasoningPolicyBuildResultAssetType)[keyof typeof AutomatedReasoningPolicyBuildResultAssetType];

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyBuildWorkflowResultAssetsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy whose build workflow assets you want to retrieve.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The unique identifier of the build workflow whose result assets you want to retrieve.</p>
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * <p>The type of asset to retrieve (e.g., BUILD_LOG, QUALITY_REPORT, POLICY_DEFINITION).</p>
   * @public
   */
  assetType: AutomatedReasoningPolicyBuildResultAssetType | undefined;
}

/**
 * <p>A mutation operation that adds a new rule to the policy definition during the build process.</p>
 * @public
 */
export interface AutomatedReasoningPolicyAddRuleMutation {
  /**
   * <p>Represents a formal logic rule in an Automated Reasoning policy. For example, rules can be expressed as if-then statements that define logical constraints.</p>
   * @public
   */
  rule: AutomatedReasoningPolicyDefinitionRule | undefined;
}

/**
 * <p>A mutation operation that adds a new custom type to the policy definition during the build process.</p>
 * @public
 */
export interface AutomatedReasoningPolicyAddTypeMutation {
  /**
   * <p>Represents a custom user-defined viarble type in an Automated Reasoning policy. Types are enum-based and provide additional context beyond predefined variable types.</p>
   * @public
   */
  type: AutomatedReasoningPolicyDefinitionType | undefined;
}

/**
 * <p>A mutation operation that adds a new variable to the policy definition during the build process.</p>
 * @public
 */
export interface AutomatedReasoningPolicyAddVariableMutation {
  /**
   * <p>Represents a variable in an Automated Reasoning policy. Variables represent concepts that can have values assigned during natural language translation.</p>
   * @public
   */
  variable: AutomatedReasoningPolicyDefinitionVariable | undefined;
}

/**
 * <p>A mutation operation that removes a rule from the policy definition during the build process.</p>
 * @public
 */
export interface AutomatedReasoningPolicyDeleteRuleMutation {
  /**
   * <p>The unique identifier of the rule to delete.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>A mutation operation that removes a custom type from the policy definition during the build process.</p>
 * @public
 */
export interface AutomatedReasoningPolicyDeleteTypeMutation {
  /**
   * <p>The name of the custom type to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>A mutation operation that removes a variable from the policy definition during the build process.</p>
 * @public
 */
export interface AutomatedReasoningPolicyDeleteVariableMutation {
  /**
   * <p>The name of the variable to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>A mutation operation that modifies an existing rule in the policy definition during the build process.</p>
 * @public
 */
export interface AutomatedReasoningPolicyUpdateRuleMutation {
  /**
   * <p>Represents a formal logic rule in an Automated Reasoning policy. For example, rules can be expressed as if-then statements that define logical constraints.</p>
   * @public
   */
  rule: AutomatedReasoningPolicyDefinitionRule | undefined;
}

/**
 * <p>A mutation operation that modifies an existing custom type in the policy definition during the build process.</p>
 * @public
 */
export interface AutomatedReasoningPolicyUpdateTypeMutation {
  /**
   * <p>Represents a custom user-defined viarble type in an Automated Reasoning policy. Types are enum-based and provide additional context beyond predefined variable types.</p>
   * @public
   */
  type: AutomatedReasoningPolicyDefinitionType | undefined;
}

/**
 * <p>A mutation operation that modifies an existing variable in the policy definition during the build process.</p>
 * @public
 */
export interface AutomatedReasoningPolicyUpdateVariableMutation {
  /**
   * <p>Represents a variable in an Automated Reasoning policy. Variables represent concepts that can have values assigned during natural language translation.</p>
   * @public
   */
  variable: AutomatedReasoningPolicyDefinitionVariable | undefined;
}

/**
 * <p>A container for various mutation operations that can be applied to an Automated Reasoning policy, including adding, updating, and deleting policy elements.</p>
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
   * <p>A mutation to add a new custom type to the policy.</p>
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
   * <p>A mutation to modify an existing custom type in the policy.</p>
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
   * <p>A mutation to remove a custom type from the policy.</p>
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
   * <p>A mutation to add a new variable to the policy.</p>
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
   * <p>A mutation to modify an existing variable in the policy.</p>
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
   * <p>A mutation to remove a variable from the policy.</p>
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
   * <p>A mutation to add a new rule to the policy.</p>
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
   * <p>A mutation to modify an existing rule in the policy.</p>
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
   * <p>A mutation to remove a rule from the policy.</p>
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

  export const visit = <T>(value: AutomatedReasoningPolicyMutation, visitor: Visitor<T>): T => {
    if (value.addType !== undefined) return visitor.addType(value.addType);
    if (value.updateType !== undefined) return visitor.updateType(value.updateType);
    if (value.deleteType !== undefined) return visitor.deleteType(value.deleteType);
    if (value.addVariable !== undefined) return visitor.addVariable(value.addVariable);
    if (value.updateVariable !== undefined) return visitor.updateVariable(value.updateVariable);
    if (value.deleteVariable !== undefined) return visitor.deleteVariable(value.deleteVariable);
    if (value.addRule !== undefined) return visitor.addRule(value.addRule);
    if (value.updateRule !== undefined) return visitor.updateRule(value.updateRule);
    if (value.deleteRule !== undefined) return visitor.deleteRule(value.deleteRule);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Represents the planning phase of policy build workflow, where the system analyzes source content and determines what operations to perform.</p>
 * @public
 */
export interface AutomatedReasoningPolicyPlanning {}

/**
 * <p>Provides context about what type of operation was being performed during a build step.</p>
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
   * <p>Indicates that this build step was part of the planning phase, where the system determines what operations to perform.</p>
   * @public
   */
  export interface PlanningMember {
    planning: AutomatedReasoningPolicyPlanning;
    mutation?: never;
    $unknown?: never;
  }

  /**
   * <p>Indicates that this build step involved modifying the policy structure, such as adding or updating rules, variables, or types.</p>
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

  export interface Visitor<T> {
    planning: (value: AutomatedReasoningPolicyPlanning) => T;
    mutation: (value: AutomatedReasoningPolicyMutation) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AutomatedReasoningPolicyBuildStepContext, visitor: Visitor<T>): T => {
    if (value.planning !== undefined) return visitor.planning(value.planning);
    if (value.mutation !== undefined) return visitor.mutation(value.mutation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const AutomatedReasoningPolicyBuildMessageType = {
  ERROR: "ERROR",
  INFO: "INFO",
  WARNING: "WARNING",
} as const;

/**
 * @public
 */
export type AutomatedReasoningPolicyBuildMessageType =
  (typeof AutomatedReasoningPolicyBuildMessageType)[keyof typeof AutomatedReasoningPolicyBuildMessageType];

/**
 * <p>Represents a message generated during a build step, providing information about what happened or any issues encountered.</p>
 * @public
 */
export interface AutomatedReasoningPolicyBuildStepMessage {
  /**
   * <p>The content of the message, describing what occurred during the build step.</p>
   * @public
   */
  message: string | undefined;

  /**
   * <p>The type of message (e.g., INFO, WARNING, ERROR) indicating its severity and purpose.</p>
   * @public
   */
  messageType: AutomatedReasoningPolicyBuildMessageType | undefined;
}

/**
 * <p>Represents a single element in an Automated Reasoning policy definition, such as a rule, variable, or type definition.</p>
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
   * <p>Represents a variable in an Automated Reasoning policy. Variables represent concepts that can have values assigned during natural language translation.</p>
   * @public
   */
  export interface PolicyDefinitionVariableMember {
    policyDefinitionVariable: AutomatedReasoningPolicyDefinitionVariable;
    policyDefinitionType?: never;
    policyDefinitionRule?: never;
    $unknown?: never;
  }

  /**
   * <p>Represents a custom user-defined viarble type in an Automated Reasoning policy. Types are enum-based and provide additional context beyond predefined variable types.</p>
   * @public
   */
  export interface PolicyDefinitionTypeMember {
    policyDefinitionVariable?: never;
    policyDefinitionType: AutomatedReasoningPolicyDefinitionType;
    policyDefinitionRule?: never;
    $unknown?: never;
  }

  /**
   * <p>Represents a formal logic rule in an Automated Reasoning policy. For example, rules can be expressed as if-then statements that define logical constraints.</p>
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

  export interface Visitor<T> {
    policyDefinitionVariable: (value: AutomatedReasoningPolicyDefinitionVariable) => T;
    policyDefinitionType: (value: AutomatedReasoningPolicyDefinitionType) => T;
    policyDefinitionRule: (value: AutomatedReasoningPolicyDefinitionRule) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AutomatedReasoningPolicyDefinitionElement, visitor: Visitor<T>): T => {
    if (value.policyDefinitionVariable !== undefined)
      return visitor.policyDefinitionVariable(value.policyDefinitionVariable);
    if (value.policyDefinitionType !== undefined) return visitor.policyDefinitionType(value.policyDefinitionType);
    if (value.policyDefinitionRule !== undefined) return visitor.policyDefinitionRule(value.policyDefinitionRule);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Represents a single step in the policy build process, containing context about what was being processed and any messages or results.</p>
 * @public
 */
export interface AutomatedReasoningPolicyBuildStep {
  /**
   * <p>Contextual information about what was being processed during this build step, such as the type of operation or the source material being analyzed.</p>
   * @public
   */
  context: AutomatedReasoningPolicyBuildStepContext | undefined;

  /**
   * <p>Reference to the previous element or step in the build process, helping to trace the sequence of operations.</p>
   * @public
   */
  priorElement?: AutomatedReasoningPolicyDefinitionElement | undefined;

  /**
   * <p>A list of messages generated during this build step, including informational messages, warnings, and error details.</p>
   * @public
   */
  messages: AutomatedReasoningPolicyBuildStepMessage[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AutomatedReasoningPolicyAnnotationStatus = {
  APPLIED: "APPLIED",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type AutomatedReasoningPolicyAnnotationStatus =
  (typeof AutomatedReasoningPolicyAnnotationStatus)[keyof typeof AutomatedReasoningPolicyAnnotationStatus];

/**
 * <p>Represents a single entry in the policy build log, containing information about a specific step or event in the build process.</p>
 * @public
 */
export interface AutomatedReasoningPolicyBuildLogEntry {
  /**
   * <p>The annotation or operation that was being processed when this log entry was created.</p>
   * @public
   */
  annotation: AutomatedReasoningPolicyAnnotation | undefined;

  /**
   * <p>The status of the build step (e.g., SUCCESS, FAILED, IN_PROGRESS).</p>
   * @public
   */
  status: AutomatedReasoningPolicyAnnotationStatus | undefined;

  /**
   * <p>Detailed information about the specific build steps that were executed, including any sub-operations or transformations.</p>
   * @public
   */
  buildSteps: AutomatedReasoningPolicyBuildStep[] | undefined;
}

/**
 * <p>Contains detailed logging information about the policy build process, including steps taken, decisions made, and any issues encountered.</p>
 * @public
 */
export interface AutomatedReasoningPolicyBuildLog {
  /**
   * <p>A list of log entries documenting each step in the policy build process, including timestamps, status, and detailed messages.</p>
   * @public
   */
  entries: AutomatedReasoningPolicyBuildLogEntry[] | undefined;
}

/**
 * <p>Represents a set of rules that operate on completely separate variables, indicating they address different concerns or domains within the policy.</p>
 * @public
 */
export interface AutomatedReasoningPolicyDisjointRuleSet {
  /**
   * <p>The set of variables that are used by the rules in this disjoint set.</p>
   * @public
   */
  variables: string[] | undefined;

  /**
   * <p>The list of rules that form this disjoint set, all operating on the same set of variables.</p>
   * @public
   */
  rules: string[] | undefined;
}

/**
 * <p>Associates a type name with a specific value name, used for referencing type values in rules and other policy elements.</p>
 * @public
 */
export interface AutomatedReasoningPolicyDefinitionTypeValuePair {
  /**
   * <p>The name of the custom type that contains the referenced value.</p>
   * @public
   */
  typeName: string | undefined;

  /**
   * <p>The name of the specific value within the type.</p>
   * @public
   */
  valueName: string | undefined;
}

/**
 * <p>Provides a comprehensive analysis of the quality and completeness of an Automated Reasoning policy definition, highlighting potential issues and optimization opportunities.</p>
 * @public
 */
export interface AutomatedReasoningPolicyDefinitionQualityReport {
  /**
   * <p>The total number of custom types defined in the policy.</p>
   * @public
   */
  typeCount: number | undefined;

  /**
   * <p>The total number of variables defined in the policy.</p>
   * @public
   */
  variableCount: number | undefined;

  /**
   * <p>The total number of rules defined in the policy.</p>
   * @public
   */
  ruleCount: number | undefined;

  /**
   * <p>A list of custom types that are defined but not referenced by any variables or rules, suggesting they may be unnecessary.</p>
   * @public
   */
  unusedTypes: string[] | undefined;

  /**
   * <p>A list of type values that are defined but never used in any rules, indicating potential cleanup opportunities.</p>
   * @public
   */
  unusedTypeValues: AutomatedReasoningPolicyDefinitionTypeValuePair[] | undefined;

  /**
   * <p>A list of variables that are defined but not referenced by any rules, suggesting they may be unnecessary.</p>
   * @public
   */
  unusedVariables: string[] | undefined;

  /**
   * <p>A list of rules that may conflict with each other, potentially leading to inconsistent policy behavior.</p>
   * @public
   */
  conflictingRules: string[] | undefined;

  /**
   * <p>Groups of rules that operate on completely separate sets of variables, indicating the policy may be addressing multiple unrelated concerns.</p>
   * @public
   */
  disjointRuleSets: AutomatedReasoningPolicyDisjointRuleSet[] | undefined;
}

/**
 * <p>Contains the various assets generated during a policy build workflow, including logs, quality reports, and the final policy definition.</p>
 * @public
 */
export type AutomatedReasoningPolicyBuildResultAssets =
  | AutomatedReasoningPolicyBuildResultAssets.BuildLogMember
  | AutomatedReasoningPolicyBuildResultAssets.PolicyDefinitionMember
  | AutomatedReasoningPolicyBuildResultAssets.QualityReportMember
  | AutomatedReasoningPolicyBuildResultAssets.$UnknownMember;

/**
 * @public
 */
export namespace AutomatedReasoningPolicyBuildResultAssets {
  /**
   * <p>Contains the formal logic rules, variables, and custom variable types that define an Automated Reasoning policy. The policy definition specifies the constraints used to validate foundation model responses for accuracy and logical consistency.</p>
   * @public
   */
  export interface PolicyDefinitionMember {
    policyDefinition: AutomatedReasoningPolicyDefinition;
    qualityReport?: never;
    buildLog?: never;
    $unknown?: never;
  }

  /**
   * <p>A comprehensive report analyzing the quality of the generated policy, including metrics about rule coverage, potential conflicts, and unused elements.</p>
   * @public
   */
  export interface QualityReportMember {
    policyDefinition?: never;
    qualityReport: AutomatedReasoningPolicyDefinitionQualityReport;
    buildLog?: never;
    $unknown?: never;
  }

  /**
   * <p>The complete build log containing detailed information about each step in the policy generation process.</p>
   * @public
   */
  export interface BuildLogMember {
    policyDefinition?: never;
    qualityReport?: never;
    buildLog: AutomatedReasoningPolicyBuildLog;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    policyDefinition?: never;
    qualityReport?: never;
    buildLog?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    policyDefinition: (value: AutomatedReasoningPolicyDefinition) => T;
    qualityReport: (value: AutomatedReasoningPolicyDefinitionQualityReport) => T;
    buildLog: (value: AutomatedReasoningPolicyBuildLog) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AutomatedReasoningPolicyBuildResultAssets, visitor: Visitor<T>): T => {
    if (value.policyDefinition !== undefined) return visitor.policyDefinition(value.policyDefinition);
    if (value.qualityReport !== undefined) return visitor.qualityReport(value.qualityReport);
    if (value.buildLog !== undefined) return visitor.buildLog(value.buildLog);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyBuildWorkflowResultAssetsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The unique identifier of the build workflow.</p>
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * <p>The requested build workflow asset. This is a union type that returns only one of the available asset types (logs, reports, or generated artifacts) based on the specific asset type requested in the API call.</p>
   * @public
   */
  buildWorkflowAssets?: AutomatedReasoningPolicyBuildResultAssets | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyNextScenarioRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy for which you want to get the next test scenario.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The unique identifier of the build workflow associated with the test scenarios.</p>
   * @public
   */
  buildWorkflowId: string | undefined;
}

/**
 * <p>Represents a test scenario used to validate an Automated Reasoning policy, including the test conditions and expected outcomes.</p>
 * @public
 */
export interface AutomatedReasoningPolicyScenario {
  /**
   * <p>The logical expression or condition that defines this test scenario.</p>
   * @public
   */
  expression: string | undefined;

  /**
   * <p>An alternative way to express the same test scenario, used for validation and comparison purposes.</p>
   * @public
   */
  alternateExpression: string | undefined;

  /**
   * <p>The list of rule identifiers that are expected to be triggered or evaluated by this test scenario.</p>
   * @public
   */
  ruleIds: string[] | undefined;

  /**
   * <p>The expected outcome when this scenario is evaluated against the policy (e.g., PASS, FAIL, VIOLATION).</p>
   * @public
   */
  expectedResult: AutomatedReasoningCheckResult | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyNextScenarioResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The next test scenario to validate, including the test expression and expected results.</p>
   * @public
   */
  scenario?: AutomatedReasoningPolicyScenario | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyTestCaseRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy that contains the test.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The unique identifier of the test to retrieve.</p>
   * @public
   */
  testCaseId: string | undefined;
}

/**
 * <p>Represents a test for validating an Automated Reasoning policy. tests contain sample inputs and expected outcomes to verify policy behavior.</p>
 * @public
 */
export interface AutomatedReasoningPolicyTestCase {
  /**
   * <p>The unique identifier of the test.</p>
   * @public
   */
  testCaseId: string | undefined;

  /**
   * <p>The output content to be validated by the policy, typically representing a foundation model response.</p>
   * @public
   */
  guardContent: string | undefined;

  /**
   * <p>The input query or prompt that generated the content. This provides context for the validation.</p>
   * @public
   */
  queryContent?: string | undefined;

  /**
   * <p>The expected result of the Automated Reasoning check for this test.</p>
   * @public
   */
  expectedAggregatedFindingsResult?: AutomatedReasoningCheckResult | undefined;

  /**
   * <p>The timestamp when the test was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the test was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The minimum confidence level for logic validation. Content meeting this threshold is considered high-confidence and can be validated.</p>
   * @public
   */
  confidenceThreshold?: number | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyTestCaseResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the policy that contains the test.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The test details including the content, query, expected result, and metadata.</p>
   * @public
   */
  testCase: AutomatedReasoningPolicyTestCase | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyTestResultRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The build workflow identifier. The build workflow must display a <code>COMPLETED</code> status to get results.</p>
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * <p>The unique identifier of the test for which to retrieve results.</p>
   * @public
   */
  testCaseId: string | undefined;
}

/**
 * <p>References a specific automated reasoning policy rule that was applied during evaluation.</p>
 * @public
 */
export interface AutomatedReasoningCheckRule {
  /**
   * <p>The unique identifier of the automated reasoning rule.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The ARN of the automated reasoning policy version that contains this rule.</p>
   * @public
   */
  policyVersionArn?: string | undefined;
}

/**
 * <p>Represents a logical statement that can be expressed both in formal logic notation and natural language, providing dual representations for better understanding and validation.</p>
 * @public
 */
export interface AutomatedReasoningLogicStatement {
  /**
   * <p>The formal logic representation of the statement using mathematical notation and logical operators.</p>
   * @public
   */
  logic: string | undefined;

  /**
   * <p>The natural language representation of the logical statement, providing a human-readable interpretation of the formal logic.</p>
   * @public
   */
  naturalLanguage?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AutomatedReasoningCheckLogicWarningType = {
  ALWAYS_FALSE: "ALWAYS_FALSE",
  ALWAYS_TRUE: "ALWAYS_TRUE",
} as const;

/**
 * @public
 */
export type AutomatedReasoningCheckLogicWarningType =
  (typeof AutomatedReasoningCheckLogicWarningType)[keyof typeof AutomatedReasoningCheckLogicWarningType];

/**
 * <p>Identifies logical issues in the translated statements that exist independent of any policy rules, such as statements that are always true or always false.</p>
 * @public
 */
export interface AutomatedReasoningCheckLogicWarning {
  /**
   * <p>The category of the detected logical issue, such as statements that are always true or always false.</p>
   * @public
   */
  type?: AutomatedReasoningCheckLogicWarningType | undefined;

  /**
   * <p>The logical statements that serve as premises under which the claims are validated.</p>
   * @public
   */
  premises?: AutomatedReasoningLogicStatement[] | undefined;

  /**
   * <p>The logical statements that are validated while assuming the policy and premises.</p>
   * @public
   */
  claims?: AutomatedReasoningLogicStatement[] | undefined;
}

/**
 * <p>References a portion of the original input text that corresponds to logical elements.</p>
 * @public
 */
export interface AutomatedReasoningCheckInputTextReference {
  /**
   * <p>The specific text from the original input that this reference points to.</p>
   * @public
   */
  text?: string | undefined;
}

/**
 * <p>Contains the logical translation of natural language input into formal logical statements, including premises, claims, and confidence scores.</p>
 * @public
 */
export interface AutomatedReasoningCheckTranslation {
  /**
   * <p>The logical statements that serve as the foundation or assumptions for the claims.</p>
   * @public
   */
  premises?: AutomatedReasoningLogicStatement[] | undefined;

  /**
   * <p>The logical statements that are being validated against the premises and policy rules.</p>
   * @public
   */
  claims: AutomatedReasoningLogicStatement[] | undefined;

  /**
   * <p>References to portions of the original input text that correspond to the premises but could not be fully translated.</p>
   * @public
   */
  untranslatedPremises?: AutomatedReasoningCheckInputTextReference[] | undefined;

  /**
   * <p>References to portions of the original input text that correspond to the claims but could not be fully translated.</p>
   * @public
   */
  untranslatedClaims?: AutomatedReasoningCheckInputTextReference[] | undefined;

  /**
   * <p>A confidence score between 0 and 1 indicating how certain the system is about the logical translation.</p>
   * @public
   */
  confidence: number | undefined;
}

/**
 * <p>Indicates that no valid claims can be made due to logical contradictions in the premises or rules.</p>
 * @public
 */
export interface AutomatedReasoningCheckImpossibleFinding {
  /**
   * <p>The logical translation of the input that this finding evaluates.</p>
   * @public
   */
  translation?: AutomatedReasoningCheckTranslation | undefined;

  /**
   * <p>The automated reasoning policy rules that contradict the claims and/or premises in the input.</p>
   * @public
   */
  contradictingRules?: AutomatedReasoningCheckRule[] | undefined;

  /**
   * <p>Indication of a logic issue with the translation without needing to consider the automated reasoning policy rules.</p>
   * @public
   */
  logicWarning?: AutomatedReasoningCheckLogicWarning | undefined;
}

/**
 * <p>Indicates that the claims are logically false and contradictory to the established rules or premises.</p>
 * @public
 */
export interface AutomatedReasoningCheckInvalidFinding {
  /**
   * <p>The logical translation of the input that this finding invalidates.</p>
   * @public
   */
  translation?: AutomatedReasoningCheckTranslation | undefined;

  /**
   * <p>The automated reasoning policy rules that contradict the claims in the input.</p>
   * @public
   */
  contradictingRules?: AutomatedReasoningCheckRule[] | undefined;

  /**
   * <p>Indication of a logic issue with the translation without needing to consider the automated reasoning policy rules.</p>
   * @public
   */
  logicWarning?: AutomatedReasoningCheckLogicWarning | undefined;
}

/**
 * <p>Indicates that no relevant logical information could be extracted from the input for validation.</p>
 * @public
 */
export interface AutomatedReasoningCheckNoTranslationsFinding {}

/**
 * <p>Represents a logical scenario where claims can be evaluated as true or false, containing specific logical assignments.</p>
 * @public
 */
export interface AutomatedReasoningCheckScenario {
  /**
   * <p>List of logical assignments and statements that define this scenario.</p>
   * @public
   */
  statements?: AutomatedReasoningLogicStatement[] | undefined;
}

/**
 * <p>Indicates that the claims could be either true or false depending on additional assumptions not provided in the input.</p>
 * @public
 */
export interface AutomatedReasoningCheckSatisfiableFinding {
  /**
   * <p>The logical translation of the input that this finding evaluates.</p>
   * @public
   */
  translation?: AutomatedReasoningCheckTranslation | undefined;

  /**
   * <p>An example scenario demonstrating how the claims could be logically true.</p>
   * @public
   */
  claimsTrueScenario?: AutomatedReasoningCheckScenario | undefined;

  /**
   * <p>An example scenario demonstrating how the claims could be logically false.</p>
   * @public
   */
  claimsFalseScenario?: AutomatedReasoningCheckScenario | undefined;

  /**
   * <p>Indication of a logic issue with the translation without needing to consider the automated reasoning policy rules.</p>
   * @public
   */
  logicWarning?: AutomatedReasoningCheckLogicWarning | undefined;
}

/**
 * <p>Indicates that the input exceeds the processing capacity due to the volume or complexity of the logical information.</p>
 * @public
 */
export interface AutomatedReasoningCheckTooComplexFinding {}

/**
 * <p>Represents one possible logical interpretation of ambiguous input content.</p>
 * @public
 */
export interface AutomatedReasoningCheckTranslationOption {
  /**
   * <p>Different logical interpretations that were detected during translation of the input.</p>
   * @public
   */
  translations?: AutomatedReasoningCheckTranslation[] | undefined;
}

/**
 * <p>Indicates that the input has multiple valid logical interpretations, requiring additional context or clarification.</p>
 * @public
 */
export interface AutomatedReasoningCheckTranslationAmbiguousFinding {
  /**
   * <p>Different logical interpretations that were detected during translation of the input.</p>
   * @public
   */
  options?: AutomatedReasoningCheckTranslationOption[] | undefined;

  /**
   * <p>Scenarios showing how the different translation options differ in meaning.</p>
   * @public
   */
  differenceScenarios?: AutomatedReasoningCheckScenario[] | undefined;
}

/**
 * <p>Indicates that the claims are definitively true and logically implied by the premises, with no possible alternative interpretations.</p>
 * @public
 */
export interface AutomatedReasoningCheckValidFinding {
  /**
   * <p>The logical translation of the input that this finding validates.</p>
   * @public
   */
  translation?: AutomatedReasoningCheckTranslation | undefined;

  /**
   * <p>An example scenario demonstrating how the claims are logically true.</p>
   * @public
   */
  claimsTrueScenario?: AutomatedReasoningCheckScenario | undefined;

  /**
   * <p>The automated reasoning policy rules that support why this result is considered valid.</p>
   * @public
   */
  supportingRules?: AutomatedReasoningCheckRule[] | undefined;

  /**
   * <p>Indication of a logic issue with the translation without needing to consider the automated reasoning policy rules.</p>
   * @public
   */
  logicWarning?: AutomatedReasoningCheckLogicWarning | undefined;
}

/**
 * <p>Represents the result of an Automated Reasoning validation check, indicating whether the content is logically valid, invalid, or falls into other categories based on the policy rules.</p>
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
   * <p>Indicates that the claims are true. The claims are implied by the premises and the Automated Reasoning policy. Given the Automated Reasoning policy and premises, it is not possible for these claims to be false.</p>
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
   * <p>Indicates that the claims are false. The claims are not implied by the premises and Automated Reasoning policy. Furthermore, there exist different claims that are consistent with the premises and Automated Reasoning policy.</p>
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
   * <p>Indicates that the claims can be true or false. It depends on what assumptions are made for the claim to be implied from the premises and Automated Reasoning policy rules. In this situation, different assumptions can make input claims false and alternative claims true.</p>
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
   * <p>Indicates that Automated Reasoning cannot make a statement about the claims. This can happen if the premises are logically incorrect, or if there is a conflict within the Automated Reasoning policy itself.</p>
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
   * <p>Indicates that an ambiguity was detected in the translation, making it unsound to continue with validity checking. Additional context or follow-up questions might be needed to get translation to succeed.</p>
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
   * <p>Indicates that the input contains too much information for Automated Reasoning to process within its latency limits.</p>
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
   * <p>Identifies that some or all of the input prompt wasn't translated into logic. This can happen if the input isn't relevant to the Automated Reasoning policy, or if the policy doesn't have variables to model relevant input.</p>
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

  export const visit = <T>(value: AutomatedReasoningCheckFinding, visitor: Visitor<T>): T => {
    if (value.valid !== undefined) return visitor.valid(value.valid);
    if (value.invalid !== undefined) return visitor.invalid(value.invalid);
    if (value.satisfiable !== undefined) return visitor.satisfiable(value.satisfiable);
    if (value.impossible !== undefined) return visitor.impossible(value.impossible);
    if (value.translationAmbiguous !== undefined) return visitor.translationAmbiguous(value.translationAmbiguous);
    if (value.tooComplex !== undefined) return visitor.tooComplex(value.tooComplex);
    if (value.noTranslations !== undefined) return visitor.noTranslations(value.noTranslations);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const AutomatedReasoningPolicyTestRunResult = {
  FAILED: "FAILED",
  PASSED: "PASSED",
} as const;

/**
 * @public
 */
export type AutomatedReasoningPolicyTestRunResult =
  (typeof AutomatedReasoningPolicyTestRunResult)[keyof typeof AutomatedReasoningPolicyTestRunResult];

/**
 * @public
 * @enum
 */
export const AutomatedReasoningPolicyTestRunStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
  SCHEDULED: "SCHEDULED",
} as const;

/**
 * @public
 */
export type AutomatedReasoningPolicyTestRunStatus =
  (typeof AutomatedReasoningPolicyTestRunStatus)[keyof typeof AutomatedReasoningPolicyTestRunStatus];

/**
 * <p>Contains the results of testing an Automated Reasoning policy against various scenarios and validation checks.</p>
 * @public
 */
export interface AutomatedReasoningPolicyTestResult {
  /**
   * <p>Represents a test for validating an Automated Reasoning policy. tests contain sample inputs and expected outcomes to verify policy behavior.</p>
   * @public
   */
  testCase: AutomatedReasoningPolicyTestCase | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy that was tested.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The overall status of the test run (e.g., COMPLETED, FAILED, IN_PROGRESS).</p>
   * @public
   */
  testRunStatus: AutomatedReasoningPolicyTestRunStatus | undefined;

  /**
   * <p>Detailed findings from the test run, including any issues, violations, or unexpected behaviors discovered.</p>
   * @public
   */
  testFindings?: AutomatedReasoningCheckFinding[] | undefined;

  /**
   * <p>The overall result of the test run, indicating whether the policy passed or failed validation.</p>
   * @public
   */
  testRunResult?: AutomatedReasoningPolicyTestRunResult | undefined;

  /**
   * <p>A summary of all test findings, aggregated to provide an overall assessment of policy quality and correctness.</p>
   * @public
   */
  aggregatedTestFindingsResult?: AutomatedReasoningCheckResult | undefined;

  /**
   * <p>The timestamp when the test results were last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetAutomatedReasoningPolicyTestResultResponse {
  /**
   * <p>The test result containing validation findings, execution status, and detailed analysis.</p>
   * @public
   */
  testResult: AutomatedReasoningPolicyTestResult | undefined;
}

/**
 * @public
 */
export interface ListAutomatedReasoningPoliciesRequest {
  /**
   * <p>Optional filter to list only the policy versions with the specified Amazon Resource Name (ARN). If not provided, the DRAFT versions for all policies are listed.</p>
   * @public
   */
  policyArn?: string | undefined;

  /**
   * <p>The pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of policies to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains summary information about an Automated Reasoning policy, including metadata and timestamps.</p>
 * @public
 */
export interface AutomatedReasoningPolicySummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The name of the policy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The version of the policy.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The unique identifier of the policy.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The timestamp when the policy was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAutomatedReasoningPoliciesResponse {
  /**
   * <p>A list of Automated Reasoning policy summaries.</p>
   * @public
   */
  automatedReasoningPolicySummaries: AutomatedReasoningPolicySummary[] | undefined;

  /**
   * <p>The pagination token to use in a subsequent request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomatedReasoningPolicyBuildWorkflowsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy whose build workflows you want to list.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>A pagination token from a previous request to continue listing build workflows from where the previous request left off.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of build workflows to return in a single response. Valid range is 1-100.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Provides a summary of a policy build workflow, including its current status, timing information, and key identifiers.</p>
 * @public
 */
export interface AutomatedReasoningPolicyBuildWorkflowSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy associated with this build workflow.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The unique identifier of the build workflow.</p>
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * <p>The current status of the build workflow (e.g., RUNNING, COMPLETED, FAILED, CANCELLED).</p>
   * @public
   */
  status: AutomatedReasoningPolicyBuildWorkflowStatus | undefined;

  /**
   * <p>The type of build workflow (e.g., DOCUMENT_INGESTION, POLICY_REPAIR).</p>
   * @public
   */
  buildWorkflowType: AutomatedReasoningPolicyBuildWorkflowType | undefined;

  /**
   * <p>The timestamp when the build workflow was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the build workflow was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAutomatedReasoningPolicyBuildWorkflowsResponse {
  /**
   * <p>A list of build workflow summaries, each containing key information about a build workflow including its status and timestamps.</p>
   * @public
   */
  automatedReasoningPolicyBuildWorkflowSummaries: AutomatedReasoningPolicyBuildWorkflowSummary[] | undefined;

  /**
   * <p>A pagination token to use in subsequent requests to retrieve additional build workflows.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomatedReasoningPolicyTestCasesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy for which to list tests.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of tests to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAutomatedReasoningPolicyTestCasesResponse {
  /**
   * <p>A list of tests for the specified policy.</p>
   * @public
   */
  testCases: AutomatedReasoningPolicyTestCase[] | undefined;

  /**
   * <p>The pagination token to use in a subsequent request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAutomatedReasoningPolicyTestResultsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy whose test results you want to list.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The unique identifier of the build workflow whose test results you want to list.</p>
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * <p>A pagination token from a previous request to continue listing test results from where the previous request left off.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of test results to return in a single response. Valid range is 1-100.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAutomatedReasoningPolicyTestResultsResponse {
  /**
   * <p>A list of test results, each containing information about how the policy performed on specific test scenarios.</p>
   * @public
   */
  testResults: AutomatedReasoningPolicyTestResult[] | undefined;

  /**
   * <p>A pagination token to use in subsequent requests to retrieve additional test results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents a source document used in the policy build workflow, containing the content and metadata needed for policy generation.</p>
 * @public
 */
export interface AutomatedReasoningPolicyBuildWorkflowDocument {
  /**
   * <p>The actual content of the source document that will be analyzed to extract policy rules and concepts.</p>
   * @public
   */
  document: Uint8Array | undefined;

  /**
   * <p>The MIME type of the document content (e.g., text/plain, application/pdf, text/markdown).</p>
   * @public
   */
  documentContentType: AutomatedReasoningPolicyBuildDocumentContentType | undefined;

  /**
   * <p>A descriptive name for the document that helps identify its purpose and content.</p>
   * @public
   */
  documentName: string | undefined;

  /**
   * <p>A detailed description of the document's content and how it should be used in the policy generation process.</p>
   * @public
   */
  documentDescription?: string | undefined;
}

/**
 * <p>Contains content and instructions for repairing or improving an existing Automated Reasoning policy.</p>
 * @public
 */
export interface AutomatedReasoningPolicyBuildWorkflowRepairContent {
  /**
   * <p>Specific annotations or modifications to apply during the policy repair process, such as rule corrections or variable updates.</p>
   * @public
   */
  annotations: AutomatedReasoningPolicyAnnotation[] | undefined;
}

/**
 * <p>Defines the content and configuration for different types of policy build workflows.</p>
 * @public
 */
export type AutomatedReasoningPolicyWorkflowTypeContent =
  | AutomatedReasoningPolicyWorkflowTypeContent.DocumentsMember
  | AutomatedReasoningPolicyWorkflowTypeContent.PolicyRepairAssetsMember
  | AutomatedReasoningPolicyWorkflowTypeContent.$UnknownMember;

/**
 * @public
 */
export namespace AutomatedReasoningPolicyWorkflowTypeContent {
  /**
   * <p>The list of documents to be processed in a document ingestion workflow.</p>
   * @public
   */
  export interface DocumentsMember {
    documents: AutomatedReasoningPolicyBuildWorkflowDocument[];
    policyRepairAssets?: never;
    $unknown?: never;
  }

  /**
   * <p>The assets and instructions needed for a policy repair workflow, including repair annotations and guidance.</p>
   * @public
   */
  export interface PolicyRepairAssetsMember {
    documents?: never;
    policyRepairAssets: AutomatedReasoningPolicyBuildWorkflowRepairContent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    documents?: never;
    policyRepairAssets?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    documents: (value: AutomatedReasoningPolicyBuildWorkflowDocument[]) => T;
    policyRepairAssets: (value: AutomatedReasoningPolicyBuildWorkflowRepairContent) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AutomatedReasoningPolicyWorkflowTypeContent, visitor: Visitor<T>): T => {
    if (value.documents !== undefined) return visitor.documents(value.documents);
    if (value.policyRepairAssets !== undefined) return visitor.policyRepairAssets(value.policyRepairAssets);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Defines the source content for a policy build workflow, which can include documents, repair instructions, or other input materials.</p>
 * @public
 */
export interface AutomatedReasoningPolicyBuildWorkflowSource {
  /**
   * <p>Contains the formal logic rules, variables, and custom variable types that define an Automated Reasoning policy. The policy definition specifies the constraints used to validate foundation model responses for accuracy and logical consistency.</p>
   * @public
   */
  policyDefinition?: AutomatedReasoningPolicyDefinition | undefined;

  /**
   * <p>The actual content to be processed in the build workflow, such as documents to analyze or repair instructions to apply.</p>
   * @public
   */
  workflowContent?: AutomatedReasoningPolicyWorkflowTypeContent | undefined;
}

/**
 * @public
 */
export interface StartAutomatedReasoningPolicyBuildWorkflowRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy for which to start the build workflow.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The type of build workflow to start (e.g., DOCUMENT_INGESTION for processing new documents, POLICY_REPAIR for fixing existing policies).</p>
   * @public
   */
  buildWorkflowType: AutomatedReasoningPolicyBuildWorkflowType | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than once. If this token matches a previous request, Amazon Bedrock ignores the request but doesn't return an error.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The source content for the build workflow, such as documents to analyze or repair instructions for existing policies.</p>
   * @public
   */
  sourceContent: AutomatedReasoningPolicyBuildWorkflowSource | undefined;
}

/**
 * @public
 */
export interface StartAutomatedReasoningPolicyBuildWorkflowResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The unique identifier of the newly started build workflow. Use this ID to track the workflow's progress and retrieve its results.</p>
   * @public
   */
  buildWorkflowId: string | undefined;
}

/**
 * @public
 */
export interface StartAutomatedReasoningPolicyTestWorkflowRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy to test.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The build workflow identifier. The build workflow must show a <code>COMPLETED</code> status before running tests.</p>
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * <p>The list of test identifiers to run. If not provided, all tests for the policy are run.</p>
   * @public
   */
  testCaseIds?: string[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request but doesn't return an error.</p>
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface StartAutomatedReasoningPolicyTestWorkflowResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the policy for which the test workflow was started.</p>
   * @public
   */
  policyArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateAutomatedReasoningPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy to update. This must be the ARN of a draft policy.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The updated policy definition containing the formal logic rules, variables, and types.</p>
   * @public
   */
  policyDefinition: AutomatedReasoningPolicyDefinition | undefined;

  /**
   * <p>The updated name for the Automated Reasoning policy.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated description for the Automated Reasoning policy.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAutomatedReasoningPolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated policy.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The updated name of the policy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The hash of the updated policy definition.</p>
   * @public
   */
  definitionHash: string | undefined;

  /**
   * <p>The timestamp when the policy was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateAutomatedReasoningPolicyAnnotationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy whose annotations you want to update.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The unique identifier of the build workflow whose annotations you want to update.</p>
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * <p>The updated annotations containing modified rules, variables, and types for the policy.</p>
   * @public
   */
  annotations: AutomatedReasoningPolicyAnnotation[] | undefined;

  /**
   * <p>The hash value of the annotation set that you're updating. This is used for optimistic concurrency control to prevent conflicting updates.</p>
   * @public
   */
  lastUpdatedAnnotationSetHash: string | undefined;
}

/**
 * @public
 */
export interface UpdateAutomatedReasoningPolicyAnnotationsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The unique identifier of the build workflow.</p>
   * @public
   */
  buildWorkflowId: string | undefined;

  /**
   * <p>The new hash value representing the updated state of the annotations.</p>
   * @public
   */
  annotationSetHash: string | undefined;

  /**
   * <p>The timestamp when the annotations were updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateAutomatedReasoningPolicyTestCaseRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Automated Reasoning policy that contains the test.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The unique identifier of the test to update.</p>
   * @public
   */
  testCaseId: string | undefined;

  /**
   * <p>The updated content to be validated by the Automated Reasoning policy.</p>
   * @public
   */
  guardContent: string | undefined;

  /**
   * <p>The updated input query or prompt that generated the content.</p>
   * @public
   */
  queryContent?: string | undefined;

  /**
   * <p>The timestamp when the test was last updated. This is used as a concurrency token to prevent conflicting modifications.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The updated expected result of the Automated Reasoning check.</p>
   * @public
   */
  expectedAggregatedFindingsResult: AutomatedReasoningCheckResult | undefined;

  /**
   * <p>The updated minimum confidence level for logic validation. If null is provided, the threshold will be removed.</p>
   * @public
   */
  confidenceThreshold?: number | undefined;

  /**
   * <p>The KMS key ARN for encrypting the test at rest. If not provided, the key will not be updated. Use <code>DISCARD</code> to remove the key.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error.</p>
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAutomatedReasoningPolicyTestCaseResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the policy that contains the updated test.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The unique identifier of the updated test.</p>
   * @public
   */
  testCaseId: string | undefined;
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
   * <p>The number of Amazon EC2 compute instances to deploy for initial endpoint creation.</p>
   * @public
   */
  initialInstanceCount: number | undefined;

  /**
   * <p>The Amazon EC2 compute instance type to deploy for hosting the model.</p>
   * @public
   */
  instanceType: string | undefined;

  /**
   * <p>The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and docker image for deployment on Amazon EC2 compute instances or for batch transform jobs.</p>
   * @public
   */
  executionRole: string | undefined;

  /**
   * <p>The Amazon Web Services KMS key that Amazon SageMaker uses to encrypt data on the storage volume attached to the Amazon EC2 compute instance that hosts the endpoint.</p>
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
 * @public
 */
export interface CreateMarketplaceModelEndpointRequest {
  /**
   * <p>The ARN of the model from Amazon Bedrock Marketplace that you want to deploy to the endpoint.</p>
   * @public
   */
  modelSourceIdentifier: string | undefined;

  /**
   * <p>The configuration for the endpoint, including the number and type of instances to use.</p>
   * @public
   */
  endpointConfig: EndpointConfig | undefined;

  /**
   * <p>Indicates whether you accept the end-user license agreement (EULA) for the model. Set to <code>true</code> to accept the EULA.</p>
   * @public
   */
  acceptEula?: boolean | undefined;

  /**
   * <p>The name of the endpoint. This name must be unique within your Amazon Web Services account and region.</p>
   * @public
   */
  endpointName: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This token is listed as not required because Amazon Web Services SDKs automatically generate it for you and set this parameter. If you're not using the Amazon Web Services SDK or the CLI, you must provide this token or the action will fail.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>An array of key-value pairs to apply to the underlying Amazon SageMaker endpoint. You can use these tags to organize and identify your Amazon Web Services resources.</p>
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
   * <p>The overall status of the endpoint in Amazon Bedrock Marketplace (e.g., ACTIVE, INACTIVE).</p>
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
   * <p>The configuration of the endpoint, including the number and type of instances used.</p>
   * @public
   */
  endpointConfig: EndpointConfig | undefined;

  /**
   * <p>The current status of the endpoint (e.g., Creating, InService, Updating, Failed).</p>
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
   * <p>The Amazon Resource Name (ARN) of the endpoint you want to get information about.</p>
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
   * <p>The maximum number of results to return in a single call. If more results are available, the operation returns a <code>NextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous <code>ListMarketplaceModelEndpoints</code> call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>If specified, only endpoints for the given model source identifier are returned.</p>
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
   * <p>The token for the next set of results. Use this token to get the next set of results.</p>
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
   * <p>The new configuration for the endpoint, including the number and type of instances to use.</p>
   * @public
   */
  endpointConfig: EndpointConfig | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This token is listed as not required because Amazon Web Services SDKs automatically generate it for you and set this parameter. If you're not using the Amazon Web Services SDK or the CLI, you must provide this token or the action will fail.</p>
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
export interface CreateCustomModelDeploymentRequest {
  /**
   * <p>The name for the custom model deployment. The name must be unique within your Amazon Web Services account and Region.</p>
   * @public
   */
  modelDeploymentName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom model to deploy for on-demand inference. The custom model must be in the <code>Active</code> state.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>A description for the custom model deployment to help you identify its purpose.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Tags to assign to the custom model deployment. You can use tags to organize and track your Amazon Web Services resources for cost allocation and management purposes.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateCustomModelDeploymentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom model deployment. Use this ARN as the <code>modelId</code> parameter when invoking the model with the <code>InvokeModel</code> or <code>Converse</code> operations.</p>
   * @public
   */
  customModelDeploymentArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomModelDeploymentRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or name of the custom model deployment to delete.</p>
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
   * <p>The Amazon Resource Name (ARN) or name of the custom model deployment to retrieve information about.</p>
   * @public
   */
  customModelDeploymentIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CustomModelDeploymentStatus = {
  ACTIVE: "Active",
  CREATING: "Creating",
  FAILED: "Failed",
} as const;

/**
 * @public
 */
export type CustomModelDeploymentStatus =
  (typeof CustomModelDeploymentStatus)[keyof typeof CustomModelDeploymentStatus];

/**
 * @public
 */
export interface GetCustomModelDeploymentResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom model deployment.</p>
   * @public
   */
  customModelDeploymentArn: string | undefined;

  /**
   * <p>The name of the custom model deployment.</p>
   * @public
   */
  modelDeploymentName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom model associated with this deployment.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>The date and time when the custom model deployment was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The status of the custom model deployment. Possible values are:</p> <ul> <li> <p> <code>CREATING</code> - The deployment is being set up and prepared for inference.</p> </li> <li> <p> <code>ACTIVE</code> - The deployment is ready and available for inference requests.</p> </li> <li> <p> <code>FAILED</code> - The deployment failed to be created or became unavailable.</p> </li> </ul>
   * @public
   */
  status: CustomModelDeploymentStatus | undefined;

  /**
   * <p>The description of the custom model deployment.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>If the deployment status is <code>FAILED</code>, this field contains a message describing the failure reason.</p>
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * <p>The date and time when the custom model deployment was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
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
export interface ListCustomModelDeploymentsRequest {
  /**
   * <p>Filters deployments created before the specified date and time.</p>
   * @public
   */
  createdBefore?: Date | undefined;

  /**
   * <p>Filters deployments created after the specified date and time.</p>
   * @public
   */
  createdAfter?: Date | undefined;

  /**
   * <p>Filters deployments whose names contain the specified string. </p>
   * @public
   */
  nameContains?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use this token to retrieve additional results when the response is truncated.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The field to sort the results by. The only supported value is <code>CreationTime</code>.</p>
   * @public
   */
  sortBy?: SortModelsBy | undefined;

  /**
   * <p>The sort order for the results. Valid values are <code>Ascending</code> and <code>Descending</code>. Default is <code>Descending</code>.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>Filters deployments by status. Valid values are <code>CREATING</code>, <code>ACTIVE</code>, and <code>FAILED</code>.</p>
   * @public
   */
  statusEquals?: CustomModelDeploymentStatus | undefined;

  /**
   * <p>Filters deployments by the Amazon Resource Name (ARN) of the associated custom model.</p>
   * @public
   */
  modelArnEquals?: string | undefined;
}

/**
 * <p>Contains summary information about a custom model deployment, including its ARN, name, status, and associated custom model.</p>
 * @public
 */
export interface CustomModelDeploymentSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom model deployment.</p>
   * @public
   */
  customModelDeploymentArn: string | undefined;

  /**
   * <p>The name of the custom model deployment.</p>
   * @public
   */
  customModelDeploymentName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom model associated with this deployment.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>The date and time when the custom model deployment was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The status of the custom model deployment. Possible values are <code>CREATING</code>, <code>ACTIVE</code>, and <code>FAILED</code>.</p>
   * @public
   */
  status: CustomModelDeploymentStatus | undefined;

  /**
   * <p>The date and time when the custom model deployment was last modified.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>If the deployment status is <code>FAILED</code>, this field contains a message describing the failure reason.</p>
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomModelDeploymentsResponse {
  /**
   * <p>The token for the next set of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of custom model deployment summaries.</p>
   * @public
   */
  modelDeploymentSummaries?: CustomModelDeploymentSummary[] | undefined;
}

/**
 * <p>The Amazon S3 data source of the model to import. </p>
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
 * <p>The data source of the model to import.</p>
 * @public
 */
export type ModelDataSource = ModelDataSource.S3DataSourceMember | ModelDataSource.$UnknownMember;

/**
 * @public
 */
export namespace ModelDataSource {
  /**
   * <p>The Amazon S3 data source of the model to import.</p>
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
export interface CreateCustomModelRequest {
  /**
   * <p>A unique name for the custom model.</p>
   * @public
   */
  modelName: string | undefined;

  /**
   * <p>The data source for the model. The Amazon S3 URI in the model source must be for the Amazon-managed Amazon S3 bucket containing your model artifacts.</p>
   * @public
   */
  modelSourceConfig: ModelDataSource | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer managed KMS key to encrypt the custom model. If you don't provide a KMS key, Amazon Bedrock uses an Amazon Web Services-managed KMS key to encrypt the model. </p> <p>If you provide a customer managed KMS key, your Amazon Bedrock service role must have permissions to use it. For more information see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/encryption-import-model.html">Encryption of imported models</a>. </p>
   * @public
   */
  modelKmsKeyArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM service role that Amazon Bedrock assumes to perform tasks on your behalf. This role must have permissions to access the Amazon S3 bucket containing your model artifacts and the KMS key (if specified). For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-import-iam-role.html">Setting up an IAM service role for importing models</a> in the Amazon Bedrock User Guide.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>A list of key-value pairs to associate with the custom model resource. You can use these tags to organize and identify your resources.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tagging.html">Tagging resources</a> in the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Amazon Bedrock User Guide</a>.</p>
   * @public
   */
  modelTags?: Tag[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateCustomModelResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the new custom model.</p>
   * @public
   */
  modelArn: string | undefined;
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
   * <p>The Distillation configuration for the custom model.</p>
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
  IMPORTED: "IMPORTED",
} as const;

/**
 * @public
 */
export type CustomizationType = (typeof CustomizationType)[keyof typeof CustomizationType];

/**
 * @public
 * @enum
 */
export const ModelStatus = {
  ACTIVE: "Active",
  CREATING: "Creating",
  FAILED: "Failed",
} as const;

/**
 * @public
 */
export type ModelStatus = (typeof ModelStatus)[keyof typeof ModelStatus];

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
 * <p>Rules for filtering invocation logs. A filter can be a mapping of a metadata key to a value that it should or should not equal (a base filter), or a list of base filters that are all applied with <code>AND</code> or <code>OR</code> logical operators</p>
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
   * <p>Job Amazon Resource Name (ARN) associated with this model. For models that you create with the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateCustomModel.html">CreateCustomModel</a> API operation, this is <code>NULL</code>.</p>
   * @public
   */
  jobArn?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the base model.</p>
   * @public
   */
  baseModelArn?: string | undefined;

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
  trainingDataConfig?: TrainingDataConfig | undefined;

  /**
   * <p>Contains information about the validation dataset.</p>
   * @public
   */
  validationDataConfig?: ValidationDataConfig | undefined;

  /**
   * <p>Output data configuration associated with this custom model.</p>
   * @public
   */
  outputDataConfig?: OutputDataConfig | undefined;

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

  /**
   * <p>The current status of the custom model. Possible values include:</p> <ul> <li> <p> <code>Creating</code> - The model is being created and validated.</p> </li> <li> <p> <code>Active</code> - The model has been successfully created and is ready for use.</p> </li> <li> <p> <code>Failed</code> - The model creation process failed. Check the <code>failureMessage</code> field for details.</p> </li> </ul>
   * @public
   */
  modelStatus?: ModelStatus | undefined;

  /**
   * <p>A failure message for any issues that occurred when creating the custom model. This is included for only a failed CreateCustomModel operation.</p>
   * @public
   */
  failureMessage?: string | undefined;
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

  /**
   * <p>The status of them model to filter results by. Possible values include:</p> <ul> <li> <p> <code>Creating</code> - Include only models that are currently being created and validated.</p> </li> <li> <p> <code>Active</code> - Include only models that have been successfully created and are ready for use.</p> </li> <li> <p> <code>Failed</code> - Include only models where the creation process failed.</p> </li> </ul> <p>If you don't specify a status, the API returns models in all states.</p>
   * @public
   */
  modelStatus?: ModelStatus | undefined;
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

  /**
   * <p>The current status of the custom model. Possible values include:</p> <ul> <li> <p> <code>Creating</code> - The model is being created and validated.</p> </li> <li> <p> <code>Active</code> - The model has been successfully created and is ready for use.</p> </li> <li> <p> <code>Failed</code> - The model creation process failed.</p> </li> </ul>
   * @public
   */
  modelStatus?: ModelStatus | undefined;
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
 * <p>Defines the value for one rating in a custom metric rating scale.</p>
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
   * <p>A string representing the value for a rating in a custom metric rating scale.</p>
   * @public
   */
  export interface StringValueMember {
    stringValue: string;
    floatValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A floating point number representing the value for a rating in a custom metric rating scale.</p>
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

  export interface Visitor<T> {
    stringValue: (value: string) => T;
    floatValue: (value: number) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RatingScaleItemValue, visitor: Visitor<T>): T => {
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.floatValue !== undefined) return visitor.floatValue(value.floatValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Defines the value and corresponding definition for one rating in a custom metric rating scale.</p>
 * @public
 */
export interface RatingScaleItem {
  /**
   * <p>Defines the definition for one rating in a custom metric rating scale.</p>
   * @public
   */
  definition: string | undefined;

  /**
   * <p>Defines the value for one rating in a custom metric rating scale.</p>
   * @public
   */
  value: RatingScaleItemValue | undefined;
}

/**
 * <p>The definition of a custom metric for use in an Amazon Bedrock evaluation job. A custom metric definition includes a metric name, prompt (instructions) and optionally, a rating scale. Your prompt must include a task description and input variables. The required input variables are different for model-as-a-judge and RAG evaluations.</p> <p>For more information about how to define a custom metric in Amazon Bedrock, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-custom-metrics-prompt-formats.html">Create a prompt for a custom metrics (LLM-as-a-judge model evaluations)</a> and <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-evaluation-custom-metrics-prompt-formats.html">Create a prompt for a custom metrics (RAG evaluations)</a>.</p>
 * @public
 */
export interface CustomMetricDefinition {
  /**
   * <p>The name for a custom metric. Names must be unique in your Amazon Web Services region.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The prompt for a custom metric that instructs the evaluator model how to rate the model or RAG source under evaluation.</p>
   * @public
   */
  instructions: string | undefined;

  /**
   * <p>Defines the rating scale to be used for a custom metric. We recommend that you always define a ratings scale when creating a custom metric. If you don't define a scale, Amazon Bedrock won't be able to visually display the results of the evaluation in the console or calculate average values of numerical scores. For more information on specifying a rating scale, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-custom-metrics-prompt-formats.html#model-evaluation-custom-metrics-prompt-formats-schema">Specifying an output schema (rating scale)</a>.</p>
   * @public
   */
  ratingScale?: RatingScaleItem[] | undefined;
}

/**
 * <p>An array item definining a single custom metric for use in an Amazon Bedrock evaluation job.</p>
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
   * <p>The definition of a custom metric for use in an Amazon Bedrock evaluation job.</p>
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

  export interface Visitor<T> {
    customMetricDefinition: (value: CustomMetricDefinition) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AutomatedEvaluationCustomMetricSource, visitor: Visitor<T>): T => {
    if (value.customMetricDefinition !== undefined) return visitor.customMetricDefinition(value.customMetricDefinition);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Defines the model you want to evaluate custom metrics in an Amazon Bedrock evaluation job.</p>
 * @public
 */
export interface CustomMetricBedrockEvaluatorModel {
  /**
   * <p>The Amazon Resource Name (ARN) of the evaluator model for custom metrics. For a list of supported evaluator models, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation-judge.html">Evaluate model performance using another LLM as a judge</a> and <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation-kb.html">Evaluate the performance of RAG sources using Amazon Bedrock evaluations</a>.</p>
   * @public
   */
  modelIdentifier: string | undefined;
}

/**
 * <p>Configuration of the evaluator model you want to use to evaluate custom metrics in an Amazon Bedrock evaluation job.</p>
 * @public
 */
export interface CustomMetricEvaluatorModelConfig {
  /**
   * <p>Defines the model you want to evaluate custom metrics in an Amazon Bedrock evaluation job.</p>
   * @public
   */
  bedrockEvaluatorModels: CustomMetricBedrockEvaluatorModel[] | undefined;
}

/**
 * <p>Defines the configuration of custom metrics to be used in an evaluation job. To learn more about using custom metrics in Amazon Bedrock evaluation jobs, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-custom-metrics-prompt-formats.html">Create a prompt for a custom metrics (LLM-as-a-judge model evaluations)</a> and <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-evaluation-custom-metrics-prompt-formats.html">Create a prompt for a custom metrics (RAG evaluations)</a>.</p>
 * @public
 */
export interface AutomatedEvaluationCustomMetricConfig {
  /**
   * <p>Defines a list of custom metrics to be used in an Amazon Bedrock evaluation job.</p>
   * @public
   */
  customMetrics: AutomatedEvaluationCustomMetricSource[] | undefined;

  /**
   * <p>Configuration of the evaluator model you want to use to evaluate custom metrics in an Amazon Bedrock evaluation job.</p>
   * @public
   */
  evaluatorModelConfig: CustomMetricEvaluatorModelConfig | undefined;
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
 * <p>Defines the prompt datasets, built-in metric names and custom metric names, and the task type.</p>
 * @public
 */
export interface EvaluationDatasetMetricConfig {
  /**
   * <p>The the type of task you want to evaluate for your evaluation job. This applies only to model evaluation jobs and is ignored for knowledge base evaluation jobs.</p>
   * @public
   */
  taskType: EvaluationTaskType | undefined;

  /**
   * <p>Specifies the prompt dataset.</p>
   * @public
   */
  dataset: EvaluationDataset | undefined;

  /**
   * <p>The names of the metrics you want to use for your evaluation job.</p> <p>For knowledge base evaluation jobs that evaluate retrieval only, valid values are "<code>Builtin.ContextRelevance</code>", "<code>Builtin.ContextCoverage</code>".</p> <p>For knowledge base evaluation jobs that evaluate retrieval with response generation, valid values are "<code>Builtin.Correctness</code>", "<code>Builtin.Completeness</code>", "<code>Builtin.Helpfulness</code>", "<code>Builtin.LogicalCoherence</code>", "<code>Builtin.Faithfulness</code>", "<code>Builtin.Harmfulness</code>", "<code>Builtin.Stereotyping</code>", "<code>Builtin.Refusal</code>".</p> <p>For automated model evaluation jobs, valid values are "<code>Builtin.Accuracy</code>", "<code>Builtin.Robustness</code>", and "<code>Builtin.Toxicity</code>". In model evaluation jobs that use a LLM as judge you can specify "<code>Builtin.Correctness</code>", "<code>Builtin.Completeness"</code>, "<code>Builtin.Faithfulness"</code>, "<code>Builtin.Helpfulness</code>", "<code>Builtin.Coherence</code>", "<code>Builtin.Relevance</code>", "<code>Builtin.FollowingInstructions</code>", "<code>Builtin.ProfessionalStyleAndTone</code>", You can also specify the following responsible AI related metrics only for model evaluation job that use a LLM as judge "<code>Builtin.Harmfulness</code>", "<code>Builtin.Stereotyping</code>", and "<code>Builtin.Refusal</code>".</p> <p>For human-based model evaluation jobs, the list of strings must match the <code>name</code> parameter specified in <code>HumanEvaluationCustomMetric</code>.</p>
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
 * <p>The configuration details of an automated evaluation job. The <code>EvaluationDatasetMetricConfig</code> object is used to specify the prompt datasets, task type, and metric names.</p>
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

  /**
   * <p>Defines the configuration of custom metrics to be used in an evaluation job.</p>
   * @public
   */
  customMetricConfig?: AutomatedEvaluationCustomMetricConfig | undefined;
}

/**
 * <p>In a model evaluation job that uses human workers you must define the name of the metric, and how you want that metric rated <code>ratingMethod</code>, and an optional description of the metric.</p>
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
   * <p>Choose how you want your human workers to evaluation your model. Valid values for rating methods are <code>ThumbsUpDown</code>, <code>IndividualLikertScale</code>,<code>ComparisonLikertScale</code>, <code>ComparisonChoice</code>, and <code>ComparisonRank</code> </p>
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
 * <p>Specifies the custom metrics, how tasks will be rated, the flow definition ARN, and your custom prompt datasets. Model evaluation jobs use human workers <i>only</i> support the use of custom prompt datasets. To learn more about custom prompt datasets and the required format, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-prompt-datasets-custom.html">Custom prompt datasets</a>.</p> <p>When you create custom metrics in <code>HumanEvaluationCustomMetric</code> you must specify the metric's <code>name</code>. The list of <code>names</code> specified in the <code>HumanEvaluationCustomMetric</code> array, must match the <code>metricNames</code> array of strings specified in <code>EvaluationDatasetMetricConfig</code>. For example, if in the <code>HumanEvaluationCustomMetric</code> array your specified the names <code>"accuracy", "toxicity", "readability"</code> as custom metrics <i>then</i> the <code>metricNames</code> array would need to look like the following <code>["accuracy", "toxicity", "readability"]</code> in <code>EvaluationDatasetMetricConfig</code>.</p>
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
 * <p>Contains the ARN of the Amazon Bedrock model or <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">inference profile</a> specified in your evaluation job. Each Amazon Bedrock model supports different <code>inferenceParams</code>. To learn more about supported inference parameters for Amazon Bedrock models, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters for foundation models</a>.</p> <p>The <code>inferenceParams</code> are specified using JSON. To successfully insert JSON as string make sure that all quotations are properly escaped. For example, <code>"temperature":"0.25"</code> key value pair would need to be formatted as <code>\"temperature\":\"0.25\"</code> to successfully accepted in the request.</p>
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
 * <p>The configuration details for text generation using a language model via the <code>RetrieveAndGenerate</code> function.</p>
 * @public
 */
export interface TextInferenceConfig {
  /**
   * <p>Controls the random-ness of text generated by the language model, influencing how much the model sticks to the most predictable next words versus exploring more surprising options. A lower temperature value (e.g. 0.2 or 0.3) makes model outputs more deterministic or predictable, while a higher temperature (e.g. 0.8 or 0.9) makes the outputs more creative or unpredictable.</p>
   * @public
   */
  temperature?: number | undefined;

  /**
   * <p>A probability distribution threshold which controls what the model considers for the set of possible next tokens. The model will only consider the top p% of the probability distribution when generating the next token.</p>
   * @public
   */
  topP?: number | undefined;

  /**
   * <p>The maximum number of tokens to generate in the output text. Do not use the minimum of 0 or the maximum of 65536. The limit values described here are arbitrary values, for actual values consult the limits defined by your specific model.</p>
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * <p>A list of sequences of characters that, if generated, will cause the model to stop generating further tokens. Do not use a minimum length of 1 or a maximum length of 1000. The limit values described here are arbitrary values, for actual values consult the limits defined by your specific model.</p>
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
   * <p>Contains configuration details for text generation using a language model via the <code>RetrieveAndGenerate</code> function.</p>
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
   * <p>The template for the prompt that's sent to the model for response generation. You can include prompt placeholders, which become replaced before the prompt is sent to the model to provide instructions and context to the model. In addition, you can include XML tags to delineate meaningful sections of the prompt template.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Knowledge base prompt template</a> and <a href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags">Use XML tags with Anthropic Claude models</a>.</p>
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
   * <p>Configuration details for inference when using <code>RetrieveAndGenerate</code> to generate responses while using an external source.</p>
   * @public
   */
  kbInferenceConfig?: KbInferenceConfig | undefined;

  /**
   * <p>Additional model parameters and their corresponding values not included in the text inference configuration for an external source. Takes in custom model parameters specific to the language model being used.</p>
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
 * <p>The configuration of the external source wrapper object in the <code>retrieveAndGenerate</code> function.</p>
 * @public
 */
export interface ExternalSourcesRetrieveAndGenerateConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the foundation model or <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">inference profile</a> used to generate responses. </p>
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
   * <p>Additional model parameters and corresponding values not included in the <code>textInferenceConfig</code> structure for a knowledge base. This allows you to provide custom model parameters specific to the language model being used.</p>
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
 * <p>Specifies the name of the metadata attribute/field to apply filters. You must match the name of the attribute/field in your data source/document metadata.</p>
 * @public
 */
export interface FilterAttribute {
  /**
   * <p>The name of metadata attribute/field, which must match the name in your data source/document metadata.</p>
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
export const AttributeType = {
  BOOLEAN: "BOOLEAN",
  NUMBER: "NUMBER",
  STRING: "STRING",
  STRING_LIST: "STRING_LIST",
} as const;

/**
 * @public
 */
export type AttributeType = (typeof AttributeType)[keyof typeof AttributeType];

/**
 * <p>Defines the schema for a metadata attribute used in Knowledge Base vector searches. Metadata attributes provide additional context for documents and can be used for filtering and reranking search results.</p>
 * @public
 */
export interface MetadataAttributeSchema {
  /**
   * <p>The unique identifier for the metadata attribute. This key is used to reference the attribute in filter expressions and reranking configurations.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The data type of the metadata attribute. The type determines how the attribute can be used in filter expressions and reranking.</p>
   * @public
   */
  type: AttributeType | undefined;

  /**
   * <p>An optional description of the metadata attribute that provides additional context about its purpose and usage.</p>
   * @public
   */
  description: string | undefined;
}

/**
 * <p>Configuration for implicit filtering in Knowledge Base vector searches. Implicit filtering allows you to automatically filter search results based on metadata attributes without requiring explicit filter expressions in each query.</p>
 * @public
 */
export interface ImplicitFilterConfiguration {
  /**
   * <p>A list of metadata attribute schemas that define the structure and properties of metadata fields used for implicit filtering. Each attribute defines a key, type, and optional description.</p>
   * @public
   */
  metadataAttributes: MetadataAttributeSchema[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the foundation model used for implicit filtering. This model processes the query to extract relevant filtering criteria.</p>
   * @public
   */
  modelArn: string | undefined;
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
export const RerankingMetadataSelectionMode = {
  ALL: "ALL",
  SELECTIVE: "SELECTIVE",
} as const;

/**
 * @public
 */
export type RerankingMetadataSelectionMode =
  (typeof RerankingMetadataSelectionMode)[keyof typeof RerankingMetadataSelectionMode];

/**
 * <p>Specifies a field to be used during the reranking process in a Knowledge Base vector search. This structure identifies metadata fields that should be considered when reordering search results to improve relevance.</p>
 * @public
 */
export interface FieldForReranking {
  /**
   * <p>The name of the metadata field to be used during the reranking process.</p>
   * @public
   */
  fieldName: string | undefined;
}

/**
 * <p>Configuration for selectively including or excluding metadata fields during the reranking process. This allows you to control which metadata attributes are considered when reordering search results.</p>
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
   * <p>A list of metadata field names to explicitly include in the reranking process. Only these fields will be considered when reordering search results. This parameter cannot be used together with fieldsToExclude.</p>
   * @public
   */
  export interface FieldsToIncludeMember {
    fieldsToInclude: FieldForReranking[];
    fieldsToExclude?: never;
    $unknown?: never;
  }

  /**
   * <p>A list of metadata field names to explicitly exclude from the reranking process. All metadata fields except these will be considered when reordering search results. This parameter cannot be used together with fieldsToInclude.</p>
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

  export interface Visitor<T> {
    fieldsToInclude: (value: FieldForReranking[]) => T;
    fieldsToExclude: (value: FieldForReranking[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RerankingMetadataSelectiveModeConfiguration, visitor: Visitor<T>): T => {
    if (value.fieldsToInclude !== undefined) return visitor.fieldsToInclude(value.fieldsToInclude);
    if (value.fieldsToExclude !== undefined) return visitor.fieldsToExclude(value.fieldsToExclude);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Configuration for how metadata should be used during the reranking process in Knowledge Base vector searches. This determines which metadata fields are included or excluded when reordering search results.</p>
 * @public
 */
export interface MetadataConfigurationForReranking {
  /**
   * <p>The mode for selecting which metadata fields to include in the reranking process. Valid values are ALL (use all available metadata fields) or SELECTIVE (use only specified fields).</p>
   * @public
   */
  selectionMode: RerankingMetadataSelectionMode | undefined;

  /**
   * <p>Configuration for selective mode, which allows you to explicitly include or exclude specific metadata fields during reranking. This is only used when selectionMode is set to SELECTIVE.</p>
   * @public
   */
  selectiveModeConfiguration?: RerankingMetadataSelectiveModeConfiguration | undefined;
}

/**
 * <p>Configuration for the Amazon Bedrock foundation model used for reranking vector search results. This specifies which model to use and any additional parameters required by the model.</p>
 * @public
 */
export interface VectorSearchBedrockRerankingModelConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the foundation model to use for reranking. This model processes the query and search results to determine a more relevant ordering.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>A list of additional fields to include in the model request during reranking. These fields provide extra context or configuration options specific to the selected foundation model.</p>
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;
}

/**
 * <p>Configuration for using Amazon Bedrock foundation models to rerank Knowledge Base vector search results. This enables more sophisticated relevance ranking using large language models.</p>
 * @public
 */
export interface VectorSearchBedrockRerankingConfiguration {
  /**
   * <p>Configuration for the Amazon Bedrock foundation model used for reranking. This includes the model ARN and any additional request fields required by the model.</p>
   * @public
   */
  modelConfiguration: VectorSearchBedrockRerankingModelConfiguration | undefined;

  /**
   * <p>The maximum number of results to rerank. This limits how many of the initial vector search results will be processed by the reranking model. A smaller number improves performance but may exclude potentially relevant results.</p>
   * @public
   */
  numberOfRerankedResults?: number | undefined;

  /**
   * <p>Configuration for how document metadata should be used during the reranking process. This determines which metadata fields are included when reordering search results.</p>
   * @public
   */
  metadataConfiguration?: MetadataConfigurationForReranking | undefined;
}

/**
 * @public
 * @enum
 */
export const VectorSearchRerankingConfigurationType = {
  BEDROCK_RERANKING_MODEL: "BEDROCK_RERANKING_MODEL",
} as const;

/**
 * @public
 */
export type VectorSearchRerankingConfigurationType =
  (typeof VectorSearchRerankingConfigurationType)[keyof typeof VectorSearchRerankingConfigurationType];

/**
 * <p>Configuration for reranking vector search results to improve relevance. Reranking applies additional relevance models to reorder the initial vector search results based on more sophisticated criteria.</p>
 * @public
 */
export interface VectorSearchRerankingConfiguration {
  /**
   * <p>The type of reranking to apply to vector search results. Currently, the only supported value is BEDROCK, which uses Amazon Bedrock foundation models for reranking.</p>
   * @public
   */
  type: VectorSearchRerankingConfigurationType | undefined;

  /**
   * <p>Configuration for using Amazon Bedrock foundation models to rerank search results. This is required when the reranking type is set to BEDROCK.</p>
   * @public
   */
  bedrockRerankingConfiguration?: VectorSearchBedrockRerankingConfiguration | undefined;
}

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
 * <p>The Amazon S3 location where the results of your evaluation job are saved.</p>
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
 * <p>A summary of the models used in an Amazon Bedrock model evaluation job. These resources can be models in Amazon Bedrock or models outside of Amazon Bedrock that you use to generate your own inference response data.</p>
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
 * <p>A summary of the RAG resources used in an Amazon Bedrock Knowledge Base evaluation job. These resources can be Knowledge Bases in Amazon Bedrock or RAG sources outside of Amazon Bedrock that you use to generate your own inference response data.</p>
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
   * <p>A summary of the models used in an Amazon Bedrock model evaluation job. These resources can be models in Amazon Bedrock or models outside of Amazon Bedrock that you use to generate your own inference response data.</p>
   * @public
   */
  modelConfigSummary?: EvaluationModelConfigSummary | undefined;

  /**
   * <p>A summary of the RAG resources used in an Amazon Bedrock Knowledge Base evaluation job. These resources can be Knowledge Bases in Amazon Bedrock or RAG sources outside of Amazon Bedrock that you use to generate your own inference response data.</p>
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
   * <p>The Amazon Resource Names (ARNs) of the models used to compute custom metrics in an Amazon Bedrock evaluation job.</p>
   * @public
   */
  customMetricsEvaluatorModelIdentifiers?: string[] | undefined;

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
 * <p>Configuration settings for integrating Automated Reasoning policies with Amazon Bedrock Guardrails.</p>
 * @public
 */
export interface GuardrailAutomatedReasoningPolicyConfig {
  /**
   * <p>The list of Automated Reasoning policy ARNs to include in the guardrail configuration.</p>
   * @public
   */
  policies: string[] | undefined;

  /**
   * <p>The confidence threshold for triggering guardrail actions based on Automated Reasoning policy violations.</p>
   * @public
   */
  confidenceThreshold?: number | undefined;
}

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
 * <p>Contains filter strengths for harmful content. Guardrails support the following content filters to detect and filter harmful user inputs and FM-generated outputs.</p> <ul> <li> <p> <b>Hate</b> – Describes language or a statement that discriminates, criticizes, insults, denounces, or dehumanizes a person or group on the basis of an identity (such as race, ethnicity, gender, religion, sexual orientation, ability, and national origin).</p> </li> <li> <p> <b>Insults</b> – Describes language or a statement that includes demeaning, humiliating, mocking, insulting, or belittling language. This type of language is also labeled as bullying.</p> </li> <li> <p> <b>Sexual</b> – Describes language or a statement that indicates sexual interest, activity, or arousal using direct or indirect references to body parts, physical traits, or sex.</p> </li> <li> <p> <b>Violence</b> – Describes language or a statement that includes glorification of or threats to inflict physical pain, hurt, or injury toward a person, group or thing.</p> </li> </ul> <p>Content filtering depends on the confidence classification of user inputs and FM responses across each of the four harmful categories. All input and output statements are classified into one of four confidence levels (NONE, LOW, MEDIUM, HIGH) for each harmful category. For example, if a statement is classified as <i>Hate</i> with HIGH confidence, the likelihood of the statement representing hateful content is high. A single statement can be classified across multiple categories with varying confidence levels. For example, a single statement can be classified as <i>Hate</i> with HIGH confidence, <i>Insults</i> with LOW confidence, <i>Sexual</i> with NONE confidence, and <i>Violence</i> with MEDIUM confidence.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-filters.html">Guardrails content filters</a>.</p>
 * @public
 */
export interface GuardrailContentFilterConfig {
  /**
   * <p>The harmful category that the content filter is applied to.</p>
   * @public
   */
  type: GuardrailContentFilterType | undefined;

  /**
   * <p>The strength of the content filter to apply to prompts. As you increase the filter strength, the likelihood of filtering harmful content increases and the probability of seeing harmful content in your application reduces.</p>
   * @public
   */
  inputStrength: GuardrailFilterStrength | undefined;

  /**
   * <p>The strength of the content filter to apply to model responses. As you increase the filter strength, the likelihood of filtering harmful content increases and the probability of seeing harmful content in your application reduces.</p>
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
   * <p>Specifies the action to take when harmful content is detected. Supported values include:</p> <ul> <li> <p> <code>BLOCK</code> – Block the content and replace it with blocked messaging.</p> </li> <li> <p> <code>NONE</code> – Take no action but return detection information in the trace response.</p> </li> </ul>
   * @public
   */
  inputAction?: GuardrailContentFilterAction | undefined;

  /**
   * <p>Specifies the action to take when harmful content is detected in the output. Supported values include:</p> <ul> <li> <p> <code>BLOCK</code> – Block the content and replace it with blocked messaging.</p> </li> <li> <p> <code>NONE</code> – Take no action but return detection information in the trace response.</p> </li> </ul>
   * @public
   */
  outputAction?: GuardrailContentFilterAction | undefined;

  /**
   * <p>Specifies whether to enable guardrail evaluation on the input. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * <p>Specifies whether to enable guardrail evaluation on the output. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  outputEnabled?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailContentFiltersTierName = {
  CLASSIC: "CLASSIC",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type GuardrailContentFiltersTierName =
  (typeof GuardrailContentFiltersTierName)[keyof typeof GuardrailContentFiltersTierName];

/**
 * <p>The tier that your guardrail uses for content filters. Consider using a tier that balances performance, accuracy, and compatibility with your existing generative AI workflows.</p>
 * @public
 */
export interface GuardrailContentFiltersTierConfig {
  /**
   * <p>The tier that your guardrail uses for content filters. Valid values include:</p> <ul> <li> <p> <code>CLASSIC</code> tier – Provides established guardrails functionality supporting English, French, and Spanish languages.</p> </li> <li> <p> <code>STANDARD</code> tier – Provides a more robust solution than the <code>CLASSIC</code> tier and has more comprehensive language support. This tier requires that your guardrail use <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-cross-region.html">cross-Region inference</a>.</p> </li> </ul>
   * @public
   */
  tierName: GuardrailContentFiltersTierName | undefined;
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

  /**
   * <p>The tier that your guardrail uses for content filters.</p>
   * @public
   */
  tierConfig?: GuardrailContentFiltersTierConfig | undefined;
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
   * <p>Specifies the action to take when content fails the contextual grounding evaluation. Supported values include:</p> <ul> <li> <p> <code>BLOCK</code> – Block the content and replace it with blocked messaging.</p> </li> <li> <p> <code>NONE</code> – Take no action but return detection information in the trace response.</p> </li> </ul>
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
 * <p>The system-defined guardrail profile that you're using with your guardrail. Guardrail profiles define the destination Amazon Web Services Regions where guardrail inference requests can be automatically routed. Using guardrail profiles helps maintain guardrail performance and reliability when demand increases.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-cross-region.html">Amazon Bedrock User Guide</a>.</p>
 * @public
 */
export interface GuardrailCrossRegionConfig {
  /**
   * <p>The ID or Amazon Resource Name (ARN) of the guardrail profile that your guardrail is using. Guardrail profile availability depends on your current Amazon Web Services Region. For more information, see the <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-cross-region-support.html">Amazon Bedrock User Guide</a>.</p>
   * @public
   */
  guardrailProfileIdentifier: string | undefined;
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
   * <p>Configure guardrail type when the PII entity is detected.</p> <p>The following PIIs are used to block or mask sensitive information:</p> <ul> <li> <p> <b>General</b> </p> <ul> <li> <p> <b>ADDRESS</b> </p> <p>A physical address, such as "100 Main Street, Anytown, USA" or "Suite #12, Building 123". An address can include information such as the street, building, location, city, state, country, county, zip code, precinct, and neighborhood. </p> </li> <li> <p> <b>AGE</b> </p> <p>An individual's age, including the quantity and unit of time. For example, in the phrase "I am 40 years old," Guardrails recognizes "40 years" as an age. </p> </li> <li> <p> <b>NAME</b> </p> <p>An individual's name. This entity type does not include titles, such as Dr., Mr., Mrs., or Miss. guardrails doesn't apply this entity type to names that are part of organizations or addresses. For example, guardrails recognizes the "John Doe Organization" as an organization, and it recognizes "Jane Doe Street" as an address. </p> </li> <li> <p> <b>EMAIL</b> </p> <p>An email address, such as <i>marymajor@email.com</i>.</p> </li> <li> <p> <b>PHONE</b> </p> <p>A phone number. This entity type also includes fax and pager numbers. </p> </li> <li> <p> <b>USERNAME</b> </p> <p>A user name that identifies an account, such as a login name, screen name, nick name, or handle. </p> </li> <li> <p> <b>PASSWORD</b> </p> <p>An alphanumeric string that is used as a password, such as "*<i>very20special#pass*</i>". </p> </li> <li> <p> <b>DRIVER_ID</b> </p> <p>The number assigned to a driver's license, which is an official document permitting an individual to operate one or more motorized vehicles on a public road. A driver's license number consists of alphanumeric characters. </p> </li> <li> <p> <b>LICENSE_PLATE</b> </p> <p>A license plate for a vehicle is issued by the state or country where the vehicle is registered. The format for passenger vehicles is typically five to eight digits, consisting of upper-case letters and numbers. The format varies depending on the location of the issuing state or country. </p> </li> <li> <p> <b>VEHICLE_IDENTIFICATION_NUMBER</b> </p> <p>A Vehicle Identification Number (VIN) uniquely identifies a vehicle. VIN content and format are defined in the <i>ISO 3779</i> specification. Each country has specific codes and formats for VINs. </p> </li> </ul> </li> <li> <p> <b>Finance</b> </p> <ul> <li> <p> <b>CREDIT_DEBIT_CARD_CVV</b> </p> <p>A three-digit card verification code (CVV) that is present on VISA, MasterCard, and Discover credit and debit cards. For American Express credit or debit cards, the CVV is a four-digit numeric code. </p> </li> <li> <p> <b>CREDIT_DEBIT_CARD_EXPIRY</b> </p> <p>The expiration date for a credit or debit card. This number is usually four digits long and is often formatted as <i>month/year</i> or <i>MM/YY</i>. Guardrails recognizes expiration dates such as <i>01/21</i>, <i>01/2021</i>, and <i>Jan 2021</i>. </p> </li> <li> <p> <b>CREDIT_DEBIT_CARD_NUMBER</b> </p> <p>The number for a credit or debit card. These numbers can vary from 13 to 16 digits in length. However, Amazon Comprehend also recognizes credit or debit card numbers when only the last four digits are present. </p> </li> <li> <p> <b>PIN</b> </p> <p>A four-digit personal identification number (PIN) with which you can access your bank account. </p> </li> <li> <p> <b>INTERNATIONAL_BANK_ACCOUNT_NUMBER</b> </p> <p>An International Bank Account Number has specific formats in each country. For more information, see <a href="https://www.iban.com/structure">www.iban.com/structure</a>.</p> </li> <li> <p> <b>SWIFT_CODE</b> </p> <p>A SWIFT code is a standard format of Bank Identifier Code (BIC) used to specify a particular bank or branch. Banks use these codes for money transfers such as international wire transfers.</p> <p>SWIFT codes consist of eight or 11 characters. The 11-digit codes refer to specific branches, while eight-digit codes (or 11-digit codes ending in 'XXX') refer to the head or primary office.</p> </li> </ul> </li> <li> <p> <b>IT</b> </p> <ul> <li> <p> <b>IP_ADDRESS</b> </p> <p>An IPv4 address, such as <i>198.51.100.0</i>. </p> </li> <li> <p> <b>MAC_ADDRESS</b> </p> <p>A <i>media access control</i> (MAC) address is a unique identifier assigned to a network interface controller (NIC). </p> </li> <li> <p> <b>URL</b> </p> <p>A web address, such as <i>www.example.com</i>. </p> </li> <li> <p> <b>AWS_ACCESS_KEY</b> </p> <p>A unique identifier that's associated with a secret access key; you use the access key ID and secret access key to sign programmatic Amazon Web Services requests cryptographically. </p> </li> <li> <p> <b>AWS_SECRET_KEY</b> </p> <p>A unique identifier that's associated with an access key. You use the access key ID and secret access key to sign programmatic Amazon Web Services requests cryptographically. </p> </li> </ul> </li> <li> <p> <b>USA specific</b> </p> <ul> <li> <p> <b>US_BANK_ACCOUNT_NUMBER</b> </p> <p>A US bank account number, which is typically 10 to 12 digits long. </p> </li> <li> <p> <b>US_BANK_ROUTING_NUMBER</b> </p> <p>A US bank account routing number. These are typically nine digits long, </p> </li> <li> <p> <b>US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER</b> </p> <p>A US Individual Taxpayer Identification Number (ITIN) is a nine-digit number that starts with a "9" and contain a "7" or "8" as the fourth digit. An ITIN can be formatted with a space or a dash after the third and forth digits. </p> </li> <li> <p> <b>US_PASSPORT_NUMBER</b> </p> <p>A US passport number. Passport numbers range from six to nine alphanumeric characters. </p> </li> <li> <p> <b>US_SOCIAL_SECURITY_NUMBER</b> </p> <p>A US Social Security Number (SSN) is a nine-digit number that is issued to US citizens, permanent residents, and temporary working residents. </p> </li> </ul> </li> <li> <p> <b>Canada specific</b> </p> <ul> <li> <p> <b>CA_HEALTH_NUMBER</b> </p> <p>A Canadian Health Service Number is a 10-digit unique identifier, required for individuals to access healthcare benefits. </p> </li> <li> <p> <b>CA_SOCIAL_INSURANCE_NUMBER</b> </p> <p>A Canadian Social Insurance Number (SIN) is a nine-digit unique identifier, required for individuals to access government programs and benefits.</p> <p>The SIN is formatted as three groups of three digits, such as <i>123-456-789</i>. A SIN can be validated through a simple check-digit process called the <a href="https://www.wikipedia.org/wiki/Luhn_algorithm">Luhn algorithm</a>.</p> </li> </ul> </li> <li> <p> <b>UK Specific</b> </p> <ul> <li> <p> <b>UK_NATIONAL_HEALTH_SERVICE_NUMBER</b> </p> <p>A UK National Health Service Number is a 10-17 digit number, such as <i>485 777 3456</i>. The current system formats the 10-digit number with spaces after the third and sixth digits. The final digit is an error-detecting checksum.</p> </li> <li> <p> <b>UK_NATIONAL_INSURANCE_NUMBER</b> </p> <p>A UK National Insurance Number (NINO) provides individuals with access to National Insurance (social security) benefits. It is also used for some purposes in the UK tax system.</p> <p>The number is nine digits long and starts with two letters, followed by six numbers and one letter. A NINO can be formatted with a space or a dash after the two letters and after the second, forth, and sixth digits.</p> </li> <li> <p> <b>UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER</b> </p> <p>A UK Unique Taxpayer Reference (UTR) is a 10-digit number that identifies a taxpayer or a business. </p> </li> </ul> </li> <li> <p> <b>Custom</b> </p> <ul> <li> <p> <b>Regex filter</b> - You can use a regular expressions to define patterns for a guardrail to recognize and act upon such as serial number, booking ID etc..</p> </li> </ul> </li> </ul>
   * @public
   */
  type: GuardrailPiiEntityType | undefined;

  /**
   * <p>Configure guardrail action when the PII entity is detected.</p>
   * @public
   */
  action: GuardrailSensitiveInformationAction | undefined;

  /**
   * <p>Specifies the action to take when harmful content is detected in the input. Supported values include:</p> <ul> <li> <p> <code>BLOCK</code> – Block the content and replace it with blocked messaging.</p> </li> <li> <p> <code>ANONYMIZE</code> – Mask the content and replace it with identifier tags.</p> </li> <li> <p> <code>NONE</code> – Take no action but return detection information in the trace response.</p> </li> </ul>
   * @public
   */
  inputAction?: GuardrailSensitiveInformationAction | undefined;

  /**
   * <p>Specifies the action to take when harmful content is detected in the output. Supported values include:</p> <ul> <li> <p> <code>BLOCK</code> – Block the content and replace it with blocked messaging.</p> </li> <li> <p> <code>ANONYMIZE</code> – Mask the content and replace it with identifier tags.</p> </li> <li> <p> <code>NONE</code> – Take no action but return detection information in the trace response.</p> </li> </ul>
   * @public
   */
  outputAction?: GuardrailSensitiveInformationAction | undefined;

  /**
   * <p>Specifies whether to enable guardrail evaluation on the input. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * <p>Specifies whether to enable guardrail evaluation on the output. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
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
   * <p>Specifies the action to take when harmful content is detected in the input. Supported values include:</p> <ul> <li> <p> <code>BLOCK</code> – Block the content and replace it with blocked messaging.</p> </li> <li> <p> <code>NONE</code> – Take no action but return detection information in the trace response.</p> </li> </ul>
   * @public
   */
  inputAction?: GuardrailSensitiveInformationAction | undefined;

  /**
   * <p>Specifies the action to take when harmful content is detected in the output. Supported values include:</p> <ul> <li> <p> <code>BLOCK</code> – Block the content and replace it with blocked messaging.</p> </li> <li> <p> <code>NONE</code> – Take no action but return detection information in the trace response.</p> </li> </ul>
   * @public
   */
  outputAction?: GuardrailSensitiveInformationAction | undefined;

  /**
   * <p>Specifies whether to enable guardrail evaluation on the input. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * <p>Specifies whether to enable guardrail evaluation on the output. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
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
export const GuardrailTopicsTierName = {
  CLASSIC: "CLASSIC",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type GuardrailTopicsTierName = (typeof GuardrailTopicsTierName)[keyof typeof GuardrailTopicsTierName];

/**
 * <p>The tier that your guardrail uses for denied topic filters. Consider using a tier that balances performance, accuracy, and compatibility with your existing generative AI workflows.</p>
 * @public
 */
export interface GuardrailTopicsTierConfig {
  /**
   * <p>The tier that your guardrail uses for denied topic filters. Valid values include:</p> <ul> <li> <p> <code>CLASSIC</code> tier – Provides established guardrails functionality supporting English, French, and Spanish languages.</p> </li> <li> <p> <code>STANDARD</code> tier – Provides a more robust solution than the <code>CLASSIC</code> tier and has more comprehensive language support. This tier requires that your guardrail use <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-cross-region.html">cross-Region inference</a>.</p> </li> </ul>
   * @public
   */
  tierName: GuardrailTopicsTierName | undefined;
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
   * <p>Specifies the action to take when harmful content is detected in the input. Supported values include:</p> <ul> <li> <p> <code>BLOCK</code> – Block the content and replace it with blocked messaging.</p> </li> <li> <p> <code>NONE</code> – Take no action but return detection information in the trace response.</p> </li> </ul>
   * @public
   */
  inputAction?: GuardrailTopicAction | undefined;

  /**
   * <p>Specifies the action to take when harmful content is detected in the output. Supported values include:</p> <ul> <li> <p> <code>BLOCK</code> – Block the content and replace it with blocked messaging.</p> </li> <li> <p> <code>NONE</code> – Take no action but return detection information in the trace response.</p> </li> </ul>
   * @public
   */
  outputAction?: GuardrailTopicAction | undefined;

  /**
   * <p>Specifies whether to enable guardrail evaluation on the input. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
   * @public
   */
  inputEnabled?: boolean | undefined;

  /**
   * <p>Specifies whether to enable guardrail evaluation on the output. When disabled, you aren't charged for the evaluation. The evaluation doesn't appear in the response.</p>
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

  /**
   * <p>The tier that your guardrail uses for denied topic filters.</p>
   * @public
   */
  tierConfig?: GuardrailTopicsTierConfig | undefined;
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
 * @internal
 */
export const AutomatedReasoningPolicyDefinitionRuleFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyDefinitionRule
): any => ({
  ...obj,
  ...(obj.expression && { expression: SENSITIVE_STRING }),
  ...(obj.alternateExpression && { alternateExpression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyDefinitionTypeValueFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyDefinitionTypeValue
): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyDefinitionTypeFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyDefinitionType
): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.values && {
    values: obj.values.map((item) => AutomatedReasoningPolicyDefinitionTypeValueFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyDefinitionVariableFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyDefinitionVariable
): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.type && { type: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyDefinitionFilterSensitiveLog = (obj: AutomatedReasoningPolicyDefinition): any => ({
  ...obj,
  ...(obj.types && { types: obj.types.map((item) => AutomatedReasoningPolicyDefinitionTypeFilterSensitiveLog(item)) }),
  ...(obj.rules && { rules: obj.rules.map((item) => AutomatedReasoningPolicyDefinitionRuleFilterSensitiveLog(item)) }),
  ...(obj.variables && {
    variables: obj.variables.map((item) => AutomatedReasoningPolicyDefinitionVariableFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateAutomatedReasoningPolicyRequestFilterSensitiveLog = (
  obj: CreateAutomatedReasoningPolicyRequest
): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.policyDefinition && {
    policyDefinition: AutomatedReasoningPolicyDefinitionFilterSensitiveLog(obj.policyDefinition),
  }),
});

/**
 * @internal
 */
export const CreateAutomatedReasoningPolicyResponseFilterSensitiveLog = (
  obj: CreateAutomatedReasoningPolicyResponse
): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAutomatedReasoningPolicyTestCaseRequestFilterSensitiveLog = (
  obj: CreateAutomatedReasoningPolicyTestCaseRequest
): any => ({
  ...obj,
  ...(obj.guardContent && { guardContent: SENSITIVE_STRING }),
  ...(obj.queryContent && { queryContent: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAutomatedReasoningPolicyVersionResponseFilterSensitiveLog = (
  obj: CreateAutomatedReasoningPolicyVersionResponse
): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ExportAutomatedReasoningPolicyVersionResponseFilterSensitiveLog = (
  obj: ExportAutomatedReasoningPolicyVersionResponse
): any => ({
  ...obj,
  ...(obj.policyDefinition && {
    policyDefinition: AutomatedReasoningPolicyDefinitionFilterSensitiveLog(obj.policyDefinition),
  }),
});

/**
 * @internal
 */
export const GetAutomatedReasoningPolicyResponseFilterSensitiveLog = (
  obj: GetAutomatedReasoningPolicyResponse
): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyAddRuleAnnotationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyAddRuleAnnotation
): any => ({
  ...obj,
  ...(obj.expression && { expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyAddRuleFromNaturalLanguageAnnotationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyAddRuleFromNaturalLanguageAnnotation
): any => ({
  ...obj,
  ...(obj.naturalLanguage && { naturalLanguage: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyAddTypeAnnotationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyAddTypeAnnotation
): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.values && {
    values: obj.values.map((item) => AutomatedReasoningPolicyDefinitionTypeValueFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyAddVariableAnnotationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyAddVariableAnnotation
): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.type && { type: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyDeleteTypeAnnotationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyDeleteTypeAnnotation
): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyDeleteVariableAnnotationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyDeleteVariableAnnotation
): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyIngestContentAnnotationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyIngestContentAnnotation
): any => ({
  ...obj,
  ...(obj.content && { content: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyUpdateFromRuleFeedbackAnnotationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyUpdateFromRuleFeedbackAnnotation
): any => ({
  ...obj,
  ...(obj.feedback && { feedback: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyUpdateFromScenarioFeedbackAnnotationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyUpdateFromScenarioFeedbackAnnotation
): any => ({
  ...obj,
  ...(obj.scenarioExpression && { scenarioExpression: SENSITIVE_STRING }),
  ...(obj.feedback && { feedback: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyUpdateRuleAnnotationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyUpdateRuleAnnotation
): any => ({
  ...obj,
  ...(obj.expression && { expression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyAddTypeValueFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyAddTypeValue
): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyUpdateTypeValueFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyUpdateTypeValue
): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyTypeValueAnnotationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyTypeValueAnnotation
): any => {
  if (obj.addTypeValue !== undefined)
    return { addTypeValue: AutomatedReasoningPolicyAddTypeValueFilterSensitiveLog(obj.addTypeValue) };
  if (obj.updateTypeValue !== undefined)
    return { updateTypeValue: AutomatedReasoningPolicyUpdateTypeValueFilterSensitiveLog(obj.updateTypeValue) };
  if (obj.deleteTypeValue !== undefined) return { deleteTypeValue: obj.deleteTypeValue };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const AutomatedReasoningPolicyUpdateTypeAnnotationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyUpdateTypeAnnotation
): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.newName && { newName: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.values && {
    values: obj.values.map((item) => AutomatedReasoningPolicyTypeValueAnnotationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyUpdateVariableAnnotationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyUpdateVariableAnnotation
): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.newName && { newName: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyAnnotationFilterSensitiveLog = (obj: AutomatedReasoningPolicyAnnotation): any => {
  if (obj.addType !== undefined)
    return { addType: AutomatedReasoningPolicyAddTypeAnnotationFilterSensitiveLog(obj.addType) };
  if (obj.updateType !== undefined)
    return { updateType: AutomatedReasoningPolicyUpdateTypeAnnotationFilterSensitiveLog(obj.updateType) };
  if (obj.deleteType !== undefined)
    return { deleteType: AutomatedReasoningPolicyDeleteTypeAnnotationFilterSensitiveLog(obj.deleteType) };
  if (obj.addVariable !== undefined)
    return { addVariable: AutomatedReasoningPolicyAddVariableAnnotationFilterSensitiveLog(obj.addVariable) };
  if (obj.updateVariable !== undefined)
    return { updateVariable: AutomatedReasoningPolicyUpdateVariableAnnotationFilterSensitiveLog(obj.updateVariable) };
  if (obj.deleteVariable !== undefined)
    return { deleteVariable: AutomatedReasoningPolicyDeleteVariableAnnotationFilterSensitiveLog(obj.deleteVariable) };
  if (obj.addRule !== undefined)
    return { addRule: AutomatedReasoningPolicyAddRuleAnnotationFilterSensitiveLog(obj.addRule) };
  if (obj.updateRule !== undefined)
    return { updateRule: AutomatedReasoningPolicyUpdateRuleAnnotationFilterSensitiveLog(obj.updateRule) };
  if (obj.deleteRule !== undefined) return { deleteRule: obj.deleteRule };
  if (obj.addRuleFromNaturalLanguage !== undefined)
    return {
      addRuleFromNaturalLanguage: AutomatedReasoningPolicyAddRuleFromNaturalLanguageAnnotationFilterSensitiveLog(
        obj.addRuleFromNaturalLanguage
      ),
    };
  if (obj.updateFromRulesFeedback !== undefined)
    return {
      updateFromRulesFeedback: AutomatedReasoningPolicyUpdateFromRuleFeedbackAnnotationFilterSensitiveLog(
        obj.updateFromRulesFeedback
      ),
    };
  if (obj.updateFromScenarioFeedback !== undefined)
    return {
      updateFromScenarioFeedback: AutomatedReasoningPolicyUpdateFromScenarioFeedbackAnnotationFilterSensitiveLog(
        obj.updateFromScenarioFeedback
      ),
    };
  if (obj.ingestContent !== undefined)
    return { ingestContent: AutomatedReasoningPolicyIngestContentAnnotationFilterSensitiveLog(obj.ingestContent) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const GetAutomatedReasoningPolicyAnnotationsResponseFilterSensitiveLog = (
  obj: GetAutomatedReasoningPolicyAnnotationsResponse
): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.annotations && {
    annotations: obj.annotations.map((item) => AutomatedReasoningPolicyAnnotationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GetAutomatedReasoningPolicyBuildWorkflowResponseFilterSensitiveLog = (
  obj: GetAutomatedReasoningPolicyBuildWorkflowResponse
): any => ({
  ...obj,
  ...(obj.documentName && { documentName: SENSITIVE_STRING }),
  ...(obj.documentDescription && { documentDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyAddRuleMutationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyAddRuleMutation
): any => ({
  ...obj,
  ...(obj.rule && { rule: AutomatedReasoningPolicyDefinitionRuleFilterSensitiveLog(obj.rule) }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyAddTypeMutationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyAddTypeMutation
): any => ({
  ...obj,
  ...(obj.type && { type: AutomatedReasoningPolicyDefinitionTypeFilterSensitiveLog(obj.type) }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyAddVariableMutationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyAddVariableMutation
): any => ({
  ...obj,
  ...(obj.variable && { variable: AutomatedReasoningPolicyDefinitionVariableFilterSensitiveLog(obj.variable) }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyDeleteTypeMutationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyDeleteTypeMutation
): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyDeleteVariableMutationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyDeleteVariableMutation
): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyUpdateRuleMutationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyUpdateRuleMutation
): any => ({
  ...obj,
  ...(obj.rule && { rule: AutomatedReasoningPolicyDefinitionRuleFilterSensitiveLog(obj.rule) }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyUpdateTypeMutationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyUpdateTypeMutation
): any => ({
  ...obj,
  ...(obj.type && { type: AutomatedReasoningPolicyDefinitionTypeFilterSensitiveLog(obj.type) }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyUpdateVariableMutationFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyUpdateVariableMutation
): any => ({
  ...obj,
  ...(obj.variable && { variable: AutomatedReasoningPolicyDefinitionVariableFilterSensitiveLog(obj.variable) }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyMutationFilterSensitiveLog = (obj: AutomatedReasoningPolicyMutation): any => {
  if (obj.addType !== undefined)
    return { addType: AutomatedReasoningPolicyAddTypeMutationFilterSensitiveLog(obj.addType) };
  if (obj.updateType !== undefined)
    return { updateType: AutomatedReasoningPolicyUpdateTypeMutationFilterSensitiveLog(obj.updateType) };
  if (obj.deleteType !== undefined)
    return { deleteType: AutomatedReasoningPolicyDeleteTypeMutationFilterSensitiveLog(obj.deleteType) };
  if (obj.addVariable !== undefined)
    return { addVariable: AutomatedReasoningPolicyAddVariableMutationFilterSensitiveLog(obj.addVariable) };
  if (obj.updateVariable !== undefined)
    return { updateVariable: AutomatedReasoningPolicyUpdateVariableMutationFilterSensitiveLog(obj.updateVariable) };
  if (obj.deleteVariable !== undefined)
    return { deleteVariable: AutomatedReasoningPolicyDeleteVariableMutationFilterSensitiveLog(obj.deleteVariable) };
  if (obj.addRule !== undefined)
    return { addRule: AutomatedReasoningPolicyAddRuleMutationFilterSensitiveLog(obj.addRule) };
  if (obj.updateRule !== undefined)
    return { updateRule: AutomatedReasoningPolicyUpdateRuleMutationFilterSensitiveLog(obj.updateRule) };
  if (obj.deleteRule !== undefined) return { deleteRule: obj.deleteRule };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const AutomatedReasoningPolicyBuildStepContextFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyBuildStepContext
): any => {
  if (obj.planning !== undefined) return { planning: obj.planning };
  if (obj.mutation !== undefined) return { mutation: AutomatedReasoningPolicyMutationFilterSensitiveLog(obj.mutation) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const AutomatedReasoningPolicyDefinitionElementFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyDefinitionElement
): any => {
  if (obj.policyDefinitionVariable !== undefined)
    return {
      policyDefinitionVariable: AutomatedReasoningPolicyDefinitionVariableFilterSensitiveLog(
        obj.policyDefinitionVariable
      ),
    };
  if (obj.policyDefinitionType !== undefined)
    return { policyDefinitionType: AutomatedReasoningPolicyDefinitionTypeFilterSensitiveLog(obj.policyDefinitionType) };
  if (obj.policyDefinitionRule !== undefined)
    return { policyDefinitionRule: AutomatedReasoningPolicyDefinitionRuleFilterSensitiveLog(obj.policyDefinitionRule) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const AutomatedReasoningPolicyBuildStepFilterSensitiveLog = (obj: AutomatedReasoningPolicyBuildStep): any => ({
  ...obj,
  ...(obj.context && { context: AutomatedReasoningPolicyBuildStepContextFilterSensitiveLog(obj.context) }),
  ...(obj.priorElement && {
    priorElement: AutomatedReasoningPolicyDefinitionElementFilterSensitiveLog(obj.priorElement),
  }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyBuildLogEntryFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyBuildLogEntry
): any => ({
  ...obj,
  ...(obj.annotation && { annotation: AutomatedReasoningPolicyAnnotationFilterSensitiveLog(obj.annotation) }),
  ...(obj.buildSteps && {
    buildSteps: obj.buildSteps.map((item) => AutomatedReasoningPolicyBuildStepFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyBuildLogFilterSensitiveLog = (obj: AutomatedReasoningPolicyBuildLog): any => ({
  ...obj,
  ...(obj.entries && {
    entries: obj.entries.map((item) => AutomatedReasoningPolicyBuildLogEntryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyDisjointRuleSetFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyDisjointRuleSet
): any => ({
  ...obj,
  ...(obj.variables && { variables: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyDefinitionTypeValuePairFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyDefinitionTypeValuePair
): any => ({
  ...obj,
  ...(obj.typeName && { typeName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyDefinitionQualityReportFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyDefinitionQualityReport
): any => ({
  ...obj,
  ...(obj.unusedTypes && { unusedTypes: SENSITIVE_STRING }),
  ...(obj.unusedTypeValues && {
    unusedTypeValues: obj.unusedTypeValues.map((item) =>
      AutomatedReasoningPolicyDefinitionTypeValuePairFilterSensitiveLog(item)
    ),
  }),
  ...(obj.unusedVariables && { unusedVariables: SENSITIVE_STRING }),
  ...(obj.disjointRuleSets && {
    disjointRuleSets: obj.disjointRuleSets.map((item) =>
      AutomatedReasoningPolicyDisjointRuleSetFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyBuildResultAssetsFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyBuildResultAssets
): any => {
  if (obj.policyDefinition !== undefined)
    return { policyDefinition: AutomatedReasoningPolicyDefinitionFilterSensitiveLog(obj.policyDefinition) };
  if (obj.qualityReport !== undefined)
    return { qualityReport: AutomatedReasoningPolicyDefinitionQualityReportFilterSensitiveLog(obj.qualityReport) };
  if (obj.buildLog !== undefined) return { buildLog: AutomatedReasoningPolicyBuildLogFilterSensitiveLog(obj.buildLog) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const GetAutomatedReasoningPolicyBuildWorkflowResultAssetsResponseFilterSensitiveLog = (
  obj: GetAutomatedReasoningPolicyBuildWorkflowResultAssetsResponse
): any => ({
  ...obj,
  ...(obj.buildWorkflowAssets && {
    buildWorkflowAssets: AutomatedReasoningPolicyBuildResultAssetsFilterSensitiveLog(obj.buildWorkflowAssets),
  }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyScenarioFilterSensitiveLog = (obj: AutomatedReasoningPolicyScenario): any => ({
  ...obj,
  ...(obj.expression && { expression: SENSITIVE_STRING }),
  ...(obj.alternateExpression && { alternateExpression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetAutomatedReasoningPolicyNextScenarioResponseFilterSensitiveLog = (
  obj: GetAutomatedReasoningPolicyNextScenarioResponse
): any => ({
  ...obj,
  ...(obj.scenario && { scenario: AutomatedReasoningPolicyScenarioFilterSensitiveLog(obj.scenario) }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyTestCaseFilterSensitiveLog = (obj: AutomatedReasoningPolicyTestCase): any => ({
  ...obj,
  ...(obj.guardContent && { guardContent: SENSITIVE_STRING }),
  ...(obj.queryContent && { queryContent: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetAutomatedReasoningPolicyTestCaseResponseFilterSensitiveLog = (
  obj: GetAutomatedReasoningPolicyTestCaseResponse
): any => ({
  ...obj,
  ...(obj.testCase && { testCase: AutomatedReasoningPolicyTestCaseFilterSensitiveLog(obj.testCase) }),
});

/**
 * @internal
 */
export const AutomatedReasoningLogicStatementFilterSensitiveLog = (obj: AutomatedReasoningLogicStatement): any => ({
  ...obj,
  ...(obj.logic && { logic: SENSITIVE_STRING }),
  ...(obj.naturalLanguage && { naturalLanguage: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningCheckLogicWarningFilterSensitiveLog = (
  obj: AutomatedReasoningCheckLogicWarning
): any => ({
  ...obj,
  ...(obj.premises && {
    premises: obj.premises.map((item) => AutomatedReasoningLogicStatementFilterSensitiveLog(item)),
  }),
  ...(obj.claims && { claims: obj.claims.map((item) => AutomatedReasoningLogicStatementFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const AutomatedReasoningCheckInputTextReferenceFilterSensitiveLog = (
  obj: AutomatedReasoningCheckInputTextReference
): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningCheckTranslationFilterSensitiveLog = (obj: AutomatedReasoningCheckTranslation): any => ({
  ...obj,
  ...(obj.premises && {
    premises: obj.premises.map((item) => AutomatedReasoningLogicStatementFilterSensitiveLog(item)),
  }),
  ...(obj.claims && { claims: obj.claims.map((item) => AutomatedReasoningLogicStatementFilterSensitiveLog(item)) }),
  ...(obj.untranslatedPremises && {
    untranslatedPremises: obj.untranslatedPremises.map((item) =>
      AutomatedReasoningCheckInputTextReferenceFilterSensitiveLog(item)
    ),
  }),
  ...(obj.untranslatedClaims && {
    untranslatedClaims: obj.untranslatedClaims.map((item) =>
      AutomatedReasoningCheckInputTextReferenceFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const AutomatedReasoningCheckImpossibleFindingFilterSensitiveLog = (
  obj: AutomatedReasoningCheckImpossibleFinding
): any => ({
  ...obj,
  ...(obj.translation && { translation: AutomatedReasoningCheckTranslationFilterSensitiveLog(obj.translation) }),
  ...(obj.logicWarning && { logicWarning: AutomatedReasoningCheckLogicWarningFilterSensitiveLog(obj.logicWarning) }),
});

/**
 * @internal
 */
export const AutomatedReasoningCheckInvalidFindingFilterSensitiveLog = (
  obj: AutomatedReasoningCheckInvalidFinding
): any => ({
  ...obj,
  ...(obj.translation && { translation: AutomatedReasoningCheckTranslationFilterSensitiveLog(obj.translation) }),
  ...(obj.logicWarning && { logicWarning: AutomatedReasoningCheckLogicWarningFilterSensitiveLog(obj.logicWarning) }),
});

/**
 * @internal
 */
export const AutomatedReasoningCheckScenarioFilterSensitiveLog = (obj: AutomatedReasoningCheckScenario): any => ({
  ...obj,
  ...(obj.statements && {
    statements: obj.statements.map((item) => AutomatedReasoningLogicStatementFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AutomatedReasoningCheckSatisfiableFindingFilterSensitiveLog = (
  obj: AutomatedReasoningCheckSatisfiableFinding
): any => ({
  ...obj,
  ...(obj.translation && { translation: AutomatedReasoningCheckTranslationFilterSensitiveLog(obj.translation) }),
  ...(obj.claimsTrueScenario && {
    claimsTrueScenario: AutomatedReasoningCheckScenarioFilterSensitiveLog(obj.claimsTrueScenario),
  }),
  ...(obj.claimsFalseScenario && {
    claimsFalseScenario: AutomatedReasoningCheckScenarioFilterSensitiveLog(obj.claimsFalseScenario),
  }),
  ...(obj.logicWarning && { logicWarning: AutomatedReasoningCheckLogicWarningFilterSensitiveLog(obj.logicWarning) }),
});

/**
 * @internal
 */
export const AutomatedReasoningCheckTranslationOptionFilterSensitiveLog = (
  obj: AutomatedReasoningCheckTranslationOption
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutomatedReasoningCheckTranslationAmbiguousFindingFilterSensitiveLog = (
  obj: AutomatedReasoningCheckTranslationAmbiguousFinding
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutomatedReasoningCheckValidFindingFilterSensitiveLog = (
  obj: AutomatedReasoningCheckValidFinding
): any => ({
  ...obj,
  ...(obj.translation && { translation: AutomatedReasoningCheckTranslationFilterSensitiveLog(obj.translation) }),
  ...(obj.claimsTrueScenario && {
    claimsTrueScenario: AutomatedReasoningCheckScenarioFilterSensitiveLog(obj.claimsTrueScenario),
  }),
  ...(obj.logicWarning && { logicWarning: AutomatedReasoningCheckLogicWarningFilterSensitiveLog(obj.logicWarning) }),
});

/**
 * @internal
 */
export const AutomatedReasoningCheckFindingFilterSensitiveLog = (obj: AutomatedReasoningCheckFinding): any => {
  if (obj.valid !== undefined) return { valid: AutomatedReasoningCheckValidFindingFilterSensitiveLog(obj.valid) };
  if (obj.invalid !== undefined)
    return { invalid: AutomatedReasoningCheckInvalidFindingFilterSensitiveLog(obj.invalid) };
  if (obj.satisfiable !== undefined)
    return { satisfiable: AutomatedReasoningCheckSatisfiableFindingFilterSensitiveLog(obj.satisfiable) };
  if (obj.impossible !== undefined)
    return { impossible: AutomatedReasoningCheckImpossibleFindingFilterSensitiveLog(obj.impossible) };
  if (obj.translationAmbiguous !== undefined)
    return {
      translationAmbiguous: AutomatedReasoningCheckTranslationAmbiguousFindingFilterSensitiveLog(
        obj.translationAmbiguous
      ),
    };
  if (obj.tooComplex !== undefined) return { tooComplex: obj.tooComplex };
  if (obj.noTranslations !== undefined) return { noTranslations: obj.noTranslations };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const AutomatedReasoningPolicyTestResultFilterSensitiveLog = (obj: AutomatedReasoningPolicyTestResult): any => ({
  ...obj,
  ...(obj.testCase && { testCase: AutomatedReasoningPolicyTestCaseFilterSensitiveLog(obj.testCase) }),
  ...(obj.testFindings && {
    testFindings: obj.testFindings.map((item) => AutomatedReasoningCheckFindingFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GetAutomatedReasoningPolicyTestResultResponseFilterSensitiveLog = (
  obj: GetAutomatedReasoningPolicyTestResultResponse
): any => ({
  ...obj,
  ...(obj.testResult && { testResult: AutomatedReasoningPolicyTestResultFilterSensitiveLog(obj.testResult) }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicySummaryFilterSensitiveLog = (obj: AutomatedReasoningPolicySummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAutomatedReasoningPoliciesResponseFilterSensitiveLog = (
  obj: ListAutomatedReasoningPoliciesResponse
): any => ({
  ...obj,
  ...(obj.automatedReasoningPolicySummaries && {
    automatedReasoningPolicySummaries: obj.automatedReasoningPolicySummaries.map((item) =>
      AutomatedReasoningPolicySummaryFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const ListAutomatedReasoningPolicyTestCasesResponseFilterSensitiveLog = (
  obj: ListAutomatedReasoningPolicyTestCasesResponse
): any => ({
  ...obj,
  ...(obj.testCases && {
    testCases: obj.testCases.map((item) => AutomatedReasoningPolicyTestCaseFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListAutomatedReasoningPolicyTestResultsResponseFilterSensitiveLog = (
  obj: ListAutomatedReasoningPolicyTestResultsResponse
): any => ({
  ...obj,
  ...(obj.testResults && {
    testResults: obj.testResults.map((item) => AutomatedReasoningPolicyTestResultFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyBuildWorkflowDocumentFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyBuildWorkflowDocument
): any => ({
  ...obj,
  ...(obj.documentName && { documentName: SENSITIVE_STRING }),
  ...(obj.documentDescription && { documentDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyBuildWorkflowRepairContentFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyBuildWorkflowRepairContent
): any => ({
  ...obj,
  ...(obj.annotations && {
    annotations: obj.annotations.map((item) => AutomatedReasoningPolicyAnnotationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AutomatedReasoningPolicyWorkflowTypeContentFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyWorkflowTypeContent
): any => {
  if (obj.documents !== undefined)
    return {
      documents: obj.documents.map((item) => AutomatedReasoningPolicyBuildWorkflowDocumentFilterSensitiveLog(item)),
    };
  if (obj.policyRepairAssets !== undefined)
    return {
      policyRepairAssets: AutomatedReasoningPolicyBuildWorkflowRepairContentFilterSensitiveLog(obj.policyRepairAssets),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const AutomatedReasoningPolicyBuildWorkflowSourceFilterSensitiveLog = (
  obj: AutomatedReasoningPolicyBuildWorkflowSource
): any => ({
  ...obj,
  ...(obj.policyDefinition && {
    policyDefinition: AutomatedReasoningPolicyDefinitionFilterSensitiveLog(obj.policyDefinition),
  }),
  ...(obj.workflowContent && {
    workflowContent: AutomatedReasoningPolicyWorkflowTypeContentFilterSensitiveLog(obj.workflowContent),
  }),
});

/**
 * @internal
 */
export const StartAutomatedReasoningPolicyBuildWorkflowRequestFilterSensitiveLog = (
  obj: StartAutomatedReasoningPolicyBuildWorkflowRequest
): any => ({
  ...obj,
  ...(obj.sourceContent && {
    sourceContent: AutomatedReasoningPolicyBuildWorkflowSourceFilterSensitiveLog(obj.sourceContent),
  }),
});

/**
 * @internal
 */
export const UpdateAutomatedReasoningPolicyRequestFilterSensitiveLog = (
  obj: UpdateAutomatedReasoningPolicyRequest
): any => ({
  ...obj,
  ...(obj.policyDefinition && {
    policyDefinition: AutomatedReasoningPolicyDefinitionFilterSensitiveLog(obj.policyDefinition),
  }),
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAutomatedReasoningPolicyResponseFilterSensitiveLog = (
  obj: UpdateAutomatedReasoningPolicyResponse
): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAutomatedReasoningPolicyAnnotationsRequestFilterSensitiveLog = (
  obj: UpdateAutomatedReasoningPolicyAnnotationsRequest
): any => ({
  ...obj,
  ...(obj.annotations && {
    annotations: obj.annotations.map((item) => AutomatedReasoningPolicyAnnotationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateAutomatedReasoningPolicyTestCaseRequestFilterSensitiveLog = (
  obj: UpdateAutomatedReasoningPolicyTestCaseRequest
): any => ({
  ...obj,
  ...(obj.guardContent && { guardContent: SENSITIVE_STRING }),
  ...(obj.queryContent && { queryContent: SENSITIVE_STRING }),
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
export const CustomMetricDefinitionFilterSensitiveLog = (obj: CustomMetricDefinition): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.ratingScale && { ratingScale: obj.ratingScale.map((item) => item) }),
});

/**
 * @internal
 */
export const AutomatedEvaluationCustomMetricSourceFilterSensitiveLog = (
  obj: AutomatedEvaluationCustomMetricSource
): any => {
  if (obj.customMetricDefinition !== undefined) return { customMetricDefinition: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const AutomatedEvaluationCustomMetricConfigFilterSensitiveLog = (
  obj: AutomatedEvaluationCustomMetricConfig
): any => ({
  ...obj,
  ...(obj.customMetrics && {
    customMetrics: obj.customMetrics.map((item) => AutomatedEvaluationCustomMetricSourceFilterSensitiveLog(item)),
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
  ...(obj.customMetricConfig && {
    customMetricConfig: AutomatedEvaluationCustomMetricConfigFilterSensitiveLog(obj.customMetricConfig),
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
export const MetadataAttributeSchemaFilterSensitiveLog = (obj: MetadataAttributeSchema): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImplicitFilterConfigurationFilterSensitiveLog = (obj: ImplicitFilterConfiguration): any => ({
  ...obj,
  ...(obj.metadataAttributes && { metadataAttributes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RerankingMetadataSelectiveModeConfigurationFilterSensitiveLog = (
  obj: RerankingMetadataSelectiveModeConfiguration
): any => {
  if (obj.fieldsToInclude !== undefined) return { fieldsToInclude: SENSITIVE_STRING };
  if (obj.fieldsToExclude !== undefined) return { fieldsToExclude: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const MetadataConfigurationForRerankingFilterSensitiveLog = (obj: MetadataConfigurationForReranking): any => ({
  ...obj,
  ...(obj.selectiveModeConfiguration && {
    selectiveModeConfiguration: RerankingMetadataSelectiveModeConfigurationFilterSensitiveLog(
      obj.selectiveModeConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const VectorSearchBedrockRerankingConfigurationFilterSensitiveLog = (
  obj: VectorSearchBedrockRerankingConfiguration
): any => ({
  ...obj,
  ...(obj.metadataConfiguration && {
    metadataConfiguration: MetadataConfigurationForRerankingFilterSensitiveLog(obj.metadataConfiguration),
  }),
});

/**
 * @internal
 */
export const VectorSearchRerankingConfigurationFilterSensitiveLog = (obj: VectorSearchRerankingConfiguration): any => ({
  ...obj,
  ...(obj.bedrockRerankingConfiguration && {
    bedrockRerankingConfiguration: VectorSearchBedrockRerankingConfigurationFilterSensitiveLog(
      obj.bedrockRerankingConfiguration
    ),
  }),
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
export const GuardrailContentFiltersTierConfigFilterSensitiveLog = (obj: GuardrailContentFiltersTierConfig): any => ({
  ...obj,
  ...(obj.tierName && { tierName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailContentPolicyConfigFilterSensitiveLog = (obj: GuardrailContentPolicyConfig): any => ({
  ...obj,
  ...(obj.filtersConfig && {
    filtersConfig: obj.filtersConfig.map((item) => GuardrailContentFilterConfigFilterSensitiveLog(item)),
  }),
  ...(obj.tierConfig && { tierConfig: GuardrailContentFiltersTierConfigFilterSensitiveLog(obj.tierConfig) }),
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
export const GuardrailTopicsTierConfigFilterSensitiveLog = (obj: GuardrailTopicsTierConfig): any => ({
  ...obj,
  ...(obj.tierName && { tierName: SENSITIVE_STRING }),
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
  ...(obj.tierConfig && { tierConfig: GuardrailTopicsTierConfigFilterSensitiveLog(obj.tierConfig) }),
});
