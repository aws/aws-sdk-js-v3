// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const HighlightType = {
  STANDARD: "STANDARD",
  THESAURUS_SYNONYM: "THESAURUS_SYNONYM",
} as const;
/**
 * @public
 */
export type HighlightType = (typeof HighlightType)[keyof typeof HighlightType];

/**
 * @public
 * @enum
 */
export const AdditionalResultAttributeValueType = {
  TEXT_WITH_HIGHLIGHTS_VALUE: "TEXT_WITH_HIGHLIGHTS_VALUE",
} as const;
/**
 * @public
 */
export type AdditionalResultAttributeValueType =
  (typeof AdditionalResultAttributeValueType)[keyof typeof AdditionalResultAttributeValueType];

/**
 * @public
 * @enum
 */
export const AlfrescoEntity = {
  blog: "blog",
  documentLibrary: "documentLibrary",
  wiki: "wiki",
} as const;
/**
 * @public
 */
export type AlfrescoEntity = (typeof AlfrescoEntity)[keyof typeof AlfrescoEntity];

/**
 * @public
 * @enum
 */
export const EntityType = {
  GROUP: "GROUP",
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
export const Persona = {
  OWNER: "OWNER",
  VIEWER: "VIEWER",
} as const;
/**
 * @public
 */
export type Persona = (typeof Persona)[keyof typeof Persona];

/**
 * @public
 * @enum
 */
export const AttributeSuggestionsMode = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type AttributeSuggestionsMode = (typeof AttributeSuggestionsMode)[keyof typeof AttributeSuggestionsMode];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  INTERNAL_ERROR: "InternalError",
  INVALID_REQUEST: "InvalidRequest",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const DocumentStatus = {
  FAILED: "FAILED",
  INDEXED: "INDEXED",
  NOT_FOUND: "NOT_FOUND",
  PROCESSING: "PROCESSING",
  UPDATED: "UPDATED",
  UPDATE_FAILED: "UPDATE_FAILED",
} as const;
/**
 * @public
 */
export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus];

/**
 * @public
 * @enum
 */
export const ConditionOperator = {
  BeginsWith: "BeginsWith",
  Contains: "Contains",
  Equals: "Equals",
  Exists: "Exists",
  GreaterThan: "GreaterThan",
  GreaterThanOrEquals: "GreaterThanOrEquals",
  LessThan: "LessThan",
  LessThanOrEquals: "LessThanOrEquals",
  NotContains: "NotContains",
  NotEquals: "NotEquals",
  NotExists: "NotExists",
} as const;
/**
 * @public
 */
export type ConditionOperator = (typeof ConditionOperator)[keyof typeof ConditionOperator];

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
export const PrincipalType = {
  GROUP: "GROUP",
  USER: "USER",
} as const;
/**
 * @public
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

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
export const ConfluenceAttachmentFieldName = {
  AUTHOR: "AUTHOR",
  CONTENT_TYPE: "CONTENT_TYPE",
  CREATED_DATE: "CREATED_DATE",
  DISPLAY_URL: "DISPLAY_URL",
  FILE_SIZE: "FILE_SIZE",
  ITEM_TYPE: "ITEM_TYPE",
  PARENT_ID: "PARENT_ID",
  SPACE_KEY: "SPACE_KEY",
  SPACE_NAME: "SPACE_NAME",
  URL: "URL",
  VERSION: "VERSION",
} as const;
/**
 * @public
 */
export type ConfluenceAttachmentFieldName =
  (typeof ConfluenceAttachmentFieldName)[keyof typeof ConfluenceAttachmentFieldName];

/**
 * @public
 * @enum
 */
export const ConfluenceAuthenticationType = {
  HTTP_BASIC: "HTTP_BASIC",
  PAT: "PAT",
} as const;
/**
 * @public
 */
export type ConfluenceAuthenticationType =
  (typeof ConfluenceAuthenticationType)[keyof typeof ConfluenceAuthenticationType];

/**
 * @public
 * @enum
 */
export const ConfluenceBlogFieldName = {
  AUTHOR: "AUTHOR",
  DISPLAY_URL: "DISPLAY_URL",
  ITEM_TYPE: "ITEM_TYPE",
  LABELS: "LABELS",
  PUBLISH_DATE: "PUBLISH_DATE",
  SPACE_KEY: "SPACE_KEY",
  SPACE_NAME: "SPACE_NAME",
  URL: "URL",
  VERSION: "VERSION",
} as const;
/**
 * @public
 */
export type ConfluenceBlogFieldName = (typeof ConfluenceBlogFieldName)[keyof typeof ConfluenceBlogFieldName];

/**
 * @public
 * @enum
 */
export const ConfluencePageFieldName = {
  AUTHOR: "AUTHOR",
  CONTENT_STATUS: "CONTENT_STATUS",
  CREATED_DATE: "CREATED_DATE",
  DISPLAY_URL: "DISPLAY_URL",
  ITEM_TYPE: "ITEM_TYPE",
  LABELS: "LABELS",
  MODIFIED_DATE: "MODIFIED_DATE",
  PARENT_ID: "PARENT_ID",
  SPACE_KEY: "SPACE_KEY",
  SPACE_NAME: "SPACE_NAME",
  URL: "URL",
  VERSION: "VERSION",
} as const;
/**
 * @public
 */
export type ConfluencePageFieldName = (typeof ConfluencePageFieldName)[keyof typeof ConfluencePageFieldName];

/**
 * @public
 * @enum
 */
export const ConfluenceSpaceFieldName = {
  DISPLAY_URL: "DISPLAY_URL",
  ITEM_TYPE: "ITEM_TYPE",
  SPACE_KEY: "SPACE_KEY",
  URL: "URL",
} as const;
/**
 * @public
 */
export type ConfluenceSpaceFieldName = (typeof ConfluenceSpaceFieldName)[keyof typeof ConfluenceSpaceFieldName];

/**
 * @public
 * @enum
 */
export const ConfluenceVersion = {
  CLOUD: "CLOUD",
  SERVER: "SERVER",
} as const;
/**
 * @public
 */
export type ConfluenceVersion = (typeof ConfluenceVersion)[keyof typeof ConfluenceVersion];

/**
 * @public
 * @enum
 */
export const DatabaseEngineType = {
  RDS_AURORA_MYSQL: "RDS_AURORA_MYSQL",
  RDS_AURORA_POSTGRESQL: "RDS_AURORA_POSTGRESQL",
  RDS_MYSQL: "RDS_MYSQL",
  RDS_POSTGRESQL: "RDS_POSTGRESQL",
} as const;
/**
 * @public
 */
export type DatabaseEngineType = (typeof DatabaseEngineType)[keyof typeof DatabaseEngineType];

/**
 * @public
 * @enum
 */
export const QueryIdentifiersEnclosingOption = {
  DOUBLE_QUOTES: "DOUBLE_QUOTES",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type QueryIdentifiersEnclosingOption =
  (typeof QueryIdentifiersEnclosingOption)[keyof typeof QueryIdentifiersEnclosingOption];

/**
 * @public
 * @enum
 */
export const FsxFileSystemType = {
  WINDOWS: "WINDOWS",
} as const;
/**
 * @public
 */
export type FsxFileSystemType = (typeof FsxFileSystemType)[keyof typeof FsxFileSystemType];

/**
 * @public
 * @enum
 */
export const Type = {
  ON_PREMISE: "ON_PREMISE",
  SAAS: "SAAS",
} as const;
/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * @enum
 */
export const IssueSubEntity = {
  ATTACHMENTS: "ATTACHMENTS",
  COMMENTS: "COMMENTS",
  WORKLOGS: "WORKLOGS",
} as const;
/**
 * @public
 */
export type IssueSubEntity = (typeof IssueSubEntity)[keyof typeof IssueSubEntity];

/**
 * @public
 * @enum
 */
export const SalesforceChatterFeedIncludeFilterType = {
  ACTIVE_USER: "ACTIVE_USER",
  STANDARD_USER: "STANDARD_USER",
} as const;
/**
 * @public
 */
export type SalesforceChatterFeedIncludeFilterType =
  (typeof SalesforceChatterFeedIncludeFilterType)[keyof typeof SalesforceChatterFeedIncludeFilterType];

/**
 * @public
 * @enum
 */
export const SalesforceKnowledgeArticleState = {
  ARCHIVED: "ARCHIVED",
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
} as const;
/**
 * @public
 */
export type SalesforceKnowledgeArticleState =
  (typeof SalesforceKnowledgeArticleState)[keyof typeof SalesforceKnowledgeArticleState];

/**
 * @public
 * @enum
 */
export const SalesforceStandardObjectName = {
  ACCOUNT: "ACCOUNT",
  CAMPAIGN: "CAMPAIGN",
  CASE: "CASE",
  CONTACT: "CONTACT",
  CONTRACT: "CONTRACT",
  DOCUMENT: "DOCUMENT",
  GROUP: "GROUP",
  IDEA: "IDEA",
  LEAD: "LEAD",
  OPPORTUNITY: "OPPORTUNITY",
  PARTNER: "PARTNER",
  PRICEBOOK: "PRICEBOOK",
  PRODUCT: "PRODUCT",
  PROFILE: "PROFILE",
  SOLUTION: "SOLUTION",
  TASK: "TASK",
  USER: "USER",
} as const;
/**
 * @public
 */
export type SalesforceStandardObjectName =
  (typeof SalesforceStandardObjectName)[keyof typeof SalesforceStandardObjectName];

/**
 * @public
 * @enum
 */
export const ServiceNowAuthenticationType = {
  HTTP_BASIC: "HTTP_BASIC",
  OAUTH2: "OAUTH2",
} as const;
/**
 * @public
 */
export type ServiceNowAuthenticationType =
  (typeof ServiceNowAuthenticationType)[keyof typeof ServiceNowAuthenticationType];

/**
 * @public
 * @enum
 */
export const ServiceNowBuildVersionType = {
  LONDON: "LONDON",
  OTHERS: "OTHERS",
} as const;
/**
 * @public
 */
export type ServiceNowBuildVersionType = (typeof ServiceNowBuildVersionType)[keyof typeof ServiceNowBuildVersionType];

/**
 * @public
 * @enum
 */
export const SharePointOnlineAuthenticationType = {
  HTTP_BASIC: "HTTP_BASIC",
  OAUTH2: "OAUTH2",
} as const;
/**
 * @public
 */
export type SharePointOnlineAuthenticationType =
  (typeof SharePointOnlineAuthenticationType)[keyof typeof SharePointOnlineAuthenticationType];

/**
 * @public
 * @enum
 */
export const SharePointVersion = {
  SHAREPOINT_2013: "SHAREPOINT_2013",
  SHAREPOINT_2016: "SHAREPOINT_2016",
  SHAREPOINT_2019: "SHAREPOINT_2019",
  SHAREPOINT_ONLINE: "SHAREPOINT_ONLINE",
} as const;
/**
 * @public
 */
export type SharePointVersion = (typeof SharePointVersion)[keyof typeof SharePointVersion];

/**
 * @public
 * @enum
 */
export const SlackEntity = {
  DIRECT_MESSAGE: "DIRECT_MESSAGE",
  GROUP_MESSAGE: "GROUP_MESSAGE",
  PRIVATE_CHANNEL: "PRIVATE_CHANNEL",
  PUBLIC_CHANNEL: "PUBLIC_CHANNEL",
} as const;
/**
 * @public
 */
export type SlackEntity = (typeof SlackEntity)[keyof typeof SlackEntity];

/**
 * @public
 * @enum
 */
export const WebCrawlerMode = {
  EVERYTHING: "EVERYTHING",
  HOST_ONLY: "HOST_ONLY",
  SUBDOMAINS: "SUBDOMAINS",
} as const;
/**
 * @public
 */
export type WebCrawlerMode = (typeof WebCrawlerMode)[keyof typeof WebCrawlerMode];

/**
 * @public
 * @enum
 */
export const DataSourceType = {
  ALFRESCO: "ALFRESCO",
  BOX: "BOX",
  CONFLUENCE: "CONFLUENCE",
  CUSTOM: "CUSTOM",
  DATABASE: "DATABASE",
  FSX: "FSX",
  GITHUB: "GITHUB",
  GOOGLEDRIVE: "GOOGLEDRIVE",
  JIRA: "JIRA",
  ONEDRIVE: "ONEDRIVE",
  QUIP: "QUIP",
  S3: "S3",
  SALESFORCE: "SALESFORCE",
  SERVICENOW: "SERVICENOW",
  SHAREPOINT: "SHAREPOINT",
  SLACK: "SLACK",
  TEMPLATE: "TEMPLATE",
  WEBCRAWLER: "WEBCRAWLER",
  WORKDOCS: "WORKDOCS",
} as const;
/**
 * @public
 */
export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType];

/**
 * @public
 * @enum
 */
export const FaqFileFormat = {
  CSV: "CSV",
  CSV_WITH_HEADER: "CSV_WITH_HEADER",
  JSON: "JSON",
} as const;
/**
 * @public
 */
export type FaqFileFormat = (typeof FaqFileFormat)[keyof typeof FaqFileFormat];

/**
 * @public
 * @enum
 */
export const FeaturedResultsSetStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type FeaturedResultsSetStatus = (typeof FeaturedResultsSetStatus)[keyof typeof FeaturedResultsSetStatus];

/**
 * @public
 * @enum
 */
export const IndexEdition = {
  DEVELOPER_EDITION: "DEVELOPER_EDITION",
  ENTERPRISE_EDITION: "ENTERPRISE_EDITION",
  GEN_AI_ENTERPRISE_EDITION: "GEN_AI_ENTERPRISE_EDITION",
} as const;
/**
 * @public
 */
export type IndexEdition = (typeof IndexEdition)[keyof typeof IndexEdition];

/**
 * @public
 * @enum
 */
export const UserContextPolicy = {
  ATTRIBUTE_FILTER: "ATTRIBUTE_FILTER",
  USER_TOKEN: "USER_TOKEN",
} as const;
/**
 * @public
 */
export type UserContextPolicy = (typeof UserContextPolicy)[keyof typeof UserContextPolicy];

/**
 * @public
 * @enum
 */
export const UserGroupResolutionMode = {
  AWS_SSO: "AWS_SSO",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type UserGroupResolutionMode = (typeof UserGroupResolutionMode)[keyof typeof UserGroupResolutionMode];

/**
 * @public
 * @enum
 */
export const KeyLocation = {
  SECRET_MANAGER: "SECRET_MANAGER",
  URL: "URL",
} as const;
/**
 * @public
 */
export type KeyLocation = (typeof KeyLocation)[keyof typeof KeyLocation];

/**
 * @public
 * @enum
 */
export const DataSourceStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
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
export const EndpointType = {
  HOME: "HOME",
} as const;
/**
 * @public
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

/**
 * @public
 * @enum
 */
export const ExperienceStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type ExperienceStatus = (typeof ExperienceStatus)[keyof typeof ExperienceStatus];

/**
 * @public
 * @enum
 */
export const FaqStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type FaqStatus = (typeof FaqStatus)[keyof typeof FaqStatus];

/**
 * @public
 * @enum
 */
export const Order = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type Order = (typeof Order)[keyof typeof Order];

/**
 * @public
 * @enum
 */
export const DocumentAttributeValueType = {
  DATE_VALUE: "DATE_VALUE",
  LONG_VALUE: "LONG_VALUE",
  STRING_LIST_VALUE: "STRING_LIST_VALUE",
  STRING_VALUE: "STRING_VALUE",
} as const;
/**
 * @public
 */
export type DocumentAttributeValueType = (typeof DocumentAttributeValueType)[keyof typeof DocumentAttributeValueType];

/**
 * @public
 * @enum
 */
export const IndexStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  SYSTEM_UPDATING: "SYSTEM_UPDATING",
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
export const PrincipalMappingStatus = {
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type PrincipalMappingStatus = (typeof PrincipalMappingStatus)[keyof typeof PrincipalMappingStatus];

/**
 * @public
 * @enum
 */
export const QuerySuggestionsBlockListStatus = {
  ACTIVE: "ACTIVE",
  ACTIVE_BUT_UPDATE_FAILED: "ACTIVE_BUT_UPDATE_FAILED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type QuerySuggestionsBlockListStatus =
  (typeof QuerySuggestionsBlockListStatus)[keyof typeof QuerySuggestionsBlockListStatus];

/**
 * @public
 * @enum
 */
export const Mode = {
  ENABLED: "ENABLED",
  LEARN_ONLY: "LEARN_ONLY",
} as const;
/**
 * @public
 */
export type Mode = (typeof Mode)[keyof typeof Mode];

/**
 * @public
 * @enum
 */
export const QuerySuggestionsStatus = {
  ACTIVE: "ACTIVE",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type QuerySuggestionsStatus = (typeof QuerySuggestionsStatus)[keyof typeof QuerySuggestionsStatus];

/**
 * @public
 * @enum
 */
export const ThesaurusStatus = {
  ACTIVE: "ACTIVE",
  ACTIVE_BUT_UPDATE_FAILED: "ACTIVE_BUT_UPDATE_FAILED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ThesaurusStatus = (typeof ThesaurusStatus)[keyof typeof ThesaurusStatus];

/**
 * @public
 * @enum
 */
export const SuggestionType = {
  DOCUMENT_ATTRIBUTES: "DOCUMENT_ATTRIBUTES",
  QUERY: "QUERY",
} as const;
/**
 * @public
 */
export type SuggestionType = (typeof SuggestionType)[keyof typeof SuggestionType];

/**
 * @public
 * @enum
 */
export const Interval = {
  ONE_MONTH_AGO: "ONE_MONTH_AGO",
  ONE_WEEK_AGO: "ONE_WEEK_AGO",
  THIS_MONTH: "THIS_MONTH",
  THIS_WEEK: "THIS_WEEK",
  TWO_MONTHS_AGO: "TWO_MONTHS_AGO",
  TWO_WEEKS_AGO: "TWO_WEEKS_AGO",
} as const;
/**
 * @public
 */
export type Interval = (typeof Interval)[keyof typeof Interval];

/**
 * @public
 * @enum
 */
export const MetricType = {
  AGG_QUERY_DOC_METRICS: "AGG_QUERY_DOC_METRICS",
  DOCS_BY_CLICK_COUNT: "DOCS_BY_CLICK_COUNT",
  QUERIES_BY_COUNT: "QUERIES_BY_COUNT",
  QUERIES_BY_ZERO_CLICK_RATE: "QUERIES_BY_ZERO_CLICK_RATE",
  QUERIES_BY_ZERO_RESULT_RATE: "QUERIES_BY_ZERO_RESULT_RATE",
  TREND_QUERY_DOC_METRICS: "TREND_QUERY_DOC_METRICS",
} as const;
/**
 * @public
 */
export type MetricType = (typeof MetricType)[keyof typeof MetricType];

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
export const MissingAttributeKeyStrategy = {
  COLLAPSE: "COLLAPSE",
  EXPAND: "EXPAND",
  IGNORE: "IGNORE",
} as const;
/**
 * @public
 */
export type MissingAttributeKeyStrategy =
  (typeof MissingAttributeKeyStrategy)[keyof typeof MissingAttributeKeyStrategy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASC: "ASC",
  DESC: "DESC",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const QueryResultType = {
  ANSWER: "ANSWER",
  DOCUMENT: "DOCUMENT",
  QUESTION_ANSWER: "QUESTION_ANSWER",
} as const;
/**
 * @public
 */
export type QueryResultType = (typeof QueryResultType)[keyof typeof QueryResultType];

/**
 * @public
 * @enum
 */
export const QueryResultFormat = {
  TABLE: "TABLE",
  TEXT: "TEXT",
} as const;
/**
 * @public
 */
export type QueryResultFormat = (typeof QueryResultFormat)[keyof typeof QueryResultFormat];

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

/**
 * @public
 * @enum
 */
export const WarningCode = {
  QUERY_LANGUAGE_INVALID_SYNTAX: "QUERY_LANGUAGE_INVALID_SYNTAX",
} as const;
/**
 * @public
 */
export type WarningCode = (typeof WarningCode)[keyof typeof WarningCode];

/**
 * @public
 * @enum
 */
export const RelevanceType = {
  NOT_RELEVANT: "NOT_RELEVANT",
  RELEVANT: "RELEVANT",
} as const;
/**
 * @public
 */
export type RelevanceType = (typeof RelevanceType)[keyof typeof RelevanceType];
