// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessType = {
  ALLOW: "ALLOW",
} as const;
/**
 * @public
 */
export type AccessType = (typeof AccessType)[keyof typeof AccessType];

/**
 * @public
 * @enum
 */
export const ActionType = {
  ASSIGN_CONTACT_CATEGORY: "ASSIGN_CONTACT_CATEGORY",
  ASSIGN_SLA: "ASSIGN_SLA",
  CREATE_CASE: "CREATE_CASE",
  CREATE_TASK: "CREATE_TASK",
  END_ASSOCIATED_TASKS: "END_ASSOCIATED_TASKS",
  GENERATE_EVENTBRIDGE_EVENT: "GENERATE_EVENTBRIDGE_EVENT",
  SEND_NOTIFICATION: "SEND_NOTIFICATION",
  SUBMIT_AUTO_EVALUATION: "SUBMIT_AUTO_EVALUATION",
  UPDATE_CASE: "UPDATE_CASE",
} as const;
/**
 * @public
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

/**
 * @public
 * @enum
 */
export const AgentAvailabilityTimer = {
  TIME_SINCE_LAST_ACTIVITY: "TIME_SINCE_LAST_ACTIVITY",
  TIME_SINCE_LAST_INBOUND: "TIME_SINCE_LAST_INBOUND",
} as const;
/**
 * @public
 */
export type AgentAvailabilityTimer = (typeof AgentAvailabilityTimer)[keyof typeof AgentAvailabilityTimer];

/**
 * @public
 * @enum
 */
export const ContactState = {
  CONNECTED: "CONNECTED",
  CONNECTED_ONHOLD: "CONNECTED_ONHOLD",
  CONNECTING: "CONNECTING",
  ENDED: "ENDED",
  ERROR: "ERROR",
  INCOMING: "INCOMING",
  MISSED: "MISSED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type ContactState = (typeof ContactState)[keyof typeof ContactState];

/**
 * @public
 * @enum
 */
export const Channel = {
  CHAT: "CHAT",
  EMAIL: "EMAIL",
  TASK: "TASK",
  VOICE: "VOICE",
} as const;
/**
 * @public
 */
export type Channel = (typeof Channel)[keyof typeof Channel];

/**
 * @public
 * @enum
 */
export const ContactInitiationMethod = {
  AGENT_REPLY: "AGENT_REPLY",
  API: "API",
  CALLBACK: "CALLBACK",
  DISCONNECT: "DISCONNECT",
  EXTERNAL_OUTBOUND: "EXTERNAL_OUTBOUND",
  FLOW: "FLOW",
  INBOUND: "INBOUND",
  MONITOR: "MONITOR",
  OUTBOUND: "OUTBOUND",
  QUEUE_TRANSFER: "QUEUE_TRANSFER",
  TRANSFER: "TRANSFER",
  WEBRTC_API: "WEBRTC_API",
} as const;
/**
 * @public
 */
export type ContactInitiationMethod = (typeof ContactInitiationMethod)[keyof typeof ContactInitiationMethod];

/**
 * @public
 * @enum
 */
export const AllowedUserAction = {
  CALL: "CALL",
  DISCARD: "DISCARD",
} as const;
/**
 * @public
 */
export type AllowedUserAction = (typeof AllowedUserAction)[keyof typeof AllowedUserAction];

/**
 * @public
 * @enum
 */
export const ScreenShareCapability = {
  SEND: "SEND",
} as const;
/**
 * @public
 */
export type ScreenShareCapability = (typeof ScreenShareCapability)[keyof typeof ScreenShareCapability];

/**
 * @public
 * @enum
 */
export const VideoCapability = {
  SEND: "SEND",
} as const;
/**
 * @public
 */
export type VideoCapability = (typeof VideoCapability)[keyof typeof VideoCapability];

/**
 * @public
 * @enum
 */
export const ParticipantState = {
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED",
  INITIAL: "INITIAL",
  MISSED: "MISSED",
} as const;
/**
 * @public
 */
export type ParticipantState = (typeof ParticipantState)[keyof typeof ParticipantState];

/**
 * @public
 * @enum
 */
export const AgentStatusState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AgentStatusState = (typeof AgentStatusState)[keyof typeof AgentStatusState];

/**
 * @public
 * @enum
 */
export const AgentStatusType = {
  CUSTOM: "CUSTOM",
  OFFLINE: "OFFLINE",
  ROUTABLE: "ROUTABLE",
} as const;
/**
 * @public
 */
export type AgentStatusType = (typeof AgentStatusType)[keyof typeof AgentStatusType];

/**
 * @public
 * @enum
 */
export const StringComparisonType = {
  CONTAINS: "CONTAINS",
  EXACT: "EXACT",
  STARTS_WITH: "STARTS_WITH",
} as const;
/**
 * @public
 */
export type StringComparisonType = (typeof StringComparisonType)[keyof typeof StringComparisonType];

/**
 * @public
 * @enum
 */
export const AiUseCase = {
  AgentAssistance: "AgentAssistance",
  SelfService: "SelfService",
} as const;
/**
 * @public
 */
export type AiUseCase = (typeof AiUseCase)[keyof typeof AiUseCase];

/**
 * @public
 * @enum
 */
export const FlowModuleType = {
  MCP: "MCP",
} as const;
/**
 * @public
 */
export type FlowModuleType = (typeof FlowModuleType)[keyof typeof FlowModuleType];

/**
 * @public
 * @enum
 */
export const MonitorCapability = {
  BARGE: "BARGE",
  SILENT_MONITOR: "SILENT_MONITOR",
} as const;
/**
 * @public
 */
export type MonitorCapability = (typeof MonitorCapability)[keyof typeof MonitorCapability];

/**
 * @public
 * @enum
 */
export const AttachedFileInvalidRequestExceptionReason = {
  INVALID_FILE_NAME: "INVALID_FILE_NAME",
  INVALID_FILE_SIZE: "INVALID_FILE_SIZE",
  INVALID_FILE_TYPE: "INVALID_FILE_TYPE",
} as const;
/**
 * @public
 */
export type AttachedFileInvalidRequestExceptionReason =
  (typeof AttachedFileInvalidRequestExceptionReason)[keyof typeof AttachedFileInvalidRequestExceptionReason];

/**
 * @public
 * @enum
 */
export const AttachedFileServiceQuotaExceededExceptionReason = {
  TOTAL_FILE_COUNT_EXCEEDED: "TOTAL_FILE_COUNT_EXCEEDED",
  TOTAL_FILE_SIZE_EXCEEDED: "TOTAL_FILE_SIZE_EXCEEDED",
} as const;
/**
 * @public
 */
export type AttachedFileServiceQuotaExceededExceptionReason =
  (typeof AttachedFileServiceQuotaExceededExceptionReason)[keyof typeof AttachedFileServiceQuotaExceededExceptionReason];

/**
 * @public
 * @enum
 */
export const VocabularyLanguageCode = {
  AR_AE: "ar-AE",
  CA_ES: "ca-ES",
  DA_DK: "da-DK",
  DE_CH: "de-CH",
  DE_DE: "de-DE",
  EN_AB: "en-AB",
  EN_AU: "en-AU",
  EN_GB: "en-GB",
  EN_IE: "en-IE",
  EN_IN: "en-IN",
  EN_NZ: "en-NZ",
  EN_US: "en-US",
  EN_WL: "en-WL",
  EN_ZA: "en-ZA",
  ES_ES: "es-ES",
  ES_US: "es-US",
  FI_FI: "fi-FI",
  FR_CA: "fr-CA",
  FR_FR: "fr-FR",
  HI_IN: "hi-IN",
  ID_ID: "id-ID",
  IT_IT: "it-IT",
  JA_JP: "ja-JP",
  KO_KR: "ko-KR",
  MS_MY: "ms-MY",
  NL_NL: "nl-NL",
  NO_NO: "no-NO",
  PL_PL: "pl-PL",
  PT_BR: "pt-BR",
  PT_PT: "pt-PT",
  SV_SE: "sv-SE",
  TL_PH: "tl-PH",
  ZH_CN: "zh-CN",
} as const;
/**
 * @public
 */
export type VocabularyLanguageCode = (typeof VocabularyLanguageCode)[keyof typeof VocabularyLanguageCode];

/**
 * @public
 * @enum
 */
export const FlowAssociationResourceType = {
  ANALYTICS_CONNECTOR: "ANALYTICS_CONNECTOR",
  INBOUND_EMAIL: "INBOUND_EMAIL",
  OUTBOUND_EMAIL: "OUTBOUND_EMAIL",
  SMS_PHONE_NUMBER: "SMS_PHONE_NUMBER",
  WHATSAPP_MESSAGING_PHONE_NUMBER: "WHATSAPP_MESSAGING_PHONE_NUMBER",
} as const;
/**
 * @public
 */
export type FlowAssociationResourceType =
  (typeof FlowAssociationResourceType)[keyof typeof FlowAssociationResourceType];

/**
 * @public
 * @enum
 */
export const InstanceStorageResourceType = {
  AGENT_EVENTS: "AGENT_EVENTS",
  ATTACHMENTS: "ATTACHMENTS",
  CALL_RECORDINGS: "CALL_RECORDINGS",
  CHAT_TRANSCRIPTS: "CHAT_TRANSCRIPTS",
  CONTACT_EVALUATIONS: "CONTACT_EVALUATIONS",
  CONTACT_TRACE_RECORDS: "CONTACT_TRACE_RECORDS",
  EMAIL_MESSAGES: "EMAIL_MESSAGES",
  MEDIA_STREAMS: "MEDIA_STREAMS",
  REAL_TIME_CONTACT_ANALYSIS_CHAT_SEGMENTS: "REAL_TIME_CONTACT_ANALYSIS_CHAT_SEGMENTS",
  REAL_TIME_CONTACT_ANALYSIS_SEGMENTS: "REAL_TIME_CONTACT_ANALYSIS_SEGMENTS",
  REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS: "REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS",
  SCHEDULED_REPORTS: "SCHEDULED_REPORTS",
  SCREEN_RECORDINGS: "SCREEN_RECORDINGS",
} as const;
/**
 * @public
 */
export type InstanceStorageResourceType =
  (typeof InstanceStorageResourceType)[keyof typeof InstanceStorageResourceType];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  KMS: "KMS",
} as const;
/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * @enum
 */
export const StorageType = {
  KINESIS_FIREHOSE: "KINESIS_FIREHOSE",
  KINESIS_STREAM: "KINESIS_STREAM",
  KINESIS_VIDEO_STREAM: "KINESIS_VIDEO_STREAM",
  S3: "S3",
} as const;
/**
 * @public
 */
export type StorageType = (typeof StorageType)[keyof typeof StorageType];

/**
 * @public
 * @enum
 */
export const EntityType = {
  AI_AGENT: "AI_AGENT",
  USER: "USER",
} as const;
/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

/**
 * @public
 * @enum
 */
export const FileStatusType = {
  APPROVED: "APPROVED",
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type FileStatusType = (typeof FileStatusType)[keyof typeof FileStatusType];

/**
 * @public
 * @enum
 */
export const FileUseCaseType = {
  ATTACHMENT: "ATTACHMENT",
  EMAIL_MESSAGE: "EMAIL_MESSAGE",
} as const;
/**
 * @public
 */
export type FileUseCaseType = (typeof FileUseCaseType)[keyof typeof FileUseCaseType];

/**
 * @public
 * @enum
 */
export const ListFlowAssociationResourceType = {
  ANALYTICS_CONNECTOR: "ANALYTICS_CONNECTOR",
  INBOUND_EMAIL: "INBOUND_EMAIL",
  OUTBOUND_EMAIL: "OUTBOUND_EMAIL",
  VOICE_PHONE_NUMBER: "VOICE_PHONE_NUMBER",
  WHATSAPP_MESSAGING_PHONE_NUMBER: "WHATSAPP_MESSAGING_PHONE_NUMBER",
} as const;
/**
 * @public
 */
export type ListFlowAssociationResourceType =
  (typeof ListFlowAssociationResourceType)[keyof typeof ListFlowAssociationResourceType];

/**
 * @public
 * @enum
 */
export const EndpointType = {
  CONNECT_PHONENUMBER_ARN: "CONNECT_PHONENUMBER_ARN",
  CONTACT_FLOW: "CONTACT_FLOW",
  EMAIL_ADDRESS: "EMAIL_ADDRESS",
  TELEPHONE_NUMBER: "TELEPHONE_NUMBER",
  VOIP: "VOIP",
} as const;
/**
 * @public
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

/**
 * @public
 * @enum
 */
export const OutboundStrategyType = {
  AGENT_FIRST: "AGENT_FIRST",
} as const;
/**
 * @public
 */
export type OutboundStrategyType = (typeof OutboundStrategyType)[keyof typeof OutboundStrategyType];

/**
 * @public
 * @enum
 */
export const FailureReasonCode = {
  IDEMPOTENCY_EXCEPTION: "IDEMPOTENCY_EXCEPTION",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_ATTRIBUTE_KEY: "INVALID_ATTRIBUTE_KEY",
  INVALID_CUSTOMER_ENDPOINT: "INVALID_CUSTOMER_ENDPOINT",
  INVALID_OUTBOUND_STRATEGY: "INVALID_OUTBOUND_STRATEGY",
  INVALID_QUEUE: "INVALID_QUEUE",
  INVALID_SYSTEM_ENDPOINT: "INVALID_SYSTEM_ENDPOINT",
  MISSING_CAMPAIGN: "MISSING_CAMPAIGN",
  MISSING_CUSTOMER_ENDPOINT: "MISSING_CUSTOMER_ENDPOINT",
  MISSING_QUEUE_ID_AND_SYSTEM_ENDPOINT: "MISSING_QUEUE_ID_AND_SYSTEM_ENDPOINT",
  REQUEST_THROTTLED: "REQUEST_THROTTLED",
} as const;
/**
 * @public
 */
export type FailureReasonCode = (typeof FailureReasonCode)[keyof typeof FailureReasonCode];

/**
 * @public
 * @enum
 */
export const InitiateAs = {
  COMPLETED: "COMPLETED",
  CONNECTED_TO_USER: "CONNECTED_TO_USER",
} as const;
/**
 * @public
 */
export type InitiateAs = (typeof InitiateAs)[keyof typeof InitiateAs];

/**
 * @public
 * @enum
 */
export const ReferenceStatus = {
  APPROVED: "APPROVED",
  AVAILABLE: "AVAILABLE",
  DELETED: "DELETED",
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type ReferenceStatus = (typeof ReferenceStatus)[keyof typeof ReferenceStatus];

/**
 * @public
 * @enum
 */
export const ReferenceType = {
  ATTACHMENT: "ATTACHMENT",
  CONTACT_ANALYSIS: "CONTACT_ANALYSIS",
  DATE: "DATE",
  EMAIL: "EMAIL",
  EMAIL_MESSAGE: "EMAIL_MESSAGE",
  EMAIL_MESSAGE_PLAIN_TEXT: "EMAIL_MESSAGE_PLAIN_TEXT",
  NUMBER: "NUMBER",
  STRING: "STRING",
  URL: "URL",
} as const;
/**
 * @public
 */
export type ReferenceType = (typeof ReferenceType)[keyof typeof ReferenceType];

/**
 * @public
 * @enum
 */
export const ContactFlowStatus = {
  PUBLISHED: "PUBLISHED",
  SAVED: "SAVED",
} as const;
/**
 * @public
 */
export type ContactFlowStatus = (typeof ContactFlowStatus)[keyof typeof ContactFlowStatus];

/**
 * @public
 * @enum
 */
export const ContactFlowType = {
  AGENT_HOLD: "AGENT_HOLD",
  AGENT_TRANSFER: "AGENT_TRANSFER",
  AGENT_WHISPER: "AGENT_WHISPER",
  CAMPAIGN: "CAMPAIGN",
  CONTACT_FLOW: "CONTACT_FLOW",
  CUSTOMER_HOLD: "CUSTOMER_HOLD",
  CUSTOMER_QUEUE: "CUSTOMER_QUEUE",
  CUSTOMER_WHISPER: "CUSTOMER_WHISPER",
  OUTBOUND_WHISPER: "OUTBOUND_WHISPER",
  QUEUE_TRANSFER: "QUEUE_TRANSFER",
} as const;
/**
 * @public
 */
export type ContactFlowType = (typeof ContactFlowType)[keyof typeof ContactFlowType];

/**
 * @public
 * @enum
 */
export const DataTableStatus = {
  PUBLISHED: "PUBLISHED",
} as const;
/**
 * @public
 */
export type DataTableStatus = (typeof DataTableStatus)[keyof typeof DataTableStatus];

/**
 * @public
 * @enum
 */
export const DataTableLockLevel = {
  ATTRIBUTE: "ATTRIBUTE",
  DATA_TABLE: "DATA_TABLE",
  NONE: "NONE",
  PRIMARY_VALUE: "PRIMARY_VALUE",
  VALUE: "VALUE",
} as const;
/**
 * @public
 */
export type DataTableLockLevel = (typeof DataTableLockLevel)[keyof typeof DataTableLockLevel];

/**
 * @public
 * @enum
 */
export const DataTableAttributeValueType = {
  BOOLEAN: "BOOLEAN",
  NUMBER: "NUMBER",
  NUMBER_LIST: "NUMBER_LIST",
  TEXT: "TEXT",
  TEXT_LIST: "TEXT_LIST",
} as const;
/**
 * @public
 */
export type DataTableAttributeValueType =
  (typeof DataTableAttributeValueType)[keyof typeof DataTableAttributeValueType];

/**
 * @public
 * @enum
 */
export const EvaluationFormItemEnablementAction = {
  DISABLE: "DISABLE",
  ENABLE: "ENABLE",
} as const;
/**
 * @public
 */
export type EvaluationFormItemEnablementAction =
  (typeof EvaluationFormItemEnablementAction)[keyof typeof EvaluationFormItemEnablementAction];

/**
 * @public
 * @enum
 */
export const EvaluationFormItemSourceValuesComparator = {
  ALL_IN: "ALL_IN",
  EXACT: "EXACT",
  IN: "IN",
  NOT_IN: "NOT_IN",
} as const;
/**
 * @public
 */
export type EvaluationFormItemSourceValuesComparator =
  (typeof EvaluationFormItemSourceValuesComparator)[keyof typeof EvaluationFormItemSourceValuesComparator];

/**
 * @public
 * @enum
 */
export const EvaluationFormItemEnablementSourceType = {
  QUESTION_REF_ID: "QUESTION_REF_ID",
} as const;
/**
 * @public
 */
export type EvaluationFormItemEnablementSourceType =
  (typeof EvaluationFormItemEnablementSourceType)[keyof typeof EvaluationFormItemEnablementSourceType];

/**
 * @public
 * @enum
 */
export const EvaluationFormItemEnablementSourceValueType = {
  OPTION_REF_ID: "OPTION_REF_ID",
} as const;
/**
 * @public
 */
export type EvaluationFormItemEnablementSourceValueType =
  (typeof EvaluationFormItemEnablementSourceValueType)[keyof typeof EvaluationFormItemEnablementSourceValueType];

/**
 * @public
 * @enum
 */
export const EvaluationFormItemEnablementOperator = {
  AND: "AND",
  OR: "OR",
} as const;
/**
 * @public
 */
export type EvaluationFormItemEnablementOperator =
  (typeof EvaluationFormItemEnablementOperator)[keyof typeof EvaluationFormItemEnablementOperator];

/**
 * @public
 * @enum
 */
export const EvaluationFormQuestionType = {
  DATETIME: "DATETIME",
  MULTISELECT: "MULTISELECT",
  NUMERIC: "NUMERIC",
  SINGLESELECT: "SINGLESELECT",
  TEXT: "TEXT",
} as const;
/**
 * @public
 */
export type EvaluationFormQuestionType = (typeof EvaluationFormQuestionType)[keyof typeof EvaluationFormQuestionType];

/**
 * @public
 * @enum
 */
export const EvaluationFormQuestionAutomationAnswerSourceType = {
  CONTACT_LENS_DATA: "CONTACT_LENS_DATA",
  GEN_AI: "GEN_AI",
} as const;
/**
 * @public
 */
export type EvaluationFormQuestionAutomationAnswerSourceType =
  (typeof EvaluationFormQuestionAutomationAnswerSourceType)[keyof typeof EvaluationFormQuestionAutomationAnswerSourceType];

/**
 * @public
 * @enum
 */
export const MultiSelectQuestionRuleCategoryAutomationCondition = {
  NOT_PRESENT: "NOT_PRESENT",
  PRESENT: "PRESENT",
} as const;
/**
 * @public
 */
export type MultiSelectQuestionRuleCategoryAutomationCondition =
  (typeof MultiSelectQuestionRuleCategoryAutomationCondition)[keyof typeof MultiSelectQuestionRuleCategoryAutomationCondition];

/**
 * @public
 * @enum
 */
export const EvaluationFormMultiSelectQuestionDisplayMode = {
  CHECKBOX: "CHECKBOX",
  DROPDOWN: "DROPDOWN",
} as const;
/**
 * @public
 */
export type EvaluationFormMultiSelectQuestionDisplayMode =
  (typeof EvaluationFormMultiSelectQuestionDisplayMode)[keyof typeof EvaluationFormMultiSelectQuestionDisplayMode];

/**
 * @public
 * @enum
 */
export const NumericQuestionPropertyAutomationLabel = {
  AGENT_INTERACTION_AND_HOLD_DURATION: "AGENT_INTERACTION_AND_HOLD_DURATION",
  AGENT_INTERACTION_DURATION: "AGENT_INTERACTION_DURATION",
  CONTACT_DURATION: "CONTACT_DURATION",
  CUSTOMER_HOLD_TIME: "CUSTOMER_HOLD_TIME",
  CUSTOMER_SENTIMENT_SCORE_WITHOUT_AGENT: "CUSTOMER_SENTIMENT_SCORE_WITHOUT_AGENT",
  CUSTOMER_SENTIMENT_SCORE_WITH_AGENT: "CUSTOMER_SENTIMENT_SCORE_WITH_AGENT",
  LONGEST_HOLD_DURATION: "LONGEST_HOLD_DURATION",
  NON_TALK_TIME: "NON_TALK_TIME",
  NON_TALK_TIME_PERCENTAGE: "NON_TALK_TIME_PERCENTAGE",
  NUMBER_OF_HOLDS: "NUMBER_OF_HOLDS",
  NUMBER_OF_INTERRUPTIONS: "NUMBER_OF_INTERRUPTIONS",
  OVERALL_AGENT_SENTIMENT_SCORE: "OVERALL_AGENT_SENTIMENT_SCORE",
  OVERALL_CUSTOMER_SENTIMENT_SCORE: "OVERALL_CUSTOMER_SENTIMENT_SCORE",
} as const;
/**
 * @public
 */
export type NumericQuestionPropertyAutomationLabel =
  (typeof NumericQuestionPropertyAutomationLabel)[keyof typeof NumericQuestionPropertyAutomationLabel];

/**
 * @public
 * @enum
 */
export const SingleSelectQuestionRuleCategoryAutomationCondition = {
  NOT_PRESENT: "NOT_PRESENT",
  PRESENT: "PRESENT",
} as const;
/**
 * @public
 */
export type SingleSelectQuestionRuleCategoryAutomationCondition =
  (typeof SingleSelectQuestionRuleCategoryAutomationCondition)[keyof typeof SingleSelectQuestionRuleCategoryAutomationCondition];

/**
 * @public
 * @enum
 */
export const EvaluationFormSingleSelectQuestionDisplayMode = {
  DROPDOWN: "DROPDOWN",
  RADIO: "RADIO",
} as const;
/**
 * @public
 */
export type EvaluationFormSingleSelectQuestionDisplayMode =
  (typeof EvaluationFormSingleSelectQuestionDisplayMode)[keyof typeof EvaluationFormSingleSelectQuestionDisplayMode];

/**
 * @public
 * @enum
 */
export const EvaluationFormLanguageCode = {
  DE_DE: "de-DE",
  EN_US: "en-US",
  ES_ES: "es-ES",
  FR_FR: "fr-FR",
  IT_IT: "it-IT",
  PT_BR: "pt-BR",
} as const;
/**
 * @public
 */
export type EvaluationFormLanguageCode = (typeof EvaluationFormLanguageCode)[keyof typeof EvaluationFormLanguageCode];

/**
 * @public
 * @enum
 */
export const EvaluationFormScoringMode = {
  QUESTION_ONLY: "QUESTION_ONLY",
  SECTION_ONLY: "SECTION_ONLY",
} as const;
/**
 * @public
 */
export type EvaluationFormScoringMode = (typeof EvaluationFormScoringMode)[keyof typeof EvaluationFormScoringMode];

/**
 * @public
 * @enum
 */
export const EvaluationFormScoringStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type EvaluationFormScoringStatus =
  (typeof EvaluationFormScoringStatus)[keyof typeof EvaluationFormScoringStatus];

/**
 * @public
 * @enum
 */
export const ContactInteractionType = {
  AGENT: "AGENT",
  AUTOMATED: "AUTOMATED",
} as const;
/**
 * @public
 */
export type ContactInteractionType = (typeof ContactInteractionType)[keyof typeof ContactInteractionType];

/**
 * @public
 * @enum
 */
export const HoursOfOperationDays = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;
/**
 * @public
 */
export type HoursOfOperationDays = (typeof HoursOfOperationDays)[keyof typeof HoursOfOperationDays];

/**
 * @public
 * @enum
 */
export const OverrideDays = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;
/**
 * @public
 */
export type OverrideDays = (typeof OverrideDays)[keyof typeof OverrideDays];

/**
 * @public
 * @enum
 */
export const DirectoryType = {
  CONNECT_MANAGED: "CONNECT_MANAGED",
  EXISTING_DIRECTORY: "EXISTING_DIRECTORY",
  SAML: "SAML",
} as const;
/**
 * @public
 */
export type DirectoryType = (typeof DirectoryType)[keyof typeof DirectoryType];

/**
 * @public
 * @enum
 */
export const IntegrationType = {
  ANALYTICS_CONNECTOR: "ANALYTICS_CONNECTOR",
  APPLICATION: "APPLICATION",
  CALL_TRANSFER_CONNECTOR: "CALL_TRANSFER_CONNECTOR",
  CASES_DOMAIN: "CASES_DOMAIN",
  COGNITO_USER_POOL: "COGNITO_USER_POOL",
  EVENT: "EVENT",
  FILE_SCANNER: "FILE_SCANNER",
  MESSAGE_PROCESSOR: "MESSAGE_PROCESSOR",
  PINPOINT_APP: "PINPOINT_APP",
  Q_MESSAGE_TEMPLATES: "Q_MESSAGE_TEMPLATES",
  SES_IDENTITY: "SES_IDENTITY",
  VOICE_ID: "VOICE_ID",
  WISDOM_ASSISTANT: "WISDOM_ASSISTANT",
  WISDOM_KNOWLEDGE_BASE: "WISDOM_KNOWLEDGE_BASE",
  WISDOM_QUICK_RESPONSES: "WISDOM_QUICK_RESPONSES",
} as const;
/**
 * @public
 */
export type IntegrationType = (typeof IntegrationType)[keyof typeof IntegrationType];

/**
 * @public
 * @enum
 */
export const SourceType = {
  CASES: "CASES",
  SALESFORCE: "SALESFORCE",
  ZENDESK: "ZENDESK",
} as const;
/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * @enum
 */
export const ParticipantRole = {
  AGENT: "AGENT",
  CUSTOMER: "CUSTOMER",
  CUSTOM_BOT: "CUSTOM_BOT",
  SUPERVISOR: "SUPERVISOR",
  SYSTEM: "SYSTEM",
} as const;
/**
 * @public
 */
export type ParticipantRole = (typeof ParticipantRole)[keyof typeof ParticipantRole];

/**
 * @public
 * @enum
 */
export const RehydrationType = {
  ENTIRE_PAST_SESSION: "ENTIRE_PAST_SESSION",
  FROM_SEGMENT: "FROM_SEGMENT",
} as const;
/**
 * @public
 */
export type RehydrationType = (typeof RehydrationType)[keyof typeof RehydrationType];

/**
 * @public
 * @enum
 */
export const DeviceType = {
  APNS: "APNS",
  APNS_SANDBOX: "APNS_SANDBOX",
  GCM: "GCM",
} as const;
/**
 * @public
 */
export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType];

/**
 * @public
 * @enum
 */
export const QuickConnectType = {
  FLOW: "FLOW",
  PHONE_NUMBER: "PHONE_NUMBER",
  QUEUE: "QUEUE",
  USER: "USER",
} as const;
/**
 * @public
 */
export type QuickConnectType = (typeof QuickConnectType)[keyof typeof QuickConnectType];

/**
 * @public
 * @enum
 */
export const BehaviorType = {
  ROUTE_ANY_CHANNEL: "ROUTE_ANY_CHANNEL",
  ROUTE_CURRENT_CHANNEL_ONLY: "ROUTE_CURRENT_CHANNEL_ONLY",
} as const;
/**
 * @public
 */
export type BehaviorType = (typeof BehaviorType)[keyof typeof BehaviorType];

/**
 * @public
 * @enum
 */
export const SlaType = {
  CASE_FIELD: "CaseField",
} as const;
/**
 * @public
 */
export type SlaType = (typeof SlaType)[keyof typeof SlaType];

/**
 * @public
 * @enum
 */
export const SlaAssignmentType = {
  CASES: "CASES",
} as const;
/**
 * @public
 */
export type SlaAssignmentType = (typeof SlaAssignmentType)[keyof typeof SlaAssignmentType];

/**
 * @public
 * @enum
 */
export const NotificationContentType = {
  PLAIN_TEXT: "PLAIN_TEXT",
} as const;
/**
 * @public
 */
export type NotificationContentType = (typeof NotificationContentType)[keyof typeof NotificationContentType];

/**
 * @public
 * @enum
 */
export const NotificationDeliveryType = {
  EMAIL: "EMAIL",
} as const;
/**
 * @public
 */
export type NotificationDeliveryType = (typeof NotificationDeliveryType)[keyof typeof NotificationDeliveryType];

/**
 * @public
 * @enum
 */
export const RulePublishStatus = {
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
} as const;
/**
 * @public
 */
export type RulePublishStatus = (typeof RulePublishStatus)[keyof typeof RulePublishStatus];

/**
 * @public
 * @enum
 */
export const EventSourceName = {
  OnCaseCreate: "OnCaseCreate",
  OnCaseUpdate: "OnCaseUpdate",
  OnContactEvaluationSubmit: "OnContactEvaluationSubmit",
  OnMetricDataUpdate: "OnMetricDataUpdate",
  OnPostCallAnalysisAvailable: "OnPostCallAnalysisAvailable",
  OnPostChatAnalysisAvailable: "OnPostChatAnalysisAvailable",
  OnRealTimeCallAnalysisAvailable: "OnRealTimeCallAnalysisAvailable",
  OnRealTimeChatAnalysisAvailable: "OnRealTimeChatAnalysisAvailable",
  OnSalesforceCaseCreate: "OnSalesforceCaseCreate",
  OnSlaBreach: "OnSlaBreach",
  OnZendeskTicketCreate: "OnZendeskTicketCreate",
  OnZendeskTicketStatusUpdate: "OnZendeskTicketStatusUpdate",
} as const;
/**
 * @public
 */
export type EventSourceName = (typeof EventSourceName)[keyof typeof EventSourceName];

/**
 * @public
 * @enum
 */
export const ApplicationType = {
  MCP: "MCP",
  THIRD_PARTY_APPLICATION: "THIRD_PARTY_APPLICATION",
} as const;
/**
 * @public
 */
export type ApplicationType = (typeof ApplicationType)[keyof typeof ApplicationType];

/**
 * @public
 * @enum
 */
export const TaskTemplateFieldType = {
  BOOLEAN: "BOOLEAN",
  DATE_TIME: "DATE_TIME",
  DESCRIPTION: "DESCRIPTION",
  EMAIL: "EMAIL",
  EXPIRY_DURATION: "EXPIRY_DURATION",
  NAME: "NAME",
  NUMBER: "NUMBER",
  QUICK_CONNECT: "QUICK_CONNECT",
  SCHEDULED_TIME: "SCHEDULED_TIME",
  SELF_ASSIGN: "SELF_ASSIGN",
  SINGLE_SELECT: "SINGLE_SELECT",
  TEXT: "TEXT",
  TEXT_AREA: "TEXT_AREA",
  URL: "URL",
} as const;
/**
 * @public
 */
export type TaskTemplateFieldType = (typeof TaskTemplateFieldType)[keyof typeof TaskTemplateFieldType];

/**
 * @public
 * @enum
 */
export const TaskTemplateStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type TaskTemplateStatus = (typeof TaskTemplateStatus)[keyof typeof TaskTemplateStatus];

/**
 * @public
 * @enum
 */
export const PropertyValidationExceptionReason = {
  INVALID_FORMAT: "INVALID_FORMAT",
  NOT_SUPPORTED: "NOT_SUPPORTED",
  REFERENCED_RESOURCE_NOT_FOUND: "REFERENCED_RESOURCE_NOT_FOUND",
  REQUIRED_PROPERTY_MISSING: "REQUIRED_PROPERTY_MISSING",
  RESOURCE_NAME_ALREADY_EXISTS: "RESOURCE_NAME_ALREADY_EXISTS",
  UNIQUE_CONSTRAINT_VIOLATED: "UNIQUE_CONSTRAINT_VIOLATED",
} as const;
/**
 * @public
 */
export type PropertyValidationExceptionReason =
  (typeof PropertyValidationExceptionReason)[keyof typeof PropertyValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const UseCaseType = {
  CONNECT_CAMPAIGNS: "CONNECT_CAMPAIGNS",
  RULES_EVALUATION: "RULES_EVALUATION",
} as const;
/**
 * @public
 */
export type UseCaseType = (typeof UseCaseType)[keyof typeof UseCaseType];

/**
 * @public
 * @enum
 */
export const PhoneType = {
  DESK_PHONE: "DESK_PHONE",
  SOFT_PHONE: "SOFT_PHONE",
} as const;
/**
 * @public
 */
export type PhoneType = (typeof PhoneType)[keyof typeof PhoneType];

/**
 * @public
 * @enum
 */
export const ViewStatus = {
  PUBLISHED: "PUBLISHED",
  SAVED: "SAVED",
} as const;
/**
 * @public
 */
export type ViewStatus = (typeof ViewStatus)[keyof typeof ViewStatus];

/**
 * @public
 * @enum
 */
export const ViewType = {
  AWS_MANAGED: "AWS_MANAGED",
  CUSTOMER_MANAGED: "CUSTOMER_MANAGED",
} as const;
/**
 * @public
 */
export type ViewType = (typeof ViewType)[keyof typeof ViewType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  CONTACT: "CONTACT",
  CONTACT_FLOW: "CONTACT_FLOW",
  HIERARCHY_GROUP: "HIERARCHY_GROUP",
  HIERARCHY_LEVEL: "HIERARCHY_LEVEL",
  INSTANCE: "INSTANCE",
  PARTICIPANT: "PARTICIPANT",
  PHONE_NUMBER: "PHONE_NUMBER",
  USER: "USER",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const VocabularyState = {
  ACTIVE: "ACTIVE",
  CREATION_FAILED: "CREATION_FAILED",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type VocabularyState = (typeof VocabularyState)[keyof typeof VocabularyState];

/**
 * @public
 * @enum
 */
export const WorkspaceFontFamily = {
  ARIAL: "Arial",
  COURIER_NEW: "Courier New",
  GEORGIA: "Georgia",
  TIMES_NEW_ROMAN: "Times New Roman",
  TREBUCHET: "Trebuchet",
  VERDANA: "Verdana",
} as const;
/**
 * @public
 */
export type WorkspaceFontFamily = (typeof WorkspaceFontFamily)[keyof typeof WorkspaceFontFamily];

/**
 * @public
 * @enum
 */
export const MediaType = {
  IMAGE_LOGO_DARK_FAVICON: "IMAGE_LOGO_DARK_FAVICON",
  IMAGE_LOGO_DARK_HORIZONTAL: "IMAGE_LOGO_DARK_HORIZONTAL",
  IMAGE_LOGO_LIGHT_FAVICON: "IMAGE_LOGO_LIGHT_FAVICON",
  IMAGE_LOGO_LIGHT_HORIZONTAL: "IMAGE_LOGO_LIGHT_HORIZONTAL",
} as const;
/**
 * @public
 */
export type MediaType = (typeof MediaType)[keyof typeof MediaType];

/**
 * @public
 * @enum
 */
export const AnsweringMachineDetectionStatus = {
  AMD_ERROR: "AMD_ERROR",
  AMD_NOT_APPLICABLE: "AMD_NOT_APPLICABLE",
  AMD_UNANSWERED: "AMD_UNANSWERED",
  AMD_UNRESOLVED: "AMD_UNRESOLVED",
  ANSWERED: "ANSWERED",
  ERROR: "ERROR",
  FAX_MACHINE_DETECTED: "FAX_MACHINE_DETECTED",
  HUMAN_ANSWERED: "HUMAN_ANSWERED",
  SIT_TONE_BUSY: "SIT_TONE_BUSY",
  SIT_TONE_DETECTED: "SIT_TONE_DETECTED",
  SIT_TONE_INVALID_NUMBER: "SIT_TONE_INVALID_NUMBER",
  UNDETECTED: "UNDETECTED",
  VOICEMAIL_BEEP: "VOICEMAIL_BEEP",
  VOICEMAIL_NO_BEEP: "VOICEMAIL_NO_BEEP",
} as const;
/**
 * @public
 */
export type AnsweringMachineDetectionStatus =
  (typeof AnsweringMachineDetectionStatus)[keyof typeof AnsweringMachineDetectionStatus];

/**
 * @public
 * @enum
 */
export const ParticipantType = {
  AGENT: "AGENT",
  ALL: "ALL",
  CUSTOMER: "CUSTOMER",
  MANAGER: "MANAGER",
  THIRDPARTY: "THIRDPARTY",
} as const;
/**
 * @public
 */
export type ParticipantType = (typeof ParticipantType)[keyof typeof ParticipantType];

/**
 * @public
 * @enum
 */
export const Status = {
  COMPLETE: "COMPLETE",
  DELETED: "DELETED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const NextContactType = {
  QUICK_CONNECT: "QUICK_CONNECT",
} as const;
/**
 * @public
 */
export type NextContactType = (typeof NextContactType)[keyof typeof NextContactType];

/**
 * @public
 * @enum
 */
export const MediaStreamType = {
  AUDIO: "AUDIO",
  VIDEO: "VIDEO",
} as const;
/**
 * @public
 */
export type MediaStreamType = (typeof MediaStreamType)[keyof typeof MediaStreamType];

/**
 * @public
 * @enum
 */
export const RecordingStatus = {
  AVAILABLE: "AVAILABLE",
  DELETED: "DELETED",
} as const;
/**
 * @public
 */
export type RecordingStatus = (typeof RecordingStatus)[keyof typeof RecordingStatus];

/**
 * @public
 * @enum
 */
export const RoutingCriteriaStepStatus = {
  ACTIVE: "ACTIVE",
  EXPIRED: "EXPIRED",
  INACTIVE: "INACTIVE",
  JOINED: "JOINED",
} as const;
/**
 * @public
 */
export type RoutingCriteriaStepStatus = (typeof RoutingCriteriaStepStatus)[keyof typeof RoutingCriteriaStepStatus];

/**
 * @public
 * @enum
 */
export const QuestionRuleCategoryAutomationCondition = {
  NOT_PRESENT: "NOT_PRESENT",
  PRESENT: "PRESENT",
} as const;
/**
 * @public
 */
export type QuestionRuleCategoryAutomationCondition =
  (typeof QuestionRuleCategoryAutomationCondition)[keyof typeof QuestionRuleCategoryAutomationCondition];

/**
 * @public
 * @enum
 */
export const EvaluationQuestionAnswerAnalysisType = {
  CONTACT_LENS_DATA: "CONTACT_LENS_DATA",
  GEN_AI: "GEN_AI",
} as const;
/**
 * @public
 */
export type EvaluationQuestionAnswerAnalysisType =
  (typeof EvaluationQuestionAnswerAnalysisType)[keyof typeof EvaluationQuestionAnswerAnalysisType];

/**
 * @public
 * @enum
 */
export const EvaluationTranscriptType = {
  RAW: "RAW",
  REDACTED: "REDACTED",
} as const;
/**
 * @public
 */
export type EvaluationTranscriptType = (typeof EvaluationTranscriptType)[keyof typeof EvaluationTranscriptType];

/**
 * @public
 * @enum
 */
export const EvaluationSuggestedAnswerStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type EvaluationSuggestedAnswerStatus =
  (typeof EvaluationSuggestedAnswerStatus)[keyof typeof EvaluationSuggestedAnswerStatus];

/**
 * @public
 * @enum
 */
export const EvaluationType = {
  CALIBRATION: "CALIBRATION",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type EvaluationType = (typeof EvaluationType)[keyof typeof EvaluationType];

/**
 * @public
 * @enum
 */
export const AutoEvaluationStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type AutoEvaluationStatus = (typeof AutoEvaluationStatus)[keyof typeof AutoEvaluationStatus];

/**
 * @public
 * @enum
 */
export const ContactParticipantRole = {
  AGENT: "AGENT",
  CUSTOM_BOT: "CUSTOM_BOT",
  SYSTEM: "SYSTEM",
} as const;
/**
 * @public
 */
export type ContactParticipantRole = (typeof ContactParticipantRole)[keyof typeof ContactParticipantRole];

/**
 * @public
 * @enum
 */
export const EvaluationStatus = {
  DRAFT: "DRAFT",
  SUBMITTED: "SUBMITTED",
} as const;
/**
 * @public
 */
export type EvaluationStatus = (typeof EvaluationStatus)[keyof typeof EvaluationStatus];

/**
 * @public
 * @enum
 */
export const ContactFlowState = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
} as const;
/**
 * @public
 */
export type ContactFlowState = (typeof ContactFlowState)[keyof typeof ContactFlowState];

/**
 * @public
 * @enum
 */
export const ContactFlowModuleState = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
} as const;
/**
 * @public
 */
export type ContactFlowModuleState = (typeof ContactFlowModuleState)[keyof typeof ContactFlowModuleState];

/**
 * @public
 * @enum
 */
export const ContactFlowModuleStatus = {
  PUBLISHED: "PUBLISHED",
  SAVED: "SAVED",
} as const;
/**
 * @public
 */
export type ContactFlowModuleStatus = (typeof ContactFlowModuleStatus)[keyof typeof ContactFlowModuleStatus];

/**
 * @public
 * @enum
 */
export const EvaluationFormVersionStatus = {
  ACTIVE: "ACTIVE",
  DRAFT: "DRAFT",
} as const;
/**
 * @public
 */
export type EvaluationFormVersionStatus =
  (typeof EvaluationFormVersionStatus)[keyof typeof EvaluationFormVersionStatus];

/**
 * @public
 * @enum
 */
export const InstanceStatus = {
  ACTIVE: "ACTIVE",
  CREATION_FAILED: "CREATION_FAILED",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type InstanceStatus = (typeof InstanceStatus)[keyof typeof InstanceStatus];

/**
 * @public
 * @enum
 */
export const InstanceReplicationStatus = {
  INSTANCE_REPLICATION_COMPLETE: "INSTANCE_REPLICATION_COMPLETE",
  INSTANCE_REPLICATION_DELETION_FAILED: "INSTANCE_REPLICATION_DELETION_FAILED",
  INSTANCE_REPLICATION_FAILED: "INSTANCE_REPLICATION_FAILED",
  INSTANCE_REPLICATION_IN_PROGRESS: "INSTANCE_REPLICATION_IN_PROGRESS",
  INSTANCE_REPLICA_DELETING: "INSTANCE_REPLICA_DELETING",
  RESOURCE_REPLICATION_NOT_STARTED: "RESOURCE_REPLICATION_NOT_STARTED",
} as const;
/**
 * @public
 */
export type InstanceReplicationStatus = (typeof InstanceReplicationStatus)[keyof typeof InstanceReplicationStatus];

/**
 * @public
 * @enum
 */
export const InstanceAttributeType = {
  AUTO_RESOLVE_BEST_VOICES: "AUTO_RESOLVE_BEST_VOICES",
  CONTACTFLOW_LOGS: "CONTACTFLOW_LOGS",
  CONTACT_LENS: "CONTACT_LENS",
  EARLY_MEDIA: "EARLY_MEDIA",
  ENHANCED_CHAT_MONITORING: "ENHANCED_CHAT_MONITORING",
  ENHANCED_CONTACT_MONITORING: "ENHANCED_CONTACT_MONITORING",
  HIGH_VOLUME_OUTBOUND: "HIGH_VOLUME_OUTBOUND",
  INBOUND_CALLS: "INBOUND_CALLS",
  MESSAGE_STREAMING: "MESSAGE_STREAMING",
  MULTI_PARTY_CHAT_CONFERENCE: "MULTI_PARTY_CHAT_CONFERENCE",
  MULTI_PARTY_CONFERENCE: "MULTI_PARTY_CONFERENCE",
  OUTBOUND_CALLS: "OUTBOUND_CALLS",
  USE_CUSTOM_TTS_VOICES: "USE_CUSTOM_TTS_VOICES",
} as const;
/**
 * @public
 */
export type InstanceAttributeType = (typeof InstanceAttributeType)[keyof typeof InstanceAttributeType];

/**
 * @public
 * @enum
 */
export const PhoneNumberCountryCode = {
  AD: "AD",
  AE: "AE",
  AF: "AF",
  AG: "AG",
  AI: "AI",
  AL: "AL",
  AM: "AM",
  AN: "AN",
  AO: "AO",
  AQ: "AQ",
  AR: "AR",
  AS: "AS",
  AT: "AT",
  AU: "AU",
  AW: "AW",
  AZ: "AZ",
  BA: "BA",
  BB: "BB",
  BD: "BD",
  BE: "BE",
  BF: "BF",
  BG: "BG",
  BH: "BH",
  BI: "BI",
  BJ: "BJ",
  BL: "BL",
  BM: "BM",
  BN: "BN",
  BO: "BO",
  BR: "BR",
  BS: "BS",
  BT: "BT",
  BW: "BW",
  BY: "BY",
  BZ: "BZ",
  CA: "CA",
  CC: "CC",
  CD: "CD",
  CF: "CF",
  CG: "CG",
  CH: "CH",
  CI: "CI",
  CK: "CK",
  CL: "CL",
  CM: "CM",
  CN: "CN",
  CO: "CO",
  CR: "CR",
  CU: "CU",
  CV: "CV",
  CW: "CW",
  CX: "CX",
  CY: "CY",
  CZ: "CZ",
  DE: "DE",
  DJ: "DJ",
  DK: "DK",
  DM: "DM",
  DO: "DO",
  DZ: "DZ",
  EC: "EC",
  EE: "EE",
  EG: "EG",
  EH: "EH",
  ER: "ER",
  ES: "ES",
  ET: "ET",
  FI: "FI",
  FJ: "FJ",
  FK: "FK",
  FM: "FM",
  FO: "FO",
  FR: "FR",
  GA: "GA",
  GB: "GB",
  GD: "GD",
  GE: "GE",
  GG: "GG",
  GH: "GH",
  GI: "GI",
  GL: "GL",
  GM: "GM",
  GN: "GN",
  GQ: "GQ",
  GR: "GR",
  GT: "GT",
  GU: "GU",
  GW: "GW",
  GY: "GY",
  HK: "HK",
  HN: "HN",
  HR: "HR",
  HT: "HT",
  HU: "HU",
  ID: "ID",
  IE: "IE",
  IL: "IL",
  IM: "IM",
  IN: "IN",
  IO: "IO",
  IQ: "IQ",
  IR: "IR",
  IS: "IS",
  IT: "IT",
  JE: "JE",
  JM: "JM",
  JO: "JO",
  JP: "JP",
  KE: "KE",
  KG: "KG",
  KH: "KH",
  KI: "KI",
  KM: "KM",
  KN: "KN",
  KP: "KP",
  KR: "KR",
  KW: "KW",
  KY: "KY",
  KZ: "KZ",
  LA: "LA",
  LB: "LB",
  LC: "LC",
  LI: "LI",
  LK: "LK",
  LR: "LR",
  LS: "LS",
  LT: "LT",
  LU: "LU",
  LV: "LV",
  LY: "LY",
  MA: "MA",
  MC: "MC",
  MD: "MD",
  ME: "ME",
  MF: "MF",
  MG: "MG",
  MH: "MH",
  MK: "MK",
  ML: "ML",
  MM: "MM",
  MN: "MN",
  MO: "MO",
  MP: "MP",
  MR: "MR",
  MS: "MS",
  MT: "MT",
  MU: "MU",
  MV: "MV",
  MW: "MW",
  MX: "MX",
  MY: "MY",
  MZ: "MZ",
  NA: "NA",
  NC: "NC",
  NE: "NE",
  NG: "NG",
  NI: "NI",
  NL: "NL",
  NO: "NO",
  NP: "NP",
  NR: "NR",
  NU: "NU",
  NZ: "NZ",
  OM: "OM",
  PA: "PA",
  PE: "PE",
  PF: "PF",
  PG: "PG",
  PH: "PH",
  PK: "PK",
  PL: "PL",
  PM: "PM",
  PN: "PN",
  PR: "PR",
  PT: "PT",
  PW: "PW",
  PY: "PY",
  QA: "QA",
  RE: "RE",
  RO: "RO",
  RS: "RS",
  RU: "RU",
  RW: "RW",
  SA: "SA",
  SB: "SB",
  SC: "SC",
  SD: "SD",
  SE: "SE",
  SG: "SG",
  SH: "SH",
  SI: "SI",
  SJ: "SJ",
  SK: "SK",
  SL: "SL",
  SM: "SM",
  SN: "SN",
  SO: "SO",
  SR: "SR",
  ST: "ST",
  SV: "SV",
  SX: "SX",
  SY: "SY",
  SZ: "SZ",
  TC: "TC",
  TD: "TD",
  TG: "TG",
  TH: "TH",
  TJ: "TJ",
  TK: "TK",
  TL: "TL",
  TM: "TM",
  TN: "TN",
  TO: "TO",
  TR: "TR",
  TT: "TT",
  TV: "TV",
  TW: "TW",
  TZ: "TZ",
  UA: "UA",
  UG: "UG",
  US: "US",
  UY: "UY",
  UZ: "UZ",
  VA: "VA",
  VC: "VC",
  VE: "VE",
  VG: "VG",
  VI: "VI",
  VN: "VN",
  VU: "VU",
  WF: "WF",
  WS: "WS",
  YE: "YE",
  YT: "YT",
  ZA: "ZA",
  ZM: "ZM",
  ZW: "ZW",
} as const;
/**
 * @public
 */
export type PhoneNumberCountryCode = (typeof PhoneNumberCountryCode)[keyof typeof PhoneNumberCountryCode];

/**
 * @public
 * @enum
 */
export const PhoneNumberWorkflowStatus = {
  Claimed: "CLAIMED",
  Failed: "FAILED",
  InProgress: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type PhoneNumberWorkflowStatus = (typeof PhoneNumberWorkflowStatus)[keyof typeof PhoneNumberWorkflowStatus];

/**
 * @public
 * @enum
 */
export const PhoneNumberType = {
  DID: "DID",
  SHARED: "SHARED",
  SHORT_CODE: "SHORT_CODE",
  THIRD_PARTY_DID: "THIRD_PARTY_DID",
  THIRD_PARTY_TF: "THIRD_PARTY_TF",
  TOLL_FREE: "TOLL_FREE",
  UIFN: "UIFN",
} as const;
/**
 * @public
 */
export type PhoneNumberType = (typeof PhoneNumberType)[keyof typeof PhoneNumberType];

/**
 * @public
 * @enum
 */
export const QueueStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type QueueStatus = (typeof QueueStatus)[keyof typeof QueueStatus];

/**
 * @public
 * @enum
 */
export const TrafficDistributionGroupStatus = {
  ACTIVE: "ACTIVE",
  CREATION_FAILED: "CREATION_FAILED",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
  DELETION_FAILED: "DELETION_FAILED",
  PENDING_DELETION: "PENDING_DELETION",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type TrafficDistributionGroupStatus =
  (typeof TrafficDistributionGroupStatus)[keyof typeof TrafficDistributionGroupStatus];

/**
 * @public
 * @enum
 */
export const Visibility = {
  All: "ALL",
  Assigned: "ASSIGNED",
  None: "NONE",
} as const;
/**
 * @public
 */
export type Visibility = (typeof Visibility)[keyof typeof Visibility];

/**
 * @public
 * @enum
 */
export const ContactMetricName = {
  POSITION_IN_QUEUE: "POSITION_IN_QUEUE",
} as const;
/**
 * @public
 */
export type ContactMetricName = (typeof ContactMetricName)[keyof typeof ContactMetricName];

/**
 * @public
 * @enum
 */
export const CurrentMetricName = {
  AGENTS_AFTER_CONTACT_WORK: "AGENTS_AFTER_CONTACT_WORK",
  AGENTS_AVAILABLE: "AGENTS_AVAILABLE",
  AGENTS_ERROR: "AGENTS_ERROR",
  AGENTS_NON_PRODUCTIVE: "AGENTS_NON_PRODUCTIVE",
  AGENTS_ONLINE: "AGENTS_ONLINE",
  AGENTS_ON_CALL: "AGENTS_ON_CALL",
  AGENTS_ON_CONTACT: "AGENTS_ON_CONTACT",
  AGENTS_STAFFED: "AGENTS_STAFFED",
  CONTACTS_IN_QUEUE: "CONTACTS_IN_QUEUE",
  CONTACTS_SCHEDULED: "CONTACTS_SCHEDULED",
  OLDEST_CONTACT_AGE: "OLDEST_CONTACT_AGE",
  SLOTS_ACTIVE: "SLOTS_ACTIVE",
  SLOTS_AVAILABLE: "SLOTS_AVAILABLE",
} as const;
/**
 * @public
 */
export type CurrentMetricName = (typeof CurrentMetricName)[keyof typeof CurrentMetricName];

/**
 * @public
 * @enum
 */
export const Unit = {
  COUNT: "COUNT",
  PERCENT: "PERCENT",
  SECONDS: "SECONDS",
} as const;
/**
 * @public
 */
export type Unit = (typeof Unit)[keyof typeof Unit];

/**
 * @public
 * @enum
 */
export const Grouping = {
  AGENT_STATUS: "AGENT_STATUS",
  CHANNEL: "CHANNEL",
  QUEUE: "QUEUE",
  ROUTING_PROFILE: "ROUTING_PROFILE",
  ROUTING_STEP_EXPRESSION: "ROUTING_STEP_EXPRESSION",
} as const;
/**
 * @public
 */
export type Grouping = (typeof Grouping)[keyof typeof Grouping];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const HistoricalMetricName = {
  ABANDON_TIME: "ABANDON_TIME",
  AFTER_CONTACT_WORK_TIME: "AFTER_CONTACT_WORK_TIME",
  API_CONTACTS_HANDLED: "API_CONTACTS_HANDLED",
  CALLBACK_CONTACTS_HANDLED: "CALLBACK_CONTACTS_HANDLED",
  CONTACTS_ABANDONED: "CONTACTS_ABANDONED",
  CONTACTS_AGENT_HUNG_UP_FIRST: "CONTACTS_AGENT_HUNG_UP_FIRST",
  CONTACTS_CONSULTED: "CONTACTS_CONSULTED",
  CONTACTS_HANDLED: "CONTACTS_HANDLED",
  CONTACTS_HANDLED_INCOMING: "CONTACTS_HANDLED_INCOMING",
  CONTACTS_HANDLED_OUTBOUND: "CONTACTS_HANDLED_OUTBOUND",
  CONTACTS_HOLD_ABANDONS: "CONTACTS_HOLD_ABANDONS",
  CONTACTS_MISSED: "CONTACTS_MISSED",
  CONTACTS_QUEUED: "CONTACTS_QUEUED",
  CONTACTS_TRANSFERRED_IN: "CONTACTS_TRANSFERRED_IN",
  CONTACTS_TRANSFERRED_IN_FROM_QUEUE: "CONTACTS_TRANSFERRED_IN_FROM_QUEUE",
  CONTACTS_TRANSFERRED_OUT: "CONTACTS_TRANSFERRED_OUT",
  CONTACTS_TRANSFERRED_OUT_FROM_QUEUE: "CONTACTS_TRANSFERRED_OUT_FROM_QUEUE",
  HANDLE_TIME: "HANDLE_TIME",
  HOLD_TIME: "HOLD_TIME",
  INTERACTION_AND_HOLD_TIME: "INTERACTION_AND_HOLD_TIME",
  INTERACTION_TIME: "INTERACTION_TIME",
  OCCUPANCY: "OCCUPANCY",
  QUEUED_TIME: "QUEUED_TIME",
  QUEUE_ANSWER_TIME: "QUEUE_ANSWER_TIME",
  SERVICE_LEVEL: "SERVICE_LEVEL",
} as const;
/**
 * @public
 */
export type HistoricalMetricName = (typeof HistoricalMetricName)[keyof typeof HistoricalMetricName];

/**
 * @public
 * @enum
 */
export const Statistic = {
  AVG: "AVG",
  MAX: "MAX",
  SUM: "SUM",
} as const;
/**
 * @public
 */
export type Statistic = (typeof Statistic)[keyof typeof Statistic];

/**
 * @public
 * @enum
 */
export const Comparison = {
  LT: "LT",
} as const;
/**
 * @public
 */
export type Comparison = (typeof Comparison)[keyof typeof Comparison];

/**
 * @public
 * @enum
 */
export const FilterV2StringConditionComparisonOperator = {
  NOT_EXISTS: "NOT_EXISTS",
} as const;
/**
 * @public
 */
export type FilterV2StringConditionComparisonOperator =
  (typeof FilterV2StringConditionComparisonOperator)[keyof typeof FilterV2StringConditionComparisonOperator];

/**
 * @public
 * @enum
 */
export const IntervalPeriod = {
  DAY: "DAY",
  FIFTEEN_MIN: "FIFTEEN_MIN",
  HOUR: "HOUR",
  THIRTY_MIN: "THIRTY_MIN",
  TOTAL: "TOTAL",
  WEEK: "WEEK",
} as const;
/**
 * @public
 */
export type IntervalPeriod = (typeof IntervalPeriod)[keyof typeof IntervalPeriod];

/**
 * @public
 * @enum
 */
export const LexVersion = {
  V1: "V1",
  V2: "V2",
} as const;
/**
 * @public
 */
export type LexVersion = (typeof LexVersion)[keyof typeof LexVersion];

/**
 * @public
 * @enum
 */
export const QueueType = {
  AGENT: "AGENT",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type QueueType = (typeof QueueType)[keyof typeof QueueType];

/**
 * @public
 * @enum
 */
export const RealTimeContactAnalysisOutputType = {
  Raw: "Raw",
  Redacted: "Redacted",
} as const;
/**
 * @public
 */
export type RealTimeContactAnalysisOutputType =
  (typeof RealTimeContactAnalysisOutputType)[keyof typeof RealTimeContactAnalysisOutputType];

/**
 * @public
 * @enum
 */
export const RealTimeContactAnalysisSegmentType = {
  Attachments: "Attachments",
  Categories: "Categories",
  Event: "Event",
  Issues: "Issues",
  PostContactSummary: "PostContactSummary",
  Transcript: "Transcript",
} as const;
/**
 * @public
 */
export type RealTimeContactAnalysisSegmentType =
  (typeof RealTimeContactAnalysisSegmentType)[keyof typeof RealTimeContactAnalysisSegmentType];

/**
 * @public
 * @enum
 */
export const RealTimeContactAnalysisSupportedChannel = {
  CHAT: "CHAT",
  VOICE: "VOICE",
} as const;
/**
 * @public
 */
export type RealTimeContactAnalysisSupportedChannel =
  (typeof RealTimeContactAnalysisSupportedChannel)[keyof typeof RealTimeContactAnalysisSupportedChannel];

/**
 * @public
 * @enum
 */
export const ArtifactStatus = {
  APPROVED: "APPROVED",
  IN_PROGRESS: "IN_PROGRESS",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type ArtifactStatus = (typeof ArtifactStatus)[keyof typeof ArtifactStatus];

/**
 * @public
 * @enum
 */
export const RealTimeContactAnalysisPostContactSummaryFailureCode = {
  FAILED_SAFETY_GUIDELINES: "FAILED_SAFETY_GUIDELINES",
  INSUFFICIENT_CONVERSATION_CONTENT: "INSUFFICIENT_CONVERSATION_CONTENT",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_ANALYSIS_CONFIGURATION: "INVALID_ANALYSIS_CONFIGURATION",
  QUOTA_EXCEEDED: "QUOTA_EXCEEDED",
} as const;
/**
 * @public
 */
export type RealTimeContactAnalysisPostContactSummaryFailureCode =
  (typeof RealTimeContactAnalysisPostContactSummaryFailureCode)[keyof typeof RealTimeContactAnalysisPostContactSummaryFailureCode];

/**
 * @public
 * @enum
 */
export const RealTimeContactAnalysisPostContactSummaryStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type RealTimeContactAnalysisPostContactSummaryStatus =
  (typeof RealTimeContactAnalysisPostContactSummaryStatus)[keyof typeof RealTimeContactAnalysisPostContactSummaryStatus];

/**
 * @public
 * @enum
 */
export const RealTimeContactAnalysisSentimentLabel = {
  NEGATIVE: "NEGATIVE",
  NEUTRAL: "NEUTRAL",
  POSITIVE: "POSITIVE",
} as const;
/**
 * @public
 */
export type RealTimeContactAnalysisSentimentLabel =
  (typeof RealTimeContactAnalysisSentimentLabel)[keyof typeof RealTimeContactAnalysisSentimentLabel];

/**
 * @public
 * @enum
 */
export const RealTimeContactAnalysisStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type RealTimeContactAnalysisStatus =
  (typeof RealTimeContactAnalysisStatus)[keyof typeof RealTimeContactAnalysisStatus];

/**
 * @public
 * @enum
 */
export const ContactRecordingType = {
  AGENT: "AGENT",
  IVR: "IVR",
  SCREEN: "SCREEN",
} as const;
/**
 * @public
 */
export type ContactRecordingType = (typeof ContactRecordingType)[keyof typeof ContactRecordingType];

/**
 * @public
 * @enum
 */
export const BooleanComparisonType = {
  IS_FALSE: "IS_FALSE",
  IS_TRUE: "IS_TRUE",
} as const;
/**
 * @public
 */
export type BooleanComparisonType = (typeof BooleanComparisonType)[keyof typeof BooleanComparisonType];

/**
 * @public
 * @enum
 */
export const DateTimeComparisonType = {
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
  RANGE: "RANGE",
} as const;
/**
 * @public
 */
export type DateTimeComparisonType = (typeof DateTimeComparisonType)[keyof typeof DateTimeComparisonType];

/**
 * @public
 * @enum
 */
export const DecimalComparisonType = {
  EQUAL: "EQUAL",
  GREATER: "GREATER",
  GREATER_OR_EQUAL: "GREATER_OR_EQUAL",
  LESSER: "LESSER",
  LESSER_OR_EQUAL: "LESSER_OR_EQUAL",
  NOT_EQUAL: "NOT_EQUAL",
  RANGE: "RANGE",
} as const;
/**
 * @public
 */
export type DecimalComparisonType = (typeof DecimalComparisonType)[keyof typeof DecimalComparisonType];

/**
 * @public
 * @enum
 */
export const NumberComparisonType = {
  EQUAL: "EQUAL",
  GREATER: "GREATER",
  GREATER_OR_EQUAL: "GREATER_OR_EQUAL",
  LESSER: "LESSER",
  LESSER_OR_EQUAL: "LESSER_OR_EQUAL",
  NOT_EQUAL: "NOT_EQUAL",
  RANGE: "RANGE",
} as const;
/**
 * @public
 */
export type NumberComparisonType = (typeof NumberComparisonType)[keyof typeof NumberComparisonType];

/**
 * @public
 * @enum
 */
export const SearchContactsTimeRangeType = {
  CONNECTED_TO_AGENT_TIMESTAMP: "CONNECTED_TO_AGENT_TIMESTAMP",
  DISCONNECT_TIMESTAMP: "DISCONNECT_TIMESTAMP",
  ENQUEUE_TIMESTAMP: "ENQUEUE_TIMESTAMP",
  INITIATION_TIMESTAMP: "INITIATION_TIMESTAMP",
  SCHEDULED_TIMESTAMP: "SCHEDULED_TIMESTAMP",
} as const;
/**
 * @public
 */
export type SearchContactsTimeRangeType =
  (typeof SearchContactsTimeRangeType)[keyof typeof SearchContactsTimeRangeType];

/**
 * @public
 * @enum
 */
export const SearchContactsTimeRangeConditionType = {
  NOT_EXISTS: "NOT_EXISTS",
} as const;
/**
 * @public
 */
export type SearchContactsTimeRangeConditionType =
  (typeof SearchContactsTimeRangeConditionType)[keyof typeof SearchContactsTimeRangeConditionType];

/**
 * @public
 * @enum
 */
export const SearchContactsMatchType = {
  MATCH_ALL: "MATCH_ALL",
  MATCH_ANY: "MATCH_ANY",
  MATCH_EXACT: "MATCH_EXACT",
  MATCH_NONE: "MATCH_NONE",
} as const;
/**
 * @public
 */
export type SearchContactsMatchType = (typeof SearchContactsMatchType)[keyof typeof SearchContactsMatchType];

/**
 * @public
 * @enum
 */
export const SortableFieldName = {
  CHANNEL: "CHANNEL",
  CONNECTED_TO_AGENT_TIMESTAMP: "CONNECTED_TO_AGENT_TIMESTAMP",
  DISCONNECT_TIMESTAMP: "DISCONNECT_TIMESTAMP",
  EXPIRY_TIMESTAMP: "EXPIRY_TIMESTAMP",
  INITIATION_METHOD: "INITIATION_METHOD",
  INITIATION_TIMESTAMP: "INITIATION_TIMESTAMP",
  SCHEDULED_TIMESTAMP: "SCHEDULED_TIMESTAMP",
} as const;
/**
 * @public
 */
export type SortableFieldName = (typeof SortableFieldName)[keyof typeof SortableFieldName];

/**
 * @public
 * @enum
 */
export const DateComparisonType = {
  EQUAL_TO: "EQUAL_TO",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL_TO: "LESS_THAN_OR_EQUAL_TO",
} as const;
/**
 * @public
 */
export type DateComparisonType = (typeof DateComparisonType)[keyof typeof DateComparisonType];

/**
 * @public
 * @enum
 */
export const SearchableQueueType = {
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type SearchableQueueType = (typeof SearchableQueueType)[keyof typeof SearchableQueueType];

/**
 * @public
 * @enum
 */
export const HierarchyGroupMatchType = {
  EXACT: "EXACT",
  WITH_CHILD_GROUPS: "WITH_CHILD_GROUPS",
} as const;
/**
 * @public
 */
export type HierarchyGroupMatchType = (typeof HierarchyGroupMatchType)[keyof typeof HierarchyGroupMatchType];

/**
 * @public
 * @enum
 */
export const TargetListType = {
  PROFICIENCIES: "PROFICIENCIES",
} as const;
/**
 * @public
 */
export type TargetListType = (typeof TargetListType)[keyof typeof TargetListType];

/**
 * @public
 * @enum
 */
export const ChatEventType = {
  DISCONNECT: "DISCONNECT",
  EVENT: "EVENT",
  MESSAGE: "MESSAGE",
} as const;
/**
 * @public
 */
export type ChatEventType = (typeof ChatEventType)[keyof typeof ChatEventType];

/**
 * @public
 * @enum
 */
export const OutboundMessageSourceType = {
  RAW: "RAW",
  TEMPLATE: "TEMPLATE",
} as const;
/**
 * @public
 */
export type OutboundMessageSourceType = (typeof OutboundMessageSourceType)[keyof typeof OutboundMessageSourceType];

/**
 * @public
 * @enum
 */
export const TrafficType = {
  CAMPAIGN: "CAMPAIGN",
  GENERAL: "GENERAL",
} as const;
/**
 * @public
 */
export type TrafficType = (typeof TrafficType)[keyof typeof TrafficType];

/**
 * @public
 * @enum
 */
export const ResponseMode = {
  COMPLETE: "COMPLETE",
  INCREMENTAL: "INCREMENTAL",
} as const;
/**
 * @public
 */
export type ResponseMode = (typeof ResponseMode)[keyof typeof ResponseMode];

/**
 * @public
 * @enum
 */
export const ContactMediaProcessingFailureMode = {
  DELIVER_UNPROCESSED_MESSAGE: "DELIVER_UNPROCESSED_MESSAGE",
  DO_NOT_DELIVER_UNPROCESSED_MESSAGE: "DO_NOT_DELIVER_UNPROCESSED_MESSAGE",
} as const;
/**
 * @public
 */
export type ContactMediaProcessingFailureMode =
  (typeof ContactMediaProcessingFailureMode)[keyof typeof ContactMediaProcessingFailureMode];

/**
 * @public
 * @enum
 */
export const IvrRecordingTrack = {
  ALL: "ALL",
} as const;
/**
 * @public
 */
export type IvrRecordingTrack = (typeof IvrRecordingTrack)[keyof typeof IvrRecordingTrack];

/**
 * @public
 * @enum
 */
export const VoiceRecordingTrack = {
  ALL: "ALL",
  FROM_AGENT: "FROM_AGENT",
  TO_AGENT: "TO_AGENT",
} as const;
/**
 * @public
 */
export type VoiceRecordingTrack = (typeof VoiceRecordingTrack)[keyof typeof VoiceRecordingTrack];

/**
 * @public
 * @enum
 */
export const InboundMessageSourceType = {
  RAW: "RAW",
} as const;
/**
 * @public
 */
export type InboundMessageSourceType = (typeof InboundMessageSourceType)[keyof typeof InboundMessageSourceType];

/**
 * @public
 * @enum
 */
export const EmailHeaderType = {
  IN_REPLY_TO: "IN_REPLY_TO",
  MESSAGE_ID: "MESSAGE_ID",
  REFERENCES: "REFERENCES",
  X_SES_SPAM_VERDICT: "X_SES_SPAM_VERDICT",
  X_SES_VIRUS_VERDICT: "X_SES_VIRUS_VERDICT",
} as const;
/**
 * @public
 */
export type EmailHeaderType = (typeof EmailHeaderType)[keyof typeof EmailHeaderType];

/**
 * @public
 * @enum
 */
export const MeetingFeatureStatus = {
  AVAILABLE: "AVAILABLE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;
/**
 * @public
 */
export type MeetingFeatureStatus = (typeof MeetingFeatureStatus)[keyof typeof MeetingFeatureStatus];

/**
 * @public
 * @enum
 */
export const TimerEligibleParticipantRoles = {
  AGENT: "AGENT",
  CUSTOMER: "CUSTOMER",
} as const;
/**
 * @public
 */
export type TimerEligibleParticipantRoles =
  (typeof TimerEligibleParticipantRoles)[keyof typeof TimerEligibleParticipantRoles];

/**
 * @public
 * @enum
 */
export const ParticipantTimerType = {
  DISCONNECT_NONCUSTOMER: "DISCONNECT_NONCUSTOMER",
  IDLE: "IDLE",
} as const;
/**
 * @public
 */
export type ParticipantTimerType = (typeof ParticipantTimerType)[keyof typeof ParticipantTimerType];

/**
 * @public
 * @enum
 */
export const ParticipantTimerAction = {
  Unset: "Unset",
} as const;
/**
 * @public
 */
export type ParticipantTimerAction = (typeof ParticipantTimerAction)[keyof typeof ParticipantTimerAction];
