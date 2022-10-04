// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateEnvironmentEC2CommandInput,
  CreateEnvironmentEC2CommandOutput,
} from "../commands/CreateEnvironmentEC2Command";
import {
  CreateEnvironmentMembershipCommandInput,
  CreateEnvironmentMembershipCommandOutput,
} from "../commands/CreateEnvironmentMembershipCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "../commands/DeleteEnvironmentCommand";
import {
  DeleteEnvironmentMembershipCommandInput,
  DeleteEnvironmentMembershipCommandOutput,
} from "../commands/DeleteEnvironmentMembershipCommand";
import {
  DescribeEnvironmentMembershipsCommandInput,
  DescribeEnvironmentMembershipsCommandOutput,
} from "../commands/DescribeEnvironmentMembershipsCommand";
import {
  DescribeEnvironmentsCommandInput,
  DescribeEnvironmentsCommandOutput,
} from "../commands/DescribeEnvironmentsCommand";
import {
  DescribeEnvironmentStatusCommandInput,
  DescribeEnvironmentStatusCommandOutput,
} from "../commands/DescribeEnvironmentStatusCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "../commands/ListEnvironmentsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "../commands/UpdateEnvironmentCommand";
import {
  UpdateEnvironmentMembershipCommandInput,
  UpdateEnvironmentMembershipCommandOutput,
} from "../commands/UpdateEnvironmentMembershipCommand";
import { Cloud9ServiceException as __BaseException } from "../models/Cloud9ServiceException";
import {
  BadRequestException,
  ConcurrentAccessException,
  ConflictException,
  CreateEnvironmentEC2Request,
  CreateEnvironmentEC2Result,
  CreateEnvironmentMembershipRequest,
  CreateEnvironmentMembershipResult,
  DeleteEnvironmentMembershipRequest,
  DeleteEnvironmentMembershipResult,
  DeleteEnvironmentRequest,
  DeleteEnvironmentResult,
  DescribeEnvironmentMembershipsRequest,
  DescribeEnvironmentMembershipsResult,
  DescribeEnvironmentsRequest,
  DescribeEnvironmentsResult,
  DescribeEnvironmentStatusRequest,
  DescribeEnvironmentStatusResult,
  Environment,
  EnvironmentLifecycle,
  EnvironmentMember,
  ForbiddenException,
  InternalServerErrorException,
  LimitExceededException,
  ListEnvironmentsRequest,
  ListEnvironmentsResult,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  NotFoundException,
  Permissions,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TooManyRequestsException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateEnvironmentMembershipRequest,
  UpdateEnvironmentMembershipResult,
  UpdateEnvironmentRequest,
  UpdateEnvironmentResult,
} from "../models/models_0";

export const serializeAws_json1_1CreateEnvironmentEC2Command = async (
  input: CreateEnvironmentEC2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateEnvironmentEC2Request(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateEnvironmentMembershipCommand = async (
  input: CreateEnvironmentMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateEnvironmentMembershipRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEnvironmentCommand = async (
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.DeleteEnvironment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEnvironmentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEnvironmentMembershipCommand = async (
  input: DeleteEnvironmentMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEnvironmentMembershipRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEnvironmentMembershipsCommand = async (
  input: DescribeEnvironmentMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEnvironmentMembershipsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEnvironmentsCommand = async (
  input: DescribeEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.DescribeEnvironments",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEnvironmentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEnvironmentStatusCommand = async (
  input: DescribeEnvironmentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEnvironmentStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEnvironmentsCommand = async (
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.ListEnvironments",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEnvironmentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateEnvironmentCommand = async (
  input: UpdateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.UpdateEnvironment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateEnvironmentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateEnvironmentMembershipCommand = async (
  input: UpdateEnvironmentMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateEnvironmentMembershipRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateEnvironmentEC2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentEC2CommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateEnvironmentEC2CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEnvironmentEC2Result(data, context);
  const response: CreateEnvironmentEC2CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateEnvironmentEC2CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentEC2CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      throw await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      throw await deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateEnvironmentMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentMembershipCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateEnvironmentMembershipCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEnvironmentMembershipResult(data, context);
  const response: CreateEnvironmentMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateEnvironmentMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      throw await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      throw await deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteEnvironmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEnvironmentResult(data, context);
  const response: DeleteEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      throw await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      throw await deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteEnvironmentMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentMembershipCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteEnvironmentMembershipCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEnvironmentMembershipResult(data, context);
  const response: DeleteEnvironmentMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEnvironmentMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      throw await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      throw await deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeEnvironmentMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentMembershipsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEnvironmentMembershipsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEnvironmentMembershipsResult(data, context);
  const response: DescribeEnvironmentMembershipsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEnvironmentMembershipsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentMembershipsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      throw await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      throw await deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEnvironmentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEnvironmentsResult(data, context);
  const response: DescribeEnvironmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEnvironmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      throw await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      throw await deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeEnvironmentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEnvironmentStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEnvironmentStatusResult(data, context);
  const response: DescribeEnvironmentStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEnvironmentStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      throw await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      throw await deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEnvironmentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEnvironmentsResult(data, context);
  const response: ListEnvironmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEnvironmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      throw await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      throw await deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      throw await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      throw await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentAccessException":
    case "com.amazonaws.cloud9#ConcurrentAccessException":
      throw await deserializeAws_json1_1ConcurrentAccessExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      throw await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
    case "ConcurrentAccessException":
    case "com.amazonaws.cloud9#ConcurrentAccessException":
      throw await deserializeAws_json1_1ConcurrentAccessExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateEnvironmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateEnvironmentResult(data, context);
  const response: UpdateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      throw await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      throw await deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateEnvironmentMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentMembershipCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateEnvironmentMembershipCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateEnvironmentMembershipResult(data, context);
  const response: UpdateEnvironmentMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateEnvironmentMembershipCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentMembershipCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      throw await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      throw await deserializeAws_json1_1ForbiddenExceptionResponse(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await deserializeAws_json1_1InternalServerErrorExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BadRequestException(body, context);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConcurrentAccessExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentAccessException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentAccessException(body, context);
  const exception = new ConcurrentAccessException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ForbiddenException(body, context);
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerErrorException(body, context);
  const exception = new InternalServerErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotFoundException(body, context);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyRequestsException(body, context);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1BoundedEnvironmentIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CreateEnvironmentEC2Request = (
  input: CreateEnvironmentEC2Request,
  context: __SerdeContext
): any => {
  return {
    ...(input.automaticStopTimeMinutes != null && { automaticStopTimeMinutes: input.automaticStopTimeMinutes }),
    ...(input.clientRequestToken != null && { clientRequestToken: input.clientRequestToken }),
    ...(input.connectionType != null && { connectionType: input.connectionType }),
    ...(input.description != null && { description: input.description }),
    ...(input.dryRun != null && { dryRun: input.dryRun }),
    ...(input.imageId != null && { imageId: input.imageId }),
    ...(input.instanceType != null && { instanceType: input.instanceType }),
    ...(input.name != null && { name: input.name }),
    ...(input.ownerArn != null && { ownerArn: input.ownerArn }),
    ...(input.subnetId != null && { subnetId: input.subnetId }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateEnvironmentMembershipRequest = (
  input: CreateEnvironmentMembershipRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentId != null && { environmentId: input.environmentId }),
    ...(input.permissions != null && { permissions: input.permissions }),
    ...(input.userArn != null && { userArn: input.userArn }),
  };
};

const serializeAws_json1_1DeleteEnvironmentMembershipRequest = (
  input: DeleteEnvironmentMembershipRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentId != null && { environmentId: input.environmentId }),
    ...(input.userArn != null && { userArn: input.userArn }),
  };
};

const serializeAws_json1_1DeleteEnvironmentRequest = (
  input: DeleteEnvironmentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentId != null && { environmentId: input.environmentId }),
  };
};

const serializeAws_json1_1DescribeEnvironmentMembershipsRequest = (
  input: DescribeEnvironmentMembershipsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentId != null && { environmentId: input.environmentId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.permissions != null && { permissions: serializeAws_json1_1PermissionsList(input.permissions, context) }),
    ...(input.userArn != null && { userArn: input.userArn }),
  };
};

const serializeAws_json1_1DescribeEnvironmentsRequest = (
  input: DescribeEnvironmentsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentIds != null && {
      environmentIds: serializeAws_json1_1BoundedEnvironmentIdList(input.environmentIds, context),
    }),
  };
};

const serializeAws_json1_1DescribeEnvironmentStatusRequest = (
  input: DescribeEnvironmentStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentId != null && { environmentId: input.environmentId }),
  };
};

const serializeAws_json1_1ListEnvironmentsRequest = (input: ListEnvironmentsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1PermissionsList = (input: (Permissions | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateEnvironmentMembershipRequest = (
  input: UpdateEnvironmentMembershipRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentId != null && { environmentId: input.environmentId }),
    ...(input.permissions != null && { permissions: input.permissions }),
    ...(input.userArn != null && { userArn: input.userArn }),
  };
};

const serializeAws_json1_1UpdateEnvironmentRequest = (
  input: UpdateEnvironmentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.environmentId != null && { environmentId: input.environmentId }),
    ...(input.managedCredentialsAction != null && { managedCredentialsAction: input.managedCredentialsAction }),
    ...(input.name != null && { name: input.name }),
  };
};

const deserializeAws_json1_1BadRequestException = (output: any, context: __SerdeContext): BadRequestException => {
  return {
    className: __expectString(output.className),
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ConcurrentAccessException = (
  output: any,
  context: __SerdeContext
): ConcurrentAccessException => {
  return {
    className: __expectString(output.className),
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    className: __expectString(output.className),
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CreateEnvironmentEC2Result = (
  output: any,
  context: __SerdeContext
): CreateEnvironmentEC2Result => {
  return {
    environmentId: __expectString(output.environmentId),
  } as any;
};

const deserializeAws_json1_1CreateEnvironmentMembershipResult = (
  output: any,
  context: __SerdeContext
): CreateEnvironmentMembershipResult => {
  return {
    membership:
      output.membership != null ? deserializeAws_json1_1EnvironmentMember(output.membership, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteEnvironmentMembershipResult = (
  output: any,
  context: __SerdeContext
): DeleteEnvironmentMembershipResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteEnvironmentResult = (
  output: any,
  context: __SerdeContext
): DeleteEnvironmentResult => {
  return {} as any;
};

const deserializeAws_json1_1DescribeEnvironmentMembershipsResult = (
  output: any,
  context: __SerdeContext
): DescribeEnvironmentMembershipsResult => {
  return {
    memberships:
      output.memberships != null
        ? deserializeAws_json1_1EnvironmentMembersList(output.memberships, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeEnvironmentsResult = (
  output: any,
  context: __SerdeContext
): DescribeEnvironmentsResult => {
  return {
    environments:
      output.environments != null ? deserializeAws_json1_1EnvironmentList(output.environments, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEnvironmentStatusResult = (
  output: any,
  context: __SerdeContext
): DescribeEnvironmentStatusResult => {
  return {
    message: __expectString(output.message),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1Environment = (output: any, context: __SerdeContext): Environment => {
  return {
    arn: __expectString(output.arn),
    connectionType: __expectString(output.connectionType),
    description: __expectString(output.description),
    id: __expectString(output.id),
    lifecycle:
      output.lifecycle != null ? deserializeAws_json1_1EnvironmentLifecycle(output.lifecycle, context) : undefined,
    managedCredentialsStatus: __expectString(output.managedCredentialsStatus),
    name: __expectString(output.name),
    ownerArn: __expectString(output.ownerArn),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1EnvironmentIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1EnvironmentLifecycle = (output: any, context: __SerdeContext): EnvironmentLifecycle => {
  return {
    failureResource: __expectString(output.failureResource),
    reason: __expectString(output.reason),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1EnvironmentList = (output: any, context: __SerdeContext): Environment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Environment(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EnvironmentMember = (output: any, context: __SerdeContext): EnvironmentMember => {
  return {
    environmentId: __expectString(output.environmentId),
    lastAccess:
      output.lastAccess != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastAccess))) : undefined,
    permissions: __expectString(output.permissions),
    userArn: __expectString(output.userArn),
    userId: __expectString(output.userId),
  } as any;
};

const deserializeAws_json1_1EnvironmentMembersList = (output: any, context: __SerdeContext): EnvironmentMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EnvironmentMember(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ForbiddenException = (output: any, context: __SerdeContext): ForbiddenException => {
  return {
    className: __expectString(output.className),
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InternalServerErrorException = (
  output: any,
  context: __SerdeContext
): InternalServerErrorException => {
  return {
    className: __expectString(output.className),
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    className: __expectString(output.className),
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListEnvironmentsResult = (output: any, context: __SerdeContext): ListEnvironmentsResult => {
  return {
    environmentIds:
      output.environmentIds != null
        ? deserializeAws_json1_1EnvironmentIdList(output.environmentIds, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    className: __expectString(output.className),
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  return {
    className: __expectString(output.className),
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateEnvironmentMembershipResult = (
  output: any,
  context: __SerdeContext
): UpdateEnvironmentMembershipResult => {
  return {
    membership:
      output.membership != null ? deserializeAws_json1_1EnvironmentMember(output.membership, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateEnvironmentResult = (
  output: any,
  context: __SerdeContext
): UpdateEnvironmentResult => {
  return {} as any;
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
