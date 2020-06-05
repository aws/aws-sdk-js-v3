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
  ResultSetOptions,
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

export const serializeAws_restJson1BatchExecuteStatementCommand = async (
  input: BatchExecuteStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/BatchExecute";
  let body: any;
  body = JSON.stringify({
    ...(input.database !== undefined && { database: input.database }),
    ...(input.parameterSets !== undefined && {
      parameterSets: serializeAws_restJson1SqlParameterSets(
        input.parameterSets,
        context
      )
    }),
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.schema !== undefined && { schema: input.schema }),
    ...(input.secretArn !== undefined && { secretArn: input.secretArn }),
    ...(input.sql !== undefined && { sql: input.sql }),
    ...(input.transactionId !== undefined && {
      transactionId: input.transactionId
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1BeginTransactionCommand = async (
  input: BeginTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/BeginTransaction";
  let body: any;
  body = JSON.stringify({
    ...(input.database !== undefined && { database: input.database }),
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.schema !== undefined && { schema: input.schema }),
    ...(input.secretArn !== undefined && { secretArn: input.secretArn })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CommitTransactionCommand = async (
  input: CommitTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/CommitTransaction";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.secretArn !== undefined && { secretArn: input.secretArn }),
    ...(input.transactionId !== undefined && {
      transactionId: input.transactionId
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ExecuteSqlCommand = async (
  input: ExecuteSqlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/ExecuteSql";
  let body: any;
  body = JSON.stringify({
    ...(input.awsSecretStoreArn !== undefined && {
      awsSecretStoreArn: input.awsSecretStoreArn
    }),
    ...(input.database !== undefined && { database: input.database }),
    ...(input.dbClusterOrInstanceArn !== undefined && {
      dbClusterOrInstanceArn: input.dbClusterOrInstanceArn
    }),
    ...(input.schema !== undefined && { schema: input.schema }),
    ...(input.sqlStatements !== undefined && {
      sqlStatements: input.sqlStatements
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ExecuteStatementCommand = async (
  input: ExecuteStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/Execute";
  let body: any;
  body = JSON.stringify({
    ...(input.continueAfterTimeout !== undefined && {
      continueAfterTimeout: input.continueAfterTimeout
    }),
    ...(input.database !== undefined && { database: input.database }),
    ...(input.includeResultMetadata !== undefined && {
      includeResultMetadata: input.includeResultMetadata
    }),
    ...(input.parameters !== undefined && {
      parameters: serializeAws_restJson1SqlParametersList(
        input.parameters,
        context
      )
    }),
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.resultSetOptions !== undefined && {
      resultSetOptions: serializeAws_restJson1ResultSetOptions(
        input.resultSetOptions,
        context
      )
    }),
    ...(input.schema !== undefined && { schema: input.schema }),
    ...(input.secretArn !== undefined && { secretArn: input.secretArn }),
    ...(input.sql !== undefined && { sql: input.sql }),
    ...(input.transactionId !== undefined && {
      transactionId: input.transactionId
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1RollbackTransactionCommand = async (
  input: RollbackTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/RollbackTransaction";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.secretArn !== undefined && { secretArn: input.secretArn }),
    ...(input.transactionId !== undefined && {
      transactionId: input.transactionId
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1BatchExecuteStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchExecuteStatementCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1BatchExecuteStatementCommandError(
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
    contents.updateResults = deserializeAws_restJson1UpdateResults(
      data.updateResults,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchExecuteStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchExecuteStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.rdsdata#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.rdsdata#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.rdsdata#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazonaws.rdsdata#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StatementTimeoutException":
    case "com.amazonaws.rdsdata#StatementTimeoutException":
      response = {
        ...(await deserializeAws_restJson1StatementTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1BeginTransactionCommandError(
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
};

const deserializeAws_restJson1BeginTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BeginTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.rdsdata#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.rdsdata#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.rdsdata#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazonaws.rdsdata#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StatementTimeoutException":
    case "com.amazonaws.rdsdata#StatementTimeoutException":
      response = {
        ...(await deserializeAws_restJson1StatementTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CommitTransactionCommandError(
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
};

const deserializeAws_restJson1CommitTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CommitTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.rdsdata#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.rdsdata#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.rdsdata#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.rdsdata#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazonaws.rdsdata#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StatementTimeoutException":
    case "com.amazonaws.rdsdata#StatementTimeoutException":
      response = {
        ...(await deserializeAws_restJson1StatementTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ExecuteSqlCommandError(output, context);
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
    contents.sqlStatementResults = deserializeAws_restJson1SqlStatementResults(
      data.sqlStatementResults,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ExecuteSqlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteSqlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.rdsdata#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.rdsdata#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.rdsdata#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazonaws.rdsdata#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ExecuteStatementCommandError(
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
    contents.columnMetadata = deserializeAws_restJson1Metadata(
      data.columnMetadata,
      context
    );
  }
  if (data.generatedFields !== undefined && data.generatedFields !== null) {
    contents.generatedFields = deserializeAws_restJson1FieldList(
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
    contents.records = deserializeAws_restJson1SqlRecords(
      data.records,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ExecuteStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.rdsdata#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.rdsdata#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.rdsdata#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazonaws.rdsdata#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StatementTimeoutException":
    case "com.amazonaws.rdsdata#StatementTimeoutException":
      response = {
        ...(await deserializeAws_restJson1StatementTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1RollbackTransactionCommandError(
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
};

const deserializeAws_restJson1RollbackTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RollbackTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.rdsdata#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.rdsdata#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.rdsdata#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.rdsdata#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableError":
    case "com.amazonaws.rdsdata#ServiceUnavailableError":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StatementTimeoutException":
    case "com.amazonaws.rdsdata#StatementTimeoutException":
      response = {
        ...(await deserializeAws_restJson1StatementTimeoutExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
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
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
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
    $metadata: deserializeMetadata(parsedOutput)
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
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
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
    $metadata: deserializeMetadata(parsedOutput)
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
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.dbConnectionId !== undefined && data.dbConnectionId !== null) {
    contents.dbConnectionId = data.dbConnectionId;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1ArrayOfArray = (
  input: ArrayValue[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1ArrayValue(entry, context));
};

const serializeAws_restJson1ArrayValue = (
  input: ArrayValue,
  context: __SerdeContext
): any => {
  return ArrayValue.visit(input, {
    arrayValues: value => ({
      arrayValues: serializeAws_restJson1ArrayOfArray(value, context)
    }),
    booleanValues: value => ({
      booleanValues: serializeAws_restJson1BooleanArray(value, context)
    }),
    doubleValues: value => ({
      doubleValues: serializeAws_restJson1DoubleArray(value, context)
    }),
    longValues: value => ({
      longValues: serializeAws_restJson1LongArray(value, context)
    }),
    stringValues: value => ({
      stringValues: serializeAws_restJson1StringArray(value, context)
    }),
    _: (name, value) => ({ name: value } as any)
  });
};

const serializeAws_restJson1BooleanArray = (
  input: boolean[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1DoubleArray = (
  input: number[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1Field = (
  input: Field,
  context: __SerdeContext
): any => {
  return Field.visit(input, {
    arrayValue: value => ({
      arrayValue: serializeAws_restJson1ArrayValue(value, context)
    }),
    blobValue: value => ({ blobValue: context.base64Encoder(value) }),
    booleanValue: value => ({ booleanValue: value }),
    doubleValue: value => ({ doubleValue: value }),
    isNull: value => ({ isNull: value }),
    longValue: value => ({ longValue: value }),
    stringValue: value => ({ stringValue: value }),
    _: (name, value) => ({ name: value } as any)
  });
};

const serializeAws_restJson1LongArray = (
  input: number[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1ResultSetOptions = (
  input: ResultSetOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.decimalReturnType !== undefined && {
      decimalReturnType: input.decimalReturnType
    })
  };
};

const serializeAws_restJson1SqlParameter = (
  input: SqlParameter,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.typeHint !== undefined && { typeHint: input.typeHint }),
    ...(input.value !== undefined && {
      value: serializeAws_restJson1Field(input.value, context)
    })
  };
};

const serializeAws_restJson1SqlParameterSets = (
  input: SqlParameter[][],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1SqlParametersList(entry, context)
  );
};

const serializeAws_restJson1SqlParametersList = (
  input: SqlParameter[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1SqlParameter(entry, context));
};

const serializeAws_restJson1StringArray = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const deserializeAws_restJson1ArrayOfArray = (
  output: any,
  context: __SerdeContext
): ArrayValue[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ArrayValue(entry, context)
  );
};

const deserializeAws_restJson1ArrayValue = (
  output: any,
  context: __SerdeContext
): ArrayValue => {
  if (output.arrayValues !== undefined && output.arrayValues !== null) {
    return {
      arrayValues: deserializeAws_restJson1ArrayOfArray(
        output.arrayValues,
        context
      )
    };
  }
  if (output.booleanValues !== undefined && output.booleanValues !== null) {
    return {
      booleanValues: deserializeAws_restJson1BooleanArray(
        output.booleanValues,
        context
      )
    };
  }
  if (output.doubleValues !== undefined && output.doubleValues !== null) {
    return {
      doubleValues: deserializeAws_restJson1DoubleArray(
        output.doubleValues,
        context
      )
    };
  }
  if (output.longValues !== undefined && output.longValues !== null) {
    return {
      longValues: deserializeAws_restJson1LongArray(output.longValues, context)
    };
  }
  if (output.stringValues !== undefined && output.stringValues !== null) {
    return {
      stringValues: deserializeAws_restJson1StringArray(
        output.stringValues,
        context
      )
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ArrayValueList = (
  output: any,
  context: __SerdeContext
): Value[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Value(entry, context)
  );
};

const deserializeAws_restJson1BooleanArray = (
  output: any,
  context: __SerdeContext
): boolean[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1ColumnMetadata = (
  output: any,
  context: __SerdeContext
): ColumnMetadata => {
  return {
    __type: "ColumnMetadata",
    arrayBaseColumnType:
      output.arrayBaseColumnType !== undefined &&
      output.arrayBaseColumnType !== null
        ? output.arrayBaseColumnType
        : undefined,
    isAutoIncrement:
      output.isAutoIncrement !== undefined && output.isAutoIncrement !== null
        ? output.isAutoIncrement
        : undefined,
    isCaseSensitive:
      output.isCaseSensitive !== undefined && output.isCaseSensitive !== null
        ? output.isCaseSensitive
        : undefined,
    isCurrency:
      output.isCurrency !== undefined && output.isCurrency !== null
        ? output.isCurrency
        : undefined,
    isSigned:
      output.isSigned !== undefined && output.isSigned !== null
        ? output.isSigned
        : undefined,
    label:
      output.label !== undefined && output.label !== null
        ? output.label
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    nullable:
      output.nullable !== undefined && output.nullable !== null
        ? output.nullable
        : undefined,
    precision:
      output.precision !== undefined && output.precision !== null
        ? output.precision
        : undefined,
    scale:
      output.scale !== undefined && output.scale !== null
        ? output.scale
        : undefined,
    schemaName:
      output.schemaName !== undefined && output.schemaName !== null
        ? output.schemaName
        : undefined,
    tableName:
      output.tableName !== undefined && output.tableName !== null
        ? output.tableName
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined,
    typeName:
      output.typeName !== undefined && output.typeName !== null
        ? output.typeName
        : undefined
  } as any;
};

const deserializeAws_restJson1DoubleArray = (
  output: any,
  context: __SerdeContext
): number[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1Field = (
  output: any,
  context: __SerdeContext
): Field => {
  if (output.arrayValue !== undefined && output.arrayValue !== null) {
    return {
      arrayValue: deserializeAws_restJson1ArrayValue(output.arrayValue, context)
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
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1FieldList = (
  output: any,
  context: __SerdeContext
): Field[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Field(entry, context)
  );
};

const deserializeAws_restJson1LongArray = (
  output: any,
  context: __SerdeContext
): number[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1Metadata = (
  output: any,
  context: __SerdeContext
): ColumnMetadata[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ColumnMetadata(entry, context)
  );
};

const deserializeAws_restJson1_Record = (
  output: any,
  context: __SerdeContext
): _Record => {
  return {
    __type: "Record",
    values:
      output.values !== undefined && output.values !== null
        ? deserializeAws_restJson1Row(output.values, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1Records = (
  output: any,
  context: __SerdeContext
): _Record[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_Record(entry, context)
  );
};

const deserializeAws_restJson1ResultFrame = (
  output: any,
  context: __SerdeContext
): ResultFrame => {
  return {
    __type: "ResultFrame",
    records:
      output.records !== undefined && output.records !== null
        ? deserializeAws_restJson1Records(output.records, context)
        : undefined,
    resultSetMetadata:
      output.resultSetMetadata !== undefined &&
      output.resultSetMetadata !== null
        ? deserializeAws_restJson1ResultSetMetadata(
            output.resultSetMetadata,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1ResultSetMetadata = (
  output: any,
  context: __SerdeContext
): ResultSetMetadata => {
  return {
    __type: "ResultSetMetadata",
    columnCount:
      output.columnCount !== undefined && output.columnCount !== null
        ? output.columnCount
        : undefined,
    columnMetadata:
      output.columnMetadata !== undefined && output.columnMetadata !== null
        ? deserializeAws_restJson1Metadata(output.columnMetadata, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1Row = (
  output: any,
  context: __SerdeContext
): Value[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Value(entry, context)
  );
};

const deserializeAws_restJson1SqlRecords = (
  output: any,
  context: __SerdeContext
): Field[][] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1FieldList(entry, context)
  );
};

const deserializeAws_restJson1SqlStatementResult = (
  output: any,
  context: __SerdeContext
): SqlStatementResult => {
  return {
    __type: "SqlStatementResult",
    numberOfRecordsUpdated:
      output.numberOfRecordsUpdated !== undefined &&
      output.numberOfRecordsUpdated !== null
        ? output.numberOfRecordsUpdated
        : undefined,
    resultFrame:
      output.resultFrame !== undefined && output.resultFrame !== null
        ? deserializeAws_restJson1ResultFrame(output.resultFrame, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1SqlStatementResults = (
  output: any,
  context: __SerdeContext
): SqlStatementResult[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1SqlStatementResult(entry, context)
  );
};

const deserializeAws_restJson1StringArray = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1StructValue = (
  output: any,
  context: __SerdeContext
): StructValue => {
  return {
    __type: "StructValue",
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_restJson1ArrayValueList(output.attributes, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1UpdateResult = (
  output: any,
  context: __SerdeContext
): UpdateResult => {
  return {
    __type: "UpdateResult",
    generatedFields:
      output.generatedFields !== undefined && output.generatedFields !== null
        ? deserializeAws_restJson1FieldList(output.generatedFields, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1UpdateResults = (
  output: any,
  context: __SerdeContext
): UpdateResult[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1UpdateResult(entry, context)
  );
};

const deserializeAws_restJson1Value = (
  output: any,
  context: __SerdeContext
): Value => {
  if (output.arrayValues !== undefined && output.arrayValues !== null) {
    return {
      arrayValues: deserializeAws_restJson1ArrayValueList(
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
      structValue: deserializeAws_restJson1StructValue(
        output.structValue,
        context
      )
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
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
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

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
