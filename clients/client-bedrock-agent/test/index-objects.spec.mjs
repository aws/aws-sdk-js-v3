import {
  AccessDeniedException,
  ActionGroupSignature,
  ActionGroupState,
  AgentAliasStatus,
  AgentCollaboration,
  AgentStatus,
  AliasInvocationState,
  AssociateAgentCollaboratorCommand,
  AssociateAgentKnowledgeBaseCommand,
  BedrockAgent,
  BedrockAgentClient,
  BedrockAgentServiceException,
  CachePointType,
  ChunkingStrategy,
  ConcurrencyType,
  ConflictException,
  ConfluenceAuthType,
  ConfluenceHostType,
  ContentDataSourceType,
  ContextEnrichmentType,
  ConversationRole,
  CrawlFilterConfigurationType,
  CreateAgentActionGroupCommand,
  CreateAgentAliasCommand,
  CreateAgentCommand,
  CreateDataSourceCommand,
  CreateFlowAliasCommand,
  CreateFlowCommand,
  CreateFlowVersionCommand,
  CreateKnowledgeBaseCommand,
  CreatePromptCommand,
  CreatePromptVersionCommand,
  CreationMode,
  CustomControlMethod,
  CustomSourceType,
  DataDeletionPolicy,
  DataSourceStatus,
  DataSourceType,
  DeleteAgentActionGroupCommand,
  DeleteAgentAliasCommand,
  DeleteAgentCommand,
  DeleteAgentVersionCommand,
  DeleteDataSourceCommand,
  DeleteFlowAliasCommand,
  DeleteFlowCommand,
  DeleteFlowVersionCommand,
  DeleteKnowledgeBaseCommand,
  DeleteKnowledgeBaseDocumentsCommand,
  DeletePromptCommand,
  DisassociateAgentCollaboratorCommand,
  DisassociateAgentKnowledgeBaseCommand,
  DocumentStatus,
  EmbeddingDataType,
  EnrichmentStrategyMethod,
  FlowConnectionType,
  FlowNodeIODataType,
  FlowNodeInputCategory,
  FlowNodeType,
  FlowStatus,
  FlowValidationSeverity,
  FlowValidationType,
  GetAgentActionGroupCommand,
  GetAgentAliasCommand,
  GetAgentCollaboratorCommand,
  GetAgentCommand,
  GetAgentKnowledgeBaseCommand,
  GetAgentVersionCommand,
  GetDataSourceCommand,
  GetFlowAliasCommand,
  GetFlowCommand,
  GetFlowVersionCommand,
  GetIngestionJobCommand,
  GetKnowledgeBaseCommand,
  GetKnowledgeBaseDocumentsCommand,
  GetPromptCommand,
  IncludeExclude,
  IncompatibleLoopNodeType,
  IngestKnowledgeBaseDocumentsCommand,
  IngestionJobFilterAttribute,
  IngestionJobFilterOperator,
  IngestionJobSortByAttribute,
  IngestionJobStatus,
  InlineContentType,
  InternalServerException,
  KnowledgeBaseState,
  KnowledgeBaseStatus,
  KnowledgeBaseStorageType,
  KnowledgeBaseType,
  ListAgentActionGroupsCommand,
  ListAgentAliasesCommand,
  ListAgentCollaboratorsCommand,
  ListAgentKnowledgeBasesCommand,
  ListAgentVersionsCommand,
  ListAgentsCommand,
  ListDataSourcesCommand,
  ListFlowAliasesCommand,
  ListFlowVersionsCommand,
  ListFlowsCommand,
  ListIngestionJobsCommand,
  ListKnowledgeBaseDocumentsCommand,
  ListKnowledgeBasesCommand,
  ListPromptsCommand,
  ListTagsForResourceCommand,
  MemoryType,
  MetadataSourceType,
  MetadataValueType,
  OrchestrationType,
  ParsingModality,
  ParsingStrategy,
  PerformanceConfigLatency,
  PrepareAgentCommand,
  PrepareFlowCommand,
  PromptState,
  PromptTemplateType,
  PromptType,
  QueryEngineType,
  RedshiftProvisionedAuthType,
  RedshiftQueryEngineStorageType,
  RedshiftQueryEngineType,
  RedshiftServerlessAuthType,
  RelayConversationHistory,
  RequireConfirmation,
  RerankingMetadataSelectionMode,
  ResourceNotFoundException,
  SalesforceAuthType,
  ServiceQuotaExceededException,
  SharePointAuthType,
  SharePointHostType,
  SortOrder,
  StartIngestionJobCommand,
  StepType,
  StopIngestionJobCommand,
  SupplementalDataStorageLocationType,
  SupportedLanguages,
  TagResourceCommand,
  ThrottlingException,
  Type,
  UntagResourceCommand,
  UpdateAgentActionGroupCommand,
  UpdateAgentAliasCommand,
  UpdateAgentCollaboratorCommand,
  UpdateAgentCommand,
  UpdateAgentKnowledgeBaseCommand,
  UpdateDataSourceCommand,
  UpdateFlowAliasCommand,
  UpdateFlowCommand,
  UpdateKnowledgeBaseCommand,
  UpdatePromptCommand,
  ValidateFlowDefinitionCommand,
  ValidationException,
  VectorSearchRerankingConfigurationType,
  WebScopeType,
  paginateListAgentActionGroups,
  paginateListAgentAliases,
  paginateListAgentCollaborators,
  paginateListAgentKnowledgeBases,
  paginateListAgentVersions,
  paginateListAgents,
  paginateListDataSources,
  paginateListFlowAliases,
  paginateListFlowVersions,
  paginateListFlows,
  paginateListIngestionJobs,
  paginateListKnowledgeBaseDocuments,
  paginateListKnowledgeBases,
  paginateListPrompts,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BedrockAgentClient === "function");
assert(typeof BedrockAgent === "function");
// commands
assert(typeof AssociateAgentCollaboratorCommand === "function");
assert(typeof AssociateAgentKnowledgeBaseCommand === "function");
assert(typeof CreateAgentCommand === "function");
assert(typeof CreateAgentActionGroupCommand === "function");
assert(typeof CreateAgentAliasCommand === "function");
assert(typeof CreateDataSourceCommand === "function");
assert(typeof CreateFlowCommand === "function");
assert(typeof CreateFlowAliasCommand === "function");
assert(typeof CreateFlowVersionCommand === "function");
assert(typeof CreateKnowledgeBaseCommand === "function");
assert(typeof CreatePromptCommand === "function");
assert(typeof CreatePromptVersionCommand === "function");
assert(typeof DeleteAgentCommand === "function");
assert(typeof DeleteAgentActionGroupCommand === "function");
assert(typeof DeleteAgentAliasCommand === "function");
assert(typeof DeleteAgentVersionCommand === "function");
assert(typeof DeleteDataSourceCommand === "function");
assert(typeof DeleteFlowCommand === "function");
assert(typeof DeleteFlowAliasCommand === "function");
assert(typeof DeleteFlowVersionCommand === "function");
assert(typeof DeleteKnowledgeBaseCommand === "function");
assert(typeof DeleteKnowledgeBaseDocumentsCommand === "function");
assert(typeof DeletePromptCommand === "function");
assert(typeof DisassociateAgentCollaboratorCommand === "function");
assert(typeof DisassociateAgentKnowledgeBaseCommand === "function");
assert(typeof GetAgentCommand === "function");
assert(typeof GetAgentActionGroupCommand === "function");
assert(typeof GetAgentAliasCommand === "function");
assert(typeof GetAgentCollaboratorCommand === "function");
assert(typeof GetAgentKnowledgeBaseCommand === "function");
assert(typeof GetAgentVersionCommand === "function");
assert(typeof GetDataSourceCommand === "function");
assert(typeof GetFlowCommand === "function");
assert(typeof GetFlowAliasCommand === "function");
assert(typeof GetFlowVersionCommand === "function");
assert(typeof GetIngestionJobCommand === "function");
assert(typeof GetKnowledgeBaseCommand === "function");
assert(typeof GetKnowledgeBaseDocumentsCommand === "function");
assert(typeof GetPromptCommand === "function");
assert(typeof IngestKnowledgeBaseDocumentsCommand === "function");
assert(typeof ListAgentActionGroupsCommand === "function");
assert(typeof ListAgentAliasesCommand === "function");
assert(typeof ListAgentCollaboratorsCommand === "function");
assert(typeof ListAgentKnowledgeBasesCommand === "function");
assert(typeof ListAgentsCommand === "function");
assert(typeof ListAgentVersionsCommand === "function");
assert(typeof ListDataSourcesCommand === "function");
assert(typeof ListFlowAliasesCommand === "function");
assert(typeof ListFlowsCommand === "function");
assert(typeof ListFlowVersionsCommand === "function");
assert(typeof ListIngestionJobsCommand === "function");
assert(typeof ListKnowledgeBaseDocumentsCommand === "function");
assert(typeof ListKnowledgeBasesCommand === "function");
assert(typeof ListPromptsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PrepareAgentCommand === "function");
assert(typeof PrepareFlowCommand === "function");
assert(typeof StartIngestionJobCommand === "function");
assert(typeof StopIngestionJobCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAgentCommand === "function");
assert(typeof UpdateAgentActionGroupCommand === "function");
assert(typeof UpdateAgentAliasCommand === "function");
assert(typeof UpdateAgentCollaboratorCommand === "function");
assert(typeof UpdateAgentKnowledgeBaseCommand === "function");
assert(typeof UpdateDataSourceCommand === "function");
assert(typeof UpdateFlowCommand === "function");
assert(typeof UpdateFlowAliasCommand === "function");
assert(typeof UpdateKnowledgeBaseCommand === "function");
assert(typeof UpdatePromptCommand === "function");
assert(typeof ValidateFlowDefinitionCommand === "function");
// enums
assert(typeof ActionGroupSignature === "object");
assert(typeof ActionGroupState === "object");
assert(typeof AgentAliasStatus === "object");
assert(typeof AgentCollaboration === "object");
assert(typeof AgentStatus === "object");
assert(typeof AliasInvocationState === "object");
assert(typeof CachePointType === "object");
assert(typeof ChunkingStrategy === "object");
assert(typeof ConcurrencyType === "object");
assert(typeof ConfluenceAuthType === "object");
assert(typeof ConfluenceHostType === "object");
assert(typeof ContentDataSourceType === "object");
assert(typeof ContextEnrichmentType === "object");
assert(typeof ConversationRole === "object");
assert(typeof CrawlFilterConfigurationType === "object");
assert(typeof CreationMode === "object");
assert(typeof CustomControlMethod === "object");
assert(typeof CustomSourceType === "object");
assert(typeof DataDeletionPolicy === "object");
assert(typeof DataSourceStatus === "object");
assert(typeof DataSourceType === "object");
assert(typeof DocumentStatus === "object");
assert(typeof EmbeddingDataType === "object");
assert(typeof EnrichmentStrategyMethod === "object");
assert(typeof FlowConnectionType === "object");
assert(typeof FlowNodeInputCategory === "object");
assert(typeof FlowNodeIODataType === "object");
assert(typeof FlowNodeType === "object");
assert(typeof FlowStatus === "object");
assert(typeof FlowValidationSeverity === "object");
assert(typeof FlowValidationType === "object");
assert(typeof IncludeExclude === "object");
assert(typeof IncompatibleLoopNodeType === "object");
assert(typeof IngestionJobFilterAttribute === "object");
assert(typeof IngestionJobFilterOperator === "object");
assert(typeof IngestionJobSortByAttribute === "object");
assert(typeof IngestionJobStatus === "object");
assert(typeof InlineContentType === "object");
assert(typeof KnowledgeBaseState === "object");
assert(typeof KnowledgeBaseStatus === "object");
assert(typeof KnowledgeBaseStorageType === "object");
assert(typeof KnowledgeBaseType === "object");
assert(typeof MemoryType === "object");
assert(typeof MetadataSourceType === "object");
assert(typeof MetadataValueType === "object");
assert(typeof OrchestrationType === "object");
assert(typeof ParsingModality === "object");
assert(typeof ParsingStrategy === "object");
assert(typeof PerformanceConfigLatency === "object");
assert(typeof PromptState === "object");
assert(typeof PromptTemplateType === "object");
assert(typeof PromptType === "object");
assert(typeof QueryEngineType === "object");
assert(typeof RedshiftProvisionedAuthType === "object");
assert(typeof RedshiftQueryEngineStorageType === "object");
assert(typeof RedshiftQueryEngineType === "object");
assert(typeof RedshiftServerlessAuthType === "object");
assert(typeof RelayConversationHistory === "object");
assert(typeof RequireConfirmation === "object");
assert(typeof RerankingMetadataSelectionMode === "object");
assert(typeof SalesforceAuthType === "object");
assert(typeof SharePointAuthType === "object");
assert(typeof SharePointHostType === "object");
assert(typeof SortOrder === "object");
assert(typeof StepType === "object");
assert(typeof SupplementalDataStorageLocationType === "object");
assert(typeof SupportedLanguages === "object");
assert(typeof Type === "object");
assert(typeof VectorSearchRerankingConfigurationType === "object");
assert(typeof WebScopeType === "object");
// errors
assert(AccessDeniedException.prototype instanceof BedrockAgentServiceException);
assert(ConflictException.prototype instanceof BedrockAgentServiceException);
assert(InternalServerException.prototype instanceof BedrockAgentServiceException);
assert(ResourceNotFoundException.prototype instanceof BedrockAgentServiceException);
assert(ServiceQuotaExceededException.prototype instanceof BedrockAgentServiceException);
assert(ThrottlingException.prototype instanceof BedrockAgentServiceException);
assert(ValidationException.prototype instanceof BedrockAgentServiceException);
assert(BedrockAgentServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAgentActionGroups === "function");
assert(typeof paginateListAgentAliases === "function");
assert(typeof paginateListAgentCollaborators === "function");
assert(typeof paginateListAgentKnowledgeBases === "function");
assert(typeof paginateListAgentVersions === "function");
assert(typeof paginateListAgents === "function");
assert(typeof paginateListDataSources === "function");
assert(typeof paginateListFlowAliases === "function");
assert(typeof paginateListFlowVersions === "function");
assert(typeof paginateListFlows === "function");
assert(typeof paginateListIngestionJobs === "function");
assert(typeof paginateListKnowledgeBaseDocuments === "function");
assert(typeof paginateListKnowledgeBases === "function");
assert(typeof paginateListPrompts === "function");
console.log(`BedrockAgent index test passed.`);
