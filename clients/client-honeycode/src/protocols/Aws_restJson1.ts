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

export const serializeAws_restJson1BatchCreateTableRowsCommand = async (
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
    ...(input.rowsToCreate != null && {
      rowsToCreate: serializeAws_restJson1CreateRowDataList(input.rowsToCreate, context),
    }),
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

export const serializeAws_restJson1BatchDeleteTableRowsCommand = async (
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
    ...(input.rowIds != null && { rowIds: serializeAws_restJson1RowIdList(input.rowIds, context) }),
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

export const serializeAws_restJson1BatchUpdateTableRowsCommand = async (
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
    ...(input.rowsToUpdate != null && {
      rowsToUpdate: serializeAws_restJson1UpdateRowDataList(input.rowsToUpdate, context),
    }),
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

export const serializeAws_restJson1BatchUpsertTableRowsCommand = async (
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
    ...(input.rowsToUpsert != null && {
      rowsToUpsert: serializeAws_restJson1UpsertRowDataList(input.rowsToUpsert, context),
    }),
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

export const serializeAws_restJson1DescribeTableDataImportJobCommand = async (
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

export const serializeAws_restJson1GetScreenDataCommand = async (
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
    ...(input.variables != null && { variables: serializeAws_restJson1VariableValueMap(input.variables, context) }),
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

export const serializeAws_restJson1InvokeScreenAutomationCommand = async (
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
    ...(input.variables != null && { variables: serializeAws_restJson1VariableValueMap(input.variables, context) }),
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

export const serializeAws_restJson1ListTableColumnsCommand = async (
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

export const serializeAws_restJson1ListTableRowsCommand = async (
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
    ...(input.rowIds != null && { rowIds: serializeAws_restJson1RowIdList(input.rowIds, context) }),
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

export const serializeAws_restJson1ListTablesCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1QueryTableRowsCommand = async (
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
    ...(input.filterFormula != null && { filterFormula: serializeAws_restJson1Filter(input.filterFormula, context) }),
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

export const serializeAws_restJson1StartTableDataImportJobCommand = async (
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
    ...(input.dataSource != null && { dataSource: serializeAws_restJson1ImportDataSource(input.dataSource, context) }),
    ...(input.importOptions != null && {
      importOptions: serializeAws_restJson1ImportOptions(input.importOptions, context),
    }),
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const deserializeAws_restJson1BatchCreateTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchCreateTableRowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdRows != null) {
    contents.createdRows = deserializeAws_restJson1CreatedRowsMap(data.createdRows, context);
  }
  if (data.failedBatchItems != null) {
    contents.failedBatchItems = deserializeAws_restJson1FailedBatchItems(data.failedBatchItems, context);
  }
  if (data.workbookCursor != null) {
    contents.workbookCursor = __expectLong(data.workbookCursor);
  }
  return contents;
};

const deserializeAws_restJson1BatchCreateTableRowsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.honeycode#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1BatchDeleteTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDeleteTableRowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.failedBatchItems != null) {
    contents.failedBatchItems = deserializeAws_restJson1FailedBatchItems(data.failedBatchItems, context);
  }
  if (data.workbookCursor != null) {
    contents.workbookCursor = __expectLong(data.workbookCursor);
  }
  return contents;
};

const deserializeAws_restJson1BatchDeleteTableRowsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1BatchUpdateTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchUpdateTableRowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.failedBatchItems != null) {
    contents.failedBatchItems = deserializeAws_restJson1FailedBatchItems(data.failedBatchItems, context);
  }
  if (data.workbookCursor != null) {
    contents.workbookCursor = __expectLong(data.workbookCursor);
  }
  return contents;
};

const deserializeAws_restJson1BatchUpdateTableRowsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1BatchUpsertTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpsertTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchUpsertTableRowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.failedBatchItems != null) {
    contents.failedBatchItems = deserializeAws_restJson1FailedBatchItems(data.failedBatchItems, context);
  }
  if (data.rows != null) {
    contents.rows = deserializeAws_restJson1UpsertRowsResultMap(data.rows, context);
  }
  if (data.workbookCursor != null) {
    contents.workbookCursor = __expectLong(data.workbookCursor);
  }
  return contents;
};

const deserializeAws_restJson1BatchUpsertTableRowsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.honeycode#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeTableDataImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableDataImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeTableDataImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorCode != null) {
    contents.errorCode = __expectString(data.errorCode);
  }
  if (data.jobMetadata != null) {
    contents.jobMetadata = deserializeAws_restJson1TableDataImportJobMetadata(data.jobMetadata, context);
  }
  if (data.jobStatus != null) {
    contents.jobStatus = __expectString(data.jobStatus);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1DescribeTableDataImportJobCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetScreenDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScreenDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetScreenDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.results != null) {
    contents.results = deserializeAws_restJson1ResultSetMap(data.results, context);
  }
  if (data.workbookCursor != null) {
    contents.workbookCursor = __expectLong(data.workbookCursor);
  }
  return contents;
};

const deserializeAws_restJson1GetScreenDataCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1InvokeScreenAutomationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeScreenAutomationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1InvokeScreenAutomationCommandError(output, context);
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

const deserializeAws_restJson1InvokeScreenAutomationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AutomationExecutionException":
    case "com.amazonaws.honeycode#AutomationExecutionException":
      throw await deserializeAws_restJson1AutomationExecutionExceptionResponse(parsedOutput, context);
    case "AutomationExecutionTimeoutException":
    case "com.amazonaws.honeycode#AutomationExecutionTimeoutException":
      throw await deserializeAws_restJson1AutomationExecutionTimeoutExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.honeycode#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListTableColumnsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableColumnsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTableColumnsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.tableColumns != null) {
    contents.tableColumns = deserializeAws_restJson1TableColumns(data.tableColumns, context);
  }
  if (data.workbookCursor != null) {
    contents.workbookCursor = __expectLong(data.workbookCursor);
  }
  return contents;
};

const deserializeAws_restJson1ListTableColumnsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTableRowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.columnIds != null) {
    contents.columnIds = deserializeAws_restJson1ResourceIds(data.columnIds, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.rowIdsNotFound != null) {
    contents.rowIdsNotFound = deserializeAws_restJson1RowIdList(data.rowIdsNotFound, context);
  }
  if (data.rows != null) {
    contents.rows = deserializeAws_restJson1TableRows(data.rows, context);
  }
  if (data.workbookCursor != null) {
    contents.workbookCursor = __expectLong(data.workbookCursor);
  }
  return contents;
};

const deserializeAws_restJson1ListTableRowsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTablesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.tables != null) {
    contents.tables = deserializeAws_restJson1Tables(data.tables, context);
  }
  if (data.workbookCursor != null) {
    contents.workbookCursor = __expectLong(data.workbookCursor);
  }
  return contents;
};

const deserializeAws_restJson1ListTablesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1QueryTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1QueryTableRowsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.columnIds != null) {
    contents.columnIds = deserializeAws_restJson1ResourceIds(data.columnIds, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.rows != null) {
    contents.rows = deserializeAws_restJson1TableRows(data.rows, context);
  }
  if (data.workbookCursor != null) {
    contents.workbookCursor = __expectLong(data.workbookCursor);
  }
  return contents;
};

const deserializeAws_restJson1QueryTableRowsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StartTableDataImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTableDataImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartTableDataImportJobCommandError(output, context);
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

const deserializeAws_restJson1StartTableDataImportJobCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.honeycode#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      throw await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1AutomationExecutionExceptionResponse = async (
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

const deserializeAws_restJson1AutomationExecutionTimeoutExceptionResponse = async (
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const deserializeAws_restJson1RequestTimeoutExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
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

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
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

const serializeAws_restJson1CellInput = (input: CellInput, context: __SerdeContext): any => {
  return {
    ...(input.fact != null && { fact: input.fact }),
    ...(input.facts != null && { facts: serializeAws_restJson1FactList(input.facts, context) }),
  };
};

const serializeAws_restJson1CreateRowData = (input: CreateRowData, context: __SerdeContext): any => {
  return {
    ...(input.batchItemId != null && { batchItemId: input.batchItemId }),
    ...(input.cellsToCreate != null && {
      cellsToCreate: serializeAws_restJson1RowDataInput(input.cellsToCreate, context),
    }),
  };
};

const serializeAws_restJson1CreateRowDataList = (input: CreateRowData[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CreateRowData(entry, context);
    });
};

const serializeAws_restJson1DelimitedTextImportOptions = (
  input: DelimitedTextImportOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.dataCharacterEncoding != null && { dataCharacterEncoding: input.dataCharacterEncoding }),
    ...(input.delimiter != null && { delimiter: input.delimiter }),
    ...(input.hasHeaderRow != null && { hasHeaderRow: input.hasHeaderRow }),
    ...(input.ignoreEmptyRows != null && { ignoreEmptyRows: input.ignoreEmptyRows }),
  };
};

const serializeAws_restJson1DestinationOptions = (input: DestinationOptions, context: __SerdeContext): any => {
  return {
    ...(input.columnMap != null && { columnMap: serializeAws_restJson1ImportColumnMap(input.columnMap, context) }),
  };
};

const serializeAws_restJson1FactList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.contextRowId != null && { contextRowId: input.contextRowId }),
    ...(input.formula != null && { formula: input.formula }),
  };
};

const serializeAws_restJson1ImportColumnMap = (
  input: Record<string, SourceDataColumnProperties>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1SourceDataColumnProperties(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1ImportDataSource = (input: ImportDataSource, context: __SerdeContext): any => {
  return {
    ...(input.dataSourceConfig != null && {
      dataSourceConfig: serializeAws_restJson1ImportDataSourceConfig(input.dataSourceConfig, context),
    }),
  };
};

const serializeAws_restJson1ImportDataSourceConfig = (input: ImportDataSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.dataSourceUrl != null && { dataSourceUrl: input.dataSourceUrl }),
  };
};

const serializeAws_restJson1ImportOptions = (input: ImportOptions, context: __SerdeContext): any => {
  return {
    ...(input.delimitedTextOptions != null && {
      delimitedTextOptions: serializeAws_restJson1DelimitedTextImportOptions(input.delimitedTextOptions, context),
    }),
    ...(input.destinationOptions != null && {
      destinationOptions: serializeAws_restJson1DestinationOptions(input.destinationOptions, context),
    }),
  };
};

const serializeAws_restJson1RowDataInput = (input: Record<string, CellInput>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1CellInput(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1RowIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SourceDataColumnProperties = (
  input: SourceDataColumnProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.columnIndex != null && { columnIndex: input.columnIndex }),
  };
};

const serializeAws_restJson1TagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1UpdateRowData = (input: UpdateRowData, context: __SerdeContext): any => {
  return {
    ...(input.cellsToUpdate != null && {
      cellsToUpdate: serializeAws_restJson1RowDataInput(input.cellsToUpdate, context),
    }),
    ...(input.rowId != null && { rowId: input.rowId }),
  };
};

const serializeAws_restJson1UpdateRowDataList = (input: UpdateRowData[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1UpdateRowData(entry, context);
    });
};

const serializeAws_restJson1UpsertRowData = (input: UpsertRowData, context: __SerdeContext): any => {
  return {
    ...(input.batchItemId != null && { batchItemId: input.batchItemId }),
    ...(input.cellsToUpdate != null && {
      cellsToUpdate: serializeAws_restJson1RowDataInput(input.cellsToUpdate, context),
    }),
    ...(input.filter != null && { filter: serializeAws_restJson1Filter(input.filter, context) }),
  };
};

const serializeAws_restJson1UpsertRowDataList = (input: UpsertRowData[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1UpsertRowData(entry, context);
    });
};

const serializeAws_restJson1VariableValue = (input: VariableValue, context: __SerdeContext): any => {
  return {
    ...(input.rawValue != null && { rawValue: input.rawValue }),
  };
};

const serializeAws_restJson1VariableValueMap = (input: Record<string, VariableValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1VariableValue(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1Cell = (output: any, context: __SerdeContext): Cell => {
  return {
    format: __expectString(output.format),
    formattedValue: __expectString(output.formattedValue),
    formattedValues:
      output.formattedValues != null
        ? deserializeAws_restJson1FormattedValuesList(output.formattedValues, context)
        : undefined,
    formula: __expectString(output.formula),
    rawValue: __expectString(output.rawValue),
  } as any;
};

const deserializeAws_restJson1Cells = (output: any, context: __SerdeContext): Cell[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Cell(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ColumnMetadata = (output: any, context: __SerdeContext): ColumnMetadata => {
  return {
    format: __expectString(output.format),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1CreatedRowsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1DataItem = (output: any, context: __SerdeContext): DataItem => {
  return {
    formattedValue: __expectString(output.formattedValue),
    overrideFormat: __expectString(output.overrideFormat),
    rawValue: __expectString(output.rawValue),
  } as any;
};

const deserializeAws_restJson1DataItems = (output: any, context: __SerdeContext): DataItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DelimitedTextImportOptions = (
  output: any,
  context: __SerdeContext
): DelimitedTextImportOptions => {
  return {
    dataCharacterEncoding: __expectString(output.dataCharacterEncoding),
    delimiter: __expectString(output.delimiter),
    hasHeaderRow: __expectBoolean(output.hasHeaderRow),
    ignoreEmptyRows: __expectBoolean(output.ignoreEmptyRows),
  } as any;
};

const deserializeAws_restJson1DestinationOptions = (output: any, context: __SerdeContext): DestinationOptions => {
  return {
    columnMap:
      output.columnMap != null ? deserializeAws_restJson1ImportColumnMap(output.columnMap, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FailedBatchItem = (output: any, context: __SerdeContext): FailedBatchItem => {
  return {
    errorMessage: __expectString(output.errorMessage),
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1FailedBatchItems = (output: any, context: __SerdeContext): FailedBatchItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FailedBatchItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FormattedValuesList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ImportColumnMap = (
  output: any,
  context: __SerdeContext
): Record<string, SourceDataColumnProperties> => {
  return Object.entries(output).reduce(
    (acc: Record<string, SourceDataColumnProperties>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1SourceDataColumnProperties(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1ImportDataSource = (output: any, context: __SerdeContext): ImportDataSource => {
  return {
    dataSourceConfig:
      output.dataSourceConfig != null
        ? deserializeAws_restJson1ImportDataSourceConfig(output.dataSourceConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ImportDataSourceConfig = (
  output: any,
  context: __SerdeContext
): ImportDataSourceConfig => {
  return {
    dataSourceUrl: __expectString(output.dataSourceUrl),
  } as any;
};

const deserializeAws_restJson1ImportJobSubmitter = (output: any, context: __SerdeContext): ImportJobSubmitter => {
  return {
    email: __expectString(output.email),
    userArn: __expectString(output.userArn),
  } as any;
};

const deserializeAws_restJson1ImportOptions = (output: any, context: __SerdeContext): ImportOptions => {
  return {
    delimitedTextOptions:
      output.delimitedTextOptions != null
        ? deserializeAws_restJson1DelimitedTextImportOptions(output.delimitedTextOptions, context)
        : undefined,
    destinationOptions:
      output.destinationOptions != null
        ? deserializeAws_restJson1DestinationOptions(output.destinationOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ResultHeader = (output: any, context: __SerdeContext): ColumnMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResultRow = (output: any, context: __SerdeContext): ResultRow => {
  return {
    dataItems: output.dataItems != null ? deserializeAws_restJson1DataItems(output.dataItems, context) : undefined,
    rowId: __expectString(output.rowId),
  } as any;
};

const deserializeAws_restJson1ResultRows = (output: any, context: __SerdeContext): ResultRow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResultRow(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResultSet = (output: any, context: __SerdeContext): ResultSet => {
  return {
    headers: output.headers != null ? deserializeAws_restJson1ResultHeader(output.headers, context) : undefined,
    rows: output.rows != null ? deserializeAws_restJson1ResultRows(output.rows, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ResultSetMap = (output: any, context: __SerdeContext): Record<string, ResultSet> => {
  return Object.entries(output).reduce((acc: Record<string, ResultSet>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1ResultSet(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1RowIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SourceDataColumnProperties = (
  output: any,
  context: __SerdeContext
): SourceDataColumnProperties => {
  return {
    columnIndex: __expectInt32(output.columnIndex),
  } as any;
};

const deserializeAws_restJson1Table = (output: any, context: __SerdeContext): Table => {
  return {
    tableId: __expectString(output.tableId),
    tableName: __expectString(output.tableName),
  } as any;
};

const deserializeAws_restJson1TableColumn = (output: any, context: __SerdeContext): TableColumn => {
  return {
    format: __expectString(output.format),
    tableColumnId: __expectString(output.tableColumnId),
    tableColumnName: __expectString(output.tableColumnName),
  } as any;
};

const deserializeAws_restJson1TableColumns = (output: any, context: __SerdeContext): TableColumn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TableColumn(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TableDataImportJobMetadata = (
  output: any,
  context: __SerdeContext
): TableDataImportJobMetadata => {
  return {
    dataSource:
      output.dataSource != null ? deserializeAws_restJson1ImportDataSource(output.dataSource, context) : undefined,
    importOptions:
      output.importOptions != null ? deserializeAws_restJson1ImportOptions(output.importOptions, context) : undefined,
    submitTime:
      output.submitTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.submitTime))) : undefined,
    submitter:
      output.submitter != null ? deserializeAws_restJson1ImportJobSubmitter(output.submitter, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TableRow = (output: any, context: __SerdeContext): TableRow => {
  return {
    cells: output.cells != null ? deserializeAws_restJson1Cells(output.cells, context) : undefined,
    rowId: __expectString(output.rowId),
  } as any;
};

const deserializeAws_restJson1TableRows = (output: any, context: __SerdeContext): TableRow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TableRow(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Tables = (output: any, context: __SerdeContext): Table[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Table(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1UpsertRowsResult = (output: any, context: __SerdeContext): UpsertRowsResult => {
  return {
    rowIds: output.rowIds != null ? deserializeAws_restJson1RowIdList(output.rowIds, context) : undefined,
    upsertAction: __expectString(output.upsertAction),
  } as any;
};

const deserializeAws_restJson1UpsertRowsResultMap = (
  output: any,
  context: __SerdeContext
): Record<string, UpsertRowsResult> => {
  return Object.entries(output).reduce((acc: Record<string, UpsertRowsResult>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1UpsertRowsResult(value, context);
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
