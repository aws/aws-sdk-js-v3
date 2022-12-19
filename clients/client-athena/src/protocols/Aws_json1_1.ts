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
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { BatchGetNamedQueryCommandInput, BatchGetNamedQueryCommandOutput } from "../commands/BatchGetNamedQueryCommand";
import {
  BatchGetPreparedStatementCommandInput,
  BatchGetPreparedStatementCommandOutput,
} from "../commands/BatchGetPreparedStatementCommand";
import {
  BatchGetQueryExecutionCommandInput,
  BatchGetQueryExecutionCommandOutput,
} from "../commands/BatchGetQueryExecutionCommand";
import { CreateDataCatalogCommandInput, CreateDataCatalogCommandOutput } from "../commands/CreateDataCatalogCommand";
import { CreateNamedQueryCommandInput, CreateNamedQueryCommandOutput } from "../commands/CreateNamedQueryCommand";
import { CreateNotebookCommandInput, CreateNotebookCommandOutput } from "../commands/CreateNotebookCommand";
import {
  CreatePreparedStatementCommandInput,
  CreatePreparedStatementCommandOutput,
} from "../commands/CreatePreparedStatementCommand";
import {
  CreatePresignedNotebookUrlCommandInput,
  CreatePresignedNotebookUrlCommandOutput,
} from "../commands/CreatePresignedNotebookUrlCommand";
import { CreateWorkGroupCommandInput, CreateWorkGroupCommandOutput } from "../commands/CreateWorkGroupCommand";
import { DeleteDataCatalogCommandInput, DeleteDataCatalogCommandOutput } from "../commands/DeleteDataCatalogCommand";
import { DeleteNamedQueryCommandInput, DeleteNamedQueryCommandOutput } from "../commands/DeleteNamedQueryCommand";
import { DeleteNotebookCommandInput, DeleteNotebookCommandOutput } from "../commands/DeleteNotebookCommand";
import {
  DeletePreparedStatementCommandInput,
  DeletePreparedStatementCommandOutput,
} from "../commands/DeletePreparedStatementCommand";
import { DeleteWorkGroupCommandInput, DeleteWorkGroupCommandOutput } from "../commands/DeleteWorkGroupCommand";
import { ExportNotebookCommandInput, ExportNotebookCommandOutput } from "../commands/ExportNotebookCommand";
import {
  GetCalculationExecutionCodeCommandInput,
  GetCalculationExecutionCodeCommandOutput,
} from "../commands/GetCalculationExecutionCodeCommand";
import {
  GetCalculationExecutionCommandInput,
  GetCalculationExecutionCommandOutput,
} from "../commands/GetCalculationExecutionCommand";
import {
  GetCalculationExecutionStatusCommandInput,
  GetCalculationExecutionStatusCommandOutput,
} from "../commands/GetCalculationExecutionStatusCommand";
import { GetDatabaseCommandInput, GetDatabaseCommandOutput } from "../commands/GetDatabaseCommand";
import { GetDataCatalogCommandInput, GetDataCatalogCommandOutput } from "../commands/GetDataCatalogCommand";
import { GetNamedQueryCommandInput, GetNamedQueryCommandOutput } from "../commands/GetNamedQueryCommand";
import {
  GetNotebookMetadataCommandInput,
  GetNotebookMetadataCommandOutput,
} from "../commands/GetNotebookMetadataCommand";
import {
  GetPreparedStatementCommandInput,
  GetPreparedStatementCommandOutput,
} from "../commands/GetPreparedStatementCommand";
import { GetQueryExecutionCommandInput, GetQueryExecutionCommandOutput } from "../commands/GetQueryExecutionCommand";
import { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "../commands/GetQueryResultsCommand";
import {
  GetQueryRuntimeStatisticsCommandInput,
  GetQueryRuntimeStatisticsCommandOutput,
} from "../commands/GetQueryRuntimeStatisticsCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "../commands/GetSessionCommand";
import { GetSessionStatusCommandInput, GetSessionStatusCommandOutput } from "../commands/GetSessionStatusCommand";
import { GetTableMetadataCommandInput, GetTableMetadataCommandOutput } from "../commands/GetTableMetadataCommand";
import { GetWorkGroupCommandInput, GetWorkGroupCommandOutput } from "../commands/GetWorkGroupCommand";
import { ImportNotebookCommandInput, ImportNotebookCommandOutput } from "../commands/ImportNotebookCommand";
import {
  ListApplicationDPUSizesCommandInput,
  ListApplicationDPUSizesCommandOutput,
} from "../commands/ListApplicationDPUSizesCommand";
import {
  ListCalculationExecutionsCommandInput,
  ListCalculationExecutionsCommandOutput,
} from "../commands/ListCalculationExecutionsCommand";
import { ListDatabasesCommandInput, ListDatabasesCommandOutput } from "../commands/ListDatabasesCommand";
import { ListDataCatalogsCommandInput, ListDataCatalogsCommandOutput } from "../commands/ListDataCatalogsCommand";
import { ListEngineVersionsCommandInput, ListEngineVersionsCommandOutput } from "../commands/ListEngineVersionsCommand";
import { ListExecutorsCommandInput, ListExecutorsCommandOutput } from "../commands/ListExecutorsCommand";
import { ListNamedQueriesCommandInput, ListNamedQueriesCommandOutput } from "../commands/ListNamedQueriesCommand";
import {
  ListNotebookMetadataCommandInput,
  ListNotebookMetadataCommandOutput,
} from "../commands/ListNotebookMetadataCommand";
import {
  ListNotebookSessionsCommandInput,
  ListNotebookSessionsCommandOutput,
} from "../commands/ListNotebookSessionsCommand";
import {
  ListPreparedStatementsCommandInput,
  ListPreparedStatementsCommandOutput,
} from "../commands/ListPreparedStatementsCommand";
import {
  ListQueryExecutionsCommandInput,
  ListQueryExecutionsCommandOutput,
} from "../commands/ListQueryExecutionsCommand";
import { ListSessionsCommandInput, ListSessionsCommandOutput } from "../commands/ListSessionsCommand";
import { ListTableMetadataCommandInput, ListTableMetadataCommandOutput } from "../commands/ListTableMetadataCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListWorkGroupsCommandInput, ListWorkGroupsCommandOutput } from "../commands/ListWorkGroupsCommand";
import {
  StartCalculationExecutionCommandInput,
  StartCalculationExecutionCommandOutput,
} from "../commands/StartCalculationExecutionCommand";
import {
  StartQueryExecutionCommandInput,
  StartQueryExecutionCommandOutput,
} from "../commands/StartQueryExecutionCommand";
import { StartSessionCommandInput, StartSessionCommandOutput } from "../commands/StartSessionCommand";
import {
  StopCalculationExecutionCommandInput,
  StopCalculationExecutionCommandOutput,
} from "../commands/StopCalculationExecutionCommand";
import { StopQueryExecutionCommandInput, StopQueryExecutionCommandOutput } from "../commands/StopQueryExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { TerminateSessionCommandInput, TerminateSessionCommandOutput } from "../commands/TerminateSessionCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateDataCatalogCommandInput, UpdateDataCatalogCommandOutput } from "../commands/UpdateDataCatalogCommand";
import { UpdateNamedQueryCommandInput, UpdateNamedQueryCommandOutput } from "../commands/UpdateNamedQueryCommand";
import { UpdateNotebookCommandInput, UpdateNotebookCommandOutput } from "../commands/UpdateNotebookCommand";
import {
  UpdateNotebookMetadataCommandInput,
  UpdateNotebookMetadataCommandOutput,
} from "../commands/UpdateNotebookMetadataCommand";
import {
  UpdatePreparedStatementCommandInput,
  UpdatePreparedStatementCommandOutput,
} from "../commands/UpdatePreparedStatementCommand";
import { UpdateWorkGroupCommandInput, UpdateWorkGroupCommandOutput } from "../commands/UpdateWorkGroupCommand";
import { AthenaServiceException as __BaseException } from "../models/AthenaServiceException";
import {
  AclConfiguration,
  ApplicationDPUSizes,
  AthenaError,
  BatchGetNamedQueryInput,
  BatchGetNamedQueryOutput,
  BatchGetPreparedStatementInput,
  BatchGetPreparedStatementOutput,
  BatchGetQueryExecutionInput,
  BatchGetQueryExecutionOutput,
  CalculationConfiguration,
  CalculationResult,
  CalculationStatistics,
  CalculationStatus,
  CalculationSummary,
  Column,
  ColumnInfo,
  CreateDataCatalogInput,
  CreateDataCatalogOutput,
  CreateNamedQueryInput,
  CreateNamedQueryOutput,
  CreateNotebookInput,
  CreateNotebookOutput,
  CreatePreparedStatementInput,
  CreatePreparedStatementOutput,
  CreatePresignedNotebookUrlRequest,
  CreatePresignedNotebookUrlResponse,
  CreateWorkGroupInput,
  CreateWorkGroupOutput,
  CustomerContentEncryptionConfiguration,
  Database,
  DataCatalog,
  DataCatalogSummary,
  Datum,
  DeleteDataCatalogInput,
  DeleteDataCatalogOutput,
  DeleteNamedQueryInput,
  DeleteNamedQueryOutput,
  DeleteNotebookInput,
  DeleteNotebookOutput,
  DeletePreparedStatementInput,
  DeletePreparedStatementOutput,
  DeleteWorkGroupInput,
  DeleteWorkGroupOutput,
  EncryptionConfiguration,
  EngineConfiguration,
  EngineVersion,
  ExecutorsSummary,
  ExportNotebookInput,
  ExportNotebookOutput,
  FilterDefinition,
  GetCalculationExecutionCodeRequest,
  GetCalculationExecutionCodeResponse,
  GetCalculationExecutionRequest,
  GetCalculationExecutionResponse,
  GetCalculationExecutionStatusRequest,
  GetCalculationExecutionStatusResponse,
  GetDatabaseInput,
  GetDatabaseOutput,
  GetDataCatalogInput,
  GetDataCatalogOutput,
  GetNamedQueryInput,
  GetNamedQueryOutput,
  GetNotebookMetadataInput,
  GetNotebookMetadataOutput,
  GetPreparedStatementInput,
  GetPreparedStatementOutput,
  GetQueryExecutionInput,
  GetQueryExecutionOutput,
  GetQueryResultsInput,
  GetQueryResultsOutput,
  GetQueryRuntimeStatisticsInput,
  GetQueryRuntimeStatisticsOutput,
  GetSessionRequest,
  GetSessionResponse,
  GetSessionStatusRequest,
  GetSessionStatusResponse,
  GetTableMetadataInput,
  GetTableMetadataOutput,
  GetWorkGroupInput,
  GetWorkGroupOutput,
  ImportNotebookInput,
  ImportNotebookOutput,
  InternalServerException,
  InvalidRequestException,
  ListApplicationDPUSizesInput,
  ListApplicationDPUSizesOutput,
  ListCalculationExecutionsRequest,
  ListCalculationExecutionsResponse,
  ListDatabasesInput,
  ListDatabasesOutput,
  ListDataCatalogsInput,
  ListDataCatalogsOutput,
  ListEngineVersionsInput,
  ListEngineVersionsOutput,
  ListExecutorsRequest,
  ListExecutorsResponse,
  ListNamedQueriesInput,
  ListNamedQueriesOutput,
  ListNotebookMetadataInput,
  ListNotebookMetadataOutput,
  ListNotebookSessionsRequest,
  ListNotebookSessionsResponse,
  ListPreparedStatementsInput,
  ListPreparedStatementsOutput,
  ListQueryExecutionsInput,
  ListQueryExecutionsOutput,
  ListSessionsRequest,
  ListSessionsResponse,
  ListTableMetadataInput,
  ListTableMetadataOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListWorkGroupsInput,
  ListWorkGroupsOutput,
  MetadataException,
  NamedQuery,
  NotebookMetadata,
  NotebookSessionSummary,
  PreparedStatement,
  PreparedStatementSummary,
  QueryExecution,
  QueryExecutionContext,
  QueryExecutionStatistics,
  QueryExecutionStatus,
  QueryRuntimeStatistics,
  QueryRuntimeStatisticsRows,
  QueryRuntimeStatisticsTimeline,
  QueryStage,
  QueryStagePlanNode,
  ResourceNotFoundException,
  ResultConfiguration,
  ResultConfigurationUpdates,
  ResultReuseByAgeConfiguration,
  ResultReuseConfiguration,
  ResultReuseInformation,
  ResultSet,
  ResultSetMetadata,
  Row,
  SessionAlreadyExistsException,
  SessionConfiguration,
  SessionStatistics,
  SessionStatus,
  SessionSummary,
  StartCalculationExecutionRequest,
  StartCalculationExecutionResponse,
  StartQueryExecutionInput,
  StartQueryExecutionOutput,
  StartSessionRequest,
  StartSessionResponse,
  StopCalculationExecutionRequest,
  StopCalculationExecutionResponse,
  StopQueryExecutionInput,
  StopQueryExecutionOutput,
  TableMetadata,
  Tag,
  TagResourceInput,
  TagResourceOutput,
  TerminateSessionRequest,
  TerminateSessionResponse,
  TooManyRequestsException,
  UnprocessedNamedQueryId,
  UnprocessedPreparedStatementName,
  UnprocessedQueryExecutionId,
  UntagResourceInput,
  UntagResourceOutput,
  UpdateDataCatalogInput,
  UpdateDataCatalogOutput,
  UpdateNamedQueryInput,
  UpdateNamedQueryOutput,
  UpdateNotebookInput,
  UpdateNotebookMetadataInput,
  UpdateNotebookMetadataOutput,
  UpdateNotebookOutput,
  UpdatePreparedStatementInput,
  UpdatePreparedStatementOutput,
  UpdateWorkGroupInput,
  UpdateWorkGroupOutput,
  WorkGroup,
  WorkGroupConfiguration,
  WorkGroupConfigurationUpdates,
  WorkGroupSummary,
} from "../models/models_0";

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

export const serializeAws_json1_1BatchGetPreparedStatementCommand = async (
  input: BatchGetPreparedStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.BatchGetPreparedStatement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGetPreparedStatementInput(input, context));
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

export const serializeAws_json1_1CreateNotebookCommand = async (
  input: CreateNotebookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.CreateNotebook",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateNotebookInput(input, context));
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

export const serializeAws_json1_1CreatePresignedNotebookUrlCommand = async (
  input: CreatePresignedNotebookUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.CreatePresignedNotebookUrl",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePresignedNotebookUrlRequest(input, context));
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

export const serializeAws_json1_1DeleteNotebookCommand = async (
  input: DeleteNotebookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.DeleteNotebook",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteNotebookInput(input, context));
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

export const serializeAws_json1_1ExportNotebookCommand = async (
  input: ExportNotebookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ExportNotebook",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ExportNotebookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCalculationExecutionCommand = async (
  input: GetCalculationExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetCalculationExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCalculationExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCalculationExecutionCodeCommand = async (
  input: GetCalculationExecutionCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetCalculationExecutionCode",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCalculationExecutionCodeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCalculationExecutionStatusCommand = async (
  input: GetCalculationExecutionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetCalculationExecutionStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCalculationExecutionStatusRequest(input, context));
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

export const serializeAws_json1_1GetNotebookMetadataCommand = async (
  input: GetNotebookMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetNotebookMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetNotebookMetadataInput(input, context));
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

export const serializeAws_json1_1GetQueryRuntimeStatisticsCommand = async (
  input: GetQueryRuntimeStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetQueryRuntimeStatistics",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetQueryRuntimeStatisticsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSessionCommand = async (
  input: GetSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSessionStatusCommand = async (
  input: GetSessionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.GetSessionStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSessionStatusRequest(input, context));
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

export const serializeAws_json1_1ImportNotebookCommand = async (
  input: ImportNotebookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ImportNotebook",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportNotebookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListApplicationDPUSizesCommand = async (
  input: ListApplicationDPUSizesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListApplicationDPUSizes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListApplicationDPUSizesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCalculationExecutionsCommand = async (
  input: ListCalculationExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListCalculationExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCalculationExecutionsRequest(input, context));
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

export const serializeAws_json1_1ListExecutorsCommand = async (
  input: ListExecutorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListExecutors",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListExecutorsRequest(input, context));
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

export const serializeAws_json1_1ListNotebookMetadataCommand = async (
  input: ListNotebookMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListNotebookMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListNotebookMetadataInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListNotebookSessionsCommand = async (
  input: ListNotebookSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListNotebookSessions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListNotebookSessionsRequest(input, context));
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

export const serializeAws_json1_1ListSessionsCommand = async (
  input: ListSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.ListSessions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSessionsRequest(input, context));
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

export const serializeAws_json1_1StartCalculationExecutionCommand = async (
  input: StartCalculationExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.StartCalculationExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartCalculationExecutionRequest(input, context));
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

export const serializeAws_json1_1StartSessionCommand = async (
  input: StartSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.StartSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopCalculationExecutionCommand = async (
  input: StopCalculationExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.StopCalculationExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopCalculationExecutionRequest(input, context));
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

export const serializeAws_json1_1TerminateSessionCommand = async (
  input: TerminateSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.TerminateSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TerminateSessionRequest(input, context));
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

export const serializeAws_json1_1UpdateNamedQueryCommand = async (
  input: UpdateNamedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.UpdateNamedQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateNamedQueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateNotebookCommand = async (
  input: UpdateNotebookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.UpdateNotebook",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateNotebookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateNotebookMetadataCommand = async (
  input: UpdateNotebookMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonAthena.UpdateNotebookMetadata",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateNotebookMetadataInput(input, context));
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1BatchGetPreparedStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetPreparedStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGetPreparedStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetPreparedStatementOutput(data, context);
  const response: BatchGetPreparedStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetPreparedStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetPreparedStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateNotebookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotebookCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateNotebookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateNotebookOutput(data, context);
  const response: CreateNotebookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateNotebookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotebookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreatePresignedNotebookUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresignedNotebookUrlCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePresignedNotebookUrlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePresignedNotebookUrlResponse(data, context);
  const response: CreatePresignedNotebookUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePresignedNotebookUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresignedNotebookUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteNotebookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotebookCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteNotebookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteNotebookOutput(data, context);
  const response: DeleteNotebookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteNotebookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotebookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ExportNotebookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportNotebookCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ExportNotebookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ExportNotebookOutput(data, context);
  const response: ExportNotebookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ExportNotebookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportNotebookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetCalculationExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCalculationExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCalculationExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCalculationExecutionResponse(data, context);
  const response: GetCalculationExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCalculationExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCalculationExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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

export const deserializeAws_json1_1GetCalculationExecutionCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCalculationExecutionCodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCalculationExecutionCodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCalculationExecutionCodeResponse(data, context);
  const response: GetCalculationExecutionCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCalculationExecutionCodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCalculationExecutionCodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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

export const deserializeAws_json1_1GetCalculationExecutionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCalculationExecutionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetCalculationExecutionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCalculationExecutionStatusResponse(data, context);
  const response: GetCalculationExecutionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCalculationExecutionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCalculationExecutionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "MetadataException":
    case "com.amazonaws.athena#MetadataException":
      throw await deserializeAws_json1_1MetadataExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetNotebookMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNotebookMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetNotebookMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetNotebookMetadataOutput(data, context);
  const response: GetNotebookMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetNotebookMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNotebookMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetQueryRuntimeStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryRuntimeStatisticsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetQueryRuntimeStatisticsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetQueryRuntimeStatisticsOutput(data, context);
  const response: GetQueryRuntimeStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetQueryRuntimeStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryRuntimeStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSessionResponse(data, context);
  const response: GetSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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

export const deserializeAws_json1_1GetSessionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSessionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSessionStatusResponse(data, context);
  const response: GetSessionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSessionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "MetadataException":
    case "com.amazonaws.athena#MetadataException":
      throw await deserializeAws_json1_1MetadataExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ImportNotebookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportNotebookCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportNotebookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportNotebookOutput(data, context);
  const response: ImportNotebookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportNotebookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportNotebookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListApplicationDPUSizesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationDPUSizesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListApplicationDPUSizesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListApplicationDPUSizesOutput(data, context);
  const response: ListApplicationDPUSizesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListApplicationDPUSizesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationDPUSizesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListCalculationExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCalculationExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCalculationExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCalculationExecutionsResponse(data, context);
  const response: ListCalculationExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCalculationExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCalculationExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "MetadataException":
    case "com.amazonaws.athena#MetadataException":
      throw await deserializeAws_json1_1MetadataExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListExecutorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExecutorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListExecutorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListExecutorsResponse(data, context);
  const response: ListExecutorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListExecutorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExecutorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListNotebookMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotebookMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListNotebookMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListNotebookMetadataOutput(data, context);
  const response: ListNotebookMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListNotebookMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotebookMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListNotebookSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotebookSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListNotebookSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListNotebookSessionsResponse(data, context);
  const response: ListNotebookSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListNotebookSessionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotebookSessionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSessionsResponse(data, context);
  const response: ListSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSessionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSessionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "MetadataException":
    case "com.amazonaws.athena#MetadataException":
      throw await deserializeAws_json1_1MetadataExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartCalculationExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCalculationExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartCalculationExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartCalculationExecutionResponse(data, context);
  const response: StartCalculationExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartCalculationExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCalculationExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartSessionResponse(data, context);
  const response: StartSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "SessionAlreadyExistsException":
    case "com.amazonaws.athena#SessionAlreadyExistsException":
      throw await deserializeAws_json1_1SessionAlreadyExistsExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopCalculationExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCalculationExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopCalculationExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopCalculationExecutionResponse(data, context);
  const response: StopCalculationExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopCalculationExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCalculationExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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

export const deserializeAws_json1_1TerminateSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TerminateSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TerminateSessionResponse(data, context);
  const response: TerminateSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TerminateSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateNamedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNamedQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateNamedQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateNamedQueryOutput(data, context);
  const response: UpdateNamedQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateNamedQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNamedQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateNotebookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotebookCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateNotebookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateNotebookOutput(data, context);
  const response: UpdateNotebookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateNotebookCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotebookCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateNotebookMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotebookMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateNotebookMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateNotebookMetadataOutput(data, context);
  const response: UpdateNotebookMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateNotebookMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotebookMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1MetadataExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MetadataException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MetadataException(body, context);
  const exception = new MetadataException({
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

const deserializeAws_json1_1SessionAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SessionAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SessionAlreadyExistsException(body, context);
  const exception = new SessionAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyRequestsException(body, context);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AclConfiguration = (input: AclConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.S3AclOption != null && { S3AclOption: input.S3AclOption }),
  };
};

const serializeAws_json1_1BatchGetNamedQueryInput = (input: BatchGetNamedQueryInput, context: __SerdeContext): any => {
  return {
    ...(input.NamedQueryIds != null && {
      NamedQueryIds: serializeAws_json1_1NamedQueryIdList(input.NamedQueryIds, context),
    }),
  };
};

const serializeAws_json1_1BatchGetPreparedStatementInput = (
  input: BatchGetPreparedStatementInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.PreparedStatementNames != null && {
      PreparedStatementNames: serializeAws_json1_1PreparedStatementNameList(input.PreparedStatementNames, context),
    }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1BatchGetQueryExecutionInput = (
  input: BatchGetQueryExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.QueryExecutionIds != null && {
      QueryExecutionIds: serializeAws_json1_1QueryExecutionIdList(input.QueryExecutionIds, context),
    }),
  };
};

const serializeAws_json1_1CalculationConfiguration = (
  input: CalculationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CodeBlock != null && { CodeBlock: input.CodeBlock }),
  };
};

const serializeAws_json1_1CreateDataCatalogInput = (input: CreateDataCatalogInput, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Parameters != null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1CreateNamedQueryInput = (input: CreateNamedQueryInput, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.QueryString != null && { QueryString: input.QueryString }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1CreateNotebookInput = (input: CreateNotebookInput, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1CreatePreparedStatementInput = (
  input: CreatePreparedStatementInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.QueryStatement != null && { QueryStatement: input.QueryStatement }),
    ...(input.StatementName != null && { StatementName: input.StatementName }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1CreatePresignedNotebookUrlRequest = (
  input: CreatePresignedNotebookUrlRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

const serializeAws_json1_1CreateWorkGroupInput = (input: CreateWorkGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.Configuration != null && {
      Configuration: serializeAws_json1_1WorkGroupConfiguration(input.Configuration, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CustomerContentEncryptionConfiguration = (
  input: CustomerContentEncryptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKey != null && { KmsKey: input.KmsKey }),
  };
};

const serializeAws_json1_1DeleteDataCatalogInput = (input: DeleteDataCatalogInput, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteNamedQueryInput = (input: DeleteNamedQueryInput, context: __SerdeContext): any => {
  return {
    NamedQueryId: input.NamedQueryId ?? generateIdempotencyToken(),
  };
};

const serializeAws_json1_1DeleteNotebookInput = (input: DeleteNotebookInput, context: __SerdeContext): any => {
  return {
    ...(input.NotebookId != null && { NotebookId: input.NotebookId }),
  };
};

const serializeAws_json1_1DeletePreparedStatementInput = (
  input: DeletePreparedStatementInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.StatementName != null && { StatementName: input.StatementName }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1DeleteWorkGroupInput = (input: DeleteWorkGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.RecursiveDeleteOption != null && { RecursiveDeleteOption: input.RecursiveDeleteOption }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionOption != null && { EncryptionOption: input.EncryptionOption }),
    ...(input.KmsKey != null && { KmsKey: input.KmsKey }),
  };
};

const serializeAws_json1_1EngineConfiguration = (input: EngineConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalConfigs != null && {
      AdditionalConfigs: serializeAws_json1_1ParametersMap(input.AdditionalConfigs, context),
    }),
    ...(input.CoordinatorDpuSize != null && { CoordinatorDpuSize: input.CoordinatorDpuSize }),
    ...(input.DefaultExecutorDpuSize != null && { DefaultExecutorDpuSize: input.DefaultExecutorDpuSize }),
    ...(input.MaxConcurrentDpus != null && { MaxConcurrentDpus: input.MaxConcurrentDpus }),
  };
};

const serializeAws_json1_1EngineVersion = (input: EngineVersion, context: __SerdeContext): any => {
  return {
    ...(input.EffectiveEngineVersion != null && { EffectiveEngineVersion: input.EffectiveEngineVersion }),
    ...(input.SelectedEngineVersion != null && { SelectedEngineVersion: input.SelectedEngineVersion }),
  };
};

const serializeAws_json1_1ExecutionParameters = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ExportNotebookInput = (input: ExportNotebookInput, context: __SerdeContext): any => {
  return {
    ...(input.NotebookId != null && { NotebookId: input.NotebookId }),
  };
};

const serializeAws_json1_1FilterDefinition = (input: FilterDefinition, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetCalculationExecutionCodeRequest = (
  input: GetCalculationExecutionCodeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CalculationExecutionId != null && { CalculationExecutionId: input.CalculationExecutionId }),
  };
};

const serializeAws_json1_1GetCalculationExecutionRequest = (
  input: GetCalculationExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CalculationExecutionId != null && { CalculationExecutionId: input.CalculationExecutionId }),
  };
};

const serializeAws_json1_1GetCalculationExecutionStatusRequest = (
  input: GetCalculationExecutionStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CalculationExecutionId != null && { CalculationExecutionId: input.CalculationExecutionId }),
  };
};

const serializeAws_json1_1GetDatabaseInput = (input: GetDatabaseInput, context: __SerdeContext): any => {
  return {
    ...(input.CatalogName != null && { CatalogName: input.CatalogName }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
  };
};

const serializeAws_json1_1GetDataCatalogInput = (input: GetDataCatalogInput, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetNamedQueryInput = (input: GetNamedQueryInput, context: __SerdeContext): any => {
  return {
    ...(input.NamedQueryId != null && { NamedQueryId: input.NamedQueryId }),
  };
};

const serializeAws_json1_1GetNotebookMetadataInput = (
  input: GetNotebookMetadataInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.NotebookId != null && { NotebookId: input.NotebookId }),
  };
};

const serializeAws_json1_1GetPreparedStatementInput = (
  input: GetPreparedStatementInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.StatementName != null && { StatementName: input.StatementName }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1GetQueryExecutionInput = (input: GetQueryExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.QueryExecutionId != null && { QueryExecutionId: input.QueryExecutionId }),
  };
};

const serializeAws_json1_1GetQueryResultsInput = (input: GetQueryResultsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.QueryExecutionId != null && { QueryExecutionId: input.QueryExecutionId }),
  };
};

const serializeAws_json1_1GetQueryRuntimeStatisticsInput = (
  input: GetQueryRuntimeStatisticsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.QueryExecutionId != null && { QueryExecutionId: input.QueryExecutionId }),
  };
};

const serializeAws_json1_1GetSessionRequest = (input: GetSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

const serializeAws_json1_1GetSessionStatusRequest = (input: GetSessionStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

const serializeAws_json1_1GetTableMetadataInput = (input: GetTableMetadataInput, context: __SerdeContext): any => {
  return {
    ...(input.CatalogName != null && { CatalogName: input.CatalogName }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1GetWorkGroupInput = (input: GetWorkGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1ImportNotebookInput = (input: ImportNotebookInput, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Payload != null && { Payload: input.Payload }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1ListApplicationDPUSizesInput = (
  input: ListApplicationDPUSizesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListCalculationExecutionsRequest = (
  input: ListCalculationExecutionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SessionId != null && { SessionId: input.SessionId }),
    ...(input.StateFilter != null && { StateFilter: input.StateFilter }),
  };
};

const serializeAws_json1_1ListDatabasesInput = (input: ListDatabasesInput, context: __SerdeContext): any => {
  return {
    ...(input.CatalogName != null && { CatalogName: input.CatalogName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDataCatalogsInput = (input: ListDataCatalogsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListEngineVersionsInput = (input: ListEngineVersionsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListExecutorsRequest = (input: ListExecutorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExecutorStateFilter != null && { ExecutorStateFilter: input.ExecutorStateFilter }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

const serializeAws_json1_1ListNamedQueriesInput = (input: ListNamedQueriesInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1ListNotebookMetadataInput = (
  input: ListNotebookMetadataInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1FilterDefinition(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1ListNotebookSessionsRequest = (
  input: ListNotebookSessionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.NotebookId != null && { NotebookId: input.NotebookId }),
  };
};

const serializeAws_json1_1ListPreparedStatementsInput = (
  input: ListPreparedStatementsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1ListQueryExecutionsInput = (
  input: ListQueryExecutionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1ListSessionsRequest = (input: ListSessionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StateFilter != null && { StateFilter: input.StateFilter }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1ListTableMetadataInput = (input: ListTableMetadataInput, context: __SerdeContext): any => {
  return {
    ...(input.CatalogName != null && { CatalogName: input.CatalogName }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Expression != null && { Expression: input.Expression }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1ListWorkGroupsInput = (input: ListWorkGroupsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1NamedQueryIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ParametersMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1PreparedStatementNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1QueryExecutionContext = (input: QueryExecutionContext, context: __SerdeContext): any => {
  return {
    ...(input.Catalog != null && { Catalog: input.Catalog }),
    ...(input.Database != null && { Database: input.Database }),
  };
};

const serializeAws_json1_1QueryExecutionIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ResultConfiguration = (input: ResultConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AclConfiguration != null && {
      AclConfiguration: serializeAws_json1_1AclConfiguration(input.AclConfiguration, context),
    }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.ExpectedBucketOwner != null && { ExpectedBucketOwner: input.ExpectedBucketOwner }),
    ...(input.OutputLocation != null && { OutputLocation: input.OutputLocation }),
  };
};

const serializeAws_json1_1ResultConfigurationUpdates = (
  input: ResultConfigurationUpdates,
  context: __SerdeContext
): any => {
  return {
    ...(input.AclConfiguration != null && {
      AclConfiguration: serializeAws_json1_1AclConfiguration(input.AclConfiguration, context),
    }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.ExpectedBucketOwner != null && { ExpectedBucketOwner: input.ExpectedBucketOwner }),
    ...(input.OutputLocation != null && { OutputLocation: input.OutputLocation }),
    ...(input.RemoveAclConfiguration != null && { RemoveAclConfiguration: input.RemoveAclConfiguration }),
    ...(input.RemoveEncryptionConfiguration != null && {
      RemoveEncryptionConfiguration: input.RemoveEncryptionConfiguration,
    }),
    ...(input.RemoveExpectedBucketOwner != null && { RemoveExpectedBucketOwner: input.RemoveExpectedBucketOwner }),
    ...(input.RemoveOutputLocation != null && { RemoveOutputLocation: input.RemoveOutputLocation }),
  };
};

const serializeAws_json1_1ResultReuseByAgeConfiguration = (
  input: ResultReuseByAgeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.MaxAgeInMinutes != null && { MaxAgeInMinutes: input.MaxAgeInMinutes }),
  };
};

const serializeAws_json1_1ResultReuseConfiguration = (
  input: ResultReuseConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResultReuseByAgeConfiguration != null && {
      ResultReuseByAgeConfiguration: serializeAws_json1_1ResultReuseByAgeConfiguration(
        input.ResultReuseByAgeConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_json1_1StartCalculationExecutionRequest = (
  input: StartCalculationExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CalculationConfiguration != null && {
      CalculationConfiguration: serializeAws_json1_1CalculationConfiguration(input.CalculationConfiguration, context),
    }),
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.CodeBlock != null && { CodeBlock: input.CodeBlock }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

const serializeAws_json1_1StartQueryExecutionInput = (
  input: StartQueryExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.ExecutionParameters != null && {
      ExecutionParameters: serializeAws_json1_1ExecutionParameters(input.ExecutionParameters, context),
    }),
    ...(input.QueryExecutionContext != null && {
      QueryExecutionContext: serializeAws_json1_1QueryExecutionContext(input.QueryExecutionContext, context),
    }),
    ...(input.QueryString != null && { QueryString: input.QueryString }),
    ...(input.ResultConfiguration != null && {
      ResultConfiguration: serializeAws_json1_1ResultConfiguration(input.ResultConfiguration, context),
    }),
    ...(input.ResultReuseConfiguration != null && {
      ResultReuseConfiguration: serializeAws_json1_1ResultReuseConfiguration(input.ResultReuseConfiguration, context),
    }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1StartSessionRequest = (input: StartSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EngineConfiguration != null && {
      EngineConfiguration: serializeAws_json1_1EngineConfiguration(input.EngineConfiguration, context),
    }),
    ...(input.NotebookVersion != null && { NotebookVersion: input.NotebookVersion }),
    ...(input.SessionIdleTimeoutInMinutes != null && {
      SessionIdleTimeoutInMinutes: input.SessionIdleTimeoutInMinutes,
    }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1StopCalculationExecutionRequest = (
  input: StopCalculationExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CalculationExecutionId != null && { CalculationExecutionId: input.CalculationExecutionId }),
  };
};

const serializeAws_json1_1StopQueryExecutionInput = (input: StopQueryExecutionInput, context: __SerdeContext): any => {
  return {
    QueryExecutionId: input.QueryExecutionId ?? generateIdempotencyToken(),
  };
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

const serializeAws_json1_1TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1TerminateSessionRequest = (input: TerminateSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

const serializeAws_json1_1UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateDataCatalogInput = (input: UpdateDataCatalogInput, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Parameters != null && { Parameters: serializeAws_json1_1ParametersMap(input.Parameters, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1UpdateNamedQueryInput = (input: UpdateNamedQueryInput, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NamedQueryId != null && { NamedQueryId: input.NamedQueryId }),
    ...(input.QueryString != null && { QueryString: input.QueryString }),
  };
};

const serializeAws_json1_1UpdateNotebookInput = (input: UpdateNotebookInput, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.NotebookId != null && { NotebookId: input.NotebookId }),
    ...(input.Payload != null && { Payload: input.Payload }),
    ...(input.SessionId != null && { SessionId: input.SessionId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1UpdateNotebookMetadataInput = (
  input: UpdateNotebookMetadataInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotebookId != null && { NotebookId: input.NotebookId }),
  };
};

const serializeAws_json1_1UpdatePreparedStatementInput = (
  input: UpdatePreparedStatementInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.QueryStatement != null && { QueryStatement: input.QueryStatement }),
    ...(input.StatementName != null && { StatementName: input.StatementName }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1UpdateWorkGroupInput = (input: UpdateWorkGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationUpdates != null && {
      ConfigurationUpdates: serializeAws_json1_1WorkGroupConfigurationUpdates(input.ConfigurationUpdates, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.State != null && { State: input.State }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

const serializeAws_json1_1WorkGroupConfiguration = (input: WorkGroupConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalConfiguration != null && { AdditionalConfiguration: input.AdditionalConfiguration }),
    ...(input.BytesScannedCutoffPerQuery != null && { BytesScannedCutoffPerQuery: input.BytesScannedCutoffPerQuery }),
    ...(input.CustomerContentEncryptionConfiguration != null && {
      CustomerContentEncryptionConfiguration: serializeAws_json1_1CustomerContentEncryptionConfiguration(
        input.CustomerContentEncryptionConfiguration,
        context
      ),
    }),
    ...(input.EnforceWorkGroupConfiguration != null && {
      EnforceWorkGroupConfiguration: input.EnforceWorkGroupConfiguration,
    }),
    ...(input.EngineVersion != null && {
      EngineVersion: serializeAws_json1_1EngineVersion(input.EngineVersion, context),
    }),
    ...(input.ExecutionRole != null && { ExecutionRole: input.ExecutionRole }),
    ...(input.PublishCloudWatchMetricsEnabled != null && {
      PublishCloudWatchMetricsEnabled: input.PublishCloudWatchMetricsEnabled,
    }),
    ...(input.RequesterPaysEnabled != null && { RequesterPaysEnabled: input.RequesterPaysEnabled }),
    ...(input.ResultConfiguration != null && {
      ResultConfiguration: serializeAws_json1_1ResultConfiguration(input.ResultConfiguration, context),
    }),
  };
};

const serializeAws_json1_1WorkGroupConfigurationUpdates = (
  input: WorkGroupConfigurationUpdates,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdditionalConfiguration != null && { AdditionalConfiguration: input.AdditionalConfiguration }),
    ...(input.BytesScannedCutoffPerQuery != null && { BytesScannedCutoffPerQuery: input.BytesScannedCutoffPerQuery }),
    ...(input.CustomerContentEncryptionConfiguration != null && {
      CustomerContentEncryptionConfiguration: serializeAws_json1_1CustomerContentEncryptionConfiguration(
        input.CustomerContentEncryptionConfiguration,
        context
      ),
    }),
    ...(input.EnforceWorkGroupConfiguration != null && {
      EnforceWorkGroupConfiguration: input.EnforceWorkGroupConfiguration,
    }),
    ...(input.EngineVersion != null && {
      EngineVersion: serializeAws_json1_1EngineVersion(input.EngineVersion, context),
    }),
    ...(input.ExecutionRole != null && { ExecutionRole: input.ExecutionRole }),
    ...(input.PublishCloudWatchMetricsEnabled != null && {
      PublishCloudWatchMetricsEnabled: input.PublishCloudWatchMetricsEnabled,
    }),
    ...(input.RemoveBytesScannedCutoffPerQuery != null && {
      RemoveBytesScannedCutoffPerQuery: input.RemoveBytesScannedCutoffPerQuery,
    }),
    ...(input.RemoveCustomerContentEncryptionConfiguration != null && {
      RemoveCustomerContentEncryptionConfiguration: input.RemoveCustomerContentEncryptionConfiguration,
    }),
    ...(input.RequesterPaysEnabled != null && { RequesterPaysEnabled: input.RequesterPaysEnabled }),
    ...(input.ResultConfigurationUpdates != null && {
      ResultConfigurationUpdates: serializeAws_json1_1ResultConfigurationUpdates(
        input.ResultConfigurationUpdates,
        context
      ),
    }),
  };
};

const deserializeAws_json1_1AclConfiguration = (output: any, context: __SerdeContext): AclConfiguration => {
  return {
    S3AclOption: __expectString(output.S3AclOption),
  } as any;
};

const deserializeAws_json1_1ApplicationDPUSizes = (output: any, context: __SerdeContext): ApplicationDPUSizes => {
  return {
    ApplicationRuntimeId: __expectString(output.ApplicationRuntimeId),
    SupportedDPUSizes:
      output.SupportedDPUSizes != null
        ? deserializeAws_json1_1SupportedDPUSizeList(output.SupportedDPUSizes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ApplicationDPUSizesList = (output: any, context: __SerdeContext): ApplicationDPUSizes[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ApplicationDPUSizes(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AthenaError = (output: any, context: __SerdeContext): AthenaError => {
  return {
    ErrorCategory: __expectInt32(output.ErrorCategory),
    ErrorMessage: __expectString(output.ErrorMessage),
    ErrorType: __expectInt32(output.ErrorType),
    Retryable: __expectBoolean(output.Retryable),
  } as any;
};

const deserializeAws_json1_1BatchGetNamedQueryOutput = (
  output: any,
  context: __SerdeContext
): BatchGetNamedQueryOutput => {
  return {
    NamedQueries:
      output.NamedQueries != null ? deserializeAws_json1_1NamedQueryList(output.NamedQueries, context) : undefined,
    UnprocessedNamedQueryIds:
      output.UnprocessedNamedQueryIds != null
        ? deserializeAws_json1_1UnprocessedNamedQueryIdList(output.UnprocessedNamedQueryIds, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetPreparedStatementOutput = (
  output: any,
  context: __SerdeContext
): BatchGetPreparedStatementOutput => {
  return {
    PreparedStatements:
      output.PreparedStatements != null
        ? deserializeAws_json1_1PreparedStatementDetailsList(output.PreparedStatements, context)
        : undefined,
    UnprocessedPreparedStatementNames:
      output.UnprocessedPreparedStatementNames != null
        ? deserializeAws_json1_1UnprocessedPreparedStatementNameList(output.UnprocessedPreparedStatementNames, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchGetQueryExecutionOutput = (
  output: any,
  context: __SerdeContext
): BatchGetQueryExecutionOutput => {
  return {
    QueryExecutions:
      output.QueryExecutions != null
        ? deserializeAws_json1_1QueryExecutionList(output.QueryExecutions, context)
        : undefined,
    UnprocessedQueryExecutionIds:
      output.UnprocessedQueryExecutionIds != null
        ? deserializeAws_json1_1UnprocessedQueryExecutionIdList(output.UnprocessedQueryExecutionIds, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CalculationResult = (output: any, context: __SerdeContext): CalculationResult => {
  return {
    ResultS3Uri: __expectString(output.ResultS3Uri),
    ResultType: __expectString(output.ResultType),
    StdErrorS3Uri: __expectString(output.StdErrorS3Uri),
    StdOutS3Uri: __expectString(output.StdOutS3Uri),
  } as any;
};

const deserializeAws_json1_1CalculationsList = (output: any, context: __SerdeContext): CalculationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CalculationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CalculationStatistics = (output: any, context: __SerdeContext): CalculationStatistics => {
  return {
    DpuExecutionInMillis: __expectLong(output.DpuExecutionInMillis),
    Progress: __expectString(output.Progress),
  } as any;
};

const deserializeAws_json1_1CalculationStatus = (output: any, context: __SerdeContext): CalculationStatus => {
  return {
    CompletionDateTime:
      output.CompletionDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionDateTime)))
        : undefined,
    State: __expectString(output.State),
    StateChangeReason: __expectString(output.StateChangeReason),
    SubmissionDateTime:
      output.SubmissionDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmissionDateTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1CalculationSummary = (output: any, context: __SerdeContext): CalculationSummary => {
  return {
    CalculationExecutionId: __expectString(output.CalculationExecutionId),
    Description: __expectString(output.Description),
    Status: output.Status != null ? deserializeAws_json1_1CalculationStatus(output.Status, context) : undefined,
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
    Precision: __expectInt32(output.Precision),
    Scale: __expectInt32(output.Scale),
    SchemaName: __expectString(output.SchemaName),
    TableName: __expectString(output.TableName),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ColumnInfoList = (output: any, context: __SerdeContext): ColumnInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ColumnInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ColumnList = (output: any, context: __SerdeContext): Column[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Column(entry, context);
    });
  return retVal;
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

const deserializeAws_json1_1CreateNotebookOutput = (output: any, context: __SerdeContext): CreateNotebookOutput => {
  return {
    NotebookId: __expectString(output.NotebookId),
  } as any;
};

const deserializeAws_json1_1CreatePreparedStatementOutput = (
  output: any,
  context: __SerdeContext
): CreatePreparedStatementOutput => {
  return {} as any;
};

const deserializeAws_json1_1CreatePresignedNotebookUrlResponse = (
  output: any,
  context: __SerdeContext
): CreatePresignedNotebookUrlResponse => {
  return {
    AuthToken: __expectString(output.AuthToken),
    AuthTokenExpirationTime: __expectLong(output.AuthTokenExpirationTime),
    NotebookUrl: __expectString(output.NotebookUrl),
  } as any;
};

const deserializeAws_json1_1CreateWorkGroupOutput = (output: any, context: __SerdeContext): CreateWorkGroupOutput => {
  return {} as any;
};

const deserializeAws_json1_1CustomerContentEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): CustomerContentEncryptionConfiguration => {
  return {
    KmsKey: __expectString(output.KmsKey),
  } as any;
};

const deserializeAws_json1_1Database = (output: any, context: __SerdeContext): Database => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    Parameters: output.Parameters != null ? deserializeAws_json1_1ParametersMap(output.Parameters, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DatabaseList = (output: any, context: __SerdeContext): Database[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Database(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DataCatalog = (output: any, context: __SerdeContext): DataCatalog => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    Parameters: output.Parameters != null ? deserializeAws_json1_1ParametersMap(output.Parameters, context) : undefined,
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DataCatalogSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Datum = (output: any, context: __SerdeContext): Datum => {
  return {
    VarCharValue: __expectString(output.VarCharValue),
  } as any;
};

const deserializeAws_json1_1datumList = (output: any, context: __SerdeContext): Datum[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Datum(entry, context);
    });
  return retVal;
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

const deserializeAws_json1_1DeleteNotebookOutput = (output: any, context: __SerdeContext): DeleteNotebookOutput => {
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

const deserializeAws_json1_1EngineConfiguration = (output: any, context: __SerdeContext): EngineConfiguration => {
  return {
    AdditionalConfigs:
      output.AdditionalConfigs != null
        ? deserializeAws_json1_1ParametersMap(output.AdditionalConfigs, context)
        : undefined,
    CoordinatorDpuSize: __expectInt32(output.CoordinatorDpuSize),
    DefaultExecutorDpuSize: __expectInt32(output.DefaultExecutorDpuSize),
    MaxConcurrentDpus: __expectInt32(output.MaxConcurrentDpus),
  } as any;
};

const deserializeAws_json1_1EngineVersion = (output: any, context: __SerdeContext): EngineVersion => {
  return {
    EffectiveEngineVersion: __expectString(output.EffectiveEngineVersion),
    SelectedEngineVersion: __expectString(output.SelectedEngineVersion),
  } as any;
};

const deserializeAws_json1_1EngineVersionsList = (output: any, context: __SerdeContext): EngineVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EngineVersion(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ExecutionParameters = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ExecutorsSummary = (output: any, context: __SerdeContext): ExecutorsSummary => {
  return {
    ExecutorId: __expectString(output.ExecutorId),
    ExecutorSize: __expectLong(output.ExecutorSize),
    ExecutorState: __expectString(output.ExecutorState),
    ExecutorType: __expectString(output.ExecutorType),
    StartDateTime: __expectLong(output.StartDateTime),
    TerminationDateTime: __expectLong(output.TerminationDateTime),
  } as any;
};

const deserializeAws_json1_1ExecutorsSummaryList = (output: any, context: __SerdeContext): ExecutorsSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExecutorsSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ExportNotebookOutput = (output: any, context: __SerdeContext): ExportNotebookOutput => {
  return {
    NotebookMetadata:
      output.NotebookMetadata != null
        ? deserializeAws_json1_1NotebookMetadata(output.NotebookMetadata, context)
        : undefined,
    Payload: __expectString(output.Payload),
  } as any;
};

const deserializeAws_json1_1GetCalculationExecutionCodeResponse = (
  output: any,
  context: __SerdeContext
): GetCalculationExecutionCodeResponse => {
  return {
    CodeBlock: __expectString(output.CodeBlock),
  } as any;
};

const deserializeAws_json1_1GetCalculationExecutionResponse = (
  output: any,
  context: __SerdeContext
): GetCalculationExecutionResponse => {
  return {
    CalculationExecutionId: __expectString(output.CalculationExecutionId),
    Description: __expectString(output.Description),
    Result: output.Result != null ? deserializeAws_json1_1CalculationResult(output.Result, context) : undefined,
    SessionId: __expectString(output.SessionId),
    Statistics:
      output.Statistics != null ? deserializeAws_json1_1CalculationStatistics(output.Statistics, context) : undefined,
    Status: output.Status != null ? deserializeAws_json1_1CalculationStatus(output.Status, context) : undefined,
    WorkingDirectory: __expectString(output.WorkingDirectory),
  } as any;
};

const deserializeAws_json1_1GetCalculationExecutionStatusResponse = (
  output: any,
  context: __SerdeContext
): GetCalculationExecutionStatusResponse => {
  return {
    Statistics:
      output.Statistics != null ? deserializeAws_json1_1CalculationStatistics(output.Statistics, context) : undefined,
    Status: output.Status != null ? deserializeAws_json1_1CalculationStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetDatabaseOutput = (output: any, context: __SerdeContext): GetDatabaseOutput => {
  return {
    Database: output.Database != null ? deserializeAws_json1_1Database(output.Database, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetDataCatalogOutput = (output: any, context: __SerdeContext): GetDataCatalogOutput => {
  return {
    DataCatalog:
      output.DataCatalog != null ? deserializeAws_json1_1DataCatalog(output.DataCatalog, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetNamedQueryOutput = (output: any, context: __SerdeContext): GetNamedQueryOutput => {
  return {
    NamedQuery: output.NamedQuery != null ? deserializeAws_json1_1NamedQuery(output.NamedQuery, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetNotebookMetadataOutput = (
  output: any,
  context: __SerdeContext
): GetNotebookMetadataOutput => {
  return {
    NotebookMetadata:
      output.NotebookMetadata != null
        ? deserializeAws_json1_1NotebookMetadata(output.NotebookMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetPreparedStatementOutput = (
  output: any,
  context: __SerdeContext
): GetPreparedStatementOutput => {
  return {
    PreparedStatement:
      output.PreparedStatement != null
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
      output.QueryExecution != null ? deserializeAws_json1_1QueryExecution(output.QueryExecution, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetQueryResultsOutput = (output: any, context: __SerdeContext): GetQueryResultsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    ResultSet: output.ResultSet != null ? deserializeAws_json1_1ResultSet(output.ResultSet, context) : undefined,
    UpdateCount: __expectLong(output.UpdateCount),
  } as any;
};

const deserializeAws_json1_1GetQueryRuntimeStatisticsOutput = (
  output: any,
  context: __SerdeContext
): GetQueryRuntimeStatisticsOutput => {
  return {
    QueryRuntimeStatistics:
      output.QueryRuntimeStatistics != null
        ? deserializeAws_json1_1QueryRuntimeStatistics(output.QueryRuntimeStatistics, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetSessionResponse = (output: any, context: __SerdeContext): GetSessionResponse => {
  return {
    Description: __expectString(output.Description),
    EngineConfiguration:
      output.EngineConfiguration != null
        ? deserializeAws_json1_1EngineConfiguration(output.EngineConfiguration, context)
        : undefined,
    EngineVersion: __expectString(output.EngineVersion),
    NotebookVersion: __expectString(output.NotebookVersion),
    SessionConfiguration:
      output.SessionConfiguration != null
        ? deserializeAws_json1_1SessionConfiguration(output.SessionConfiguration, context)
        : undefined,
    SessionId: __expectString(output.SessionId),
    Statistics:
      output.Statistics != null ? deserializeAws_json1_1SessionStatistics(output.Statistics, context) : undefined,
    Status: output.Status != null ? deserializeAws_json1_1SessionStatus(output.Status, context) : undefined,
    WorkGroup: __expectString(output.WorkGroup),
  } as any;
};

const deserializeAws_json1_1GetSessionStatusResponse = (
  output: any,
  context: __SerdeContext
): GetSessionStatusResponse => {
  return {
    SessionId: __expectString(output.SessionId),
    Status: output.Status != null ? deserializeAws_json1_1SessionStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetTableMetadataOutput = (output: any, context: __SerdeContext): GetTableMetadataOutput => {
  return {
    TableMetadata:
      output.TableMetadata != null ? deserializeAws_json1_1TableMetadata(output.TableMetadata, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetWorkGroupOutput = (output: any, context: __SerdeContext): GetWorkGroupOutput => {
  return {
    WorkGroup: output.WorkGroup != null ? deserializeAws_json1_1WorkGroup(output.WorkGroup, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ImportNotebookOutput = (output: any, context: __SerdeContext): ImportNotebookOutput => {
  return {
    NotebookId: __expectString(output.NotebookId),
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

const deserializeAws_json1_1ListApplicationDPUSizesOutput = (
  output: any,
  context: __SerdeContext
): ListApplicationDPUSizesOutput => {
  return {
    ApplicationDPUSizes:
      output.ApplicationDPUSizes != null
        ? deserializeAws_json1_1ApplicationDPUSizesList(output.ApplicationDPUSizes, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListCalculationExecutionsResponse = (
  output: any,
  context: __SerdeContext
): ListCalculationExecutionsResponse => {
  return {
    Calculations:
      output.Calculations != null ? deserializeAws_json1_1CalculationsList(output.Calculations, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDatabasesOutput = (output: any, context: __SerdeContext): ListDatabasesOutput => {
  return {
    DatabaseList:
      output.DatabaseList != null ? deserializeAws_json1_1DatabaseList(output.DatabaseList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDataCatalogsOutput = (output: any, context: __SerdeContext): ListDataCatalogsOutput => {
  return {
    DataCatalogsSummary:
      output.DataCatalogsSummary != null
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
      output.EngineVersions != null
        ? deserializeAws_json1_1EngineVersionsList(output.EngineVersions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListExecutorsResponse = (output: any, context: __SerdeContext): ListExecutorsResponse => {
  return {
    ExecutorsSummary:
      output.ExecutorsSummary != null
        ? deserializeAws_json1_1ExecutorsSummaryList(output.ExecutorsSummary, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    SessionId: __expectString(output.SessionId),
  } as any;
};

const deserializeAws_json1_1ListNamedQueriesOutput = (output: any, context: __SerdeContext): ListNamedQueriesOutput => {
  return {
    NamedQueryIds:
      output.NamedQueryIds != null ? deserializeAws_json1_1NamedQueryIdList(output.NamedQueryIds, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListNotebookMetadataOutput = (
  output: any,
  context: __SerdeContext
): ListNotebookMetadataOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    NotebookMetadataList:
      output.NotebookMetadataList != null
        ? deserializeAws_json1_1NotebookMetadataArray(output.NotebookMetadataList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListNotebookSessionsResponse = (
  output: any,
  context: __SerdeContext
): ListNotebookSessionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    NotebookSessionsList:
      output.NotebookSessionsList != null
        ? deserializeAws_json1_1NotebookSessionsList(output.NotebookSessionsList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListPreparedStatementsOutput = (
  output: any,
  context: __SerdeContext
): ListPreparedStatementsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    PreparedStatements:
      output.PreparedStatements != null
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
      output.QueryExecutionIds != null
        ? deserializeAws_json1_1QueryExecutionIdList(output.QueryExecutionIds, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListSessionsResponse = (output: any, context: __SerdeContext): ListSessionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Sessions: output.Sessions != null ? deserializeAws_json1_1SessionsList(output.Sessions, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTableMetadataOutput = (
  output: any,
  context: __SerdeContext
): ListTableMetadataOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    TableMetadataList:
      output.TableMetadataList != null
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
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListWorkGroupsOutput = (output: any, context: __SerdeContext): ListWorkGroupsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    WorkGroups:
      output.WorkGroups != null ? deserializeAws_json1_1WorkGroupsList(output.WorkGroups, context) : undefined,
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

const deserializeAws_json1_1NamedQueryList = (output: any, context: __SerdeContext): NamedQuery[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1NamedQuery(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1NotebookMetadata = (output: any, context: __SerdeContext): NotebookMetadata => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
    NotebookId: __expectString(output.NotebookId),
    Type: __expectString(output.Type),
    WorkGroup: __expectString(output.WorkGroup),
  } as any;
};

const deserializeAws_json1_1NotebookMetadataArray = (output: any, context: __SerdeContext): NotebookMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1NotebookMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1NotebookSessionsList = (output: any, context: __SerdeContext): NotebookSessionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1NotebookSessionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1NotebookSessionSummary = (output: any, context: __SerdeContext): NotebookSessionSummary => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    SessionId: __expectString(output.SessionId),
  } as any;
};

const deserializeAws_json1_1ParametersMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1PreparedStatement = (output: any, context: __SerdeContext): PreparedStatement => {
  return {
    Description: __expectString(output.Description),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    QueryStatement: __expectString(output.QueryStatement),
    StatementName: __expectString(output.StatementName),
    WorkGroupName: __expectString(output.WorkGroupName),
  } as any;
};

const deserializeAws_json1_1PreparedStatementDetailsList = (
  output: any,
  context: __SerdeContext
): PreparedStatement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PreparedStatement(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PreparedStatementsList = (
  output: any,
  context: __SerdeContext
): PreparedStatementSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PreparedStatementSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PreparedStatementSummary = (
  output: any,
  context: __SerdeContext
): PreparedStatementSummary => {
  return {
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    StatementName: __expectString(output.StatementName),
  } as any;
};

const deserializeAws_json1_1QueryExecution = (output: any, context: __SerdeContext): QueryExecution => {
  return {
    EngineVersion:
      output.EngineVersion != null ? deserializeAws_json1_1EngineVersion(output.EngineVersion, context) : undefined,
    ExecutionParameters:
      output.ExecutionParameters != null
        ? deserializeAws_json1_1ExecutionParameters(output.ExecutionParameters, context)
        : undefined,
    Query: __expectString(output.Query),
    QueryExecutionContext:
      output.QueryExecutionContext != null
        ? deserializeAws_json1_1QueryExecutionContext(output.QueryExecutionContext, context)
        : undefined,
    QueryExecutionId: __expectString(output.QueryExecutionId),
    ResultConfiguration:
      output.ResultConfiguration != null
        ? deserializeAws_json1_1ResultConfiguration(output.ResultConfiguration, context)
        : undefined,
    ResultReuseConfiguration:
      output.ResultReuseConfiguration != null
        ? deserializeAws_json1_1ResultReuseConfiguration(output.ResultReuseConfiguration, context)
        : undefined,
    StatementType: __expectString(output.StatementType),
    Statistics:
      output.Statistics != null
        ? deserializeAws_json1_1QueryExecutionStatistics(output.Statistics, context)
        : undefined,
    Status: output.Status != null ? deserializeAws_json1_1QueryExecutionStatus(output.Status, context) : undefined,
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

const deserializeAws_json1_1QueryExecutionList = (output: any, context: __SerdeContext): QueryExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1QueryExecution(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1QueryExecutionStatistics = (
  output: any,
  context: __SerdeContext
): QueryExecutionStatistics => {
  return {
    DataManifestLocation: __expectString(output.DataManifestLocation),
    DataScannedInBytes: __expectLong(output.DataScannedInBytes),
    EngineExecutionTimeInMillis: __expectLong(output.EngineExecutionTimeInMillis),
    QueryPlanningTimeInMillis: __expectLong(output.QueryPlanningTimeInMillis),
    QueryQueueTimeInMillis: __expectLong(output.QueryQueueTimeInMillis),
    ResultReuseInformation:
      output.ResultReuseInformation != null
        ? deserializeAws_json1_1ResultReuseInformation(output.ResultReuseInformation, context)
        : undefined,
    ServiceProcessingTimeInMillis: __expectLong(output.ServiceProcessingTimeInMillis),
    TotalExecutionTimeInMillis: __expectLong(output.TotalExecutionTimeInMillis),
  } as any;
};

const deserializeAws_json1_1QueryExecutionStatus = (output: any, context: __SerdeContext): QueryExecutionStatus => {
  return {
    AthenaError:
      output.AthenaError != null ? deserializeAws_json1_1AthenaError(output.AthenaError, context) : undefined,
    CompletionDateTime:
      output.CompletionDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionDateTime)))
        : undefined,
    State: __expectString(output.State),
    StateChangeReason: __expectString(output.StateChangeReason),
    SubmissionDateTime:
      output.SubmissionDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmissionDateTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1QueryRuntimeStatistics = (output: any, context: __SerdeContext): QueryRuntimeStatistics => {
  return {
    OutputStage: output.OutputStage != null ? deserializeAws_json1_1QueryStage(output.OutputStage, context) : undefined,
    Rows: output.Rows != null ? deserializeAws_json1_1QueryRuntimeStatisticsRows(output.Rows, context) : undefined,
    Timeline:
      output.Timeline != null
        ? deserializeAws_json1_1QueryRuntimeStatisticsTimeline(output.Timeline, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1QueryRuntimeStatisticsRows = (
  output: any,
  context: __SerdeContext
): QueryRuntimeStatisticsRows => {
  return {
    InputBytes: __expectLong(output.InputBytes),
    InputRows: __expectLong(output.InputRows),
    OutputBytes: __expectLong(output.OutputBytes),
    OutputRows: __expectLong(output.OutputRows),
  } as any;
};

const deserializeAws_json1_1QueryRuntimeStatisticsTimeline = (
  output: any,
  context: __SerdeContext
): QueryRuntimeStatisticsTimeline => {
  return {
    EngineExecutionTimeInMillis: __expectLong(output.EngineExecutionTimeInMillis),
    QueryPlanningTimeInMillis: __expectLong(output.QueryPlanningTimeInMillis),
    QueryQueueTimeInMillis: __expectLong(output.QueryQueueTimeInMillis),
    ServiceProcessingTimeInMillis: __expectLong(output.ServiceProcessingTimeInMillis),
    TotalExecutionTimeInMillis: __expectLong(output.TotalExecutionTimeInMillis),
  } as any;
};

const deserializeAws_json1_1QueryStage = (output: any, context: __SerdeContext): QueryStage => {
  return {
    ExecutionTime: __expectLong(output.ExecutionTime),
    InputBytes: __expectLong(output.InputBytes),
    InputRows: __expectLong(output.InputRows),
    OutputBytes: __expectLong(output.OutputBytes),
    OutputRows: __expectLong(output.OutputRows),
    QueryStagePlan:
      output.QueryStagePlan != null
        ? deserializeAws_json1_1QueryStagePlanNode(output.QueryStagePlan, context)
        : undefined,
    StageId: __expectLong(output.StageId),
    State: __expectString(output.State),
    SubStages: output.SubStages != null ? deserializeAws_json1_1QueryStages(output.SubStages, context) : undefined,
  } as any;
};

const deserializeAws_json1_1QueryStagePlanNode = (output: any, context: __SerdeContext): QueryStagePlanNode => {
  return {
    Children: output.Children != null ? deserializeAws_json1_1QueryStagePlanNodes(output.Children, context) : undefined,
    Identifier: __expectString(output.Identifier),
    Name: __expectString(output.Name),
    RemoteSources:
      output.RemoteSources != null ? deserializeAws_json1_1StringList(output.RemoteSources, context) : undefined,
  } as any;
};

const deserializeAws_json1_1QueryStagePlanNodes = (output: any, context: __SerdeContext): QueryStagePlanNode[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1QueryStagePlanNode(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1QueryStages = (output: any, context: __SerdeContext): QueryStage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1QueryStage(entry, context);
    });
  return retVal;
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
    AclConfiguration:
      output.AclConfiguration != null
        ? deserializeAws_json1_1AclConfiguration(output.AclConfiguration, context)
        : undefined,
    EncryptionConfiguration:
      output.EncryptionConfiguration != null
        ? deserializeAws_json1_1EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    ExpectedBucketOwner: __expectString(output.ExpectedBucketOwner),
    OutputLocation: __expectString(output.OutputLocation),
  } as any;
};

const deserializeAws_json1_1ResultReuseByAgeConfiguration = (
  output: any,
  context: __SerdeContext
): ResultReuseByAgeConfiguration => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    MaxAgeInMinutes: __expectInt32(output.MaxAgeInMinutes),
  } as any;
};

const deserializeAws_json1_1ResultReuseConfiguration = (
  output: any,
  context: __SerdeContext
): ResultReuseConfiguration => {
  return {
    ResultReuseByAgeConfiguration:
      output.ResultReuseByAgeConfiguration != null
        ? deserializeAws_json1_1ResultReuseByAgeConfiguration(output.ResultReuseByAgeConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResultReuseInformation = (output: any, context: __SerdeContext): ResultReuseInformation => {
  return {
    ReusedPreviousResult: __expectBoolean(output.ReusedPreviousResult),
  } as any;
};

const deserializeAws_json1_1ResultSet = (output: any, context: __SerdeContext): ResultSet => {
  return {
    ResultSetMetadata:
      output.ResultSetMetadata != null
        ? deserializeAws_json1_1ResultSetMetadata(output.ResultSetMetadata, context)
        : undefined,
    Rows: output.Rows != null ? deserializeAws_json1_1RowList(output.Rows, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ResultSetMetadata = (output: any, context: __SerdeContext): ResultSetMetadata => {
  return {
    ColumnInfo:
      output.ColumnInfo != null ? deserializeAws_json1_1ColumnInfoList(output.ColumnInfo, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Row = (output: any, context: __SerdeContext): Row => {
  return {
    Data: output.Data != null ? deserializeAws_json1_1datumList(output.Data, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RowList = (output: any, context: __SerdeContext): Row[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Row(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SessionAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): SessionAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1SessionConfiguration = (output: any, context: __SerdeContext): SessionConfiguration => {
  return {
    EncryptionConfiguration:
      output.EncryptionConfiguration != null
        ? deserializeAws_json1_1EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    ExecutionRole: __expectString(output.ExecutionRole),
    IdleTimeoutSeconds: __expectLong(output.IdleTimeoutSeconds),
    WorkingDirectory: __expectString(output.WorkingDirectory),
  } as any;
};

const deserializeAws_json1_1SessionsList = (output: any, context: __SerdeContext): SessionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SessionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SessionStatistics = (output: any, context: __SerdeContext): SessionStatistics => {
  return {
    DpuExecutionInMillis: __expectLong(output.DpuExecutionInMillis),
  } as any;
};

const deserializeAws_json1_1SessionStatus = (output: any, context: __SerdeContext): SessionStatus => {
  return {
    EndDateTime:
      output.EndDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndDateTime)))
        : undefined,
    IdleSinceDateTime:
      output.IdleSinceDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.IdleSinceDateTime)))
        : undefined,
    LastModifiedDateTime:
      output.LastModifiedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDateTime)))
        : undefined,
    StartDateTime:
      output.StartDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartDateTime)))
        : undefined,
    State: __expectString(output.State),
    StateChangeReason: __expectString(output.StateChangeReason),
  } as any;
};

const deserializeAws_json1_1SessionSummary = (output: any, context: __SerdeContext): SessionSummary => {
  return {
    Description: __expectString(output.Description),
    EngineVersion:
      output.EngineVersion != null ? deserializeAws_json1_1EngineVersion(output.EngineVersion, context) : undefined,
    NotebookVersion: __expectString(output.NotebookVersion),
    SessionId: __expectString(output.SessionId),
    Status: output.Status != null ? deserializeAws_json1_1SessionStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StartCalculationExecutionResponse = (
  output: any,
  context: __SerdeContext
): StartCalculationExecutionResponse => {
  return {
    CalculationExecutionId: __expectString(output.CalculationExecutionId),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1StartQueryExecutionOutput = (
  output: any,
  context: __SerdeContext
): StartQueryExecutionOutput => {
  return {
    QueryExecutionId: __expectString(output.QueryExecutionId),
  } as any;
};

const deserializeAws_json1_1StartSessionResponse = (output: any, context: __SerdeContext): StartSessionResponse => {
  return {
    SessionId: __expectString(output.SessionId),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1StopCalculationExecutionResponse = (
  output: any,
  context: __SerdeContext
): StopCalculationExecutionResponse => {
  return {
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1StopQueryExecutionOutput = (
  output: any,
  context: __SerdeContext
): StopQueryExecutionOutput => {
  return {} as any;
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

const deserializeAws_json1_1SupportedDPUSizeList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1TableMetadata = (output: any, context: __SerdeContext): TableMetadata => {
  return {
    Columns: output.Columns != null ? deserializeAws_json1_1ColumnList(output.Columns, context) : undefined,
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTime))) : undefined,
    LastAccessTime:
      output.LastAccessTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAccessTime)))
        : undefined,
    Name: __expectString(output.Name),
    Parameters: output.Parameters != null ? deserializeAws_json1_1ParametersMap(output.Parameters, context) : undefined,
    PartitionKeys:
      output.PartitionKeys != null ? deserializeAws_json1_1ColumnList(output.PartitionKeys, context) : undefined,
    TableType: __expectString(output.TableType),
  } as any;
};

const deserializeAws_json1_1TableMetadataList = (output: any, context: __SerdeContext): TableMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TableMetadata(entry, context);
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

const deserializeAws_json1_1TagResourceOutput = (output: any, context: __SerdeContext): TagResourceOutput => {
  return {} as any;
};

const deserializeAws_json1_1TerminateSessionResponse = (
  output: any,
  context: __SerdeContext
): TerminateSessionResponse => {
  return {
    State: __expectString(output.State),
  } as any;
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UnprocessedNamedQueryId(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1UnprocessedPreparedStatementName = (
  output: any,
  context: __SerdeContext
): UnprocessedPreparedStatementName => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    StatementName: __expectString(output.StatementName),
  } as any;
};

const deserializeAws_json1_1UnprocessedPreparedStatementNameList = (
  output: any,
  context: __SerdeContext
): UnprocessedPreparedStatementName[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UnprocessedPreparedStatementName(entry, context);
    });
  return retVal;
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UnprocessedQueryExecutionId(entry, context);
    });
  return retVal;
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

const deserializeAws_json1_1UpdateNamedQueryOutput = (output: any, context: __SerdeContext): UpdateNamedQueryOutput => {
  return {} as any;
};

const deserializeAws_json1_1UpdateNotebookMetadataOutput = (
  output: any,
  context: __SerdeContext
): UpdateNotebookMetadataOutput => {
  return {} as any;
};

const deserializeAws_json1_1UpdateNotebookOutput = (output: any, context: __SerdeContext): UpdateNotebookOutput => {
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
      output.Configuration != null
        ? deserializeAws_json1_1WorkGroupConfiguration(output.Configuration, context)
        : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1WorkGroupConfiguration = (output: any, context: __SerdeContext): WorkGroupConfiguration => {
  return {
    AdditionalConfiguration: __expectString(output.AdditionalConfiguration),
    BytesScannedCutoffPerQuery: __expectLong(output.BytesScannedCutoffPerQuery),
    CustomerContentEncryptionConfiguration:
      output.CustomerContentEncryptionConfiguration != null
        ? deserializeAws_json1_1CustomerContentEncryptionConfiguration(
            output.CustomerContentEncryptionConfiguration,
            context
          )
        : undefined,
    EnforceWorkGroupConfiguration: __expectBoolean(output.EnforceWorkGroupConfiguration),
    EngineVersion:
      output.EngineVersion != null ? deserializeAws_json1_1EngineVersion(output.EngineVersion, context) : undefined,
    ExecutionRole: __expectString(output.ExecutionRole),
    PublishCloudWatchMetricsEnabled: __expectBoolean(output.PublishCloudWatchMetricsEnabled),
    RequesterPaysEnabled: __expectBoolean(output.RequesterPaysEnabled),
    ResultConfiguration:
      output.ResultConfiguration != null
        ? deserializeAws_json1_1ResultConfiguration(output.ResultConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1WorkGroupsList = (output: any, context: __SerdeContext): WorkGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WorkGroupSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1WorkGroupSummary = (output: any, context: __SerdeContext): WorkGroupSummary => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Description: __expectString(output.Description),
    EngineVersion:
      output.EngineVersion != null ? deserializeAws_json1_1EngineVersion(output.EngineVersion, context) : undefined,
    Name: __expectString(output.Name),
    State: __expectString(output.State),
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
