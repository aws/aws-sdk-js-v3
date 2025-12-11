// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const CustomControlMethod = {
  RETURN_CONTROL: "RETURN_CONTROL",
} as const;
/**
 * @public
 */
export type CustomControlMethod = (typeof CustomControlMethod)[keyof typeof CustomControlMethod];

/**
 * @public
 * @enum
 */
export const ExecutionType = {
  LAMBDA: "LAMBDA",
  RETURN_CONTROL: "RETURN_CONTROL",
} as const;
/**
 * @public
 */
export type ExecutionType = (typeof ExecutionType)[keyof typeof ExecutionType];

/**
 * @public
 * @enum
 */
export const ActionGroupSignature = {
  AMAZON_CODEINTERPRETER: "AMAZON.CodeInterpreter",
  AMAZON_USERINPUT: "AMAZON.UserInput",
  ANTHROPIC_BASH: "ANTHROPIC.Bash",
  ANTHROPIC_COMPUTER: "ANTHROPIC.Computer",
  ANTHROPIC_TEXTEDITOR: "ANTHROPIC.TextEditor",
} as const;
/**
 * @public
 */
export type ActionGroupSignature = (typeof ActionGroupSignature)[keyof typeof ActionGroupSignature];

/**
 * @public
 * @enum
 */
export const ActionInvocationType = {
  RESULT: "RESULT",
  USER_CONFIRMATION: "USER_CONFIRMATION",
  USER_CONFIRMATION_AND_RESULT: "USER_CONFIRMATION_AND_RESULT",
} as const;
/**
 * @public
 */
export type ActionInvocationType = (typeof ActionInvocationType)[keyof typeof ActionInvocationType];

/**
 * @public
 * @enum
 */
export const ParameterType = {
  ARRAY: "array",
  BOOLEAN: "boolean",
  INTEGER: "integer",
  NUMBER: "number",
  STRING: "string",
} as const;
/**
 * @public
 */
export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

/**
 * @public
 * @enum
 */
export const RequireConfirmation = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type RequireConfirmation = (typeof RequireConfirmation)[keyof typeof RequireConfirmation];

/**
 * @public
 * @enum
 */
export const AgentCollaboration = {
  DISABLED: "DISABLED",
  SUPERVISOR: "SUPERVISOR",
  SUPERVISOR_ROUTER: "SUPERVISOR_ROUTER",
} as const;
/**
 * @public
 */
export type AgentCollaboration = (typeof AgentCollaboration)[keyof typeof AgentCollaboration];

/**
 * @public
 * @enum
 */
export const ConfirmationState = {
  CONFIRM: "CONFIRM",
  DENY: "DENY",
} as const;
/**
 * @public
 */
export type ConfirmationState = (typeof ConfirmationState)[keyof typeof ConfirmationState];

/**
 * @public
 * @enum
 */
export const ImageInputFormat = {
  GIF: "gif",
  JPEG: "jpeg",
  PNG: "png",
  WEBP: "webp",
} as const;
/**
 * @public
 */
export type ImageInputFormat = (typeof ImageInputFormat)[keyof typeof ImageInputFormat];

/**
 * @public
 * @enum
 */
export const ResponseState = {
  FAILURE: "FAILURE",
  REPROMPT: "REPROMPT",
} as const;
/**
 * @public
 */
export type ResponseState = (typeof ResponseState)[keyof typeof ResponseState];

/**
 * @public
 * @enum
 */
export const PayloadType = {
  RETURN_CONTROL: "RETURN_CONTROL",
  TEXT: "TEXT",
} as const;
/**
 * @public
 */
export type PayloadType = (typeof PayloadType)[keyof typeof PayloadType];

/**
 * @public
 * @enum
 */
export const GuardrailAction = {
  INTERVENED: "INTERVENED",
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
export const GuardrailContentPolicyAction = {
  BLOCKED: "BLOCKED",
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
export const GuardrailSensitiveInformationPolicyAction = {
  ANONYMIZED: "ANONYMIZED",
  BLOCKED: "BLOCKED",
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
export const InvocationType = {
  ACTION_GROUP: "ACTION_GROUP",
  ACTION_GROUP_CODE_INTERPRETER: "ACTION_GROUP_CODE_INTERPRETER",
  AGENT_COLLABORATOR: "AGENT_COLLABORATOR",
  FINISH: "FINISH",
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
} as const;
/**
 * @public
 */
export type InvocationType = (typeof InvocationType)[keyof typeof InvocationType];

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
  ROUTING_CLASSIFIER: "ROUTING_CLASSIFIER",
} as const;
/**
 * @public
 */
export type PromptType = (typeof PromptType)[keyof typeof PromptType];

/**
 * @public
 * @enum
 */
export const RetrievalResultContentColumnType = {
  BLOB: "BLOB",
  BOOLEAN: "BOOLEAN",
  DOUBLE: "DOUBLE",
  LONG: "LONG",
  NULL: "NULL",
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type RetrievalResultContentColumnType =
  (typeof RetrievalResultContentColumnType)[keyof typeof RetrievalResultContentColumnType];

/**
 * @public
 * @enum
 */
export const RetrievalResultContentType = {
  AUDIO: "AUDIO",
  IMAGE: "IMAGE",
  ROW: "ROW",
  TEXT: "TEXT",
  VIDEO: "VIDEO",
} as const;
/**
 * @public
 */
export type RetrievalResultContentType = (typeof RetrievalResultContentType)[keyof typeof RetrievalResultContentType];

/**
 * @public
 * @enum
 */
export const RetrievalResultLocationType = {
  CONFLUENCE: "CONFLUENCE",
  CUSTOM: "CUSTOM",
  KENDRA: "KENDRA",
  S3: "S3",
  SALESFORCE: "SALESFORCE",
  SHAREPOINT: "SHAREPOINT",
  SQL: "SQL",
  WEB: "WEB",
} as const;
/**
 * @public
 */
export type RetrievalResultLocationType =
  (typeof RetrievalResultLocationType)[keyof typeof RetrievalResultLocationType];

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
 * @public
 * @enum
 */
export const Type = {
  ACTION_GROUP: "ACTION_GROUP",
  AGENT_COLLABORATOR: "AGENT_COLLABORATOR",
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
 * @public
 * @enum
 */
export const FlowExecutionErrorType = {
  TIMED_OUT: "ExecutionTimedOut",
} as const;
/**
 * @public
 */
export type FlowExecutionErrorType = (typeof FlowExecutionErrorType)[keyof typeof FlowExecutionErrorType];

/**
 * @public
 * @enum
 */
export const FlowExecutionStatus = {
  ABORTED: "Aborted",
  FAILED: "Failed",
  RUNNING: "Running",
  SUCCEEDED: "Succeeded",
  TIMED_OUT: "TimedOut",
} as const;
/**
 * @public
 */
export type FlowExecutionStatus = (typeof FlowExecutionStatus)[keyof typeof FlowExecutionStatus];

/**
 * @public
 * @enum
 */
export const FlowExecutionEventType = {
  FLOW: "Flow",
  NODE: "Node",
} as const;
/**
 * @public
 */
export type FlowExecutionEventType = (typeof FlowExecutionEventType)[keyof typeof FlowExecutionEventType];

/**
 * @public
 * @enum
 */
export const FlowErrorCode = {
  INTERNAL_SERVER: "INTERNAL_SERVER",
  NODE_EXECUTION_FAILED: "NODE_EXECUTION_FAILED",
  VALIDATION: "VALIDATION",
} as const;
/**
 * @public
 */
export type FlowErrorCode = (typeof FlowErrorCode)[keyof typeof FlowErrorCode];

/**
 * @public
 * @enum
 */
export const NodeErrorCode = {
  BAD_GATEWAY: "BAD_GATEWAY",
  DEPENDENCY_FAILED: "DEPENDENCY_FAILED",
  INTERNAL_SERVER: "INTERNAL_SERVER",
  VALIDATION: "VALIDATION",
} as const;
/**
 * @public
 */
export type NodeErrorCode = (typeof NodeErrorCode)[keyof typeof NodeErrorCode];

/**
 * @public
 * @enum
 */
export const FlowNodeInputCategory = {
  EXIT_LOOP: "ExitLoop",
  LOOP_CONDITION: "LoopCondition",
  RETURN_VALUE_TO_LOOP_START: "ReturnValueToLoopStart",
} as const;
/**
 * @public
 */
export type FlowNodeInputCategory = (typeof FlowNodeInputCategory)[keyof typeof FlowNodeInputCategory];

/**
 * @public
 * @enum
 */
export const FlowControlNodeType = {
  ITERATOR: "Iterator",
  LOOP: "Loop",
} as const;
/**
 * @public
 */
export type FlowControlNodeType = (typeof FlowControlNodeType)[keyof typeof FlowControlNodeType];

/**
 * @public
 * @enum
 */
export const FlowNodeIODataType = {
  ARRAY: "Array",
  BOOLEAN: "Boolean",
  NUMBER: "Number",
  OBJECT: "Object",
  STRING: "String",
} as const;
/**
 * @public
 */
export type FlowNodeIODataType = (typeof FlowNodeIODataType)[keyof typeof FlowNodeIODataType];

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
export const FlowCompletionReason = {
  INPUT_REQUIRED: "INPUT_REQUIRED",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type FlowCompletionReason = (typeof FlowCompletionReason)[keyof typeof FlowCompletionReason];

/**
 * @public
 * @enum
 */
export const NodeType = {
  CONDITION_NODE: "ConditionNode",
  FLOW_INPUT_NODE: "FlowInputNode",
  FLOW_OUTPUT_NODE: "FlowOutputNode",
  KNOWLEDGE_BASE_NODE: "KnowledgeBaseNode",
  LAMBDA_FUNCTION_NODE: "LambdaFunctionNode",
  LEX_NODE: "LexNode",
  PROMPT_NODE: "PromptNode",
} as const;
/**
 * @public
 */
export type NodeType = (typeof NodeType)[keyof typeof NodeType];

/**
 * @public
 * @enum
 */
export const InputQueryType = {
  TEXT: "TEXT",
} as const;
/**
 * @public
 */
export type InputQueryType = (typeof InputQueryType)[keyof typeof InputQueryType];

/**
 * @public
 * @enum
 */
export const QueryTransformationMode = {
  TEXT_TO_SQL: "TEXT_TO_SQL",
} as const;
/**
 * @public
 */
export type QueryTransformationMode = (typeof QueryTransformationMode)[keyof typeof QueryTransformationMode];

/**
 * @public
 * @enum
 */
export const TextToSqlConfigurationType = {
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
} as const;
/**
 * @public
 */
export type TextToSqlConfigurationType = (typeof TextToSqlConfigurationType)[keyof typeof TextToSqlConfigurationType];

/**
 * @public
 * @enum
 */
export const GeneratedQueryType = {
  REDSHIFT_SQL: "REDSHIFT_SQL",
} as const;
/**
 * @public
 */
export type GeneratedQueryType = (typeof GeneratedQueryType)[keyof typeof GeneratedQueryType];

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
export const FileSourceType = {
  BYTE_CONTENT: "BYTE_CONTENT",
  S3: "S3",
} as const;
/**
 * @public
 */
export type FileSourceType = (typeof FileSourceType)[keyof typeof FileSourceType];

/**
 * @public
 * @enum
 */
export const FileUseCase = {
  CHAT: "CHAT",
  CODE_INTERPRETER: "CODE_INTERPRETER",
} as const;
/**
 * @public
 */
export type FileUseCase = (typeof FileUseCase)[keyof typeof FileUseCase];

/**
 * @public
 * @enum
 */
export const AttributeType = {
  BOOLEAN: "BOOLEAN",
  NUMBER: "NUMBER",
  STRING: "STRING",
  STRING_LIST: "STRING_LIST",
} as const;
/**
 * @public
 */
export type AttributeType = (typeof AttributeType)[keyof typeof AttributeType];

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
export const RerankingMetadataSelectionMode = {
  ALL: "ALL",
  SELECTIVE: "SELECTIVE",
} as const;
/**
 * @public
 */
export type RerankingMetadataSelectionMode =
  (typeof RerankingMetadataSelectionMode)[keyof typeof RerankingMetadataSelectionMode];

/**
 * @public
 * @enum
 */
export const VectorSearchRerankingConfigurationType = {
  BEDROCK_RERANKING_MODEL: "BEDROCK_RERANKING_MODEL",
} as const;
/**
 * @public
 */
export type VectorSearchRerankingConfigurationType =
  (typeof VectorSearchRerankingConfigurationType)[keyof typeof VectorSearchRerankingConfigurationType];

/**
 * @public
 * @enum
 */
export const RelayConversationHistory = {
  DISABLED: "DISABLED",
  TO_COLLABORATOR: "TO_COLLABORATOR",
} as const;
/**
 * @public
 */
export type RelayConversationHistory = (typeof RelayConversationHistory)[keyof typeof RelayConversationHistory];

/**
 * @public
 * @enum
 */
export const PromptState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type PromptState = (typeof PromptState)[keyof typeof PromptState];

/**
 * @public
 * @enum
 */
export const OrchestrationType = {
  CUSTOM_ORCHESTRATION: "CUSTOM_ORCHESTRATION",
  DEFAULT: "DEFAULT",
} as const;
/**
 * @public
 */
export type OrchestrationType = (typeof OrchestrationType)[keyof typeof OrchestrationType];

/**
 * @public
 * @enum
 */
export const MemoryType = {
  SESSION_SUMMARY: "SESSION_SUMMARY",
} as const;
/**
 * @public
 */
export type MemoryType = (typeof MemoryType)[keyof typeof MemoryType];

/**
 * @public
 * @enum
 */
export const RerankQueryContentType = {
  TEXT: "TEXT",
} as const;
/**
 * @public
 */
export type RerankQueryContentType = (typeof RerankQueryContentType)[keyof typeof RerankQueryContentType];

/**
 * @public
 * @enum
 */
export const RerankingConfigurationType = {
  BEDROCK_RERANKING_MODEL: "BEDROCK_RERANKING_MODEL",
} as const;
/**
 * @public
 */
export type RerankingConfigurationType = (typeof RerankingConfigurationType)[keyof typeof RerankingConfigurationType];

/**
 * @public
 * @enum
 */
export const RerankDocumentType = {
  JSON: "JSON",
  TEXT: "TEXT",
} as const;
/**
 * @public
 */
export type RerankDocumentType = (typeof RerankDocumentType)[keyof typeof RerankDocumentType];

/**
 * @public
 * @enum
 */
export const RerankSourceType = {
  INLINE: "INLINE",
} as const;
/**
 * @public
 */
export type RerankSourceType = (typeof RerankSourceType)[keyof typeof RerankSourceType];

/**
 * @public
 * @enum
 */
export const ExternalSourceType = {
  BYTE_CONTENT: "BYTE_CONTENT",
  S3: "S3",
} as const;
/**
 * @public
 */
export type ExternalSourceType = (typeof ExternalSourceType)[keyof typeof ExternalSourceType];

/**
 * @public
 * @enum
 */
export const QueryTransformationType = {
  QUERY_DECOMPOSITION: "QUERY_DECOMPOSITION",
} as const;
/**
 * @public
 */
export type QueryTransformationType = (typeof QueryTransformationType)[keyof typeof QueryTransformationType];

/**
 * @public
 * @enum
 */
export const RetrieveAndGenerateType = {
  EXTERNAL_SOURCES: "EXTERNAL_SOURCES",
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
} as const;
/**
 * @public
 */
export type RetrieveAndGenerateType = (typeof RetrieveAndGenerateType)[keyof typeof RetrieveAndGenerateType];

/**
 * @public
 * @enum
 */
export const GuadrailAction = {
  INTERVENED: "INTERVENED",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type GuadrailAction = (typeof GuadrailAction)[keyof typeof GuadrailAction];

/**
 * @public
 * @enum
 */
export const InputImageFormat = {
  gif: "gif",
  jpeg: "jpeg",
  png: "png",
  webp: "webp",
} as const;
/**
 * @public
 */
export type InputImageFormat = (typeof InputImageFormat)[keyof typeof InputImageFormat];

/**
 * @public
 * @enum
 */
export const KnowledgeBaseQueryType = {
  IMAGE: "IMAGE",
  TEXT: "TEXT",
} as const;
/**
 * @public
 */
export type KnowledgeBaseQueryType = (typeof KnowledgeBaseQueryType)[keyof typeof KnowledgeBaseQueryType];

/**
 * @public
 * @enum
 */
export const SessionStatus = {
  ACTIVE: "ACTIVE",
  ENDED: "ENDED",
  EXPIRED: "EXPIRED",
} as const;
/**
 * @public
 */
export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus];

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
