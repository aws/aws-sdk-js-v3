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

/**
 * serializeAws_json1_1BatchExecuteStatementCommand
 */
export const se_BatchExecuteStatementCommand = async (
  input: BatchExecuteStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchExecuteStatement");
  let body: any;
  body = JSON.stringify(se_BatchExecuteStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelStatementCommand
 */
export const se_CancelStatementCommand = async (
  input: CancelStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelStatement");
  let body: any;
  body = JSON.stringify(se_CancelStatementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStatementCommand
 */
export const se_DescribeStatementCommand = async (
  input: DescribeStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStatement");
  let body: any;
  body = JSON.stringify(se_DescribeStatementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTableCommand
 */
export const se_DescribeTableCommand = async (
  input: DescribeTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTable");
  let body: any;
  body = JSON.stringify(se_DescribeTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ExecuteStatementCommand
 */
export const se_ExecuteStatementCommand = async (
  input: ExecuteStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExecuteStatement");
  let body: any;
  body = JSON.stringify(se_ExecuteStatementInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetStatementResultCommand
 */
export const se_GetStatementResultCommand = async (
  input: GetStatementResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetStatementResult");
  let body: any;
  body = JSON.stringify(se_GetStatementResultRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDatabasesCommand
 */
export const se_ListDatabasesCommand = async (
  input: ListDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDatabases");
  let body: any;
  body = JSON.stringify(se_ListDatabasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSchemasCommand
 */
export const se_ListSchemasCommand = async (
  input: ListSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSchemas");
  let body: any;
  body = JSON.stringify(se_ListSchemasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListStatementsCommand
 */
export const se_ListStatementsCommand = async (
  input: ListStatementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListStatements");
  let body: any;
  body = JSON.stringify(se_ListStatementsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTablesCommand
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
 * deserializeAws_json1_1BatchExecuteStatementCommand
 */
export const de_BatchExecuteStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchExecuteStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchExecuteStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchExecuteStatementOutput(data, context);
  const response: BatchExecuteStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1BatchExecuteStatementCommandError
 */
const de_BatchExecuteStatementCommandError = async (
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
      throw await de_ActiveStatementsExceededExceptionRes(parsedOutput, context);
    case "BatchExecuteStatementException":
    case "com.amazonaws.redshiftdata#BatchExecuteStatementException":
      throw await de_BatchExecuteStatementExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
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
 * deserializeAws_json1_1CancelStatementCommand
 */
export const de_CancelStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelStatementResponse(data, context);
  const response: CancelStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CancelStatementCommandError
 */
const de_CancelStatementCommandError = async (
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
      throw await de_DatabaseConnectionExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftdata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
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
 * deserializeAws_json1_1DescribeStatementCommand
 */
export const de_DescribeStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStatementResponse(data, context);
  const response: DescribeStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeStatementCommandError
 */
const de_DescribeStatementCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftdata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
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
 * deserializeAws_json1_1DescribeTableCommand
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
 * deserializeAws_json1_1DescribeTableCommandError
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
    case "DatabaseConnectionException":
    case "com.amazonaws.redshiftdata#DatabaseConnectionException":
      throw await de_DatabaseConnectionExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
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
 * deserializeAws_json1_1ExecuteStatementCommand
 */
export const de_ExecuteStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExecuteStatementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ExecuteStatementOutput(data, context);
  const response: ExecuteStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ExecuteStatementCommandError
 */
const de_ExecuteStatementCommandError = async (
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
      throw await de_ActiveStatementsExceededExceptionRes(parsedOutput, context);
    case "ExecuteStatementException":
    case "com.amazonaws.redshiftdata#ExecuteStatementException":
      throw await de_ExecuteStatementExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
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
 * deserializeAws_json1_1GetStatementResultCommand
 */
export const de_GetStatementResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStatementResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetStatementResultCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetStatementResultResponse(data, context);
  const response: GetStatementResultCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetStatementResultCommandError
 */
const de_GetStatementResultCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftdata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
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
 * deserializeAws_json1_1ListDatabasesCommand
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
 * deserializeAws_json1_1ListDatabasesCommandError
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
    case "DatabaseConnectionException":
    case "com.amazonaws.redshiftdata#DatabaseConnectionException":
      throw await de_DatabaseConnectionExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
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
 * deserializeAws_json1_1ListSchemasCommand
 */
export const de_ListSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSchemasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSchemasResponse(data, context);
  const response: ListSchemasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSchemasCommandError
 */
const de_ListSchemasCommandError = async (
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
      throw await de_DatabaseConnectionExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
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
 * deserializeAws_json1_1ListStatementsCommand
 */
export const de_ListStatementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStatementsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStatementsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStatementsResponse(data, context);
  const response: ListStatementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListStatementsCommandError
 */
const de_ListStatementsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
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
 * deserializeAws_json1_1ListTablesCommand
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
 * deserializeAws_json1_1ListTablesCommandError
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
    case "DatabaseConnectionException":
    case "com.amazonaws.redshiftdata#DatabaseConnectionException":
      throw await de_DatabaseConnectionExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
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
 * deserializeAws_json1_1ActiveStatementsExceededExceptionRes
 */
const de_ActiveStatementsExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActiveStatementsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ActiveStatementsExceededException(body, context);
  const exception = new ActiveStatementsExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1BatchExecuteStatementExceptionRes
 */
const de_BatchExecuteStatementExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BatchExecuteStatementException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BatchExecuteStatementException(body, context);
  const exception = new BatchExecuteStatementException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DatabaseConnectionExceptionRes
 */
const de_DatabaseConnectionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DatabaseConnectionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DatabaseConnectionException(body, context);
  const exception = new DatabaseConnectionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ExecuteStatementExceptionRes
 */
const de_ExecuteStatementExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExecuteStatementException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ExecuteStatementException(body, context);
  const exception = new ExecuteStatementException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerExceptionRes
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
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
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
 * deserializeAws_json1_1ValidationExceptionRes
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
 * serializeAws_json1_1BatchExecuteStatementInput
 */
const se_BatchExecuteStatementInput = (input: BatchExecuteStatementInput, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ClusterIdentifier != null && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.Database != null && { Database: input.Database }),
    ...(input.DbUser != null && { DbUser: input.DbUser }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.Sqls != null && { Sqls: se_SqlList(input.Sqls, context) }),
    ...(input.StatementName != null && { StatementName: input.StatementName }),
    ...(input.WithEvent != null && { WithEvent: input.WithEvent }),
    ...(input.WorkgroupName != null && { WorkgroupName: input.WorkgroupName }),
  };
};

/**
 * serializeAws_json1_1CancelStatementRequest
 */
const se_CancelStatementRequest = (input: CancelStatementRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1DescribeStatementRequest
 */
const se_DescribeStatementRequest = (input: DescribeStatementRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1DescribeTableRequest
 */
const se_DescribeTableRequest = (input: DescribeTableRequest, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_1ExecuteStatementInput
 */
const se_ExecuteStatementInput = (input: ExecuteStatementInput, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ClusterIdentifier != null && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.Database != null && { Database: input.Database }),
    ...(input.DbUser != null && { DbUser: input.DbUser }),
    ...(input.Parameters != null && { Parameters: se_SqlParametersList(input.Parameters, context) }),
    ...(input.SecretArn != null && { SecretArn: input.SecretArn }),
    ...(input.Sql != null && { Sql: input.Sql }),
    ...(input.StatementName != null && { StatementName: input.StatementName }),
    ...(input.WithEvent != null && { WithEvent: input.WithEvent }),
    ...(input.WorkgroupName != null && { WorkgroupName: input.WorkgroupName }),
  };
};

/**
 * serializeAws_json1_1GetStatementResultRequest
 */
const se_GetStatementResultRequest = (input: GetStatementResultRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListDatabasesRequest
 */
const se_ListDatabasesRequest = (input: ListDatabasesRequest, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_1ListSchemasRequest
 */
const se_ListSchemasRequest = (input: ListSchemasRequest, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_1ListStatementsRequest
 */
const se_ListStatementsRequest = (input: ListStatementsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RoleLevel != null && { RoleLevel: input.RoleLevel }),
    ...(input.StatementName != null && { StatementName: input.StatementName }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1ListTablesRequest
 */
const se_ListTablesRequest = (input: ListTablesRequest, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_1SqlList
 */
const se_SqlList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SqlParameter
 */
const se_SqlParameter = (input: SqlParameter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1SqlParametersList
 */
const se_SqlParametersList = (input: SqlParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SqlParameter(entry, context);
    });
};

/**
 * deserializeAws_json1_1ActiveStatementsExceededException
 */
const de_ActiveStatementsExceededException = (
  output: any,
  context: __SerdeContext
): ActiveStatementsExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1BatchExecuteStatementException
 */
const de_BatchExecuteStatementException = (output: any, context: __SerdeContext): BatchExecuteStatementException => {
  return {
    Message: __expectString(output.Message),
    StatementId: __expectString(output.StatementId),
  } as any;
};

/**
 * deserializeAws_json1_1BatchExecuteStatementOutput
 */
const de_BatchExecuteStatementOutput = (output: any, context: __SerdeContext): BatchExecuteStatementOutput => {
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

/**
 * deserializeAws_json1_1CancelStatementResponse
 */
const de_CancelStatementResponse = (output: any, context: __SerdeContext): CancelStatementResponse => {
  return {
    Status: __expectBoolean(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ColumnList
 */
const de_ColumnList = (output: any, context: __SerdeContext): ColumnMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ColumnMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ColumnMetadata
 */
const de_ColumnMetadata = (output: any, context: __SerdeContext): ColumnMetadata => {
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

/**
 * deserializeAws_json1_1ColumnMetadataList
 */
const de_ColumnMetadataList = (output: any, context: __SerdeContext): ColumnMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ColumnMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DatabaseConnectionException
 */
const de_DatabaseConnectionException = (output: any, context: __SerdeContext): DatabaseConnectionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DatabaseList
 */
const de_DatabaseList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1DescribeStatementResponse
 */
const de_DescribeStatementResponse = (output: any, context: __SerdeContext): DescribeStatementResponse => {
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
    QueryParameters: output.QueryParameters != null ? de_SqlParametersList(output.QueryParameters, context) : undefined,
    QueryString: __expectString(output.QueryString),
    RedshiftPid: __expectLong(output.RedshiftPid),
    RedshiftQueryId: __expectLong(output.RedshiftQueryId),
    ResultRows: __expectLong(output.ResultRows),
    ResultSize: __expectLong(output.ResultSize),
    SecretArn: __expectString(output.SecretArn),
    Status: __expectString(output.Status),
    SubStatements: output.SubStatements != null ? de_SubStatementList(output.SubStatements, context) : undefined,
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
    WorkgroupName: __expectString(output.WorkgroupName),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTableResponse
 */
const de_DescribeTableResponse = (output: any, context: __SerdeContext): DescribeTableResponse => {
  return {
    ColumnList: output.ColumnList != null ? de_ColumnList(output.ColumnList, context) : undefined,
    NextToken: __expectString(output.NextToken),
    TableName: __expectString(output.TableName),
  } as any;
};

/**
 * deserializeAws_json1_1ExecuteStatementException
 */
const de_ExecuteStatementException = (output: any, context: __SerdeContext): ExecuteStatementException => {
  return {
    Message: __expectString(output.Message),
    StatementId: __expectString(output.StatementId),
  } as any;
};

/**
 * deserializeAws_json1_1ExecuteStatementOutput
 */
const de_ExecuteStatementOutput = (output: any, context: __SerdeContext): ExecuteStatementOutput => {
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

/**
 * deserializeAws_json1_1Field
 */
const de_Field = (output: any, context: __SerdeContext): Field => {
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

/**
 * deserializeAws_json1_1FieldList
 */
const de_FieldList = (output: any, context: __SerdeContext): Field[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Field(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetStatementResultResponse
 */
const de_GetStatementResultResponse = (output: any, context: __SerdeContext): GetStatementResultResponse => {
  return {
    ColumnMetadata: output.ColumnMetadata != null ? de_ColumnMetadataList(output.ColumnMetadata, context) : undefined,
    NextToken: __expectString(output.NextToken),
    Records: output.Records != null ? de_SqlRecords(output.Records, context) : undefined,
    TotalNumRows: __expectLong(output.TotalNumRows),
  } as any;
};

/**
 * deserializeAws_json1_1InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListDatabasesResponse
 */
const de_ListDatabasesResponse = (output: any, context: __SerdeContext): ListDatabasesResponse => {
  return {
    Databases: output.Databases != null ? de_DatabaseList(output.Databases, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListSchemasResponse
 */
const de_ListSchemasResponse = (output: any, context: __SerdeContext): ListSchemasResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Schemas: output.Schemas != null ? de_SchemaList(output.Schemas, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListStatementsResponse
 */
const de_ListStatementsResponse = (output: any, context: __SerdeContext): ListStatementsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Statements: output.Statements != null ? de_StatementList(output.Statements, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTablesResponse
 */
const de_ListTablesResponse = (output: any, context: __SerdeContext): ListTablesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tables: output.Tables != null ? de_TableList(output.Tables, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    ResourceId: __expectString(output.ResourceId),
  } as any;
};

/**
 * deserializeAws_json1_1SchemaList
 */
const de_SchemaList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1SqlParameter
 */
const de_SqlParameter = (output: any, context: __SerdeContext): SqlParameter => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1SqlParametersList
 */
const de_SqlParametersList = (output: any, context: __SerdeContext): SqlParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SqlParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SqlRecords
 */
const de_SqlRecords = (output: any, context: __SerdeContext): Field[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FieldList(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StatementData
 */
const de_StatementData = (output: any, context: __SerdeContext): StatementData => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Id: __expectString(output.Id),
    IsBatchStatement: __expectBoolean(output.IsBatchStatement),
    QueryParameters: output.QueryParameters != null ? de_SqlParametersList(output.QueryParameters, context) : undefined,
    QueryString: __expectString(output.QueryString),
    QueryStrings: output.QueryStrings != null ? de_StatementStringList(output.QueryStrings, context) : undefined,
    SecretArn: __expectString(output.SecretArn),
    StatementName: __expectString(output.StatementName),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StatementList
 */
const de_StatementList = (output: any, context: __SerdeContext): StatementData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StatementData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StatementStringList
 */
const de_StatementStringList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1SubStatementData
 */
const de_SubStatementData = (output: any, context: __SerdeContext): SubStatementData => {
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

/**
 * deserializeAws_json1_1SubStatementList
 */
const de_SubStatementList = (output: any, context: __SerdeContext): SubStatementData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SubStatementData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TableList
 */
const de_TableList = (output: any, context: __SerdeContext): TableMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TableMember(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TableMember
 */
const de_TableMember = (output: any, context: __SerdeContext): TableMember => {
  return {
    name: __expectString(output.name),
    schema: __expectString(output.schema),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1ValidationException
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `RedshiftData.${operation}`,
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
