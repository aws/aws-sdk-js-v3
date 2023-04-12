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
  ClientSideTimestamps,
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

/**
 * serializeAws_json1_0CreateKeyspaceCommand
 */
export const se_CreateKeyspaceCommand = async (
  input: CreateKeyspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateKeyspace");
  let body: any;
  body = JSON.stringify(se_CreateKeyspaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateTableCommand
 */
export const se_CreateTableCommand = async (
  input: CreateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTable");
  let body: any;
  body = JSON.stringify(se_CreateTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteKeyspaceCommand
 */
export const se_DeleteKeyspaceCommand = async (
  input: DeleteKeyspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteKeyspace");
  let body: any;
  body = JSON.stringify(se_DeleteKeyspaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteTableCommand
 */
export const se_DeleteTableCommand = async (
  input: DeleteTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTable");
  let body: any;
  body = JSON.stringify(se_DeleteTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetKeyspaceCommand
 */
export const se_GetKeyspaceCommand = async (
  input: GetKeyspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetKeyspace");
  let body: any;
  body = JSON.stringify(se_GetKeyspaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetTableCommand
 */
export const se_GetTableCommand = async (
  input: GetTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTable");
  let body: any;
  body = JSON.stringify(se_GetTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListKeyspacesCommand
 */
export const se_ListKeyspacesCommand = async (
  input: ListKeyspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListKeyspaces");
  let body: any;
  body = JSON.stringify(se_ListKeyspacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTablesCommand
 */
export const se_ListTablesCommand = async (
  input: ListTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTables");
  let body: any;
  body = JSON.stringify(se_ListTablesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RestoreTableCommand
 */
export const se_RestoreTableCommand = async (
  input: RestoreTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RestoreTable");
  let body: any;
  body = JSON.stringify(se_RestoreTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateTableCommand
 */
export const se_UpdateTableCommand = async (
  input: UpdateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTable");
  let body: any;
  body = JSON.stringify(se_UpdateTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0CreateKeyspaceCommand
 */
export const de_CreateKeyspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyspaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateKeyspaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateKeyspaceResponse(data, context);
  const response: CreateKeyspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateKeyspaceCommandError
 */
const de_CreateKeyspaceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.keyspaces#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
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
 * deserializeAws_json1_0CreateTableCommand
 */
export const de_CreateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTableResponse(data, context);
  const response: CreateTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateTableCommandError
 */
const de_CreateTableCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.keyspaces#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
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
 * deserializeAws_json1_0DeleteKeyspaceCommand
 */
export const de_DeleteKeyspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyspaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteKeyspaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteKeyspaceResponse(data, context);
  const response: DeleteKeyspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteKeyspaceCommandError
 */
const de_DeleteKeyspaceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.keyspaces#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
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
 * deserializeAws_json1_0DeleteTableCommand
 */
export const de_DeleteTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTableResponse(data, context);
  const response: DeleteTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteTableCommandError
 */
const de_DeleteTableCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.keyspaces#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
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
 * deserializeAws_json1_0GetKeyspaceCommand
 */
export const de_GetKeyspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyspaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetKeyspaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetKeyspaceResponse(data, context);
  const response: GetKeyspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetKeyspaceCommandError
 */
const de_GetKeyspaceCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
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
 * deserializeAws_json1_0GetTableCommand
 */
export const de_GetTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTableResponse(data, context);
  const response: GetTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetTableCommandError
 */
const de_GetTableCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
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
 * deserializeAws_json1_0ListKeyspacesCommand
 */
export const de_ListKeyspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListKeyspacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListKeyspacesResponse(data, context);
  const response: ListKeyspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListKeyspacesCommandError
 */
const de_ListKeyspacesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
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
 * deserializeAws_json1_0ListTablesCommand
 */
export const de_ListTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTablesResponse(data, context);
  const response: ListTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListTablesCommandError
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
    case "com.amazonaws.keyspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
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
 * deserializeAws_json1_0ListTagsForResourceCommand
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
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListTagsForResourceCommandError
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
    case "com.amazonaws.keyspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
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
 * deserializeAws_json1_0RestoreTableCommand
 */
export const de_RestoreTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreTableResponse(data, context);
  const response: RestoreTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0RestoreTableCommandError
 */
const de_RestoreTableCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.keyspaces#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
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
 * deserializeAws_json1_0TagResourceCommand
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
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0TagResourceCommandError
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
    case "com.amazonaws.keyspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
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
 * deserializeAws_json1_0UntagResourceCommand
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
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UntagResourceCommandError
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
    case "com.amazonaws.keyspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.keyspaces#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
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
 * deserializeAws_json1_0UpdateTableCommand
 */
export const de_UpdateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTableResponse(data, context);
  const response: UpdateTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateTableCommandError
 */
const de_UpdateTableCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.keyspaces#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
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
 * deserializeAws_json1_0AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InternalServerExceptionRes
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
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
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
 * deserializeAws_json1_0ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_0CapacitySpecification
 */
const se_CapacitySpecification = (input: CapacitySpecification, context: __SerdeContext): any => {
  return {
    ...(input.readCapacityUnits != null && { readCapacityUnits: input.readCapacityUnits }),
    ...(input.throughputMode != null && { throughputMode: input.throughputMode }),
    ...(input.writeCapacityUnits != null && { writeCapacityUnits: input.writeCapacityUnits }),
  };
};

/**
 * serializeAws_json1_0ClientSideTimestamps
 */
const se_ClientSideTimestamps = (input: ClientSideTimestamps, context: __SerdeContext): any => {
  return {
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_0ClusteringKey
 */
const se_ClusteringKey = (input: ClusteringKey, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.orderBy != null && { orderBy: input.orderBy }),
  };
};

/**
 * serializeAws_json1_0ClusteringKeyList
 */
const se_ClusteringKeyList = (input: ClusteringKey[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ClusteringKey(entry, context);
    });
};

/**
 * serializeAws_json1_0ColumnDefinition
 */
const se_ColumnDefinition = (input: ColumnDefinition, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_0ColumnDefinitionList
 */
const se_ColumnDefinitionList = (input: ColumnDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ColumnDefinition(entry, context);
    });
};

/**
 * serializeAws_json1_0Comment
 */
const se_Comment = (input: Comment, context: __SerdeContext): any => {
  return {
    ...(input.message != null && { message: input.message }),
  };
};

/**
 * serializeAws_json1_0CreateKeyspaceRequest
 */
const se_CreateKeyspaceRequest = (input: CreateKeyspaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyspaceName != null && { keyspaceName: input.keyspaceName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateTableRequest
 */
const se_CreateTableRequest = (input: CreateTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.capacitySpecification != null && {
      capacitySpecification: se_CapacitySpecification(input.capacitySpecification, context),
    }),
    ...(input.clientSideTimestamps != null && {
      clientSideTimestamps: se_ClientSideTimestamps(input.clientSideTimestamps, context),
    }),
    ...(input.comment != null && { comment: se_Comment(input.comment, context) }),
    ...(input.defaultTimeToLive != null && { defaultTimeToLive: input.defaultTimeToLive }),
    ...(input.encryptionSpecification != null && {
      encryptionSpecification: se_EncryptionSpecification(input.encryptionSpecification, context),
    }),
    ...(input.keyspaceName != null && { keyspaceName: input.keyspaceName }),
    ...(input.pointInTimeRecovery != null && {
      pointInTimeRecovery: se_PointInTimeRecovery(input.pointInTimeRecovery, context),
    }),
    ...(input.schemaDefinition != null && { schemaDefinition: se_SchemaDefinition(input.schemaDefinition, context) }),
    ...(input.tableName != null && { tableName: input.tableName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.ttl != null && { ttl: se_TimeToLive(input.ttl, context) }),
  };
};

/**
 * serializeAws_json1_0DeleteKeyspaceRequest
 */
const se_DeleteKeyspaceRequest = (input: DeleteKeyspaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyspaceName != null && { keyspaceName: input.keyspaceName }),
  };
};

/**
 * serializeAws_json1_0DeleteTableRequest
 */
const se_DeleteTableRequest = (input: DeleteTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyspaceName != null && { keyspaceName: input.keyspaceName }),
    ...(input.tableName != null && { tableName: input.tableName }),
  };
};

/**
 * serializeAws_json1_0EncryptionSpecification
 */
const se_EncryptionSpecification = (input: EncryptionSpecification, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyIdentifier != null && { kmsKeyIdentifier: input.kmsKeyIdentifier }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_0GetKeyspaceRequest
 */
const se_GetKeyspaceRequest = (input: GetKeyspaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyspaceName != null && { keyspaceName: input.keyspaceName }),
  };
};

/**
 * serializeAws_json1_0GetTableRequest
 */
const se_GetTableRequest = (input: GetTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyspaceName != null && { keyspaceName: input.keyspaceName }),
    ...(input.tableName != null && { tableName: input.tableName }),
  };
};

/**
 * serializeAws_json1_0ListKeyspacesRequest
 */
const se_ListKeyspacesRequest = (input: ListKeyspacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListTablesRequest
 */
const se_ListTablesRequest = (input: ListTablesRequest, context: __SerdeContext): any => {
  return {
    ...(input.keyspaceName != null && { keyspaceName: input.keyspaceName }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_0PartitionKey
 */
const se_PartitionKey = (input: PartitionKey, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0PartitionKeyList
 */
const se_PartitionKeyList = (input: PartitionKey[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PartitionKey(entry, context);
    });
};

/**
 * serializeAws_json1_0PointInTimeRecovery
 */
const se_PointInTimeRecovery = (input: PointInTimeRecovery, context: __SerdeContext): any => {
  return {
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_0RestoreTableRequest
 */
const se_RestoreTableRequest = (input: RestoreTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.capacitySpecificationOverride != null && {
      capacitySpecificationOverride: se_CapacitySpecification(input.capacitySpecificationOverride, context),
    }),
    ...(input.encryptionSpecificationOverride != null && {
      encryptionSpecificationOverride: se_EncryptionSpecification(input.encryptionSpecificationOverride, context),
    }),
    ...(input.pointInTimeRecoveryOverride != null && {
      pointInTimeRecoveryOverride: se_PointInTimeRecovery(input.pointInTimeRecoveryOverride, context),
    }),
    ...(input.restoreTimestamp != null && { restoreTimestamp: Math.round(input.restoreTimestamp.getTime() / 1000) }),
    ...(input.sourceKeyspaceName != null && { sourceKeyspaceName: input.sourceKeyspaceName }),
    ...(input.sourceTableName != null && { sourceTableName: input.sourceTableName }),
    ...(input.tagsOverride != null && { tagsOverride: se_TagList(input.tagsOverride, context) }),
    ...(input.targetKeyspaceName != null && { targetKeyspaceName: input.targetKeyspaceName }),
    ...(input.targetTableName != null && { targetTableName: input.targetTableName }),
  };
};

/**
 * serializeAws_json1_0SchemaDefinition
 */
const se_SchemaDefinition = (input: SchemaDefinition, context: __SerdeContext): any => {
  return {
    ...(input.allColumns != null && { allColumns: se_ColumnDefinitionList(input.allColumns, context) }),
    ...(input.clusteringKeys != null && { clusteringKeys: se_ClusteringKeyList(input.clusteringKeys, context) }),
    ...(input.partitionKeys != null && { partitionKeys: se_PartitionKeyList(input.partitionKeys, context) }),
    ...(input.staticColumns != null && { staticColumns: se_StaticColumnList(input.staticColumns, context) }),
  };
};

/**
 * serializeAws_json1_0StaticColumn
 */
const se_StaticColumn = (input: StaticColumn, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0StaticColumnList
 */
const se_StaticColumnList = (input: StaticColumn[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StaticColumn(entry, context);
    });
};

/**
 * serializeAws_json1_0Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_0TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_0TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_0TimeToLive
 */
const se_TimeToLive = (input: TimeToLive, context: __SerdeContext): any => {
  return {
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_0UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_0UpdateTableRequest
 */
const se_UpdateTableRequest = (input: UpdateTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.addColumns != null && { addColumns: se_ColumnDefinitionList(input.addColumns, context) }),
    ...(input.capacitySpecification != null && {
      capacitySpecification: se_CapacitySpecification(input.capacitySpecification, context),
    }),
    ...(input.clientSideTimestamps != null && {
      clientSideTimestamps: se_ClientSideTimestamps(input.clientSideTimestamps, context),
    }),
    ...(input.defaultTimeToLive != null && { defaultTimeToLive: input.defaultTimeToLive }),
    ...(input.encryptionSpecification != null && {
      encryptionSpecification: se_EncryptionSpecification(input.encryptionSpecification, context),
    }),
    ...(input.keyspaceName != null && { keyspaceName: input.keyspaceName }),
    ...(input.pointInTimeRecovery != null && {
      pointInTimeRecovery: se_PointInTimeRecovery(input.pointInTimeRecovery, context),
    }),
    ...(input.tableName != null && { tableName: input.tableName }),
    ...(input.ttl != null && { ttl: se_TimeToLive(input.ttl, context) }),
  };
};

/**
 * deserializeAws_json1_0AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0CapacitySpecificationSummary
 */
const de_CapacitySpecificationSummary = (output: any, context: __SerdeContext): CapacitySpecificationSummary => {
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

/**
 * deserializeAws_json1_0ClientSideTimestamps
 */
const de_ClientSideTimestamps = (output: any, context: __SerdeContext): ClientSideTimestamps => {
  return {
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_0ClusteringKey
 */
const de_ClusteringKey = (output: any, context: __SerdeContext): ClusteringKey => {
  return {
    name: __expectString(output.name),
    orderBy: __expectString(output.orderBy),
  } as any;
};

/**
 * deserializeAws_json1_0ClusteringKeyList
 */
const de_ClusteringKeyList = (output: any, context: __SerdeContext): ClusteringKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ClusteringKey(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ColumnDefinition
 */
const de_ColumnDefinition = (output: any, context: __SerdeContext): ColumnDefinition => {
  return {
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_0ColumnDefinitionList
 */
const de_ColumnDefinitionList = (output: any, context: __SerdeContext): ColumnDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ColumnDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0Comment
 */
const de_Comment = (output: any, context: __SerdeContext): Comment => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0CreateKeyspaceResponse
 */
const de_CreateKeyspaceResponse = (output: any, context: __SerdeContext): CreateKeyspaceResponse => {
  return {
    resourceArn: __expectString(output.resourceArn),
  } as any;
};

/**
 * deserializeAws_json1_0CreateTableResponse
 */
const de_CreateTableResponse = (output: any, context: __SerdeContext): CreateTableResponse => {
  return {
    resourceArn: __expectString(output.resourceArn),
  } as any;
};

/**
 * deserializeAws_json1_0DeleteKeyspaceResponse
 */
const de_DeleteKeyspaceResponse = (output: any, context: __SerdeContext): DeleteKeyspaceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0DeleteTableResponse
 */
const de_DeleteTableResponse = (output: any, context: __SerdeContext): DeleteTableResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0EncryptionSpecification
 */
const de_EncryptionSpecification = (output: any, context: __SerdeContext): EncryptionSpecification => {
  return {
    kmsKeyIdentifier: __expectString(output.kmsKeyIdentifier),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_0GetKeyspaceResponse
 */
const de_GetKeyspaceResponse = (output: any, context: __SerdeContext): GetKeyspaceResponse => {
  return {
    keyspaceName: __expectString(output.keyspaceName),
    resourceArn: __expectString(output.resourceArn),
  } as any;
};

/**
 * deserializeAws_json1_0GetTableResponse
 */
const de_GetTableResponse = (output: any, context: __SerdeContext): GetTableResponse => {
  return {
    capacitySpecification:
      output.capacitySpecification != null
        ? de_CapacitySpecificationSummary(output.capacitySpecification, context)
        : undefined,
    clientSideTimestamps:
      output.clientSideTimestamps != null ? de_ClientSideTimestamps(output.clientSideTimestamps, context) : undefined,
    comment: output.comment != null ? de_Comment(output.comment, context) : undefined,
    creationTimestamp:
      output.creationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTimestamp)))
        : undefined,
    defaultTimeToLive: __expectInt32(output.defaultTimeToLive),
    encryptionSpecification:
      output.encryptionSpecification != null
        ? de_EncryptionSpecification(output.encryptionSpecification, context)
        : undefined,
    keyspaceName: __expectString(output.keyspaceName),
    pointInTimeRecovery:
      output.pointInTimeRecovery != null
        ? de_PointInTimeRecoverySummary(output.pointInTimeRecovery, context)
        : undefined,
    resourceArn: __expectString(output.resourceArn),
    schemaDefinition:
      output.schemaDefinition != null ? de_SchemaDefinition(output.schemaDefinition, context) : undefined,
    status: __expectString(output.status),
    tableName: __expectString(output.tableName),
    ttl: output.ttl != null ? de_TimeToLive(output.ttl, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0KeyspaceSummary
 */
const de_KeyspaceSummary = (output: any, context: __SerdeContext): KeyspaceSummary => {
  return {
    keyspaceName: __expectString(output.keyspaceName),
    resourceArn: __expectString(output.resourceArn),
  } as any;
};

/**
 * deserializeAws_json1_0KeyspaceSummaryList
 */
const de_KeyspaceSummaryList = (output: any, context: __SerdeContext): KeyspaceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_KeyspaceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ListKeyspacesResponse
 */
const de_ListKeyspacesResponse = (output: any, context: __SerdeContext): ListKeyspacesResponse => {
  return {
    keyspaces: output.keyspaces != null ? de_KeyspaceSummaryList(output.keyspaces, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListTablesResponse
 */
const de_ListTablesResponse = (output: any, context: __SerdeContext): ListTablesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    tables: output.tables != null ? de_TableSummaryList(output.tables, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0PartitionKey
 */
const de_PartitionKey = (output: any, context: __SerdeContext): PartitionKey => {
  return {
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0PartitionKeyList
 */
const de_PartitionKeyList = (output: any, context: __SerdeContext): PartitionKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PartitionKey(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0PointInTimeRecoverySummary
 */
const de_PointInTimeRecoverySummary = (output: any, context: __SerdeContext): PointInTimeRecoverySummary => {
  return {
    earliestRestorableTimestamp:
      output.earliestRestorableTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.earliestRestorableTimestamp)))
        : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
    resourceArn: __expectString(output.resourceArn),
  } as any;
};

/**
 * deserializeAws_json1_0RestoreTableResponse
 */
const de_RestoreTableResponse = (output: any, context: __SerdeContext): RestoreTableResponse => {
  return {
    restoredTableARN: __expectString(output.restoredTableARN),
  } as any;
};

/**
 * deserializeAws_json1_0SchemaDefinition
 */
const de_SchemaDefinition = (output: any, context: __SerdeContext): SchemaDefinition => {
  return {
    allColumns: output.allColumns != null ? de_ColumnDefinitionList(output.allColumns, context) : undefined,
    clusteringKeys: output.clusteringKeys != null ? de_ClusteringKeyList(output.clusteringKeys, context) : undefined,
    partitionKeys: output.partitionKeys != null ? de_PartitionKeyList(output.partitionKeys, context) : undefined,
    staticColumns: output.staticColumns != null ? de_StaticColumnList(output.staticColumns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ServiceQuotaExceededException
 */
const de_ServiceQuotaExceededException = (output: any, context: __SerdeContext): ServiceQuotaExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0StaticColumn
 */
const de_StaticColumn = (output: any, context: __SerdeContext): StaticColumn => {
  return {
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0StaticColumnList
 */
const de_StaticColumnList = (output: any, context: __SerdeContext): StaticColumn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StaticColumn(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0TableSummary
 */
const de_TableSummary = (output: any, context: __SerdeContext): TableSummary => {
  return {
    keyspaceName: __expectString(output.keyspaceName),
    resourceArn: __expectString(output.resourceArn),
    tableName: __expectString(output.tableName),
  } as any;
};

/**
 * deserializeAws_json1_0TableSummaryList
 */
const de_TableSummaryList = (output: any, context: __SerdeContext): TableSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TableSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_0TagList
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
 * deserializeAws_json1_0TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0TimeToLive
 */
const de_TimeToLive = (output: any, context: __SerdeContext): TimeToLive => {
  return {
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_0UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0UpdateTableResponse
 */
const de_UpdateTableResponse = (output: any, context: __SerdeContext): UpdateTableResponse => {
  return {
    resourceArn: __expectString(output.resourceArn),
  } as any;
};

/**
 * deserializeAws_json1_0ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `KeyspacesService.${operation}`,
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
