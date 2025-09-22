// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DocumentType as __DocumentType, StreamingBlobTypes } from "@smithy/types";

import { BedrockAgentCoreServiceException as __BaseException } from "./BedrockAgentCoreServiceException";

/**
 * <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
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
 * <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
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
 * <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
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
 * <p>The exception that occurs when there is an error in the runtime client. This can happen due to network issues, invalid configuration, or other client-side problems. Check the error message for specific details about the error.</p>
 * @public
 */
export class RuntimeClientError extends __BaseException {
  readonly name: "RuntimeClientError" = "RuntimeClientError";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RuntimeClientError, __BaseException>) {
    super({
      name: "RuntimeClientError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RuntimeClientError.prototype);
  }
}

/**
 * <p>The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.</p>
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
 * <p>The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.</p>
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
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CannotParse",
  FIELD_VALIDATION_FAILED: "FieldValidationFailed",
  IDEMPOTENT_PARAMETER_MISMATCH_EXCEPTION: "IdempotentParameterMismatchException",
  RESOURCE_CONFLICT: "ResourceConflict",
  ROOT_EVENT_IN_OTHER_SESSION: "EventInOtherSession",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  reason: ValidationExceptionReason | undefined;
  fieldList?: ValidationExceptionField[] | undefined;
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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
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
 * @public
 * @enum
 */
export const BrowserSessionStatus = {
  READY: "READY",
  TERMINATED: "TERMINATED",
} as const;

/**
 * @public
 */
export type BrowserSessionStatus = (typeof BrowserSessionStatus)[keyof typeof BrowserSessionStatus];

/**
 * @public
 * @enum
 */
export const AutomationStreamStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AutomationStreamStatus = (typeof AutomationStreamStatus)[keyof typeof AutomationStreamStatus];

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
 * <p>The exception that occurs when the request conflicts with the current state of the resource. This can happen when trying to modify a resource that is currently being modified by another request, or when trying to create a resource that already exists.</p>
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
 * @public
 */
export interface StartBrowserSessionRequest {
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

  export interface Visitor<T> {
    automationStreamUpdate: (value: AutomationStreamUpdate) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: StreamUpdate, visitor: Visitor<T>): T => {
    if (value.automationStreamUpdate !== undefined) return visitor.automationStreamUpdate(value.automationStreamUpdate);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
 * @enum
 */
export const CodeInterpreterSessionStatus = {
  READY: "READY",
  TERMINATED: "TERMINATED",
} as const;

/**
 * @public
 */
export type CodeInterpreterSessionStatus =
  (typeof CodeInterpreterSessionStatus)[keyof typeof CodeInterpreterSessionStatus];

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
   * <p>The time in seconds after which the session automatically terminates if there is no activity. The default value is 3600 seconds (1 hour). The minimum allowed value is 60 seconds, and the maximum allowed value is 28800 seconds (8 hours).</p>
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
 * @public
 */
export interface GetResourceApiKeyRequest {
  /**
   * <p>The identity token of the workload you want to get the API Key of.</p>
   * @public
   */
  workloadIdentityToken: string | undefined;

  /**
   * <p>The credential provider name of the resource you are retrieving the API Key of.</p>
   * @public
   */
  resourceCredentialProviderName: string | undefined;
}

/**
 * @public
 */
export interface GetResourceApiKeyResponse {
  /**
   * <p>The API Key associated with the resource requested.</p>
   * @public
   */
  apiKey: string | undefined;
}

/**
 * <p>This exception is thrown when the JWT bearer token is invalid or not found for OAuth bearer token based access</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const Oauth2FlowType = {
  M2M: "M2M",
  USER_FEDERATION: "USER_FEDERATION",
} as const;

/**
 * @public
 */
export type Oauth2FlowType = (typeof Oauth2FlowType)[keyof typeof Oauth2FlowType];

/**
 * @public
 */
export interface GetResourceOauth2TokenRequest {
  /**
   * <p>The identity token of the workload you want to retrive the Oauth2 Token of.</p>
   * @public
   */
  workloadIdentityToken: string | undefined;

  /**
   * <p>Reference to the credential provider</p>
   * @public
   */
  resourceCredentialProviderName: string | undefined;

  /**
   * <p>The OAuth scopes requested</p>
   * @public
   */
  scopes: string[] | undefined;

  /**
   * <p>The type of flow to be performed</p>
   * @public
   */
  oauth2Flow: Oauth2FlowType | undefined;

  /**
   * <p>Callback url to redirect after token retrieval completes. Should be one of the provideded urls during WorkloadIdentity creation</p>
   * @public
   */
  resourceOauth2ReturnUrl?: string | undefined;

  /**
   * <p>If true, always initiate a new 3LO flow</p>
   * @public
   */
  forceAuthentication?: boolean | undefined;

  /**
   * <p>Gives the ability to send extra/custom parameters to the resource credentials provider during the authorization process. Standard OAuth2 flow parameters will not be overriden.</p>
   * @public
   */
  customParameters?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetResourceOauth2TokenResponse {
  /**
   * <p>The URL for the authorization process, provided if the Access token requires user Authorization.</p>
   * @public
   */
  authorizationUrl?: string | undefined;

  /**
   * <p>OAuth2 token ready for use</p>
   * @public
   */
  accessToken?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadAccessTokenRequest {
  /**
   * <p>Unique identifier for the registered agent</p>
   * @public
   */
  workloadName: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadAccessTokenResponse {
  /**
   * <p>Opaque token representing both agent and user identity</p>
   * @public
   */
  workloadAccessToken: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadAccessTokenForJWTRequest {
  /**
   * <p>Unique identifier for the registered agent</p>
   * @public
   */
  workloadName: string | undefined;

  /**
   * <p>OAuth2 token issued by the user's identity provider</p>
   * @public
   */
  userToken: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadAccessTokenForJWTResponse {
  /**
   * <p>Opaque token representing both agent and user identity</p>
   * @public
   */
  workloadAccessToken: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadAccessTokenForUserIdRequest {
  /**
   * <p>The name of the worklaod you want to get the access token of.</p>
   * @public
   */
  workloadName: string | undefined;

  /**
   * <p>The user id of the user you are retrieving the access token for.</p>
   * @public
   */
  userId: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadAccessTokenForUserIdResponse {
  /**
   * <p>The workload access token of the named workload.</p>
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
 * @public
 * @enum
 */
export const ProgrammingLanguage = {
  JAVASCRIPT: "javascript",
  PYTHON: "python",
  TYPESCRIPT: "typescript",
} as const;

/**
 * @public
 */
export type ProgrammingLanguage = (typeof ProgrammingLanguage)[keyof typeof ProgrammingLanguage];

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
 * @enum
 */
export const ToolName = {
  EXECUTE_CODE: "executeCode",
  EXECUTE_COMMAND: "executeCommand",
  GET_TASK: "getTask",
  LIST_FILES: "listFiles",
  READ_FILES: "readFiles",
  REMOVE_FILES: "removeFiles",
  START_COMMAND_EXECUTION: "startCommandExecution",
  STOP_TASK: "stopTask",
  WRITE_FILES: "writeFiles",
} as const;

/**
 * @public
 */
export type ToolName = (typeof ToolName)[keyof typeof ToolName];

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
 * @public
 * @enum
 */
export const ResourceContentType = {
  BLOB: "blob",
  TEXT: "text",
} as const;

/**
 * @public
 */
export type ResourceContentType = (typeof ResourceContentType)[keyof typeof ResourceContentType];

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
 * @public
 * @enum
 */
export const ContentBlockType = {
  EMBEDDED_RESOURCE: "resource",
  IMAGE: "image",
  RESOURCE_LINK: "resource_link",
  TEXT: "text",
} as const;

/**
 * @public
 */
export type ContentBlockType = (typeof ContentBlockType)[keyof typeof ContentBlockType];

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
 * @public
 * @enum
 */
export const TaskStatus = {
  CANCELED: "canceled",
  COMPLETED: "completed",
  FAILED: "failed",
  SUBMITTED: "submitted",
  WORKING: "working",
} as const;

/**
 * @public
 */
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

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

  export const visit = <T>(value: CodeInterpreterStreamOutput, visitor: Visitor<T>): T => {
    if (value.result !== undefined) return visitor.result(value.result);
    if (value.accessDeniedException !== undefined) return visitor.accessDeniedException(value.accessDeniedException);
    if (value.conflictException !== undefined) return visitor.conflictException(value.conflictException);
    if (value.internalServerException !== undefined)
      return visitor.internalServerException(value.internalServerException);
    if (value.resourceNotFoundException !== undefined)
      return visitor.resourceNotFoundException(value.resourceNotFoundException);
    if (value.serviceQuotaExceededException !== undefined)
      return visitor.serviceQuotaExceededException(value.serviceQuotaExceededException);
    if (value.throttlingException !== undefined) return visitor.throttlingException(value.throttlingException);
    if (value.validationException !== undefined) return visitor.validationException(value.validationException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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

  export interface Visitor<T> {
    text: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Content, visitor: Visitor<T>): T => {
    if (value.text !== undefined) return visitor.text(value.text);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const Role = {
  ASSISTANT: "ASSISTANT",
  OTHER: "OTHER",
  TOOL: "TOOL",
  USER: "USER",
} as const;

/**
 * @public
 */
export type Role = (typeof Role)[keyof typeof Role];

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

  export interface Visitor<T> {
    conversational: (value: Conversational) => T;
    blob: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PayloadType, visitor: Visitor<T>): T => {
    if (value.conversational !== undefined) return visitor.conversational(value.conversational);
    if (value.blob !== undefined) return visitor.blob(value.blob);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
 * <p>The input fails to satisfy the constraints specified by AgentCore. Check your input values and try again.</p>
 * @public
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
  }
}

/**
 * <p>The service encountered an internal error. Try your request again later.</p>
 * @public
 */
export class ServiceException extends __BaseException {
  readonly name: "ServiceException" = "ServiceException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceException, __BaseException>) {
    super({
      name: "ServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceException.prototype);
  }
}

/**
 * <p>The request was denied due to request throttling. Reduce the frequency of requests and try again.</p>
 * @public
 */
export class ThrottledException extends __BaseException {
  readonly name: "ThrottledException" = "ThrottledException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottledException, __BaseException>) {
    super({
      name: "ThrottledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottledException.prototype);
  }
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

  export interface Visitor<T> {
    text: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MemoryContent, visitor: Visitor<T>): T => {
    if (value.text !== undefined) return visitor.text(value.text);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
   * <p>The maximum number of results to return in a single call. Minimum value of 1, maximum value of 100. Default is 20.</p>
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
 * <p>Contains filter criteria for listing events.</p>
 * @public
 */
export interface FilterInput {
  /**
   * <p>The branch filter criteria to apply when listing events.</p>
   * @public
   */
  branch?: BranchFilter | undefined;
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
   * <p>The identifier of the session for which to list events. If specified, only events from this session are returned.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The identifier of the actor for which to list events. If specified, only events from this actor are returned.</p>
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
   * <p>The maximum number of results to return in a single call. Minimum value of 1, maximum value of 100. Default is 20.</p>
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
   * <p>The maximum number of results to return in a single call. Minimum value of 1, maximum value of 100. Default is 20.</p>
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
   * <p>The identifier of the actor for which to list sessions. If specified, only sessions involving this actor are returned.</p>
   * @public
   */
  actorId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Minimum value of 1, maximum value of 100. Default is 20.</p>
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
   * <p>The namespace to filter memory records by. If specified, only memory records in this namespace are searched.</p>
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
   * <p>The maximum number of results to return in a single call. Minimum value of 1, maximum value of 100. Default is 20.</p>
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
