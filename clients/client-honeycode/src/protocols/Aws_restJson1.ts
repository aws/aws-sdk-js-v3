// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  BatchCreateTableRowsCommandInput,
  BatchCreateTableRowsCommandOutput,
} from "../commands/BatchCreateTableRowsCommand";
import {
  BatchDeleteTableRowsCommandInput,
  BatchDeleteTableRowsCommandOutput,
} from "../commands/BatchDeleteTableRowsCommand";
import {
  BatchUpdateTableRowsCommandInput,
  BatchUpdateTableRowsCommandOutput,
} from "../commands/BatchUpdateTableRowsCommand";
import {
  BatchUpsertTableRowsCommandInput,
  BatchUpsertTableRowsCommandOutput,
} from "../commands/BatchUpsertTableRowsCommand";
import {
  DescribeTableDataImportJobCommandInput,
  DescribeTableDataImportJobCommandOutput,
} from "../commands/DescribeTableDataImportJobCommand";
import { GetScreenDataCommandInput, GetScreenDataCommandOutput } from "../commands/GetScreenDataCommand";
import {
  InvokeScreenAutomationCommandInput,
  InvokeScreenAutomationCommandOutput,
} from "../commands/InvokeScreenAutomationCommand";
import { ListTableColumnsCommandInput, ListTableColumnsCommandOutput } from "../commands/ListTableColumnsCommand";
import { ListTableRowsCommandInput, ListTableRowsCommandOutput } from "../commands/ListTableRowsCommand";
import { ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { QueryTableRowsCommandInput, QueryTableRowsCommandOutput } from "../commands/QueryTableRowsCommand";
import {
  StartTableDataImportJobCommandInput,
  StartTableDataImportJobCommandOutput,
} from "../commands/StartTableDataImportJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { HoneycodeServiceException as __BaseException } from "../models/HoneycodeServiceException";
import {
  AccessDeniedException,
  AutomationExecutionException,
  AutomationExecutionTimeoutException,
  Cell,
  CellInput,
  ColumnMetadata,
  CreateRowData,
  DataItem,
  DelimitedTextImportOptions,
  DestinationOptions,
  FailedBatchItem,
  Filter,
  ImportDataSource,
  ImportDataSourceConfig,
  ImportJobSubmitter,
  ImportOptions,
  InternalServerException,
  RequestTimeoutException,
  ResourceNotFoundException,
  ResultRow,
  ResultSet,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  SourceDataColumnProperties,
  Table,
  TableColumn,
  TableDataImportJobMetadata,
  TableRow,
  ThrottlingException,
  UpdateRowData,
  UpsertRowData,
  UpsertRowsResult,
  ValidationException,
  VariableValue,
} from "../models/models_0";

/**
 * serializeAws_restJson1BatchCreateTableRowsCommand
 */
export const se_BatchCreateTableRowsCommand = async (
  input: BatchCreateTableRowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workbooks/{workbookId}/tables/{tableId}/rows/batchcreate";
  resolvedPath = __resolvedPath(resolvedPath, input, "workbookId", () => input.workbookId!, "{workbookId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "tableId", () => input.tableId!, "{tableId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.clientRequestToken != null && { clientRequestToken: input.clientRequestToken }),
    ...(input.rowsToCreate != null && { rowsToCreate: se_CreateRowDataList(input.rowsToCreate, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchDeleteTableRowsCommand
 */
export const se_BatchDeleteTableRowsCommand = async (
  input: BatchDeleteTableRowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workbooks/{workbookId}/tables/{tableId}/rows/batchdelete";
  resolvedPath = __resolvedPath(resolvedPath, input, "workbookId", () => input.workbookId!, "{workbookId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "tableId", () => input.tableId!, "{tableId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.clientRequestToken != null && { clientRequestToken: input.clientRequestToken }),
    ...(input.rowIds != null && { rowIds: se_RowIdList(input.rowIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchUpdateTableRowsCommand
 */
export const se_BatchUpdateTableRowsCommand = async (
  input: BatchUpdateTableRowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workbooks/{workbookId}/tables/{tableId}/rows/batchupdate";
  resolvedPath = __resolvedPath(resolvedPath, input, "workbookId", () => input.workbookId!, "{workbookId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "tableId", () => input.tableId!, "{tableId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.clientRequestToken != null && { clientRequestToken: input.clientRequestToken }),
    ...(input.rowsToUpdate != null && { rowsToUpdate: se_UpdateRowDataList(input.rowsToUpdate, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchUpsertTableRowsCommand
 */
export const se_BatchUpsertTableRowsCommand = async (
  input: BatchUpsertTableRowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workbooks/{workbookId}/tables/{tableId}/rows/batchupsert";
  resolvedPath = __resolvedPath(resolvedPath, input, "workbookId", () => input.workbookId!, "{workbookId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "tableId", () => input.tableId!, "{tableId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.clientRequestToken != null && { clientRequestToken: input.clientRequestToken }),
    ...(input.rowsToUpsert != null && { rowsToUpsert: se_UpsertRowDataList(input.rowsToUpsert, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeTableDataImportJobCommand
 */
export const se_DescribeTableDataImportJobCommand = async (
  input: DescribeTableDataImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workbooks/{workbookId}/tables/{tableId}/import/{jobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "workbookId", () => input.workbookId!, "{workbookId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "tableId", () => input.tableId!, "{tableId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetScreenDataCommand
 */
export const se_GetScreenDataCommand = async (
  input: GetScreenDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/screendata";
  let body: any;
  body = JSON.stringify({
    ...(input.appId != null && { appId: input.appId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.screenId != null && { screenId: input.screenId }),
    ...(input.variables != null && { variables: se_VariableValueMap(input.variables, context) }),
    ...(input.workbookId != null && { workbookId: input.workbookId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1InvokeScreenAutomationCommand
 */
export const se_InvokeScreenAutomationCommand = async (
  input: InvokeScreenAutomationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workbooks/{workbookId}/apps/{appId}/screens/{screenId}/automations/{screenAutomationId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "workbookId", () => input.workbookId!, "{workbookId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "appId", () => input.appId!, "{appId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "screenId", () => input.screenId!, "{screenId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "screenAutomationId",
    () => input.screenAutomationId!,
    "{screenAutomationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.clientRequestToken != null && { clientRequestToken: input.clientRequestToken }),
    ...(input.rowId != null && { rowId: input.rowId }),
    ...(input.variables != null && { variables: se_VariableValueMap(input.variables, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTableColumnsCommand
 */
export const se_ListTableColumnsCommand = async (
  input: ListTableColumnsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workbooks/{workbookId}/tables/{tableId}/columns";
  resolvedPath = __resolvedPath(resolvedPath, input, "workbookId", () => input.workbookId!, "{workbookId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "tableId", () => input.tableId!, "{tableId}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListTableRowsCommand
 */
export const se_ListTableRowsCommand = async (
  input: ListTableRowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workbooks/{workbookId}/tables/{tableId}/rows/list";
  resolvedPath = __resolvedPath(resolvedPath, input, "workbookId", () => input.workbookId!, "{workbookId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "tableId", () => input.tableId!, "{tableId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.rowIds != null && { rowIds: se_RowIdList(input.rowIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTablesCommand
 */
export const se_ListTablesCommand = async (
  input: ListTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workbooks/{workbookId}/tables";
  resolvedPath = __resolvedPath(resolvedPath, input, "workbookId", () => input.workbookId!, "{workbookId}", false);
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1QueryTableRowsCommand
 */
export const se_QueryTableRowsCommand = async (
  input: QueryTableRowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workbooks/{workbookId}/tables/{tableId}/rows/query";
  resolvedPath = __resolvedPath(resolvedPath, input, "workbookId", () => input.workbookId!, "{workbookId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "tableId", () => input.tableId!, "{tableId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.filterFormula != null && { filterFormula: se_Filter(input.filterFormula, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartTableDataImportJobCommand
 */
export const se_StartTableDataImportJobCommand = async (
  input: StartTableDataImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/workbooks/{workbookId}/tables/{destinationTableId}/import";
  resolvedPath = __resolvedPath(resolvedPath, input, "workbookId", () => input.workbookId!, "{workbookId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "destinationTableId",
    () => input.destinationTableId!,
    "{destinationTableId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.clientRequestToken != null && { clientRequestToken: input.clientRequestToken }),
    ...(input.dataFormat != null && { dataFormat: input.dataFormat }),
    ...(input.dataSource != null && { dataSource: se_ImportDataSource(input.dataSource, context) }),
    ...(input.importOptions != null && { importOptions: se_ImportOptions(input.importOptions, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * deserializeAws_restJson1BatchCreateTableRowsCommand
 */
export const de_BatchCreateTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchCreateTableRowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdRows != null) {
    contents.createdRows = de_CreatedRowsMap(data.createdRows, context);
  }
  if (data.failedBatchItems != null) {
    contents.failedBatchItems = de_FailedBatchItems(data.failedBatchItems, context);
  }
  if (data.workbookCursor != null) {
    contents.workbookCursor = __expectLong(data.workbookCursor);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchCreateTableRowsCommandError
 */
const de_BatchCreateTableRowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateTableRowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.honeycode#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
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
 * deserializeAws_restJson1BatchDeleteTableRowsCommand
 */
export const de_BatchDeleteTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchDeleteTableRowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.failedBatchItems != null) {
    contents.failedBatchItems = de_FailedBatchItems(data.failedBatchItems, context);
  }
  if (data.workbookCursor != null) {
    contents.workbookCursor = __expectLong(data.workbookCursor);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchDeleteTableRowsCommandError
 */
const de_BatchDeleteTableRowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteTableRowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
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
 * deserializeAws_restJson1BatchUpdateTableRowsCommand
 */
export const de_BatchUpdateTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchUpdateTableRowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.failedBatchItems != null) {
    contents.failedBatchItems = de_FailedBatchItems(data.failedBatchItems, context);
  }
  if (data.workbookCursor != null) {
    contents.workbookCursor = __expectLong(data.workbookCursor);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpdateTableRowsCommandError
 */
const de_BatchUpdateTableRowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateTableRowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
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
 * deserializeAws_restJson1BatchUpsertTableRowsCommand
 */
export const de_BatchUpsertTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpsertTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchUpsertTableRowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.failedBatchItems != null) {
    contents.failedBatchItems = de_FailedBatchItems(data.failedBatchItems, context);
  }
  if (data.rows != null) {
    contents.rows = de_UpsertRowsResultMap(data.rows, context);
  }
  if (data.workbookCursor != null) {
    contents.workbookCursor = __expectLong(data.workbookCursor);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpsertTableRowsCommandError
 */
const de_BatchUpsertTableRowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpsertTableRowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.honeycode#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
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
 * deserializeAws_restJson1DescribeTableDataImportJobCommand
 */
export const de_DescribeTableDataImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableDataImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeTableDataImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorCode != null) {
    contents.errorCode = __expectString(data.errorCode);
  }
  if (data.jobMetadata != null) {
    contents.jobMetadata = de_TableDataImportJobMetadata(data.jobMetadata, context);
  }
  if (data.jobStatus != null) {
    contents.jobStatus = __expectString(data.jobStatus);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTableDataImportJobCommandError
 */
const de_DescribeTableDataImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableDataImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
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
 * deserializeAws_restJson1GetScreenDataCommand
 */
export const de_GetScreenDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScreenDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetScreenDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.results != null) {
    contents.results = de_ResultSetMap(data.results, context);
  }
  if (data.workbookCursor != null) {
    contents.workbookCursor = __expectLong(data.workbookCursor);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetScreenDataCommandError
 */
const de_GetScreenDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScreenDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
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
 * deserializeAws_restJson1InvokeScreenAutomationCommand
 */
export const de_InvokeScreenAutomationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeScreenAutomationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_InvokeScreenAutomationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.workbookCursor != null) {
    contents.workbookCursor = __expectLong(data.workbookCursor);
  }
  return contents;
};

/**
 * deserializeAws_restJson1InvokeScreenAutomationCommandError
 */
const de_InvokeScreenAutomationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeScreenAutomationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AutomationExecutionException":
    case "com.amazonaws.honeycode#AutomationExecutionException":
      throw await de_AutomationExecutionExceptionRes(parsedOutput, context);
    case "AutomationExecutionTimeoutException":
    case "com.amazonaws.honeycode#AutomationExecutionTimeoutException":
      throw await de_AutomationExecutionTimeoutExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.honeycode#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
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
 * deserializeAws_restJson1ListTableColumnsCommand
 */
export const de_ListTableColumnsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableColumnsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTableColumnsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.tableColumns != null) {
    contents.tableColumns = de_TableColumns(data.tableColumns, context);
  }
  if (data.workbookCursor != null) {
    contents.workbookCursor = __expectLong(data.workbookCursor);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTableColumnsCommandError
 */
const de_ListTableColumnsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableColumnsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
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
 * deserializeAws_restJson1ListTableRowsCommand
 */
export const de_ListTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTableRowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.columnIds != null) {
    contents.columnIds = de_ResourceIds(data.columnIds, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.rowIdsNotFound != null) {
    contents.rowIdsNotFound = de_RowIdList(data.rowIdsNotFound, context);
  }
  if (data.rows != null) {
    contents.rows = de_TableRows(data.rows, context);
  }
  if (data.workbookCursor != null) {
    contents.workbookCursor = __expectLong(data.workbookCursor);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTableRowsCommandError
 */
const de_ListTableRowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableRowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
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
 * deserializeAws_restJson1ListTablesCommand
 */
export const de_ListTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTablesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.tables != null) {
    contents.tables = de_Tables(data.tables, context);
  }
  if (data.workbookCursor != null) {
    contents.workbookCursor = __expectLong(data.workbookCursor);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTablesCommandError
 */
const de_ListTablesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
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
    case "com.amazonaws.honeycode#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
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
 * deserializeAws_restJson1QueryTableRowsCommand
 */
export const de_QueryTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_QueryTableRowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.columnIds != null) {
    contents.columnIds = de_ResourceIds(data.columnIds, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.rows != null) {
    contents.rows = de_TableRows(data.rows, context);
  }
  if (data.workbookCursor != null) {
    contents.workbookCursor = __expectLong(data.workbookCursor);
  }
  return contents;
};

/**
 * deserializeAws_restJson1QueryTableRowsCommandError
 */
const de_QueryTableRowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryTableRowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
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
 * deserializeAws_restJson1StartTableDataImportJobCommand
 */
export const de_StartTableDataImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTableDataImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartTableDataImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobId != null) {
    contents.jobId = __expectString(data.jobId);
  }
  if (data.jobStatus != null) {
    contents.jobStatus = __expectString(data.jobStatus);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartTableDataImportJobCommandError
 */
const de_StartTableDataImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTableDataImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.honeycode#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
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
    case "com.amazonaws.honeycode#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
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
    case "com.amazonaws.honeycode#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
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

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1AutomationExecutionExceptionRes
 */
const de_AutomationExecutionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AutomationExecutionException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AutomationExecutionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1AutomationExecutionTimeoutExceptionRes
 */
const de_AutomationExecutionTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AutomationExecutionTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AutomationExecutionTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1RequestTimeoutExceptionRes
 */
const de_RequestTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new RequestTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1CellInput
 */
const se_CellInput = (input: CellInput, context: __SerdeContext): any => {
  return {
    ...(input.fact != null && { fact: input.fact }),
    ...(input.facts != null && { facts: se_FactList(input.facts, context) }),
  };
};

/**
 * serializeAws_restJson1CreateRowData
 */
const se_CreateRowData = (input: CreateRowData, context: __SerdeContext): any => {
  return {
    ...(input.batchItemId != null && { batchItemId: input.batchItemId }),
    ...(input.cellsToCreate != null && { cellsToCreate: se_RowDataInput(input.cellsToCreate, context) }),
  };
};

/**
 * serializeAws_restJson1CreateRowDataList
 */
const se_CreateRowDataList = (input: CreateRowData[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CreateRowData(entry, context);
    });
};

/**
 * serializeAws_restJson1DelimitedTextImportOptions
 */
const se_DelimitedTextImportOptions = (input: DelimitedTextImportOptions, context: __SerdeContext): any => {
  return {
    ...(input.dataCharacterEncoding != null && { dataCharacterEncoding: input.dataCharacterEncoding }),
    ...(input.delimiter != null && { delimiter: input.delimiter }),
    ...(input.hasHeaderRow != null && { hasHeaderRow: input.hasHeaderRow }),
    ...(input.ignoreEmptyRows != null && { ignoreEmptyRows: input.ignoreEmptyRows }),
  };
};

/**
 * serializeAws_restJson1DestinationOptions
 */
const se_DestinationOptions = (input: DestinationOptions, context: __SerdeContext): any => {
  return {
    ...(input.columnMap != null && { columnMap: se_ImportColumnMap(input.columnMap, context) }),
  };
};

/**
 * serializeAws_restJson1FactList
 */
const se_FactList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.contextRowId != null && { contextRowId: input.contextRowId }),
    ...(input.formula != null && { formula: input.formula }),
  };
};

/**
 * serializeAws_restJson1ImportColumnMap
 */
const se_ImportColumnMap = (input: Record<string, SourceDataColumnProperties>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_SourceDataColumnProperties(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ImportDataSource
 */
const se_ImportDataSource = (input: ImportDataSource, context: __SerdeContext): any => {
  return {
    ...(input.dataSourceConfig != null && {
      dataSourceConfig: se_ImportDataSourceConfig(input.dataSourceConfig, context),
    }),
  };
};

/**
 * serializeAws_restJson1ImportDataSourceConfig
 */
const se_ImportDataSourceConfig = (input: ImportDataSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.dataSourceUrl != null && { dataSourceUrl: input.dataSourceUrl }),
  };
};

/**
 * serializeAws_restJson1ImportOptions
 */
const se_ImportOptions = (input: ImportOptions, context: __SerdeContext): any => {
  return {
    ...(input.delimitedTextOptions != null && {
      delimitedTextOptions: se_DelimitedTextImportOptions(input.delimitedTextOptions, context),
    }),
    ...(input.destinationOptions != null && {
      destinationOptions: se_DestinationOptions(input.destinationOptions, context),
    }),
  };
};

/**
 * serializeAws_restJson1RowDataInput
 */
const se_RowDataInput = (input: Record<string, CellInput>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_CellInput(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1RowIdList
 */
const se_RowIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SourceDataColumnProperties
 */
const se_SourceDataColumnProperties = (input: SourceDataColumnProperties, context: __SerdeContext): any => {
  return {
    ...(input.columnIndex != null && { columnIndex: input.columnIndex }),
  };
};

/**
 * serializeAws_restJson1TagsMap
 */
const se_TagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1UpdateRowData
 */
const se_UpdateRowData = (input: UpdateRowData, context: __SerdeContext): any => {
  return {
    ...(input.cellsToUpdate != null && { cellsToUpdate: se_RowDataInput(input.cellsToUpdate, context) }),
    ...(input.rowId != null && { rowId: input.rowId }),
  };
};

/**
 * serializeAws_restJson1UpdateRowDataList
 */
const se_UpdateRowDataList = (input: UpdateRowData[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UpdateRowData(entry, context);
    });
};

/**
 * serializeAws_restJson1UpsertRowData
 */
const se_UpsertRowData = (input: UpsertRowData, context: __SerdeContext): any => {
  return {
    ...(input.batchItemId != null && { batchItemId: input.batchItemId }),
    ...(input.cellsToUpdate != null && { cellsToUpdate: se_RowDataInput(input.cellsToUpdate, context) }),
    ...(input.filter != null && { filter: se_Filter(input.filter, context) }),
  };
};

/**
 * serializeAws_restJson1UpsertRowDataList
 */
const se_UpsertRowDataList = (input: UpsertRowData[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UpsertRowData(entry, context);
    });
};

/**
 * serializeAws_restJson1VariableValue
 */
const se_VariableValue = (input: VariableValue, context: __SerdeContext): any => {
  return {
    ...(input.rawValue != null && { rawValue: input.rawValue }),
  };
};

/**
 * serializeAws_restJson1VariableValueMap
 */
const se_VariableValueMap = (input: Record<string, VariableValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_VariableValue(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Cell
 */
const de_Cell = (output: any, context: __SerdeContext): Cell => {
  return {
    format: __expectString(output.format),
    formattedValue: __expectString(output.formattedValue),
    formattedValues:
      output.formattedValues != null ? de_FormattedValuesList(output.formattedValues, context) : undefined,
    formula: __expectString(output.formula),
    rawValue: __expectString(output.rawValue),
  } as any;
};

/**
 * deserializeAws_restJson1Cells
 */
const de_Cells = (output: any, context: __SerdeContext): Cell[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Cell(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ColumnMetadata
 */
const de_ColumnMetadata = (output: any, context: __SerdeContext): ColumnMetadata => {
  return {
    format: __expectString(output.format),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1CreatedRowsMap
 */
const de_CreatedRowsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1DataItem
 */
const de_DataItem = (output: any, context: __SerdeContext): DataItem => {
  return {
    formattedValue: __expectString(output.formattedValue),
    overrideFormat: __expectString(output.overrideFormat),
    rawValue: __expectString(output.rawValue),
  } as any;
};

/**
 * deserializeAws_restJson1DataItems
 */
const de_DataItems = (output: any, context: __SerdeContext): DataItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DelimitedTextImportOptions
 */
const de_DelimitedTextImportOptions = (output: any, context: __SerdeContext): DelimitedTextImportOptions => {
  return {
    dataCharacterEncoding: __expectString(output.dataCharacterEncoding),
    delimiter: __expectString(output.delimiter),
    hasHeaderRow: __expectBoolean(output.hasHeaderRow),
    ignoreEmptyRows: __expectBoolean(output.ignoreEmptyRows),
  } as any;
};

/**
 * deserializeAws_restJson1DestinationOptions
 */
const de_DestinationOptions = (output: any, context: __SerdeContext): DestinationOptions => {
  return {
    columnMap: output.columnMap != null ? de_ImportColumnMap(output.columnMap, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FailedBatchItem
 */
const de_FailedBatchItem = (output: any, context: __SerdeContext): FailedBatchItem => {
  return {
    errorMessage: __expectString(output.errorMessage),
    id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_restJson1FailedBatchItems
 */
const de_FailedBatchItems = (output: any, context: __SerdeContext): FailedBatchItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailedBatchItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FormattedValuesList
 */
const de_FormattedValuesList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ImportColumnMap
 */
const de_ImportColumnMap = (output: any, context: __SerdeContext): Record<string, SourceDataColumnProperties> => {
  return Object.entries(output).reduce(
    (acc: Record<string, SourceDataColumnProperties>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_SourceDataColumnProperties(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1ImportDataSource
 */
const de_ImportDataSource = (output: any, context: __SerdeContext): ImportDataSource => {
  return {
    dataSourceConfig:
      output.dataSourceConfig != null ? de_ImportDataSourceConfig(output.dataSourceConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ImportDataSourceConfig
 */
const de_ImportDataSourceConfig = (output: any, context: __SerdeContext): ImportDataSourceConfig => {
  return {
    dataSourceUrl: __expectString(output.dataSourceUrl),
  } as any;
};

/**
 * deserializeAws_restJson1ImportJobSubmitter
 */
const de_ImportJobSubmitter = (output: any, context: __SerdeContext): ImportJobSubmitter => {
  return {
    email: __expectString(output.email),
    userArn: __expectString(output.userArn),
  } as any;
};

/**
 * deserializeAws_restJson1ImportOptions
 */
const de_ImportOptions = (output: any, context: __SerdeContext): ImportOptions => {
  return {
    delimitedTextOptions:
      output.delimitedTextOptions != null
        ? de_DelimitedTextImportOptions(output.delimitedTextOptions, context)
        : undefined,
    destinationOptions:
      output.destinationOptions != null ? de_DestinationOptions(output.destinationOptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResourceIds
 */
const de_ResourceIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ResultHeader
 */
const de_ResultHeader = (output: any, context: __SerdeContext): ColumnMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ColumnMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResultRow
 */
const de_ResultRow = (output: any, context: __SerdeContext): ResultRow => {
  return {
    dataItems: output.dataItems != null ? de_DataItems(output.dataItems, context) : undefined,
    rowId: __expectString(output.rowId),
  } as any;
};

/**
 * deserializeAws_restJson1ResultRows
 */
const de_ResultRows = (output: any, context: __SerdeContext): ResultRow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResultRow(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResultSet
 */
const de_ResultSet = (output: any, context: __SerdeContext): ResultSet => {
  return {
    headers: output.headers != null ? de_ResultHeader(output.headers, context) : undefined,
    rows: output.rows != null ? de_ResultRows(output.rows, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResultSetMap
 */
const de_ResultSetMap = (output: any, context: __SerdeContext): Record<string, ResultSet> => {
  return Object.entries(output).reduce((acc: Record<string, ResultSet>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ResultSet(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1RowIdList
 */
const de_RowIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1SourceDataColumnProperties
 */
const de_SourceDataColumnProperties = (output: any, context: __SerdeContext): SourceDataColumnProperties => {
  return {
    columnIndex: __expectInt32(output.columnIndex),
  } as any;
};

/**
 * deserializeAws_restJson1Table
 */
const de_Table = (output: any, context: __SerdeContext): Table => {
  return {
    tableId: __expectString(output.tableId),
    tableName: __expectString(output.tableName),
  } as any;
};

/**
 * deserializeAws_restJson1TableColumn
 */
const de_TableColumn = (output: any, context: __SerdeContext): TableColumn => {
  return {
    format: __expectString(output.format),
    tableColumnId: __expectString(output.tableColumnId),
    tableColumnName: __expectString(output.tableColumnName),
  } as any;
};

/**
 * deserializeAws_restJson1TableColumns
 */
const de_TableColumns = (output: any, context: __SerdeContext): TableColumn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TableColumn(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TableDataImportJobMetadata
 */
const de_TableDataImportJobMetadata = (output: any, context: __SerdeContext): TableDataImportJobMetadata => {
  return {
    dataSource: output.dataSource != null ? de_ImportDataSource(output.dataSource, context) : undefined,
    importOptions: output.importOptions != null ? de_ImportOptions(output.importOptions, context) : undefined,
    submitTime:
      output.submitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.submitTime))) : undefined,
    submitter: output.submitter != null ? de_ImportJobSubmitter(output.submitter, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TableRow
 */
const de_TableRow = (output: any, context: __SerdeContext): TableRow => {
  return {
    cells: output.cells != null ? de_Cells(output.cells, context) : undefined,
    rowId: __expectString(output.rowId),
  } as any;
};

/**
 * deserializeAws_restJson1TableRows
 */
const de_TableRows = (output: any, context: __SerdeContext): TableRow[] => {
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
 * deserializeAws_restJson1Tables
 */
const de_Tables = (output: any, context: __SerdeContext): Table[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Table(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TagsMap
 */
const de_TagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1UpsertRowsResult
 */
const de_UpsertRowsResult = (output: any, context: __SerdeContext): UpsertRowsResult => {
  return {
    rowIds: output.rowIds != null ? de_RowIdList(output.rowIds, context) : undefined,
    upsertAction: __expectString(output.upsertAction),
  } as any;
};

/**
 * deserializeAws_restJson1UpsertRowsResultMap
 */
const de_UpsertRowsResultMap = (output: any, context: __SerdeContext): Record<string, UpsertRowsResult> => {
  return Object.entries(output).reduce((acc: Record<string, UpsertRowsResult>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_UpsertRowsResult(value, context);
    return acc;
  }, {});
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
