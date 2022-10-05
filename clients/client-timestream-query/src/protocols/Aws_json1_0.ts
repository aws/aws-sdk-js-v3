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

export const serializeAws_json1_0CancelQueryCommand = async (
  input: CancelQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.CancelQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CancelQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateScheduledQueryCommand = async (
  input: CreateScheduledQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.CreateScheduledQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateScheduledQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteScheduledQueryCommand = async (
  input: DeleteScheduledQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.DeleteScheduledQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteScheduledQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeEndpointsCommand = async (
  input: DescribeEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.DescribeEndpoints",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeScheduledQueryCommand = async (
  input: DescribeScheduledQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.DescribeScheduledQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeScheduledQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ExecuteScheduledQueryCommand = async (
  input: ExecuteScheduledQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.ExecuteScheduledQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ExecuteScheduledQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListScheduledQueriesCommand = async (
  input: ListScheduledQueriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.ListScheduledQueries",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListScheduledQueriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0PrepareQueryCommand = async (
  input: PrepareQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.PrepareQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0PrepareQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0QueryCommand = async (
  input: QueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.Query",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0QueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.TagResource",
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
    "x-amz-target": "Timestream_20181101.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateScheduledQueryCommand = async (
  input: UpdateScheduledQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "Timestream_20181101.UpdateScheduledQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateScheduledQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0CancelQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CancelQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CancelQueryResponse(data, context);
  const response: CancelQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CancelQueryCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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

export const deserializeAws_json1_0CreateScheduledQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScheduledQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateScheduledQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateScheduledQueryResponse(data, context);
  const response: CreateScheduledQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateScheduledQueryCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.timestreamquery#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.timestreamquery#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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

export const deserializeAws_json1_0DeleteScheduledQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteScheduledQueryCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteScheduledQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteScheduledQueryCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamquery#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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

export const deserializeAws_json1_0DescribeEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeEndpointsResponse(data, context);
  const response: DescribeEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeEndpointsCommandError = async (
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
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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

export const deserializeAws_json1_0DescribeScheduledQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeScheduledQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeScheduledQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeScheduledQueryResponse(data, context);
  const response: DescribeScheduledQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeScheduledQueryCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamquery#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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

export const deserializeAws_json1_0ExecuteScheduledQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteScheduledQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ExecuteScheduledQueryCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ExecuteScheduledQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ExecuteScheduledQueryCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamquery#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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

export const deserializeAws_json1_0ListScheduledQueriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScheduledQueriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListScheduledQueriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListScheduledQueriesResponse(data, context);
  const response: ListScheduledQueriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListScheduledQueriesCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamquery#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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

export const deserializeAws_json1_0PrepareQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PrepareQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0PrepareQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0PrepareQueryResponse(data, context);
  const response: PrepareQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0PrepareQueryCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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

export const deserializeAws_json1_0QueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0QueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0QueryResponse(data, context);
  const response: QueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0QueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.timestreamquery#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.timestreamquery#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "QueryExecutionException":
    case "com.amazonaws.timestreamquery#QueryExecutionException":
      throw await deserializeAws_json1_0QueryExecutionExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamquery#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.timestreamquery#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamquery#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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

export const deserializeAws_json1_0UpdateScheduledQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScheduledQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateScheduledQueryCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateScheduledQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateScheduledQueryCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.timestreamquery#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidEndpointException":
    case "com.amazonaws.timestreamquery#InvalidEndpointException":
      throw await deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.timestreamquery#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.timestreamquery#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.timestreamquery#ValidationException":
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

const deserializeAws_json1_0InvalidEndpointExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEndpointException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidEndpointException(body, context);
  const exception = new InvalidEndpointException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0QueryExecutionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueryExecutionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0QueryExecutionException(body, context);
  const exception = new QueryExecutionException({
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

const deserializeAws_json1_0ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ThrottlingException(body, context);
  const exception = new ThrottlingException({
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

const serializeAws_json1_0CancelQueryRequest = (input: CancelQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.QueryId != null && { QueryId: input.QueryId }),
  };
};

const serializeAws_json1_0CreateScheduledQueryRequest = (
  input: CreateScheduledQueryRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ErrorReportConfiguration != null && {
      ErrorReportConfiguration: serializeAws_json1_0ErrorReportConfiguration(input.ErrorReportConfiguration, context),
    }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotificationConfiguration != null && {
      NotificationConfiguration: serializeAws_json1_0NotificationConfiguration(
        input.NotificationConfiguration,
        context
      ),
    }),
    ...(input.QueryString != null && { QueryString: input.QueryString }),
    ...(input.ScheduleConfiguration != null && {
      ScheduleConfiguration: serializeAws_json1_0ScheduleConfiguration(input.ScheduleConfiguration, context),
    }),
    ...(input.ScheduledQueryExecutionRoleArn != null && {
      ScheduledQueryExecutionRoleArn: input.ScheduledQueryExecutionRoleArn,
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
    ...(input.TargetConfiguration != null && {
      TargetConfiguration: serializeAws_json1_0TargetConfiguration(input.TargetConfiguration, context),
    }),
  };
};

const serializeAws_json1_0DeleteScheduledQueryRequest = (
  input: DeleteScheduledQueryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ScheduledQueryArn != null && { ScheduledQueryArn: input.ScheduledQueryArn }),
  };
};

const serializeAws_json1_0DescribeEndpointsRequest = (
  input: DescribeEndpointsRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_0DescribeScheduledQueryRequest = (
  input: DescribeScheduledQueryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ScheduledQueryArn != null && { ScheduledQueryArn: input.ScheduledQueryArn }),
  };
};

const serializeAws_json1_0DimensionMapping = (input: DimensionMapping, context: __SerdeContext): any => {
  return {
    ...(input.DimensionValueType != null && { DimensionValueType: input.DimensionValueType }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_0DimensionMappingList = (input: DimensionMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0DimensionMapping(entry, context);
    });
};

const serializeAws_json1_0ErrorReportConfiguration = (
  input: ErrorReportConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Configuration != null && {
      S3Configuration: serializeAws_json1_0S3Configuration(input.S3Configuration, context),
    }),
  };
};

const serializeAws_json1_0ExecuteScheduledQueryRequest = (
  input: ExecuteScheduledQueryRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.InvocationTime != null && { InvocationTime: Math.round(input.InvocationTime.getTime() / 1000) }),
    ...(input.ScheduledQueryArn != null && { ScheduledQueryArn: input.ScheduledQueryArn }),
  };
};

const serializeAws_json1_0ListScheduledQueriesRequest = (
  input: ListScheduledQueriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_0MixedMeasureMapping = (input: MixedMeasureMapping, context: __SerdeContext): any => {
  return {
    ...(input.MeasureName != null && { MeasureName: input.MeasureName }),
    ...(input.MeasureValueType != null && { MeasureValueType: input.MeasureValueType }),
    ...(input.MultiMeasureAttributeMappings != null && {
      MultiMeasureAttributeMappings: serializeAws_json1_0MultiMeasureAttributeMappingList(
        input.MultiMeasureAttributeMappings,
        context
      ),
    }),
    ...(input.SourceColumn != null && { SourceColumn: input.SourceColumn }),
    ...(input.TargetMeasureName != null && { TargetMeasureName: input.TargetMeasureName }),
  };
};

const serializeAws_json1_0MixedMeasureMappingList = (input: MixedMeasureMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0MixedMeasureMapping(entry, context);
    });
};

const serializeAws_json1_0MultiMeasureAttributeMapping = (
  input: MultiMeasureAttributeMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.MeasureValueType != null && { MeasureValueType: input.MeasureValueType }),
    ...(input.SourceColumn != null && { SourceColumn: input.SourceColumn }),
    ...(input.TargetMultiMeasureAttributeName != null && {
      TargetMultiMeasureAttributeName: input.TargetMultiMeasureAttributeName,
    }),
  };
};

const serializeAws_json1_0MultiMeasureAttributeMappingList = (
  input: MultiMeasureAttributeMapping[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0MultiMeasureAttributeMapping(entry, context);
    });
};

const serializeAws_json1_0MultiMeasureMappings = (input: MultiMeasureMappings, context: __SerdeContext): any => {
  return {
    ...(input.MultiMeasureAttributeMappings != null && {
      MultiMeasureAttributeMappings: serializeAws_json1_0MultiMeasureAttributeMappingList(
        input.MultiMeasureAttributeMappings,
        context
      ),
    }),
    ...(input.TargetMultiMeasureName != null && { TargetMultiMeasureName: input.TargetMultiMeasureName }),
  };
};

const serializeAws_json1_0NotificationConfiguration = (
  input: NotificationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.SnsConfiguration != null && {
      SnsConfiguration: serializeAws_json1_0SnsConfiguration(input.SnsConfiguration, context),
    }),
  };
};

const serializeAws_json1_0PrepareQueryRequest = (input: PrepareQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.QueryString != null && { QueryString: input.QueryString }),
    ...(input.ValidateOnly != null && { ValidateOnly: input.ValidateOnly }),
  };
};

const serializeAws_json1_0QueryRequest = (input: QueryRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.MaxRows != null && { MaxRows: input.MaxRows }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.QueryString != null && { QueryString: input.QueryString }),
  };
};

const serializeAws_json1_0S3Configuration = (input: S3Configuration, context: __SerdeContext): any => {
  return {
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.EncryptionOption != null && { EncryptionOption: input.EncryptionOption }),
    ...(input.ObjectKeyPrefix != null && { ObjectKeyPrefix: input.ObjectKeyPrefix }),
  };
};

const serializeAws_json1_0ScheduleConfiguration = (input: ScheduleConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ScheduleExpression != null && { ScheduleExpression: input.ScheduleExpression }),
  };
};

const serializeAws_json1_0SnsConfiguration = (input: SnsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.TopicArn != null && { TopicArn: input.TopicArn }),
  };
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_0TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
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
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0TargetConfiguration = (input: TargetConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.TimestreamConfiguration != null && {
      TimestreamConfiguration: serializeAws_json1_0TimestreamConfiguration(input.TimestreamConfiguration, context),
    }),
  };
};

const serializeAws_json1_0TimestreamConfiguration = (input: TimestreamConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.DimensionMappings != null && {
      DimensionMappings: serializeAws_json1_0DimensionMappingList(input.DimensionMappings, context),
    }),
    ...(input.MeasureNameColumn != null && { MeasureNameColumn: input.MeasureNameColumn }),
    ...(input.MixedMeasureMappings != null && {
      MixedMeasureMappings: serializeAws_json1_0MixedMeasureMappingList(input.MixedMeasureMappings, context),
    }),
    ...(input.MultiMeasureMappings != null && {
      MultiMeasureMappings: serializeAws_json1_0MultiMeasureMappings(input.MultiMeasureMappings, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.TimeColumn != null && { TimeColumn: input.TimeColumn }),
  };
};

const serializeAws_json1_0UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_0UpdateScheduledQueryRequest = (
  input: UpdateScheduledQueryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ScheduledQueryArn != null && { ScheduledQueryArn: input.ScheduledQueryArn }),
    ...(input.State != null && { State: input.State }),
  };
};

const deserializeAws_json1_0AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0CancelQueryResponse = (output: any, context: __SerdeContext): CancelQueryResponse => {
  return {
    CancellationMessage: __expectString(output.CancellationMessage),
  } as any;
};

const deserializeAws_json1_0ColumnInfo = (output: any, context: __SerdeContext): ColumnInfo => {
  return {
    Name: __expectString(output.Name),
    Type: output.Type != null ? deserializeAws_json1_0Type(output.Type, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ColumnInfoList = (output: any, context: __SerdeContext): ColumnInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ColumnInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0CreateScheduledQueryResponse = (
  output: any,
  context: __SerdeContext
): CreateScheduledQueryResponse => {
  return {
    Arn: __expectString(output.Arn),
  } as any;
};

const deserializeAws_json1_0Datum = (output: any, context: __SerdeContext): Datum => {
  return {
    ArrayValue: output.ArrayValue != null ? deserializeAws_json1_0DatumList(output.ArrayValue, context) : undefined,
    NullValue: __expectBoolean(output.NullValue),
    RowValue: output.RowValue != null ? deserializeAws_json1_0Row(output.RowValue, context) : undefined,
    ScalarValue: __expectString(output.ScalarValue),
    TimeSeriesValue:
      output.TimeSeriesValue != null
        ? deserializeAws_json1_0TimeSeriesDataPointList(output.TimeSeriesValue, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DatumList = (output: any, context: __SerdeContext): Datum[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Datum(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0DescribeEndpointsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEndpointsResponse => {
  return {
    Endpoints: output.Endpoints != null ? deserializeAws_json1_0Endpoints(output.Endpoints, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeScheduledQueryResponse = (
  output: any,
  context: __SerdeContext
): DescribeScheduledQueryResponse => {
  return {
    ScheduledQuery:
      output.ScheduledQuery != null
        ? deserializeAws_json1_0ScheduledQueryDescription(output.ScheduledQuery, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DimensionMapping = (output: any, context: __SerdeContext): DimensionMapping => {
  return {
    DimensionValueType: __expectString(output.DimensionValueType),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_0DimensionMappingList = (output: any, context: __SerdeContext): DimensionMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0DimensionMapping(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return {
    Address: __expectString(output.Address),
    CachePeriodInMinutes: __expectLong(output.CachePeriodInMinutes),
  } as any;
};

const deserializeAws_json1_0Endpoints = (output: any, context: __SerdeContext): Endpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Endpoint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ErrorReportConfiguration = (
  output: any,
  context: __SerdeContext
): ErrorReportConfiguration => {
  return {
    S3Configuration:
      output.S3Configuration != null
        ? deserializeAws_json1_0S3Configuration(output.S3Configuration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ErrorReportLocation = (output: any, context: __SerdeContext): ErrorReportLocation => {
  return {
    S3ReportLocation:
      output.S3ReportLocation != null
        ? deserializeAws_json1_0S3ReportLocation(output.S3ReportLocation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ExecutionStats = (output: any, context: __SerdeContext): ExecutionStats => {
  return {
    BytesMetered: __expectLong(output.BytesMetered),
    DataWrites: __expectLong(output.DataWrites),
    ExecutionTimeInMillis: __expectLong(output.ExecutionTimeInMillis),
    QueryResultRows: __expectLong(output.QueryResultRows),
    RecordsIngested: __expectLong(output.RecordsIngested),
  } as any;
};

const deserializeAws_json1_0InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0InvalidEndpointException = (
  output: any,
  context: __SerdeContext
): InvalidEndpointException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ListScheduledQueriesResponse = (
  output: any,
  context: __SerdeContext
): ListScheduledQueriesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ScheduledQueries:
      output.ScheduledQueries != null
        ? deserializeAws_json1_0ScheduledQueryList(output.ScheduledQueries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? deserializeAws_json1_0TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_0MixedMeasureMapping = (output: any, context: __SerdeContext): MixedMeasureMapping => {
  return {
    MeasureName: __expectString(output.MeasureName),
    MeasureValueType: __expectString(output.MeasureValueType),
    MultiMeasureAttributeMappings:
      output.MultiMeasureAttributeMappings != null
        ? deserializeAws_json1_0MultiMeasureAttributeMappingList(output.MultiMeasureAttributeMappings, context)
        : undefined,
    SourceColumn: __expectString(output.SourceColumn),
    TargetMeasureName: __expectString(output.TargetMeasureName),
  } as any;
};

const deserializeAws_json1_0MixedMeasureMappingList = (output: any, context: __SerdeContext): MixedMeasureMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0MixedMeasureMapping(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0MultiMeasureAttributeMapping = (
  output: any,
  context: __SerdeContext
): MultiMeasureAttributeMapping => {
  return {
    MeasureValueType: __expectString(output.MeasureValueType),
    SourceColumn: __expectString(output.SourceColumn),
    TargetMultiMeasureAttributeName: __expectString(output.TargetMultiMeasureAttributeName),
  } as any;
};

const deserializeAws_json1_0MultiMeasureAttributeMappingList = (
  output: any,
  context: __SerdeContext
): MultiMeasureAttributeMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0MultiMeasureAttributeMapping(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0MultiMeasureMappings = (output: any, context: __SerdeContext): MultiMeasureMappings => {
  return {
    MultiMeasureAttributeMappings:
      output.MultiMeasureAttributeMappings != null
        ? deserializeAws_json1_0MultiMeasureAttributeMappingList(output.MultiMeasureAttributeMappings, context)
        : undefined,
    TargetMultiMeasureName: __expectString(output.TargetMultiMeasureName),
  } as any;
};

const deserializeAws_json1_0NotificationConfiguration = (
  output: any,
  context: __SerdeContext
): NotificationConfiguration => {
  return {
    SnsConfiguration:
      output.SnsConfiguration != null
        ? deserializeAws_json1_0SnsConfiguration(output.SnsConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ParameterMapping = (output: any, context: __SerdeContext): ParameterMapping => {
  return {
    Name: __expectString(output.Name),
    Type: output.Type != null ? deserializeAws_json1_0Type(output.Type, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ParameterMappingList = (output: any, context: __SerdeContext): ParameterMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ParameterMapping(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0PrepareQueryResponse = (output: any, context: __SerdeContext): PrepareQueryResponse => {
  return {
    Columns: output.Columns != null ? deserializeAws_json1_0SelectColumnList(output.Columns, context) : undefined,
    Parameters:
      output.Parameters != null ? deserializeAws_json1_0ParameterMappingList(output.Parameters, context) : undefined,
    QueryString: __expectString(output.QueryString),
  } as any;
};

const deserializeAws_json1_0QueryExecutionException = (
  output: any,
  context: __SerdeContext
): QueryExecutionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0QueryResponse = (output: any, context: __SerdeContext): QueryResponse => {
  return {
    ColumnInfo:
      output.ColumnInfo != null ? deserializeAws_json1_0ColumnInfoList(output.ColumnInfo, context) : undefined,
    NextToken: __expectString(output.NextToken),
    QueryId: __expectString(output.QueryId),
    QueryStatus:
      output.QueryStatus != null ? deserializeAws_json1_0QueryStatus(output.QueryStatus, context) : undefined,
    Rows: output.Rows != null ? deserializeAws_json1_0RowList(output.Rows, context) : undefined,
  } as any;
};

const deserializeAws_json1_0QueryStatus = (output: any, context: __SerdeContext): QueryStatus => {
  return {
    CumulativeBytesMetered: __expectLong(output.CumulativeBytesMetered),
    CumulativeBytesScanned: __expectLong(output.CumulativeBytesScanned),
    ProgressPercentage: __limitedParseDouble(output.ProgressPercentage),
  } as any;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    ScheduledQueryArn: __expectString(output.ScheduledQueryArn),
  } as any;
};

const deserializeAws_json1_0Row = (output: any, context: __SerdeContext): Row => {
  return {
    Data: output.Data != null ? deserializeAws_json1_0DatumList(output.Data, context) : undefined,
  } as any;
};

const deserializeAws_json1_0RowList = (output: any, context: __SerdeContext): Row[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Row(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0S3Configuration = (output: any, context: __SerdeContext): S3Configuration => {
  return {
    BucketName: __expectString(output.BucketName),
    EncryptionOption: __expectString(output.EncryptionOption),
    ObjectKeyPrefix: __expectString(output.ObjectKeyPrefix),
  } as any;
};

const deserializeAws_json1_0S3ReportLocation = (output: any, context: __SerdeContext): S3ReportLocation => {
  return {
    BucketName: __expectString(output.BucketName),
    ObjectKey: __expectString(output.ObjectKey),
  } as any;
};

const deserializeAws_json1_0ScheduleConfiguration = (output: any, context: __SerdeContext): ScheduleConfiguration => {
  return {
    ScheduleExpression: __expectString(output.ScheduleExpression),
  } as any;
};

const deserializeAws_json1_0ScheduledQuery = (output: any, context: __SerdeContext): ScheduledQuery => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    ErrorReportConfiguration:
      output.ErrorReportConfiguration != null
        ? deserializeAws_json1_0ErrorReportConfiguration(output.ErrorReportConfiguration, context)
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
      output.TargetDestination != null
        ? deserializeAws_json1_0TargetDestination(output.TargetDestination, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ScheduledQueryDescription = (
  output: any,
  context: __SerdeContext
): ScheduledQueryDescription => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    ErrorReportConfiguration:
      output.ErrorReportConfiguration != null
        ? deserializeAws_json1_0ErrorReportConfiguration(output.ErrorReportConfiguration, context)
        : undefined,
    KmsKeyId: __expectString(output.KmsKeyId),
    LastRunSummary:
      output.LastRunSummary != null
        ? deserializeAws_json1_0ScheduledQueryRunSummary(output.LastRunSummary, context)
        : undefined,
    Name: __expectString(output.Name),
    NextInvocationTime:
      output.NextInvocationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.NextInvocationTime)))
        : undefined,
    NotificationConfiguration:
      output.NotificationConfiguration != null
        ? deserializeAws_json1_0NotificationConfiguration(output.NotificationConfiguration, context)
        : undefined,
    PreviousInvocationTime:
      output.PreviousInvocationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.PreviousInvocationTime)))
        : undefined,
    QueryString: __expectString(output.QueryString),
    RecentlyFailedRuns:
      output.RecentlyFailedRuns != null
        ? deserializeAws_json1_0ScheduledQueryRunSummaryList(output.RecentlyFailedRuns, context)
        : undefined,
    ScheduleConfiguration:
      output.ScheduleConfiguration != null
        ? deserializeAws_json1_0ScheduleConfiguration(output.ScheduleConfiguration, context)
        : undefined,
    ScheduledQueryExecutionRoleArn: __expectString(output.ScheduledQueryExecutionRoleArn),
    State: __expectString(output.State),
    TargetConfiguration:
      output.TargetConfiguration != null
        ? deserializeAws_json1_0TargetConfiguration(output.TargetConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ScheduledQueryList = (output: any, context: __SerdeContext): ScheduledQuery[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ScheduledQuery(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ScheduledQueryRunSummary = (
  output: any,
  context: __SerdeContext
): ScheduledQueryRunSummary => {
  return {
    ErrorReportLocation:
      output.ErrorReportLocation != null
        ? deserializeAws_json1_0ErrorReportLocation(output.ErrorReportLocation, context)
        : undefined,
    ExecutionStats:
      output.ExecutionStats != null ? deserializeAws_json1_0ExecutionStats(output.ExecutionStats, context) : undefined,
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

const deserializeAws_json1_0ScheduledQueryRunSummaryList = (
  output: any,
  context: __SerdeContext
): ScheduledQueryRunSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ScheduledQueryRunSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0SelectColumn = (output: any, context: __SerdeContext): SelectColumn => {
  return {
    Aliased: __expectBoolean(output.Aliased),
    DatabaseName: __expectString(output.DatabaseName),
    Name: __expectString(output.Name),
    TableName: __expectString(output.TableName),
    Type: output.Type != null ? deserializeAws_json1_0Type(output.Type, context) : undefined,
  } as any;
};

const deserializeAws_json1_0SelectColumnList = (output: any, context: __SerdeContext): SelectColumn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0SelectColumn(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0SnsConfiguration = (output: any, context: __SerdeContext): SnsConfiguration => {
  return {
    TopicArn: __expectString(output.TopicArn),
  } as any;
};

const deserializeAws_json1_0Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
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

const deserializeAws_json1_0TargetConfiguration = (output: any, context: __SerdeContext): TargetConfiguration => {
  return {
    TimestreamConfiguration:
      output.TimestreamConfiguration != null
        ? deserializeAws_json1_0TimestreamConfiguration(output.TimestreamConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0TargetDestination = (output: any, context: __SerdeContext): TargetDestination => {
  return {
    TimestreamDestination:
      output.TimestreamDestination != null
        ? deserializeAws_json1_0TimestreamDestination(output.TimestreamDestination, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0TimeSeriesDataPoint = (output: any, context: __SerdeContext): TimeSeriesDataPoint => {
  return {
    Time: __expectString(output.Time),
    Value: output.Value != null ? deserializeAws_json1_0Datum(output.Value, context) : undefined,
  } as any;
};

const deserializeAws_json1_0TimeSeriesDataPointList = (output: any, context: __SerdeContext): TimeSeriesDataPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0TimeSeriesDataPoint(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0TimestreamConfiguration = (
  output: any,
  context: __SerdeContext
): TimestreamConfiguration => {
  return {
    DatabaseName: __expectString(output.DatabaseName),
    DimensionMappings:
      output.DimensionMappings != null
        ? deserializeAws_json1_0DimensionMappingList(output.DimensionMappings, context)
        : undefined,
    MeasureNameColumn: __expectString(output.MeasureNameColumn),
    MixedMeasureMappings:
      output.MixedMeasureMappings != null
        ? deserializeAws_json1_0MixedMeasureMappingList(output.MixedMeasureMappings, context)
        : undefined,
    MultiMeasureMappings:
      output.MultiMeasureMappings != null
        ? deserializeAws_json1_0MultiMeasureMappings(output.MultiMeasureMappings, context)
        : undefined,
    TableName: __expectString(output.TableName),
    TimeColumn: __expectString(output.TimeColumn),
  } as any;
};

const deserializeAws_json1_0TimestreamDestination = (output: any, context: __SerdeContext): TimestreamDestination => {
  return {
    DatabaseName: __expectString(output.DatabaseName),
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_json1_0Type = (output: any, context: __SerdeContext): Type => {
  return {
    ArrayColumnInfo:
      output.ArrayColumnInfo != null ? deserializeAws_json1_0ColumnInfo(output.ArrayColumnInfo, context) : undefined,
    RowColumnInfo:
      output.RowColumnInfo != null ? deserializeAws_json1_0ColumnInfoList(output.RowColumnInfo, context) : undefined,
    ScalarType: __expectString(output.ScalarType),
    TimeSeriesMeasureValueColumnInfo:
      output.TimeSeriesMeasureValueColumnInfo != null
        ? deserializeAws_json1_0ColumnInfo(output.TimeSeriesMeasureValueColumnInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0ValidationException = (output: any, context: __SerdeContext): ValidationException => {
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
