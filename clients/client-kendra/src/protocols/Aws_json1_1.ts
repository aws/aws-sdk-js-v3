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
  BatchGetDocumentStatusRequest,
  BatchGetDocumentStatusResponse,
  BatchGetDocumentStatusResponseError,
  BatchPutDocumentRequest,
  BatchPutDocumentResponse,
  BatchPutDocumentResponseFailedDocument,
  BoxConfiguration,
  CapacityUnitsConfiguration,
  ClearQuerySuggestionsRequest,
  ClickFeedback,
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
  Correction,
  CreateAccessControlConfigurationRequest,
  CreateAccessControlConfigurationResponse,
  CreateDataSourceRequest,
  CreateDataSourceResponse,
  CreateExperienceRequest,
  CreateExperienceResponse,
  CreateFaqRequest,
  CreateFaqResponse,
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
  RelevanceFeedback,
  ResourceAlreadyExistException,
  ResourceInUseException,
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
  StartDataSourceSyncJobRequest,
  StartDataSourceSyncJobResponse,
  Status,
  StopDataSourceSyncJobRequest,
  SubmitFeedbackRequest,
  Suggestion,
  SuggestionHighlight,
  SuggestionTextWithHighlights,
  SuggestionValue,
  TableCell,
  TableExcerpt,
  TableRow,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TemplateConfiguration,
  TextDocumentStatistics,
  TextWithHighlights,
  ThesaurusSummary,
  ThrottlingException,
  TimeRange,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateAccessControlConfigurationRequest,
  UpdateAccessControlConfigurationResponse,
  UpdateDataSourceRequest,
  UpdateExperienceRequest,
  UpdateIndexRequest,
  UpdateQuerySuggestionsBlockListRequest,
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
  DocumentAttributeValueCountPair,
  Facet,
  FacetResult,
  QueryRequest,
  QueryResult,
  UpdateQuerySuggestionsConfigRequest,
  UpdateThesaurusRequest,
} from "../models/models_1";

export const serializeAws_json1_1AssociateEntitiesToExperienceCommand = async (
  input: AssociateEntitiesToExperienceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.AssociateEntitiesToExperience",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateEntitiesToExperienceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociatePersonasToEntitiesCommand = async (
  input: AssociatePersonasToEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.AssociatePersonasToEntities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociatePersonasToEntitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchDeleteDocumentCommand = async (
  input: BatchDeleteDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.BatchDeleteDocument",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDeleteDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetDocumentStatusCommand = async (
  input: BatchGetDocumentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.BatchGetDocumentStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetDocumentStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchPutDocumentCommand = async (
  input: BatchPutDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.BatchPutDocument",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchPutDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ClearQuerySuggestionsCommand = async (
  input: ClearQuerySuggestionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ClearQuerySuggestions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ClearQuerySuggestionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAccessControlConfigurationCommand = async (
  input: CreateAccessControlConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.CreateAccessControlConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAccessControlConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDataSourceCommand = async (
  input: CreateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.CreateDataSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDataSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateExperienceCommand = async (
  input: CreateExperienceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.CreateExperience",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateExperienceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateFaqCommand = async (
  input: CreateFaqCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.CreateFaq",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateFaqRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateIndexCommand = async (
  input: CreateIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.CreateIndex",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateIndexRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateQuerySuggestionsBlockListCommand = async (
  input: CreateQuerySuggestionsBlockListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.CreateQuerySuggestionsBlockList",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateQuerySuggestionsBlockListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateThesaurusCommand = async (
  input: CreateThesaurusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.CreateThesaurus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateThesaurusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAccessControlConfigurationCommand = async (
  input: DeleteAccessControlConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DeleteAccessControlConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAccessControlConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDataSourceCommand = async (
  input: DeleteDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DeleteDataSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDataSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteExperienceCommand = async (
  input: DeleteExperienceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DeleteExperience",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteExperienceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteFaqCommand = async (
  input: DeleteFaqCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DeleteFaq",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteFaqRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteIndexCommand = async (
  input: DeleteIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DeleteIndex",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteIndexRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePrincipalMappingCommand = async (
  input: DeletePrincipalMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DeletePrincipalMapping",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePrincipalMappingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteQuerySuggestionsBlockListCommand = async (
  input: DeleteQuerySuggestionsBlockListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DeleteQuerySuggestionsBlockList",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteQuerySuggestionsBlockListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteThesaurusCommand = async (
  input: DeleteThesaurusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DeleteThesaurus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteThesaurusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAccessControlConfigurationCommand = async (
  input: DescribeAccessControlConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DescribeAccessControlConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAccessControlConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDataSourceCommand = async (
  input: DescribeDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DescribeDataSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDataSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeExperienceCommand = async (
  input: DescribeExperienceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DescribeExperience",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeExperienceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFaqCommand = async (
  input: DescribeFaqCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DescribeFaq",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFaqRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeIndexCommand = async (
  input: DescribeIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DescribeIndex",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeIndexRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePrincipalMappingCommand = async (
  input: DescribePrincipalMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DescribePrincipalMapping",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePrincipalMappingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeQuerySuggestionsBlockListCommand = async (
  input: DescribeQuerySuggestionsBlockListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DescribeQuerySuggestionsBlockList",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeQuerySuggestionsBlockListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeQuerySuggestionsConfigCommand = async (
  input: DescribeQuerySuggestionsConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DescribeQuerySuggestionsConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeQuerySuggestionsConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeThesaurusCommand = async (
  input: DescribeThesaurusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DescribeThesaurus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeThesaurusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateEntitiesFromExperienceCommand = async (
  input: DisassociateEntitiesFromExperienceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DisassociateEntitiesFromExperience",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateEntitiesFromExperienceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociatePersonasFromEntitiesCommand = async (
  input: DisassociatePersonasFromEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.DisassociatePersonasFromEntities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociatePersonasFromEntitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetQuerySuggestionsCommand = async (
  input: GetQuerySuggestionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.GetQuerySuggestions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetQuerySuggestionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSnapshotsCommand = async (
  input: GetSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.GetSnapshots",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAccessControlConfigurationsCommand = async (
  input: ListAccessControlConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListAccessControlConfigurations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAccessControlConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDataSourcesCommand = async (
  input: ListDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListDataSources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDataSourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDataSourceSyncJobsCommand = async (
  input: ListDataSourceSyncJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListDataSourceSyncJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDataSourceSyncJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEntityPersonasCommand = async (
  input: ListEntityPersonasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListEntityPersonas",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEntityPersonasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListExperienceEntitiesCommand = async (
  input: ListExperienceEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListExperienceEntities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListExperienceEntitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListExperiencesCommand = async (
  input: ListExperiencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListExperiences",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListExperiencesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListFaqsCommand = async (
  input: ListFaqsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListFaqs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListFaqsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListGroupsOlderThanOrderingIdCommand = async (
  input: ListGroupsOlderThanOrderingIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListGroupsOlderThanOrderingId",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListGroupsOlderThanOrderingIdRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListIndicesCommand = async (
  input: ListIndicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListIndices",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListIndicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListQuerySuggestionsBlockListsCommand = async (
  input: ListQuerySuggestionsBlockListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListQuerySuggestionsBlockLists",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListQuerySuggestionsBlockListsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListThesauriCommand = async (
  input: ListThesauriCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.ListThesauri",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListThesauriRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutPrincipalMappingCommand = async (
  input: PutPrincipalMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.PutPrincipalMapping",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutPrincipalMappingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1QueryCommand = async (
  input: QueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.Query",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1QueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartDataSourceSyncJobCommand = async (
  input: StartDataSourceSyncJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.StartDataSourceSyncJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartDataSourceSyncJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopDataSourceSyncJobCommand = async (
  input: StopDataSourceSyncJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.StopDataSourceSyncJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopDataSourceSyncJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SubmitFeedbackCommand = async (
  input: SubmitFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.SubmitFeedback",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SubmitFeedbackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAccessControlConfigurationCommand = async (
  input: UpdateAccessControlConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.UpdateAccessControlConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAccessControlConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDataSourceCommand = async (
  input: UpdateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.UpdateDataSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDataSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateExperienceCommand = async (
  input: UpdateExperienceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.UpdateExperience",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateExperienceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateIndexCommand = async (
  input: UpdateIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.UpdateIndex",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateIndexRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateQuerySuggestionsBlockListCommand = async (
  input: UpdateQuerySuggestionsBlockListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.UpdateQuerySuggestionsBlockList",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateQuerySuggestionsBlockListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateQuerySuggestionsConfigCommand = async (
  input: UpdateQuerySuggestionsConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.UpdateQuerySuggestionsConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateQuerySuggestionsConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateThesaurusCommand = async (
  input: UpdateThesaurusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSKendraFrontendService.UpdateThesaurus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateThesaurusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateEntitiesToExperienceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEntitiesToExperienceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateEntitiesToExperienceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateEntitiesToExperienceResponse(data, context);
  const response: AssociateEntitiesToExperienceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateEntitiesToExperienceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistException":
    case "com.amazonaws.kendra#ResourceAlreadyExistException":
      throw await deserializeAws_json1_1ResourceAlreadyExistExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AssociatePersonasToEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePersonasToEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociatePersonasToEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociatePersonasToEntitiesResponse(data, context);
  const response: AssociatePersonasToEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociatePersonasToEntitiesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistException":
    case "com.amazonaws.kendra#ResourceAlreadyExistException":
      throw await deserializeAws_json1_1ResourceAlreadyExistExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchDeleteDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteDocumentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchDeleteDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDeleteDocumentResponse(data, context);
  const response: BatchDeleteDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchDeleteDocumentCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchGetDocumentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDocumentStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetDocumentStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetDocumentStatusResponse(data, context);
  const response: BatchGetDocumentStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetDocumentStatusCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchPutDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutDocumentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchPutDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchPutDocumentResponse(data, context);
  const response: BatchPutDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchPutDocumentCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ClearQuerySuggestionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ClearQuerySuggestionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ClearQuerySuggestionsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ClearQuerySuggestionsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ClearQuerySuggestionsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateAccessControlConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessControlConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAccessControlConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAccessControlConfigurationResponse(data, context);
  const response: CreateAccessControlConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAccessControlConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDataSourceResponse(data, context);
  const response: CreateDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDataSourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistException":
    case "com.amazonaws.kendra#ResourceAlreadyExistException":
      throw await deserializeAws_json1_1ResourceAlreadyExistExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateExperienceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExperienceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateExperienceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateExperienceResponse(data, context);
  const response: CreateExperienceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateExperienceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateFaqCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFaqCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateFaqCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateFaqResponse(data, context);
  const response: CreateFaqCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateFaqCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIndexCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateIndexCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateIndexResponse(data, context);
  const response: CreateIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateIndexCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistException":
    case "com.amazonaws.kendra#ResourceAlreadyExistException":
      throw await deserializeAws_json1_1ResourceAlreadyExistExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateQuerySuggestionsBlockListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateQuerySuggestionsBlockListCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateQuerySuggestionsBlockListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateQuerySuggestionsBlockListResponse(data, context);
  const response: CreateQuerySuggestionsBlockListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateQuerySuggestionsBlockListCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateThesaurusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateThesaurusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateThesaurusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateThesaurusResponse(data, context);
  const response: CreateThesaurusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateThesaurusCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteAccessControlConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessControlConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAccessControlConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAccessControlConfigurationResponse(data, context);
  const response: DeleteAccessControlConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAccessControlConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDataSourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDataSourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteExperienceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExperienceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteExperienceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteExperienceResponse(data, context);
  const response: DeleteExperienceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteExperienceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteFaqCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFaqCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteFaqCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteFaqCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteFaqCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIndexCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteIndexCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteIndexCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeletePrincipalMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePrincipalMappingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePrincipalMappingCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePrincipalMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePrincipalMappingCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteQuerySuggestionsBlockListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQuerySuggestionsBlockListCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteQuerySuggestionsBlockListCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteQuerySuggestionsBlockListCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteQuerySuggestionsBlockListCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteThesaurusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteThesaurusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteThesaurusCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteThesaurusCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteThesaurusCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAccessControlConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessControlConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAccessControlConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAccessControlConfigurationResponse(data, context);
  const response: DescribeAccessControlConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAccessControlConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDataSourceResponse(data, context);
  const response: DescribeDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDataSourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeExperienceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExperienceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeExperienceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeExperienceResponse(data, context);
  const response: DescribeExperienceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeExperienceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeFaqCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFaqCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFaqCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFaqResponse(data, context);
  const response: DescribeFaqCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFaqCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIndexCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeIndexCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeIndexResponse(data, context);
  const response: DescribeIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeIndexCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribePrincipalMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePrincipalMappingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePrincipalMappingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePrincipalMappingResponse(data, context);
  const response: DescribePrincipalMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePrincipalMappingCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeQuerySuggestionsBlockListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQuerySuggestionsBlockListCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeQuerySuggestionsBlockListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeQuerySuggestionsBlockListResponse(data, context);
  const response: DescribeQuerySuggestionsBlockListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeQuerySuggestionsBlockListCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeQuerySuggestionsConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQuerySuggestionsConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeQuerySuggestionsConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeQuerySuggestionsConfigResponse(data, context);
  const response: DescribeQuerySuggestionsConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeQuerySuggestionsConfigCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeThesaurusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeThesaurusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeThesaurusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeThesaurusResponse(data, context);
  const response: DescribeThesaurusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeThesaurusCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateEntitiesFromExperienceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateEntitiesFromExperienceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateEntitiesFromExperienceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateEntitiesFromExperienceResponse(data, context);
  const response: DisassociateEntitiesFromExperienceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateEntitiesFromExperienceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociatePersonasFromEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociatePersonasFromEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociatePersonasFromEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociatePersonasFromEntitiesResponse(data, context);
  const response: DisassociatePersonasFromEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociatePersonasFromEntitiesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetQuerySuggestionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQuerySuggestionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetQuerySuggestionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetQuerySuggestionsResponse(data, context);
  const response: GetQuerySuggestionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetQuerySuggestionsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSnapshotsResponse(data, context);
  const response: GetSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSnapshotsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kendra#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAccessControlConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessControlConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAccessControlConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAccessControlConfigurationsResponse(data, context);
  const response: ListAccessControlConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAccessControlConfigurationsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListDataSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDataSourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDataSourcesResponse(data, context);
  const response: ListDataSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDataSourcesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListDataSourceSyncJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourceSyncJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDataSourceSyncJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDataSourceSyncJobsResponse(data, context);
  const response: ListDataSourceSyncJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDataSourceSyncJobsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListEntityPersonasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntityPersonasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEntityPersonasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEntityPersonasResponse(data, context);
  const response: ListEntityPersonasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEntityPersonasCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListExperienceEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperienceEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListExperienceEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListExperienceEntitiesResponse(data, context);
  const response: ListExperienceEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListExperienceEntitiesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListExperiencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperiencesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListExperiencesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListExperiencesResponse(data, context);
  const response: ListExperiencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListExperiencesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListFaqsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFaqsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListFaqsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListFaqsResponse(data, context);
  const response: ListFaqsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListFaqsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListGroupsOlderThanOrderingIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsOlderThanOrderingIdCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListGroupsOlderThanOrderingIdCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGroupsOlderThanOrderingIdResponse(data, context);
  const response: ListGroupsOlderThanOrderingIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListGroupsOlderThanOrderingIdCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListIndicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIndicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListIndicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListIndicesResponse(data, context);
  const response: ListIndicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListIndicesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListQuerySuggestionsBlockListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQuerySuggestionsBlockListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListQuerySuggestionsBlockListsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListQuerySuggestionsBlockListsResponse(data, context);
  const response: ListQuerySuggestionsBlockListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListQuerySuggestionsBlockListsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.kendra#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListThesauriCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThesauriCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListThesauriCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListThesauriResponse(data, context);
  const response: ListThesauriCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListThesauriCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutPrincipalMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPrincipalMappingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutPrincipalMappingCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutPrincipalMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutPrincipalMappingCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1QueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1QueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1QueryResult(data, context);
  const response: QueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1QueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartDataSourceSyncJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataSourceSyncJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartDataSourceSyncJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDataSourceSyncJobResponse(data, context);
  const response: StartDataSourceSyncJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartDataSourceSyncJobCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kendra#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopDataSourceSyncJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDataSourceSyncJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopDataSourceSyncJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopDataSourceSyncJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopDataSourceSyncJobCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SubmitFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitFeedbackCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SubmitFeedbackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SubmitFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SubmitFeedbackCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.kendra#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.kendra#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.kendra#ResourceUnavailableException":
      throw await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateAccessControlConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessControlConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateAccessControlConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateAccessControlConfigurationResponse(data, context);
  const response: UpdateAccessControlConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateAccessControlConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDataSourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDataSourceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateExperienceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExperienceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateExperienceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateExperienceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateExperienceCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIndexCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateIndexCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateIndexCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateQuerySuggestionsBlockListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQuerySuggestionsBlockListCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateQuerySuggestionsBlockListCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateQuerySuggestionsBlockListCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateQuerySuggestionsBlockListCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateQuerySuggestionsConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateQuerySuggestionsConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateQuerySuggestionsConfigCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateQuerySuggestionsConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateQuerySuggestionsConfigCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateThesaurusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateThesaurusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateThesaurusCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateThesaurusCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateThesaurusCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceAlreadyExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistException(body, context);
  const exception = new ResourceAlreadyExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceUnavailableException(body, context);
  const exception = new ResourceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AccessControlListConfiguration = (
  input: AccessControlListConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyPath != null && { KeyPath: input.KeyPath }),
  };
};

const serializeAws_json1_1AclConfiguration = (input: AclConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AllowedGroupsColumnName != null && { AllowedGroupsColumnName: input.AllowedGroupsColumnName }),
  };
};

const serializeAws_json1_1AlfrescoConfiguration = (input: AlfrescoConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BlogFieldMappings != null && {
      BlogFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.BlogFieldMappings, context),
    }),
    ...(input.CrawlComments != null && { CrawlComments: input.CrawlComments }),
    ...(input.CrawlSystemFolders != null && { CrawlSystemFolders: input.CrawlSystemFolders }),
    ...(input.DocumentLibraryFieldMappings != null && {
      DocumentLibraryFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(
        input.DocumentLibraryFieldMappings,
        context
      ),
    }),
    ...(input.EntityFilter != null && { EntityFilter: serializeAws_json1_1EntityFilter(input.EntityFilter, context) }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.SiteId != null && { SiteId: input.SiteId }),
    ...(input.SiteUrl != null && { SiteUrl: input.SiteUrl }),
    ...(input.SslCertificateS3Path != null && {
      SslCertificateS3Path: serializeAws_json1_1S3Path(input.SslCertificateS3Path, context),
    }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
    ...(input.WikiFieldMappings != null && {
      WikiFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.WikiFieldMappings, context),
    }),
  };
};

const serializeAws_json1_1AssociateEntitiesToExperienceRequest = (
  input: AssociateEntitiesToExperienceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityList != null && { EntityList: serializeAws_json1_1AssociateEntityList(input.EntityList, context) }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1AssociateEntityList = (input: EntityConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1EntityConfiguration(entry, context);
    });
};

const serializeAws_json1_1AssociatePersonasToEntitiesRequest = (
  input: AssociatePersonasToEntitiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.Personas != null && {
      Personas: serializeAws_json1_1EntityPersonaConfigurationList(input.Personas, context),
    }),
  };
};

const serializeAws_json1_1AttributeFilter = (input: AttributeFilter, context: __SerdeContext): any => {
  return {
    ...(input.AndAllFilters != null && {
      AndAllFilters: serializeAws_json1_1AttributeFilterList(input.AndAllFilters, context),
    }),
    ...(input.ContainsAll != null && {
      ContainsAll: serializeAws_json1_1DocumentAttribute(input.ContainsAll, context),
    }),
    ...(input.ContainsAny != null && {
      ContainsAny: serializeAws_json1_1DocumentAttribute(input.ContainsAny, context),
    }),
    ...(input.EqualsTo != null && { EqualsTo: serializeAws_json1_1DocumentAttribute(input.EqualsTo, context) }),
    ...(input.GreaterThan != null && {
      GreaterThan: serializeAws_json1_1DocumentAttribute(input.GreaterThan, context),
    }),
    ...(input.GreaterThanOrEquals != null && {
      GreaterThanOrEquals: serializeAws_json1_1DocumentAttribute(input.GreaterThanOrEquals, context),
    }),
    ...(input.LessThan != null && { LessThan: serializeAws_json1_1DocumentAttribute(input.LessThan, context) }),
    ...(input.LessThanOrEquals != null && {
      LessThanOrEquals: serializeAws_json1_1DocumentAttribute(input.LessThanOrEquals, context),
    }),
    ...(input.NotFilter != null && { NotFilter: serializeAws_json1_1AttributeFilter(input.NotFilter, context) }),
    ...(input.OrAllFilters != null && {
      OrAllFilters: serializeAws_json1_1AttributeFilterList(input.OrAllFilters, context),
    }),
  };
};

const serializeAws_json1_1AttributeFilterList = (input: AttributeFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1AttributeFilter(entry, context);
    });
};

const serializeAws_json1_1AuthenticationConfiguration = (
  input: AuthenticationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BasicAuthentication != null && {
      BasicAuthentication: serializeAws_json1_1BasicAuthenticationConfigurationList(input.BasicAuthentication, context),
    }),
  };
};

const serializeAws_json1_1BasicAuthenticationConfiguration = (
  input: BasicAuthenticationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Credentials != null && { Credentials: input.Credentials }),
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

const serializeAws_json1_1BasicAuthenticationConfigurationList = (
  input: BasicAuthenticationConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1BasicAuthenticationConfiguration(entry, context);
    });
};

const serializeAws_json1_1BatchDeleteDocumentRequest = (
  input: BatchDeleteDocumentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceSyncJobMetricTarget != null && {
      DataSourceSyncJobMetricTarget: serializeAws_json1_1DataSourceSyncJobMetricTarget(
        input.DataSourceSyncJobMetricTarget,
        context
      ),
    }),
    ...(input.DocumentIdList != null && {
      DocumentIdList: serializeAws_json1_1DocumentIdList(input.DocumentIdList, context),
    }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1BatchGetDocumentStatusRequest = (
  input: BatchGetDocumentStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentInfoList != null && {
      DocumentInfoList: serializeAws_json1_1DocumentInfoList(input.DocumentInfoList, context),
    }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1BatchPutDocumentRequest = (input: BatchPutDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.CustomDocumentEnrichmentConfiguration != null && {
      CustomDocumentEnrichmentConfiguration: serializeAws_json1_1CustomDocumentEnrichmentConfiguration(
        input.CustomDocumentEnrichmentConfiguration,
        context
      ),
    }),
    ...(input.Documents != null && { Documents: serializeAws_json1_1DocumentList(input.Documents, context) }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_1BoxConfiguration = (input: BoxConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CommentFieldMappings != null && {
      CommentFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.CommentFieldMappings, context),
    }),
    ...(input.CrawlComments != null && { CrawlComments: input.CrawlComments }),
    ...(input.CrawlTasks != null && { CrawlTasks: input.CrawlTasks }),
    ...(input.CrawlWebLinks != null && { CrawlWebLinks: input.CrawlWebLinks }),
    ...(input.EnterpriseId != null && { EnterpriseId: input.EnterpriseId }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.FileFieldMappings != null && {
      FileFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FileFieldMappings, context),
    }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.TaskFieldMappings != null && {
      TaskFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.TaskFieldMappings, context),
    }),
    ...(input.UseChangeLog != null && { UseChangeLog: input.UseChangeLog }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
    ...(input.WebLinkFieldMappings != null && {
      WebLinkFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.WebLinkFieldMappings, context),
    }),
  };
};

const serializeAws_json1_1CapacityUnitsConfiguration = (
  input: CapacityUnitsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.QueryCapacityUnits != null && { QueryCapacityUnits: input.QueryCapacityUnits }),
    ...(input.StorageCapacityUnits != null && { StorageCapacityUnits: input.StorageCapacityUnits }),
  };
};

const serializeAws_json1_1ChangeDetectingColumns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ClearQuerySuggestionsRequest = (
  input: ClearQuerySuggestionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1ClickFeedback = (input: ClickFeedback, context: __SerdeContext): any => {
  return {
    ...(input.ClickTime != null && { ClickTime: Math.round(input.ClickTime.getTime() / 1000) }),
    ...(input.ResultId != null && { ResultId: input.ResultId }),
  };
};

const serializeAws_json1_1ClickFeedbackList = (input: ClickFeedback[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ClickFeedback(entry, context);
    });
};

const serializeAws_json1_1ColumnConfiguration = (input: ColumnConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ChangeDetectingColumns != null && {
      ChangeDetectingColumns: serializeAws_json1_1ChangeDetectingColumns(input.ChangeDetectingColumns, context),
    }),
    ...(input.DocumentDataColumnName != null && { DocumentDataColumnName: input.DocumentDataColumnName }),
    ...(input.DocumentIdColumnName != null && { DocumentIdColumnName: input.DocumentIdColumnName }),
    ...(input.DocumentTitleColumnName != null && { DocumentTitleColumnName: input.DocumentTitleColumnName }),
    ...(input.FieldMappings != null && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
  };
};

const serializeAws_json1_1ConfluenceAttachmentConfiguration = (
  input: ConfluenceAttachmentConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttachmentFieldMappings != null && {
      AttachmentFieldMappings: serializeAws_json1_1ConfluenceAttachmentFieldMappingsList(
        input.AttachmentFieldMappings,
        context
      ),
    }),
    ...(input.CrawlAttachments != null && { CrawlAttachments: input.CrawlAttachments }),
  };
};

const serializeAws_json1_1ConfluenceAttachmentFieldMappingsList = (
  input: ConfluenceAttachmentToIndexFieldMapping[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping(entry, context);
    });
};

const serializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping = (
  input: ConfluenceAttachmentToIndexFieldMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceFieldName != null && { DataSourceFieldName: input.DataSourceFieldName }),
    ...(input.DateFieldFormat != null && { DateFieldFormat: input.DateFieldFormat }),
    ...(input.IndexFieldName != null && { IndexFieldName: input.IndexFieldName }),
  };
};

const serializeAws_json1_1ConfluenceBlogConfiguration = (
  input: ConfluenceBlogConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BlogFieldMappings != null && {
      BlogFieldMappings: serializeAws_json1_1ConfluenceBlogFieldMappingsList(input.BlogFieldMappings, context),
    }),
  };
};

const serializeAws_json1_1ConfluenceBlogFieldMappingsList = (
  input: ConfluenceBlogToIndexFieldMapping[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ConfluenceBlogToIndexFieldMapping(entry, context);
    });
};

const serializeAws_json1_1ConfluenceBlogToIndexFieldMapping = (
  input: ConfluenceBlogToIndexFieldMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceFieldName != null && { DataSourceFieldName: input.DataSourceFieldName }),
    ...(input.DateFieldFormat != null && { DateFieldFormat: input.DateFieldFormat }),
    ...(input.IndexFieldName != null && { IndexFieldName: input.IndexFieldName }),
  };
};

const serializeAws_json1_1ConfluenceConfiguration = (input: ConfluenceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AttachmentConfiguration != null && {
      AttachmentConfiguration: serializeAws_json1_1ConfluenceAttachmentConfiguration(
        input.AttachmentConfiguration,
        context
      ),
    }),
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.BlogConfiguration != null && {
      BlogConfiguration: serializeAws_json1_1ConfluenceBlogConfiguration(input.BlogConfiguration, context),
    }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.PageConfiguration != null && {
      PageConfiguration: serializeAws_json1_1ConfluencePageConfiguration(input.PageConfiguration, context),
    }),
    ...(input.ProxyConfiguration != null && {
      ProxyConfiguration: serializeAws_json1_1ProxyConfiguration(input.ProxyConfiguration, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.ServerUrl != null && { ServerUrl: input.ServerUrl }),
    ...(input.SpaceConfiguration != null && {
      SpaceConfiguration: serializeAws_json1_1ConfluenceSpaceConfiguration(input.SpaceConfiguration, context),
    }),
    ...(input.Version != null && { Version: input.Version }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

const serializeAws_json1_1ConfluencePageConfiguration = (
  input: ConfluencePageConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.PageFieldMappings != null && {
      PageFieldMappings: serializeAws_json1_1ConfluencePageFieldMappingsList(input.PageFieldMappings, context),
    }),
  };
};

const serializeAws_json1_1ConfluencePageFieldMappingsList = (
  input: ConfluencePageToIndexFieldMapping[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ConfluencePageToIndexFieldMapping(entry, context);
    });
};

const serializeAws_json1_1ConfluencePageToIndexFieldMapping = (
  input: ConfluencePageToIndexFieldMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceFieldName != null && { DataSourceFieldName: input.DataSourceFieldName }),
    ...(input.DateFieldFormat != null && { DateFieldFormat: input.DateFieldFormat }),
    ...(input.IndexFieldName != null && { IndexFieldName: input.IndexFieldName }),
  };
};

const serializeAws_json1_1ConfluenceSpaceConfiguration = (
  input: ConfluenceSpaceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CrawlArchivedSpaces != null && { CrawlArchivedSpaces: input.CrawlArchivedSpaces }),
    ...(input.CrawlPersonalSpaces != null && { CrawlPersonalSpaces: input.CrawlPersonalSpaces }),
    ...(input.ExcludeSpaces != null && {
      ExcludeSpaces: serializeAws_json1_1ConfluenceSpaceList(input.ExcludeSpaces, context),
    }),
    ...(input.IncludeSpaces != null && {
      IncludeSpaces: serializeAws_json1_1ConfluenceSpaceList(input.IncludeSpaces, context),
    }),
    ...(input.SpaceFieldMappings != null && {
      SpaceFieldMappings: serializeAws_json1_1ConfluenceSpaceFieldMappingsList(input.SpaceFieldMappings, context),
    }),
  };
};

const serializeAws_json1_1ConfluenceSpaceFieldMappingsList = (
  input: ConfluenceSpaceToIndexFieldMapping[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ConfluenceSpaceToIndexFieldMapping(entry, context);
    });
};

const serializeAws_json1_1ConfluenceSpaceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ConfluenceSpaceToIndexFieldMapping = (
  input: ConfluenceSpaceToIndexFieldMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceFieldName != null && { DataSourceFieldName: input.DataSourceFieldName }),
    ...(input.DateFieldFormat != null && { DateFieldFormat: input.DateFieldFormat }),
    ...(input.IndexFieldName != null && { IndexFieldName: input.IndexFieldName }),
  };
};

const serializeAws_json1_1ConnectionConfiguration = (input: ConnectionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseHost != null && { DatabaseHost: input.DatabaseHost }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.DatabasePort != null && { DatabasePort: input.DatabasePort }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1ContentSourceConfiguration = (
  input: ContentSourceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceIds != null && {
      DataSourceIds: serializeAws_json1_1DataSourceIdList(input.DataSourceIds, context),
    }),
    ...(input.DirectPutContent != null && { DirectPutContent: input.DirectPutContent }),
    ...(input.FaqIds != null && { FaqIds: serializeAws_json1_1FaqIdsList(input.FaqIds, context) }),
  };
};

const serializeAws_json1_1CreateAccessControlConfigurationRequest = (
  input: CreateAccessControlConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessControlList != null && {
      AccessControlList: serializeAws_json1_1PrincipalList(input.AccessControlList, context),
    }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.HierarchicalAccessControlList != null && {
      HierarchicalAccessControlList: serializeAws_json1_1HierarchicalPrincipalList(
        input.HierarchicalAccessControlList,
        context
      ),
    }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateDataSourceRequest = (input: CreateDataSourceRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Configuration != null && {
      Configuration: serializeAws_json1_1DataSourceConfiguration(input.Configuration, context),
    }),
    ...(input.CustomDocumentEnrichmentConfiguration != null && {
      CustomDocumentEnrichmentConfiguration: serializeAws_json1_1CustomDocumentEnrichmentConfiguration(
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
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

const serializeAws_json1_1CreateExperienceRequest = (input: CreateExperienceRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Configuration != null && {
      Configuration: serializeAws_json1_1ExperienceConfiguration(input.Configuration, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_1CreateFaqRequest = (input: CreateFaqRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FileFormat != null && { FileFormat: input.FileFormat }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.LanguageCode != null && { LanguageCode: input.LanguageCode }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.S3Path != null && { S3Path: serializeAws_json1_1S3Path(input.S3Path, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateIndexRequest = (input: CreateIndexRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Edition != null && { Edition: input.Edition }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.ServerSideEncryptionConfiguration != null && {
      ServerSideEncryptionConfiguration: serializeAws_json1_1ServerSideEncryptionConfiguration(
        input.ServerSideEncryptionConfiguration,
        context
      ),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.UserContextPolicy != null && { UserContextPolicy: input.UserContextPolicy }),
    ...(input.UserGroupResolutionConfiguration != null && {
      UserGroupResolutionConfiguration: serializeAws_json1_1UserGroupResolutionConfiguration(
        input.UserGroupResolutionConfiguration,
        context
      ),
    }),
    ...(input.UserTokenConfigurations != null && {
      UserTokenConfigurations: serializeAws_json1_1UserTokenConfigurationList(input.UserTokenConfigurations, context),
    }),
  };
};

const serializeAws_json1_1CreateQuerySuggestionsBlockListRequest = (
  input: CreateQuerySuggestionsBlockListRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.SourceS3Path != null && { SourceS3Path: serializeAws_json1_1S3Path(input.SourceS3Path, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateThesaurusRequest = (input: CreateThesaurusRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.SourceS3Path != null && { SourceS3Path: serializeAws_json1_1S3Path(input.SourceS3Path, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CustomDocumentEnrichmentConfiguration = (
  input: CustomDocumentEnrichmentConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InlineConfigurations != null && {
      InlineConfigurations: serializeAws_json1_1InlineCustomDocumentEnrichmentConfigurationList(
        input.InlineConfigurations,
        context
      ),
    }),
    ...(input.PostExtractionHookConfiguration != null && {
      PostExtractionHookConfiguration: serializeAws_json1_1HookConfiguration(
        input.PostExtractionHookConfiguration,
        context
      ),
    }),
    ...(input.PreExtractionHookConfiguration != null && {
      PreExtractionHookConfiguration: serializeAws_json1_1HookConfiguration(
        input.PreExtractionHookConfiguration,
        context
      ),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_1DatabaseConfiguration = (input: DatabaseConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AclConfiguration != null && {
      AclConfiguration: serializeAws_json1_1AclConfiguration(input.AclConfiguration, context),
    }),
    ...(input.ColumnConfiguration != null && {
      ColumnConfiguration: serializeAws_json1_1ColumnConfiguration(input.ColumnConfiguration, context),
    }),
    ...(input.ConnectionConfiguration != null && {
      ConnectionConfiguration: serializeAws_json1_1ConnectionConfiguration(input.ConnectionConfiguration, context),
    }),
    ...(input.DatabaseEngineType != null && { DatabaseEngineType: input.DatabaseEngineType }),
    ...(input.SqlConfiguration != null && {
      SqlConfiguration: serializeAws_json1_1SqlConfiguration(input.SqlConfiguration, context),
    }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

const serializeAws_json1_1DataSourceConfiguration = (input: DataSourceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AlfrescoConfiguration != null && {
      AlfrescoConfiguration: serializeAws_json1_1AlfrescoConfiguration(input.AlfrescoConfiguration, context),
    }),
    ...(input.BoxConfiguration != null && {
      BoxConfiguration: serializeAws_json1_1BoxConfiguration(input.BoxConfiguration, context),
    }),
    ...(input.ConfluenceConfiguration != null && {
      ConfluenceConfiguration: serializeAws_json1_1ConfluenceConfiguration(input.ConfluenceConfiguration, context),
    }),
    ...(input.DatabaseConfiguration != null && {
      DatabaseConfiguration: serializeAws_json1_1DatabaseConfiguration(input.DatabaseConfiguration, context),
    }),
    ...(input.FsxConfiguration != null && {
      FsxConfiguration: serializeAws_json1_1FsxConfiguration(input.FsxConfiguration, context),
    }),
    ...(input.GitHubConfiguration != null && {
      GitHubConfiguration: serializeAws_json1_1GitHubConfiguration(input.GitHubConfiguration, context),
    }),
    ...(input.GoogleDriveConfiguration != null && {
      GoogleDriveConfiguration: serializeAws_json1_1GoogleDriveConfiguration(input.GoogleDriveConfiguration, context),
    }),
    ...(input.JiraConfiguration != null && {
      JiraConfiguration: serializeAws_json1_1JiraConfiguration(input.JiraConfiguration, context),
    }),
    ...(input.OneDriveConfiguration != null && {
      OneDriveConfiguration: serializeAws_json1_1OneDriveConfiguration(input.OneDriveConfiguration, context),
    }),
    ...(input.QuipConfiguration != null && {
      QuipConfiguration: serializeAws_json1_1QuipConfiguration(input.QuipConfiguration, context),
    }),
    ...(input.S3Configuration != null && {
      S3Configuration: serializeAws_json1_1S3DataSourceConfiguration(input.S3Configuration, context),
    }),
    ...(input.SalesforceConfiguration != null && {
      SalesforceConfiguration: serializeAws_json1_1SalesforceConfiguration(input.SalesforceConfiguration, context),
    }),
    ...(input.ServiceNowConfiguration != null && {
      ServiceNowConfiguration: serializeAws_json1_1ServiceNowConfiguration(input.ServiceNowConfiguration, context),
    }),
    ...(input.SharePointConfiguration != null && {
      SharePointConfiguration: serializeAws_json1_1SharePointConfiguration(input.SharePointConfiguration, context),
    }),
    ...(input.SlackConfiguration != null && {
      SlackConfiguration: serializeAws_json1_1SlackConfiguration(input.SlackConfiguration, context),
    }),
    ...(input.TemplateConfiguration != null && {
      TemplateConfiguration: serializeAws_json1_1TemplateConfiguration(input.TemplateConfiguration, context),
    }),
    ...(input.WebCrawlerConfiguration != null && {
      WebCrawlerConfiguration: serializeAws_json1_1WebCrawlerConfiguration(input.WebCrawlerConfiguration, context),
    }),
    ...(input.WorkDocsConfiguration != null && {
      WorkDocsConfiguration: serializeAws_json1_1WorkDocsConfiguration(input.WorkDocsConfiguration, context),
    }),
  };
};

const serializeAws_json1_1DataSourceGroup = (input: DataSourceGroup, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.GroupId != null && { GroupId: input.GroupId }),
  };
};

const serializeAws_json1_1DataSourceGroups = (input: DataSourceGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1DataSourceGroup(entry, context);
    });
};

const serializeAws_json1_1DataSourceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DataSourceInclusionsExclusionsStrings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DataSourceSyncJobMetricTarget = (
  input: DataSourceSyncJobMetricTarget,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.DataSourceSyncJobId != null && { DataSourceSyncJobId: input.DataSourceSyncJobId }),
  };
};

const serializeAws_json1_1DataSourceToIndexFieldMapping = (
  input: DataSourceToIndexFieldMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceFieldName != null && { DataSourceFieldName: input.DataSourceFieldName }),
    ...(input.DateFieldFormat != null && { DateFieldFormat: input.DateFieldFormat }),
    ...(input.IndexFieldName != null && { IndexFieldName: input.IndexFieldName }),
  };
};

const serializeAws_json1_1DataSourceToIndexFieldMappingList = (
  input: DataSourceToIndexFieldMapping[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1DataSourceToIndexFieldMapping(entry, context);
    });
};

const serializeAws_json1_1DataSourceVpcConfiguration = (
  input: DataSourceVpcConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_json1_1SecurityGroupIdList(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_json1_1SubnetIdList(input.SubnetIds, context) }),
  };
};

const serializeAws_json1_1DeleteAccessControlConfigurationRequest = (
  input: DeleteAccessControlConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DeleteDataSourceRequest = (input: DeleteDataSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DeleteExperienceRequest = (input: DeleteExperienceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DeleteFaqRequest = (input: DeleteFaqRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DeleteIndexRequest = (input: DeleteIndexRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

const serializeAws_json1_1DeletePrincipalMappingRequest = (
  input: DeletePrincipalMappingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.OrderingId != null && { OrderingId: input.OrderingId }),
  };
};

const serializeAws_json1_1DeleteQuerySuggestionsBlockListRequest = (
  input: DeleteQuerySuggestionsBlockListRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DeleteThesaurusRequest = (input: DeleteThesaurusRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DescribeAccessControlConfigurationRequest = (
  input: DescribeAccessControlConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DescribeDataSourceRequest = (
  input: DescribeDataSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DescribeExperienceRequest = (
  input: DescribeExperienceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DescribeFaqRequest = (input: DescribeFaqRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DescribeIndexRequest = (input: DescribeIndexRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

const serializeAws_json1_1DescribePrincipalMappingRequest = (
  input: DescribePrincipalMappingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DescribeQuerySuggestionsBlockListRequest = (
  input: DescribeQuerySuggestionsBlockListRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DescribeQuerySuggestionsConfigRequest = (
  input: DescribeQuerySuggestionsConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DescribeThesaurusRequest = (
  input: DescribeThesaurusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DisassociateEntitiesFromExperienceRequest = (
  input: DisassociateEntitiesFromExperienceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityList != null && {
      EntityList: serializeAws_json1_1DisassociateEntityList(input.EntityList, context),
    }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DisassociateEntityList = (input: EntityConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1EntityConfiguration(entry, context);
    });
};

const serializeAws_json1_1DisassociatePersonasFromEntitiesRequest = (
  input: DisassociatePersonasFromEntitiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityIds != null && { EntityIds: serializeAws_json1_1EntityIdsList(input.EntityIds, context) }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1Document = (input: Document, context: __SerdeContext): any => {
  return {
    ...(input.AccessControlConfigurationId != null && {
      AccessControlConfigurationId: input.AccessControlConfigurationId,
    }),
    ...(input.AccessControlList != null && {
      AccessControlList: serializeAws_json1_1PrincipalList(input.AccessControlList, context),
    }),
    ...(input.Attributes != null && {
      Attributes: serializeAws_json1_1DocumentAttributeList(input.Attributes, context),
    }),
    ...(input.Blob != null && { Blob: context.base64Encoder(input.Blob) }),
    ...(input.ContentType != null && { ContentType: input.ContentType }),
    ...(input.HierarchicalAccessControlList != null && {
      HierarchicalAccessControlList: serializeAws_json1_1HierarchicalPrincipalList(
        input.HierarchicalAccessControlList,
        context
      ),
    }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.S3Path != null && { S3Path: serializeAws_json1_1S3Path(input.S3Path, context) }),
    ...(input.Title != null && { Title: input.Title }),
  };
};

const serializeAws_json1_1DocumentAttribute = (input: DocumentAttribute, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: serializeAws_json1_1DocumentAttributeValue(input.Value, context) }),
  };
};

const serializeAws_json1_1DocumentAttributeCondition = (
  input: DocumentAttributeCondition,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConditionDocumentAttributeKey != null && {
      ConditionDocumentAttributeKey: input.ConditionDocumentAttributeKey,
    }),
    ...(input.ConditionOnValue != null && {
      ConditionOnValue: serializeAws_json1_1DocumentAttributeValue(input.ConditionOnValue, context),
    }),
    ...(input.Operator != null && { Operator: input.Operator }),
  };
};

const serializeAws_json1_1DocumentAttributeKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DocumentAttributeList = (input: DocumentAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1DocumentAttribute(entry, context);
    });
};

const serializeAws_json1_1DocumentAttributeStringListValue = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DocumentAttributeTarget = (input: DocumentAttributeTarget, context: __SerdeContext): any => {
  return {
    ...(input.TargetDocumentAttributeKey != null && { TargetDocumentAttributeKey: input.TargetDocumentAttributeKey }),
    ...(input.TargetDocumentAttributeValue != null && {
      TargetDocumentAttributeValue: serializeAws_json1_1DocumentAttributeValue(
        input.TargetDocumentAttributeValue,
        context
      ),
    }),
    ...(input.TargetDocumentAttributeValueDeletion != null && {
      TargetDocumentAttributeValueDeletion: input.TargetDocumentAttributeValueDeletion,
    }),
  };
};

const serializeAws_json1_1DocumentAttributeValue = (input: DocumentAttributeValue, context: __SerdeContext): any => {
  return {
    ...(input.DateValue != null && { DateValue: Math.round(input.DateValue.getTime() / 1000) }),
    ...(input.LongValue != null && { LongValue: input.LongValue }),
    ...(input.StringListValue != null && {
      StringListValue: serializeAws_json1_1DocumentAttributeStringListValue(input.StringListValue, context),
    }),
    ...(input.StringValue != null && { StringValue: input.StringValue }),
  };
};

const serializeAws_json1_1DocumentIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DocumentInfo = (input: DocumentInfo, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && {
      Attributes: serializeAws_json1_1DocumentAttributeList(input.Attributes, context),
    }),
    ...(input.DocumentId != null && { DocumentId: input.DocumentId }),
  };
};

const serializeAws_json1_1DocumentInfoList = (input: DocumentInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1DocumentInfo(entry, context);
    });
};

const serializeAws_json1_1DocumentList = (input: Document[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Document(entry, context);
    });
};

const serializeAws_json1_1DocumentMetadataConfiguration = (
  input: DocumentMetadataConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Relevance != null && { Relevance: serializeAws_json1_1Relevance(input.Relevance, context) }),
    ...(input.Search != null && { Search: serializeAws_json1_1Search(input.Search, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1DocumentMetadataConfigurationList = (
  input: DocumentMetadataConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1DocumentMetadataConfiguration(entry, context);
    });
};

const serializeAws_json1_1DocumentRelevanceConfiguration = (
  input: DocumentRelevanceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Relevance != null && { Relevance: serializeAws_json1_1Relevance(input.Relevance, context) }),
  };
};

const serializeAws_json1_1DocumentRelevanceOverrideConfigurationList = (
  input: DocumentRelevanceConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1DocumentRelevanceConfiguration(entry, context);
    });
};

const serializeAws_json1_1DocumentsMetadataConfiguration = (
  input: DocumentsMetadataConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Prefix != null && { S3Prefix: input.S3Prefix }),
  };
};

const serializeAws_json1_1EntityConfiguration = (input: EntityConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.EntityType != null && { EntityType: input.EntityType }),
  };
};

const serializeAws_json1_1EntityFilter = (input: (AlfrescoEntity | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1EntityIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1EntityPersonaConfiguration = (
  input: EntityPersonaConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.Persona != null && { Persona: input.Persona }),
  };
};

const serializeAws_json1_1EntityPersonaConfigurationList = (
  input: EntityPersonaConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1EntityPersonaConfiguration(entry, context);
    });
};

const serializeAws_json1_1ExcludeMimeTypesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ExcludeSharedDrivesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ExcludeUserAccountsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ExperienceConfiguration = (input: ExperienceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ContentSourceConfiguration != null && {
      ContentSourceConfiguration: serializeAws_json1_1ContentSourceConfiguration(
        input.ContentSourceConfiguration,
        context
      ),
    }),
    ...(input.UserIdentityConfiguration != null && {
      UserIdentityConfiguration: serializeAws_json1_1UserIdentityConfiguration(
        input.UserIdentityConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_json1_1Facet = (input: Facet, context: __SerdeContext): any => {
  return {
    ...(input.DocumentAttributeKey != null && { DocumentAttributeKey: input.DocumentAttributeKey }),
    ...(input.Facets != null && { Facets: serializeAws_json1_1FacetList(input.Facets, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
  };
};

const serializeAws_json1_1FacetList = (input: Facet[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Facet(entry, context);
    });
};

const serializeAws_json1_1FaqIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1FolderIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1FsxConfiguration = (input: FsxConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.FieldMappings != null && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
    ...(input.FileSystemType != null && { FileSystemType: input.FileSystemType }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

const serializeAws_json1_1GetQuerySuggestionsRequest = (
  input: GetQuerySuggestionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MaxSuggestionsCount != null && { MaxSuggestionsCount: input.MaxSuggestionsCount }),
    ...(input.QueryText != null && { QueryText: input.QueryText }),
  };
};

const serializeAws_json1_1GetSnapshotsRequest = (input: GetSnapshotsRequest, context: __SerdeContext): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.Interval != null && { Interval: input.Interval }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MetricType != null && { MetricType: input.MetricType }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GitHubConfiguration = (input: GitHubConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ExclusionFileNamePatterns != null && {
      ExclusionFileNamePatterns: serializeAws_json1_1StringList(input.ExclusionFileNamePatterns, context),
    }),
    ...(input.ExclusionFileTypePatterns != null && {
      ExclusionFileTypePatterns: serializeAws_json1_1StringList(input.ExclusionFileTypePatterns, context),
    }),
    ...(input.ExclusionFolderNamePatterns != null && {
      ExclusionFolderNamePatterns: serializeAws_json1_1StringList(input.ExclusionFolderNamePatterns, context),
    }),
    ...(input.GitHubCommitConfigurationFieldMappings != null && {
      GitHubCommitConfigurationFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(
        input.GitHubCommitConfigurationFieldMappings,
        context
      ),
    }),
    ...(input.GitHubDocumentCrawlProperties != null && {
      GitHubDocumentCrawlProperties: serializeAws_json1_1GitHubDocumentCrawlProperties(
        input.GitHubDocumentCrawlProperties,
        context
      ),
    }),
    ...(input.GitHubIssueAttachmentConfigurationFieldMappings != null && {
      GitHubIssueAttachmentConfigurationFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(
        input.GitHubIssueAttachmentConfigurationFieldMappings,
        context
      ),
    }),
    ...(input.GitHubIssueCommentConfigurationFieldMappings != null && {
      GitHubIssueCommentConfigurationFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(
        input.GitHubIssueCommentConfigurationFieldMappings,
        context
      ),
    }),
    ...(input.GitHubIssueDocumentConfigurationFieldMappings != null && {
      GitHubIssueDocumentConfigurationFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(
        input.GitHubIssueDocumentConfigurationFieldMappings,
        context
      ),
    }),
    ...(input.GitHubPullRequestCommentConfigurationFieldMappings != null && {
      GitHubPullRequestCommentConfigurationFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(
        input.GitHubPullRequestCommentConfigurationFieldMappings,
        context
      ),
    }),
    ...(input.GitHubPullRequestDocumentAttachmentConfigurationFieldMappings != null && {
      GitHubPullRequestDocumentAttachmentConfigurationFieldMappings:
        serializeAws_json1_1DataSourceToIndexFieldMappingList(
          input.GitHubPullRequestDocumentAttachmentConfigurationFieldMappings,
          context
        ),
    }),
    ...(input.GitHubPullRequestDocumentConfigurationFieldMappings != null && {
      GitHubPullRequestDocumentConfigurationFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(
        input.GitHubPullRequestDocumentConfigurationFieldMappings,
        context
      ),
    }),
    ...(input.GitHubRepositoryConfigurationFieldMappings != null && {
      GitHubRepositoryConfigurationFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(
        input.GitHubRepositoryConfigurationFieldMappings,
        context
      ),
    }),
    ...(input.InclusionFileNamePatterns != null && {
      InclusionFileNamePatterns: serializeAws_json1_1StringList(input.InclusionFileNamePatterns, context),
    }),
    ...(input.InclusionFileTypePatterns != null && {
      InclusionFileTypePatterns: serializeAws_json1_1StringList(input.InclusionFileTypePatterns, context),
    }),
    ...(input.InclusionFolderNamePatterns != null && {
      InclusionFolderNamePatterns: serializeAws_json1_1StringList(input.InclusionFolderNamePatterns, context),
    }),
    ...(input.OnPremiseConfiguration != null && {
      OnPremiseConfiguration: serializeAws_json1_1OnPremiseConfiguration(input.OnPremiseConfiguration, context),
    }),
    ...(input.RepositoryFilter != null && {
      RepositoryFilter: serializeAws_json1_1RepositoryNames(input.RepositoryFilter, context),
    }),
    ...(input.SaaSConfiguration != null && {
      SaaSConfiguration: serializeAws_json1_1SaaSConfiguration(input.SaaSConfiguration, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.UseChangeLog != null && { UseChangeLog: input.UseChangeLog }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

const serializeAws_json1_1GitHubDocumentCrawlProperties = (
  input: GitHubDocumentCrawlProperties,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1GoogleDriveConfiguration = (
  input: GoogleDriveConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExcludeMimeTypes != null && {
      ExcludeMimeTypes: serializeAws_json1_1ExcludeMimeTypesList(input.ExcludeMimeTypes, context),
    }),
    ...(input.ExcludeSharedDrives != null && {
      ExcludeSharedDrives: serializeAws_json1_1ExcludeSharedDrivesList(input.ExcludeSharedDrives, context),
    }),
    ...(input.ExcludeUserAccounts != null && {
      ExcludeUserAccounts: serializeAws_json1_1ExcludeUserAccountsList(input.ExcludeUserAccounts, context),
    }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.FieldMappings != null && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
  };
};

const serializeAws_json1_1GroupMembers = (input: GroupMembers, context: __SerdeContext): any => {
  return {
    ...(input.MemberGroups != null && { MemberGroups: serializeAws_json1_1MemberGroups(input.MemberGroups, context) }),
    ...(input.MemberUsers != null && { MemberUsers: serializeAws_json1_1MemberUsers(input.MemberUsers, context) }),
    ...(input.S3PathforGroupMembers != null && {
      S3PathforGroupMembers: serializeAws_json1_1S3Path(input.S3PathforGroupMembers, context),
    }),
  };
};

const serializeAws_json1_1Groups = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1HierarchicalPrincipal = (input: HierarchicalPrincipal, context: __SerdeContext): any => {
  return {
    ...(input.PrincipalList != null && {
      PrincipalList: serializeAws_json1_1PrincipalList(input.PrincipalList, context),
    }),
  };
};

const serializeAws_json1_1HierarchicalPrincipalList = (
  input: HierarchicalPrincipal[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1HierarchicalPrincipal(entry, context);
    });
};

const serializeAws_json1_1HookConfiguration = (input: HookConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.InvocationCondition != null && {
      InvocationCondition: serializeAws_json1_1DocumentAttributeCondition(input.InvocationCondition, context),
    }),
    ...(input.LambdaArn != null && { LambdaArn: input.LambdaArn }),
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
  };
};

const serializeAws_json1_1InlineCustomDocumentEnrichmentConfiguration = (
  input: InlineCustomDocumentEnrichmentConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Condition != null && {
      Condition: serializeAws_json1_1DocumentAttributeCondition(input.Condition, context),
    }),
    ...(input.DocumentContentDeletion != null && { DocumentContentDeletion: input.DocumentContentDeletion }),
    ...(input.Target != null && { Target: serializeAws_json1_1DocumentAttributeTarget(input.Target, context) }),
  };
};

const serializeAws_json1_1InlineCustomDocumentEnrichmentConfigurationList = (
  input: InlineCustomDocumentEnrichmentConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1InlineCustomDocumentEnrichmentConfiguration(entry, context);
    });
};

const serializeAws_json1_1IssueSubEntityFilter = (input: (IssueSubEntity | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1IssueType = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1JiraConfiguration = (input: JiraConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AttachmentFieldMappings != null && {
      AttachmentFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(
        input.AttachmentFieldMappings,
        context
      ),
    }),
    ...(input.CommentFieldMappings != null && {
      CommentFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.CommentFieldMappings, context),
    }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.IssueFieldMappings != null && {
      IssueFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.IssueFieldMappings, context),
    }),
    ...(input.IssueSubEntityFilter != null && {
      IssueSubEntityFilter: serializeAws_json1_1IssueSubEntityFilter(input.IssueSubEntityFilter, context),
    }),
    ...(input.IssueType != null && { IssueType: serializeAws_json1_1IssueType(input.IssueType, context) }),
    ...(input.JiraAccountUrl != null && { JiraAccountUrl: input.JiraAccountUrl }),
    ...(input.Project != null && { Project: serializeAws_json1_1Project(input.Project, context) }),
    ...(input.ProjectFieldMappings != null && {
      ProjectFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.ProjectFieldMappings, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.Status != null && { Status: serializeAws_json1_1JiraStatus(input.Status, context) }),
    ...(input.UseChangeLog != null && { UseChangeLog: input.UseChangeLog }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
    ...(input.WorkLogFieldMappings != null && {
      WorkLogFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.WorkLogFieldMappings, context),
    }),
  };
};

const serializeAws_json1_1JiraStatus = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1JsonTokenTypeConfiguration = (
  input: JsonTokenTypeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupAttributeField != null && { GroupAttributeField: input.GroupAttributeField }),
    ...(input.UserNameAttributeField != null && { UserNameAttributeField: input.UserNameAttributeField }),
  };
};

const serializeAws_json1_1JwtTokenTypeConfiguration = (
  input: JwtTokenTypeConfiguration,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1ListAccessControlConfigurationsRequest = (
  input: ListAccessControlConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDataSourcesRequest = (input: ListDataSourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDataSourceSyncJobsRequest = (
  input: ListDataSourceSyncJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StartTimeFilter != null && {
      StartTimeFilter: serializeAws_json1_1TimeRange(input.StartTimeFilter, context),
    }),
    ...(input.StatusFilter != null && { StatusFilter: input.StatusFilter }),
  };
};

const serializeAws_json1_1ListEntityPersonasRequest = (
  input: ListEntityPersonasRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListExperienceEntitiesRequest = (
  input: ListExperienceEntitiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListExperiencesRequest = (input: ListExperiencesRequest, context: __SerdeContext): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListFaqsRequest = (input: ListFaqsRequest, context: __SerdeContext): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListGroupsOlderThanOrderingIdRequest = (
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

const serializeAws_json1_1ListIndicesRequest = (input: ListIndicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListQuerySuggestionsBlockListsRequest = (
  input: ListQuerySuggestionsBlockListsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1ListThesauriRequest = (input: ListThesauriRequest, context: __SerdeContext): any => {
  return {
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1MemberGroup = (input: MemberGroup, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.GroupId != null && { GroupId: input.GroupId }),
  };
};

const serializeAws_json1_1MemberGroups = (input: MemberGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1MemberGroup(entry, context);
    });
};

const serializeAws_json1_1MemberUser = (input: MemberUser, context: __SerdeContext): any => {
  return {
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

const serializeAws_json1_1MemberUsers = (input: MemberUser[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1MemberUser(entry, context);
    });
};

const serializeAws_json1_1OneDriveConfiguration = (input: OneDriveConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DisableLocalGroups != null && { DisableLocalGroups: input.DisableLocalGroups }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.FieldMappings != null && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.OneDriveUsers != null && {
      OneDriveUsers: serializeAws_json1_1OneDriveUsers(input.OneDriveUsers, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.TenantDomain != null && { TenantDomain: input.TenantDomain }),
  };
};

const serializeAws_json1_1OneDriveUserList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1OneDriveUsers = (input: OneDriveUsers, context: __SerdeContext): any => {
  return {
    ...(input.OneDriveUserList != null && {
      OneDriveUserList: serializeAws_json1_1OneDriveUserList(input.OneDriveUserList, context),
    }),
    ...(input.OneDriveUserS3Path != null && {
      OneDriveUserS3Path: serializeAws_json1_1S3Path(input.OneDriveUserS3Path, context),
    }),
  };
};

const serializeAws_json1_1OnPremiseConfiguration = (input: OnPremiseConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.HostUrl != null && { HostUrl: input.HostUrl }),
    ...(input.OrganizationName != null && { OrganizationName: input.OrganizationName }),
    ...(input.SslCertificateS3Path != null && {
      SslCertificateS3Path: serializeAws_json1_1S3Path(input.SslCertificateS3Path, context),
    }),
  };
};

const serializeAws_json1_1Principal = (input: Principal, context: __SerdeContext): any => {
  return {
    ...(input.Access != null && { Access: input.Access }),
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1PrincipalList = (input: Principal[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Principal(entry, context);
    });
};

const serializeAws_json1_1PrivateChannelFilter = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Project = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ProxyConfiguration = (input: ProxyConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Credentials != null && { Credentials: input.Credentials }),
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

const serializeAws_json1_1PublicChannelFilter = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PutPrincipalMappingRequest = (
  input: PutPrincipalMappingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.GroupMembers != null && { GroupMembers: serializeAws_json1_1GroupMembers(input.GroupMembers, context) }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.OrderingId != null && { OrderingId: input.OrderingId }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_1QueryRequest = (input: QueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.AttributeFilter != null && {
      AttributeFilter: serializeAws_json1_1AttributeFilter(input.AttributeFilter, context),
    }),
    ...(input.DocumentRelevanceOverrideConfigurations != null && {
      DocumentRelevanceOverrideConfigurations: serializeAws_json1_1DocumentRelevanceOverrideConfigurationList(
        input.DocumentRelevanceOverrideConfigurations,
        context
      ),
    }),
    ...(input.Facets != null && { Facets: serializeAws_json1_1FacetList(input.Facets, context) }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.PageNumber != null && { PageNumber: input.PageNumber }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.QueryResultTypeFilter != null && { QueryResultTypeFilter: input.QueryResultTypeFilter }),
    ...(input.QueryText != null && { QueryText: input.QueryText }),
    ...(input.RequestedDocumentAttributes != null && {
      RequestedDocumentAttributes: serializeAws_json1_1DocumentAttributeKeyList(
        input.RequestedDocumentAttributes,
        context
      ),
    }),
    ...(input.SortingConfiguration != null && {
      SortingConfiguration: serializeAws_json1_1SortingConfiguration(input.SortingConfiguration, context),
    }),
    ...(input.SpellCorrectionConfiguration != null && {
      SpellCorrectionConfiguration: serializeAws_json1_1SpellCorrectionConfiguration(
        input.SpellCorrectionConfiguration,
        context
      ),
    }),
    ...(input.UserContext != null && { UserContext: serializeAws_json1_1UserContext(input.UserContext, context) }),
    ...(input.VisitorId != null && { VisitorId: input.VisitorId }),
  };
};

const serializeAws_json1_1QuipConfiguration = (input: QuipConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AttachmentFieldMappings != null && {
      AttachmentFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(
        input.AttachmentFieldMappings,
        context
      ),
    }),
    ...(input.CrawlAttachments != null && { CrawlAttachments: input.CrawlAttachments }),
    ...(input.CrawlChatRooms != null && { CrawlChatRooms: input.CrawlChatRooms }),
    ...(input.CrawlFileComments != null && { CrawlFileComments: input.CrawlFileComments }),
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.FolderIds != null && { FolderIds: serializeAws_json1_1FolderIdList(input.FolderIds, context) }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.MessageFieldMappings != null && {
      MessageFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.MessageFieldMappings, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.ThreadFieldMappings != null && {
      ThreadFieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.ThreadFieldMappings, context),
    }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

const serializeAws_json1_1Relevance = (input: Relevance, context: __SerdeContext): any => {
  return {
    ...(input.Duration != null && { Duration: input.Duration }),
    ...(input.Freshness != null && { Freshness: input.Freshness }),
    ...(input.Importance != null && { Importance: input.Importance }),
    ...(input.RankOrder != null && { RankOrder: input.RankOrder }),
    ...(input.ValueImportanceMap != null && {
      ValueImportanceMap: serializeAws_json1_1ValueImportanceMap(input.ValueImportanceMap, context),
    }),
  };
};

const serializeAws_json1_1RelevanceFeedback = (input: RelevanceFeedback, context: __SerdeContext): any => {
  return {
    ...(input.RelevanceValue != null && { RelevanceValue: input.RelevanceValue }),
    ...(input.ResultId != null && { ResultId: input.ResultId }),
  };
};

const serializeAws_json1_1RelevanceFeedbackList = (input: RelevanceFeedback[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1RelevanceFeedback(entry, context);
    });
};

const serializeAws_json1_1RepositoryNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1S3DataSourceConfiguration = (
  input: S3DataSourceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessControlListConfiguration != null && {
      AccessControlListConfiguration: serializeAws_json1_1AccessControlListConfiguration(
        input.AccessControlListConfiguration,
        context
      ),
    }),
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.DocumentsMetadataConfiguration != null && {
      DocumentsMetadataConfiguration: serializeAws_json1_1DocumentsMetadataConfiguration(
        input.DocumentsMetadataConfiguration,
        context
      ),
    }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.InclusionPrefixes != null && {
      InclusionPrefixes: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPrefixes, context),
    }),
  };
};

const serializeAws_json1_1S3Path = (input: S3Path, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Key != null && { Key: input.Key }),
  };
};

const serializeAws_json1_1SaaSConfiguration = (input: SaaSConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.HostUrl != null && { HostUrl: input.HostUrl }),
    ...(input.OrganizationName != null && { OrganizationName: input.OrganizationName }),
  };
};

const serializeAws_json1_1SalesforceChatterFeedConfiguration = (
  input: SalesforceChatterFeedConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentDataFieldName != null && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName != null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.FieldMappings != null && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.IncludeFilterTypes != null && {
      IncludeFilterTypes: serializeAws_json1_1SalesforceChatterFeedIncludeFilterTypes(
        input.IncludeFilterTypes,
        context
      ),
    }),
  };
};

const serializeAws_json1_1SalesforceChatterFeedIncludeFilterTypes = (
  input: (SalesforceChatterFeedIncludeFilterType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SalesforceConfiguration = (input: SalesforceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ChatterFeedConfiguration != null && {
      ChatterFeedConfiguration: serializeAws_json1_1SalesforceChatterFeedConfiguration(
        input.ChatterFeedConfiguration,
        context
      ),
    }),
    ...(input.CrawlAttachments != null && { CrawlAttachments: input.CrawlAttachments }),
    ...(input.ExcludeAttachmentFilePatterns != null && {
      ExcludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
        input.ExcludeAttachmentFilePatterns,
        context
      ),
    }),
    ...(input.IncludeAttachmentFilePatterns != null && {
      IncludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
        input.IncludeAttachmentFilePatterns,
        context
      ),
    }),
    ...(input.KnowledgeArticleConfiguration != null && {
      KnowledgeArticleConfiguration: serializeAws_json1_1SalesforceKnowledgeArticleConfiguration(
        input.KnowledgeArticleConfiguration,
        context
      ),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.ServerUrl != null && { ServerUrl: input.ServerUrl }),
    ...(input.StandardObjectAttachmentConfiguration != null && {
      StandardObjectAttachmentConfiguration: serializeAws_json1_1SalesforceStandardObjectAttachmentConfiguration(
        input.StandardObjectAttachmentConfiguration,
        context
      ),
    }),
    ...(input.StandardObjectConfigurations != null && {
      StandardObjectConfigurations: serializeAws_json1_1SalesforceStandardObjectConfigurationList(
        input.StandardObjectConfigurations,
        context
      ),
    }),
  };
};

const serializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfiguration = (
  input: SalesforceCustomKnowledgeArticleTypeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentDataFieldName != null && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName != null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.FieldMappings != null && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfigurationList = (
  input: SalesforceCustomKnowledgeArticleTypeConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfiguration(entry, context);
    });
};

const serializeAws_json1_1SalesforceKnowledgeArticleConfiguration = (
  input: SalesforceKnowledgeArticleConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomKnowledgeArticleTypeConfigurations != null && {
      CustomKnowledgeArticleTypeConfigurations:
        serializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfigurationList(
          input.CustomKnowledgeArticleTypeConfigurations,
          context
        ),
    }),
    ...(input.IncludedStates != null && {
      IncludedStates: serializeAws_json1_1SalesforceKnowledgeArticleStateList(input.IncludedStates, context),
    }),
    ...(input.StandardKnowledgeArticleTypeConfiguration != null && {
      StandardKnowledgeArticleTypeConfiguration:
        serializeAws_json1_1SalesforceStandardKnowledgeArticleTypeConfiguration(
          input.StandardKnowledgeArticleTypeConfiguration,
          context
        ),
    }),
  };
};

const serializeAws_json1_1SalesforceKnowledgeArticleStateList = (
  input: (SalesforceKnowledgeArticleState | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SalesforceStandardKnowledgeArticleTypeConfiguration = (
  input: SalesforceStandardKnowledgeArticleTypeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentDataFieldName != null && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName != null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.FieldMappings != null && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
  };
};

const serializeAws_json1_1SalesforceStandardObjectAttachmentConfiguration = (
  input: SalesforceStandardObjectAttachmentConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentTitleFieldName != null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.FieldMappings != null && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
  };
};

const serializeAws_json1_1SalesforceStandardObjectConfiguration = (
  input: SalesforceStandardObjectConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentDataFieldName != null && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName != null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.FieldMappings != null && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1SalesforceStandardObjectConfigurationList = (
  input: SalesforceStandardObjectConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1SalesforceStandardObjectConfiguration(entry, context);
    });
};

const serializeAws_json1_1Search = (input: Search, context: __SerdeContext): any => {
  return {
    ...(input.Displayable != null && { Displayable: input.Displayable }),
    ...(input.Facetable != null && { Facetable: input.Facetable }),
    ...(input.Searchable != null && { Searchable: input.Searchable }),
    ...(input.Sortable != null && { Sortable: input.Sortable }),
  };
};

const serializeAws_json1_1SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SeedUrlConfiguration = (input: SeedUrlConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SeedUrls != null && { SeedUrls: serializeAws_json1_1SeedUrlList(input.SeedUrls, context) }),
    ...(input.WebCrawlerMode != null && { WebCrawlerMode: input.WebCrawlerMode }),
  };
};

const serializeAws_json1_1SeedUrlList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ServerSideEncryptionConfiguration = (
  input: ServerSideEncryptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
  };
};

const serializeAws_json1_1ServiceNowConfiguration = (input: ServiceNowConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.HostUrl != null && { HostUrl: input.HostUrl }),
    ...(input.KnowledgeArticleConfiguration != null && {
      KnowledgeArticleConfiguration: serializeAws_json1_1ServiceNowKnowledgeArticleConfiguration(
        input.KnowledgeArticleConfiguration,
        context
      ),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.ServiceCatalogConfiguration != null && {
      ServiceCatalogConfiguration: serializeAws_json1_1ServiceNowServiceCatalogConfiguration(
        input.ServiceCatalogConfiguration,
        context
      ),
    }),
    ...(input.ServiceNowBuildVersion != null && { ServiceNowBuildVersion: input.ServiceNowBuildVersion }),
  };
};

const serializeAws_json1_1ServiceNowKnowledgeArticleConfiguration = (
  input: ServiceNowKnowledgeArticleConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CrawlAttachments != null && { CrawlAttachments: input.CrawlAttachments }),
    ...(input.DocumentDataFieldName != null && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName != null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.ExcludeAttachmentFilePatterns != null && {
      ExcludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
        input.ExcludeAttachmentFilePatterns,
        context
      ),
    }),
    ...(input.FieldMappings != null && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.FilterQuery != null && { FilterQuery: input.FilterQuery }),
    ...(input.IncludeAttachmentFilePatterns != null && {
      IncludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
        input.IncludeAttachmentFilePatterns,
        context
      ),
    }),
  };
};

const serializeAws_json1_1ServiceNowServiceCatalogConfiguration = (
  input: ServiceNowServiceCatalogConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CrawlAttachments != null && { CrawlAttachments: input.CrawlAttachments }),
    ...(input.DocumentDataFieldName != null && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName != null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.ExcludeAttachmentFilePatterns != null && {
      ExcludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
        input.ExcludeAttachmentFilePatterns,
        context
      ),
    }),
    ...(input.FieldMappings != null && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.IncludeAttachmentFilePatterns != null && {
      IncludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
        input.IncludeAttachmentFilePatterns,
        context
      ),
    }),
  };
};

const serializeAws_json1_1SharePointConfiguration = (input: SharePointConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationType != null && { AuthenticationType: input.AuthenticationType }),
    ...(input.CrawlAttachments != null && { CrawlAttachments: input.CrawlAttachments }),
    ...(input.DisableLocalGroups != null && { DisableLocalGroups: input.DisableLocalGroups }),
    ...(input.DocumentTitleFieldName != null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.FieldMappings != null && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.ProxyConfiguration != null && {
      ProxyConfiguration: serializeAws_json1_1ProxyConfiguration(input.ProxyConfiguration, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.SharePointVersion != null && { SharePointVersion: input.SharePointVersion }),
    ...(input.SslCertificateS3Path != null && {
      SslCertificateS3Path: serializeAws_json1_1S3Path(input.SslCertificateS3Path, context),
    }),
    ...(input.Urls != null && { Urls: serializeAws_json1_1SharePointUrlList(input.Urls, context) }),
    ...(input.UseChangeLog != null && { UseChangeLog: input.UseChangeLog }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

const serializeAws_json1_1SharePointUrlList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SiteMapsConfiguration = (input: SiteMapsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SiteMaps != null && { SiteMaps: serializeAws_json1_1SiteMapsList(input.SiteMaps, context) }),
  };
};

const serializeAws_json1_1SiteMapsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SlackConfiguration = (input: SlackConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CrawlBotMessage != null && { CrawlBotMessage: input.CrawlBotMessage }),
    ...(input.ExcludeArchived != null && { ExcludeArchived: input.ExcludeArchived }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.FieldMappings != null && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.LookBackPeriod != null && { LookBackPeriod: input.LookBackPeriod }),
    ...(input.PrivateChannelFilter != null && {
      PrivateChannelFilter: serializeAws_json1_1PrivateChannelFilter(input.PrivateChannelFilter, context),
    }),
    ...(input.PublicChannelFilter != null && {
      PublicChannelFilter: serializeAws_json1_1PublicChannelFilter(input.PublicChannelFilter, context),
    }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.SinceCrawlDate != null && { SinceCrawlDate: input.SinceCrawlDate }),
    ...(input.SlackEntityList != null && {
      SlackEntityList: serializeAws_json1_1SlackEntityList(input.SlackEntityList, context),
    }),
    ...(input.TeamId != null && { TeamId: input.TeamId }),
    ...(input.UseChangeLog != null && { UseChangeLog: input.UseChangeLog }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

const serializeAws_json1_1SlackEntityList = (input: (SlackEntity | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SortingConfiguration = (input: SortingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DocumentAttributeKey != null && { DocumentAttributeKey: input.DocumentAttributeKey }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_json1_1SpellCorrectionConfiguration = (
  input: SpellCorrectionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.IncludeQuerySpellCheckSuggestions != null && {
      IncludeQuerySpellCheckSuggestions: input.IncludeQuerySpellCheckSuggestions,
    }),
  };
};

const serializeAws_json1_1SqlConfiguration = (input: SqlConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.QueryIdentifiersEnclosingOption != null && {
      QueryIdentifiersEnclosingOption: input.QueryIdentifiersEnclosingOption,
    }),
  };
};

const serializeAws_json1_1StartDataSourceSyncJobRequest = (
  input: StartDataSourceSyncJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1StopDataSourceSyncJobRequest = (
  input: StopDataSourceSyncJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SubmitFeedbackRequest = (input: SubmitFeedbackRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClickFeedbackItems != null && {
      ClickFeedbackItems: serializeAws_json1_1ClickFeedbackList(input.ClickFeedbackItems, context),
    }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.QueryId != null && { QueryId: input.QueryId }),
    ...(input.RelevanceFeedbackItems != null && {
      RelevanceFeedbackItems: serializeAws_json1_1RelevanceFeedbackList(input.RelevanceFeedbackItems, context),
    }),
  };
};

const serializeAws_json1_1SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1Template = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

const serializeAws_json1_1TemplateConfiguration = (input: TemplateConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Template != null && { Template: serializeAws_json1_1Template(input.Template, context) }),
  };
};

const serializeAws_json1_1TimeRange = (input: TimeRange, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateAccessControlConfigurationRequest = (
  input: UpdateAccessControlConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessControlList != null && {
      AccessControlList: serializeAws_json1_1PrincipalList(input.AccessControlList, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.HierarchicalAccessControlList != null && {
      HierarchicalAccessControlList: serializeAws_json1_1HierarchicalPrincipalList(
        input.HierarchicalAccessControlList,
        context
      ),
    }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateDataSourceRequest = (input: UpdateDataSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Configuration != null && {
      Configuration: serializeAws_json1_1DataSourceConfiguration(input.Configuration, context),
    }),
    ...(input.CustomDocumentEnrichmentConfiguration != null && {
      CustomDocumentEnrichmentConfiguration: serializeAws_json1_1CustomDocumentEnrichmentConfiguration(
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
      VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

const serializeAws_json1_1UpdateExperienceRequest = (input: UpdateExperienceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Configuration != null && {
      Configuration: serializeAws_json1_1ExperienceConfiguration(input.Configuration, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_1UpdateIndexRequest = (input: UpdateIndexRequest, context: __SerdeContext): any => {
  return {
    ...(input.CapacityUnits != null && {
      CapacityUnits: serializeAws_json1_1CapacityUnitsConfiguration(input.CapacityUnits, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DocumentMetadataConfigurationUpdates != null && {
      DocumentMetadataConfigurationUpdates: serializeAws_json1_1DocumentMetadataConfigurationList(
        input.DocumentMetadataConfigurationUpdates,
        context
      ),
    }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.UserContextPolicy != null && { UserContextPolicy: input.UserContextPolicy }),
    ...(input.UserGroupResolutionConfiguration != null && {
      UserGroupResolutionConfiguration: serializeAws_json1_1UserGroupResolutionConfiguration(
        input.UserGroupResolutionConfiguration,
        context
      ),
    }),
    ...(input.UserTokenConfigurations != null && {
      UserTokenConfigurations: serializeAws_json1_1UserTokenConfigurationList(input.UserTokenConfigurations, context),
    }),
  };
};

const serializeAws_json1_1UpdateQuerySuggestionsBlockListRequest = (
  input: UpdateQuerySuggestionsBlockListRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.SourceS3Path != null && { SourceS3Path: serializeAws_json1_1S3Path(input.SourceS3Path, context) }),
  };
};

const serializeAws_json1_1UpdateQuerySuggestionsConfigRequest = (
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

const serializeAws_json1_1UpdateThesaurusRequest = (input: UpdateThesaurusRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.IndexId != null && { IndexId: input.IndexId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.SourceS3Path != null && { SourceS3Path: serializeAws_json1_1S3Path(input.SourceS3Path, context) }),
  };
};

const serializeAws_json1_1Urls = (input: Urls, context: __SerdeContext): any => {
  return {
    ...(input.SeedUrlConfiguration != null && {
      SeedUrlConfiguration: serializeAws_json1_1SeedUrlConfiguration(input.SeedUrlConfiguration, context),
    }),
    ...(input.SiteMapsConfiguration != null && {
      SiteMapsConfiguration: serializeAws_json1_1SiteMapsConfiguration(input.SiteMapsConfiguration, context),
    }),
  };
};

const serializeAws_json1_1UserContext = (input: UserContext, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceGroups != null && {
      DataSourceGroups: serializeAws_json1_1DataSourceGroups(input.DataSourceGroups, context),
    }),
    ...(input.Groups != null && { Groups: serializeAws_json1_1Groups(input.Groups, context) }),
    ...(input.Token != null && { Token: input.Token }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

const serializeAws_json1_1UserGroupResolutionConfiguration = (
  input: UserGroupResolutionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.UserGroupResolutionMode != null && { UserGroupResolutionMode: input.UserGroupResolutionMode }),
  };
};

const serializeAws_json1_1UserIdentityConfiguration = (
  input: UserIdentityConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityAttributeName != null && { IdentityAttributeName: input.IdentityAttributeName }),
  };
};

const serializeAws_json1_1UserTokenConfiguration = (input: UserTokenConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.JsonTokenTypeConfiguration != null && {
      JsonTokenTypeConfiguration: serializeAws_json1_1JsonTokenTypeConfiguration(
        input.JsonTokenTypeConfiguration,
        context
      ),
    }),
    ...(input.JwtTokenTypeConfiguration != null && {
      JwtTokenTypeConfiguration: serializeAws_json1_1JwtTokenTypeConfiguration(
        input.JwtTokenTypeConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_json1_1UserTokenConfigurationList = (
  input: UserTokenConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1UserTokenConfiguration(entry, context);
    });
};

const serializeAws_json1_1ValueImportanceMap = (input: Record<string, number>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1WebCrawlerConfiguration = (input: WebCrawlerConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationConfiguration != null && {
      AuthenticationConfiguration: serializeAws_json1_1AuthenticationConfiguration(
        input.AuthenticationConfiguration,
        context
      ),
    }),
    ...(input.CrawlDepth != null && { CrawlDepth: input.CrawlDepth }),
    ...(input.MaxContentSizePerPageInMegaBytes != null && {
      MaxContentSizePerPageInMegaBytes: __serializeFloat(input.MaxContentSizePerPageInMegaBytes),
    }),
    ...(input.MaxLinksPerPage != null && { MaxLinksPerPage: input.MaxLinksPerPage }),
    ...(input.MaxUrlsPerMinuteCrawlRate != null && { MaxUrlsPerMinuteCrawlRate: input.MaxUrlsPerMinuteCrawlRate }),
    ...(input.ProxyConfiguration != null && {
      ProxyConfiguration: serializeAws_json1_1ProxyConfiguration(input.ProxyConfiguration, context),
    }),
    ...(input.UrlExclusionPatterns != null && {
      UrlExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
        input.UrlExclusionPatterns,
        context
      ),
    }),
    ...(input.UrlInclusionPatterns != null && {
      UrlInclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
        input.UrlInclusionPatterns,
        context
      ),
    }),
    ...(input.Urls != null && { Urls: serializeAws_json1_1Urls(input.Urls, context) }),
  };
};

const serializeAws_json1_1WorkDocsConfiguration = (input: WorkDocsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CrawlComments != null && { CrawlComments: input.CrawlComments }),
    ...(input.ExclusionPatterns != null && {
      ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.FieldMappings != null && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.InclusionPatterns != null && {
      InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.UseChangeLog != null && { UseChangeLog: input.UseChangeLog }),
  };
};

const deserializeAws_json1_1AccessControlConfigurationSummary = (
  output: any,
  context: __SerdeContext
): AccessControlConfigurationSummary => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_json1_1AccessControlConfigurationSummaryList = (
  output: any,
  context: __SerdeContext
): AccessControlConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AccessControlConfigurationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AccessControlListConfiguration = (
  output: any,
  context: __SerdeContext
): AccessControlListConfiguration => {
  return {
    KeyPath: __expectString(output.KeyPath),
  } as any;
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AclConfiguration = (output: any, context: __SerdeContext): AclConfiguration => {
  return {
    AllowedGroupsColumnName: __expectString(output.AllowedGroupsColumnName),
  } as any;
};

const deserializeAws_json1_1AdditionalResultAttribute = (
  output: any,
  context: __SerdeContext
): AdditionalResultAttribute => {
  return {
    Key: __expectString(output.Key),
    Value:
      output.Value != null ? deserializeAws_json1_1AdditionalResultAttributeValue(output.Value, context) : undefined,
    ValueType: __expectString(output.ValueType),
  } as any;
};

const deserializeAws_json1_1AdditionalResultAttributeList = (
  output: any,
  context: __SerdeContext
): AdditionalResultAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AdditionalResultAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AdditionalResultAttributeValue = (
  output: any,
  context: __SerdeContext
): AdditionalResultAttributeValue => {
  return {
    TextWithHighlightsValue:
      output.TextWithHighlightsValue != null
        ? deserializeAws_json1_1TextWithHighlights(output.TextWithHighlightsValue, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AlfrescoConfiguration = (output: any, context: __SerdeContext): AlfrescoConfiguration => {
  return {
    BlogFieldMappings:
      output.BlogFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.BlogFieldMappings, context)
        : undefined,
    CrawlComments: __expectBoolean(output.CrawlComments),
    CrawlSystemFolders: __expectBoolean(output.CrawlSystemFolders),
    DocumentLibraryFieldMappings:
      output.DocumentLibraryFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.DocumentLibraryFieldMappings, context)
        : undefined,
    EntityFilter:
      output.EntityFilter != null ? deserializeAws_json1_1EntityFilter(output.EntityFilter, context) : undefined,
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    SiteId: __expectString(output.SiteId),
    SiteUrl: __expectString(output.SiteUrl),
    SslCertificateS3Path:
      output.SslCertificateS3Path != null
        ? deserializeAws_json1_1S3Path(output.SslCertificateS3Path, context)
        : undefined,
    VpcConfiguration:
      output.VpcConfiguration != null
        ? deserializeAws_json1_1DataSourceVpcConfiguration(output.VpcConfiguration, context)
        : undefined,
    WikiFieldMappings:
      output.WikiFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.WikiFieldMappings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AssociateEntitiesToExperienceFailedEntityList = (
  output: any,
  context: __SerdeContext
): FailedEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedEntity(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AssociateEntitiesToExperienceResponse = (
  output: any,
  context: __SerdeContext
): AssociateEntitiesToExperienceResponse => {
  return {
    FailedEntityList:
      output.FailedEntityList != null
        ? deserializeAws_json1_1AssociateEntitiesToExperienceFailedEntityList(output.FailedEntityList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AssociatePersonasToEntitiesResponse = (
  output: any,
  context: __SerdeContext
): AssociatePersonasToEntitiesResponse => {
  return {
    FailedEntityList:
      output.FailedEntityList != null
        ? deserializeAws_json1_1FailedEntityList(output.FailedEntityList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AuthenticationConfiguration = (
  output: any,
  context: __SerdeContext
): AuthenticationConfiguration => {
  return {
    BasicAuthentication:
      output.BasicAuthentication != null
        ? deserializeAws_json1_1BasicAuthenticationConfigurationList(output.BasicAuthentication, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BasicAuthenticationConfiguration = (
  output: any,
  context: __SerdeContext
): BasicAuthenticationConfiguration => {
  return {
    Credentials: __expectString(output.Credentials),
    Host: __expectString(output.Host),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_json1_1BasicAuthenticationConfigurationList = (
  output: any,
  context: __SerdeContext
): BasicAuthenticationConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BasicAuthenticationConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchDeleteDocumentResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteDocumentResponse => {
  return {
    FailedDocuments:
      output.FailedDocuments != null
        ? deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocuments(output.FailedDocuments, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocument = (
  output: any,
  context: __SerdeContext
): BatchDeleteDocumentResponseFailedDocument => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocuments = (
  output: any,
  context: __SerdeContext
): BatchDeleteDocumentResponseFailedDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocument(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchGetDocumentStatusResponse = (
  output: any,
  context: __SerdeContext
): BatchGetDocumentStatusResponse => {
  return {
    DocumentStatusList:
      output.DocumentStatusList != null
        ? deserializeAws_json1_1DocumentStatusList(output.DocumentStatusList, context)
        : undefined,
    Errors:
      output.Errors != null
        ? deserializeAws_json1_1BatchGetDocumentStatusResponseErrors(output.Errors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetDocumentStatusResponseError = (
  output: any,
  context: __SerdeContext
): BatchGetDocumentStatusResponseError => {
  return {
    DocumentId: __expectString(output.DocumentId),
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

const deserializeAws_json1_1BatchGetDocumentStatusResponseErrors = (
  output: any,
  context: __SerdeContext
): BatchGetDocumentStatusResponseError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchGetDocumentStatusResponseError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchPutDocumentResponse = (
  output: any,
  context: __SerdeContext
): BatchPutDocumentResponse => {
  return {
    FailedDocuments:
      output.FailedDocuments != null
        ? deserializeAws_json1_1BatchPutDocumentResponseFailedDocuments(output.FailedDocuments, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchPutDocumentResponseFailedDocument = (
  output: any,
  context: __SerdeContext
): BatchPutDocumentResponseFailedDocument => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_json1_1BatchPutDocumentResponseFailedDocuments = (
  output: any,
  context: __SerdeContext
): BatchPutDocumentResponseFailedDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchPutDocumentResponseFailedDocument(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BoxConfiguration = (output: any, context: __SerdeContext): BoxConfiguration => {
  return {
    CommentFieldMappings:
      output.CommentFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.CommentFieldMappings, context)
        : undefined,
    CrawlComments: __expectBoolean(output.CrawlComments),
    CrawlTasks: __expectBoolean(output.CrawlTasks),
    CrawlWebLinks: __expectBoolean(output.CrawlWebLinks),
    EnterpriseId: __expectString(output.EnterpriseId),
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    FileFieldMappings:
      output.FileFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FileFieldMappings, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    TaskFieldMappings:
      output.TaskFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.TaskFieldMappings, context)
        : undefined,
    UseChangeLog: __expectBoolean(output.UseChangeLog),
    VpcConfiguration:
      output.VpcConfiguration != null
        ? deserializeAws_json1_1DataSourceVpcConfiguration(output.VpcConfiguration, context)
        : undefined,
    WebLinkFieldMappings:
      output.WebLinkFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.WebLinkFieldMappings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CapacityUnitsConfiguration = (
  output: any,
  context: __SerdeContext
): CapacityUnitsConfiguration => {
  return {
    QueryCapacityUnits: __expectInt32(output.QueryCapacityUnits),
    StorageCapacityUnits: __expectInt32(output.StorageCapacityUnits),
  } as any;
};

const deserializeAws_json1_1ChangeDetectingColumns = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ColumnConfiguration = (output: any, context: __SerdeContext): ColumnConfiguration => {
  return {
    ChangeDetectingColumns:
      output.ChangeDetectingColumns != null
        ? deserializeAws_json1_1ChangeDetectingColumns(output.ChangeDetectingColumns, context)
        : undefined,
    DocumentDataColumnName: __expectString(output.DocumentDataColumnName),
    DocumentIdColumnName: __expectString(output.DocumentIdColumnName),
    DocumentTitleColumnName: __expectString(output.DocumentTitleColumnName),
    FieldMappings:
      output.FieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ConfluenceAttachmentConfiguration = (
  output: any,
  context: __SerdeContext
): ConfluenceAttachmentConfiguration => {
  return {
    AttachmentFieldMappings:
      output.AttachmentFieldMappings != null
        ? deserializeAws_json1_1ConfluenceAttachmentFieldMappingsList(output.AttachmentFieldMappings, context)
        : undefined,
    CrawlAttachments: __expectBoolean(output.CrawlAttachments),
  } as any;
};

const deserializeAws_json1_1ConfluenceAttachmentFieldMappingsList = (
  output: any,
  context: __SerdeContext
): ConfluenceAttachmentToIndexFieldMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping = (
  output: any,
  context: __SerdeContext
): ConfluenceAttachmentToIndexFieldMapping => {
  return {
    DataSourceFieldName: __expectString(output.DataSourceFieldName),
    DateFieldFormat: __expectString(output.DateFieldFormat),
    IndexFieldName: __expectString(output.IndexFieldName),
  } as any;
};

const deserializeAws_json1_1ConfluenceBlogConfiguration = (
  output: any,
  context: __SerdeContext
): ConfluenceBlogConfiguration => {
  return {
    BlogFieldMappings:
      output.BlogFieldMappings != null
        ? deserializeAws_json1_1ConfluenceBlogFieldMappingsList(output.BlogFieldMappings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConfluenceBlogFieldMappingsList = (
  output: any,
  context: __SerdeContext
): ConfluenceBlogToIndexFieldMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConfluenceBlogToIndexFieldMapping(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConfluenceBlogToIndexFieldMapping = (
  output: any,
  context: __SerdeContext
): ConfluenceBlogToIndexFieldMapping => {
  return {
    DataSourceFieldName: __expectString(output.DataSourceFieldName),
    DateFieldFormat: __expectString(output.DateFieldFormat),
    IndexFieldName: __expectString(output.IndexFieldName),
  } as any;
};

const deserializeAws_json1_1ConfluenceConfiguration = (
  output: any,
  context: __SerdeContext
): ConfluenceConfiguration => {
  return {
    AttachmentConfiguration:
      output.AttachmentConfiguration != null
        ? deserializeAws_json1_1ConfluenceAttachmentConfiguration(output.AttachmentConfiguration, context)
        : undefined,
    AuthenticationType: __expectString(output.AuthenticationType),
    BlogConfiguration:
      output.BlogConfiguration != null
        ? deserializeAws_json1_1ConfluenceBlogConfiguration(output.BlogConfiguration, context)
        : undefined,
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    PageConfiguration:
      output.PageConfiguration != null
        ? deserializeAws_json1_1ConfluencePageConfiguration(output.PageConfiguration, context)
        : undefined,
    ProxyConfiguration:
      output.ProxyConfiguration != null
        ? deserializeAws_json1_1ProxyConfiguration(output.ProxyConfiguration, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    ServerUrl: __expectString(output.ServerUrl),
    SpaceConfiguration:
      output.SpaceConfiguration != null
        ? deserializeAws_json1_1ConfluenceSpaceConfiguration(output.SpaceConfiguration, context)
        : undefined,
    Version: __expectString(output.Version),
    VpcConfiguration:
      output.VpcConfiguration != null
        ? deserializeAws_json1_1DataSourceVpcConfiguration(output.VpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConfluencePageConfiguration = (
  output: any,
  context: __SerdeContext
): ConfluencePageConfiguration => {
  return {
    PageFieldMappings:
      output.PageFieldMappings != null
        ? deserializeAws_json1_1ConfluencePageFieldMappingsList(output.PageFieldMappings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConfluencePageFieldMappingsList = (
  output: any,
  context: __SerdeContext
): ConfluencePageToIndexFieldMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConfluencePageToIndexFieldMapping(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConfluencePageToIndexFieldMapping = (
  output: any,
  context: __SerdeContext
): ConfluencePageToIndexFieldMapping => {
  return {
    DataSourceFieldName: __expectString(output.DataSourceFieldName),
    DateFieldFormat: __expectString(output.DateFieldFormat),
    IndexFieldName: __expectString(output.IndexFieldName),
  } as any;
};

const deserializeAws_json1_1ConfluenceSpaceConfiguration = (
  output: any,
  context: __SerdeContext
): ConfluenceSpaceConfiguration => {
  return {
    CrawlArchivedSpaces: __expectBoolean(output.CrawlArchivedSpaces),
    CrawlPersonalSpaces: __expectBoolean(output.CrawlPersonalSpaces),
    ExcludeSpaces:
      output.ExcludeSpaces != null
        ? deserializeAws_json1_1ConfluenceSpaceList(output.ExcludeSpaces, context)
        : undefined,
    IncludeSpaces:
      output.IncludeSpaces != null
        ? deserializeAws_json1_1ConfluenceSpaceList(output.IncludeSpaces, context)
        : undefined,
    SpaceFieldMappings:
      output.SpaceFieldMappings != null
        ? deserializeAws_json1_1ConfluenceSpaceFieldMappingsList(output.SpaceFieldMappings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConfluenceSpaceFieldMappingsList = (
  output: any,
  context: __SerdeContext
): ConfluenceSpaceToIndexFieldMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConfluenceSpaceToIndexFieldMapping(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConfluenceSpaceList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ConfluenceSpaceToIndexFieldMapping = (
  output: any,
  context: __SerdeContext
): ConfluenceSpaceToIndexFieldMapping => {
  return {
    DataSourceFieldName: __expectString(output.DataSourceFieldName),
    DateFieldFormat: __expectString(output.DateFieldFormat),
    IndexFieldName: __expectString(output.IndexFieldName),
  } as any;
};

const deserializeAws_json1_1ConnectionConfiguration = (
  output: any,
  context: __SerdeContext
): ConnectionConfiguration => {
  return {
    DatabaseHost: __expectString(output.DatabaseHost),
    DatabaseName: __expectString(output.DatabaseName),
    DatabasePort: __expectInt32(output.DatabasePort),
    SecretArn: __expectString(output.SecretArn),
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_json1_1ContentSourceConfiguration = (
  output: any,
  context: __SerdeContext
): ContentSourceConfiguration => {
  return {
    DataSourceIds:
      output.DataSourceIds != null ? deserializeAws_json1_1DataSourceIdList(output.DataSourceIds, context) : undefined,
    DirectPutContent: __expectBoolean(output.DirectPutContent),
    FaqIds: output.FaqIds != null ? deserializeAws_json1_1FaqIdsList(output.FaqIds, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Correction = (output: any, context: __SerdeContext): Correction => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    CorrectedTerm: __expectString(output.CorrectedTerm),
    EndOffset: __expectInt32(output.EndOffset),
    Term: __expectString(output.Term),
  } as any;
};

const deserializeAws_json1_1CorrectionList = (output: any, context: __SerdeContext): Correction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Correction(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CreateAccessControlConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateAccessControlConfigurationResponse => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_json1_1CreateDataSourceResponse = (
  output: any,
  context: __SerdeContext
): CreateDataSourceResponse => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_json1_1CreateExperienceResponse = (
  output: any,
  context: __SerdeContext
): CreateExperienceResponse => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_json1_1CreateFaqResponse = (output: any, context: __SerdeContext): CreateFaqResponse => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_json1_1CreateIndexResponse = (output: any, context: __SerdeContext): CreateIndexResponse => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_json1_1CreateQuerySuggestionsBlockListResponse = (
  output: any,
  context: __SerdeContext
): CreateQuerySuggestionsBlockListResponse => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_json1_1CreateThesaurusResponse = (
  output: any,
  context: __SerdeContext
): CreateThesaurusResponse => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_json1_1CustomDocumentEnrichmentConfiguration = (
  output: any,
  context: __SerdeContext
): CustomDocumentEnrichmentConfiguration => {
  return {
    InlineConfigurations:
      output.InlineConfigurations != null
        ? deserializeAws_json1_1InlineCustomDocumentEnrichmentConfigurationList(output.InlineConfigurations, context)
        : undefined,
    PostExtractionHookConfiguration:
      output.PostExtractionHookConfiguration != null
        ? deserializeAws_json1_1HookConfiguration(output.PostExtractionHookConfiguration, context)
        : undefined,
    PreExtractionHookConfiguration:
      output.PreExtractionHookConfiguration != null
        ? deserializeAws_json1_1HookConfiguration(output.PreExtractionHookConfiguration, context)
        : undefined,
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

const deserializeAws_json1_1DatabaseConfiguration = (output: any, context: __SerdeContext): DatabaseConfiguration => {
  return {
    AclConfiguration:
      output.AclConfiguration != null
        ? deserializeAws_json1_1AclConfiguration(output.AclConfiguration, context)
        : undefined,
    ColumnConfiguration:
      output.ColumnConfiguration != null
        ? deserializeAws_json1_1ColumnConfiguration(output.ColumnConfiguration, context)
        : undefined,
    ConnectionConfiguration:
      output.ConnectionConfiguration != null
        ? deserializeAws_json1_1ConnectionConfiguration(output.ConnectionConfiguration, context)
        : undefined,
    DatabaseEngineType: __expectString(output.DatabaseEngineType),
    SqlConfiguration:
      output.SqlConfiguration != null
        ? deserializeAws_json1_1SqlConfiguration(output.SqlConfiguration, context)
        : undefined,
    VpcConfiguration:
      output.VpcConfiguration != null
        ? deserializeAws_json1_1DataSourceVpcConfiguration(output.VpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DataSourceConfiguration = (
  output: any,
  context: __SerdeContext
): DataSourceConfiguration => {
  return {
    AlfrescoConfiguration:
      output.AlfrescoConfiguration != null
        ? deserializeAws_json1_1AlfrescoConfiguration(output.AlfrescoConfiguration, context)
        : undefined,
    BoxConfiguration:
      output.BoxConfiguration != null
        ? deserializeAws_json1_1BoxConfiguration(output.BoxConfiguration, context)
        : undefined,
    ConfluenceConfiguration:
      output.ConfluenceConfiguration != null
        ? deserializeAws_json1_1ConfluenceConfiguration(output.ConfluenceConfiguration, context)
        : undefined,
    DatabaseConfiguration:
      output.DatabaseConfiguration != null
        ? deserializeAws_json1_1DatabaseConfiguration(output.DatabaseConfiguration, context)
        : undefined,
    FsxConfiguration:
      output.FsxConfiguration != null
        ? deserializeAws_json1_1FsxConfiguration(output.FsxConfiguration, context)
        : undefined,
    GitHubConfiguration:
      output.GitHubConfiguration != null
        ? deserializeAws_json1_1GitHubConfiguration(output.GitHubConfiguration, context)
        : undefined,
    GoogleDriveConfiguration:
      output.GoogleDriveConfiguration != null
        ? deserializeAws_json1_1GoogleDriveConfiguration(output.GoogleDriveConfiguration, context)
        : undefined,
    JiraConfiguration:
      output.JiraConfiguration != null
        ? deserializeAws_json1_1JiraConfiguration(output.JiraConfiguration, context)
        : undefined,
    OneDriveConfiguration:
      output.OneDriveConfiguration != null
        ? deserializeAws_json1_1OneDriveConfiguration(output.OneDriveConfiguration, context)
        : undefined,
    QuipConfiguration:
      output.QuipConfiguration != null
        ? deserializeAws_json1_1QuipConfiguration(output.QuipConfiguration, context)
        : undefined,
    S3Configuration:
      output.S3Configuration != null
        ? deserializeAws_json1_1S3DataSourceConfiguration(output.S3Configuration, context)
        : undefined,
    SalesforceConfiguration:
      output.SalesforceConfiguration != null
        ? deserializeAws_json1_1SalesforceConfiguration(output.SalesforceConfiguration, context)
        : undefined,
    ServiceNowConfiguration:
      output.ServiceNowConfiguration != null
        ? deserializeAws_json1_1ServiceNowConfiguration(output.ServiceNowConfiguration, context)
        : undefined,
    SharePointConfiguration:
      output.SharePointConfiguration != null
        ? deserializeAws_json1_1SharePointConfiguration(output.SharePointConfiguration, context)
        : undefined,
    SlackConfiguration:
      output.SlackConfiguration != null
        ? deserializeAws_json1_1SlackConfiguration(output.SlackConfiguration, context)
        : undefined,
    TemplateConfiguration:
      output.TemplateConfiguration != null
        ? deserializeAws_json1_1TemplateConfiguration(output.TemplateConfiguration, context)
        : undefined,
    WebCrawlerConfiguration:
      output.WebCrawlerConfiguration != null
        ? deserializeAws_json1_1WebCrawlerConfiguration(output.WebCrawlerConfiguration, context)
        : undefined,
    WorkDocsConfiguration:
      output.WorkDocsConfiguration != null
        ? deserializeAws_json1_1WorkDocsConfiguration(output.WorkDocsConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DataSourceIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1DataSourceInclusionsExclusionsStrings = (
  output: any,
  context: __SerdeContext
): string[] => {
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

const deserializeAws_json1_1DataSourceSummary = (output: any, context: __SerdeContext): DataSourceSummary => {
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

const deserializeAws_json1_1DataSourceSummaryList = (output: any, context: __SerdeContext): DataSourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DataSourceSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DataSourceSyncJob = (output: any, context: __SerdeContext): DataSourceSyncJob => {
  return {
    DataSourceErrorCode: __expectString(output.DataSourceErrorCode),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    ExecutionId: __expectString(output.ExecutionId),
    Metrics:
      output.Metrics != null ? deserializeAws_json1_1DataSourceSyncJobMetrics(output.Metrics, context) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DataSourceSyncJobHistoryList = (
  output: any,
  context: __SerdeContext
): DataSourceSyncJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DataSourceSyncJob(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DataSourceSyncJobMetrics = (
  output: any,
  context: __SerdeContext
): DataSourceSyncJobMetrics => {
  return {
    DocumentsAdded: __expectString(output.DocumentsAdded),
    DocumentsDeleted: __expectString(output.DocumentsDeleted),
    DocumentsFailed: __expectString(output.DocumentsFailed),
    DocumentsModified: __expectString(output.DocumentsModified),
    DocumentsScanned: __expectString(output.DocumentsScanned),
  } as any;
};

const deserializeAws_json1_1DataSourceToIndexFieldMapping = (
  output: any,
  context: __SerdeContext
): DataSourceToIndexFieldMapping => {
  return {
    DataSourceFieldName: __expectString(output.DataSourceFieldName),
    DateFieldFormat: __expectString(output.DateFieldFormat),
    IndexFieldName: __expectString(output.IndexFieldName),
  } as any;
};

const deserializeAws_json1_1DataSourceToIndexFieldMappingList = (
  output: any,
  context: __SerdeContext
): DataSourceToIndexFieldMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DataSourceToIndexFieldMapping(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DataSourceVpcConfiguration = (
  output: any,
  context: __SerdeContext
): DataSourceVpcConfiguration => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds != null
        ? deserializeAws_json1_1SecurityGroupIdList(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds: output.SubnetIds != null ? deserializeAws_json1_1SubnetIdList(output.SubnetIds, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteAccessControlConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteAccessControlConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteExperienceResponse = (
  output: any,
  context: __SerdeContext
): DeleteExperienceResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeAccessControlConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeAccessControlConfigurationResponse => {
  return {
    AccessControlList:
      output.AccessControlList != null
        ? deserializeAws_json1_1PrincipalList(output.AccessControlList, context)
        : undefined,
    Description: __expectString(output.Description),
    ErrorMessage: __expectString(output.ErrorMessage),
    HierarchicalAccessControlList:
      output.HierarchicalAccessControlList != null
        ? deserializeAws_json1_1HierarchicalPrincipalList(output.HierarchicalAccessControlList, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1DescribeDataSourceResponse = (
  output: any,
  context: __SerdeContext
): DescribeDataSourceResponse => {
  return {
    Configuration:
      output.Configuration != null
        ? deserializeAws_json1_1DataSourceConfiguration(output.Configuration, context)
        : undefined,
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    CustomDocumentEnrichmentConfiguration:
      output.CustomDocumentEnrichmentConfiguration != null
        ? deserializeAws_json1_1CustomDocumentEnrichmentConfiguration(
            output.CustomDocumentEnrichmentConfiguration,
            context
          )
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
      output.VpcConfiguration != null
        ? deserializeAws_json1_1DataSourceVpcConfiguration(output.VpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeExperienceResponse = (
  output: any,
  context: __SerdeContext
): DescribeExperienceResponse => {
  return {
    Configuration:
      output.Configuration != null
        ? deserializeAws_json1_1ExperienceConfiguration(output.Configuration, context)
        : undefined,
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    Endpoints:
      output.Endpoints != null ? deserializeAws_json1_1ExperienceEndpoints(output.Endpoints, context) : undefined,
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

const deserializeAws_json1_1DescribeFaqResponse = (output: any, context: __SerdeContext): DescribeFaqResponse => {
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
    S3Path: output.S3Path != null ? deserializeAws_json1_1S3Path(output.S3Path, context) : undefined,
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeIndexResponse = (output: any, context: __SerdeContext): DescribeIndexResponse => {
  return {
    CapacityUnits:
      output.CapacityUnits != null
        ? deserializeAws_json1_1CapacityUnitsConfiguration(output.CapacityUnits, context)
        : undefined,
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    DocumentMetadataConfigurations:
      output.DocumentMetadataConfigurations != null
        ? deserializeAws_json1_1DocumentMetadataConfigurationList(output.DocumentMetadataConfigurations, context)
        : undefined,
    Edition: __expectString(output.Edition),
    ErrorMessage: __expectString(output.ErrorMessage),
    Id: __expectString(output.Id),
    IndexStatistics:
      output.IndexStatistics != null
        ? deserializeAws_json1_1IndexStatistics(output.IndexStatistics, context)
        : undefined,
    Name: __expectString(output.Name),
    RoleArn: __expectString(output.RoleArn),
    ServerSideEncryptionConfiguration:
      output.ServerSideEncryptionConfiguration != null
        ? deserializeAws_json1_1ServerSideEncryptionConfiguration(output.ServerSideEncryptionConfiguration, context)
        : undefined,
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
    UserContextPolicy: __expectString(output.UserContextPolicy),
    UserGroupResolutionConfiguration:
      output.UserGroupResolutionConfiguration != null
        ? deserializeAws_json1_1UserGroupResolutionConfiguration(output.UserGroupResolutionConfiguration, context)
        : undefined,
    UserTokenConfigurations:
      output.UserTokenConfigurations != null
        ? deserializeAws_json1_1UserTokenConfigurationList(output.UserTokenConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribePrincipalMappingResponse = (
  output: any,
  context: __SerdeContext
): DescribePrincipalMappingResponse => {
  return {
    DataSourceId: __expectString(output.DataSourceId),
    GroupId: __expectString(output.GroupId),
    GroupOrderingIdSummaries:
      output.GroupOrderingIdSummaries != null
        ? deserializeAws_json1_1GroupOrderingIdSummaries(output.GroupOrderingIdSummaries, context)
        : undefined,
    IndexId: __expectString(output.IndexId),
  } as any;
};

const deserializeAws_json1_1DescribeQuerySuggestionsBlockListResponse = (
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
    SourceS3Path: output.SourceS3Path != null ? deserializeAws_json1_1S3Path(output.SourceS3Path, context) : undefined,
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeQuerySuggestionsConfigResponse = (
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

const deserializeAws_json1_1DescribeThesaurusResponse = (
  output: any,
  context: __SerdeContext
): DescribeThesaurusResponse => {
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
    SourceS3Path: output.SourceS3Path != null ? deserializeAws_json1_1S3Path(output.SourceS3Path, context) : undefined,
    Status: __expectString(output.Status),
    SynonymRuleCount: __expectLong(output.SynonymRuleCount),
    TermCount: __expectLong(output.TermCount),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

const deserializeAws_json1_1DisassociateEntitiesFromExperienceResponse = (
  output: any,
  context: __SerdeContext
): DisassociateEntitiesFromExperienceResponse => {
  return {
    FailedEntityList:
      output.FailedEntityList != null
        ? deserializeAws_json1_1FailedEntityList(output.FailedEntityList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DisassociatePersonasFromEntitiesResponse = (
  output: any,
  context: __SerdeContext
): DisassociatePersonasFromEntitiesResponse => {
  return {
    FailedEntityList:
      output.FailedEntityList != null
        ? deserializeAws_json1_1FailedEntityList(output.FailedEntityList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentAttribute = (output: any, context: __SerdeContext): DocumentAttribute => {
  return {
    Key: __expectString(output.Key),
    Value: output.Value != null ? deserializeAws_json1_1DocumentAttributeValue(output.Value, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentAttributeCondition = (
  output: any,
  context: __SerdeContext
): DocumentAttributeCondition => {
  return {
    ConditionDocumentAttributeKey: __expectString(output.ConditionDocumentAttributeKey),
    ConditionOnValue:
      output.ConditionOnValue != null
        ? deserializeAws_json1_1DocumentAttributeValue(output.ConditionOnValue, context)
        : undefined,
    Operator: __expectString(output.Operator),
  } as any;
};

const deserializeAws_json1_1DocumentAttributeList = (output: any, context: __SerdeContext): DocumentAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DocumentAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DocumentAttributeStringListValue = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1DocumentAttributeTarget = (
  output: any,
  context: __SerdeContext
): DocumentAttributeTarget => {
  return {
    TargetDocumentAttributeKey: __expectString(output.TargetDocumentAttributeKey),
    TargetDocumentAttributeValue:
      output.TargetDocumentAttributeValue != null
        ? deserializeAws_json1_1DocumentAttributeValue(output.TargetDocumentAttributeValue, context)
        : undefined,
    TargetDocumentAttributeValueDeletion: __expectBoolean(output.TargetDocumentAttributeValueDeletion),
  } as any;
};

const deserializeAws_json1_1DocumentAttributeValue = (output: any, context: __SerdeContext): DocumentAttributeValue => {
  return {
    DateValue:
      output.DateValue != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateValue))) : undefined,
    LongValue: __expectLong(output.LongValue),
    StringListValue:
      output.StringListValue != null
        ? deserializeAws_json1_1DocumentAttributeStringListValue(output.StringListValue, context)
        : undefined,
    StringValue: __expectString(output.StringValue),
  } as any;
};

const deserializeAws_json1_1DocumentAttributeValueCountPair = (
  output: any,
  context: __SerdeContext
): DocumentAttributeValueCountPair => {
  return {
    Count: __expectInt32(output.Count),
    DocumentAttributeValue:
      output.DocumentAttributeValue != null
        ? deserializeAws_json1_1DocumentAttributeValue(output.DocumentAttributeValue, context)
        : undefined,
    FacetResults:
      output.FacetResults != null ? deserializeAws_json1_1FacetResultList(output.FacetResults, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentAttributeValueCountPairList = (
  output: any,
  context: __SerdeContext
): DocumentAttributeValueCountPair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DocumentAttributeValueCountPair(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DocumentMetadataConfiguration = (
  output: any,
  context: __SerdeContext
): DocumentMetadataConfiguration => {
  return {
    Name: __expectString(output.Name),
    Relevance: output.Relevance != null ? deserializeAws_json1_1Relevance(output.Relevance, context) : undefined,
    Search: output.Search != null ? deserializeAws_json1_1Search(output.Search, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1DocumentMetadataConfigurationList = (
  output: any,
  context: __SerdeContext
): DocumentMetadataConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DocumentMetadataConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DocumentsMetadataConfiguration = (
  output: any,
  context: __SerdeContext
): DocumentsMetadataConfiguration => {
  return {
    S3Prefix: __expectString(output.S3Prefix),
  } as any;
};

const deserializeAws_json1_1DocumentStatusList = (output: any, context: __SerdeContext): Status[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Status(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EntityDisplayData = (output: any, context: __SerdeContext): EntityDisplayData => {
  return {
    FirstName: __expectString(output.FirstName),
    GroupName: __expectString(output.GroupName),
    IdentifiedUserName: __expectString(output.IdentifiedUserName),
    LastName: __expectString(output.LastName),
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_json1_1EntityFilter = (output: any, context: __SerdeContext): (AlfrescoEntity | string)[] => {
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

const deserializeAws_json1_1ExcludeMimeTypesList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ExcludeSharedDrivesList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ExcludeUserAccountsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ExperienceConfiguration = (
  output: any,
  context: __SerdeContext
): ExperienceConfiguration => {
  return {
    ContentSourceConfiguration:
      output.ContentSourceConfiguration != null
        ? deserializeAws_json1_1ContentSourceConfiguration(output.ContentSourceConfiguration, context)
        : undefined,
    UserIdentityConfiguration:
      output.UserIdentityConfiguration != null
        ? deserializeAws_json1_1UserIdentityConfiguration(output.UserIdentityConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ExperienceEndpoint = (output: any, context: __SerdeContext): ExperienceEndpoint => {
  return {
    Endpoint: __expectString(output.Endpoint),
    EndpointType: __expectString(output.EndpointType),
  } as any;
};

const deserializeAws_json1_1ExperienceEndpoints = (output: any, context: __SerdeContext): ExperienceEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExperienceEndpoint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ExperienceEntitiesSummary = (
  output: any,
  context: __SerdeContext
): ExperienceEntitiesSummary => {
  return {
    DisplayData:
      output.DisplayData != null ? deserializeAws_json1_1EntityDisplayData(output.DisplayData, context) : undefined,
    EntityId: __expectString(output.EntityId),
    EntityType: __expectString(output.EntityType),
  } as any;
};

const deserializeAws_json1_1ExperienceEntitiesSummaryList = (
  output: any,
  context: __SerdeContext
): ExperienceEntitiesSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExperienceEntitiesSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ExperiencesSummary = (output: any, context: __SerdeContext): ExperiencesSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Endpoints:
      output.Endpoints != null ? deserializeAws_json1_1ExperienceEndpoints(output.Endpoints, context) : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ExperiencesSummaryList = (output: any, context: __SerdeContext): ExperiencesSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExperiencesSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FacetResult = (output: any, context: __SerdeContext): FacetResult => {
  return {
    DocumentAttributeKey: __expectString(output.DocumentAttributeKey),
    DocumentAttributeValueCountPairs:
      output.DocumentAttributeValueCountPairs != null
        ? deserializeAws_json1_1DocumentAttributeValueCountPairList(output.DocumentAttributeValueCountPairs, context)
        : undefined,
    DocumentAttributeValueType: __expectString(output.DocumentAttributeValueType),
  } as any;
};

const deserializeAws_json1_1FacetResultList = (output: any, context: __SerdeContext): FacetResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FacetResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FailedEntity = (output: any, context: __SerdeContext): FailedEntity => {
  return {
    EntityId: __expectString(output.EntityId),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

const deserializeAws_json1_1FailedEntityList = (output: any, context: __SerdeContext): FailedEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FailedEntity(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FaqIdsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1FaqStatistics = (output: any, context: __SerdeContext): FaqStatistics => {
  return {
    IndexedQuestionAnswersCount: __expectInt32(output.IndexedQuestionAnswersCount),
  } as any;
};

const deserializeAws_json1_1FaqSummary = (output: any, context: __SerdeContext): FaqSummary => {
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

const deserializeAws_json1_1FaqSummaryItems = (output: any, context: __SerdeContext): FaqSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FaqSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FolderIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1FsxConfiguration = (output: any, context: __SerdeContext): FsxConfiguration => {
  return {
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    FileSystemId: __expectString(output.FileSystemId),
    FileSystemType: __expectString(output.FileSystemType),
    InclusionPatterns:
      output.InclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    VpcConfiguration:
      output.VpcConfiguration != null
        ? deserializeAws_json1_1DataSourceVpcConfiguration(output.VpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetQuerySuggestionsResponse = (
  output: any,
  context: __SerdeContext
): GetQuerySuggestionsResponse => {
  return {
    QuerySuggestionsId: __expectString(output.QuerySuggestionsId),
    Suggestions:
      output.Suggestions != null ? deserializeAws_json1_1SuggestionList(output.Suggestions, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetSnapshotsResponse = (output: any, context: __SerdeContext): GetSnapshotsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SnapShotTimeFilter:
      output.SnapShotTimeFilter != null
        ? deserializeAws_json1_1TimeRange(output.SnapShotTimeFilter, context)
        : undefined,
    SnapshotsData:
      output.SnapshotsData != null
        ? deserializeAws_json1_1SnapshotsDataRecords(output.SnapshotsData, context)
        : undefined,
    SnapshotsDataHeader:
      output.SnapshotsDataHeader != null
        ? deserializeAws_json1_1SnapshotsDataHeaderFields(output.SnapshotsDataHeader, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GitHubConfiguration = (output: any, context: __SerdeContext): GitHubConfiguration => {
  return {
    ExclusionFileNamePatterns:
      output.ExclusionFileNamePatterns != null
        ? deserializeAws_json1_1StringList(output.ExclusionFileNamePatterns, context)
        : undefined,
    ExclusionFileTypePatterns:
      output.ExclusionFileTypePatterns != null
        ? deserializeAws_json1_1StringList(output.ExclusionFileTypePatterns, context)
        : undefined,
    ExclusionFolderNamePatterns:
      output.ExclusionFolderNamePatterns != null
        ? deserializeAws_json1_1StringList(output.ExclusionFolderNamePatterns, context)
        : undefined,
    GitHubCommitConfigurationFieldMappings:
      output.GitHubCommitConfigurationFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(
            output.GitHubCommitConfigurationFieldMappings,
            context
          )
        : undefined,
    GitHubDocumentCrawlProperties:
      output.GitHubDocumentCrawlProperties != null
        ? deserializeAws_json1_1GitHubDocumentCrawlProperties(output.GitHubDocumentCrawlProperties, context)
        : undefined,
    GitHubIssueAttachmentConfigurationFieldMappings:
      output.GitHubIssueAttachmentConfigurationFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(
            output.GitHubIssueAttachmentConfigurationFieldMappings,
            context
          )
        : undefined,
    GitHubIssueCommentConfigurationFieldMappings:
      output.GitHubIssueCommentConfigurationFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(
            output.GitHubIssueCommentConfigurationFieldMappings,
            context
          )
        : undefined,
    GitHubIssueDocumentConfigurationFieldMappings:
      output.GitHubIssueDocumentConfigurationFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(
            output.GitHubIssueDocumentConfigurationFieldMappings,
            context
          )
        : undefined,
    GitHubPullRequestCommentConfigurationFieldMappings:
      output.GitHubPullRequestCommentConfigurationFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(
            output.GitHubPullRequestCommentConfigurationFieldMappings,
            context
          )
        : undefined,
    GitHubPullRequestDocumentAttachmentConfigurationFieldMappings:
      output.GitHubPullRequestDocumentAttachmentConfigurationFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(
            output.GitHubPullRequestDocumentAttachmentConfigurationFieldMappings,
            context
          )
        : undefined,
    GitHubPullRequestDocumentConfigurationFieldMappings:
      output.GitHubPullRequestDocumentConfigurationFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(
            output.GitHubPullRequestDocumentConfigurationFieldMappings,
            context
          )
        : undefined,
    GitHubRepositoryConfigurationFieldMappings:
      output.GitHubRepositoryConfigurationFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(
            output.GitHubRepositoryConfigurationFieldMappings,
            context
          )
        : undefined,
    InclusionFileNamePatterns:
      output.InclusionFileNamePatterns != null
        ? deserializeAws_json1_1StringList(output.InclusionFileNamePatterns, context)
        : undefined,
    InclusionFileTypePatterns:
      output.InclusionFileTypePatterns != null
        ? deserializeAws_json1_1StringList(output.InclusionFileTypePatterns, context)
        : undefined,
    InclusionFolderNamePatterns:
      output.InclusionFolderNamePatterns != null
        ? deserializeAws_json1_1StringList(output.InclusionFolderNamePatterns, context)
        : undefined,
    OnPremiseConfiguration:
      output.OnPremiseConfiguration != null
        ? deserializeAws_json1_1OnPremiseConfiguration(output.OnPremiseConfiguration, context)
        : undefined,
    RepositoryFilter:
      output.RepositoryFilter != null
        ? deserializeAws_json1_1RepositoryNames(output.RepositoryFilter, context)
        : undefined,
    SaaSConfiguration:
      output.SaaSConfiguration != null
        ? deserializeAws_json1_1SaaSConfiguration(output.SaaSConfiguration, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    Type: __expectString(output.Type),
    UseChangeLog: __expectBoolean(output.UseChangeLog),
    VpcConfiguration:
      output.VpcConfiguration != null
        ? deserializeAws_json1_1DataSourceVpcConfiguration(output.VpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GitHubDocumentCrawlProperties = (
  output: any,
  context: __SerdeContext
): GitHubDocumentCrawlProperties => {
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

const deserializeAws_json1_1GoogleDriveConfiguration = (
  output: any,
  context: __SerdeContext
): GoogleDriveConfiguration => {
  return {
    ExcludeMimeTypes:
      output.ExcludeMimeTypes != null
        ? deserializeAws_json1_1ExcludeMimeTypesList(output.ExcludeMimeTypes, context)
        : undefined,
    ExcludeSharedDrives:
      output.ExcludeSharedDrives != null
        ? deserializeAws_json1_1ExcludeSharedDrivesList(output.ExcludeSharedDrives, context)
        : undefined,
    ExcludeUserAccounts:
      output.ExcludeUserAccounts != null
        ? deserializeAws_json1_1ExcludeUserAccountsList(output.ExcludeUserAccounts, context)
        : undefined,
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
  } as any;
};

const deserializeAws_json1_1GroupOrderingIdSummaries = (
  output: any,
  context: __SerdeContext
): GroupOrderingIdSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GroupOrderingIdSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GroupOrderingIdSummary = (output: any, context: __SerdeContext): GroupOrderingIdSummary => {
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

const deserializeAws_json1_1GroupSummary = (output: any, context: __SerdeContext): GroupSummary => {
  return {
    GroupId: __expectString(output.GroupId),
    OrderingId: __expectLong(output.OrderingId),
  } as any;
};

const deserializeAws_json1_1HierarchicalPrincipal = (output: any, context: __SerdeContext): HierarchicalPrincipal => {
  return {
    PrincipalList:
      output.PrincipalList != null ? deserializeAws_json1_1PrincipalList(output.PrincipalList, context) : undefined,
  } as any;
};

const deserializeAws_json1_1HierarchicalPrincipalList = (
  output: any,
  context: __SerdeContext
): HierarchicalPrincipal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1HierarchicalPrincipal(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Highlight = (output: any, context: __SerdeContext): Highlight => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    EndOffset: __expectInt32(output.EndOffset),
    TopAnswer: __expectBoolean(output.TopAnswer),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1HighlightList = (output: any, context: __SerdeContext): Highlight[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Highlight(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1HookConfiguration = (output: any, context: __SerdeContext): HookConfiguration => {
  return {
    InvocationCondition:
      output.InvocationCondition != null
        ? deserializeAws_json1_1DocumentAttributeCondition(output.InvocationCondition, context)
        : undefined,
    LambdaArn: __expectString(output.LambdaArn),
    S3Bucket: __expectString(output.S3Bucket),
  } as any;
};

const deserializeAws_json1_1IndexConfigurationSummary = (
  output: any,
  context: __SerdeContext
): IndexConfigurationSummary => {
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

const deserializeAws_json1_1IndexConfigurationSummaryList = (
  output: any,
  context: __SerdeContext
): IndexConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1IndexConfigurationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1IndexStatistics = (output: any, context: __SerdeContext): IndexStatistics => {
  return {
    FaqStatistics:
      output.FaqStatistics != null ? deserializeAws_json1_1FaqStatistics(output.FaqStatistics, context) : undefined,
    TextDocumentStatistics:
      output.TextDocumentStatistics != null
        ? deserializeAws_json1_1TextDocumentStatistics(output.TextDocumentStatistics, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InlineCustomDocumentEnrichmentConfiguration = (
  output: any,
  context: __SerdeContext
): InlineCustomDocumentEnrichmentConfiguration => {
  return {
    Condition:
      output.Condition != null
        ? deserializeAws_json1_1DocumentAttributeCondition(output.Condition, context)
        : undefined,
    DocumentContentDeletion: __expectBoolean(output.DocumentContentDeletion),
    Target: output.Target != null ? deserializeAws_json1_1DocumentAttributeTarget(output.Target, context) : undefined,
  } as any;
};

const deserializeAws_json1_1InlineCustomDocumentEnrichmentConfigurationList = (
  output: any,
  context: __SerdeContext
): InlineCustomDocumentEnrichmentConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InlineCustomDocumentEnrichmentConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1IssueSubEntityFilter = (
  output: any,
  context: __SerdeContext
): (IssueSubEntity | string)[] => {
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

const deserializeAws_json1_1IssueType = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1JiraConfiguration = (output: any, context: __SerdeContext): JiraConfiguration => {
  return {
    AttachmentFieldMappings:
      output.AttachmentFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.AttachmentFieldMappings, context)
        : undefined,
    CommentFieldMappings:
      output.CommentFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.CommentFieldMappings, context)
        : undefined,
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    IssueFieldMappings:
      output.IssueFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.IssueFieldMappings, context)
        : undefined,
    IssueSubEntityFilter:
      output.IssueSubEntityFilter != null
        ? deserializeAws_json1_1IssueSubEntityFilter(output.IssueSubEntityFilter, context)
        : undefined,
    IssueType: output.IssueType != null ? deserializeAws_json1_1IssueType(output.IssueType, context) : undefined,
    JiraAccountUrl: __expectString(output.JiraAccountUrl),
    Project: output.Project != null ? deserializeAws_json1_1Project(output.Project, context) : undefined,
    ProjectFieldMappings:
      output.ProjectFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.ProjectFieldMappings, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    Status: output.Status != null ? deserializeAws_json1_1JiraStatus(output.Status, context) : undefined,
    UseChangeLog: __expectBoolean(output.UseChangeLog),
    VpcConfiguration:
      output.VpcConfiguration != null
        ? deserializeAws_json1_1DataSourceVpcConfiguration(output.VpcConfiguration, context)
        : undefined,
    WorkLogFieldMappings:
      output.WorkLogFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.WorkLogFieldMappings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1JiraStatus = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1JsonTokenTypeConfiguration = (
  output: any,
  context: __SerdeContext
): JsonTokenTypeConfiguration => {
  return {
    GroupAttributeField: __expectString(output.GroupAttributeField),
    UserNameAttributeField: __expectString(output.UserNameAttributeField),
  } as any;
};

const deserializeAws_json1_1JwtTokenTypeConfiguration = (
  output: any,
  context: __SerdeContext
): JwtTokenTypeConfiguration => {
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

const deserializeAws_json1_1ListAccessControlConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListAccessControlConfigurationsResponse => {
  return {
    AccessControlConfigurations:
      output.AccessControlConfigurations != null
        ? deserializeAws_json1_1AccessControlConfigurationSummaryList(output.AccessControlConfigurations, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDataSourcesResponse = (
  output: any,
  context: __SerdeContext
): ListDataSourcesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SummaryItems:
      output.SummaryItems != null
        ? deserializeAws_json1_1DataSourceSummaryList(output.SummaryItems, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListDataSourceSyncJobsResponse = (
  output: any,
  context: __SerdeContext
): ListDataSourceSyncJobsResponse => {
  return {
    History:
      output.History != null ? deserializeAws_json1_1DataSourceSyncJobHistoryList(output.History, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListEntityPersonasResponse = (
  output: any,
  context: __SerdeContext
): ListEntityPersonasResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SummaryItems:
      output.SummaryItems != null ? deserializeAws_json1_1PersonasSummaryList(output.SummaryItems, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListExperienceEntitiesResponse = (
  output: any,
  context: __SerdeContext
): ListExperienceEntitiesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SummaryItems:
      output.SummaryItems != null
        ? deserializeAws_json1_1ExperienceEntitiesSummaryList(output.SummaryItems, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListExperiencesResponse = (
  output: any,
  context: __SerdeContext
): ListExperiencesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SummaryItems:
      output.SummaryItems != null
        ? deserializeAws_json1_1ExperiencesSummaryList(output.SummaryItems, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListFaqsResponse = (output: any, context: __SerdeContext): ListFaqsResponse => {
  return {
    FaqSummaryItems:
      output.FaqSummaryItems != null
        ? deserializeAws_json1_1FaqSummaryItems(output.FaqSummaryItems, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListGroupsOlderThanOrderingIdResponse = (
  output: any,
  context: __SerdeContext
): ListGroupsOlderThanOrderingIdResponse => {
  return {
    GroupsSummaries:
      output.GroupsSummaries != null
        ? deserializeAws_json1_1ListOfGroupSummaries(output.GroupsSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListIndicesResponse = (output: any, context: __SerdeContext): ListIndicesResponse => {
  return {
    IndexConfigurationSummaryItems:
      output.IndexConfigurationSummaryItems != null
        ? deserializeAws_json1_1IndexConfigurationSummaryList(output.IndexConfigurationSummaryItems, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListOfGroupSummaries = (output: any, context: __SerdeContext): GroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GroupSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListQuerySuggestionsBlockListsResponse = (
  output: any,
  context: __SerdeContext
): ListQuerySuggestionsBlockListsResponse => {
  return {
    BlockListSummaryItems:
      output.BlockListSummaryItems != null
        ? deserializeAws_json1_1QuerySuggestionsBlockListSummaryItems(output.BlockListSummaryItems, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListThesauriResponse = (output: any, context: __SerdeContext): ListThesauriResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ThesaurusSummaryItems:
      output.ThesaurusSummaryItems != null
        ? deserializeAws_json1_1ThesaurusSummaryItems(output.ThesaurusSummaryItems, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1OneDriveConfiguration = (output: any, context: __SerdeContext): OneDriveConfiguration => {
  return {
    DisableLocalGroups: __expectBoolean(output.DisableLocalGroups),
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    OneDriveUsers:
      output.OneDriveUsers != null ? deserializeAws_json1_1OneDriveUsers(output.OneDriveUsers, context) : undefined,
    SecretArn: __expectString(output.SecretArn),
    TenantDomain: __expectString(output.TenantDomain),
  } as any;
};

const deserializeAws_json1_1OneDriveUserList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1OneDriveUsers = (output: any, context: __SerdeContext): OneDriveUsers => {
  return {
    OneDriveUserList:
      output.OneDriveUserList != null
        ? deserializeAws_json1_1OneDriveUserList(output.OneDriveUserList, context)
        : undefined,
    OneDriveUserS3Path:
      output.OneDriveUserS3Path != null ? deserializeAws_json1_1S3Path(output.OneDriveUserS3Path, context) : undefined,
  } as any;
};

const deserializeAws_json1_1OnPremiseConfiguration = (output: any, context: __SerdeContext): OnPremiseConfiguration => {
  return {
    HostUrl: __expectString(output.HostUrl),
    OrganizationName: __expectString(output.OrganizationName),
    SslCertificateS3Path:
      output.SslCertificateS3Path != null
        ? deserializeAws_json1_1S3Path(output.SslCertificateS3Path, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PersonasSummary = (output: any, context: __SerdeContext): PersonasSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    EntityId: __expectString(output.EntityId),
    Persona: __expectString(output.Persona),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

const deserializeAws_json1_1PersonasSummaryList = (output: any, context: __SerdeContext): PersonasSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PersonasSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Principal = (output: any, context: __SerdeContext): Principal => {
  return {
    Access: __expectString(output.Access),
    DataSourceId: __expectString(output.DataSourceId),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1PrincipalList = (output: any, context: __SerdeContext): Principal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Principal(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PrivateChannelFilter = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Project = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ProxyConfiguration = (output: any, context: __SerdeContext): ProxyConfiguration => {
  return {
    Credentials: __expectString(output.Credentials),
    Host: __expectString(output.Host),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_json1_1PublicChannelFilter = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1QueryResult = (output: any, context: __SerdeContext): QueryResult => {
  return {
    FacetResults:
      output.FacetResults != null ? deserializeAws_json1_1FacetResultList(output.FacetResults, context) : undefined,
    QueryId: __expectString(output.QueryId),
    ResultItems:
      output.ResultItems != null ? deserializeAws_json1_1QueryResultItemList(output.ResultItems, context) : undefined,
    SpellCorrectedQueries:
      output.SpellCorrectedQueries != null
        ? deserializeAws_json1_1SpellCorrectedQueryList(output.SpellCorrectedQueries, context)
        : undefined,
    TotalNumberOfResults: __expectInt32(output.TotalNumberOfResults),
    Warnings: output.Warnings != null ? deserializeAws_json1_1WarningList(output.Warnings, context) : undefined,
  } as any;
};

const deserializeAws_json1_1QueryResultItem = (output: any, context: __SerdeContext): QueryResultItem => {
  return {
    AdditionalAttributes:
      output.AdditionalAttributes != null
        ? deserializeAws_json1_1AdditionalResultAttributeList(output.AdditionalAttributes, context)
        : undefined,
    DocumentAttributes:
      output.DocumentAttributes != null
        ? deserializeAws_json1_1DocumentAttributeList(output.DocumentAttributes, context)
        : undefined,
    DocumentExcerpt:
      output.DocumentExcerpt != null
        ? deserializeAws_json1_1TextWithHighlights(output.DocumentExcerpt, context)
        : undefined,
    DocumentId: __expectString(output.DocumentId),
    DocumentTitle:
      output.DocumentTitle != null
        ? deserializeAws_json1_1TextWithHighlights(output.DocumentTitle, context)
        : undefined,
    DocumentURI: __expectString(output.DocumentURI),
    FeedbackToken: __expectString(output.FeedbackToken),
    Format: __expectString(output.Format),
    Id: __expectString(output.Id),
    ScoreAttributes:
      output.ScoreAttributes != null
        ? deserializeAws_json1_1ScoreAttributes(output.ScoreAttributes, context)
        : undefined,
    TableExcerpt:
      output.TableExcerpt != null ? deserializeAws_json1_1TableExcerpt(output.TableExcerpt, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1QueryResultItemList = (output: any, context: __SerdeContext): QueryResultItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1QueryResultItem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1QuerySuggestionsBlockListSummary = (
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

const deserializeAws_json1_1QuerySuggestionsBlockListSummaryItems = (
  output: any,
  context: __SerdeContext
): QuerySuggestionsBlockListSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1QuerySuggestionsBlockListSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1QuipConfiguration = (output: any, context: __SerdeContext): QuipConfiguration => {
  return {
    AttachmentFieldMappings:
      output.AttachmentFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.AttachmentFieldMappings, context)
        : undefined,
    CrawlAttachments: __expectBoolean(output.CrawlAttachments),
    CrawlChatRooms: __expectBoolean(output.CrawlChatRooms),
    CrawlFileComments: __expectBoolean(output.CrawlFileComments),
    Domain: __expectString(output.Domain),
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    FolderIds: output.FolderIds != null ? deserializeAws_json1_1FolderIdList(output.FolderIds, context) : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    MessageFieldMappings:
      output.MessageFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.MessageFieldMappings, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    ThreadFieldMappings:
      output.ThreadFieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.ThreadFieldMappings, context)
        : undefined,
    VpcConfiguration:
      output.VpcConfiguration != null
        ? deserializeAws_json1_1DataSourceVpcConfiguration(output.VpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Relevance = (output: any, context: __SerdeContext): Relevance => {
  return {
    Duration: __expectString(output.Duration),
    Freshness: __expectBoolean(output.Freshness),
    Importance: __expectInt32(output.Importance),
    RankOrder: __expectString(output.RankOrder),
    ValueImportanceMap:
      output.ValueImportanceMap != null
        ? deserializeAws_json1_1ValueImportanceMap(output.ValueImportanceMap, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RepositoryNames = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ResourceAlreadyExistException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceUnavailableException = (
  output: any,
  context: __SerdeContext
): ResourceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1S3DataSourceConfiguration = (
  output: any,
  context: __SerdeContext
): S3DataSourceConfiguration => {
  return {
    AccessControlListConfiguration:
      output.AccessControlListConfiguration != null
        ? deserializeAws_json1_1AccessControlListConfiguration(output.AccessControlListConfiguration, context)
        : undefined,
    BucketName: __expectString(output.BucketName),
    DocumentsMetadataConfiguration:
      output.DocumentsMetadataConfiguration != null
        ? deserializeAws_json1_1DocumentsMetadataConfiguration(output.DocumentsMetadataConfiguration, context)
        : undefined,
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    InclusionPrefixes:
      output.InclusionPrefixes != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPrefixes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1S3Path = (output: any, context: __SerdeContext): S3Path => {
  return {
    Bucket: __expectString(output.Bucket),
    Key: __expectString(output.Key),
  } as any;
};

const deserializeAws_json1_1SaaSConfiguration = (output: any, context: __SerdeContext): SaaSConfiguration => {
  return {
    HostUrl: __expectString(output.HostUrl),
    OrganizationName: __expectString(output.OrganizationName),
  } as any;
};

const deserializeAws_json1_1SalesforceChatterFeedConfiguration = (
  output: any,
  context: __SerdeContext
): SalesforceChatterFeedConfiguration => {
  return {
    DocumentDataFieldName: __expectString(output.DocumentDataFieldName),
    DocumentTitleFieldName: __expectString(output.DocumentTitleFieldName),
    FieldMappings:
      output.FieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    IncludeFilterTypes:
      output.IncludeFilterTypes != null
        ? deserializeAws_json1_1SalesforceChatterFeedIncludeFilterTypes(output.IncludeFilterTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SalesforceChatterFeedIncludeFilterTypes = (
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

const deserializeAws_json1_1SalesforceConfiguration = (
  output: any,
  context: __SerdeContext
): SalesforceConfiguration => {
  return {
    ChatterFeedConfiguration:
      output.ChatterFeedConfiguration != null
        ? deserializeAws_json1_1SalesforceChatterFeedConfiguration(output.ChatterFeedConfiguration, context)
        : undefined,
    CrawlAttachments: __expectBoolean(output.CrawlAttachments),
    ExcludeAttachmentFilePatterns:
      output.ExcludeAttachmentFilePatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExcludeAttachmentFilePatterns, context)
        : undefined,
    IncludeAttachmentFilePatterns:
      output.IncludeAttachmentFilePatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.IncludeAttachmentFilePatterns, context)
        : undefined,
    KnowledgeArticleConfiguration:
      output.KnowledgeArticleConfiguration != null
        ? deserializeAws_json1_1SalesforceKnowledgeArticleConfiguration(output.KnowledgeArticleConfiguration, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    ServerUrl: __expectString(output.ServerUrl),
    StandardObjectAttachmentConfiguration:
      output.StandardObjectAttachmentConfiguration != null
        ? deserializeAws_json1_1SalesforceStandardObjectAttachmentConfiguration(
            output.StandardObjectAttachmentConfiguration,
            context
          )
        : undefined,
    StandardObjectConfigurations:
      output.StandardObjectConfigurations != null
        ? deserializeAws_json1_1SalesforceStandardObjectConfigurationList(output.StandardObjectConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfiguration = (
  output: any,
  context: __SerdeContext
): SalesforceCustomKnowledgeArticleTypeConfiguration => {
  return {
    DocumentDataFieldName: __expectString(output.DocumentDataFieldName),
    DocumentTitleFieldName: __expectString(output.DocumentTitleFieldName),
    FieldMappings:
      output.FieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfigurationList = (
  output: any,
  context: __SerdeContext
): SalesforceCustomKnowledgeArticleTypeConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SalesforceKnowledgeArticleConfiguration = (
  output: any,
  context: __SerdeContext
): SalesforceKnowledgeArticleConfiguration => {
  return {
    CustomKnowledgeArticleTypeConfigurations:
      output.CustomKnowledgeArticleTypeConfigurations != null
        ? deserializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfigurationList(
            output.CustomKnowledgeArticleTypeConfigurations,
            context
          )
        : undefined,
    IncludedStates:
      output.IncludedStates != null
        ? deserializeAws_json1_1SalesforceKnowledgeArticleStateList(output.IncludedStates, context)
        : undefined,
    StandardKnowledgeArticleTypeConfiguration:
      output.StandardKnowledgeArticleTypeConfiguration != null
        ? deserializeAws_json1_1SalesforceStandardKnowledgeArticleTypeConfiguration(
            output.StandardKnowledgeArticleTypeConfiguration,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1SalesforceKnowledgeArticleStateList = (
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

const deserializeAws_json1_1SalesforceStandardKnowledgeArticleTypeConfiguration = (
  output: any,
  context: __SerdeContext
): SalesforceStandardKnowledgeArticleTypeConfiguration => {
  return {
    DocumentDataFieldName: __expectString(output.DocumentDataFieldName),
    DocumentTitleFieldName: __expectString(output.DocumentTitleFieldName),
    FieldMappings:
      output.FieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SalesforceStandardObjectAttachmentConfiguration = (
  output: any,
  context: __SerdeContext
): SalesforceStandardObjectAttachmentConfiguration => {
  return {
    DocumentTitleFieldName: __expectString(output.DocumentTitleFieldName),
    FieldMappings:
      output.FieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SalesforceStandardObjectConfiguration = (
  output: any,
  context: __SerdeContext
): SalesforceStandardObjectConfiguration => {
  return {
    DocumentDataFieldName: __expectString(output.DocumentDataFieldName),
    DocumentTitleFieldName: __expectString(output.DocumentTitleFieldName),
    FieldMappings:
      output.FieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1SalesforceStandardObjectConfigurationList = (
  output: any,
  context: __SerdeContext
): SalesforceStandardObjectConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SalesforceStandardObjectConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ScoreAttributes = (output: any, context: __SerdeContext): ScoreAttributes => {
  return {
    ScoreConfidence: __expectString(output.ScoreConfidence),
  } as any;
};

const deserializeAws_json1_1Search = (output: any, context: __SerdeContext): Search => {
  return {
    Displayable: __expectBoolean(output.Displayable),
    Facetable: __expectBoolean(output.Facetable),
    Searchable: __expectBoolean(output.Searchable),
    Sortable: __expectBoolean(output.Sortable),
  } as any;
};

const deserializeAws_json1_1SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SeedUrlConfiguration = (output: any, context: __SerdeContext): SeedUrlConfiguration => {
  return {
    SeedUrls: output.SeedUrls != null ? deserializeAws_json1_1SeedUrlList(output.SeedUrls, context) : undefined,
    WebCrawlerMode: __expectString(output.WebCrawlerMode),
  } as any;
};

const deserializeAws_json1_1SeedUrlList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ServerSideEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionConfiguration => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
  } as any;
};

const deserializeAws_json1_1ServiceNowConfiguration = (
  output: any,
  context: __SerdeContext
): ServiceNowConfiguration => {
  return {
    AuthenticationType: __expectString(output.AuthenticationType),
    HostUrl: __expectString(output.HostUrl),
    KnowledgeArticleConfiguration:
      output.KnowledgeArticleConfiguration != null
        ? deserializeAws_json1_1ServiceNowKnowledgeArticleConfiguration(output.KnowledgeArticleConfiguration, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    ServiceCatalogConfiguration:
      output.ServiceCatalogConfiguration != null
        ? deserializeAws_json1_1ServiceNowServiceCatalogConfiguration(output.ServiceCatalogConfiguration, context)
        : undefined,
    ServiceNowBuildVersion: __expectString(output.ServiceNowBuildVersion),
  } as any;
};

const deserializeAws_json1_1ServiceNowKnowledgeArticleConfiguration = (
  output: any,
  context: __SerdeContext
): ServiceNowKnowledgeArticleConfiguration => {
  return {
    CrawlAttachments: __expectBoolean(output.CrawlAttachments),
    DocumentDataFieldName: __expectString(output.DocumentDataFieldName),
    DocumentTitleFieldName: __expectString(output.DocumentTitleFieldName),
    ExcludeAttachmentFilePatterns:
      output.ExcludeAttachmentFilePatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExcludeAttachmentFilePatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    FilterQuery: __expectString(output.FilterQuery),
    IncludeAttachmentFilePatterns:
      output.IncludeAttachmentFilePatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.IncludeAttachmentFilePatterns, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ServiceNowServiceCatalogConfiguration = (
  output: any,
  context: __SerdeContext
): ServiceNowServiceCatalogConfiguration => {
  return {
    CrawlAttachments: __expectBoolean(output.CrawlAttachments),
    DocumentDataFieldName: __expectString(output.DocumentDataFieldName),
    DocumentTitleFieldName: __expectString(output.DocumentTitleFieldName),
    ExcludeAttachmentFilePatterns:
      output.ExcludeAttachmentFilePatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExcludeAttachmentFilePatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    IncludeAttachmentFilePatterns:
      output.IncludeAttachmentFilePatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.IncludeAttachmentFilePatterns, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1SharePointConfiguration = (
  output: any,
  context: __SerdeContext
): SharePointConfiguration => {
  return {
    AuthenticationType: __expectString(output.AuthenticationType),
    CrawlAttachments: __expectBoolean(output.CrawlAttachments),
    DisableLocalGroups: __expectBoolean(output.DisableLocalGroups),
    DocumentTitleFieldName: __expectString(output.DocumentTitleFieldName),
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    ProxyConfiguration:
      output.ProxyConfiguration != null
        ? deserializeAws_json1_1ProxyConfiguration(output.ProxyConfiguration, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    SharePointVersion: __expectString(output.SharePointVersion),
    SslCertificateS3Path:
      output.SslCertificateS3Path != null
        ? deserializeAws_json1_1S3Path(output.SslCertificateS3Path, context)
        : undefined,
    Urls: output.Urls != null ? deserializeAws_json1_1SharePointUrlList(output.Urls, context) : undefined,
    UseChangeLog: __expectBoolean(output.UseChangeLog),
    VpcConfiguration:
      output.VpcConfiguration != null
        ? deserializeAws_json1_1DataSourceVpcConfiguration(output.VpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SharePointUrlList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SiteMapsConfiguration = (output: any, context: __SerdeContext): SiteMapsConfiguration => {
  return {
    SiteMaps: output.SiteMaps != null ? deserializeAws_json1_1SiteMapsList(output.SiteMaps, context) : undefined,
  } as any;
};

const deserializeAws_json1_1SiteMapsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SlackConfiguration = (output: any, context: __SerdeContext): SlackConfiguration => {
  return {
    CrawlBotMessage: __expectBoolean(output.CrawlBotMessage),
    ExcludeArchived: __expectBoolean(output.ExcludeArchived),
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    LookBackPeriod: __expectInt32(output.LookBackPeriod),
    PrivateChannelFilter:
      output.PrivateChannelFilter != null
        ? deserializeAws_json1_1PrivateChannelFilter(output.PrivateChannelFilter, context)
        : undefined,
    PublicChannelFilter:
      output.PublicChannelFilter != null
        ? deserializeAws_json1_1PublicChannelFilter(output.PublicChannelFilter, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    SinceCrawlDate: __expectString(output.SinceCrawlDate),
    SlackEntityList:
      output.SlackEntityList != null
        ? deserializeAws_json1_1SlackEntityList(output.SlackEntityList, context)
        : undefined,
    TeamId: __expectString(output.TeamId),
    UseChangeLog: __expectBoolean(output.UseChangeLog),
    VpcConfiguration:
      output.VpcConfiguration != null
        ? deserializeAws_json1_1DataSourceVpcConfiguration(output.VpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SlackEntityList = (output: any, context: __SerdeContext): (SlackEntity | string)[] => {
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

const deserializeAws_json1_1SnapshotsDataHeaderFields = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SnapshotsDataRecord = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SnapshotsDataRecords = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SnapshotsDataRecord(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SpellCorrectedQuery = (output: any, context: __SerdeContext): SpellCorrectedQuery => {
  return {
    Corrections:
      output.Corrections != null ? deserializeAws_json1_1CorrectionList(output.Corrections, context) : undefined,
    SuggestedQueryText: __expectString(output.SuggestedQueryText),
  } as any;
};

const deserializeAws_json1_1SpellCorrectedQueryList = (output: any, context: __SerdeContext): SpellCorrectedQuery[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SpellCorrectedQuery(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SqlConfiguration = (output: any, context: __SerdeContext): SqlConfiguration => {
  return {
    QueryIdentifiersEnclosingOption: __expectString(output.QueryIdentifiersEnclosingOption),
  } as any;
};

const deserializeAws_json1_1StartDataSourceSyncJobResponse = (
  output: any,
  context: __SerdeContext
): StartDataSourceSyncJobResponse => {
  return {
    ExecutionId: __expectString(output.ExecutionId),
  } as any;
};

const deserializeAws_json1_1Status = (output: any, context: __SerdeContext): Status => {
  return {
    DocumentId: __expectString(output.DocumentId),
    DocumentStatus: __expectString(output.DocumentStatus),
    FailureCode: __expectString(output.FailureCode),
    FailureReason: __expectString(output.FailureReason),
  } as any;
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SubnetIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Suggestion = (output: any, context: __SerdeContext): Suggestion => {
  return {
    Id: __expectString(output.Id),
    Value: output.Value != null ? deserializeAws_json1_1SuggestionValue(output.Value, context) : undefined,
  } as any;
};

const deserializeAws_json1_1SuggestionHighlight = (output: any, context: __SerdeContext): SuggestionHighlight => {
  return {
    BeginOffset: __expectInt32(output.BeginOffset),
    EndOffset: __expectInt32(output.EndOffset),
  } as any;
};

const deserializeAws_json1_1SuggestionHighlightList = (output: any, context: __SerdeContext): SuggestionHighlight[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SuggestionHighlight(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SuggestionList = (output: any, context: __SerdeContext): Suggestion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Suggestion(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SuggestionTextWithHighlights = (
  output: any,
  context: __SerdeContext
): SuggestionTextWithHighlights => {
  return {
    Highlights:
      output.Highlights != null ? deserializeAws_json1_1SuggestionHighlightList(output.Highlights, context) : undefined,
    Text: __expectString(output.Text),
  } as any;
};

const deserializeAws_json1_1SuggestionValue = (output: any, context: __SerdeContext): SuggestionValue => {
  return {
    Text: output.Text != null ? deserializeAws_json1_1SuggestionTextWithHighlights(output.Text, context) : undefined,
  } as any;
};

const deserializeAws_json1_1TableCell = (output: any, context: __SerdeContext): TableCell => {
  return {
    Header: __expectBoolean(output.Header),
    Highlighted: __expectBoolean(output.Highlighted),
    TopAnswer: __expectBoolean(output.TopAnswer),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TableCellList = (output: any, context: __SerdeContext): TableCell[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TableCell(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TableExcerpt = (output: any, context: __SerdeContext): TableExcerpt => {
  return {
    Rows: output.Rows != null ? deserializeAws_json1_1TableRowList(output.Rows, context) : undefined,
    TotalNumberOfRows: __expectInt32(output.TotalNumberOfRows),
  } as any;
};

const deserializeAws_json1_1TableRow = (output: any, context: __SerdeContext): TableRow => {
  return {
    Cells: output.Cells != null ? deserializeAws_json1_1TableCellList(output.Cells, context) : undefined,
  } as any;
};

const deserializeAws_json1_1TableRowList = (output: any, context: __SerdeContext): TableRow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TableRow(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1Template = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

const deserializeAws_json1_1TemplateConfiguration = (output: any, context: __SerdeContext): TemplateConfiguration => {
  return {
    Template: output.Template != null ? deserializeAws_json1_1Template(output.Template, context) : undefined,
  } as any;
};

const deserializeAws_json1_1TextDocumentStatistics = (output: any, context: __SerdeContext): TextDocumentStatistics => {
  return {
    IndexedTextBytes: __expectLong(output.IndexedTextBytes),
    IndexedTextDocumentsCount: __expectInt32(output.IndexedTextDocumentsCount),
  } as any;
};

const deserializeAws_json1_1TextWithHighlights = (output: any, context: __SerdeContext): TextWithHighlights => {
  return {
    Highlights: output.Highlights != null ? deserializeAws_json1_1HighlightList(output.Highlights, context) : undefined,
    Text: __expectString(output.Text),
  } as any;
};

const deserializeAws_json1_1ThesaurusSummary = (output: any, context: __SerdeContext): ThesaurusSummary => {
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

const deserializeAws_json1_1ThesaurusSummaryItems = (output: any, context: __SerdeContext): ThesaurusSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ThesaurusSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TimeRange = (output: any, context: __SerdeContext): TimeRange => {
  return {
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateAccessControlConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateAccessControlConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1Urls = (output: any, context: __SerdeContext): Urls => {
  return {
    SeedUrlConfiguration:
      output.SeedUrlConfiguration != null
        ? deserializeAws_json1_1SeedUrlConfiguration(output.SeedUrlConfiguration, context)
        : undefined,
    SiteMapsConfiguration:
      output.SiteMapsConfiguration != null
        ? deserializeAws_json1_1SiteMapsConfiguration(output.SiteMapsConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UserGroupResolutionConfiguration = (
  output: any,
  context: __SerdeContext
): UserGroupResolutionConfiguration => {
  return {
    UserGroupResolutionMode: __expectString(output.UserGroupResolutionMode),
  } as any;
};

const deserializeAws_json1_1UserIdentityConfiguration = (
  output: any,
  context: __SerdeContext
): UserIdentityConfiguration => {
  return {
    IdentityAttributeName: __expectString(output.IdentityAttributeName),
  } as any;
};

const deserializeAws_json1_1UserTokenConfiguration = (output: any, context: __SerdeContext): UserTokenConfiguration => {
  return {
    JsonTokenTypeConfiguration:
      output.JsonTokenTypeConfiguration != null
        ? deserializeAws_json1_1JsonTokenTypeConfiguration(output.JsonTokenTypeConfiguration, context)
        : undefined,
    JwtTokenTypeConfiguration:
      output.JwtTokenTypeConfiguration != null
        ? deserializeAws_json1_1JwtTokenTypeConfiguration(output.JwtTokenTypeConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UserTokenConfigurationList = (
  output: any,
  context: __SerdeContext
): UserTokenConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UserTokenConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ValueImportanceMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1Warning = (output: any, context: __SerdeContext): Warning => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1WarningList = (output: any, context: __SerdeContext): Warning[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Warning(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1WebCrawlerConfiguration = (
  output: any,
  context: __SerdeContext
): WebCrawlerConfiguration => {
  return {
    AuthenticationConfiguration:
      output.AuthenticationConfiguration != null
        ? deserializeAws_json1_1AuthenticationConfiguration(output.AuthenticationConfiguration, context)
        : undefined,
    CrawlDepth: __expectInt32(output.CrawlDepth),
    MaxContentSizePerPageInMegaBytes: __limitedParseFloat32(output.MaxContentSizePerPageInMegaBytes),
    MaxLinksPerPage: __expectInt32(output.MaxLinksPerPage),
    MaxUrlsPerMinuteCrawlRate: __expectInt32(output.MaxUrlsPerMinuteCrawlRate),
    ProxyConfiguration:
      output.ProxyConfiguration != null
        ? deserializeAws_json1_1ProxyConfiguration(output.ProxyConfiguration, context)
        : undefined,
    UrlExclusionPatterns:
      output.UrlExclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.UrlExclusionPatterns, context)
        : undefined,
    UrlInclusionPatterns:
      output.UrlInclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.UrlInclusionPatterns, context)
        : undefined,
    Urls: output.Urls != null ? deserializeAws_json1_1Urls(output.Urls, context) : undefined,
  } as any;
};

const deserializeAws_json1_1WorkDocsConfiguration = (output: any, context: __SerdeContext): WorkDocsConfiguration => {
  return {
    CrawlComments: __expectBoolean(output.CrawlComments),
    ExclusionPatterns:
      output.ExclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings != null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns != null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
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
