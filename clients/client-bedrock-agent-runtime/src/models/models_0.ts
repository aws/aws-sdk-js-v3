// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { BedrockAgentRuntimeServiceException as __BaseException } from "./BedrockAgentRuntimeServiceException";

/**
 * @public
 * This exception is thrown when a request is denied per access permissions
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
 * parameters included in action group invocation
 */
export interface Parameter {
  /**
   * @public
   * Name of parameter
   */
  name?: string;

  /**
   * @public
   * Type of parameter
   */
  type?: string;

  /**
   * @public
   * Value of parameter
   */
  value?: string;
}

/**
 * @public
 * Request Body Content Map
 */
export interface RequestBody {
  /**
   * @public
   * Content type paramter map
   */
  content?: Record<string, Parameter[]>;
}

/**
 * @public
 * input to lambda used in action group
 */
export interface ActionGroupInvocationInput {
  /**
   * @public
   * Agent Trace Action Group Name
   */
  actionGroupName?: string;

  /**
   * @public
   * Agent Trace Action Group Action verb
   */
  verb?: string;

  /**
   * @public
   * Agent Trace Action Group API path
   */
  apiPath?: string;

  /**
   * @public
   * list of parameters included in action group invocation
   */
  parameters?: Parameter[];

  /**
   * @public
   * Request Body Content Map
   */
  requestBody?: RequestBody;
}

/**
 * @public
 * output from lambda used in action group
 */
export interface ActionGroupInvocationOutput {
  /**
   * @public
   * Agent Trace Action Group Lambda Invocation Output String
   */
  text?: string;
}

/**
 * @public
 * This exception is thrown when a request fails due to dependency like Lambda, Bedrock, STS resource
 */
export class BadGatewayException extends __BaseException {
  readonly name: "BadGatewayException" = "BadGatewayException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * Non Blank String
   */
  resourceName?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadGatewayException, __BaseException>) {
    super({
      name: "BadGatewayException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, BadGatewayException.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * @public
 * This exception is thrown when there is a conflict performing an operation
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
 * This exception is thrown when a request fails due to dependency like Lambda, Bedrock, STS resource due to a customer fault (i.e. bad configuration)
 */
export class DependencyFailedException extends __BaseException {
  readonly name: "DependencyFailedException" = "DependencyFailedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * Non Blank String
   */
  resourceName?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyFailedException, __BaseException>) {
    super({
      name: "DependencyFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyFailedException.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * @public
 * This exception is thrown if there was an unexpected error during processing of request
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
 * @public
 * Session state provided
 */
export interface SessionState {
  /**
   * @public
   * Session Attributes
   */
  sessionAttributes?: Record<string, string>;

  /**
   * @public
   * Prompt Session Attributes
   */
  promptSessionAttributes?: Record<string, string>;
}

/**
 * @public
 * InvokeAgent Request
 */
export interface InvokeAgentRequest {
  /**
   * @public
   * Session state passed by customer. Base64 encoded json string representation of SessionState.
   */
  sessionState?: SessionState;

  /**
   * @public
   * Identifier for Agent
   */
  agentId: string | undefined;

  /**
   * @public
   * Identifier for Agent Alias
   */
  agentAliasId: string | undefined;

  /**
   * @public
   * Identifier used for the current session
   */
  sessionId: string | undefined;

  /**
   * @public
   * End current session
   */
  endSession?: boolean;

  /**
   * @public
   * Enable agent trace events for improved debugging
   */
  enableTrace?: boolean;

  /**
   * @public
   * Input data in the format specified in the Content-Type request header.
   */
  inputText: string | undefined;
}

/**
 * @public
 * Span of text
 */
export interface Span {
  /**
   * @public
   * Start of span
   */
  start?: number;

  /**
   * @public
   * End of span
   */
  end?: number;
}

/**
 * @public
 * Text response part
 */
export interface TextResponsePart {
  /**
   * @public
   * Response part in text
   */
  text?: string;

  /**
   * @public
   * Span of text
   */
  span?: Span;
}

/**
 * @public
 * Generate response part
 */
export interface GeneratedResponsePart {
  /**
   * @public
   * Text response part
   */
  textResponsePart?: TextResponsePart;
}

/**
 * @public
 * Content of a retrieval result.
 */
export interface RetrievalResultContent {
  /**
   * @public
   * Content of a retrieval result in text
   */
  text: string | undefined;
}

/**
 * @public
 * The S3 location of a retrieval result.
 */
export interface RetrievalResultS3Location {
  /**
   * @public
   * URI of S3 location
   */
  uri?: string;
}

/**
 * @public
 * @enum
 */
export const RetrievalResultLocationType = {
  S3: "S3",
} as const;

/**
 * @public
 */
export type RetrievalResultLocationType =
  (typeof RetrievalResultLocationType)[keyof typeof RetrievalResultLocationType];

/**
 * @public
 * The source location of a retrieval result.
 */
export interface RetrievalResultLocation {
  /**
   * @public
   * The location type of a retrieval result.
   */
  type: RetrievalResultLocationType | undefined;

  /**
   * @public
   * The S3 location of a retrieval result.
   */
  s3Location?: RetrievalResultS3Location;
}

/**
 * @public
 * Retrieved reference
 */
export interface RetrievedReference {
  /**
   * @public
   * Content of a retrieval result.
   */
  content?: RetrievalResultContent;

  /**
   * @public
   * The source location of a retrieval result.
   */
  location?: RetrievalResultLocation;
}

/**
 * @public
 * Citation associated with the agent response
 */
export interface Citation {
  /**
   * @public
   * Generate response part
   */
  generatedResponsePart?: GeneratedResponsePart;

  /**
   * @public
   * list of retrieved references
   */
  retrievedReferences?: RetrievedReference[];
}

/**
 * @public
 * Citations associated with final agent response
 */
export interface Attribution {
  /**
   * @public
   * List of citations
   */
  citations?: Citation[];
}

/**
 * @public
 * Base 64 endoded byte response
 */
export interface PayloadPart {
  /**
   * @public
   * PartBody of the payload in bytes
   */
  bytes?: Uint8Array;

  /**
   * @public
   * Citations associated with final agent response
   */
  attribution?: Attribution;
}

/**
 * @public
 * This exception is thrown when a resource referenced by the operation does not exist
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
 * This exception is thrown when a request is made beyond the service quota
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
 * This exception is thrown when the number of requests exceeds the limit
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
 * Trace Part which is emitted when agent trace could not be generated
 */
export interface FailureTrace {
  /**
   * @public
   * Identifier for trace
   */
  traceId?: string;

  /**
   * @public
   * Agent Trace Failed Reason String
   */
  failureReason?: string;
}

/**
 * @public
 * @enum
 */
export const InvocationType = {
  ACTION_GROUP: "ACTION_GROUP",
  FINISH: "FINISH",
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
} as const;

/**
 * @public
 */
export type InvocationType = (typeof InvocationType)[keyof typeof InvocationType];

/**
 * @public
 * Input to lambda used in action group
 */
export interface KnowledgeBaseLookupInput {
  /**
   * @public
   * Agent Trace Action Group Lambda Invocation Output String
   */
  text?: string;

  /**
   * @public
   * Agent Trace Action Group Knowledge Base Id
   */
  knowledgeBaseId?: string;
}

/**
 * @public
 * Trace Part which contains input details for action group or knowledge base
 */
export interface InvocationInput {
  /**
   * @public
   * Identifier for trace
   */
  traceId?: string;

  /**
   * @public
   * types of invocations
   */
  invocationType?: InvocationType;

  /**
   * @public
   * input to lambda used in action group
   */
  actionGroupInvocationInput?: ActionGroupInvocationInput;

  /**
   * @public
   * Input to lambda used in action group
   */
  knowledgeBaseLookupInput?: KnowledgeBaseLookupInput;
}

/**
 * @public
 * Configurations for controlling the inference response of an InvokeAgent API call
 */
export interface InferenceConfiguration {
  /**
   * @public
   * Controls randomness, higher values increase diversity
   */
  temperature?: number;

  /**
   * @public
   * Cumulative probability cutoff for token selection
   */
  topP?: number;

  /**
   * @public
   * Sample from the k most likely next tokens
   */
  topK?: number;

  /**
   * @public
   * Maximum length of output
   */
  maximumLength?: number;

  /**
   * @public
   * List of stop sequences
   */
  stopSequences?: string[];
}

/**
 * @public
 * @enum
 */
export const CreationMode = {
  DEFAULT: "DEFAULT",
  OVERRIDDEN: "OVERRIDDEN",
} as const;

/**
 * @public
 */
export type CreationMode = (typeof CreationMode)[keyof typeof CreationMode];

/**
 * @public
 * @enum
 */
export const PromptType = {
  KNOWLEDGE_BASE_RESPONSE_GENERATION: "KNOWLEDGE_BASE_RESPONSE_GENERATION",
  ORCHESTRATION: "ORCHESTRATION",
  POST_PROCESSING: "POST_PROCESSING",
  PRE_PROCESSING: "PRE_PROCESSING",
} as const;

/**
 * @public
 */
export type PromptType = (typeof PromptType)[keyof typeof PromptType];

/**
 * @public
 * Trace Part which contains information used to call Invoke Model
 */
export interface ModelInvocationInput {
  /**
   * @public
   * Identifier for trace
   */
  traceId?: string;

  /**
   * @public
   * Prompt Message
   */
  text?: string;

  /**
   * @public
   * types of prompts
   */
  type?: PromptType;

  /**
   * @public
   * Configurations for controlling the inference response of an InvokeAgent API call
   */
  inferenceConfiguration?: InferenceConfiguration;

  /**
   * @public
   * ARN of a Lambda.
   */
  overrideLambda?: string;

  /**
   * @public
   * indicates if agent uses default prompt or overriden prompt
   */
  promptCreationMode?: CreationMode;

  /**
   * @public
   * indicates if agent uses default prompt or overriden prompt
   */
  parserMode?: CreationMode;
}

/**
 * @public
 * Agent finish output
 */
export interface FinalResponse {
  /**
   * @public
   * Agent Trace Action Group Lambda Invocation Output String
   */
  text?: string;
}

/**
 * @public
 * Input to lambda used in action group
 */
export interface KnowledgeBaseLookupOutput {
  /**
   * @public
   * list of retrieved references
   */
  retrievedReferences?: RetrievedReference[];
}

/**
 * @public
 * @enum
 */
export const Source = {
  ACTION_GROUP: "ACTION_GROUP",
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
  PARSER: "PARSER",
} as const;

/**
 * @public
 */
export type Source = (typeof Source)[keyof typeof Source];

/**
 * @public
 * Observation information if there were reprompts
 */
export interface RepromptResponse {
  /**
   * @public
   * Reprompt response text
   */
  text?: string;

  /**
   * @public
   * Parsing error source
   */
  source?: Source;
}

/**
 * @public
 * @enum
 */
export const Type = {
  ACTION_GROUP: "ACTION_GROUP",
  ASK_USER: "ASK_USER",
  FINISH: "FINISH",
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
  REPROMPT: "REPROMPT",
} as const;

/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * Trace Part which contains output details for action group or knowledge base or final response
 */
export interface Observation {
  /**
   * @public
   * Identifier for trace
   */
  traceId?: string;

  /**
   * @public
   * types of observations
   */
  type?: Type;

  /**
   * @public
   * output from lambda used in action group
   */
  actionGroupInvocationOutput?: ActionGroupInvocationOutput;

  /**
   * @public
   * Input to lambda used in action group
   */
  knowledgeBaseLookupOutput?: KnowledgeBaseLookupOutput;

  /**
   * @public
   * Agent finish output
   */
  finalResponse?: FinalResponse;

  /**
   * @public
   * Observation information if there were reprompts
   */
  repromptResponse?: RepromptResponse;
}

/**
 * @public
 * Trace Part which contains information related to reasoning
 */
export interface Rationale {
  /**
   * @public
   * Identifier for trace
   */
  traceId?: string;

  /**
   * @public
   * Agent Trace Rationale String
   */
  text?: string;
}

/**
 * @public
 * Trace contains intermidate response during orchestration
 */
export type OrchestrationTrace =
  | OrchestrationTrace.InvocationInputMember
  | OrchestrationTrace.ModelInvocationInputMember
  | OrchestrationTrace.ObservationMember
  | OrchestrationTrace.RationaleMember
  | OrchestrationTrace.$UnknownMember;

/**
 * @public
 */
export namespace OrchestrationTrace {
  /**
   * @public
   * Trace Part which contains information related to reasoning
   */
  export interface RationaleMember {
    rationale: Rationale;
    invocationInput?: never;
    observation?: never;
    modelInvocationInput?: never;
    $unknown?: never;
  }

  /**
   * @public
   * Trace Part which contains input details for action group or knowledge base
   */
  export interface InvocationInputMember {
    rationale?: never;
    invocationInput: InvocationInput;
    observation?: never;
    modelInvocationInput?: never;
    $unknown?: never;
  }

  /**
   * @public
   * Trace Part which contains output details for action group or knowledge base or final response
   */
  export interface ObservationMember {
    rationale?: never;
    invocationInput?: never;
    observation: Observation;
    modelInvocationInput?: never;
    $unknown?: never;
  }

  /**
   * @public
   * Trace Part which contains information used to call Invoke Model
   */
  export interface ModelInvocationInputMember {
    rationale?: never;
    invocationInput?: never;
    observation?: never;
    modelInvocationInput: ModelInvocationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    rationale?: never;
    invocationInput?: never;
    observation?: never;
    modelInvocationInput?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    rationale: (value: Rationale) => T;
    invocationInput: (value: InvocationInput) => T;
    observation: (value: Observation) => T;
    modelInvocationInput: (value: ModelInvocationInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: OrchestrationTrace, visitor: Visitor<T>): T => {
    if (value.rationale !== undefined) return visitor.rationale(value.rationale);
    if (value.invocationInput !== undefined) return visitor.invocationInput(value.invocationInput);
    if (value.observation !== undefined) return visitor.observation(value.observation);
    if (value.modelInvocationInput !== undefined) return visitor.modelInvocationInput(value.modelInvocationInput);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * Trace Part which contains information if preprocessing was successful
 */
export interface PostProcessingParsedResponse {
  /**
   * @public
   * Agent Trace Output String
   */
  text?: string;
}

/**
 * @public
 * Trace Part which contains information related to postprocessing
 */
export interface PostProcessingModelInvocationOutput {
  /**
   * @public
   * Identifier for trace
   */
  traceId?: string;

  /**
   * @public
   * Trace Part which contains information if preprocessing was successful
   */
  parsedResponse?: PostProcessingParsedResponse;
}

/**
 * @public
 * Trace Part which contains information related to post processing step
 */
export type PostProcessingTrace =
  | PostProcessingTrace.ModelInvocationInputMember
  | PostProcessingTrace.ModelInvocationOutputMember
  | PostProcessingTrace.$UnknownMember;

/**
 * @public
 */
export namespace PostProcessingTrace {
  /**
   * @public
   * Trace Part which contains information used to call Invoke Model
   */
  export interface ModelInvocationInputMember {
    modelInvocationInput: ModelInvocationInput;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * @public
   * Trace Part which contains information related to postprocessing
   */
  export interface ModelInvocationOutputMember {
    modelInvocationInput?: never;
    modelInvocationOutput: PostProcessingModelInvocationOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    modelInvocationInput?: never;
    modelInvocationOutput?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    modelInvocationInput: (value: ModelInvocationInput) => T;
    modelInvocationOutput: (value: PostProcessingModelInvocationOutput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PostProcessingTrace, visitor: Visitor<T>): T => {
    if (value.modelInvocationInput !== undefined) return visitor.modelInvocationInput(value.modelInvocationInput);
    if (value.modelInvocationOutput !== undefined) return visitor.modelInvocationOutput(value.modelInvocationOutput);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * Trace Part which contains information if preprocessing was successful
 */
export interface PreProcessingParsedResponse {
  /**
   * @public
   * Agent Trace Rationale String
   */
  rationale?: string;

  /**
   * @public
   * Boolean value
   */
  isValid?: boolean;
}

/**
 * @public
 * Trace Part which contains information related to preprocessing
 */
export interface PreProcessingModelInvocationOutput {
  /**
   * @public
   * Identifier for trace
   */
  traceId?: string;

  /**
   * @public
   * Trace Part which contains information if preprocessing was successful
   */
  parsedResponse?: PreProcessingParsedResponse;
}

/**
 * @public
 * Trace Part which contains information related to preprocessing step
 */
export type PreProcessingTrace =
  | PreProcessingTrace.ModelInvocationInputMember
  | PreProcessingTrace.ModelInvocationOutputMember
  | PreProcessingTrace.$UnknownMember;

/**
 * @public
 */
export namespace PreProcessingTrace {
  /**
   * @public
   * Trace Part which contains information used to call Invoke Model
   */
  export interface ModelInvocationInputMember {
    modelInvocationInput: ModelInvocationInput;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * @public
   * Trace Part which contains information related to preprocessing
   */
  export interface ModelInvocationOutputMember {
    modelInvocationInput?: never;
    modelInvocationOutput: PreProcessingModelInvocationOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    modelInvocationInput?: never;
    modelInvocationOutput?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    modelInvocationInput: (value: ModelInvocationInput) => T;
    modelInvocationOutput: (value: PreProcessingModelInvocationOutput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PreProcessingTrace, visitor: Visitor<T>): T => {
    if (value.modelInvocationInput !== undefined) return visitor.modelInvocationInput(value.modelInvocationInput);
    if (value.modelInvocationOutput !== undefined) return visitor.modelInvocationOutput(value.modelInvocationOutput);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * Trace contains intermidate response for customer
 */
export type Trace =
  | Trace.FailureTraceMember
  | Trace.OrchestrationTraceMember
  | Trace.PostProcessingTraceMember
  | Trace.PreProcessingTraceMember
  | Trace.$UnknownMember;

/**
 * @public
 */
export namespace Trace {
  /**
   * @public
   * Trace Part which contains information related to preprocessing step
   */
  export interface PreProcessingTraceMember {
    preProcessingTrace: PreProcessingTrace;
    orchestrationTrace?: never;
    postProcessingTrace?: never;
    failureTrace?: never;
    $unknown?: never;
  }

  /**
   * @public
   * Trace contains intermidate response during orchestration
   */
  export interface OrchestrationTraceMember {
    preProcessingTrace?: never;
    orchestrationTrace: OrchestrationTrace;
    postProcessingTrace?: never;
    failureTrace?: never;
    $unknown?: never;
  }

  /**
   * @public
   * Trace Part which contains information related to post processing step
   */
  export interface PostProcessingTraceMember {
    preProcessingTrace?: never;
    orchestrationTrace?: never;
    postProcessingTrace: PostProcessingTrace;
    failureTrace?: never;
    $unknown?: never;
  }

  /**
   * @public
   * Trace Part which is emitted when agent trace could not be generated
   */
  export interface FailureTraceMember {
    preProcessingTrace?: never;
    orchestrationTrace?: never;
    postProcessingTrace?: never;
    failureTrace: FailureTrace;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    preProcessingTrace?: never;
    orchestrationTrace?: never;
    postProcessingTrace?: never;
    failureTrace?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    preProcessingTrace: (value: PreProcessingTrace) => T;
    orchestrationTrace: (value: OrchestrationTrace) => T;
    postProcessingTrace: (value: PostProcessingTrace) => T;
    failureTrace: (value: FailureTrace) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Trace, visitor: Visitor<T>): T => {
    if (value.preProcessingTrace !== undefined) return visitor.preProcessingTrace(value.preProcessingTrace);
    if (value.orchestrationTrace !== undefined) return visitor.orchestrationTrace(value.orchestrationTrace);
    if (value.postProcessingTrace !== undefined) return visitor.postProcessingTrace(value.postProcessingTrace);
    if (value.failureTrace !== undefined) return visitor.failureTrace(value.failureTrace);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * Trace Part which contains intermidate response for customer
 */
export interface TracePart {
  /**
   * @public
   * Identifier of the agent.
   */
  agentId?: string;

  /**
   * @public
   * Identifier of the agent alias.
   */
  agentAliasId?: string;

  /**
   * @public
   * Identifier of the session.
   */
  sessionId?: string;

  /**
   * @public
   * Trace contains intermidate response for customer
   */
  trace?: Trace;
}

/**
 * @public
 * This exception is thrown when the request's input validation fails
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
 * Response body of is a stream
 */
export type ResponseStream =
  | ResponseStream.AccessDeniedExceptionMember
  | ResponseStream.BadGatewayExceptionMember
  | ResponseStream.ChunkMember
  | ResponseStream.ConflictExceptionMember
  | ResponseStream.DependencyFailedExceptionMember
  | ResponseStream.InternalServerExceptionMember
  | ResponseStream.ResourceNotFoundExceptionMember
  | ResponseStream.ServiceQuotaExceededExceptionMember
  | ResponseStream.ThrottlingExceptionMember
  | ResponseStream.TraceMember
  | ResponseStream.ValidationExceptionMember
  | ResponseStream.$UnknownMember;

/**
 * @public
 */
export namespace ResponseStream {
  /**
   * @public
   * Base 64 endoded byte response
   */
  export interface ChunkMember {
    chunk: PayloadPart;
    trace?: never;
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
   * @public
   * Trace Part which contains intermidate response for customer
   */
  export interface TraceMember {
    chunk?: never;
    trace: TracePart;
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
   * @public
   * This exception is thrown if there was an unexpected error during processing of request
   */
  export interface InternalServerExceptionMember {
    chunk?: never;
    trace?: never;
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
   * @public
   * This exception is thrown when the request's input validation fails
   */
  export interface ValidationExceptionMember {
    chunk?: never;
    trace?: never;
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
   * @public
   * This exception is thrown when a resource referenced by the operation does not exist
   */
  export interface ResourceNotFoundExceptionMember {
    chunk?: never;
    trace?: never;
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
   * @public
   * This exception is thrown when a request is made beyond the service quota
   */
  export interface ServiceQuotaExceededExceptionMember {
    chunk?: never;
    trace?: never;
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
   * @public
   * This exception is thrown when the number of requests exceeds the limit
   */
  export interface ThrottlingExceptionMember {
    chunk?: never;
    trace?: never;
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
   * @public
   * This exception is thrown when a request is denied per access permissions
   */
  export interface AccessDeniedExceptionMember {
    chunk?: never;
    trace?: never;
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
   * @public
   * This exception is thrown when there is a conflict performing an operation
   */
  export interface ConflictExceptionMember {
    chunk?: never;
    trace?: never;
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
   * @public
   * This exception is thrown when a request fails due to dependency like Lambda, Bedrock, STS resource due to a customer fault (i.e. bad configuration)
   */
  export interface DependencyFailedExceptionMember {
    chunk?: never;
    trace?: never;
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
   * @public
   * This exception is thrown when a request fails due to dependency like Lambda, Bedrock, STS resource
   */
  export interface BadGatewayExceptionMember {
    chunk?: never;
    trace?: never;
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
    chunk?: never;
    trace?: never;
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
    chunk: (value: PayloadPart) => T;
    trace: (value: TracePart) => T;
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

  export const visit = <T>(value: ResponseStream, visitor: Visitor<T>): T => {
    if (value.chunk !== undefined) return visitor.chunk(value.chunk);
    if (value.trace !== undefined) return visitor.trace(value.trace);
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
 * InvokeAgent Response
 */
export interface InvokeAgentResponse {
  /**
   * @public
   * Inference response from the model in the format specified in the Content-Type response header.
   */
  completion: AsyncIterable<ResponseStream> | undefined;

  /**
   * @public
   * streaming response mimetype of the model
   */
  contentType: string | undefined;

  /**
   * @public
   * streaming response mimetype of the model
   */
  sessionId: string | undefined;
}

/**
 * @public
 * Customer input of the turn
 */
export interface RetrieveAndGenerateInput {
  /**
   * @public
   * Customer input of the turn in text
   */
  text: string | undefined;
}

/**
 * @public
 * Configurations for retrieval and generation for knowledge base.
 */
export interface KnowledgeBaseRetrieveAndGenerateConfiguration {
  /**
   * @public
   * Identifier of the KnowledgeBase
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Arn of a Bedrock model.
   */
  modelArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RetrieveAndGenerateType = {
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
} as const;

/**
 * @public
 */
export type RetrieveAndGenerateType = (typeof RetrieveAndGenerateType)[keyof typeof RetrieveAndGenerateType];

/**
 * @public
 * Configures the retrieval and generation for the session.
 */
export interface RetrieveAndGenerateConfiguration {
  /**
   * @public
   * The type of RetrieveAndGenerate.
   */
  type: RetrieveAndGenerateType | undefined;

  /**
   * @public
   * Configurations for retrieval and generation for knowledge base.
   */
  knowledgeBaseConfiguration?: KnowledgeBaseRetrieveAndGenerateConfiguration;
}

/**
 * @public
 * Configures common parameters of the session.
 */
export interface RetrieveAndGenerateSessionConfiguration {
  /**
   * @public
   * The KMS key arn to encrypt the customer data of the session.
   */
  kmsKeyArn: string | undefined;
}

/**
 * @public
 */
export interface RetrieveAndGenerateRequest {
  /**
   * @public
   * Identifier of the session.
   */
  sessionId?: string;

  /**
   * @public
   * Customer input of the turn
   */
  input: RetrieveAndGenerateInput | undefined;

  /**
   * @public
   * Configures the retrieval and generation for the session.
   */
  retrieveAndGenerateConfiguration?: RetrieveAndGenerateConfiguration;

  /**
   * @public
   * Configures common parameters of the session.
   */
  sessionConfiguration?: RetrieveAndGenerateSessionConfiguration;
}

/**
 * @public
 * Service response of the turn
 */
export interface RetrieveAndGenerateOutput {
  /**
   * @public
   * Service response of the turn in text
   */
  text: string | undefined;
}

/**
 * @public
 */
export interface RetrieveAndGenerateResponse {
  /**
   * @public
   * Identifier of the session.
   */
  sessionId: string | undefined;

  /**
   * @public
   * Service response of the turn
   */
  output: RetrieveAndGenerateOutput | undefined;

  /**
   * @public
   * List of citations
   */
  citations?: Citation[];
}

/**
 * @public
 * Knowledge base vector search configuration
 */
export interface KnowledgeBaseVectorSearchConfiguration {
  /**
   * @public
   * Top-K results to retrieve from knowledge base.
   */
  numberOfResults: number | undefined;
}

/**
 * @public
 * Search parameters for retrieving from knowledge base.
 */
export interface KnowledgeBaseRetrievalConfiguration {
  /**
   * @public
   * Knowledge base vector search configuration
   */
  vectorSearchConfiguration: KnowledgeBaseVectorSearchConfiguration | undefined;
}

/**
 * @public
 * Knowledge base input query.
 */
export interface KnowledgeBaseQuery {
  /**
   * @public
   * Knowledge base input query in text
   */
  text: string | undefined;
}

/**
 * @public
 */
export interface RetrieveRequest {
  /**
   * @public
   * Identifier of the KnowledgeBase
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * Knowledge base input query.
   */
  retrievalQuery: KnowledgeBaseQuery | undefined;

  /**
   * @public
   * Search parameters for retrieving from knowledge base.
   */
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration;

  /**
   * @public
   * Opaque continuation token of previous paginated response.
   */
  nextToken?: string;
}

/**
 * @public
 * Result item returned from a knowledge base retrieval.
 */
export interface KnowledgeBaseRetrievalResult {
  /**
   * @public
   * Content of a retrieval result.
   */
  content: RetrievalResultContent | undefined;

  /**
   * @public
   * The source location of a retrieval result.
   */
  location?: RetrievalResultLocation;

  /**
   * @public
   * The relevance score of a result.
   */
  score?: number;
}

/**
 * @public
 */
export interface RetrieveResponse {
  /**
   * @public
   * List of knowledge base retrieval results
   */
  retrievalResults: KnowledgeBaseRetrievalResult[] | undefined;

  /**
   * @public
   * Opaque continuation token of previous paginated response.
   */
  nextToken?: string;
}

/**
 * @internal
 */
export const ActionGroupInvocationInputFilterSensitiveLog = (obj: ActionGroupInvocationInput): any => ({
  ...obj,
  ...(obj.actionGroupName && { actionGroupName: SENSITIVE_STRING }),
  ...(obj.verb && { verb: SENSITIVE_STRING }),
  ...(obj.apiPath && { apiPath: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ActionGroupInvocationOutputFilterSensitiveLog = (obj: ActionGroupInvocationOutput): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InvokeAgentRequestFilterSensitiveLog = (obj: InvokeAgentRequest): any => ({
  ...obj,
  ...(obj.inputText && { inputText: SENSITIVE_STRING }),
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
export const FailureTraceFilterSensitiveLog = (obj: FailureTrace): any => ({
  ...obj,
  ...(obj.failureReason && { failureReason: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const KnowledgeBaseLookupInputFilterSensitiveLog = (obj: KnowledgeBaseLookupInput): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
  ...(obj.knowledgeBaseId && { knowledgeBaseId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InvocationInputFilterSensitiveLog = (obj: InvocationInput): any => ({
  ...obj,
  ...(obj.actionGroupInvocationInput && {
    actionGroupInvocationInput: ActionGroupInvocationInputFilterSensitiveLog(obj.actionGroupInvocationInput),
  }),
  ...(obj.knowledgeBaseLookupInput && {
    knowledgeBaseLookupInput: KnowledgeBaseLookupInputFilterSensitiveLog(obj.knowledgeBaseLookupInput),
  }),
});

/**
 * @internal
 */
export const ModelInvocationInputFilterSensitiveLog = (obj: ModelInvocationInput): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FinalResponseFilterSensitiveLog = (obj: FinalResponse): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RepromptResponseFilterSensitiveLog = (obj: RepromptResponse): any => ({
  ...obj,
  ...(obj.source && { source: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ObservationFilterSensitiveLog = (obj: Observation): any => ({
  ...obj,
  ...(obj.actionGroupInvocationOutput && {
    actionGroupInvocationOutput: ActionGroupInvocationOutputFilterSensitiveLog(obj.actionGroupInvocationOutput),
  }),
  ...(obj.finalResponse && { finalResponse: FinalResponseFilterSensitiveLog(obj.finalResponse) }),
  ...(obj.repromptResponse && { repromptResponse: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RationaleFilterSensitiveLog = (obj: Rationale): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OrchestrationTraceFilterSensitiveLog = (obj: OrchestrationTrace): any => {
  if (obj.rationale !== undefined) return { rationale: SENSITIVE_STRING };
  if (obj.invocationInput !== undefined) return { invocationInput: SENSITIVE_STRING };
  if (obj.observation !== undefined) return { observation: SENSITIVE_STRING };
  if (obj.modelInvocationInput !== undefined) return { modelInvocationInput: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const PostProcessingParsedResponseFilterSensitiveLog = (obj: PostProcessingParsedResponse): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PostProcessingModelInvocationOutputFilterSensitiveLog = (
  obj: PostProcessingModelInvocationOutput
): any => ({
  ...obj,
  ...(obj.parsedResponse && { parsedResponse: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PostProcessingTraceFilterSensitiveLog = (obj: PostProcessingTrace): any => {
  if (obj.modelInvocationInput !== undefined) return { modelInvocationInput: SENSITIVE_STRING };
  if (obj.modelInvocationOutput !== undefined) return { modelInvocationOutput: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const PreProcessingParsedResponseFilterSensitiveLog = (obj: PreProcessingParsedResponse): any => ({
  ...obj,
  ...(obj.rationale && { rationale: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PreProcessingModelInvocationOutputFilterSensitiveLog = (obj: PreProcessingModelInvocationOutput): any => ({
  ...obj,
  ...(obj.parsedResponse && { parsedResponse: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PreProcessingTraceFilterSensitiveLog = (obj: PreProcessingTrace): any => {
  if (obj.modelInvocationInput !== undefined) return { modelInvocationInput: SENSITIVE_STRING };
  if (obj.modelInvocationOutput !== undefined) return { modelInvocationOutput: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const TraceFilterSensitiveLog = (obj: Trace): any => {
  if (obj.preProcessingTrace !== undefined) return { preProcessingTrace: SENSITIVE_STRING };
  if (obj.orchestrationTrace !== undefined) return { orchestrationTrace: SENSITIVE_STRING };
  if (obj.postProcessingTrace !== undefined) return { postProcessingTrace: SENSITIVE_STRING };
  if (obj.failureTrace !== undefined) return { failureTrace: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const TracePartFilterSensitiveLog = (obj: TracePart): any => ({
  ...obj,
  ...(obj.trace && { trace: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ResponseStreamFilterSensitiveLog = (obj: ResponseStream): any => {
  if (obj.chunk !== undefined) return { chunk: SENSITIVE_STRING };
  if (obj.trace !== undefined) return { trace: SENSITIVE_STRING };
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
export const InvokeAgentResponseFilterSensitiveLog = (obj: InvokeAgentResponse): any => ({
  ...obj,
  ...(obj.completion && { completion: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const RetrieveAndGenerateInputFilterSensitiveLog = (obj: RetrieveAndGenerateInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetrieveAndGenerateRequestFilterSensitiveLog = (obj: RetrieveAndGenerateRequest): any => ({
  ...obj,
  ...(obj.input && { input: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RetrieveAndGenerateOutputFilterSensitiveLog = (obj: RetrieveAndGenerateOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetrieveAndGenerateResponseFilterSensitiveLog = (obj: RetrieveAndGenerateResponse): any => ({
  ...obj,
  ...(obj.output && { output: SENSITIVE_STRING }),
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
export const RetrieveRequestFilterSensitiveLog = (obj: RetrieveRequest): any => ({
  ...obj,
  ...(obj.retrievalQuery && { retrievalQuery: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RetrieveResponseFilterSensitiveLog = (obj: RetrieveResponse): any => ({
  ...obj,
  ...(obj.retrievalResults && { retrievalResults: SENSITIVE_STRING }),
});
