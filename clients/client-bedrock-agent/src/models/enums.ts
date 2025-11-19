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
export const ActionGroupState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ActionGroupState = (typeof ActionGroupState)[keyof typeof ActionGroupState];

/**
 * @public
 * @enum
 */
export const Type = {
  ARRAY: "array",
  BOOLEAN: "boolean",
  INTEGER: "integer",
  NUMBER: "number",
  STRING: "string",
} as const;
/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

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
export const AgentStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  NOT_PREPARED: "NOT_PREPARED",
  PREPARED: "PREPARED",
  PREPARING: "PREPARING",
  UPDATING: "UPDATING",
  VERSIONING: "VERSIONING",
} as const;
/**
 * @public
 */
export type AgentStatus = (typeof AgentStatus)[keyof typeof AgentStatus];

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
export const PromptType = {
  KNOWLEDGE_BASE_RESPONSE_GENERATION: "KNOWLEDGE_BASE_RESPONSE_GENERATION",
  MEMORY_SUMMARIZATION: "MEMORY_SUMMARIZATION",
  ORCHESTRATION: "ORCHESTRATION",
  POST_PROCESSING: "POST_PROCESSING",
  PRE_PROCESSING: "PRE_PROCESSING",
} as const;
/**
 * @public
 */
export type PromptType = (typeof PromptType)[keyof typeof PromptType];

/**
 * @public
 * @enum
 */
export const AgentAliasStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  DISSOCIATED: "DISSOCIATED",
  FAILED: "FAILED",
  PREPARED: "PREPARED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type AgentAliasStatus = (typeof AgentAliasStatus)[keyof typeof AgentAliasStatus];

/**
 * @public
 * @enum
 */
export const AliasInvocationState = {
  /**
   * Agent is actively processing requests
   */
  ACCEPT_INVOCATIONS: "ACCEPT_INVOCATIONS",
  /**
   * Agent is paused and will not accept new requests
   */
  REJECT_INVOCATIONS: "REJECT_INVOCATIONS",
} as const;
/**
 * @public
 */
export type AliasInvocationState = (typeof AliasInvocationState)[keyof typeof AliasInvocationState];

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
export const KnowledgeBaseState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type KnowledgeBaseState = (typeof KnowledgeBaseState)[keyof typeof KnowledgeBaseState];

/**
 * @public
 * @enum
 */
export const DataDeletionPolicy = {
  DELETE: "DELETE",
  RETAIN: "RETAIN",
} as const;
/**
 * @public
 */
export type DataDeletionPolicy = (typeof DataDeletionPolicy)[keyof typeof DataDeletionPolicy];

/**
 * @public
 * @enum
 */
export const CrawlFilterConfigurationType = {
  PATTERN: "PATTERN",
} as const;
/**
 * @public
 */
export type CrawlFilterConfigurationType =
  (typeof CrawlFilterConfigurationType)[keyof typeof CrawlFilterConfigurationType];

/**
 * @public
 * @enum
 */
export const ConfluenceAuthType = {
  BASIC: "BASIC",
  OAUTH2_CLIENT_CREDENTIALS: "OAUTH2_CLIENT_CREDENTIALS",
} as const;
/**
 * @public
 */
export type ConfluenceAuthType = (typeof ConfluenceAuthType)[keyof typeof ConfluenceAuthType];

/**
 * @public
 * @enum
 */
export const ConfluenceHostType = {
  SAAS: "SAAS",
} as const;
/**
 * @public
 */
export type ConfluenceHostType = (typeof ConfluenceHostType)[keyof typeof ConfluenceHostType];

/**
 * @public
 * @enum
 */
export const SalesforceAuthType = {
  OAUTH2_CLIENT_CREDENTIALS: "OAUTH2_CLIENT_CREDENTIALS",
} as const;
/**
 * @public
 */
export type SalesforceAuthType = (typeof SalesforceAuthType)[keyof typeof SalesforceAuthType];

/**
 * @public
 * @enum
 */
export const SharePointAuthType = {
  OAUTH2_CLIENT_CREDENTIALS: "OAUTH2_CLIENT_CREDENTIALS",
  OAUTH2_SHAREPOINT_APP_ONLY_CLIENT_CREDENTIALS: "OAUTH2_SHAREPOINT_APP_ONLY_CLIENT_CREDENTIALS",
} as const;
/**
 * @public
 */
export type SharePointAuthType = (typeof SharePointAuthType)[keyof typeof SharePointAuthType];

/**
 * @public
 * @enum
 */
export const SharePointHostType = {
  ONLINE: "ONLINE",
} as const;
/**
 * @public
 */
export type SharePointHostType = (typeof SharePointHostType)[keyof typeof SharePointHostType];

/**
 * @public
 * @enum
 */
export const DataSourceType = {
  CONFLUENCE: "CONFLUENCE",
  CUSTOM: "CUSTOM",
  REDSHIFT_METADATA: "REDSHIFT_METADATA",
  S3: "S3",
  SALESFORCE: "SALESFORCE",
  SHAREPOINT: "SHAREPOINT",
  WEB: "WEB",
} as const;
/**
 * @public
 */
export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType];

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
export const EnrichmentStrategyMethod = {
  CHUNK_ENTITY_EXTRACTION: "CHUNK_ENTITY_EXTRACTION",
} as const;
/**
 * @public
 */
export type EnrichmentStrategyMethod = (typeof EnrichmentStrategyMethod)[keyof typeof EnrichmentStrategyMethod];

/**
 * @public
 * @enum
 */
export const ContextEnrichmentType = {
  BEDROCK_FOUNDATION_MODEL: "BEDROCK_FOUNDATION_MODEL",
} as const;
/**
 * @public
 */
export type ContextEnrichmentType = (typeof ContextEnrichmentType)[keyof typeof ContextEnrichmentType];

/**
 * @public
 * @enum
 */
export const StepType = {
  POST_CHUNKING: "POST_CHUNKING",
} as const;
/**
 * @public
 */
export type StepType = (typeof StepType)[keyof typeof StepType];

/**
 * @public
 * @enum
 */
export const ParsingModality = {
  MULTIMODAL: "MULTIMODAL",
} as const;
/**
 * @public
 */
export type ParsingModality = (typeof ParsingModality)[keyof typeof ParsingModality];

/**
 * @public
 * @enum
 */
export const ParsingStrategy = {
  BEDROCK_DATA_AUTOMATION: "BEDROCK_DATA_AUTOMATION",
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
export const DataSourceStatus = {
  AVAILABLE: "AVAILABLE",
  DELETE_UNSUCCESSFUL: "DELETE_UNSUCCESSFUL",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type DataSourceStatus = (typeof DataSourceStatus)[keyof typeof DataSourceStatus];

/**
 * @public
 * @enum
 */
export const FlowConnectionType = {
  CONDITIONAL: "Conditional",
  DATA: "Data",
} as const;
/**
 * @public
 */
export type FlowConnectionType = (typeof FlowConnectionType)[keyof typeof FlowConnectionType];

/**
 * @public
 * @enum
 */
export const SupportedLanguages = {
  PYTHON_3: "Python_3",
} as const;
/**
 * @public
 */
export type SupportedLanguages = (typeof SupportedLanguages)[keyof typeof SupportedLanguages];

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
export const PromptTemplateType = {
  CHAT: "CHAT",
  TEXT: "TEXT",
} as const;
/**
 * @public
 */
export type PromptTemplateType = (typeof PromptTemplateType)[keyof typeof PromptTemplateType];

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
export const FlowNodeType = {
  AGENT: "Agent",
  COLLECTOR: "Collector",
  CONDITION: "Condition",
  INLINE_CODE: "InlineCode",
  INPUT: "Input",
  ITERATOR: "Iterator",
  KNOWLEDGE_BASE: "KnowledgeBase",
  LAMBDA_FUNCTION: "LambdaFunction",
  LEX: "Lex",
  LOOP: "Loop",
  LOOP_CONTROLLER: "LoopController",
  LOOP_INPUT: "LoopInput",
  OUTPUT: "Output",
  PROMPT: "Prompt",
  RETRIEVAL: "Retrieval",
  STORAGE: "Storage",
} as const;
/**
 * @public
 */
export type FlowNodeType = (typeof FlowNodeType)[keyof typeof FlowNodeType];

/**
 * @public
 * @enum
 */
export const FlowStatus = {
  FAILED: "Failed",
  NOT_PREPARED: "NotPrepared",
  PREPARED: "Prepared",
  PREPARING: "Preparing",
} as const;
/**
 * @public
 */
export type FlowStatus = (typeof FlowStatus)[keyof typeof FlowStatus];

/**
 * @public
 * @enum
 */
export const ConcurrencyType = {
  AUTOMATIC: "Automatic",
  MANUAL: "Manual",
} as const;
/**
 * @public
 */
export type ConcurrencyType = (typeof ConcurrencyType)[keyof typeof ConcurrencyType];

/**
 * @public
 * @enum
 */
export const IncompatibleLoopNodeType = {
  COLLECTOR: "Collector",
  CONDITION: "Condition",
  INPUT: "Input",
  ITERATOR: "Iterator",
} as const;
/**
 * @public
 */
export type IncompatibleLoopNodeType = (typeof IncompatibleLoopNodeType)[keyof typeof IncompatibleLoopNodeType];

/**
 * @public
 * @enum
 */
export const FlowValidationSeverity = {
  ERROR: "Error",
  WARNING: "Warning",
} as const;
/**
 * @public
 */
export type FlowValidationSeverity = (typeof FlowValidationSeverity)[keyof typeof FlowValidationSeverity];

/**
 * @public
 * @enum
 */
export const FlowValidationType = {
  CYCLIC_CONNECTION: "CyclicConnection",
  DUPLICATE_CONDITION_EXPRESSION: "DuplicateConditionExpression",
  DUPLICATE_CONNECTIONS: "DuplicateConnections",
  INCOMPATIBLE_CONNECTION_DATA_TYPE: "IncompatibleConnectionDataType",
  INVALID_LOOP_BOUNDARY: "InvalidLoopBoundary",
  LOOP_INCOMPATIBLE_NODE_TYPE: "LoopIncompatibleNodeType",
  MALFORMED_CONDITION_EXPRESSION: "MalformedConditionExpression",
  MALFORMED_NODE_INPUT_EXPRESSION: "MalformedNodeInputExpression",
  MISMATCHED_NODE_INPUT_TYPE: "MismatchedNodeInputType",
  MISMATCHED_NODE_OUTPUT_TYPE: "MismatchedNodeOutputType",
  MISSING_CONNECTION_CONFIGURATION: "MissingConnectionConfiguration",
  MISSING_DEFAULT_CONDITION: "MissingDefaultCondition",
  MISSING_ENDING_NODES: "MissingEndingNodes",
  MISSING_LOOP_CONTROLLER_NODE: "MissingLoopControllerNode",
  MISSING_LOOP_INPUT_NODE: "MissingLoopInputNode",
  MISSING_NODE_CONFIGURATION: "MissingNodeConfiguration",
  MISSING_NODE_INPUT: "MissingNodeInput",
  MISSING_NODE_OUTPUT: "MissingNodeOutput",
  MISSING_STARTING_NODES: "MissingStartingNodes",
  MULTIPLE_LOOP_CONTROLLER_NODES: "MultipleLoopControllerNodes",
  MULTIPLE_LOOP_INPUT_NODES: "MultipleLoopInputNodes",
  MULTIPLE_NODE_INPUT_CONNECTIONS: "MultipleNodeInputConnections",
  UNFULFILLED_NODE_INPUT: "UnfulfilledNodeInput",
  UNKNOWN_CONNECTION_CONDITION: "UnknownConnectionCondition",
  UNKNOWN_CONNECTION_SOURCE: "UnknownConnectionSource",
  UNKNOWN_CONNECTION_SOURCE_OUTPUT: "UnknownConnectionSourceOutput",
  UNKNOWN_CONNECTION_TARGET: "UnknownConnectionTarget",
  UNKNOWN_CONNECTION_TARGET_INPUT: "UnknownConnectionTargetInput",
  UNKNOWN_NODE_INPUT: "UnknownNodeInput",
  UNKNOWN_NODE_OUTPUT: "UnknownNodeOutput",
  UNREACHABLE_NODE: "UnreachableNode",
  UNSATISFIED_CONNECTION_CONDITIONS: "UnsatisfiedConnectionConditions",
  UNSPECIFIED: "Unspecified",
} as const;
/**
 * @public
 */
export type FlowValidationType = (typeof FlowValidationType)[keyof typeof FlowValidationType];

/**
 * @public
 * @enum
 */
export const IngestionJobStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type IngestionJobStatus = (typeof IngestionJobStatus)[keyof typeof IngestionJobStatus];

/**
 * @public
 * @enum
 */
export const IngestionJobFilterAttribute = {
  STATUS: "STATUS",
} as const;
/**
 * @public
 */
export type IngestionJobFilterAttribute =
  (typeof IngestionJobFilterAttribute)[keyof typeof IngestionJobFilterAttribute];

/**
 * @public
 * @enum
 */
export const IngestionJobFilterOperator = {
  EQ: "EQ",
} as const;
/**
 * @public
 */
export type IngestionJobFilterOperator = (typeof IngestionJobFilterOperator)[keyof typeof IngestionJobFilterOperator];

/**
 * @public
 * @enum
 */
export const IngestionJobSortByAttribute = {
  STARTED_AT: "STARTED_AT",
  STATUS: "STATUS",
} as const;
/**
 * @public
 */
export type IngestionJobSortByAttribute =
  (typeof IngestionJobSortByAttribute)[keyof typeof IngestionJobSortByAttribute];

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
export const ContentDataSourceType = {
  CUSTOM: "CUSTOM",
  S3: "S3",
} as const;
/**
 * @public
 */
export type ContentDataSourceType = (typeof ContentDataSourceType)[keyof typeof ContentDataSourceType];

/**
 * @public
 * @enum
 */
export const DocumentStatus = {
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETING: "DELETING",
  FAILED: "FAILED",
  IGNORED: "IGNORED",
  INDEXED: "INDEXED",
  IN_PROGRESS: "IN_PROGRESS",
  METADATA_PARTIALLY_INDEXED: "METADATA_PARTIALLY_INDEXED",
  METADATA_UPDATE_FAILED: "METADATA_UPDATE_FAILED",
  NOT_FOUND: "NOT_FOUND",
  PARTIALLY_INDEXED: "PARTIALLY_INDEXED",
  PENDING: "PENDING",
  STARTING: "STARTING",
} as const;
/**
 * @public
 */
export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus];

/**
 * @public
 * @enum
 */
export const InlineContentType = {
  BYTE: "BYTE",
  TEXT: "TEXT",
} as const;
/**
 * @public
 */
export type InlineContentType = (typeof InlineContentType)[keyof typeof InlineContentType];

/**
 * @public
 * @enum
 */
export const CustomSourceType = {
  IN_LINE: "IN_LINE",
  S3_LOCATION: "S3_LOCATION",
} as const;
/**
 * @public
 */
export type CustomSourceType = (typeof CustomSourceType)[keyof typeof CustomSourceType];

/**
 * @public
 * @enum
 */
export const MetadataValueType = {
  BOOLEAN: "BOOLEAN",
  NUMBER: "NUMBER",
  STRING: "STRING",
  STRING_LIST: "STRING_LIST",
} as const;
/**
 * @public
 */
export type MetadataValueType = (typeof MetadataValueType)[keyof typeof MetadataValueType];

/**
 * @public
 * @enum
 */
export const MetadataSourceType = {
  IN_LINE_ATTRIBUTE: "IN_LINE_ATTRIBUTE",
  S3_LOCATION: "S3_LOCATION",
} as const;
/**
 * @public
 */
export type MetadataSourceType = (typeof MetadataSourceType)[keyof typeof MetadataSourceType];

/**
 * @public
 * @enum
 */
export const RedshiftProvisionedAuthType = {
  IAM: "IAM",
  USERNAME: "USERNAME",
  USERNAME_PASSWORD: "USERNAME_PASSWORD",
} as const;
/**
 * @public
 */
export type RedshiftProvisionedAuthType =
  (typeof RedshiftProvisionedAuthType)[keyof typeof RedshiftProvisionedAuthType];

/**
 * @public
 * @enum
 */
export const RedshiftServerlessAuthType = {
  IAM: "IAM",
  USERNAME_PASSWORD: "USERNAME_PASSWORD",
} as const;
/**
 * @public
 */
export type RedshiftServerlessAuthType = (typeof RedshiftServerlessAuthType)[keyof typeof RedshiftServerlessAuthType];

/**
 * @public
 * @enum
 */
export const RedshiftQueryEngineType = {
  PROVISIONED: "PROVISIONED",
  SERVERLESS: "SERVERLESS",
} as const;
/**
 * @public
 */
export type RedshiftQueryEngineType = (typeof RedshiftQueryEngineType)[keyof typeof RedshiftQueryEngineType];

/**
 * @public
 * @enum
 */
export const IncludeExclude = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type IncludeExclude = (typeof IncludeExclude)[keyof typeof IncludeExclude];

/**
 * @public
 * @enum
 */
export const RedshiftQueryEngineStorageType = {
  AWS_DATA_CATALOG: "AWS_DATA_CATALOG",
  REDSHIFT: "REDSHIFT",
} as const;
/**
 * @public
 */
export type RedshiftQueryEngineStorageType =
  (typeof RedshiftQueryEngineStorageType)[keyof typeof RedshiftQueryEngineStorageType];

/**
 * @public
 * @enum
 */
export const QueryEngineType = {
  REDSHIFT: "REDSHIFT",
} as const;
/**
 * @public
 */
export type QueryEngineType = (typeof QueryEngineType)[keyof typeof QueryEngineType];

/**
 * @public
 * @enum
 */
export const KnowledgeBaseType = {
  KENDRA: "KENDRA",
  SQL: "SQL",
  VECTOR: "VECTOR",
} as const;
/**
 * @public
 */
export type KnowledgeBaseType = (typeof KnowledgeBaseType)[keyof typeof KnowledgeBaseType];

/**
 * @public
 * @enum
 */
export const EmbeddingDataType = {
  BINARY: "BINARY",
  FLOAT32: "FLOAT32",
} as const;
/**
 * @public
 */
export type EmbeddingDataType = (typeof EmbeddingDataType)[keyof typeof EmbeddingDataType];

/**
 * @public
 * @enum
 */
export const SupplementalDataStorageLocationType = {
  S3: "S3",
} as const;
/**
 * @public
 */
export type SupplementalDataStorageLocationType =
  (typeof SupplementalDataStorageLocationType)[keyof typeof SupplementalDataStorageLocationType];

/**
 * @public
 * @enum
 */
export const KnowledgeBaseStorageType = {
  MONGO_DB_ATLAS: "MONGO_DB_ATLAS",
  NEPTUNE_ANALYTICS: "NEPTUNE_ANALYTICS",
  OPENSEARCH_MANAGED_CLUSTER: "OPENSEARCH_MANAGED_CLUSTER",
  OPENSEARCH_SERVERLESS: "OPENSEARCH_SERVERLESS",
  PINECONE: "PINECONE",
  RDS: "RDS",
  REDIS_ENTERPRISE_CLOUD: "REDIS_ENTERPRISE_CLOUD",
  S3_VECTORS: "S3_VECTORS",
} as const;
/**
 * @public
 */
export type KnowledgeBaseStorageType = (typeof KnowledgeBaseStorageType)[keyof typeof KnowledgeBaseStorageType];

/**
 * @public
 * @enum
 */
export const KnowledgeBaseStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETE_UNSUCCESSFUL: "DELETE_UNSUCCESSFUL",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type KnowledgeBaseStatus = (typeof KnowledgeBaseStatus)[keyof typeof KnowledgeBaseStatus];
