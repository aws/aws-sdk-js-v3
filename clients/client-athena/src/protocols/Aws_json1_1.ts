// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
import {
  CancelCapacityReservationCommandInput,
  CancelCapacityReservationCommandOutput,
} from "../commands/CancelCapacityReservationCommand";
import {
  CreateCapacityReservationCommandInput,
  CreateCapacityReservationCommandOutput,
} from "../commands/CreateCapacityReservationCommand";
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
import {
  DeleteCapacityReservationCommandInput,
  DeleteCapacityReservationCommandOutput,
} from "../commands/DeleteCapacityReservationCommand";
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
import {
  GetCapacityAssignmentConfigurationCommandInput,
  GetCapacityAssignmentConfigurationCommandOutput,
} from "../commands/GetCapacityAssignmentConfigurationCommand";
import {
  GetCapacityReservationCommandInput,
  GetCapacityReservationCommandOutput,
} from "../commands/GetCapacityReservationCommand";
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
import {
  ListCapacityReservationsCommandInput,
  ListCapacityReservationsCommandOutput,
} from "../commands/ListCapacityReservationsCommand";
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
  PutCapacityAssignmentConfigurationCommandInput,
  PutCapacityAssignmentConfigurationCommandOutput,
} from "../commands/PutCapacityAssignmentConfigurationCommand";
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
import {
  UpdateCapacityReservationCommandInput,
  UpdateCapacityReservationCommandOutput,
} from "../commands/UpdateCapacityReservationCommand";
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
  BatchGetNamedQueryInput,
  BatchGetPreparedStatementInput,
  BatchGetPreparedStatementOutput,
  BatchGetQueryExecutionInput,
  BatchGetQueryExecutionOutput,
  CalculationConfiguration,
  CalculationStatus,
  CalculationSummary,
  CancelCapacityReservationInput,
  CapacityAllocation,
  CapacityAssignment,
  CapacityReservation,
  CreateCapacityReservationInput,
  CreateDataCatalogInput,
  CreateNamedQueryInput,
  CreateNotebookInput,
  CreatePreparedStatementInput,
  CreatePresignedNotebookUrlRequest,
  CreateWorkGroupInput,
  CustomerContentEncryptionConfiguration,
  DeleteCapacityReservationInput,
  DeleteDataCatalogInput,
  DeleteNamedQueryInput,
  DeleteNotebookInput,
  DeletePreparedStatementInput,
  DeleteWorkGroupInput,
  EncryptionConfiguration,
  EngineConfiguration,
  EngineVersion,
  ExportNotebookInput,
  ExportNotebookOutput,
  FilterDefinition,
  GetCalculationExecutionCodeRequest,
  GetCalculationExecutionRequest,
  GetCalculationExecutionResponse,
  GetCalculationExecutionStatusRequest,
  GetCalculationExecutionStatusResponse,
  GetCapacityAssignmentConfigurationInput,
  GetCapacityReservationInput,
  GetCapacityReservationOutput,
  GetDatabaseInput,
  GetDataCatalogInput,
  GetNamedQueryInput,
  GetNotebookMetadataInput,
  GetNotebookMetadataOutput,
  GetPreparedStatementInput,
  GetPreparedStatementOutput,
  GetQueryExecutionInput,
  GetQueryExecutionOutput,
  GetQueryResultsInput,
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
  InternalServerException,
  InvalidRequestException,
  ListApplicationDPUSizesInput,
  ListCalculationExecutionsRequest,
  ListCalculationExecutionsResponse,
  ListCapacityReservationsInput,
  ListCapacityReservationsOutput,
  ListDatabasesInput,
  ListDataCatalogsInput,
  ListEngineVersionsInput,
  ListExecutorsRequest,
  ListNamedQueriesInput,
  ListNotebookMetadataInput,
  ListNotebookMetadataOutput,
  ListNotebookSessionsRequest,
  ListNotebookSessionsResponse,
  ListPreparedStatementsInput,
  ListPreparedStatementsOutput,
  ListQueryExecutionsInput,
  ListSessionsRequest,
  ListSessionsResponse,
  ListTableMetadataInput,
  ListTableMetadataOutput,
  ListTagsForResourceInput,
  ListWorkGroupsInput,
  ListWorkGroupsOutput,
  MetadataException,
  NotebookMetadata,
  NotebookSessionSummary,
  PreparedStatement,
  PreparedStatementSummary,
  PutCapacityAssignmentConfigurationInput,
  QueryExecution,
  QueryExecutionContext,
  QueryExecutionStatus,
  QueryRuntimeStatistics,
  QueryStage,
  QueryStagePlanNode,
  ResourceNotFoundException,
  ResultConfiguration,
  ResultConfigurationUpdates,
  ResultReuseByAgeConfiguration,
  ResultReuseConfiguration,
  SessionAlreadyExistsException,
  SessionStatus,
  SessionSummary,
  StartCalculationExecutionRequest,
  StartQueryExecutionInput,
  StartSessionRequest,
  StopCalculationExecutionRequest,
  StopQueryExecutionInput,
  TableMetadata,
  Tag,
  TagResourceInput,
  TerminateSessionRequest,
  TooManyRequestsException,
  UntagResourceInput,
  UpdateCapacityReservationInput,
  UpdateDataCatalogInput,
  UpdateNamedQueryInput,
  UpdateNotebookInput,
  UpdateNotebookMetadataInput,
  UpdatePreparedStatementInput,
  UpdateWorkGroupInput,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelCapacityReservationCommand
 */
export const se_CancelCapacityReservationCommand = async (
  input: CancelCapacityReservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelCapacityReservation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCapacityReservationCommand
 */
export const se_CreateCapacityReservationCommand = async (
  input: CreateCapacityReservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCapacityReservation");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCapacityReservationCommand
 */
export const se_DeleteCapacityReservationCommand = async (
  input: DeleteCapacityReservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCapacityReservation");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCapacityAssignmentConfigurationCommand
 */
export const se_GetCapacityAssignmentConfigurationCommand = async (
  input: GetCapacityAssignmentConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCapacityAssignmentConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCapacityReservationCommand
 */
export const se_GetCapacityReservationCommand = async (
  input: GetCapacityReservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCapacityReservation");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCapacityReservationsCommand
 */
export const se_ListCapacityReservationsCommand = async (
  input: ListCapacityReservationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCapacityReservations");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1ListWorkGroupsCommand
 */
export const se_ListWorkGroupsCommand = async (
  input: ListWorkGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWorkGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutCapacityAssignmentConfigurationCommand
 */
export const se_PutCapacityAssignmentConfigurationCommand = async (
  input: PutCapacityAssignmentConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutCapacityAssignmentConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1UpdateCapacityReservationCommand
 */
export const se_UpdateCapacityReservationCommand = async (
  input: UpdateCapacityReservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCapacityReservation");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: BatchGetNamedQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CancelCapacityReservationCommand
 */
export const de_CancelCapacityReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelCapacityReservationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelCapacityReservationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CancelCapacityReservationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CancelCapacityReservationCommandError
 */
const de_CancelCapacityReservationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelCapacityReservationCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateCapacityReservationCommand
 */
export const de_CreateCapacityReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCapacityReservationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCapacityReservationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateCapacityReservationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateCapacityReservationCommandError
 */
const de_CreateCapacityReservationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCapacityReservationCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateDataCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateNamedQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateNotebookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreatePreparedStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreatePresignedNotebookUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateWorkGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteCapacityReservationCommand
 */
export const de_DeleteCapacityReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCapacityReservationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCapacityReservationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteCapacityReservationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteCapacityReservationCommandError
 */
const de_DeleteCapacityReservationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCapacityReservationCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteDataCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteNamedQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteNotebookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeletePreparedStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteWorkGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetCalculationExecutionCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetCapacityAssignmentConfigurationCommand
 */
export const de_GetCapacityAssignmentConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCapacityAssignmentConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCapacityAssignmentConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetCapacityAssignmentConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetCapacityAssignmentConfigurationCommandError
 */
const de_GetCapacityAssignmentConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCapacityAssignmentConfigurationCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetCapacityReservationCommand
 */
export const de_GetCapacityReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCapacityReservationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCapacityReservationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCapacityReservationOutput(data, context);
  const response: GetCapacityReservationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetCapacityReservationCommandError
 */
const de_GetCapacityReservationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCapacityReservationCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetDataCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetNamedQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetQueryResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ImportNotebookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListApplicationDPUSizesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListCapacityReservationsCommand
 */
export const de_ListCapacityReservationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCapacityReservationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCapacityReservationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCapacityReservationsOutput(data, context);
  const response: ListCapacityReservationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListCapacityReservationsCommandError
 */
const de_ListCapacityReservationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCapacityReservationsCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListDatabasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListDataCatalogsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListEngineVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListExecutorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListNamedQueriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListQueryExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutCapacityAssignmentConfigurationCommand
 */
export const de_PutCapacityAssignmentConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCapacityAssignmentConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutCapacityAssignmentConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutCapacityAssignmentConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutCapacityAssignmentConfigurationCommandError
 */
const de_PutCapacityAssignmentConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCapacityAssignmentConfigurationCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartCalculationExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartQueryExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StopCalculationExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StopQueryExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TerminateSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateCapacityReservationCommand
 */
export const de_UpdateCapacityReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCapacityReservationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateCapacityReservationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateCapacityReservationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateCapacityReservationCommandError
 */
const de_UpdateCapacityReservationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCapacityReservationCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateDataCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateNamedQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateNotebookCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateNotebookMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdatePreparedStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateWorkGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
 * deserializeAws_json1_1MetadataExceptionRes
 */
const de_MetadataExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<MetadataException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AclConfiguration omitted.

// se_BatchGetNamedQueryInput omitted.

// se_BatchGetPreparedStatementInput omitted.

// se_BatchGetQueryExecutionInput omitted.

// se_CalculationConfiguration omitted.

// se_CancelCapacityReservationInput omitted.

// se_CapacityAssignment omitted.

// se_CapacityAssignmentsList omitted.

// se_CreateCapacityReservationInput omitted.

// se_CreateDataCatalogInput omitted.

/**
 * serializeAws_json1_1CreateNamedQueryInput
 */
const se_CreateNamedQueryInput = (input: CreateNamedQueryInput, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Database: [],
    Description: [],
    Name: [],
    QueryString: [],
    WorkGroup: [],
  });
};

// se_CreateNotebookInput omitted.

// se_CreatePreparedStatementInput omitted.

// se_CreatePresignedNotebookUrlRequest omitted.

// se_CreateWorkGroupInput omitted.

// se_CustomerContentEncryptionConfiguration omitted.

// se_DeleteCapacityReservationInput omitted.

// se_DeleteDataCatalogInput omitted.

/**
 * serializeAws_json1_1DeleteNamedQueryInput
 */
const se_DeleteNamedQueryInput = (input: DeleteNamedQueryInput, context: __SerdeContext): any => {
  return take(input, {
    NamedQueryId: [true, (_) => _ ?? generateIdempotencyToken()],
  });
};

// se_DeleteNotebookInput omitted.

// se_DeletePreparedStatementInput omitted.

// se_DeleteWorkGroupInput omitted.

// se_EncryptionConfiguration omitted.

// se_EngineConfiguration omitted.

// se_EngineVersion omitted.

// se_ExecutionParameters omitted.

// se_ExportNotebookInput omitted.

// se_FilterDefinition omitted.

// se_GetCalculationExecutionCodeRequest omitted.

// se_GetCalculationExecutionRequest omitted.

// se_GetCalculationExecutionStatusRequest omitted.

// se_GetCapacityAssignmentConfigurationInput omitted.

// se_GetCapacityReservationInput omitted.

// se_GetDatabaseInput omitted.

// se_GetDataCatalogInput omitted.

// se_GetNamedQueryInput omitted.

// se_GetNotebookMetadataInput omitted.

// se_GetPreparedStatementInput omitted.

// se_GetQueryExecutionInput omitted.

// se_GetQueryResultsInput omitted.

// se_GetQueryRuntimeStatisticsInput omitted.

// se_GetSessionRequest omitted.

// se_GetSessionStatusRequest omitted.

// se_GetTableMetadataInput omitted.

// se_GetWorkGroupInput omitted.

// se_ImportNotebookInput omitted.

// se_ListApplicationDPUSizesInput omitted.

// se_ListCalculationExecutionsRequest omitted.

// se_ListCapacityReservationsInput omitted.

// se_ListDatabasesInput omitted.

// se_ListDataCatalogsInput omitted.

// se_ListEngineVersionsInput omitted.

// se_ListExecutorsRequest omitted.

// se_ListNamedQueriesInput omitted.

// se_ListNotebookMetadataInput omitted.

// se_ListNotebookSessionsRequest omitted.

// se_ListPreparedStatementsInput omitted.

// se_ListQueryExecutionsInput omitted.

// se_ListSessionsRequest omitted.

// se_ListTableMetadataInput omitted.

// se_ListTagsForResourceInput omitted.

// se_ListWorkGroupsInput omitted.

// se_NamedQueryIdList omitted.

// se_ParametersMap omitted.

// se_PreparedStatementNameList omitted.

// se_PutCapacityAssignmentConfigurationInput omitted.

// se_QueryExecutionContext omitted.

// se_QueryExecutionIdList omitted.

// se_ResultConfiguration omitted.

// se_ResultConfigurationUpdates omitted.

// se_ResultReuseByAgeConfiguration omitted.

// se_ResultReuseConfiguration omitted.

// se_StartCalculationExecutionRequest omitted.

/**
 * serializeAws_json1_1StartQueryExecutionInput
 */
const se_StartQueryExecutionInput = (input: StartQueryExecutionInput, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ExecutionParameters: _json,
    QueryExecutionContext: _json,
    QueryString: [],
    ResultConfiguration: _json,
    ResultReuseConfiguration: _json,
    WorkGroup: [],
  });
};

// se_StartSessionRequest omitted.

// se_StopCalculationExecutionRequest omitted.

/**
 * serializeAws_json1_1StopQueryExecutionInput
 */
const se_StopQueryExecutionInput = (input: StopQueryExecutionInput, context: __SerdeContext): any => {
  return take(input, {
    QueryExecutionId: [true, (_) => _ ?? generateIdempotencyToken()],
  });
};

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceInput omitted.

// se_TerminateSessionRequest omitted.

// se_UntagResourceInput omitted.

// se_UpdateCapacityReservationInput omitted.

// se_UpdateDataCatalogInput omitted.

// se_UpdateNamedQueryInput omitted.

// se_UpdateNotebookInput omitted.

// se_UpdateNotebookMetadataInput omitted.

// se_UpdatePreparedStatementInput omitted.

// se_UpdateWorkGroupInput omitted.

// se_WorkGroupConfiguration omitted.

// se_WorkGroupConfigurationUpdates omitted.

// se_WorkGroupNamesList omitted.

// de_AclConfiguration omitted.

// de_ApplicationDPUSizes omitted.

// de_ApplicationDPUSizesList omitted.

// de_AthenaError omitted.

// de_BatchGetNamedQueryOutput omitted.

/**
 * deserializeAws_json1_1BatchGetPreparedStatementOutput
 */
const de_BatchGetPreparedStatementOutput = (output: any, context: __SerdeContext): BatchGetPreparedStatementOutput => {
  return take(output, {
    PreparedStatements: (_: any) => de_PreparedStatementDetailsList(_, context),
    UnprocessedPreparedStatementNames: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchGetQueryExecutionOutput
 */
const de_BatchGetQueryExecutionOutput = (output: any, context: __SerdeContext): BatchGetQueryExecutionOutput => {
  return take(output, {
    QueryExecutions: (_: any) => de_QueryExecutionList(_, context),
    UnprocessedQueryExecutionIds: _json,
  }) as any;
};

// de_CalculationResult omitted.

/**
 * deserializeAws_json1_1CalculationsList
 */
const de_CalculationsList = (output: any, context: __SerdeContext): CalculationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CalculationSummary(entry, context);
    });
  return retVal;
};

// de_CalculationStatistics omitted.

/**
 * deserializeAws_json1_1CalculationStatus
 */
const de_CalculationStatus = (output: any, context: __SerdeContext): CalculationStatus => {
  return take(output, {
    CompletionDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StateChangeReason: __expectString,
    SubmissionDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1CalculationSummary
 */
const de_CalculationSummary = (output: any, context: __SerdeContext): CalculationSummary => {
  return take(output, {
    CalculationExecutionId: __expectString,
    Description: __expectString,
    Status: (_: any) => de_CalculationStatus(_, context),
  }) as any;
};

// de_CancelCapacityReservationOutput omitted.

/**
 * deserializeAws_json1_1CapacityAllocation
 */
const de_CapacityAllocation = (output: any, context: __SerdeContext): CapacityAllocation => {
  return take(output, {
    RequestCompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RequestTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

// de_CapacityAssignment omitted.

// de_CapacityAssignmentConfiguration omitted.

// de_CapacityAssignmentsList omitted.

/**
 * deserializeAws_json1_1CapacityReservation
 */
const de_CapacityReservation = (output: any, context: __SerdeContext): CapacityReservation => {
  return take(output, {
    AllocatedDpus: __expectInt32,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastAllocation: (_: any) => de_CapacityAllocation(_, context),
    LastSuccessfulAllocationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Status: __expectString,
    TargetDpus: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1CapacityReservationsList
 */
const de_CapacityReservationsList = (output: any, context: __SerdeContext): CapacityReservation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CapacityReservation(entry, context);
    });
  return retVal;
};

// de_Column omitted.

// de_ColumnInfo omitted.

// de_ColumnInfoList omitted.

// de_ColumnList omitted.

// de_CreateCapacityReservationOutput omitted.

// de_CreateDataCatalogOutput omitted.

// de_CreateNamedQueryOutput omitted.

// de_CreateNotebookOutput omitted.

// de_CreatePreparedStatementOutput omitted.

// de_CreatePresignedNotebookUrlResponse omitted.

// de_CreateWorkGroupOutput omitted.

// de_CustomerContentEncryptionConfiguration omitted.

// de_Database omitted.

// de_DatabaseList omitted.

// de_DataCatalog omitted.

// de_DataCatalogSummary omitted.

// de_DataCatalogSummaryList omitted.

// de_Datum omitted.

// de_datumList omitted.

// de_DeleteCapacityReservationOutput omitted.

// de_DeleteDataCatalogOutput omitted.

// de_DeleteNamedQueryOutput omitted.

// de_DeleteNotebookOutput omitted.

// de_DeletePreparedStatementOutput omitted.

// de_DeleteWorkGroupOutput omitted.

// de_EncryptionConfiguration omitted.

// de_EngineConfiguration omitted.

// de_EngineVersion omitted.

// de_EngineVersionsList omitted.

// de_ExecutionParameters omitted.

// de_ExecutorsSummary omitted.

// de_ExecutorsSummaryList omitted.

/**
 * deserializeAws_json1_1ExportNotebookOutput
 */
const de_ExportNotebookOutput = (output: any, context: __SerdeContext): ExportNotebookOutput => {
  return take(output, {
    NotebookMetadata: (_: any) => de_NotebookMetadata(_, context),
    Payload: __expectString,
  }) as any;
};

// de_GetCalculationExecutionCodeResponse omitted.

/**
 * deserializeAws_json1_1GetCalculationExecutionResponse
 */
const de_GetCalculationExecutionResponse = (output: any, context: __SerdeContext): GetCalculationExecutionResponse => {
  return take(output, {
    CalculationExecutionId: __expectString,
    Description: __expectString,
    Result: _json,
    SessionId: __expectString,
    Statistics: _json,
    Status: (_: any) => de_CalculationStatus(_, context),
    WorkingDirectory: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetCalculationExecutionStatusResponse
 */
const de_GetCalculationExecutionStatusResponse = (
  output: any,
  context: __SerdeContext
): GetCalculationExecutionStatusResponse => {
  return take(output, {
    Statistics: _json,
    Status: (_: any) => de_CalculationStatus(_, context),
  }) as any;
};

// de_GetCapacityAssignmentConfigurationOutput omitted.

/**
 * deserializeAws_json1_1GetCapacityReservationOutput
 */
const de_GetCapacityReservationOutput = (output: any, context: __SerdeContext): GetCapacityReservationOutput => {
  return take(output, {
    CapacityReservation: (_: any) => de_CapacityReservation(_, context),
  }) as any;
};

// de_GetDatabaseOutput omitted.

// de_GetDataCatalogOutput omitted.

// de_GetNamedQueryOutput omitted.

/**
 * deserializeAws_json1_1GetNotebookMetadataOutput
 */
const de_GetNotebookMetadataOutput = (output: any, context: __SerdeContext): GetNotebookMetadataOutput => {
  return take(output, {
    NotebookMetadata: (_: any) => de_NotebookMetadata(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetPreparedStatementOutput
 */
const de_GetPreparedStatementOutput = (output: any, context: __SerdeContext): GetPreparedStatementOutput => {
  return take(output, {
    PreparedStatement: (_: any) => de_PreparedStatement(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetQueryExecutionOutput
 */
const de_GetQueryExecutionOutput = (output: any, context: __SerdeContext): GetQueryExecutionOutput => {
  return take(output, {
    QueryExecution: (_: any) => de_QueryExecution(_, context),
  }) as any;
};

// de_GetQueryResultsOutput omitted.

/**
 * deserializeAws_json1_1GetQueryRuntimeStatisticsOutput
 */
const de_GetQueryRuntimeStatisticsOutput = (output: any, context: __SerdeContext): GetQueryRuntimeStatisticsOutput => {
  return take(output, {
    QueryRuntimeStatistics: (_: any) => de_QueryRuntimeStatistics(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetSessionResponse
 */
const de_GetSessionResponse = (output: any, context: __SerdeContext): GetSessionResponse => {
  return take(output, {
    Description: __expectString,
    EngineConfiguration: _json,
    EngineVersion: __expectString,
    NotebookVersion: __expectString,
    SessionConfiguration: _json,
    SessionId: __expectString,
    Statistics: _json,
    Status: (_: any) => de_SessionStatus(_, context),
    WorkGroup: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetSessionStatusResponse
 */
const de_GetSessionStatusResponse = (output: any, context: __SerdeContext): GetSessionStatusResponse => {
  return take(output, {
    SessionId: __expectString,
    Status: (_: any) => de_SessionStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetTableMetadataOutput
 */
const de_GetTableMetadataOutput = (output: any, context: __SerdeContext): GetTableMetadataOutput => {
  return take(output, {
    TableMetadata: (_: any) => de_TableMetadata(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetWorkGroupOutput
 */
const de_GetWorkGroupOutput = (output: any, context: __SerdeContext): GetWorkGroupOutput => {
  return take(output, {
    WorkGroup: (_: any) => de_WorkGroup(_, context),
  }) as any;
};

// de_ImportNotebookOutput omitted.

// de_InternalServerException omitted.

// de_InvalidRequestException omitted.

// de_ListApplicationDPUSizesOutput omitted.

/**
 * deserializeAws_json1_1ListCalculationExecutionsResponse
 */
const de_ListCalculationExecutionsResponse = (
  output: any,
  context: __SerdeContext
): ListCalculationExecutionsResponse => {
  return take(output, {
    Calculations: (_: any) => de_CalculationsList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListCapacityReservationsOutput
 */
const de_ListCapacityReservationsOutput = (output: any, context: __SerdeContext): ListCapacityReservationsOutput => {
  return take(output, {
    CapacityReservations: (_: any) => de_CapacityReservationsList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListDatabasesOutput omitted.

// de_ListDataCatalogsOutput omitted.

// de_ListEngineVersionsOutput omitted.

// de_ListExecutorsResponse omitted.

// de_ListNamedQueriesOutput omitted.

/**
 * deserializeAws_json1_1ListNotebookMetadataOutput
 */
const de_ListNotebookMetadataOutput = (output: any, context: __SerdeContext): ListNotebookMetadataOutput => {
  return take(output, {
    NextToken: __expectString,
    NotebookMetadataList: (_: any) => de_NotebookMetadataArray(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListNotebookSessionsResponse
 */
const de_ListNotebookSessionsResponse = (output: any, context: __SerdeContext): ListNotebookSessionsResponse => {
  return take(output, {
    NextToken: __expectString,
    NotebookSessionsList: (_: any) => de_NotebookSessionsList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListPreparedStatementsOutput
 */
const de_ListPreparedStatementsOutput = (output: any, context: __SerdeContext): ListPreparedStatementsOutput => {
  return take(output, {
    NextToken: __expectString,
    PreparedStatements: (_: any) => de_PreparedStatementsList(_, context),
  }) as any;
};

// de_ListQueryExecutionsOutput omitted.

/**
 * deserializeAws_json1_1ListSessionsResponse
 */
const de_ListSessionsResponse = (output: any, context: __SerdeContext): ListSessionsResponse => {
  return take(output, {
    NextToken: __expectString,
    Sessions: (_: any) => de_SessionsList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListTableMetadataOutput
 */
const de_ListTableMetadataOutput = (output: any, context: __SerdeContext): ListTableMetadataOutput => {
  return take(output, {
    NextToken: __expectString,
    TableMetadataList: (_: any) => de_TableMetadataList(_, context),
  }) as any;
};

// de_ListTagsForResourceOutput omitted.

/**
 * deserializeAws_json1_1ListWorkGroupsOutput
 */
const de_ListWorkGroupsOutput = (output: any, context: __SerdeContext): ListWorkGroupsOutput => {
  return take(output, {
    NextToken: __expectString,
    WorkGroups: (_: any) => de_WorkGroupsList(_, context),
  }) as any;
};

// de_MetadataException omitted.

// de_NamedQuery omitted.

// de_NamedQueryIdList omitted.

// de_NamedQueryList omitted.

/**
 * deserializeAws_json1_1NotebookMetadata
 */
const de_NotebookMetadata = (output: any, context: __SerdeContext): NotebookMetadata => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    NotebookId: __expectString,
    Type: __expectString,
    WorkGroup: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1NotebookMetadataArray
 */
const de_NotebookMetadataArray = (output: any, context: __SerdeContext): NotebookMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_NotebookSessionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NotebookSessionSummary
 */
const de_NotebookSessionSummary = (output: any, context: __SerdeContext): NotebookSessionSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SessionId: __expectString,
  }) as any;
};

// de_ParametersMap omitted.

/**
 * deserializeAws_json1_1PreparedStatement
 */
const de_PreparedStatement = (output: any, context: __SerdeContext): PreparedStatement => {
  return take(output, {
    Description: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    QueryStatement: __expectString,
    StatementName: __expectString,
    WorkGroupName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PreparedStatementDetailsList
 */
const de_PreparedStatementDetailsList = (output: any, context: __SerdeContext): PreparedStatement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_PreparedStatementSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PreparedStatementSummary
 */
const de_PreparedStatementSummary = (output: any, context: __SerdeContext): PreparedStatementSummary => {
  return take(output, {
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StatementName: __expectString,
  }) as any;
};

// de_PutCapacityAssignmentConfigurationOutput omitted.

/**
 * deserializeAws_json1_1QueryExecution
 */
const de_QueryExecution = (output: any, context: __SerdeContext): QueryExecution => {
  return take(output, {
    EngineVersion: _json,
    ExecutionParameters: _json,
    Query: __expectString,
    QueryExecutionContext: _json,
    QueryExecutionId: __expectString,
    ResultConfiguration: _json,
    ResultReuseConfiguration: _json,
    StatementType: __expectString,
    Statistics: _json,
    Status: (_: any) => de_QueryExecutionStatus(_, context),
    SubstatementType: __expectString,
    WorkGroup: __expectString,
  }) as any;
};

// de_QueryExecutionContext omitted.

// de_QueryExecutionIdList omitted.

/**
 * deserializeAws_json1_1QueryExecutionList
 */
const de_QueryExecutionList = (output: any, context: __SerdeContext): QueryExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QueryExecution(entry, context);
    });
  return retVal;
};

// de_QueryExecutionStatistics omitted.

/**
 * deserializeAws_json1_1QueryExecutionStatus
 */
const de_QueryExecutionStatus = (output: any, context: __SerdeContext): QueryExecutionStatus => {
  return take(output, {
    AthenaError: _json,
    CompletionDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StateChangeReason: __expectString,
    SubmissionDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1QueryRuntimeStatistics
 */
const de_QueryRuntimeStatistics = (output: any, context: __SerdeContext): QueryRuntimeStatistics => {
  return take(output, {
    OutputStage: (_: any) => de_QueryStage(_, context),
    Rows: _json,
    Timeline: _json,
  }) as any;
};

// de_QueryRuntimeStatisticsRows omitted.

// de_QueryRuntimeStatisticsTimeline omitted.

/**
 * deserializeAws_json1_1QueryStage
 */
const de_QueryStage = (output: any, context: __SerdeContext): QueryStage => {
  return take(output, {
    ExecutionTime: __expectLong,
    InputBytes: __expectLong,
    InputRows: __expectLong,
    OutputBytes: __expectLong,
    OutputRows: __expectLong,
    QueryStagePlan: (_: any) => de_QueryStagePlanNode(_, context),
    StageId: __expectLong,
    State: __expectString,
    SubStages: (_: any) => de_QueryStages(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1QueryStagePlanNode
 */
const de_QueryStagePlanNode = (output: any, context: __SerdeContext): QueryStagePlanNode => {
  return take(output, {
    Children: (_: any) => de_QueryStagePlanNodes(_, context),
    Identifier: __expectString,
    Name: __expectString,
    RemoteSources: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1QueryStagePlanNodes
 */
const de_QueryStagePlanNodes = (output: any, context: __SerdeContext): QueryStagePlanNode[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_QueryStage(entry, context);
    });
  return retVal;
};

// de_ResourceNotFoundException omitted.

// de_ResultConfiguration omitted.

// de_ResultReuseByAgeConfiguration omitted.

// de_ResultReuseConfiguration omitted.

// de_ResultReuseInformation omitted.

// de_ResultSet omitted.

// de_ResultSetMetadata omitted.

// de_Row omitted.

// de_RowList omitted.

// de_SessionAlreadyExistsException omitted.

// de_SessionConfiguration omitted.

/**
 * deserializeAws_json1_1SessionsList
 */
const de_SessionsList = (output: any, context: __SerdeContext): SessionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SessionSummary(entry, context);
    });
  return retVal;
};

// de_SessionStatistics omitted.

/**
 * deserializeAws_json1_1SessionStatus
 */
const de_SessionStatus = (output: any, context: __SerdeContext): SessionStatus => {
  return take(output, {
    EndDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IdleSinceDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StateChangeReason: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SessionSummary
 */
const de_SessionSummary = (output: any, context: __SerdeContext): SessionSummary => {
  return take(output, {
    Description: __expectString,
    EngineVersion: _json,
    NotebookVersion: __expectString,
    SessionId: __expectString,
    Status: (_: any) => de_SessionStatus(_, context),
  }) as any;
};

// de_StartCalculationExecutionResponse omitted.

// de_StartQueryExecutionOutput omitted.

// de_StartSessionResponse omitted.

// de_StopCalculationExecutionResponse omitted.

// de_StopQueryExecutionOutput omitted.

// de_StringList omitted.

// de_SupportedDPUSizeList omitted.

/**
 * deserializeAws_json1_1TableMetadata
 */
const de_TableMetadata = (output: any, context: __SerdeContext): TableMetadata => {
  return take(output, {
    Columns: _json,
    CreateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastAccessTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Parameters: _json,
    PartitionKeys: _json,
    TableType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TableMetadataList
 */
const de_TableMetadataList = (output: any, context: __SerdeContext): TableMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TableMetadata(entry, context);
    });
  return retVal;
};

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceOutput omitted.

// de_TerminateSessionResponse omitted.

// de_TooManyRequestsException omitted.

// de_UnprocessedNamedQueryId omitted.

// de_UnprocessedNamedQueryIdList omitted.

// de_UnprocessedPreparedStatementName omitted.

// de_UnprocessedPreparedStatementNameList omitted.

// de_UnprocessedQueryExecutionId omitted.

// de_UnprocessedQueryExecutionIdList omitted.

// de_UntagResourceOutput omitted.

// de_UpdateCapacityReservationOutput omitted.

// de_UpdateDataCatalogOutput omitted.

// de_UpdateNamedQueryOutput omitted.

// de_UpdateNotebookMetadataOutput omitted.

// de_UpdateNotebookOutput omitted.

// de_UpdatePreparedStatementOutput omitted.

// de_UpdateWorkGroupOutput omitted.

/**
 * deserializeAws_json1_1WorkGroup
 */
const de_WorkGroup = (output: any, context: __SerdeContext): WorkGroup => {
  return take(output, {
    Configuration: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Name: __expectString,
    State: __expectString,
  }) as any;
};

// de_WorkGroupConfiguration omitted.

// de_WorkGroupNamesList omitted.

/**
 * deserializeAws_json1_1WorkGroupsList
 */
const de_WorkGroupsList = (output: any, context: __SerdeContext): WorkGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WorkGroupSummary
 */
const de_WorkGroupSummary = (output: any, context: __SerdeContext): WorkGroupSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EngineVersion: _json,
    Name: __expectString,
    State: __expectString,
  }) as any;
};

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
