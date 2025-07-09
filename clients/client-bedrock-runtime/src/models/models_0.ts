// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import { BedrockRuntimeServiceException as __BaseException } from "./BedrockRuntimeServiceException";

/**
 * <p>The request is denied because you do not have sufficient permissions to perform the requested action. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-access-denied">AccessDeniedException</a> in the Amazon Bedrock User Guide</p>
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
export interface GetAsyncInvokeRequest {
  /**
   * <p>The invocation's ARN.</p>
   * @public
   */
  invocationArn: string | undefined;
}

/**
 * <p>Asynchronous invocation output data settings.</p>
 * @public
 */
export interface AsyncInvokeS3OutputDataConfig {
  /**
   * <p>An object URI starting with <code>s3://</code>.</p>
   * @public
   */
  s3Uri: string | undefined;

  /**
   * <p>A KMS encryption key ID.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>If the bucket belongs to another AWS account, specify that account's ID.</p>
   * @public
   */
  bucketOwner?: string | undefined;
}

/**
 * <p>Asynchronous invocation output data settings.</p>
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
   * <p>A storage location for the output data in an S3 bucket</p>
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

  export interface Visitor<T> {
    s3OutputDataConfig: (value: AsyncInvokeS3OutputDataConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AsyncInvokeOutputDataConfig, visitor: Visitor<T>): T => {
    if (value.s3OutputDataConfig !== undefined) return visitor.s3OutputDataConfig(value.s3OutputDataConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const AsyncInvokeStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
} as const;

/**
 * @public
 */
export type AsyncInvokeStatus = (typeof AsyncInvokeStatus)[keyof typeof AsyncInvokeStatus];

/**
 * @public
 */
export interface GetAsyncInvokeResponse {
  /**
   * <p>The invocation's ARN.</p>
   * @public
   */
  invocationArn: string | undefined;

  /**
   * <p>The invocation's model ARN.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>The invocation's idempotency token.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The invocation's status.</p>
   * @public
   */
  status: AsyncInvokeStatus | undefined;

  /**
   * <p>An error message.</p>
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * <p>When the invocation request was submitted.</p>
   * @public
   */
  submitTime: Date | undefined;

  /**
   * <p>The invocation's last modified time.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * <p>When the invocation ended.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>Output data settings.</p>
   * @public
   */
  outputDataConfig: AsyncInvokeOutputDataConfig | undefined;
}

/**
 * <p>An internal server error occurred. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-internal-failure">InternalFailure</a> in the Amazon Bedrock User Guide</p>
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
 * <p>Your request was denied due to exceeding the account quotas for <i>Amazon Bedrock</i>. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-throttling-exception">ThrottlingException</a> in the Amazon Bedrock User Guide</p>
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
 * <p>The input fails to satisfy the constraints specified by <i>Amazon Bedrock</i>. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-validation-error">ValidationError</a> in the Amazon Bedrock User Guide</p>
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
 * @enum
 */
export const SortAsyncInvocationBy = {
  SUBMISSION_TIME: "SubmissionTime",
} as const;

/**
 * @public
 */
export type SortAsyncInvocationBy = (typeof SortAsyncInvocationBy)[keyof typeof SortAsyncInvocationBy];

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
export interface ListAsyncInvokesRequest {
  /**
   * <p>Include invocations submitted after this time.</p>
   * @public
   */
  submitTimeAfter?: Date | undefined;

  /**
   * <p>Include invocations submitted before this time.</p>
   * @public
   */
  submitTimeBefore?: Date | undefined;

  /**
   * <p>Filter invocations by status.</p>
   * @public
   */
  statusEquals?: AsyncInvokeStatus | undefined;

  /**
   * <p>The maximum number of invocations to return in one page of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>How to sort the response.</p>
   * @public
   */
  sortBy?: SortAsyncInvocationBy | undefined;

  /**
   * <p>The sorting order for the response.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * <p>A summary of an asynchronous invocation.</p>
 * @public
 */
export interface AsyncInvokeSummary {
  /**
   * <p>The invocation's ARN.</p>
   * @public
   */
  invocationArn: string | undefined;

  /**
   * <p>The invoked model's ARN.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>The invocation's idempotency token.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The invocation's status.</p>
   * @public
   */
  status?: AsyncInvokeStatus | undefined;

  /**
   * <p>An error message.</p>
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * <p>When the invocation was submitted.</p>
   * @public
   */
  submitTime: Date | undefined;

  /**
   * <p>When the invocation was last modified.</p>
   * @public
   */
  lastModifiedTime?: Date | undefined;

  /**
   * <p>When the invocation ended.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The invocation's output data settings.</p>
   * @public
   */
  outputDataConfig: AsyncInvokeOutputDataConfig | undefined;
}

/**
 * @public
 */
export interface ListAsyncInvokesResponse {
  /**
   * <p>Specify the pagination token from a previous request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of invocation summaries.</p>
   * @public
   */
  asyncInvokeSummaries?: AsyncInvokeSummary[] | undefined;
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
 * <p>The specified resource ARN was not found. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-resource-not-found">ResourceNotFound</a> in the Amazon Bedrock User Guide</p>
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
 * <p>Your request exceeds the service quota for your account. You can view your quotas at <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/gs-request-quota.html">Viewing service quotas</a>. You can resubmit your request later.</p>
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
 * <p>The service isn't currently available. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-service-unavailable">ServiceUnavailable</a> in the Amazon Bedrock User Guide</p>
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
 * <p>A tag.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag's key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The tag's value.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface StartAsyncInvokeRequest {
  /**
   * <p>Specify idempotency token to ensure that requests are not duplicated.</p>
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * <p>The model to invoke.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>Input to send to the model.</p>
   * @public
   */
  modelInput: __DocumentType | undefined;

  /**
   * <p>Where to store the output.</p>
   * @public
   */
  outputDataConfig: AsyncInvokeOutputDataConfig | undefined;

  /**
   * <p>Tags to apply to the invocation.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartAsyncInvokeResponse {
  /**
   * <p>The ARN of the invocation.</p>
   * @public
   */
  invocationArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailImageFormat = {
  JPEG: "jpeg",
  PNG: "png",
} as const;

/**
 * @public
 */
export type GuardrailImageFormat = (typeof GuardrailImageFormat)[keyof typeof GuardrailImageFormat];

/**
 * <p>The image source (image bytes) of the guardrail image source. Object used in independent api.</p>
 * @public
 */
export type GuardrailImageSource = GuardrailImageSource.BytesMember | GuardrailImageSource.$UnknownMember;

/**
 * @public
 */
export namespace GuardrailImageSource {
  /**
   * <p>The bytes details of the guardrail image source. Object used in independent api.</p>
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

  export interface Visitor<T> {
    bytes: (value: Uint8Array) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: GuardrailImageSource, visitor: Visitor<T>): T => {
    if (value.bytes !== undefined) return visitor.bytes(value.bytes);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contain an image which user wants guarded. This block is accepted by the guardrails independent API.</p>
 * @public
 */
export interface GuardrailImageBlock {
  /**
   * <p>The format details for the file type of the image blocked by the guardrail.</p>
   * @public
   */
  format: GuardrailImageFormat | undefined;

  /**
   * <p>The image source (image bytes) details of the image blocked by the guardrail.</p>
   * @public
   */
  source: GuardrailImageSource | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailContentQualifier = {
  GROUNDING_SOURCE: "grounding_source",
  GUARD_CONTENT: "guard_content",
  QUERY: "query",
} as const;

/**
 * @public
 */
export type GuardrailContentQualifier = (typeof GuardrailContentQualifier)[keyof typeof GuardrailContentQualifier];

/**
 * <p>The text block to be evaluated by the guardrail.</p>
 * @public
 */
export interface GuardrailTextBlock {
  /**
   * <p>The input text details to be evaluated by the guardrail.</p>
   * @public
   */
  text: string | undefined;

  /**
   * <p>The qualifiers describing the text block.</p>
   * @public
   */
  qualifiers?: GuardrailContentQualifier[] | undefined;
}

/**
 * <p>The content block to be evaluated by the guardrail.</p>
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
   * <p>Text within content block to be evaluated by the guardrail.</p>
   * @public
   */
  export interface TextMember {
    text: GuardrailTextBlock;
    image?: never;
    $unknown?: never;
  }

  /**
   * <p>Image within guardrail content block to be evaluated by the guardrail.</p>
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

  export interface Visitor<T> {
    text: (value: GuardrailTextBlock) => T;
    image: (value: GuardrailImageBlock) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: GuardrailContentBlock, visitor: Visitor<T>): T => {
    if (value.text !== undefined) return visitor.text(value.text);
    if (value.image !== undefined) return visitor.image(value.image);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const GuardrailOutputScope = {
  FULL: "FULL",
  INTERVENTIONS: "INTERVENTIONS",
} as const;

/**
 * @public
 */
export type GuardrailOutputScope = (typeof GuardrailOutputScope)[keyof typeof GuardrailOutputScope];

/**
 * @public
 * @enum
 */
export const GuardrailContentSource = {
  INPUT: "INPUT",
  OUTPUT: "OUTPUT",
} as const;

/**
 * @public
 */
export type GuardrailContentSource = (typeof GuardrailContentSource)[keyof typeof GuardrailContentSource];

/**
 * @public
 */
export interface ApplyGuardrailRequest {
  /**
   * <p>The guardrail identifier used in the request to apply the guardrail.</p>
   * @public
   */
  guardrailIdentifier: string | undefined;

  /**
   * <p>The guardrail version used in the request to apply the guardrail.</p>
   * @public
   */
  guardrailVersion: string | undefined;

  /**
   * <p>The source of data used in the request to apply the guardrail.</p>
   * @public
   */
  source: GuardrailContentSource | undefined;

  /**
   * <p>The content details used in the request to apply the guardrail.</p>
   * @public
   */
  content: GuardrailContentBlock[] | undefined;

  /**
   * <p>Specifies the scope of the output that you get in the response. Set to <code>FULL</code> to return the entire output, including any detected and non-detected entries in the response for enhanced debugging.</p> <p>Note that the full output scope doesn't apply to word filters or regex in sensitive information filters. It does apply to all other filtering policies, including sensitive information with filters that can detect personally identifiable information (PII).</p>
   * @public
   */
  outputScope?: GuardrailOutputScope | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailAction = {
  GUARDRAIL_INTERVENED: "GUARDRAIL_INTERVENED",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GuardrailAction = (typeof GuardrailAction)[keyof typeof GuardrailAction];

/**
 * @public
 * @enum
 */
export const GuardrailContentPolicyAction = {
  BLOCKED: "BLOCKED",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GuardrailContentPolicyAction =
  (typeof GuardrailContentPolicyAction)[keyof typeof GuardrailContentPolicyAction];

/**
 * @public
 * @enum
 */
export const GuardrailContentFilterConfidence = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GuardrailContentFilterConfidence =
  (typeof GuardrailContentFilterConfidence)[keyof typeof GuardrailContentFilterConfidence];

/**
 * @public
 * @enum
 */
export const GuardrailContentFilterStrength = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GuardrailContentFilterStrength =
  (typeof GuardrailContentFilterStrength)[keyof typeof GuardrailContentFilterStrength];

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
 * <p>The content filter for a guardrail.</p>
 * @public
 */
export interface GuardrailContentFilter {
  /**
   * <p>The guardrail type.</p>
   * @public
   */
  type: GuardrailContentFilterType | undefined;

  /**
   * <p>The guardrail confidence.</p>
   * @public
   */
  confidence: GuardrailContentFilterConfidence | undefined;

  /**
   * <p>The filter strength setting for the guardrail content filter.</p>
   * @public
   */
  filterStrength?: GuardrailContentFilterStrength | undefined;

  /**
   * <p>The guardrail action.</p>
   * @public
   */
  action: GuardrailContentPolicyAction | undefined;

  /**
   * <p>Indicates whether content that breaches the guardrail configuration is detected.</p>
   * @public
   */
  detected?: boolean | undefined;
}

/**
 * <p>An assessment of a content policy for a guardrail.</p>
 * @public
 */
export interface GuardrailContentPolicyAssessment {
  /**
   * <p>The content policy filters.</p>
   * @public
   */
  filters: GuardrailContentFilter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailContextualGroundingPolicyAction = {
  BLOCKED: "BLOCKED",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GuardrailContextualGroundingPolicyAction =
  (typeof GuardrailContextualGroundingPolicyAction)[keyof typeof GuardrailContextualGroundingPolicyAction];

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
 * <p>The details for the guardrails contextual grounding filter.</p>
 * @public
 */
export interface GuardrailContextualGroundingFilter {
  /**
   * <p>The contextual grounding filter type.</p>
   * @public
   */
  type: GuardrailContextualGroundingFilterType | undefined;

  /**
   * <p>The threshold used by contextual grounding filter to determine whether the content is grounded or not.</p>
   * @public
   */
  threshold: number | undefined;

  /**
   * <p>The score generated by contextual grounding filter.</p>
   * @public
   */
  score: number | undefined;

  /**
   * <p>The action performed by the guardrails contextual grounding filter.</p>
   * @public
   */
  action: GuardrailContextualGroundingPolicyAction | undefined;

  /**
   * <p>Indicates whether content that fails the contextual grounding evaluation (grounding or relevance score less than the corresponding threshold) was detected.</p>
   * @public
   */
  detected?: boolean | undefined;
}

/**
 * <p>The policy assessment details for the guardrails contextual grounding filter.</p>
 * @public
 */
export interface GuardrailContextualGroundingPolicyAssessment {
  /**
   * <p>The filter details for the guardrails contextual grounding filter.</p>
   * @public
   */
  filters?: GuardrailContextualGroundingFilter[] | undefined;
}

/**
 * <p>The details of the guardrail image coverage.</p>
 * @public
 */
export interface GuardrailImageCoverage {
  /**
   * <p>The count (integer) of images guardrails guarded.</p>
   * @public
   */
  guarded?: number | undefined;

  /**
   * <p>Represents the total number of images (integer) that were in the request (guarded and unguarded).</p>
   * @public
   */
  total?: number | undefined;
}

/**
 * <p>The guardrail coverage for the text characters.</p>
 * @public
 */
export interface GuardrailTextCharactersCoverage {
  /**
   * <p>The text characters that were guarded by the guardrail coverage.</p>
   * @public
   */
  guarded?: number | undefined;

  /**
   * <p>The total text characters by the guardrail coverage.</p>
   * @public
   */
  total?: number | undefined;
}

/**
 * <p>The action of the guardrail coverage details.</p>
 * @public
 */
export interface GuardrailCoverage {
  /**
   * <p>The text characters of the guardrail coverage details.</p>
   * @public
   */
  textCharacters?: GuardrailTextCharactersCoverage | undefined;

  /**
   * <p>The guardrail coverage for images (the number of images that guardrails guarded).</p>
   * @public
   */
  images?: GuardrailImageCoverage | undefined;
}

/**
 * <p>The details on the use of the guardrail.</p>
 * @public
 */
export interface GuardrailUsage {
  /**
   * <p>The topic policy units processed by the guardrail.</p>
   * @public
   */
  topicPolicyUnits: number | undefined;

  /**
   * <p>The content policy units processed by the guardrail.</p>
   * @public
   */
  contentPolicyUnits: number | undefined;

  /**
   * <p>The word policy units processed by the guardrail.</p>
   * @public
   */
  wordPolicyUnits: number | undefined;

  /**
   * <p>The sensitive information policy units processed by the guardrail.</p>
   * @public
   */
  sensitiveInformationPolicyUnits: number | undefined;

  /**
   * <p>The sensitive information policy free units processed by the guardrail.</p>
   * @public
   */
  sensitiveInformationPolicyFreeUnits: number | undefined;

  /**
   * <p>The contextual grounding policy units processed by the guardrail.</p>
   * @public
   */
  contextualGroundingPolicyUnits: number | undefined;

  /**
   * <p>The content policy image units processed by the guardrail.</p>
   * @public
   */
  contentPolicyImageUnits?: number | undefined;
}

/**
 * <p>The invocation metrics for the guardrail.</p>
 * @public
 */
export interface GuardrailInvocationMetrics {
  /**
   * <p>The processing latency details for the guardrail invocation metrics.</p>
   * @public
   */
  guardrailProcessingLatency?: number | undefined;

  /**
   * <p>The usage details for the guardrail invocation metrics.</p>
   * @public
   */
  usage?: GuardrailUsage | undefined;

  /**
   * <p>The coverage details for the guardrail invocation metrics.</p>
   * @public
   */
  guardrailCoverage?: GuardrailCoverage | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailSensitiveInformationPolicyAction = {
  ANONYMIZED: "ANONYMIZED",
  BLOCKED: "BLOCKED",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GuardrailSensitiveInformationPolicyAction =
  (typeof GuardrailSensitiveInformationPolicyAction)[keyof typeof GuardrailSensitiveInformationPolicyAction];

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
 * <p>A Personally Identifiable Information (PII) entity configured in a guardrail.</p>
 * @public
 */
export interface GuardrailPiiEntityFilter {
  /**
   * <p>The PII entity filter match.</p>
   * @public
   */
  match: string | undefined;

  /**
   * <p>The PII entity filter type.</p>
   * @public
   */
  type: GuardrailPiiEntityType | undefined;

  /**
   * <p>The PII entity filter action.</p>
   * @public
   */
  action: GuardrailSensitiveInformationPolicyAction | undefined;

  /**
   * <p>Indicates whether personally identifiable information (PII) that breaches the guardrail configuration is detected.</p>
   * @public
   */
  detected?: boolean | undefined;
}

/**
 * <p>A Regex filter configured in a guardrail.</p>
 * @public
 */
export interface GuardrailRegexFilter {
  /**
   * <p>The regex filter name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The regesx filter match.</p>
   * @public
   */
  match?: string | undefined;

  /**
   * <p>The regex query.</p>
   * @public
   */
  regex?: string | undefined;

  /**
   * <p>The region filter action.</p>
   * @public
   */
  action: GuardrailSensitiveInformationPolicyAction | undefined;

  /**
   * <p>Indicates whether custom regex entities that breach the guardrail configuration are detected.</p>
   * @public
   */
  detected?: boolean | undefined;
}

/**
 * <p>The assessment for aPersonally Identifiable Information (PII) policy. </p>
 * @public
 */
export interface GuardrailSensitiveInformationPolicyAssessment {
  /**
   * <p>The PII entities in the assessment.</p>
   * @public
   */
  piiEntities: GuardrailPiiEntityFilter[] | undefined;

  /**
   * <p>The regex queries in the assessment.</p>
   * @public
   */
  regexes: GuardrailRegexFilter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailTopicPolicyAction = {
  BLOCKED: "BLOCKED",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GuardrailTopicPolicyAction = (typeof GuardrailTopicPolicyAction)[keyof typeof GuardrailTopicPolicyAction];

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
 * <p>Information about a topic guardrail.</p>
 * @public
 */
export interface GuardrailTopic {
  /**
   * <p>The name for the guardrail.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type behavior that the guardrail should perform when the model detects the topic.</p>
   * @public
   */
  type: GuardrailTopicType | undefined;

  /**
   * <p>The action the guardrail should take when it intervenes on a topic.</p>
   * @public
   */
  action: GuardrailTopicPolicyAction | undefined;

  /**
   * <p>Indicates whether topic content that breaches the guardrail configuration is detected.</p>
   * @public
   */
  detected?: boolean | undefined;
}

/**
 * <p>A behavior assessment of a topic policy.</p>
 * @public
 */
export interface GuardrailTopicPolicyAssessment {
  /**
   * <p>The topics in the assessment.</p>
   * @public
   */
  topics: GuardrailTopic[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailWordPolicyAction = {
  BLOCKED: "BLOCKED",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type GuardrailWordPolicyAction = (typeof GuardrailWordPolicyAction)[keyof typeof GuardrailWordPolicyAction];

/**
 * <p>A custom word configured in a guardrail.</p>
 * @public
 */
export interface GuardrailCustomWord {
  /**
   * <p>The match for the custom word.</p>
   * @public
   */
  match: string | undefined;

  /**
   * <p>The action for the custom word.</p>
   * @public
   */
  action: GuardrailWordPolicyAction | undefined;

  /**
   * <p>Indicates whether custom word content that breaches the guardrail configuration is detected.</p>
   * @public
   */
  detected?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailManagedWordType = {
  PROFANITY: "PROFANITY",
} as const;

/**
 * @public
 */
export type GuardrailManagedWordType = (typeof GuardrailManagedWordType)[keyof typeof GuardrailManagedWordType];

/**
 * <p>A managed word configured in a guardrail.</p>
 * @public
 */
export interface GuardrailManagedWord {
  /**
   * <p>The match for the managed word.</p>
   * @public
   */
  match: string | undefined;

  /**
   * <p>The type for the managed word.</p>
   * @public
   */
  type: GuardrailManagedWordType | undefined;

  /**
   * <p>The action for the managed word.</p>
   * @public
   */
  action: GuardrailWordPolicyAction | undefined;

  /**
   * <p>Indicates whether managed word content that breaches the guardrail configuration is detected.</p>
   * @public
   */
  detected?: boolean | undefined;
}

/**
 * <p>The word policy assessment.</p>
 * @public
 */
export interface GuardrailWordPolicyAssessment {
  /**
   * <p>Custom words in the assessment.</p>
   * @public
   */
  customWords: GuardrailCustomWord[] | undefined;

  /**
   * <p>Managed word lists in the assessment.</p>
   * @public
   */
  managedWordLists: GuardrailManagedWord[] | undefined;
}

/**
 * <p>A behavior assessment of the guardrail policies used in a call to the Converse API. </p>
 * @public
 */
export interface GuardrailAssessment {
  /**
   * <p>The topic policy.</p>
   * @public
   */
  topicPolicy?: GuardrailTopicPolicyAssessment | undefined;

  /**
   * <p>The content policy.</p>
   * @public
   */
  contentPolicy?: GuardrailContentPolicyAssessment | undefined;

  /**
   * <p>The word policy.</p>
   * @public
   */
  wordPolicy?: GuardrailWordPolicyAssessment | undefined;

  /**
   * <p>The sensitive information policy.</p>
   * @public
   */
  sensitiveInformationPolicy?: GuardrailSensitiveInformationPolicyAssessment | undefined;

  /**
   * <p>The contextual grounding policy used for the guardrail assessment.</p>
   * @public
   */
  contextualGroundingPolicy?: GuardrailContextualGroundingPolicyAssessment | undefined;

  /**
   * <p>The invocation metrics for the guardrail assessment.</p>
   * @public
   */
  invocationMetrics?: GuardrailInvocationMetrics | undefined;
}

/**
 * <p>The output content produced by the guardrail.</p>
 * @public
 */
export interface GuardrailOutputContent {
  /**
   * <p>The specific text for the output content produced by the guardrail.</p>
   * @public
   */
  text?: string | undefined;
}

/**
 * @public
 */
export interface ApplyGuardrailResponse {
  /**
   * <p>The usage details in the response from the guardrail.</p>
   * @public
   */
  usage: GuardrailUsage | undefined;

  /**
   * <p>The action taken in the response from the guardrail.</p>
   * @public
   */
  action: GuardrailAction | undefined;

  /**
   * <p>The reason for the action taken when harmful content is detected.</p>
   * @public
   */
  actionReason?: string | undefined;

  /**
   * <p>The output details in the response from the guardrail.</p>
   * @public
   */
  outputs: GuardrailOutputContent[] | undefined;

  /**
   * <p>The assessment details in the response from the guardrail.</p>
   * @public
   */
  assessments: GuardrailAssessment[] | undefined;

  /**
   * <p>The guardrail coverage details in the apply guardrail response.</p>
   * @public
   */
  guardrailCoverage?: GuardrailCoverage | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailTrace = {
  DISABLED: "disabled",
  ENABLED: "enabled",
  ENABLED_FULL: "enabled_full",
} as const;

/**
 * @public
 */
export type GuardrailTrace = (typeof GuardrailTrace)[keyof typeof GuardrailTrace];

/**
 * <p>Configuration information for a guardrail that you use with the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html">Converse</a> operation.</p>
 * @public
 */
export interface GuardrailConfiguration {
  /**
   * <p>The identifier for the guardrail.</p>
   * @public
   */
  guardrailIdentifier: string | undefined;

  /**
   * <p>The version of the guardrail.</p>
   * @public
   */
  guardrailVersion: string | undefined;

  /**
   * <p>The trace behavior for the guardrail.</p>
   * @public
   */
  trace?: GuardrailTrace | undefined;
}

/**
 * <p>Base inference parameters to pass to a model in a call to <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html">Converse</a> or <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html">ConverseStream</a>. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters for foundation models</a>.</p> <p>If you need to pass additional parameters that the model supports, use the <code>additionalModelRequestFields</code> request field in the call to <code>Converse</code> or <code>ConverseStream</code>. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Model parameters</a>.</p>
 * @public
 */
export interface InferenceConfiguration {
  /**
   * <p>The maximum number of tokens to allow in the generated response. The default value is the maximum allowed value for the model that you are using. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters for foundation models</a>. </p>
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * <p>The likelihood of the model selecting higher-probability options while generating a response. A lower value makes the model more likely to choose higher-probability options, while a higher value makes the model more likely to choose lower-probability options.</p> <p>The default value is the default value for the model that you are using. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters for foundation models</a>. </p>
   * @public
   */
  temperature?: number | undefined;

  /**
   * <p>The percentage of most-likely candidates that the model considers for the next token. For example, if you choose a value of 0.8 for <code>topP</code>, the model selects from the top 80% of the probability distribution of tokens that could be next in the sequence.</p> <p>The default value is the default value for the model that you are using. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters for foundation models</a>. </p>
   * @public
   */
  topP?: number | undefined;

  /**
   * <p>A list of stop sequences. A stop sequence is a sequence of characters that causes the model to stop generating the response. </p>
   * @public
   */
  stopSequences?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const CachePointType = {
  DEFAULT: "default",
} as const;

/**
 * @public
 */
export type CachePointType = (typeof CachePointType)[keyof typeof CachePointType];

/**
 * <p>Defines a section of content to be cached for reuse in subsequent API calls.</p>
 * @public
 */
export interface CachePointBlock {
  /**
   * <p>Specifies the type of cache point within the CachePointBlock.</p>
   * @public
   */
  type: CachePointType | undefined;
}

/**
 * <p>Specifies a character-level location within a document, providing precise positioning information for cited content using start and end character indices.</p>
 * @public
 */
export interface DocumentCharLocation {
  /**
   * <p>The index of the document within the array of documents provided in the request.</p>
   * @public
   */
  documentIndex?: number | undefined;

  /**
   * <p>The starting character position of the cited content within the document.</p>
   * @public
   */
  start?: number | undefined;

  /**
   * <p>The ending character position of the cited content within the document.</p>
   * @public
   */
  end?: number | undefined;
}

/**
 * <p>Specifies a chunk-level location within a document, providing positioning information for cited content using logical document segments or chunks.</p>
 * @public
 */
export interface DocumentChunkLocation {
  /**
   * <p>The index of the document within the array of documents provided in the request.</p>
   * @public
   */
  documentIndex?: number | undefined;

  /**
   * <p>The starting chunk identifier or index of the cited content within the document.</p>
   * @public
   */
  start?: number | undefined;

  /**
   * <p>The ending chunk identifier or index of the cited content within the document.</p>
   * @public
   */
  end?: number | undefined;
}

/**
 * <p>Specifies a page-level location within a document, providing positioning information for cited content using page numbers.</p>
 * @public
 */
export interface DocumentPageLocation {
  /**
   * <p>The index of the document within the array of documents provided in the request.</p>
   * @public
   */
  documentIndex?: number | undefined;

  /**
   * <p>The starting page number of the cited content within the document.</p>
   * @public
   */
  start?: number | undefined;

  /**
   * <p>The ending page number of the cited content within the document.</p>
   * @public
   */
  end?: number | undefined;
}

/**
 * <p>Specifies the precise location within a source document where cited content can be found. This can include character-level positions, page numbers, or document chunks depending on the document type and indexing method.</p>
 * @public
 */
export type CitationLocation =
  | CitationLocation.DocumentCharMember
  | CitationLocation.DocumentChunkMember
  | CitationLocation.DocumentPageMember
  | CitationLocation.$UnknownMember;

/**
 * @public
 */
export namespace CitationLocation {
  /**
   * <p>The character-level location within the document where the cited content is found.</p>
   * @public
   */
  export interface DocumentCharMember {
    documentChar: DocumentCharLocation;
    documentPage?: never;
    documentChunk?: never;
    $unknown?: never;
  }

  /**
   * <p>The page-level location within the document where the cited content is found.</p>
   * @public
   */
  export interface DocumentPageMember {
    documentChar?: never;
    documentPage: DocumentPageLocation;
    documentChunk?: never;
    $unknown?: never;
  }

  /**
   * <p>The chunk-level location within the document where the cited content is found, typically used for documents that have been segmented into logical chunks.</p>
   * @public
   */
  export interface DocumentChunkMember {
    documentChar?: never;
    documentPage?: never;
    documentChunk: DocumentChunkLocation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    documentChar?: never;
    documentPage?: never;
    documentChunk?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    documentChar: (value: DocumentCharLocation) => T;
    documentPage: (value: DocumentPageLocation) => T;
    documentChunk: (value: DocumentChunkLocation) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CitationLocation, visitor: Visitor<T>): T => {
    if (value.documentChar !== undefined) return visitor.documentChar(value.documentChar);
    if (value.documentPage !== undefined) return visitor.documentPage(value.documentPage);
    if (value.documentChunk !== undefined) return visitor.documentChunk(value.documentChunk);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains the actual text content from a source document that is being cited or referenced in the model's response.</p>
 * @public
 */
export type CitationSourceContent = CitationSourceContent.TextMember | CitationSourceContent.$UnknownMember;

/**
 * @public
 */
export namespace CitationSourceContent {
  /**
   * <p>The text content from the source document that is being cited.</p>
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

  export interface Visitor<T> {
    text: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CitationSourceContent, visitor: Visitor<T>): T => {
    if (value.text !== undefined) return visitor.text(value.text);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains information about a citation that references a specific source document. Citations provide traceability between the model's generated response and the source documents that informed that response.</p>
 * @public
 */
export interface Citation {
  /**
   * <p>The title or identifier of the source document being cited.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The specific content from the source document that was referenced or cited in the generated response.</p>
   * @public
   */
  sourceContent?: CitationSourceContent[] | undefined;

  /**
   * <p>The precise location within the source document where the cited content can be found, including character positions, page numbers, or chunk identifiers.</p>
   * @public
   */
  location?: CitationLocation | undefined;
}

/**
 * <p>Contains the generated text content that corresponds to or is supported by a citation from a source document.</p>
 * @public
 */
export type CitationGeneratedContent = CitationGeneratedContent.TextMember | CitationGeneratedContent.$UnknownMember;

/**
 * @public
 */
export namespace CitationGeneratedContent {
  /**
   * <p>The text content that was generated by the model and is supported by the associated citation.</p>
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

  export interface Visitor<T> {
    text: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CitationGeneratedContent, visitor: Visitor<T>): T => {
    if (value.text !== undefined) return visitor.text(value.text);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>A content block that contains both generated text and associated citation information. This block type is returned when document citations are enabled, providing traceability between the generated content and the source documents that informed the response.</p>
 * @public
 */
export interface CitationsContentBlock {
  /**
   * <p>The generated content that is supported by the associated citations.</p>
   * @public
   */
  content?: CitationGeneratedContent[] | undefined;

  /**
   * <p>An array of citations that reference the source documents used to generate the associated content.</p>
   * @public
   */
  citations?: Citation[] | undefined;
}

/**
 * <p>Configuration settings for enabling and controlling document citations in Converse API responses. When enabled, the model can include citation information that links generated content back to specific source documents.</p>
 * @public
 */
export interface CitationsConfig {
  /**
   * <p>Specifies whether document citations should be included in the model's response. When set to true, the model can generate citations that reference the source documents used to inform the response.</p>
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const DocumentFormat = {
  CSV: "csv",
  DOC: "doc",
  DOCX: "docx",
  HTML: "html",
  MD: "md",
  PDF: "pdf",
  TXT: "txt",
  XLS: "xls",
  XLSX: "xlsx",
} as const;

/**
 * @public
 */
export type DocumentFormat = (typeof DocumentFormat)[keyof typeof DocumentFormat];

/**
 * <p>Contains the actual content of a document that can be processed by the model and potentially cited in the response.</p>
 * @public
 */
export type DocumentContentBlock = DocumentContentBlock.TextMember | DocumentContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace DocumentContentBlock {
  /**
   * <p>The text content of the document.</p>
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

  export interface Visitor<T> {
    text: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DocumentContentBlock, visitor: Visitor<T>): T => {
    if (value.text !== undefined) return visitor.text(value.text);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>A storage location in an Amazon S3 bucket.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>An object URI starting with <code>s3://</code>.</p>
   * @public
   */
  uri: string | undefined;

  /**
   * <p>If the bucket belongs to another AWS account, specify that account's ID.</p>
   * @public
   */
  bucketOwner?: string | undefined;
}

/**
 * <p>Contains the content of a document.</p>
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
   * <p>The raw bytes for the document. If you use an Amazon Web Services SDK, you don't need to encode the bytes in base64.</p>
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
   * <p>The location of a document object in an Amazon S3 bucket. To see which models support S3 uploads, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference-supported-models-features.html">Supported models and features for Converse</a>.</p>
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
   * <p>The text content of the document source.</p>
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
   * <p>The structured content of the document source, which may include various content blocks such as text, images, or other document elements.</p>
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

  export interface Visitor<T> {
    bytes: (value: Uint8Array) => T;
    s3Location: (value: S3Location) => T;
    text: (value: string) => T;
    content: (value: DocumentContentBlock[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DocumentSource, visitor: Visitor<T>): T => {
    if (value.bytes !== undefined) return visitor.bytes(value.bytes);
    if (value.s3Location !== undefined) return visitor.s3Location(value.s3Location);
    if (value.text !== undefined) return visitor.text(value.text);
    if (value.content !== undefined) return visitor.content(value.content);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>A document to include in a message.</p>
 * @public
 */
export interface DocumentBlock {
  /**
   * <p>The format of a document, or its extension.</p>
   * @public
   */
  format?: DocumentFormat | undefined;

  /**
   * <p>A name for the document. The name can only contain the following characters:</p> <ul> <li> <p>Alphanumeric characters</p> </li> <li> <p>Whitespace characters (no more than one in a row)</p> </li> <li> <p>Hyphens</p> </li> <li> <p>Parentheses</p> </li> <li> <p>Square brackets</p> </li> </ul> <note> <p>This field is vulnerable to prompt injections, because the model might inadvertently interpret it as instructions. Therefore, we recommend that you specify a neutral name.</p> </note>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Contains the content of the document.</p>
   * @public
   */
  source: DocumentSource | undefined;

  /**
   * <p>Contextual information about how the document should be processed or interpreted by the model when generating citations.</p>
   * @public
   */
  context?: string | undefined;

  /**
   * <p>Configuration settings that control how citations should be generated for this specific document.</p>
   * @public
   */
  citations?: CitationsConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailConverseImageFormat = {
  JPEG: "jpeg",
  PNG: "png",
} as const;

/**
 * @public
 */
export type GuardrailConverseImageFormat =
  (typeof GuardrailConverseImageFormat)[keyof typeof GuardrailConverseImageFormat];

/**
 * <p>The image source (image bytes) of the guardrail converse image source.</p>
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
   * <p>The raw image bytes for the image.</p>
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

  export interface Visitor<T> {
    bytes: (value: Uint8Array) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: GuardrailConverseImageSource, visitor: Visitor<T>): T => {
    if (value.bytes !== undefined) return visitor.bytes(value.bytes);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>An image block that contains images that you want to assess with a guardrail.</p>
 * @public
 */
export interface GuardrailConverseImageBlock {
  /**
   * <p>The format details for the image type of the guardrail converse image block.</p>
   * @public
   */
  format: GuardrailConverseImageFormat | undefined;

  /**
   * <p>The image source (image bytes) of the guardrail converse image block.</p>
   * @public
   */
  source: GuardrailConverseImageSource | undefined;
}

/**
 * @public
 * @enum
 */
export const GuardrailConverseContentQualifier = {
  GROUNDING_SOURCE: "grounding_source",
  GUARD_CONTENT: "guard_content",
  QUERY: "query",
} as const;

/**
 * @public
 */
export type GuardrailConverseContentQualifier =
  (typeof GuardrailConverseContentQualifier)[keyof typeof GuardrailConverseContentQualifier];

/**
 * <p>A text block that contains text that you want to assess with a guardrail. For more information, see <a>GuardrailConverseContentBlock</a>.</p>
 * @public
 */
export interface GuardrailConverseTextBlock {
  /**
   * <p>The text that you want to guard.</p>
   * @public
   */
  text: string | undefined;

  /**
   * <p>The qualifier details for the guardrails contextual grounding filter.</p>
   * @public
   */
  qualifiers?: GuardrailConverseContentQualifier[] | undefined;
}

/**
 * <p/> <p>A content block for selective guarding with the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html">Converse</a> or <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html">ConverseStream</a> API operations. </p>
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
   * <p>The text to guard.</p>
   * @public
   */
  export interface TextMember {
    text: GuardrailConverseTextBlock;
    image?: never;
    $unknown?: never;
  }

  /**
   * <p>Image within converse content block to be evaluated by the guardrail.</p>
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

  export interface Visitor<T> {
    text: (value: GuardrailConverseTextBlock) => T;
    image: (value: GuardrailConverseImageBlock) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: GuardrailConverseContentBlock, visitor: Visitor<T>): T => {
    if (value.text !== undefined) return visitor.text(value.text);
    if (value.image !== undefined) return visitor.image(value.image);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ImageFormat = {
  GIF: "gif",
  JPEG: "jpeg",
  PNG: "png",
  WEBP: "webp",
} as const;

/**
 * @public
 */
export type ImageFormat = (typeof ImageFormat)[keyof typeof ImageFormat];

/**
 * <p>The source for an image.</p>
 * @public
 */
export type ImageSource = ImageSource.BytesMember | ImageSource.S3LocationMember | ImageSource.$UnknownMember;

/**
 * @public
 */
export namespace ImageSource {
  /**
   * <p>The raw image bytes for the image. If you use an AWS SDK, you don't need to encode the image bytes in base64.</p>
   * @public
   */
  export interface BytesMember {
    bytes: Uint8Array;
    s3Location?: never;
    $unknown?: never;
  }

  /**
   * <p>The location of an image object in an Amazon S3 bucket. To see which models support S3 uploads, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference-supported-models-features.html">Supported models and features for Converse</a>.</p>
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

  export interface Visitor<T> {
    bytes: (value: Uint8Array) => T;
    s3Location: (value: S3Location) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ImageSource, visitor: Visitor<T>): T => {
    if (value.bytes !== undefined) return visitor.bytes(value.bytes);
    if (value.s3Location !== undefined) return visitor.s3Location(value.s3Location);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Image content for a message.</p>
 * @public
 */
export interface ImageBlock {
  /**
   * <p>The format of the image.</p>
   * @public
   */
  format: ImageFormat | undefined;

  /**
   * <p>The source for the image.</p>
   * @public
   */
  source: ImageSource | undefined;
}

/**
 * <p>Contains the reasoning that the model used to return the output.</p>
 * @public
 */
export interface ReasoningTextBlock {
  /**
   * <p>The reasoning that the model used to return the output.</p>
   * @public
   */
  text: string | undefined;

  /**
   * <p>A token that verifies that the reasoning text was generated by the model. If you pass a reasoning block back to the API in a multi-turn conversation, include the text and its signature unmodified.</p>
   * @public
   */
  signature?: string | undefined;
}

/**
 * <p>Contains content regarding the reasoning that is carried out by the model with respect to the content in the content block. Reasoning refers to a Chain of Thought (CoT) that the model generates to enhance the accuracy of its final response.</p>
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
   * <p>The reasoning that the model used to return the output.</p>
   * @public
   */
  export interface ReasoningTextMember {
    reasoningText: ReasoningTextBlock;
    redactedContent?: never;
    $unknown?: never;
  }

  /**
   * <p>The content in the reasoning that was encrypted by the model provider for safety reasons. The encryption doesn't affect the quality of responses.</p>
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

  export interface Visitor<T> {
    reasoningText: (value: ReasoningTextBlock) => T;
    redactedContent: (value: Uint8Array) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ReasoningContentBlock, visitor: Visitor<T>): T => {
    if (value.reasoningText !== undefined) return visitor.reasoningText(value.reasoningText);
    if (value.redactedContent !== undefined) return visitor.redactedContent(value.redactedContent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const VideoFormat = {
  FLV: "flv",
  MKV: "mkv",
  MOV: "mov",
  MP4: "mp4",
  MPEG: "mpeg",
  MPG: "mpg",
  THREE_GP: "three_gp",
  WEBM: "webm",
  WMV: "wmv",
} as const;

/**
 * @public
 */
export type VideoFormat = (typeof VideoFormat)[keyof typeof VideoFormat];

/**
 * <p>A video source. You can upload a smaller video as a base64-encoded string as long as the encoded file is less than 25MB. You can also transfer videos up to 1GB in size from an S3 bucket.</p>
 * @public
 */
export type VideoSource = VideoSource.BytesMember | VideoSource.S3LocationMember | VideoSource.$UnknownMember;

/**
 * @public
 */
export namespace VideoSource {
  /**
   * <p>Video content encoded in base64.</p>
   * @public
   */
  export interface BytesMember {
    bytes: Uint8Array;
    s3Location?: never;
    $unknown?: never;
  }

  /**
   * <p>The location of a video object in an Amazon S3 bucket. To see which models support S3 uploads, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference-supported-models-features.html">Supported models and features for Converse</a>.</p>
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

  export interface Visitor<T> {
    bytes: (value: Uint8Array) => T;
    s3Location: (value: S3Location) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: VideoSource, visitor: Visitor<T>): T => {
    if (value.bytes !== undefined) return visitor.bytes(value.bytes);
    if (value.s3Location !== undefined) return visitor.s3Location(value.s3Location);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>A video block.</p>
 * @public
 */
export interface VideoBlock {
  /**
   * <p>The block's format.</p>
   * @public
   */
  format: VideoFormat | undefined;

  /**
   * <p>The block's source.</p>
   * @public
   */
  source: VideoSource | undefined;
}

/**
 * <p>The tool result content block.</p>
 * @public
 */
export type ToolResultContentBlock =
  | ToolResultContentBlock.DocumentMember
  | ToolResultContentBlock.ImageMember
  | ToolResultContentBlock.JsonMember
  | ToolResultContentBlock.TextMember
  | ToolResultContentBlock.VideoMember
  | ToolResultContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace ToolResultContentBlock {
  /**
   * <p>A tool result that is JSON format data.</p>
   * @public
   */
  export interface JsonMember {
    json: __DocumentType;
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    $unknown?: never;
  }

  /**
   * <p>A tool result that is text.</p>
   * @public
   */
  export interface TextMember {
    json?: never;
    text: string;
    image?: never;
    document?: never;
    video?: never;
    $unknown?: never;
  }

  /**
   * <p>A tool result that is an image.</p> <note> <p>This field is only supported by Anthropic Claude 3 models.</p> </note>
   * @public
   */
  export interface ImageMember {
    json?: never;
    text?: never;
    image: ImageBlock;
    document?: never;
    video?: never;
    $unknown?: never;
  }

  /**
   * <p>A tool result that is a document.</p>
   * @public
   */
  export interface DocumentMember {
    json?: never;
    text?: never;
    image?: never;
    document: DocumentBlock;
    video?: never;
    $unknown?: never;
  }

  /**
   * <p>A tool result that is video.</p>
   * @public
   */
  export interface VideoMember {
    json?: never;
    text?: never;
    image?: never;
    document?: never;
    video: VideoBlock;
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
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    json: (value: __DocumentType) => T;
    text: (value: string) => T;
    image: (value: ImageBlock) => T;
    document: (value: DocumentBlock) => T;
    video: (value: VideoBlock) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ToolResultContentBlock, visitor: Visitor<T>): T => {
    if (value.json !== undefined) return visitor.json(value.json);
    if (value.text !== undefined) return visitor.text(value.text);
    if (value.image !== undefined) return visitor.image(value.image);
    if (value.document !== undefined) return visitor.document(value.document);
    if (value.video !== undefined) return visitor.video(value.video);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ToolResultStatus = {
  ERROR: "error",
  SUCCESS: "success",
} as const;

/**
 * @public
 */
export type ToolResultStatus = (typeof ToolResultStatus)[keyof typeof ToolResultStatus];

/**
 * <p>A tool result block that contains the results for a tool request that the model previously made.</p>
 * @public
 */
export interface ToolResultBlock {
  /**
   * <p>The ID of the tool request that this is the result for.</p>
   * @public
   */
  toolUseId: string | undefined;

  /**
   * <p>The content for tool result content block.</p>
   * @public
   */
  content: ToolResultContentBlock[] | undefined;

  /**
   * <p>The status for the tool result content block.</p> <note> <p>This field is only supported Anthropic Claude 3 models.</p> </note>
   * @public
   */
  status?: ToolResultStatus | undefined;
}

/**
 * <p>A tool use content block. Contains information about a tool that the model is requesting be run., The model uses the result from the tool to generate a response. </p>
 * @public
 */
export interface ToolUseBlock {
  /**
   * <p>The ID for the tool request.</p>
   * @public
   */
  toolUseId: string | undefined;

  /**
   * <p>The name of the tool that the model wants to use.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The input to pass to the tool. </p>
   * @public
   */
  input: __DocumentType | undefined;
}

/**
 * <p>A block of content for a message that you pass to, or receive from, a model with the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html">Converse</a> or <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html">ConverseStream</a> API operations.</p>
 * @public
 */
export type ContentBlock =
  | ContentBlock.CachePointMember
  | ContentBlock.CitationsContentMember
  | ContentBlock.DocumentMember
  | ContentBlock.GuardContentMember
  | ContentBlock.ImageMember
  | ContentBlock.ReasoningContentMember
  | ContentBlock.TextMember
  | ContentBlock.ToolResultMember
  | ContentBlock.ToolUseMember
  | ContentBlock.VideoMember
  | ContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace ContentBlock {
  /**
   * <p>Text to include in the message.</p>
   * @public
   */
  export interface TextMember {
    text: string;
    image?: never;
    document?: never;
    video?: never;
    toolUse?: never;
    toolResult?: never;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent?: never;
    $unknown?: never;
  }

  /**
   * <p>Image to include in the message. </p> <note> <p>This field is only supported by Anthropic Claude 3 models.</p> </note>
   * @public
   */
  export interface ImageMember {
    text?: never;
    image: ImageBlock;
    document?: never;
    video?: never;
    toolUse?: never;
    toolResult?: never;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent?: never;
    $unknown?: never;
  }

  /**
   * <p>A document to include in the message.</p>
   * @public
   */
  export interface DocumentMember {
    text?: never;
    image?: never;
    document: DocumentBlock;
    video?: never;
    toolUse?: never;
    toolResult?: never;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent?: never;
    $unknown?: never;
  }

  /**
   * <p>Video to include in the message. </p>
   * @public
   */
  export interface VideoMember {
    text?: never;
    image?: never;
    document?: never;
    video: VideoBlock;
    toolUse?: never;
    toolResult?: never;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a tool use request from a model.</p>
   * @public
   */
  export interface ToolUseMember {
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    toolUse: ToolUseBlock;
    toolResult?: never;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent?: never;
    $unknown?: never;
  }

  /**
   * <p>The result for a tool request that a model makes.</p>
   * @public
   */
  export interface ToolResultMember {
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    toolUse?: never;
    toolResult: ToolResultBlock;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains the content to assess with the guardrail. If you don't specify <code>guardContent</code> in a call to the Converse API, the guardrail (if passed in the Converse API) assesses the entire message.</p> <p>For more information, see <i>Use a guardrail with the Converse API</i> in the <i>Amazon Bedrock User Guide</i>. </p>
   * @public
   */
  export interface GuardContentMember {
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    toolUse?: never;
    toolResult?: never;
    guardContent: GuardrailConverseContentBlock;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent?: never;
    $unknown?: never;
  }

  /**
   * <p>CachePoint to include in the message.</p>
   * @public
   */
  export interface CachePointMember {
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    toolUse?: never;
    toolResult?: never;
    guardContent?: never;
    cachePoint: CachePointBlock;
    reasoningContent?: never;
    citationsContent?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains content regarding the reasoning that is carried out by the model. Reasoning refers to a Chain of Thought (CoT) that the model generates to enhance the accuracy of its final response.</p>
   * @public
   */
  export interface ReasoningContentMember {
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    toolUse?: never;
    toolResult?: never;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent: ReasoningContentBlock;
    citationsContent?: never;
    $unknown?: never;
  }

  /**
   * <p>A content block that contains both generated text and associated citation information, providing traceability between the response and source documents.</p>
   * @public
   */
  export interface CitationsContentMember {
    text?: never;
    image?: never;
    document?: never;
    video?: never;
    toolUse?: never;
    toolResult?: never;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent: CitationsContentBlock;
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
    toolUse?: never;
    toolResult?: never;
    guardContent?: never;
    cachePoint?: never;
    reasoningContent?: never;
    citationsContent?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    text: (value: string) => T;
    image: (value: ImageBlock) => T;
    document: (value: DocumentBlock) => T;
    video: (value: VideoBlock) => T;
    toolUse: (value: ToolUseBlock) => T;
    toolResult: (value: ToolResultBlock) => T;
    guardContent: (value: GuardrailConverseContentBlock) => T;
    cachePoint: (value: CachePointBlock) => T;
    reasoningContent: (value: ReasoningContentBlock) => T;
    citationsContent: (value: CitationsContentBlock) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ContentBlock, visitor: Visitor<T>): T => {
    if (value.text !== undefined) return visitor.text(value.text);
    if (value.image !== undefined) return visitor.image(value.image);
    if (value.document !== undefined) return visitor.document(value.document);
    if (value.video !== undefined) return visitor.video(value.video);
    if (value.toolUse !== undefined) return visitor.toolUse(value.toolUse);
    if (value.toolResult !== undefined) return visitor.toolResult(value.toolResult);
    if (value.guardContent !== undefined) return visitor.guardContent(value.guardContent);
    if (value.cachePoint !== undefined) return visitor.cachePoint(value.cachePoint);
    if (value.reasoningContent !== undefined) return visitor.reasoningContent(value.reasoningContent);
    if (value.citationsContent !== undefined) return visitor.citationsContent(value.citationsContent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ConversationRole = {
  ASSISTANT: "assistant",
  USER: "user",
} as const;

/**
 * @public
 */
export type ConversationRole = (typeof ConversationRole)[keyof typeof ConversationRole];

/**
 * <p>A message input, or returned from, a call to <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html">Converse</a> or <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html">ConverseStream</a>.</p>
 * @public
 */
export interface Message {
  /**
   * <p>The role that the message plays in the message.</p>
   * @public
   */
  role: ConversationRole | undefined;

  /**
   * <p>The message content. Note the following restrictions:</p> <ul> <li> <p>You can include up to 20 images. Each image's size, height, and width must be no more than 3.75 MB, 8000 px, and 8000 px, respectively.</p> </li> <li> <p>You can include up to five documents. Each document's size must be no more than 4.5 MB.</p> </li> <li> <p>If you include a <code>ContentBlock</code> with a <code>document</code> field in the array, you must also include a <code>ContentBlock</code> with a <code>text</code> field.</p> </li> <li> <p>You can only include images and documents if the <code>role</code> is <code>user</code>.</p> </li> </ul>
   * @public
   */
  content: ContentBlock[] | undefined;
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
 * <p>Performance settings for a model.</p>
 * @public
 */
export interface PerformanceConfiguration {
  /**
   * <p>To use a latency-optimized version of the model, set to <code>optimized</code>.</p>
   * @public
   */
  latency?: PerformanceConfigLatency | undefined;
}

/**
 * <p>Contains a map of variables in a prompt from Prompt management to an object containing the values to fill in for them when running model invocation. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-how.html">How Prompt management works</a>.</p>
 * @public
 */
export type PromptVariableValues = PromptVariableValues.TextMember | PromptVariableValues.$UnknownMember;

/**
 * @public
 */
export namespace PromptVariableValues {
  /**
   * <p>The text value that the variable maps to.</p>
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

  export interface Visitor<T> {
    text: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PromptVariableValues, visitor: Visitor<T>): T => {
    if (value.text !== undefined) return visitor.text(value.text);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>A system content block.</p>
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
   * <p>A system prompt for the model. </p>
   * @public
   */
  export interface TextMember {
    text: string;
    guardContent?: never;
    cachePoint?: never;
    $unknown?: never;
  }

  /**
   * <p>A content block to assess with the guardrail. Use with the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html">Converse</a> or <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html">ConverseStream</a> API operations. </p> <p>For more information, see <i>Use a guardrail with the Converse API</i> in the <i>Amazon Bedrock User Guide</i>.</p>
   * @public
   */
  export interface GuardContentMember {
    text?: never;
    guardContent: GuardrailConverseContentBlock;
    cachePoint?: never;
    $unknown?: never;
  }

  /**
   * <p>CachePoint to include in the system prompt.</p>
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

  export interface Visitor<T> {
    text: (value: string) => T;
    guardContent: (value: GuardrailConverseContentBlock) => T;
    cachePoint: (value: CachePointBlock) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SystemContentBlock, visitor: Visitor<T>): T => {
    if (value.text !== undefined) return visitor.text(value.text);
    if (value.guardContent !== undefined) return visitor.guardContent(value.guardContent);
    if (value.cachePoint !== undefined) return visitor.cachePoint(value.cachePoint);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The model must request at least one tool (no text is generated). For example, <code>\{"any" : \{\}\}</code>.</p>
 * @public
 */
export interface AnyToolChoice {}

/**
 * <p>The Model automatically decides if a tool should be called or whether to generate text instead. For example, <code>\{"auto" : \{\}\}</code>.</p>
 * @public
 */
export interface AutoToolChoice {}

/**
 * <p>The model must request a specific tool. For example, <code>\{"tool" : \{"name" : "Your tool name"\}\}</code>.</p> <note> <p>This field is only supported by Anthropic Claude 3 models.</p> </note>
 * @public
 */
export interface SpecificToolChoice {
  /**
   * <p>The name of the tool that the model must request. </p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Determines which tools the model should request in a call to <code>Converse</code> or <code>ConverseStream</code>. <code>ToolChoice</code> is only supported by Anthropic Claude 3 models and by Mistral AI Mistral Large.</p>
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
   * <p>(Default). The Model automatically decides if a tool should be called or whether to generate text instead. </p>
   * @public
   */
  export interface AutoMember {
    auto: AutoToolChoice;
    any?: never;
    tool?: never;
    $unknown?: never;
  }

  /**
   * <p>The model must request at least one tool (no text is generated).</p>
   * @public
   */
  export interface AnyMember {
    auto?: never;
    any: AnyToolChoice;
    tool?: never;
    $unknown?: never;
  }

  /**
   * <p>The Model must request the specified tool. Only supported by Anthropic Claude 3 models. </p>
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

  export interface Visitor<T> {
    auto: (value: AutoToolChoice) => T;
    any: (value: AnyToolChoice) => T;
    tool: (value: SpecificToolChoice) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ToolChoice, visitor: Visitor<T>): T => {
    if (value.auto !== undefined) return visitor.auto(value.auto);
    if (value.any !== undefined) return visitor.any(value.any);
    if (value.tool !== undefined) return visitor.tool(value.tool);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The schema for the tool. The top level schema type must be <code>object</code>. </p>
 * @public
 */
export type ToolInputSchema = ToolInputSchema.JsonMember | ToolInputSchema.$UnknownMember;

/**
 * @public
 */
export namespace ToolInputSchema {
  /**
   * <p>The JSON schema for the tool. For more information, see <a href="https://json-schema.org/understanding-json-schema/reference">JSON Schema Reference</a>.</p>
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

  export interface Visitor<T> {
    json: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ToolInputSchema, visitor: Visitor<T>): T => {
    if (value.json !== undefined) return visitor.json(value.json);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The specification for the tool.</p>
 * @public
 */
export interface ToolSpecification {
  /**
   * <p>The name for the tool.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description for the tool.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The input schema for the tool in JSON format.</p>
   * @public
   */
  inputSchema: ToolInputSchema | undefined;
}

/**
 * <p>Information about a tool that you can use with the Converse API. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html">Tool use (function calling)</a> in the Amazon Bedrock User Guide.</p>
 * @public
 */
export type Tool = Tool.CachePointMember | Tool.ToolSpecMember | Tool.$UnknownMember;

/**
 * @public
 */
export namespace Tool {
  /**
   * <p>The specfication for the tool.</p>
   * @public
   */
  export interface ToolSpecMember {
    toolSpec: ToolSpecification;
    cachePoint?: never;
    $unknown?: never;
  }

  /**
   * <p>CachePoint to include in the tool configuration.</p>
   * @public
   */
  export interface CachePointMember {
    toolSpec?: never;
    cachePoint: CachePointBlock;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    toolSpec?: never;
    cachePoint?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    toolSpec: (value: ToolSpecification) => T;
    cachePoint: (value: CachePointBlock) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Tool, visitor: Visitor<T>): T => {
    if (value.toolSpec !== undefined) return visitor.toolSpec(value.toolSpec);
    if (value.cachePoint !== undefined) return visitor.cachePoint(value.cachePoint);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Configuration information for the tools that you pass to a model. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tool-use.html">Tool use (function calling)</a> in the Amazon Bedrock User Guide.</p>
 * @public
 */
export interface ToolConfiguration {
  /**
   * <p>An array of tools that you want to pass to a model.</p>
   * @public
   */
  tools: Tool[] | undefined;

  /**
   * <p>If supported by model, forces the model to request a tool.</p>
   * @public
   */
  toolChoice?: ToolChoice | undefined;
}

/**
 * @public
 */
export interface ConverseRequest {
  /**
   * <p>Specifies the model or throughput with which to run inference, or the prompt resource to use in inference. The value depends on the resource that you use:</p> <ul> <li> <p>If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#model-ids-arns">Amazon Bedrock base model IDs (on-demand throughput)</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use an inference profile, specify the inference profile ID or its ARN. For a list of inference profile IDs, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference-support.html">Supported Regions and models for cross-region inference</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prov-thru-use.html">Run inference using a Provisioned Throughput</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use a custom model, first purchase Provisioned Throughput for it. Then specify the ARN of the resulting provisioned model. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-use.html">Use a custom model in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>To include a prompt that was defined in <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html">Prompt management</a>, specify the ARN of the prompt version to use.</p> </li> </ul> <p>The Converse API doesn't support <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html">imported models</a>.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The messages that you want to send to the model.</p>
   * @public
   */
  messages?: Message[] | undefined;

  /**
   * <p>A prompt that provides instructions or context to the model about the task it should perform, or the persona it should adopt during the conversation.</p>
   * @public
   */
  system?: SystemContentBlock[] | undefined;

  /**
   * <p>Inference parameters to pass to the model. <code>Converse</code> and <code>ConverseStream</code> support a base set of inference parameters. If you need to pass additional parameters that the model supports, use the <code>additionalModelRequestFields</code> request field.</p>
   * @public
   */
  inferenceConfig?: InferenceConfiguration | undefined;

  /**
   * <p>Configuration information for the tools that the model can use when generating a response. </p> <p>For information about models that support tool use, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features">Supported models and model features</a>.</p>
   * @public
   */
  toolConfig?: ToolConfiguration | undefined;

  /**
   * <p>Configuration information for a guardrail that you want to use in the request. If you include <code>guardContent</code> blocks in the <code>content</code> field in the <code>messages</code> field, the guardrail operates only on those messages. If you include no <code>guardContent</code> blocks, the guardrail operates on all messages in the request body and in any included prompt resource.</p>
   * @public
   */
  guardrailConfig?: GuardrailConfiguration | undefined;

  /**
   * <p>Additional inference parameters that the model supports, beyond the base set of inference parameters that <code>Converse</code> and <code>ConverseStream</code> support in the <code>inferenceConfig</code> field. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Model parameters</a>.</p>
   * @public
   */
  additionalModelRequestFields?: __DocumentType | undefined;

  /**
   * <p>Contains a map of variables in a prompt from Prompt management to objects containing the values to fill in for them when running model invocation. This field is ignored if you don't specify a prompt resource in the <code>modelId</code> field.</p>
   * @public
   */
  promptVariables?: Record<string, PromptVariableValues> | undefined;

  /**
   * <p>Additional model parameters field paths to return in the response. <code>Converse</code> and <code>ConverseStream</code> return the requested fields as a JSON Pointer object in the <code>additionalModelResponseFields</code> field. The following is example JSON for <code>additionalModelResponseFieldPaths</code>.</p> <p> <code>[ "/stop_sequence" ]</code> </p> <p>For information about the JSON Pointer syntax, see the <a href="https://datatracker.ietf.org/doc/html/rfc6901">Internet Engineering Task Force (IETF)</a> documentation.</p> <p> <code>Converse</code> and <code>ConverseStream</code> reject an empty JSON Pointer or incorrectly structured JSON Pointer with a <code>400</code> error code. if the JSON Pointer is valid, but the requested field is not in the model response, it is ignored by <code>Converse</code>.</p>
   * @public
   */
  additionalModelResponseFieldPaths?: string[] | undefined;

  /**
   * <p>Key-value pairs that you can use to filter invocation logs.</p>
   * @public
   */
  requestMetadata?: Record<string, string> | undefined;

  /**
   * <p>Model performance settings for the request.</p>
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;
}

/**
 * <p>Metrics for a call to <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html">Converse</a>.</p>
 * @public
 */
export interface ConverseMetrics {
  /**
   * <p>The latency of the call to <code>Converse</code>, in milliseconds. </p>
   * @public
   */
  latencyMs: number | undefined;
}

/**
 * <p>The output from a call to <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html">Converse</a>.</p>
 * @public
 */
export type ConverseOutput = ConverseOutput.MessageMember | ConverseOutput.$UnknownMember;

/**
 * @public
 */
export namespace ConverseOutput {
  /**
   * <p>The message that the model generates.</p>
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

  export interface Visitor<T> {
    message: (value: Message) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ConverseOutput, visitor: Visitor<T>): T => {
    if (value.message !== undefined) return visitor.message(value.message);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const StopReason = {
  CONTENT_FILTERED: "content_filtered",
  END_TURN: "end_turn",
  GUARDRAIL_INTERVENED: "guardrail_intervened",
  MAX_TOKENS: "max_tokens",
  STOP_SEQUENCE: "stop_sequence",
  TOOL_USE: "tool_use",
} as const;

/**
 * @public
 */
export type StopReason = (typeof StopReason)[keyof typeof StopReason];

/**
 * <p>A Top level guardrail trace object. For more information, see <a>ConverseTrace</a>.</p>
 * @public
 */
export interface GuardrailTraceAssessment {
  /**
   * <p>The output from the model.</p>
   * @public
   */
  modelOutput?: string[] | undefined;

  /**
   * <p>The input assessment.</p>
   * @public
   */
  inputAssessment?: Record<string, GuardrailAssessment> | undefined;

  /**
   * <p>the output assessments.</p>
   * @public
   */
  outputAssessments?: Record<string, GuardrailAssessment[]> | undefined;

  /**
   * <p>Provides the reason for the action taken when harmful content is detected.</p>
   * @public
   */
  actionReason?: string | undefined;
}

/**
 * <p>A prompt router trace.</p>
 * @public
 */
export interface PromptRouterTrace {
  /**
   * <p>The ID of the invoked model.</p>
   * @public
   */
  invokedModelId?: string | undefined;
}

/**
 * <p>The trace object in a response from <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_Converse.html">Converse</a>. Currently, you can only trace guardrails.</p>
 * @public
 */
export interface ConverseTrace {
  /**
   * <p>The guardrail trace object. </p>
   * @public
   */
  guardrail?: GuardrailTraceAssessment | undefined;

  /**
   * <p>The request's prompt router.</p>
   * @public
   */
  promptRouter?: PromptRouterTrace | undefined;
}

/**
 * <p>The tokens used in a message API inference call. </p>
 * @public
 */
export interface TokenUsage {
  /**
   * <p>The number of tokens sent in the request to the model.</p>
   * @public
   */
  inputTokens: number | undefined;

  /**
   * <p>The number of tokens that the model generated for the request.</p>
   * @public
   */
  outputTokens: number | undefined;

  /**
   * <p>The total of input tokens and tokens generated by the model.</p>
   * @public
   */
  totalTokens: number | undefined;

  /**
   * <p>The number of input tokens read from the cache for the request.</p>
   * @public
   */
  cacheReadInputTokens?: number | undefined;

  /**
   * <p>The number of input tokens written to the cache for the request.</p>
   * @public
   */
  cacheWriteInputTokens?: number | undefined;
}

/**
 * @public
 */
export interface ConverseResponse {
  /**
   * <p>The result from the call to <code>Converse</code>.</p>
   * @public
   */
  output: ConverseOutput | undefined;

  /**
   * <p>The reason why the model stopped generating output.</p>
   * @public
   */
  stopReason: StopReason | undefined;

  /**
   * <p>The total number of tokens used in the call to <code>Converse</code>. The total includes the tokens input to the model and the tokens generated by the model.</p>
   * @public
   */
  usage: TokenUsage | undefined;

  /**
   * <p>Metrics for the call to <code>Converse</code>.</p>
   * @public
   */
  metrics: ConverseMetrics | undefined;

  /**
   * <p>Additional fields in the response that are unique to the model. </p>
   * @public
   */
  additionalModelResponseFields?: __DocumentType | undefined;

  /**
   * <p>A trace object that contains information about the Guardrail behavior.</p>
   * @public
   */
  trace?: ConverseTrace | undefined;

  /**
   * <p>Model performance settings for the request.</p>
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;
}

/**
 * <p>The request failed due to an error while processing the model.</p>
 * @public
 */
export class ModelErrorException extends __BaseException {
  readonly name: "ModelErrorException" = "ModelErrorException";
  readonly $fault: "client" = "client";
  /**
   * <p>The original status code.</p>
   * @public
   */
  originalStatusCode?: number | undefined;

  /**
   * <p>The resource name.</p>
   * @public
   */
  resourceName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ModelErrorException, __BaseException>) {
    super({
      name: "ModelErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ModelErrorException.prototype);
    this.originalStatusCode = opts.originalStatusCode;
    this.resourceName = opts.resourceName;
  }
}

/**
 * <p>The model specified in the request is not ready to serve inference requests. The AWS SDK will automatically retry the operation up to 5 times. For information about configuring automatic retries, see <a href="https://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html">Retry behavior</a> in the <i>AWS SDKs and Tools</i> reference guide.</p>
 * @public
 */
export class ModelNotReadyException extends __BaseException {
  readonly name: "ModelNotReadyException" = "ModelNotReadyException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ModelNotReadyException, __BaseException>) {
    super({
      name: "ModelNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ModelNotReadyException.prototype);
  }
}

/**
 * <p>The request took too long to process. Processing time exceeded the model timeout length.</p>
 * @public
 */
export class ModelTimeoutException extends __BaseException {
  readonly name: "ModelTimeoutException" = "ModelTimeoutException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ModelTimeoutException, __BaseException>) {
    super({
      name: "ModelTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ModelTimeoutException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const GuardrailStreamProcessingMode = {
  ASYNC: "async",
  SYNC: "sync",
} as const;

/**
 * @public
 */
export type GuardrailStreamProcessingMode =
  (typeof GuardrailStreamProcessingMode)[keyof typeof GuardrailStreamProcessingMode];

/**
 * <p>Configuration information for a guardrail that you use with the <a>ConverseStream</a> action. </p>
 * @public
 */
export interface GuardrailStreamConfiguration {
  /**
   * <p>The identifier for the guardrail.</p>
   * @public
   */
  guardrailIdentifier: string | undefined;

  /**
   * <p>The version of the guardrail.</p>
   * @public
   */
  guardrailVersion: string | undefined;

  /**
   * <p>The trace behavior for the guardrail.</p>
   * @public
   */
  trace?: GuardrailTrace | undefined;

  /**
   * <p>The processing mode. </p> <p>The processing mode. For more information, see <i>Configure streaming response behavior</i> in the <i>Amazon Bedrock User Guide</i>. </p>
   * @public
   */
  streamProcessingMode?: GuardrailStreamProcessingMode | undefined;
}

/**
 * @public
 */
export interface ConverseStreamRequest {
  /**
   * <p>Specifies the model or throughput with which to run inference, or the prompt resource to use in inference. The value depends on the resource that you use:</p> <ul> <li> <p>If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#model-ids-arns">Amazon Bedrock base model IDs (on-demand throughput)</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use an inference profile, specify the inference profile ID or its ARN. For a list of inference profile IDs, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference-support.html">Supported Regions and models for cross-region inference</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prov-thru-use.html">Run inference using a Provisioned Throughput</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use a custom model, first purchase Provisioned Throughput for it. Then specify the ARN of the resulting provisioned model. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-use.html">Use a custom model in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>To include a prompt that was defined in <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html">Prompt management</a>, specify the ARN of the prompt version to use.</p> </li> </ul> <p>The Converse API doesn't support <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html">imported models</a>.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The messages that you want to send to the model.</p>
   * @public
   */
  messages?: Message[] | undefined;

  /**
   * <p>A prompt that provides instructions or context to the model about the task it should perform, or the persona it should adopt during the conversation.</p>
   * @public
   */
  system?: SystemContentBlock[] | undefined;

  /**
   * <p>Inference parameters to pass to the model. <code>Converse</code> and <code>ConverseStream</code> support a base set of inference parameters. If you need to pass additional parameters that the model supports, use the <code>additionalModelRequestFields</code> request field.</p>
   * @public
   */
  inferenceConfig?: InferenceConfiguration | undefined;

  /**
   * <p>Configuration information for the tools that the model can use when generating a response.</p> <p>For information about models that support streaming tool use, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference.html#conversation-inference-supported-models-features">Supported models and model features</a>.</p>
   * @public
   */
  toolConfig?: ToolConfiguration | undefined;

  /**
   * <p>Configuration information for a guardrail that you want to use in the request. If you include <code>guardContent</code> blocks in the <code>content</code> field in the <code>messages</code> field, the guardrail operates only on those messages. If you include no <code>guardContent</code> blocks, the guardrail operates on all messages in the request body and in any included prompt resource.</p>
   * @public
   */
  guardrailConfig?: GuardrailStreamConfiguration | undefined;

  /**
   * <p>Additional inference parameters that the model supports, beyond the base set of inference parameters that <code>Converse</code> and <code>ConverseStream</code> support in the <code>inferenceConfig</code> field. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Model parameters</a>.</p>
   * @public
   */
  additionalModelRequestFields?: __DocumentType | undefined;

  /**
   * <p>Contains a map of variables in a prompt from Prompt management to objects containing the values to fill in for them when running model invocation. This field is ignored if you don't specify a prompt resource in the <code>modelId</code> field.</p>
   * @public
   */
  promptVariables?: Record<string, PromptVariableValues> | undefined;

  /**
   * <p>Additional model parameters field paths to return in the response. <code>Converse</code> and <code>ConverseStream</code> return the requested fields as a JSON Pointer object in the <code>additionalModelResponseFields</code> field. The following is example JSON for <code>additionalModelResponseFieldPaths</code>.</p> <p> <code>[ "/stop_sequence" ]</code> </p> <p>For information about the JSON Pointer syntax, see the <a href="https://datatracker.ietf.org/doc/html/rfc6901">Internet Engineering Task Force (IETF)</a> documentation.</p> <p> <code>Converse</code> and <code>ConverseStream</code> reject an empty JSON Pointer or incorrectly structured JSON Pointer with a <code>400</code> error code. if the JSON Pointer is valid, but the requested field is not in the model response, it is ignored by <code>Converse</code>.</p>
   * @public
   */
  additionalModelResponseFieldPaths?: string[] | undefined;

  /**
   * <p>Key-value pairs that you can use to filter invocation logs.</p>
   * @public
   */
  requestMetadata?: Record<string, string> | undefined;

  /**
   * <p>Model performance settings for the request.</p>
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;
}

/**
 * <p>Contains incremental updates to the source content text during streaming responses, allowing clients to build up the cited content progressively.</p>
 * @public
 */
export interface CitationSourceContentDelta {
  /**
   * <p>An incremental update to the text content from the source document that is being cited.</p>
   * @public
   */
  text?: string | undefined;
}

/**
 * <p>Contains incremental updates to citation information during streaming responses. This allows clients to build up citation data progressively as the response is generated.</p>
 * @public
 */
export interface CitationsDelta {
  /**
   * <p>The title or identifier of the source document being cited.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The specific content from the source document that was referenced or cited in the generated response.</p>
   * @public
   */
  sourceContent?: CitationSourceContentDelta[] | undefined;

  /**
   * <p>Specifies the precise location within a source document where cited content can be found. This can include character-level positions, page numbers, or document chunks depending on the document type and indexing method.</p>
   * @public
   */
  location?: CitationLocation | undefined;
}

/**
 * <p>Contains content regarding the reasoning that is carried out by the model with respect to the content in the content block. Reasoning refers to a Chain of Thought (CoT) that the model generates to enhance the accuracy of its final response.</p>
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
   * <p>The reasoning that the model used to return the output.</p>
   * @public
   */
  export interface TextMember {
    text: string;
    redactedContent?: never;
    signature?: never;
    $unknown?: never;
  }

  /**
   * <p>The content in the reasoning that was encrypted by the model provider for safety reasons. The encryption doesn't affect the quality of responses.</p>
   * @public
   */
  export interface RedactedContentMember {
    text?: never;
    redactedContent: Uint8Array;
    signature?: never;
    $unknown?: never;
  }

  /**
   * <p>A token that verifies that the reasoning text was generated by the model. If you pass a reasoning block back to the API in a multi-turn conversation, include the text and its signature unmodified.</p>
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

  export interface Visitor<T> {
    text: (value: string) => T;
    redactedContent: (value: Uint8Array) => T;
    signature: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ReasoningContentBlockDelta, visitor: Visitor<T>): T => {
    if (value.text !== undefined) return visitor.text(value.text);
    if (value.redactedContent !== undefined) return visitor.redactedContent(value.redactedContent);
    if (value.signature !== undefined) return visitor.signature(value.signature);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The delta for a tool use block.</p>
 * @public
 */
export interface ToolUseBlockDelta {
  /**
   * <p>The input for a requested tool.</p>
   * @public
   */
  input: string | undefined;
}

/**
 * <p>A block of content in a streaming response.</p>
 * @public
 */
export type ContentBlockDelta =
  | ContentBlockDelta.CitationMember
  | ContentBlockDelta.ReasoningContentMember
  | ContentBlockDelta.TextMember
  | ContentBlockDelta.ToolUseMember
  | ContentBlockDelta.$UnknownMember;

/**
 * @public
 */
export namespace ContentBlockDelta {
  /**
   * <p>The content text.</p>
   * @public
   */
  export interface TextMember {
    text: string;
    toolUse?: never;
    reasoningContent?: never;
    citation?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a tool that the model is requesting to use.</p>
   * @public
   */
  export interface ToolUseMember {
    text?: never;
    toolUse: ToolUseBlockDelta;
    reasoningContent?: never;
    citation?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains content regarding the reasoning that is carried out by the model. Reasoning refers to a Chain of Thought (CoT) that the model generates to enhance the accuracy of its final response.</p>
   * @public
   */
  export interface ReasoningContentMember {
    text?: never;
    toolUse?: never;
    reasoningContent: ReasoningContentBlockDelta;
    citation?: never;
    $unknown?: never;
  }

  /**
   * <p>Incremental citation information that is streamed as part of the response generation process.</p>
   * @public
   */
  export interface CitationMember {
    text?: never;
    toolUse?: never;
    reasoningContent?: never;
    citation: CitationsDelta;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    toolUse?: never;
    reasoningContent?: never;
    citation?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    text: (value: string) => T;
    toolUse: (value: ToolUseBlockDelta) => T;
    reasoningContent: (value: ReasoningContentBlockDelta) => T;
    citation: (value: CitationsDelta) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ContentBlockDelta, visitor: Visitor<T>): T => {
    if (value.text !== undefined) return visitor.text(value.text);
    if (value.toolUse !== undefined) return visitor.toolUse(value.toolUse);
    if (value.reasoningContent !== undefined) return visitor.reasoningContent(value.reasoningContent);
    if (value.citation !== undefined) return visitor.citation(value.citation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The content block delta event.</p>
 * @public
 */
export interface ContentBlockDeltaEvent {
  /**
   * <p>The delta for a content block delta event.</p>
   * @public
   */
  delta: ContentBlockDelta | undefined;

  /**
   * <p>The block index for a content block delta event. </p>
   * @public
   */
  contentBlockIndex: number | undefined;
}

/**
 * <p>The start of a tool use block.</p>
 * @public
 */
export interface ToolUseBlockStart {
  /**
   * <p>The ID for the tool request.</p>
   * @public
   */
  toolUseId: string | undefined;

  /**
   * <p>The name of the tool that the model is requesting to use.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Content block start information.</p>
 * @public
 */
export type ContentBlockStart = ContentBlockStart.ToolUseMember | ContentBlockStart.$UnknownMember;

/**
 * @public
 */
export namespace ContentBlockStart {
  /**
   * <p>Information about a tool that the model is requesting to use.</p>
   * @public
   */
  export interface ToolUseMember {
    toolUse: ToolUseBlockStart;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    toolUse?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    toolUse: (value: ToolUseBlockStart) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ContentBlockStart, visitor: Visitor<T>): T => {
    if (value.toolUse !== undefined) return visitor.toolUse(value.toolUse);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Content block start event.</p>
 * @public
 */
export interface ContentBlockStartEvent {
  /**
   * <p>Start information about a content block start event. </p>
   * @public
   */
  start: ContentBlockStart | undefined;

  /**
   * <p>The index for a content block start event.</p>
   * @public
   */
  contentBlockIndex: number | undefined;
}

/**
 * <p>A content block stop event.</p>
 * @public
 */
export interface ContentBlockStopEvent {
  /**
   * <p>The index for a content block.</p>
   * @public
   */
  contentBlockIndex: number | undefined;
}

/**
 * <p>The start of a message.</p>
 * @public
 */
export interface MessageStartEvent {
  /**
   * <p>The role for the message.</p>
   * @public
   */
  role: ConversationRole | undefined;
}

/**
 * <p>The stop event for a message.</p>
 * @public
 */
export interface MessageStopEvent {
  /**
   * <p>The reason why the model stopped generating output.</p>
   * @public
   */
  stopReason: StopReason | undefined;

  /**
   * <p>The additional model response fields.</p>
   * @public
   */
  additionalModelResponseFields?: __DocumentType | undefined;
}

/**
 * <p>Metrics for the stream.</p>
 * @public
 */
export interface ConverseStreamMetrics {
  /**
   * <p>The latency for the streaming request, in milliseconds.</p>
   * @public
   */
  latencyMs: number | undefined;
}

/**
 * <p>The trace object in a response from <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html">ConverseStream</a>. Currently, you can only trace guardrails.</p>
 * @public
 */
export interface ConverseStreamTrace {
  /**
   * <p>The guardrail trace object. </p>
   * @public
   */
  guardrail?: GuardrailTraceAssessment | undefined;

  /**
   * <p>The request's prompt router.</p>
   * @public
   */
  promptRouter?: PromptRouterTrace | undefined;
}

/**
 * <p>A conversation stream metadata event.</p>
 * @public
 */
export interface ConverseStreamMetadataEvent {
  /**
   * <p>Usage information for the conversation stream event.</p>
   * @public
   */
  usage: TokenUsage | undefined;

  /**
   * <p>The metrics for the conversation stream metadata event.</p>
   * @public
   */
  metrics: ConverseStreamMetrics | undefined;

  /**
   * <p>The trace object in the response from <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_ConverseStream.html">ConverseStream</a> that contains information about the guardrail behavior.</p>
   * @public
   */
  trace?: ConverseStreamTrace | undefined;

  /**
   * <p>Model performance configuration metadata for the conversation stream event.</p>
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;
}

/**
 * <p>An error occurred while streaming the response. Retry your request.</p>
 * @public
 */
export class ModelStreamErrorException extends __BaseException {
  readonly name: "ModelStreamErrorException" = "ModelStreamErrorException";
  readonly $fault: "client" = "client";
  /**
   * <p>The original status code.</p>
   * @public
   */
  originalStatusCode?: number | undefined;

  /**
   * <p>The original message.</p>
   * @public
   */
  originalMessage?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ModelStreamErrorException, __BaseException>) {
    super({
      name: "ModelStreamErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ModelStreamErrorException.prototype);
    this.originalStatusCode = opts.originalStatusCode;
    this.originalMessage = opts.originalMessage;
  }
}

/**
 * <p>The messages output stream</p>
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
   * <p>Message start information.</p>
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
   * <p>Start information for a content block.</p>
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
   * <p>The messages output content block delta.</p>
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
   * <p>Stop information for a content block.</p>
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
   * <p>Message stop information.</p>
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
   * <p>Metadata for the converse output stream.</p>
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
   * <p>An internal server error occurred. Retry your request.</p>
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
   * <p>A streaming error occurred. Retry your request.</p>
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
   * <p>The input fails to satisfy the constraints specified by <i>Amazon Bedrock</i>. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-validation-error">ValidationError</a> in the Amazon Bedrock User Guide</p>
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
   * <p>Your request was denied due to exceeding the account quotas for <i>Amazon Bedrock</i>. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-throttling-exception">ThrottlingException</a> in the Amazon Bedrock User Guide</p>
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
   * <p>The service isn't currently available. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-service-unavailable">ServiceUnavailable</a> in the Amazon Bedrock User Guide</p>
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

  export const visit = <T>(value: ConverseStreamOutput, visitor: Visitor<T>): T => {
    if (value.messageStart !== undefined) return visitor.messageStart(value.messageStart);
    if (value.contentBlockStart !== undefined) return visitor.contentBlockStart(value.contentBlockStart);
    if (value.contentBlockDelta !== undefined) return visitor.contentBlockDelta(value.contentBlockDelta);
    if (value.contentBlockStop !== undefined) return visitor.contentBlockStop(value.contentBlockStop);
    if (value.messageStop !== undefined) return visitor.messageStop(value.messageStop);
    if (value.metadata !== undefined) return visitor.metadata(value.metadata);
    if (value.internalServerException !== undefined)
      return visitor.internalServerException(value.internalServerException);
    if (value.modelStreamErrorException !== undefined)
      return visitor.modelStreamErrorException(value.modelStreamErrorException);
    if (value.validationException !== undefined) return visitor.validationException(value.validationException);
    if (value.throttlingException !== undefined) return visitor.throttlingException(value.throttlingException);
    if (value.serviceUnavailableException !== undefined)
      return visitor.serviceUnavailableException(value.serviceUnavailableException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface ConverseStreamResponse {
  /**
   * <p>The output stream that the model generated.</p>
   * @public
   */
  stream?: AsyncIterable<ConverseStreamOutput> | undefined;
}

/**
 * @public
 * @enum
 */
export const Trace = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  ENABLED_FULL: "ENABLED_FULL",
} as const;

/**
 * @public
 */
export type Trace = (typeof Trace)[keyof typeof Trace];

/**
 * @public
 */
export interface InvokeModelRequest {
  /**
   * <p>The prompt and inference parameters in the format specified in the <code>contentType</code> in the header. You must provide the body in JSON format. To see the format and content of the request and response bodies for different models, refer to <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters</a>. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/api-methods-run.html">Run inference</a> in the Bedrock User Guide.</p>
   * @public
   */
  body?: Uint8Array | undefined;

  /**
   * <p>The MIME type of the input data in the request. You must specify <code>application/json</code>.</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>The desired MIME type of the inference body in the response. The default value is <code>application/json</code>.</p>
   * @public
   */
  accept?: string | undefined;

  /**
   * <p>The unique identifier of the model to invoke to run inference.</p> <p>The <code>modelId</code> to provide depends on the type of model or throughput that you use:</p> <ul> <li> <p>If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#model-ids-arns">Amazon Bedrock base model IDs (on-demand throughput)</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use an inference profile, specify the inference profile ID or its ARN. For a list of inference profile IDs, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference-support.html">Supported Regions and models for cross-region inference</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prov-thru-use.html">Run inference using a Provisioned Throughput</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use a custom model, specify the ARN of the custom model deployment (for on-demand inference) or the ARN of your provisioned model (for Provisioned Throughput). For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-use.html">Use a custom model in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use an <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html">imported model</a>, specify the ARN of the imported model. You can get the model ARN from a successful call to <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateModelImportJob.html">CreateModelImportJob</a> or from the Imported models page in the Amazon Bedrock console.</p> </li> </ul>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>Specifies whether to enable or disable the Bedrock trace. If enabled, you can see the full Bedrock trace.</p>
   * @public
   */
  trace?: Trace | undefined;

  /**
   * <p>The unique identifier of the guardrail that you want to use. If you don't provide a value, no guardrail is applied to the invocation.</p> <p>An error will be thrown in the following situations.</p> <ul> <li> <p>You don't provide a guardrail identifier but you specify the <code>amazon-bedrock-guardrailConfig</code> field in the request body.</p> </li> <li> <p>You enable the guardrail but the <code>contentType</code> isn't <code>application/json</code>.</p> </li> <li> <p>You provide a guardrail identifier, but <code>guardrailVersion</code> isn't specified.</p> </li> </ul>
   * @public
   */
  guardrailIdentifier?: string | undefined;

  /**
   * <p>The version number for the guardrail. The value can also be <code>DRAFT</code>.</p>
   * @public
   */
  guardrailVersion?: string | undefined;

  /**
   * <p>Model performance settings for the request.</p>
   * @public
   */
  performanceConfigLatency?: PerformanceConfigLatency | undefined;
}

/**
 * @public
 */
export interface InvokeModelResponse {
  /**
   * <p>Inference response from the model in the format specified in the <code>contentType</code> header. To see the format and content of the request and response bodies for different models, refer to <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters</a>.</p>
   * @public
   */
  body: Uint8Array | undefined;

  /**
   * <p>The MIME type of the inference result.</p>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>Model performance settings for the request.</p>
   * @public
   */
  performanceConfigLatency?: PerformanceConfigLatency | undefined;
}

/**
 * <p>Payload content for the bidirectional input. The input is an audio stream.</p>
 * @public
 */
export interface BidirectionalInputPayloadPart {
  /**
   * <p>The audio content for the bidirectional input.</p>
   * @public
   */
  bytes?: Uint8Array | undefined;
}

/**
 * <p>Payload content, the speech chunk, for the bidirectional input of the invocation step.</p>
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
   * <p>The audio chunk that is used as input for the invocation step.</p>
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

  export interface Visitor<T> {
    chunk: (value: BidirectionalInputPayloadPart) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: InvokeModelWithBidirectionalStreamInput, visitor: Visitor<T>): T => {
    if (value.chunk !== undefined) return visitor.chunk(value.chunk);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface InvokeModelWithBidirectionalStreamRequest {
  /**
   * <p>The model ID or ARN of the model ID to use. Currently, only <code>amazon.nova-sonic-v1:0</code> is supported.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The prompt and inference parameters in the format specified in the <code>BidirectionalInputPayloadPart</code> in the header. You must provide the body in JSON format. To see the format and content of the request and response bodies for different models, refer to <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters</a>. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/api-methods-run.html">Run inference</a> in the Bedrock User Guide.</p>
   * @public
   */
  body: AsyncIterable<InvokeModelWithBidirectionalStreamInput> | undefined;
}

/**
 * <p>Output from the bidirectional stream. The output is speech and a text transcription.</p>
 * @public
 */
export interface BidirectionalOutputPayloadPart {
  /**
   * <p>The speech output of the bidirectional stream.</p>
   * @public
   */
  bytes?: Uint8Array | undefined;
}

/**
 * <p>Output from the bidirectional stream that was used for model invocation.</p>
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
   * <p>The speech chunk that was provided as output from the invocation step.</p>
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
   * <p>The request encountered an unknown internal error.</p>
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
   * <p>The request encountered an error with the model stream.</p>
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
   * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
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
   * <p>The request was denied due to request throttling.</p>
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
   * <p>The connection was closed because a request was not received within the timeout period.</p>
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
   * <p>The request has failed due to a temporary failure of the server.</p>
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

  export const visit = <T>(value: InvokeModelWithBidirectionalStreamOutput, visitor: Visitor<T>): T => {
    if (value.chunk !== undefined) return visitor.chunk(value.chunk);
    if (value.internalServerException !== undefined)
      return visitor.internalServerException(value.internalServerException);
    if (value.modelStreamErrorException !== undefined)
      return visitor.modelStreamErrorException(value.modelStreamErrorException);
    if (value.validationException !== undefined) return visitor.validationException(value.validationException);
    if (value.throttlingException !== undefined) return visitor.throttlingException(value.throttlingException);
    if (value.modelTimeoutException !== undefined) return visitor.modelTimeoutException(value.modelTimeoutException);
    if (value.serviceUnavailableException !== undefined)
      return visitor.serviceUnavailableException(value.serviceUnavailableException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface InvokeModelWithBidirectionalStreamResponse {
  /**
   * <p>Streaming response from the model in the format specified by the <code>BidirectionalOutputPayloadPart</code> header.</p>
   * @public
   */
  body: AsyncIterable<InvokeModelWithBidirectionalStreamOutput> | undefined;
}

/**
 * @public
 */
export interface InvokeModelWithResponseStreamRequest {
  /**
   * <p>The prompt and inference parameters in the format specified in the <code>contentType</code> in the header. You must provide the body in JSON format. To see the format and content of the request and response bodies for different models, refer to <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters</a>. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/api-methods-run.html">Run inference</a> in the Bedrock User Guide.</p>
   * @public
   */
  body?: Uint8Array | undefined;

  /**
   * <p>The MIME type of the input data in the request. You must specify <code>application/json</code>.</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>The desired MIME type of the inference body in the response. The default value is <code>application/json</code>.</p>
   * @public
   */
  accept?: string | undefined;

  /**
   * <p>The unique identifier of the model to invoke to run inference.</p> <p>The <code>modelId</code> to provide depends on the type of model or throughput that you use:</p> <ul> <li> <p>If you use a base model, specify the model ID or its ARN. For a list of model IDs for base models, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#model-ids-arns">Amazon Bedrock base model IDs (on-demand throughput)</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use an inference profile, specify the inference profile ID or its ARN. For a list of inference profile IDs, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference-support.html">Supported Regions and models for cross-region inference</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use a provisioned model, specify the ARN of the Provisioned Throughput. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prov-thru-use.html">Run inference using a Provisioned Throughput</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use a custom model, specify the ARN of the custom model deployment (for on-demand inference) or the ARN of your provisioned model (for Provisioned Throughput). For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-use.html">Use a custom model in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p> </li> <li> <p>If you use an <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-customization-import-model.html">imported model</a>, specify the ARN of the imported model. You can get the model ARN from a successful call to <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_CreateModelImportJob.html">CreateModelImportJob</a> or from the Imported models page in the Amazon Bedrock console.</p> </li> </ul>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>Specifies whether to enable or disable the Bedrock trace. If enabled, you can see the full Bedrock trace.</p>
   * @public
   */
  trace?: Trace | undefined;

  /**
   * <p>The unique identifier of the guardrail that you want to use. If you don't provide a value, no guardrail is applied to the invocation.</p> <p>An error is thrown in the following situations.</p> <ul> <li> <p>You don't provide a guardrail identifier but you specify the <code>amazon-bedrock-guardrailConfig</code> field in the request body.</p> </li> <li> <p>You enable the guardrail but the <code>contentType</code> isn't <code>application/json</code>.</p> </li> <li> <p>You provide a guardrail identifier, but <code>guardrailVersion</code> isn't specified.</p> </li> </ul>
   * @public
   */
  guardrailIdentifier?: string | undefined;

  /**
   * <p>The version number for the guardrail. The value can also be <code>DRAFT</code>.</p>
   * @public
   */
  guardrailVersion?: string | undefined;

  /**
   * <p>Model performance settings for the request.</p>
   * @public
   */
  performanceConfigLatency?: PerformanceConfigLatency | undefined;
}

/**
 * <p>Payload content included in the response.</p>
 * @public
 */
export interface PayloadPart {
  /**
   * <p>Base64-encoded bytes of payload data.</p>
   * @public
   */
  bytes?: Uint8Array | undefined;
}

/**
 * <p>Definition of content in the response stream.</p>
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
   * <p>Content included in the response.</p>
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
   * <p>An internal server error occurred. Retry your request.</p>
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
   * <p>An error occurred while streaming the response. Retry your request.</p>
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
   * <p>Input validation failed. Check your request parameters and retry the request.</p>
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
   * <p>Your request was throttled because of service-wide limitations. Resubmit your request later or in a different region. You can also purchase <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prov-throughput.html">Provisioned Throughput</a> to increase the rate or number of tokens you can process.</p>
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
   * <p>The request took too long to process. Processing time exceeded the model timeout length.</p>
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
   * <p>The service isn't available. Try again later.</p>
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

  export const visit = <T>(value: ResponseStream, visitor: Visitor<T>): T => {
    if (value.chunk !== undefined) return visitor.chunk(value.chunk);
    if (value.internalServerException !== undefined)
      return visitor.internalServerException(value.internalServerException);
    if (value.modelStreamErrorException !== undefined)
      return visitor.modelStreamErrorException(value.modelStreamErrorException);
    if (value.validationException !== undefined) return visitor.validationException(value.validationException);
    if (value.throttlingException !== undefined) return visitor.throttlingException(value.throttlingException);
    if (value.modelTimeoutException !== undefined) return visitor.modelTimeoutException(value.modelTimeoutException);
    if (value.serviceUnavailableException !== undefined)
      return visitor.serviceUnavailableException(value.serviceUnavailableException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface InvokeModelWithResponseStreamResponse {
  /**
   * <p>Inference response from the model in the format specified by the <code>contentType</code> header. To see the format and content of this field for different models, refer to <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters</a>.</p>
   * @public
   */
  body: AsyncIterable<ResponseStream> | undefined;

  /**
   * <p>The MIME type of the inference result.</p>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>Model performance settings for the request.</p>
   * @public
   */
  performanceConfigLatency?: PerformanceConfigLatency | undefined;
}

/**
 * @internal
 */
export const GetAsyncInvokeResponseFilterSensitiveLog = (obj: GetAsyncInvokeResponse): any => ({
  ...obj,
  ...(obj.failureMessage && { failureMessage: SENSITIVE_STRING }),
  ...(obj.outputDataConfig && { outputDataConfig: obj.outputDataConfig }),
});

/**
 * @internal
 */
export const AsyncInvokeSummaryFilterSensitiveLog = (obj: AsyncInvokeSummary): any => ({
  ...obj,
  ...(obj.failureMessage && { failureMessage: SENSITIVE_STRING }),
  ...(obj.outputDataConfig && { outputDataConfig: obj.outputDataConfig }),
});

/**
 * @internal
 */
export const ListAsyncInvokesResponseFilterSensitiveLog = (obj: ListAsyncInvokesResponse): any => ({
  ...obj,
  ...(obj.asyncInvokeSummaries && {
    asyncInvokeSummaries: obj.asyncInvokeSummaries.map((item) => AsyncInvokeSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const StartAsyncInvokeRequestFilterSensitiveLog = (obj: StartAsyncInvokeRequest): any => ({
  ...obj,
  ...(obj.modelInput && { modelInput: SENSITIVE_STRING }),
  ...(obj.outputDataConfig && { outputDataConfig: obj.outputDataConfig }),
});

/**
 * @internal
 */
export const GuardrailImageSourceFilterSensitiveLog = (obj: GuardrailImageSource): any => {
  if (obj.bytes !== undefined) return { bytes: obj.bytes };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const GuardrailImageBlockFilterSensitiveLog = (obj: GuardrailImageBlock): any => ({
  ...obj,
  ...(obj.source && { source: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailContentBlockFilterSensitiveLog = (obj: GuardrailContentBlock): any => {
  if (obj.text !== undefined) return { text: obj.text };
  if (obj.image !== undefined) return { image: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ApplyGuardrailRequestFilterSensitiveLog = (obj: ApplyGuardrailRequest): any => ({
  ...obj,
  ...(obj.content && { content: obj.content.map((item) => GuardrailContentBlockFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GuardrailConverseImageSourceFilterSensitiveLog = (obj: GuardrailConverseImageSource): any => {
  if (obj.bytes !== undefined) return { bytes: obj.bytes };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const GuardrailConverseImageBlockFilterSensitiveLog = (obj: GuardrailConverseImageBlock): any => ({
  ...obj,
  ...(obj.source && { source: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GuardrailConverseContentBlockFilterSensitiveLog = (obj: GuardrailConverseContentBlock): any => {
  if (obj.text !== undefined) return { text: obj.text };
  if (obj.image !== undefined) return { image: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ReasoningTextBlockFilterSensitiveLog = (obj: ReasoningTextBlock): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReasoningContentBlockFilterSensitiveLog = (obj: ReasoningContentBlock): any => {
  if (obj.reasoningText !== undefined) return { reasoningText: SENSITIVE_STRING };
  if (obj.redactedContent !== undefined) return { redactedContent: obj.redactedContent };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ContentBlockFilterSensitiveLog = (obj: ContentBlock): any => {
  if (obj.text !== undefined) return { text: obj.text };
  if (obj.image !== undefined) return { image: obj.image };
  if (obj.document !== undefined) return { document: obj.document };
  if (obj.video !== undefined) return { video: obj.video };
  if (obj.toolUse !== undefined) return { toolUse: obj.toolUse };
  if (obj.toolResult !== undefined) return { toolResult: obj.toolResult };
  if (obj.guardContent !== undefined)
    return { guardContent: GuardrailConverseContentBlockFilterSensitiveLog(obj.guardContent) };
  if (obj.cachePoint !== undefined) return { cachePoint: obj.cachePoint };
  if (obj.reasoningContent !== undefined) return { reasoningContent: SENSITIVE_STRING };
  if (obj.citationsContent !== undefined) return { citationsContent: obj.citationsContent };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const MessageFilterSensitiveLog = (obj: Message): any => ({
  ...obj,
  ...(obj.content && { content: obj.content.map((item) => ContentBlockFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SystemContentBlockFilterSensitiveLog = (obj: SystemContentBlock): any => {
  if (obj.text !== undefined) return { text: obj.text };
  if (obj.guardContent !== undefined)
    return { guardContent: GuardrailConverseContentBlockFilterSensitiveLog(obj.guardContent) };
  if (obj.cachePoint !== undefined) return { cachePoint: obj.cachePoint };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ConverseRequestFilterSensitiveLog = (obj: ConverseRequest): any => ({
  ...obj,
  ...(obj.messages && { messages: obj.messages.map((item) => MessageFilterSensitiveLog(item)) }),
  ...(obj.system && { system: obj.system.map((item) => SystemContentBlockFilterSensitiveLog(item)) }),
  ...(obj.toolConfig && { toolConfig: obj.toolConfig }),
  ...(obj.promptVariables && { promptVariables: SENSITIVE_STRING }),
  ...(obj.requestMetadata && { requestMetadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConverseOutputFilterSensitiveLog = (obj: ConverseOutput): any => {
  if (obj.message !== undefined) return { message: MessageFilterSensitiveLog(obj.message) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ConverseResponseFilterSensitiveLog = (obj: ConverseResponse): any => ({
  ...obj,
  ...(obj.output && { output: ConverseOutputFilterSensitiveLog(obj.output) }),
});

/**
 * @internal
 */
export const ConverseStreamRequestFilterSensitiveLog = (obj: ConverseStreamRequest): any => ({
  ...obj,
  ...(obj.messages && { messages: obj.messages.map((item) => MessageFilterSensitiveLog(item)) }),
  ...(obj.system && { system: obj.system.map((item) => SystemContentBlockFilterSensitiveLog(item)) }),
  ...(obj.toolConfig && { toolConfig: obj.toolConfig }),
  ...(obj.promptVariables && { promptVariables: SENSITIVE_STRING }),
  ...(obj.requestMetadata && { requestMetadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ReasoningContentBlockDeltaFilterSensitiveLog = (obj: ReasoningContentBlockDelta): any => {
  if (obj.text !== undefined) return { text: obj.text };
  if (obj.redactedContent !== undefined) return { redactedContent: obj.redactedContent };
  if (obj.signature !== undefined) return { signature: obj.signature };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ContentBlockDeltaFilterSensitiveLog = (obj: ContentBlockDelta): any => {
  if (obj.text !== undefined) return { text: obj.text };
  if (obj.toolUse !== undefined) return { toolUse: obj.toolUse };
  if (obj.reasoningContent !== undefined) return { reasoningContent: SENSITIVE_STRING };
  if (obj.citation !== undefined) return { citation: obj.citation };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ContentBlockDeltaEventFilterSensitiveLog = (obj: ContentBlockDeltaEvent): any => ({
  ...obj,
  ...(obj.delta && { delta: ContentBlockDeltaFilterSensitiveLog(obj.delta) }),
});

/**
 * @internal
 */
export const ConverseStreamOutputFilterSensitiveLog = (obj: ConverseStreamOutput): any => {
  if (obj.messageStart !== undefined) return { messageStart: obj.messageStart };
  if (obj.contentBlockStart !== undefined) return { contentBlockStart: obj.contentBlockStart };
  if (obj.contentBlockDelta !== undefined)
    return { contentBlockDelta: ContentBlockDeltaEventFilterSensitiveLog(obj.contentBlockDelta) };
  if (obj.contentBlockStop !== undefined) return { contentBlockStop: obj.contentBlockStop };
  if (obj.messageStop !== undefined) return { messageStop: obj.messageStop };
  if (obj.metadata !== undefined) return { metadata: obj.metadata };
  if (obj.internalServerException !== undefined) return { internalServerException: obj.internalServerException };
  if (obj.modelStreamErrorException !== undefined) return { modelStreamErrorException: obj.modelStreamErrorException };
  if (obj.validationException !== undefined) return { validationException: obj.validationException };
  if (obj.throttlingException !== undefined) return { throttlingException: obj.throttlingException };
  if (obj.serviceUnavailableException !== undefined)
    return { serviceUnavailableException: obj.serviceUnavailableException };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ConverseStreamResponseFilterSensitiveLog = (obj: ConverseStreamResponse): any => ({
  ...obj,
  ...(obj.stream && { stream: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const InvokeModelRequestFilterSensitiveLog = (obj: InvokeModelRequest): any => ({
  ...obj,
  ...(obj.body && { body: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InvokeModelResponseFilterSensitiveLog = (obj: InvokeModelResponse): any => ({
  ...obj,
  ...(obj.body && { body: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BidirectionalInputPayloadPartFilterSensitiveLog = (obj: BidirectionalInputPayloadPart): any => ({
  ...obj,
  ...(obj.bytes && { bytes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InvokeModelWithBidirectionalStreamInputFilterSensitiveLog = (
  obj: InvokeModelWithBidirectionalStreamInput
): any => {
  if (obj.chunk !== undefined) return { chunk: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const InvokeModelWithBidirectionalStreamRequestFilterSensitiveLog = (
  obj: InvokeModelWithBidirectionalStreamRequest
): any => ({
  ...obj,
  ...(obj.body && { body: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const BidirectionalOutputPayloadPartFilterSensitiveLog = (obj: BidirectionalOutputPayloadPart): any => ({
  ...obj,
  ...(obj.bytes && { bytes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InvokeModelWithBidirectionalStreamOutputFilterSensitiveLog = (
  obj: InvokeModelWithBidirectionalStreamOutput
): any => {
  if (obj.chunk !== undefined) return { chunk: SENSITIVE_STRING };
  if (obj.internalServerException !== undefined) return { internalServerException: obj.internalServerException };
  if (obj.modelStreamErrorException !== undefined) return { modelStreamErrorException: obj.modelStreamErrorException };
  if (obj.validationException !== undefined) return { validationException: obj.validationException };
  if (obj.throttlingException !== undefined) return { throttlingException: obj.throttlingException };
  if (obj.modelTimeoutException !== undefined) return { modelTimeoutException: obj.modelTimeoutException };
  if (obj.serviceUnavailableException !== undefined)
    return { serviceUnavailableException: obj.serviceUnavailableException };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const InvokeModelWithBidirectionalStreamResponseFilterSensitiveLog = (
  obj: InvokeModelWithBidirectionalStreamResponse
): any => ({
  ...obj,
  ...(obj.body && { body: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const InvokeModelWithResponseStreamRequestFilterSensitiveLog = (
  obj: InvokeModelWithResponseStreamRequest
): any => ({
  ...obj,
  ...(obj.body && { body: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PayloadPartFilterSensitiveLog = (obj: PayloadPart): any => ({
  ...obj,
  ...(obj.bytes && { bytes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ResponseStreamFilterSensitiveLog = (obj: ResponseStream): any => {
  if (obj.chunk !== undefined) return { chunk: SENSITIVE_STRING };
  if (obj.internalServerException !== undefined) return { internalServerException: obj.internalServerException };
  if (obj.modelStreamErrorException !== undefined) return { modelStreamErrorException: obj.modelStreamErrorException };
  if (obj.validationException !== undefined) return { validationException: obj.validationException };
  if (obj.throttlingException !== undefined) return { throttlingException: obj.throttlingException };
  if (obj.modelTimeoutException !== undefined) return { modelTimeoutException: obj.modelTimeoutException };
  if (obj.serviceUnavailableException !== undefined)
    return { serviceUnavailableException: obj.serviceUnavailableException };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const InvokeModelWithResponseStreamResponseFilterSensitiveLog = (
  obj: InvokeModelWithResponseStreamResponse
): any => ({
  ...obj,
  ...(obj.body && { body: "STREAMING_CONTENT" }),
});
