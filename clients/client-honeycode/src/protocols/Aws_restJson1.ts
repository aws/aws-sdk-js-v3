// smithy-typescript generated code
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  CellInput,
  CreateRowData,
  DelimitedTextImportOptions,
  DestinationOptions,
  Filter,
  ImportDataSource,
  ImportDataSourceConfig,
  ImportOptions,
  InternalServerException,
  RequestTimeoutException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  SourceDataColumnProperties,
  TableDataImportJobMetadata,
  ThrottlingException,
  UpdateRowData,
  UpsertRowData,
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
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workbooks/{workbookId}/tables/{tableId}/rows/batchcreate");
  b.p("workbookId", () => input.workbookId!, "{workbookId}", false);
  b.p("tableId", () => input.tableId!, "{tableId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [],
      rowsToCreate: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchDeleteTableRowsCommand
 */
export const se_BatchDeleteTableRowsCommand = async (
  input: BatchDeleteTableRowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workbooks/{workbookId}/tables/{tableId}/rows/batchdelete");
  b.p("workbookId", () => input.workbookId!, "{workbookId}", false);
  b.p("tableId", () => input.tableId!, "{tableId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [],
      rowIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchUpdateTableRowsCommand
 */
export const se_BatchUpdateTableRowsCommand = async (
  input: BatchUpdateTableRowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workbooks/{workbookId}/tables/{tableId}/rows/batchupdate");
  b.p("workbookId", () => input.workbookId!, "{workbookId}", false);
  b.p("tableId", () => input.tableId!, "{tableId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [],
      rowsToUpdate: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchUpsertTableRowsCommand
 */
export const se_BatchUpsertTableRowsCommand = async (
  input: BatchUpsertTableRowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workbooks/{workbookId}/tables/{tableId}/rows/batchupsert");
  b.p("workbookId", () => input.workbookId!, "{workbookId}", false);
  b.p("tableId", () => input.tableId!, "{tableId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [],
      rowsToUpsert: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeTableDataImportJobCommand
 */
export const se_DescribeTableDataImportJobCommand = async (
  input: DescribeTableDataImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workbooks/{workbookId}/tables/{tableId}/import/{jobId}");
  b.p("workbookId", () => input.workbookId!, "{workbookId}", false);
  b.p("tableId", () => input.tableId!, "{tableId}", false);
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetScreenDataCommand
 */
export const se_GetScreenDataCommand = async (
  input: GetScreenDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/screendata");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appId: [],
      maxResults: [],
      nextToken: [],
      screenId: [],
      variables: (_) => _json(_),
      workbookId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InvokeScreenAutomationCommand
 */
export const se_InvokeScreenAutomationCommand = async (
  input: InvokeScreenAutomationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workbooks/{workbookId}/apps/{appId}/screens/{screenId}/automations/{screenAutomationId}");
  b.p("workbookId", () => input.workbookId!, "{workbookId}", false);
  b.p("appId", () => input.appId!, "{appId}", false);
  b.p("screenId", () => input.screenId!, "{screenId}", false);
  b.p("screenAutomationId", () => input.screenAutomationId!, "{screenAutomationId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [],
      rowId: [],
      variables: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTableColumnsCommand
 */
export const se_ListTableColumnsCommand = async (
  input: ListTableColumnsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workbooks/{workbookId}/tables/{tableId}/columns");
  b.p("workbookId", () => input.workbookId!, "{workbookId}", false);
  b.p("tableId", () => input.tableId!, "{tableId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTableRowsCommand
 */
export const se_ListTableRowsCommand = async (
  input: ListTableRowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workbooks/{workbookId}/tables/{tableId}/rows/list");
  b.p("workbookId", () => input.workbookId!, "{workbookId}", false);
  b.p("tableId", () => input.tableId!, "{tableId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      rowIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTablesCommand
 */
export const se_ListTablesCommand = async (
  input: ListTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workbooks/{workbookId}/tables");
  b.p("workbookId", () => input.workbookId!, "{workbookId}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1QueryTableRowsCommand
 */
export const se_QueryTableRowsCommand = async (
  input: QueryTableRowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workbooks/{workbookId}/tables/{tableId}/rows/query");
  b.p("workbookId", () => input.workbookId!, "{workbookId}", false);
  b.p("tableId", () => input.tableId!, "{tableId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      filterFormula: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartTableDataImportJobCommand
 */
export const se_StartTableDataImportJobCommand = async (
  input: StartTableDataImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workbooks/{workbookId}/tables/{destinationTableId}/import");
  b.p("workbookId", () => input.workbookId!, "{workbookId}", false);
  b.p("destinationTableId", () => input.destinationTableId!, "{destinationTableId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [],
      dataFormat: [],
      dataSource: (_) => _json(_),
      importOptions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input[_tK]! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchCreateTableRowsCommand
 */
export const de_BatchCreateTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdRows: _json,
    failedBatchItems: _json,
    workbookCursor: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchDeleteTableRowsCommand
 */
export const de_BatchDeleteTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failedBatchItems: _json,
    workbookCursor: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpdateTableRowsCommand
 */
export const de_BatchUpdateTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failedBatchItems: _json,
    workbookCursor: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpsertTableRowsCommand
 */
export const de_BatchUpsertTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpsertTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failedBatchItems: _json,
    rows: _json,
    workbookCursor: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTableDataImportJobCommand
 */
export const de_DescribeTableDataImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableDataImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errorCode: __expectString,
    jobMetadata: (_) => de_TableDataImportJobMetadata(_, context),
    jobStatus: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetScreenDataCommand
 */
export const de_GetScreenDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScreenDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    results: _json,
    workbookCursor: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1InvokeScreenAutomationCommand
 */
export const de_InvokeScreenAutomationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeScreenAutomationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    workbookCursor: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTableColumnsCommand
 */
export const de_ListTableColumnsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableColumnsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    tableColumns: _json,
    workbookCursor: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTableRowsCommand
 */
export const de_ListTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    columnIds: _json,
    nextToken: __expectString,
    rowIdsNotFound: _json,
    rows: _json,
    workbookCursor: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTablesCommand
 */
export const de_ListTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    tables: _json,
    workbookCursor: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1QueryTableRowsCommand
 */
export const de_QueryTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    columnIds: _json,
    nextToken: __expectString,
    rows: _json,
    workbookCursor: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartTableDataImportJobCommand
 */
export const de_StartTableDataImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTableDataImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobId: __expectString,
    jobStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "AutomationExecutionException":
    case "com.amazonaws.honeycode#AutomationExecutionException":
      throw await de_AutomationExecutionExceptionRes(parsedOutput, context);
    case "AutomationExecutionTimeoutException":
    case "com.amazonaws.honeycode#AutomationExecutionTimeoutException":
      throw await de_AutomationExecutionTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_CellInput omitted.

// se_CreateRowData omitted.

// se_CreateRowDataList omitted.

// se_DelimitedTextImportOptions omitted.

// se_DestinationOptions omitted.

// se_FactList omitted.

// se_Filter omitted.

// se_ImportColumnMap omitted.

// se_ImportDataSource omitted.

// se_ImportDataSourceConfig omitted.

// se_ImportOptions omitted.

// se_RowDataInput omitted.

// se_RowIdList omitted.

// se_SourceDataColumnProperties omitted.

// se_TagsMap omitted.

// se_UpdateRowData omitted.

// se_UpdateRowDataList omitted.

// se_UpsertRowData omitted.

// se_UpsertRowDataList omitted.

// se_VariableValue omitted.

// se_VariableValueMap omitted.

// de_Cell omitted.

// de_Cells omitted.

// de_ColumnMetadata omitted.

// de_CreatedRowsMap omitted.

// de_DataItem omitted.

// de_DataItems omitted.

// de_DelimitedTextImportOptions omitted.

// de_DestinationOptions omitted.

// de_FailedBatchItem omitted.

// de_FailedBatchItems omitted.

// de_FormattedValuesList omitted.

// de_ImportColumnMap omitted.

// de_ImportDataSource omitted.

// de_ImportDataSourceConfig omitted.

// de_ImportJobSubmitter omitted.

// de_ImportOptions omitted.

// de_ResourceIds omitted.

// de_ResultHeader omitted.

// de_ResultRow omitted.

// de_ResultRows omitted.

// de_ResultSet omitted.

// de_ResultSetMap omitted.

// de_RowIdList omitted.

// de_SourceDataColumnProperties omitted.

// de_Table omitted.

// de_TableColumn omitted.

// de_TableColumns omitted.

/**
 * deserializeAws_restJson1TableDataImportJobMetadata
 */
const de_TableDataImportJobMetadata = (output: any, context: __SerdeContext): TableDataImportJobMetadata => {
  return take(output, {
    dataSource: _json,
    importOptions: _json,
    submitTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    submitter: _json,
  }) as any;
};

// de_TableRow omitted.

// de_TableRows omitted.

// de_Tables omitted.

// de_TagsMap omitted.

// de_UpsertRowsResult omitted.

// de_UpsertRowsResultMap omitted.

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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const _mR = "maxResults";
const _nT = "nextToken";
const _tK = "tagKeys";

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
