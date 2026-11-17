// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  BlockchainChainId,
  CryptoWalletNetwork,
  Currency,
  DescriptorType,
  EventFilterCondition,
  ExtractionJobStatus,
  ExtractionMode,
  HarnessConversationRole,
  HarnessHookDecision,
  HarnessHookEventType,
  HarnessStopReason,
  HarnessToolType,
  HarnessToolUseStatus,
  HarnessToolUseType,
  InstrumentBalanceToken,
  MemoryRecordOperatorType,
  MemoryRecordStatus,
  OAuthGrantType,
  OperatorType,
  PaymentInstrumentStatus,
  PaymentInstrumentType,
  PaymentSessionStatus,
  PaymentStatus,
  PaymentType,
  RecordExpiryAction,
  RegistryRecordStatus,
  Role,
} from "./enums";
import type { InternalServerException, RuntimeClientError, ValidationException } from "./errors";
import type {
  A2aDescriptor,
  ActorSummary,
  AgentSkillsDescriptor,
  HarnessAgentCoreBrowserConfig,
  HarnessMessage,
  HarnessModelConfiguration,
  HarnessSkill,
  HarnessSystemContentBlock,
  Unit,
} from "./models_0";

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
   * <p>OAuth 2.0 authentication via AgentCore Identity.</p> <p>The <code>AUTHORIZATION_CODE</code> grant type is not supported for outbound authentication from a harness to an AgentCore Gateway, even when <code>defaultReturnUrl</code> is specified.</p>
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
 * <p>An IAM credential provider for authenticating requests. This structure contains the configuration for authenticating with a target endpoint using IAM credentials and SigV4 signing.</p>
 * @public
 */
export interface IamCredentialProvider {
  /**
   * <p>The name of the Amazon Web Services service used for SigV4 signing. This value identifies the service to authenticate with when sending requests to the target endpoint.</p>
   * @public
   */
  service: string | undefined;

  /**
   * <p>The Amazon Web Services Region used for SigV4 signing. If not specified, defaults to the Region of the resource that makes the request.</p>
   * @public
   */
  region?: string | undefined;
}

/**
 * <p>Authentication method for calling a remote MCP server.</p>
 * @public
 */
export type HarnessRemoteMcpOutboundAuth =
  | HarnessRemoteMcpOutboundAuth.AwsIamMember
  | HarnessRemoteMcpOutboundAuth.NoneMember
  | HarnessRemoteMcpOutboundAuth.$UnknownMember;

/**
 * @public
 */
export namespace HarnessRemoteMcpOutboundAuth {
  /**
   * <p>Sign requests to the remote MCP server with Signature Version 4 (SigV4) using the harness execution role. If you don't specify a Region, the harness Region is used.</p>
   * @public
   */
  export interface AwsIamMember {
    awsIam: IamCredentialProvider;
    none?: never;
    $unknown?: never;
  }

  /**
   * <p>No authentication.</p>
   * @public
   */
  export interface NoneMember {
    awsIam?: never;
    none: Unit;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    awsIam?: never;
    none?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    awsIam: (value: IamCredentialProvider) => T;
    none: (value: Unit) => T;
    _: (name: string, value: any) => T;
  }
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

  /**
   * <p>How the harness authenticates to this MCP server. Defaults to no authentication.</p>
   * @public
   */
  outboundAuth?: HarnessRemoteMcpOutboundAuth | undefined;
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
   * <p>The endpoint name to invoke. If omitted, the DEFAULT endpoint is used.</p>
   * @public
   */
  qualifier?: string | undefined;

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
   * <p>W3C trace context parent header containing version, trace ID, parent span ID, and trace flags.</p>
   * @public
   */
  traceParent?: string | undefined;

  /**
   * <p>W3C trace context state header for vendor-specific trace information.</p>
   * @public
   */
  traceState?: string | undefined;

  /**
   * <p>Trace ID for maintaining observability through the operation.</p>
   * @public
   */
  traceId?: string | undefined;

  /**
   * <p>W3C Baggage header for user-defined context propagation. Format: key1=value1,key2=value2</p>
   * @public
   */
  baggage?: string | undefined;

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
 * <p>Delta payload for a tool result metadata.</p>
 * @public
 */
export interface HarnessToolResultMetadataBlockDelta {
  /**
   * <p>The partial JSON-string fragment of the tool result metadata.</p>
   * @public
   */
  metadata: string | undefined;
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
  | HarnessContentBlockDelta.ToolResultMetadataMember
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
    toolResultMetadata?: never;
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
    toolResultMetadata?: never;
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
    toolResultMetadata?: never;
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
    toolResultMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>A tool result metadata delta.</p>
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
 * <p>A lifecycle hook event emitted in the invocation stream for visibility into hook decisions.</p>
 * @public
 */
export interface HarnessHookEvent {
  /**
   * <p>The unique identifier for this hook event.</p>
   * @public
   */
  hookEventId: string | undefined;

  /**
   * <p>The name of the hook that ran.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of lifecycle hook event.</p>
   * @public
   */
  type: HarnessHookEventType | undefined;

  /**
   * <p>The decision applied to the hook event. This field is present only for blocking Lambda targets.</p>
   * @public
   */
  decision?: HarnessHookDecision | undefined;

  /**
   * <p>The optional reason for the applied decision.</p>
   * @public
   */
  reason?: string | undefined;
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
    hookEvent?: never;
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
    hookEvent?: never;
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
    hookEvent?: never;
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
    hookEvent?: never;
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
    hookEvent?: never;
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
    hookEvent?: never;
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
    hookEvent?: never;
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
    hookEvent?: never;
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
    hookEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>A lifecycle hook event emitted when a configured hook runs.</p>
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
   * <p>The streaming output from the harness invocation.</p>
   * @public
   */
  stream: AsyncIterable<InvokeHarnessStreamOutput> | undefined;
}

/**
 * <p>The domains to include in or exclude from the results. A root domain also matches its subdomains. For example, <code>example.com</code> also matches <code>docs.example.com</code>.</p>
 * @public
 */
export interface DomainFilter {
  /**
   * <p>The domains to return results from. Results from other domains are not returned.</p>
   * @public
   */
  include?: string[] | undefined;

  /**
   * <p>The domains to never return results from.</p>
   * @public
   */
  exclude?: string[] | undefined;
}

/**
 * <p>A publication time range for the results. Both bounds are optional, and both are inclusive. If <code>publishedAfter</code> is later than <code>publishedBefore</code>, the request fails with a <code>ValidationException</code>.</p>
 * @public
 */
export interface PublishedDateFilter {
  /**
   * <p>The earliest publication time of the results, inclusive.</p>
   * @public
   */
  publishedAfter?: Date | undefined;

  /**
   * <p>The latest publication time of the results, inclusive. A date without a time, such as one passed to the AWS CLI, means midnight UTC. To include a whole day, use the last second of that day, for example <code>2026-01-31T23:59:59Z</code>.</p>
   * @public
   */
  publishedBefore?: Date | undefined;
}

/**
 * <p>The filters to apply to a web search.</p>
 * @public
 */
export interface WebSearchFilters {
  /**
   * <p>The domains to include in or exclude from the results.</p>
   * @public
   */
  domainFilter?: DomainFilter | undefined;

  /**
   * <p>The publication time range of the results.</p>
   * @public
   */
  publishedDateFilter?: PublishedDateFilter | undefined;
}

/**
 * <p>Request for the <code>InvokeWebSearch</code> operation.</p>
 * @public
 */
export interface InvokeWebSearchInput {
  /**
   * <p>The identifier of the web search tool to invoke. The Amazon Web Services-managed web search tool is <code>web-search.v1</code>.</p>
   * @public
   */
  webSearchId: string | undefined;

  /**
   * <p>The text to search for.</p>
   * @public
   */
  searchQuery: string | undefined;

  /**
   * <p>The maximum number of results to return. Defaults to 25.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The filters to apply to the search results.</p>
   * @public
   */
  filters?: WebSearchFilters | undefined;
}

/**
 * <p>A web search result.</p>
 * @public
 */
export interface WebSearchResult {
  /**
   * <p>The title of the page.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The URL of the page.</p>
   * @public
   */
  url?: string | undefined;

  /**
   * <p>A text extract from the page.</p>
   * @public
   */
  text: string | undefined;

  /**
   * <p>The time the page was published. This field is absent when the publication time is not known.</p>
   * @public
   */
  publishedAt?: Date | undefined;
}

/**
 * <p>Response for the <code>InvokeWebSearch</code> operation.</p>
 * @public
 */
export interface InvokeWebSearchOutput {
  /**
   * <p>The search results, in ranked order.</p>
   * @public
   */
  results: WebSearchResult[] | undefined;
}

/**
 * <p>Specifies the record expiry (long-term memory time-to-live) applied to the records in a batch request. Provide exactly one of <code>recordExpiryDurationDays</code> or <code>action</code>. Set <code>recordExpiryDurationDays</code> to configure or update the expiry, or set <code>action</code> to <code>REMOVE</code> to remove a previously configured expiry.</p>
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
   * <p>The duration, in days, after which the records in this request expire. The minimum is 31 days.</p>
   * @public
   */
  export interface RecordExpiryDurationDaysMember {
    recordExpiryDurationDays: number;
    action?: never;
    $unknown?: never;
  }

  /**
   * <p>The action to apply to the existing record expiry configuration. Set to <code>REMOVE</code> to remove a previously configured expiry so that the records no longer expire. This value does not apply when creating records.</p>
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

  /**
   * <p>The record expiry (long-term memory time-to-live) applied to every record created by this request. Set <code>recordExpiryDurationDays</code> to the number of days after which the records expire. Only the expiry provided here is applied; the records' strategy association has no effect on their expiry. If you do not provide this value, the records do not expire. The <code>REMOVE</code> action does not apply when creating records.</p>
   * @public
   */
  recordExpirySpecification?: RecordExpirySpecification | undefined;
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

  /**
   * <p>The namespace of the memory record being deleted. This value is used for IAM condition key authorization.</p>
   * @public
   */
  namespace?: string | undefined;
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
   * <p>The namespaces of the source memory record being updated. This value is used for IAM condition key authorization.</p>
   * @public
   */
  sourceNamespaces?: string[] | undefined;

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

  /**
   * <p>The record expiry (long-term memory time-to-live) applied to every record updated by this request. Set <code>recordExpiryDurationDays</code> to configure or overwrite the number of days after which the records expire, or set <code>action</code> to <code>REMOVE</code> to clear a previously configured expiry so that the records no longer expire.</p> <p>When you do not provide this value, the service determines each record's expiry from its current state:</p> <ul> <li> <p>If the record already has an expiry configured, the service resets and reapplies the expiry based on the last applied <code>recordExpiryDurationDays</code>.</p> </li> <li> <p>If the record does not have an expiry configured, no expiry is applied and the record remains non-expiring. This is the outcome regardless of whether the record's strategy configures an expiry.</p> </li> </ul> <p>Providing an explicit <code>recordExpiryDurationDays</code> always takes precedence: it overwrites an existing expiry, or sets one on a record that previously had none.</p>
   * @public
   */
  recordExpirySpecification?: RecordExpirySpecification | undefined;
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
 * <p>The configuration for extraction behavior. Use this structure to specify namespace variable keys and their values for namespace substitution during long-term memory extraction.</p>
 * @public
 */
export interface ExtractionConfig {
  /**
   * <p>A map of <code>namespaceKeys</code> to their values. The service substitutes these values into <code>namespaceTemplates</code> during long-term memory extraction to control namespace hierarchy.</p>
   * @public
   */
  namespaceVariables?: Record<string, string> | undefined;
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
 * <p>Contains non-conversational, JSON-formatted content for an event payload. JSON payloads are extracted into long-term memory.</p>
 * @public
 */
export interface MemoryJsonData {
  /**
   * <p>The JSON content of the payload. Accepts any JSON value, including objects, arrays, strings, numbers, booleans, and null. The maximum size is 100 KB.</p>
   * @public
   */
  content: __DocumentType | undefined;
}

/**
 * <p>Contains the payload content for an event.</p>
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
   * <p>The conversational content of the payload.</p>
   * @public
   */
  export interface ConversationalMember {
    conversational: Conversational;
    blob?: never;
    json?: never;
    $unknown?: never;
  }

  /**
   * <p>The binary content of the payload.</p>
   * @public
   */
  export interface BlobMember {
    conversational?: never;
    blob: __DocumentType;
    json?: never;
    $unknown?: never;
  }

  /**
   * <p>The JSON content of the payload. Use this type to store non-conversational, JSON-formatted data, such as behavioral events, activity logs, or system events.</p>
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
   * <p>The content payload of the event. This can include conversational data, JSON data, or binary content.</p>
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

  /**
   * <p>Controls long-term memory extraction for this event. When set to <code>SKIP</code>, the event is stored in short-term memory but is excluded from long-term memory extraction. If not specified, the event is processed for extraction as usual.</p>
   * @public
   */
  extractionMode?: ExtractionMode | undefined;

  /**
   * <p>The extraction configuration for long-term memory records. Use this parameter to specify namespace variable keys and their values for namespace substitution during extraction.</p>
   * @public
   */
  extractionConfig?: ExtractionConfig | undefined;
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

  /**
   * <p>The namespace of the memory record to delete. This value is used for IAM condition key authorization.</p>
   * @public
   */
  namespace?: string | undefined;
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

  /**
   * <p>The namespace of the memory record to retrieve. This value is used for IAM condition key authorization.</p>
   * @public
   */
  namespace?: string | undefined;
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
   * <p>The timestamp based on which the memory record was ingested. This reflects the time of the source content that the record was derived from, which can differ from <code>createdAt</code>, the time the record itself was written.</p>
   * @public
   */
  timestamp?: Date | undefined;

  /**
   * <p>A map of metadata key-value pairs associated with a memory record.</p>
   * @public
   */
  metadata?: Record<string, MemoryRecordMetadataValue> | undefined;

  /**
   * <p>The timestamp at which the memory record expires and becomes eligible for deletion. This value is set when a record expiry (long-term memory time-to-live) applies to the record, either from the strategy the record belongs to or from a record expiry provided on the batch request that created or updated it. If the record has no expiry configured, this value is not present and the record does not expire.</p>
   * @public
   */
  expiresAt?: Date | undefined;
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
 * <p>A single content payload item to ingest. A payload item contains either conversational or JSON content.</p>
 * @public
 */
export type IngestPayloadType =
  | IngestPayloadType.ConversationalMember
  | IngestPayloadType.JsonMember
  | IngestPayloadType.$UnknownMember;

/**
 * @public
 */
export namespace IngestPayloadType {
  /**
   * <p>The conversational content for this payload item.</p>
   * @public
   */
  export interface ConversationalMember {
    conversational: Conversational;
    json?: never;
    $unknown?: never;
  }

  /**
   * <p>The JSON content for this payload item.</p>
   * @public
   */
  export interface JsonMember {
    conversational?: never;
    json: MemoryJsonData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    conversational?: never;
    json?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    conversational: (value: Conversational) => T;
    json: (value: MemoryJsonData) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The content included directly in the request as one or more payload items.</p>
 * @public
 */
export interface InlineMemoryContent {
  /**
   * <p>The list of content payload items to ingest.</p>
   * @public
   */
  payload: IngestPayloadType[] | undefined;
}

/**
 * <p>The source of the content to ingest. Only inline content is supported.</p>
 * @public
 */
export type ContentSource =
  | ContentSource.InlineMember
  | ContentSource.$UnknownMember;

/**
 * @public
 */
export namespace ContentSource {
  /**
   * <p>The content included directly in the request.</p>
   * @public
   */
  export interface InlineMember {
    inline: InlineMemoryContent;
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
    inline: (value: InlineMemoryContent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface IngestDataInput {
  /**
   * <p>The identifier of the AgentCore Memory resource to ingest content into.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The content to ingest. Only inline content is supported.</p>
   * @public
   */
  source: ContentSource | undefined;

  /**
   * <p>The timestamp of when the content occurred.</p>
   * @public
   */
  contentTimestamp: Date | undefined;

  /**
   * <p>The identifier of the actor associated with this content. An actor represents an entity that participates in sessions and generates content.</p>
   * @public
   */
  actorId: string | undefined;

  /**
   * <p>The identifier of the session that the content belongs to. If not provided, a session identifier is generated and returned in the response.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The extraction configuration for long-term memory records. Use this parameter to specify namespace variable keys and their values for namespace substitution during extraction.</p>
   * @public
   */
  extractionConfig?: ExtractionConfig | undefined;

  /**
   * <p>The key-value metadata to attach to the content.</p>
   * @public
   */
  metadata?: Record<string, MetadataValue> | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, AgentCore ignores the request, but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface IngestDataOutput {
  /**
   * <p>The identifier of the session that the service ingested the content into. This value echoes the session identifier from the request, or the identifier that the service generated when you did not provide one.</p>
   * @public
   */
  sessionId: string | undefined;
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
   * <p>The exact namespace to filter memory records by. Returns all memory records that matches the provided namespace. Either <code>namespace</code> or <code>namespacePath</code> is required.</p>
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
   * <p>The timestamp based on which the memory record was ingested. This reflects the time of the source content that the record was derived from, which can differ from <code>createdAt</code>, the time the record itself was written.</p>
   * @public
   */
  timestamp?: Date | undefined;

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

/**
 * <p>Contains filter criteria for listing sessions.</p>
 * @public
 */
export interface SessionFilter {
  /**
   * <p>The event filter condition to apply. Use this to filter sessions based on event presence.</p>
   * @public
   */
  eventFilter?: EventFilterCondition | undefined;
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

  /**
   * <p>Filter criteria to apply when listing sessions.</p>
   * @public
   */
  filter?: SessionFilter | undefined;
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
   * <p>The exact namespace to filter memory records by. Searches for memory records that matches the provided namespace value. Either <code>namespace</code> or <code>namespacePath</code> is required.</p>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>Use namespacePath for hierarchical retrievals. Return all memory records where namespace falls under the same parent hierarchy. Either <code>namespace</code> or <code>namespacePath</code> is required.</p>
   * @public
   */
  namespacePath?: string | undefined;

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

/**
 * <p>Authentication method using JWT with key ID and subject claims.</p>
 * @public
 */
export interface LinkedAccountDeveloperJwt {
  /**
   * <p>The key ID (kid) from the JWT header. Identifies which key was used to sign the JWT.</p>
   * @public
   */
  kid: string | undefined;

  /**
   * <p>The subject (sub) claim from the JWT payload. Identifies the principal that is the subject of the JWT.</p>
   * @public
   */
  sub: string | undefined;
}

/**
 * <p>Linked account using an email address.</p>
 * @public
 */
export interface LinkedAccountEmail {
  /**
   * <p>The email address used for the linked account. Must be a valid email format.</p>
   * @public
   */
  emailAddress: string | undefined;
}

/**
 * <p>OAuth2 authentication information for third-party providers.</p>
 * @public
 */
export interface OAuth2Authentication {
  /**
   * <p>The subject (sub) claim from the OAuth2 provider. Uniquely identifies the user at the provider.</p>
   * @public
   */
  sub: string | undefined;

  /**
   * <p>The email address from the OAuth2 provider.</p>
   * @public
   */
  emailAddress?: string | undefined;

  /**
   * <p>The user's name from the OAuth2 provider.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The username from the OAuth2 provider.</p>
   * @public
   */
  username?: string | undefined;
}

/**
 * <p>Authentication method using OAuth2 providers. Supports Google, Apple, X, Telegram, and GitHub providers.</p>
 * @public
 */
export type LinkedAccountOAuth2 =
  | LinkedAccountOAuth2.AppleMember
  | LinkedAccountOAuth2.GithubMember
  | LinkedAccountOAuth2.GoogleMember
  | LinkedAccountOAuth2.TelegramMember
  | LinkedAccountOAuth2.XMember
  | LinkedAccountOAuth2.$UnknownMember;

/**
 * @public
 */
export namespace LinkedAccountOAuth2 {
  /**
   * <p>Google OAuth2 authentication.</p>
   * @public
   */
  export interface GoogleMember {
    google: OAuth2Authentication;
    apple?: never;
    x?: never;
    telegram?: never;
    github?: never;
    $unknown?: never;
  }

  /**
   * <p>Apple OAuth2 authentication.</p>
   * @public
   */
  export interface AppleMember {
    google?: never;
    apple: OAuth2Authentication;
    x?: never;
    telegram?: never;
    github?: never;
    $unknown?: never;
  }

  /**
   * <p>X (formerly Twitter) OAuth2 authentication.</p>
   * @public
   */
  export interface XMember {
    google?: never;
    apple?: never;
    x: OAuth2Authentication;
    telegram?: never;
    github?: never;
    $unknown?: never;
  }

  /**
   * <p>Telegram OAuth2 authentication.</p>
   * @public
   */
  export interface TelegramMember {
    google?: never;
    apple?: never;
    x?: never;
    telegram: OAuth2Authentication;
    github?: never;
    $unknown?: never;
  }

  /**
   * <p>GitHub OAuth2 authentication.</p>
   * @public
   */
  export interface GithubMember {
    google?: never;
    apple?: never;
    x?: never;
    telegram?: never;
    github: OAuth2Authentication;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    google?: never;
    apple?: never;
    x?: never;
    telegram?: never;
    github?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    google: (value: OAuth2Authentication) => T;
    apple: (value: OAuth2Authentication) => T;
    x: (value: OAuth2Authentication) => T;
    telegram: (value: OAuth2Authentication) => T;
    github: (value: OAuth2Authentication) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Linked account using a phone number in E.164 format.</p>
 * @public
 */
export interface LinkedAccountSms {
  /**
   * <p>The phone number in E.164 format (e.g., +1234567890).</p>
   * @public
   */
  phoneNumber: string | undefined;
}

/**
 * <p>Represents different linked accounts that can be linked to an embedded wallet. Supports email, SMS, JWT, and OAuth2 approaches.</p>
 * @public
 */
export type LinkedAccount =
  | LinkedAccount.DeveloperJwtMember
  | LinkedAccount.EmailMember
  | LinkedAccount.OAuth2Member
  | LinkedAccount.SmsMember
  | LinkedAccount.$UnknownMember;

/**
 * @public
 */
export namespace LinkedAccount {
  /**
   * <p>Email-based linked account.</p>
   * @public
   */
  export interface EmailMember {
    email: LinkedAccountEmail;
    sms?: never;
    developerJwt?: never;
    oAuth2?: never;
    $unknown?: never;
  }

  /**
   * <p>SMS-based linked account using phone number.</p>
   * @public
   */
  export interface SmsMember {
    email?: never;
    sms: LinkedAccountSms;
    developerJwt?: never;
    oAuth2?: never;
    $unknown?: never;
  }

  /**
   * <p>Developer JWT linked account with key ID and subject.</p>
   * @public
   */
  export interface DeveloperJwtMember {
    email?: never;
    sms?: never;
    developerJwt: LinkedAccountDeveloperJwt;
    oAuth2?: never;
    $unknown?: never;
  }

  /**
   * <p>OAuth2 provider linked account (Google, Apple, X, Telegram, GitHub).</p>
   * @public
   */
  export interface OAuth2Member {
    email?: never;
    sms?: never;
    developerJwt?: never;
    oAuth2: LinkedAccountOAuth2;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    email?: never;
    sms?: never;
    developerJwt?: never;
    oAuth2?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    email: (value: LinkedAccountEmail) => T;
    sms: (value: LinkedAccountSms) => T;
    developerJwt: (value: LinkedAccountDeveloperJwt) => T;
    oAuth2: (value: LinkedAccountOAuth2) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Embedded crypto wallet instrument details.</p>
 * @public
 */
export interface EmbeddedCryptoWallet {
  /**
   * <p>The blockchain network for this embedded crypto wallet. Supported networks: ETHEREUM, SOLANA.</p>
   * @public
   */
  network: CryptoWalletNetwork | undefined;

  /**
   * <p>List of linked accounts linked to this wallet. Each represents a way the end user can authenticate to this wallet.</p>
   * @public
   */
  linkedAccounts: LinkedAccount[] | undefined;

  /**
   * <p>The wallet address on the specified blockchain network.</p>
   * @public
   */
  walletAddress?: string | undefined;

  /**
   * <p>URL for the end user to complete a provider-specific action such as wallet linking or onboarding.</p>
   * @public
   */
  redirectUrl?: string | undefined;
}

/**
 * <p>Details specific to the instrument type.</p>
 * @public
 */
export type PaymentInstrumentDetails =
  | PaymentInstrumentDetails.EmbeddedCryptoWalletMember
  | PaymentInstrumentDetails.$UnknownMember;

/**
 * @public
 */
export namespace PaymentInstrumentDetails {
  /**
   * <p>Embedded crypto wallet managed directly by end user.</p>
   * @public
   */
  export interface EmbeddedCryptoWalletMember {
    embeddedCryptoWallet: EmbeddedCryptoWallet;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    embeddedCryptoWallet?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    embeddedCryptoWallet: (value: EmbeddedCryptoWallet) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Request structure for creating a payment instrument.</p>
 * @public
 */
export interface CreatePaymentInstrumentRequest {
  /**
   * <p>The user ID associated with this payment instrument.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The agent name associated with this request, used for observability.</p>
   * @public
   */
  agentName?: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns this payment instrument.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The ID of the payment connector to use for this instrument.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>The type of payment instrument being created.</p>
   * @public
   */
  paymentInstrumentType: PaymentInstrumentType | undefined;

  /**
   * <p>The details of the payment instrument.</p>
   * @public
   */
  paymentInstrumentDetails: PaymentInstrumentDetails | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Represents a payment instrument.</p>
 * @public
 */
export interface PaymentInstrument {
  /**
   * <p>The unique identifier for this payment instrument.</p>
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns this payment instrument.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The ID of the payment connector associated with this instrument.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>The user ID associated with this payment instrument.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>The type of payment instrument (e.g., EMBEDDED_CRYPTO_WALLET).</p>
   * @public
   */
  paymentInstrumentType: PaymentInstrumentType | undefined;

  /**
   * <p>The details specific to the payment instrument type.</p>
   * @public
   */
  paymentInstrumentDetails: PaymentInstrumentDetails | undefined;

  /**
   * <p>The timestamp when this payment instrument was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The current status of this payment instrument.</p>
   * @public
   */
  status: PaymentInstrumentStatus | undefined;

  /**
   * <p>The timestamp when this payment instrument was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Response structure for creating a payment instrument.</p>
 * @public
 */
export interface CreatePaymentInstrumentResponse {
  /**
   * <p>The created payment instrument.</p>
   * @public
   */
  paymentInstrument: PaymentInstrument | undefined;
}

/**
 * <p>Request structure for deleting a payment instrument.</p>
 * @public
 */
export interface DeletePaymentInstrumentRequest {
  /**
   * <p>The user ID making the delete request. Must match the instrument's userId.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The payment manager ARN. Must match the instrument's paymentManagerArn.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The payment connector ID. Must match the instrument's paymentConnectorId.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>The payment instrument ID to delete.</p>
   * @public
   */
  paymentInstrumentId: string | undefined;
}

/**
 * <p>Response structure for deleting a payment instrument.</p>
 * @public
 */
export interface DeletePaymentInstrumentResponse {
  /**
   * <p>The status of the instrument after deletion. Always DELETED for successful soft delete.</p>
   * @public
   */
  status: PaymentInstrumentStatus | undefined;
}

/**
 * <p>Request structure for getting a payment instrument.</p>
 * @public
 */
export interface GetPaymentInstrumentRequest {
  /**
   * <p>The user ID associated with this payment instrument.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The agent name associated with this request, used for observability.</p>
   * @public
   */
  agentName?: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns this payment instrument.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The ID of the payment connector.</p>
   * @public
   */
  paymentConnectorId?: string | undefined;

  /**
   * <p>The ID of the payment instrument to retrieve.</p>
   * @public
   */
  paymentInstrumentId: string | undefined;
}

/**
 * <p>Response structure for getting a payment instrument.</p>
 * @public
 */
export interface GetPaymentInstrumentResponse {
  /**
   * <p>The payment instrument details.</p>
   * @public
   */
  paymentInstrument: PaymentInstrument | undefined;
}

/**
 * <p>Request structure for getting payment instrument balance.</p>
 * @public
 */
export interface GetPaymentInstrumentBalanceRequest {
  /**
   * <p>The user ID associated with this payment instrument.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The agent name associated with this request, used for observability.</p>
   * @public
   */
  agentName?: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns this payment instrument.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The ID of the payment connector associated with this instrument.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>The ID of the payment instrument to query balance for.</p>
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * <p>The specific blockchain chain to query balance on. Required because balances are chain-specific.</p>
   * @public
   */
  chain: BlockchainChainId | undefined;

  /**
   * <p>The token to query balance for. Only tokens supported for X402 payments are returned.</p>
   * @public
   */
  token: InstrumentBalanceToken | undefined;
}

/**
 * <p>A single token balance entry.</p>
 * @public
 */
export interface TokenBalance {
  /**
   * <p>Raw balance in the smallest denomination (e.g., USDC base units where 1 USDC = 1000000).</p>
   * @public
   */
  amount: string | undefined;

  /**
   * <p>Number of decimal places for the token (e.g., 6 for USDC).</p>
   * @public
   */
  decimals: number | undefined;

  /**
   * <p>The supported token for this balance.</p>
   * @public
   */
  token: InstrumentBalanceToken | undefined;

  /**
   * <p>The blockchain network family (ETHEREUM or SOLANA).</p>
   * @public
   */
  network: CryptoWalletNetwork | undefined;

  /**
   * <p>The specific blockchain chain.</p>
   * @public
   */
  chain: BlockchainChainId | undefined;
}

/**
 * <p>Response structure for getting payment instrument balance.</p>
 * @public
 */
export interface GetPaymentInstrumentBalanceResponse {
  /**
   * <p>The ID of the payment instrument.</p>
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * <p>The balance of the supported token on the requested chain.</p>
   * @public
   */
  tokenBalance: TokenBalance | undefined;
}

/**
 * <p>Request structure for listing payment instruments.</p>
 * @public
 */
export interface ListPaymentInstrumentsRequest {
  /**
   * <p>The user ID associated with the payment instruments.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The agent name associated with this request, used for observability.</p>
   * @public
   */
  agentName?: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns the payment instruments.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The ID of the payment connector to filter by.</p>
   * @public
   */
  paymentConnectorId?: string | undefined;

  /**
   * <p>Token for pagination to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary of a payment instrument for list operations.</p>
 * @public
 */
export interface PaymentInstrumentSummary {
  /**
   * <p>The unique identifier for this payment instrument.</p>
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns this payment instrument.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The ID of the payment connector associated with this instrument.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>The user ID associated with this payment instrument.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>The type of payment instrument (e.g., EMBEDDED_CRYPTO_WALLET).</p>
   * @public
   */
  paymentInstrumentType: PaymentInstrumentType | undefined;

  /**
   * <p>The current status of this payment instrument.</p>
   * @public
   */
  status: PaymentInstrumentStatus | undefined;

  /**
   * <p>The timestamp when this payment instrument was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when this payment instrument was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Response structure for listing payment instruments.</p>
 * @public
 */
export interface ListPaymentInstrumentsResponse {
  /**
   * <p>List of payment instrument summaries matching the request criteria.</p>
   * @public
   */
  paymentInstruments: PaymentInstrumentSummary[] | undefined;

  /**
   * <p>Token for pagination to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents a monetary amount with a currency.</p>
 * @public
 */
export interface Amount {
  /**
   * <p>The numeric value of the amount.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The currency code for the amount.</p>
   * @public
   */
  currency: Currency | undefined;
}

/**
 * <p>The spending limits configuration for a payment session.</p>
 * @public
 */
export interface SessionLimits {
  /**
   * <p>The maximum amount that can be spent in the session.</p>
   * @public
   */
  maxSpendAmount: Amount | undefined;
}

/**
 * <p>Request structure for creating a payment session.</p>
 * @public
 */
export interface CreatePaymentSessionRequest {
  /**
   * <p>The user ID associated with this payment session.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The agent name associated with this request, used for observability.</p>
   * @public
   */
  agentName?: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns this session.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The spending limits for this payment session.</p>
   * @public
   */
  limits?: SessionLimits | undefined;

  /**
   * <p>The session expiry time in minutes. Must be between 15 and 480 minutes.</p>
   * @public
   */
  expiryTimeInMinutes: number | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The available spending limits for a payment session.</p>
 * @public
 */
export interface AvailableLimits {
  /**
   * <p>The remaining available amount that can be spent.</p>
   * @public
   */
  availableSpendAmount?: Amount | undefined;

  /**
   * <p>The timestamp when the available limits were last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>A payment session for managing payment transactions.</p>
 * @public
 */
export interface PaymentSession {
  /**
   * <p>The unique identifier of the payment session.</p>
   * @public
   */
  paymentSessionId: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns this session.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The spending limits for the payment session.</p>
   * @public
   */
  limits?: SessionLimits | undefined;

  /**
   * <p>The user ID associated with this session.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>The session expiry time in minutes.</p>
   * @public
   */
  expiryTimeInMinutes: number | undefined;

  /**
   * <p>The timestamp when the session was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The current available spending limits.</p>
   * @public
   */
  availableLimits?: AvailableLimits | undefined;

  /**
   * <p>The timestamp when the session was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Response structure for creating a payment session.</p>
 * @public
 */
export interface CreatePaymentSessionResponse {
  /**
   * <p>The created payment session.</p>
   * @public
   */
  paymentSession: PaymentSession | undefined;
}

/**
 * <p>Request structure for deleting a payment session.</p>
 * @public
 */
export interface DeletePaymentSessionRequest {
  /**
   * <p>The user ID making the delete request. Must match the session's userId.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The payment manager ARN. Must match the session's paymentManagerArn.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The payment session ID to delete.</p>
   * @public
   */
  paymentSessionId: string | undefined;
}

/**
 * <p>Response structure for deleting a payment session.</p>
 * @public
 */
export interface DeletePaymentSessionResponse {
  /**
   * <p>The status of the deletion. Always DELETED for successful hard delete.</p>
   * @public
   */
  status: PaymentSessionStatus | undefined;
}

/**
 * <p>Request structure for getting a payment session.</p>
 * @public
 */
export interface GetPaymentSessionRequest {
  /**
   * <p>The user ID associated with this payment session.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The agent name associated with this request, used for observability.</p>
   * @public
   */
  agentName?: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns this session.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The ID of the payment session to retrieve.</p>
   * @public
   */
  paymentSessionId: string | undefined;
}

/**
 * <p>Response structure for getting a payment session.</p>
 * @public
 */
export interface GetPaymentSessionResponse {
  /**
   * <p>The payment session details.</p>
   * @public
   */
  paymentSession: PaymentSession | undefined;
}

/**
 * <p>Request structure for listing payment sessions.</p>
 * @public
 */
export interface ListPaymentSessionsRequest {
  /**
   * <p>The user ID associated with the payment sessions.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The agent name associated with this request, used for observability.</p>
   * @public
   */
  agentName?: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns the sessions.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>Token for pagination to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary information about a payment session.</p>
 * @public
 */
export interface PaymentSessionSummary {
  /**
   * <p>The unique identifier of the payment session.</p>
   * @public
   */
  paymentSessionId: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns this session.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The user ID associated with this session.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>The session expiry time in minutes.</p>
   * @public
   */
  expiryTimeInMinutes: number | undefined;

  /**
   * <p>The timestamp when the session was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the session was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Response structure for listing payment sessions.</p>
 * @public
 */
export interface ListPaymentSessionsResponse {
  /**
   * <p>List of payment session summaries matching the request criteria.</p>
   * @public
   */
  paymentSessions: PaymentSessionSummary[] | undefined;

  /**
   * <p>Token for pagination to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The input for a crypto X402 payment.</p>
 * @public
 */
export interface CryptoX402PaymentInput {
  /**
   * <p>The version of the X402 protocol.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The X402 payment payload.</p>
   * @public
   */
  payload: __DocumentType | undefined;

  /**
   * <p>The maximum on-chain Permit2 allowance to grant before signing the payment authorization, in the asset's smallest denomination. This field is valid only for the <code>upto</code> (metered) scheme; supplying it for the <code>exact</code> scheme returns a validation error.</p> <p>When set, the service approves an ERC-20 allowance for this amount before processing the payment. The approval sets, rather than adds to, the wallet's allowance. Set this field only when the wallet needs approving, for example on its first <code>upto</code> payment, to avoid a redundant on-chain transaction. Omit the field to skip allowance handling. This is the default, and the only behavior for the <code>exact</code> scheme.</p>
   * @public
   */
  permit2AllowanceLimit?: string | undefined;
}

/**
 * <p>Contains the payment challenge from a 402 Payment Required response. Forward the raw <code>WWW-Authenticate: Payment</code> header value verbatim. In response, you receive a payment credential that satisfies the challenge. Provide exactly one challenge per request.</p>
 * @public
 */
export interface MppPaymentInput {
  /**
   * <p>The MPP protocol version, for example "1" or "2".</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The raw <code>WWW-Authenticate: Payment</code> header value from the 402 response, passed verbatim. Provide exactly one entry. The service uses this value to generate the payment credential.</p>
   * @public
   */
  wwwAuthenticateHeaders: string[] | undefined;

  /**
   * <p>Authorizes the service to sign a payment whose blockchain network (gas) fees are charged to your wallet, on top of the payment amount.</p> <p>The challenge indicates who sponsors the network fees. When the challenge does not sponsor them, the service signs the payment only if this field is <code>true</code>. Otherwise it returns a validation error, so you can decide whether to pay the fees or obtain a challenge that sponsors them.</p> <p>Optional. When omitted or <code>false</code>, you decline to pay network fees. This field has no effect on challenges that already sponsor the fees.</p>
   * @public
   */
  buyerPaysGasFees?: boolean | undefined;
}

/**
 * <p>The payment input details, which vary by payment type.</p>
 * @public
 */
export type PaymentInput =
  | PaymentInput.CryptoX402Member
  | PaymentInput.MppMember
  | PaymentInput.$UnknownMember;

/**
 * @public
 */
export namespace PaymentInput {
  /**
   * <p>Input for a crypto X402 payment.</p>
   * @public
   */
  export interface CryptoX402Member {
    cryptoX402: CryptoX402PaymentInput;
    mpp?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains the payment challenge from a 402 Payment Required response. Forward the raw <code>WWW-Authenticate: Payment</code> header value verbatim. In response, you receive a payment credential that satisfies the challenge. Provide exactly one challenge per request.</p>
   * @public
   */
  export interface MppMember {
    cryptoX402?: never;
    mpp: MppPaymentInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cryptoX402?: never;
    mpp?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cryptoX402: (value: CryptoX402PaymentInput) => T;
    mpp: (value: MppPaymentInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Request structure for processing a payment.</p>
 * @public
 */
export interface ProcessPaymentRequest {
  /**
   * <p>The user ID associated with this payment.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The agent name associated with this request, used for observability.</p>
   * @public
   */
  agentName?: string | undefined;

  /**
   * <p>The ARN of the payment manager.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The ID of the payment session.</p>
   * @public
   */
  paymentSessionId: string | undefined;

  /**
   * <p>The ID of the payment instrument to use.</p>
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * <p>The type of payment to process.</p>
   * @public
   */
  paymentType: PaymentType | undefined;

  /**
   * <p>The payment input details specific to the payment type.</p>
   * @public
   */
  paymentInput: PaymentInput | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The output from a crypto X402 payment.</p>
 * @public
 */
export interface CryptoX402PaymentOutput {
  /**
   * <p>The version of the X402 protocol.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The X402 payment response payload.</p>
   * @public
   */
  payload: __DocumentType | undefined;
}

/**
 * <p>Contains the payment credential, ready to retry the request.</p>
 * @public
 */
export interface MppPaymentOutput {
  /**
   * <p>The MPP protocol version, for example "1" or "2".</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The id of the challenge that was paid, echoed from the input challenge so you can correlate the result without decoding the credential.</p>
   * @public
   */
  selectedPaymentId: string | undefined;

  /**
   * <p>Ready-to-send value for the <code>Authorization</code> header, in the form "Payment &lt;base64url-token&gt;". Attach this header and retry the original request. To inspect the full credential, base64url-decode the token.</p>
   * @public
   */
  paymentCredential: string | undefined;
}

/**
 * <p>The payment output details, which vary by payment type.</p>
 * @public
 */
export type PaymentOutput =
  | PaymentOutput.CryptoX402Member
  | PaymentOutput.MppMember
  | PaymentOutput.$UnknownMember;

/**
 * @public
 */
export namespace PaymentOutput {
  /**
   * <p>Output from a crypto X402 payment.</p>
   * @public
   */
  export interface CryptoX402Member {
    cryptoX402: CryptoX402PaymentOutput;
    mpp?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains the payment credential, ready to retry the request.</p>
   * @public
   */
  export interface MppMember {
    cryptoX402?: never;
    mpp: MppPaymentOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cryptoX402?: never;
    mpp?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cryptoX402: (value: CryptoX402PaymentOutput) => T;
    mpp: (value: MppPaymentOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Response structure for processing a payment.</p>
 * @public
 */
export interface ProcessPaymentResponse {
  /**
   * <p>The unique identifier of the processed payment.</p>
   * @public
   */
  processPaymentId: string | undefined;

  /**
   * <p>The ARN of the payment manager.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The ID of the payment session used.</p>
   * @public
   */
  paymentSessionId: string | undefined;

  /**
   * <p>The ID of the payment instrument used.</p>
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * <p>The type of payment processed.</p>
   * @public
   */
  paymentType: PaymentType | undefined;

  /**
   * <p>The status of the payment.</p>
   * @public
   */
  status: PaymentStatus | undefined;

  /**
   * <p>The payment output details specific to the payment type.</p>
   * @public
   */
  paymentOutput: PaymentOutput | undefined;

  /**
   * <p>The timestamp when the payment was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the payment was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface SearchRegistryRecordsRequest {
  /**
   * <p> The search query to find matching registry records.</p>
   * @public
   */
  searchQuery: string | undefined;

  /**
   * <p> The list of registry identifiers to search within. Currently, you can specify exactly one registry identifier. You can provide either the full Amazon Web Services Resource Name (ARN) or the 12-character alphanumeric registry ID.</p>
   * @public
   */
  registryIds: string[] | undefined;

  /**
   * <p> The maximum number of records to return in a single call. Valid values are 1 through 20. The default value is 10.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> A metadata filter expression to narrow search results. Uses structured JSON operators including field-level operators (<code>$eq</code>, <code>$ne</code>, <code>$in</code>) and logical operators (<code>$and</code>, <code>$or</code>) on filterable fields (<code>name</code>, <code>descriptorType</code>, <code>version</code>). For example, to filter by descriptor type: <code>\{"descriptorType": \{"$eq": "MCP"\}\}</code>. To combine filters: <code>\{"$and": [\{"descriptorType": \{"$eq": "MCP"\}\}, \{"name": \{"$eq": "my-tool"\}\}]\}</code>.</p>
   * @public
   */
  filters?: __DocumentType | undefined;
}

/**
 * <p> A custom descriptor configuration for a registry record.</p>
 * @public
 */
export interface CustomDescriptor {
  /**
   * <p> The inline content of the custom descriptor.</p>
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * <p> The MCP server definition with a schema version and inline content. The <code>schemaVersion</code> identifies the version of the MCP server configuration schema.</p>
 * @public
 */
export interface ServerDefinition {
  /**
   * <p> The schema version of the MCP server configuration. The schema version identifies the format of the server definition content.</p>
   * @public
   */
  schemaVersion?: string | undefined;

  /**
   * <p> The inline content of the server definition.</p>
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * <p> The MCP tools definition with a protocol version and inline content. The <code>protocolVersion</code> identifies the MCP protocol version that the tools conform to. This differs from <code>schemaVersion</code> in the server definition, which identifies the server configuration schema format.</p>
 * @public
 */
export interface ToolsDefinition {
  /**
   * <p> The MCP protocol version that the tools conform to. This differs from the <code>schemaVersion</code> field in the server definition, which identifies the server configuration schema format.</p>
   * @public
   */
  protocolVersion?: string | undefined;

  /**
   * <p> The inline content of the tools definition.</p>
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * <p> The MCP (Model Context Protocol) descriptor configuration for a registry record. Contains the server definition and tools definition.</p>
 * @public
 */
export interface McpDescriptor {
  /**
   * <p> The MCP server definition that describes the server configuration.</p>
   * @public
   */
  server: ServerDefinition | undefined;

  /**
   * <p> The MCP tools definition that describes the available tools.</p>
   * @public
   */
  tools: ToolsDefinition | undefined;
}

/**
 * <p> Contains the descriptor configuration for a registry record. Only the field that matches the record's <code>descriptorType</code> is populated.</p>
 * @public
 */
export interface Descriptors {
  /**
   * <p> The MCP (Model Context Protocol) descriptor configuration. Populated when the record's <code>descriptorType</code> is <code>MCP</code>.</p>
   * @public
   */
  mcp?: McpDescriptor | undefined;

  /**
   * <p> The A2A (Agent-to-Agent) descriptor configuration. Populated when the record's <code>descriptorType</code> is <code>A2A</code>.</p>
   * @public
   */
  a2a?: A2aDescriptor | undefined;

  /**
   * <p> The custom descriptor configuration. Populated when the record's <code>descriptorType</code> is <code>CUSTOM</code>.</p>
   * @public
   */
  custom?: CustomDescriptor | undefined;

  /**
   * <p> The agent skills descriptor configuration. Populated when the record's <code>descriptorType</code> is <code>AGENT_SKILLS</code>.</p>
   * @public
   */
  agentSkills?: AgentSkillsDescriptor | undefined;
}

/**
 * <p> Summary information about a registry record.</p>
 * @public
 */
export interface RegistryRecordSummary {
  /**
   * <p> The Amazon Resource Name (ARN) of the registry that this record belongs to.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p> The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p> The name of the registry record.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> A description of the registry record.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The type of descriptor associated with this registry record.</p>
   * @public
   */
  descriptorType: DescriptorType | undefined;

  /**
   * <p> The descriptor configurations for this registry record.</p>
   * @public
   */
  descriptors: Descriptors | undefined;

  /**
   * <p> The version of the registry record.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p> The current status of the registry record.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p> The date and time when the registry record was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p> The date and time when the registry record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface SearchRegistryRecordsResponse {
  /**
   * <p> The list of registry records that match the search query, ordered by relevance.</p>
   * @public
   */
  registryRecords: RegistryRecordSummary[] | undefined;
}
