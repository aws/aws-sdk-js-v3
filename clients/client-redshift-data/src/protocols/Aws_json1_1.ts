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
  CancelStatementRequest,
  CancelStatementResponse,
  ColumnMetadata,
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
  StatementData,
  TableMember,
  ValidationException,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_json1_1CancelStatementCommand = async (
  input: CancelStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RedshiftData.CancelStatement",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RedshiftData.DescribeStatement",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RedshiftData.DescribeTable",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RedshiftData.ExecuteStatement",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RedshiftData.GetStatementResult",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RedshiftData.ListDatabases",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RedshiftData.ListSchemas",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RedshiftData.ListStatements",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "RedshiftData.ListTables",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTablesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftdata#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftdata#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ExecuteStatementException":
    case "com.amazonaws.redshiftdata#ExecuteStatementException":
      response = {
        ...(await deserializeAws_json1_1ExecuteStatementExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftdata#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.redshiftdata#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.redshiftdata#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1ExecuteStatementExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExecuteStatementException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ExecuteStatementException(body, context);
  const contents: ExecuteStatementException = {
    name: "ExecuteStatementException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(body, context);
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1CancelStatementRequest = (input: CancelStatementRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
  };
};

const serializeAws_json1_1DescribeStatementRequest = (
  input: DescribeStatementRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
  };
};

const serializeAws_json1_1DescribeTableRequest = (input: DescribeTableRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterIdentifier !== undefined && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.Database !== undefined && { Database: input.Database }),
    ...(input.DbUser !== undefined && { DbUser: input.DbUser }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.Schema !== undefined && { Schema: input.Schema }),
    ...(input.SecretArn !== undefined && { SecretArn: input.SecretArn }),
    ...(input.Table !== undefined && { Table: input.Table }),
  };
};

const serializeAws_json1_1ExecuteStatementInput = (input: ExecuteStatementInput, context: __SerdeContext): any => {
  return {
    ...(input.ClusterIdentifier !== undefined && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.Database !== undefined && { Database: input.Database }),
    ...(input.DbUser !== undefined && { DbUser: input.DbUser }),
    ...(input.SecretArn !== undefined && { SecretArn: input.SecretArn }),
    ...(input.Sql !== undefined && { Sql: input.Sql }),
    ...(input.StatementName !== undefined && { StatementName: input.StatementName }),
    ...(input.WithEvent !== undefined && { WithEvent: input.WithEvent }),
  };
};

const serializeAws_json1_1GetStatementResultRequest = (
  input: GetStatementResultRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDatabasesRequest = (input: ListDatabasesRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterIdentifier !== undefined && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.Database !== undefined && { Database: input.Database }),
    ...(input.DbUser !== undefined && { DbUser: input.DbUser }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.SecretArn !== undefined && { SecretArn: input.SecretArn }),
  };
};

const serializeAws_json1_1ListSchemasRequest = (input: ListSchemasRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterIdentifier !== undefined && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.Database !== undefined && { Database: input.Database }),
    ...(input.DbUser !== undefined && { DbUser: input.DbUser }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.SchemaPattern !== undefined && { SchemaPattern: input.SchemaPattern }),
    ...(input.SecretArn !== undefined && { SecretArn: input.SecretArn }),
  };
};

const serializeAws_json1_1ListStatementsRequest = (input: ListStatementsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.StatementName !== undefined && { StatementName: input.StatementName }),
    ...(input.Status !== undefined && { Status: input.Status }),
  };
};

const serializeAws_json1_1ListTablesRequest = (input: ListTablesRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterIdentifier !== undefined && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.Database !== undefined && { Database: input.Database }),
    ...(input.DbUser !== undefined && { DbUser: input.DbUser }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.SchemaPattern !== undefined && { SchemaPattern: input.SchemaPattern }),
    ...(input.SecretArn !== undefined && { SecretArn: input.SecretArn }),
    ...(input.TablePattern !== undefined && { TablePattern: input.TablePattern }),
  };
};

const deserializeAws_json1_1CancelStatementResponse = (
  output: any,
  context: __SerdeContext
): CancelStatementResponse => {
  return {
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_json1_1ColumnList = (output: any, context: __SerdeContext): ColumnMetadata[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ColumnMetadata(entry, context));
};

const deserializeAws_json1_1ColumnMetadata = (output: any, context: __SerdeContext): ColumnMetadata => {
  return {
    columnDefault:
      output.columnDefault !== undefined && output.columnDefault !== null ? output.columnDefault : undefined,
    isCaseSensitive:
      output.isCaseSensitive !== undefined && output.isCaseSensitive !== null ? output.isCaseSensitive : undefined,
    isCurrency: output.isCurrency !== undefined && output.isCurrency !== null ? output.isCurrency : undefined,
    isSigned: output.isSigned !== undefined && output.isSigned !== null ? output.isSigned : undefined,
    label: output.label !== undefined && output.label !== null ? output.label : undefined,
    length: output.length !== undefined && output.length !== null ? output.length : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    nullable: output.nullable !== undefined && output.nullable !== null ? output.nullable : undefined,
    precision: output.precision !== undefined && output.precision !== null ? output.precision : undefined,
    scale: output.scale !== undefined && output.scale !== null ? output.scale : undefined,
    schemaName: output.schemaName !== undefined && output.schemaName !== null ? output.schemaName : undefined,
    tableName: output.tableName !== undefined && output.tableName !== null ? output.tableName : undefined,
    typeName: output.typeName !== undefined && output.typeName !== null ? output.typeName : undefined,
  } as any;
};

const deserializeAws_json1_1ColumnMetadataList = (output: any, context: __SerdeContext): ColumnMetadata[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ColumnMetadata(entry, context));
};

const deserializeAws_json1_1DatabaseList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DescribeStatementResponse = (
  output: any,
  context: __SerdeContext
): DescribeStatementResponse => {
  return {
    ClusterIdentifier:
      output.ClusterIdentifier !== undefined && output.ClusterIdentifier !== null
        ? output.ClusterIdentifier
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
    DbUser: output.DbUser !== undefined && output.DbUser !== null ? output.DbUser : undefined,
    Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
    Error: output.Error !== undefined && output.Error !== null ? output.Error : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    QueryString: output.QueryString !== undefined && output.QueryString !== null ? output.QueryString : undefined,
    RedshiftPid: output.RedshiftPid !== undefined && output.RedshiftPid !== null ? output.RedshiftPid : undefined,
    RedshiftQueryId:
      output.RedshiftQueryId !== undefined && output.RedshiftQueryId !== null ? output.RedshiftQueryId : undefined,
    ResultRows: output.ResultRows !== undefined && output.ResultRows !== null ? output.ResultRows : undefined,
    ResultSize: output.ResultSize !== undefined && output.ResultSize !== null ? output.ResultSize : undefined,
    SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTableResponse = (output: any, context: __SerdeContext): DescribeTableResponse => {
  return {
    ColumnList:
      output.ColumnList !== undefined && output.ColumnList !== null
        ? deserializeAws_json1_1ColumnList(output.ColumnList, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
  } as any;
};

const deserializeAws_json1_1ExecuteStatementException = (
  output: any,
  context: __SerdeContext
): ExecuteStatementException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    StatementId: output.StatementId !== undefined && output.StatementId !== null ? output.StatementId : undefined,
  } as any;
};

const deserializeAws_json1_1ExecuteStatementOutput = (output: any, context: __SerdeContext): ExecuteStatementOutput => {
  return {
    ClusterIdentifier:
      output.ClusterIdentifier !== undefined && output.ClusterIdentifier !== null
        ? output.ClusterIdentifier
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
    DbUser: output.DbUser !== undefined && output.DbUser !== null ? output.DbUser : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
  } as any;
};

const deserializeAws_json1_1Field = (output: any, context: __SerdeContext): Field => {
  if (output.blobValue !== undefined && output.blobValue !== null) {
    return {
      blobValue: context.base64Decoder(output.blobValue),
    };
  }
  if (output.booleanValue !== undefined && output.booleanValue !== null) {
    return {
      booleanValue: output.booleanValue,
    };
  }
  if (output.doubleValue !== undefined && output.doubleValue !== null) {
    return {
      doubleValue: output.doubleValue,
    };
  }
  if (output.isNull !== undefined && output.isNull !== null) {
    return {
      isNull: output.isNull,
    };
  }
  if (output.longValue !== undefined && output.longValue !== null) {
    return {
      longValue: output.longValue,
    };
  }
  if (output.stringValue !== undefined && output.stringValue !== null) {
    return {
      stringValue: output.stringValue,
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_json1_1FieldList = (output: any, context: __SerdeContext): Field[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Field(entry, context));
};

const deserializeAws_json1_1GetStatementResultResponse = (
  output: any,
  context: __SerdeContext
): GetStatementResultResponse => {
  return {
    ColumnMetadata:
      output.ColumnMetadata !== undefined && output.ColumnMetadata !== null
        ? deserializeAws_json1_1ColumnMetadataList(output.ColumnMetadata, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Records:
      output.Records !== undefined && output.Records !== null
        ? deserializeAws_json1_1SqlRecords(output.Records, context)
        : undefined,
    TotalNumRows: output.TotalNumRows !== undefined && output.TotalNumRows !== null ? output.TotalNumRows : undefined,
  } as any;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ListDatabasesResponse = (output: any, context: __SerdeContext): ListDatabasesResponse => {
  return {
    Databases:
      output.Databases !== undefined && output.Databases !== null
        ? deserializeAws_json1_1DatabaseList(output.Databases, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListSchemasResponse = (output: any, context: __SerdeContext): ListSchemasResponse => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Schemas:
      output.Schemas !== undefined && output.Schemas !== null
        ? deserializeAws_json1_1SchemaList(output.Schemas, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListStatementsResponse = (output: any, context: __SerdeContext): ListStatementsResponse => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Statements:
      output.Statements !== undefined && output.Statements !== null
        ? deserializeAws_json1_1StatementList(output.Statements, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTablesResponse = (output: any, context: __SerdeContext): ListTablesResponse => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Tables:
      output.Tables !== undefined && output.Tables !== null
        ? deserializeAws_json1_1TableList(output.Tables, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
  } as any;
};

const deserializeAws_json1_1SchemaList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1SqlRecords = (output: any, context: __SerdeContext): Field[][] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1FieldList(entry, context));
};

const deserializeAws_json1_1StatementData = (output: any, context: __SerdeContext): StatementData => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    QueryString: output.QueryString !== undefined && output.QueryString !== null ? output.QueryString : undefined,
    SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
    StatementName:
      output.StatementName !== undefined && output.StatementName !== null ? output.StatementName : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1StatementList = (output: any, context: __SerdeContext): StatementData[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1StatementData(entry, context));
};

const deserializeAws_json1_1TableList = (output: any, context: __SerdeContext): TableMember[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1TableMember(entry, context));
};

const deserializeAws_json1_1TableMember = (output: any, context: __SerdeContext): TableMember => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    schema: output.schema !== undefined && output.schema !== null ? output.schema : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
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
