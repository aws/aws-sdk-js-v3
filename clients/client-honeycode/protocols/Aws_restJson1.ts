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
import { QueryTableRowsCommandInput, QueryTableRowsCommandOutput } from "../commands/QueryTableRowsCommand";
import {
  StartTableDataImportJobCommandInput,
  StartTableDataImportJobCommandOutput,
} from "../commands/StartTableDataImportJobCommand";
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1BatchCreateTableRowsCommand = async (
  input: BatchCreateTableRowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/workbooks/{workbookId}/tables/{tableId}/rows/batchcreate";
  if (input.workbookId !== undefined) {
    const labelValue: string = input.workbookId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workbookId.");
    }
    resolvedPath = resolvedPath.replace("{workbookId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workbookId.");
  }
  if (input.tableId !== undefined) {
    const labelValue: string = input.tableId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: tableId.");
    }
    resolvedPath = resolvedPath.replace("{tableId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: tableId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.clientRequestToken !== undefined &&
      input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }),
    ...(input.rowsToCreate !== undefined &&
      input.rowsToCreate !== null && {
        rowsToCreate: serializeAws_restJson1CreateRowDataList(input.rowsToCreate, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/workbooks/{workbookId}/tables/{tableId}/rows/batchdelete";
  if (input.workbookId !== undefined) {
    const labelValue: string = input.workbookId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workbookId.");
    }
    resolvedPath = resolvedPath.replace("{workbookId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workbookId.");
  }
  if (input.tableId !== undefined) {
    const labelValue: string = input.tableId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: tableId.");
    }
    resolvedPath = resolvedPath.replace("{tableId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: tableId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.clientRequestToken !== undefined &&
      input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }),
    ...(input.rowIds !== undefined &&
      input.rowIds !== null && { rowIds: serializeAws_restJson1RowIdList(input.rowIds, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/workbooks/{workbookId}/tables/{tableId}/rows/batchupdate";
  if (input.workbookId !== undefined) {
    const labelValue: string = input.workbookId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workbookId.");
    }
    resolvedPath = resolvedPath.replace("{workbookId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workbookId.");
  }
  if (input.tableId !== undefined) {
    const labelValue: string = input.tableId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: tableId.");
    }
    resolvedPath = resolvedPath.replace("{tableId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: tableId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.clientRequestToken !== undefined &&
      input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }),
    ...(input.rowsToUpdate !== undefined &&
      input.rowsToUpdate !== null && {
        rowsToUpdate: serializeAws_restJson1UpdateRowDataList(input.rowsToUpdate, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/workbooks/{workbookId}/tables/{tableId}/rows/batchupsert";
  if (input.workbookId !== undefined) {
    const labelValue: string = input.workbookId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workbookId.");
    }
    resolvedPath = resolvedPath.replace("{workbookId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workbookId.");
  }
  if (input.tableId !== undefined) {
    const labelValue: string = input.tableId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: tableId.");
    }
    resolvedPath = resolvedPath.replace("{tableId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: tableId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.clientRequestToken !== undefined &&
      input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }),
    ...(input.rowsToUpsert !== undefined &&
      input.rowsToUpsert !== null && {
        rowsToUpsert: serializeAws_restJson1UpsertRowDataList(input.rowsToUpsert, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/workbooks/{workbookId}/tables/{tableId}/import/{jobId}";
  if (input.workbookId !== undefined) {
    const labelValue: string = input.workbookId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workbookId.");
    }
    resolvedPath = resolvedPath.replace("{workbookId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workbookId.");
  }
  if (input.tableId !== undefined) {
    const labelValue: string = input.tableId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: tableId.");
    }
    resolvedPath = resolvedPath.replace("{tableId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: tableId.");
  }
  if (input.jobId !== undefined) {
    const labelValue: string = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/screendata";
  let body: any;
  body = JSON.stringify({
    ...(input.appId !== undefined && input.appId !== null && { appId: input.appId }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.screenId !== undefined && input.screenId !== null && { screenId: input.screenId }),
    ...(input.variables !== undefined &&
      input.variables !== null && { variables: serializeAws_restJson1VariableValueMap(input.variables, context) }),
    ...(input.workbookId !== undefined && input.workbookId !== null && { workbookId: input.workbookId }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/workbooks/{workbookId}/apps/{appId}/screens/{screenId}/automations/{screenAutomationId}";
  if (input.workbookId !== undefined) {
    const labelValue: string = input.workbookId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workbookId.");
    }
    resolvedPath = resolvedPath.replace("{workbookId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workbookId.");
  }
  if (input.appId !== undefined) {
    const labelValue: string = input.appId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: appId.");
    }
    resolvedPath = resolvedPath.replace("{appId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: appId.");
  }
  if (input.screenId !== undefined) {
    const labelValue: string = input.screenId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: screenId.");
    }
    resolvedPath = resolvedPath.replace("{screenId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: screenId.");
  }
  if (input.screenAutomationId !== undefined) {
    const labelValue: string = input.screenAutomationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: screenAutomationId.");
    }
    resolvedPath = resolvedPath.replace("{screenAutomationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: screenAutomationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.clientRequestToken !== undefined &&
      input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }),
    ...(input.rowId !== undefined && input.rowId !== null && { rowId: input.rowId }),
    ...(input.variables !== undefined &&
      input.variables !== null && { variables: serializeAws_restJson1VariableValueMap(input.variables, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/workbooks/{workbookId}/tables/{tableId}/columns";
  if (input.workbookId !== undefined) {
    const labelValue: string = input.workbookId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workbookId.");
    }
    resolvedPath = resolvedPath.replace("{workbookId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workbookId.");
  }
  if (input.tableId !== undefined) {
    const labelValue: string = input.tableId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: tableId.");
    }
    resolvedPath = resolvedPath.replace("{tableId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: tableId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/workbooks/{workbookId}/tables/{tableId}/rows/list";
  if (input.workbookId !== undefined) {
    const labelValue: string = input.workbookId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workbookId.");
    }
    resolvedPath = resolvedPath.replace("{workbookId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workbookId.");
  }
  if (input.tableId !== undefined) {
    const labelValue: string = input.tableId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: tableId.");
    }
    resolvedPath = resolvedPath.replace("{tableId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: tableId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.rowIds !== undefined &&
      input.rowIds !== null && { rowIds: serializeAws_restJson1RowIdList(input.rowIds, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/workbooks/{workbookId}/tables";
  if (input.workbookId !== undefined) {
    const labelValue: string = input.workbookId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workbookId.");
    }
    resolvedPath = resolvedPath.replace("{workbookId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workbookId.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1QueryTableRowsCommand = async (
  input: QueryTableRowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/workbooks/{workbookId}/tables/{tableId}/rows/query";
  if (input.workbookId !== undefined) {
    const labelValue: string = input.workbookId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workbookId.");
    }
    resolvedPath = resolvedPath.replace("{workbookId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workbookId.");
  }
  if (input.tableId !== undefined) {
    const labelValue: string = input.tableId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: tableId.");
    }
    resolvedPath = resolvedPath.replace("{tableId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: tableId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.filterFormula !== undefined &&
      input.filterFormula !== null && { filterFormula: serializeAws_restJson1Filter(input.filterFormula, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/workbooks/{workbookId}/tables/{destinationTableId}/import";
  if (input.workbookId !== undefined) {
    const labelValue: string = input.workbookId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: workbookId.");
    }
    resolvedPath = resolvedPath.replace("{workbookId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: workbookId.");
  }
  if (input.destinationTableId !== undefined) {
    const labelValue: string = input.destinationTableId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: destinationTableId.");
    }
    resolvedPath = resolvedPath.replace("{destinationTableId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: destinationTableId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.clientRequestToken !== undefined &&
      input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }),
    ...(input.dataFormat !== undefined && input.dataFormat !== null && { dataFormat: input.dataFormat }),
    ...(input.dataSource !== undefined &&
      input.dataSource !== null && { dataSource: serializeAws_restJson1ImportDataSource(input.dataSource, context) }),
    ...(input.importOptions !== undefined &&
      input.importOptions !== null && {
        importOptions: serializeAws_restJson1ImportOptions(input.importOptions, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const deserializeAws_restJson1BatchCreateTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchCreateTableRowsCommandError(output, context);
  }
  const contents: BatchCreateTableRowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    createdRows: undefined,
    failedBatchItems: undefined,
    workbookCursor: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.createdRows !== undefined && data.createdRows !== null) {
    contents.createdRows = deserializeAws_restJson1CreatedRowsMap(data.createdRows, context);
  }
  if (data.failedBatchItems !== undefined && data.failedBatchItems !== null) {
    contents.failedBatchItems = deserializeAws_restJson1FailedBatchItems(data.failedBatchItems, context);
  }
  if (data.workbookCursor !== undefined && data.workbookCursor !== null) {
    contents.workbookCursor = data.workbookCursor;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchCreateTableRowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateTableRowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      response = {
        ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.honeycode#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1BatchDeleteTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDeleteTableRowsCommandError(output, context);
  }
  const contents: BatchDeleteTableRowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    failedBatchItems: undefined,
    workbookCursor: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.failedBatchItems !== undefined && data.failedBatchItems !== null) {
    contents.failedBatchItems = deserializeAws_restJson1FailedBatchItems(data.failedBatchItems, context);
  }
  if (data.workbookCursor !== undefined && data.workbookCursor !== null) {
    contents.workbookCursor = data.workbookCursor;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchDeleteTableRowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteTableRowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      response = {
        ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1BatchUpdateTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchUpdateTableRowsCommandError(output, context);
  }
  const contents: BatchUpdateTableRowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    failedBatchItems: undefined,
    workbookCursor: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.failedBatchItems !== undefined && data.failedBatchItems !== null) {
    contents.failedBatchItems = deserializeAws_restJson1FailedBatchItems(data.failedBatchItems, context);
  }
  if (data.workbookCursor !== undefined && data.workbookCursor !== null) {
    contents.workbookCursor = data.workbookCursor;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchUpdateTableRowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateTableRowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      response = {
        ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1BatchUpsertTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpsertTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchUpsertTableRowsCommandError(output, context);
  }
  const contents: BatchUpsertTableRowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    failedBatchItems: undefined,
    rows: undefined,
    workbookCursor: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.failedBatchItems !== undefined && data.failedBatchItems !== null) {
    contents.failedBatchItems = deserializeAws_restJson1FailedBatchItems(data.failedBatchItems, context);
  }
  if (data.rows !== undefined && data.rows !== null) {
    contents.rows = deserializeAws_restJson1UpsertRowsResultMap(data.rows, context);
  }
  if (data.workbookCursor !== undefined && data.workbookCursor !== null) {
    contents.workbookCursor = data.workbookCursor;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchUpsertTableRowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpsertTableRowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      response = {
        ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.honeycode#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeTableDataImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableDataImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeTableDataImportJobCommandError(output, context);
  }
  const contents: DescribeTableDataImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    jobMetadata: undefined,
    jobStatus: undefined,
    message: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobMetadata !== undefined && data.jobMetadata !== null) {
    contents.jobMetadata = deserializeAws_restJson1TableDataImportJobMetadata(data.jobMetadata, context);
  }
  if (data.jobStatus !== undefined && data.jobStatus !== null) {
    contents.jobStatus = data.jobStatus;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeTableDataImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableDataImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetScreenDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScreenDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetScreenDataCommandError(output, context);
  }
  const contents: GetScreenDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    results: undefined,
    workbookCursor: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.results !== undefined && data.results !== null) {
    contents.results = deserializeAws_restJson1ResultSetMap(data.results, context);
  }
  if (data.workbookCursor !== undefined && data.workbookCursor !== null) {
    contents.workbookCursor = data.workbookCursor;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetScreenDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScreenDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      response = {
        ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1InvokeScreenAutomationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeScreenAutomationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1InvokeScreenAutomationCommandError(output, context);
  }
  const contents: InvokeScreenAutomationCommandOutput = {
    $metadata: deserializeMetadata(output),
    workbookCursor: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.workbookCursor !== undefined && data.workbookCursor !== null) {
    contents.workbookCursor = data.workbookCursor;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1InvokeScreenAutomationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeScreenAutomationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AutomationExecutionException":
    case "com.amazonaws.honeycode#AutomationExecutionException":
      response = {
        ...(await deserializeAws_restJson1AutomationExecutionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AutomationExecutionTimeoutException":
    case "com.amazonaws.honeycode#AutomationExecutionTimeoutException":
      response = {
        ...(await deserializeAws_restJson1AutomationExecutionTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      response = {
        ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListTableColumnsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableColumnsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTableColumnsCommandError(output, context);
  }
  const contents: ListTableColumnsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    tableColumns: undefined,
    workbookCursor: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.tableColumns !== undefined && data.tableColumns !== null) {
    contents.tableColumns = deserializeAws_restJson1TableColumns(data.tableColumns, context);
  }
  if (data.workbookCursor !== undefined && data.workbookCursor !== null) {
    contents.workbookCursor = data.workbookCursor;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTableColumnsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableColumnsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      response = {
        ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTableRowsCommandError(output, context);
  }
  const contents: ListTableRowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    columnIds: undefined,
    nextToken: undefined,
    rowIdsNotFound: undefined,
    rows: undefined,
    workbookCursor: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.columnIds !== undefined && data.columnIds !== null) {
    contents.columnIds = deserializeAws_restJson1ResourceIds(data.columnIds, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.rowIdsNotFound !== undefined && data.rowIdsNotFound !== null) {
    contents.rowIdsNotFound = deserializeAws_restJson1RowIdList(data.rowIdsNotFound, context);
  }
  if (data.rows !== undefined && data.rows !== null) {
    contents.rows = deserializeAws_restJson1TableRows(data.rows, context);
  }
  if (data.workbookCursor !== undefined && data.workbookCursor !== null) {
    contents.workbookCursor = data.workbookCursor;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTableRowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableRowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      response = {
        ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTablesCommandError(output, context);
  }
  const contents: ListTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    tables: undefined,
    workbookCursor: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.tables !== undefined && data.tables !== null) {
    contents.tables = deserializeAws_restJson1Tables(data.tables, context);
  }
  if (data.workbookCursor !== undefined && data.workbookCursor !== null) {
    contents.workbookCursor = data.workbookCursor;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTablesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      response = {
        ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1QueryTableRowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryTableRowsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1QueryTableRowsCommandError(output, context);
  }
  const contents: QueryTableRowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    columnIds: undefined,
    nextToken: undefined,
    rows: undefined,
    workbookCursor: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.columnIds !== undefined && data.columnIds !== null) {
    contents.columnIds = deserializeAws_restJson1ResourceIds(data.columnIds, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.rows !== undefined && data.rows !== null) {
    contents.rows = deserializeAws_restJson1TableRows(data.rows, context);
  }
  if (data.workbookCursor !== undefined && data.workbookCursor !== null) {
    contents.workbookCursor = data.workbookCursor;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1QueryTableRowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryTableRowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestTimeoutException":
    case "com.amazonaws.honeycode#RequestTimeoutException":
      response = {
        ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1StartTableDataImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTableDataImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartTableDataImportJobCommandError(output, context);
  }
  const contents: StartTableDataImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    jobId: undefined,
    jobStatus: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobId !== undefined && data.jobId !== null) {
    contents.jobId = data.jobId;
  }
  if (data.jobStatus !== undefined && data.jobStatus !== null) {
    contents.jobStatus = data.jobStatus;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartTableDataImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTableDataImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.honeycode#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.honeycode#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.honeycode#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.honeycode#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.honeycode#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.honeycode#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1AutomationExecutionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AutomationExecutionException> => {
  const contents: AutomationExecutionException = {
    name: "AutomationExecutionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1AutomationExecutionTimeoutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AutomationExecutionTimeoutException> => {
  const contents: AutomationExecutionTimeoutException = {
    name: "AutomationExecutionTimeoutException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1RequestTimeoutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestTimeoutException> => {
  const contents: RequestTimeoutException = {
    name: "RequestTimeoutException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1CellInput = (input: CellInput, context: __SerdeContext): any => {
  return {
    ...(input.fact !== undefined && input.fact !== null && { fact: input.fact }),
  };
};

const serializeAws_restJson1CreateRowData = (input: CreateRowData, context: __SerdeContext): any => {
  return {
    ...(input.batchItemId !== undefined && input.batchItemId !== null && { batchItemId: input.batchItemId }),
    ...(input.cellsToCreate !== undefined &&
      input.cellsToCreate !== null && {
        cellsToCreate: serializeAws_restJson1RowDataInput(input.cellsToCreate, context),
      }),
  };
};

const serializeAws_restJson1CreateRowDataList = (input: CreateRowData[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1CreateRowData(entry, context);
    });
};

const serializeAws_restJson1DelimitedTextImportOptions = (
  input: DelimitedTextImportOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.dataCharacterEncoding !== undefined &&
      input.dataCharacterEncoding !== null && { dataCharacterEncoding: input.dataCharacterEncoding }),
    ...(input.delimiter !== undefined && input.delimiter !== null && { delimiter: input.delimiter }),
    ...(input.hasHeaderRow !== undefined && input.hasHeaderRow !== null && { hasHeaderRow: input.hasHeaderRow }),
    ...(input.ignoreEmptyRows !== undefined &&
      input.ignoreEmptyRows !== null && { ignoreEmptyRows: input.ignoreEmptyRows }),
  };
};

const serializeAws_restJson1DestinationOptions = (input: DestinationOptions, context: __SerdeContext): any => {
  return {
    ...(input.columnMap !== undefined &&
      input.columnMap !== null && { columnMap: serializeAws_restJson1ImportColumnMap(input.columnMap, context) }),
  };
};

const serializeAws_restJson1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.contextRowId !== undefined && input.contextRowId !== null && { contextRowId: input.contextRowId }),
    ...(input.formula !== undefined && input.formula !== null && { formula: input.formula }),
  };
};

const serializeAws_restJson1ImportColumnMap = (
  input: { [key: string]: SourceDataColumnProperties },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: SourceDataColumnProperties }, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: serializeAws_restJson1SourceDataColumnProperties(value, context),
      };
    },
    {}
  );
};

const serializeAws_restJson1ImportDataSource = (input: ImportDataSource, context: __SerdeContext): any => {
  return {
    ...(input.dataSourceConfig !== undefined &&
      input.dataSourceConfig !== null && {
        dataSourceConfig: serializeAws_restJson1ImportDataSourceConfig(input.dataSourceConfig, context),
      }),
  };
};

const serializeAws_restJson1ImportDataSourceConfig = (input: ImportDataSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.dataSourceUrl !== undefined && input.dataSourceUrl !== null && { dataSourceUrl: input.dataSourceUrl }),
  };
};

const serializeAws_restJson1ImportOptions = (input: ImportOptions, context: __SerdeContext): any => {
  return {
    ...(input.delimitedTextOptions !== undefined &&
      input.delimitedTextOptions !== null && {
        delimitedTextOptions: serializeAws_restJson1DelimitedTextImportOptions(input.delimitedTextOptions, context),
      }),
    ...(input.destinationOptions !== undefined &&
      input.destinationOptions !== null && {
        destinationOptions: serializeAws_restJson1DestinationOptions(input.destinationOptions, context),
      }),
  };
};

const serializeAws_restJson1RowDataInput = (input: { [key: string]: CellInput }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: CellInput }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1CellInput(value, context),
    };
  }, {});
};

const serializeAws_restJson1RowIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SourceDataColumnProperties = (
  input: SourceDataColumnProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.columnIndex !== undefined && input.columnIndex !== null && { columnIndex: input.columnIndex }),
  };
};

const serializeAws_restJson1UpdateRowData = (input: UpdateRowData, context: __SerdeContext): any => {
  return {
    ...(input.cellsToUpdate !== undefined &&
      input.cellsToUpdate !== null && {
        cellsToUpdate: serializeAws_restJson1RowDataInput(input.cellsToUpdate, context),
      }),
    ...(input.rowId !== undefined && input.rowId !== null && { rowId: input.rowId }),
  };
};

const serializeAws_restJson1UpdateRowDataList = (input: UpdateRowData[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1UpdateRowData(entry, context);
    });
};

const serializeAws_restJson1UpsertRowData = (input: UpsertRowData, context: __SerdeContext): any => {
  return {
    ...(input.batchItemId !== undefined && input.batchItemId !== null && { batchItemId: input.batchItemId }),
    ...(input.cellsToUpdate !== undefined &&
      input.cellsToUpdate !== null && {
        cellsToUpdate: serializeAws_restJson1RowDataInput(input.cellsToUpdate, context),
      }),
    ...(input.filter !== undefined &&
      input.filter !== null && { filter: serializeAws_restJson1Filter(input.filter, context) }),
  };
};

const serializeAws_restJson1UpsertRowDataList = (input: UpsertRowData[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1UpsertRowData(entry, context);
    });
};

const serializeAws_restJson1VariableValue = (input: VariableValue, context: __SerdeContext): any => {
  return {
    ...(input.rawValue !== undefined && input.rawValue !== null && { rawValue: input.rawValue }),
  };
};

const serializeAws_restJson1VariableValueMap = (
  input: { [key: string]: VariableValue },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: VariableValue }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1VariableValue(value, context),
    };
  }, {});
};

const deserializeAws_restJson1Cell = (output: any, context: __SerdeContext): Cell => {
  return {
    format: output.format !== undefined && output.format !== null ? output.format : undefined,
    formattedValue:
      output.formattedValue !== undefined && output.formattedValue !== null ? output.formattedValue : undefined,
    formula: output.formula !== undefined && output.formula !== null ? output.formula : undefined,
    rawValue: output.rawValue !== undefined && output.rawValue !== null ? output.rawValue : undefined,
  } as any;
};

const deserializeAws_restJson1Cells = (output: any, context: __SerdeContext): Cell[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Cell(entry, context);
    });
};

const deserializeAws_restJson1ColumnMetadata = (output: any, context: __SerdeContext): ColumnMetadata => {
  return {
    format: output.format !== undefined && output.format !== null ? output.format : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_restJson1CreatedRowsMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1DataItem = (output: any, context: __SerdeContext): DataItem => {
  return {
    formattedValue:
      output.formattedValue !== undefined && output.formattedValue !== null ? output.formattedValue : undefined,
    overrideFormat:
      output.overrideFormat !== undefined && output.overrideFormat !== null ? output.overrideFormat : undefined,
    rawValue: output.rawValue !== undefined && output.rawValue !== null ? output.rawValue : undefined,
  } as any;
};

const deserializeAws_restJson1DataItems = (output: any, context: __SerdeContext): DataItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataItem(entry, context);
    });
};

const deserializeAws_restJson1DelimitedTextImportOptions = (
  output: any,
  context: __SerdeContext
): DelimitedTextImportOptions => {
  return {
    dataCharacterEncoding:
      output.dataCharacterEncoding !== undefined && output.dataCharacterEncoding !== null
        ? output.dataCharacterEncoding
        : undefined,
    delimiter: output.delimiter !== undefined && output.delimiter !== null ? output.delimiter : undefined,
    hasHeaderRow: output.hasHeaderRow !== undefined && output.hasHeaderRow !== null ? output.hasHeaderRow : undefined,
    ignoreEmptyRows:
      output.ignoreEmptyRows !== undefined && output.ignoreEmptyRows !== null ? output.ignoreEmptyRows : undefined,
  } as any;
};

const deserializeAws_restJson1DestinationOptions = (output: any, context: __SerdeContext): DestinationOptions => {
  return {
    columnMap:
      output.columnMap !== undefined && output.columnMap !== null
        ? deserializeAws_restJson1ImportColumnMap(output.columnMap, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FailedBatchItem = (output: any, context: __SerdeContext): FailedBatchItem => {
  return {
    errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
  } as any;
};

const deserializeAws_restJson1FailedBatchItems = (output: any, context: __SerdeContext): FailedBatchItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FailedBatchItem(entry, context);
    });
};

const deserializeAws_restJson1ImportColumnMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: SourceDataColumnProperties } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: SourceDataColumnProperties }, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_restJson1SourceDataColumnProperties(value, context),
      };
    },
    {}
  );
};

const deserializeAws_restJson1ImportDataSource = (output: any, context: __SerdeContext): ImportDataSource => {
  return {
    dataSourceConfig:
      output.dataSourceConfig !== undefined && output.dataSourceConfig !== null
        ? deserializeAws_restJson1ImportDataSourceConfig(output.dataSourceConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ImportDataSourceConfig = (
  output: any,
  context: __SerdeContext
): ImportDataSourceConfig => {
  return {
    dataSourceUrl:
      output.dataSourceUrl !== undefined && output.dataSourceUrl !== null ? output.dataSourceUrl : undefined,
  } as any;
};

const deserializeAws_restJson1ImportJobSubmitter = (output: any, context: __SerdeContext): ImportJobSubmitter => {
  return {
    email: output.email !== undefined && output.email !== null ? output.email : undefined,
    userArn: output.userArn !== undefined && output.userArn !== null ? output.userArn : undefined,
  } as any;
};

const deserializeAws_restJson1ImportOptions = (output: any, context: __SerdeContext): ImportOptions => {
  return {
    delimitedTextOptions:
      output.delimitedTextOptions !== undefined && output.delimitedTextOptions !== null
        ? deserializeAws_restJson1DelimitedTextImportOptions(output.delimitedTextOptions, context)
        : undefined,
    destinationOptions:
      output.destinationOptions !== undefined && output.destinationOptions !== null
        ? deserializeAws_restJson1DestinationOptions(output.destinationOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1ResultHeader = (output: any, context: __SerdeContext): ColumnMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnMetadata(entry, context);
    });
};

const deserializeAws_restJson1ResultRow = (output: any, context: __SerdeContext): ResultRow => {
  return {
    dataItems:
      output.dataItems !== undefined && output.dataItems !== null
        ? deserializeAws_restJson1DataItems(output.dataItems, context)
        : undefined,
    rowId: output.rowId !== undefined && output.rowId !== null ? output.rowId : undefined,
  } as any;
};

const deserializeAws_restJson1ResultRows = (output: any, context: __SerdeContext): ResultRow[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResultRow(entry, context);
    });
};

const deserializeAws_restJson1ResultSet = (output: any, context: __SerdeContext): ResultSet => {
  return {
    headers:
      output.headers !== undefined && output.headers !== null
        ? deserializeAws_restJson1ResultHeader(output.headers, context)
        : undefined,
    rows:
      output.rows !== undefined && output.rows !== null
        ? deserializeAws_restJson1ResultRows(output.rows, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResultSetMap = (output: any, context: __SerdeContext): { [key: string]: ResultSet } => {
  return Object.entries(output).reduce((acc: { [key: string]: ResultSet }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ResultSet(value, context),
    };
  }, {});
};

const deserializeAws_restJson1RowIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1SourceDataColumnProperties = (
  output: any,
  context: __SerdeContext
): SourceDataColumnProperties => {
  return {
    columnIndex: output.columnIndex !== undefined && output.columnIndex !== null ? output.columnIndex : undefined,
  } as any;
};

const deserializeAws_restJson1Table = (output: any, context: __SerdeContext): Table => {
  return {
    tableId: output.tableId !== undefined && output.tableId !== null ? output.tableId : undefined,
    tableName: output.tableName !== undefined && output.tableName !== null ? output.tableName : undefined,
  } as any;
};

const deserializeAws_restJson1TableColumn = (output: any, context: __SerdeContext): TableColumn => {
  return {
    format: output.format !== undefined && output.format !== null ? output.format : undefined,
    tableColumnId:
      output.tableColumnId !== undefined && output.tableColumnId !== null ? output.tableColumnId : undefined,
    tableColumnName:
      output.tableColumnName !== undefined && output.tableColumnName !== null ? output.tableColumnName : undefined,
  } as any;
};

const deserializeAws_restJson1TableColumns = (output: any, context: __SerdeContext): TableColumn[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TableColumn(entry, context);
    });
};

const deserializeAws_restJson1TableDataImportJobMetadata = (
  output: any,
  context: __SerdeContext
): TableDataImportJobMetadata => {
  return {
    dataSource:
      output.dataSource !== undefined && output.dataSource !== null
        ? deserializeAws_restJson1ImportDataSource(output.dataSource, context)
        : undefined,
    importOptions:
      output.importOptions !== undefined && output.importOptions !== null
        ? deserializeAws_restJson1ImportOptions(output.importOptions, context)
        : undefined,
    submitTime:
      output.submitTime !== undefined && output.submitTime !== null
        ? new Date(Math.round(output.submitTime * 1000))
        : undefined,
    submitter:
      output.submitter !== undefined && output.submitter !== null
        ? deserializeAws_restJson1ImportJobSubmitter(output.submitter, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TableRow = (output: any, context: __SerdeContext): TableRow => {
  return {
    cells:
      output.cells !== undefined && output.cells !== null
        ? deserializeAws_restJson1Cells(output.cells, context)
        : undefined,
    rowId: output.rowId !== undefined && output.rowId !== null ? output.rowId : undefined,
  } as any;
};

const deserializeAws_restJson1TableRows = (output: any, context: __SerdeContext): TableRow[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TableRow(entry, context);
    });
};

const deserializeAws_restJson1Tables = (output: any, context: __SerdeContext): Table[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Table(entry, context);
    });
};

const deserializeAws_restJson1UpsertRowsResult = (output: any, context: __SerdeContext): UpsertRowsResult => {
  return {
    rowIds:
      output.rowIds !== undefined && output.rowIds !== null
        ? deserializeAws_restJson1RowIdList(output.rowIds, context)
        : undefined,
    upsertAction: output.upsertAction !== undefined && output.upsertAction !== null ? output.upsertAction : undefined,
  } as any;
};

const deserializeAws_restJson1UpsertRowsResultMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: UpsertRowsResult } => {
  return Object.entries(output).reduce((acc: { [key: string]: UpsertRowsResult }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1UpsertRowsResult(value, context),
    };
  }, {});
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
