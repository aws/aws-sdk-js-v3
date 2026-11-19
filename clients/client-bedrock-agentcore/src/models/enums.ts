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
export const AgentInsightArchiveStatus = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
} as const;
/**
 * @public
 */
export type AgentInsightArchiveStatus = (typeof AgentInsightArchiveStatus)[keyof typeof AgentInsightArchiveStatus];

/**
 * @public
 * @enum
 */
export const AgentInsightCustomerMetadataStatus = {
  AVAILABLE: "AVAILABLE",
  CUSTOMER_KEY_UNAVAILABLE: "CUSTOMER_KEY_UNAVAILABLE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;
/**
 * @public
 */
export type AgentInsightCustomerMetadataStatus =
  (typeof AgentInsightCustomerMetadataStatus)[keyof typeof AgentInsightCustomerMetadataStatus];

/**
 * @public
 * @enum
 */
export const InsightType = {
  FAILURE: "FAILURE",
} as const;
/**
 * @public
 */
export type InsightType = (typeof InsightType)[keyof typeof InsightType];

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
export const CapacityProviderSessionStatus = {
  ACTIVE: "Active",
  DELETED: "Deleted",
  DELETING: "Deleting",
  DEPROVISIONING: "Deprovisioning",
  PROVISIONING: "Provisioning",
  STOPPED: "Stopped",
} as const;
/**
 * @public
 */
export type CapacityProviderSessionStatus =
  (typeof CapacityProviderSessionStatus)[keyof typeof CapacityProviderSessionStatus];

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
export const DatasetGenerationStatus = {
  /**
   * <p>The generation finished and added its examples to the dataset's draft.</p>
   */
  COMPLETED: "COMPLETED",
  /**
   * <p>The generation finished, but some sessions failed. See <code>errorDetails</code> for the errors.</p>
   */
  COMPLETED_WITH_ERRORS: "COMPLETED_WITH_ERRORS",
  /**
   * <p>The generation record is being deleted.</p>
   */
  DELETING: "DELETING",
  /**
   * <p>The generation failed. See <code>failureReason</code> for the reason.</p>
   */
  FAILED: "FAILED",
  /**
   * <p>The generation is running.</p>
   */
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type DatasetGenerationStatus = (typeof DatasetGenerationStatus)[keyof typeof DatasetGenerationStatus];

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
export const FindingTargetType = {
  SPAN_ID: "SPAN_ID",
  SPAN_NAME: "SPAN_NAME",
  TRACE_ID: "TRACE_ID",
} as const;
/**
 * @public
 */
export type FindingTargetType = (typeof FindingTargetType)[keyof typeof FindingTargetType];

/**
 * @public
 * @enum
 */
export const ResultDestination = {
  DEDICATED_LOG_GROUP: "DEDICATED_LOG_GROUP",
  SOURCE_LOG_GROUP: "SOURCE_LOG_GROUP",
} as const;
/**
 * @public
 */
export type ResultDestination = (typeof ResultDestination)[keyof typeof ResultDestination];

/**
 * @public
 * @enum
 */
export const ScenarioType = {
  /**
   * <p>A conversation driven by a simulated user, described by an actor profile, an initial input and a maximum number of turns.</p>
   */
  DYNAMIC: "DYNAMIC",
  /**
   * <p>A fixed list of turns, with an optional expected response and expected trajectory.</p>
   */
  FIXED: "FIXED",
} as const;
/**
 * @public
 */
export type ScenarioType = (typeof ScenarioType)[keyof typeof ScenarioType];

/**
 * @public
 * @enum
 */
export const GroundTruthField = {
  /**
   * <p>The agent's final response.</p>
   */
  EXPECTED_RESPONSE: "expected_response",
  /**
   * <p>The sequence of tool calls the agent made.</p>
   */
  EXPECTED_TRAJECTORY: "expected_trajectory",
} as const;
/**
 * @public
 */
export type GroundTruthField = (typeof GroundTruthField)[keyof typeof GroundTruthField];

/**
 * @public
 * @enum
 */
export const ResultAggregation = {
  /**
   * <p>Matches when every result has the label.</p>
   */
  ALL_MATCH: "AllMatch",
  /**
   * <p>Matches when at least one result has the label.</p>
   */
  ANY_MATCH: "AnyMatch",
  /**
   * <p>Uses the highest score.</p>
   */
  MAX: "Max",
  /**
   * <p>Uses the average score.</p>
   */
  MEAN: "Mean",
  /**
   * <p>Uses the lowest score.</p>
   */
  MIN: "Min",
} as const;
/**
 * @public
 */
export type ResultAggregation = (typeof ResultAggregation)[keyof typeof ResultAggregation];

/**
 * @public
 * @enum
 */
export const GenerationFilterOperator = {
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
export type GenerationFilterOperator = (typeof GenerationFilterOperator)[keyof typeof GenerationFilterOperator];

/**
 * @public
 * @enum
 */
export const RedactionIdentifier = {
  ADDRESS: "ADDRESS",
  AWS_SECRET_KEY: "AWS_SECRET_KEY",
  BANK_ACCOUNT_NUMBER_DE: "BANK_ACCOUNT_NUMBER_DE",
  BANK_ACCOUNT_NUMBER_ES: "BANK_ACCOUNT_NUMBER_ES",
  BANK_ACCOUNT_NUMBER_FR: "BANK_ACCOUNT_NUMBER_FR",
  BANK_ACCOUNT_NUMBER_GB: "BANK_ACCOUNT_NUMBER_GB",
  BANK_ACCOUNT_NUMBER_IT: "BANK_ACCOUNT_NUMBER_IT",
  BANK_ACCOUNT_NUMBER_US: "BANK_ACCOUNT_NUMBER_US",
  CEP_CODE_BR: "CEP_CODE_BR",
  CNPJ_BR: "CNPJ_BR",
  CPF_CODE_BR: "CPF_CODE_BR",
  CREDIT_CARD_EXPIRATION: "CREDIT_CARD_EXPIRATION",
  CREDIT_CARD_MAGNETIC_STRIPE: "CREDIT_CARD_MAGNETIC_STRIPE",
  CREDIT_CARD_NUMBER: "CREDIT_CARD_NUMBER",
  CREDIT_CARD_SECURITY_CODE: "CREDIT_CARD_SECURITY_CODE",
  DATE_OF_BIRTH: "DATE_OF_BIRTH",
  DRIVERS_LICENSE_AT: "DRIVERS_LICENSE_AT",
  DRIVERS_LICENSE_AU: "DRIVERS_LICENSE_AU",
  DRIVERS_LICENSE_BE: "DRIVERS_LICENSE_BE",
  DRIVERS_LICENSE_BG: "DRIVERS_LICENSE_BG",
  DRIVERS_LICENSE_CA: "DRIVERS_LICENSE_CA",
  DRIVERS_LICENSE_CY: "DRIVERS_LICENSE_CY",
  DRIVERS_LICENSE_CZ: "DRIVERS_LICENSE_CZ",
  DRIVERS_LICENSE_DE: "DRIVERS_LICENSE_DE",
  DRIVERS_LICENSE_DK: "DRIVERS_LICENSE_DK",
  DRIVERS_LICENSE_EE: "DRIVERS_LICENSE_EE",
  DRIVERS_LICENSE_ES: "DRIVERS_LICENSE_ES",
  DRIVERS_LICENSE_FI: "DRIVERS_LICENSE_FI",
  DRIVERS_LICENSE_FR: "DRIVERS_LICENSE_FR",
  DRIVERS_LICENSE_GB: "DRIVERS_LICENSE_GB",
  DRIVERS_LICENSE_GR: "DRIVERS_LICENSE_GR",
  DRIVERS_LICENSE_HR: "DRIVERS_LICENSE_HR",
  DRIVERS_LICENSE_HU: "DRIVERS_LICENSE_HU",
  DRIVERS_LICENSE_IE: "DRIVERS_LICENSE_IE",
  DRIVERS_LICENSE_IT: "DRIVERS_LICENSE_IT",
  DRIVERS_LICENSE_LT: "DRIVERS_LICENSE_LT",
  DRIVERS_LICENSE_LU: "DRIVERS_LICENSE_LU",
  DRIVERS_LICENSE_LV: "DRIVERS_LICENSE_LV",
  DRIVERS_LICENSE_MT: "DRIVERS_LICENSE_MT",
  DRIVERS_LICENSE_NL: "DRIVERS_LICENSE_NL",
  DRIVERS_LICENSE_PL: "DRIVERS_LICENSE_PL",
  DRIVERS_LICENSE_PT: "DRIVERS_LICENSE_PT",
  DRIVERS_LICENSE_RO: "DRIVERS_LICENSE_RO",
  DRIVERS_LICENSE_SE: "DRIVERS_LICENSE_SE",
  DRIVERS_LICENSE_SI: "DRIVERS_LICENSE_SI",
  DRIVERS_LICENSE_SK: "DRIVERS_LICENSE_SK",
  DRIVERS_LICENSE_US: "DRIVERS_LICENSE_US",
  DRUG_ENFORCEMENT_AGENCY_NUMBER_US: "DRUG_ENFORCEMENT_AGENCY_NUMBER_US",
  ELECTORAL_ROLL_NUMBER_GB: "ELECTORAL_ROLL_NUMBER_GB",
  EMAIL_ADDRESS: "EMAIL_ADDRESS",
  HEALTHCARE_PROCEDURE_CODE_US: "HEALTHCARE_PROCEDURE_CODE_US",
  HEALTH_INSURANCE_CARD_NUMBER_EU: "HEALTH_INSURANCE_CARD_NUMBER_EU",
  HEALTH_INSURANCE_CLAIM_NUMBER_US: "HEALTH_INSURANCE_CLAIM_NUMBER_US",
  HEALTH_INSURANCE_NUMBER_FR: "HEALTH_INSURANCE_NUMBER_FR",
  INDIVIDUAL_TAX_IDENTIFICATION_NUMBER_US: "INDIVIDUAL_TAX_IDENTIFICATION_NUMBER_US",
  INSEE_CODE_FR: "INSEE_CODE_FR",
  IP_ADDRESS: "IP_ADDRESS",
  LAT_LONG: "LAT_LONG",
  MEDICARE_BENEFICIARY_NUMBER_US: "MEDICARE_BENEFICIARY_NUMBER_US",
  NAME: "NAME",
  NATIONAL_DRUG_CODE_US: "NATIONAL_DRUG_CODE_US",
  NATIONAL_IDENTIFICATION_NUMBER_DE: "NATIONAL_IDENTIFICATION_NUMBER_DE",
  NATIONAL_IDENTIFICATION_NUMBER_ES: "NATIONAL_IDENTIFICATION_NUMBER_ES",
  NATIONAL_IDENTIFICATION_NUMBER_IT: "NATIONAL_IDENTIFICATION_NUMBER_IT",
  NATIONAL_INSURANCE_NUMBER_GB: "NATIONAL_INSURANCE_NUMBER_GB",
  NATIONAL_PROVIDER_ID_US: "NATIONAL_PROVIDER_ID_US",
  NHS_NUMBER_GB: "NHS_NUMBER_GB",
  NIE_NUMBER_ES: "NIE_NUMBER_ES",
  NIF_NUMBER_ES: "NIF_NUMBER_ES",
  OPEN_SSH_PRIVATE_KEY: "OPEN_SSH_PRIVATE_KEY",
  PASSPORT_NUMBER_CA: "PASSPORT_NUMBER_CA",
  PASSPORT_NUMBER_DE: "PASSPORT_NUMBER_DE",
  PASSPORT_NUMBER_ES: "PASSPORT_NUMBER_ES",
  PASSPORT_NUMBER_FR: "PASSPORT_NUMBER_FR",
  PASSPORT_NUMBER_GB: "PASSPORT_NUMBER_GB",
  PASSPORT_NUMBER_IT: "PASSPORT_NUMBER_IT",
  PASSPORT_NUMBER_US: "PASSPORT_NUMBER_US",
  PERMANENT_RESIDENCE_NUMBER_CA: "PERMANENT_RESIDENCE_NUMBER_CA",
  PERSONAL_HEALTH_NUMBER_CA: "PERSONAL_HEALTH_NUMBER_CA",
  PGP_PRIVATE_KEY: "PGP_PRIVATE_KEY",
  PHONE_NUMBER_BR: "PHONE_NUMBER_BR",
  PHONE_NUMBER_DE: "PHONE_NUMBER_DE",
  PHONE_NUMBER_ES: "PHONE_NUMBER_ES",
  PHONE_NUMBER_FR: "PHONE_NUMBER_FR",
  PHONE_NUMBER_GB: "PHONE_NUMBER_GB",
  PHONE_NUMBER_IT: "PHONE_NUMBER_IT",
  PHONE_NUMBER_US: "PHONE_NUMBER_US",
  PKCS_PRIVATE_KEY: "PKCS_PRIVATE_KEY",
  POSTAL_CODE_CA: "POSTAL_CODE_CA",
  PUTTY_PRIVATE_KEY: "PUTTY_PRIVATE_KEY",
  RG_NUMBER_BR: "RG_NUMBER_BR",
  SOCIAL_INSURANCE_NUMBER_CA: "SOCIAL_INSURANCE_NUMBER_CA",
  SSN_ES: "SSN_ES",
  SSN_US: "SSN_US",
  TAX_ID_DE: "TAX_ID_DE",
  TAX_ID_ES: "TAX_ID_ES",
  TAX_ID_FR: "TAX_ID_FR",
  TAX_ID_GB: "TAX_ID_GB",
  VEHICLE_IDENTIFICATION_NUMBER: "VEHICLE_IDENTIFICATION_NUMBER",
  ZIP_CODE_US: "ZIP_CODE_US",
} as const;
/**
 * @public
 */
export type RedactionIdentifier = (typeof RedactionIdentifier)[keyof typeof RedactionIdentifier];

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
export const HarnessHookDecision = {
  ALLOW: "allow",
  DENY: "deny",
} as const;
/**
 * @public
 */
export type HarnessHookDecision = (typeof HarnessHookDecision)[keyof typeof HarnessHookDecision];

/**
 * @public
 * @enum
 */
export const HarnessHookEventType = {
  AFTER_INVOCATION: "after_invocation",
  AFTER_TOOL_CALL: "after_tool_call",
  BEFORE_INVOCATION: "before_invocation",
  BEFORE_TOOL_CALL: "before_tool_call",
} as const;
/**
 * @public
 */
export type HarnessHookEventType = (typeof HarnessHookEventType)[keyof typeof HarnessHookEventType];

/**
 * @public
 * @enum
 */
export const HarnessStopReason = {
  CONTENT_FILTERED: "content_filtered",
  END_TURN: "end_turn",
  HOOK_STOPPED: "hook_stopped",
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
export const RecordExpiryAction = {
  REMOVE: "REMOVE",
} as const;
/**
 * @public
 */
export type RecordExpiryAction = (typeof RecordExpiryAction)[keyof typeof RecordExpiryAction];

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
export const ExtractionMode = {
  SKIP: "SKIP",
} as const;
/**
 * @public
 */
export type ExtractionMode = (typeof ExtractionMode)[keyof typeof ExtractionMode];

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
  BLOCKED: "BLOCKED",
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
export const JwkEllipticCurve = {
  P256: "P-256",
  P384: "P-384",
  P521: "P-521",
} as const;
/**
 * @public
 */
export type JwkEllipticCurve = (typeof JwkEllipticCurve)[keyof typeof JwkEllipticCurve];

/**
 * @public
 * @enum
 */
export const JwkKeyType = {
  EC: "EC",
} as const;
/**
 * @public
 */
export type JwkKeyType = (typeof JwkKeyType)[keyof typeof JwkKeyType];

/**
 * @public
 * @enum
 */
export const PaymentType = {
  AWS_BILLING_X402: "AWS_BILLING_X402",
  CRYPTO_X402: "CRYPTO_X402",
  MPP: "MPP",
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
