import { BatchGetNamedQueryCommandInput, BatchGetNamedQueryCommandOutput } from "../commands/BatchGetNamedQueryCommand";
import {
  BatchGetQueryExecutionCommandInput,
  BatchGetQueryExecutionCommandOutput,
} from "../commands/BatchGetQueryExecutionCommand";
import { CreateDataCatalogCommandInput, CreateDataCatalogCommandOutput } from "../commands/CreateDataCatalogCommand";
import { CreateNamedQueryCommandInput, CreateNamedQueryCommandOutput } from "../commands/CreateNamedQueryCommand";
import {
  CreatePreparedStatementCommandInput,
  CreatePreparedStatementCommandOutput,
} from "../commands/CreatePreparedStatementCommand";
import { CreateWorkGroupCommandInput, CreateWorkGroupCommandOutput } from "../commands/CreateWorkGroupCommand";
import { DeleteDataCatalogCommandInput, DeleteDataCatalogCommandOutput } from "../commands/DeleteDataCatalogCommand";
import { DeleteNamedQueryCommandInput, DeleteNamedQueryCommandOutput } from "../commands/DeleteNamedQueryCommand";
import {
  DeletePreparedStatementCommandInput,
  DeletePreparedStatementCommandOutput,
} from "../commands/DeletePreparedStatementCommand";
import { DeleteWorkGroupCommandInput, DeleteWorkGroupCommandOutput } from "../commands/DeleteWorkGroupCommand";
import { GetDataCatalogCommandInput, GetDataCatalogCommandOutput } from "../commands/GetDataCatalogCommand";
import { GetDatabaseCommandInput, GetDatabaseCommandOutput } from "../commands/GetDatabaseCommand";
import { GetNamedQueryCommandInput, GetNamedQueryCommandOutput } from "../commands/GetNamedQueryCommand";
import {
  GetPreparedStatementCommandInput,
  GetPreparedStatementCommandOutput,
} from "../commands/GetPreparedStatementCommand";
import { GetQueryExecutionCommandInput, GetQueryExecutionCommandOutput } from "../commands/GetQueryExecutionCommand";
import { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "../commands/GetQueryResultsCommand";
import { GetTableMetadataCommandInput, GetTableMetadataCommandOutput } from "../commands/GetTableMetadataCommand";
import { GetWorkGroupCommandInput, GetWorkGroupCommandOutput } from "../commands/GetWorkGroupCommand";
import { ListDataCatalogsCommandInput, ListDataCatalogsCommandOutput } from "../commands/ListDataCatalogsCommand";
import { ListDatabasesCommandInput, ListDatabasesCommandOutput } from "../commands/ListDatabasesCommand";
import { ListEngineVersionsCommandInput, ListEngineVersionsCommandOutput } from "../commands/ListEngineVersionsCommand";
import { ListNamedQueriesCommandInput, ListNamedQueriesCommandOutput } from "../commands/ListNamedQueriesCommand";
import {
  ListPreparedStatementsCommandInput,
  ListPreparedStatementsCommandOutput,
} from "../commands/ListPreparedStatementsCommand";
import {
  ListQueryExecutionsCommandInput,
  ListQueryExecutionsCommandOutput,
} from "../commands/ListQueryExecutionsCommand";
import { ListTableMetadataCommandInput, ListTableMetadataCommandOutput } from "../commands/ListTableMetadataCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListWorkGroupsCommandInput, ListWorkGroupsCommandOutput } from "../commands/ListWorkGroupsCommand";
import {
  StartQueryExecutionCommandInput,
  StartQueryExecutionCommandOutput,
} from "../commands/StartQueryExecutionCommand";
import { StopQueryExecutionCommandInput, StopQueryExecutionCommandOutput } from "../commands/StopQueryExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateDataCatalogCommandInput, UpdateDataCatalogCommandOutput } from "../commands/UpdateDataCatalogCommand";
import {
  UpdatePreparedStatementCommandInput,
  UpdatePreparedStatementCommandOutput,
} from "../commands/UpdatePreparedStatementCommand";
import { UpdateWorkGroupCommandInput, UpdateWorkGroupCommandOutput } from "../commands/UpdateWorkGroupCommand";
import {
  BatchGetNamedQueryInput,
  BatchGetNamedQueryOutput,
  BatchGetQueryExecutionInput,
  BatchGetQueryExecutionOutput,
  Column,
  ColumnInfo,
  CreateDataCatalogInput,
  CreateDataCatalogOutput,
  CreateNamedQueryInput,
  CreateNamedQueryOutput,
  CreatePreparedStatementInput,
  CreatePreparedStatementOutput,
  CreateWorkGroupInput,
  CreateWorkGroupOutput,
  DataCatalog,
  DataCatalogSummary,
  Database,
  Datum,
  DeleteDataCatalogInput,
  DeleteDataCatalogOutput,
  DeleteNamedQueryInput,
  DeleteNamedQueryOutput,
  DeletePreparedStatementInput,
  DeletePreparedStatementOutput,
  DeleteWorkGroupInput,
  DeleteWorkGroupOutput,
  EncryptionConfiguration,
  EngineVersion,
  GetDataCatalogInput,
  GetDataCatalogOutput,
  GetDatabaseInput,
  GetDatabaseOutput,
  GetNamedQueryInput,
  GetNamedQueryOutput,
  GetPreparedStatementInput,
  GetPreparedStatementOutput,
  GetQueryExecutionInput,
  GetQueryExecutionOutput,
  GetQueryResultsInput,
  GetQueryResultsOutput,
  GetTableMetadataInput,
  GetTableMetadataOutput,
  GetWorkGroupInput,
  GetWorkGroupOutput,
  InternalServerException,
  InvalidRequestException,
  ListDataCatalogsInput,
  ListDataCatalogsOutput,
  ListDatabasesInput,
  ListDatabasesOutput,
  ListEngineVersionsInput,
  ListEngineVersionsOutput,
  ListNamedQueriesInput,
  ListNamedQueriesOutput,
  ListPreparedStatementsInput,
  ListPreparedStatementsOutput,
  ListQueryExecutionsInput,
  ListQueryExecutionsOutput,
  ListTableMetadataInput,
  ListTableMetadataOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListWorkGroupsInput,
  ListWorkGroupsOutput,
  MetadataException,
  NamedQuery,
  PreparedStatement,
  PreparedStatementSummary,
  QueryExecution,
  QueryExecutionContext,
  QueryExecutionStatistics,
  QueryExecutionStatus,
  ResourceNotFoundException,
  ResultConfiguration,
  ResultConfigurationUpdates,
  ResultSet,
  ResultSetMetadata,
  Row,
  StartQueryExecutionInput,
  StartQueryExecutionOutput,
  StopQueryExecutionInput,
  StopQueryExecutionOutput,
  TableMetadata,
  Tag,
  TagResourceInput,
  TagResourceOutput,
  TooManyRequestsException,
  UnprocessedNamedQueryId,
  UnprocessedQueryExecutionId,
  UntagResourceInput,
  UntagResourceOutput,
  UpdateDataCatalogInput,
  UpdateDataCatalogOutput,
  UpdatePreparedStatementInput,
  UpdatePreparedStatementOutput,
  UpdateWorkGroupInput,
  UpdateWorkGroupOutput,
  WorkGroup,
  WorkGroupConfiguration,
  WorkGroupConfigurationUpdates,
  WorkGroupSummary,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
  expectString as __expectString,
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

export const serializeAws_json1_1BatchGetNamedQueryCommand = async (
  input: BatchGetNamedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.BatchGetNamedQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetNamedQueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetQueryExecutionCommand = async (
  input: BatchGetQueryExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.BatchGetQueryExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetQueryExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDataCatalogCommand = async (
  input: CreateDataCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.CreateDataCatalog",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDataCatalogInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateNamedQueryCommand = async (
  input: CreateNamedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.CreateNamedQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateNamedQueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePreparedStatementCommand = async (
  input: CreatePreparedStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.CreatePreparedStatement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePreparedStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateWorkGroupCommand = async (
  input: CreateWorkGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.CreateWorkGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateWorkGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDataCatalogCommand = async (
  input: DeleteDataCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.DeleteDataCatalog",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDataCatalogInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteNamedQueryCommand = async (
  input: DeleteNamedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.DeleteNamedQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteNamedQueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePreparedStatementCommand = async (
  input: DeletePreparedStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.DeletePreparedStatement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePreparedStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteWorkGroupCommand = async (
  input: DeleteWorkGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.DeleteWorkGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteWorkGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDatabaseCommand = async (
  input: GetDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetDatabase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDatabaseInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDataCatalogCommand = async (
  input: GetDataCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetDataCatalog",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDataCatalogInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetNamedQueryCommand = async (
  input: GetNamedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetNamedQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetNamedQueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPreparedStatementCommand = async (
  input: GetPreparedStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetPreparedStatement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPreparedStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetQueryExecutionCommand = async (
  input: GetQueryExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetQueryExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetQueryExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetQueryResultsCommand = async (
  input: GetQueryResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetQueryResults",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetQueryResultsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTableMetadataCommand = async (
  input: GetTableMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetTableMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTableMetadataInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetWorkGroupCommand = async (
  input: GetWorkGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetWorkGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetWorkGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDatabasesCommand = async (
  input: ListDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListDatabases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDatabasesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDataCatalogsCommand = async (
  input: ListDataCatalogsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListDataCatalogs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDataCatalogsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEngineVersionsCommand = async (
  input: ListEngineVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListEngineVersions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEngineVersionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListNamedQueriesCommand = async (
  input: ListNamedQueriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListNamedQueries",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListNamedQueriesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPreparedStatementsCommand = async (
  input: ListPreparedStatementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListPreparedStatements",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPreparedStatementsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListQueryExecutionsCommand = async (
  input: ListQueryExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListQueryExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListQueryExecutionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTableMetadataCommand = async (
  input: ListTableMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListTableMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTableMetadataInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListWorkGroupsCommand = async (
  input: ListWorkGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListWorkGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListWorkGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartQueryExecutionCommand = async (
  input: StartQueryExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.StartQueryExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartQueryExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopQueryExecutionCommand = async (
  input: StopQueryExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.StopQueryExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopQueryExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDataCatalogCommand = async (
  input: UpdateDataCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.UpdateDataCatalog",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDataCatalogInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdatePreparedStatementCommand = async (
  input: UpdatePreparedStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.UpdatePreparedStatement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdatePreparedStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateWorkGroupCommand = async (
  input: UpdateWorkGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.UpdateWorkGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateWorkGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1BatchGetNamedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetNamedQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetNamedQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetNamedQueryOutput(data, context);
  const response: BatchGetNamedQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetNamedQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetNamedQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1BatchGetQueryExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetQueryExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetQueryExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetQueryExecutionOutput(data, context);
  const response: BatchGetQueryExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetQueryExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetQueryExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateDataCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDataCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDataCatalogOutput(data, context);
  const response: CreateDataCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDataCatalogCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataCatalogCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateNamedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNamedQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateNamedQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateNamedQueryOutput(data, context);
  const response: CreateNamedQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateNamedQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNamedQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreatePreparedStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePreparedStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePreparedStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePreparedStatementOutput(data, context);
  const response: CreatePreparedStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePreparedStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePreparedStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateWorkGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateWorkGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateWorkGroupOutput(data, context);
  const response: CreateWorkGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateWorkGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteDataCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDataCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDataCatalogOutput(data, context);
  const response: DeleteDataCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDataCatalogCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataCatalogCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteNamedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamedQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteNamedQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteNamedQueryOutput(data, context);
  const response: DeleteNamedQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteNamedQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamedQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeletePreparedStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePreparedStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePreparedStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeletePreparedStatementOutput(data, context);
  const response: DeletePreparedStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePreparedStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePreparedStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteWorkGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteWorkGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteWorkGroupOutput(data, context);
  const response: DeleteWorkGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteWorkGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDatabaseOutput(data, context);
  const response: GetDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MetadataException":
    case "com.amazonaws.athena#MetadataException":
      response = {
        ...(await deserializeAws_json1_1MetadataExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDataCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDataCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDataCatalogOutput(data, context);
  const response: GetDataCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDataCatalogCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataCatalogCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetNamedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamedQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetNamedQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetNamedQueryOutput(data, context);
  const response: GetNamedQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetNamedQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamedQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetPreparedStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPreparedStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPreparedStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPreparedStatementOutput(data, context);
  const response: GetPreparedStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPreparedStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPreparedStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetQueryExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetQueryExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetQueryExecutionOutput(data, context);
  const response: GetQueryExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetQueryExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetQueryResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetQueryResultsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetQueryResultsOutput(data, context);
  const response: GetQueryResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetQueryResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetTableMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTableMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTableMetadataOutput(data, context);
  const response: GetTableMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTableMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MetadataException":
    case "com.amazonaws.athena#MetadataException":
      response = {
        ...(await deserializeAws_json1_1MetadataExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetWorkGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetWorkGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetWorkGroupOutput(data, context);
  const response: GetWorkGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetWorkGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListDatabasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatabasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDatabasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDatabasesOutput(data, context);
  const response: ListDatabasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDatabasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatabasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MetadataException":
    case "com.amazonaws.athena#MetadataException":
      response = {
        ...(await deserializeAws_json1_1MetadataExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListDataCatalogsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataCatalogsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDataCatalogsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDataCatalogsOutput(data, context);
  const response: ListDataCatalogsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDataCatalogsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataCatalogsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListEngineVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEngineVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEngineVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEngineVersionsOutput(data, context);
  const response: ListEngineVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEngineVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEngineVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListNamedQueriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamedQueriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListNamedQueriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListNamedQueriesOutput(data, context);
  const response: ListNamedQueriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListNamedQueriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamedQueriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListPreparedStatementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPreparedStatementsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPreparedStatementsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPreparedStatementsOutput(data, context);
  const response: ListPreparedStatementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPreparedStatementsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPreparedStatementsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListQueryExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueryExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListQueryExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListQueryExecutionsOutput(data, context);
  const response: ListQueryExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListQueryExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueryExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTableMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTableMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTableMetadataOutput(data, context);
  const response: ListTableMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTableMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MetadataException":
    case "com.amazonaws.athena#MetadataException":
      response = {
        ...(await deserializeAws_json1_1MetadataExceptionResponse(parsedOutput, context)),
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
  contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
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
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListWorkGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListWorkGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListWorkGroupsOutput(data, context);
  const response: ListWorkGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListWorkGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StartQueryExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartQueryExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartQueryExecutionOutput(data, context);
  const response: StartQueryExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartQueryExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StopQueryExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopQueryExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopQueryExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopQueryExecutionOutput(data, context);
  const response: StopQueryExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopQueryExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopQueryExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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
  contents = deserializeAws_json1_1TagResourceOutput(data, context);
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
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
  contents = deserializeAws_json1_1UntagResourceOutput(data, context);
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
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateDataCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDataCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDataCatalogOutput(data, context);
  const response: UpdateDataCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDataCatalogCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataCatalogCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdatePreparedStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePreparedStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdatePreparedStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdatePreparedStatementOutput(data, context);
  const response: UpdatePreparedStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdatePreparedStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePreparedStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateWorkGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateWorkGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateWorkGroupOutput(data, context);
  const response: UpdateWorkGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateWorkGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(body, context);
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MetadataExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MetadataException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MetadataException(body, context);
  const contents: MetadataException = {
    name: "MetadataException",
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

const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyRequestsException(body, context);
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1BatchGetNamedQueryInput = (input: BatchGetNamedQueryInput, context: __SerdeContext): any => {
  return {
    ...(input.NamedQueryIds !== undefined &&
      input.NamedQueryIds !== null && {
        NamedQueryIds: serializeAws_json1_1NamedQueryIdList(input.NamedQueryIds, context),
      }),
  };
};

const serializeAws_json1_1BatchGetQueryExecutionInput = (
  input: BatchGetQueryExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.QueryExecutionIds !== undefined &&
      input.QueryExecutionIds !== null && {
        QueryExecutionIds: serializeAws_json1_1QueryExecutionIdList(input.QueryExecutionIds, context),
      }),
  };
};

const serializeAws_json1_1CreateDataCatalogInput = (input: CreateDataCatalogInput, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1CreateNamedQueryInput = (input: CreateNamedQueryInput, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.QueryString !== undefined && input.QueryString !== null && { QueryString: input.QueryString }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1CreatePreparedStatementInput = (
  input: CreatePreparedStatementInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.QueryStatement !== undefined &&
      input.QueryStatement !== null && { QueryStatement: input.QueryStatement }),
    ...(input.StatementName !== undefined && input.StatementName !== null && { StatementName: input.StatementName }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1CreateWorkGroupInput = (input: CreateWorkGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.Configuration !== undefined &&
      input.Configuration !== null && {
        Configuration: serializeAws_json1_1WorkGroupConfiguration(input.Configuration, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1DeleteDataCatalogInput = (input: DeleteDataCatalogInput, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteNamedQueryInput = (input: DeleteNamedQueryInput, context: __SerdeContext): any => {
  return {
    NamedQueryId: input.NamedQueryId ?? generateIdempotencyToken(),
  };
};

const serializeAws_json1_1DeletePreparedStatementInput = (
  input: DeletePreparedStatementInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.StatementName !== undefined && input.StatementName !== null && { StatementName: input.StatementName }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1DeleteWorkGroupInput = (input: DeleteWorkGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.RecursiveDeleteOption !== undefined &&
      input.RecursiveDeleteOption !== null && { RecursiveDeleteOption: input.RecursiveDeleteOption }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionOption !== undefined &&
      input.EncryptionOption !== null && { EncryptionOption: input.EncryptionOption }),
    ...(input.KmsKey !== undefined && input.KmsKey !== null && { KmsKey: input.KmsKey }),
  };
};

const serializeAws_json1_1EngineVersion = (input: EngineVersion, context: __SerdeContext): any => {
  return {
    ...(input.EffectiveEngineVersion !== undefined &&
      input.EffectiveEngineVersion !== null && { EffectiveEngineVersion: input.EffectiveEngineVersion }),
    ...(input.SelectedEngineVersion !== undefined &&
      input.SelectedEngineVersion !== null && { SelectedEngineVersion: input.SelectedEngineVersion }),
  };
};

const serializeAws_json1_1GetDatabaseInput = (input: GetDatabaseInput, context: __SerdeContext): any => {
  return {
    ...(input.CatalogName !== undefined && input.CatalogName !== null && { CatalogName: input.CatalogName }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
  };
};

const serializeAws_json1_1GetDataCatalogInput = (input: GetDataCatalogInput, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetNamedQueryInput = (input: GetNamedQueryInput, context: __SerdeContext): any => {
  return {
    ...(input.NamedQueryId !== undefined && input.NamedQueryId !== null && { NamedQueryId: input.NamedQueryId }),
  };
};

const serializeAws_json1_1GetPreparedStatementInput = (
  input: GetPreparedStatementInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.StatementName !== undefined && input.StatementName !== null && { StatementName: input.StatementName }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1GetQueryExecutionInput = (input: GetQueryExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.QueryExecutionId !== undefined &&
      input.QueryExecutionId !== null && { QueryExecutionId: input.QueryExecutionId }),
  };
};

const serializeAws_json1_1GetQueryResultsInput = (input: GetQueryResultsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.QueryExecutionId !== undefined &&
      input.QueryExecutionId !== null && { QueryExecutionId: input.QueryExecutionId }),
  };
};

const serializeAws_json1_1GetTableMetadataInput = (input: GetTableMetadataInput, context: __SerdeContext): any => {
  return {
    ...(input.CatalogName !== undefined && input.CatalogName !== null && { CatalogName: input.CatalogName }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1GetWorkGroupInput = (input: GetWorkGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1ListDatabasesInput = (input: ListDatabasesInput, context: __SerdeContext): any => {
  return {
    ...(input.CatalogName !== undefined && input.CatalogName !== null && { CatalogName: input.CatalogName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDataCatalogsInput = (input: ListDataCatalogsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListEngineVersionsInput = (input: ListEngineVersionsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListNamedQueriesInput = (input: ListNamedQueriesInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1ListPreparedStatementsInput = (
  input: ListPreparedStatementsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1ListQueryExecutionsInput = (
  input: ListQueryExecutionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1ListTableMetadataInput = (input: ListTableMetadataInput, context: __SerdeContext): any => {
  return {
    ...(input.CatalogName !== undefined && input.CatalogName !== null && { CatalogName: input.CatalogName }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1ListWorkGroupsInput = (input: ListWorkGroupsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1NamedQueryIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ParametersMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_json1_1QueryExecutionContext = (input: QueryExecutionContext, context: __SerdeContext): any => {
  return {
    ...(input.Catalog !== undefined && input.Catalog !== null && { Catalog: input.Catalog }),
    ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
  };
};

const serializeAws_json1_1QueryExecutionIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ResultConfiguration = (input: ResultConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionConfiguration !== undefined &&
      input.EncryptionConfiguration !== null && {
        EncryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context),
      }),
    ...(input.OutputLocation !== undefined &&
      input.OutputLocation !== null && { OutputLocation: input.OutputLocation }),
  };
};

const serializeAws_json1_1ResultConfigurationUpdates = (
  input: ResultConfigurationUpdates,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionConfiguration !== undefined &&
      input.EncryptionConfiguration !== null && {
        EncryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context),
      }),
    ...(input.OutputLocation !== undefined &&
      input.OutputLocation !== null && { OutputLocation: input.OutputLocation }),
    ...(input.RemoveEncryptionConfiguration !== undefined &&
      input.RemoveEncryptionConfiguration !== null && {
        RemoveEncryptionConfiguration: input.RemoveEncryptionConfiguration,
      }),
    ...(input.RemoveOutputLocation !== undefined &&
      input.RemoveOutputLocation !== null && { RemoveOutputLocation: input.RemoveOutputLocation }),
  };
};

const serializeAws_json1_1StartQueryExecutionInput = (
  input: StartQueryExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.QueryExecutionContext !== undefined &&
      input.QueryExecutionContext !== null && {
        QueryExecutionContext: serializeAws_json1_1QueryExecutionContext(input.QueryExecutionContext, context),
      }),
    ...(input.QueryString !== undefined && input.QueryString !== null && { QueryString: input.QueryString }),
    ...(input.ResultConfiguration !== undefined &&
      input.ResultConfiguration !== null && {
        ResultConfiguration: serializeAws_json1_1ResultConfiguration(input.ResultConfiguration, context),
      }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1StopQueryExecutionInput = (input: StopQueryExecutionInput, context: __SerdeContext): any => {
  return {
    QueryExecutionId: input.QueryExecutionId ?? generateIdempotencyToken(),
  };
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

const serializeAws_json1_1TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateDataCatalogInput = (input: UpdateDataCatalogInput, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Parameters !== undefined &&
      input.Parameters !== null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1UpdatePreparedStatementInput = (
  input: UpdatePreparedStatementInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.QueryStatement !== undefined &&
      input.QueryStatement !== null && { QueryStatement: input.QueryStatement }),
    ...(input.StatementName !== undefined && input.StatementName !== null && { StatementName: input.StatementName }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1UpdateWorkGroupInput = (input: UpdateWorkGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationUpdates !== undefined &&
      input.ConfigurationUpdates !== null && {
        ConfigurationUpdates: serializeAws_json1_1WorkGroupConfigurationUpdates(input.ConfigurationUpdates, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
    ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1WorkGroupConfiguration = (input: WorkGroupConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.BytesScannedCutoffPerQuery !== undefined &&
      input.BytesScannedCutoffPerQuery !== null && { BytesScannedCutoffPerQuery: input.BytesScannedCutoffPerQuery }),
    ...(input.EnforceWorkGroupConfiguration !== undefined &&
      input.EnforceWorkGroupConfiguration !== null && {
        EnforceWorkGroupConfiguration: input.EnforceWorkGroupConfiguration,
      }),
    ...(input.EngineVersion !== undefined &&
      input.EngineVersion !== null && {
        EngineVersion: serializeAws_json1_1EngineVersion(input.EngineVersion, context),
      }),
    ...(input.PublishCloudWatchMetricsEnabled !== undefined &&
      input.PublishCloudWatchMetricsEnabled !== null && {
        PublishCloudWatchMetricsEnabled: input.PublishCloudWatchMetricsEnabled,
      }),
    ...(input.RequesterPaysEnabled !== undefined &&
      input.RequesterPaysEnabled !== null && { RequesterPaysEnabled: input.RequesterPaysEnabled }),
    ...(input.ResultConfiguration !== undefined &&
      input.ResultConfiguration !== null && {
        ResultConfiguration: serializeAws_json1_1ResultConfiguration(input.ResultConfiguration, context),
      }),
  };
};

const serializeAws_json1_1WorkGroupConfigurationUpdates = (
  input: WorkGroupConfigurationUpdates,
  context: __SerdeContext
): any => {
  return {
    ...(input.BytesScannedCutoffPerQuery !== undefined &&
      input.BytesScannedCutoffPerQuery !== null && { BytesScannedCutoffPerQuery: input.BytesScannedCutoffPerQuery }),
    ...(input.EnforceWorkGroupConfiguration !== undefined &&
      input.EnforceWorkGroupConfiguration !== null && {
        EnforceWorkGroupConfiguration: input.EnforceWorkGroupConfiguration,
      }),
    ...(input.EngineVersion !== undefined &&
      input.EngineVersion !== null && {
        EngineVersion: serializeAws_json1_1EngineVersion(input.EngineVersion, context),
      }),
    ...(input.PublishCloudWatchMetricsEnabled !== undefined &&
      input.PublishCloudWatchMetricsEnabled !== null && {
        PublishCloudWatchMetricsEnabled: input.PublishCloudWatchMetricsEnabled,
      }),
    ...(input.RemoveBytesScannedCutoffPerQuery !== undefined &&
      input.RemoveBytesScannedCutoffPerQuery !== null && {
        RemoveBytesScannedCutoffPerQuery: input.RemoveBytesScannedCutoffPerQuery,
      }),
    ...(input.RequesterPaysEnabled !== undefined &&
      input.RequesterPaysEnabled !== null && { RequesterPaysEnabled: input.RequesterPaysEnabled }),
    ...(input.ResultConfigurationUpdates !== undefined &&
      input.ResultConfigurationUpdates !== null && {
        ResultConfigurationUpdates: serializeAws_json1_1ResultConfigurationUpdates(
          input.ResultConfigurationUpdates,
          context
        ),
      }),
  };
};

const deserializeAws_json1_1BatchGetNamedQueryOutput = (
  output: any,
  context: __SerdeContext
): BatchGetNamedQueryOutput => {
  return {
    NamedQueries:
      output.NamedQueries !== undefined && output.NamedQueries !== null
        ? deserializeAws_json1_1NamedQueryList(output.NamedQueries, context)
        : undefined,
    UnprocessedNamedQueryIds:
      output.UnprocessedNamedQueryIds !== undefined && output.UnprocessedNamedQueryIds !== null
        ? deserializeAws_json1_1UnprocessedNamedQueryIdList(output.UnprocessedNamedQueryIds, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetQueryExecutionOutput = (
  output: any,
  context: __SerdeContext
): BatchGetQueryExecutionOutput => {
  return {
    QueryExecutions:
      output.QueryExecutions !== undefined && output.QueryExecutions !== null
        ? deserializeAws_json1_1QueryExecutionList(output.QueryExecutions, context)
        : undefined,
    UnprocessedQueryExecutionIds:
      output.UnprocessedQueryExecutionIds !== undefined && output.UnprocessedQueryExecutionIds !== null
        ? deserializeAws_json1_1UnprocessedQueryExecutionIdList(output.UnprocessedQueryExecutionIds, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Column = (output: any, context: __SerdeContext): Column => {
  return {
    Comment: __expectString(output.Comment),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ColumnInfo = (output: any, context: __SerdeContext): ColumnInfo => {
  return {
    CaseSensitive: __expectBoolean(output.CaseSensitive),
    CatalogName: __expectString(output.CatalogName),
    Label: __expectString(output.Label),
    Name: __expectString(output.Name),
    Nullable: __expectString(output.Nullable),
    Precision: __expectInt(output.Precision),
    Scale: __expectInt(output.Scale),
    SchemaName: __expectString(output.SchemaName),
    TableName: __expectString(output.TableName),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ColumnInfoList = (output: any, context: __SerdeContext): ColumnInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ColumnInfo(entry, context);
    });
};

const deserializeAws_json1_1ColumnList = (output: any, context: __SerdeContext): Column[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Column(entry, context);
    });
};

const deserializeAws_json1_1CreateDataCatalogOutput = (
  output: any,
  context: __SerdeContext
): CreateDataCatalogOutput => {
  return {} as any;
};

const deserializeAws_json1_1CreateNamedQueryOutput = (output: any, context: __SerdeContext): CreateNamedQueryOutput => {
  return {
    NamedQueryId: __expectString(output.NamedQueryId),
  } as any;
};

const deserializeAws_json1_1CreatePreparedStatementOutput = (
  output: any,
  context: __SerdeContext
): CreatePreparedStatementOutput => {
  return {} as any;
};

const deserializeAws_json1_1CreateWorkGroupOutput = (output: any, context: __SerdeContext): CreateWorkGroupOutput => {
  return {} as any;
};

const deserializeAws_json1_1Database = (output: any, context: __SerdeContext): Database => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_json1_1ParametersMap(output.Parameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DatabaseList = (output: any, context: __SerdeContext): Database[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Database(entry, context);
    });
};

const deserializeAws_json1_1DataCatalog = (output: any, context: __SerdeContext): DataCatalog => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_json1_1ParametersMap(output.Parameters, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1DataCatalogSummary = (output: any, context: __SerdeContext): DataCatalogSummary => {
  return {
    CatalogName: __expectString(output.CatalogName),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1DataCatalogSummaryList = (output: any, context: __SerdeContext): DataCatalogSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DataCatalogSummary(entry, context);
    });
};

const deserializeAws_json1_1Datum = (output: any, context: __SerdeContext): Datum => {
  return {
    VarCharValue: __expectString(output.VarCharValue),
  } as any;
};

const deserializeAws_json1_1datumList = (output: any, context: __SerdeContext): Datum[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Datum(entry, context);
    });
};

const deserializeAws_json1_1DeleteDataCatalogOutput = (
  output: any,
  context: __SerdeContext
): DeleteDataCatalogOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeleteNamedQueryOutput = (output: any, context: __SerdeContext): DeleteNamedQueryOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeletePreparedStatementOutput = (
  output: any,
  context: __SerdeContext
): DeletePreparedStatementOutput => {
  return {} as any;
};

const deserializeAws_json1_1DeleteWorkGroupOutput = (output: any, context: __SerdeContext): DeleteWorkGroupOutput => {
  return {} as any;
};

const deserializeAws_json1_1EncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionConfiguration => {
  return {
    EncryptionOption: __expectString(output.EncryptionOption),
    KmsKey: __expectString(output.KmsKey),
  } as any;
};

const deserializeAws_json1_1EngineVersion = (output: any, context: __SerdeContext): EngineVersion => {
  return {
    EffectiveEngineVersion: __expectString(output.EffectiveEngineVersion),
    SelectedEngineVersion: __expectString(output.SelectedEngineVersion),
  } as any;
};

const deserializeAws_json1_1EngineVersionsList = (output: any, context: __SerdeContext): EngineVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EngineVersion(entry, context);
    });
};

const deserializeAws_json1_1GetDatabaseOutput = (output: any, context: __SerdeContext): GetDatabaseOutput => {
  return {
    Database:
      output.Database !== undefined && output.Database !== null
        ? deserializeAws_json1_1Database(output.Database, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDataCatalogOutput = (output: any, context: __SerdeContext): GetDataCatalogOutput => {
  return {
    DataCatalog:
      output.DataCatalog !== undefined && output.DataCatalog !== null
        ? deserializeAws_json1_1DataCatalog(output.DataCatalog, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetNamedQueryOutput = (output: any, context: __SerdeContext): GetNamedQueryOutput => {
  return {
    NamedQuery:
      output.NamedQuery !== undefined && output.NamedQuery !== null
        ? deserializeAws_json1_1NamedQuery(output.NamedQuery, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetPreparedStatementOutput = (
  output: any,
  context: __SerdeContext
): GetPreparedStatementOutput => {
  return {
    PreparedStatement:
      output.PreparedStatement !== undefined && output.PreparedStatement !== null
        ? deserializeAws_json1_1PreparedStatement(output.PreparedStatement, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetQueryExecutionOutput = (
  output: any,
  context: __SerdeContext
): GetQueryExecutionOutput => {
  return {
    QueryExecution:
      output.QueryExecution !== undefined && output.QueryExecution !== null
        ? deserializeAws_json1_1QueryExecution(output.QueryExecution, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetQueryResultsOutput = (output: any, context: __SerdeContext): GetQueryResultsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    ResultSet:
      output.ResultSet !== undefined && output.ResultSet !== null
        ? deserializeAws_json1_1ResultSet(output.ResultSet, context)
        : undefined,
    UpdateCount: __expectInt(output.UpdateCount),
  } as any;
};

const deserializeAws_json1_1GetTableMetadataOutput = (output: any, context: __SerdeContext): GetTableMetadataOutput => {
  return {
    TableMetadata:
      output.TableMetadata !== undefined && output.TableMetadata !== null
        ? deserializeAws_json1_1TableMetadata(output.TableMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetWorkGroupOutput = (output: any, context: __SerdeContext): GetWorkGroupOutput => {
  return {
    WorkGroup:
      output.WorkGroup !== undefined && output.WorkGroup !== null
        ? deserializeAws_json1_1WorkGroup(output.WorkGroup, context)
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

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    AthenaErrorCode: __expectString(output.AthenaErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListDatabasesOutput = (output: any, context: __SerdeContext): ListDatabasesOutput => {
  return {
    DatabaseList:
      output.DatabaseList !== undefined && output.DatabaseList !== null
        ? deserializeAws_json1_1DatabaseList(output.DatabaseList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDataCatalogsOutput = (output: any, context: __SerdeContext): ListDataCatalogsOutput => {
  return {
    DataCatalogsSummary:
      output.DataCatalogsSummary !== undefined && output.DataCatalogsSummary !== null
        ? deserializeAws_json1_1DataCatalogSummaryList(output.DataCatalogsSummary, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListEngineVersionsOutput = (
  output: any,
  context: __SerdeContext
): ListEngineVersionsOutput => {
  return {
    EngineVersions:
      output.EngineVersions !== undefined && output.EngineVersions !== null
        ? deserializeAws_json1_1EngineVersionsList(output.EngineVersions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListNamedQueriesOutput = (output: any, context: __SerdeContext): ListNamedQueriesOutput => {
  return {
    NamedQueryIds:
      output.NamedQueryIds !== undefined && output.NamedQueryIds !== null
        ? deserializeAws_json1_1NamedQueryIdList(output.NamedQueryIds, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListPreparedStatementsOutput = (
  output: any,
  context: __SerdeContext
): ListPreparedStatementsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    PreparedStatements:
      output.PreparedStatements !== undefined && output.PreparedStatements !== null
        ? deserializeAws_json1_1PreparedStatementsList(output.PreparedStatements, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListQueryExecutionsOutput = (
  output: any,
  context: __SerdeContext
): ListQueryExecutionsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    QueryExecutionIds:
      output.QueryExecutionIds !== undefined && output.QueryExecutionIds !== null
        ? deserializeAws_json1_1QueryExecutionIdList(output.QueryExecutionIds, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTableMetadataOutput = (
  output: any,
  context: __SerdeContext
): ListTableMetadataOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    TableMetadataList:
      output.TableMetadataList !== undefined && output.TableMetadataList !== null
        ? deserializeAws_json1_1TableMetadataList(output.TableMetadataList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListWorkGroupsOutput = (output: any, context: __SerdeContext): ListWorkGroupsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    WorkGroups:
      output.WorkGroups !== undefined && output.WorkGroups !== null
        ? deserializeAws_json1_1WorkGroupsList(output.WorkGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MetadataException = (output: any, context: __SerdeContext): MetadataException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1NamedQuery = (output: any, context: __SerdeContext): NamedQuery => {
  return {
    Database: __expectString(output.Database),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    NamedQueryId: __expectString(output.NamedQueryId),
    QueryString: __expectString(output.QueryString),
    WorkGroup: __expectString(output.WorkGroup),
  } as any;
};

const deserializeAws_json1_1NamedQueryIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1NamedQueryList = (output: any, context: __SerdeContext): NamedQuery[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1NamedQuery(entry, context);
    });
};

const deserializeAws_json1_1ParametersMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1PreparedStatement = (output: any, context: __SerdeContext): PreparedStatement => {
  return {
    Description: __expectString(output.Description),
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    QueryStatement: __expectString(output.QueryStatement),
    StatementName: __expectString(output.StatementName),
    WorkGroupName: __expectString(output.WorkGroupName),
  } as any;
};

const deserializeAws_json1_1PreparedStatementsList = (
  output: any,
  context: __SerdeContext
): PreparedStatementSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PreparedStatementSummary(entry, context);
    });
};

const deserializeAws_json1_1PreparedStatementSummary = (
  output: any,
  context: __SerdeContext
): PreparedStatementSummary => {
  return {
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    StatementName: __expectString(output.StatementName),
  } as any;
};

const deserializeAws_json1_1QueryExecution = (output: any, context: __SerdeContext): QueryExecution => {
  return {
    EngineVersion:
      output.EngineVersion !== undefined && output.EngineVersion !== null
        ? deserializeAws_json1_1EngineVersion(output.EngineVersion, context)
        : undefined,
    Query: __expectString(output.Query),
    QueryExecutionContext:
      output.QueryExecutionContext !== undefined && output.QueryExecutionContext !== null
        ? deserializeAws_json1_1QueryExecutionContext(output.QueryExecutionContext, context)
        : undefined,
    QueryExecutionId: __expectString(output.QueryExecutionId),
    ResultConfiguration:
      output.ResultConfiguration !== undefined && output.ResultConfiguration !== null
        ? deserializeAws_json1_1ResultConfiguration(output.ResultConfiguration, context)
        : undefined,
    StatementType: __expectString(output.StatementType),
    Statistics:
      output.Statistics !== undefined && output.Statistics !== null
        ? deserializeAws_json1_1QueryExecutionStatistics(output.Statistics, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1QueryExecutionStatus(output.Status, context)
        : undefined,
    WorkGroup: __expectString(output.WorkGroup),
  } as any;
};

const deserializeAws_json1_1QueryExecutionContext = (output: any, context: __SerdeContext): QueryExecutionContext => {
  return {
    Catalog: __expectString(output.Catalog),
    Database: __expectString(output.Database),
  } as any;
};

const deserializeAws_json1_1QueryExecutionIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1QueryExecutionList = (output: any, context: __SerdeContext): QueryExecution[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1QueryExecution(entry, context);
    });
};

const deserializeAws_json1_1QueryExecutionStatistics = (
  output: any,
  context: __SerdeContext
): QueryExecutionStatistics => {
  return {
    DataManifestLocation: __expectString(output.DataManifestLocation),
    DataScannedInBytes: __expectInt(output.DataScannedInBytes),
    EngineExecutionTimeInMillis: __expectInt(output.EngineExecutionTimeInMillis),
    QueryPlanningTimeInMillis: __expectInt(output.QueryPlanningTimeInMillis),
    QueryQueueTimeInMillis: __expectInt(output.QueryQueueTimeInMillis),
    ServiceProcessingTimeInMillis: __expectInt(output.ServiceProcessingTimeInMillis),
    TotalExecutionTimeInMillis: __expectInt(output.TotalExecutionTimeInMillis),
  } as any;
};

const deserializeAws_json1_1QueryExecutionStatus = (output: any, context: __SerdeContext): QueryExecutionStatus => {
  return {
    CompletionDateTime:
      output.CompletionDateTime !== undefined && output.CompletionDateTime !== null
        ? new Date(Math.round(output.CompletionDateTime * 1000))
        : undefined,
    State: __expectString(output.State),
    StateChangeReason: __expectString(output.StateChangeReason),
    SubmissionDateTime:
      output.SubmissionDateTime !== undefined && output.SubmissionDateTime !== null
        ? new Date(Math.round(output.SubmissionDateTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    ResourceName: __expectString(output.ResourceName),
  } as any;
};

const deserializeAws_json1_1ResultConfiguration = (output: any, context: __SerdeContext): ResultConfiguration => {
  return {
    EncryptionConfiguration:
      output.EncryptionConfiguration !== undefined && output.EncryptionConfiguration !== null
        ? deserializeAws_json1_1EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    OutputLocation: __expectString(output.OutputLocation),
  } as any;
};

const deserializeAws_json1_1ResultSet = (output: any, context: __SerdeContext): ResultSet => {
  return {
    ResultSetMetadata:
      output.ResultSetMetadata !== undefined && output.ResultSetMetadata !== null
        ? deserializeAws_json1_1ResultSetMetadata(output.ResultSetMetadata, context)
        : undefined,
    Rows:
      output.Rows !== undefined && output.Rows !== null
        ? deserializeAws_json1_1RowList(output.Rows, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResultSetMetadata = (output: any, context: __SerdeContext): ResultSetMetadata => {
  return {
    ColumnInfo:
      output.ColumnInfo !== undefined && output.ColumnInfo !== null
        ? deserializeAws_json1_1ColumnInfoList(output.ColumnInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Row = (output: any, context: __SerdeContext): Row => {
  return {
    Data:
      output.Data !== undefined && output.Data !== null
        ? deserializeAws_json1_1datumList(output.Data, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RowList = (output: any, context: __SerdeContext): Row[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Row(entry, context);
    });
};

const deserializeAws_json1_1StartQueryExecutionOutput = (
  output: any,
  context: __SerdeContext
): StartQueryExecutionOutput => {
  return {
    QueryExecutionId: __expectString(output.QueryExecutionId),
  } as any;
};

const deserializeAws_json1_1StopQueryExecutionOutput = (
  output: any,
  context: __SerdeContext
): StopQueryExecutionOutput => {
  return {} as any;
};

const deserializeAws_json1_1TableMetadata = (output: any, context: __SerdeContext): TableMetadata => {
  return {
    Columns:
      output.Columns !== undefined && output.Columns !== null
        ? deserializeAws_json1_1ColumnList(output.Columns, context)
        : undefined,
    CreateTime:
      output.CreateTime !== undefined && output.CreateTime !== null
        ? new Date(Math.round(output.CreateTime * 1000))
        : undefined,
    LastAccessTime:
      output.LastAccessTime !== undefined && output.LastAccessTime !== null
        ? new Date(Math.round(output.LastAccessTime * 1000))
        : undefined,
    Name: __expectString(output.Name),
    Parameters:
      output.Parameters !== undefined && output.Parameters !== null
        ? deserializeAws_json1_1ParametersMap(output.Parameters, context)
        : undefined,
    PartitionKeys:
      output.PartitionKeys !== undefined && output.PartitionKeys !== null
        ? deserializeAws_json1_1ColumnList(output.PartitionKeys, context)
        : undefined,
    TableType: __expectString(output.TableType),
  } as any;
};

const deserializeAws_json1_1TableMetadataList = (output: any, context: __SerdeContext): TableMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TableMetadata(entry, context);
    });
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

const deserializeAws_json1_1TagResourceOutput = (output: any, context: __SerdeContext): TagResourceOutput => {
  return {} as any;
};

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  return {
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_json1_1UnprocessedNamedQueryId = (
  output: any,
  context: __SerdeContext
): UnprocessedNamedQueryId => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    NamedQueryId: __expectString(output.NamedQueryId),
  } as any;
};

const deserializeAws_json1_1UnprocessedNamedQueryIdList = (
  output: any,
  context: __SerdeContext
): UnprocessedNamedQueryId[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UnprocessedNamedQueryId(entry, context);
    });
};

const deserializeAws_json1_1UnprocessedQueryExecutionId = (
  output: any,
  context: __SerdeContext
): UnprocessedQueryExecutionId => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    QueryExecutionId: __expectString(output.QueryExecutionId),
  } as any;
};

const deserializeAws_json1_1UnprocessedQueryExecutionIdList = (
  output: any,
  context: __SerdeContext
): UnprocessedQueryExecutionId[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UnprocessedQueryExecutionId(entry, context);
    });
};

const deserializeAws_json1_1UntagResourceOutput = (output: any, context: __SerdeContext): UntagResourceOutput => {
  return {} as any;
};

const deserializeAws_json1_1UpdateDataCatalogOutput = (
  output: any,
  context: __SerdeContext
): UpdateDataCatalogOutput => {
  return {} as any;
};

const deserializeAws_json1_1UpdatePreparedStatementOutput = (
  output: any,
  context: __SerdeContext
): UpdatePreparedStatementOutput => {
  return {} as any;
};

const deserializeAws_json1_1UpdateWorkGroupOutput = (output: any, context: __SerdeContext): UpdateWorkGroupOutput => {
  return {} as any;
};

const deserializeAws_json1_1WorkGroup = (output: any, context: __SerdeContext): WorkGroup => {
  return {
    Configuration:
      output.Configuration !== undefined && output.Configuration !== null
        ? deserializeAws_json1_1WorkGroupConfiguration(output.Configuration, context)
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1WorkGroupConfiguration = (output: any, context: __SerdeContext): WorkGroupConfiguration => {
  return {
    BytesScannedCutoffPerQuery: __expectInt(output.BytesScannedCutoffPerQuery),
    EnforceWorkGroupConfiguration: __expectBoolean(output.EnforceWorkGroupConfiguration),
    EngineVersion:
      output.EngineVersion !== undefined && output.EngineVersion !== null
        ? deserializeAws_json1_1EngineVersion(output.EngineVersion, context)
        : undefined,
    PublishCloudWatchMetricsEnabled: __expectBoolean(output.PublishCloudWatchMetricsEnabled),
    RequesterPaysEnabled: __expectBoolean(output.RequesterPaysEnabled),
    ResultConfiguration:
      output.ResultConfiguration !== undefined && output.ResultConfiguration !== null
        ? deserializeAws_json1_1ResultConfiguration(output.ResultConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1WorkGroupsList = (output: any, context: __SerdeContext): WorkGroupSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WorkGroupSummary(entry, context);
    });
};

const deserializeAws_json1_1WorkGroupSummary = (output: any, context: __SerdeContext): WorkGroupSummary => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    Description: __expectString(output.Description),
    EngineVersion:
      output.EngineVersion !== undefined && output.EngineVersion !== null
        ? deserializeAws_json1_1EngineVersion(output.EngineVersion, context)
        : undefined,
    Name: __expectString(output.Name),
    State: __expectString(output.State),
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
