// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
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
  ColumnInfo,
  ConflictException,
  CreateScheduledQueryRequest,
  Datum,
  DeleteScheduledQueryRequest,
  DescribeEndpointsRequest,
  DescribeScheduledQueryRequest,
  DescribeScheduledQueryResponse,
  DimensionMapping,
  ErrorReportConfiguration,
  ExecuteScheduledQueryRequest,
  InternalServerException,
  InvalidEndpointException,
  ListScheduledQueriesRequest,
  ListScheduledQueriesResponse,
  ListTagsForResourceRequest,
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
  ScheduleConfiguration,
  ScheduledQuery,
  ScheduledQueryDescription,
  ScheduledQueryRunSummary,
  SelectColumn,
  ServiceQuotaExceededException,
  SnsConfiguration,
  Tag,
  TagResourceRequest,
  TargetConfiguration,
  ThrottlingException,
  TimeSeriesDataPoint,
  TimestreamConfiguration,
  Type,
  UntagResourceRequest,
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
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_0DescribeScheduledQueryCommand
 */
export const se_DescribeScheduledQueryCommand = async (
  input: DescribeScheduledQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeScheduledQuery");
  let body: any;
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_0PrepareQueryCommand
 */
export const se_PrepareQueryCommand = async (
  input: PrepareQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PrepareQuery");
  let body: any;
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_0UpdateScheduledQueryCommand
 */
export const se_UpdateScheduledQueryCommand = async (
  input: UpdateScheduledQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateScheduledQuery");
  let body: any;
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: CancelQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateScheduledQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
 * deserializeAws_json1_0QueryExecutionExceptionRes
 */
const de_QueryExecutionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueryExecutionException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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

// se_CancelQueryRequest omitted.

/**
 * serializeAws_json1_0CreateScheduledQueryRequest
 */
const se_CreateScheduledQueryRequest = (input: CreateScheduledQueryRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ErrorReportConfiguration: _json,
    KmsKeyId: [],
    Name: [],
    NotificationConfiguration: _json,
    QueryString: [],
    ScheduleConfiguration: _json,
    ScheduledQueryExecutionRoleArn: [],
    Tags: _json,
    TargetConfiguration: _json,
  });
};

// se_DeleteScheduledQueryRequest omitted.

// se_DescribeEndpointsRequest omitted.

// se_DescribeScheduledQueryRequest omitted.

// se_DimensionMapping omitted.

// se_DimensionMappingList omitted.

// se_ErrorReportConfiguration omitted.

/**
 * serializeAws_json1_0ExecuteScheduledQueryRequest
 */
const se_ExecuteScheduledQueryRequest = (input: ExecuteScheduledQueryRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    InvocationTime: (_) => Math.round(_.getTime() / 1000),
    ScheduledQueryArn: [],
  });
};

// se_ListScheduledQueriesRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_MixedMeasureMapping omitted.

// se_MixedMeasureMappingList omitted.

// se_MultiMeasureAttributeMapping omitted.

// se_MultiMeasureAttributeMappingList omitted.

// se_MultiMeasureMappings omitted.

// se_NotificationConfiguration omitted.

// se_PrepareQueryRequest omitted.

/**
 * serializeAws_json1_0QueryRequest
 */
const se_QueryRequest = (input: QueryRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    MaxRows: [],
    NextToken: [],
    QueryString: [],
  });
};

// se_S3Configuration omitted.

// se_ScheduleConfiguration omitted.

// se_SnsConfiguration omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_TargetConfiguration omitted.

// se_TimestreamConfiguration omitted.

// se_UntagResourceRequest omitted.

// se_UpdateScheduledQueryRequest omitted.

// de_AccessDeniedException omitted.

// de_CancelQueryResponse omitted.

/**
 * deserializeAws_json1_0ColumnInfo
 */
const de_ColumnInfo = (output: any, context: __SerdeContext): ColumnInfo => {
  return take(output, {
    Name: __expectString,
    Type: (_: any) => de_Type(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ColumnInfoList
 */
const de_ColumnInfoList = (output: any, context: __SerdeContext): ColumnInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ColumnInfo(entry, context);
    });
  return retVal;
};

// de_ConflictException omitted.

// de_CreateScheduledQueryResponse omitted.

/**
 * deserializeAws_json1_0Datum
 */
const de_Datum = (output: any, context: __SerdeContext): Datum => {
  return take(output, {
    ArrayValue: (_: any) => de_DatumList(_, context),
    NullValue: __expectBoolean,
    RowValue: (_: any) => de_Row(_, context),
    ScalarValue: __expectString,
    TimeSeriesValue: (_: any) => de_TimeSeriesDataPointList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DatumList
 */
const de_DatumList = (output: any, context: __SerdeContext): Datum[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Datum(entry, context);
    });
  return retVal;
};

// de_DescribeEndpointsResponse omitted.

/**
 * deserializeAws_json1_0DescribeScheduledQueryResponse
 */
const de_DescribeScheduledQueryResponse = (output: any, context: __SerdeContext): DescribeScheduledQueryResponse => {
  return take(output, {
    ScheduledQuery: (_: any) => de_ScheduledQueryDescription(_, context),
  }) as any;
};

// de_DimensionMapping omitted.

// de_DimensionMappingList omitted.

// de_Endpoint omitted.

// de_Endpoints omitted.

// de_ErrorReportConfiguration omitted.

// de_ErrorReportLocation omitted.

// de_ExecutionStats omitted.

// de_InternalServerException omitted.

// de_InvalidEndpointException omitted.

/**
 * deserializeAws_json1_0ListScheduledQueriesResponse
 */
const de_ListScheduledQueriesResponse = (output: any, context: __SerdeContext): ListScheduledQueriesResponse => {
  return take(output, {
    NextToken: __expectString,
    ScheduledQueries: (_: any) => de_ScheduledQueryList(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

// de_MixedMeasureMapping omitted.

// de_MixedMeasureMappingList omitted.

// de_MultiMeasureAttributeMapping omitted.

// de_MultiMeasureAttributeMappingList omitted.

// de_MultiMeasureMappings omitted.

// de_NotificationConfiguration omitted.

/**
 * deserializeAws_json1_0ParameterMapping
 */
const de_ParameterMapping = (output: any, context: __SerdeContext): ParameterMapping => {
  return take(output, {
    Name: __expectString,
    Type: (_: any) => de_Type(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ParameterMappingList
 */
const de_ParameterMappingList = (output: any, context: __SerdeContext): ParameterMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ParameterMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0PrepareQueryResponse
 */
const de_PrepareQueryResponse = (output: any, context: __SerdeContext): PrepareQueryResponse => {
  return take(output, {
    Columns: (_: any) => de_SelectColumnList(_, context),
    Parameters: (_: any) => de_ParameterMappingList(_, context),
    QueryString: __expectString,
  }) as any;
};

// de_QueryExecutionException omitted.

/**
 * deserializeAws_json1_0QueryResponse
 */
const de_QueryResponse = (output: any, context: __SerdeContext): QueryResponse => {
  return take(output, {
    ColumnInfo: (_: any) => de_ColumnInfoList(_, context),
    NextToken: __expectString,
    QueryId: __expectString,
    QueryStatus: (_: any) => de_QueryStatus(_, context),
    Rows: (_: any) => de_RowList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0QueryStatus
 */
const de_QueryStatus = (output: any, context: __SerdeContext): QueryStatus => {
  return take(output, {
    CumulativeBytesMetered: __expectLong,
    CumulativeBytesScanned: __expectLong,
    ProgressPercentage: __limitedParseDouble,
  }) as any;
};

// de_ResourceNotFoundException omitted.

/**
 * deserializeAws_json1_0Row
 */
const de_Row = (output: any, context: __SerdeContext): Row => {
  return take(output, {
    Data: (_: any) => de_DatumList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0RowList
 */
const de_RowList = (output: any, context: __SerdeContext): Row[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Row(entry, context);
    });
  return retVal;
};

// de_S3Configuration omitted.

// de_S3ReportLocation omitted.

// de_ScheduleConfiguration omitted.

/**
 * deserializeAws_json1_0ScheduledQuery
 */
const de_ScheduledQuery = (output: any, context: __SerdeContext): ScheduledQuery => {
  return take(output, {
    Arn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ErrorReportConfiguration: _json,
    LastRunStatus: __expectString,
    Name: __expectString,
    NextInvocationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PreviousInvocationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    TargetDestination: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0ScheduledQueryDescription
 */
const de_ScheduledQueryDescription = (output: any, context: __SerdeContext): ScheduledQueryDescription => {
  return take(output, {
    Arn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ErrorReportConfiguration: _json,
    KmsKeyId: __expectString,
    LastRunSummary: (_: any) => de_ScheduledQueryRunSummary(_, context),
    Name: __expectString,
    NextInvocationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NotificationConfiguration: _json,
    PreviousInvocationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    QueryString: __expectString,
    RecentlyFailedRuns: (_: any) => de_ScheduledQueryRunSummaryList(_, context),
    ScheduleConfiguration: _json,
    ScheduledQueryExecutionRoleArn: __expectString,
    State: __expectString,
    TargetConfiguration: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0ScheduledQueryList
 */
const de_ScheduledQueryList = (output: any, context: __SerdeContext): ScheduledQuery[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ScheduledQuery(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ScheduledQueryRunSummary
 */
const de_ScheduledQueryRunSummary = (output: any, context: __SerdeContext): ScheduledQueryRunSummary => {
  return take(output, {
    ErrorReportLocation: _json,
    ExecutionStats: _json,
    FailureReason: __expectString,
    InvocationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RunStatus: __expectString,
    TriggerTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0ScheduledQueryRunSummaryList
 */
const de_ScheduledQueryRunSummaryList = (output: any, context: __SerdeContext): ScheduledQueryRunSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ScheduledQueryRunSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0SelectColumn
 */
const de_SelectColumn = (output: any, context: __SerdeContext): SelectColumn => {
  return take(output, {
    Aliased: __expectBoolean,
    DatabaseName: __expectString,
    Name: __expectString,
    TableName: __expectString,
    Type: (_: any) => de_Type(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0SelectColumnList
 */
const de_SelectColumnList = (output: any, context: __SerdeContext): SelectColumn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SelectColumn(entry, context);
    });
  return retVal;
};

// de_ServiceQuotaExceededException omitted.

// de_SnsConfiguration omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_TargetConfiguration omitted.

// de_TargetDestination omitted.

// de_ThrottlingException omitted.

/**
 * deserializeAws_json1_0TimeSeriesDataPoint
 */
const de_TimeSeriesDataPoint = (output: any, context: __SerdeContext): TimeSeriesDataPoint => {
  return take(output, {
    Time: __expectString,
    Value: (_: any) => de_Datum(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0TimeSeriesDataPointList
 */
const de_TimeSeriesDataPointList = (output: any, context: __SerdeContext): TimeSeriesDataPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TimeSeriesDataPoint(entry, context);
    });
  return retVal;
};

// de_TimestreamConfiguration omitted.

// de_TimestreamDestination omitted.

/**
 * deserializeAws_json1_0Type
 */
const de_Type = (output: any, context: __SerdeContext): Type => {
  return take(output, {
    ArrayColumnInfo: (_: any) => de_ColumnInfo(_, context),
    RowColumnInfo: (_: any) => de_ColumnInfoList(_, context),
    ScalarType: __expectString,
    TimeSeriesMeasureValueColumnInfo: (_: any) => de_ColumnInfo(_, context),
  }) as any;
};

// de_UntagResourceResponse omitted.

// de_ValidationException omitted.

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
