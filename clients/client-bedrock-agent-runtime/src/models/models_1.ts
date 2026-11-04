// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AgentCollaboration,
  GuadrailAction,
  ImageFormat,
  InputImageFormat,
  KnowledgeBaseQueryType,
  OrchestrationType,
  RerankingModelType,
  RetrieveAndGenerateType,
  SearchType,
  SessionStatus,
} from "./enums";
import type {
  AccessDeniedException,
  BadGatewayException,
  ConflictException,
  DependencyFailedException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "./errors";
import type {
  AgentActionGroup,
  AgenticRetrieveConfiguration,
  AgenticRetrieveInstructionConfiguration,
  AgenticRetrieveMemoryConfiguration,
  AgenticRetrieveMessage,
  AgenticRetrievePolicyConfiguration,
  BedrockModelConfigurations,
  Citation,
  CollaboratorConfiguration,
  ConversationHistory,
  CustomOrchestration,
  ExternalSourcesRetrieveAndGenerateConfiguration,
  FilterAttribute,
  GeneratedResponsePart,
  GenerationConfiguration,
  GuardrailConfiguration,
  GuardrailConfigurationWithArn,
  ImplicitFilterConfiguration,
  InferenceConfig,
  InlineBedrockModelConfigurations,
  InlineSessionState,
  InputFile,
  InvocationResultMember,
  ManagedSearchRerankingConfiguration,
  PerformanceConfiguration,
  PromptCreationConfigurations,
  PromptOverrideConfiguration,
  PromptTemplate,
  QueryTransformationConfiguration,
  RetrievalResultContent,
  RetrievalResultLocation,
  RetrieveAndGenerateInput,
  RetrievedReference,
  StreamingConfigurations,
  UserContext,
  VectorSearchRerankingConfiguration,
} from "./models_0";

/**
 * Settings for how the model processes the prompt prior to retrieval and generation.
 *
 * @public
 */
export interface OrchestrationConfiguration {
  /**
   * Contains the template for the prompt that's sent to the model. Orchestration prompts must include the `$conversation_history$` and `$output_format_instructions$` variables. For more information, see [Use placeholder variables](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-placeholders.html) in the user guide.
   *
   * @public
   */
  promptTemplate?: PromptTemplate | undefined;

  /**
   * Configuration settings for inference when using RetrieveAndGenerate to generate responses while using a knowledge base as a source.
   *
   * @public
   */
  inferenceConfig?: InferenceConfig | undefined;

  /**
   * Additional model parameters and corresponding values not included in the textInferenceConfig structure for a knowledge base. This allows users to provide custom model parameters specific to the language model being used.
   *
   * @public
   */
  additionalModelRequestFields?: Record<string, __DocumentType> | undefined;

  /**
   * To split up the prompt and retrieve multiple sources, set the transformation type to `QUERY_DECOMPOSITION`.
   *
   * @public
   */
  queryTransformationConfiguration?: QueryTransformationConfiguration | undefined;

  /**
   * The latency configuration for the model.
   *
   * @public
   */
  performanceConfig?: PerformanceConfiguration | undefined;
}

/**
 * Contains configuration about the session with the knowledge base.
 *
 * This data type is used in the following API operations:
 *
 * - [RetrieveAndGenerate request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax) – in the `sessionConfiguration` field
 *
 * @public
 */
export interface RetrieveAndGenerateSessionConfiguration {
  /**
   * The ARN of the KMS key encrypting the session.
   *
   * @public
   */
  kmsKeyArn: string | undefined;
}

/**
 * Contains the response generated from querying the knowledge base.
 *
 * This data type is used in the following API operations:
 *
 * - [RetrieveAndGenerate response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax) – in the `output` field
 *
 * @public
 */
export interface RetrieveAndGenerateOutput {
  /**
   * The response generated from querying the knowledge base.
   *
   * @public
   */
  text: string | undefined;
}

/**
 * @public
 */
export interface RetrieveAndGenerateResponse {
  /**
   * The unique identifier of the session. When you first make a `RetrieveAndGenerate` request, Amazon Bedrock automatically generates this value. You must reuse this value for all subsequent requests in the same conversational session. This value allows Amazon Bedrock to maintain context and knowledge from previous interactions. You can't explicitly set the `sessionId` yourself.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * Contains the response generated from querying the knowledge base.
   *
   * @public
   */
  output: RetrieveAndGenerateOutput | undefined;

  /**
   * A list of segments of the generated response that are based on sources in the knowledge base, alongside information about the sources.
   *
   * @public
   */
  citations?: Citation[] | undefined;

  /**
   * Specifies if there is a guardrail intervention in the response.
   *
   * @public
   */
  guardrailAction?: GuadrailAction | undefined;
}

/**
 * A citation event.
 *
 * @public
 */
export interface CitationEvent {
  /**
   * The citation.
   *
   * @deprecated (since 2024-12-17) Citation is deprecated. Please use GeneratedResponsePart and RetrievedReferences for citation event.
   * @public
   */
  citation?: Citation | undefined;

  /**
   * The generated response to the citation event.
   *
   * @public
   */
  generatedResponsePart?: GeneratedResponsePart | undefined;

  /**
   * The retrieved references of the citation event.
   *
   * @public
   */
  retrievedReferences?: RetrievedReference[] | undefined;
}

/**
 * A guardrail event.
 *
 * @public
 */
export interface GuardrailEvent {
  /**
   * The guardrail action.
   *
   * @public
   */
  action?: GuadrailAction | undefined;
}

/**
 * A retrieve and generate output event.
 *
 * @public
 */
export interface RetrieveAndGenerateOutputEvent {
  /**
   * A text response.
   *
   * @public
   */
  text: string | undefined;
}

/**
 * A retrieve and generate stream response output.
 *
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
   * An output event.
   *
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
   * A citation event.
   *
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
   * A guardrail event.
   *
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
   * An internal server error occurred. Retry your request.
   *
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
   * The input fails to satisfy the constraints specified by *Amazon Bedrock*. For troubleshooting this error, see [ValidationError](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-validation-error) in the Amazon Bedrock User Guide.
   *
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
   * The specified resource ARN was not found. For troubleshooting this error, see [ResourceNotFound](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-resource-not-found) in the Amazon Bedrock User Guide.
   *
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
   * Your request exceeds the service quota for your account. You can view your quotas at [Viewing service quotas](https://docs.aws.amazon.com/servicequotas/latest/userguide/gs-request-quota.html). You can resubmit your request later.
   *
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
   * Your request was denied due to exceeding the account quotas for *Amazon Bedrock*. For troubleshooting this error, see [ThrottlingException](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-throttling-exception) in the Amazon Bedrock User Guide.
   *
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
   * The request is denied because you do not have sufficient permissions to perform the requested action. For troubleshooting this error, see [AccessDeniedException](https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-access-denied) in the Amazon Bedrock User Guide.
   *
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
   * Error occurred because of a conflict while performing an operation.
   *
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
   * The request failed due to a dependency error.
   *
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
   * The request failed due to a bad gateway error.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
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
}

/**
 * @public
 */
export interface RetrieveAndGenerateStreamResponse {
  /**
   * A stream of events from the model.
   *
   * @public
   */
  stream: AsyncIterable<RetrieveAndGenerateStreamResponseOutput> | undefined;

  /**
   * The session ID.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * Contains the image data for multimodal knowledge base queries, including format and content.
 *
 * This data type is used in the following API operations:
 *
 * - [Retrieve request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax) – in the `image` field
 *
 * @public
 */
export interface InputImage {
  /**
   * The format of the input image. Supported formats include png, gif, jpeg, and webp.
   *
   * @public
   */
  format: InputImageFormat | undefined;

  /**
   * The base64-encoded image data for inline image content. Maximum size is 5MB.
   *
   * @public
   */
  inlineContent: Uint8Array | undefined;
}

/**
 * Contains the query made to the knowledge base.
 *
 * This data type is used in the following API operations:
 *
 * - [Retrieve request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax) – in the `retrievalQuery` field
 *
 * @public
 */
export interface KnowledgeBaseQuery {
  /**
   * The type of query being performed.
   *
   * @public
   */
  type?: KnowledgeBaseQueryType | undefined;

  /**
   * The text of the query made to the knowledge base.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * An image to include in the knowledge base query for multimodal retrieval.
   *
   * @public
   */
  image?: InputImage | undefined;
}

/**
 * Details about a result from querying the knowledge base.
 *
 * This data type is used in the following API operations:
 *
 * - [Retrieve response](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax) – in the `retrievalResults` field
 *
 * @public
 */
export interface KnowledgeBaseRetrievalResult {
  /**
   * Contains information about the content of the chunk.
   *
   * @public
   */
  content: RetrievalResultContent | undefined;

  /**
   * Contains information about the location of the data source.
   *
   * @public
   */
  location?: RetrievalResultLocation | undefined;

  /**
   * The level of relevance of the result to the query.
   *
   * @public
   */
  score?: number | undefined;

  /**
   * Contains metadata attributes and their values for the file in the data source. For more information, see [Metadata and filtering](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-ds.html#kb-ds-metadata).
   *
   * @public
   */
  metadata?: Record<string, __DocumentType> | undefined;

  /**
   * The unique identifier of the document. Use with `GetDocumentContent` to retrieve the full document.
   *
   * @public
   */
  documentId?: string | undefined;
}

/**
 * @public
 */
export interface RetrieveResponse {
  /**
   * A list of results from querying the knowledge base.
   *
   * @public
   */
  retrievalResults: KnowledgeBaseRetrievalResult[] | undefined;

  /**
   * Specifies if there is a guardrail intervention in the response.
   *
   * @public
   */
  guardrailAction?: GuadrailAction | undefined;

  /**
   * If there are more results than can fit in the response, the response returns a `nextToken`. Use this token in the `nextToken` field of another request to retrieve the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSessionRequest {
  /**
   * A map of key-value pairs containing attributes to be persisted across the session. For example, the user's ID, their language preference, and the type of device they are using.
   *
   * @public
   */
  sessionMetadata?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key to use to encrypt the session data. The user or role creating the session must have permission to use the key. For more information, see [Amazon Bedrock session encryption](https://docs.aws.amazon.com/bedrock/latest/userguide/session-encryption.html).
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * Specify the key-value pairs for the tags that you want to attach to the session.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSessionResponse {
  /**
   * The unique identifier for the session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created session.
   *
   * @public
   */
  sessionArn: string | undefined;

  /**
   * The current status of the session.
   *
   * @public
   */
  sessionStatus: SessionStatus | undefined;

  /**
   * The timestamp for when the session was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteSessionRequest {
  /**
   * The unique identifier for the session to be deleted. You can specify either the session's `sessionId` or its Amazon Resource Name (ARN).
   *
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
   * The unique identifier for the session to end. You can specify either the session's `sessionId` or its Amazon Resource Name (ARN).
   *
   * @public
   */
  sessionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface EndSessionResponse {
  /**
   * The unique identifier of the session you ended.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the session you ended.
   *
   * @public
   */
  sessionArn: string | undefined;

  /**
   * The current status of the session you ended.
   *
   * @public
   */
  sessionStatus: SessionStatus | undefined;
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * A unique identifier for the session to retrieve. You can specify either the session's `sessionId` or its Amazon Resource Name (ARN).
   *
   * @public
   */
  sessionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * The unique identifier for the session in UUID format.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the session.
   *
   * @public
   */
  sessionArn: string | undefined;

  /**
   * The current status of the session.
   *
   * @public
   */
  sessionStatus: SessionStatus | undefined;

  /**
   * The timestamp for when the session was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp for when the session was last modified.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * A map of key-value pairs containing attributes persisted across the session.
   *
   * @public
   */
  sessionMetadata?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Key Management Service key used to encrypt the session data. For more information, see [Amazon Bedrock session encryption](https://docs.aws.amazon.com/bedrock/latest/userguide/session-encryption.html).
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateInvocationRequest {
  /**
   * A unique identifier for the invocation in UUID format.
   *
   * @public
   */
  invocationId?: string | undefined;

  /**
   * A description for the interactions in the invocation. For example, "User asking about weather in Seattle".
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier for the associated session for the invocation. You can specify either the session's `sessionId` or its Amazon Resource Name (ARN).
   *
   * @public
   */
  sessionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface CreateInvocationResponse {
  /**
   * The unique identifier for the session associated with the invocation.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The unique identifier for the invocation.
   *
   * @public
   */
  invocationId: string | undefined;

  /**
   * The timestamp for when the invocation was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListInvocationsRequest {
  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The unique identifier for the session to list invocations for. You can specify either the session's `sessionId` or its Amazon Resource Name (ARN).
   *
   * @public
   */
  sessionIdentifier: string | undefined;
}

/**
 * Contains details about an invocation in a session. For more information about sessions, see [Store and retrieve conversation history and context with Amazon Bedrock sessions](https://docs.aws.amazon.com/bedrock/latest/userguide/sessions.html).
 *
 * @public
 */
export interface InvocationSummary {
  /**
   * The unique identifier for the session associated with the invocation.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * A unique identifier for the invocation in UUID format.
   *
   * @public
   */
  invocationId: string | undefined;

  /**
   * The timestamp for when the invocation was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListInvocationsResponse {
  /**
   * A list of invocation summaries associated with the session.
   *
   * @public
   */
  invocationSummaries: InvocationSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInvocationStepRequest {
  /**
   * The unique identifier for the invocation in UUID format.
   *
   * @public
   */
  invocationIdentifier: string | undefined;

  /**
   * The unique identifier (in UUID format) for the specific invocation step to retrieve.
   *
   * @public
   */
  invocationStepId: string | undefined;

  /**
   * The unique identifier for the invocation step's associated session. You can specify either the session's `sessionId` or its Amazon Resource Name (ARN).
   *
   * @public
   */
  sessionIdentifier: string | undefined;
}

/**
 * Information about the Amazon S3 bucket where the image is stored.
 *
 * @public
 */
export interface S3Location {
  /**
   * The path to the Amazon S3 bucket where the image is stored.
   *
   * @public
   */
  uri: string | undefined;
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
   * The raw image bytes for the image. If you use an Amazon Web Services SDK, you don't need to encode the image bytes in base64.
   *
   * @public
   */
  export interface BytesMember {
    bytes: Uint8Array;
    s3Location?: never;
    $unknown?: never;
  }

  /**
   * The path to the Amazon S3 bucket where the image is stored.
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
 * Image content for an invocation step.
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
}

/**
 * A block of content that you pass to, or receive from, a Amazon Bedrock session in an invocation step. You pass the content to a session in the `payLoad` of the [PutInvocationStep](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_PutInvocationStep.html) API operation. You retrieve the content with the [GetInvocationStep](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_GetInvocationStep.html) API operation.
 *
 * For more information about sessions, see [Store and retrieve conversation history and context with Amazon Bedrock sessions](https://docs.aws.amazon.com/bedrock/latest/userguide/sessions.html).
 *
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
   * The text in the invocation step.
   *
   * @public
   */
  export interface TextMember {
    text: string;
    image?: never;
    $unknown?: never;
  }

  /**
   * The image in the invocation step.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    image: (value: ImageBlock) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Payload content, such as text and images, for the invocation step.
 *
 * @public
 */
export type InvocationStepPayload =
  | InvocationStepPayload.ContentBlocksMember
  | InvocationStepPayload.$UnknownMember;

/**
 * @public
 */
export namespace InvocationStepPayload {
  /**
   * The content for the invocation step.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    contentBlocks: (value: BedrockSessionContentBlock[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Stores fine-grained state checkpoints, including text and images, for each interaction in an invocation in a session. For more information about sessions, see [Store and retrieve conversation history and context with Amazon Bedrock sessions](https://docs.aws.amazon.com/bedrock/latest/userguide/sessions.html).
 *
 * @public
 */
export interface InvocationStep {
  /**
   * The unique identifier of the session containing the invocation step.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The unique identifier (in UUID format) for the invocation that includes the invocation step.
   *
   * @public
   */
  invocationId: string | undefined;

  /**
   * The unique identifier (in UUID format) for the invocation step.
   *
   * @public
   */
  invocationStepId: string | undefined;

  /**
   * The timestamp for when the invocation step was created.
   *
   * @public
   */
  invocationStepTime: Date | undefined;

  /**
   * Payload content, such as text and images, for the invocation step.
   *
   * @public
   */
  payload: InvocationStepPayload | undefined;
}

/**
 * @public
 */
export interface GetInvocationStepResponse {
  /**
   * The complete details of the requested invocation step.
   *
   * @public
   */
  invocationStep: InvocationStep | undefined;
}

/**
 * @public
 */
export interface ListInvocationStepsRequest {
  /**
   * The unique identifier (in UUID format) for the invocation to list invocation steps for.
   *
   * @public
   */
  invocationIdentifier?: string | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The unique identifier for the session associated with the invocation steps. You can specify either the session's `sessionId` or its Amazon Resource Name (ARN).
   *
   * @public
   */
  sessionIdentifier: string | undefined;
}

/**
 * Contains details about an invocation step within an invocation in a session. For more information about sessions, see [Store and retrieve conversation history and context with Amazon Bedrock sessions](https://docs.aws.amazon.com/bedrock/latest/userguide/sessions.html).
 *
 * @public
 */
export interface InvocationStepSummary {
  /**
   * The unique identifier for the session associated with the invocation step.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * A unique identifier for the invocation in UUID format.
   *
   * @public
   */
  invocationId: string | undefined;

  /**
   * The unique identifier (in UUID format) for the invocation step.
   *
   * @public
   */
  invocationStepId: string | undefined;

  /**
   * The timestamp for when the invocation step was created.
   *
   * @public
   */
  invocationStepTime: Date | undefined;
}

/**
 * @public
 */
export interface ListInvocationStepsResponse {
  /**
   * A list of summaries for each invocation step associated with a session and if you specified it, an invocation within the session.
   *
   * @public
   */
  invocationStepSummaries: InvocationStepSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutInvocationStepRequest {
  /**
   * The unique identifier for the session to add the invocation step to. You can specify either the session's `sessionId` or its Amazon Resource Name (ARN).
   *
   * @public
   */
  sessionIdentifier: string | undefined;

  /**
   * The unique identifier (in UUID format) of the invocation to add the invocation step to.
   *
   * @public
   */
  invocationIdentifier: string | undefined;

  /**
   * The timestamp for when the invocation step occurred.
   *
   * @public
   */
  invocationStepTime: Date | undefined;

  /**
   * The payload for the invocation step, including text and images for the interaction.
   *
   * @public
   */
  payload: InvocationStepPayload | undefined;

  /**
   * The unique identifier of the invocation step in UUID format.
   *
   * @public
   */
  invocationStepId?: string | undefined;
}

/**
 * @public
 */
export interface PutInvocationStepResponse {
  /**
   * The unique identifier of the invocation step in UUID format.
   *
   * @public
   */
  invocationStepId: string | undefined;
}

/**
 * @public
 */
export interface ListSessionsRequest {
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
}

/**
 * Contains details about a session. For more information about sessions, see [Store and retrieve conversation history and context with Amazon Bedrock sessions](https://docs.aws.amazon.com/bedrock/latest/userguide/sessions.html).
 *
 * @public
 */
export interface SessionSummary {
  /**
   * The unique identifier for the session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the session.
   *
   * @public
   */
  sessionArn: string | undefined;

  /**
   * The current status of the session.
   *
   * @public
   */
  sessionStatus: SessionStatus | undefined;

  /**
   * The timestamp for when the session was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp for when the session was last modified.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListSessionsResponse {
  /**
   * A list of summaries for each session in your Amazon Web Services account.
   *
   * @public
   */
  sessionSummaries: SessionSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSessionRequest {
  /**
   * A map of key-value pairs containing attributes to be persisted across the session. For example the user's ID, their language preference, and the type of device they are using.
   *
   * @public
   */
  sessionMetadata?: Record<string, string> | undefined;

  /**
   * The unique identifier of the session to modify. You can specify either the session's `sessionId` or its Amazon Resource Name (ARN).
   *
   * @public
   */
  sessionIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdateSessionResponse {
  /**
   * The unique identifier of the session you updated.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the session that was updated.
   *
   * @public
   */
  sessionArn: string | undefined;

  /**
   * The status of the session you updated.
   *
   * @public
   */
  sessionStatus: SessionStatus | undefined;

  /**
   * The timestamp for when the session was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp for when the session was last modified.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource for which to list tags.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The key-value pairs for the tags associated with the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * An object containing key-value pairs that define the tags to attach to the resource.
   *
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
   * The Amazon Resource Name (ARN) of the resource from which to remove tags.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of keys of the tags to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * Specifies the filters to use on the metadata attributes in the knowledge base data sources before returning results. For more information, see [Query configurations](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html). See the examples below to see how to use these filters.
 *
 * This data type is used in the following API operations:
 *
 * - [Retrieve request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax) – in the `filter` field
 * - [RetrieveAndGenerate request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax) – in the `filter` field
 *
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
   * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the `key` and whose value matches the `value` in this object.
   *
   * The following example would return data sources with an `animal` attribute whose value is `cat`:
   *
   * `"equals": \{ "key": "animal", "value": "cat" \}`
   *
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
   * Knowledge base data sources are returned when:
   *
   * - It contains a metadata attribute whose name matches the `key` and whose value doesn't match the `value` in this object.
   * - The key is not present in the document.
   *
   * The following example would return data sources that don't contain an `animal` attribute whose value is `cat`.
   *
   * `"notEquals": \{ "key": "animal", "value": "cat" \}`
   *
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
   * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the `key` and whose value is greater than the `value` in this object.
   *
   * The following example would return data sources with an `year` attribute whose value is greater than `1989`:
   *
   * `"greaterThan": \{ "key": "year", "value": 1989 \}`
   *
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
   * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the `key` and whose value is greater than or equal to the `value` in this object.
   *
   * The following example would return data sources with an `year` attribute whose value is greater than or equal to `1989`:
   *
   * `"greaterThanOrEquals": \{ "key": "year", "value": 1989 \}`
   *
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
   * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the `key` and whose value is less than the `value` in this object.
   *
   * The following example would return data sources with an `year` attribute whose value is less than to `1989`.
   *
   * `"lessThan": \{ "key": "year", "value": 1989 \}`
   *
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
   * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the `key` and whose value is less than or equal to the `value` in this object.
   *
   * The following example would return data sources with an `year` attribute whose value is less than or equal to `1989`.
   *
   * `"lessThanOrEquals": \{ "key": "year", "value": 1989 \}`
   *
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
   * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the `key` and whose value is in the list specified in the `value` in this object.
   *
   * The following example would return data sources with an `animal` attribute that is either `cat` or `dog`:
   *
   * `"in": \{ "key": "animal", "value": ["cat", "dog"] \}`
   *
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
   * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the `key` and whose value isn't in the list specified in the `value` in this object.
   *
   * The following example would return data sources whose `animal` attribute is neither `cat` nor `dog`.
   *
   * `"notIn": \{ "key": "animal", "value": ["cat", "dog"] \}`
   *
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
   * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the `key` and whose value starts with the `value` in this object. This filter is currently only supported for Amazon OpenSearch Serverless vector stores.
   *
   * The following example would return data sources with an `animal` attribute starts with `ca` (for example, `cat` or `camel`).
   *
   * `"startsWith": \{ "key": "animal", "value": "ca" \}`
   *
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
   * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the `key` and whose value is a list that contains the `value` as one of its members.
   *
   * The following example would return data sources with an `animals` attribute that is a list containing a `cat` member (for example `["dog", "cat"]`).
   *
   * `"listContains": \{ "key": "animals", "value": "cat" \}`
   *
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
   * Knowledge base data sources are returned if they contain a metadata attribute whose name matches the `key` and whose value is one of the following:
   *
   * - A string that contains the `value` as a substring. The following example would return data sources with an `animal` attribute that contains the substring `at` (for example `cat`).
   *
   *   `"stringContains": \{ "key": "animal", "value": "at" \}`
   * - A list with a member that contains the `value` as a substring. The following example would return data sources with an `animals` attribute that is a list containing a member that contains the substring `at` (for example `["dog", "cat"]`).
   *
   *   `"stringContains": \{ "key": "animals", "value": "at" \}`
   *
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
   * Knowledge base data sources are returned if their metadata attributes fulfill all the filter conditions inside this list.
   *
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
   * Knowledge base data sources are returned if their metadata attributes fulfill at least one of the filter conditions inside this list.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
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
}

/**
 * Configurations for how to perform the search query and return results. For more information, see [Query configurations](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html).
 *
 * This data type is used in the following API operations:
 *
 * - [Retrieve request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax) – in the `vectorSearchConfiguration` field
 * - [RetrieveAndGenerate request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax) – in the `vectorSearchConfiguration` field
 *
 * @public
 */
export interface KnowledgeBaseVectorSearchConfiguration {
  /**
   * The number of source chunks to retrieve.
   *
   * @public
   */
  numberOfResults?: number | undefined;

  /**
   * By default, Amazon Bedrock decides a search strategy for you. If you're using an Amazon OpenSearch Serverless vector store that contains a filterable text field, you can specify whether to query the knowledge base with a `HYBRID` search using both vector embeddings and raw text, or `SEMANTIC` search using only vector embeddings. For other vector store configurations, only `SEMANTIC` search is available. For more information, see [Test a knowledge base](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-test.html).
   *
   * @public
   */
  overrideSearchType?: SearchType | undefined;

  /**
   * Specifies the filters to use on the metadata in the knowledge base data sources before returning results. For more information, see [Query configurations](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html).
   *
   * @public
   */
  filter?: RetrievalFilter | undefined;

  /**
   * Contains configurations for reranking the retrieved results. For more information, see [Improve the relevance of query responses with a reranker model](https://docs.aws.amazon.com/bedrock/latest/userguide/rerank.html).
   *
   * @public
   */
  rerankingConfiguration?: VectorSearchRerankingConfiguration | undefined;

  /**
   * Settings for implicit filtering.
   *
   * @public
   */
  implicitFilterConfiguration?: ImplicitFilterConfiguration | undefined;
}

/**
 * Configuration for managed search in a knowledge base. Managed search automatically determines the best search strategy based on your data store configuration.
 *
 * @public
 */
export interface ManagedSearchConfiguration {
  /**
   * The number of results to retrieve.
   *
   * @public
   */
  numberOfResults?: number | undefined;

  /**
   * Filters the metadata of the retrieved results so that Amazon Bedrock returns only results that match the filter.
   *
   * @public
   */
  filter?: RetrievalFilter | undefined;

  /**
   * The type of reranking model to use when reranking results retrieved from the managed search. Use `CUSTOM` to specify a model, `MANAGED` to use the service default, or `NONE` to disable reranking.
   *
   * @public
   */
  rerankingModelType?: RerankingModelType | undefined;

  /**
   * Contains configurations for reranking the results retrieved from the managed search.
   *
   * @public
   */
  rerankingConfiguration?: ManagedSearchRerankingConfiguration | undefined;
}

/**
 * Overrides for retrieval behavior.
 *
 * @public
 */
export interface RetrievalOverrides {
  /**
   * A filter to apply to the retrieval results.
   *
   * @public
   */
  filter?: RetrievalFilter | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  maxNumberOfResults?: number | undefined;
}

/**
 * Configuration for retrieving from a Bedrock knowledge base.
 *
 * @public
 */
export interface KnowledgeBaseRetrieverConfiguration {
  /**
   * The unique identifier of the knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Overrides for retrieval behavior such as filters and result limits.
   *
   * @public
   */
  retrievalOverrides?: RetrievalOverrides | undefined;
}

/**
 * Configuration for a retriever, specified as a union of retriever types.
 *
 * @public
 */
export type RetrieverConfiguration =
  | RetrieverConfiguration.KnowledgeBaseMember
  | RetrieverConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace RetrieverConfiguration {
  /**
   * Configuration for a knowledge base retriever.
   *
   * @public
   */
  export interface KnowledgeBaseMember {
    knowledgeBase: KnowledgeBaseRetrieverConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    knowledgeBase?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    knowledgeBase: (value: KnowledgeBaseRetrieverConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A retriever used in agentic retrieval.
 *
 * @public
 */
export interface AgenticRetriever {
  /**
   * A description of the retriever's purpose.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The configuration for this retriever.
   *
   * @public
   */
  configuration: RetrieverConfiguration | undefined;
}

/**
 * Request structure for the agentic retrieve stream operation.
 *
 * @public
 */
export interface AgenticRetrieveStreamRequest {
  /**
   * The list of messages for the agentic retrieval conversation.
   *
   * @public
   */
  messages: AgenticRetrieveMessage[] | undefined;

  /**
   * The list of retrievers to use for agentic retrieval.
   *
   * @public
   */
  retrievers: AgenticRetriever[] | undefined;

  /**
   * Configuration settings for the agentic retrieval operation.
   *
   * @public
   */
  agenticRetrieveConfiguration: AgenticRetrieveConfiguration | undefined;

  /**
   * Policy configuration for guardrails and content filtering.
   *
   * @public
   */
  policyConfiguration?: AgenticRetrievePolicyConfiguration | undefined;

  /**
   * Opaque continuation token for paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Contains information about the user making the request. This is used for access control filtering to ensure that retrieval results only include documents the user is authorized to access.
   *
   * @public
   */
  userContext?: UserContext | undefined;

  /**
   * The configuration for using an Amazon Bedrock AgentCore Memory resource with this retrieval.
   *
   * @public
   */
  memoryConfiguration?: AgenticRetrieveMemoryConfiguration | undefined;

  /**
   * A retrieval instruction to apply to this request.
   *
   * @public
   */
  retrievalInstructionConfiguration?: AgenticRetrieveInstructionConfiguration | undefined;

  /**
   * Whether to generate a response based on the retrieved results.
   *
   * @public
   */
  generateResponse?: boolean | undefined;
}

/**
 * Contains configurations for knowledge base query. For more information, see [Query configurations](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html).
 *
 * This data type is used in the following API operations:
 *
 * - [Retrieve request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax) – in the `retrievalConfiguration` field
 * - [RetrieveAndGenerate request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax) – in the `retrievalConfiguration` field
 *
 * @public
 */
export interface KnowledgeBaseRetrievalConfiguration {
  /**
   * Contains details about how the results from the vector search should be returned. For more information, see [Query configurations](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html).
   *
   * @public
   */
  vectorSearchConfiguration?: KnowledgeBaseVectorSearchConfiguration | undefined;

  /**
   * Contains configurations for managed search. For more information, see [Query configurations](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html).
   *
   * @public
   */
  managedSearchConfiguration?: ManagedSearchConfiguration | undefined;
}

/**
 * Details of the knowledge base associated withe inline agent.
 *
 * @public
 */
export interface KnowledgeBase {
  /**
   * The unique identifier for a knowledge base associated with the inline agent.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The description of the knowledge base associated with the inline agent.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The configurations to apply to the knowledge base during query. For more information, see [Query configurations](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html).
   *
   * @public
   */
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration | undefined;
}

/**
 * Configurations to apply to a knowledge base attached to the agent during query. For more information, see [Knowledge base retrieval configurations](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html#session-state-kb).
 *
 * @public
 */
export interface KnowledgeBaseConfiguration {
  /**
   * The unique identifier for a knowledge base attached to the agent.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The configurations to apply to the knowledge base during query. For more information, see [Query configurations](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html).
   *
   * @public
   */
  retrievalConfiguration: KnowledgeBaseRetrievalConfiguration | undefined;
}

/**
 * Contains details about the resource being queried.
 *
 * This data type is used in the following API operations:
 *
 * - [Retrieve request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax) – in the `knowledgeBaseConfiguration` field
 * - [RetrieveAndGenerate request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax) – in the `knowledgeBaseConfiguration` field
 *
 * @public
 */
export interface KnowledgeBaseRetrieveAndGenerateConfiguration {
  /**
   * The unique identifier of the knowledge base that is queried.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The ARN of the foundation model or [inference profile](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html) used to generate a response.
   *
   * @public
   */
  modelArn: string | undefined;

  /**
   * Contains configurations for how to retrieve and return the knowledge base query.
   *
   * @public
   */
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration | undefined;

  /**
   * Contains configurations for response generation based on the knowledge base query results.
   *
   * @public
   */
  generationConfiguration?: GenerationConfiguration | undefined;

  /**
   * Settings for how the model processes the prompt prior to retrieval and generation.
   *
   * @public
   */
  orchestrationConfiguration?: OrchestrationConfiguration | undefined;
}

/**
 * @public
 */
export interface RetrieveRequest {
  /**
   * The unique identifier of the knowledge base to query.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * Contains the query to send the knowledge base.
   *
   * @public
   */
  retrievalQuery: KnowledgeBaseQuery | undefined;

  /**
   * Contains configurations for the knowledge base query and retrieval process. For more information, see [Query configurations](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html).
   *
   * @public
   */
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration | undefined;

  /**
   * Guardrail settings.
   *
   * @public
   */
  guardrailConfiguration?: GuardrailConfiguration | undefined;

  /**
   * If there are more results than can fit in the response, the response returns a `nextToken`. Use this token in the `nextToken` field of another request to retrieve the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Contains information about the user making the request. This is used for access control filtering to ensure that retrieval results only include documents the user is authorized to access.
   *
   * @public
   */
  userContext?: UserContext | undefined;
}

/**
 * Contains details about the resource being queried.
 *
 * This data type is used in the following API operations:
 *
 * - [RetrieveAndGenerate request](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax) – in the `retrieveAndGenerateConfiguration` field
 *
 * @public
 */
export interface RetrieveAndGenerateConfiguration {
  /**
   * The type of resource that contains your data for retrieving information and generating responses.
   *
   * > **Note:** If you choose to use `EXTERNAL_SOURCES`, then currently only Anthropic Claude 3 Sonnet models for knowledge bases are supported.
   *
   * @public
   */
  type: RetrieveAndGenerateType | undefined;

  /**
   * Contains details about the knowledge base for retrieving information and generating responses.
   *
   * @public
   */
  knowledgeBaseConfiguration?: KnowledgeBaseRetrieveAndGenerateConfiguration | undefined;

  /**
   * The configuration for the external source wrapper object in the `retrieveAndGenerate` function.
   *
   * @public
   */
  externalSourcesConfiguration?: ExternalSourcesRetrieveAndGenerateConfiguration | undefined;
}

/**
 * List of inline collaborators.
 *
 * @public
 */
export interface Collaborator {
  /**
   * The Amazon Resource Name (ARN) of the AWS KMS key that encrypts the inline collaborator.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * The foundation model used by the inline collaborator agent.
   *
   * @public
   */
  foundationModel: string | undefined;

  /**
   * Instruction that tell the inline collaborator agent what it should do and how it should interact with users.
   *
   * @public
   */
  instruction: string | undefined;

  /**
   * The number of seconds for which the Amazon Bedrock keeps information about the user's conversation with the inline collaborator agent.
   *
   * A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Bedrock deletes any data provided before the timeout.
   *
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * List of action groups with each action group defining tasks the inline collaborator agent needs to carry out.
   *
   * @public
   */
  actionGroups?: AgentActionGroup[] | undefined;

  /**
   * Knowledge base associated with the inline collaborator agent.
   *
   * @public
   */
  knowledgeBases?: KnowledgeBase[] | undefined;

  /**
   * Details of the guardwrail associated with the inline collaborator.
   *
   * @public
   */
  guardrailConfiguration?: GuardrailConfigurationWithArn | undefined;

  /**
   * Contains configurations to override prompt templates in different parts of an inline collaborator sequence. For more information, see [Advanced prompts](https://docs.aws.amazon.com/bedrock/latest/userguide/advanced-prompts.html).
   *
   * @public
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration | undefined;

  /**
   * Defines how the inline supervisor agent handles information across multiple collaborator agents to coordinate a final response.
   *
   * @public
   */
  agentCollaboration?: AgentCollaboration | undefined;

  /**
   * Settings of the collaborator agent.
   *
   * @public
   */
  collaboratorConfigurations?: CollaboratorConfiguration[] | undefined;

  /**
   * Name of the inline collaborator agent which must be the same name as specified for `collaboratorName`.
   *
   * @public
   */
  agentName?: string | undefined;
}

/**
 * @public
 */
export interface RetrieveAndGenerateRequest {
  /**
   * The unique identifier of the session. When you first make a `RetrieveAndGenerate` request, Amazon Bedrock automatically generates this value. You must reuse this value for all subsequent requests in the same conversational session. This value allows Amazon Bedrock to maintain context and knowledge from previous interactions. You can't explicitly set the `sessionId` yourself.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * Contains the query to be made to the knowledge base.
   *
   * @public
   */
  input: RetrieveAndGenerateInput | undefined;

  /**
   * Contains configurations for the knowledge base query and retrieval process. For more information, see [Query configurations](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html).
   *
   * @public
   */
  retrieveAndGenerateConfiguration?: RetrieveAndGenerateConfiguration | undefined;

  /**
   * Contains details about the session with the knowledge base.
   *
   * @public
   */
  sessionConfiguration?: RetrieveAndGenerateSessionConfiguration | undefined;

  /**
   * Contains information about the user making the request. This is used for access control filtering to ensure that retrieval results only include documents the user is authorized to access.
   *
   * @public
   */
  userContext?: UserContext | undefined;
}

/**
 * @public
 */
export interface RetrieveAndGenerateStreamRequest {
  /**
   * The unique identifier of the session. When you first make a `RetrieveAndGenerate` request, Amazon Bedrock automatically generates this value. You must reuse this value for all subsequent requests in the same conversational session. This value allows Amazon Bedrock to maintain context and knowledge from previous interactions. You can't explicitly set the `sessionId` yourself.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * Contains the query to be made to the knowledge base.
   *
   * @public
   */
  input: RetrieveAndGenerateInput | undefined;

  /**
   * Contains configurations for the knowledge base query and retrieval process. For more information, see [Query configurations](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html).
   *
   * @public
   */
  retrieveAndGenerateConfiguration?: RetrieveAndGenerateConfiguration | undefined;

  /**
   * Contains details about the session with the knowledge base.
   *
   * @public
   */
  sessionConfiguration?: RetrieveAndGenerateSessionConfiguration | undefined;

  /**
   * Contains information about the user making the request. This is used for access control filtering to ensure that retrieval results only include documents the user is authorized to access.
   *
   * @public
   */
  userContext?: UserContext | undefined;
}

/**
 * Contains parameters that specify various attributes that persist across a session or prompt. You can define session state attributes as key-value pairs when writing a [Lambda function](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-lambda.html) for an action group or pass them when making an [InvokeAgent](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html) request. Use session state attributes to control and provide conversational context for your agent and to help customize your agent's behavior. For more information, see [Control session context](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html).
 *
 * @public
 */
export interface SessionState {
  /**
   * Contains attributes that persist across a session and the values of those attributes. If `sessionAttributes` are passed to a supervisor agent in [multi-agent collaboration](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-multi-agent-collaboration.html), it will be forwarded to all agent collaborators.
   *
   * @public
   */
  sessionAttributes?: Record<string, string> | undefined;

  /**
   * Contains attributes that persist across a prompt and the values of those attributes.
   *
   * - In orchestration prompt template, these attributes replace the $prompt_session_attributes$ placeholder variable. For more information, see [Prompt template placeholder variables](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-placeholders.html).
   * - In [multi-agent collaboration](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-multi-agent-collaboration.html), the `promptSessionAttributes` will only be used by supervisor agent when $prompt_session_attributes$ is present in prompt template.
   *
   * @public
   */
  promptSessionAttributes?: Record<string, string> | undefined;

  /**
   * Contains information about the results from the action group invocation. For more information, see [Return control to the agent developer](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-returncontrol.html) and [Control session context](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html).
   *
   * > **Note:** If you include this field, the `inputText` field will be ignored.
   *
   * @public
   */
  returnControlInvocationResults?: InvocationResultMember[] | undefined;

  /**
   * The identifier of the invocation of an action. This value must match the `invocationId` returned in the `InvokeAgent` response for the action whose results are provided in the `returnControlInvocationResults` field. For more information, see [Return control to the agent developer](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-returncontrol.html) and [Control session context](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html).
   *
   * @public
   */
  invocationId?: string | undefined;

  /**
   * Contains information about the files used by code interpreter.
   *
   * @public
   */
  files?: InputFile[] | undefined;

  /**
   * An array of configurations, each of which applies to a knowledge base attached to the agent.
   *
   * @public
   */
  knowledgeBaseConfigurations?: KnowledgeBaseConfiguration[] | undefined;

  /**
   * The state's conversation history.
   *
   * @public
   */
  conversationHistory?: ConversationHistory | undefined;
}

/**
 * @public
 */
export interface InvokeAgentRequest {
  /**
   * Contains parameters that specify various attributes of the session. For more information, see [Control session context](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html).
   *
   * > **Note:** If you include `returnControlInvocationResults` in the `sessionState` field, the `inputText` field will be ignored.
   *
   * @public
   */
  sessionState?: SessionState | undefined;

  /**
   * The unique identifier of the agent to use.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * The alias of the agent to use.
   *
   * @public
   */
  agentAliasId: string | undefined;

  /**
   * The unique identifier of the session. Use the same value across requests to continue the same conversation.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * Specifies whether to end the session with the agent or not.
   *
   * @public
   */
  endSession?: boolean | undefined;

  /**
   * Specifies whether to turn on the trace or not to track the agent's reasoning process. For more information, see [Trace enablement](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-events).
   *
   * @public
   */
  enableTrace?: boolean | undefined;

  /**
   * The prompt text to send the agent.
   *
   * > **Note:** If you include `returnControlInvocationResults` in the `sessionState` field, the `inputText` field will be ignored.
   *
   * @public
   */
  inputText?: string | undefined;

  /**
   * The unique identifier of the agent memory.
   *
   * @public
   */
  memoryId?: string | undefined;

  /**
   * Model performance settings for the request.
   *
   * @public
   */
  bedrockModelConfigurations?: BedrockModelConfigurations | undefined;

  /**
   * Specifies the configurations for streaming.
   *
   * > **Note:** To use agent streaming, you need permissions to perform the `bedrock:InvokeModelWithResponseStream` action.
   *
   * @public
   */
  streamingConfigurations?: StreamingConfigurations | undefined;

  /**
   * Specifies parameters that control how the service populates the agent prompt for an `InvokeAgent` request. You can control which aspects of previous invocations in the same agent session the service uses to populate the agent prompt. This gives you more granular control over the contextual history that is used to process the current request.
   *
   * @public
   */
  promptCreationConfigurations?: PromptCreationConfigurations | undefined;

  /**
   * The ARN of the resource making the request.
   *
   * @public
   */
  sourceArn?: string | undefined;
}

/**
 * @public
 */
export interface InvokeInlineAgentRequest {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services KMS key to use to encrypt your inline agent.
   *
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * The [model identifier (ID)](https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#model-ids-arns) of the model to use for orchestration by the inline agent. For example, `meta.llama3-1-70b-instruct-v1:0`.
   *
   * @public
   */
  foundationModel: string | undefined;

  /**
   * The instructions that tell the inline agent what it should do and how it should interact with users.
   *
   * @public
   */
  instruction: string | undefined;

  /**
   * The number of seconds for which the inline agent should maintain session information. After this time expires, the subsequent `InvokeInlineAgent` request begins a new session.
   *
   * A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and the data provided before the timeout is deleted.
   *
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * A list of action groups with each action group defining the action the inline agent needs to carry out.
   *
   * @public
   */
  actionGroups?: AgentActionGroup[] | undefined;

  /**
   * Contains information of the knowledge bases to associate with.
   *
   * @public
   */
  knowledgeBases?: KnowledgeBase[] | undefined;

  /**
   * The [guardrails](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html) to assign to the inline agent.
   *
   * @public
   */
  guardrailConfiguration?: GuardrailConfigurationWithArn | undefined;

  /**
   * Configurations for advanced prompts used to override the default prompts to enhance the accuracy of the inline agent.
   *
   * @public
   */
  promptOverrideConfiguration?: PromptOverrideConfiguration | undefined;

  /**
   * Defines how the inline collaborator agent handles information across multiple collaborator agents to coordinate a final response. The inline collaborator agent can also be the supervisor.
   *
   * @public
   */
  agentCollaboration?: AgentCollaboration | undefined;

  /**
   * Settings for an inline agent collaborator called with [InvokeInlineAgent](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeInlineAgent.html).
   *
   * @public
   */
  collaboratorConfigurations?: CollaboratorConfiguration[] | undefined;

  /**
   * The name for the agent.
   *
   * @public
   */
  agentName?: string | undefined;

  /**
   * The unique identifier of the session. Use the same value across requests to continue the same conversation.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * Specifies whether to end the session with the inline agent or not.
   *
   * @public
   */
  endSession?: boolean | undefined;

  /**
   * Specifies whether to turn on the trace or not to track the agent's reasoning process. For more information, see [Using trace](https://docs.aws.amazon.com/bedrock/latest/userguide/trace-events.html).
   *
   * @public
   */
  enableTrace?: boolean | undefined;

  /**
   * The prompt text to send to the agent.
   *
   * > **Note:** If you include `returnControlInvocationResults` in the `sessionState` field, the `inputText` field will be ignored.
   *
   * @public
   */
  inputText?: string | undefined;

  /**
   * Specifies the configurations for streaming.
   *
   * > **Note:** To use agent streaming, you need permissions to perform the `bedrock:InvokeModelWithResponseStream` action.
   *
   * @public
   */
  streamingConfigurations?: StreamingConfigurations | undefined;

  /**
   * Specifies parameters that control how the service populates the agent prompt for an `InvokeInlineAgent` request. You can control which aspects of previous invocations in the same agent session the service uses to populate the agent prompt. This gives you more granular control over the contextual history that is used to process the current request.
   *
   * @public
   */
  promptCreationConfigurations?: PromptCreationConfigurations | undefined;

  /**
   * Parameters that specify the various attributes of a sessions. You can include attributes for the session or prompt or, if you configured an action group to return control, results from invocation of the action group. For more information, see [Control session context](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html).
   *
   * > **Note:** If you include `returnControlInvocationResults` in the `sessionState` field, the `inputText` field will be ignored.
   *
   * @public
   */
  inlineSessionState?: InlineSessionState | undefined;

  /**
   * List of collaborator inline agents.
   *
   * @public
   */
  collaborators?: Collaborator[] | undefined;

  /**
   * Model settings for the request.
   *
   * @public
   */
  bedrockModelConfigurations?: InlineBedrockModelConfigurations | undefined;

  /**
   * Specifies the type of orchestration strategy for the agent. This is set to DEFAULT orchestration type, by default.
   *
   * @public
   */
  orchestrationType?: OrchestrationType | undefined;

  /**
   * Contains details of the custom orchestration configured for the agent.
   *
   * @public
   */
  customOrchestration?: CustomOrchestration | undefined;
}
