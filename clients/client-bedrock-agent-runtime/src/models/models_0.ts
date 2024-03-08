// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { BedrockAgentRuntimeServiceException as __BaseException } from "./BedrockAgentRuntimeServiceException";

/**
 * @public
 * <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
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
 * <p>A parameter in the Lambda input event.</p>
 */
export interface Parameter {
  /**
   * @public
   * <p>The name of the parameter.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The type of the parameter.</p>
   */
  type?: string;

  /**
   * @public
   * <p>The value of the parameter.</p>
   */
  value?: string;
}

/**
 * @public
 * <p>The parameters in the request body for the Lambda input event.</p>
 */
export interface RequestBody {
  /**
   * @public
   * <p>The content in the request body.</p>
   */
  content?: Record<string, Parameter[]>;
}

/**
 * @public
 * <p>Contains information about the action group being invoked.</p>
 */
export interface ActionGroupInvocationInput {
  /**
   * @public
   * <p>The name of the action group.</p>
   */
  actionGroupName?: string;

  /**
   * @public
   * <p>The API method being used, based off the action group.</p>
   */
  verb?: string;

  /**
   * @public
   * <p>The path to the API to call, based off the action group.</p>
   */
  apiPath?: string;

  /**
   * @public
   * <p>The parameters in the Lambda input event.</p>
   */
  parameters?: Parameter[];

  /**
   * @public
   * <p>The parameters in the request body for the Lambda input event.</p>
   */
  requestBody?: RequestBody;
}

/**
 * @public
 * <p>Contains the JSON-formatted string returned by the API invoked by the action group.</p>
 */
export interface ActionGroupInvocationOutput {
  /**
   * @public
   * <p>The JSON-formatted string returned by the API invoked by the action group.</p>
   */
  text?: string;
}

/**
 * @public
 * <p>There was an issue with a dependency due to a server issue. Retry your request.</p>
 */
export class BadGatewayException extends __BaseException {
  readonly name: "BadGatewayException" = "BadGatewayException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>The name of the dependency that caused the issue, such as Amazon Bedrock, Lambda, or STS.</p>
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
 * <p>There was a conflict performing an operation. Resolve the conflict and retry your request.</p>
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
 * <p>There was an issue with a dependency. Check the resource configurations and retry the request.</p>
 */
export class DependencyFailedException extends __BaseException {
  readonly name: "DependencyFailedException" = "DependencyFailedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The name of the dependency that caused the issue, such as Amazon Bedrock, Lambda, or STS.</p>
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
 * <p>An internal server error occurred. Retry your request.</p>
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
 * <p>Contains parameters that specify various attributes that persist across a session or prompt. You can define session state attributes as key-value pairs when writing a <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-lambda.html">Lambda function</a> for an action group or pass them when making an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html">InvokeAgent</a> request. Use session state attributes to control and provide conversational context for your agent and to help customize your agent's behavior. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/sessionstate.html">Session context</a>.</p>
 */
export interface SessionState {
  /**
   * @public
   * <p>Contains attributes that persist across a session and the values of those attributes.</p>
   */
  sessionAttributes?: Record<string, string>;

  /**
   * @public
   * <p>Contains attributes that persist across a prompt and the values of those attributes. These attributes replace the $prompt_session_attributes$ placeholder variable in the orchestration prompt template. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-placeholders.html">Prompt template placeholder variables</a>.</p>
   */
  promptSessionAttributes?: Record<string, string>;
}

/**
 * @public
 */
export interface InvokeAgentRequest {
  /**
   * @public
   * <p>Contains parameters that specify various attributes of the session.</p>
   */
  sessionState?: SessionState;

  /**
   * @public
   * <p>The unique identifier of the agent to use.</p>
   */
  agentId: string | undefined;

  /**
   * @public
   * <p>The alias of the agent to use.</p>
   */
  agentAliasId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the session. Use the same value across requests to continue the same conversation.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>Specifies whether to end the session with the agent or not.</p>
   */
  endSession?: boolean;

  /**
   * @public
   * <p>Specifies whether to turn on the trace or not to track the agent's reasoning process. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-events">Trace enablement</a>.</p>
   */
  enableTrace?: boolean;

  /**
   * @public
   * <p>The prompt text to send the agent.</p>
   */
  inputText: string | undefined;
}

/**
 * @public
 * <p>Contains information about where the text with a citation begins and ends in the generated output.</p>
 */
export interface Span {
  /**
   * @public
   * <p>Where the text with a citation starts in the generated output.</p>
   */
  start?: number;

  /**
   * @public
   * <p>Where the text with a citation ends in the generated output.</p>
   */
  end?: number;
}

/**
 * @public
 * <p>Contains the part of the generated text that contains a citation, alongside where it begins and ends.</p>
 */
export interface TextResponsePart {
  /**
   * @public
   * <p>The part of the generated text that contains a citation.</p>
   */
  text?: string;

  /**
   * @public
   * <p>Contains information about where the text with a citation begins and ends in the generated output.</p>
   */
  span?: Span;
}

/**
 * @public
 * <p>Contains metadata about a part of the generated response that is accompanied by a citation.</p>
 */
export interface GeneratedResponsePart {
  /**
   * @public
   * <p>Contains metadata about a textual part of the generated response that is accompanied by a citation.</p>
   */
  textResponsePart?: TextResponsePart;
}

/**
 * @public
 * <p>Contains the cited text from the data source.</p>
 */
export interface RetrievalResultContent {
  /**
   * @public
   * <p>The cited text from the data source.</p>
   */
  text: string | undefined;
}

/**
 * @public
 * <p>Contains the S3 location of the data source.</p>
 */
export interface RetrievalResultS3Location {
  /**
   * @public
   * <p>The S3 URI of the data source.</p>
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
 * <p>Contains information about the location of the data source.</p>
 */
export interface RetrievalResultLocation {
  /**
   * @public
   * <p>The type of the location of the data source.</p>
   */
  type: RetrievalResultLocationType | undefined;

  /**
   * @public
   * <p>Contains the S3 location of the data source.</p>
   */
  s3Location?: RetrievalResultS3Location;
}

/**
 * @public
 * <p>Contains metadata about a sources cited for the generated response.</p>
 */
export interface RetrievedReference {
  /**
   * @public
   * <p>Contains the cited text from the data source.</p>
   */
  content?: RetrievalResultContent;

  /**
   * @public
   * <p>Contains information about the location of the data source.</p>
   */
  location?: RetrievalResultLocation;
}

/**
 * @public
 * <p>An object containing a segment of the generated response that is based on a source in the knowledge base, alongside information about the source.</p>
 */
export interface Citation {
  /**
   * @public
   * <p>Contains the generated response and metadata </p>
   */
  generatedResponsePart?: GeneratedResponsePart;

  /**
   * @public
   * <p>Contains metadata about the sources cited for the generated response.</p>
   */
  retrievedReferences?: RetrievedReference[];
}

/**
 * @public
 * <p>Contains citations for a part of an agent response.</p>
 */
export interface Attribution {
  /**
   * @public
   * <p>A list of citations and related information for a part of an agent response.</p>
   */
  citations?: Citation[];
}

/**
 * @public
 * <p>Contains a part of an agent response and citations for it.</p>
 */
export interface PayloadPart {
  /**
   * @public
   * <p>A part of the agent response in bytes.</p>
   */
  bytes?: Uint8Array;

  /**
   * @public
   * <p>Contains citations for a part of an agent response.</p>
   */
  attribution?: Attribution;
}

/**
 * @public
 * <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
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
 * <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
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
 * <p>The number of requests exceeds the limit. Resubmit your request later.</p>
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
 * <p>Contains information about the failure of the interaction.</p>
 */
export interface FailureTrace {
  /**
   * @public
   * <p>The unique identifier of the trace.</p>
   */
  traceId?: string;

  /**
   * @public
   * <p>The reason the interaction failed.</p>
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
 * <p>Contains details about the knowledge base to look up and the query to be made.</p>
 */
export interface KnowledgeBaseLookupInput {
  /**
   * @public
   * <p>The query made to the knowledge base.</p>
   */
  text?: string;

  /**
   * @public
   * <p>The unique identifier of the knowledge base to look up.</p>
   */
  knowledgeBaseId?: string;
}

/**
 * @public
 * <p>Contains information pertaining to the action group or knowledge base that is being invoked.</p>
 */
export interface InvocationInput {
  /**
   * @public
   * <p>The unique identifier of the trace.</p>
   */
  traceId?: string;

  /**
   * @public
   * <p>Specifies whether the agent is invoking an action group or a knowledge base.</p>
   */
  invocationType?: InvocationType;

  /**
   * @public
   * <p>Contains information about the action group to be invoked.</p>
   */
  actionGroupInvocationInput?: ActionGroupInvocationInput;

  /**
   * @public
   * <p>Contains details about the knowledge base to look up and the query to be made.</p>
   */
  knowledgeBaseLookupInput?: KnowledgeBaseLookupInput;
}

/**
 * @public
 * <p>Specifications about the inference parameters that were provided alongside the prompt. These are specified in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object that was set when the agent was created or updated. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters for foundation models</a>.</p>
 */
export interface InferenceConfiguration {
  /**
   * @public
   * <p>The likelihood of the model selecting higher-probability options while generating a response. A lower value makes the model more likely to choose higher-probability options, while a higher value makes the model more likely to choose lower-probability options.</p>
   */
  temperature?: number;

  /**
   * @public
   * <p>While generating a response, the model determines the probability of the following token at each point of generation. The value that you set for <code>Top P</code> determines the number of most-likely candidates from which the model chooses the next token in the sequence. For example, if you set <code>topP</code> to 80, the model only selects the next token from the top 80% of the probability distribution of next tokens.</p>
   */
  topP?: number;

  /**
   * @public
   * <p>While generating a response, the model determines the probability of the following token at each point of generation. The value that you set for <code>topK</code> is the number of most-likely candidates from which the model chooses the next token in the sequence. For example, if you set <code>topK</code> to 50, the model selects the next token from among the top 50 most likely choices.</p>
   */
  topK?: number;

  /**
   * @public
   * <p>The maximum number of tokens allowed in the generated response.</p>
   */
  maximumLength?: number;

  /**
   * @public
   * <p>A list of stop sequences. A stop sequence is a sequence of characters that causes the model to stop generating the response.</p>
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
 * <p>The input for the pre-processing step.</p>
 *          <ul>
 *             <li>
 *                <p>The <code>type</code> matches the agent step.</p>
 *             </li>
 *             <li>
 *                <p>The <code>text</code> contains the prompt.</p>
 *             </li>
 *             <li>
 *                <p>The <code>inferenceConfiguration</code>, <code>parserMode</code>, and <code>overrideLambda</code> values are set in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object that was set when the agent was created or updated.</p>
 *             </li>
 *          </ul>
 */
export interface ModelInvocationInput {
  /**
   * @public
   * <p>The unique identifier of the trace.</p>
   */
  traceId?: string;

  /**
   * @public
   * <p>The text that prompted the agent at this step.</p>
   */
  text?: string;

  /**
   * @public
   * <p>The step in the agent sequence.</p>
   */
  type?: PromptType;

  /**
   * @public
   * <p>Specifications about the inference parameters that were provided alongside the prompt. These are specified in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object that was set when the agent was created or updated. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters for foundation models</a>.</p>
   */
  inferenceConfiguration?: InferenceConfiguration;

  /**
   * @public
   * <p>The ARN of the Lambda function to use when parsing the raw foundation model output in parts of the agent sequence.</p>
   */
  overrideLambda?: string;

  /**
   * @public
   * <p>Specifies whether the default prompt template was <code>OVERRIDDEN</code>. If it was, the <code>basePromptTemplate</code> that was set in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object when the agent was created or updated is used instead.</p>
   */
  promptCreationMode?: CreationMode;

  /**
   * @public
   * <p>Specifies whether to override the default parser Lambda function when parsing the raw foundation model output in the part of the agent sequence defined by the <code>promptType</code>.</p>
   */
  parserMode?: CreationMode;
}

/**
 * @public
 * <p>Contains details about the response to the user.</p>
 */
export interface FinalResponse {
  /**
   * @public
   * <p>The text in the response to the user.</p>
   */
  text?: string;
}

/**
 * @public
 * <p>Contains details about the results from looking up the knowledge base.</p>
 */
export interface KnowledgeBaseLookupOutput {
  /**
   * @public
   * <p>Contains metadata about the sources cited for the generated response.</p>
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
 * <p>Contains details about the agent's response to reprompt the input.</p>
 */
export interface RepromptResponse {
  /**
   * @public
   * <p>The text reprompting the input.</p>
   */
  text?: string;

  /**
   * @public
   * <p>Specifies what output is prompting the agent to reprompt the input.</p>
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
 * <p>Contains the result or output of an action group or knowledge base, or the response to the user.</p>
 */
export interface Observation {
  /**
   * @public
   * <p>The unique identifier of the trace.</p>
   */
  traceId?: string;

  /**
   * @public
   * <p>Specifies what kind of information the agent returns in the observation. The following values are possible.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTION_GROUP</code> – The agent returns the result of an action group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KNOWLEDGE_BASE</code> – The agent returns information from a knowledge base.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FINISH</code> – The agent returns a final response to the user with no follow-up.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ASK_USER</code> – The agent asks the user a question.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REPROMPT</code> – The agent prompts the user again for the same information.</p>
   *             </li>
   *          </ul>
   */
  type?: Type;

  /**
   * @public
   * <p>Contains the JSON-formatted string returned by the API invoked by the action group.</p>
   */
  actionGroupInvocationOutput?: ActionGroupInvocationOutput;

  /**
   * @public
   * <p>Contains details about the results from looking up the knowledge base.</p>
   */
  knowledgeBaseLookupOutput?: KnowledgeBaseLookupOutput;

  /**
   * @public
   * <p>Contains details about the response to the user.</p>
   */
  finalResponse?: FinalResponse;

  /**
   * @public
   * <p>Contains details about the response to reprompt the input.</p>
   */
  repromptResponse?: RepromptResponse;
}

/**
 * @public
 * <p>Contains the reasoning, based on the input, that the agent uses to justify carrying out an action group or getting information from a knowledge base.</p>
 */
export interface Rationale {
  /**
   * @public
   * <p>The unique identifier of the trace step.</p>
   */
  traceId?: string;

  /**
   * @public
   * <p>The reasoning or thought process of the agent, based on the input.</p>
   */
  text?: string;
}

/**
 * @public
 * <p>Details about the orchestration step, in which the agent determines the order in which actions are executed and which knowledge bases are retrieved.</p>
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
   * <p>Details about the reasoning, based on the input, that the agent uses to justify carrying out an action group or getting information from a knowledge base.</p>
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
   * <p>Contains information pertaining to the action group or knowledge base that is being invoked.</p>
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
   * <p>Details about the observation (the output of the action group Lambda or knowledge base) made by the agent.</p>
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
   * <p>The input for the orchestration step.</p>
   *          <ul>
   *             <li>
   *                <p>The <code>type</code> is <code>ORCHESTRATION</code>.</p>
   *             </li>
   *             <li>
   *                <p>The <code>text</code> contains the prompt.</p>
   *             </li>
   *             <li>
   *                <p>The <code>inferenceConfiguration</code>, <code>parserMode</code>, and <code>overrideLambda</code> values are set in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object that was set when the agent was created or updated.</p>
   *             </li>
   *          </ul>
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
 * <p>Details about the response from the Lambda parsing of the output from the post-processing step.</p>
 */
export interface PostProcessingParsedResponse {
  /**
   * @public
   * <p>The text returned by the parser.</p>
   */
  text?: string;
}

/**
 * @public
 * <p>The foundation model output from the post-processing step.</p>
 */
export interface PostProcessingModelInvocationOutput {
  /**
   * @public
   * <p>The unique identifier of the trace.</p>
   */
  traceId?: string;

  /**
   * @public
   * <p>Details about the response from the Lambda parsing of the output of the post-processing step.</p>
   */
  parsedResponse?: PostProcessingParsedResponse;
}

/**
 * @public
 * <p>Details about the post-processing step, in which the agent shapes the response.</p>
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
   * <p>The input for the post-processing step.</p>
   *          <ul>
   *             <li>
   *                <p>The <code>type</code> is <code>POST_PROCESSING</code>.</p>
   *             </li>
   *             <li>
   *                <p>The <code>text</code> contains the prompt.</p>
   *             </li>
   *             <li>
   *                <p>The <code>inferenceConfiguration</code>, <code>parserMode</code>, and <code>overrideLambda</code> values are set in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object that was set when the agent was created or updated.</p>
   *             </li>
   *          </ul>
   */
  export interface ModelInvocationInputMember {
    modelInvocationInput: ModelInvocationInput;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The foundation model output from the post-processing step.</p>
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
 * <p>Details about the response from the Lambda parsing of the output from the pre-processing step.</p>
 */
export interface PreProcessingParsedResponse {
  /**
   * @public
   * <p>The text returned by the parsing of the pre-processing step, explaining the steps that the agent plans to take in orchestration, if the user input is valid.</p>
   */
  rationale?: string;

  /**
   * @public
   * <p>Whether the user input is valid or not. If <code>false</code>, the agent doesn't proceed to orchestration.</p>
   */
  isValid?: boolean;
}

/**
 * @public
 * <p>The foundation model output from the pre-processing step.</p>
 */
export interface PreProcessingModelInvocationOutput {
  /**
   * @public
   * <p>The unique identifier of the trace.</p>
   */
  traceId?: string;

  /**
   * @public
   * <p>Details about the response from the Lambda parsing of the output of the pre-processing step.</p>
   */
  parsedResponse?: PreProcessingParsedResponse;
}

/**
 * @public
 * <p>Details about the pre-processing step, in which the agent contextualizes and categorizes user inputs.</p>
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
   * <p>The input for the pre-processing step.</p>
   *          <ul>
   *             <li>
   *                <p>The <code>type</code> is <code>PRE_PROCESSING</code>.</p>
   *             </li>
   *             <li>
   *                <p>The <code>text</code> contains the prompt.</p>
   *             </li>
   *             <li>
   *                <p>The <code>inferenceConfiguration</code>, <code>parserMode</code>, and <code>overrideLambda</code> values are set in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object that was set when the agent was created or updated.</p>
   *             </li>
   *          </ul>
   */
  export interface ModelInvocationInputMember {
    modelInvocationInput: ModelInvocationInput;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The foundation model output from the pre-processing step.</p>
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
 * <p>Contains one part of the agent's reasoning process and results from calling API actions and querying knowledge bases. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-enablement">Trace enablement</a>.</p>
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
   * <p>Details about the pre-processing step, in which the agent contextualizes and categorizes user inputs.</p>
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
   * <p>Details about the orchestration step, in which the agent determines the order in which actions are executed and which knowledge bases are retrieved.</p>
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
   * <p>Details about the post-processing step, in which the agent shapes the response..</p>
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
   * <p>Contains information about the failure of the interaction.</p>
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
 * <p>Contains information about the agent and session, alongside the agent's reasoning process and results from calling API actions and querying knowledge bases and metadata about the trace. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-enablement">Trace enablement</a>.</p>
 */
export interface TracePart {
  /**
   * @public
   * <p>The unique identifier of the agent.</p>
   */
  agentId?: string;

  /**
   * @public
   * <p>The unique identifier of the alias of the agent.</p>
   */
  agentAliasId?: string;

  /**
   * @public
   * <p>The unique identifier of the session with the agent.</p>
   */
  sessionId?: string;

  /**
   * @public
   * <p>Contains one part of the agent's reasoning process and results from calling API actions and querying knowledge bases. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-enablement">Trace enablement</a>.</p>
   */
  trace?: Trace;
}

/**
 * @public
 * <p>Input validation failed. Check your request parameters and retry the request.</p>
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
 * <p>The response from invoking the agent and associated citations and trace information.</p>
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
   * <p>Contains a part of an agent response and citations for it.</p>
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
   * <p>Contains information about the agent and session, alongside the agent's reasoning process and results from calling API actions and querying knowledge bases and metadata about the trace. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/trace-events.html">Trace events</a>.</p>
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
   * <p>An internal server error occurred. Retry your request.</p>
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
   * <p>Input validation failed. Check your request parameters and retry the request.</p>
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
   * <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
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
   * <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
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
   * <p>The number of requests exceeds the limit. Resubmit your request later.</p>
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
   * <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
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
   * <p>There was a conflict performing an operation. Resolve the conflict and retry your request.</p>
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
   * <p>There was an issue with a dependency. Check the resource configurations and retry the request.</p>
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
   * <p>There was an issue with a dependency due to a server issue. Retry your request.</p>
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
 */
export interface InvokeAgentResponse {
  /**
   * @public
   * <p>The agent's response to the user prompt.</p>
   */
  completion: AsyncIterable<ResponseStream> | undefined;

  /**
   * @public
   * <p>The MIME type of the input data in the request. The default value is <code>application/json</code>.</p>
   */
  contentType: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the session with the agent.</p>
   */
  sessionId: string | undefined;
}

/**
 * @public
 * <p>Contains the query made to the knowledge base.</p>
 */
export interface RetrieveAndGenerateInput {
  /**
   * @public
   * <p>The query made to the knowledge base.</p>
   */
  text: string | undefined;
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
 * <p>Configurations for how to carry out the search.</p>
 */
export interface KnowledgeBaseVectorSearchConfiguration {
  /**
   * @public
   * <p>The number of results to return.</p>
   *          <note>
   *             <p>The <code>numberOfResults</code> field is currently unsupported for <code>RetrieveAndGenerate</code>. Don't include it in this field if you are sending a <code>RetrieveAndGenerate</code> request.</p>
   *          </note>
   */
  numberOfResults?: number;

  /**
   * @public
   * <p>By default, Amazon Bedrock decides a search strategy for you. If you're using an Amazon OpenSearch Serverless vector store that contains a filterable text field, you can specify whether to query the knowledge base with a <code>HYBRID</code> search using both vector embeddings and raw text, or <code>SEMANTIC</code> search using only vector embeddings. For other vector store configurations, only <code>SEMANTIC</code> search is available. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-test.html">Test a knowledge base</a>.</p>
   */
  overrideSearchType?: SearchType;
}

/**
 * @public
 * <p>Contains details about how the results should be returned.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax">Retrieve request body</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request body</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface KnowledgeBaseRetrievalConfiguration {
  /**
   * @public
   * <p>Contains details about how the results from the vector search should be returned.</p>
   */
  vectorSearchConfiguration: KnowledgeBaseVectorSearchConfiguration | undefined;
}

/**
 * @public
 * <p>Contains details about the resource being queried.</p>
 */
export interface KnowledgeBaseRetrieveAndGenerateConfiguration {
  /**
   * @public
   * <p>The unique identifier of the knowledge base that is queried and the foundation model used for generation.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The ARN of the foundation model used to generate a response.</p>
   */
  modelArn: string | undefined;

  /**
   * @public
   * <p>Contains configurations for how to retrieve and return the knowledge base query.</p>
   */
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration;
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
 * <p>Contains details about the resource being queried.</p>
 */
export interface RetrieveAndGenerateConfiguration {
  /**
   * @public
   * <p>The type of resource that is queried by the request.</p>
   */
  type: RetrieveAndGenerateType | undefined;

  /**
   * @public
   * <p>Contains details about the resource being queried.</p>
   */
  knowledgeBaseConfiguration?: KnowledgeBaseRetrieveAndGenerateConfiguration;
}

/**
 * @public
 * <p>Contains configuration about the session with the knowledge base.</p>
 */
export interface RetrieveAndGenerateSessionConfiguration {
  /**
   * @public
   * <p>The ARN of the KMS key encrypting the session.</p>
   */
  kmsKeyArn: string | undefined;
}

/**
 * @public
 */
export interface RetrieveAndGenerateRequest {
  /**
   * @public
   * <p>The unique identifier of the session. Reuse the same value to continue the same session with the knowledge base.</p>
   */
  sessionId?: string;

  /**
   * @public
   * <p>Contains the query made to the knowledge base.</p>
   */
  input: RetrieveAndGenerateInput | undefined;

  /**
   * @public
   * <p>Contains details about the resource being queried and the foundation model used for generation.</p>
   */
  retrieveAndGenerateConfiguration?: RetrieveAndGenerateConfiguration;

  /**
   * @public
   * <p>Contains details about the session with the knowledge base.</p>
   */
  sessionConfiguration?: RetrieveAndGenerateSessionConfiguration;
}

/**
 * @public
 * <p>Contains the response generated from querying the knowledge base.</p>
 */
export interface RetrieveAndGenerateOutput {
  /**
   * @public
   * <p>The response generated from querying the knowledge base.</p>
   */
  text: string | undefined;
}

/**
 * @public
 */
export interface RetrieveAndGenerateResponse {
  /**
   * @public
   * <p>The unique identifier of the session. Reuse the same value to continue the same session with the knowledge base.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>Contains the response generated from querying the knowledge base.</p>
   */
  output: RetrieveAndGenerateOutput | undefined;

  /**
   * @public
   * <p>A list of segments of the generated response that are based on sources in the knowledge base, alongside information about the sources.</p>
   */
  citations?: Citation[];
}

/**
 * @public
 * <p>Contains the query made to the knowledge base.</p>
 */
export interface KnowledgeBaseQuery {
  /**
   * @public
   * <p>The text of the query made to the knowledge base.</p>
   */
  text: string | undefined;
}

/**
 * @public
 */
export interface RetrieveRequest {
  /**
   * @public
   * <p>The unique identifier of the knowledge base to query.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The query to send the knowledge base.</p>
   */
  retrievalQuery: KnowledgeBaseQuery | undefined;

  /**
   * @public
   * <p>Contains details about how the results should be returned.</p>
   */
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration;

  /**
   * @public
   * <p>If there are more results than can fit in the response, the response returns a <code>nextToken</code>. Use this token in the <code>nextToken</code> field of another request to retrieve the next batch of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Details about a result from querying the knowledge base.</p>
 */
export interface KnowledgeBaseRetrievalResult {
  /**
   * @public
   * <p>Contains a chunk of text from a data source in the knowledge base.</p>
   */
  content: RetrievalResultContent | undefined;

  /**
   * @public
   * <p>Contains information about the location of the data source.</p>
   */
  location?: RetrievalResultLocation;

  /**
   * @public
   * <p>The level of relevance of the result to the query.</p>
   */
  score?: number;
}

/**
 * @public
 */
export interface RetrieveResponse {
  /**
   * @public
   * <p>A list of results from querying the knowledge base.</p>
   */
  retrievalResults: KnowledgeBaseRetrievalResult[] | undefined;

  /**
   * @public
   * <p>If there are more results than can fit in the response, the response returns a <code>nextToken</code>. Use this token in the <code>nextToken</code> field of another request to retrieve the next batch of results.</p>
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
export const TextResponsePartFilterSensitiveLog = (obj: TextResponsePart): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GeneratedResponsePartFilterSensitiveLog = (obj: GeneratedResponsePart): any => ({
  ...obj,
  ...(obj.textResponsePart && { textResponsePart: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RetrievalResultContentFilterSensitiveLog = (obj: RetrievalResultContent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetrievalResultLocationFilterSensitiveLog = (obj: RetrievalResultLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetrievedReferenceFilterSensitiveLog = (obj: RetrievedReference): any => ({
  ...obj,
  ...(obj.content && { content: SENSITIVE_STRING }),
  ...(obj.location && { location: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CitationFilterSensitiveLog = (obj: Citation): any => ({
  ...obj,
  ...(obj.generatedResponsePart && {
    generatedResponsePart: GeneratedResponsePartFilterSensitiveLog(obj.generatedResponsePart),
  }),
  ...(obj.retrievedReferences && {
    retrievedReferences: obj.retrievedReferences.map((item) => RetrievedReferenceFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AttributionFilterSensitiveLog = (obj: Attribution): any => ({
  ...obj,
  ...(obj.citations && { citations: obj.citations.map((item) => CitationFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PayloadPartFilterSensitiveLog = (obj: PayloadPart): any => ({
  ...obj,
  ...(obj.bytes && { bytes: SENSITIVE_STRING }),
  ...(obj.attribution && { attribution: AttributionFilterSensitiveLog(obj.attribution) }),
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
export const KnowledgeBaseLookupOutputFilterSensitiveLog = (obj: KnowledgeBaseLookupOutput): any => ({
  ...obj,
  ...(obj.retrievedReferences && {
    retrievedReferences: obj.retrievedReferences.map((item) => RetrievedReferenceFilterSensitiveLog(item)),
  }),
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
  ...(obj.knowledgeBaseLookupOutput && {
    knowledgeBaseLookupOutput: KnowledgeBaseLookupOutputFilterSensitiveLog(obj.knowledgeBaseLookupOutput),
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
  ...(obj.citations && { citations: obj.citations.map((item) => CitationFilterSensitiveLog(item)) }),
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
export const KnowledgeBaseRetrievalResultFilterSensitiveLog = (obj: KnowledgeBaseRetrievalResult): any => ({
  ...obj,
  ...(obj.content && { content: SENSITIVE_STRING }),
  ...(obj.location && { location: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RetrieveResponseFilterSensitiveLog = (obj: RetrieveResponse): any => ({
  ...obj,
  ...(obj.retrievalResults && { retrievalResults: SENSITIVE_STRING }),
});
