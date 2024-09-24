// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
} from "../commands/BatchExecuteStatementCommand";
import { BeginTransactionCommandInput, BeginTransactionCommandOutput } from "../commands/BeginTransactionCommand";
import { CommitTransactionCommandInput, CommitTransactionCommandOutput } from "../commands/CommitTransactionCommand";
import { ExecuteSqlCommandInput, ExecuteSqlCommandOutput } from "../commands/ExecuteSqlCommand";
import { ExecuteStatementCommandInput, ExecuteStatementCommandOutput } from "../commands/ExecuteStatementCommand";
import {
  RollbackTransactionCommandInput,
  RollbackTransactionCommandOutput,
} from "../commands/RollbackTransactionCommand";
import {
  _Record,
  AccessDeniedException,
  ArrayValue,
  BadRequestException,
  DatabaseErrorException,
  DatabaseNotFoundException,
  DatabaseUnavailableException,
  Field,
  ForbiddenException,
  HttpEndpointNotEnabledException,
  InternalServerErrorException,
  InvalidSecretException,
  NotFoundException,
  ResultFrame,
  ResultSetOptions,
  SecretsErrorException,
  ServiceUnavailableError,
  SqlParameter,
  SqlStatementResult,
  StatementTimeoutException,
  StructValue,
  TransactionNotFoundException,
  UnsupportedResultException,
  UpdateResult,
  Value,
} from "../models/models_0";
import { RDSDataServiceException as __BaseException } from "../models/RDSDataServiceException";

/**
 * serializeAws_restJson1BatchExecuteStatementCommand
 */
export const se_BatchExecuteStatementCommand = async (
  input: BatchExecuteStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/BatchExecute");
  let body: any;
  body = JSON.stringify(
    take(input, {
      database: [],
      parameterSets: (_) => se_SqlParameterSets(_, context),
      resourceArn: [],
      schema: [],
      secretArn: [],
      sql: [],
      transactionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BeginTransactionCommand
 */
export const se_BeginTransactionCommand = async (
  input: BeginTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/BeginTransaction");
  let body: any;
  body = JSON.stringify(
    take(input, {
      database: [],
      resourceArn: [],
      schema: [],
      secretArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CommitTransactionCommand
 */
export const se_CommitTransactionCommand = async (
  input: CommitTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CommitTransaction");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceArn: [],
      secretArn: [],
      transactionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExecuteSqlCommand
 */
export const se_ExecuteSqlCommand = async (
  input: ExecuteSqlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ExecuteSql");
  let body: any;
  body = JSON.stringify(
    take(input, {
      awsSecretStoreArn: [],
      database: [],
      dbClusterOrInstanceArn: [],
      schema: [],
      sqlStatements: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExecuteStatementCommand
 */
export const se_ExecuteStatementCommand = async (
  input: ExecuteStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/Execute");
  let body: any;
  body = JSON.stringify(
    take(input, {
      continueAfterTimeout: [],
      database: [],
      formatRecordsAs: [],
      includeResultMetadata: [],
      parameters: (_) => se_SqlParametersList(_, context),
      resourceArn: [],
      resultSetOptions: (_) => _json(_),
      schema: [],
      secretArn: [],
      sql: [],
      transactionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RollbackTransactionCommand
 */
export const se_RollbackTransactionCommand = async (
  input: RollbackTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/RollbackTransaction");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceArn: [],
      secretArn: [],
      transactionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchExecuteStatementCommand
 */
export const de_BatchExecuteStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchExecuteStatementCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    updateResults: (_) => de_UpdateResults(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BeginTransactionCommand
 */
export const de_BeginTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BeginTransactionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    transactionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CommitTransactionCommand
 */
export const de_CommitTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CommitTransactionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    transactionStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ExecuteSqlCommand
 */
export const de_ExecuteSqlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteSqlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    sqlStatementResults: (_) => de_SqlStatementResults(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ExecuteStatementCommand
 */
export const de_ExecuteStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteStatementCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    columnMetadata: _json,
    formattedRecords: __expectString,
    generatedFields: (_) => de_FieldList(_, context),
    numberOfRecordsUpdated: __expectLong,
    records: (_) => de_SqlRecords(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RollbackTransactionCommand
 */
export const de_RollbackTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RollbackTransactionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    transactionStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rdsdata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.rdsdata#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "DatabaseErrorException":
    case "com.amazonaws.rdsdata#DatabaseErrorException":
      throw await de_DatabaseErrorExceptionRes(parsedOutput, context);
    case "DatabaseNotFoundException":
    case "com.amazonaws.rdsdata#DatabaseNotFoundException":
      throw await de_DatabaseNotFoundExceptionRes(parsedOutput, context);
    case "DatabaseUnavailableException":
    case "com.amazonaws.rdsdata#DatabaseUnavailableException":
      throw await de_DatabaseUnavailableExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.rdsdata#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "HttpEndpointNotEnabledException":
    case "com.amazonaws.rdsdata#HttpEndpointNotEnabledException":
      throw await de_HttpEndpointNotEnabledExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.rdsdata#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "InvalidSecretException":
    case "com.amazonaws.rdsdata#InvalidSecretException":
      throw await de_InvalidSecretExceptionRes(parsedOutput, context);
    case "SecretsErrorException":
    case "com.amazonaws.rdsdata#SecretsErrorException":
      throw await de_SecretsErrorExceptionRes(parsedOutput, context);
    case "ServiceUnavailableError":
    case "com.amazonaws.rdsdata#ServiceUnavailableError":
      throw await de_ServiceUnavailableErrorRes(parsedOutput, context);
    case "StatementTimeoutException":
    case "com.amazonaws.rdsdata#StatementTimeoutException":
      throw await de_StatementTimeoutExceptionRes(parsedOutput, context);
    case "TransactionNotFoundException":
    case "com.amazonaws.rdsdata#TransactionNotFoundException":
      throw await de_TransactionNotFoundExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.rdsdata#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedResultException":
    case "com.amazonaws.rdsdata#UnsupportedResultException":
      throw await de_UnsupportedResultExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DatabaseErrorExceptionRes
 */
const de_DatabaseErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DatabaseErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DatabaseErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DatabaseNotFoundExceptionRes
 */
const de_DatabaseNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DatabaseNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DatabaseNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DatabaseUnavailableExceptionRes
 */
const de_DatabaseUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DatabaseUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {});
  Object.assign(contents, doc);
  const exception = new DatabaseUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1HttpEndpointNotEnabledExceptionRes
 */
const de_HttpEndpointNotEnabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HttpEndpointNotEnabledException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new HttpEndpointNotEnabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerErrorExceptionRes
 */
const de_InternalServerErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {});
  Object.assign(contents, doc);
  const exception = new InternalServerErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidSecretExceptionRes
 */
const de_InvalidSecretExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSecretException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidSecretException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1SecretsErrorExceptionRes
 */
const de_SecretsErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SecretsErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new SecretsErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableErrorRes
 */
const de_ServiceUnavailableErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableError> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {});
  Object.assign(contents, doc);
  const exception = new ServiceUnavailableError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1StatementTimeoutExceptionRes
 */
const de_StatementTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StatementTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    dbConnectionId: __expectLong,
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new StatementTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TransactionNotFoundExceptionRes
 */
const de_TransactionNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TransactionNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TransactionNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnsupportedResultExceptionRes
 */
const de_UnsupportedResultExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedResultException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedResultException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1ArrayOfArray
 */
const se_ArrayOfArray = (input: ArrayValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ArrayValue(entry, context);
    });
};

/**
 * serializeAws_restJson1ArrayValue
 */
const se_ArrayValue = (input: ArrayValue, context: __SerdeContext): any => {
  return ArrayValue.visit(input, {
    arrayValues: (value) => ({ arrayValues: se_ArrayOfArray(value, context) }),
    booleanValues: (value) => ({ booleanValues: _json(value) }),
    doubleValues: (value) => ({ doubleValues: se_DoubleArray(value, context) }),
    longValues: (value) => ({ longValues: _json(value) }),
    stringValues: (value) => ({ stringValues: _json(value) }),
    _: (name, value) => ({ name: value } as any),
  });
};

// se_BooleanArray omitted.

/**
 * serializeAws_restJson1DoubleArray
 */
const se_DoubleArray = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

/**
 * serializeAws_restJson1Field
 */
const se_Field = (input: Field, context: __SerdeContext): any => {
  return Field.visit(input, {
    arrayValue: (value) => ({ arrayValue: se_ArrayValue(value, context) }),
    blobValue: (value) => ({ blobValue: context.base64Encoder(value) }),
    booleanValue: (value) => ({ booleanValue: value }),
    doubleValue: (value) => ({ doubleValue: __serializeFloat(value) }),
    isNull: (value) => ({ isNull: value }),
    longValue: (value) => ({ longValue: value }),
    stringValue: (value) => ({ stringValue: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

// se_LongArray omitted.

// se_ResultSetOptions omitted.

/**
 * serializeAws_restJson1SqlParameter
 */
const se_SqlParameter = (input: SqlParameter, context: __SerdeContext): any => {
  return take(input, {
    name: [],
    typeHint: [],
    value: (_) => se_Field(_, context),
  });
};

/**
 * serializeAws_restJson1SqlParameterSets
 */
const se_SqlParameterSets = (input: SqlParameter[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SqlParametersList(entry, context);
    });
};

/**
 * serializeAws_restJson1SqlParametersList
 */
const se_SqlParametersList = (input: SqlParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SqlParameter(entry, context);
    });
};

// se_StringArray omitted.

/**
 * deserializeAws_restJson1ArrayOfArray
 */
const de_ArrayOfArray = (output: any, context: __SerdeContext): ArrayValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ArrayValue(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ArrayValue
 */
const de_ArrayValue = (output: any, context: __SerdeContext): ArrayValue => {
  if (output.arrayValues != null) {
    return {
      arrayValues: de_ArrayOfArray(output.arrayValues, context),
    };
  }
  if (output.booleanValues != null) {
    return {
      booleanValues: _json(output.booleanValues),
    };
  }
  if (output.doubleValues != null) {
    return {
      doubleValues: de_DoubleArray(output.doubleValues, context),
    };
  }
  if (output.longValues != null) {
    return {
      longValues: _json(output.longValues),
    };
  }
  if (output.stringValues != null) {
    return {
      stringValues: _json(output.stringValues),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ArrayValueList
 */
const de_ArrayValueList = (output: any, context: __SerdeContext): Value[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Value(__expectUnion(entry), context);
    });
  return retVal;
};

// de_BooleanArray omitted.

// de_ColumnMetadata omitted.

/**
 * deserializeAws_restJson1DoubleArray
 */
const de_DoubleArray = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Field
 */
const de_Field = (output: any, context: __SerdeContext): Field => {
  if (output.arrayValue != null) {
    return {
      arrayValue: de_ArrayValue(__expectUnion(output.arrayValue), context),
    };
  }
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
 * deserializeAws_restJson1FieldList
 */
const de_FieldList = (output: any, context: __SerdeContext): Field[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Field(__expectUnion(entry), context);
    });
  return retVal;
};

// de_LongArray omitted.

// de_Metadata omitted.

/**
 * deserializeAws_restJson1_Record
 */
const de__Record = (output: any, context: __SerdeContext): _Record => {
  return take(output, {
    values: (_: any) => de_Row(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1Records
 */
const de_Records = (output: any, context: __SerdeContext): _Record[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de__Record(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResultFrame
 */
const de_ResultFrame = (output: any, context: __SerdeContext): ResultFrame => {
  return take(output, {
    records: (_: any) => de_Records(_, context),
    resultSetMetadata: _json,
  }) as any;
};

// de_ResultSetMetadata omitted.

/**
 * deserializeAws_restJson1Row
 */
const de_Row = (output: any, context: __SerdeContext): Value[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Value(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SqlRecords
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
 * deserializeAws_restJson1SqlStatementResult
 */
const de_SqlStatementResult = (output: any, context: __SerdeContext): SqlStatementResult => {
  return take(output, {
    numberOfRecordsUpdated: __expectLong,
    resultFrame: (_: any) => de_ResultFrame(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1SqlStatementResults
 */
const de_SqlStatementResults = (output: any, context: __SerdeContext): SqlStatementResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SqlStatementResult(entry, context);
    });
  return retVal;
};

// de_StringArray omitted.

/**
 * deserializeAws_restJson1StructValue
 */
const de_StructValue = (output: any, context: __SerdeContext): StructValue => {
  return take(output, {
    attributes: (_: any) => de_ArrayValueList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1UpdateResult
 */
const de_UpdateResult = (output: any, context: __SerdeContext): UpdateResult => {
  return take(output, {
    generatedFields: (_: any) => de_FieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1UpdateResults
 */
const de_UpdateResults = (output: any, context: __SerdeContext): UpdateResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UpdateResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Value
 */
const de_Value = (output: any, context: __SerdeContext): Value => {
  if (output.arrayValues != null) {
    return {
      arrayValues: de_ArrayValueList(output.arrayValues, context),
    };
  }
  if (__expectLong(output.bigIntValue) !== undefined) {
    return { bigIntValue: __expectLong(output.bigIntValue) as any };
  }
  if (__expectBoolean(output.bitValue) !== undefined) {
    return { bitValue: __expectBoolean(output.bitValue) as any };
  }
  if (output.blobValue != null) {
    return {
      blobValue: context.base64Decoder(output.blobValue),
    };
  }
  if (__limitedParseDouble(output.doubleValue) !== undefined) {
    return { doubleValue: __limitedParseDouble(output.doubleValue) as any };
  }
  if (__expectInt32(output.intValue) !== undefined) {
    return { intValue: __expectInt32(output.intValue) as any };
  }
  if (__expectBoolean(output.isNull) !== undefined) {
    return { isNull: __expectBoolean(output.isNull) as any };
  }
  if (__limitedParseFloat32(output.realValue) !== undefined) {
    return { realValue: __limitedParseFloat32(output.realValue) as any };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  if (output.structValue != null) {
    return {
      structValue: de_StructValue(output.structValue, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

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
