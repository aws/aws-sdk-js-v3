import {
  APISchema$,
  AccessDeniedException,
  AccessDeniedException$,
  ActionGroupExecutor$,
  ActionGroupSignature,
  ActionGroupState,
  ActionGroupSummary$,
  Agent$,
  AgentActionGroup$,
  AgentAlias$,
  AgentAliasHistoryEvent$,
  AgentAliasRoutingConfigurationListItem$,
  AgentAliasStatus,
  AgentAliasSummary$,
  AgentCollaboration,
  AgentCollaborator$,
  AgentCollaboratorSummary$,
  AgentDescriptor$,
  AgentFlowNodeConfiguration$,
  AgentKnowledgeBase$,
  AgentKnowledgeBaseSummary$,
  AgentStatus,
  AgentSummary$,
  AgentVersion$,
  AgentVersionSummary$,
  AliasInvocationState,
  AnyToolChoice$,
  AssociateAgentCollaborator$,
  AssociateAgentCollaboratorCommand,
  AssociateAgentCollaboratorRequest$,
  AssociateAgentCollaboratorResponse$,
  AssociateAgentKnowledgeBase$,
  AssociateAgentKnowledgeBaseCommand,
  AssociateAgentKnowledgeBaseRequest$,
  AssociateAgentKnowledgeBaseResponse$,
  AudioConfiguration$,
  AudioSegmentationConfiguration$,
  AutoToolChoice$,
  BedrockAgent,
  BedrockAgentClient,
  BedrockAgentServiceException,
  BedrockDataAutomationConfiguration$,
  BedrockEmbeddingModelConfiguration$,
  BedrockFoundationModelConfiguration$,
  BedrockFoundationModelContextEnrichmentConfiguration$,
  ByteContentDoc$,
  CachePointBlock$,
  CachePointType,
  ChatPromptTemplateConfiguration$,
  ChunkingConfiguration$,
  ChunkingStrategy,
  CollectorFlowNodeConfiguration$,
  ConcurrencyType,
  ConditionFlowNodeConfiguration$,
  ConflictException,
  ConflictException$,
  ConfluenceAuthType,
  ConfluenceCrawlerConfiguration$,
  ConfluenceDataSourceConfiguration$,
  ConfluenceHostType,
  ConfluenceSourceConfiguration$,
  ContentBlock$,
  ContentDataSourceType,
  ContextEnrichmentConfiguration$,
  ContextEnrichmentType,
  ConversationRole,
  CrawlFilterConfiguration$,
  CrawlFilterConfigurationType,
  CreateAgent$,
  CreateAgentActionGroup$,
  CreateAgentActionGroupCommand,
  CreateAgentActionGroupRequest$,
  CreateAgentActionGroupResponse$,
  CreateAgentAlias$,
  CreateAgentAliasCommand,
  CreateAgentAliasRequest$,
  CreateAgentAliasResponse$,
  CreateAgentCommand,
  CreateAgentRequest$,
  CreateAgentResponse$,
  CreateDataSource$,
  CreateDataSourceCommand,
  CreateDataSourceRequest$,
  CreateDataSourceResponse$,
  CreateFlow$,
  CreateFlowAlias$,
  CreateFlowAliasCommand,
  CreateFlowAliasRequest$,
  CreateFlowAliasResponse$,
  CreateFlowCommand,
  CreateFlowRequest$,
  CreateFlowResponse$,
  CreateFlowVersion$,
  CreateFlowVersionCommand,
  CreateFlowVersionRequest$,
  CreateFlowVersionResponse$,
  CreateKnowledgeBase$,
  CreateKnowledgeBaseCommand,
  CreateKnowledgeBaseRequest$,
  CreateKnowledgeBaseResponse$,
  CreatePrompt$,
  CreatePromptCommand,
  CreatePromptRequest$,
  CreatePromptResponse$,
  CreatePromptVersion$,
  CreatePromptVersionCommand,
  CreatePromptVersionRequest$,
  CreatePromptVersionResponse$,
  CreationMode,
  CuratedQuery$,
  CustomContent$,
  CustomControlMethod,
  CustomDocumentIdentifier$,
  CustomOrchestration$,
  CustomS3Location$,
  CustomSourceType,
  CustomTransformationConfiguration$,
  CyclicConnectionFlowValidationDetails$,
  DataDeletionPolicy,
  DataSource$,
  DataSourceConfiguration$,
  DataSourceStatus,
  DataSourceSummary$,
  DataSourceType,
  DeleteAgent$,
  DeleteAgentActionGroup$,
  DeleteAgentActionGroupCommand,
  DeleteAgentActionGroupRequest$,
  DeleteAgentActionGroupResponse$,
  DeleteAgentAlias$,
  DeleteAgentAliasCommand,
  DeleteAgentAliasRequest$,
  DeleteAgentAliasResponse$,
  DeleteAgentCommand,
  DeleteAgentRequest$,
  DeleteAgentResponse$,
  DeleteAgentVersion$,
  DeleteAgentVersionCommand,
  DeleteAgentVersionRequest$,
  DeleteAgentVersionResponse$,
  DeleteDataSource$,
  DeleteDataSourceCommand,
  DeleteDataSourceRequest$,
  DeleteDataSourceResponse$,
  DeleteFlow$,
  DeleteFlowAlias$,
  DeleteFlowAliasCommand,
  DeleteFlowAliasRequest$,
  DeleteFlowAliasResponse$,
  DeleteFlowCommand,
  DeleteFlowRequest$,
  DeleteFlowResponse$,
  DeleteFlowVersion$,
  DeleteFlowVersionCommand,
  DeleteFlowVersionRequest$,
  DeleteFlowVersionResponse$,
  DeleteKnowledgeBase$,
  DeleteKnowledgeBaseCommand,
  DeleteKnowledgeBaseDocuments$,
  DeleteKnowledgeBaseDocumentsCommand,
  DeleteKnowledgeBaseDocumentsRequest$,
  DeleteKnowledgeBaseDocumentsResponse$,
  DeleteKnowledgeBaseRequest$,
  DeleteKnowledgeBaseResponse$,
  DeletePrompt$,
  DeletePromptCommand,
  DeletePromptRequest$,
  DeletePromptResponse$,
  DisassociateAgentCollaborator$,
  DisassociateAgentCollaboratorCommand,
  DisassociateAgentCollaboratorRequest$,
  DisassociateAgentCollaboratorResponse$,
  DisassociateAgentKnowledgeBase$,
  DisassociateAgentKnowledgeBaseCommand,
  DisassociateAgentKnowledgeBaseRequest$,
  DisassociateAgentKnowledgeBaseResponse$,
  DocumentContent$,
  DocumentIdentifier$,
  DocumentMetadata$,
  DocumentStatus,
  DuplicateConditionExpressionFlowValidationDetails$,
  DuplicateConnectionsFlowValidationDetails$,
  EmbeddingDataType,
  EmbeddingModelConfiguration$,
  EnrichmentStrategyConfiguration$,
  EnrichmentStrategyMethod,
  FieldForReranking$,
  FixedSizeChunkingConfiguration$,
  FlowAliasConcurrencyConfiguration$,
  FlowAliasRoutingConfigurationListItem$,
  FlowAliasSummary$,
  FlowCondition$,
  FlowConditionalConnectionConfiguration$,
  FlowConnection$,
  FlowConnectionConfiguration$,
  FlowConnectionType,
  FlowDataConnectionConfiguration$,
  FlowDefinition$,
  FlowNode$,
  FlowNodeConfiguration$,
  FlowNodeIODataType,
  FlowNodeInput$,
  FlowNodeInputCategory,
  FlowNodeOutput$,
  FlowNodeType,
  FlowStatus,
  FlowSummary$,
  FlowValidation$,
  FlowValidationDetails$,
  FlowValidationSeverity,
  FlowValidationType,
  FlowVersionSummary$,
  Function$,
  FunctionSchema$,
  GetAgent$,
  GetAgentActionGroup$,
  GetAgentActionGroupCommand,
  GetAgentActionGroupRequest$,
  GetAgentActionGroupResponse$,
  GetAgentAlias$,
  GetAgentAliasCommand,
  GetAgentAliasRequest$,
  GetAgentAliasResponse$,
  GetAgentCollaborator$,
  GetAgentCollaboratorCommand,
  GetAgentCollaboratorRequest$,
  GetAgentCollaboratorResponse$,
  GetAgentCommand,
  GetAgentKnowledgeBase$,
  GetAgentKnowledgeBaseCommand,
  GetAgentKnowledgeBaseRequest$,
  GetAgentKnowledgeBaseResponse$,
  GetAgentRequest$,
  GetAgentResponse$,
  GetAgentVersion$,
  GetAgentVersionCommand,
  GetAgentVersionRequest$,
  GetAgentVersionResponse$,
  GetDataSource$,
  GetDataSourceCommand,
  GetDataSourceRequest$,
  GetDataSourceResponse$,
  GetFlow$,
  GetFlowAlias$,
  GetFlowAliasCommand,
  GetFlowAliasRequest$,
  GetFlowAliasResponse$,
  GetFlowCommand,
  GetFlowRequest$,
  GetFlowResponse$,
  GetFlowVersion$,
  GetFlowVersionCommand,
  GetFlowVersionRequest$,
  GetFlowVersionResponse$,
  GetIngestionJob$,
  GetIngestionJobCommand,
  GetIngestionJobRequest$,
  GetIngestionJobResponse$,
  GetKnowledgeBase$,
  GetKnowledgeBaseCommand,
  GetKnowledgeBaseDocuments$,
  GetKnowledgeBaseDocumentsCommand,
  GetKnowledgeBaseDocumentsRequest$,
  GetKnowledgeBaseDocumentsResponse$,
  GetKnowledgeBaseRequest$,
  GetKnowledgeBaseResponse$,
  GetPrompt$,
  GetPromptCommand,
  GetPromptRequest$,
  GetPromptResponse$,
  GuardrailConfiguration$,
  HierarchicalChunkingConfiguration$,
  HierarchicalChunkingLevelConfiguration$,
  IncludeExclude,
  IncompatibleConnectionDataTypeFlowValidationDetails$,
  IncompatibleLoopNodeType,
  InferenceConfiguration$,
  IngestKnowledgeBaseDocuments$,
  IngestKnowledgeBaseDocumentsCommand,
  IngestKnowledgeBaseDocumentsRequest$,
  IngestKnowledgeBaseDocumentsResponse$,
  IngestionJob$,
  IngestionJobFilter$,
  IngestionJobFilterAttribute,
  IngestionJobFilterOperator,
  IngestionJobSortBy$,
  IngestionJobSortByAttribute,
  IngestionJobStatistics$,
  IngestionJobStatus,
  IngestionJobSummary$,
  InlineCodeFlowNodeConfiguration$,
  InlineContent$,
  InlineContentType,
  InputFlowNodeConfiguration$,
  IntermediateStorage$,
  InternalServerException,
  InternalServerException$,
  InvalidLoopBoundaryFlowValidationDetails$,
  IteratorFlowNodeConfiguration$,
  KendraKnowledgeBaseConfiguration$,
  KnowledgeBase$,
  KnowledgeBaseConfiguration$,
  KnowledgeBaseDocument$,
  KnowledgeBaseDocumentDetail$,
  KnowledgeBaseFlowNodeConfiguration$,
  KnowledgeBaseOrchestrationConfiguration$,
  KnowledgeBasePromptTemplate$,
  KnowledgeBaseState,
  KnowledgeBaseStatus,
  KnowledgeBaseStorageType,
  KnowledgeBaseSummary$,
  KnowledgeBaseType,
  LambdaFunctionFlowNodeConfiguration$,
  LexFlowNodeConfiguration$,
  ListAgentActionGroups$,
  ListAgentActionGroupsCommand,
  ListAgentActionGroupsRequest$,
  ListAgentActionGroupsResponse$,
  ListAgentAliases$,
  ListAgentAliasesCommand,
  ListAgentAliasesRequest$,
  ListAgentAliasesResponse$,
  ListAgentCollaborators$,
  ListAgentCollaboratorsCommand,
  ListAgentCollaboratorsRequest$,
  ListAgentCollaboratorsResponse$,
  ListAgentKnowledgeBases$,
  ListAgentKnowledgeBasesCommand,
  ListAgentKnowledgeBasesRequest$,
  ListAgentKnowledgeBasesResponse$,
  ListAgentVersions$,
  ListAgentVersionsCommand,
  ListAgentVersionsRequest$,
  ListAgentVersionsResponse$,
  ListAgents$,
  ListAgentsCommand,
  ListAgentsRequest$,
  ListAgentsResponse$,
  ListDataSources$,
  ListDataSourcesCommand,
  ListDataSourcesRequest$,
  ListDataSourcesResponse$,
  ListFlowAliases$,
  ListFlowAliasesCommand,
  ListFlowAliasesRequest$,
  ListFlowAliasesResponse$,
  ListFlowVersions$,
  ListFlowVersionsCommand,
  ListFlowVersionsRequest$,
  ListFlowVersionsResponse$,
  ListFlows$,
  ListFlowsCommand,
  ListFlowsRequest$,
  ListFlowsResponse$,
  ListIngestionJobs$,
  ListIngestionJobsCommand,
  ListIngestionJobsRequest$,
  ListIngestionJobsResponse$,
  ListKnowledgeBaseDocuments$,
  ListKnowledgeBaseDocumentsCommand,
  ListKnowledgeBaseDocumentsRequest$,
  ListKnowledgeBaseDocumentsResponse$,
  ListKnowledgeBases$,
  ListKnowledgeBasesCommand,
  ListKnowledgeBasesRequest$,
  ListKnowledgeBasesResponse$,
  ListPrompts$,
  ListPromptsCommand,
  ListPromptsRequest$,
  ListPromptsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LoopControllerFlowNodeConfiguration$,
  LoopFlowNodeConfiguration$,
  LoopIncompatibleNodeTypeFlowValidationDetails$,
  LoopInputFlowNodeConfiguration$,
  MalformedConditionExpressionFlowValidationDetails$,
  MalformedNodeInputExpressionFlowValidationDetails$,
  MemoryConfiguration$,
  MemoryType,
  Message$,
  MetadataAttribute$,
  MetadataAttributeValue$,
  MetadataConfigurationForReranking$,
  MetadataSourceType,
  MetadataValueType,
  MismatchedNodeInputTypeFlowValidationDetails$,
  MismatchedNodeOutputTypeFlowValidationDetails$,
  MissingConnectionConfigurationFlowValidationDetails$,
  MissingDefaultConditionFlowValidationDetails$,
  MissingEndingNodesFlowValidationDetails$,
  MissingLoopControllerNodeFlowValidationDetails$,
  MissingLoopInputNodeFlowValidationDetails$,
  MissingNodeConfigurationFlowValidationDetails$,
  MissingNodeInputFlowValidationDetails$,
  MissingNodeOutputFlowValidationDetails$,
  MissingStartingNodesFlowValidationDetails$,
  MongoDbAtlasConfiguration$,
  MongoDbAtlasFieldMapping$,
  MultipleLoopControllerNodesFlowValidationDetails$,
  MultipleLoopInputNodesFlowValidationDetails$,
  MultipleNodeInputConnectionsFlowValidationDetails$,
  NeptuneAnalyticsConfiguration$,
  NeptuneAnalyticsFieldMapping$,
  OpenSearchManagedClusterConfiguration$,
  OpenSearchManagedClusterFieldMapping$,
  OpenSearchServerlessConfiguration$,
  OpenSearchServerlessFieldMapping$,
  OrchestrationExecutor$,
  OrchestrationType,
  OutputFlowNodeConfiguration$,
  ParameterDetail$,
  ParsingConfiguration$,
  ParsingModality,
  ParsingPrompt$,
  ParsingStrategy,
  PatternObjectFilter$,
  PatternObjectFilterConfiguration$,
  PerformanceConfigLatency,
  PerformanceConfiguration$,
  PineconeConfiguration$,
  PineconeFieldMapping$,
  PrepareAgent$,
  PrepareAgentCommand,
  PrepareAgentRequest$,
  PrepareAgentResponse$,
  PrepareFlow$,
  PrepareFlowCommand,
  PrepareFlowRequest$,
  PrepareFlowResponse$,
  PromptAgentResource$,
  PromptConfiguration$,
  PromptFlowNodeConfiguration$,
  PromptFlowNodeInlineConfiguration$,
  PromptFlowNodeResourceConfiguration$,
  PromptFlowNodeSourceConfiguration$,
  PromptGenAiResource$,
  PromptInferenceConfiguration$,
  PromptInputVariable$,
  PromptMetadataEntry$,
  PromptModelInferenceConfiguration$,
  PromptOverrideConfiguration$,
  PromptState,
  PromptSummary$,
  PromptTemplateConfiguration$,
  PromptTemplateType,
  PromptType,
  PromptVariant$,
  QueryEngineType,
  QueryGenerationColumn$,
  QueryGenerationConfiguration$,
  QueryGenerationContext$,
  QueryGenerationTable$,
  RdsConfiguration$,
  RdsFieldMapping$,
  RedisEnterpriseCloudConfiguration$,
  RedisEnterpriseCloudFieldMapping$,
  RedshiftConfiguration$,
  RedshiftProvisionedAuthConfiguration$,
  RedshiftProvisionedAuthType,
  RedshiftProvisionedConfiguration$,
  RedshiftQueryEngineAwsDataCatalogStorageConfiguration$,
  RedshiftQueryEngineConfiguration$,
  RedshiftQueryEngineRedshiftStorageConfiguration$,
  RedshiftQueryEngineStorageConfiguration$,
  RedshiftQueryEngineStorageType,
  RedshiftQueryEngineType,
  RedshiftServerlessAuthConfiguration$,
  RedshiftServerlessAuthType,
  RedshiftServerlessConfiguration$,
  RelayConversationHistory,
  RequireConfirmation,
  RerankingMetadataSelectionMode,
  RerankingMetadataSelectiveModeConfiguration$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RetrievalFlowNodeConfiguration$,
  RetrievalFlowNodeS3Configuration$,
  RetrievalFlowNodeServiceConfiguration$,
  S3Content$,
  S3DataSourceConfiguration$,
  S3Identifier$,
  S3Location$,
  S3VectorsConfiguration$,
  SalesforceAuthType,
  SalesforceCrawlerConfiguration$,
  SalesforceDataSourceConfiguration$,
  SalesforceSourceConfiguration$,
  SeedUrl$,
  SemanticChunkingConfiguration$,
  ServerSideEncryptionConfiguration$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SessionSummaryConfiguration$,
  SharePointAuthType,
  SharePointCrawlerConfiguration$,
  SharePointDataSourceConfiguration$,
  SharePointHostType,
  SharePointSourceConfiguration$,
  SortOrder,
  SpecificToolChoice$,
  SqlKnowledgeBaseConfiguration$,
  StartIngestionJob$,
  StartIngestionJobCommand,
  StartIngestionJobRequest$,
  StartIngestionJobResponse$,
  StepType,
  StopIngestionJob$,
  StopIngestionJobCommand,
  StopIngestionJobRequest$,
  StopIngestionJobResponse$,
  StorageConfiguration$,
  StorageFlowNodeConfiguration$,
  StorageFlowNodeS3Configuration$,
  StorageFlowNodeServiceConfiguration$,
  SupplementalDataStorageConfiguration$,
  SupplementalDataStorageLocation$,
  SupplementalDataStorageLocationType,
  SupportedLanguages,
  SystemContentBlock$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TextContentDoc$,
  TextPromptTemplateConfiguration$,
  ThrottlingException,
  ThrottlingException$,
  Tool$,
  ToolChoice$,
  ToolConfiguration$,
  ToolInputSchema$,
  ToolSpecification$,
  Transformation$,
  TransformationFunction$,
  TransformationLambdaConfiguration$,
  Type,
  UnfulfilledNodeInputFlowValidationDetails$,
  UnknownConnectionConditionFlowValidationDetails$,
  UnknownConnectionSourceFlowValidationDetails$,
  UnknownConnectionSourceOutputFlowValidationDetails$,
  UnknownConnectionTargetFlowValidationDetails$,
  UnknownConnectionTargetInputFlowValidationDetails$,
  UnknownNodeInputFlowValidationDetails$,
  UnknownNodeOutputFlowValidationDetails$,
  UnreachableNodeFlowValidationDetails$,
  UnsatisfiedConnectionConditionsFlowValidationDetails$,
  UnspecifiedFlowValidationDetails$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAgent$,
  UpdateAgentActionGroup$,
  UpdateAgentActionGroupCommand,
  UpdateAgentActionGroupRequest$,
  UpdateAgentActionGroupResponse$,
  UpdateAgentAlias$,
  UpdateAgentAliasCommand,
  UpdateAgentAliasRequest$,
  UpdateAgentAliasResponse$,
  UpdateAgentCollaborator$,
  UpdateAgentCollaboratorCommand,
  UpdateAgentCollaboratorRequest$,
  UpdateAgentCollaboratorResponse$,
  UpdateAgentCommand,
  UpdateAgentKnowledgeBase$,
  UpdateAgentKnowledgeBaseCommand,
  UpdateAgentKnowledgeBaseRequest$,
  UpdateAgentKnowledgeBaseResponse$,
  UpdateAgentRequest$,
  UpdateAgentResponse$,
  UpdateDataSource$,
  UpdateDataSourceCommand,
  UpdateDataSourceRequest$,
  UpdateDataSourceResponse$,
  UpdateFlow$,
  UpdateFlowAlias$,
  UpdateFlowAliasCommand,
  UpdateFlowAliasRequest$,
  UpdateFlowAliasResponse$,
  UpdateFlowCommand,
  UpdateFlowRequest$,
  UpdateFlowResponse$,
  UpdateKnowledgeBase$,
  UpdateKnowledgeBaseCommand,
  UpdateKnowledgeBaseRequest$,
  UpdateKnowledgeBaseResponse$,
  UpdatePrompt$,
  UpdatePromptCommand,
  UpdatePromptRequest$,
  UpdatePromptResponse$,
  UrlConfiguration$,
  ValidateFlowDefinition$,
  ValidateFlowDefinitionCommand,
  ValidateFlowDefinitionRequest$,
  ValidateFlowDefinitionResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  VectorIngestionConfiguration$,
  VectorKnowledgeBaseConfiguration$,
  VectorSearchBedrockRerankingConfiguration$,
  VectorSearchBedrockRerankingModelConfiguration$,
  VectorSearchRerankingConfiguration$,
  VectorSearchRerankingConfigurationType,
  VideoConfiguration$,
  VideoSegmentationConfiguration$,
  WebCrawlerConfiguration$,
  WebCrawlerLimits$,
  WebDataSourceConfiguration$,
  WebScopeType,
  WebSourceConfiguration$,
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
assert(typeof AssociateAgentCollaborator$ === "object");
assert(typeof AssociateAgentKnowledgeBaseCommand === "function");
assert(typeof AssociateAgentKnowledgeBase$ === "object");
assert(typeof CreateAgentCommand === "function");
assert(typeof CreateAgent$ === "object");
assert(typeof CreateAgentActionGroupCommand === "function");
assert(typeof CreateAgentActionGroup$ === "object");
assert(typeof CreateAgentAliasCommand === "function");
assert(typeof CreateAgentAlias$ === "object");
assert(typeof CreateDataSourceCommand === "function");
assert(typeof CreateDataSource$ === "object");
assert(typeof CreateFlowCommand === "function");
assert(typeof CreateFlow$ === "object");
assert(typeof CreateFlowAliasCommand === "function");
assert(typeof CreateFlowAlias$ === "object");
assert(typeof CreateFlowVersionCommand === "function");
assert(typeof CreateFlowVersion$ === "object");
assert(typeof CreateKnowledgeBaseCommand === "function");
assert(typeof CreateKnowledgeBase$ === "object");
assert(typeof CreatePromptCommand === "function");
assert(typeof CreatePrompt$ === "object");
assert(typeof CreatePromptVersionCommand === "function");
assert(typeof CreatePromptVersion$ === "object");
assert(typeof DeleteAgentCommand === "function");
assert(typeof DeleteAgent$ === "object");
assert(typeof DeleteAgentActionGroupCommand === "function");
assert(typeof DeleteAgentActionGroup$ === "object");
assert(typeof DeleteAgentAliasCommand === "function");
assert(typeof DeleteAgentAlias$ === "object");
assert(typeof DeleteAgentVersionCommand === "function");
assert(typeof DeleteAgentVersion$ === "object");
assert(typeof DeleteDataSourceCommand === "function");
assert(typeof DeleteDataSource$ === "object");
assert(typeof DeleteFlowCommand === "function");
assert(typeof DeleteFlow$ === "object");
assert(typeof DeleteFlowAliasCommand === "function");
assert(typeof DeleteFlowAlias$ === "object");
assert(typeof DeleteFlowVersionCommand === "function");
assert(typeof DeleteFlowVersion$ === "object");
assert(typeof DeleteKnowledgeBaseCommand === "function");
assert(typeof DeleteKnowledgeBase$ === "object");
assert(typeof DeleteKnowledgeBaseDocumentsCommand === "function");
assert(typeof DeleteKnowledgeBaseDocuments$ === "object");
assert(typeof DeletePromptCommand === "function");
assert(typeof DeletePrompt$ === "object");
assert(typeof DisassociateAgentCollaboratorCommand === "function");
assert(typeof DisassociateAgentCollaborator$ === "object");
assert(typeof DisassociateAgentKnowledgeBaseCommand === "function");
assert(typeof DisassociateAgentKnowledgeBase$ === "object");
assert(typeof GetAgentCommand === "function");
assert(typeof GetAgent$ === "object");
assert(typeof GetAgentActionGroupCommand === "function");
assert(typeof GetAgentActionGroup$ === "object");
assert(typeof GetAgentAliasCommand === "function");
assert(typeof GetAgentAlias$ === "object");
assert(typeof GetAgentCollaboratorCommand === "function");
assert(typeof GetAgentCollaborator$ === "object");
assert(typeof GetAgentKnowledgeBaseCommand === "function");
assert(typeof GetAgentKnowledgeBase$ === "object");
assert(typeof GetAgentVersionCommand === "function");
assert(typeof GetAgentVersion$ === "object");
assert(typeof GetDataSourceCommand === "function");
assert(typeof GetDataSource$ === "object");
assert(typeof GetFlowCommand === "function");
assert(typeof GetFlow$ === "object");
assert(typeof GetFlowAliasCommand === "function");
assert(typeof GetFlowAlias$ === "object");
assert(typeof GetFlowVersionCommand === "function");
assert(typeof GetFlowVersion$ === "object");
assert(typeof GetIngestionJobCommand === "function");
assert(typeof GetIngestionJob$ === "object");
assert(typeof GetKnowledgeBaseCommand === "function");
assert(typeof GetKnowledgeBase$ === "object");
assert(typeof GetKnowledgeBaseDocumentsCommand === "function");
assert(typeof GetKnowledgeBaseDocuments$ === "object");
assert(typeof GetPromptCommand === "function");
assert(typeof GetPrompt$ === "object");
assert(typeof IngestKnowledgeBaseDocumentsCommand === "function");
assert(typeof IngestKnowledgeBaseDocuments$ === "object");
assert(typeof ListAgentActionGroupsCommand === "function");
assert(typeof ListAgentActionGroups$ === "object");
assert(typeof ListAgentAliasesCommand === "function");
assert(typeof ListAgentAliases$ === "object");
assert(typeof ListAgentCollaboratorsCommand === "function");
assert(typeof ListAgentCollaborators$ === "object");
assert(typeof ListAgentKnowledgeBasesCommand === "function");
assert(typeof ListAgentKnowledgeBases$ === "object");
assert(typeof ListAgentsCommand === "function");
assert(typeof ListAgents$ === "object");
assert(typeof ListAgentVersionsCommand === "function");
assert(typeof ListAgentVersions$ === "object");
assert(typeof ListDataSourcesCommand === "function");
assert(typeof ListDataSources$ === "object");
assert(typeof ListFlowAliasesCommand === "function");
assert(typeof ListFlowAliases$ === "object");
assert(typeof ListFlowsCommand === "function");
assert(typeof ListFlows$ === "object");
assert(typeof ListFlowVersionsCommand === "function");
assert(typeof ListFlowVersions$ === "object");
assert(typeof ListIngestionJobsCommand === "function");
assert(typeof ListIngestionJobs$ === "object");
assert(typeof ListKnowledgeBaseDocumentsCommand === "function");
assert(typeof ListKnowledgeBaseDocuments$ === "object");
assert(typeof ListKnowledgeBasesCommand === "function");
assert(typeof ListKnowledgeBases$ === "object");
assert(typeof ListPromptsCommand === "function");
assert(typeof ListPrompts$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PrepareAgentCommand === "function");
assert(typeof PrepareAgent$ === "object");
assert(typeof PrepareFlowCommand === "function");
assert(typeof PrepareFlow$ === "object");
assert(typeof StartIngestionJobCommand === "function");
assert(typeof StartIngestionJob$ === "object");
assert(typeof StopIngestionJobCommand === "function");
assert(typeof StopIngestionJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAgentCommand === "function");
assert(typeof UpdateAgent$ === "object");
assert(typeof UpdateAgentActionGroupCommand === "function");
assert(typeof UpdateAgentActionGroup$ === "object");
assert(typeof UpdateAgentAliasCommand === "function");
assert(typeof UpdateAgentAlias$ === "object");
assert(typeof UpdateAgentCollaboratorCommand === "function");
assert(typeof UpdateAgentCollaborator$ === "object");
assert(typeof UpdateAgentKnowledgeBaseCommand === "function");
assert(typeof UpdateAgentKnowledgeBase$ === "object");
assert(typeof UpdateDataSourceCommand === "function");
assert(typeof UpdateDataSource$ === "object");
assert(typeof UpdateFlowCommand === "function");
assert(typeof UpdateFlow$ === "object");
assert(typeof UpdateFlowAliasCommand === "function");
assert(typeof UpdateFlowAlias$ === "object");
assert(typeof UpdateKnowledgeBaseCommand === "function");
assert(typeof UpdateKnowledgeBase$ === "object");
assert(typeof UpdatePromptCommand === "function");
assert(typeof UpdatePrompt$ === "object");
assert(typeof ValidateFlowDefinitionCommand === "function");
assert(typeof ValidateFlowDefinition$ === "object");
// structural schemas
assert(typeof ActionGroupExecutor$ === "object");
assert(typeof ActionGroupSummary$ === "object");
assert(typeof Agent$ === "object");
assert(typeof AgentActionGroup$ === "object");
assert(typeof AgentAlias$ === "object");
assert(typeof AgentAliasHistoryEvent$ === "object");
assert(typeof AgentAliasRoutingConfigurationListItem$ === "object");
assert(typeof AgentAliasSummary$ === "object");
assert(typeof AgentCollaborator$ === "object");
assert(typeof AgentCollaboratorSummary$ === "object");
assert(typeof AgentDescriptor$ === "object");
assert(typeof AgentFlowNodeConfiguration$ === "object");
assert(typeof AgentKnowledgeBase$ === "object");
assert(typeof AgentKnowledgeBaseSummary$ === "object");
assert(typeof AgentSummary$ === "object");
assert(typeof AgentVersion$ === "object");
assert(typeof AgentVersionSummary$ === "object");
assert(typeof AnyToolChoice$ === "object");
assert(typeof APISchema$ === "object");
assert(typeof AssociateAgentCollaboratorRequest$ === "object");
assert(typeof AssociateAgentCollaboratorResponse$ === "object");
assert(typeof AssociateAgentKnowledgeBaseRequest$ === "object");
assert(typeof AssociateAgentKnowledgeBaseResponse$ === "object");
assert(typeof AudioConfiguration$ === "object");
assert(typeof AudioSegmentationConfiguration$ === "object");
assert(typeof AutoToolChoice$ === "object");
assert(typeof BedrockDataAutomationConfiguration$ === "object");
assert(typeof BedrockEmbeddingModelConfiguration$ === "object");
assert(typeof BedrockFoundationModelConfiguration$ === "object");
assert(typeof BedrockFoundationModelContextEnrichmentConfiguration$ === "object");
assert(typeof ByteContentDoc$ === "object");
assert(typeof CachePointBlock$ === "object");
assert(typeof ChatPromptTemplateConfiguration$ === "object");
assert(typeof ChunkingConfiguration$ === "object");
assert(typeof CollectorFlowNodeConfiguration$ === "object");
assert(typeof ConditionFlowNodeConfiguration$ === "object");
assert(typeof ConfluenceCrawlerConfiguration$ === "object");
assert(typeof ConfluenceDataSourceConfiguration$ === "object");
assert(typeof ConfluenceSourceConfiguration$ === "object");
assert(typeof ContentBlock$ === "object");
assert(typeof ContextEnrichmentConfiguration$ === "object");
assert(typeof CrawlFilterConfiguration$ === "object");
assert(typeof CreateAgentActionGroupRequest$ === "object");
assert(typeof CreateAgentActionGroupResponse$ === "object");
assert(typeof CreateAgentAliasRequest$ === "object");
assert(typeof CreateAgentAliasResponse$ === "object");
assert(typeof CreateAgentRequest$ === "object");
assert(typeof CreateAgentResponse$ === "object");
assert(typeof CreateDataSourceRequest$ === "object");
assert(typeof CreateDataSourceResponse$ === "object");
assert(typeof CreateFlowAliasRequest$ === "object");
assert(typeof CreateFlowAliasResponse$ === "object");
assert(typeof CreateFlowRequest$ === "object");
assert(typeof CreateFlowResponse$ === "object");
assert(typeof CreateFlowVersionRequest$ === "object");
assert(typeof CreateFlowVersionResponse$ === "object");
assert(typeof CreateKnowledgeBaseRequest$ === "object");
assert(typeof CreateKnowledgeBaseResponse$ === "object");
assert(typeof CreatePromptRequest$ === "object");
assert(typeof CreatePromptResponse$ === "object");
assert(typeof CreatePromptVersionRequest$ === "object");
assert(typeof CreatePromptVersionResponse$ === "object");
assert(typeof CuratedQuery$ === "object");
assert(typeof CustomContent$ === "object");
assert(typeof CustomDocumentIdentifier$ === "object");
assert(typeof CustomOrchestration$ === "object");
assert(typeof CustomS3Location$ === "object");
assert(typeof CustomTransformationConfiguration$ === "object");
assert(typeof CyclicConnectionFlowValidationDetails$ === "object");
assert(typeof DataSource$ === "object");
assert(typeof DataSourceConfiguration$ === "object");
assert(typeof DataSourceSummary$ === "object");
assert(typeof DeleteAgentActionGroupRequest$ === "object");
assert(typeof DeleteAgentActionGroupResponse$ === "object");
assert(typeof DeleteAgentAliasRequest$ === "object");
assert(typeof DeleteAgentAliasResponse$ === "object");
assert(typeof DeleteAgentRequest$ === "object");
assert(typeof DeleteAgentResponse$ === "object");
assert(typeof DeleteAgentVersionRequest$ === "object");
assert(typeof DeleteAgentVersionResponse$ === "object");
assert(typeof DeleteDataSourceRequest$ === "object");
assert(typeof DeleteDataSourceResponse$ === "object");
assert(typeof DeleteFlowAliasRequest$ === "object");
assert(typeof DeleteFlowAliasResponse$ === "object");
assert(typeof DeleteFlowRequest$ === "object");
assert(typeof DeleteFlowResponse$ === "object");
assert(typeof DeleteFlowVersionRequest$ === "object");
assert(typeof DeleteFlowVersionResponse$ === "object");
assert(typeof DeleteKnowledgeBaseDocumentsRequest$ === "object");
assert(typeof DeleteKnowledgeBaseDocumentsResponse$ === "object");
assert(typeof DeleteKnowledgeBaseRequest$ === "object");
assert(typeof DeleteKnowledgeBaseResponse$ === "object");
assert(typeof DeletePromptRequest$ === "object");
assert(typeof DeletePromptResponse$ === "object");
assert(typeof DisassociateAgentCollaboratorRequest$ === "object");
assert(typeof DisassociateAgentCollaboratorResponse$ === "object");
assert(typeof DisassociateAgentKnowledgeBaseRequest$ === "object");
assert(typeof DisassociateAgentKnowledgeBaseResponse$ === "object");
assert(typeof DocumentContent$ === "object");
assert(typeof DocumentIdentifier$ === "object");
assert(typeof DocumentMetadata$ === "object");
assert(typeof DuplicateConditionExpressionFlowValidationDetails$ === "object");
assert(typeof DuplicateConnectionsFlowValidationDetails$ === "object");
assert(typeof EmbeddingModelConfiguration$ === "object");
assert(typeof EnrichmentStrategyConfiguration$ === "object");
assert(typeof FieldForReranking$ === "object");
assert(typeof FixedSizeChunkingConfiguration$ === "object");
assert(typeof FlowAliasConcurrencyConfiguration$ === "object");
assert(typeof FlowAliasRoutingConfigurationListItem$ === "object");
assert(typeof FlowAliasSummary$ === "object");
assert(typeof FlowCondition$ === "object");
assert(typeof FlowConditionalConnectionConfiguration$ === "object");
assert(typeof FlowConnection$ === "object");
assert(typeof FlowConnectionConfiguration$ === "object");
assert(typeof FlowDataConnectionConfiguration$ === "object");
assert(typeof FlowDefinition$ === "object");
assert(typeof FlowNode$ === "object");
assert(typeof FlowNodeConfiguration$ === "object");
assert(typeof FlowNodeInput$ === "object");
assert(typeof FlowNodeOutput$ === "object");
assert(typeof FlowSummary$ === "object");
assert(typeof FlowValidation$ === "object");
assert(typeof FlowValidationDetails$ === "object");
assert(typeof FlowVersionSummary$ === "object");
assert(typeof Function$ === "object");
assert(typeof FunctionSchema$ === "object");
assert(typeof GetAgentActionGroupRequest$ === "object");
assert(typeof GetAgentActionGroupResponse$ === "object");
assert(typeof GetAgentAliasRequest$ === "object");
assert(typeof GetAgentAliasResponse$ === "object");
assert(typeof GetAgentCollaboratorRequest$ === "object");
assert(typeof GetAgentCollaboratorResponse$ === "object");
assert(typeof GetAgentKnowledgeBaseRequest$ === "object");
assert(typeof GetAgentKnowledgeBaseResponse$ === "object");
assert(typeof GetAgentRequest$ === "object");
assert(typeof GetAgentResponse$ === "object");
assert(typeof GetAgentVersionRequest$ === "object");
assert(typeof GetAgentVersionResponse$ === "object");
assert(typeof GetDataSourceRequest$ === "object");
assert(typeof GetDataSourceResponse$ === "object");
assert(typeof GetFlowAliasRequest$ === "object");
assert(typeof GetFlowAliasResponse$ === "object");
assert(typeof GetFlowRequest$ === "object");
assert(typeof GetFlowResponse$ === "object");
assert(typeof GetFlowVersionRequest$ === "object");
assert(typeof GetFlowVersionResponse$ === "object");
assert(typeof GetIngestionJobRequest$ === "object");
assert(typeof GetIngestionJobResponse$ === "object");
assert(typeof GetKnowledgeBaseDocumentsRequest$ === "object");
assert(typeof GetKnowledgeBaseDocumentsResponse$ === "object");
assert(typeof GetKnowledgeBaseRequest$ === "object");
assert(typeof GetKnowledgeBaseResponse$ === "object");
assert(typeof GetPromptRequest$ === "object");
assert(typeof GetPromptResponse$ === "object");
assert(typeof GuardrailConfiguration$ === "object");
assert(typeof HierarchicalChunkingConfiguration$ === "object");
assert(typeof HierarchicalChunkingLevelConfiguration$ === "object");
assert(typeof IncompatibleConnectionDataTypeFlowValidationDetails$ === "object");
assert(typeof InferenceConfiguration$ === "object");
assert(typeof IngestionJob$ === "object");
assert(typeof IngestionJobFilter$ === "object");
assert(typeof IngestionJobSortBy$ === "object");
assert(typeof IngestionJobStatistics$ === "object");
assert(typeof IngestionJobSummary$ === "object");
assert(typeof IngestKnowledgeBaseDocumentsRequest$ === "object");
assert(typeof IngestKnowledgeBaseDocumentsResponse$ === "object");
assert(typeof InlineCodeFlowNodeConfiguration$ === "object");
assert(typeof InlineContent$ === "object");
assert(typeof InputFlowNodeConfiguration$ === "object");
assert(typeof IntermediateStorage$ === "object");
assert(typeof InvalidLoopBoundaryFlowValidationDetails$ === "object");
assert(typeof IteratorFlowNodeConfiguration$ === "object");
assert(typeof KendraKnowledgeBaseConfiguration$ === "object");
assert(typeof KnowledgeBase$ === "object");
assert(typeof KnowledgeBaseConfiguration$ === "object");
assert(typeof KnowledgeBaseDocument$ === "object");
assert(typeof KnowledgeBaseDocumentDetail$ === "object");
assert(typeof KnowledgeBaseFlowNodeConfiguration$ === "object");
assert(typeof KnowledgeBaseOrchestrationConfiguration$ === "object");
assert(typeof KnowledgeBasePromptTemplate$ === "object");
assert(typeof KnowledgeBaseSummary$ === "object");
assert(typeof LambdaFunctionFlowNodeConfiguration$ === "object");
assert(typeof LexFlowNodeConfiguration$ === "object");
assert(typeof ListAgentActionGroupsRequest$ === "object");
assert(typeof ListAgentActionGroupsResponse$ === "object");
assert(typeof ListAgentAliasesRequest$ === "object");
assert(typeof ListAgentAliasesResponse$ === "object");
assert(typeof ListAgentCollaboratorsRequest$ === "object");
assert(typeof ListAgentCollaboratorsResponse$ === "object");
assert(typeof ListAgentKnowledgeBasesRequest$ === "object");
assert(typeof ListAgentKnowledgeBasesResponse$ === "object");
assert(typeof ListAgentsRequest$ === "object");
assert(typeof ListAgentsResponse$ === "object");
assert(typeof ListAgentVersionsRequest$ === "object");
assert(typeof ListAgentVersionsResponse$ === "object");
assert(typeof ListDataSourcesRequest$ === "object");
assert(typeof ListDataSourcesResponse$ === "object");
assert(typeof ListFlowAliasesRequest$ === "object");
assert(typeof ListFlowAliasesResponse$ === "object");
assert(typeof ListFlowsRequest$ === "object");
assert(typeof ListFlowsResponse$ === "object");
assert(typeof ListFlowVersionsRequest$ === "object");
assert(typeof ListFlowVersionsResponse$ === "object");
assert(typeof ListIngestionJobsRequest$ === "object");
assert(typeof ListIngestionJobsResponse$ === "object");
assert(typeof ListKnowledgeBaseDocumentsRequest$ === "object");
assert(typeof ListKnowledgeBaseDocumentsResponse$ === "object");
assert(typeof ListKnowledgeBasesRequest$ === "object");
assert(typeof ListKnowledgeBasesResponse$ === "object");
assert(typeof ListPromptsRequest$ === "object");
assert(typeof ListPromptsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LoopControllerFlowNodeConfiguration$ === "object");
assert(typeof LoopFlowNodeConfiguration$ === "object");
assert(typeof LoopIncompatibleNodeTypeFlowValidationDetails$ === "object");
assert(typeof LoopInputFlowNodeConfiguration$ === "object");
assert(typeof MalformedConditionExpressionFlowValidationDetails$ === "object");
assert(typeof MalformedNodeInputExpressionFlowValidationDetails$ === "object");
assert(typeof MemoryConfiguration$ === "object");
assert(typeof Message$ === "object");
assert(typeof MetadataAttribute$ === "object");
assert(typeof MetadataAttributeValue$ === "object");
assert(typeof MetadataConfigurationForReranking$ === "object");
assert(typeof MismatchedNodeInputTypeFlowValidationDetails$ === "object");
assert(typeof MismatchedNodeOutputTypeFlowValidationDetails$ === "object");
assert(typeof MissingConnectionConfigurationFlowValidationDetails$ === "object");
assert(typeof MissingDefaultConditionFlowValidationDetails$ === "object");
assert(typeof MissingEndingNodesFlowValidationDetails$ === "object");
assert(typeof MissingLoopControllerNodeFlowValidationDetails$ === "object");
assert(typeof MissingLoopInputNodeFlowValidationDetails$ === "object");
assert(typeof MissingNodeConfigurationFlowValidationDetails$ === "object");
assert(typeof MissingNodeInputFlowValidationDetails$ === "object");
assert(typeof MissingNodeOutputFlowValidationDetails$ === "object");
assert(typeof MissingStartingNodesFlowValidationDetails$ === "object");
assert(typeof MongoDbAtlasConfiguration$ === "object");
assert(typeof MongoDbAtlasFieldMapping$ === "object");
assert(typeof MultipleLoopControllerNodesFlowValidationDetails$ === "object");
assert(typeof MultipleLoopInputNodesFlowValidationDetails$ === "object");
assert(typeof MultipleNodeInputConnectionsFlowValidationDetails$ === "object");
assert(typeof NeptuneAnalyticsConfiguration$ === "object");
assert(typeof NeptuneAnalyticsFieldMapping$ === "object");
assert(typeof OpenSearchManagedClusterConfiguration$ === "object");
assert(typeof OpenSearchManagedClusterFieldMapping$ === "object");
assert(typeof OpenSearchServerlessConfiguration$ === "object");
assert(typeof OpenSearchServerlessFieldMapping$ === "object");
assert(typeof OrchestrationExecutor$ === "object");
assert(typeof OutputFlowNodeConfiguration$ === "object");
assert(typeof ParameterDetail$ === "object");
assert(typeof ParsingConfiguration$ === "object");
assert(typeof ParsingPrompt$ === "object");
assert(typeof PatternObjectFilter$ === "object");
assert(typeof PatternObjectFilterConfiguration$ === "object");
assert(typeof PerformanceConfiguration$ === "object");
assert(typeof PineconeConfiguration$ === "object");
assert(typeof PineconeFieldMapping$ === "object");
assert(typeof PrepareAgentRequest$ === "object");
assert(typeof PrepareAgentResponse$ === "object");
assert(typeof PrepareFlowRequest$ === "object");
assert(typeof PrepareFlowResponse$ === "object");
assert(typeof PromptAgentResource$ === "object");
assert(typeof PromptConfiguration$ === "object");
assert(typeof PromptFlowNodeConfiguration$ === "object");
assert(typeof PromptFlowNodeInlineConfiguration$ === "object");
assert(typeof PromptFlowNodeResourceConfiguration$ === "object");
assert(typeof PromptFlowNodeSourceConfiguration$ === "object");
assert(typeof PromptGenAiResource$ === "object");
assert(typeof PromptInferenceConfiguration$ === "object");
assert(typeof PromptInputVariable$ === "object");
assert(typeof PromptMetadataEntry$ === "object");
assert(typeof PromptModelInferenceConfiguration$ === "object");
assert(typeof PromptOverrideConfiguration$ === "object");
assert(typeof PromptSummary$ === "object");
assert(typeof PromptTemplateConfiguration$ === "object");
assert(typeof PromptVariant$ === "object");
assert(typeof QueryGenerationColumn$ === "object");
assert(typeof QueryGenerationConfiguration$ === "object");
assert(typeof QueryGenerationContext$ === "object");
assert(typeof QueryGenerationTable$ === "object");
assert(typeof RdsConfiguration$ === "object");
assert(typeof RdsFieldMapping$ === "object");
assert(typeof RedisEnterpriseCloudConfiguration$ === "object");
assert(typeof RedisEnterpriseCloudFieldMapping$ === "object");
assert(typeof RedshiftConfiguration$ === "object");
assert(typeof RedshiftProvisionedAuthConfiguration$ === "object");
assert(typeof RedshiftProvisionedConfiguration$ === "object");
assert(typeof RedshiftQueryEngineAwsDataCatalogStorageConfiguration$ === "object");
assert(typeof RedshiftQueryEngineConfiguration$ === "object");
assert(typeof RedshiftQueryEngineRedshiftStorageConfiguration$ === "object");
assert(typeof RedshiftQueryEngineStorageConfiguration$ === "object");
assert(typeof RedshiftServerlessAuthConfiguration$ === "object");
assert(typeof RedshiftServerlessConfiguration$ === "object");
assert(typeof RerankingMetadataSelectiveModeConfiguration$ === "object");
assert(typeof RetrievalFlowNodeConfiguration$ === "object");
assert(typeof RetrievalFlowNodeS3Configuration$ === "object");
assert(typeof RetrievalFlowNodeServiceConfiguration$ === "object");
assert(typeof S3Content$ === "object");
assert(typeof S3DataSourceConfiguration$ === "object");
assert(typeof S3Identifier$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof S3VectorsConfiguration$ === "object");
assert(typeof SalesforceCrawlerConfiguration$ === "object");
assert(typeof SalesforceDataSourceConfiguration$ === "object");
assert(typeof SalesforceSourceConfiguration$ === "object");
assert(typeof SeedUrl$ === "object");
assert(typeof SemanticChunkingConfiguration$ === "object");
assert(typeof ServerSideEncryptionConfiguration$ === "object");
assert(typeof SessionSummaryConfiguration$ === "object");
assert(typeof SharePointCrawlerConfiguration$ === "object");
assert(typeof SharePointDataSourceConfiguration$ === "object");
assert(typeof SharePointSourceConfiguration$ === "object");
assert(typeof SpecificToolChoice$ === "object");
assert(typeof SqlKnowledgeBaseConfiguration$ === "object");
assert(typeof StartIngestionJobRequest$ === "object");
assert(typeof StartIngestionJobResponse$ === "object");
assert(typeof StopIngestionJobRequest$ === "object");
assert(typeof StopIngestionJobResponse$ === "object");
assert(typeof StorageConfiguration$ === "object");
assert(typeof StorageFlowNodeConfiguration$ === "object");
assert(typeof StorageFlowNodeS3Configuration$ === "object");
assert(typeof StorageFlowNodeServiceConfiguration$ === "object");
assert(typeof SupplementalDataStorageConfiguration$ === "object");
assert(typeof SupplementalDataStorageLocation$ === "object");
assert(typeof SystemContentBlock$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TextContentDoc$ === "object");
assert(typeof TextPromptTemplateConfiguration$ === "object");
assert(typeof Tool$ === "object");
assert(typeof ToolChoice$ === "object");
assert(typeof ToolConfiguration$ === "object");
assert(typeof ToolInputSchema$ === "object");
assert(typeof ToolSpecification$ === "object");
assert(typeof Transformation$ === "object");
assert(typeof TransformationFunction$ === "object");
assert(typeof TransformationLambdaConfiguration$ === "object");
assert(typeof UnfulfilledNodeInputFlowValidationDetails$ === "object");
assert(typeof UnknownConnectionConditionFlowValidationDetails$ === "object");
assert(typeof UnknownConnectionSourceFlowValidationDetails$ === "object");
assert(typeof UnknownConnectionSourceOutputFlowValidationDetails$ === "object");
assert(typeof UnknownConnectionTargetFlowValidationDetails$ === "object");
assert(typeof UnknownConnectionTargetInputFlowValidationDetails$ === "object");
assert(typeof UnknownNodeInputFlowValidationDetails$ === "object");
assert(typeof UnknownNodeOutputFlowValidationDetails$ === "object");
assert(typeof UnreachableNodeFlowValidationDetails$ === "object");
assert(typeof UnsatisfiedConnectionConditionsFlowValidationDetails$ === "object");
assert(typeof UnspecifiedFlowValidationDetails$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAgentActionGroupRequest$ === "object");
assert(typeof UpdateAgentActionGroupResponse$ === "object");
assert(typeof UpdateAgentAliasRequest$ === "object");
assert(typeof UpdateAgentAliasResponse$ === "object");
assert(typeof UpdateAgentCollaboratorRequest$ === "object");
assert(typeof UpdateAgentCollaboratorResponse$ === "object");
assert(typeof UpdateAgentKnowledgeBaseRequest$ === "object");
assert(typeof UpdateAgentKnowledgeBaseResponse$ === "object");
assert(typeof UpdateAgentRequest$ === "object");
assert(typeof UpdateAgentResponse$ === "object");
assert(typeof UpdateDataSourceRequest$ === "object");
assert(typeof UpdateDataSourceResponse$ === "object");
assert(typeof UpdateFlowAliasRequest$ === "object");
assert(typeof UpdateFlowAliasResponse$ === "object");
assert(typeof UpdateFlowRequest$ === "object");
assert(typeof UpdateFlowResponse$ === "object");
assert(typeof UpdateKnowledgeBaseRequest$ === "object");
assert(typeof UpdateKnowledgeBaseResponse$ === "object");
assert(typeof UpdatePromptRequest$ === "object");
assert(typeof UpdatePromptResponse$ === "object");
assert(typeof UrlConfiguration$ === "object");
assert(typeof ValidateFlowDefinitionRequest$ === "object");
assert(typeof ValidateFlowDefinitionResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VectorIngestionConfiguration$ === "object");
assert(typeof VectorKnowledgeBaseConfiguration$ === "object");
assert(typeof VectorSearchBedrockRerankingConfiguration$ === "object");
assert(typeof VectorSearchBedrockRerankingModelConfiguration$ === "object");
assert(typeof VectorSearchRerankingConfiguration$ === "object");
assert(typeof VideoConfiguration$ === "object");
assert(typeof VideoSegmentationConfiguration$ === "object");
assert(typeof WebCrawlerConfiguration$ === "object");
assert(typeof WebCrawlerLimits$ === "object");
assert(typeof WebDataSourceConfiguration$ === "object");
assert(typeof WebSourceConfiguration$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof BedrockAgentServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof BedrockAgentServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof BedrockAgentServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof BedrockAgentServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof BedrockAgentServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof BedrockAgentServiceException);
assert(typeof ValidationException$ === "object");
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
