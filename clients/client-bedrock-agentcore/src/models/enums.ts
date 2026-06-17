// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ABTestExecutionStatus = {
  NOT_STARTED: "NOT_STARTED",
  PAUSED: "PAUSED",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type ABTestExecutionStatus = (typeof ABTestExecutionStatus)[keyof typeof ABTestExecutionStatus];

/**
 * @public
 * @enum
 */
export const ABTestStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ABTestStatus = (typeof ABTestStatus)[keyof typeof ABTestStatus];

/**
 * @public
 * @enum
 */
export const InsightsFailureCategory = {
  CODING_DEPENDENCY_ISSUES: "coding-use-case-specific-failure-types-category-dependency-issues",
  CODING_EDGE_CASE_OVERSIGHTS: "coding-use-case-specific-failure-types-category-edge-case-oversights",
  CONFIGURATION_MISMATCH_TOOL_DEFINITION: "configuration-mismatch-category-tool-definition",
  CONTEXT_HANDLING_FAILURES: "context-handling-error-category-context-handling-failures",
  EXECUTION_ERROR_AUTHENTICATION: "execution-error-category-authentication",
  EXECUTION_ERROR_ENVIRONMENT: "execution-error-category-environment",
  EXECUTION_ERROR_FORMATTING: "execution-error-category-formatting",
  EXECUTION_ERROR_RATE_LIMITING: "execution-error-category-rate-limiting",
  EXECUTION_ERROR_RESOURCE_EXHAUSTION: "execution-error-category-resource-exhaustion",
  EXECUTION_ERROR_RESOURCE_NOT_FOUND: "execution-error-category-resource-not-found",
  EXECUTION_ERROR_SERVICE_ERRORS: "execution-error-category-service-errors",
  EXECUTION_ERROR_TIMEOUT: "execution-error-category-timeout",
  EXECUTION_ERROR_TOOL_SCHEMA: "execution-error-category-tool-schema",
  HALLUCINATION_CAPABILITIES: "hallucination-category-hall-capabilities",
  HALLUCINATION_FABRICATE_TOOL_OUTPUTS: "hallucination-category-fabricate-tool-outputs",
  HALLUCINATION_HISTORY: "hallucination-category-hall-history",
  HALLUCINATION_MISUNDERSTAND: "hallucination-category-hall-misunderstand",
  HALLUCINATION_PARAMS: "hallucination-category-hall-params",
  HALLUCINATION_USAGE: "hallucination-category-hall-usage",
  INCORRECT_ACTIONS_CLARIFICATION: "incorrect-actions-category-clarification",
  INCORRECT_ACTIONS_INAPPROPRIATE_INFO_REQUEST: "incorrect-actions-category-inappropriate-info-request",
  INCORRECT_ACTIONS_POOR_INFORMATION_RETRIEVAL: "incorrect-actions-category-poor-information-retrieval",
  INCORRECT_ACTIONS_TOOL_SELECTION: "incorrect-actions-category-tool-selection",
  LLM_OUTPUT_NONSENSICAL: "llm-output-category-nonsensical",
  ORCHESTRATION_GOAL_DEVIATION: "orchestration-related-errors-category-goal-deviation",
  ORCHESTRATION_PREMATURE_TERMINATION: "orchestration-related-errors-category-premature-termination",
  ORCHESTRATION_REASONING_MISMATCH: "orchestration-related-errors-category-reasoning-mismatch",
  ORCHESTRATION_UNAWARE_TERMINATION: "orchestration-related-errors-category-unaware-termination",
  OTHER: "other",
  REPETITIVE_BEHAVIOR_INFO: "repetitive-behavior-category-repetition-info",
  REPETITIVE_BEHAVIOR_STEP: "repetitive-behavior-category-step-repetition",
  REPETITIVE_BEHAVIOR_TOOL: "repetitive-behavior-category-repetition-tool",
  TASK_INSTRUCTION_NON_COMPLIANCE: "task-instruction-category-non-compliance",
  TASK_INSTRUCTION_PROBLEM_ID: "task-instruction-category-problem-id",
} as const;
/**
 * @public
 */
export type InsightsFailureCategory = (typeof InsightsFailureCategory)[keyof typeof InsightsFailureCategory];

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
 * @public
 * @enum
 */
export const CommandExecutionStatus = {
  COMPLETED: "COMPLETED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type CommandExecutionStatus = (typeof CommandExecutionStatus)[keyof typeof CommandExecutionStatus];

/**
 * @public
 * @enum
 */
export const CloudWatchLogsFilterOperator = {
  CONTAINS: "Contains",
  EQUALS: "Equals",
  GREATER_THAN: "GreaterThan",
  GREATER_THAN_OR_EQUAL: "GreaterThanOrEqual",
  LESS_THAN: "LessThan",
  LESS_THAN_OR_EQUAL: "LessThanOrEqual",
  NOT_CONTAINS: "NotContains",
  NOT_EQUALS: "NotEquals",
} as const;
/**
 * @public
 */
export type CloudWatchLogsFilterOperator =
  (typeof CloudWatchLogsFilterOperator)[keyof typeof CloudWatchLogsFilterOperator];

/**
 * @public
 * @enum
 */
export const BrowserEnterprisePolicyType = {
  MANAGED: "MANAGED",
  RECOMMENDED: "RECOMMENDED",
} as const;
/**
 * @public
 */
export type BrowserEnterprisePolicyType =
  (typeof BrowserEnterprisePolicyType)[keyof typeof BrowserEnterprisePolicyType];

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
 * @public
 * @enum
 */
export const MouseButton = {
  LEFT: "LEFT",
  MIDDLE: "MIDDLE",
  RIGHT: "RIGHT",
} as const;
/**
 * @public
 */
export type MouseButton = (typeof MouseButton)[keyof typeof MouseButton];

/**
 * @public
 * @enum
 */
export const ScreenshotFormat = {
  PNG: "PNG",
} as const;
/**
 * @public
 */
export type ScreenshotFormat = (typeof ScreenshotFormat)[keyof typeof ScreenshotFormat];

/**
 * @public
 * @enum
 */
export const BrowserActionStatus = {
  FAILED: "FAILED",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type BrowserActionStatus = (typeof BrowserActionStatus)[keyof typeof BrowserActionStatus];

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
 * @enum
 */
export const BatchEvaluationStatus = {
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_ERRORS: "COMPLETED_WITH_ERRORS",
  DELETING: "DELETING",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type BatchEvaluationStatus = (typeof BatchEvaluationStatus)[keyof typeof BatchEvaluationStatus];

/**
 * @public
 * @enum
 */
export const RecommendationStatus = {
  COMPLETED: "COMPLETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type RecommendationStatus = (typeof RecommendationStatus)[keyof typeof RecommendationStatus];

/**
 * @public
 * @enum
 */
export const RecommendationType = {
  SYSTEM_PROMPT_RECOMMENDATION: "SYSTEM_PROMPT_RECOMMENDATION",
  TOOL_DESCRIPTION_RECOMMENDATION: "TOOL_DESCRIPTION_RECOMMENDATION",
} as const;
/**
 * @public
 */
export type RecommendationType = (typeof RecommendationType)[keyof typeof RecommendationType];

/**
 * @public
 * @enum
 */
export const Oauth2FlowType = {
  M2M: "M2M",
  ON_BEHALF_OF_TOKEN_EXCHANGE: "ON_BEHALF_OF_TOKEN_EXCHANGE",
  USER_FEDERATION: "USER_FEDERATION",
} as const;
/**
 * @public
 */
export type Oauth2FlowType = (typeof Oauth2FlowType)[keyof typeof Oauth2FlowType];

/**
 * @public
 * @enum
 */
export const SessionStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus];

/**
 * @public
 * @enum
 */
export const PaymentHttpMethodType = {
  DELETE: "DELETE",
  GET: "GET",
  PATCH: "PATCH",
  POST: "POST",
  PUT: "PUT",
} as const;
/**
 * @public
 */
export type PaymentHttpMethodType = (typeof PaymentHttpMethodType)[keyof typeof PaymentHttpMethodType];

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
 * @public
 * @enum
 */
export const LanguageRuntime = {
  DENO: "deno",
  NODEJS: "nodejs",
  PYTHON: "python",
} as const;
/**
 * @public
 */
export type LanguageRuntime = (typeof LanguageRuntime)[keyof typeof LanguageRuntime];

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
 * @public
 * @enum
 */
export const HarnessToolUseStatus = {
  ERROR: "error",
  SUCCESS: "success",
} as const;
/**
 * @public
 */
export type HarnessToolUseStatus = (typeof HarnessToolUseStatus)[keyof typeof HarnessToolUseStatus];

/**
 * @public
 * @enum
 */
export const HarnessToolUseType = {
  MCP_TOOL_USE: "mcp_tool_use",
  SERVER_TOOL_USE: "server_tool_use",
  TOOL_USE: "tool_use",
} as const;
/**
 * @public
 */
export type HarnessToolUseType = (typeof HarnessToolUseType)[keyof typeof HarnessToolUseType];

/**
 * @public
 * @enum
 */
export const HarnessConversationRole = {
  ASSISTANT: "assistant",
  USER: "user",
} as const;
/**
 * @public
 */
export type HarnessConversationRole = (typeof HarnessConversationRole)[keyof typeof HarnessConversationRole];

/**
 * @public
 * @enum
 */
export const HarnessBedrockApiFormat = {
  /**
   * <p>Use the Chat Completions API format.</p>
   */
  CHAT_COMPLETIONS: "chat_completions",
  /**
   * <p>Use the Bedrock Converse Stream API format.</p>
   */
  CONVERSE_STREAM: "converse_stream",
  /**
   * <p>Use the Responses API format.</p>
   */
  RESPONSES: "responses",
} as const;
/**
 * @public
 */
export type HarnessBedrockApiFormat = (typeof HarnessBedrockApiFormat)[keyof typeof HarnessBedrockApiFormat];

/**
 * @public
 * @enum
 */
export const HarnessOpenAiApiFormat = {
  /**
   * <p>Use the Chat Completions API format.</p>
   */
  CHAT_COMPLETIONS: "chat_completions",
  /**
   * <p>Use the Responses API format.</p>
   */
  RESPONSES: "responses",
} as const;
/**
 * @public
 */
export type HarnessOpenAiApiFormat = (typeof HarnessOpenAiApiFormat)[keyof typeof HarnessOpenAiApiFormat];

/**
 * @public
 * @enum
 */
export const OAuthGrantType = {
  AUTHORIZATION_CODE: "AUTHORIZATION_CODE",
  CLIENT_CREDENTIALS: "CLIENT_CREDENTIALS",
  TOKEN_EXCHANGE: "TOKEN_EXCHANGE",
} as const;
/**
 * @public
 */
export type OAuthGrantType = (typeof OAuthGrantType)[keyof typeof OAuthGrantType];

/**
 * @public
 * @enum
 */
export const HarnessToolType = {
  AGENTCORE_BROWSER: "agentcore_browser",
  AGENTCORE_CODE_INTERPRETER: "agentcore_code_interpreter",
  AGENTCORE_GATEWAY: "agentcore_gateway",
  INLINE_FUNCTION: "inline_function",
  REMOTE_MCP: "remote_mcp",
} as const;
/**
 * @public
 */
export type HarnessToolType = (typeof HarnessToolType)[keyof typeof HarnessToolType];

/**
 * @public
 * @enum
 */
export const HarnessStopReason = {
  CONTENT_FILTERED: "content_filtered",
  END_TURN: "end_turn",
  INTERRUPTED: "interrupted",
  MALFORMED_MODEL_OUTPUT: "malformed_model_output",
  MALFORMED_TOOL_USE: "malformed_tool_use",
  MAX_ITERATIONS_EXCEEDED: "max_iterations_exceeded",
  MAX_OUTPUT_TOKENS_EXCEEDED: "max_output_tokens_exceeded",
  MAX_TOKENS: "max_tokens",
  MODEL_CONTEXT_WINDOW_EXCEEDED: "model_context_window_exceeded",
  PARTIAL_TURN: "partial_turn",
  STOP_SEQUENCE: "stop_sequence",
  TIMEOUT_EXCEEDED: "timeout_exceeded",
  TOOL_RESULT: "tool_result",
  TOOL_USE: "tool_use",
} as const;
/**
 * @public
 */
export type HarnessStopReason = (typeof HarnessStopReason)[keyof typeof HarnessStopReason];

/**
 * @public
 * @enum
 */
export const MemoryRecordStatus = {
  FAILED: "FAILED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type MemoryRecordStatus = (typeof MemoryRecordStatus)[keyof typeof MemoryRecordStatus];

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
 * @public
 * @enum
 */
export const OperatorType = {
  EQUALS_TO: "EQUALS_TO",
  EXISTS: "EXISTS",
  NOT_EXISTS: "NOT_EXISTS",
} as const;
/**
 * @public
 */
export type OperatorType = (typeof OperatorType)[keyof typeof OperatorType];

/**
 * @public
 * @enum
 */
export const ExtractionJobStatus = {
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type ExtractionJobStatus = (typeof ExtractionJobStatus)[keyof typeof ExtractionJobStatus];

/**
 * @public
 * @enum
 */
export const MemoryRecordOperatorType = {
  AFTER: "AFTER",
  BEFORE: "BEFORE",
  CONTAINS: "CONTAINS",
  EQUALS_TO: "EQUALS_TO",
  EXISTS: "EXISTS",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUALS: "GREATER_THAN_OR_EQUALS",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUALS: "LESS_THAN_OR_EQUALS",
  NOT_EXISTS: "NOT_EXISTS",
} as const;
/**
 * @public
 */
export type MemoryRecordOperatorType = (typeof MemoryRecordOperatorType)[keyof typeof MemoryRecordOperatorType];

/**
 * @public
 * @enum
 */
export const EventFilterCondition = {
  HAS_EVENTS: "HAS_EVENTS",
} as const;
/**
 * @public
 */
export type EventFilterCondition = (typeof EventFilterCondition)[keyof typeof EventFilterCondition];

/**
 * @public
 * @enum
 */
export const CryptoWalletNetwork = {
  ETHEREUM: "ETHEREUM",
  SOLANA: "SOLANA",
} as const;
/**
 * @public
 */
export type CryptoWalletNetwork = (typeof CryptoWalletNetwork)[keyof typeof CryptoWalletNetwork];

/**
 * @public
 * @enum
 */
export const PaymentInstrumentType = {
  EMBEDDED_CRYPTO_WALLET: "EMBEDDED_CRYPTO_WALLET",
} as const;
/**
 * @public
 */
export type PaymentInstrumentType = (typeof PaymentInstrumentType)[keyof typeof PaymentInstrumentType];

/**
 * @public
 * @enum
 */
export const PaymentInstrumentStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  FAILED: "FAILED",
  INITIATED: "INITIATED",
} as const;
/**
 * @public
 */
export type PaymentInstrumentStatus = (typeof PaymentInstrumentStatus)[keyof typeof PaymentInstrumentStatus];

/**
 * @public
 * @enum
 */
export const BlockchainChainId = {
  /**
   * <p>Base Mainnet (EVM L2)</p>
   */
  BASE: "BASE",
  /**
   * <p>Base Sepolia testnet (EVM L2)</p>
   */
  BASE_SEPOLIA: "BASE_SEPOLIA",
  /**
   * <p>Ethereum Mainnet (EVM L1)</p>
   */
  ETHEREUM: "ETHEREUM",
  /**
   * <p>Solana Mainnet</p>
   */
  SOLANA: "SOLANA",
  /**
   * <p>Solana Devnet testnet</p>
   */
  SOLANA_DEVNET: "SOLANA_DEVNET",
} as const;
/**
 * @public
 */
export type BlockchainChainId = (typeof BlockchainChainId)[keyof typeof BlockchainChainId];

/**
 * @public
 * @enum
 */
export const InstrumentBalanceToken = {
  USDC: "USDC",
} as const;
/**
 * @public
 */
export type InstrumentBalanceToken = (typeof InstrumentBalanceToken)[keyof typeof InstrumentBalanceToken];

/**
 * @public
 * @enum
 */
export const Currency = {
  USD: "USD",
} as const;
/**
 * @public
 */
export type Currency = (typeof Currency)[keyof typeof Currency];

/**
 * @public
 * @enum
 */
export const PaymentSessionStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  EXPIRED: "EXPIRED",
} as const;
/**
 * @public
 */
export type PaymentSessionStatus = (typeof PaymentSessionStatus)[keyof typeof PaymentSessionStatus];

/**
 * @public
 * @enum
 */
export const PaymentType = {
  CRYPTO_X402: "CRYPTO_X402",
} as const;
/**
 * @public
 */
export type PaymentType = (typeof PaymentType)[keyof typeof PaymentType];

/**
 * @public
 * @enum
 */
export const PaymentStatus = {
  PROOF_GENERATED: "PROOF_GENERATED",
} as const;
/**
 * @public
 */
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];

/**
 * @public
 * @enum
 */
export const DescriptorType = {
  A2A: "A2A",
  AGENT_SKILLS: "AGENT_SKILLS",
  CUSTOM: "CUSTOM",
  MCP: "MCP",
} as const;
/**
 * @public
 */
export type DescriptorType = (typeof DescriptorType)[keyof typeof DescriptorType];

/**
 * @public
 * @enum
 */
export const RegistryRecordStatus = {
  APPROVED: "APPROVED",
  DEPRECATED: "DEPRECATED",
  DRAFT: "DRAFT",
  PENDING_APPROVAL: "PENDING_APPROVAL",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type RegistryRecordStatus = (typeof RegistryRecordStatus)[keyof typeof RegistryRecordStatus];
