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
  _Record,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
  expectString as __expectString,
  limitedParseFloat as __limitedParseFloat,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1BatchExecuteStatementCommand = async (
  input: BatchExecuteStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/BatchExecute";
  let body: any;
  body = JSON.stringify({
    ...(input.database !== undefined && input.database !== null && { database: input.database }),
    ...(input.parameterSets !== undefined &&
      input.parameterSets !== null && {
        parameterSets: serializeAws_restJson1SqlParameterSets(input.parameterSets, context),
      }),
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.schema !== undefined && input.schema !== null && { schema: input.schema }),
    ...(input.secretArn !== undefined && input.secretArn !== null && { secretArn: input.secretArn }),
    ...(input.sql !== undefined && input.sql !== null && { sql: input.sql }),
    ...(input.transactionId !== undefined && input.transactionId !== null && { transactionId: input.transactionId }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/BeginTransaction";
  let body: any;
  body = JSON.stringify({
    ...(input.database !== undefined && input.database !== null && { database: input.database }),
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.schema !== undefined && input.schema !== null && { schema: input.schema }),
    ...(input.secretArn !== undefined && input.secretArn !== null && { secretArn: input.secretArn }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CommitTransaction";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.secretArn !== undefined && input.secretArn !== null && { secretArn: input.secretArn }),
    ...(input.transactionId !== undefined && input.transactionId !== null && { transactionId: input.transactionId }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ExecuteSql";
  let body: any;
  body = JSON.stringify({
    ...(input.awsSecretStoreArn !== undefined &&
      input.awsSecretStoreArn !== null && { awsSecretStoreArn: input.awsSecretStoreArn }),
    ...(input.database !== undefined && input.database !== null && { database: input.database }),
    ...(input.dbClusterOrInstanceArn !== undefined &&
      input.dbClusterOrInstanceArn !== null && { dbClusterOrInstanceArn: input.dbClusterOrInstanceArn }),
    ...(input.schema !== undefined && input.schema !== null && { schema: input.schema }),
    ...(input.sqlStatements !== undefined && input.sqlStatements !== null && { sqlStatements: input.sqlStatements }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/Execute";
  let body: any;
  body = JSON.stringify({
    ...(input.continueAfterTimeout !== undefined &&
      input.continueAfterTimeout !== null && { continueAfterTimeout: input.continueAfterTimeout }),
    ...(input.database !== undefined && input.database !== null && { database: input.database }),
    ...(input.includeResultMetadata !== undefined &&
      input.includeResultMetadata !== null && { includeResultMetadata: input.includeResultMetadata }),
    ...(input.parameters !== undefined &&
      input.parameters !== null && { parameters: serializeAws_restJson1SqlParametersList(input.parameters, context) }),
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.resultSetOptions !== undefined &&
      input.resultSetOptions !== null && {
        resultSetOptions: serializeAws_restJson1ResultSetOptions(input.resultSetOptions, context),
      }),
    ...(input.schema !== undefined && input.schema !== null && { schema: input.schema }),
    ...(input.secretArn !== undefined && input.secretArn !== null && { secretArn: input.secretArn }),
    ...(input.sql !== undefined && input.sql !== null && { sql: input.sql }),
    ...(input.transactionId !== undefined && input.transactionId !== null && { transactionId: input.transactionId }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/RollbackTransaction";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.secretArn !== undefined && input.secretArn !== null && { secretArn: input.secretArn }),
    ...(input.transactionId !== undefined && input.transactionId !== null && { transactionId: input.transactionId }),
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
  const contents: BatchExecuteStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    updateResults: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.updateResults !== undefined && data.updateResults !== null) {
    contents.updateResults = deserializeAws_restJson1UpdateResults(data.updateResults, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchExecuteStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchExecuteStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.rdsdata#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.rdsdata#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.rdsdata#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazonaws.rdsdata#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StatementTimeoutException":
    case "com.amazonaws.rdsdata#StatementTimeoutException":
      response = {
        ...(await deserializeAws_restJson1StatementTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BeginTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BeginTransactionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BeginTransactionCommandError(output, context);
  }
  const contents: BeginTransactionCommandOutput = {
    $metadata: deserializeMetadata(output),
    transactionId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.transactionId !== undefined && data.transactionId !== null) {
    contents.transactionId = __expectString(data.transactionId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BeginTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BeginTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.rdsdata#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.rdsdata#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.rdsdata#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazonaws.rdsdata#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StatementTimeoutException":
    case "com.amazonaws.rdsdata#StatementTimeoutException":
      response = {
        ...(await deserializeAws_restJson1StatementTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CommitTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CommitTransactionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CommitTransactionCommandError(output, context);
  }
  const contents: CommitTransactionCommandOutput = {
    $metadata: deserializeMetadata(output),
    transactionStatus: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.transactionStatus !== undefined && data.transactionStatus !== null) {
    contents.transactionStatus = __expectString(data.transactionStatus);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CommitTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CommitTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.rdsdata#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.rdsdata#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.rdsdata#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.rdsdata#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazonaws.rdsdata#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StatementTimeoutException":
    case "com.amazonaws.rdsdata#StatementTimeoutException":
      response = {
        ...(await deserializeAws_restJson1StatementTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ExecuteSqlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteSqlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExecuteSqlCommandError(output, context);
  }
  const contents: ExecuteSqlCommandOutput = {
    $metadata: deserializeMetadata(output),
    sqlStatementResults: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.sqlStatementResults !== undefined && data.sqlStatementResults !== null) {
    contents.sqlStatementResults = deserializeAws_restJson1SqlStatementResults(data.sqlStatementResults, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ExecuteSqlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteSqlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.rdsdata#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.rdsdata#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.rdsdata#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazonaws.rdsdata#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ExecuteStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteStatementCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExecuteStatementCommandError(output, context);
  }
  const contents: ExecuteStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    columnMetadata: undefined,
    generatedFields: undefined,
    numberOfRecordsUpdated: undefined,
    records: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.columnMetadata !== undefined && data.columnMetadata !== null) {
    contents.columnMetadata = deserializeAws_restJson1Metadata(data.columnMetadata, context);
  }
  if (data.generatedFields !== undefined && data.generatedFields !== null) {
    contents.generatedFields = deserializeAws_restJson1FieldList(data.generatedFields, context);
  }
  if (data.numberOfRecordsUpdated !== undefined && data.numberOfRecordsUpdated !== null) {
    contents.numberOfRecordsUpdated = __expectInt(data.numberOfRecordsUpdated);
  }
  if (data.records !== undefined && data.records !== null) {
    contents.records = deserializeAws_restJson1SqlRecords(data.records, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ExecuteStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.rdsdata#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.rdsdata#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.rdsdata#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazonaws.rdsdata#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StatementTimeoutException":
    case "com.amazonaws.rdsdata#StatementTimeoutException":
      response = {
        ...(await deserializeAws_restJson1StatementTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RollbackTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RollbackTransactionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RollbackTransactionCommandError(output, context);
  }
  const contents: RollbackTransactionCommandOutput = {
    $metadata: deserializeMetadata(output),
    transactionStatus: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.transactionStatus !== undefined && data.transactionStatus !== null) {
    contents.transactionStatus = __expectString(data.transactionStatus);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RollbackTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RollbackTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.rdsdata#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.rdsdata#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.rdsdata#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.rdsdata#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazonaws.rdsdata#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StatementTimeoutException":
    case "com.amazonaws.rdsdata#StatementTimeoutException":
      response = {
        ...(await deserializeAws_restJson1StatementTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ServiceUnavailableErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableError> => {
  const contents: ServiceUnavailableError = {
    name: "ServiceUnavailableError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restJson1StatementTimeoutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StatementTimeoutException> => {
  const contents: StatementTimeoutException = {
    name: "StatementTimeoutException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    dbConnectionId: undefined,
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.dbConnectionId !== undefined && data.dbConnectionId !== null) {
    contents.dbConnectionId = __expectInt(data.dbConnectionId);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const serializeAws_restJson1ArrayOfArray = (input: ArrayValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1DoubleArray = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ResultSetOptions = (input: ResultSetOptions, context: __SerdeContext): any => {
  return {
    ...(input.decimalReturnType !== undefined &&
      input.decimalReturnType !== null && { decimalReturnType: input.decimalReturnType }),
  };
};

const serializeAws_restJson1SqlParameter = (input: SqlParameter, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.typeHint !== undefined && input.typeHint !== null && { typeHint: input.typeHint }),
    ...(input.value !== undefined &&
      input.value !== null && { value: serializeAws_restJson1Field(input.value, context) }),
  };
};

const serializeAws_restJson1SqlParameterSets = (input: SqlParameter[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SqlParametersList(entry, context);
    });
};

const serializeAws_restJson1SqlParametersList = (input: SqlParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SqlParameter(entry, context);
    });
};

const serializeAws_restJson1StringArray = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1ArrayOfArray = (output: any, context: __SerdeContext): ArrayValue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ArrayValue(entry, context);
    });
};

const deserializeAws_restJson1ArrayValue = (output: any, context: __SerdeContext): ArrayValue => {
  if (output.arrayValues !== undefined && output.arrayValues !== null) {
    return {
      arrayValues: deserializeAws_restJson1ArrayOfArray(output.arrayValues, context),
    };
  }
  if (output.booleanValues !== undefined && output.booleanValues !== null) {
    return {
      booleanValues: deserializeAws_restJson1BooleanArray(output.booleanValues, context),
    };
  }
  if (output.doubleValues !== undefined && output.doubleValues !== null) {
    return {
      doubleValues: deserializeAws_restJson1DoubleArray(output.doubleValues, context),
    };
  }
  if (output.longValues !== undefined && output.longValues !== null) {
    return {
      longValues: deserializeAws_restJson1LongArray(output.longValues, context),
    };
  }
  if (output.stringValues !== undefined && output.stringValues !== null) {
    return {
      stringValues: deserializeAws_restJson1StringArray(output.stringValues, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ArrayValueList = (output: any, context: __SerdeContext): Value[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Value(entry, context);
    });
};

const deserializeAws_restJson1BooleanArray = (output: any, context: __SerdeContext): boolean[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectBoolean(entry) as any;
    });
};

const deserializeAws_restJson1ColumnMetadata = (output: any, context: __SerdeContext): ColumnMetadata => {
  return {
    arrayBaseColumnType: __expectInt(output.arrayBaseColumnType),
    isAutoIncrement: __expectBoolean(output.isAutoIncrement),
    isCaseSensitive: __expectBoolean(output.isCaseSensitive),
    isCurrency: __expectBoolean(output.isCurrency),
    isSigned: __expectBoolean(output.isSigned),
    label: __expectString(output.label),
    name: __expectString(output.name),
    nullable: __expectInt(output.nullable),
    precision: __expectInt(output.precision),
    scale: __expectInt(output.scale),
    schemaName: __expectString(output.schemaName),
    tableName: __expectString(output.tableName),
    type: __expectInt(output.type),
    typeName: __expectString(output.typeName),
  } as any;
};

const deserializeAws_restJson1DoubleArray = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __limitedParseFloat(entry) as any;
    });
};

const deserializeAws_restJson1Field = (output: any, context: __SerdeContext): Field => {
  if (output.arrayValue !== undefined && output.arrayValue !== null) {
    return {
      arrayValue: deserializeAws_restJson1ArrayValue(output.arrayValue, context),
    };
  }
  if (output.blobValue !== undefined && output.blobValue !== null) {
    return {
      blobValue: context.base64Decoder(output.blobValue),
    };
  }
  if (__expectBoolean(output.booleanValue) !== undefined) {
    return { booleanValue: __expectBoolean(output.booleanValue) as any };
  }
  if (__limitedParseFloat(output.doubleValue) !== undefined) {
    return { doubleValue: __limitedParseFloat(output.doubleValue) as any };
  }
  if (__expectBoolean(output.isNull) !== undefined) {
    return { isNull: __expectBoolean(output.isNull) as any };
  }
  if (__expectInt(output.longValue) !== undefined) {
    return { longValue: __expectInt(output.longValue) as any };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1FieldList = (output: any, context: __SerdeContext): Field[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Field(entry, context);
    });
};

const deserializeAws_restJson1LongArray = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt(entry) as any;
    });
};

const deserializeAws_restJson1Metadata = (output: any, context: __SerdeContext): ColumnMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnMetadata(entry, context);
    });
};

const deserializeAws_restJson1_Record = (output: any, context: __SerdeContext): _Record => {
  return {
    values:
      output.values !== undefined && output.values !== null
        ? deserializeAws_restJson1Row(output.values, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Records = (output: any, context: __SerdeContext): _Record[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1_Record(entry, context);
    });
};

const deserializeAws_restJson1ResultFrame = (output: any, context: __SerdeContext): ResultFrame => {
  return {
    records:
      output.records !== undefined && output.records !== null
        ? deserializeAws_restJson1Records(output.records, context)
        : undefined,
    resultSetMetadata:
      output.resultSetMetadata !== undefined && output.resultSetMetadata !== null
        ? deserializeAws_restJson1ResultSetMetadata(output.resultSetMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResultSetMetadata = (output: any, context: __SerdeContext): ResultSetMetadata => {
  return {
    columnCount: __expectInt(output.columnCount),
    columnMetadata:
      output.columnMetadata !== undefined && output.columnMetadata !== null
        ? deserializeAws_restJson1Metadata(output.columnMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Row = (output: any, context: __SerdeContext): Value[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Value(entry, context);
    });
};

const deserializeAws_restJson1SqlRecords = (output: any, context: __SerdeContext): Field[][] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FieldList(entry, context);
    });
};

const deserializeAws_restJson1SqlStatementResult = (output: any, context: __SerdeContext): SqlStatementResult => {
  return {
    numberOfRecordsUpdated: __expectInt(output.numberOfRecordsUpdated),
    resultFrame:
      output.resultFrame !== undefined && output.resultFrame !== null
        ? deserializeAws_restJson1ResultFrame(output.resultFrame, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SqlStatementResults = (output: any, context: __SerdeContext): SqlStatementResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SqlStatementResult(entry, context);
    });
};

const deserializeAws_restJson1StringArray = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1StructValue = (output: any, context: __SerdeContext): StructValue => {
  return {
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_restJson1ArrayValueList(output.attributes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1UpdateResult = (output: any, context: __SerdeContext): UpdateResult => {
  return {
    generatedFields:
      output.generatedFields !== undefined && output.generatedFields !== null
        ? deserializeAws_restJson1FieldList(output.generatedFields, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1UpdateResults = (output: any, context: __SerdeContext): UpdateResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UpdateResult(entry, context);
    });
};

const deserializeAws_restJson1Value = (output: any, context: __SerdeContext): Value => {
  if (output.arrayValues !== undefined && output.arrayValues !== null) {
    return {
      arrayValues: deserializeAws_restJson1ArrayValueList(output.arrayValues, context),
    };
  }
  if (__expectInt(output.bigIntValue) !== undefined) {
    return { bigIntValue: __expectInt(output.bigIntValue) as any };
  }
  if (__expectBoolean(output.bitValue) !== undefined) {
    return { bitValue: __expectBoolean(output.bitValue) as any };
  }
  if (output.blobValue !== undefined && output.blobValue !== null) {
    return {
      blobValue: context.base64Decoder(output.blobValue),
    };
  }
  if (__limitedParseFloat(output.doubleValue) !== undefined) {
    return { doubleValue: __limitedParseFloat(output.doubleValue) as any };
  }
  if (__expectInt(output.intValue) !== undefined) {
    return { intValue: __expectInt(output.intValue) as any };
  }
  if (__expectBoolean(output.isNull) !== undefined) {
    return { isNull: __expectBoolean(output.isNull) as any };
  }
  if (__limitedParseFloat(output.realValue) !== undefined) {
    return { realValue: __limitedParseFloat(output.realValue) as any };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  if (output.structValue !== undefined && output.structValue !== null) {
    return {
      structValue: deserializeAws_restJson1StructValue(output.structValue, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
