import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "../commands/CreateConnectionCommand";
import { CreateHostCommandInput, CreateHostCommandOutput } from "../commands/CreateHostCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "../commands/DeleteConnectionCommand";
import { DeleteHostCommandInput, DeleteHostCommandOutput } from "../commands/DeleteHostCommand";
import { GetConnectionCommandInput, GetConnectionCommandOutput } from "../commands/GetConnectionCommand";
import { GetHostCommandInput, GetHostCommandOutput } from "../commands/GetHostCommand";
import { ListConnectionsCommandInput, ListConnectionsCommandOutput } from "../commands/ListConnectionsCommand";
import { ListHostsCommandInput, ListHostsCommandOutput } from "../commands/ListHostsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateHostCommandInput, UpdateHostCommandOutput } from "../commands/UpdateHostCommand";
import {
  ConflictException,
  Connection,
  CreateConnectionInput,
  CreateConnectionOutput,
  CreateHostInput,
  CreateHostOutput,
  DeleteConnectionInput,
  DeleteConnectionOutput,
  DeleteHostInput,
  DeleteHostOutput,
  GetConnectionInput,
  GetConnectionOutput,
  GetHostInput,
  GetHostOutput,
  Host,
  LimitExceededException,
  ListConnectionsInput,
  ListConnectionsOutput,
  ListHostsInput,
  ListHostsOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ResourceNotFoundException,
  ResourceUnavailableException,
  Tag,
  TagResourceInput,
  TagResourceOutput,
  UnsupportedOperationException,
  UntagResourceInput,
  UntagResourceOutput,
  UpdateHostInput,
  UpdateHostOutput,
  VpcConfiguration,
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

export const serializeAws_json1_0CreateConnectionCommand = async (
  input: CreateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "CodeStar_connections_20191201.CreateConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateConnectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateHostCommand = async (
  input: CreateHostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "CodeStar_connections_20191201.CreateHost",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateHostInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "CodeStar_connections_20191201.DeleteConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteConnectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteHostCommand = async (
  input: DeleteHostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "CodeStar_connections_20191201.DeleteHost",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteHostInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetConnectionCommand = async (
  input: GetConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "CodeStar_connections_20191201.GetConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetConnectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetHostCommand = async (
  input: GetHostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "CodeStar_connections_20191201.GetHost",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetHostInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListConnectionsCommand = async (
  input: ListConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "CodeStar_connections_20191201.ListConnections",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListConnectionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListHostsCommand = async (
  input: ListHostsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "CodeStar_connections_20191201.ListHosts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListHostsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "CodeStar_connections_20191201.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "CodeStar_connections_20191201.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "CodeStar_connections_20191201.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateHostCommand = async (
  input: UpdateHostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "CodeStar_connections_20191201.UpdateHost",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateHostInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0CreateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateConnectionOutput(data, context);
  const response: CreateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.codestarconnections#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.codestarconnections#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_0ResourceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0CreateHostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHostCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateHostCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateHostOutput(data, context);
  const response: CreateHostCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateHostCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHostCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.codestarconnections#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteConnectionOutput(data, context);
  const response: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DeleteHostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHostCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteHostCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteHostOutput(data, context);
  const response: DeleteHostCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteHostCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHostCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.codestarconnections#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_0ResourceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0GetConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetConnectionOutput(data, context);
  const response: GetConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.codestarconnections#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_0ResourceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0GetHostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetHostCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetHostOutput(data, context);
  const response: GetHostCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetHostCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.codestarconnections#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_0ResourceUnavailableExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0ListConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListConnectionsOutput(data, context);
  const response: ListConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_json1_0ListHostsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListHostsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListHostsOutput(data, context);
  const response: ListHostsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListHostsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_json1_0ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TagResourceOutput(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.codestarconnections#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UntagResourceOutput(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0UpdateHostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHostCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateHostCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateHostOutput(data, context);
  const response: UpdateHostCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateHostCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHostCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.codestarconnections#ConflictException":
      response = {
        ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceUnavailableException":
    case "com.amazonaws.codestarconnections#ResourceUnavailableException":
      response = {
        ...(await deserializeAws_json1_0ResourceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.codestarconnections#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_0UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_0ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ConflictException(body, context);
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0ResourceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceUnavailableException(body, context);
  const contents: ResourceUnavailableException = {
    name: "ResourceUnavailableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0UnsupportedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0UnsupportedOperationException(body, context);
  const contents: UnsupportedOperationException = {
    name: "UnsupportedOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_0CreateConnectionInput = (input: CreateConnectionInput, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionName !== undefined &&
      input.ConnectionName !== null && { ConnectionName: input.ConnectionName }),
    ...(input.HostArn !== undefined && input.HostArn !== null && { HostArn: input.HostArn }),
    ...(input.ProviderType !== undefined && input.ProviderType !== null && { ProviderType: input.ProviderType }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0CreateHostInput = (input: CreateHostInput, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.ProviderEndpoint !== undefined &&
      input.ProviderEndpoint !== null && { ProviderEndpoint: input.ProviderEndpoint }),
    ...(input.ProviderType !== undefined && input.ProviderType !== null && { ProviderType: input.ProviderType }),
    ...(input.VpcConfiguration !== undefined &&
      input.VpcConfiguration !== null && {
        VpcConfiguration: serializeAws_json1_0VpcConfiguration(input.VpcConfiguration, context),
      }),
  };
};

const serializeAws_json1_0DeleteConnectionInput = (input: DeleteConnectionInput, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionArn !== undefined && input.ConnectionArn !== null && { ConnectionArn: input.ConnectionArn }),
  };
};

const serializeAws_json1_0DeleteHostInput = (input: DeleteHostInput, context: __SerdeContext): any => {
  return {
    ...(input.HostArn !== undefined && input.HostArn !== null && { HostArn: input.HostArn }),
  };
};

const serializeAws_json1_0GetConnectionInput = (input: GetConnectionInput, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionArn !== undefined && input.ConnectionArn !== null && { ConnectionArn: input.ConnectionArn }),
  };
};

const serializeAws_json1_0GetHostInput = (input: GetHostInput, context: __SerdeContext): any => {
  return {
    ...(input.HostArn !== undefined && input.HostArn !== null && { HostArn: input.HostArn }),
  };
};

const serializeAws_json1_0ListConnectionsInput = (input: ListConnectionsInput, context: __SerdeContext): any => {
  return {
    ...(input.HostArnFilter !== undefined && input.HostArnFilter !== null && { HostArnFilter: input.HostArnFilter }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ProviderTypeFilter !== undefined &&
      input.ProviderTypeFilter !== null && { ProviderTypeFilter: input.ProviderTypeFilter }),
  };
};

const serializeAws_json1_0ListHostsInput = (input: ListHostsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_0SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_0TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_0Tag(entry, context);
    });
};

const serializeAws_json1_0TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_0UpdateHostInput = (input: UpdateHostInput, context: __SerdeContext): any => {
  return {
    ...(input.HostArn !== undefined && input.HostArn !== null && { HostArn: input.HostArn }),
    ...(input.ProviderEndpoint !== undefined &&
      input.ProviderEndpoint !== null && { ProviderEndpoint: input.ProviderEndpoint }),
    ...(input.VpcConfiguration !== undefined &&
      input.VpcConfiguration !== null && {
        VpcConfiguration: serializeAws_json1_0VpcConfiguration(input.VpcConfiguration, context),
      }),
  };
};

const serializeAws_json1_0VpcConfiguration = (input: VpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_json1_0SecurityGroupIds(input.SecurityGroupIds, context),
      }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_json1_0SubnetIds(input.SubnetIds, context) }),
    ...(input.TlsCertificate !== undefined &&
      input.TlsCertificate !== null && { TlsCertificate: input.TlsCertificate }),
    ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
  };
};

const deserializeAws_json1_0ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_0Connection = (output: any, context: __SerdeContext): Connection => {
  return {
    ConnectionArn:
      output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
    ConnectionName:
      output.ConnectionName !== undefined && output.ConnectionName !== null ? output.ConnectionName : undefined,
    ConnectionStatus:
      output.ConnectionStatus !== undefined && output.ConnectionStatus !== null ? output.ConnectionStatus : undefined,
    HostArn: output.HostArn !== undefined && output.HostArn !== null ? output.HostArn : undefined,
    OwnerAccountId:
      output.OwnerAccountId !== undefined && output.OwnerAccountId !== null ? output.OwnerAccountId : undefined,
    ProviderType: output.ProviderType !== undefined && output.ProviderType !== null ? output.ProviderType : undefined,
  } as any;
};

const deserializeAws_json1_0ConnectionList = (output: any, context: __SerdeContext): Connection[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Connection(entry, context);
    });
};

const deserializeAws_json1_0CreateConnectionOutput = (output: any, context: __SerdeContext): CreateConnectionOutput => {
  return {
    ConnectionArn:
      output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_0TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CreateHostOutput = (output: any, context: __SerdeContext): CreateHostOutput => {
  return {
    HostArn: output.HostArn !== undefined && output.HostArn !== null ? output.HostArn : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteConnectionOutput = (output: any, context: __SerdeContext): DeleteConnectionOutput => {
  return {} as any;
};

const deserializeAws_json1_0DeleteHostOutput = (output: any, context: __SerdeContext): DeleteHostOutput => {
  return {} as any;
};

const deserializeAws_json1_0GetConnectionOutput = (output: any, context: __SerdeContext): GetConnectionOutput => {
  return {
    Connection:
      output.Connection !== undefined && output.Connection !== null
        ? deserializeAws_json1_0Connection(output.Connection, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GetHostOutput = (output: any, context: __SerdeContext): GetHostOutput => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ProviderEndpoint:
      output.ProviderEndpoint !== undefined && output.ProviderEndpoint !== null ? output.ProviderEndpoint : undefined,
    ProviderType: output.ProviderType !== undefined && output.ProviderType !== null ? output.ProviderType : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    VpcConfiguration:
      output.VpcConfiguration !== undefined && output.VpcConfiguration !== null
        ? deserializeAws_json1_0VpcConfiguration(output.VpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0Host = (output: any, context: __SerdeContext): Host => {
  return {
    HostArn: output.HostArn !== undefined && output.HostArn !== null ? output.HostArn : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    ProviderEndpoint:
      output.ProviderEndpoint !== undefined && output.ProviderEndpoint !== null ? output.ProviderEndpoint : undefined,
    ProviderType: output.ProviderType !== undefined && output.ProviderType !== null ? output.ProviderType : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    VpcConfiguration:
      output.VpcConfiguration !== undefined && output.VpcConfiguration !== null
        ? deserializeAws_json1_0VpcConfiguration(output.VpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0HostList = (output: any, context: __SerdeContext): Host[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Host(entry, context);
    });
};

const deserializeAws_json1_0LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_0ListConnectionsOutput = (output: any, context: __SerdeContext): ListConnectionsOutput => {
  return {
    Connections:
      output.Connections !== undefined && output.Connections !== null
        ? deserializeAws_json1_0ConnectionList(output.Connections, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_0ListHostsOutput = (output: any, context: __SerdeContext): ListHostsOutput => {
  return {
    Hosts:
      output.Hosts !== undefined && output.Hosts !== null
        ? deserializeAws_json1_0HostList(output.Hosts, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_0ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_0TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_0ResourceUnavailableException = (
  output: any,
  context: __SerdeContext
): ResourceUnavailableException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_0SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_0SubnetIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_0Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_0TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Tag(entry, context);
    });
};

const deserializeAws_json1_0TagResourceOutput = (output: any, context: __SerdeContext): TagResourceOutput => {
  return {} as any;
};

const deserializeAws_json1_0UnsupportedOperationException = (
  output: any,
  context: __SerdeContext
): UnsupportedOperationException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_0UntagResourceOutput = (output: any, context: __SerdeContext): UntagResourceOutput => {
  return {} as any;
};

const deserializeAws_json1_0UpdateHostOutput = (output: any, context: __SerdeContext): UpdateHostOutput => {
  return {} as any;
};

const deserializeAws_json1_0VpcConfiguration = (output: any, context: __SerdeContext): VpcConfiguration => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_json1_0SecurityGroupIds(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_json1_0SubnetIds(output.SubnetIds, context)
        : undefined,
    TlsCertificate:
      output.TlsCertificate !== undefined && output.TlsCertificate !== null ? output.TlsCertificate : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
  } as any;
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
