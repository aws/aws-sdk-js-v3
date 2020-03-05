import {
  BatchDeleteDocumentCommandInput,
  BatchDeleteDocumentCommandOutput
} from "../commands/BatchDeleteDocumentCommand";
import {
  BatchPutDocumentCommandInput,
  BatchPutDocumentCommandOutput
} from "../commands/BatchPutDocumentCommand";
import {
  CreateDataSourceCommandInput,
  CreateDataSourceCommandOutput
} from "../commands/CreateDataSourceCommand";
import {
  CreateFaqCommandInput,
  CreateFaqCommandOutput
} from "../commands/CreateFaqCommand";
import {
  CreateIndexCommandInput,
  CreateIndexCommandOutput
} from "../commands/CreateIndexCommand";
import {
  DeleteFaqCommandInput,
  DeleteFaqCommandOutput
} from "../commands/DeleteFaqCommand";
import {
  DeleteIndexCommandInput,
  DeleteIndexCommandOutput
} from "../commands/DeleteIndexCommand";
import {
  DescribeDataSourceCommandInput,
  DescribeDataSourceCommandOutput
} from "../commands/DescribeDataSourceCommand";
import {
  DescribeFaqCommandInput,
  DescribeFaqCommandOutput
} from "../commands/DescribeFaqCommand";
import {
  DescribeIndexCommandInput,
  DescribeIndexCommandOutput
} from "../commands/DescribeIndexCommand";
import {
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput
} from "../commands/ListDataSourceSyncJobsCommand";
import {
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput
} from "../commands/ListDataSourcesCommand";
import {
  ListFaqsCommandInput,
  ListFaqsCommandOutput
} from "../commands/ListFaqsCommand";
import {
  ListIndicesCommandInput,
  ListIndicesCommandOutput
} from "../commands/ListIndicesCommand";
import {
  QueryCommandInput,
  QueryCommandOutput
} from "../commands/QueryCommand";
import {
  StartDataSourceSyncJobCommandInput,
  StartDataSourceSyncJobCommandOutput
} from "../commands/StartDataSourceSyncJobCommand";
import {
  StopDataSourceSyncJobCommandInput,
  StopDataSourceSyncJobCommandOutput
} from "../commands/StopDataSourceSyncJobCommand";
import {
  SubmitFeedbackCommandInput,
  SubmitFeedbackCommandOutput
} from "../commands/SubmitFeedbackCommand";
import {
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput
} from "../commands/UpdateDataSourceCommand";
import {
  UpdateIndexCommandInput,
  UpdateIndexCommandOutput
} from "../commands/UpdateIndexCommand";
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
  ClickFeedback,
  ColumnConfiguration,
  ConflictException,
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
  DataSourceToIndexFieldMapping,
  DataSourceVpcConfiguration,
  DatabaseConfiguration,
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
  ListDataSourceSyncJobsRequest,
  ListDataSourceSyncJobsResponse,
  ListDataSourcesRequest,
  ListDataSourcesResponse,
  ListFaqsRequest,
  ListFaqsResponse,
  ListIndicesRequest,
  ListIndicesResponse,
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
  Search,
  ServerSideEncryptionConfiguration,
  ServiceQuotaExceededException,
  SharePointConfiguration,
  StartDataSourceSyncJobRequest,
  StartDataSourceSyncJobResponse,
  StopDataSourceSyncJobRequest,
  SubmitFeedbackRequest,
  TextDocumentStatistics,
  TextWithHighlights,
  ThrottlingException,
  TimeRange,
  UpdateDataSourceRequest,
  UpdateIndexRequest,
  ValidationException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1BatchDeleteDocumentCommand(
  input: BatchDeleteDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSKendraFrontendService.BatchDeleteDocument";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchDeleteDocumentRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1BatchPutDocumentCommand(
  input: BatchPutDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSKendraFrontendService.BatchPutDocument";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchPutDocumentRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateDataSourceCommand(
  input: CreateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSKendraFrontendService.CreateDataSource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDataSourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateFaqCommand(
  input: CreateFaqCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSKendraFrontendService.CreateFaq";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateFaqRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateIndexCommand(
  input: CreateIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSKendraFrontendService.CreateIndex";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateIndexRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteFaqCommand(
  input: DeleteFaqCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSKendraFrontendService.DeleteFaq";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteFaqRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteIndexCommand(
  input: DeleteIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSKendraFrontendService.DeleteIndex";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteIndexRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeDataSourceCommand(
  input: DescribeDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSKendraFrontendService.DescribeDataSource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDataSourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeFaqCommand(
  input: DescribeFaqCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSKendraFrontendService.DescribeFaq";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFaqRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeIndexCommand(
  input: DescribeIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSKendraFrontendService.DescribeIndex";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeIndexRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListDataSourceSyncJobsCommand(
  input: ListDataSourceSyncJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSKendraFrontendService.ListDataSourceSyncJobs";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDataSourceSyncJobsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListDataSourcesCommand(
  input: ListDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSKendraFrontendService.ListDataSources";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDataSourcesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListFaqsCommand(
  input: ListFaqsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSKendraFrontendService.ListFaqs";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListFaqsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListIndicesCommand(
  input: ListIndicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSKendraFrontendService.ListIndices";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListIndicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1QueryCommand(
  input: QueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSKendraFrontendService.Query";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1QueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartDataSourceSyncJobCommand(
  input: StartDataSourceSyncJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSKendraFrontendService.StartDataSourceSyncJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartDataSourceSyncJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopDataSourceSyncJobCommand(
  input: StopDataSourceSyncJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSKendraFrontendService.StopDataSourceSyncJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopDataSourceSyncJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SubmitFeedbackCommand(
  input: SubmitFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSKendraFrontendService.SubmitFeedback";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1SubmitFeedbackRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateDataSourceCommand(
  input: UpdateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSKendraFrontendService.UpdateDataSource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDataSourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateIndexCommand(
  input: UpdateIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSKendraFrontendService.UpdateIndex";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateIndexRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1BatchDeleteDocumentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteDocumentCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchDeleteDocumentCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchDeleteDocumentResponse(data, context);
  const response: BatchDeleteDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchDeleteDocumentResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1BatchDeleteDocumentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteDocumentCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1BatchPutDocumentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutDocumentCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchPutDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchPutDocumentResponse(data, context);
  const response: BatchPutDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchPutDocumentResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1BatchPutDocumentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutDocumentCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1CreateDataSourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDataSourceResponse(data, context);
  const response: CreateDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDataSourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateDataSourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistException":
    case "com.amazonaws.kendra#ResourceAlreadyExistException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1CreateFaqCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFaqCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateFaqCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateFaqResponse(data, context);
  const response: CreateFaqCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateFaqResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateFaqCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFaqCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1CreateIndexCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIndexCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateIndexCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateIndexResponse(data, context);
  const response: CreateIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateIndexResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateIndexCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIndexCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistException":
    case "com.amazonaws.kendra#ResourceAlreadyExistException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.kendra#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeleteFaqCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFaqCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteFaqCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteFaqCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteFaqCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFaqCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DeleteIndexCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIndexCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteIndexCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteIndexCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteIndexCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIndexCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeDataSourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDataSourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDataSourceResponse(data, context);
  const response: DescribeDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDataSourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeDataSourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeFaqCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFaqCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeFaqCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFaqResponse(data, context);
  const response: DescribeFaqCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeFaqResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeFaqCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFaqCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1DescribeIndexCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIndexCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeIndexCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeIndexResponse(data, context);
  const response: DescribeIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeIndexResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeIndexCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIndexCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ListDataSourceSyncJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourceSyncJobsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDataSourceSyncJobsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDataSourceSyncJobsResponse(
    data,
    context
  );
  const response: ListDataSourceSyncJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDataSourceSyncJobsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListDataSourceSyncJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourceSyncJobsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ListDataSourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDataSourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDataSourcesResponse(data, context);
  const response: ListDataSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDataSourcesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListDataSourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ListFaqsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFaqsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListFaqsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListFaqsResponse(data, context);
  const response: ListFaqsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFaqsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListFaqsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFaqsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1ListIndicesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIndicesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListIndicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListIndicesResponse(data, context);
  const response: ListIndicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListIndicesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListIndicesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIndicesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1QueryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1QueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1QueryResult(data, context);
  const response: QueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "QueryResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1QueryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1StartDataSourceSyncJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataSourceSyncJobCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartDataSourceSyncJobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDataSourceSyncJobResponse(
    data,
    context
  );
  const response: StartDataSourceSyncJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartDataSourceSyncJobResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartDataSourceSyncJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataSourceSyncJobCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kendra#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1StopDataSourceSyncJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDataSourceSyncJobCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopDataSourceSyncJobCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: StopDataSourceSyncJobCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopDataSourceSyncJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDataSourceSyncJobCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1SubmitFeedbackCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitFeedbackCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SubmitFeedbackCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SubmitFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SubmitFeedbackCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitFeedbackCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.kendra#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1UpdateDataSourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDataSourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateDataSourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_json1_1UpdateIndexCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIndexCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateIndexCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateIndexCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateIndexCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIndexCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.kendra#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kendra#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.kendra#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kendra#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.kendra#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.kendra#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(
    body,
    context
  );
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(
    body,
    context
  );
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(
    body,
    context
  );
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistException(
    body,
    context
  );
  const contents: ResourceAlreadyExistException = {
    name: "ResourceAlreadyExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(
    body,
    context
  );
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceUnavailableException(
    body,
    context
  );
  const contents: ResourceUnavailableException = {
    name: "ResourceUnavailableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceQuotaExceededException(
    body,
    context
  );
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(
    body,
    context
  );
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(
    body,
    context
  );
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AccessControlListConfiguration = (
  input: AccessControlListConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyPath !== undefined) {
    bodyParams["KeyPath"] = input.KeyPath;
  }
  return bodyParams;
};

const serializeAws_json1_1AclConfiguration = (
  input: AclConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AllowedGroupsColumnName !== undefined) {
    bodyParams["AllowedGroupsColumnName"] = input.AllowedGroupsColumnName;
  }
  return bodyParams;
};

const serializeAws_json1_1AttributeFilter = (
  input: AttributeFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AndAllFilters !== undefined) {
    bodyParams["AndAllFilters"] = serializeAws_json1_1AttributeFilterList(
      input.AndAllFilters,
      context
    );
  }
  if (input.ContainsAll !== undefined) {
    bodyParams["ContainsAll"] = serializeAws_json1_1DocumentAttribute(
      input.ContainsAll,
      context
    );
  }
  if (input.ContainsAny !== undefined) {
    bodyParams["ContainsAny"] = serializeAws_json1_1DocumentAttribute(
      input.ContainsAny,
      context
    );
  }
  if (input.EqualsTo !== undefined) {
    bodyParams["EqualsTo"] = serializeAws_json1_1DocumentAttribute(
      input.EqualsTo,
      context
    );
  }
  if (input.GreaterThan !== undefined) {
    bodyParams["GreaterThan"] = serializeAws_json1_1DocumentAttribute(
      input.GreaterThan,
      context
    );
  }
  if (input.GreaterThanOrEquals !== undefined) {
    bodyParams["GreaterThanOrEquals"] = serializeAws_json1_1DocumentAttribute(
      input.GreaterThanOrEquals,
      context
    );
  }
  if (input.LessThan !== undefined) {
    bodyParams["LessThan"] = serializeAws_json1_1DocumentAttribute(
      input.LessThan,
      context
    );
  }
  if (input.LessThanOrEquals !== undefined) {
    bodyParams["LessThanOrEquals"] = serializeAws_json1_1DocumentAttribute(
      input.LessThanOrEquals,
      context
    );
  }
  if (input.NotFilter !== undefined) {
    bodyParams["NotFilter"] = serializeAws_json1_1AttributeFilter(
      input.NotFilter,
      context
    );
  }
  if (input.OrAllFilters !== undefined) {
    bodyParams["OrAllFilters"] = serializeAws_json1_1AttributeFilterList(
      input.OrAllFilters,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1AttributeFilterList = (
  input: Array<AttributeFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1AttributeFilter(entry, context));
  }
  return contents;
};

const serializeAws_json1_1BatchDeleteDocumentRequest = (
  input: BatchDeleteDocumentRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DocumentIdList !== undefined) {
    bodyParams["DocumentIdList"] = serializeAws_json1_1DocumentIdList(
      input.DocumentIdList,
      context
    );
  }
  if (input.IndexId !== undefined) {
    bodyParams["IndexId"] = input.IndexId;
  }
  return bodyParams;
};

const serializeAws_json1_1BatchPutDocumentRequest = (
  input: BatchPutDocumentRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Documents !== undefined) {
    bodyParams["Documents"] = serializeAws_json1_1DocumentList(
      input.Documents,
      context
    );
  }
  if (input.IndexId !== undefined) {
    bodyParams["IndexId"] = input.IndexId;
  }
  if (input.RoleArn !== undefined) {
    bodyParams["RoleArn"] = input.RoleArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ChangeDetectingColumns = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ClickFeedback = (
  input: ClickFeedback,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClickTime !== undefined) {
    bodyParams["ClickTime"] = Math.round(input.ClickTime.getTime() / 1000);
  }
  if (input.ResultId !== undefined) {
    bodyParams["ResultId"] = input.ResultId;
  }
  return bodyParams;
};

const serializeAws_json1_1ClickFeedbackList = (
  input: Array<ClickFeedback>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ClickFeedback(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ColumnConfiguration = (
  input: ColumnConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ChangeDetectingColumns !== undefined) {
    bodyParams[
      "ChangeDetectingColumns"
    ] = serializeAws_json1_1ChangeDetectingColumns(
      input.ChangeDetectingColumns,
      context
    );
  }
  if (input.DocumentDataColumnName !== undefined) {
    bodyParams["DocumentDataColumnName"] = input.DocumentDataColumnName;
  }
  if (input.DocumentIdColumnName !== undefined) {
    bodyParams["DocumentIdColumnName"] = input.DocumentIdColumnName;
  }
  if (input.DocumentTitleColumnName !== undefined) {
    bodyParams["DocumentTitleColumnName"] = input.DocumentTitleColumnName;
  }
  if (input.FieldMappings !== undefined) {
    bodyParams[
      "FieldMappings"
    ] = serializeAws_json1_1DataSourceToIndexFieldMappingList(
      input.FieldMappings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ConnectionConfiguration = (
  input: ConnectionConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DatabaseHost !== undefined) {
    bodyParams["DatabaseHost"] = input.DatabaseHost;
  }
  if (input.DatabaseName !== undefined) {
    bodyParams["DatabaseName"] = input.DatabaseName;
  }
  if (input.DatabasePort !== undefined) {
    bodyParams["DatabasePort"] = input.DatabasePort;
  }
  if (input.SecretArn !== undefined) {
    bodyParams["SecretArn"] = input.SecretArn;
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDataSourceRequest = (
  input: CreateDataSourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Configuration !== undefined) {
    bodyParams["Configuration"] = serializeAws_json1_1DataSourceConfiguration(
      input.Configuration,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.IndexId !== undefined) {
    bodyParams["IndexId"] = input.IndexId;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.RoleArn !== undefined) {
    bodyParams["RoleArn"] = input.RoleArn;
  }
  if (input.Schedule !== undefined) {
    bodyParams["Schedule"] = input.Schedule;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateFaqRequest = (
  input: CreateFaqRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.IndexId !== undefined) {
    bodyParams["IndexId"] = input.IndexId;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.RoleArn !== undefined) {
    bodyParams["RoleArn"] = input.RoleArn;
  }
  if (input.S3Path !== undefined) {
    bodyParams["S3Path"] = serializeAws_json1_1S3Path(input.S3Path, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateIndexRequest = (
  input: CreateIndexRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.RoleArn !== undefined) {
    bodyParams["RoleArn"] = input.RoleArn;
  }
  if (input.ServerSideEncryptionConfiguration !== undefined) {
    bodyParams[
      "ServerSideEncryptionConfiguration"
    ] = serializeAws_json1_1ServerSideEncryptionConfiguration(
      input.ServerSideEncryptionConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DataSourceConfiguration = (
  input: DataSourceConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DatabaseConfiguration !== undefined) {
    bodyParams[
      "DatabaseConfiguration"
    ] = serializeAws_json1_1DatabaseConfiguration(
      input.DatabaseConfiguration,
      context
    );
  }
  if (input.S3Configuration !== undefined) {
    bodyParams[
      "S3Configuration"
    ] = serializeAws_json1_1S3DataSourceConfiguration(
      input.S3Configuration,
      context
    );
  }
  if (input.SharePointConfiguration !== undefined) {
    bodyParams[
      "SharePointConfiguration"
    ] = serializeAws_json1_1SharePointConfiguration(
      input.SharePointConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DataSourceInclusionsExclusionsStrings = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1DataSourceToIndexFieldMapping = (
  input: DataSourceToIndexFieldMapping,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DataSourceFieldName !== undefined) {
    bodyParams["DataSourceFieldName"] = input.DataSourceFieldName;
  }
  if (input.DateFieldFormat !== undefined) {
    bodyParams["DateFieldFormat"] = input.DateFieldFormat;
  }
  if (input.IndexFieldName !== undefined) {
    bodyParams["IndexFieldName"] = input.IndexFieldName;
  }
  return bodyParams;
};

const serializeAws_json1_1DataSourceToIndexFieldMappingList = (
  input: Array<DataSourceToIndexFieldMapping>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_json1_1DataSourceToIndexFieldMapping(entry, context)
    );
  }
  return contents;
};

const serializeAws_json1_1DataSourceVpcConfiguration = (
  input: DataSourceVpcConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SecurityGroupIds !== undefined) {
    bodyParams["SecurityGroupIds"] = serializeAws_json1_1SecurityGroupIdList(
      input.SecurityGroupIds,
      context
    );
  }
  if (input.SubnetIds !== undefined) {
    bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIdList(
      input.SubnetIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DatabaseConfiguration = (
  input: DatabaseConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AclConfiguration !== undefined) {
    bodyParams["AclConfiguration"] = serializeAws_json1_1AclConfiguration(
      input.AclConfiguration,
      context
    );
  }
  if (input.ColumnConfiguration !== undefined) {
    bodyParams["ColumnConfiguration"] = serializeAws_json1_1ColumnConfiguration(
      input.ColumnConfiguration,
      context
    );
  }
  if (input.ConnectionConfiguration !== undefined) {
    bodyParams[
      "ConnectionConfiguration"
    ] = serializeAws_json1_1ConnectionConfiguration(
      input.ConnectionConfiguration,
      context
    );
  }
  if (input.DatabaseEngineType !== undefined) {
    bodyParams["DatabaseEngineType"] = input.DatabaseEngineType;
  }
  if (input.VpcConfiguration !== undefined) {
    bodyParams[
      "VpcConfiguration"
    ] = serializeAws_json1_1DataSourceVpcConfiguration(
      input.VpcConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteFaqRequest = (
  input: DeleteFaqRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.IndexId !== undefined) {
    bodyParams["IndexId"] = input.IndexId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteIndexRequest = (
  input: DeleteIndexRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeDataSourceRequest = (
  input: DescribeDataSourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.IndexId !== undefined) {
    bodyParams["IndexId"] = input.IndexId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeFaqRequest = (
  input: DescribeFaqRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.IndexId !== undefined) {
    bodyParams["IndexId"] = input.IndexId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeIndexRequest = (
  input: DescribeIndexRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  return bodyParams;
};

const serializeAws_json1_1Document = (
  input: Document,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AccessControlList !== undefined) {
    bodyParams["AccessControlList"] = serializeAws_json1_1PrincipalList(
      input.AccessControlList,
      context
    );
  }
  if (input.Attributes !== undefined) {
    bodyParams["Attributes"] = serializeAws_json1_1DocumentAttributeList(
      input.Attributes,
      context
    );
  }
  if (input.Blob !== undefined) {
    bodyParams["Blob"] = context.base64Encoder(input.Blob);
  }
  if (input.ContentType !== undefined) {
    bodyParams["ContentType"] = input.ContentType;
  }
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.S3Path !== undefined) {
    bodyParams["S3Path"] = serializeAws_json1_1S3Path(input.S3Path, context);
  }
  if (input.Title !== undefined) {
    bodyParams["Title"] = input.Title;
  }
  return bodyParams;
};

const serializeAws_json1_1DocumentAttribute = (
  input: DocumentAttribute,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = serializeAws_json1_1DocumentAttributeValue(
      input.Value,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DocumentAttributeKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1DocumentAttributeList = (
  input: Array<DocumentAttribute>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1DocumentAttribute(entry, context));
  }
  return contents;
};

const serializeAws_json1_1DocumentAttributeStringListValue = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1DocumentAttributeValue = (
  input: DocumentAttributeValue,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DateValue !== undefined) {
    bodyParams["DateValue"] = Math.round(input.DateValue.getTime() / 1000);
  }
  if (input.LongValue !== undefined) {
    bodyParams["LongValue"] = input.LongValue;
  }
  if (input.StringListValue !== undefined) {
    bodyParams[
      "StringListValue"
    ] = serializeAws_json1_1DocumentAttributeStringListValue(
      input.StringListValue,
      context
    );
  }
  if (input.StringValue !== undefined) {
    bodyParams["StringValue"] = input.StringValue;
  }
  return bodyParams;
};

const serializeAws_json1_1DocumentIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1DocumentList = (
  input: Array<Document>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Document(entry, context));
  }
  return contents;
};

const serializeAws_json1_1DocumentMetadataConfiguration = (
  input: DocumentMetadataConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Relevance !== undefined) {
    bodyParams["Relevance"] = serializeAws_json1_1Relevance(
      input.Relevance,
      context
    );
  }
  if (input.Search !== undefined) {
    bodyParams["Search"] = serializeAws_json1_1Search(input.Search, context);
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_json1_1DocumentMetadataConfigurationList = (
  input: Array<DocumentMetadataConfiguration>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_json1_1DocumentMetadataConfiguration(entry, context)
    );
  }
  return contents;
};

const serializeAws_json1_1DocumentsMetadataConfiguration = (
  input: DocumentsMetadataConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.S3Prefix !== undefined) {
    bodyParams["S3Prefix"] = input.S3Prefix;
  }
  return bodyParams;
};

const serializeAws_json1_1Facet = (
  input: Facet,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DocumentAttributeKey !== undefined) {
    bodyParams["DocumentAttributeKey"] = input.DocumentAttributeKey;
  }
  return bodyParams;
};

const serializeAws_json1_1FacetList = (
  input: Array<Facet>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Facet(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ListDataSourceSyncJobsRequest = (
  input: ListDataSourceSyncJobsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.IndexId !== undefined) {
    bodyParams["IndexId"] = input.IndexId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.StartTimeFilter !== undefined) {
    bodyParams["StartTimeFilter"] = serializeAws_json1_1TimeRange(
      input.StartTimeFilter,
      context
    );
  }
  if (input.StatusFilter !== undefined) {
    bodyParams["StatusFilter"] = input.StatusFilter;
  }
  return bodyParams;
};

const serializeAws_json1_1ListDataSourcesRequest = (
  input: ListDataSourcesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.IndexId !== undefined) {
    bodyParams["IndexId"] = input.IndexId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListFaqsRequest = (
  input: ListFaqsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.IndexId !== undefined) {
    bodyParams["IndexId"] = input.IndexId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListIndicesRequest = (
  input: ListIndicesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1Principal = (
  input: Principal,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Access !== undefined) {
    bodyParams["Access"] = input.Access;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_json1_1PrincipalList = (
  input: Array<Principal>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Principal(entry, context));
  }
  return contents;
};

const serializeAws_json1_1QueryRequest = (
  input: QueryRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AttributeFilter !== undefined) {
    bodyParams["AttributeFilter"] = serializeAws_json1_1AttributeFilter(
      input.AttributeFilter,
      context
    );
  }
  if (input.Facets !== undefined) {
    bodyParams["Facets"] = serializeAws_json1_1FacetList(input.Facets, context);
  }
  if (input.IndexId !== undefined) {
    bodyParams["IndexId"] = input.IndexId;
  }
  if (input.PageNumber !== undefined) {
    bodyParams["PageNumber"] = input.PageNumber;
  }
  if (input.PageSize !== undefined) {
    bodyParams["PageSize"] = input.PageSize;
  }
  if (input.QueryResultTypeFilter !== undefined) {
    bodyParams["QueryResultTypeFilter"] = input.QueryResultTypeFilter;
  }
  if (input.QueryText !== undefined) {
    bodyParams["QueryText"] = input.QueryText;
  }
  if (input.RequestedDocumentAttributes !== undefined) {
    bodyParams[
      "RequestedDocumentAttributes"
    ] = serializeAws_json1_1DocumentAttributeKeyList(
      input.RequestedDocumentAttributes,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1Relevance = (
  input: Relevance,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Duration !== undefined) {
    bodyParams["Duration"] = input.Duration;
  }
  if (input.Freshness !== undefined) {
    bodyParams["Freshness"] = input.Freshness;
  }
  if (input.Importance !== undefined) {
    bodyParams["Importance"] = input.Importance;
  }
  if (input.RankOrder !== undefined) {
    bodyParams["RankOrder"] = input.RankOrder;
  }
  if (input.ValueImportanceMap !== undefined) {
    bodyParams["ValueImportanceMap"] = serializeAws_json1_1ValueImportanceMap(
      input.ValueImportanceMap,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RelevanceFeedback = (
  input: RelevanceFeedback,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.RelevanceValue !== undefined) {
    bodyParams["RelevanceValue"] = input.RelevanceValue;
  }
  if (input.ResultId !== undefined) {
    bodyParams["ResultId"] = input.ResultId;
  }
  return bodyParams;
};

const serializeAws_json1_1RelevanceFeedbackList = (
  input: Array<RelevanceFeedback>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1RelevanceFeedback(entry, context));
  }
  return contents;
};

const serializeAws_json1_1S3DataSourceConfiguration = (
  input: S3DataSourceConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AccessControlListConfiguration !== undefined) {
    bodyParams[
      "AccessControlListConfiguration"
    ] = serializeAws_json1_1AccessControlListConfiguration(
      input.AccessControlListConfiguration,
      context
    );
  }
  if (input.BucketName !== undefined) {
    bodyParams["BucketName"] = input.BucketName;
  }
  if (input.DocumentsMetadataConfiguration !== undefined) {
    bodyParams[
      "DocumentsMetadataConfiguration"
    ] = serializeAws_json1_1DocumentsMetadataConfiguration(
      input.DocumentsMetadataConfiguration,
      context
    );
  }
  if (input.ExclusionPatterns !== undefined) {
    bodyParams[
      "ExclusionPatterns"
    ] = serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
      input.ExclusionPatterns,
      context
    );
  }
  if (input.InclusionPrefixes !== undefined) {
    bodyParams[
      "InclusionPrefixes"
    ] = serializeAws_json1_1DataSourceInclusionsExclusionsStrings(
      input.InclusionPrefixes,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1S3Path = (
  input: S3Path,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Bucket !== undefined) {
    bodyParams["Bucket"] = input.Bucket;
  }
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  return bodyParams;
};

const serializeAws_json1_1Search = (
  input: Search,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Displayable !== undefined) {
    bodyParams["Displayable"] = input.Displayable;
  }
  if (input.Facetable !== undefined) {
    bodyParams["Facetable"] = input.Facetable;
  }
  if (input.Searchable !== undefined) {
    bodyParams["Searchable"] = input.Searchable;
  }
  return bodyParams;
};

const serializeAws_json1_1SecurityGroupIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ServerSideEncryptionConfiguration = (
  input: ServerSideEncryptionConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KmsKeyId !== undefined) {
    bodyParams["KmsKeyId"] = input.KmsKeyId;
  }
  return bodyParams;
};

const serializeAws_json1_1SharePointConfiguration = (
  input: SharePointConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CrawlAttachments !== undefined) {
    bodyParams["CrawlAttachments"] = input.CrawlAttachments;
  }
  if (input.DocumentTitleFieldName !== undefined) {
    bodyParams["DocumentTitleFieldName"] = input.DocumentTitleFieldName;
  }
  if (input.FieldMappings !== undefined) {
    bodyParams[
      "FieldMappings"
    ] = serializeAws_json1_1DataSourceToIndexFieldMappingList(
      input.FieldMappings,
      context
    );
  }
  if (input.SecretArn !== undefined) {
    bodyParams["SecretArn"] = input.SecretArn;
  }
  if (input.SharePointVersion !== undefined) {
    bodyParams["SharePointVersion"] = input.SharePointVersion;
  }
  if (input.Urls !== undefined) {
    bodyParams["Urls"] = serializeAws_json1_1SharePointUrlList(
      input.Urls,
      context
    );
  }
  if (input.VpcConfiguration !== undefined) {
    bodyParams[
      "VpcConfiguration"
    ] = serializeAws_json1_1DataSourceVpcConfiguration(
      input.VpcConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SharePointUrlList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1StartDataSourceSyncJobRequest = (
  input: StartDataSourceSyncJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.IndexId !== undefined) {
    bodyParams["IndexId"] = input.IndexId;
  }
  return bodyParams;
};

const serializeAws_json1_1StopDataSourceSyncJobRequest = (
  input: StopDataSourceSyncJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.IndexId !== undefined) {
    bodyParams["IndexId"] = input.IndexId;
  }
  return bodyParams;
};

const serializeAws_json1_1SubmitFeedbackRequest = (
  input: SubmitFeedbackRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClickFeedbackItems !== undefined) {
    bodyParams["ClickFeedbackItems"] = serializeAws_json1_1ClickFeedbackList(
      input.ClickFeedbackItems,
      context
    );
  }
  if (input.IndexId !== undefined) {
    bodyParams["IndexId"] = input.IndexId;
  }
  if (input.QueryId !== undefined) {
    bodyParams["QueryId"] = input.QueryId;
  }
  if (input.RelevanceFeedbackItems !== undefined) {
    bodyParams[
      "RelevanceFeedbackItems"
    ] = serializeAws_json1_1RelevanceFeedbackList(
      input.RelevanceFeedbackItems,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SubnetIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TimeRange = (
  input: TimeRange,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EndTime !== undefined) {
    bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
  }
  if (input.StartTime !== undefined) {
    bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateDataSourceRequest = (
  input: UpdateDataSourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Configuration !== undefined) {
    bodyParams["Configuration"] = serializeAws_json1_1DataSourceConfiguration(
      input.Configuration,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.IndexId !== undefined) {
    bodyParams["IndexId"] = input.IndexId;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.RoleArn !== undefined) {
    bodyParams["RoleArn"] = input.RoleArn;
  }
  if (input.Schedule !== undefined) {
    bodyParams["Schedule"] = input.Schedule;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateIndexRequest = (
  input: UpdateIndexRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.DocumentMetadataConfigurationUpdates !== undefined) {
    bodyParams[
      "DocumentMetadataConfigurationUpdates"
    ] = serializeAws_json1_1DocumentMetadataConfigurationList(
      input.DocumentMetadataConfigurationUpdates,
      context
    );
  }
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.RoleArn !== undefined) {
    bodyParams["RoleArn"] = input.RoleArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ValueImportanceMap = (
  input: { [key: string]: number },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const deserializeAws_json1_1AccessControlListConfiguration = (
  output: any,
  context: __SerdeContext
): AccessControlListConfiguration => {
  let contents: any = {
    __type: "AccessControlListConfiguration",
    KeyPath: undefined
  };
  if (output.KeyPath !== undefined && output.KeyPath !== null) {
    contents.KeyPath = output.KeyPath;
  }
  return contents;
};

const deserializeAws_json1_1AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  let contents: any = {
    __type: "AccessDeniedException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1AclConfiguration = (
  output: any,
  context: __SerdeContext
): AclConfiguration => {
  let contents: any = {
    __type: "AclConfiguration",
    AllowedGroupsColumnName: undefined
  };
  if (
    output.AllowedGroupsColumnName !== undefined &&
    output.AllowedGroupsColumnName !== null
  ) {
    contents.AllowedGroupsColumnName = output.AllowedGroupsColumnName;
  }
  return contents;
};

const deserializeAws_json1_1AdditionalResultAttribute = (
  output: any,
  context: __SerdeContext
): AdditionalResultAttribute => {
  let contents: any = {
    __type: "AdditionalResultAttribute",
    Key: undefined,
    Value: undefined,
    ValueType: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = deserializeAws_json1_1AdditionalResultAttributeValue(
      output.Value,
      context
    );
  }
  if (output.ValueType !== undefined && output.ValueType !== null) {
    contents.ValueType = output.ValueType;
  }
  return contents;
};

const deserializeAws_json1_1AdditionalResultAttributeList = (
  output: any,
  context: __SerdeContext
): Array<AdditionalResultAttribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AdditionalResultAttribute(entry, context)
  );
};

const deserializeAws_json1_1AdditionalResultAttributeValue = (
  output: any,
  context: __SerdeContext
): AdditionalResultAttributeValue => {
  let contents: any = {
    __type: "AdditionalResultAttributeValue",
    TextWithHighlightsValue: undefined
  };
  if (
    output.TextWithHighlightsValue !== undefined &&
    output.TextWithHighlightsValue !== null
  ) {
    contents.TextWithHighlightsValue = deserializeAws_json1_1TextWithHighlights(
      output.TextWithHighlightsValue,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchDeleteDocumentResponse = (
  output: any,
  context: __SerdeContext
): BatchDeleteDocumentResponse => {
  let contents: any = {
    __type: "BatchDeleteDocumentResponse",
    FailedDocuments: undefined
  };
  if (output.FailedDocuments !== undefined && output.FailedDocuments !== null) {
    contents.FailedDocuments = deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocuments(
      output.FailedDocuments,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocument = (
  output: any,
  context: __SerdeContext
): BatchDeleteDocumentResponseFailedDocument => {
  let contents: any = {
    __type: "BatchDeleteDocumentResponseFailedDocument",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    Id: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  return contents;
};

const deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocuments = (
  output: any,
  context: __SerdeContext
): Array<BatchDeleteDocumentResponseFailedDocument> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BatchDeleteDocumentResponseFailedDocument(
      entry,
      context
    )
  );
};

const deserializeAws_json1_1BatchPutDocumentResponse = (
  output: any,
  context: __SerdeContext
): BatchPutDocumentResponse => {
  let contents: any = {
    __type: "BatchPutDocumentResponse",
    FailedDocuments: undefined
  };
  if (output.FailedDocuments !== undefined && output.FailedDocuments !== null) {
    contents.FailedDocuments = deserializeAws_json1_1BatchPutDocumentResponseFailedDocuments(
      output.FailedDocuments,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchPutDocumentResponseFailedDocument = (
  output: any,
  context: __SerdeContext
): BatchPutDocumentResponseFailedDocument => {
  let contents: any = {
    __type: "BatchPutDocumentResponseFailedDocument",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    Id: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  return contents;
};

const deserializeAws_json1_1BatchPutDocumentResponseFailedDocuments = (
  output: any,
  context: __SerdeContext
): Array<BatchPutDocumentResponseFailedDocument> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BatchPutDocumentResponseFailedDocument(entry, context)
  );
};

const deserializeAws_json1_1ChangeDetectingColumns = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ColumnConfiguration = (
  output: any,
  context: __SerdeContext
): ColumnConfiguration => {
  let contents: any = {
    __type: "ColumnConfiguration",
    ChangeDetectingColumns: undefined,
    DocumentDataColumnName: undefined,
    DocumentIdColumnName: undefined,
    DocumentTitleColumnName: undefined,
    FieldMappings: undefined
  };
  if (
    output.ChangeDetectingColumns !== undefined &&
    output.ChangeDetectingColumns !== null
  ) {
    contents.ChangeDetectingColumns = deserializeAws_json1_1ChangeDetectingColumns(
      output.ChangeDetectingColumns,
      context
    );
  }
  if (
    output.DocumentDataColumnName !== undefined &&
    output.DocumentDataColumnName !== null
  ) {
    contents.DocumentDataColumnName = output.DocumentDataColumnName;
  }
  if (
    output.DocumentIdColumnName !== undefined &&
    output.DocumentIdColumnName !== null
  ) {
    contents.DocumentIdColumnName = output.DocumentIdColumnName;
  }
  if (
    output.DocumentTitleColumnName !== undefined &&
    output.DocumentTitleColumnName !== null
  ) {
    contents.DocumentTitleColumnName = output.DocumentTitleColumnName;
  }
  if (output.FieldMappings !== undefined && output.FieldMappings !== null) {
    contents.FieldMappings = deserializeAws_json1_1DataSourceToIndexFieldMappingList(
      output.FieldMappings,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ConflictException = (
  output: any,
  context: __SerdeContext
): ConflictException => {
  let contents: any = {
    __type: "ConflictException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ConnectionConfiguration = (
  output: any,
  context: __SerdeContext
): ConnectionConfiguration => {
  let contents: any = {
    __type: "ConnectionConfiguration",
    DatabaseHost: undefined,
    DatabaseName: undefined,
    DatabasePort: undefined,
    SecretArn: undefined,
    TableName: undefined
  };
  if (output.DatabaseHost !== undefined && output.DatabaseHost !== null) {
    contents.DatabaseHost = output.DatabaseHost;
  }
  if (output.DatabaseName !== undefined && output.DatabaseName !== null) {
    contents.DatabaseName = output.DatabaseName;
  }
  if (output.DatabasePort !== undefined && output.DatabasePort !== null) {
    contents.DatabasePort = output.DatabasePort;
  }
  if (output.SecretArn !== undefined && output.SecretArn !== null) {
    contents.SecretArn = output.SecretArn;
  }
  if (output.TableName !== undefined && output.TableName !== null) {
    contents.TableName = output.TableName;
  }
  return contents;
};

const deserializeAws_json1_1CreateDataSourceResponse = (
  output: any,
  context: __SerdeContext
): CreateDataSourceResponse => {
  let contents: any = {
    __type: "CreateDataSourceResponse",
    Id: undefined
  };
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  return contents;
};

const deserializeAws_json1_1CreateFaqResponse = (
  output: any,
  context: __SerdeContext
): CreateFaqResponse => {
  let contents: any = {
    __type: "CreateFaqResponse",
    Id: undefined
  };
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  return contents;
};

const deserializeAws_json1_1CreateIndexResponse = (
  output: any,
  context: __SerdeContext
): CreateIndexResponse => {
  let contents: any = {
    __type: "CreateIndexResponse",
    Id: undefined
  };
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  return contents;
};

const deserializeAws_json1_1DataSourceConfiguration = (
  output: any,
  context: __SerdeContext
): DataSourceConfiguration => {
  let contents: any = {
    __type: "DataSourceConfiguration",
    DatabaseConfiguration: undefined,
    S3Configuration: undefined,
    SharePointConfiguration: undefined
  };
  if (
    output.DatabaseConfiguration !== undefined &&
    output.DatabaseConfiguration !== null
  ) {
    contents.DatabaseConfiguration = deserializeAws_json1_1DatabaseConfiguration(
      output.DatabaseConfiguration,
      context
    );
  }
  if (output.S3Configuration !== undefined && output.S3Configuration !== null) {
    contents.S3Configuration = deserializeAws_json1_1S3DataSourceConfiguration(
      output.S3Configuration,
      context
    );
  }
  if (
    output.SharePointConfiguration !== undefined &&
    output.SharePointConfiguration !== null
  ) {
    contents.SharePointConfiguration = deserializeAws_json1_1SharePointConfiguration(
      output.SharePointConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DataSourceInclusionsExclusionsStrings = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DataSourceSummary = (
  output: any,
  context: __SerdeContext
): DataSourceSummary => {
  let contents: any = {
    __type: "DataSourceSummary",
    CreatedAt: undefined,
    Id: undefined,
    Name: undefined,
    Status: undefined,
    Type: undefined,
    UpdatedAt: undefined
  };
  if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
    contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  if (output.UpdatedAt !== undefined && output.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(Math.round(output.UpdatedAt * 1000));
  }
  return contents;
};

const deserializeAws_json1_1DataSourceSummaryList = (
  output: any,
  context: __SerdeContext
): Array<DataSourceSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DataSourceSummary(entry, context)
  );
};

const deserializeAws_json1_1DataSourceSyncJob = (
  output: any,
  context: __SerdeContext
): DataSourceSyncJob => {
  let contents: any = {
    __type: "DataSourceSyncJob",
    DataSourceErrorCode: undefined,
    EndTime: undefined,
    ErrorCode: undefined,
    ErrorMessage: undefined,
    ExecutionId: undefined,
    StartTime: undefined,
    Status: undefined
  };
  if (
    output.DataSourceErrorCode !== undefined &&
    output.DataSourceErrorCode !== null
  ) {
    contents.DataSourceErrorCode = output.DataSourceErrorCode;
  }
  if (output.EndTime !== undefined && output.EndTime !== null) {
    contents.EndTime = new Date(Math.round(output.EndTime * 1000));
  }
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.ExecutionId !== undefined && output.ExecutionId !== null) {
    contents.ExecutionId = output.ExecutionId;
  }
  if (output.StartTime !== undefined && output.StartTime !== null) {
    contents.StartTime = new Date(Math.round(output.StartTime * 1000));
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1DataSourceSyncJobHistoryList = (
  output: any,
  context: __SerdeContext
): Array<DataSourceSyncJob> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DataSourceSyncJob(entry, context)
  );
};

const deserializeAws_json1_1DataSourceToIndexFieldMapping = (
  output: any,
  context: __SerdeContext
): DataSourceToIndexFieldMapping => {
  let contents: any = {
    __type: "DataSourceToIndexFieldMapping",
    DataSourceFieldName: undefined,
    DateFieldFormat: undefined,
    IndexFieldName: undefined
  };
  if (
    output.DataSourceFieldName !== undefined &&
    output.DataSourceFieldName !== null
  ) {
    contents.DataSourceFieldName = output.DataSourceFieldName;
  }
  if (output.DateFieldFormat !== undefined && output.DateFieldFormat !== null) {
    contents.DateFieldFormat = output.DateFieldFormat;
  }
  if (output.IndexFieldName !== undefined && output.IndexFieldName !== null) {
    contents.IndexFieldName = output.IndexFieldName;
  }
  return contents;
};

const deserializeAws_json1_1DataSourceToIndexFieldMappingList = (
  output: any,
  context: __SerdeContext
): Array<DataSourceToIndexFieldMapping> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DataSourceToIndexFieldMapping(entry, context)
  );
};

const deserializeAws_json1_1DataSourceVpcConfiguration = (
  output: any,
  context: __SerdeContext
): DataSourceVpcConfiguration => {
  let contents: any = {
    __type: "DataSourceVpcConfiguration",
    SecurityGroupIds: undefined,
    SubnetIds: undefined
  };
  if (
    output.SecurityGroupIds !== undefined &&
    output.SecurityGroupIds !== null
  ) {
    contents.SecurityGroupIds = deserializeAws_json1_1SecurityGroupIdList(
      output.SecurityGroupIds,
      context
    );
  }
  if (output.SubnetIds !== undefined && output.SubnetIds !== null) {
    contents.SubnetIds = deserializeAws_json1_1SubnetIdList(
      output.SubnetIds,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DatabaseConfiguration = (
  output: any,
  context: __SerdeContext
): DatabaseConfiguration => {
  let contents: any = {
    __type: "DatabaseConfiguration",
    AclConfiguration: undefined,
    ColumnConfiguration: undefined,
    ConnectionConfiguration: undefined,
    DatabaseEngineType: undefined,
    VpcConfiguration: undefined
  };
  if (
    output.AclConfiguration !== undefined &&
    output.AclConfiguration !== null
  ) {
    contents.AclConfiguration = deserializeAws_json1_1AclConfiguration(
      output.AclConfiguration,
      context
    );
  }
  if (
    output.ColumnConfiguration !== undefined &&
    output.ColumnConfiguration !== null
  ) {
    contents.ColumnConfiguration = deserializeAws_json1_1ColumnConfiguration(
      output.ColumnConfiguration,
      context
    );
  }
  if (
    output.ConnectionConfiguration !== undefined &&
    output.ConnectionConfiguration !== null
  ) {
    contents.ConnectionConfiguration = deserializeAws_json1_1ConnectionConfiguration(
      output.ConnectionConfiguration,
      context
    );
  }
  if (
    output.DatabaseEngineType !== undefined &&
    output.DatabaseEngineType !== null
  ) {
    contents.DatabaseEngineType = output.DatabaseEngineType;
  }
  if (
    output.VpcConfiguration !== undefined &&
    output.VpcConfiguration !== null
  ) {
    contents.VpcConfiguration = deserializeAws_json1_1DataSourceVpcConfiguration(
      output.VpcConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeDataSourceResponse = (
  output: any,
  context: __SerdeContext
): DescribeDataSourceResponse => {
  let contents: any = {
    __type: "DescribeDataSourceResponse",
    Configuration: undefined,
    CreatedAt: undefined,
    Description: undefined,
    ErrorMessage: undefined,
    Id: undefined,
    IndexId: undefined,
    Name: undefined,
    RoleArn: undefined,
    Schedule: undefined,
    Status: undefined,
    Type: undefined,
    UpdatedAt: undefined
  };
  if (output.Configuration !== undefined && output.Configuration !== null) {
    contents.Configuration = deserializeAws_json1_1DataSourceConfiguration(
      output.Configuration,
      context
    );
  }
  if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
    contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.IndexId !== undefined && output.IndexId !== null) {
    contents.IndexId = output.IndexId;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.RoleArn !== undefined && output.RoleArn !== null) {
    contents.RoleArn = output.RoleArn;
  }
  if (output.Schedule !== undefined && output.Schedule !== null) {
    contents.Schedule = output.Schedule;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  if (output.UpdatedAt !== undefined && output.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(Math.round(output.UpdatedAt * 1000));
  }
  return contents;
};

const deserializeAws_json1_1DescribeFaqResponse = (
  output: any,
  context: __SerdeContext
): DescribeFaqResponse => {
  let contents: any = {
    __type: "DescribeFaqResponse",
    CreatedAt: undefined,
    Description: undefined,
    ErrorMessage: undefined,
    Id: undefined,
    IndexId: undefined,
    Name: undefined,
    RoleArn: undefined,
    S3Path: undefined,
    Status: undefined,
    UpdatedAt: undefined
  };
  if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
    contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.IndexId !== undefined && output.IndexId !== null) {
    contents.IndexId = output.IndexId;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.RoleArn !== undefined && output.RoleArn !== null) {
    contents.RoleArn = output.RoleArn;
  }
  if (output.S3Path !== undefined && output.S3Path !== null) {
    contents.S3Path = deserializeAws_json1_1S3Path(output.S3Path, context);
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.UpdatedAt !== undefined && output.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(Math.round(output.UpdatedAt * 1000));
  }
  return contents;
};

const deserializeAws_json1_1DescribeIndexResponse = (
  output: any,
  context: __SerdeContext
): DescribeIndexResponse => {
  let contents: any = {
    __type: "DescribeIndexResponse",
    CreatedAt: undefined,
    Description: undefined,
    DocumentMetadataConfigurations: undefined,
    ErrorMessage: undefined,
    Id: undefined,
    IndexStatistics: undefined,
    Name: undefined,
    RoleArn: undefined,
    ServerSideEncryptionConfiguration: undefined,
    Status: undefined,
    UpdatedAt: undefined
  };
  if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
    contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (
    output.DocumentMetadataConfigurations !== undefined &&
    output.DocumentMetadataConfigurations !== null
  ) {
    contents.DocumentMetadataConfigurations = deserializeAws_json1_1DocumentMetadataConfigurationList(
      output.DocumentMetadataConfigurations,
      context
    );
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.IndexStatistics !== undefined && output.IndexStatistics !== null) {
    contents.IndexStatistics = deserializeAws_json1_1IndexStatistics(
      output.IndexStatistics,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.RoleArn !== undefined && output.RoleArn !== null) {
    contents.RoleArn = output.RoleArn;
  }
  if (
    output.ServerSideEncryptionConfiguration !== undefined &&
    output.ServerSideEncryptionConfiguration !== null
  ) {
    contents.ServerSideEncryptionConfiguration = deserializeAws_json1_1ServerSideEncryptionConfiguration(
      output.ServerSideEncryptionConfiguration,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.UpdatedAt !== undefined && output.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(Math.round(output.UpdatedAt * 1000));
  }
  return contents;
};

const deserializeAws_json1_1DocumentAttribute = (
  output: any,
  context: __SerdeContext
): DocumentAttribute => {
  let contents: any = {
    __type: "DocumentAttribute",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = deserializeAws_json1_1DocumentAttributeValue(
      output.Value,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DocumentAttributeList = (
  output: any,
  context: __SerdeContext
): Array<DocumentAttribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DocumentAttribute(entry, context)
  );
};

const deserializeAws_json1_1DocumentAttributeStringListValue = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DocumentAttributeValue = (
  output: any,
  context: __SerdeContext
): DocumentAttributeValue => {
  let contents: any = {
    __type: "DocumentAttributeValue",
    DateValue: undefined,
    LongValue: undefined,
    StringListValue: undefined,
    StringValue: undefined
  };
  if (output.DateValue !== undefined && output.DateValue !== null) {
    contents.DateValue = new Date(Math.round(output.DateValue * 1000));
  }
  if (output.LongValue !== undefined && output.LongValue !== null) {
    contents.LongValue = output.LongValue;
  }
  if (output.StringListValue !== undefined && output.StringListValue !== null) {
    contents.StringListValue = deserializeAws_json1_1DocumentAttributeStringListValue(
      output.StringListValue,
      context
    );
  }
  if (output.StringValue !== undefined && output.StringValue !== null) {
    contents.StringValue = output.StringValue;
  }
  return contents;
};

const deserializeAws_json1_1DocumentAttributeValueCountPair = (
  output: any,
  context: __SerdeContext
): DocumentAttributeValueCountPair => {
  let contents: any = {
    __type: "DocumentAttributeValueCountPair",
    Count: undefined,
    DocumentAttributeValue: undefined
  };
  if (output.Count !== undefined && output.Count !== null) {
    contents.Count = output.Count;
  }
  if (
    output.DocumentAttributeValue !== undefined &&
    output.DocumentAttributeValue !== null
  ) {
    contents.DocumentAttributeValue = deserializeAws_json1_1DocumentAttributeValue(
      output.DocumentAttributeValue,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DocumentAttributeValueCountPairList = (
  output: any,
  context: __SerdeContext
): Array<DocumentAttributeValueCountPair> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DocumentAttributeValueCountPair(entry, context)
  );
};

const deserializeAws_json1_1DocumentMetadataConfiguration = (
  output: any,
  context: __SerdeContext
): DocumentMetadataConfiguration => {
  let contents: any = {
    __type: "DocumentMetadataConfiguration",
    Name: undefined,
    Relevance: undefined,
    Search: undefined,
    Type: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Relevance !== undefined && output.Relevance !== null) {
    contents.Relevance = deserializeAws_json1_1Relevance(
      output.Relevance,
      context
    );
  }
  if (output.Search !== undefined && output.Search !== null) {
    contents.Search = deserializeAws_json1_1Search(output.Search, context);
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1DocumentMetadataConfigurationList = (
  output: any,
  context: __SerdeContext
): Array<DocumentMetadataConfiguration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DocumentMetadataConfiguration(entry, context)
  );
};

const deserializeAws_json1_1DocumentsMetadataConfiguration = (
  output: any,
  context: __SerdeContext
): DocumentsMetadataConfiguration => {
  let contents: any = {
    __type: "DocumentsMetadataConfiguration",
    S3Prefix: undefined
  };
  if (output.S3Prefix !== undefined && output.S3Prefix !== null) {
    contents.S3Prefix = output.S3Prefix;
  }
  return contents;
};

const deserializeAws_json1_1FacetResult = (
  output: any,
  context: __SerdeContext
): FacetResult => {
  let contents: any = {
    __type: "FacetResult",
    DocumentAttributeKey: undefined,
    DocumentAttributeValueCountPairs: undefined
  };
  if (
    output.DocumentAttributeKey !== undefined &&
    output.DocumentAttributeKey !== null
  ) {
    contents.DocumentAttributeKey = output.DocumentAttributeKey;
  }
  if (
    output.DocumentAttributeValueCountPairs !== undefined &&
    output.DocumentAttributeValueCountPairs !== null
  ) {
    contents.DocumentAttributeValueCountPairs = deserializeAws_json1_1DocumentAttributeValueCountPairList(
      output.DocumentAttributeValueCountPairs,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1FacetResultList = (
  output: any,
  context: __SerdeContext
): Array<FacetResult> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FacetResult(entry, context)
  );
};

const deserializeAws_json1_1FaqStatistics = (
  output: any,
  context: __SerdeContext
): FaqStatistics => {
  let contents: any = {
    __type: "FaqStatistics",
    IndexedQuestionAnswersCount: undefined
  };
  if (
    output.IndexedQuestionAnswersCount !== undefined &&
    output.IndexedQuestionAnswersCount !== null
  ) {
    contents.IndexedQuestionAnswersCount = output.IndexedQuestionAnswersCount;
  }
  return contents;
};

const deserializeAws_json1_1FaqSummary = (
  output: any,
  context: __SerdeContext
): FaqSummary => {
  let contents: any = {
    __type: "FaqSummary",
    CreatedAt: undefined,
    Id: undefined,
    Name: undefined,
    Status: undefined,
    UpdatedAt: undefined
  };
  if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
    contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.UpdatedAt !== undefined && output.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(Math.round(output.UpdatedAt * 1000));
  }
  return contents;
};

const deserializeAws_json1_1FaqSummaryItems = (
  output: any,
  context: __SerdeContext
): Array<FaqSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FaqSummary(entry, context)
  );
};

const deserializeAws_json1_1Highlight = (
  output: any,
  context: __SerdeContext
): Highlight => {
  let contents: any = {
    __type: "Highlight",
    BeginOffset: undefined,
    EndOffset: undefined,
    TopAnswer: undefined
  };
  if (output.BeginOffset !== undefined && output.BeginOffset !== null) {
    contents.BeginOffset = output.BeginOffset;
  }
  if (output.EndOffset !== undefined && output.EndOffset !== null) {
    contents.EndOffset = output.EndOffset;
  }
  if (output.TopAnswer !== undefined && output.TopAnswer !== null) {
    contents.TopAnswer = output.TopAnswer;
  }
  return contents;
};

const deserializeAws_json1_1HighlightList = (
  output: any,
  context: __SerdeContext
): Array<Highlight> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Highlight(entry, context)
  );
};

const deserializeAws_json1_1IndexConfigurationSummary = (
  output: any,
  context: __SerdeContext
): IndexConfigurationSummary => {
  let contents: any = {
    __type: "IndexConfigurationSummary",
    CreatedAt: undefined,
    Id: undefined,
    Name: undefined,
    Status: undefined,
    UpdatedAt: undefined
  };
  if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
    contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.UpdatedAt !== undefined && output.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(Math.round(output.UpdatedAt * 1000));
  }
  return contents;
};

const deserializeAws_json1_1IndexConfigurationSummaryList = (
  output: any,
  context: __SerdeContext
): Array<IndexConfigurationSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1IndexConfigurationSummary(entry, context)
  );
};

const deserializeAws_json1_1IndexStatistics = (
  output: any,
  context: __SerdeContext
): IndexStatistics => {
  let contents: any = {
    __type: "IndexStatistics",
    FaqStatistics: undefined,
    TextDocumentStatistics: undefined
  };
  if (output.FaqStatistics !== undefined && output.FaqStatistics !== null) {
    contents.FaqStatistics = deserializeAws_json1_1FaqStatistics(
      output.FaqStatistics,
      context
    );
  }
  if (
    output.TextDocumentStatistics !== undefined &&
    output.TextDocumentStatistics !== null
  ) {
    contents.TextDocumentStatistics = deserializeAws_json1_1TextDocumentStatistics(
      output.TextDocumentStatistics,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  let contents: any = {
    __type: "InternalServerException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListDataSourceSyncJobsResponse = (
  output: any,
  context: __SerdeContext
): ListDataSourceSyncJobsResponse => {
  let contents: any = {
    __type: "ListDataSourceSyncJobsResponse",
    History: undefined,
    NextToken: undefined
  };
  if (output.History !== undefined && output.History !== null) {
    contents.History = deserializeAws_json1_1DataSourceSyncJobHistoryList(
      output.History,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListDataSourcesResponse = (
  output: any,
  context: __SerdeContext
): ListDataSourcesResponse => {
  let contents: any = {
    __type: "ListDataSourcesResponse",
    NextToken: undefined,
    SummaryItems: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.SummaryItems !== undefined && output.SummaryItems !== null) {
    contents.SummaryItems = deserializeAws_json1_1DataSourceSummaryList(
      output.SummaryItems,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListFaqsResponse = (
  output: any,
  context: __SerdeContext
): ListFaqsResponse => {
  let contents: any = {
    __type: "ListFaqsResponse",
    FaqSummaryItems: undefined,
    NextToken: undefined
  };
  if (output.FaqSummaryItems !== undefined && output.FaqSummaryItems !== null) {
    contents.FaqSummaryItems = deserializeAws_json1_1FaqSummaryItems(
      output.FaqSummaryItems,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListIndicesResponse = (
  output: any,
  context: __SerdeContext
): ListIndicesResponse => {
  let contents: any = {
    __type: "ListIndicesResponse",
    IndexConfigurationSummaryItems: undefined,
    NextToken: undefined
  };
  if (
    output.IndexConfigurationSummaryItems !== undefined &&
    output.IndexConfigurationSummaryItems !== null
  ) {
    contents.IndexConfigurationSummaryItems = deserializeAws_json1_1IndexConfigurationSummaryList(
      output.IndexConfigurationSummaryItems,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1QueryResult = (
  output: any,
  context: __SerdeContext
): QueryResult => {
  let contents: any = {
    __type: "QueryResult",
    FacetResults: undefined,
    QueryId: undefined,
    ResultItems: undefined,
    TotalNumberOfResults: undefined
  };
  if (output.FacetResults !== undefined && output.FacetResults !== null) {
    contents.FacetResults = deserializeAws_json1_1FacetResultList(
      output.FacetResults,
      context
    );
  }
  if (output.QueryId !== undefined && output.QueryId !== null) {
    contents.QueryId = output.QueryId;
  }
  if (output.ResultItems !== undefined && output.ResultItems !== null) {
    contents.ResultItems = deserializeAws_json1_1QueryResultItemList(
      output.ResultItems,
      context
    );
  }
  if (
    output.TotalNumberOfResults !== undefined &&
    output.TotalNumberOfResults !== null
  ) {
    contents.TotalNumberOfResults = output.TotalNumberOfResults;
  }
  return contents;
};

const deserializeAws_json1_1QueryResultItem = (
  output: any,
  context: __SerdeContext
): QueryResultItem => {
  let contents: any = {
    __type: "QueryResultItem",
    AdditionalAttributes: undefined,
    DocumentAttributes: undefined,
    DocumentExcerpt: undefined,
    DocumentId: undefined,
    DocumentTitle: undefined,
    DocumentURI: undefined,
    Id: undefined,
    Type: undefined
  };
  if (
    output.AdditionalAttributes !== undefined &&
    output.AdditionalAttributes !== null
  ) {
    contents.AdditionalAttributes = deserializeAws_json1_1AdditionalResultAttributeList(
      output.AdditionalAttributes,
      context
    );
  }
  if (
    output.DocumentAttributes !== undefined &&
    output.DocumentAttributes !== null
  ) {
    contents.DocumentAttributes = deserializeAws_json1_1DocumentAttributeList(
      output.DocumentAttributes,
      context
    );
  }
  if (output.DocumentExcerpt !== undefined && output.DocumentExcerpt !== null) {
    contents.DocumentExcerpt = deserializeAws_json1_1TextWithHighlights(
      output.DocumentExcerpt,
      context
    );
  }
  if (output.DocumentId !== undefined && output.DocumentId !== null) {
    contents.DocumentId = output.DocumentId;
  }
  if (output.DocumentTitle !== undefined && output.DocumentTitle !== null) {
    contents.DocumentTitle = deserializeAws_json1_1TextWithHighlights(
      output.DocumentTitle,
      context
    );
  }
  if (output.DocumentURI !== undefined && output.DocumentURI !== null) {
    contents.DocumentURI = output.DocumentURI;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1QueryResultItemList = (
  output: any,
  context: __SerdeContext
): Array<QueryResultItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1QueryResultItem(entry, context)
  );
};

const deserializeAws_json1_1Relevance = (
  output: any,
  context: __SerdeContext
): Relevance => {
  let contents: any = {
    __type: "Relevance",
    Duration: undefined,
    Freshness: undefined,
    Importance: undefined,
    RankOrder: undefined,
    ValueImportanceMap: undefined
  };
  if (output.Duration !== undefined && output.Duration !== null) {
    contents.Duration = output.Duration;
  }
  if (output.Freshness !== undefined && output.Freshness !== null) {
    contents.Freshness = output.Freshness;
  }
  if (output.Importance !== undefined && output.Importance !== null) {
    contents.Importance = output.Importance;
  }
  if (output.RankOrder !== undefined && output.RankOrder !== null) {
    contents.RankOrder = output.RankOrder;
  }
  if (
    output.ValueImportanceMap !== undefined &&
    output.ValueImportanceMap !== null
  ) {
    contents.ValueImportanceMap = deserializeAws_json1_1ValueImportanceMap(
      output.ValueImportanceMap,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistException => {
  let contents: any = {
    __type: "ResourceAlreadyExistException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  let contents: any = {
    __type: "ResourceInUseException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceUnavailableException = (
  output: any,
  context: __SerdeContext
): ResourceUnavailableException => {
  let contents: any = {
    __type: "ResourceUnavailableException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1S3DataSourceConfiguration = (
  output: any,
  context: __SerdeContext
): S3DataSourceConfiguration => {
  let contents: any = {
    __type: "S3DataSourceConfiguration",
    AccessControlListConfiguration: undefined,
    BucketName: undefined,
    DocumentsMetadataConfiguration: undefined,
    ExclusionPatterns: undefined,
    InclusionPrefixes: undefined
  };
  if (
    output.AccessControlListConfiguration !== undefined &&
    output.AccessControlListConfiguration !== null
  ) {
    contents.AccessControlListConfiguration = deserializeAws_json1_1AccessControlListConfiguration(
      output.AccessControlListConfiguration,
      context
    );
  }
  if (output.BucketName !== undefined && output.BucketName !== null) {
    contents.BucketName = output.BucketName;
  }
  if (
    output.DocumentsMetadataConfiguration !== undefined &&
    output.DocumentsMetadataConfiguration !== null
  ) {
    contents.DocumentsMetadataConfiguration = deserializeAws_json1_1DocumentsMetadataConfiguration(
      output.DocumentsMetadataConfiguration,
      context
    );
  }
  if (
    output.ExclusionPatterns !== undefined &&
    output.ExclusionPatterns !== null
  ) {
    contents.ExclusionPatterns = deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(
      output.ExclusionPatterns,
      context
    );
  }
  if (
    output.InclusionPrefixes !== undefined &&
    output.InclusionPrefixes !== null
  ) {
    contents.InclusionPrefixes = deserializeAws_json1_1DataSourceInclusionsExclusionsStrings(
      output.InclusionPrefixes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1S3Path = (
  output: any,
  context: __SerdeContext
): S3Path => {
  let contents: any = {
    __type: "S3Path",
    Bucket: undefined,
    Key: undefined
  };
  if (output.Bucket !== undefined && output.Bucket !== null) {
    contents.Bucket = output.Bucket;
  }
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  return contents;
};

const deserializeAws_json1_1Search = (
  output: any,
  context: __SerdeContext
): Search => {
  let contents: any = {
    __type: "Search",
    Displayable: undefined,
    Facetable: undefined,
    Searchable: undefined
  };
  if (output.Displayable !== undefined && output.Displayable !== null) {
    contents.Displayable = output.Displayable;
  }
  if (output.Facetable !== undefined && output.Facetable !== null) {
    contents.Facetable = output.Facetable;
  }
  if (output.Searchable !== undefined && output.Searchable !== null) {
    contents.Searchable = output.Searchable;
  }
  return contents;
};

const deserializeAws_json1_1SecurityGroupIdList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ServerSideEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): ServerSideEncryptionConfiguration => {
  let contents: any = {
    __type: "ServerSideEncryptionConfiguration",
    KmsKeyId: undefined
  };
  if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
    contents.KmsKeyId = output.KmsKeyId;
  }
  return contents;
};

const deserializeAws_json1_1ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
  let contents: any = {
    __type: "ServiceQuotaExceededException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1SharePointConfiguration = (
  output: any,
  context: __SerdeContext
): SharePointConfiguration => {
  let contents: any = {
    __type: "SharePointConfiguration",
    CrawlAttachments: undefined,
    DocumentTitleFieldName: undefined,
    FieldMappings: undefined,
    SecretArn: undefined,
    SharePointVersion: undefined,
    Urls: undefined,
    VpcConfiguration: undefined
  };
  if (
    output.CrawlAttachments !== undefined &&
    output.CrawlAttachments !== null
  ) {
    contents.CrawlAttachments = output.CrawlAttachments;
  }
  if (
    output.DocumentTitleFieldName !== undefined &&
    output.DocumentTitleFieldName !== null
  ) {
    contents.DocumentTitleFieldName = output.DocumentTitleFieldName;
  }
  if (output.FieldMappings !== undefined && output.FieldMappings !== null) {
    contents.FieldMappings = deserializeAws_json1_1DataSourceToIndexFieldMappingList(
      output.FieldMappings,
      context
    );
  }
  if (output.SecretArn !== undefined && output.SecretArn !== null) {
    contents.SecretArn = output.SecretArn;
  }
  if (
    output.SharePointVersion !== undefined &&
    output.SharePointVersion !== null
  ) {
    contents.SharePointVersion = output.SharePointVersion;
  }
  if (output.Urls !== undefined && output.Urls !== null) {
    contents.Urls = deserializeAws_json1_1SharePointUrlList(
      output.Urls,
      context
    );
  }
  if (
    output.VpcConfiguration !== undefined &&
    output.VpcConfiguration !== null
  ) {
    contents.VpcConfiguration = deserializeAws_json1_1DataSourceVpcConfiguration(
      output.VpcConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SharePointUrlList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1StartDataSourceSyncJobResponse = (
  output: any,
  context: __SerdeContext
): StartDataSourceSyncJobResponse => {
  let contents: any = {
    __type: "StartDataSourceSyncJobResponse",
    ExecutionId: undefined
  };
  if (output.ExecutionId !== undefined && output.ExecutionId !== null) {
    contents.ExecutionId = output.ExecutionId;
  }
  return contents;
};

const deserializeAws_json1_1SubnetIdList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1TextDocumentStatistics = (
  output: any,
  context: __SerdeContext
): TextDocumentStatistics => {
  let contents: any = {
    __type: "TextDocumentStatistics",
    IndexedTextDocumentsCount: undefined
  };
  if (
    output.IndexedTextDocumentsCount !== undefined &&
    output.IndexedTextDocumentsCount !== null
  ) {
    contents.IndexedTextDocumentsCount = output.IndexedTextDocumentsCount;
  }
  return contents;
};

const deserializeAws_json1_1TextWithHighlights = (
  output: any,
  context: __SerdeContext
): TextWithHighlights => {
  let contents: any = {
    __type: "TextWithHighlights",
    Highlights: undefined,
    Text: undefined
  };
  if (output.Highlights !== undefined && output.Highlights !== null) {
    contents.Highlights = deserializeAws_json1_1HighlightList(
      output.Highlights,
      context
    );
  }
  if (output.Text !== undefined && output.Text !== null) {
    contents.Text = output.Text;
  }
  return contents;
};

const deserializeAws_json1_1ThrottlingException = (
  output: any,
  context: __SerdeContext
): ThrottlingException => {
  let contents: any = {
    __type: "ThrottlingException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ValidationException = (
  output: any,
  context: __SerdeContext
): ValidationException => {
  let contents: any = {
    __type: "ValidationException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ValueImportanceMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
