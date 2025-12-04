import {
  AdditionalResultAttributeValueType,
  AlfrescoEntity,
  AssociateEntitiesToExperienceCommand,
  AssociatePersonasToEntitiesCommand,
  AttributeSuggestionsMode,
  BatchDeleteDocumentCommand,
  BatchDeleteFeaturedResultsSetCommand,
  BatchGetDocumentStatusCommand,
  BatchPutDocumentCommand,
  ClearQuerySuggestionsCommand,
  ConditionOperator,
  ConfluenceAttachmentFieldName,
  ConfluenceAuthenticationType,
  ConfluenceBlogFieldName,
  ConfluencePageFieldName,
  ConfluenceSpaceFieldName,
  ConfluenceVersion,
  ContentType,
  CreateAccessControlConfigurationCommand,
  CreateDataSourceCommand,
  CreateExperienceCommand,
  CreateFaqCommand,
  CreateFeaturedResultsSetCommand,
  CreateIndexCommand,
  CreateQuerySuggestionsBlockListCommand,
  CreateThesaurusCommand,
  DataSourceStatus,
  DataSourceSyncJobStatus,
  DataSourceType,
  DatabaseEngineType,
  DeleteAccessControlConfigurationCommand,
  DeleteDataSourceCommand,
  DeleteExperienceCommand,
  DeleteFaqCommand,
  DeleteIndexCommand,
  DeletePrincipalMappingCommand,
  DeleteQuerySuggestionsBlockListCommand,
  DeleteThesaurusCommand,
  DescribeAccessControlConfigurationCommand,
  DescribeDataSourceCommand,
  DescribeExperienceCommand,
  DescribeFaqCommand,
  DescribeFeaturedResultsSetCommand,
  DescribeIndexCommand,
  DescribePrincipalMappingCommand,
  DescribeQuerySuggestionsBlockListCommand,
  DescribeQuerySuggestionsConfigCommand,
  DescribeThesaurusCommand,
  DisassociateEntitiesFromExperienceCommand,
  DisassociatePersonasFromEntitiesCommand,
  DocumentAttributeValueType,
  DocumentStatus,
  EndpointType,
  EntityType,
  ErrorCode,
  ExperienceStatus,
  FaqFileFormat,
  FaqStatus,
  FeaturedResultsSetStatus,
  FsxFileSystemType,
  GetQuerySuggestionsCommand,
  GetSnapshotsCommand,
  HighlightType,
  IndexEdition,
  IndexStatus,
  Interval,
  IssueSubEntity,
  Kendra,
  KendraClient,
  KendraServiceException,
  KeyLocation,
  ListAccessControlConfigurationsCommand,
  ListDataSourceSyncJobsCommand,
  ListDataSourcesCommand,
  ListEntityPersonasCommand,
  ListExperienceEntitiesCommand,
  ListExperiencesCommand,
  ListFaqsCommand,
  ListFeaturedResultsSetsCommand,
  ListGroupsOlderThanOrderingIdCommand,
  ListIndicesCommand,
  ListQuerySuggestionsBlockListsCommand,
  ListTagsForResourceCommand,
  ListThesauriCommand,
  MetricType,
  MissingAttributeKeyStrategy,
  Mode,
  Order,
  Persona,
  PrincipalMappingStatus,
  PrincipalType,
  PutPrincipalMappingCommand,
  QueryCommand,
  QueryIdentifiersEnclosingOption,
  QueryResultFormat,
  QueryResultType,
  QuerySuggestionsBlockListStatus,
  QuerySuggestionsStatus,
  ReadAccessType,
  RelevanceType,
  RetrieveCommand,
  SalesforceChatterFeedIncludeFilterType,
  SalesforceKnowledgeArticleState,
  SalesforceStandardObjectName,
  ScoreConfidence,
  ServiceNowAuthenticationType,
  ServiceNowBuildVersionType,
  SharePointOnlineAuthenticationType,
  SharePointVersion,
  SlackEntity,
  SortOrder,
  StartDataSourceSyncJobCommand,
  StopDataSourceSyncJobCommand,
  SubmitFeedbackCommand,
  SuggestionType,
  TagResourceCommand,
  ThesaurusStatus,
  Type,
  UntagResourceCommand,
  UpdateAccessControlConfigurationCommand,
  UpdateDataSourceCommand,
  UpdateExperienceCommand,
  UpdateFeaturedResultsSetCommand,
  UpdateIndexCommand,
  UpdateQuerySuggestionsBlockListCommand,
  UpdateQuerySuggestionsConfigCommand,
  UpdateThesaurusCommand,
  UserContextPolicy,
  UserGroupResolutionMode,
  WarningCode,
  WebCrawlerMode,
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
assert(typeof AssociatePersonasToEntitiesCommand === "function");
assert(typeof BatchDeleteDocumentCommand === "function");
assert(typeof BatchDeleteFeaturedResultsSetCommand === "function");
assert(typeof BatchGetDocumentStatusCommand === "function");
assert(typeof BatchPutDocumentCommand === "function");
assert(typeof ClearQuerySuggestionsCommand === "function");
assert(typeof CreateAccessControlConfigurationCommand === "function");
assert(typeof CreateDataSourceCommand === "function");
assert(typeof CreateExperienceCommand === "function");
assert(typeof CreateFaqCommand === "function");
assert(typeof CreateFeaturedResultsSetCommand === "function");
assert(typeof CreateIndexCommand === "function");
assert(typeof CreateQuerySuggestionsBlockListCommand === "function");
assert(typeof CreateThesaurusCommand === "function");
assert(typeof DeleteAccessControlConfigurationCommand === "function");
assert(typeof DeleteDataSourceCommand === "function");
assert(typeof DeleteExperienceCommand === "function");
assert(typeof DeleteFaqCommand === "function");
assert(typeof DeleteIndexCommand === "function");
assert(typeof DeletePrincipalMappingCommand === "function");
assert(typeof DeleteQuerySuggestionsBlockListCommand === "function");
assert(typeof DeleteThesaurusCommand === "function");
assert(typeof DescribeAccessControlConfigurationCommand === "function");
assert(typeof DescribeDataSourceCommand === "function");
assert(typeof DescribeExperienceCommand === "function");
assert(typeof DescribeFaqCommand === "function");
assert(typeof DescribeFeaturedResultsSetCommand === "function");
assert(typeof DescribeIndexCommand === "function");
assert(typeof DescribePrincipalMappingCommand === "function");
assert(typeof DescribeQuerySuggestionsBlockListCommand === "function");
assert(typeof DescribeQuerySuggestionsConfigCommand === "function");
assert(typeof DescribeThesaurusCommand === "function");
assert(typeof DisassociateEntitiesFromExperienceCommand === "function");
assert(typeof DisassociatePersonasFromEntitiesCommand === "function");
assert(typeof GetQuerySuggestionsCommand === "function");
assert(typeof GetSnapshotsCommand === "function");
assert(typeof ListAccessControlConfigurationsCommand === "function");
assert(typeof ListDataSourcesCommand === "function");
assert(typeof ListDataSourceSyncJobsCommand === "function");
assert(typeof ListEntityPersonasCommand === "function");
assert(typeof ListExperienceEntitiesCommand === "function");
assert(typeof ListExperiencesCommand === "function");
assert(typeof ListFaqsCommand === "function");
assert(typeof ListFeaturedResultsSetsCommand === "function");
assert(typeof ListGroupsOlderThanOrderingIdCommand === "function");
assert(typeof ListIndicesCommand === "function");
assert(typeof ListQuerySuggestionsBlockListsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListThesauriCommand === "function");
assert(typeof PutPrincipalMappingCommand === "function");
assert(typeof QueryCommand === "function");
assert(typeof RetrieveCommand === "function");
assert(typeof StartDataSourceSyncJobCommand === "function");
assert(typeof StopDataSourceSyncJobCommand === "function");
assert(typeof SubmitFeedbackCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAccessControlConfigurationCommand === "function");
assert(typeof UpdateDataSourceCommand === "function");
assert(typeof UpdateExperienceCommand === "function");
assert(typeof UpdateFeaturedResultsSetCommand === "function");
assert(typeof UpdateIndexCommand === "function");
assert(typeof UpdateQuerySuggestionsBlockListCommand === "function");
assert(typeof UpdateQuerySuggestionsConfigCommand === "function");
assert(typeof UpdateThesaurusCommand === "function");
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
