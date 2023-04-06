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

/**
 * serializeAws_json1_0CreateConnectionCommand
 */
export const se_CreateConnectionCommand = async (
  input: CreateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CodeStar_connections_20191201.CreateConnection",
  };
  let body: any;
  body = JSON.stringify(se_CreateConnectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateHostCommand
 */
export const se_CreateHostCommand = async (
  input: CreateHostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CodeStar_connections_20191201.CreateHost",
  };
  let body: any;
  body = JSON.stringify(se_CreateHostInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteConnectionCommand
 */
export const se_DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CodeStar_connections_20191201.DeleteConnection",
  };
  let body: any;
  body = JSON.stringify(se_DeleteConnectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteHostCommand
 */
export const se_DeleteHostCommand = async (
  input: DeleteHostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CodeStar_connections_20191201.DeleteHost",
  };
  let body: any;
  body = JSON.stringify(se_DeleteHostInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetConnectionCommand
 */
export const se_GetConnectionCommand = async (
  input: GetConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CodeStar_connections_20191201.GetConnection",
  };
  let body: any;
  body = JSON.stringify(se_GetConnectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetHostCommand
 */
export const se_GetHostCommand = async (
  input: GetHostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CodeStar_connections_20191201.GetHost",
  };
  let body: any;
  body = JSON.stringify(se_GetHostInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListConnectionsCommand
 */
export const se_ListConnectionsCommand = async (
  input: ListConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CodeStar_connections_20191201.ListConnections",
  };
  let body: any;
  body = JSON.stringify(se_ListConnectionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListHostsCommand
 */
export const se_ListHostsCommand = async (
  input: ListHostsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CodeStar_connections_20191201.ListHosts",
  };
  let body: any;
  body = JSON.stringify(se_ListHostsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CodeStar_connections_20191201.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CodeStar_connections_20191201.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CodeStar_connections_20191201.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateHostCommand
 */
export const se_UpdateHostCommand = async (
  input: UpdateHostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "CodeStar_connections_20191201.UpdateHost",
  };
  let body: any;
  body = JSON.stringify(se_UpdateHostInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0CreateConnectionCommand
 */
export const de_CreateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateConnectionOutput(data, context);
  const response: CreateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateConnectionCommandError
 */
const de_CreateConnectionCommandError = async (
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
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.codestarconnections#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0CreateHostCommand
 */
export const de_CreateHostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHostCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateHostCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateHostOutput(data, context);
  const response: CreateHostCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateHostCommandError
 */
const de_CreateHostCommandError = async (
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
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0DeleteConnectionCommand
 */
export const de_DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteConnectionOutput(data, context);
  const response: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteConnectionCommandError
 */
const de_DeleteConnectionCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0DeleteHostCommand
 */
export const de_DeleteHostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHostCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteHostCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteHostOutput(data, context);
  const response: DeleteHostCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteHostCommandError
 */
const de_DeleteHostCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.codestarconnections#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0GetConnectionCommand
 */
export const de_GetConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetConnectionOutput(data, context);
  const response: GetConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetConnectionCommandError
 */
const de_GetConnectionCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.codestarconnections#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0GetHostCommand
 */
export const de_GetHostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHostCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetHostCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetHostOutput(data, context);
  const response: GetHostCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetHostCommandError
 */
const de_GetHostCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.codestarconnections#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0ListConnectionsCommand
 */
export const de_ListConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListConnectionsOutput(data, context);
  const response: ListConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListConnectionsCommandError
 */
const de_ListConnectionsCommandError = async (
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

/**
 * deserializeAws_json1_0ListHostsCommand
 */
export const de_ListHostsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListHostsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListHostsOutput(data, context);
  const response: ListHostsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListHostsCommandError
 */
const de_ListHostsCommandError = async (
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

/**
 * deserializeAws_json1_0ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceOutput(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0TagResourceCommandError
 */
const de_TagResourceCommandError = async (
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
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceOutput(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0UpdateHostCommand
 */
export const de_UpdateHostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHostCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateHostCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateHostOutput(data, context);
  const response: UpdateHostCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateHostCommandError
 */
const de_UpdateHostCommandError = async (
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
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarconnections#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceUnavailableException":
    case "com.amazonaws.codestarconnections#ResourceUnavailableException":
      throw await de_ResourceUnavailableExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.codestarconnections#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_0ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceUnavailableExceptionRes
 */
const de_ResourceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceUnavailableException(body, context);
  const exception = new ResourceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0UnsupportedOperationExceptionRes
 */
const de_UnsupportedOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedOperationException(body, context);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_0CreateConnectionInput
 */
const se_CreateConnectionInput = (input: CreateConnectionInput, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionName != null && { ConnectionName: input.ConnectionName }),
    ...(input.HostArn != null && { HostArn: input.HostArn }),
    ...(input.ProviderType != null && { ProviderType: input.ProviderType }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateHostInput
 */
const se_CreateHostInput = (input: CreateHostInput, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ProviderEndpoint != null && { ProviderEndpoint: input.ProviderEndpoint }),
    ...(input.ProviderType != null && { ProviderType: input.ProviderType }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VpcConfiguration != null && { VpcConfiguration: se_VpcConfiguration(input.VpcConfiguration, context) }),
  };
};

/**
 * serializeAws_json1_0DeleteConnectionInput
 */
const se_DeleteConnectionInput = (input: DeleteConnectionInput, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionArn != null && { ConnectionArn: input.ConnectionArn }),
  };
};

/**
 * serializeAws_json1_0DeleteHostInput
 */
const se_DeleteHostInput = (input: DeleteHostInput, context: __SerdeContext): any => {
  return {
    ...(input.HostArn != null && { HostArn: input.HostArn }),
  };
};

/**
 * serializeAws_json1_0GetConnectionInput
 */
const se_GetConnectionInput = (input: GetConnectionInput, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionArn != null && { ConnectionArn: input.ConnectionArn }),
  };
};

/**
 * serializeAws_json1_0GetHostInput
 */
const se_GetHostInput = (input: GetHostInput, context: __SerdeContext): any => {
  return {
    ...(input.HostArn != null && { HostArn: input.HostArn }),
  };
};

/**
 * serializeAws_json1_0ListConnectionsInput
 */
const se_ListConnectionsInput = (input: ListConnectionsInput, context: __SerdeContext): any => {
  return {
    ...(input.HostArnFilter != null && { HostArnFilter: input.HostArnFilter }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ProviderTypeFilter != null && { ProviderTypeFilter: input.ProviderTypeFilter }),
  };
};

/**
 * serializeAws_json1_0ListHostsInput
 */
const se_ListHostsInput = (input: ListHostsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0ListTagsForResourceInput
 */
const se_ListTagsForResourceInput = (input: ListTagsForResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_0SecurityGroupIds
 */
const se_SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0SubnetIds
 */
const se_SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_0TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_0TagResourceInput
 */
const se_TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0UntagResourceInput
 */
const se_UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_0UpdateHostInput
 */
const se_UpdateHostInput = (input: UpdateHostInput, context: __SerdeContext): any => {
  return {
    ...(input.HostArn != null && { HostArn: input.HostArn }),
    ...(input.ProviderEndpoint != null && { ProviderEndpoint: input.ProviderEndpoint }),
    ...(input.VpcConfiguration != null && { VpcConfiguration: se_VpcConfiguration(input.VpcConfiguration, context) }),
  };
};

/**
 * serializeAws_json1_0VpcConfiguration
 */
const se_VpcConfiguration = (input: VpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds != null && { SecurityGroupIds: se_SecurityGroupIds(input.SecurityGroupIds, context) }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIds(input.SubnetIds, context) }),
    ...(input.TlsCertificate != null && { TlsCertificate: input.TlsCertificate }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

/**
 * deserializeAws_json1_0ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0Connection
 */
const de_Connection = (output: any, context: __SerdeContext): Connection => {
  return {
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionName: __expectString(output.ConnectionName),
    ConnectionStatus: __expectString(output.ConnectionStatus),
    HostArn: __expectString(output.HostArn),
    OwnerAccountId: __expectString(output.OwnerAccountId),
    ProviderType: __expectString(output.ProviderType),
  } as any;
};

/**
 * deserializeAws_json1_0ConnectionList
 */
const de_ConnectionList = (output: any, context: __SerdeContext): Connection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Connection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0CreateConnectionOutput
 */
const de_CreateConnectionOutput = (output: any, context: __SerdeContext): CreateConnectionOutput => {
  return {
    ConnectionArn: __expectString(output.ConnectionArn),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateHostOutput
 */
const de_CreateHostOutput = (output: any, context: __SerdeContext): CreateHostOutput => {
  return {
    HostArn: __expectString(output.HostArn),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteConnectionOutput
 */
const de_DeleteConnectionOutput = (output: any, context: __SerdeContext): DeleteConnectionOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_0DeleteHostOutput
 */
const de_DeleteHostOutput = (output: any, context: __SerdeContext): DeleteHostOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_0GetConnectionOutput
 */
const de_GetConnectionOutput = (output: any, context: __SerdeContext): GetConnectionOutput => {
  return {
    Connection: output.Connection != null ? de_Connection(output.Connection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetHostOutput
 */
const de_GetHostOutput = (output: any, context: __SerdeContext): GetHostOutput => {
  return {
    Name: __expectString(output.Name),
    ProviderEndpoint: __expectString(output.ProviderEndpoint),
    ProviderType: __expectString(output.ProviderType),
    Status: __expectString(output.Status),
    VpcConfiguration:
      output.VpcConfiguration != null ? de_VpcConfiguration(output.VpcConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0Host
 */
const de_Host = (output: any, context: __SerdeContext): Host => {
  return {
    HostArn: __expectString(output.HostArn),
    Name: __expectString(output.Name),
    ProviderEndpoint: __expectString(output.ProviderEndpoint),
    ProviderType: __expectString(output.ProviderType),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    VpcConfiguration:
      output.VpcConfiguration != null ? de_VpcConfiguration(output.VpcConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0HostList
 */
const de_HostList = (output: any, context: __SerdeContext): Host[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Host(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ListConnectionsOutput
 */
const de_ListConnectionsOutput = (output: any, context: __SerdeContext): ListConnectionsOutput => {
  return {
    Connections: output.Connections != null ? de_ConnectionList(output.Connections, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListHostsOutput
 */
const de_ListHostsOutput = (output: any, context: __SerdeContext): ListHostsOutput => {
  return {
    Hosts: output.Hosts != null ? de_HostList(output.Hosts, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListTagsForResourceOutput
 */
const de_ListTagsForResourceOutput = (output: any, context: __SerdeContext): ListTagsForResourceOutput => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceUnavailableException
 */
const de_ResourceUnavailableException = (output: any, context: __SerdeContext): ResourceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0SecurityGroupIds
 */
const de_SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_0SubnetIds
 */
const de_SubnetIds = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_0Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_0TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0TagResourceOutput
 */
const de_TagResourceOutput = (output: any, context: __SerdeContext): TagResourceOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_0UnsupportedOperationException
 */
const de_UnsupportedOperationException = (output: any, context: __SerdeContext): UnsupportedOperationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0UntagResourceOutput
 */
const de_UntagResourceOutput = (output: any, context: __SerdeContext): UntagResourceOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_0UpdateHostOutput
 */
const de_UpdateHostOutput = (output: any, context: __SerdeContext): UpdateHostOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_0VpcConfiguration
 */
const de_VpcConfiguration = (output: any, context: __SerdeContext): VpcConfiguration => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds != null ? de_SecurityGroupIds(output.SecurityGroupIds, context) : undefined,
    SubnetIds: output.SubnetIds != null ? de_SubnetIds(output.SubnetIds, context) : undefined,
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
