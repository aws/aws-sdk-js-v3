import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateChangesetCommandInput, CreateChangesetCommandOutput } from "../commands/CreateChangesetCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "../commands/CreateDatasetCommand";
import { CreateDataViewCommandInput, CreateDataViewCommandOutput } from "../commands/CreateDataViewCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "../commands/DeleteDatasetCommand";
import { GetChangesetCommandInput, GetChangesetCommandOutput } from "../commands/GetChangesetCommand";
import { GetDatasetCommandInput, GetDatasetCommandOutput } from "../commands/GetDatasetCommand";
import { GetDataViewCommandInput, GetDataViewCommandOutput } from "../commands/GetDataViewCommand";
import {
  GetProgrammaticAccessCredentialsCommandInput,
  GetProgrammaticAccessCredentialsCommandOutput,
} from "../commands/GetProgrammaticAccessCredentialsCommand";
import { GetWorkingLocationCommandInput, GetWorkingLocationCommandOutput } from "../commands/GetWorkingLocationCommand";
import { ListChangesetsCommandInput, ListChangesetsCommandOutput } from "../commands/ListChangesetsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "../commands/ListDatasetsCommand";
import { ListDataViewsCommandInput, ListDataViewsCommandOutput } from "../commands/ListDataViewsCommand";
import { UpdateChangesetCommandInput, UpdateChangesetCommandOutput } from "../commands/UpdateChangesetCommand";
import { UpdateDatasetCommandInput, UpdateDatasetCommandOutput } from "../commands/UpdateDatasetCommand";
import { FinspaceDataServiceException as __BaseException } from "../models/FinspaceDataServiceException";
import {
  AccessDeniedException,
  ChangesetErrorInfo,
  ChangesetSummary,
  ColumnDefinition,
  ConflictException,
  Credentials,
  Dataset,
  DatasetOwnerInfo,
  DataViewDestinationTypeParams,
  DataViewErrorInfo,
  DataViewSummary,
  InternalServerException,
  LimitExceededException,
  PermissionGroupParams,
  ResourceNotFoundException,
  ResourcePermission,
  SchemaDefinition,
  SchemaUnion,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

export const serializeAws_restJson1CreateChangesetCommand = async (
  input: CreateChangesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{datasetId}/changesetsv2";
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.changeType !== undefined && input.changeType !== null && { changeType: input.changeType }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.formatParams !== undefined &&
      input.formatParams !== null && { formatParams: serializeAws_restJson1FormatParams(input.formatParams, context) }),
    ...(input.sourceParams !== undefined &&
      input.sourceParams !== null && { sourceParams: serializeAws_restJson1SourceParams(input.sourceParams, context) }),
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

export const serializeAws_restJson1CreateDatasetCommand = async (
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasetsv2";
  let body: any;
  body = JSON.stringify({
    ...(input.alias !== undefined && input.alias !== null && { alias: input.alias }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.datasetDescription !== undefined &&
      input.datasetDescription !== null && { datasetDescription: input.datasetDescription }),
    ...(input.datasetTitle !== undefined && input.datasetTitle !== null && { datasetTitle: input.datasetTitle }),
    ...(input.kind !== undefined && input.kind !== null && { kind: input.kind }),
    ...(input.ownerInfo !== undefined &&
      input.ownerInfo !== null && { ownerInfo: serializeAws_restJson1DatasetOwnerInfo(input.ownerInfo, context) }),
    ...(input.permissionGroupParams !== undefined &&
      input.permissionGroupParams !== null && {
        permissionGroupParams: serializeAws_restJson1PermissionGroupParams(input.permissionGroupParams, context),
      }),
    ...(input.schemaDefinition !== undefined &&
      input.schemaDefinition !== null && {
        schemaDefinition: serializeAws_restJson1SchemaUnion(input.schemaDefinition, context),
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

export const serializeAws_restJson1CreateDataViewCommand = async (
  input: CreateDataViewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{datasetId}/dataviewsv2";
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.asOfTimestamp !== undefined && input.asOfTimestamp !== null && { asOfTimestamp: input.asOfTimestamp }),
    ...(input.autoUpdate !== undefined && input.autoUpdate !== null && { autoUpdate: input.autoUpdate }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.destinationTypeParams !== undefined &&
      input.destinationTypeParams !== null && {
        destinationTypeParams: serializeAws_restJson1DataViewDestinationTypeParams(
          input.destinationTypeParams,
          context
        ),
      }),
    ...(input.partitionColumns !== undefined &&
      input.partitionColumns !== null && {
        partitionColumns: serializeAws_restJson1PartitionColumnList(input.partitionColumns, context),
      }),
    ...(input.sortColumns !== undefined &&
      input.sortColumns !== null && { sortColumns: serializeAws_restJson1SortColumnList(input.sortColumns, context) }),
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

export const serializeAws_restJson1DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasetsv2/{datasetId}";
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
  const query: any = {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
  };
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

export const serializeAws_restJson1GetChangesetCommand = async (
  input: GetChangesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/datasets/{datasetId}/changesetsv2/{changesetId}";
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
  if (input.changesetId !== undefined) {
    const labelValue: string = input.changesetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: changesetId.");
    }
    resolvedPath = resolvedPath.replace("{changesetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: changesetId.");
  }
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

export const serializeAws_restJson1GetDatasetCommand = async (
  input: GetDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasetsv2/{datasetId}";
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
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

export const serializeAws_restJson1GetDataViewCommand = async (
  input: GetDataViewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/datasets/{datasetId}/dataviewsv2/{dataViewId}";
  if (input.dataViewId !== undefined) {
    const labelValue: string = input.dataViewId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: dataViewId.");
    }
    resolvedPath = resolvedPath.replace("{dataViewId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: dataViewId.");
  }
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
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

export const serializeAws_restJson1GetProgrammaticAccessCredentialsCommand = async (
  input: GetProgrammaticAccessCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/credentials/programmatic";
  const query: any = {
    ...(input.durationInMinutes !== undefined && { durationInMinutes: input.durationInMinutes.toString() }),
    ...(input.environmentId !== undefined && { environmentId: input.environmentId }),
  };
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

export const serializeAws_restJson1GetWorkingLocationCommand = async (
  input: GetWorkingLocationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/workingLocationV1";
  let body: any;
  body = JSON.stringify({
    ...(input.locationType !== undefined && input.locationType !== null && { locationType: input.locationType }),
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

export const serializeAws_restJson1ListChangesetsCommand = async (
  input: ListChangesetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{datasetId}/changesetsv2";
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  };
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

export const serializeAws_restJson1ListDatasetsCommand = async (
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasetsv2";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListDataViewsCommand = async (
  input: ListDataViewsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasets/{datasetId}/dataviewsv2";
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1UpdateChangesetCommand = async (
  input: UpdateChangesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/datasets/{datasetId}/changesetsv2/{changesetId}";
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
  if (input.changesetId !== undefined) {
    const labelValue: string = input.changesetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: changesetId.");
    }
    resolvedPath = resolvedPath.replace("{changesetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: changesetId.");
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.formatParams !== undefined &&
      input.formatParams !== null && { formatParams: serializeAws_restJson1FormatParams(input.formatParams, context) }),
    ...(input.sourceParams !== undefined &&
      input.sourceParams !== null && { sourceParams: serializeAws_restJson1SourceParams(input.sourceParams, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateDatasetCommand = async (
  input: UpdateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/datasetsv2/{datasetId}";
  if (input.datasetId !== undefined) {
    const labelValue: string = input.datasetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: datasetId.");
    }
    resolvedPath = resolvedPath.replace("{datasetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: datasetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.alias !== undefined && input.alias !== null && { alias: input.alias }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.datasetDescription !== undefined &&
      input.datasetDescription !== null && { datasetDescription: input.datasetDescription }),
    ...(input.datasetTitle !== undefined && input.datasetTitle !== null && { datasetTitle: input.datasetTitle }),
    ...(input.kind !== undefined && input.kind !== null && { kind: input.kind }),
    ...(input.schemaDefinition !== undefined &&
      input.schemaDefinition !== null && {
        schemaDefinition: serializeAws_restJson1SchemaUnion(input.schemaDefinition, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1CreateChangesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChangesetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateChangesetCommandError(output, context);
  }
  const contents: CreateChangesetCommandOutput = {
    $metadata: deserializeMetadata(output),
    changesetId: undefined,
    datasetId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.changesetId !== undefined && data.changesetId !== null) {
    contents.changesetId = __expectString(data.changesetId);
  }
  if (data.datasetId !== undefined && data.datasetId !== null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateChangesetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChangesetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspacedata#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDatasetCommandError(output, context);
  }
  const contents: CreateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    datasetId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datasetId !== undefined && data.datasetId !== null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspacedata#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateDataViewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataViewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDataViewCommandError(output, context);
  }
  const contents: CreateDataViewCommandOutput = {
    $metadata: deserializeMetadata(output),
    dataViewId: undefined,
    datasetId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataViewId !== undefined && data.dataViewId !== null) {
    contents.dataViewId = __expectString(data.dataViewId);
  }
  if (data.datasetId !== undefined && data.datasetId !== null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDataViewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataViewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspacedata#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDatasetCommandError(output, context);
  }
  const contents: DeleteDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    datasetId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datasetId !== undefined && data.datasetId !== null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspacedata#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetChangesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangesetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetChangesetCommandError(output, context);
  }
  const contents: GetChangesetCommandOutput = {
    $metadata: deserializeMetadata(output),
    activeFromTimestamp: undefined,
    activeUntilTimestamp: undefined,
    changeType: undefined,
    changesetArn: undefined,
    changesetId: undefined,
    createTime: undefined,
    datasetId: undefined,
    errorInfo: undefined,
    formatParams: undefined,
    sourceParams: undefined,
    status: undefined,
    updatedByChangesetId: undefined,
    updatesChangesetId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.activeFromTimestamp !== undefined && data.activeFromTimestamp !== null) {
    contents.activeFromTimestamp = __expectLong(data.activeFromTimestamp);
  }
  if (data.activeUntilTimestamp !== undefined && data.activeUntilTimestamp !== null) {
    contents.activeUntilTimestamp = __expectLong(data.activeUntilTimestamp);
  }
  if (data.changeType !== undefined && data.changeType !== null) {
    contents.changeType = __expectString(data.changeType);
  }
  if (data.changesetArn !== undefined && data.changesetArn !== null) {
    contents.changesetArn = __expectString(data.changesetArn);
  }
  if (data.changesetId !== undefined && data.changesetId !== null) {
    contents.changesetId = __expectString(data.changesetId);
  }
  if (data.createTime !== undefined && data.createTime !== null) {
    contents.createTime = __expectLong(data.createTime);
  }
  if (data.datasetId !== undefined && data.datasetId !== null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  if (data.errorInfo !== undefined && data.errorInfo !== null) {
    contents.errorInfo = deserializeAws_restJson1ChangesetErrorInfo(data.errorInfo, context);
  }
  if (data.formatParams !== undefined && data.formatParams !== null) {
    contents.formatParams = deserializeAws_restJson1FormatParams(data.formatParams, context);
  }
  if (data.sourceParams !== undefined && data.sourceParams !== null) {
    contents.sourceParams = deserializeAws_restJson1SourceParams(data.sourceParams, context);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  if (data.updatedByChangesetId !== undefined && data.updatedByChangesetId !== null) {
    contents.updatedByChangesetId = __expectString(data.updatedByChangesetId);
  }
  if (data.updatesChangesetId !== undefined && data.updatesChangesetId !== null) {
    contents.updatesChangesetId = __expectString(data.updatesChangesetId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetChangesetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChangesetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDatasetCommandError(output, context);
  }
  const contents: GetDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    alias: undefined,
    createTime: undefined,
    datasetArn: undefined,
    datasetDescription: undefined,
    datasetId: undefined,
    datasetTitle: undefined,
    kind: undefined,
    lastModifiedTime: undefined,
    schemaDefinition: undefined,
    status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alias !== undefined && data.alias !== null) {
    contents.alias = __expectString(data.alias);
  }
  if (data.createTime !== undefined && data.createTime !== null) {
    contents.createTime = __expectLong(data.createTime);
  }
  if (data.datasetArn !== undefined && data.datasetArn !== null) {
    contents.datasetArn = __expectString(data.datasetArn);
  }
  if (data.datasetDescription !== undefined && data.datasetDescription !== null) {
    contents.datasetDescription = __expectString(data.datasetDescription);
  }
  if (data.datasetId !== undefined && data.datasetId !== null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  if (data.datasetTitle !== undefined && data.datasetTitle !== null) {
    contents.datasetTitle = __expectString(data.datasetTitle);
  }
  if (data.kind !== undefined && data.kind !== null) {
    contents.kind = __expectString(data.kind);
  }
  if (data.lastModifiedTime !== undefined && data.lastModifiedTime !== null) {
    contents.lastModifiedTime = __expectLong(data.lastModifiedTime);
  }
  if (data.schemaDefinition !== undefined && data.schemaDefinition !== null) {
    contents.schemaDefinition = deserializeAws_restJson1SchemaUnion(data.schemaDefinition, context);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetDataViewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataViewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDataViewCommandError(output, context);
  }
  const contents: GetDataViewCommandOutput = {
    $metadata: deserializeMetadata(output),
    asOfTimestamp: undefined,
    autoUpdate: undefined,
    createTime: undefined,
    dataViewArn: undefined,
    dataViewId: undefined,
    datasetId: undefined,
    destinationTypeParams: undefined,
    errorInfo: undefined,
    lastModifiedTime: undefined,
    partitionColumns: undefined,
    sortColumns: undefined,
    status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.asOfTimestamp !== undefined && data.asOfTimestamp !== null) {
    contents.asOfTimestamp = __expectLong(data.asOfTimestamp);
  }
  if (data.autoUpdate !== undefined && data.autoUpdate !== null) {
    contents.autoUpdate = __expectBoolean(data.autoUpdate);
  }
  if (data.createTime !== undefined && data.createTime !== null) {
    contents.createTime = __expectLong(data.createTime);
  }
  if (data.dataViewArn !== undefined && data.dataViewArn !== null) {
    contents.dataViewArn = __expectString(data.dataViewArn);
  }
  if (data.dataViewId !== undefined && data.dataViewId !== null) {
    contents.dataViewId = __expectString(data.dataViewId);
  }
  if (data.datasetId !== undefined && data.datasetId !== null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  if (data.destinationTypeParams !== undefined && data.destinationTypeParams !== null) {
    contents.destinationTypeParams = deserializeAws_restJson1DataViewDestinationTypeParams(
      data.destinationTypeParams,
      context
    );
  }
  if (data.errorInfo !== undefined && data.errorInfo !== null) {
    contents.errorInfo = deserializeAws_restJson1DataViewErrorInfo(data.errorInfo, context);
  }
  if (data.lastModifiedTime !== undefined && data.lastModifiedTime !== null) {
    contents.lastModifiedTime = __expectLong(data.lastModifiedTime);
  }
  if (data.partitionColumns !== undefined && data.partitionColumns !== null) {
    contents.partitionColumns = deserializeAws_restJson1PartitionColumnList(data.partitionColumns, context);
  }
  if (data.sortColumns !== undefined && data.sortColumns !== null) {
    contents.sortColumns = deserializeAws_restJson1SortColumnList(data.sortColumns, context);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDataViewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataViewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetProgrammaticAccessCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProgrammaticAccessCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetProgrammaticAccessCredentialsCommandError(output, context);
  }
  const contents: GetProgrammaticAccessCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    credentials: undefined,
    durationInMinutes: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.credentials !== undefined && data.credentials !== null) {
    contents.credentials = deserializeAws_restJson1Credentials(data.credentials, context);
  }
  if (data.durationInMinutes !== undefined && data.durationInMinutes !== null) {
    contents.durationInMinutes = __expectLong(data.durationInMinutes);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetProgrammaticAccessCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProgrammaticAccessCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetWorkingLocationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkingLocationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWorkingLocationCommandError(output, context);
  }
  const contents: GetWorkingLocationCommandOutput = {
    $metadata: deserializeMetadata(output),
    s3Bucket: undefined,
    s3Path: undefined,
    s3Uri: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.s3Bucket !== undefined && data.s3Bucket !== null) {
    contents.s3Bucket = __expectString(data.s3Bucket);
  }
  if (data.s3Path !== undefined && data.s3Path !== null) {
    contents.s3Path = __expectString(data.s3Path);
  }
  if (data.s3Uri !== undefined && data.s3Uri !== null) {
    contents.s3Uri = __expectString(data.s3Uri);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetWorkingLocationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkingLocationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListChangesetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangesetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListChangesetsCommandError(output, context);
  }
  const contents: ListChangesetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    changesets: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.changesets !== undefined && data.changesets !== null) {
    contents.changesets = deserializeAws_restJson1ChangesetList(data.changesets, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListChangesetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangesetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDatasetsCommandError(output, context);
  }
  const contents: ListDatasetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    datasets: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datasets !== undefined && data.datasets !== null) {
    contents.datasets = deserializeAws_restJson1DatasetList(data.datasets, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDatasetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListDataViewsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataViewsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDataViewsCommandError(output, context);
  }
  const contents: ListDataViewsCommandOutput = {
    $metadata: deserializeMetadata(output),
    dataViews: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataViews !== undefined && data.dataViews !== null) {
    contents.dataViews = deserializeAws_restJson1DataViewList(data.dataViews, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDataViewsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataViewsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateChangesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChangesetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateChangesetCommandError(output, context);
  }
  const contents: UpdateChangesetCommandOutput = {
    $metadata: deserializeMetadata(output),
    changesetId: undefined,
    datasetId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.changesetId !== undefined && data.changesetId !== null) {
    contents.changesetId = __expectString(data.changesetId);
  }
  if (data.datasetId !== undefined && data.datasetId !== null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateChangesetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChangesetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDatasetCommandError(output, context);
  }
  const contents: UpdateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    datasetId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.datasetId !== undefined && data.datasetId !== null) {
    contents.datasetId = __expectString(data.datasetId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspacedata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspacedata#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspacedata#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspacedata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspacedata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspacedata#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1ColumnDefinition = (input: ColumnDefinition, context: __SerdeContext): any => {
  return {
    ...(input.columnDescription !== undefined &&
      input.columnDescription !== null && { columnDescription: input.columnDescription }),
    ...(input.columnName !== undefined && input.columnName !== null && { columnName: input.columnName }),
    ...(input.dataType !== undefined && input.dataType !== null && { dataType: input.dataType }),
  };
};

const serializeAws_restJson1ColumnList = (input: ColumnDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ColumnDefinition(entry, context);
    });
};

const serializeAws_restJson1ColumnNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1DatasetOwnerInfo = (input: DatasetOwnerInfo, context: __SerdeContext): any => {
  return {
    ...(input.email !== undefined && input.email !== null && { email: input.email }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.phoneNumber !== undefined && input.phoneNumber !== null && { phoneNumber: input.phoneNumber }),
  };
};

const serializeAws_restJson1DataViewDestinationTypeParams = (
  input: DataViewDestinationTypeParams,
  context: __SerdeContext
): any => {
  return {
    ...(input.destinationType !== undefined &&
      input.destinationType !== null && { destinationType: input.destinationType }),
    ...(input.s3DestinationExportFileFormat !== undefined &&
      input.s3DestinationExportFileFormat !== null && {
        s3DestinationExportFileFormat: input.s3DestinationExportFileFormat,
      }),
    ...(input.s3DestinationExportFileFormatOptions !== undefined &&
      input.s3DestinationExportFileFormatOptions !== null && {
        s3DestinationExportFileFormatOptions: serializeAws_restJson1S3DestinationFormatOptions(
          input.s3DestinationExportFileFormatOptions,
          context
        ),
      }),
  };
};

const serializeAws_restJson1FormatParams = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1PartitionColumnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1PermissionGroupParams = (input: PermissionGroupParams, context: __SerdeContext): any => {
  return {
    ...(input.datasetPermissions !== undefined &&
      input.datasetPermissions !== null && {
        datasetPermissions: serializeAws_restJson1ResourcePermissionsList(input.datasetPermissions, context),
      }),
    ...(input.permissionGroupId !== undefined &&
      input.permissionGroupId !== null && { permissionGroupId: input.permissionGroupId }),
  };
};

const serializeAws_restJson1ResourcePermission = (input: ResourcePermission, context: __SerdeContext): any => {
  return {
    ...(input.permission !== undefined && input.permission !== null && { permission: input.permission }),
  };
};

const serializeAws_restJson1ResourcePermissionsList = (input: ResourcePermission[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ResourcePermission(entry, context);
    });
};

const serializeAws_restJson1S3DestinationFormatOptions = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
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

const serializeAws_restJson1SchemaDefinition = (input: SchemaDefinition, context: __SerdeContext): any => {
  return {
    ...(input.columns !== undefined &&
      input.columns !== null && { columns: serializeAws_restJson1ColumnList(input.columns, context) }),
    ...(input.primaryKeyColumns !== undefined &&
      input.primaryKeyColumns !== null && {
        primaryKeyColumns: serializeAws_restJson1ColumnNameList(input.primaryKeyColumns, context),
      }),
  };
};

const serializeAws_restJson1SchemaUnion = (input: SchemaUnion, context: __SerdeContext): any => {
  return {
    ...(input.tabularSchemaConfig !== undefined &&
      input.tabularSchemaConfig !== null && {
        tabularSchemaConfig: serializeAws_restJson1SchemaDefinition(input.tabularSchemaConfig, context),
      }),
  };
};

const serializeAws_restJson1SortColumnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SourceParams = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const deserializeAws_restJson1ChangesetErrorInfo = (output: any, context: __SerdeContext): ChangesetErrorInfo => {
  return {
    errorCategory: __expectString(output.errorCategory),
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

const deserializeAws_restJson1ChangesetList = (output: any, context: __SerdeContext): ChangesetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChangesetSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChangesetSummary = (output: any, context: __SerdeContext): ChangesetSummary => {
  return {
    activeFromTimestamp: __expectLong(output.activeFromTimestamp),
    activeUntilTimestamp: __expectLong(output.activeUntilTimestamp),
    changeType: __expectString(output.changeType),
    changesetArn: __expectString(output.changesetArn),
    changesetId: __expectString(output.changesetId),
    createTime: __expectLong(output.createTime),
    datasetId: __expectString(output.datasetId),
    errorInfo:
      output.errorInfo !== undefined && output.errorInfo !== null
        ? deserializeAws_restJson1ChangesetErrorInfo(output.errorInfo, context)
        : undefined,
    formatParams:
      output.formatParams !== undefined && output.formatParams !== null
        ? deserializeAws_restJson1FormatParams(output.formatParams, context)
        : undefined,
    sourceParams:
      output.sourceParams !== undefined && output.sourceParams !== null
        ? deserializeAws_restJson1SourceParams(output.sourceParams, context)
        : undefined,
    status: __expectString(output.status),
    updatedByChangesetId: __expectString(output.updatedByChangesetId),
    updatesChangesetId: __expectString(output.updatesChangesetId),
  } as any;
};

const deserializeAws_restJson1ColumnDefinition = (output: any, context: __SerdeContext): ColumnDefinition => {
  return {
    columnDescription: __expectString(output.columnDescription),
    columnName: __expectString(output.columnName),
    dataType: __expectString(output.dataType),
  } as any;
};

const deserializeAws_restJson1ColumnList = (output: any, context: __SerdeContext): ColumnDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnDefinition(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ColumnNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Credentials = (output: any, context: __SerdeContext): Credentials => {
  return {
    accessKeyId: __expectString(output.accessKeyId),
    secretAccessKey: __expectString(output.secretAccessKey),
    sessionToken: __expectString(output.sessionToken),
  } as any;
};

const deserializeAws_restJson1Dataset = (output: any, context: __SerdeContext): Dataset => {
  return {
    alias: __expectString(output.alias),
    createTime: __expectLong(output.createTime),
    datasetArn: __expectString(output.datasetArn),
    datasetDescription: __expectString(output.datasetDescription),
    datasetId: __expectString(output.datasetId),
    datasetTitle: __expectString(output.datasetTitle),
    kind: __expectString(output.kind),
    lastModifiedTime: __expectLong(output.lastModifiedTime),
    ownerInfo:
      output.ownerInfo !== undefined && output.ownerInfo !== null
        ? deserializeAws_restJson1DatasetOwnerInfo(output.ownerInfo, context)
        : undefined,
    schemaDefinition:
      output.schemaDefinition !== undefined && output.schemaDefinition !== null
        ? deserializeAws_restJson1SchemaUnion(output.schemaDefinition, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DatasetList = (output: any, context: __SerdeContext): Dataset[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Dataset(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DatasetOwnerInfo = (output: any, context: __SerdeContext): DatasetOwnerInfo => {
  return {
    email: __expectString(output.email),
    name: __expectString(output.name),
    phoneNumber: __expectString(output.phoneNumber),
  } as any;
};

const deserializeAws_restJson1DataViewDestinationTypeParams = (
  output: any,
  context: __SerdeContext
): DataViewDestinationTypeParams => {
  return {
    destinationType: __expectString(output.destinationType),
    s3DestinationExportFileFormat: __expectString(output.s3DestinationExportFileFormat),
    s3DestinationExportFileFormatOptions:
      output.s3DestinationExportFileFormatOptions !== undefined && output.s3DestinationExportFileFormatOptions !== null
        ? deserializeAws_restJson1S3DestinationFormatOptions(output.s3DestinationExportFileFormatOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DataViewErrorInfo = (output: any, context: __SerdeContext): DataViewErrorInfo => {
  return {
    errorCategory: __expectString(output.errorCategory),
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

const deserializeAws_restJson1DataViewList = (output: any, context: __SerdeContext): DataViewSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataViewSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataViewSummary = (output: any, context: __SerdeContext): DataViewSummary => {
  return {
    asOfTimestamp: __expectLong(output.asOfTimestamp),
    autoUpdate: __expectBoolean(output.autoUpdate),
    createTime: __expectLong(output.createTime),
    dataViewArn: __expectString(output.dataViewArn),
    dataViewId: __expectString(output.dataViewId),
    datasetId: __expectString(output.datasetId),
    destinationTypeProperties:
      output.destinationTypeProperties !== undefined && output.destinationTypeProperties !== null
        ? deserializeAws_restJson1DataViewDestinationTypeParams(output.destinationTypeProperties, context)
        : undefined,
    errorInfo:
      output.errorInfo !== undefined && output.errorInfo !== null
        ? deserializeAws_restJson1DataViewErrorInfo(output.errorInfo, context)
        : undefined,
    lastModifiedTime: __expectLong(output.lastModifiedTime),
    partitionColumns:
      output.partitionColumns !== undefined && output.partitionColumns !== null
        ? deserializeAws_restJson1PartitionColumnList(output.partitionColumns, context)
        : undefined,
    sortColumns:
      output.sortColumns !== undefined && output.sortColumns !== null
        ? deserializeAws_restJson1SortColumnList(output.sortColumns, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1FormatParams = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1PartitionColumnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1S3DestinationFormatOptions = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
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

const deserializeAws_restJson1SchemaDefinition = (output: any, context: __SerdeContext): SchemaDefinition => {
  return {
    columns:
      output.columns !== undefined && output.columns !== null
        ? deserializeAws_restJson1ColumnList(output.columns, context)
        : undefined,
    primaryKeyColumns:
      output.primaryKeyColumns !== undefined && output.primaryKeyColumns !== null
        ? deserializeAws_restJson1ColumnNameList(output.primaryKeyColumns, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SchemaUnion = (output: any, context: __SerdeContext): SchemaUnion => {
  return {
    tabularSchemaConfig:
      output.tabularSchemaConfig !== undefined && output.tabularSchemaConfig !== null
        ? deserializeAws_restJson1SchemaDefinition(output.tabularSchemaConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SortColumnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SourceParams = (output: any, context: __SerdeContext): { [key: string]: string } => {
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
