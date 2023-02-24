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
  expectUnion as __expectUnion,
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

import {
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
} from "../commands/BatchExecuteStatementCommand";
import { CancelStatementCommandInput, CancelStatementCommandOutput } from "../commands/CancelStatementCommand";
import { DescribeStatementCommandInput, DescribeStatementCommandOutput } from "../commands/DescribeStatementCommand";
import { DescribeTableCommandInput, DescribeTableCommandOutput } from "../commands/DescribeTableCommand";
import { ExecuteStatementCommandInput, ExecuteStatementCommandOutput } from "../commands/ExecuteStatementCommand";
import { GetStatementResultCommandInput, GetStatementResultCommandOutput } from "../commands/GetStatementResultCommand";
import { ListDatabasesCommandInput, ListDatabasesCommandOutput } from "../commands/ListDatabasesCommand";
import { ListSchemasCommandInput, ListSchemasCommandOutput } from "../commands/ListSchemasCommand";
import { ListStatementsCommandInput, ListStatementsCommandOutput } from "../commands/ListStatementsCommand";
import { ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import {
  ActiveStatementsExceededException,
  BatchExecuteStatementException,
  BatchExecuteStatementInput,
  BatchExecuteStatementOutput,
  CancelStatementRequest,
  CancelStatementResponse,
  ColumnMetadata,
  DatabaseConnectionException,
  DescribeStatementRequest,
  DescribeStatementResponse,
  DescribeTableRequest,
  DescribeTableResponse,
  ExecuteStatementException,
  ExecuteStatementInput,
  ExecuteStatementOutput,
  Field,
  GetStatementResultRequest,
  GetStatementResultResponse,
  InternalServerException,
  ListDatabasesRequest,
  ListDatabasesResponse,
  ListSchemasRequest,
  ListSchemasResponse,
  ListStatementsRequest,
  ListStatementsResponse,
  ListTablesRequest,
  ListTablesResponse,
  ResourceNotFoundException,
  SqlParameter,
  StatementData,
  SubStatementData,
  TableMember,
  ValidationException,
} from "../models/models_0";
import { RedshiftDataServiceException as __BaseException } from "../models/RedshiftDataServiceException";

export const serializeAws_json1_1BatchExecuteStatementCommand = async (
  input: BatchExecuteStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftData.BatchExecuteStatement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchExecuteStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelStatementCommand = async (
  input: CancelStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftData.CancelStatement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelStatementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeStatementCommand = async (
  input: DescribeStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftData.DescribeStatement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeStatementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTableCommand = async (
  input: DescribeTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftData.DescribeTable",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ExecuteStatementCommand = async (
  input: ExecuteStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftData.ExecuteStatement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ExecuteStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetStatementResultCommand = async (
  input: GetStatementResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftData.GetStatementResult",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetStatementResultRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDatabasesCommand = async (
  input: ListDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftData.ListDatabases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDatabasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSchemasCommand = async (
  input: ListSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftData.ListSchemas",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSchemasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListStatementsCommand = async (
  input: ListStatementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftData.ListStatements",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListStatementsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTablesCommand = async (
  input: ListTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "RedshiftData.ListTables",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTablesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1BatchExecuteStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchExecuteStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchExecuteStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchExecuteStatementOutput(data, context);
  const response: BatchExecuteStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchExecuteStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchExecuteStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActiveStatementsExceededException":
    case "com.amazonaws.redshiftdata#ActiveStatementsExceededException":
      throw await deserializeAws_json1_1ActiveStatementsExceededExceptionResponse(parsedOutput, context);
    case "BatchExecuteStatementException":
    case "com.amazonaws.redshiftdata#BatchExecuteStatementException":
      throw await deserializeAws_json1_1BatchExecuteStatementExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CancelStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelStatementResponse(data, context);
  const response: CancelStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DatabaseConnectionException":
    case "com.amazonaws.redshiftdata#DatabaseConnectionException":
      throw await deserializeAws_json1_1DatabaseConnectionExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftdata#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStatementResponse(data, context);
  const response: DescribeStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftdata#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTableResponse(data, context);
  const response: DescribeTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DatabaseConnectionException":
    case "com.amazonaws.redshiftdata#DatabaseConnectionException":
      throw await deserializeAws_json1_1DatabaseConnectionExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ExecuteStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ExecuteStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ExecuteStatementOutput(data, context);
  const response: ExecuteStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ExecuteStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActiveStatementsExceededException":
    case "com.amazonaws.redshiftdata#ActiveStatementsExceededException":
      throw await deserializeAws_json1_1ActiveStatementsExceededExceptionResponse(parsedOutput, context);
    case "ExecuteStatementException":
    case "com.amazonaws.redshiftdata#ExecuteStatementException":
      throw await deserializeAws_json1_1ExecuteStatementExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetStatementResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStatementResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetStatementResultCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetStatementResultResponse(data, context);
  const response: GetStatementResultCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetStatementResultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStatementResultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftdata#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListDatabasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatabasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDatabasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDatabasesResponse(data, context);
  const response: ListDatabasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDatabasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatabasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DatabaseConnectionException":
    case "com.amazonaws.redshiftdata#DatabaseConnectionException":
      throw await deserializeAws_json1_1DatabaseConnectionExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSchemasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSchemasResponse(data, context);
  const response: ListSchemasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSchemasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DatabaseConnectionException":
    case "com.amazonaws.redshiftdata#DatabaseConnectionException":
      throw await deserializeAws_json1_1DatabaseConnectionExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListStatementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStatementsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListStatementsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListStatementsResponse(data, context);
  const response: ListStatementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListStatementsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStatementsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTablesResponse(data, context);
  const response: ListTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTablesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DatabaseConnectionException":
    case "com.amazonaws.redshiftdata#DatabaseConnectionException":
      throw await deserializeAws_json1_1DatabaseConnectionExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1ActiveStatementsExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActiveStatementsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ActiveStatementsExceededException(body, context);
  const exception = new ActiveStatementsExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1BatchExecuteStatementExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchExecuteStatementException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BatchExecuteStatementException(body, context);
  const exception = new BatchExecuteStatementException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DatabaseConnectionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DatabaseConnectionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DatabaseConnectionException(body, context);
  const exception = new DatabaseConnectionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ExecuteStatementExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExecuteStatementException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ExecuteStatementException(body, context);
  const exception = new ExecuteStatementException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1BatchExecuteStatementInput = (
  input: BatchExecuteStatementInput,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ClusterIdentifier != null && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.Database != null && { Database: input.Database }),
    ...(input.DbUser != null && { DbUser: input.DbUser }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.Sqls != null && { Sqls: serializeAws_json1_1SqlList(input.Sqls, context) }),
    ...(input.StatementName != null && { StatementName: input.StatementName }),
    ...(input.WithEvent != null && { WithEvent: input.WithEvent }),
    ...(input.WorkgroupName != null && { WorkgroupName: input.WorkgroupName }),
  };
};

const serializeAws_json1_1CancelStatementRequest = (input: CancelStatementRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

const serializeAws_json1_1DescribeStatementRequest = (
  input: DescribeStatementRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

const serializeAws_json1_1DescribeTableRequest = (input: DescribeTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterIdentifier != null && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.ConnectedDatabase != null && { ConnectedDatabase: input.ConnectedDatabase }),
    ...(input.Database != null && { Database: input.Database }),
    ...(input.DbUser != null && { DbUser: input.DbUser }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Schema != null && { Schema: input.Schema }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.Table != null && { Table: input.Table }),
    ...(input.WorkgroupName != null && { WorkgroupName: input.WorkgroupName }),
  };
};

const serializeAws_json1_1ExecuteStatementInput = (input: ExecuteStatementInput, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ClusterIdentifier != null && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.Database != null && { Database: input.Database }),
    ...(input.DbUser != null && { DbUser: input.DbUser }),
    ...(input.Parameters != null && { Parameters: serializeAws_json1_1SqlParametersList(input.Parameters, context) }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.Sql != null && { Sql: input.Sql }),
    ...(input.StatementName != null && { StatementName: input.StatementName }),
    ...(input.WithEvent != null && { WithEvent: input.WithEvent }),
    ...(input.WorkgroupName != null && { WorkgroupName: input.WorkgroupName }),
  };
};

const serializeAws_json1_1GetStatementResultRequest = (
  input: GetStatementResultRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDatabasesRequest = (input: ListDatabasesRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterIdentifier != null && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.Database != null && { Database: input.Database }),
    ...(input.DbUser != null && { DbUser: input.DbUser }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.WorkgroupName != null && { WorkgroupName: input.WorkgroupName }),
  };
};

const serializeAws_json1_1ListSchemasRequest = (input: ListSchemasRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterIdentifier != null && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.ConnectedDatabase != null && { ConnectedDatabase: input.ConnectedDatabase }),
    ...(input.Database != null && { Database: input.Database }),
    ...(input.DbUser != null && { DbUser: input.DbUser }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SchemaPattern != null && { SchemaPattern: input.SchemaPattern }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.WorkgroupName != null && { WorkgroupName: input.WorkgroupName }),
  };
};

const serializeAws_json1_1ListStatementsRequest = (input: ListStatementsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RoleLevel != null && { RoleLevel: input.RoleLevel }),
    ...(input.StatementName != null && { StatementName: input.StatementName }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_json1_1ListTablesRequest = (input: ListTablesRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterIdentifier != null && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.ConnectedDatabase != null && { ConnectedDatabase: input.ConnectedDatabase }),
    ...(input.Database != null && { Database: input.Database }),
    ...(input.DbUser != null && { DbUser: input.DbUser }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SchemaPattern != null && { SchemaPattern: input.SchemaPattern }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.TablePattern != null && { TablePattern: input.TablePattern }),
    ...(input.WorkgroupName != null && { WorkgroupName: input.WorkgroupName }),
  };
};

const serializeAws_json1_1SqlList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SqlParameter = (input: SqlParameter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_json1_1SqlParametersList = (input: SqlParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1SqlParameter(entry, context);
    });
};

const deserializeAws_json1_1ActiveStatementsExceededException = (
  output: any,
  context: __SerdeContext
): ActiveStatementsExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1BatchExecuteStatementException = (
  output: any,
  context: __SerdeContext
): BatchExecuteStatementException => {
  return {
    Message: __expectString(output.Message),
    StatementId: __expectString(output.StatementId),
  } as any;
};

const deserializeAws_json1_1BatchExecuteStatementOutput = (
  output: any,
  context: __SerdeContext
): BatchExecuteStatementOutput => {
  return {
    ClusterIdentifier: __expectString(output.ClusterIdentifier),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Database: __expectString(output.Database),
    DbUser: __expectString(output.DbUser),
    Id: __expectString(output.Id),
    SecretArn: __expectString(output.SecretArn),
    WorkgroupName: __expectString(output.WorkgroupName),
  } as any;
};

const deserializeAws_json1_1CancelStatementResponse = (
  output: any,
  context: __SerdeContext
): CancelStatementResponse => {
  return {
    Status: __expectBoolean(output.Status),
  } as any;
};

const deserializeAws_json1_1ColumnList = (output: any, context: __SerdeContext): ColumnMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ColumnMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ColumnMetadata = (output: any, context: __SerdeContext): ColumnMetadata => {
  return {
    columnDefault: __expectString(output.columnDefault),
    isCaseSensitive: __expectBoolean(output.isCaseSensitive),
    isCurrency: __expectBoolean(output.isCurrency),
    isSigned: __expectBoolean(output.isSigned),
    label: __expectString(output.label),
    length: __expectInt32(output.length),
    name: __expectString(output.name),
    nullable: __expectInt32(output.nullable),
    precision: __expectInt32(output.precision),
    scale: __expectInt32(output.scale),
    schemaName: __expectString(output.schemaName),
    tableName: __expectString(output.tableName),
    typeName: __expectString(output.typeName),
  } as any;
};

const deserializeAws_json1_1ColumnMetadataList = (output: any, context: __SerdeContext): ColumnMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ColumnMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DatabaseConnectionException = (
  output: any,
  context: __SerdeContext
): DatabaseConnectionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DatabaseList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1DescribeStatementResponse = (
  output: any,
  context: __SerdeContext
): DescribeStatementResponse => {
  return {
    ClusterIdentifier: __expectString(output.ClusterIdentifier),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Database: __expectString(output.Database),
    DbUser: __expectString(output.DbUser),
    Duration: __expectLong(output.Duration),
    Error: __expectString(output.Error),
    HasResultSet: __expectBoolean(output.HasResultSet),
    Id: __expectString(output.Id),
    QueryParameters:
      output.QueryParameters != null
        ? deserializeAws_json1_1SqlParametersList(output.QueryParameters, context)
        : undefined,
    QueryString: __expectString(output.QueryString),
    RedshiftPid: __expectLong(output.RedshiftPid),
    RedshiftQueryId: __expectLong(output.RedshiftQueryId),
    ResultRows: __expectLong(output.ResultRows),
    ResultSize: __expectLong(output.ResultSize),
    SecretArn: __expectString(output.SecretArn),
    Status: __expectString(output.Status),
    SubStatements:
      output.SubStatements != null ? deserializeAws_json1_1SubStatementList(output.SubStatements, context) : undefined,
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
    WorkgroupName: __expectString(output.WorkgroupName),
  } as any;
};

const deserializeAws_json1_1DescribeTableResponse = (output: any, context: __SerdeContext): DescribeTableResponse => {
  return {
    ColumnList: output.ColumnList != null ? deserializeAws_json1_1ColumnList(output.ColumnList, context) : undefined,
    NextToken: __expectString(output.NextToken),
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_json1_1ExecuteStatementException = (
  output: any,
  context: __SerdeContext
): ExecuteStatementException => {
  return {
    Message: __expectString(output.Message),
    StatementId: __expectString(output.StatementId),
  } as any;
};

const deserializeAws_json1_1ExecuteStatementOutput = (output: any, context: __SerdeContext): ExecuteStatementOutput => {
  return {
    ClusterIdentifier: __expectString(output.ClusterIdentifier),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Database: __expectString(output.Database),
    DbUser: __expectString(output.DbUser),
    Id: __expectString(output.Id),
    SecretArn: __expectString(output.SecretArn),
    WorkgroupName: __expectString(output.WorkgroupName),
  } as any;
};

const deserializeAws_json1_1Field = (output: any, context: __SerdeContext): Field => {
  if (output.blobValue != null) {
    return {
      blobValue: context.base64Decoder(output.blobValue),
    };
  }
  if (__expectBoolean(output.booleanValue) !== undefined) {
    return { booleanValue: __expectBoolean(output.booleanValue) as any };
  }
  if (__limitedParseDouble(output.doubleValue) !== undefined) {
    return { doubleValue: __limitedParseDouble(output.doubleValue) as any };
  }
  if (__expectBoolean(output.isNull) !== undefined) {
    return { isNull: __expectBoolean(output.isNull) as any };
  }
  if (__expectLong(output.longValue) !== undefined) {
    return { longValue: __expectLong(output.longValue) as any };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_json1_1FieldList = (output: any, context: __SerdeContext): Field[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Field(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_json1_1GetStatementResultResponse = (
  output: any,
  context: __SerdeContext
): GetStatementResultResponse => {
  return {
    ColumnMetadata:
      output.ColumnMetadata != null
        ? deserializeAws_json1_1ColumnMetadataList(output.ColumnMetadata, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
    Records: output.Records != null ? deserializeAws_json1_1SqlRecords(output.Records, context) : undefined,
    TotalNumRows: __expectLong(output.TotalNumRows),
  } as any;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListDatabasesResponse = (output: any, context: __SerdeContext): ListDatabasesResponse => {
  return {
    Databases: output.Databases != null ? deserializeAws_json1_1DatabaseList(output.Databases, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListSchemasResponse = (output: any, context: __SerdeContext): ListSchemasResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Schemas: output.Schemas != null ? deserializeAws_json1_1SchemaList(output.Schemas, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListStatementsResponse = (output: any, context: __SerdeContext): ListStatementsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Statements: output.Statements != null ? deserializeAws_json1_1StatementList(output.Statements, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTablesResponse = (output: any, context: __SerdeContext): ListTablesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tables: output.Tables != null ? deserializeAws_json1_1TableList(output.Tables, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    ResourceId: __expectString(output.ResourceId),
  } as any;
};

const deserializeAws_json1_1SchemaList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SqlParameter = (output: any, context: __SerdeContext): SqlParameter => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_1SqlParametersList = (output: any, context: __SerdeContext): SqlParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SqlParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SqlRecords = (output: any, context: __SerdeContext): Field[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FieldList(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StatementData = (output: any, context: __SerdeContext): StatementData => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Id: __expectString(output.Id),
    IsBatchStatement: __expectBoolean(output.IsBatchStatement),
    QueryParameters:
      output.QueryParameters != null
        ? deserializeAws_json1_1SqlParametersList(output.QueryParameters, context)
        : undefined,
    QueryString: __expectString(output.QueryString),
    QueryStrings:
      output.QueryStrings != null ? deserializeAws_json1_1StatementStringList(output.QueryStrings, context) : undefined,
    SecretArn: __expectString(output.SecretArn),
    StatementName: __expectString(output.StatementName),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

const deserializeAws_json1_1StatementList = (output: any, context: __SerdeContext): StatementData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StatementData(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StatementStringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SubStatementData = (output: any, context: __SerdeContext): SubStatementData => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Duration: __expectLong(output.Duration),
    Error: __expectString(output.Error),
    HasResultSet: __expectBoolean(output.HasResultSet),
    Id: __expectString(output.Id),
    QueryString: __expectString(output.QueryString),
    RedshiftQueryId: __expectLong(output.RedshiftQueryId),
    ResultRows: __expectLong(output.ResultRows),
    ResultSize: __expectLong(output.ResultSize),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

const deserializeAws_json1_1SubStatementList = (output: any, context: __SerdeContext): SubStatementData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SubStatementData(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TableList = (output: any, context: __SerdeContext): TableMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TableMember(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TableMember = (output: any, context: __SerdeContext): TableMember => {
  return {
    name: __expectString(output.name),
    schema: __expectString(output.schema),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
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
