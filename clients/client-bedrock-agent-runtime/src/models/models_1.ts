// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import {
  AccessDeniedException,
  AgentActionGroup,
  AgentActionGroupFilterSensitiveLog,
  AgentCollaboration,
  BadGatewayException,
  BedrockModelConfigurations,
  CitationEvent,
  CitationEventFilterSensitiveLog,
  CollaboratorConfiguration,
  CollaboratorConfigurationFilterSensitiveLog,
  ConflictException,
  ConversationHistory,
  ConversationHistoryFilterSensitiveLog,
  CustomOrchestration,
  DependencyFailedException,
  ExternalSourcesRetrieveAndGenerateConfiguration,
  ExternalSourcesRetrieveAndGenerateConfigurationFilterSensitiveLog,
  FilterAttribute,
  GenerationConfiguration,
  GenerationConfigurationFilterSensitiveLog,
  GuadrailAction,
  GuardrailConfiguration,
  GuardrailConfigurationWithArn,
  GuardrailEvent,
  ImplicitFilterConfiguration,
  ImplicitFilterConfigurationFilterSensitiveLog,
  InlineBedrockModelConfigurations,
  InlineSessionState,
  InlineSessionStateFilterSensitiveLog,
  InputFile,
  InputFileFilterSensitiveLog,
  InternalServerException,
  InvocationResultMember,
  InvocationResultMemberFilterSensitiveLog,
  OrchestrationConfiguration,
  OrchestrationConfigurationFilterSensitiveLog,
  OrchestrationType,
  PromptCreationConfigurations,
  PromptOverrideConfiguration,
  ResourceNotFoundException,
  RetrievalResultContent,
  RetrievalResultLocation,
  RetrieveAndGenerateInput,
  RetrieveAndGenerateSessionConfiguration,
  RetrieveAndGenerateType,
  SearchType,
  ServiceQuotaExceededException,
  StreamingConfigurations,
  ThrottlingException,
  ValidationException,
  VectorSearchRerankingConfiguration,
  VectorSearchRerankingConfigurationFilterSensitiveLog,
} from "./models_0";

/**
 * <p>A retrieve and generate output event.</p>
 * @public
 */
export interface RetrieveAndGenerateOutputEvent {
  /**
   * <p>A text response.</p>
   * @public
   */
  text: string | undefined;
}

/**
 * <p>A retrieve and generate stream response output.</p>
 * @public
 */
export type RetrieveAndGenerateStreamResponseOutput =
  | RetrieveAndGenerateStreamResponseOutput.AccessDeniedExceptionMember
  | RetrieveAndGenerateStreamResponseOutput.BadGatewayExceptionMember
  | RetrieveAndGenerateStreamResponseOutput.CitationMember
  | RetrieveAndGenerateStreamResponseOutput.ConflictExceptionMember
  | RetrieveAndGenerateStreamResponseOutput.DependencyFailedExceptionMember
  | RetrieveAndGenerateStreamResponseOutput.GuardrailMember
  | RetrieveAndGenerateStreamResponseOutput.InternalServerExceptionMember
  | RetrieveAndGenerateStreamResponseOutput.OutputMember
  | RetrieveAndGenerateStreamResponseOutput.ResourceNotFoundExceptionMember
  | RetrieveAndGenerateStreamResponseOutput.ServiceQuotaExceededExceptionMember
  | RetrieveAndGenerateStreamResponseOutput.ThrottlingExceptionMember
  | RetrieveAndGenerateStreamResponseOutput.ValidationExceptionMember
  | RetrieveAndGenerateStreamResponseOutput.$UnknownMember;

/**
 * @public
 */
export namespace RetrieveAndGenerateStreamResponseOutput {
  /**
   * <p>An output event.</p>
   * @public
   */
  export interface OutputMember {
    output: RetrieveAndGenerateOutputEvent;
    citation?: never;
    guardrail?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>A citation event.</p>
   * @public
   */
  export interface CitationMember {
    output?: never;
    citation: CitationEvent;
    guardrail?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>A guardrail event.</p>
   * @public
   */
  export interface GuardrailMember {
    output?: never;
    citation?: never;
    guardrail: GuardrailEvent;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>An internal server error occurred. Retry your request.</p>
   * @public
   */
  export interface InternalServerExceptionMember {
    output?: never;
    citation?: never;
    guardrail?: never;
    internalServerException: InternalServerException;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>The input fails to satisfy the constraints specified by <i>Amazon Bedrock</i>. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-validation-error">ValidationError</a> in the Amazon Bedrock User Guide.</p>
   * @public
   */
  export interface ValidationExceptionMember {
    output?: never;
    citation?: never;
    guardrail?: never;
    internalServerException?: never;
    validationException: ValidationException;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>The specified resource ARN was not found. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-resource-not-found">ResourceNotFound</a> in the Amazon Bedrock User Guide.</p>
   * @public
   */
  export interface ResourceNotFoundExceptionMember {
    output?: never;
    citation?: never;
    guardrail?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException: ResourceNotFoundException;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>Your request exceeds the service quota for your account. You can view your quotas at <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/gs-request-quota.html">Viewing service quotas</a>. You can resubmit your request later.</p>
   * @public
   */
  export interface ServiceQuotaExceededExceptionMember {
    output?: never;
    citation?: never;
    guardrail?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException: ServiceQuotaExceededException;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>Your request was denied due to exceeding the account quotas for <i>Amazon Bedrock</i>. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-throttling-exception">ThrottlingException</a> in the Amazon Bedrock User Guide.</p>
   * @public
   */
  export interface ThrottlingExceptionMember {
    output?: never;
    citation?: never;
    guardrail?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException: ThrottlingException;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>The request is denied because you do not have sufficient permissions to perform the requested action. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-access-denied">AccessDeniedException</a> in the Amazon Bedrock User Guide.</p>
   * @public
   */
  export interface AccessDeniedExceptionMember {
    output?: never;
    citation?: never;
    guardrail?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException: AccessDeniedException;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>Error occurred because of a conflict while performing an operation.</p>
   * @public
   */
  export interface ConflictExceptionMember {
    output?: never;
    citation?: never;
    guardrail?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException: ConflictException;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>The request failed due to a dependency error.</p>
   * @public
   */
  export interface DependencyFailedExceptionMember {
    output?: never;
    citation?: never;
    guardrail?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException: DependencyFailedException;
    badGatewayException?: never;
    $unknown?: never;
  }

  /**
   * <p>The request failed due to a bad gateway error.</p>
   * @public
   */
  export interface BadGatewayExceptionMember {
    output?: never;
    citation?: never;
    guardrail?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException: BadGatewayException;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    output?: never;
    citation?: never;
    guardrail?: never;
    internalServerException?: never;
    validationException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    accessDeniedException?: never;
    conflictException?: never;
    dependencyFailedException?: never;
    badGatewayException?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    output: (value: RetrieveAndGenerateOutputEvent) => T;
    citation: (value: CitationEvent) => T;
    guardrail: (value: GuardrailEvent) => T;
    internalServerException: (value: InternalServerException) => T;
    validationException: (value: ValidationException) => T;
    resourceNotFoundException: (value: ResourceNotFoundException) => T;
    serviceQuotaExceededException: (value: ServiceQuotaExceededException) => T;
    throttlingException: (value: ThrottlingException) => T;
    accessDeniedException: (value: AccessDeniedException) => T;
    conflictException: (value: ConflictException) => T;
    dependencyFailedException: (value: DependencyFailedException) => T;
    badGatewayException: (value: BadGatewayException) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RetrieveAndGenerateStreamResponseOutput, visitor: Visitor<T>): T => {
    if (value.output !== undefined) return visitor.output(value.output);
    if (value.citation !== undefined) return visitor.citation(value.citation);
    if (value.guardrail !== undefined) return visitor.guardrail(value.guardrail);
    if (value.internalServerException !== undefined)
      return visitor.internalServerException(value.internalServerException);
    if (value.validationException !== undefined) return visitor.validationException(value.validationException);
    if (value.resourceNotFoundException !== undefined)
      return visitor.resourceNotFoundException(value.resourceNotFoundException);
    if (value.serviceQuotaExceededException !== undefined)
      return visitor.serviceQuotaExceededException(value.serviceQuotaExceededException);
    if (value.throttlingException !== undefined) return visitor.throttlingException(value.throttlingException);
    if (value.accessDeniedException !== undefined) return visitor.accessDeniedException(value.accessDeniedException);
    if (value.conflictException !== undefined) return visitor.conflictException(value.conflictException);
    if (value.dependencyFailedException !== undefined)
      return visitor.dependencyFailedException(value.dependencyFailedException);
    if (value.badGatewayException !== undefined) return visitor.badGatewayException(value.badGatewayException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface RetrieveAndGenerateStreamResponse {
  /**
   * <p>A stream of events from the model.</p>
   * @public
   */
  stream: AsyncIterable<RetrieveAndGenerateStreamResponseOutput> | undefined;

  /**
   * <p>The session ID.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * <p>Contains the query made to the knowledge base.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax">Retrieve request</a> – in the <code>retrievalQuery</code> field</p> </li> </ul>
 * @public
 */
export interface KnowledgeBaseQuery {
  /**
   * <p>The text of the query made to the knowledge base.</p>
   * @public
   */
  text: string | undefined;
}

/**
 * <p>Details about a result from querying the knowledge base.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax">Retrieve response</a> – in the <code>retrievalResults</code> field</p> </li> </ul>
 * @public
 */
export interface KnowledgeBaseRetrievalResult {
  /**
   * <p>Contains information about the content of the chunk.</p>
   * @public
   */
  content: RetrievalResultContent | undefined;

  /**
   * <p>Contains information about the location of the data source.</p>
   * @public
   */
  location?: RetrievalResultLocation | undefined;

  /**
   * <p>The level of relevance of the result to the query.</p>
   * @public
   */
  score?: number | undefined;

  /**
   * <p>Contains metadata attributes and their values for the file in the data source. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-ds.html#kb-ds-metadata">Metadata and filtering</a>.</p>
   * @public
   */
  metadata?: Record<string, __DocumentType> | undefined;
}

/**
 * @public
 */
export interface RetrieveResponse {
  /**
   * <p>A list of results from querying the knowledge base.</p>
   * @public
   */
  retrievalResults: KnowledgeBaseRetrievalResult[] | undefined;

  /**
   * <p>Specifies if there is a guardrail intervention in the response.</p>
   * @public
   */
  guardrailAction?: GuadrailAction | undefined;

  /**
   * <p>If there are more results than can fit in the response, the response returns a <code>nextToken</code>. Use this token in the <code>nextToken</code> field of another request to retrieve the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSessionRequest {
  /**
   * <p>A map of key-value pairs containing attributes to be persisted across the session. For example, the user's ID, their language preference, and the type of device they are using.</p>
   * @public
   */
  sessionMetadata?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to use to encrypt the session data. The user or role creating the session must have permission to use the key. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/session-encryption.html">Amazon Bedrock session encryption</a>. </p>
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * <p>Specify the key-value pairs for the tags that you want to attach to the session.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const SessionStatus = {
  ACTIVE: "ACTIVE",
  ENDED: "ENDED",
  EXPIRED: "EXPIRED",
} as const;

/**
 * @public
 */
export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus];

/**
 * @public
 */
export interface CreateSessionResponse {
  /**
   * <p>The unique identifier for the session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created session.</p>
   * @public
   */
  sessionArn: string | undefined;

  /**
   * <p>The current status of the session.</p>
   * @public
   */
  sessionStatus: SessionStatus | undefined;

  /**
   * <p>The timestamp for when the session was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteSessionRequest {
  /**
   * <p>The unique identifier for the session to be deleted. You can specify either the session's <code>sessionId</code> or its Amazon Resource Name (ARN).</p>
   * @public
   */
  sessionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteSessionResponse {}

/**
 * @public
 */
export interface EndSessionRequest {
  /**
   * <p>The unique identifier for the session to end. You can specify either the session's <code>sessionId</code> or its Amazon Resource Name (ARN).</p>
   * @public
   */
  sessionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface EndSessionResponse {
  /**
   * <p>The unique identifier of the session you ended.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the session you ended.</p>
   * @public
   */
  sessionArn: string | undefined;

  /**
   * <p>The current status of the session you ended.</p>
   * @public
   */
  sessionStatus: SessionStatus | undefined;
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * <p>A unique identifier for the session to retrieve. You can specify either the session's <code>sessionId</code> or its Amazon Resource Name (ARN).</p>
   * @public
   */
  sessionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * <p>The unique identifier for the session in UUID format.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the session.</p>
   * @public
   */
  sessionArn: string | undefined;

  /**
   * <p>The current status of the session.</p>
   * @public
   */
  sessionStatus: SessionStatus | undefined;

  /**
   * <p>The timestamp for when the session was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp for when the session was last modified.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>A map of key-value pairs containing attributes persisted across the session.</p>
   * @public
   */
  sessionMetadata?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service key used to encrypt the session data. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/session-encryption.html">Amazon Bedrock session encryption</a>.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateInvocationRequest {
  /**
   * <p>A unique identifier for the invocation in UUID format.</p>
   * @public
   */
  invocationId?: string | undefined;

  /**
   * <p>A description for the interactions in the invocation. For example, "User asking about weather in Seattle".</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier for the associated session for the invocation. You can specify either the session's <code>sessionId</code> or its Amazon Resource Name (ARN). </p>
   * @public
   */
  sessionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface CreateInvocationResponse {
  /**
   * <p>The unique identifier for the session associated with the invocation.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The unique identifier for the invocation.</p>
   * @public
   */
  invocationId: string | undefined;

  /**
   * <p>The timestamp for when the invocation was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListInvocationsRequest {
  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The unique identifier for the session to list invocations for. You can specify either the session's <code>sessionId</code> or its Amazon Resource Name (ARN).</p>
   * @public
   */
  sessionIdentifier: string | undefined;
}

/**
 * <p>Contains details about an invocation in a session. For more information about sessions, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/sessions.html">Store and retrieve conversation history and context with Amazon Bedrock sessions</a>.</p>
 * @public
 */
export interface InvocationSummary {
  /**
   * <p>The unique identifier for the session associated with the invocation.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>A unique identifier for the invocation in UUID format.</p>
   * @public
   */
  invocationId: string | undefined;

  /**
   * <p>The timestamp for when the invocation was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListInvocationsResponse {
  /**
   * <p>A list of invocation summaries associated with the session.</p>
   * @public
   */
  invocationSummaries: InvocationSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInvocationStepRequest {
  /**
   * <p>The unique identifier for the invocation in UUID format.</p>
   * @public
   */
  invocationIdentifier: string | undefined;

  /**
   * <p>The unique identifier (in UUID format) for the specific invocation step to retrieve.</p>
   * @public
   */
  invocationStepId: string | undefined;

  /**
   * <p>The unique identifier for the invocation step's associated session. You can specify either the session's <code>sessionId</code> or its Amazon Resource Name (ARN).</p>
   * @public
   */
  sessionIdentifier: string | undefined;
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
 * <p>Information about the Amazon S3 bucket where the image is stored.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>The path to the Amazon S3 bucket where the image is stored.</p>
   * @public
   */
  uri: string | undefined;
}

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
   * <p> The raw image bytes for the image. If you use an Amazon Web Services SDK, you don't need to encode the image bytes in base64.</p>
   * @public
   */
  export interface BytesMember {
    bytes: Uint8Array;
    s3Location?: never;
    $unknown?: never;
  }

  /**
   * <p>The path to the Amazon S3 bucket where the image is stored.</p>
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
 * <p>Image content for an invocation step.</p>
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
 * <p>A block of content that you pass to, or receive from, a Amazon Bedrock session in an invocation step. You pass the content to a session in the <code>payLoad</code> of the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_PutInvocationStep.html">PutInvocationStep</a> API operation. You retrieve the content with the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_GetInvocationStep.html">GetInvocationStep</a> API operation.</p> <p>For more information about sessions, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/sessions.html">Store and retrieve conversation history and context with Amazon Bedrock sessions</a>.</p>
 * @public
 */
export type BedrockSessionContentBlock =
  | BedrockSessionContentBlock.ImageMember
  | BedrockSessionContentBlock.TextMember
  | BedrockSessionContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace BedrockSessionContentBlock {
  /**
   * <p>The text in the invocation step.</p>
   * @public
   */
  export interface TextMember {
    text: string;
    image?: never;
    $unknown?: never;
  }

  /**
   * <p>The image in the invocation step.</p>
   * @public
   */
  export interface ImageMember {
    text?: never;
    image: ImageBlock;
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
    text: (value: string) => T;
    image: (value: ImageBlock) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: BedrockSessionContentBlock, visitor: Visitor<T>): T => {
    if (value.text !== undefined) return visitor.text(value.text);
    if (value.image !== undefined) return visitor.image(value.image);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Payload content, such as text and images, for the invocation step.</p>
 * @public
 */
export type InvocationStepPayload = InvocationStepPayload.ContentBlocksMember | InvocationStepPayload.$UnknownMember;

/**
 * @public
 */
export namespace InvocationStepPayload {
  /**
   * <p>The content for the invocation step.</p>
   * @public
   */
  export interface ContentBlocksMember {
    contentBlocks: BedrockSessionContentBlock[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    contentBlocks?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    contentBlocks: (value: BedrockSessionContentBlock[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: InvocationStepPayload, visitor: Visitor<T>): T => {
    if (value.contentBlocks !== undefined) return visitor.contentBlocks(value.contentBlocks);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Stores fine-grained state checkpoints, including text and images, for each interaction in an invocation in a session. For more information about sessions, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/sessions.html">Store and retrieve conversation history and context with Amazon Bedrock sessions</a>. </p>
 * @public
 */
export interface InvocationStep {
  /**
   * <p>The unique identifier of the session containing the invocation step.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The unique identifier (in UUID format) for the invocation that includes the invocation step.</p>
   * @public
   */
  invocationId: string | undefined;

  /**
   * <p>The unique identifier (in UUID format) for the invocation step.</p>
   * @public
   */
  invocationStepId: string | undefined;

  /**
   * <p>The timestamp for when the invocation step was created.</p>
   * @public
   */
  invocationStepTime: Date | undefined;

  /**
   * <p>Payload content, such as text and images, for the invocation step.</p>
   * @public
   */
  payload: InvocationStepPayload | undefined;
}

/**
 * @public
 */
export interface GetInvocationStepResponse {
  /**
   * <p>The complete details of the requested invocation step.</p>
   * @public
   */
  invocationStep: InvocationStep | undefined;
}

/**
 * @public
 */
export interface ListInvocationStepsRequest {
  /**
   * <p>The unique identifier (in UUID format) for the invocation to list invocation steps for.</p>
   * @public
   */
  invocationIdentifier?: string | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The unique identifier for the session associated with the invocation steps. You can specify either the session's <code>sessionId</code> or its Amazon Resource Name (ARN).</p>
   * @public
   */
  sessionIdentifier: string | undefined;
}

/**
 * <p>Contains details about an invocation step within an invocation in a session. For more information about sessions, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/sessions.html">Store and retrieve conversation history and context with Amazon Bedrock sessions</a>.</p>
 * @public
 */
export interface InvocationStepSummary {
  /**
   * <p>The unique identifier for the session associated with the invocation step.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>A unique identifier for the invocation in UUID format.</p>
   * @public
   */
  invocationId: string | undefined;

  /**
   * <p>The unique identifier (in UUID format) for the invocation step.</p>
   * @public
   */
  invocationStepId: string | undefined;

  /**
   * <p>The timestamp for when the invocation step was created.</p>
   * @public
   */
  invocationStepTime: Date | undefined;
}

/**
 * @public
 */
export interface ListInvocationStepsResponse {
  /**
   * <p>A list of summaries for each invocation step associated with a session and if you specified it, an invocation within the session.</p>
   * @public
   */
  invocationStepSummaries: InvocationStepSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutInvocationStepRequest {
  /**
   * <p>The unique identifier for the session to add the invocation step to. You can specify either the session's <code>sessionId</code> or its Amazon Resource Name (ARN).</p>
   * @public
   */
  sessionIdentifier: string | undefined;

  /**
   * <p>The unique identifier (in UUID format) of the invocation to add the invocation step to.</p>
   * @public
   */
  invocationIdentifier: string | undefined;

  /**
   * <p>The timestamp for when the invocation step occurred.</p>
   * @public
   */
  invocationStepTime: Date | undefined;

  /**
   * <p>The payload for the invocation step, including text and images for the interaction.</p>
   * @public
   */
  payload: InvocationStepPayload | undefined;

  /**
   * <p>The unique identifier of the invocation step in UUID format.</p>
   * @public
   */
  invocationStepId?: string | undefined;
}

/**
 * @public
 */
export interface PutInvocationStepResponse {
  /**
   * <p>The unique identifier of the invocation step in UUID format.</p>
   * @public
   */
  invocationStepId: string | undefined;
}

/**
 * @public
 */
export interface ListSessionsRequest {
  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains details about a session. For more information about sessions, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/sessions.html">Store and retrieve conversation history and context with Amazon Bedrock sessions</a>.</p>
 * @public
 */
export interface SessionSummary {
  /**
   * <p>The unique identifier for the session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the session.</p>
   * @public
   */
  sessionArn: string | undefined;

  /**
   * <p>The current status of the session.</p>
   * @public
   */
  sessionStatus: SessionStatus | undefined;

  /**
   * <p>The timestamp for when the session was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp for when the session was last modified.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListSessionsResponse {
  /**
   * <p>A list of summaries for each session in your Amazon Web Services account.</p>
   * @public
   */
  sessionSummaries: SessionSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSessionRequest {
  /**
   * <p>A map of key-value pairs containing attributes to be persisted across the session. For example the user's ID, their language preference, and the type of device they are using.</p>
   * @public
   */
  sessionMetadata?: Record<string, string> | undefined;

  /**
   * <p>The unique identifier of the session to modify. You can specify either the session's <code>sessionId</code> or its Amazon Resource Name (ARN).</p>
   * @public
   */
  sessionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateSessionResponse {
  /**
   * <p>The unique identifier of the session you updated.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the session that was updated.</p>
   * @public
   */
  sessionArn: string | undefined;

  /**
   * <p>The status of the session you updated.</p>
   * @public
   */
  sessionStatus: SessionStatus | undefined;

  /**
   * <p>The timestamp for when the session was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp for when the session was last modified.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to list tags.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The key-value pairs for the tags associated with the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>An object containing key-value pairs that define the tags to attach to the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the resource from which to remove tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of keys of the tags to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>Specifies the filters to use on the metadata attributes in the knowledge base data sources before returning results. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>. See the examples below to see how to use these filters.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax">Retrieve request</a> – in the <code>filter</code> field</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>filter</code> field</p> </li> </ul>
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
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the <code>key</code> and whose value matches the <code>value</code> in this object.</p> <p>The following example would return data sources with an <code>animal</code> attribute whose value is <code>cat</code>:</p> <p> <code>"equals": \{ "key": "animal", "value": "cat" \}</code> </p>
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
   * <p>Knowledge base data sources are returned when:</p> <ul> <li> <p>It contains a metadata attribute whose name matches the <code>key</code> and whose value doesn't match the <code>value</code> in this object.</p> </li> <li> <p>The key is not present in the document.</p> </li> </ul> <p>The following example would return data sources that don't contain an <code>animal</code> attribute whose value is <code>cat</code>.</p> <p> <code>"notEquals": \{ "key": "animal", "value": "cat" \}</code> </p>
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
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the <code>key</code> and whose value is greater than the <code>value</code> in this object.</p> <p>The following example would return data sources with an <code>year</code> attribute whose value is greater than <code>1989</code>:</p> <p> <code>"greaterThan": \{ "key": "year", "value": 1989 \}</code> </p>
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
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the <code>key</code> and whose value is greater than or equal to the <code>value</code> in this object.</p> <p>The following example would return data sources with an <code>year</code> attribute whose value is greater than or equal to <code>1989</code>:</p> <p> <code>"greaterThanOrEquals": \{ "key": "year", "value": 1989 \}</code> </p>
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
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the <code>key</code> and whose value is less than the <code>value</code> in this object.</p> <p>The following example would return data sources with an <code>year</code> attribute whose value is less than to <code>1989</code>.</p> <p> <code>"lessThan": \{ "key": "year", "value": 1989 \}</code> </p>
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
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the <code>key</code> and whose value is less than or equal to the <code>value</code> in this object.</p> <p>The following example would return data sources with an <code>year</code> attribute whose value is less than or equal to <code>1989</code>.</p> <p> <code>"lessThanOrEquals": \{ "key": "year", "value": 1989 \}</code> </p>
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
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the <code>key</code> and whose value is in the list specified in the <code>value</code> in this object.</p> <p>The following example would return data sources with an <code>animal</code> attribute that is either <code>cat</code> or <code>dog</code>:</p> <p> <code>"in": \{ "key": "animal", "value": ["cat", "dog"] \}</code> </p>
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
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the <code>key</code> and whose value isn't in the list specified in the <code>value</code> in this object.</p> <p>The following example would return data sources whose <code>animal</code> attribute is neither <code>cat</code> nor <code>dog</code>.</p> <p> <code>"notIn": \{ "key": "animal", "value": ["cat", "dog"] \}</code> </p>
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
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the <code>key</code> and whose value starts with the <code>value</code> in this object. This filter is currently only supported for Amazon OpenSearch Serverless vector stores.</p> <p>The following example would return data sources with an <code>animal</code> attribute starts with <code>ca</code> (for example, <code>cat</code> or <code>camel</code>).</p> <p> <code>"startsWith": \{ "key": "animal", "value": "ca" \}</code> </p>
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
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the <code>key</code> and whose value is a list that contains the <code>value</code> as one of its members.</p> <p>The following example would return data sources with an <code>animals</code> attribute that is a list containing a <code>cat</code> member (for example <code>["dog", "cat"]</code>).</p> <p> <code>"listContains": \{ "key": "animals", "value": "cat" \}</code> </p>
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
   * <p>Knowledge base data sources are returned if they contain a metadata attribute whose name matches the <code>key</code> and whose value is one of the following:</p> <ul> <li> <p>A string that contains the <code>value</code> as a substring. The following example would return data sources with an <code>animal</code> attribute that contains the substring <code>at</code> (for example <code>cat</code>).</p> <p> <code>"stringContains": \{ "key": "animal", "value": "at" \}</code> </p> </li> <li> <p>A list with a member that contains the <code>value</code> as a substring. The following example would return data sources with an <code>animals</code> attribute that is a list containing a member that contains the substring <code>at</code> (for example <code>["dog", "cat"]</code>).</p> <p> <code>"stringContains": \{ "key": "animals", "value": "at" \}</code> </p> </li> </ul>
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
 * <p>Configurations for how to perform the search query and return results. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax">Retrieve request</a> – in the <code>vectorSearchConfiguration</code> field</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>vectorSearchConfiguration</code> field</p> </li> </ul>
 * @public
 */
export interface KnowledgeBaseVectorSearchConfiguration {
  /**
   * <p>The number of source chunks to retrieve.</p>
   * @public
   */
  numberOfResults?: number | undefined;

  /**
   * <p>By default, Amazon Bedrock decides a search strategy for you. If you're using an Amazon OpenSearch Serverless vector store that contains a filterable text field, you can specify whether to query the knowledge base with a <code>HYBRID</code> search using both vector embeddings and raw text, or <code>SEMANTIC</code> search using only vector embeddings. For other vector store configurations, only <code>SEMANTIC</code> search is available. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-test.html">Test a knowledge base</a>.</p>
   * @public
   */
  overrideSearchType?: SearchType | undefined;

  /**
   * <p>Specifies the filters to use on the metadata in the knowledge base data sources before returning results. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p>
   * @public
   */
  filter?: RetrievalFilter | undefined;

  /**
   * <p>Contains configurations for reranking the retrieved results. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/rerank.html">Improve the relevance of query responses with a reranker model</a>.</p>
   * @public
   */
  rerankingConfiguration?: VectorSearchRerankingConfiguration | undefined;

  /**
   * <p>Settings for implicit filtering.</p>
   * @public
   */
  implicitFilterConfiguration?: ImplicitFilterConfiguration | undefined;
}

/**
 * <p>Contains configurations for knowledge base query. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax">Retrieve request</a> – in the <code>retrievalConfiguration</code> field</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>retrievalConfiguration</code> field</p> </li> </ul>
 * @public
 */
export interface KnowledgeBaseRetrievalConfiguration {
  /**
   * <p>Contains details about how the results from the vector search should be returned. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p>
   * @public
   */
  vectorSearchConfiguration: KnowledgeBaseVectorSearchConfiguration | undefined;
}

/**
 * <p> Details of the knowledge base associated withe inline agent. </p>
 * @public
 */
export interface KnowledgeBase {
  /**
   * <p> The unique identifier for a knowledge base associated with the inline agent. </p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p> The description of the knowledge base associated with the inline agent. </p>
   * @public
   */
  description: string | undefined;

  /**
   * <p> The configurations to apply to the knowledge base during query. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>. </p>
   * @public
   */
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration | undefined;
}

/**
 * <p>Configurations to apply to a knowledge base attached to the agent during query. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html#session-state-kb">Knowledge base retrieval configurations</a>.</p>
 * @public
 */
export interface KnowledgeBaseConfiguration {
  /**
   * <p>The unique identifier for a knowledge base attached to the agent.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The configurations to apply to the knowledge base during query. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p>
   * @public
   */
  retrievalConfiguration: KnowledgeBaseRetrievalConfiguration | undefined;
}

/**
 * <p>Contains details about the resource being queried.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax">Retrieve request</a> – in the <code>knowledgeBaseConfiguration</code> field</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>knowledgeBaseConfiguration</code> field</p> </li> </ul>
 * @public
 */
export interface KnowledgeBaseRetrieveAndGenerateConfiguration {
  /**
   * <p>The unique identifier of the knowledge base that is queried.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The ARN of the foundation model or <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">inference profile</a> used to generate a response.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>Contains configurations for how to retrieve and return the knowledge base query.</p>
   * @public
   */
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration | undefined;

  /**
   * <p>Contains configurations for response generation based on the knowledge base query results.</p>
   * @public
   */
  generationConfiguration?: GenerationConfiguration | undefined;

  /**
   * <p>Settings for how the model processes the prompt prior to retrieval and generation.</p>
   * @public
   */
  orchestrationConfiguration?: OrchestrationConfiguration | undefined;
}

/**
 * @public
 */
export interface RetrieveRequest {
  /**
   * <p>The unique identifier of the knowledge base to query.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>Contains the query to send the knowledge base.</p>
   * @public
   */
  retrievalQuery: KnowledgeBaseQuery | undefined;

  /**
   * <p>Contains configurations for the knowledge base query and retrieval process. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p>
   * @public
   */
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration | undefined;

  /**
   * <p>Guardrail settings.</p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * <p>If there are more results than can fit in the response, the response returns a <code>nextToken</code>. Use this token in the <code>nextToken</code> field of another request to retrieve the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains details about the resource being queried.</p> <p>This data type is used in the following API operations:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>retrieveAndGenerateConfiguration</code> field</p> </li> </ul>
 * @public
 */
export interface RetrieveAndGenerateConfiguration {
  /**
   * <p>The type of resource that contains your data for retrieving information and generating responses.</p> <note> <p>If you choose to use <code>EXTERNAL_SOURCES</code>, then currently only Anthropic Claude 3 Sonnet models for knowledge bases are supported.</p> </note>
   * @public
   */
  type: RetrieveAndGenerateType | undefined;

  /**
   * <p>Contains details about the knowledge base for retrieving information and generating responses.</p>
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
 * <p> List of inline collaborators. </p>
 * @public
 */
export interface Collaborator {
  /**
   * <p> The Amazon Resource Name (ARN) of the AWS KMS key that encrypts the inline collaborator. </p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p> The foundation model used by the inline collaborator agent. </p>
   * @public
   */
  foundationModel: string | undefined;

  /**
   * <p> Instruction that tell the inline collaborator agent what it should do and how it should interact with users. </p>
   * @public
   */
  instruction: string | undefined;

  /**
   * <p> The number of seconds for which the Amazon Bedrock keeps information about the user's conversation with the inline collaborator agent.</p> <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout. </p>
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * <p> List of action groups with each action group defining tasks the inline collaborator agent needs to carry out. </p>
   * @public
   */
  actionGroups?: AgentActionGroup[] | undefined;

  /**
   * <p> Knowledge base associated with the inline collaborator agent. </p>
   * @public
   */
  knowledgeBases?: KnowledgeBase[] | undefined;

  /**
   * <p> Details of the guardwrail associated with the inline collaborator. </p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfigurationWithArn | undefined;

  /**
   * <p> Contains configurations to override prompt templates in different parts of an inline collaborator sequence. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html">Advanced prompts</a>. </p>
   * @public
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration | undefined;

  /**
   * <p> Defines how the inline supervisor agent handles information across multiple collaborator agents to coordinate a final response. </p>
   * @public
   */
  agentCollaboration?: AgentCollaboration | undefined;

  /**
   * <p> Settings of the collaborator agent. </p>
   * @public
   */
  collaboratorConfigurations?: CollaboratorConfiguration[] | undefined;

  /**
   * <p> Name of the inline collaborator agent which must be the same name as specified for <code>collaboratorName</code>. </p>
   * @public
   */
  agentName?: string | undefined;
}

/**
 * @public
 */
export interface RetrieveAndGenerateRequest {
  /**
   * <p>The unique identifier of the session. When you first make a <code>RetrieveAndGenerate</code> request, Amazon Bedrock automatically generates this value. You must reuse this value for all subsequent requests in the same conversational session. This value allows Amazon Bedrock to maintain context and knowledge from previous interactions. You can't explicitly set the <code>sessionId</code> yourself.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>Contains the query to be made to the knowledge base.</p>
   * @public
   */
  input: RetrieveAndGenerateInput | undefined;

  /**
   * <p>Contains configurations for the knowledge base query and retrieval process. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p>
   * @public
   */
  retrieveAndGenerateConfiguration?: RetrieveAndGenerateConfiguration | undefined;

  /**
   * <p>Contains details about the session with the knowledge base.</p>
   * @public
   */
  sessionConfiguration?: RetrieveAndGenerateSessionConfiguration | undefined;
}

/**
 * @public
 */
export interface RetrieveAndGenerateStreamRequest {
  /**
   * <p>The unique identifier of the session. When you first make a <code>RetrieveAndGenerate</code> request, Amazon Bedrock automatically generates this value. You must reuse this value for all subsequent requests in the same conversational session. This value allows Amazon Bedrock to maintain context and knowledge from previous interactions. You can't explicitly set the <code>sessionId</code> yourself.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>Contains the query to be made to the knowledge base.</p>
   * @public
   */
  input: RetrieveAndGenerateInput | undefined;

  /**
   * <p>Contains configurations for the knowledge base query and retrieval process. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p>
   * @public
   */
  retrieveAndGenerateConfiguration?: RetrieveAndGenerateConfiguration | undefined;

  /**
   * <p>Contains details about the session with the knowledge base.</p>
   * @public
   */
  sessionConfiguration?: RetrieveAndGenerateSessionConfiguration | undefined;
}

/**
 * <p>Contains parameters that specify various attributes that persist across a session or prompt. You can define session state attributes as key-value pairs when writing a <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-lambda.html">Lambda function</a> for an action group or pass them when making an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html">InvokeAgent</a> request. Use session state attributes to control and provide conversational context for your agent and to help customize your agent's behavior. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html">Control session context</a>.</p>
 * @public
 */
export interface SessionState {
  /**
   * <p>Contains attributes that persist across a session and the values of those attributes. If <code>sessionAttributes</code> are passed to a supervisor agent in <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-multi-agent-collaboration.html">multi-agent collaboration</a>, it will be forwarded to all agent collaborators.</p>
   * @public
   */
  sessionAttributes?: Record<string, string> | undefined;

  /**
   * <p>Contains attributes that persist across a prompt and the values of those attributes. </p> <ul> <li> <p>In orchestration prompt template, these attributes replace the $prompt_session_attributes$ placeholder variable. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-placeholders.html">Prompt template placeholder variables</a>.</p> </li> <li> <p>In <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-multi-agent-collaboration.html">multi-agent collaboration</a>, the <code>promptSessionAttributes</code> will only be used by supervisor agent when $prompt_session_attributes$ is present in prompt template. </p> </li> </ul>
   * @public
   */
  promptSessionAttributes?: Record<string, string> | undefined;

  /**
   * <p>Contains information about the results from the action group invocation. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-returncontrol.html">Return control to the agent developer</a> and <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html">Control session context</a>.</p> <note> <p>If you include this field, the <code>inputText</code> field will be ignored.</p> </note>
   * @public
   */
  returnControlInvocationResults?: InvocationResultMember[] | undefined;

  /**
   * <p>The identifier of the invocation of an action. This value must match the <code>invocationId</code> returned in the <code>InvokeAgent</code> response for the action whose results are provided in the <code>returnControlInvocationResults</code> field. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-returncontrol.html">Return control to the agent developer</a> and <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html">Control session context</a>.</p>
   * @public
   */
  invocationId?: string | undefined;

  /**
   * <p>Contains information about the files used by code interpreter.</p>
   * @public
   */
  files?: InputFile[] | undefined;

  /**
   * <p>An array of configurations, each of which applies to a knowledge base attached to the agent.</p>
   * @public
   */
  knowledgeBaseConfigurations?: KnowledgeBaseConfiguration[] | undefined;

  /**
   * <p>The state's conversation history.</p>
   * @public
   */
  conversationHistory?: ConversationHistory | undefined;
}

/**
 * @public
 */
export interface InvokeAgentRequest {
  /**
   * <p>Contains parameters that specify various attributes of the session. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html">Control session context</a>.</p> <note> <p>If you include <code>returnControlInvocationResults</code> in the <code>sessionState</code> field, the <code>inputText</code> field will be ignored.</p> </note>
   * @public
   */
  sessionState?: SessionState | undefined;

  /**
   * <p>The unique identifier of the agent to use.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The alias of the agent to use.</p>
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * <p>The unique identifier of the session. Use the same value across requests to continue the same conversation.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>Specifies whether to end the session with the agent or not.</p>
   * @public
   */
  endSession?: boolean | undefined;

  /**
   * <p>Specifies whether to turn on the trace or not to track the agent's reasoning process. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-events">Trace enablement</a>.</p>
   * @public
   */
  enableTrace?: boolean | undefined;

  /**
   * <p>The prompt text to send the agent.</p> <note> <p>If you include <code>returnControlInvocationResults</code> in the <code>sessionState</code> field, the <code>inputText</code> field will be ignored.</p> </note>
   * @public
   */
  inputText?: string | undefined;

  /**
   * <p>The unique identifier of the agent memory.</p>
   * @public
   */
  memoryId?: string | undefined;

  /**
   * <p>Model performance settings for the request.</p>
   * @public
   */
  bedrockModelConfigurations?: BedrockModelConfigurations | undefined;

  /**
   * <p> Specifies the configurations for streaming. </p> <note> <p>To use agent streaming, you need permissions to perform the <code>bedrock:InvokeModelWithResponseStream</code> action.</p> </note>
   * @public
   */
  streamingConfigurations?: StreamingConfigurations | undefined;

  /**
   * <p>Specifies parameters that control how the service populates the agent prompt for an <code>InvokeAgent</code> request. You can control which aspects of previous invocations in the same agent session the service uses to populate the agent prompt. This gives you more granular control over the contextual history that is used to process the current request.</p>
   * @public
   */
  promptCreationConfigurations?: PromptCreationConfigurations | undefined;

  /**
   * <p>The ARN of the resource making the request.</p>
   * @public
   */
  sourceArn?: string | undefined;
}

/**
 * @public
 */
export interface InvokeInlineAgentRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the Amazon Web Services KMS key to use to encrypt your inline agent. </p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p> The <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#model-ids-arns">model identifier (ID)</a> of the model to use for orchestration by the inline agent. For example, <code>meta.llama3-1-70b-instruct-v1:0</code>. </p>
   * @public
   */
  foundationModel: string | undefined;

  /**
   * <p> The instructions that tell the inline agent what it should do and how it should interact with users. </p>
   * @public
   */
  instruction: string | undefined;

  /**
   * <p> The number of seconds for which the inline agent should maintain session information. After this time expires, the subsequent <code>InvokeInlineAgent</code> request begins a new session. </p> <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and the data provided before the timeout is deleted.</p>
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * <p> A list of action groups with each action group defining the action the inline agent needs to carry out. </p>
   * @public
   */
  actionGroups?: AgentActionGroup[] | undefined;

  /**
   * <p> Contains information of the knowledge bases to associate with. </p>
   * @public
   */
  knowledgeBases?: KnowledgeBase[] | undefined;

  /**
   * <p> The <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html">guardrails</a> to assign to the inline agent. </p>
   * @public
   */
  guardrailConfiguration?: GuardrailConfigurationWithArn | undefined;

  /**
   * <p> Configurations for advanced prompts used to override the default prompts to enhance the accuracy of the inline agent. </p>
   * @public
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration | undefined;

  /**
   * <p> Defines how the inline collaborator agent handles information across multiple collaborator agents to coordinate a final response. The inline collaborator agent can also be the supervisor. </p>
   * @public
   */
  agentCollaboration?: AgentCollaboration | undefined;

  /**
   * <p> Settings for an inline agent collaborator called with <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeInlineAgent.html">InvokeInlineAgent</a>. </p>
   * @public
   */
  collaboratorConfigurations?: CollaboratorConfiguration[] | undefined;

  /**
   * <p>The name for the agent.</p>
   * @public
   */
  agentName?: string | undefined;

  /**
   * <p> The unique identifier of the session. Use the same value across requests to continue the same conversation. </p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p> Specifies whether to end the session with the inline agent or not. </p>
   * @public
   */
  endSession?: boolean | undefined;

  /**
   * <p> Specifies whether to turn on the trace or not to track the agent's reasoning process. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/trace-events.html">Using trace</a>. </p>
   * @public
   */
  enableTrace?: boolean | undefined;

  /**
   * <p> The prompt text to send to the agent. </p> <note> <p>If you include <code>returnControlInvocationResults</code> in the <code>sessionState</code> field, the <code>inputText</code> field will be ignored.</p> </note>
   * @public
   */
  inputText?: string | undefined;

  /**
   * <p> Specifies the configurations for streaming. </p> <note> <p>To use agent streaming, you need permissions to perform the <code>bedrock:InvokeModelWithResponseStream</code> action.</p> </note>
   * @public
   */
  streamingConfigurations?: StreamingConfigurations | undefined;

  /**
   * <p>Specifies parameters that control how the service populates the agent prompt for an <code>InvokeInlineAgent</code> request. You can control which aspects of previous invocations in the same agent session the service uses to populate the agent prompt. This gives you more granular control over the contextual history that is used to process the current request.</p>
   * @public
   */
  promptCreationConfigurations?: PromptCreationConfigurations | undefined;

  /**
   * <p> Parameters that specify the various attributes of a sessions. You can include attributes for the session or prompt or, if you configured an action group to return control, results from invocation of the action group. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html">Control session context</a>. </p> <note> <p>If you include <code>returnControlInvocationResults</code> in the <code>sessionState</code> field, the <code>inputText</code> field will be ignored.</p> </note>
   * @public
   */
  inlineSessionState?: InlineSessionState | undefined;

  /**
   * <p> List of collaborator inline agents. </p>
   * @public
   */
  collaborators?: Collaborator[] | undefined;

  /**
   * <p>Model settings for the request.</p>
   * @public
   */
  bedrockModelConfigurations?: InlineBedrockModelConfigurations | undefined;

  /**
   * <p>Specifies the type of orchestration strategy for the agent. This is set to DEFAULT orchestration type, by default. </p>
   * @public
   */
  orchestrationType?: OrchestrationType | undefined;

  /**
   * <p>Contains details of the custom orchestration configured for the agent. </p>
   * @public
   */
  customOrchestration?: CustomOrchestration | undefined;
}

/**
 * @internal
 */
export const RetrieveAndGenerateOutputEventFilterSensitiveLog = (obj: RetrieveAndGenerateOutputEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetrieveAndGenerateStreamResponseOutputFilterSensitiveLog = (
  obj: RetrieveAndGenerateStreamResponseOutput
): any => {
  if (obj.output !== undefined) return { output: SENSITIVE_STRING };
  if (obj.citation !== undefined) return { citation: CitationEventFilterSensitiveLog(obj.citation) };
  if (obj.guardrail !== undefined) return { guardrail: obj.guardrail };
  if (obj.internalServerException !== undefined) return { internalServerException: obj.internalServerException };
  if (obj.validationException !== undefined) return { validationException: obj.validationException };
  if (obj.resourceNotFoundException !== undefined) return { resourceNotFoundException: obj.resourceNotFoundException };
  if (obj.serviceQuotaExceededException !== undefined)
    return { serviceQuotaExceededException: obj.serviceQuotaExceededException };
  if (obj.throttlingException !== undefined) return { throttlingException: obj.throttlingException };
  if (obj.accessDeniedException !== undefined) return { accessDeniedException: obj.accessDeniedException };
  if (obj.conflictException !== undefined) return { conflictException: obj.conflictException };
  if (obj.dependencyFailedException !== undefined) return { dependencyFailedException: obj.dependencyFailedException };
  if (obj.badGatewayException !== undefined) return { badGatewayException: obj.badGatewayException };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const RetrieveAndGenerateStreamResponseFilterSensitiveLog = (obj: RetrieveAndGenerateStreamResponse): any => ({
  ...obj,
  ...(obj.stream && { stream: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const KnowledgeBaseQueryFilterSensitiveLog = (obj: KnowledgeBaseQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KnowledgeBaseRetrievalResultFilterSensitiveLog = (obj: KnowledgeBaseRetrievalResult): any => ({
  ...obj,
  ...(obj.content && { content: SENSITIVE_STRING }),
  ...(obj.location && { location: SENSITIVE_STRING }),
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RetrieveResponseFilterSensitiveLog = (obj: RetrieveResponse): any => ({
  ...obj,
  ...(obj.retrievalResults && { retrievalResults: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BedrockSessionContentBlockFilterSensitiveLog = (obj: BedrockSessionContentBlock): any => {
  if (obj.text !== undefined) return { text: obj.text };
  if (obj.image !== undefined) return { image: obj.image };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const InvocationStepPayloadFilterSensitiveLog = (obj: InvocationStepPayload): any => {
  if (obj.contentBlocks !== undefined) return { contentBlocks: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const InvocationStepFilterSensitiveLog = (obj: InvocationStep): any => ({
  ...obj,
  ...(obj.payload && { payload: InvocationStepPayloadFilterSensitiveLog(obj.payload) }),
});

/**
 * @internal
 */
export const GetInvocationStepResponseFilterSensitiveLog = (obj: GetInvocationStepResponse): any => ({
  ...obj,
  ...(obj.invocationStep && { invocationStep: InvocationStepFilterSensitiveLog(obj.invocationStep) }),
});

/**
 * @internal
 */
export const PutInvocationStepRequestFilterSensitiveLog = (obj: PutInvocationStepRequest): any => ({
  ...obj,
  ...(obj.payload && { payload: InvocationStepPayloadFilterSensitiveLog(obj.payload) }),
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
  ...(obj.rerankingConfiguration && {
    rerankingConfiguration: VectorSearchRerankingConfigurationFilterSensitiveLog(obj.rerankingConfiguration),
  }),
  ...(obj.implicitFilterConfiguration && {
    implicitFilterConfiguration: ImplicitFilterConfigurationFilterSensitiveLog(obj.implicitFilterConfiguration),
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
export const KnowledgeBaseFilterSensitiveLog = (obj: KnowledgeBase): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.retrievalConfiguration && {
    retrievalConfiguration: KnowledgeBaseRetrievalConfigurationFilterSensitiveLog(obj.retrievalConfiguration),
  }),
});

/**
 * @internal
 */
export const KnowledgeBaseConfigurationFilterSensitiveLog = (obj: KnowledgeBaseConfiguration): any => ({
  ...obj,
  ...(obj.retrievalConfiguration && {
    retrievalConfiguration: KnowledgeBaseRetrievalConfigurationFilterSensitiveLog(obj.retrievalConfiguration),
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
  ...(obj.orchestrationConfiguration && {
    orchestrationConfiguration: OrchestrationConfigurationFilterSensitiveLog(obj.orchestrationConfiguration),
  }),
});

/**
 * @internal
 */
export const RetrieveRequestFilterSensitiveLog = (obj: RetrieveRequest): any => ({
  ...obj,
  ...(obj.retrievalQuery && { retrievalQuery: SENSITIVE_STRING }),
  ...(obj.retrievalConfiguration && {
    retrievalConfiguration: KnowledgeBaseRetrievalConfigurationFilterSensitiveLog(obj.retrievalConfiguration),
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
export const CollaboratorFilterSensitiveLog = (obj: Collaborator): any => ({
  ...obj,
  ...(obj.instruction && { instruction: SENSITIVE_STRING }),
  ...(obj.actionGroups && { actionGroups: obj.actionGroups.map((item) => AgentActionGroupFilterSensitiveLog(item)) }),
  ...(obj.knowledgeBases && {
    knowledgeBases: obj.knowledgeBases.map((item) => KnowledgeBaseFilterSensitiveLog(item)),
  }),
  ...(obj.promptOverrideConfiguration && { promptOverrideConfiguration: SENSITIVE_STRING }),
  ...(obj.collaboratorConfigurations && {
    collaboratorConfigurations: obj.collaboratorConfigurations.map((item) =>
      CollaboratorConfigurationFilterSensitiveLog(item)
    ),
  }),
  ...(obj.agentName && { agentName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RetrieveAndGenerateRequestFilterSensitiveLog = (obj: RetrieveAndGenerateRequest): any => ({
  ...obj,
  ...(obj.input && { input: SENSITIVE_STRING }),
  ...(obj.retrieveAndGenerateConfiguration && {
    retrieveAndGenerateConfiguration: RetrieveAndGenerateConfigurationFilterSensitiveLog(
      obj.retrieveAndGenerateConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const RetrieveAndGenerateStreamRequestFilterSensitiveLog = (obj: RetrieveAndGenerateStreamRequest): any => ({
  ...obj,
  ...(obj.input && { input: SENSITIVE_STRING }),
  ...(obj.retrieveAndGenerateConfiguration && {
    retrieveAndGenerateConfiguration: RetrieveAndGenerateConfigurationFilterSensitiveLog(
      obj.retrieveAndGenerateConfiguration
    ),
  }),
});

/**
 * @internal
 */
export const SessionStateFilterSensitiveLog = (obj: SessionState): any => ({
  ...obj,
  ...(obj.returnControlInvocationResults && {
    returnControlInvocationResults: obj.returnControlInvocationResults.map((item) =>
      InvocationResultMemberFilterSensitiveLog(item)
    ),
  }),
  ...(obj.files && { files: obj.files.map((item) => InputFileFilterSensitiveLog(item)) }),
  ...(obj.knowledgeBaseConfigurations && {
    knowledgeBaseConfigurations: obj.knowledgeBaseConfigurations.map((item) =>
      KnowledgeBaseConfigurationFilterSensitiveLog(item)
    ),
  }),
  ...(obj.conversationHistory && {
    conversationHistory: ConversationHistoryFilterSensitiveLog(obj.conversationHistory),
  }),
});

/**
 * @internal
 */
export const InvokeAgentRequestFilterSensitiveLog = (obj: InvokeAgentRequest): any => ({
  ...obj,
  ...(obj.sessionState && { sessionState: SessionStateFilterSensitiveLog(obj.sessionState) }),
  ...(obj.inputText && { inputText: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InvokeInlineAgentRequestFilterSensitiveLog = (obj: InvokeInlineAgentRequest): any => ({
  ...obj,
  ...(obj.instruction && { instruction: SENSITIVE_STRING }),
  ...(obj.actionGroups && { actionGroups: obj.actionGroups.map((item) => AgentActionGroupFilterSensitiveLog(item)) }),
  ...(obj.knowledgeBases && {
    knowledgeBases: obj.knowledgeBases.map((item) => KnowledgeBaseFilterSensitiveLog(item)),
  }),
  ...(obj.promptOverrideConfiguration && { promptOverrideConfiguration: SENSITIVE_STRING }),
  ...(obj.collaboratorConfigurations && {
    collaboratorConfigurations: obj.collaboratorConfigurations.map((item) =>
      CollaboratorConfigurationFilterSensitiveLog(item)
    ),
  }),
  ...(obj.agentName && { agentName: SENSITIVE_STRING }),
  ...(obj.inputText && { inputText: SENSITIVE_STRING }),
  ...(obj.inlineSessionState && { inlineSessionState: InlineSessionStateFilterSensitiveLog(obj.inlineSessionState) }),
  ...(obj.collaborators && { collaborators: obj.collaborators.map((item) => CollaboratorFilterSensitiveLog(item)) }),
  ...(obj.customOrchestration && { customOrchestration: obj.customOrchestration }),
});
