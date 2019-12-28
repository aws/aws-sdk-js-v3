import {
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
} from "../commands/BatchExecuteStatementCommand";
import {
  BeginTransactionCommandInput,
  BeginTransactionCommandOutput,
} from "../commands/BeginTransactionCommand";
import {
  CommitTransactionCommandInput,
  CommitTransactionCommandOutput,
} from "../commands/CommitTransactionCommand";
import {
  ExecuteSqlCommandInput,
  ExecuteSqlCommandOutput,
} from "../commands/ExecuteSqlCommand";
import {
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
} from "../commands/ExecuteStatementCommand";
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
  ServiceUnavailableError,
  SqlParameter,
  SqlStatementResult,
  StatementTimeoutException,
  StructValue,
  UpdateResult,
  Value,
  _Record,
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import {
  SerdeContext,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1BatchExecuteStatementCommand(
  input: BatchExecuteStatementCommandInput,
  context: SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let body: any = {};
  const bodyParams: any = {};
  if (input.database !== undefined) {
    bodyParams['database'] = input.database;
  }
  if (input.parameterSets !== undefined) {
    bodyParams['parameterSets'] = serializeAws_restJson1_1SqlParameterSets(input.parameterSets, context);
  }
  if (input.resourceArn !== undefined) {
    bodyParams['resourceArn'] = input.resourceArn;
  }
  if (input.schema !== undefined) {
    bodyParams['schema'] = input.schema;
  }
  if (input.secretArn !== undefined) {
    bodyParams['secretArn'] = input.secretArn;
  }
  if (input.sql !== undefined) {
    bodyParams['sql'] = input.sql;
  }
  if (input.transactionId !== undefined) {
    bodyParams['transactionId'] = input.transactionId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/BatchExecute",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_restJson1_1BeginTransactionCommand(
  input: BeginTransactionCommandInput,
  context: SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let body: any = {};
  const bodyParams: any = {};
  if (input.database !== undefined) {
    bodyParams['database'] = input.database;
  }
  if (input.resourceArn !== undefined) {
    bodyParams['resourceArn'] = input.resourceArn;
  }
  if (input.schema !== undefined) {
    bodyParams['schema'] = input.schema;
  }
  if (input.secretArn !== undefined) {
    bodyParams['secretArn'] = input.secretArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/BeginTransaction",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_restJson1_1CommitTransactionCommand(
  input: CommitTransactionCommandInput,
  context: SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let body: any = {};
  const bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams['resourceArn'] = input.resourceArn;
  }
  if (input.secretArn !== undefined) {
    bodyParams['secretArn'] = input.secretArn;
  }
  if (input.transactionId !== undefined) {
    bodyParams['transactionId'] = input.transactionId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CommitTransaction",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_restJson1_1ExecuteSqlCommand(
  input: ExecuteSqlCommandInput,
  context: SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let body: any = {};
  const bodyParams: any = {};
  if (input.awsSecretStoreArn !== undefined) {
    bodyParams['awsSecretStoreArn'] = input.awsSecretStoreArn;
  }
  if (input.database !== undefined) {
    bodyParams['database'] = input.database;
  }
  if (input.dbClusterOrInstanceArn !== undefined) {
    bodyParams['dbClusterOrInstanceArn'] = input.dbClusterOrInstanceArn;
  }
  if (input.schema !== undefined) {
    bodyParams['schema'] = input.schema;
  }
  if (input.sqlStatements !== undefined) {
    bodyParams['sqlStatements'] = input.sqlStatements;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ExecuteSql",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_restJson1_1ExecuteStatementCommand(
  input: ExecuteStatementCommandInput,
  context: SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let body: any = {};
  const bodyParams: any = {};
  if (input.continueAfterTimeout !== undefined) {
    bodyParams['continueAfterTimeout'] = input.continueAfterTimeout;
  }
  if (input.database !== undefined) {
    bodyParams['database'] = input.database;
  }
  if (input.includeResultMetadata !== undefined) {
    bodyParams['includeResultMetadata'] = input.includeResultMetadata;
  }
  if (input.parameters !== undefined) {
    bodyParams['parameters'] = serializeAws_restJson1_1SqlParametersList(input.parameters, context);
  }
  if (input.resourceArn !== undefined) {
    bodyParams['resourceArn'] = input.resourceArn;
  }
  if (input.schema !== undefined) {
    bodyParams['schema'] = input.schema;
  }
  if (input.secretArn !== undefined) {
    bodyParams['secretArn'] = input.secretArn;
  }
  if (input.sql !== undefined) {
    bodyParams['sql'] = input.sql;
  }
  if (input.transactionId !== undefined) {
    bodyParams['transactionId'] = input.transactionId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/Execute",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_restJson1_1RollbackTransactionCommand(
  input: RollbackTransactionCommandInput,
  context: SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let body: any = {};
  const bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams['resourceArn'] = input.resourceArn;
  }
  if (input.secretArn !== undefined) {
    bodyParams['secretArn'] = input.secretArn;
  }
  if (input.transactionId !== undefined) {
    bodyParams['transactionId'] = input.transactionId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RollbackTransaction",
    headers: headers,
    body: body,
  });
}

export async function deserializeAws_restJson1_1BatchExecuteStatementCommand(
  output: __HttpResponse,
  context: SerdeContext
): Promise<BatchExecuteStatementCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1BatchExecuteStatementCommandError(output, context);
  }
  const contents: BatchExecuteStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchExecuteStatementResponse",
    updateResults: undefined,
  };
  const data: any = await parseBody(output.body, context)
  if (data.updateResults !== undefined) {
    contents.updateResults = deserializeAws_restJson1_1UpdateResults(data.updateResults, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1BatchExecuteStatementCommandError(
  output: __HttpResponse,
  context: SerdeContext,
): Promise<BatchExecuteStatementCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: any;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.rdsdataservice#BadRequestException":
      response = deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "ForbiddenException":
    case "com.amazon.rdsdataservice#ForbiddenException":
      response = deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazon.rdsdataservice#InternalServerErrorException":
      response = deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    case "ServiceUnavailableError":
    case "com.amazon.rdsdataservice#ServiceUnavailableError":
      response = deserializeAws_restJson1_1ServiceUnavailableErrorResponse(parsedOutput, context);
      break;
    case "StatementTimeoutException":
    case "com.amazon.rdsdataservice#StatementTimeoutException":
      response = deserializeAws_restJson1_1StatementTimeoutExceptionResponse(parsedOutput, context);
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.rdsdataservice#${errorCode}`,
        $name: errorCode,
        $fault: "client",
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1BeginTransactionCommand(
  output: __HttpResponse,
  context: SerdeContext
): Promise<BeginTransactionCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1BeginTransactionCommandError(output, context);
  }
  const contents: BeginTransactionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BeginTransactionResponse",
    transactionId: undefined,
  };
  const data: any = await parseBody(output.body, context)
  if (data.transactionId !== undefined) {
    contents.transactionId = data.transactionId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1BeginTransactionCommandError(
  output: __HttpResponse,
  context: SerdeContext,
): Promise<BeginTransactionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: any;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.rdsdataservice#BadRequestException":
      response = deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "ForbiddenException":
    case "com.amazon.rdsdataservice#ForbiddenException":
      response = deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazon.rdsdataservice#InternalServerErrorException":
      response = deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    case "ServiceUnavailableError":
    case "com.amazon.rdsdataservice#ServiceUnavailableError":
      response = deserializeAws_restJson1_1ServiceUnavailableErrorResponse(parsedOutput, context);
      break;
    case "StatementTimeoutException":
    case "com.amazon.rdsdataservice#StatementTimeoutException":
      response = deserializeAws_restJson1_1StatementTimeoutExceptionResponse(parsedOutput, context);
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.rdsdataservice#${errorCode}`,
        $name: errorCode,
        $fault: "client",
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CommitTransactionCommand(
  output: __HttpResponse,
  context: SerdeContext
): Promise<CommitTransactionCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CommitTransactionCommandError(output, context);
  }
  const contents: CommitTransactionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CommitTransactionResponse",
    transactionStatus: undefined,
  };
  const data: any = await parseBody(output.body, context)
  if (data.transactionStatus !== undefined) {
    contents.transactionStatus = data.transactionStatus;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CommitTransactionCommandError(
  output: __HttpResponse,
  context: SerdeContext,
): Promise<CommitTransactionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: any;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.rdsdataservice#BadRequestException":
      response = deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "ForbiddenException":
    case "com.amazon.rdsdataservice#ForbiddenException":
      response = deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazon.rdsdataservice#InternalServerErrorException":
      response = deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    case "NotFoundException":
    case "com.amazon.rdsdataservice#NotFoundException":
      response = deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context);
      break;
    case "ServiceUnavailableError":
    case "com.amazon.rdsdataservice#ServiceUnavailableError":
      response = deserializeAws_restJson1_1ServiceUnavailableErrorResponse(parsedOutput, context);
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.rdsdataservice#${errorCode}`,
        $name: errorCode,
        $fault: "client",
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ExecuteSqlCommand(
  output: __HttpResponse,
  context: SerdeContext
): Promise<ExecuteSqlCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ExecuteSqlCommandError(output, context);
  }
  const contents: ExecuteSqlCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ExecuteSqlResponse",
    sqlStatementResults: undefined,
  };
  const data: any = await parseBody(output.body, context)
  if (data.sqlStatementResults !== undefined) {
    contents.sqlStatementResults = deserializeAws_restJson1_1SqlStatementResults(data.sqlStatementResults, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ExecuteSqlCommandError(
  output: __HttpResponse,
  context: SerdeContext,
): Promise<ExecuteSqlCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: any;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.rdsdataservice#BadRequestException":
      response = deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "ForbiddenException":
    case "com.amazon.rdsdataservice#ForbiddenException":
      response = deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazon.rdsdataservice#InternalServerErrorException":
      response = deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    case "ServiceUnavailableError":
    case "com.amazon.rdsdataservice#ServiceUnavailableError":
      response = deserializeAws_restJson1_1ServiceUnavailableErrorResponse(parsedOutput, context);
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.rdsdataservice#${errorCode}`,
        $name: errorCode,
        $fault: "client",
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ExecuteStatementCommand(
  output: __HttpResponse,
  context: SerdeContext
): Promise<ExecuteStatementCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ExecuteStatementCommandError(output, context);
  }
  const contents: ExecuteStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ExecuteStatementResponse",
    columnMetadata: undefined,
    generatedFields: undefined,
    numberOfRecordsUpdated: undefined,
    records: undefined,
  };
  const data: any = await parseBody(output.body, context)
  if (data.columnMetadata !== undefined) {
    contents.columnMetadata = deserializeAws_restJson1_1Metadata(data.columnMetadata, context);
  }
  if (data.generatedFields !== undefined) {
    contents.generatedFields = deserializeAws_restJson1_1FieldList(data.generatedFields, context);
  }
  if (data.numberOfRecordsUpdated !== undefined) {
    contents.numberOfRecordsUpdated = data.numberOfRecordsUpdated;
  }
  if (data.records !== undefined) {
    contents.records = deserializeAws_restJson1_1SqlRecords(data.records, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ExecuteStatementCommandError(
  output: __HttpResponse,
  context: SerdeContext,
): Promise<ExecuteStatementCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: any;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.rdsdataservice#BadRequestException":
      response = deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "ForbiddenException":
    case "com.amazon.rdsdataservice#ForbiddenException":
      response = deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazon.rdsdataservice#InternalServerErrorException":
      response = deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    case "ServiceUnavailableError":
    case "com.amazon.rdsdataservice#ServiceUnavailableError":
      response = deserializeAws_restJson1_1ServiceUnavailableErrorResponse(parsedOutput, context);
      break;
    case "StatementTimeoutException":
    case "com.amazon.rdsdataservice#StatementTimeoutException":
      response = deserializeAws_restJson1_1StatementTimeoutExceptionResponse(parsedOutput, context);
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.rdsdataservice#${errorCode}`,
        $name: errorCode,
        $fault: "client",
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1RollbackTransactionCommand(
  output: __HttpResponse,
  context: SerdeContext
): Promise<RollbackTransactionCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1RollbackTransactionCommandError(output, context);
  }
  const contents: RollbackTransactionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RollbackTransactionResponse",
    transactionStatus: undefined,
  };
  const data: any = await parseBody(output.body, context)
  if (data.transactionStatus !== undefined) {
    contents.transactionStatus = data.transactionStatus;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1RollbackTransactionCommandError(
  output: __HttpResponse,
  context: SerdeContext,
): Promise<RollbackTransactionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: any;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.rdsdataservice#BadRequestException":
      response = deserializeAws_restJson1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "ForbiddenException":
    case "com.amazon.rdsdataservice#ForbiddenException":
      response = deserializeAws_restJson1_1ForbiddenExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerErrorException":
    case "com.amazon.rdsdataservice#InternalServerErrorException":
      response = deserializeAws_restJson1_1InternalServerErrorExceptionResponse(parsedOutput, context);
      break;
    case "NotFoundException":
    case "com.amazon.rdsdataservice#NotFoundException":
      response = deserializeAws_restJson1_1NotFoundExceptionResponse(parsedOutput, context);
      break;
    case "ServiceUnavailableError":
    case "com.amazon.rdsdataservice#ServiceUnavailableError":
      response = deserializeAws_restJson1_1ServiceUnavailableErrorResponse(parsedOutput, context);
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.rdsdataservice#${errorCode}`,
        $name: errorCode,
        $fault: "client",
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1BadRequestExceptionResponse = (
  output: any,
  context: SerdeContext
): BadRequestException => {
  const contents: BadRequestException = {
    __type: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined,
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ForbiddenExceptionResponse = (
  output: any,
  context: SerdeContext
): ForbiddenException => {
  const contents: ForbiddenException = {
    __type: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined,
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = (
  output: any,
  context: SerdeContext
): InternalServerErrorException => {
  const contents: InternalServerErrorException = {
    __type: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
  };
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = (
  output: any,
  context: SerdeContext
): NotFoundException => {
  const contents: NotFoundException = {
    __type: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined,
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableErrorResponse = (
  output: any,
  context: SerdeContext
): ServiceUnavailableError => {
  const contents: ServiceUnavailableError = {
    __type: "ServiceUnavailableError",
    $fault: "server",
    $metadata: deserializeMetadata(output),
  };
  return contents;
};

const deserializeAws_restJson1_1StatementTimeoutExceptionResponse = (
  output: any,
  context: SerdeContext
): StatementTimeoutException => {
  const contents: StatementTimeoutException = {
    __type: "StatementTimeoutException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    dbConnectionId: undefined,
    message: undefined,
  };
  const data: any = output.body;
  if (data.dbConnectionId !== undefined) {
    contents.dbConnectionId = data.dbConnectionId;
  }
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1ArrayOfArray = (
  input: Array<ArrayValue>,
  context: SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1ArrayValue(entry, context)
  );
}

const serializeAws_restJson1_1ArrayValue = (
  input: ArrayValue,
  context: SerdeContext
): any => {
  return ArrayValue.visit(input, {
    arrayValues: value => serializeAws_restJson1_1ArrayOfArray(value, context),
    booleanValues: value => serializeAws_restJson1_1BooleanArray(value, context),
    doubleValues: value => serializeAws_restJson1_1DoubleArray(value, context),
    longValues: value => serializeAws_restJson1_1LongArray(value, context),
    stringValues: value => serializeAws_restJson1_1StringArray(value, context),
    _: value => value
  });
}

const serializeAws_restJson1_1BooleanArray = (
  input: Array<boolean>,
  context: SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_restJson1_1DoubleArray = (
  input: Array<number>,
  context: SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_restJson1_1Field = (
  input: Field,
  context: SerdeContext
): any => {
  return Field.visit(input, {
    arrayValue: value => serializeAws_restJson1_1ArrayValue(value, context),
    blobValue: value => context.base64Encoder(value),
    booleanValue: value => value,
    doubleValue: value => value,
    isNull: value => value,
    longValue: value => value,
    stringValue: value => value,
    _: value => value
  });
}

const serializeAws_restJson1_1LongArray = (
  input: Array<number>,
  context: SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_restJson1_1SqlParameter = (
  input: SqlParameter,
  context: SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams['name'] = input.name;
  }
  if (input.value !== undefined) {
    bodyParams['value'] = serializeAws_restJson1_1Field(input.value, context);
  }
  return bodyParams;
}

const serializeAws_restJson1_1SqlParameterSets = (
  input: Array<Array<SqlParameter>>,
  context: SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1SqlParametersList(entry, context)
  );
}

const serializeAws_restJson1_1SqlParametersList = (
  input: Array<SqlParameter>,
  context: SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1SqlParameter(entry, context)
  );
}

const serializeAws_restJson1_1StringArray = (
  input: Array<string>,
  context: SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const deserializeAws_restJson1_1ArrayOfArray = (
  output: any,
  context: SerdeContext
): Array<ArrayValue> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ArrayValue(entry, context)
  );
}

const deserializeAws_restJson1_1ArrayValue = (
  output: any,
  context: SerdeContext
): ArrayValue => {
  if (output.arrayValues !== undefined) {
    return {
      arrayValues: deserializeAws_restJson1_1ArrayOfArray(output.arrayValues, context)
    };
  }
  if (output.booleanValues !== undefined) {
    return {
      booleanValues: deserializeAws_restJson1_1BooleanArray(output.booleanValues, context)
    };
  }
  if (output.doubleValues !== undefined) {
    return {
      doubleValues: deserializeAws_restJson1_1DoubleArray(output.doubleValues, context)
    };
  }
  if (output.longValues !== undefined) {
    return {
      longValues: deserializeAws_restJson1_1LongArray(output.longValues, context)
    };
  }
  if (output.stringValues !== undefined) {
    return {
      stringValues: deserializeAws_restJson1_1StringArray(output.stringValues, context)
    };
  }
  return { $unknown: output[Object.keys(output)[0]] };
}

const deserializeAws_restJson1_1ArrayValueList = (
  output: any,
  context: SerdeContext
): Array<Value> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Value(entry, context)
  );
}

const deserializeAws_restJson1_1BooleanArray = (
  output: any,
  context: SerdeContext
): Array<boolean> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_restJson1_1ColumnMetadata = (
  output: any,
  context: SerdeContext
): ColumnMetadata => {
  let contents: any = {
    __type: "ColumnMetadata",
    arrayBaseColumnType: undefined,
    isAutoIncrement: undefined,
    isCaseSensitive: undefined,
    isCurrency: undefined,
    isSigned: undefined,
    label: undefined,
    name: undefined,
    nullable: undefined,
    precision: undefined,
    scale: undefined,
    schemaName: undefined,
    tableName: undefined,
    type: undefined,
    typeName: undefined,
  };
  if (output.arrayBaseColumnType !== undefined) {
    contents.arrayBaseColumnType = output.arrayBaseColumnType;
  }
  if (output.isAutoIncrement !== undefined) {
    contents.isAutoIncrement = output.isAutoIncrement;
  }
  if (output.isCaseSensitive !== undefined) {
    contents.isCaseSensitive = output.isCaseSensitive;
  }
  if (output.isCurrency !== undefined) {
    contents.isCurrency = output.isCurrency;
  }
  if (output.isSigned !== undefined) {
    contents.isSigned = output.isSigned;
  }
  if (output.label !== undefined) {
    contents.label = output.label;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.nullable !== undefined) {
    contents.nullable = output.nullable;
  }
  if (output.precision !== undefined) {
    contents.precision = output.precision;
  }
  if (output.scale !== undefined) {
    contents.scale = output.scale;
  }
  if (output.schemaName !== undefined) {
    contents.schemaName = output.schemaName;
  }
  if (output.tableName !== undefined) {
    contents.tableName = output.tableName;
  }
  if (output.type !== undefined) {
    contents.type = output.type;
  }
  if (output.typeName !== undefined) {
    contents.typeName = output.typeName;
  }
  return contents;
}

const deserializeAws_restJson1_1DoubleArray = (
  output: any,
  context: SerdeContext
): Array<number> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_restJson1_1Field = (
  output: any,
  context: SerdeContext
): Field => {
  if (output.arrayValue !== undefined) {
    return {
      arrayValue: deserializeAws_restJson1_1ArrayValue(output.arrayValue, context)
    };
  }
  if (output.blobValue !== undefined) {
    return {
      blobValue: context.base64Decoder(output.blobValue)
    };
  }
  if (output.booleanValue !== undefined) {
    return {
      booleanValue: output.booleanValue
    };
  }
  if (output.doubleValue !== undefined) {
    return {
      doubleValue: output.doubleValue
    };
  }
  if (output.isNull !== undefined) {
    return {
      isNull: output.isNull
    };
  }
  if (output.longValue !== undefined) {
    return {
      longValue: output.longValue
    };
  }
  if (output.stringValue !== undefined) {
    return {
      stringValue: output.stringValue
    };
  }
  return { $unknown: output[Object.keys(output)[0]] };
}

const deserializeAws_restJson1_1FieldList = (
  output: any,
  context: SerdeContext
): Array<Field> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Field(entry, context)
  );
}

const deserializeAws_restJson1_1LongArray = (
  output: any,
  context: SerdeContext
): Array<number> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_restJson1_1Metadata = (
  output: any,
  context: SerdeContext
): Array<ColumnMetadata> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ColumnMetadata(entry, context)
  );
}

const deserializeAws_restJson1_1_Record = (
  output: any,
  context: SerdeContext
): _Record => {
  let contents: any = {
    __type: "Record",
    values: undefined,
  };
  if (output.values !== undefined) {
    contents.values = deserializeAws_restJson1_1Row(output.values, context);
  }
  return contents;
}

const deserializeAws_restJson1_1Records = (
  output: any,
  context: SerdeContext
): Array<_Record> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1_Record(entry, context)
  );
}

const deserializeAws_restJson1_1ResultFrame = (
  output: any,
  context: SerdeContext
): ResultFrame => {
  let contents: any = {
    __type: "ResultFrame",
    records: undefined,
    resultSetMetadata: undefined,
  };
  if (output.records !== undefined) {
    contents.records = deserializeAws_restJson1_1Records(output.records, context);
  }
  if (output.resultSetMetadata !== undefined) {
    contents.resultSetMetadata = deserializeAws_restJson1_1ResultSetMetadata(output.resultSetMetadata, context);
  }
  return contents;
}

const deserializeAws_restJson1_1ResultSetMetadata = (
  output: any,
  context: SerdeContext
): ResultSetMetadata => {
  let contents: any = {
    __type: "ResultSetMetadata",
    columnCount: undefined,
    columnMetadata: undefined,
  };
  if (output.columnCount !== undefined) {
    contents.columnCount = output.columnCount;
  }
  if (output.columnMetadata !== undefined) {
    contents.columnMetadata = deserializeAws_restJson1_1Metadata(output.columnMetadata, context);
  }
  return contents;
}

const deserializeAws_restJson1_1Row = (
  output: any,
  context: SerdeContext
): Array<Value> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Value(entry, context)
  );
}

const deserializeAws_restJson1_1SqlRecords = (
  output: any,
  context: SerdeContext
): Array<Array<Field>> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1FieldList(entry, context)
  );
}

const deserializeAws_restJson1_1SqlStatementResult = (
  output: any,
  context: SerdeContext
): SqlStatementResult => {
  let contents: any = {
    __type: "SqlStatementResult",
    numberOfRecordsUpdated: undefined,
    resultFrame: undefined,
  };
  if (output.numberOfRecordsUpdated !== undefined) {
    contents.numberOfRecordsUpdated = output.numberOfRecordsUpdated;
  }
  if (output.resultFrame !== undefined) {
    contents.resultFrame = deserializeAws_restJson1_1ResultFrame(output.resultFrame, context);
  }
  return contents;
}

const deserializeAws_restJson1_1SqlStatementResults = (
  output: any,
  context: SerdeContext
): Array<SqlStatementResult> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SqlStatementResult(entry, context)
  );
}

const deserializeAws_restJson1_1StringArray = (
  output: any,
  context: SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_restJson1_1StructValue = (
  output: any,
  context: SerdeContext
): StructValue => {
  let contents: any = {
    __type: "StructValue",
    attributes: undefined,
  };
  if (output.attributes !== undefined) {
    contents.attributes = deserializeAws_restJson1_1ArrayValueList(output.attributes, context);
  }
  return contents;
}

const deserializeAws_restJson1_1UpdateResult = (
  output: any,
  context: SerdeContext
): UpdateResult => {
  let contents: any = {
    __type: "UpdateResult",
    generatedFields: undefined,
  };
  if (output.generatedFields !== undefined) {
    contents.generatedFields = deserializeAws_restJson1_1FieldList(output.generatedFields, context);
  }
  return contents;
}

const deserializeAws_restJson1_1UpdateResults = (
  output: any,
  context: SerdeContext
): Array<UpdateResult> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1UpdateResult(entry, context)
  );
}

const deserializeAws_restJson1_1Value = (
  output: any,
  context: SerdeContext
): Value => {
  if (output.arrayValues !== undefined) {
    return {
      arrayValues: deserializeAws_restJson1_1ArrayValueList(output.arrayValues, context)
    };
  }
  if (output.bigIntValue !== undefined) {
    return {
      bigIntValue: output.bigIntValue
    };
  }
  if (output.bitValue !== undefined) {
    return {
      bitValue: output.bitValue
    };
  }
  if (output.blobValue !== undefined) {
    return {
      blobValue: context.base64Decoder(output.blobValue)
    };
  }
  if (output.doubleValue !== undefined) {
    return {
      doubleValue: output.doubleValue
    };
  }
  if (output.intValue !== undefined) {
    return {
      intValue: output.intValue
    };
  }
  if (output.isNull !== undefined) {
    return {
      isNull: output.isNull
    };
  }
  if (output.realValue !== undefined) {
    return {
      realValue: output.realValue
    };
  }
  if (output.stringValue !== undefined) {
    return {
      stringValue: output.stringValue
    };
  }
  if (output.structValue !== undefined) {
    return {
      structValue: deserializeAws_restJson1_1StructValue(output.structValue, context)
    };
  }
  return { $unknown: output[Object.keys(output)[0]] };
}

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
