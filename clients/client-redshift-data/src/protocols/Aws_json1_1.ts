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
  expectUnion as __expectUnion,
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
  DatabaseConnectionException,
  DescribeStatementRequest,
  DescribeStatementResponse,
  DescribeTableRequest,
  ExecuteStatementException,
  ExecuteStatementInput,
  ExecuteStatementOutput,
  Field,
  GetStatementResultRequest,
  GetStatementResultResponse,
  InternalServerException,
  ListDatabasesRequest,
  ListSchemasRequest,
  ListStatementsRequest,
  ListStatementsResponse,
  ListTablesRequest,
  ResourceNotFoundException,
  SqlParameter,
  StatementData,
  SubStatementData,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CancelStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListDatabasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListSchemasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ClusterIdentifier: [],
    Database: [],
    DbUser: [],
    SecretArn: [],
    Sqls: _json,
    StatementName: [],
    WithEvent: [],
    WorkgroupName: [],
  });
};

// se_CancelStatementRequest omitted.

// se_DescribeStatementRequest omitted.

// se_DescribeTableRequest omitted.

/**
 * serializeAws_json1_1ExecuteStatementInput
 */
const se_ExecuteStatementInput = (input: ExecuteStatementInput, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ClusterIdentifier: [],
    Database: [],
    DbUser: [],
    Parameters: _json,
    SecretArn: [],
    Sql: [],
    StatementName: [],
    WithEvent: [],
    WorkgroupName: [],
  });
};

// se_GetStatementResultRequest omitted.

// se_ListDatabasesRequest omitted.

// se_ListSchemasRequest omitted.

// se_ListStatementsRequest omitted.

// se_ListTablesRequest omitted.

// se_SqlList omitted.

// se_SqlParameter omitted.

// se_SqlParametersList omitted.

// de_ActiveStatementsExceededException omitted.

// de_BatchExecuteStatementException omitted.

/**
 * deserializeAws_json1_1BatchExecuteStatementOutput
 */
const de_BatchExecuteStatementOutput = (output: any, context: __SerdeContext): BatchExecuteStatementOutput => {
  return take(output, {
    ClusterIdentifier: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Database: __expectString,
    DbUser: __expectString,
    Id: __expectString,
    SecretArn: __expectString,
    WorkgroupName: __expectString,
  }) as any;
};

// de_CancelStatementResponse omitted.

// de_ColumnList omitted.

// de_ColumnMetadata omitted.

// de_ColumnMetadataList omitted.

// de_DatabaseConnectionException omitted.

// de_DatabaseList omitted.

/**
 * deserializeAws_json1_1DescribeStatementResponse
 */
const de_DescribeStatementResponse = (output: any, context: __SerdeContext): DescribeStatementResponse => {
  return take(output, {
    ClusterIdentifier: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Database: __expectString,
    DbUser: __expectString,
    Duration: __expectLong,
    Error: __expectString,
    HasResultSet: __expectBoolean,
    Id: __expectString,
    QueryParameters: _json,
    QueryString: __expectString,
    RedshiftPid: __expectLong,
    RedshiftQueryId: __expectLong,
    ResultRows: __expectLong,
    ResultSize: __expectLong,
    SecretArn: __expectString,
    Status: __expectString,
    SubStatements: (_: any) => de_SubStatementList(_, context),
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    WorkgroupName: __expectString,
  }) as any;
};

// de_DescribeTableResponse omitted.

// de_ExecuteStatementException omitted.

/**
 * deserializeAws_json1_1ExecuteStatementOutput
 */
const de_ExecuteStatementOutput = (output: any, context: __SerdeContext): ExecuteStatementOutput => {
  return take(output, {
    ClusterIdentifier: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Database: __expectString,
    DbUser: __expectString,
    Id: __expectString,
    SecretArn: __expectString,
    WorkgroupName: __expectString,
  }) as any;
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
      return de_Field(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetStatementResultResponse
 */
const de_GetStatementResultResponse = (output: any, context: __SerdeContext): GetStatementResultResponse => {
  return take(output, {
    ColumnMetadata: _json,
    NextToken: __expectString,
    Records: (_: any) => de_SqlRecords(_, context),
    TotalNumRows: __expectLong,
  }) as any;
};

// de_InternalServerException omitted.

// de_ListDatabasesResponse omitted.

// de_ListSchemasResponse omitted.

/**
 * deserializeAws_json1_1ListStatementsResponse
 */
const de_ListStatementsResponse = (output: any, context: __SerdeContext): ListStatementsResponse => {
  return take(output, {
    NextToken: __expectString,
    Statements: (_: any) => de_StatementList(_, context),
  }) as any;
};

// de_ListTablesResponse omitted.

// de_ResourceNotFoundException omitted.

// de_SchemaList omitted.

// de_SqlParameter omitted.

// de_SqlParametersList omitted.

/**
 * deserializeAws_json1_1SqlRecords
 */
const de_SqlRecords = (output: any, context: __SerdeContext): Field[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FieldList(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StatementData
 */
const de_StatementData = (output: any, context: __SerdeContext): StatementData => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    IsBatchStatement: __expectBoolean,
    QueryParameters: _json,
    QueryString: __expectString,
    QueryStrings: _json,
    SecretArn: __expectString,
    StatementName: __expectString,
    Status: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1StatementList
 */
const de_StatementList = (output: any, context: __SerdeContext): StatementData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StatementData(entry, context);
    });
  return retVal;
};

// de_StatementStringList omitted.

/**
 * deserializeAws_json1_1SubStatementData
 */
const de_SubStatementData = (output: any, context: __SerdeContext): SubStatementData => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Duration: __expectLong,
    Error: __expectString,
    HasResultSet: __expectBoolean,
    Id: __expectString,
    QueryString: __expectString,
    RedshiftQueryId: __expectLong,
    ResultRows: __expectLong,
    ResultSize: __expectLong,
    Status: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1SubStatementList
 */
const de_SubStatementList = (output: any, context: __SerdeContext): SubStatementData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SubStatementData(entry, context);
    });
  return retVal;
};

// de_TableList omitted.

// de_TableMember omitted.

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
