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
  BatchLoadProgressReport,
  BatchLoadTask,
  BatchLoadTaskDescription,
  ConflictException,
  CreateBatchLoadTaskRequest,
  CreateBatchLoadTaskResponse,
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
  DescribeEndpointsResponse,
  DescribeTableRequest,
  DescribeTableResponse,
  Dimension,
  DimensionMapping,
  Endpoint,
  InternalServerException,
  InvalidEndpointException,
  ListBatchLoadTasksRequest,
  ListBatchLoadTasksResponse,
  ListDatabasesRequest,
  ListDatabasesResponse,
  ListTablesRequest,
  ListTablesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  MagneticStoreRejectedDataLocation,
  MagneticStoreWriteProperties,
  MeasureValue,
  MixedMeasureMapping,
  MultiMeasureAttributeMapping,
  MultiMeasureMappings,
  RecordsIngested,
  RejectedRecord,
  RejectedRecordsException,
  ReportConfiguration,
  ReportS3Configuration,
  ResourceNotFoundException,
  ResumeBatchLoadTaskRequest,
  ResumeBatchLoadTaskResponse,
  RetentionProperties,
  S3Configuration,
  ServiceQuotaExceededException,
  Table,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  ThrottlingException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateDatabaseRequest,
  UpdateDatabaseResponse,
  UpdateTableRequest,
  UpdateTableResponse,
  ValidationException,
  WriteRecordsRequest,
  WriteRecordsResponse,
} from "../models/models_0";
import { TimestreamWriteServiceException as __BaseException } from "../models/TimestreamWriteServiceException";

/**
 * serializeAws_json1_0CreateBatchLoadTaskCommand
 */
export const se_CreateBatchLoadTaskCommand = async (
  input: CreateBatchLoadTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.CreateBatchLoadTask",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.CreateDatabase",
  };
  let body: any;
  body = JSON.stringify(se_CreateDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateTableCommand
 */
export const se_CreateTableCommand = async (
  input: CreateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.CreateTable",
  };
  let body: any;
  body = JSON.stringify(se_CreateTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteDatabaseCommand
 */
export const se_DeleteDatabaseCommand = async (
  input: DeleteDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.DeleteDatabase",
  };
  let body: any;
  body = JSON.stringify(se_DeleteDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteTableCommand
 */
export const se_DeleteTableCommand = async (
  input: DeleteTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.DeleteTable",
  };
  let body: any;
  body = JSON.stringify(se_DeleteTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeBatchLoadTaskCommand
 */
export const se_DescribeBatchLoadTaskCommand = async (
  input: DescribeBatchLoadTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.DescribeBatchLoadTask",
  };
  let body: any;
  body = JSON.stringify(se_DescribeBatchLoadTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeDatabaseCommand
 */
export const se_DescribeDatabaseCommand = async (
  input: DescribeDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.DescribeDatabase",
  };
  let body: any;
  body = JSON.stringify(se_DescribeDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeEndpointsCommand
 */
export const se_DescribeEndpointsCommand = async (
  input: DescribeEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.DescribeEndpoints",
  };
  let body: any;
  body = JSON.stringify(se_DescribeEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeTableCommand
 */
export const se_DescribeTableCommand = async (
  input: DescribeTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.DescribeTable",
  };
  let body: any;
  body = JSON.stringify(se_DescribeTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListBatchLoadTasksCommand
 */
export const se_ListBatchLoadTasksCommand = async (
  input: ListBatchLoadTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.ListBatchLoadTasks",
  };
  let body: any;
  body = JSON.stringify(se_ListBatchLoadTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDatabasesCommand
 */
export const se_ListDatabasesCommand = async (
  input: ListDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.ListDatabases",
  };
  let body: any;
  body = JSON.stringify(se_ListDatabasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTablesCommand
 */
export const se_ListTablesCommand = async (
  input: ListTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.ListTables",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ResumeBatchLoadTaskCommand
 */
export const se_ResumeBatchLoadTaskCommand = async (
  input: ResumeBatchLoadTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.ResumeBatchLoadTask",
  };
  let body: any;
  body = JSON.stringify(se_ResumeBatchLoadTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.TagResource",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateDatabaseCommand
 */
export const se_UpdateDatabaseCommand = async (
  input: UpdateDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.UpdateDatabase",
  };
  let body: any;
  body = JSON.stringify(se_UpdateDatabaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateTableCommand
 */
export const se_UpdateTableCommand = async (
  input: UpdateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.UpdateTable",
  };
  let body: any;
  body = JSON.stringify(se_UpdateTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0WriteRecordsCommand
 */
export const se_WriteRecordsCommand = async (
  input: WriteRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.WriteRecords",
  };
  let body: any;
  body = JSON.stringify(se_WriteRecordsRequest(input, context));
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
  contents = de_CreateBatchLoadTaskResponse(data, context);
  const response: CreateBatchLoadTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
  await collectBody(output.body, context);
  const response: DeleteTableCommandOutput = {
    $metadata: deserializeMetadata(output),
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeEndpointsResponse(data, context);
  const response: DescribeEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ResumeBatchLoadTaskResponse(data, context);
  const response: ResumeBatchLoadTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_WriteRecordsResponse(data, context);
  const response: WriteRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
 * deserializeAws_json1_0InvalidEndpointExceptionRes
 */
const de_InvalidEndpointExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEndpointException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidEndpointException(body, context);
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
  const deserialized: any = de_RejectedRecordsException(body, context);
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
 * deserializeAws_json1_0ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ThrottlingException(body, context);
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
  const deserialized: any = de_ValidationException(body, context);
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
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataModelConfiguration != null && {
      DataModelConfiguration: se_DataModelConfiguration(input.DataModelConfiguration, context),
    }),
    ...(input.DataSourceConfiguration != null && {
      DataSourceConfiguration: se_DataSourceConfiguration(input.DataSourceConfiguration, context),
    }),
    ...(input.RecordVersion != null && { RecordVersion: input.RecordVersion }),
    ...(input.ReportConfiguration != null && {
      ReportConfiguration: se_ReportConfiguration(input.ReportConfiguration, context),
    }),
    ...(input.TargetDatabaseName != null && { TargetDatabaseName: input.TargetDatabaseName }),
    ...(input.TargetTableName != null && { TargetTableName: input.TargetTableName }),
  };
};

/**
 * serializeAws_json1_0CreateDatabaseRequest
 */
const se_CreateDatabaseRequest = (input: CreateDatabaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateTableRequest
 */
const se_CreateTableRequest = (input: CreateTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.MagneticStoreWriteProperties != null && {
      MagneticStoreWriteProperties: se_MagneticStoreWriteProperties(input.MagneticStoreWriteProperties, context),
    }),
    ...(input.RetentionProperties != null && {
      RetentionProperties: se_RetentionProperties(input.RetentionProperties, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0CsvConfiguration
 */
const se_CsvConfiguration = (input: CsvConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ColumnSeparator != null && { ColumnSeparator: input.ColumnSeparator }),
    ...(input.EscapeChar != null && { EscapeChar: input.EscapeChar }),
    ...(input.NullValue != null && { NullValue: input.NullValue }),
    ...(input.QuoteChar != null && { QuoteChar: input.QuoteChar }),
    ...(input.TrimWhiteSpace != null && { TrimWhiteSpace: input.TrimWhiteSpace }),
  };
};

/**
 * serializeAws_json1_0DataModel
 */
const se_DataModel = (input: DataModel, context: __SerdeContext): any => {
  return {
    ...(input.DimensionMappings != null && {
      DimensionMappings: se_DimensionMappings(input.DimensionMappings, context),
    }),
    ...(input.MeasureNameColumn != null && { MeasureNameColumn: input.MeasureNameColumn }),
    ...(input.MixedMeasureMappings != null && {
      MixedMeasureMappings: se_MixedMeasureMappingList(input.MixedMeasureMappings, context),
    }),
    ...(input.MultiMeasureMappings != null && {
      MultiMeasureMappings: se_MultiMeasureMappings(input.MultiMeasureMappings, context),
    }),
    ...(input.TimeColumn != null && { TimeColumn: input.TimeColumn }),
    ...(input.TimeUnit != null && { TimeUnit: input.TimeUnit }),
  };
};

/**
 * serializeAws_json1_0DataModelConfiguration
 */
const se_DataModelConfiguration = (input: DataModelConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DataModel != null && { DataModel: se_DataModel(input.DataModel, context) }),
    ...(input.DataModelS3Configuration != null && {
      DataModelS3Configuration: se_DataModelS3Configuration(input.DataModelS3Configuration, context),
    }),
  };
};

/**
 * serializeAws_json1_0DataModelS3Configuration
 */
const se_DataModelS3Configuration = (input: DataModelS3Configuration, context: __SerdeContext): any => {
  return {
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.ObjectKey != null && { ObjectKey: input.ObjectKey }),
  };
};

/**
 * serializeAws_json1_0DataSourceConfiguration
 */
const se_DataSourceConfiguration = (input: DataSourceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CsvConfiguration != null && { CsvConfiguration: se_CsvConfiguration(input.CsvConfiguration, context) }),
    ...(input.DataFormat != null && { DataFormat: input.DataFormat }),
    ...(input.DataSourceS3Configuration != null && {
      DataSourceS3Configuration: se_DataSourceS3Configuration(input.DataSourceS3Configuration, context),
    }),
  };
};

/**
 * serializeAws_json1_0DataSourceS3Configuration
 */
const se_DataSourceS3Configuration = (input: DataSourceS3Configuration, context: __SerdeContext): any => {
  return {
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.ObjectKeyPrefix != null && { ObjectKeyPrefix: input.ObjectKeyPrefix }),
  };
};

/**
 * serializeAws_json1_0DeleteDatabaseRequest
 */
const se_DeleteDatabaseRequest = (input: DeleteDatabaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
  };
};

/**
 * serializeAws_json1_0DeleteTableRequest
 */
const se_DeleteTableRequest = (input: DeleteTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0DescribeBatchLoadTaskRequest
 */
const se_DescribeBatchLoadTaskRequest = (input: DescribeBatchLoadTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.TaskId != null && { TaskId: input.TaskId }),
  };
};

/**
 * serializeAws_json1_0DescribeDatabaseRequest
 */
const se_DescribeDatabaseRequest = (input: DescribeDatabaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
  };
};

/**
 * serializeAws_json1_0DescribeEndpointsRequest
 */
const se_DescribeEndpointsRequest = (input: DescribeEndpointsRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_0DescribeTableRequest
 */
const se_DescribeTableRequest = (input: DescribeTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0Dimension
 */
const se_Dimension = (input: Dimension, context: __SerdeContext): any => {
  return {
    ...(input.DimensionValueType != null && { DimensionValueType: input.DimensionValueType }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_0DimensionMapping
 */
const se_DimensionMapping = (input: DimensionMapping, context: __SerdeContext): any => {
  return {
    ...(input.DestinationColumn != null && { DestinationColumn: input.DestinationColumn }),
    ...(input.SourceColumn != null && { SourceColumn: input.SourceColumn }),
  };
};

/**
 * serializeAws_json1_0DimensionMappings
 */
const se_DimensionMappings = (input: DimensionMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DimensionMapping(entry, context);
    });
};

/**
 * serializeAws_json1_0Dimensions
 */
const se_Dimensions = (input: Dimension[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Dimension(entry, context);
    });
};

/**
 * serializeAws_json1_0ListBatchLoadTasksRequest
 */
const se_ListBatchLoadTasksRequest = (input: ListBatchLoadTasksRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TaskStatus != null && { TaskStatus: input.TaskStatus }),
  };
};

/**
 * serializeAws_json1_0ListDatabasesRequest
 */
const se_ListDatabasesRequest = (input: ListDatabasesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0ListTablesRequest
 */
const se_ListTablesRequest = (input: ListTablesRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_0MagneticStoreRejectedDataLocation
 */
const se_MagneticStoreRejectedDataLocation = (
  input: MagneticStoreRejectedDataLocation,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Configuration != null && { S3Configuration: se_S3Configuration(input.S3Configuration, context) }),
  };
};

/**
 * serializeAws_json1_0MagneticStoreWriteProperties
 */
const se_MagneticStoreWriteProperties = (input: MagneticStoreWriteProperties, context: __SerdeContext): any => {
  return {
    ...(input.EnableMagneticStoreWrites != null && { EnableMagneticStoreWrites: input.EnableMagneticStoreWrites }),
    ...(input.MagneticStoreRejectedDataLocation != null && {
      MagneticStoreRejectedDataLocation: se_MagneticStoreRejectedDataLocation(
        input.MagneticStoreRejectedDataLocation,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_0MeasureValue
 */
const se_MeasureValue = (input: MeasureValue, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_0MeasureValues
 */
const se_MeasureValues = (input: MeasureValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MeasureValue(entry, context);
    });
};

/**
 * serializeAws_json1_0MixedMeasureMapping
 */
const se_MixedMeasureMapping = (input: MixedMeasureMapping, context: __SerdeContext): any => {
  return {
    ...(input.MeasureName != null && { MeasureName: input.MeasureName }),
    ...(input.MeasureValueType != null && { MeasureValueType: input.MeasureValueType }),
    ...(input.MultiMeasureAttributeMappings != null && {
      MultiMeasureAttributeMappings: se_MultiMeasureAttributeMappingList(input.MultiMeasureAttributeMappings, context),
    }),
    ...(input.SourceColumn != null && { SourceColumn: input.SourceColumn }),
    ...(input.TargetMeasureName != null && { TargetMeasureName: input.TargetMeasureName }),
  };
};

/**
 * serializeAws_json1_0MixedMeasureMappingList
 */
const se_MixedMeasureMappingList = (input: MixedMeasureMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MixedMeasureMapping(entry, context);
    });
};

/**
 * serializeAws_json1_0MultiMeasureAttributeMapping
 */
const se_MultiMeasureAttributeMapping = (input: MultiMeasureAttributeMapping, context: __SerdeContext): any => {
  return {
    ...(input.MeasureValueType != null && { MeasureValueType: input.MeasureValueType }),
    ...(input.SourceColumn != null && { SourceColumn: input.SourceColumn }),
    ...(input.TargetMultiMeasureAttributeName != null && {
      TargetMultiMeasureAttributeName: input.TargetMultiMeasureAttributeName,
    }),
  };
};

/**
 * serializeAws_json1_0MultiMeasureAttributeMappingList
 */
const se_MultiMeasureAttributeMappingList = (input: MultiMeasureAttributeMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MultiMeasureAttributeMapping(entry, context);
    });
};

/**
 * serializeAws_json1_0MultiMeasureMappings
 */
const se_MultiMeasureMappings = (input: MultiMeasureMappings, context: __SerdeContext): any => {
  return {
    ...(input.MultiMeasureAttributeMappings != null && {
      MultiMeasureAttributeMappings: se_MultiMeasureAttributeMappingList(input.MultiMeasureAttributeMappings, context),
    }),
    ...(input.TargetMultiMeasureName != null && { TargetMultiMeasureName: input.TargetMultiMeasureName }),
  };
};

/**
 * serializeAws_json1_0_Record
 */
const se__Record = (input: _Record, context: __SerdeContext): any => {
  return {
    ...(input.Dimensions != null && { Dimensions: se_Dimensions(input.Dimensions, context) }),
    ...(input.MeasureName != null && { MeasureName: input.MeasureName }),
    ...(input.MeasureValue != null && { MeasureValue: input.MeasureValue }),
    ...(input.MeasureValueType != null && { MeasureValueType: input.MeasureValueType }),
    ...(input.MeasureValues != null && { MeasureValues: se_MeasureValues(input.MeasureValues, context) }),
    ...(input.Time != null && { Time: input.Time }),
    ...(input.TimeUnit != null && { TimeUnit: input.TimeUnit }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_json1_0Records
 */
const se_Records = (input: _Record[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se__Record(entry, context);
    });
};

/**
 * serializeAws_json1_0ReportConfiguration
 */
const se_ReportConfiguration = (input: ReportConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ReportS3Configuration != null && {
      ReportS3Configuration: se_ReportS3Configuration(input.ReportS3Configuration, context),
    }),
  };
};

/**
 * serializeAws_json1_0ReportS3Configuration
 */
const se_ReportS3Configuration = (input: ReportS3Configuration, context: __SerdeContext): any => {
  return {
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.EncryptionOption != null && { EncryptionOption: input.EncryptionOption }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.ObjectKeyPrefix != null && { ObjectKeyPrefix: input.ObjectKeyPrefix }),
  };
};

/**
 * serializeAws_json1_0ResumeBatchLoadTaskRequest
 */
const se_ResumeBatchLoadTaskRequest = (input: ResumeBatchLoadTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.TaskId != null && { TaskId: input.TaskId }),
  };
};

/**
 * serializeAws_json1_0RetentionProperties
 */
const se_RetentionProperties = (input: RetentionProperties, context: __SerdeContext): any => {
  return {
    ...(input.MagneticStoreRetentionPeriodInDays != null && {
      MagneticStoreRetentionPeriodInDays: input.MagneticStoreRetentionPeriodInDays,
    }),
    ...(input.MemoryStoreRetentionPeriodInHours != null && {
      MemoryStoreRetentionPeriodInHours: input.MemoryStoreRetentionPeriodInHours,
    }),
  };
};

/**
 * serializeAws_json1_0S3Configuration
 */
const se_S3Configuration = (input: S3Configuration, context: __SerdeContext): any => {
  return {
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.EncryptionOption != null && { EncryptionOption: input.EncryptionOption }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.ObjectKeyPrefix != null && { ObjectKeyPrefix: input.ObjectKeyPrefix }),
  };
};

/**
 * serializeAws_json1_0Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_0TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
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
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_0UpdateDatabaseRequest
 */
const se_UpdateDatabaseRequest = (input: UpdateDatabaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
  };
};

/**
 * serializeAws_json1_0UpdateTableRequest
 */
const se_UpdateTableRequest = (input: UpdateTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.MagneticStoreWriteProperties != null && {
      MagneticStoreWriteProperties: se_MagneticStoreWriteProperties(input.MagneticStoreWriteProperties, context),
    }),
    ...(input.RetentionProperties != null && {
      RetentionProperties: se_RetentionProperties(input.RetentionProperties, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_0WriteRecordsRequest
 */
const se_WriteRecordsRequest = (input: WriteRecordsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CommonAttributes != null && { CommonAttributes: se__Record(input.CommonAttributes, context) }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Records != null && { Records: se_Records(input.Records, context) }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * deserializeAws_json1_0AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0BatchLoadProgressReport
 */
const de_BatchLoadProgressReport = (output: any, context: __SerdeContext): BatchLoadProgressReport => {
  return {
    BytesMetered: __expectLong(output.BytesMetered),
    FileFailures: __expectLong(output.FileFailures),
    ParseFailures: __expectLong(output.ParseFailures),
    RecordIngestionFailures: __expectLong(output.RecordIngestionFailures),
    RecordsIngested: __expectLong(output.RecordsIngested),
    RecordsProcessed: __expectLong(output.RecordsProcessed),
  } as any;
};

/**
 * deserializeAws_json1_0BatchLoadTask
 */
const de_BatchLoadTask = (output: any, context: __SerdeContext): BatchLoadTask => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DatabaseName: __expectString(output.DatabaseName),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    ResumableUntil:
      output.ResumableUntil != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ResumableUntil)))
        : undefined,
    TableName: __expectString(output.TableName),
    TaskId: __expectString(output.TaskId),
    TaskStatus: __expectString(output.TaskStatus),
  } as any;
};

/**
 * deserializeAws_json1_0BatchLoadTaskDescription
 */
const de_BatchLoadTaskDescription = (output: any, context: __SerdeContext): BatchLoadTaskDescription => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DataModelConfiguration:
      output.DataModelConfiguration != null
        ? de_DataModelConfiguration(output.DataModelConfiguration, context)
        : undefined,
    DataSourceConfiguration:
      output.DataSourceConfiguration != null
        ? de_DataSourceConfiguration(output.DataSourceConfiguration, context)
        : undefined,
    ErrorMessage: __expectString(output.ErrorMessage),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    ProgressReport:
      output.ProgressReport != null ? de_BatchLoadProgressReport(output.ProgressReport, context) : undefined,
    RecordVersion: __expectLong(output.RecordVersion),
    ReportConfiguration:
      output.ReportConfiguration != null ? de_ReportConfiguration(output.ReportConfiguration, context) : undefined,
    ResumableUntil:
      output.ResumableUntil != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ResumableUntil)))
        : undefined,
    TargetDatabaseName: __expectString(output.TargetDatabaseName),
    TargetTableName: __expectString(output.TargetTableName),
    TaskId: __expectString(output.TaskId),
    TaskStatus: __expectString(output.TaskStatus),
  } as any;
};

/**
 * deserializeAws_json1_0BatchLoadTaskList
 */
const de_BatchLoadTaskList = (output: any, context: __SerdeContext): BatchLoadTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchLoadTask(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0CreateBatchLoadTaskResponse
 */
const de_CreateBatchLoadTaskResponse = (output: any, context: __SerdeContext): CreateBatchLoadTaskResponse => {
  return {
    TaskId: __expectString(output.TaskId),
  } as any;
};

/**
 * deserializeAws_json1_0CreateDatabaseResponse
 */
const de_CreateDatabaseResponse = (output: any, context: __SerdeContext): CreateDatabaseResponse => {
  return {
    Database: output.Database != null ? de_Database(output.Database, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateTableResponse
 */
const de_CreateTableResponse = (output: any, context: __SerdeContext): CreateTableResponse => {
  return {
    Table: output.Table != null ? de_Table(output.Table, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CsvConfiguration
 */
const de_CsvConfiguration = (output: any, context: __SerdeContext): CsvConfiguration => {
  return {
    ColumnSeparator: __expectString(output.ColumnSeparator),
    EscapeChar: __expectString(output.EscapeChar),
    NullValue: __expectString(output.NullValue),
    QuoteChar: __expectString(output.QuoteChar),
    TrimWhiteSpace: __expectBoolean(output.TrimWhiteSpace),
  } as any;
};

/**
 * deserializeAws_json1_0Database
 */
const de_Database = (output: any, context: __SerdeContext): Database => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DatabaseName: __expectString(output.DatabaseName),
    KmsKeyId: __expectString(output.KmsKeyId),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    TableCount: __expectLong(output.TableCount),
  } as any;
};

/**
 * deserializeAws_json1_0DatabaseList
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
 * deserializeAws_json1_0DataModel
 */
const de_DataModel = (output: any, context: __SerdeContext): DataModel => {
  return {
    DimensionMappings:
      output.DimensionMappings != null ? de_DimensionMappings(output.DimensionMappings, context) : undefined,
    MeasureNameColumn: __expectString(output.MeasureNameColumn),
    MixedMeasureMappings:
      output.MixedMeasureMappings != null
        ? de_MixedMeasureMappingList(output.MixedMeasureMappings, context)
        : undefined,
    MultiMeasureMappings:
      output.MultiMeasureMappings != null ? de_MultiMeasureMappings(output.MultiMeasureMappings, context) : undefined,
    TimeColumn: __expectString(output.TimeColumn),
    TimeUnit: __expectString(output.TimeUnit),
  } as any;
};

/**
 * deserializeAws_json1_0DataModelConfiguration
 */
const de_DataModelConfiguration = (output: any, context: __SerdeContext): DataModelConfiguration => {
  return {
    DataModel: output.DataModel != null ? de_DataModel(output.DataModel, context) : undefined,
    DataModelS3Configuration:
      output.DataModelS3Configuration != null
        ? de_DataModelS3Configuration(output.DataModelS3Configuration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DataModelS3Configuration
 */
const de_DataModelS3Configuration = (output: any, context: __SerdeContext): DataModelS3Configuration => {
  return {
    BucketName: __expectString(output.BucketName),
    ObjectKey: __expectString(output.ObjectKey),
  } as any;
};

/**
 * deserializeAws_json1_0DataSourceConfiguration
 */
const de_DataSourceConfiguration = (output: any, context: __SerdeContext): DataSourceConfiguration => {
  return {
    CsvConfiguration:
      output.CsvConfiguration != null ? de_CsvConfiguration(output.CsvConfiguration, context) : undefined,
    DataFormat: __expectString(output.DataFormat),
    DataSourceS3Configuration:
      output.DataSourceS3Configuration != null
        ? de_DataSourceS3Configuration(output.DataSourceS3Configuration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DataSourceS3Configuration
 */
const de_DataSourceS3Configuration = (output: any, context: __SerdeContext): DataSourceS3Configuration => {
  return {
    BucketName: __expectString(output.BucketName),
    ObjectKeyPrefix: __expectString(output.ObjectKeyPrefix),
  } as any;
};

/**
 * deserializeAws_json1_0DescribeBatchLoadTaskResponse
 */
const de_DescribeBatchLoadTaskResponse = (output: any, context: __SerdeContext): DescribeBatchLoadTaskResponse => {
  return {
    BatchLoadTaskDescription:
      output.BatchLoadTaskDescription != null
        ? de_BatchLoadTaskDescription(output.BatchLoadTaskDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeDatabaseResponse
 */
const de_DescribeDatabaseResponse = (output: any, context: __SerdeContext): DescribeDatabaseResponse => {
  return {
    Database: output.Database != null ? de_Database(output.Database, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeEndpointsResponse
 */
const de_DescribeEndpointsResponse = (output: any, context: __SerdeContext): DescribeEndpointsResponse => {
  return {
    Endpoints: output.Endpoints != null ? de_Endpoints(output.Endpoints, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeTableResponse
 */
const de_DescribeTableResponse = (output: any, context: __SerdeContext): DescribeTableResponse => {
  return {
    Table: output.Table != null ? de_Table(output.Table, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DimensionMapping
 */
const de_DimensionMapping = (output: any, context: __SerdeContext): DimensionMapping => {
  return {
    DestinationColumn: __expectString(output.DestinationColumn),
    SourceColumn: __expectString(output.SourceColumn),
  } as any;
};

/**
 * deserializeAws_json1_0DimensionMappings
 */
const de_DimensionMappings = (output: any, context: __SerdeContext): DimensionMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DimensionMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0Endpoint
 */
const de_Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return {
    Address: __expectString(output.Address),
    CachePeriodInMinutes: __expectLong(output.CachePeriodInMinutes),
  } as any;
};

/**
 * deserializeAws_json1_0Endpoints
 */
const de_Endpoints = (output: any, context: __SerdeContext): Endpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Endpoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidEndpointException
 */
const de_InvalidEndpointException = (output: any, context: __SerdeContext): InvalidEndpointException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ListBatchLoadTasksResponse
 */
const de_ListBatchLoadTasksResponse = (output: any, context: __SerdeContext): ListBatchLoadTasksResponse => {
  return {
    BatchLoadTasks: output.BatchLoadTasks != null ? de_BatchLoadTaskList(output.BatchLoadTasks, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListDatabasesResponse
 */
const de_ListDatabasesResponse = (output: any, context: __SerdeContext): ListDatabasesResponse => {
  return {
    Databases: output.Databases != null ? de_DatabaseList(output.Databases, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListTablesResponse
 */
const de_ListTablesResponse = (output: any, context: __SerdeContext): ListTablesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tables: output.Tables != null ? de_TableList(output.Tables, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0MagneticStoreRejectedDataLocation
 */
const de_MagneticStoreRejectedDataLocation = (
  output: any,
  context: __SerdeContext
): MagneticStoreRejectedDataLocation => {
  return {
    S3Configuration: output.S3Configuration != null ? de_S3Configuration(output.S3Configuration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0MagneticStoreWriteProperties
 */
const de_MagneticStoreWriteProperties = (output: any, context: __SerdeContext): MagneticStoreWriteProperties => {
  return {
    EnableMagneticStoreWrites: __expectBoolean(output.EnableMagneticStoreWrites),
    MagneticStoreRejectedDataLocation:
      output.MagneticStoreRejectedDataLocation != null
        ? de_MagneticStoreRejectedDataLocation(output.MagneticStoreRejectedDataLocation, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0MixedMeasureMapping
 */
const de_MixedMeasureMapping = (output: any, context: __SerdeContext): MixedMeasureMapping => {
  return {
    MeasureName: __expectString(output.MeasureName),
    MeasureValueType: __expectString(output.MeasureValueType),
    MultiMeasureAttributeMappings:
      output.MultiMeasureAttributeMappings != null
        ? de_MultiMeasureAttributeMappingList(output.MultiMeasureAttributeMappings, context)
        : undefined,
    SourceColumn: __expectString(output.SourceColumn),
    TargetMeasureName: __expectString(output.TargetMeasureName),
  } as any;
};

/**
 * deserializeAws_json1_0MixedMeasureMappingList
 */
const de_MixedMeasureMappingList = (output: any, context: __SerdeContext): MixedMeasureMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MixedMeasureMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0MultiMeasureAttributeMapping
 */
const de_MultiMeasureAttributeMapping = (output: any, context: __SerdeContext): MultiMeasureAttributeMapping => {
  return {
    MeasureValueType: __expectString(output.MeasureValueType),
    SourceColumn: __expectString(output.SourceColumn),
    TargetMultiMeasureAttributeName: __expectString(output.TargetMultiMeasureAttributeName),
  } as any;
};

/**
 * deserializeAws_json1_0MultiMeasureAttributeMappingList
 */
const de_MultiMeasureAttributeMappingList = (output: any, context: __SerdeContext): MultiMeasureAttributeMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MultiMeasureAttributeMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0MultiMeasureMappings
 */
const de_MultiMeasureMappings = (output: any, context: __SerdeContext): MultiMeasureMappings => {
  return {
    MultiMeasureAttributeMappings:
      output.MultiMeasureAttributeMappings != null
        ? de_MultiMeasureAttributeMappingList(output.MultiMeasureAttributeMappings, context)
        : undefined,
    TargetMultiMeasureName: __expectString(output.TargetMultiMeasureName),
  } as any;
};

/**
 * deserializeAws_json1_0RecordsIngested
 */
const de_RecordsIngested = (output: any, context: __SerdeContext): RecordsIngested => {
  return {
    MagneticStore: __expectInt32(output.MagneticStore),
    MemoryStore: __expectInt32(output.MemoryStore),
    Total: __expectInt32(output.Total),
  } as any;
};

/**
 * deserializeAws_json1_0RejectedRecord
 */
const de_RejectedRecord = (output: any, context: __SerdeContext): RejectedRecord => {
  return {
    ExistingVersion: __expectLong(output.ExistingVersion),
    Reason: __expectString(output.Reason),
    RecordIndex: __expectInt32(output.RecordIndex),
  } as any;
};

/**
 * deserializeAws_json1_0RejectedRecords
 */
const de_RejectedRecords = (output: any, context: __SerdeContext): RejectedRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RejectedRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0RejectedRecordsException
 */
const de_RejectedRecordsException = (output: any, context: __SerdeContext): RejectedRecordsException => {
  return {
    Message: __expectString(output.Message),
    RejectedRecords: output.RejectedRecords != null ? de_RejectedRecords(output.RejectedRecords, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ReportConfiguration
 */
const de_ReportConfiguration = (output: any, context: __SerdeContext): ReportConfiguration => {
  return {
    ReportS3Configuration:
      output.ReportS3Configuration != null
        ? de_ReportS3Configuration(output.ReportS3Configuration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ReportS3Configuration
 */
const de_ReportS3Configuration = (output: any, context: __SerdeContext): ReportS3Configuration => {
  return {
    BucketName: __expectString(output.BucketName),
    EncryptionOption: __expectString(output.EncryptionOption),
    KmsKeyId: __expectString(output.KmsKeyId),
    ObjectKeyPrefix: __expectString(output.ObjectKeyPrefix),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ResumeBatchLoadTaskResponse
 */
const de_ResumeBatchLoadTaskResponse = (output: any, context: __SerdeContext): ResumeBatchLoadTaskResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0RetentionProperties
 */
const de_RetentionProperties = (output: any, context: __SerdeContext): RetentionProperties => {
  return {
    MagneticStoreRetentionPeriodInDays: __expectLong(output.MagneticStoreRetentionPeriodInDays),
    MemoryStoreRetentionPeriodInHours: __expectLong(output.MemoryStoreRetentionPeriodInHours),
  } as any;
};

/**
 * deserializeAws_json1_0S3Configuration
 */
const de_S3Configuration = (output: any, context: __SerdeContext): S3Configuration => {
  return {
    BucketName: __expectString(output.BucketName),
    EncryptionOption: __expectString(output.EncryptionOption),
    KmsKeyId: __expectString(output.KmsKeyId),
    ObjectKeyPrefix: __expectString(output.ObjectKeyPrefix),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceQuotaExceededException
 */
const de_ServiceQuotaExceededException = (output: any, context: __SerdeContext): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0Table
 */
const de_Table = (output: any, context: __SerdeContext): Table => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DatabaseName: __expectString(output.DatabaseName),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    MagneticStoreWriteProperties:
      output.MagneticStoreWriteProperties != null
        ? de_MagneticStoreWriteProperties(output.MagneticStoreWriteProperties, context)
        : undefined,
    RetentionProperties:
      output.RetentionProperties != null ? de_RetentionProperties(output.RetentionProperties, context) : undefined,
    TableName: __expectString(output.TableName),
    TableStatus: __expectString(output.TableStatus),
  } as any;
};

/**
 * deserializeAws_json1_0TableList
 */
const de_TableList = (output: any, context: __SerdeContext): Table[] => {
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
 * deserializeAws_json1_0Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
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
 * deserializeAws_json1_0ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0UpdateDatabaseResponse
 */
const de_UpdateDatabaseResponse = (output: any, context: __SerdeContext): UpdateDatabaseResponse => {
  return {
    Database: output.Database != null ? de_Database(output.Database, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateTableResponse
 */
const de_UpdateTableResponse = (output: any, context: __SerdeContext): UpdateTableResponse => {
  return {
    Table: output.Table != null ? de_Table(output.Table, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0WriteRecordsResponse
 */
const de_WriteRecordsResponse = (output: any, context: __SerdeContext): WriteRecordsResponse => {
  return {
    RecordsIngested: output.RecordsIngested != null ? de_RecordsIngested(output.RecordsIngested, context) : undefined,
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
