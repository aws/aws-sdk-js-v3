// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
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

import {
  CreateBatchLoadTaskCommandInput,
  CreateBatchLoadTaskCommandOutput,
} from "../commands/CreateBatchLoadTaskCommand";
import { CreateDatabaseCommandInput, CreateDatabaseCommandOutput } from "../commands/CreateDatabaseCommand";
import { CreateTableCommandInput, CreateTableCommandOutput } from "../commands/CreateTableCommand";
import { DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput } from "../commands/DeleteDatabaseCommand";
import { DeleteTableCommandInput, DeleteTableCommandOutput } from "../commands/DeleteTableCommand";
import {
  DescribeBatchLoadTaskCommandInput,
  DescribeBatchLoadTaskCommandOutput,
} from "../commands/DescribeBatchLoadTaskCommand";
import { DescribeDatabaseCommandInput, DescribeDatabaseCommandOutput } from "../commands/DescribeDatabaseCommand";
import { DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput } from "../commands/DescribeEndpointsCommand";
import { DescribeTableCommandInput, DescribeTableCommandOutput } from "../commands/DescribeTableCommand";
import { ListBatchLoadTasksCommandInput, ListBatchLoadTasksCommandOutput } from "../commands/ListBatchLoadTasksCommand";
import { ListDatabasesCommandInput, ListDatabasesCommandOutput } from "../commands/ListDatabasesCommand";
import { ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ResumeBatchLoadTaskCommandInput,
  ResumeBatchLoadTaskCommandOutput,
} from "../commands/ResumeBatchLoadTaskCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateDatabaseCommandInput, UpdateDatabaseCommandOutput } from "../commands/UpdateDatabaseCommand";
import { UpdateTableCommandInput, UpdateTableCommandOutput } from "../commands/UpdateTableCommand";
import { WriteRecordsCommandInput, WriteRecordsCommandOutput } from "../commands/WriteRecordsCommand";
import {
  _Record,
  AccessDeniedException,
  BatchLoadTask,
  BatchLoadTaskDescription,
  ConflictException,
  CreateBatchLoadTaskRequest,
  CreateDatabaseRequest,
  CreateDatabaseResponse,
  CreateTableRequest,
  CreateTableResponse,
  CsvConfiguration,
  Database,
  DataModel,
  DataModelConfiguration,
  DataModelS3Configuration,
  DataSourceConfiguration,
  DataSourceS3Configuration,
  DeleteDatabaseRequest,
  DeleteTableRequest,
  DescribeBatchLoadTaskRequest,
  DescribeBatchLoadTaskResponse,
  DescribeDatabaseRequest,
  DescribeDatabaseResponse,
  DescribeEndpointsRequest,
  DescribeTableRequest,
  DescribeTableResponse,
  Dimension,
  DimensionMapping,
  InternalServerException,
  InvalidEndpointException,
  ListBatchLoadTasksRequest,
  ListBatchLoadTasksResponse,
  ListDatabasesRequest,
  ListDatabasesResponse,
  ListTablesRequest,
  ListTablesResponse,
  ListTagsForResourceRequest,
  MagneticStoreRejectedDataLocation,
  MagneticStoreWriteProperties,
  MeasureValue,
  MixedMeasureMapping,
  MultiMeasureAttributeMapping,
  MultiMeasureMappings,
  PartitionKey,
  RejectedRecordsException,
  ReportConfiguration,
  ReportS3Configuration,
  ResourceNotFoundException,
  ResumeBatchLoadTaskRequest,
  RetentionProperties,
  S3Configuration,
  Schema,
  ServiceQuotaExceededException,
  Table,
  Tag,
  TagResourceRequest,
  ThrottlingException,
  UntagResourceRequest,
  UpdateDatabaseRequest,
  UpdateDatabaseResponse,
  UpdateTableRequest,
  UpdateTableResponse,
  ValidationException,
  WriteRecordsRequest,
} from "../models/models_0";
import { TimestreamWriteServiceException as __BaseException } from "../models/TimestreamWriteServiceException";

/**
 * serializeAws_json1_0CreateBatchLoadTaskCommand
 */
export const se_CreateBatchLoadTaskCommand = async (
  input: CreateBatchLoadTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBatchLoadTask");
  let body: any;
  body = JSON.stringify(se_CreateBatchLoadTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateDatabaseCommand
 */
export const se_CreateDatabaseCommand = async (
  input: CreateDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDatabase");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteDatabaseCommand
 */
export const se_DeleteDatabaseCommand = async (
  input: DeleteDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDatabase");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeBatchLoadTaskCommand
 */
export const se_DescribeBatchLoadTaskCommand = async (
  input: DescribeBatchLoadTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeBatchLoadTask");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeDatabaseCommand
 */
export const se_DescribeDatabaseCommand = async (
  input: DescribeDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDatabase");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeEndpointsCommand
 */
export const se_DescribeEndpointsCommand = async (
  input: DescribeEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEndpoints");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeTableCommand
 */
export const se_DescribeTableCommand = async (
  input: DescribeTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTable");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListBatchLoadTasksCommand
 */
export const se_ListBatchLoadTasksCommand = async (
  input: ListBatchLoadTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBatchLoadTasks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDatabasesCommand
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
 * serializeAws_json1_0ListTablesCommand
 */
export const se_ListTablesCommand = async (
  input: ListTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTables");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ResumeBatchLoadTaskCommand
 */
export const se_ResumeBatchLoadTaskCommand = async (
  input: ResumeBatchLoadTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResumeBatchLoadTask");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateDatabaseCommand
 */
export const se_UpdateDatabaseCommand = async (
  input: UpdateDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDatabase");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0WriteRecordsCommand
 */
export const se_WriteRecordsCommand = async (
  input: WriteRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("WriteRecords");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0CreateBatchLoadTaskCommand
 */
export const de_CreateBatchLoadTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchLoadTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBatchLoadTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateBatchLoadTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateBatchLoadTaskCommandError
 */
const de_CreateBatchLoadTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchLoadTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamwrite#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.timestreamwrite#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamwrite#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamwrite#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.timestreamwrite#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamwrite#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamwrite#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateDatabaseCommand
 */
export const de_CreateDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDatabaseResponse(data, context);
  const response: CreateDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateDatabaseCommandError
 */
const de_CreateDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamwrite#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.timestreamwrite#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamwrite#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamwrite#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.timestreamwrite#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamwrite#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamwrite#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  return response;
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
    case "com.amazonaws.timestreamwrite#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.timestreamwrite#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamwrite#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamwrite#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.timestreamwrite#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamwrite#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamwrite#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteDatabaseCommand
 */
export const de_DeleteDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDatabaseCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteDatabaseCommandError
 */
const de_DeleteDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamwrite#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamwrite#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamwrite#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamwrite#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamwrite#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteTableCommand
 */
export const de_DeleteTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTableCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTableCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
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
    case "com.amazonaws.timestreamwrite#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamwrite#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamwrite#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamwrite#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamwrite#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeBatchLoadTaskCommand
 */
export const de_DescribeBatchLoadTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBatchLoadTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeBatchLoadTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBatchLoadTaskResponse(data, context);
  const response: DescribeBatchLoadTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeBatchLoadTaskCommandError
 */
const de_DescribeBatchLoadTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBatchLoadTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamwrite#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamwrite#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamwrite#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamwrite#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeDatabaseCommand
 */
export const de_DescribeDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDatabaseResponse(data, context);
  const response: DescribeDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeDatabaseCommandError
 */
const de_DescribeDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamwrite#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamwrite#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamwrite#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamwrite#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamwrite#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeEndpointsCommand
 */
export const de_DescribeEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeEndpointsCommandError
 */
const de_DescribeEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.timestreamwrite#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamwrite#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamwrite#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeTableCommand
 */
export const de_DescribeTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTableResponse(data, context);
  const response: DescribeTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeTableCommandError
 */
const de_DescribeTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamwrite#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamwrite#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamwrite#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamwrite#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamwrite#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListBatchLoadTasksCommand
 */
export const de_ListBatchLoadTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBatchLoadTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListBatchLoadTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBatchLoadTasksResponse(data, context);
  const response: ListBatchLoadTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListBatchLoadTasksCommandError
 */
const de_ListBatchLoadTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBatchLoadTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamwrite#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamwrite#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamwrite#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamwrite#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamwrite#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListDatabasesCommand
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
  contents = de_ListDatabasesResponse(data, context);
  const response: ListDatabasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListDatabasesCommandError
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
    case "AccessDeniedException":
    case "com.amazonaws.timestreamwrite#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamwrite#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamwrite#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamwrite#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamwrite#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  return response;
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
    case "com.amazonaws.timestreamwrite#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamwrite#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamwrite#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamwrite#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamwrite#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamwrite#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamwrite#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamwrite#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ResumeBatchLoadTaskCommand
 */
export const de_ResumeBatchLoadTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeBatchLoadTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResumeBatchLoadTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ResumeBatchLoadTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ResumeBatchLoadTaskCommandError
 */
const de_ResumeBatchLoadTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeBatchLoadTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamwrite#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamwrite#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamwrite#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamwrite#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamwrite#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamwrite#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.timestreamwrite#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamwrite#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamwrite#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamwrite#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.timestreamwrite#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamwrite#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamwrite#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateDatabaseCommand
 */
export const de_UpdateDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatabaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDatabaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDatabaseResponse(data, context);
  const response: UpdateDatabaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateDatabaseCommandError
 */
const de_UpdateDatabaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatabaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamwrite#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamwrite#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamwrite#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.timestreamwrite#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamwrite#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamwrite#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  return response;
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
    case "com.amazonaws.timestreamwrite#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamwrite#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamwrite#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamwrite#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamwrite#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0WriteRecordsCommand
 */
export const de_WriteRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<WriteRecordsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_WriteRecordsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: WriteRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0WriteRecordsCommandError
 */
const de_WriteRecordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<WriteRecordsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamwrite#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamwrite#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamwrite#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "RejectedRecordsException":
    case "com.amazonaws.timestreamwrite#RejectedRecordsException":
      throw await de_RejectedRecordsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamwrite#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamwrite#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamwrite#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidEndpointExceptionRes
 */
const de_InvalidEndpointExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEndpointException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidEndpointException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0RejectedRecordsExceptionRes
 */
const de_RejectedRecordsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RejectedRecordsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new RejectedRecordsException({
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ThrottlingException({
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
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_0CreateBatchLoadTaskRequest
 */
const se_CreateBatchLoadTaskRequest = (input: CreateBatchLoadTaskRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataModelConfiguration: _json,
    DataSourceConfiguration: _json,
    RecordVersion: [],
    ReportConfiguration: _json,
    TargetDatabaseName: [],
    TargetTableName: [],
  });
};

// se_CreateDatabaseRequest omitted.

// se_CreateTableRequest omitted.

// se_CsvConfiguration omitted.

// se_DataModel omitted.

// se_DataModelConfiguration omitted.

// se_DataModelS3Configuration omitted.

// se_DataSourceConfiguration omitted.

// se_DataSourceS3Configuration omitted.

// se_DeleteDatabaseRequest omitted.

// se_DeleteTableRequest omitted.

// se_DescribeBatchLoadTaskRequest omitted.

// se_DescribeDatabaseRequest omitted.

// se_DescribeEndpointsRequest omitted.

// se_DescribeTableRequest omitted.

// se_Dimension omitted.

// se_DimensionMapping omitted.

// se_DimensionMappings omitted.

// se_Dimensions omitted.

// se_ListBatchLoadTasksRequest omitted.

// se_ListDatabasesRequest omitted.

// se_ListTablesRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_MagneticStoreRejectedDataLocation omitted.

// se_MagneticStoreWriteProperties omitted.

// se_MeasureValue omitted.

// se_MeasureValues omitted.

// se_MixedMeasureMapping omitted.

// se_MixedMeasureMappingList omitted.

// se_MultiMeasureAttributeMapping omitted.

// se_MultiMeasureAttributeMappingList omitted.

// se_MultiMeasureMappings omitted.

// se_PartitionKey omitted.

// se_PartitionKeyList omitted.

// se__Record omitted.

// se_Records omitted.

// se_ReportConfiguration omitted.

// se_ReportS3Configuration omitted.

// se_ResumeBatchLoadTaskRequest omitted.

// se_RetentionProperties omitted.

// se_S3Configuration omitted.

// se_Schema omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateDatabaseRequest omitted.

// se_UpdateTableRequest omitted.

// se_WriteRecordsRequest omitted.

// de_AccessDeniedException omitted.

// de_BatchLoadProgressReport omitted.

/**
 * deserializeAws_json1_0BatchLoadTask
 */
const de_BatchLoadTask = (output: any, context: __SerdeContext): BatchLoadTask => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatabaseName: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResumableUntil: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TableName: __expectString,
    TaskId: __expectString,
    TaskStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0BatchLoadTaskDescription
 */
const de_BatchLoadTaskDescription = (output: any, context: __SerdeContext): BatchLoadTaskDescription => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataModelConfiguration: _json,
    DataSourceConfiguration: _json,
    ErrorMessage: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProgressReport: _json,
    RecordVersion: __expectLong,
    ReportConfiguration: _json,
    ResumableUntil: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TargetDatabaseName: __expectString,
    TargetTableName: __expectString,
    TaskId: __expectString,
    TaskStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0BatchLoadTaskList
 */
const de_BatchLoadTaskList = (output: any, context: __SerdeContext): BatchLoadTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchLoadTask(entry, context);
    });
  return retVal;
};

// de_ConflictException omitted.

// de_CreateBatchLoadTaskResponse omitted.

/**
 * deserializeAws_json1_0CreateDatabaseResponse
 */
const de_CreateDatabaseResponse = (output: any, context: __SerdeContext): CreateDatabaseResponse => {
  return take(output, {
    Database: (_: any) => de_Database(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CreateTableResponse
 */
const de_CreateTableResponse = (output: any, context: __SerdeContext): CreateTableResponse => {
  return take(output, {
    Table: (_: any) => de_Table(_, context),
  }) as any;
};

// de_CsvConfiguration omitted.

/**
 * deserializeAws_json1_0Database
 */
const de_Database = (output: any, context: __SerdeContext): Database => {
  return take(output, {
    Arn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatabaseName: __expectString,
    KmsKeyId: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TableCount: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_0DatabaseList
 */
const de_DatabaseList = (output: any, context: __SerdeContext): Database[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Database(entry, context);
    });
  return retVal;
};

// de_DataModel omitted.

// de_DataModelConfiguration omitted.

// de_DataModelS3Configuration omitted.

// de_DataSourceConfiguration omitted.

// de_DataSourceS3Configuration omitted.

/**
 * deserializeAws_json1_0DescribeBatchLoadTaskResponse
 */
const de_DescribeBatchLoadTaskResponse = (output: any, context: __SerdeContext): DescribeBatchLoadTaskResponse => {
  return take(output, {
    BatchLoadTaskDescription: (_: any) => de_BatchLoadTaskDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeDatabaseResponse
 */
const de_DescribeDatabaseResponse = (output: any, context: __SerdeContext): DescribeDatabaseResponse => {
  return take(output, {
    Database: (_: any) => de_Database(_, context),
  }) as any;
};

// de_DescribeEndpointsResponse omitted.

/**
 * deserializeAws_json1_0DescribeTableResponse
 */
const de_DescribeTableResponse = (output: any, context: __SerdeContext): DescribeTableResponse => {
  return take(output, {
    Table: (_: any) => de_Table(_, context),
  }) as any;
};

// de_DimensionMapping omitted.

// de_DimensionMappings omitted.

// de_Endpoint omitted.

// de_Endpoints omitted.

// de_InternalServerException omitted.

// de_InvalidEndpointException omitted.

/**
 * deserializeAws_json1_0ListBatchLoadTasksResponse
 */
const de_ListBatchLoadTasksResponse = (output: any, context: __SerdeContext): ListBatchLoadTasksResponse => {
  return take(output, {
    BatchLoadTasks: (_: any) => de_BatchLoadTaskList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListDatabasesResponse
 */
const de_ListDatabasesResponse = (output: any, context: __SerdeContext): ListDatabasesResponse => {
  return take(output, {
    Databases: (_: any) => de_DatabaseList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListTablesResponse
 */
const de_ListTablesResponse = (output: any, context: __SerdeContext): ListTablesResponse => {
  return take(output, {
    NextToken: __expectString,
    Tables: (_: any) => de_TableList(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

// de_MagneticStoreRejectedDataLocation omitted.

// de_MagneticStoreWriteProperties omitted.

// de_MixedMeasureMapping omitted.

// de_MixedMeasureMappingList omitted.

// de_MultiMeasureAttributeMapping omitted.

// de_MultiMeasureAttributeMappingList omitted.

// de_MultiMeasureMappings omitted.

// de_PartitionKey omitted.

// de_PartitionKeyList omitted.

// de_RecordsIngested omitted.

// de_RejectedRecord omitted.

// de_RejectedRecords omitted.

// de_RejectedRecordsException omitted.

// de_ReportConfiguration omitted.

// de_ReportS3Configuration omitted.

// de_ResourceNotFoundException omitted.

// de_ResumeBatchLoadTaskResponse omitted.

// de_RetentionProperties omitted.

// de_S3Configuration omitted.

// de_Schema omitted.

// de_ServiceQuotaExceededException omitted.

/**
 * deserializeAws_json1_0Table
 */
const de_Table = (output: any, context: __SerdeContext): Table => {
  return take(output, {
    Arn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatabaseName: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MagneticStoreWriteProperties: _json,
    RetentionProperties: _json,
    Schema: _json,
    TableName: __expectString,
    TableStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0TableList
 */
const de_TableList = (output: any, context: __SerdeContext): Table[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Table(entry, context);
    });
  return retVal;
};

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_ThrottlingException omitted.

// de_UntagResourceResponse omitted.

/**
 * deserializeAws_json1_0UpdateDatabaseResponse
 */
const de_UpdateDatabaseResponse = (output: any, context: __SerdeContext): UpdateDatabaseResponse => {
  return take(output, {
    Database: (_: any) => de_Database(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateTableResponse
 */
const de_UpdateTableResponse = (output: any, context: __SerdeContext): UpdateTableResponse => {
  return take(output, {
    Table: (_: any) => de_Table(_, context),
  }) as any;
};

// de_ValidationException omitted.

// de_WriteRecordsResponse omitted.

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
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `Timestream_20181101.${operation}`,
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
