// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
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

import { CancelQueryCommandInput, CancelQueryCommandOutput } from "../commands/CancelQueryCommand";
import {
  CreateScheduledQueryCommandInput,
  CreateScheduledQueryCommandOutput,
} from "../commands/CreateScheduledQueryCommand";
import {
  DeleteScheduledQueryCommandInput,
  DeleteScheduledQueryCommandOutput,
} from "../commands/DeleteScheduledQueryCommand";
import { DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput } from "../commands/DescribeEndpointsCommand";
import {
  DescribeScheduledQueryCommandInput,
  DescribeScheduledQueryCommandOutput,
} from "../commands/DescribeScheduledQueryCommand";
import {
  ExecuteScheduledQueryCommandInput,
  ExecuteScheduledQueryCommandOutput,
} from "../commands/ExecuteScheduledQueryCommand";
import {
  ListScheduledQueriesCommandInput,
  ListScheduledQueriesCommandOutput,
} from "../commands/ListScheduledQueriesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PrepareQueryCommandInput, PrepareQueryCommandOutput } from "../commands/PrepareQueryCommand";
import { QueryCommandInput, QueryCommandOutput } from "../commands/QueryCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateScheduledQueryCommandInput,
  UpdateScheduledQueryCommandOutput,
} from "../commands/UpdateScheduledQueryCommand";
import {
  AccessDeniedException,
  CancelQueryRequest,
  CancelQueryResponse,
  ColumnInfo,
  ConflictException,
  CreateScheduledQueryRequest,
  CreateScheduledQueryResponse,
  Datum,
  DeleteScheduledQueryRequest,
  DescribeEndpointsRequest,
  DescribeEndpointsResponse,
  DescribeScheduledQueryRequest,
  DescribeScheduledQueryResponse,
  DimensionMapping,
  Endpoint,
  ErrorReportConfiguration,
  ErrorReportLocation,
  ExecuteScheduledQueryRequest,
  ExecutionStats,
  InternalServerException,
  InvalidEndpointException,
  ListScheduledQueriesRequest,
  ListScheduledQueriesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  MixedMeasureMapping,
  MultiMeasureAttributeMapping,
  MultiMeasureMappings,
  NotificationConfiguration,
  ParameterMapping,
  PrepareQueryRequest,
  PrepareQueryResponse,
  QueryExecutionException,
  QueryRequest,
  QueryResponse,
  QueryStatus,
  ResourceNotFoundException,
  Row,
  S3Configuration,
  S3ReportLocation,
  ScheduleConfiguration,
  ScheduledQuery,
  ScheduledQueryDescription,
  ScheduledQueryRunSummary,
  SelectColumn,
  ServiceQuotaExceededException,
  SnsConfiguration,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TargetConfiguration,
  TargetDestination,
  ThrottlingException,
  TimeSeriesDataPoint,
  TimestreamConfiguration,
  TimestreamDestination,
  Type,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateScheduledQueryRequest,
  ValidationException,
} from "../models/models_0";
import { TimestreamQueryServiceException as __BaseException } from "../models/TimestreamQueryServiceException";

/**
 * serializeAws_json1_0CancelQueryCommand
 */
export const se_CancelQueryCommand = async (
  input: CancelQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelQuery");
  let body: any;
  body = JSON.stringify(se_CancelQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateScheduledQueryCommand
 */
export const se_CreateScheduledQueryCommand = async (
  input: CreateScheduledQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateScheduledQuery");
  let body: any;
  body = JSON.stringify(se_CreateScheduledQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteScheduledQueryCommand
 */
export const se_DeleteScheduledQueryCommand = async (
  input: DeleteScheduledQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteScheduledQuery");
  let body: any;
  body = JSON.stringify(se_DeleteScheduledQueryRequest(input, context));
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
  body = JSON.stringify(se_DescribeEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeScheduledQueryCommand
 */
export const se_DescribeScheduledQueryCommand = async (
  input: DescribeScheduledQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeScheduledQuery");
  let body: any;
  body = JSON.stringify(se_DescribeScheduledQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ExecuteScheduledQueryCommand
 */
export const se_ExecuteScheduledQueryCommand = async (
  input: ExecuteScheduledQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExecuteScheduledQuery");
  let body: any;
  body = JSON.stringify(se_ExecuteScheduledQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListScheduledQueriesCommand
 */
export const se_ListScheduledQueriesCommand = async (
  input: ListScheduledQueriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListScheduledQueries");
  let body: any;
  body = JSON.stringify(se_ListScheduledQueriesRequest(input, context));
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
 * serializeAws_json1_0PrepareQueryCommand
 */
export const se_PrepareQueryCommand = async (
  input: PrepareQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PrepareQuery");
  let body: any;
  body = JSON.stringify(se_PrepareQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0QueryCommand
 */
export const se_QueryCommand = async (input: QueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("Query");
  let body: any;
  body = JSON.stringify(se_QueryRequest(input, context));
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
 * serializeAws_json1_0UpdateScheduledQueryCommand
 */
export const se_UpdateScheduledQueryCommand = async (
  input: UpdateScheduledQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateScheduledQuery");
  let body: any;
  body = JSON.stringify(se_UpdateScheduledQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0CancelQueryCommand
 */
export const de_CancelQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelQueryResponse(data, context);
  const response: CancelQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CancelQueryCommandError
 */
const de_CancelQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamquery#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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
 * deserializeAws_json1_0CreateScheduledQueryCommand
 */
export const de_CreateScheduledQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScheduledQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateScheduledQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateScheduledQueryResponse(data, context);
  const response: CreateScheduledQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateScheduledQueryCommandError
 */
const de_CreateScheduledQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScheduledQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamquery#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.timestreamquery#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.timestreamquery#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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
 * deserializeAws_json1_0DeleteScheduledQueryCommand
 */
export const de_DeleteScheduledQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteScheduledQueryCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteScheduledQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteScheduledQueryCommandError
 */
const de_DeleteScheduledQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamquery#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamquery#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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
    case "com.amazonaws.timestreamquery#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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
 * deserializeAws_json1_0DescribeScheduledQueryCommand
 */
export const de_DescribeScheduledQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeScheduledQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeScheduledQueryResponse(data, context);
  const response: DescribeScheduledQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DescribeScheduledQueryCommandError
 */
const de_DescribeScheduledQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamquery#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamquery#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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
 * deserializeAws_json1_0ExecuteScheduledQueryCommand
 */
export const de_ExecuteScheduledQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteScheduledQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExecuteScheduledQueryCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ExecuteScheduledQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ExecuteScheduledQueryCommandError
 */
const de_ExecuteScheduledQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteScheduledQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamquery#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamquery#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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
 * deserializeAws_json1_0ListScheduledQueriesCommand
 */
export const de_ListScheduledQueriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScheduledQueriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListScheduledQueriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListScheduledQueriesResponse(data, context);
  const response: ListScheduledQueriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListScheduledQueriesCommandError
 */
const de_ListScheduledQueriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScheduledQueriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamquery#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamquery#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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
 * deserializeAws_json1_0PrepareQueryCommand
 */
export const de_PrepareQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PrepareQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PrepareQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PrepareQueryResponse(data, context);
  const response: PrepareQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0PrepareQueryCommandError
 */
const de_PrepareQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PrepareQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamquery#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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
 * deserializeAws_json1_0QueryCommand
 */
export const de_QueryCommand = async (output: __HttpResponse, context: __SerdeContext): Promise<QueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_QueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_QueryResponse(data, context);
  const response: QueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0QueryCommandError
 */
const de_QueryCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<QueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamquery#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.timestreamquery#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "QueryExecutionException":
    case "com.amazonaws.timestreamquery#QueryExecutionException":
      throw await de_QueryExecutionExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamquery#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.timestreamquery#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamquery#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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
 * deserializeAws_json1_0UpdateScheduledQueryCommand
 */
export const de_UpdateScheduledQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScheduledQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateScheduledQueryCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateScheduledQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateScheduledQueryCommandError
 */
const de_UpdateScheduledQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScheduledQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamquery#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamquery#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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
 * deserializeAws_json1_0QueryExecutionExceptionRes
 */
const de_QueryExecutionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueryExecutionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_QueryExecutionException(body, context);
  const exception = new QueryExecutionException({
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
 * serializeAws_json1_0CancelQueryRequest
 */
const se_CancelQueryRequest = (input: CancelQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.QueryId != null && { QueryId: input.QueryId }),
  };
};

/**
 * serializeAws_json1_0CreateScheduledQueryRequest
 */
const se_CreateScheduledQueryRequest = (input: CreateScheduledQueryRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ErrorReportConfiguration != null && {
      ErrorReportConfiguration: se_ErrorReportConfiguration(input.ErrorReportConfiguration, context),
    }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotificationConfiguration != null && {
      NotificationConfiguration: se_NotificationConfiguration(input.NotificationConfiguration, context),
    }),
    ...(input.QueryString != null && { QueryString: input.QueryString }),
    ...(input.ScheduleConfiguration != null && {
      ScheduleConfiguration: se_ScheduleConfiguration(input.ScheduleConfiguration, context),
    }),
    ...(input.ScheduledQueryExecutionRoleArn != null && {
      ScheduledQueryExecutionRoleArn: input.ScheduledQueryExecutionRoleArn,
    }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TargetConfiguration != null && {
      TargetConfiguration: se_TargetConfiguration(input.TargetConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_0DeleteScheduledQueryRequest
 */
const se_DeleteScheduledQueryRequest = (input: DeleteScheduledQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.ScheduledQueryArn != null && { ScheduledQueryArn: input.ScheduledQueryArn }),
  };
};

/**
 * serializeAws_json1_0DescribeEndpointsRequest
 */
const se_DescribeEndpointsRequest = (input: DescribeEndpointsRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_0DescribeScheduledQueryRequest
 */
const se_DescribeScheduledQueryRequest = (input: DescribeScheduledQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.ScheduledQueryArn != null && { ScheduledQueryArn: input.ScheduledQueryArn }),
  };
};

/**
 * serializeAws_json1_0DimensionMapping
 */
const se_DimensionMapping = (input: DimensionMapping, context: __SerdeContext): any => {
  return {
    ...(input.DimensionValueType != null && { DimensionValueType: input.DimensionValueType }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_0DimensionMappingList
 */
const se_DimensionMappingList = (input: DimensionMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DimensionMapping(entry, context);
    });
};

/**
 * serializeAws_json1_0ErrorReportConfiguration
 */
const se_ErrorReportConfiguration = (input: ErrorReportConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.S3Configuration != null && { S3Configuration: se_S3Configuration(input.S3Configuration, context) }),
  };
};

/**
 * serializeAws_json1_0ExecuteScheduledQueryRequest
 */
const se_ExecuteScheduledQueryRequest = (input: ExecuteScheduledQueryRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.InvocationTime != null && { InvocationTime: Math.round(input.InvocationTime.getTime() / 1000) }),
    ...(input.ScheduledQueryArn != null && { ScheduledQueryArn: input.ScheduledQueryArn }),
  };
};

/**
 * serializeAws_json1_0ListScheduledQueriesRequest
 */
const se_ListScheduledQueriesRequest = (input: ListScheduledQueriesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
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
 * serializeAws_json1_0NotificationConfiguration
 */
const se_NotificationConfiguration = (input: NotificationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SnsConfiguration != null && { SnsConfiguration: se_SnsConfiguration(input.SnsConfiguration, context) }),
  };
};

/**
 * serializeAws_json1_0PrepareQueryRequest
 */
const se_PrepareQueryRequest = (input: PrepareQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.QueryString != null && { QueryString: input.QueryString }),
    ...(input.ValidateOnly != null && { ValidateOnly: input.ValidateOnly }),
  };
};

/**
 * serializeAws_json1_0QueryRequest
 */
const se_QueryRequest = (input: QueryRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.MaxRows != null && { MaxRows: input.MaxRows }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.QueryString != null && { QueryString: input.QueryString }),
  };
};

/**
 * serializeAws_json1_0S3Configuration
 */
const se_S3Configuration = (input: S3Configuration, context: __SerdeContext): any => {
  return {
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.EncryptionOption != null && { EncryptionOption: input.EncryptionOption }),
    ...(input.ObjectKeyPrefix != null && { ObjectKeyPrefix: input.ObjectKeyPrefix }),
  };
};

/**
 * serializeAws_json1_0ScheduleConfiguration
 */
const se_ScheduleConfiguration = (input: ScheduleConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ScheduleExpression != null && { ScheduleExpression: input.ScheduleExpression }),
  };
};

/**
 * serializeAws_json1_0SnsConfiguration
 */
const se_SnsConfiguration = (input: SnsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.TopicArn != null && { TopicArn: input.TopicArn }),
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
 * serializeAws_json1_0TargetConfiguration
 */
const se_TargetConfiguration = (input: TargetConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.TimestreamConfiguration != null && {
      TimestreamConfiguration: se_TimestreamConfiguration(input.TimestreamConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_0TimestreamConfiguration
 */
const se_TimestreamConfiguration = (input: TimestreamConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.DimensionMappings != null && {
      DimensionMappings: se_DimensionMappingList(input.DimensionMappings, context),
    }),
    ...(input.MeasureNameColumn != null && { MeasureNameColumn: input.MeasureNameColumn }),
    ...(input.MixedMeasureMappings != null && {
      MixedMeasureMappings: se_MixedMeasureMappingList(input.MixedMeasureMappings, context),
    }),
    ...(input.MultiMeasureMappings != null && {
      MultiMeasureMappings: se_MultiMeasureMappings(input.MultiMeasureMappings, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.TimeColumn != null && { TimeColumn: input.TimeColumn }),
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
 * serializeAws_json1_0UpdateScheduledQueryRequest
 */
const se_UpdateScheduledQueryRequest = (input: UpdateScheduledQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.ScheduledQueryArn != null && { ScheduledQueryArn: input.ScheduledQueryArn }),
    ...(input.State != null && { State: input.State }),
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
 * deserializeAws_json1_0CancelQueryResponse
 */
const de_CancelQueryResponse = (output: any, context: __SerdeContext): CancelQueryResponse => {
  return {
    CancellationMessage: __expectString(output.CancellationMessage),
  } as any;
};

/**
 * deserializeAws_json1_0ColumnInfo
 */
const de_ColumnInfo = (output: any, context: __SerdeContext): ColumnInfo => {
  return {
    Name: __expectString(output.Name),
    Type: output.Type != null ? de_Type(output.Type, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ColumnInfoList
 */
const de_ColumnInfoList = (output: any, context: __SerdeContext): ColumnInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ColumnInfo(entry, context);
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
 * deserializeAws_json1_0CreateScheduledQueryResponse
 */
const de_CreateScheduledQueryResponse = (output: any, context: __SerdeContext): CreateScheduledQueryResponse => {
  return {
    Arn: __expectString(output.Arn),
  } as any;
};

/**
 * deserializeAws_json1_0Datum
 */
const de_Datum = (output: any, context: __SerdeContext): Datum => {
  return {
    ArrayValue: output.ArrayValue != null ? de_DatumList(output.ArrayValue, context) : undefined,
    NullValue: __expectBoolean(output.NullValue),
    RowValue: output.RowValue != null ? de_Row(output.RowValue, context) : undefined,
    ScalarValue: __expectString(output.ScalarValue),
    TimeSeriesValue:
      output.TimeSeriesValue != null ? de_TimeSeriesDataPointList(output.TimeSeriesValue, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DatumList
 */
const de_DatumList = (output: any, context: __SerdeContext): Datum[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Datum(entry, context);
    });
  return retVal;
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
 * deserializeAws_json1_0DescribeScheduledQueryResponse
 */
const de_DescribeScheduledQueryResponse = (output: any, context: __SerdeContext): DescribeScheduledQueryResponse => {
  return {
    ScheduledQuery:
      output.ScheduledQuery != null ? de_ScheduledQueryDescription(output.ScheduledQuery, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DimensionMapping
 */
const de_DimensionMapping = (output: any, context: __SerdeContext): DimensionMapping => {
  return {
    DimensionValueType: __expectString(output.DimensionValueType),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_0DimensionMappingList
 */
const de_DimensionMappingList = (output: any, context: __SerdeContext): DimensionMapping[] => {
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
 * deserializeAws_json1_0ErrorReportConfiguration
 */
const de_ErrorReportConfiguration = (output: any, context: __SerdeContext): ErrorReportConfiguration => {
  return {
    S3Configuration: output.S3Configuration != null ? de_S3Configuration(output.S3Configuration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ErrorReportLocation
 */
const de_ErrorReportLocation = (output: any, context: __SerdeContext): ErrorReportLocation => {
  return {
    S3ReportLocation:
      output.S3ReportLocation != null ? de_S3ReportLocation(output.S3ReportLocation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ExecutionStats
 */
const de_ExecutionStats = (output: any, context: __SerdeContext): ExecutionStats => {
  return {
    BytesMetered: __expectLong(output.BytesMetered),
    DataWrites: __expectLong(output.DataWrites),
    ExecutionTimeInMillis: __expectLong(output.ExecutionTimeInMillis),
    QueryResultRows: __expectLong(output.QueryResultRows),
    RecordsIngested: __expectLong(output.RecordsIngested),
  } as any;
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
 * deserializeAws_json1_0ListScheduledQueriesResponse
 */
const de_ListScheduledQueriesResponse = (output: any, context: __SerdeContext): ListScheduledQueriesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ScheduledQueries:
      output.ScheduledQueries != null ? de_ScheduledQueryList(output.ScheduledQueries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
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
 * deserializeAws_json1_0NotificationConfiguration
 */
const de_NotificationConfiguration = (output: any, context: __SerdeContext): NotificationConfiguration => {
  return {
    SnsConfiguration:
      output.SnsConfiguration != null ? de_SnsConfiguration(output.SnsConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ParameterMapping
 */
const de_ParameterMapping = (output: any, context: __SerdeContext): ParameterMapping => {
  return {
    Name: __expectString(output.Name),
    Type: output.Type != null ? de_Type(output.Type, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ParameterMappingList
 */
const de_ParameterMappingList = (output: any, context: __SerdeContext): ParameterMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ParameterMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0PrepareQueryResponse
 */
const de_PrepareQueryResponse = (output: any, context: __SerdeContext): PrepareQueryResponse => {
  return {
    Columns: output.Columns != null ? de_SelectColumnList(output.Columns, context) : undefined,
    Parameters: output.Parameters != null ? de_ParameterMappingList(output.Parameters, context) : undefined,
    QueryString: __expectString(output.QueryString),
  } as any;
};

/**
 * deserializeAws_json1_0QueryExecutionException
 */
const de_QueryExecutionException = (output: any, context: __SerdeContext): QueryExecutionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0QueryResponse
 */
const de_QueryResponse = (output: any, context: __SerdeContext): QueryResponse => {
  return {
    ColumnInfo: output.ColumnInfo != null ? de_ColumnInfoList(output.ColumnInfo, context) : undefined,
    NextToken: __expectString(output.NextToken),
    QueryId: __expectString(output.QueryId),
    QueryStatus: output.QueryStatus != null ? de_QueryStatus(output.QueryStatus, context) : undefined,
    Rows: output.Rows != null ? de_RowList(output.Rows, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0QueryStatus
 */
const de_QueryStatus = (output: any, context: __SerdeContext): QueryStatus => {
  return {
    CumulativeBytesMetered: __expectLong(output.CumulativeBytesMetered),
    CumulativeBytesScanned: __expectLong(output.CumulativeBytesScanned),
    ProgressPercentage: __limitedParseDouble(output.ProgressPercentage),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    ScheduledQueryArn: __expectString(output.ScheduledQueryArn),
  } as any;
};

/**
 * deserializeAws_json1_0Row
 */
const de_Row = (output: any, context: __SerdeContext): Row => {
  return {
    Data: output.Data != null ? de_DatumList(output.Data, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0RowList
 */
const de_RowList = (output: any, context: __SerdeContext): Row[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Row(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0S3Configuration
 */
const de_S3Configuration = (output: any, context: __SerdeContext): S3Configuration => {
  return {
    BucketName: __expectString(output.BucketName),
    EncryptionOption: __expectString(output.EncryptionOption),
    ObjectKeyPrefix: __expectString(output.ObjectKeyPrefix),
  } as any;
};

/**
 * deserializeAws_json1_0S3ReportLocation
 */
const de_S3ReportLocation = (output: any, context: __SerdeContext): S3ReportLocation => {
  return {
    BucketName: __expectString(output.BucketName),
    ObjectKey: __expectString(output.ObjectKey),
  } as any;
};

/**
 * deserializeAws_json1_0ScheduleConfiguration
 */
const de_ScheduleConfiguration = (output: any, context: __SerdeContext): ScheduleConfiguration => {
  return {
    ScheduleExpression: __expectString(output.ScheduleExpression),
  } as any;
};

/**
 * deserializeAws_json1_0ScheduledQuery
 */
const de_ScheduledQuery = (output: any, context: __SerdeContext): ScheduledQuery => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    ErrorReportConfiguration:
      output.ErrorReportConfiguration != null
        ? de_ErrorReportConfiguration(output.ErrorReportConfiguration, context)
        : undefined,
    LastRunStatus: __expectString(output.LastRunStatus),
    Name: __expectString(output.Name),
    NextInvocationTime:
      output.NextInvocationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.NextInvocationTime)))
        : undefined,
    PreviousInvocationTime:
      output.PreviousInvocationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.PreviousInvocationTime)))
        : undefined,
    State: __expectString(output.State),
    TargetDestination:
      output.TargetDestination != null ? de_TargetDestination(output.TargetDestination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ScheduledQueryDescription
 */
const de_ScheduledQueryDescription = (output: any, context: __SerdeContext): ScheduledQueryDescription => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    ErrorReportConfiguration:
      output.ErrorReportConfiguration != null
        ? de_ErrorReportConfiguration(output.ErrorReportConfiguration, context)
        : undefined,
    KmsKeyId: __expectString(output.KmsKeyId),
    LastRunSummary:
      output.LastRunSummary != null ? de_ScheduledQueryRunSummary(output.LastRunSummary, context) : undefined,
    Name: __expectString(output.Name),
    NextInvocationTime:
      output.NextInvocationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.NextInvocationTime)))
        : undefined,
    NotificationConfiguration:
      output.NotificationConfiguration != null
        ? de_NotificationConfiguration(output.NotificationConfiguration, context)
        : undefined,
    PreviousInvocationTime:
      output.PreviousInvocationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.PreviousInvocationTime)))
        : undefined,
    QueryString: __expectString(output.QueryString),
    RecentlyFailedRuns:
      output.RecentlyFailedRuns != null
        ? de_ScheduledQueryRunSummaryList(output.RecentlyFailedRuns, context)
        : undefined,
    ScheduleConfiguration:
      output.ScheduleConfiguration != null
        ? de_ScheduleConfiguration(output.ScheduleConfiguration, context)
        : undefined,
    ScheduledQueryExecutionRoleArn: __expectString(output.ScheduledQueryExecutionRoleArn),
    State: __expectString(output.State),
    TargetConfiguration:
      output.TargetConfiguration != null ? de_TargetConfiguration(output.TargetConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ScheduledQueryList
 */
const de_ScheduledQueryList = (output: any, context: __SerdeContext): ScheduledQuery[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ScheduledQuery(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ScheduledQueryRunSummary
 */
const de_ScheduledQueryRunSummary = (output: any, context: __SerdeContext): ScheduledQueryRunSummary => {
  return {
    ErrorReportLocation:
      output.ErrorReportLocation != null ? de_ErrorReportLocation(output.ErrorReportLocation, context) : undefined,
    ExecutionStats: output.ExecutionStats != null ? de_ExecutionStats(output.ExecutionStats, context) : undefined,
    FailureReason: __expectString(output.FailureReason),
    InvocationTime:
      output.InvocationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.InvocationTime)))
        : undefined,
    RunStatus: __expectString(output.RunStatus),
    TriggerTime:
      output.TriggerTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TriggerTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ScheduledQueryRunSummaryList
 */
const de_ScheduledQueryRunSummaryList = (output: any, context: __SerdeContext): ScheduledQueryRunSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ScheduledQueryRunSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0SelectColumn
 */
const de_SelectColumn = (output: any, context: __SerdeContext): SelectColumn => {
  return {
    Aliased: __expectBoolean(output.Aliased),
    DatabaseName: __expectString(output.DatabaseName),
    Name: __expectString(output.Name),
    TableName: __expectString(output.TableName),
    Type: output.Type != null ? de_Type(output.Type, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0SelectColumnList
 */
const de_SelectColumnList = (output: any, context: __SerdeContext): SelectColumn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SelectColumn(entry, context);
    });
  return retVal;
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
 * deserializeAws_json1_0SnsConfiguration
 */
const de_SnsConfiguration = (output: any, context: __SerdeContext): SnsConfiguration => {
  return {
    TopicArn: __expectString(output.TopicArn),
  } as any;
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
 * deserializeAws_json1_0TargetConfiguration
 */
const de_TargetConfiguration = (output: any, context: __SerdeContext): TargetConfiguration => {
  return {
    TimestreamConfiguration:
      output.TimestreamConfiguration != null
        ? de_TimestreamConfiguration(output.TimestreamConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0TargetDestination
 */
const de_TargetDestination = (output: any, context: __SerdeContext): TargetDestination => {
  return {
    TimestreamDestination:
      output.TimestreamDestination != null
        ? de_TimestreamDestination(output.TimestreamDestination, context)
        : undefined,
  } as any;
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
 * deserializeAws_json1_0TimeSeriesDataPoint
 */
const de_TimeSeriesDataPoint = (output: any, context: __SerdeContext): TimeSeriesDataPoint => {
  return {
    Time: __expectString(output.Time),
    Value: output.Value != null ? de_Datum(output.Value, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0TimeSeriesDataPointList
 */
const de_TimeSeriesDataPointList = (output: any, context: __SerdeContext): TimeSeriesDataPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TimeSeriesDataPoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0TimestreamConfiguration
 */
const de_TimestreamConfiguration = (output: any, context: __SerdeContext): TimestreamConfiguration => {
  return {
    DatabaseName: __expectString(output.DatabaseName),
    DimensionMappings:
      output.DimensionMappings != null ? de_DimensionMappingList(output.DimensionMappings, context) : undefined,
    MeasureNameColumn: __expectString(output.MeasureNameColumn),
    MixedMeasureMappings:
      output.MixedMeasureMappings != null
        ? de_MixedMeasureMappingList(output.MixedMeasureMappings, context)
        : undefined,
    MultiMeasureMappings:
      output.MultiMeasureMappings != null ? de_MultiMeasureMappings(output.MultiMeasureMappings, context) : undefined,
    TableName: __expectString(output.TableName),
    TimeColumn: __expectString(output.TimeColumn),
  } as any;
};

/**
 * deserializeAws_json1_0TimestreamDestination
 */
const de_TimestreamDestination = (output: any, context: __SerdeContext): TimestreamDestination => {
  return {
    DatabaseName: __expectString(output.DatabaseName),
    TableName: __expectString(output.TableName),
  } as any;
};

/**
 * deserializeAws_json1_0Type
 */
const de_Type = (output: any, context: __SerdeContext): Type => {
  return {
    ArrayColumnInfo: output.ArrayColumnInfo != null ? de_ColumnInfo(output.ArrayColumnInfo, context) : undefined,
    RowColumnInfo: output.RowColumnInfo != null ? de_ColumnInfoList(output.RowColumnInfo, context) : undefined,
    ScalarType: __expectString(output.ScalarType),
    TimeSeriesMeasureValueColumnInfo:
      output.TimeSeriesMeasureValueColumnInfo != null
        ? de_ColumnInfo(output.TimeSeriesMeasureValueColumnInfo, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
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
