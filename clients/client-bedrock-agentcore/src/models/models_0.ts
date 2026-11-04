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
  CapacityProviderSessionStatus,
  CloudWatchLogsFilterOperator,
  CodeInterpreterSessionStatus,
  CommandExecutionStatus,
  ContentBlockType,
  FindingTargetType,
  HarnessBedrockApiFormat,
  HarnessConversationRole,
  HarnessHookDecision,
  HarnessHookEventType,
  HarnessOpenAiApiFormat,
  HarnessStopReason,
  HarnessToolType,
  HarnessToolUseStatus,
  HarnessToolUseType,
  InsightsFailureCategory,
  InsightType,
  LanguageRuntime,
  MemoryRecordStatus,
  MouseButton,
  Oauth2FlowType,
  OAuthGrantType,
  PaymentHttpMethodType,
  ProgrammingLanguage,
  RecommendationStatus,
  RecommendationType,
  RecordExpiryAction,
  ResourceContentType,
  ResultDestination,
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
 * The agent card definition for A2A descriptors, including the schema version and inline content that describes the agent's capabilities.
 *
 * @public
 */
export interface AgentCardDefinition {
  /**
   * The schema version of the agent card definition.
   *
   * @public
   */
  schemaVersion?: string | undefined;

  /**
   * The inline content of the agent card definition.
   *
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * The A2A (Agent-to-Agent) descriptor configuration for a registry record.
 *
 * @public
 */
export interface A2aDescriptor {
  /**
   * The agent card definition that describes the agent's capabilities and interface.
   *
   * @public
   */
  agentCard: AgentCardDefinition | undefined;
}

/**
 * An online evaluation configuration associated with a specific A/B test variant.
 *
 * @public
 */
export interface PerVariantOnlineEvaluationConfig {
  /**
   * The name of the variant this evaluation configuration applies to.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the online evaluation configuration for this variant.
   *
   * @public
   */
  onlineEvaluationConfigArn: string | undefined;
}

/**
 * The evaluation configuration for an A/B test, specifying which online evaluation configurations to use for measuring variant performance.
 *
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
   * The Amazon Resource Name (ARN) of a single online evaluation configuration to use for both variants.
   *
   * @public
   */
  export interface OnlineEvaluationConfigArnMember {
    onlineEvaluationConfigArn: string;
    perVariantOnlineEvaluationConfig?: never;
    $unknown?: never;
  }

  /**
   * Per-variant online evaluation configurations, allowing different evaluation settings for each variant.
   *
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
 * Statistics for the control variant in an A/B test.
 *
 * @public
 */
export interface ControlStats {
  /**
   * The name of the control variant.
   *
   * @public
   */
  variantName: string | undefined;

  /**
   * The number of sessions evaluated for the control variant.
   *
   * @public
   */
  sampleSize: number | undefined;

  /**
   * The mean evaluation score for the control variant.
   *
   * @public
   */
  mean: number | undefined;
}

/**
 * A confidence interval for a statistical measurement.
 *
 * @public
 */
export interface ConfidenceInterval {
  /**
   * The lower bound of the confidence interval.
   *
   * @public
   */
  lower?: number | undefined;

  /**
   * The upper bound of the confidence interval.
   *
   * @public
   */
  upper?: number | undefined;
}

/**
 * Statistical results for a treatment variant compared against the control.
 *
 * @public
 */
export interface VariantResult {
  /**
   * The name of the treatment variant.
   *
   * @public
   */
  variantName: string | undefined;

  /**
   * The number of sessions evaluated for this variant.
   *
   * @public
   */
  sampleSize: number | undefined;

  /**
   * The mean evaluation score for this variant.
   *
   * @public
   */
  mean: number | undefined;

  /**
   * The absolute change in mean score compared to the control variant.
   *
   * @public
   */
  absoluteChange?: number | undefined;

  /**
   * The percentage change in mean score compared to the control variant.
   *
   * @public
   */
  percentChange?: number | undefined;

  /**
   * The p-value indicating the statistical significance of the observed difference.
   *
   * @public
   */
  pValue?: number | undefined;

  /**
   * The confidence interval for the observed difference.
   *
   * @public
   */
  confidenceInterval?: ConfidenceInterval | undefined;

  /**
   * Whether the observed difference is statistically significant.
   *
   * @public
   */
  isSignificant: boolean | undefined;
}

/**
 * Statistical metrics for a single evaluator comparing control and treatment variants.
 *
 * @public
 */
export interface EvaluatorMetric {
  /**
   * The Amazon Resource Name (ARN) of the evaluator.
   *
   * @public
   */
  evaluatorArn: string | undefined;

  /**
   * The statistics for the control variant.
   *
   * @public
   */
  controlStats: ControlStats | undefined;

  /**
   * The results for each treatment variant compared against the control.
   *
   * @public
   */
  variantResults: VariantResult[] | undefined;
}

/**
 * The statistical results of an A/B test.
 *
 * @public
 */
export interface ABTestResults {
  /**
   * The timestamp when the analysis was performed.
   *
   * @public
   */
  analysisTimestamp?: Date | undefined;

  /**
   * The per-evaluator metrics comparing control and treatment variants.
   *
   * @public
   */
  evaluatorMetrics: EvaluatorMetric[] | undefined;
}

/**
 * Summary information about an A/B test.
 *
 * @public
 */
export interface ABTestSummary {
  /**
   * The unique identifier of the A/B test.
   *
   * @public
   */
  abTestId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the A/B test.
   *
   * @public
   */
  abTestArn: string | undefined;

  /**
   * The name of the A/B test.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The current status of the A/B test.
   *
   * @public
   */
  status: ABTestStatus | undefined;

  /**
   * The execution status of the A/B test.
   *
   * @public
   */
  executionStatus: ABTestExecutionStatus | undefined;

  /**
   * The description of the A/B test.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway used for traffic splitting.
   *
   * @public
   */
  gatewayArn?: string | undefined;

  /**
   * The timestamp when the A/B test was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the A/B test was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Contains summary information about an actor in an AgentCore Memory resource.
 *
 * @public
 */
export interface ActorSummary {
  /**
   * The unique identifier of the actor.
   *
   * @public
   */
  actorId: string | undefined;
}

/**
 * A signal indicating a detected failure within a span.
 *
 * @public
 */
export interface InsightsFailureSignal {
  /**
   * The failure category classification for this signal.
   *
   * @public
   */
  category: InsightsFailureCategory | undefined;

  /**
   * The evidence supporting the failure detection.
   *
   * @public
   */
  evidence: string | undefined;

  /**
   * The confidence score of the failure detection.
   *
   * @public
   */
  confidence: number | undefined;
}

/**
 * Details about a specific span where a failure was detected.
 *
 * @public
 */
export interface FailureSpanDetail {
  /**
   * The unique identifier of the span where the failure occurred.
   *
   * @public
   */
  spanId: string | undefined;

  /**
   * The trace identifier associated with the failure span.
   *
   * @public
   */
  traceId: string | undefined;

  /**
   * The failure signals detected in this span.
   *
   * @public
   */
  signals: InsightsFailureSignal[] | undefined;
}

/**
 * A session affected by a detected failure pattern, including root cause details.
 *
 * @public
 */
export interface AffectedSession {
  /**
   * The unique identifier of the affected session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * An explanation of how the failure manifested in this session.
   *
   * @public
   */
  explanation: string | undefined;

  /**
   * The type of fix recommended for this failure.
   *
   * @public
   */
  fixType: string | undefined;

  /**
   * The specific fix recommendation for this session.
   *
   * @public
   */
  recommendation: string | undefined;

  /**
   * The list of spans where failures were detected in this session.
   *
   * @public
   */
  failureSpans: FailureSpanDetail[] | undefined;
}

/**
 * @public
 */
export interface GetAgentCardRequest {
  /**
   * The session ID that the AgentCore Runtime agent is using.
   *
   * @public
   */
  runtimeSessionId?: string | undefined;

  /**
   * The ARN of the AgentCore Runtime agent for which you want to get the A2A agent card.
   *
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * Optional qualifier to specify an agent alias, such as `prod`code&gt; or `dev`. If you don't provide a value, the DEFAULT alias is used.
   *
   * @public
   */
  qualifier?: string | undefined;
}

/**
 * @public
 */
export interface GetAgentCardResponse {
  /**
   * The ID of the session associated with the AgentCore Runtime agent.
   *
   * @public
   */
  runtimeSessionId?: string | undefined;

  /**
   * An agent card document that contains metadata and capabilities for an AgentCore Runtime agent.
   *
   * @public
   */
  agentCard: __DocumentType | undefined;

  /**
   * The status code of the request.
   *
   * @public
   */
  statusCode?: number | undefined;
}

/**
 * Stores information about a field passed inside a request that resulted in an exception.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A message describing why this field failed validation.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface InvokeAgentRuntimeRequest {
  /**
   * The MIME type of the input data in the payload. This tells the agent runtime how to interpret the payload data. Common values include application/json for JSON data.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * The desired MIME type for the response from the agent runtime. This tells the agent runtime what format to use for the response data. Common values include application/json for JSON data.
   *
   * @public
   */
  accept?: string | undefined;

  /**
   * The identifier of the MCP session.
   *
   * @public
   */
  mcpSessionId?: string | undefined;

  /**
   * The identifier of the runtime session.
   *
   * @public
   */
  runtimeSessionId?: string | undefined;

  /**
   * The version of the MCP protocol being used.
   *
   * @public
   */
  mcpProtocolVersion?: string | undefined;

  /**
   * The MCP method being invoked. For example, `tools/call`, `resources/read`, or `prompts/get`.
   *
   * @public
   */
  mcpMethod?: string | undefined;

  /**
   * The name of the MCP resource, tool, or prompt being accessed. The value depends on the method:
   *
   * - `tools/call` – The tool name.
   * - `resources/read` – The resource URI.
   * - `prompts/get` – The prompt name.
   *
   * @public
   */
  mcpName?: string | undefined;

  /**
   * The identifier of the runtime user.
   *
   * @public
   */
  runtimeUserId?: string | undefined;

  /**
   * The trace identifier for request tracking.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * The parent trace information for distributed tracing.
   *
   * @public
   */
  traceParent?: string | undefined;

  /**
   * The trace state information for distributed tracing.
   *
   * @public
   */
  traceState?: string | undefined;

  /**
   * Additional context information for distributed tracing.
   *
   * @public
   */
  baggage?: string | undefined;

  /**
   * The identifier of the agent runtime to invoke. You can specify either the full Amazon Web Services Resource Name (ARN) or the agent ID. If you use the agent ID, you must also provide the `accountId` query parameter.
   *
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * The qualifier to use for the agent runtime. This is an endpoint name that points to a specific version. If not specified, Amazon Bedrock AgentCore uses the default endpoint of the agent runtime.
   *
   * @public
   */
  qualifier?: string | undefined;

  /**
   * The identifier of the Amazon Web Services account for the agent runtime resource. This parameter is required when you specify an agent ID instead of the full ARN for `agentRuntimeArn`.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The input data to send to the agent runtime. The format of this data depends on the specific agent configuration and must match the specified content type. For most agents, this is a JSON object containing the user's request.
   *
   * @public
   */
  payload: Uint8Array | undefined;
}

/**
 * @public
 */
export interface InvokeAgentRuntimeResponse {
  /**
   * The identifier of the runtime session.
   *
   * @public
   */
  runtimeSessionId?: string | undefined;

  /**
   * The HTTPS endpoint that addresses this runtime session directly. This value is returned only when the agent runtime is configured with allowed ports and direct runtime access is available for the session. If this value is not present, use `InvokeAgentRuntime` to communicate with the session.
   *
   * @public
   */
  sessionEndpointUrl?: string | undefined;

  /**
   * The identifier of the MCP session.
   *
   * @public
   */
  mcpSessionId?: string | undefined;

  /**
   * The version of the MCP protocol being used.
   *
   * @public
   */
  mcpProtocolVersion?: string | undefined;

  /**
   * The trace identifier for request tracking.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * The parent trace information for distributed tracing.
   *
   * @public
   */
  traceParent?: string | undefined;

  /**
   * The trace state information for distributed tracing.
   *
   * @public
   */
  traceState?: string | undefined;

  /**
   * Additional context information for distributed tracing.
   *
   * @public
   */
  baggage?: string | undefined;

  /**
   * The MIME type of the response data. This indicates how to interpret the response data. Common values include application/json for JSON data.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * The response data from the agent runtime. The format of this data depends on the specific agent configuration and the requested accept type. For most agents, this is a JSON object containing the agent's response to the user's request.
   *
   * @public
   */
  response?: StreamingBlobTypes | undefined;

  /**
   * The HTTP status code of the response. A status code of 200 indicates a successful operation. Other status codes indicate various error conditions.
   *
   * @public
   */
  statusCode?: number | undefined;
}

/**
 * The request body structure for the `InvokeAgentRuntimeCommand` operation, containing the command to execute and optional configuration parameters.
 *
 * @public
 */
export interface InvokeAgentRuntimeCommandRequestBody {
  /**
   * The shell command to execute on the agent runtime. This command is executed in the runtime environment and its output is streamed back to the caller.
   *
   * @public
   */
  command: string | undefined;

  /**
   * The maximum duration in seconds to wait for the command to complete. If the command execution exceeds this timeout, it will be terminated. Default is 300 seconds. Minimum is 1 second. Maximum is 3600 seconds.
   *
   * @public
   */
  timeout?: number | undefined;
}

/**
 * Request for InvokeAgentRuntimeCommand operation.
 *
 * @public
 */
export interface InvokeAgentRuntimeCommandRequest {
  /**
   * The MIME type of the input data in the request payload. This tells the agent runtime how to interpret the payload data. Common values include application/json for JSON data.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * The desired MIME type for the response from the agent runtime command. This tells the agent runtime what format to use for the response data. Common values include application/json for JSON data.
   *
   * @public
   */
  accept?: string | undefined;

  /**
   * The unique identifier of the runtime session in which to execute the command. This session ID is used to maintain state and context across multiple command invocations.
   *
   * @public
   */
  runtimeSessionId?: string | undefined;

  /**
   * The trace identifier for request tracking.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * The parent trace information for distributed tracing.
   *
   * @public
   */
  traceParent?: string | undefined;

  /**
   * The trace state information for distributed tracing.
   *
   * @public
   */
  traceState?: string | undefined;

  /**
   * Additional context information for distributed tracing.
   *
   * @public
   */
  baggage?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the agent runtime on which to execute the command. This identifies the specific agent runtime environment where the command will run.
   *
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * The qualifier to use for the agent runtime. This is an endpoint name that points to a specific version. If not specified, Amazon Bedrock AgentCore uses the default endpoint of the agent runtime.
   *
   * @public
   */
  qualifier?: string | undefined;

  /**
   * The identifier of the Amazon Web Services account for the agent runtime resource. This parameter is required when you specify an agent ID instead of the full ARN for `agentRuntimeArn`.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The request body containing the command to execute and optional configuration parameters such as timeout settings.
   *
   * @public
   */
  body: InvokeAgentRuntimeCommandRequestBody | undefined;
}

/**
 * An event that contains incremental output from a command execution. This event streams standard output and standard error content as it becomes available during command execution.
 *
 * @public
 */
export interface ContentDeltaEvent {
  /**
   * The standard output content from the command execution. This field contains the incremental output written to stdout by the executing command.
   *
   * @public
   */
  stdout?: string | undefined;

  /**
   * The standard error content from the command execution. This field contains the incremental output written to stderr by the executing command.
   *
   * @public
   */
  stderr?: string | undefined;
}

/**
 * An event that signals the start of content streaming from a command execution. This event is sent when the command begins producing output.
 *
 * @public
 */
export interface ContentStartEvent {}

/**
 * An event that signals the completion of a command execution. This event contains the final status and exit code of the executed command.
 *
 * @public
 */
export interface ContentStopEvent {
  /**
   * The exit code returned by the executed command. An exit code of 0 indicates successful execution, -1 indicates a platform error, and values greater than 0 indicate command-specific errors.
   *
   * @public
   */
  exitCode: number | undefined;

  /**
   * The final status of the command execution. Valid values are `COMPLETED` for successful completion or `TIMED_OUT` if the command exceeded the specified timeout.
   *
   * @public
   */
  status: CommandExecutionStatus | undefined;
}

/**
 * A structure representing a response chunk that contains exactly one of the possible event types: `contentStart`, `contentDelta`, or `contentStop`.
 *
 * @public
 */
export interface ResponseChunk {
  /**
   * An event indicating the start of content streaming from the command execution. This is the first chunk received.
   *
   * @public
   */
  contentStart?: ContentStartEvent | undefined;

  /**
   * An event containing incremental output (stdout or stderr) from the command execution. These are the middle chunks.
   *
   * @public
   */
  contentDelta?: ContentDeltaEvent | undefined;

  /**
   * An event indicating the completion of the command execution, including the exit code and final status. This is the last chunk received.
   *
   * @public
   */
  contentStop?: ContentStopEvent | undefined;
}

/**
 * The streaming output union for the `InvokeAgentRuntimeCommand` operation. This union delivers typed events: `contentStart` (first), `contentDelta` (middle), and `contentStop` (last).
 *
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
   * A response chunk containing command execution events such as content start, content delta, or content stop events.
   *
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
   * Exception events for error streaming.
   *
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
   * The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.
   *
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
   * The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.
   *
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
   * The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.
   *
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
   * The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.
   *
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
   * The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.
   *
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
   * The exception that occurs when there is an error in the runtime client. This can happen due to network issues, invalid configuration, or other client-side problems. Check the error message for specific details about the error.
   *
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
 * Response for InvokeAgentRuntimeCommand operation.
 *
 * @public
 */
export interface InvokeAgentRuntimeCommandResponse {
  /**
   * The unique identifier of the runtime session in which the command was executed.
   *
   * @public
   */
  runtimeSessionId?: string | undefined;

  /**
   * The trace identifier for request tracking.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * The parent trace information for distributed tracing.
   *
   * @public
   */
  traceParent?: string | undefined;

  /**
   * The trace state information for distributed tracing.
   *
   * @public
   */
  traceState?: string | undefined;

  /**
   * Additional context information for distributed tracing.
   *
   * @public
   */
  baggage?: string | undefined;

  /**
   * The MIME type of the response data. This indicates how to interpret the response data. Common values include application/json for JSON data.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * The HTTP status code of the response. A status code of 200 indicates a successful operation. Other status codes indicate various error conditions.
   *
   * @public
   */
  statusCode?: number | undefined;

  /**
   * The streaming output from the command execution. This stream contains events that provide real-time updates including standard output, standard error, and completion status.
   *
   * @public
   */
  stream: AsyncIterable<InvokeAgentRuntimeCommandStreamOutput> | undefined;
}

/**
 * @public
 */
export interface StopRuntimeSessionRequest {
  /**
   * The ID of the session that you want to stop.
   *
   * @public
   */
  runtimeSessionId: string | undefined;

  /**
   * The ARN of the agent that contains the session that you want to stop.
   *
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * Optional qualifier to specify an agent alias, such as `prod`code&gt; or `dev`. If you don't provide a value, the DEFAULT alias is used.
   *
   * @public
   */
  qualifier?: string | undefined;

  /**
   * Idempotent token used to identify the request. If you use the same token with multiple requests, the same response is returned. Use ClientToken to prevent the same request from being processed more than once.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StopRuntimeSessionResponse {
  /**
   * The ID of the session that you requested to stop.
   *
   * @public
   */
  runtimeSessionId?: string | undefined;

  /**
   * The status code of the request to stop the session.
   *
   * @public
   */
  statusCode?: number | undefined;
}

/**
 * The structured skill definition with a schema version and inline content.
 *
 * @public
 */
export interface SkillDefinition {
  /**
   * The schema version of the skill definition. If you don't specify a version, the service detects it automatically.
   *
   * @public
   */
  schemaVersion?: string | undefined;

  /**
   * The inline content of the skill definition.
   *
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * The skill markdown definition for agent skills descriptors.
 *
 * @public
 */
export interface SkillMdDefinition {
  /**
   * The inline markdown content of the skill definition.
   *
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * The agent skills descriptor configuration for a registry record.
 *
 * @public
 */
export interface AgentSkillsDescriptor {
  /**
   * The skill description in markdown format.
   *
   * @public
   */
  skillMd: SkillMdDefinition | undefined;

  /**
   * The structured skill definition with a schema version and content.
   *
   * @public
   */
  skillDefinition?: SkillDefinition | undefined;
}

/**
 * Configuration for using a batch evaluation as the source of agent traces for recommendations.
 *
 * @public
 */
export interface BatchEvaluationTraceConfig {
  /**
   * The ARN of the completed batch evaluation to use as the trace source.
   *
   * @public
   */
  batchEvaluationArn: string | undefined;
}

/**
 * A value used in filter comparisons, supporting different data types.
 *
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
   * A string value for text-based filtering.
   *
   * @public
   */
  export interface StringValueMember {
    stringValue: string;
    doubleValue?: never;
    booleanValue?: never;
    $unknown?: never;
  }

  /**
   * A numeric value for numerical filtering and comparisons.
   *
   * @public
   */
  export interface DoubleValueMember {
    stringValue?: never;
    doubleValue: number;
    booleanValue?: never;
    $unknown?: never;
  }

  /**
   * A boolean value for true/false filtering conditions.
   *
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
 * A filter for narrowing down agent traces from CloudWatch Logs based on key-value comparisons.
 *
 * @public
 */
export interface CloudWatchLogsFilter {
  /**
   * The key or field name to filter on within the agent trace data.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The comparison operator to use for filtering.
   *
   * @public
   */
  operator: CloudWatchLogsFilterOperator | undefined;

  /**
   * The value to compare against using the specified operator.
   *
   * @public
   */
  value: FilterValue | undefined;
}

/**
 * A rule configuration for filtering agent traces from CloudWatch Logs.
 *
 * @public
 */
export interface CloudWatchLogsRule {
  /**
   * The list of filters to apply when reading agent traces.
   *
   * @public
   */
  filters?: CloudWatchLogsFilter[] | undefined;
}

/**
 * Configuration for reading agent traces from CloudWatch Logs for recommendation analysis.
 *
 * @public
 */
export interface CloudWatchLogsTraceConfig {
  /**
   * The list of CloudWatch log group ARNs to read agent traces from.
   *
   * @public
   */
  logGroupArns: string[] | undefined;

  /**
   * The list of service names to filter traces within the specified log groups.
   *
   * @public
   */
  serviceNames: string[] | undefined;

  /**
   * The start time of the time range to read traces from.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end time of the time range to read traces from.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * Optional rule configuration for filtering traces.
   *
   * @public
   */
  rule?: CloudWatchLogsRule | undefined;
}

/**
 * Contains the configuration for reusing agent traces from an online evaluation configuration for recommendation analysis. Because online evaluation is a continuous stream, a time range specifies which evaluated sessions the recommendation includes.
 *
 * @public
 */
export interface OnlineEvaluationTraceConfig {
  /**
   * The ARN of the online evaluation configuration to reuse sessions from.
   *
   * @public
   */
  onlineEvaluationConfigArn: string | undefined;

  /**
   * The start time of the time range. Only sessions evaluated at or after this timestamp are included.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end time of the time range. Only sessions evaluated before this timestamp are included.
   *
   * @public
   */
  endTime: Date | undefined;
}

/**
 * The configuration specifying where to read agent traces from for recommendation analysis.
 *
 * @public
 */
export type AgentTracesConfig =
  | AgentTracesConfig.BatchEvaluationMember
  | AgentTracesConfig.CloudwatchLogsMember
  | AgentTracesConfig.OnlineEvaluationMember
  | AgentTracesConfig.SessionSpansMember
  | AgentTracesConfig.$UnknownMember;

/**
 * @public
 */
export namespace AgentTracesConfig {
  /**
   * Agent traces provided as inline session spans in OpenTelemetry format.
   *
   * @public
   */
  export interface SessionSpansMember {
    sessionSpans: __DocumentType[];
    cloudwatchLogs?: never;
    batchEvaluation?: never;
    onlineEvaluation?: never;
    $unknown?: never;
  }

  /**
   * Agent traces read from CloudWatch Logs.
   *
   * @public
   */
  export interface CloudwatchLogsMember {
    sessionSpans?: never;
    cloudwatchLogs: CloudWatchLogsTraceConfig;
    batchEvaluation?: never;
    onlineEvaluation?: never;
    $unknown?: never;
  }

  /**
   * Use a completed batch evaluation as the source of agent traces.
   *
   * @public
   */
  export interface BatchEvaluationMember {
    sessionSpans?: never;
    cloudwatchLogs?: never;
    batchEvaluation: BatchEvaluationTraceConfig;
    onlineEvaluation?: never;
    $unknown?: never;
  }

  /**
   * Agent traces from an online evaluation configuration over a specified time range.
   *
   * @public
   */
  export interface OnlineEvaluationMember {
    sessionSpans?: never;
    cloudwatchLogs?: never;
    batchEvaluation?: never;
    onlineEvaluation: OnlineEvaluationTraceConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sessionSpans?: never;
    cloudwatchLogs?: never;
    batchEvaluation?: never;
    onlineEvaluation?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    sessionSpans: (value: __DocumentType[]) => T;
    cloudwatchLogs: (value: CloudWatchLogsTraceConfig) => T;
    batchEvaluation: (value: BatchEvaluationTraceConfig) => T;
    onlineEvaluation: (value: OnlineEvaluationTraceConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface SaveBrowserSessionProfileRequest {
  /**
   * The trace identifier for request tracking.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * The parent trace information for distributed tracing.
   *
   * @public
   */
  traceParent?: string | undefined;

  /**
   * The unique identifier for the browser profile. This identifier is used to reference the profile when starting new browser sessions. The identifier must follow the pattern of an alphanumeric name (up to 48 characters) followed by a hyphen and a 10-character alphanumeric suffix.
   *
   * @public
   */
  profileIdentifier: string | undefined;

  /**
   * The unique identifier of the browser associated with the session from which to save the profile.
   *
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * The unique identifier of the browser session from which to save the profile. The session must be active when saving the profile.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock AgentCore ignores the request, but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface SaveBrowserSessionProfileResponse {
  /**
   * The unique identifier of the saved browser profile.
   *
   * @public
   */
  profileIdentifier: string | undefined;

  /**
   * The unique identifier of the browser associated with the session from which the profile was saved.
   *
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * The unique identifier of the browser session from which the profile was saved.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The timestamp when the browser profile was last updated. This value is in ISO 8601 format.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetBrowserSessionRequest {
  /**
   * The unique identifier of the browser associated with the session.
   *
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * The unique identifier of the browser session to retrieve.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * The Amazon Web Services Secrets Manager location configuration.
 *
 * @public
 */
export interface SecretsManagerLocation {
  /**
   * The ARN of the Amazon Web Services Secrets Manager secret containing the certificate.
   *
   * @public
   */
  secretArn: string | undefined;
}

/**
 * The location from which to retrieve a certificate.
 *
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
   * The Amazon Web Services Secrets Manager location of the certificate.
   *
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
 * A certificate to install in the browser or code interpreter session.
 *
 * @public
 */
export interface Certificate {
  /**
   * The location of the certificate.
   *
   * @public
   */
  location: CertificateLocation | undefined;
}

/**
 * The Amazon S3 location configuration of a resource.
 *
 * @public
 */
export interface S3Location {
  /**
   * The name of the Amazon S3 bucket where the resource is stored.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * The name of the Amazon S3 prefix/key where the resource is stored.
   *
   * @public
   */
  prefix: string | undefined;

  /**
   * The name of the Amazon S3 version ID where the resource is stored (Optional).
   *
   * @public
   */
  versionId?: string | undefined;
}

/**
 * The location of the browser extension.
 *
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
   * The Amazon S3 location of the resource. Use this when the resource is stored in an Amazon S3 bucket.
   *
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
 * Browser enterprise policy configuration.
 *
 * @public
 */
export interface BrowserEnterprisePolicy {
  /**
   * The location of the enterprise policy file.
   *
   * @public
   */
  location: ResourceLocation | undefined;

  /**
   * The enterprise policy type. See BrowserEnterprisePolicyType.
   *
   * @public
   */
  type?: BrowserEnterprisePolicyType | undefined;
}

/**
 * Browser extension configuration.
 *
 * @public
 */
export interface BrowserExtension {
  /**
   * The location where the browser extension files are stored. This specifies the source from which the extension will be loaded and installed.
   *
   * @public
   */
  location: ResourceLocation | undefined;
}

/**
 * The configuration for mounting an Amazon Elastic File System (Amazon EFS) access point that you own into a session.
 *
 * @public
 */
export interface EfsConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Elastic File System (Amazon EFS) access point to mount.
   *
   * @public
   */
  accessPointArn: string | undefined;

  /**
   * The absolute path within the session at which the access point is mounted, for example `/mnt/efs`. Each mount path must be unique across all file system configurations in the session.
   *
   * @public
   */
  mountPath: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Elastic File System (Amazon EFS) file system that owns the access point.
   *
   * @public
   */
  fileSystemArn: string | undefined;
}

/**
 * The configuration for mounting an Amazon Simple Storage Service (Amazon S3) Files access point that you own into a session.
 *
 * @public
 */
export interface S3FilesConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Simple Storage Service (Amazon S3) Files access point to mount.
   *
   * @public
   */
  accessPointArn: string | undefined;

  /**
   * The absolute path within the session at which the access point is mounted, for example `/mnt/s3data`. Each mount path must be unique across all file system configurations in the session.
   *
   * @public
   */
  mountPath: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Simple Storage Service (Amazon S3) Files file system that owns the access point.
   *
   * @public
   */
  fileSystemArn: string | undefined;
}

/**
 * Specifies a file system to mount into the session by providing exactly one of the following:
 *
 * - `s3FilesConfiguration` - Mounts an Amazon Simple Storage Service (Amazon S3) Files access point.
 * - `efsConfiguration` - Mounts an Amazon Elastic File System (Amazon EFS) access point.
 *
 * @public
 */
export type ToolsFileSystemConfiguration =
  | ToolsFileSystemConfiguration.EfsConfigurationMember
  | ToolsFileSystemConfiguration.S3FilesConfigurationMember
  | ToolsFileSystemConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ToolsFileSystemConfiguration {
  /**
   * The configuration for mounting your own Amazon Simple Storage Service (Amazon S3) Files access point into the session.
   *
   * @public
   */
  export interface S3FilesConfigurationMember {
    s3FilesConfiguration: S3FilesConfiguration;
    efsConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The configuration for mounting your own Amazon Elastic File System (Amazon EFS) access point into the session.
   *
   * @public
   */
  export interface EfsConfigurationMember {
    s3FilesConfiguration?: never;
    efsConfiguration: EfsConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3FilesConfiguration?: never;
    efsConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3FilesConfiguration: (value: S3FilesConfiguration) => T;
    efsConfiguration: (value: EfsConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration for a browser profile in Amazon Bedrock AgentCore. A browser profile contains persistent browser data such as cookies and local storage that can be saved from one browser session and reused in subsequent sessions. Browser profiles enable continuity for tasks that require authentication, maintain user preferences, or depend on previously stored browser state.
 *
 * @public
 */
export interface BrowserProfileConfiguration {
  /**
   * The unique identifier of the browser profile. This identifier is used to reference the profile when starting new browser sessions or saving session data to the profile.
   *
   * @public
   */
  profileIdentifier: string | undefined;
}

/**
 * Configuration for domains that should bypass all proxies and connect directly to the internet. These bypass rules take precedence over all proxy routing rules.
 *
 * @public
 */
export interface ProxyBypass {
  /**
   * Array of domain patterns that should bypass the proxy. Supports `.amazonaws.com` for subdomain matching or `amazonaws.com` for exact domain matching. Requests to these domains connect directly without using any proxy. Maximum 253 characters per pattern.
   *
   * @public
   */
  domainPatterns?: string[] | undefined;
}

/**
 * Configuration for HTTP Basic Authentication using credentials stored in Amazon Web Services Secrets Manager. The secret must contain a JSON object with `username` and `password` string fields. Username allows alphanumeric characters and `@._+=-` symbols (pattern: `^[a-zA-Z0-9@._+=\-]+$`). Password allows alphanumeric characters and `@._+=-!#$%&*` symbols (pattern: `^[a-zA-Z0-9@._+=\-!#$%&*]+$`). Both fields have a maximum length of 256 characters.
 *
 * @public
 */
export interface BasicAuth {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret containing proxy credentials. The secret must be a JSON object with `username` and `password` string fields that meet validation requirements. The caller must have `secretsmanager:GetSecretValue` permission for this ARN. Example secret format: `\{"username": "proxy_user", "password": "secure_password"\}`
   *
   * @public
   */
  secretArn: string | undefined;
}

/**
 * Union type representing different proxy authentication methods. Currently supports HTTP Basic Authentication (username and password).
 *
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
   * HTTP Basic Authentication credentials (username and password) stored in Amazon Web Services Secrets Manager.
   *
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
 * Configuration for a customer-managed external proxy server. Includes server location, optional domain-based routing patterns, and authentication credentials.
 *
 * @public
 */
export interface ExternalProxy {
  /**
   * The hostname of the proxy server. Must be a valid DNS hostname (maximum 253 characters).
   *
   * @public
   */
  server: string | undefined;

  /**
   * The port number of the proxy server. Valid range: 1-65535.
   *
   * @public
   */
  port: number | undefined;

  /**
   * Optional array of domain patterns that should route through this specific proxy. Supports `.example.com` for subdomain matching (matches any subdomain of example.com) or `example.com` for exact domain matching. If omitted, this proxy acts as a catch-all for domains not matched by other proxies. Maximum 100 patterns per proxy, each up to 253 characters.
   *
   * @public
   */
  domainPatterns?: string[] | undefined;

  /**
   * Optional authentication credentials for the proxy server. If omitted, the proxy is accessed without authentication (useful for IP-allowlisted proxies).
   *
   * @public
   */
  credentials?: ProxyCredentials | undefined;
}

/**
 * Union type representing different proxy configurations. Currently supports external customer-managed proxies.
 *
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
   * Configuration for an external customer-managed proxy server.
   *
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
 * Configuration for routing browser traffic through customer-managed proxy servers. Supports 1-5 proxy servers for domain-based routing and proxy bypass rules.
 *
 * @public
 */
export interface ProxyConfiguration {
  /**
   * An array of 1-5 proxy server configurations for domain-based routing. Each proxy can specify which domains it handles via `domainPatterns`, enabling flexible routing of different traffic through different proxies based on destination domain.
   *
   * @public
   */
  proxies: Proxy[] | undefined;

  /**
   * Optional configuration for domains that should bypass all proxies and connect directly to their destination, like the internet. Takes precedence over all proxy routing rules.
   *
   * @public
   */
  bypass?: ProxyBypass | undefined;
}

/**
 * The configuration for a stream that enables programmatic control of a browser session in Amazon Bedrock AgentCore. This stream provides a bidirectional communication channel for sending commands to the browser and receiving responses, allowing agents to automate web interactions such as navigation, form filling, and element clicking.
 *
 * @public
 */
export interface AutomationStream {
  /**
   * The endpoint URL for the automation stream. This URL is used to establish a WebSocket connection to the stream for sending commands and receiving responses.
   *
   * @public
   */
  streamEndpoint: string | undefined;

  /**
   * The current status of the automation stream. This indicates whether the stream is available for use. Possible values include ACTIVE, CONNECTING, and DISCONNECTED.
   *
   * @public
   */
  streamStatus: AutomationStreamStatus | undefined;
}

/**
 * The configuration for a stream that provides a visual representation of a browser session in Amazon Bedrock AgentCore. This stream enables agents to observe the current state of the browser, including rendered web pages, visual elements, and the results of interactions.
 *
 * @public
 */
export interface LiveViewStream {
  /**
   * The endpoint URL for the live view stream. This URL is used to establish a connection to receive visual updates from the browser session.
   *
   * @public
   */
  streamEndpoint?: string | undefined;
}

/**
 * The collection of streams associated with a browser session in Amazon Bedrock AgentCore. These streams provide different ways to interact with and observe the browser session, including programmatic control and visual representation of the browser content.
 *
 * @public
 */
export interface BrowserSessionStream {
  /**
   * The stream that enables programmatic control of the browser. This stream allows agents to perform actions such as navigating to URLs, clicking elements, and filling forms.
   *
   * @public
   */
  automationStream: AutomationStream | undefined;

  /**
   * The stream that provides a visual representation of the browser content. This stream allows agents to observe the current state of the browser, including rendered web pages and visual elements.
   *
   * @public
   */
  liveViewStream?: LiveViewStream | undefined;
}

/**
 * The configuration that defines the dimensions of a browser viewport in a browser session. The viewport determines the visible area of web content and affects how web pages are rendered and displayed. Proper viewport configuration ensures that web content is displayed correctly for the agent's browsing tasks.
 *
 * @public
 */
export interface ViewPort {
  /**
   * The width of the viewport in pixels. This value determines the horizontal dimension of the visible area. Valid values range from 800 to 1920 pixels.
   *
   * @public
   */
  width: number | undefined;

  /**
   * The height of the viewport in pixels. This value determines the vertical dimension of the visible area. Valid values range from 600 to 1080 pixels.
   *
   * @public
   */
  height: number | undefined;
}

/**
 * @public
 */
export interface GetBrowserSessionResponse {
  /**
   * The identifier of the browser.
   *
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * The identifier of the browser session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The name of the browser session.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The time at which the browser session was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The configuration that defines the dimensions of a browser viewport in a browser session. The viewport determines the visible area of web content and affects how web pages are rendered and displayed. Proper viewport configuration ensures that web content is displayed correctly for the agent's browsing tasks.
   *
   * @public
   */
  viewPort?: ViewPort | undefined;

  /**
   * The list of browser extensions that are configured in the browser session.
   *
   * @public
   */
  extensions?: BrowserExtension[] | undefined;

  /**
   * A list of files containing enterprise policies for the browser session.
   *
   * @public
   */
  enterprisePolicies?: BrowserEnterprisePolicy[] | undefined;

  /**
   * The browser profile configuration associated with this session. Contains the profile identifier that links to persistent browser data such as cookies and local storage.
   *
   * @public
   */
  profileConfiguration?: BrowserProfileConfiguration | undefined;

  /**
   * The timeout period for the browser session in seconds.
   *
   * @public
   */
  sessionTimeoutSeconds?: number | undefined;

  /**
   * The current status of the browser session. Possible values include ACTIVE, STOPPING, and STOPPED.
   *
   * @public
   */
  status?: BrowserSessionStatus | undefined;

  /**
   * The streams associated with this browser session. These include the automation stream and live view stream.
   *
   * @public
   */
  streams?: BrowserSessionStream | undefined;

  /**
   * The active proxy configuration for this browser session. This field is only present if proxy configuration was provided when the session was started using `StartBrowserSession`. The configuration includes proxy servers, domain bypass rules and the proxy authentication credentials.
   *
   * @public
   */
  proxyConfiguration?: ProxyConfiguration | undefined;

  /**
   * The list of certificates installed in the browser session.
   *
   * @public
   */
  certificates?: Certificate[] | undefined;

  /**
   * The file system configurations for the browser session. Each entry describes an access point and its mount path.
   *
   * @public
   */
  filesystemConfigurations?: ToolsFileSystemConfiguration[] | undefined;

  /**
   * The artifact containing the session replay information.
   *
   * @public
   */
  sessionReplayArtifact?: string | undefined;

  /**
   * The time at which the browser session was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * Arguments for a key press action.
 *
 * @public
 */
export interface KeyPressArguments {
  /**
   * The key name to press (for example, `enter`, `tab`, `escape`).
   *
   * @public
   */
  key: string | undefined;

  /**
   * The number of times to press the key. Valid range: 1–100. Defaults to 1.
   *
   * @public
   */
  presses?: number | undefined;
}

/**
 * Arguments for a key shortcut action.
 *
 * @public
 */
export interface KeyShortcutArguments {
  /**
   * The key combination to press (for example, `["ctrl", "s"]`). Maximum 5 keys.
   *
   * @public
   */
  keys: string[] | undefined;
}

/**
 * Arguments for a key type action.
 *
 * @public
 */
export interface KeyTypeArguments {
  /**
   * The text string to type. Maximum length: 10,000 characters.
   *
   * @public
   */
  text: string | undefined;
}

/**
 * Arguments for a mouse click action.
 *
 * @public
 */
export interface MouseClickArguments {
  /**
   * The X coordinate on screen where the click occurs.
   *
   * @public
   */
  x: number | undefined;

  /**
   * The Y coordinate on screen where the click occurs.
   *
   * @public
   */
  y: number | undefined;

  /**
   * The mouse button to use. Defaults to `LEFT`.
   *
   * @public
   */
  button?: MouseButton | undefined;

  /**
   * The number of clicks to perform. Valid range: 1–10. Defaults to 1.
   *
   * @public
   */
  clickCount?: number | undefined;
}

/**
 * Arguments for a mouse drag action.
 *
 * @public
 */
export interface MouseDragArguments {
  /**
   * The ending X coordinate for the drag.
   *
   * @public
   */
  endX: number | undefined;

  /**
   * The ending Y coordinate for the drag.
   *
   * @public
   */
  endY: number | undefined;

  /**
   * The starting X coordinate for the drag.
   *
   * @public
   */
  startX: number | undefined;

  /**
   * The starting Y coordinate for the drag.
   *
   * @public
   */
  startY: number | undefined;

  /**
   * The mouse button to use for the drag. Defaults to `LEFT`.
   *
   * @public
   */
  button?: MouseButton | undefined;
}

/**
 * Arguments for a mouse move action.
 *
 * @public
 */
export interface MouseMoveArguments {
  /**
   * The target X coordinate on screen.
   *
   * @public
   */
  x: number | undefined;

  /**
   * The target Y coordinate on screen.
   *
   * @public
   */
  y: number | undefined;
}

/**
 * Arguments for a mouse scroll action.
 *
 * @public
 */
export interface MouseScrollArguments {
  /**
   * The X coordinate on screen where the scroll occurs.
   *
   * @public
   */
  x: number | undefined;

  /**
   * The Y coordinate on screen where the scroll occurs.
   *
   * @public
   */
  y: number | undefined;

  /**
   * The horizontal scroll delta. Valid range: -1000 to 1000.
   *
   * @public
   */
  deltaX?: number | undefined;

  /**
   * The vertical scroll delta. Valid range: -1000 to 1000. Negative values scroll down.
   *
   * @public
   */
  deltaY?: number | undefined;
}

/**
 * Arguments for a screenshot action.
 *
 * @public
 */
export interface ScreenshotArguments {
  /**
   * The image format for the screenshot. Defaults to `PNG`.
   *
   * @public
   */
  format?: ScreenshotFormat | undefined;
}

/**
 * The browser action to perform. Exactly one member must be set per request.
 *
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
   * Click at the specified coordinates.
   *
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
   * Move the cursor to the specified coordinates.
   *
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
   * Drag from a start position to an end position.
   *
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
   * Scroll at the specified position.
   *
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
   * Type a string of text.
   *
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
   * Press a key one or more times.
   *
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
   * Press a key combination.
   *
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
   * Capture a full-screen screenshot.
   *
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
 * Request for the InvokeBrowser operation.
 *
 * @public
 */
export interface InvokeBrowserRequest {
  /**
   * The unique identifier of the browser associated with the session. This must match the identifier used when creating the session with `StartBrowserSession`.
   *
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * The unique identifier of the browser session on which to perform the action. This must be an active session created with `StartBrowserSession`.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The browser action to perform. Exactly one member of the `BrowserAction` union must be set per request.
   *
   * @public
   */
  action: BrowserAction | undefined;
}

/**
 * The result of a key press action.
 *
 * @public
 */
export interface KeyPressResult {
  /**
   * The status of the action execution.
   *
   * @public
   */
  status: BrowserActionStatus | undefined;

  /**
   * The error message. Present only when the action failed.
   *
   * @public
   */
  error?: string | undefined;
}

/**
 * The result of a key shortcut action.
 *
 * @public
 */
export interface KeyShortcutResult {
  /**
   * The status of the action execution.
   *
   * @public
   */
  status: BrowserActionStatus | undefined;

  /**
   * The error message. Present only when the action failed.
   *
   * @public
   */
  error?: string | undefined;
}

/**
 * The result of a key type action.
 *
 * @public
 */
export interface KeyTypeResult {
  /**
   * The status of the action execution.
   *
   * @public
   */
  status: BrowserActionStatus | undefined;

  /**
   * The error message. Present only when the action failed.
   *
   * @public
   */
  error?: string | undefined;
}

/**
 * The result of a mouse click action.
 *
 * @public
 */
export interface MouseClickResult {
  /**
   * The status of the action execution.
   *
   * @public
   */
  status: BrowserActionStatus | undefined;

  /**
   * The error message. Present only when the action failed.
   *
   * @public
   */
  error?: string | undefined;
}

/**
 * The result of a mouse drag action.
 *
 * @public
 */
export interface MouseDragResult {
  /**
   * The status of the action execution.
   *
   * @public
   */
  status: BrowserActionStatus | undefined;

  /**
   * The error message. Present only when the action failed.
   *
   * @public
   */
  error?: string | undefined;
}

/**
 * The result of a mouse move action.
 *
 * @public
 */
export interface MouseMoveResult {
  /**
   * The status of the action execution.
   *
   * @public
   */
  status: BrowserActionStatus | undefined;

  /**
   * The error message. Present only when the action failed.
   *
   * @public
   */
  error?: string | undefined;
}

/**
 * The result of a mouse scroll action.
 *
 * @public
 */
export interface MouseScrollResult {
  /**
   * The status of the action execution.
   *
   * @public
   */
  status: BrowserActionStatus | undefined;

  /**
   * The error message. Present only when the action failed.
   *
   * @public
   */
  error?: string | undefined;
}

/**
 * The result of a screenshot action.
 *
 * @public
 */
export interface ScreenshotResult {
  /**
   * The status of the action execution.
   *
   * @public
   */
  status: BrowserActionStatus | undefined;

  /**
   * The error message. Present only when the action failed.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * The base64-encoded image data. Present only when the action succeeded.
   *
   * @public
   */
  data?: Uint8Array | undefined;
}

/**
 * The result of a browser action execution. Exactly one member is set, matching the action that was performed.
 *
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
   * The result of a mouse click action.
   *
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
   * The result of a mouse move action.
   *
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
   * The result of a mouse drag action.
   *
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
   * The result of a mouse scroll action.
   *
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
   * The result of a key type action.
   *
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
   * The result of a key press action.
   *
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
   * The result of a key shortcut action.
   *
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
   * The result of a screenshot action.
   *
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
 * Response for the InvokeBrowser operation.
 *
 * @public
 */
export interface InvokeBrowserResponse {
  /**
   * The result of the browser action. The member set in the result corresponds to the action that was performed.
   *
   * @public
   */
  result: BrowserActionResult | undefined;

  /**
   * The unique identifier of the browser session on which the action was performed.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface ListBrowserSessionsRequest {
  /**
   * The unique identifier of the browser to list sessions for. If specified, only sessions for this browser are returned. If not specified, sessions for all browsers are returned.
   *
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * The maximum number of results to return in a single call. The default value is 10. Valid values range from 1 to 100. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. If not specified, Amazon Bedrock AgentCore returns the first page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The status of the browser sessions to list. Valid values include ACTIVE, STOPPING, and STOPPED. If not specified, sessions with any status are returned.
   *
   * @public
   */
  status?: BrowserSessionStatus | undefined;
}

/**
 * A condensed representation of a browser session in Amazon Bedrock AgentCore. This structure contains key information about a browser session, including identifiers, status, and timestamps, without the full details of the session configuration and streams.
 *
 * @public
 */
export interface BrowserSessionSummary {
  /**
   * The unique identifier of the browser associated with the session. This identifier specifies which browser environment is used for the session.
   *
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * The unique identifier of the browser session. This identifier is used in operations that interact with the session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The name of the browser session. This name helps identify and manage the session.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the browser session. Possible values include ACTIVE, STOPPING, and STOPPED.
   *
   * @public
   */
  status: BrowserSessionStatus | undefined;

  /**
   * The timestamp when the browser session was created. This value is in ISO 8601 format.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the browser session was last updated. This value is in ISO 8601 format.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListBrowserSessionsResponse {
  /**
   * The list of browser sessions that match the specified criteria.
   *
   * @public
   */
  items: BrowserSessionSummary[] | undefined;

  /**
   * The token to use in a subsequent `ListBrowserSessions` request to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartBrowserSessionRequest {
  /**
   * The trace identifier for request tracking.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * The parent trace information for distributed tracing.
   *
   * @public
   */
  traceParent?: string | undefined;

  /**
   * The unique identifier of the browser to use for this session. This identifier specifies which browser environment to initialize for the session.
   *
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * The name of the browser session. This name helps you identify and manage the session. The name does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The duration in seconds (time-to-live) after which the session automatically terminates, regardless of ongoing activity. Defaults to 3600 seconds (1 hour). Recommended minimum: 60 seconds. Maximum allowed: 28,800 seconds (8 hours).
   *
   * @public
   */
  sessionTimeoutSeconds?: number | undefined;

  /**
   * The dimensions of the browser viewport for this session. This determines the visible area of the web content and affects how web pages are rendered. If not specified, Amazon Bedrock AgentCore uses a default viewport size.
   *
   * @public
   */
  viewPort?: ViewPort | undefined;

  /**
   * A list of browser extensions to load into the browser session.
   *
   * @public
   */
  extensions?: BrowserExtension[] | undefined;

  /**
   * The browser profile configuration to use for this session. A browser profile contains persistent data such as cookies and local storage that can be reused across multiple browser sessions. If specified, the session initializes with the profile's stored data, enabling continuity for tasks that require authentication or personalized settings.
   *
   * @public
   */
  profileConfiguration?: BrowserProfileConfiguration | undefined;

  /**
   * Optional proxy configuration for routing browser traffic through customer-specified proxy servers. When provided, enables HTTP Basic authentication via Amazon Web Services Secrets Manager and domain-based routing rules. Requires `secretsmanager:GetSecretValue` IAM permission for the specified secret ARNs.
   *
   * @public
   */
  proxyConfiguration?: ProxyConfiguration | undefined;

  /**
   * A list of files containing enterprise policies for the browser.
   *
   * @public
   */
  enterprisePolicies?: BrowserEnterprisePolicy[] | undefined;

  /**
   * A list of certificates to install in the browser session.
   *
   * @public
   */
  certificates?: Certificate[] | undefined;

  /**
   * The file system configurations to mount into the browser session. Use these configurations to mount your own Amazon Simple Storage Service (Amazon S3) Files or Amazon Elastic File System (Amazon EFS) access points. Your session can then read and write your data. If you don't specify this field, no additional file systems are mounted.
   *
   * @public
   */
  filesystemConfigurations?: ToolsFileSystemConfiguration[] | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock AgentCore ignores the request, but does not return an error. This parameter helps prevent the creation of duplicate sessions if there are temporary network issues.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartBrowserSessionResponse {
  /**
   * The identifier of the browser.
   *
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * The unique identifier of the created browser session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The timestamp when the browser session was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The streams associated with this browser session. These include the automation stream and live view stream.
   *
   * @public
   */
  streams?: BrowserSessionStream | undefined;
}

/**
 * @public
 */
export interface StopBrowserSessionRequest {
  /**
   * The trace identifier for request tracking.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * The parent trace information for distributed tracing.
   *
   * @public
   */
  traceParent?: string | undefined;

  /**
   * The unique identifier of the browser associated with the session.
   *
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * The unique identifier of the browser session to stop.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock AgentCore ignores the request, but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StopBrowserSessionResponse {
  /**
   * The identifier of the browser.
   *
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * The identifier of the browser session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The time at which the browser session was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * Contains information about an update to an automation stream.
 *
 * @public
 */
export interface AutomationStreamUpdate {
  /**
   * The status of the automation stream.
   *
   * @public
   */
  streamStatus?: AutomationStreamStatus | undefined;
}

/**
 * Contains information about an update to a stream.
 *
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
   * The update to an automation stream.
   *
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
   * The identifier of the browser.
   *
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * The identifier of the browser session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The update to apply to the browser stream.
   *
   * @public
   */
  streamUpdate: StreamUpdate | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request, but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateBrowserStreamResponse {
  /**
   * The identifier of the browser.
   *
   * @public
   */
  browserIdentifier: string | undefined;

  /**
   * The identifier of the browser session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The collection of streams associated with a browser session in Amazon Bedrock AgentCore. These streams provide different ways to interact with and observe the browser session, including programmatic control and visual representation of the browser content.
   *
   * @public
   */
  streams: BrowserSessionStream | undefined;

  /**
   * The time at which the browser stream was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteCapacityProviderSessionRequest {
  /**
   * The unique identifier of the capacity provider associated with the session.
   *
   * @public
   */
  capacityProviderId: string | undefined;

  /**
   * The unique identifier of the capacity provider session to delete.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCapacityProviderSessionResponse {
  /**
   * The Amazon Resource Name (ARN) of the capacity provider associated with the deleted session.
   *
   * @public
   */
  capacityProviderArn: string | undefined;

  /**
   * The unique identifier of the deleted capacity provider session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The current status of the capacity provider session. When the status is `Deleting`, the session is being deleted and is not available. When the status is `Deleted`, the session is no longer available.
   *
   * @public
   */
  status: CapacityProviderSessionStatus | undefined;
}

/**
 * @public
 */
export interface GetCodeInterpreterSessionRequest {
  /**
   * The unique identifier of the code interpreter associated with the session.
   *
   * @public
   */
  codeInterpreterIdentifier: string | undefined;

  /**
   * The unique identifier of the code interpreter session to retrieve.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface GetCodeInterpreterSessionResponse {
  /**
   * The identifier of the code interpreter.
   *
   * @public
   */
  codeInterpreterIdentifier: string | undefined;

  /**
   * The identifier of the code interpreter session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The name of the code interpreter session.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The time at which the code interpreter session was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timeout period for the code interpreter session in seconds.
   *
   * @public
   */
  sessionTimeoutSeconds?: number | undefined;

  /**
   * The current status of the code interpreter session. Possible values include ACTIVE, STOPPING, and STOPPED.
   *
   * @public
   */
  status?: CodeInterpreterSessionStatus | undefined;

  /**
   * The list of certificates installed in the code interpreter session.
   *
   * @public
   */
  certificates?: Certificate[] | undefined;

  /**
   * The file system configurations for the code interpreter session. Each entry describes an access point and its mount path.
   *
   * @public
   */
  filesystemConfigurations?: ToolsFileSystemConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListCodeInterpreterSessionsRequest {
  /**
   * The unique identifier of the code interpreter to list sessions for. If specified, only sessions for this code interpreter are returned. If not specified, sessions for all code interpreters are returned.
   *
   * @public
   */
  codeInterpreterIdentifier: string | undefined;

  /**
   * The maximum number of results to return in a single call. The default value is 10. Valid values range from 1 to 100. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. If not specified, Amazon Bedrock AgentCore returns the first page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The status of the code interpreter sessions to list. Valid values include ACTIVE, STOPPING, and STOPPED. If not specified, sessions with any status are returned.
   *
   * @public
   */
  status?: CodeInterpreterSessionStatus | undefined;
}

/**
 * A condensed representation of a code interpreter session in Amazon Bedrock AgentCore. This structure contains key information about a code interpreter session, including identifiers, status, and timestamps, without the full details of the session configuration.
 *
 * @public
 */
export interface CodeInterpreterSessionSummary {
  /**
   * The unique identifier of the code interpreter associated with the session. This identifier specifies which code interpreter environment is used for the session.
   *
   * @public
   */
  codeInterpreterIdentifier: string | undefined;

  /**
   * The unique identifier of the code interpreter session. This identifier is used in operations that interact with the session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The name of the code interpreter session. This name helps identify and manage the session.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the code interpreter session. Possible values include ACTIVE, STOPPING, and STOPPED.
   *
   * @public
   */
  status: CodeInterpreterSessionStatus | undefined;

  /**
   * The timestamp when the code interpreter session was created. This value is in ISO 8601 format.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the code interpreter session was last updated. This value is in ISO 8601 format.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListCodeInterpreterSessionsResponse {
  /**
   * The list of code interpreter sessions that match the specified criteria.
   *
   * @public
   */
  items: CodeInterpreterSessionSummary[] | undefined;

  /**
   * The token to use in a subsequent `ListCodeInterpreterSessions` request to get the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartCodeInterpreterSessionRequest {
  /**
   * The trace identifier for request tracking.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * The parent trace information for distributed tracing.
   *
   * @public
   */
  traceParent?: string | undefined;

  /**
   * The unique identifier of the code interpreter to use for this session. This identifier specifies which code interpreter environment to initialize for the session.
   *
   * @public
   */
  codeInterpreterIdentifier: string | undefined;

  /**
   * The name of the code interpreter session. This name helps you identify and manage the session. The name does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The duration in seconds (time-to-live) after which the session automatically terminates, regardless of ongoing activity. Defaults to 900 seconds (15 minutes). Recommended minimum: 60 seconds. Maximum allowed: 28,800 seconds (8 hours).
   *
   * @public
   */
  sessionTimeoutSeconds?: number | undefined;

  /**
   * A list of certificates to install in the code interpreter session.
   *
   * @public
   */
  certificates?: Certificate[] | undefined;

  /**
   * The file system configurations to mount into the code interpreter session. Use these configurations to mount your own Amazon Simple Storage Service (Amazon S3) Files or Amazon Elastic File System (Amazon EFS) access points. Your session can then read and write your data. If you don't specify this field, no additional file systems are mounted.
   *
   * @public
   */
  filesystemConfigurations?: ToolsFileSystemConfiguration[] | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock AgentCore ignores the request, but does not return an error. This parameter helps prevent the creation of duplicate sessions if there are temporary network issues.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartCodeInterpreterSessionResponse {
  /**
   * The identifier of the code interpreter.
   *
   * @public
   */
  codeInterpreterIdentifier: string | undefined;

  /**
   * The unique identifier of the created code interpreter session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The time at which the code interpreter session was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface StopCodeInterpreterSessionRequest {
  /**
   * The trace identifier for request tracking.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * The parent trace information for distributed tracing.
   *
   * @public
   */
  traceParent?: string | undefined;

  /**
   * The unique identifier of the code interpreter associated with the session.
   *
   * @public
   */
  codeInterpreterIdentifier: string | undefined;

  /**
   * The unique identifier of the code interpreter session to stop.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, Amazon Bedrock AgentCore ignores the request, but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StopCodeInterpreterSessionResponse {
  /**
   * The identifier of the code interpreter.
   *
   * @public
   */
  codeInterpreterIdentifier: string | undefined;

  /**
   * The identifier of the code interpreter session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The timestamp when the code interpreter session was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * The OAuth2.0 token or user ID that was used to generate the workload access token used for initiating the user authorization flow to retrieve OAuth2.0 tokens.
 *
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
   * The OAuth2.0 token issued by the user’s identity provider that was used to generate the workload access token
   *
   * @public
   */
  export interface UserTokenMember {
    userToken: string;
    userId?: never;
    $unknown?: never;
  }

  /**
   * The ID of the user for whom you have retrieved a workload access token for
   *
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
   * The OAuth2.0 token or user ID that was used to generate the workload access token used for initiating the user authorization flow to retrieve OAuth2.0 tokens.
   *
   * @public
   */
  userIdentifier: UserIdentifier | undefined;

  /**
   * Unique identifier for the user's authentication session for retrieving OAuth2 tokens. This ID tracks the authorization flow state across multiple requests and responses during the OAuth2 authentication process.
   *
   * @public
   */
  sessionUri: string | undefined;
}

/**
 * @public
 */
export interface CompleteResourceTokenAuthResponse {}

/**
 * A filter to restrict which gateway target paths are included in the A/B test.
 *
 * @public
 */
export interface GatewayFilter {
  /**
   * A list of target path patterns to include in the A/B test.
   *
   * @public
   */
  targetPaths?: string[] | undefined;
}

/**
 * A reference to a specific version of a configuration bundle.
 *
 * @public
 */
export interface ConfigurationBundleRef {
  /**
   * The Amazon Resource Name (ARN) of the configuration bundle.
   *
   * @public
   */
  bundleArn: string | undefined;

  /**
   * The version of the configuration bundle.
   *
   * @public
   */
  bundleVersion: string | undefined;
}

/**
 * A reference to a gateway target.
 *
 * @public
 */
export interface TargetRef {
  /**
   * The name of the gateway target.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * The configuration for an A/B test variant.
 *
 * @public
 */
export interface VariantConfiguration {
  /**
   * A reference to a configuration bundle version to use for this variant.
   *
   * @public
   */
  configurationBundle?: ConfigurationBundleRef | undefined;

  /**
   * A reference to a gateway target to route traffic to for this variant.
   *
   * @public
   */
  target?: TargetRef | undefined;
}

/**
 * A variant in an A/B test, representing either the control (C) or treatment (T1) configuration.
 *
 * @public
 */
export interface Variant {
  /**
   * The name of the variant. Must be `C` for control or `T1` for treatment.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The percentage of traffic to route to this variant. Weights across all variants must sum to 100.
   *
   * @public
   */
  weight: number | undefined;

  /**
   * The configuration for this variant, including the configuration bundle or target reference.
   *
   * @public
   */
  variantConfiguration: VariantConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateABTestRequest {
  /**
   * The name of the A/B test. Must be unique within your account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the A/B test.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway to use for traffic splitting.
   *
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * The list of variants for the A/B test. Must contain exactly two variants: a control (C) and a treatment (T1), each with a configuration bundle or target reference and a traffic weight.
   *
   * @public
   */
  variants: Variant[] | undefined;

  /**
   * Optional filter to restrict which gateway target paths are included in the A/B test.
   *
   * @public
   */
  gatewayFilter?: GatewayFilter | undefined;

  /**
   * The evaluation configuration specifying which online evaluation configurations to use for measuring variant performance.
   *
   * @public
   */
  evaluationConfig: ABTestEvaluationConfig | undefined;

  /**
   * The IAM role ARN that grants permissions for the A/B test to access gateway and evaluation resources.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * Whether to enable the A/B test immediately upon creation. If true, traffic splitting begins automatically.
   *
   * @public
   */
  enableOnCreate?: boolean | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, the service ignores the request, but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A map of tag keys and values to associate with the A/B test.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateABTestResponse {
  /**
   * The unique identifier of the created A/B test.
   *
   * @public
   */
  abTestId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created A/B test.
   *
   * @public
   */
  abTestArn: string | undefined;

  /**
   * The name of the A/B test.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The status of the A/B test.
   *
   * @public
   */
  status: ABTestStatus | undefined;

  /**
   * The execution status indicating whether the A/B test is currently running.
   *
   * @public
   */
  executionStatus: ABTestExecutionStatus | undefined;

  /**
   * The timestamp when the A/B test was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteABTestRequest {
  /**
   * The unique identifier of the A/B test to delete.
   *
   * @public
   */
  abTestId: string | undefined;
}

/**
 * @public
 */
export interface DeleteABTestResponse {
  /**
   * The unique identifier of the deleted A/B test.
   *
   * @public
   */
  abTestId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deleted A/B test.
   *
   * @public
   */
  abTestArn: string | undefined;

  /**
   * The status of the A/B test deletion operation.
   *
   * @public
   */
  status: ABTestStatus | undefined;
}

/**
 * @public
 */
export interface DeleteBatchEvaluationRequest {
  /**
   * The unique identifier of the batch evaluation to delete.
   *
   * @public
   */
  batchEvaluationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBatchEvaluationResponse {
  /**
   * The unique identifier of the deleted batch evaluation.
   *
   * @public
   */
  batchEvaluationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deleted batch evaluation.
   *
   * @public
   */
  batchEvaluationArn: string | undefined;

  /**
   * The status of the batch evaluation deletion operation.
   *
   * @public
   */
  status: BatchEvaluationStatus | undefined;
}

/**
 * @public
 */
export interface DeleteRecommendationRequest {
  /**
   * The unique identifier of the recommendation to delete.
   *
   * @public
   */
  recommendationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecommendationResponse {
  /**
   * The unique identifier of the deleted recommendation.
   *
   * @public
   */
  recommendationId: string | undefined;

  /**
   * The status of the recommendation deletion operation.
   *
   * @public
   */
  status: RecommendationStatus | undefined;
}

/**
 * The input data structure containing agent session spans in OpenTelemetry format. Supports traces from frameworks like Strands (AgentCore Runtime) and LangGraph with OpenInference instrumentation for comprehensive evaluation.
 *
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
   * The collection of spans representing agent execution traces within a session. Each span contains detailed information about tool calls, model interactions, and other agent activities that can be evaluated for quality and performance.
   *
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
 * A content block for ground truth data in evaluation reference inputs. Supports text content for expected responses and assertions.
 *
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
   * The text content of the ground truth data. Used for expected response text and assertion statements.
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
 * The contextual information that uniquely identifies a span within the distributed tracing system. Contains session, trace, and span identifiers used to correlate evaluation results with specific agent execution points.
 *
 * @public
 */
export interface SpanContext {
  /**
   * The unique identifier of the session containing this span. Sessions represent complete conversation flows and are detected using configurable `SessionTimeoutMinutes` (default 15 minutes).
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The unique identifier of the trace containing this span. Traces represent individual request-response interactions within a session and group related spans together.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * The unique identifier of the specific span being referenced. Spans represent individual operations like tool calls, model invocations, or other discrete actions within the agent's execution.
   *
   * @public
   */
  spanId?: string | undefined;
}

/**
 * The contextual information associated with an evaluation, including span context details that identify the specific traces and sessions being evaluated within the agent's execution flow.
 *
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
   * The span context information that uniquely identifies the trace and span being evaluated, including session ID, trace ID, and span ID for precise targeting within the agent's execution flow.
   *
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
 * The expected tool call trajectory for trajectory-based evaluation.
 *
 * @public
 */
export interface EvaluationExpectedTrajectory {
  /**
   * The list of tool names representing the expected tool call sequence.
   *
   * @public
   */
  toolNames?: string[] | undefined;
}

/**
 * A reference input containing ground truth data for evaluation, scoped to a specific context level (session or trace) through its span context.
 *
 * @public
 */
export interface EvaluationReferenceInput {
  /**
   * The span context that identifies which session or trace this reference input applies to, used for correlating ground truth with agent output.
   *
   * @public
   */
  context: Context | undefined;

  /**
   * The expected response for trace-level evaluation. Built-in evaluators that support this field compare the agent's actual response against this value for assessment. Custom evaluators can access it through the `\{expected_response\}` placeholder in their instructions.
   *
   * @public
   */
  expectedResponse?: EvaluationContent | undefined;

  /**
   * A list of assertion statements for session-level evaluation. Each assertion describes an expected behavior or outcome the agent should demonstrate during the session.
   *
   * @public
   */
  assertions?: EvaluationContent[] | undefined;

  /**
   * The expected tool call sequence for session-level trajectory evaluation. Contains a list of tool names representing the tools the agent is expected to invoke.
   *
   * @public
   */
  expectedTrajectory?: EvaluationExpectedTrajectory | undefined;
}

/**
 * The specification of which trace or span IDs to evaluate within the provided input data. Allows precise targeting of evaluation at different levels: tool calls, traces, or sessions.
 *
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
   * The list of specific span IDs to evaluate within the provided traces. Used to target evaluation at individual tool calls or specific operations within the agent's execution flow.
   *
   * @public
   */
  export interface SpanIdsMember {
    spanIds: string[];
    traceIds?: never;
    $unknown?: never;
  }

  /**
   * The list of trace IDs to evaluate, representing complete request-response interactions. Used to evaluate entire conversation turns or specific agent interactions within a session.
   *
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
   * The unique identifier of the evaluator to use for scoring. Can be a built-in evaluator (e.g., `Builtin.Helpfulness`, `Builtin.Correctness`) or a custom evaluator Id created through the control plane API.
   *
   * @public
   */
  evaluatorId: string | undefined;

  /**
   * The input data containing agent session spans to be evaluated. Includes a list of spans in OpenTelemetry format from supported frameworks like Strands (AgentCore Runtime) or LangGraph with OpenInference instrumentation.
   *
   * @public
   */
  evaluationInput: EvaluationInput | undefined;

  /**
   * The specific trace or span IDs to evaluate within the provided input. Allows targeting evaluation at different levels: individual tool calls, single request-response interactions (traces), or entire conversation sessions.
   *
   * @public
   */
  evaluationTarget?: EvaluationTarget | undefined;

  /**
   * Ground truth data to compare against agent responses during evaluation. Allows to provide expected responses, assertions, and expected tool trajectories at different evaluation levels. Session-level reference inputs apply to the entire conversation, while trace-level reference inputs target specific request-response interactions identified by trace ID.
   *
   * @public
   */
  evaluationReferenceInputs?: EvaluationReferenceInput[] | undefined;
}

/**
 * The token consumption statistics for language model operations during evaluation. Provides detailed breakdown of input, output, and total tokens used for cost tracking and performance monitoring.
 *
 * @public
 */
export interface TokenUsage {
  /**
   * The number of tokens consumed for input processing during the evaluation. Includes tokens from the evaluation prompt, agent traces, and any additional context provided to the evaluator model.
   *
   * @public
   */
  inputTokens?: number | undefined;

  /**
   * The number of tokens generated by the evaluator model in its response. Includes tokens for the score, explanation, and any additional output produced during the evaluation process.
   *
   * @public
   */
  outputTokens?: number | undefined;

  /**
   * The total number of tokens consumed during the evaluation, calculated as the sum of input and output tokens. Used for cost calculation and rate limiting within the service limits.
   *
   * @public
   */
  totalTokens?: number | undefined;
}

/**
 * The comprehensive result of an evaluation containing the score, explanation, evaluator metadata, and execution details. Provides both quantitative ratings and qualitative insights about agent performance.
 *
 * @public
 */
export interface EvaluationResultContent {
  /**
   * The Amazon Resource Name (ARN) of the evaluator used to generate this result. For custom evaluators, this is the full ARN; for built-in evaluators, this follows the pattern `Builtin.\{EvaluatorName\}`.
   *
   * @public
   */
  evaluatorArn: string | undefined;

  /**
   * The unique identifier of the evaluator that produced this result. This matches the `evaluatorId` provided in the evaluation request and can be used to identify which evaluator generated specific results.
   *
   * @public
   */
  evaluatorId: string | undefined;

  /**
   * The human-readable name of the evaluator used for this evaluation. For built-in evaluators, this is the descriptive name (e.g., "Helpfulness", "Correctness"); for custom evaluators, this is the user-defined name.
   *
   * @public
   */
  evaluatorName: string | undefined;

  /**
   * The name of the dimension that this result scores. This field is set only on results produced by an evaluator that uses a multi-dimensional rating scale, where each dimension is scored independently. For evaluators with a single rating scale, this field is absent.
   *
   * @public
   */
  evaluationDimensionName?: string | undefined;

  /**
   * The detailed explanation provided by the evaluator describing the reasoning behind the assigned score. This qualitative feedback helps understand why specific ratings were given and provides actionable insights for improvement.
   *
   * @public
   */
  explanation?: string | undefined;

  /**
   * The contextual information associated with this evaluation result, including span context details that identify the specific traces and sessions that were evaluated.
   *
   * @public
   */
  context: Context | undefined;

  /**
   * The numerical score assigned by the evaluator according to its configured rating scale. For numerical scales, this is a decimal value within the defined range. This field is not allowed for categorical scales.
   *
   * @public
   */
  value?: number | undefined;

  /**
   * The categorical label assigned by the evaluator when using a categorical rating scale. This provides a human-readable description of the evaluation result (e.g., "Excellent", "Good", "Poor") corresponding to the numerical value. For numerical scales, this field is optional and provides a natural language explanation of what the value means (e.g., value 0.5 = "Somewhat Helpful").
   *
   * @public
   */
  label?: string | undefined;

  /**
   * The token consumption statistics for this evaluation, including input tokens, output tokens, and total tokens used by the underlying language model during the evaluation process.
   *
   * @public
   */
  tokenUsage?: TokenUsage | undefined;

  /**
   * The error message describing what went wrong if the evaluation failed. Provides detailed information about evaluation failures to help diagnose and resolve issues with evaluator configuration or input data.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The error code indicating the type of failure that occurred during evaluation. Used to programmatically identify and handle different categories of evaluation errors.
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * The list of reference input field names that were provided but not used by the evaluator. Helps identify which ground truth data was not consumed during evaluation.
   *
   * @public
   */
  ignoredReferenceInputFields?: string[] | undefined;
}

/**
 * @public
 */
export interface EvaluateResponse {
  /**
   * The detailed evaluation results containing scores, explanations, and metadata. Includes the evaluator information, numerical or categorical ratings based on the evaluator's rating scale, and token usage statistics for the evaluation process.
   *
   * @public
   */
  evaluationResults: EvaluationResultContent[] | undefined;
}

/**
 * @public
 */
export interface GetABTestRequest {
  /**
   * The unique identifier of the A/B test to retrieve.
   *
   * @public
   */
  abTestId: string | undefined;
}

/**
 * @public
 */
export interface GetABTestResponse {
  /**
   * The unique identifier of the A/B test.
   *
   * @public
   */
  abTestId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the A/B test.
   *
   * @public
   */
  abTestArn: string | undefined;

  /**
   * The name of the A/B test.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the A/B test.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The current status of the A/B test.
   *
   * @public
   */
  status: ABTestStatus | undefined;

  /**
   * The execution status indicating whether the A/B test is currently running.
   *
   * @public
   */
  executionStatus: ABTestExecutionStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway used for traffic splitting.
   *
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * The list of variants in the A/B test.
   *
   * @public
   */
  variants: Variant[] | undefined;

  /**
   * The gateway filter restricting which target paths are included.
   *
   * @public
   */
  gatewayFilter?: GatewayFilter | undefined;

  /**
   * The evaluation configuration for measuring variant performance.
   *
   * @public
   */
  evaluationConfig: ABTestEvaluationConfig | undefined;

  /**
   * The IAM role ARN used by the A/B test.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The identifier of the current run of the A/B test.
   *
   * @public
   */
  currentRunId?: string | undefined;

  /**
   * The error details if the A/B test encountered failures.
   *
   * @public
   */
  errorDetails?: string[] | undefined;

  /**
   * The timestamp when the A/B test was started.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The timestamp when the A/B test was stopped.
   *
   * @public
   */
  stoppedAt?: Date | undefined;

  /**
   * The timestamp when the A/B test will automatically expire.
   *
   * @public
   */
  maxDurationExpiresAt?: Date | undefined;

  /**
   * The timestamp when the A/B test was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the A/B test was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The statistical results of the A/B test, including per-evaluator metrics and significance analysis.
   *
   * @public
   */
  results?: ABTestResults | undefined;
}

/**
 * @public
 */
export interface GetBatchEvaluationRequest {
  /**
   * The unique identifier of the batch evaluation to retrieve.
   *
   * @public
   */
  batchEvaluationId: string | undefined;
}

/**
 * A pairing of a session with the specific trace IDs to evaluate within that session. Use this to evaluate individual traces rather than an entire session.
 *
 * @public
 */
export interface SessionTraceIds {
  /**
   * The unique identifier of the session that contains the traces to evaluate.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The list of trace IDs within the session to evaluate.
   *
   * @public
   */
  traceIds: string[] | undefined;
}

/**
 * A time range filter for selecting sessions. Specifies the start and end times to narrow down which sessions are included.
 *
 * @public
 */
export interface SessionFilterConfig {
  /**
   * The start time of the time range. Only sessions with activity at or after this timestamp are included.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time of the time range. Only sessions with activity before this timestamp are included.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * Filter configuration for narrowing down CloudWatch Logs sessions for evaluation.
 *
 * @public
 */
export interface CloudWatchFilterConfig {
  /**
   * A list of specific session IDs to evaluate. If specified, only these sessions are included in the evaluation.
   *
   * @public
   */
  sessionIds?: string[] | undefined;

  /**
   * The time range filter for selecting sessions to evaluate.
   *
   * @public
   */
  timeRange?: SessionFilterConfig | undefined;

  /**
   * A list of session and trace ID pairs that restrict evaluation to specific traces within a session. If specified, only the listed traces are evaluated instead of the entire session.
   *
   * @public
   */
  sessionTraceIds?: SessionTraceIds[] | undefined;
}

/**
 * The configuration for reading agent traces from CloudWatch Logs.
 *
 * @public
 */
export interface CloudWatchLogsSource {
  /**
   * The list of agent service names to filter traces within the specified log groups.
   *
   * @public
   */
  serviceNames: string[] | undefined;

  /**
   * The list of CloudWatch log group names to read agent traces from. Maximum of 10 log groups.
   *
   * @public
   */
  logGroupNames?: string[] | undefined;

  /**
   * The list of CloudWatch log group name prefixes to read agent traces from. Specify this instead of `logGroupNames` to match log groups by prefix. Maximum of 5 prefixes. Specify either `logGroupNames` or `logGroupNamePrefixes`, not both. One of the two is required.
   *
   * @public
   */
  logGroupNamePrefixes?: string[] | undefined;

  /**
   * Optional filter configuration to narrow down which sessions to evaluate.
   *
   * @public
   */
  filterConfig?: CloudWatchFilterConfig | undefined;
}

/**
 * A reference to an existing online evaluation configuration to use as the data source for batch evaluation.
 *
 * @public
 */
export interface OnlineEvaluationConfigSource {
  /**
   * The Amazon Resource Name (ARN) of the online evaluation configuration to use as the session source.
   *
   * @public
   */
  onlineEvaluationConfigArn: string | undefined;

  /**
   * Optional session filter configuration to narrow down which sessions from the online evaluation configuration to include.
   *
   * @public
   */
  timeRange?: SessionFilterConfig | undefined;
}

/**
 * Configuration for the data source used in evaluation.
 *
 * @public
 */
export type DataSourceConfig =
  | DataSourceConfig.CloudWatchLogsMember
  | DataSourceConfig.OnlineEvaluationConfigSourceMember
  | DataSourceConfig.$UnknownMember;

/**
 * @public
 */
export namespace DataSourceConfig {
  /**
   * Configuration for pulling agent session traces from CloudWatch Logs.
   *
   * @public
   */
  export interface CloudWatchLogsMember {
    cloudWatchLogs: CloudWatchLogsSource;
    onlineEvaluationConfigSource?: never;
    $unknown?: never;
  }

  /**
   * Reference an existing OnlineEvaluationConfig as session source
   * @public
   */
  export interface OnlineEvaluationConfigSourceMember {
    cloudWatchLogs?: never;
    onlineEvaluationConfigSource: OnlineEvaluationConfigSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cloudWatchLogs?: never;
    onlineEvaluationConfigSource?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cloudWatchLogs: (value: CloudWatchLogsSource) => T;
    onlineEvaluationConfigSource: (value: OnlineEvaluationConfigSource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Aggregated statistics for an evaluator.
 *
 * @public
 */
export interface EvaluatorStatistics {
  /**
   * The average score across all evaluated sessions for this evaluator.
   *
   * @public
   */
  averageScore?: number | undefined;
}

/**
 * Summary statistics for a single evaluator within a batch evaluation.
 *
 * @public
 */
export interface EvaluatorSummary {
  /**
   * The unique identifier of the evaluator.
   *
   * @public
   */
  evaluatorId?: string | undefined;

  /**
   * The name of the dimension that this summary covers. This field is set only for evaluators that use a multi-dimensional rating scale, where each dimension is summarized separately. For single-scale evaluators, this field is not set.
   *
   * @public
   */
  evaluationDimensionName?: string | undefined;

  /**
   * The aggregated statistics for this evaluator.
   *
   * @public
   */
  statistics?: EvaluatorStatistics | undefined;

  /**
   * The total number of sessions evaluated by this evaluator.
   *
   * @public
   */
  totalEvaluated?: number | undefined;

  /**
   * The total number of sessions that failed evaluation by this evaluator.
   *
   * @public
   */
  totalFailed?: number | undefined;
}

/**
 * Aggregated results from a batch evaluation, including session completion counts and evaluator score summaries.
 *
 * @public
 */
export interface EvaluationJobResults {
  /**
   * The number of sessions that have been successfully evaluated.
   *
   * @public
   */
  numberOfSessionsCompleted?: number | undefined;

  /**
   * The number of sessions currently being evaluated.
   *
   * @public
   */
  numberOfSessionsInProgress?: number | undefined;

  /**
   * The number of sessions that failed evaluation.
   *
   * @public
   */
  numberOfSessionsFailed?: number | undefined;

  /**
   * The total number of sessions included in the batch evaluation.
   *
   * @public
   */
  totalNumberOfSessions?: number | undefined;

  /**
   * The number of sessions that were ignored during evaluation.
   *
   * @public
   */
  numberOfSessionsIgnored?: number | undefined;

  /**
   * A list of per-evaluator summary statistics.
   *
   * @public
   */
  evaluatorSummaries?: EvaluatorSummary[] | undefined;
}

/**
 * An evaluator to run against sessions during batch evaluation.
 *
 * @public
 */
export interface Evaluator {
  /**
   * The unique identifier of the evaluator. Can reference built-in evaluators (e.g., `Builtin.Helpfulness`) or custom evaluators.
   *
   * @public
   */
  evaluatorId: string | undefined;
}

/**
 * A session associated with an execution summary cluster.
 *
 * @public
 */
export interface ExecutionSummaryAffectedSession {
  /**
   * The unique identifier of the session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The approach taken by the agent during this session.
   *
   * @public
   */
  approachTaken: string | undefined;

  /**
   * The final outcome of the session.
   *
   * @public
   */
  finalOutcome: string | undefined;
}

/**
 * A cluster of similar execution patterns identified across sessions.
 *
 * @public
 */
export interface ExecutionSummaryCluster {
  /**
   * The unique identifier of the execution summary cluster.
   *
   * @public
   */
  clusterId: number | undefined;

  /**
   * The name of the execution pattern cluster.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the execution pattern.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The number of sessions with this execution pattern.
   *
   * @public
   */
  affectedSessionCount: number | undefined;

  /**
   * The list of sessions with this execution pattern.
   *
   * @public
   */
  affectedSessions: ExecutionSummaryAffectedSession[] | undefined;
}

/**
 * The execution summary clustering result containing grouped execution patterns identified across evaluated sessions.
 *
 * @public
 */
export interface ExecutionSummaryClusteringResultContent {
  /**
   * The list of execution summary clusters identified across analyzed sessions.
   *
   * @public
   */
  executionSummaries: ExecutionSummaryCluster[] | undefined;
}

/**
 * A cluster of similar root causes identified within a failure subcategory.
 *
 * @public
 */
export interface RootCauseCluster {
  /**
   * The unique identifier of the root cause cluster.
   *
   * @public
   */
  clusterId: number | undefined;

  /**
   * The name of the root cause cluster.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The root cause explanation for this cluster of failures.
   *
   * @public
   */
  rootCause: string | undefined;

  /**
   * The recommended fix for this root cause.
   *
   * @public
   */
  recommendation: string | undefined;

  /**
   * The number of sessions affected by this root cause.
   *
   * @public
   */
  affectedSessionCount: number | undefined;

  /**
   * The list of sessions affected by this root cause.
   *
   * @public
   */
  affectedSessions: AffectedSession[] | undefined;
}

/**
 * A subcategory of failures within a top-level failure category.
 *
 * @public
 */
export interface FailureSubCategoryCluster {
  /**
   * The unique identifier of the failure subcategory cluster.
   *
   * @public
   */
  clusterId: number | undefined;

  /**
   * The name of the failure subcategory.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the failure subcategory pattern.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The number of sessions affected by this failure subcategory.
   *
   * @public
   */
  affectedSessionCount: number | undefined;

  /**
   * The list of root cause clusters identified within this subcategory.
   *
   * @public
   */
  rootCauses: RootCauseCluster[] | undefined;
}

/**
 * A top-level failure category identified by clustering similar failure patterns across sessions.
 *
 * @public
 */
export interface FailureCategoryCluster {
  /**
   * The unique identifier of the failure category cluster.
   *
   * @public
   */
  clusterId: number | undefined;

  /**
   * The name of the failure category.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the failure category pattern.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The number of sessions affected by this failure category.
   *
   * @public
   */
  affectedSessionCount: number | undefined;

  /**
   * The list of failure subcategories within this category.
   *
   * @public
   */
  subCategories: FailureSubCategoryCluster[] | undefined;
}

/**
 * The failure analysis clustering result containing categorized failure clusters with root causes and remediation recommendations.
 *
 * @public
 */
export interface FailureAnalysisResultContent {
  /**
   * The list of failure category clusters identified across analyzed sessions.
   *
   * @public
   */
  failures: FailureCategoryCluster[] | undefined;
}

/**
 * A failure found in a session.
 *
 * @public
 */
export interface SessionFinding {
  /**
   * The identifier or name of the location in the session where the failure was found, interpreted according to `targetType`.
   *
   * @public
   */
  targetId?: string | undefined;

  /**
   * The type of location that `targetId` refers to.
   *
   * @public
   */
  targetType?: FindingTargetType | undefined;

  /**
   * A description of the failure.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The category of the failure.
   *
   * @public
   */
  category?: string | undefined;

  /**
   * The confidence that the finding is a failure, from 0 to 1.
   *
   * @public
   */
  confidence?: number | undefined;
}

/**
 * A session affected by an insight or root cause. Use the session ID to find the per-session evaluation results in CloudWatch Logs.
 *
 * @public
 */
export interface SampleSession {
  /**
   * The unique identifier of the session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The latest timestamp observed for the session in the batch evaluation input.
   *
   * @public
   */
  lastSeenAt?: Date | undefined;

  /**
   * The failures found in the session that belong to the insight or root cause, up to 10.
   *
   * @public
   */
  findings?: SessionFinding[] | undefined;
}

/**
 * A root cause that contributes to an insight.
 *
 * @public
 */
export interface InsightRootCause {
  /**
   * A generated label for the root cause.
   *
   * @public
   */
  name: string | undefined;

  /**
   * An explanation of how the root cause leads to the failures in the insight.
   *
   * @public
   */
  explanation: string | undefined;

  /**
   * The number of distinct sessions affected by the root cause. A session can be affected by more than one root cause of the same insight.
   *
   * @public
   */
  affectedSessionCount?: number | undefined;

  /**
   * A suggested change to the agent that addresses the root cause.
   *
   * @public
   */
  suggestedFix?: string | undefined;

  /**
   * A sample of up to 10 sessions affected by the root cause.
   *
   * @public
   */
  sampleSessions?: SampleSession[] | undefined;
}

/**
 * An insight that groups related failures found across the sessions in a batch evaluation.
 *
 * @public
 */
export interface InsightResult {
  /**
   * The type of insight. `FAILURE` indicates a group of related failures.
   *
   * @public
   */
  type: InsightType | undefined;

  /**
   * A generated label for the insight. The name is not an identifier and can differ between batch evaluations.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the failure pattern that the insight represents.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The timestamp when the insight was generated.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The number of distinct sessions affected by the insight.
   *
   * @public
   */
  affectedSessionCount?: number | undefined;

  /**
   * A sample of up to 10 sessions affected by the insight. Returned only when the insight has no root causes. Otherwise, sample sessions are returned for each root cause.
   *
   * @public
   */
  sampleSessions?: SampleSession[] | undefined;

  /**
   * The root causes identified for the insight.
   *
   * @public
   */
  rootCauses?: InsightRootCause[] | undefined;
}

/**
 * A reference to an insight analysis to run against sessions during batch evaluation. Insights provide deeper analysis beyond individual evaluator scores, including failure detection, user intent clustering, and execution summarization.
 *
 * @public
 */
export interface Insight {
  /**
   * The unique identifier of the insight to run.
   *
   * @public
   */
  insightId: string | undefined;
}

/**
 * CloudWatch Logs destination for batch evaluation results.
 *
 * @public
 */
export interface CloudWatchOutputConfig {
  /**
   * The name of the CloudWatch log group where evaluation results will be written. This value doesn't apply when `resultDestination` is `SOURCE_LOG_GROUP`, because results are written back to the trace source log group. The name can't be under the service-reserved `/aws/bedrock-agentcore/evaluations/` namespace, apart from the service-managed default group.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * The name of the CloudWatch log stream where evaluation results will be written.
   *
   * @public
   */
  logStreamName?: string | undefined;

  /**
   * The CloudWatch metrics namespace where evaluation result metrics are published. If you omit this value, the service publishes metrics to `Bedrock-AgentCore/Evaluations`. This value can't begin with `AWS/`.
   *
   * @public
   */
  metricsNamespace?: string | undefined;

  /**
   * The destination where evaluation results are written. Valid values:
   *
   * - `DEDICATED_LOG_GROUP` (default) – Writes results to a dedicated result log group.
   * - `SOURCE_LOG_GROUP` – Writes results back to the log group that the agent traces were read from. If you use this value, don't specify `logGroupName`.
   *
   * @public
   */
  resultDestination?: ResultDestination | undefined;
}

/**
 * Output destination configuration.
 *
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
   * The CloudWatch Logs configuration for writing evaluation results.
   *
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
 * A session associated with a user intent cluster.
 *
 * @public
 */
export interface UserIntentAffectedSession {
  /**
   * The unique identifier of the session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The user messages from this session that contributed to the intent cluster.
   *
   * @public
   */
  userMessages: string[] | undefined;
}

/**
 * A cluster of similar user intents identified across sessions.
 *
 * @public
 */
export interface UserIntentCluster {
  /**
   * The unique identifier of the user intent cluster.
   *
   * @public
   */
  clusterId: number | undefined;

  /**
   * The name of the user intent cluster.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the user intent pattern.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The number of sessions with this user intent.
   *
   * @public
   */
  affectedSessionCount: number | undefined;

  /**
   * The list of sessions with this user intent.
   *
   * @public
   */
  affectedSessions: UserIntentAffectedSession[] | undefined;
}

/**
 * The user intent clustering result containing grouped user intents identified across evaluated sessions.
 *
 * @public
 */
export interface UserIntentClusteringResultContent {
  /**
   * The list of user intent clusters identified across analyzed sessions.
   *
   * @public
   */
  userIntents: UserIntentCluster[] | undefined;
}

/**
 * @public
 */
export interface GetBatchEvaluationResponse {
  /**
   * The unique identifier of the batch evaluation.
   *
   * @public
   */
  batchEvaluationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the batch evaluation.
   *
   * @public
   */
  batchEvaluationArn: string | undefined;

  /**
   * The name of the batch evaluation.
   *
   * @public
   */
  batchEvaluationName: string | undefined;

  /**
   * The current status of the batch evaluation.
   *
   * @public
   */
  status: BatchEvaluationStatus | undefined;

  /**
   * The timestamp when the batch evaluation was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The list of evaluators applied during the batch evaluation.
   *
   * @public
   */
  evaluators?: Evaluator[] | undefined;

  /**
   * The list of insight analyses applied during the batch evaluation.
   *
   * @public
   */
  insights?: Insight[] | undefined;

  /**
   * The data source configuration specifying where agent traces are pulled from.
   *
   * @public
   */
  dataSourceConfig?: DataSourceConfig | undefined;

  /**
   * The output configuration specifying where evaluation results are written.
   *
   * @public
   */
  outputConfig?: OutputConfig | undefined;

  /**
   * The aggregated evaluation results, including session completion counts and evaluator score summaries.
   *
   * @public
   */
  evaluationResults?: EvaluationJobResults | undefined;

  /**
   * The insights generated when the batch evaluation includes the `Builtin.FailureAnalysis` evaluator. Each insight groups related failures found across the evaluated sessions. An empty list means that no failures were found. If the analysis fails, this field is omitted and `errorDetails` describes the error.
   *
   * @public
   */
  insightResults?: InsightResult[] | undefined;

  /**
   * The failure analysis results from insights, containing categorized failure clusters with root causes and recommendations.
   *
   * @public
   */
  failureAnalysisResult?: FailureAnalysisResultContent | undefined;

  /**
   * The user intent clustering results from insights, containing grouped user intents across evaluated sessions.
   *
   * @public
   */
  userIntentResult?: UserIntentClusteringResultContent | undefined;

  /**
   * The execution summary clustering results from insights, containing grouped execution patterns across evaluated sessions.
   *
   * @public
   */
  executionSummaryResult?: ExecutionSummaryClusteringResultContent | undefined;

  /**
   * The error details if the batch evaluation encountered failures.
   *
   * @public
   */
  errorDetails?: string[] | undefined;

  /**
   * The description of the batch evaluation.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp when the batch evaluation was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The ARN of the KMS key used to encrypt evaluation data.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetRecommendationRequest {
  /**
   * The unique identifier of the recommendation to retrieve.
   *
   * @public
   */
  recommendationId: string | undefined;
}

/**
 * A reference to an evaluator used for recommendation assessment.
 *
 * @public
 */
export interface RecommendationEvaluatorReference {
  /**
   * The Amazon Resource Name (ARN) of the evaluator.
   *
   * @public
   */
  evaluatorArn: string | undefined;
}

/**
 * The evaluation configuration for assessing recommendation quality.
 *
 * @public
 */
export interface RecommendationEvaluationConfig {
  /**
   * The list of evaluators to use for assessing recommendation quality.
   *
   * @public
   */
  evaluators: RecommendationEvaluatorReference[] | undefined;
}

/**
 * A system prompt sourced from a configuration bundle version.
 *
 * @public
 */
export interface SystemPromptConfigurationBundle {
  /**
   * The Amazon Resource Name (ARN) of the configuration bundle.
   *
   * @public
   */
  bundleArn: string | undefined;

  /**
   * The version identifier of the configuration bundle.
   *
   * @public
   */
  versionId: string | undefined;

  /**
   * The JSON path within the configuration bundle that contains the system prompt.
   *
   * @public
   */
  systemPromptJsonPath: string | undefined;
}

/**
 * The system prompt input, either as inline text or from a configuration bundle.
 *
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
   * The system prompt text provided inline.
   *
   * @public
   */
  export interface TextMember {
    text: string;
    configurationBundle?: never;
    $unknown?: never;
  }

  /**
   * The system prompt sourced from a configuration bundle version.
   *
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
 * Configuration for generating system prompt optimization recommendations.
 *
 * @public
 */
export interface SystemPromptRecommendationConfig {
  /**
   * The current system prompt to optimize.
   *
   * @public
   */
  systemPrompt: SystemPromptConfig | undefined;

  /**
   * The agent traces to analyze for generating recommendations.
   *
   * @public
   */
  agentTraces: AgentTracesConfig | undefined;

  /**
   * The evaluation configuration specifying which evaluator to use for assessing recommendation quality.
   *
   * @public
   */
  evaluationConfig?: RecommendationEvaluationConfig | undefined;
}

/**
 * Maps a tool name to its JSON path within a configuration bundle.
 *
 * @public
 */
export interface ConfigurationBundleToolEntry {
  /**
   * The name of the tool.
   *
   * @public
   */
  toolName: string | undefined;

  /**
   * The JSON path within the configuration bundle's components that contains the tool description.
   *
   * @public
   */
  toolDescriptionJsonPath: string | undefined;
}

/**
 * Tool descriptions sourced from a configuration bundle version.
 *
 * @public
 */
export interface ToolDescriptionConfigurationBundle {
  /**
   * The Amazon Resource Name (ARN) of the configuration bundle.
   *
   * @public
   */
  bundleArn: string | undefined;

  /**
   * The version identifier of the configuration bundle.
   *
   * @public
   */
  versionId: string | undefined;

  /**
   * The list of tool entries mapping tool names to their JSON paths within the bundle.
   *
   * @public
   */
  tools: ConfigurationBundleToolEntry[] | undefined;
}

/**
 * The tool description content.
 *
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
   * The tool description as inline text.
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
 * A tool description input containing the tool name and its current description.
 *
 * @public
 */
export interface ToolDescriptionInput {
  /**
   * The name of the tool.
   *
   * @public
   */
  toolName: string | undefined;

  /**
   * The current description of the tool to optimize.
   *
   * @public
   */
  toolDescription: ToolDescriptionConfig | undefined;
}

/**
 * Inline tool description input containing a list of tools.
 *
 * @public
 */
export interface ToolDescriptionTextInput {
  /**
   * The list of tool descriptions to optimize.
   *
   * @public
   */
  tools: ToolDescriptionInput[] | undefined;
}

/**
 * The source of tool descriptions, either inline text or from a configuration bundle.
 *
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
   * Tool descriptions provided as inline text.
   *
   * @public
   */
  export interface ToolDescriptionTextMember {
    toolDescriptionText: ToolDescriptionTextInput;
    configurationBundle?: never;
    $unknown?: never;
  }

  /**
   * Tool descriptions sourced from a configuration bundle version.
   *
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
 * Configuration for generating tool description optimization recommendations.
 *
 * @public
 */
export interface ToolDescriptionRecommendationConfig {
  /**
   * The current tool descriptions to optimize.
   *
   * @public
   */
  toolDescription: ToolDescriptionSource | undefined;

  /**
   * The agent traces to analyze for generating tool description recommendations.
   *
   * @public
   */
  agentTraces: AgentTracesConfig | undefined;
}

/**
 * The configuration for a recommendation, varying by recommendation type.
 *
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
   * The configuration for a system prompt recommendation.
   *
   * @public
   */
  export interface SystemPromptRecommendationConfigMember {
    systemPromptRecommendationConfig: SystemPromptRecommendationConfig;
    toolDescriptionRecommendationConfig?: never;
    $unknown?: never;
  }

  /**
   * The configuration for a tool description recommendation.
   *
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
 * A configuration bundle reference in a recommendation result.
 *
 * @public
 */
export interface RecommendationResultConfigurationBundle {
  /**
   * The Amazon Resource Name (ARN) of the configuration bundle.
   *
   * @public
   */
  bundleArn: string | undefined;

  /**
   * The version identifier of the configuration bundle containing the recommendation.
   *
   * @public
   */
  versionId: string | undefined;
}

/**
 * The result of a system prompt recommendation, containing the optimized prompt.
 *
 * @public
 */
export interface SystemPromptRecommendationResult {
  /**
   * The optimized system prompt text generated by the recommendation.
   *
   * @public
   */
  recommendedSystemPrompt?: string | undefined;

  /**
   * The configuration bundle containing the recommended system prompt, if the input was sourced from a configuration bundle.
   *
   * @public
   */
  configurationBundle?: RecommendationResultConfigurationBundle | undefined;

  /**
   * An explanation of why the recommendation was generated and what patterns were identified in the agent traces.
   *
   * @public
   */
  explanation?: string | undefined;

  /**
   * The error code if the recommendation failed.
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * The error message if the recommendation failed.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * The output for a single tool description recommendation.
 *
 * @public
 */
export interface ToolDescriptionOutput {
  /**
   * The name of the tool.
   *
   * @public
   */
  toolName: string | undefined;

  /**
   * The optimized tool description text generated by the recommendation.
   *
   * @public
   */
  recommendedToolDescription?: string | undefined;

  /**
   * An explanation of why the recommendation was generated for this tool and what patterns were identified in the agent traces.
   *
   * @public
   */
  explanation?: string | undefined;
}

/**
 * The result of a tool description recommendation, containing optimized descriptions.
 *
 * @public
 */
export interface ToolDescriptionRecommendationResult {
  /**
   * The list of tools with their recommended descriptions.
   *
   * @public
   */
  tools?: ToolDescriptionOutput[] | undefined;

  /**
   * The configuration bundle containing the recommended tool descriptions, if the input was sourced from a configuration bundle.
   *
   * @public
   */
  configurationBundle?: RecommendationResultConfigurationBundle | undefined;

  /**
   * The error code if the recommendation failed.
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * The error message if the recommendation failed.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * The result of a recommendation, containing the optimized output.
 *
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
   * The result of a system prompt recommendation.
   *
   * @public
   */
  export interface SystemPromptRecommendationResultMember {
    systemPromptRecommendationResult: SystemPromptRecommendationResult;
    toolDescriptionRecommendationResult?: never;
    $unknown?: never;
  }

  /**
   * The result of a tool description recommendation.
   *
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
   * The unique identifier of the recommendation.
   *
   * @public
   */
  recommendationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recommendation.
   *
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * The name of the recommendation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the recommendation.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of recommendation.
   *
   * @public
   */
  type: RecommendationType | undefined;

  /**
   * The configuration for the recommendation.
   *
   * @public
   */
  recommendationConfig: RecommendationConfig | undefined;

  /**
   * The current status of the recommendation.
   *
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * The timestamp when the recommendation was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the recommendation was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The result of the recommendation, containing the optimized system prompt or tool descriptions. Only present when the recommendation status is `COMPLETED`.
   *
   * @public
   */
  recommendationResult?: RecommendationResult | undefined;

  /**
   * The ARN of the KMS key used to encrypt recommendation data.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListABTestsRequest {
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
 * @public
 */
export interface ListABTestsResponse {
  /**
   * The list of A/B test summaries.
   *
   * @public
   */
  abTests: ABTestSummary[] | undefined;

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
export interface ListBatchEvaluationsRequest {
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
 * Summary representation for list responses.
 *
 * @public
 */
export interface BatchEvaluationSummary {
  /**
   * The unique identifier of the batch evaluation.
   *
   * @public
   */
  batchEvaluationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the batch evaluation.
   *
   * @public
   */
  batchEvaluationArn: string | undefined;

  /**
   * The name of the batch evaluation.
   *
   * @public
   */
  batchEvaluationName: string | undefined;

  /**
   * The current status of the batch evaluation.
   *
   * @public
   */
  status: BatchEvaluationStatus | undefined;

  /**
   * The timestamp when the batch evaluation was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The description of the batch evaluation.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The list of evaluators applied during the batch evaluation.
   *
   * @public
   */
  evaluators?: Evaluator[] | undefined;

  /**
   * The list of insight analyses applied during the batch evaluation.
   *
   * @public
   */
  insights?: Insight[] | undefined;

  /**
   * The aggregated evaluation results.
   *
   * @public
   */
  evaluationResults?: EvaluationJobResults | undefined;

  /**
   * The error details if the batch evaluation encountered failures.
   *
   * @public
   */
  errorDetails?: string[] | undefined;

  /**
   * The ARN of the KMS key used to encrypt evaluation data.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The timestamp when the batch evaluation was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListBatchEvaluationsResponse {
  /**
   * The list of batch evaluation summaries.
   *
   * @public
   */
  batchEvaluations: BatchEvaluationSummary[] | undefined;

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
export interface ListRecommendationsRequest {
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

  /**
   * Optional filter to return only recommendations with the specified status.
   *
   * @public
   */
  statusFilter?: RecommendationStatus | undefined;
}

/**
 * Summary information about a recommendation.
 *
 * @public
 */
export interface RecommendationSummary {
  /**
   * The unique identifier of the recommendation.
   *
   * @public
   */
  recommendationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the recommendation.
   *
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * The name of the recommendation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the recommendation.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of recommendation.
   *
   * @public
   */
  type: RecommendationType | undefined;

  /**
   * The current status of the recommendation.
   *
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * The timestamp when the recommendation was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the recommendation was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsResponse {
  /**
   * The list of recommendation summaries.
   *
   * @public
   */
  recommendationSummaries: RecommendationSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The input for a ground truth conversation turn.
 *
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
   * The text prompt for this conversation turn.
   *
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
 * Ground truth data for a single conversation turn.
 *
 * @public
 */
export interface GroundTruthTurn {
  /**
   * The input for this conversation turn.
   *
   * @public
   */
  input?: GroundTruthTurnInput | undefined;

  /**
   * The expected response for this conversation turn.
   *
   * @public
   */
  expectedResponse?: EvaluationContent | undefined;
}

/**
 * Inline ground truth data containing assertions, expected trajectories, and per-turn expected responses.
 *
 * @public
 */
export interface InlineGroundTruth {
  /**
   * Assertions for evaluation, reuses common model EvaluationContentList.
   *
   * @public
   */
  assertions?: EvaluationContent[] | undefined;

  /**
   * The expected tool call sequence for trajectory evaluation.
   *
   * @public
   */
  expectedTrajectory?: EvaluationExpectedTrajectory | undefined;

  /**
   * A list of per-turn ground truth data, each containing an input prompt and expected response.
   *
   * @public
   */
  turns?: GroundTruthTurn[] | undefined;
}

/**
 * Where to pull ground truth from.
 *
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
   * Inline ground truth data provided directly in the request.
   *
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
 * Metadata for a specific session in a batch evaluation, including ground truth data and test scenario identifiers.
 *
 * @public
 */
export interface SessionMetadataShape {
  /**
   * The unique identifier of the session this metadata applies to.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * An optional test scenario identifier for categorizing and tracking evaluation results.
   *
   * @public
   */
  testScenarioId?: string | undefined;

  /**
   * The ground truth data for this session, including expected responses and assertions.
   *
   * @public
   */
  groundTruth?: GroundTruthSource | undefined;

  /**
   * Additional key-value metadata associated with this session.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;
}

/**
 * Metadata for the evaluation, including session-specific ground truth data.
 *
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
   * A list of session metadata entries containing ground truth data and test scenario identifiers for specific sessions.
   *
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
   * The name of the batch evaluation. Must be unique within your account.
   *
   * @public
   */
  batchEvaluationName: string | undefined;

  /**
   * The list of evaluators to apply during the batch evaluation. Can include both built-in evaluators and custom evaluators. Maximum of 10 evaluators.
   *
   * @public
   */
  evaluators?: Evaluator[] | undefined;

  /**
   * The list of insight analyses to run against sessions during the batch evaluation. Maximum of 10 insights.
   *
   * @public
   */
  insights?: Insight[] | undefined;

  /**
   * The data source configuration that specifies where to pull agent session traces from for evaluation.
   *
   * @public
   */
  dataSourceConfig: DataSourceConfig | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, the service ignores the request, but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Optional metadata for the evaluation, including session-specific ground truth data and test scenario identifiers.
   *
   * @public
   */
  evaluationMetadata?: EvaluationMetadata | undefined;

  /**
   * A map of tag keys and values to associate with the batch evaluation.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The ARN of the KMS key used to encrypt evaluation data. If provided, customer data is encrypted at rest with the specified key.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The description of the batch evaluation.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Output destination configuration.
   *
   * @public
   */
  outputConfig?: OutputConfig | undefined;
}

/**
 * @public
 */
export interface StartBatchEvaluationResponse {
  /**
   * The unique identifier of the created batch evaluation.
   *
   * @public
   */
  batchEvaluationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created batch evaluation.
   *
   * @public
   */
  batchEvaluationArn: string | undefined;

  /**
   * The name of the batch evaluation.
   *
   * @public
   */
  batchEvaluationName: string | undefined;

  /**
   * The list of evaluators applied during the batch evaluation.
   *
   * @public
   */
  evaluators?: Evaluator[] | undefined;

  /**
   * The list of insight analyses applied during the batch evaluation.
   *
   * @public
   */
  insights?: Insight[] | undefined;

  /**
   * The status of the batch evaluation.
   *
   * @public
   */
  status: BatchEvaluationStatus | undefined;

  /**
   * The timestamp when the batch evaluation was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The output configuration specifying where evaluation results are written.
   *
   * @public
   */
  outputConfig?: OutputConfig | undefined;

  /**
   * The tags associated with the batch evaluation.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The ARN of the KMS key used to encrypt evaluation data.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The description of the batch evaluation.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface StartRecommendationRequest {
  /**
   * The name of the recommendation. Must be unique within your account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the recommendation.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of recommendation to generate. Valid values are `SYSTEM_PROMPT_RECOMMENDATION` for system prompt optimization or `TOOL_DESCRIPTION_RECOMMENDATION` for tool description optimization.
   *
   * @public
   */
  type: RecommendationType | undefined;

  /**
   * The configuration for the recommendation, including the input to optimize, agent traces to analyze, and evaluation settings.
   *
   * @public
   */
  recommendationConfig: RecommendationConfig | undefined;

  /**
   * The ARN of the KMS key used to encrypt recommendation data. If provided, customer data is encrypted at rest with the specified key.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, the service ignores the request, but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A map of tag keys and values to associate with the recommendation.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartRecommendationResponse {
  /**
   * The unique identifier of the created recommendation.
   *
   * @public
   */
  recommendationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created recommendation.
   *
   * @public
   */
  recommendationArn: string | undefined;

  /**
   * The name of the recommendation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the recommendation.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of recommendation.
   *
   * @public
   */
  type: RecommendationType | undefined;

  /**
   * The configuration for the recommendation.
   *
   * @public
   */
  recommendationConfig: RecommendationConfig | undefined;

  /**
   * The status of the recommendation.
   *
   * @public
   */
  status: RecommendationStatus | undefined;

  /**
   * The timestamp when the recommendation was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the recommendation was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface StopBatchEvaluationRequest {
  /**
   * The unique identifier of the batch evaluation to stop.
   *
   * @public
   */
  batchEvaluationId: string | undefined;
}

/**
 * @public
 */
export interface StopBatchEvaluationResponse {
  /**
   * The unique identifier of the stopped batch evaluation.
   *
   * @public
   */
  batchEvaluationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stopped batch evaluation.
   *
   * @public
   */
  batchEvaluationArn: string | undefined;

  /**
   * The status of the batch evaluation after the stop request.
   *
   * @public
   */
  status: BatchEvaluationStatus | undefined;

  /**
   * The description of the batch evaluation.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateABTestRequest {
  /**
   * The unique identifier of the A/B test to update.
   *
   * @public
   */
  abTestId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request, the service ignores the request, but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The updated name of the A/B test.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The updated description of the A/B test.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated list of variants.
   *
   * @public
   */
  variants?: Variant[] | undefined;

  /**
   * The updated gateway filter.
   *
   * @public
   */
  gatewayFilter?: GatewayFilter | undefined;

  /**
   * The updated evaluation configuration.
   *
   * @public
   */
  evaluationConfig?: ABTestEvaluationConfig | undefined;

  /**
   * The updated IAM role ARN.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The updated execution status to enable or disable the A/B test.
   *
   * @public
   */
  executionStatus?: ABTestExecutionStatus | undefined;
}

/**
 * @public
 */
export interface UpdateABTestResponse {
  /**
   * The unique identifier of the updated A/B test.
   *
   * @public
   */
  abTestId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated A/B test.
   *
   * @public
   */
  abTestArn: string | undefined;

  /**
   * The status of the A/B test.
   *
   * @public
   */
  status: ABTestStatus | undefined;

  /**
   * The execution status of the A/B test.
   *
   * @public
   */
  executionStatus: ABTestExecutionStatus | undefined;

  /**
   * The timestamp when the A/B test was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetResourceApiKeyRequest {
  /**
   * The identity token of the workload from which you want to retrieve the API key.
   *
   * @public
   */
  workloadIdentityToken: string | undefined;

  /**
   * The credential provider name for the resource from which you are retrieving the API key.
   *
   * @public
   */
  resourceCredentialProviderName: string | undefined;
}

/**
 * @public
 */
export interface GetResourceApiKeyResponse {
  /**
   * The API key associated with the resource requested.
   *
   * @public
   */
  apiKey: string | undefined;
}

/**
 * @public
 */
export interface GetResourceOauth2TokenRequest {
  /**
   * The identity token of the workload from which you want to retrieve the OAuth2 token.
   *
   * @public
   */
  workloadIdentityToken: string | undefined;

  /**
   * The name of the resource's credential provider.
   *
   * @public
   */
  resourceCredentialProviderName: string | undefined;

  /**
   * The OAuth scopes being requested.
   *
   * @public
   */
  scopes: string[] | undefined;

  /**
   * The type of flow to be performed.
   *
   * @public
   */
  oauth2Flow: Oauth2FlowType | undefined;

  /**
   * Unique identifier for the user's authentication session for retrieving OAuth2 tokens. This ID tracks the authorization flow state across multiple requests and responses during the OAuth2 authentication process.
   *
   * @public
   */
  sessionUri?: string | undefined;

  /**
   * The callback URL to redirect to after the OAuth 2.0 token retrieval is complete. This URL must be one of the provided URLs configured for the workload identity.
   *
   * @public
   */
  resourceOauth2ReturnUrl?: string | undefined;

  /**
   * Indicates whether to always initiate a new three-legged OAuth (3LO) flow, regardless of any existing session.
   *
   * @public
   */
  forceAuthentication?: boolean | undefined;

  /**
   * A map of custom parameters to include in the authorization request to the resource credential provider. These parameters are in addition to the standard OAuth 2.0 flow parameters, and will not override them.
   *
   * @public
   */
  customParameters?: Record<string, string> | undefined;

  /**
   * An opaque string that will be sent back to the callback URL provided in resourceOauth2ReturnUrl. This state should be used to protect the callback URL of your application against CSRF attacks by ensuring the response corresponds to the original request.
   *
   * @public
   */
  customState?: string | undefined;

  /**
   * The resources to include in the token request. These are used to specify the target resources for which the OAuth2 token is being requested.
   *
   * @public
   */
  resources?: string[] | undefined;

  /**
   * The audiences to include in the token request. These are used to specify the intended recipients of the OAuth2 token.
   *
   * @public
   */
  audiences?: string[] | undefined;
}

/**
 * @public
 */
export interface GetResourceOauth2TokenResponse {
  /**
   * The URL to initiate the authorization process, provided when the access token requires user authorization.
   *
   * @public
   */
  authorizationUrl?: string | undefined;

  /**
   * The OAuth 2.0 access token to use.
   *
   * @public
   */
  accessToken?: string | undefined;

  /**
   * Unique identifier for the user's authorization session for retrieving OAuth2 tokens. This matches the sessionId from the request and can be used to track the session state.
   *
   * @public
   */
  sessionUri?: string | undefined;

  /**
   * Status indicating whether the user's authorization session is in progress or has failed. This helps determine the next steps in the OAuth2 authentication flow.
   *
   * @public
   */
  sessionStatus?: SessionStatus | undefined;
}

/**
 * Coinbase CDP token request parameters.
 *
 * @public
 */
export interface CoinbaseCdpTokenRequestInput {
  /**
   * The HTTP method for the payment API request.
   *
   * @public
   */
  requestMethod: PaymentHttpMethodType | undefined;

  /**
   * The host for the payment API request. Defaults to "api.cdp.coinbase.com".
   *
   * @public
   */
  requestHost?: string | undefined;

  /**
   * The path of the payment API request.
   *
   * @public
   */
  requestPath: string | undefined;

  /**
   * Set to true for wallet write operations (requires walletSecret configured).
   *
   * @public
   */
  includeWalletAuthToken?: boolean | undefined;

  /**
   * Request body JSON — used to generate wallet auth JWT.
   *
   * @public
   */
  requestBody?: string | undefined;
}

/**
 * Stripe Privy token request parameters.
 *
 * @public
 */
export interface StripePrivyTokenRequestInput {
  /**
   * The host for the Privy API request. Defaults to "api.privy.io".
   *
   * @public
   */
  requestHost?: string | undefined;

  /**
   * The path of the Stripe Privy API request.
   *
   * @public
   */
  requestPath: string | undefined;

  /**
   * Request body JSON for the Privy API call.
   *
   * @public
   */
  requestBody: string | undefined;

  /**
   * Set to true to generate privy-authorization-signature.
   *
   * @public
   */
  includeAuthorizationSignature?: boolean | undefined;
}

/**
 * Vendor-specific token request configuration.
 *
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
   * The Coinbase CDP token request.
   *
   * @public
   */
  export interface CoinbaseCdpTokenRequestMember {
    coinbaseCdpTokenRequest: CoinbaseCdpTokenRequestInput;
    stripePrivyTokenRequest?: never;
    $unknown?: never;
  }

  /**
   * The Stripe Privy token request.
   *
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
   * Workload access token for authorization.
   *
   * @public
   */
  workloadIdentityToken: string | undefined;

  /**
   * Name of the payment credential provider to use.
   *
   * @public
   */
  resourceCredentialProviderName: string | undefined;

  /**
   * Vendor-specific token request input. Contains all request parameters in a type-safe, vendor-specific structure.
   *
   * @public
   */
  paymentTokenRequest: PaymentTokenRequestInput | undefined;
}

/**
 * Coinbase CDP token response.
 *
 * @public
 */
export interface CoinbaseCdpTokenResponseOutput {
  /**
   * Bearer Token for Authorization header.
   *
   * @public
   */
  bearerToken: string | undefined;

  /**
   * Wallet Auth Token for X-Wallet-Auth header.
   *
   * @public
   */
  walletAuthToken?: string | undefined;
}

/**
 * Stripe Privy token response containing appId, basicAuthToken, and optionally authorizationSignature.
 *
 * @public
 */
export interface StripePrivyTokenResponseOutput {
  /**
   * Base64-encoded ECDSA P-256 authorization signature (only present when includeAuthorizationSignature is true).
   *
   * @public
   */
  authorizationSignature?: string | undefined;

  /**
   * Unix timestamp in milliseconds when the authorization signature expires.
   *
   * @public
   */
  requestExpiry?: number | undefined;

  /**
   * The Privy app ID for the privy-app-id header.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * Base64-encoded Basic Auth token (appId:appSecret) for the Authorization header.
   *
   * @public
   */
  basicAuthToken: string | undefined;
}

/**
 * Vendor-specific token response configuration.
 *
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
   * The Coinbase CDP token response.
   *
   * @public
   */
  export interface CoinbaseCdpTokenResponseMember {
    coinbaseCdpTokenResponse: CoinbaseCdpTokenResponseOutput;
    stripePrivyTokenResponse?: never;
    $unknown?: never;
  }

  /**
   * The Stripe Privy token response.
   *
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
   * Vendor-specific token response output. Contains all response data in a type-safe, vendor-specific structure.
   *
   * @public
   */
  paymentTokenResponse: PaymentTokenResponseOutput | undefined;
}

/**
 * @public
 */
export interface GetWorkloadAccessTokenRequest {
  /**
   * The unique identifier for the registered workload.
   *
   * @public
   */
  workloadName: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadAccessTokenResponse {
  /**
   * An opaque token representing the identity of both the workload and the user.
   *
   * @public
   */
  workloadAccessToken: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadAccessTokenForJWTRequest {
  /**
   * The unique identifier for the registered workload.
   *
   * @public
   */
  workloadName: string | undefined;

  /**
   * The OAuth 2.0 token issued by the user's identity provider.
   *
   * @public
   */
  userToken: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadAccessTokenForJWTResponse {
  /**
   * An opaque token representing the identity of both the workload and the user.
   *
   * @public
   */
  workloadAccessToken: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadAccessTokenForUserIdRequest {
  /**
   * The name of the workload from which you want to retrieve the access token.
   *
   * @public
   */
  workloadName: string | undefined;

  /**
   * The ID of the user for whom you are retrieving the access token.
   *
   * @public
   */
  userId: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadAccessTokenForUserIdResponse {
  /**
   * The access token for the specified workload.
   *
   * @public
   */
  workloadAccessToken: string | undefined;
}

/**
 * A block of input content.
 *
 * @public
 */
export interface InputContentBlock {
  /**
   * The path to the input content.
   *
   * @public
   */
  path: string | undefined;

  /**
   * The text input content.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * The binary input content.
   *
   * @public
   */
  blob?: Uint8Array | undefined;
}

/**
 * The collection of arguments that specify the operation to perform and its parameters when invoking a tool in Amazon Bedrock AgentCore. Different tools require different arguments, and this structure provides a flexible way to pass the appropriate arguments to each tool type.
 *
 * @public
 */
export interface ToolArguments {
  /**
   * The code to execute in a code interpreter session. This is the source code in the specified programming language that will be executed by the code interpreter.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * The programming language of the code to execute. This tells the code interpreter which language runtime to use for execution.
   *
   * @public
   */
  language?: ProgrammingLanguage | undefined;

  /**
   * Whether to clear the context for the tool.
   *
   * @public
   */
  clearContext?: boolean | undefined;

  /**
   * The command to execute with the tool.
   *
   * @public
   */
  command?: string | undefined;

  /**
   * The path for the tool operation.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * The paths for the tool operation.
   *
   * @public
   */
  paths?: string[] | undefined;

  /**
   * The content for the tool operation.
   *
   * @public
   */
  content?: InputContentBlock[] | undefined;

  /**
   * The directory path for the tool operation.
   *
   * @public
   */
  directoryPath?: string | undefined;

  /**
   * The identifier of the task for the tool operation.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The runtime environment to use for code execution. If not specified, defaults to `deno` for JavaScript and TypeScript.
   *
   * @public
   */
  runtime?: LanguageRuntime | undefined;
}

/**
 * @public
 */
export interface InvokeCodeInterpreterRequest {
  /**
   * The unique identifier of the code interpreter associated with the session. This must match the identifier used when creating the session with `StartCodeInterpreterSession`.
   *
   * @public
   */
  codeInterpreterIdentifier: string | undefined;

  /**
   * The unique identifier of the code interpreter session to use. This must be an active session created with `StartCodeInterpreterSession`. If the session has expired or been stopped, the request will fail.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * The trace identifier for request tracking.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * The parent trace information for distributed tracing.
   *
   * @public
   */
  traceParent?: string | undefined;

  /**
   * The name of the code interpreter to invoke.
   *
   * @public
   */
  name: ToolName | undefined;

  /**
   * The arguments for the code interpreter. This includes the code to execute and any additional parameters such as the programming language, whether to clear the execution context, and other execution options. The structure of this parameter depends on the specific code interpreter being used.
   *
   * @public
   */
  arguments?: ToolArguments | undefined;
}

/**
 * Contains information about resource content.
 *
 * @public
 */
export interface ResourceContent {
  /**
   * The type of resource content.
   *
   * @public
   */
  type: ResourceContentType | undefined;

  /**
   * The URI of the resource content.
   *
   * @public
   */
  uri?: string | undefined;

  /**
   * The MIME type of the resource content.
   *
   * @public
   */
  mimeType?: string | undefined;

  /**
   * The text resource content.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * The binary resource content.
   *
   * @public
   */
  blob?: Uint8Array | undefined;
}

/**
 * A block of content in a response.
 *
 * @public
 */
export interface ContentBlock {
  /**
   * The type of content in the block.
   *
   * @public
   */
  type: ContentBlockType | undefined;

  /**
   * The text content of the block.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * The binary data content of the block.
   *
   * @public
   */
  data?: Uint8Array | undefined;

  /**
   * The MIME type of the content.
   *
   * @public
   */
  mimeType?: string | undefined;

  /**
   * The URI of the content.
   *
   * @public
   */
  uri?: string | undefined;

  /**
   * The name of the content block.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the content block.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The size of the content in bytes.
   *
   * @public
   */
  size?: number | undefined;

  /**
   * The resource associated with the content block.
   *
   * @public
   */
  resource?: ResourceContent | undefined;
}

/**
 * Contains structured content from a tool result.
 *
 * @public
 */
export interface ToolResultStructuredContent {
  /**
   * The identifier of the task that produced the result.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The status of the task that produced the result.
   *
   * @public
   */
  taskStatus?: TaskStatus | undefined;

  /**
   * The standard output from the tool execution.
   *
   * @public
   */
  stdout?: string | undefined;

  /**
   * The standard error output from the tool execution.
   *
   * @public
   */
  stderr?: string | undefined;

  /**
   * The exit code from the tool execution.
   *
   * @public
   */
  exitCode?: number | undefined;

  /**
   * The execution time of the tool operation in milliseconds.
   *
   * @public
   */
  executionTime?: number | undefined;
}

/**
 * The output produced by executing code in a code interpreter session in Amazon Bedrock AgentCore. This structure contains the results of code execution, including textual output, structured data, and error information. Agents use these results to generate responses that incorporate computation, data analysis, and visualization.
 *
 * @public
 */
export interface CodeInterpreterResult {
  /**
   * The textual content of the execution result. This includes standard output from the code execution, such as print statements, console output, and text representations of results.
   *
   * @public
   */
  content: ContentBlock[] | undefined;

  /**
   * The structured content of the execution result. This includes additional metadata about the execution, such as execution time, memory usage, and structured representations of output data. The format depends on the specific code interpreter and execution context.
   *
   * @public
   */
  structuredContent?: ToolResultStructuredContent | undefined;

  /**
   * Indicates whether the result represents an error. If true, the content contains error messages or exception information. If false, the content contains successful execution results.
   *
   * @public
   */
  isError?: boolean | undefined;
}

/**
 * Contains output from a code interpreter stream.
 *
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
   * The output produced by executing code in a code interpreter session in Amazon Bedrock AgentCore. This structure contains the results of code execution, including textual output, structured data, and error information. Agents use these results to generate responses that incorporate computation, data analysis, and visualization.
   *
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
   * The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.
   *
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
   * The exception that occurs when the request conflicts with the current state of the resource. This can happen when trying to modify a resource that is currently being modified by another request, or when trying to create a resource that already exists.
   *
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
   * The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.
   *
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
   * The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.
   *
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
   * The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.
   *
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
   * The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.
   *
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
   * The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.
   *
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
   * The identifier of the code interpreter session.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * The stream containing the results of the code execution. This includes output, errors, and execution status.
   *
   * @public
   */
  stream: AsyncIterable<CodeInterpreterStreamOutput> | undefined;
}

/**
 * A block of reasoning text from the model.
 *
 * @public
 */
export interface HarnessReasoningTextBlock {
  /**
   * The reasoning text.
   *
   * @public
   */
  text: string | undefined;

  /**
   * Signature for verifying the reasoning content.
   *
   * @public
   */
  signature?: string | undefined;
}

/**
 * Reasoning content from the model.
 *
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
   * The reasoning text.
   *
   * @public
   */
  export interface ReasoningTextMember {
    reasoningText: HarnessReasoningTextBlock;
    redactedContent?: never;
    $unknown?: never;
  }

  /**
   * Redacted reasoning content.
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
    reasoningText: (value: HarnessReasoningTextBlock) => T;
    redactedContent: (value: Uint8Array) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A content block within a tool result.
 *
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
   * Text content.
   *
   * @public
   */
  export interface TextMember {
    text: string;
    json?: never;
    $unknown?: never;
  }

  /**
   * JSON content.
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
 * The result of a tool execution.
 *
 * @public
 */
export interface HarnessToolResultBlock {
  /**
   * The tool use ID that this result corresponds to.
   *
   * @public
   */
  toolUseId: string | undefined;

  /**
   * The content of the tool result.
   *
   * @public
   */
  content: HarnessToolResultContentBlock[] | undefined;

  /**
   * The status of the tool execution.
   *
   * @public
   */
  status?: HarnessToolUseStatus | undefined;

  /**
   * The type of tool use that produced this result.
   *
   * @public
   */
  type?: HarnessToolUseType | undefined;
}

/**
 * A tool use request from the model.
 *
 * @public
 */
export interface HarnessToolUseBlock {
  /**
   * The name of the tool to call.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The unique ID of this tool use.
   *
   * @public
   */
  toolUseId: string | undefined;

  /**
   * The JSON input to pass to the tool.
   *
   * @public
   */
  input: __DocumentType | undefined;

  /**
   * The type of tool use.
   *
   * @public
   */
  type?: HarnessToolUseType | undefined;

  /**
   * The name of the MCP server providing this tool.
   *
   * @public
   */
  serverName?: string | undefined;
}

/**
 * A content block within a message.
 *
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
   * Text content.
   *
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
   * A tool use request from the model.
   *
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
   * A tool execution result.
   *
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
   * Model reasoning content.
   *
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
 * A message in the conversation.
 *
 * @public
 */
export interface HarnessMessage {
  /**
   * The role of the message sender.
   *
   * @public
   */
  role: HarnessConversationRole | undefined;

  /**
   * The content blocks of the message.
   *
   * @public
   */
  content: HarnessContentBlock[] | undefined;
}

/**
 * Configuration for an Amazon Bedrock model provider.
 *
 * @public
 */
export interface HarnessBedrockModelConfig {
  /**
   * The Bedrock model ID.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The maximum number of tokens to allow in the generated response per iteration.
   *
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * The temperature to set when calling the model.
   *
   * @public
   */
  temperature?: number | undefined;

  /**
   * The topP set when calling the model.
   *
   * @public
   */
  topP?: number | undefined;

  /**
   * The API format to use when calling the Bedrock provider.
   *
   * @public
   */
  apiFormat?: HarnessBedrockApiFormat | undefined;

  /**
   * Provider-specific parameters passed through to the model provider unchanged.
   *
   * @public
   */
  additionalParams?: __DocumentType | undefined;
}

/**
 * Configuration for a Google Gemini model provider. Requires an API key stored in AgentCore Identity.
 *
 * @public
 */
export interface HarnessGeminiModelConfig {
  /**
   * The Gemini model ID.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The ARN of your Gemini API key on AgentCore Identity.
   *
   * @public
   */
  apiKeyArn: string | undefined;

  /**
   * The maximum number of tokens to allow in the generated response per iteration.
   *
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * The temperature to set when calling the model.
   *
   * @public
   */
  temperature?: number | undefined;

  /**
   * The topP set when calling the model.
   *
   * @public
   */
  topP?: number | undefined;

  /**
   * The topK set when calling the model.
   *
   * @public
   */
  topK?: number | undefined;

  /**
   * Provider-specific parameters passed through to the Gemini model provider unchanged.
   *
   * @public
   */
  additionalParams?: __DocumentType | undefined;
}

/**
 * Configuration for a LiteLLM model provider, enabling connection to third-party model providers.
 *
 * @public
 */
export interface HarnessLiteLlmModelConfig {
  /**
   * The LiteLLM model identifier (e.g., "anthropic/claude-3-sonnet").
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The ARN of the API key in AgentCore Identity for authenticating with the model provider.
   *
   * @public
   */
  apiKeyArn?: string | undefined;

  /**
   * The base URL for the model provider's API endpoint.
   *
   * @public
   */
  apiBase?: string | undefined;

  /**
   * The maximum number of tokens to allow in the generated response per iteration.
   *
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * The temperature to set when calling the model.
   *
   * @public
   */
  temperature?: number | undefined;

  /**
   * The topP set when calling the model.
   *
   * @public
   */
  topP?: number | undefined;

  /**
   * Provider-specific parameters passed through to the model provider unchanged.
   *
   * @public
   */
  additionalParams?: __DocumentType | undefined;
}

/**
 * Configuration for an OpenAI model provider. Requires an API key stored in AgentCore Identity.
 *
 * @public
 */
export interface HarnessOpenAiModelConfig {
  /**
   * The OpenAI model ID.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The ARN of your OpenAI API key on AgentCore Identity.
   *
   * @public
   */
  apiKeyArn: string | undefined;

  /**
   * Optional custom endpoint URL for an OpenAI-compatible endpoint.
   *
   * @public
   */
  apiBase?: string | undefined;

  /**
   * The maximum number of tokens to allow in the generated response per iteration.
   *
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * The temperature to set when calling the model.
   *
   * @public
   */
  temperature?: number | undefined;

  /**
   * The topP set when calling the model.
   *
   * @public
   */
  topP?: number | undefined;

  /**
   * The API format to use when calling the OpenAI provider.
   *
   * @public
   */
  apiFormat?: HarnessOpenAiApiFormat | undefined;

  /**
   * Provider-specific parameters passed through to the model provider unchanged.
   *
   * @public
   */
  additionalParams?: __DocumentType | undefined;
}

/**
 * Specification of which model to use.
 *
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
   * Configuration for an Amazon Bedrock model.
   *
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
   * Configuration for an OpenAI model.
   *
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
   * Configuration for a Google Gemini model.
   *
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
   * The LiteLLM model configuration for connecting to third-party model providers.
   *
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
 * Passed to show that Amazon Web Services Skills should be included.
 *
 * @public
 */
export interface HarnessSkillAwsSkillsSource {
  /**
   * Optionally filter allowed skills with glob syntax, e.g., ['core-skills/*'].
   *
   * @public
   */
  paths?: string[] | undefined;
}

/**
 * Authentication configuration for accessing a private git repository.
 *
 * @public
 */
export interface HarnessSkillGitAuth {
  /**
   * The ARN of the credential in AgentCore Identity containing the password or personal access token.
   *
   * @public
   */
  credentialArn: string | undefined;

  /**
   * Username for authentication. Defaults to 'oauth2' if not specified.
   *
   * @public
   */
  username?: string | undefined;
}

/**
 * A git repository source for a skill.
 *
 * @public
 */
export interface HarnessSkillGitSource {
  /**
   * The HTTPS URL of the git repository.
   *
   * @public
   */
  url: string | undefined;

  /**
   * Subdirectory within the repository containing the skill.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * Authentication configuration for private repositories.
   *
   * @public
   */
  auth?: HarnessSkillGitAuth | undefined;
}

/**
 * An S3 source for a skill.
 *
 * @public
 */
export interface HarnessSkillS3Source {
  /**
   * The S3 URI pointing to the skill directory (e.g., s3://bucket/skills/my-skill/).
   *
   * @public
   */
  uri: string | undefined;
}

/**
 * A skill available to the agent.
 *
 * @public
 */
export type HarnessSkill =
  | HarnessSkill.AwsSkillsMember
  | HarnessSkill.GitMember
  | HarnessSkill.PathMember
  | HarnessSkill.S3Member
  | HarnessSkill.$UnknownMember;

/**
 * @public
 */
export namespace HarnessSkill {
  /**
   * The filesystem path to the skill definition.
   *
   * @public
   */
  export interface PathMember {
    path: string;
    s3?: never;
    git?: never;
    awsSkills?: never;
    $unknown?: never;
  }

  /**
   * An S3 source containing the skill.
   *
   * @public
   */
  export interface S3Member {
    path?: never;
    s3: HarnessSkillS3Source;
    git?: never;
    awsSkills?: never;
    $unknown?: never;
  }

  /**
   * A git repository containing the skill.
   *
   * @public
   */
  export interface GitMember {
    path?: never;
    s3?: never;
    git: HarnessSkillGitSource;
    awsSkills?: never;
    $unknown?: never;
  }

  /**
   * Amazon Web Services Skills baked into the Harness's underlying Runtime.
   *
   * @public
   */
  export interface AwsSkillsMember {
    path?: never;
    s3?: never;
    git?: never;
    awsSkills: HarnessSkillAwsSkillsSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    path?: never;
    s3?: never;
    git?: never;
    awsSkills?: never;
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
    awsSkills: (value: HarnessSkillAwsSkillsSource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A content block in the system prompt.
 *
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
   * The text content of the system prompt block.
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
 * Configuration for AgentCore Browser.
 *
 * @public
 */
export interface HarnessAgentCoreBrowserConfig {
  /**
   * If not populated, the built-in Browser ARN is used.
   *
   * @public
   */
  browserArn?: string | undefined;
}

/**
 * Configuration for AgentCore Code Interpreter.
 *
 * @public
 */
export interface HarnessAgentCoreCodeInterpreterConfig {
  /**
   * If not populated, the built-in Code Interpreter ARN is used.
   *
   * @public
   */
  codeInterpreterArn?: string | undefined;
}

/**
 * @public
 */
export interface Unit {}

/**
 * Configuration for an OAuth 2.0 credential provider used to authenticate tool calls.
 *
 * @public
 */
export interface OAuthCredentialProvider {
  /**
   * The ARN of the OAuth 2.0 credential provider in AgentCore Identity.
   *
   * @public
   */
  providerArn: string | undefined;

  /**
   * The OAuth 2.0 scopes to request when obtaining an access token.
   *
   * @public
   */
  scopes: string[] | undefined;

  /**
   * Additional custom parameters to include in the OAuth 2.0 token request.
   *
   * @public
   */
  customParameters?: Record<string, string> | undefined;

  /**
   * The OAuth 2.0 grant type to use for authentication.
   *
   * @public
   */
  grantType?: OAuthGrantType | undefined;

  /**
   * The default return URL for the OAuth 2.0 authorization flow.
   *
   * @public
   */
  defaultReturnUrl?: string | undefined;
}

/**
 * Authentication method for calling a Gateway.
 *
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
   * SigV4-sign requests using the agent's execution role.
   *
   * @public
   */
  export interface AwsIamMember {
    awsIam: Unit;
    none?: never;
    oauth?: never;
    $unknown?: never;
  }

  /**
   * No authentication.
   *
   * @public
   */
  export interface NoneMember {
    awsIam?: never;
    none: Unit;
    oauth?: never;
    $unknown?: never;
  }

  /**
   * OAuth 2.0 authentication via AgentCore Identity.
   *
   * The `AUTHORIZATION_CODE` grant type is not supported for outbound authentication from a harness to an AgentCore Gateway, even when `defaultReturnUrl` is specified.
   *
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
 * Configuration for AgentCore Gateway.
 *
 * @public
 */
export interface HarnessAgentCoreGatewayConfig {
  /**
   * The ARN of the desired AgentCore Gateway.
   *
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * How harness authenticates to this Gateway. Defaults to AWS_IAM (SigV4) if omitted.
   *
   * @public
   */
  outboundAuth?: HarnessGatewayOutboundAuth | undefined;
}

/**
 * Configuration for an inline function tool. When the agent calls this tool, the tool call is returned to the caller for external execution.
 *
 * @public
 */
export interface HarnessInlineFunctionConfig {
  /**
   * Description of what the tool does, provided to the model.
   *
   * @public
   */
  description: string | undefined;

  /**
   * JSON Schema describing the tool's input parameters.
   *
   * @public
   */
  inputSchema: __DocumentType | undefined;
}

/**
 * Configuration for connecting to a remote MCP server.
 *
 * @public
 */
export interface HarnessRemoteMcpConfig {
  /**
   * URL of the MCP endpoint.
   *
   * @public
   */
  url: string | undefined;

  /**
   * Custom headers to include when connecting to the remote MCP server.
   *
   * @public
   */
  headers?: Record<string, string> | undefined;
}

/**
 * Configuration union for different tool types.
 *
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
   * Configuration for remote MCP server.
   *
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
   * Configuration for AgentCore Browser.
   *
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
   * Configuration for AgentCore Gateway.
   *
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
   * Configuration for an inline function tool.
   *
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
   * Configuration for AgentCore Code Interpreter.
   *
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
 * A tool available to the agent loop.
 *
 * @public
 */
export interface HarnessTool {
  /**
   * The type of tool.
   *
   * @public
   */
  type: HarnessToolType | undefined;

  /**
   * Unique name for the tool. If not provided, a name will be inferred or generated.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Tool-specific configuration.
   *
   * @public
   */
  config?: HarnessToolConfiguration | undefined;
}

/**
 * @public
 */
export interface InvokeHarnessRequest {
  /**
   * The ARN of the harness to invoke.
   *
   * @public
   */
  harnessArn: string | undefined;

  /**
   * The endpoint name to invoke. If omitted, the DEFAULT endpoint is used.
   *
   * @public
   */
  qualifier?: string | undefined;

  /**
   * The session ID for the invocation. Use the same session ID across requests to continue a conversation.
   *
   * @public
   */
  runtimeSessionId: string | undefined;

  /**
   * An identifier for the end user making the request. This value is passed through to the runtime container.
   *
   * @public
   */
  runtimeUserId?: string | undefined;

  /**
   * W3C trace context parent header containing version, trace ID, parent span ID, and trace flags.
   *
   * @public
   */
  traceParent?: string | undefined;

  /**
   * W3C trace context state header for vendor-specific trace information.
   *
   * @public
   */
  traceState?: string | undefined;

  /**
   * Trace ID for maintaining observability through the operation.
   *
   * @public
   */
  traceId?: string | undefined;

  /**
   * W3C Baggage header for user-defined context propagation. Format: key1=value1,key2=value2
   *
   * @public
   */
  baggage?: string | undefined;

  /**
   * The messages to send to the agent.
   *
   * @public
   */
  messages: HarnessMessage[] | undefined;

  /**
   * The model configuration to use for this invocation. If specified, overrides the harness default.
   *
   * @public
   */
  model?: HarnessModelConfiguration | undefined;

  /**
   * The system prompt to use for this invocation. If specified, overrides the harness default.
   *
   * @public
   */
  systemPrompt?: HarnessSystemContentBlock[] | undefined;

  /**
   * The tools available to the agent for this invocation. If specified, overrides the harness default.
   *
   * @public
   */
  tools?: HarnessTool[] | undefined;

  /**
   * The skills available to the agent for this invocation. If specified, overrides the harness default.
   *
   * @public
   */
  skills?: HarnessSkill[] | undefined;

  /**
   * The tools that the agent is allowed to use for this invocation. If specified, overrides the harness default.
   *
   * @public
   */
  allowedTools?: string[] | undefined;

  /**
   * The maximum number of iterations the agent loop can execute. If specified, overrides the harness default.
   *
   * @public
   */
  maxIterations?: number | undefined;

  /**
   * The maximum number of tokens the agent can generate per iteration. If specified, overrides the harness default.
   *
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * The maximum duration in seconds for the agent loop execution. If specified, overrides the harness default.
   *
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * The actor ID for memory operations. Overrides the actor ID configured on the harness.
   *
   * @public
   */
  actorId?: string | undefined;
}

/**
 * A delta update to a reasoning content block.
 *
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
   * Reasoning text delta.
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
   * Redacted reasoning content.
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
   * Signature for the reasoning content.
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
 * A delta update to a tool result content block.
 *
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
   * A text tool result delta.
   *
   * @public
   */
  export interface TextMember {
    text: string;
    json?: never;
    $unknown?: never;
  }

  /**
   * A JSON tool result delta.
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
 * Delta payload for a tool result metadata.
 *
 * @public
 */
export interface HarnessToolResultMetadataBlockDelta {
  /**
   * The partial JSON-string fragment of the tool result metadata.
   *
   * @public
   */
  metadata: string | undefined;
}

/**
 * Delta payload for tool use input.
 *
 * @public
 */
export interface HarnessToolUseBlockDelta {
  /**
   * The partial JSON input for the tool call.
   *
   * @public
   */
  input: string | undefined;
}

/**
 * A delta update to a content block.
 *
 * @public
 */
export type HarnessContentBlockDelta =
  | HarnessContentBlockDelta.ReasoningContentMember
  | HarnessContentBlockDelta.TextMember
  | HarnessContentBlockDelta.ToolResultMember
  | HarnessContentBlockDelta.ToolResultMetadataMember
  | HarnessContentBlockDelta.ToolUseMember
  | HarnessContentBlockDelta.$UnknownMember;

/**
 * @public
 */
export namespace HarnessContentBlockDelta {
  /**
   * A text delta.
   *
   * @public
   */
  export interface TextMember {
    text: string;
    toolUse?: never;
    toolResult?: never;
    reasoningContent?: never;
    toolResultMetadata?: never;
    $unknown?: never;
  }

  /**
   * A tool use input delta.
   *
   * @public
   */
  export interface ToolUseMember {
    text?: never;
    toolUse: HarnessToolUseBlockDelta;
    toolResult?: never;
    reasoningContent?: never;
    toolResultMetadata?: never;
    $unknown?: never;
  }

  /**
   * A tool result delta.
   *
   * @public
   */
  export interface ToolResultMember {
    text?: never;
    toolUse?: never;
    toolResult: HarnessToolResultBlockDelta[];
    reasoningContent?: never;
    toolResultMetadata?: never;
    $unknown?: never;
  }

  /**
   * A reasoning content delta.
   *
   * @public
   */
  export interface ReasoningContentMember {
    text?: never;
    toolUse?: never;
    toolResult?: never;
    reasoningContent: HarnessReasoningContentBlockDelta;
    toolResultMetadata?: never;
    $unknown?: never;
  }

  /**
   * A tool result metadata delta.
   *
   * @public
   */
  export interface ToolResultMetadataMember {
    text?: never;
    toolUse?: never;
    toolResult?: never;
    reasoningContent?: never;
    toolResultMetadata: HarnessToolResultMetadataBlockDelta;
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
    toolResultMetadata?: never;
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
    toolResultMetadata: (value: HarnessToolResultMetadataBlockDelta) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Event containing a delta update to a content block.
 *
 * @public
 */
export interface HarnessContentBlockDeltaEvent {
  /**
   * The index of the content block being updated.
   *
   * @public
   */
  contentBlockIndex: number | undefined;

  /**
   * The delta payload.
   *
   * @public
   */
  delta: HarnessContentBlockDelta | undefined;
}

/**
 * Start payload for a tool result content block.
 *
 * @public
 */
export interface HarnessToolResultBlockStart {
  /**
   * The tool use ID that this result corresponds to.
   *
   * @public
   */
  toolUseId: string | undefined;

  /**
   * The status of the tool execution.
   *
   * @public
   */
  status?: HarnessToolUseStatus | undefined;
}

/**
 * Start payload for a tool use content block.
 *
 * @public
 */
export interface HarnessToolUseBlockStart {
  /**
   * The unique ID of this tool use.
   *
   * @public
   */
  toolUseId: string | undefined;

  /**
   * The name of the tool being called.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of tool use.
   *
   * @public
   */
  type?: HarnessToolUseType | undefined;

  /**
   * The name of the MCP server providing this tool.
   *
   * @public
   */
  serverName?: string | undefined;
}

/**
 * The start payload for a content block.
 *
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
   * Start of a tool use content block.
   *
   * @public
   */
  export interface ToolUseMember {
    toolUse: HarnessToolUseBlockStart;
    toolResult?: never;
    $unknown?: never;
  }

  /**
   * Start of a tool result content block.
   *
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
 * Event indicating the start of a content block.
 *
 * @public
 */
export interface HarnessContentBlockStartEvent {
  /**
   * The index of the content block within the message.
   *
   * @public
   */
  contentBlockIndex: number | undefined;

  /**
   * The content block start payload.
   *
   * @public
   */
  start: HarnessContentBlockStart | undefined;
}

/**
 * Event indicating the end of a content block.
 *
 * @public
 */
export interface HarnessContentBlockStopEvent {
  /**
   * The index of the content block that ended.
   *
   * @public
   */
  contentBlockIndex: number | undefined;
}

/**
 * A lifecycle hook event emitted in the invocation stream for visibility into hook decisions.
 *
 * @public
 */
export interface HarnessHookEvent {
  /**
   * The unique identifier for this hook event.
   *
   * @public
   */
  hookEventId: string | undefined;

  /**
   * The name of the hook that ran.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of lifecycle hook event.
   *
   * @public
   */
  type: HarnessHookEventType | undefined;

  /**
   * The decision applied to the hook event. This field is present only for blocking Lambda targets.
   *
   * @public
   */
  decision?: HarnessHookDecision | undefined;

  /**
   * The optional reason for the applied decision.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * Event indicating the start of a message.
 *
 * @public
 */
export interface HarnessMessageStartEvent {
  /**
   * The role of the message sender.
   *
   * @public
   */
  role: HarnessConversationRole | undefined;
}

/**
 * Event indicating the end of a message.
 *
 * @public
 */
export interface HarnessMessageStopEvent {
  /**
   * The reason the agent stopped generating.
   *
   * @public
   */
  stopReason: HarnessStopReason | undefined;
}

/**
 * Latency metrics for the invocation.
 *
 * @public
 */
export interface HarnessStreamMetrics {
  /**
   * The end-to-end latency of the invocation in milliseconds.
   *
   * @public
   */
  latencyMs: number | undefined;
}

/**
 * Token usage counts for the invocation.
 *
 * @public
 */
export interface HarnessTokenUsage {
  /**
   * The number of input tokens consumed.
   *
   * @public
   */
  inputTokens: number | undefined;

  /**
   * The number of output tokens generated.
   *
   * @public
   */
  outputTokens: number | undefined;

  /**
   * The total number of tokens consumed.
   *
   * @public
   */
  totalTokens: number | undefined;

  /**
   * The number of input tokens read from cache.
   *
   * @public
   */
  cacheReadInputTokens?: number | undefined;

  /**
   * The number of input tokens written to cache.
   *
   * @public
   */
  cacheWriteInputTokens?: number | undefined;
}

/**
 * Token usage and latency metrics for the invocation.
 *
 * @public
 */
export interface HarnessMetadataEvent {
  /**
   * Token usage counts.
   *
   * @public
   */
  usage: HarnessTokenUsage | undefined;

  /**
   * Latency metrics.
   *
   * @public
   */
  metrics: HarnessStreamMetrics | undefined;
}

/**
 * The streaming events returned by a harness invocation.
 *
 * @public
 */
export type InvokeHarnessStreamOutput =
  | InvokeHarnessStreamOutput.ContentBlockDeltaMember
  | InvokeHarnessStreamOutput.ContentBlockStartMember
  | InvokeHarnessStreamOutput.ContentBlockStopMember
  | InvokeHarnessStreamOutput.HookEventMember
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
   * Indicates the start of a new message from the agent.
   *
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
    hookEvent?: never;
    $unknown?: never;
  }

  /**
   * Indicates the start of a new content block.
   *
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
    hookEvent?: never;
    $unknown?: never;
  }

  /**
   * A delta update to the current content block.
   *
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
    hookEvent?: never;
    $unknown?: never;
  }

  /**
   * Indicates the end of the current content block.
   *
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
    hookEvent?: never;
    $unknown?: never;
  }

  /**
   * Indicates the end of the current message.
   *
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
    hookEvent?: never;
    $unknown?: never;
  }

  /**
   * Token usage and latency metrics for the invocation.
   *
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
    hookEvent?: never;
    $unknown?: never;
  }

  /**
   * The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.
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
    validationException?: never;
    runtimeClientError?: never;
    hookEvent?: never;
    $unknown?: never;
  }

  /**
   * The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.
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
    validationException: ValidationException;
    runtimeClientError?: never;
    hookEvent?: never;
    $unknown?: never;
  }

  /**
   * An error returned by the runtime container during agent execution.
   *
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
    hookEvent?: never;
    $unknown?: never;
  }

  /**
   * A lifecycle hook event emitted when a configured hook runs.
   *
   * @public
   */
  export interface HookEventMember {
    messageStart?: never;
    contentBlockStart?: never;
    contentBlockDelta?: never;
    contentBlockStop?: never;
    messageStop?: never;
    metadata?: never;
    internalServerException?: never;
    validationException?: never;
    runtimeClientError?: never;
    hookEvent: HarnessHookEvent;
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
    hookEvent?: never;
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
    hookEvent: (value: HarnessHookEvent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface InvokeHarnessResponse {
  /**
   * The streaming output from the harness invocation.
   *
   * @public
   */
  stream: AsyncIterable<InvokeHarnessStreamOutput> | undefined;
}

/**
 * Specifies the record expiry (long-term memory time-to-live) applied to the records in a batch request. Provide exactly one of `recordExpiryDurationDays` or `action`. Set `recordExpiryDurationDays` to configure or update the expiry, or set `action` to `REMOVE` to remove a previously configured expiry.
 *
 * @public
 */
export type RecordExpirySpecification =
  | RecordExpirySpecification.ActionMember
  | RecordExpirySpecification.RecordExpiryDurationDaysMember
  | RecordExpirySpecification.$UnknownMember;

/**
 * @public
 */
export namespace RecordExpirySpecification {
  /**
   * The duration, in days, after which the records in this request expire. The minimum is 31 days.
   *
   * @public
   */
  export interface RecordExpiryDurationDaysMember {
    recordExpiryDurationDays: number;
    action?: never;
    $unknown?: never;
  }

  /**
   * The action to apply to the existing record expiry configuration. Set to `REMOVE` to remove a previously configured expiry so that the records no longer expire. This value does not apply when creating records.
   *
   * @public
   */
  export interface ActionMember {
    recordExpiryDurationDays?: never;
    action: RecordExpiryAction;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    recordExpiryDurationDays?: never;
    action?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    recordExpiryDurationDays: (value: number) => T;
    action: (value: RecordExpiryAction) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains the content of a memory record.
 *
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
   * The text content of the memory record.
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
 * The value of a memory record metadata entry.
 *
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
   * A string value.
   *
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
   * A list of string values.
   *
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
   * A numeric value.
   *
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
   * A timestamp value in ISO 8601 UTC format.
   *
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
 * Input structure to create a new memory record.
 *
 * @public
 */
export interface MemoryRecordCreateInput {
  /**
   * A client-provided identifier for tracking this specific record creation request.
   *
   * @public
   */
  requestIdentifier: string | undefined;

  /**
   * A list of namespace identifiers that categorize or group the memory record.
   *
   * @public
   */
  namespaces: string[] | undefined;

  /**
   * The content to be stored within the memory record.
   *
   * @public
   */
  content: MemoryContent | undefined;

  /**
   * Time at which the memory record was created.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * The ID of the memory strategy that defines how this memory record is grouped.
   *
   * @public
   */
  memoryStrategyId?: string | undefined;

  /**
   * Metadata key-value pairs to be stored with the memory record.
   *
   * @public
   */
  metadata?: Record<string, MemoryRecordMetadataValue> | undefined;
}

/**
 * @public
 */
export interface BatchCreateMemoryRecordsInput {
  /**
   * The unique ID of the memory resource where records will be created.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * A list of memory record creation inputs to be processed in the batch operation.
   *
   * @public
   */
  records: MemoryRecordCreateInput[] | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotent processing of the batch request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The record expiry (long-term memory time-to-live) applied to every record created by this request. Set `recordExpiryDurationDays` to the number of days after which the records expire. Only the expiry provided here is applied; the records' strategy association has no effect on their expiry. If you do not provide this value, the records do not expire. The `REMOVE` action does not apply when creating records.
   *
   * @public
   */
  recordExpirySpecification?: RecordExpirySpecification | undefined;
}

/**
 * Output information returned after processing a memory record operation.
 *
 * @public
 */
export interface MemoryRecordOutput {
  /**
   * The unique ID associated to the memory record.
   *
   * @public
   */
  memoryRecordId: string | undefined;

  /**
   * The status of the memory record operation (e.g., SUCCEEDED, FAILED).
   *
   * @public
   */
  status: MemoryRecordStatus | undefined;

  /**
   * The client-provided identifier that was used to track this record operation.
   *
   * @public
   */
  requestIdentifier?: string | undefined;

  /**
   * The error code returned when the memory record operation fails.
   *
   * @public
   */
  errorCode?: number | undefined;

  /**
   * A human-readable error message describing why the memory record operation failed.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateMemoryRecordsOutput {
  /**
   * A list of memory records that were successfully created during the batch operation.
   *
   * @public
   */
  successfulRecords: MemoryRecordOutput[] | undefined;

  /**
   * A list of memory records that failed to be created, including error details for each failure.
   *
   * @public
   */
  failedRecords: MemoryRecordOutput[] | undefined;
}

/**
 * Input structure to delete an existing memory record.
 *
 * @public
 */
export interface MemoryRecordDeleteInput {
  /**
   * The unique ID of the memory record to be deleted.
   *
   * @public
   */
  memoryRecordId: string | undefined;

  /**
   * The namespace of the memory record being deleted. This value is used for IAM condition key authorization.
   *
   * @public
   */
  namespace?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteMemoryRecordsInput {
  /**
   * The unique ID of the memory resource where records will be deleted.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * A list of memory record deletion inputs to be processed in the batch operation.
   *
   * @public
   */
  records: MemoryRecordDeleteInput[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteMemoryRecordsOutput {
  /**
   * A list of memory records that were successfully deleted during the batch operation.
   *
   * @public
   */
  successfulRecords: MemoryRecordOutput[] | undefined;

  /**
   * A list of memory records that failed to be deleted, including error details for each failure.
   *
   * @public
   */
  failedRecords: MemoryRecordOutput[] | undefined;
}

/**
 * Input structure to update an existing memory record.
 *
 * @public
 */
export interface MemoryRecordUpdateInput {
  /**
   * The unique ID of the memory record to be updated.
   *
   * @public
   */
  memoryRecordId: string | undefined;

  /**
   * Time at which the memory record was updated
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * The content to be stored within the memory record.
   *
   * @public
   */
  content?: MemoryContent | undefined;

  /**
   * The updated list of namespace identifiers for categorizing the memory record.
   *
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * The namespaces of the source memory record being updated. This value is used for IAM condition key authorization.
   *
   * @public
   */
  sourceNamespaces?: string[] | undefined;

  /**
   * The updated ID of the memory strategy that defines how this memory record is grouped.
   *
   * @public
   */
  memoryStrategyId?: string | undefined;

  /**
   * Metadata key-value pairs to be stored with the memory record.
   *
   * @public
   */
  metadata?: Record<string, MemoryRecordMetadataValue> | undefined;
}

/**
 * @public
 */
export interface BatchUpdateMemoryRecordsInput {
  /**
   * The unique ID of the memory resource where records will be updated.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * A list of memory record update inputs to be processed in the batch operation.
   *
   * @public
   */
  records: MemoryRecordUpdateInput[] | undefined;

  /**
   * The record expiry (long-term memory time-to-live) applied to every record updated by this request. Set `recordExpiryDurationDays` to configure or overwrite the number of days after which the records expire, or set `action` to `REMOVE` to clear a previously configured expiry so that the records no longer expire.
   *
   * When you do not provide this value, the service determines each record's expiry from its current state:
   *
   * - If the record already has an expiry configured, the service resets and reapplies the expiry based on the last applied `recordExpiryDurationDays`.
   * - If the record does not have an expiry configured, no expiry is applied and the record remains non-expiring. This is the outcome regardless of whether the record's strategy configures an expiry.
   *
   * Providing an explicit `recordExpiryDurationDays` always takes precedence: it overwrites an existing expiry, or sets one on a record that previously had none.
   *
   * @public
   */
  recordExpirySpecification?: RecordExpirySpecification | undefined;
}

/**
 * @public
 */
export interface BatchUpdateMemoryRecordsOutput {
  /**
   * A list of memory records that were successfully updated during the batch operation.
   *
   * @public
   */
  successfulRecords: MemoryRecordOutput[] | undefined;

  /**
   * A list of memory records that failed to be updated, including error details for each failure.
   *
   * @public
   */
  failedRecords: MemoryRecordOutput[] | undefined;
}

/**
 * Contains information about a branch in an AgentCore Memory resource. Branches allow for organizing events into different conversation threads or paths.
 *
 * @public
 */
export interface Branch {
  /**
   * The identifier of the root event for this branch.
   *
   * @public
   */
  rootEventId?: string | undefined;

  /**
   * The name of the branch.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * The configuration for extraction behavior. Use this structure to specify namespace variable keys and their values for namespace substitution during long-term memory extraction.
 *
 * @public
 */
export interface ExtractionConfig {
  /**
   * A map of `namespaceKeys` to their values. The service substitutes these values into `namespaceTemplates` during long-term memory extraction to control namespace hierarchy.
   *
   * @public
   */
  namespaceVariables?: Record<string, string> | undefined;
}

/**
 * Value associated with the `eventMetadata` key.
 *
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
   * Value associated with the `eventMetadata` key.
   *
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
 * Contains the content of a memory item.
 *
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
   * The text content of the memory item.
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
 * Contains conversational content for an event payload.
 *
 * @public
 */
export interface Conversational {
  /**
   * The content of the conversation message.
   *
   * @public
   */
  content: Content | undefined;

  /**
   * The role of the participant in the conversation (for example, "user" or "assistant").
   *
   * @public
   */
  role: Role | undefined;
}

/**
 * Contains non-conversational, JSON-formatted content for an event payload. JSON payloads are extracted into long-term memory.
 *
 * @public
 */
export interface MemoryJsonData {
  /**
   * The JSON content of the payload. Accepts any JSON value, including objects, arrays, strings, numbers, booleans, and null. The maximum size is 100 KB.
   *
   * @public
   */
  content: __DocumentType | undefined;
}

/**
 * Contains the payload content for an event.
 *
 * @public
 */
export type PayloadType =
  | PayloadType.BlobMember
  | PayloadType.ConversationalMember
  | PayloadType.JsonMember
  | PayloadType.$UnknownMember;

/**
 * @public
 */
export namespace PayloadType {
  /**
   * The conversational content of the payload.
   *
   * @public
   */
  export interface ConversationalMember {
    conversational: Conversational;
    blob?: never;
    json?: never;
    $unknown?: never;
  }

  /**
   * The binary content of the payload.
   *
   * @public
   */
  export interface BlobMember {
    conversational?: never;
    blob: __DocumentType;
    json?: never;
    $unknown?: never;
  }

  /**
   * The JSON content of the payload. Use this type to store non-conversational, JSON-formatted data, such as behavioral events, activity logs, or system events.
   *
   * @public
   */
  export interface JsonMember {
    conversational?: never;
    blob?: never;
    json: MemoryJsonData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    conversational?: never;
    blob?: never;
    json?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    conversational: (value: Conversational) => T;
    blob: (value: __DocumentType) => T;
    json: (value: MemoryJsonData) => T;
    _: (name: string, value: any) => T;
  }
}
