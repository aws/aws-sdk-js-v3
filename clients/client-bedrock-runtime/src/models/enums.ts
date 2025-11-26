// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AsyncInvokeStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
} as const;
/**
 * @public
 */
export type AsyncInvokeStatus = (typeof AsyncInvokeStatus)[keyof typeof AsyncInvokeStatus];

/**
 * @public
 * @enum
 */
export const SortAsyncInvocationBy = {
  SUBMISSION_TIME: "SubmissionTime",
} as const;
/**
 * @public
 */
export type SortAsyncInvocationBy = (typeof SortAsyncInvocationBy)[keyof typeof SortAsyncInvocationBy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const GuardrailImageFormat = {
  JPEG: "jpeg",
  PNG: "png",
} as const;
/**
 * @public
 */
export type GuardrailImageFormat = (typeof GuardrailImageFormat)[keyof typeof GuardrailImageFormat];

/**
 * @public
 * @enum
 */
export const GuardrailContentQualifier = {
  GROUNDING_SOURCE: "grounding_source",
  GUARD_CONTENT: "guard_content",
  QUERY: "query",
} as const;
/**
 * @public
 */
export type GuardrailContentQualifier = (typeof GuardrailContentQualifier)[keyof typeof GuardrailContentQualifier];

/**
 * @public
 * @enum
 */
export const GuardrailOutputScope = {
  FULL: "FULL",
  INTERVENTIONS: "INTERVENTIONS",
} as const;
/**
 * @public
 */
export type GuardrailOutputScope = (typeof GuardrailOutputScope)[keyof typeof GuardrailOutputScope];

/**
 * @public
 * @enum
 */
export const GuardrailContentSource = {
  INPUT: "INPUT",
  OUTPUT: "OUTPUT",
} as const;
/**
 * @public
 */
export type GuardrailContentSource = (typeof GuardrailContentSource)[keyof typeof GuardrailContentSource];

/**
 * @public
 * @enum
 */
export const GuardrailAction = {
  GUARDRAIL_INTERVENED: "GUARDRAIL_INTERVENED",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type GuardrailAction = (typeof GuardrailAction)[keyof typeof GuardrailAction];

/**
 * @public
 * @enum
 */
export const GuardrailOrigin = {
  ACCOUNT_ENFORCED: "ACCOUNT_ENFORCED",
  ORGANIZATION_ENFORCED: "ORGANIZATION_ENFORCED",
  REQUEST: "REQUEST",
} as const;
/**
 * @public
 */
export type GuardrailOrigin = (typeof GuardrailOrigin)[keyof typeof GuardrailOrigin];

/**
 * @public
 * @enum
 */
export const GuardrailOwnership = {
  CROSS_ACCOUNT: "CROSS_ACCOUNT",
  SELF: "SELF",
} as const;
/**
 * @public
 */
export type GuardrailOwnership = (typeof GuardrailOwnership)[keyof typeof GuardrailOwnership];

/**
 * @public
 * @enum
 */
export const GuardrailAutomatedReasoningLogicWarningType = {
  ALWAYS_FALSE: "ALWAYS_FALSE",
  ALWAYS_TRUE: "ALWAYS_TRUE",
} as const;
/**
 * @public
 */
export type GuardrailAutomatedReasoningLogicWarningType =
  (typeof GuardrailAutomatedReasoningLogicWarningType)[keyof typeof GuardrailAutomatedReasoningLogicWarningType];

/**
 * @public
 * @enum
 */
export const GuardrailContentPolicyAction = {
  BLOCKED: "BLOCKED",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type GuardrailContentPolicyAction =
  (typeof GuardrailContentPolicyAction)[keyof typeof GuardrailContentPolicyAction];

/**
 * @public
 * @enum
 */
export const GuardrailContentFilterConfidence = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type GuardrailContentFilterConfidence =
  (typeof GuardrailContentFilterConfidence)[keyof typeof GuardrailContentFilterConfidence];

/**
 * @public
 * @enum
 */
export const GuardrailContentFilterStrength = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type GuardrailContentFilterStrength =
  (typeof GuardrailContentFilterStrength)[keyof typeof GuardrailContentFilterStrength];

/**
 * @public
 * @enum
 */
export const GuardrailContentFilterType = {
  HATE: "HATE",
  INSULTS: "INSULTS",
  MISCONDUCT: "MISCONDUCT",
  PROMPT_ATTACK: "PROMPT_ATTACK",
  SEXUAL: "SEXUAL",
  VIOLENCE: "VIOLENCE",
} as const;
/**
 * @public
 */
export type GuardrailContentFilterType = (typeof GuardrailContentFilterType)[keyof typeof GuardrailContentFilterType];

/**
 * @public
 * @enum
 */
export const GuardrailContextualGroundingPolicyAction = {
  BLOCKED: "BLOCKED",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type GuardrailContextualGroundingPolicyAction =
  (typeof GuardrailContextualGroundingPolicyAction)[keyof typeof GuardrailContextualGroundingPolicyAction];

/**
 * @public
 * @enum
 */
export const GuardrailContextualGroundingFilterType = {
  GROUNDING: "GROUNDING",
  RELEVANCE: "RELEVANCE",
} as const;
/**
 * @public
 */
export type GuardrailContextualGroundingFilterType =
  (typeof GuardrailContextualGroundingFilterType)[keyof typeof GuardrailContextualGroundingFilterType];

/**
 * @public
 * @enum
 */
export const GuardrailSensitiveInformationPolicyAction = {
  ANONYMIZED: "ANONYMIZED",
  BLOCKED: "BLOCKED",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type GuardrailSensitiveInformationPolicyAction =
  (typeof GuardrailSensitiveInformationPolicyAction)[keyof typeof GuardrailSensitiveInformationPolicyAction];

/**
 * @public
 * @enum
 */
export const GuardrailPiiEntityType = {
  ADDRESS: "ADDRESS",
  AGE: "AGE",
  AWS_ACCESS_KEY: "AWS_ACCESS_KEY",
  AWS_SECRET_KEY: "AWS_SECRET_KEY",
  CA_HEALTH_NUMBER: "CA_HEALTH_NUMBER",
  CA_SOCIAL_INSURANCE_NUMBER: "CA_SOCIAL_INSURANCE_NUMBER",
  CREDIT_DEBIT_CARD_CVV: "CREDIT_DEBIT_CARD_CVV",
  CREDIT_DEBIT_CARD_EXPIRY: "CREDIT_DEBIT_CARD_EXPIRY",
  CREDIT_DEBIT_CARD_NUMBER: "CREDIT_DEBIT_CARD_NUMBER",
  DRIVER_ID: "DRIVER_ID",
  EMAIL: "EMAIL",
  INTERNATIONAL_BANK_ACCOUNT_NUMBER: "INTERNATIONAL_BANK_ACCOUNT_NUMBER",
  IP_ADDRESS: "IP_ADDRESS",
  LICENSE_PLATE: "LICENSE_PLATE",
  MAC_ADDRESS: "MAC_ADDRESS",
  NAME: "NAME",
  PASSWORD: "PASSWORD",
  PHONE: "PHONE",
  PIN: "PIN",
  SWIFT_CODE: "SWIFT_CODE",
  UK_NATIONAL_HEALTH_SERVICE_NUMBER: "UK_NATIONAL_HEALTH_SERVICE_NUMBER",
  UK_NATIONAL_INSURANCE_NUMBER: "UK_NATIONAL_INSURANCE_NUMBER",
  UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER: "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
  URL: "URL",
  USERNAME: "USERNAME",
  US_BANK_ACCOUNT_NUMBER: "US_BANK_ACCOUNT_NUMBER",
  US_BANK_ROUTING_NUMBER: "US_BANK_ROUTING_NUMBER",
  US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER: "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER",
  US_PASSPORT_NUMBER: "US_PASSPORT_NUMBER",
  US_SOCIAL_SECURITY_NUMBER: "US_SOCIAL_SECURITY_NUMBER",
  VEHICLE_IDENTIFICATION_NUMBER: "VEHICLE_IDENTIFICATION_NUMBER",
} as const;
/**
 * @public
 */
export type GuardrailPiiEntityType = (typeof GuardrailPiiEntityType)[keyof typeof GuardrailPiiEntityType];

/**
 * @public
 * @enum
 */
export const GuardrailTopicPolicyAction = {
  BLOCKED: "BLOCKED",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type GuardrailTopicPolicyAction = (typeof GuardrailTopicPolicyAction)[keyof typeof GuardrailTopicPolicyAction];

/**
 * @public
 * @enum
 */
export const GuardrailTopicType = {
  DENY: "DENY",
} as const;
/**
 * @public
 */
export type GuardrailTopicType = (typeof GuardrailTopicType)[keyof typeof GuardrailTopicType];

/**
 * @public
 * @enum
 */
export const GuardrailWordPolicyAction = {
  BLOCKED: "BLOCKED",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type GuardrailWordPolicyAction = (typeof GuardrailWordPolicyAction)[keyof typeof GuardrailWordPolicyAction];

/**
 * @public
 * @enum
 */
export const GuardrailManagedWordType = {
  PROFANITY: "PROFANITY",
} as const;
/**
 * @public
 */
export type GuardrailManagedWordType = (typeof GuardrailManagedWordType)[keyof typeof GuardrailManagedWordType];

/**
 * @public
 * @enum
 */
export const GuardrailTrace = {
  DISABLED: "disabled",
  ENABLED: "enabled",
  ENABLED_FULL: "enabled_full",
} as const;
/**
 * @public
 */
export type GuardrailTrace = (typeof GuardrailTrace)[keyof typeof GuardrailTrace];

/**
 * @public
 * @enum
 */
export const CachePointType = {
  DEFAULT: "default",
} as const;
/**
 * @public
 */
export type CachePointType = (typeof CachePointType)[keyof typeof CachePointType];

/**
 * @public
 * @enum
 */
export const DocumentFormat = {
  CSV: "csv",
  DOC: "doc",
  DOCX: "docx",
  HTML: "html",
  MD: "md",
  PDF: "pdf",
  TXT: "txt",
  XLS: "xls",
  XLSX: "xlsx",
} as const;
/**
 * @public
 */
export type DocumentFormat = (typeof DocumentFormat)[keyof typeof DocumentFormat];

/**
 * @public
 * @enum
 */
export const GuardrailConverseImageFormat = {
  JPEG: "jpeg",
  PNG: "png",
} as const;
/**
 * @public
 */
export type GuardrailConverseImageFormat =
  (typeof GuardrailConverseImageFormat)[keyof typeof GuardrailConverseImageFormat];

/**
 * @public
 * @enum
 */
export const GuardrailConverseContentQualifier = {
  GROUNDING_SOURCE: "grounding_source",
  GUARD_CONTENT: "guard_content",
  QUERY: "query",
} as const;
/**
 * @public
 */
export type GuardrailConverseContentQualifier =
  (typeof GuardrailConverseContentQualifier)[keyof typeof GuardrailConverseContentQualifier];

/**
 * @public
 * @enum
 */
export const ImageFormat = {
  GIF: "gif",
  JPEG: "jpeg",
  PNG: "png",
  WEBP: "webp",
} as const;
/**
 * @public
 */
export type ImageFormat = (typeof ImageFormat)[keyof typeof ImageFormat];

/**
 * @public
 * @enum
 */
export const VideoFormat = {
  FLV: "flv",
  MKV: "mkv",
  MOV: "mov",
  MP4: "mp4",
  MPEG: "mpeg",
  MPG: "mpg",
  THREE_GP: "three_gp",
  WEBM: "webm",
  WMV: "wmv",
} as const;
/**
 * @public
 */
export type VideoFormat = (typeof VideoFormat)[keyof typeof VideoFormat];

/**
 * @public
 * @enum
 */
export const ToolResultStatus = {
  ERROR: "error",
  SUCCESS: "success",
} as const;
/**
 * @public
 */
export type ToolResultStatus = (typeof ToolResultStatus)[keyof typeof ToolResultStatus];

/**
 * @public
 * @enum
 */
export const ToolUseType = {
  SERVER_TOOL_USE: "server_tool_use",
} as const;
/**
 * @public
 */
export type ToolUseType = (typeof ToolUseType)[keyof typeof ToolUseType];

/**
 * @public
 * @enum
 */
export const ConversationRole = {
  ASSISTANT: "assistant",
  USER: "user",
} as const;
/**
 * @public
 */
export type ConversationRole = (typeof ConversationRole)[keyof typeof ConversationRole];

/**
 * @public
 * @enum
 */
export const PerformanceConfigLatency = {
  OPTIMIZED: "optimized",
  STANDARD: "standard",
} as const;
/**
 * @public
 */
export type PerformanceConfigLatency = (typeof PerformanceConfigLatency)[keyof typeof PerformanceConfigLatency];

/**
 * @public
 * @enum
 */
export const ServiceTierType = {
  DEFAULT: "default",
  FLEX: "flex",
  PRIORITY: "priority",
  RESERVED: "reserved",
} as const;
/**
 * @public
 */
export type ServiceTierType = (typeof ServiceTierType)[keyof typeof ServiceTierType];

/**
 * @public
 * @enum
 */
export const StopReason = {
  CONTENT_FILTERED: "content_filtered",
  END_TURN: "end_turn",
  GUARDRAIL_INTERVENED: "guardrail_intervened",
  MAX_TOKENS: "max_tokens",
  MODEL_CONTEXT_WINDOW_EXCEEDED: "model_context_window_exceeded",
  STOP_SEQUENCE: "stop_sequence",
  TOOL_USE: "tool_use",
} as const;
/**
 * @public
 */
export type StopReason = (typeof StopReason)[keyof typeof StopReason];

/**
 * @public
 * @enum
 */
export const GuardrailStreamProcessingMode = {
  ASYNC: "async",
  SYNC: "sync",
} as const;
/**
 * @public
 */
export type GuardrailStreamProcessingMode =
  (typeof GuardrailStreamProcessingMode)[keyof typeof GuardrailStreamProcessingMode];

/**
 * @public
 * @enum
 */
export const Trace = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  ENABLED_FULL: "ENABLED_FULL",
} as const;
/**
 * @public
 */
export type Trace = (typeof Trace)[keyof typeof Trace];
