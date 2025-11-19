// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const MemberRelation = {
  AND: "AND",
  OR: "OR",
} as const;
/**
 * @public
 */
export type MemberRelation = (typeof MemberRelation)[keyof typeof MemberRelation];

/**
 * @public
 * @enum
 */
export const ReadAccessType = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;
/**
 * @public
 */
export type ReadAccessType = (typeof ReadAccessType)[keyof typeof ReadAccessType];

/**
 * @public
 * @enum
 */
export const MembershipType = {
  DATASOURCE: "DATASOURCE",
  INDEX: "INDEX",
} as const;
/**
 * @public
 */
export type MembershipType = (typeof MembershipType)[keyof typeof MembershipType];

/**
 * @public
 * @enum
 */
export const ActionPayloadFieldType = {
  ARRAY: "ARRAY",
  BOOLEAN: "BOOLEAN",
  NUMBER: "NUMBER",
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type ActionPayloadFieldType = (typeof ActionPayloadFieldType)[keyof typeof ActionPayloadFieldType];

/**
 * @public
 * @enum
 */
export const PluginType = {
  ASANA: "ASANA",
  ATLASSIAN_CONFLUENCE: "ATLASSIAN_CONFLUENCE",
  CUSTOM: "CUSTOM",
  GOOGLE_CALENDAR: "GOOGLE_CALENDAR",
  JIRA: "JIRA",
  JIRA_CLOUD: "JIRA_CLOUD",
  MICROSOFT_EXCHANGE: "MICROSOFT_EXCHANGE",
  MICROSOFT_TEAMS: "MICROSOFT_TEAMS",
  PAGERDUTY_ADVANCE: "PAGERDUTY_ADVANCE",
  QUICKSIGHT: "QUICKSIGHT",
  SALESFORCE: "SALESFORCE",
  SALESFORCE_CRM: "SALESFORCE_CRM",
  SERVICENOW_NOW_PLATFORM: "SERVICENOW_NOW_PLATFORM",
  SERVICE_NOW: "SERVICE_NOW",
  SMARTSHEET: "SMARTSHEET",
  ZENDESK: "ZENDESK",
  ZENDESK_SUITE: "ZENDESK_SUITE",
} as const;
/**
 * @public
 */
export type PluginType = (typeof PluginType)[keyof typeof PluginType];

/**
 * @public
 * @enum
 */
export const APISchemaType = {
  OPEN_API_V3: "OPEN_API_V3",
} as const;
/**
 * @public
 */
export type APISchemaType = (typeof APISchemaType)[keyof typeof APISchemaType];

/**
 * @public
 * @enum
 */
export const IdentityType = {
  ANONYMOUS: "ANONYMOUS",
  AWS_IAM_IDC: "AWS_IAM_IDC",
  AWS_IAM_IDP_OIDC: "AWS_IAM_IDP_OIDC",
  AWS_IAM_IDP_SAML: "AWS_IAM_IDP_SAML",
  AWS_QUICKSIGHT_IDP: "AWS_QUICKSIGHT_IDP",
} as const;
/**
 * @public
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

/**
 * @public
 * @enum
 */
export const ApplicationStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

/**
 * @public
 * @enum
 */
export const AttachmentsControlMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AttachmentsControlMode = (typeof AttachmentsControlMode)[keyof typeof AttachmentsControlMode];

/**
 * @public
 * @enum
 */
export const PersonalizationControlMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type PersonalizationControlMode = (typeof PersonalizationControlMode)[keyof typeof PersonalizationControlMode];

/**
 * @public
 * @enum
 */
export const QAppsControlMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type QAppsControlMode = (typeof QAppsControlMode)[keyof typeof QAppsControlMode];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const DataAccessorAuthenticationType = {
  AWS_IAM_IDC_AUTH_CODE: "AWS_IAM_IDC_AUTH_CODE",
  AWS_IAM_IDC_TTI: "AWS_IAM_IDC_TTI",
} as const;
/**
 * @public
 */
export type DataAccessorAuthenticationType =
  (typeof DataAccessorAuthenticationType)[keyof typeof DataAccessorAuthenticationType];

/**
 * @public
 * @enum
 */
export const AutoSubscriptionStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AutoSubscriptionStatus = (typeof AutoSubscriptionStatus)[keyof typeof AutoSubscriptionStatus];

/**
 * @public
 * @enum
 */
export const SubscriptionType = {
  Q_BUSINESS: "Q_BUSINESS",
  Q_LITE: "Q_LITE",
} as const;
/**
 * @public
 */
export type SubscriptionType = (typeof SubscriptionType)[keyof typeof SubscriptionType];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  INTERNAL_ERROR: "InternalError",
  INVALID_REQUEST: "InvalidRequest",
  RESOURCE_INACTIVE: "ResourceInactive",
  RESOURCE_NOT_FOUND: "ResourceNotFound",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const IndexType = {
  ENTERPRISE: "ENTERPRISE",
  STARTER: "STARTER",
} as const;
/**
 * @public
 */
export type IndexType = (typeof IndexType)[keyof typeof IndexType];

/**
 * @public
 * @enum
 */
export const DocumentEnrichmentConditionOperator = {
  BEGINS_WITH: "BEGINS_WITH",
  CONTAINS: "CONTAINS",
  EQUALS: "EQUALS",
  EXISTS: "EXISTS",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUALS: "GREATER_THAN_OR_EQUALS",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUALS: "LESS_THAN_OR_EQUALS",
  NOT_CONTAINS: "NOT_CONTAINS",
  NOT_EQUALS: "NOT_EQUALS",
  NOT_EXISTS: "NOT_EXISTS",
} as const;
/**
 * @public
 */
export type DocumentEnrichmentConditionOperator =
  (typeof DocumentEnrichmentConditionOperator)[keyof typeof DocumentEnrichmentConditionOperator];

/**
 * @public
 * @enum
 */
export const DocumentContentOperator = {
  DELETE: "DELETE",
} as const;
/**
 * @public
 */
export type DocumentContentOperator = (typeof DocumentContentOperator)[keyof typeof DocumentContentOperator];

/**
 * @public
 * @enum
 */
export const AttributeValueOperator = {
  DELETE: "DELETE",
} as const;
/**
 * @public
 */
export type AttributeValueOperator = (typeof AttributeValueOperator)[keyof typeof AttributeValueOperator];

/**
 * @public
 * @enum
 */
export const AudioExtractionStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AudioExtractionStatus = (typeof AudioExtractionStatus)[keyof typeof AudioExtractionStatus];

/**
 * @public
 * @enum
 */
export const ImageExtractionStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ImageExtractionStatus = (typeof ImageExtractionStatus)[keyof typeof ImageExtractionStatus];

/**
 * @public
 * @enum
 */
export const VideoExtractionStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type VideoExtractionStatus = (typeof VideoExtractionStatus)[keyof typeof VideoExtractionStatus];

/**
 * @public
 * @enum
 */
export const DataSourceStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING_CREATION: "PENDING_CREATION",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type DataSourceStatus = (typeof DataSourceStatus)[keyof typeof DataSourceStatus];

/**
 * @public
 * @enum
 */
export const Status = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const AttributeType = {
  DATE: "DATE",
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
export const IndexStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type IndexStatus = (typeof IndexStatus)[keyof typeof IndexStatus];

/**
 * @public
 * @enum
 */
export const PluginBuildStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  READY: "READY",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type PluginBuildStatus = (typeof PluginBuildStatus)[keyof typeof PluginBuildStatus];

/**
 * @public
 * @enum
 */
export const PluginState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type PluginState = (typeof PluginState)[keyof typeof PluginState];

/**
 * @public
 * @enum
 */
export const DocumentAttributeBoostingLevel = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  NONE: "NONE",
  ONE: "ONE",
  TWO: "TWO",
  VERY_HIGH: "VERY_HIGH",
} as const;
/**
 * @public
 */
export type DocumentAttributeBoostingLevel =
  (typeof DocumentAttributeBoostingLevel)[keyof typeof DocumentAttributeBoostingLevel];

/**
 * @public
 * @enum
 */
export const NumberAttributeBoostingType = {
  PRIORITIZE_LARGER_VALUES: "PRIORITIZE_LARGER_VALUES",
  PRIORITIZE_SMALLER_VALUES: "PRIORITIZE_SMALLER_VALUES",
} as const;
/**
 * @public
 */
export type NumberAttributeBoostingType =
  (typeof NumberAttributeBoostingType)[keyof typeof NumberAttributeBoostingType];

/**
 * @public
 * @enum
 */
export const StringAttributeValueBoostingLevel = {
  FIVE: "FIVE",
  FOUR: "FOUR",
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  ONE: "ONE",
  THREE: "THREE",
  TWO: "TWO",
  VERY_HIGH: "VERY_HIGH",
} as const;
/**
 * @public
 */
export type StringAttributeValueBoostingLevel =
  (typeof StringAttributeValueBoostingLevel)[keyof typeof StringAttributeValueBoostingLevel];

/**
 * @public
 * @enum
 */
export const RetrieverType = {
  KENDRA_INDEX: "KENDRA_INDEX",
  NATIVE_INDEX: "NATIVE_INDEX",
} as const;
/**
 * @public
 */
export type RetrieverType = (typeof RetrieverType)[keyof typeof RetrieverType];

/**
 * @public
 * @enum
 */
export const RetrieverStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type RetrieverStatus = (typeof RetrieverStatus)[keyof typeof RetrieverStatus];

/**
 * @public
 * @enum
 */
export const WebExperienceSamplePromptsControlMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type WebExperienceSamplePromptsControlMode =
  (typeof WebExperienceSamplePromptsControlMode)[keyof typeof WebExperienceSamplePromptsControlMode];

/**
 * @public
 * @enum
 */
export const WebExperienceStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING_AUTH_CONFIG: "PENDING_AUTH_CONFIG",
} as const;
/**
 * @public
 */
export type WebExperienceStatus = (typeof WebExperienceStatus)[keyof typeof WebExperienceStatus];

/**
 * @public
 * @enum
 */
export const CreatorModeControl = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type CreatorModeControl = (typeof CreatorModeControl)[keyof typeof CreatorModeControl];

/**
 * @public
 * @enum
 */
export const OrchestrationControl = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type OrchestrationControl = (typeof OrchestrationControl)[keyof typeof OrchestrationControl];

/**
 * @public
 * @enum
 */
export const PermissionConditionOperator = {
  STRING_EQUALS: "StringEquals",
} as const;
/**
 * @public
 */
export type PermissionConditionOperator =
  (typeof PermissionConditionOperator)[keyof typeof PermissionConditionOperator];

/**
 * @public
 * @enum
 */
export const AttachmentStatus = {
  FAILED: "FAILED",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type AttachmentStatus = (typeof AttachmentStatus)[keyof typeof AttachmentStatus];

/**
 * @public
 * @enum
 */
export const AudioExtractionType = {
  SUMMARY: "SUMMARY",
  TRANSCRIPT: "TRANSCRIPT",
} as const;
/**
 * @public
 */
export type AudioExtractionType = (typeof AudioExtractionType)[keyof typeof AudioExtractionType];

/**
 * @public
 * @enum
 */
export const ContentType = {
  CSV: "CSV",
  HTML: "HTML",
  JSON: "JSON",
  MD: "MD",
  MS_EXCEL: "MS_EXCEL",
  MS_WORD: "MS_WORD",
  PDF: "PDF",
  PLAIN_TEXT: "PLAIN_TEXT",
  PPT: "PPT",
  RTF: "RTF",
  XML: "XML",
  XSLT: "XSLT",
} as const;
/**
 * @public
 */
export type ContentType = (typeof ContentType)[keyof typeof ContentType];

/**
 * @public
 * @enum
 */
export const ChatMode = {
  CREATOR_MODE: "CREATOR_MODE",
  PLUGIN_MODE: "PLUGIN_MODE",
  RETRIEVAL_MODE: "RETRIEVAL_MODE",
} as const;
/**
 * @public
 */
export type ChatMode = (typeof ChatMode)[keyof typeof ChatMode];

/**
 * @public
 * @enum
 */
export const VideoExtractionType = {
  SUMMARY: "SUMMARY",
  TRANSCRIPT: "TRANSCRIPT",
} as const;
/**
 * @public
 */
export type VideoExtractionType = (typeof VideoExtractionType)[keyof typeof VideoExtractionType];

/**
 * @public
 * @enum
 */
export const SystemMessageType = {
  GROUNDED_RESPONSE: "GROUNDED_RESPONSE",
  RESPONSE: "RESPONSE",
} as const;
/**
 * @public
 */
export type SystemMessageType = (typeof SystemMessageType)[keyof typeof SystemMessageType];

/**
 * @public
 * @enum
 */
export const ChatResponseConfigurationStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ChatResponseConfigurationStatus =
  (typeof ChatResponseConfigurationStatus)[keyof typeof ChatResponseConfigurationStatus];

/**
 * @public
 * @enum
 */
export const ResponseConfigurationType = {
  ALL: "ALL",
} as const;
/**
 * @public
 */
export type ResponseConfigurationType = (typeof ResponseConfigurationType)[keyof typeof ResponseConfigurationType];

/**
 * @public
 * @enum
 */
export const DataSourceSyncJobStatus = {
  ABORTED: "ABORTED",
  FAILED: "FAILED",
  INCOMPLETE: "INCOMPLETE",
  STOPPING: "STOPPING",
  SUCCEEDED: "SUCCEEDED",
  SYNCING: "SYNCING",
  SYNCING_INDEXING: "SYNCING_INDEXING",
} as const;
/**
 * @public
 */
export type DataSourceSyncJobStatus = (typeof DataSourceSyncJobStatus)[keyof typeof DataSourceSyncJobStatus];

/**
 * @public
 * @enum
 */
export const DocumentStatus = {
  DELETED: "DELETED",
  DELETING: "DELETING",
  DOCUMENT_FAILED_TO_INDEX: "DOCUMENT_FAILED_TO_INDEX",
  FAILED: "FAILED",
  INDEXED: "INDEXED",
  PROCESSING: "PROCESSING",
  RECEIVED: "RECEIVED",
  UPDATED: "UPDATED",
} as const;
/**
 * @public
 */
export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus];

/**
 * @public
 * @enum
 */
export const HallucinationReductionControl = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type HallucinationReductionControl =
  (typeof HallucinationReductionControl)[keyof typeof HallucinationReductionControl];

/**
 * @public
 * @enum
 */
export const ResponseScope = {
  ENTERPRISE_CONTENT_ONLY: "ENTERPRISE_CONTENT_ONLY",
  EXTENDED_KNOWLEDGE_ENABLED: "EXTENDED_KNOWLEDGE_ENABLED",
} as const;
/**
 * @public
 */
export type ResponseScope = (typeof ResponseScope)[keyof typeof ResponseScope];

/**
 * @public
 * @enum
 */
export const RuleType = {
  CONTENT_BLOCKER_RULE: "CONTENT_BLOCKER_RULE",
  CONTENT_RETRIEVAL_RULE: "CONTENT_RETRIEVAL_RULE",
} as const;
/**
 * @public
 */
export type RuleType = (typeof RuleType)[keyof typeof RuleType];

/**
 * @public
 * @enum
 */
export const OutputFormat = {
  EXTRACTED: "EXTRACTED",
  RAW: "RAW",
} as const;
/**
 * @public
 */
export type OutputFormat = (typeof OutputFormat)[keyof typeof OutputFormat];

/**
 * @public
 * @enum
 */
export const GroupStatus = {
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type GroupStatus = (typeof GroupStatus)[keyof typeof GroupStatus];

/**
 * @public
 * @enum
 */
export const MessageType = {
  SYSTEM: "SYSTEM",
  USER: "USER",
} as const;
/**
 * @public
 */
export type MessageType = (typeof MessageType)[keyof typeof MessageType];

/**
 * @public
 * @enum
 */
export const PluginTypeCategory = {
  COMMUNICATION: "Communication",
  CRM: "Customer relationship management (CRM)",
  PRODUCTIVITY: "Productivity",
  PROJECT_MANAGEMENT: "Project management",
  TICKETING_MANAGEMENT: "Ticketing and incident management",
} as const;
/**
 * @public
 */
export type PluginTypeCategory = (typeof PluginTypeCategory)[keyof typeof PluginTypeCategory];

/**
 * @public
 * @enum
 */
export const MessageUsefulnessReason = {
  COMPLETE: "COMPLETE",
  FACTUALLY_CORRECT: "FACTUALLY_CORRECT",
  HARMFUL_OR_UNSAFE: "HARMFUL_OR_UNSAFE",
  HELPFUL: "HELPFUL",
  INCORRECT_OR_MISSING_SOURCES: "INCORRECT_OR_MISSING_SOURCES",
  NOT_BASED_ON_DOCUMENTS: "NOT_BASED_ON_DOCUMENTS",
  NOT_COMPLETE: "NOT_COMPLETE",
  NOT_CONCISE: "NOT_CONCISE",
  NOT_FACTUALLY_CORRECT: "NOT_FACTUALLY_CORRECT",
  NOT_HELPFUL: "NOT_HELPFUL",
  OTHER: "OTHER",
  RELEVANT_SOURCES: "RELEVANT_SOURCES",
} as const;
/**
 * @public
 */
export type MessageUsefulnessReason = (typeof MessageUsefulnessReason)[keyof typeof MessageUsefulnessReason];

/**
 * @public
 * @enum
 */
export const MessageUsefulness = {
  NOT_USEFUL: "NOT_USEFUL",
  USEFUL: "USEFUL",
} as const;
/**
 * @public
 */
export type MessageUsefulness = (typeof MessageUsefulness)[keyof typeof MessageUsefulness];

/**
 * @public
 * @enum
 */
export const ScoreConfidence = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  NOT_AVAILABLE: "NOT_AVAILABLE",
  VERY_HIGH: "VERY_HIGH",
} as const;
/**
 * @public
 */
export type ScoreConfidence = (typeof ScoreConfidence)[keyof typeof ScoreConfidence];
