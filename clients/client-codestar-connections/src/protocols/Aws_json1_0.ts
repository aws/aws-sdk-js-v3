// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectString as __expectString,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
import { CodeStarConnectionsServiceException as __BaseException } from "../models/CodeStarConnectionsServiceException";
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

export const serializeAws_json1_0CreateConnectionCommand = async (
  input: CreateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CodeStar_connections_20191201.CreateConnection",
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
    "x-amz-target": "CodeStar_connections_20191201.CreateHost",
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
    "x-amz-target": "CodeStar_connections_20191201.DeleteConnection",
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
    "x-amz-target": "CodeStar_connections_20191201.DeleteHost",
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
    "x-amz-target": "CodeStar_connections_20191201.GetConnection",
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
    "x-amz-target": "CodeStar_connections_20191201.GetHost",
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
    "x-amz-target": "CodeStar_connections_20191201.ListConnections",
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
    "x-amz-target": "CodeStar_connections_20191201.ListHosts",
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
    "x-amz-target": "CodeStar_connections_20191201.ListTagsForResource",
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
    "x-amz-target": "CodeStar_connections_20191201.TagResource",
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
    "x-amz-target": "CodeStar_connections_20191201.UntagResource",
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
    "x-amz-target": "CodeStar_connections_20191201.UpdateHost",
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.codestarconnections#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.codestarconnections#ResourceUnavailableException":
      throw await deserializeAws_json1_0ResourceUnavailableExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.codestarconnections#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.codestarconnections#ResourceUnavailableException":
      throw await deserializeAws_json1_0ResourceUnavailableExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.codestarconnections#ResourceUnavailableException":
      throw await deserializeAws_json1_0ResourceUnavailableExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.codestarconnections#ResourceUnavailableException":
      throw await deserializeAws_json1_0ResourceUnavailableExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.codestarconnections#LimitExceededException":
      throw await deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.codestarconnections#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.codestarconnections#ResourceUnavailableException":
      throw await deserializeAws_json1_0ResourceUnavailableExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.codestarconnections#UnsupportedOperationException":
      throw await deserializeAws_json1_0UnsupportedOperationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_0ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ResourceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceUnavailableException(body, context);
  const exception = new ResourceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0UnsupportedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0UnsupportedOperationException(body, context);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_0CreateConnectionInput = (input: CreateConnectionInput, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionName != null && { ConnectionName: input.ConnectionName }),
    ...(input.HostArn != null && { HostArn: input.HostArn }),
    ...(input.ProviderType != null && { ProviderType: input.ProviderType }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0CreateHostInput = (input: CreateHostInput, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ProviderEndpoint != null && { ProviderEndpoint: input.ProviderEndpoint }),
    ...(input.ProviderType != null && { ProviderType: input.ProviderType }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: serializeAws_json1_0VpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

const serializeAws_json1_0DeleteConnectionInput = (input: DeleteConnectionInput, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionArn != null && { ConnectionArn: input.ConnectionArn }),
  };
};

const serializeAws_json1_0DeleteHostInput = (input: DeleteHostInput, context: __SerdeContext): any => {
  return {
    ...(input.HostArn != null && { HostArn: input.HostArn }),
  };
};

const serializeAws_json1_0GetConnectionInput = (input: GetConnectionInput, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionArn != null && { ConnectionArn: input.ConnectionArn }),
  };
};

const serializeAws_json1_0GetHostInput = (input: GetHostInput, context: __SerdeContext): any => {
  return {
    ...(input.HostArn != null && { HostArn: input.HostArn }),
  };
};

const serializeAws_json1_0ListConnectionsInput = (input: ListConnectionsInput, context: __SerdeContext): any => {
  return {
    ...(input.HostArnFilter != null && { HostArnFilter: input.HostArnFilter }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ProviderTypeFilter != null && { ProviderTypeFilter: input.ProviderTypeFilter }),
  };
};

const serializeAws_json1_0ListHostsInput = (input: ListHostsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_0SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_0TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0Tag(entry, context);
    });
};

const serializeAws_json1_0TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_0UpdateHostInput = (input: UpdateHostInput, context: __SerdeContext): any => {
  return {
    ...(input.HostArn != null && { HostArn: input.HostArn }),
    ...(input.ProviderEndpoint != null && { ProviderEndpoint: input.ProviderEndpoint }),
    ...(input.VpcConfiguration != null && {
      VpcConfiguration: serializeAws_json1_0VpcConfiguration(input.VpcConfiguration, context),
    }),
  };
};

const serializeAws_json1_0VpcConfiguration = (input: VpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_json1_0SecurityGroupIds(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_json1_0SubnetIds(input.SubnetIds, context) }),
    ...(input.TlsCertificate != null && { TlsCertificate: input.TlsCertificate }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

const deserializeAws_json1_0ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0Connection = (output: any, context: __SerdeContext): Connection => {
  return {
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionName: __expectString(output.ConnectionName),
    ConnectionStatus: __expectString(output.ConnectionStatus),
    HostArn: __expectString(output.HostArn),
    OwnerAccountId: __expectString(output.OwnerAccountId),
    ProviderType: __expectString(output.ProviderType),
  } as any;
};

const deserializeAws_json1_0ConnectionList = (output: any, context: __SerdeContext): Connection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Connection(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0CreateConnectionOutput = (output: any, context: __SerdeContext): CreateConnectionOutput => {
  return {
    ConnectionArn: __expectString(output.ConnectionArn),
    Tags: output.Tags != null ? deserializeAws_json1_0TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_0CreateHostOutput = (output: any, context: __SerdeContext): CreateHostOutput => {
  return {
    HostArn: __expectString(output.HostArn),
    Tags: output.Tags != null ? deserializeAws_json1_0TagList(output.Tags, context) : undefined,
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
    Connection: output.Connection != null ? deserializeAws_json1_0Connection(output.Connection, context) : undefined,
  } as any;
};

const deserializeAws_json1_0GetHostOutput = (output: any, context: __SerdeContext): GetHostOutput => {
  return {
    Name: __expectString(output.Name),
    ProviderEndpoint: __expectString(output.ProviderEndpoint),
    ProviderType: __expectString(output.ProviderType),
    Status: __expectString(output.Status),
    VpcConfiguration:
      output.VpcConfiguration != null
        ? deserializeAws_json1_0VpcConfiguration(output.VpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0Host = (output: any, context: __SerdeContext): Host => {
  return {
    HostArn: __expectString(output.HostArn),
    Name: __expectString(output.Name),
    ProviderEndpoint: __expectString(output.ProviderEndpoint),
    ProviderType: __expectString(output.ProviderType),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    VpcConfiguration:
      output.VpcConfiguration != null
        ? deserializeAws_json1_0VpcConfiguration(output.VpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0HostList = (output: any, context: __SerdeContext): Host[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Host(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ListConnectionsOutput = (output: any, context: __SerdeContext): ListConnectionsOutput => {
  return {
    Connections:
      output.Connections != null ? deserializeAws_json1_0ConnectionList(output.Connections, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListHostsOutput = (output: any, context: __SerdeContext): ListHostsOutput => {
  return {
    Hosts: output.Hosts != null ? deserializeAws_json1_0HostList(output.Hosts, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_0TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ResourceUnavailableException = (
  output: any,
  context: __SerdeContext
): ResourceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0SubnetIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_0TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0TagResourceOutput = (output: any, context: __SerdeContext): TagResourceOutput => {
  return {} as any;
};

const deserializeAws_json1_0UnsupportedOperationException = (
  output: any,
  context: __SerdeContext
): UnsupportedOperationException => {
  return {
    Message: __expectString(output.Message),
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
      output.SecurityGroupIds != null
        ? deserializeAws_json1_0SecurityGroupIds(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds: output.SubnetIds != null ? deserializeAws_json1_0SubnetIds(output.SubnetIds, context) : undefined,
    TlsCertificate: __expectString(output.TlsCertificate),
    VpcId: __expectString(output.VpcId),
  } as any;
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
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
