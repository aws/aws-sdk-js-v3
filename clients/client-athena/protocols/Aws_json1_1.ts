import {
  BatchGetNamedQueryCommandInput,
  BatchGetNamedQueryCommandOutput
} from "../commands/BatchGetNamedQueryCommand";
import {
  BatchGetQueryExecutionCommandInput,
  BatchGetQueryExecutionCommandOutput
} from "../commands/BatchGetQueryExecutionCommand";
import {
  CreateNamedQueryCommandInput,
  CreateNamedQueryCommandOutput
} from "../commands/CreateNamedQueryCommand";
import {
  CreateWorkGroupCommandInput,
  CreateWorkGroupCommandOutput
} from "../commands/CreateWorkGroupCommand";
import {
  DeleteNamedQueryCommandInput,
  DeleteNamedQueryCommandOutput
} from "../commands/DeleteNamedQueryCommand";
import {
  DeleteWorkGroupCommandInput,
  DeleteWorkGroupCommandOutput
} from "../commands/DeleteWorkGroupCommand";
import {
  GetNamedQueryCommandInput,
  GetNamedQueryCommandOutput
} from "../commands/GetNamedQueryCommand";
import {
  GetQueryExecutionCommandInput,
  GetQueryExecutionCommandOutput
} from "../commands/GetQueryExecutionCommand";
import {
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput
} from "../commands/GetQueryResultsCommand";
import {
  GetWorkGroupCommandInput,
  GetWorkGroupCommandOutput
} from "../commands/GetWorkGroupCommand";
import {
  ListNamedQueriesCommandInput,
  ListNamedQueriesCommandOutput
} from "../commands/ListNamedQueriesCommand";
import {
  ListQueryExecutionsCommandInput,
  ListQueryExecutionsCommandOutput
} from "../commands/ListQueryExecutionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListWorkGroupsCommandInput,
  ListWorkGroupsCommandOutput
} from "../commands/ListWorkGroupsCommand";
import {
  StartQueryExecutionCommandInput,
  StartQueryExecutionCommandOutput
} from "../commands/StartQueryExecutionCommand";
import {
  StopQueryExecutionCommandInput,
  StopQueryExecutionCommandOutput
} from "../commands/StopQueryExecutionCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateWorkGroupCommandInput,
  UpdateWorkGroupCommandOutput
} from "../commands/UpdateWorkGroupCommand";
import {
  BatchGetNamedQueryInput,
  BatchGetNamedQueryOutput,
  BatchGetQueryExecutionInput,
  BatchGetQueryExecutionOutput,
  ColumnInfo,
  CreateNamedQueryInput,
  CreateNamedQueryOutput,
  CreateWorkGroupInput,
  CreateWorkGroupOutput,
  Datum,
  DeleteNamedQueryInput,
  DeleteNamedQueryOutput,
  DeleteWorkGroupInput,
  DeleteWorkGroupOutput,
  EncryptionConfiguration,
  GetNamedQueryInput,
  GetNamedQueryOutput,
  GetQueryExecutionInput,
  GetQueryExecutionOutput,
  GetQueryResultsInput,
  GetQueryResultsOutput,
  GetWorkGroupInput,
  GetWorkGroupOutput,
  InternalServerException,
  InvalidRequestException,
  ListNamedQueriesInput,
  ListNamedQueriesOutput,
  ListQueryExecutionsInput,
  ListQueryExecutionsOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListWorkGroupsInput,
  ListWorkGroupsOutput,
  NamedQuery,
  QueryExecution,
  QueryExecutionContext,
  QueryExecutionStatistics,
  QueryExecutionStatus,
  ResourceNotFoundException,
  ResultConfiguration,
  ResultConfigurationUpdates,
  ResultSet,
  ResultSetMetadata,
  Row,
  StartQueryExecutionInput,
  StartQueryExecutionOutput,
  StopQueryExecutionInput,
  StopQueryExecutionOutput,
  Tag,
  TagResourceInput,
  TagResourceOutput,
  TooManyRequestsException,
  UnprocessedNamedQueryId,
  UnprocessedQueryExecutionId,
  UntagResourceInput,
  UntagResourceOutput,
  UpdateWorkGroupInput,
  UpdateWorkGroupOutput,
  WorkGroup,
  WorkGroupConfiguration,
  WorkGroupConfigurationUpdates,
  WorkGroupSummary
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_json1_1BatchGetNamedQueryCommand = async (
  input: BatchGetNamedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonAthena.BatchGetNamedQuery"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetNamedQueryInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGetQueryExecutionCommand = async (
  input: BatchGetQueryExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonAthena.BatchGetQueryExecution"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetQueryExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateNamedQueryCommand = async (
  input: CreateNamedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonAthena.CreateNamedQuery"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateNamedQueryInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateWorkGroupCommand = async (
  input: CreateWorkGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonAthena.CreateWorkGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateWorkGroupInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteNamedQueryCommand = async (
  input: DeleteNamedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonAthena.DeleteNamedQuery"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteNamedQueryInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteWorkGroupCommand = async (
  input: DeleteWorkGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonAthena.DeleteWorkGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteWorkGroupInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetNamedQueryCommand = async (
  input: GetNamedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonAthena.GetNamedQuery"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetNamedQueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetQueryExecutionCommand = async (
  input: GetQueryExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonAthena.GetQueryExecution"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetQueryExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetQueryResultsCommand = async (
  input: GetQueryResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonAthena.GetQueryResults"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetQueryResultsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetWorkGroupCommand = async (
  input: GetWorkGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonAthena.GetWorkGroup"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetWorkGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListNamedQueriesCommand = async (
  input: ListNamedQueriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonAthena.ListNamedQueries"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListNamedQueriesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListQueryExecutionsCommand = async (
  input: ListQueryExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonAthena.ListQueryExecutions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListQueryExecutionsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonAthena.ListTagsForResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListWorkGroupsCommand = async (
  input: ListWorkGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonAthena.ListWorkGroups"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListWorkGroupsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartQueryExecutionCommand = async (
  input: StartQueryExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonAthena.StartQueryExecution"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartQueryExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopQueryExecutionCommand = async (
  input: StopQueryExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonAthena.StopQueryExecution"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopQueryExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonAthena.TagResource"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonAthena.UntagResource"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateWorkGroupCommand = async (
  input: UpdateWorkGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonAthena.UpdateWorkGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateWorkGroupInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1BatchGetNamedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetNamedQueryCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchGetNamedQueryCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetNamedQueryOutput(data, context);
  const response: BatchGetNamedQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchGetNamedQueryOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetNamedQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetNamedQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1BatchGetQueryExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetQueryExecutionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchGetQueryExecutionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGetQueryExecutionOutput(data, context);
  const response: BatchGetQueryExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchGetQueryExecutionOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGetQueryExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetQueryExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1CreateNamedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNamedQueryCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateNamedQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateNamedQueryOutput(data, context);
  const response: CreateNamedQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateNamedQueryOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateNamedQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNamedQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1CreateWorkGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateWorkGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateWorkGroupOutput(data, context);
  const response: CreateWorkGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateWorkGroupOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateWorkGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1DeleteNamedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamedQueryCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteNamedQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteNamedQueryOutput(data, context);
  const response: DeleteNamedQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteNamedQueryOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteNamedQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamedQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1DeleteWorkGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteWorkGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteWorkGroupOutput(data, context);
  const response: DeleteWorkGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteWorkGroupOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteWorkGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1GetNamedQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamedQueryCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetNamedQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetNamedQueryOutput(data, context);
  const response: GetNamedQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetNamedQueryOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetNamedQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamedQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1GetQueryExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryExecutionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetQueryExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetQueryExecutionOutput(data, context);
  const response: GetQueryExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetQueryExecutionOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetQueryExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1GetQueryResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetQueryResultsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetQueryResultsOutput(data, context);
  const response: GetQueryResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetQueryResultsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetQueryResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1GetWorkGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetWorkGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetWorkGroupOutput(data, context);
  const response: GetWorkGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetWorkGroupOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetWorkGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1ListNamedQueriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamedQueriesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListNamedQueriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListNamedQueriesOutput(data, context);
  const response: ListNamedQueriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListNamedQueriesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListNamedQueriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamedQueriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1ListQueryExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueryExecutionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListQueryExecutionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListQueryExecutionsOutput(data, context);
  const response: ListQueryExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListQueryExecutionsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListQueryExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueryExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1ListWorkGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkGroupsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListWorkGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListWorkGroupsOutput(data, context);
  const response: ListWorkGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListWorkGroupsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListWorkGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1StartQueryExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryExecutionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartQueryExecutionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartQueryExecutionOutput(data, context);
  const response: StartQueryExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartQueryExecutionOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartQueryExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.athena#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_json1_1StopQueryExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopQueryExecutionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopQueryExecutionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopQueryExecutionOutput(data, context);
  const response: StopQueryExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopQueryExecutionOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopQueryExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopQueryExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceOutput(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceOutput(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.athena#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1UpdateWorkGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateWorkGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateWorkGroupOutput(data, context);
  const response: UpdateWorkGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateWorkGroupOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateWorkGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(
    body,
    context
  );
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(
    body,
    context
  );
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyRequestsException(
    body,
    context
  );
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1BatchGetNamedQueryInput = (
  input: BatchGetNamedQueryInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.NamedQueryIds !== undefined && {
      NamedQueryIds: serializeAws_json1_1NamedQueryIdList(
        input.NamedQueryIds,
        context
      )
    })
  };
};

const serializeAws_json1_1BatchGetQueryExecutionInput = (
  input: BatchGetQueryExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.QueryExecutionIds !== undefined && {
      QueryExecutionIds: serializeAws_json1_1QueryExecutionIdList(
        input.QueryExecutionIds,
        context
      )
    })
  };
};

const serializeAws_json1_1CreateNamedQueryInput = (
  input: CreateNamedQueryInput,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Database !== undefined && { Database: input.Database }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.QueryString !== undefined && { QueryString: input.QueryString }),
    ...(input.WorkGroup !== undefined && { WorkGroup: input.WorkGroup })
  };
};

const serializeAws_json1_1CreateWorkGroupInput = (
  input: CreateWorkGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Configuration !== undefined && {
      Configuration: serializeAws_json1_1WorkGroupConfiguration(
        input.Configuration,
        context
      )
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1DeleteNamedQueryInput = (
  input: DeleteNamedQueryInput,
  context: __SerdeContext
): any => {
  return {
    NamedQueryId: input.NamedQueryId ?? generateIdempotencyToken()
  };
};

const serializeAws_json1_1DeleteWorkGroupInput = (
  input: DeleteWorkGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.RecursiveDeleteOption !== undefined && {
      RecursiveDeleteOption: input.RecursiveDeleteOption
    }),
    ...(input.WorkGroup !== undefined && { WorkGroup: input.WorkGroup })
  };
};

const serializeAws_json1_1EncryptionConfiguration = (
  input: EncryptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionOption !== undefined && {
      EncryptionOption: input.EncryptionOption
    }),
    ...(input.KmsKey !== undefined && { KmsKey: input.KmsKey })
  };
};

const serializeAws_json1_1GetNamedQueryInput = (
  input: GetNamedQueryInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.NamedQueryId !== undefined && {
      NamedQueryId: input.NamedQueryId
    })
  };
};

const serializeAws_json1_1GetQueryExecutionInput = (
  input: GetQueryExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.QueryExecutionId !== undefined && {
      QueryExecutionId: input.QueryExecutionId
    })
  };
};

const serializeAws_json1_1GetQueryResultsInput = (
  input: GetQueryResultsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.QueryExecutionId !== undefined && {
      QueryExecutionId: input.QueryExecutionId
    })
  };
};

const serializeAws_json1_1GetWorkGroupInput = (
  input: GetWorkGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.WorkGroup !== undefined && { WorkGroup: input.WorkGroup })
  };
};

const serializeAws_json1_1ListNamedQueriesInput = (
  input: ListNamedQueriesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.WorkGroup !== undefined && { WorkGroup: input.WorkGroup })
  };
};

const serializeAws_json1_1ListQueryExecutionsInput = (
  input: ListQueryExecutionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.WorkGroup !== undefined && { WorkGroup: input.WorkGroup })
  };
};

const serializeAws_json1_1ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN })
  };
};

const serializeAws_json1_1ListWorkGroupsInput = (
  input: ListWorkGroupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1NamedQueryIdList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1QueryExecutionContext = (
  input: QueryExecutionContext,
  context: __SerdeContext
): any => {
  return {
    ...(input.Database !== undefined && { Database: input.Database })
  };
};

const serializeAws_json1_1QueryExecutionIdList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ResultConfiguration = (
  input: ResultConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionConfiguration !== undefined && {
      EncryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(
        input.EncryptionConfiguration,
        context
      )
    }),
    ...(input.OutputLocation !== undefined && {
      OutputLocation: input.OutputLocation
    })
  };
};

const serializeAws_json1_1ResultConfigurationUpdates = (
  input: ResultConfigurationUpdates,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionConfiguration !== undefined && {
      EncryptionConfiguration: serializeAws_json1_1EncryptionConfiguration(
        input.EncryptionConfiguration,
        context
      )
    }),
    ...(input.OutputLocation !== undefined && {
      OutputLocation: input.OutputLocation
    }),
    ...(input.RemoveEncryptionConfiguration !== undefined && {
      RemoveEncryptionConfiguration: input.RemoveEncryptionConfiguration
    }),
    ...(input.RemoveOutputLocation !== undefined && {
      RemoveOutputLocation: input.RemoveOutputLocation
    })
  };
};

const serializeAws_json1_1StartQueryExecutionInput = (
  input: StartQueryExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.QueryExecutionContext !== undefined && {
      QueryExecutionContext: serializeAws_json1_1QueryExecutionContext(
        input.QueryExecutionContext,
        context
      )
    }),
    ...(input.QueryString !== undefined && { QueryString: input.QueryString }),
    ...(input.ResultConfiguration !== undefined && {
      ResultConfiguration: serializeAws_json1_1ResultConfiguration(
        input.ResultConfiguration,
        context
      )
    }),
    ...(input.WorkGroup !== undefined && { WorkGroup: input.WorkGroup })
  };
};

const serializeAws_json1_1StopQueryExecutionInput = (
  input: StopQueryExecutionInput,
  context: __SerdeContext
): any => {
  return {
    QueryExecutionId: input.QueryExecutionId ?? generateIdempotencyToken()
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1TagKeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceInput = (
  input: TagResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1UntagResourceInput = (
  input: UntagResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined && {
      TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context)
    })
  };
};

const serializeAws_json1_1UpdateWorkGroupInput = (
  input: UpdateWorkGroupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationUpdates !== undefined && {
      ConfigurationUpdates: serializeAws_json1_1WorkGroupConfigurationUpdates(
        input.ConfigurationUpdates,
        context
      )
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.State !== undefined && { State: input.State }),
    ...(input.WorkGroup !== undefined && { WorkGroup: input.WorkGroup })
  };
};

const serializeAws_json1_1WorkGroupConfiguration = (
  input: WorkGroupConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BytesScannedCutoffPerQuery !== undefined && {
      BytesScannedCutoffPerQuery: input.BytesScannedCutoffPerQuery
    }),
    ...(input.EnforceWorkGroupConfiguration !== undefined && {
      EnforceWorkGroupConfiguration: input.EnforceWorkGroupConfiguration
    }),
    ...(input.PublishCloudWatchMetricsEnabled !== undefined && {
      PublishCloudWatchMetricsEnabled: input.PublishCloudWatchMetricsEnabled
    }),
    ...(input.RequesterPaysEnabled !== undefined && {
      RequesterPaysEnabled: input.RequesterPaysEnabled
    }),
    ...(input.ResultConfiguration !== undefined && {
      ResultConfiguration: serializeAws_json1_1ResultConfiguration(
        input.ResultConfiguration,
        context
      )
    })
  };
};

const serializeAws_json1_1WorkGroupConfigurationUpdates = (
  input: WorkGroupConfigurationUpdates,
  context: __SerdeContext
): any => {
  return {
    ...(input.BytesScannedCutoffPerQuery !== undefined && {
      BytesScannedCutoffPerQuery: input.BytesScannedCutoffPerQuery
    }),
    ...(input.EnforceWorkGroupConfiguration !== undefined && {
      EnforceWorkGroupConfiguration: input.EnforceWorkGroupConfiguration
    }),
    ...(input.PublishCloudWatchMetricsEnabled !== undefined && {
      PublishCloudWatchMetricsEnabled: input.PublishCloudWatchMetricsEnabled
    }),
    ...(input.RemoveBytesScannedCutoffPerQuery !== undefined && {
      RemoveBytesScannedCutoffPerQuery: input.RemoveBytesScannedCutoffPerQuery
    }),
    ...(input.RequesterPaysEnabled !== undefined && {
      RequesterPaysEnabled: input.RequesterPaysEnabled
    }),
    ...(input.ResultConfigurationUpdates !== undefined && {
      ResultConfigurationUpdates: serializeAws_json1_1ResultConfigurationUpdates(
        input.ResultConfigurationUpdates,
        context
      )
    })
  };
};

const deserializeAws_json1_1BatchGetNamedQueryOutput = (
  output: any,
  context: __SerdeContext
): BatchGetNamedQueryOutput => {
  return {
    __type: "BatchGetNamedQueryOutput",
    NamedQueries:
      output.NamedQueries !== undefined && output.NamedQueries !== null
        ? deserializeAws_json1_1NamedQueryList(output.NamedQueries, context)
        : undefined,
    UnprocessedNamedQueryIds:
      output.UnprocessedNamedQueryIds !== undefined &&
      output.UnprocessedNamedQueryIds !== null
        ? deserializeAws_json1_1UnprocessedNamedQueryIdList(
            output.UnprocessedNamedQueryIds,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchGetQueryExecutionOutput = (
  output: any,
  context: __SerdeContext
): BatchGetQueryExecutionOutput => {
  return {
    __type: "BatchGetQueryExecutionOutput",
    QueryExecutions:
      output.QueryExecutions !== undefined && output.QueryExecutions !== null
        ? deserializeAws_json1_1QueryExecutionList(
            output.QueryExecutions,
            context
          )
        : undefined,
    UnprocessedQueryExecutionIds:
      output.UnprocessedQueryExecutionIds !== undefined &&
      output.UnprocessedQueryExecutionIds !== null
        ? deserializeAws_json1_1UnprocessedQueryExecutionIdList(
            output.UnprocessedQueryExecutionIds,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ColumnInfo = (
  output: any,
  context: __SerdeContext
): ColumnInfo => {
  return {
    __type: "ColumnInfo",
    CaseSensitive:
      output.CaseSensitive !== undefined && output.CaseSensitive !== null
        ? output.CaseSensitive
        : undefined,
    CatalogName:
      output.CatalogName !== undefined && output.CatalogName !== null
        ? output.CatalogName
        : undefined,
    Label:
      output.Label !== undefined && output.Label !== null
        ? output.Label
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Nullable:
      output.Nullable !== undefined && output.Nullable !== null
        ? output.Nullable
        : undefined,
    Precision:
      output.Precision !== undefined && output.Precision !== null
        ? output.Precision
        : undefined,
    Scale:
      output.Scale !== undefined && output.Scale !== null
        ? output.Scale
        : undefined,
    SchemaName:
      output.SchemaName !== undefined && output.SchemaName !== null
        ? output.SchemaName
        : undefined,
    TableName:
      output.TableName !== undefined && output.TableName !== null
        ? output.TableName
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_json1_1ColumnInfoList = (
  output: any,
  context: __SerdeContext
): ColumnInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ColumnInfo(entry, context)
  );
};

const deserializeAws_json1_1CreateNamedQueryOutput = (
  output: any,
  context: __SerdeContext
): CreateNamedQueryOutput => {
  return {
    __type: "CreateNamedQueryOutput",
    NamedQueryId:
      output.NamedQueryId !== undefined && output.NamedQueryId !== null
        ? output.NamedQueryId
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateWorkGroupOutput = (
  output: any,
  context: __SerdeContext
): CreateWorkGroupOutput => {
  return {
    __type: "CreateWorkGroupOutput"
  } as any;
};

const deserializeAws_json1_1Datum = (
  output: any,
  context: __SerdeContext
): Datum => {
  return {
    __type: "Datum",
    VarCharValue:
      output.VarCharValue !== undefined && output.VarCharValue !== null
        ? output.VarCharValue
        : undefined
  } as any;
};

const deserializeAws_json1_1datumList = (
  output: any,
  context: __SerdeContext
): Datum[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Datum(entry, context)
  );
};

const deserializeAws_json1_1DeleteNamedQueryOutput = (
  output: any,
  context: __SerdeContext
): DeleteNamedQueryOutput => {
  return {
    __type: "DeleteNamedQueryOutput"
  } as any;
};

const deserializeAws_json1_1DeleteWorkGroupOutput = (
  output: any,
  context: __SerdeContext
): DeleteWorkGroupOutput => {
  return {
    __type: "DeleteWorkGroupOutput"
  } as any;
};

const deserializeAws_json1_1EncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionConfiguration => {
  return {
    __type: "EncryptionConfiguration",
    EncryptionOption:
      output.EncryptionOption !== undefined && output.EncryptionOption !== null
        ? output.EncryptionOption
        : undefined,
    KmsKey:
      output.KmsKey !== undefined && output.KmsKey !== null
        ? output.KmsKey
        : undefined
  } as any;
};

const deserializeAws_json1_1GetNamedQueryOutput = (
  output: any,
  context: __SerdeContext
): GetNamedQueryOutput => {
  return {
    __type: "GetNamedQueryOutput",
    NamedQuery:
      output.NamedQuery !== undefined && output.NamedQuery !== null
        ? deserializeAws_json1_1NamedQuery(output.NamedQuery, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetQueryExecutionOutput = (
  output: any,
  context: __SerdeContext
): GetQueryExecutionOutput => {
  return {
    __type: "GetQueryExecutionOutput",
    QueryExecution:
      output.QueryExecution !== undefined && output.QueryExecution !== null
        ? deserializeAws_json1_1QueryExecution(output.QueryExecution, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetQueryResultsOutput = (
  output: any,
  context: __SerdeContext
): GetQueryResultsOutput => {
  return {
    __type: "GetQueryResultsOutput",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    ResultSet:
      output.ResultSet !== undefined && output.ResultSet !== null
        ? deserializeAws_json1_1ResultSet(output.ResultSet, context)
        : undefined,
    UpdateCount:
      output.UpdateCount !== undefined && output.UpdateCount !== null
        ? output.UpdateCount
        : undefined
  } as any;
};

const deserializeAws_json1_1GetWorkGroupOutput = (
  output: any,
  context: __SerdeContext
): GetWorkGroupOutput => {
  return {
    __type: "GetWorkGroupOutput",
    WorkGroup:
      output.WorkGroup !== undefined && output.WorkGroup !== null
        ? deserializeAws_json1_1WorkGroup(output.WorkGroup, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    __type: "InternalServerException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    __type: "InvalidRequestException",
    AthenaErrorCode:
      output.AthenaErrorCode !== undefined && output.AthenaErrorCode !== null
        ? output.AthenaErrorCode
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListNamedQueriesOutput = (
  output: any,
  context: __SerdeContext
): ListNamedQueriesOutput => {
  return {
    __type: "ListNamedQueriesOutput",
    NamedQueryIds:
      output.NamedQueryIds !== undefined && output.NamedQueryIds !== null
        ? deserializeAws_json1_1NamedQueryIdList(output.NamedQueryIds, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListQueryExecutionsOutput = (
  output: any,
  context: __SerdeContext
): ListQueryExecutionsOutput => {
  return {
    __type: "ListQueryExecutionsOutput",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    QueryExecutionIds:
      output.QueryExecutionIds !== undefined &&
      output.QueryExecutionIds !== null
        ? deserializeAws_json1_1QueryExecutionIdList(
            output.QueryExecutionIds,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  return {
    __type: "ListTagsForResourceOutput",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListWorkGroupsOutput = (
  output: any,
  context: __SerdeContext
): ListWorkGroupsOutput => {
  return {
    __type: "ListWorkGroupsOutput",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    WorkGroups:
      output.WorkGroups !== undefined && output.WorkGroups !== null
        ? deserializeAws_json1_1WorkGroupsList(output.WorkGroups, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1NamedQuery = (
  output: any,
  context: __SerdeContext
): NamedQuery => {
  return {
    __type: "NamedQuery",
    Database:
      output.Database !== undefined && output.Database !== null
        ? output.Database
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    NamedQueryId:
      output.NamedQueryId !== undefined && output.NamedQueryId !== null
        ? output.NamedQueryId
        : undefined,
    QueryString:
      output.QueryString !== undefined && output.QueryString !== null
        ? output.QueryString
        : undefined,
    WorkGroup:
      output.WorkGroup !== undefined && output.WorkGroup !== null
        ? output.WorkGroup
        : undefined
  } as any;
};

const deserializeAws_json1_1NamedQueryIdList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1NamedQueryList = (
  output: any,
  context: __SerdeContext
): NamedQuery[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1NamedQuery(entry, context)
  );
};

const deserializeAws_json1_1QueryExecution = (
  output: any,
  context: __SerdeContext
): QueryExecution => {
  return {
    __type: "QueryExecution",
    Query:
      output.Query !== undefined && output.Query !== null
        ? output.Query
        : undefined,
    QueryExecutionContext:
      output.QueryExecutionContext !== undefined &&
      output.QueryExecutionContext !== null
        ? deserializeAws_json1_1QueryExecutionContext(
            output.QueryExecutionContext,
            context
          )
        : undefined,
    QueryExecutionId:
      output.QueryExecutionId !== undefined && output.QueryExecutionId !== null
        ? output.QueryExecutionId
        : undefined,
    ResultConfiguration:
      output.ResultConfiguration !== undefined &&
      output.ResultConfiguration !== null
        ? deserializeAws_json1_1ResultConfiguration(
            output.ResultConfiguration,
            context
          )
        : undefined,
    StatementType:
      output.StatementType !== undefined && output.StatementType !== null
        ? output.StatementType
        : undefined,
    Statistics:
      output.Statistics !== undefined && output.Statistics !== null
        ? deserializeAws_json1_1QueryExecutionStatistics(
            output.Statistics,
            context
          )
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1QueryExecutionStatus(output.Status, context)
        : undefined,
    WorkGroup:
      output.WorkGroup !== undefined && output.WorkGroup !== null
        ? output.WorkGroup
        : undefined
  } as any;
};

const deserializeAws_json1_1QueryExecutionContext = (
  output: any,
  context: __SerdeContext
): QueryExecutionContext => {
  return {
    __type: "QueryExecutionContext",
    Database:
      output.Database !== undefined && output.Database !== null
        ? output.Database
        : undefined
  } as any;
};

const deserializeAws_json1_1QueryExecutionIdList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1QueryExecutionList = (
  output: any,
  context: __SerdeContext
): QueryExecution[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1QueryExecution(entry, context)
  );
};

const deserializeAws_json1_1QueryExecutionStatistics = (
  output: any,
  context: __SerdeContext
): QueryExecutionStatistics => {
  return {
    __type: "QueryExecutionStatistics",
    DataManifestLocation:
      output.DataManifestLocation !== undefined &&
      output.DataManifestLocation !== null
        ? output.DataManifestLocation
        : undefined,
    DataScannedInBytes:
      output.DataScannedInBytes !== undefined &&
      output.DataScannedInBytes !== null
        ? output.DataScannedInBytes
        : undefined,
    EngineExecutionTimeInMillis:
      output.EngineExecutionTimeInMillis !== undefined &&
      output.EngineExecutionTimeInMillis !== null
        ? output.EngineExecutionTimeInMillis
        : undefined,
    QueryPlanningTimeInMillis:
      output.QueryPlanningTimeInMillis !== undefined &&
      output.QueryPlanningTimeInMillis !== null
        ? output.QueryPlanningTimeInMillis
        : undefined,
    QueryQueueTimeInMillis:
      output.QueryQueueTimeInMillis !== undefined &&
      output.QueryQueueTimeInMillis !== null
        ? output.QueryQueueTimeInMillis
        : undefined,
    ServiceProcessingTimeInMillis:
      output.ServiceProcessingTimeInMillis !== undefined &&
      output.ServiceProcessingTimeInMillis !== null
        ? output.ServiceProcessingTimeInMillis
        : undefined,
    TotalExecutionTimeInMillis:
      output.TotalExecutionTimeInMillis !== undefined &&
      output.TotalExecutionTimeInMillis !== null
        ? output.TotalExecutionTimeInMillis
        : undefined
  } as any;
};

const deserializeAws_json1_1QueryExecutionStatus = (
  output: any,
  context: __SerdeContext
): QueryExecutionStatus => {
  return {
    __type: "QueryExecutionStatus",
    CompletionDateTime:
      output.CompletionDateTime !== undefined &&
      output.CompletionDateTime !== null
        ? new Date(Math.round(output.CompletionDateTime * 1000))
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    StateChangeReason:
      output.StateChangeReason !== undefined &&
      output.StateChangeReason !== null
        ? output.StateChangeReason
        : undefined,
    SubmissionDateTime:
      output.SubmissionDateTime !== undefined &&
      output.SubmissionDateTime !== null
        ? new Date(Math.round(output.SubmissionDateTime * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    ResourceName:
      output.ResourceName !== undefined && output.ResourceName !== null
        ? output.ResourceName
        : undefined
  } as any;
};

const deserializeAws_json1_1ResultConfiguration = (
  output: any,
  context: __SerdeContext
): ResultConfiguration => {
  return {
    __type: "ResultConfiguration",
    EncryptionConfiguration:
      output.EncryptionConfiguration !== undefined &&
      output.EncryptionConfiguration !== null
        ? deserializeAws_json1_1EncryptionConfiguration(
            output.EncryptionConfiguration,
            context
          )
        : undefined,
    OutputLocation:
      output.OutputLocation !== undefined && output.OutputLocation !== null
        ? output.OutputLocation
        : undefined
  } as any;
};

const deserializeAws_json1_1ResultSet = (
  output: any,
  context: __SerdeContext
): ResultSet => {
  return {
    __type: "ResultSet",
    ResultSetMetadata:
      output.ResultSetMetadata !== undefined &&
      output.ResultSetMetadata !== null
        ? deserializeAws_json1_1ResultSetMetadata(
            output.ResultSetMetadata,
            context
          )
        : undefined,
    Rows:
      output.Rows !== undefined && output.Rows !== null
        ? deserializeAws_json1_1RowList(output.Rows, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ResultSetMetadata = (
  output: any,
  context: __SerdeContext
): ResultSetMetadata => {
  return {
    __type: "ResultSetMetadata",
    ColumnInfo:
      output.ColumnInfo !== undefined && output.ColumnInfo !== null
        ? deserializeAws_json1_1ColumnInfoList(output.ColumnInfo, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1Row = (
  output: any,
  context: __SerdeContext
): Row => {
  return {
    __type: "Row",
    Data:
      output.Data !== undefined && output.Data !== null
        ? deserializeAws_json1_1datumList(output.Data, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1RowList = (
  output: any,
  context: __SerdeContext
): Row[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Row(entry, context)
  );
};

const deserializeAws_json1_1StartQueryExecutionOutput = (
  output: any,
  context: __SerdeContext
): StartQueryExecutionOutput => {
  return {
    __type: "StartQueryExecutionOutput",
    QueryExecutionId:
      output.QueryExecutionId !== undefined && output.QueryExecutionId !== null
        ? output.QueryExecutionId
        : undefined
  } as any;
};

const deserializeAws_json1_1StopQueryExecutionOutput = (
  output: any,
  context: __SerdeContext
): StopQueryExecutionOutput => {
  return {
    __type: "StopQueryExecutionOutput"
  } as any;
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagResourceOutput = (
  output: any,
  context: __SerdeContext
): TagResourceOutput => {
  return {
    __type: "TagResourceOutput"
  } as any;
};

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  return {
    __type: "TooManyRequestsException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    Reason:
      output.Reason !== undefined && output.Reason !== null
        ? output.Reason
        : undefined
  } as any;
};

const deserializeAws_json1_1UnprocessedNamedQueryId = (
  output: any,
  context: __SerdeContext
): UnprocessedNamedQueryId => {
  return {
    __type: "UnprocessedNamedQueryId",
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    ErrorMessage:
      output.ErrorMessage !== undefined && output.ErrorMessage !== null
        ? output.ErrorMessage
        : undefined,
    NamedQueryId:
      output.NamedQueryId !== undefined && output.NamedQueryId !== null
        ? output.NamedQueryId
        : undefined
  } as any;
};

const deserializeAws_json1_1UnprocessedNamedQueryIdList = (
  output: any,
  context: __SerdeContext
): UnprocessedNamedQueryId[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UnprocessedNamedQueryId(entry, context)
  );
};

const deserializeAws_json1_1UnprocessedQueryExecutionId = (
  output: any,
  context: __SerdeContext
): UnprocessedQueryExecutionId => {
  return {
    __type: "UnprocessedQueryExecutionId",
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    ErrorMessage:
      output.ErrorMessage !== undefined && output.ErrorMessage !== null
        ? output.ErrorMessage
        : undefined,
    QueryExecutionId:
      output.QueryExecutionId !== undefined && output.QueryExecutionId !== null
        ? output.QueryExecutionId
        : undefined
  } as any;
};

const deserializeAws_json1_1UnprocessedQueryExecutionIdList = (
  output: any,
  context: __SerdeContext
): UnprocessedQueryExecutionId[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UnprocessedQueryExecutionId(entry, context)
  );
};

const deserializeAws_json1_1UntagResourceOutput = (
  output: any,
  context: __SerdeContext
): UntagResourceOutput => {
  return {
    __type: "UntagResourceOutput"
  } as any;
};

const deserializeAws_json1_1UpdateWorkGroupOutput = (
  output: any,
  context: __SerdeContext
): UpdateWorkGroupOutput => {
  return {
    __type: "UpdateWorkGroupOutput"
  } as any;
};

const deserializeAws_json1_1WorkGroup = (
  output: any,
  context: __SerdeContext
): WorkGroup => {
  return {
    __type: "WorkGroup",
    Configuration:
      output.Configuration !== undefined && output.Configuration !== null
        ? deserializeAws_json1_1WorkGroupConfiguration(
            output.Configuration,
            context
          )
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined
  } as any;
};

const deserializeAws_json1_1WorkGroupConfiguration = (
  output: any,
  context: __SerdeContext
): WorkGroupConfiguration => {
  return {
    __type: "WorkGroupConfiguration",
    BytesScannedCutoffPerQuery:
      output.BytesScannedCutoffPerQuery !== undefined &&
      output.BytesScannedCutoffPerQuery !== null
        ? output.BytesScannedCutoffPerQuery
        : undefined,
    EnforceWorkGroupConfiguration:
      output.EnforceWorkGroupConfiguration !== undefined &&
      output.EnforceWorkGroupConfiguration !== null
        ? output.EnforceWorkGroupConfiguration
        : undefined,
    PublishCloudWatchMetricsEnabled:
      output.PublishCloudWatchMetricsEnabled !== undefined &&
      output.PublishCloudWatchMetricsEnabled !== null
        ? output.PublishCloudWatchMetricsEnabled
        : undefined,
    RequesterPaysEnabled:
      output.RequesterPaysEnabled !== undefined &&
      output.RequesterPaysEnabled !== null
        ? output.RequesterPaysEnabled
        : undefined,
    ResultConfiguration:
      output.ResultConfiguration !== undefined &&
      output.ResultConfiguration !== null
        ? deserializeAws_json1_1ResultConfiguration(
            output.ResultConfiguration,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1WorkGroupsList = (
  output: any,
  context: __SerdeContext
): WorkGroupSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WorkGroupSummary(entry, context)
  );
};

const deserializeAws_json1_1WorkGroupSummary = (
  output: any,
  context: __SerdeContext
): WorkGroupSummary => {
  return {
    __type: "WorkGroupSummary",
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined
  } as any;
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
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
