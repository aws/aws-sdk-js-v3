// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  map as __map,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  ColumnMetadata,
  Field,
  ForbiddenException,
  InternalServerErrorException,
  NotFoundException,
  ResultFrame,
  ResultSetMetadata,
  ResultSetOptions,
  ServiceUnavailableError,
  SqlParameter,
  SqlStatementResult,
  StatementTimeoutException,
  StructValue,
  UpdateResult,
  Value,
} from "../models/models_0";
import { RDSDataServiceException as __BaseException } from "../models/RDSDataServiceException";

export const serializeAws_restJson1BatchExecuteStatementCommand = async (
  input: BatchExecuteStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/BatchExecute";
  let body: any;
  body = JSON.stringify({
    ...(input.database != null && { database: input.database }),
    ...(input.parameterSets != null && {
      parameterSets: serializeAws_restJson1SqlParameterSets(input.parameterSets, context),
    }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.schema != null && { schema: input.schema }),
    ...(input.secretArn != null && { secretArn: input.secretArn }),
    ...(input.sql != null && { sql: input.sql }),
    ...(input.transactionId != null && { transactionId: input.transactionId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1BeginTransactionCommand = async (
  input: BeginTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/BeginTransaction";
  let body: any;
  body = JSON.stringify({
    ...(input.database != null && { database: input.database }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.schema != null && { schema: input.schema }),
    ...(input.secretArn != null && { secretArn: input.secretArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CommitTransactionCommand = async (
  input: CommitTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CommitTransaction";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.secretArn != null && { secretArn: input.secretArn }),
    ...(input.transactionId != null && { transactionId: input.transactionId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ExecuteSqlCommand = async (
  input: ExecuteSqlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ExecuteSql";
  let body: any;
  body = JSON.stringify({
    ...(input.awsSecretStoreArn != null && { awsSecretStoreArn: input.awsSecretStoreArn }),
    ...(input.database != null && { database: input.database }),
    ...(input.dbClusterOrInstanceArn != null && { dbClusterOrInstanceArn: input.dbClusterOrInstanceArn }),
    ...(input.schema != null && { schema: input.schema }),
    ...(input.sqlStatements != null && { sqlStatements: input.sqlStatements }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ExecuteStatementCommand = async (
  input: ExecuteStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/Execute";
  let body: any;
  body = JSON.stringify({
    ...(input.continueAfterTimeout != null && { continueAfterTimeout: input.continueAfterTimeout }),
    ...(input.database != null && { database: input.database }),
    ...(input.formatRecordsAs != null && { formatRecordsAs: input.formatRecordsAs }),
    ...(input.includeResultMetadata != null && { includeResultMetadata: input.includeResultMetadata }),
    ...(input.parameters != null && { parameters: serializeAws_restJson1SqlParametersList(input.parameters, context) }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.resultSetOptions != null && {
      resultSetOptions: serializeAws_restJson1ResultSetOptions(input.resultSetOptions, context),
    }),
    ...(input.schema != null && { schema: input.schema }),
    ...(input.secretArn != null && { secretArn: input.secretArn }),
    ...(input.sql != null && { sql: input.sql }),
    ...(input.transactionId != null && { transactionId: input.transactionId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1RollbackTransactionCommand = async (
  input: RollbackTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/RollbackTransaction";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.secretArn != null && { secretArn: input.secretArn }),
    ...(input.transactionId != null && { transactionId: input.transactionId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1BatchExecuteStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchExecuteStatementCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchExecuteStatementCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.updateResults != null) {
    contents.updateResults = deserializeAws_restJson1UpdateResults(data.updateResults, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchExecuteStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchExecuteStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rdsdata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.rdsdata#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.rdsdata#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.rdsdata#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableError":
    case "com.amazonaws.rdsdata#ServiceUnavailableError":
      throw await deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context);
    case "StatementTimeoutException":
    case "com.amazonaws.rdsdata#StatementTimeoutException":
      throw await deserializeAws_restJson1StatementTimeoutExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BeginTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BeginTransactionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BeginTransactionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.transactionId != null) {
    contents.transactionId = __expectString(data.transactionId);
  }
  return contents;
};

const deserializeAws_restJson1BeginTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BeginTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rdsdata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.rdsdata#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.rdsdata#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.rdsdata#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableError":
    case "com.amazonaws.rdsdata#ServiceUnavailableError":
      throw await deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context);
    case "StatementTimeoutException":
    case "com.amazonaws.rdsdata#StatementTimeoutException":
      throw await deserializeAws_restJson1StatementTimeoutExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CommitTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CommitTransactionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CommitTransactionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.transactionStatus != null) {
    contents.transactionStatus = __expectString(data.transactionStatus);
  }
  return contents;
};

const deserializeAws_restJson1CommitTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CommitTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rdsdata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.rdsdata#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.rdsdata#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.rdsdata#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.rdsdata#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableError":
    case "com.amazonaws.rdsdata#ServiceUnavailableError":
      throw await deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context);
    case "StatementTimeoutException":
    case "com.amazonaws.rdsdata#StatementTimeoutException":
      throw await deserializeAws_restJson1StatementTimeoutExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ExecuteSqlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteSqlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExecuteSqlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.sqlStatementResults != null) {
    contents.sqlStatementResults = deserializeAws_restJson1SqlStatementResults(data.sqlStatementResults, context);
  }
  return contents;
};

const deserializeAws_restJson1ExecuteSqlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteSqlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rdsdata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.rdsdata#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.rdsdata#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.rdsdata#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableError":
    case "com.amazonaws.rdsdata#ServiceUnavailableError":
      throw await deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ExecuteStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteStatementCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExecuteStatementCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.columnMetadata != null) {
    contents.columnMetadata = deserializeAws_restJson1Metadata(data.columnMetadata, context);
  }
  if (data.formattedRecords != null) {
    contents.formattedRecords = __expectString(data.formattedRecords);
  }
  if (data.generatedFields != null) {
    contents.generatedFields = deserializeAws_restJson1FieldList(data.generatedFields, context);
  }
  if (data.numberOfRecordsUpdated != null) {
    contents.numberOfRecordsUpdated = __expectLong(data.numberOfRecordsUpdated);
  }
  if (data.records != null) {
    contents.records = deserializeAws_restJson1SqlRecords(data.records, context);
  }
  return contents;
};

const deserializeAws_restJson1ExecuteStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rdsdata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.rdsdata#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.rdsdata#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.rdsdata#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableError":
    case "com.amazonaws.rdsdata#ServiceUnavailableError":
      throw await deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context);
    case "StatementTimeoutException":
    case "com.amazonaws.rdsdata#StatementTimeoutException":
      throw await deserializeAws_restJson1StatementTimeoutExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RollbackTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RollbackTransactionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RollbackTransactionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.transactionStatus != null) {
    contents.transactionStatus = __expectString(data.transactionStatus);
  }
  return contents;
};

const deserializeAws_restJson1RollbackTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RollbackTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rdsdata#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.rdsdata#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.rdsdata#ForbiddenException":
      throw await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.rdsdata#InternalServerErrorException":
      throw await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.rdsdata#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableError":
    case "com.amazonaws.rdsdata#ServiceUnavailableError":
      throw await deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context);
    case "StatementTimeoutException":
    case "com.amazonaws.rdsdata#StatementTimeoutException":
      throw await deserializeAws_restJson1StatementTimeoutExceptionResponse(parsedOutput, context);
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

const map = __map;
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new InternalServerErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceUnavailableErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableError> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new ServiceUnavailableError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1StatementTimeoutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StatementTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.dbConnectionId != null) {
    contents.dbConnectionId = __expectLong(data.dbConnectionId);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new StatementTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1ArrayOfArray = (input: ArrayValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ArrayValue(entry, context);
    });
};

const serializeAws_restJson1ArrayValue = (input: ArrayValue, context: __SerdeContext): any => {
  return ArrayValue.visit(input, {
    arrayValues: (value) => ({ arrayValues: serializeAws_restJson1ArrayOfArray(value, context) }),
    booleanValues: (value) => ({ booleanValues: serializeAws_restJson1BooleanArray(value, context) }),
    doubleValues: (value) => ({ doubleValues: serializeAws_restJson1DoubleArray(value, context) }),
    longValues: (value) => ({ longValues: serializeAws_restJson1LongArray(value, context) }),
    stringValues: (value) => ({ stringValues: serializeAws_restJson1StringArray(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1BooleanArray = (input: boolean[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1DoubleArray = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

const serializeAws_restJson1Field = (input: Field, context: __SerdeContext): any => {
  return Field.visit(input, {
    arrayValue: (value) => ({ arrayValue: serializeAws_restJson1ArrayValue(value, context) }),
    blobValue: (value) => ({ blobValue: context.base64Encoder(value) }),
    booleanValue: (value) => ({ booleanValue: value }),
    doubleValue: (value) => ({ doubleValue: __serializeFloat(value) }),
    isNull: (value) => ({ isNull: value }),
    longValue: (value) => ({ longValue: value }),
    stringValue: (value) => ({ stringValue: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1LongArray = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ResultSetOptions = (input: ResultSetOptions, context: __SerdeContext): any => {
  return {
    ...(input.decimalReturnType != null && { decimalReturnType: input.decimalReturnType }),
    ...(input.longReturnType != null && { longReturnType: input.longReturnType }),
  };
};

const serializeAws_restJson1SqlParameter = (input: SqlParameter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.typeHint != null && { typeHint: input.typeHint }),
    ...(input.value != null && { value: serializeAws_restJson1Field(input.value, context) }),
  };
};

const serializeAws_restJson1SqlParameterSets = (input: SqlParameter[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SqlParametersList(entry, context);
    });
};

const serializeAws_restJson1SqlParametersList = (input: SqlParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SqlParameter(entry, context);
    });
};

const serializeAws_restJson1StringArray = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_restJson1ArrayOfArray = (output: any, context: __SerdeContext): ArrayValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ArrayValue(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_restJson1ArrayValue = (output: any, context: __SerdeContext): ArrayValue => {
  if (output.arrayValues != null) {
    return {
      arrayValues: deserializeAws_restJson1ArrayOfArray(output.arrayValues, context),
    };
  }
  if (output.booleanValues != null) {
    return {
      booleanValues: deserializeAws_restJson1BooleanArray(output.booleanValues, context),
    };
  }
  if (output.doubleValues != null) {
    return {
      doubleValues: deserializeAws_restJson1DoubleArray(output.doubleValues, context),
    };
  }
  if (output.longValues != null) {
    return {
      longValues: deserializeAws_restJson1LongArray(output.longValues, context),
    };
  }
  if (output.stringValues != null) {
    return {
      stringValues: deserializeAws_restJson1StringArray(output.stringValues, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ArrayValueList = (output: any, context: __SerdeContext): Value[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Value(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_restJson1BooleanArray = (output: any, context: __SerdeContext): boolean[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectBoolean(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1ColumnMetadata = (output: any, context: __SerdeContext): ColumnMetadata => {
  return {
    arrayBaseColumnType: __expectInt32(output.arrayBaseColumnType),
    isAutoIncrement: __expectBoolean(output.isAutoIncrement),
    isCaseSensitive: __expectBoolean(output.isCaseSensitive),
    isCurrency: __expectBoolean(output.isCurrency),
    isSigned: __expectBoolean(output.isSigned),
    label: __expectString(output.label),
    name: __expectString(output.name),
    nullable: __expectInt32(output.nullable),
    precision: __expectInt32(output.precision),
    scale: __expectInt32(output.scale),
    schemaName: __expectString(output.schemaName),
    tableName: __expectString(output.tableName),
    type: __expectInt32(output.type),
    typeName: __expectString(output.typeName),
  } as any;
};

const deserializeAws_restJson1DoubleArray = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1Field = (output: any, context: __SerdeContext): Field => {
  if (output.arrayValue != null) {
    return {
      arrayValue: deserializeAws_restJson1ArrayValue(__expectUnion(output.arrayValue), context),
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

const deserializeAws_restJson1FieldList = (output: any, context: __SerdeContext): Field[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Field(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_restJson1LongArray = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectLong(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1Metadata = (output: any, context: __SerdeContext): ColumnMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1_Record = (output: any, context: __SerdeContext): _Record => {
  return {
    values: output.values != null ? deserializeAws_restJson1Row(output.values, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Records = (output: any, context: __SerdeContext): _Record[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1_Record(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResultFrame = (output: any, context: __SerdeContext): ResultFrame => {
  return {
    records: output.records != null ? deserializeAws_restJson1Records(output.records, context) : undefined,
    resultSetMetadata:
      output.resultSetMetadata != null
        ? deserializeAws_restJson1ResultSetMetadata(output.resultSetMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResultSetMetadata = (output: any, context: __SerdeContext): ResultSetMetadata => {
  return {
    columnCount: __expectLong(output.columnCount),
    columnMetadata:
      output.columnMetadata != null ? deserializeAws_restJson1Metadata(output.columnMetadata, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Row = (output: any, context: __SerdeContext): Value[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Value(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_restJson1SqlRecords = (output: any, context: __SerdeContext): Field[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FieldList(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SqlStatementResult = (output: any, context: __SerdeContext): SqlStatementResult => {
  return {
    numberOfRecordsUpdated: __expectLong(output.numberOfRecordsUpdated),
    resultFrame:
      output.resultFrame != null ? deserializeAws_restJson1ResultFrame(output.resultFrame, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SqlStatementResults = (output: any, context: __SerdeContext): SqlStatementResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SqlStatementResult(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StringArray = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1StructValue = (output: any, context: __SerdeContext): StructValue => {
  return {
    attributes:
      output.attributes != null ? deserializeAws_restJson1ArrayValueList(output.attributes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1UpdateResult = (output: any, context: __SerdeContext): UpdateResult => {
  return {
    generatedFields:
      output.generatedFields != null ? deserializeAws_restJson1FieldList(output.generatedFields, context) : undefined,
  } as any;
};

const deserializeAws_restJson1UpdateResults = (output: any, context: __SerdeContext): UpdateResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UpdateResult(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Value = (output: any, context: __SerdeContext): Value => {
  if (output.arrayValues != null) {
    return {
      arrayValues: deserializeAws_restJson1ArrayValueList(output.arrayValues, context),
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
      structValue: deserializeAws_restJson1StructValue(output.structValue, context),
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
