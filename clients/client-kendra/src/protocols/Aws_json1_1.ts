// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateEntitiesToExperienceCommandInput,
  AssociateEntitiesToExperienceCommandOutput,
} from "../commands/AssociateEntitiesToExperienceCommand";
import {
  AssociatePersonasToEntitiesCommandInput,
  AssociatePersonasToEntitiesCommandOutput,
} from "../commands/AssociatePersonasToEntitiesCommand";
import {
  BatchDeleteDocumentCommandInput,
  BatchDeleteDocumentCommandOutput,
} from "../commands/BatchDeleteDocumentCommand";
import {
  BatchDeleteFeaturedResultsSetCommandInput,
  BatchDeleteFeaturedResultsSetCommandOutput,
} from "../commands/BatchDeleteFeaturedResultsSetCommand";
import {
  BatchGetDocumentStatusCommandInput,
  BatchGetDocumentStatusCommandOutput,
} from "../commands/BatchGetDocumentStatusCommand";
import { BatchPutDocumentCommandInput, BatchPutDocumentCommandOutput } from "../commands/BatchPutDocumentCommand";
import {
  ClearQuerySuggestionsCommandInput,
  ClearQuerySuggestionsCommandOutput,
} from "../commands/ClearQuerySuggestionsCommand";
import {
  CreateAccessControlConfigurationCommandInput,
  CreateAccessControlConfigurationCommandOutput,
} from "../commands/CreateAccessControlConfigurationCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "../commands/CreateDataSourceCommand";
import { CreateExperienceCommandInput, CreateExperienceCommandOutput } from "../commands/CreateExperienceCommand";
import { CreateFaqCommandInput, CreateFaqCommandOutput } from "../commands/CreateFaqCommand";
import {
  CreateFeaturedResultsSetCommandInput,
  CreateFeaturedResultsSetCommandOutput,
} from "../commands/CreateFeaturedResultsSetCommand";
import { CreateIndexCommandInput, CreateIndexCommandOutput } from "../commands/CreateIndexCommand";
import {
  CreateQuerySuggestionsBlockListCommandInput,
  CreateQuerySuggestionsBlockListCommandOutput,
} from "../commands/CreateQuerySuggestionsBlockListCommand";
import { CreateThesaurusCommandInput, CreateThesaurusCommandOutput } from "../commands/CreateThesaurusCommand";
import {
  DeleteAccessControlConfigurationCommandInput,
  DeleteAccessControlConfigurationCommandOutput,
} from "../commands/DeleteAccessControlConfigurationCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "../commands/DeleteDataSourceCommand";
import { DeleteExperienceCommandInput, DeleteExperienceCommandOutput } from "../commands/DeleteExperienceCommand";
import { DeleteFaqCommandInput, DeleteFaqCommandOutput } from "../commands/DeleteFaqCommand";
import { DeleteIndexCommandInput, DeleteIndexCommandOutput } from "../commands/DeleteIndexCommand";
import {
  DeletePrincipalMappingCommandInput,
  DeletePrincipalMappingCommandOutput,
} from "../commands/DeletePrincipalMappingCommand";
import {
  DeleteQuerySuggestionsBlockListCommandInput,
  DeleteQuerySuggestionsBlockListCommandOutput,
} from "../commands/DeleteQuerySuggestionsBlockListCommand";
import { DeleteThesaurusCommandInput, DeleteThesaurusCommandOutput } from "../commands/DeleteThesaurusCommand";
import {
  DescribeAccessControlConfigurationCommandInput,
  DescribeAccessControlConfigurationCommandOutput,
} from "../commands/DescribeAccessControlConfigurationCommand";
import { DescribeDataSourceCommandInput, DescribeDataSourceCommandOutput } from "../commands/DescribeDataSourceCommand";
import { DescribeExperienceCommandInput, DescribeExperienceCommandOutput } from "../commands/DescribeExperienceCommand";
import { DescribeFaqCommandInput, DescribeFaqCommandOutput } from "../commands/DescribeFaqCommand";
import {
  DescribeFeaturedResultsSetCommandInput,
  DescribeFeaturedResultsSetCommandOutput,
} from "../commands/DescribeFeaturedResultsSetCommand";
import { DescribeIndexCommandInput, DescribeIndexCommandOutput } from "../commands/DescribeIndexCommand";
import {
  DescribePrincipalMappingCommandInput,
  DescribePrincipalMappingCommandOutput,
} from "../commands/DescribePrincipalMappingCommand";
import {
  DescribeQuerySuggestionsBlockListCommandInput,
  DescribeQuerySuggestionsBlockListCommandOutput,
} from "../commands/DescribeQuerySuggestionsBlockListCommand";
import {
  DescribeQuerySuggestionsConfigCommandInput,
  DescribeQuerySuggestionsConfigCommandOutput,
} from "../commands/DescribeQuerySuggestionsConfigCommand";
import { DescribeThesaurusCommandInput, DescribeThesaurusCommandOutput } from "../commands/DescribeThesaurusCommand";
import {
  DisassociateEntitiesFromExperienceCommandInput,
  DisassociateEntitiesFromExperienceCommandOutput,
} from "../commands/DisassociateEntitiesFromExperienceCommand";
import {
  DisassociatePersonasFromEntitiesCommandInput,
  DisassociatePersonasFromEntitiesCommandOutput,
} from "../commands/DisassociatePersonasFromEntitiesCommand";
import {
  GetQuerySuggestionsCommandInput,
  GetQuerySuggestionsCommandOutput,
} from "../commands/GetQuerySuggestionsCommand";
import { GetSnapshotsCommandInput, GetSnapshotsCommandOutput } from "../commands/GetSnapshotsCommand";
import {
  ListAccessControlConfigurationsCommandInput,
  ListAccessControlConfigurationsCommandOutput,
} from "../commands/ListAccessControlConfigurationsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "../commands/ListDataSourcesCommand";
import {
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput,
} from "../commands/ListDataSourceSyncJobsCommand";
import { ListEntityPersonasCommandInput, ListEntityPersonasCommandOutput } from "../commands/ListEntityPersonasCommand";
import {
  ListExperienceEntitiesCommandInput,
  ListExperienceEntitiesCommandOutput,
} from "../commands/ListExperienceEntitiesCommand";
import { ListExperiencesCommandInput, ListExperiencesCommandOutput } from "../commands/ListExperiencesCommand";
import { ListFaqsCommandInput, ListFaqsCommandOutput } from "../commands/ListFaqsCommand";
import {
  ListFeaturedResultsSetsCommandInput,
  ListFeaturedResultsSetsCommandOutput,
} from "../commands/ListFeaturedResultsSetsCommand";
import {
  ListGroupsOlderThanOrderingIdCommandInput,
  ListGroupsOlderThanOrderingIdCommandOutput,
} from "../commands/ListGroupsOlderThanOrderingIdCommand";
import { ListIndicesCommandInput, ListIndicesCommandOutput } from "../commands/ListIndicesCommand";
import {
  ListQuerySuggestionsBlockListsCommandInput,
  ListQuerySuggestionsBlockListsCommandOutput,
} from "../commands/ListQuerySuggestionsBlockListsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListThesauriCommandInput, ListThesauriCommandOutput } from "../commands/ListThesauriCommand";
import {
  PutPrincipalMappingCommandInput,
  PutPrincipalMappingCommandOutput,
} from "../commands/PutPrincipalMappingCommand";
import { QueryCommandInput, QueryCommandOutput } from "../commands/QueryCommand";
import { RetrieveCommandInput, RetrieveCommandOutput } from "../commands/RetrieveCommand";
import {
  StartDataSourceSyncJobCommandInput,
  StartDataSourceSyncJobCommandOutput,
} from "../commands/StartDataSourceSyncJobCommand";
import {
  StopDataSourceSyncJobCommandInput,
  StopDataSourceSyncJobCommandOutput,
} from "../commands/StopDataSourceSyncJobCommand";
import { SubmitFeedbackCommandInput, SubmitFeedbackCommandOutput } from "../commands/SubmitFeedbackCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAccessControlConfigurationCommandInput,
  UpdateAccessControlConfigurationCommandOutput,
} from "../commands/UpdateAccessControlConfigurationCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "../commands/UpdateDataSourceCommand";
import { UpdateExperienceCommandInput, UpdateExperienceCommandOutput } from "../commands/UpdateExperienceCommand";
import {
  UpdateFeaturedResultsSetCommandInput,
  UpdateFeaturedResultsSetCommandOutput,
} from "../commands/UpdateFeaturedResultsSetCommand";
import { UpdateIndexCommandInput, UpdateIndexCommandOutput } from "../commands/UpdateIndexCommand";
import {
  UpdateQuerySuggestionsBlockListCommandInput,
  UpdateQuerySuggestionsBlockListCommandOutput,
} from "../commands/UpdateQuerySuggestionsBlockListCommand";
import {
  UpdateQuerySuggestionsConfigCommandInput,
  UpdateQuerySuggestionsConfigCommandOutput,
} from "../commands/UpdateQuerySuggestionsConfigCommand";
import { UpdateThesaurusCommandInput, UpdateThesaurusCommandOutput } from "../commands/UpdateThesaurusCommand";
import { KendraServiceException as __BaseException } from "../models/KendraServiceException";
import {
  AccessControlListConfiguration,
  AccessDeniedException,
  AclConfiguration,
  AlfrescoConfiguration,
  AlfrescoEntity,
  AssociateEntitiesToExperienceRequest,
  AssociatePersonasToEntitiesRequest,
  AttributeSuggestionsUpdateConfig,
  AuthenticationConfiguration,
  BasicAuthenticationConfiguration,
  BatchDeleteDocumentRequest,
  BatchDeleteFeaturedResultsSetRequest,
  BatchGetDocumentStatusRequest,
  BatchPutDocumentRequest,
  BoxConfiguration,
  CapacityUnitsConfiguration,
  ClearQuerySuggestionsRequest,
  ColumnConfiguration,
  ConflictException,
  ConfluenceAttachmentConfiguration,
  ConfluenceAttachmentToIndexFieldMapping,
  ConfluenceBlogConfiguration,
  ConfluenceBlogToIndexFieldMapping,
  ConfluenceConfiguration,
  ConfluencePageConfiguration,
  ConfluencePageToIndexFieldMapping,
  ConfluenceSpaceConfiguration,
  ConfluenceSpaceToIndexFieldMapping,
  ConnectionConfiguration,
  ContentSourceConfiguration,
  CreateAccessControlConfigurationRequest,
  CreateDataSourceRequest,
  CreateExperienceRequest,
  CreateFaqRequest,
  CreateFeaturedResultsSetRequest,
  CreateIndexRequest,
  CreateQuerySuggestionsBlockListRequest,
  CreateThesaurusRequest,
  CustomDocumentEnrichmentConfiguration,
  DatabaseConfiguration,
  DataSourceConfiguration,
  DataSourceGroup,
  DataSourceSummary,
  DataSourceSyncJob,
  DataSourceSyncJobMetricTarget,
  DataSourceToIndexFieldMapping,
  DataSourceVpcConfiguration,
  DeleteAccessControlConfigurationRequest,
  DeleteDataSourceRequest,
  DeleteExperienceRequest,
  DeleteFaqRequest,
  DeleteIndexRequest,
  DeletePrincipalMappingRequest,
  DeleteQuerySuggestionsBlockListRequest,
  DeleteThesaurusRequest,
  DescribeAccessControlConfigurationRequest,
  DescribeDataSourceRequest,
  DescribeDataSourceResponse,
  DescribeExperienceRequest,
  DescribeExperienceResponse,
  DescribeFaqRequest,
  DescribeFaqResponse,
  DescribeFeaturedResultsSetRequest,
  DescribeIndexRequest,
  DescribeIndexResponse,
  DescribePrincipalMappingRequest,
  DescribePrincipalMappingResponse,
  DescribeQuerySuggestionsBlockListRequest,
  DescribeQuerySuggestionsBlockListResponse,
  DescribeQuerySuggestionsConfigRequest,
  DescribeQuerySuggestionsConfigResponse,
  DescribeThesaurusRequest,
  DescribeThesaurusResponse,
  DisassociateEntitiesFromExperienceRequest,
  DisassociatePersonasFromEntitiesRequest,
  Document,
  DocumentAttribute,
  DocumentAttributeCondition,
  DocumentAttributeTarget,
  DocumentAttributeValue,
  DocumentInfo,
  DocumentMetadataConfiguration,
  DocumentRelevanceConfiguration,
  DocumentsMetadataConfiguration,
  EntityConfiguration,
  EntityPersonaConfiguration,
  ExperienceConfiguration,
  ExperiencesSummary,
  FaqSummary,
  FeaturedDocument,
  FeaturedResultsConflictException,
  FeaturedResultsItem,
  FsxConfiguration,
  GetQuerySuggestionsResponse,
  GetSnapshotsRequest,
  GetSnapshotsResponse,
  GitHubConfiguration,
  GitHubDocumentCrawlProperties,
  GoogleDriveConfiguration,
  GroupMembers,
  GroupOrderingIdSummary,
  HierarchicalPrincipal,
  HookConfiguration,
  IndexConfigurationSummary,
  InlineCustomDocumentEnrichmentConfiguration,
  InternalServerException,
  InvalidRequestException,
  IssueSubEntity,
  JiraConfiguration,
  JsonTokenTypeConfiguration,
  JwtTokenTypeConfiguration,
  ListAccessControlConfigurationsRequest,
  ListDataSourcesRequest,
  ListDataSourcesResponse,
  ListDataSourceSyncJobsRequest,
  ListDataSourceSyncJobsResponse,
  ListEntityPersonasRequest,
  ListEntityPersonasResponse,
  ListExperienceEntitiesRequest,
  ListExperiencesRequest,
  ListExperiencesResponse,
  ListFaqsRequest,
  ListFaqsResponse,
  ListFeaturedResultsSetsRequest,
  ListGroupsOlderThanOrderingIdRequest,
  ListIndicesRequest,
  ListIndicesResponse,
  ListQuerySuggestionsBlockListsRequest,
  ListQuerySuggestionsBlockListsResponse,
  ListTagsForResourceRequest,
  ListThesauriRequest,
  ListThesauriResponse,
  MemberGroup,
  MemberUser,
  OneDriveConfiguration,
  OneDriveUsers,
  OnPremiseConfiguration,
  PersonasSummary,
  Principal,
  ProxyConfiguration,
  PutPrincipalMappingRequest,
  QuerySuggestionsBlockListSummary,
  QuipConfiguration,
  Relevance,
  ResourceAlreadyExistException,
  ResourceNotFoundException,
  ResourceUnavailableException,
  S3DataSourceConfiguration,
  S3Path,
  SaaSConfiguration,
  SalesforceChatterFeedConfiguration,
  SalesforceChatterFeedIncludeFilterType,
  SalesforceConfiguration,
  SalesforceCustomKnowledgeArticleTypeConfiguration,
  SalesforceKnowledgeArticleConfiguration,
  SalesforceKnowledgeArticleState,
  SalesforceStandardKnowledgeArticleTypeConfiguration,
  SalesforceStandardObjectAttachmentConfiguration,
  SalesforceStandardObjectConfiguration,
  Search,
  SeedUrlConfiguration,
  ServerSideEncryptionConfiguration,
  ServiceNowConfiguration,
  ServiceNowKnowledgeArticleConfiguration,
  ServiceNowServiceCatalogConfiguration,
  ServiceQuotaExceededException,
  SharePointConfiguration,
  SiteMapsConfiguration,
  SlackConfiguration,
  SlackEntity,
  SortingConfiguration,
  SourceDocument,
  SpellCorrectionConfiguration,
  SqlConfiguration,
  SuggestableConfig,
  Suggestion,
  SuggestionType,
  Tag,
  TemplateConfiguration,
  ThesaurusSummary,
  ThrottlingException,
  TimeRange,
  Urls,
  UserContext,
  UserGroupResolutionConfiguration,
  UserIdentityConfiguration,
  UserTokenConfiguration,
  ValidationException,
  WebCrawlerConfiguration,
  WorkDocsConfiguration,
} from "../models/models_0";
import {
  AttributeFilter,
  AttributeSuggestionsGetConfig,
  ClickFeedback,
  DocumentAttributeValueCountPair,
  Facet,
  FacetResult,
  GetQuerySuggestionsRequest,
  QueryRequest,
  QueryResult,
  QueryResultItem,
  RelevanceFeedback,
  ResourceInUseException,
  RetrieveRequest,
  RetrieveResult,
  RetrieveResultItem,
  StartDataSourceSyncJobRequest,
  StopDataSourceSyncJobRequest,
  SubmitFeedbackRequest,
  TagResourceRequest,
  UntagResourceRequest,
  UpdateAccessControlConfigurationRequest,
  UpdateDataSourceRequest,
  UpdateExperienceRequest,
  UpdateFeaturedResultsSetRequest,
  UpdateIndexRequest,
  UpdateQuerySuggestionsBlockListRequest,
  UpdateQuerySuggestionsConfigRequest,
  UpdateThesaurusRequest,
} from "../models/models_1";

/**
 * serializeAws_json1_1AssociateEntitiesToExperienceCommand
 */
export const se_AssociateEntitiesToExperienceCommand = async (
  input: AssociateEntitiesToExperienceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateEntitiesToExperience");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociatePersonasToEntitiesCommand
 */
export const se_AssociatePersonasToEntitiesCommand = async (
  input: AssociatePersonasToEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociatePersonasToEntities");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDeleteDocumentCommand
 */
export const se_BatchDeleteDocumentCommand = async (
  input: BatchDeleteDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDeleteDocument");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDeleteFeaturedResultsSetCommand
 */
export const se_BatchDeleteFeaturedResultsSetCommand = async (
  input: BatchDeleteFeaturedResultsSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDeleteFeaturedResultsSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetDocumentStatusCommand
 */
export const se_BatchGetDocumentStatusCommand = async (
  input: BatchGetDocumentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetDocumentStatus");
  let body: any;
  body = JSON.stringify(se_BatchGetDocumentStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchPutDocumentCommand
 */
export const se_BatchPutDocumentCommand = async (
  input: BatchPutDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchPutDocument");
  let body: any;
  body = JSON.stringify(se_BatchPutDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ClearQuerySuggestionsCommand
 */
export const se_ClearQuerySuggestionsCommand = async (
  input: ClearQuerySuggestionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ClearQuerySuggestions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAccessControlConfigurationCommand
 */
export const se_CreateAccessControlConfigurationCommand = async (
  input: CreateAccessControlConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAccessControlConfiguration");
  let body: any;
  body = JSON.stringify(se_CreateAccessControlConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDataSourceCommand
 */
export const se_CreateDataSourceCommand = async (
  input: CreateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDataSource");
  let body: any;
  body = JSON.stringify(se_CreateDataSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateExperienceCommand
 */
export const se_CreateExperienceCommand = async (
  input: CreateExperienceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateExperience");
  let body: any;
  body = JSON.stringify(se_CreateExperienceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFaqCommand
 */
export const se_CreateFaqCommand = async (
  input: CreateFaqCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFaq");
  let body: any;
  body = JSON.stringify(se_CreateFaqRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFeaturedResultsSetCommand
 */
export const se_CreateFeaturedResultsSetCommand = async (
  input: CreateFeaturedResultsSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFeaturedResultsSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateIndexCommand
 */
export const se_CreateIndexCommand = async (
  input: CreateIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateIndex");
  let body: any;
  body = JSON.stringify(se_CreateIndexRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateQuerySuggestionsBlockListCommand
 */
export const se_CreateQuerySuggestionsBlockListCommand = async (
  input: CreateQuerySuggestionsBlockListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateQuerySuggestionsBlockList");
  let body: any;
  body = JSON.stringify(se_CreateQuerySuggestionsBlockListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateThesaurusCommand
 */
export const se_CreateThesaurusCommand = async (
  input: CreateThesaurusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateThesaurus");
  let body: any;
  body = JSON.stringify(se_CreateThesaurusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAccessControlConfigurationCommand
 */
export const se_DeleteAccessControlConfigurationCommand = async (
  input: DeleteAccessControlConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAccessControlConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDataSourceCommand
 */
export const se_DeleteDataSourceCommand = async (
  input: DeleteDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDataSource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteExperienceCommand
 */
export const se_DeleteExperienceCommand = async (
  input: DeleteExperienceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteExperience");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFaqCommand
 */
export const se_DeleteFaqCommand = async (
  input: DeleteFaqCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFaq");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteIndexCommand
 */
export const se_DeleteIndexCommand = async (
  input: DeleteIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteIndex");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePrincipalMappingCommand
 */
export const se_DeletePrincipalMappingCommand = async (
  input: DeletePrincipalMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePrincipalMapping");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteQuerySuggestionsBlockListCommand
 */
export const se_DeleteQuerySuggestionsBlockListCommand = async (
  input: DeleteQuerySuggestionsBlockListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteQuerySuggestionsBlockList");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteThesaurusCommand
 */
export const se_DeleteThesaurusCommand = async (
  input: DeleteThesaurusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteThesaurus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAccessControlConfigurationCommand
 */
export const se_DescribeAccessControlConfigurationCommand = async (
  input: DescribeAccessControlConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAccessControlConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDataSourceCommand
 */
export const se_DescribeDataSourceCommand = async (
  input: DescribeDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDataSource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeExperienceCommand
 */
export const se_DescribeExperienceCommand = async (
  input: DescribeExperienceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeExperience");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFaqCommand
 */
export const se_DescribeFaqCommand = async (
  input: DescribeFaqCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFaq");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFeaturedResultsSetCommand
 */
export const se_DescribeFeaturedResultsSetCommand = async (
  input: DescribeFeaturedResultsSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFeaturedResultsSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeIndexCommand
 */
export const se_DescribeIndexCommand = async (
  input: DescribeIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeIndex");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePrincipalMappingCommand
 */
export const se_DescribePrincipalMappingCommand = async (
  input: DescribePrincipalMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePrincipalMapping");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeQuerySuggestionsBlockListCommand
 */
export const se_DescribeQuerySuggestionsBlockListCommand = async (
  input: DescribeQuerySuggestionsBlockListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeQuerySuggestionsBlockList");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeQuerySuggestionsConfigCommand
 */
export const se_DescribeQuerySuggestionsConfigCommand = async (
  input: DescribeQuerySuggestionsConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeQuerySuggestionsConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeThesaurusCommand
 */
export const se_DescribeThesaurusCommand = async (
  input: DescribeThesaurusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeThesaurus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateEntitiesFromExperienceCommand
 */
export const se_DisassociateEntitiesFromExperienceCommand = async (
  input: DisassociateEntitiesFromExperienceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateEntitiesFromExperience");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociatePersonasFromEntitiesCommand
 */
export const se_DisassociatePersonasFromEntitiesCommand = async (
  input: DisassociatePersonasFromEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociatePersonasFromEntities");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetQuerySuggestionsCommand
 */
export const se_GetQuerySuggestionsCommand = async (
  input: GetQuerySuggestionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetQuerySuggestions");
  let body: any;
  body = JSON.stringify(se_GetQuerySuggestionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSnapshotsCommand
 */
export const se_GetSnapshotsCommand = async (
  input: GetSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSnapshots");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAccessControlConfigurationsCommand
 */
export const se_ListAccessControlConfigurationsCommand = async (
  input: ListAccessControlConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAccessControlConfigurations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDataSourcesCommand
 */
export const se_ListDataSourcesCommand = async (
  input: ListDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDataSources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDataSourceSyncJobsCommand
 */
export const se_ListDataSourceSyncJobsCommand = async (
  input: ListDataSourceSyncJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDataSourceSyncJobs");
  let body: any;
  body = JSON.stringify(se_ListDataSourceSyncJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEntityPersonasCommand
 */
export const se_ListEntityPersonasCommand = async (
  input: ListEntityPersonasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEntityPersonas");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListExperienceEntitiesCommand
 */
export const se_ListExperienceEntitiesCommand = async (
  input: ListExperienceEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListExperienceEntities");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListExperiencesCommand
 */
export const se_ListExperiencesCommand = async (
  input: ListExperiencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListExperiences");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFaqsCommand
 */
export const se_ListFaqsCommand = async (
  input: ListFaqsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFaqs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFeaturedResultsSetsCommand
 */
export const se_ListFeaturedResultsSetsCommand = async (
  input: ListFeaturedResultsSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFeaturedResultsSets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGroupsOlderThanOrderingIdCommand
 */
export const se_ListGroupsOlderThanOrderingIdCommand = async (
  input: ListGroupsOlderThanOrderingIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListGroupsOlderThanOrderingId");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListIndicesCommand
 */
export const se_ListIndicesCommand = async (
  input: ListIndicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListIndices");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListQuerySuggestionsBlockListsCommand
 */
export const se_ListQuerySuggestionsBlockListsCommand = async (
  input: ListQuerySuggestionsBlockListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListQuerySuggestionsBlockLists");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListThesauriCommand
 */
export const se_ListThesauriCommand = async (
  input: ListThesauriCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListThesauri");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutPrincipalMappingCommand
 */
export const se_PutPrincipalMappingCommand = async (
  input: PutPrincipalMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutPrincipalMapping");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1QueryCommand
 */
export const se_QueryCommand = async (input: QueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("Query");
  let body: any;
  body = JSON.stringify(se_QueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RetrieveCommand
 */
export const se_RetrieveCommand = async (
  input: RetrieveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("Retrieve");
  let body: any;
  body = JSON.stringify(se_RetrieveRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartDataSourceSyncJobCommand
 */
export const se_StartDataSourceSyncJobCommand = async (
  input: StartDataSourceSyncJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartDataSourceSyncJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopDataSourceSyncJobCommand
 */
export const se_StopDataSourceSyncJobCommand = async (
  input: StopDataSourceSyncJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopDataSourceSyncJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SubmitFeedbackCommand
 */
export const se_SubmitFeedbackCommand = async (
  input: SubmitFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SubmitFeedback");
  let body: any;
  body = JSON.stringify(se_SubmitFeedbackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAccessControlConfigurationCommand
 */
export const se_UpdateAccessControlConfigurationCommand = async (
  input: UpdateAccessControlConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAccessControlConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDataSourceCommand
 */
export const se_UpdateDataSourceCommand = async (
  input: UpdateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDataSource");
  let body: any;
  body = JSON.stringify(se_UpdateDataSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateExperienceCommand
 */
export const se_UpdateExperienceCommand = async (
  input: UpdateExperienceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateExperience");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFeaturedResultsSetCommand
 */
export const se_UpdateFeaturedResultsSetCommand = async (
  input: UpdateFeaturedResultsSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFeaturedResultsSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateIndexCommand
 */
export const se_UpdateIndexCommand = async (
  input: UpdateIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateIndex");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateQuerySuggestionsBlockListCommand
 */
export const se_UpdateQuerySuggestionsBlockListCommand = async (
  input: UpdateQuerySuggestionsBlockListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateQuerySuggestionsBlockList");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateQuerySuggestionsConfigCommand
 */
export const se_UpdateQuerySuggestionsConfigCommand = async (
  input: UpdateQuerySuggestionsConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateQuerySuggestionsConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateThesaurusCommand
 */
export const se_UpdateThesaurusCommand = async (
  input: UpdateThesaurusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateThesaurus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssociateEntitiesToExperienceCommand
 */
export const de_AssociateEntitiesToExperienceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEntitiesToExperienceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateEntitiesToExperienceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateEntitiesToExperienceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateEntitiesToExperienceCommandError
 */
const de_AssociateEntitiesToExperienceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEntitiesToExperienceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistException":
    case "com.amazonaws.kendra#ResourceAlreadyExistException":
      throw await de_ResourceAlreadyExistExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociatePersonasToEntitiesCommand
 */
export const de_AssociatePersonasToEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePersonasToEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociatePersonasToEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociatePersonasToEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociatePersonasToEntitiesCommandError
 */
const de_AssociatePersonasToEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePersonasToEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistException":
    case "com.amazonaws.kendra#ResourceAlreadyExistException":
      throw await de_ResourceAlreadyExistExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchDeleteDocumentCommand
 */
export const de_BatchDeleteDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteDocumentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDeleteDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchDeleteDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchDeleteDocumentCommandError
 */
const de_BatchDeleteDocumentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteDocumentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchDeleteFeaturedResultsSetCommand
 */
export const de_BatchDeleteFeaturedResultsSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteFeaturedResultsSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDeleteFeaturedResultsSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchDeleteFeaturedResultsSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchDeleteFeaturedResultsSetCommandError
 */
const de_BatchDeleteFeaturedResultsSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteFeaturedResultsSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchGetDocumentStatusCommand
 */
export const de_BatchGetDocumentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDocumentStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetDocumentStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchGetDocumentStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchGetDocumentStatusCommandError
 */
const de_BatchGetDocumentStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDocumentStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchPutDocumentCommand
 */
export const de_BatchPutDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutDocumentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchPutDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchPutDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchPutDocumentCommandError
 */
const de_BatchPutDocumentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutDocumentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ClearQuerySuggestionsCommand
 */
export const de_ClearQuerySuggestionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ClearQuerySuggestionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ClearQuerySuggestionsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ClearQuerySuggestionsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1ClearQuerySuggestionsCommandError
 */
const de_ClearQuerySuggestionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ClearQuerySuggestionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateAccessControlConfigurationCommand
 */
export const de_CreateAccessControlConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessControlConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAccessControlConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAccessControlConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAccessControlConfigurationCommandError
 */
const de_CreateAccessControlConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessControlConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDataSourceCommand
 */
export const de_CreateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateDataSourceCommandError
 */
const de_CreateDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistException":
    case "com.amazonaws.kendra#ResourceAlreadyExistException":
      throw await de_ResourceAlreadyExistExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateExperienceCommand
 */
export const de_CreateExperienceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExperienceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateExperienceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateExperienceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateExperienceCommandError
 */
const de_CreateExperienceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExperienceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateFaqCommand
 */
export const de_CreateFaqCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFaqCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFaqCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateFaqCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateFaqCommandError
 */
const de_CreateFaqCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFaqCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateFeaturedResultsSetCommand
 */
export const de_CreateFeaturedResultsSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFeaturedResultsSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFeaturedResultsSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateFeaturedResultsSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateFeaturedResultsSetCommandError
 */
const de_CreateFeaturedResultsSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFeaturedResultsSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "FeaturedResultsConflictException":
    case "com.amazonaws.kendra#FeaturedResultsConflictException":
      throw await de_FeaturedResultsConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateIndexCommand
 */
export const de_CreateIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIndexCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateIndexCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateIndexCommandError
 */
const de_CreateIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistException":
    case "com.amazonaws.kendra#ResourceAlreadyExistException":
      throw await de_ResourceAlreadyExistExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateQuerySuggestionsBlockListCommand
 */
export const de_CreateQuerySuggestionsBlockListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQuerySuggestionsBlockListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateQuerySuggestionsBlockListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateQuerySuggestionsBlockListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateQuerySuggestionsBlockListCommandError
 */
const de_CreateQuerySuggestionsBlockListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQuerySuggestionsBlockListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateThesaurusCommand
 */
export const de_CreateThesaurusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThesaurusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateThesaurusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateThesaurusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateThesaurusCommandError
 */
const de_CreateThesaurusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThesaurusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAccessControlConfigurationCommand
 */
export const de_DeleteAccessControlConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessControlConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAccessControlConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteAccessControlConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAccessControlConfigurationCommandError
 */
const de_DeleteAccessControlConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessControlConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDataSourceCommand
 */
export const de_DeleteDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDataSourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDataSourceCommandError
 */
const de_DeleteDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteExperienceCommand
 */
export const de_DeleteExperienceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExperienceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteExperienceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteExperienceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteExperienceCommandError
 */
const de_DeleteExperienceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExperienceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteFaqCommand
 */
export const de_DeleteFaqCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFaqCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFaqCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteFaqCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteFaqCommandError
 */
const de_DeleteFaqCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFaqCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteIndexCommand
 */
export const de_DeleteIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIndexCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteIndexCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteIndexCommandError
 */
const de_DeleteIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeletePrincipalMappingCommand
 */
export const de_DeletePrincipalMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePrincipalMappingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePrincipalMappingCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePrincipalMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeletePrincipalMappingCommandError
 */
const de_DeletePrincipalMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePrincipalMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteQuerySuggestionsBlockListCommand
 */
export const de_DeleteQuerySuggestionsBlockListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQuerySuggestionsBlockListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteQuerySuggestionsBlockListCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteQuerySuggestionsBlockListCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteQuerySuggestionsBlockListCommandError
 */
const de_DeleteQuerySuggestionsBlockListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQuerySuggestionsBlockListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteThesaurusCommand
 */
export const de_DeleteThesaurusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThesaurusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteThesaurusCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteThesaurusCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteThesaurusCommandError
 */
const de_DeleteThesaurusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThesaurusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAccessControlConfigurationCommand
 */
export const de_DescribeAccessControlConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessControlConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccessControlConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeAccessControlConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAccessControlConfigurationCommandError
 */
const de_DescribeAccessControlConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessControlConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDataSourceCommand
 */
export const de_DescribeDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDataSourceResponse(data, context);
  const response: DescribeDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDataSourceCommandError
 */
const de_DescribeDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeExperienceCommand
 */
export const de_DescribeExperienceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExperienceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeExperienceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeExperienceResponse(data, context);
  const response: DescribeExperienceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeExperienceCommandError
 */
const de_DescribeExperienceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExperienceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeFaqCommand
 */
export const de_DescribeFaqCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFaqCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFaqCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFaqResponse(data, context);
  const response: DescribeFaqCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFaqCommandError
 */
const de_DescribeFaqCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFaqCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeFeaturedResultsSetCommand
 */
export const de_DescribeFeaturedResultsSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFeaturedResultsSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFeaturedResultsSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeFeaturedResultsSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFeaturedResultsSetCommandError
 */
const de_DescribeFeaturedResultsSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFeaturedResultsSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeIndexCommand
 */
export const de_DescribeIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIndexCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeIndexCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeIndexResponse(data, context);
  const response: DescribeIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeIndexCommandError
 */
const de_DescribeIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribePrincipalMappingCommand
 */
export const de_DescribePrincipalMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePrincipalMappingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePrincipalMappingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePrincipalMappingResponse(data, context);
  const response: DescribePrincipalMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribePrincipalMappingCommandError
 */
const de_DescribePrincipalMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePrincipalMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeQuerySuggestionsBlockListCommand
 */
export const de_DescribeQuerySuggestionsBlockListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQuerySuggestionsBlockListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeQuerySuggestionsBlockListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeQuerySuggestionsBlockListResponse(data, context);
  const response: DescribeQuerySuggestionsBlockListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeQuerySuggestionsBlockListCommandError
 */
const de_DescribeQuerySuggestionsBlockListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQuerySuggestionsBlockListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeQuerySuggestionsConfigCommand
 */
export const de_DescribeQuerySuggestionsConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQuerySuggestionsConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeQuerySuggestionsConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeQuerySuggestionsConfigResponse(data, context);
  const response: DescribeQuerySuggestionsConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeQuerySuggestionsConfigCommandError
 */
const de_DescribeQuerySuggestionsConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQuerySuggestionsConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeThesaurusCommand
 */
export const de_DescribeThesaurusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThesaurusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeThesaurusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeThesaurusResponse(data, context);
  const response: DescribeThesaurusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeThesaurusCommandError
 */
const de_DescribeThesaurusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThesaurusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateEntitiesFromExperienceCommand
 */
export const de_DisassociateEntitiesFromExperienceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateEntitiesFromExperienceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateEntitiesFromExperienceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateEntitiesFromExperienceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateEntitiesFromExperienceCommandError
 */
const de_DisassociateEntitiesFromExperienceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateEntitiesFromExperienceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociatePersonasFromEntitiesCommand
 */
export const de_DisassociatePersonasFromEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePersonasFromEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociatePersonasFromEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociatePersonasFromEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociatePersonasFromEntitiesCommandError
 */
const de_DisassociatePersonasFromEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePersonasFromEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetQuerySuggestionsCommand
 */
export const de_GetQuerySuggestionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQuerySuggestionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetQuerySuggestionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetQuerySuggestionsResponse(data, context);
  const response: GetQuerySuggestionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetQuerySuggestionsCommandError
 */
const de_GetQuerySuggestionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQuerySuggestionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetSnapshotsCommand
 */
export const de_GetSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSnapshotsResponse(data, context);
  const response: GetSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetSnapshotsCommandError
 */
const de_GetSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kendra#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAccessControlConfigurationsCommand
 */
export const de_ListAccessControlConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessControlConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAccessControlConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAccessControlConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAccessControlConfigurationsCommandError
 */
const de_ListAccessControlConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessControlConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDataSourcesCommand
 */
export const de_ListDataSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDataSourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDataSourcesResponse(data, context);
  const response: ListDataSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDataSourcesCommandError
 */
const de_ListDataSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDataSourceSyncJobsCommand
 */
export const de_ListDataSourceSyncJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourceSyncJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDataSourceSyncJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDataSourceSyncJobsResponse(data, context);
  const response: ListDataSourceSyncJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDataSourceSyncJobsCommandError
 */
const de_ListDataSourceSyncJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourceSyncJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListEntityPersonasCommand
 */
export const de_ListEntityPersonasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntityPersonasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEntityPersonasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEntityPersonasResponse(data, context);
  const response: ListEntityPersonasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEntityPersonasCommandError
 */
const de_ListEntityPersonasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntityPersonasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListExperienceEntitiesCommand
 */
export const de_ListExperienceEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperienceEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListExperienceEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListExperienceEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListExperienceEntitiesCommandError
 */
const de_ListExperienceEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperienceEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListExperiencesCommand
 */
export const de_ListExperiencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperiencesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListExperiencesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListExperiencesResponse(data, context);
  const response: ListExperiencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListExperiencesCommandError
 */
const de_ListExperiencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperiencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListFaqsCommand
 */
export const de_ListFaqsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFaqsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFaqsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFaqsResponse(data, context);
  const response: ListFaqsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFaqsCommandError
 */
const de_ListFaqsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFaqsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListFeaturedResultsSetsCommand
 */
export const de_ListFeaturedResultsSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFeaturedResultsSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFeaturedResultsSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListFeaturedResultsSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFeaturedResultsSetsCommandError
 */
const de_ListFeaturedResultsSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFeaturedResultsSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListGroupsOlderThanOrderingIdCommand
 */
export const de_ListGroupsOlderThanOrderingIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsOlderThanOrderingIdCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListGroupsOlderThanOrderingIdCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListGroupsOlderThanOrderingIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListGroupsOlderThanOrderingIdCommandError
 */
const de_ListGroupsOlderThanOrderingIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsOlderThanOrderingIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListIndicesCommand
 */
export const de_ListIndicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIndicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListIndicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListIndicesResponse(data, context);
  const response: ListIndicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListIndicesCommandError
 */
const de_ListIndicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIndicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListQuerySuggestionsBlockListsCommand
 */
export const de_ListQuerySuggestionsBlockListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQuerySuggestionsBlockListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListQuerySuggestionsBlockListsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListQuerySuggestionsBlockListsResponse(data, context);
  const response: ListQuerySuggestionsBlockListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListQuerySuggestionsBlockListsCommandError
 */
const de_ListQuerySuggestionsBlockListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQuerySuggestionsBlockListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.kendra#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListThesauriCommand
 */
export const de_ListThesauriCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThesauriCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListThesauriCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListThesauriResponse(data, context);
  const response: ListThesauriCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListThesauriCommandError
 */
const de_ListThesauriCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThesauriCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutPrincipalMappingCommand
 */
export const de_PutPrincipalMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPrincipalMappingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutPrincipalMappingCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutPrincipalMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1PutPrincipalMappingCommandError
 */
const de_PutPrincipalMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPrincipalMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1QueryCommand
 */
export const de_QueryCommand = async (output: __HttpResponse, context: __SerdeContext): Promise<QueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_QueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_QueryResult(data, context);
  const response: QueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1QueryCommandError
 */
const de_QueryCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<QueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RetrieveCommand
 */
export const de_RetrieveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RetrieveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RetrieveResult(data, context);
  const response: RetrieveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RetrieveCommandError
 */
const de_RetrieveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartDataSourceSyncJobCommand
 */
export const de_StartDataSourceSyncJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataSourceSyncJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartDataSourceSyncJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartDataSourceSyncJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartDataSourceSyncJobCommandError
 */
const de_StartDataSourceSyncJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataSourceSyncJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kendra#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopDataSourceSyncJobCommand
 */
export const de_StopDataSourceSyncJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDataSourceSyncJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopDataSourceSyncJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopDataSourceSyncJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopDataSourceSyncJobCommandError
 */
const de_StopDataSourceSyncJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDataSourceSyncJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SubmitFeedbackCommand
 */
export const de_SubmitFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitFeedbackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SubmitFeedbackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SubmitFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1SubmitFeedbackCommandError
 */
const de_SubmitFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.kendra#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.kendra#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.kendra#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateAccessControlConfigurationCommand
 */
export const de_UpdateAccessControlConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessControlConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAccessControlConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateAccessControlConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateAccessControlConfigurationCommandError
 */
const de_UpdateAccessControlConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessControlConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDataSourceCommand
 */
export const de_UpdateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDataSourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDataSourceCommandError
 */
const de_UpdateDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateExperienceCommand
 */
export const de_UpdateExperienceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExperienceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateExperienceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateExperienceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateExperienceCommandError
 */
const de_UpdateExperienceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExperienceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateFeaturedResultsSetCommand
 */
export const de_UpdateFeaturedResultsSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFeaturedResultsSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFeaturedResultsSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateFeaturedResultsSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateFeaturedResultsSetCommandError
 */
const de_UpdateFeaturedResultsSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFeaturedResultsSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "FeaturedResultsConflictException":
    case "com.amazonaws.kendra#FeaturedResultsConflictException":
      throw await de_FeaturedResultsConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateIndexCommand
 */
export const de_UpdateIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIndexCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateIndexCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateIndexCommandError
 */
const de_UpdateIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateQuerySuggestionsBlockListCommand
 */
export const de_UpdateQuerySuggestionsBlockListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQuerySuggestionsBlockListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateQuerySuggestionsBlockListCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateQuerySuggestionsBlockListCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateQuerySuggestionsBlockListCommandError
 */
const de_UpdateQuerySuggestionsBlockListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQuerySuggestionsBlockListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateQuerySuggestionsConfigCommand
 */
export const de_UpdateQuerySuggestionsConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQuerySuggestionsConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateQuerySuggestionsConfigCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateQuerySuggestionsConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateQuerySuggestionsConfigCommandError
 */
const de_UpdateQuerySuggestionsConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQuerySuggestionsConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateThesaurusCommand
 */
export const de_UpdateThesaurusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThesaurusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateThesaurusCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateThesaurusCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateThesaurusCommandError
 */
const de_UpdateThesaurusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThesaurusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FeaturedResultsConflictExceptionRes
 */
const de_FeaturedResultsConflictExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FeaturedResultsConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new FeaturedResultsConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistExceptionRes
 */
const de_ResourceAlreadyExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceAlreadyExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceUnavailableExceptionRes
 */
const de_ResourceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AccessControlListConfiguration omitted.

// se_AclConfiguration omitted.

// se_AlfrescoConfiguration omitted.

// se_AssociateEntitiesToExperienceRequest omitted.

// se_AssociateEntityList omitted.

// se_AssociatePersonasToEntitiesRequest omitted.

/**
 * serializeAws_json1_1AttributeFilter
 */
const se_AttributeFilter = (input: AttributeFilter, context: __SerdeContext): any => {
  return take(input, {
    AndAllFilters: (_) => se_AttributeFilterList(_, context),
    ContainsAll: (_) => se_DocumentAttribute(_, context),
    ContainsAny: (_) => se_DocumentAttribute(_, context),
    EqualsTo: (_) => se_DocumentAttribute(_, context),
    GreaterThan: (_) => se_DocumentAttribute(_, context),
    GreaterThanOrEquals: (_) => se_DocumentAttribute(_, context),
    LessThan: (_) => se_DocumentAttribute(_, context),
    LessThanOrEquals: (_) => se_DocumentAttribute(_, context),
    NotFilter: (_) => se_AttributeFilter(_, context),
    OrAllFilters: (_) => se_AttributeFilterList(_, context),
  });
};

/**
 * serializeAws_json1_1AttributeFilterList
 */
const se_AttributeFilterList = (input: AttributeFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AttributeFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1AttributeSuggestionsGetConfig
 */
const se_AttributeSuggestionsGetConfig = (input: AttributeSuggestionsGetConfig, context: __SerdeContext): any => {
  return take(input, {
    AdditionalResponseAttributes: _json,
    AttributeFilter: (_) => se_AttributeFilter(_, context),
    SuggestionAttributes: _json,
    UserContext: _json,
  });
};

// se_AttributeSuggestionsUpdateConfig omitted.

// se_AuthenticationConfiguration omitted.

// se_BasicAuthenticationConfiguration omitted.

// se_BasicAuthenticationConfigurationList omitted.

// se_BatchDeleteDocumentRequest omitted.

// se_BatchDeleteFeaturedResultsSetRequest omitted.

/**
 * serializeAws_json1_1BatchGetDocumentStatusRequest
 */
const se_BatchGetDocumentStatusRequest = (input: BatchGetDocumentStatusRequest, context: __SerdeContext): any => {
  return take(input, {
    DocumentInfoList: (_) => se_DocumentInfoList(_, context),
    IndexId: [],
  });
};

/**
 * serializeAws_json1_1BatchPutDocumentRequest
 */
const se_BatchPutDocumentRequest = (input: BatchPutDocumentRequest, context: __SerdeContext): any => {
  return take(input, {
    CustomDocumentEnrichmentConfiguration: (_) => se_CustomDocumentEnrichmentConfiguration(_, context),
    Documents: (_) => se_DocumentList(_, context),
    IndexId: [],
    RoleArn: [],
  });
};

// se_BoxConfiguration omitted.

// se_CapacityUnitsConfiguration omitted.

// se_ChangeDetectingColumns omitted.

// se_ClearQuerySuggestionsRequest omitted.

/**
 * serializeAws_json1_1ClickFeedback
 */
const se_ClickFeedback = (input: ClickFeedback, context: __SerdeContext): any => {
  return take(input, {
    ClickTime: (_) => Math.round(_.getTime() / 1000),
    ResultId: [],
  });
};

/**
 * serializeAws_json1_1ClickFeedbackList
 */
const se_ClickFeedbackList = (input: ClickFeedback[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ClickFeedback(entry, context);
    });
};

// se_ColumnConfiguration omitted.

// se_ConfluenceAttachmentConfiguration omitted.

// se_ConfluenceAttachmentFieldMappingsList omitted.

// se_ConfluenceAttachmentToIndexFieldMapping omitted.

// se_ConfluenceBlogConfiguration omitted.

// se_ConfluenceBlogFieldMappingsList omitted.

// se_ConfluenceBlogToIndexFieldMapping omitted.

// se_ConfluenceConfiguration omitted.

// se_ConfluencePageConfiguration omitted.

// se_ConfluencePageFieldMappingsList omitted.

// se_ConfluencePageToIndexFieldMapping omitted.

// se_ConfluenceSpaceConfiguration omitted.

// se_ConfluenceSpaceFieldMappingsList omitted.

// se_ConfluenceSpaceList omitted.

// se_ConfluenceSpaceToIndexFieldMapping omitted.

// se_ConnectionConfiguration omitted.

// se_ContentSourceConfiguration omitted.

/**
 * serializeAws_json1_1CreateAccessControlConfigurationRequest
 */
const se_CreateAccessControlConfigurationRequest = (
  input: CreateAccessControlConfigurationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AccessControlList: _json,
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    HierarchicalAccessControlList: _json,
    IndexId: [],
    Name: [],
  });
};

/**
 * serializeAws_json1_1CreateDataSourceRequest
 */
const se_CreateDataSourceRequest = (input: CreateDataSourceRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Configuration: (_) => se_DataSourceConfiguration(_, context),
    CustomDocumentEnrichmentConfiguration: (_) => se_CustomDocumentEnrichmentConfiguration(_, context),
    Description: [],
    IndexId: [],
    LanguageCode: [],
    Name: [],
    RoleArn: [],
    Schedule: [],
    Tags: _json,
    Type: [],
    VpcConfiguration: _json,
  });
};

/**
 * serializeAws_json1_1CreateExperienceRequest
 */
const se_CreateExperienceRequest = (input: CreateExperienceRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Configuration: _json,
    Description: [],
    IndexId: [],
    Name: [],
    RoleArn: [],
  });
};

/**
 * serializeAws_json1_1CreateFaqRequest
 */
const se_CreateFaqRequest = (input: CreateFaqRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    FileFormat: [],
    IndexId: [],
    LanguageCode: [],
    Name: [],
    RoleArn: [],
    S3Path: _json,
    Tags: _json,
  });
};

// se_CreateFeaturedResultsSetRequest omitted.

/**
 * serializeAws_json1_1CreateIndexRequest
 */
const se_CreateIndexRequest = (input: CreateIndexRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    Edition: [],
    Name: [],
    RoleArn: [],
    ServerSideEncryptionConfiguration: _json,
    Tags: _json,
    UserContextPolicy: [],
    UserGroupResolutionConfiguration: _json,
    UserTokenConfigurations: _json,
  });
};

/**
 * serializeAws_json1_1CreateQuerySuggestionsBlockListRequest
 */
const se_CreateQuerySuggestionsBlockListRequest = (
  input: CreateQuerySuggestionsBlockListRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    IndexId: [],
    Name: [],
    RoleArn: [],
    SourceS3Path: _json,
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateThesaurusRequest
 */
const se_CreateThesaurusRequest = (input: CreateThesaurusRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    IndexId: [],
    Name: [],
    RoleArn: [],
    SourceS3Path: _json,
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CustomDocumentEnrichmentConfiguration
 */
const se_CustomDocumentEnrichmentConfiguration = (
  input: CustomDocumentEnrichmentConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    InlineConfigurations: (_) => se_InlineCustomDocumentEnrichmentConfigurationList(_, context),
    PostExtractionHookConfiguration: (_) => se_HookConfiguration(_, context),
    PreExtractionHookConfiguration: (_) => se_HookConfiguration(_, context),
    RoleArn: [],
  });
};

// se_DatabaseConfiguration omitted.

/**
 * serializeAws_json1_1DataSourceConfiguration
 */
const se_DataSourceConfiguration = (input: DataSourceConfiguration, context: __SerdeContext): any => {
  return take(input, {
    AlfrescoConfiguration: _json,
    BoxConfiguration: _json,
    ConfluenceConfiguration: _json,
    DatabaseConfiguration: _json,
    FsxConfiguration: _json,
    GitHubConfiguration: _json,
    GoogleDriveConfiguration: _json,
    JiraConfiguration: _json,
    OneDriveConfiguration: _json,
    QuipConfiguration: _json,
    S3Configuration: _json,
    SalesforceConfiguration: _json,
    ServiceNowConfiguration: _json,
    SharePointConfiguration: _json,
    SlackConfiguration: _json,
    TemplateConfiguration: (_) => se_TemplateConfiguration(_, context),
    WebCrawlerConfiguration: (_) => se_WebCrawlerConfiguration(_, context),
    WorkDocsConfiguration: _json,
  });
};

// se_DataSourceGroup omitted.

// se_DataSourceGroups omitted.

// se_DataSourceIdList omitted.

// se_DataSourceInclusionsExclusionsStrings omitted.

// se_DataSourceSyncJobMetricTarget omitted.

// se_DataSourceToIndexFieldMapping omitted.

// se_DataSourceToIndexFieldMappingList omitted.

// se_DataSourceVpcConfiguration omitted.

// se_DeleteAccessControlConfigurationRequest omitted.

// se_DeleteDataSourceRequest omitted.

// se_DeleteExperienceRequest omitted.

// se_DeleteFaqRequest omitted.

// se_DeleteIndexRequest omitted.

// se_DeletePrincipalMappingRequest omitted.

// se_DeleteQuerySuggestionsBlockListRequest omitted.

// se_DeleteThesaurusRequest omitted.

// se_DescribeAccessControlConfigurationRequest omitted.

// se_DescribeDataSourceRequest omitted.

// se_DescribeExperienceRequest omitted.

// se_DescribeFaqRequest omitted.

// se_DescribeFeaturedResultsSetRequest omitted.

// se_DescribeIndexRequest omitted.

// se_DescribePrincipalMappingRequest omitted.

// se_DescribeQuerySuggestionsBlockListRequest omitted.

// se_DescribeQuerySuggestionsConfigRequest omitted.

// se_DescribeThesaurusRequest omitted.

// se_DisassociateEntitiesFromExperienceRequest omitted.

// se_DisassociateEntityList omitted.

// se_DisassociatePersonasFromEntitiesRequest omitted.

/**
 * serializeAws_json1_1Document
 */
const se_Document = (input: Document, context: __SerdeContext): any => {
  return take(input, {
    AccessControlConfigurationId: [],
    AccessControlList: _json,
    Attributes: (_) => se_DocumentAttributeList(_, context),
    Blob: context.base64Encoder,
    ContentType: [],
    HierarchicalAccessControlList: _json,
    Id: [],
    S3Path: _json,
    Title: [],
  });
};

/**
 * serializeAws_json1_1DocumentAttribute
 */
const se_DocumentAttribute = (input: DocumentAttribute, context: __SerdeContext): any => {
  return take(input, {
    Key: [],
    Value: (_) => se_DocumentAttributeValue(_, context),
  });
};

/**
 * serializeAws_json1_1DocumentAttributeCondition
 */
const se_DocumentAttributeCondition = (input: DocumentAttributeCondition, context: __SerdeContext): any => {
  return take(input, {
    ConditionDocumentAttributeKey: [],
    ConditionOnValue: (_) => se_DocumentAttributeValue(_, context),
    Operator: [],
  });
};

// se_DocumentAttributeKeyList omitted.

/**
 * serializeAws_json1_1DocumentAttributeList
 */
const se_DocumentAttributeList = (input: DocumentAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DocumentAttribute(entry, context);
    });
};

// se_DocumentAttributeStringListValue omitted.

/**
 * serializeAws_json1_1DocumentAttributeTarget
 */
const se_DocumentAttributeTarget = (input: DocumentAttributeTarget, context: __SerdeContext): any => {
  return take(input, {
    TargetDocumentAttributeKey: [],
    TargetDocumentAttributeValue: (_) => se_DocumentAttributeValue(_, context),
    TargetDocumentAttributeValueDeletion: [],
  });
};

/**
 * serializeAws_json1_1DocumentAttributeValue
 */
const se_DocumentAttributeValue = (input: DocumentAttributeValue, context: __SerdeContext): any => {
  return take(input, {
    DateValue: (_) => Math.round(_.getTime() / 1000),
    LongValue: [],
    StringListValue: _json,
    StringValue: [],
  });
};

// se_DocumentIdList omitted.

/**
 * serializeAws_json1_1DocumentInfo
 */
const se_DocumentInfo = (input: DocumentInfo, context: __SerdeContext): any => {
  return take(input, {
    Attributes: (_) => se_DocumentAttributeList(_, context),
    DocumentId: [],
  });
};

/**
 * serializeAws_json1_1DocumentInfoList
 */
const se_DocumentInfoList = (input: DocumentInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DocumentInfo(entry, context);
    });
};

/**
 * serializeAws_json1_1DocumentList
 */
const se_DocumentList = (input: Document[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Document(entry, context);
    });
};

// se_DocumentMetadataConfiguration omitted.

// se_DocumentMetadataConfigurationList omitted.

// se_DocumentRelevanceConfiguration omitted.

// se_DocumentRelevanceOverrideConfigurationList omitted.

// se_DocumentsMetadataConfiguration omitted.

// se_EntityConfiguration omitted.

// se_EntityFilter omitted.

// se_EntityIdsList omitted.

// se_EntityPersonaConfiguration omitted.

// se_EntityPersonaConfigurationList omitted.

// se_ExcludeMimeTypesList omitted.

// se_ExcludeSharedDrivesList omitted.

// se_ExcludeUserAccountsList omitted.

// se_ExperienceConfiguration omitted.

/**
 * serializeAws_json1_1Facet
 */
const se_Facet = (input: Facet, context: __SerdeContext): any => {
  return take(input, {
    DocumentAttributeKey: [],
    Facets: (_) => se_FacetList(_, context),
    MaxResults: [],
  });
};

/**
 * serializeAws_json1_1FacetList
 */
const se_FacetList = (input: Facet[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Facet(entry, context);
    });
};

// se_FaqIdsList omitted.

// se_FeaturedDocument omitted.

// se_FeaturedDocumentList omitted.

// se_FeaturedResultsSetIdList omitted.

// se_FolderIdList omitted.

// se_FsxConfiguration omitted.

/**
 * serializeAws_json1_1GetQuerySuggestionsRequest
 */
const se_GetQuerySuggestionsRequest = (input: GetQuerySuggestionsRequest, context: __SerdeContext): any => {
  return take(input, {
    AttributeSuggestionsConfig: (_) => se_AttributeSuggestionsGetConfig(_, context),
    IndexId: [],
    MaxSuggestionsCount: [],
    QueryText: [],
    SuggestionTypes: _json,
  });
};

// se_GetSnapshotsRequest omitted.

// se_GitHubConfiguration omitted.

// se_GitHubDocumentCrawlProperties omitted.

// se_GoogleDriveConfiguration omitted.

// se_GroupMembers omitted.

// se_Groups omitted.

// se_HierarchicalPrincipal omitted.

// se_HierarchicalPrincipalList omitted.

/**
 * serializeAws_json1_1HookConfiguration
 */
const se_HookConfiguration = (input: HookConfiguration, context: __SerdeContext): any => {
  return take(input, {
    InvocationCondition: (_) => se_DocumentAttributeCondition(_, context),
    LambdaArn: [],
    S3Bucket: [],
  });
};

/**
 * serializeAws_json1_1InlineCustomDocumentEnrichmentConfiguration
 */
const se_InlineCustomDocumentEnrichmentConfiguration = (
  input: InlineCustomDocumentEnrichmentConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    Condition: (_) => se_DocumentAttributeCondition(_, context),
    DocumentContentDeletion: [],
    Target: (_) => se_DocumentAttributeTarget(_, context),
  });
};

/**
 * serializeAws_json1_1InlineCustomDocumentEnrichmentConfigurationList
 */
const se_InlineCustomDocumentEnrichmentConfigurationList = (
  input: InlineCustomDocumentEnrichmentConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InlineCustomDocumentEnrichmentConfiguration(entry, context);
    });
};

// se_IssueSubEntityFilter omitted.

// se_IssueType omitted.

// se_JiraConfiguration omitted.

// se_JiraStatus omitted.

// se_JsonTokenTypeConfiguration omitted.

// se_JwtTokenTypeConfiguration omitted.

// se_ListAccessControlConfigurationsRequest omitted.

// se_ListDataSourcesRequest omitted.

/**
 * serializeAws_json1_1ListDataSourceSyncJobsRequest
 */
const se_ListDataSourceSyncJobsRequest = (input: ListDataSourceSyncJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    Id: [],
    IndexId: [],
    MaxResults: [],
    NextToken: [],
    StartTimeFilter: (_) => se_TimeRange(_, context),
    StatusFilter: [],
  });
};

// se_ListEntityPersonasRequest omitted.

// se_ListExperienceEntitiesRequest omitted.

// se_ListExperiencesRequest omitted.

// se_ListFaqsRequest omitted.

// se_ListFeaturedResultsSetsRequest omitted.

// se_ListGroupsOlderThanOrderingIdRequest omitted.

// se_ListIndicesRequest omitted.

// se_ListQuerySuggestionsBlockListsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListThesauriRequest omitted.

// se_MemberGroup omitted.

// se_MemberGroups omitted.

// se_MemberUser omitted.

// se_MemberUsers omitted.

// se_OneDriveConfiguration omitted.

// se_OneDriveUserList omitted.

// se_OneDriveUsers omitted.

// se_OnPremiseConfiguration omitted.

// se_Principal omitted.

// se_PrincipalList omitted.

// se_PrivateChannelFilter omitted.

// se_Project omitted.

// se_ProxyConfiguration omitted.

// se_PublicChannelFilter omitted.

// se_PutPrincipalMappingRequest omitted.

/**
 * serializeAws_json1_1QueryRequest
 */
const se_QueryRequest = (input: QueryRequest, context: __SerdeContext): any => {
  return take(input, {
    AttributeFilter: (_) => se_AttributeFilter(_, context),
    DocumentRelevanceOverrideConfigurations: _json,
    Facets: (_) => se_FacetList(_, context),
    IndexId: [],
    PageNumber: [],
    PageSize: [],
    QueryResultTypeFilter: [],
    QueryText: [],
    RequestedDocumentAttributes: _json,
    SortingConfiguration: _json,
    SpellCorrectionConfiguration: _json,
    UserContext: _json,
    VisitorId: [],
  });
};

// se_QueryTextList omitted.

// se_QuipConfiguration omitted.

// se_Relevance omitted.

// se_RelevanceFeedback omitted.

// se_RelevanceFeedbackList omitted.

// se_RepositoryNames omitted.

/**
 * serializeAws_json1_1RetrieveRequest
 */
const se_RetrieveRequest = (input: RetrieveRequest, context: __SerdeContext): any => {
  return take(input, {
    AttributeFilter: (_) => se_AttributeFilter(_, context),
    DocumentRelevanceOverrideConfigurations: _json,
    IndexId: [],
    PageNumber: [],
    PageSize: [],
    QueryText: [],
    RequestedDocumentAttributes: _json,
    UserContext: _json,
  });
};

// se_S3DataSourceConfiguration omitted.

// se_S3Path omitted.

// se_SaaSConfiguration omitted.

// se_SalesforceChatterFeedConfiguration omitted.

// se_SalesforceChatterFeedIncludeFilterTypes omitted.

// se_SalesforceConfiguration omitted.

// se_SalesforceCustomKnowledgeArticleTypeConfiguration omitted.

// se_SalesforceCustomKnowledgeArticleTypeConfigurationList omitted.

// se_SalesforceKnowledgeArticleConfiguration omitted.

// se_SalesforceKnowledgeArticleStateList omitted.

// se_SalesforceStandardKnowledgeArticleTypeConfiguration omitted.

// se_SalesforceStandardObjectAttachmentConfiguration omitted.

// se_SalesforceStandardObjectConfiguration omitted.

// se_SalesforceStandardObjectConfigurationList omitted.

// se_Search omitted.

// se_SecurityGroupIdList omitted.

// se_SeedUrlConfiguration omitted.

// se_SeedUrlList omitted.

// se_ServerSideEncryptionConfiguration omitted.

// se_ServiceNowConfiguration omitted.

// se_ServiceNowKnowledgeArticleConfiguration omitted.

// se_ServiceNowServiceCatalogConfiguration omitted.

// se_SharePointConfiguration omitted.

// se_SharePointUrlList omitted.

// se_SiteMapsConfiguration omitted.

// se_SiteMapsList omitted.

// se_SlackConfiguration omitted.

// se_SlackEntityList omitted.

// se_SortingConfiguration omitted.

// se_SpellCorrectionConfiguration omitted.

// se_SqlConfiguration omitted.

// se_StartDataSourceSyncJobRequest omitted.

// se_StopDataSourceSyncJobRequest omitted.

// se_StringList omitted.

/**
 * serializeAws_json1_1SubmitFeedbackRequest
 */
const se_SubmitFeedbackRequest = (input: SubmitFeedbackRequest, context: __SerdeContext): any => {
  return take(input, {
    ClickFeedbackItems: (_) => se_ClickFeedbackList(_, context),
    IndexId: [],
    QueryId: [],
    RelevanceFeedbackItems: _json,
  });
};

// se_SubnetIdList omitted.

// se_SuggestableConfig omitted.

// se_SuggestableConfigList omitted.

// se_SuggestionTypes omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

/**
 * serializeAws_json1_1Template
 */
const se_Template = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

/**
 * serializeAws_json1_1TemplateConfiguration
 */
const se_TemplateConfiguration = (input: TemplateConfiguration, context: __SerdeContext): any => {
  return take(input, {
    Template: (_) => se_Template(_, context),
  });
};

/**
 * serializeAws_json1_1TimeRange
 */
const se_TimeRange = (input: TimeRange, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => Math.round(_.getTime() / 1000),
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_UntagResourceRequest omitted.

// se_UpdateAccessControlConfigurationRequest omitted.

/**
 * serializeAws_json1_1UpdateDataSourceRequest
 */
const se_UpdateDataSourceRequest = (input: UpdateDataSourceRequest, context: __SerdeContext): any => {
  return take(input, {
    Configuration: (_) => se_DataSourceConfiguration(_, context),
    CustomDocumentEnrichmentConfiguration: (_) => se_CustomDocumentEnrichmentConfiguration(_, context),
    Description: [],
    Id: [],
    IndexId: [],
    LanguageCode: [],
    Name: [],
    RoleArn: [],
    Schedule: [],
    VpcConfiguration: _json,
  });
};

// se_UpdateExperienceRequest omitted.

// se_UpdateFeaturedResultsSetRequest omitted.

// se_UpdateIndexRequest omitted.

// se_UpdateQuerySuggestionsBlockListRequest omitted.

// se_UpdateQuerySuggestionsConfigRequest omitted.

// se_UpdateThesaurusRequest omitted.

// se_Urls omitted.

// se_UserContext omitted.

// se_UserGroupResolutionConfiguration omitted.

// se_UserIdentityConfiguration omitted.

// se_UserTokenConfiguration omitted.

// se_UserTokenConfigurationList omitted.

// se_ValueImportanceMap omitted.

/**
 * serializeAws_json1_1WebCrawlerConfiguration
 */
const se_WebCrawlerConfiguration = (input: WebCrawlerConfiguration, context: __SerdeContext): any => {
  return take(input, {
    AuthenticationConfiguration: _json,
    CrawlDepth: [],
    MaxContentSizePerPageInMegaBytes: __serializeFloat,
    MaxLinksPerPage: [],
    MaxUrlsPerMinuteCrawlRate: [],
    ProxyConfiguration: _json,
    UrlExclusionPatterns: _json,
    UrlInclusionPatterns: _json,
    Urls: _json,
  });
};

// se_WorkDocsConfiguration omitted.

// de_AccessControlConfigurationSummary omitted.

// de_AccessControlConfigurationSummaryList omitted.

// de_AccessControlListConfiguration omitted.

// de_AccessDeniedException omitted.

// de_AclConfiguration omitted.

// de_AdditionalResultAttribute omitted.

// de_AdditionalResultAttributeList omitted.

// de_AdditionalResultAttributeValue omitted.

// de_AlfrescoConfiguration omitted.

// de_AssociateEntitiesToExperienceFailedEntityList omitted.

// de_AssociateEntitiesToExperienceResponse omitted.

// de_AssociatePersonasToEntitiesResponse omitted.

// de_AttributeSuggestionsDescribeConfig omitted.

// de_AuthenticationConfiguration omitted.

// de_BasicAuthenticationConfiguration omitted.

// de_BasicAuthenticationConfigurationList omitted.

// de_BatchDeleteDocumentResponse omitted.

// de_BatchDeleteDocumentResponseFailedDocument omitted.

// de_BatchDeleteDocumentResponseFailedDocuments omitted.

// de_BatchDeleteFeaturedResultsSetError omitted.

// de_BatchDeleteFeaturedResultsSetErrors omitted.

// de_BatchDeleteFeaturedResultsSetResponse omitted.

// de_BatchGetDocumentStatusResponse omitted.

// de_BatchGetDocumentStatusResponseError omitted.

// de_BatchGetDocumentStatusResponseErrors omitted.

// de_BatchPutDocumentResponse omitted.

// de_BatchPutDocumentResponseFailedDocument omitted.

// de_BatchPutDocumentResponseFailedDocuments omitted.

// de_BoxConfiguration omitted.

// de_CapacityUnitsConfiguration omitted.

// de_ChangeDetectingColumns omitted.

// de_ColumnConfiguration omitted.

// de_ConflictException omitted.

// de_ConflictingItem omitted.

// de_ConflictingItems omitted.

// de_ConfluenceAttachmentConfiguration omitted.

// de_ConfluenceAttachmentFieldMappingsList omitted.

// de_ConfluenceAttachmentToIndexFieldMapping omitted.

// de_ConfluenceBlogConfiguration omitted.

// de_ConfluenceBlogFieldMappingsList omitted.

// de_ConfluenceBlogToIndexFieldMapping omitted.

// de_ConfluenceConfiguration omitted.

// de_ConfluencePageConfiguration omitted.

// de_ConfluencePageFieldMappingsList omitted.

// de_ConfluencePageToIndexFieldMapping omitted.

// de_ConfluenceSpaceConfiguration omitted.

// de_ConfluenceSpaceFieldMappingsList omitted.

// de_ConfluenceSpaceList omitted.

// de_ConfluenceSpaceToIndexFieldMapping omitted.

// de_ConnectionConfiguration omitted.

// de_ContentSourceConfiguration omitted.

// de_Correction omitted.

// de_CorrectionList omitted.

// de_CreateAccessControlConfigurationResponse omitted.

// de_CreateDataSourceResponse omitted.

// de_CreateExperienceResponse omitted.

// de_CreateFaqResponse omitted.

// de_CreateFeaturedResultsSetResponse omitted.

// de_CreateIndexResponse omitted.

// de_CreateQuerySuggestionsBlockListResponse omitted.

// de_CreateThesaurusResponse omitted.

/**
 * deserializeAws_json1_1CustomDocumentEnrichmentConfiguration
 */
const de_CustomDocumentEnrichmentConfiguration = (
  output: any,
  context: __SerdeContext
): CustomDocumentEnrichmentConfiguration => {
  return take(output, {
    InlineConfigurations: (_: any) => de_InlineCustomDocumentEnrichmentConfigurationList(_, context),
    PostExtractionHookConfiguration: (_: any) => de_HookConfiguration(_, context),
    PreExtractionHookConfiguration: (_: any) => de_HookConfiguration(_, context),
    RoleArn: __expectString,
  }) as any;
};

// de_DatabaseConfiguration omitted.

/**
 * deserializeAws_json1_1DataSourceConfiguration
 */
const de_DataSourceConfiguration = (output: any, context: __SerdeContext): DataSourceConfiguration => {
  return take(output, {
    AlfrescoConfiguration: _json,
    BoxConfiguration: _json,
    ConfluenceConfiguration: _json,
    DatabaseConfiguration: _json,
    FsxConfiguration: _json,
    GitHubConfiguration: _json,
    GoogleDriveConfiguration: _json,
    JiraConfiguration: _json,
    OneDriveConfiguration: _json,
    QuipConfiguration: _json,
    S3Configuration: _json,
    SalesforceConfiguration: _json,
    ServiceNowConfiguration: _json,
    SharePointConfiguration: _json,
    SlackConfiguration: _json,
    TemplateConfiguration: (_: any) => de_TemplateConfiguration(_, context),
    WebCrawlerConfiguration: (_: any) => de_WebCrawlerConfiguration(_, context),
    WorkDocsConfiguration: _json,
  }) as any;
};

// de_DataSourceIdList omitted.

// de_DataSourceInclusionsExclusionsStrings omitted.

/**
 * deserializeAws_json1_1DataSourceSummary
 */
const de_DataSourceSummary = (output: any, context: __SerdeContext): DataSourceSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    LanguageCode: __expectString,
    Name: __expectString,
    Status: __expectString,
    Type: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1DataSourceSummaryList
 */
const de_DataSourceSummaryList = (output: any, context: __SerdeContext): DataSourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataSourceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DataSourceSyncJob
 */
const de_DataSourceSyncJob = (output: any, context: __SerdeContext): DataSourceSyncJob => {
  return take(output, {
    DataSourceErrorCode: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ErrorCode: __expectString,
    ErrorMessage: __expectString,
    ExecutionId: __expectString,
    Metrics: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DataSourceSyncJobHistoryList
 */
const de_DataSourceSyncJobHistoryList = (output: any, context: __SerdeContext): DataSourceSyncJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataSourceSyncJob(entry, context);
    });
  return retVal;
};

// de_DataSourceSyncJobMetrics omitted.

// de_DataSourceToIndexFieldMapping omitted.

// de_DataSourceToIndexFieldMappingList omitted.

// de_DataSourceVpcConfiguration omitted.

// de_DeleteAccessControlConfigurationResponse omitted.

// de_DeleteExperienceResponse omitted.

// de_DescribeAccessControlConfigurationResponse omitted.

/**
 * deserializeAws_json1_1DescribeDataSourceResponse
 */
const de_DescribeDataSourceResponse = (output: any, context: __SerdeContext): DescribeDataSourceResponse => {
  return take(output, {
    Configuration: (_: any) => de_DataSourceConfiguration(_, context),
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CustomDocumentEnrichmentConfiguration: (_: any) => de_CustomDocumentEnrichmentConfiguration(_, context),
    Description: __expectString,
    ErrorMessage: __expectString,
    Id: __expectString,
    IndexId: __expectString,
    LanguageCode: __expectString,
    Name: __expectString,
    RoleArn: __expectString,
    Schedule: __expectString,
    Status: __expectString,
    Type: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VpcConfiguration: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeExperienceResponse
 */
const de_DescribeExperienceResponse = (output: any, context: __SerdeContext): DescribeExperienceResponse => {
  return take(output, {
    Configuration: _json,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Endpoints: _json,
    ErrorMessage: __expectString,
    Id: __expectString,
    IndexId: __expectString,
    Name: __expectString,
    RoleArn: __expectString,
    Status: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeFaqResponse
 */
const de_DescribeFaqResponse = (output: any, context: __SerdeContext): DescribeFaqResponse => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ErrorMessage: __expectString,
    FileFormat: __expectString,
    Id: __expectString,
    IndexId: __expectString,
    LanguageCode: __expectString,
    Name: __expectString,
    RoleArn: __expectString,
    S3Path: _json,
    Status: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_DescribeFeaturedResultsSetResponse omitted.

/**
 * deserializeAws_json1_1DescribeIndexResponse
 */
const de_DescribeIndexResponse = (output: any, context: __SerdeContext): DescribeIndexResponse => {
  return take(output, {
    CapacityUnits: _json,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DocumentMetadataConfigurations: _json,
    Edition: __expectString,
    ErrorMessage: __expectString,
    Id: __expectString,
    IndexStatistics: _json,
    Name: __expectString,
    RoleArn: __expectString,
    ServerSideEncryptionConfiguration: _json,
    Status: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    UserContextPolicy: __expectString,
    UserGroupResolutionConfiguration: _json,
    UserTokenConfigurations: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribePrincipalMappingResponse
 */
const de_DescribePrincipalMappingResponse = (
  output: any,
  context: __SerdeContext
): DescribePrincipalMappingResponse => {
  return take(output, {
    DataSourceId: __expectString,
    GroupId: __expectString,
    GroupOrderingIdSummaries: (_: any) => de_GroupOrderingIdSummaries(_, context),
    IndexId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeQuerySuggestionsBlockListResponse
 */
const de_DescribeQuerySuggestionsBlockListResponse = (
  output: any,
  context: __SerdeContext
): DescribeQuerySuggestionsBlockListResponse => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ErrorMessage: __expectString,
    FileSizeBytes: __expectLong,
    Id: __expectString,
    IndexId: __expectString,
    ItemCount: __expectInt32,
    Name: __expectString,
    RoleArn: __expectString,
    SourceS3Path: _json,
    Status: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeQuerySuggestionsConfigResponse
 */
const de_DescribeQuerySuggestionsConfigResponse = (
  output: any,
  context: __SerdeContext
): DescribeQuerySuggestionsConfigResponse => {
  return take(output, {
    AttributeSuggestionsConfig: _json,
    IncludeQueriesWithoutUserInformation: __expectBoolean,
    LastClearTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastSuggestionsBuildTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MinimumNumberOfQueryingUsers: __expectInt32,
    MinimumQueryCount: __expectInt32,
    Mode: __expectString,
    QueryLogLookBackWindowInDays: __expectInt32,
    Status: __expectString,
    TotalSuggestionsCount: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeThesaurusResponse
 */
const de_DescribeThesaurusResponse = (output: any, context: __SerdeContext): DescribeThesaurusResponse => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ErrorMessage: __expectString,
    FileSizeBytes: __expectLong,
    Id: __expectString,
    IndexId: __expectString,
    Name: __expectString,
    RoleArn: __expectString,
    SourceS3Path: _json,
    Status: __expectString,
    SynonymRuleCount: __expectLong,
    TermCount: __expectLong,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_DisassociateEntitiesFromExperienceResponse omitted.

// de_DisassociatePersonasFromEntitiesResponse omitted.

/**
 * deserializeAws_json1_1DocumentAttribute
 */
const de_DocumentAttribute = (output: any, context: __SerdeContext): DocumentAttribute => {
  return take(output, {
    Key: __expectString,
    Value: (_: any) => de_DocumentAttributeValue(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DocumentAttributeCondition
 */
const de_DocumentAttributeCondition = (output: any, context: __SerdeContext): DocumentAttributeCondition => {
  return take(output, {
    ConditionDocumentAttributeKey: __expectString,
    ConditionOnValue: (_: any) => de_DocumentAttributeValue(_, context),
    Operator: __expectString,
  }) as any;
};

// de_DocumentAttributeKeyList omitted.

/**
 * deserializeAws_json1_1DocumentAttributeList
 */
const de_DocumentAttributeList = (output: any, context: __SerdeContext): DocumentAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DocumentAttribute(entry, context);
    });
  return retVal;
};

// de_DocumentAttributeStringListValue omitted.

/**
 * deserializeAws_json1_1DocumentAttributeTarget
 */
const de_DocumentAttributeTarget = (output: any, context: __SerdeContext): DocumentAttributeTarget => {
  return take(output, {
    TargetDocumentAttributeKey: __expectString,
    TargetDocumentAttributeValue: (_: any) => de_DocumentAttributeValue(_, context),
    TargetDocumentAttributeValueDeletion: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1DocumentAttributeValue
 */
const de_DocumentAttributeValue = (output: any, context: __SerdeContext): DocumentAttributeValue => {
  return take(output, {
    DateValue: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LongValue: __expectLong,
    StringListValue: _json,
    StringValue: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DocumentAttributeValueCountPair
 */
const de_DocumentAttributeValueCountPair = (output: any, context: __SerdeContext): DocumentAttributeValueCountPair => {
  return take(output, {
    Count: __expectInt32,
    DocumentAttributeValue: (_: any) => de_DocumentAttributeValue(_, context),
    FacetResults: (_: any) => de_FacetResultList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DocumentAttributeValueCountPairList
 */
const de_DocumentAttributeValueCountPairList = (
  output: any,
  context: __SerdeContext
): DocumentAttributeValueCountPair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DocumentAttributeValueCountPair(entry, context);
    });
  return retVal;
};

// de_DocumentMetadataConfiguration omitted.

// de_DocumentMetadataConfigurationList omitted.

// de_DocumentsMetadataConfiguration omitted.

// de_DocumentStatusList omitted.

// de_EntityDisplayData omitted.

// de_EntityFilter omitted.

// de_ExcludeMimeTypesList omitted.

// de_ExcludeSharedDrivesList omitted.

// de_ExcludeUserAccountsList omitted.

// de_ExperienceConfiguration omitted.

// de_ExperienceEndpoint omitted.

// de_ExperienceEndpoints omitted.

// de_ExperienceEntitiesSummary omitted.

// de_ExperienceEntitiesSummaryList omitted.

/**
 * deserializeAws_json1_1ExperiencesSummary
 */
const de_ExperiencesSummary = (output: any, context: __SerdeContext): ExperiencesSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Endpoints: _json,
    Id: __expectString,
    Name: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ExperiencesSummaryList
 */
const de_ExperiencesSummaryList = (output: any, context: __SerdeContext): ExperiencesSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExperiencesSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FacetResult
 */
const de_FacetResult = (output: any, context: __SerdeContext): FacetResult => {
  return take(output, {
    DocumentAttributeKey: __expectString,
    DocumentAttributeValueCountPairs: (_: any) => de_DocumentAttributeValueCountPairList(_, context),
    DocumentAttributeValueType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1FacetResultList
 */
const de_FacetResultList = (output: any, context: __SerdeContext): FacetResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FacetResult(entry, context);
    });
  return retVal;
};

// de_FailedEntity omitted.

// de_FailedEntityList omitted.

// de_FaqIdsList omitted.

// de_FaqStatistics omitted.

/**
 * deserializeAws_json1_1FaqSummary
 */
const de_FaqSummary = (output: any, context: __SerdeContext): FaqSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FileFormat: __expectString,
    Id: __expectString,
    LanguageCode: __expectString,
    Name: __expectString,
    Status: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1FaqSummaryItems
 */
const de_FaqSummaryItems = (output: any, context: __SerdeContext): FaqSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FaqSummary(entry, context);
    });
  return retVal;
};

// de_FeaturedDocument omitted.

// de_FeaturedDocumentList omitted.

// de_FeaturedDocumentMissing omitted.

// de_FeaturedDocumentMissingList omitted.

// de_FeaturedDocumentWithMetadata omitted.

// de_FeaturedDocumentWithMetadataList omitted.

// de_FeaturedResultsConflictException omitted.

/**
 * deserializeAws_json1_1FeaturedResultsItem
 */
const de_FeaturedResultsItem = (output: any, context: __SerdeContext): FeaturedResultsItem => {
  return take(output, {
    AdditionalAttributes: _json,
    DocumentAttributes: (_: any) => de_DocumentAttributeList(_, context),
    DocumentExcerpt: _json,
    DocumentId: __expectString,
    DocumentTitle: _json,
    DocumentURI: __expectString,
    FeedbackToken: __expectString,
    Id: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1FeaturedResultsItemList
 */
const de_FeaturedResultsItemList = (output: any, context: __SerdeContext): FeaturedResultsItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FeaturedResultsItem(entry, context);
    });
  return retVal;
};

// de_FeaturedResultsSet omitted.

// de_FeaturedResultsSetSummary omitted.

// de_FeaturedResultsSetSummaryItems omitted.

// de_FolderIdList omitted.

// de_FsxConfiguration omitted.

/**
 * deserializeAws_json1_1GetQuerySuggestionsResponse
 */
const de_GetQuerySuggestionsResponse = (output: any, context: __SerdeContext): GetQuerySuggestionsResponse => {
  return take(output, {
    QuerySuggestionsId: __expectString,
    Suggestions: (_: any) => de_SuggestionList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetSnapshotsResponse
 */
const de_GetSnapshotsResponse = (output: any, context: __SerdeContext): GetSnapshotsResponse => {
  return take(output, {
    NextToken: __expectString,
    SnapShotTimeFilter: (_: any) => de_TimeRange(_, context),
    SnapshotsData: _json,
    SnapshotsDataHeader: _json,
  }) as any;
};

// de_GitHubConfiguration omitted.

// de_GitHubDocumentCrawlProperties omitted.

// de_GoogleDriveConfiguration omitted.

/**
 * deserializeAws_json1_1GroupOrderingIdSummaries
 */
const de_GroupOrderingIdSummaries = (output: any, context: __SerdeContext): GroupOrderingIdSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GroupOrderingIdSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GroupOrderingIdSummary
 */
const de_GroupOrderingIdSummary = (output: any, context: __SerdeContext): GroupOrderingIdSummary => {
  return take(output, {
    FailureReason: __expectString,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OrderingId: __expectLong,
    ReceivedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

// de_GroupSummary omitted.

// de_HierarchicalPrincipal omitted.

// de_HierarchicalPrincipalList omitted.

// de_Highlight omitted.

// de_HighlightList omitted.

/**
 * deserializeAws_json1_1HookConfiguration
 */
const de_HookConfiguration = (output: any, context: __SerdeContext): HookConfiguration => {
  return take(output, {
    InvocationCondition: (_: any) => de_DocumentAttributeCondition(_, context),
    LambdaArn: __expectString,
    S3Bucket: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1IndexConfigurationSummary
 */
const de_IndexConfigurationSummary = (output: any, context: __SerdeContext): IndexConfigurationSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Edition: __expectString,
    Id: __expectString,
    Name: __expectString,
    Status: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1IndexConfigurationSummaryList
 */
const de_IndexConfigurationSummaryList = (output: any, context: __SerdeContext): IndexConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IndexConfigurationSummary(entry, context);
    });
  return retVal;
};

// de_IndexStatistics omitted.

/**
 * deserializeAws_json1_1InlineCustomDocumentEnrichmentConfiguration
 */
const de_InlineCustomDocumentEnrichmentConfiguration = (
  output: any,
  context: __SerdeContext
): InlineCustomDocumentEnrichmentConfiguration => {
  return take(output, {
    Condition: (_: any) => de_DocumentAttributeCondition(_, context),
    DocumentContentDeletion: __expectBoolean,
    Target: (_: any) => de_DocumentAttributeTarget(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1InlineCustomDocumentEnrichmentConfigurationList
 */
const de_InlineCustomDocumentEnrichmentConfigurationList = (
  output: any,
  context: __SerdeContext
): InlineCustomDocumentEnrichmentConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InlineCustomDocumentEnrichmentConfiguration(entry, context);
    });
  return retVal;
};

// de_InternalServerException omitted.

// de_InvalidRequestException omitted.

// de_IssueSubEntityFilter omitted.

// de_IssueType omitted.

// de_JiraConfiguration omitted.

// de_JiraStatus omitted.

// de_JsonTokenTypeConfiguration omitted.

// de_JwtTokenTypeConfiguration omitted.

// de_ListAccessControlConfigurationsResponse omitted.

/**
 * deserializeAws_json1_1ListDataSourcesResponse
 */
const de_ListDataSourcesResponse = (output: any, context: __SerdeContext): ListDataSourcesResponse => {
  return take(output, {
    NextToken: __expectString,
    SummaryItems: (_: any) => de_DataSourceSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListDataSourceSyncJobsResponse
 */
const de_ListDataSourceSyncJobsResponse = (output: any, context: __SerdeContext): ListDataSourceSyncJobsResponse => {
  return take(output, {
    History: (_: any) => de_DataSourceSyncJobHistoryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListEntityPersonasResponse
 */
const de_ListEntityPersonasResponse = (output: any, context: __SerdeContext): ListEntityPersonasResponse => {
  return take(output, {
    NextToken: __expectString,
    SummaryItems: (_: any) => de_PersonasSummaryList(_, context),
  }) as any;
};

// de_ListExperienceEntitiesResponse omitted.

/**
 * deserializeAws_json1_1ListExperiencesResponse
 */
const de_ListExperiencesResponse = (output: any, context: __SerdeContext): ListExperiencesResponse => {
  return take(output, {
    NextToken: __expectString,
    SummaryItems: (_: any) => de_ExperiencesSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListFaqsResponse
 */
const de_ListFaqsResponse = (output: any, context: __SerdeContext): ListFaqsResponse => {
  return take(output, {
    FaqSummaryItems: (_: any) => de_FaqSummaryItems(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListFeaturedResultsSetsResponse omitted.

// de_ListGroupsOlderThanOrderingIdResponse omitted.

/**
 * deserializeAws_json1_1ListIndicesResponse
 */
const de_ListIndicesResponse = (output: any, context: __SerdeContext): ListIndicesResponse => {
  return take(output, {
    IndexConfigurationSummaryItems: (_: any) => de_IndexConfigurationSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListOfGroupSummaries omitted.

/**
 * deserializeAws_json1_1ListQuerySuggestionsBlockListsResponse
 */
const de_ListQuerySuggestionsBlockListsResponse = (
  output: any,
  context: __SerdeContext
): ListQuerySuggestionsBlockListsResponse => {
  return take(output, {
    BlockListSummaryItems: (_: any) => de_QuerySuggestionsBlockListSummaryItems(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

/**
 * deserializeAws_json1_1ListThesauriResponse
 */
const de_ListThesauriResponse = (output: any, context: __SerdeContext): ListThesauriResponse => {
  return take(output, {
    NextToken: __expectString,
    ThesaurusSummaryItems: (_: any) => de_ThesaurusSummaryItems(_, context),
  }) as any;
};

// de_OneDriveConfiguration omitted.

// de_OneDriveUserList omitted.

// de_OneDriveUsers omitted.

// de_OnPremiseConfiguration omitted.

/**
 * deserializeAws_json1_1PersonasSummary
 */
const de_PersonasSummary = (output: any, context: __SerdeContext): PersonasSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EntityId: __expectString,
    Persona: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1PersonasSummaryList
 */
const de_PersonasSummaryList = (output: any, context: __SerdeContext): PersonasSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PersonasSummary(entry, context);
    });
  return retVal;
};

// de_Principal omitted.

// de_PrincipalList omitted.

// de_PrivateChannelFilter omitted.

// de_Project omitted.

// de_ProxyConfiguration omitted.

// de_PublicChannelFilter omitted.

/**
 * deserializeAws_json1_1QueryResult
 */
const de_QueryResult = (output: any, context: __SerdeContext): QueryResult => {
  return take(output, {
    FacetResults: (_: any) => de_FacetResultList(_, context),
    FeaturedResultsItems: (_: any) => de_FeaturedResultsItemList(_, context),
    QueryId: __expectString,
    ResultItems: (_: any) => de_QueryResultItemList(_, context),
    SpellCorrectedQueries: _json,
    TotalNumberOfResults: __expectInt32,
    Warnings: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1QueryResultItem
 */
const de_QueryResultItem = (output: any, context: __SerdeContext): QueryResultItem => {
  return take(output, {
    AdditionalAttributes: _json,
    DocumentAttributes: (_: any) => de_DocumentAttributeList(_, context),
    DocumentExcerpt: _json,
    DocumentId: __expectString,
    DocumentTitle: _json,
    DocumentURI: __expectString,
    FeedbackToken: __expectString,
    Format: __expectString,
    Id: __expectString,
    ScoreAttributes: _json,
    TableExcerpt: _json,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1QueryResultItemList
 */
const de_QueryResultItemList = (output: any, context: __SerdeContext): QueryResultItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QueryResultItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1QuerySuggestionsBlockListSummary
 */
const de_QuerySuggestionsBlockListSummary = (
  output: any,
  context: __SerdeContext
): QuerySuggestionsBlockListSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    ItemCount: __expectInt32,
    Name: __expectString,
    Status: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1QuerySuggestionsBlockListSummaryItems
 */
const de_QuerySuggestionsBlockListSummaryItems = (
  output: any,
  context: __SerdeContext
): QuerySuggestionsBlockListSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QuerySuggestionsBlockListSummary(entry, context);
    });
  return retVal;
};

// de_QueryTextList omitted.

// de_QuipConfiguration omitted.

// de_Relevance omitted.

// de_RepositoryNames omitted.

// de_ResourceAlreadyExistException omitted.

// de_ResourceInUseException omitted.

// de_ResourceNotFoundException omitted.

// de_ResourceUnavailableException omitted.

/**
 * deserializeAws_json1_1RetrieveResult
 */
const de_RetrieveResult = (output: any, context: __SerdeContext): RetrieveResult => {
  return take(output, {
    QueryId: __expectString,
    ResultItems: (_: any) => de_RetrieveResultItemList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RetrieveResultItem
 */
const de_RetrieveResultItem = (output: any, context: __SerdeContext): RetrieveResultItem => {
  return take(output, {
    Content: __expectString,
    DocumentAttributes: (_: any) => de_DocumentAttributeList(_, context),
    DocumentId: __expectString,
    DocumentTitle: __expectString,
    DocumentURI: __expectString,
    Id: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RetrieveResultItemList
 */
const de_RetrieveResultItemList = (output: any, context: __SerdeContext): RetrieveResultItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RetrieveResultItem(entry, context);
    });
  return retVal;
};

// de_S3DataSourceConfiguration omitted.

// de_S3Path omitted.

// de_SaaSConfiguration omitted.

// de_SalesforceChatterFeedConfiguration omitted.

// de_SalesforceChatterFeedIncludeFilterTypes omitted.

// de_SalesforceConfiguration omitted.

// de_SalesforceCustomKnowledgeArticleTypeConfiguration omitted.

// de_SalesforceCustomKnowledgeArticleTypeConfigurationList omitted.

// de_SalesforceKnowledgeArticleConfiguration omitted.

// de_SalesforceKnowledgeArticleStateList omitted.

// de_SalesforceStandardKnowledgeArticleTypeConfiguration omitted.

// de_SalesforceStandardObjectAttachmentConfiguration omitted.

// de_SalesforceStandardObjectConfiguration omitted.

// de_SalesforceStandardObjectConfigurationList omitted.

// de_ScoreAttributes omitted.

// de_Search omitted.

// de_SecurityGroupIdList omitted.

// de_SeedUrlConfiguration omitted.

// de_SeedUrlList omitted.

// de_ServerSideEncryptionConfiguration omitted.

// de_ServiceNowConfiguration omitted.

// de_ServiceNowKnowledgeArticleConfiguration omitted.

// de_ServiceNowServiceCatalogConfiguration omitted.

// de_ServiceQuotaExceededException omitted.

// de_SharePointConfiguration omitted.

// de_SharePointUrlList omitted.

// de_SiteMapsConfiguration omitted.

// de_SiteMapsList omitted.

// de_SlackConfiguration omitted.

// de_SlackEntityList omitted.

// de_SnapshotsDataHeaderFields omitted.

// de_SnapshotsDataRecord omitted.

// de_SnapshotsDataRecords omitted.

/**
 * deserializeAws_json1_1SourceDocument
 */
const de_SourceDocument = (output: any, context: __SerdeContext): SourceDocument => {
  return take(output, {
    AdditionalAttributes: (_: any) => de_DocumentAttributeList(_, context),
    DocumentId: __expectString,
    SuggestionAttributes: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1SourceDocuments
 */
const de_SourceDocuments = (output: any, context: __SerdeContext): SourceDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SourceDocument(entry, context);
    });
  return retVal;
};

// de_SpellCorrectedQuery omitted.

// de_SpellCorrectedQueryList omitted.

// de_SqlConfiguration omitted.

// de_StartDataSourceSyncJobResponse omitted.

// de_Status omitted.

// de_StringList omitted.

// de_SubnetIdList omitted.

// de_SuggestableConfig omitted.

// de_SuggestableConfigList omitted.

/**
 * deserializeAws_json1_1Suggestion
 */
const de_Suggestion = (output: any, context: __SerdeContext): Suggestion => {
  return take(output, {
    Id: __expectString,
    SourceDocuments: (_: any) => de_SourceDocuments(_, context),
    Value: _json,
  }) as any;
};

// de_SuggestionHighlight omitted.

// de_SuggestionHighlightList omitted.

/**
 * deserializeAws_json1_1SuggestionList
 */
const de_SuggestionList = (output: any, context: __SerdeContext): Suggestion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Suggestion(entry, context);
    });
  return retVal;
};

// de_SuggestionTextWithHighlights omitted.

// de_SuggestionValue omitted.

// de_TableCell omitted.

// de_TableCellList omitted.

// de_TableExcerpt omitted.

// de_TableRow omitted.

// de_TableRowList omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

/**
 * deserializeAws_json1_1Template
 */
const de_Template = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

/**
 * deserializeAws_json1_1TemplateConfiguration
 */
const de_TemplateConfiguration = (output: any, context: __SerdeContext): TemplateConfiguration => {
  return take(output, {
    Template: (_: any) => de_Template(_, context),
  }) as any;
};

// de_TextDocumentStatistics omitted.

// de_TextWithHighlights omitted.

/**
 * deserializeAws_json1_1ThesaurusSummary
 */
const de_ThesaurusSummary = (output: any, context: __SerdeContext): ThesaurusSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    Name: __expectString,
    Status: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1ThesaurusSummaryItems
 */
const de_ThesaurusSummaryItems = (output: any, context: __SerdeContext): ThesaurusSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ThesaurusSummary(entry, context);
    });
  return retVal;
};

// de_ThrottlingException omitted.

/**
 * deserializeAws_json1_1TimeRange
 */
const de_TimeRange = (output: any, context: __SerdeContext): TimeRange => {
  return take(output, {
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_UntagResourceResponse omitted.

// de_UpdateAccessControlConfigurationResponse omitted.

// de_UpdateFeaturedResultsSetResponse omitted.

// de_Urls omitted.

// de_UserGroupResolutionConfiguration omitted.

// de_UserIdentityConfiguration omitted.

// de_UserTokenConfiguration omitted.

// de_UserTokenConfigurationList omitted.

// de_ValidationException omitted.

// de_ValueImportanceMap omitted.

// de_Warning omitted.

// de_WarningList omitted.

/**
 * deserializeAws_json1_1WebCrawlerConfiguration
 */
const de_WebCrawlerConfiguration = (output: any, context: __SerdeContext): WebCrawlerConfiguration => {
  return take(output, {
    AuthenticationConfiguration: _json,
    CrawlDepth: __expectInt32,
    MaxContentSizePerPageInMegaBytes: __limitedParseFloat32,
    MaxLinksPerPage: __expectInt32,
    MaxUrlsPerMinuteCrawlRate: __expectInt32,
    ProxyConfiguration: _json,
    UrlExclusionPatterns: _json,
    UrlInclusionPatterns: _json,
    Urls: _json,
  }) as any;
};

// de_WorkDocsConfiguration omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSKendraFrontendService.${operation}`,
  };
}

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
