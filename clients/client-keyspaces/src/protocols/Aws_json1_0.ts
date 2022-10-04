// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
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

import { CreateKeyspaceCommandInput, CreateKeyspaceCommandOutput } from "../commands/CreateKeyspaceCommand";
import { CreateTableCommandInput, CreateTableCommandOutput } from "../commands/CreateTableCommand";
import { DeleteKeyspaceCommandInput, DeleteKeyspaceCommandOutput } from "../commands/DeleteKeyspaceCommand";
import { DeleteTableCommandInput, DeleteTableCommandOutput } from "../commands/DeleteTableCommand";
import { GetKeyspaceCommandInput, GetKeyspaceCommandOutput } from "../commands/GetKeyspaceCommand";
import { GetTableCommandInput, GetTableCommandOutput } from "../commands/GetTableCommand";
import { ListKeyspacesCommandInput, ListKeyspacesCommandOutput } from "../commands/ListKeyspacesCommand";
import { ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { RestoreTableCommandInput, RestoreTableCommandOutput } from "../commands/RestoreTableCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateTableCommandInput, UpdateTableCommandOutput } from "../commands/UpdateTableCommand";
import { KeyspacesServiceException as __BaseException } from "../models/KeyspacesServiceException";
import {
  AccessDeniedException,
  CapacitySpecification,
  CapacitySpecificationSummary,
  ClusteringKey,
  ColumnDefinition,
  Comment,
  ConflictException,
  CreateKeyspaceRequest,
  CreateKeyspaceResponse,
  CreateTableRequest,
  CreateTableResponse,
  DeleteKeyspaceRequest,
  DeleteKeyspaceResponse,
  DeleteTableRequest,
  DeleteTableResponse,
  EncryptionSpecification,
  GetKeyspaceRequest,
  GetKeyspaceResponse,
  GetTableRequest,
  GetTableResponse,
  InternalServerException,
  KeyspaceSummary,
  ListKeyspacesRequest,
  ListKeyspacesResponse,
  ListTablesRequest,
  ListTablesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  PartitionKey,
  PointInTimeRecovery,
  PointInTimeRecoverySummary,
  ResourceNotFoundException,
  RestoreTableRequest,
  RestoreTableResponse,
  SchemaDefinition,
  ServiceQuotaExceededException,
  StaticColumn,
  TableSummary,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TimeToLive,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateTableRequest,
  UpdateTableResponse,
  ValidationException,
} from "../models/models_0";

export const serializeAws_json1_0CreateKeyspaceCommand = async (
  input: CreateKeyspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "KeyspacesService.CreateKeyspace",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateKeyspaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateTableCommand = async (
  input: CreateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "KeyspacesService.CreateTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteKeyspaceCommand = async (
  input: DeleteKeyspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "KeyspacesService.DeleteKeyspace",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteKeyspaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteTableCommand = async (
  input: DeleteTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "KeyspacesService.DeleteTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetKeyspaceCommand = async (
  input: GetKeyspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "KeyspacesService.GetKeyspace",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetKeyspaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetTableCommand = async (
  input: GetTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "KeyspacesService.GetTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListKeyspacesCommand = async (
  input: ListKeyspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "KeyspacesService.ListKeyspaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListKeyspacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTablesCommand = async (
  input: ListTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "KeyspacesService.ListTables",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTablesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "KeyspacesService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RestoreTableCommand = async (
  input: RestoreTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "KeyspacesService.RestoreTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0RestoreTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "KeyspacesService.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "KeyspacesService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateTableCommand = async (
  input: UpdateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "KeyspacesService.UpdateTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0CreateKeyspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyspaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateKeyspaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateKeyspaceResponse(data, context);
  const response: CreateKeyspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateKeyspaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyspaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.keyspaces#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.keyspaces#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateTableResponse(data, context);
  const response: CreateTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.keyspaces#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.keyspaces#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteKeyspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyspaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteKeyspaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteKeyspaceResponse(data, context);
  const response: DeleteKeyspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteKeyspaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyspaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.keyspaces#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.keyspaces#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteTableResponse(data, context);
  const response: DeleteTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.keyspaces#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.keyspaces#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetKeyspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyspaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetKeyspaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetKeyspaceResponse(data, context);
  const response: GetKeyspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetKeyspaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyspaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.keyspaces#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetTableResponse(data, context);
  const response: GetTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.keyspaces#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListKeyspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListKeyspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListKeyspacesResponse(data, context);
  const response: ListKeyspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListKeyspacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyspacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.keyspaces#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListTablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTablesResponse(data, context);
  const response: ListTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTablesCommandError = async (
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
    case "com.amazonaws.keyspaces#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTagsForResourceCommandError = async (
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
    case "com.amazonaws.keyspaces#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0RestoreTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0RestoreTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0RestoreTableResponse(data, context);
  const response: RestoreTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RestoreTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.keyspaces#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.keyspaces#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TagResourceCommandError = async (
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
    case "com.amazonaws.keyspaces#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UntagResourceCommandError = async (
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
    case "com.amazonaws.keyspaces#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.keyspaces#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateTableResponse(data, context);
  const response: UpdateTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.keyspaces#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.keyspaces#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_0AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_0CapacitySpecification = (input: CapacitySpecification, context: __SerdeContext): any => {
  return {
    ...(input.readCapacityUnits != null && { readCapacityUnits: input.readCapacityUnits }),
    ...(input.throughputMode != null && { throughputMode: input.throughputMode }),
    ...(input.writeCapacityUnits != null && { writeCapacityUnits: input.writeCapacityUnits }),
  };
};

const serializeAws_json1_0ClusteringKey = (input: ClusteringKey, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.orderBy != null && { orderBy: input.orderBy }),
  };
};

const serializeAws_json1_0ClusteringKeyList = (input: ClusteringKey[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0ClusteringKey(entry, context);
    });
};

const serializeAws_json1_0ColumnDefinition = (input: ColumnDefinition, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_0ColumnDefinitionList = (input: ColumnDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0ColumnDefinition(entry, context);
    });
};

const serializeAws_json1_0Comment = (input: Comment, context: __SerdeContext): any => {
  return {
    ...(input.message != null && { message: input.message }),
  };
};

const serializeAws_json1_0CreateKeyspaceRequest = (input: CreateKeyspaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyspaceName != null && { keyspaceName: input.keyspaceName }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
  };
};

const serializeAws_json1_0CreateTableRequest = (input: CreateTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.capacitySpecification != null && {
      capacitySpecification: serializeAws_json1_0CapacitySpecification(input.capacitySpecification, context),
    }),
    ...(input.comment != null && { comment: serializeAws_json1_0Comment(input.comment, context) }),
    ...(input.defaultTimeToLive != null && { defaultTimeToLive: input.defaultTimeToLive }),
    ...(input.encryptionSpecification != null && {
      encryptionSpecification: serializeAws_json1_0EncryptionSpecification(input.encryptionSpecification, context),
    }),
    ...(input.keyspaceName != null && { keyspaceName: input.keyspaceName }),
    ...(input.pointInTimeRecovery != null && {
      pointInTimeRecovery: serializeAws_json1_0PointInTimeRecovery(input.pointInTimeRecovery, context),
    }),
    ...(input.schemaDefinition != null && {
      schemaDefinition: serializeAws_json1_0SchemaDefinition(input.schemaDefinition, context),
    }),
    ...(input.tableName != null && { tableName: input.tableName }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
    ...(input.ttl != null && { ttl: serializeAws_json1_0TimeToLive(input.ttl, context) }),
  };
};

const serializeAws_json1_0DeleteKeyspaceRequest = (input: DeleteKeyspaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyspaceName != null && { keyspaceName: input.keyspaceName }),
  };
};

const serializeAws_json1_0DeleteTableRequest = (input: DeleteTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyspaceName != null && { keyspaceName: input.keyspaceName }),
    ...(input.tableName != null && { tableName: input.tableName }),
  };
};

const serializeAws_json1_0EncryptionSpecification = (input: EncryptionSpecification, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyIdentifier != null && { kmsKeyIdentifier: input.kmsKeyIdentifier }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_0GetKeyspaceRequest = (input: GetKeyspaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyspaceName != null && { keyspaceName: input.keyspaceName }),
  };
};

const serializeAws_json1_0GetTableRequest = (input: GetTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyspaceName != null && { keyspaceName: input.keyspaceName }),
    ...(input.tableName != null && { tableName: input.tableName }),
  };
};

const serializeAws_json1_0ListKeyspacesRequest = (input: ListKeyspacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListTablesRequest = (input: ListTablesRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyspaceName != null && { keyspaceName: input.keyspaceName }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_0PartitionKey = (input: PartitionKey, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0PartitionKeyList = (input: PartitionKey[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0PartitionKey(entry, context);
    });
};

const serializeAws_json1_0PointInTimeRecovery = (input: PointInTimeRecovery, context: __SerdeContext): any => {
  return {
    ...(input.status != null && { status: input.status }),
  };
};

const serializeAws_json1_0RestoreTableRequest = (input: RestoreTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.capacitySpecificationOverride != null && {
      capacitySpecificationOverride: serializeAws_json1_0CapacitySpecification(
        input.capacitySpecificationOverride,
        context
      ),
    }),
    ...(input.encryptionSpecificationOverride != null && {
      encryptionSpecificationOverride: serializeAws_json1_0EncryptionSpecification(
        input.encryptionSpecificationOverride,
        context
      ),
    }),
    ...(input.pointInTimeRecoveryOverride != null && {
      pointInTimeRecoveryOverride: serializeAws_json1_0PointInTimeRecovery(input.pointInTimeRecoveryOverride, context),
    }),
    ...(input.restoreTimestamp != null && { restoreTimestamp: Math.round(input.restoreTimestamp.getTime() / 1000) }),
    ...(input.sourceKeyspaceName != null && { sourceKeyspaceName: input.sourceKeyspaceName }),
    ...(input.sourceTableName != null && { sourceTableName: input.sourceTableName }),
    ...(input.tagsOverride != null && { tagsOverride: serializeAws_json1_0TagList(input.tagsOverride, context) }),
    ...(input.targetKeyspaceName != null && { targetKeyspaceName: input.targetKeyspaceName }),
    ...(input.targetTableName != null && { targetTableName: input.targetTableName }),
  };
};

const serializeAws_json1_0SchemaDefinition = (input: SchemaDefinition, context: __SerdeContext): any => {
  return {
    ...(input.allColumns != null && {
      allColumns: serializeAws_json1_0ColumnDefinitionList(input.allColumns, context),
    }),
    ...(input.clusteringKeys != null && {
      clusteringKeys: serializeAws_json1_0ClusteringKeyList(input.clusteringKeys, context),
    }),
    ...(input.partitionKeys != null && {
      partitionKeys: serializeAws_json1_0PartitionKeyList(input.partitionKeys, context),
    }),
    ...(input.staticColumns != null && {
      staticColumns: serializeAws_json1_0StaticColumnList(input.staticColumns, context),
    }),
  };
};

const serializeAws_json1_0StaticColumn = (input: StaticColumn, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0StaticColumnList = (input: StaticColumn[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0StaticColumn(entry, context);
    });
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_json1_0TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0Tag(entry, context);
    });
};

const serializeAws_json1_0TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
  };
};

const serializeAws_json1_0TimeToLive = (input: TimeToLive, context: __SerdeContext): any => {
  return {
    ...(input.status != null && { status: input.status }),
  };
};

const serializeAws_json1_0UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
  };
};

const serializeAws_json1_0UpdateTableRequest = (input: UpdateTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.addColumns != null && {
      addColumns: serializeAws_json1_0ColumnDefinitionList(input.addColumns, context),
    }),
    ...(input.capacitySpecification != null && {
      capacitySpecification: serializeAws_json1_0CapacitySpecification(input.capacitySpecification, context),
    }),
    ...(input.defaultTimeToLive != null && { defaultTimeToLive: input.defaultTimeToLive }),
    ...(input.encryptionSpecification != null && {
      encryptionSpecification: serializeAws_json1_0EncryptionSpecification(input.encryptionSpecification, context),
    }),
    ...(input.keyspaceName != null && { keyspaceName: input.keyspaceName }),
    ...(input.pointInTimeRecovery != null && {
      pointInTimeRecovery: serializeAws_json1_0PointInTimeRecovery(input.pointInTimeRecovery, context),
    }),
    ...(input.tableName != null && { tableName: input.tableName }),
    ...(input.ttl != null && { ttl: serializeAws_json1_0TimeToLive(input.ttl, context) }),
  };
};

const deserializeAws_json1_0AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0CapacitySpecificationSummary = (
  output: any,
  context: __SerdeContext
): CapacitySpecificationSummary => {
  return {
    lastUpdateToPayPerRequestTimestamp:
      output.lastUpdateToPayPerRequestTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateToPayPerRequestTimestamp)))
        : undefined,
    readCapacityUnits: __expectLong(output.readCapacityUnits),
    throughputMode: __expectString(output.throughputMode),
    writeCapacityUnits: __expectLong(output.writeCapacityUnits),
  } as any;
};

const deserializeAws_json1_0ClusteringKey = (output: any, context: __SerdeContext): ClusteringKey => {
  return {
    name: __expectString(output.name),
    orderBy: __expectString(output.orderBy),
  } as any;
};

const deserializeAws_json1_0ClusteringKeyList = (output: any, context: __SerdeContext): ClusteringKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ClusteringKey(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ColumnDefinition = (output: any, context: __SerdeContext): ColumnDefinition => {
  return {
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_0ColumnDefinitionList = (output: any, context: __SerdeContext): ColumnDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ColumnDefinition(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0Comment = (output: any, context: __SerdeContext): Comment => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0CreateKeyspaceResponse = (output: any, context: __SerdeContext): CreateKeyspaceResponse => {
  return {
    resourceArn: __expectString(output.resourceArn),
  } as any;
};

const deserializeAws_json1_0CreateTableResponse = (output: any, context: __SerdeContext): CreateTableResponse => {
  return {
    resourceArn: __expectString(output.resourceArn),
  } as any;
};

const deserializeAws_json1_0DeleteKeyspaceResponse = (output: any, context: __SerdeContext): DeleteKeyspaceResponse => {
  return {} as any;
};

const deserializeAws_json1_0DeleteTableResponse = (output: any, context: __SerdeContext): DeleteTableResponse => {
  return {} as any;
};

const deserializeAws_json1_0EncryptionSpecification = (
  output: any,
  context: __SerdeContext
): EncryptionSpecification => {
  return {
    kmsKeyIdentifier: __expectString(output.kmsKeyIdentifier),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_0GetKeyspaceResponse = (output: any, context: __SerdeContext): GetKeyspaceResponse => {
  return {
    keyspaceName: __expectString(output.keyspaceName),
    resourceArn: __expectString(output.resourceArn),
  } as any;
};

const deserializeAws_json1_0GetTableResponse = (output: any, context: __SerdeContext): GetTableResponse => {
  return {
    capacitySpecification:
      output.capacitySpecification != null
        ? deserializeAws_json1_0CapacitySpecificationSummary(output.capacitySpecification, context)
        : undefined,
    comment: output.comment != null ? deserializeAws_json1_0Comment(output.comment, context) : undefined,
    creationTimestamp:
      output.creationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTimestamp)))
        : undefined,
    defaultTimeToLive: __expectInt32(output.defaultTimeToLive),
    encryptionSpecification:
      output.encryptionSpecification != null
        ? deserializeAws_json1_0EncryptionSpecification(output.encryptionSpecification, context)
        : undefined,
    keyspaceName: __expectString(output.keyspaceName),
    pointInTimeRecovery:
      output.pointInTimeRecovery != null
        ? deserializeAws_json1_0PointInTimeRecoverySummary(output.pointInTimeRecovery, context)
        : undefined,
    resourceArn: __expectString(output.resourceArn),
    schemaDefinition:
      output.schemaDefinition != null
        ? deserializeAws_json1_0SchemaDefinition(output.schemaDefinition, context)
        : undefined,
    status: __expectString(output.status),
    tableName: __expectString(output.tableName),
    ttl: output.ttl != null ? deserializeAws_json1_0TimeToLive(output.ttl, context) : undefined,
  } as any;
};

const deserializeAws_json1_0InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0KeyspaceSummary = (output: any, context: __SerdeContext): KeyspaceSummary => {
  return {
    keyspaceName: __expectString(output.keyspaceName),
    resourceArn: __expectString(output.resourceArn),
  } as any;
};

const deserializeAws_json1_0KeyspaceSummaryList = (output: any, context: __SerdeContext): KeyspaceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0KeyspaceSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ListKeyspacesResponse = (output: any, context: __SerdeContext): ListKeyspacesResponse => {
  return {
    keyspaces:
      output.keyspaces != null ? deserializeAws_json1_0KeyspaceSummaryList(output.keyspaces, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_0ListTablesResponse = (output: any, context: __SerdeContext): ListTablesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    tables: output.tables != null ? deserializeAws_json1_0TableSummaryList(output.tables, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    tags: output.tags != null ? deserializeAws_json1_0TagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_0PartitionKey = (output: any, context: __SerdeContext): PartitionKey => {
  return {
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0PartitionKeyList = (output: any, context: __SerdeContext): PartitionKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0PartitionKey(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0PointInTimeRecoverySummary = (
  output: any,
  context: __SerdeContext
): PointInTimeRecoverySummary => {
  return {
    earliestRestorableTimestamp:
      output.earliestRestorableTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.earliestRestorableTimestamp)))
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
    resourceArn: __expectString(output.resourceArn),
  } as any;
};

const deserializeAws_json1_0RestoreTableResponse = (output: any, context: __SerdeContext): RestoreTableResponse => {
  return {
    restoredTableARN: __expectString(output.restoredTableARN),
  } as any;
};

const deserializeAws_json1_0SchemaDefinition = (output: any, context: __SerdeContext): SchemaDefinition => {
  return {
    allColumns:
      output.allColumns != null ? deserializeAws_json1_0ColumnDefinitionList(output.allColumns, context) : undefined,
    clusteringKeys:
      output.clusteringKeys != null
        ? deserializeAws_json1_0ClusteringKeyList(output.clusteringKeys, context)
        : undefined,
    partitionKeys:
      output.partitionKeys != null ? deserializeAws_json1_0PartitionKeyList(output.partitionKeys, context) : undefined,
    staticColumns:
      output.staticColumns != null ? deserializeAws_json1_0StaticColumnList(output.staticColumns, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0StaticColumn = (output: any, context: __SerdeContext): StaticColumn => {
  return {
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0StaticColumnList = (output: any, context: __SerdeContext): StaticColumn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0StaticColumn(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0TableSummary = (output: any, context: __SerdeContext): TableSummary => {
  return {
    keyspaceName: __expectString(output.keyspaceName),
    resourceArn: __expectString(output.resourceArn),
    tableName: __expectString(output.tableName),
  } as any;
};

const deserializeAws_json1_0TableSummaryList = (output: any, context: __SerdeContext): TableSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0TableSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_0TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0TimeToLive = (output: any, context: __SerdeContext): TimeToLive => {
  return {
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_0UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0UpdateTableResponse = (output: any, context: __SerdeContext): UpdateTableResponse => {
  return {
    resourceArn: __expectString(output.resourceArn),
  } as any;
};

const deserializeAws_json1_0ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    message: __expectString(output.message),
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
