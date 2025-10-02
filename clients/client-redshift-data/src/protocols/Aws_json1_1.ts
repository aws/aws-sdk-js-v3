// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
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
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import {
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
} from "../commands/BatchExecuteStatementCommand";
import { CancelStatementCommandInput, CancelStatementCommandOutput } from "../commands/CancelStatementCommand";
import { DescribeStatementCommandInput, DescribeStatementCommandOutput } from "../commands/DescribeStatementCommand";
import { DescribeTableCommandInput, DescribeTableCommandOutput } from "../commands/DescribeTableCommand";
import { ExecuteStatementCommandInput, ExecuteStatementCommandOutput } from "../commands/ExecuteStatementCommand";
import { GetStatementResultCommandInput, GetStatementResultCommandOutput } from "../commands/GetStatementResultCommand";
import {
  GetStatementResultV2CommandInput,
  GetStatementResultV2CommandOutput,
} from "../commands/GetStatementResultV2Command";
import { ListDatabasesCommandInput, ListDatabasesCommandOutput } from "../commands/ListDatabasesCommand";
import { ListSchemasCommandInput, ListSchemasCommandOutput } from "../commands/ListSchemasCommand";
import { ListStatementsCommandInput, ListStatementsCommandOutput } from "../commands/ListStatementsCommand";
import { ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import {
  ActiveSessionsExceededException,
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
  GetStatementResultV2Request,
  InternalServerException,
  ListDatabasesRequest,
  ListSchemasRequest,
  ListStatementsRequest,
  ListStatementsResponse,
  ListTablesRequest,
  QueryTimeoutException,
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
 * serializeAws_json1_1GetStatementResultV2Command
 */
export const se_GetStatementResultV2Command = async (
  input: GetStatementResultV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetStatementResultV2");
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
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1CancelStatementCommand
 */
export const de_CancelStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DescribeStatementCommand
 */
export const de_DescribeStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DescribeTableCommand
 */
export const de_DescribeTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1ExecuteStatementCommand
 */
export const de_ExecuteStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteStatementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1GetStatementResultCommand
 */
export const de_GetStatementResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStatementResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1GetStatementResultV2Command
 */
export const de_GetStatementResultV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStatementResultV2CommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetStatementResultV2CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDatabasesCommand
 */
export const de_ListDatabasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatabasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1ListSchemasCommand
 */
export const de_ListSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1ListStatementsCommand
 */
export const de_ListStatementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStatementsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1ListTablesCommand
 */
export const de_ListTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserialize_Aws_json1_1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActiveSessionsExceededException":
    case "com.amazonaws.redshiftdata#ActiveSessionsExceededException":
      throw await de_ActiveSessionsExceededExceptionRes(parsedOutput, context);
    case "ActiveStatementsExceededException":
    case "com.amazonaws.redshiftdata#ActiveStatementsExceededException":
      throw await de_ActiveStatementsExceededExceptionRes(parsedOutput, context);
    case "BatchExecuteStatementException":
    case "com.amazonaws.redshiftdata#BatchExecuteStatementException":
      throw await de_BatchExecuteStatementExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "DatabaseConnectionException":
    case "com.amazonaws.redshiftdata#DatabaseConnectionException":
      throw await de_DatabaseConnectionExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftdata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "QueryTimeoutException":
    case "com.amazonaws.redshiftdata#QueryTimeoutException":
      throw await de_QueryTimeoutExceptionRes(parsedOutput, context);
    case "ExecuteStatementException":
    case "com.amazonaws.redshiftdata#ExecuteStatementException":
      throw await de_ExecuteStatementExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_json1_1ActiveSessionsExceededExceptionRes
 */
const de_ActiveSessionsExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActiveSessionsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ActiveSessionsExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
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
 * deserializeAws_json1_1QueryTimeoutExceptionRes
 */
const de_QueryTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueryTimeoutException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new QueryTimeoutException({
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
    ResultFormat: [],
    SecretArn: [],
    SessionId: [],
    SessionKeepAliveSeconds: [],
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
    ResultFormat: [],
    SecretArn: [],
    SessionId: [],
    SessionKeepAliveSeconds: [],
    Sql: [],
    StatementName: [],
    WithEvent: [],
    WorkgroupName: [],
  });
};

// se_GetStatementResultRequest omitted.

// se_GetStatementResultV2Request omitted.

// se_ListDatabasesRequest omitted.

// se_ListSchemasRequest omitted.

// se_ListStatementsRequest omitted.

// se_ListTablesRequest omitted.

// se_SqlList omitted.

// se_SqlParameter omitted.

// se_SqlParametersList omitted.

// de_ActiveSessionsExceededException omitted.

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
    DbGroups: _json,
    DbUser: __expectString,
    Id: __expectString,
    SecretArn: __expectString,
    SessionId: __expectString,
    WorkgroupName: __expectString,
  }) as any;
};

// de_CancelStatementResponse omitted.

// de_ColumnList omitted.

// de_ColumnMetadata omitted.

// de_ColumnMetadataList omitted.

// de_DatabaseConnectionException omitted.

// de_DatabaseList omitted.

// de_DbGroupList omitted.

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
    ResultFormat: __expectString,
    ResultRows: __expectLong,
    ResultSize: __expectLong,
    SecretArn: __expectString,
    SessionId: __expectString,
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
    DbGroups: _json,
    DbUser: __expectString,
    Id: __expectString,
    SecretArn: __expectString,
    SessionId: __expectString,
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

// de_FormattedSqlRecords omitted.

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

// de_GetStatementResultV2Response omitted.

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

// de_QueryRecords omitted.

// de_QueryTimeoutException omitted.

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
    ResultFormat: __expectString,
    SecretArn: __expectString,
    SessionId: __expectString,
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
