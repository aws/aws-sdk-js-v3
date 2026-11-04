// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AsyncInvokeStatus,
  AudioFormat,
  CachePointType,
  CacheTTL,
  ConversationRole,
  DocumentFormat,
  GuardrailAction,
  GuardrailAutomatedReasoningLogicWarningType,
  GuardrailChecksContentFilterCategory,
  GuardrailChecksPromptAttackCategory,
  GuardrailChecksRole,
  GuardrailChecksSensitiveInformationEntityType,
  GuardrailContentFilterConfidence,
  GuardrailContentFilterStrength,
  GuardrailContentFilterType,
  GuardrailContentPolicyAction,
  GuardrailContentQualifier,
  GuardrailContentSource,
  GuardrailContextualGroundingFilterType,
  GuardrailContextualGroundingPolicyAction,
  GuardrailConverseContentQualifier,
  GuardrailConverseImageFormat,
  GuardrailImageFormat,
  GuardrailManagedWordType,
  GuardrailOrigin,
  GuardrailOutputScope,
  GuardrailOwnership,
  GuardrailPiiEntityType,
  GuardrailSensitiveInformationPolicyAction,
  GuardrailStreamProcessingMode,
  GuardrailTopicPolicyAction,
  GuardrailTopicType,
  GuardrailTrace,
  GuardrailWordPolicyAction,
  ImageFormat,
  OutputFormatType,
  PerformanceConfigLatency,
  ServiceTierType,
  SortAsyncInvocationBy,
  SortOrder,
  StopReason,
  ToolResultStatus,
  ToolUseType,
  Trace,
  VideoFormat,
} from "./enums";
import type {
  InternalServerException,
  ModelStreamErrorException,
  ModelTimeoutException,
  ServiceUnavailableException,
  ThrottlingException,
  ValidationException,
} from "./errors";

/**
 * @public
 */
export interface GetAsyncInvokeRequest {
  /**
   * The invocation's ARN.
   *
   * @public
   */
  invocationArn: string | undefined;
}

/**
 * Asynchronous invocation output data settings.
 *
 * @public
 */
export interface AsyncInvokeS3OutputDataConfig {
  /**
   * An object URI starting with `s3://`.
   *
   * @public
   */
  s3Uri: string | undefined;

  /**
   * A KMS encryption key ID.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * If the bucket belongs to another AWS account, specify that account's ID.
   *
   * @public
   */
  bucketOwner?: string | undefined;
}

/**
 * Asynchronous invocation output data settings.
 *
 * @public
 */
export type AsyncInvokeOutputDataConfig =
  | AsyncInvokeOutputDataConfig.S3OutputDataConfigMember
  | AsyncInvokeOutputDataConfig.$UnknownMember;

/**
 * @public
 */
export namespace AsyncInvokeOutputDataConfig {
  /**
   * A storage location for the output data in an S3 bucket
   *
   * @public
   */
  export interface S3OutputDataConfigMember {
    s3OutputDataConfig: AsyncInvokeS3OutputDataConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3OutputDataConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3OutputDataConfig: (value: AsyncInvokeS3OutputDataConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetAsyncInvokeResponse {
  /**
   * The invocation's ARN.
   *
   * @public
   */
  invocationArn: string | undefined;

  /**
   * The invocation's model ARN.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * The invocation's idempotency token.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The invocation's status.
   *
   * @public
   */
  status: AsyncInvokeStatus | undefined;

  /**
   * An error message.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * When the invocation request was submitted.
   *
   * @public
   */
  submitTime: Date | undefined;

  /**
   * The invocation's last modified time.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * When the invocation ended.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Output data settings.
   *
   * @public
   */
  outputDataConfig: AsyncInvokeOutputDataConfig | undefined;
}

/**
 * @public
 */
export interface ListAsyncInvokesRequest {
  /**
   * Include invocations submitted after this time.
   *
   * @public
   */
  submitTimeAfter?: Date | undefined;

  /**
   * Include invocations submitted before this time.
   *
   * @public
   */
  submitTimeBefore?: Date | undefined;

  /**
   * Filter invocations by status.
   *
   * @public
   */
  statusEquals?: AsyncInvokeStatus | undefined;

  /**
   * The maximum number of invocations to return in one page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * How to sort the response.
   *
   * @public
   */
  sortBy?: SortAsyncInvocationBy | undefined;

  /**
   * The sorting order for the response.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * A summary of an asynchronous invocation.
 *
 * @public
 */
export interface AsyncInvokeSummary {
  /**
   * The invocation's ARN.
   *
   * @public
   */
  invocationArn: string | undefined;

  /**
   * The invoked model's ARN.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * The invocation's idempotency token.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The invocation's status.
   *
   * @public
   */
  status?: AsyncInvokeStatus | undefined;

  /**
   * An error message.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * When the invocation was submitted.
   *
   * @public
   */
  submitTime: Date | undefined;

  /**
   * When the invocation was last modified.
   *
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * When the invocation ended.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The invocation's output data settings.
   *
   * @public
   */
  outputDataConfig: AsyncInvokeOutputDataConfig | undefined;
}

/**
 * @public
 */
export interface ListAsyncInvokesResponse {
  /**
   * Specify the pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of invocation summaries.
   *
   * @public
   */
  asyncInvokeSummaries?: AsyncInvokeSummary[] | undefined;
}

/**
 * A tag.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag's key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The tag's value.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface StartAsyncInvokeRequest {
  /**
   * Specify idempotency token to ensure that requests are not duplicated.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The model to invoke.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * Input to send to the model.
   *
   * @public
   */
  modelInput: __DocumentType | undefined;

  /**
   * Where to store the output.
   *
   * @public
   */
  outputDataConfig: AsyncInvokeOutputDataConfig | undefined;

  /**
   * Tags to apply to the invocation.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartAsyncInvokeResponse {
  /**
   * The ARN of the invocation.
   *
   * @public
   */
  invocationArn: string | undefined;
}

/**
 * The image source (image bytes) of the guardrail image source. Object used in independent api.
 *
 * @public
 */
export type GuardrailImageSource =
  | GuardrailImageSource.BytesMember
  | GuardrailImageSource.$UnknownMember;

/**
 * @public
 */
export namespace GuardrailImageSource {
  /**
   * The bytes details of the guardrail image source. Object used in independent api.
   *
   * @public
   */
  export interface BytesMember {
    bytes: Uint8Array;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    bytes?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    bytes: (value: Uint8Array) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contain an image which user wants guarded. This block is accepted by the guardrails independent API.
 *
 * @public
 */
export interface GuardrailImageBlock {
  /**
   * The format details for the file type of the image blocked by the guardrail.
   *
   * @public
   */
  format: GuardrailImageFormat | undefined;

  /**
   * The image source (image bytes) details of the image blocked by the guardrail.
   *
   * @public
   */
  source: GuardrailImageSource | undefined;
}

/**
 * The text block to be evaluated by the guardrail.
 *
 * @public
 */
export interface GuardrailTextBlock {
  /**
   * The input text details to be evaluated by the guardrail.
   *
   * @public
   */
  text: string | undefined;

  /**
   * The qualifiers describing the text block.
   *
   * @public
   */
  qualifiers?: GuardrailContentQualifier[] | undefined;
}

/**
 * The content block to be evaluated by the guardrail.
 *
 * @public
 */
export type GuardrailContentBlock =
  | GuardrailContentBlock.ImageMember
  | GuardrailContentBlock.TextMember
  | GuardrailContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace GuardrailContentBlock {
  /**
   * Text within content block to be evaluated by the guardrail.
   *
   * @public
   */
  export interface TextMember {
    text: GuardrailTextBlock;
    image?: never;
    $unknown?: never;
  }

  /**
   * Image within guardrail content block to be evaluated by the guardrail.
   *
   * @public
   */
  export interface ImageMember {
    text?: never;
    image: GuardrailImageBlock;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    image?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: GuardrailTextBlock) => T;
    image: (value: GuardrailImageBlock) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ApplyGuardrailRequest {
  /**
   * The guardrail identifier used in the request to apply the guardrail.
   *
   * @public
   */
  guardrailIdentifier: string | undefined;

  /**
   * The guardrail version used in the request to apply the guardrail.
   *
   * @public
   */
  guardrailVersion: string | undefined;

  /**
   * The source of data used in the request to apply the guardrail.
   *
   * @public
   */
  source: GuardrailContentSource | undefined;

  /**
   * The content details used in the request to apply the guardrail.
   *
   * @public
   */
  content: GuardrailContentBlock[] | undefined;

  /**
   * Specifies the scope of the output that you get in the response. Set to `FULL` to return the entire output, including any detected and non-detected entries in the response for enhanced debugging.
   *
   * Note that the full output scope doesn't apply to word filters or regex in sensitive information filters. It does apply to all other filtering policies, including sensitive information with filters that can detect personally identifiable information (PII).
   *
   * @public
   */
  outputScope?: GuardrailOutputScope | undefined;
}

/**
 * Details about the specific guardrail that was applied during this assessment, including its identifier, version, ARN, origin, and ownership information.
 *
 * @public
 */
export interface AppliedGuardrailDetails {
  /**
   * The unique ID of the guardrail that was applied.
   *
   * @public
   */
  guardrailId?: string | undefined;

  /**
   * The version of the guardrail that was applied.
   *
   * @public
   */
  guardrailVersion?: string | undefined;

  /**
   * The ARN of the guardrail that was applied.
   *
   * @public
   */
  guardrailArn?: string | undefined;

  /**
   * The origin of how the guardrail was applied. This can be either requested at the API level or enforced at the account or organization level as a default guardrail.
   *
   * @public
   */
  guardrailOrigin?: GuardrailOrigin[] | undefined;

  /**
   * The ownership type of the guardrail, indicating whether it is owned by the requesting account or is a cross-account guardrail shared from another AWS account.
   *
   * @public
   */
  guardrailOwnership?: GuardrailOwnership | undefined;
}

/**
 * References a specific automated reasoning policy rule that was applied during evaluation.
 *
 * @public
 */
export interface GuardrailAutomatedReasoningRule {
  /**
   * The unique identifier of the automated reasoning rule.
   *
   * @public
   */
  identifier?: string | undefined;

  /**
   * The ARN of the automated reasoning policy version that contains this rule.
   *
   * @public
   */
  policyVersionArn?: string | undefined;
}

/**
 * A logical statement that includes both formal logic representation and natural language explanation.
 *
 * @public
 */
export interface GuardrailAutomatedReasoningStatement {
  /**
   * The formal logical representation of the statement.
   *
   * @public
   */
  logic?: string | undefined;

  /**
   * The natural language explanation of the logical statement.
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
export interface GuardrailAutomatedReasoningLogicWarning {
  /**
   * The category of the detected logical issue, such as statements that are always true or always false.
   *
   * @public
   */
  type?: GuardrailAutomatedReasoningLogicWarningType | undefined;

  /**
   * The logical statements that serve as premises under which the claims are validated.
   *
   * @public
   */
  premises?: GuardrailAutomatedReasoningStatement[] | undefined;

  /**
   * The logical statements that are validated while assuming the policy and premises.
   *
   * @public
   */
  claims?: GuardrailAutomatedReasoningStatement[] | undefined;
}

/**
 * References a portion of the original input text that corresponds to logical elements.
 *
 * @public
 */
export interface GuardrailAutomatedReasoningInputTextReference {
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
export interface GuardrailAutomatedReasoningTranslation {
  /**
   * The logical statements that serve as the foundation or assumptions for the claims.
   *
   * @public
   */
  premises?: GuardrailAutomatedReasoningStatement[] | undefined;

  /**
   * The logical statements that are being validated against the premises and policy rules.
   *
   * @public
   */
  claims?: GuardrailAutomatedReasoningStatement[] | undefined;

  /**
   * References to portions of the original input text that correspond to the premises but could not be fully translated.
   *
   * @public
   */
  untranslatedPremises?: GuardrailAutomatedReasoningInputTextReference[] | undefined;

  /**
   * References to portions of the original input text that correspond to the claims but could not be fully translated.
   *
   * @public
   */
  untranslatedClaims?: GuardrailAutomatedReasoningInputTextReference[] | undefined;

  /**
   * A confidence score between 0 and 1 indicating how certain the system is about the logical translation.
   *
   * @public
   */
  confidence?: number | undefined;
}

/**
 * Indicates that no valid claims can be made due to logical contradictions in the premises or rules.
 *
 * @public
 */
export interface GuardrailAutomatedReasoningImpossibleFinding {
  /**
   * The logical translation of the input that this finding evaluates.
   *
   * @public
   */
  translation?: GuardrailAutomatedReasoningTranslation | undefined;

  /**
   * The automated reasoning policy rules that contradict the claims and/or premises in the input.
   *
   * @public
   */
  contradictingRules?: GuardrailAutomatedReasoningRule[] | undefined;

  /**
   * Indication of a logic issue with the translation without needing to consider the automated reasoning policy rules.
   *
   * @public
   */
  logicWarning?: GuardrailAutomatedReasoningLogicWarning | undefined;
}

/**
 * Indicates that the claims are logically false and contradictory to the established rules or premises.
 *
 * @public
 */
export interface GuardrailAutomatedReasoningInvalidFinding {
  /**
   * The logical translation of the input that this finding invalidates.
   *
   * @public
   */
  translation?: GuardrailAutomatedReasoningTranslation | undefined;

  /**
   * The automated reasoning policy rules that contradict the claims in the input.
   *
   * @public
   */
  contradictingRules?: GuardrailAutomatedReasoningRule[] | undefined;

  /**
   * Indication of a logic issue with the translation without needing to consider the automated reasoning policy rules.
   *
   * @public
   */
  logicWarning?: GuardrailAutomatedReasoningLogicWarning | undefined;
}

/**
 * Indicates that no relevant logical information could be extracted from the input for validation.
 *
 * @public
 */
export interface GuardrailAutomatedReasoningNoTranslationsFinding {}

/**
 * Represents a logical scenario where claims can be evaluated as true or false, containing specific logical assignments.
 *
 * @public
 */
export interface GuardrailAutomatedReasoningScenario {
  /**
   * List of logical assignments and statements that define this scenario.
   *
   * @public
   */
  statements?: GuardrailAutomatedReasoningStatement[] | undefined;
}

/**
 * Indicates that the claims could be either true or false depending on additional assumptions not provided in the input.
 *
 * @public
 */
export interface GuardrailAutomatedReasoningSatisfiableFinding {
  /**
   * The logical translation of the input that this finding evaluates.
   *
   * @public
   */
  translation?: GuardrailAutomatedReasoningTranslation | undefined;

  /**
   * An example scenario demonstrating how the claims could be logically true.
   *
   * @public
   */
  claimsTrueScenario?: GuardrailAutomatedReasoningScenario | undefined;

  /**
   * An example scenario demonstrating how the claims could be logically false.
   *
   * @public
   */
  claimsFalseScenario?: GuardrailAutomatedReasoningScenario | undefined;

  /**
   * Indication of a logic issue with the translation without needing to consider the automated reasoning policy rules.
   *
   * @public
   */
  logicWarning?: GuardrailAutomatedReasoningLogicWarning | undefined;
}

/**
 * Indicates that the input exceeds the processing capacity due to the volume or complexity of the logical information.
 *
 * @public
 */
export interface GuardrailAutomatedReasoningTooComplexFinding {}

/**
 * Represents one possible logical interpretation of ambiguous input content.
 *
 * @public
 */
export interface GuardrailAutomatedReasoningTranslationOption {
  /**
   * Example translations that provide this possible interpretation of the input.
   *
   * @public
   */
  translations?: GuardrailAutomatedReasoningTranslation[] | undefined;
}

/**
 * Indicates that the input has multiple valid logical interpretations, requiring additional context or clarification.
 *
 * @public
 */
export interface GuardrailAutomatedReasoningTranslationAmbiguousFinding {
  /**
   * Different logical interpretations that were detected during translation of the input.
   *
   * @public
   */
  options?: GuardrailAutomatedReasoningTranslationOption[] | undefined;

  /**
   * Scenarios showing how the different translation options differ in meaning.
   *
   * @public
   */
  differenceScenarios?: GuardrailAutomatedReasoningScenario[] | undefined;
}

/**
 * Indicates that the claims are definitively true and logically implied by the premises, with no possible alternative interpretations.
 *
 * @public
 */
export interface GuardrailAutomatedReasoningValidFinding {
  /**
   * The logical translation of the input that this finding validates.
   *
   * @public
   */
  translation?: GuardrailAutomatedReasoningTranslation | undefined;

  /**
   * An example scenario demonstrating how the claims are logically true.
   *
   * @public
   */
  claimsTrueScenario?: GuardrailAutomatedReasoningScenario | undefined;

  /**
   * The automated reasoning policy rules that support why this result is considered valid.
   *
   * @public
   */
  supportingRules?: GuardrailAutomatedReasoningRule[] | undefined;

  /**
   * Indication of a logic issue with the translation without needing to consider the automated reasoning policy rules.
   *
   * @public
   */
  logicWarning?: GuardrailAutomatedReasoningLogicWarning | undefined;
}

/**
 * Represents a logical validation result from automated reasoning policy evaluation. The finding indicates whether claims in the input are logically valid, invalid, satisfiable, impossible, or have other logical issues.
 *
 * @public
 */
export type GuardrailAutomatedReasoningFinding =
  | GuardrailAutomatedReasoningFinding.ImpossibleMember
  | GuardrailAutomatedReasoningFinding.InvalidMember
  | GuardrailAutomatedReasoningFinding.NoTranslationsMember
  | GuardrailAutomatedReasoningFinding.SatisfiableMember
  | GuardrailAutomatedReasoningFinding.TooComplexMember
  | GuardrailAutomatedReasoningFinding.TranslationAmbiguousMember
  | GuardrailAutomatedReasoningFinding.ValidMember
  | GuardrailAutomatedReasoningFinding.$UnknownMember;

/**
 * @public
 */
export namespace GuardrailAutomatedReasoningFinding {
  /**
   * Contains the result when the automated reasoning evaluation determines that the claims in the input are logically valid and definitively true based on the provided premises and policy rules.
   *
   * @public
   */
  export interface ValidMember {
    valid: GuardrailAutomatedReasoningValidFinding;
    invalid?: never;
    satisfiable?: never;
    impossible?: never;
    translationAmbiguous?: never;
    tooComplex?: never;
    noTranslations?: never;
    $unknown?: never;
  }

  /**
   * Contains the result when the automated reasoning evaluation determines that the claims in the input are logically invalid and contradict the established premises or policy rules.
   *
   * @public
   */
  export interface InvalidMember {
    valid?: never;
    invalid: GuardrailAutomatedReasoningInvalidFinding;
    satisfiable?: never;
    impossible?: never;
    translationAmbiguous?: never;
    tooComplex?: never;
    noTranslations?: never;
    $unknown?: never;
  }

  /**
   * Contains the result when the automated reasoning evaluation determines that the claims in the input could be either true or false depending on additional assumptions not provided in the input context.
   *
   * @public
   */
  export interface SatisfiableMember {
    valid?: never;
    invalid?: never;
    satisfiable: GuardrailAutomatedReasoningSatisfiableFinding;
    impossible?: never;
    translationAmbiguous?: never;
    tooComplex?: never;
    noTranslations?: never;
    $unknown?: never;
  }

  /**
   * Contains the result when the automated reasoning evaluation determines that no valid logical conclusions can be drawn due to contradictions in the premises or policy rules themselves.
   *
   * @public
   */
  export interface ImpossibleMember {
    valid?: never;
    invalid?: never;
    satisfiable?: never;
    impossible: GuardrailAutomatedReasoningImpossibleFinding;
    translationAmbiguous?: never;
    tooComplex?: never;
    noTranslations?: never;
    $unknown?: never;
  }

  /**
   * Contains the result when the automated reasoning evaluation detects that the input has multiple valid logical interpretations, requiring additional context or clarification to proceed with validation.
   *
   * @public
   */
  export interface TranslationAmbiguousMember {
    valid?: never;
    invalid?: never;
    satisfiable?: never;
    impossible?: never;
    translationAmbiguous: GuardrailAutomatedReasoningTranslationAmbiguousFinding;
    tooComplex?: never;
    noTranslations?: never;
    $unknown?: never;
  }

  /**
   * Contains the result when the automated reasoning evaluation cannot process the input due to its complexity or volume exceeding the system's processing capacity for logical analysis.
   *
   * @public
   */
  export interface TooComplexMember {
    valid?: never;
    invalid?: never;
    satisfiable?: never;
    impossible?: never;
    translationAmbiguous?: never;
    tooComplex: GuardrailAutomatedReasoningTooComplexFinding;
    noTranslations?: never;
    $unknown?: never;
  }

  /**
   * Contains the result when the automated reasoning evaluation cannot extract any relevant logical information from the input that can be validated against the policy rules.
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
    noTranslations: GuardrailAutomatedReasoningNoTranslationsFinding;
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
    valid: (value: GuardrailAutomatedReasoningValidFinding) => T;
    invalid: (value: GuardrailAutomatedReasoningInvalidFinding) => T;
    satisfiable: (value: GuardrailAutomatedReasoningSatisfiableFinding) => T;
    impossible: (value: GuardrailAutomatedReasoningImpossibleFinding) => T;
    translationAmbiguous: (value: GuardrailAutomatedReasoningTranslationAmbiguousFinding) => T;
    tooComplex: (value: GuardrailAutomatedReasoningTooComplexFinding) => T;
    noTranslations: (value: GuardrailAutomatedReasoningNoTranslationsFinding) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains the results of automated reasoning policy evaluation, including logical findings about the validity of claims made in the input content.
 *
 * @public
 */
export interface GuardrailAutomatedReasoningPolicyAssessment {
  /**
   * List of logical validation results produced by evaluating the input content against automated reasoning policies.
   *
   * @public
   */
  findings?: GuardrailAutomatedReasoningFinding[] | undefined;
}

/**
 * The content filter for a guardrail.
 *
 * @public
 */
export interface GuardrailContentFilter {
  /**
   * The guardrail type.
   *
   * @public
   */
  type: GuardrailContentFilterType | undefined;

  /**
   * The guardrail confidence.
   *
   * @public
   */
  confidence: GuardrailContentFilterConfidence | undefined;

  /**
   * The filter strength setting for the guardrail content filter.
   *
   * @public
   */
  filterStrength?: GuardrailContentFilterStrength | undefined;

  /**
   * The guardrail action.
   *
   * @public
   */
  action: GuardrailContentPolicyAction | undefined;

  /**
   * Indicates whether content that breaches the guardrail configuration is detected.
   *
   * @public
   */
  detected?: boolean | undefined;
}

/**
 * An assessment of a content policy for a guardrail.
 *
 * @public
 */
export interface GuardrailContentPolicyAssessment {
  /**
   * The content policy filters.
   *
   * @public
   */
  filters: GuardrailContentFilter[] | undefined;
}

/**
 * The details for the guardrails contextual grounding filter.
 *
 * @public
 */
export interface GuardrailContextualGroundingFilter {
  /**
   * The contextual grounding filter type.
   *
   * @public
   */
  type: GuardrailContextualGroundingFilterType | undefined;

  /**
   * The threshold used by contextual grounding filter to determine whether the content is grounded or not.
   *
   * @public
   */
  threshold: number | undefined;

  /**
   * The score generated by contextual grounding filter.
   *
   * @public
   */
  score: number | undefined;

  /**
   * The action performed by the guardrails contextual grounding filter.
   *
   * @public
   */
  action: GuardrailContextualGroundingPolicyAction | undefined;

  /**
   * Indicates whether content that fails the contextual grounding evaluation (grounding or relevance score less than the corresponding threshold) was detected.
   *
   * @public
   */
  detected?: boolean | undefined;
}

/**
 * The policy assessment details for the guardrails contextual grounding filter.
 *
 * @public
 */
export interface GuardrailContextualGroundingPolicyAssessment {
  /**
   * The filter details for the guardrails contextual grounding filter.
   *
   * @public
   */
  filters?: GuardrailContextualGroundingFilter[] | undefined;
}

/**
 * The details of the guardrail image coverage.
 *
 * @public
 */
export interface GuardrailImageCoverage {
  /**
   * The count (integer) of images guardrails guarded.
   *
   * @public
   */
  guarded?: number | undefined;

  /**
   * Represents the total number of images (integer) that were in the request (guarded and unguarded).
   *
   * @public
   */
  total?: number | undefined;
}

/**
 * The guardrail coverage for the text characters.
 *
 * @public
 */
export interface GuardrailTextCharactersCoverage {
  /**
   * The text characters that were guarded by the guardrail coverage.
   *
   * @public
   */
  guarded?: number | undefined;

  /**
   * The total text characters by the guardrail coverage.
   *
   * @public
   */
  total?: number | undefined;
}

/**
 * The action of the guardrail coverage details.
 *
 * @public
 */
export interface GuardrailCoverage {
  /**
   * The text characters of the guardrail coverage details.
   *
   * @public
   */
  textCharacters?: GuardrailTextCharactersCoverage | undefined;

  /**
   * The guardrail coverage for images (the number of images that guardrails guarded).
   *
   * @public
   */
  images?: GuardrailImageCoverage | undefined;
}

/**
 * The details on the use of the guardrail.
 *
 * @public
 */
export interface GuardrailUsage {
  /**
   * The topic policy units processed by the guardrail.
   *
   * @public
   */
  topicPolicyUnits: number | undefined;

  /**
   * The content policy units processed by the guardrail.
   *
   * @public
   */
  contentPolicyUnits: number | undefined;

  /**
   * The word policy units processed by the guardrail.
   *
   * @public
   */
  wordPolicyUnits: number | undefined;

  /**
   * The sensitive information policy units processed by the guardrail.
   *
   * @public
   */
  sensitiveInformationPolicyUnits: number | undefined;

  /**
   * The sensitive information policy free units processed by the guardrail.
   *
   * @public
   */
  sensitiveInformationPolicyFreeUnits: number | undefined;

  /**
   * The contextual grounding policy units processed by the guardrail.
   *
   * @public
   */
  contextualGroundingPolicyUnits: number | undefined;

  /**
   * The content policy image units processed by the guardrail.
   *
   * @public
   */
  contentPolicyImageUnits?: number | undefined;

  /**
   * The number of text units processed by the automated reasoning policy.
   *
   * @public
   */
  automatedReasoningPolicyUnits?: number | undefined;

  /**
   * The number of automated reasoning policies that were processed during the guardrail evaluation.
   *
   * @public
   */
  automatedReasoningPolicies?: number | undefined;
}

/**
 * The invocation metrics for the guardrail.
 *
 * @public
 */
export interface GuardrailInvocationMetrics {
  /**
   * The processing latency details for the guardrail invocation metrics.
   *
   * @public
   */
  guardrailProcessingLatency?: number | undefined;

  /**
   * The usage details for the guardrail invocation metrics.
   *
   * @public
   */
  usage?: GuardrailUsage | undefined;

  /**
   * The coverage details for the guardrail invocation metrics.
   *
   * @public
   */
  guardrailCoverage?: GuardrailCoverage | undefined;
}

/**
 * A Personally Identifiable Information (PII) entity configured in a guardrail.
 *
 * @public
 */
export interface GuardrailPiiEntityFilter {
  /**
   * The PII entity filter match.
   *
   * @public
   */
  match: string | undefined;

  /**
   * The PII entity filter type.
   *
   * @public
   */
  type: GuardrailPiiEntityType | undefined;

  /**
   * The PII entity filter action.
   *
   * @public
   */
  action: GuardrailSensitiveInformationPolicyAction | undefined;

  /**
   * Indicates whether personally identifiable information (PII) that breaches the guardrail configuration is detected.
   *
   * @public
   */
  detected?: boolean | undefined;
}

/**
 * A Regex filter configured in a guardrail.
 *
 * @public
 */
export interface GuardrailRegexFilter {
  /**
   * The regex filter name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The regesx filter match.
   *
   * @public
   */
  match?: string | undefined;

  /**
   * The regex query.
   *
   * @public
   */
  regex?: string | undefined;

  /**
   * The region filter action.
   *
   * @public
   */
  action: GuardrailSensitiveInformationPolicyAction | undefined;

  /**
   * Indicates whether custom regex entities that breach the guardrail configuration are detected.
   *
   * @public
   */
  detected?: boolean | undefined;
}

/**
 * The assessment for a Personally Identifiable Information (PII) policy.
 *
 * @public
 */
export interface GuardrailSensitiveInformationPolicyAssessment {
  /**
   * The PII entities in the assessment.
   *
   * @public
   */
  piiEntities: GuardrailPiiEntityFilter[] | undefined;

  /**
   * The regex queries in the assessment.
   *
   * @public
   */
  regexes: GuardrailRegexFilter[] | undefined;
}

/**
 * Information about a topic guardrail.
 *
 * @public
 */
export interface GuardrailTopic {
  /**
   * The name for the guardrail.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type behavior that the guardrail should perform when the model detects the topic.
   *
   * @public
   */
  type: GuardrailTopicType | undefined;

  /**
   * The action the guardrail should take when it intervenes on a topic.
   *
   * @public
   */
  action: GuardrailTopicPolicyAction | undefined;

  /**
   * Indicates whether topic content that breaches the guardrail configuration is detected.
   *
   * @public
   */
  detected?: boolean | undefined;
}

/**
 * A behavior assessment of a topic policy.
 *
 * @public
 */
export interface GuardrailTopicPolicyAssessment {
  /**
   * The topics in the assessment.
   *
   * @public
   */
  topics: GuardrailTopic[] | undefined;
}

/**
 * A custom word configured in a guardrail.
 *
 * @public
 */
export interface GuardrailCustomWord {
  /**
   * The match for the custom word.
   *
   * @public
   */
  match: string | undefined;

  /**
   * The action for the custom word.
   *
   * @public
   */
  action: GuardrailWordPolicyAction | undefined;

  /**
   * Indicates whether custom word content that breaches the guardrail configuration is detected.
   *
   * @public
   */
  detected?: boolean | undefined;
}

/**
 * A managed word configured in a guardrail.
 *
 * @public
 */
export interface GuardrailManagedWord {
  /**
   * The match for the managed word.
   *
   * @public
   */
  match: string | undefined;

  /**
   * The type for the managed word.
   *
   * @public
   */
  type: GuardrailManagedWordType | undefined;

  /**
   * The action for the managed word.
   *
   * @public
   */
  action: GuardrailWordPolicyAction | undefined;

  /**
   * Indicates whether managed word content that breaches the guardrail configuration is detected.
   *
   * @public
   */
  detected?: boolean | undefined;
}

/**
 * The word policy assessment.
 *
 * @public
 */
export interface GuardrailWordPolicyAssessment {
  /**
   * Custom words in the assessment.
   *
   * @public
   */
  customWords: GuardrailCustomWord[] | undefined;

  /**
   * Managed word lists in the assessment.
   *
   * @public
   */
  managedWordLists: GuardrailManagedWord[] | undefined;
}

/**
 * A behavior assessment of the guardrail policies used in a call to the Converse API.
 *
 * @public
 */
export interface GuardrailAssessment {
  /**
   * The topic policy.
   *
   * @public
   */
  topicPolicy?: GuardrailTopicPolicyAssessment | undefined;

  /**
   * The content policy.
   *
   * @public
   */
  contentPolicy?: GuardrailContentPolicyAssessment | undefined;

  /**
   * The word policy.
   *
   * @public
   */
  wordPolicy?: GuardrailWordPolicyAssessment | undefined;

  /**
   * The sensitive information policy.
   *
   * @public
   */
  sensitiveInformationPolicy?: GuardrailSensitiveInformationPolicyAssessment | undefined;

  /**
   * The contextual grounding policy used for the guardrail assessment.
   *
   * @public
   */
  contextualGroundingPolicy?: GuardrailContextualGroundingPolicyAssessment | undefined;

  /**
   * The automated reasoning policy assessment results, including logical validation findings for the input content.
   *
   * @public
   */
  automatedReasoningPolicy?: GuardrailAutomatedReasoningPolicyAssessment | undefined;

  /**
   * The invocation metrics for the guardrail assessment.
   *
   * @public
   */
  invocationMetrics?: GuardrailInvocationMetrics | undefined;

  /**
   * Details about the specific guardrail that was applied during this assessment, including its identifier, version, ARN, origin, and ownership information.
   *
   * @public
   */
  appliedGuardrailDetails?: AppliedGuardrailDetails | undefined;
}

/**
 * The output content produced by the guardrail.
 *
 * @public
 */
export interface GuardrailOutputContent {
  /**
   * The specific text for the output content produced by the guardrail.
   *
   * @public
   */
  text?: string | undefined;
}

/**
 * @public
 */
export interface ApplyGuardrailResponse {
  /**
   * The usage details in the response from the guardrail.
   *
   * @public
   */
  usage: GuardrailUsage | undefined;

  /**
   * The action taken in the response from the guardrail.
   *
   * @public
   */
  action: GuardrailAction | undefined;

  /**
   * The reason for the action taken when harmful content is detected.
   *
   * @public
   */
  actionReason?: string | undefined;

  /**
   * The output details in the response from the guardrail.
   *
   * @public
   */
  outputs: GuardrailOutputContent[] | undefined;

  /**
   * The assessment details in the response from the guardrail.
   *
   * @public
   */
  assessments: GuardrailAssessment[] | undefined;

  /**
   * The guardrail coverage details in the apply guardrail response.
   *
   * @public
   */
  guardrailCoverage?: GuardrailCoverage | undefined;
}

/**
 * The configuration for a single content filter category to evaluate.
 *
 * @public
 */
export interface GuardrailChecksContentFilterCategoryConfig {
  /**
   * The content filter category to evaluate.
   *
   * @public
   */
  category: GuardrailChecksContentFilterCategory | undefined;
}

/**
 * The configuration for the content filter check, specifying which categories to evaluate.
 *
 * @public
 */
export interface GuardrailChecksContentFilterConfig {
  /**
   * The content filter categories to evaluate.
   *
   * @public
   */
  categories: GuardrailChecksContentFilterCategoryConfig[] | undefined;
}

/**
 * The configuration for a single prompt attack category to evaluate.
 *
 * @public
 */
export interface GuardrailChecksPromptAttackCategoryConfig {
  /**
   * The prompt attack category to evaluate.
   *
   * @public
   */
  category: GuardrailChecksPromptAttackCategory | undefined;
}

/**
 * The configuration for the prompt attack check, specifying which categories to evaluate.
 *
 * @public
 */
export interface GuardrailChecksPromptAttackConfig {
  /**
   * The prompt attack categories to evaluate.
   *
   * @public
   */
  categories: GuardrailChecksPromptAttackCategoryConfig[] | undefined;
}

/**
 * The configuration for a single sensitive information entity type to detect.
 *
 * @public
 */
export interface GuardrailChecksSensitiveInformationEntityConfig {
  /**
   * The PII entity type to detect.
   *
   * @public
   */
  type: GuardrailChecksSensitiveInformationEntityType | undefined;
}

/**
 * The configuration for the sensitive information check, specifying which entity types to detect.
 *
 * @public
 */
export interface GuardrailChecksSensitiveInformationConfig {
  /**
   * The sensitive information entity types to detect.
   *
   * @public
   */
  entities: GuardrailChecksSensitiveInformationEntityConfig[] | undefined;
}

/**
 * The configuration for inline guardrail checks. Specify one or more check types to run against the messages.
 *
 * @public
 */
export interface GuardrailChecksConfig {
  /**
   * The content filter check configuration.
   *
   * @public
   */
  contentFilter?: GuardrailChecksContentFilterConfig | undefined;

  /**
   * The prompt attack check configuration.
   *
   * @public
   */
  promptAttack?: GuardrailChecksPromptAttackConfig | undefined;

  /**
   * The sensitive information check configuration.
   *
   * @public
   */
  sensitiveInformation?: GuardrailChecksSensitiveInformationConfig | undefined;
}

/**
 * A content block within a message to evaluate.
 *
 * @public
 */
export type GuardrailChecksContentBlock =
  | GuardrailChecksContentBlock.TextMember
  | GuardrailChecksContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace GuardrailChecksContentBlock {
  /**
   * The text content to evaluate.
   *
   * @public
   */
  export interface TextMember {
    text: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A message to evaluate against guardrail checks, containing a role and content blocks.
 *
 * @public
 */
export interface GuardrailChecksMessage {
  /**
   * The role of the message sender.
   *
   * @public
   */
  role: GuardrailChecksRole | undefined;

  /**
   * The content blocks for the message.
   *
   * @public
   */
  content: GuardrailChecksContentBlock[] | undefined;
}

/**
 * @public
 */
export interface InvokeGuardrailChecksRequest {
  /**
   * The messages to evaluate against the specified guardrail checks. Each message includes a role and one or more content blocks.
   *
   * @public
   */
  messages: GuardrailChecksMessage[] | undefined;

  /**
   * The inline check configurations that specify which guardrail checks to run against the messages.
   *
   * @public
   */
  checks: GuardrailChecksConfig | undefined;
}

/**
 * The evaluation result for a single content filter category.
 *
 * @public
 */
export interface GuardrailChecksContentFilterResultEntry {
  /**
   * The content filter category that was evaluated.
   *
   * @public
   */
  category: GuardrailChecksContentFilterCategory | undefined;

  /**
   * The severity score for the category, ranging from 0.0 to 1.0. Higher values indicate greater severity.
   *
   * @public
   */
  severityScore: number | undefined;
}

/**
 * The content filter check results.
 *
 * @public
 */
export interface GuardrailChecksContentFilterResult {
  /**
   * The per-category content filter results.
   *
   * @public
   */
  results: GuardrailChecksContentFilterResultEntry[] | undefined;
}

/**
 * The evaluation result for a single prompt attack category.
 *
 * @public
 */
export interface GuardrailChecksPromptAttackResultEntry {
  /**
   * The prompt attack category that was evaluated.
   *
   * @public
   */
  category: GuardrailChecksPromptAttackCategory | undefined;

  /**
   * The severity score for the category, ranging from 0.0 to 1.0. Higher values indicate greater severity.
   *
   * @public
   */
  severityScore: number | undefined;
}

/**
 * The prompt attack check results.
 *
 * @public
 */
export interface GuardrailChecksPromptAttackResult {
  /**
   * The per-category prompt attack results.
   *
   * @public
   */
  results: GuardrailChecksPromptAttackResultEntry[] | undefined;
}

/**
 * The detection result for a single sensitive information entity found in the evaluated messages.
 *
 * @public
 */
export interface GuardrailChecksSensitiveInformationResultEntry {
  /**
   * The PII entity type that was detected.
   *
   * @public
   */
  type: GuardrailChecksSensitiveInformationEntityType | undefined;

  /**
   * The confidence score for the detection, ranging from 0.0 to 1.0. Higher values indicate greater confidence.
   *
   * @public
   */
  confidenceScore: number | undefined;

  /**
   * The start character offset of the detected entity within the content block.
   *
   * @public
   */
  beginOffset: number | undefined;

  /**
   * The end character offset of the detected entity within the content block.
   *
   * @public
   */
  endOffset: number | undefined;

  /**
   * The zero-based index of the message in the input messages array where the entity was detected.
   *
   * @public
   */
  messageIndex: number | undefined;

  /**
   * The zero-based index of the content block within the message where the entity was detected.
   *
   * @public
   */
  contentIndex: number | undefined;
}

/**
 * The sensitive information check results.
 *
 * @public
 */
export interface GuardrailChecksSensitiveInformationResult {
  /**
   * The detected sensitive information entities.
   *
   * @public
   */
  results: GuardrailChecksSensitiveInformationResultEntry[] | undefined;

  /**
   * Specifies whether the results were truncated because the number of detected entities exceeded the maximum limit.
   *
   * @public
   */
  truncated?: boolean | undefined;
}

/**
 * The results from the guardrail checks evaluation, organized by check type.
 *
 * @public
 */
export interface GuardrailChecksResults {
  /**
   * The content filter check results.
   *
   * @public
   */
  contentFilter?: GuardrailChecksContentFilterResult | undefined;

  /**
   * The prompt attack check results.
   *
   * @public
   */
  promptAttack?: GuardrailChecksPromptAttackResult | undefined;

  /**
   * The sensitive information check results.
   *
   * @public
   */
  sensitiveInformation?: GuardrailChecksSensitiveInformationResult | undefined;
}

/**
 * The text unit usage for the content filter check.
 *
 * @public
 */
export interface GuardrailChecksContentFilterUsage {
  /**
   * The number of text units consumed by the content filter check.
   *
   * @public
   */
  textUnits: number | undefined;
}

/**
 * The text unit usage for the prompt attack check.
 *
 * @public
 */
export interface GuardrailChecksPromptAttackUsage {
  /**
   * The number of text units consumed by the prompt attack check.
   *
   * @public
   */
  textUnits: number | undefined;
}

/**
 * The text unit usage for the sensitive information check.
 *
 * @public
 */
export interface GuardrailChecksSensitiveInformationUsage {
  /**
   * The number of text units consumed by the sensitive information check.
   *
   * @public
   */
  textUnits: number | undefined;
}

/**
 * The text unit usage for the guardrail checks evaluation, organized by check type.
 *
 * @public
 */
export interface GuardrailChecksUsageResults {
  /**
   * The text unit usage for the content filter check.
   *
   * @public
   */
  contentFilter?: GuardrailChecksContentFilterUsage | undefined;

  /**
   * The text unit usage for the prompt attack check.
   *
   * @public
   */
  promptAttack?: GuardrailChecksPromptAttackUsage | undefined;

  /**
   * The text unit usage for the sensitive information check.
   *
   * @public
   */
  sensitiveInformation?: GuardrailChecksSensitiveInformationUsage | undefined;
}

/**
 * @public
 */
export interface InvokeGuardrailChecksResponse {
  /**
   * The per-check results containing findings from the guardrail evaluation.
   *
   * @public
   */
  results: GuardrailChecksResults | undefined;

  /**
   * The per-check text unit consumption for the guardrail evaluation.
   *
   * @public
   */
  usage: GuardrailChecksUsageResults | undefined;
}

/**
 * Configuration information for a guardrail that you use with the [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html) operation.
 *
 * @public
 */
export interface GuardrailConfiguration {
  /**
   * The identifier for the guardrail.
   *
   * @public
   */
  guardrailIdentifier?: string | undefined;

  /**
   * The version of the guardrail.
   *
   * @public
   */
  guardrailVersion?: string | undefined;

  /**
   * The trace behavior for the guardrail.
   *
   * @public
   */
  trace?: GuardrailTrace | undefined;
}

/**
 * Base inference parameters to pass to a model in a call to [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html) or [ConverseStream](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html). For more information, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html).
 *
 * If you need to pass additional parameters that the model supports, use the `additionalModelRequestFields` request field in the call to `Converse` or `ConverseStream`. For more information, see [Model parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html).
 *
 * @public
 */
export interface InferenceConfiguration {
  /**
   * The maximum number of tokens to allow in the generated response. The default value is the maximum allowed value for the model that you are using. For more information, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html).
   *
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * The likelihood of the model selecting higher-probability options while generating a response. A lower value makes the model more likely to choose higher-probability options, while a higher value makes the model more likely to choose lower-probability options.
   *
   * The default value is the default value for the model that you are using. For more information, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html).
   *
   * @public
   */
  temperature?: number | undefined;

  /**
   * The percentage of most-likely candidates that the model considers for the next token. For example, if you choose a value of 0.8 for `topP`, the model selects from the top 80% of the probability distribution of tokens that could be next in the sequence.
   *
   * The default value is the default value for the model that you are using. For more information, see [Inference parameters for foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html).
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
 * A block containing error information when content processing fails.
 *
 * @public
 */
export interface ErrorBlock {
  /**
   * A human-readable error message describing what went wrong during content processing.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * A storage location in an Amazon S3 bucket.
 *
 * @public
 */
export interface S3Location {
  /**
   * An object URI starting with `s3://`.
   *
   * @public
   */
  uri: string | undefined;

  /**
   * If the bucket belongs to another AWS account, specify that account's ID.
   *
   * @public
   */
  bucketOwner?: string | undefined;
}

/**
 * The source of audio data, which can be provided either as raw bytes or a reference to an S3 location.
 *
 * @public
 */
export type AudioSource =
  | AudioSource.BytesMember
  | AudioSource.S3LocationMember
  | AudioSource.$UnknownMember;

/**
 * @public
 */
export namespace AudioSource {
  /**
   * Audio data encoded in base64.
   *
   * @public
   */
  export interface BytesMember {
    bytes: Uint8Array;
    s3Location?: never;
    $unknown?: never;
  }

  /**
   * A reference to audio data stored in an Amazon S3 bucket. To see which models support S3 uploads, see [Supported models and features for Converse](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference-supported-models-features.html).
   *
   * @public
   */
  export interface S3LocationMember {
    bytes?: never;
    s3Location: S3Location;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    bytes?: never;
    s3Location?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    bytes: (value: Uint8Array) => T;
    s3Location: (value: S3Location) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An audio content block that contains audio data in various supported formats.
 *
 * @public
 */
export interface AudioBlock {
  /**
   * The format of the audio data, such as MP3, WAV, FLAC, or other supported audio formats.
   *
   * @public
   */
  format: AudioFormat | undefined;

  /**
   * The source of the audio data, which can be provided as raw bytes or an S3 location.
   *
   * @public
   */
  source: AudioSource | undefined;

  /**
   * Error information if the audio block could not be processed or contains invalid data.
   *
   * @public
   */
  error?: ErrorBlock | undefined;
}

/**
 * Defines a section of content to be cached for reuse in subsequent API calls.
 *
 * @public
 */
export interface CachePointBlock {
  /**
   * Specifies the type of cache point within the CachePointBlock.
   *
   * @public
   */
  type: CachePointType | undefined;

  /**
   * Optional TTL duration for cache entries. When specified, enables extended TTL caching with the specified duration. When omitted, uses `type` value for caching behavior.
   *
   * @public
   */
  ttl?: CacheTTL | undefined;
}

/**
 * Specifies a character-level location within a document, providing precise positioning information for cited content using start and end character indices.
 *
 * @public
 */
export interface DocumentCharLocation {
  /**
   * The index of the document within the array of documents provided in the request.
   *
   * @public
   */
  documentIndex?: number | undefined;

  /**
   * The starting character position of the cited content within the document.
   *
   * @public
   */
  start?: number | undefined;

  /**
   * The ending character position of the cited content within the document.
   *
   * @public
   */
  end?: number | undefined;
}

/**
 * Specifies a chunk-level location within a document, providing positioning information for cited content using logical document segments or chunks.
 *
 * @public
 */
export interface DocumentChunkLocation {
  /**
   * The index of the document within the array of documents provided in the request.
   *
   * @public
   */
  documentIndex?: number | undefined;

  /**
   * The starting chunk identifier or index of the cited content within the document.
   *
   * @public
   */
  start?: number | undefined;

  /**
   * The ending chunk identifier or index of the cited content within the document.
   *
   * @public
   */
  end?: number | undefined;
}

/**
 * Specifies a page-level location within a document, providing positioning information for cited content using page numbers.
 *
 * @public
 */
export interface DocumentPageLocation {
  /**
   * The index of the document within the array of documents provided in the request.
   *
   * @public
   */
  documentIndex?: number | undefined;

  /**
   * The starting page number of the cited content within the document.
   *
   * @public
   */
  start?: number | undefined;

  /**
   * The ending page number of the cited content within the document.
   *
   * @public
   */
  end?: number | undefined;
}

/**
 * Specifies a search result location within the content array, providing positioning information for cited content using search result index and block positions.
 *
 * @public
 */
export interface SearchResultLocation {
  /**
   * The index of the search result content block where the cited content is found.
   *
   * @public
   */
  searchResultIndex?: number | undefined;

  /**
   * The starting position in the content array where the cited content begins.
   *
   * @public
   */
  start?: number | undefined;

  /**
   * The ending position in the content array where the cited content ends.
   *
   * @public
   */
  end?: number | undefined;
}

/**
 * Provides the URL and domain information for the website that was cited when performing a web search.
 *
 * @public
 */
export interface WebLocation {
  /**
   * The URL that was cited when performing a web search.
   *
   * @public
   */
  url?: string | undefined;

  /**
   * The domain that was cited when performing a web search.
   *
   * @public
   */
  domain?: string | undefined;
}

/**
 * Specifies the precise location within a source document where cited content can be found. This can include character-level positions, page numbers, or document chunks depending on the document type and indexing method.
 *
 * @public
 */
export type CitationLocation =
  | CitationLocation.DocumentCharMember
  | CitationLocation.DocumentChunkMember
  | CitationLocation.DocumentPageMember
  | CitationLocation.SearchResultLocationMember
  | CitationLocation.WebMember
  | CitationLocation.$UnknownMember;

/**
 * @public
 */
export namespace CitationLocation {
  /**
   * The web URL that was cited for this reference.
   *
   * @public
   */
  export interface WebMember {
    web: WebLocation;
    documentChar?: never;
    documentPage?: never;
    documentChunk?: never;
    searchResultLocation?: never;
    $unknown?: never;
  }

  /**
   * The character-level location within the document where the cited content is found.
   *
   * @public
   */
  export interface DocumentCharMember {
    web?: never;
    documentChar: DocumentCharLocation;
    documentPage?: never;
    documentChunk?: never;
    searchResultLocation?: never;
    $unknown?: never;
  }

  /**
   * The page-level location within the document where the cited content is found.
   *
   * @public
   */
  export interface DocumentPageMember {
    web?: never;
    documentChar?: never;
    documentPage: DocumentPageLocation;
    documentChunk?: never;
    searchResultLocation?: never;
    $unknown?: never;
  }

  /**
   * The chunk-level location within the document where the cited content is found, typically used for documents that have been segmented into logical chunks.
   *
   * @public
   */
  export interface DocumentChunkMember {
    web?: never;
    documentChar?: never;
    documentPage?: never;
    documentChunk: DocumentChunkLocation;
    searchResultLocation?: never;
    $unknown?: never;
  }

  /**
   * The search result location where the cited content is found, including the search result index and block positions within the content array.
   *
   * @public
   */
  export interface SearchResultLocationMember {
    web?: never;
    documentChar?: never;
    documentPage?: never;
    documentChunk?: never;
    searchResultLocation: SearchResultLocation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    web?: never;
    documentChar?: never;
    documentPage?: never;
    documentChunk?: never;
    searchResultLocation?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    web: (value: WebLocation) => T;
    documentChar: (value: DocumentCharLocation) => T;
    documentPage: (value: DocumentPageLocation) => T;
    documentChunk: (value: DocumentChunkLocation) => T;
    searchResultLocation: (value: SearchResultLocation) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains the actual text content from a source document that is being cited or referenced in the model's response.
 *
 * @public
 */
export type CitationSourceContent =
  | CitationSourceContent.TextMember
  | CitationSourceContent.$UnknownMember;

/**
 * @public
 */
export namespace CitationSourceContent {
  /**
   * The text content from the source document that is being cited.
   *
   * @public
   */
  export interface TextMember {
    text: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains information about a citation that references a specific source document. Citations provide traceability between the model's generated response and the source documents that informed that response.
 *
 * @public
 */
export interface Citation {
  /**
   * The title or identifier of the source document being cited.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The source from the original search result that provided the cited content.
   *
   * @public
   */
  source?: string | undefined;

  /**
   * The specific content from the source document that was referenced or cited in the generated response.
   *
   * @public
   */
  sourceContent?: CitationSourceContent[] | undefined;

  /**
   * The precise location within the source document where the cited content can be found, including character positions, page numbers, or chunk identifiers.
   *
   * @public
   */
  location?: CitationLocation | undefined;
}

/**
 * Contains the generated text content that corresponds to or is supported by a citation from a source document.
 *
 * @public
 */
export type CitationGeneratedContent =
  | CitationGeneratedContent.TextMember
  | CitationGeneratedContent.$UnknownMember;

/**
 * @public
 */
export namespace CitationGeneratedContent {
  /**
   * The text content that was generated by the model and is supported by the associated citation.
   *
   * @public
   */
  export interface TextMember {
    text: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A content block that contains both generated text and associated citation information. This block type is returned when document citations are enabled, providing traceability between the generated content and the source documents that informed the response.
 *
 * @public
 */
export interface CitationsContentBlock {
  /**
   * The generated content that is supported by the associated citations.
   *
   * @public
   */
  content?: CitationGeneratedContent[] | undefined;

  /**
   * An array of citations that reference the source documents used to generate the associated content.
   *
   * @public
   */
  citations?: Citation[] | undefined;
}

/**
 * Configuration settings for enabling and controlling document citations in Converse API responses. When enabled, the model can include citation information that links generated content back to specific source documents.
 *
 * @public
 */
export interface CitationsConfig {
  /**
   * Specifies whether citations from the selected document should be used in the model's response. When set to true, the model can generate citations that reference the source documents used to inform the response.
   *
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * Contains the actual content of a document that can be processed by the model and potentially cited in the response.
 *
 * @public
 */
export type DocumentContentBlock =
  | DocumentContentBlock.TextMember
  | DocumentContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace DocumentContentBlock {
  /**
   * The text content of the document.
   *
   * @public
   */
  export interface TextMember {
    text: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains the content of a document.
 *
 * @public
 */
export type DocumentSource =
  | DocumentSource.BytesMember
  | DocumentSource.ContentMember
  | DocumentSource.S3LocationMember
  | DocumentSource.TextMember
  | DocumentSource.$UnknownMember;

/**
 * @public
 */
export namespace DocumentSource {
  /**
   * The raw bytes for the document. If you use an Amazon Web Services SDK, you don't need to encode the bytes in base64.
   *
   * @public
   */
  export interface BytesMember {
    bytes: Uint8Array;
    s3Location?: never;
    text?: never;
    content?: never;
    $unknown?: never;
  }

  /**
   * The location of a document object in an Amazon S3 bucket. To see which models support S3 uploads, see [Supported models and features for Converse](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference-supported-models-features.html).
   *
   * @public
   */
  export interface S3LocationMember {
    bytes?: never;
    s3Location: S3Location;
    text?: never;
    content?: never;
    $unknown?: never;
  }

  /**
   * The text content of the document source.
   *
   * @public
   */
  export interface TextMember {
    bytes?: never;
    s3Location?: never;
    text: string;
    content?: never;
    $unknown?: never;
  }

  /**
   * The structured content of the document source, which may include various content blocks such as text, images, or other document elements.
   *
   * @public
   */
  export interface ContentMember {
    bytes?: never;
    s3Location?: never;
    text?: never;
    content: DocumentContentBlock[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    bytes?: never;
    s3Location?: never;
    text?: never;
    content?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    bytes: (value: Uint8Array) => T;
    s3Location: (value: S3Location) => T;
    text: (value: string) => T;
    content: (value: DocumentContentBlock[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A document to include in a message.
 *
 * @public
 */
export interface DocumentBlock {
  /**
   * The format of a document, or its extension.
   *
   * @public
   */
  format?: DocumentFormat | undefined;

  /**
   * A name for the document. The name can only contain the following characters:
   *
   * - Alphanumeric characters
   * - Whitespace characters (no more than one in a row)
   * - Hyphens
   * - Parentheses
   * - Square brackets
   *
   * > **Note:** This field is vulnerable to prompt injections, because the model might inadvertently interpret it as instructions. Therefore, we recommend that you specify a neutral name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Contains the content of the document.
   *
   * @public
   */
  source: DocumentSource | undefined;

  /**
   * Contextual information about how the document should be processed or interpreted by the model when generating citations.
   *
   * @public
   */
  context?: string | undefined;

  /**
   * Configuration settings that control how citations should be generated for this specific document.
   *
   * @public
   */
  citations?: CitationsConfig | undefined;
}

/**
 * The image source (image bytes) of the guardrail converse image source.
 *
 * @public
 */
export type GuardrailConverseImageSource =
  | GuardrailConverseImageSource.BytesMember
  | GuardrailConverseImageSource.$UnknownMember;

/**
 * @public
 */
export namespace GuardrailConverseImageSource {
  /**
   * The raw image bytes for the image.
   *
   * @public
   */
  export interface BytesMember {
    bytes: Uint8Array;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    bytes?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    bytes: (value: Uint8Array) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An image block that contains images that you want to assess with a guardrail.
 *
 * @public
 */
export interface GuardrailConverseImageBlock {
  /**
   * The format details for the image type of the guardrail converse image block.
   *
   * @public
   */
  format: GuardrailConverseImageFormat | undefined;

  /**
   * The image source (image bytes) of the guardrail converse image block.
   *
   * @public
   */
  source: GuardrailConverseImageSource | undefined;
}

/**
 * A text block that contains text that you want to assess with a guardrail. For more information, see [GuardrailConverseContentBlock](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_GuardrailConverseContentBlock.html).
 *
 * @public
 */
export interface GuardrailConverseTextBlock {
  /**
   * The text that you want to guard.
   *
   * @public
   */
  text: string | undefined;

  /**
   * The qualifier details for the guardrails contextual grounding filter.
   *
   * @public
   */
  qualifiers?: GuardrailConverseContentQualifier[] | undefined;
}

/**
 * A content block for selective guarding with the [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html) or [ConverseStream](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html) API operations.
 *
 * @public
 */
export type GuardrailConverseContentBlock =
  | GuardrailConverseContentBlock.ImageMember
  | GuardrailConverseContentBlock.TextMember
  | GuardrailConverseContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace GuardrailConverseContentBlock {
  /**
   * The text to guard.
   *
   * @public
   */
  export interface TextMember {
    text: GuardrailConverseTextBlock;
    image?: never;
    $unknown?: never;
  }

  /**
   * Image within converse content block to be evaluated by the guardrail.
   *
   * @public
   */
  export interface ImageMember {
    text?: never;
    image: GuardrailConverseImageBlock;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    image?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: GuardrailConverseTextBlock) => T;
    image: (value: GuardrailConverseImageBlock) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The source for an image.
 *
 * @public
 */
export type ImageSource =
  | ImageSource.BytesMember
  | ImageSource.S3LocationMember
  | ImageSource.$UnknownMember;

/**
 * @public
 */
export namespace ImageSource {
  /**
   * The raw image bytes for the image. If you use an AWS SDK, you don't need to encode the image bytes in base64.
   *
   * @public
   */
  export interface BytesMember {
    bytes: Uint8Array;
    s3Location?: never;
    $unknown?: never;
  }

  /**
   * The location of an image object in an Amazon S3 bucket. To see which models support S3 uploads, see [Supported models and features for Converse](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference-supported-models-features.html).
   *
   * @public
   */
  export interface S3LocationMember {
    bytes?: never;
    s3Location: S3Location;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    bytes?: never;
    s3Location?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    bytes: (value: Uint8Array) => T;
    s3Location: (value: S3Location) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Image content for a message.
 *
 * @public
 */
export interface ImageBlock {
  /**
   * The format of the image.
   *
   * @public
   */
  format: ImageFormat | undefined;

  /**
   * The source for the image.
   *
   * @public
   */
  source: ImageSource | undefined;

  /**
   * Error information if the image block could not be processed or contains invalid data.
   *
   * @public
   */
  error?: ErrorBlock | undefined;
}

/**
 * Contains the reasoning that the model used to return the output.
 *
 * @public
 */
export interface ReasoningTextBlock {
  /**
   * The reasoning that the model used to return the output.
   *
   * @public
   */
  text: string | undefined;

  /**
   * A token that verifies that the reasoning text was generated by the model. If you pass a reasoning block back to the API in a multi-turn conversation, include the text and its signature unmodified.
   *
   * @public
   */
  signature?: string | undefined;
}

/**
 * Contains content regarding the reasoning that is carried out by the model with respect to the content in the content block. Reasoning refers to a Chain of Thought (CoT) that the model generates to enhance the accuracy of its final response.
 *
 * @public
 */
export type ReasoningContentBlock =
  | ReasoningContentBlock.ReasoningTextMember
  | ReasoningContentBlock.RedactedContentMember
  | ReasoningContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace ReasoningContentBlock {
  /**
   * The reasoning that the model used to return the output.
   *
   * @public
   */
  export interface ReasoningTextMember {
    reasoningText: ReasoningTextBlock;
    redactedContent?: never;
    $unknown?: never;
  }

  /**
   * The content in the reasoning that was encrypted by the model provider for safety reasons. The encryption doesn't affect the quality of responses.
   *
   * @public
   */
  export interface RedactedContentMember {
    reasoningText?: never;
    redactedContent: Uint8Array;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    reasoningText?: never;
    redactedContent?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    reasoningText: (value: ReasoningTextBlock) => T;
    redactedContent: (value: Uint8Array) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A block within a search result that contains the content.
 *
 * @public
 */
export interface SearchResultContentBlock {
  /**
   * The actual text content
   *
   * @public
   */
  text: string | undefined;
}

/**
 * A search result block that enables natural citations with proper source attribution for retrieved content.
 *
 * > **Note:** This field is only supported by Anthropic Claude Opus 4.1, Opus 4, Sonnet 4.5, Sonnet 4, Sonnet 3.7, and 3.5 Haiku models.
 *
 * @public
 */
export interface SearchResultBlock {
  /**
   * The source URL or identifier for the content.
   *
   * @public
   */
  source: string | undefined;

  /**
   * A descriptive title for the search result.
   *
   * @public
   */
  title: string | undefined;

  /**
   * An array of search result content block.
   *
   * @public
   */
  content: SearchResultContentBlock[] | undefined;

  /**
   * Configuration setting for citations
   *
   * @public
   */
  citations?: CitationsConfig | undefined;
}

/**
 * A reference to a tool in the tool configuration. Used with `ToolAdditionBlock` and `ToolRemovalBlock` to identify which tool to add or remove mid-conversation.
 *
 * @public
 */
export interface ToolReference {
  /**
   * The type of tool reference.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The name of the tool. Must match the name of a tool declared in the top-level tool configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The name of the MCP server that provides the tool. Required when referencing an MCP tool.
   *
   * @public
   */
  serverName?: string | undefined;
}

/**
 * A content block for adding a tool to the available tool set mid-conversation. Each block references a single tool via its `tool` field. Use within a `system` role message to make a tool available without re-sending the full tool configuration.
 *
 * @public
 */
export interface ToolAdditionBlock {
  /**
   * A reference to the tool to add to the available tool set.
   *
   * @public
   */
  tool: ToolReference | undefined;
}

/**
 * A content block for removing a tool from the available tool set mid-conversation. Each block references a single tool via its `tool` field. Use within a `system` role message to remove a tool without re-sending the full tool configuration.
 *
 * @public
 */
export interface ToolRemovalBlock {
  /**
   * A reference to the tool to remove from the available tool set.
   *
   * @public
   */
  tool: ToolReference | undefined;
}

/**
 * A video source. You can upload a smaller video as a base64-encoded string as long as the encoded file is less than 25MB. You can also transfer videos up to 1GB in size from an S3 bucket.
 *
 * @public
 */
export type VideoSource =
  | VideoSource.BytesMember
  | VideoSource.S3LocationMember
  | VideoSource.$UnknownMember;

/**
 * @public
 */
export namespace VideoSource {
  /**
   * Video content encoded in base64.
   *
   * @public
   */
  export interface BytesMember {
    bytes: Uint8Array;
    s3Location?: never;
    $unknown?: never;
  }

  /**
   * The location of a video object in an Amazon S3 bucket. To see which models support S3 uploads, see [Supported models and features for Converse](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference-supported-models-features.html).
   *
   * @public
   */
  export interface S3LocationMember {
    bytes?: never;
    s3Location: S3Location;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    bytes?: never;
    s3Location?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    bytes: (value: Uint8Array) => T;
    s3Location: (value: S3Location) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A video block.
 *
 * @public
 */
export interface VideoBlock {
  /**
   * The block's format.
   *
   * @public
   */
  format: VideoFormat | undefined;

  /**
   * The block's source.
   *
   * @public
   */
  source: VideoSource | undefined;
}

/**
 * The tool result content block. For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export type ToolResultContentBlock =
  | ToolResultContentBlock.DocumentMember
  | ToolResultContentBlock.ImageMember
  | ToolResultContentBlock.JsonMember
  | ToolResultContentBlock.SearchResultMember
  | ToolResultContentBlock.TextMember
  | ToolResultContentBlock.VideoMember
  | ToolResultContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace ToolResultContentBlock {
  /**
   * A tool result that is JSON format data.
   *
   * @public
   */
  export interface JsonMember {
    json: __DocumentType;
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    searchResult?: never;
    $unknown?: never;
  }

  /**
   * A tool result that is text.
   *
   * @public
   */
  export interface TextMember {
    json?: never;
    text: string;
    image?: never;
    document?: never;
    video?: never;
    searchResult?: never;
    $unknown?: never;
  }

  /**
   * A tool result that is an image.
   *
   * > **Note:** This field is only supported by Amazon Nova and Anthropic Claude 3 and 4 models.
   *
   * @public
   */
  export interface ImageMember {
    json?: never;
    text?: never;
    image: ImageBlock;
    document?: never;
    video?: never;
    searchResult?: never;
    $unknown?: never;
  }

  /**
   * A tool result that is a document.
   *
   * @public
   */
  export interface DocumentMember {
    json?: never;
    text?: never;
    image?: never;
    document: DocumentBlock;
    video?: never;
    searchResult?: never;
    $unknown?: never;
  }

  /**
   * A tool result that is video.
   *
   * @public
   */
  export interface VideoMember {
    json?: never;
    text?: never;
    image?: never;
    document?: never;
    video: VideoBlock;
    searchResult?: never;
    $unknown?: never;
  }

  /**
   * A tool result that is a search result.
   *
   * @public
   */
  export interface SearchResultMember {
    json?: never;
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    searchResult: SearchResultBlock;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    json?: never;
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    searchResult?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    json: (value: __DocumentType) => T;
    text: (value: string) => T;
    image: (value: ImageBlock) => T;
    document: (value: DocumentBlock) => T;
    video: (value: VideoBlock) => T;
    searchResult: (value: SearchResultBlock) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A tool result block that contains the results for a tool request that the model previously made. For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export interface ToolResultBlock {
  /**
   * The ID of the tool request that this is the result for.
   *
   * @public
   */
  toolUseId: string | undefined;

  /**
   * The content for tool result content block.
   *
   * @public
   */
  content: ToolResultContentBlock[] | undefined;

  /**
   * The status for the tool result content block.
   *
   * > **Note:** This field is only supported by Amazon Nova and Anthropic Claude 3 and 4 models.
   *
   * @public
   */
  status?: ToolResultStatus | undefined;

  /**
   * The type for the tool result content block.
   *
   * @public
   */
  type?: string | undefined;
}

/**
 * A tool use content block. Contains information about a tool that the model is requesting be run., The model uses the result from the tool to generate a response. For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export interface ToolUseBlock {
  /**
   * The ID for the tool request.
   *
   * @public
   */
  toolUseId: string | undefined;

  /**
   * The name of the tool that the model wants to use.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The input to pass to the tool.
   *
   * @public
   */
  input: __DocumentType | undefined;

  /**
   * The type for the tool request.
   *
   * @public
   */
  type?: ToolUseType | undefined;
}

/**
 * A block of content for a message that you pass to, or receive from, a model with the [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html) or [ConverseStream](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html) API operations.
 *
 * @public
 */
export type ContentBlock =
  | ContentBlock.AudioMember
  | ContentBlock.CachePointMember
  | ContentBlock.CitationsContentMember
  | ContentBlock.DocumentMember
  | ContentBlock.GuardContentMember
  | ContentBlock.ImageMember
  | ContentBlock.ReasoningContentMember
  | ContentBlock.SearchResultMember
  | ContentBlock.TextMember
  | ContentBlock.ToolAdditionMember
  | ContentBlock.ToolRemovalMember
  | ContentBlock.ToolResultMember
  | ContentBlock.ToolUseMember
  | ContentBlock.VideoMember
  | ContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace ContentBlock {
  /**
   * Text to include in the message.
   *
   * @public
   */
  export interface TextMember {
    text: string;
    image?: never;
    document?: never;
    video?: never;
    audio?: never;
    toolUse?: never;
    toolResult?: never;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent?: never;
    searchResult?: never;
    toolAddition?: never;
    toolRemoval?: never;
    $unknown?: never;
  }

  /**
   * Image to include in the message.
   *
   * > **Note:** This field is only supported by Anthropic Claude 3 models.
   *
   * @public
   */
  export interface ImageMember {
    text?: never;
    image: ImageBlock;
    document?: never;
    video?: never;
    audio?: never;
    toolUse?: never;
    toolResult?: never;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent?: never;
    searchResult?: never;
    toolAddition?: never;
    toolRemoval?: never;
    $unknown?: never;
  }

  /**
   * A document to include in the message.
   *
   * @public
   */
  export interface DocumentMember {
    text?: never;
    image?: never;
    document: DocumentBlock;
    video?: never;
    audio?: never;
    toolUse?: never;
    toolResult?: never;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent?: never;
    searchResult?: never;
    toolAddition?: never;
    toolRemoval?: never;
    $unknown?: never;
  }

  /**
   * Video to include in the message.
   *
   * @public
   */
  export interface VideoMember {
    text?: never;
    image?: never;
    document?: never;
    video: VideoBlock;
    audio?: never;
    toolUse?: never;
    toolResult?: never;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent?: never;
    searchResult?: never;
    toolAddition?: never;
    toolRemoval?: never;
    $unknown?: never;
  }

  /**
   * An audio content block containing audio data in the conversation.
   *
   * @public
   */
  export interface AudioMember {
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    audio: AudioBlock;
    toolUse?: never;
    toolResult?: never;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent?: never;
    searchResult?: never;
    toolAddition?: never;
    toolRemoval?: never;
    $unknown?: never;
  }

  /**
   * Information about a tool use request from a model.
   *
   * @public
   */
  export interface ToolUseMember {
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    audio?: never;
    toolUse: ToolUseBlock;
    toolResult?: never;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent?: never;
    searchResult?: never;
    toolAddition?: never;
    toolRemoval?: never;
    $unknown?: never;
  }

  /**
   * The result for a tool request that a model makes.
   *
   * @public
   */
  export interface ToolResultMember {
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    audio?: never;
    toolUse?: never;
    toolResult: ToolResultBlock;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent?: never;
    searchResult?: never;
    toolAddition?: never;
    toolRemoval?: never;
    $unknown?: never;
  }

  /**
   * Contains the content to assess with the guardrail. If you don't specify `guardContent` in a call to the Converse API, the guardrail (if passed in the Converse API) assesses the entire message.
   *
   * For more information, see *Use a guardrail with the Converse API* in the *Amazon Bedrock User Guide*.
   *
   * @public
   */
  export interface GuardContentMember {
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    audio?: never;
    toolUse?: never;
    toolResult?: never;
    guardContent: GuardrailConverseContentBlock;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent?: never;
    searchResult?: never;
    toolAddition?: never;
    toolRemoval?: never;
    $unknown?: never;
  }

  /**
   * CachePoint to include in the message.
   *
   * @public
   */
  export interface CachePointMember {
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    audio?: never;
    toolUse?: never;
    toolResult?: never;
    guardContent?: never;
    cachePoint: CachePointBlock;
    reasoningContent?: never;
    citationsContent?: never;
    searchResult?: never;
    toolAddition?: never;
    toolRemoval?: never;
    $unknown?: never;
  }

  /**
   * Contains content regarding the reasoning that is carried out by the model. Reasoning refers to a Chain of Thought (CoT) that the model generates to enhance the accuracy of its final response.
   *
   * @public
   */
  export interface ReasoningContentMember {
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    audio?: never;
    toolUse?: never;
    toolResult?: never;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent: ReasoningContentBlock;
    citationsContent?: never;
    searchResult?: never;
    toolAddition?: never;
    toolRemoval?: never;
    $unknown?: never;
  }

  /**
   * A content block that contains both generated text and associated citation information, providing traceability between the response and source documents.
   *
   * @public
   */
  export interface CitationsContentMember {
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    audio?: never;
    toolUse?: never;
    toolResult?: never;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent: CitationsContentBlock;
    searchResult?: never;
    toolAddition?: never;
    toolRemoval?: never;
    $unknown?: never;
  }

  /**
   * Search result to include in the message.
   *
   * @public
   */
  export interface SearchResultMember {
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    audio?: never;
    toolUse?: never;
    toolResult?: never;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent?: never;
    searchResult: SearchResultBlock;
    toolAddition?: never;
    toolRemoval?: never;
    $unknown?: never;
  }

  /**
   * A content block for adding a tool to the available tool set mid-conversation. Each block references a single tool via its `tool` field. Use within a `system` role message to make a tool available without re-sending the full tool configuration.
   *
   * @public
   */
  export interface ToolAdditionMember {
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    audio?: never;
    toolUse?: never;
    toolResult?: never;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent?: never;
    searchResult?: never;
    toolAddition: ToolAdditionBlock;
    toolRemoval?: never;
    $unknown?: never;
  }

  /**
   * A content block for removing a tool from the available tool set mid-conversation. Each block references a single tool via its `tool` field. Use within a `system` role message to remove a tool without re-sending the full tool configuration.
   *
   * @public
   */
  export interface ToolRemovalMember {
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    audio?: never;
    toolUse?: never;
    toolResult?: never;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent?: never;
    searchResult?: never;
    toolAddition?: never;
    toolRemoval: ToolRemovalBlock;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    audio?: never;
    toolUse?: never;
    toolResult?: never;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent?: never;
    searchResult?: never;
    toolAddition?: never;
    toolRemoval?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    image: (value: ImageBlock) => T;
    document: (value: DocumentBlock) => T;
    video: (value: VideoBlock) => T;
    audio: (value: AudioBlock) => T;
    toolUse: (value: ToolUseBlock) => T;
    toolResult: (value: ToolResultBlock) => T;
    guardContent: (value: GuardrailConverseContentBlock) => T;
    cachePoint: (value: CachePointBlock) => T;
    reasoningContent: (value: ReasoningContentBlock) => T;
    citationsContent: (value: CitationsContentBlock) => T;
    searchResult: (value: SearchResultBlock) => T;
    toolAddition: (value: ToolAdditionBlock) => T;
    toolRemoval: (value: ToolRemovalBlock) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A message input, or returned from, a call to [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html) or [ConverseStream](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html).
 *
 * @public
 */
export interface Message {
  /**
   * The role that the message plays in the message.
   *
   * @public
   */
  role: ConversationRole | undefined;

  /**
   * The message content. Note the following restrictions:
   *
   * - You can include up to 20 images. Each image's size, height, and width must be no more than 3.75 MB, 8000 px, and 8000 px, respectively.
   * - You can include up to five documents. Each document's size must be no more than 4.5 MB.
   * - If you include a `ContentBlock` with a `document` field in the array, you must also include a `ContentBlock` with a `text` field.
   * - You can only include images and documents if the `role` is `user`.
   *
   * @public
   */
  content: ContentBlock[] | undefined;
}

/**
 * JSON schema structured output format options.
 *
 * @public
 */
export interface JsonSchemaDefinition {
  /**
   * The JSON schema to constrain the model's output. For more information, see [JSON Schema Reference](https://json-schema.org/understanding-json-schema/reference).
   *
   * @public
   */
  schema: string | undefined;

  /**
   * The name of the JSON schema.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the JSON schema.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * The structure that the model's output must adhere to.
 *
 * @public
 */
export type OutputFormatStructure =
  | OutputFormatStructure.JsonSchemaMember
  | OutputFormatStructure.$UnknownMember;

/**
 * @public
 */
export namespace OutputFormatStructure {
  /**
   * A JSON schema structure that the model's output must adhere to.
   *
   * @public
   */
  export interface JsonSchemaMember {
    jsonSchema: JsonSchemaDefinition;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    jsonSchema?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    jsonSchema: (value: JsonSchemaDefinition) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Structured output parameters to control the model's response.
 *
 * @public
 */
export interface OutputFormat {
  /**
   * The type of structured output format.
   *
   * @public
   */
  type: OutputFormatType | undefined;

  /**
   * The structure that the model's output must adhere to.
   *
   * @public
   */
  structure: OutputFormatStructure | undefined;
}

/**
 * Output configuration for a model response in a call to [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html) or [ConverseStream](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html).
 *
 * @public
 */
export interface OutputConfig {
  /**
   * Structured output parameters to control the model's text response.
   *
   * @public
   */
  textFormat?: OutputFormat | undefined;

  /**
   * The effort level for the model to use when generating a response. Higher effort levels allow the model to spend more time reasoning before responding. Supported values are `low`, `medium`, `high`, `xhigh`, and `max`.
   *
   * > **Note:** When extended thinking is disabled, the effort level is capped at `high`. Use effort `high` or below, or enable thinking to use higher effort levels.
   *
   * @public
   */
  effort?: string | undefined;
}

/**
 * Performance settings for a model.
 *
 * @public
 */
export interface PerformanceConfiguration {
  /**
   * To use a latency-optimized version of the model, set to `optimized`.
   *
   * @public
   */
  latency?: PerformanceConfigLatency | undefined;
}

/**
 * Contains a map of variables in a prompt from Prompt management to an object containing the values to fill in for them when running model invocation. For more information, see [How Prompt management works](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-how.html).
 *
 * @public
 */
export type PromptVariableValues =
  | PromptVariableValues.TextMember
  | PromptVariableValues.$UnknownMember;

/**
 * @public
 */
export namespace PromptVariableValues {
  /**
   * The text value that the variable maps to.
   *
   * @public
   */
  export interface TextMember {
    text: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Specifies the processing tier configuration used for serving the request.
 *
 * @public
 */
export interface ServiceTier {
  /**
   * Specifies the processing tier type used for serving the request.
   *
   * @public
   */
  type: ServiceTierType | undefined;
}

/**
 * Contains configurations for instructions to provide the model for how to handle input. To learn more, see [Using the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference-call.html).
 *
 * @public
 */
export type SystemContentBlock =
  | SystemContentBlock.CachePointMember
  | SystemContentBlock.GuardContentMember
  | SystemContentBlock.TextMember
  | SystemContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace SystemContentBlock {
  /**
   * A system prompt for the model.
   *
   * @public
   */
  export interface TextMember {
    text: string;
    guardContent?: never;
    cachePoint?: never;
    $unknown?: never;
  }

  /**
   * A content block to assess with the guardrail. Use with the [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html) or [ConverseStream](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html) API operations.
   *
   * For more information, see *Use a guardrail with the Converse API* in the *Amazon Bedrock User Guide*.
   *
   * @public
   */
  export interface GuardContentMember {
    text?: never;
    guardContent: GuardrailConverseContentBlock;
    cachePoint?: never;
    $unknown?: never;
  }

  /**
   * CachePoint to include in the system prompt.
   *
   * @public
   */
  export interface CachePointMember {
    text?: never;
    guardContent?: never;
    cachePoint: CachePointBlock;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    guardContent?: never;
    cachePoint?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    guardContent: (value: GuardrailConverseContentBlock) => T;
    cachePoint: (value: CachePointBlock) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The model must request at least one tool (no text is generated). For example, `\{"any" : \{\}\}`. For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export interface AnyToolChoice {}

/**
 * The Model automatically decides if a tool should be called or whether to generate text instead. For example, `\{"auto" : \{\}\}`. For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide
 *
 * @public
 */
export interface AutoToolChoice {}

/**
 * The model must request a specific tool. For example, `\{"tool" : \{"name" : "Your tool name"\}\}`. For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide
 *
 * > **Note:** This field is only supported by Anthropic Claude 3 models.
 *
 * @public
 */
export interface SpecificToolChoice {
  /**
   * The name of the tool that the model must request.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * Determines which tools the model should request in a call to `Converse` or `ConverseStream`. For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export type ToolChoice =
  | ToolChoice.AnyMember
  | ToolChoice.AutoMember
  | ToolChoice.ToolMember
  | ToolChoice.$UnknownMember;

/**
 * @public
 */
export namespace ToolChoice {
  /**
   * (Default). The Model automatically decides if a tool should be called or whether to generate text instead.
   *
   * @public
   */
  export interface AutoMember {
    auto: AutoToolChoice;
    any?: never;
    tool?: never;
    $unknown?: never;
  }

  /**
   * The model must request at least one tool (no text is generated).
   *
   * @public
   */
  export interface AnyMember {
    auto?: never;
    any: AnyToolChoice;
    tool?: never;
    $unknown?: never;
  }

  /**
   * The Model must request the specified tool. Only supported by Anthropic Claude 3 and Amazon Nova models.
   *
   * @public
   */
  export interface ToolMember {
    auto?: never;
    any?: never;
    tool: SpecificToolChoice;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    auto?: never;
    any?: never;
    tool?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    auto: (value: AutoToolChoice) => T;
    any: (value: AnyToolChoice) => T;
    tool: (value: SpecificToolChoice) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Specifies a system-defined tool for the model to use. *System-defined tools* are tools that are created and provided by the model provider.
 *
 * @public
 */
export interface SystemTool {
  /**
   * The name of the system-defined tool that you want to call.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * The schema for the tool. The top level schema type must be `object`. For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export type ToolInputSchema =
  | ToolInputSchema.JsonMember
  | ToolInputSchema.$UnknownMember;

/**
 * @public
 */
export namespace ToolInputSchema {
  /**
   * The JSON schema for the tool. For more information, see [JSON Schema Reference](https://json-schema.org/understanding-json-schema/reference).
   *
   * @public
   */
  export interface JsonMember {
    json: __DocumentType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    json?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    json: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The specification for the tool. For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export interface ToolSpecification {
  /**
   * The name for the tool.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description for the tool.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The input schema for the tool in JSON format.
   *
   * @public
   */
  inputSchema: ToolInputSchema | undefined;

  /**
   * Flag to enable structured output enforcement on a tool usage response.
   *
   * @public
   */
  strict?: boolean | undefined;
}

/**
 * Information about a tool that you can use with the Converse API. For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export type Tool =
  | Tool.CachePointMember
  | Tool.SystemToolMember
  | Tool.ToolSpecMember
  | Tool.$UnknownMember;

/**
 * @public
 */
export namespace Tool {
  /**
   * The specfication for the tool.
   *
   * @public
   */
  export interface ToolSpecMember {
    toolSpec: ToolSpecification;
    systemTool?: never;
    cachePoint?: never;
    $unknown?: never;
  }

  /**
   * Specifies the system-defined tool that you want use.
   *
   * @public
   */
  export interface SystemToolMember {
    toolSpec?: never;
    systemTool: SystemTool;
    cachePoint?: never;
    $unknown?: never;
  }

  /**
   * CachePoint to include in the tool configuration.
   *
   * @public
   */
  export interface CachePointMember {
    toolSpec?: never;
    systemTool?: never;
    cachePoint: CachePointBlock;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    toolSpec?: never;
    systemTool?: never;
    cachePoint?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    toolSpec: (value: ToolSpecification) => T;
    systemTool: (value: SystemTool) => T;
    cachePoint: (value: CachePointBlock) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration information for the tools that you pass to a model. For more information, see [Tool use (function calling)](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export interface ToolConfiguration {
  /**
   * An array of tools that you want to pass to a model.
   *
   * @public
   */
  tools: Tool[] | undefined;

  /**
   * If supported by model, forces the model to request a tool.
   *
   * @public
   */
  toolChoice?: ToolChoice | undefined;
}

/**
 * @public
 */
export interface ConverseRequest {
  /**
   * Specifies the model or throughput with which to run inference, or the prompt resource to use in inference. The value depends on the resource that you use:
   *
   * - If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see [Amazon Bedrock base model IDs (on-demand throughput)](https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#model-ids-arns) in the Amazon Bedrock User Guide.
   * - If you use an inference profile, specify the inference profile ID or its ARN. For a list of inference profile IDs, see [Supported Regions and models for cross-region inference](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference-support.html) in the Amazon Bedrock User Guide.
   * - If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see [Run inference using a Provisioned Throughput](https://docs.aws.amazon.com/bedrock/latest/userguide/prov-thru-use.html) in the Amazon Bedrock User Guide.
   * - If you use a custom model, first purchase Provisioned Throughput for it. Then specify the ARN of the resulting provisioned model. For more information, see [Use a custom model in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-use.html) in the Amazon Bedrock User Guide.
   * - To include a prompt that was defined in [Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html), specify the ARN of the prompt version to use.
   *
   * The Converse API doesn't support [imported models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html).
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The messages that you want to send to the model.
   *
   * @public
   */
  messages?: Message[] | undefined;

  /**
   * A prompt that provides instructions or context to the model about the task it should perform, or the persona it should adopt during the conversation.
   *
   * @public
   */
  system?: SystemContentBlock[] | undefined;

  /**
   * Inference parameters to pass to the model. `Converse` and `ConverseStream` support a base set of inference parameters. If you need to pass additional parameters that the model supports, use the `additionalModelRequestFields` request field.
   *
   * @public
   */
  inferenceConfig?: InferenceConfiguration | undefined;

  /**
   * Configuration information for the tools that the model can use when generating a response.
   *
   * For information about models that support tool use, see [Supported models and model features](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features).
   *
   * @public
   */
  toolConfig?: ToolConfiguration | undefined;

  /**
   * Configuration information for a guardrail that you want to use in the request. If you include `guardContent` blocks in the `content` field in the `messages` field, the guardrail operates only on those messages. If you include no `guardContent` blocks, the guardrail operates on all messages in the request body and in any included prompt resource.
   *
   * @public
   */
  guardrailConfig?: GuardrailConfiguration | undefined;

  /**
   * Additional inference parameters that the model supports, beyond the base set of inference parameters that `Converse` and `ConverseStream` support in the `inferenceConfig` field. For more information, see [Model parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html).
   *
   * @public
   */
  additionalModelRequestFields?: __DocumentType | undefined;

  /**
   * Contains a map of variables in a prompt from Prompt management to objects containing the values to fill in for them when running model invocation. This field is ignored if you don't specify a prompt resource in the `modelId` field.
   *
   * @public
   */
  promptVariables?: Record<string, PromptVariableValues> | undefined;

  /**
   * Additional model parameters field paths to return in the response. `Converse` and `ConverseStream` return the requested fields as a JSON Pointer object in the `additionalModelResponseFields` field. The following is example JSON for `additionalModelResponseFieldPaths`.
   *
   * `[ "/stop_sequence" ]`
   *
   * For information about the JSON Pointer syntax, see the [Internet Engineering Task Force (IETF)](https://datatracker.ietf.org/doc/html/rfc6901) documentation.
   *
   * `Converse` and `ConverseStream` reject an empty JSON Pointer or incorrectly structured JSON Pointer with a `400` error code. if the JSON Pointer is valid, but the requested field is not in the model response, it is ignored by `Converse`.
   *
   * @public
   */
  additionalModelResponseFieldPaths?: string[] | undefined;

  /**
   * Key-value pairs that you can use to filter invocation logs.
   *
   * @public
   */
  requestMetadata?: Record<string, string> | undefined;

  /**
   * Model performance settings for the request.
   *
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;

  /**
   * Specifies the processing tier configuration used for serving the request.
   *
   * @public
   */
  serviceTier?: ServiceTier | undefined;

  /**
   * Output configuration for a model response.
   *
   * @public
   */
  outputConfig?: OutputConfig | undefined;
}

/**
 * Metrics for a call to [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html).
 *
 * @public
 */
export interface ConverseMetrics {
  /**
   * The latency of the call to `Converse`, in milliseconds.
   *
   * @public
   */
  latencyMs: number | undefined;
}

/**
 * The output from a call to [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html).
 *
 * @public
 */
export type ConverseOutput =
  | ConverseOutput.MessageMember
  | ConverseOutput.$UnknownMember;

/**
 * @public
 */
export namespace ConverseOutput {
  /**
   * The message that the model generates.
   *
   * @public
   */
  export interface MessageMember {
    message: Message;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    message?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    message: (value: Message) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A Top level guardrail trace object. For more information, see [ConverseTrace](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseTrace.html).
 *
 * @public
 */
export interface GuardrailTraceAssessment {
  /**
   * The output from the model.
   *
   * @public
   */
  modelOutput?: string[] | undefined;

  /**
   * The input assessment.
   *
   * @public
   */
  inputAssessment?: Record<string, GuardrailAssessment> | undefined;

  /**
   * the output assessments.
   *
   * @public
   */
  outputAssessments?: Record<string, GuardrailAssessment[]> | undefined;

  /**
   * Provides the reason for the action taken when harmful content is detected.
   *
   * @public
   */
  actionReason?: string | undefined;
}

/**
 * A prompt router trace.
 *
 * @public
 */
export interface PromptRouterTrace {
  /**
   * The ID of the invoked model.
   *
   * @public
   */
  invokedModelId?: string | undefined;
}

/**
 * The trace object in a response from [Converse](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html).
 *
 * @public
 */
export interface ConverseTrace {
  /**
   * The guardrail trace object.
   *
   * @public
   */
  guardrail?: GuardrailTraceAssessment | undefined;

  /**
   * The request's prompt router.
   *
   * @public
   */
  promptRouter?: PromptRouterTrace | undefined;
}

/**
 * Cache creation metrics for a specific TTL duration
 *
 * @public
 */
export interface CacheDetail {
  /**
   * TTL duration for these cached tokens
   *
   * @public
   */
  ttl: CacheTTL | undefined;

  /**
   * Number of tokens written to cache with this TTL (cache creation tokens)
   *
   * @public
   */
  inputTokens: number | undefined;
}

/**
 * The tokens used in a message API inference call.
 *
 * @public
 */
export interface TokenUsage {
  /**
   * The number of tokens sent in the request to the model.
   *
   * @public
   */
  inputTokens: number | undefined;

  /**
   * The number of tokens that the model generated for the request.
   *
   * @public
   */
  outputTokens: number | undefined;

  /**
   * The total of input tokens and tokens generated by the model.
   *
   * @public
   */
  totalTokens: number | undefined;

  /**
   * The number of input tokens read from the cache for the request.
   *
   * @public
   */
  cacheReadInputTokens?: number | undefined;

  /**
   * The number of input tokens written to the cache for the request.
   *
   * @public
   */
  cacheWriteInputTokens?: number | undefined;

  /**
   * Detailed breakdown of cache writes by TTL. Empty if no cache creation occurred. Sorted by TTL duration (1h before 5m).
   *
   * @public
   */
  cacheDetails?: CacheDetail[] | undefined;
}

/**
 * @public
 */
export interface ConverseResponse {
  /**
   * The result from the call to `Converse`.
   *
   * @public
   */
  output: ConverseOutput | undefined;

  /**
   * The reason why the model stopped generating output.
   *
   * @public
   */
  stopReason: StopReason | undefined;

  /**
   * The total number of tokens used in the call to `Converse`. The total includes the tokens input to the model and the tokens generated by the model.
   *
   * @public
   */
  usage: TokenUsage | undefined;

  /**
   * Metrics for the call to `Converse`.
   *
   * @public
   */
  metrics: ConverseMetrics | undefined;

  /**
   * Additional fields in the response that are unique to the model.
   *
   * @public
   */
  additionalModelResponseFields?: __DocumentType | undefined;

  /**
   * A trace object that contains information about the Guardrail behavior.
   *
   * @public
   */
  trace?: ConverseTrace | undefined;

  /**
   * Model performance settings for the request.
   *
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;

  /**
   * Specifies the processing tier configuration used for serving the request.
   *
   * @public
   */
  serviceTier?: ServiceTier | undefined;
}

/**
 * Configuration information for a guardrail that you use with the [ConverseStream](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html) action.
 *
 * @public
 */
export interface GuardrailStreamConfiguration {
  /**
   * The identifier for the guardrail.
   *
   * @public
   */
  guardrailIdentifier?: string | undefined;

  /**
   * The version of the guardrail.
   *
   * @public
   */
  guardrailVersion?: string | undefined;

  /**
   * The trace behavior for the guardrail.
   *
   * @public
   */
  trace?: GuardrailTrace | undefined;

  /**
   * The processing mode.
   *
   * The processing mode. For more information, see *Configure streaming response behavior* in the *Amazon Bedrock User Guide*.
   *
   * @public
   */
  streamProcessingMode?: GuardrailStreamProcessingMode | undefined;
}

/**
 * @public
 */
export interface ConverseStreamRequest {
  /**
   * Specifies the model or throughput with which to run inference, or the prompt resource to use in inference. The value depends on the resource that you use:
   *
   * - If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see [Amazon Bedrock base model IDs (on-demand throughput)](https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#model-ids-arns) in the Amazon Bedrock User Guide.
   * - If you use an inference profile, specify the inference profile ID or its ARN. For a list of inference profile IDs, see [Supported Regions and models for cross-region inference](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference-support.html) in the Amazon Bedrock User Guide.
   * - If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see [Run inference using a Provisioned Throughput](https://docs.aws.amazon.com/bedrock/latest/userguide/prov-thru-use.html) in the Amazon Bedrock User Guide.
   * - If you use a custom model, first purchase Provisioned Throughput for it. Then specify the ARN of the resulting provisioned model. For more information, see [Use a custom model in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-use.html) in the Amazon Bedrock User Guide.
   * - To include a prompt that was defined in [Prompt management](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html), specify the ARN of the prompt version to use.
   *
   * The Converse API doesn't support [imported models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html).
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The messages that you want to send to the model.
   *
   * @public
   */
  messages?: Message[] | undefined;

  /**
   * A prompt that provides instructions or context to the model about the task it should perform, or the persona it should adopt during the conversation.
   *
   * @public
   */
  system?: SystemContentBlock[] | undefined;

  /**
   * Inference parameters to pass to the model. `Converse` and `ConverseStream` support a base set of inference parameters. If you need to pass additional parameters that the model supports, use the `additionalModelRequestFields` request field.
   *
   * @public
   */
  inferenceConfig?: InferenceConfiguration | undefined;

  /**
   * Configuration information for the tools that the model can use when generating a response.
   *
   * For information about models that support streaming tool use, see [Supported models and model features](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features).
   *
   * @public
   */
  toolConfig?: ToolConfiguration | undefined;

  /**
   * Configuration information for a guardrail that you want to use in the request. If you include `guardContent` blocks in the `content` field in the `messages` field, the guardrail operates only on those messages. If you include no `guardContent` blocks, the guardrail operates on all messages in the request body and in any included prompt resource.
   *
   * @public
   */
  guardrailConfig?: GuardrailStreamConfiguration | undefined;

  /**
   * Additional inference parameters that the model supports, beyond the base set of inference parameters that `Converse` and `ConverseStream` support in the `inferenceConfig` field. For more information, see [Model parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html).
   *
   * @public
   */
  additionalModelRequestFields?: __DocumentType | undefined;

  /**
   * Contains a map of variables in a prompt from Prompt management to objects containing the values to fill in for them when running model invocation. This field is ignored if you don't specify a prompt resource in the `modelId` field.
   *
   * @public
   */
  promptVariables?: Record<string, PromptVariableValues> | undefined;

  /**
   * Additional model parameters field paths to return in the response. `Converse` and `ConverseStream` return the requested fields as a JSON Pointer object in the `additionalModelResponseFields` field. The following is example JSON for `additionalModelResponseFieldPaths`.
   *
   * `[ "/stop_sequence" ]`
   *
   * For information about the JSON Pointer syntax, see the [Internet Engineering Task Force (IETF)](https://datatracker.ietf.org/doc/html/rfc6901) documentation.
   *
   * `Converse` and `ConverseStream` reject an empty JSON Pointer or incorrectly structured JSON Pointer with a `400` error code. if the JSON Pointer is valid, but the requested field is not in the model response, it is ignored by `Converse`.
   *
   * @public
   */
  additionalModelResponseFieldPaths?: string[] | undefined;

  /**
   * Key-value pairs that you can use to filter invocation logs.
   *
   * @public
   */
  requestMetadata?: Record<string, string> | undefined;

  /**
   * Model performance settings for the request.
   *
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;

  /**
   * Specifies the processing tier configuration used for serving the request.
   *
   * @public
   */
  serviceTier?: ServiceTier | undefined;

  /**
   * Output configuration for a model response.
   *
   * @public
   */
  outputConfig?: OutputConfig | undefined;
}

/**
 * Contains incremental updates to the source content text during streaming responses, allowing clients to build up the cited content progressively.
 *
 * @public
 */
export interface CitationSourceContentDelta {
  /**
   * An incremental update to the text content from the source document that is being cited.
   *
   * @public
   */
  text?: string | undefined;
}

/**
 * Contains incremental updates to citation information during streaming responses. This allows clients to build up citation data progressively as the response is generated.
 *
 * @public
 */
export interface CitationsDelta {
  /**
   * The title or identifier of the source document being cited.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The source from the original search result that provided the cited content.
   *
   * @public
   */
  source?: string | undefined;

  /**
   * The specific content from the source document that was referenced or cited in the generated response.
   *
   * @public
   */
  sourceContent?: CitationSourceContentDelta[] | undefined;

  /**
   * Specifies the precise location within a source document where cited content can be found. This can include character-level positions, page numbers, or document chunks depending on the document type and indexing method.
   *
   * @public
   */
  location?: CitationLocation | undefined;
}

/**
 * A streaming delta event that contains incremental image data during streaming responses.
 *
 * @public
 */
export interface ImageBlockDelta {
  /**
   * The incremental image source data for this delta event.
   *
   * @public
   */
  source?: ImageSource | undefined;

  /**
   * Error information if this image delta could not be processed.
   *
   * @public
   */
  error?: ErrorBlock | undefined;
}

/**
 * Contains content regarding the reasoning that is carried out by the model with respect to the content in the content block. Reasoning refers to a Chain of Thought (CoT) that the model generates to enhance the accuracy of its final response.
 *
 * @public
 */
export type ReasoningContentBlockDelta =
  | ReasoningContentBlockDelta.RedactedContentMember
  | ReasoningContentBlockDelta.SignatureMember
  | ReasoningContentBlockDelta.TextMember
  | ReasoningContentBlockDelta.$UnknownMember;

/**
 * @public
 */
export namespace ReasoningContentBlockDelta {
  /**
   * The reasoning that the model used to return the output.
   *
   * @public
   */
  export interface TextMember {
    text: string;
    redactedContent?: never;
    signature?: never;
    $unknown?: never;
  }

  /**
   * The content in the reasoning that was encrypted by the model provider for safety reasons. The encryption doesn't affect the quality of responses.
   *
   * @public
   */
  export interface RedactedContentMember {
    text?: never;
    redactedContent: Uint8Array;
    signature?: never;
    $unknown?: never;
  }

  /**
   * A token that verifies that the reasoning text was generated by the model. If you pass a reasoning block back to the API in a multi-turn conversation, include the text and its signature unmodified.
   *
   * @public
   */
  export interface SignatureMember {
    text?: never;
    redactedContent?: never;
    signature: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    redactedContent?: never;
    signature?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    redactedContent: (value: Uint8Array) => T;
    signature: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains incremental updates to tool results information during streaming responses. This allows clients to build up tool results data progressively as the response is generated.
 *
 * @public
 */
export type ToolResultBlockDelta =
  | ToolResultBlockDelta.JsonMember
  | ToolResultBlockDelta.TextMember
  | ToolResultBlockDelta.$UnknownMember;

/**
 * @public
 */
export namespace ToolResultBlockDelta {
  /**
   * The reasoning the model used to return the output.
   *
   * @public
   */
  export interface TextMember {
    text: string;
    json?: never;
    $unknown?: never;
  }

  /**
   * The JSON schema for the tool result content block. see [JSON Schema Reference](https://json-schema.org/understanding-json-schema/reference).
   *
   * @public
   */
  export interface JsonMember {
    text?: never;
    json: __DocumentType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    json?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    json: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The delta for a tool use block.
 *
 * @public
 */
export interface ToolUseBlockDelta {
  /**
   * The input for a requested tool.
   *
   * @public
   */
  input: string | undefined;
}

/**
 * A block of content in a streaming response.
 *
 * @public
 */
export type ContentBlockDelta =
  | ContentBlockDelta.CitationMember
  | ContentBlockDelta.ImageMember
  | ContentBlockDelta.ReasoningContentMember
  | ContentBlockDelta.TextMember
  | ContentBlockDelta.ToolResultMember
  | ContentBlockDelta.ToolUseMember
  | ContentBlockDelta.$UnknownMember;

/**
 * @public
 */
export namespace ContentBlockDelta {
  /**
   * The content text.
   *
   * @public
   */
  export interface TextMember {
    text: string;
    toolUse?: never;
    toolResult?: never;
    reasoningContent?: never;
    citation?: never;
    image?: never;
    $unknown?: never;
  }

  /**
   * Information about a tool that the model is requesting to use.
   *
   * @public
   */
  export interface ToolUseMember {
    text?: never;
    toolUse: ToolUseBlockDelta;
    toolResult?: never;
    reasoningContent?: never;
    citation?: never;
    image?: never;
    $unknown?: never;
  }

  /**
   * An incremental update that contains the results from a tool call.
   *
   * @public
   */
  export interface ToolResultMember {
    text?: never;
    toolUse?: never;
    toolResult: ToolResultBlockDelta[];
    reasoningContent?: never;
    citation?: never;
    image?: never;
    $unknown?: never;
  }

  /**
   * Contains content regarding the reasoning that is carried out by the model. Reasoning refers to a Chain of Thought (CoT) that the model generates to enhance the accuracy of its final response.
   *
   * @public
   */
  export interface ReasoningContentMember {
    text?: never;
    toolUse?: never;
    toolResult?: never;
    reasoningContent: ReasoningContentBlockDelta;
    citation?: never;
    image?: never;
    $unknown?: never;
  }

  /**
   * Incremental citation information that is streamed as part of the response generation process.
   *
   * @public
   */
  export interface CitationMember {
    text?: never;
    toolUse?: never;
    toolResult?: never;
    reasoningContent?: never;
    citation: CitationsDelta;
    image?: never;
    $unknown?: never;
  }

  /**
   * A streaming delta event containing incremental image data.
   *
   * @public
   */
  export interface ImageMember {
    text?: never;
    toolUse?: never;
    toolResult?: never;
    reasoningContent?: never;
    citation?: never;
    image: ImageBlockDelta;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    toolUse?: never;
    toolResult?: never;
    reasoningContent?: never;
    citation?: never;
    image?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    toolUse: (value: ToolUseBlockDelta) => T;
    toolResult: (value: ToolResultBlockDelta[]) => T;
    reasoningContent: (value: ReasoningContentBlockDelta) => T;
    citation: (value: CitationsDelta) => T;
    image: (value: ImageBlockDelta) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The content block delta event.
 *
 * @public
 */
export interface ContentBlockDeltaEvent {
  /**
   * The delta for a content block delta event.
   *
   * @public
   */
  delta: ContentBlockDelta | undefined;

  /**
   * The block index for a content block delta event.
   *
   * @public
   */
  contentBlockIndex: number | undefined;
}

/**
 * The initial event in a streaming image block that indicates the start of image content.
 *
 * @public
 */
export interface ImageBlockStart {
  /**
   * The format of the image data that will be streamed in subsequent delta events.
   *
   * @public
   */
  format: ImageFormat | undefined;
}

/**
 * The start of a tool result block. For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export interface ToolResultBlockStart {
  /**
   * The ID of the tool that was used to generate this tool result block.
   *
   * @public
   */
  toolUseId: string | undefined;

  /**
   * The type for the tool that was used to generate this tool result block.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The status of the tool result block.
   *
   * @public
   */
  status?: ToolResultStatus | undefined;
}

/**
 * The start of a tool use block. For more information, see [Call a tool with the Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html) in the Amazon Bedrock User Guide.
 *
 * @public
 */
export interface ToolUseBlockStart {
  /**
   * The ID for the tool request.
   *
   * @public
   */
  toolUseId: string | undefined;

  /**
   * The name of the tool that the model is requesting to use.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type for the tool request.
   *
   * @public
   */
  type?: ToolUseType | undefined;
}

/**
 * Content block start information.
 *
 * @public
 */
export type ContentBlockStart =
  | ContentBlockStart.ImageMember
  | ContentBlockStart.ToolResultMember
  | ContentBlockStart.ToolUseMember
  | ContentBlockStart.$UnknownMember;

/**
 * @public
 */
export namespace ContentBlockStart {
  /**
   * Information about a tool that the model is requesting to use.
   *
   * @public
   */
  export interface ToolUseMember {
    toolUse: ToolUseBlockStart;
    toolResult?: never;
    image?: never;
    $unknown?: never;
  }

  /**
   * The
   *
   * @public
   */
  export interface ToolResultMember {
    toolUse?: never;
    toolResult: ToolResultBlockStart;
    image?: never;
    $unknown?: never;
  }

  /**
   * The initial event indicating the start of a streaming image block.
   *
   * @public
   */
  export interface ImageMember {
    toolUse?: never;
    toolResult?: never;
    image: ImageBlockStart;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    toolUse?: never;
    toolResult?: never;
    image?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    toolUse: (value: ToolUseBlockStart) => T;
    toolResult: (value: ToolResultBlockStart) => T;
    image: (value: ImageBlockStart) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Content block start event.
 *
 * @public
 */
export interface ContentBlockStartEvent {
  /**
   * Start information about a content block start event.
   *
   * @public
   */
  start: ContentBlockStart | undefined;

  /**
   * The index for a content block start event.
   *
   * @public
   */
  contentBlockIndex: number | undefined;
}

/**
 * A content block stop event.
 *
 * @public
 */
export interface ContentBlockStopEvent {
  /**
   * The index for a content block.
   *
   * @public
   */
  contentBlockIndex: number | undefined;
}

/**
 * The start of a message.
 *
 * @public
 */
export interface MessageStartEvent {
  /**
   * The role for the message.
   *
   * @public
   */
  role: ConversationRole | undefined;
}

/**
 * The stop event for a message.
 *
 * @public
 */
export interface MessageStopEvent {
  /**
   * The reason why the model stopped generating output.
   *
   * @public
   */
  stopReason: StopReason | undefined;

  /**
   * The additional model response fields.
   *
   * @public
   */
  additionalModelResponseFields?: __DocumentType | undefined;
}

/**
 * Metrics for the stream.
 *
 * @public
 */
export interface ConverseStreamMetrics {
  /**
   * The latency for the streaming request, in milliseconds.
   *
   * @public
   */
  latencyMs: number | undefined;
}

/**
 * The trace object in a response from [ConverseStream](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html).
 *
 * @public
 */
export interface ConverseStreamTrace {
  /**
   * The guardrail trace object.
   *
   * @public
   */
  guardrail?: GuardrailTraceAssessment | undefined;

  /**
   * The request's prompt router.
   *
   * @public
   */
  promptRouter?: PromptRouterTrace | undefined;
}

/**
 * A conversation stream metadata event.
 *
 * @public
 */
export interface ConverseStreamMetadataEvent {
  /**
   * Usage information for the conversation stream event.
   *
   * @public
   */
  usage: TokenUsage | undefined;

  /**
   * The metrics for the conversation stream metadata event.
   *
   * @public
   */
  metrics: ConverseStreamMetrics | undefined;

  /**
   * The trace object in the response from [ConverseStream](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html) that contains information about the guardrail behavior.
   *
   * @public
   */
  trace?: ConverseStreamTrace | undefined;

  /**
   * Model performance configuration metadata for the conversation stream event.
   *
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;

  /**
   * Specifies the processing tier configuration used for serving the request.
   *
   * @public
   */
  serviceTier?: ServiceTier | undefined;
}

/**
 * The messages output stream
 *
 * @public
 */
export type ConverseStreamOutput =
  | ConverseStreamOutput.ContentBlockDeltaMember
  | ConverseStreamOutput.ContentBlockStartMember
  | ConverseStreamOutput.ContentBlockStopMember
  | ConverseStreamOutput.InternalServerExceptionMember
  | ConverseStreamOutput.MessageStartMember
  | ConverseStreamOutput.MessageStopMember
  | ConverseStreamOutput.MetadataMember
  | ConverseStreamOutput.ModelStreamErrorExceptionMember
  | ConverseStreamOutput.ServiceUnavailableExceptionMember
  | ConverseStreamOutput.ThrottlingExceptionMember
  | ConverseStreamOutput.ValidationExceptionMember
  | ConverseStreamOutput.$UnknownMember;

/**
 * @public
 */
export namespace ConverseStreamOutput {
  /**
   * Message start information.
   *
   * @public
   */
  export interface MessageStartMember {
    messageStart: MessageStartEvent;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    messageStop?: never;
    metadata?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * Start information for a content block.
   *
   * @public
   */
  export interface ContentBlockStartMember {
    messageStart?: never;
    contentBlockStart: ContentBlockStartEvent;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    messageStop?: never;
    metadata?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * The messages output content block delta.
   *
   * @public
   */
  export interface ContentBlockDeltaMember {
    messageStart?: never;
    contentBlockStart?: never;
    contentBlockDelta: ContentBlockDeltaEvent;
    contentBlockStop?: never;
    messageStop?: never;
    metadata?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * Stop information for a content block.
   *
   * @public
   */
  export interface ContentBlockStopMember {
    messageStart?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop: ContentBlockStopEvent;
    messageStop?: never;
    metadata?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * Message stop information.
   *
   * @public
   */
  export interface MessageStopMember {
    messageStart?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    messageStop: MessageStopEvent;
    metadata?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * Metadata for the converse output stream.
   *
   * @public
   */
  export interface MetadataMember {
    messageStart?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    messageStop?: never;
    metadata: ConverseStreamMetadataEvent;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * An internal server error occurred. Retry your request.
   *
   * @public
   */
  export interface InternalServerExceptionMember {
    messageStart?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    messageStop?: never;
    metadata?: never;
    internalServerException: InternalServerException;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * A streaming error occurred. Retry your request.
   *
   * @public
   */
  export interface ModelStreamErrorExceptionMember {
    messageStart?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    messageStop?: never;
    metadata?: never;
    internalServerException?: never;
    modelStreamErrorException: ModelStreamErrorException;
    validationException?: never;
    throttlingException?: never;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * The input fails to satisfy the constraints specified by *Amazon Bedrock*. For troubleshooting this error, see [ValidationError](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-validation-error) in the Amazon Bedrock User Guide.
   *
   * @public
   */
  export interface ValidationExceptionMember {
    messageStart?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    messageStop?: never;
    metadata?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException: ValidationException;
    throttlingException?: never;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * Your request was denied due to exceeding the account quotas for *Amazon Bedrock*. For troubleshooting this error, see [ThrottlingException](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-throttling-exception) in the Amazon Bedrock User Guide.
   *
   * @public
   */
  export interface ThrottlingExceptionMember {
    messageStart?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    messageStop?: never;
    metadata?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException: ThrottlingException;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * The service isn't currently available. For troubleshooting this error, see [ServiceUnavailable](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-service-unavailable) in the Amazon Bedrock User Guide
   *
   * @public
   */
  export interface ServiceUnavailableExceptionMember {
    messageStart?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    messageStop?: never;
    metadata?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    serviceUnavailableException: ServiceUnavailableException;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    messageStart?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    messageStop?: never;
    metadata?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    serviceUnavailableException?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    messageStart: (value: MessageStartEvent) => T;
    contentBlockStart: (value: ContentBlockStartEvent) => T;
    contentBlockDelta: (value: ContentBlockDeltaEvent) => T;
    contentBlockStop: (value: ContentBlockStopEvent) => T;
    messageStop: (value: MessageStopEvent) => T;
    metadata: (value: ConverseStreamMetadataEvent) => T;
    internalServerException: (value: InternalServerException) => T;
    modelStreamErrorException: (value: ModelStreamErrorException) => T;
    validationException: (value: ValidationException) => T;
    throttlingException: (value: ThrottlingException) => T;
    serviceUnavailableException: (value: ServiceUnavailableException) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ConverseStreamResponse {
  /**
   * The output stream that the model generated.
   *
   * @public
   */
  stream?: AsyncIterable<ConverseStreamOutput> | undefined;
}

/**
 * @public
 */
export interface InvokeModelRequest {
  /**
   * The prompt and inference parameters in the format specified in the `contentType` in the header. You must provide the body in JSON format. To see the format and content of the request and response bodies for different models, refer to [Inference parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html). For more information, see [Run inference](https://docs.aws.amazon.com/bedrock/latest/userguide/api-methods-run.html) in the Bedrock User Guide.
   *
   * @public
   */
  body?: Uint8Array | undefined;

  /**
   * The MIME type of the input data in the request. You must specify `application/json`.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * The desired MIME type of the inference body in the response. The default value is `application/json`.
   *
   * @public
   */
  accept?: string | undefined;

  /**
   * The unique identifier of the model to invoke to run inference.
   *
   * The `modelId` to provide depends on the type of model or throughput that you use:
   *
   * - If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see [Amazon Bedrock base model IDs (on-demand throughput)](https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#model-ids-arns) in the Amazon Bedrock User Guide.
   * - If you use an inference profile, specify the inference profile ID or its ARN. For a list of inference profile IDs, see [Supported Regions and models for cross-region inference](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference-support.html) in the Amazon Bedrock User Guide.
   * - If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see [Run inference using a Provisioned Throughput](https://docs.aws.amazon.com/bedrock/latest/userguide/prov-thru-use.html) in the Amazon Bedrock User Guide.
   * - If you use a custom model, specify the ARN of the custom model deployment (for on-demand inference) or the ARN of your provisioned model (for Provisioned Throughput). For more information, see [Use a custom model in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-use.html) in the Amazon Bedrock User Guide.
   * - If you use an [imported model](https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html), specify the ARN of the imported model. You can get the model ARN from a successful call to [CreateModelImportJob](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateModelImportJob.html) or from the Imported models page in the Amazon Bedrock console.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * Specifies whether to enable or disable the Bedrock trace. If enabled, you can see the full Bedrock trace.
   *
   * @public
   */
  trace?: Trace | undefined;

  /**
   * The unique identifier of the guardrail that you want to use. If you don't provide a value, no guardrail is applied to the invocation.
   *
   * An error will be thrown in the following situations.
   *
   * - You don't provide a guardrail identifier but you specify the `amazon-bedrock-guardrailConfig` field in the request body.
   * - You enable the guardrail but the `contentType` isn't `application/json`.
   * - You provide a guardrail identifier, but `guardrailVersion` isn't specified.
   *
   * @public
   */
  guardrailIdentifier?: string | undefined;

  /**
   * The version number for the guardrail. The value can also be `DRAFT`.
   *
   * @public
   */
  guardrailVersion?: string | undefined;

  /**
   * Model performance settings for the request.
   *
   * @public
   */
  performanceConfigLatency?: PerformanceConfigLatency | undefined;

  /**
   * Specifies the processing tier type used for serving the request.
   *
   * @public
   */
  serviceTier?: ServiceTierType | undefined;

  /**
   * Key-value pairs that you can use to filter invocation logs.
   *
   * @public
   */
  requestMetadata?: string | undefined;
}

/**
 * @public
 */
export interface InvokeModelResponse {
  /**
   * Inference response from the model in the format specified in the `contentType` header. To see the format and content of the request and response bodies for different models, refer to [Inference parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html).
   *
   * @public
   */
  body: Uint8Array | undefined;

  /**
   * The MIME type of the inference result.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * Model performance settings for the request.
   *
   * @public
   */
  performanceConfigLatency?: PerformanceConfigLatency | undefined;

  /**
   * Specifies the processing tier type used for serving the request.
   *
   * @public
   */
  serviceTier?: ServiceTierType | undefined;
}

/**
 * Payload content for the bidirectional input. The input is an audio stream.
 *
 * @public
 */
export interface BidirectionalInputPayloadPart {
  /**
   * The audio content for the bidirectional input.
   *
   * @public
   */
  bytes?: Uint8Array | undefined;
}

/**
 * Payload content, the speech chunk, for the bidirectional input of the invocation step.
 *
 * @public
 */
export type InvokeModelWithBidirectionalStreamInput =
  | InvokeModelWithBidirectionalStreamInput.ChunkMember
  | InvokeModelWithBidirectionalStreamInput.$UnknownMember;

/**
 * @public
 */
export namespace InvokeModelWithBidirectionalStreamInput {
  /**
   * The audio chunk that is used as input for the invocation step.
   *
   * @public
   */
  export interface ChunkMember {
    chunk: BidirectionalInputPayloadPart;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    chunk?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    chunk: (value: BidirectionalInputPayloadPart) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface InvokeModelWithBidirectionalStreamRequest {
  /**
   * The model ID or ARN of the model ID to use. Currently, only `amazon.nova-sonic-v1:0` is supported.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The prompt and inference parameters in the format specified in the `BidirectionalInputPayloadPart` in the header. You must provide the body in JSON format. To see the format and content of the request and response bodies for different models, refer to [Inference parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html). For more information, see [Run inference](https://docs.aws.amazon.com/bedrock/latest/userguide/api-methods-run.html) in the Bedrock User Guide.
   *
   * @public
   */
  body: AsyncIterable<InvokeModelWithBidirectionalStreamInput> | undefined;
}

/**
 * Output from the bidirectional stream. The output is speech and a text transcription.
 *
 * @public
 */
export interface BidirectionalOutputPayloadPart {
  /**
   * The speech output of the bidirectional stream.
   *
   * @public
   */
  bytes?: Uint8Array | undefined;
}

/**
 * Output from the bidirectional stream that was used for model invocation.
 *
 * @public
 */
export type InvokeModelWithBidirectionalStreamOutput =
  | InvokeModelWithBidirectionalStreamOutput.ChunkMember
  | InvokeModelWithBidirectionalStreamOutput.InternalServerExceptionMember
  | InvokeModelWithBidirectionalStreamOutput.ModelStreamErrorExceptionMember
  | InvokeModelWithBidirectionalStreamOutput.ModelTimeoutExceptionMember
  | InvokeModelWithBidirectionalStreamOutput.ServiceUnavailableExceptionMember
  | InvokeModelWithBidirectionalStreamOutput.ThrottlingExceptionMember
  | InvokeModelWithBidirectionalStreamOutput.ValidationExceptionMember
  | InvokeModelWithBidirectionalStreamOutput.$UnknownMember;

/**
 * @public
 */
export namespace InvokeModelWithBidirectionalStreamOutput {
  /**
   * The speech chunk that was provided as output from the invocation step.
   *
   * @public
   */
  export interface ChunkMember {
    chunk: BidirectionalOutputPayloadPart;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    modelTimeoutException?: never;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * The request encountered an unknown internal error.
   *
   * @public
   */
  export interface InternalServerExceptionMember {
    chunk?: never;
    internalServerException: InternalServerException;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    modelTimeoutException?: never;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * The request encountered an error with the model stream.
   *
   * @public
   */
  export interface ModelStreamErrorExceptionMember {
    chunk?: never;
    internalServerException?: never;
    modelStreamErrorException: ModelStreamErrorException;
    validationException?: never;
    throttlingException?: never;
    modelTimeoutException?: never;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * The input fails to satisfy the constraints specified by an Amazon Web Services service.
   *
   * @public
   */
  export interface ValidationExceptionMember {
    chunk?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException: ValidationException;
    throttlingException?: never;
    modelTimeoutException?: never;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * The request was denied due to request throttling.
   *
   * @public
   */
  export interface ThrottlingExceptionMember {
    chunk?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException: ThrottlingException;
    modelTimeoutException?: never;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * The connection was closed because a request was not received within the timeout period.
   *
   * @public
   */
  export interface ModelTimeoutExceptionMember {
    chunk?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    modelTimeoutException: ModelTimeoutException;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * The request has failed due to a temporary failure of the server.
   *
   * @public
   */
  export interface ServiceUnavailableExceptionMember {
    chunk?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    modelTimeoutException?: never;
    serviceUnavailableException: ServiceUnavailableException;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    chunk?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    modelTimeoutException?: never;
    serviceUnavailableException?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    chunk: (value: BidirectionalOutputPayloadPart) => T;
    internalServerException: (value: InternalServerException) => T;
    modelStreamErrorException: (value: ModelStreamErrorException) => T;
    validationException: (value: ValidationException) => T;
    throttlingException: (value: ThrottlingException) => T;
    modelTimeoutException: (value: ModelTimeoutException) => T;
    serviceUnavailableException: (value: ServiceUnavailableException) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface InvokeModelWithBidirectionalStreamResponse {
  /**
   * Streaming response from the model in the format specified by the `BidirectionalOutputPayloadPart` header.
   *
   * @public
   */
  body: AsyncIterable<InvokeModelWithBidirectionalStreamOutput> | undefined;
}

/**
 * @public
 */
export interface InvokeModelWithResponseStreamRequest {
  /**
   * The prompt and inference parameters in the format specified in the `contentType` in the header. You must provide the body in JSON format. To see the format and content of the request and response bodies for different models, refer to [Inference parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html). For more information, see [Run inference](https://docs.aws.amazon.com/bedrock/latest/userguide/api-methods-run.html) in the Bedrock User Guide.
   *
   * @public
   */
  body?: Uint8Array | undefined;

  /**
   * The MIME type of the input data in the request. You must specify `application/json`.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * The desired MIME type of the inference body in the response. The default value is `application/json`.
   *
   * @public
   */
  accept?: string | undefined;

  /**
   * The unique identifier of the model to invoke to run inference.
   *
   * The `modelId` to provide depends on the type of model or throughput that you use:
   *
   * - If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see [Amazon Bedrock base model IDs (on-demand throughput)](https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#model-ids-arns) in the Amazon Bedrock User Guide.
   * - If you use an inference profile, specify the inference profile ID or its ARN. For a list of inference profile IDs, see [Supported Regions and models for cross-region inference](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference-support.html) in the Amazon Bedrock User Guide.
   * - If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see [Run inference using a Provisioned Throughput](https://docs.aws.amazon.com/bedrock/latest/userguide/prov-thru-use.html) in the Amazon Bedrock User Guide.
   * - If you use a custom model, specify the ARN of the custom model deployment (for on-demand inference) or the ARN of your provisioned model (for Provisioned Throughput). For more information, see [Use a custom model in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-use.html) in the Amazon Bedrock User Guide.
   * - If you use an [imported model](https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html), specify the ARN of the imported model. You can get the model ARN from a successful call to [CreateModelImportJob](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateModelImportJob.html) or from the Imported models page in the Amazon Bedrock console.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * Specifies whether to enable or disable the Bedrock trace. If enabled, you can see the full Bedrock trace.
   *
   * @public
   */
  trace?: Trace | undefined;

  /**
   * The unique identifier of the guardrail that you want to use. If you don't provide a value, no guardrail is applied to the invocation.
   *
   * An error is thrown in the following situations.
   *
   * - You don't provide a guardrail identifier but you specify the `amazon-bedrock-guardrailConfig` field in the request body.
   * - You enable the guardrail but the `contentType` isn't `application/json`.
   * - You provide a guardrail identifier, but `guardrailVersion` isn't specified.
   *
   * @public
   */
  guardrailIdentifier?: string | undefined;

  /**
   * The version number for the guardrail. The value can also be `DRAFT`.
   *
   * @public
   */
  guardrailVersion?: string | undefined;

  /**
   * Model performance settings for the request.
   *
   * @public
   */
  performanceConfigLatency?: PerformanceConfigLatency | undefined;

  /**
   * Specifies the processing tier type used for serving the request.
   *
   * @public
   */
  serviceTier?: ServiceTierType | undefined;

  /**
   * Key-value pairs that you can use to filter invocation logs.
   *
   * @public
   */
  requestMetadata?: string | undefined;
}

/**
 * Payload content included in the response.
 *
 * @public
 */
export interface PayloadPart {
  /**
   * Base64-encoded bytes of payload data.
   *
   * @public
   */
  bytes?: Uint8Array | undefined;
}

/**
 * Definition of content in the response stream.
 *
 * @public
 */
export type ResponseStream =
  | ResponseStream.ChunkMember
  | ResponseStream.InternalServerExceptionMember
  | ResponseStream.ModelStreamErrorExceptionMember
  | ResponseStream.ModelTimeoutExceptionMember
  | ResponseStream.ServiceUnavailableExceptionMember
  | ResponseStream.ThrottlingExceptionMember
  | ResponseStream.ValidationExceptionMember
  | ResponseStream.$UnknownMember;

/**
 * @public
 */
export namespace ResponseStream {
  /**
   * Content included in the response.
   *
   * @public
   */
  export interface ChunkMember {
    chunk: PayloadPart;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    modelTimeoutException?: never;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * An internal server error occurred. Retry your request.
   *
   * @public
   */
  export interface InternalServerExceptionMember {
    chunk?: never;
    internalServerException: InternalServerException;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    modelTimeoutException?: never;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * An error occurred while streaming the response. Retry your request.
   *
   * @public
   */
  export interface ModelStreamErrorExceptionMember {
    chunk?: never;
    internalServerException?: never;
    modelStreamErrorException: ModelStreamErrorException;
    validationException?: never;
    throttlingException?: never;
    modelTimeoutException?: never;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * Input validation failed. Check your request parameters and retry the request.
   *
   * @public
   */
  export interface ValidationExceptionMember {
    chunk?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException: ValidationException;
    throttlingException?: never;
    modelTimeoutException?: never;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * Your request was throttled because of service-wide limitations. Resubmit your request later or in a different region. You can also purchase [Provisioned Throughput](https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html) to increase the rate or number of tokens you can process.
   *
   * @public
   */
  export interface ThrottlingExceptionMember {
    chunk?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException: ThrottlingException;
    modelTimeoutException?: never;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * The request took too long to process. Processing time exceeded the model timeout length.
   *
   * @public
   */
  export interface ModelTimeoutExceptionMember {
    chunk?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    modelTimeoutException: ModelTimeoutException;
    serviceUnavailableException?: never;
    $unknown?: never;
  }

  /**
   * The service isn't available. Try again later.
   *
   * @public
   */
  export interface ServiceUnavailableExceptionMember {
    chunk?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    modelTimeoutException?: never;
    serviceUnavailableException: ServiceUnavailableException;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    chunk?: never;
    internalServerException?: never;
    modelStreamErrorException?: never;
    validationException?: never;
    throttlingException?: never;
    modelTimeoutException?: never;
    serviceUnavailableException?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    chunk: (value: PayloadPart) => T;
    internalServerException: (value: InternalServerException) => T;
    modelStreamErrorException: (value: ModelStreamErrorException) => T;
    validationException: (value: ValidationException) => T;
    throttlingException: (value: ThrottlingException) => T;
    modelTimeoutException: (value: ModelTimeoutException) => T;
    serviceUnavailableException: (value: ServiceUnavailableException) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface InvokeModelWithResponseStreamResponse {
  /**
   * Inference response from the model in the format specified by the `contentType` header. To see the format and content of this field for different models, refer to [Inference parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html).
   *
   * @public
   */
  body: AsyncIterable<ResponseStream> | undefined;

  /**
   * The MIME type of the inference result.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * Model performance settings for the request.
   *
   * @public
   */
  performanceConfigLatency?: PerformanceConfigLatency | undefined;

  /**
   * Specifies the processing tier type used for serving the request.
   *
   * @public
   */
  serviceTier?: ServiceTierType | undefined;
}

/**
 * The inputs from a `Converse` API request for token counting.
 *
 * This structure mirrors the input format for the `Converse` operation, allowing you to count tokens for conversation-based inference requests.
 *
 * @public
 */
export interface ConverseTokensRequest {
  /**
   * An array of messages to count tokens for.
   *
   * @public
   */
  messages?: Message[] | undefined;

  /**
   * The system content blocks to count tokens for. System content provides instructions or context to the model about how it should behave or respond. The token count will include any system content provided.
   *
   * @public
   */
  system?: SystemContentBlock[] | undefined;

  /**
   * The toolConfig of Converse input request to count tokens for. Configuration information for the tools that the model can use when generating a response.
   *
   * @public
   */
  toolConfig?: ToolConfiguration | undefined;

  /**
   * The additionalModelRequestFields of Converse input request to count tokens for. Use this field when you want to pass additional parameters that the model supports.
   *
   * @public
   */
  additionalModelRequestFields?: __DocumentType | undefined;
}

/**
 * The body of an `InvokeModel` API request for token counting. This structure mirrors the input format for the `InvokeModel` operation, allowing you to count tokens for raw text inference requests.
 *
 * @public
 */
export interface InvokeModelTokensRequest {
  /**
   * The request body to count tokens for, formatted according to the model's expected input format. To learn about the input format for different models, see [Model inference parameters and responses](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html).
   *
   * @public
   */
  body: Uint8Array | undefined;
}

/**
 * The input value for token counting. The value should be either an `InvokeModel` or `Converse` request body.
 *
 * @public
 */
export type CountTokensInput =
  | CountTokensInput.ConverseMember
  | CountTokensInput.InvokeModelMember
  | CountTokensInput.$UnknownMember;

/**
 * @public
 */
export namespace CountTokensInput {
  /**
   * An `InvokeModel` request for which to count tokens. Use this field when you want to count tokens for a raw text input that would be sent to the `InvokeModel` operation.
   *
   * @public
   */
  export interface InvokeModelMember {
    invokeModel: InvokeModelTokensRequest;
    converse?: never;
    $unknown?: never;
  }

  /**
   * A `Converse` request for which to count tokens. Use this field when you want to count tokens for a conversation-based input that would be sent to the `Converse` operation.
   *
   * @public
   */
  export interface ConverseMember {
    invokeModel?: never;
    converse: ConverseTokensRequest;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    invokeModel?: never;
    converse?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    invokeModel: (value: InvokeModelTokensRequest) => T;
    converse: (value: ConverseTokensRequest) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CountTokensRequest {
  /**
   * The unique identifier or ARN of the foundation model to use for token counting. Each model processes tokens differently, so the token count is specific to the model you specify.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The input for which to count tokens. The structure of this parameter depends on whether you're counting tokens for an `InvokeModel` or `Converse` request:
   *
   * - For `InvokeModel` requests, provide the request body in the `invokeModel` field
   * - For `Converse` requests, provide the messages and system content in the `converse` field
   *
   * The input format must be compatible with the model specified in the `modelId` parameter.
   *
   * @public
   */
  input: CountTokensInput | undefined;
}

/**
 * @public
 */
export interface CountTokensResponse {
  /**
   * The number of tokens in the provided input according to the specified model's tokenization rules. This count represents the number of input tokens that would be processed if the same input were sent to the model in an inference request. Use this value to estimate costs and ensure your inputs stay within model token limits.
   *
   * @public
   */
  inputTokens: number | undefined;
}
