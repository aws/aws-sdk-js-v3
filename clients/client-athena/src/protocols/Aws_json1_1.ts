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

/**
 * serializeAws_json1_1BatchGetNamedQueryCommand
 */
export const se_BatchGetNamedQueryCommand = async (
  input: BatchGetNamedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetNamedQuery");
  let body: any;
  body = JSON.stringify(se_BatchGetNamedQueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetPreparedStatementCommand
 */
export const se_BatchGetPreparedStatementCommand = async (
  input: BatchGetPreparedStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetPreparedStatement");
  let body: any;
  body = JSON.stringify(se_BatchGetPreparedStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchGetQueryExecutionCommand
 */
export const se_BatchGetQueryExecutionCommand = async (
  input: BatchGetQueryExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchGetQueryExecution");
  let body: any;
  body = JSON.stringify(se_BatchGetQueryExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDataCatalogCommand
 */
export const se_CreateDataCatalogCommand = async (
  input: CreateDataCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDataCatalog");
  let body: any;
  body = JSON.stringify(se_CreateDataCatalogInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateNamedQueryCommand
 */
export const se_CreateNamedQueryCommand = async (
  input: CreateNamedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateNamedQuery");
  let body: any;
  body = JSON.stringify(se_CreateNamedQueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateNotebookCommand
 */
export const se_CreateNotebookCommand = async (
  input: CreateNotebookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateNotebook");
  let body: any;
  body = JSON.stringify(se_CreateNotebookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePreparedStatementCommand
 */
export const se_CreatePreparedStatementCommand = async (
  input: CreatePreparedStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePreparedStatement");
  let body: any;
  body = JSON.stringify(se_CreatePreparedStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePresignedNotebookUrlCommand
 */
export const se_CreatePresignedNotebookUrlCommand = async (
  input: CreatePresignedNotebookUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePresignedNotebookUrl");
  let body: any;
  body = JSON.stringify(se_CreatePresignedNotebookUrlRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWorkGroupCommand
 */
export const se_CreateWorkGroupCommand = async (
  input: CreateWorkGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWorkGroup");
  let body: any;
  body = JSON.stringify(se_CreateWorkGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDataCatalogCommand
 */
export const se_DeleteDataCatalogCommand = async (
  input: DeleteDataCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDataCatalog");
  let body: any;
  body = JSON.stringify(se_DeleteDataCatalogInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteNamedQueryCommand
 */
export const se_DeleteNamedQueryCommand = async (
  input: DeleteNamedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteNamedQuery");
  let body: any;
  body = JSON.stringify(se_DeleteNamedQueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteNotebookCommand
 */
export const se_DeleteNotebookCommand = async (
  input: DeleteNotebookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteNotebook");
  let body: any;
  body = JSON.stringify(se_DeleteNotebookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePreparedStatementCommand
 */
export const se_DeletePreparedStatementCommand = async (
  input: DeletePreparedStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePreparedStatement");
  let body: any;
  body = JSON.stringify(se_DeletePreparedStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWorkGroupCommand
 */
export const se_DeleteWorkGroupCommand = async (
  input: DeleteWorkGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWorkGroup");
  let body: any;
  body = JSON.stringify(se_DeleteWorkGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ExportNotebookCommand
 */
export const se_ExportNotebookCommand = async (
  input: ExportNotebookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExportNotebook");
  let body: any;
  body = JSON.stringify(se_ExportNotebookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCalculationExecutionCommand
 */
export const se_GetCalculationExecutionCommand = async (
  input: GetCalculationExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCalculationExecution");
  let body: any;
  body = JSON.stringify(se_GetCalculationExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCalculationExecutionCodeCommand
 */
export const se_GetCalculationExecutionCodeCommand = async (
  input: GetCalculationExecutionCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCalculationExecutionCode");
  let body: any;
  body = JSON.stringify(se_GetCalculationExecutionCodeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCalculationExecutionStatusCommand
 */
export const se_GetCalculationExecutionStatusCommand = async (
  input: GetCalculationExecutionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCalculationExecutionStatus");
  let body: any;
  body = JSON.stringify(se_GetCalculationExecutionStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDatabaseCommand
 */
export const se_GetDatabaseCommand = async (
  input: GetDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDatabase");
  let body: any;
  body = JSON.stringify(se_GetDatabaseInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDataCatalogCommand
 */
export const se_GetDataCatalogCommand = async (
  input: GetDataCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDataCatalog");
  let body: any;
  body = JSON.stringify(se_GetDataCatalogInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetNamedQueryCommand
 */
export const se_GetNamedQueryCommand = async (
  input: GetNamedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetNamedQuery");
  let body: any;
  body = JSON.stringify(se_GetNamedQueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetNotebookMetadataCommand
 */
export const se_GetNotebookMetadataCommand = async (
  input: GetNotebookMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetNotebookMetadata");
  let body: any;
  body = JSON.stringify(se_GetNotebookMetadataInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPreparedStatementCommand
 */
export const se_GetPreparedStatementCommand = async (
  input: GetPreparedStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPreparedStatement");
  let body: any;
  body = JSON.stringify(se_GetPreparedStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetQueryExecutionCommand
 */
export const se_GetQueryExecutionCommand = async (
  input: GetQueryExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetQueryExecution");
  let body: any;
  body = JSON.stringify(se_GetQueryExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetQueryResultsCommand
 */
export const se_GetQueryResultsCommand = async (
  input: GetQueryResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetQueryResults");
  let body: any;
  body = JSON.stringify(se_GetQueryResultsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetQueryRuntimeStatisticsCommand
 */
export const se_GetQueryRuntimeStatisticsCommand = async (
  input: GetQueryRuntimeStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetQueryRuntimeStatistics");
  let body: any;
  body = JSON.stringify(se_GetQueryRuntimeStatisticsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSessionCommand
 */
export const se_GetSessionCommand = async (
  input: GetSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSession");
  let body: any;
  body = JSON.stringify(se_GetSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSessionStatusCommand
 */
export const se_GetSessionStatusCommand = async (
  input: GetSessionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSessionStatus");
  let body: any;
  body = JSON.stringify(se_GetSessionStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTableMetadataCommand
 */
export const se_GetTableMetadataCommand = async (
  input: GetTableMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTableMetadata");
  let body: any;
  body = JSON.stringify(se_GetTableMetadataInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetWorkGroupCommand
 */
export const se_GetWorkGroupCommand = async (
  input: GetWorkGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetWorkGroup");
  let body: any;
  body = JSON.stringify(se_GetWorkGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportNotebookCommand
 */
export const se_ImportNotebookCommand = async (
  input: ImportNotebookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportNotebook");
  let body: any;
  body = JSON.stringify(se_ImportNotebookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApplicationDPUSizesCommand
 */
export const se_ListApplicationDPUSizesCommand = async (
  input: ListApplicationDPUSizesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListApplicationDPUSizes");
  let body: any;
  body = JSON.stringify(se_ListApplicationDPUSizesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCalculationExecutionsCommand
 */
export const se_ListCalculationExecutionsCommand = async (
  input: ListCalculationExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCalculationExecutions");
  let body: any;
  body = JSON.stringify(se_ListCalculationExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDatabasesCommand
 */
export const se_ListDatabasesCommand = async (
  input: ListDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDatabases");
  let body: any;
  body = JSON.stringify(se_ListDatabasesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDataCatalogsCommand
 */
export const se_ListDataCatalogsCommand = async (
  input: ListDataCatalogsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDataCatalogs");
  let body: any;
  body = JSON.stringify(se_ListDataCatalogsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEngineVersionsCommand
 */
export const se_ListEngineVersionsCommand = async (
  input: ListEngineVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEngineVersions");
  let body: any;
  body = JSON.stringify(se_ListEngineVersionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListExecutorsCommand
 */
export const se_ListExecutorsCommand = async (
  input: ListExecutorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListExecutors");
  let body: any;
  body = JSON.stringify(se_ListExecutorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListNamedQueriesCommand
 */
export const se_ListNamedQueriesCommand = async (
  input: ListNamedQueriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListNamedQueries");
  let body: any;
  body = JSON.stringify(se_ListNamedQueriesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListNotebookMetadataCommand
 */
export const se_ListNotebookMetadataCommand = async (
  input: ListNotebookMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListNotebookMetadata");
  let body: any;
  body = JSON.stringify(se_ListNotebookMetadataInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListNotebookSessionsCommand
 */
export const se_ListNotebookSessionsCommand = async (
  input: ListNotebookSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListNotebookSessions");
  let body: any;
  body = JSON.stringify(se_ListNotebookSessionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPreparedStatementsCommand
 */
export const se_ListPreparedStatementsCommand = async (
  input: ListPreparedStatementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPreparedStatements");
  let body: any;
  body = JSON.stringify(se_ListPreparedStatementsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListQueryExecutionsCommand
 */
export const se_ListQueryExecutionsCommand = async (
  input: ListQueryExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListQueryExecutions");
  let body: any;
  body = JSON.stringify(se_ListQueryExecutionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSessionsCommand
 */
export const se_ListSessionsCommand = async (
  input: ListSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSessions");
  let body: any;
  body = JSON.stringify(se_ListSessionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTableMetadataCommand
 */
export const se_ListTableMetadataCommand = async (
  input: ListTableMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTableMetadata");
  let body: any;
  body = JSON.stringify(se_ListTableMetadataInput(input, context));
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
  body = JSON.stringify(se_ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListWorkGroupsCommand
 */
export const se_ListWorkGroupsCommand = async (
  input: ListWorkGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWorkGroups");
  let body: any;
  body = JSON.stringify(se_ListWorkGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartCalculationExecutionCommand
 */
export const se_StartCalculationExecutionCommand = async (
  input: StartCalculationExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartCalculationExecution");
  let body: any;
  body = JSON.stringify(se_StartCalculationExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartQueryExecutionCommand
 */
export const se_StartQueryExecutionCommand = async (
  input: StartQueryExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartQueryExecution");
  let body: any;
  body = JSON.stringify(se_StartQueryExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartSessionCommand
 */
export const se_StartSessionCommand = async (
  input: StartSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartSession");
  let body: any;
  body = JSON.stringify(se_StartSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopCalculationExecutionCommand
 */
export const se_StopCalculationExecutionCommand = async (
  input: StopCalculationExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopCalculationExecution");
  let body: any;
  body = JSON.stringify(se_StopCalculationExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopQueryExecutionCommand
 */
export const se_StopQueryExecutionCommand = async (
  input: StopQueryExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopQueryExecution");
  let body: any;
  body = JSON.stringify(se_StopQueryExecutionInput(input, context));
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
  body = JSON.stringify(se_TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TerminateSessionCommand
 */
export const se_TerminateSessionCommand = async (
  input: TerminateSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TerminateSession");
  let body: any;
  body = JSON.stringify(se_TerminateSessionRequest(input, context));
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
  body = JSON.stringify(se_UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDataCatalogCommand
 */
export const se_UpdateDataCatalogCommand = async (
  input: UpdateDataCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDataCatalog");
  let body: any;
  body = JSON.stringify(se_UpdateDataCatalogInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateNamedQueryCommand
 */
export const se_UpdateNamedQueryCommand = async (
  input: UpdateNamedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateNamedQuery");
  let body: any;
  body = JSON.stringify(se_UpdateNamedQueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateNotebookCommand
 */
export const se_UpdateNotebookCommand = async (
  input: UpdateNotebookCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateNotebook");
  let body: any;
  body = JSON.stringify(se_UpdateNotebookInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateNotebookMetadataCommand
 */
export const se_UpdateNotebookMetadataCommand = async (
  input: UpdateNotebookMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateNotebookMetadata");
  let body: any;
  body = JSON.stringify(se_UpdateNotebookMetadataInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePreparedStatementCommand
 */
export const se_UpdatePreparedStatementCommand = async (
  input: UpdatePreparedStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePreparedStatement");
  let body: any;
  body = JSON.stringify(se_UpdatePreparedStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateWorkGroupCommand
 */
export const se_UpdateWorkGroupCommand = async (
  input: UpdateWorkGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateWorkGroup");
  let body: any;
  body = JSON.stringify(se_UpdateWorkGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1BatchGetNamedQueryCommand
 */
export const de_BatchGetNamedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetNamedQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetNamedQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetNamedQueryOutput(data, context);
  const response: BatchGetNamedQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchGetNamedQueryCommandError
 */
const de_BatchGetNamedQueryCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1BatchGetPreparedStatementCommand
 */
export const de_BatchGetPreparedStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetPreparedStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetPreparedStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetPreparedStatementOutput(data, context);
  const response: BatchGetPreparedStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchGetPreparedStatementCommandError
 */
const de_BatchGetPreparedStatementCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1BatchGetQueryExecutionCommand
 */
export const de_BatchGetQueryExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetQueryExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchGetQueryExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetQueryExecutionOutput(data, context);
  const response: BatchGetQueryExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchGetQueryExecutionCommandError
 */
const de_BatchGetQueryExecutionCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateDataCatalogCommand
 */
export const de_CreateDataCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDataCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDataCatalogOutput(data, context);
  const response: CreateDataCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDataCatalogCommandError
 */
const de_CreateDataCatalogCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateNamedQueryCommand
 */
export const de_CreateNamedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNamedQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateNamedQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateNamedQueryOutput(data, context);
  const response: CreateNamedQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateNamedQueryCommandError
 */
const de_CreateNamedQueryCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateNotebookCommand
 */
export const de_CreateNotebookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotebookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateNotebookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateNotebookOutput(data, context);
  const response: CreateNotebookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateNotebookCommandError
 */
const de_CreateNotebookCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreatePreparedStatementCommand
 */
export const de_CreatePreparedStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePreparedStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePreparedStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePreparedStatementOutput(data, context);
  const response: CreatePreparedStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreatePreparedStatementCommandError
 */
const de_CreatePreparedStatementCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreatePresignedNotebookUrlCommand
 */
export const de_CreatePresignedNotebookUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresignedNotebookUrlCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePresignedNotebookUrlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePresignedNotebookUrlResponse(data, context);
  const response: CreatePresignedNotebookUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreatePresignedNotebookUrlCommandError
 */
const de_CreatePresignedNotebookUrlCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
 * deserializeAws_json1_1CreateWorkGroupCommand
 */
export const de_CreateWorkGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateWorkGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWorkGroupOutput(data, context);
  const response: CreateWorkGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateWorkGroupCommandError
 */
const de_CreateWorkGroupCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteDataCatalogCommand
 */
export const de_DeleteDataCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDataCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDataCatalogOutput(data, context);
  const response: DeleteDataCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDataCatalogCommandError
 */
const de_DeleteDataCatalogCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteNamedQueryCommand
 */
export const de_DeleteNamedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamedQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteNamedQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteNamedQueryOutput(data, context);
  const response: DeleteNamedQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteNamedQueryCommandError
 */
const de_DeleteNamedQueryCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteNotebookCommand
 */
export const de_DeleteNotebookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotebookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteNotebookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteNotebookOutput(data, context);
  const response: DeleteNotebookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteNotebookCommandError
 */
const de_DeleteNotebookCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeletePreparedStatementCommand
 */
export const de_DeletePreparedStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePreparedStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePreparedStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeletePreparedStatementOutput(data, context);
  const response: DeletePreparedStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeletePreparedStatementCommandError
 */
const de_DeletePreparedStatementCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeleteWorkGroupCommand
 */
export const de_DeleteWorkGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteWorkGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteWorkGroupOutput(data, context);
  const response: DeleteWorkGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteWorkGroupCommandError
 */
const de_DeleteWorkGroupCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ExportNotebookCommand
 */
export const de_ExportNotebookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportNotebookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExportNotebookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ExportNotebookOutput(data, context);
  const response: ExportNotebookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ExportNotebookCommandError
 */
const de_ExportNotebookCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetCalculationExecutionCommand
 */
export const de_GetCalculationExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCalculationExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCalculationExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCalculationExecutionResponse(data, context);
  const response: GetCalculationExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCalculationExecutionCommandError
 */
const de_GetCalculationExecutionCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetCalculationExecutionCodeCommand
 */
export const de_GetCalculationExecutionCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCalculationExecutionCodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCalculationExecutionCodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCalculationExecutionCodeResponse(data, context);
  const response: GetCalculationExecutionCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCalculationExecutionCodeCommandError
 */
const de_GetCalculationExecutionCodeCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetCalculationExecutionStatusCommand
 */
export const de_GetCalculationExecutionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCalculationExecutionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCalculationExecutionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCalculationExecutionStatusResponse(data, context);
  const response: GetCalculationExecutionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCalculationExecutionStatusCommandError
 */
const de_GetCalculationExecutionStatusCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetDatabaseCommand
 */
export const de_GetDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDatabaseOutput(data, context);
  const response: GetDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDatabaseCommandError
 */
const de_GetDatabaseCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MetadataException":
    case "com.amazonaws.athena#MetadataException":
      throw await de_MetadataExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetDataCatalogCommand
 */
export const de_GetDataCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDataCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDataCatalogOutput(data, context);
  const response: GetDataCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDataCatalogCommandError
 */
const de_GetDataCatalogCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetNamedQueryCommand
 */
export const de_GetNamedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamedQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetNamedQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetNamedQueryOutput(data, context);
  const response: GetNamedQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetNamedQueryCommandError
 */
const de_GetNamedQueryCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetNotebookMetadataCommand
 */
export const de_GetNotebookMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNotebookMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetNotebookMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetNotebookMetadataOutput(data, context);
  const response: GetNotebookMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetNotebookMetadataCommandError
 */
const de_GetNotebookMetadataCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetPreparedStatementCommand
 */
export const de_GetPreparedStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPreparedStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPreparedStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPreparedStatementOutput(data, context);
  const response: GetPreparedStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetPreparedStatementCommandError
 */
const de_GetPreparedStatementCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetQueryExecutionCommand
 */
export const de_GetQueryExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetQueryExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetQueryExecutionOutput(data, context);
  const response: GetQueryExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetQueryExecutionCommandError
 */
const de_GetQueryExecutionCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetQueryResultsCommand
 */
export const de_GetQueryResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetQueryResultsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetQueryResultsOutput(data, context);
  const response: GetQueryResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetQueryResultsCommandError
 */
const de_GetQueryResultsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetQueryRuntimeStatisticsCommand
 */
export const de_GetQueryRuntimeStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryRuntimeStatisticsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetQueryRuntimeStatisticsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetQueryRuntimeStatisticsOutput(data, context);
  const response: GetQueryRuntimeStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetQueryRuntimeStatisticsCommandError
 */
const de_GetQueryRuntimeStatisticsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetSessionCommand
 */
export const de_GetSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSessionResponse(data, context);
  const response: GetSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSessionCommandError
 */
const de_GetSessionCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetSessionStatusCommand
 */
export const de_GetSessionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSessionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSessionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSessionStatusResponse(data, context);
  const response: GetSessionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSessionStatusCommandError
 */
const de_GetSessionStatusCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetTableMetadataCommand
 */
export const de_GetTableMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTableMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTableMetadataOutput(data, context);
  const response: GetTableMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetTableMetadataCommandError
 */
const de_GetTableMetadataCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MetadataException":
    case "com.amazonaws.athena#MetadataException":
      throw await de_MetadataExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetWorkGroupCommand
 */
export const de_GetWorkGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetWorkGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetWorkGroupOutput(data, context);
  const response: GetWorkGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetWorkGroupCommandError
 */
const de_GetWorkGroupCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ImportNotebookCommand
 */
export const de_ImportNotebookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportNotebookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportNotebookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportNotebookOutput(data, context);
  const response: ImportNotebookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ImportNotebookCommandError
 */
const de_ImportNotebookCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListApplicationDPUSizesCommand
 */
export const de_ListApplicationDPUSizesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationDPUSizesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListApplicationDPUSizesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListApplicationDPUSizesOutput(data, context);
  const response: ListApplicationDPUSizesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListApplicationDPUSizesCommandError
 */
const de_ListApplicationDPUSizesCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListCalculationExecutionsCommand
 */
export const de_ListCalculationExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCalculationExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCalculationExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCalculationExecutionsResponse(data, context);
  const response: ListCalculationExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCalculationExecutionsCommandError
 */
const de_ListCalculationExecutionsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListDatabasesCommand
 */
export const de_ListDatabasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatabasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDatabasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDatabasesOutput(data, context);
  const response: ListDatabasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDatabasesCommandError
 */
const de_ListDatabasesCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MetadataException":
    case "com.amazonaws.athena#MetadataException":
      throw await de_MetadataExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListDataCatalogsCommand
 */
export const de_ListDataCatalogsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataCatalogsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDataCatalogsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDataCatalogsOutput(data, context);
  const response: ListDataCatalogsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDataCatalogsCommandError
 */
const de_ListDataCatalogsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListEngineVersionsCommand
 */
export const de_ListEngineVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEngineVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEngineVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEngineVersionsOutput(data, context);
  const response: ListEngineVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListEngineVersionsCommandError
 */
const de_ListEngineVersionsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListExecutorsCommand
 */
export const de_ListExecutorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExecutorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListExecutorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListExecutorsResponse(data, context);
  const response: ListExecutorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListExecutorsCommandError
 */
const de_ListExecutorsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListNamedQueriesCommand
 */
export const de_ListNamedQueriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamedQueriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListNamedQueriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListNamedQueriesOutput(data, context);
  const response: ListNamedQueriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListNamedQueriesCommandError
 */
const de_ListNamedQueriesCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListNotebookMetadataCommand
 */
export const de_ListNotebookMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotebookMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListNotebookMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListNotebookMetadataOutput(data, context);
  const response: ListNotebookMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListNotebookMetadataCommandError
 */
const de_ListNotebookMetadataCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListNotebookSessionsCommand
 */
export const de_ListNotebookSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotebookSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListNotebookSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListNotebookSessionsResponse(data, context);
  const response: ListNotebookSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListNotebookSessionsCommandError
 */
const de_ListNotebookSessionsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListPreparedStatementsCommand
 */
export const de_ListPreparedStatementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPreparedStatementsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPreparedStatementsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPreparedStatementsOutput(data, context);
  const response: ListPreparedStatementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPreparedStatementsCommandError
 */
const de_ListPreparedStatementsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListQueryExecutionsCommand
 */
export const de_ListQueryExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueryExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListQueryExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListQueryExecutionsOutput(data, context);
  const response: ListQueryExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListQueryExecutionsCommandError
 */
const de_ListQueryExecutionsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListSessionsCommand
 */
export const de_ListSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSessionsResponse(data, context);
  const response: ListSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSessionsCommandError
 */
const de_ListSessionsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListTableMetadataCommand
 */
export const de_ListTableMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTableMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTableMetadataOutput(data, context);
  const response: ListTableMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTableMetadataCommandError
 */
const de_ListTableMetadataCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MetadataException":
    case "com.amazonaws.athena#MetadataException":
      throw await de_MetadataExceptionRes(parsedOutput, context);
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
  contents = de_ListTagsForResourceOutput(data, context);
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
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListWorkGroupsCommand
 */
export const de_ListWorkGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListWorkGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListWorkGroupsOutput(data, context);
  const response: ListWorkGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListWorkGroupsCommandError
 */
const de_ListWorkGroupsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartCalculationExecutionCommand
 */
export const de_StartCalculationExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCalculationExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartCalculationExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartCalculationExecutionResponse(data, context);
  const response: StartCalculationExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartCalculationExecutionCommandError
 */
const de_StartCalculationExecutionCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
 * deserializeAws_json1_1StartQueryExecutionCommand
 */
export const de_StartQueryExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartQueryExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartQueryExecutionOutput(data, context);
  const response: StartQueryExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartQueryExecutionCommandError
 */
const de_StartQueryExecutionCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartSessionCommand
 */
export const de_StartSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartSessionResponse(data, context);
  const response: StartSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartSessionCommandError
 */
const de_StartSessionCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "SessionAlreadyExistsException":
    case "com.amazonaws.athena#SessionAlreadyExistsException":
      throw await de_SessionAlreadyExistsExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopCalculationExecutionCommand
 */
export const de_StopCalculationExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCalculationExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopCalculationExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopCalculationExecutionResponse(data, context);
  const response: StopCalculationExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopCalculationExecutionCommandError
 */
const de_StopCalculationExecutionCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
 * deserializeAws_json1_1StopQueryExecutionCommand
 */
export const de_StopQueryExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopQueryExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopQueryExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopQueryExecutionOutput(data, context);
  const response: StopQueryExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopQueryExecutionCommandError
 */
const de_StopQueryExecutionCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
  contents = de_TagResourceOutput(data, context);
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
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
 * deserializeAws_json1_1TerminateSessionCommand
 */
export const de_TerminateSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TerminateSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TerminateSessionResponse(data, context);
  const response: TerminateSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TerminateSessionCommandError
 */
const de_TerminateSessionCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
  contents = de_UntagResourceOutput(data, context);
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
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
 * deserializeAws_json1_1UpdateDataCatalogCommand
 */
export const de_UpdateDataCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDataCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDataCatalogOutput(data, context);
  const response: UpdateDataCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDataCatalogCommandError
 */
const de_UpdateDataCatalogCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateNamedQueryCommand
 */
export const de_UpdateNamedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNamedQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateNamedQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateNamedQueryOutput(data, context);
  const response: UpdateNamedQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateNamedQueryCommandError
 */
const de_UpdateNamedQueryCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateNotebookCommand
 */
export const de_UpdateNotebookCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotebookCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateNotebookCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateNotebookOutput(data, context);
  const response: UpdateNotebookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateNotebookCommandError
 */
const de_UpdateNotebookCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateNotebookMetadataCommand
 */
export const de_UpdateNotebookMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotebookMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateNotebookMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateNotebookMetadataOutput(data, context);
  const response: UpdateNotebookMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateNotebookMetadataCommandError
 */
const de_UpdateNotebookMetadataCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdatePreparedStatementCommand
 */
export const de_UpdatePreparedStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePreparedStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePreparedStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePreparedStatementOutput(data, context);
  const response: UpdatePreparedStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdatePreparedStatementCommandError
 */
const de_UpdatePreparedStatementCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
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
 * deserializeAws_json1_1UpdateWorkGroupCommand
 */
export const de_UpdateWorkGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateWorkGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateWorkGroupOutput(data, context);
  const response: UpdateWorkGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateWorkGroupCommandError
 */
const de_UpdateWorkGroupCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1MetadataExceptionRes
 */
const de_MetadataExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<MetadataException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MetadataException(body, context);
  const exception = new MetadataException({
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
 * deserializeAws_json1_1SessionAlreadyExistsExceptionRes
 */
const de_SessionAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SessionAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SessionAlreadyExistsException(body, context);
  const exception = new SessionAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyRequestsException(body, context);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AclConfiguration
 */
const se_AclConfiguration = (input: AclConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.S3AclOption != null && { S3AclOption: input.S3AclOption }),
  };
};

/**
 * serializeAws_json1_1BatchGetNamedQueryInput
 */
const se_BatchGetNamedQueryInput = (input: BatchGetNamedQueryInput, context: __SerdeContext): any => {
  return {
    ...(input.NamedQueryIds != null && { NamedQueryIds: se_NamedQueryIdList(input.NamedQueryIds, context) }),
  };
};

/**
 * serializeAws_json1_1BatchGetPreparedStatementInput
 */
const se_BatchGetPreparedStatementInput = (input: BatchGetPreparedStatementInput, context: __SerdeContext): any => {
  return {
    ...(input.PreparedStatementNames != null && {
      PreparedStatementNames: se_PreparedStatementNameList(input.PreparedStatementNames, context),
    }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

/**
 * serializeAws_json1_1BatchGetQueryExecutionInput
 */
const se_BatchGetQueryExecutionInput = (input: BatchGetQueryExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.QueryExecutionIds != null && {
      QueryExecutionIds: se_QueryExecutionIdList(input.QueryExecutionIds, context),
    }),
  };
};

/**
 * serializeAws_json1_1CalculationConfiguration
 */
const se_CalculationConfiguration = (input: CalculationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CodeBlock != null && { CodeBlock: input.CodeBlock }),
  };
};

/**
 * serializeAws_json1_1CreateDataCatalogInput
 */
const se_CreateDataCatalogInput = (input: CreateDataCatalogInput, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Parameters != null && { Parameters: se_ParametersMap(input.Parameters, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1CreateNamedQueryInput
 */
const se_CreateNamedQueryInput = (input: CreateNamedQueryInput, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Database != null && { Database: input.Database }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.QueryString != null && { QueryString: input.QueryString }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

/**
 * serializeAws_json1_1CreateNotebookInput
 */
const se_CreateNotebookInput = (input: CreateNotebookInput, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

/**
 * serializeAws_json1_1CreatePreparedStatementInput
 */
const se_CreatePreparedStatementInput = (input: CreatePreparedStatementInput, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.QueryStatement != null && { QueryStatement: input.QueryStatement }),
    ...(input.StatementName != null && { StatementName: input.StatementName }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

/**
 * serializeAws_json1_1CreatePresignedNotebookUrlRequest
 */
const se_CreatePresignedNotebookUrlRequest = (
  input: CreatePresignedNotebookUrlRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

/**
 * serializeAws_json1_1CreateWorkGroupInput
 */
const se_CreateWorkGroupInput = (input: CreateWorkGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.Configuration != null && { Configuration: se_WorkGroupConfiguration(input.Configuration, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CustomerContentEncryptionConfiguration
 */
const se_CustomerContentEncryptionConfiguration = (
  input: CustomerContentEncryptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKey != null && { KmsKey: input.KmsKey }),
  };
};

/**
 * serializeAws_json1_1DeleteDataCatalogInput
 */
const se_DeleteDataCatalogInput = (input: DeleteDataCatalogInput, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteNamedQueryInput
 */
const se_DeleteNamedQueryInput = (input: DeleteNamedQueryInput, context: __SerdeContext): any => {
  return {
    NamedQueryId: input.NamedQueryId ?? generateIdempotencyToken(),
  };
};

/**
 * serializeAws_json1_1DeleteNotebookInput
 */
const se_DeleteNotebookInput = (input: DeleteNotebookInput, context: __SerdeContext): any => {
  return {
    ...(input.NotebookId != null && { NotebookId: input.NotebookId }),
  };
};

/**
 * serializeAws_json1_1DeletePreparedStatementInput
 */
const se_DeletePreparedStatementInput = (input: DeletePreparedStatementInput, context: __SerdeContext): any => {
  return {
    ...(input.StatementName != null && { StatementName: input.StatementName }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

/**
 * serializeAws_json1_1DeleteWorkGroupInput
 */
const se_DeleteWorkGroupInput = (input: DeleteWorkGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.RecursiveDeleteOption != null && { RecursiveDeleteOption: input.RecursiveDeleteOption }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

/**
 * serializeAws_json1_1EncryptionConfiguration
 */
const se_EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionOption != null && { EncryptionOption: input.EncryptionOption }),
    ...(input.KmsKey != null && { KmsKey: input.KmsKey }),
  };
};

/**
 * serializeAws_json1_1EngineConfiguration
 */
const se_EngineConfiguration = (input: EngineConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalConfigs != null && { AdditionalConfigs: se_ParametersMap(input.AdditionalConfigs, context) }),
    ...(input.CoordinatorDpuSize != null && { CoordinatorDpuSize: input.CoordinatorDpuSize }),
    ...(input.DefaultExecutorDpuSize != null && { DefaultExecutorDpuSize: input.DefaultExecutorDpuSize }),
    ...(input.MaxConcurrentDpus != null && { MaxConcurrentDpus: input.MaxConcurrentDpus }),
  };
};

/**
 * serializeAws_json1_1EngineVersion
 */
const se_EngineVersion = (input: EngineVersion, context: __SerdeContext): any => {
  return {
    ...(input.EffectiveEngineVersion != null && { EffectiveEngineVersion: input.EffectiveEngineVersion }),
    ...(input.SelectedEngineVersion != null && { SelectedEngineVersion: input.SelectedEngineVersion }),
  };
};

/**
 * serializeAws_json1_1ExecutionParameters
 */
const se_ExecutionParameters = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ExportNotebookInput
 */
const se_ExportNotebookInput = (input: ExportNotebookInput, context: __SerdeContext): any => {
  return {
    ...(input.NotebookId != null && { NotebookId: input.NotebookId }),
  };
};

/**
 * serializeAws_json1_1FilterDefinition
 */
const se_FilterDefinition = (input: FilterDefinition, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1GetCalculationExecutionCodeRequest
 */
const se_GetCalculationExecutionCodeRequest = (
  input: GetCalculationExecutionCodeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CalculationExecutionId != null && { CalculationExecutionId: input.CalculationExecutionId }),
  };
};

/**
 * serializeAws_json1_1GetCalculationExecutionRequest
 */
const se_GetCalculationExecutionRequest = (input: GetCalculationExecutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CalculationExecutionId != null && { CalculationExecutionId: input.CalculationExecutionId }),
  };
};

/**
 * serializeAws_json1_1GetCalculationExecutionStatusRequest
 */
const se_GetCalculationExecutionStatusRequest = (
  input: GetCalculationExecutionStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CalculationExecutionId != null && { CalculationExecutionId: input.CalculationExecutionId }),
  };
};

/**
 * serializeAws_json1_1GetDatabaseInput
 */
const se_GetDatabaseInput = (input: GetDatabaseInput, context: __SerdeContext): any => {
  return {
    ...(input.CatalogName != null && { CatalogName: input.CatalogName }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
  };
};

/**
 * serializeAws_json1_1GetDataCatalogInput
 */
const se_GetDataCatalogInput = (input: GetDataCatalogInput, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1GetNamedQueryInput
 */
const se_GetNamedQueryInput = (input: GetNamedQueryInput, context: __SerdeContext): any => {
  return {
    ...(input.NamedQueryId != null && { NamedQueryId: input.NamedQueryId }),
  };
};

/**
 * serializeAws_json1_1GetNotebookMetadataInput
 */
const se_GetNotebookMetadataInput = (input: GetNotebookMetadataInput, context: __SerdeContext): any => {
  return {
    ...(input.NotebookId != null && { NotebookId: input.NotebookId }),
  };
};

/**
 * serializeAws_json1_1GetPreparedStatementInput
 */
const se_GetPreparedStatementInput = (input: GetPreparedStatementInput, context: __SerdeContext): any => {
  return {
    ...(input.StatementName != null && { StatementName: input.StatementName }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

/**
 * serializeAws_json1_1GetQueryExecutionInput
 */
const se_GetQueryExecutionInput = (input: GetQueryExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.QueryExecutionId != null && { QueryExecutionId: input.QueryExecutionId }),
  };
};

/**
 * serializeAws_json1_1GetQueryResultsInput
 */
const se_GetQueryResultsInput = (input: GetQueryResultsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.QueryExecutionId != null && { QueryExecutionId: input.QueryExecutionId }),
  };
};

/**
 * serializeAws_json1_1GetQueryRuntimeStatisticsInput
 */
const se_GetQueryRuntimeStatisticsInput = (input: GetQueryRuntimeStatisticsInput, context: __SerdeContext): any => {
  return {
    ...(input.QueryExecutionId != null && { QueryExecutionId: input.QueryExecutionId }),
  };
};

/**
 * serializeAws_json1_1GetSessionRequest
 */
const se_GetSessionRequest = (input: GetSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

/**
 * serializeAws_json1_1GetSessionStatusRequest
 */
const se_GetSessionStatusRequest = (input: GetSessionStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

/**
 * serializeAws_json1_1GetTableMetadataInput
 */
const se_GetTableMetadataInput = (input: GetTableMetadataInput, context: __SerdeContext): any => {
  return {
    ...(input.CatalogName != null && { CatalogName: input.CatalogName }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_1GetWorkGroupInput
 */
const se_GetWorkGroupInput = (input: GetWorkGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

/**
 * serializeAws_json1_1ImportNotebookInput
 */
const se_ImportNotebookInput = (input: ImportNotebookInput, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Payload != null && { Payload: input.Payload }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

/**
 * serializeAws_json1_1ListApplicationDPUSizesInput
 */
const se_ListApplicationDPUSizesInput = (input: ListApplicationDPUSizesInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListCalculationExecutionsRequest
 */
const se_ListCalculationExecutionsRequest = (input: ListCalculationExecutionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SessionId != null && { SessionId: input.SessionId }),
    ...(input.StateFilter != null && { StateFilter: input.StateFilter }),
  };
};

/**
 * serializeAws_json1_1ListDatabasesInput
 */
const se_ListDatabasesInput = (input: ListDatabasesInput, context: __SerdeContext): any => {
  return {
    ...(input.CatalogName != null && { CatalogName: input.CatalogName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListDataCatalogsInput
 */
const se_ListDataCatalogsInput = (input: ListDataCatalogsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListEngineVersionsInput
 */
const se_ListEngineVersionsInput = (input: ListEngineVersionsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListExecutorsRequest
 */
const se_ListExecutorsRequest = (input: ListExecutorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExecutorStateFilter != null && { ExecutorStateFilter: input.ExecutorStateFilter }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

/**
 * serializeAws_json1_1ListNamedQueriesInput
 */
const se_ListNamedQueriesInput = (input: ListNamedQueriesInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

/**
 * serializeAws_json1_1ListNotebookMetadataInput
 */
const se_ListNotebookMetadataInput = (input: ListNotebookMetadataInput, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterDefinition(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

/**
 * serializeAws_json1_1ListNotebookSessionsRequest
 */
const se_ListNotebookSessionsRequest = (input: ListNotebookSessionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.NotebookId != null && { NotebookId: input.NotebookId }),
  };
};

/**
 * serializeAws_json1_1ListPreparedStatementsInput
 */
const se_ListPreparedStatementsInput = (input: ListPreparedStatementsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

/**
 * serializeAws_json1_1ListQueryExecutionsInput
 */
const se_ListQueryExecutionsInput = (input: ListQueryExecutionsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

/**
 * serializeAws_json1_1ListSessionsRequest
 */
const se_ListSessionsRequest = (input: ListSessionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StateFilter != null && { StateFilter: input.StateFilter }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

/**
 * serializeAws_json1_1ListTableMetadataInput
 */
const se_ListTableMetadataInput = (input: ListTableMetadataInput, context: __SerdeContext): any => {
  return {
    ...(input.CatalogName != null && { CatalogName: input.CatalogName }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Expression != null && { Expression: input.Expression }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceInput
 */
const se_ListTagsForResourceInput = (input: ListTagsForResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_1ListWorkGroupsInput
 */
const se_ListWorkGroupsInput = (input: ListWorkGroupsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1NamedQueryIdList
 */
const se_NamedQueryIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ParametersMap
 */
const se_ParametersMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1PreparedStatementNameList
 */
const se_PreparedStatementNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1QueryExecutionContext
 */
const se_QueryExecutionContext = (input: QueryExecutionContext, context: __SerdeContext): any => {
  return {
    ...(input.Catalog != null && { Catalog: input.Catalog }),
    ...(input.Database != null && { Database: input.Database }),
  };
};

/**
 * serializeAws_json1_1QueryExecutionIdList
 */
const se_QueryExecutionIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResultConfiguration
 */
const se_ResultConfiguration = (input: ResultConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AclConfiguration != null && { AclConfiguration: se_AclConfiguration(input.AclConfiguration, context) }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: se_EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.ExpectedBucketOwner != null && { ExpectedBucketOwner: input.ExpectedBucketOwner }),
    ...(input.OutputLocation != null && { OutputLocation: input.OutputLocation }),
  };
};

/**
 * serializeAws_json1_1ResultConfigurationUpdates
 */
const se_ResultConfigurationUpdates = (input: ResultConfigurationUpdates, context: __SerdeContext): any => {
  return {
    ...(input.AclConfiguration != null && { AclConfiguration: se_AclConfiguration(input.AclConfiguration, context) }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: se_EncryptionConfiguration(input.EncryptionConfiguration, context),
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

/**
 * serializeAws_json1_1ResultReuseByAgeConfiguration
 */
const se_ResultReuseByAgeConfiguration = (input: ResultReuseByAgeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.MaxAgeInMinutes != null && { MaxAgeInMinutes: input.MaxAgeInMinutes }),
  };
};

/**
 * serializeAws_json1_1ResultReuseConfiguration
 */
const se_ResultReuseConfiguration = (input: ResultReuseConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ResultReuseByAgeConfiguration != null && {
      ResultReuseByAgeConfiguration: se_ResultReuseByAgeConfiguration(input.ResultReuseByAgeConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1StartCalculationExecutionRequest
 */
const se_StartCalculationExecutionRequest = (input: StartCalculationExecutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CalculationConfiguration != null && {
      CalculationConfiguration: se_CalculationConfiguration(input.CalculationConfiguration, context),
    }),
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.CodeBlock != null && { CodeBlock: input.CodeBlock }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

/**
 * serializeAws_json1_1StartQueryExecutionInput
 */
const se_StartQueryExecutionInput = (input: StartQueryExecutionInput, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.ExecutionParameters != null && {
      ExecutionParameters: se_ExecutionParameters(input.ExecutionParameters, context),
    }),
    ...(input.QueryExecutionContext != null && {
      QueryExecutionContext: se_QueryExecutionContext(input.QueryExecutionContext, context),
    }),
    ...(input.QueryString != null && { QueryString: input.QueryString }),
    ...(input.ResultConfiguration != null && {
      ResultConfiguration: se_ResultConfiguration(input.ResultConfiguration, context),
    }),
    ...(input.ResultReuseConfiguration != null && {
      ResultReuseConfiguration: se_ResultReuseConfiguration(input.ResultReuseConfiguration, context),
    }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

/**
 * serializeAws_json1_1StartSessionRequest
 */
const se_StartSessionRequest = (input: StartSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EngineConfiguration != null && {
      EngineConfiguration: se_EngineConfiguration(input.EngineConfiguration, context),
    }),
    ...(input.NotebookVersion != null && { NotebookVersion: input.NotebookVersion }),
    ...(input.SessionIdleTimeoutInMinutes != null && {
      SessionIdleTimeoutInMinutes: input.SessionIdleTimeoutInMinutes,
    }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

/**
 * serializeAws_json1_1StopCalculationExecutionRequest
 */
const se_StopCalculationExecutionRequest = (input: StopCalculationExecutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CalculationExecutionId != null && { CalculationExecutionId: input.CalculationExecutionId }),
  };
};

/**
 * serializeAws_json1_1StopQueryExecutionInput
 */
const se_StopQueryExecutionInput = (input: StopQueryExecutionInput, context: __SerdeContext): any => {
  return {
    QueryExecutionId: input.QueryExecutionId ?? generateIdempotencyToken(),
  };
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
 * serializeAws_json1_1TagResourceInput
 */
const se_TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1TerminateSessionRequest
 */
const se_TerminateSessionRequest = (input: TerminateSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.SessionId != null && { SessionId: input.SessionId }),
  };
};

/**
 * serializeAws_json1_1UntagResourceInput
 */
const se_UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateDataCatalogInput
 */
const se_UpdateDataCatalogInput = (input: UpdateDataCatalogInput, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Parameters != null && { Parameters: se_ParametersMap(input.Parameters, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1UpdateNamedQueryInput
 */
const se_UpdateNamedQueryInput = (input: UpdateNamedQueryInput, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NamedQueryId != null && { NamedQueryId: input.NamedQueryId }),
    ...(input.QueryString != null && { QueryString: input.QueryString }),
  };
};

/**
 * serializeAws_json1_1UpdateNotebookInput
 */
const se_UpdateNotebookInput = (input: UpdateNotebookInput, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.NotebookId != null && { NotebookId: input.NotebookId }),
    ...(input.Payload != null && { Payload: input.Payload }),
    ...(input.SessionId != null && { SessionId: input.SessionId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1UpdateNotebookMetadataInput
 */
const se_UpdateNotebookMetadataInput = (input: UpdateNotebookMetadataInput, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotebookId != null && { NotebookId: input.NotebookId }),
  };
};

/**
 * serializeAws_json1_1UpdatePreparedStatementInput
 */
const se_UpdatePreparedStatementInput = (input: UpdatePreparedStatementInput, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.QueryStatement != null && { QueryStatement: input.QueryStatement }),
    ...(input.StatementName != null && { StatementName: input.StatementName }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

/**
 * serializeAws_json1_1UpdateWorkGroupInput
 */
const se_UpdateWorkGroupInput = (input: UpdateWorkGroupInput, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationUpdates != null && {
      ConfigurationUpdates: se_WorkGroupConfigurationUpdates(input.ConfigurationUpdates, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.State != null && { State: input.State }),
    ...(input.WorkGroup != null && { WorkGroup: input.WorkGroup }),
  };
};

/**
 * serializeAws_json1_1WorkGroupConfiguration
 */
const se_WorkGroupConfiguration = (input: WorkGroupConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalConfiguration != null && { AdditionalConfiguration: input.AdditionalConfiguration }),
    ...(input.BytesScannedCutoffPerQuery != null && { BytesScannedCutoffPerQuery: input.BytesScannedCutoffPerQuery }),
    ...(input.CustomerContentEncryptionConfiguration != null && {
      CustomerContentEncryptionConfiguration: se_CustomerContentEncryptionConfiguration(
        input.CustomerContentEncryptionConfiguration,
        context
      ),
    }),
    ...(input.EnableMinimumEncryptionConfiguration != null && {
      EnableMinimumEncryptionConfiguration: input.EnableMinimumEncryptionConfiguration,
    }),
    ...(input.EnforceWorkGroupConfiguration != null && {
      EnforceWorkGroupConfiguration: input.EnforceWorkGroupConfiguration,
    }),
    ...(input.EngineVersion != null && { EngineVersion: se_EngineVersion(input.EngineVersion, context) }),
    ...(input.ExecutionRole != null && { ExecutionRole: input.ExecutionRole }),
    ...(input.PublishCloudWatchMetricsEnabled != null && {
      PublishCloudWatchMetricsEnabled: input.PublishCloudWatchMetricsEnabled,
    }),
    ...(input.RequesterPaysEnabled != null && { RequesterPaysEnabled: input.RequesterPaysEnabled }),
    ...(input.ResultConfiguration != null && {
      ResultConfiguration: se_ResultConfiguration(input.ResultConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1WorkGroupConfigurationUpdates
 */
const se_WorkGroupConfigurationUpdates = (input: WorkGroupConfigurationUpdates, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalConfiguration != null && { AdditionalConfiguration: input.AdditionalConfiguration }),
    ...(input.BytesScannedCutoffPerQuery != null && { BytesScannedCutoffPerQuery: input.BytesScannedCutoffPerQuery }),
    ...(input.CustomerContentEncryptionConfiguration != null && {
      CustomerContentEncryptionConfiguration: se_CustomerContentEncryptionConfiguration(
        input.CustomerContentEncryptionConfiguration,
        context
      ),
    }),
    ...(input.EnableMinimumEncryptionConfiguration != null && {
      EnableMinimumEncryptionConfiguration: input.EnableMinimumEncryptionConfiguration,
    }),
    ...(input.EnforceWorkGroupConfiguration != null && {
      EnforceWorkGroupConfiguration: input.EnforceWorkGroupConfiguration,
    }),
    ...(input.EngineVersion != null && { EngineVersion: se_EngineVersion(input.EngineVersion, context) }),
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
      ResultConfigurationUpdates: se_ResultConfigurationUpdates(input.ResultConfigurationUpdates, context),
    }),
  };
};

/**
 * deserializeAws_json1_1AclConfiguration
 */
const de_AclConfiguration = (output: any, context: __SerdeContext): AclConfiguration => {
  return {
    S3AclOption: __expectString(output.S3AclOption),
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationDPUSizes
 */
const de_ApplicationDPUSizes = (output: any, context: __SerdeContext): ApplicationDPUSizes => {
  return {
    ApplicationRuntimeId: __expectString(output.ApplicationRuntimeId),
    SupportedDPUSizes:
      output.SupportedDPUSizes != null ? de_SupportedDPUSizeList(output.SupportedDPUSizes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationDPUSizesList
 */
const de_ApplicationDPUSizesList = (output: any, context: __SerdeContext): ApplicationDPUSizes[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ApplicationDPUSizes(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AthenaError
 */
const de_AthenaError = (output: any, context: __SerdeContext): AthenaError => {
  return {
    ErrorCategory: __expectInt32(output.ErrorCategory),
    ErrorMessage: __expectString(output.ErrorMessage),
    ErrorType: __expectInt32(output.ErrorType),
    Retryable: __expectBoolean(output.Retryable),
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetNamedQueryOutput
 */
const de_BatchGetNamedQueryOutput = (output: any, context: __SerdeContext): BatchGetNamedQueryOutput => {
  return {
    NamedQueries: output.NamedQueries != null ? de_NamedQueryList(output.NamedQueries, context) : undefined,
    UnprocessedNamedQueryIds:
      output.UnprocessedNamedQueryIds != null
        ? de_UnprocessedNamedQueryIdList(output.UnprocessedNamedQueryIds, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetPreparedStatementOutput
 */
const de_BatchGetPreparedStatementOutput = (output: any, context: __SerdeContext): BatchGetPreparedStatementOutput => {
  return {
    PreparedStatements:
      output.PreparedStatements != null
        ? de_PreparedStatementDetailsList(output.PreparedStatements, context)
        : undefined,
    UnprocessedPreparedStatementNames:
      output.UnprocessedPreparedStatementNames != null
        ? de_UnprocessedPreparedStatementNameList(output.UnprocessedPreparedStatementNames, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchGetQueryExecutionOutput
 */
const de_BatchGetQueryExecutionOutput = (output: any, context: __SerdeContext): BatchGetQueryExecutionOutput => {
  return {
    QueryExecutions:
      output.QueryExecutions != null ? de_QueryExecutionList(output.QueryExecutions, context) : undefined,
    UnprocessedQueryExecutionIds:
      output.UnprocessedQueryExecutionIds != null
        ? de_UnprocessedQueryExecutionIdList(output.UnprocessedQueryExecutionIds, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CalculationResult
 */
const de_CalculationResult = (output: any, context: __SerdeContext): CalculationResult => {
  return {
    ResultS3Uri: __expectString(output.ResultS3Uri),
    ResultType: __expectString(output.ResultType),
    StdErrorS3Uri: __expectString(output.StdErrorS3Uri),
    StdOutS3Uri: __expectString(output.StdOutS3Uri),
  } as any;
};

/**
 * deserializeAws_json1_1CalculationsList
 */
const de_CalculationsList = (output: any, context: __SerdeContext): CalculationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CalculationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CalculationStatistics
 */
const de_CalculationStatistics = (output: any, context: __SerdeContext): CalculationStatistics => {
  return {
    DpuExecutionInMillis: __expectLong(output.DpuExecutionInMillis),
    Progress: __expectString(output.Progress),
  } as any;
};

/**
 * deserializeAws_json1_1CalculationStatus
 */
const de_CalculationStatus = (output: any, context: __SerdeContext): CalculationStatus => {
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

/**
 * deserializeAws_json1_1CalculationSummary
 */
const de_CalculationSummary = (output: any, context: __SerdeContext): CalculationSummary => {
  return {
    CalculationExecutionId: __expectString(output.CalculationExecutionId),
    Description: __expectString(output.Description),
    Status: output.Status != null ? de_CalculationStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Column
 */
const de_Column = (output: any, context: __SerdeContext): Column => {
  return {
    Comment: __expectString(output.Comment),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ColumnInfo
 */
const de_ColumnInfo = (output: any, context: __SerdeContext): ColumnInfo => {
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

/**
 * deserializeAws_json1_1ColumnInfoList
 */
const de_ColumnInfoList = (output: any, context: __SerdeContext): ColumnInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ColumnInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ColumnList
 */
const de_ColumnList = (output: any, context: __SerdeContext): Column[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Column(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateDataCatalogOutput
 */
const de_CreateDataCatalogOutput = (output: any, context: __SerdeContext): CreateDataCatalogOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreateNamedQueryOutput
 */
const de_CreateNamedQueryOutput = (output: any, context: __SerdeContext): CreateNamedQueryOutput => {
  return {
    NamedQueryId: __expectString(output.NamedQueryId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateNotebookOutput
 */
const de_CreateNotebookOutput = (output: any, context: __SerdeContext): CreateNotebookOutput => {
  return {
    NotebookId: __expectString(output.NotebookId),
  } as any;
};

/**
 * deserializeAws_json1_1CreatePreparedStatementOutput
 */
const de_CreatePreparedStatementOutput = (output: any, context: __SerdeContext): CreatePreparedStatementOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreatePresignedNotebookUrlResponse
 */
const de_CreatePresignedNotebookUrlResponse = (
  output: any,
  context: __SerdeContext
): CreatePresignedNotebookUrlResponse => {
  return {
    AuthToken: __expectString(output.AuthToken),
    AuthTokenExpirationTime: __expectLong(output.AuthTokenExpirationTime),
    NotebookUrl: __expectString(output.NotebookUrl),
  } as any;
};

/**
 * deserializeAws_json1_1CreateWorkGroupOutput
 */
const de_CreateWorkGroupOutput = (output: any, context: __SerdeContext): CreateWorkGroupOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CustomerContentEncryptionConfiguration
 */
const de_CustomerContentEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): CustomerContentEncryptionConfiguration => {
  return {
    KmsKey: __expectString(output.KmsKey),
  } as any;
};

/**
 * deserializeAws_json1_1Database
 */
const de_Database = (output: any, context: __SerdeContext): Database => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    Parameters: output.Parameters != null ? de_ParametersMap(output.Parameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DatabaseList
 */
const de_DatabaseList = (output: any, context: __SerdeContext): Database[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Database(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DataCatalog
 */
const de_DataCatalog = (output: any, context: __SerdeContext): DataCatalog => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    Parameters: output.Parameters != null ? de_ParametersMap(output.Parameters, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1DataCatalogSummary
 */
const de_DataCatalogSummary = (output: any, context: __SerdeContext): DataCatalogSummary => {
  return {
    CatalogName: __expectString(output.CatalogName),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1DataCatalogSummaryList
 */
const de_DataCatalogSummaryList = (output: any, context: __SerdeContext): DataCatalogSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataCatalogSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Datum
 */
const de_Datum = (output: any, context: __SerdeContext): Datum => {
  return {
    VarCharValue: __expectString(output.VarCharValue),
  } as any;
};

/**
 * deserializeAws_json1_1datumList
 */
const de_datumList = (output: any, context: __SerdeContext): Datum[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Datum(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeleteDataCatalogOutput
 */
const de_DeleteDataCatalogOutput = (output: any, context: __SerdeContext): DeleteDataCatalogOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteNamedQueryOutput
 */
const de_DeleteNamedQueryOutput = (output: any, context: __SerdeContext): DeleteNamedQueryOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteNotebookOutput
 */
const de_DeleteNotebookOutput = (output: any, context: __SerdeContext): DeleteNotebookOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeletePreparedStatementOutput
 */
const de_DeletePreparedStatementOutput = (output: any, context: __SerdeContext): DeletePreparedStatementOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteWorkGroupOutput
 */
const de_DeleteWorkGroupOutput = (output: any, context: __SerdeContext): DeleteWorkGroupOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1EncryptionConfiguration
 */
const de_EncryptionConfiguration = (output: any, context: __SerdeContext): EncryptionConfiguration => {
  return {
    EncryptionOption: __expectString(output.EncryptionOption),
    KmsKey: __expectString(output.KmsKey),
  } as any;
};

/**
 * deserializeAws_json1_1EngineConfiguration
 */
const de_EngineConfiguration = (output: any, context: __SerdeContext): EngineConfiguration => {
  return {
    AdditionalConfigs:
      output.AdditionalConfigs != null ? de_ParametersMap(output.AdditionalConfigs, context) : undefined,
    CoordinatorDpuSize: __expectInt32(output.CoordinatorDpuSize),
    DefaultExecutorDpuSize: __expectInt32(output.DefaultExecutorDpuSize),
    MaxConcurrentDpus: __expectInt32(output.MaxConcurrentDpus),
  } as any;
};

/**
 * deserializeAws_json1_1EngineVersion
 */
const de_EngineVersion = (output: any, context: __SerdeContext): EngineVersion => {
  return {
    EffectiveEngineVersion: __expectString(output.EffectiveEngineVersion),
    SelectedEngineVersion: __expectString(output.SelectedEngineVersion),
  } as any;
};

/**
 * deserializeAws_json1_1EngineVersionsList
 */
const de_EngineVersionsList = (output: any, context: __SerdeContext): EngineVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EngineVersion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExecutionParameters
 */
const de_ExecutionParameters = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ExecutorsSummary
 */
const de_ExecutorsSummary = (output: any, context: __SerdeContext): ExecutorsSummary => {
  return {
    ExecutorId: __expectString(output.ExecutorId),
    ExecutorSize: __expectLong(output.ExecutorSize),
    ExecutorState: __expectString(output.ExecutorState),
    ExecutorType: __expectString(output.ExecutorType),
    StartDateTime: __expectLong(output.StartDateTime),
    TerminationDateTime: __expectLong(output.TerminationDateTime),
  } as any;
};

/**
 * deserializeAws_json1_1ExecutorsSummaryList
 */
const de_ExecutorsSummaryList = (output: any, context: __SerdeContext): ExecutorsSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExecutorsSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExportNotebookOutput
 */
const de_ExportNotebookOutput = (output: any, context: __SerdeContext): ExportNotebookOutput => {
  return {
    NotebookMetadata:
      output.NotebookMetadata != null ? de_NotebookMetadata(output.NotebookMetadata, context) : undefined,
    Payload: __expectString(output.Payload),
  } as any;
};

/**
 * deserializeAws_json1_1GetCalculationExecutionCodeResponse
 */
const de_GetCalculationExecutionCodeResponse = (
  output: any,
  context: __SerdeContext
): GetCalculationExecutionCodeResponse => {
  return {
    CodeBlock: __expectString(output.CodeBlock),
  } as any;
};

/**
 * deserializeAws_json1_1GetCalculationExecutionResponse
 */
const de_GetCalculationExecutionResponse = (output: any, context: __SerdeContext): GetCalculationExecutionResponse => {
  return {
    CalculationExecutionId: __expectString(output.CalculationExecutionId),
    Description: __expectString(output.Description),
    Result: output.Result != null ? de_CalculationResult(output.Result, context) : undefined,
    SessionId: __expectString(output.SessionId),
    Statistics: output.Statistics != null ? de_CalculationStatistics(output.Statistics, context) : undefined,
    Status: output.Status != null ? de_CalculationStatus(output.Status, context) : undefined,
    WorkingDirectory: __expectString(output.WorkingDirectory),
  } as any;
};

/**
 * deserializeAws_json1_1GetCalculationExecutionStatusResponse
 */
const de_GetCalculationExecutionStatusResponse = (
  output: any,
  context: __SerdeContext
): GetCalculationExecutionStatusResponse => {
  return {
    Statistics: output.Statistics != null ? de_CalculationStatistics(output.Statistics, context) : undefined,
    Status: output.Status != null ? de_CalculationStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDatabaseOutput
 */
const de_GetDatabaseOutput = (output: any, context: __SerdeContext): GetDatabaseOutput => {
  return {
    Database: output.Database != null ? de_Database(output.Database, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDataCatalogOutput
 */
const de_GetDataCatalogOutput = (output: any, context: __SerdeContext): GetDataCatalogOutput => {
  return {
    DataCatalog: output.DataCatalog != null ? de_DataCatalog(output.DataCatalog, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetNamedQueryOutput
 */
const de_GetNamedQueryOutput = (output: any, context: __SerdeContext): GetNamedQueryOutput => {
  return {
    NamedQuery: output.NamedQuery != null ? de_NamedQuery(output.NamedQuery, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetNotebookMetadataOutput
 */
const de_GetNotebookMetadataOutput = (output: any, context: __SerdeContext): GetNotebookMetadataOutput => {
  return {
    NotebookMetadata:
      output.NotebookMetadata != null ? de_NotebookMetadata(output.NotebookMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetPreparedStatementOutput
 */
const de_GetPreparedStatementOutput = (output: any, context: __SerdeContext): GetPreparedStatementOutput => {
  return {
    PreparedStatement:
      output.PreparedStatement != null ? de_PreparedStatement(output.PreparedStatement, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetQueryExecutionOutput
 */
const de_GetQueryExecutionOutput = (output: any, context: __SerdeContext): GetQueryExecutionOutput => {
  return {
    QueryExecution: output.QueryExecution != null ? de_QueryExecution(output.QueryExecution, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetQueryResultsOutput
 */
const de_GetQueryResultsOutput = (output: any, context: __SerdeContext): GetQueryResultsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    ResultSet: output.ResultSet != null ? de_ResultSet(output.ResultSet, context) : undefined,
    UpdateCount: __expectLong(output.UpdateCount),
  } as any;
};

/**
 * deserializeAws_json1_1GetQueryRuntimeStatisticsOutput
 */
const de_GetQueryRuntimeStatisticsOutput = (output: any, context: __SerdeContext): GetQueryRuntimeStatisticsOutput => {
  return {
    QueryRuntimeStatistics:
      output.QueryRuntimeStatistics != null
        ? de_QueryRuntimeStatistics(output.QueryRuntimeStatistics, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetSessionResponse
 */
const de_GetSessionResponse = (output: any, context: __SerdeContext): GetSessionResponse => {
  return {
    Description: __expectString(output.Description),
    EngineConfiguration:
      output.EngineConfiguration != null ? de_EngineConfiguration(output.EngineConfiguration, context) : undefined,
    EngineVersion: __expectString(output.EngineVersion),
    NotebookVersion: __expectString(output.NotebookVersion),
    SessionConfiguration:
      output.SessionConfiguration != null ? de_SessionConfiguration(output.SessionConfiguration, context) : undefined,
    SessionId: __expectString(output.SessionId),
    Statistics: output.Statistics != null ? de_SessionStatistics(output.Statistics, context) : undefined,
    Status: output.Status != null ? de_SessionStatus(output.Status, context) : undefined,
    WorkGroup: __expectString(output.WorkGroup),
  } as any;
};

/**
 * deserializeAws_json1_1GetSessionStatusResponse
 */
const de_GetSessionStatusResponse = (output: any, context: __SerdeContext): GetSessionStatusResponse => {
  return {
    SessionId: __expectString(output.SessionId),
    Status: output.Status != null ? de_SessionStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetTableMetadataOutput
 */
const de_GetTableMetadataOutput = (output: any, context: __SerdeContext): GetTableMetadataOutput => {
  return {
    TableMetadata: output.TableMetadata != null ? de_TableMetadata(output.TableMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetWorkGroupOutput
 */
const de_GetWorkGroupOutput = (output: any, context: __SerdeContext): GetWorkGroupOutput => {
  return {
    WorkGroup: output.WorkGroup != null ? de_WorkGroup(output.WorkGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ImportNotebookOutput
 */
const de_ImportNotebookOutput = (output: any, context: __SerdeContext): ImportNotebookOutput => {
  return {
    NotebookId: __expectString(output.NotebookId),
  } as any;
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
    AthenaErrorCode: __expectString(output.AthenaErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListApplicationDPUSizesOutput
 */
const de_ListApplicationDPUSizesOutput = (output: any, context: __SerdeContext): ListApplicationDPUSizesOutput => {
  return {
    ApplicationDPUSizes:
      output.ApplicationDPUSizes != null ? de_ApplicationDPUSizesList(output.ApplicationDPUSizes, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListCalculationExecutionsResponse
 */
const de_ListCalculationExecutionsResponse = (
  output: any,
  context: __SerdeContext
): ListCalculationExecutionsResponse => {
  return {
    Calculations: output.Calculations != null ? de_CalculationsList(output.Calculations, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDatabasesOutput
 */
const de_ListDatabasesOutput = (output: any, context: __SerdeContext): ListDatabasesOutput => {
  return {
    DatabaseList: output.DatabaseList != null ? de_DatabaseList(output.DatabaseList, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDataCatalogsOutput
 */
const de_ListDataCatalogsOutput = (output: any, context: __SerdeContext): ListDataCatalogsOutput => {
  return {
    DataCatalogsSummary:
      output.DataCatalogsSummary != null ? de_DataCatalogSummaryList(output.DataCatalogsSummary, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListEngineVersionsOutput
 */
const de_ListEngineVersionsOutput = (output: any, context: __SerdeContext): ListEngineVersionsOutput => {
  return {
    EngineVersions: output.EngineVersions != null ? de_EngineVersionsList(output.EngineVersions, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListExecutorsResponse
 */
const de_ListExecutorsResponse = (output: any, context: __SerdeContext): ListExecutorsResponse => {
  return {
    ExecutorsSummary:
      output.ExecutorsSummary != null ? de_ExecutorsSummaryList(output.ExecutorsSummary, context) : undefined,
    NextToken: __expectString(output.NextToken),
    SessionId: __expectString(output.SessionId),
  } as any;
};

/**
 * deserializeAws_json1_1ListNamedQueriesOutput
 */
const de_ListNamedQueriesOutput = (output: any, context: __SerdeContext): ListNamedQueriesOutput => {
  return {
    NamedQueryIds: output.NamedQueryIds != null ? de_NamedQueryIdList(output.NamedQueryIds, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListNotebookMetadataOutput
 */
const de_ListNotebookMetadataOutput = (output: any, context: __SerdeContext): ListNotebookMetadataOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    NotebookMetadataList:
      output.NotebookMetadataList != null ? de_NotebookMetadataArray(output.NotebookMetadataList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListNotebookSessionsResponse
 */
const de_ListNotebookSessionsResponse = (output: any, context: __SerdeContext): ListNotebookSessionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    NotebookSessionsList:
      output.NotebookSessionsList != null ? de_NotebookSessionsList(output.NotebookSessionsList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListPreparedStatementsOutput
 */
const de_ListPreparedStatementsOutput = (output: any, context: __SerdeContext): ListPreparedStatementsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    PreparedStatements:
      output.PreparedStatements != null ? de_PreparedStatementsList(output.PreparedStatements, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListQueryExecutionsOutput
 */
const de_ListQueryExecutionsOutput = (output: any, context: __SerdeContext): ListQueryExecutionsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    QueryExecutionIds:
      output.QueryExecutionIds != null ? de_QueryExecutionIdList(output.QueryExecutionIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListSessionsResponse
 */
const de_ListSessionsResponse = (output: any, context: __SerdeContext): ListSessionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Sessions: output.Sessions != null ? de_SessionsList(output.Sessions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTableMetadataOutput
 */
const de_ListTableMetadataOutput = (output: any, context: __SerdeContext): ListTableMetadataOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    TableMetadataList:
      output.TableMetadataList != null ? de_TableMetadataList(output.TableMetadataList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceOutput
 */
const de_ListTagsForResourceOutput = (output: any, context: __SerdeContext): ListTagsForResourceOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListWorkGroupsOutput
 */
const de_ListWorkGroupsOutput = (output: any, context: __SerdeContext): ListWorkGroupsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    WorkGroups: output.WorkGroups != null ? de_WorkGroupsList(output.WorkGroups, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MetadataException
 */
const de_MetadataException = (output: any, context: __SerdeContext): MetadataException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1NamedQuery
 */
const de_NamedQuery = (output: any, context: __SerdeContext): NamedQuery => {
  return {
    Database: __expectString(output.Database),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    NamedQueryId: __expectString(output.NamedQueryId),
    QueryString: __expectString(output.QueryString),
    WorkGroup: __expectString(output.WorkGroup),
  } as any;
};

/**
 * deserializeAws_json1_1NamedQueryIdList
 */
const de_NamedQueryIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1NamedQueryList
 */
const de_NamedQueryList = (output: any, context: __SerdeContext): NamedQuery[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NamedQuery(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NotebookMetadata
 */
const de_NotebookMetadata = (output: any, context: __SerdeContext): NotebookMetadata => {
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

/**
 * deserializeAws_json1_1NotebookMetadataArray
 */
const de_NotebookMetadataArray = (output: any, context: __SerdeContext): NotebookMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NotebookMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NotebookSessionsList
 */
const de_NotebookSessionsList = (output: any, context: __SerdeContext): NotebookSessionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NotebookSessionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NotebookSessionSummary
 */
const de_NotebookSessionSummary = (output: any, context: __SerdeContext): NotebookSessionSummary => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    SessionId: __expectString(output.SessionId),
  } as any;
};

/**
 * deserializeAws_json1_1ParametersMap
 */
const de_ParametersMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1PreparedStatement
 */
const de_PreparedStatement = (output: any, context: __SerdeContext): PreparedStatement => {
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

/**
 * deserializeAws_json1_1PreparedStatementDetailsList
 */
const de_PreparedStatementDetailsList = (output: any, context: __SerdeContext): PreparedStatement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PreparedStatement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PreparedStatementsList
 */
const de_PreparedStatementsList = (output: any, context: __SerdeContext): PreparedStatementSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PreparedStatementSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PreparedStatementSummary
 */
const de_PreparedStatementSummary = (output: any, context: __SerdeContext): PreparedStatementSummary => {
  return {
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    StatementName: __expectString(output.StatementName),
  } as any;
};

/**
 * deserializeAws_json1_1QueryExecution
 */
const de_QueryExecution = (output: any, context: __SerdeContext): QueryExecution => {
  return {
    EngineVersion: output.EngineVersion != null ? de_EngineVersion(output.EngineVersion, context) : undefined,
    ExecutionParameters:
      output.ExecutionParameters != null ? de_ExecutionParameters(output.ExecutionParameters, context) : undefined,
    Query: __expectString(output.Query),
    QueryExecutionContext:
      output.QueryExecutionContext != null
        ? de_QueryExecutionContext(output.QueryExecutionContext, context)
        : undefined,
    QueryExecutionId: __expectString(output.QueryExecutionId),
    ResultConfiguration:
      output.ResultConfiguration != null ? de_ResultConfiguration(output.ResultConfiguration, context) : undefined,
    ResultReuseConfiguration:
      output.ResultReuseConfiguration != null
        ? de_ResultReuseConfiguration(output.ResultReuseConfiguration, context)
        : undefined,
    StatementType: __expectString(output.StatementType),
    Statistics: output.Statistics != null ? de_QueryExecutionStatistics(output.Statistics, context) : undefined,
    Status: output.Status != null ? de_QueryExecutionStatus(output.Status, context) : undefined,
    SubstatementType: __expectString(output.SubstatementType),
    WorkGroup: __expectString(output.WorkGroup),
  } as any;
};

/**
 * deserializeAws_json1_1QueryExecutionContext
 */
const de_QueryExecutionContext = (output: any, context: __SerdeContext): QueryExecutionContext => {
  return {
    Catalog: __expectString(output.Catalog),
    Database: __expectString(output.Database),
  } as any;
};

/**
 * deserializeAws_json1_1QueryExecutionIdList
 */
const de_QueryExecutionIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1QueryExecutionList
 */
const de_QueryExecutionList = (output: any, context: __SerdeContext): QueryExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_QueryExecution(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1QueryExecutionStatistics
 */
const de_QueryExecutionStatistics = (output: any, context: __SerdeContext): QueryExecutionStatistics => {
  return {
    DataManifestLocation: __expectString(output.DataManifestLocation),
    DataScannedInBytes: __expectLong(output.DataScannedInBytes),
    EngineExecutionTimeInMillis: __expectLong(output.EngineExecutionTimeInMillis),
    QueryPlanningTimeInMillis: __expectLong(output.QueryPlanningTimeInMillis),
    QueryQueueTimeInMillis: __expectLong(output.QueryQueueTimeInMillis),
    ResultReuseInformation:
      output.ResultReuseInformation != null
        ? de_ResultReuseInformation(output.ResultReuseInformation, context)
        : undefined,
    ServiceProcessingTimeInMillis: __expectLong(output.ServiceProcessingTimeInMillis),
    TotalExecutionTimeInMillis: __expectLong(output.TotalExecutionTimeInMillis),
  } as any;
};

/**
 * deserializeAws_json1_1QueryExecutionStatus
 */
const de_QueryExecutionStatus = (output: any, context: __SerdeContext): QueryExecutionStatus => {
  return {
    AthenaError: output.AthenaError != null ? de_AthenaError(output.AthenaError, context) : undefined,
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

/**
 * deserializeAws_json1_1QueryRuntimeStatistics
 */
const de_QueryRuntimeStatistics = (output: any, context: __SerdeContext): QueryRuntimeStatistics => {
  return {
    OutputStage: output.OutputStage != null ? de_QueryStage(output.OutputStage, context) : undefined,
    Rows: output.Rows != null ? de_QueryRuntimeStatisticsRows(output.Rows, context) : undefined,
    Timeline: output.Timeline != null ? de_QueryRuntimeStatisticsTimeline(output.Timeline, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1QueryRuntimeStatisticsRows
 */
const de_QueryRuntimeStatisticsRows = (output: any, context: __SerdeContext): QueryRuntimeStatisticsRows => {
  return {
    InputBytes: __expectLong(output.InputBytes),
    InputRows: __expectLong(output.InputRows),
    OutputBytes: __expectLong(output.OutputBytes),
    OutputRows: __expectLong(output.OutputRows),
  } as any;
};

/**
 * deserializeAws_json1_1QueryRuntimeStatisticsTimeline
 */
const de_QueryRuntimeStatisticsTimeline = (output: any, context: __SerdeContext): QueryRuntimeStatisticsTimeline => {
  return {
    EngineExecutionTimeInMillis: __expectLong(output.EngineExecutionTimeInMillis),
    QueryPlanningTimeInMillis: __expectLong(output.QueryPlanningTimeInMillis),
    QueryQueueTimeInMillis: __expectLong(output.QueryQueueTimeInMillis),
    ServiceProcessingTimeInMillis: __expectLong(output.ServiceProcessingTimeInMillis),
    TotalExecutionTimeInMillis: __expectLong(output.TotalExecutionTimeInMillis),
  } as any;
};

/**
 * deserializeAws_json1_1QueryStage
 */
const de_QueryStage = (output: any, context: __SerdeContext): QueryStage => {
  return {
    ExecutionTime: __expectLong(output.ExecutionTime),
    InputBytes: __expectLong(output.InputBytes),
    InputRows: __expectLong(output.InputRows),
    OutputBytes: __expectLong(output.OutputBytes),
    OutputRows: __expectLong(output.OutputRows),
    QueryStagePlan: output.QueryStagePlan != null ? de_QueryStagePlanNode(output.QueryStagePlan, context) : undefined,
    StageId: __expectLong(output.StageId),
    State: __expectString(output.State),
    SubStages: output.SubStages != null ? de_QueryStages(output.SubStages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1QueryStagePlanNode
 */
const de_QueryStagePlanNode = (output: any, context: __SerdeContext): QueryStagePlanNode => {
  return {
    Children: output.Children != null ? de_QueryStagePlanNodes(output.Children, context) : undefined,
    Identifier: __expectString(output.Identifier),
    Name: __expectString(output.Name),
    RemoteSources: output.RemoteSources != null ? de_StringList(output.RemoteSources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1QueryStagePlanNodes
 */
const de_QueryStagePlanNodes = (output: any, context: __SerdeContext): QueryStagePlanNode[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_QueryStagePlanNode(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1QueryStages
 */
const de_QueryStages = (output: any, context: __SerdeContext): QueryStage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_QueryStage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    ResourceName: __expectString(output.ResourceName),
  } as any;
};

/**
 * deserializeAws_json1_1ResultConfiguration
 */
const de_ResultConfiguration = (output: any, context: __SerdeContext): ResultConfiguration => {
  return {
    AclConfiguration:
      output.AclConfiguration != null ? de_AclConfiguration(output.AclConfiguration, context) : undefined,
    EncryptionConfiguration:
      output.EncryptionConfiguration != null
        ? de_EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    ExpectedBucketOwner: __expectString(output.ExpectedBucketOwner),
    OutputLocation: __expectString(output.OutputLocation),
  } as any;
};

/**
 * deserializeAws_json1_1ResultReuseByAgeConfiguration
 */
const de_ResultReuseByAgeConfiguration = (output: any, context: __SerdeContext): ResultReuseByAgeConfiguration => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    MaxAgeInMinutes: __expectInt32(output.MaxAgeInMinutes),
  } as any;
};

/**
 * deserializeAws_json1_1ResultReuseConfiguration
 */
const de_ResultReuseConfiguration = (output: any, context: __SerdeContext): ResultReuseConfiguration => {
  return {
    ResultReuseByAgeConfiguration:
      output.ResultReuseByAgeConfiguration != null
        ? de_ResultReuseByAgeConfiguration(output.ResultReuseByAgeConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResultReuseInformation
 */
const de_ResultReuseInformation = (output: any, context: __SerdeContext): ResultReuseInformation => {
  return {
    ReusedPreviousResult: __expectBoolean(output.ReusedPreviousResult),
  } as any;
};

/**
 * deserializeAws_json1_1ResultSet
 */
const de_ResultSet = (output: any, context: __SerdeContext): ResultSet => {
  return {
    ResultSetMetadata:
      output.ResultSetMetadata != null ? de_ResultSetMetadata(output.ResultSetMetadata, context) : undefined,
    Rows: output.Rows != null ? de_RowList(output.Rows, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResultSetMetadata
 */
const de_ResultSetMetadata = (output: any, context: __SerdeContext): ResultSetMetadata => {
  return {
    ColumnInfo: output.ColumnInfo != null ? de_ColumnInfoList(output.ColumnInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Row
 */
const de_Row = (output: any, context: __SerdeContext): Row => {
  return {
    Data: output.Data != null ? de_datumList(output.Data, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RowList
 */
const de_RowList = (output: any, context: __SerdeContext): Row[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Row(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SessionAlreadyExistsException
 */
const de_SessionAlreadyExistsException = (output: any, context: __SerdeContext): SessionAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1SessionConfiguration
 */
const de_SessionConfiguration = (output: any, context: __SerdeContext): SessionConfiguration => {
  return {
    EncryptionConfiguration:
      output.EncryptionConfiguration != null
        ? de_EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    ExecutionRole: __expectString(output.ExecutionRole),
    IdleTimeoutSeconds: __expectLong(output.IdleTimeoutSeconds),
    WorkingDirectory: __expectString(output.WorkingDirectory),
  } as any;
};

/**
 * deserializeAws_json1_1SessionsList
 */
const de_SessionsList = (output: any, context: __SerdeContext): SessionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SessionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SessionStatistics
 */
const de_SessionStatistics = (output: any, context: __SerdeContext): SessionStatistics => {
  return {
    DpuExecutionInMillis: __expectLong(output.DpuExecutionInMillis),
  } as any;
};

/**
 * deserializeAws_json1_1SessionStatus
 */
const de_SessionStatus = (output: any, context: __SerdeContext): SessionStatus => {
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

/**
 * deserializeAws_json1_1SessionSummary
 */
const de_SessionSummary = (output: any, context: __SerdeContext): SessionSummary => {
  return {
    Description: __expectString(output.Description),
    EngineVersion: output.EngineVersion != null ? de_EngineVersion(output.EngineVersion, context) : undefined,
    NotebookVersion: __expectString(output.NotebookVersion),
    SessionId: __expectString(output.SessionId),
    Status: output.Status != null ? de_SessionStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StartCalculationExecutionResponse
 */
const de_StartCalculationExecutionResponse = (
  output: any,
  context: __SerdeContext
): StartCalculationExecutionResponse => {
  return {
    CalculationExecutionId: __expectString(output.CalculationExecutionId),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1StartQueryExecutionOutput
 */
const de_StartQueryExecutionOutput = (output: any, context: __SerdeContext): StartQueryExecutionOutput => {
  return {
    QueryExecutionId: __expectString(output.QueryExecutionId),
  } as any;
};

/**
 * deserializeAws_json1_1StartSessionResponse
 */
const de_StartSessionResponse = (output: any, context: __SerdeContext): StartSessionResponse => {
  return {
    SessionId: __expectString(output.SessionId),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1StopCalculationExecutionResponse
 */
const de_StopCalculationExecutionResponse = (
  output: any,
  context: __SerdeContext
): StopCalculationExecutionResponse => {
  return {
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1StopQueryExecutionOutput
 */
const de_StopQueryExecutionOutput = (output: any, context: __SerdeContext): StopQueryExecutionOutput => {
  return {} as any;
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
 * deserializeAws_json1_1SupportedDPUSizeList
 */
const de_SupportedDPUSizeList = (output: any, context: __SerdeContext): number[] => {
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

/**
 * deserializeAws_json1_1TableMetadata
 */
const de_TableMetadata = (output: any, context: __SerdeContext): TableMetadata => {
  return {
    Columns: output.Columns != null ? de_ColumnList(output.Columns, context) : undefined,
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTime))) : undefined,
    LastAccessTime:
      output.LastAccessTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAccessTime)))
        : undefined,
    Name: __expectString(output.Name),
    Parameters: output.Parameters != null ? de_ParametersMap(output.Parameters, context) : undefined,
    PartitionKeys: output.PartitionKeys != null ? de_ColumnList(output.PartitionKeys, context) : undefined,
    TableType: __expectString(output.TableType),
  } as any;
};

/**
 * deserializeAws_json1_1TableMetadataList
 */
const de_TableMetadataList = (output: any, context: __SerdeContext): TableMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TableMetadata(entry, context);
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
 * deserializeAws_json1_1TagResourceOutput
 */
const de_TagResourceOutput = (output: any, context: __SerdeContext): TagResourceOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TerminateSessionResponse
 */
const de_TerminateSessionResponse = (output: any, context: __SerdeContext): TerminateSessionResponse => {
  return {
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1TooManyRequestsException
 */
const de_TooManyRequestsException = (output: any, context: __SerdeContext): TooManyRequestsException => {
  return {
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

/**
 * deserializeAws_json1_1UnprocessedNamedQueryId
 */
const de_UnprocessedNamedQueryId = (output: any, context: __SerdeContext): UnprocessedNamedQueryId => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    NamedQueryId: __expectString(output.NamedQueryId),
  } as any;
};

/**
 * deserializeAws_json1_1UnprocessedNamedQueryIdList
 */
const de_UnprocessedNamedQueryIdList = (output: any, context: __SerdeContext): UnprocessedNamedQueryId[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UnprocessedNamedQueryId(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UnprocessedPreparedStatementName
 */
const de_UnprocessedPreparedStatementName = (
  output: any,
  context: __SerdeContext
): UnprocessedPreparedStatementName => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    StatementName: __expectString(output.StatementName),
  } as any;
};

/**
 * deserializeAws_json1_1UnprocessedPreparedStatementNameList
 */
const de_UnprocessedPreparedStatementNameList = (
  output: any,
  context: __SerdeContext
): UnprocessedPreparedStatementName[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UnprocessedPreparedStatementName(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UnprocessedQueryExecutionId
 */
const de_UnprocessedQueryExecutionId = (output: any, context: __SerdeContext): UnprocessedQueryExecutionId => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    QueryExecutionId: __expectString(output.QueryExecutionId),
  } as any;
};

/**
 * deserializeAws_json1_1UnprocessedQueryExecutionIdList
 */
const de_UnprocessedQueryExecutionIdList = (output: any, context: __SerdeContext): UnprocessedQueryExecutionId[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UnprocessedQueryExecutionId(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UntagResourceOutput
 */
const de_UntagResourceOutput = (output: any, context: __SerdeContext): UntagResourceOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateDataCatalogOutput
 */
const de_UpdateDataCatalogOutput = (output: any, context: __SerdeContext): UpdateDataCatalogOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateNamedQueryOutput
 */
const de_UpdateNamedQueryOutput = (output: any, context: __SerdeContext): UpdateNamedQueryOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateNotebookMetadataOutput
 */
const de_UpdateNotebookMetadataOutput = (output: any, context: __SerdeContext): UpdateNotebookMetadataOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateNotebookOutput
 */
const de_UpdateNotebookOutput = (output: any, context: __SerdeContext): UpdateNotebookOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdatePreparedStatementOutput
 */
const de_UpdatePreparedStatementOutput = (output: any, context: __SerdeContext): UpdatePreparedStatementOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateWorkGroupOutput
 */
const de_UpdateWorkGroupOutput = (output: any, context: __SerdeContext): UpdateWorkGroupOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1WorkGroup
 */
const de_WorkGroup = (output: any, context: __SerdeContext): WorkGroup => {
  return {
    Configuration: output.Configuration != null ? de_WorkGroupConfiguration(output.Configuration, context) : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1WorkGroupConfiguration
 */
const de_WorkGroupConfiguration = (output: any, context: __SerdeContext): WorkGroupConfiguration => {
  return {
    AdditionalConfiguration: __expectString(output.AdditionalConfiguration),
    BytesScannedCutoffPerQuery: __expectLong(output.BytesScannedCutoffPerQuery),
    CustomerContentEncryptionConfiguration:
      output.CustomerContentEncryptionConfiguration != null
        ? de_CustomerContentEncryptionConfiguration(output.CustomerContentEncryptionConfiguration, context)
        : undefined,
    EnableMinimumEncryptionConfiguration: __expectBoolean(output.EnableMinimumEncryptionConfiguration),
    EnforceWorkGroupConfiguration: __expectBoolean(output.EnforceWorkGroupConfiguration),
    EngineVersion: output.EngineVersion != null ? de_EngineVersion(output.EngineVersion, context) : undefined,
    ExecutionRole: __expectString(output.ExecutionRole),
    PublishCloudWatchMetricsEnabled: __expectBoolean(output.PublishCloudWatchMetricsEnabled),
    RequesterPaysEnabled: __expectBoolean(output.RequesterPaysEnabled),
    ResultConfiguration:
      output.ResultConfiguration != null ? de_ResultConfiguration(output.ResultConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1WorkGroupsList
 */
const de_WorkGroupsList = (output: any, context: __SerdeContext): WorkGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WorkGroupSummary
 */
const de_WorkGroupSummary = (output: any, context: __SerdeContext): WorkGroupSummary => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Description: __expectString(output.Description),
    EngineVersion: output.EngineVersion != null ? de_EngineVersion(output.EngineVersion, context) : undefined,
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AmazonAthena.${operation}`,
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
