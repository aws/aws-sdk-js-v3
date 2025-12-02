// smithy-typescript generated code
import { DocumentType as __DocumentType, StreamingBlobTypes } from "@smithy/types";

import {
  AutomationStreamStatus,
  BrowserSessionStatus,
  CodeInterpreterSessionStatus,
  ContentBlockType,
  ExtractionJobStatus,
  MemoryRecordStatus,
  Oauth2FlowType,
  OperatorType,
  ProgrammingLanguage,
  ResourceContentType,
  Role,
  SessionStatus,
  TaskStatus,
  ToolName,
} from "./enums";

import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "./errors";

/**
 * <p>Contains summary information about an actor in an AgentCore Memory resource.</p>
 * @public
 */
export interface ActorSummary {
  /**
   * <p>The unique identifier of the actor.</p>
   * @public
   */
  actorId: string | undefined;
}

/**
 * @public
 */
export interface GetAgentCardRequest {
  /**
   * <p>The session ID that the AgentCore Runtime agent is using. </p>
   * @public
   */
  runtimeSessionId?: string | undefined;

  /**
   * <p>The ARN of the AgentCore Runtime agent for which you want to get the A2A agent card.</p>
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * <p>Optional qualifier to specify an agent alias, such as <code>prod</code>code&gt; or <code>dev</code>. If you don't provide a value, the DEFAULT alias is used. </p>
   * @public
   */
  qualifier?: string | undefined;
}

/**
 * @public
 */
export interface GetAgentCardResponse {
  /**
   * <p>The ID of the session associated with the AgentCore Runtime agent.</p>
   * @public
   */
  runtimeSessionId?: string | undefined;

  /**
   * <p>An agent card document that contains metadata and capabilities for an AgentCore Runtime agent.</p>
   * @public
   */
  agentCard: __DocumentType | undefined;

  /**
   * <p>The status code of the request.</p>
   * @public
   */
  statusCode?: number | undefined;
}

/**
 * <p>Stores information about a field passed inside a request that resulted in an exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A message describing why this field failed validation.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface InvokeAgentRuntimeRequest {
  /**
   * <p>The MIME type of the input data in the payload. This tells the agent runtime how to interpret the payload data. Common values include application/json for JSON data.</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>The desired MIME type for the response from the agent runtime. This tells the agent runtime what format to use for the response data. Common values include application/json for JSON data.</p>
   * @public
   */
  accept?: string | undefined;

  /**
   * <p>The identifier of the MCP session.</p>
   * @public
   */
  mcpSessionId?: string | undefined;

  /**
   * <p>The identifier of the runtime session.</p>
   * @public
   */
  runtimeSessionId?: string | undefined;

  /**
   * <p>The version of the MCP protocol being used.</p>
   * @public
   */
  mcpProtocolVersion?: string | undefined;

  /**
   * <p>The identifier of the runtime user.</p>
   * @public
   */
  runtimeUserId?: string | undefined;

  /**
   * <p>The trace identifier for request tracking.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>The parent trace information for distributed tracing.</p>
   * @public
   */
  traceParent?: string | undefined;

  /**
   * <p>The trace state information for distributed tracing.</p>
   * @public
   */
  traceState?: string | undefined;

  /**
   * <p>Additional context information for distributed tracing.</p>
   * @public
   */
  baggage?: string | undefined;

  /**
   * <p>The Amazon Web Services Resource Name (ARN) of the agent runtime to invoke. The ARN uniquely identifies the agent runtime resource in Amazon Bedrock.</p>
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * <p>The qualifier to use for the agent runtime. This can be a version number or an endpoint name that points to a specific version. If not specified, Amazon Bedrock uses the default version of the agent runtime.</p>
   * @public
   */
  qualifier?: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account for the agent runtime resource.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The input data to send to the agent runtime. The format of this data depends on the specific agent configuration and must match the specified content type. For most agents, this is a JSON object containing the user's request.</p>
   * @public
   */
  payload: Uint8Array | undefined;
}

/**
 * @public
 */
export interface InvokeAgentRuntimeResponse {
  /**
   * <p>The identifier of the runtime session.</p>
   * @public
   */
  runtimeSessionId?: string | undefined;

  /**
   * <p>The identifier of the MCP session.</p>
   * @public
   */
  mcpSessionId?: string | undefined;

  /**
   * <p>The version of the MCP protocol being used.</p>
   * @public
   */
  mcpProtocolVersion?: string | undefined;

  /**
   * <p>The trace identifier for request tracking.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>The parent trace information for distributed tracing.</p>
   * @public
   */
  traceParent?: string | undefined;

  /**
   * <p>The trace state information for distributed tracing.</p>
   * @public
   */
  traceState?: string | undefined;

  /**
   * <p>Additional context information for distributed tracing.</p>
   * @public
   */
  baggage?: string | undefined;

  /**
   * <p>The MIME type of the response data. This indicates how to interpret the response data. Common values include application/json for JSON data.</p>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The response data from the agent runtime. The format of this data depends on the specific agent configuration and the requested accept type. For most agents, this is a JSON object containing the agent's response to the user's request.</p>
   * @public
   */
  response?: StreamingBlobTypes | undefined;

  /**
   * <p>The HTTP status code of the response. A status code of 200 indicates a successful operation. Other status codes indicate various error conditions.</p>
   * @public
   */
  statusCode?: number | undefined;
}

/**
 * @public
 */
export interface StopRuntimeSessionRequest {
  /**
   * <p>The ID of the session that you want to stop.</p>
   * @public
   */
  runtimeSessionId: string | undefined;

  /**
   * <p>The ARN of the agent that contains the session that you want to stop.</p>
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * <p>Optional qualifier to specify an agent alias, such as <code>prod</code>code&gt; or <code>dev</code>. If you don't provide a value, the DEFAULT alias is used. </p>
   * @public
   */
  qualifier?: string | undefined;

  /**
   * <p>Idempotent token used to identify the request. If you use the same token with multiple requests, the same response is returned. Use ClientToken to prevent the same request from being processed more than once.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StopRuntimeSessionResponse {
  /**
   * <p>The ID of the session that you requested to stop.</p>
   * @public
   */
  runtimeSessionId?: string | undefined;

  /**
   * <p>The status code of the request to stop the session.</p>
   * @public
   */
  statusCode?: number | undefined;
}

/**
 * @public
 */
export interface GetBrowserSessionRequest {
  /**
   * <p>The unique identifier of the browser associated with the session.</p>
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the browser session to retrieve.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * <p>The configuration for a stream that enables programmatic control of a browser session in Amazon Bedrock. This stream provides a bidirectional communication channel for sending commands to the browser and receiving responses, allowing agents to automate web interactions such as navigation, form filling, and element clicking.</p>
 * @public
 */
export interface AutomationStream {
  /**
   * <p>The endpoint URL for the automation stream. This URL is used to establish a WebSocket connection to the stream for sending commands and receiving responses.</p>
   * @public
   */
  streamEndpoint: string | undefined;

  /**
   * <p>The current status of the automation stream. This indicates whether the stream is available for use. Possible values include ACTIVE, CONNECTING, and DISCONNECTED.</p>
   * @public
   */
  streamStatus: AutomationStreamStatus | undefined;
}

/**
 * <p>The configuration for a stream that provides a visual representation of a browser session in Amazon Bedrock. This stream enables agents to observe the current state of the browser, including rendered web pages, visual elements, and the results of interactions.</p>
 * @public
 */
export interface LiveViewStream {
  /**
   * <p>The endpoint URL for the live view stream. This URL is used to establish a connection to receive visual updates from the browser session.</p>
   * @public
   */
  streamEndpoint?: string | undefined;
}

/**
 * <p>The collection of streams associated with a browser session in Amazon Bedrock. These streams provide different ways to interact with and observe the browser session, including programmatic control and visual representation of the browser content.</p>
 * @public
 */
export interface BrowserSessionStream {
  /**
   * <p>The stream that enables programmatic control of the browser. This stream allows agents to perform actions such as navigating to URLs, clicking elements, and filling forms.</p>
   * @public
   */
  automationStream: AutomationStream | undefined;

  /**
   * <p>The stream that provides a visual representation of the browser content. This stream allows agents to observe the current state of the browser, including rendered web pages and visual elements.</p>
   * @public
   */
  liveViewStream?: LiveViewStream | undefined;
}

/**
 * <p>The configuration that defines the dimensions of a browser viewport in a browser session. The viewport determines the visible area of web content and affects how web pages are rendered and displayed. Proper viewport configuration ensures that web content is displayed correctly for the agent's browsing tasks.</p>
 * @public
 */
export interface ViewPort {
  /**
   * <p>The width of the viewport in pixels. This value determines the horizontal dimension of the visible area. Valid values range from 800 to 1920 pixels.</p>
   * @public
   */
  width: number | undefined;

  /**
   * <p>The height of the viewport in pixels. This value determines the vertical dimension of the visible area. Valid values range from 600 to 1080 pixels.</p>
   * @public
   */
  height: number | undefined;
}

/**
 * @public
 */
export interface GetBrowserSessionResponse {
  /**
   * <p>The identifier of the browser.</p>
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * <p>The identifier of the browser session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The name of the browser session.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The time at which the browser session was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The configuration that defines the dimensions of a browser viewport in a browser session. The viewport determines the visible area of web content and affects how web pages are rendered and displayed. Proper viewport configuration ensures that web content is displayed correctly for the agent's browsing tasks.</p>
   * @public
   */
  viewPort?: ViewPort | undefined;

  /**
   * <p>The timeout period for the browser session in seconds.</p>
   * @public
   */
  sessionTimeoutSeconds?: number | undefined;

  /**
   * <p>The current status of the browser session. Possible values include ACTIVE, STOPPING, and STOPPED.</p>
   * @public
   */
  status?: BrowserSessionStatus | undefined;

  /**
   * <p>The streams associated with this browser session. These include the automation stream and live view stream.</p>
   * @public
   */
  streams?: BrowserSessionStream | undefined;

  /**
   * <p>The artifact containing the session replay information.</p>
   * @public
   */
  sessionReplayArtifact?: string | undefined;

  /**
   * <p>The time at which the browser session was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListBrowserSessionsRequest {
  /**
   * <p>The unique identifier of the browser to list sessions for. If specified, only sessions for this browser are returned. If not specified, sessions for all browsers are returned.</p>
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 10. Valid values range from 1 to 100. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. If not specified, Amazon Bedrock returns the first page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The status of the browser sessions to list. Valid values include ACTIVE, STOPPING, and STOPPED. If not specified, sessions with any status are returned.</p>
   * @public
   */
  status?: BrowserSessionStatus | undefined;
}

/**
 * <p>A condensed representation of a browser session in Amazon Bedrock. This structure contains key information about a browser session, including identifiers, status, and timestamps, without the full details of the session configuration and streams.</p>
 * @public
 */
export interface BrowserSessionSummary {
  /**
   * <p>The unique identifier of the browser associated with the session. This identifier specifies which browser environment is used for the session.</p>
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the browser session. This identifier is used in operations that interact with the session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The name of the browser session. This name helps identify and manage the session.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The current status of the browser session. Possible values include ACTIVE, STOPPING, and STOPPED.</p>
   * @public
   */
  status: BrowserSessionStatus | undefined;

  /**
   * <p>The timestamp when the browser session was created. This value is in ISO 8601 format.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the browser session was last updated. This value is in ISO 8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListBrowserSessionsResponse {
  /**
   * <p>The list of browser sessions that match the specified criteria.</p>
   * @public
   */
  items: BrowserSessionSummary[] | undefined;

  /**
   * <p>The token to use in a subsequent <code>ListBrowserSessions</code> request to get the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartBrowserSessionRequest {
  /**
   * <p>The trace identifier for request tracking.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>The parent trace information for distributed tracing.</p>
   * @public
   */
  traceParent?: string | undefined;

  /**
   * <p>The unique identifier of the browser to use for this session. This identifier specifies which browser environment to initialize for the session.</p>
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * <p>The name of the browser session. This name helps you identify and manage the session. The name does not need to be unique.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The time in seconds after which the session automatically terminates if there is no activity. The default value is 3600 seconds (1 hour). The minimum allowed value is 60 seconds, and the maximum allowed value is 28800 seconds (8 hours).</p>
   * @public
   */
  sessionTimeoutSeconds?: number | undefined;

  /**
   * <p>The dimensions of the browser viewport for this session. This determines the visible area of the web content and affects how web pages are rendered. If not specified, Amazon Bedrock uses a default viewport size.</p>
   * @public
   */
  viewPort?: ViewPort | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. This parameter helps prevent the creation of duplicate sessions if there are temporary network issues.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartBrowserSessionResponse {
  /**
   * <p>The identifier of the browser.</p>
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the created browser session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The timestamp when the browser session was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The streams associated with this browser session. These include the automation stream and live view stream.</p>
   * @public
   */
  streams?: BrowserSessionStream | undefined;
}

/**
 * @public
 */
export interface StopBrowserSessionRequest {
  /**
   * <p>The trace identifier for request tracking.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>The parent trace information for distributed tracing.</p>
   * @public
   */
  traceParent?: string | undefined;

  /**
   * <p>The unique identifier of the browser associated with the session.</p>
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the browser session to stop.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StopBrowserSessionResponse {
  /**
   * <p>The identifier of the browser.</p>
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * <p>The identifier of the browser session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The time at which the browser session was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * <p>Contains information about an update to an automation stream.</p>
 * @public
 */
export interface AutomationStreamUpdate {
  /**
   * <p>The status of the automation stream.</p>
   * @public
   */
  streamStatus?: AutomationStreamStatus | undefined;
}

/**
 * <p>Contains information about an update to a stream.</p>
 * @public
 */
export type StreamUpdate = StreamUpdate.AutomationStreamUpdateMember | StreamUpdate.$UnknownMember;

/**
 * @public
 */
export namespace StreamUpdate {
  /**
   * <p>The update to an automation stream.</p>
   * @public
   */
  export interface AutomationStreamUpdateMember {
    automationStreamUpdate: AutomationStreamUpdate;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    automationStreamUpdate?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    automationStreamUpdate: (value: AutomationStreamUpdate) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface UpdateBrowserStreamRequest {
  /**
   * <p>The identifier of the browser.</p>
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * <p>The identifier of the browser session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The update to apply to the browser stream.</p>
   * @public
   */
  streamUpdate: StreamUpdate | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBrowserStreamResponse {
  /**
   * <p>The identifier of the browser.</p>
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * <p>The identifier of the browser session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The collection of streams associated with a browser session in Amazon Bedrock. These streams provide different ways to interact with and observe the browser session, including programmatic control and visual representation of the browser content.</p>
   * @public
   */
  streams: BrowserSessionStream | undefined;

  /**
   * <p>The time at which the browser stream was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetCodeInterpreterSessionRequest {
  /**
   * <p>The unique identifier of the code interpreter associated with the session.</p>
   * @public
   */
  codeInterpreterIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the code interpreter session to retrieve.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface GetCodeInterpreterSessionResponse {
  /**
   * <p>The identifier of the code interpreter.</p>
   * @public
   */
  codeInterpreterIdentifier: string | undefined;

  /**
   * <p>The identifier of the code interpreter session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The name of the code interpreter session.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The time at which the code interpreter session was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timeout period for the code interpreter session in seconds.</p>
   * @public
   */
  sessionTimeoutSeconds?: number | undefined;

  /**
   * <p>The current status of the code interpreter session. Possible values include ACTIVE, STOPPING, and STOPPED.</p>
   * @public
   */
  status?: CodeInterpreterSessionStatus | undefined;
}

/**
 * @public
 */
export interface ListCodeInterpreterSessionsRequest {
  /**
   * <p>The unique identifier of the code interpreter to list sessions for. If specified, only sessions for this code interpreter are returned. If not specified, sessions for all code interpreters are returned.</p>
   * @public
   */
  codeInterpreterIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 10. Valid values range from 1 to 100. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. If not specified, Amazon Bedrock returns the first page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The status of the code interpreter sessions to list. Valid values include ACTIVE, STOPPING, and STOPPED. If not specified, sessions with any status are returned.</p>
   * @public
   */
  status?: CodeInterpreterSessionStatus | undefined;
}

/**
 * <p>A condensed representation of a code interpreter session in Amazon Bedrock. This structure contains key information about a code interpreter session, including identifiers, status, and timestamps, without the full details of the session configuration.</p>
 * @public
 */
export interface CodeInterpreterSessionSummary {
  /**
   * <p>The unique identifier of the code interpreter associated with the session. This identifier specifies which code interpreter environment is used for the session.</p>
   * @public
   */
  codeInterpreterIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the code interpreter session. This identifier is used in operations that interact with the session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The name of the code interpreter session. This name helps identify and manage the session.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The current status of the code interpreter session. Possible values include ACTIVE, STOPPING, and STOPPED.</p>
   * @public
   */
  status: CodeInterpreterSessionStatus | undefined;

  /**
   * <p>The timestamp when the code interpreter session was created. This value is in ISO 8601 format.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the code interpreter session was last updated. This value is in ISO 8601 format.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListCodeInterpreterSessionsResponse {
  /**
   * <p>The list of code interpreter sessions that match the specified criteria.</p>
   * @public
   */
  items: CodeInterpreterSessionSummary[] | undefined;

  /**
   * <p>The token to use in a subsequent <code>ListCodeInterpreterSessions</code> request to get the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartCodeInterpreterSessionRequest {
  /**
   * <p>The trace identifier for request tracking.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>The parent trace information for distributed tracing.</p>
   * @public
   */
  traceParent?: string | undefined;

  /**
   * <p>The unique identifier of the code interpreter to use for this session. This identifier specifies which code interpreter environment to initialize for the session.</p>
   * @public
   */
  codeInterpreterIdentifier: string | undefined;

  /**
   * <p>The name of the code interpreter session. This name helps you identify and manage the session. The name does not need to be unique.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The time in seconds after which the session automatically terminates if there is no activity. The default value is 900 seconds (15 minutes). The minimum allowed value is 60 seconds, and the maximum allowed value is 28800 seconds (8 hours).</p>
   * @public
   */
  sessionTimeoutSeconds?: number | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error. This parameter helps prevent the creation of duplicate sessions if there are temporary network issues.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartCodeInterpreterSessionResponse {
  /**
   * <p>The identifier of the code interpreter.</p>
   * @public
   */
  codeInterpreterIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the created code interpreter session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The time at which the code interpreter session was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface StopCodeInterpreterSessionRequest {
  /**
   * <p>The trace identifier for request tracking.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>The parent trace information for distributed tracing.</p>
   * @public
   */
  traceParent?: string | undefined;

  /**
   * <p>The unique identifier of the code interpreter associated with the session.</p>
   * @public
   */
  codeInterpreterIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the code interpreter session to stop.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StopCodeInterpreterSessionResponse {
  /**
   * <p>The identifier of the code interpreter.</p>
   * @public
   */
  codeInterpreterIdentifier: string | undefined;

  /**
   * <p>The identifier of the code interpreter session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The timestamp when the code interpreter session was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * <p>The OAuth2.0 token or user ID that was used to generate the workload access token used for initiating the user authorization flow to retrieve OAuth2.0 tokens.</p>
 * @public
 */
export type UserIdentifier =
  | UserIdentifier.UserIdMember
  | UserIdentifier.UserTokenMember
  | UserIdentifier.$UnknownMember;

/**
 * @public
 */
export namespace UserIdentifier {
  /**
   * <p>The OAuth2.0 token issued by the user’s identity provider</p>
   * @public
   */
  export interface UserTokenMember {
    userToken: string;
    userId?: never;
    $unknown?: never;
  }

  /**
   * <p>The ID of the user for whom you have retrieved a workload access token for</p>
   * @public
   */
  export interface UserIdMember {
    userToken?: never;
    userId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    userToken?: never;
    userId?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    userToken: (value: string) => T;
    userId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CompleteResourceTokenAuthRequest {
  /**
   * <p>The OAuth2.0 token or user ID that was used to generate the workload access token used for initiating the user authorization flow to retrieve OAuth2.0 tokens.</p>
   * @public
   */
  userIdentifier: UserIdentifier | undefined;

  /**
   * <p>Unique identifier for the user's authentication session for retrieving OAuth2 tokens. This ID tracks the authorization flow state across multiple requests and responses during the OAuth2 authentication process.</p>
   * @public
   */
  sessionUri: string | undefined;
}

/**
 * @public
 */
export interface CompleteResourceTokenAuthResponse {}

/**
 * <p> The input data structure containing agent session spans in OpenTelemetry format. Supports traces from frameworks like Strands (AgentCore Runtime) and LangGraph with OpenInference instrumentation for comprehensive evaluation. </p>
 * @public
 */
export type EvaluationInput = EvaluationInput.SessionSpansMember | EvaluationInput.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationInput {
  /**
   * <p> The collection of spans representing agent execution traces within a session. Each span contains detailed information about tool calls, model interactions, and other agent activities that can be evaluated for quality and performance. </p>
   * @public
   */
  export interface SessionSpansMember {
    sessionSpans: __DocumentType[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sessionSpans?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    sessionSpans: (value: __DocumentType[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p> The specification of which trace or span IDs to evaluate within the provided input data. Allows precise targeting of evaluation at different levels: tool calls, traces, or sessions. </p>
 * @public
 */
export type EvaluationTarget =
  | EvaluationTarget.SpanIdsMember
  | EvaluationTarget.TraceIdsMember
  | EvaluationTarget.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationTarget {
  /**
   * <p> The list of specific span IDs to evaluate within the provided traces. Used to target evaluation at individual tool calls or specific operations within the agent's execution flow. </p>
   * @public
   */
  export interface SpanIdsMember {
    spanIds: string[];
    traceIds?: never;
    $unknown?: never;
  }

  /**
   * <p> The list of trace IDs to evaluate, representing complete request-response interactions. Used to evaluate entire conversation turns or specific agent interactions within a session. </p>
   * @public
   */
  export interface TraceIdsMember {
    spanIds?: never;
    traceIds: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    spanIds?: never;
    traceIds?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    spanIds: (value: string[]) => T;
    traceIds: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface EvaluateRequest {
  /**
   * <p> The unique identifier of the evaluator to use for scoring. Can be a built-in evaluator (e.g., <code>Builtin.Helpfulness</code>, <code>Builtin.Correctness</code>) or a custom evaluator ARN created through the control plane API. </p>
   * @public
   */
  evaluatorId: string | undefined;

  /**
   * <p> The input data containing agent session spans to be evaluated. Includes a list of spans in OpenTelemetry format from supported frameworks like Strands (AgentCore Runtime) or LangGraph with OpenInference instrumentation. </p>
   * @public
   */
  evaluationInput: EvaluationInput | undefined;

  /**
   * <p> The specific trace or span IDs to evaluate within the provided input. Allows targeting evaluation at different levels: individual tool calls, single request-response interactions (traces), or entire conversation sessions. </p>
   * @public
   */
  evaluationTarget?: EvaluationTarget | undefined;
}

/**
 * <p> The contextual information that uniquely identifies a span within the distributed tracing system. Contains session, trace, and span identifiers used to correlate evaluation results with specific agent execution points. </p>
 * @public
 */
export interface SpanContext {
  /**
   * <p> The unique identifier of the session containing this span. Sessions represent complete conversation flows and are detected using configurable <code>SessionTimeoutMinutes</code> (default 15 minutes). </p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p> The unique identifier of the trace containing this span. Traces represent individual request-response interactions within a session and group related spans together. </p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p> The unique identifier of the specific span being referenced. Spans represent individual operations like tool calls, model invocations, or other discrete actions within the agent's execution. </p>
   * @public
   */
  spanId?: string | undefined;
}

/**
 * <p> The contextual information associated with an evaluation, including span context details that identify the specific traces and sessions being evaluated within the agent's execution flow. </p>
 * @public
 */
export type Context = Context.SpanContextMember | Context.$UnknownMember;

/**
 * @public
 */
export namespace Context {
  /**
   * <p> The span context information that uniquely identifies the trace and span being evaluated, including session ID, trace ID, and span ID for precise targeting within the agent's execution flow. </p>
   * @public
   */
  export interface SpanContextMember {
    spanContext: SpanContext;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    spanContext?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    spanContext: (value: SpanContext) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p> The token consumption statistics for language model operations during evaluation. Provides detailed breakdown of input, output, and total tokens used for cost tracking and performance monitoring. </p>
 * @public
 */
export interface TokenUsage {
  /**
   * <p> The number of tokens consumed for input processing during the evaluation. Includes tokens from the evaluation prompt, agent traces, and any additional context provided to the evaluator model. </p>
   * @public
   */
  inputTokens?: number | undefined;

  /**
   * <p> The number of tokens generated by the evaluator model in its response. Includes tokens for the score, explanation, and any additional output produced during the evaluation process. </p>
   * @public
   */
  outputTokens?: number | undefined;

  /**
   * <p> The total number of tokens consumed during the evaluation, calculated as the sum of input and output tokens. Used for cost calculation and rate limiting within the service limits. </p>
   * @public
   */
  totalTokens?: number | undefined;
}

/**
 * <p> The comprehensive result of an evaluation containing the score, explanation, evaluator metadata, and execution details. Provides both quantitative ratings and qualitative insights about agent performance. </p>
 * @public
 */
export interface EvaluationResultContent {
  /**
   * <p> The Amazon Resource Name (ARN) of the evaluator used to generate this result. For custom evaluators, this is the full ARN; for built-in evaluators, this follows the pattern <code>Builtin.\{EvaluatorName\}</code>. </p>
   * @public
   */
  evaluatorArn: string | undefined;

  /**
   * <p> The unique identifier of the evaluator that produced this result. This matches the <code>evaluatorId</code> provided in the evaluation request and can be used to identify which evaluator generated specific results. </p>
   * @public
   */
  evaluatorId: string | undefined;

  /**
   * <p> The human-readable name of the evaluator used for this evaluation. For built-in evaluators, this is the descriptive name (e.g., "Helpfulness", "Correctness"); for custom evaluators, this is the user-defined name. </p>
   * @public
   */
  evaluatorName: string | undefined;

  /**
   * <p> The detailed explanation provided by the evaluator describing the reasoning behind the assigned score. This qualitative feedback helps understand why specific ratings were given and provides actionable insights for improvement. </p>
   * @public
   */
  explanation?: string | undefined;

  /**
   * <p> The contextual information associated with this evaluation result, including span context details that identify the specific traces and sessions that were evaluated. </p>
   * @public
   */
  context: Context | undefined;

  /**
   * <p> The numerical score assigned by the evaluator according to its configured rating scale. For numerical scales, this is a decimal value within the defined range. This field is not allowed for categorical scales. </p>
   * @public
   */
  value?: number | undefined;

  /**
   * <p> The categorical label assigned by the evaluator when using a categorical rating scale. This provides a human-readable description of the evaluation result (e.g., "Excellent", "Good", "Poor") corresponding to the numerical value. For numerical scales, this field is optional and provides a natural language explanation of what the value means (e.g., value 0.5 = "Somewhat Helpful"). </p>
   * @public
   */
  label?: string | undefined;

  /**
   * <p> The token consumption statistics for this evaluation, including input tokens, output tokens, and total tokens used by the underlying language model during the evaluation process. </p>
   * @public
   */
  tokenUsage?: TokenUsage | undefined;

  /**
   * <p> The error message describing what went wrong if the evaluation failed. Provides detailed information about evaluation failures to help diagnose and resolve issues with evaluator configuration or input data. </p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p> The error code indicating the type of failure that occurred during evaluation. Used to programmatically identify and handle different categories of evaluation errors. </p>
   * @public
   */
  errorCode?: string | undefined;
}

/**
 * @public
 */
export interface EvaluateResponse {
  /**
   * <p> The detailed evaluation results containing scores, explanations, and metadata. Includes the evaluator information, numerical or categorical ratings based on the evaluator's rating scale, and token usage statistics for the evaluation process. </p>
   * @public
   */
  evaluationResults: EvaluationResultContent[] | undefined;
}

/**
 * @public
 */
export interface GetResourceApiKeyRequest {
  /**
   * <p>The identity token of the workload from which you want to retrieve the API key.</p>
   * @public
   */
  workloadIdentityToken: string | undefined;

  /**
   * <p>The credential provider name for the resource from which you are retrieving the API key.</p>
   * @public
   */
  resourceCredentialProviderName: string | undefined;
}

/**
 * @public
 */
export interface GetResourceApiKeyResponse {
  /**
   * <p>The API key associated with the resource requested.</p>
   * @public
   */
  apiKey: string | undefined;
}

/**
 * @public
 */
export interface GetResourceOauth2TokenRequest {
  /**
   * <p>The identity token of the workload from which you want to retrieve the OAuth2 token.</p>
   * @public
   */
  workloadIdentityToken: string | undefined;

  /**
   * <p>The name of the resource's credential provider.</p>
   * @public
   */
  resourceCredentialProviderName: string | undefined;

  /**
   * <p>The OAuth scopes being requested.</p>
   * @public
   */
  scopes: string[] | undefined;

  /**
   * <p>The type of flow to be performed.</p>
   * @public
   */
  oauth2Flow: Oauth2FlowType | undefined;

  /**
   * <p>Unique identifier for the user's authentication session for retrieving OAuth2 tokens. This ID tracks the authorization flow state across multiple requests and responses during the OAuth2 authentication process.</p>
   * @public
   */
  sessionUri?: string | undefined;

  /**
   * <p>The callback URL to redirect to after the OAuth 2.0 token retrieval is complete. This URL must be one of the provided URLs configured for the workload identity.</p>
   * @public
   */
  resourceOauth2ReturnUrl?: string | undefined;

  /**
   * <p>Indicates whether to always initiate a new three-legged OAuth (3LO) flow, regardless of any existing session.</p>
   * @public
   */
  forceAuthentication?: boolean | undefined;

  /**
   * <p>A map of custom parameters to include in the authorization request to the resource credential provider. These parameters are in addition to the standard OAuth 2.0 flow parameters, and will not override them.</p>
   * @public
   */
  customParameters?: Record<string, string> | undefined;

  /**
   * <p>An opaque string that will be sent back to the callback URL provided in resourceOauth2ReturnUrl. This state should be used to protect the callback URL of your application against CSRF attacks by ensuring the response corresponds to the original request.</p>
   * @public
   */
  customState?: string | undefined;
}

/**
 * @public
 */
export interface GetResourceOauth2TokenResponse {
  /**
   * <p>The URL to initiate the authorization process, provided when the access token requires user authorization.</p>
   * @public
   */
  authorizationUrl?: string | undefined;

  /**
   * <p>The OAuth 2.0 access token to use.</p>
   * @public
   */
  accessToken?: string | undefined;

  /**
   * <p>Unique identifier for the user's authorization session for retrieving OAuth2 tokens. This matches the sessionId from the request and can be used to track the session state.</p>
   * @public
   */
  sessionUri?: string | undefined;

  /**
   * <p>Status indicating whether the user's authorization session is in progress or has failed. This helps determine the next steps in the OAuth2 authentication flow.</p>
   * @public
   */
  sessionStatus?: SessionStatus | undefined;
}

/**
 * @public
 */
export interface GetWorkloadAccessTokenRequest {
  /**
   * <p>The unique identifier for the registered workload.</p>
   * @public
   */
  workloadName: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadAccessTokenResponse {
  /**
   * <p>An opaque token representing the identity of both the workload and the user.</p>
   * @public
   */
  workloadAccessToken: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadAccessTokenForJWTRequest {
  /**
   * <p>The unique identifier for the registered workload.</p>
   * @public
   */
  workloadName: string | undefined;

  /**
   * <p>The OAuth 2.0 token issued by the user's identity provider.</p>
   * @public
   */
  userToken: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadAccessTokenForJWTResponse {
  /**
   * <p>An opaque token representing the identity of both the workload and the user.</p>
   * @public
   */
  workloadAccessToken: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadAccessTokenForUserIdRequest {
  /**
   * <p>The name of the workload from which you want to retrieve the access token.</p>
   * @public
   */
  workloadName: string | undefined;

  /**
   * <p>The ID of the user for whom you are retrieving the access token.</p>
   * @public
   */
  userId: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadAccessTokenForUserIdResponse {
  /**
   * <p>The access token for the specified workload.</p>
   * @public
   */
  workloadAccessToken: string | undefined;
}

/**
 * <p>A block of input content.</p>
 * @public
 */
export interface InputContentBlock {
  /**
   * <p>The path to the input content.</p>
   * @public
   */
  path: string | undefined;

  /**
   * <p>The text input content.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>The binary input content.</p>
   * @public
   */
  blob?: Uint8Array | undefined;
}

/**
 * <p>The collection of arguments that specify the operation to perform and its parameters when invoking a tool in Amazon Bedrock. Different tools require different arguments, and this structure provides a flexible way to pass the appropriate arguments to each tool type.</p>
 * @public
 */
export interface ToolArguments {
  /**
   * <p>The code to execute in a code interpreter session. This is the source code in the specified programming language that will be executed by the code interpreter.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>The programming language of the code to execute. This tells the code interpreter which language runtime to use for execution. Common values include 'python', 'javascript', and 'r'.</p>
   * @public
   */
  language?: ProgrammingLanguage | undefined;

  /**
   * <p>Whether to clear the context for the tool.</p>
   * @public
   */
  clearContext?: boolean | undefined;

  /**
   * <p>The command to execute with the tool.</p>
   * @public
   */
  command?: string | undefined;

  /**
   * <p>The path for the tool operation.</p>
   * @public
   */
  path?: string | undefined;

  /**
   * <p>The paths for the tool operation.</p>
   * @public
   */
  paths?: string[] | undefined;

  /**
   * <p>The content for the tool operation.</p>
   * @public
   */
  content?: InputContentBlock[] | undefined;

  /**
   * <p>The directory path for the tool operation.</p>
   * @public
   */
  directoryPath?: string | undefined;

  /**
   * <p>The identifier of the task for the tool operation.</p>
   * @public
   */
  taskId?: string | undefined;
}

/**
 * @public
 */
export interface InvokeCodeInterpreterRequest {
  /**
   * <p>The unique identifier of the code interpreter associated with the session. This must match the identifier used when creating the session with <code>StartCodeInterpreterSession</code>.</p>
   * @public
   */
  codeInterpreterIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the code interpreter session to use. This must be an active session created with <code>StartCodeInterpreterSession</code>. If the session has expired or been stopped, the request will fail.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The trace identifier for request tracking.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>The parent trace information for distributed tracing.</p>
   * @public
   */
  traceParent?: string | undefined;

  /**
   * <p>The name of the code interpreter to invoke.</p>
   * @public
   */
  name: ToolName | undefined;

  /**
   * <p>The arguments for the code interpreter. This includes the code to execute and any additional parameters such as the programming language, whether to clear the execution context, and other execution options. The structure of this parameter depends on the specific code interpreter being used.</p>
   * @public
   */
  arguments?: ToolArguments | undefined;
}

/**
 * <p>Contains information about resource content.</p>
 * @public
 */
export interface ResourceContent {
  /**
   * <p>The type of resource content.</p>
   * @public
   */
  type: ResourceContentType | undefined;

  /**
   * <p>The URI of the resource content.</p>
   * @public
   */
  uri?: string | undefined;

  /**
   * <p>The MIME type of the resource content.</p>
   * @public
   */
  mimeType?: string | undefined;

  /**
   * <p>The text resource content.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>The binary resource content.</p>
   * @public
   */
  blob?: Uint8Array | undefined;
}

/**
 * <p>A block of content in a response.</p>
 * @public
 */
export interface ContentBlock {
  /**
   * <p>The type of content in the block.</p>
   * @public
   */
  type: ContentBlockType | undefined;

  /**
   * <p>The text content of the block.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>The binary data content of the block.</p>
   * @public
   */
  data?: Uint8Array | undefined;

  /**
   * <p>The MIME type of the content.</p>
   * @public
   */
  mimeType?: string | undefined;

  /**
   * <p>The URI of the content.</p>
   * @public
   */
  uri?: string | undefined;

  /**
   * <p>The name of the content block.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the content block.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The size of the content in bytes.</p>
   * @public
   */
  size?: number | undefined;

  /**
   * <p>The resource associated with the content block.</p>
   * @public
   */
  resource?: ResourceContent | undefined;
}

/**
 * <p>Contains structured content from a tool result.</p>
 * @public
 */
export interface ToolResultStructuredContent {
  /**
   * <p>The identifier of the task that produced the result.</p>
   * @public
   */
  taskId?: string | undefined;

  /**
   * <p>The status of the task that produced the result.</p>
   * @public
   */
  taskStatus?: TaskStatus | undefined;

  /**
   * <p>The standard output from the tool execution.</p>
   * @public
   */
  stdout?: string | undefined;

  /**
   * <p>The standard error output from the tool execution.</p>
   * @public
   */
  stderr?: string | undefined;

  /**
   * <p>The exit code from the tool execution.</p>
   * @public
   */
  exitCode?: number | undefined;

  /**
   * <p>The execution time of the tool operation in milliseconds.</p>
   * @public
   */
  executionTime?: number | undefined;
}

/**
 * <p>The output produced by executing code in a code interpreter session in Amazon Bedrock. This structure contains the results of code execution, including textual output, structured data, and error information. Agents use these results to generate responses that incorporate computation, data analysis, and visualization.</p>
 * @public
 */
export interface CodeInterpreterResult {
  /**
   * <p>The textual content of the execution result. This includes standard output from the code execution, such as print statements, console output, and text representations of results.</p>
   * @public
   */
  content: ContentBlock[] | undefined;

  /**
   * <p>The structured content of the execution result. This includes additional metadata about the execution, such as execution time, memory usage, and structured representations of output data. The format depends on the specific code interpreter and execution context.</p>
   * @public
   */
  structuredContent?: ToolResultStructuredContent | undefined;

  /**
   * <p>Indicates whether the result represents an error. If true, the content contains error messages or exception information. If false, the content contains successful execution results.</p>
   * @public
   */
  isError?: boolean | undefined;
}

/**
 * <p>Contains output from a code interpreter stream.</p>
 * @public
 */
export type CodeInterpreterStreamOutput =
  | CodeInterpreterStreamOutput.AccessDeniedExceptionMember
  | CodeInterpreterStreamOutput.ConflictExceptionMember
  | CodeInterpreterStreamOutput.InternalServerExceptionMember
  | CodeInterpreterStreamOutput.ResourceNotFoundExceptionMember
  | CodeInterpreterStreamOutput.ResultMember
  | CodeInterpreterStreamOutput.ServiceQuotaExceededExceptionMember
  | CodeInterpreterStreamOutput.ThrottlingExceptionMember
  | CodeInterpreterStreamOutput.ValidationExceptionMember
  | CodeInterpreterStreamOutput.$UnknownMember;

/**
 * @public
 */
export namespace CodeInterpreterStreamOutput {
  /**
   * <p>The output produced by executing code in a code interpreter session in Amazon Bedrock. This structure contains the results of code execution, including textual output, structured data, and error information. Agents use these results to generate responses that incorporate computation, data analysis, and visualization.</p>
   * @public
   */
  export interface ResultMember {
    result: CodeInterpreterResult;
    accessDeniedException?: never;
    conflictException?: never;
    internalServerException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    validationException?: never;
    $unknown?: never;
  }

  /**
   * <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
   * @public
   */
  export interface AccessDeniedExceptionMember {
    result?: never;
    accessDeniedException: AccessDeniedException;
    conflictException?: never;
    internalServerException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    validationException?: never;
    $unknown?: never;
  }

  /**
   * <p>The exception that occurs when the request conflicts with the current state of the resource. This can happen when trying to modify a resource that is currently being modified by another request, or when trying to create a resource that already exists.</p>
   * @public
   */
  export interface ConflictExceptionMember {
    result?: never;
    accessDeniedException?: never;
    conflictException: ConflictException;
    internalServerException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    validationException?: never;
    $unknown?: never;
  }

  /**
   * <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
   * @public
   */
  export interface InternalServerExceptionMember {
    result?: never;
    accessDeniedException?: never;
    conflictException?: never;
    internalServerException: InternalServerException;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    validationException?: never;
    $unknown?: never;
  }

  /**
   * <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
   * @public
   */
  export interface ResourceNotFoundExceptionMember {
    result?: never;
    accessDeniedException?: never;
    conflictException?: never;
    internalServerException?: never;
    resourceNotFoundException: ResourceNotFoundException;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    validationException?: never;
    $unknown?: never;
  }

  /**
   * <p>The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.</p>
   * @public
   */
  export interface ServiceQuotaExceededExceptionMember {
    result?: never;
    accessDeniedException?: never;
    conflictException?: never;
    internalServerException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException: ServiceQuotaExceededException;
    throttlingException?: never;
    validationException?: never;
    $unknown?: never;
  }

  /**
   * <p>The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.</p>
   * @public
   */
  export interface ThrottlingExceptionMember {
    result?: never;
    accessDeniedException?: never;
    conflictException?: never;
    internalServerException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException: ThrottlingException;
    validationException?: never;
    $unknown?: never;
  }

  /**
   * <p>The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.</p>
   * @public
   */
  export interface ValidationExceptionMember {
    result?: never;
    accessDeniedException?: never;
    conflictException?: never;
    internalServerException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    validationException: ValidationException;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    result?: never;
    accessDeniedException?: never;
    conflictException?: never;
    internalServerException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    validationException?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    result: (value: CodeInterpreterResult) => T;
    accessDeniedException: (value: AccessDeniedException) => T;
    conflictException: (value: ConflictException) => T;
    internalServerException: (value: InternalServerException) => T;
    resourceNotFoundException: (value: ResourceNotFoundException) => T;
    serviceQuotaExceededException: (value: ServiceQuotaExceededException) => T;
    throttlingException: (value: ThrottlingException) => T;
    validationException: (value: ValidationException) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface InvokeCodeInterpreterResponse {
  /**
   * <p>The identifier of the code interpreter session.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The stream containing the results of the code execution. This includes output, errors, and execution status.</p>
   * @public
   */
  stream: AsyncIterable<CodeInterpreterStreamOutput> | undefined;
}

/**
 * <p>Contains the content of a memory record.</p>
 * @public
 */
export type MemoryContent = MemoryContent.TextMember | MemoryContent.$UnknownMember;

/**
 * @public
 */
export namespace MemoryContent {
  /**
   * <p>The text content of the memory record.</p>
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
 * <p>Input structure to create a new memory record.</p>
 * @public
 */
export interface MemoryRecordCreateInput {
  /**
   * <p>A client-provided identifier for tracking this specific record creation request.</p>
   * @public
   */
  requestIdentifier: string | undefined;

  /**
   * <p>A list of namespace identifiers that categorize or group the memory record.</p>
   * @public
   */
  namespaces: string[] | undefined;

  /**
   * <p>The content to be stored within the memory record.</p>
   * @public
   */
  content: MemoryContent | undefined;

  /**
   * <p>Time at which the memory record was created.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>The ID of the memory strategy that defines how this memory record is grouped.</p>
   * @public
   */
  memoryStrategyId?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateMemoryRecordsInput {
  /**
   * <p>The unique ID of the memory resource where records will be created.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>A list of memory record creation inputs to be processed in the batch operation.</p>
   * @public
   */
  records: MemoryRecordCreateInput[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotent processing of the batch request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Output information returned after processing a memory record operation.</p>
 * @public
 */
export interface MemoryRecordOutput {
  /**
   * <p>The unique ID associated to the memory record.</p>
   * @public
   */
  memoryRecordId: string | undefined;

  /**
   * <p>The status of the memory record operation (e.g., SUCCEEDED, FAILED).</p>
   * @public
   */
  status: MemoryRecordStatus | undefined;

  /**
   * <p>The client-provided identifier that was used to track this record operation.</p>
   * @public
   */
  requestIdentifier?: string | undefined;

  /**
   * <p>The error code returned when the memory record operation fails.</p>
   * @public
   */
  errorCode?: number | undefined;

  /**
   * <p>A human-readable error message describing why the memory record operation failed.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateMemoryRecordsOutput {
  /**
   * <p>A list of memory records that were successfully created during the batch operation.</p>
   * @public
   */
  successfulRecords: MemoryRecordOutput[] | undefined;

  /**
   * <p>A list of memory records that failed to be created, including error details for each failure.</p>
   * @public
   */
  failedRecords: MemoryRecordOutput[] | undefined;
}

/**
 * <p>Input structure to delete an existing memory record.</p>
 * @public
 */
export interface MemoryRecordDeleteInput {
  /**
   * <p>The unique ID of the memory record to be deleted.</p>
   * @public
   */
  memoryRecordId: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteMemoryRecordsInput {
  /**
   * <p>The unique ID of the memory resource where records will be deleted.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>A list of memory record deletion inputs to be processed in the batch operation.</p>
   * @public
   */
  records: MemoryRecordDeleteInput[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteMemoryRecordsOutput {
  /**
   * <p>A list of memory records that were successfully deleted during the batch operation.</p>
   * @public
   */
  successfulRecords: MemoryRecordOutput[] | undefined;

  /**
   * <p>A list of memory records that failed to be deleted, including error details for each failure.</p>
   * @public
   */
  failedRecords: MemoryRecordOutput[] | undefined;
}

/**
 * <p>Input structure to update an existing memory record.</p>
 * @public
 */
export interface MemoryRecordUpdateInput {
  /**
   * <p>The unique ID of the memory record to be updated.</p>
   * @public
   */
  memoryRecordId: string | undefined;

  /**
   * <p>Time at which the memory record was updated</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>The content to be stored within the memory record.</p>
   * @public
   */
  content?: MemoryContent | undefined;

  /**
   * <p>The updated list of namespace identifiers for categorizing the memory record.</p>
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The updated ID of the memory strategy that defines how this memory record is grouped.</p>
   * @public
   */
  memoryStrategyId?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateMemoryRecordsInput {
  /**
   * <p>The unique ID of the memory resource where records will be updated.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>A list of memory record update inputs to be processed in the batch operation.</p>
   * @public
   */
  records: MemoryRecordUpdateInput[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateMemoryRecordsOutput {
  /**
   * <p>A list of memory records that were successfully updated during the batch operation.</p>
   * @public
   */
  successfulRecords: MemoryRecordOutput[] | undefined;

  /**
   * <p>A list of memory records that failed to be updated, including error details for each failure.</p>
   * @public
   */
  failedRecords: MemoryRecordOutput[] | undefined;
}

/**
 * <p>Contains information about a branch in an AgentCore Memory resource. Branches allow for organizing events into different conversation threads or paths.</p>
 * @public
 */
export interface Branch {
  /**
   * <p>The identifier of the root event for this branch.</p>
   * @public
   */
  rootEventId?: string | undefined;

  /**
   * <p>The name of the branch.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Value associated with the <code>eventMetadata</code> key.</p>
 * @public
 */
export type MetadataValue = MetadataValue.StringValueMember | MetadataValue.$UnknownMember;

/**
 * @public
 */
export namespace MetadataValue {
  /**
   * <p>Value associated with the <code>eventMetadata</code> key.</p>
   * @public
   */
  export interface StringValueMember {
    stringValue: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    stringValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    stringValue: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains the content of a memory item.</p>
 * @public
 */
export type Content = Content.TextMember | Content.$UnknownMember;

/**
 * @public
 */
export namespace Content {
  /**
   * <p>The text content of the memory item.</p>
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
 * <p>Contains conversational content for an event payload.</p>
 * @public
 */
export interface Conversational {
  /**
   * <p>The content of the conversation message.</p>
   * @public
   */
  content: Content | undefined;

  /**
   * <p>The role of the participant in the conversation (for example, "user" or "assistant").</p>
   * @public
   */
  role: Role | undefined;
}

/**
 * <p>Contains the payload content for an event.</p>
 * @public
 */
export type PayloadType = PayloadType.BlobMember | PayloadType.ConversationalMember | PayloadType.$UnknownMember;

/**
 * @public
 */
export namespace PayloadType {
  /**
   * <p>The conversational content of the payload.</p>
   * @public
   */
  export interface ConversationalMember {
    conversational: Conversational;
    blob?: never;
    $unknown?: never;
  }

  /**
   * <p>The binary content of the payload.</p>
   * @public
   */
  export interface BlobMember {
    conversational?: never;
    blob: __DocumentType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    conversational?: never;
    blob?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    conversational: (value: Conversational) => T;
    blob: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateEventInput {
  /**
   * <p>The identifier of the AgentCore Memory resource in which to create the event.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The identifier of the actor associated with this event. An actor represents an entity that participates in sessions and generates events.</p>
   * @public
   */
  actorId: string | undefined;

  /**
   * <p>The identifier of the session in which this event occurs. A session represents a sequence of related events.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The timestamp when the event occurred. If not specified, the current time is used.</p>
   * @public
   */
  eventTimestamp: Date | undefined;

  /**
   * <p>The content payload of the event. This can include conversational data or binary content.</p>
   * @public
   */
  payload: PayloadType[] | undefined;

  /**
   * <p>The branch information for this event. Branches allow for organizing events into different conversation threads or paths.</p>
   * @public
   */
  branch?: Branch | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, AgentCore ignores the request, but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The key-value metadata to attach to the event.</p>
   * @public
   */
  metadata?: Record<string, MetadataValue> | undefined;
}

/**
 * <p>Contains information about an event in an AgentCore Memory resource.</p>
 * @public
 */
export interface Event {
  /**
   * <p>The identifier of the AgentCore Memory resource containing the event.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The identifier of the actor associated with the event.</p>
   * @public
   */
  actorId: string | undefined;

  /**
   * <p>The identifier of the session containing the event.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The unique identifier of the event.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The timestamp when the event occurred.</p>
   * @public
   */
  eventTimestamp: Date | undefined;

  /**
   * <p>The content payload of the event.</p>
   * @public
   */
  payload: PayloadType[] | undefined;

  /**
   * <p>The branch information for the event.</p>
   * @public
   */
  branch?: Branch | undefined;

  /**
   * <p>Metadata associated with an event.</p>
   * @public
   */
  metadata?: Record<string, MetadataValue> | undefined;
}

/**
 * @public
 */
export interface CreateEventOutput {
  /**
   * <p>The event that was created.</p>
   * @public
   */
  event: Event | undefined;
}

/**
 * @public
 */
export interface DeleteEventInput {
  /**
   * <p>The identifier of the AgentCore Memory resource from which to delete the event.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The identifier of the session containing the event to delete.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The identifier of the event to delete.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The identifier of the actor associated with the event to delete.</p>
   * @public
   */
  actorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventOutput {
  /**
   * <p>The identifier of the event that was deleted.</p>
   * @public
   */
  eventId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMemoryRecordInput {
  /**
   * <p>The identifier of the AgentCore Memory resource from which to delete the memory record.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The identifier of the memory record to delete.</p>
   * @public
   */
  memoryRecordId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMemoryRecordOutput {
  /**
   * <p>The identifier of the memory record that was deleted.</p>
   * @public
   */
  memoryRecordId: string | undefined;
}

/**
 * @public
 */
export interface GetEventInput {
  /**
   * <p>The identifier of the AgentCore Memory resource containing the event.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The identifier of the session containing the event.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The identifier of the actor associated with the event.</p>
   * @public
   */
  actorId: string | undefined;

  /**
   * <p>The identifier of the event to retrieve.</p>
   * @public
   */
  eventId: string | undefined;
}

/**
 * @public
 */
export interface GetEventOutput {
  /**
   * <p>The requested event information.</p>
   * @public
   */
  event: Event | undefined;
}

/**
 * @public
 */
export interface GetMemoryRecordInput {
  /**
   * <p>The identifier of the AgentCore Memory resource containing the memory record.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The identifier of the memory record to retrieve.</p>
   * @public
   */
  memoryRecordId: string | undefined;
}

/**
 * <p>Contains information about a memory record in an AgentCore Memory resource.</p>
 * @public
 */
export interface MemoryRecord {
  /**
   * <p>The unique identifier of the memory record.</p>
   * @public
   */
  memoryRecordId: string | undefined;

  /**
   * <p>The content of the memory record.</p>
   * @public
   */
  content: MemoryContent | undefined;

  /**
   * <p>The identifier of the memory strategy associated with this record.</p>
   * @public
   */
  memoryStrategyId: string | undefined;

  /**
   * <p>The namespaces associated with this memory record. Namespaces help organize and categorize memory records.</p>
   * @public
   */
  namespaces: string[] | undefined;

  /**
   * <p>The timestamp when the memory record was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>A map of metadata key-value pairs associated with a memory record.</p>
   * @public
   */
  metadata?: Record<string, MetadataValue> | undefined;
}

/**
 * @public
 */
export interface GetMemoryRecordOutput {
  /**
   * <p>The requested memory record.</p>
   * @public
   */
  memoryRecord: MemoryRecord | undefined;
}

/**
 * @public
 */
export interface ListActorsInput {
  /**
   * <p>The identifier of the AgentCore Memory resource for which to list actors.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListActorsOutput {
  /**
   * <p>The list of actor summaries.</p>
   * @public
   */
  actorSummaries: ActorSummary[] | undefined;

  /**
   * <p>The token to use in a subsequent request to get the next set of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains filter criteria for branches when listing events.</p>
 * @public
 */
export interface BranchFilter {
  /**
   * <p>The name of the branch to filter by.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specifies whether to include parent branches in the results. Set to true to include parent branches, or false to exclude them.</p>
   * @public
   */
  includeParentBranches?: boolean | undefined;
}

/**
 * <p>Left expression of the event metadata filter.</p>
 * @public
 */
export type LeftExpression = LeftExpression.MetadataKeyMember | LeftExpression.$UnknownMember;

/**
 * @public
 */
export namespace LeftExpression {
  /**
   * <p>Key associated with the metadata in an event.</p>
   * @public
   */
  export interface MetadataKeyMember {
    metadataKey: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    metadataKey?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    metadataKey: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Right expression of the <code>eventMetadata</code>filter.</p>
 * @public
 */
export type RightExpression = RightExpression.MetadataValueMember | RightExpression.$UnknownMember;

/**
 * @public
 */
export namespace RightExpression {
  /**
   * <p>Value associated with the key in <code>eventMetadata</code>.</p>
   * @public
   */
  export interface MetadataValueMember {
    metadataValue: MetadataValue;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    metadataValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    metadataValue: (value: MetadataValue) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Filter expression for retrieving events based on metadata associated with an event.</p>
 * @public
 */
export interface EventMetadataFilterExpression {
  /**
   * <p>Left operand of the event metadata filter expression.</p>
   * @public
   */
  left: LeftExpression | undefined;

  /**
   * <p>Operator applied to the event metadata filter expression.</p>
   * @public
   */
  operator: OperatorType | undefined;

  /**
   * <p>Right operand of the event metadata filter expression.</p>
   * @public
   */
  right?: RightExpression | undefined;
}

/**
 * <p>Contains filter criteria for listing events.</p>
 * @public
 */
export interface FilterInput {
  /**
   * <p>The branch filter criteria to apply when listing events.</p>
   * @public
   */
  branch?: BranchFilter | undefined;

  /**
   * <p>Event metadata filter criteria to apply when retrieving events.</p>
   * @public
   */
  eventMetadata?: EventMetadataFilterExpression[] | undefined;
}

/**
 * @public
 */
export interface ListEventsInput {
  /**
   * <p>The identifier of the AgentCore Memory resource for which to list events.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The identifier of the session for which to list events.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The identifier of the actor for which to list events.</p>
   * @public
   */
  actorId: string | undefined;

  /**
   * <p>Specifies whether to include event payloads in the response. Set to true to include payloads, or false to exclude them.</p>
   * @public
   */
  includePayloads?: boolean | undefined;

  /**
   * <p>Filter criteria to apply when listing events.</p>
   * @public
   */
  filter?: FilterInput | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventsOutput {
  /**
   * <p>The list of events that match the specified criteria.</p>
   * @public
   */
  events: Event[] | undefined;

  /**
   * <p>The token to use in a subsequent request to get the next set of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Filters for querying memory extraction jobs based on various criteria.</p>
 * @public
 */
export interface ExtractionJobFilterInput {
  /**
   * <p>The memory strategy identifier to filter extraction jobs by. If specified, only extraction jobs with this strategy ID are returned.</p>
   * @public
   */
  strategyId?: string | undefined;

  /**
   * <p>The unique identifier of the session. If specified, only extraction jobs with this session ID are returned.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The identifier of the actor. If specified, only extraction jobs with this actor ID are returned.</p>
   * @public
   */
  actorId?: string | undefined;

  /**
   * <p>The status of the extraction job. If specified, only extraction jobs with this status are returned.</p>
   * @public
   */
  status?: ExtractionJobStatus | undefined;
}

/**
 * @public
 */
export interface ListMemoryExtractionJobsInput {
  /**
   * <p>The unique identifier of the memory to list extraction jobs for.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Filter criteria to apply when listing extraction jobs.</p>
   * @public
   */
  filter?: ExtractionJobFilterInput | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Metadata information associated with this message.</p>
 * @public
 */
export interface MessageMetadata {
  /**
   * <p>The identifier of the event associated with this message.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The position of this message within that event’s ordered list of messages.</p>
   * @public
   */
  messageIndex: number | undefined;
}

/**
 * <p>The list of messages that compose this extraction job.</p>
 * @public
 */
export type ExtractionJobMessages = ExtractionJobMessages.MessagesListMember | ExtractionJobMessages.$UnknownMember;

/**
 * @public
 */
export namespace ExtractionJobMessages {
  /**
   * <p>The list of messages that compose this extraction job.</p>
   * @public
   */
  export interface MessagesListMember {
    messagesList: MessageMetadata[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    messagesList?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    messagesList: (value: MessageMetadata[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Metadata information associated with this extraction job.</p>
 * @public
 */
export interface ExtractionJobMetadata {
  /**
   * <p>The unique identifier for the extraction job.</p>
   * @public
   */
  jobID: string | undefined;

  /**
   * <p>The messages associated with the extraction job.</p>
   * @public
   */
  messages: ExtractionJobMessages | undefined;

  /**
   * <p>The current status of the extraction job.</p>
   * @public
   */
  status?: ExtractionJobStatus | undefined;

  /**
   * <p>The cause of failure, if the job did not complete successfully.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The identifier of the memory strategy for this extraction job.</p>
   * @public
   */
  strategyId?: string | undefined;

  /**
   * <p>The identifier of the session for this extraction job.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The identifier of the actor for this extraction job.</p>
   * @public
   */
  actorId?: string | undefined;
}

/**
 * @public
 */
export interface ListMemoryExtractionJobsOutput {
  /**
   * <p>List of extraction job metadata matching the specified criteria.</p>
   * @public
   */
  jobs: ExtractionJobMetadata[] | undefined;

  /**
   * <p>Token to retrieve the next page of results, if available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMemoryRecordsInput {
  /**
   * <p>The identifier of the AgentCore Memory resource for which to list memory records.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The namespace to filter memory records by. If specified, only memory records in this namespace are returned.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The memory strategy identifier to filter memory records by. If specified, only memory records with this strategy ID are returned.</p>
   * @public
   */
  memoryStrategyId?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a memory record.</p>
 * @public
 */
export interface MemoryRecordSummary {
  /**
   * <p>The unique identifier of the memory record.</p>
   * @public
   */
  memoryRecordId: string | undefined;

  /**
   * <p>The content of the memory record.</p>
   * @public
   */
  content: MemoryContent | undefined;

  /**
   * <p>The identifier of the memory strategy associated with this record.</p>
   * @public
   */
  memoryStrategyId: string | undefined;

  /**
   * <p>The namespaces associated with this memory record.</p>
   * @public
   */
  namespaces: string[] | undefined;

  /**
   * <p>The timestamp when the memory record was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The relevance score of the memory record when returned as part of a search result. Higher values indicate greater relevance to the search query.</p>
   * @public
   */
  score?: number | undefined;

  /**
   * <p>A map of metadata key-value pairs associated with a memory record.</p>
   * @public
   */
  metadata?: Record<string, MetadataValue> | undefined;
}

/**
 * @public
 */
export interface ListMemoryRecordsOutput {
  /**
   * <p>The list of memory record summaries that match the specified criteria.</p>
   * @public
   */
  memoryRecordSummaries: MemoryRecordSummary[] | undefined;

  /**
   * <p>The token to use in a subsequent request to get the next set of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSessionsInput {
  /**
   * <p>The identifier of the AgentCore Memory resource for which to list sessions.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The identifier of the actor for which to list sessions. </p>
   * @public
   */
  actorId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a session in an AgentCore Memory resource.</p>
 * @public
 */
export interface SessionSummary {
  /**
   * <p>The unique identifier of the session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The identifier of the actor associated with the session.</p>
   * @public
   */
  actorId: string | undefined;

  /**
   * <p>The timestamp when the session was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListSessionsOutput {
  /**
   * <p>The list of session summaries that match the specified criteria.</p>
   * @public
   */
  sessionSummaries: SessionSummary[] | undefined;

  /**
   * <p>The token to use in a subsequent request to get the next set of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Filters to apply to metadata associated with a memory. Specify the metadata key and value in the <code>left</code> and <code>right</code> fields and use the <code>operator</code> field to define the relationship to match.</p>
 * @public
 */
export interface MemoryMetadataFilterExpression {
  /**
   * <p>Left expression of the event metadata filter.</p>
   * @public
   */
  left: LeftExpression | undefined;

  /**
   * <p>The relationship between the metadata key and value to match when applying the metadata filter.</p>
   * @public
   */
  operator: OperatorType | undefined;

  /**
   * <p>Right expression of the <code>eventMetadata</code>filter.</p>
   * @public
   */
  right?: RightExpression | undefined;
}

/**
 * <p>Contains search criteria for retrieving memory records.</p>
 * @public
 */
export interface SearchCriteria {
  /**
   * <p>The search query to use for finding relevant memory records.</p>
   * @public
   */
  searchQuery: string | undefined;

  /**
   * <p>The memory strategy identifier to filter memory records by.</p>
   * @public
   */
  memoryStrategyId?: string | undefined;

  /**
   * <p>The maximum number of top-scoring memory records to return. This value is used for semantic search ranking.</p>
   * @public
   */
  topK?: number | undefined;

  /**
   * <p>Filters to apply to metadata associated with a memory.</p>
   * @public
   */
  metadataFilters?: MemoryMetadataFilterExpression[] | undefined;
}

/**
 * @public
 */
export interface RetrieveMemoryRecordsInput {
  /**
   * <p>The identifier of the AgentCore Memory resource from which to retrieve memory records.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The namespace to filter memory records by.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The search criteria to use for finding relevant memory records. This includes the search query, memory strategy ID, and other search parameters.</p>
   * @public
   */
  searchCriteria: SearchCriteria | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 20.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface RetrieveMemoryRecordsOutput {
  /**
   * <p>The list of memory record summaries that match the search criteria, ordered by relevance.</p>
   * @public
   */
  memoryRecordSummaries: MemoryRecordSummary[] | undefined;

  /**
   * <p>The token to use in a subsequent request to get the next set of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the metadata of a memory extraction job such as the message identifiers that compose this job.</p>
 * @public
 */
export interface ExtractionJob {
  /**
   * <p>The unique identifier of the extraction job.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface StartMemoryExtractionJobInput {
  /**
   * <p>The unique identifier of the memory for which to start extraction jobs.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>Extraction job to start in this operation.</p>
   * @public
   */
  extractionJob: ExtractionJob | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotent processing of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartMemoryExtractionJobOutput {
  /**
   * <p>Extraction Job ID that was attempted to start.</p>
   * @public
   */
  jobId: string | undefined;
}
