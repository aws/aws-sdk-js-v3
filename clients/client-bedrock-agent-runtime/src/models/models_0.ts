// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import { BedrockAgentRuntimeServiceException as __BaseException } from "./BedrockAgentRuntimeServiceException";

/**
 * <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
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
 * <p>A parameter in the Lambda input event.</p>
 * @public
 */
export interface Parameter {
  /**
   * <p>The name of the parameter.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The type of the parameter.</p>
   * @public
   */
  type?: string;

  /**
   * <p>The value of the parameter.</p>
   * @public
   */
  value?: string;
}

/**
 * <p>The parameters in the request body for the Lambda input event.</p>
 * @public
 */
export interface RequestBody {
  /**
   * <p>The content in the request body.</p>
   * @public
   */
  content?: Record<string, Parameter[]>;
}

/**
 * <p>Contains information about the action group being invoked.</p>
 * @public
 */
export interface ActionGroupInvocationInput {
  /**
   * <p>The name of the action group.</p>
   * @public
   */
  actionGroupName?: string;

  /**
   * <p>The API method being used, based off the action group.</p>
   * @public
   */
  verb?: string;

  /**
   * <p>The path to the API to call, based off the action group.</p>
   * @public
   */
  apiPath?: string;

  /**
   * <p>The parameters in the Lambda input event.</p>
   * @public
   */
  parameters?: Parameter[];

  /**
   * <p>The parameters in the request body for the Lambda input event.</p>
   * @public
   */
  requestBody?: RequestBody;
}

/**
 * <p>Contains the JSON-formatted string returned by the API invoked by the action group.</p>
 * @public
 */
export interface ActionGroupInvocationOutput {
  /**
   * <p>The JSON-formatted string returned by the API invoked by the action group.</p>
   * @public
   */
  text?: string;
}

/**
 * <p>There was an issue with a dependency due to a server issue. Retry your request.</p>
 * @public
 */
export class BadGatewayException extends __BaseException {
  readonly name: "BadGatewayException" = "BadGatewayException";
  readonly $fault: "server" = "server";
  /**
   * <p>The name of the dependency that caused the issue, such as Amazon Bedrock, Lambda, or STS.</p>
   * @public
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
 * <p>There was a conflict performing an operation. Resolve the conflict and retry your request.</p>
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
 * <p>There was an issue with a dependency. Check the resource configurations and retry the request.</p>
 * @public
 */
export class DependencyFailedException extends __BaseException {
  readonly name: "DependencyFailedException" = "DependencyFailedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The name of the dependency that caused the issue, such as Amazon Bedrock, Lambda, or STS.</p>
   * @public
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
 * <p>Contains parameters that specify various attributes that persist across a session or prompt. You can define session state attributes as key-value pairs when writing a <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-lambda.html">Lambda function</a> for an action group or pass them when making an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html">InvokeAgent</a> request. Use session state attributes to control and provide conversational context for your agent and to help customize your agent's behavior. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html">Control session context</a>.</p>
 * @public
 */
export interface SessionState {
  /**
   * <p>Contains attributes that persist across a session and the values of those attributes.</p>
   * @public
   */
  sessionAttributes?: Record<string, string>;

  /**
   * <p>Contains attributes that persist across a prompt and the values of those attributes. These attributes replace the $prompt_session_attributes$ placeholder variable in the orchestration prompt template. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-placeholders.html">Prompt template placeholder variables</a>.</p>
   * @public
   */
  promptSessionAttributes?: Record<string, string>;
}

/**
 * @public
 */
export interface InvokeAgentRequest {
  /**
   * <p>Contains parameters that specify various attributes of the session. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html">Control session context</a>.</p>
   * @public
   */
  sessionState?: SessionState;

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
  endSession?: boolean;

  /**
   * <p>Specifies whether to turn on the trace or not to track the agent's reasoning process. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-events">Trace enablement</a>.</p>
   * @public
   */
  enableTrace?: boolean;

  /**
   * <p>The prompt text to send the agent.</p>
   * @public
   */
  inputText: string | undefined;
}

/**
 * <p>Contains information about where the text with a citation begins and ends in the generated output.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>span</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax">Retrieve response</a> – in the <code>span</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface Span {
  /**
   * <p>Where the text with a citation starts in the generated output.</p>
   * @public
   */
  start?: number;

  /**
   * <p>Where the text with a citation ends in the generated output.</p>
   * @public
   */
  end?: number;
}

/**
 * <p>Contains the part of the generated text that contains a citation, alongside where it begins and ends.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>textResponsePart</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax">Retrieve response</a> – in the <code>textResponsePart</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface TextResponsePart {
  /**
   * <p>The part of the generated text that contains a citation.</p>
   * @public
   */
  text?: string;

  /**
   * <p>Contains information about where the text with a citation begins and ends in the generated output.</p>
   * @public
   */
  span?: Span;
}

/**
 * <p>Contains metadata about a part of the generated response that is accompanied by a citation.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax">Retrieve response</a> – in the <code>generatedResponsePart</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>generatedResponsePart</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface GeneratedResponsePart {
  /**
   * <p>Contains metadata about a textual part of the generated response that is accompanied by a citation.</p>
   * @public
   */
  textResponsePart?: TextResponsePart;
}

/**
 * <p>Contains the cited text from the data source.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax">Retrieve response</a> – in the <code>content</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>content</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax">Retrieve response</a> – in the <code>content</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface RetrievalResultContent {
  /**
   * <p>The cited text from the data source.</p>
   * @public
   */
  text: string | undefined;
}

/**
 * <p>Contains the S3 location of the data source.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax">Retrieve response</a> – in the <code>s3Location</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>s3Location</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax">Retrieve response</a> – in the <code>s3Location</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface RetrievalResultS3Location {
  /**
   * <p>The S3 URI of the data source.</p>
   * @public
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
 * <p>Contains information about the location of the data source.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax">Retrieve response</a> – in the <code>location</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>location</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax">Retrieve response</a> – in the <code>locatino</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface RetrievalResultLocation {
  /**
   * <p>The type of the location of the data source.</p>
   * @public
   */
  type: RetrievalResultLocationType | undefined;

  /**
   * <p>Contains the S3 location of the data source.</p>
   * @public
   */
  s3Location?: RetrievalResultS3Location;
}

/**
 * <p>Contains metadata about a source cited for the generated response.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>retrievedReferences</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax">Retrieve response</a> – in the <code>retrievedReferences</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface RetrievedReference {
  /**
   * <p>Contains the cited text from the data source.</p>
   * @public
   */
  content?: RetrievalResultContent;

  /**
   * <p>Contains information about the location of the data source.</p>
   * @public
   */
  location?: RetrievalResultLocation;

  /**
   * <p>Contains metadata attributes and their values for the file in the data source. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-ds.html#kb-ds-metadata">Metadata and filtering</a>.</p>
   * @public
   */
  metadata?: Record<string, __DocumentType>;
}

/**
 * <p>An object containing a segment of the generated response that is based on a source in the knowledge base, alongside information about the source.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax">Retrieve response</a> – in the <code>citations</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>citations</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface Citation {
  /**
   * <p>Contains the generated response and metadata </p>
   * @public
   */
  generatedResponsePart?: GeneratedResponsePart;

  /**
   * <p>Contains metadata about the sources cited for the generated response.</p>
   * @public
   */
  retrievedReferences?: RetrievedReference[];
}

/**
 * <p>Contains citations for a part of an agent response.</p>
 * @public
 */
export interface Attribution {
  /**
   * <p>A list of citations and related information for a part of an agent response.</p>
   * @public
   */
  citations?: Citation[];
}

/**
 * <p>Contains a part of an agent response and citations for it.</p>
 * @public
 */
export interface PayloadPart {
  /**
   * <p>A part of the agent response in bytes.</p>
   * @public
   */
  bytes?: Uint8Array;

  /**
   * <p>Contains citations for a part of an agent response.</p>
   * @public
   */
  attribution?: Attribution;
}

/**
 * <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
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
 * <p>Contains information about the failure of the interaction.</p>
 * @public
 */
export interface FailureTrace {
  /**
   * <p>The unique identifier of the trace.</p>
   * @public
   */
  traceId?: string;

  /**
   * <p>The reason the interaction failed.</p>
   * @public
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
 * <p>Contains details about the knowledge base to look up and the query to be made.</p>
 * @public
 */
export interface KnowledgeBaseLookupInput {
  /**
   * <p>The query made to the knowledge base.</p>
   * @public
   */
  text?: string;

  /**
   * <p>The unique identifier of the knowledge base to look up.</p>
   * @public
   */
  knowledgeBaseId?: string;
}

/**
 * <p>Contains information pertaining to the action group or knowledge base that is being invoked.</p>
 * @public
 */
export interface InvocationInput {
  /**
   * <p>The unique identifier of the trace.</p>
   * @public
   */
  traceId?: string;

  /**
   * <p>Specifies whether the agent is invoking an action group or a knowledge base.</p>
   * @public
   */
  invocationType?: InvocationType;

  /**
   * <p>Contains information about the action group to be invoked.</p>
   * @public
   */
  actionGroupInvocationInput?: ActionGroupInvocationInput;

  /**
   * <p>Contains details about the knowledge base to look up and the query to be made.</p>
   * @public
   */
  knowledgeBaseLookupInput?: KnowledgeBaseLookupInput;
}

/**
 * <p>Specifications about the inference parameters that were provided alongside the prompt. These are specified in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object that was set when the agent was created or updated. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters for foundation models</a>.</p>
 * @public
 */
export interface InferenceConfiguration {
  /**
   * <p>The likelihood of the model selecting higher-probability options while generating a response. A lower value makes the model more likely to choose higher-probability options, while a higher value makes the model more likely to choose lower-probability options.</p>
   * @public
   */
  temperature?: number;

  /**
   * <p>While generating a response, the model determines the probability of the following token at each point of generation. The value that you set for <code>Top P</code> determines the number of most-likely candidates from which the model chooses the next token in the sequence. For example, if you set <code>topP</code> to 80, the model only selects the next token from the top 80% of the probability distribution of next tokens.</p>
   * @public
   */
  topP?: number;

  /**
   * <p>While generating a response, the model determines the probability of the following token at each point of generation. The value that you set for <code>topK</code> is the number of most-likely candidates from which the model chooses the next token in the sequence. For example, if you set <code>topK</code> to 50, the model selects the next token from among the top 50 most likely choices.</p>
   * @public
   */
  topK?: number;

  /**
   * <p>The maximum number of tokens allowed in the generated response.</p>
   * @public
   */
  maximumLength?: number;

  /**
   * <p>A list of stop sequences. A stop sequence is a sequence of characters that causes the model to stop generating the response.</p>
   * @public
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
 * @public
 */
export interface ModelInvocationInput {
  /**
   * <p>The unique identifier of the trace.</p>
   * @public
   */
  traceId?: string;

  /**
   * <p>The text that prompted the agent at this step.</p>
   * @public
   */
  text?: string;

  /**
   * <p>The step in the agent sequence.</p>
   * @public
   */
  type?: PromptType;

  /**
   * <p>Specifications about the inference parameters that were provided alongside the prompt. These are specified in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object that was set when the agent was created or updated. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference parameters for foundation models</a>.</p>
   * @public
   */
  inferenceConfiguration?: InferenceConfiguration;

  /**
   * <p>The ARN of the Lambda function to use when parsing the raw foundation model output in parts of the agent sequence.</p>
   * @public
   */
  overrideLambda?: string;

  /**
   * <p>Specifies whether the default prompt template was <code>OVERRIDDEN</code>. If it was, the <code>basePromptTemplate</code> that was set in the <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptOverrideConfiguration.html">PromptOverrideConfiguration</a> object when the agent was created or updated is used instead.</p>
   * @public
   */
  promptCreationMode?: CreationMode;

  /**
   * <p>Specifies whether to override the default parser Lambda function when parsing the raw foundation model output in the part of the agent sequence defined by the <code>promptType</code>.</p>
   * @public
   */
  parserMode?: CreationMode;
}

/**
 * <p>Contains details about the response to the user.</p>
 * @public
 */
export interface FinalResponse {
  /**
   * <p>The text in the response to the user.</p>
   * @public
   */
  text?: string;
}

/**
 * <p>Contains details about the results from looking up the knowledge base.</p>
 * @public
 */
export interface KnowledgeBaseLookupOutput {
  /**
   * <p>Contains metadata about the sources cited for the generated response.</p>
   * @public
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
 * <p>Contains details about the agent's response to reprompt the input.</p>
 * @public
 */
export interface RepromptResponse {
  /**
   * <p>The text reprompting the input.</p>
   * @public
   */
  text?: string;

  /**
   * <p>Specifies what output is prompting the agent to reprompt the input.</p>
   * @public
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
 * <p>Contains the result or output of an action group or knowledge base, or the response to the user.</p>
 * @public
 */
export interface Observation {
  /**
   * <p>The unique identifier of the trace.</p>
   * @public
   */
  traceId?: string;

  /**
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
   * @public
   */
  type?: Type;

  /**
   * <p>Contains the JSON-formatted string returned by the API invoked by the action group.</p>
   * @public
   */
  actionGroupInvocationOutput?: ActionGroupInvocationOutput;

  /**
   * <p>Contains details about the results from looking up the knowledge base.</p>
   * @public
   */
  knowledgeBaseLookupOutput?: KnowledgeBaseLookupOutput;

  /**
   * <p>Contains details about the response to the user.</p>
   * @public
   */
  finalResponse?: FinalResponse;

  /**
   * <p>Contains details about the response to reprompt the input.</p>
   * @public
   */
  repromptResponse?: RepromptResponse;
}

/**
 * <p>Contains the reasoning, based on the input, that the agent uses to justify carrying out an action group or getting information from a knowledge base.</p>
 * @public
 */
export interface Rationale {
  /**
   * <p>The unique identifier of the trace step.</p>
   * @public
   */
  traceId?: string;

  /**
   * <p>The reasoning or thought process of the agent, based on the input.</p>
   * @public
   */
  text?: string;
}

/**
 * <p>Details about the orchestration step, in which the agent determines the order in which actions are executed and which knowledge bases are retrieved.</p>
 * @public
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
   * <p>Details about the reasoning, based on the input, that the agent uses to justify carrying out an action group or getting information from a knowledge base.</p>
   * @public
   */
  export interface RationaleMember {
    rationale: Rationale;
    invocationInput?: never;
    observation?: never;
    modelInvocationInput?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains information pertaining to the action group or knowledge base that is being invoked.</p>
   * @public
   */
  export interface InvocationInputMember {
    rationale?: never;
    invocationInput: InvocationInput;
    observation?: never;
    modelInvocationInput?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about the observation (the output of the action group Lambda or knowledge base) made by the agent.</p>
   * @public
   */
  export interface ObservationMember {
    rationale?: never;
    invocationInput?: never;
    observation: Observation;
    modelInvocationInput?: never;
    $unknown?: never;
  }

  /**
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
   * @public
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
 * <p>Details about the response from the Lambda parsing of the output from the post-processing step.</p>
 * @public
 */
export interface PostProcessingParsedResponse {
  /**
   * <p>The text returned by the parser.</p>
   * @public
   */
  text?: string;
}

/**
 * <p>The foundation model output from the post-processing step.</p>
 * @public
 */
export interface PostProcessingModelInvocationOutput {
  /**
   * <p>The unique identifier of the trace.</p>
   * @public
   */
  traceId?: string;

  /**
   * <p>Details about the response from the Lambda parsing of the output of the post-processing step.</p>
   * @public
   */
  parsedResponse?: PostProcessingParsedResponse;
}

/**
 * <p>Details about the post-processing step, in which the agent shapes the response.</p>
 * @public
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
   * @public
   */
  export interface ModelInvocationInputMember {
    modelInvocationInput: ModelInvocationInput;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * <p>The foundation model output from the post-processing step.</p>
   * @public
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
 * <p>Details about the response from the Lambda parsing of the output from the pre-processing step.</p>
 * @public
 */
export interface PreProcessingParsedResponse {
  /**
   * <p>The text returned by the parsing of the pre-processing step, explaining the steps that the agent plans to take in orchestration, if the user input is valid.</p>
   * @public
   */
  rationale?: string;

  /**
   * <p>Whether the user input is valid or not. If <code>false</code>, the agent doesn't proceed to orchestration.</p>
   * @public
   */
  isValid?: boolean;
}

/**
 * <p>The foundation model output from the pre-processing step.</p>
 * @public
 */
export interface PreProcessingModelInvocationOutput {
  /**
   * <p>The unique identifier of the trace.</p>
   * @public
   */
  traceId?: string;

  /**
   * <p>Details about the response from the Lambda parsing of the output of the pre-processing step.</p>
   * @public
   */
  parsedResponse?: PreProcessingParsedResponse;
}

/**
 * <p>Details about the pre-processing step, in which the agent contextualizes and categorizes user inputs.</p>
 * @public
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
   * @public
   */
  export interface ModelInvocationInputMember {
    modelInvocationInput: ModelInvocationInput;
    modelInvocationOutput?: never;
    $unknown?: never;
  }

  /**
   * <p>The foundation model output from the pre-processing step.</p>
   * @public
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
 * <p>Contains one part of the agent's reasoning process and results from calling API actions and querying knowledge bases. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-enablement">Trace enablement</a>.</p>
 * @public
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
   * <p>Details about the pre-processing step, in which the agent contextualizes and categorizes user inputs.</p>
   * @public
   */
  export interface PreProcessingTraceMember {
    preProcessingTrace: PreProcessingTrace;
    orchestrationTrace?: never;
    postProcessingTrace?: never;
    failureTrace?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about the orchestration step, in which the agent determines the order in which actions are executed and which knowledge bases are retrieved.</p>
   * @public
   */
  export interface OrchestrationTraceMember {
    preProcessingTrace?: never;
    orchestrationTrace: OrchestrationTrace;
    postProcessingTrace?: never;
    failureTrace?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about the post-processing step, in which the agent shapes the response..</p>
   * @public
   */
  export interface PostProcessingTraceMember {
    preProcessingTrace?: never;
    orchestrationTrace?: never;
    postProcessingTrace: PostProcessingTrace;
    failureTrace?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains information about the failure of the interaction.</p>
   * @public
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
 * <p>Contains information about the agent and session, alongside the agent's reasoning process and results from calling API actions and querying knowledge bases and metadata about the trace. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-enablement">Trace enablement</a>.</p>
 * @public
 */
export interface TracePart {
  /**
   * <p>The unique identifier of the agent.</p>
   * @public
   */
  agentId?: string;

  /**
   * <p>The unique identifier of the alias of the agent.</p>
   * @public
   */
  agentAliasId?: string;

  /**
   * <p>The unique identifier of the session with the agent.</p>
   * @public
   */
  sessionId?: string;

  /**
   * <p>Contains one part of the agent's reasoning process and results from calling API actions and querying knowledge bases. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents-test.html#trace-enablement">Trace enablement</a>.</p>
   * @public
   */
  trace?: Trace;
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
 * <p>The response from invoking the agent and associated citations and trace information.</p>
 * @public
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
   * <p>Contains a part of an agent response and citations for it.</p>
   * @public
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
   * <p>Contains information about the agent and session, alongside the agent's reasoning process and results from calling API actions and querying knowledge bases and metadata about the trace. You can use the trace to understand how the agent arrived at the response it provided the customer. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/trace-events.html">Trace events</a>.</p>
   * @public
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
   * <p>An internal server error occurred. Retry your request.</p>
   * @public
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
   * <p>Input validation failed. Check your request parameters and retry the request.</p>
   * @public
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
   * <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
   * @public
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
   * <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
   * @public
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
   * <p>The number of requests exceeds the limit. Resubmit your request later.</p>
   * @public
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
   * <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
   * @public
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
   * <p>There was a conflict performing an operation. Resolve the conflict and retry your request.</p>
   * @public
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
   * <p>There was an issue with a dependency. Check the resource configurations and retry the request.</p>
   * @public
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
   * <p>There was an issue with a dependency due to a server issue. Retry your request.</p>
   * @public
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
   * <p>The agent's response to the user prompt.</p>
   * @public
   */
  completion: AsyncIterable<ResponseStream> | undefined;

  /**
   * <p>The MIME type of the input data in the request. The default value is <code>application/json</code>.</p>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The unique identifier of the session with the agent.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * <p>Contains the query made to the knowledge base.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>input</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface RetrieveAndGenerateInput {
  /**
   * <p>The query made to the knowledge base.</p>
   * @public
   */
  text: string | undefined;
}

/**
 * <p>Contains the template for the prompt that's sent to the model for response generation. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html#kb-test-config-sysprompt">Knowledge base prompt templates</a>.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>filter</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface PromptTemplate {
  /**
   * <p>The template for the prompt that's sent to the model for response generation. You can include prompt placeholders, which become replaced before the prompt is sent to the model to provide instructions and context to the model. In addition, you can include XML tags to delineate meaningful sections of the prompt template.</p>
   *          <p>For more information, see the following resources:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html#kb-test-config-sysprompt">Knowledge base prompt templates</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.anthropic.com/claude/docs/use-xml-tags">Use XML tags with Anthropic Claude models</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  textPromptTemplate?: string;
}

/**
 * <p>Contains configurations for response generation based on the knowledge base query results.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface GenerationConfiguration {
  /**
   * <p>Contains the template for the prompt that's sent to the model for response generation.</p>
   * @public
   */
  promptTemplate?: PromptTemplate;
}

/**
 * <p>Specifies the name that the metadata attribute must match and the value to which to compare the value of the metadata attribute. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface FilterAttribute {
  /**
   * <p>The name that the metadata attribute must match.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value to whcih to compare the value of the metadata attribute.</p>
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
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
} as const;

/**
 * @public
 */
export type RetrieveAndGenerateType = (typeof RetrieveAndGenerateType)[keyof typeof RetrieveAndGenerateType];

/**
 * <p>Contains configuration about the session with the knowledge base.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>sessionConfiguration</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface RetrieveAndGenerateSessionConfiguration {
  /**
   * <p>The ARN of the KMS key encrypting the session.</p>
   * @public
   */
  kmsKeyArn: string | undefined;
}

/**
 * <p>Contains the response generated from querying the knowledge base.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_ResponseSyntax">RetrieveAndGenerate response</a> – in the <code>output</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface RetrieveAndGenerateOutput {
  /**
   * <p>The response generated from querying the knowledge base.</p>
   * @public
   */
  text: string | undefined;
}

/**
 * @public
 */
export interface RetrieveAndGenerateResponse {
  /**
   * <p>The unique identifier of the session. Reuse the same value to continue the same session with the knowledge base.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>Contains the response generated from querying the knowledge base.</p>
   * @public
   */
  output: RetrieveAndGenerateOutput | undefined;

  /**
   * <p>A list of segments of the generated response that are based on sources in the knowledge base, alongside information about the sources.</p>
   * @public
   */
  citations?: Citation[];
}

/**
 * <p>Contains the query made to the knowledge base.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax">Retrieve request</a> – in the <code>retrievalQuery</code> field</p>
 *             </li>
 *          </ul>
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
 * <p>Details about a result from querying the knowledge base.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_ResponseSyntax">Retrieve response</a> – in the <code>retrievalResults</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface KnowledgeBaseRetrievalResult {
  /**
   * <p>Contains a chunk of text from a data source in the knowledge base.</p>
   * @public
   */
  content: RetrievalResultContent | undefined;

  /**
   * <p>Contains information about the location of the data source.</p>
   * @public
   */
  location?: RetrievalResultLocation;

  /**
   * <p>The level of relevance of the result to the query.</p>
   * @public
   */
  score?: number;

  /**
   * <p>Contains metadata attributes and their values for the file in the data source. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-ds.html#kb-ds-metadata">Metadata and filtering</a>.</p>
   * @public
   */
  metadata?: Record<string, __DocumentType>;
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
   * <p>If there are more results than can fit in the response, the response returns a <code>nextToken</code>. Use this token in the <code>nextToken</code> field of another request to retrieve the next batch of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Specifies the filters to use on the metadata attributes in the knowledge base data sources before returning results. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax">Retrieve request</a> – in the <code>filter</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>filter</code> field</p>
 *             </li>
 *          </ul>
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
  | RetrievalFilter.NotEqualsMember
  | RetrievalFilter.NotInMember
  | RetrievalFilter.OrAllMember
  | RetrievalFilter.StartsWithMember
  | RetrievalFilter.$UnknownMember;

/**
 * @public
 */
export namespace RetrievalFilter {
  /**
   * <p>Knowledge base data sources that contain a metadata attribute whose name matches the <code>key</code> and whose value matches the <code>value</code> in this object are returned.</p>
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
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources that contain a metadata attribute whose name matches the <code>key</code> and whose value doesn't match the <code>value</code> in this object are returned.</p>
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
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources that contain a metadata attribute whose name matches the <code>key</code> and whose value is greater than the <code>value</code> in this object are returned.</p>
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
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources that contain a metadata attribute whose name matches the <code>key</code> and whose value is greater than or equal to the <code>value</code> in this object are returned.</p>
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
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources that contain a metadata attribute whose name matches the <code>key</code> and whose value is less than the <code>value</code> in this object are returned.</p>
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
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources that contain a metadata attribute whose name matches the <code>key</code> and whose value is less than or equal to the <code>value</code> in this object are returned.</p>
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
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources that contain a metadata attribute whose name matches the <code>key</code> and whose value is in the list specified in the <code>value</code> in this object are returned.</p>
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
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources that contain a metadata attribute whose name matches the <code>key</code> and whose value isn't in the list specified in the <code>value</code> in this object are returned.</p>
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
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources that contain a metadata attribute whose name matches the <code>key</code> and whose value starts with the <code>value</code> in this object are returned. This filter is currently only supported for Amazon OpenSearch Serverless vector stores.</p>
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
    andAll?: never;
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources whose metadata attributes fulfill all the filter conditions inside this list are returned.</p>
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
    andAll: RetrievalFilter[];
    orAll?: never;
    $unknown?: never;
  }

  /**
   * <p>Knowledge base data sources whose metadata attributes fulfill at least one of the filter conditions inside this list are returned.</p>
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
    if (value.andAll !== undefined) return visitor.andAll(value.andAll);
    if (value.orAll !== undefined) return visitor.orAll(value.orAll);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Configurations for how to perform the search query and return results. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax">Retrieve request</a> – in the <code>vectorSearchConfiguration</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>vectorSearchConfiguration</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface KnowledgeBaseVectorSearchConfiguration {
  /**
   * <p>The number of source chunks to retrieve.</p>
   * @public
   */
  numberOfResults?: number;

  /**
   * <p>By default, Amazon Bedrock decides a search strategy for you. If you're using an Amazon OpenSearch Serverless vector store that contains a filterable text field, you can specify whether to query the knowledge base with a <code>HYBRID</code> search using both vector embeddings and raw text, or <code>SEMANTIC</code> search using only vector embeddings. For other vector store configurations, only <code>SEMANTIC</code> search is available. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-test.html">Test a knowledge base</a>.</p>
   * @public
   */
  overrideSearchType?: SearchType;

  /**
   * <p>Specifies the filters to use on the metadata in the knowledge base data sources before returning results. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p>
   * @public
   */
  filter?: RetrievalFilter;
}

/**
 * <p>Contains configurations for the knowledge base query and retrieval process. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax">Retrieve request</a> – in the <code>retrievalConfiguration</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>retrievalConfiguration</code> field</p>
 *             </li>
 *          </ul>
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
 * <p>Contains details about the resource being queried.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_Retrieve.html#API_agent-runtime_Retrieve_RequestSyntax">Retrieve request</a> – in the <code>knowledgeBaseConfiguration</code> field</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>knowledgeBaseConfiguration</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface KnowledgeBaseRetrieveAndGenerateConfiguration {
  /**
   * <p>The unique identifier of the knowledge base that is queried and the foundation model used for generation.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The ARN of the foundation model used to generate a response.</p>
   * @public
   */
  modelArn: string | undefined;

  /**
   * <p>Contains configurations for how to retrieve and return the knowledge base query.</p>
   * @public
   */
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration;

  /**
   * <p>Contains configurations for response generation based on the knowwledge base query results.</p>
   * @public
   */
  generationConfiguration?: GenerationConfiguration;
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
  retrievalConfiguration?: KnowledgeBaseRetrievalConfiguration;

  /**
   * <p>If there are more results than can fit in the response, the response returns a <code>nextToken</code>. Use this token in the <code>nextToken</code> field of another request to retrieve the next batch of results.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>Contains details about the resource being queried.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html#API_agent-runtime_RetrieveAndGenerate_RequestSyntax">RetrieveAndGenerate request</a> – in the <code>retrieveAndGenerateConfiguration</code> field</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface RetrieveAndGenerateConfiguration {
  /**
   * <p>The type of resource that is queried by the request.</p>
   * @public
   */
  type: RetrieveAndGenerateType | undefined;

  /**
   * <p>Contains details about the resource being queried.</p>
   * @public
   */
  knowledgeBaseConfiguration?: KnowledgeBaseRetrieveAndGenerateConfiguration;
}

/**
 * @public
 */
export interface RetrieveAndGenerateRequest {
  /**
   * <p>The unique identifier of the session. Reuse the same value to continue the same session with the knowledge base.</p>
   * @public
   */
  sessionId?: string;

  /**
   * <p>Contains the query to be made to the knowledge base.</p>
   * @public
   */
  input: RetrieveAndGenerateInput | undefined;

  /**
   * <p>Contains configurations for the knowledge base query and retrieval process. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html">Query configurations</a>.</p>
   * @public
   */
  retrieveAndGenerateConfiguration?: RetrieveAndGenerateConfiguration;

  /**
   * <p>Contains details about the session with the knowledge base.</p>
   * @public
   */
  sessionConfiguration?: RetrieveAndGenerateSessionConfiguration;
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
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
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
export const PromptTemplateFilterSensitiveLog = (obj: PromptTemplate): any => ({
  ...obj,
  ...(obj.textPromptTemplate && { textPromptTemplate: SENSITIVE_STRING }),
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
