// smithy-typescript generated code
import type { DocumentType as __DocumentType, StreamingBlobTypes } from "@smithy/types";

import type {
  ABTestExecutionStatus,
  ABTestStatus,
  AutomationStreamStatus,
  BatchEvaluationStatus,
  BrowserActionStatus,
  BrowserEnterprisePolicyType,
  BrowserSessionStatus,
  CloudWatchLogsFilterOperator,
  CodeInterpreterSessionStatus,
  CommandExecutionStatus,
  ContentBlockType,
  ExtractionJobStatus,
  HarnessBedrockApiFormat,
  HarnessConversationRole,
  HarnessOpenAiApiFormat,
  HarnessStopReason,
  HarnessToolType,
  HarnessToolUseStatus,
  HarnessToolUseType,
  LanguageRuntime,
  MemoryRecordOperatorType,
  MemoryRecordStatus,
  MouseButton,
  Oauth2FlowType,
  OAuthGrantType,
  OperatorType,
  PaymentHttpMethodType,
  ProgrammingLanguage,
  RecommendationStatus,
  RecommendationType,
  ResourceContentType,
  Role,
  ScreenshotFormat,
  SessionStatus,
  TaskStatus,
  ToolName,
} from "./enums";
import type {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  RuntimeClientError,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "./errors";

/**
 * <p> The agent card definition for A2A descriptors, including the schema version and inline content that describes the agent's capabilities.</p>
 * @public
 */
export interface AgentCardDefinition {
  /**
   * <p> The schema version of the agent card definition.</p>
   * @public
   */
  schemaVersion?: string | undefined;

  /**
   * <p> The inline content of the agent card definition.</p>
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * <p> The A2A (Agent-to-Agent) descriptor configuration for a registry record.</p>
 * @public
 */
export interface A2aDescriptor {
  /**
   * <p> The agent card definition that describes the agent's capabilities and interface.</p>
   * @public
   */
  agentCard: AgentCardDefinition | undefined;
}

/**
 * <p>An online evaluation configuration associated with a specific A/B test variant.</p>
 * @public
 */
export interface PerVariantOnlineEvaluationConfig {
  /**
   * <p>The name of the variant this evaluation configuration applies to.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the online evaluation configuration for this variant.</p>
   * @public
   */
  onlineEvaluationConfigArn: string | undefined;
}

/**
 * <p>The evaluation configuration for an A/B test, specifying which online evaluation configurations to use for measuring variant performance.</p>
 * @public
 */
export type ABTestEvaluationConfig =
  | ABTestEvaluationConfig.OnlineEvaluationConfigArnMember
  | ABTestEvaluationConfig.PerVariantOnlineEvaluationConfigMember
  | ABTestEvaluationConfig.$UnknownMember;

/**
 * @public
 */
export namespace ABTestEvaluationConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of a single online evaluation configuration to use for both variants.</p>
   * @public
   */
  export interface OnlineEvaluationConfigArnMember {
    onlineEvaluationConfigArn: string;
    perVariantOnlineEvaluationConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>Per-variant online evaluation configurations, allowing different evaluation settings for each variant.</p>
   * @public
   */
  export interface PerVariantOnlineEvaluationConfigMember {
    onlineEvaluationConfigArn?: never;
    perVariantOnlineEvaluationConfig: PerVariantOnlineEvaluationConfig[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    onlineEvaluationConfigArn?: never;
    perVariantOnlineEvaluationConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    onlineEvaluationConfigArn: (value: string) => T;
    perVariantOnlineEvaluationConfig: (value: PerVariantOnlineEvaluationConfig[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Statistics for the control variant in an A/B test.</p>
 * @public
 */
export interface ControlStats {
  /**
   * <p>The name of the control variant.</p>
   * @public
   */
  variantName: string | undefined;

  /**
   * <p>The number of sessions evaluated for the control variant.</p>
   * @public
   */
  sampleSize: number | undefined;

  /**
   * <p>The mean evaluation score for the control variant.</p>
   * @public
   */
  mean: number | undefined;
}

/**
 * <p>A confidence interval for a statistical measurement.</p>
 * @public
 */
export interface ConfidenceInterval {
  /**
   * <p>The lower bound of the confidence interval.</p>
   * @public
   */
  lower?: number | undefined;

  /**
   * <p>The upper bound of the confidence interval.</p>
   * @public
   */
  upper?: number | undefined;
}

/**
 * <p>Statistical results for a treatment variant compared against the control.</p>
 * @public
 */
export interface VariantResult {
  /**
   * <p>The name of the treatment variant.</p>
   * @public
   */
  variantName: string | undefined;

  /**
   * <p>The number of sessions evaluated for this variant.</p>
   * @public
   */
  sampleSize: number | undefined;

  /**
   * <p>The mean evaluation score for this variant.</p>
   * @public
   */
  mean: number | undefined;

  /**
   * <p>The absolute change in mean score compared to the control variant.</p>
   * @public
   */
  absoluteChange?: number | undefined;

  /**
   * <p>The percentage change in mean score compared to the control variant.</p>
   * @public
   */
  percentChange?: number | undefined;

  /**
   * <p>The p-value indicating the statistical significance of the observed difference.</p>
   * @public
   */
  pValue?: number | undefined;

  /**
   * <p>The confidence interval for the observed difference.</p>
   * @public
   */
  confidenceInterval?: ConfidenceInterval | undefined;

  /**
   * <p>Whether the observed difference is statistically significant.</p>
   * @public
   */
  isSignificant: boolean | undefined;
}

/**
 * <p>Statistical metrics for a single evaluator comparing control and treatment variants.</p>
 * @public
 */
export interface EvaluatorMetric {
  /**
   * <p>The Amazon Resource Name (ARN) of the evaluator.</p>
   * @public
   */
  evaluatorArn: string | undefined;

  /**
   * <p>The statistics for the control variant.</p>
   * @public
   */
  controlStats: ControlStats | undefined;

  /**
   * <p>The results for each treatment variant compared against the control.</p>
   * @public
   */
  variantResults: VariantResult[] | undefined;
}

/**
 * <p>The statistical results of an A/B test.</p>
 * @public
 */
export interface ABTestResults {
  /**
   * <p>The timestamp when the analysis was performed.</p>
   * @public
   */
  analysisTimestamp?: Date | undefined;

  /**
   * <p>The per-evaluator metrics comparing control and treatment variants.</p>
   * @public
   */
  evaluatorMetrics: EvaluatorMetric[] | undefined;
}

/**
 * <p>Summary information about an A/B test.</p>
 * @public
 */
export interface ABTestSummary {
  /**
   * <p>The unique identifier of the A/B test.</p>
   * @public
   */
  abTestId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the A/B test.</p>
   * @public
   */
  abTestArn: string | undefined;

  /**
   * <p>The name of the A/B test.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The current status of the A/B test.</p>
   * @public
   */
  status: ABTestStatus | undefined;

  /**
   * <p>The execution status of the A/B test.</p>
   * @public
   */
  executionStatus: ABTestExecutionStatus | undefined;

  /**
   * <p>The description of the A/B test.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway used for traffic splitting.</p>
   * @public
   */
  gatewayArn?: string | undefined;

  /**
   * <p>The timestamp when the A/B test was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the A/B test was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
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
   * <p>The identifier of the agent runtime to invoke. You can specify either the full Amazon Web Services Resource Name (ARN) or the agent ID. If you use the agent ID, you must also provide the <code>accountId</code> query parameter.</p>
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * <p>The qualifier to use for the agent runtime. This is an endpoint name that points to a specific version. If not specified, Amazon Bedrock AgentCore uses the default endpoint of the agent runtime.</p>
   * @public
   */
  qualifier?: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account for the agent runtime resource. This parameter is required when you specify an agent ID instead of the full ARN for <code>agentRuntimeArn</code>.</p>
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
 * <p>The request body structure for the <code>InvokeAgentRuntimeCommand</code> operation, containing the command to execute and optional configuration parameters.</p>
 * @public
 */
export interface InvokeAgentRuntimeCommandRequestBody {
  /**
   * <p>The shell command to execute on the agent runtime. This command is executed in the runtime environment and its output is streamed back to the caller.</p>
   * @public
   */
  command: string | undefined;

  /**
   * <p>The maximum duration in seconds to wait for the command to complete. If the command execution exceeds this timeout, it will be terminated. Default is 300 seconds. Minimum is 1 second. Maximum is 3600 seconds.</p>
   * @public
   */
  timeout?: number | undefined;
}

/**
 * <p>Request for InvokeAgentRuntimeCommand operation.</p>
 * @public
 */
export interface InvokeAgentRuntimeCommandRequest {
  /**
   * <p>The MIME type of the input data in the request payload. This tells the agent runtime how to interpret the payload data. Common values include application/json for JSON data.</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>The desired MIME type for the response from the agent runtime command. This tells the agent runtime what format to use for the response data. Common values include application/json for JSON data.</p>
   * @public
   */
  accept?: string | undefined;

  /**
   * <p>The unique identifier of the runtime session in which to execute the command. This session ID is used to maintain state and context across multiple command invocations.</p>
   * @public
   */
  runtimeSessionId?: string | undefined;

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
   * <p>The Amazon Resource Name (ARN) of the agent runtime on which to execute the command. This identifies the specific agent runtime environment where the command will run.</p>
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * <p>The qualifier to use for the agent runtime. This is an endpoint name that points to a specific version. If not specified, Amazon Bedrock AgentCore uses the default endpoint of the agent runtime.</p>
   * @public
   */
  qualifier?: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account for the agent runtime resource. This parameter is required when you specify an agent ID instead of the full ARN for <code>agentRuntimeArn</code>.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The request body containing the command to execute and optional configuration parameters such as timeout settings.</p>
   * @public
   */
  body: InvokeAgentRuntimeCommandRequestBody | undefined;
}

/**
 * <p>An event that contains incremental output from a command execution. This event streams standard output and standard error content as it becomes available during command execution.</p>
 * @public
 */
export interface ContentDeltaEvent {
  /**
   * <p>The standard output content from the command execution. This field contains the incremental output written to stdout by the executing command.</p>
   * @public
   */
  stdout?: string | undefined;

  /**
   * <p>The standard error content from the command execution. This field contains the incremental output written to stderr by the executing command.</p>
   * @public
   */
  stderr?: string | undefined;
}

/**
 * <p>An event that signals the start of content streaming from a command execution. This event is sent when the command begins producing output.</p>
 * @public
 */
export interface ContentStartEvent {}

/**
 * <p>An event that signals the completion of a command execution. This event contains the final status and exit code of the executed command.</p>
 * @public
 */
export interface ContentStopEvent {
  /**
   * <p>The exit code returned by the executed command. An exit code of 0 indicates successful execution, -1 indicates a platform error, and values greater than 0 indicate command-specific errors.</p>
   * @public
   */
  exitCode: number | undefined;

  /**
   * <p>The final status of the command execution. Valid values are <code>COMPLETED</code> for successful completion or <code>TIMED_OUT</code> if the command exceeded the specified timeout.</p>
   * @public
   */
  status: CommandExecutionStatus | undefined;
}

/**
 * <p>A structure representing a response chunk that contains exactly one of the possible event types: <code>contentStart</code>, <code>contentDelta</code>, or <code>contentStop</code>.</p>
 * @public
 */
export interface ResponseChunk {
  /**
   * <p>An event indicating the start of content streaming from the command execution. This is the first chunk received.</p>
   * @public
   */
  contentStart?: ContentStartEvent | undefined;

  /**
   * <p>An event containing incremental output (stdout or stderr) from the command execution. These are the middle chunks.</p>
   * @public
   */
  contentDelta?: ContentDeltaEvent | undefined;

  /**
   * <p>An event indicating the completion of the command execution, including the exit code and final status. This is the last chunk received.</p>
   * @public
   */
  contentStop?: ContentStopEvent | undefined;
}

/**
 * <p>The streaming output union for the <code>InvokeAgentRuntimeCommand</code> operation. This union delivers typed events: <code>contentStart</code> (first), <code>contentDelta</code> (middle), and <code>contentStop</code> (last).</p>
 * @public
 */
export type InvokeAgentRuntimeCommandStreamOutput =
  | InvokeAgentRuntimeCommandStreamOutput.AccessDeniedExceptionMember
  | InvokeAgentRuntimeCommandStreamOutput.ChunkMember
  | InvokeAgentRuntimeCommandStreamOutput.InternalServerExceptionMember
  | InvokeAgentRuntimeCommandStreamOutput.ResourceNotFoundExceptionMember
  | InvokeAgentRuntimeCommandStreamOutput.RuntimeClientErrorMember
  | InvokeAgentRuntimeCommandStreamOutput.ServiceQuotaExceededExceptionMember
  | InvokeAgentRuntimeCommandStreamOutput.ThrottlingExceptionMember
  | InvokeAgentRuntimeCommandStreamOutput.ValidationExceptionMember
  | InvokeAgentRuntimeCommandStreamOutput.$UnknownMember;

/**
 * @public
 */
export namespace InvokeAgentRuntimeCommandStreamOutput {
  /**
   * <p>A response chunk containing command execution events such as content start, content delta, or content stop events.</p>
   * @public
   */
  export interface ChunkMember {
    chunk: ResponseChunk;
    accessDeniedException?: never;
    internalServerException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    validationException?: never;
    runtimeClientError?: never;
    $unknown?: never;
  }

  /**
   * <p>Exception events for error streaming.</p>
   * @public
   */
  export interface AccessDeniedExceptionMember {
    chunk?: never;
    accessDeniedException: AccessDeniedException;
    internalServerException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    validationException?: never;
    runtimeClientError?: never;
    $unknown?: never;
  }

  /**
   * <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
   * @public
   */
  export interface InternalServerExceptionMember {
    chunk?: never;
    accessDeniedException?: never;
    internalServerException: InternalServerException;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    validationException?: never;
    runtimeClientError?: never;
    $unknown?: never;
  }

  /**
   * <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
   * @public
   */
  export interface ResourceNotFoundExceptionMember {
    chunk?: never;
    accessDeniedException?: never;
    internalServerException?: never;
    resourceNotFoundException: ResourceNotFoundException;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    validationException?: never;
    runtimeClientError?: never;
    $unknown?: never;
  }

  /**
   * <p>The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.</p>
   * @public
   */
  export interface ServiceQuotaExceededExceptionMember {
    chunk?: never;
    accessDeniedException?: never;
    internalServerException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException: ServiceQuotaExceededException;
    throttlingException?: never;
    validationException?: never;
    runtimeClientError?: never;
    $unknown?: never;
  }

  /**
   * <p>The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.</p>
   * @public
   */
  export interface ThrottlingExceptionMember {
    chunk?: never;
    accessDeniedException?: never;
    internalServerException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException: ThrottlingException;
    validationException?: never;
    runtimeClientError?: never;
    $unknown?: never;
  }

  /**
   * <p>The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.</p>
   * @public
   */
  export interface ValidationExceptionMember {
    chunk?: never;
    accessDeniedException?: never;
    internalServerException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    validationException: ValidationException;
    runtimeClientError?: never;
    $unknown?: never;
  }

  /**
   * <p>The exception that occurs when there is an error in the runtime client. This can happen due to network issues, invalid configuration, or other client-side problems. Check the error message for specific details about the error.</p>
   * @public
   */
  export interface RuntimeClientErrorMember {
    chunk?: never;
    accessDeniedException?: never;
    internalServerException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    validationException?: never;
    runtimeClientError: RuntimeClientError;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    chunk?: never;
    accessDeniedException?: never;
    internalServerException?: never;
    resourceNotFoundException?: never;
    serviceQuotaExceededException?: never;
    throttlingException?: never;
    validationException?: never;
    runtimeClientError?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    chunk: (value: ResponseChunk) => T;
    accessDeniedException: (value: AccessDeniedException) => T;
    internalServerException: (value: InternalServerException) => T;
    resourceNotFoundException: (value: ResourceNotFoundException) => T;
    serviceQuotaExceededException: (value: ServiceQuotaExceededException) => T;
    throttlingException: (value: ThrottlingException) => T;
    validationException: (value: ValidationException) => T;
    runtimeClientError: (value: RuntimeClientError) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Response for InvokeAgentRuntimeCommand operation.</p>
 * @public
 */
export interface InvokeAgentRuntimeCommandResponse {
  /**
   * <p>The unique identifier of the runtime session in which the command was executed.</p>
   * @public
   */
  runtimeSessionId?: string | undefined;

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
   * <p>The HTTP status code of the response. A status code of 200 indicates a successful operation. Other status codes indicate various error conditions.</p>
   * @public
   */
  statusCode?: number | undefined;

  /**
   * <p>The streaming output from the command execution. This stream contains events that provide real-time updates including standard output, standard error, and completion status.</p>
   * @public
   */
  stream: AsyncIterable<InvokeAgentRuntimeCommandStreamOutput> | undefined;
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
 * <p> The structured skill definition with a schema version and inline content.</p>
 * @public
 */
export interface SkillDefinition {
  /**
   * <p> The schema version of the skill definition. If you don't specify a version, the service detects it automatically.</p>
   * @public
   */
  schemaVersion?: string | undefined;

  /**
   * <p> The inline content of the skill definition.</p>
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * <p> The skill markdown definition for agent skills descriptors.</p>
 * @public
 */
export interface SkillMdDefinition {
  /**
   * <p> The inline markdown content of the skill definition.</p>
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * <p> The agent skills descriptor configuration for a registry record.</p>
 * @public
 */
export interface AgentSkillsDescriptor {
  /**
   * <p> The skill description in markdown format.</p>
   * @public
   */
  skillMd: SkillMdDefinition | undefined;

  /**
   * <p> The structured skill definition with a schema version and content.</p>
   * @public
   */
  skillDefinition?: SkillDefinition | undefined;
}

/**
 * <p>A value used in filter comparisons, supporting different data types.</p>
 * @public
 */
export type FilterValue =
  | FilterValue.BooleanValueMember
  | FilterValue.DoubleValueMember
  | FilterValue.StringValueMember
  | FilterValue.$UnknownMember;

/**
 * @public
 */
export namespace FilterValue {
  /**
   * <p>A string value for text-based filtering.</p>
   * @public
   */
  export interface StringValueMember {
    stringValue: string;
    doubleValue?: never;
    booleanValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A numeric value for numerical filtering and comparisons.</p>
   * @public
   */
  export interface DoubleValueMember {
    stringValue?: never;
    doubleValue: number;
    booleanValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A boolean value for true/false filtering conditions.</p>
   * @public
   */
  export interface BooleanValueMember {
    stringValue?: never;
    doubleValue?: never;
    booleanValue: boolean;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    stringValue?: never;
    doubleValue?: never;
    booleanValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    stringValue: (value: string) => T;
    doubleValue: (value: number) => T;
    booleanValue: (value: boolean) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A filter for narrowing down agent traces from CloudWatch Logs based on key-value comparisons.</p>
 * @public
 */
export interface CloudWatchLogsFilter {
  /**
   * <p>The key or field name to filter on within the agent trace data.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The comparison operator to use for filtering.</p>
   * @public
   */
  operator: CloudWatchLogsFilterOperator | undefined;

  /**
   * <p>The value to compare against using the specified operator.</p>
   * @public
   */
  value: FilterValue | undefined;
}

/**
 * <p>A rule configuration for filtering agent traces from CloudWatch Logs.</p>
 * @public
 */
export interface CloudWatchLogsRule {
  /**
   * <p>The list of filters to apply when reading agent traces.</p>
   * @public
   */
  filters?: CloudWatchLogsFilter[] | undefined;
}

/**
 * <p>Configuration for reading agent traces from CloudWatch Logs for recommendation analysis.</p>
 * @public
 */
export interface CloudWatchLogsTraceConfig {
  /**
   * <p>The list of CloudWatch log group ARNs to read agent traces from.</p>
   * @public
   */
  logGroupArns: string[] | undefined;

  /**
   * <p>The list of service names to filter traces within the specified log groups.</p>
   * @public
   */
  serviceNames: string[] | undefined;

  /**
   * <p>The start time of the time range to read traces from.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The end time of the time range to read traces from.</p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>Optional rule configuration for filtering traces.</p>
   * @public
   */
  rule?: CloudWatchLogsRule | undefined;
}

/**
 * <p>The configuration specifying where to read agent traces from for recommendation analysis.</p>
 * @public
 */
export type AgentTracesConfig =
  | AgentTracesConfig.CloudwatchLogsMember
  | AgentTracesConfig.SessionSpansMember
  | AgentTracesConfig.$UnknownMember;

/**
 * @public
 */
export namespace AgentTracesConfig {
  /**
   * <p>Agent traces provided as inline session spans in OpenTelemetry format.</p>
   * @public
   */
  export interface SessionSpansMember {
    sessionSpans: __DocumentType[];
    cloudwatchLogs?: never;
    $unknown?: never;
  }

  /**
   * <p>Agent traces read from CloudWatch Logs.</p>
   * @public
   */
  export interface CloudwatchLogsMember {
    sessionSpans?: never;
    cloudwatchLogs: CloudWatchLogsTraceConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sessionSpans?: never;
    cloudwatchLogs?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    sessionSpans: (value: __DocumentType[]) => T;
    cloudwatchLogs: (value: CloudWatchLogsTraceConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface SaveBrowserSessionProfileRequest {
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
   * <p>The unique identifier for the browser profile. This identifier is used to reference the profile when starting new browser sessions. The identifier must follow the pattern of an alphanumeric name (up to 48 characters) followed by a hyphen and a 10-character alphanumeric suffix.</p>
   * @public
   */
  profileIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the browser associated with the session from which to save the profile.</p>
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the browser session from which to save the profile. The session must be active when saving the profile.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock AgentCore ignores the request, but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface SaveBrowserSessionProfileResponse {
  /**
   * <p>The unique identifier of the saved browser profile.</p>
   * @public
   */
  profileIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the browser associated with the session from which the profile was saved.</p>
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the browser session from which the profile was saved.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The timestamp when the browser profile was last updated. This value is in ISO 8601 format.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
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
 * <p>The Amazon Web Services Secrets Manager location configuration.</p>
 * @public
 */
export interface SecretsManagerLocation {
  /**
   * <p>The ARN of the Amazon Web Services Secrets Manager secret containing the certificate.</p>
   * @public
   */
  secretArn: string | undefined;
}

/**
 * <p>The location from which to retrieve a certificate.</p>
 * @public
 */
export type CertificateLocation =
  | CertificateLocation.SecretsManagerMember
  | CertificateLocation.$UnknownMember;

/**
 * @public
 */
export namespace CertificateLocation {
  /**
   * <p>The Amazon Web Services Secrets Manager location of the certificate.</p>
   * @public
   */
  export interface SecretsManagerMember {
    secretsManager: SecretsManagerLocation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    secretsManager?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    secretsManager: (value: SecretsManagerLocation) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A certificate to install in the browser or code interpreter session.</p>
 * @public
 */
export interface Certificate {
  /**
   * <p>The location of the certificate.</p>
   * @public
   */
  location: CertificateLocation | undefined;
}

/**
 * <p>The Amazon S3 location configuration of a resource.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>The name of the Amazon S3 bucket where the resource is stored.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>The name of the Amazon S3 prefix/key where the resource is stored.</p>
   * @public
   */
  prefix: string | undefined;

  /**
   * <p>The name of the Amazon S3 version ID where the resource is stored (Optional).</p>
   * @public
   */
  versionId?: string | undefined;
}

/**
 * <p>The location of the browser extension.</p>
 * @public
 */
export type ResourceLocation =
  | ResourceLocation.S3Member
  | ResourceLocation.$UnknownMember;

/**
 * @public
 */
export namespace ResourceLocation {
  /**
   * <p>The Amazon S3 location of the resource. Use this when the resource is stored in an Amazon S3 bucket.</p>
   * @public
   */
  export interface S3Member {
    s3: S3Location;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: S3Location) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Browser enterprise policy configuration.</p>
 * @public
 */
export interface BrowserEnterprisePolicy {
  /**
   * <p>The location of the enterprise policy file.</p>
   * @public
   */
  location: ResourceLocation | undefined;

  /**
   * <p>The enterprise policy type. See BrowserEnterprisePolicyType.</p>
   * @public
   */
  type?: BrowserEnterprisePolicyType | undefined;
}

/**
 * <p>Browser extension configuration.</p>
 * @public
 */
export interface BrowserExtension {
  /**
   * <p>The location where the browser extension files are stored. This specifies the source from which the extension will be loaded and installed.</p>
   * @public
   */
  location: ResourceLocation | undefined;
}

/**
 * <p>The configuration for a browser profile in Amazon Bedrock AgentCore. A browser profile contains persistent browser data such as cookies and local storage that can be saved from one browser session and reused in subsequent sessions. Browser profiles enable continuity for tasks that require authentication, maintain user preferences, or depend on previously stored browser state.</p>
 * @public
 */
export interface BrowserProfileConfiguration {
  /**
   * <p>The unique identifier of the browser profile. This identifier is used to reference the profile when starting new browser sessions or saving session data to the profile.</p>
   * @public
   */
  profileIdentifier: string | undefined;
}

/**
 * <p>Configuration for domains that should bypass all proxies and connect directly to the internet. These bypass rules take precedence over all proxy routing rules.</p>
 * @public
 */
export interface ProxyBypass {
  /**
   * <p>Array of domain patterns that should bypass the proxy. Supports <code>.amazonaws.com</code> for subdomain matching or <code>amazonaws.com</code> for exact domain matching. Requests to these domains connect directly without using any proxy. Maximum 253 characters per pattern.</p>
   * @public
   */
  domainPatterns?: string[] | undefined;
}

/**
 * <p>Configuration for HTTP Basic Authentication using credentials stored in Amazon Web Services Secrets Manager. The secret must contain a JSON object with <code>username</code> and <code>password</code> string fields. Username allows alphanumeric characters and <code>@._+=-</code> symbols (pattern: <code>^[a-zA-Z0-9@._+=\-]+$</code>). Password allows alphanumeric characters and <code>@._+=-!#$%&amp;*</code> symbols (pattern: <code>^[a-zA-Z0-9@._+=\-!#$%&amp;*]+$</code>). Both fields have a maximum length of 256 characters.</p>
 * @public
 */
export interface BasicAuth {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret containing proxy credentials. The secret must be a JSON object with <code>username</code> and <code>password</code> string fields that meet validation requirements. The caller must have <code>secretsmanager:GetSecretValue</code> permission for this ARN. Example secret format: <code>\{"username": "proxy_user", "password": "secure_password"\}</code> </p>
   * @public
   */
  secretArn: string | undefined;
}

/**
 * <p>Union type representing different proxy authentication methods. Currently supports HTTP Basic Authentication (username and password).</p>
 * @public
 */
export type ProxyCredentials =
  | ProxyCredentials.BasicAuthMember
  | ProxyCredentials.$UnknownMember;

/**
 * @public
 */
export namespace ProxyCredentials {
  /**
   * <p>HTTP Basic Authentication credentials (username and password) stored in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  export interface BasicAuthMember {
    basicAuth: BasicAuth;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    basicAuth?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    basicAuth: (value: BasicAuth) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Configuration for a customer-managed external proxy server. Includes server location, optional domain-based routing patterns, and authentication credentials.</p>
 * @public
 */
export interface ExternalProxy {
  /**
   * <p>The hostname of the proxy server. Must be a valid DNS hostname (maximum 253 characters).</p>
   * @public
   */
  server: string | undefined;

  /**
   * <p>The port number of the proxy server. Valid range: 1-65535.</p>
   * @public
   */
  port: number | undefined;

  /**
   * <p>Optional array of domain patterns that should route through this specific proxy. Supports <code>.example.com</code> for subdomain matching (matches any subdomain of example.com) or <code>example.com</code> for exact domain matching. If omitted, this proxy acts as a catch-all for domains not matched by other proxies. Maximum 100 patterns per proxy, each up to 253 characters.</p>
   * @public
   */
  domainPatterns?: string[] | undefined;

  /**
   * <p>Optional authentication credentials for the proxy server. If omitted, the proxy is accessed without authentication (useful for IP-allowlisted proxies).</p>
   * @public
   */
  credentials?: ProxyCredentials | undefined;
}

/**
 * <p>Union type representing different proxy configurations. Currently supports external customer-managed proxies.</p>
 * @public
 */
export type Proxy =
  | Proxy.ExternalProxyMember
  | Proxy.$UnknownMember;

/**
 * @public
 */
export namespace Proxy {
  /**
   * <p>Configuration for an external customer-managed proxy server.</p>
   * @public
   */
  export interface ExternalProxyMember {
    externalProxy: ExternalProxy;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    externalProxy?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    externalProxy: (value: ExternalProxy) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Configuration for routing browser traffic through customer-managed proxy servers. Supports 1-5 proxy servers for domain-based routing and proxy bypass rules.</p>
 * @public
 */
export interface ProxyConfiguration {
  /**
   * <p>An array of 1-5 proxy server configurations for domain-based routing. Each proxy can specify which domains it handles via <code>domainPatterns</code>, enabling flexible routing of different traffic through different proxies based on destination domain.</p>
   * @public
   */
  proxies: Proxy[] | undefined;

  /**
   * <p>Optional configuration for domains that should bypass all proxies and connect directly to their destination, like the internet. Takes precedence over all proxy routing rules.</p>
   * @public
   */
  bypass?: ProxyBypass | undefined;
}

/**
 * <p>The configuration for a stream that enables programmatic control of a browser session in Amazon Bedrock AgentCore. This stream provides a bidirectional communication channel for sending commands to the browser and receiving responses, allowing agents to automate web interactions such as navigation, form filling, and element clicking.</p>
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
 * <p>The configuration for a stream that provides a visual representation of a browser session in Amazon Bedrock AgentCore. This stream enables agents to observe the current state of the browser, including rendered web pages, visual elements, and the results of interactions.</p>
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
 * <p>The collection of streams associated with a browser session in Amazon Bedrock AgentCore. These streams provide different ways to interact with and observe the browser session, including programmatic control and visual representation of the browser content.</p>
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
   * <p>The list of browser extensions that are configured in the browser session.</p>
   * @public
   */
  extensions?: BrowserExtension[] | undefined;

  /**
   * <p>A list of files containing enterprise policies for the browser session.</p>
   * @public
   */
  enterprisePolicies?: BrowserEnterprisePolicy[] | undefined;

  /**
   * <p>The browser profile configuration associated with this session. Contains the profile identifier that links to persistent browser data such as cookies and local storage.</p>
   * @public
   */
  profileConfiguration?: BrowserProfileConfiguration | undefined;

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
   * <p>The active proxy configuration for this browser session. This field is only present if proxy configuration was provided when the session was started using <code>StartBrowserSession</code>. The configuration includes proxy servers, domain bypass rules and the proxy authentication credentials.</p>
   * @public
   */
  proxyConfiguration?: ProxyConfiguration | undefined;

  /**
   * <p>The list of certificates installed in the browser session.</p>
   * @public
   */
  certificates?: Certificate[] | undefined;

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
 * <p>Arguments for a key press action.</p>
 * @public
 */
export interface KeyPressArguments {
  /**
   * <p>The key name to press (for example, <code>enter</code>, <code>tab</code>, <code>escape</code>).</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The number of times to press the key. Valid range: 1–100. Defaults to 1.</p>
   * @public
   */
  presses?: number | undefined;
}

/**
 * <p>Arguments for a key shortcut action.</p>
 * @public
 */
export interface KeyShortcutArguments {
  /**
   * <p>The key combination to press (for example, <code>["ctrl", "s"]</code>). Maximum 5 keys.</p>
   * @public
   */
  keys: string[] | undefined;
}

/**
 * <p>Arguments for a key type action.</p>
 * @public
 */
export interface KeyTypeArguments {
  /**
   * <p>The text string to type. Maximum length: 10,000 characters.</p>
   * @public
   */
  text: string | undefined;
}

/**
 * <p>Arguments for a mouse click action.</p>
 * @public
 */
export interface MouseClickArguments {
  /**
   * <p>The X coordinate on screen where the click occurs.</p>
   * @public
   */
  x: number | undefined;

  /**
   * <p>The Y coordinate on screen where the click occurs.</p>
   * @public
   */
  y: number | undefined;

  /**
   * <p>The mouse button to use. Defaults to <code>LEFT</code>.</p>
   * @public
   */
  button?: MouseButton | undefined;

  /**
   * <p>The number of clicks to perform. Valid range: 1–10. Defaults to 1.</p>
   * @public
   */
  clickCount?: number | undefined;
}

/**
 * <p>Arguments for a mouse drag action.</p>
 * @public
 */
export interface MouseDragArguments {
  /**
   * <p>The ending X coordinate for the drag.</p>
   * @public
   */
  endX: number | undefined;

  /**
   * <p>The ending Y coordinate for the drag.</p>
   * @public
   */
  endY: number | undefined;

  /**
   * <p>The starting X coordinate for the drag.</p>
   * @public
   */
  startX: number | undefined;

  /**
   * <p>The starting Y coordinate for the drag.</p>
   * @public
   */
  startY: number | undefined;

  /**
   * <p>The mouse button to use for the drag. Defaults to <code>LEFT</code>.</p>
   * @public
   */
  button?: MouseButton | undefined;
}

/**
 * <p>Arguments for a mouse move action.</p>
 * @public
 */
export interface MouseMoveArguments {
  /**
   * <p>The target X coordinate on screen.</p>
   * @public
   */
  x: number | undefined;

  /**
   * <p>The target Y coordinate on screen.</p>
   * @public
   */
  y: number | undefined;
}

/**
 * <p>Arguments for a mouse scroll action.</p>
 * @public
 */
export interface MouseScrollArguments {
  /**
   * <p>The X coordinate on screen where the scroll occurs.</p>
   * @public
   */
  x: number | undefined;

  /**
   * <p>The Y coordinate on screen where the scroll occurs.</p>
   * @public
   */
  y: number | undefined;

  /**
   * <p>The horizontal scroll delta. Valid range: -1000 to 1000.</p>
   * @public
   */
  deltaX?: number | undefined;

  /**
   * <p>The vertical scroll delta. Valid range: -1000 to 1000. Negative values scroll down.</p>
   * @public
   */
  deltaY?: number | undefined;
}

/**
 * <p>Arguments for a screenshot action.</p>
 * @public
 */
export interface ScreenshotArguments {
  /**
   * <p>The image format for the screenshot. Defaults to <code>PNG</code>.</p>
   * @public
   */
  format?: ScreenshotFormat | undefined;
}

/**
 * <p>The browser action to perform. Exactly one member must be set per request.</p>
 * @public
 */
export type BrowserAction =
  | BrowserAction.KeyPressMember
  | BrowserAction.KeyShortcutMember
  | BrowserAction.KeyTypeMember
  | BrowserAction.MouseClickMember
  | BrowserAction.MouseDragMember
  | BrowserAction.MouseMoveMember
  | BrowserAction.MouseScrollMember
  | BrowserAction.ScreenshotMember
  | BrowserAction.$UnknownMember;

/**
 * @public
 */
export namespace BrowserAction {
  /**
   * <p>Click at the specified coordinates.</p>
   * @public
   */
  export interface MouseClickMember {
    mouseClick: MouseClickArguments;
    mouseMove?: never;
    mouseDrag?: never;
    mouseScroll?: never;
    keyType?: never;
    keyPress?: never;
    keyShortcut?: never;
    screenshot?: never;
    $unknown?: never;
  }

  /**
   * <p>Move the cursor to the specified coordinates.</p>
   * @public
   */
  export interface MouseMoveMember {
    mouseClick?: never;
    mouseMove: MouseMoveArguments;
    mouseDrag?: never;
    mouseScroll?: never;
    keyType?: never;
    keyPress?: never;
    keyShortcut?: never;
    screenshot?: never;
    $unknown?: never;
  }

  /**
   * <p>Drag from a start position to an end position.</p>
   * @public
   */
  export interface MouseDragMember {
    mouseClick?: never;
    mouseMove?: never;
    mouseDrag: MouseDragArguments;
    mouseScroll?: never;
    keyType?: never;
    keyPress?: never;
    keyShortcut?: never;
    screenshot?: never;
    $unknown?: never;
  }

  /**
   * <p>Scroll at the specified position.</p>
   * @public
   */
  export interface MouseScrollMember {
    mouseClick?: never;
    mouseMove?: never;
    mouseDrag?: never;
    mouseScroll: MouseScrollArguments;
    keyType?: never;
    keyPress?: never;
    keyShortcut?: never;
    screenshot?: never;
    $unknown?: never;
  }

  /**
   * <p>Type a string of text.</p>
   * @public
   */
  export interface KeyTypeMember {
    mouseClick?: never;
    mouseMove?: never;
    mouseDrag?: never;
    mouseScroll?: never;
    keyType: KeyTypeArguments;
    keyPress?: never;
    keyShortcut?: never;
    screenshot?: never;
    $unknown?: never;
  }

  /**
   * <p>Press a key one or more times.</p>
   * @public
   */
  export interface KeyPressMember {
    mouseClick?: never;
    mouseMove?: never;
    mouseDrag?: never;
    mouseScroll?: never;
    keyType?: never;
    keyPress: KeyPressArguments;
    keyShortcut?: never;
    screenshot?: never;
    $unknown?: never;
  }

  /**
   * <p>Press a key combination.</p>
   * @public
   */
  export interface KeyShortcutMember {
    mouseClick?: never;
    mouseMove?: never;
    mouseDrag?: never;
    mouseScroll?: never;
    keyType?: never;
    keyPress?: never;
    keyShortcut: KeyShortcutArguments;
    screenshot?: never;
    $unknown?: never;
  }

  /**
   * <p>Capture a full-screen screenshot.</p>
   * @public
   */
  export interface ScreenshotMember {
    mouseClick?: never;
    mouseMove?: never;
    mouseDrag?: never;
    mouseScroll?: never;
    keyType?: never;
    keyPress?: never;
    keyShortcut?: never;
    screenshot: ScreenshotArguments;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    mouseClick?: never;
    mouseMove?: never;
    mouseDrag?: never;
    mouseScroll?: never;
    keyType?: never;
    keyPress?: never;
    keyShortcut?: never;
    screenshot?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    mouseClick: (value: MouseClickArguments) => T;
    mouseMove: (value: MouseMoveArguments) => T;
    mouseDrag: (value: MouseDragArguments) => T;
    mouseScroll: (value: MouseScrollArguments) => T;
    keyType: (value: KeyTypeArguments) => T;
    keyPress: (value: KeyPressArguments) => T;
    keyShortcut: (value: KeyShortcutArguments) => T;
    screenshot: (value: ScreenshotArguments) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Request for the InvokeBrowser operation.</p>
 * @public
 */
export interface InvokeBrowserRequest {
  /**
   * <p>The unique identifier of the browser associated with the session. This must match the identifier used when creating the session with <code>StartBrowserSession</code>.</p>
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the browser session on which to perform the action. This must be an active session created with <code>StartBrowserSession</code>.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The browser action to perform. Exactly one member of the <code>BrowserAction</code> union must be set per request.</p>
   * @public
   */
  action: BrowserAction | undefined;
}

/**
 * <p>The result of a key press action.</p>
 * @public
 */
export interface KeyPressResult {
  /**
   * <p>The status of the action execution.</p>
   * @public
   */
  status: BrowserActionStatus | undefined;

  /**
   * <p>The error message. Present only when the action failed.</p>
   * @public
   */
  error?: string | undefined;
}

/**
 * <p>The result of a key shortcut action.</p>
 * @public
 */
export interface KeyShortcutResult {
  /**
   * <p>The status of the action execution.</p>
   * @public
   */
  status: BrowserActionStatus | undefined;

  /**
   * <p>The error message. Present only when the action failed.</p>
   * @public
   */
  error?: string | undefined;
}

/**
 * <p>The result of a key type action.</p>
 * @public
 */
export interface KeyTypeResult {
  /**
   * <p>The status of the action execution.</p>
   * @public
   */
  status: BrowserActionStatus | undefined;

  /**
   * <p>The error message. Present only when the action failed.</p>
   * @public
   */
  error?: string | undefined;
}

/**
 * <p>The result of a mouse click action.</p>
 * @public
 */
export interface MouseClickResult {
  /**
   * <p>The status of the action execution.</p>
   * @public
   */
  status: BrowserActionStatus | undefined;

  /**
   * <p>The error message. Present only when the action failed.</p>
   * @public
   */
  error?: string | undefined;
}

/**
 * <p>The result of a mouse drag action.</p>
 * @public
 */
export interface MouseDragResult {
  /**
   * <p>The status of the action execution.</p>
   * @public
   */
  status: BrowserActionStatus | undefined;

  /**
   * <p>The error message. Present only when the action failed.</p>
   * @public
   */
  error?: string | undefined;
}

/**
 * <p>The result of a mouse move action.</p>
 * @public
 */
export interface MouseMoveResult {
  /**
   * <p>The status of the action execution.</p>
   * @public
   */
  status: BrowserActionStatus | undefined;

  /**
   * <p>The error message. Present only when the action failed.</p>
   * @public
   */
  error?: string | undefined;
}

/**
 * <p>The result of a mouse scroll action.</p>
 * @public
 */
export interface MouseScrollResult {
  /**
   * <p>The status of the action execution.</p>
   * @public
   */
  status: BrowserActionStatus | undefined;

  /**
   * <p>The error message. Present only when the action failed.</p>
   * @public
   */
  error?: string | undefined;
}

/**
 * <p>The result of a screenshot action.</p>
 * @public
 */
export interface ScreenshotResult {
  /**
   * <p>The status of the action execution.</p>
   * @public
   */
  status: BrowserActionStatus | undefined;

  /**
   * <p>The error message. Present only when the action failed.</p>
   * @public
   */
  error?: string | undefined;

  /**
   * <p>The base64-encoded image data. Present only when the action succeeded.</p>
   * @public
   */
  data?: Uint8Array | undefined;
}

/**
 * <p>The result of a browser action execution. Exactly one member is set, matching the action that was performed.</p>
 * @public
 */
export type BrowserActionResult =
  | BrowserActionResult.KeyPressMember
  | BrowserActionResult.KeyShortcutMember
  | BrowserActionResult.KeyTypeMember
  | BrowserActionResult.MouseClickMember
  | BrowserActionResult.MouseDragMember
  | BrowserActionResult.MouseMoveMember
  | BrowserActionResult.MouseScrollMember
  | BrowserActionResult.ScreenshotMember
  | BrowserActionResult.$UnknownMember;

/**
 * @public
 */
export namespace BrowserActionResult {
  /**
   * <p>The result of a mouse click action.</p>
   * @public
   */
  export interface MouseClickMember {
    mouseClick: MouseClickResult;
    mouseMove?: never;
    mouseDrag?: never;
    mouseScroll?: never;
    keyType?: never;
    keyPress?: never;
    keyShortcut?: never;
    screenshot?: never;
    $unknown?: never;
  }

  /**
   * <p>The result of a mouse move action.</p>
   * @public
   */
  export interface MouseMoveMember {
    mouseClick?: never;
    mouseMove: MouseMoveResult;
    mouseDrag?: never;
    mouseScroll?: never;
    keyType?: never;
    keyPress?: never;
    keyShortcut?: never;
    screenshot?: never;
    $unknown?: never;
  }

  /**
   * <p>The result of a mouse drag action.</p>
   * @public
   */
  export interface MouseDragMember {
    mouseClick?: never;
    mouseMove?: never;
    mouseDrag: MouseDragResult;
    mouseScroll?: never;
    keyType?: never;
    keyPress?: never;
    keyShortcut?: never;
    screenshot?: never;
    $unknown?: never;
  }

  /**
   * <p>The result of a mouse scroll action.</p>
   * @public
   */
  export interface MouseScrollMember {
    mouseClick?: never;
    mouseMove?: never;
    mouseDrag?: never;
    mouseScroll: MouseScrollResult;
    keyType?: never;
    keyPress?: never;
    keyShortcut?: never;
    screenshot?: never;
    $unknown?: never;
  }

  /**
   * <p>The result of a key type action.</p>
   * @public
   */
  export interface KeyTypeMember {
    mouseClick?: never;
    mouseMove?: never;
    mouseDrag?: never;
    mouseScroll?: never;
    keyType: KeyTypeResult;
    keyPress?: never;
    keyShortcut?: never;
    screenshot?: never;
    $unknown?: never;
  }

  /**
   * <p>The result of a key press action.</p>
   * @public
   */
  export interface KeyPressMember {
    mouseClick?: never;
    mouseMove?: never;
    mouseDrag?: never;
    mouseScroll?: never;
    keyType?: never;
    keyPress: KeyPressResult;
    keyShortcut?: never;
    screenshot?: never;
    $unknown?: never;
  }

  /**
   * <p>The result of a key shortcut action.</p>
   * @public
   */
  export interface KeyShortcutMember {
    mouseClick?: never;
    mouseMove?: never;
    mouseDrag?: never;
    mouseScroll?: never;
    keyType?: never;
    keyPress?: never;
    keyShortcut: KeyShortcutResult;
    screenshot?: never;
    $unknown?: never;
  }

  /**
   * <p>The result of a screenshot action.</p>
   * @public
   */
  export interface ScreenshotMember {
    mouseClick?: never;
    mouseMove?: never;
    mouseDrag?: never;
    mouseScroll?: never;
    keyType?: never;
    keyPress?: never;
    keyShortcut?: never;
    screenshot: ScreenshotResult;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    mouseClick?: never;
    mouseMove?: never;
    mouseDrag?: never;
    mouseScroll?: never;
    keyType?: never;
    keyPress?: never;
    keyShortcut?: never;
    screenshot?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    mouseClick: (value: MouseClickResult) => T;
    mouseMove: (value: MouseMoveResult) => T;
    mouseDrag: (value: MouseDragResult) => T;
    mouseScroll: (value: MouseScrollResult) => T;
    keyType: (value: KeyTypeResult) => T;
    keyPress: (value: KeyPressResult) => T;
    keyShortcut: (value: KeyShortcutResult) => T;
    screenshot: (value: ScreenshotResult) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Response for the InvokeBrowser operation.</p>
 * @public
 */
export interface InvokeBrowserResponse {
  /**
   * <p>The result of the browser action. The member set in the result corresponds to the action that was performed.</p>
   * @public
   */
  result: BrowserActionResult | undefined;

  /**
   * <p>The unique identifier of the browser session on which the action was performed.</p>
   * @public
   */
  sessionId: string | undefined;
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
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. If not specified, Amazon Bedrock AgentCore returns the first page of results.</p>
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
 * <p>A condensed representation of a browser session in Amazon Bedrock AgentCore. This structure contains key information about a browser session, including identifiers, status, and timestamps, without the full details of the session configuration and streams.</p>
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
   * <p>The duration in seconds (time-to-live) after which the session automatically terminates, regardless of ongoing activity. Defaults to 3600 seconds (1 hour). Recommended minimum: 60 seconds. Maximum allowed: 28,800 seconds (8 hours).</p>
   * @public
   */
  sessionTimeoutSeconds?: number | undefined;

  /**
   * <p>The dimensions of the browser viewport for this session. This determines the visible area of the web content and affects how web pages are rendered. If not specified, Amazon Bedrock AgentCore uses a default viewport size.</p>
   * @public
   */
  viewPort?: ViewPort | undefined;

  /**
   * <p>A list of browser extensions to load into the browser session.</p>
   * @public
   */
  extensions?: BrowserExtension[] | undefined;

  /**
   * <p>The browser profile configuration to use for this session. A browser profile contains persistent data such as cookies and local storage that can be reused across multiple browser sessions. If specified, the session initializes with the profile's stored data, enabling continuity for tasks that require authentication or personalized settings.</p>
   * @public
   */
  profileConfiguration?: BrowserProfileConfiguration | undefined;

  /**
   * <p>Optional proxy configuration for routing browser traffic through customer-specified proxy servers. When provided, enables HTTP Basic authentication via Amazon Web Services Secrets Manager and domain-based routing rules. Requires <code>secretsmanager:GetSecretValue</code> IAM permission for the specified secret ARNs.</p>
   * @public
   */
  proxyConfiguration?: ProxyConfiguration | undefined;

  /**
   * <p>A list of files containing enterprise policies for the browser.</p>
   * @public
   */
  enterprisePolicies?: BrowserEnterprisePolicy[] | undefined;

  /**
   * <p>A list of certificates to install in the browser session.</p>
   * @public
   */
  certificates?: Certificate[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock AgentCore ignores the request, but does not return an error. This parameter helps prevent the creation of duplicate sessions if there are temporary network issues.</p>
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
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock AgentCore ignores the request, but does not return an error.</p>
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
export type StreamUpdate =
  | StreamUpdate.AutomationStreamUpdateMember
  | StreamUpdate.$UnknownMember;

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
   * <p>The collection of streams associated with a browser session in Amazon Bedrock AgentCore. These streams provide different ways to interact with and observe the browser session, including programmatic control and visual representation of the browser content.</p>
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

  /**
   * <p>The list of certificates installed in the code interpreter session.</p>
   * @public
   */
  certificates?: Certificate[] | undefined;
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
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. If not specified, Amazon Bedrock AgentCore returns the first page of results.</p>
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
 * <p>A condensed representation of a code interpreter session in Amazon Bedrock AgentCore. This structure contains key information about a code interpreter session, including identifiers, status, and timestamps, without the full details of the session configuration.</p>
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
   * <p>The duration in seconds (time-to-live) after which the session automatically terminates, regardless of ongoing activity. Defaults to 900 seconds (15 minutes). Recommended minimum: 60 seconds. Maximum allowed: 28,800 seconds (8 hours).</p>
   * @public
   */
  sessionTimeoutSeconds?: number | undefined;

  /**
   * <p>A list of certificates to install in the code interpreter session.</p>
   * @public
   */
  certificates?: Certificate[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock AgentCore ignores the request, but does not return an error. This parameter helps prevent the creation of duplicate sessions if there are temporary network issues.</p>
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
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock AgentCore ignores the request, but does not return an error.</p>
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
   * <p>The OAuth2.0 token issued by the user’s identity provider that was used to generate the workload access token</p>
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
 * <p>A filter to restrict which gateway target paths are included in the A/B test.</p>
 * @public
 */
export interface GatewayFilter {
  /**
   * <p>A list of target path patterns to include in the A/B test.</p>
   * @public
   */
  targetPaths?: string[] | undefined;
}

/**
 * <p>A reference to a specific version of a configuration bundle.</p>
 * @public
 */
export interface ConfigurationBundleRef {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration bundle.</p>
   * @public
   */
  bundleArn: string | undefined;

  /**
   * <p>The version of the configuration bundle.</p>
   * @public
   */
  bundleVersion: string | undefined;
}

/**
 * <p>A reference to a gateway target.</p>
 * @public
 */
export interface TargetRef {
  /**
   * <p>The name of the gateway target.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>The configuration for an A/B test variant.</p>
 * @public
 */
export interface VariantConfiguration {
  /**
   * <p>A reference to a configuration bundle version to use for this variant.</p>
   * @public
   */
  configurationBundle?: ConfigurationBundleRef | undefined;

  /**
   * <p>A reference to a gateway target to route traffic to for this variant.</p>
   * @public
   */
  target?: TargetRef | undefined;
}

/**
 * <p>A variant in an A/B test, representing either the control (C) or treatment (T1) configuration.</p>
 * @public
 */
export interface Variant {
  /**
   * <p>The name of the variant. Must be <code>C</code> for control or <code>T1</code> for treatment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The percentage of traffic to route to this variant. Weights across all variants must sum to 100.</p>
   * @public
   */
  weight: number | undefined;

  /**
   * <p>The configuration for this variant, including the configuration bundle or target reference.</p>
   * @public
   */
  variantConfiguration: VariantConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateABTestRequest {
  /**
   * <p>The name of the A/B test. Must be unique within your account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the A/B test.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway to use for traffic splitting.</p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>The list of variants for the A/B test. Must contain exactly two variants: a control (C) and a treatment (T1), each with a configuration bundle or target reference and a traffic weight.</p>
   * @public
   */
  variants: Variant[] | undefined;

  /**
   * <p>Optional filter to restrict which gateway target paths are included in the A/B test.</p>
   * @public
   */
  gatewayFilter?: GatewayFilter | undefined;

  /**
   * <p>The evaluation configuration specifying which online evaluation configurations to use for measuring variant performance.</p>
   * @public
   */
  evaluationConfig: ABTestEvaluationConfig | undefined;

  /**
   * <p>The IAM role ARN that grants permissions for the A/B test to access gateway and evaluation resources.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Whether to enable the A/B test immediately upon creation. If true, traffic splitting begins automatically.</p>
   * @public
   */
  enableOnCreate?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, the service ignores the request, but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateABTestResponse {
  /**
   * <p>The unique identifier of the created A/B test.</p>
   * @public
   */
  abTestId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created A/B test.</p>
   * @public
   */
  abTestArn: string | undefined;

  /**
   * <p>The name of the A/B test.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The status of the A/B test.</p>
   * @public
   */
  status: ABTestStatus | undefined;

  /**
   * <p>The execution status indicating whether the A/B test is currently running.</p>
   * @public
   */
  executionStatus: ABTestExecutionStatus | undefined;

  /**
   * <p>The timestamp when the A/B test was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteABTestRequest {
  /**
   * <p>The unique identifier of the A/B test to delete.</p>
   * @public
   */
  abTestId: string | undefined;
}

/**
 * @public
 */
export interface DeleteABTestResponse {
  /**
   * <p>The unique identifier of the deleted A/B test.</p>
   * @public
   */
  abTestId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted A/B test.</p>
   * @public
   */
  abTestArn: string | undefined;

  /**
   * <p>The status of the A/B test deletion operation.</p>
   * @public
   */
  status: ABTestStatus | undefined;
}

/**
 * @public
 */
export interface DeleteBatchEvaluationRequest {
  /**
   * <p>The unique identifier of the batch evaluation to delete.</p>
   * @public
   */
  batchEvaluationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBatchEvaluationResponse {
  /**
   * <p>The unique identifier of the deleted batch evaluation.</p>
   * @public
   */
  batchEvaluationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted batch evaluation.</p>
   * @public
   */
  batchEvaluationArn: string | undefined;

  /**
   * <p>The status of the batch evaluation deletion operation.</p>
   * @public
   */
  status: BatchEvaluationStatus | undefined;
}

/**
 * @public
 */
export interface DeleteRecommendationRequest {
  /**
   * <p>The unique identifier of the recommendation to delete.</p>
   * @public
   */
  recommendationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecommendationResponse {
  /**
   * <p>The unique identifier of the deleted recommendation.</p>
   * @public
   */
  recommendationId: string | undefined;

  /**
   * <p>The status of the recommendation deletion operation.</p>
   * @public
   */
  status: RecommendationStatus | undefined;
}

/**
 * <p> The input data structure containing agent session spans in OpenTelemetry format. Supports traces from frameworks like Strands (AgentCore Runtime) and LangGraph with OpenInference instrumentation for comprehensive evaluation. </p>
 * @public
 */
export type EvaluationInput =
  | EvaluationInput.SessionSpansMember
  | EvaluationInput.$UnknownMember;

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
 * <p> A content block for ground truth data in evaluation reference inputs. Supports text content for expected responses and assertions. </p>
 * @public
 */
export type EvaluationContent =
  | EvaluationContent.TextMember
  | EvaluationContent.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationContent {
  /**
   * <p> The text content of the ground truth data. Used for expected response text and assertion statements. </p>
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
export type Context =
  | Context.SpanContextMember
  | Context.$UnknownMember;

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
 * <p> The expected tool call trajectory for trajectory-based evaluation. </p>
 * @public
 */
export interface EvaluationExpectedTrajectory {
  /**
   * <p> The list of tool names representing the expected tool call sequence. </p>
   * @public
   */
  toolNames?: string[] | undefined;
}

/**
 * <p> A reference input containing ground truth data for evaluation, scoped to a specific context level (session or trace) through its span context. </p>
 * @public
 */
export interface EvaluationReferenceInput {
  /**
   * <p> The span context that identifies which session or trace this reference input applies to, used for correlating ground truth with agent output. </p>
   * @public
   */
  context: Context | undefined;

  /**
   * <p> The expected response for trace-level evaluation. Built-in evaluators that support this field compare the agent's actual response against this value for assessment. Custom evaluators can access it through the <code>\{expected_response\}</code> placeholder in their instructions. </p>
   * @public
   */
  expectedResponse?: EvaluationContent | undefined;

  /**
   * <p> A list of assertion statements for session-level evaluation. Each assertion describes an expected behavior or outcome the agent should demonstrate during the session. </p>
   * @public
   */
  assertions?: EvaluationContent[] | undefined;

  /**
   * <p> The expected tool call sequence for session-level trajectory evaluation. Contains a list of tool names representing the tools the agent is expected to invoke. </p>
   * @public
   */
  expectedTrajectory?: EvaluationExpectedTrajectory | undefined;
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
   * <p> The unique identifier of the evaluator to use for scoring. Can be a built-in evaluator (e.g., <code>Builtin.Helpfulness</code>, <code>Builtin.Correctness</code>) or a custom evaluator Id created through the control plane API. </p>
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

  /**
   * <p> Ground truth data to compare against agent responses during evaluation. Allows to provide expected responses, assertions, and expected tool trajectories at different evaluation levels. Session-level reference inputs apply to the entire conversation, while trace-level reference inputs target specific request-response interactions identified by trace ID. </p>
   * @public
   */
  evaluationReferenceInputs?: EvaluationReferenceInput[] | undefined;
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

  /**
   * <p> The list of reference input field names that were provided but not used by the evaluator. Helps identify which ground truth data was not consumed during evaluation. </p>
   * @public
   */
  ignoredReferenceInputFields?: string[] | undefined;
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
export interface GetABTestRequest {
  /**
   * <p>The unique identifier of the A/B test to retrieve.</p>
   * @public
   */
  abTestId: string | undefined;
}

/**
 * @public
 */
export interface GetABTestResponse {
  /**
   * <p>The unique identifier of the A/B test.</p>
   * @public
   */
  abTestId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the A/B test.</p>
   * @public
   */
  abTestArn: string | undefined;

  /**
   * <p>The name of the A/B test.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the A/B test.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The current status of the A/B test.</p>
   * @public
   */
  status: ABTestStatus | undefined;

  /**
   * <p>The execution status indicating whether the A/B test is currently running.</p>
   * @public
   */
  executionStatus: ABTestExecutionStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway used for traffic splitting.</p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>The list of variants in the A/B test.</p>
   * @public
   */
  variants: Variant[] | undefined;

  /**
   * <p>The gateway filter restricting which target paths are included.</p>
   * @public
   */
  gatewayFilter?: GatewayFilter | undefined;

  /**
   * <p>The evaluation configuration for measuring variant performance.</p>
   * @public
   */
  evaluationConfig: ABTestEvaluationConfig | undefined;

  /**
   * <p>The IAM role ARN used by the A/B test.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The identifier of the current run of the A/B test.</p>
   * @public
   */
  currentRunId?: string | undefined;

  /**
   * <p>The error details if the A/B test encountered failures.</p>
   * @public
   */
  errorDetails?: string[] | undefined;

  /**
   * <p>The timestamp when the A/B test was started.</p>
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * <p>The timestamp when the A/B test was stopped.</p>
   * @public
   */
  stoppedAt?: Date | undefined;

  /**
   * <p>The timestamp when the A/B test will automatically expire.</p>
   * @public
   */
  maxDurationExpiresAt?: Date | undefined;

  /**
   * <p>The timestamp when the A/B test was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the A/B test was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The statistical results of the A/B test, including per-evaluator metrics and significance analysis.</p>
   * @public
   */
  results?: ABTestResults | undefined;
}

/**
 * @public
 */
export interface GetBatchEvaluationRequest {
  /**
   * <p>The unique identifier of the batch evaluation to retrieve.</p>
   * @public
   */
  batchEvaluationId: string | undefined;
}

/**
 * <p>A time range filter for selecting sessions. Specifies the start and end times to narrow down which sessions are included.</p>
 * @public
 */
export interface SessionFilterConfig {
  /**
   * <p>The start time of the time range. Only sessions with activity at or after this timestamp are included.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The end time of the time range. Only sessions with activity before this timestamp are included.</p>
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * <p>Filter configuration for narrowing down CloudWatch Logs sessions for evaluation.</p>
 * @public
 */
export interface CloudWatchFilterConfig {
  /**
   * <p>A list of specific session IDs to evaluate. If specified, only these sessions are included in the evaluation.</p>
   * @public
   */
  sessionIds?: string[] | undefined;

  /**
   * <p>The time range filter for selecting sessions to evaluate.</p>
   * @public
   */
  timeRange?: SessionFilterConfig | undefined;
}

/**
 * <p>The configuration for reading agent traces from CloudWatch Logs.</p>
 * @public
 */
export interface CloudWatchLogsSource {
  /**
   * <p>The list of agent service names to filter traces within the specified log groups.</p>
   * @public
   */
  serviceNames: string[] | undefined;

  /**
   * <p>The list of CloudWatch log group names to read agent traces from. Maximum of 5 log groups.</p>
   * @public
   */
  logGroupNames: string[] | undefined;

  /**
   * <p>Optional filter configuration to narrow down which sessions to evaluate.</p>
   * @public
   */
  filterConfig?: CloudWatchFilterConfig | undefined;
}

/**
 * <p>Configuration for the data source used in evaluation.</p>
 * @public
 */
export type DataSourceConfig =
  | DataSourceConfig.CloudWatchLogsMember
  | DataSourceConfig.$UnknownMember;

/**
 * @public
 */
export namespace DataSourceConfig {
  /**
   * <p>Configuration for pulling agent session traces from CloudWatch Logs.</p>
   * @public
   */
  export interface CloudWatchLogsMember {
    cloudWatchLogs: CloudWatchLogsSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cloudWatchLogs?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cloudWatchLogs: (value: CloudWatchLogsSource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Aggregated statistics for an evaluator.</p>
 * @public
 */
export interface EvaluatorStatistics {
  /**
   * <p>The average score across all evaluated sessions for this evaluator.</p>
   * @public
   */
  averageScore?: number | undefined;
}

/**
 * <p>Summary statistics for a single evaluator within a batch evaluation.</p>
 * @public
 */
export interface EvaluatorSummary {
  /**
   * <p>The unique identifier of the evaluator.</p>
   * @public
   */
  evaluatorId?: string | undefined;

  /**
   * <p>The aggregated statistics for this evaluator.</p>
   * @public
   */
  statistics?: EvaluatorStatistics | undefined;

  /**
   * <p>The total number of sessions evaluated by this evaluator.</p>
   * @public
   */
  totalEvaluated?: number | undefined;

  /**
   * <p>The total number of sessions that failed evaluation by this evaluator.</p>
   * @public
   */
  totalFailed?: number | undefined;
}

/**
 * <p>Aggregated results from a batch evaluation, including session completion counts and evaluator score summaries.</p>
 * @public
 */
export interface EvaluationJobResults {
  /**
   * <p>The number of sessions that have been successfully evaluated.</p>
   * @public
   */
  numberOfSessionsCompleted?: number | undefined;

  /**
   * <p>The number of sessions currently being evaluated.</p>
   * @public
   */
  numberOfSessionsInProgress?: number | undefined;

  /**
   * <p>The number of sessions that failed evaluation.</p>
   * @public
   */
  numberOfSessionsFailed?: number | undefined;

  /**
   * <p>The total number of sessions included in the batch evaluation.</p>
   * @public
   */
  totalNumberOfSessions?: number | undefined;

  /**
   * <p>The number of sessions that were ignored during evaluation.</p>
   * @public
   */
  numberOfSessionsIgnored?: number | undefined;

  /**
   * <p>A list of per-evaluator summary statistics.</p>
   * @public
   */
  evaluatorSummaries?: EvaluatorSummary[] | undefined;
}

/**
 * <p>An evaluator to run against sessions.</p>
 * @public
 */
export interface Evaluator {
  /**
   * <p>The unique identifier of the evaluator. Can reference built-in evaluators (e.g., <code>Builtin.Helpfulness</code>) or custom evaluators.</p>
   * @public
   */
  evaluatorId: string | undefined;
}

/**
 * <p>CloudWatch Logs destination for batch evaluation results.</p>
 * @public
 */
export interface CloudWatchOutputConfig {
  /**
   * <p>The name of the CloudWatch log group where evaluation results will be written.</p>
   * @public
   */
  logGroupName: string | undefined;

  /**
   * <p>The name of the CloudWatch log stream where evaluation results will be written.</p>
   * @public
   */
  logStreamName: string | undefined;
}

/**
 * <p>Output destination configuration.</p>
 * @public
 */
export type OutputConfig =
  | OutputConfig.CloudWatchConfigMember
  | OutputConfig.$UnknownMember;

/**
 * @public
 */
export namespace OutputConfig {
  /**
   * <p>The CloudWatch Logs configuration for writing evaluation results.</p>
   * @public
   */
  export interface CloudWatchConfigMember {
    cloudWatchConfig: CloudWatchOutputConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cloudWatchConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cloudWatchConfig: (value: CloudWatchOutputConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetBatchEvaluationResponse {
  /**
   * <p>The unique identifier of the batch evaluation.</p>
   * @public
   */
  batchEvaluationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the batch evaluation.</p>
   * @public
   */
  batchEvaluationArn: string | undefined;

  /**
   * <p>The name of the batch evaluation.</p>
   * @public
   */
  batchEvaluationName: string | undefined;

  /**
   * <p>The current status of the batch evaluation.</p>
   * @public
   */
  status: BatchEvaluationStatus | undefined;

  /**
   * <p>The timestamp when the batch evaluation was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The list of evaluators applied during the batch evaluation.</p>
   * @public
   */
  evaluators?: Evaluator[] | undefined;

  /**
   * <p>The data source configuration specifying where agent traces are pulled from.</p>
   * @public
   */
  dataSourceConfig?: DataSourceConfig | undefined;

  /**
   * <p>The output configuration specifying where evaluation results are written.</p>
   * @public
   */
  outputConfig?: OutputConfig | undefined;

  /**
   * <p>The aggregated evaluation results, including session completion counts and evaluator score summaries.</p>
   * @public
   */
  evaluationResults?: EvaluationJobResults | undefined;

  /**
   * <p>The error details if the batch evaluation encountered failures.</p>
   * @public
   */
  errorDetails?: string[] | undefined;

  /**
   * <p>The description of the batch evaluation.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp when the batch evaluation was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetRecommendationRequest {
  /**
   * <p>The unique identifier of the recommendation to retrieve.</p>
   * @public
   */
  recommendationId: string | undefined;
}

/**
 * <p>A reference to an evaluator used for recommendation assessment.</p>
 * @public
 */
export interface RecommendationEvaluatorReference {
  /**
   * <p>The Amazon Resource Name (ARN) of the evaluator.</p>
   * @public
   */
  evaluatorArn: string | undefined;
}

/**
 * <p>The evaluation configuration for assessing recommendation quality.</p>
 * @public
 */
export interface RecommendationEvaluationConfig {
  /**
   * <p>The list of evaluators to use for assessing recommendation quality.</p>
   * @public
   */
  evaluators: RecommendationEvaluatorReference[] | undefined;
}

/**
 * <p>A system prompt sourced from a configuration bundle version.</p>
 * @public
 */
export interface SystemPromptConfigurationBundle {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration bundle.</p>
   * @public
   */
  bundleArn: string | undefined;

  /**
   * <p>The version identifier of the configuration bundle.</p>
   * @public
   */
  versionId: string | undefined;

  /**
   * <p>The JSON path within the configuration bundle that contains the system prompt.</p>
   * @public
   */
  systemPromptJsonPath: string | undefined;
}

/**
 * <p>The system prompt input, either as inline text or from a configuration bundle.</p>
 * @public
 */
export type SystemPromptConfig =
  | SystemPromptConfig.ConfigurationBundleMember
  | SystemPromptConfig.TextMember
  | SystemPromptConfig.$UnknownMember;

/**
 * @public
 */
export namespace SystemPromptConfig {
  /**
   * <p>The system prompt text provided inline.</p>
   * @public
   */
  export interface TextMember {
    text: string;
    configurationBundle?: never;
    $unknown?: never;
  }

  /**
   * <p>The system prompt sourced from a configuration bundle version.</p>
   * @public
   */
  export interface ConfigurationBundleMember {
    text?: never;
    configurationBundle: SystemPromptConfigurationBundle;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    configurationBundle?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    configurationBundle: (value: SystemPromptConfigurationBundle) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Configuration for generating system prompt optimization recommendations.</p>
 * @public
 */
export interface SystemPromptRecommendationConfig {
  /**
   * <p>The current system prompt to optimize.</p>
   * @public
   */
  systemPrompt: SystemPromptConfig | undefined;

  /**
   * <p>The agent traces to analyze for generating recommendations.</p>
   * @public
   */
  agentTraces: AgentTracesConfig | undefined;

  /**
   * <p>The evaluation configuration specifying which evaluator to use for assessing recommendation quality.</p>
   * @public
   */
  evaluationConfig: RecommendationEvaluationConfig | undefined;
}

/**
 * <p>Maps a tool name to its JSON path within a configuration bundle.</p>
 * @public
 */
export interface ConfigurationBundleToolEntry {
  /**
   * <p>The name of the tool.</p>
   * @public
   */
  toolName: string | undefined;

  /**
   * <p>The JSON path within the configuration bundle's components that contains the tool description.</p>
   * @public
   */
  toolDescriptionJsonPath: string | undefined;
}

/**
 * <p>Tool descriptions sourced from a configuration bundle version.</p>
 * @public
 */
export interface ToolDescriptionConfigurationBundle {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration bundle.</p>
   * @public
   */
  bundleArn: string | undefined;

  /**
   * <p>The version identifier of the configuration bundle.</p>
   * @public
   */
  versionId: string | undefined;

  /**
   * <p>The list of tool entries mapping tool names to their JSON paths within the bundle.</p>
   * @public
   */
  tools: ConfigurationBundleToolEntry[] | undefined;
}

/**
 * <p>The tool description content.</p>
 * @public
 */
export type ToolDescriptionConfig =
  | ToolDescriptionConfig.TextMember
  | ToolDescriptionConfig.$UnknownMember;

/**
 * @public
 */
export namespace ToolDescriptionConfig {
  /**
   * <p>The tool description as inline text.</p>
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
 * <p>A tool description input containing the tool name and its current description.</p>
 * @public
 */
export interface ToolDescriptionInput {
  /**
   * <p>The name of the tool.</p>
   * @public
   */
  toolName: string | undefined;

  /**
   * <p>The current description of the tool to optimize.</p>
   * @public
   */
  toolDescription: ToolDescriptionConfig | undefined;
}

/**
 * <p>Inline tool description input containing a list of tools.</p>
 * @public
 */
export interface ToolDescriptionTextInput {
  /**
   * <p>The list of tool descriptions to optimize.</p>
   * @public
   */
  tools: ToolDescriptionInput[] | undefined;
}

/**
 * <p>The source of tool descriptions, either inline text or from a configuration bundle.</p>
 * @public
 */
export type ToolDescriptionSource =
  | ToolDescriptionSource.ConfigurationBundleMember
  | ToolDescriptionSource.ToolDescriptionTextMember
  | ToolDescriptionSource.$UnknownMember;

/**
 * @public
 */
export namespace ToolDescriptionSource {
  /**
   * <p>Tool descriptions provided as inline text.</p>
   * @public
   */
  export interface ToolDescriptionTextMember {
    toolDescriptionText: ToolDescriptionTextInput;
    configurationBundle?: never;
    $unknown?: never;
  }

  /**
   * <p>Tool descriptions sourced from a configuration bundle version.</p>
   * @public
   */
  export interface ConfigurationBundleMember {
    toolDescriptionText?: never;
    configurationBundle: ToolDescriptionConfigurationBundle;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    toolDescriptionText?: never;
    configurationBundle?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    toolDescriptionText: (value: ToolDescriptionTextInput) => T;
    configurationBundle: (value: ToolDescriptionConfigurationBundle) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Configuration for generating tool description optimization recommendations.</p>
 * @public
 */
export interface ToolDescriptionRecommendationConfig {
  /**
   * <p>The current tool descriptions to optimize.</p>
   * @public
   */
  toolDescription: ToolDescriptionSource | undefined;

  /**
   * <p>The agent traces to analyze for generating tool description recommendations.</p>
   * @public
   */
  agentTraces: AgentTracesConfig | undefined;
}

/**
 * <p>The configuration for a recommendation, varying by recommendation type.</p>
 * @public
 */
export type RecommendationConfig =
  | RecommendationConfig.SystemPromptRecommendationConfigMember
  | RecommendationConfig.ToolDescriptionRecommendationConfigMember
  | RecommendationConfig.$UnknownMember;

/**
 * @public
 */
export namespace RecommendationConfig {
  /**
   * <p>The configuration for a system prompt recommendation.</p>
   * @public
   */
  export interface SystemPromptRecommendationConfigMember {
    systemPromptRecommendationConfig: SystemPromptRecommendationConfig;
    toolDescriptionRecommendationConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for a tool description recommendation.</p>
   * @public
   */
  export interface ToolDescriptionRecommendationConfigMember {
    systemPromptRecommendationConfig?: never;
    toolDescriptionRecommendationConfig: ToolDescriptionRecommendationConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    systemPromptRecommendationConfig?: never;
    toolDescriptionRecommendationConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    systemPromptRecommendationConfig: (value: SystemPromptRecommendationConfig) => T;
    toolDescriptionRecommendationConfig: (value: ToolDescriptionRecommendationConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A configuration bundle reference in a recommendation result.</p>
 * @public
 */
export interface RecommendationResultConfigurationBundle {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration bundle.</p>
   * @public
   */
  bundleArn: string | undefined;

  /**
   * <p>The version identifier of the configuration bundle containing the recommendation.</p>
   * @public
   */
  versionId: string | undefined;
}

/**
 * <p>The result of a system prompt recommendation, containing the optimized prompt.</p>
 * @public
 */
export interface SystemPromptRecommendationResult {
  /**
   * <p>The optimized system prompt text generated by the recommendation.</p>
   * @public
   */
  recommendedSystemPrompt?: string | undefined;

  /**
   * <p>The configuration bundle containing the recommended system prompt, if the input was sourced from a configuration bundle.</p>
   * @public
   */
  configurationBundle?: RecommendationResultConfigurationBundle | undefined;

  /**
   * <p>The error code if the recommendation failed.</p>
   * @public
   */
  errorCode?: string | undefined;

  /**
   * <p>The error message if the recommendation failed.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>The output for a single tool description recommendation.</p>
 * @public
 */
export interface ToolDescriptionOutput {
  /**
   * <p>The name of the tool.</p>
   * @public
   */
  toolName: string | undefined;

  /**
   * <p>The optimized tool description text generated by the recommendation.</p>
   * @public
   */
  recommendedToolDescription?: string | undefined;
}

/**
 * <p>The result of a tool description recommendation, containing optimized descriptions.</p>
 * @public
 */
export interface ToolDescriptionRecommendationResult {
  /**
   * <p>The list of tools with their recommended descriptions.</p>
   * @public
   */
  tools?: ToolDescriptionOutput[] | undefined;

  /**
   * <p>The configuration bundle containing the recommended tool descriptions, if the input was sourced from a configuration bundle.</p>
   * @public
   */
  configurationBundle?: RecommendationResultConfigurationBundle | undefined;

  /**
   * <p>The error code if the recommendation failed.</p>
   * @public
   */
  errorCode?: string | undefined;

  /**
   * <p>The error message if the recommendation failed.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>The result of a recommendation, containing the optimized output.</p>
 * @public
 */
export type RecommendationResult =
  | RecommendationResult.SystemPromptRecommendationResultMember
  | RecommendationResult.ToolDescriptionRecommendationResultMember
  | RecommendationResult.$UnknownMember;

/**
 * @public
 */
export namespace RecommendationResult {
  /**
   * <p>The result of a system prompt recommendation.</p>
   * @public
   */
  export interface SystemPromptRecommendationResultMember {
    systemPromptRecommendationResult: SystemPromptRecommendationResult;
    toolDescriptionRecommendationResult?: never;
    $unknown?: never;
  }

  /**
   * <p>The result of a tool description recommendation.</p>
   * @public
   */
  export interface ToolDescriptionRecommendationResultMember {
    systemPromptRecommendationResult?: never;
    toolDescriptionRecommendationResult: ToolDescriptionRecommendationResult;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    systemPromptRecommendationResult?: never;
    toolDescriptionRecommendationResult?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    systemPromptRecommendationResult: (value: SystemPromptRecommendationResult) => T;
    toolDescriptionRecommendationResult: (value: ToolDescriptionRecommendationResult) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetRecommendationResponse {
  /**
   * <p>The unique identifier of the recommendation.</p>
   * @public
   */
  recommendationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recommendation.</p>
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * <p>The name of the recommendation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the recommendation.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of recommendation.</p>
   * @public
   */
  type: RecommendationType | undefined;

  /**
   * <p>The configuration for the recommendation.</p>
   * @public
   */
  recommendationConfig: RecommendationConfig | undefined;

  /**
   * <p>The current status of the recommendation.</p>
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * <p>The timestamp when the recommendation was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the recommendation was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The result of the recommendation, containing the optimized system prompt or tool descriptions. Only present when the recommendation status is <code>COMPLETED</code>.</p>
   * @public
   */
  recommendationResult?: RecommendationResult | undefined;
}

/**
 * @public
 */
export interface ListABTestsRequest {
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
}

/**
 * @public
 */
export interface ListABTestsResponse {
  /**
   * <p>The list of A/B test summaries.</p>
   * @public
   */
  abTests: ABTestSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBatchEvaluationsRequest {
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
}

/**
 * <p>Summary representation for list responses.</p>
 * @public
 */
export interface BatchEvaluationSummary {
  /**
   * <p>The unique identifier of the batch evaluation.</p>
   * @public
   */
  batchEvaluationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the batch evaluation.</p>
   * @public
   */
  batchEvaluationArn: string | undefined;

  /**
   * <p>The name of the batch evaluation.</p>
   * @public
   */
  batchEvaluationName: string | undefined;

  /**
   * <p>The current status of the batch evaluation.</p>
   * @public
   */
  status: BatchEvaluationStatus | undefined;

  /**
   * <p>The timestamp when the batch evaluation was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The description of the batch evaluation.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The list of evaluators applied during the batch evaluation.</p>
   * @public
   */
  evaluators?: Evaluator[] | undefined;

  /**
   * <p>The aggregated evaluation results.</p>
   * @public
   */
  evaluationResults?: EvaluationJobResults | undefined;

  /**
   * <p>The error details if the batch evaluation encountered failures.</p>
   * @public
   */
  errorDetails?: string[] | undefined;

  /**
   * <p>The timestamp when the batch evaluation was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListBatchEvaluationsResponse {
  /**
   * <p>The list of batch evaluation summaries.</p>
   * @public
   */
  batchEvaluations: BatchEvaluationSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsRequest {
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
   * <p>Optional filter to return only recommendations with the specified status.</p>
   * @public
   */
  statusFilter?: RecommendationStatus | undefined;
}

/**
 * <p>Summary information about a recommendation.</p>
 * @public
 */
export interface RecommendationSummary {
  /**
   * <p>The unique identifier of the recommendation.</p>
   * @public
   */
  recommendationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the recommendation.</p>
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * <p>The name of the recommendation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the recommendation.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of recommendation.</p>
   * @public
   */
  type: RecommendationType | undefined;

  /**
   * <p>The current status of the recommendation.</p>
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * <p>The timestamp when the recommendation was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the recommendation was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsResponse {
  /**
   * <p>The list of recommendation summaries.</p>
   * @public
   */
  recommendationSummaries: RecommendationSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The input for a ground truth conversation turn.</p>
 * @public
 */
export type GroundTruthTurnInput =
  | GroundTruthTurnInput.PromptMember
  | GroundTruthTurnInput.$UnknownMember;

/**
 * @public
 */
export namespace GroundTruthTurnInput {
  /**
   * <p>The text prompt for this conversation turn.</p>
   * @public
   */
  export interface PromptMember {
    prompt: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    prompt?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    prompt: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Ground truth data for a single conversation turn.</p>
 * @public
 */
export interface GroundTruthTurn {
  /**
   * <p>The input for this conversation turn.</p>
   * @public
   */
  input?: GroundTruthTurnInput | undefined;

  /**
   * <p>The expected response for this conversation turn.</p>
   * @public
   */
  expectedResponse?: EvaluationContent | undefined;
}

/**
 * <p>Inline ground truth data containing assertions, expected trajectories, and per-turn expected responses.</p>
 * @public
 */
export interface InlineGroundTruth {
  /**
   * <p>Assertions for evaluation, reuses common model EvaluationContentList.</p>
   * @public
   */
  assertions?: EvaluationContent[] | undefined;

  /**
   * <p>The expected tool call sequence for trajectory evaluation.</p>
   * @public
   */
  expectedTrajectory?: EvaluationExpectedTrajectory | undefined;

  /**
   * <p>A list of per-turn ground truth data, each containing an input prompt and expected response.</p>
   * @public
   */
  turns?: GroundTruthTurn[] | undefined;
}

/**
 * <p>Where to pull ground truth from.</p>
 * @public
 */
export type GroundTruthSource =
  | GroundTruthSource.InlineMember
  | GroundTruthSource.$UnknownMember;

/**
 * @public
 */
export namespace GroundTruthSource {
  /**
   * <p>Inline ground truth data provided directly in the request.</p>
   * @public
   */
  export interface InlineMember {
    inline: InlineGroundTruth;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    inline?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    inline: (value: InlineGroundTruth) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Metadata for a specific session in a batch evaluation, including ground truth data and test scenario identifiers.</p>
 * @public
 */
export interface SessionMetadataShape {
  /**
   * <p>The unique identifier of the session this metadata applies to.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>An optional test scenario identifier for categorizing and tracking evaluation results.</p>
   * @public
   */
  testScenarioId?: string | undefined;

  /**
   * <p>The ground truth data for this session, including expected responses and assertions.</p>
   * @public
   */
  groundTruth?: GroundTruthSource | undefined;

  /**
   * <p>Additional key-value metadata associated with this session.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;
}

/**
 * <p>Metadata for the evaluation, including session-specific ground truth data.</p>
 * @public
 */
export type EvaluationMetadata =
  | EvaluationMetadata.SessionMetadataMember
  | EvaluationMetadata.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationMetadata {
  /**
   * <p>A list of session metadata entries containing ground truth data and test scenario identifiers for specific sessions.</p>
   * @public
   */
  export interface SessionMetadataMember {
    sessionMetadata: SessionMetadataShape[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sessionMetadata?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    sessionMetadata: (value: SessionMetadataShape[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface StartBatchEvaluationRequest {
  /**
   * <p>The name of the batch evaluation. Must be unique within your account.</p>
   * @public
   */
  batchEvaluationName: string | undefined;

  /**
   * <p>The list of evaluators to apply during the batch evaluation. Can include both built-in evaluators and custom evaluators. Maximum of 10 evaluators.</p>
   * @public
   */
  evaluators?: Evaluator[] | undefined;

  /**
   * <p>The data source configuration that specifies where to pull agent session traces from for evaluation.</p>
   * @public
   */
  dataSourceConfig: DataSourceConfig | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, the service ignores the request, but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Optional metadata for the evaluation, including session-specific ground truth data and test scenario identifiers.</p>
   * @public
   */
  evaluationMetadata?: EvaluationMetadata | undefined;

  /**
   * <p>The description of the batch evaluation.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface StartBatchEvaluationResponse {
  /**
   * <p>The unique identifier of the created batch evaluation.</p>
   * @public
   */
  batchEvaluationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created batch evaluation.</p>
   * @public
   */
  batchEvaluationArn: string | undefined;

  /**
   * <p>The name of the batch evaluation.</p>
   * @public
   */
  batchEvaluationName: string | undefined;

  /**
   * <p>The list of evaluators applied during the batch evaluation.</p>
   * @public
   */
  evaluators?: Evaluator[] | undefined;

  /**
   * <p>The status of the batch evaluation.</p>
   * @public
   */
  status: BatchEvaluationStatus | undefined;

  /**
   * <p>The timestamp when the batch evaluation was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The output configuration specifying where evaluation results are written.</p>
   * @public
   */
  outputConfig?: OutputConfig | undefined;

  /**
   * <p>The description of the batch evaluation.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface StartRecommendationRequest {
  /**
   * <p>The name of the recommendation. Must be unique within your account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the recommendation.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of recommendation to generate. Valid values are <code>SYSTEM_PROMPT_RECOMMENDATION</code> for system prompt optimization or <code>TOOL_DESCRIPTION_RECOMMENDATION</code> for tool description optimization.</p>
   * @public
   */
  type: RecommendationType | undefined;

  /**
   * <p>The configuration for the recommendation, including the input to optimize, agent traces to analyze, and evaluation settings.</p>
   * @public
   */
  recommendationConfig: RecommendationConfig | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, the service ignores the request, but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartRecommendationResponse {
  /**
   * <p>The unique identifier of the created recommendation.</p>
   * @public
   */
  recommendationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created recommendation.</p>
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * <p>The name of the recommendation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the recommendation.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of recommendation.</p>
   * @public
   */
  type: RecommendationType | undefined;

  /**
   * <p>The configuration for the recommendation.</p>
   * @public
   */
  recommendationConfig: RecommendationConfig | undefined;

  /**
   * <p>The status of the recommendation.</p>
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * <p>The timestamp when the recommendation was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the recommendation was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface StopBatchEvaluationRequest {
  /**
   * <p>The unique identifier of the batch evaluation to stop.</p>
   * @public
   */
  batchEvaluationId: string | undefined;
}

/**
 * @public
 */
export interface StopBatchEvaluationResponse {
  /**
   * <p>The unique identifier of the stopped batch evaluation.</p>
   * @public
   */
  batchEvaluationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the stopped batch evaluation.</p>
   * @public
   */
  batchEvaluationArn: string | undefined;

  /**
   * <p>The status of the batch evaluation after the stop request.</p>
   * @public
   */
  status: BatchEvaluationStatus | undefined;

  /**
   * <p>The description of the batch evaluation.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateABTestRequest {
  /**
   * <p>The unique identifier of the A/B test to update.</p>
   * @public
   */
  abTestId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, the service ignores the request, but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The updated name of the A/B test.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated description of the A/B test.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated list of variants.</p>
   * @public
   */
  variants?: Variant[] | undefined;

  /**
   * <p>The updated gateway filter.</p>
   * @public
   */
  gatewayFilter?: GatewayFilter | undefined;

  /**
   * <p>The updated evaluation configuration.</p>
   * @public
   */
  evaluationConfig?: ABTestEvaluationConfig | undefined;

  /**
   * <p>The updated IAM role ARN.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The updated execution status to enable or disable the A/B test.</p>
   * @public
   */
  executionStatus?: ABTestExecutionStatus | undefined;
}

/**
 * @public
 */
export interface UpdateABTestResponse {
  /**
   * <p>The unique identifier of the updated A/B test.</p>
   * @public
   */
  abTestId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated A/B test.</p>
   * @public
   */
  abTestArn: string | undefined;

  /**
   * <p>The status of the A/B test.</p>
   * @public
   */
  status: ABTestStatus | undefined;

  /**
   * <p>The execution status of the A/B test.</p>
   * @public
   */
  executionStatus: ABTestExecutionStatus | undefined;

  /**
   * <p>The timestamp when the A/B test was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
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

  /**
   * <p>The resources to include in the token request. These are used to specify the target resources for which the OAuth2 token is being requested.</p>
   * @public
   */
  resources?: string[] | undefined;

  /**
   * <p>The audiences to include in the token request. These are used to specify the intended recipients of the OAuth2 token.</p>
   * @public
   */
  audiences?: string[] | undefined;
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
 * <p>Coinbase CDP token request parameters.</p>
 * @public
 */
export interface CoinbaseCdpTokenRequestInput {
  /**
   * <p>The HTTP method for the payment API request.</p>
   * @public
   */
  requestMethod: PaymentHttpMethodType | undefined;

  /**
   * <p>The host for the payment API request. Defaults to "api.cdp.coinbase.com".</p>
   * @public
   */
  requestHost?: string | undefined;

  /**
   * <p>The path of the payment API request.</p>
   * @public
   */
  requestPath: string | undefined;

  /**
   * <p>Set to true for wallet write operations (requires walletSecret configured).</p>
   * @public
   */
  includeWalletAuthToken?: boolean | undefined;

  /**
   * <p>Request body JSON — used to generate wallet auth JWT.</p>
   * @public
   */
  requestBody?: string | undefined;
}

/**
 * <p>Stripe Privy token request parameters.</p>
 * @public
 */
export interface StripePrivyTokenRequestInput {
  /**
   * <p>The host for the Privy API request. Defaults to "api.privy.io".</p>
   * @public
   */
  requestHost?: string | undefined;

  /**
   * <p>The path of the Stripe Privy API request.</p>
   * @public
   */
  requestPath: string | undefined;

  /**
   * <p>Request body JSON for the Privy API call.</p>
   * @public
   */
  requestBody: string | undefined;

  /**
   * <p>Set to true to generate privy-authorization-signature.</p>
   * @public
   */
  includeAuthorizationSignature?: boolean | undefined;
}

/**
 * <p>Vendor-specific token request configuration.</p>
 * @public
 */
export type PaymentTokenRequestInput =
  | PaymentTokenRequestInput.CoinbaseCdpTokenRequestMember
  | PaymentTokenRequestInput.StripePrivyTokenRequestMember
  | PaymentTokenRequestInput.$UnknownMember;

/**
 * @public
 */
export namespace PaymentTokenRequestInput {
  /**
   * <p>The Coinbase CDP token request.</p>
   * @public
   */
  export interface CoinbaseCdpTokenRequestMember {
    coinbaseCdpTokenRequest: CoinbaseCdpTokenRequestInput;
    stripePrivyTokenRequest?: never;
    $unknown?: never;
  }

  /**
   * <p>The Stripe Privy token request.</p>
   * @public
   */
  export interface StripePrivyTokenRequestMember {
    coinbaseCdpTokenRequest?: never;
    stripePrivyTokenRequest: StripePrivyTokenRequestInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    coinbaseCdpTokenRequest?: never;
    stripePrivyTokenRequest?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    coinbaseCdpTokenRequest: (value: CoinbaseCdpTokenRequestInput) => T;
    stripePrivyTokenRequest: (value: StripePrivyTokenRequestInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetResourcePaymentTokenRequest {
  /**
   * <p>Workload access token for authorization.</p>
   * @public
   */
  workloadIdentityToken: string | undefined;

  /**
   * <p>Name of the payment credential provider to use.</p>
   * @public
   */
  resourceCredentialProviderName: string | undefined;

  /**
   * <p>Vendor-specific token request input. Contains all request parameters in a type-safe, vendor-specific structure.</p>
   * @public
   */
  paymentTokenRequest: PaymentTokenRequestInput | undefined;
}

/**
 * <p>Coinbase CDP token response.</p>
 * @public
 */
export interface CoinbaseCdpTokenResponseOutput {
  /**
   * <p>Bearer Token for Authorization header.</p>
   * @public
   */
  bearerToken: string | undefined;

  /**
   * <p>Wallet Auth Token for X-Wallet-Auth header.</p>
   * @public
   */
  walletAuthToken?: string | undefined;
}

/**
 * <p>Stripe Privy token response containing appId, basicAuthToken, and optionally authorizationSignature.</p>
 * @public
 */
export interface StripePrivyTokenResponseOutput {
  /**
   * <p>Base64-encoded ECDSA P-256 authorization signature (only present when includeAuthorizationSignature is true).</p>
   * @public
   */
  authorizationSignature?: string | undefined;

  /**
   * <p>Unix timestamp in milliseconds when the authorization signature expires.</p>
   * @public
   */
  requestExpiry?: number | undefined;

  /**
   * <p>The Privy app ID for the privy-app-id header.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>Base64-encoded Basic Auth token (appId:appSecret) for the Authorization header.</p>
   * @public
   */
  basicAuthToken: string | undefined;
}

/**
 * <p>Vendor-specific token response configuration.</p>
 * @public
 */
export type PaymentTokenResponseOutput =
  | PaymentTokenResponseOutput.CoinbaseCdpTokenResponseMember
  | PaymentTokenResponseOutput.StripePrivyTokenResponseMember
  | PaymentTokenResponseOutput.$UnknownMember;

/**
 * @public
 */
export namespace PaymentTokenResponseOutput {
  /**
   * <p>The Coinbase CDP token response.</p>
   * @public
   */
  export interface CoinbaseCdpTokenResponseMember {
    coinbaseCdpTokenResponse: CoinbaseCdpTokenResponseOutput;
    stripePrivyTokenResponse?: never;
    $unknown?: never;
  }

  /**
   * <p>The Stripe Privy token response.</p>
   * @public
   */
  export interface StripePrivyTokenResponseMember {
    coinbaseCdpTokenResponse?: never;
    stripePrivyTokenResponse: StripePrivyTokenResponseOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    coinbaseCdpTokenResponse?: never;
    stripePrivyTokenResponse?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    coinbaseCdpTokenResponse: (value: CoinbaseCdpTokenResponseOutput) => T;
    stripePrivyTokenResponse: (value: StripePrivyTokenResponseOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetResourcePaymentTokenResponse {
  /**
   * <p>Vendor-specific token response output. Contains all response data in a type-safe, vendor-specific structure.</p>
   * @public
   */
  paymentTokenResponse: PaymentTokenResponseOutput | undefined;
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
 * <p>The collection of arguments that specify the operation to perform and its parameters when invoking a tool in Amazon Bedrock AgentCore. Different tools require different arguments, and this structure provides a flexible way to pass the appropriate arguments to each tool type.</p>
 * @public
 */
export interface ToolArguments {
  /**
   * <p>The code to execute in a code interpreter session. This is the source code in the specified programming language that will be executed by the code interpreter.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>The programming language of the code to execute. This tells the code interpreter which language runtime to use for execution.</p>
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

  /**
   * <p>The runtime environment to use for code execution. If not specified, defaults to <code>deno</code> for JavaScript and TypeScript.</p>
   * @public
   */
  runtime?: LanguageRuntime | undefined;
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
 * <p>The output produced by executing code in a code interpreter session in Amazon Bedrock AgentCore. This structure contains the results of code execution, including textual output, structured data, and error information. Agents use these results to generate responses that incorporate computation, data analysis, and visualization.</p>
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
   * <p>The output produced by executing code in a code interpreter session in Amazon Bedrock AgentCore. This structure contains the results of code execution, including textual output, structured data, and error information. Agents use these results to generate responses that incorporate computation, data analysis, and visualization.</p>
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
 * <p>A block of reasoning text from the model.</p>
 * @public
 */
export interface HarnessReasoningTextBlock {
  /**
   * <p>The reasoning text.</p>
   * @public
   */
  text: string | undefined;

  /**
   * <p>Signature for verifying the reasoning content.</p>
   * @public
   */
  signature?: string | undefined;
}

/**
 * <p>Reasoning content from the model.</p>
 * @public
 */
export type HarnessReasoningContentBlock =
  | HarnessReasoningContentBlock.ReasoningTextMember
  | HarnessReasoningContentBlock.RedactedContentMember
  | HarnessReasoningContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace HarnessReasoningContentBlock {
  /**
   * <p>The reasoning text.</p>
   * @public
   */
  export interface ReasoningTextMember {
    reasoningText: HarnessReasoningTextBlock;
    redactedContent?: never;
    $unknown?: never;
  }

  /**
   * <p>Redacted reasoning content.</p>
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
    reasoningText: (value: HarnessReasoningTextBlock) => T;
    redactedContent: (value: Uint8Array) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A content block within a tool result.</p>
 * @public
 */
export type HarnessToolResultContentBlock =
  | HarnessToolResultContentBlock.JsonMember
  | HarnessToolResultContentBlock.TextMember
  | HarnessToolResultContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace HarnessToolResultContentBlock {
  /**
   * <p>Text content.</p>
   * @public
   */
  export interface TextMember {
    text: string;
    json?: never;
    $unknown?: never;
  }

  /**
   * <p>JSON content.</p>
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
 * <p>The result of a tool execution.</p>
 * @public
 */
export interface HarnessToolResultBlock {
  /**
   * <p>The tool use ID that this result corresponds to.</p>
   * @public
   */
  toolUseId: string | undefined;

  /**
   * <p>The content of the tool result.</p>
   * @public
   */
  content: HarnessToolResultContentBlock[] | undefined;

  /**
   * <p>The status of the tool execution.</p>
   * @public
   */
  status?: HarnessToolUseStatus | undefined;

  /**
   * <p>The type of tool use that produced this result.</p>
   * @public
   */
  type?: HarnessToolUseType | undefined;
}

/**
 * <p>A tool use request from the model.</p>
 * @public
 */
export interface HarnessToolUseBlock {
  /**
   * <p>The name of the tool to call.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The unique ID of this tool use.</p>
   * @public
   */
  toolUseId: string | undefined;

  /**
   * <p>The JSON input to pass to the tool.</p>
   * @public
   */
  input: __DocumentType | undefined;

  /**
   * <p>The type of tool use.</p>
   * @public
   */
  type?: HarnessToolUseType | undefined;

  /**
   * <p>The name of the MCP server providing this tool.</p>
   * @public
   */
  serverName?: string | undefined;
}

/**
 * <p>A content block within a message.</p>
 * @public
 */
export type HarnessContentBlock =
  | HarnessContentBlock.ReasoningContentMember
  | HarnessContentBlock.TextMember
  | HarnessContentBlock.ToolResultMember
  | HarnessContentBlock.ToolUseMember
  | HarnessContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace HarnessContentBlock {
  /**
   * <p>Text content.</p>
   * @public
   */
  export interface TextMember {
    text: string;
    toolUse?: never;
    toolResult?: never;
    reasoningContent?: never;
    $unknown?: never;
  }

  /**
   * <p>A tool use request from the model.</p>
   * @public
   */
  export interface ToolUseMember {
    text?: never;
    toolUse: HarnessToolUseBlock;
    toolResult?: never;
    reasoningContent?: never;
    $unknown?: never;
  }

  /**
   * <p>A tool execution result.</p>
   * @public
   */
  export interface ToolResultMember {
    text?: never;
    toolUse?: never;
    toolResult: HarnessToolResultBlock;
    reasoningContent?: never;
    $unknown?: never;
  }

  /**
   * <p>Model reasoning content.</p>
   * @public
   */
  export interface ReasoningContentMember {
    text?: never;
    toolUse?: never;
    toolResult?: never;
    reasoningContent: HarnessReasoningContentBlock;
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
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    toolUse: (value: HarnessToolUseBlock) => T;
    toolResult: (value: HarnessToolResultBlock) => T;
    reasoningContent: (value: HarnessReasoningContentBlock) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A message in the conversation.</p>
 * @public
 */
export interface HarnessMessage {
  /**
   * <p>The role of the message sender.</p>
   * @public
   */
  role: HarnessConversationRole | undefined;

  /**
   * <p>The content blocks of the message.</p>
   * @public
   */
  content: HarnessContentBlock[] | undefined;
}

/**
 * <p>Configuration for an Amazon Bedrock model provider.</p>
 * @public
 */
export interface HarnessBedrockModelConfig {
  /**
   * <p>The Bedrock model ID.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The maximum number of tokens to allow in the generated response per iteration.</p>
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * <p>The temperature to set when calling the model.</p>
   * @public
   */
  temperature?: number | undefined;

  /**
   * <p>The topP set when calling the model.</p>
   * @public
   */
  topP?: number | undefined;

  /**
   * <p>The API format to use when calling the Bedrock provider.</p>
   * @public
   */
  apiFormat?: HarnessBedrockApiFormat | undefined;

  /**
   * <p>Provider-specific parameters passed through to the model provider unchanged.</p>
   * @public
   */
  additionalParams?: __DocumentType | undefined;
}

/**
 * <p>Configuration for a Google Gemini model provider. Requires an API key stored in AgentCore Identity.</p>
 * @public
 */
export interface HarnessGeminiModelConfig {
  /**
   * <p>The Gemini model ID.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The ARN of your Gemini API key on AgentCore Identity.</p>
   * @public
   */
  apiKeyArn: string | undefined;

  /**
   * <p>The maximum number of tokens to allow in the generated response per iteration.</p>
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * <p>The temperature to set when calling the model.</p>
   * @public
   */
  temperature?: number | undefined;

  /**
   * <p>The topP set when calling the model.</p>
   * @public
   */
  topP?: number | undefined;

  /**
   * <p>The topK set when calling the model.</p>
   * @public
   */
  topK?: number | undefined;
}

/**
 * <p>Configuration for a LiteLLM model provider, enabling connection to third-party model providers.</p>
 * @public
 */
export interface HarnessLiteLlmModelConfig {
  /**
   * <p>The LiteLLM model identifier (e.g., "anthropic/claude-3-sonnet").</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The ARN of the API key in AgentCore Identity for authenticating with the model provider.</p>
   * @public
   */
  apiKeyArn?: string | undefined;

  /**
   * <p>The base URL for the model provider's API endpoint.</p>
   * @public
   */
  apiBase?: string | undefined;

  /**
   * <p>The maximum number of tokens to allow in the generated response per iteration.</p>
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * <p>The temperature to set when calling the model.</p>
   * @public
   */
  temperature?: number | undefined;

  /**
   * <p>The topP set when calling the model.</p>
   * @public
   */
  topP?: number | undefined;

  /**
   * <p>Provider-specific parameters passed through to the model provider unchanged.</p>
   * @public
   */
  additionalParams?: __DocumentType | undefined;
}

/**
 * <p>Configuration for an OpenAI model provider. Requires an API key stored in AgentCore Identity.</p>
 * @public
 */
export interface HarnessOpenAiModelConfig {
  /**
   * <p>The OpenAI model ID.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The ARN of your OpenAI API key on AgentCore Identity.</p>
   * @public
   */
  apiKeyArn: string | undefined;

  /**
   * <p>The maximum number of tokens to allow in the generated response per iteration.</p>
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * <p>The temperature to set when calling the model.</p>
   * @public
   */
  temperature?: number | undefined;

  /**
   * <p>The topP set when calling the model.</p>
   * @public
   */
  topP?: number | undefined;

  /**
   * <p>The API format to use when calling the OpenAI provider.</p>
   * @public
   */
  apiFormat?: HarnessOpenAiApiFormat | undefined;

  /**
   * <p>Provider-specific parameters passed through to the model provider unchanged.</p>
   * @public
   */
  additionalParams?: __DocumentType | undefined;
}

/**
 * <p>Specification of which model to use.</p>
 * @public
 */
export type HarnessModelConfiguration =
  | HarnessModelConfiguration.BedrockModelConfigMember
  | HarnessModelConfiguration.GeminiModelConfigMember
  | HarnessModelConfiguration.LiteLlmModelConfigMember
  | HarnessModelConfiguration.OpenAiModelConfigMember
  | HarnessModelConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace HarnessModelConfiguration {
  /**
   * <p>Configuration for an Amazon Bedrock model.</p>
   * @public
   */
  export interface BedrockModelConfigMember {
    bedrockModelConfig: HarnessBedrockModelConfig;
    openAiModelConfig?: never;
    geminiModelConfig?: never;
    liteLlmModelConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration for an OpenAI model.</p>
   * @public
   */
  export interface OpenAiModelConfigMember {
    bedrockModelConfig?: never;
    openAiModelConfig: HarnessOpenAiModelConfig;
    geminiModelConfig?: never;
    liteLlmModelConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration for a Google Gemini model.</p>
   * @public
   */
  export interface GeminiModelConfigMember {
    bedrockModelConfig?: never;
    openAiModelConfig?: never;
    geminiModelConfig: HarnessGeminiModelConfig;
    liteLlmModelConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>The LiteLLM model configuration for connecting to third-party model providers.</p>
   * @public
   */
  export interface LiteLlmModelConfigMember {
    bedrockModelConfig?: never;
    openAiModelConfig?: never;
    geminiModelConfig?: never;
    liteLlmModelConfig: HarnessLiteLlmModelConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    bedrockModelConfig?: never;
    openAiModelConfig?: never;
    geminiModelConfig?: never;
    liteLlmModelConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    bedrockModelConfig: (value: HarnessBedrockModelConfig) => T;
    openAiModelConfig: (value: HarnessOpenAiModelConfig) => T;
    geminiModelConfig: (value: HarnessGeminiModelConfig) => T;
    liteLlmModelConfig: (value: HarnessLiteLlmModelConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Authentication configuration for accessing a private git repository.</p>
 * @public
 */
export interface HarnessSkillGitAuth {
  /**
   * <p>The ARN of the credential in AgentCore Identity containing the password or personal access token.</p>
   * @public
   */
  credentialArn: string | undefined;

  /**
   * <p>Username for authentication. Defaults to 'oauth2' if not specified.</p>
   * @public
   */
  username?: string | undefined;
}

/**
 * <p>A git repository source for a skill.</p>
 * @public
 */
export interface HarnessSkillGitSource {
  /**
   * <p>The HTTPS URL of the git repository.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>Subdirectory within the repository containing the skill.</p>
   * @public
   */
  path?: string | undefined;

  /**
   * <p>Authentication configuration for private repositories.</p>
   * @public
   */
  auth?: HarnessSkillGitAuth | undefined;
}

/**
 * <p>An S3 source for a skill.</p>
 * @public
 */
export interface HarnessSkillS3Source {
  /**
   * <p>The S3 URI pointing to the skill directory (e.g., s3://bucket/skills/my-skill/).</p>
   * @public
   */
  uri: string | undefined;
}

/**
 * <p>A skill available to the agent.</p>
 * @public
 */
export type HarnessSkill =
  | HarnessSkill.GitMember
  | HarnessSkill.PathMember
  | HarnessSkill.S3Member
  | HarnessSkill.$UnknownMember;

/**
 * @public
 */
export namespace HarnessSkill {
  /**
   * <p>The filesystem path to the skill definition.</p>
   * @public
   */
  export interface PathMember {
    path: string;
    s3?: never;
    git?: never;
    $unknown?: never;
  }

  /**
   * <p>An S3 source containing the skill.</p>
   * @public
   */
  export interface S3Member {
    path?: never;
    s3: HarnessSkillS3Source;
    git?: never;
    $unknown?: never;
  }

  /**
   * <p>A git repository containing the skill.</p>
   * @public
   */
  export interface GitMember {
    path?: never;
    s3?: never;
    git: HarnessSkillGitSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    path?: never;
    s3?: never;
    git?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    path: (value: string) => T;
    s3: (value: HarnessSkillS3Source) => T;
    git: (value: HarnessSkillGitSource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A content block in the system prompt.</p>
 * @public
 */
export type HarnessSystemContentBlock =
  | HarnessSystemContentBlock.TextMember
  | HarnessSystemContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace HarnessSystemContentBlock {
  /**
   * <p>The text content of the system prompt block.</p>
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
 * <p>Configuration for AgentCore Browser.</p>
 * @public
 */
export interface HarnessAgentCoreBrowserConfig {
  /**
   * <p>If not populated, the built-in Browser ARN is used.</p>
   * @public
   */
  browserArn?: string | undefined;
}

/**
 * <p>Configuration for AgentCore Code Interpreter.</p>
 * @public
 */
export interface HarnessAgentCoreCodeInterpreterConfig {
  /**
   * <p>If not populated, the built-in Code Interpreter ARN is used.</p>
   * @public
   */
  codeInterpreterArn?: string | undefined;
}

/**
 * @public
 */
export interface Unit {}

/**
 * <p>Configuration for an OAuth 2.0 credential provider used to authenticate tool calls.</p>
 * @public
 */
export interface OAuthCredentialProvider {
  /**
   * <p>The ARN of the OAuth 2.0 credential provider in AgentCore Identity.</p>
   * @public
   */
  providerArn: string | undefined;

  /**
   * <p>The OAuth 2.0 scopes to request when obtaining an access token.</p>
   * @public
   */
  scopes: string[] | undefined;

  /**
   * <p>Additional custom parameters to include in the OAuth 2.0 token request.</p>
   * @public
   */
  customParameters?: Record<string, string> | undefined;

  /**
   * <p>The OAuth 2.0 grant type to use for authentication.</p>
   * @public
   */
  grantType?: OAuthGrantType | undefined;

  /**
   * <p>The default return URL for the OAuth 2.0 authorization flow.</p>
   * @public
   */
  defaultReturnUrl?: string | undefined;
}

/**
 * <p>Authentication method for calling a Gateway.</p>
 * @public
 */
export type HarnessGatewayOutboundAuth =
  | HarnessGatewayOutboundAuth.AwsIamMember
  | HarnessGatewayOutboundAuth.NoneMember
  | HarnessGatewayOutboundAuth.OauthMember
  | HarnessGatewayOutboundAuth.$UnknownMember;

/**
 * @public
 */
export namespace HarnessGatewayOutboundAuth {
  /**
   * <p>SigV4-sign requests using the agent's execution role.</p>
   * @public
   */
  export interface AwsIamMember {
    awsIam: Unit;
    none?: never;
    oauth?: never;
    $unknown?: never;
  }

  /**
   * <p>No authentication.</p>
   * @public
   */
  export interface NoneMember {
    awsIam?: never;
    none: Unit;
    oauth?: never;
    $unknown?: never;
  }

  /**
   * <p>OAuth 2.0 authentication via AgentCore Identity.</p>
   * @public
   */
  export interface OauthMember {
    awsIam?: never;
    none?: never;
    oauth: OAuthCredentialProvider;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    awsIam?: never;
    none?: never;
    oauth?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    awsIam: (value: Unit) => T;
    none: (value: Unit) => T;
    oauth: (value: OAuthCredentialProvider) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Configuration for AgentCore Gateway.</p>
 * @public
 */
export interface HarnessAgentCoreGatewayConfig {
  /**
   * <p>The ARN of the desired AgentCore Gateway.</p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>How harness authenticates to this Gateway. Defaults to AWS_IAM (SigV4) if omitted.</p>
   * @public
   */
  outboundAuth?: HarnessGatewayOutboundAuth | undefined;
}

/**
 * <p>Configuration for an inline function tool. When the agent calls this tool, the tool call is returned to the caller for external execution.</p>
 * @public
 */
export interface HarnessInlineFunctionConfig {
  /**
   * <p>Description of what the tool does, provided to the model.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>JSON Schema describing the tool's input parameters.</p>
   * @public
   */
  inputSchema: __DocumentType | undefined;
}

/**
 * <p>Configuration for connecting to a remote MCP server.</p>
 * @public
 */
export interface HarnessRemoteMcpConfig {
  /**
   * <p>URL of the MCP endpoint.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>Custom headers to include when connecting to the remote MCP server.</p>
   * @public
   */
  headers?: Record<string, string> | undefined;
}

/**
 * <p>Configuration union for different tool types.</p>
 * @public
 */
export type HarnessToolConfiguration =
  | HarnessToolConfiguration.AgentCoreBrowserMember
  | HarnessToolConfiguration.AgentCoreCodeInterpreterMember
  | HarnessToolConfiguration.AgentCoreGatewayMember
  | HarnessToolConfiguration.InlineFunctionMember
  | HarnessToolConfiguration.RemoteMcpMember
  | HarnessToolConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace HarnessToolConfiguration {
  /**
   * <p>Configuration for remote MCP server.</p>
   * @public
   */
  export interface RemoteMcpMember {
    remoteMcp: HarnessRemoteMcpConfig;
    agentCoreBrowser?: never;
    agentCoreGateway?: never;
    inlineFunction?: never;
    agentCoreCodeInterpreter?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration for AgentCore Browser.</p>
   * @public
   */
  export interface AgentCoreBrowserMember {
    remoteMcp?: never;
    agentCoreBrowser: HarnessAgentCoreBrowserConfig;
    agentCoreGateway?: never;
    inlineFunction?: never;
    agentCoreCodeInterpreter?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration for AgentCore Gateway.</p>
   * @public
   */
  export interface AgentCoreGatewayMember {
    remoteMcp?: never;
    agentCoreBrowser?: never;
    agentCoreGateway: HarnessAgentCoreGatewayConfig;
    inlineFunction?: never;
    agentCoreCodeInterpreter?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration for an inline function tool.</p>
   * @public
   */
  export interface InlineFunctionMember {
    remoteMcp?: never;
    agentCoreBrowser?: never;
    agentCoreGateway?: never;
    inlineFunction: HarnessInlineFunctionConfig;
    agentCoreCodeInterpreter?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration for AgentCore Code Interpreter.</p>
   * @public
   */
  export interface AgentCoreCodeInterpreterMember {
    remoteMcp?: never;
    agentCoreBrowser?: never;
    agentCoreGateway?: never;
    inlineFunction?: never;
    agentCoreCodeInterpreter: HarnessAgentCoreCodeInterpreterConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    remoteMcp?: never;
    agentCoreBrowser?: never;
    agentCoreGateway?: never;
    inlineFunction?: never;
    agentCoreCodeInterpreter?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    remoteMcp: (value: HarnessRemoteMcpConfig) => T;
    agentCoreBrowser: (value: HarnessAgentCoreBrowserConfig) => T;
    agentCoreGateway: (value: HarnessAgentCoreGatewayConfig) => T;
    inlineFunction: (value: HarnessInlineFunctionConfig) => T;
    agentCoreCodeInterpreter: (value: HarnessAgentCoreCodeInterpreterConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A tool available to the agent loop.</p>
 * @public
 */
export interface HarnessTool {
  /**
   * <p>The type of tool.</p>
   * @public
   */
  type: HarnessToolType | undefined;

  /**
   * <p>Unique name for the tool. If not provided, a name will be inferred or generated.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Tool-specific configuration.</p>
   * @public
   */
  config?: HarnessToolConfiguration | undefined;
}

/**
 * @public
 */
export interface InvokeHarnessRequest {
  /**
   * <p>The ARN of the harness to invoke.</p>
   * @public
   */
  harnessArn: string | undefined;

  /**
   * <p>The session ID for the invocation. Use the same session ID across requests to continue a conversation.</p>
   * @public
   */
  runtimeSessionId: string | undefined;

  /**
   * <p>An identifier for the end user making the request. This value is passed through to the runtime container.</p>
   * @public
   */
  runtimeUserId?: string | undefined;

  /**
   * <p>The messages to send to the agent.</p>
   * @public
   */
  messages: HarnessMessage[] | undefined;

  /**
   * <p>The model configuration to use for this invocation. If specified, overrides the harness default.</p>
   * @public
   */
  model?: HarnessModelConfiguration | undefined;

  /**
   * <p>The system prompt to use for this invocation. If specified, overrides the harness default.</p>
   * @public
   */
  systemPrompt?: HarnessSystemContentBlock[] | undefined;

  /**
   * <p>The tools available to the agent for this invocation. If specified, overrides the harness default.</p>
   * @public
   */
  tools?: HarnessTool[] | undefined;

  /**
   * <p>The skills available to the agent for this invocation. If specified, overrides the harness default.</p>
   * @public
   */
  skills?: HarnessSkill[] | undefined;

  /**
   * <p>The tools that the agent is allowed to use for this invocation. If specified, overrides the harness default.</p>
   * @public
   */
  allowedTools?: string[] | undefined;

  /**
   * <p>The maximum number of iterations the agent loop can execute. If specified, overrides the harness default.</p>
   * @public
   */
  maxIterations?: number | undefined;

  /**
   * <p>The maximum number of tokens the agent can generate per iteration. If specified, overrides the harness default.</p>
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * <p>The maximum duration in seconds for the agent loop execution. If specified, overrides the harness default.</p>
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * <p>The actor ID for memory operations. Overrides the actor ID configured on the harness.</p>
   * @public
   */
  actorId?: string | undefined;
}

/**
 * <p>A delta update to a reasoning content block.</p>
 * @public
 */
export type HarnessReasoningContentBlockDelta =
  | HarnessReasoningContentBlockDelta.RedactedContentMember
  | HarnessReasoningContentBlockDelta.SignatureMember
  | HarnessReasoningContentBlockDelta.TextMember
  | HarnessReasoningContentBlockDelta.$UnknownMember;

/**
 * @public
 */
export namespace HarnessReasoningContentBlockDelta {
  /**
   * <p>Reasoning text delta.</p>
   * @public
   */
  export interface TextMember {
    text: string;
    redactedContent?: never;
    signature?: never;
    $unknown?: never;
  }

  /**
   * <p>Redacted reasoning content.</p>
   * @public
   */
  export interface RedactedContentMember {
    text?: never;
    redactedContent: Uint8Array;
    signature?: never;
    $unknown?: never;
  }

  /**
   * <p>Signature for the reasoning content.</p>
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
 * <p>A delta update to a tool result content block.</p>
 * @public
 */
export type HarnessToolResultBlockDelta =
  | HarnessToolResultBlockDelta.JsonMember
  | HarnessToolResultBlockDelta.TextMember
  | HarnessToolResultBlockDelta.$UnknownMember;

/**
 * @public
 */
export namespace HarnessToolResultBlockDelta {
  /**
   * <p>A text tool result delta.</p>
   * @public
   */
  export interface TextMember {
    text: string;
    json?: never;
    $unknown?: never;
  }

  /**
   * <p>A JSON tool result delta.</p>
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
 * <p>Delta payload for tool use input.</p>
 * @public
 */
export interface HarnessToolUseBlockDelta {
  /**
   * <p>The partial JSON input for the tool call.</p>
   * @public
   */
  input: string | undefined;
}

/**
 * <p>A delta update to a content block.</p>
 * @public
 */
export type HarnessContentBlockDelta =
  | HarnessContentBlockDelta.ReasoningContentMember
  | HarnessContentBlockDelta.TextMember
  | HarnessContentBlockDelta.ToolResultMember
  | HarnessContentBlockDelta.ToolUseMember
  | HarnessContentBlockDelta.$UnknownMember;

/**
 * @public
 */
export namespace HarnessContentBlockDelta {
  /**
   * <p>A text delta.</p>
   * @public
   */
  export interface TextMember {
    text: string;
    toolUse?: never;
    toolResult?: never;
    reasoningContent?: never;
    $unknown?: never;
  }

  /**
   * <p>A tool use input delta.</p>
   * @public
   */
  export interface ToolUseMember {
    text?: never;
    toolUse: HarnessToolUseBlockDelta;
    toolResult?: never;
    reasoningContent?: never;
    $unknown?: never;
  }

  /**
   * <p>A tool result delta.</p>
   * @public
   */
  export interface ToolResultMember {
    text?: never;
    toolUse?: never;
    toolResult: HarnessToolResultBlockDelta[];
    reasoningContent?: never;
    $unknown?: never;
  }

  /**
   * <p>A reasoning content delta.</p>
   * @public
   */
  export interface ReasoningContentMember {
    text?: never;
    toolUse?: never;
    toolResult?: never;
    reasoningContent: HarnessReasoningContentBlockDelta;
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
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    toolUse: (value: HarnessToolUseBlockDelta) => T;
    toolResult: (value: HarnessToolResultBlockDelta[]) => T;
    reasoningContent: (value: HarnessReasoningContentBlockDelta) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Event containing a delta update to a content block.</p>
 * @public
 */
export interface HarnessContentBlockDeltaEvent {
  /**
   * <p>The index of the content block being updated.</p>
   * @public
   */
  contentBlockIndex: number | undefined;

  /**
   * <p>The delta payload.</p>
   * @public
   */
  delta: HarnessContentBlockDelta | undefined;
}

/**
 * <p>Start payload for a tool result content block.</p>
 * @public
 */
export interface HarnessToolResultBlockStart {
  /**
   * <p>The tool use ID that this result corresponds to.</p>
   * @public
   */
  toolUseId: string | undefined;

  /**
   * <p>The status of the tool execution.</p>
   * @public
   */
  status?: HarnessToolUseStatus | undefined;
}

/**
 * <p>Start payload for a tool use content block.</p>
 * @public
 */
export interface HarnessToolUseBlockStart {
  /**
   * <p>The unique ID of this tool use.</p>
   * @public
   */
  toolUseId: string | undefined;

  /**
   * <p>The name of the tool being called.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of tool use.</p>
   * @public
   */
  type?: HarnessToolUseType | undefined;

  /**
   * <p>The name of the MCP server providing this tool.</p>
   * @public
   */
  serverName?: string | undefined;
}

/**
 * <p>The start payload for a content block.</p>
 * @public
 */
export type HarnessContentBlockStart =
  | HarnessContentBlockStart.ToolResultMember
  | HarnessContentBlockStart.ToolUseMember
  | HarnessContentBlockStart.$UnknownMember;

/**
 * @public
 */
export namespace HarnessContentBlockStart {
  /**
   * <p>Start of a tool use content block.</p>
   * @public
   */
  export interface ToolUseMember {
    toolUse: HarnessToolUseBlockStart;
    toolResult?: never;
    $unknown?: never;
  }

  /**
   * <p>Start of a tool result content block.</p>
   * @public
   */
  export interface ToolResultMember {
    toolUse?: never;
    toolResult: HarnessToolResultBlockStart;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    toolUse?: never;
    toolResult?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    toolUse: (value: HarnessToolUseBlockStart) => T;
    toolResult: (value: HarnessToolResultBlockStart) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Event indicating the start of a content block.</p>
 * @public
 */
export interface HarnessContentBlockStartEvent {
  /**
   * <p>The index of the content block within the message.</p>
   * @public
   */
  contentBlockIndex: number | undefined;

  /**
   * <p>The content block start payload.</p>
   * @public
   */
  start: HarnessContentBlockStart | undefined;
}

/**
 * <p>Event indicating the end of a content block.</p>
 * @public
 */
export interface HarnessContentBlockStopEvent {
  /**
   * <p>The index of the content block that ended.</p>
   * @public
   */
  contentBlockIndex: number | undefined;
}

/**
 * <p>Event indicating the start of a message.</p>
 * @public
 */
export interface HarnessMessageStartEvent {
  /**
   * <p>The role of the message sender.</p>
   * @public
   */
  role: HarnessConversationRole | undefined;
}

/**
 * <p>Event indicating the end of a message.</p>
 * @public
 */
export interface HarnessMessageStopEvent {
  /**
   * <p>The reason the agent stopped generating.</p>
   * @public
   */
  stopReason: HarnessStopReason | undefined;
}

/**
 * <p>Latency metrics for the invocation.</p>
 * @public
 */
export interface HarnessStreamMetrics {
  /**
   * <p>The end-to-end latency of the invocation in milliseconds.</p>
   * @public
   */
  latencyMs: number | undefined;
}

/**
 * <p>Token usage counts for the invocation.</p>
 * @public
 */
export interface HarnessTokenUsage {
  /**
   * <p>The number of input tokens consumed.</p>
   * @public
   */
  inputTokens: number | undefined;

  /**
   * <p>The number of output tokens generated.</p>
   * @public
   */
  outputTokens: number | undefined;

  /**
   * <p>The total number of tokens consumed.</p>
   * @public
   */
  totalTokens: number | undefined;

  /**
   * <p>The number of input tokens read from cache.</p>
   * @public
   */
  cacheReadInputTokens?: number | undefined;

  /**
   * <p>The number of input tokens written to cache.</p>
   * @public
   */
  cacheWriteInputTokens?: number | undefined;
}

/**
 * <p>Token usage and latency metrics for the invocation.</p>
 * @public
 */
export interface HarnessMetadataEvent {
  /**
   * <p>Token usage counts.</p>
   * @public
   */
  usage: HarnessTokenUsage | undefined;

  /**
   * <p>Latency metrics.</p>
   * @public
   */
  metrics: HarnessStreamMetrics | undefined;
}

/**
 * <p>The streaming events returned by a harness invocation.</p>
 * @public
 */
export type InvokeHarnessStreamOutput =
  | InvokeHarnessStreamOutput.ContentBlockDeltaMember
  | InvokeHarnessStreamOutput.ContentBlockStartMember
  | InvokeHarnessStreamOutput.ContentBlockStopMember
  | InvokeHarnessStreamOutput.InternalServerExceptionMember
  | InvokeHarnessStreamOutput.MessageStartMember
  | InvokeHarnessStreamOutput.MessageStopMember
  | InvokeHarnessStreamOutput.MetadataMember
  | InvokeHarnessStreamOutput.RuntimeClientErrorMember
  | InvokeHarnessStreamOutput.ValidationExceptionMember
  | InvokeHarnessStreamOutput.$UnknownMember;

/**
 * @public
 */
export namespace InvokeHarnessStreamOutput {
  /**
   * <p>Indicates the start of a new message from the agent.</p>
   * @public
   */
  export interface MessageStartMember {
    messageStart: HarnessMessageStartEvent;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    messageStop?: never;
    metadata?: never;
    internalServerException?: never;
    validationException?: never;
    runtimeClientError?: never;
    $unknown?: never;
  }

  /**
   * <p>Indicates the start of a new content block.</p>
   * @public
   */
  export interface ContentBlockStartMember {
    messageStart?: never;
    contentBlockStart: HarnessContentBlockStartEvent;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    messageStop?: never;
    metadata?: never;
    internalServerException?: never;
    validationException?: never;
    runtimeClientError?: never;
    $unknown?: never;
  }

  /**
   * <p>A delta update to the current content block.</p>
   * @public
   */
  export interface ContentBlockDeltaMember {
    messageStart?: never;
    contentBlockStart?: never;
    contentBlockDelta: HarnessContentBlockDeltaEvent;
    contentBlockStop?: never;
    messageStop?: never;
    metadata?: never;
    internalServerException?: never;
    validationException?: never;
    runtimeClientError?: never;
    $unknown?: never;
  }

  /**
   * <p>Indicates the end of the current content block.</p>
   * @public
   */
  export interface ContentBlockStopMember {
    messageStart?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop: HarnessContentBlockStopEvent;
    messageStop?: never;
    metadata?: never;
    internalServerException?: never;
    validationException?: never;
    runtimeClientError?: never;
    $unknown?: never;
  }

  /**
   * <p>Indicates the end of the current message.</p>
   * @public
   */
  export interface MessageStopMember {
    messageStart?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    messageStop: HarnessMessageStopEvent;
    metadata?: never;
    internalServerException?: never;
    validationException?: never;
    runtimeClientError?: never;
    $unknown?: never;
  }

  /**
   * <p>Token usage and latency metrics for the invocation.</p>
   * @public
   */
  export interface MetadataMember {
    messageStart?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    messageStop?: never;
    metadata: HarnessMetadataEvent;
    internalServerException?: never;
    validationException?: never;
    runtimeClientError?: never;
    $unknown?: never;
  }

  /**
   * <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
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
    validationException?: never;
    runtimeClientError?: never;
    $unknown?: never;
  }

  /**
   * <p>The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.</p>
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
    validationException: ValidationException;
    runtimeClientError?: never;
    $unknown?: never;
  }

  /**
   * <p>An error returned by the runtime container during agent execution.</p>
   * @public
   */
  export interface RuntimeClientErrorMember {
    messageStart?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    messageStop?: never;
    metadata?: never;
    internalServerException?: never;
    validationException?: never;
    runtimeClientError: RuntimeClientError;
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
    validationException?: never;
    runtimeClientError?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    messageStart: (value: HarnessMessageStartEvent) => T;
    contentBlockStart: (value: HarnessContentBlockStartEvent) => T;
    contentBlockDelta: (value: HarnessContentBlockDeltaEvent) => T;
    contentBlockStop: (value: HarnessContentBlockStopEvent) => T;
    messageStop: (value: HarnessMessageStopEvent) => T;
    metadata: (value: HarnessMetadataEvent) => T;
    internalServerException: (value: InternalServerException) => T;
    validationException: (value: ValidationException) => T;
    runtimeClientError: (value: RuntimeClientError) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface InvokeHarnessResponse {
  /**
   * <p>The streaming output from the harness invocation.</p>
   * @public
   */
  stream: AsyncIterable<InvokeHarnessStreamOutput> | undefined;
}

/**
 * <p>Contains the content of a memory record.</p>
 * @public
 */
export type MemoryContent =
  | MemoryContent.TextMember
  | MemoryContent.$UnknownMember;

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
 * <p>The value of a memory record metadata entry.</p>
 * @public
 */
export type MemoryRecordMetadataValue =
  | MemoryRecordMetadataValue.DateTimeValueMember
  | MemoryRecordMetadataValue.NumberValueMember
  | MemoryRecordMetadataValue.StringListValueMember
  | MemoryRecordMetadataValue.StringValueMember
  | MemoryRecordMetadataValue.$UnknownMember;

/**
 * @public
 */
export namespace MemoryRecordMetadataValue {
  /**
   * <p>A string value.</p>
   * @public
   */
  export interface StringValueMember {
    stringValue: string;
    stringListValue?: never;
    numberValue?: never;
    dateTimeValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A list of string values.</p>
   * @public
   */
  export interface StringListValueMember {
    stringValue?: never;
    stringListValue: string[];
    numberValue?: never;
    dateTimeValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A numeric value.</p>
   * @public
   */
  export interface NumberValueMember {
    stringValue?: never;
    stringListValue?: never;
    numberValue: number;
    dateTimeValue?: never;
    $unknown?: never;
  }

  /**
   * <p>A timestamp value in ISO 8601 UTC format.</p>
   * @public
   */
  export interface DateTimeValueMember {
    stringValue?: never;
    stringListValue?: never;
    numberValue?: never;
    dateTimeValue: Date;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    stringValue?: never;
    stringListValue?: never;
    numberValue?: never;
    dateTimeValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    stringValue: (value: string) => T;
    stringListValue: (value: string[]) => T;
    numberValue: (value: number) => T;
    dateTimeValue: (value: Date) => T;
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

  /**
   * <p>Metadata key-value pairs to be stored with the memory record.</p>
   * @public
   */
  metadata?: Record<string, MemoryRecordMetadataValue> | undefined;
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

  /**
   * <p>Metadata key-value pairs to be stored with the memory record.</p>
   * @public
   */
  metadata?: Record<string, MemoryRecordMetadataValue> | undefined;
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
export type MetadataValue =
  | MetadataValue.StringValueMember
  | MetadataValue.$UnknownMember;

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
export type Content =
  | Content.TextMember
  | Content.$UnknownMember;

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
export type PayloadType =
  | PayloadType.BlobMember
  | PayloadType.ConversationalMember
  | PayloadType.$UnknownMember;

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
  metadata?: Record<string, MemoryRecordMetadataValue> | undefined;
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
export type LeftExpression =
  | LeftExpression.MetadataKeyMember
  | LeftExpression.$UnknownMember;

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
export type RightExpression =
  | RightExpression.MetadataValueMember
  | RightExpression.$UnknownMember;

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
export type ExtractionJobMessages =
  | ExtractionJobMessages.MessagesListMember
  | ExtractionJobMessages.$UnknownMember;

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
 * <p>The left-hand side of a memory record metadata filter expression.</p>
 * @public
 */
export type MemoryRecordLeftExpression =
  | MemoryRecordLeftExpression.MetadataKeyMember
  | MemoryRecordLeftExpression.$UnknownMember;

/**
 * @public
 */
export namespace MemoryRecordLeftExpression {
  /**
   * <p>The metadata key to filter on.</p>
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
 * <p>The right-hand side of a memory record metadata filter expression.</p>
 * @public
 */
export type MemoryRecordRightExpression =
  | MemoryRecordRightExpression.MetadataValueMember
  | MemoryRecordRightExpression.$UnknownMember;

/**
 * @public
 */
export namespace MemoryRecordRightExpression {
  /**
   * <p>The metadata value to compare against.</p>
   * @public
   */
  export interface MetadataValueMember {
    metadataValue: MemoryRecordMetadataValue;
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
    metadataValue: (value: MemoryRecordMetadataValue) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Filters to apply to metadata associated with a memory. Specify the metadata key and value in the <code>left</code> and <code>right</code> fields and use the <code>operator</code> field to define the relationship to match.</p>
 * @public
 */
export interface MemoryMetadataFilterExpression {
  /**
   * <p>The metadata key to evaluate.</p>
   * @public
   */
  left: MemoryRecordLeftExpression | undefined;

  /**
   * <p>The relationship between the metadata key and value to match when applying the metadata filter.</p>
   * @public
   */
  operator: MemoryRecordOperatorType | undefined;

  /**
   * <p>The value to compare against. Required for all operators except EXISTS and NOT_EXISTS.</p>
   * @public
   */
  right?: MemoryRecordRightExpression | undefined;
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
   * <p>The namespace prefix to filter memory records by. Returns all memory records in namespaces that start with the provided prefix. Either <code>namespace</code> or <code>namespacePath</code> is required.</p>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>Use namespacePath for hierarchical retrievals. Return all memory records where namespace falls under the same parent hierarchy. Either <code>namespace</code> or <code>namespacePath</code> is required.</p>
   * @public
   */
  namespacePath?: string | undefined;

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

  /**
   * <p>A list of metadata filter expressions to scope the returned memory records.</p>
   * @public
   */
  metadataFilters?: MemoryMetadataFilterExpression[] | undefined;
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
  metadata?: Record<string, MemoryRecordMetadataValue> | undefined;
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
