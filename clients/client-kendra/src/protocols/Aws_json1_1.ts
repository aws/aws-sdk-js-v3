// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
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
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
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
  AccessControlConfigurationSummary,
  AccessControlListConfiguration,
  AccessDeniedException,
  AclConfiguration,
  AdditionalResultAttribute,
  AdditionalResultAttributeValue,
  AlfrescoConfiguration,
  AlfrescoEntity,
  AssociateEntitiesToExperienceRequest,
  AssociateEntitiesToExperienceResponse,
  AssociatePersonasToEntitiesRequest,
  AssociatePersonasToEntitiesResponse,
  AuthenticationConfiguration,
  BasicAuthenticationConfiguration,
  BatchDeleteDocumentRequest,
  BatchDeleteDocumentResponse,
  BatchDeleteDocumentResponseFailedDocument,
  BatchDeleteFeaturedResultsSetError,
  BatchDeleteFeaturedResultsSetRequest,
  BatchDeleteFeaturedResultsSetResponse,
  BatchGetDocumentStatusRequest,
  BatchGetDocumentStatusResponse,
  BatchGetDocumentStatusResponseError,
  BatchPutDocumentRequest,
  BatchPutDocumentResponse,
  BatchPutDocumentResponseFailedDocument,
  BoxConfiguration,
  CapacityUnitsConfiguration,
  ClearQuerySuggestionsRequest,
  ColumnConfiguration,
  ConflictException,
  ConflictingItem,
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
  Correction,
  CreateAccessControlConfigurationRequest,
  CreateAccessControlConfigurationResponse,
  CreateDataSourceRequest,
  CreateDataSourceResponse,
  CreateExperienceRequest,
  CreateExperienceResponse,
  CreateFaqRequest,
  CreateFaqResponse,
  CreateFeaturedResultsSetRequest,
  CreateFeaturedResultsSetResponse,
  CreateIndexRequest,
  CreateIndexResponse,
  CreateQuerySuggestionsBlockListRequest,
  CreateQuerySuggestionsBlockListResponse,
  CreateThesaurusRequest,
  CreateThesaurusResponse,
  CustomDocumentEnrichmentConfiguration,
  DatabaseConfiguration,
  DataSourceConfiguration,
  DataSourceGroup,
  DataSourceSummary,
  DataSourceSyncJob,
  DataSourceSyncJobMetrics,
  DataSourceSyncJobMetricTarget,
  DataSourceToIndexFieldMapping,
  DataSourceVpcConfiguration,
  DeleteAccessControlConfigurationRequest,
  DeleteAccessControlConfigurationResponse,
  DeleteDataSourceRequest,
  DeleteExperienceRequest,
  DeleteExperienceResponse,
  DeleteFaqRequest,
  DeleteIndexRequest,
  DeletePrincipalMappingRequest,
  DeleteQuerySuggestionsBlockListRequest,
  DeleteThesaurusRequest,
  DescribeAccessControlConfigurationRequest,
  DescribeAccessControlConfigurationResponse,
  DescribeDataSourceRequest,
  DescribeDataSourceResponse,
  DescribeExperienceRequest,
  DescribeExperienceResponse,
  DescribeFaqRequest,
  DescribeFaqResponse,
  DescribeFeaturedResultsSetRequest,
  DescribeFeaturedResultsSetResponse,
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
  DisassociateEntitiesFromExperienceResponse,
  DisassociatePersonasFromEntitiesRequest,
  DisassociatePersonasFromEntitiesResponse,
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
  EntityDisplayData,
  EntityPersonaConfiguration,
  ExperienceConfiguration,
  ExperienceEndpoint,
  ExperienceEntitiesSummary,
  ExperiencesSummary,
  FailedEntity,
  FaqStatistics,
  FaqSummary,
  FeaturedDocument,
  FeaturedDocumentMissing,
  FeaturedDocumentWithMetadata,
  FeaturedResultsConflictException,
  FeaturedResultsItem,
  FeaturedResultsSet,
  FeaturedResultsSetSummary,
  FsxConfiguration,
  GetQuerySuggestionsRequest,
  GetQuerySuggestionsResponse,
  GetSnapshotsRequest,
  GetSnapshotsResponse,
  GitHubConfiguration,
  GitHubDocumentCrawlProperties,
  GoogleDriveConfiguration,
  GroupMembers,
  GroupOrderingIdSummary,
  GroupSummary,
  HierarchicalPrincipal,
  Highlight,
  HookConfiguration,
  IndexConfigurationSummary,
  IndexStatistics,
  InlineCustomDocumentEnrichmentConfiguration,
  InternalServerException,
  InvalidRequestException,
  IssueSubEntity,
  JiraConfiguration,
  JsonTokenTypeConfiguration,
  JwtTokenTypeConfiguration,
  ListAccessControlConfigurationsRequest,
  ListAccessControlConfigurationsResponse,
  ListDataSourcesRequest,
  ListDataSourcesResponse,
  ListDataSourceSyncJobsRequest,
  ListDataSourceSyncJobsResponse,
  ListEntityPersonasRequest,
  ListEntityPersonasResponse,
  ListExperienceEntitiesRequest,
  ListExperienceEntitiesResponse,
  ListExperiencesRequest,
  ListExperiencesResponse,
  ListFaqsRequest,
  ListFaqsResponse,
  ListFeaturedResultsSetsRequest,
  ListFeaturedResultsSetsResponse,
  ListGroupsOlderThanOrderingIdRequest,
  ListGroupsOlderThanOrderingIdResponse,
  ListIndicesRequest,
  ListIndicesResponse,
  ListQuerySuggestionsBlockListsRequest,
  ListQuerySuggestionsBlockListsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
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
  QueryResultItem,
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
  ScoreAttributes,
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
  SpellCorrectedQuery,
  SpellCorrectionConfiguration,
  SqlConfiguration,
  Status,
  Suggestion,
  SuggestionHighlight,
  SuggestionTextWithHighlights,
  SuggestionValue,
  TableCell,
  TableExcerpt,
  TableRow,
  Tag,
  TemplateConfiguration,
  TextDocumentStatistics,
  TextWithHighlights,
  ThesaurusSummary,
  ThrottlingException,
  TimeRange,
  Urls,
  UserContext,
  UserGroupResolutionConfiguration,
  UserIdentityConfiguration,
  UserTokenConfiguration,
  ValidationException,
  Warning,
  WebCrawlerConfiguration,
  WorkDocsConfiguration,
} from "../models/models_0";
import {
  AttributeFilter,
  ClickFeedback,
  DocumentAttributeValueCountPair,
  Facet,
  FacetResult,
  QueryRequest,
  QueryResult,
  RelevanceFeedback,
  ResourceInUseException,
  StartDataSourceSyncJobRequest,
  StartDataSourceSyncJobResponse,
  StopDataSourceSyncJobRequest,
  SubmitFeedbackRequest,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateAccessControlConfigurationRequest,
  UpdateAccessControlConfigurationResponse,
  UpdateDataSourceRequest,
  UpdateExperienceRequest,
  UpdateFeaturedResultsSetRequest,
  UpdateFeaturedResultsSetResponse,
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.AssociateEntitiesToExperience",
  };
  let body: any;
  body = JSON.stringify(se_AssociateEntitiesToExperienceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociatePersonasToEntitiesCommand
 */
export const se_AssociatePersonasToEntitiesCommand = async (
  input: AssociatePersonasToEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.AssociatePersonasToEntities",
  };
  let body: any;
  body = JSON.stringify(se_AssociatePersonasToEntitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDeleteDocumentCommand
 */
export const se_BatchDeleteDocumentCommand = async (
  input: BatchDeleteDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.BatchDeleteDocument",
  };
  let body: any;
  body = JSON.stringify(se_BatchDeleteDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDeleteFeaturedResultsSetCommand
 */
export const se_BatchDeleteFeaturedResultsSetCommand = async (
  input: BatchDeleteFeaturedResultsSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.BatchDeleteFeaturedResultsSet",
  };
  let body: any;
  body = JSON.stringify(se_BatchDeleteFeaturedResultsSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetDocumentStatusCommand
 */
export const se_BatchGetDocumentStatusCommand = async (
  input: BatchGetDocumentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.BatchGetDocumentStatus",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.BatchPutDocument",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ClearQuerySuggestions",
  };
  let body: any;
  body = JSON.stringify(se_ClearQuerySuggestionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAccessControlConfigurationCommand
 */
export const se_CreateAccessControlConfigurationCommand = async (
  input: CreateAccessControlConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.CreateAccessControlConfiguration",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.CreateDataSource",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.CreateExperience",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.CreateFaq",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.CreateFeaturedResultsSet",
  };
  let body: any;
  body = JSON.stringify(se_CreateFeaturedResultsSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateIndexCommand
 */
export const se_CreateIndexCommand = async (
  input: CreateIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.CreateIndex",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.CreateQuerySuggestionsBlockList",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.CreateThesaurus",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DeleteAccessControlConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_DeleteAccessControlConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDataSourceCommand
 */
export const se_DeleteDataSourceCommand = async (
  input: DeleteDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DeleteDataSource",
  };
  let body: any;
  body = JSON.stringify(se_DeleteDataSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteExperienceCommand
 */
export const se_DeleteExperienceCommand = async (
  input: DeleteExperienceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DeleteExperience",
  };
  let body: any;
  body = JSON.stringify(se_DeleteExperienceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFaqCommand
 */
export const se_DeleteFaqCommand = async (
  input: DeleteFaqCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DeleteFaq",
  };
  let body: any;
  body = JSON.stringify(se_DeleteFaqRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteIndexCommand
 */
export const se_DeleteIndexCommand = async (
  input: DeleteIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DeleteIndex",
  };
  let body: any;
  body = JSON.stringify(se_DeleteIndexRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePrincipalMappingCommand
 */
export const se_DeletePrincipalMappingCommand = async (
  input: DeletePrincipalMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DeletePrincipalMapping",
  };
  let body: any;
  body = JSON.stringify(se_DeletePrincipalMappingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteQuerySuggestionsBlockListCommand
 */
export const se_DeleteQuerySuggestionsBlockListCommand = async (
  input: DeleteQuerySuggestionsBlockListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DeleteQuerySuggestionsBlockList",
  };
  let body: any;
  body = JSON.stringify(se_DeleteQuerySuggestionsBlockListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteThesaurusCommand
 */
export const se_DeleteThesaurusCommand = async (
  input: DeleteThesaurusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DeleteThesaurus",
  };
  let body: any;
  body = JSON.stringify(se_DeleteThesaurusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAccessControlConfigurationCommand
 */
export const se_DescribeAccessControlConfigurationCommand = async (
  input: DescribeAccessControlConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DescribeAccessControlConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_DescribeAccessControlConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDataSourceCommand
 */
export const se_DescribeDataSourceCommand = async (
  input: DescribeDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DescribeDataSource",
  };
  let body: any;
  body = JSON.stringify(se_DescribeDataSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeExperienceCommand
 */
export const se_DescribeExperienceCommand = async (
  input: DescribeExperienceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DescribeExperience",
  };
  let body: any;
  body = JSON.stringify(se_DescribeExperienceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFaqCommand
 */
export const se_DescribeFaqCommand = async (
  input: DescribeFaqCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DescribeFaq",
  };
  let body: any;
  body = JSON.stringify(se_DescribeFaqRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFeaturedResultsSetCommand
 */
export const se_DescribeFeaturedResultsSetCommand = async (
  input: DescribeFeaturedResultsSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DescribeFeaturedResultsSet",
  };
  let body: any;
  body = JSON.stringify(se_DescribeFeaturedResultsSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeIndexCommand
 */
export const se_DescribeIndexCommand = async (
  input: DescribeIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DescribeIndex",
  };
  let body: any;
  body = JSON.stringify(se_DescribeIndexRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePrincipalMappingCommand
 */
export const se_DescribePrincipalMappingCommand = async (
  input: DescribePrincipalMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DescribePrincipalMapping",
  };
  let body: any;
  body = JSON.stringify(se_DescribePrincipalMappingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeQuerySuggestionsBlockListCommand
 */
export const se_DescribeQuerySuggestionsBlockListCommand = async (
  input: DescribeQuerySuggestionsBlockListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DescribeQuerySuggestionsBlockList",
  };
  let body: any;
  body = JSON.stringify(se_DescribeQuerySuggestionsBlockListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeQuerySuggestionsConfigCommand
 */
export const se_DescribeQuerySuggestionsConfigCommand = async (
  input: DescribeQuerySuggestionsConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DescribeQuerySuggestionsConfig",
  };
  let body: any;
  body = JSON.stringify(se_DescribeQuerySuggestionsConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeThesaurusCommand
 */
export const se_DescribeThesaurusCommand = async (
  input: DescribeThesaurusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DescribeThesaurus",
  };
  let body: any;
  body = JSON.stringify(se_DescribeThesaurusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateEntitiesFromExperienceCommand
 */
export const se_DisassociateEntitiesFromExperienceCommand = async (
  input: DisassociateEntitiesFromExperienceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DisassociateEntitiesFromExperience",
  };
  let body: any;
  body = JSON.stringify(se_DisassociateEntitiesFromExperienceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociatePersonasFromEntitiesCommand
 */
export const se_DisassociatePersonasFromEntitiesCommand = async (
  input: DisassociatePersonasFromEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DisassociatePersonasFromEntities",
  };
  let body: any;
  body = JSON.stringify(se_DisassociatePersonasFromEntitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetQuerySuggestionsCommand
 */
export const se_GetQuerySuggestionsCommand = async (
  input: GetQuerySuggestionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.GetQuerySuggestions",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.GetSnapshots",
  };
  let body: any;
  body = JSON.stringify(se_GetSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAccessControlConfigurationsCommand
 */
export const se_ListAccessControlConfigurationsCommand = async (
  input: ListAccessControlConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListAccessControlConfigurations",
  };
  let body: any;
  body = JSON.stringify(se_ListAccessControlConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDataSourcesCommand
 */
export const se_ListDataSourcesCommand = async (
  input: ListDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListDataSources",
  };
  let body: any;
  body = JSON.stringify(se_ListDataSourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDataSourceSyncJobsCommand
 */
export const se_ListDataSourceSyncJobsCommand = async (
  input: ListDataSourceSyncJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListDataSourceSyncJobs",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListEntityPersonas",
  };
  let body: any;
  body = JSON.stringify(se_ListEntityPersonasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListExperienceEntitiesCommand
 */
export const se_ListExperienceEntitiesCommand = async (
  input: ListExperienceEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListExperienceEntities",
  };
  let body: any;
  body = JSON.stringify(se_ListExperienceEntitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListExperiencesCommand
 */
export const se_ListExperiencesCommand = async (
  input: ListExperiencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListExperiences",
  };
  let body: any;
  body = JSON.stringify(se_ListExperiencesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFaqsCommand
 */
export const se_ListFaqsCommand = async (
  input: ListFaqsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListFaqs",
  };
  let body: any;
  body = JSON.stringify(se_ListFaqsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFeaturedResultsSetsCommand
 */
export const se_ListFeaturedResultsSetsCommand = async (
  input: ListFeaturedResultsSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListFeaturedResultsSets",
  };
  let body: any;
  body = JSON.stringify(se_ListFeaturedResultsSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGroupsOlderThanOrderingIdCommand
 */
export const se_ListGroupsOlderThanOrderingIdCommand = async (
  input: ListGroupsOlderThanOrderingIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListGroupsOlderThanOrderingId",
  };
  let body: any;
  body = JSON.stringify(se_ListGroupsOlderThanOrderingIdRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListIndicesCommand
 */
export const se_ListIndicesCommand = async (
  input: ListIndicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListIndices",
  };
  let body: any;
  body = JSON.stringify(se_ListIndicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListQuerySuggestionsBlockListsCommand
 */
export const se_ListQuerySuggestionsBlockListsCommand = async (
  input: ListQuerySuggestionsBlockListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListQuerySuggestionsBlockLists",
  };
  let body: any;
  body = JSON.stringify(se_ListQuerySuggestionsBlockListsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListThesauriCommand
 */
export const se_ListThesauriCommand = async (
  input: ListThesauriCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListThesauri",
  };
  let body: any;
  body = JSON.stringify(se_ListThesauriRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutPrincipalMappingCommand
 */
export const se_PutPrincipalMappingCommand = async (
  input: PutPrincipalMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.PutPrincipalMapping",
  };
  let body: any;
  body = JSON.stringify(se_PutPrincipalMappingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1QueryCommand
 */
export const se_QueryCommand = async (input: QueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.Query",
  };
  let body: any;
  body = JSON.stringify(se_QueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartDataSourceSyncJobCommand
 */
export const se_StartDataSourceSyncJobCommand = async (
  input: StartDataSourceSyncJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.StartDataSourceSyncJob",
  };
  let body: any;
  body = JSON.stringify(se_StartDataSourceSyncJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopDataSourceSyncJobCommand
 */
export const se_StopDataSourceSyncJobCommand = async (
  input: StopDataSourceSyncJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.StopDataSourceSyncJob",
  };
  let body: any;
  body = JSON.stringify(se_StopDataSourceSyncJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SubmitFeedbackCommand
 */
export const se_SubmitFeedbackCommand = async (
  input: SubmitFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.SubmitFeedback",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAccessControlConfigurationCommand
 */
export const se_UpdateAccessControlConfigurationCommand = async (
  input: UpdateAccessControlConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.UpdateAccessControlConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_UpdateAccessControlConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDataSourceCommand
 */
export const se_UpdateDataSourceCommand = async (
  input: UpdateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.UpdateDataSource",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.UpdateExperience",
  };
  let body: any;
  body = JSON.stringify(se_UpdateExperienceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFeaturedResultsSetCommand
 */
export const se_UpdateFeaturedResultsSetCommand = async (
  input: UpdateFeaturedResultsSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.UpdateFeaturedResultsSet",
  };
  let body: any;
  body = JSON.stringify(se_UpdateFeaturedResultsSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateIndexCommand
 */
export const se_UpdateIndexCommand = async (
  input: UpdateIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.UpdateIndex",
  };
  let body: any;
  body = JSON.stringify(se_UpdateIndexRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateQuerySuggestionsBlockListCommand
 */
export const se_UpdateQuerySuggestionsBlockListCommand = async (
  input: UpdateQuerySuggestionsBlockListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.UpdateQuerySuggestionsBlockList",
  };
  let body: any;
  body = JSON.stringify(se_UpdateQuerySuggestionsBlockListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateQuerySuggestionsConfigCommand
 */
export const se_UpdateQuerySuggestionsConfigCommand = async (
  input: UpdateQuerySuggestionsConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.UpdateQuerySuggestionsConfig",
  };
  let body: any;
  body = JSON.stringify(se_UpdateQuerySuggestionsConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateThesaurusCommand
 */
export const se_UpdateThesaurusCommand = async (
  input: UpdateThesaurusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.UpdateThesaurus",
  };
  let body: any;
  body = JSON.stringify(se_UpdateThesaurusRequest(input, context));
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
  contents = de_AssociateEntitiesToExperienceResponse(data, context);
  const response: AssociateEntitiesToExperienceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_AssociatePersonasToEntitiesResponse(data, context);
  const response: AssociatePersonasToEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_BatchDeleteDocumentResponse(data, context);
  const response: BatchDeleteDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_BatchDeleteFeaturedResultsSetResponse(data, context);
  const response: BatchDeleteFeaturedResultsSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_BatchGetDocumentStatusResponse(data, context);
  const response: BatchGetDocumentStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_BatchPutDocumentResponse(data, context);
  const response: BatchPutDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateAccessControlConfigurationResponse(data, context);
  const response: CreateAccessControlConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateDataSourceResponse(data, context);
  const response: CreateDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateExperienceResponse(data, context);
  const response: CreateExperienceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateFaqResponse(data, context);
  const response: CreateFaqCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateFeaturedResultsSetResponse(data, context);
  const response: CreateFeaturedResultsSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateIndexResponse(data, context);
  const response: CreateIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateQuerySuggestionsBlockListResponse(data, context);
  const response: CreateQuerySuggestionsBlockListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateThesaurusResponse(data, context);
  const response: CreateThesaurusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteAccessControlConfigurationResponse(data, context);
  const response: DeleteAccessControlConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteExperienceResponse(data, context);
  const response: DeleteExperienceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeAccessControlConfigurationResponse(data, context);
  const response: DescribeAccessControlConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeFeaturedResultsSetResponse(data, context);
  const response: DescribeFeaturedResultsSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DisassociateEntitiesFromExperienceResponse(data, context);
  const response: DisassociateEntitiesFromExperienceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DisassociatePersonasFromEntitiesResponse(data, context);
  const response: DisassociatePersonasFromEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListAccessControlConfigurationsResponse(data, context);
  const response: ListAccessControlConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListExperienceEntitiesResponse(data, context);
  const response: ListExperienceEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListFeaturedResultsSetsResponse(data, context);
  const response: ListFeaturedResultsSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListGroupsOlderThanOrderingIdResponse(data, context);
  const response: ListGroupsOlderThanOrderingIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StartDataSourceSyncJobResponse(data, context);
  const response: StartDataSourceSyncJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateAccessControlConfigurationResponse(data, context);
  const response: UpdateAccessControlConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateFeaturedResultsSetResponse(data, context);
  const response: UpdateFeaturedResultsSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_AccessDeniedException(body, context);
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
  const deserialized: any = de_ConflictException(body, context);
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
  const deserialized: any = de_FeaturedResultsConflictException(body, context);
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
  const deserialized: any = de_InternalServerException(body, context);
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
  const deserialized: any = de_InvalidRequestException(body, context);
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
  const deserialized: any = de_ResourceAlreadyExistException(body, context);
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
  const deserialized: any = de_ResourceInUseException(body, context);
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
  const deserialized: any = de_ResourceNotFoundException(body, context);
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
  const deserialized: any = de_ResourceUnavailableException(body, context);
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
  const deserialized: any = de_ServiceQuotaExceededException(body, context);
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
  const deserialized: any = de_ThrottlingException(body, context);
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
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AccessControlListConfiguration
 */
const se_AccessControlListConfiguration = (input: AccessControlListConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.KeyPath != null && { KeyPath: input.KeyPath }),
  };
};

/**
 * serializeAws_json1_1AclConfiguration
 */
const se_AclConfiguration = (input: AclConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AllowedGroupsColumnName != null && { AllowedGroupsColumnName: input.AllowedGroupsColumnName }),
  };
};

/**
 * serializeAws_json1_1AlfrescoConfiguration
 */
const se_AlfrescoConfiguration = (input: AlfrescoConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BlogFieldMappings != null && {
      BlogFieldMappings: se_DataSourceToIndexFieldMappingList(input.BlogFieldMappings, context),
    }),
    ...(input.CrawlComments != null && { CrawlComments: input.CrawlComments }),
    ...(input.CrawlSystemFolders != null && { CrawlSystemFolders: input.CrawlSystemFolders }),
    ...(input.DocumentLibraryFieldMappings != null && {
      DocumentLibraryFieldMappings: se_DataSourceToIndexFieldMappingList(input.DocumentLibraryFieldMappings, context),
    }),
    ...(input.EntityFilter != null && { EntityFilter: se_EntityFilter(input.EntityFilter, context) }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.SiteId != null && { SiteId: input.SiteId }),
    ...(input.SiteUrl != null && { SiteUrl: input.SiteUrl }),
    ...(input.SslCertificateS3Path != null && { SslCertificateS3Path: se_S3Path(input.SslCertificateS3Path, context) }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: se_DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
    ...(input.WikiFieldMappings != null && {
      WikiFieldMappings: se_DataSourceToIndexFieldMappingList(input.WikiFieldMappings, context),
    }),
  };
};

/**
 * serializeAws_json1_1AssociateEntitiesToExperienceRequest
 */
const se_AssociateEntitiesToExperienceRequest = (
  input: AssociateEntitiesToExperienceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityList != null && { EntityList: se_AssociateEntityList(input.EntityList, context) }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1AssociateEntityList
 */
const se_AssociateEntityList = (input: EntityConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EntityConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1AssociatePersonasToEntitiesRequest
 */
const se_AssociatePersonasToEntitiesRequest = (
  input: AssociatePersonasToEntitiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.Personas != null && { Personas: se_EntityPersonaConfigurationList(input.Personas, context) }),
  };
};

/**
 * serializeAws_json1_1AttributeFilter
 */
const se_AttributeFilter = (input: AttributeFilter, context: __SerdeContext): any => {
  return {
    ...(input.AndAllFilters != null && { AndAllFilters: se_AttributeFilterList(input.AndAllFilters, context) }),
    ...(input.ContainsAll != null && { ContainsAll: se_DocumentAttribute(input.ContainsAll, context) }),
    ...(input.ContainsAny != null && { ContainsAny: se_DocumentAttribute(input.ContainsAny, context) }),
    ...(input.EqualsTo != null && { EqualsTo: se_DocumentAttribute(input.EqualsTo, context) }),
    ...(input.GreaterThan != null && { GreaterThan: se_DocumentAttribute(input.GreaterThan, context) }),
    ...(input.GreaterThanOrEquals != null && {
      GreaterThanOrEquals: se_DocumentAttribute(input.GreaterThanOrEquals, context),
    }),
    ...(input.LessThan != null && { LessThan: se_DocumentAttribute(input.LessThan, context) }),
    ...(input.LessThanOrEquals != null && { LessThanOrEquals: se_DocumentAttribute(input.LessThanOrEquals, context) }),
    ...(input.NotFilter != null && { NotFilter: se_AttributeFilter(input.NotFilter, context) }),
    ...(input.OrAllFilters != null && { OrAllFilters: se_AttributeFilterList(input.OrAllFilters, context) }),
  };
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
 * serializeAws_json1_1AuthenticationConfiguration
 */
const se_AuthenticationConfiguration = (input: AuthenticationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BasicAuthentication != null && {
      BasicAuthentication: se_BasicAuthenticationConfigurationList(input.BasicAuthentication, context),
    }),
  };
};

/**
 * serializeAws_json1_1BasicAuthenticationConfiguration
 */
const se_BasicAuthenticationConfiguration = (input: BasicAuthenticationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Credentials != null && { Credentials: input.Credentials }),
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

/**
 * serializeAws_json1_1BasicAuthenticationConfigurationList
 */
const se_BasicAuthenticationConfigurationList = (
  input: BasicAuthenticationConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BasicAuthenticationConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1BatchDeleteDocumentRequest
 */
const se_BatchDeleteDocumentRequest = (input: BatchDeleteDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceSyncJobMetricTarget != null && {
      DataSourceSyncJobMetricTarget: se_DataSourceSyncJobMetricTarget(input.DataSourceSyncJobMetricTarget, context),
    }),
    ...(input.DocumentIdList != null && { DocumentIdList: se_DocumentIdList(input.DocumentIdList, context) }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1BatchDeleteFeaturedResultsSetRequest
 */
const se_BatchDeleteFeaturedResultsSetRequest = (
  input: BatchDeleteFeaturedResultsSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FeaturedResultsSetIds != null && {
      FeaturedResultsSetIds: se_FeaturedResultsSetIdList(input.FeaturedResultsSetIds, context),
    }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1BatchGetDocumentStatusRequest
 */
const se_BatchGetDocumentStatusRequest = (input: BatchGetDocumentStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.DocumentInfoList != null && { DocumentInfoList: se_DocumentInfoList(input.DocumentInfoList, context) }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1BatchPutDocumentRequest
 */
const se_BatchPutDocumentRequest = (input: BatchPutDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.CustomDocumentEnrichmentConfiguration != null && {
      CustomDocumentEnrichmentConfiguration: se_CustomDocumentEnrichmentConfiguration(
        input.CustomDocumentEnrichmentConfiguration,
        context
      ),
    }),
    ...(input.Documents != null && { Documents: se_DocumentList(input.Documents, context) }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

/**
 * serializeAws_json1_1BoxConfiguration
 */
const se_BoxConfiguration = (input: BoxConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CommentFieldMappings != null && {
      CommentFieldMappings: se_DataSourceToIndexFieldMappingList(input.CommentFieldMappings, context),
    }),
    ...(input.CrawlComments != null && { CrawlComments: input.CrawlComments }),
    ...(input.CrawlTasks != null && { CrawlTasks: input.CrawlTasks }),
    ...(input.CrawlWebLinks != null && { CrawlWebLinks: input.CrawlWebLinks }),
    ...(input.EnterpriseId != null && { EnterpriseId: input.EnterpriseId }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.FileFieldMappings != null && {
      FileFieldMappings: se_DataSourceToIndexFieldMappingList(input.FileFieldMappings, context),
    }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.TaskFieldMappings != null && {
      TaskFieldMappings: se_DataSourceToIndexFieldMappingList(input.TaskFieldMappings, context),
    }),
    ...(input.UseChangeLog != null && { UseChangeLog: input.UseChangeLog }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: se_DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
    ...(input.WebLinkFieldMappings != null && {
      WebLinkFieldMappings: se_DataSourceToIndexFieldMappingList(input.WebLinkFieldMappings, context),
    }),
  };
};

/**
 * serializeAws_json1_1CapacityUnitsConfiguration
 */
const se_CapacityUnitsConfiguration = (input: CapacityUnitsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.QueryCapacityUnits != null && { QueryCapacityUnits: input.QueryCapacityUnits }),
    ...(input.StorageCapacityUnits != null && { StorageCapacityUnits: input.StorageCapacityUnits }),
  };
};

/**
 * serializeAws_json1_1ChangeDetectingColumns
 */
const se_ChangeDetectingColumns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ClearQuerySuggestionsRequest
 */
const se_ClearQuerySuggestionsRequest = (input: ClearQuerySuggestionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1ClickFeedback
 */
const se_ClickFeedback = (input: ClickFeedback, context: __SerdeContext): any => {
  return {
    ...(input.ClickTime != null && { ClickTime: Math.round(input.ClickTime.getTime() / 1000) }),
    ...(input.ResultId != null && { ResultId: input.ResultId }),
  };
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

/**
 * serializeAws_json1_1ColumnConfiguration
 */
const se_ColumnConfiguration = (input: ColumnConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ChangeDetectingColumns != null && {
      ChangeDetectingColumns: se_ChangeDetectingColumns(input.ChangeDetectingColumns, context),
    }),
    ...(input.DocumentDataColumnName != null && { DocumentDataColumnName: input.DocumentDataColumnName }),
    ...(input.DocumentIdColumnName != null && { DocumentIdColumnName: input.DocumentIdColumnName }),
    ...(input.DocumentTitleColumnName != null && { DocumentTitleColumnName: input.DocumentTitleColumnName }),
    ...(input.FieldMappings != null && {
      FieldMappings: se_DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
  };
};

/**
 * serializeAws_json1_1ConfluenceAttachmentConfiguration
 */
const se_ConfluenceAttachmentConfiguration = (
  input: ConfluenceAttachmentConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttachmentFieldMappings != null && {
      AttachmentFieldMappings: se_ConfluenceAttachmentFieldMappingsList(input.AttachmentFieldMappings, context),
    }),
    ...(input.CrawlAttachments != null && { CrawlAttachments: input.CrawlAttachments }),
  };
};

/**
 * serializeAws_json1_1ConfluenceAttachmentFieldMappingsList
 */
const se_ConfluenceAttachmentFieldMappingsList = (
  input: ConfluenceAttachmentToIndexFieldMapping[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ConfluenceAttachmentToIndexFieldMapping(entry, context);
    });
};

/**
 * serializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping
 */
const se_ConfluenceAttachmentToIndexFieldMapping = (
  input: ConfluenceAttachmentToIndexFieldMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceFieldName != null && { DataSourceFieldName: input.DataSourceFieldName }),
    ...(input.DateFieldFormat != null && { DateFieldFormat: input.DateFieldFormat }),
    ...(input.IndexFieldName != null && { IndexFieldName: input.IndexFieldName }),
  };
};

/**
 * serializeAws_json1_1ConfluenceBlogConfiguration
 */
const se_ConfluenceBlogConfiguration = (input: ConfluenceBlogConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BlogFieldMappings != null && {
      BlogFieldMappings: se_ConfluenceBlogFieldMappingsList(input.BlogFieldMappings, context),
    }),
  };
};

/**
 * serializeAws_json1_1ConfluenceBlogFieldMappingsList
 */
const se_ConfluenceBlogFieldMappingsList = (
  input: ConfluenceBlogToIndexFieldMapping[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ConfluenceBlogToIndexFieldMapping(entry, context);
    });
};

/**
 * serializeAws_json1_1ConfluenceBlogToIndexFieldMapping
 */
const se_ConfluenceBlogToIndexFieldMapping = (
  input: ConfluenceBlogToIndexFieldMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceFieldName != null && { DataSourceFieldName: input.DataSourceFieldName }),
    ...(input.DateFieldFormat != null && { DateFieldFormat: input.DateFieldFormat }),
    ...(input.IndexFieldName != null && { IndexFieldName: input.IndexFieldName }),
  };
};

/**
 * serializeAws_json1_1ConfluenceConfiguration
 */
const se_ConfluenceConfiguration = (input: ConfluenceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AttachmentConfiguration != null && {
      AttachmentConfiguration: se_ConfluenceAttachmentConfiguration(input.AttachmentConfiguration, context),
    }),
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.BlogConfiguration != null && {
      BlogConfiguration: se_ConfluenceBlogConfiguration(input.BlogConfiguration, context),
    }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.PageConfiguration != null && {
      PageConfiguration: se_ConfluencePageConfiguration(input.PageConfiguration, context),
    }),
    ...(input.ProxyConfiguration != null && {
      ProxyConfiguration: se_ProxyConfiguration(input.ProxyConfiguration, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.ServerUrl != null && { ServerUrl: input.ServerUrl }),
    ...(input.SpaceConfiguration != null && {
      SpaceConfiguration: se_ConfluenceSpaceConfiguration(input.SpaceConfiguration, context),
    }),
    ...(input.Version != null && { Version: input.Version }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: se_DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1ConfluencePageConfiguration
 */
const se_ConfluencePageConfiguration = (input: ConfluencePageConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.PageFieldMappings != null && {
      PageFieldMappings: se_ConfluencePageFieldMappingsList(input.PageFieldMappings, context),
    }),
  };
};

/**
 * serializeAws_json1_1ConfluencePageFieldMappingsList
 */
const se_ConfluencePageFieldMappingsList = (
  input: ConfluencePageToIndexFieldMapping[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ConfluencePageToIndexFieldMapping(entry, context);
    });
};

/**
 * serializeAws_json1_1ConfluencePageToIndexFieldMapping
 */
const se_ConfluencePageToIndexFieldMapping = (
  input: ConfluencePageToIndexFieldMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceFieldName != null && { DataSourceFieldName: input.DataSourceFieldName }),
    ...(input.DateFieldFormat != null && { DateFieldFormat: input.DateFieldFormat }),
    ...(input.IndexFieldName != null && { IndexFieldName: input.IndexFieldName }),
  };
};

/**
 * serializeAws_json1_1ConfluenceSpaceConfiguration
 */
const se_ConfluenceSpaceConfiguration = (input: ConfluenceSpaceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CrawlArchivedSpaces != null && { CrawlArchivedSpaces: input.CrawlArchivedSpaces }),
    ...(input.CrawlPersonalSpaces != null && { CrawlPersonalSpaces: input.CrawlPersonalSpaces }),
    ...(input.ExcludeSpaces != null && { ExcludeSpaces: se_ConfluenceSpaceList(input.ExcludeSpaces, context) }),
    ...(input.IncludeSpaces != null && { IncludeSpaces: se_ConfluenceSpaceList(input.IncludeSpaces, context) }),
    ...(input.SpaceFieldMappings != null && {
      SpaceFieldMappings: se_ConfluenceSpaceFieldMappingsList(input.SpaceFieldMappings, context),
    }),
  };
};

/**
 * serializeAws_json1_1ConfluenceSpaceFieldMappingsList
 */
const se_ConfluenceSpaceFieldMappingsList = (
  input: ConfluenceSpaceToIndexFieldMapping[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ConfluenceSpaceToIndexFieldMapping(entry, context);
    });
};

/**
 * serializeAws_json1_1ConfluenceSpaceList
 */
const se_ConfluenceSpaceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ConfluenceSpaceToIndexFieldMapping
 */
const se_ConfluenceSpaceToIndexFieldMapping = (
  input: ConfluenceSpaceToIndexFieldMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceFieldName != null && { DataSourceFieldName: input.DataSourceFieldName }),
    ...(input.DateFieldFormat != null && { DateFieldFormat: input.DateFieldFormat }),
    ...(input.IndexFieldName != null && { IndexFieldName: input.IndexFieldName }),
  };
};

/**
 * serializeAws_json1_1ConnectionConfiguration
 */
const se_ConnectionConfiguration = (input: ConnectionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseHost != null && { DatabaseHost: input.DatabaseHost }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.DatabasePort != null && { DatabasePort: input.DatabasePort }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_1ContentSourceConfiguration
 */
const se_ContentSourceConfiguration = (input: ContentSourceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceIds != null && { DataSourceIds: se_DataSourceIdList(input.DataSourceIds, context) }),
    ...(input.DirectPutContent != null && { DirectPutContent: input.DirectPutContent }),
    ...(input.FaqIds != null && { FaqIds: se_FaqIdsList(input.FaqIds, context) }),
  };
};

/**
 * serializeAws_json1_1CreateAccessControlConfigurationRequest
 */
const se_CreateAccessControlConfigurationRequest = (
  input: CreateAccessControlConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessControlList != null && { AccessControlList: se_PrincipalList(input.AccessControlList, context) }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.HierarchicalAccessControlList != null && {
      HierarchicalAccessControlList: se_HierarchicalPrincipalList(input.HierarchicalAccessControlList, context),
    }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1CreateDataSourceRequest
 */
const se_CreateDataSourceRequest = (input: CreateDataSourceRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Configuration != null && { Configuration: se_DataSourceConfiguration(input.Configuration, context) }),
    ...(input.CustomDocumentEnrichmentConfiguration != null && {
      CustomDocumentEnrichmentConfiguration: se_CustomDocumentEnrichmentConfiguration(
        input.CustomDocumentEnrichmentConfiguration,
        context
      ),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Schedule != null && { Schedule: input.Schedule }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: se_DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateExperienceRequest
 */
const se_CreateExperienceRequest = (input: CreateExperienceRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Configuration != null && { Configuration: se_ExperienceConfiguration(input.Configuration, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

/**
 * serializeAws_json1_1CreateFaqRequest
 */
const se_CreateFaqRequest = (input: CreateFaqRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FileFormat != null && { FileFormat: input.FileFormat }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.S3Path != null && { S3Path: se_S3Path(input.S3Path, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateFeaturedResultsSetRequest
 */
const se_CreateFeaturedResultsSetRequest = (input: CreateFeaturedResultsSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FeaturedDocuments != null && {
      FeaturedDocuments: se_FeaturedDocumentList(input.FeaturedDocuments, context),
    }),
    ...(input.FeaturedResultsSetName != null && { FeaturedResultsSetName: input.FeaturedResultsSetName }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.QueryTexts != null && { QueryTexts: se_QueryTextList(input.QueryTexts, context) }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateIndexRequest
 */
const se_CreateIndexRequest = (input: CreateIndexRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Edition != null && { Edition: input.Edition }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.ServerSideEncryptionConfiguration != null && {
      ServerSideEncryptionConfiguration: se_ServerSideEncryptionConfiguration(
        input.ServerSideEncryptionConfiguration,
        context
      ),
    }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.UserContextPolicy != null && { UserContextPolicy: input.UserContextPolicy }),
    ...(input.UserGroupResolutionConfiguration != null && {
      UserGroupResolutionConfiguration: se_UserGroupResolutionConfiguration(
        input.UserGroupResolutionConfiguration,
        context
      ),
    }),
    ...(input.UserTokenConfigurations != null && {
      UserTokenConfigurations: se_UserTokenConfigurationList(input.UserTokenConfigurations, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateQuerySuggestionsBlockListRequest
 */
const se_CreateQuerySuggestionsBlockListRequest = (
  input: CreateQuerySuggestionsBlockListRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.SourceS3Path != null && { SourceS3Path: se_S3Path(input.SourceS3Path, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateThesaurusRequest
 */
const se_CreateThesaurusRequest = (input: CreateThesaurusRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.SourceS3Path != null && { SourceS3Path: se_S3Path(input.SourceS3Path, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CustomDocumentEnrichmentConfiguration
 */
const se_CustomDocumentEnrichmentConfiguration = (
  input: CustomDocumentEnrichmentConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InlineConfigurations != null && {
      InlineConfigurations: se_InlineCustomDocumentEnrichmentConfigurationList(input.InlineConfigurations, context),
    }),
    ...(input.PostExtractionHookConfiguration != null && {
      PostExtractionHookConfiguration: se_HookConfiguration(input.PostExtractionHookConfiguration, context),
    }),
    ...(input.PreExtractionHookConfiguration != null && {
      PreExtractionHookConfiguration: se_HookConfiguration(input.PreExtractionHookConfiguration, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

/**
 * serializeAws_json1_1DatabaseConfiguration
 */
const se_DatabaseConfiguration = (input: DatabaseConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AclConfiguration != null && { AclConfiguration: se_AclConfiguration(input.AclConfiguration, context) }),
    ...(input.ColumnConfiguration != null && {
      ColumnConfiguration: se_ColumnConfiguration(input.ColumnConfiguration, context),
    }),
    ...(input.ConnectionConfiguration != null && {
      ConnectionConfiguration: se_ConnectionConfiguration(input.ConnectionConfiguration, context),
    }),
    ...(input.DatabaseEngineType != null && { DatabaseEngineType: input.DatabaseEngineType }),
    ...(input.SqlConfiguration != null && { SqlConfiguration: se_SqlConfiguration(input.SqlConfiguration, context) }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: se_DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1DataSourceConfiguration
 */
const se_DataSourceConfiguration = (input: DataSourceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AlfrescoConfiguration != null && {
      AlfrescoConfiguration: se_AlfrescoConfiguration(input.AlfrescoConfiguration, context),
    }),
    ...(input.BoxConfiguration != null && { BoxConfiguration: se_BoxConfiguration(input.BoxConfiguration, context) }),
    ...(input.ConfluenceConfiguration != null && {
      ConfluenceConfiguration: se_ConfluenceConfiguration(input.ConfluenceConfiguration, context),
    }),
    ...(input.DatabaseConfiguration != null && {
      DatabaseConfiguration: se_DatabaseConfiguration(input.DatabaseConfiguration, context),
    }),
    ...(input.FsxConfiguration != null && { FsxConfiguration: se_FsxConfiguration(input.FsxConfiguration, context) }),
    ...(input.GitHubConfiguration != null && {
      GitHubConfiguration: se_GitHubConfiguration(input.GitHubConfiguration, context),
    }),
    ...(input.GoogleDriveConfiguration != null && {
      GoogleDriveConfiguration: se_GoogleDriveConfiguration(input.GoogleDriveConfiguration, context),
    }),
    ...(input.JiraConfiguration != null && {
      JiraConfiguration: se_JiraConfiguration(input.JiraConfiguration, context),
    }),
    ...(input.OneDriveConfiguration != null && {
      OneDriveConfiguration: se_OneDriveConfiguration(input.OneDriveConfiguration, context),
    }),
    ...(input.QuipConfiguration != null && {
      QuipConfiguration: se_QuipConfiguration(input.QuipConfiguration, context),
    }),
    ...(input.S3Configuration != null && {
      S3Configuration: se_S3DataSourceConfiguration(input.S3Configuration, context),
    }),
    ...(input.SalesforceConfiguration != null && {
      SalesforceConfiguration: se_SalesforceConfiguration(input.SalesforceConfiguration, context),
    }),
    ...(input.ServiceNowConfiguration != null && {
      ServiceNowConfiguration: se_ServiceNowConfiguration(input.ServiceNowConfiguration, context),
    }),
    ...(input.SharePointConfiguration != null && {
      SharePointConfiguration: se_SharePointConfiguration(input.SharePointConfiguration, context),
    }),
    ...(input.SlackConfiguration != null && {
      SlackConfiguration: se_SlackConfiguration(input.SlackConfiguration, context),
    }),
    ...(input.TemplateConfiguration != null && {
      TemplateConfiguration: se_TemplateConfiguration(input.TemplateConfiguration, context),
    }),
    ...(input.WebCrawlerConfiguration != null && {
      WebCrawlerConfiguration: se_WebCrawlerConfiguration(input.WebCrawlerConfiguration, context),
    }),
    ...(input.WorkDocsConfiguration != null && {
      WorkDocsConfiguration: se_WorkDocsConfiguration(input.WorkDocsConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1DataSourceGroup
 */
const se_DataSourceGroup = (input: DataSourceGroup, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.GroupId != null && { GroupId: input.GroupId }),
  };
};

/**
 * serializeAws_json1_1DataSourceGroups
 */
const se_DataSourceGroups = (input: DataSourceGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DataSourceGroup(entry, context);
    });
};

/**
 * serializeAws_json1_1DataSourceIdList
 */
const se_DataSourceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DataSourceInclusionsExclusionsStrings
 */
const se_DataSourceInclusionsExclusionsStrings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DataSourceSyncJobMetricTarget
 */
const se_DataSourceSyncJobMetricTarget = (input: DataSourceSyncJobMetricTarget, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.DataSourceSyncJobId != null && { DataSourceSyncJobId: input.DataSourceSyncJobId }),
  };
};

/**
 * serializeAws_json1_1DataSourceToIndexFieldMapping
 */
const se_DataSourceToIndexFieldMapping = (input: DataSourceToIndexFieldMapping, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceFieldName != null && { DataSourceFieldName: input.DataSourceFieldName }),
    ...(input.DateFieldFormat != null && { DateFieldFormat: input.DateFieldFormat }),
    ...(input.IndexFieldName != null && { IndexFieldName: input.IndexFieldName }),
  };
};

/**
 * serializeAws_json1_1DataSourceToIndexFieldMappingList
 */
const se_DataSourceToIndexFieldMappingList = (input: DataSourceToIndexFieldMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DataSourceToIndexFieldMapping(entry, context);
    });
};

/**
 * serializeAws_json1_1DataSourceVpcConfiguration
 */
const se_DataSourceVpcConfiguration = (input: DataSourceVpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: se_SecurityGroupIdList(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIdList(input.SubnetIds, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteAccessControlConfigurationRequest
 */
const se_DeleteAccessControlConfigurationRequest = (
  input: DeleteAccessControlConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1DeleteDataSourceRequest
 */
const se_DeleteDataSourceRequest = (input: DeleteDataSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1DeleteExperienceRequest
 */
const se_DeleteExperienceRequest = (input: DeleteExperienceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1DeleteFaqRequest
 */
const se_DeleteFaqRequest = (input: DeleteFaqRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1DeleteIndexRequest
 */
const se_DeleteIndexRequest = (input: DeleteIndexRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1DeletePrincipalMappingRequest
 */
const se_DeletePrincipalMappingRequest = (input: DeletePrincipalMappingRequest, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.OrderingId != null && { OrderingId: input.OrderingId }),
  };
};

/**
 * serializeAws_json1_1DeleteQuerySuggestionsBlockListRequest
 */
const se_DeleteQuerySuggestionsBlockListRequest = (
  input: DeleteQuerySuggestionsBlockListRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1DeleteThesaurusRequest
 */
const se_DeleteThesaurusRequest = (input: DeleteThesaurusRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1DescribeAccessControlConfigurationRequest
 */
const se_DescribeAccessControlConfigurationRequest = (
  input: DescribeAccessControlConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1DescribeDataSourceRequest
 */
const se_DescribeDataSourceRequest = (input: DescribeDataSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1DescribeExperienceRequest
 */
const se_DescribeExperienceRequest = (input: DescribeExperienceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1DescribeFaqRequest
 */
const se_DescribeFaqRequest = (input: DescribeFaqRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1DescribeFeaturedResultsSetRequest
 */
const se_DescribeFeaturedResultsSetRequest = (
  input: DescribeFeaturedResultsSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FeaturedResultsSetId != null && { FeaturedResultsSetId: input.FeaturedResultsSetId }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1DescribeIndexRequest
 */
const se_DescribeIndexRequest = (input: DescribeIndexRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1DescribePrincipalMappingRequest
 */
const se_DescribePrincipalMappingRequest = (input: DescribePrincipalMappingRequest, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1DescribeQuerySuggestionsBlockListRequest
 */
const se_DescribeQuerySuggestionsBlockListRequest = (
  input: DescribeQuerySuggestionsBlockListRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1DescribeQuerySuggestionsConfigRequest
 */
const se_DescribeQuerySuggestionsConfigRequest = (
  input: DescribeQuerySuggestionsConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1DescribeThesaurusRequest
 */
const se_DescribeThesaurusRequest = (input: DescribeThesaurusRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1DisassociateEntitiesFromExperienceRequest
 */
const se_DisassociateEntitiesFromExperienceRequest = (
  input: DisassociateEntitiesFromExperienceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityList != null && { EntityList: se_DisassociateEntityList(input.EntityList, context) }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1DisassociateEntityList
 */
const se_DisassociateEntityList = (input: EntityConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EntityConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1DisassociatePersonasFromEntitiesRequest
 */
const se_DisassociatePersonasFromEntitiesRequest = (
  input: DisassociatePersonasFromEntitiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityIds != null && { EntityIds: se_EntityIdsList(input.EntityIds, context) }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1Document
 */
const se_Document = (input: Document, context: __SerdeContext): any => {
  return {
    ...(input.AccessControlConfigurationId != null && {
      AccessControlConfigurationId: input.AccessControlConfigurationId,
    }),
    ...(input.AccessControlList != null && { AccessControlList: se_PrincipalList(input.AccessControlList, context) }),
    ...(input.Attributes != null && { Attributes: se_DocumentAttributeList(input.Attributes, context) }),
    ...(input.Blob != null && { Blob: context.base64Encoder(input.Blob) }),
    ...(input.ContentType != null && { ContentType: input.ContentType }),
    ...(input.HierarchicalAccessControlList != null && {
      HierarchicalAccessControlList: se_HierarchicalPrincipalList(input.HierarchicalAccessControlList, context),
    }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.S3Path != null && { S3Path: se_S3Path(input.S3Path, context) }),
    ...(input.Title != null && { Title: input.Title }),
  };
};

/**
 * serializeAws_json1_1DocumentAttribute
 */
const se_DocumentAttribute = (input: DocumentAttribute, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: se_DocumentAttributeValue(input.Value, context) }),
  };
};

/**
 * serializeAws_json1_1DocumentAttributeCondition
 */
const se_DocumentAttributeCondition = (input: DocumentAttributeCondition, context: __SerdeContext): any => {
  return {
    ...(input.ConditionDocumentAttributeKey != null && {
      ConditionDocumentAttributeKey: input.ConditionDocumentAttributeKey,
    }),
    ...(input.ConditionOnValue != null && {
      ConditionOnValue: se_DocumentAttributeValue(input.ConditionOnValue, context),
    }),
    ...(input.Operator != null && { Operator: input.Operator }),
  };
};

/**
 * serializeAws_json1_1DocumentAttributeKeyList
 */
const se_DocumentAttributeKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

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

/**
 * serializeAws_json1_1DocumentAttributeStringListValue
 */
const se_DocumentAttributeStringListValue = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DocumentAttributeTarget
 */
const se_DocumentAttributeTarget = (input: DocumentAttributeTarget, context: __SerdeContext): any => {
  return {
    ...(input.TargetDocumentAttributeKey != null && { TargetDocumentAttributeKey: input.TargetDocumentAttributeKey }),
    ...(input.TargetDocumentAttributeValue != null && {
      TargetDocumentAttributeValue: se_DocumentAttributeValue(input.TargetDocumentAttributeValue, context),
    }),
    ...(input.TargetDocumentAttributeValueDeletion != null && {
      TargetDocumentAttributeValueDeletion: input.TargetDocumentAttributeValueDeletion,
    }),
  };
};

/**
 * serializeAws_json1_1DocumentAttributeValue
 */
const se_DocumentAttributeValue = (input: DocumentAttributeValue, context: __SerdeContext): any => {
  return {
    ...(input.DateValue != null && { DateValue: Math.round(input.DateValue.getTime() / 1000) }),
    ...(input.LongValue != null && { LongValue: input.LongValue }),
    ...(input.StringListValue != null && {
      StringListValue: se_DocumentAttributeStringListValue(input.StringListValue, context),
    }),
    ...(input.StringValue != null && { StringValue: input.StringValue }),
  };
};

/**
 * serializeAws_json1_1DocumentIdList
 */
const se_DocumentIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DocumentInfo
 */
const se_DocumentInfo = (input: DocumentInfo, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && { Attributes: se_DocumentAttributeList(input.Attributes, context) }),
    ...(input.DocumentId != null && { DocumentId: input.DocumentId }),
  };
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

/**
 * serializeAws_json1_1DocumentMetadataConfiguration
 */
const se_DocumentMetadataConfiguration = (input: DocumentMetadataConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Relevance != null && { Relevance: se_Relevance(input.Relevance, context) }),
    ...(input.Search != null && { Search: se_Search(input.Search, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1DocumentMetadataConfigurationList
 */
const se_DocumentMetadataConfigurationList = (input: DocumentMetadataConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DocumentMetadataConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1DocumentRelevanceConfiguration
 */
const se_DocumentRelevanceConfiguration = (input: DocumentRelevanceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Relevance != null && { Relevance: se_Relevance(input.Relevance, context) }),
  };
};

/**
 * serializeAws_json1_1DocumentRelevanceOverrideConfigurationList
 */
const se_DocumentRelevanceOverrideConfigurationList = (
  input: DocumentRelevanceConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DocumentRelevanceConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1DocumentsMetadataConfiguration
 */
const se_DocumentsMetadataConfiguration = (input: DocumentsMetadataConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.S3Prefix != null && { S3Prefix: input.S3Prefix }),
  };
};

/**
 * serializeAws_json1_1EntityConfiguration
 */
const se_EntityConfiguration = (input: EntityConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.EntityType != null && { EntityType: input.EntityType }),
  };
};

/**
 * serializeAws_json1_1EntityFilter
 */
const se_EntityFilter = (input: (AlfrescoEntity | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1EntityIdsList
 */
const se_EntityIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1EntityPersonaConfiguration
 */
const se_EntityPersonaConfiguration = (input: EntityPersonaConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.Persona != null && { Persona: input.Persona }),
  };
};

/**
 * serializeAws_json1_1EntityPersonaConfigurationList
 */
const se_EntityPersonaConfigurationList = (input: EntityPersonaConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EntityPersonaConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1ExcludeMimeTypesList
 */
const se_ExcludeMimeTypesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ExcludeSharedDrivesList
 */
const se_ExcludeSharedDrivesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ExcludeUserAccountsList
 */
const se_ExcludeUserAccountsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ExperienceConfiguration
 */
const se_ExperienceConfiguration = (input: ExperienceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ContentSourceConfiguration != null && {
      ContentSourceConfiguration: se_ContentSourceConfiguration(input.ContentSourceConfiguration, context),
    }),
    ...(input.UserIdentityConfiguration != null && {
      UserIdentityConfiguration: se_UserIdentityConfiguration(input.UserIdentityConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1Facet
 */
const se_Facet = (input: Facet, context: __SerdeContext): any => {
  return {
    ...(input.DocumentAttributeKey != null && { DocumentAttributeKey: input.DocumentAttributeKey }),
    ...(input.Facets != null && { Facets: se_FacetList(input.Facets, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
  };
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

/**
 * serializeAws_json1_1FaqIdsList
 */
const se_FaqIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1FeaturedDocument
 */
const se_FeaturedDocument = (input: FeaturedDocument, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1FeaturedDocumentList
 */
const se_FeaturedDocumentList = (input: FeaturedDocument[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FeaturedDocument(entry, context);
    });
};

/**
 * serializeAws_json1_1FeaturedResultsSetIdList
 */
const se_FeaturedResultsSetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1FolderIdList
 */
const se_FolderIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1FsxConfiguration
 */
const se_FsxConfiguration = (input: FsxConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.FieldMappings != null && {
      FieldMappings: se_DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
    ...(input.FileSystemType != null && { FileSystemType: input.FileSystemType }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: se_DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1GetQuerySuggestionsRequest
 */
const se_GetQuerySuggestionsRequest = (input: GetQuerySuggestionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MaxSuggestionsCount != null && { MaxSuggestionsCount: input.MaxSuggestionsCount }),
    ...(input.QueryText != null && { QueryText: input.QueryText }),
  };
};

/**
 * serializeAws_json1_1GetSnapshotsRequest
 */
const se_GetSnapshotsRequest = (input: GetSnapshotsRequest, context: __SerdeContext): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.Interval != null && { Interval: input.Interval }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MetricType != null && { MetricType: input.MetricType }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1GitHubConfiguration
 */
const se_GitHubConfiguration = (input: GitHubConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ExclusionFileNamePatterns != null && {
      ExclusionFileNamePatterns: se_StringList(input.ExclusionFileNamePatterns, context),
    }),
    ...(input.ExclusionFileTypePatterns != null && {
      ExclusionFileTypePatterns: se_StringList(input.ExclusionFileTypePatterns, context),
    }),
    ...(input.ExclusionFolderNamePatterns != null && {
      ExclusionFolderNamePatterns: se_StringList(input.ExclusionFolderNamePatterns, context),
    }),
    ...(input.GitHubCommitConfigurationFieldMappings != null && {
      GitHubCommitConfigurationFieldMappings: se_DataSourceToIndexFieldMappingList(
        input.GitHubCommitConfigurationFieldMappings,
        context
      ),
    }),
    ...(input.GitHubDocumentCrawlProperties != null && {
      GitHubDocumentCrawlProperties: se_GitHubDocumentCrawlProperties(input.GitHubDocumentCrawlProperties, context),
    }),
    ...(input.GitHubIssueAttachmentConfigurationFieldMappings != null && {
      GitHubIssueAttachmentConfigurationFieldMappings: se_DataSourceToIndexFieldMappingList(
        input.GitHubIssueAttachmentConfigurationFieldMappings,
        context
      ),
    }),
    ...(input.GitHubIssueCommentConfigurationFieldMappings != null && {
      GitHubIssueCommentConfigurationFieldMappings: se_DataSourceToIndexFieldMappingList(
        input.GitHubIssueCommentConfigurationFieldMappings,
        context
      ),
    }),
    ...(input.GitHubIssueDocumentConfigurationFieldMappings != null && {
      GitHubIssueDocumentConfigurationFieldMappings: se_DataSourceToIndexFieldMappingList(
        input.GitHubIssueDocumentConfigurationFieldMappings,
        context
      ),
    }),
    ...(input.GitHubPullRequestCommentConfigurationFieldMappings != null && {
      GitHubPullRequestCommentConfigurationFieldMappings: se_DataSourceToIndexFieldMappingList(
        input.GitHubPullRequestCommentConfigurationFieldMappings,
        context
      ),
    }),
    ...(input.GitHubPullRequestDocumentAttachmentConfigurationFieldMappings != null && {
      GitHubPullRequestDocumentAttachmentConfigurationFieldMappings: se_DataSourceToIndexFieldMappingList(
        input.GitHubPullRequestDocumentAttachmentConfigurationFieldMappings,
        context
      ),
    }),
    ...(input.GitHubPullRequestDocumentConfigurationFieldMappings != null && {
      GitHubPullRequestDocumentConfigurationFieldMappings: se_DataSourceToIndexFieldMappingList(
        input.GitHubPullRequestDocumentConfigurationFieldMappings,
        context
      ),
    }),
    ...(input.GitHubRepositoryConfigurationFieldMappings != null && {
      GitHubRepositoryConfigurationFieldMappings: se_DataSourceToIndexFieldMappingList(
        input.GitHubRepositoryConfigurationFieldMappings,
        context
      ),
    }),
    ...(input.InclusionFileNamePatterns != null && {
      InclusionFileNamePatterns: se_StringList(input.InclusionFileNamePatterns, context),
    }),
    ...(input.InclusionFileTypePatterns != null && {
      InclusionFileTypePatterns: se_StringList(input.InclusionFileTypePatterns, context),
    }),
    ...(input.InclusionFolderNamePatterns != null && {
      InclusionFolderNamePatterns: se_StringList(input.InclusionFolderNamePatterns, context),
    }),
    ...(input.OnPremiseConfiguration != null && {
      OnPremiseConfiguration: se_OnPremiseConfiguration(input.OnPremiseConfiguration, context),
    }),
    ...(input.RepositoryFilter != null && { RepositoryFilter: se_RepositoryNames(input.RepositoryFilter, context) }),
    ...(input.SaaSConfiguration != null && {
      SaaSConfiguration: se_SaaSConfiguration(input.SaaSConfiguration, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.UseChangeLog != null && { UseChangeLog: input.UseChangeLog }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: se_DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1GitHubDocumentCrawlProperties
 */
const se_GitHubDocumentCrawlProperties = (input: GitHubDocumentCrawlProperties, context: __SerdeContext): any => {
  return {
    ...(input.CrawlIssue != null && { CrawlIssue: input.CrawlIssue }),
    ...(input.CrawlIssueComment != null && { CrawlIssueComment: input.CrawlIssueComment }),
    ...(input.CrawlIssueCommentAttachment != null && {
      CrawlIssueCommentAttachment: input.CrawlIssueCommentAttachment,
    }),
    ...(input.CrawlPullRequest != null && { CrawlPullRequest: input.CrawlPullRequest }),
    ...(input.CrawlPullRequestComment != null && { CrawlPullRequestComment: input.CrawlPullRequestComment }),
    ...(input.CrawlPullRequestCommentAttachment != null && {
      CrawlPullRequestCommentAttachment: input.CrawlPullRequestCommentAttachment,
    }),
    ...(input.CrawlRepositoryDocuments != null && { CrawlRepositoryDocuments: input.CrawlRepositoryDocuments }),
  };
};

/**
 * serializeAws_json1_1GoogleDriveConfiguration
 */
const se_GoogleDriveConfiguration = (input: GoogleDriveConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ExcludeMimeTypes != null && {
      ExcludeMimeTypes: se_ExcludeMimeTypesList(input.ExcludeMimeTypes, context),
    }),
    ...(input.ExcludeSharedDrives != null && {
      ExcludeSharedDrives: se_ExcludeSharedDrivesList(input.ExcludeSharedDrives, context),
    }),
    ...(input.ExcludeUserAccounts != null && {
      ExcludeUserAccounts: se_ExcludeUserAccountsList(input.ExcludeUserAccounts, context),
    }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.FieldMappings != null && {
      FieldMappings: se_DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
  };
};

/**
 * serializeAws_json1_1GroupMembers
 */
const se_GroupMembers = (input: GroupMembers, context: __SerdeContext): any => {
  return {
    ...(input.MemberGroups != null && { MemberGroups: se_MemberGroups(input.MemberGroups, context) }),
    ...(input.MemberUsers != null && { MemberUsers: se_MemberUsers(input.MemberUsers, context) }),
    ...(input.S3PathforGroupMembers != null && {
      S3PathforGroupMembers: se_S3Path(input.S3PathforGroupMembers, context),
    }),
  };
};

/**
 * serializeAws_json1_1Groups
 */
const se_Groups = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1HierarchicalPrincipal
 */
const se_HierarchicalPrincipal = (input: HierarchicalPrincipal, context: __SerdeContext): any => {
  return {
    ...(input.PrincipalList != null && { PrincipalList: se_PrincipalList(input.PrincipalList, context) }),
  };
};

/**
 * serializeAws_json1_1HierarchicalPrincipalList
 */
const se_HierarchicalPrincipalList = (input: HierarchicalPrincipal[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_HierarchicalPrincipal(entry, context);
    });
};

/**
 * serializeAws_json1_1HookConfiguration
 */
const se_HookConfiguration = (input: HookConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.InvocationCondition != null && {
      InvocationCondition: se_DocumentAttributeCondition(input.InvocationCondition, context),
    }),
    ...(input.LambdaArn != null && { LambdaArn: input.LambdaArn }),
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
  };
};

/**
 * serializeAws_json1_1InlineCustomDocumentEnrichmentConfiguration
 */
const se_InlineCustomDocumentEnrichmentConfiguration = (
  input: InlineCustomDocumentEnrichmentConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Condition != null && { Condition: se_DocumentAttributeCondition(input.Condition, context) }),
    ...(input.DocumentContentDeletion != null && { DocumentContentDeletion: input.DocumentContentDeletion }),
    ...(input.Target != null && { Target: se_DocumentAttributeTarget(input.Target, context) }),
  };
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

/**
 * serializeAws_json1_1IssueSubEntityFilter
 */
const se_IssueSubEntityFilter = (input: (IssueSubEntity | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1IssueType
 */
const se_IssueType = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1JiraConfiguration
 */
const se_JiraConfiguration = (input: JiraConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AttachmentFieldMappings != null && {
      AttachmentFieldMappings: se_DataSourceToIndexFieldMappingList(input.AttachmentFieldMappings, context),
    }),
    ...(input.CommentFieldMappings != null && {
      CommentFieldMappings: se_DataSourceToIndexFieldMappingList(input.CommentFieldMappings, context),
    }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.IssueFieldMappings != null && {
      IssueFieldMappings: se_DataSourceToIndexFieldMappingList(input.IssueFieldMappings, context),
    }),
    ...(input.IssueSubEntityFilter != null && {
      IssueSubEntityFilter: se_IssueSubEntityFilter(input.IssueSubEntityFilter, context),
    }),
    ...(input.IssueType != null && { IssueType: se_IssueType(input.IssueType, context) }),
    ...(input.JiraAccountUrl != null && { JiraAccountUrl: input.JiraAccountUrl }),
    ...(input.Project != null && { Project: se_Project(input.Project, context) }),
    ...(input.ProjectFieldMappings != null && {
      ProjectFieldMappings: se_DataSourceToIndexFieldMappingList(input.ProjectFieldMappings, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.Status != null && { Status: se_JiraStatus(input.Status, context) }),
    ...(input.UseChangeLog != null && { UseChangeLog: input.UseChangeLog }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: se_DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
    ...(input.WorkLogFieldMappings != null && {
      WorkLogFieldMappings: se_DataSourceToIndexFieldMappingList(input.WorkLogFieldMappings, context),
    }),
  };
};

/**
 * serializeAws_json1_1JiraStatus
 */
const se_JiraStatus = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1JsonTokenTypeConfiguration
 */
const se_JsonTokenTypeConfiguration = (input: JsonTokenTypeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.GroupAttributeField != null && { GroupAttributeField: input.GroupAttributeField }),
    ...(input.UserNameAttributeField != null && { UserNameAttributeField: input.UserNameAttributeField }),
  };
};

/**
 * serializeAws_json1_1JwtTokenTypeConfiguration
 */
const se_JwtTokenTypeConfiguration = (input: JwtTokenTypeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ClaimRegex != null && { ClaimRegex: input.ClaimRegex }),
    ...(input.GroupAttributeField != null && { GroupAttributeField: input.GroupAttributeField }),
    ...(input.Issuer != null && { Issuer: input.Issuer }),
    ...(input.KeyLocation != null && { KeyLocation: input.KeyLocation }),
    ...(input.SecretManagerArn != null && { SecretManagerArn: input.SecretManagerArn }),
    ...(input.URL != null && { URL: input.URL }),
    ...(input.UserNameAttributeField != null && { UserNameAttributeField: input.UserNameAttributeField }),
  };
};

/**
 * serializeAws_json1_1ListAccessControlConfigurationsRequest
 */
const se_ListAccessControlConfigurationsRequest = (
  input: ListAccessControlConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListDataSourcesRequest
 */
const se_ListDataSourcesRequest = (input: ListDataSourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListDataSourceSyncJobsRequest
 */
const se_ListDataSourceSyncJobsRequest = (input: ListDataSourceSyncJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StartTimeFilter != null && { StartTimeFilter: se_TimeRange(input.StartTimeFilter, context) }),
    ...(input.StatusFilter != null && { StatusFilter: input.StatusFilter }),
  };
};

/**
 * serializeAws_json1_1ListEntityPersonasRequest
 */
const se_ListEntityPersonasRequest = (input: ListEntityPersonasRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListExperienceEntitiesRequest
 */
const se_ListExperienceEntitiesRequest = (input: ListExperienceEntitiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListExperiencesRequest
 */
const se_ListExperiencesRequest = (input: ListExperiencesRequest, context: __SerdeContext): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListFaqsRequest
 */
const se_ListFaqsRequest = (input: ListFaqsRequest, context: __SerdeContext): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListFeaturedResultsSetsRequest
 */
const se_ListFeaturedResultsSetsRequest = (input: ListFeaturedResultsSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListGroupsOlderThanOrderingIdRequest
 */
const se_ListGroupsOlderThanOrderingIdRequest = (
  input: ListGroupsOlderThanOrderingIdRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrderingId != null && { OrderingId: input.OrderingId }),
  };
};

/**
 * serializeAws_json1_1ListIndicesRequest
 */
const se_ListIndicesRequest = (input: ListIndicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListQuerySuggestionsBlockListsRequest
 */
const se_ListQuerySuggestionsBlockListsRequest = (
  input: ListQuerySuggestionsBlockListsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_1ListThesauriRequest
 */
const se_ListThesauriRequest = (input: ListThesauriRequest, context: __SerdeContext): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1MemberGroup
 */
const se_MemberGroup = (input: MemberGroup, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.GroupId != null && { GroupId: input.GroupId }),
  };
};

/**
 * serializeAws_json1_1MemberGroups
 */
const se_MemberGroups = (input: MemberGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MemberGroup(entry, context);
    });
};

/**
 * serializeAws_json1_1MemberUser
 */
const se_MemberUser = (input: MemberUser, context: __SerdeContext): any => {
  return {
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

/**
 * serializeAws_json1_1MemberUsers
 */
const se_MemberUsers = (input: MemberUser[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MemberUser(entry, context);
    });
};

/**
 * serializeAws_json1_1OneDriveConfiguration
 */
const se_OneDriveConfiguration = (input: OneDriveConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DisableLocalGroups != null && { DisableLocalGroups: input.DisableLocalGroups }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.FieldMappings != null && {
      FieldMappings: se_DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.OneDriveUsers != null && { OneDriveUsers: se_OneDriveUsers(input.OneDriveUsers, context) }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.TenantDomain != null && { TenantDomain: input.TenantDomain }),
  };
};

/**
 * serializeAws_json1_1OneDriveUserList
 */
const se_OneDriveUserList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1OneDriveUsers
 */
const se_OneDriveUsers = (input: OneDriveUsers, context: __SerdeContext): any => {
  return {
    ...(input.OneDriveUserList != null && { OneDriveUserList: se_OneDriveUserList(input.OneDriveUserList, context) }),
    ...(input.OneDriveUserS3Path != null && { OneDriveUserS3Path: se_S3Path(input.OneDriveUserS3Path, context) }),
  };
};

/**
 * serializeAws_json1_1OnPremiseConfiguration
 */
const se_OnPremiseConfiguration = (input: OnPremiseConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.HostUrl != null && { HostUrl: input.HostUrl }),
    ...(input.OrganizationName != null && { OrganizationName: input.OrganizationName }),
    ...(input.SslCertificateS3Path != null && { SslCertificateS3Path: se_S3Path(input.SslCertificateS3Path, context) }),
  };
};

/**
 * serializeAws_json1_1Principal
 */
const se_Principal = (input: Principal, context: __SerdeContext): any => {
  return {
    ...(input.Access != null && { Access: input.Access }),
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1PrincipalList
 */
const se_PrincipalList = (input: Principal[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Principal(entry, context);
    });
};

/**
 * serializeAws_json1_1PrivateChannelFilter
 */
const se_PrivateChannelFilter = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Project
 */
const se_Project = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ProxyConfiguration
 */
const se_ProxyConfiguration = (input: ProxyConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Credentials != null && { Credentials: input.Credentials }),
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

/**
 * serializeAws_json1_1PublicChannelFilter
 */
const se_PublicChannelFilter = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PutPrincipalMappingRequest
 */
const se_PutPrincipalMappingRequest = (input: PutPrincipalMappingRequest, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.GroupMembers != null && { GroupMembers: se_GroupMembers(input.GroupMembers, context) }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.OrderingId != null && { OrderingId: input.OrderingId }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

/**
 * serializeAws_json1_1QueryRequest
 */
const se_QueryRequest = (input: QueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.AttributeFilter != null && { AttributeFilter: se_AttributeFilter(input.AttributeFilter, context) }),
    ...(input.DocumentRelevanceOverrideConfigurations != null && {
      DocumentRelevanceOverrideConfigurations: se_DocumentRelevanceOverrideConfigurationList(
        input.DocumentRelevanceOverrideConfigurations,
        context
      ),
    }),
    ...(input.Facets != null && { Facets: se_FacetList(input.Facets, context) }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.PageNumber != null && { PageNumber: input.PageNumber }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.QueryResultTypeFilter != null && { QueryResultTypeFilter: input.QueryResultTypeFilter }),
    ...(input.QueryText != null && { QueryText: input.QueryText }),
    ...(input.RequestedDocumentAttributes != null && {
      RequestedDocumentAttributes: se_DocumentAttributeKeyList(input.RequestedDocumentAttributes, context),
    }),
    ...(input.SortingConfiguration != null && {
      SortingConfiguration: se_SortingConfiguration(input.SortingConfiguration, context),
    }),
    ...(input.SpellCorrectionConfiguration != null && {
      SpellCorrectionConfiguration: se_SpellCorrectionConfiguration(input.SpellCorrectionConfiguration, context),
    }),
    ...(input.UserContext != null && { UserContext: se_UserContext(input.UserContext, context) }),
    ...(input.VisitorId != null && { VisitorId: input.VisitorId }),
  };
};

/**
 * serializeAws_json1_1QueryTextList
 */
const se_QueryTextList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1QuipConfiguration
 */
const se_QuipConfiguration = (input: QuipConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AttachmentFieldMappings != null && {
      AttachmentFieldMappings: se_DataSourceToIndexFieldMappingList(input.AttachmentFieldMappings, context),
    }),
    ...(input.CrawlAttachments != null && { CrawlAttachments: input.CrawlAttachments }),
    ...(input.CrawlChatRooms != null && { CrawlChatRooms: input.CrawlChatRooms }),
    ...(input.CrawlFileComments != null && { CrawlFileComments: input.CrawlFileComments }),
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.FolderIds != null && { FolderIds: se_FolderIdList(input.FolderIds, context) }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.MessageFieldMappings != null && {
      MessageFieldMappings: se_DataSourceToIndexFieldMappingList(input.MessageFieldMappings, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.ThreadFieldMappings != null && {
      ThreadFieldMappings: se_DataSourceToIndexFieldMappingList(input.ThreadFieldMappings, context),
    }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: se_DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1Relevance
 */
const se_Relevance = (input: Relevance, context: __SerdeContext): any => {
  return {
    ...(input.Duration != null && { Duration: input.Duration }),
    ...(input.Freshness != null && { Freshness: input.Freshness }),
    ...(input.Importance != null && { Importance: input.Importance }),
    ...(input.RankOrder != null && { RankOrder: input.RankOrder }),
    ...(input.ValueImportanceMap != null && {
      ValueImportanceMap: se_ValueImportanceMap(input.ValueImportanceMap, context),
    }),
  };
};

/**
 * serializeAws_json1_1RelevanceFeedback
 */
const se_RelevanceFeedback = (input: RelevanceFeedback, context: __SerdeContext): any => {
  return {
    ...(input.RelevanceValue != null && { RelevanceValue: input.RelevanceValue }),
    ...(input.ResultId != null && { ResultId: input.ResultId }),
  };
};

/**
 * serializeAws_json1_1RelevanceFeedbackList
 */
const se_RelevanceFeedbackList = (input: RelevanceFeedback[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RelevanceFeedback(entry, context);
    });
};

/**
 * serializeAws_json1_1RepositoryNames
 */
const se_RepositoryNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1S3DataSourceConfiguration
 */
const se_S3DataSourceConfiguration = (input: S3DataSourceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AccessControlListConfiguration != null && {
      AccessControlListConfiguration: se_AccessControlListConfiguration(input.AccessControlListConfiguration, context),
    }),
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.DocumentsMetadataConfiguration != null && {
      DocumentsMetadataConfiguration: se_DocumentsMetadataConfiguration(input.DocumentsMetadataConfiguration, context),
    }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.InclusionPrefixes != null && {
      InclusionPrefixes: se_DataSourceInclusionsExclusionsStrings(input.InclusionPrefixes, context),
    }),
  };
};

/**
 * serializeAws_json1_1S3Path
 */
const se_S3Path = (input: S3Path, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Key != null && { Key: input.Key }),
  };
};

/**
 * serializeAws_json1_1SaaSConfiguration
 */
const se_SaaSConfiguration = (input: SaaSConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.HostUrl != null && { HostUrl: input.HostUrl }),
    ...(input.OrganizationName != null && { OrganizationName: input.OrganizationName }),
  };
};

/**
 * serializeAws_json1_1SalesforceChatterFeedConfiguration
 */
const se_SalesforceChatterFeedConfiguration = (
  input: SalesforceChatterFeedConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentDataFieldName != null && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName != null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.FieldMappings != null && {
      FieldMappings: se_DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.IncludeFilterTypes != null && {
      IncludeFilterTypes: se_SalesforceChatterFeedIncludeFilterTypes(input.IncludeFilterTypes, context),
    }),
  };
};

/**
 * serializeAws_json1_1SalesforceChatterFeedIncludeFilterTypes
 */
const se_SalesforceChatterFeedIncludeFilterTypes = (
  input: (SalesforceChatterFeedIncludeFilterType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SalesforceConfiguration
 */
const se_SalesforceConfiguration = (input: SalesforceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ChatterFeedConfiguration != null && {
      ChatterFeedConfiguration: se_SalesforceChatterFeedConfiguration(input.ChatterFeedConfiguration, context),
    }),
    ...(input.CrawlAttachments != null && { CrawlAttachments: input.CrawlAttachments }),
    ...(input.ExcludeAttachmentFilePatterns != null && {
      ExcludeAttachmentFilePatterns: se_DataSourceInclusionsExclusionsStrings(
        input.ExcludeAttachmentFilePatterns,
        context
      ),
    }),
    ...(input.IncludeAttachmentFilePatterns != null && {
      IncludeAttachmentFilePatterns: se_DataSourceInclusionsExclusionsStrings(
        input.IncludeAttachmentFilePatterns,
        context
      ),
    }),
    ...(input.KnowledgeArticleConfiguration != null && {
      KnowledgeArticleConfiguration: se_SalesforceKnowledgeArticleConfiguration(
        input.KnowledgeArticleConfiguration,
        context
      ),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.ServerUrl != null && { ServerUrl: input.ServerUrl }),
    ...(input.StandardObjectAttachmentConfiguration != null && {
      StandardObjectAttachmentConfiguration: se_SalesforceStandardObjectAttachmentConfiguration(
        input.StandardObjectAttachmentConfiguration,
        context
      ),
    }),
    ...(input.StandardObjectConfigurations != null && {
      StandardObjectConfigurations: se_SalesforceStandardObjectConfigurationList(
        input.StandardObjectConfigurations,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfiguration
 */
const se_SalesforceCustomKnowledgeArticleTypeConfiguration = (
  input: SalesforceCustomKnowledgeArticleTypeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentDataFieldName != null && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName != null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.FieldMappings != null && {
      FieldMappings: se_DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfigurationList
 */
const se_SalesforceCustomKnowledgeArticleTypeConfigurationList = (
  input: SalesforceCustomKnowledgeArticleTypeConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SalesforceCustomKnowledgeArticleTypeConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1SalesforceKnowledgeArticleConfiguration
 */
const se_SalesforceKnowledgeArticleConfiguration = (
  input: SalesforceKnowledgeArticleConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomKnowledgeArticleTypeConfigurations != null && {
      CustomKnowledgeArticleTypeConfigurations: se_SalesforceCustomKnowledgeArticleTypeConfigurationList(
        input.CustomKnowledgeArticleTypeConfigurations,
        context
      ),
    }),
    ...(input.IncludedStates != null && {
      IncludedStates: se_SalesforceKnowledgeArticleStateList(input.IncludedStates, context),
    }),
    ...(input.StandardKnowledgeArticleTypeConfiguration != null && {
      StandardKnowledgeArticleTypeConfiguration: se_SalesforceStandardKnowledgeArticleTypeConfiguration(
        input.StandardKnowledgeArticleTypeConfiguration,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1SalesforceKnowledgeArticleStateList
 */
const se_SalesforceKnowledgeArticleStateList = (
  input: (SalesforceKnowledgeArticleState | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SalesforceStandardKnowledgeArticleTypeConfiguration
 */
const se_SalesforceStandardKnowledgeArticleTypeConfiguration = (
  input: SalesforceStandardKnowledgeArticleTypeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentDataFieldName != null && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName != null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.FieldMappings != null && {
      FieldMappings: se_DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
  };
};

/**
 * serializeAws_json1_1SalesforceStandardObjectAttachmentConfiguration
 */
const se_SalesforceStandardObjectAttachmentConfiguration = (
  input: SalesforceStandardObjectAttachmentConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentTitleFieldName != null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.FieldMappings != null && {
      FieldMappings: se_DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
  };
};

/**
 * serializeAws_json1_1SalesforceStandardObjectConfiguration
 */
const se_SalesforceStandardObjectConfiguration = (
  input: SalesforceStandardObjectConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentDataFieldName != null && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName != null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.FieldMappings != null && {
      FieldMappings: se_DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1SalesforceStandardObjectConfigurationList
 */
const se_SalesforceStandardObjectConfigurationList = (
  input: SalesforceStandardObjectConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SalesforceStandardObjectConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1Search
 */
const se_Search = (input: Search, context: __SerdeContext): any => {
  return {
    ...(input.Displayable != null && { Displayable: input.Displayable }),
    ...(input.Facetable != null && { Facetable: input.Facetable }),
    ...(input.Searchable != null && { Searchable: input.Searchable }),
    ...(input.Sortable != null && { Sortable: input.Sortable }),
  };
};

/**
 * serializeAws_json1_1SecurityGroupIdList
 */
const se_SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SeedUrlConfiguration
 */
const se_SeedUrlConfiguration = (input: SeedUrlConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SeedUrls != null && { SeedUrls: se_SeedUrlList(input.SeedUrls, context) }),
    ...(input.WebCrawlerMode != null && { WebCrawlerMode: input.WebCrawlerMode }),
  };
};

/**
 * serializeAws_json1_1SeedUrlList
 */
const se_SeedUrlList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ServerSideEncryptionConfiguration
 */
const se_ServerSideEncryptionConfiguration = (
  input: ServerSideEncryptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
  };
};

/**
 * serializeAws_json1_1ServiceNowConfiguration
 */
const se_ServiceNowConfiguration = (input: ServiceNowConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.HostUrl != null && { HostUrl: input.HostUrl }),
    ...(input.KnowledgeArticleConfiguration != null && {
      KnowledgeArticleConfiguration: se_ServiceNowKnowledgeArticleConfiguration(
        input.KnowledgeArticleConfiguration,
        context
      ),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.ServiceCatalogConfiguration != null && {
      ServiceCatalogConfiguration: se_ServiceNowServiceCatalogConfiguration(input.ServiceCatalogConfiguration, context),
    }),
    ...(input.ServiceNowBuildVersion != null && { ServiceNowBuildVersion: input.ServiceNowBuildVersion }),
  };
};

/**
 * serializeAws_json1_1ServiceNowKnowledgeArticleConfiguration
 */
const se_ServiceNowKnowledgeArticleConfiguration = (
  input: ServiceNowKnowledgeArticleConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CrawlAttachments != null && { CrawlAttachments: input.CrawlAttachments }),
    ...(input.DocumentDataFieldName != null && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName != null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.ExcludeAttachmentFilePatterns != null && {
      ExcludeAttachmentFilePatterns: se_DataSourceInclusionsExclusionsStrings(
        input.ExcludeAttachmentFilePatterns,
        context
      ),
    }),
    ...(input.FieldMappings != null && {
      FieldMappings: se_DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.FilterQuery != null && { FilterQuery: input.FilterQuery }),
    ...(input.IncludeAttachmentFilePatterns != null && {
      IncludeAttachmentFilePatterns: se_DataSourceInclusionsExclusionsStrings(
        input.IncludeAttachmentFilePatterns,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1ServiceNowServiceCatalogConfiguration
 */
const se_ServiceNowServiceCatalogConfiguration = (
  input: ServiceNowServiceCatalogConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CrawlAttachments != null && { CrawlAttachments: input.CrawlAttachments }),
    ...(input.DocumentDataFieldName != null && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName != null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.ExcludeAttachmentFilePatterns != null && {
      ExcludeAttachmentFilePatterns: se_DataSourceInclusionsExclusionsStrings(
        input.ExcludeAttachmentFilePatterns,
        context
      ),
    }),
    ...(input.FieldMappings != null && {
      FieldMappings: se_DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.IncludeAttachmentFilePatterns != null && {
      IncludeAttachmentFilePatterns: se_DataSourceInclusionsExclusionsStrings(
        input.IncludeAttachmentFilePatterns,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1SharePointConfiguration
 */
const se_SharePointConfiguration = (input: SharePointConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.CrawlAttachments != null && { CrawlAttachments: input.CrawlAttachments }),
    ...(input.DisableLocalGroups != null && { DisableLocalGroups: input.DisableLocalGroups }),
    ...(input.DocumentTitleFieldName != null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.FieldMappings != null && {
      FieldMappings: se_DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.ProxyConfiguration != null && {
      ProxyConfiguration: se_ProxyConfiguration(input.ProxyConfiguration, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.SharePointVersion != null && { SharePointVersion: input.SharePointVersion }),
    ...(input.SslCertificateS3Path != null && { SslCertificateS3Path: se_S3Path(input.SslCertificateS3Path, context) }),
    ...(input.Urls != null && { Urls: se_SharePointUrlList(input.Urls, context) }),
    ...(input.UseChangeLog != null && { UseChangeLog: input.UseChangeLog }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: se_DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1SharePointUrlList
 */
const se_SharePointUrlList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SiteMapsConfiguration
 */
const se_SiteMapsConfiguration = (input: SiteMapsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SiteMaps != null && { SiteMaps: se_SiteMapsList(input.SiteMaps, context) }),
  };
};

/**
 * serializeAws_json1_1SiteMapsList
 */
const se_SiteMapsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SlackConfiguration
 */
const se_SlackConfiguration = (input: SlackConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CrawlBotMessage != null && { CrawlBotMessage: input.CrawlBotMessage }),
    ...(input.ExcludeArchived != null && { ExcludeArchived: input.ExcludeArchived }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.FieldMappings != null && {
      FieldMappings: se_DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.LookBackPeriod != null && { LookBackPeriod: input.LookBackPeriod }),
    ...(input.PrivateChannelFilter != null && {
      PrivateChannelFilter: se_PrivateChannelFilter(input.PrivateChannelFilter, context),
    }),
    ...(input.PublicChannelFilter != null && {
      PublicChannelFilter: se_PublicChannelFilter(input.PublicChannelFilter, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.SinceCrawlDate != null && { SinceCrawlDate: input.SinceCrawlDate }),
    ...(input.SlackEntityList != null && { SlackEntityList: se_SlackEntityList(input.SlackEntityList, context) }),
    ...(input.TeamId != null && { TeamId: input.TeamId }),
    ...(input.UseChangeLog != null && { UseChangeLog: input.UseChangeLog }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: se_DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1SlackEntityList
 */
const se_SlackEntityList = (input: (SlackEntity | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SortingConfiguration
 */
const se_SortingConfiguration = (input: SortingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DocumentAttributeKey != null && { DocumentAttributeKey: input.DocumentAttributeKey }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

/**
 * serializeAws_json1_1SpellCorrectionConfiguration
 */
const se_SpellCorrectionConfiguration = (input: SpellCorrectionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.IncludeQuerySpellCheckSuggestions != null && {
      IncludeQuerySpellCheckSuggestions: input.IncludeQuerySpellCheckSuggestions,
    }),
  };
};

/**
 * serializeAws_json1_1SqlConfiguration
 */
const se_SqlConfiguration = (input: SqlConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.QueryIdentifiersEnclosingOption != null && {
      QueryIdentifiersEnclosingOption: input.QueryIdentifiersEnclosingOption,
    }),
  };
};

/**
 * serializeAws_json1_1StartDataSourceSyncJobRequest
 */
const se_StartDataSourceSyncJobRequest = (input: StartDataSourceSyncJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1StopDataSourceSyncJobRequest
 */
const se_StopDataSourceSyncJobRequest = (input: StopDataSourceSyncJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

/**
 * serializeAws_json1_1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SubmitFeedbackRequest
 */
const se_SubmitFeedbackRequest = (input: SubmitFeedbackRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClickFeedbackItems != null && {
      ClickFeedbackItems: se_ClickFeedbackList(input.ClickFeedbackItems, context),
    }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.QueryId != null && { QueryId: input.QueryId }),
    ...(input.RelevanceFeedbackItems != null && {
      RelevanceFeedbackItems: se_RelevanceFeedbackList(input.RelevanceFeedbackItems, context),
    }),
  };
};

/**
 * serializeAws_json1_1SubnetIdList
 */
const se_SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

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
  return {
    ...(input.Template != null && { Template: se_Template(input.Template, context) }),
  };
};

/**
 * serializeAws_json1_1TimeRange
 */
const se_TimeRange = (input: TimeRange, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateAccessControlConfigurationRequest
 */
const se_UpdateAccessControlConfigurationRequest = (
  input: UpdateAccessControlConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessControlList != null && { AccessControlList: se_PrincipalList(input.AccessControlList, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.HierarchicalAccessControlList != null && {
      HierarchicalAccessControlList: se_HierarchicalPrincipalList(input.HierarchicalAccessControlList, context),
    }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1UpdateDataSourceRequest
 */
const se_UpdateDataSourceRequest = (input: UpdateDataSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Configuration != null && { Configuration: se_DataSourceConfiguration(input.Configuration, context) }),
    ...(input.CustomDocumentEnrichmentConfiguration != null && {
      CustomDocumentEnrichmentConfiguration: se_CustomDocumentEnrichmentConfiguration(
        input.CustomDocumentEnrichmentConfiguration,
        context
      ),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Schedule != null && { Schedule: input.Schedule }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: se_DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateExperienceRequest
 */
const se_UpdateExperienceRequest = (input: UpdateExperienceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Configuration != null && { Configuration: se_ExperienceConfiguration(input.Configuration, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

/**
 * serializeAws_json1_1UpdateFeaturedResultsSetRequest
 */
const se_UpdateFeaturedResultsSetRequest = (input: UpdateFeaturedResultsSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FeaturedDocuments != null && {
      FeaturedDocuments: se_FeaturedDocumentList(input.FeaturedDocuments, context),
    }),
    ...(input.FeaturedResultsSetId != null && { FeaturedResultsSetId: input.FeaturedResultsSetId }),
    ...(input.FeaturedResultsSetName != null && { FeaturedResultsSetName: input.FeaturedResultsSetName }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.QueryTexts != null && { QueryTexts: se_QueryTextList(input.QueryTexts, context) }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1UpdateIndexRequest
 */
const se_UpdateIndexRequest = (input: UpdateIndexRequest, context: __SerdeContext): any => {
  return {
    ...(input.CapacityUnits != null && { CapacityUnits: se_CapacityUnitsConfiguration(input.CapacityUnits, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DocumentMetadataConfigurationUpdates != null && {
      DocumentMetadataConfigurationUpdates: se_DocumentMetadataConfigurationList(
        input.DocumentMetadataConfigurationUpdates,
        context
      ),
    }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.UserContextPolicy != null && { UserContextPolicy: input.UserContextPolicy }),
    ...(input.UserGroupResolutionConfiguration != null && {
      UserGroupResolutionConfiguration: se_UserGroupResolutionConfiguration(
        input.UserGroupResolutionConfiguration,
        context
      ),
    }),
    ...(input.UserTokenConfigurations != null && {
      UserTokenConfigurations: se_UserTokenConfigurationList(input.UserTokenConfigurations, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateQuerySuggestionsBlockListRequest
 */
const se_UpdateQuerySuggestionsBlockListRequest = (
  input: UpdateQuerySuggestionsBlockListRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.SourceS3Path != null && { SourceS3Path: se_S3Path(input.SourceS3Path, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateQuerySuggestionsConfigRequest
 */
const se_UpdateQuerySuggestionsConfigRequest = (
  input: UpdateQuerySuggestionsConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IncludeQueriesWithoutUserInformation != null && {
      IncludeQueriesWithoutUserInformation: input.IncludeQueriesWithoutUserInformation,
    }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MinimumNumberOfQueryingUsers != null && {
      MinimumNumberOfQueryingUsers: input.MinimumNumberOfQueryingUsers,
    }),
    ...(input.MinimumQueryCount != null && { MinimumQueryCount: input.MinimumQueryCount }),
    ...(input.Mode != null && { Mode: input.Mode }),
    ...(input.QueryLogLookBackWindowInDays != null && {
      QueryLogLookBackWindowInDays: input.QueryLogLookBackWindowInDays,
    }),
  };
};

/**
 * serializeAws_json1_1UpdateThesaurusRequest
 */
const se_UpdateThesaurusRequest = (input: UpdateThesaurusRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.SourceS3Path != null && { SourceS3Path: se_S3Path(input.SourceS3Path, context) }),
  };
};

/**
 * serializeAws_json1_1Urls
 */
const se_Urls = (input: Urls, context: __SerdeContext): any => {
  return {
    ...(input.SeedUrlConfiguration != null && {
      SeedUrlConfiguration: se_SeedUrlConfiguration(input.SeedUrlConfiguration, context),
    }),
    ...(input.SiteMapsConfiguration != null && {
      SiteMapsConfiguration: se_SiteMapsConfiguration(input.SiteMapsConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1UserContext
 */
const se_UserContext = (input: UserContext, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceGroups != null && { DataSourceGroups: se_DataSourceGroups(input.DataSourceGroups, context) }),
    ...(input.Groups != null && { Groups: se_Groups(input.Groups, context) }),
    ...(input.Token != null && { Token: input.Token }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

/**
 * serializeAws_json1_1UserGroupResolutionConfiguration
 */
const se_UserGroupResolutionConfiguration = (input: UserGroupResolutionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.UserGroupResolutionMode != null && { UserGroupResolutionMode: input.UserGroupResolutionMode }),
  };
};

/**
 * serializeAws_json1_1UserIdentityConfiguration
 */
const se_UserIdentityConfiguration = (input: UserIdentityConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.IdentityAttributeName != null && { IdentityAttributeName: input.IdentityAttributeName }),
  };
};

/**
 * serializeAws_json1_1UserTokenConfiguration
 */
const se_UserTokenConfiguration = (input: UserTokenConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.JsonTokenTypeConfiguration != null && {
      JsonTokenTypeConfiguration: se_JsonTokenTypeConfiguration(input.JsonTokenTypeConfiguration, context),
    }),
    ...(input.JwtTokenTypeConfiguration != null && {
      JwtTokenTypeConfiguration: se_JwtTokenTypeConfiguration(input.JwtTokenTypeConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1UserTokenConfigurationList
 */
const se_UserTokenConfigurationList = (input: UserTokenConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UserTokenConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1ValueImportanceMap
 */
const se_ValueImportanceMap = (input: Record<string, number>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1WebCrawlerConfiguration
 */
const se_WebCrawlerConfiguration = (input: WebCrawlerConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationConfiguration != null && {
      AuthenticationConfiguration: se_AuthenticationConfiguration(input.AuthenticationConfiguration, context),
    }),
    ...(input.CrawlDepth != null && { CrawlDepth: input.CrawlDepth }),
    ...(input.MaxContentSizePerPageInMegaBytes != null && {
      MaxContentSizePerPageInMegaBytes: __serializeFloat(input.MaxContentSizePerPageInMegaBytes),
    }),
    ...(input.MaxLinksPerPage != null && { MaxLinksPerPage: input.MaxLinksPerPage }),
    ...(input.MaxUrlsPerMinuteCrawlRate != null && { MaxUrlsPerMinuteCrawlRate: input.MaxUrlsPerMinuteCrawlRate }),
    ...(input.ProxyConfiguration != null && {
      ProxyConfiguration: se_ProxyConfiguration(input.ProxyConfiguration, context),
    }),
    ...(input.UrlExclusionPatterns != null && {
      UrlExclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.UrlExclusionPatterns, context),
    }),
    ...(input.UrlInclusionPatterns != null && {
      UrlInclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.UrlInclusionPatterns, context),
    }),
    ...(input.Urls != null && { Urls: se_Urls(input.Urls, context) }),
  };
};

/**
 * serializeAws_json1_1WorkDocsConfiguration
 */
const se_WorkDocsConfiguration = (input: WorkDocsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CrawlComments != null && { CrawlComments: input.CrawlComments }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.FieldMappings != null && {
      FieldMappings: se_DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: se_DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.UseChangeLog != null && { UseChangeLog: input.UseChangeLog }),
  };
};

/**
 * deserializeAws_json1_1AccessControlConfigurationSummary
 */
const de_AccessControlConfigurationSummary = (
  output: any,
  context: __SerdeContext
): AccessControlConfigurationSummary => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_1AccessControlConfigurationSummaryList
 */
const de_AccessControlConfigurationSummaryList = (
  output: any,
  context: __SerdeContext
): AccessControlConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccessControlConfigurationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AccessControlListConfiguration
 */
const de_AccessControlListConfiguration = (output: any, context: __SerdeContext): AccessControlListConfiguration => {
  return {
    KeyPath: __expectString(output.KeyPath),
  } as any;
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AclConfiguration
 */
const de_AclConfiguration = (output: any, context: __SerdeContext): AclConfiguration => {
  return {
    AllowedGroupsColumnName: __expectString(output.AllowedGroupsColumnName),
  } as any;
};

/**
 * deserializeAws_json1_1AdditionalResultAttribute
 */
const de_AdditionalResultAttribute = (output: any, context: __SerdeContext): AdditionalResultAttribute => {
  return {
    Key: __expectString(output.Key),
    Value: output.Value != null ? de_AdditionalResultAttributeValue(output.Value, context) : undefined,
    ValueType: __expectString(output.ValueType),
  } as any;
};

/**
 * deserializeAws_json1_1AdditionalResultAttributeList
 */
const de_AdditionalResultAttributeList = (output: any, context: __SerdeContext): AdditionalResultAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AdditionalResultAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AdditionalResultAttributeValue
 */
const de_AdditionalResultAttributeValue = (output: any, context: __SerdeContext): AdditionalResultAttributeValue => {
  return {
    TextWithHighlightsValue:
      output.TextWithHighlightsValue != null
        ? de_TextWithHighlights(output.TextWithHighlightsValue, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AlfrescoConfiguration
 */
const de_AlfrescoConfiguration = (output: any, context: __SerdeContext): AlfrescoConfiguration => {
  return {
    BlogFieldMappings:
      output.BlogFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.BlogFieldMappings, context)
        : undefined,
    CrawlComments: __expectBoolean(output.CrawlComments),
    CrawlSystemFolders: __expectBoolean(output.CrawlSystemFolders),
    DocumentLibraryFieldMappings:
      output.DocumentLibraryFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.DocumentLibraryFieldMappings, context)
        : undefined,
    EntityFilter: output.EntityFilter != null ? de_EntityFilter(output.EntityFilter, context) : undefined,
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    SiteId: __expectString(output.SiteId),
    SiteUrl: __expectString(output.SiteUrl),
    SslCertificateS3Path:
      output.SslCertificateS3Path != null ? de_S3Path(output.SslCertificateS3Path, context) : undefined,
    VpcConfiguration:
      output.VpcConfiguration != null ? de_DataSourceVpcConfiguration(output.VpcConfiguration, context) : undefined,
    WikiFieldMappings:
      output.WikiFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.WikiFieldMappings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AssociateEntitiesToExperienceFailedEntityList
 */
const de_AssociateEntitiesToExperienceFailedEntityList = (output: any, context: __SerdeContext): FailedEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailedEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssociateEntitiesToExperienceResponse
 */
const de_AssociateEntitiesToExperienceResponse = (
  output: any,
  context: __SerdeContext
): AssociateEntitiesToExperienceResponse => {
  return {
    FailedEntityList:
      output.FailedEntityList != null
        ? de_AssociateEntitiesToExperienceFailedEntityList(output.FailedEntityList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AssociatePersonasToEntitiesResponse
 */
const de_AssociatePersonasToEntitiesResponse = (
  output: any,
  context: __SerdeContext
): AssociatePersonasToEntitiesResponse => {
  return {
    FailedEntityList:
      output.FailedEntityList != null ? de_FailedEntityList(output.FailedEntityList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AuthenticationConfiguration
 */
const de_AuthenticationConfiguration = (output: any, context: __SerdeContext): AuthenticationConfiguration => {
  return {
    BasicAuthentication:
      output.BasicAuthentication != null
        ? de_BasicAuthenticationConfigurationList(output.BasicAuthentication, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BasicAuthenticationConfiguration
 */
const de_BasicAuthenticationConfiguration = (
  output: any,
  context: __SerdeContext
): BasicAuthenticationConfiguration => {
  return {
    Credentials: __expectString(output.Credentials),
    Host: __expectString(output.Host),
    Port: __expectInt32(output.Port),
  } as any;
};

/**
 * deserializeAws_json1_1BasicAuthenticationConfigurationList
 */
const de_BasicAuthenticationConfigurationList = (
  output: any,
  context: __SerdeContext
): BasicAuthenticationConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BasicAuthenticationConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchDeleteDocumentResponse
 */
const de_BatchDeleteDocumentResponse = (output: any, context: __SerdeContext): BatchDeleteDocumentResponse => {
  return {
    FailedDocuments:
      output.FailedDocuments != null
        ? de_BatchDeleteDocumentResponseFailedDocuments(output.FailedDocuments, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocument
 */
const de_BatchDeleteDocumentResponseFailedDocument = (
  output: any,
  context: __SerdeContext
): BatchDeleteDocumentResponseFailedDocument => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocuments
 */
const de_BatchDeleteDocumentResponseFailedDocuments = (
  output: any,
  context: __SerdeContext
): BatchDeleteDocumentResponseFailedDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchDeleteDocumentResponseFailedDocument(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchDeleteFeaturedResultsSetError
 */
const de_BatchDeleteFeaturedResultsSetError = (
  output: any,
  context: __SerdeContext
): BatchDeleteFeaturedResultsSetError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_1BatchDeleteFeaturedResultsSetErrors
 */
const de_BatchDeleteFeaturedResultsSetErrors = (
  output: any,
  context: __SerdeContext
): BatchDeleteFeaturedResultsSetError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchDeleteFeaturedResultsSetError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchDeleteFeaturedResultsSetResponse
 */
const de_BatchDeleteFeaturedResultsSetResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteFeaturedResultsSetResponse => {
  return {
    Errors: output.Errors != null ? de_BatchDeleteFeaturedResultsSetErrors(output.Errors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetDocumentStatusResponse
 */
const de_BatchGetDocumentStatusResponse = (output: any, context: __SerdeContext): BatchGetDocumentStatusResponse => {
  return {
    DocumentStatusList:
      output.DocumentStatusList != null ? de_DocumentStatusList(output.DocumentStatusList, context) : undefined,
    Errors: output.Errors != null ? de_BatchGetDocumentStatusResponseErrors(output.Errors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetDocumentStatusResponseError
 */
const de_BatchGetDocumentStatusResponseError = (
  output: any,
  context: __SerdeContext
): BatchGetDocumentStatusResponseError => {
  return {
    DocumentId: __expectString(output.DocumentId),
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetDocumentStatusResponseErrors
 */
const de_BatchGetDocumentStatusResponseErrors = (
  output: any,
  context: __SerdeContext
): BatchGetDocumentStatusResponseError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchGetDocumentStatusResponseError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchPutDocumentResponse
 */
const de_BatchPutDocumentResponse = (output: any, context: __SerdeContext): BatchPutDocumentResponse => {
  return {
    FailedDocuments:
      output.FailedDocuments != null
        ? de_BatchPutDocumentResponseFailedDocuments(output.FailedDocuments, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchPutDocumentResponseFailedDocument
 */
const de_BatchPutDocumentResponseFailedDocument = (
  output: any,
  context: __SerdeContext
): BatchPutDocumentResponseFailedDocument => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_1BatchPutDocumentResponseFailedDocuments
 */
const de_BatchPutDocumentResponseFailedDocuments = (
  output: any,
  context: __SerdeContext
): BatchPutDocumentResponseFailedDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchPutDocumentResponseFailedDocument(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BoxConfiguration
 */
const de_BoxConfiguration = (output: any, context: __SerdeContext): BoxConfiguration => {
  return {
    CommentFieldMappings:
      output.CommentFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.CommentFieldMappings, context)
        : undefined,
    CrawlComments: __expectBoolean(output.CrawlComments),
    CrawlTasks: __expectBoolean(output.CrawlTasks),
    CrawlWebLinks: __expectBoolean(output.CrawlWebLinks),
    EnterpriseId: __expectString(output.EnterpriseId),
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    FileFieldMappings:
      output.FileFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.FileFieldMappings, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    TaskFieldMappings:
      output.TaskFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.TaskFieldMappings, context)
        : undefined,
    UseChangeLog: __expectBoolean(output.UseChangeLog),
    VpcConfiguration:
      output.VpcConfiguration != null ? de_DataSourceVpcConfiguration(output.VpcConfiguration, context) : undefined,
    WebLinkFieldMappings:
      output.WebLinkFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.WebLinkFieldMappings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CapacityUnitsConfiguration
 */
const de_CapacityUnitsConfiguration = (output: any, context: __SerdeContext): CapacityUnitsConfiguration => {
  return {
    QueryCapacityUnits: __expectInt32(output.QueryCapacityUnits),
    StorageCapacityUnits: __expectInt32(output.StorageCapacityUnits),
  } as any;
};

/**
 * deserializeAws_json1_1ChangeDetectingColumns
 */
const de_ChangeDetectingColumns = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ColumnConfiguration
 */
const de_ColumnConfiguration = (output: any, context: __SerdeContext): ColumnConfiguration => {
  return {
    ChangeDetectingColumns:
      output.ChangeDetectingColumns != null
        ? de_ChangeDetectingColumns(output.ChangeDetectingColumns, context)
        : undefined,
    DocumentDataColumnName: __expectString(output.DocumentDataColumnName),
    DocumentIdColumnName: __expectString(output.DocumentIdColumnName),
    DocumentTitleColumnName: __expectString(output.DocumentTitleColumnName),
    FieldMappings:
      output.FieldMappings != null ? de_DataSourceToIndexFieldMappingList(output.FieldMappings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ConflictingItem
 */
const de_ConflictingItem = (output: any, context: __SerdeContext): ConflictingItem => {
  return {
    QueryText: __expectString(output.QueryText),
    SetId: __expectString(output.SetId),
    SetName: __expectString(output.SetName),
  } as any;
};

/**
 * deserializeAws_json1_1ConflictingItems
 */
const de_ConflictingItems = (output: any, context: __SerdeContext): ConflictingItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConflictingItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConfluenceAttachmentConfiguration
 */
const de_ConfluenceAttachmentConfiguration = (
  output: any,
  context: __SerdeContext
): ConfluenceAttachmentConfiguration => {
  return {
    AttachmentFieldMappings:
      output.AttachmentFieldMappings != null
        ? de_ConfluenceAttachmentFieldMappingsList(output.AttachmentFieldMappings, context)
        : undefined,
    CrawlAttachments: __expectBoolean(output.CrawlAttachments),
  } as any;
};

/**
 * deserializeAws_json1_1ConfluenceAttachmentFieldMappingsList
 */
const de_ConfluenceAttachmentFieldMappingsList = (
  output: any,
  context: __SerdeContext
): ConfluenceAttachmentToIndexFieldMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfluenceAttachmentToIndexFieldMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping
 */
const de_ConfluenceAttachmentToIndexFieldMapping = (
  output: any,
  context: __SerdeContext
): ConfluenceAttachmentToIndexFieldMapping => {
  return {
    DataSourceFieldName: __expectString(output.DataSourceFieldName),
    DateFieldFormat: __expectString(output.DateFieldFormat),
    IndexFieldName: __expectString(output.IndexFieldName),
  } as any;
};

/**
 * deserializeAws_json1_1ConfluenceBlogConfiguration
 */
const de_ConfluenceBlogConfiguration = (output: any, context: __SerdeContext): ConfluenceBlogConfiguration => {
  return {
    BlogFieldMappings:
      output.BlogFieldMappings != null
        ? de_ConfluenceBlogFieldMappingsList(output.BlogFieldMappings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConfluenceBlogFieldMappingsList
 */
const de_ConfluenceBlogFieldMappingsList = (
  output: any,
  context: __SerdeContext
): ConfluenceBlogToIndexFieldMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfluenceBlogToIndexFieldMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConfluenceBlogToIndexFieldMapping
 */
const de_ConfluenceBlogToIndexFieldMapping = (
  output: any,
  context: __SerdeContext
): ConfluenceBlogToIndexFieldMapping => {
  return {
    DataSourceFieldName: __expectString(output.DataSourceFieldName),
    DateFieldFormat: __expectString(output.DateFieldFormat),
    IndexFieldName: __expectString(output.IndexFieldName),
  } as any;
};

/**
 * deserializeAws_json1_1ConfluenceConfiguration
 */
const de_ConfluenceConfiguration = (output: any, context: __SerdeContext): ConfluenceConfiguration => {
  return {
    AttachmentConfiguration:
      output.AttachmentConfiguration != null
        ? de_ConfluenceAttachmentConfiguration(output.AttachmentConfiguration, context)
        : undefined,
    AuthenticationType: __expectString(output.AuthenticationType),
    BlogConfiguration:
      output.BlogConfiguration != null ? de_ConfluenceBlogConfiguration(output.BlogConfiguration, context) : undefined,
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    PageConfiguration:
      output.PageConfiguration != null ? de_ConfluencePageConfiguration(output.PageConfiguration, context) : undefined,
    ProxyConfiguration:
      output.ProxyConfiguration != null ? de_ProxyConfiguration(output.ProxyConfiguration, context) : undefined,
    SecretArn: __expectString(output.SecretArn),
    ServerUrl: __expectString(output.ServerUrl),
    SpaceConfiguration:
      output.SpaceConfiguration != null
        ? de_ConfluenceSpaceConfiguration(output.SpaceConfiguration, context)
        : undefined,
    Version: __expectString(output.Version),
    VpcConfiguration:
      output.VpcConfiguration != null ? de_DataSourceVpcConfiguration(output.VpcConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConfluencePageConfiguration
 */
const de_ConfluencePageConfiguration = (output: any, context: __SerdeContext): ConfluencePageConfiguration => {
  return {
    PageFieldMappings:
      output.PageFieldMappings != null
        ? de_ConfluencePageFieldMappingsList(output.PageFieldMappings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConfluencePageFieldMappingsList
 */
const de_ConfluencePageFieldMappingsList = (
  output: any,
  context: __SerdeContext
): ConfluencePageToIndexFieldMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfluencePageToIndexFieldMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConfluencePageToIndexFieldMapping
 */
const de_ConfluencePageToIndexFieldMapping = (
  output: any,
  context: __SerdeContext
): ConfluencePageToIndexFieldMapping => {
  return {
    DataSourceFieldName: __expectString(output.DataSourceFieldName),
    DateFieldFormat: __expectString(output.DateFieldFormat),
    IndexFieldName: __expectString(output.IndexFieldName),
  } as any;
};

/**
 * deserializeAws_json1_1ConfluenceSpaceConfiguration
 */
const de_ConfluenceSpaceConfiguration = (output: any, context: __SerdeContext): ConfluenceSpaceConfiguration => {
  return {
    CrawlArchivedSpaces: __expectBoolean(output.CrawlArchivedSpaces),
    CrawlPersonalSpaces: __expectBoolean(output.CrawlPersonalSpaces),
    ExcludeSpaces: output.ExcludeSpaces != null ? de_ConfluenceSpaceList(output.ExcludeSpaces, context) : undefined,
    IncludeSpaces: output.IncludeSpaces != null ? de_ConfluenceSpaceList(output.IncludeSpaces, context) : undefined,
    SpaceFieldMappings:
      output.SpaceFieldMappings != null
        ? de_ConfluenceSpaceFieldMappingsList(output.SpaceFieldMappings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConfluenceSpaceFieldMappingsList
 */
const de_ConfluenceSpaceFieldMappingsList = (
  output: any,
  context: __SerdeContext
): ConfluenceSpaceToIndexFieldMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfluenceSpaceToIndexFieldMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConfluenceSpaceList
 */
const de_ConfluenceSpaceList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConfluenceSpaceToIndexFieldMapping
 */
const de_ConfluenceSpaceToIndexFieldMapping = (
  output: any,
  context: __SerdeContext
): ConfluenceSpaceToIndexFieldMapping => {
  return {
    DataSourceFieldName: __expectString(output.DataSourceFieldName),
    DateFieldFormat: __expectString(output.DateFieldFormat),
    IndexFieldName: __expectString(output.IndexFieldName),
  } as any;
};

/**
 * deserializeAws_json1_1ConnectionConfiguration
 */
const de_ConnectionConfiguration = (output: any, context: __SerdeContext): ConnectionConfiguration => {
  return {
    DatabaseHost: __expectString(output.DatabaseHost),
    DatabaseName: __expectString(output.DatabaseName),
    DatabasePort: __expectInt32(output.DatabasePort),
    SecretArn: __expectString(output.SecretArn),
    TableName: __expectString(output.TableName),
  } as any;
};

/**
 * deserializeAws_json1_1ContentSourceConfiguration
 */
const de_ContentSourceConfiguration = (output: any, context: __SerdeContext): ContentSourceConfiguration => {
  return {
    DataSourceIds: output.DataSourceIds != null ? de_DataSourceIdList(output.DataSourceIds, context) : undefined,
    DirectPutContent: __expectBoolean(output.DirectPutContent),
    FaqIds: output.FaqIds != null ? de_FaqIdsList(output.FaqIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Correction
 */
const de_Correction = (output: any, context: __SerdeContext): Correction => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    CorrectedTerm: __expectString(output.CorrectedTerm),
    EndOffset: __expectInt32(output.EndOffset),
    Term: __expectString(output.Term),
  } as any;
};

/**
 * deserializeAws_json1_1CorrectionList
 */
const de_CorrectionList = (output: any, context: __SerdeContext): Correction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Correction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateAccessControlConfigurationResponse
 */
const de_CreateAccessControlConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateAccessControlConfigurationResponse => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_1CreateDataSourceResponse
 */
const de_CreateDataSourceResponse = (output: any, context: __SerdeContext): CreateDataSourceResponse => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_1CreateExperienceResponse
 */
const de_CreateExperienceResponse = (output: any, context: __SerdeContext): CreateExperienceResponse => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_1CreateFaqResponse
 */
const de_CreateFaqResponse = (output: any, context: __SerdeContext): CreateFaqResponse => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_1CreateFeaturedResultsSetResponse
 */
const de_CreateFeaturedResultsSetResponse = (
  output: any,
  context: __SerdeContext
): CreateFeaturedResultsSetResponse => {
  return {
    FeaturedResultsSet:
      output.FeaturedResultsSet != null ? de_FeaturedResultsSet(output.FeaturedResultsSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateIndexResponse
 */
const de_CreateIndexResponse = (output: any, context: __SerdeContext): CreateIndexResponse => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_1CreateQuerySuggestionsBlockListResponse
 */
const de_CreateQuerySuggestionsBlockListResponse = (
  output: any,
  context: __SerdeContext
): CreateQuerySuggestionsBlockListResponse => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_1CreateThesaurusResponse
 */
const de_CreateThesaurusResponse = (output: any, context: __SerdeContext): CreateThesaurusResponse => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_1CustomDocumentEnrichmentConfiguration
 */
const de_CustomDocumentEnrichmentConfiguration = (
  output: any,
  context: __SerdeContext
): CustomDocumentEnrichmentConfiguration => {
  return {
    InlineConfigurations:
      output.InlineConfigurations != null
        ? de_InlineCustomDocumentEnrichmentConfigurationList(output.InlineConfigurations, context)
        : undefined,
    PostExtractionHookConfiguration:
      output.PostExtractionHookConfiguration != null
        ? de_HookConfiguration(output.PostExtractionHookConfiguration, context)
        : undefined,
    PreExtractionHookConfiguration:
      output.PreExtractionHookConfiguration != null
        ? de_HookConfiguration(output.PreExtractionHookConfiguration, context)
        : undefined,
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

/**
 * deserializeAws_json1_1DatabaseConfiguration
 */
const de_DatabaseConfiguration = (output: any, context: __SerdeContext): DatabaseConfiguration => {
  return {
    AclConfiguration:
      output.AclConfiguration != null ? de_AclConfiguration(output.AclConfiguration, context) : undefined,
    ColumnConfiguration:
      output.ColumnConfiguration != null ? de_ColumnConfiguration(output.ColumnConfiguration, context) : undefined,
    ConnectionConfiguration:
      output.ConnectionConfiguration != null
        ? de_ConnectionConfiguration(output.ConnectionConfiguration, context)
        : undefined,
    DatabaseEngineType: __expectString(output.DatabaseEngineType),
    SqlConfiguration:
      output.SqlConfiguration != null ? de_SqlConfiguration(output.SqlConfiguration, context) : undefined,
    VpcConfiguration:
      output.VpcConfiguration != null ? de_DataSourceVpcConfiguration(output.VpcConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DataSourceConfiguration
 */
const de_DataSourceConfiguration = (output: any, context: __SerdeContext): DataSourceConfiguration => {
  return {
    AlfrescoConfiguration:
      output.AlfrescoConfiguration != null
        ? de_AlfrescoConfiguration(output.AlfrescoConfiguration, context)
        : undefined,
    BoxConfiguration:
      output.BoxConfiguration != null ? de_BoxConfiguration(output.BoxConfiguration, context) : undefined,
    ConfluenceConfiguration:
      output.ConfluenceConfiguration != null
        ? de_ConfluenceConfiguration(output.ConfluenceConfiguration, context)
        : undefined,
    DatabaseConfiguration:
      output.DatabaseConfiguration != null
        ? de_DatabaseConfiguration(output.DatabaseConfiguration, context)
        : undefined,
    FsxConfiguration:
      output.FsxConfiguration != null ? de_FsxConfiguration(output.FsxConfiguration, context) : undefined,
    GitHubConfiguration:
      output.GitHubConfiguration != null ? de_GitHubConfiguration(output.GitHubConfiguration, context) : undefined,
    GoogleDriveConfiguration:
      output.GoogleDriveConfiguration != null
        ? de_GoogleDriveConfiguration(output.GoogleDriveConfiguration, context)
        : undefined,
    JiraConfiguration:
      output.JiraConfiguration != null ? de_JiraConfiguration(output.JiraConfiguration, context) : undefined,
    OneDriveConfiguration:
      output.OneDriveConfiguration != null
        ? de_OneDriveConfiguration(output.OneDriveConfiguration, context)
        : undefined,
    QuipConfiguration:
      output.QuipConfiguration != null ? de_QuipConfiguration(output.QuipConfiguration, context) : undefined,
    S3Configuration:
      output.S3Configuration != null ? de_S3DataSourceConfiguration(output.S3Configuration, context) : undefined,
    SalesforceConfiguration:
      output.SalesforceConfiguration != null
        ? de_SalesforceConfiguration(output.SalesforceConfiguration, context)
        : undefined,
    ServiceNowConfiguration:
      output.ServiceNowConfiguration != null
        ? de_ServiceNowConfiguration(output.ServiceNowConfiguration, context)
        : undefined,
    SharePointConfiguration:
      output.SharePointConfiguration != null
        ? de_SharePointConfiguration(output.SharePointConfiguration, context)
        : undefined,
    SlackConfiguration:
      output.SlackConfiguration != null ? de_SlackConfiguration(output.SlackConfiguration, context) : undefined,
    TemplateConfiguration:
      output.TemplateConfiguration != null
        ? de_TemplateConfiguration(output.TemplateConfiguration, context)
        : undefined,
    WebCrawlerConfiguration:
      output.WebCrawlerConfiguration != null
        ? de_WebCrawlerConfiguration(output.WebCrawlerConfiguration, context)
        : undefined,
    WorkDocsConfiguration:
      output.WorkDocsConfiguration != null
        ? de_WorkDocsConfiguration(output.WorkDocsConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DataSourceIdList
 */
const de_DataSourceIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DataSourceInclusionsExclusionsStrings
 */
const de_DataSourceInclusionsExclusionsStrings = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DataSourceSummary
 */
const de_DataSourceSummary = (output: any, context: __SerdeContext): DataSourceSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Id: __expectString(output.Id),
    LanguageCode: __expectString(output.LanguageCode),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DataSourceSummaryList
 */
const de_DataSourceSummaryList = (output: any, context: __SerdeContext): DataSourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataSourceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DataSourceSyncJob
 */
const de_DataSourceSyncJob = (output: any, context: __SerdeContext): DataSourceSyncJob => {
  return {
    DataSourceErrorCode: __expectString(output.DataSourceErrorCode),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    ExecutionId: __expectString(output.ExecutionId),
    Metrics: output.Metrics != null ? de_DataSourceSyncJobMetrics(output.Metrics, context) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DataSourceSyncJobHistoryList
 */
const de_DataSourceSyncJobHistoryList = (output: any, context: __SerdeContext): DataSourceSyncJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataSourceSyncJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DataSourceSyncJobMetrics
 */
const de_DataSourceSyncJobMetrics = (output: any, context: __SerdeContext): DataSourceSyncJobMetrics => {
  return {
    DocumentsAdded: __expectString(output.DocumentsAdded),
    DocumentsDeleted: __expectString(output.DocumentsDeleted),
    DocumentsFailed: __expectString(output.DocumentsFailed),
    DocumentsModified: __expectString(output.DocumentsModified),
    DocumentsScanned: __expectString(output.DocumentsScanned),
  } as any;
};

/**
 * deserializeAws_json1_1DataSourceToIndexFieldMapping
 */
const de_DataSourceToIndexFieldMapping = (output: any, context: __SerdeContext): DataSourceToIndexFieldMapping => {
  return {
    DataSourceFieldName: __expectString(output.DataSourceFieldName),
    DateFieldFormat: __expectString(output.DateFieldFormat),
    IndexFieldName: __expectString(output.IndexFieldName),
  } as any;
};

/**
 * deserializeAws_json1_1DataSourceToIndexFieldMappingList
 */
const de_DataSourceToIndexFieldMappingList = (
  output: any,
  context: __SerdeContext
): DataSourceToIndexFieldMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataSourceToIndexFieldMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DataSourceVpcConfiguration
 */
const de_DataSourceVpcConfiguration = (output: any, context: __SerdeContext): DataSourceVpcConfiguration => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds != null ? de_SecurityGroupIdList(output.SecurityGroupIds, context) : undefined,
    SubnetIds: output.SubnetIds != null ? de_SubnetIdList(output.SubnetIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteAccessControlConfigurationResponse
 */
const de_DeleteAccessControlConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteAccessControlConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteExperienceResponse
 */
const de_DeleteExperienceResponse = (output: any, context: __SerdeContext): DeleteExperienceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeAccessControlConfigurationResponse
 */
const de_DescribeAccessControlConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeAccessControlConfigurationResponse => {
  return {
    AccessControlList:
      output.AccessControlList != null ? de_PrincipalList(output.AccessControlList, context) : undefined,
    Description: __expectString(output.Description),
    ErrorMessage: __expectString(output.ErrorMessage),
    HierarchicalAccessControlList:
      output.HierarchicalAccessControlList != null
        ? de_HierarchicalPrincipalList(output.HierarchicalAccessControlList, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDataSourceResponse
 */
const de_DescribeDataSourceResponse = (output: any, context: __SerdeContext): DescribeDataSourceResponse => {
  return {
    Configuration: output.Configuration != null ? de_DataSourceConfiguration(output.Configuration, context) : undefined,
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    CustomDocumentEnrichmentConfiguration:
      output.CustomDocumentEnrichmentConfiguration != null
        ? de_CustomDocumentEnrichmentConfiguration(output.CustomDocumentEnrichmentConfiguration, context)
        : undefined,
    Description: __expectString(output.Description),
    ErrorMessage: __expectString(output.ErrorMessage),
    Id: __expectString(output.Id),
    IndexId: __expectString(output.IndexId),
    LanguageCode: __expectString(output.LanguageCode),
    Name: __expectString(output.Name),
    RoleArn: __expectString(output.RoleArn),
    Schedule: __expectString(output.Schedule),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
    VpcConfiguration:
      output.VpcConfiguration != null ? de_DataSourceVpcConfiguration(output.VpcConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeExperienceResponse
 */
const de_DescribeExperienceResponse = (output: any, context: __SerdeContext): DescribeExperienceResponse => {
  return {
    Configuration: output.Configuration != null ? de_ExperienceConfiguration(output.Configuration, context) : undefined,
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    Endpoints: output.Endpoints != null ? de_ExperienceEndpoints(output.Endpoints, context) : undefined,
    ErrorMessage: __expectString(output.ErrorMessage),
    Id: __expectString(output.Id),
    IndexId: __expectString(output.IndexId),
    Name: __expectString(output.Name),
    RoleArn: __expectString(output.RoleArn),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFaqResponse
 */
const de_DescribeFaqResponse = (output: any, context: __SerdeContext): DescribeFaqResponse => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    ErrorMessage: __expectString(output.ErrorMessage),
    FileFormat: __expectString(output.FileFormat),
    Id: __expectString(output.Id),
    IndexId: __expectString(output.IndexId),
    LanguageCode: __expectString(output.LanguageCode),
    Name: __expectString(output.Name),
    RoleArn: __expectString(output.RoleArn),
    S3Path: output.S3Path != null ? de_S3Path(output.S3Path, context) : undefined,
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFeaturedResultsSetResponse
 */
const de_DescribeFeaturedResultsSetResponse = (
  output: any,
  context: __SerdeContext
): DescribeFeaturedResultsSetResponse => {
  return {
    CreationTimestamp: __expectLong(output.CreationTimestamp),
    Description: __expectString(output.Description),
    FeaturedDocumentsMissing:
      output.FeaturedDocumentsMissing != null
        ? de_FeaturedDocumentMissingList(output.FeaturedDocumentsMissing, context)
        : undefined,
    FeaturedDocumentsWithMetadata:
      output.FeaturedDocumentsWithMetadata != null
        ? de_FeaturedDocumentWithMetadataList(output.FeaturedDocumentsWithMetadata, context)
        : undefined,
    FeaturedResultsSetId: __expectString(output.FeaturedResultsSetId),
    FeaturedResultsSetName: __expectString(output.FeaturedResultsSetName),
    LastUpdatedTimestamp: __expectLong(output.LastUpdatedTimestamp),
    QueryTexts: output.QueryTexts != null ? de_QueryTextList(output.QueryTexts, context) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeIndexResponse
 */
const de_DescribeIndexResponse = (output: any, context: __SerdeContext): DescribeIndexResponse => {
  return {
    CapacityUnits:
      output.CapacityUnits != null ? de_CapacityUnitsConfiguration(output.CapacityUnits, context) : undefined,
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    DocumentMetadataConfigurations:
      output.DocumentMetadataConfigurations != null
        ? de_DocumentMetadataConfigurationList(output.DocumentMetadataConfigurations, context)
        : undefined,
    Edition: __expectString(output.Edition),
    ErrorMessage: __expectString(output.ErrorMessage),
    Id: __expectString(output.Id),
    IndexStatistics: output.IndexStatistics != null ? de_IndexStatistics(output.IndexStatistics, context) : undefined,
    Name: __expectString(output.Name),
    RoleArn: __expectString(output.RoleArn),
    ServerSideEncryptionConfiguration:
      output.ServerSideEncryptionConfiguration != null
        ? de_ServerSideEncryptionConfiguration(output.ServerSideEncryptionConfiguration, context)
        : undefined,
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
    UserContextPolicy: __expectString(output.UserContextPolicy),
    UserGroupResolutionConfiguration:
      output.UserGroupResolutionConfiguration != null
        ? de_UserGroupResolutionConfiguration(output.UserGroupResolutionConfiguration, context)
        : undefined,
    UserTokenConfigurations:
      output.UserTokenConfigurations != null
        ? de_UserTokenConfigurationList(output.UserTokenConfigurations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribePrincipalMappingResponse
 */
const de_DescribePrincipalMappingResponse = (
  output: any,
  context: __SerdeContext
): DescribePrincipalMappingResponse => {
  return {
    DataSourceId: __expectString(output.DataSourceId),
    GroupId: __expectString(output.GroupId),
    GroupOrderingIdSummaries:
      output.GroupOrderingIdSummaries != null
        ? de_GroupOrderingIdSummaries(output.GroupOrderingIdSummaries, context)
        : undefined,
    IndexId: __expectString(output.IndexId),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeQuerySuggestionsBlockListResponse
 */
const de_DescribeQuerySuggestionsBlockListResponse = (
  output: any,
  context: __SerdeContext
): DescribeQuerySuggestionsBlockListResponse => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    ErrorMessage: __expectString(output.ErrorMessage),
    FileSizeBytes: __expectLong(output.FileSizeBytes),
    Id: __expectString(output.Id),
    IndexId: __expectString(output.IndexId),
    ItemCount: __expectInt32(output.ItemCount),
    Name: __expectString(output.Name),
    RoleArn: __expectString(output.RoleArn),
    SourceS3Path: output.SourceS3Path != null ? de_S3Path(output.SourceS3Path, context) : undefined,
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeQuerySuggestionsConfigResponse
 */
const de_DescribeQuerySuggestionsConfigResponse = (
  output: any,
  context: __SerdeContext
): DescribeQuerySuggestionsConfigResponse => {
  return {
    IncludeQueriesWithoutUserInformation: __expectBoolean(output.IncludeQueriesWithoutUserInformation),
    LastClearTime:
      output.LastClearTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastClearTime)))
        : undefined,
    LastSuggestionsBuildTime:
      output.LastSuggestionsBuildTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastSuggestionsBuildTime)))
        : undefined,
    MinimumNumberOfQueryingUsers: __expectInt32(output.MinimumNumberOfQueryingUsers),
    MinimumQueryCount: __expectInt32(output.MinimumQueryCount),
    Mode: __expectString(output.Mode),
    QueryLogLookBackWindowInDays: __expectInt32(output.QueryLogLookBackWindowInDays),
    Status: __expectString(output.Status),
    TotalSuggestionsCount: __expectInt32(output.TotalSuggestionsCount),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeThesaurusResponse
 */
const de_DescribeThesaurusResponse = (output: any, context: __SerdeContext): DescribeThesaurusResponse => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    ErrorMessage: __expectString(output.ErrorMessage),
    FileSizeBytes: __expectLong(output.FileSizeBytes),
    Id: __expectString(output.Id),
    IndexId: __expectString(output.IndexId),
    Name: __expectString(output.Name),
    RoleArn: __expectString(output.RoleArn),
    SourceS3Path: output.SourceS3Path != null ? de_S3Path(output.SourceS3Path, context) : undefined,
    Status: __expectString(output.Status),
    SynonymRuleCount: __expectLong(output.SynonymRuleCount),
    TermCount: __expectLong(output.TermCount),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DisassociateEntitiesFromExperienceResponse
 */
const de_DisassociateEntitiesFromExperienceResponse = (
  output: any,
  context: __SerdeContext
): DisassociateEntitiesFromExperienceResponse => {
  return {
    FailedEntityList:
      output.FailedEntityList != null ? de_FailedEntityList(output.FailedEntityList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DisassociatePersonasFromEntitiesResponse
 */
const de_DisassociatePersonasFromEntitiesResponse = (
  output: any,
  context: __SerdeContext
): DisassociatePersonasFromEntitiesResponse => {
  return {
    FailedEntityList:
      output.FailedEntityList != null ? de_FailedEntityList(output.FailedEntityList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DocumentAttribute
 */
const de_DocumentAttribute = (output: any, context: __SerdeContext): DocumentAttribute => {
  return {
    Key: __expectString(output.Key),
    Value: output.Value != null ? de_DocumentAttributeValue(output.Value, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DocumentAttributeCondition
 */
const de_DocumentAttributeCondition = (output: any, context: __SerdeContext): DocumentAttributeCondition => {
  return {
    ConditionDocumentAttributeKey: __expectString(output.ConditionDocumentAttributeKey),
    ConditionOnValue:
      output.ConditionOnValue != null ? de_DocumentAttributeValue(output.ConditionOnValue, context) : undefined,
    Operator: __expectString(output.Operator),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentAttributeList
 */
const de_DocumentAttributeList = (output: any, context: __SerdeContext): DocumentAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DocumentAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DocumentAttributeStringListValue
 */
const de_DocumentAttributeStringListValue = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DocumentAttributeTarget
 */
const de_DocumentAttributeTarget = (output: any, context: __SerdeContext): DocumentAttributeTarget => {
  return {
    TargetDocumentAttributeKey: __expectString(output.TargetDocumentAttributeKey),
    TargetDocumentAttributeValue:
      output.TargetDocumentAttributeValue != null
        ? de_DocumentAttributeValue(output.TargetDocumentAttributeValue, context)
        : undefined,
    TargetDocumentAttributeValueDeletion: __expectBoolean(output.TargetDocumentAttributeValueDeletion),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentAttributeValue
 */
const de_DocumentAttributeValue = (output: any, context: __SerdeContext): DocumentAttributeValue => {
  return {
    DateValue:
      output.DateValue != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateValue))) : undefined,
    LongValue: __expectLong(output.LongValue),
    StringListValue:
      output.StringListValue != null ? de_DocumentAttributeStringListValue(output.StringListValue, context) : undefined,
    StringValue: __expectString(output.StringValue),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentAttributeValueCountPair
 */
const de_DocumentAttributeValueCountPair = (output: any, context: __SerdeContext): DocumentAttributeValueCountPair => {
  return {
    Count: __expectInt32(output.Count),
    DocumentAttributeValue:
      output.DocumentAttributeValue != null
        ? de_DocumentAttributeValue(output.DocumentAttributeValue, context)
        : undefined,
    FacetResults: output.FacetResults != null ? de_FacetResultList(output.FacetResults, context) : undefined,
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_DocumentAttributeValueCountPair(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DocumentMetadataConfiguration
 */
const de_DocumentMetadataConfiguration = (output: any, context: __SerdeContext): DocumentMetadataConfiguration => {
  return {
    Name: __expectString(output.Name),
    Relevance: output.Relevance != null ? de_Relevance(output.Relevance, context) : undefined,
    Search: output.Search != null ? de_Search(output.Search, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentMetadataConfigurationList
 */
const de_DocumentMetadataConfigurationList = (
  output: any,
  context: __SerdeContext
): DocumentMetadataConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DocumentMetadataConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DocumentsMetadataConfiguration
 */
const de_DocumentsMetadataConfiguration = (output: any, context: __SerdeContext): DocumentsMetadataConfiguration => {
  return {
    S3Prefix: __expectString(output.S3Prefix),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentStatusList
 */
const de_DocumentStatusList = (output: any, context: __SerdeContext): Status[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Status(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EntityDisplayData
 */
const de_EntityDisplayData = (output: any, context: __SerdeContext): EntityDisplayData => {
  return {
    FirstName: __expectString(output.FirstName),
    GroupName: __expectString(output.GroupName),
    IdentifiedUserName: __expectString(output.IdentifiedUserName),
    LastName: __expectString(output.LastName),
    UserName: __expectString(output.UserName),
  } as any;
};

/**
 * deserializeAws_json1_1EntityFilter
 */
const de_EntityFilter = (output: any, context: __SerdeContext): (AlfrescoEntity | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExcludeMimeTypesList
 */
const de_ExcludeMimeTypesList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExcludeSharedDrivesList
 */
const de_ExcludeSharedDrivesList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExcludeUserAccountsList
 */
const de_ExcludeUserAccountsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExperienceConfiguration
 */
const de_ExperienceConfiguration = (output: any, context: __SerdeContext): ExperienceConfiguration => {
  return {
    ContentSourceConfiguration:
      output.ContentSourceConfiguration != null
        ? de_ContentSourceConfiguration(output.ContentSourceConfiguration, context)
        : undefined,
    UserIdentityConfiguration:
      output.UserIdentityConfiguration != null
        ? de_UserIdentityConfiguration(output.UserIdentityConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ExperienceEndpoint
 */
const de_ExperienceEndpoint = (output: any, context: __SerdeContext): ExperienceEndpoint => {
  return {
    Endpoint: __expectString(output.Endpoint),
    EndpointType: __expectString(output.EndpointType),
  } as any;
};

/**
 * deserializeAws_json1_1ExperienceEndpoints
 */
const de_ExperienceEndpoints = (output: any, context: __SerdeContext): ExperienceEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExperienceEndpoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExperienceEntitiesSummary
 */
const de_ExperienceEntitiesSummary = (output: any, context: __SerdeContext): ExperienceEntitiesSummary => {
  return {
    DisplayData: output.DisplayData != null ? de_EntityDisplayData(output.DisplayData, context) : undefined,
    EntityId: __expectString(output.EntityId),
    EntityType: __expectString(output.EntityType),
  } as any;
};

/**
 * deserializeAws_json1_1ExperienceEntitiesSummaryList
 */
const de_ExperienceEntitiesSummaryList = (output: any, context: __SerdeContext): ExperienceEntitiesSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExperienceEntitiesSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExperiencesSummary
 */
const de_ExperiencesSummary = (output: any, context: __SerdeContext): ExperiencesSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Endpoints: output.Endpoints != null ? de_ExperienceEndpoints(output.Endpoints, context) : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ExperiencesSummaryList
 */
const de_ExperiencesSummaryList = (output: any, context: __SerdeContext): ExperiencesSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExperiencesSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FacetResult
 */
const de_FacetResult = (output: any, context: __SerdeContext): FacetResult => {
  return {
    DocumentAttributeKey: __expectString(output.DocumentAttributeKey),
    DocumentAttributeValueCountPairs:
      output.DocumentAttributeValueCountPairs != null
        ? de_DocumentAttributeValueCountPairList(output.DocumentAttributeValueCountPairs, context)
        : undefined,
    DocumentAttributeValueType: __expectString(output.DocumentAttributeValueType),
  } as any;
};

/**
 * deserializeAws_json1_1FacetResultList
 */
const de_FacetResultList = (output: any, context: __SerdeContext): FacetResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FacetResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FailedEntity
 */
const de_FailedEntity = (output: any, context: __SerdeContext): FailedEntity => {
  return {
    EntityId: __expectString(output.EntityId),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

/**
 * deserializeAws_json1_1FailedEntityList
 */
const de_FailedEntityList = (output: any, context: __SerdeContext): FailedEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailedEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FaqIdsList
 */
const de_FaqIdsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FaqStatistics
 */
const de_FaqStatistics = (output: any, context: __SerdeContext): FaqStatistics => {
  return {
    IndexedQuestionAnswersCount: __expectInt32(output.IndexedQuestionAnswersCount),
  } as any;
};

/**
 * deserializeAws_json1_1FaqSummary
 */
const de_FaqSummary = (output: any, context: __SerdeContext): FaqSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    FileFormat: __expectString(output.FileFormat),
    Id: __expectString(output.Id),
    LanguageCode: __expectString(output.LanguageCode),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FaqSummaryItems
 */
const de_FaqSummaryItems = (output: any, context: __SerdeContext): FaqSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FaqSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FeaturedDocument
 */
const de_FeaturedDocument = (output: any, context: __SerdeContext): FeaturedDocument => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_1FeaturedDocumentList
 */
const de_FeaturedDocumentList = (output: any, context: __SerdeContext): FeaturedDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FeaturedDocument(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FeaturedDocumentMissing
 */
const de_FeaturedDocumentMissing = (output: any, context: __SerdeContext): FeaturedDocumentMissing => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_1FeaturedDocumentMissingList
 */
const de_FeaturedDocumentMissingList = (output: any, context: __SerdeContext): FeaturedDocumentMissing[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FeaturedDocumentMissing(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FeaturedDocumentWithMetadata
 */
const de_FeaturedDocumentWithMetadata = (output: any, context: __SerdeContext): FeaturedDocumentWithMetadata => {
  return {
    Id: __expectString(output.Id),
    Title: __expectString(output.Title),
    URI: __expectString(output.URI),
  } as any;
};

/**
 * deserializeAws_json1_1FeaturedDocumentWithMetadataList
 */
const de_FeaturedDocumentWithMetadataList = (output: any, context: __SerdeContext): FeaturedDocumentWithMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FeaturedDocumentWithMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FeaturedResultsConflictException
 */
const de_FeaturedResultsConflictException = (
  output: any,
  context: __SerdeContext
): FeaturedResultsConflictException => {
  return {
    ConflictingItems:
      output.ConflictingItems != null ? de_ConflictingItems(output.ConflictingItems, context) : undefined,
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1FeaturedResultsItem
 */
const de_FeaturedResultsItem = (output: any, context: __SerdeContext): FeaturedResultsItem => {
  return {
    AdditionalAttributes:
      output.AdditionalAttributes != null
        ? de_AdditionalResultAttributeList(output.AdditionalAttributes, context)
        : undefined,
    DocumentAttributes:
      output.DocumentAttributes != null ? de_DocumentAttributeList(output.DocumentAttributes, context) : undefined,
    DocumentExcerpt:
      output.DocumentExcerpt != null ? de_TextWithHighlights(output.DocumentExcerpt, context) : undefined,
    DocumentId: __expectString(output.DocumentId),
    DocumentTitle: output.DocumentTitle != null ? de_TextWithHighlights(output.DocumentTitle, context) : undefined,
    DocumentURI: __expectString(output.DocumentURI),
    FeedbackToken: __expectString(output.FeedbackToken),
    Id: __expectString(output.Id),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1FeaturedResultsItemList
 */
const de_FeaturedResultsItemList = (output: any, context: __SerdeContext): FeaturedResultsItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FeaturedResultsItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FeaturedResultsSet
 */
const de_FeaturedResultsSet = (output: any, context: __SerdeContext): FeaturedResultsSet => {
  return {
    CreationTimestamp: __expectLong(output.CreationTimestamp),
    Description: __expectString(output.Description),
    FeaturedDocuments:
      output.FeaturedDocuments != null ? de_FeaturedDocumentList(output.FeaturedDocuments, context) : undefined,
    FeaturedResultsSetId: __expectString(output.FeaturedResultsSetId),
    FeaturedResultsSetName: __expectString(output.FeaturedResultsSetName),
    LastUpdatedTimestamp: __expectLong(output.LastUpdatedTimestamp),
    QueryTexts: output.QueryTexts != null ? de_QueryTextList(output.QueryTexts, context) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1FeaturedResultsSetSummary
 */
const de_FeaturedResultsSetSummary = (output: any, context: __SerdeContext): FeaturedResultsSetSummary => {
  return {
    CreationTimestamp: __expectLong(output.CreationTimestamp),
    FeaturedResultsSetId: __expectString(output.FeaturedResultsSetId),
    FeaturedResultsSetName: __expectString(output.FeaturedResultsSetName),
    LastUpdatedTimestamp: __expectLong(output.LastUpdatedTimestamp),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1FeaturedResultsSetSummaryItems
 */
const de_FeaturedResultsSetSummaryItems = (output: any, context: __SerdeContext): FeaturedResultsSetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FeaturedResultsSetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FolderIdList
 */
const de_FolderIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FsxConfiguration
 */
const de_FsxConfiguration = (output: any, context: __SerdeContext): FsxConfiguration => {
  return {
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings != null ? de_DataSourceToIndexFieldMappingList(output.FieldMappings, context) : undefined,
    FileSystemId: __expectString(output.FileSystemId),
    FileSystemType: __expectString(output.FileSystemType),
    InclusionPatterns:
      output.InclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    VpcConfiguration:
      output.VpcConfiguration != null ? de_DataSourceVpcConfiguration(output.VpcConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetQuerySuggestionsResponse
 */
const de_GetQuerySuggestionsResponse = (output: any, context: __SerdeContext): GetQuerySuggestionsResponse => {
  return {
    QuerySuggestionsId: __expectString(output.QuerySuggestionsId),
    Suggestions: output.Suggestions != null ? de_SuggestionList(output.Suggestions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetSnapshotsResponse
 */
const de_GetSnapshotsResponse = (output: any, context: __SerdeContext): GetSnapshotsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SnapShotTimeFilter:
      output.SnapShotTimeFilter != null ? de_TimeRange(output.SnapShotTimeFilter, context) : undefined,
    SnapshotsData: output.SnapshotsData != null ? de_SnapshotsDataRecords(output.SnapshotsData, context) : undefined,
    SnapshotsDataHeader:
      output.SnapshotsDataHeader != null
        ? de_SnapshotsDataHeaderFields(output.SnapshotsDataHeader, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GitHubConfiguration
 */
const de_GitHubConfiguration = (output: any, context: __SerdeContext): GitHubConfiguration => {
  return {
    ExclusionFileNamePatterns:
      output.ExclusionFileNamePatterns != null ? de_StringList(output.ExclusionFileNamePatterns, context) : undefined,
    ExclusionFileTypePatterns:
      output.ExclusionFileTypePatterns != null ? de_StringList(output.ExclusionFileTypePatterns, context) : undefined,
    ExclusionFolderNamePatterns:
      output.ExclusionFolderNamePatterns != null
        ? de_StringList(output.ExclusionFolderNamePatterns, context)
        : undefined,
    GitHubCommitConfigurationFieldMappings:
      output.GitHubCommitConfigurationFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.GitHubCommitConfigurationFieldMappings, context)
        : undefined,
    GitHubDocumentCrawlProperties:
      output.GitHubDocumentCrawlProperties != null
        ? de_GitHubDocumentCrawlProperties(output.GitHubDocumentCrawlProperties, context)
        : undefined,
    GitHubIssueAttachmentConfigurationFieldMappings:
      output.GitHubIssueAttachmentConfigurationFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.GitHubIssueAttachmentConfigurationFieldMappings, context)
        : undefined,
    GitHubIssueCommentConfigurationFieldMappings:
      output.GitHubIssueCommentConfigurationFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.GitHubIssueCommentConfigurationFieldMappings, context)
        : undefined,
    GitHubIssueDocumentConfigurationFieldMappings:
      output.GitHubIssueDocumentConfigurationFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.GitHubIssueDocumentConfigurationFieldMappings, context)
        : undefined,
    GitHubPullRequestCommentConfigurationFieldMappings:
      output.GitHubPullRequestCommentConfigurationFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.GitHubPullRequestCommentConfigurationFieldMappings, context)
        : undefined,
    GitHubPullRequestDocumentAttachmentConfigurationFieldMappings:
      output.GitHubPullRequestDocumentAttachmentConfigurationFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(
            output.GitHubPullRequestDocumentAttachmentConfigurationFieldMappings,
            context
          )
        : undefined,
    GitHubPullRequestDocumentConfigurationFieldMappings:
      output.GitHubPullRequestDocumentConfigurationFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.GitHubPullRequestDocumentConfigurationFieldMappings, context)
        : undefined,
    GitHubRepositoryConfigurationFieldMappings:
      output.GitHubRepositoryConfigurationFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.GitHubRepositoryConfigurationFieldMappings, context)
        : undefined,
    InclusionFileNamePatterns:
      output.InclusionFileNamePatterns != null ? de_StringList(output.InclusionFileNamePatterns, context) : undefined,
    InclusionFileTypePatterns:
      output.InclusionFileTypePatterns != null ? de_StringList(output.InclusionFileTypePatterns, context) : undefined,
    InclusionFolderNamePatterns:
      output.InclusionFolderNamePatterns != null
        ? de_StringList(output.InclusionFolderNamePatterns, context)
        : undefined,
    OnPremiseConfiguration:
      output.OnPremiseConfiguration != null
        ? de_OnPremiseConfiguration(output.OnPremiseConfiguration, context)
        : undefined,
    RepositoryFilter:
      output.RepositoryFilter != null ? de_RepositoryNames(output.RepositoryFilter, context) : undefined,
    SaaSConfiguration:
      output.SaaSConfiguration != null ? de_SaaSConfiguration(output.SaaSConfiguration, context) : undefined,
    SecretArn: __expectString(output.SecretArn),
    Type: __expectString(output.Type),
    UseChangeLog: __expectBoolean(output.UseChangeLog),
    VpcConfiguration:
      output.VpcConfiguration != null ? de_DataSourceVpcConfiguration(output.VpcConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GitHubDocumentCrawlProperties
 */
const de_GitHubDocumentCrawlProperties = (output: any, context: __SerdeContext): GitHubDocumentCrawlProperties => {
  return {
    CrawlIssue: __expectBoolean(output.CrawlIssue),
    CrawlIssueComment: __expectBoolean(output.CrawlIssueComment),
    CrawlIssueCommentAttachment: __expectBoolean(output.CrawlIssueCommentAttachment),
    CrawlPullRequest: __expectBoolean(output.CrawlPullRequest),
    CrawlPullRequestComment: __expectBoolean(output.CrawlPullRequestComment),
    CrawlPullRequestCommentAttachment: __expectBoolean(output.CrawlPullRequestCommentAttachment),
    CrawlRepositoryDocuments: __expectBoolean(output.CrawlRepositoryDocuments),
  } as any;
};

/**
 * deserializeAws_json1_1GoogleDriveConfiguration
 */
const de_GoogleDriveConfiguration = (output: any, context: __SerdeContext): GoogleDriveConfiguration => {
  return {
    ExcludeMimeTypes:
      output.ExcludeMimeTypes != null ? de_ExcludeMimeTypesList(output.ExcludeMimeTypes, context) : undefined,
    ExcludeSharedDrives:
      output.ExcludeSharedDrives != null ? de_ExcludeSharedDrivesList(output.ExcludeSharedDrives, context) : undefined,
    ExcludeUserAccounts:
      output.ExcludeUserAccounts != null ? de_ExcludeUserAccountsList(output.ExcludeUserAccounts, context) : undefined,
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings != null ? de_DataSourceToIndexFieldMappingList(output.FieldMappings, context) : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
  } as any;
};

/**
 * deserializeAws_json1_1GroupOrderingIdSummaries
 */
const de_GroupOrderingIdSummaries = (output: any, context: __SerdeContext): GroupOrderingIdSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GroupOrderingIdSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GroupOrderingIdSummary
 */
const de_GroupOrderingIdSummary = (output: any, context: __SerdeContext): GroupOrderingIdSummary => {
  return {
    FailureReason: __expectString(output.FailureReason),
    LastUpdatedAt:
      output.LastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    OrderingId: __expectLong(output.OrderingId),
    ReceivedAt:
      output.ReceivedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReceivedAt))) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1GroupSummary
 */
const de_GroupSummary = (output: any, context: __SerdeContext): GroupSummary => {
  return {
    GroupId: __expectString(output.GroupId),
    OrderingId: __expectLong(output.OrderingId),
  } as any;
};

/**
 * deserializeAws_json1_1HierarchicalPrincipal
 */
const de_HierarchicalPrincipal = (output: any, context: __SerdeContext): HierarchicalPrincipal => {
  return {
    PrincipalList: output.PrincipalList != null ? de_PrincipalList(output.PrincipalList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1HierarchicalPrincipalList
 */
const de_HierarchicalPrincipalList = (output: any, context: __SerdeContext): HierarchicalPrincipal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HierarchicalPrincipal(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Highlight
 */
const de_Highlight = (output: any, context: __SerdeContext): Highlight => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    EndOffset: __expectInt32(output.EndOffset),
    TopAnswer: __expectBoolean(output.TopAnswer),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1HighlightList
 */
const de_HighlightList = (output: any, context: __SerdeContext): Highlight[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Highlight(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HookConfiguration
 */
const de_HookConfiguration = (output: any, context: __SerdeContext): HookConfiguration => {
  return {
    InvocationCondition:
      output.InvocationCondition != null
        ? de_DocumentAttributeCondition(output.InvocationCondition, context)
        : undefined,
    LambdaArn: __expectString(output.LambdaArn),
    S3Bucket: __expectString(output.S3Bucket),
  } as any;
};

/**
 * deserializeAws_json1_1IndexConfigurationSummary
 */
const de_IndexConfigurationSummary = (output: any, context: __SerdeContext): IndexConfigurationSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Edition: __expectString(output.Edition),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1IndexConfigurationSummaryList
 */
const de_IndexConfigurationSummaryList = (output: any, context: __SerdeContext): IndexConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IndexConfigurationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1IndexStatistics
 */
const de_IndexStatistics = (output: any, context: __SerdeContext): IndexStatistics => {
  return {
    FaqStatistics: output.FaqStatistics != null ? de_FaqStatistics(output.FaqStatistics, context) : undefined,
    TextDocumentStatistics:
      output.TextDocumentStatistics != null
        ? de_TextDocumentStatistics(output.TextDocumentStatistics, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InlineCustomDocumentEnrichmentConfiguration
 */
const de_InlineCustomDocumentEnrichmentConfiguration = (
  output: any,
  context: __SerdeContext
): InlineCustomDocumentEnrichmentConfiguration => {
  return {
    Condition: output.Condition != null ? de_DocumentAttributeCondition(output.Condition, context) : undefined,
    DocumentContentDeletion: __expectBoolean(output.DocumentContentDeletion),
    Target: output.Target != null ? de_DocumentAttributeTarget(output.Target, context) : undefined,
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_InlineCustomDocumentEnrichmentConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRequestException
 */
const de_InvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1IssueSubEntityFilter
 */
const de_IssueSubEntityFilter = (output: any, context: __SerdeContext): (IssueSubEntity | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1IssueType
 */
const de_IssueType = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1JiraConfiguration
 */
const de_JiraConfiguration = (output: any, context: __SerdeContext): JiraConfiguration => {
  return {
    AttachmentFieldMappings:
      output.AttachmentFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.AttachmentFieldMappings, context)
        : undefined,
    CommentFieldMappings:
      output.CommentFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.CommentFieldMappings, context)
        : undefined,
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    IssueFieldMappings:
      output.IssueFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.IssueFieldMappings, context)
        : undefined,
    IssueSubEntityFilter:
      output.IssueSubEntityFilter != null ? de_IssueSubEntityFilter(output.IssueSubEntityFilter, context) : undefined,
    IssueType: output.IssueType != null ? de_IssueType(output.IssueType, context) : undefined,
    JiraAccountUrl: __expectString(output.JiraAccountUrl),
    Project: output.Project != null ? de_Project(output.Project, context) : undefined,
    ProjectFieldMappings:
      output.ProjectFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.ProjectFieldMappings, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    Status: output.Status != null ? de_JiraStatus(output.Status, context) : undefined,
    UseChangeLog: __expectBoolean(output.UseChangeLog),
    VpcConfiguration:
      output.VpcConfiguration != null ? de_DataSourceVpcConfiguration(output.VpcConfiguration, context) : undefined,
    WorkLogFieldMappings:
      output.WorkLogFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.WorkLogFieldMappings, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1JiraStatus
 */
const de_JiraStatus = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1JsonTokenTypeConfiguration
 */
const de_JsonTokenTypeConfiguration = (output: any, context: __SerdeContext): JsonTokenTypeConfiguration => {
  return {
    GroupAttributeField: __expectString(output.GroupAttributeField),
    UserNameAttributeField: __expectString(output.UserNameAttributeField),
  } as any;
};

/**
 * deserializeAws_json1_1JwtTokenTypeConfiguration
 */
const de_JwtTokenTypeConfiguration = (output: any, context: __SerdeContext): JwtTokenTypeConfiguration => {
  return {
    ClaimRegex: __expectString(output.ClaimRegex),
    GroupAttributeField: __expectString(output.GroupAttributeField),
    Issuer: __expectString(output.Issuer),
    KeyLocation: __expectString(output.KeyLocation),
    SecretManagerArn: __expectString(output.SecretManagerArn),
    URL: __expectString(output.URL),
    UserNameAttributeField: __expectString(output.UserNameAttributeField),
  } as any;
};

/**
 * deserializeAws_json1_1ListAccessControlConfigurationsResponse
 */
const de_ListAccessControlConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListAccessControlConfigurationsResponse => {
  return {
    AccessControlConfigurations:
      output.AccessControlConfigurations != null
        ? de_AccessControlConfigurationSummaryList(output.AccessControlConfigurations, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDataSourcesResponse
 */
const de_ListDataSourcesResponse = (output: any, context: __SerdeContext): ListDataSourcesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SummaryItems: output.SummaryItems != null ? de_DataSourceSummaryList(output.SummaryItems, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListDataSourceSyncJobsResponse
 */
const de_ListDataSourceSyncJobsResponse = (output: any, context: __SerdeContext): ListDataSourceSyncJobsResponse => {
  return {
    History: output.History != null ? de_DataSourceSyncJobHistoryList(output.History, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListEntityPersonasResponse
 */
const de_ListEntityPersonasResponse = (output: any, context: __SerdeContext): ListEntityPersonasResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SummaryItems: output.SummaryItems != null ? de_PersonasSummaryList(output.SummaryItems, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListExperienceEntitiesResponse
 */
const de_ListExperienceEntitiesResponse = (output: any, context: __SerdeContext): ListExperienceEntitiesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SummaryItems:
      output.SummaryItems != null ? de_ExperienceEntitiesSummaryList(output.SummaryItems, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListExperiencesResponse
 */
const de_ListExperiencesResponse = (output: any, context: __SerdeContext): ListExperiencesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SummaryItems: output.SummaryItems != null ? de_ExperiencesSummaryList(output.SummaryItems, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListFaqsResponse
 */
const de_ListFaqsResponse = (output: any, context: __SerdeContext): ListFaqsResponse => {
  return {
    FaqSummaryItems: output.FaqSummaryItems != null ? de_FaqSummaryItems(output.FaqSummaryItems, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListFeaturedResultsSetsResponse
 */
const de_ListFeaturedResultsSetsResponse = (output: any, context: __SerdeContext): ListFeaturedResultsSetsResponse => {
  return {
    FeaturedResultsSetSummaryItems:
      output.FeaturedResultsSetSummaryItems != null
        ? de_FeaturedResultsSetSummaryItems(output.FeaturedResultsSetSummaryItems, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListGroupsOlderThanOrderingIdResponse
 */
const de_ListGroupsOlderThanOrderingIdResponse = (
  output: any,
  context: __SerdeContext
): ListGroupsOlderThanOrderingIdResponse => {
  return {
    GroupsSummaries:
      output.GroupsSummaries != null ? de_ListOfGroupSummaries(output.GroupsSummaries, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListIndicesResponse
 */
const de_ListIndicesResponse = (output: any, context: __SerdeContext): ListIndicesResponse => {
  return {
    IndexConfigurationSummaryItems:
      output.IndexConfigurationSummaryItems != null
        ? de_IndexConfigurationSummaryList(output.IndexConfigurationSummaryItems, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListOfGroupSummaries
 */
const de_ListOfGroupSummaries = (output: any, context: __SerdeContext): GroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListQuerySuggestionsBlockListsResponse
 */
const de_ListQuerySuggestionsBlockListsResponse = (
  output: any,
  context: __SerdeContext
): ListQuerySuggestionsBlockListsResponse => {
  return {
    BlockListSummaryItems:
      output.BlockListSummaryItems != null
        ? de_QuerySuggestionsBlockListSummaryItems(output.BlockListSummaryItems, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListThesauriResponse
 */
const de_ListThesauriResponse = (output: any, context: __SerdeContext): ListThesauriResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ThesaurusSummaryItems:
      output.ThesaurusSummaryItems != null
        ? de_ThesaurusSummaryItems(output.ThesaurusSummaryItems, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OneDriveConfiguration
 */
const de_OneDriveConfiguration = (output: any, context: __SerdeContext): OneDriveConfiguration => {
  return {
    DisableLocalGroups: __expectBoolean(output.DisableLocalGroups),
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings != null ? de_DataSourceToIndexFieldMappingList(output.FieldMappings, context) : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    OneDriveUsers: output.OneDriveUsers != null ? de_OneDriveUsers(output.OneDriveUsers, context) : undefined,
    SecretArn: __expectString(output.SecretArn),
    TenantDomain: __expectString(output.TenantDomain),
  } as any;
};

/**
 * deserializeAws_json1_1OneDriveUserList
 */
const de_OneDriveUserList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OneDriveUsers
 */
const de_OneDriveUsers = (output: any, context: __SerdeContext): OneDriveUsers => {
  return {
    OneDriveUserList:
      output.OneDriveUserList != null ? de_OneDriveUserList(output.OneDriveUserList, context) : undefined,
    OneDriveUserS3Path: output.OneDriveUserS3Path != null ? de_S3Path(output.OneDriveUserS3Path, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OnPremiseConfiguration
 */
const de_OnPremiseConfiguration = (output: any, context: __SerdeContext): OnPremiseConfiguration => {
  return {
    HostUrl: __expectString(output.HostUrl),
    OrganizationName: __expectString(output.OrganizationName),
    SslCertificateS3Path:
      output.SslCertificateS3Path != null ? de_S3Path(output.SslCertificateS3Path, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PersonasSummary
 */
const de_PersonasSummary = (output: any, context: __SerdeContext): PersonasSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    EntityId: __expectString(output.EntityId),
    Persona: __expectString(output.Persona),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PersonasSummaryList
 */
const de_PersonasSummaryList = (output: any, context: __SerdeContext): PersonasSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PersonasSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Principal
 */
const de_Principal = (output: any, context: __SerdeContext): Principal => {
  return {
    Access: __expectString(output.Access),
    DataSourceId: __expectString(output.DataSourceId),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1PrincipalList
 */
const de_PrincipalList = (output: any, context: __SerdeContext): Principal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Principal(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PrivateChannelFilter
 */
const de_PrivateChannelFilter = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Project
 */
const de_Project = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProxyConfiguration
 */
const de_ProxyConfiguration = (output: any, context: __SerdeContext): ProxyConfiguration => {
  return {
    Credentials: __expectString(output.Credentials),
    Host: __expectString(output.Host),
    Port: __expectInt32(output.Port),
  } as any;
};

/**
 * deserializeAws_json1_1PublicChannelFilter
 */
const de_PublicChannelFilter = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1QueryResult
 */
const de_QueryResult = (output: any, context: __SerdeContext): QueryResult => {
  return {
    FacetResults: output.FacetResults != null ? de_FacetResultList(output.FacetResults, context) : undefined,
    FeaturedResultsItems:
      output.FeaturedResultsItems != null
        ? de_FeaturedResultsItemList(output.FeaturedResultsItems, context)
        : undefined,
    QueryId: __expectString(output.QueryId),
    ResultItems: output.ResultItems != null ? de_QueryResultItemList(output.ResultItems, context) : undefined,
    SpellCorrectedQueries:
      output.SpellCorrectedQueries != null
        ? de_SpellCorrectedQueryList(output.SpellCorrectedQueries, context)
        : undefined,
    TotalNumberOfResults: __expectInt32(output.TotalNumberOfResults),
    Warnings: output.Warnings != null ? de_WarningList(output.Warnings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1QueryResultItem
 */
const de_QueryResultItem = (output: any, context: __SerdeContext): QueryResultItem => {
  return {
    AdditionalAttributes:
      output.AdditionalAttributes != null
        ? de_AdditionalResultAttributeList(output.AdditionalAttributes, context)
        : undefined,
    DocumentAttributes:
      output.DocumentAttributes != null ? de_DocumentAttributeList(output.DocumentAttributes, context) : undefined,
    DocumentExcerpt:
      output.DocumentExcerpt != null ? de_TextWithHighlights(output.DocumentExcerpt, context) : undefined,
    DocumentId: __expectString(output.DocumentId),
    DocumentTitle: output.DocumentTitle != null ? de_TextWithHighlights(output.DocumentTitle, context) : undefined,
    DocumentURI: __expectString(output.DocumentURI),
    FeedbackToken: __expectString(output.FeedbackToken),
    Format: __expectString(output.Format),
    Id: __expectString(output.Id),
    ScoreAttributes: output.ScoreAttributes != null ? de_ScoreAttributes(output.ScoreAttributes, context) : undefined,
    TableExcerpt: output.TableExcerpt != null ? de_TableExcerpt(output.TableExcerpt, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1QueryResultItemList
 */
const de_QueryResultItemList = (output: any, context: __SerdeContext): QueryResultItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Id: __expectString(output.Id),
    ItemCount: __expectInt32(output.ItemCount),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_QuerySuggestionsBlockListSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1QueryTextList
 */
const de_QueryTextList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1QuipConfiguration
 */
const de_QuipConfiguration = (output: any, context: __SerdeContext): QuipConfiguration => {
  return {
    AttachmentFieldMappings:
      output.AttachmentFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.AttachmentFieldMappings, context)
        : undefined,
    CrawlAttachments: __expectBoolean(output.CrawlAttachments),
    CrawlChatRooms: __expectBoolean(output.CrawlChatRooms),
    CrawlFileComments: __expectBoolean(output.CrawlFileComments),
    Domain: __expectString(output.Domain),
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    FolderIds: output.FolderIds != null ? de_FolderIdList(output.FolderIds, context) : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    MessageFieldMappings:
      output.MessageFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.MessageFieldMappings, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    ThreadFieldMappings:
      output.ThreadFieldMappings != null
        ? de_DataSourceToIndexFieldMappingList(output.ThreadFieldMappings, context)
        : undefined,
    VpcConfiguration:
      output.VpcConfiguration != null ? de_DataSourceVpcConfiguration(output.VpcConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Relevance
 */
const de_Relevance = (output: any, context: __SerdeContext): Relevance => {
  return {
    Duration: __expectString(output.Duration),
    Freshness: __expectBoolean(output.Freshness),
    Importance: __expectInt32(output.Importance),
    RankOrder: __expectString(output.RankOrder),
    ValueImportanceMap:
      output.ValueImportanceMap != null ? de_ValueImportanceMap(output.ValueImportanceMap, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryNames
 */
const de_RepositoryNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistException
 */
const de_ResourceAlreadyExistException = (output: any, context: __SerdeContext): ResourceAlreadyExistException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceInUseException
 */
const de_ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceUnavailableException
 */
const de_ResourceUnavailableException = (output: any, context: __SerdeContext): ResourceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1S3DataSourceConfiguration
 */
const de_S3DataSourceConfiguration = (output: any, context: __SerdeContext): S3DataSourceConfiguration => {
  return {
    AccessControlListConfiguration:
      output.AccessControlListConfiguration != null
        ? de_AccessControlListConfiguration(output.AccessControlListConfiguration, context)
        : undefined,
    BucketName: __expectString(output.BucketName),
    DocumentsMetadataConfiguration:
      output.DocumentsMetadataConfiguration != null
        ? de_DocumentsMetadataConfiguration(output.DocumentsMetadataConfiguration, context)
        : undefined,
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    InclusionPrefixes:
      output.InclusionPrefixes != null
        ? de_DataSourceInclusionsExclusionsStrings(output.InclusionPrefixes, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1S3Path
 */
const de_S3Path = (output: any, context: __SerdeContext): S3Path => {
  return {
    Bucket: __expectString(output.Bucket),
    Key: __expectString(output.Key),
  } as any;
};

/**
 * deserializeAws_json1_1SaaSConfiguration
 */
const de_SaaSConfiguration = (output: any, context: __SerdeContext): SaaSConfiguration => {
  return {
    HostUrl: __expectString(output.HostUrl),
    OrganizationName: __expectString(output.OrganizationName),
  } as any;
};

/**
 * deserializeAws_json1_1SalesforceChatterFeedConfiguration
 */
const de_SalesforceChatterFeedConfiguration = (
  output: any,
  context: __SerdeContext
): SalesforceChatterFeedConfiguration => {
  return {
    DocumentDataFieldName: __expectString(output.DocumentDataFieldName),
    DocumentTitleFieldName: __expectString(output.DocumentTitleFieldName),
    FieldMappings:
      output.FieldMappings != null ? de_DataSourceToIndexFieldMappingList(output.FieldMappings, context) : undefined,
    IncludeFilterTypes:
      output.IncludeFilterTypes != null
        ? de_SalesforceChatterFeedIncludeFilterTypes(output.IncludeFilterTypes, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SalesforceChatterFeedIncludeFilterTypes
 */
const de_SalesforceChatterFeedIncludeFilterTypes = (
  output: any,
  context: __SerdeContext
): (SalesforceChatterFeedIncludeFilterType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SalesforceConfiguration
 */
const de_SalesforceConfiguration = (output: any, context: __SerdeContext): SalesforceConfiguration => {
  return {
    ChatterFeedConfiguration:
      output.ChatterFeedConfiguration != null
        ? de_SalesforceChatterFeedConfiguration(output.ChatterFeedConfiguration, context)
        : undefined,
    CrawlAttachments: __expectBoolean(output.CrawlAttachments),
    ExcludeAttachmentFilePatterns:
      output.ExcludeAttachmentFilePatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.ExcludeAttachmentFilePatterns, context)
        : undefined,
    IncludeAttachmentFilePatterns:
      output.IncludeAttachmentFilePatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.IncludeAttachmentFilePatterns, context)
        : undefined,
    KnowledgeArticleConfiguration:
      output.KnowledgeArticleConfiguration != null
        ? de_SalesforceKnowledgeArticleConfiguration(output.KnowledgeArticleConfiguration, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    ServerUrl: __expectString(output.ServerUrl),
    StandardObjectAttachmentConfiguration:
      output.StandardObjectAttachmentConfiguration != null
        ? de_SalesforceStandardObjectAttachmentConfiguration(output.StandardObjectAttachmentConfiguration, context)
        : undefined,
    StandardObjectConfigurations:
      output.StandardObjectConfigurations != null
        ? de_SalesforceStandardObjectConfigurationList(output.StandardObjectConfigurations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfiguration
 */
const de_SalesforceCustomKnowledgeArticleTypeConfiguration = (
  output: any,
  context: __SerdeContext
): SalesforceCustomKnowledgeArticleTypeConfiguration => {
  return {
    DocumentDataFieldName: __expectString(output.DocumentDataFieldName),
    DocumentTitleFieldName: __expectString(output.DocumentTitleFieldName),
    FieldMappings:
      output.FieldMappings != null ? de_DataSourceToIndexFieldMappingList(output.FieldMappings, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfigurationList
 */
const de_SalesforceCustomKnowledgeArticleTypeConfigurationList = (
  output: any,
  context: __SerdeContext
): SalesforceCustomKnowledgeArticleTypeConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SalesforceCustomKnowledgeArticleTypeConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SalesforceKnowledgeArticleConfiguration
 */
const de_SalesforceKnowledgeArticleConfiguration = (
  output: any,
  context: __SerdeContext
): SalesforceKnowledgeArticleConfiguration => {
  return {
    CustomKnowledgeArticleTypeConfigurations:
      output.CustomKnowledgeArticleTypeConfigurations != null
        ? de_SalesforceCustomKnowledgeArticleTypeConfigurationList(
            output.CustomKnowledgeArticleTypeConfigurations,
            context
          )
        : undefined,
    IncludedStates:
      output.IncludedStates != null
        ? de_SalesforceKnowledgeArticleStateList(output.IncludedStates, context)
        : undefined,
    StandardKnowledgeArticleTypeConfiguration:
      output.StandardKnowledgeArticleTypeConfiguration != null
        ? de_SalesforceStandardKnowledgeArticleTypeConfiguration(
            output.StandardKnowledgeArticleTypeConfiguration,
            context
          )
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SalesforceKnowledgeArticleStateList
 */
const de_SalesforceKnowledgeArticleStateList = (
  output: any,
  context: __SerdeContext
): (SalesforceKnowledgeArticleState | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SalesforceStandardKnowledgeArticleTypeConfiguration
 */
const de_SalesforceStandardKnowledgeArticleTypeConfiguration = (
  output: any,
  context: __SerdeContext
): SalesforceStandardKnowledgeArticleTypeConfiguration => {
  return {
    DocumentDataFieldName: __expectString(output.DocumentDataFieldName),
    DocumentTitleFieldName: __expectString(output.DocumentTitleFieldName),
    FieldMappings:
      output.FieldMappings != null ? de_DataSourceToIndexFieldMappingList(output.FieldMappings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SalesforceStandardObjectAttachmentConfiguration
 */
const de_SalesforceStandardObjectAttachmentConfiguration = (
  output: any,
  context: __SerdeContext
): SalesforceStandardObjectAttachmentConfiguration => {
  return {
    DocumentTitleFieldName: __expectString(output.DocumentTitleFieldName),
    FieldMappings:
      output.FieldMappings != null ? de_DataSourceToIndexFieldMappingList(output.FieldMappings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SalesforceStandardObjectConfiguration
 */
const de_SalesforceStandardObjectConfiguration = (
  output: any,
  context: __SerdeContext
): SalesforceStandardObjectConfiguration => {
  return {
    DocumentDataFieldName: __expectString(output.DocumentDataFieldName),
    DocumentTitleFieldName: __expectString(output.DocumentTitleFieldName),
    FieldMappings:
      output.FieldMappings != null ? de_DataSourceToIndexFieldMappingList(output.FieldMappings, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1SalesforceStandardObjectConfigurationList
 */
const de_SalesforceStandardObjectConfigurationList = (
  output: any,
  context: __SerdeContext
): SalesforceStandardObjectConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SalesforceStandardObjectConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ScoreAttributes
 */
const de_ScoreAttributes = (output: any, context: __SerdeContext): ScoreAttributes => {
  return {
    ScoreConfidence: __expectString(output.ScoreConfidence),
  } as any;
};

/**
 * deserializeAws_json1_1Search
 */
const de_Search = (output: any, context: __SerdeContext): Search => {
  return {
    Displayable: __expectBoolean(output.Displayable),
    Facetable: __expectBoolean(output.Facetable),
    Searchable: __expectBoolean(output.Searchable),
    Sortable: __expectBoolean(output.Sortable),
  } as any;
};

/**
 * deserializeAws_json1_1SecurityGroupIdList
 */
const de_SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SeedUrlConfiguration
 */
const de_SeedUrlConfiguration = (output: any, context: __SerdeContext): SeedUrlConfiguration => {
  return {
    SeedUrls: output.SeedUrls != null ? de_SeedUrlList(output.SeedUrls, context) : undefined,
    WebCrawlerMode: __expectString(output.WebCrawlerMode),
  } as any;
};

/**
 * deserializeAws_json1_1SeedUrlList
 */
const de_SeedUrlList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServerSideEncryptionConfiguration
 */
const de_ServerSideEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionConfiguration => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceNowConfiguration
 */
const de_ServiceNowConfiguration = (output: any, context: __SerdeContext): ServiceNowConfiguration => {
  return {
    AuthenticationType: __expectString(output.AuthenticationType),
    HostUrl: __expectString(output.HostUrl),
    KnowledgeArticleConfiguration:
      output.KnowledgeArticleConfiguration != null
        ? de_ServiceNowKnowledgeArticleConfiguration(output.KnowledgeArticleConfiguration, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    ServiceCatalogConfiguration:
      output.ServiceCatalogConfiguration != null
        ? de_ServiceNowServiceCatalogConfiguration(output.ServiceCatalogConfiguration, context)
        : undefined,
    ServiceNowBuildVersion: __expectString(output.ServiceNowBuildVersion),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceNowKnowledgeArticleConfiguration
 */
const de_ServiceNowKnowledgeArticleConfiguration = (
  output: any,
  context: __SerdeContext
): ServiceNowKnowledgeArticleConfiguration => {
  return {
    CrawlAttachments: __expectBoolean(output.CrawlAttachments),
    DocumentDataFieldName: __expectString(output.DocumentDataFieldName),
    DocumentTitleFieldName: __expectString(output.DocumentTitleFieldName),
    ExcludeAttachmentFilePatterns:
      output.ExcludeAttachmentFilePatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.ExcludeAttachmentFilePatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings != null ? de_DataSourceToIndexFieldMappingList(output.FieldMappings, context) : undefined,
    FilterQuery: __expectString(output.FilterQuery),
    IncludeAttachmentFilePatterns:
      output.IncludeAttachmentFilePatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.IncludeAttachmentFilePatterns, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ServiceNowServiceCatalogConfiguration
 */
const de_ServiceNowServiceCatalogConfiguration = (
  output: any,
  context: __SerdeContext
): ServiceNowServiceCatalogConfiguration => {
  return {
    CrawlAttachments: __expectBoolean(output.CrawlAttachments),
    DocumentDataFieldName: __expectString(output.DocumentDataFieldName),
    DocumentTitleFieldName: __expectString(output.DocumentTitleFieldName),
    ExcludeAttachmentFilePatterns:
      output.ExcludeAttachmentFilePatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.ExcludeAttachmentFilePatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings != null ? de_DataSourceToIndexFieldMappingList(output.FieldMappings, context) : undefined,
    IncludeAttachmentFilePatterns:
      output.IncludeAttachmentFilePatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.IncludeAttachmentFilePatterns, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ServiceQuotaExceededException
 */
const de_ServiceQuotaExceededException = (output: any, context: __SerdeContext): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1SharePointConfiguration
 */
const de_SharePointConfiguration = (output: any, context: __SerdeContext): SharePointConfiguration => {
  return {
    AuthenticationType: __expectString(output.AuthenticationType),
    CrawlAttachments: __expectBoolean(output.CrawlAttachments),
    DisableLocalGroups: __expectBoolean(output.DisableLocalGroups),
    DocumentTitleFieldName: __expectString(output.DocumentTitleFieldName),
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings != null ? de_DataSourceToIndexFieldMappingList(output.FieldMappings, context) : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    ProxyConfiguration:
      output.ProxyConfiguration != null ? de_ProxyConfiguration(output.ProxyConfiguration, context) : undefined,
    SecretArn: __expectString(output.SecretArn),
    SharePointVersion: __expectString(output.SharePointVersion),
    SslCertificateS3Path:
      output.SslCertificateS3Path != null ? de_S3Path(output.SslCertificateS3Path, context) : undefined,
    Urls: output.Urls != null ? de_SharePointUrlList(output.Urls, context) : undefined,
    UseChangeLog: __expectBoolean(output.UseChangeLog),
    VpcConfiguration:
      output.VpcConfiguration != null ? de_DataSourceVpcConfiguration(output.VpcConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SharePointUrlList
 */
const de_SharePointUrlList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SiteMapsConfiguration
 */
const de_SiteMapsConfiguration = (output: any, context: __SerdeContext): SiteMapsConfiguration => {
  return {
    SiteMaps: output.SiteMaps != null ? de_SiteMapsList(output.SiteMaps, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SiteMapsList
 */
const de_SiteMapsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SlackConfiguration
 */
const de_SlackConfiguration = (output: any, context: __SerdeContext): SlackConfiguration => {
  return {
    CrawlBotMessage: __expectBoolean(output.CrawlBotMessage),
    ExcludeArchived: __expectBoolean(output.ExcludeArchived),
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings != null ? de_DataSourceToIndexFieldMappingList(output.FieldMappings, context) : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    LookBackPeriod: __expectInt32(output.LookBackPeriod),
    PrivateChannelFilter:
      output.PrivateChannelFilter != null ? de_PrivateChannelFilter(output.PrivateChannelFilter, context) : undefined,
    PublicChannelFilter:
      output.PublicChannelFilter != null ? de_PublicChannelFilter(output.PublicChannelFilter, context) : undefined,
    SecretArn: __expectString(output.SecretArn),
    SinceCrawlDate: __expectString(output.SinceCrawlDate),
    SlackEntityList: output.SlackEntityList != null ? de_SlackEntityList(output.SlackEntityList, context) : undefined,
    TeamId: __expectString(output.TeamId),
    UseChangeLog: __expectBoolean(output.UseChangeLog),
    VpcConfiguration:
      output.VpcConfiguration != null ? de_DataSourceVpcConfiguration(output.VpcConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SlackEntityList
 */
const de_SlackEntityList = (output: any, context: __SerdeContext): (SlackEntity | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SnapshotsDataHeaderFields
 */
const de_SnapshotsDataHeaderFields = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SnapshotsDataRecord
 */
const de_SnapshotsDataRecord = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SnapshotsDataRecords
 */
const de_SnapshotsDataRecords = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SnapshotsDataRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SpellCorrectedQuery
 */
const de_SpellCorrectedQuery = (output: any, context: __SerdeContext): SpellCorrectedQuery => {
  return {
    Corrections: output.Corrections != null ? de_CorrectionList(output.Corrections, context) : undefined,
    SuggestedQueryText: __expectString(output.SuggestedQueryText),
  } as any;
};

/**
 * deserializeAws_json1_1SpellCorrectedQueryList
 */
const de_SpellCorrectedQueryList = (output: any, context: __SerdeContext): SpellCorrectedQuery[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SpellCorrectedQuery(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SqlConfiguration
 */
const de_SqlConfiguration = (output: any, context: __SerdeContext): SqlConfiguration => {
  return {
    QueryIdentifiersEnclosingOption: __expectString(output.QueryIdentifiersEnclosingOption),
  } as any;
};

/**
 * deserializeAws_json1_1StartDataSourceSyncJobResponse
 */
const de_StartDataSourceSyncJobResponse = (output: any, context: __SerdeContext): StartDataSourceSyncJobResponse => {
  return {
    ExecutionId: __expectString(output.ExecutionId),
  } as any;
};

/**
 * deserializeAws_json1_1Status
 */
const de_Status = (output: any, context: __SerdeContext): Status => {
  return {
    DocumentId: __expectString(output.DocumentId),
    DocumentStatus: __expectString(output.DocumentStatus),
    FailureCode: __expectString(output.FailureCode),
    FailureReason: __expectString(output.FailureReason),
  } as any;
};

/**
 * deserializeAws_json1_1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SubnetIdList
 */
const de_SubnetIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Suggestion
 */
const de_Suggestion = (output: any, context: __SerdeContext): Suggestion => {
  return {
    Id: __expectString(output.Id),
    Value: output.Value != null ? de_SuggestionValue(output.Value, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SuggestionHighlight
 */
const de_SuggestionHighlight = (output: any, context: __SerdeContext): SuggestionHighlight => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    EndOffset: __expectInt32(output.EndOffset),
  } as any;
};

/**
 * deserializeAws_json1_1SuggestionHighlightList
 */
const de_SuggestionHighlightList = (output: any, context: __SerdeContext): SuggestionHighlight[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SuggestionHighlight(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SuggestionList
 */
const de_SuggestionList = (output: any, context: __SerdeContext): Suggestion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Suggestion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SuggestionTextWithHighlights
 */
const de_SuggestionTextWithHighlights = (output: any, context: __SerdeContext): SuggestionTextWithHighlights => {
  return {
    Highlights: output.Highlights != null ? de_SuggestionHighlightList(output.Highlights, context) : undefined,
    Text: __expectString(output.Text),
  } as any;
};

/**
 * deserializeAws_json1_1SuggestionValue
 */
const de_SuggestionValue = (output: any, context: __SerdeContext): SuggestionValue => {
  return {
    Text: output.Text != null ? de_SuggestionTextWithHighlights(output.Text, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TableCell
 */
const de_TableCell = (output: any, context: __SerdeContext): TableCell => {
  return {
    Header: __expectBoolean(output.Header),
    Highlighted: __expectBoolean(output.Highlighted),
    TopAnswer: __expectBoolean(output.TopAnswer),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TableCellList
 */
const de_TableCellList = (output: any, context: __SerdeContext): TableCell[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TableCell(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TableExcerpt
 */
const de_TableExcerpt = (output: any, context: __SerdeContext): TableExcerpt => {
  return {
    Rows: output.Rows != null ? de_TableRowList(output.Rows, context) : undefined,
    TotalNumberOfRows: __expectInt32(output.TotalNumberOfRows),
  } as any;
};

/**
 * deserializeAws_json1_1TableRow
 */
const de_TableRow = (output: any, context: __SerdeContext): TableRow => {
  return {
    Cells: output.Cells != null ? de_TableCellList(output.Cells, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TableRowList
 */
const de_TableRowList = (output: any, context: __SerdeContext): TableRow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TableRow(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

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
  return {
    Template: output.Template != null ? de_Template(output.Template, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TextDocumentStatistics
 */
const de_TextDocumentStatistics = (output: any, context: __SerdeContext): TextDocumentStatistics => {
  return {
    IndexedTextBytes: __expectLong(output.IndexedTextBytes),
    IndexedTextDocumentsCount: __expectInt32(output.IndexedTextDocumentsCount),
  } as any;
};

/**
 * deserializeAws_json1_1TextWithHighlights
 */
const de_TextWithHighlights = (output: any, context: __SerdeContext): TextWithHighlights => {
  return {
    Highlights: output.Highlights != null ? de_HighlightList(output.Highlights, context) : undefined,
    Text: __expectString(output.Text),
  } as any;
};

/**
 * deserializeAws_json1_1ThesaurusSummary
 */
const de_ThesaurusSummary = (output: any, context: __SerdeContext): ThesaurusSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ThesaurusSummaryItems
 */
const de_ThesaurusSummaryItems = (output: any, context: __SerdeContext): ThesaurusSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ThesaurusSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TimeRange
 */
const de_TimeRange = (output: any, context: __SerdeContext): TimeRange => {
  return {
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateAccessControlConfigurationResponse
 */
const de_UpdateAccessControlConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateAccessControlConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateFeaturedResultsSetResponse
 */
const de_UpdateFeaturedResultsSetResponse = (
  output: any,
  context: __SerdeContext
): UpdateFeaturedResultsSetResponse => {
  return {
    FeaturedResultsSet:
      output.FeaturedResultsSet != null ? de_FeaturedResultsSet(output.FeaturedResultsSet, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Urls
 */
const de_Urls = (output: any, context: __SerdeContext): Urls => {
  return {
    SeedUrlConfiguration:
      output.SeedUrlConfiguration != null ? de_SeedUrlConfiguration(output.SeedUrlConfiguration, context) : undefined,
    SiteMapsConfiguration:
      output.SiteMapsConfiguration != null
        ? de_SiteMapsConfiguration(output.SiteMapsConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UserGroupResolutionConfiguration
 */
const de_UserGroupResolutionConfiguration = (
  output: any,
  context: __SerdeContext
): UserGroupResolutionConfiguration => {
  return {
    UserGroupResolutionMode: __expectString(output.UserGroupResolutionMode),
  } as any;
};

/**
 * deserializeAws_json1_1UserIdentityConfiguration
 */
const de_UserIdentityConfiguration = (output: any, context: __SerdeContext): UserIdentityConfiguration => {
  return {
    IdentityAttributeName: __expectString(output.IdentityAttributeName),
  } as any;
};

/**
 * deserializeAws_json1_1UserTokenConfiguration
 */
const de_UserTokenConfiguration = (output: any, context: __SerdeContext): UserTokenConfiguration => {
  return {
    JsonTokenTypeConfiguration:
      output.JsonTokenTypeConfiguration != null
        ? de_JsonTokenTypeConfiguration(output.JsonTokenTypeConfiguration, context)
        : undefined,
    JwtTokenTypeConfiguration:
      output.JwtTokenTypeConfiguration != null
        ? de_JwtTokenTypeConfiguration(output.JwtTokenTypeConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UserTokenConfigurationList
 */
const de_UserTokenConfigurationList = (output: any, context: __SerdeContext): UserTokenConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UserTokenConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ValueImportanceMap
 */
const de_ValueImportanceMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1Warning
 */
const de_Warning = (output: any, context: __SerdeContext): Warning => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1WarningList
 */
const de_WarningList = (output: any, context: __SerdeContext): Warning[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Warning(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WebCrawlerConfiguration
 */
const de_WebCrawlerConfiguration = (output: any, context: __SerdeContext): WebCrawlerConfiguration => {
  return {
    AuthenticationConfiguration:
      output.AuthenticationConfiguration != null
        ? de_AuthenticationConfiguration(output.AuthenticationConfiguration, context)
        : undefined,
    CrawlDepth: __expectInt32(output.CrawlDepth),
    MaxContentSizePerPageInMegaBytes: __limitedParseFloat32(output.MaxContentSizePerPageInMegaBytes),
    MaxLinksPerPage: __expectInt32(output.MaxLinksPerPage),
    MaxUrlsPerMinuteCrawlRate: __expectInt32(output.MaxUrlsPerMinuteCrawlRate),
    ProxyConfiguration:
      output.ProxyConfiguration != null ? de_ProxyConfiguration(output.ProxyConfiguration, context) : undefined,
    UrlExclusionPatterns:
      output.UrlExclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.UrlExclusionPatterns, context)
        : undefined,
    UrlInclusionPatterns:
      output.UrlInclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.UrlInclusionPatterns, context)
        : undefined,
    Urls: output.Urls != null ? de_Urls(output.Urls, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1WorkDocsConfiguration
 */
const de_WorkDocsConfiguration = (output: any, context: __SerdeContext): WorkDocsConfiguration => {
  return {
    CrawlComments: __expectBoolean(output.CrawlComments),
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings != null ? de_DataSourceToIndexFieldMappingList(output.FieldMappings, context) : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? de_DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    OrganizationId: __expectString(output.OrganizationId),
    UseChangeLog: __expectBoolean(output.UseChangeLog),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

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
