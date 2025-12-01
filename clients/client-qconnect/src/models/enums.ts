// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const KnowledgeBaseSearchType = {
  HYBRID: "HYBRID",
  SEMANTIC: "SEMANTIC",
} as const;
/**
 * @public
 */
export type KnowledgeBaseSearchType = (typeof KnowledgeBaseSearchType)[keyof typeof KnowledgeBaseSearchType];

/**
 * @public
 * @enum
 */
export const AIAgentAssociationConfigurationType = {
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
} as const;
/**
 * @public
 */
export type AIAgentAssociationConfigurationType =
  (typeof AIAgentAssociationConfigurationType)[keyof typeof AIAgentAssociationConfigurationType];

/**
 * @public
 * @enum
 */
export const ToolOverrideInputValueType = {
  JSON_STRING: "JSON_STRING",
  NUMBER: "NUMBER",
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type ToolOverrideInputValueType = (typeof ToolOverrideInputValueType)[keyof typeof ToolOverrideInputValueType];

/**
 * @public
 * @enum
 */
export const ToolType = {
  CONSTANT: "CONSTANT",
  MODEL_CONTEXT_PROTOCOL: "MODEL_CONTEXT_PROTOCOL",
  RETURN_TO_CONTROL: "RETURN_TO_CONTROL",
} as const;
/**
 * @public
 */
export type ToolType = (typeof ToolType)[keyof typeof ToolType];

/**
 * @public
 * @enum
 */
export const AIAgentType = {
  ANSWER_RECOMMENDATION: "ANSWER_RECOMMENDATION",
  CASE_SUMMARIZATION: "CASE_SUMMARIZATION",
  EMAIL_GENERATIVE_ANSWER: "EMAIL_GENERATIVE_ANSWER",
  EMAIL_OVERVIEW: "EMAIL_OVERVIEW",
  EMAIL_RESPONSE: "EMAIL_RESPONSE",
  MANUAL_SEARCH: "MANUAL_SEARCH",
  NOTE_TAKING: "NOTE_TAKING",
  ORCHESTRATION: "ORCHESTRATION",
  SELF_SERVICE: "SELF_SERVICE",
} as const;
/**
 * @public
 */
export type AIAgentType = (typeof AIAgentType)[keyof typeof AIAgentType];

/**
 * @public
 * @enum
 */
export const VisibilityStatus = {
  PUBLISHED: "PUBLISHED",
  SAVED: "SAVED",
} as const;
/**
 * @public
 */
export type VisibilityStatus = (typeof VisibilityStatus)[keyof typeof VisibilityStatus];

/**
 * @public
 * @enum
 */
export const Origin = {
  CUSTOMER: "CUSTOMER",
  SYSTEM: "SYSTEM",
} as const;
/**
 * @public
 */
export type Origin = (typeof Origin)[keyof typeof Origin];

/**
 * @public
 * @enum
 */
export const Status = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const GuardrailFilterStrength = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type GuardrailFilterStrength = (typeof GuardrailFilterStrength)[keyof typeof GuardrailFilterStrength];

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
export const GuardrailSensitiveInformationAction = {
  ANONYMIZE: "ANONYMIZE",
  BLOCK: "BLOCK",
} as const;
/**
 * @public
 */
export type GuardrailSensitiveInformationAction =
  (typeof GuardrailSensitiveInformationAction)[keyof typeof GuardrailSensitiveInformationAction];

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
export const GuardrailManagedWordsType = {
  PROFANITY: "PROFANITY",
} as const;
/**
 * @public
 */
export type GuardrailManagedWordsType = (typeof GuardrailManagedWordsType)[keyof typeof GuardrailManagedWordsType];

/**
 * @public
 * @enum
 */
export const AIPromptAPIFormat = {
  ANTHROPIC_CLAUDE_MESSAGES: "ANTHROPIC_CLAUDE_MESSAGES",
  ANTHROPIC_CLAUDE_TEXT_COMPLETIONS: "ANTHROPIC_CLAUDE_TEXT_COMPLETIONS",
  MESSAGES: "MESSAGES",
  TEXT_COMPLETIONS: "TEXT_COMPLETIONS",
} as const;
/**
 * @public
 */
export type AIPromptAPIFormat = (typeof AIPromptAPIFormat)[keyof typeof AIPromptAPIFormat];

/**
 * @public
 * @enum
 */
export const AIPromptTemplateType = {
  TEXT: "TEXT",
} as const;
/**
 * @public
 */
export type AIPromptTemplateType = (typeof AIPromptTemplateType)[keyof typeof AIPromptTemplateType];

/**
 * @public
 * @enum
 */
export const AIPromptType = {
  ANSWER_GENERATION: "ANSWER_GENERATION",
  CASE_SUMMARIZATION: "CASE_SUMMARIZATION",
  EMAIL_GENERATIVE_ANSWER: "EMAIL_GENERATIVE_ANSWER",
  EMAIL_OVERVIEW: "EMAIL_OVERVIEW",
  EMAIL_QUERY_REFORMULATION: "EMAIL_QUERY_REFORMULATION",
  EMAIL_RESPONSE: "EMAIL_RESPONSE",
  INTENT_LABELING_GENERATION: "INTENT_LABELING_GENERATION",
  NOTE_TAKING: "NOTE_TAKING",
  ORCHESTRATION: "ORCHESTRATION",
  QUERY_REFORMULATION: "QUERY_REFORMULATION",
  SELF_SERVICE_ANSWER_GENERATION: "SELF_SERVICE_ANSWER_GENERATION",
  SELF_SERVICE_PRE_PROCESSING: "SELF_SERVICE_PRE_PROCESSING",
} as const;
/**
 * @public
 */
export type AIPromptType = (typeof AIPromptType)[keyof typeof AIPromptType];

/**
 * @public
 * @enum
 */
export const AssociationType = {
  EXTERNAL_BEDROCK_KNOWLEDGE_BASE: "EXTERNAL_BEDROCK_KNOWLEDGE_BASE",
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
} as const;
/**
 * @public
 */
export type AssociationType = (typeof AssociationType)[keyof typeof AssociationType];

/**
 * @public
 * @enum
 */
export const AssistantType = {
  AGENT: "AGENT",
} as const;
/**
 * @public
 */
export type AssistantType = (typeof AssistantType)[keyof typeof AssistantType];

/**
 * @public
 * @enum
 */
export const AssistantCapabilityType = {
  V1: "V1",
  V2: "V2",
} as const;
/**
 * @public
 */
export type AssistantCapabilityType = (typeof AssistantCapabilityType)[keyof typeof AssistantCapabilityType];

/**
 * @public
 * @enum
 */
export const AssistantStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type AssistantStatus = (typeof AssistantStatus)[keyof typeof AssistantStatus];

/**
 * @public
 * @enum
 */
export const RecommendationType = {
  BLOCKED_CASE_SUMMARIZATION_CHUNK: "BLOCKED_CASE_SUMMARIZATION_CHUNK",
  BLOCKED_GENERATIVE_ANSWER_CHUNK: "BLOCKED_GENERATIVE_ANSWER_CHUNK",
  BLOCKED_INTENT_ANSWER_CHUNK: "BLOCKED_INTENT_ANSWER_CHUNK",
  BLOCKED_NOTES_CHUNK: "BLOCKED_NOTES_CHUNK",
  CASE_SUMMARIZATION_CHUNK: "CASE_SUMMARIZATION_CHUNK",
  DETECTED_INTENT: "DETECTED_INTENT",
  EMAIL_GENERATIVE_ANSWER_CHUNK: "EMAIL_GENERATIVE_ANSWER_CHUNK",
  EMAIL_OVERVIEW_CHUNK: "EMAIL_OVERVIEW_CHUNK",
  EMAIL_RESPONSE_CHUNK: "EMAIL_RESPONSE_CHUNK",
  GENERATIVE_ANSWER: "GENERATIVE_ANSWER",
  GENERATIVE_ANSWER_CHUNK: "GENERATIVE_ANSWER_CHUNK",
  GENERATIVE_RESPONSE: "GENERATIVE_RESPONSE",
  INTENT_ANSWER_CHUNK: "INTENT_ANSWER_CHUNK",
  KNOWLEDGE_CONTENT: "KNOWLEDGE_CONTENT",
  NOTES_CHUNK: "NOTES_CHUNK",
  SUGGESTED_MESSAGE: "SUGGESTED_MESSAGE",
} as const;
/**
 * @public
 */
export type RecommendationType = (typeof RecommendationType)[keyof typeof RecommendationType];

/**
 * @public
 * @enum
 */
export const RelevanceLevel = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type RelevanceLevel = (typeof RelevanceLevel)[keyof typeof RelevanceLevel];

/**
 * @public
 * @enum
 */
export const SourceContentType = {
  KNOWLEDGE_CONTENT: "KNOWLEDGE_CONTENT",
} as const;
/**
 * @public
 */
export type SourceContentType = (typeof SourceContentType)[keyof typeof SourceContentType];

/**
 * @public
 * @enum
 */
export const ReferenceType = {
  BEDROCK_KB_CONFLUENCE: "BEDROCK_KB_CONFLUENCE",
  BEDROCK_KB_CUSTOM_DOCUMENT: "BEDROCK_KB_CUSTOM_DOCUMENT",
  BEDROCK_KB_KENDRA: "BEDROCK_KB_KENDRA",
  BEDROCK_KB_S3: "BEDROCK_KB_S3",
  BEDROCK_KB_SALESFORCE: "BEDROCK_KB_SALESFORCE",
  BEDROCK_KB_SHAREPOINT: "BEDROCK_KB_SHAREPOINT",
  BEDROCK_KB_SQL: "BEDROCK_KB_SQL",
  BEDROCK_KB_WEB: "BEDROCK_KB_WEB",
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
  WEB_CRAWLER: "WEB_CRAWLER",
} as const;
/**
 * @public
 */
export type ReferenceType = (typeof ReferenceType)[keyof typeof ReferenceType];

/**
 * @public
 * @enum
 */
export const RecommendationSourceType = {
  ISSUE_DETECTION: "ISSUE_DETECTION",
  OTHER: "OTHER",
  RULE_EVALUATION: "RULE_EVALUATION",
} as const;
/**
 * @public
 */
export type RecommendationSourceType = (typeof RecommendationSourceType)[keyof typeof RecommendationSourceType];

/**
 * @public
 * @enum
 */
export const RecommendationTriggerType = {
  GENERATIVE: "GENERATIVE",
  QUERY: "QUERY",
} as const;
/**
 * @public
 */
export type RecommendationTriggerType = (typeof RecommendationTriggerType)[keyof typeof RecommendationTriggerType];

/**
 * @public
 * @enum
 */
export const Relevance = {
  HELPFUL: "HELPFUL",
  NOT_HELPFUL: "NOT_HELPFUL",
} as const;
/**
 * @public
 */
export type Relevance = (typeof Relevance)[keyof typeof Relevance];

/**
 * @public
 * @enum
 */
export const TargetType = {
  RECOMMENDATION: "RECOMMENDATION",
  RESULT: "RESULT",
} as const;
/**
 * @public
 */
export type TargetType = (typeof TargetType)[keyof typeof TargetType];

/**
 * @public
 * @enum
 */
export const QueryConditionComparisonOperator = {
  EQUALS: "EQUALS",
} as const;
/**
 * @public
 */
export type QueryConditionComparisonOperator =
  (typeof QueryConditionComparisonOperator)[keyof typeof QueryConditionComparisonOperator];

/**
 * @public
 * @enum
 */
export const QueryConditionFieldName = {
  RESULT_TYPE: "RESULT_TYPE",
} as const;
/**
 * @public
 */
export type QueryConditionFieldName = (typeof QueryConditionFieldName)[keyof typeof QueryConditionFieldName];

/**
 * @public
 * @enum
 */
export const QueryResultType = {
  BLOCKED_CASE_SUMMARIZATION_CHUNK: "BLOCKED_CASE_SUMMARIZATION_CHUNK",
  BLOCKED_GENERATIVE_ANSWER_CHUNK: "BLOCKED_GENERATIVE_ANSWER_CHUNK",
  BLOCKED_INTENT_ANSWER_CHUNK: "BLOCKED_INTENT_ANSWER_CHUNK",
  BLOCKED_NOTES_CHUNK: "BLOCKED_NOTES_CHUNK",
  CASE_SUMMARIZATION_CHUNK: "CASE_SUMMARIZATION_CHUNK",
  EMAIL_GENERATIVE_ANSWER_CHUNK: "EMAIL_GENERATIVE_ANSWER_CHUNK",
  EMAIL_OVERVIEW_CHUNK: "EMAIL_OVERVIEW_CHUNK",
  EMAIL_RESPONSE_CHUNK: "EMAIL_RESPONSE_CHUNK",
  GENERATIVE_ANSWER: "GENERATIVE_ANSWER",
  GENERATIVE_ANSWER_CHUNK: "GENERATIVE_ANSWER_CHUNK",
  INTENT_ANSWER: "INTENT_ANSWER",
  INTENT_ANSWER_CHUNK: "INTENT_ANSWER_CHUNK",
  KNOWLEDGE_CONTENT: "KNOWLEDGE_CONTENT",
  NOTES: "NOTES",
  NOTES_CHUNK: "NOTES_CHUNK",
} as const;
/**
 * @public
 */
export type QueryResultType = (typeof QueryResultType)[keyof typeof QueryResultType];

/**
 * @public
 * @enum
 */
export const FilterField = {
  NAME: "NAME",
} as const;
/**
 * @public
 */
export type FilterField = (typeof FilterField)[keyof typeof FilterField];

/**
 * @public
 * @enum
 */
export const FilterOperator = {
  EQUALS: "EQUALS",
} as const;
/**
 * @public
 */
export type FilterOperator = (typeof FilterOperator)[keyof typeof FilterOperator];

/**
 * @public
 * @enum
 */
export const ConversationStatusReason = {
  FAILED: "FAILED",
  REJECTED: "REJECTED",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type ConversationStatusReason = (typeof ConversationStatusReason)[keyof typeof ConversationStatusReason];

/**
 * @public
 * @enum
 */
export const ConversationStatus = {
  CLOSED: "CLOSED",
  PROCESSING: "PROCESSING",
  READY: "READY",
} as const;
/**
 * @public
 */
export type ConversationStatus = (typeof ConversationStatus)[keyof typeof ConversationStatus];

/**
 * @public
 * @enum
 */
export const Participant = {
  AGENT: "AGENT",
  BOT: "BOT",
  CUSTOMER: "CUSTOMER",
} as const;
/**
 * @public
 */
export type Participant = (typeof Participant)[keyof typeof Participant];

/**
 * @public
 * @enum
 */
export const MessageType = {
  TEXT: "TEXT",
} as const;
/**
 * @public
 */
export type MessageType = (typeof MessageType)[keyof typeof MessageType];

/**
 * @public
 * @enum
 */
export const MessageFilterType = {
  ALL: "ALL",
  TEXT_ONLY: "TEXT_ONLY",
} as const;
/**
 * @public
 */
export type MessageFilterType = (typeof MessageFilterType)[keyof typeof MessageFilterType];

/**
 * @public
 * @enum
 */
export const SpanType = {
  CLIENT: "CLIENT",
  INTERNAL: "INTERNAL",
  SERVER: "SERVER",
} as const;
/**
 * @public
 */
export type SpanType = (typeof SpanType)[keyof typeof SpanType];

/**
 * @public
 * @enum
 */
export const SpanStatus = {
  ERROR: "ERROR",
  OK: "OK",
  TIMEOUT: "TIMEOUT",
} as const;
/**
 * @public
 */
export type SpanStatus = (typeof SpanStatus)[keyof typeof SpanStatus];

/**
 * @public
 * @enum
 */
export const SessionDataNamespace = {
  Custom: "Custom",
} as const;
/**
 * @public
 */
export type SessionDataNamespace = (typeof SessionDataNamespace)[keyof typeof SessionDataNamespace];

/**
 * @public
 * @enum
 */
export const ChannelSubtype = {
  EMAIL: "EMAIL",
  PUSH: "PUSH",
  SMS: "SMS",
  WHATSAPP: "WHATSAPP",
} as const;
/**
 * @public
 */
export type ChannelSubtype = (typeof ChannelSubtype)[keyof typeof ChannelSubtype];

/**
 * @public
 * @enum
 */
export const ChunkingStrategy = {
  FIXED_SIZE: "FIXED_SIZE",
  HIERARCHICAL: "HIERARCHICAL",
  NONE: "NONE",
  SEMANTIC: "SEMANTIC",
} as const;
/**
 * @public
 */
export type ChunkingStrategy = (typeof ChunkingStrategy)[keyof typeof ChunkingStrategy];

/**
 * @public
 * @enum
 */
export const ContentAssociationType = {
  AMAZON_CONNECT_GUIDE: "AMAZON_CONNECT_GUIDE",
} as const;
/**
 * @public
 */
export type ContentAssociationType = (typeof ContentAssociationType)[keyof typeof ContentAssociationType];

/**
 * @public
 * @enum
 */
export const ContentStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  UPDATE_FAILED: "UPDATE_FAILED",
} as const;
/**
 * @public
 */
export type ContentStatus = (typeof ContentStatus)[keyof typeof ContentStatus];

/**
 * @public
 * @enum
 */
export const ContentDisposition = {
  ATTACHMENT: "ATTACHMENT",
} as const;
/**
 * @public
 */
export type ContentDisposition = (typeof ContentDisposition)[keyof typeof ContentDisposition];

/**
 * @public
 * @enum
 */
export const KnowledgeBaseType = {
  CUSTOM: "CUSTOM",
  EXTERNAL: "EXTERNAL",
  MANAGED: "MANAGED",
  MESSAGE_TEMPLATES: "MESSAGE_TEMPLATES",
  QUICK_RESPONSES: "QUICK_RESPONSES",
} as const;
/**
 * @public
 */
export type KnowledgeBaseType = (typeof KnowledgeBaseType)[keyof typeof KnowledgeBaseType];

/**
 * @public
 * @enum
 */
export const WebScopeType = {
  HOST_ONLY: "HOST_ONLY",
  SUBDOMAINS: "SUBDOMAINS",
} as const;
/**
 * @public
 */
export type WebScopeType = (typeof WebScopeType)[keyof typeof WebScopeType];

/**
 * @public
 * @enum
 */
export const ParsingStrategy = {
  BEDROCK_FOUNDATION_MODEL: "BEDROCK_FOUNDATION_MODEL",
} as const;
/**
 * @public
 */
export type ParsingStrategy = (typeof ParsingStrategy)[keyof typeof ParsingStrategy];

/**
 * @public
 * @enum
 */
export const SyncStatus = {
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  SYNCING_IN_PROGRESS: "SYNCING_IN_PROGRESS",
  SYNC_FAILED: "SYNC_FAILED",
  SYNC_SUCCESS: "SYNC_SUCCESS",
} as const;
/**
 * @public
 */
export type SyncStatus = (typeof SyncStatus)[keyof typeof SyncStatus];

/**
 * @public
 * @enum
 */
export const KnowledgeBaseStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type KnowledgeBaseStatus = (typeof KnowledgeBaseStatus)[keyof typeof KnowledgeBaseStatus];

/**
 * @public
 * @enum
 */
export const PushMessageAction = {
  DEEP_LINK: "DEEP_LINK",
  OPEN_APP: "OPEN_APP",
  URL: "URL",
} as const;
/**
 * @public
 */
export type PushMessageAction = (typeof PushMessageAction)[keyof typeof PushMessageAction];

/**
 * @public
 * @enum
 */
export const MessageTemplateAttributeType = {
  AGENT: "AGENT",
  CUSTOM: "CUSTOM",
  CUSTOMER_PROFILE: "CUSTOMER_PROFILE",
  SYSTEM: "SYSTEM",
} as const;
/**
 * @public
 */
export type MessageTemplateAttributeType =
  (typeof MessageTemplateAttributeType)[keyof typeof MessageTemplateAttributeType];

/**
 * @public
 * @enum
 */
export const WhatsAppSourceConfigurationStatus = {
  INVALID: "INVALID",
  REJECTED: "REJECTED",
  VALID: "VALID",
} as const;
/**
 * @public
 */
export type WhatsAppSourceConfigurationStatus =
  (typeof WhatsAppSourceConfigurationStatus)[keyof typeof WhatsAppSourceConfigurationStatus];

/**
 * @public
 * @enum
 */
export const QuickResponseStatus = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type QuickResponseStatus = (typeof QuickResponseStatus)[keyof typeof QuickResponseStatus];

/**
 * @public
 * @enum
 */
export const ExternalSource = {
  AMAZON_CONNECT: "AMAZON_CONNECT",
} as const;
/**
 * @public
 */
export type ExternalSource = (typeof ExternalSource)[keyof typeof ExternalSource];

/**
 * @public
 * @enum
 */
export const ImportJobType = {
  QUICK_RESPONSES: "QUICK_RESPONSES",
} as const;
/**
 * @public
 */
export type ImportJobType = (typeof ImportJobType)[keyof typeof ImportJobType];

/**
 * @public
 * @enum
 */
export const ImportJobStatus = {
  COMPLETE: "COMPLETE",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  FAILED: "FAILED",
  START_IN_PROGRESS: "START_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ImportJobStatus = (typeof ImportJobStatus)[keyof typeof ImportJobStatus];

/**
 * @public
 * @enum
 */
export const MessageTemplateFilterOperator = {
  EQUALS: "EQUALS",
  PREFIX: "PREFIX",
} as const;
/**
 * @public
 */
export type MessageTemplateFilterOperator =
  (typeof MessageTemplateFilterOperator)[keyof typeof MessageTemplateFilterOperator];

/**
 * @public
 * @enum
 */
export const Order = {
  ASC: "ASC",
  DESC: "DESC",
} as const;
/**
 * @public
 */
export type Order = (typeof Order)[keyof typeof Order];

/**
 * @public
 * @enum
 */
export const MessageTemplateQueryOperator = {
  CONTAINS: "CONTAINS",
  CONTAINS_AND_PREFIX: "CONTAINS_AND_PREFIX",
} as const;
/**
 * @public
 */
export type MessageTemplateQueryOperator =
  (typeof MessageTemplateQueryOperator)[keyof typeof MessageTemplateQueryOperator];

/**
 * @public
 * @enum
 */
export const Priority = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type Priority = (typeof Priority)[keyof typeof Priority];

/**
 * @public
 * @enum
 */
export const QuickResponseFilterOperator = {
  EQUALS: "EQUALS",
  PREFIX: "PREFIX",
} as const;
/**
 * @public
 */
export type QuickResponseFilterOperator =
  (typeof QuickResponseFilterOperator)[keyof typeof QuickResponseFilterOperator];

/**
 * @public
 * @enum
 */
export const QuickResponseQueryOperator = {
  CONTAINS: "CONTAINS",
  CONTAINS_AND_PREFIX: "CONTAINS_AND_PREFIX",
} as const;
/**
 * @public
 */
export type QuickResponseQueryOperator = (typeof QuickResponseQueryOperator)[keyof typeof QuickResponseQueryOperator];
