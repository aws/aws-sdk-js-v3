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
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "../commands/CreateDataSourceCommand";
import { CreateFaqCommandInput, CreateFaqCommandOutput } from "../commands/CreateFaqCommand";
import { CreateIndexCommandInput, CreateIndexCommandOutput } from "../commands/CreateIndexCommand";
import {
  CreateQuerySuggestionsBlockListCommandInput,
  CreateQuerySuggestionsBlockListCommandOutput,
} from "../commands/CreateQuerySuggestionsBlockListCommand";
import { CreateThesaurusCommandInput, CreateThesaurusCommandOutput } from "../commands/CreateThesaurusCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "../commands/DeleteDataSourceCommand";
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
import { DescribeDataSourceCommandInput, DescribeDataSourceCommandOutput } from "../commands/DescribeDataSourceCommand";
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
  GetQuerySuggestionsCommandInput,
  GetQuerySuggestionsCommandOutput,
} from "../commands/GetQuerySuggestionsCommand";
import {
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput,
} from "../commands/ListDataSourceSyncJobsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "../commands/ListDataSourcesCommand";
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
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "../commands/UpdateDataSourceCommand";
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
import {
  AccessControlListConfiguration,
  AccessDeniedException,
  AclConfiguration,
  AdditionalResultAttribute,
  AdditionalResultAttributeValue,
  AttributeFilter,
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
  CreateDataSourceRequest,
  CreateDataSourceResponse,
  CreateFaqRequest,
  CreateFaqResponse,
  CreateIndexRequest,
  CreateIndexResponse,
  CreateQuerySuggestionsBlockListRequest,
  CreateQuerySuggestionsBlockListResponse,
  CreateThesaurusRequest,
  CreateThesaurusResponse,
  DataSourceConfiguration,
  DataSourceGroup,
  DataSourceSummary,
  DataSourceSyncJob,
  DataSourceSyncJobMetricTarget,
  DataSourceSyncJobMetrics,
  DataSourceToIndexFieldMapping,
  DataSourceVpcConfiguration,
  DatabaseConfiguration,
  DeleteDataSourceRequest,
  DeleteFaqRequest,
  DeleteIndexRequest,
  DeletePrincipalMappingRequest,
  DeleteQuerySuggestionsBlockListRequest,
  DeleteThesaurusRequest,
  DescribeDataSourceRequest,
  DescribeDataSourceResponse,
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
  Document,
  DocumentAttribute,
  DocumentAttributeValue,
  DocumentAttributeValueCountPair,
  DocumentInfo,
  DocumentMetadataConfiguration,
  DocumentRelevanceConfiguration,
  DocumentsMetadataConfiguration,
  Facet,
  FacetResult,
  FaqStatistics,
  FaqSummary,
  GetQuerySuggestionsRequest,
  GetQuerySuggestionsResponse,
  GoogleDriveConfiguration,
  GroupMembers,
  GroupOrderingIdSummary,
  GroupSummary,
  HierarchicalPrincipal,
  Highlight,
  IndexConfigurationSummary,
  IndexStatistics,
  InternalServerException,
  JsonTokenTypeConfiguration,
  JwtTokenTypeConfiguration,
  ListDataSourceSyncJobsRequest,
  ListDataSourceSyncJobsResponse,
  ListDataSourcesRequest,
  ListDataSourcesResponse,
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
  Principal,
  ProxyConfiguration,
  PutPrincipalMappingRequest,
  QueryRequest,
  QueryResult,
  QueryResultItem,
  QuerySuggestionsBlockListSummary,
  Relevance,
  RelevanceFeedback,
  ResourceAlreadyExistException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceUnavailableException,
  S3DataSourceConfiguration,
  S3Path,
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
  SortingConfiguration,
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
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TextDocumentStatistics,
  TextWithHighlights,
  ThesaurusSummary,
  ThrottlingException,
  TimeRange,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateDataSourceRequest,
  UpdateIndexRequest,
  UpdateQuerySuggestionsBlockListRequest,
  UpdateQuerySuggestionsConfigRequest,
  UpdateThesaurusRequest,
  Urls,
  UserContext,
  UserTokenConfiguration,
  ValidationException,
  WebCrawlerConfiguration,
  WorkDocsConfiguration,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
  expectString as __expectString,
  limitedParseFloat as __limitedParseFloat,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistException":
    case "com.amazonaws.kendra#ResourceAlreadyExistException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistException":
    case "com.amazonaws.kendra#ResourceAlreadyExistException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.kendra#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kendra#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.kendra#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.kendra#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.kendra#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(body, context);
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistException(body, context);
  const contents: ResourceAlreadyExistException = {
    name: "ResourceAlreadyExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceUnavailableException(body, context);
  const contents: ResourceUnavailableException = {
    name: "ResourceUnavailableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceQuotaExceededException(body, context);
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(body, context);
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AccessControlListConfiguration = (
  input: AccessControlListConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyPath !== undefined && input.KeyPath !== null && { KeyPath: input.KeyPath }),
  };
};

const serializeAws_json1_1AclConfiguration = (input: AclConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AllowedGroupsColumnName !== undefined &&
      input.AllowedGroupsColumnName !== null && { AllowedGroupsColumnName: input.AllowedGroupsColumnName }),
  };
};

const serializeAws_json1_1AttributeFilter = (input: AttributeFilter, context: __SerdeContext): any => {
  return {
    ...(input.AndAllFilters !== undefined &&
      input.AndAllFilters !== null && {
        AndAllFilters: serializeAws_json1_1AttributeFilterList(input.AndAllFilters, context),
      }),
    ...(input.ContainsAll !== undefined &&
      input.ContainsAll !== null && { ContainsAll: serializeAws_json1_1DocumentAttribute(input.ContainsAll, context) }),
    ...(input.ContainsAny !== undefined &&
      input.ContainsAny !== null && { ContainsAny: serializeAws_json1_1DocumentAttribute(input.ContainsAny, context) }),
    ...(input.EqualsTo !== undefined &&
      input.EqualsTo !== null && { EqualsTo: serializeAws_json1_1DocumentAttribute(input.EqualsTo, context) }),
    ...(input.GreaterThan !== undefined &&
      input.GreaterThan !== null && { GreaterThan: serializeAws_json1_1DocumentAttribute(input.GreaterThan, context) }),
    ...(input.GreaterThanOrEquals !== undefined &&
      input.GreaterThanOrEquals !== null && {
        GreaterThanOrEquals: serializeAws_json1_1DocumentAttribute(input.GreaterThanOrEquals, context),
      }),
    ...(input.LessThan !== undefined &&
      input.LessThan !== null && { LessThan: serializeAws_json1_1DocumentAttribute(input.LessThan, context) }),
    ...(input.LessThanOrEquals !== undefined &&
      input.LessThanOrEquals !== null && {
        LessThanOrEquals: serializeAws_json1_1DocumentAttribute(input.LessThanOrEquals, context),
      }),
    ...(input.NotFilter !== undefined &&
      input.NotFilter !== null && { NotFilter: serializeAws_json1_1AttributeFilter(input.NotFilter, context) }),
    ...(input.OrAllFilters !== undefined &&
      input.OrAllFilters !== null && {
        OrAllFilters: serializeAws_json1_1AttributeFilterList(input.OrAllFilters, context),
      }),
  };
};

const serializeAws_json1_1AttributeFilterList = (input: AttributeFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1AttributeFilter(entry, context);
    });
};

const serializeAws_json1_1AuthenticationConfiguration = (
  input: AuthenticationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BasicAuthentication !== undefined &&
      input.BasicAuthentication !== null && {
        BasicAuthentication: serializeAws_json1_1BasicAuthenticationConfigurationList(
          input.BasicAuthentication,
          context
        ),
      }),
  };
};

const serializeAws_json1_1BasicAuthenticationConfiguration = (
  input: BasicAuthenticationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Credentials !== undefined && input.Credentials !== null && { Credentials: input.Credentials }),
    ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
  };
};

const serializeAws_json1_1BasicAuthenticationConfigurationList = (
  input: BasicAuthenticationConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1BasicAuthenticationConfiguration(entry, context);
    });
};

const serializeAws_json1_1BatchDeleteDocumentRequest = (
  input: BatchDeleteDocumentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceSyncJobMetricTarget !== undefined &&
      input.DataSourceSyncJobMetricTarget !== null && {
        DataSourceSyncJobMetricTarget: serializeAws_json1_1DataSourceSyncJobMetricTarget(
          input.DataSourceSyncJobMetricTarget,
          context
        ),
      }),
    ...(input.DocumentIdList !== undefined &&
      input.DocumentIdList !== null && {
        DocumentIdList: serializeAws_json1_1DocumentIdList(input.DocumentIdList, context),
      }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1BatchGetDocumentStatusRequest = (
  input: BatchGetDocumentStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentInfoList !== undefined &&
      input.DocumentInfoList !== null && {
        DocumentInfoList: serializeAws_json1_1DocumentInfoList(input.DocumentInfoList, context),
      }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1BatchPutDocumentRequest = (input: BatchPutDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.Documents !== undefined &&
      input.Documents !== null && { Documents: serializeAws_json1_1DocumentList(input.Documents, context) }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_1CapacityUnitsConfiguration = (
  input: CapacityUnitsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.QueryCapacityUnits !== undefined &&
      input.QueryCapacityUnits !== null && { QueryCapacityUnits: input.QueryCapacityUnits }),
    ...(input.StorageCapacityUnits !== undefined &&
      input.StorageCapacityUnits !== null && { StorageCapacityUnits: input.StorageCapacityUnits }),
  };
};

const serializeAws_json1_1ChangeDetectingColumns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ClearQuerySuggestionsRequest = (
  input: ClearQuerySuggestionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1ClickFeedback = (input: ClickFeedback, context: __SerdeContext): any => {
  return {
    ...(input.ClickTime !== undefined &&
      input.ClickTime !== null && { ClickTime: Math.round(input.ClickTime.getTime() / 1000) }),
    ...(input.ResultId !== undefined && input.ResultId !== null && { ResultId: input.ResultId }),
  };
};

const serializeAws_json1_1ClickFeedbackList = (input: ClickFeedback[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ClickFeedback(entry, context);
    });
};

const serializeAws_json1_1ColumnConfiguration = (input: ColumnConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ChangeDetectingColumns !== undefined &&
      input.ChangeDetectingColumns !== null && {
        ChangeDetectingColumns: serializeAws_json1_1ChangeDetectingColumns(input.ChangeDetectingColumns, context),
      }),
    ...(input.DocumentDataColumnName !== undefined &&
      input.DocumentDataColumnName !== null && { DocumentDataColumnName: input.DocumentDataColumnName }),
    ...(input.DocumentIdColumnName !== undefined &&
      input.DocumentIdColumnName !== null && { DocumentIdColumnName: input.DocumentIdColumnName }),
    ...(input.DocumentTitleColumnName !== undefined &&
      input.DocumentTitleColumnName !== null && { DocumentTitleColumnName: input.DocumentTitleColumnName }),
    ...(input.FieldMappings !== undefined &&
      input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
      }),
  };
};

const serializeAws_json1_1ConfluenceAttachmentConfiguration = (
  input: ConfluenceAttachmentConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttachmentFieldMappings !== undefined &&
      input.AttachmentFieldMappings !== null && {
        AttachmentFieldMappings: serializeAws_json1_1ConfluenceAttachmentFieldMappingsList(
          input.AttachmentFieldMappings,
          context
        ),
      }),
    ...(input.CrawlAttachments !== undefined &&
      input.CrawlAttachments !== null && { CrawlAttachments: input.CrawlAttachments }),
  };
};

const serializeAws_json1_1ConfluenceAttachmentFieldMappingsList = (
  input: ConfluenceAttachmentToIndexFieldMapping[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping(entry, context);
    });
};

const serializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping = (
  input: ConfluenceAttachmentToIndexFieldMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceFieldName !== undefined &&
      input.DataSourceFieldName !== null && { DataSourceFieldName: input.DataSourceFieldName }),
    ...(input.DateFieldFormat !== undefined &&
      input.DateFieldFormat !== null && { DateFieldFormat: input.DateFieldFormat }),
    ...(input.IndexFieldName !== undefined &&
      input.IndexFieldName !== null && { IndexFieldName: input.IndexFieldName }),
  };
};

const serializeAws_json1_1ConfluenceBlogConfiguration = (
  input: ConfluenceBlogConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BlogFieldMappings !== undefined &&
      input.BlogFieldMappings !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ConfluenceBlogToIndexFieldMapping(entry, context);
    });
};

const serializeAws_json1_1ConfluenceBlogToIndexFieldMapping = (
  input: ConfluenceBlogToIndexFieldMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceFieldName !== undefined &&
      input.DataSourceFieldName !== null && { DataSourceFieldName: input.DataSourceFieldName }),
    ...(input.DateFieldFormat !== undefined &&
      input.DateFieldFormat !== null && { DateFieldFormat: input.DateFieldFormat }),
    ...(input.IndexFieldName !== undefined &&
      input.IndexFieldName !== null && { IndexFieldName: input.IndexFieldName }),
  };
};

const serializeAws_json1_1ConfluenceConfiguration = (input: ConfluenceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AttachmentConfiguration !== undefined &&
      input.AttachmentConfiguration !== null && {
        AttachmentConfiguration: serializeAws_json1_1ConfluenceAttachmentConfiguration(
          input.AttachmentConfiguration,
          context
        ),
      }),
    ...(input.BlogConfiguration !== undefined &&
      input.BlogConfiguration !== null && {
        BlogConfiguration: serializeAws_json1_1ConfluenceBlogConfiguration(input.BlogConfiguration, context),
      }),
    ...(input.ExclusionPatterns !== undefined &&
      input.ExclusionPatterns !== null && {
        ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
      }),
    ...(input.InclusionPatterns !== undefined &&
      input.InclusionPatterns !== null && {
        InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
      }),
    ...(input.PageConfiguration !== undefined &&
      input.PageConfiguration !== null && {
        PageConfiguration: serializeAws_json1_1ConfluencePageConfiguration(input.PageConfiguration, context),
      }),
    ...(input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }),
    ...(input.ServerUrl !== undefined && input.ServerUrl !== null && { ServerUrl: input.ServerUrl }),
    ...(input.SpaceConfiguration !== undefined &&
      input.SpaceConfiguration !== null && {
        SpaceConfiguration: serializeAws_json1_1ConfluenceSpaceConfiguration(input.SpaceConfiguration, context),
      }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
    ...(input.VpcConfiguration !== undefined &&
      input.VpcConfiguration !== null && {
        VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
      }),
  };
};

const serializeAws_json1_1ConfluencePageConfiguration = (
  input: ConfluencePageConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.PageFieldMappings !== undefined &&
      input.PageFieldMappings !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ConfluencePageToIndexFieldMapping(entry, context);
    });
};

const serializeAws_json1_1ConfluencePageToIndexFieldMapping = (
  input: ConfluencePageToIndexFieldMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceFieldName !== undefined &&
      input.DataSourceFieldName !== null && { DataSourceFieldName: input.DataSourceFieldName }),
    ...(input.DateFieldFormat !== undefined &&
      input.DateFieldFormat !== null && { DateFieldFormat: input.DateFieldFormat }),
    ...(input.IndexFieldName !== undefined &&
      input.IndexFieldName !== null && { IndexFieldName: input.IndexFieldName }),
  };
};

const serializeAws_json1_1ConfluenceSpaceConfiguration = (
  input: ConfluenceSpaceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CrawlArchivedSpaces !== undefined &&
      input.CrawlArchivedSpaces !== null && { CrawlArchivedSpaces: input.CrawlArchivedSpaces }),
    ...(input.CrawlPersonalSpaces !== undefined &&
      input.CrawlPersonalSpaces !== null && { CrawlPersonalSpaces: input.CrawlPersonalSpaces }),
    ...(input.ExcludeSpaces !== undefined &&
      input.ExcludeSpaces !== null && {
        ExcludeSpaces: serializeAws_json1_1ConfluenceSpaceList(input.ExcludeSpaces, context),
      }),
    ...(input.IncludeSpaces !== undefined &&
      input.IncludeSpaces !== null && {
        IncludeSpaces: serializeAws_json1_1ConfluenceSpaceList(input.IncludeSpaces, context),
      }),
    ...(input.SpaceFieldMappings !== undefined &&
      input.SpaceFieldMappings !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ConfluenceSpaceToIndexFieldMapping(entry, context);
    });
};

const serializeAws_json1_1ConfluenceSpaceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ConfluenceSpaceToIndexFieldMapping = (
  input: ConfluenceSpaceToIndexFieldMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceFieldName !== undefined &&
      input.DataSourceFieldName !== null && { DataSourceFieldName: input.DataSourceFieldName }),
    ...(input.DateFieldFormat !== undefined &&
      input.DateFieldFormat !== null && { DateFieldFormat: input.DateFieldFormat }),
    ...(input.IndexFieldName !== undefined &&
      input.IndexFieldName !== null && { IndexFieldName: input.IndexFieldName }),
  };
};

const serializeAws_json1_1ConnectionConfiguration = (input: ConnectionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseHost !== undefined && input.DatabaseHost !== null && { DatabaseHost: input.DatabaseHost }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.DatabasePort !== undefined && input.DatabasePort !== null && { DatabasePort: input.DatabasePort }),
    ...(input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1CreateDataSourceRequest = (input: CreateDataSourceRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Configuration !== undefined &&
      input.Configuration !== null && {
        Configuration: serializeAws_json1_1DataSourceConfiguration(input.Configuration, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1CreateFaqRequest = (input: CreateFaqRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.FileFormat !== undefined && input.FileFormat !== null && { FileFormat: input.FileFormat }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.S3Path !== undefined &&
      input.S3Path !== null && { S3Path: serializeAws_json1_1S3Path(input.S3Path, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateIndexRequest = (input: CreateIndexRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Edition !== undefined && input.Edition !== null && { Edition: input.Edition }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.ServerSideEncryptionConfiguration !== undefined &&
      input.ServerSideEncryptionConfiguration !== null && {
        ServerSideEncryptionConfiguration: serializeAws_json1_1ServerSideEncryptionConfiguration(
          input.ServerSideEncryptionConfiguration,
          context
        ),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.UserContextPolicy !== undefined &&
      input.UserContextPolicy !== null && { UserContextPolicy: input.UserContextPolicy }),
    ...(input.UserTokenConfigurations !== undefined &&
      input.UserTokenConfigurations !== null && {
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
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.SourceS3Path !== undefined &&
      input.SourceS3Path !== null && { SourceS3Path: serializeAws_json1_1S3Path(input.SourceS3Path, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateThesaurusRequest = (input: CreateThesaurusRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.SourceS3Path !== undefined &&
      input.SourceS3Path !== null && { SourceS3Path: serializeAws_json1_1S3Path(input.SourceS3Path, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1DatabaseConfiguration = (input: DatabaseConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AclConfiguration !== undefined &&
      input.AclConfiguration !== null && {
        AclConfiguration: serializeAws_json1_1AclConfiguration(input.AclConfiguration, context),
      }),
    ...(input.ColumnConfiguration !== undefined &&
      input.ColumnConfiguration !== null && {
        ColumnConfiguration: serializeAws_json1_1ColumnConfiguration(input.ColumnConfiguration, context),
      }),
    ...(input.ConnectionConfiguration !== undefined &&
      input.ConnectionConfiguration !== null && {
        ConnectionConfiguration: serializeAws_json1_1ConnectionConfiguration(input.ConnectionConfiguration, context),
      }),
    ...(input.DatabaseEngineType !== undefined &&
      input.DatabaseEngineType !== null && { DatabaseEngineType: input.DatabaseEngineType }),
    ...(input.SqlConfiguration !== undefined &&
      input.SqlConfiguration !== null && {
        SqlConfiguration: serializeAws_json1_1SqlConfiguration(input.SqlConfiguration, context),
      }),
    ...(input.VpcConfiguration !== undefined &&
      input.VpcConfiguration !== null && {
        VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
      }),
  };
};

const serializeAws_json1_1DataSourceConfiguration = (input: DataSourceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ConfluenceConfiguration !== undefined &&
      input.ConfluenceConfiguration !== null && {
        ConfluenceConfiguration: serializeAws_json1_1ConfluenceConfiguration(input.ConfluenceConfiguration, context),
      }),
    ...(input.DatabaseConfiguration !== undefined &&
      input.DatabaseConfiguration !== null && {
        DatabaseConfiguration: serializeAws_json1_1DatabaseConfiguration(input.DatabaseConfiguration, context),
      }),
    ...(input.GoogleDriveConfiguration !== undefined &&
      input.GoogleDriveConfiguration !== null && {
        GoogleDriveConfiguration: serializeAws_json1_1GoogleDriveConfiguration(input.GoogleDriveConfiguration, context),
      }),
    ...(input.OneDriveConfiguration !== undefined &&
      input.OneDriveConfiguration !== null && {
        OneDriveConfiguration: serializeAws_json1_1OneDriveConfiguration(input.OneDriveConfiguration, context),
      }),
    ...(input.S3Configuration !== undefined &&
      input.S3Configuration !== null && {
        S3Configuration: serializeAws_json1_1S3DataSourceConfiguration(input.S3Configuration, context),
      }),
    ...(input.SalesforceConfiguration !== undefined &&
      input.SalesforceConfiguration !== null && {
        SalesforceConfiguration: serializeAws_json1_1SalesforceConfiguration(input.SalesforceConfiguration, context),
      }),
    ...(input.ServiceNowConfiguration !== undefined &&
      input.ServiceNowConfiguration !== null && {
        ServiceNowConfiguration: serializeAws_json1_1ServiceNowConfiguration(input.ServiceNowConfiguration, context),
      }),
    ...(input.SharePointConfiguration !== undefined &&
      input.SharePointConfiguration !== null && {
        SharePointConfiguration: serializeAws_json1_1SharePointConfiguration(input.SharePointConfiguration, context),
      }),
    ...(input.WebCrawlerConfiguration !== undefined &&
      input.WebCrawlerConfiguration !== null && {
        WebCrawlerConfiguration: serializeAws_json1_1WebCrawlerConfiguration(input.WebCrawlerConfiguration, context),
      }),
    ...(input.WorkDocsConfiguration !== undefined &&
      input.WorkDocsConfiguration !== null && {
        WorkDocsConfiguration: serializeAws_json1_1WorkDocsConfiguration(input.WorkDocsConfiguration, context),
      }),
  };
};

const serializeAws_json1_1DataSourceGroup = (input: DataSourceGroup, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceId !== undefined && input.DataSourceId !== null && { DataSourceId: input.DataSourceId }),
    ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
  };
};

const serializeAws_json1_1DataSourceGroups = (input: DataSourceGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1DataSourceGroup(entry, context);
    });
};

const serializeAws_json1_1DataSourceInclusionsExclusionsStrings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DataSourceSyncJobMetricTarget = (
  input: DataSourceSyncJobMetricTarget,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceId !== undefined && input.DataSourceId !== null && { DataSourceId: input.DataSourceId }),
    ...(input.DataSourceSyncJobId !== undefined &&
      input.DataSourceSyncJobId !== null && { DataSourceSyncJobId: input.DataSourceSyncJobId }),
  };
};

const serializeAws_json1_1DataSourceToIndexFieldMapping = (
  input: DataSourceToIndexFieldMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceFieldName !== undefined &&
      input.DataSourceFieldName !== null && { DataSourceFieldName: input.DataSourceFieldName }),
    ...(input.DateFieldFormat !== undefined &&
      input.DateFieldFormat !== null && { DateFieldFormat: input.DateFieldFormat }),
    ...(input.IndexFieldName !== undefined &&
      input.IndexFieldName !== null && { IndexFieldName: input.IndexFieldName }),
  };
};

const serializeAws_json1_1DataSourceToIndexFieldMappingList = (
  input: DataSourceToIndexFieldMapping[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1DataSourceToIndexFieldMapping(entry, context);
    });
};

const serializeAws_json1_1DataSourceVpcConfiguration = (
  input: DataSourceVpcConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_json1_1SecurityGroupIdList(input.SecurityGroupIds, context),
      }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIdList(input.SubnetIds, context) }),
  };
};

const serializeAws_json1_1DeleteDataSourceRequest = (input: DeleteDataSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DeleteFaqRequest = (input: DeleteFaqRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DeleteIndexRequest = (input: DeleteIndexRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
  };
};

const serializeAws_json1_1DeletePrincipalMappingRequest = (
  input: DeletePrincipalMappingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceId !== undefined && input.DataSourceId !== null && { DataSourceId: input.DataSourceId }),
    ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    ...(input.OrderingId !== undefined && input.OrderingId !== null && { OrderingId: input.OrderingId }),
  };
};

const serializeAws_json1_1DeleteQuerySuggestionsBlockListRequest = (
  input: DeleteQuerySuggestionsBlockListRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DeleteThesaurusRequest = (input: DeleteThesaurusRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DescribeDataSourceRequest = (
  input: DescribeDataSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DescribeFaqRequest = (input: DescribeFaqRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DescribeIndexRequest = (input: DescribeIndexRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
  };
};

const serializeAws_json1_1DescribePrincipalMappingRequest = (
  input: DescribePrincipalMappingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceId !== undefined && input.DataSourceId !== null && { DataSourceId: input.DataSourceId }),
    ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DescribeQuerySuggestionsBlockListRequest = (
  input: DescribeQuerySuggestionsBlockListRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DescribeQuerySuggestionsConfigRequest = (
  input: DescribeQuerySuggestionsConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DescribeThesaurusRequest = (
  input: DescribeThesaurusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1Document = (input: Document, context: __SerdeContext): any => {
  return {
    ...(input.AccessControlList !== undefined &&
      input.AccessControlList !== null && {
        AccessControlList: serializeAws_json1_1PrincipalList(input.AccessControlList, context),
      }),
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && {
        Attributes: serializeAws_json1_1DocumentAttributeList(input.Attributes, context),
      }),
    ...(input.Blob !== undefined && input.Blob !== null && { Blob: context.base64Encoder(input.Blob) }),
    ...(input.ContentType !== undefined && input.ContentType !== null && { ContentType: input.ContentType }),
    ...(input.HierarchicalAccessControlList !== undefined &&
      input.HierarchicalAccessControlList !== null && {
        HierarchicalAccessControlList: serializeAws_json1_1HierarchicalPrincipalList(
          input.HierarchicalAccessControlList,
          context
        ),
      }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.S3Path !== undefined &&
      input.S3Path !== null && { S3Path: serializeAws_json1_1S3Path(input.S3Path, context) }),
    ...(input.Title !== undefined && input.Title !== null && { Title: input.Title }),
  };
};

const serializeAws_json1_1DocumentAttribute = (input: DocumentAttribute, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined &&
      input.Value !== null && { Value: serializeAws_json1_1DocumentAttributeValue(input.Value, context) }),
  };
};

const serializeAws_json1_1DocumentAttributeKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DocumentAttributeList = (input: DocumentAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1DocumentAttribute(entry, context);
    });
};

const serializeAws_json1_1DocumentAttributeStringListValue = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DocumentAttributeValue = (input: DocumentAttributeValue, context: __SerdeContext): any => {
  return DocumentAttributeValue.visit(input, {
    DateValue: (value) => ({ DateValue: Math.round(value.getTime() / 1000) }),
    LongValue: (value) => ({ LongValue: value }),
    StringListValue: (value) => ({
      StringListValue: serializeAws_json1_1DocumentAttributeStringListValue(value, context),
    }),
    StringValue: (value) => ({ StringValue: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_json1_1DocumentIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DocumentInfo = (input: DocumentInfo, context: __SerdeContext): any => {
  return {
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && {
        Attributes: serializeAws_json1_1DocumentAttributeList(input.Attributes, context),
      }),
    ...(input.DocumentId !== undefined && input.DocumentId !== null && { DocumentId: input.DocumentId }),
  };
};

const serializeAws_json1_1DocumentInfoList = (input: DocumentInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1DocumentInfo(entry, context);
    });
};

const serializeAws_json1_1DocumentList = (input: Document[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Document(entry, context);
    });
};

const serializeAws_json1_1DocumentMetadataConfiguration = (
  input: DocumentMetadataConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Relevance !== undefined &&
      input.Relevance !== null && { Relevance: serializeAws_json1_1Relevance(input.Relevance, context) }),
    ...(input.Search !== undefined &&
      input.Search !== null && { Search: serializeAws_json1_1Search(input.Search, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1DocumentMetadataConfigurationList = (
  input: DocumentMetadataConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1DocumentMetadataConfiguration(entry, context);
    });
};

const serializeAws_json1_1DocumentRelevanceConfiguration = (
  input: DocumentRelevanceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Relevance !== undefined &&
      input.Relevance !== null && { Relevance: serializeAws_json1_1Relevance(input.Relevance, context) }),
  };
};

const serializeAws_json1_1DocumentRelevanceOverrideConfigurationList = (
  input: DocumentRelevanceConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1DocumentRelevanceConfiguration(entry, context);
    });
};

const serializeAws_json1_1DocumentsMetadataConfiguration = (
  input: DocumentsMetadataConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Prefix !== undefined && input.S3Prefix !== null && { S3Prefix: input.S3Prefix }),
  };
};

const serializeAws_json1_1ExcludeMimeTypesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ExcludeSharedDrivesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ExcludeUserAccountsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Facet = (input: Facet, context: __SerdeContext): any => {
  return {
    ...(input.DocumentAttributeKey !== undefined &&
      input.DocumentAttributeKey !== null && { DocumentAttributeKey: input.DocumentAttributeKey }),
  };
};

const serializeAws_json1_1FacetList = (input: Facet[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Facet(entry, context);
    });
};

const serializeAws_json1_1GetQuerySuggestionsRequest = (
  input: GetQuerySuggestionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    ...(input.MaxSuggestionsCount !== undefined &&
      input.MaxSuggestionsCount !== null && { MaxSuggestionsCount: input.MaxSuggestionsCount }),
    ...(input.QueryText !== undefined && input.QueryText !== null && { QueryText: input.QueryText }),
  };
};

const serializeAws_json1_1GoogleDriveConfiguration = (
  input: GoogleDriveConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExcludeMimeTypes !== undefined &&
      input.ExcludeMimeTypes !== null && {
        ExcludeMimeTypes: serializeAws_json1_1ExcludeMimeTypesList(input.ExcludeMimeTypes, context),
      }),
    ...(input.ExcludeSharedDrives !== undefined &&
      input.ExcludeSharedDrives !== null && {
        ExcludeSharedDrives: serializeAws_json1_1ExcludeSharedDrivesList(input.ExcludeSharedDrives, context),
      }),
    ...(input.ExcludeUserAccounts !== undefined &&
      input.ExcludeUserAccounts !== null && {
        ExcludeUserAccounts: serializeAws_json1_1ExcludeUserAccountsList(input.ExcludeUserAccounts, context),
      }),
    ...(input.ExclusionPatterns !== undefined &&
      input.ExclusionPatterns !== null && {
        ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
      }),
    ...(input.FieldMappings !== undefined &&
      input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
      }),
    ...(input.InclusionPatterns !== undefined &&
      input.InclusionPatterns !== null && {
        InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
      }),
    ...(input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }),
  };
};

const serializeAws_json1_1GroupMembers = (input: GroupMembers, context: __SerdeContext): any => {
  return {
    ...(input.MemberGroups !== undefined &&
      input.MemberGroups !== null && { MemberGroups: serializeAws_json1_1MemberGroups(input.MemberGroups, context) }),
    ...(input.MemberUsers !== undefined &&
      input.MemberUsers !== null && { MemberUsers: serializeAws_json1_1MemberUsers(input.MemberUsers, context) }),
    ...(input.S3PathforGroupMembers !== undefined &&
      input.S3PathforGroupMembers !== null && {
        S3PathforGroupMembers: serializeAws_json1_1S3Path(input.S3PathforGroupMembers, context),
      }),
  };
};

const serializeAws_json1_1Groups = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1HierarchicalPrincipal = (input: HierarchicalPrincipal, context: __SerdeContext): any => {
  return {
    ...(input.PrincipalList !== undefined &&
      input.PrincipalList !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1HierarchicalPrincipal(entry, context);
    });
};

const serializeAws_json1_1JsonTokenTypeConfiguration = (
  input: JsonTokenTypeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupAttributeField !== undefined &&
      input.GroupAttributeField !== null && { GroupAttributeField: input.GroupAttributeField }),
    ...(input.UserNameAttributeField !== undefined &&
      input.UserNameAttributeField !== null && { UserNameAttributeField: input.UserNameAttributeField }),
  };
};

const serializeAws_json1_1JwtTokenTypeConfiguration = (
  input: JwtTokenTypeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClaimRegex !== undefined && input.ClaimRegex !== null && { ClaimRegex: input.ClaimRegex }),
    ...(input.GroupAttributeField !== undefined &&
      input.GroupAttributeField !== null && { GroupAttributeField: input.GroupAttributeField }),
    ...(input.Issuer !== undefined && input.Issuer !== null && { Issuer: input.Issuer }),
    ...(input.KeyLocation !== undefined && input.KeyLocation !== null && { KeyLocation: input.KeyLocation }),
    ...(input.SecretManagerArn !== undefined &&
      input.SecretManagerArn !== null && { SecretManagerArn: input.SecretManagerArn }),
    ...(input.URL !== undefined && input.URL !== null && { URL: input.URL }),
    ...(input.UserNameAttributeField !== undefined &&
      input.UserNameAttributeField !== null && { UserNameAttributeField: input.UserNameAttributeField }),
  };
};

const serializeAws_json1_1ListDataSourcesRequest = (input: ListDataSourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDataSourceSyncJobsRequest = (
  input: ListDataSourceSyncJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StartTimeFilter !== undefined &&
      input.StartTimeFilter !== null && {
        StartTimeFilter: serializeAws_json1_1TimeRange(input.StartTimeFilter, context),
      }),
    ...(input.StatusFilter !== undefined && input.StatusFilter !== null && { StatusFilter: input.StatusFilter }),
  };
};

const serializeAws_json1_1ListFaqsRequest = (input: ListFaqsRequest, context: __SerdeContext): any => {
  return {
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListGroupsOlderThanOrderingIdRequest = (
  input: ListGroupsOlderThanOrderingIdRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceId !== undefined && input.DataSourceId !== null && { DataSourceId: input.DataSourceId }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.OrderingId !== undefined && input.OrderingId !== null && { OrderingId: input.OrderingId }),
  };
};

const serializeAws_json1_1ListIndicesRequest = (input: ListIndicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListQuerySuggestionsBlockListsRequest = (
  input: ListQuerySuggestionsBlockListsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1ListThesauriRequest = (input: ListThesauriRequest, context: __SerdeContext): any => {
  return {
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1MemberGroup = (input: MemberGroup, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceId !== undefined && input.DataSourceId !== null && { DataSourceId: input.DataSourceId }),
    ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
  };
};

const serializeAws_json1_1MemberGroups = (input: MemberGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1MemberGroup(entry, context);
    });
};

const serializeAws_json1_1MemberUser = (input: MemberUser, context: __SerdeContext): any => {
  return {
    ...(input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }),
  };
};

const serializeAws_json1_1MemberUsers = (input: MemberUser[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1MemberUser(entry, context);
    });
};

const serializeAws_json1_1OneDriveConfiguration = (input: OneDriveConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DisableLocalGroups !== undefined &&
      input.DisableLocalGroups !== null && { DisableLocalGroups: input.DisableLocalGroups }),
    ...(input.ExclusionPatterns !== undefined &&
      input.ExclusionPatterns !== null && {
        ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
      }),
    ...(input.FieldMappings !== undefined &&
      input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
      }),
    ...(input.InclusionPatterns !== undefined &&
      input.InclusionPatterns !== null && {
        InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
      }),
    ...(input.OneDriveUsers !== undefined &&
      input.OneDriveUsers !== null && {
        OneDriveUsers: serializeAws_json1_1OneDriveUsers(input.OneDriveUsers, context),
      }),
    ...(input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }),
    ...(input.TenantDomain !== undefined && input.TenantDomain !== null && { TenantDomain: input.TenantDomain }),
  };
};

const serializeAws_json1_1OneDriveUserList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1OneDriveUsers = (input: OneDriveUsers, context: __SerdeContext): any => {
  return {
    ...(input.OneDriveUserList !== undefined &&
      input.OneDriveUserList !== null && {
        OneDriveUserList: serializeAws_json1_1OneDriveUserList(input.OneDriveUserList, context),
      }),
    ...(input.OneDriveUserS3Path !== undefined &&
      input.OneDriveUserS3Path !== null && {
        OneDriveUserS3Path: serializeAws_json1_1S3Path(input.OneDriveUserS3Path, context),
      }),
  };
};

const serializeAws_json1_1Principal = (input: Principal, context: __SerdeContext): any => {
  return {
    ...(input.Access !== undefined && input.Access !== null && { Access: input.Access }),
    ...(input.DataSourceId !== undefined && input.DataSourceId !== null && { DataSourceId: input.DataSourceId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1PrincipalList = (input: Principal[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Principal(entry, context);
    });
};

const serializeAws_json1_1ProxyConfiguration = (input: ProxyConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Credentials !== undefined && input.Credentials !== null && { Credentials: input.Credentials }),
    ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
  };
};

const serializeAws_json1_1PutPrincipalMappingRequest = (
  input: PutPrincipalMappingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceId !== undefined && input.DataSourceId !== null && { DataSourceId: input.DataSourceId }),
    ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
    ...(input.GroupMembers !== undefined &&
      input.GroupMembers !== null && { GroupMembers: serializeAws_json1_1GroupMembers(input.GroupMembers, context) }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    ...(input.OrderingId !== undefined && input.OrderingId !== null && { OrderingId: input.OrderingId }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_1QueryRequest = (input: QueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.AttributeFilter !== undefined &&
      input.AttributeFilter !== null && {
        AttributeFilter: serializeAws_json1_1AttributeFilter(input.AttributeFilter, context),
      }),
    ...(input.DocumentRelevanceOverrideConfigurations !== undefined &&
      input.DocumentRelevanceOverrideConfigurations !== null && {
        DocumentRelevanceOverrideConfigurations: serializeAws_json1_1DocumentRelevanceOverrideConfigurationList(
          input.DocumentRelevanceOverrideConfigurations,
          context
        ),
      }),
    ...(input.Facets !== undefined &&
      input.Facets !== null && { Facets: serializeAws_json1_1FacetList(input.Facets, context) }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    ...(input.PageNumber !== undefined && input.PageNumber !== null && { PageNumber: input.PageNumber }),
    ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
    ...(input.QueryResultTypeFilter !== undefined &&
      input.QueryResultTypeFilter !== null && { QueryResultTypeFilter: input.QueryResultTypeFilter }),
    ...(input.QueryText !== undefined && input.QueryText !== null && { QueryText: input.QueryText }),
    ...(input.RequestedDocumentAttributes !== undefined &&
      input.RequestedDocumentAttributes !== null && {
        RequestedDocumentAttributes: serializeAws_json1_1DocumentAttributeKeyList(
          input.RequestedDocumentAttributes,
          context
        ),
      }),
    ...(input.SortingConfiguration !== undefined &&
      input.SortingConfiguration !== null && {
        SortingConfiguration: serializeAws_json1_1SortingConfiguration(input.SortingConfiguration, context),
      }),
    ...(input.UserContext !== undefined &&
      input.UserContext !== null && { UserContext: serializeAws_json1_1UserContext(input.UserContext, context) }),
    ...(input.VisitorId !== undefined && input.VisitorId !== null && { VisitorId: input.VisitorId }),
  };
};

const serializeAws_json1_1Relevance = (input: Relevance, context: __SerdeContext): any => {
  return {
    ...(input.Duration !== undefined && input.Duration !== null && { Duration: input.Duration }),
    ...(input.Freshness !== undefined && input.Freshness !== null && { Freshness: input.Freshness }),
    ...(input.Importance !== undefined && input.Importance !== null && { Importance: input.Importance }),
    ...(input.RankOrder !== undefined && input.RankOrder !== null && { RankOrder: input.RankOrder }),
    ...(input.ValueImportanceMap !== undefined &&
      input.ValueImportanceMap !== null && {
        ValueImportanceMap: serializeAws_json1_1ValueImportanceMap(input.ValueImportanceMap, context),
      }),
  };
};

const serializeAws_json1_1RelevanceFeedback = (input: RelevanceFeedback, context: __SerdeContext): any => {
  return {
    ...(input.RelevanceValue !== undefined &&
      input.RelevanceValue !== null && { RelevanceValue: input.RelevanceValue }),
    ...(input.ResultId !== undefined && input.ResultId !== null && { ResultId: input.ResultId }),
  };
};

const serializeAws_json1_1RelevanceFeedbackList = (input: RelevanceFeedback[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1RelevanceFeedback(entry, context);
    });
};

const serializeAws_json1_1S3DataSourceConfiguration = (
  input: S3DataSourceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessControlListConfiguration !== undefined &&
      input.AccessControlListConfiguration !== null && {
        AccessControlListConfiguration: serializeAws_json1_1AccessControlListConfiguration(
          input.AccessControlListConfiguration,
          context
        ),
      }),
    ...(input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName }),
    ...(input.DocumentsMetadataConfiguration !== undefined &&
      input.DocumentsMetadataConfiguration !== null && {
        DocumentsMetadataConfiguration: serializeAws_json1_1DocumentsMetadataConfiguration(
          input.DocumentsMetadataConfiguration,
          context
        ),
      }),
    ...(input.ExclusionPatterns !== undefined &&
      input.ExclusionPatterns !== null && {
        ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
      }),
    ...(input.InclusionPatterns !== undefined &&
      input.InclusionPatterns !== null && {
        InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
      }),
    ...(input.InclusionPrefixes !== undefined &&
      input.InclusionPrefixes !== null && {
        InclusionPrefixes: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPrefixes, context),
      }),
  };
};

const serializeAws_json1_1S3Path = (input: S3Path, context: __SerdeContext): any => {
  return {
    ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
  };
};

const serializeAws_json1_1SalesforceChatterFeedConfiguration = (
  input: SalesforceChatterFeedConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentDataFieldName !== undefined &&
      input.DocumentDataFieldName !== null && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName !== undefined &&
      input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.FieldMappings !== undefined &&
      input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
      }),
    ...(input.IncludeFilterTypes !== undefined &&
      input.IncludeFilterTypes !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SalesforceConfiguration = (input: SalesforceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ChatterFeedConfiguration !== undefined &&
      input.ChatterFeedConfiguration !== null && {
        ChatterFeedConfiguration: serializeAws_json1_1SalesforceChatterFeedConfiguration(
          input.ChatterFeedConfiguration,
          context
        ),
      }),
    ...(input.CrawlAttachments !== undefined &&
      input.CrawlAttachments !== null && { CrawlAttachments: input.CrawlAttachments }),
    ...(input.ExcludeAttachmentFilePatterns !== undefined &&
      input.ExcludeAttachmentFilePatterns !== null && {
        ExcludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
          input.ExcludeAttachmentFilePatterns,
          context
        ),
      }),
    ...(input.IncludeAttachmentFilePatterns !== undefined &&
      input.IncludeAttachmentFilePatterns !== null && {
        IncludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
          input.IncludeAttachmentFilePatterns,
          context
        ),
      }),
    ...(input.KnowledgeArticleConfiguration !== undefined &&
      input.KnowledgeArticleConfiguration !== null && {
        KnowledgeArticleConfiguration: serializeAws_json1_1SalesforceKnowledgeArticleConfiguration(
          input.KnowledgeArticleConfiguration,
          context
        ),
      }),
    ...(input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }),
    ...(input.ServerUrl !== undefined && input.ServerUrl !== null && { ServerUrl: input.ServerUrl }),
    ...(input.StandardObjectAttachmentConfiguration !== undefined &&
      input.StandardObjectAttachmentConfiguration !== null && {
        StandardObjectAttachmentConfiguration: serializeAws_json1_1SalesforceStandardObjectAttachmentConfiguration(
          input.StandardObjectAttachmentConfiguration,
          context
        ),
      }),
    ...(input.StandardObjectConfigurations !== undefined &&
      input.StandardObjectConfigurations !== null && {
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
    ...(input.DocumentDataFieldName !== undefined &&
      input.DocumentDataFieldName !== null && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName !== undefined &&
      input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.FieldMappings !== undefined &&
      input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfigurationList = (
  input: SalesforceCustomKnowledgeArticleTypeConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfiguration(entry, context);
    });
};

const serializeAws_json1_1SalesforceKnowledgeArticleConfiguration = (
  input: SalesforceKnowledgeArticleConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomKnowledgeArticleTypeConfigurations !== undefined &&
      input.CustomKnowledgeArticleTypeConfigurations !== null && {
        CustomKnowledgeArticleTypeConfigurations:
          serializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfigurationList(
            input.CustomKnowledgeArticleTypeConfigurations,
            context
          ),
      }),
    ...(input.IncludedStates !== undefined &&
      input.IncludedStates !== null && {
        IncludedStates: serializeAws_json1_1SalesforceKnowledgeArticleStateList(input.IncludedStates, context),
      }),
    ...(input.StandardKnowledgeArticleTypeConfiguration !== undefined &&
      input.StandardKnowledgeArticleTypeConfiguration !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SalesforceStandardKnowledgeArticleTypeConfiguration = (
  input: SalesforceStandardKnowledgeArticleTypeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentDataFieldName !== undefined &&
      input.DocumentDataFieldName !== null && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName !== undefined &&
      input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.FieldMappings !== undefined &&
      input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
      }),
  };
};

const serializeAws_json1_1SalesforceStandardObjectAttachmentConfiguration = (
  input: SalesforceStandardObjectAttachmentConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentTitleFieldName !== undefined &&
      input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.FieldMappings !== undefined &&
      input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
      }),
  };
};

const serializeAws_json1_1SalesforceStandardObjectConfiguration = (
  input: SalesforceStandardObjectConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentDataFieldName !== undefined &&
      input.DocumentDataFieldName !== null && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName !== undefined &&
      input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.FieldMappings !== undefined &&
      input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1SalesforceStandardObjectConfigurationList = (
  input: SalesforceStandardObjectConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1SalesforceStandardObjectConfiguration(entry, context);
    });
};

const serializeAws_json1_1Search = (input: Search, context: __SerdeContext): any => {
  return {
    ...(input.Displayable !== undefined && input.Displayable !== null && { Displayable: input.Displayable }),
    ...(input.Facetable !== undefined && input.Facetable !== null && { Facetable: input.Facetable }),
    ...(input.Searchable !== undefined && input.Searchable !== null && { Searchable: input.Searchable }),
    ...(input.Sortable !== undefined && input.Sortable !== null && { Sortable: input.Sortable }),
  };
};

const serializeAws_json1_1SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SeedUrlConfiguration = (input: SeedUrlConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SeedUrls !== undefined &&
      input.SeedUrls !== null && { SeedUrls: serializeAws_json1_1SeedUrlList(input.SeedUrls, context) }),
    ...(input.WebCrawlerMode !== undefined &&
      input.WebCrawlerMode !== null && { WebCrawlerMode: input.WebCrawlerMode }),
  };
};

const serializeAws_json1_1SeedUrlList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ServerSideEncryptionConfiguration = (
  input: ServerSideEncryptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
  };
};

const serializeAws_json1_1ServiceNowConfiguration = (input: ServiceNowConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationType !== undefined &&
      input.AuthenticationType !== null && { AuthenticationType: input.AuthenticationType }),
    ...(input.HostUrl !== undefined && input.HostUrl !== null && { HostUrl: input.HostUrl }),
    ...(input.KnowledgeArticleConfiguration !== undefined &&
      input.KnowledgeArticleConfiguration !== null && {
        KnowledgeArticleConfiguration: serializeAws_json1_1ServiceNowKnowledgeArticleConfiguration(
          input.KnowledgeArticleConfiguration,
          context
        ),
      }),
    ...(input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }),
    ...(input.ServiceCatalogConfiguration !== undefined &&
      input.ServiceCatalogConfiguration !== null && {
        ServiceCatalogConfiguration: serializeAws_json1_1ServiceNowServiceCatalogConfiguration(
          input.ServiceCatalogConfiguration,
          context
        ),
      }),
    ...(input.ServiceNowBuildVersion !== undefined &&
      input.ServiceNowBuildVersion !== null && { ServiceNowBuildVersion: input.ServiceNowBuildVersion }),
  };
};

const serializeAws_json1_1ServiceNowKnowledgeArticleConfiguration = (
  input: ServiceNowKnowledgeArticleConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CrawlAttachments !== undefined &&
      input.CrawlAttachments !== null && { CrawlAttachments: input.CrawlAttachments }),
    ...(input.DocumentDataFieldName !== undefined &&
      input.DocumentDataFieldName !== null && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName !== undefined &&
      input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.ExcludeAttachmentFilePatterns !== undefined &&
      input.ExcludeAttachmentFilePatterns !== null && {
        ExcludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
          input.ExcludeAttachmentFilePatterns,
          context
        ),
      }),
    ...(input.FieldMappings !== undefined &&
      input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
      }),
    ...(input.FilterQuery !== undefined && input.FilterQuery !== null && { FilterQuery: input.FilterQuery }),
    ...(input.IncludeAttachmentFilePatterns !== undefined &&
      input.IncludeAttachmentFilePatterns !== null && {
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
    ...(input.CrawlAttachments !== undefined &&
      input.CrawlAttachments !== null && { CrawlAttachments: input.CrawlAttachments }),
    ...(input.DocumentDataFieldName !== undefined &&
      input.DocumentDataFieldName !== null && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName !== undefined &&
      input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.ExcludeAttachmentFilePatterns !== undefined &&
      input.ExcludeAttachmentFilePatterns !== null && {
        ExcludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
          input.ExcludeAttachmentFilePatterns,
          context
        ),
      }),
    ...(input.FieldMappings !== undefined &&
      input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
      }),
    ...(input.IncludeAttachmentFilePatterns !== undefined &&
      input.IncludeAttachmentFilePatterns !== null && {
        IncludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
          input.IncludeAttachmentFilePatterns,
          context
        ),
      }),
  };
};

const serializeAws_json1_1SharePointConfiguration = (input: SharePointConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CrawlAttachments !== undefined &&
      input.CrawlAttachments !== null && { CrawlAttachments: input.CrawlAttachments }),
    ...(input.DisableLocalGroups !== undefined &&
      input.DisableLocalGroups !== null && { DisableLocalGroups: input.DisableLocalGroups }),
    ...(input.DocumentTitleFieldName !== undefined &&
      input.DocumentTitleFieldName !== null && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.ExclusionPatterns !== undefined &&
      input.ExclusionPatterns !== null && {
        ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
      }),
    ...(input.FieldMappings !== undefined &&
      input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
      }),
    ...(input.InclusionPatterns !== undefined &&
      input.InclusionPatterns !== null && {
        InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
      }),
    ...(input.SecretArn !== undefined && input.SecretArn !== null && { SecretArn: input.SecretArn }),
    ...(input.SharePointVersion !== undefined &&
      input.SharePointVersion !== null && { SharePointVersion: input.SharePointVersion }),
    ...(input.SslCertificateS3Path !== undefined &&
      input.SslCertificateS3Path !== null && {
        SslCertificateS3Path: serializeAws_json1_1S3Path(input.SslCertificateS3Path, context),
      }),
    ...(input.Urls !== undefined &&
      input.Urls !== null && { Urls: serializeAws_json1_1SharePointUrlList(input.Urls, context) }),
    ...(input.UseChangeLog !== undefined && input.UseChangeLog !== null && { UseChangeLog: input.UseChangeLog }),
    ...(input.VpcConfiguration !== undefined &&
      input.VpcConfiguration !== null && {
        VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
      }),
  };
};

const serializeAws_json1_1SharePointUrlList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SiteMapsConfiguration = (input: SiteMapsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SiteMaps !== undefined &&
      input.SiteMaps !== null && { SiteMaps: serializeAws_json1_1SiteMapsList(input.SiteMaps, context) }),
  };
};

const serializeAws_json1_1SiteMapsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SortingConfiguration = (input: SortingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DocumentAttributeKey !== undefined &&
      input.DocumentAttributeKey !== null && { DocumentAttributeKey: input.DocumentAttributeKey }),
    ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_json1_1SqlConfiguration = (input: SqlConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.QueryIdentifiersEnclosingOption !== undefined &&
      input.QueryIdentifiersEnclosingOption !== null && {
        QueryIdentifiersEnclosingOption: input.QueryIdentifiersEnclosingOption,
      }),
  };
};

const serializeAws_json1_1StartDataSourceSyncJobRequest = (
  input: StartDataSourceSyncJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1StopDataSourceSyncJobRequest = (
  input: StopDataSourceSyncJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1SubmitFeedbackRequest = (input: SubmitFeedbackRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClickFeedbackItems !== undefined &&
      input.ClickFeedbackItems !== null && {
        ClickFeedbackItems: serializeAws_json1_1ClickFeedbackList(input.ClickFeedbackItems, context),
      }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    ...(input.QueryId !== undefined && input.QueryId !== null && { QueryId: input.QueryId }),
    ...(input.RelevanceFeedbackItems !== undefined &&
      input.RelevanceFeedbackItems !== null && {
        RelevanceFeedbackItems: serializeAws_json1_1RelevanceFeedbackList(input.RelevanceFeedbackItems, context),
      }),
  };
};

const serializeAws_json1_1SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1TimeRange = (input: TimeRange, context: __SerdeContext): any => {
  return {
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateDataSourceRequest = (input: UpdateDataSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Configuration !== undefined &&
      input.Configuration !== null && {
        Configuration: serializeAws_json1_1DataSourceConfiguration(input.Configuration, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.Schedule !== undefined && input.Schedule !== null && { Schedule: input.Schedule }),
  };
};

const serializeAws_json1_1UpdateIndexRequest = (input: UpdateIndexRequest, context: __SerdeContext): any => {
  return {
    ...(input.CapacityUnits !== undefined &&
      input.CapacityUnits !== null && {
        CapacityUnits: serializeAws_json1_1CapacityUnitsConfiguration(input.CapacityUnits, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.DocumentMetadataConfigurationUpdates !== undefined &&
      input.DocumentMetadataConfigurationUpdates !== null && {
        DocumentMetadataConfigurationUpdates: serializeAws_json1_1DocumentMetadataConfigurationList(
          input.DocumentMetadataConfigurationUpdates,
          context
        ),
      }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.UserContextPolicy !== undefined &&
      input.UserContextPolicy !== null && { UserContextPolicy: input.UserContextPolicy }),
    ...(input.UserTokenConfigurations !== undefined &&
      input.UserTokenConfigurations !== null && {
        UserTokenConfigurations: serializeAws_json1_1UserTokenConfigurationList(input.UserTokenConfigurations, context),
      }),
  };
};

const serializeAws_json1_1UpdateQuerySuggestionsBlockListRequest = (
  input: UpdateQuerySuggestionsBlockListRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.SourceS3Path !== undefined &&
      input.SourceS3Path !== null && { SourceS3Path: serializeAws_json1_1S3Path(input.SourceS3Path, context) }),
  };
};

const serializeAws_json1_1UpdateQuerySuggestionsConfigRequest = (
  input: UpdateQuerySuggestionsConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IncludeQueriesWithoutUserInformation !== undefined &&
      input.IncludeQueriesWithoutUserInformation !== null && {
        IncludeQueriesWithoutUserInformation: input.IncludeQueriesWithoutUserInformation,
      }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    ...(input.MinimumNumberOfQueryingUsers !== undefined &&
      input.MinimumNumberOfQueryingUsers !== null && {
        MinimumNumberOfQueryingUsers: input.MinimumNumberOfQueryingUsers,
      }),
    ...(input.MinimumQueryCount !== undefined &&
      input.MinimumQueryCount !== null && { MinimumQueryCount: input.MinimumQueryCount }),
    ...(input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode }),
    ...(input.QueryLogLookBackWindowInDays !== undefined &&
      input.QueryLogLookBackWindowInDays !== null && {
        QueryLogLookBackWindowInDays: input.QueryLogLookBackWindowInDays,
      }),
  };
};

const serializeAws_json1_1UpdateThesaurusRequest = (input: UpdateThesaurusRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.IndexId !== undefined && input.IndexId !== null && { IndexId: input.IndexId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.SourceS3Path !== undefined &&
      input.SourceS3Path !== null && { SourceS3Path: serializeAws_json1_1S3Path(input.SourceS3Path, context) }),
  };
};

const serializeAws_json1_1Urls = (input: Urls, context: __SerdeContext): any => {
  return {
    ...(input.SeedUrlConfiguration !== undefined &&
      input.SeedUrlConfiguration !== null && {
        SeedUrlConfiguration: serializeAws_json1_1SeedUrlConfiguration(input.SeedUrlConfiguration, context),
      }),
    ...(input.SiteMapsConfiguration !== undefined &&
      input.SiteMapsConfiguration !== null && {
        SiteMapsConfiguration: serializeAws_json1_1SiteMapsConfiguration(input.SiteMapsConfiguration, context),
      }),
  };
};

const serializeAws_json1_1UserContext = (input: UserContext, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceGroups !== undefined &&
      input.DataSourceGroups !== null && {
        DataSourceGroups: serializeAws_json1_1DataSourceGroups(input.DataSourceGroups, context),
      }),
    ...(input.Groups !== undefined &&
      input.Groups !== null && { Groups: serializeAws_json1_1Groups(input.Groups, context) }),
    ...(input.Token !== undefined && input.Token !== null && { Token: input.Token }),
    ...(input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }),
  };
};

const serializeAws_json1_1UserTokenConfiguration = (input: UserTokenConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.JsonTokenTypeConfiguration !== undefined &&
      input.JsonTokenTypeConfiguration !== null && {
        JsonTokenTypeConfiguration: serializeAws_json1_1JsonTokenTypeConfiguration(
          input.JsonTokenTypeConfiguration,
          context
        ),
      }),
    ...(input.JwtTokenTypeConfiguration !== undefined &&
      input.JwtTokenTypeConfiguration !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1UserTokenConfiguration(entry, context);
    });
};

const serializeAws_json1_1ValueImportanceMap = (input: { [key: string]: number }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1WebCrawlerConfiguration = (input: WebCrawlerConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationConfiguration !== undefined &&
      input.AuthenticationConfiguration !== null && {
        AuthenticationConfiguration: serializeAws_json1_1AuthenticationConfiguration(
          input.AuthenticationConfiguration,
          context
        ),
      }),
    ...(input.CrawlDepth !== undefined && input.CrawlDepth !== null && { CrawlDepth: input.CrawlDepth }),
    ...(input.MaxContentSizePerPageInMegaBytes !== undefined &&
      input.MaxContentSizePerPageInMegaBytes !== null && {
        MaxContentSizePerPageInMegaBytes: __serializeFloat(input.MaxContentSizePerPageInMegaBytes),
      }),
    ...(input.MaxLinksPerPage !== undefined &&
      input.MaxLinksPerPage !== null && { MaxLinksPerPage: input.MaxLinksPerPage }),
    ...(input.MaxUrlsPerMinuteCrawlRate !== undefined &&
      input.MaxUrlsPerMinuteCrawlRate !== null && { MaxUrlsPerMinuteCrawlRate: input.MaxUrlsPerMinuteCrawlRate }),
    ...(input.ProxyConfiguration !== undefined &&
      input.ProxyConfiguration !== null && {
        ProxyConfiguration: serializeAws_json1_1ProxyConfiguration(input.ProxyConfiguration, context),
      }),
    ...(input.UrlExclusionPatterns !== undefined &&
      input.UrlExclusionPatterns !== null && {
        UrlExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
          input.UrlExclusionPatterns,
          context
        ),
      }),
    ...(input.UrlInclusionPatterns !== undefined &&
      input.UrlInclusionPatterns !== null && {
        UrlInclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
          input.UrlInclusionPatterns,
          context
        ),
      }),
    ...(input.Urls !== undefined && input.Urls !== null && { Urls: serializeAws_json1_1Urls(input.Urls, context) }),
  };
};

const serializeAws_json1_1WorkDocsConfiguration = (input: WorkDocsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CrawlComments !== undefined && input.CrawlComments !== null && { CrawlComments: input.CrawlComments }),
    ...(input.ExclusionPatterns !== undefined &&
      input.ExclusionPatterns !== null && {
        ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
      }),
    ...(input.FieldMappings !== undefined &&
      input.FieldMappings !== null && {
        FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
      }),
    ...(input.InclusionPatterns !== undefined &&
      input.InclusionPatterns !== null && {
        InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
      }),
    ...(input.OrganizationId !== undefined &&
      input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    ...(input.UseChangeLog !== undefined && input.UseChangeLog !== null && { UseChangeLog: input.UseChangeLog }),
  };
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
      output.Value !== undefined && output.Value !== null
        ? deserializeAws_json1_1AdditionalResultAttributeValue(output.Value, context)
        : undefined,
    ValueType: __expectString(output.ValueType),
  } as any;
};

const deserializeAws_json1_1AdditionalResultAttributeList = (
  output: any,
  context: __SerdeContext
): AdditionalResultAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AdditionalResultAttribute(entry, context);
    });
};

const deserializeAws_json1_1AdditionalResultAttributeValue = (
  output: any,
  context: __SerdeContext
): AdditionalResultAttributeValue => {
  return {
    TextWithHighlightsValue:
      output.TextWithHighlightsValue !== undefined && output.TextWithHighlightsValue !== null
        ? deserializeAws_json1_1TextWithHighlights(output.TextWithHighlightsValue, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AuthenticationConfiguration = (
  output: any,
  context: __SerdeContext
): AuthenticationConfiguration => {
  return {
    BasicAuthentication:
      output.BasicAuthentication !== undefined && output.BasicAuthentication !== null
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
    Port: __expectInt(output.Port),
  } as any;
};

const deserializeAws_json1_1BasicAuthenticationConfigurationList = (
  output: any,
  context: __SerdeContext
): BasicAuthenticationConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BasicAuthenticationConfiguration(entry, context);
    });
};

const deserializeAws_json1_1BatchDeleteDocumentResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteDocumentResponse => {
  return {
    FailedDocuments:
      output.FailedDocuments !== undefined && output.FailedDocuments !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocument(entry, context);
    });
};

const deserializeAws_json1_1BatchGetDocumentStatusResponse = (
  output: any,
  context: __SerdeContext
): BatchGetDocumentStatusResponse => {
  return {
    DocumentStatusList:
      output.DocumentStatusList !== undefined && output.DocumentStatusList !== null
        ? deserializeAws_json1_1DocumentStatusList(output.DocumentStatusList, context)
        : undefined,
    Errors:
      output.Errors !== undefined && output.Errors !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchGetDocumentStatusResponseError(entry, context);
    });
};

const deserializeAws_json1_1BatchPutDocumentResponse = (
  output: any,
  context: __SerdeContext
): BatchPutDocumentResponse => {
  return {
    FailedDocuments:
      output.FailedDocuments !== undefined && output.FailedDocuments !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchPutDocumentResponseFailedDocument(entry, context);
    });
};

const deserializeAws_json1_1CapacityUnitsConfiguration = (
  output: any,
  context: __SerdeContext
): CapacityUnitsConfiguration => {
  return {
    QueryCapacityUnits: __expectInt(output.QueryCapacityUnits),
    StorageCapacityUnits: __expectInt(output.StorageCapacityUnits),
  } as any;
};

const deserializeAws_json1_1ChangeDetectingColumns = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ColumnConfiguration = (output: any, context: __SerdeContext): ColumnConfiguration => {
  return {
    ChangeDetectingColumns:
      output.ChangeDetectingColumns !== undefined && output.ChangeDetectingColumns !== null
        ? deserializeAws_json1_1ChangeDetectingColumns(output.ChangeDetectingColumns, context)
        : undefined,
    DocumentDataColumnName: __expectString(output.DocumentDataColumnName),
    DocumentIdColumnName: __expectString(output.DocumentIdColumnName),
    DocumentTitleColumnName: __expectString(output.DocumentTitleColumnName),
    FieldMappings:
      output.FieldMappings !== undefined && output.FieldMappings !== null
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
      output.AttachmentFieldMappings !== undefined && output.AttachmentFieldMappings !== null
        ? deserializeAws_json1_1ConfluenceAttachmentFieldMappingsList(output.AttachmentFieldMappings, context)
        : undefined,
    CrawlAttachments: __expectBoolean(output.CrawlAttachments),
  } as any;
};

const deserializeAws_json1_1ConfluenceAttachmentFieldMappingsList = (
  output: any,
  context: __SerdeContext
): ConfluenceAttachmentToIndexFieldMapping[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping(entry, context);
    });
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
      output.BlogFieldMappings !== undefined && output.BlogFieldMappings !== null
        ? deserializeAws_json1_1ConfluenceBlogFieldMappingsList(output.BlogFieldMappings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConfluenceBlogFieldMappingsList = (
  output: any,
  context: __SerdeContext
): ConfluenceBlogToIndexFieldMapping[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConfluenceBlogToIndexFieldMapping(entry, context);
    });
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
      output.AttachmentConfiguration !== undefined && output.AttachmentConfiguration !== null
        ? deserializeAws_json1_1ConfluenceAttachmentConfiguration(output.AttachmentConfiguration, context)
        : undefined,
    BlogConfiguration:
      output.BlogConfiguration !== undefined && output.BlogConfiguration !== null
        ? deserializeAws_json1_1ConfluenceBlogConfiguration(output.BlogConfiguration, context)
        : undefined,
    ExclusionPatterns:
      output.ExclusionPatterns !== undefined && output.ExclusionPatterns !== null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns !== undefined && output.InclusionPatterns !== null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    PageConfiguration:
      output.PageConfiguration !== undefined && output.PageConfiguration !== null
        ? deserializeAws_json1_1ConfluencePageConfiguration(output.PageConfiguration, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    ServerUrl: __expectString(output.ServerUrl),
    SpaceConfiguration:
      output.SpaceConfiguration !== undefined && output.SpaceConfiguration !== null
        ? deserializeAws_json1_1ConfluenceSpaceConfiguration(output.SpaceConfiguration, context)
        : undefined,
    Version: __expectString(output.Version),
    VpcConfiguration:
      output.VpcConfiguration !== undefined && output.VpcConfiguration !== null
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
      output.PageFieldMappings !== undefined && output.PageFieldMappings !== null
        ? deserializeAws_json1_1ConfluencePageFieldMappingsList(output.PageFieldMappings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConfluencePageFieldMappingsList = (
  output: any,
  context: __SerdeContext
): ConfluencePageToIndexFieldMapping[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConfluencePageToIndexFieldMapping(entry, context);
    });
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
      output.ExcludeSpaces !== undefined && output.ExcludeSpaces !== null
        ? deserializeAws_json1_1ConfluenceSpaceList(output.ExcludeSpaces, context)
        : undefined,
    IncludeSpaces:
      output.IncludeSpaces !== undefined && output.IncludeSpaces !== null
        ? deserializeAws_json1_1ConfluenceSpaceList(output.IncludeSpaces, context)
        : undefined,
    SpaceFieldMappings:
      output.SpaceFieldMappings !== undefined && output.SpaceFieldMappings !== null
        ? deserializeAws_json1_1ConfluenceSpaceFieldMappingsList(output.SpaceFieldMappings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConfluenceSpaceFieldMappingsList = (
  output: any,
  context: __SerdeContext
): ConfluenceSpaceToIndexFieldMapping[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConfluenceSpaceToIndexFieldMapping(entry, context);
    });
};

const deserializeAws_json1_1ConfluenceSpaceList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
    DatabasePort: __expectInt(output.DatabasePort),
    SecretArn: __expectString(output.SecretArn),
    TableName: __expectString(output.TableName),
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

const deserializeAws_json1_1DatabaseConfiguration = (output: any, context: __SerdeContext): DatabaseConfiguration => {
  return {
    AclConfiguration:
      output.AclConfiguration !== undefined && output.AclConfiguration !== null
        ? deserializeAws_json1_1AclConfiguration(output.AclConfiguration, context)
        : undefined,
    ColumnConfiguration:
      output.ColumnConfiguration !== undefined && output.ColumnConfiguration !== null
        ? deserializeAws_json1_1ColumnConfiguration(output.ColumnConfiguration, context)
        : undefined,
    ConnectionConfiguration:
      output.ConnectionConfiguration !== undefined && output.ConnectionConfiguration !== null
        ? deserializeAws_json1_1ConnectionConfiguration(output.ConnectionConfiguration, context)
        : undefined,
    DatabaseEngineType: __expectString(output.DatabaseEngineType),
    SqlConfiguration:
      output.SqlConfiguration !== undefined && output.SqlConfiguration !== null
        ? deserializeAws_json1_1SqlConfiguration(output.SqlConfiguration, context)
        : undefined,
    VpcConfiguration:
      output.VpcConfiguration !== undefined && output.VpcConfiguration !== null
        ? deserializeAws_json1_1DataSourceVpcConfiguration(output.VpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DataSourceConfiguration = (
  output: any,
  context: __SerdeContext
): DataSourceConfiguration => {
  return {
    ConfluenceConfiguration:
      output.ConfluenceConfiguration !== undefined && output.ConfluenceConfiguration !== null
        ? deserializeAws_json1_1ConfluenceConfiguration(output.ConfluenceConfiguration, context)
        : undefined,
    DatabaseConfiguration:
      output.DatabaseConfiguration !== undefined && output.DatabaseConfiguration !== null
        ? deserializeAws_json1_1DatabaseConfiguration(output.DatabaseConfiguration, context)
        : undefined,
    GoogleDriveConfiguration:
      output.GoogleDriveConfiguration !== undefined && output.GoogleDriveConfiguration !== null
        ? deserializeAws_json1_1GoogleDriveConfiguration(output.GoogleDriveConfiguration, context)
        : undefined,
    OneDriveConfiguration:
      output.OneDriveConfiguration !== undefined && output.OneDriveConfiguration !== null
        ? deserializeAws_json1_1OneDriveConfiguration(output.OneDriveConfiguration, context)
        : undefined,
    S3Configuration:
      output.S3Configuration !== undefined && output.S3Configuration !== null
        ? deserializeAws_json1_1S3DataSourceConfiguration(output.S3Configuration, context)
        : undefined,
    SalesforceConfiguration:
      output.SalesforceConfiguration !== undefined && output.SalesforceConfiguration !== null
        ? deserializeAws_json1_1SalesforceConfiguration(output.SalesforceConfiguration, context)
        : undefined,
    ServiceNowConfiguration:
      output.ServiceNowConfiguration !== undefined && output.ServiceNowConfiguration !== null
        ? deserializeAws_json1_1ServiceNowConfiguration(output.ServiceNowConfiguration, context)
        : undefined,
    SharePointConfiguration:
      output.SharePointConfiguration !== undefined && output.SharePointConfiguration !== null
        ? deserializeAws_json1_1SharePointConfiguration(output.SharePointConfiguration, context)
        : undefined,
    WebCrawlerConfiguration:
      output.WebCrawlerConfiguration !== undefined && output.WebCrawlerConfiguration !== null
        ? deserializeAws_json1_1WebCrawlerConfiguration(output.WebCrawlerConfiguration, context)
        : undefined,
    WorkDocsConfiguration:
      output.WorkDocsConfiguration !== undefined && output.WorkDocsConfiguration !== null
        ? deserializeAws_json1_1WorkDocsConfiguration(output.WorkDocsConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DataSourceInclusionsExclusionsStrings = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1DataSourceSummary = (output: any, context: __SerdeContext): DataSourceSummary => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1DataSourceSummaryList = (output: any, context: __SerdeContext): DataSourceSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DataSourceSummary(entry, context);
    });
};

const deserializeAws_json1_1DataSourceSyncJob = (output: any, context: __SerdeContext): DataSourceSyncJob => {
  return {
    DataSourceErrorCode: __expectString(output.DataSourceErrorCode),
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    ExecutionId: __expectString(output.ExecutionId),
    Metrics:
      output.Metrics !== undefined && output.Metrics !== null
        ? deserializeAws_json1_1DataSourceSyncJobMetrics(output.Metrics, context)
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DataSourceSyncJobHistoryList = (
  output: any,
  context: __SerdeContext
): DataSourceSyncJob[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DataSourceSyncJob(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DataSourceToIndexFieldMapping(entry, context);
    });
};

const deserializeAws_json1_1DataSourceVpcConfiguration = (
  output: any,
  context: __SerdeContext
): DataSourceVpcConfiguration => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_json1_1SecurityGroupIdList(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_json1_1SubnetIdList(output.SubnetIds, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDataSourceResponse = (
  output: any,
  context: __SerdeContext
): DescribeDataSourceResponse => {
  return {
    Configuration:
      output.Configuration !== undefined && output.Configuration !== null
        ? deserializeAws_json1_1DataSourceConfiguration(output.Configuration, context)
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    Description: __expectString(output.Description),
    ErrorMessage: __expectString(output.ErrorMessage),
    Id: __expectString(output.Id),
    IndexId: __expectString(output.IndexId),
    Name: __expectString(output.Name),
    RoleArn: __expectString(output.RoleArn),
    Schedule: __expectString(output.Schedule),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeFaqResponse = (output: any, context: __SerdeContext): DescribeFaqResponse => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    Description: __expectString(output.Description),
    ErrorMessage: __expectString(output.ErrorMessage),
    FileFormat: __expectString(output.FileFormat),
    Id: __expectString(output.Id),
    IndexId: __expectString(output.IndexId),
    Name: __expectString(output.Name),
    RoleArn: __expectString(output.RoleArn),
    S3Path:
      output.S3Path !== undefined && output.S3Path !== null
        ? deserializeAws_json1_1S3Path(output.S3Path, context)
        : undefined,
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeIndexResponse = (output: any, context: __SerdeContext): DescribeIndexResponse => {
  return {
    CapacityUnits:
      output.CapacityUnits !== undefined && output.CapacityUnits !== null
        ? deserializeAws_json1_1CapacityUnitsConfiguration(output.CapacityUnits, context)
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    Description: __expectString(output.Description),
    DocumentMetadataConfigurations:
      output.DocumentMetadataConfigurations !== undefined && output.DocumentMetadataConfigurations !== null
        ? deserializeAws_json1_1DocumentMetadataConfigurationList(output.DocumentMetadataConfigurations, context)
        : undefined,
    Edition: __expectString(output.Edition),
    ErrorMessage: __expectString(output.ErrorMessage),
    Id: __expectString(output.Id),
    IndexStatistics:
      output.IndexStatistics !== undefined && output.IndexStatistics !== null
        ? deserializeAws_json1_1IndexStatistics(output.IndexStatistics, context)
        : undefined,
    Name: __expectString(output.Name),
    RoleArn: __expectString(output.RoleArn),
    ServerSideEncryptionConfiguration:
      output.ServerSideEncryptionConfiguration !== undefined && output.ServerSideEncryptionConfiguration !== null
        ? deserializeAws_json1_1ServerSideEncryptionConfiguration(output.ServerSideEncryptionConfiguration, context)
        : undefined,
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
    UserContextPolicy: __expectString(output.UserContextPolicy),
    UserTokenConfigurations:
      output.UserTokenConfigurations !== undefined && output.UserTokenConfigurations !== null
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
      output.GroupOrderingIdSummaries !== undefined && output.GroupOrderingIdSummaries !== null
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
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    Description: __expectString(output.Description),
    ErrorMessage: __expectString(output.ErrorMessage),
    FileSizeBytes: __expectInt(output.FileSizeBytes),
    Id: __expectString(output.Id),
    IndexId: __expectString(output.IndexId),
    ItemCount: __expectInt(output.ItemCount),
    Name: __expectString(output.Name),
    RoleArn: __expectString(output.RoleArn),
    SourceS3Path:
      output.SourceS3Path !== undefined && output.SourceS3Path !== null
        ? deserializeAws_json1_1S3Path(output.SourceS3Path, context)
        : undefined,
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeQuerySuggestionsConfigResponse = (
  output: any,
  context: __SerdeContext
): DescribeQuerySuggestionsConfigResponse => {
  return {
    IncludeQueriesWithoutUserInformation: __expectBoolean(output.IncludeQueriesWithoutUserInformation),
    LastClearTime:
      output.LastClearTime !== undefined && output.LastClearTime !== null
        ? new Date(Math.round(output.LastClearTime * 1000))
        : undefined,
    LastSuggestionsBuildTime:
      output.LastSuggestionsBuildTime !== undefined && output.LastSuggestionsBuildTime !== null
        ? new Date(Math.round(output.LastSuggestionsBuildTime * 1000))
        : undefined,
    MinimumNumberOfQueryingUsers: __expectInt(output.MinimumNumberOfQueryingUsers),
    MinimumQueryCount: __expectInt(output.MinimumQueryCount),
    Mode: __expectString(output.Mode),
    QueryLogLookBackWindowInDays: __expectInt(output.QueryLogLookBackWindowInDays),
    Status: __expectString(output.Status),
    TotalSuggestionsCount: __expectInt(output.TotalSuggestionsCount),
  } as any;
};

const deserializeAws_json1_1DescribeThesaurusResponse = (
  output: any,
  context: __SerdeContext
): DescribeThesaurusResponse => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    Description: __expectString(output.Description),
    ErrorMessage: __expectString(output.ErrorMessage),
    FileSizeBytes: __expectInt(output.FileSizeBytes),
    Id: __expectString(output.Id),
    IndexId: __expectString(output.IndexId),
    Name: __expectString(output.Name),
    RoleArn: __expectString(output.RoleArn),
    SourceS3Path:
      output.SourceS3Path !== undefined && output.SourceS3Path !== null
        ? deserializeAws_json1_1S3Path(output.SourceS3Path, context)
        : undefined,
    Status: __expectString(output.Status),
    SynonymRuleCount: __expectInt(output.SynonymRuleCount),
    TermCount: __expectInt(output.TermCount),
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentAttribute = (output: any, context: __SerdeContext): DocumentAttribute => {
  return {
    Key: __expectString(output.Key),
    Value:
      output.Value !== undefined && output.Value !== null
        ? deserializeAws_json1_1DocumentAttributeValue(output.Value, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentAttributeList = (output: any, context: __SerdeContext): DocumentAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DocumentAttribute(entry, context);
    });
};

const deserializeAws_json1_1DocumentAttributeStringListValue = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1DocumentAttributeValue = (output: any, context: __SerdeContext): DocumentAttributeValue => {
  if (output.DateValue !== undefined && output.DateValue !== null) {
    return {
      DateValue: new Date(Math.round(output.DateValue * 1000)),
    };
  }
  if (__expectInt(output.LongValue) !== undefined) {
    return { LongValue: __expectInt(output.LongValue) as any };
  }
  if (output.StringListValue !== undefined && output.StringListValue !== null) {
    return {
      StringListValue: deserializeAws_json1_1DocumentAttributeStringListValue(output.StringListValue, context),
    };
  }
  if (__expectString(output.StringValue) !== undefined) {
    return { StringValue: __expectString(output.StringValue) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_json1_1DocumentAttributeValueCountPair = (
  output: any,
  context: __SerdeContext
): DocumentAttributeValueCountPair => {
  return {
    Count: __expectInt(output.Count),
    DocumentAttributeValue:
      output.DocumentAttributeValue !== undefined && output.DocumentAttributeValue !== null
        ? deserializeAws_json1_1DocumentAttributeValue(output.DocumentAttributeValue, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentAttributeValueCountPairList = (
  output: any,
  context: __SerdeContext
): DocumentAttributeValueCountPair[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DocumentAttributeValueCountPair(entry, context);
    });
};

const deserializeAws_json1_1DocumentMetadataConfiguration = (
  output: any,
  context: __SerdeContext
): DocumentMetadataConfiguration => {
  return {
    Name: __expectString(output.Name),
    Relevance:
      output.Relevance !== undefined && output.Relevance !== null
        ? deserializeAws_json1_1Relevance(output.Relevance, context)
        : undefined,
    Search:
      output.Search !== undefined && output.Search !== null
        ? deserializeAws_json1_1Search(output.Search, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1DocumentMetadataConfigurationList = (
  output: any,
  context: __SerdeContext
): DocumentMetadataConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DocumentMetadataConfiguration(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Status(entry, context);
    });
};

const deserializeAws_json1_1ExcludeMimeTypesList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ExcludeSharedDrivesList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ExcludeUserAccountsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1FacetResult = (output: any, context: __SerdeContext): FacetResult => {
  return {
    DocumentAttributeKey: __expectString(output.DocumentAttributeKey),
    DocumentAttributeValueCountPairs:
      output.DocumentAttributeValueCountPairs !== undefined && output.DocumentAttributeValueCountPairs !== null
        ? deserializeAws_json1_1DocumentAttributeValueCountPairList(output.DocumentAttributeValueCountPairs, context)
        : undefined,
    DocumentAttributeValueType: __expectString(output.DocumentAttributeValueType),
  } as any;
};

const deserializeAws_json1_1FacetResultList = (output: any, context: __SerdeContext): FacetResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FacetResult(entry, context);
    });
};

const deserializeAws_json1_1FaqStatistics = (output: any, context: __SerdeContext): FaqStatistics => {
  return {
    IndexedQuestionAnswersCount: __expectInt(output.IndexedQuestionAnswersCount),
  } as any;
};

const deserializeAws_json1_1FaqSummary = (output: any, context: __SerdeContext): FaqSummary => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    FileFormat: __expectString(output.FileFormat),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1FaqSummaryItems = (output: any, context: __SerdeContext): FaqSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FaqSummary(entry, context);
    });
};

const deserializeAws_json1_1GetQuerySuggestionsResponse = (
  output: any,
  context: __SerdeContext
): GetQuerySuggestionsResponse => {
  return {
    QuerySuggestionsId: __expectString(output.QuerySuggestionsId),
    Suggestions:
      output.Suggestions !== undefined && output.Suggestions !== null
        ? deserializeAws_json1_1SuggestionList(output.Suggestions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GoogleDriveConfiguration = (
  output: any,
  context: __SerdeContext
): GoogleDriveConfiguration => {
  return {
    ExcludeMimeTypes:
      output.ExcludeMimeTypes !== undefined && output.ExcludeMimeTypes !== null
        ? deserializeAws_json1_1ExcludeMimeTypesList(output.ExcludeMimeTypes, context)
        : undefined,
    ExcludeSharedDrives:
      output.ExcludeSharedDrives !== undefined && output.ExcludeSharedDrives !== null
        ? deserializeAws_json1_1ExcludeSharedDrivesList(output.ExcludeSharedDrives, context)
        : undefined,
    ExcludeUserAccounts:
      output.ExcludeUserAccounts !== undefined && output.ExcludeUserAccounts !== null
        ? deserializeAws_json1_1ExcludeUserAccountsList(output.ExcludeUserAccounts, context)
        : undefined,
    ExclusionPatterns:
      output.ExclusionPatterns !== undefined && output.ExclusionPatterns !== null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings !== undefined && output.FieldMappings !== null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns !== undefined && output.InclusionPatterns !== null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
  } as any;
};

const deserializeAws_json1_1GroupOrderingIdSummaries = (
  output: any,
  context: __SerdeContext
): GroupOrderingIdSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GroupOrderingIdSummary(entry, context);
    });
};

const deserializeAws_json1_1GroupOrderingIdSummary = (output: any, context: __SerdeContext): GroupOrderingIdSummary => {
  return {
    FailureReason: __expectString(output.FailureReason),
    LastUpdatedAt:
      output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
        ? new Date(Math.round(output.LastUpdatedAt * 1000))
        : undefined,
    OrderingId: __expectInt(output.OrderingId),
    ReceivedAt:
      output.ReceivedAt !== undefined && output.ReceivedAt !== null
        ? new Date(Math.round(output.ReceivedAt * 1000))
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1GroupSummary = (output: any, context: __SerdeContext): GroupSummary => {
  return {
    GroupId: __expectString(output.GroupId),
    OrderingId: __expectInt(output.OrderingId),
  } as any;
};

const deserializeAws_json1_1Highlight = (output: any, context: __SerdeContext): Highlight => {
  return {
    BeginOffset: __expectInt(output.BeginOffset),
    EndOffset: __expectInt(output.EndOffset),
    TopAnswer: __expectBoolean(output.TopAnswer),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1HighlightList = (output: any, context: __SerdeContext): Highlight[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Highlight(entry, context);
    });
};

const deserializeAws_json1_1IndexConfigurationSummary = (
  output: any,
  context: __SerdeContext
): IndexConfigurationSummary => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    Edition: __expectString(output.Edition),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1IndexConfigurationSummaryList = (
  output: any,
  context: __SerdeContext
): IndexConfigurationSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1IndexConfigurationSummary(entry, context);
    });
};

const deserializeAws_json1_1IndexStatistics = (output: any, context: __SerdeContext): IndexStatistics => {
  return {
    FaqStatistics:
      output.FaqStatistics !== undefined && output.FaqStatistics !== null
        ? deserializeAws_json1_1FaqStatistics(output.FaqStatistics, context)
        : undefined,
    TextDocumentStatistics:
      output.TextDocumentStatistics !== undefined && output.TextDocumentStatistics !== null
        ? deserializeAws_json1_1TextDocumentStatistics(output.TextDocumentStatistics, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
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

const deserializeAws_json1_1ListDataSourcesResponse = (
  output: any,
  context: __SerdeContext
): ListDataSourcesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SummaryItems:
      output.SummaryItems !== undefined && output.SummaryItems !== null
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
      output.History !== undefined && output.History !== null
        ? deserializeAws_json1_1DataSourceSyncJobHistoryList(output.History, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListFaqsResponse = (output: any, context: __SerdeContext): ListFaqsResponse => {
  return {
    FaqSummaryItems:
      output.FaqSummaryItems !== undefined && output.FaqSummaryItems !== null
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
      output.GroupsSummaries !== undefined && output.GroupsSummaries !== null
        ? deserializeAws_json1_1ListOfGroupSummaries(output.GroupsSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListIndicesResponse = (output: any, context: __SerdeContext): ListIndicesResponse => {
  return {
    IndexConfigurationSummaryItems:
      output.IndexConfigurationSummaryItems !== undefined && output.IndexConfigurationSummaryItems !== null
        ? deserializeAws_json1_1IndexConfigurationSummaryList(output.IndexConfigurationSummaryItems, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListOfGroupSummaries = (output: any, context: __SerdeContext): GroupSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1GroupSummary(entry, context);
    });
};

const deserializeAws_json1_1ListQuerySuggestionsBlockListsResponse = (
  output: any,
  context: __SerdeContext
): ListQuerySuggestionsBlockListsResponse => {
  return {
    BlockListSummaryItems:
      output.BlockListSummaryItems !== undefined && output.BlockListSummaryItems !== null
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
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListThesauriResponse = (output: any, context: __SerdeContext): ListThesauriResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ThesaurusSummaryItems:
      output.ThesaurusSummaryItems !== undefined && output.ThesaurusSummaryItems !== null
        ? deserializeAws_json1_1ThesaurusSummaryItems(output.ThesaurusSummaryItems, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1OneDriveConfiguration = (output: any, context: __SerdeContext): OneDriveConfiguration => {
  return {
    DisableLocalGroups: __expectBoolean(output.DisableLocalGroups),
    ExclusionPatterns:
      output.ExclusionPatterns !== undefined && output.ExclusionPatterns !== null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings !== undefined && output.FieldMappings !== null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns !== undefined && output.InclusionPatterns !== null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    OneDriveUsers:
      output.OneDriveUsers !== undefined && output.OneDriveUsers !== null
        ? deserializeAws_json1_1OneDriveUsers(output.OneDriveUsers, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    TenantDomain: __expectString(output.TenantDomain),
  } as any;
};

const deserializeAws_json1_1OneDriveUserList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1OneDriveUsers = (output: any, context: __SerdeContext): OneDriveUsers => {
  return {
    OneDriveUserList:
      output.OneDriveUserList !== undefined && output.OneDriveUserList !== null
        ? deserializeAws_json1_1OneDriveUserList(output.OneDriveUserList, context)
        : undefined,
    OneDriveUserS3Path:
      output.OneDriveUserS3Path !== undefined && output.OneDriveUserS3Path !== null
        ? deserializeAws_json1_1S3Path(output.OneDriveUserS3Path, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ProxyConfiguration = (output: any, context: __SerdeContext): ProxyConfiguration => {
  return {
    Credentials: __expectString(output.Credentials),
    Host: __expectString(output.Host),
    Port: __expectInt(output.Port),
  } as any;
};

const deserializeAws_json1_1QueryResult = (output: any, context: __SerdeContext): QueryResult => {
  return {
    FacetResults:
      output.FacetResults !== undefined && output.FacetResults !== null
        ? deserializeAws_json1_1FacetResultList(output.FacetResults, context)
        : undefined,
    QueryId: __expectString(output.QueryId),
    ResultItems:
      output.ResultItems !== undefined && output.ResultItems !== null
        ? deserializeAws_json1_1QueryResultItemList(output.ResultItems, context)
        : undefined,
    TotalNumberOfResults: __expectInt(output.TotalNumberOfResults),
  } as any;
};

const deserializeAws_json1_1QueryResultItem = (output: any, context: __SerdeContext): QueryResultItem => {
  return {
    AdditionalAttributes:
      output.AdditionalAttributes !== undefined && output.AdditionalAttributes !== null
        ? deserializeAws_json1_1AdditionalResultAttributeList(output.AdditionalAttributes, context)
        : undefined,
    DocumentAttributes:
      output.DocumentAttributes !== undefined && output.DocumentAttributes !== null
        ? deserializeAws_json1_1DocumentAttributeList(output.DocumentAttributes, context)
        : undefined,
    DocumentExcerpt:
      output.DocumentExcerpt !== undefined && output.DocumentExcerpt !== null
        ? deserializeAws_json1_1TextWithHighlights(output.DocumentExcerpt, context)
        : undefined,
    DocumentId: __expectString(output.DocumentId),
    DocumentTitle:
      output.DocumentTitle !== undefined && output.DocumentTitle !== null
        ? deserializeAws_json1_1TextWithHighlights(output.DocumentTitle, context)
        : undefined,
    DocumentURI: __expectString(output.DocumentURI),
    FeedbackToken: __expectString(output.FeedbackToken),
    Id: __expectString(output.Id),
    ScoreAttributes:
      output.ScoreAttributes !== undefined && output.ScoreAttributes !== null
        ? deserializeAws_json1_1ScoreAttributes(output.ScoreAttributes, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1QueryResultItemList = (output: any, context: __SerdeContext): QueryResultItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1QueryResultItem(entry, context);
    });
};

const deserializeAws_json1_1QuerySuggestionsBlockListSummary = (
  output: any,
  context: __SerdeContext
): QuerySuggestionsBlockListSummary => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    Id: __expectString(output.Id),
    ItemCount: __expectInt(output.ItemCount),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1QuerySuggestionsBlockListSummaryItems = (
  output: any,
  context: __SerdeContext
): QuerySuggestionsBlockListSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1QuerySuggestionsBlockListSummary(entry, context);
    });
};

const deserializeAws_json1_1Relevance = (output: any, context: __SerdeContext): Relevance => {
  return {
    Duration: __expectString(output.Duration),
    Freshness: __expectBoolean(output.Freshness),
    Importance: __expectInt(output.Importance),
    RankOrder: __expectString(output.RankOrder),
    ValueImportanceMap:
      output.ValueImportanceMap !== undefined && output.ValueImportanceMap !== null
        ? deserializeAws_json1_1ValueImportanceMap(output.ValueImportanceMap, context)
        : undefined,
  } as any;
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
      output.AccessControlListConfiguration !== undefined && output.AccessControlListConfiguration !== null
        ? deserializeAws_json1_1AccessControlListConfiguration(output.AccessControlListConfiguration, context)
        : undefined,
    BucketName: __expectString(output.BucketName),
    DocumentsMetadataConfiguration:
      output.DocumentsMetadataConfiguration !== undefined && output.DocumentsMetadataConfiguration !== null
        ? deserializeAws_json1_1DocumentsMetadataConfiguration(output.DocumentsMetadataConfiguration, context)
        : undefined,
    ExclusionPatterns:
      output.ExclusionPatterns !== undefined && output.ExclusionPatterns !== null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns !== undefined && output.InclusionPatterns !== null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    InclusionPrefixes:
      output.InclusionPrefixes !== undefined && output.InclusionPrefixes !== null
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

const deserializeAws_json1_1SalesforceChatterFeedConfiguration = (
  output: any,
  context: __SerdeContext
): SalesforceChatterFeedConfiguration => {
  return {
    DocumentDataFieldName: __expectString(output.DocumentDataFieldName),
    DocumentTitleFieldName: __expectString(output.DocumentTitleFieldName),
    FieldMappings:
      output.FieldMappings !== undefined && output.FieldMappings !== null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    IncludeFilterTypes:
      output.IncludeFilterTypes !== undefined && output.IncludeFilterTypes !== null
        ? deserializeAws_json1_1SalesforceChatterFeedIncludeFilterTypes(output.IncludeFilterTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SalesforceChatterFeedIncludeFilterTypes = (
  output: any,
  context: __SerdeContext
): (SalesforceChatterFeedIncludeFilterType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1SalesforceConfiguration = (
  output: any,
  context: __SerdeContext
): SalesforceConfiguration => {
  return {
    ChatterFeedConfiguration:
      output.ChatterFeedConfiguration !== undefined && output.ChatterFeedConfiguration !== null
        ? deserializeAws_json1_1SalesforceChatterFeedConfiguration(output.ChatterFeedConfiguration, context)
        : undefined,
    CrawlAttachments: __expectBoolean(output.CrawlAttachments),
    ExcludeAttachmentFilePatterns:
      output.ExcludeAttachmentFilePatterns !== undefined && output.ExcludeAttachmentFilePatterns !== null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExcludeAttachmentFilePatterns, context)
        : undefined,
    IncludeAttachmentFilePatterns:
      output.IncludeAttachmentFilePatterns !== undefined && output.IncludeAttachmentFilePatterns !== null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.IncludeAttachmentFilePatterns, context)
        : undefined,
    KnowledgeArticleConfiguration:
      output.KnowledgeArticleConfiguration !== undefined && output.KnowledgeArticleConfiguration !== null
        ? deserializeAws_json1_1SalesforceKnowledgeArticleConfiguration(output.KnowledgeArticleConfiguration, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    ServerUrl: __expectString(output.ServerUrl),
    StandardObjectAttachmentConfiguration:
      output.StandardObjectAttachmentConfiguration !== undefined &&
      output.StandardObjectAttachmentConfiguration !== null
        ? deserializeAws_json1_1SalesforceStandardObjectAttachmentConfiguration(
            output.StandardObjectAttachmentConfiguration,
            context
          )
        : undefined,
    StandardObjectConfigurations:
      output.StandardObjectConfigurations !== undefined && output.StandardObjectConfigurations !== null
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
      output.FieldMappings !== undefined && output.FieldMappings !== null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfigurationList = (
  output: any,
  context: __SerdeContext
): SalesforceCustomKnowledgeArticleTypeConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfiguration(entry, context);
    });
};

const deserializeAws_json1_1SalesforceKnowledgeArticleConfiguration = (
  output: any,
  context: __SerdeContext
): SalesforceKnowledgeArticleConfiguration => {
  return {
    CustomKnowledgeArticleTypeConfigurations:
      output.CustomKnowledgeArticleTypeConfigurations !== undefined &&
      output.CustomKnowledgeArticleTypeConfigurations !== null
        ? deserializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfigurationList(
            output.CustomKnowledgeArticleTypeConfigurations,
            context
          )
        : undefined,
    IncludedStates:
      output.IncludedStates !== undefined && output.IncludedStates !== null
        ? deserializeAws_json1_1SalesforceKnowledgeArticleStateList(output.IncludedStates, context)
        : undefined,
    StandardKnowledgeArticleTypeConfiguration:
      output.StandardKnowledgeArticleTypeConfiguration !== undefined &&
      output.StandardKnowledgeArticleTypeConfiguration !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1SalesforceStandardKnowledgeArticleTypeConfiguration = (
  output: any,
  context: __SerdeContext
): SalesforceStandardKnowledgeArticleTypeConfiguration => {
  return {
    DocumentDataFieldName: __expectString(output.DocumentDataFieldName),
    DocumentTitleFieldName: __expectString(output.DocumentTitleFieldName),
    FieldMappings:
      output.FieldMappings !== undefined && output.FieldMappings !== null
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
      output.FieldMappings !== undefined && output.FieldMappings !== null
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
      output.FieldMappings !== undefined && output.FieldMappings !== null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1SalesforceStandardObjectConfigurationList = (
  output: any,
  context: __SerdeContext
): SalesforceStandardObjectConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SalesforceStandardObjectConfiguration(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1SeedUrlConfiguration = (output: any, context: __SerdeContext): SeedUrlConfiguration => {
  return {
    SeedUrls:
      output.SeedUrls !== undefined && output.SeedUrls !== null
        ? deserializeAws_json1_1SeedUrlList(output.SeedUrls, context)
        : undefined,
    WebCrawlerMode: __expectString(output.WebCrawlerMode),
  } as any;
};

const deserializeAws_json1_1SeedUrlList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
      output.KnowledgeArticleConfiguration !== undefined && output.KnowledgeArticleConfiguration !== null
        ? deserializeAws_json1_1ServiceNowKnowledgeArticleConfiguration(output.KnowledgeArticleConfiguration, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    ServiceCatalogConfiguration:
      output.ServiceCatalogConfiguration !== undefined && output.ServiceCatalogConfiguration !== null
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
      output.ExcludeAttachmentFilePatterns !== undefined && output.ExcludeAttachmentFilePatterns !== null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExcludeAttachmentFilePatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings !== undefined && output.FieldMappings !== null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    FilterQuery: __expectString(output.FilterQuery),
    IncludeAttachmentFilePatterns:
      output.IncludeAttachmentFilePatterns !== undefined && output.IncludeAttachmentFilePatterns !== null
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
      output.ExcludeAttachmentFilePatterns !== undefined && output.ExcludeAttachmentFilePatterns !== null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExcludeAttachmentFilePatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings !== undefined && output.FieldMappings !== null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    IncludeAttachmentFilePatterns:
      output.IncludeAttachmentFilePatterns !== undefined && output.IncludeAttachmentFilePatterns !== null
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
    CrawlAttachments: __expectBoolean(output.CrawlAttachments),
    DisableLocalGroups: __expectBoolean(output.DisableLocalGroups),
    DocumentTitleFieldName: __expectString(output.DocumentTitleFieldName),
    ExclusionPatterns:
      output.ExclusionPatterns !== undefined && output.ExclusionPatterns !== null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings !== undefined && output.FieldMappings !== null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns !== undefined && output.InclusionPatterns !== null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    SecretArn: __expectString(output.SecretArn),
    SharePointVersion: __expectString(output.SharePointVersion),
    SslCertificateS3Path:
      output.SslCertificateS3Path !== undefined && output.SslCertificateS3Path !== null
        ? deserializeAws_json1_1S3Path(output.SslCertificateS3Path, context)
        : undefined,
    Urls:
      output.Urls !== undefined && output.Urls !== null
        ? deserializeAws_json1_1SharePointUrlList(output.Urls, context)
        : undefined,
    UseChangeLog: __expectBoolean(output.UseChangeLog),
    VpcConfiguration:
      output.VpcConfiguration !== undefined && output.VpcConfiguration !== null
        ? deserializeAws_json1_1DataSourceVpcConfiguration(output.VpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SharePointUrlList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1SiteMapsConfiguration = (output: any, context: __SerdeContext): SiteMapsConfiguration => {
  return {
    SiteMaps:
      output.SiteMaps !== undefined && output.SiteMaps !== null
        ? deserializeAws_json1_1SiteMapsList(output.SiteMaps, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SiteMapsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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

const deserializeAws_json1_1SubnetIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Suggestion = (output: any, context: __SerdeContext): Suggestion => {
  return {
    Id: __expectString(output.Id),
    Value:
      output.Value !== undefined && output.Value !== null
        ? deserializeAws_json1_1SuggestionValue(output.Value, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SuggestionHighlight = (output: any, context: __SerdeContext): SuggestionHighlight => {
  return {
    BeginOffset: __expectInt(output.BeginOffset),
    EndOffset: __expectInt(output.EndOffset),
  } as any;
};

const deserializeAws_json1_1SuggestionHighlightList = (output: any, context: __SerdeContext): SuggestionHighlight[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SuggestionHighlight(entry, context);
    });
};

const deserializeAws_json1_1SuggestionList = (output: any, context: __SerdeContext): Suggestion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Suggestion(entry, context);
    });
};

const deserializeAws_json1_1SuggestionTextWithHighlights = (
  output: any,
  context: __SerdeContext
): SuggestionTextWithHighlights => {
  return {
    Highlights:
      output.Highlights !== undefined && output.Highlights !== null
        ? deserializeAws_json1_1SuggestionHighlightList(output.Highlights, context)
        : undefined,
    Text: __expectString(output.Text),
  } as any;
};

const deserializeAws_json1_1SuggestionValue = (output: any, context: __SerdeContext): SuggestionValue => {
  return {
    Text:
      output.Text !== undefined && output.Text !== null
        ? deserializeAws_json1_1SuggestionTextWithHighlights(output.Text, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TextDocumentStatistics = (output: any, context: __SerdeContext): TextDocumentStatistics => {
  return {
    IndexedTextBytes: __expectInt(output.IndexedTextBytes),
    IndexedTextDocumentsCount: __expectInt(output.IndexedTextDocumentsCount),
  } as any;
};

const deserializeAws_json1_1TextWithHighlights = (output: any, context: __SerdeContext): TextWithHighlights => {
  return {
    Highlights:
      output.Highlights !== undefined && output.Highlights !== null
        ? deserializeAws_json1_1HighlightList(output.Highlights, context)
        : undefined,
    Text: __expectString(output.Text),
  } as any;
};

const deserializeAws_json1_1ThesaurusSummary = (output: any, context: __SerdeContext): ThesaurusSummary => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1ThesaurusSummaryItems = (output: any, context: __SerdeContext): ThesaurusSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ThesaurusSummary(entry, context);
    });
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1Urls = (output: any, context: __SerdeContext): Urls => {
  return {
    SeedUrlConfiguration:
      output.SeedUrlConfiguration !== undefined && output.SeedUrlConfiguration !== null
        ? deserializeAws_json1_1SeedUrlConfiguration(output.SeedUrlConfiguration, context)
        : undefined,
    SiteMapsConfiguration:
      output.SiteMapsConfiguration !== undefined && output.SiteMapsConfiguration !== null
        ? deserializeAws_json1_1SiteMapsConfiguration(output.SiteMapsConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UserTokenConfiguration = (output: any, context: __SerdeContext): UserTokenConfiguration => {
  return {
    JsonTokenTypeConfiguration:
      output.JsonTokenTypeConfiguration !== undefined && output.JsonTokenTypeConfiguration !== null
        ? deserializeAws_json1_1JsonTokenTypeConfiguration(output.JsonTokenTypeConfiguration, context)
        : undefined,
    JwtTokenTypeConfiguration:
      output.JwtTokenTypeConfiguration !== undefined && output.JwtTokenTypeConfiguration !== null
        ? deserializeAws_json1_1JwtTokenTypeConfiguration(output.JwtTokenTypeConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UserTokenConfigurationList = (
  output: any,
  context: __SerdeContext
): UserTokenConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UserTokenConfiguration(entry, context);
    });
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ValueImportanceMap = (output: any, context: __SerdeContext): { [key: string]: number } => {
  return Object.entries(output).reduce((acc: { [key: string]: number }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectInt(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1WebCrawlerConfiguration = (
  output: any,
  context: __SerdeContext
): WebCrawlerConfiguration => {
  return {
    AuthenticationConfiguration:
      output.AuthenticationConfiguration !== undefined && output.AuthenticationConfiguration !== null
        ? deserializeAws_json1_1AuthenticationConfiguration(output.AuthenticationConfiguration, context)
        : undefined,
    CrawlDepth: __expectInt(output.CrawlDepth),
    MaxContentSizePerPageInMegaBytes: __limitedParseFloat(output.MaxContentSizePerPageInMegaBytes),
    MaxLinksPerPage: __expectInt(output.MaxLinksPerPage),
    MaxUrlsPerMinuteCrawlRate: __expectInt(output.MaxUrlsPerMinuteCrawlRate),
    ProxyConfiguration:
      output.ProxyConfiguration !== undefined && output.ProxyConfiguration !== null
        ? deserializeAws_json1_1ProxyConfiguration(output.ProxyConfiguration, context)
        : undefined,
    UrlExclusionPatterns:
      output.UrlExclusionPatterns !== undefined && output.UrlExclusionPatterns !== null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.UrlExclusionPatterns, context)
        : undefined,
    UrlInclusionPatterns:
      output.UrlInclusionPatterns !== undefined && output.UrlInclusionPatterns !== null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.UrlInclusionPatterns, context)
        : undefined,
    Urls:
      output.Urls !== undefined && output.Urls !== null ? deserializeAws_json1_1Urls(output.Urls, context) : undefined,
  } as any;
};

const deserializeAws_json1_1WorkDocsConfiguration = (output: any, context: __SerdeContext): WorkDocsConfiguration => {
  return {
    CrawlComments: __expectBoolean(output.CrawlComments),
    ExclusionPatterns:
      output.ExclusionPatterns !== undefined && output.ExclusionPatterns !== null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.ExclusionPatterns, context)
        : undefined,
    FieldMappings:
      output.FieldMappings !== undefined && output.FieldMappings !== null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    InclusionPatterns:
      output.InclusionPatterns !== undefined && output.InclusionPatterns !== null
        ? deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(output.InclusionPatterns, context)
        : undefined,
    OrganizationId: __expectString(output.OrganizationId),
    UseChangeLog: __expectBoolean(output.UseChangeLog),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
