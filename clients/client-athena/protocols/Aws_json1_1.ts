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

export async function serializeAws_json1_1BatchGetNamedQueryCommand(
  input: BatchGetNamedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonAthena.BatchGetNamedQuery";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetNamedQueryInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1BatchGetQueryExecutionCommand(
  input: BatchGetQueryExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonAthena.BatchGetQueryExecution";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGetQueryExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateNamedQueryCommand(
  input: CreateNamedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonAthena.CreateNamedQuery";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateNamedQueryInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateWorkGroupCommand(
  input: CreateWorkGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonAthena.CreateWorkGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateWorkGroupInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteNamedQueryCommand(
  input: DeleteNamedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonAthena.DeleteNamedQuery";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteNamedQueryInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteWorkGroupCommand(
  input: DeleteWorkGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonAthena.DeleteWorkGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteWorkGroupInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetNamedQueryCommand(
  input: GetNamedQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonAthena.GetNamedQuery";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetNamedQueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetQueryExecutionCommand(
  input: GetQueryExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonAthena.GetQueryExecution";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetQueryExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetQueryResultsCommand(
  input: GetQueryResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonAthena.GetQueryResults";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetQueryResultsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetWorkGroupCommand(
  input: GetWorkGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonAthena.GetWorkGroup";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetWorkGroupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListNamedQueriesCommand(
  input: ListNamedQueriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonAthena.ListNamedQueries";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListNamedQueriesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListQueryExecutionsCommand(
  input: ListQueryExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonAthena.ListQueryExecutions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListQueryExecutionsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonAthena.ListTagsForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListWorkGroupsCommand(
  input: ListWorkGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonAthena.ListWorkGroups";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListWorkGroupsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartQueryExecutionCommand(
  input: StartQueryExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonAthena.StartQueryExecution";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartQueryExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopQueryExecutionCommand(
  input: StopQueryExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonAthena.StopQueryExecution";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopQueryExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonAthena.TagResource";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonAthena.UntagResource";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateWorkGroupCommand(
  input: UpdateWorkGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonAthena.UpdateWorkGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateWorkGroupInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1BatchGetNamedQueryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetNamedQueryCommandOutput> {
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
}

async function deserializeAws_json1_1BatchGetNamedQueryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetNamedQueryCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1BatchGetQueryExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetQueryExecutionCommandOutput> {
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
}

async function deserializeAws_json1_1BatchGetQueryExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetQueryExecutionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateNamedQueryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNamedQueryCommandOutput> {
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
}

async function deserializeAws_json1_1CreateNamedQueryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNamedQueryCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateWorkGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkGroupCommandOutput> {
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
}

async function deserializeAws_json1_1CreateWorkGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteNamedQueryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamedQueryCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteNamedQueryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamedQueryCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteWorkGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkGroupCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteWorkGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetNamedQueryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamedQueryCommandOutput> {
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
}

async function deserializeAws_json1_1GetNamedQueryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamedQueryCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetQueryExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryExecutionCommandOutput> {
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
}

async function deserializeAws_json1_1GetQueryExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryExecutionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetQueryResultsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsCommandOutput> {
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
}

async function deserializeAws_json1_1GetQueryResultsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetWorkGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkGroupCommandOutput> {
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
}

async function deserializeAws_json1_1GetWorkGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListNamedQueriesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamedQueriesCommandOutput> {
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
}

async function deserializeAws_json1_1ListNamedQueriesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamedQueriesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListQueryExecutionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueryExecutionsCommandOutput> {
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
}

async function deserializeAws_json1_1ListQueryExecutionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueryExecutionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
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
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.athena.webservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListWorkGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkGroupsCommandOutput> {
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
}

async function deserializeAws_json1_1ListWorkGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkGroupsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1StartQueryExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryExecutionCommandOutput> {
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
}

async function deserializeAws_json1_1StartQueryExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryExecutionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.athena.webservice#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1StopQueryExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopQueryExecutionCommandOutput> {
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
}

async function deserializeAws_json1_1StopQueryExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopQueryExecutionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
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
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.athena.webservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
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
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.athena.webservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateWorkGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkGroupCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateWorkGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.athena.webservice#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.athena.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

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
  const bodyParams: any = {};
  if (input.NamedQueryIds !== undefined) {
    bodyParams["NamedQueryIds"] = serializeAws_json1_1NamedQueryIdList(
      input.NamedQueryIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1BatchGetQueryExecutionInput = (
  input: BatchGetQueryExecutionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.QueryExecutionIds !== undefined) {
    bodyParams["QueryExecutionIds"] = serializeAws_json1_1QueryExecutionIdList(
      input.QueryExecutionIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateNamedQueryInput = (
  input: CreateNamedQueryInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClientRequestToken === undefined) {
    input.ClientRequestToken = generateIdempotencyToken();
  }
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.Database !== undefined) {
    bodyParams["Database"] = input.Database;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.QueryString !== undefined) {
    bodyParams["QueryString"] = input.QueryString;
  }
  if (input.WorkGroup !== undefined) {
    bodyParams["WorkGroup"] = input.WorkGroup;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateWorkGroupInput = (
  input: CreateWorkGroupInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Configuration !== undefined) {
    bodyParams["Configuration"] = serializeAws_json1_1WorkGroupConfiguration(
      input.Configuration,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteNamedQueryInput = (
  input: DeleteNamedQueryInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.NamedQueryId === undefined) {
    input.NamedQueryId = generateIdempotencyToken();
  }
  if (input.NamedQueryId !== undefined) {
    bodyParams["NamedQueryId"] = input.NamedQueryId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteWorkGroupInput = (
  input: DeleteWorkGroupInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.RecursiveDeleteOption !== undefined) {
    bodyParams["RecursiveDeleteOption"] = input.RecursiveDeleteOption;
  }
  if (input.WorkGroup !== undefined) {
    bodyParams["WorkGroup"] = input.WorkGroup;
  }
  return bodyParams;
};

const serializeAws_json1_1EncryptionConfiguration = (
  input: EncryptionConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EncryptionOption !== undefined) {
    bodyParams["EncryptionOption"] = input.EncryptionOption;
  }
  if (input.KmsKey !== undefined) {
    bodyParams["KmsKey"] = input.KmsKey;
  }
  return bodyParams;
};

const serializeAws_json1_1GetNamedQueryInput = (
  input: GetNamedQueryInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.NamedQueryId !== undefined) {
    bodyParams["NamedQueryId"] = input.NamedQueryId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetQueryExecutionInput = (
  input: GetQueryExecutionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.QueryExecutionId !== undefined) {
    bodyParams["QueryExecutionId"] = input.QueryExecutionId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetQueryResultsInput = (
  input: GetQueryResultsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.QueryExecutionId !== undefined) {
    bodyParams["QueryExecutionId"] = input.QueryExecutionId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetWorkGroupInput = (
  input: GetWorkGroupInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.WorkGroup !== undefined) {
    bodyParams["WorkGroup"] = input.WorkGroup;
  }
  return bodyParams;
};

const serializeAws_json1_1ListNamedQueriesInput = (
  input: ListNamedQueriesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.WorkGroup !== undefined) {
    bodyParams["WorkGroup"] = input.WorkGroup;
  }
  return bodyParams;
};

const serializeAws_json1_1ListQueryExecutionsInput = (
  input: ListQueryExecutionsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.WorkGroup !== undefined) {
    bodyParams["WorkGroup"] = input.WorkGroup;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  return bodyParams;
};

const serializeAws_json1_1ListWorkGroupsInput = (
  input: ListWorkGroupsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1NamedQueryIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1QueryExecutionContext = (
  input: QueryExecutionContext,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Database !== undefined) {
    bodyParams["Database"] = input.Database;
  }
  return bodyParams;
};

const serializeAws_json1_1QueryExecutionIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ResultConfiguration = (
  input: ResultConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EncryptionConfiguration !== undefined) {
    bodyParams[
      "EncryptionConfiguration"
    ] = serializeAws_json1_1EncryptionConfiguration(
      input.EncryptionConfiguration,
      context
    );
  }
  if (input.OutputLocation !== undefined) {
    bodyParams["OutputLocation"] = input.OutputLocation;
  }
  return bodyParams;
};

const serializeAws_json1_1ResultConfigurationUpdates = (
  input: ResultConfigurationUpdates,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EncryptionConfiguration !== undefined) {
    bodyParams[
      "EncryptionConfiguration"
    ] = serializeAws_json1_1EncryptionConfiguration(
      input.EncryptionConfiguration,
      context
    );
  }
  if (input.OutputLocation !== undefined) {
    bodyParams["OutputLocation"] = input.OutputLocation;
  }
  if (input.RemoveEncryptionConfiguration !== undefined) {
    bodyParams["RemoveEncryptionConfiguration"] =
      input.RemoveEncryptionConfiguration;
  }
  if (input.RemoveOutputLocation !== undefined) {
    bodyParams["RemoveOutputLocation"] = input.RemoveOutputLocation;
  }
  return bodyParams;
};

const serializeAws_json1_1StartQueryExecutionInput = (
  input: StartQueryExecutionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClientRequestToken === undefined) {
    input.ClientRequestToken = generateIdempotencyToken();
  }
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.QueryExecutionContext !== undefined) {
    bodyParams[
      "QueryExecutionContext"
    ] = serializeAws_json1_1QueryExecutionContext(
      input.QueryExecutionContext,
      context
    );
  }
  if (input.QueryString !== undefined) {
    bodyParams["QueryString"] = input.QueryString;
  }
  if (input.ResultConfiguration !== undefined) {
    bodyParams["ResultConfiguration"] = serializeAws_json1_1ResultConfiguration(
      input.ResultConfiguration,
      context
    );
  }
  if (input.WorkGroup !== undefined) {
    bodyParams["WorkGroup"] = input.WorkGroup;
  }
  return bodyParams;
};

const serializeAws_json1_1StopQueryExecutionInput = (
  input: StopQueryExecutionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.QueryExecutionId === undefined) {
    input.QueryExecutionId = generateIdempotencyToken();
  }
  if (input.QueryExecutionId !== undefined) {
    bodyParams["QueryExecutionId"] = input.QueryExecutionId;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TagResourceInput = (
  input: TagResourceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UntagResourceInput = (
  input: UntagResourceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(
      input.TagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateWorkGroupInput = (
  input: UpdateWorkGroupInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ConfigurationUpdates !== undefined) {
    bodyParams[
      "ConfigurationUpdates"
    ] = serializeAws_json1_1WorkGroupConfigurationUpdates(
      input.ConfigurationUpdates,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.State !== undefined) {
    bodyParams["State"] = input.State;
  }
  if (input.WorkGroup !== undefined) {
    bodyParams["WorkGroup"] = input.WorkGroup;
  }
  return bodyParams;
};

const serializeAws_json1_1WorkGroupConfiguration = (
  input: WorkGroupConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BytesScannedCutoffPerQuery !== undefined) {
    bodyParams["BytesScannedCutoffPerQuery"] = input.BytesScannedCutoffPerQuery;
  }
  if (input.EnforceWorkGroupConfiguration !== undefined) {
    bodyParams["EnforceWorkGroupConfiguration"] =
      input.EnforceWorkGroupConfiguration;
  }
  if (input.PublishCloudWatchMetricsEnabled !== undefined) {
    bodyParams["PublishCloudWatchMetricsEnabled"] =
      input.PublishCloudWatchMetricsEnabled;
  }
  if (input.RequesterPaysEnabled !== undefined) {
    bodyParams["RequesterPaysEnabled"] = input.RequesterPaysEnabled;
  }
  if (input.ResultConfiguration !== undefined) {
    bodyParams["ResultConfiguration"] = serializeAws_json1_1ResultConfiguration(
      input.ResultConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1WorkGroupConfigurationUpdates = (
  input: WorkGroupConfigurationUpdates,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BytesScannedCutoffPerQuery !== undefined) {
    bodyParams["BytesScannedCutoffPerQuery"] = input.BytesScannedCutoffPerQuery;
  }
  if (input.EnforceWorkGroupConfiguration !== undefined) {
    bodyParams["EnforceWorkGroupConfiguration"] =
      input.EnforceWorkGroupConfiguration;
  }
  if (input.PublishCloudWatchMetricsEnabled !== undefined) {
    bodyParams["PublishCloudWatchMetricsEnabled"] =
      input.PublishCloudWatchMetricsEnabled;
  }
  if (input.RemoveBytesScannedCutoffPerQuery !== undefined) {
    bodyParams["RemoveBytesScannedCutoffPerQuery"] =
      input.RemoveBytesScannedCutoffPerQuery;
  }
  if (input.RequesterPaysEnabled !== undefined) {
    bodyParams["RequesterPaysEnabled"] = input.RequesterPaysEnabled;
  }
  if (input.ResultConfigurationUpdates !== undefined) {
    bodyParams[
      "ResultConfigurationUpdates"
    ] = serializeAws_json1_1ResultConfigurationUpdates(
      input.ResultConfigurationUpdates,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_json1_1BatchGetNamedQueryOutput = (
  output: any,
  context: __SerdeContext
): BatchGetNamedQueryOutput => {
  let contents: any = {
    __type: "BatchGetNamedQueryOutput",
    NamedQueries: undefined,
    UnprocessedNamedQueryIds: undefined
  };
  if (output.NamedQueries !== undefined && output.NamedQueries !== null) {
    contents.NamedQueries = deserializeAws_json1_1NamedQueryList(
      output.NamedQueries,
      context
    );
  }
  if (
    output.UnprocessedNamedQueryIds !== undefined &&
    output.UnprocessedNamedQueryIds !== null
  ) {
    contents.UnprocessedNamedQueryIds = deserializeAws_json1_1UnprocessedNamedQueryIdList(
      output.UnprocessedNamedQueryIds,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchGetQueryExecutionOutput = (
  output: any,
  context: __SerdeContext
): BatchGetQueryExecutionOutput => {
  let contents: any = {
    __type: "BatchGetQueryExecutionOutput",
    QueryExecutions: undefined,
    UnprocessedQueryExecutionIds: undefined
  };
  if (output.QueryExecutions !== undefined && output.QueryExecutions !== null) {
    contents.QueryExecutions = deserializeAws_json1_1QueryExecutionList(
      output.QueryExecutions,
      context
    );
  }
  if (
    output.UnprocessedQueryExecutionIds !== undefined &&
    output.UnprocessedQueryExecutionIds !== null
  ) {
    contents.UnprocessedQueryExecutionIds = deserializeAws_json1_1UnprocessedQueryExecutionIdList(
      output.UnprocessedQueryExecutionIds,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ColumnInfo = (
  output: any,
  context: __SerdeContext
): ColumnInfo => {
  let contents: any = {
    __type: "ColumnInfo",
    CaseSensitive: undefined,
    CatalogName: undefined,
    Label: undefined,
    Name: undefined,
    Nullable: undefined,
    Precision: undefined,
    Scale: undefined,
    SchemaName: undefined,
    TableName: undefined,
    Type: undefined
  };
  if (output.CaseSensitive !== undefined && output.CaseSensitive !== null) {
    contents.CaseSensitive = output.CaseSensitive;
  }
  if (output.CatalogName !== undefined && output.CatalogName !== null) {
    contents.CatalogName = output.CatalogName;
  }
  if (output.Label !== undefined && output.Label !== null) {
    contents.Label = output.Label;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Nullable !== undefined && output.Nullable !== null) {
    contents.Nullable = output.Nullable;
  }
  if (output.Precision !== undefined && output.Precision !== null) {
    contents.Precision = output.Precision;
  }
  if (output.Scale !== undefined && output.Scale !== null) {
    contents.Scale = output.Scale;
  }
  if (output.SchemaName !== undefined && output.SchemaName !== null) {
    contents.SchemaName = output.SchemaName;
  }
  if (output.TableName !== undefined && output.TableName !== null) {
    contents.TableName = output.TableName;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1ColumnInfoList = (
  output: any,
  context: __SerdeContext
): Array<ColumnInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ColumnInfo(entry, context)
  );
};

const deserializeAws_json1_1CreateNamedQueryOutput = (
  output: any,
  context: __SerdeContext
): CreateNamedQueryOutput => {
  let contents: any = {
    __type: "CreateNamedQueryOutput",
    NamedQueryId: undefined
  };
  if (output.NamedQueryId !== undefined && output.NamedQueryId !== null) {
    contents.NamedQueryId = output.NamedQueryId;
  }
  return contents;
};

const deserializeAws_json1_1CreateWorkGroupOutput = (
  output: any,
  context: __SerdeContext
): CreateWorkGroupOutput => {
  let contents: any = {
    __type: "CreateWorkGroupOutput"
  };
  return contents;
};

const deserializeAws_json1_1Datum = (
  output: any,
  context: __SerdeContext
): Datum => {
  let contents: any = {
    __type: "Datum",
    VarCharValue: undefined
  };
  if (output.VarCharValue !== undefined && output.VarCharValue !== null) {
    contents.VarCharValue = output.VarCharValue;
  }
  return contents;
};

const deserializeAws_json1_1DeleteNamedQueryOutput = (
  output: any,
  context: __SerdeContext
): DeleteNamedQueryOutput => {
  let contents: any = {
    __type: "DeleteNamedQueryOutput"
  };
  return contents;
};

const deserializeAws_json1_1DeleteWorkGroupOutput = (
  output: any,
  context: __SerdeContext
): DeleteWorkGroupOutput => {
  let contents: any = {
    __type: "DeleteWorkGroupOutput"
  };
  return contents;
};

const deserializeAws_json1_1EncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionConfiguration => {
  let contents: any = {
    __type: "EncryptionConfiguration",
    EncryptionOption: undefined,
    KmsKey: undefined
  };
  if (
    output.EncryptionOption !== undefined &&
    output.EncryptionOption !== null
  ) {
    contents.EncryptionOption = output.EncryptionOption;
  }
  if (output.KmsKey !== undefined && output.KmsKey !== null) {
    contents.KmsKey = output.KmsKey;
  }
  return contents;
};

const deserializeAws_json1_1GetNamedQueryOutput = (
  output: any,
  context: __SerdeContext
): GetNamedQueryOutput => {
  let contents: any = {
    __type: "GetNamedQueryOutput",
    NamedQuery: undefined
  };
  if (output.NamedQuery !== undefined && output.NamedQuery !== null) {
    contents.NamedQuery = deserializeAws_json1_1NamedQuery(
      output.NamedQuery,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetQueryExecutionOutput = (
  output: any,
  context: __SerdeContext
): GetQueryExecutionOutput => {
  let contents: any = {
    __type: "GetQueryExecutionOutput",
    QueryExecution: undefined
  };
  if (output.QueryExecution !== undefined && output.QueryExecution !== null) {
    contents.QueryExecution = deserializeAws_json1_1QueryExecution(
      output.QueryExecution,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetQueryResultsOutput = (
  output: any,
  context: __SerdeContext
): GetQueryResultsOutput => {
  let contents: any = {
    __type: "GetQueryResultsOutput",
    NextToken: undefined,
    ResultSet: undefined,
    UpdateCount: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.ResultSet !== undefined && output.ResultSet !== null) {
    contents.ResultSet = deserializeAws_json1_1ResultSet(
      output.ResultSet,
      context
    );
  }
  if (output.UpdateCount !== undefined && output.UpdateCount !== null) {
    contents.UpdateCount = output.UpdateCount;
  }
  return contents;
};

const deserializeAws_json1_1GetWorkGroupOutput = (
  output: any,
  context: __SerdeContext
): GetWorkGroupOutput => {
  let contents: any = {
    __type: "GetWorkGroupOutput",
    WorkGroup: undefined
  };
  if (output.WorkGroup !== undefined && output.WorkGroup !== null) {
    contents.WorkGroup = deserializeAws_json1_1WorkGroup(
      output.WorkGroup,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  let contents: any = {
    __type: "InternalServerException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  let contents: any = {
    __type: "InvalidRequestException",
    AthenaErrorCode: undefined,
    Message: undefined
  };
  if (output.AthenaErrorCode !== undefined && output.AthenaErrorCode !== null) {
    contents.AthenaErrorCode = output.AthenaErrorCode;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListNamedQueriesOutput = (
  output: any,
  context: __SerdeContext
): ListNamedQueriesOutput => {
  let contents: any = {
    __type: "ListNamedQueriesOutput",
    NamedQueryIds: undefined,
    NextToken: undefined
  };
  if (output.NamedQueryIds !== undefined && output.NamedQueryIds !== null) {
    contents.NamedQueryIds = deserializeAws_json1_1NamedQueryIdList(
      output.NamedQueryIds,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListQueryExecutionsOutput = (
  output: any,
  context: __SerdeContext
): ListQueryExecutionsOutput => {
  let contents: any = {
    __type: "ListQueryExecutionsOutput",
    NextToken: undefined,
    QueryExecutionIds: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.QueryExecutionIds !== undefined &&
    output.QueryExecutionIds !== null
  ) {
    contents.QueryExecutionIds = deserializeAws_json1_1QueryExecutionIdList(
      output.QueryExecutionIds,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  let contents: any = {
    __type: "ListTagsForResourceOutput",
    NextToken: undefined,
    Tags: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1ListWorkGroupsOutput = (
  output: any,
  context: __SerdeContext
): ListWorkGroupsOutput => {
  let contents: any = {
    __type: "ListWorkGroupsOutput",
    NextToken: undefined,
    WorkGroups: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.WorkGroups !== undefined && output.WorkGroups !== null) {
    contents.WorkGroups = deserializeAws_json1_1WorkGroupsList(
      output.WorkGroups,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1NamedQuery = (
  output: any,
  context: __SerdeContext
): NamedQuery => {
  let contents: any = {
    __type: "NamedQuery",
    Database: undefined,
    Description: undefined,
    Name: undefined,
    NamedQueryId: undefined,
    QueryString: undefined,
    WorkGroup: undefined
  };
  if (output.Database !== undefined && output.Database !== null) {
    contents.Database = output.Database;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.NamedQueryId !== undefined && output.NamedQueryId !== null) {
    contents.NamedQueryId = output.NamedQueryId;
  }
  if (output.QueryString !== undefined && output.QueryString !== null) {
    contents.QueryString = output.QueryString;
  }
  if (output.WorkGroup !== undefined && output.WorkGroup !== null) {
    contents.WorkGroup = output.WorkGroup;
  }
  return contents;
};

const deserializeAws_json1_1NamedQueryIdList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1NamedQueryList = (
  output: any,
  context: __SerdeContext
): Array<NamedQuery> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1NamedQuery(entry, context)
  );
};

const deserializeAws_json1_1QueryExecution = (
  output: any,
  context: __SerdeContext
): QueryExecution => {
  let contents: any = {
    __type: "QueryExecution",
    Query: undefined,
    QueryExecutionContext: undefined,
    QueryExecutionId: undefined,
    ResultConfiguration: undefined,
    StatementType: undefined,
    Statistics: undefined,
    Status: undefined,
    WorkGroup: undefined
  };
  if (output.Query !== undefined && output.Query !== null) {
    contents.Query = output.Query;
  }
  if (
    output.QueryExecutionContext !== undefined &&
    output.QueryExecutionContext !== null
  ) {
    contents.QueryExecutionContext = deserializeAws_json1_1QueryExecutionContext(
      output.QueryExecutionContext,
      context
    );
  }
  if (
    output.QueryExecutionId !== undefined &&
    output.QueryExecutionId !== null
  ) {
    contents.QueryExecutionId = output.QueryExecutionId;
  }
  if (
    output.ResultConfiguration !== undefined &&
    output.ResultConfiguration !== null
  ) {
    contents.ResultConfiguration = deserializeAws_json1_1ResultConfiguration(
      output.ResultConfiguration,
      context
    );
  }
  if (output.StatementType !== undefined && output.StatementType !== null) {
    contents.StatementType = output.StatementType;
  }
  if (output.Statistics !== undefined && output.Statistics !== null) {
    contents.Statistics = deserializeAws_json1_1QueryExecutionStatistics(
      output.Statistics,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = deserializeAws_json1_1QueryExecutionStatus(
      output.Status,
      context
    );
  }
  if (output.WorkGroup !== undefined && output.WorkGroup !== null) {
    contents.WorkGroup = output.WorkGroup;
  }
  return contents;
};

const deserializeAws_json1_1QueryExecutionContext = (
  output: any,
  context: __SerdeContext
): QueryExecutionContext => {
  let contents: any = {
    __type: "QueryExecutionContext",
    Database: undefined
  };
  if (output.Database !== undefined && output.Database !== null) {
    contents.Database = output.Database;
  }
  return contents;
};

const deserializeAws_json1_1QueryExecutionIdList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1QueryExecutionList = (
  output: any,
  context: __SerdeContext
): Array<QueryExecution> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1QueryExecution(entry, context)
  );
};

const deserializeAws_json1_1QueryExecutionStatistics = (
  output: any,
  context: __SerdeContext
): QueryExecutionStatistics => {
  let contents: any = {
    __type: "QueryExecutionStatistics",
    DataManifestLocation: undefined,
    DataScannedInBytes: undefined,
    EngineExecutionTimeInMillis: undefined,
    QueryPlanningTimeInMillis: undefined,
    QueryQueueTimeInMillis: undefined,
    ServiceProcessingTimeInMillis: undefined,
    TotalExecutionTimeInMillis: undefined
  };
  if (
    output.DataManifestLocation !== undefined &&
    output.DataManifestLocation !== null
  ) {
    contents.DataManifestLocation = output.DataManifestLocation;
  }
  if (
    output.DataScannedInBytes !== undefined &&
    output.DataScannedInBytes !== null
  ) {
    contents.DataScannedInBytes = output.DataScannedInBytes;
  }
  if (
    output.EngineExecutionTimeInMillis !== undefined &&
    output.EngineExecutionTimeInMillis !== null
  ) {
    contents.EngineExecutionTimeInMillis = output.EngineExecutionTimeInMillis;
  }
  if (
    output.QueryPlanningTimeInMillis !== undefined &&
    output.QueryPlanningTimeInMillis !== null
  ) {
    contents.QueryPlanningTimeInMillis = output.QueryPlanningTimeInMillis;
  }
  if (
    output.QueryQueueTimeInMillis !== undefined &&
    output.QueryQueueTimeInMillis !== null
  ) {
    contents.QueryQueueTimeInMillis = output.QueryQueueTimeInMillis;
  }
  if (
    output.ServiceProcessingTimeInMillis !== undefined &&
    output.ServiceProcessingTimeInMillis !== null
  ) {
    contents.ServiceProcessingTimeInMillis =
      output.ServiceProcessingTimeInMillis;
  }
  if (
    output.TotalExecutionTimeInMillis !== undefined &&
    output.TotalExecutionTimeInMillis !== null
  ) {
    contents.TotalExecutionTimeInMillis = output.TotalExecutionTimeInMillis;
  }
  return contents;
};

const deserializeAws_json1_1QueryExecutionStatus = (
  output: any,
  context: __SerdeContext
): QueryExecutionStatus => {
  let contents: any = {
    __type: "QueryExecutionStatus",
    CompletionDateTime: undefined,
    State: undefined,
    StateChangeReason: undefined,
    SubmissionDateTime: undefined
  };
  if (
    output.CompletionDateTime !== undefined &&
    output.CompletionDateTime !== null
  ) {
    contents.CompletionDateTime = new Date(
      Math.round(output.CompletionDateTime * 1000)
    );
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (
    output.StateChangeReason !== undefined &&
    output.StateChangeReason !== null
  ) {
    contents.StateChangeReason = output.StateChangeReason;
  }
  if (
    output.SubmissionDateTime !== undefined &&
    output.SubmissionDateTime !== null
  ) {
    contents.SubmissionDateTime = new Date(
      Math.round(output.SubmissionDateTime * 1000)
    );
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Message: undefined,
    ResourceName: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.ResourceName !== undefined && output.ResourceName !== null) {
    contents.ResourceName = output.ResourceName;
  }
  return contents;
};

const deserializeAws_json1_1ResultConfiguration = (
  output: any,
  context: __SerdeContext
): ResultConfiguration => {
  let contents: any = {
    __type: "ResultConfiguration",
    EncryptionConfiguration: undefined,
    OutputLocation: undefined
  };
  if (
    output.EncryptionConfiguration !== undefined &&
    output.EncryptionConfiguration !== null
  ) {
    contents.EncryptionConfiguration = deserializeAws_json1_1EncryptionConfiguration(
      output.EncryptionConfiguration,
      context
    );
  }
  if (output.OutputLocation !== undefined && output.OutputLocation !== null) {
    contents.OutputLocation = output.OutputLocation;
  }
  return contents;
};

const deserializeAws_json1_1ResultSet = (
  output: any,
  context: __SerdeContext
): ResultSet => {
  let contents: any = {
    __type: "ResultSet",
    ResultSetMetadata: undefined,
    Rows: undefined
  };
  if (
    output.ResultSetMetadata !== undefined &&
    output.ResultSetMetadata !== null
  ) {
    contents.ResultSetMetadata = deserializeAws_json1_1ResultSetMetadata(
      output.ResultSetMetadata,
      context
    );
  }
  if (output.Rows !== undefined && output.Rows !== null) {
    contents.Rows = deserializeAws_json1_1RowList(output.Rows, context);
  }
  return contents;
};

const deserializeAws_json1_1ResultSetMetadata = (
  output: any,
  context: __SerdeContext
): ResultSetMetadata => {
  let contents: any = {
    __type: "ResultSetMetadata",
    ColumnInfo: undefined
  };
  if (output.ColumnInfo !== undefined && output.ColumnInfo !== null) {
    contents.ColumnInfo = deserializeAws_json1_1ColumnInfoList(
      output.ColumnInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Row = (
  output: any,
  context: __SerdeContext
): Row => {
  let contents: any = {
    __type: "Row",
    Data: undefined
  };
  if (output.Data !== undefined && output.Data !== null) {
    contents.Data = deserializeAws_json1_1datumList(output.Data, context);
  }
  return contents;
};

const deserializeAws_json1_1RowList = (
  output: any,
  context: __SerdeContext
): Array<Row> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Row(entry, context)
  );
};

const deserializeAws_json1_1StartQueryExecutionOutput = (
  output: any,
  context: __SerdeContext
): StartQueryExecutionOutput => {
  let contents: any = {
    __type: "StartQueryExecutionOutput",
    QueryExecutionId: undefined
  };
  if (
    output.QueryExecutionId !== undefined &&
    output.QueryExecutionId !== null
  ) {
    contents.QueryExecutionId = output.QueryExecutionId;
  }
  return contents;
};

const deserializeAws_json1_1StopQueryExecutionOutput = (
  output: any,
  context: __SerdeContext
): StopQueryExecutionOutput => {
  let contents: any = {
    __type: "StopQueryExecutionOutput"
  };
  return contents;
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagResourceOutput = (
  output: any,
  context: __SerdeContext
): TagResourceOutput => {
  let contents: any = {
    __type: "TagResourceOutput"
  };
  return contents;
};

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  let contents: any = {
    __type: "TooManyRequestsException",
    Message: undefined,
    Reason: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.Reason !== undefined && output.Reason !== null) {
    contents.Reason = output.Reason;
  }
  return contents;
};

const deserializeAws_json1_1UnprocessedNamedQueryId = (
  output: any,
  context: __SerdeContext
): UnprocessedNamedQueryId => {
  let contents: any = {
    __type: "UnprocessedNamedQueryId",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    NamedQueryId: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.NamedQueryId !== undefined && output.NamedQueryId !== null) {
    contents.NamedQueryId = output.NamedQueryId;
  }
  return contents;
};

const deserializeAws_json1_1UnprocessedNamedQueryIdList = (
  output: any,
  context: __SerdeContext
): Array<UnprocessedNamedQueryId> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UnprocessedNamedQueryId(entry, context)
  );
};

const deserializeAws_json1_1UnprocessedQueryExecutionId = (
  output: any,
  context: __SerdeContext
): UnprocessedQueryExecutionId => {
  let contents: any = {
    __type: "UnprocessedQueryExecutionId",
    ErrorCode: undefined,
    ErrorMessage: undefined,
    QueryExecutionId: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (
    output.QueryExecutionId !== undefined &&
    output.QueryExecutionId !== null
  ) {
    contents.QueryExecutionId = output.QueryExecutionId;
  }
  return contents;
};

const deserializeAws_json1_1UnprocessedQueryExecutionIdList = (
  output: any,
  context: __SerdeContext
): Array<UnprocessedQueryExecutionId> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UnprocessedQueryExecutionId(entry, context)
  );
};

const deserializeAws_json1_1UntagResourceOutput = (
  output: any,
  context: __SerdeContext
): UntagResourceOutput => {
  let contents: any = {
    __type: "UntagResourceOutput"
  };
  return contents;
};

const deserializeAws_json1_1UpdateWorkGroupOutput = (
  output: any,
  context: __SerdeContext
): UpdateWorkGroupOutput => {
  let contents: any = {
    __type: "UpdateWorkGroupOutput"
  };
  return contents;
};

const deserializeAws_json1_1WorkGroup = (
  output: any,
  context: __SerdeContext
): WorkGroup => {
  let contents: any = {
    __type: "WorkGroup",
    Configuration: undefined,
    CreationTime: undefined,
    Description: undefined,
    Name: undefined,
    State: undefined
  };
  if (output.Configuration !== undefined && output.Configuration !== null) {
    contents.Configuration = deserializeAws_json1_1WorkGroupConfiguration(
      output.Configuration,
      context
    );
  }
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_json1_1WorkGroupConfiguration = (
  output: any,
  context: __SerdeContext
): WorkGroupConfiguration => {
  let contents: any = {
    __type: "WorkGroupConfiguration",
    BytesScannedCutoffPerQuery: undefined,
    EnforceWorkGroupConfiguration: undefined,
    PublishCloudWatchMetricsEnabled: undefined,
    RequesterPaysEnabled: undefined,
    ResultConfiguration: undefined
  };
  if (
    output.BytesScannedCutoffPerQuery !== undefined &&
    output.BytesScannedCutoffPerQuery !== null
  ) {
    contents.BytesScannedCutoffPerQuery = output.BytesScannedCutoffPerQuery;
  }
  if (
    output.EnforceWorkGroupConfiguration !== undefined &&
    output.EnforceWorkGroupConfiguration !== null
  ) {
    contents.EnforceWorkGroupConfiguration =
      output.EnforceWorkGroupConfiguration;
  }
  if (
    output.PublishCloudWatchMetricsEnabled !== undefined &&
    output.PublishCloudWatchMetricsEnabled !== null
  ) {
    contents.PublishCloudWatchMetricsEnabled =
      output.PublishCloudWatchMetricsEnabled;
  }
  if (
    output.RequesterPaysEnabled !== undefined &&
    output.RequesterPaysEnabled !== null
  ) {
    contents.RequesterPaysEnabled = output.RequesterPaysEnabled;
  }
  if (
    output.ResultConfiguration !== undefined &&
    output.ResultConfiguration !== null
  ) {
    contents.ResultConfiguration = deserializeAws_json1_1ResultConfiguration(
      output.ResultConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1WorkGroupSummary = (
  output: any,
  context: __SerdeContext
): WorkGroupSummary => {
  let contents: any = {
    __type: "WorkGroupSummary",
    CreationTime: undefined,
    Description: undefined,
    Name: undefined,
    State: undefined
  };
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_json1_1WorkGroupsList = (
  output: any,
  context: __SerdeContext
): Array<WorkGroupSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WorkGroupSummary(entry, context)
  );
};

const deserializeAws_json1_1datumList = (
  output: any,
  context: __SerdeContext
): Array<Datum> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Datum(entry, context)
  );
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

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
