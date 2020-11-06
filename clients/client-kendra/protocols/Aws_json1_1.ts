import {
  BatchDeleteDocumentCommandInput,
  BatchDeleteDocumentCommandOutput,
} from "../commands/BatchDeleteDocumentCommand";
import { BatchPutDocumentCommandInput, BatchPutDocumentCommandOutput } from "../commands/BatchPutDocumentCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "../commands/CreateDataSourceCommand";
import { CreateFaqCommandInput, CreateFaqCommandOutput } from "../commands/CreateFaqCommand";
import { CreateIndexCommandInput, CreateIndexCommandOutput } from "../commands/CreateIndexCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "../commands/DeleteDataSourceCommand";
import { DeleteFaqCommandInput, DeleteFaqCommandOutput } from "../commands/DeleteFaqCommand";
import { DeleteIndexCommandInput, DeleteIndexCommandOutput } from "../commands/DeleteIndexCommand";
import { DescribeDataSourceCommandInput, DescribeDataSourceCommandOutput } from "../commands/DescribeDataSourceCommand";
import { DescribeFaqCommandInput, DescribeFaqCommandOutput } from "../commands/DescribeFaqCommand";
import { DescribeIndexCommandInput, DescribeIndexCommandOutput } from "../commands/DescribeIndexCommand";
import {
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput,
} from "../commands/ListDataSourceSyncJobsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "../commands/ListDataSourcesCommand";
import { ListFaqsCommandInput, ListFaqsCommandOutput } from "../commands/ListFaqsCommand";
import { ListIndicesCommandInput, ListIndicesCommandOutput } from "../commands/ListIndicesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
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
  AccessControlListConfiguration,
  AccessDeniedException,
  AclConfiguration,
  AdditionalResultAttribute,
  AdditionalResultAttributeValue,
  AttributeFilter,
  BatchDeleteDocumentRequest,
  BatchDeleteDocumentResponse,
  BatchDeleteDocumentResponseFailedDocument,
  BatchPutDocumentRequest,
  BatchPutDocumentResponse,
  BatchPutDocumentResponseFailedDocument,
  CapacityUnitsConfiguration,
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
  DataSourceConfiguration,
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
  DescribeDataSourceRequest,
  DescribeDataSourceResponse,
  DescribeFaqRequest,
  DescribeFaqResponse,
  DescribeIndexRequest,
  DescribeIndexResponse,
  Document,
  DocumentAttribute,
  DocumentAttributeValue,
  DocumentAttributeValueCountPair,
  DocumentMetadataConfiguration,
  DocumentsMetadataConfiguration,
  Facet,
  FacetResult,
  FaqStatistics,
  FaqSummary,
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
  ListIndicesRequest,
  ListIndicesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  OneDriveConfiguration,
  OneDriveUsers,
  Principal,
  QueryRequest,
  QueryResult,
  QueryResultItem,
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
  ServerSideEncryptionConfiguration,
  ServiceNowConfiguration,
  ServiceNowKnowledgeArticleConfiguration,
  ServiceNowServiceCatalogConfiguration,
  ServiceQuotaExceededException,
  SharePointConfiguration,
  SortingConfiguration,
  SqlConfiguration,
  StartDataSourceSyncJobRequest,
  StartDataSourceSyncJobResponse,
  StopDataSourceSyncJobRequest,
  SubmitFeedbackRequest,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TextDocumentStatistics,
  TextWithHighlights,
  ThrottlingException,
  TimeRange,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateDataSourceRequest,
  UpdateIndexRequest,
  UserContext,
  UserTokenConfiguration,
  ValidationException,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_json1_1BatchDeleteDocumentCommand = async (
  input: BatchDeleteDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.BatchDeleteDocument",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchDeleteDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchPutDocumentCommand = async (
  input: BatchPutDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.BatchPutDocument",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchPutDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDataSourceCommand = async (
  input: CreateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.CreateDataSource",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.CreateFaq",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.CreateIndex",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateIndexRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDataSourceCommand = async (
  input: DeleteDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.DeleteDataSource",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.DeleteFaq",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.DeleteIndex",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteIndexRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDataSourceCommand = async (
  input: DescribeDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.DescribeDataSource",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.DescribeFaq",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.DescribeIndex",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeIndexRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDataSourcesCommand = async (
  input: ListDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.ListDataSources",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.ListDataSourceSyncJobs",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.ListFaqs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListFaqsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListIndicesCommand = async (
  input: ListIndicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.ListIndices",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListIndicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1QueryCommand = async (
  input: QueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.Query",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.StartDataSourceSyncJob",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.StopDataSourceSyncJob",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.SubmitFeedback",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.TagResource",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.UntagResource",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.UpdateDataSource",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSKendraFrontendService.UpdateIndex",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateIndexRequest(input, context));
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
    ...(input.KeyPath !== undefined && { KeyPath: input.KeyPath }),
  };
};

const serializeAws_json1_1AclConfiguration = (input: AclConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AllowedGroupsColumnName !== undefined && { AllowedGroupsColumnName: input.AllowedGroupsColumnName }),
  };
};

const serializeAws_json1_1AttributeFilter = (input: AttributeFilter, context: __SerdeContext): any => {
  return {
    ...(input.AndAllFilters !== undefined && {
      AndAllFilters: serializeAws_json1_1AttributeFilterList(input.AndAllFilters, context),
    }),
    ...(input.ContainsAll !== undefined && {
      ContainsAll: serializeAws_json1_1DocumentAttribute(input.ContainsAll, context),
    }),
    ...(input.ContainsAny !== undefined && {
      ContainsAny: serializeAws_json1_1DocumentAttribute(input.ContainsAny, context),
    }),
    ...(input.EqualsTo !== undefined && { EqualsTo: serializeAws_json1_1DocumentAttribute(input.EqualsTo, context) }),
    ...(input.GreaterThan !== undefined && {
      GreaterThan: serializeAws_json1_1DocumentAttribute(input.GreaterThan, context),
    }),
    ...(input.GreaterThanOrEquals !== undefined && {
      GreaterThanOrEquals: serializeAws_json1_1DocumentAttribute(input.GreaterThanOrEquals, context),
    }),
    ...(input.LessThan !== undefined && { LessThan: serializeAws_json1_1DocumentAttribute(input.LessThan, context) }),
    ...(input.LessThanOrEquals !== undefined && {
      LessThanOrEquals: serializeAws_json1_1DocumentAttribute(input.LessThanOrEquals, context),
    }),
    ...(input.NotFilter !== undefined && { NotFilter: serializeAws_json1_1AttributeFilter(input.NotFilter, context) }),
    ...(input.OrAllFilters !== undefined && {
      OrAllFilters: serializeAws_json1_1AttributeFilterList(input.OrAllFilters, context),
    }),
  };
};

const serializeAws_json1_1AttributeFilterList = (input: AttributeFilter[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1AttributeFilter(entry, context));
};

const serializeAws_json1_1BatchDeleteDocumentRequest = (
  input: BatchDeleteDocumentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceSyncJobMetricTarget !== undefined && {
      DataSourceSyncJobMetricTarget: serializeAws_json1_1DataSourceSyncJobMetricTarget(
        input.DataSourceSyncJobMetricTarget,
        context
      ),
    }),
    ...(input.DocumentIdList !== undefined && {
      DocumentIdList: serializeAws_json1_1DocumentIdList(input.DocumentIdList, context),
    }),
    ...(input.IndexId !== undefined && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1BatchPutDocumentRequest = (input: BatchPutDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.Documents !== undefined && { Documents: serializeAws_json1_1DocumentList(input.Documents, context) }),
    ...(input.IndexId !== undefined && { IndexId: input.IndexId }),
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_1CapacityUnitsConfiguration = (
  input: CapacityUnitsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.QueryCapacityUnits !== undefined && { QueryCapacityUnits: input.QueryCapacityUnits }),
    ...(input.StorageCapacityUnits !== undefined && { StorageCapacityUnits: input.StorageCapacityUnits }),
  };
};

const serializeAws_json1_1ChangeDetectingColumns = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1ClickFeedback = (input: ClickFeedback, context: __SerdeContext): any => {
  return {
    ...(input.ClickTime !== undefined && { ClickTime: Math.round(input.ClickTime.getTime() / 1000) }),
    ...(input.ResultId !== undefined && { ResultId: input.ResultId }),
  };
};

const serializeAws_json1_1ClickFeedbackList = (input: ClickFeedback[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1ClickFeedback(entry, context));
};

const serializeAws_json1_1ColumnConfiguration = (input: ColumnConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ChangeDetectingColumns !== undefined && {
      ChangeDetectingColumns: serializeAws_json1_1ChangeDetectingColumns(input.ChangeDetectingColumns, context),
    }),
    ...(input.DocumentDataColumnName !== undefined && { DocumentDataColumnName: input.DocumentDataColumnName }),
    ...(input.DocumentIdColumnName !== undefined && { DocumentIdColumnName: input.DocumentIdColumnName }),
    ...(input.DocumentTitleColumnName !== undefined && { DocumentTitleColumnName: input.DocumentTitleColumnName }),
    ...(input.FieldMappings !== undefined && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
  };
};

const serializeAws_json1_1ConfluenceAttachmentConfiguration = (
  input: ConfluenceAttachmentConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttachmentFieldMappings !== undefined && {
      AttachmentFieldMappings: serializeAws_json1_1ConfluenceAttachmentFieldMappingsList(
        input.AttachmentFieldMappings,
        context
      ),
    }),
    ...(input.CrawlAttachments !== undefined && { CrawlAttachments: input.CrawlAttachments }),
  };
};

const serializeAws_json1_1ConfluenceAttachmentFieldMappingsList = (
  input: ConfluenceAttachmentToIndexFieldMapping[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping(entry, context));
};

const serializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping = (
  input: ConfluenceAttachmentToIndexFieldMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceFieldName !== undefined && { DataSourceFieldName: input.DataSourceFieldName }),
    ...(input.DateFieldFormat !== undefined && { DateFieldFormat: input.DateFieldFormat }),
    ...(input.IndexFieldName !== undefined && { IndexFieldName: input.IndexFieldName }),
  };
};

const serializeAws_json1_1ConfluenceBlogConfiguration = (
  input: ConfluenceBlogConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BlogFieldMappings !== undefined && {
      BlogFieldMappings: serializeAws_json1_1ConfluenceBlogFieldMappingsList(input.BlogFieldMappings, context),
    }),
  };
};

const serializeAws_json1_1ConfluenceBlogFieldMappingsList = (
  input: ConfluenceBlogToIndexFieldMapping[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_json1_1ConfluenceBlogToIndexFieldMapping(entry, context));
};

const serializeAws_json1_1ConfluenceBlogToIndexFieldMapping = (
  input: ConfluenceBlogToIndexFieldMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceFieldName !== undefined && { DataSourceFieldName: input.DataSourceFieldName }),
    ...(input.DateFieldFormat !== undefined && { DateFieldFormat: input.DateFieldFormat }),
    ...(input.IndexFieldName !== undefined && { IndexFieldName: input.IndexFieldName }),
  };
};

const serializeAws_json1_1ConfluenceConfiguration = (input: ConfluenceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AttachmentConfiguration !== undefined && {
      AttachmentConfiguration: serializeAws_json1_1ConfluenceAttachmentConfiguration(
        input.AttachmentConfiguration,
        context
      ),
    }),
    ...(input.BlogConfiguration !== undefined && {
      BlogConfiguration: serializeAws_json1_1ConfluenceBlogConfiguration(input.BlogConfiguration, context),
    }),
    ...(input.ExclusionPatterns !== undefined && {
      ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.InclusionPatterns !== undefined && {
      InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.PageConfiguration !== undefined && {
      PageConfiguration: serializeAws_json1_1ConfluencePageConfiguration(input.PageConfiguration, context),
    }),
    ...(input.SecretArn !== undefined && { SecretArn: input.SecretArn }),
    ...(input.ServerUrl !== undefined && { ServerUrl: input.ServerUrl }),
    ...(input.SpaceConfiguration !== undefined && {
      SpaceConfiguration: serializeAws_json1_1ConfluenceSpaceConfiguration(input.SpaceConfiguration, context),
    }),
    ...(input.Version !== undefined && { Version: input.Version }),
    ...(input.VpcConfiguration !== undefined && {
      VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

const serializeAws_json1_1ConfluencePageConfiguration = (
  input: ConfluencePageConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.PageFieldMappings !== undefined && {
      PageFieldMappings: serializeAws_json1_1ConfluencePageFieldMappingsList(input.PageFieldMappings, context),
    }),
  };
};

const serializeAws_json1_1ConfluencePageFieldMappingsList = (
  input: ConfluencePageToIndexFieldMapping[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_json1_1ConfluencePageToIndexFieldMapping(entry, context));
};

const serializeAws_json1_1ConfluencePageToIndexFieldMapping = (
  input: ConfluencePageToIndexFieldMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceFieldName !== undefined && { DataSourceFieldName: input.DataSourceFieldName }),
    ...(input.DateFieldFormat !== undefined && { DateFieldFormat: input.DateFieldFormat }),
    ...(input.IndexFieldName !== undefined && { IndexFieldName: input.IndexFieldName }),
  };
};

const serializeAws_json1_1ConfluenceSpaceConfiguration = (
  input: ConfluenceSpaceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CrawlArchivedSpaces !== undefined && { CrawlArchivedSpaces: input.CrawlArchivedSpaces }),
    ...(input.CrawlPersonalSpaces !== undefined && { CrawlPersonalSpaces: input.CrawlPersonalSpaces }),
    ...(input.ExcludeSpaces !== undefined && {
      ExcludeSpaces: serializeAws_json1_1ConfluenceSpaceList(input.ExcludeSpaces, context),
    }),
    ...(input.IncludeSpaces !== undefined && {
      IncludeSpaces: serializeAws_json1_1ConfluenceSpaceList(input.IncludeSpaces, context),
    }),
    ...(input.SpaceFieldMappings !== undefined && {
      SpaceFieldMappings: serializeAws_json1_1ConfluenceSpaceFieldMappingsList(input.SpaceFieldMappings, context),
    }),
  };
};

const serializeAws_json1_1ConfluenceSpaceFieldMappingsList = (
  input: ConfluenceSpaceToIndexFieldMapping[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_json1_1ConfluenceSpaceToIndexFieldMapping(entry, context));
};

const serializeAws_json1_1ConfluenceSpaceList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1ConfluenceSpaceToIndexFieldMapping = (
  input: ConfluenceSpaceToIndexFieldMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceFieldName !== undefined && { DataSourceFieldName: input.DataSourceFieldName }),
    ...(input.DateFieldFormat !== undefined && { DateFieldFormat: input.DateFieldFormat }),
    ...(input.IndexFieldName !== undefined && { IndexFieldName: input.IndexFieldName }),
  };
};

const serializeAws_json1_1ConnectionConfiguration = (input: ConnectionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseHost !== undefined && { DatabaseHost: input.DatabaseHost }),
    ...(input.DatabaseName !== undefined && { DatabaseName: input.DatabaseName }),
    ...(input.DatabasePort !== undefined && { DatabasePort: input.DatabasePort }),
    ...(input.SecretArn !== undefined && { SecretArn: input.SecretArn }),
    ...(input.TableName !== undefined && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1CreateDataSourceRequest = (input: CreateDataSourceRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Configuration !== undefined && {
      Configuration: serializeAws_json1_1DataSourceConfiguration(input.Configuration, context),
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.IndexId !== undefined && { IndexId: input.IndexId }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn }),
    ...(input.Schedule !== undefined && { Schedule: input.Schedule }),
    ...(input.Tags !== undefined && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_json1_1CreateFaqRequest = (input: CreateFaqRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.FileFormat !== undefined && { FileFormat: input.FileFormat }),
    ...(input.IndexId !== undefined && { IndexId: input.IndexId }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn }),
    ...(input.S3Path !== undefined && { S3Path: serializeAws_json1_1S3Path(input.S3Path, context) }),
    ...(input.Tags !== undefined && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateIndexRequest = (input: CreateIndexRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Edition !== undefined && { Edition: input.Edition }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn }),
    ...(input.ServerSideEncryptionConfiguration !== undefined && {
      ServerSideEncryptionConfiguration: serializeAws_json1_1ServerSideEncryptionConfiguration(
        input.ServerSideEncryptionConfiguration,
        context
      ),
    }),
    ...(input.Tags !== undefined && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.UserContextPolicy !== undefined && { UserContextPolicy: input.UserContextPolicy }),
    ...(input.UserTokenConfigurations !== undefined && {
      UserTokenConfigurations: serializeAws_json1_1UserTokenConfigurationList(input.UserTokenConfigurations, context),
    }),
  };
};

const serializeAws_json1_1DatabaseConfiguration = (input: DatabaseConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AclConfiguration !== undefined && {
      AclConfiguration: serializeAws_json1_1AclConfiguration(input.AclConfiguration, context),
    }),
    ...(input.ColumnConfiguration !== undefined && {
      ColumnConfiguration: serializeAws_json1_1ColumnConfiguration(input.ColumnConfiguration, context),
    }),
    ...(input.ConnectionConfiguration !== undefined && {
      ConnectionConfiguration: serializeAws_json1_1ConnectionConfiguration(input.ConnectionConfiguration, context),
    }),
    ...(input.DatabaseEngineType !== undefined && { DatabaseEngineType: input.DatabaseEngineType }),
    ...(input.SqlConfiguration !== undefined && {
      SqlConfiguration: serializeAws_json1_1SqlConfiguration(input.SqlConfiguration, context),
    }),
    ...(input.VpcConfiguration !== undefined && {
      VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

const serializeAws_json1_1DataSourceConfiguration = (input: DataSourceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ConfluenceConfiguration !== undefined && {
      ConfluenceConfiguration: serializeAws_json1_1ConfluenceConfiguration(input.ConfluenceConfiguration, context),
    }),
    ...(input.DatabaseConfiguration !== undefined && {
      DatabaseConfiguration: serializeAws_json1_1DatabaseConfiguration(input.DatabaseConfiguration, context),
    }),
    ...(input.OneDriveConfiguration !== undefined && {
      OneDriveConfiguration: serializeAws_json1_1OneDriveConfiguration(input.OneDriveConfiguration, context),
    }),
    ...(input.S3Configuration !== undefined && {
      S3Configuration: serializeAws_json1_1S3DataSourceConfiguration(input.S3Configuration, context),
    }),
    ...(input.SalesforceConfiguration !== undefined && {
      SalesforceConfiguration: serializeAws_json1_1SalesforceConfiguration(input.SalesforceConfiguration, context),
    }),
    ...(input.ServiceNowConfiguration !== undefined && {
      ServiceNowConfiguration: serializeAws_json1_1ServiceNowConfiguration(input.ServiceNowConfiguration, context),
    }),
    ...(input.SharePointConfiguration !== undefined && {
      SharePointConfiguration: serializeAws_json1_1SharePointConfiguration(input.SharePointConfiguration, context),
    }),
  };
};

const serializeAws_json1_1DataSourceInclusionsExclusionsStrings = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1DataSourceSyncJobMetricTarget = (
  input: DataSourceSyncJobMetricTarget,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceId !== undefined && { DataSourceId: input.DataSourceId }),
    ...(input.DataSourceSyncJobId !== undefined && { DataSourceSyncJobId: input.DataSourceSyncJobId }),
  };
};

const serializeAws_json1_1DataSourceToIndexFieldMapping = (
  input: DataSourceToIndexFieldMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceFieldName !== undefined && { DataSourceFieldName: input.DataSourceFieldName }),
    ...(input.DateFieldFormat !== undefined && { DateFieldFormat: input.DateFieldFormat }),
    ...(input.IndexFieldName !== undefined && { IndexFieldName: input.IndexFieldName }),
  };
};

const serializeAws_json1_1DataSourceToIndexFieldMappingList = (
  input: DataSourceToIndexFieldMapping[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_json1_1DataSourceToIndexFieldMapping(entry, context));
};

const serializeAws_json1_1DataSourceVpcConfiguration = (
  input: DataSourceVpcConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroupIds !== undefined && {
      SecurityGroupIds: serializeAws_json1_1SecurityGroupIdList(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetIds !== undefined && { SubnetIds: serializeAws_json1_1SubnetIdList(input.SubnetIds, context) }),
  };
};

const serializeAws_json1_1DeleteDataSourceRequest = (input: DeleteDataSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.IndexId !== undefined && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DeleteFaqRequest = (input: DeleteFaqRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.IndexId !== undefined && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DeleteIndexRequest = (input: DeleteIndexRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
  };
};

const serializeAws_json1_1DescribeDataSourceRequest = (
  input: DescribeDataSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.IndexId !== undefined && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DescribeFaqRequest = (input: DescribeFaqRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.IndexId !== undefined && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1DescribeIndexRequest = (input: DescribeIndexRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
  };
};

const serializeAws_json1_1Document = (input: Document, context: __SerdeContext): any => {
  return {
    ...(input.AccessControlList !== undefined && {
      AccessControlList: serializeAws_json1_1PrincipalList(input.AccessControlList, context),
    }),
    ...(input.Attributes !== undefined && {
      Attributes: serializeAws_json1_1DocumentAttributeList(input.Attributes, context),
    }),
    ...(input.Blob !== undefined && { Blob: context.base64Encoder(input.Blob) }),
    ...(input.ContentType !== undefined && { ContentType: input.ContentType }),
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.S3Path !== undefined && { S3Path: serializeAws_json1_1S3Path(input.S3Path, context) }),
    ...(input.Title !== undefined && { Title: input.Title }),
  };
};

const serializeAws_json1_1DocumentAttribute = (input: DocumentAttribute, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: serializeAws_json1_1DocumentAttributeValue(input.Value, context) }),
  };
};

const serializeAws_json1_1DocumentAttributeKeyList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1DocumentAttributeList = (input: DocumentAttribute[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1DocumentAttribute(entry, context));
};

const serializeAws_json1_1DocumentAttributeStringListValue = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1DocumentAttributeValue = (input: DocumentAttributeValue, context: __SerdeContext): any => {
  return {
    ...(input.DateValue !== undefined && { DateValue: Math.round(input.DateValue.getTime() / 1000) }),
    ...(input.LongValue !== undefined && { LongValue: input.LongValue }),
    ...(input.StringListValue !== undefined && {
      StringListValue: serializeAws_json1_1DocumentAttributeStringListValue(input.StringListValue, context),
    }),
    ...(input.StringValue !== undefined && { StringValue: input.StringValue }),
  };
};

const serializeAws_json1_1DocumentIdList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1DocumentList = (input: Document[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1Document(entry, context));
};

const serializeAws_json1_1DocumentMetadataConfiguration = (
  input: DocumentMetadataConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Relevance !== undefined && { Relevance: serializeAws_json1_1Relevance(input.Relevance, context) }),
    ...(input.Search !== undefined && { Search: serializeAws_json1_1Search(input.Search, context) }),
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_json1_1DocumentMetadataConfigurationList = (
  input: DocumentMetadataConfiguration[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_json1_1DocumentMetadataConfiguration(entry, context));
};

const serializeAws_json1_1DocumentsMetadataConfiguration = (
  input: DocumentsMetadataConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Prefix !== undefined && { S3Prefix: input.S3Prefix }),
  };
};

const serializeAws_json1_1Facet = (input: Facet, context: __SerdeContext): any => {
  return {
    ...(input.DocumentAttributeKey !== undefined && { DocumentAttributeKey: input.DocumentAttributeKey }),
  };
};

const serializeAws_json1_1FacetList = (input: Facet[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1Facet(entry, context));
};

const serializeAws_json1_1JsonTokenTypeConfiguration = (
  input: JsonTokenTypeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupAttributeField !== undefined && { GroupAttributeField: input.GroupAttributeField }),
    ...(input.UserNameAttributeField !== undefined && { UserNameAttributeField: input.UserNameAttributeField }),
  };
};

const serializeAws_json1_1JwtTokenTypeConfiguration = (
  input: JwtTokenTypeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClaimRegex !== undefined && { ClaimRegex: input.ClaimRegex }),
    ...(input.GroupAttributeField !== undefined && { GroupAttributeField: input.GroupAttributeField }),
    ...(input.Issuer !== undefined && { Issuer: input.Issuer }),
    ...(input.KeyLocation !== undefined && { KeyLocation: input.KeyLocation }),
    ...(input.SecretManagerArn !== undefined && { SecretManagerArn: input.SecretManagerArn }),
    ...(input.URL !== undefined && { URL: input.URL }),
    ...(input.UserNameAttributeField !== undefined && { UserNameAttributeField: input.UserNameAttributeField }),
  };
};

const serializeAws_json1_1ListDataSourcesRequest = (input: ListDataSourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.IndexId !== undefined && { IndexId: input.IndexId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDataSourceSyncJobsRequest = (
  input: ListDataSourceSyncJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.IndexId !== undefined && { IndexId: input.IndexId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.StartTimeFilter !== undefined && {
      StartTimeFilter: serializeAws_json1_1TimeRange(input.StartTimeFilter, context),
    }),
    ...(input.StatusFilter !== undefined && { StatusFilter: input.StatusFilter }),
  };
};

const serializeAws_json1_1ListFaqsRequest = (input: ListFaqsRequest, context: __SerdeContext): any => {
  return {
    ...(input.IndexId !== undefined && { IndexId: input.IndexId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListIndicesRequest = (input: ListIndicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1OneDriveConfiguration = (input: OneDriveConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DisableLocalGroups !== undefined && { DisableLocalGroups: input.DisableLocalGroups }),
    ...(input.ExclusionPatterns !== undefined && {
      ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.FieldMappings !== undefined && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.InclusionPatterns !== undefined && {
      InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.OneDriveUsers !== undefined && {
      OneDriveUsers: serializeAws_json1_1OneDriveUsers(input.OneDriveUsers, context),
    }),
    ...(input.SecretArn !== undefined && { SecretArn: input.SecretArn }),
    ...(input.TenantDomain !== undefined && { TenantDomain: input.TenantDomain }),
  };
};

const serializeAws_json1_1OneDriveUserList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1OneDriveUsers = (input: OneDriveUsers, context: __SerdeContext): any => {
  return {
    ...(input.OneDriveUserList !== undefined && {
      OneDriveUserList: serializeAws_json1_1OneDriveUserList(input.OneDriveUserList, context),
    }),
    ...(input.OneDriveUserS3Path !== undefined && {
      OneDriveUserS3Path: serializeAws_json1_1S3Path(input.OneDriveUserS3Path, context),
    }),
  };
};

const serializeAws_json1_1Principal = (input: Principal, context: __SerdeContext): any => {
  return {
    ...(input.Access !== undefined && { Access: input.Access }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_json1_1PrincipalList = (input: Principal[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1Principal(entry, context));
};

const serializeAws_json1_1QueryRequest = (input: QueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.AttributeFilter !== undefined && {
      AttributeFilter: serializeAws_json1_1AttributeFilter(input.AttributeFilter, context),
    }),
    ...(input.Facets !== undefined && { Facets: serializeAws_json1_1FacetList(input.Facets, context) }),
    ...(input.IndexId !== undefined && { IndexId: input.IndexId }),
    ...(input.PageNumber !== undefined && { PageNumber: input.PageNumber }),
    ...(input.PageSize !== undefined && { PageSize: input.PageSize }),
    ...(input.QueryResultTypeFilter !== undefined && { QueryResultTypeFilter: input.QueryResultTypeFilter }),
    ...(input.QueryText !== undefined && { QueryText: input.QueryText }),
    ...(input.RequestedDocumentAttributes !== undefined && {
      RequestedDocumentAttributes: serializeAws_json1_1DocumentAttributeKeyList(
        input.RequestedDocumentAttributes,
        context
      ),
    }),
    ...(input.SortingConfiguration !== undefined && {
      SortingConfiguration: serializeAws_json1_1SortingConfiguration(input.SortingConfiguration, context),
    }),
    ...(input.UserContext !== undefined && {
      UserContext: serializeAws_json1_1UserContext(input.UserContext, context),
    }),
  };
};

const serializeAws_json1_1Relevance = (input: Relevance, context: __SerdeContext): any => {
  return {
    ...(input.Duration !== undefined && { Duration: input.Duration }),
    ...(input.Freshness !== undefined && { Freshness: input.Freshness }),
    ...(input.Importance !== undefined && { Importance: input.Importance }),
    ...(input.RankOrder !== undefined && { RankOrder: input.RankOrder }),
    ...(input.ValueImportanceMap !== undefined && {
      ValueImportanceMap: serializeAws_json1_1ValueImportanceMap(input.ValueImportanceMap, context),
    }),
  };
};

const serializeAws_json1_1RelevanceFeedback = (input: RelevanceFeedback, context: __SerdeContext): any => {
  return {
    ...(input.RelevanceValue !== undefined && { RelevanceValue: input.RelevanceValue }),
    ...(input.ResultId !== undefined && { ResultId: input.ResultId }),
  };
};

const serializeAws_json1_1RelevanceFeedbackList = (input: RelevanceFeedback[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1RelevanceFeedback(entry, context));
};

const serializeAws_json1_1S3DataSourceConfiguration = (
  input: S3DataSourceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessControlListConfiguration !== undefined && {
      AccessControlListConfiguration: serializeAws_json1_1AccessControlListConfiguration(
        input.AccessControlListConfiguration,
        context
      ),
    }),
    ...(input.BucketName !== undefined && { BucketName: input.BucketName }),
    ...(input.DocumentsMetadataConfiguration !== undefined && {
      DocumentsMetadataConfiguration: serializeAws_json1_1DocumentsMetadataConfiguration(
        input.DocumentsMetadataConfiguration,
        context
      ),
    }),
    ...(input.ExclusionPatterns !== undefined && {
      ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.InclusionPatterns !== undefined && {
      InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.InclusionPrefixes !== undefined && {
      InclusionPrefixes: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPrefixes, context),
    }),
  };
};

const serializeAws_json1_1S3Path = (input: S3Path, context: __SerdeContext): any => {
  return {
    ...(input.Bucket !== undefined && { Bucket: input.Bucket }),
    ...(input.Key !== undefined && { Key: input.Key }),
  };
};

const serializeAws_json1_1SalesforceChatterFeedConfiguration = (
  input: SalesforceChatterFeedConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentDataFieldName !== undefined && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName !== undefined && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.FieldMappings !== undefined && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.IncludeFilterTypes !== undefined && {
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
  return input.map((entry) => entry);
};

const serializeAws_json1_1SalesforceConfiguration = (input: SalesforceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ChatterFeedConfiguration !== undefined && {
      ChatterFeedConfiguration: serializeAws_json1_1SalesforceChatterFeedConfiguration(
        input.ChatterFeedConfiguration,
        context
      ),
    }),
    ...(input.CrawlAttachments !== undefined && { CrawlAttachments: input.CrawlAttachments }),
    ...(input.ExcludeAttachmentFilePatterns !== undefined && {
      ExcludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
        input.ExcludeAttachmentFilePatterns,
        context
      ),
    }),
    ...(input.IncludeAttachmentFilePatterns !== undefined && {
      IncludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
        input.IncludeAttachmentFilePatterns,
        context
      ),
    }),
    ...(input.KnowledgeArticleConfiguration !== undefined && {
      KnowledgeArticleConfiguration: serializeAws_json1_1SalesforceKnowledgeArticleConfiguration(
        input.KnowledgeArticleConfiguration,
        context
      ),
    }),
    ...(input.SecretArn !== undefined && { SecretArn: input.SecretArn }),
    ...(input.ServerUrl !== undefined && { ServerUrl: input.ServerUrl }),
    ...(input.StandardObjectAttachmentConfiguration !== undefined && {
      StandardObjectAttachmentConfiguration: serializeAws_json1_1SalesforceStandardObjectAttachmentConfiguration(
        input.StandardObjectAttachmentConfiguration,
        context
      ),
    }),
    ...(input.StandardObjectConfigurations !== undefined && {
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
    ...(input.DocumentDataFieldName !== undefined && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName !== undefined && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.FieldMappings !== undefined && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
  };
};

const serializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfigurationList = (
  input: SalesforceCustomKnowledgeArticleTypeConfiguration[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfiguration(entry, context));
};

const serializeAws_json1_1SalesforceKnowledgeArticleConfiguration = (
  input: SalesforceKnowledgeArticleConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomKnowledgeArticleTypeConfigurations !== undefined && {
      CustomKnowledgeArticleTypeConfigurations: serializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfigurationList(
        input.CustomKnowledgeArticleTypeConfigurations,
        context
      ),
    }),
    ...(input.IncludedStates !== undefined && {
      IncludedStates: serializeAws_json1_1SalesforceKnowledgeArticleStateList(input.IncludedStates, context),
    }),
    ...(input.StandardKnowledgeArticleTypeConfiguration !== undefined && {
      StandardKnowledgeArticleTypeConfiguration: serializeAws_json1_1SalesforceStandardKnowledgeArticleTypeConfiguration(
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
  return input.map((entry) => entry);
};

const serializeAws_json1_1SalesforceStandardKnowledgeArticleTypeConfiguration = (
  input: SalesforceStandardKnowledgeArticleTypeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentDataFieldName !== undefined && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName !== undefined && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.FieldMappings !== undefined && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
  };
};

const serializeAws_json1_1SalesforceStandardObjectAttachmentConfiguration = (
  input: SalesforceStandardObjectAttachmentConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentTitleFieldName !== undefined && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.FieldMappings !== undefined && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
  };
};

const serializeAws_json1_1SalesforceStandardObjectConfiguration = (
  input: SalesforceStandardObjectConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DocumentDataFieldName !== undefined && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName !== undefined && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.FieldMappings !== undefined && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
  };
};

const serializeAws_json1_1SalesforceStandardObjectConfigurationList = (
  input: SalesforceStandardObjectConfiguration[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_json1_1SalesforceStandardObjectConfiguration(entry, context));
};

const serializeAws_json1_1Search = (input: Search, context: __SerdeContext): any => {
  return {
    ...(input.Displayable !== undefined && { Displayable: input.Displayable }),
    ...(input.Facetable !== undefined && { Facetable: input.Facetable }),
    ...(input.Searchable !== undefined && { Searchable: input.Searchable }),
    ...(input.Sortable !== undefined && { Sortable: input.Sortable }),
  };
};

const serializeAws_json1_1SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1ServerSideEncryptionConfiguration = (
  input: ServerSideEncryptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKeyId !== undefined && { KmsKeyId: input.KmsKeyId }),
  };
};

const serializeAws_json1_1ServiceNowConfiguration = (input: ServiceNowConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.HostUrl !== undefined && { HostUrl: input.HostUrl }),
    ...(input.KnowledgeArticleConfiguration !== undefined && {
      KnowledgeArticleConfiguration: serializeAws_json1_1ServiceNowKnowledgeArticleConfiguration(
        input.KnowledgeArticleConfiguration,
        context
      ),
    }),
    ...(input.SecretArn !== undefined && { SecretArn: input.SecretArn }),
    ...(input.ServiceCatalogConfiguration !== undefined && {
      ServiceCatalogConfiguration: serializeAws_json1_1ServiceNowServiceCatalogConfiguration(
        input.ServiceCatalogConfiguration,
        context
      ),
    }),
    ...(input.ServiceNowBuildVersion !== undefined && { ServiceNowBuildVersion: input.ServiceNowBuildVersion }),
  };
};

const serializeAws_json1_1ServiceNowKnowledgeArticleConfiguration = (
  input: ServiceNowKnowledgeArticleConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CrawlAttachments !== undefined && { CrawlAttachments: input.CrawlAttachments }),
    ...(input.DocumentDataFieldName !== undefined && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName !== undefined && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.ExcludeAttachmentFilePatterns !== undefined && {
      ExcludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
        input.ExcludeAttachmentFilePatterns,
        context
      ),
    }),
    ...(input.FieldMappings !== undefined && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.IncludeAttachmentFilePatterns !== undefined && {
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
    ...(input.CrawlAttachments !== undefined && { CrawlAttachments: input.CrawlAttachments }),
    ...(input.DocumentDataFieldName !== undefined && { DocumentDataFieldName: input.DocumentDataFieldName }),
    ...(input.DocumentTitleFieldName !== undefined && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.ExcludeAttachmentFilePatterns !== undefined && {
      ExcludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
        input.ExcludeAttachmentFilePatterns,
        context
      ),
    }),
    ...(input.FieldMappings !== undefined && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.IncludeAttachmentFilePatterns !== undefined && {
      IncludeAttachmentFilePatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
        input.IncludeAttachmentFilePatterns,
        context
      ),
    }),
  };
};

const serializeAws_json1_1SharePointConfiguration = (input: SharePointConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CrawlAttachments !== undefined && { CrawlAttachments: input.CrawlAttachments }),
    ...(input.DisableLocalGroups !== undefined && { DisableLocalGroups: input.DisableLocalGroups }),
    ...(input.DocumentTitleFieldName !== undefined && { DocumentTitleFieldName: input.DocumentTitleFieldName }),
    ...(input.ExclusionPatterns !== undefined && {
      ExclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.ExclusionPatterns, context),
    }),
    ...(input.FieldMappings !== undefined && {
      FieldMappings: serializeAws_json1_1DataSourceToIndexFieldMappingList(input.FieldMappings, context),
    }),
    ...(input.InclusionPatterns !== undefined && {
      InclusionPatterns: serializeAws_json1_1DataSourceInclusionsExclusionsStrings(input.InclusionPatterns, context),
    }),
    ...(input.SecretArn !== undefined && { SecretArn: input.SecretArn }),
    ...(input.SharePointVersion !== undefined && { SharePointVersion: input.SharePointVersion }),
    ...(input.Urls !== undefined && { Urls: serializeAws_json1_1SharePointUrlList(input.Urls, context) }),
    ...(input.UseChangeLog !== undefined && { UseChangeLog: input.UseChangeLog }),
    ...(input.VpcConfiguration !== undefined && {
      VpcConfiguration: serializeAws_json1_1DataSourceVpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

const serializeAws_json1_1SharePointUrlList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1SortingConfiguration = (input: SortingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DocumentAttributeKey !== undefined && { DocumentAttributeKey: input.DocumentAttributeKey }),
    ...(input.SortOrder !== undefined && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_json1_1SqlConfiguration = (input: SqlConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.QueryIdentifiersEnclosingOption !== undefined && {
      QueryIdentifiersEnclosingOption: input.QueryIdentifiersEnclosingOption,
    }),
  };
};

const serializeAws_json1_1StartDataSourceSyncJobRequest = (
  input: StartDataSourceSyncJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.IndexId !== undefined && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1StopDataSourceSyncJobRequest = (
  input: StopDataSourceSyncJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.IndexId !== undefined && { IndexId: input.IndexId }),
  };
};

const serializeAws_json1_1SubmitFeedbackRequest = (input: SubmitFeedbackRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClickFeedbackItems !== undefined && {
      ClickFeedbackItems: serializeAws_json1_1ClickFeedbackList(input.ClickFeedbackItems, context),
    }),
    ...(input.IndexId !== undefined && { IndexId: input.IndexId }),
    ...(input.QueryId !== undefined && { QueryId: input.QueryId }),
    ...(input.RelevanceFeedbackItems !== undefined && {
      RelevanceFeedbackItems: serializeAws_json1_1RelevanceFeedbackList(input.RelevanceFeedbackItems, context),
    }),
  };
};

const serializeAws_json1_1SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1TimeRange = (input: TimeRange, context: __SerdeContext): any => {
  return {
    ...(input.EndTime !== undefined && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.StartTime !== undefined && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateDataSourceRequest = (input: UpdateDataSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Configuration !== undefined && {
      Configuration: serializeAws_json1_1DataSourceConfiguration(input.Configuration, context),
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.IndexId !== undefined && { IndexId: input.IndexId }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn }),
    ...(input.Schedule !== undefined && { Schedule: input.Schedule }),
  };
};

const serializeAws_json1_1UpdateIndexRequest = (input: UpdateIndexRequest, context: __SerdeContext): any => {
  return {
    ...(input.CapacityUnits !== undefined && {
      CapacityUnits: serializeAws_json1_1CapacityUnitsConfiguration(input.CapacityUnits, context),
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.DocumentMetadataConfigurationUpdates !== undefined && {
      DocumentMetadataConfigurationUpdates: serializeAws_json1_1DocumentMetadataConfigurationList(
        input.DocumentMetadataConfigurationUpdates,
        context
      ),
    }),
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn }),
    ...(input.UserContextPolicy !== undefined && { UserContextPolicy: input.UserContextPolicy }),
    ...(input.UserTokenConfigurations !== undefined && {
      UserTokenConfigurations: serializeAws_json1_1UserTokenConfigurationList(input.UserTokenConfigurations, context),
    }),
  };
};

const serializeAws_json1_1UserContext = (input: UserContext, context: __SerdeContext): any => {
  return {
    ...(input.Token !== undefined && { Token: input.Token }),
  };
};

const serializeAws_json1_1UserTokenConfiguration = (input: UserTokenConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.JsonTokenTypeConfiguration !== undefined && {
      JsonTokenTypeConfiguration: serializeAws_json1_1JsonTokenTypeConfiguration(
        input.JsonTokenTypeConfiguration,
        context
      ),
    }),
    ...(input.JwtTokenTypeConfiguration !== undefined && {
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
  return input.map((entry) => serializeAws_json1_1UserTokenConfiguration(entry, context));
};

const serializeAws_json1_1ValueImportanceMap = (input: { [key: string]: number }, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: number }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const deserializeAws_json1_1AccessControlListConfiguration = (
  output: any,
  context: __SerdeContext
): AccessControlListConfiguration => {
  return {
    KeyPath: output.KeyPath !== undefined && output.KeyPath !== null ? output.KeyPath : undefined,
  } as any;
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1AclConfiguration = (output: any, context: __SerdeContext): AclConfiguration => {
  return {
    AllowedGroupsColumnName:
      output.AllowedGroupsColumnName !== undefined && output.AllowedGroupsColumnName !== null
        ? output.AllowedGroupsColumnName
        : undefined,
  } as any;
};

const deserializeAws_json1_1AdditionalResultAttribute = (
  output: any,
  context: __SerdeContext
): AdditionalResultAttribute => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? deserializeAws_json1_1AdditionalResultAttributeValue(output.Value, context)
        : undefined,
    ValueType: output.ValueType !== undefined && output.ValueType !== null ? output.ValueType : undefined,
  } as any;
};

const deserializeAws_json1_1AdditionalResultAttributeList = (
  output: any,
  context: __SerdeContext
): AdditionalResultAttribute[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1AdditionalResultAttribute(entry, context));
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
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
  } as any;
};

const deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocuments = (
  output: any,
  context: __SerdeContext
): BatchDeleteDocumentResponseFailedDocument[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocument(entry, context)
  );
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
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
  } as any;
};

const deserializeAws_json1_1BatchPutDocumentResponseFailedDocuments = (
  output: any,
  context: __SerdeContext
): BatchPutDocumentResponseFailedDocument[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BatchPutDocumentResponseFailedDocument(entry, context)
  );
};

const deserializeAws_json1_1CapacityUnitsConfiguration = (
  output: any,
  context: __SerdeContext
): CapacityUnitsConfiguration => {
  return {
    QueryCapacityUnits:
      output.QueryCapacityUnits !== undefined && output.QueryCapacityUnits !== null
        ? output.QueryCapacityUnits
        : undefined,
    StorageCapacityUnits:
      output.StorageCapacityUnits !== undefined && output.StorageCapacityUnits !== null
        ? output.StorageCapacityUnits
        : undefined,
  } as any;
};

const deserializeAws_json1_1ChangeDetectingColumns = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ColumnConfiguration = (output: any, context: __SerdeContext): ColumnConfiguration => {
  return {
    ChangeDetectingColumns:
      output.ChangeDetectingColumns !== undefined && output.ChangeDetectingColumns !== null
        ? deserializeAws_json1_1ChangeDetectingColumns(output.ChangeDetectingColumns, context)
        : undefined,
    DocumentDataColumnName:
      output.DocumentDataColumnName !== undefined && output.DocumentDataColumnName !== null
        ? output.DocumentDataColumnName
        : undefined,
    DocumentIdColumnName:
      output.DocumentIdColumnName !== undefined && output.DocumentIdColumnName !== null
        ? output.DocumentIdColumnName
        : undefined,
    DocumentTitleColumnName:
      output.DocumentTitleColumnName !== undefined && output.DocumentTitleColumnName !== null
        ? output.DocumentTitleColumnName
        : undefined,
    FieldMappings:
      output.FieldMappings !== undefined && output.FieldMappings !== null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
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
    CrawlAttachments:
      output.CrawlAttachments !== undefined && output.CrawlAttachments !== null ? output.CrawlAttachments : undefined,
  } as any;
};

const deserializeAws_json1_1ConfluenceAttachmentFieldMappingsList = (
  output: any,
  context: __SerdeContext
): ConfluenceAttachmentToIndexFieldMapping[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping(entry, context)
  );
};

const deserializeAws_json1_1ConfluenceAttachmentToIndexFieldMapping = (
  output: any,
  context: __SerdeContext
): ConfluenceAttachmentToIndexFieldMapping => {
  return {
    DataSourceFieldName:
      output.DataSourceFieldName !== undefined && output.DataSourceFieldName !== null
        ? output.DataSourceFieldName
        : undefined,
    DateFieldFormat:
      output.DateFieldFormat !== undefined && output.DateFieldFormat !== null ? output.DateFieldFormat : undefined,
    IndexFieldName:
      output.IndexFieldName !== undefined && output.IndexFieldName !== null ? output.IndexFieldName : undefined,
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
  return (output || []).map((entry: any) => deserializeAws_json1_1ConfluenceBlogToIndexFieldMapping(entry, context));
};

const deserializeAws_json1_1ConfluenceBlogToIndexFieldMapping = (
  output: any,
  context: __SerdeContext
): ConfluenceBlogToIndexFieldMapping => {
  return {
    DataSourceFieldName:
      output.DataSourceFieldName !== undefined && output.DataSourceFieldName !== null
        ? output.DataSourceFieldName
        : undefined,
    DateFieldFormat:
      output.DateFieldFormat !== undefined && output.DateFieldFormat !== null ? output.DateFieldFormat : undefined,
    IndexFieldName:
      output.IndexFieldName !== undefined && output.IndexFieldName !== null ? output.IndexFieldName : undefined,
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
    SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
    ServerUrl: output.ServerUrl !== undefined && output.ServerUrl !== null ? output.ServerUrl : undefined,
    SpaceConfiguration:
      output.SpaceConfiguration !== undefined && output.SpaceConfiguration !== null
        ? deserializeAws_json1_1ConfluenceSpaceConfiguration(output.SpaceConfiguration, context)
        : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
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
  return (output || []).map((entry: any) => deserializeAws_json1_1ConfluencePageToIndexFieldMapping(entry, context));
};

const deserializeAws_json1_1ConfluencePageToIndexFieldMapping = (
  output: any,
  context: __SerdeContext
): ConfluencePageToIndexFieldMapping => {
  return {
    DataSourceFieldName:
      output.DataSourceFieldName !== undefined && output.DataSourceFieldName !== null
        ? output.DataSourceFieldName
        : undefined,
    DateFieldFormat:
      output.DateFieldFormat !== undefined && output.DateFieldFormat !== null ? output.DateFieldFormat : undefined,
    IndexFieldName:
      output.IndexFieldName !== undefined && output.IndexFieldName !== null ? output.IndexFieldName : undefined,
  } as any;
};

const deserializeAws_json1_1ConfluenceSpaceConfiguration = (
  output: any,
  context: __SerdeContext
): ConfluenceSpaceConfiguration => {
  return {
    CrawlArchivedSpaces:
      output.CrawlArchivedSpaces !== undefined && output.CrawlArchivedSpaces !== null
        ? output.CrawlArchivedSpaces
        : undefined,
    CrawlPersonalSpaces:
      output.CrawlPersonalSpaces !== undefined && output.CrawlPersonalSpaces !== null
        ? output.CrawlPersonalSpaces
        : undefined,
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
  return (output || []).map((entry: any) => deserializeAws_json1_1ConfluenceSpaceToIndexFieldMapping(entry, context));
};

const deserializeAws_json1_1ConfluenceSpaceList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ConfluenceSpaceToIndexFieldMapping = (
  output: any,
  context: __SerdeContext
): ConfluenceSpaceToIndexFieldMapping => {
  return {
    DataSourceFieldName:
      output.DataSourceFieldName !== undefined && output.DataSourceFieldName !== null
        ? output.DataSourceFieldName
        : undefined,
    DateFieldFormat:
      output.DateFieldFormat !== undefined && output.DateFieldFormat !== null ? output.DateFieldFormat : undefined,
    IndexFieldName:
      output.IndexFieldName !== undefined && output.IndexFieldName !== null ? output.IndexFieldName : undefined,
  } as any;
};

const deserializeAws_json1_1ConnectionConfiguration = (
  output: any,
  context: __SerdeContext
): ConnectionConfiguration => {
  return {
    DatabaseHost: output.DatabaseHost !== undefined && output.DatabaseHost !== null ? output.DatabaseHost : undefined,
    DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
    DatabasePort: output.DatabasePort !== undefined && output.DatabasePort !== null ? output.DatabasePort : undefined,
    SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
    TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDataSourceResponse = (
  output: any,
  context: __SerdeContext
): CreateDataSourceResponse => {
  return {
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
  } as any;
};

const deserializeAws_json1_1CreateFaqResponse = (output: any, context: __SerdeContext): CreateFaqResponse => {
  return {
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
  } as any;
};

const deserializeAws_json1_1CreateIndexResponse = (output: any, context: __SerdeContext): CreateIndexResponse => {
  return {
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
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
    DatabaseEngineType:
      output.DatabaseEngineType !== undefined && output.DatabaseEngineType !== null
        ? output.DatabaseEngineType
        : undefined,
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
  } as any;
};

const deserializeAws_json1_1DataSourceInclusionsExclusionsStrings = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DataSourceSummary = (output: any, context: __SerdeContext): DataSourceSummary => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1DataSourceSummaryList = (output: any, context: __SerdeContext): DataSourceSummary[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DataSourceSummary(entry, context));
};

const deserializeAws_json1_1DataSourceSyncJob = (output: any, context: __SerdeContext): DataSourceSyncJob => {
  return {
    DataSourceErrorCode:
      output.DataSourceErrorCode !== undefined && output.DataSourceErrorCode !== null
        ? output.DataSourceErrorCode
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    ExecutionId: output.ExecutionId !== undefined && output.ExecutionId !== null ? output.ExecutionId : undefined,
    Metrics:
      output.Metrics !== undefined && output.Metrics !== null
        ? deserializeAws_json1_1DataSourceSyncJobMetrics(output.Metrics, context)
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_json1_1DataSourceSyncJobHistoryList = (
  output: any,
  context: __SerdeContext
): DataSourceSyncJob[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DataSourceSyncJob(entry, context));
};

const deserializeAws_json1_1DataSourceSyncJobMetrics = (
  output: any,
  context: __SerdeContext
): DataSourceSyncJobMetrics => {
  return {
    DocumentsAdded:
      output.DocumentsAdded !== undefined && output.DocumentsAdded !== null ? output.DocumentsAdded : undefined,
    DocumentsDeleted:
      output.DocumentsDeleted !== undefined && output.DocumentsDeleted !== null ? output.DocumentsDeleted : undefined,
    DocumentsFailed:
      output.DocumentsFailed !== undefined && output.DocumentsFailed !== null ? output.DocumentsFailed : undefined,
    DocumentsModified:
      output.DocumentsModified !== undefined && output.DocumentsModified !== null
        ? output.DocumentsModified
        : undefined,
    DocumentsScanned:
      output.DocumentsScanned !== undefined && output.DocumentsScanned !== null ? output.DocumentsScanned : undefined,
  } as any;
};

const deserializeAws_json1_1DataSourceToIndexFieldMapping = (
  output: any,
  context: __SerdeContext
): DataSourceToIndexFieldMapping => {
  return {
    DataSourceFieldName:
      output.DataSourceFieldName !== undefined && output.DataSourceFieldName !== null
        ? output.DataSourceFieldName
        : undefined,
    DateFieldFormat:
      output.DateFieldFormat !== undefined && output.DateFieldFormat !== null ? output.DateFieldFormat : undefined,
    IndexFieldName:
      output.IndexFieldName !== undefined && output.IndexFieldName !== null ? output.IndexFieldName : undefined,
  } as any;
};

const deserializeAws_json1_1DataSourceToIndexFieldMappingList = (
  output: any,
  context: __SerdeContext
): DataSourceToIndexFieldMapping[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DataSourceToIndexFieldMapping(entry, context));
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
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    IndexId: output.IndexId !== undefined && output.IndexId !== null ? output.IndexId : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    Schedule: output.Schedule !== undefined && output.Schedule !== null ? output.Schedule : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
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
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    FileFormat: output.FileFormat !== undefined && output.FileFormat !== null ? output.FileFormat : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    IndexId: output.IndexId !== undefined && output.IndexId !== null ? output.IndexId : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    S3Path:
      output.S3Path !== undefined && output.S3Path !== null
        ? deserializeAws_json1_1S3Path(output.S3Path, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
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
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    DocumentMetadataConfigurations:
      output.DocumentMetadataConfigurations !== undefined && output.DocumentMetadataConfigurations !== null
        ? deserializeAws_json1_1DocumentMetadataConfigurationList(output.DocumentMetadataConfigurations, context)
        : undefined,
    Edition: output.Edition !== undefined && output.Edition !== null ? output.Edition : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    IndexStatistics:
      output.IndexStatistics !== undefined && output.IndexStatistics !== null
        ? deserializeAws_json1_1IndexStatistics(output.IndexStatistics, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    ServerSideEncryptionConfiguration:
      output.ServerSideEncryptionConfiguration !== undefined && output.ServerSideEncryptionConfiguration !== null
        ? deserializeAws_json1_1ServerSideEncryptionConfiguration(output.ServerSideEncryptionConfiguration, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
    UserContextPolicy:
      output.UserContextPolicy !== undefined && output.UserContextPolicy !== null
        ? output.UserContextPolicy
        : undefined,
    UserTokenConfigurations:
      output.UserTokenConfigurations !== undefined && output.UserTokenConfigurations !== null
        ? deserializeAws_json1_1UserTokenConfigurationList(output.UserTokenConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentAttribute = (output: any, context: __SerdeContext): DocumentAttribute => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? deserializeAws_json1_1DocumentAttributeValue(output.Value, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentAttributeList = (output: any, context: __SerdeContext): DocumentAttribute[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DocumentAttribute(entry, context));
};

const deserializeAws_json1_1DocumentAttributeStringListValue = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DocumentAttributeValue = (output: any, context: __SerdeContext): DocumentAttributeValue => {
  return {
    DateValue:
      output.DateValue !== undefined && output.DateValue !== null
        ? new Date(Math.round(output.DateValue * 1000))
        : undefined,
    LongValue: output.LongValue !== undefined && output.LongValue !== null ? output.LongValue : undefined,
    StringListValue:
      output.StringListValue !== undefined && output.StringListValue !== null
        ? deserializeAws_json1_1DocumentAttributeStringListValue(output.StringListValue, context)
        : undefined,
    StringValue: output.StringValue !== undefined && output.StringValue !== null ? output.StringValue : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentAttributeValueCountPair = (
  output: any,
  context: __SerdeContext
): DocumentAttributeValueCountPair => {
  return {
    Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
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
  return (output || []).map((entry: any) => deserializeAws_json1_1DocumentAttributeValueCountPair(entry, context));
};

const deserializeAws_json1_1DocumentMetadataConfiguration = (
  output: any,
  context: __SerdeContext
): DocumentMetadataConfiguration => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Relevance:
      output.Relevance !== undefined && output.Relevance !== null
        ? deserializeAws_json1_1Relevance(output.Relevance, context)
        : undefined,
    Search:
      output.Search !== undefined && output.Search !== null
        ? deserializeAws_json1_1Search(output.Search, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentMetadataConfigurationList = (
  output: any,
  context: __SerdeContext
): DocumentMetadataConfiguration[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DocumentMetadataConfiguration(entry, context));
};

const deserializeAws_json1_1DocumentsMetadataConfiguration = (
  output: any,
  context: __SerdeContext
): DocumentsMetadataConfiguration => {
  return {
    S3Prefix: output.S3Prefix !== undefined && output.S3Prefix !== null ? output.S3Prefix : undefined,
  } as any;
};

const deserializeAws_json1_1FacetResult = (output: any, context: __SerdeContext): FacetResult => {
  return {
    DocumentAttributeKey:
      output.DocumentAttributeKey !== undefined && output.DocumentAttributeKey !== null
        ? output.DocumentAttributeKey
        : undefined,
    DocumentAttributeValueCountPairs:
      output.DocumentAttributeValueCountPairs !== undefined && output.DocumentAttributeValueCountPairs !== null
        ? deserializeAws_json1_1DocumentAttributeValueCountPairList(output.DocumentAttributeValueCountPairs, context)
        : undefined,
    DocumentAttributeValueType:
      output.DocumentAttributeValueType !== undefined && output.DocumentAttributeValueType !== null
        ? output.DocumentAttributeValueType
        : undefined,
  } as any;
};

const deserializeAws_json1_1FacetResultList = (output: any, context: __SerdeContext): FacetResult[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1FacetResult(entry, context));
};

const deserializeAws_json1_1FaqStatistics = (output: any, context: __SerdeContext): FaqStatistics => {
  return {
    IndexedQuestionAnswersCount:
      output.IndexedQuestionAnswersCount !== undefined && output.IndexedQuestionAnswersCount !== null
        ? output.IndexedQuestionAnswersCount
        : undefined,
  } as any;
};

const deserializeAws_json1_1FaqSummary = (output: any, context: __SerdeContext): FaqSummary => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    FileFormat: output.FileFormat !== undefined && output.FileFormat !== null ? output.FileFormat : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1FaqSummaryItems = (output: any, context: __SerdeContext): FaqSummary[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1FaqSummary(entry, context));
};

const deserializeAws_json1_1Highlight = (output: any, context: __SerdeContext): Highlight => {
  return {
    BeginOffset: output.BeginOffset !== undefined && output.BeginOffset !== null ? output.BeginOffset : undefined,
    EndOffset: output.EndOffset !== undefined && output.EndOffset !== null ? output.EndOffset : undefined,
    TopAnswer: output.TopAnswer !== undefined && output.TopAnswer !== null ? output.TopAnswer : undefined,
  } as any;
};

const deserializeAws_json1_1HighlightList = (output: any, context: __SerdeContext): Highlight[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Highlight(entry, context));
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
    Edition: output.Edition !== undefined && output.Edition !== null ? output.Edition : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
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
  return (output || []).map((entry: any) => deserializeAws_json1_1IndexConfigurationSummary(entry, context));
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
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1JsonTokenTypeConfiguration = (
  output: any,
  context: __SerdeContext
): JsonTokenTypeConfiguration => {
  return {
    GroupAttributeField:
      output.GroupAttributeField !== undefined && output.GroupAttributeField !== null
        ? output.GroupAttributeField
        : undefined,
    UserNameAttributeField:
      output.UserNameAttributeField !== undefined && output.UserNameAttributeField !== null
        ? output.UserNameAttributeField
        : undefined,
  } as any;
};

const deserializeAws_json1_1JwtTokenTypeConfiguration = (
  output: any,
  context: __SerdeContext
): JwtTokenTypeConfiguration => {
  return {
    ClaimRegex: output.ClaimRegex !== undefined && output.ClaimRegex !== null ? output.ClaimRegex : undefined,
    GroupAttributeField:
      output.GroupAttributeField !== undefined && output.GroupAttributeField !== null
        ? output.GroupAttributeField
        : undefined,
    Issuer: output.Issuer !== undefined && output.Issuer !== null ? output.Issuer : undefined,
    KeyLocation: output.KeyLocation !== undefined && output.KeyLocation !== null ? output.KeyLocation : undefined,
    SecretManagerArn:
      output.SecretManagerArn !== undefined && output.SecretManagerArn !== null ? output.SecretManagerArn : undefined,
    URL: output.URL !== undefined && output.URL !== null ? output.URL : undefined,
    UserNameAttributeField:
      output.UserNameAttributeField !== undefined && output.UserNameAttributeField !== null
        ? output.UserNameAttributeField
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListDataSourcesResponse = (
  output: any,
  context: __SerdeContext
): ListDataSourcesResponse => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
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
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListFaqsResponse = (output: any, context: __SerdeContext): ListFaqsResponse => {
  return {
    FaqSummaryItems:
      output.FaqSummaryItems !== undefined && output.FaqSummaryItems !== null
        ? deserializeAws_json1_1FaqSummaryItems(output.FaqSummaryItems, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListIndicesResponse = (output: any, context: __SerdeContext): ListIndicesResponse => {
  return {
    IndexConfigurationSummaryItems:
      output.IndexConfigurationSummaryItems !== undefined && output.IndexConfigurationSummaryItems !== null
        ? deserializeAws_json1_1IndexConfigurationSummaryList(output.IndexConfigurationSummaryItems, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
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

const deserializeAws_json1_1OneDriveConfiguration = (output: any, context: __SerdeContext): OneDriveConfiguration => {
  return {
    DisableLocalGroups:
      output.DisableLocalGroups !== undefined && output.DisableLocalGroups !== null
        ? output.DisableLocalGroups
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
    OneDriveUsers:
      output.OneDriveUsers !== undefined && output.OneDriveUsers !== null
        ? deserializeAws_json1_1OneDriveUsers(output.OneDriveUsers, context)
        : undefined,
    SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
    TenantDomain: output.TenantDomain !== undefined && output.TenantDomain !== null ? output.TenantDomain : undefined,
  } as any;
};

const deserializeAws_json1_1OneDriveUserList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
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

const deserializeAws_json1_1QueryResult = (output: any, context: __SerdeContext): QueryResult => {
  return {
    FacetResults:
      output.FacetResults !== undefined && output.FacetResults !== null
        ? deserializeAws_json1_1FacetResultList(output.FacetResults, context)
        : undefined,
    QueryId: output.QueryId !== undefined && output.QueryId !== null ? output.QueryId : undefined,
    ResultItems:
      output.ResultItems !== undefined && output.ResultItems !== null
        ? deserializeAws_json1_1QueryResultItemList(output.ResultItems, context)
        : undefined,
    TotalNumberOfResults:
      output.TotalNumberOfResults !== undefined && output.TotalNumberOfResults !== null
        ? output.TotalNumberOfResults
        : undefined,
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
    DocumentId: output.DocumentId !== undefined && output.DocumentId !== null ? output.DocumentId : undefined,
    DocumentTitle:
      output.DocumentTitle !== undefined && output.DocumentTitle !== null
        ? deserializeAws_json1_1TextWithHighlights(output.DocumentTitle, context)
        : undefined,
    DocumentURI: output.DocumentURI !== undefined && output.DocumentURI !== null ? output.DocumentURI : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    ScoreAttributes:
      output.ScoreAttributes !== undefined && output.ScoreAttributes !== null
        ? deserializeAws_json1_1ScoreAttributes(output.ScoreAttributes, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_json1_1QueryResultItemList = (output: any, context: __SerdeContext): QueryResultItem[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1QueryResultItem(entry, context));
};

const deserializeAws_json1_1Relevance = (output: any, context: __SerdeContext): Relevance => {
  return {
    Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
    Freshness: output.Freshness !== undefined && output.Freshness !== null ? output.Freshness : undefined,
    Importance: output.Importance !== undefined && output.Importance !== null ? output.Importance : undefined,
    RankOrder: output.RankOrder !== undefined && output.RankOrder !== null ? output.RankOrder : undefined,
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
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceUnavailableException = (
  output: any,
  context: __SerdeContext
): ResourceUnavailableException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
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
    BucketName: output.BucketName !== undefined && output.BucketName !== null ? output.BucketName : undefined,
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
    Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
  } as any;
};

const deserializeAws_json1_1SalesforceChatterFeedConfiguration = (
  output: any,
  context: __SerdeContext
): SalesforceChatterFeedConfiguration => {
  return {
    DocumentDataFieldName:
      output.DocumentDataFieldName !== undefined && output.DocumentDataFieldName !== null
        ? output.DocumentDataFieldName
        : undefined,
    DocumentTitleFieldName:
      output.DocumentTitleFieldName !== undefined && output.DocumentTitleFieldName !== null
        ? output.DocumentTitleFieldName
        : undefined,
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
  return (output || []).map((entry: any) => entry);
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
    CrawlAttachments:
      output.CrawlAttachments !== undefined && output.CrawlAttachments !== null ? output.CrawlAttachments : undefined,
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
    SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
    ServerUrl: output.ServerUrl !== undefined && output.ServerUrl !== null ? output.ServerUrl : undefined,
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
    DocumentDataFieldName:
      output.DocumentDataFieldName !== undefined && output.DocumentDataFieldName !== null
        ? output.DocumentDataFieldName
        : undefined,
    DocumentTitleFieldName:
      output.DocumentTitleFieldName !== undefined && output.DocumentTitleFieldName !== null
        ? output.DocumentTitleFieldName
        : undefined,
    FieldMappings:
      output.FieldMappings !== undefined && output.FieldMappings !== null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfigurationList = (
  output: any,
  context: __SerdeContext
): SalesforceCustomKnowledgeArticleTypeConfiguration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SalesforceCustomKnowledgeArticleTypeConfiguration(entry, context)
  );
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
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1SalesforceStandardKnowledgeArticleTypeConfiguration = (
  output: any,
  context: __SerdeContext
): SalesforceStandardKnowledgeArticleTypeConfiguration => {
  return {
    DocumentDataFieldName:
      output.DocumentDataFieldName !== undefined && output.DocumentDataFieldName !== null
        ? output.DocumentDataFieldName
        : undefined,
    DocumentTitleFieldName:
      output.DocumentTitleFieldName !== undefined && output.DocumentTitleFieldName !== null
        ? output.DocumentTitleFieldName
        : undefined,
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
    DocumentTitleFieldName:
      output.DocumentTitleFieldName !== undefined && output.DocumentTitleFieldName !== null
        ? output.DocumentTitleFieldName
        : undefined,
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
    DocumentDataFieldName:
      output.DocumentDataFieldName !== undefined && output.DocumentDataFieldName !== null
        ? output.DocumentDataFieldName
        : undefined,
    DocumentTitleFieldName:
      output.DocumentTitleFieldName !== undefined && output.DocumentTitleFieldName !== null
        ? output.DocumentTitleFieldName
        : undefined,
    FieldMappings:
      output.FieldMappings !== undefined && output.FieldMappings !== null
        ? deserializeAws_json1_1DataSourceToIndexFieldMappingList(output.FieldMappings, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeAws_json1_1SalesforceStandardObjectConfigurationList = (
  output: any,
  context: __SerdeContext
): SalesforceStandardObjectConfiguration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SalesforceStandardObjectConfiguration(entry, context)
  );
};

const deserializeAws_json1_1ScoreAttributes = (output: any, context: __SerdeContext): ScoreAttributes => {
  return {
    ScoreConfidence:
      output.ScoreConfidence !== undefined && output.ScoreConfidence !== null ? output.ScoreConfidence : undefined,
  } as any;
};

const deserializeAws_json1_1Search = (output: any, context: __SerdeContext): Search => {
  return {
    Displayable: output.Displayable !== undefined && output.Displayable !== null ? output.Displayable : undefined,
    Facetable: output.Facetable !== undefined && output.Facetable !== null ? output.Facetable : undefined,
    Searchable: output.Searchable !== undefined && output.Searchable !== null ? output.Searchable : undefined,
    Sortable: output.Sortable !== undefined && output.Sortable !== null ? output.Sortable : undefined,
  } as any;
};

const deserializeAws_json1_1SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ServerSideEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionConfiguration => {
  return {
    KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
  } as any;
};

const deserializeAws_json1_1ServiceNowConfiguration = (
  output: any,
  context: __SerdeContext
): ServiceNowConfiguration => {
  return {
    HostUrl: output.HostUrl !== undefined && output.HostUrl !== null ? output.HostUrl : undefined,
    KnowledgeArticleConfiguration:
      output.KnowledgeArticleConfiguration !== undefined && output.KnowledgeArticleConfiguration !== null
        ? deserializeAws_json1_1ServiceNowKnowledgeArticleConfiguration(output.KnowledgeArticleConfiguration, context)
        : undefined,
    SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
    ServiceCatalogConfiguration:
      output.ServiceCatalogConfiguration !== undefined && output.ServiceCatalogConfiguration !== null
        ? deserializeAws_json1_1ServiceNowServiceCatalogConfiguration(output.ServiceCatalogConfiguration, context)
        : undefined,
    ServiceNowBuildVersion:
      output.ServiceNowBuildVersion !== undefined && output.ServiceNowBuildVersion !== null
        ? output.ServiceNowBuildVersion
        : undefined,
  } as any;
};

const deserializeAws_json1_1ServiceNowKnowledgeArticleConfiguration = (
  output: any,
  context: __SerdeContext
): ServiceNowKnowledgeArticleConfiguration => {
  return {
    CrawlAttachments:
      output.CrawlAttachments !== undefined && output.CrawlAttachments !== null ? output.CrawlAttachments : undefined,
    DocumentDataFieldName:
      output.DocumentDataFieldName !== undefined && output.DocumentDataFieldName !== null
        ? output.DocumentDataFieldName
        : undefined,
    DocumentTitleFieldName:
      output.DocumentTitleFieldName !== undefined && output.DocumentTitleFieldName !== null
        ? output.DocumentTitleFieldName
        : undefined,
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

const deserializeAws_json1_1ServiceNowServiceCatalogConfiguration = (
  output: any,
  context: __SerdeContext
): ServiceNowServiceCatalogConfiguration => {
  return {
    CrawlAttachments:
      output.CrawlAttachments !== undefined && output.CrawlAttachments !== null ? output.CrawlAttachments : undefined,
    DocumentDataFieldName:
      output.DocumentDataFieldName !== undefined && output.DocumentDataFieldName !== null
        ? output.DocumentDataFieldName
        : undefined,
    DocumentTitleFieldName:
      output.DocumentTitleFieldName !== undefined && output.DocumentTitleFieldName !== null
        ? output.DocumentTitleFieldName
        : undefined,
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
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1SharePointConfiguration = (
  output: any,
  context: __SerdeContext
): SharePointConfiguration => {
  return {
    CrawlAttachments:
      output.CrawlAttachments !== undefined && output.CrawlAttachments !== null ? output.CrawlAttachments : undefined,
    DisableLocalGroups:
      output.DisableLocalGroups !== undefined && output.DisableLocalGroups !== null
        ? output.DisableLocalGroups
        : undefined,
    DocumentTitleFieldName:
      output.DocumentTitleFieldName !== undefined && output.DocumentTitleFieldName !== null
        ? output.DocumentTitleFieldName
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
    SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
    SharePointVersion:
      output.SharePointVersion !== undefined && output.SharePointVersion !== null
        ? output.SharePointVersion
        : undefined,
    Urls:
      output.Urls !== undefined && output.Urls !== null
        ? deserializeAws_json1_1SharePointUrlList(output.Urls, context)
        : undefined,
    UseChangeLog: output.UseChangeLog !== undefined && output.UseChangeLog !== null ? output.UseChangeLog : undefined,
    VpcConfiguration:
      output.VpcConfiguration !== undefined && output.VpcConfiguration !== null
        ? deserializeAws_json1_1DataSourceVpcConfiguration(output.VpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SharePointUrlList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1SqlConfiguration = (output: any, context: __SerdeContext): SqlConfiguration => {
  return {
    QueryIdentifiersEnclosingOption:
      output.QueryIdentifiersEnclosingOption !== undefined && output.QueryIdentifiersEnclosingOption !== null
        ? output.QueryIdentifiersEnclosingOption
        : undefined,
  } as any;
};

const deserializeAws_json1_1StartDataSourceSyncJobResponse = (
  output: any,
  context: __SerdeContext
): StartDataSourceSyncJobResponse => {
  return {
    ExecutionId: output.ExecutionId !== undefined && output.ExecutionId !== null ? output.ExecutionId : undefined,
  } as any;
};

const deserializeAws_json1_1SubnetIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Tag(entry, context));
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TextDocumentStatistics = (output: any, context: __SerdeContext): TextDocumentStatistics => {
  return {
    IndexedTextBytes:
      output.IndexedTextBytes !== undefined && output.IndexedTextBytes !== null ? output.IndexedTextBytes : undefined,
    IndexedTextDocumentsCount:
      output.IndexedTextDocumentsCount !== undefined && output.IndexedTextDocumentsCount !== null
        ? output.IndexedTextDocumentsCount
        : undefined,
  } as any;
};

const deserializeAws_json1_1TextWithHighlights = (output: any, context: __SerdeContext): TextWithHighlights => {
  return {
    Highlights:
      output.Highlights !== undefined && output.Highlights !== null
        ? deserializeAws_json1_1HighlightList(output.Highlights, context)
        : undefined,
    Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
  } as any;
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
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
  return (output || []).map((entry: any) => deserializeAws_json1_1UserTokenConfiguration(entry, context));
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ValueImportanceMap = (output: any, context: __SerdeContext): { [key: string]: number } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: number }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
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
