import {
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput
} from "../commands/BatchExecuteStatementCommand";
import {
  BeginTransactionCommandInput,
  BeginTransactionCommandOutput
} from "../commands/BeginTransactionCommand";
import {
  CommitTransactionCommandInput,
  CommitTransactionCommandOutput
} from "../commands/CommitTransactionCommand";
import {
  ExecuteSqlCommandInput,
  ExecuteSqlCommandOutput
} from "../commands/ExecuteSqlCommand";
import {
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput
} from "../commands/ExecuteStatementCommand";
import {
  RollbackTransactionCommandInput,
  RollbackTransactionCommandOutput
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
  _Record
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1BatchExecuteStatementCommand(
  input: BatchExecuteStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/BatchExecute";
  let body: any;
  const bodyParams: any = {};
  if (input.database !== undefined) {
    bodyParams["database"] = input.database;
  }
  if (input.parameterSets !== undefined) {
    bodyParams["parameterSets"] = serializeAws_restJson1_1SqlParameterSets(
      input.parameterSets,
      context
    );
  }
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.schema !== undefined) {
    bodyParams["schema"] = input.schema;
  }
  if (input.secretArn !== undefined) {
    bodyParams["secretArn"] = input.secretArn;
  }
  if (input.sql !== undefined) {
    bodyParams["sql"] = input.sql;
  }
  if (input.transactionId !== undefined) {
    bodyParams["transactionId"] = input.transactionId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1BeginTransactionCommand(
  input: BeginTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/BeginTransaction";
  let body: any;
  const bodyParams: any = {};
  if (input.database !== undefined) {
    bodyParams["database"] = input.database;
  }
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.schema !== undefined) {
    bodyParams["schema"] = input.schema;
  }
  if (input.secretArn !== undefined) {
    bodyParams["secretArn"] = input.secretArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CommitTransactionCommand(
  input: CommitTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/CommitTransaction";
  let body: any;
  const bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.secretArn !== undefined) {
    bodyParams["secretArn"] = input.secretArn;
  }
  if (input.transactionId !== undefined) {
    bodyParams["transactionId"] = input.transactionId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ExecuteSqlCommand(
  input: ExecuteSqlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/ExecuteSql";
  let body: any;
  const bodyParams: any = {};
  if (input.awsSecretStoreArn !== undefined) {
    bodyParams["awsSecretStoreArn"] = input.awsSecretStoreArn;
  }
  if (input.database !== undefined) {
    bodyParams["database"] = input.database;
  }
  if (input.dbClusterOrInstanceArn !== undefined) {
    bodyParams["dbClusterOrInstanceArn"] = input.dbClusterOrInstanceArn;
  }
  if (input.schema !== undefined) {
    bodyParams["schema"] = input.schema;
  }
  if (input.sqlStatements !== undefined) {
    bodyParams["sqlStatements"] = input.sqlStatements;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ExecuteStatementCommand(
  input: ExecuteStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/Execute";
  let body: any;
  const bodyParams: any = {};
  if (input.continueAfterTimeout !== undefined) {
    bodyParams["continueAfterTimeout"] = input.continueAfterTimeout;
  }
  if (input.database !== undefined) {
    bodyParams["database"] = input.database;
  }
  if (input.includeResultMetadata !== undefined) {
    bodyParams["includeResultMetadata"] = input.includeResultMetadata;
  }
  if (input.parameters !== undefined) {
    bodyParams["parameters"] = serializeAws_restJson1_1SqlParametersList(
      input.parameters,
      context
    );
  }
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.schema !== undefined) {
    bodyParams["schema"] = input.schema;
  }
  if (input.secretArn !== undefined) {
    bodyParams["secretArn"] = input.secretArn;
  }
  if (input.sql !== undefined) {
    bodyParams["sql"] = input.sql;
  }
  if (input.transactionId !== undefined) {
    bodyParams["transactionId"] = input.transactionId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1RollbackTransactionCommand(
  input: RollbackTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/RollbackTransaction";
  let body: any;
  const bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.secretArn !== undefined) {
    bodyParams["secretArn"] = input.secretArn;
  }
  if (input.transactionId !== undefined) {
    bodyParams["transactionId"] = input.transactionId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1BatchExecuteStatementCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchExecuteStatementCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1BatchExecuteStatementCommandError(
      output,
      context
    );
  }
  const contents: BatchExecuteStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchExecuteStatementResponse",
    updateResults: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.updateResults !== undefined && data.updateResults !== null) {
    contents.updateResults = deserializeAws_restJson1_1UpdateResults(
      data.updateResults,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1BatchExecuteStatementCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchExecuteStatementCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.rdsdataservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazon.rdsdataservice#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazon.rdsdataservice#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazon.rdsdataservice#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StatementTimeoutException":
    case "com.amazon.rdsdataservice#StatementTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1StatementTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1BeginTransactionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BeginTransactionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1BeginTransactionCommandError(
      output,
      context
    );
  }
  const contents: BeginTransactionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BeginTransactionResponse",
    transactionId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.transactionId !== undefined && data.transactionId !== null) {
    contents.transactionId = data.transactionId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1BeginTransactionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BeginTransactionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.rdsdataservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazon.rdsdataservice#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazon.rdsdataservice#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazon.rdsdataservice#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StatementTimeoutException":
    case "com.amazon.rdsdataservice#StatementTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1StatementTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CommitTransactionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CommitTransactionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CommitTransactionCommandError(
      output,
      context
    );
  }
  const contents: CommitTransactionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CommitTransactionResponse",
    transactionStatus: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.transactionStatus !== undefined && data.transactionStatus !== null) {
    contents.transactionStatus = data.transactionStatus;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CommitTransactionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CommitTransactionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.rdsdataservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazon.rdsdataservice#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazon.rdsdataservice#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.rdsdataservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazon.rdsdataservice#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ExecuteSqlCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteSqlCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ExecuteSqlCommandError(output, context);
  }
  const contents: ExecuteSqlCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ExecuteSqlResponse",
    sqlStatementResults: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.sqlStatementResults !== undefined &&
    data.sqlStatementResults !== null
  ) {
    contents.sqlStatementResults = deserializeAws_restJson1_1SqlStatementResults(
      data.sqlStatementResults,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ExecuteSqlCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteSqlCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.rdsdataservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazon.rdsdataservice#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazon.rdsdataservice#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazon.rdsdataservice#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ExecuteStatementCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteStatementCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ExecuteStatementCommandError(
      output,
      context
    );
  }
  const contents: ExecuteStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ExecuteStatementResponse",
    columnMetadata: undefined,
    generatedFields: undefined,
    numberOfRecordsUpdated: undefined,
    records: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.columnMetadata !== undefined && data.columnMetadata !== null) {
    contents.columnMetadata = deserializeAws_restJson1_1Metadata(
      data.columnMetadata,
      context
    );
  }
  if (data.generatedFields !== undefined && data.generatedFields !== null) {
    contents.generatedFields = deserializeAws_restJson1_1FieldList(
      data.generatedFields,
      context
    );
  }
  if (
    data.numberOfRecordsUpdated !== undefined &&
    data.numberOfRecordsUpdated !== null
  ) {
    contents.numberOfRecordsUpdated = data.numberOfRecordsUpdated;
  }
  if (data.records !== undefined && data.records !== null) {
    contents.records = deserializeAws_restJson1_1SqlRecords(
      data.records,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ExecuteStatementCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteStatementCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.rdsdataservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazon.rdsdataservice#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazon.rdsdataservice#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazon.rdsdataservice#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StatementTimeoutException":
    case "com.amazon.rdsdataservice#StatementTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1StatementTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1RollbackTransactionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RollbackTransactionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RollbackTransactionCommandError(
      output,
      context
    );
  }
  const contents: RollbackTransactionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RollbackTransactionResponse",
    transactionStatus: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.transactionStatus !== undefined && data.transactionStatus !== null) {
    contents.transactionStatus = data.transactionStatus;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1RollbackTransactionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RollbackTransactionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazon.rdsdataservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazon.rdsdataservice#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazon.rdsdataservice#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.rdsdataservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazon.rdsdataservice#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableErrorResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableError> => {
  const contents: ServiceUnavailableError = {
    name: "ServiceUnavailableError",
    $fault: "server",
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1_1StatementTimeoutExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<StatementTimeoutException> => {
  const contents: StatementTimeoutException = {
    name: "StatementTimeoutException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    dbConnectionId: undefined,
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.dbConnectionId !== undefined && data.dbConnectionId !== null) {
    contents.dbConnectionId = data.dbConnectionId;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1ArrayOfArray = (
  input: Array<ArrayValue>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1ArrayValue(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1ArrayValue = (
  input: ArrayValue,
  context: __SerdeContext
): any => {
  return ArrayValue.visit(input, {
    arrayValues: value => serializeAws_restJson1_1ArrayOfArray(value, context),
    booleanValues: value =>
      serializeAws_restJson1_1BooleanArray(value, context),
    doubleValues: value => serializeAws_restJson1_1DoubleArray(value, context),
    longValues: value => serializeAws_restJson1_1LongArray(value, context),
    stringValues: value => serializeAws_restJson1_1StringArray(value, context),
    _: value => value
  });
};

const serializeAws_restJson1_1BooleanArray = (
  input: Array<boolean>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1DoubleArray = (
  input: Array<number>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1Field = (
  input: Field,
  context: __SerdeContext
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
};

const serializeAws_restJson1_1LongArray = (
  input: Array<number>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SqlParameter = (
  input: SqlParameter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = serializeAws_restJson1_1Field(input.value, context);
  }
  return bodyParams;
};

const serializeAws_restJson1_1SqlParameterSets = (
  input: Array<Array<SqlParameter>>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1SqlParametersList(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1SqlParametersList = (
  input: Array<SqlParameter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1SqlParameter(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1StringArray = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const deserializeAws_restJson1_1ArrayOfArray = (
  output: any,
  context: __SerdeContext
): Array<ArrayValue> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ArrayValue(entry, context)
  );
};

const deserializeAws_restJson1_1ArrayValue = (
  output: any,
  context: __SerdeContext
): ArrayValue => {
  if (output.arrayValues !== undefined && output.arrayValues !== null) {
    return {
      arrayValues: deserializeAws_restJson1_1ArrayOfArray(
        output.arrayValues,
        context
      )
    };
  }
  if (output.booleanValues !== undefined && output.booleanValues !== null) {
    return {
      booleanValues: deserializeAws_restJson1_1BooleanArray(
        output.booleanValues,
        context
      )
    };
  }
  if (output.doubleValues !== undefined && output.doubleValues !== null) {
    return {
      doubleValues: deserializeAws_restJson1_1DoubleArray(
        output.doubleValues,
        context
      )
    };
  }
  if (output.longValues !== undefined && output.longValues !== null) {
    return {
      longValues: deserializeAws_restJson1_1LongArray(
        output.longValues,
        context
      )
    };
  }
  if (output.stringValues !== undefined && output.stringValues !== null) {
    return {
      stringValues: deserializeAws_restJson1_1StringArray(
        output.stringValues,
        context
      )
    };
  }
  const key = Object.keys(output)[0];
  return { $unknown: [key, output[key]] };
};

const deserializeAws_restJson1_1ArrayValueList = (
  output: any,
  context: __SerdeContext
): Array<Value> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Value(entry, context)
  );
};

const deserializeAws_restJson1_1BooleanArray = (
  output: any,
  context: __SerdeContext
): Array<boolean> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1ColumnMetadata = (
  output: any,
  context: __SerdeContext
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
    typeName: undefined
  };
  if (
    output.arrayBaseColumnType !== undefined &&
    output.arrayBaseColumnType !== null
  ) {
    contents.arrayBaseColumnType = output.arrayBaseColumnType;
  }
  if (output.isAutoIncrement !== undefined && output.isAutoIncrement !== null) {
    contents.isAutoIncrement = output.isAutoIncrement;
  }
  if (output.isCaseSensitive !== undefined && output.isCaseSensitive !== null) {
    contents.isCaseSensitive = output.isCaseSensitive;
  }
  if (output.isCurrency !== undefined && output.isCurrency !== null) {
    contents.isCurrency = output.isCurrency;
  }
  if (output.isSigned !== undefined && output.isSigned !== null) {
    contents.isSigned = output.isSigned;
  }
  if (output.label !== undefined && output.label !== null) {
    contents.label = output.label;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.nullable !== undefined && output.nullable !== null) {
    contents.nullable = output.nullable;
  }
  if (output.precision !== undefined && output.precision !== null) {
    contents.precision = output.precision;
  }
  if (output.scale !== undefined && output.scale !== null) {
    contents.scale = output.scale;
  }
  if (output.schemaName !== undefined && output.schemaName !== null) {
    contents.schemaName = output.schemaName;
  }
  if (output.tableName !== undefined && output.tableName !== null) {
    contents.tableName = output.tableName;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  if (output.typeName !== undefined && output.typeName !== null) {
    contents.typeName = output.typeName;
  }
  return contents;
};

const deserializeAws_restJson1_1DoubleArray = (
  output: any,
  context: __SerdeContext
): Array<number> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Field = (
  output: any,
  context: __SerdeContext
): Field => {
  if (output.arrayValue !== undefined && output.arrayValue !== null) {
    return {
      arrayValue: deserializeAws_restJson1_1ArrayValue(
        output.arrayValue,
        context
      )
    };
  }
  if (output.blobValue !== undefined && output.blobValue !== null) {
    return {
      blobValue: context.base64Decoder(output.blobValue)
    };
  }
  if (output.booleanValue !== undefined && output.booleanValue !== null) {
    return {
      booleanValue: output.booleanValue
    };
  }
  if (output.doubleValue !== undefined && output.doubleValue !== null) {
    return {
      doubleValue: output.doubleValue
    };
  }
  if (output.isNull !== undefined && output.isNull !== null) {
    return {
      isNull: output.isNull
    };
  }
  if (output.longValue !== undefined && output.longValue !== null) {
    return {
      longValue: output.longValue
    };
  }
  if (output.stringValue !== undefined && output.stringValue !== null) {
    return {
      stringValue: output.stringValue
    };
  }
  const key = Object.keys(output)[0];
  return { $unknown: [key, output[key]] };
};

const deserializeAws_restJson1_1FieldList = (
  output: any,
  context: __SerdeContext
): Array<Field> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Field(entry, context)
  );
};

const deserializeAws_restJson1_1LongArray = (
  output: any,
  context: __SerdeContext
): Array<number> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Metadata = (
  output: any,
  context: __SerdeContext
): Array<ColumnMetadata> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ColumnMetadata(entry, context)
  );
};

const deserializeAws_restJson1_1_Record = (
  output: any,
  context: __SerdeContext
): _Record => {
  let contents: any = {
    __type: "Record",
    values: undefined
  };
  if (output.values !== undefined && output.values !== null) {
    contents.values = deserializeAws_restJson1_1Row(output.values, context);
  }
  return contents;
};

const deserializeAws_restJson1_1Records = (
  output: any,
  context: __SerdeContext
): Array<_Record> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1_Record(entry, context)
  );
};

const deserializeAws_restJson1_1ResultFrame = (
  output: any,
  context: __SerdeContext
): ResultFrame => {
  let contents: any = {
    __type: "ResultFrame",
    records: undefined,
    resultSetMetadata: undefined
  };
  if (output.records !== undefined && output.records !== null) {
    contents.records = deserializeAws_restJson1_1Records(
      output.records,
      context
    );
  }
  if (
    output.resultSetMetadata !== undefined &&
    output.resultSetMetadata !== null
  ) {
    contents.resultSetMetadata = deserializeAws_restJson1_1ResultSetMetadata(
      output.resultSetMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ResultSetMetadata = (
  output: any,
  context: __SerdeContext
): ResultSetMetadata => {
  let contents: any = {
    __type: "ResultSetMetadata",
    columnCount: undefined,
    columnMetadata: undefined
  };
  if (output.columnCount !== undefined && output.columnCount !== null) {
    contents.columnCount = output.columnCount;
  }
  if (output.columnMetadata !== undefined && output.columnMetadata !== null) {
    contents.columnMetadata = deserializeAws_restJson1_1Metadata(
      output.columnMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Row = (
  output: any,
  context: __SerdeContext
): Array<Value> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Value(entry, context)
  );
};

const deserializeAws_restJson1_1SqlRecords = (
  output: any,
  context: __SerdeContext
): Array<Array<Field>> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1FieldList(entry, context)
  );
};

const deserializeAws_restJson1_1SqlStatementResult = (
  output: any,
  context: __SerdeContext
): SqlStatementResult => {
  let contents: any = {
    __type: "SqlStatementResult",
    numberOfRecordsUpdated: undefined,
    resultFrame: undefined
  };
  if (
    output.numberOfRecordsUpdated !== undefined &&
    output.numberOfRecordsUpdated !== null
  ) {
    contents.numberOfRecordsUpdated = output.numberOfRecordsUpdated;
  }
  if (output.resultFrame !== undefined && output.resultFrame !== null) {
    contents.resultFrame = deserializeAws_restJson1_1ResultFrame(
      output.resultFrame,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1SqlStatementResults = (
  output: any,
  context: __SerdeContext
): Array<SqlStatementResult> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SqlStatementResult(entry, context)
  );
};

const deserializeAws_restJson1_1StringArray = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1StructValue = (
  output: any,
  context: __SerdeContext
): StructValue => {
  let contents: any = {
    __type: "StructValue",
    attributes: undefined
  };
  if (output.attributes !== undefined && output.attributes !== null) {
    contents.attributes = deserializeAws_restJson1_1ArrayValueList(
      output.attributes,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1UpdateResult = (
  output: any,
  context: __SerdeContext
): UpdateResult => {
  let contents: any = {
    __type: "UpdateResult",
    generatedFields: undefined
  };
  if (output.generatedFields !== undefined && output.generatedFields !== null) {
    contents.generatedFields = deserializeAws_restJson1_1FieldList(
      output.generatedFields,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1UpdateResults = (
  output: any,
  context: __SerdeContext
): Array<UpdateResult> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1UpdateResult(entry, context)
  );
};

const deserializeAws_restJson1_1Value = (
  output: any,
  context: __SerdeContext
): Value => {
  if (output.arrayValues !== undefined && output.arrayValues !== null) {
    return {
      arrayValues: deserializeAws_restJson1_1ArrayValueList(
        output.arrayValues,
        context
      )
    };
  }
  if (output.bigIntValue !== undefined && output.bigIntValue !== null) {
    return {
      bigIntValue: output.bigIntValue
    };
  }
  if (output.bitValue !== undefined && output.bitValue !== null) {
    return {
      bitValue: output.bitValue
    };
  }
  if (output.blobValue !== undefined && output.blobValue !== null) {
    return {
      blobValue: context.base64Decoder(output.blobValue)
    };
  }
  if (output.doubleValue !== undefined && output.doubleValue !== null) {
    return {
      doubleValue: output.doubleValue
    };
  }
  if (output.intValue !== undefined && output.intValue !== null) {
    return {
      intValue: output.intValue
    };
  }
  if (output.isNull !== undefined && output.isNull !== null) {
    return {
      isNull: output.isNull
    };
  }
  if (output.realValue !== undefined && output.realValue !== null) {
    return {
      realValue: output.realValue
    };
  }
  if (output.stringValue !== undefined && output.stringValue !== null) {
    return {
      stringValue: output.stringValue
    };
  }
  if (output.structValue !== undefined && output.structValue !== null) {
    return {
      structValue: deserializeAws_restJson1_1StructValue(
        output.structValue,
        context
      )
    };
  }
  const key = Object.keys(output)[0];
  return { $unknown: [key, output[key]] };
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
