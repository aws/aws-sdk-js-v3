import {
  AccessControlConfigurationSummary$,
  AccessControlListConfiguration$,
  AccessDeniedException,
  AccessDeniedException$,
  AclConfiguration$,
  AdditionalResultAttribute$,
  AdditionalResultAttributeValue$,
  AdditionalResultAttributeValueType,
  AlfrescoConfiguration$,
  AlfrescoEntity,
  AssociateEntitiesToExperience$,
  AssociateEntitiesToExperienceCommand,
  AssociateEntitiesToExperienceRequest$,
  AssociateEntitiesToExperienceResponse$,
  AssociatePersonasToEntities$,
  AssociatePersonasToEntitiesCommand,
  AssociatePersonasToEntitiesRequest$,
  AssociatePersonasToEntitiesResponse$,
  AttributeFilter$,
  AttributeSuggestionsDescribeConfig$,
  AttributeSuggestionsGetConfig$,
  AttributeSuggestionsMode,
  AttributeSuggestionsUpdateConfig$,
  AuthenticationConfiguration$,
  BasicAuthenticationConfiguration$,
  BatchDeleteDocument$,
  BatchDeleteDocumentCommand,
  BatchDeleteDocumentRequest$,
  BatchDeleteDocumentResponse$,
  BatchDeleteDocumentResponseFailedDocument$,
  BatchDeleteFeaturedResultsSet$,
  BatchDeleteFeaturedResultsSetCommand,
  BatchDeleteFeaturedResultsSetError$,
  BatchDeleteFeaturedResultsSetRequest$,
  BatchDeleteFeaturedResultsSetResponse$,
  BatchGetDocumentStatus$,
  BatchGetDocumentStatusCommand,
  BatchGetDocumentStatusRequest$,
  BatchGetDocumentStatusResponse$,
  BatchGetDocumentStatusResponseError$,
  BatchPutDocument$,
  BatchPutDocumentCommand,
  BatchPutDocumentRequest$,
  BatchPutDocumentResponse$,
  BatchPutDocumentResponseFailedDocument$,
  BoxConfiguration$,
  CapacityUnitsConfiguration$,
  ClearQuerySuggestions$,
  ClearQuerySuggestionsCommand,
  ClearQuerySuggestionsRequest$,
  ClickFeedback$,
  CollapseConfiguration$,
  CollapsedResultDetail$,
  ColumnConfiguration$,
  ConditionOperator,
  ConflictException,
  ConflictException$,
  ConflictingItem$,
  ConfluenceAttachmentConfiguration$,
  ConfluenceAttachmentFieldName,
  ConfluenceAttachmentToIndexFieldMapping$,
  ConfluenceAuthenticationType,
  ConfluenceBlogConfiguration$,
  ConfluenceBlogFieldName,
  ConfluenceBlogToIndexFieldMapping$,
  ConfluenceConfiguration$,
  ConfluencePageConfiguration$,
  ConfluencePageFieldName,
  ConfluencePageToIndexFieldMapping$,
  ConfluenceSpaceConfiguration$,
  ConfluenceSpaceFieldName,
  ConfluenceSpaceToIndexFieldMapping$,
  ConfluenceVersion,
  ConnectionConfiguration$,
  ContentSourceConfiguration$,
  ContentType,
  Correction$,
  CreateAccessControlConfiguration$,
  CreateAccessControlConfigurationCommand,
  CreateAccessControlConfigurationRequest$,
  CreateAccessControlConfigurationResponse$,
  CreateDataSource$,
  CreateDataSourceCommand,
  CreateDataSourceRequest$,
  CreateDataSourceResponse$,
  CreateExperience$,
  CreateExperienceCommand,
  CreateExperienceRequest$,
  CreateExperienceResponse$,
  CreateFaq$,
  CreateFaqCommand,
  CreateFaqRequest$,
  CreateFaqResponse$,
  CreateFeaturedResultsSet$,
  CreateFeaturedResultsSetCommand,
  CreateFeaturedResultsSetRequest$,
  CreateFeaturedResultsSetResponse$,
  CreateIndex$,
  CreateIndexCommand,
  CreateIndexRequest$,
  CreateIndexResponse$,
  CreateQuerySuggestionsBlockList$,
  CreateQuerySuggestionsBlockListCommand,
  CreateQuerySuggestionsBlockListRequest$,
  CreateQuerySuggestionsBlockListResponse$,
  CreateThesaurus$,
  CreateThesaurusCommand,
  CreateThesaurusRequest$,
  CreateThesaurusResponse$,
  CustomDocumentEnrichmentConfiguration$,
  DataSourceConfiguration$,
  DataSourceGroup$,
  DataSourceStatus,
  DataSourceSummary$,
  DataSourceSyncJob$,
  DataSourceSyncJobMetricTarget$,
  DataSourceSyncJobMetrics$,
  DataSourceSyncJobStatus,
  DataSourceToIndexFieldMapping$,
  DataSourceType,
  DataSourceVpcConfiguration$,
  DatabaseConfiguration$,
  DatabaseEngineType,
  DeleteAccessControlConfiguration$,
  DeleteAccessControlConfigurationCommand,
  DeleteAccessControlConfigurationRequest$,
  DeleteAccessControlConfigurationResponse$,
  DeleteDataSource$,
  DeleteDataSourceCommand,
  DeleteDataSourceRequest$,
  DeleteExperience$,
  DeleteExperienceCommand,
  DeleteExperienceRequest$,
  DeleteExperienceResponse$,
  DeleteFaq$,
  DeleteFaqCommand,
  DeleteFaqRequest$,
  DeleteIndex$,
  DeleteIndexCommand,
  DeleteIndexRequest$,
  DeletePrincipalMapping$,
  DeletePrincipalMappingCommand,
  DeletePrincipalMappingRequest$,
  DeleteQuerySuggestionsBlockList$,
  DeleteQuerySuggestionsBlockListCommand,
  DeleteQuerySuggestionsBlockListRequest$,
  DeleteThesaurus$,
  DeleteThesaurusCommand,
  DeleteThesaurusRequest$,
  DescribeAccessControlConfiguration$,
  DescribeAccessControlConfigurationCommand,
  DescribeAccessControlConfigurationRequest$,
  DescribeAccessControlConfigurationResponse$,
  DescribeDataSource$,
  DescribeDataSourceCommand,
  DescribeDataSourceRequest$,
  DescribeDataSourceResponse$,
  DescribeExperience$,
  DescribeExperienceCommand,
  DescribeExperienceRequest$,
  DescribeExperienceResponse$,
  DescribeFaq$,
  DescribeFaqCommand,
  DescribeFaqRequest$,
  DescribeFaqResponse$,
  DescribeFeaturedResultsSet$,
  DescribeFeaturedResultsSetCommand,
  DescribeFeaturedResultsSetRequest$,
  DescribeFeaturedResultsSetResponse$,
  DescribeIndex$,
  DescribeIndexCommand,
  DescribeIndexRequest$,
  DescribeIndexResponse$,
  DescribePrincipalMapping$,
  DescribePrincipalMappingCommand,
  DescribePrincipalMappingRequest$,
  DescribePrincipalMappingResponse$,
  DescribeQuerySuggestionsBlockList$,
  DescribeQuerySuggestionsBlockListCommand,
  DescribeQuerySuggestionsBlockListRequest$,
  DescribeQuerySuggestionsBlockListResponse$,
  DescribeQuerySuggestionsConfig$,
  DescribeQuerySuggestionsConfigCommand,
  DescribeQuerySuggestionsConfigRequest$,
  DescribeQuerySuggestionsConfigResponse$,
  DescribeThesaurus$,
  DescribeThesaurusCommand,
  DescribeThesaurusRequest$,
  DescribeThesaurusResponse$,
  DisassociateEntitiesFromExperience$,
  DisassociateEntitiesFromExperienceCommand,
  DisassociateEntitiesFromExperienceRequest$,
  DisassociateEntitiesFromExperienceResponse$,
  DisassociatePersonasFromEntities$,
  DisassociatePersonasFromEntitiesCommand,
  DisassociatePersonasFromEntitiesRequest$,
  DisassociatePersonasFromEntitiesResponse$,
  Document$,
  DocumentAttribute$,
  DocumentAttributeCondition$,
  DocumentAttributeTarget$,
  DocumentAttributeValue$,
  DocumentAttributeValueCountPair$,
  DocumentAttributeValueType,
  DocumentInfo$,
  DocumentMetadataConfiguration$,
  DocumentRelevanceConfiguration$,
  DocumentStatus,
  DocumentsMetadataConfiguration$,
  EndpointType,
  EntityConfiguration$,
  EntityDisplayData$,
  EntityPersonaConfiguration$,
  EntityType,
  ErrorCode,
  ExpandConfiguration$,
  ExpandedResultItem$,
  ExperienceConfiguration$,
  ExperienceEndpoint$,
  ExperienceEntitiesSummary$,
  ExperienceStatus,
  ExperiencesSummary$,
  Facet$,
  FacetResult$,
  FailedEntity$,
  FaqFileFormat,
  FaqStatistics$,
  FaqStatus,
  FaqSummary$,
  FeaturedDocument$,
  FeaturedDocumentMissing$,
  FeaturedDocumentWithMetadata$,
  FeaturedResultsConflictException,
  FeaturedResultsConflictException$,
  FeaturedResultsItem$,
  FeaturedResultsSet$,
  FeaturedResultsSetStatus,
  FeaturedResultsSetSummary$,
  FsxConfiguration$,
  FsxFileSystemType,
  GetQuerySuggestions$,
  GetQuerySuggestionsCommand,
  GetQuerySuggestionsRequest$,
  GetQuerySuggestionsResponse$,
  GetSnapshots$,
  GetSnapshotsCommand,
  GetSnapshotsRequest$,
  GetSnapshotsResponse$,
  GitHubConfiguration$,
  GitHubDocumentCrawlProperties$,
  GoogleDriveConfiguration$,
  GroupMembers$,
  GroupOrderingIdSummary$,
  GroupSummary$,
  HierarchicalPrincipal$,
  Highlight$,
  HighlightType,
  HookConfiguration$,
  IndexConfigurationSummary$,
  IndexEdition,
  IndexStatistics$,
  IndexStatus,
  InlineCustomDocumentEnrichmentConfiguration$,
  InternalServerException,
  InternalServerException$,
  Interval,
  InvalidRequestException,
  InvalidRequestException$,
  IssueSubEntity,
  JiraConfiguration$,
  JsonTokenTypeConfiguration$,
  JwtTokenTypeConfiguration$,
  Kendra,
  KendraClient,
  KendraServiceException,
  KeyLocation,
  ListAccessControlConfigurations$,
  ListAccessControlConfigurationsCommand,
  ListAccessControlConfigurationsRequest$,
  ListAccessControlConfigurationsResponse$,
  ListDataSourceSyncJobs$,
  ListDataSourceSyncJobsCommand,
  ListDataSourceSyncJobsRequest$,
  ListDataSourceSyncJobsResponse$,
  ListDataSources$,
  ListDataSourcesCommand,
  ListDataSourcesRequest$,
  ListDataSourcesResponse$,
  ListEntityPersonas$,
  ListEntityPersonasCommand,
  ListEntityPersonasRequest$,
  ListEntityPersonasResponse$,
  ListExperienceEntities$,
  ListExperienceEntitiesCommand,
  ListExperienceEntitiesRequest$,
  ListExperienceEntitiesResponse$,
  ListExperiences$,
  ListExperiencesCommand,
  ListExperiencesRequest$,
  ListExperiencesResponse$,
  ListFaqs$,
  ListFaqsCommand,
  ListFaqsRequest$,
  ListFaqsResponse$,
  ListFeaturedResultsSets$,
  ListFeaturedResultsSetsCommand,
  ListFeaturedResultsSetsRequest$,
  ListFeaturedResultsSetsResponse$,
  ListGroupsOlderThanOrderingId$,
  ListGroupsOlderThanOrderingIdCommand,
  ListGroupsOlderThanOrderingIdRequest$,
  ListGroupsOlderThanOrderingIdResponse$,
  ListIndices$,
  ListIndicesCommand,
  ListIndicesRequest$,
  ListIndicesResponse$,
  ListQuerySuggestionsBlockLists$,
  ListQuerySuggestionsBlockListsCommand,
  ListQuerySuggestionsBlockListsRequest$,
  ListQuerySuggestionsBlockListsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListThesauri$,
  ListThesauriCommand,
  ListThesauriRequest$,
  ListThesauriResponse$,
  MemberGroup$,
  MemberUser$,
  MetricType,
  MissingAttributeKeyStrategy,
  Mode,
  OnPremiseConfiguration$,
  OneDriveConfiguration$,
  OneDriveUsers$,
  Order,
  Persona,
  PersonasSummary$,
  Principal$,
  PrincipalMappingStatus,
  PrincipalType,
  ProxyConfiguration$,
  PutPrincipalMapping$,
  PutPrincipalMappingCommand,
  PutPrincipalMappingRequest$,
  Query$,
  QueryCommand,
  QueryIdentifiersEnclosingOption,
  QueryRequest$,
  QueryResult$,
  QueryResultFormat,
  QueryResultItem$,
  QueryResultType,
  QuerySuggestionsBlockListStatus,
  QuerySuggestionsBlockListSummary$,
  QuerySuggestionsStatus,
  QuipConfiguration$,
  ReadAccessType,
  Relevance$,
  RelevanceFeedback$,
  RelevanceType,
  ResourceAlreadyExistException,
  ResourceAlreadyExistException$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceUnavailableException,
  ResourceUnavailableException$,
  Retrieve$,
  RetrieveCommand,
  RetrieveRequest$,
  RetrieveResult$,
  RetrieveResultItem$,
  S3DataSourceConfiguration$,
  S3Path$,
  SaaSConfiguration$,
  SalesforceChatterFeedConfiguration$,
  SalesforceChatterFeedIncludeFilterType,
  SalesforceConfiguration$,
  SalesforceCustomKnowledgeArticleTypeConfiguration$,
  SalesforceKnowledgeArticleConfiguration$,
  SalesforceKnowledgeArticleState,
  SalesforceStandardKnowledgeArticleTypeConfiguration$,
  SalesforceStandardObjectAttachmentConfiguration$,
  SalesforceStandardObjectConfiguration$,
  SalesforceStandardObjectName,
  ScoreAttributes$,
  ScoreConfidence,
  Search$,
  SeedUrlConfiguration$,
  ServerSideEncryptionConfiguration$,
  ServiceNowAuthenticationType,
  ServiceNowBuildVersionType,
  ServiceNowConfiguration$,
  ServiceNowKnowledgeArticleConfiguration$,
  ServiceNowServiceCatalogConfiguration$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SharePointConfiguration$,
  SharePointOnlineAuthenticationType,
  SharePointVersion,
  SiteMapsConfiguration$,
  SlackConfiguration$,
  SlackEntity,
  SortOrder,
  SortingConfiguration$,
  SourceDocument$,
  SpellCorrectedQuery$,
  SpellCorrectionConfiguration$,
  SqlConfiguration$,
  StartDataSourceSyncJob$,
  StartDataSourceSyncJobCommand,
  StartDataSourceSyncJobRequest$,
  StartDataSourceSyncJobResponse$,
  Status$,
  StopDataSourceSyncJob$,
  StopDataSourceSyncJobCommand,
  StopDataSourceSyncJobRequest$,
  SubmitFeedback$,
  SubmitFeedbackCommand,
  SubmitFeedbackRequest$,
  SuggestableConfig$,
  Suggestion$,
  SuggestionHighlight$,
  SuggestionTextWithHighlights$,
  SuggestionType,
  SuggestionValue$,
  TableCell$,
  TableExcerpt$,
  TableRow$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TemplateConfiguration$,
  TextDocumentStatistics$,
  TextWithHighlights$,
  ThesaurusStatus,
  ThesaurusSummary$,
  ThrottlingException,
  ThrottlingException$,
  TimeRange$,
  Type,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAccessControlConfiguration$,
  UpdateAccessControlConfigurationCommand,
  UpdateAccessControlConfigurationRequest$,
  UpdateAccessControlConfigurationResponse$,
  UpdateDataSource$,
  UpdateDataSourceCommand,
  UpdateDataSourceRequest$,
  UpdateExperience$,
  UpdateExperienceCommand,
  UpdateExperienceRequest$,
  UpdateFeaturedResultsSet$,
  UpdateFeaturedResultsSetCommand,
  UpdateFeaturedResultsSetRequest$,
  UpdateFeaturedResultsSetResponse$,
  UpdateIndex$,
  UpdateIndexCommand,
  UpdateIndexRequest$,
  UpdateQuerySuggestionsBlockList$,
  UpdateQuerySuggestionsBlockListCommand,
  UpdateQuerySuggestionsBlockListRequest$,
  UpdateQuerySuggestionsConfig$,
  UpdateQuerySuggestionsConfigCommand,
  UpdateQuerySuggestionsConfigRequest$,
  UpdateThesaurus$,
  UpdateThesaurusCommand,
  UpdateThesaurusRequest$,
  Urls$,
  UserContext$,
  UserContextPolicy,
  UserGroupResolutionConfiguration$,
  UserGroupResolutionMode,
  UserIdentityConfiguration$,
  UserTokenConfiguration$,
  ValidationException,
  ValidationException$,
  Warning$,
  WarningCode,
  WebCrawlerConfiguration$,
  WebCrawlerMode,
  WorkDocsConfiguration$,
  paginateGetSnapshots,
  paginateListAccessControlConfigurations,
  paginateListDataSourceSyncJobs,
  paginateListDataSources,
  paginateListEntityPersonas,
  paginateListExperienceEntities,
  paginateListExperiences,
  paginateListFaqs,
  paginateListGroupsOlderThanOrderingId,
  paginateListIndices,
  paginateListQuerySuggestionsBlockLists,
  paginateListThesauri,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KendraClient === "function");
assert(typeof Kendra === "function");
// commands
assert(typeof AssociateEntitiesToExperienceCommand === "function");
assert(typeof AssociateEntitiesToExperience$ === "object");
assert(typeof AssociatePersonasToEntitiesCommand === "function");
assert(typeof AssociatePersonasToEntities$ === "object");
assert(typeof BatchDeleteDocumentCommand === "function");
assert(typeof BatchDeleteDocument$ === "object");
assert(typeof BatchDeleteFeaturedResultsSetCommand === "function");
assert(typeof BatchDeleteFeaturedResultsSet$ === "object");
assert(typeof BatchGetDocumentStatusCommand === "function");
assert(typeof BatchGetDocumentStatus$ === "object");
assert(typeof BatchPutDocumentCommand === "function");
assert(typeof BatchPutDocument$ === "object");
assert(typeof ClearQuerySuggestionsCommand === "function");
assert(typeof ClearQuerySuggestions$ === "object");
assert(typeof CreateAccessControlConfigurationCommand === "function");
assert(typeof CreateAccessControlConfiguration$ === "object");
assert(typeof CreateDataSourceCommand === "function");
assert(typeof CreateDataSource$ === "object");
assert(typeof CreateExperienceCommand === "function");
assert(typeof CreateExperience$ === "object");
assert(typeof CreateFaqCommand === "function");
assert(typeof CreateFaq$ === "object");
assert(typeof CreateFeaturedResultsSetCommand === "function");
assert(typeof CreateFeaturedResultsSet$ === "object");
assert(typeof CreateIndexCommand === "function");
assert(typeof CreateIndex$ === "object");
assert(typeof CreateQuerySuggestionsBlockListCommand === "function");
assert(typeof CreateQuerySuggestionsBlockList$ === "object");
assert(typeof CreateThesaurusCommand === "function");
assert(typeof CreateThesaurus$ === "object");
assert(typeof DeleteAccessControlConfigurationCommand === "function");
assert(typeof DeleteAccessControlConfiguration$ === "object");
assert(typeof DeleteDataSourceCommand === "function");
assert(typeof DeleteDataSource$ === "object");
assert(typeof DeleteExperienceCommand === "function");
assert(typeof DeleteExperience$ === "object");
assert(typeof DeleteFaqCommand === "function");
assert(typeof DeleteFaq$ === "object");
assert(typeof DeleteIndexCommand === "function");
assert(typeof DeleteIndex$ === "object");
assert(typeof DeletePrincipalMappingCommand === "function");
assert(typeof DeletePrincipalMapping$ === "object");
assert(typeof DeleteQuerySuggestionsBlockListCommand === "function");
assert(typeof DeleteQuerySuggestionsBlockList$ === "object");
assert(typeof DeleteThesaurusCommand === "function");
assert(typeof DeleteThesaurus$ === "object");
assert(typeof DescribeAccessControlConfigurationCommand === "function");
assert(typeof DescribeAccessControlConfiguration$ === "object");
assert(typeof DescribeDataSourceCommand === "function");
assert(typeof DescribeDataSource$ === "object");
assert(typeof DescribeExperienceCommand === "function");
assert(typeof DescribeExperience$ === "object");
assert(typeof DescribeFaqCommand === "function");
assert(typeof DescribeFaq$ === "object");
assert(typeof DescribeFeaturedResultsSetCommand === "function");
assert(typeof DescribeFeaturedResultsSet$ === "object");
assert(typeof DescribeIndexCommand === "function");
assert(typeof DescribeIndex$ === "object");
assert(typeof DescribePrincipalMappingCommand === "function");
assert(typeof DescribePrincipalMapping$ === "object");
assert(typeof DescribeQuerySuggestionsBlockListCommand === "function");
assert(typeof DescribeQuerySuggestionsBlockList$ === "object");
assert(typeof DescribeQuerySuggestionsConfigCommand === "function");
assert(typeof DescribeQuerySuggestionsConfig$ === "object");
assert(typeof DescribeThesaurusCommand === "function");
assert(typeof DescribeThesaurus$ === "object");
assert(typeof DisassociateEntitiesFromExperienceCommand === "function");
assert(typeof DisassociateEntitiesFromExperience$ === "object");
assert(typeof DisassociatePersonasFromEntitiesCommand === "function");
assert(typeof DisassociatePersonasFromEntities$ === "object");
assert(typeof GetQuerySuggestionsCommand === "function");
assert(typeof GetQuerySuggestions$ === "object");
assert(typeof GetSnapshotsCommand === "function");
assert(typeof GetSnapshots$ === "object");
assert(typeof ListAccessControlConfigurationsCommand === "function");
assert(typeof ListAccessControlConfigurations$ === "object");
assert(typeof ListDataSourcesCommand === "function");
assert(typeof ListDataSources$ === "object");
assert(typeof ListDataSourceSyncJobsCommand === "function");
assert(typeof ListDataSourceSyncJobs$ === "object");
assert(typeof ListEntityPersonasCommand === "function");
assert(typeof ListEntityPersonas$ === "object");
assert(typeof ListExperienceEntitiesCommand === "function");
assert(typeof ListExperienceEntities$ === "object");
assert(typeof ListExperiencesCommand === "function");
assert(typeof ListExperiences$ === "object");
assert(typeof ListFaqsCommand === "function");
assert(typeof ListFaqs$ === "object");
assert(typeof ListFeaturedResultsSetsCommand === "function");
assert(typeof ListFeaturedResultsSets$ === "object");
assert(typeof ListGroupsOlderThanOrderingIdCommand === "function");
assert(typeof ListGroupsOlderThanOrderingId$ === "object");
assert(typeof ListIndicesCommand === "function");
assert(typeof ListIndices$ === "object");
assert(typeof ListQuerySuggestionsBlockListsCommand === "function");
assert(typeof ListQuerySuggestionsBlockLists$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListThesauriCommand === "function");
assert(typeof ListThesauri$ === "object");
assert(typeof PutPrincipalMappingCommand === "function");
assert(typeof PutPrincipalMapping$ === "object");
assert(typeof QueryCommand === "function");
assert(typeof Query$ === "object");
assert(typeof RetrieveCommand === "function");
assert(typeof Retrieve$ === "object");
assert(typeof StartDataSourceSyncJobCommand === "function");
assert(typeof StartDataSourceSyncJob$ === "object");
assert(typeof StopDataSourceSyncJobCommand === "function");
assert(typeof StopDataSourceSyncJob$ === "object");
assert(typeof SubmitFeedbackCommand === "function");
assert(typeof SubmitFeedback$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAccessControlConfigurationCommand === "function");
assert(typeof UpdateAccessControlConfiguration$ === "object");
assert(typeof UpdateDataSourceCommand === "function");
assert(typeof UpdateDataSource$ === "object");
assert(typeof UpdateExperienceCommand === "function");
assert(typeof UpdateExperience$ === "object");
assert(typeof UpdateFeaturedResultsSetCommand === "function");
assert(typeof UpdateFeaturedResultsSet$ === "object");
assert(typeof UpdateIndexCommand === "function");
assert(typeof UpdateIndex$ === "object");
assert(typeof UpdateQuerySuggestionsBlockListCommand === "function");
assert(typeof UpdateQuerySuggestionsBlockList$ === "object");
assert(typeof UpdateQuerySuggestionsConfigCommand === "function");
assert(typeof UpdateQuerySuggestionsConfig$ === "object");
assert(typeof UpdateThesaurusCommand === "function");
assert(typeof UpdateThesaurus$ === "object");
// structural schemas
assert(typeof AccessControlConfigurationSummary$ === "object");
assert(typeof AccessControlListConfiguration$ === "object");
assert(typeof AclConfiguration$ === "object");
assert(typeof AdditionalResultAttribute$ === "object");
assert(typeof AdditionalResultAttributeValue$ === "object");
assert(typeof AlfrescoConfiguration$ === "object");
assert(typeof AssociateEntitiesToExperienceRequest$ === "object");
assert(typeof AssociateEntitiesToExperienceResponse$ === "object");
assert(typeof AssociatePersonasToEntitiesRequest$ === "object");
assert(typeof AssociatePersonasToEntitiesResponse$ === "object");
assert(typeof AttributeFilter$ === "object");
assert(typeof AttributeSuggestionsDescribeConfig$ === "object");
assert(typeof AttributeSuggestionsGetConfig$ === "object");
assert(typeof AttributeSuggestionsUpdateConfig$ === "object");
assert(typeof AuthenticationConfiguration$ === "object");
assert(typeof BasicAuthenticationConfiguration$ === "object");
assert(typeof BatchDeleteDocumentRequest$ === "object");
assert(typeof BatchDeleteDocumentResponse$ === "object");
assert(typeof BatchDeleteDocumentResponseFailedDocument$ === "object");
assert(typeof BatchDeleteFeaturedResultsSetError$ === "object");
assert(typeof BatchDeleteFeaturedResultsSetRequest$ === "object");
assert(typeof BatchDeleteFeaturedResultsSetResponse$ === "object");
assert(typeof BatchGetDocumentStatusRequest$ === "object");
assert(typeof BatchGetDocumentStatusResponse$ === "object");
assert(typeof BatchGetDocumentStatusResponseError$ === "object");
assert(typeof BatchPutDocumentRequest$ === "object");
assert(typeof BatchPutDocumentResponse$ === "object");
assert(typeof BatchPutDocumentResponseFailedDocument$ === "object");
assert(typeof BoxConfiguration$ === "object");
assert(typeof CapacityUnitsConfiguration$ === "object");
assert(typeof ClearQuerySuggestionsRequest$ === "object");
assert(typeof ClickFeedback$ === "object");
assert(typeof CollapseConfiguration$ === "object");
assert(typeof CollapsedResultDetail$ === "object");
assert(typeof ColumnConfiguration$ === "object");
assert(typeof ConflictingItem$ === "object");
assert(typeof ConfluenceAttachmentConfiguration$ === "object");
assert(typeof ConfluenceAttachmentToIndexFieldMapping$ === "object");
assert(typeof ConfluenceBlogConfiguration$ === "object");
assert(typeof ConfluenceBlogToIndexFieldMapping$ === "object");
assert(typeof ConfluenceConfiguration$ === "object");
assert(typeof ConfluencePageConfiguration$ === "object");
assert(typeof ConfluencePageToIndexFieldMapping$ === "object");
assert(typeof ConfluenceSpaceConfiguration$ === "object");
assert(typeof ConfluenceSpaceToIndexFieldMapping$ === "object");
assert(typeof ConnectionConfiguration$ === "object");
assert(typeof ContentSourceConfiguration$ === "object");
assert(typeof Correction$ === "object");
assert(typeof CreateAccessControlConfigurationRequest$ === "object");
assert(typeof CreateAccessControlConfigurationResponse$ === "object");
assert(typeof CreateDataSourceRequest$ === "object");
assert(typeof CreateDataSourceResponse$ === "object");
assert(typeof CreateExperienceRequest$ === "object");
assert(typeof CreateExperienceResponse$ === "object");
assert(typeof CreateFaqRequest$ === "object");
assert(typeof CreateFaqResponse$ === "object");
assert(typeof CreateFeaturedResultsSetRequest$ === "object");
assert(typeof CreateFeaturedResultsSetResponse$ === "object");
assert(typeof CreateIndexRequest$ === "object");
assert(typeof CreateIndexResponse$ === "object");
assert(typeof CreateQuerySuggestionsBlockListRequest$ === "object");
assert(typeof CreateQuerySuggestionsBlockListResponse$ === "object");
assert(typeof CreateThesaurusRequest$ === "object");
assert(typeof CreateThesaurusResponse$ === "object");
assert(typeof CustomDocumentEnrichmentConfiguration$ === "object");
assert(typeof DatabaseConfiguration$ === "object");
assert(typeof DataSourceConfiguration$ === "object");
assert(typeof DataSourceGroup$ === "object");
assert(typeof DataSourceSummary$ === "object");
assert(typeof DataSourceSyncJob$ === "object");
assert(typeof DataSourceSyncJobMetrics$ === "object");
assert(typeof DataSourceSyncJobMetricTarget$ === "object");
assert(typeof DataSourceToIndexFieldMapping$ === "object");
assert(typeof DataSourceVpcConfiguration$ === "object");
assert(typeof DeleteAccessControlConfigurationRequest$ === "object");
assert(typeof DeleteAccessControlConfigurationResponse$ === "object");
assert(typeof DeleteDataSourceRequest$ === "object");
assert(typeof DeleteExperienceRequest$ === "object");
assert(typeof DeleteExperienceResponse$ === "object");
assert(typeof DeleteFaqRequest$ === "object");
assert(typeof DeleteIndexRequest$ === "object");
assert(typeof DeletePrincipalMappingRequest$ === "object");
assert(typeof DeleteQuerySuggestionsBlockListRequest$ === "object");
assert(typeof DeleteThesaurusRequest$ === "object");
assert(typeof DescribeAccessControlConfigurationRequest$ === "object");
assert(typeof DescribeAccessControlConfigurationResponse$ === "object");
assert(typeof DescribeDataSourceRequest$ === "object");
assert(typeof DescribeDataSourceResponse$ === "object");
assert(typeof DescribeExperienceRequest$ === "object");
assert(typeof DescribeExperienceResponse$ === "object");
assert(typeof DescribeFaqRequest$ === "object");
assert(typeof DescribeFaqResponse$ === "object");
assert(typeof DescribeFeaturedResultsSetRequest$ === "object");
assert(typeof DescribeFeaturedResultsSetResponse$ === "object");
assert(typeof DescribeIndexRequest$ === "object");
assert(typeof DescribeIndexResponse$ === "object");
assert(typeof DescribePrincipalMappingRequest$ === "object");
assert(typeof DescribePrincipalMappingResponse$ === "object");
assert(typeof DescribeQuerySuggestionsBlockListRequest$ === "object");
assert(typeof DescribeQuerySuggestionsBlockListResponse$ === "object");
assert(typeof DescribeQuerySuggestionsConfigRequest$ === "object");
assert(typeof DescribeQuerySuggestionsConfigResponse$ === "object");
assert(typeof DescribeThesaurusRequest$ === "object");
assert(typeof DescribeThesaurusResponse$ === "object");
assert(typeof DisassociateEntitiesFromExperienceRequest$ === "object");
assert(typeof DisassociateEntitiesFromExperienceResponse$ === "object");
assert(typeof DisassociatePersonasFromEntitiesRequest$ === "object");
assert(typeof DisassociatePersonasFromEntitiesResponse$ === "object");
assert(typeof Document$ === "object");
assert(typeof DocumentAttribute$ === "object");
assert(typeof DocumentAttributeCondition$ === "object");
assert(typeof DocumentAttributeTarget$ === "object");
assert(typeof DocumentAttributeValue$ === "object");
assert(typeof DocumentAttributeValueCountPair$ === "object");
assert(typeof DocumentInfo$ === "object");
assert(typeof DocumentMetadataConfiguration$ === "object");
assert(typeof DocumentRelevanceConfiguration$ === "object");
assert(typeof DocumentsMetadataConfiguration$ === "object");
assert(typeof EntityConfiguration$ === "object");
assert(typeof EntityDisplayData$ === "object");
assert(typeof EntityPersonaConfiguration$ === "object");
assert(typeof ExpandConfiguration$ === "object");
assert(typeof ExpandedResultItem$ === "object");
assert(typeof ExperienceConfiguration$ === "object");
assert(typeof ExperienceEndpoint$ === "object");
assert(typeof ExperienceEntitiesSummary$ === "object");
assert(typeof ExperiencesSummary$ === "object");
assert(typeof Facet$ === "object");
assert(typeof FacetResult$ === "object");
assert(typeof FailedEntity$ === "object");
assert(typeof FaqStatistics$ === "object");
assert(typeof FaqSummary$ === "object");
assert(typeof FeaturedDocument$ === "object");
assert(typeof FeaturedDocumentMissing$ === "object");
assert(typeof FeaturedDocumentWithMetadata$ === "object");
assert(typeof FeaturedResultsItem$ === "object");
assert(typeof FeaturedResultsSet$ === "object");
assert(typeof FeaturedResultsSetSummary$ === "object");
assert(typeof FsxConfiguration$ === "object");
assert(typeof GetQuerySuggestionsRequest$ === "object");
assert(typeof GetQuerySuggestionsResponse$ === "object");
assert(typeof GetSnapshotsRequest$ === "object");
assert(typeof GetSnapshotsResponse$ === "object");
assert(typeof GitHubConfiguration$ === "object");
assert(typeof GitHubDocumentCrawlProperties$ === "object");
assert(typeof GoogleDriveConfiguration$ === "object");
assert(typeof GroupMembers$ === "object");
assert(typeof GroupOrderingIdSummary$ === "object");
assert(typeof GroupSummary$ === "object");
assert(typeof HierarchicalPrincipal$ === "object");
assert(typeof Highlight$ === "object");
assert(typeof HookConfiguration$ === "object");
assert(typeof IndexConfigurationSummary$ === "object");
assert(typeof IndexStatistics$ === "object");
assert(typeof InlineCustomDocumentEnrichmentConfiguration$ === "object");
assert(typeof JiraConfiguration$ === "object");
assert(typeof JsonTokenTypeConfiguration$ === "object");
assert(typeof JwtTokenTypeConfiguration$ === "object");
assert(typeof ListAccessControlConfigurationsRequest$ === "object");
assert(typeof ListAccessControlConfigurationsResponse$ === "object");
assert(typeof ListDataSourcesRequest$ === "object");
assert(typeof ListDataSourcesResponse$ === "object");
assert(typeof ListDataSourceSyncJobsRequest$ === "object");
assert(typeof ListDataSourceSyncJobsResponse$ === "object");
assert(typeof ListEntityPersonasRequest$ === "object");
assert(typeof ListEntityPersonasResponse$ === "object");
assert(typeof ListExperienceEntitiesRequest$ === "object");
assert(typeof ListExperienceEntitiesResponse$ === "object");
assert(typeof ListExperiencesRequest$ === "object");
assert(typeof ListExperiencesResponse$ === "object");
assert(typeof ListFaqsRequest$ === "object");
assert(typeof ListFaqsResponse$ === "object");
assert(typeof ListFeaturedResultsSetsRequest$ === "object");
assert(typeof ListFeaturedResultsSetsResponse$ === "object");
assert(typeof ListGroupsOlderThanOrderingIdRequest$ === "object");
assert(typeof ListGroupsOlderThanOrderingIdResponse$ === "object");
assert(typeof ListIndicesRequest$ === "object");
assert(typeof ListIndicesResponse$ === "object");
assert(typeof ListQuerySuggestionsBlockListsRequest$ === "object");
assert(typeof ListQuerySuggestionsBlockListsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListThesauriRequest$ === "object");
assert(typeof ListThesauriResponse$ === "object");
assert(typeof MemberGroup$ === "object");
assert(typeof MemberUser$ === "object");
assert(typeof OneDriveConfiguration$ === "object");
assert(typeof OneDriveUsers$ === "object");
assert(typeof OnPremiseConfiguration$ === "object");
assert(typeof PersonasSummary$ === "object");
assert(typeof Principal$ === "object");
assert(typeof ProxyConfiguration$ === "object");
assert(typeof PutPrincipalMappingRequest$ === "object");
assert(typeof QueryRequest$ === "object");
assert(typeof QueryResult$ === "object");
assert(typeof QueryResultItem$ === "object");
assert(typeof QuerySuggestionsBlockListSummary$ === "object");
assert(typeof QuipConfiguration$ === "object");
assert(typeof Relevance$ === "object");
assert(typeof RelevanceFeedback$ === "object");
assert(typeof RetrieveRequest$ === "object");
assert(typeof RetrieveResult$ === "object");
assert(typeof RetrieveResultItem$ === "object");
assert(typeof S3DataSourceConfiguration$ === "object");
assert(typeof S3Path$ === "object");
assert(typeof SaaSConfiguration$ === "object");
assert(typeof SalesforceChatterFeedConfiguration$ === "object");
assert(typeof SalesforceConfiguration$ === "object");
assert(typeof SalesforceCustomKnowledgeArticleTypeConfiguration$ === "object");
assert(typeof SalesforceKnowledgeArticleConfiguration$ === "object");
assert(typeof SalesforceStandardKnowledgeArticleTypeConfiguration$ === "object");
assert(typeof SalesforceStandardObjectAttachmentConfiguration$ === "object");
assert(typeof SalesforceStandardObjectConfiguration$ === "object");
assert(typeof ScoreAttributes$ === "object");
assert(typeof Search$ === "object");
assert(typeof SeedUrlConfiguration$ === "object");
assert(typeof ServerSideEncryptionConfiguration$ === "object");
assert(typeof ServiceNowConfiguration$ === "object");
assert(typeof ServiceNowKnowledgeArticleConfiguration$ === "object");
assert(typeof ServiceNowServiceCatalogConfiguration$ === "object");
assert(typeof SharePointConfiguration$ === "object");
assert(typeof SiteMapsConfiguration$ === "object");
assert(typeof SlackConfiguration$ === "object");
assert(typeof SortingConfiguration$ === "object");
assert(typeof SourceDocument$ === "object");
assert(typeof SpellCorrectedQuery$ === "object");
assert(typeof SpellCorrectionConfiguration$ === "object");
assert(typeof SqlConfiguration$ === "object");
assert(typeof StartDataSourceSyncJobRequest$ === "object");
assert(typeof StartDataSourceSyncJobResponse$ === "object");
assert(typeof Status$ === "object");
assert(typeof StopDataSourceSyncJobRequest$ === "object");
assert(typeof SubmitFeedbackRequest$ === "object");
assert(typeof SuggestableConfig$ === "object");
assert(typeof Suggestion$ === "object");
assert(typeof SuggestionHighlight$ === "object");
assert(typeof SuggestionTextWithHighlights$ === "object");
assert(typeof SuggestionValue$ === "object");
assert(typeof TableCell$ === "object");
assert(typeof TableExcerpt$ === "object");
assert(typeof TableRow$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TemplateConfiguration$ === "object");
assert(typeof TextDocumentStatistics$ === "object");
assert(typeof TextWithHighlights$ === "object");
assert(typeof ThesaurusSummary$ === "object");
assert(typeof TimeRange$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAccessControlConfigurationRequest$ === "object");
assert(typeof UpdateAccessControlConfigurationResponse$ === "object");
assert(typeof UpdateDataSourceRequest$ === "object");
assert(typeof UpdateExperienceRequest$ === "object");
assert(typeof UpdateFeaturedResultsSetRequest$ === "object");
assert(typeof UpdateFeaturedResultsSetResponse$ === "object");
assert(typeof UpdateIndexRequest$ === "object");
assert(typeof UpdateQuerySuggestionsBlockListRequest$ === "object");
assert(typeof UpdateQuerySuggestionsConfigRequest$ === "object");
assert(typeof UpdateThesaurusRequest$ === "object");
assert(typeof Urls$ === "object");
assert(typeof UserContext$ === "object");
assert(typeof UserGroupResolutionConfiguration$ === "object");
assert(typeof UserIdentityConfiguration$ === "object");
assert(typeof UserTokenConfiguration$ === "object");
assert(typeof Warning$ === "object");
assert(typeof WebCrawlerConfiguration$ === "object");
assert(typeof WorkDocsConfiguration$ === "object");
// enums
assert(typeof AdditionalResultAttributeValueType === "object");
assert(typeof AlfrescoEntity === "object");
assert(typeof AttributeSuggestionsMode === "object");
assert(typeof ConditionOperator === "object");
assert(typeof ConfluenceAttachmentFieldName === "object");
assert(typeof ConfluenceAuthenticationType === "object");
assert(typeof ConfluenceBlogFieldName === "object");
assert(typeof ConfluencePageFieldName === "object");
assert(typeof ConfluenceSpaceFieldName === "object");
assert(typeof ConfluenceVersion === "object");
assert(typeof ContentType === "object");
assert(typeof DatabaseEngineType === "object");
assert(typeof DataSourceStatus === "object");
assert(typeof DataSourceSyncJobStatus === "object");
assert(typeof DataSourceType === "object");
assert(typeof DocumentAttributeValueType === "object");
assert(typeof DocumentStatus === "object");
assert(typeof EndpointType === "object");
assert(typeof EntityType === "object");
assert(typeof ErrorCode === "object");
assert(typeof ExperienceStatus === "object");
assert(typeof FaqFileFormat === "object");
assert(typeof FaqStatus === "object");
assert(typeof FeaturedResultsSetStatus === "object");
assert(typeof FsxFileSystemType === "object");
assert(typeof HighlightType === "object");
assert(typeof IndexEdition === "object");
assert(typeof IndexStatus === "object");
assert(typeof Interval === "object");
assert(typeof IssueSubEntity === "object");
assert(typeof KeyLocation === "object");
assert(typeof MetricType === "object");
assert(typeof MissingAttributeKeyStrategy === "object");
assert(typeof Mode === "object");
assert(typeof Order === "object");
assert(typeof Persona === "object");
assert(typeof PrincipalMappingStatus === "object");
assert(typeof PrincipalType === "object");
assert(typeof QueryIdentifiersEnclosingOption === "object");
assert(typeof QueryResultFormat === "object");
assert(typeof QueryResultType === "object");
assert(typeof QuerySuggestionsBlockListStatus === "object");
assert(typeof QuerySuggestionsStatus === "object");
assert(typeof ReadAccessType === "object");
assert(typeof RelevanceType === "object");
assert(typeof SalesforceChatterFeedIncludeFilterType === "object");
assert(typeof SalesforceKnowledgeArticleState === "object");
assert(typeof SalesforceStandardObjectName === "object");
assert(typeof ScoreConfidence === "object");
assert(typeof ServiceNowAuthenticationType === "object");
assert(typeof ServiceNowBuildVersionType === "object");
assert(typeof SharePointOnlineAuthenticationType === "object");
assert(typeof SharePointVersion === "object");
assert(typeof SlackEntity === "object");
assert(typeof SortOrder === "object");
assert(typeof SuggestionType === "object");
assert(typeof ThesaurusStatus === "object");
assert(typeof Type === "object");
assert(typeof UserContextPolicy === "object");
assert(typeof UserGroupResolutionMode === "object");
assert(typeof WarningCode === "object");
assert(typeof WebCrawlerMode === "object");
// errors
assert(AccessDeniedException.prototype instanceof KendraServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof KendraServiceException);
assert(typeof ConflictException$ === "object");
assert(FeaturedResultsConflictException.prototype instanceof KendraServiceException);
assert(typeof FeaturedResultsConflictException$ === "object");
assert(InternalServerException.prototype instanceof KendraServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidRequestException.prototype instanceof KendraServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(ResourceAlreadyExistException.prototype instanceof KendraServiceException);
assert(typeof ResourceAlreadyExistException$ === "object");
assert(ResourceInUseException.prototype instanceof KendraServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof KendraServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourceUnavailableException.prototype instanceof KendraServiceException);
assert(typeof ResourceUnavailableException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof KendraServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof KendraServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof KendraServiceException);
assert(typeof ValidationException$ === "object");
assert(KendraServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetSnapshots === "function");
assert(typeof paginateListAccessControlConfigurations === "function");
assert(typeof paginateListDataSourceSyncJobs === "function");
assert(typeof paginateListDataSources === "function");
assert(typeof paginateListEntityPersonas === "function");
assert(typeof paginateListExperienceEntities === "function");
assert(typeof paginateListExperiences === "function");
assert(typeof paginateListFaqs === "function");
assert(typeof paginateListGroupsOlderThanOrderingId === "function");
assert(typeof paginateListIndices === "function");
assert(typeof paginateListQuerySuggestionsBlockLists === "function");
assert(typeof paginateListThesauri === "function");
console.log(`Kendra index test passed.`);
