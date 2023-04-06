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

/**
 * serializeAws_json1_1CreateEnvironmentEC2Command
 */
export const se_CreateEnvironmentEC2Command = async (
  input: CreateEnvironmentEC2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2",
  };
  let body: any;
  body = JSON.stringify(se_CreateEnvironmentEC2Request(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEnvironmentMembershipCommand
 */
export const se_CreateEnvironmentMembershipCommand = async (
  input: CreateEnvironmentMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership",
  };
  let body: any;
  body = JSON.stringify(se_CreateEnvironmentMembershipRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEnvironmentCommand
 */
export const se_DeleteEnvironmentCommand = async (
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.DeleteEnvironment",
  };
  let body: any;
  body = JSON.stringify(se_DeleteEnvironmentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEnvironmentMembershipCommand
 */
export const se_DeleteEnvironmentMembershipCommand = async (
  input: DeleteEnvironmentMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership",
  };
  let body: any;
  body = JSON.stringify(se_DeleteEnvironmentMembershipRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEnvironmentMembershipsCommand
 */
export const se_DescribeEnvironmentMembershipsCommand = async (
  input: DescribeEnvironmentMembershipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships",
  };
  let body: any;
  body = JSON.stringify(se_DescribeEnvironmentMembershipsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEnvironmentsCommand
 */
export const se_DescribeEnvironmentsCommand = async (
  input: DescribeEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.DescribeEnvironments",
  };
  let body: any;
  body = JSON.stringify(se_DescribeEnvironmentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEnvironmentStatusCommand
 */
export const se_DescribeEnvironmentStatusCommand = async (
  input: DescribeEnvironmentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus",
  };
  let body: any;
  body = JSON.stringify(se_DescribeEnvironmentStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEnvironmentsCommand
 */
export const se_ListEnvironmentsCommand = async (
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.ListEnvironments",
  };
  let body: any;
  body = JSON.stringify(se_ListEnvironmentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEnvironmentCommand
 */
export const se_UpdateEnvironmentCommand = async (
  input: UpdateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.UpdateEnvironment",
  };
  let body: any;
  body = JSON.stringify(se_UpdateEnvironmentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEnvironmentMembershipCommand
 */
export const se_UpdateEnvironmentMembershipCommand = async (
  input: UpdateEnvironmentMembershipCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership",
  };
  let body: any;
  body = JSON.stringify(se_UpdateEnvironmentMembershipRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateEnvironmentEC2Command
 */
export const de_CreateEnvironmentEC2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentEC2CommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEnvironmentEC2CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEnvironmentEC2Result(data, context);
  const response: CreateEnvironmentEC2CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateEnvironmentEC2CommandError
 */
const de_CreateEnvironmentEC2CommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateEnvironmentMembershipCommand
 */
export const de_CreateEnvironmentMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentMembershipCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEnvironmentMembershipCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEnvironmentMembershipResult(data, context);
  const response: CreateEnvironmentMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateEnvironmentMembershipCommandError
 */
const de_CreateEnvironmentMembershipCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteEnvironmentCommand
 */
export const de_DeleteEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEnvironmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEnvironmentResult(data, context);
  const response: DeleteEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteEnvironmentCommandError
 */
const de_DeleteEnvironmentCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteEnvironmentMembershipCommand
 */
export const de_DeleteEnvironmentMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentMembershipCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEnvironmentMembershipCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEnvironmentMembershipResult(data, context);
  const response: DeleteEnvironmentMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteEnvironmentMembershipCommandError
 */
const de_DeleteEnvironmentMembershipCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeEnvironmentMembershipsCommand
 */
export const de_DescribeEnvironmentMembershipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentMembershipsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEnvironmentMembershipsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEnvironmentMembershipsResult(data, context);
  const response: DescribeEnvironmentMembershipsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEnvironmentMembershipsCommandError
 */
const de_DescribeEnvironmentMembershipsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeEnvironmentsCommand
 */
export const de_DescribeEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEnvironmentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEnvironmentsResult(data, context);
  const response: DescribeEnvironmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEnvironmentsCommandError
 */
const de_DescribeEnvironmentsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeEnvironmentStatusCommand
 */
export const de_DescribeEnvironmentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEnvironmentStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEnvironmentStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEnvironmentStatusResult(data, context);
  const response: DescribeEnvironmentStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEnvironmentStatusCommandError
 */
const de_DescribeEnvironmentStatusCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListEnvironmentsCommand
 */
export const de_ListEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEnvironmentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEnvironmentsResult(data, context);
  const response: ListEnvironmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListEnvironmentsCommandError
 */
const de_ListEnvironmentsCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTagsForResourceCommand
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
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
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
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1TagResourceCommand
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
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
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
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentAccessException":
    case "com.amazonaws.cloud9#ConcurrentAccessException":
      throw await de_ConcurrentAccessExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UntagResourceCommand
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
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
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
    case "BadRequestException":
    case "com.amazonaws.cloud9#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConcurrentAccessException":
    case "com.amazonaws.cloud9#ConcurrentAccessException":
      throw await de_ConcurrentAccessExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateEnvironmentCommand
 */
export const de_UpdateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEnvironmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateEnvironmentResult(data, context);
  const response: UpdateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateEnvironmentCommandError
 */
const de_UpdateEnvironmentCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateEnvironmentMembershipCommand
 */
export const de_UpdateEnvironmentMembershipCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentMembershipCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEnvironmentMembershipCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateEnvironmentMembershipResult(data, context);
  const response: UpdateEnvironmentMembershipCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateEnvironmentMembershipCommandError
 */
const de_UpdateEnvironmentMembershipCommandError = async (
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
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloud9#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cloud9#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.cloud9#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloud9#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.cloud9#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cloud9#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BadRequestException(body, context);
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConcurrentAccessExceptionRes
 */
const de_ConcurrentAccessExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentAccessException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConcurrentAccessException(body, context);
  const exception = new ConcurrentAccessException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConflictExceptionRes
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
 * deserializeAws_json1_1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ForbiddenException(body, context);
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerErrorExceptionRes
 */
const de_InternalServerErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerErrorException(body, context);
  const exception = new InternalServerErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
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
 * deserializeAws_json1_1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NotFoundException(body, context);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyRequestsException(body, context);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1BoundedEnvironmentIdList
 */
const se_BoundedEnvironmentIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CreateEnvironmentEC2Request
 */
const se_CreateEnvironmentEC2Request = (input: CreateEnvironmentEC2Request, context: __SerdeContext): any => {
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
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateEnvironmentMembershipRequest
 */
const se_CreateEnvironmentMembershipRequest = (
  input: CreateEnvironmentMembershipRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentId != null && { environmentId: input.environmentId }),
    ...(input.permissions != null && { permissions: input.permissions }),
    ...(input.userArn != null && { userArn: input.userArn }),
  };
};

/**
 * serializeAws_json1_1DeleteEnvironmentMembershipRequest
 */
const se_DeleteEnvironmentMembershipRequest = (
  input: DeleteEnvironmentMembershipRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentId != null && { environmentId: input.environmentId }),
    ...(input.userArn != null && { userArn: input.userArn }),
  };
};

/**
 * serializeAws_json1_1DeleteEnvironmentRequest
 */
const se_DeleteEnvironmentRequest = (input: DeleteEnvironmentRequest, context: __SerdeContext): any => {
  return {
    ...(input.environmentId != null && { environmentId: input.environmentId }),
  };
};

/**
 * serializeAws_json1_1DescribeEnvironmentMembershipsRequest
 */
const se_DescribeEnvironmentMembershipsRequest = (
  input: DescribeEnvironmentMembershipsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentId != null && { environmentId: input.environmentId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.permissions != null && { permissions: se_PermissionsList(input.permissions, context) }),
    ...(input.userArn != null && { userArn: input.userArn }),
  };
};

/**
 * serializeAws_json1_1DescribeEnvironmentsRequest
 */
const se_DescribeEnvironmentsRequest = (input: DescribeEnvironmentsRequest, context: __SerdeContext): any => {
  return {
    ...(input.environmentIds != null && { environmentIds: se_BoundedEnvironmentIdList(input.environmentIds, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeEnvironmentStatusRequest
 */
const se_DescribeEnvironmentStatusRequest = (input: DescribeEnvironmentStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.environmentId != null && { environmentId: input.environmentId }),
  };
};

/**
 * serializeAws_json1_1ListEnvironmentsRequest
 */
const se_ListEnvironmentsRequest = (input: ListEnvironmentsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_1PermissionsList
 */
const se_PermissionsList = (input: (Permissions | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateEnvironmentMembershipRequest
 */
const se_UpdateEnvironmentMembershipRequest = (
  input: UpdateEnvironmentMembershipRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentId != null && { environmentId: input.environmentId }),
    ...(input.permissions != null && { permissions: input.permissions }),
    ...(input.userArn != null && { userArn: input.userArn }),
  };
};

/**
 * serializeAws_json1_1UpdateEnvironmentRequest
 */
const se_UpdateEnvironmentRequest = (input: UpdateEnvironmentRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.environmentId != null && { environmentId: input.environmentId }),
    ...(input.managedCredentialsAction != null && { managedCredentialsAction: input.managedCredentialsAction }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * deserializeAws_json1_1BadRequestException
 */
const de_BadRequestException = (output: any, context: __SerdeContext): BadRequestException => {
  return {
    className: __expectString(output.className),
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ConcurrentAccessException
 */
const de_ConcurrentAccessException = (output: any, context: __SerdeContext): ConcurrentAccessException => {
  return {
    className: __expectString(output.className),
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    className: __expectString(output.className),
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CreateEnvironmentEC2Result
 */
const de_CreateEnvironmentEC2Result = (output: any, context: __SerdeContext): CreateEnvironmentEC2Result => {
  return {
    environmentId: __expectString(output.environmentId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateEnvironmentMembershipResult
 */
const de_CreateEnvironmentMembershipResult = (
  output: any,
  context: __SerdeContext
): CreateEnvironmentMembershipResult => {
  return {
    membership: output.membership != null ? de_EnvironmentMember(output.membership, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteEnvironmentMembershipResult
 */
const de_DeleteEnvironmentMembershipResult = (
  output: any,
  context: __SerdeContext
): DeleteEnvironmentMembershipResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteEnvironmentResult
 */
const de_DeleteEnvironmentResult = (output: any, context: __SerdeContext): DeleteEnvironmentResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeEnvironmentMembershipsResult
 */
const de_DescribeEnvironmentMembershipsResult = (
  output: any,
  context: __SerdeContext
): DescribeEnvironmentMembershipsResult => {
  return {
    memberships: output.memberships != null ? de_EnvironmentMembersList(output.memberships, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEnvironmentsResult
 */
const de_DescribeEnvironmentsResult = (output: any, context: __SerdeContext): DescribeEnvironmentsResult => {
  return {
    environments: output.environments != null ? de_EnvironmentList(output.environments, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEnvironmentStatusResult
 */
const de_DescribeEnvironmentStatusResult = (output: any, context: __SerdeContext): DescribeEnvironmentStatusResult => {
  return {
    message: __expectString(output.message),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1Environment
 */
const de_Environment = (output: any, context: __SerdeContext): Environment => {
  return {
    arn: __expectString(output.arn),
    connectionType: __expectString(output.connectionType),
    description: __expectString(output.description),
    id: __expectString(output.id),
    lifecycle: output.lifecycle != null ? de_EnvironmentLifecycle(output.lifecycle, context) : undefined,
    managedCredentialsStatus: __expectString(output.managedCredentialsStatus),
    name: __expectString(output.name),
    ownerArn: __expectString(output.ownerArn),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1EnvironmentIdList
 */
const de_EnvironmentIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1EnvironmentLifecycle
 */
const de_EnvironmentLifecycle = (output: any, context: __SerdeContext): EnvironmentLifecycle => {
  return {
    failureResource: __expectString(output.failureResource),
    reason: __expectString(output.reason),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1EnvironmentList
 */
const de_EnvironmentList = (output: any, context: __SerdeContext): Environment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Environment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EnvironmentMember
 */
const de_EnvironmentMember = (output: any, context: __SerdeContext): EnvironmentMember => {
  return {
    environmentId: __expectString(output.environmentId),
    lastAccess:
      output.lastAccess != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastAccess))) : undefined,
    permissions: __expectString(output.permissions),
    userArn: __expectString(output.userArn),
    userId: __expectString(output.userId),
  } as any;
};

/**
 * deserializeAws_json1_1EnvironmentMembersList
 */
const de_EnvironmentMembersList = (output: any, context: __SerdeContext): EnvironmentMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EnvironmentMember(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ForbiddenException
 */
const de_ForbiddenException = (output: any, context: __SerdeContext): ForbiddenException => {
  return {
    className: __expectString(output.className),
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InternalServerErrorException
 */
const de_InternalServerErrorException = (output: any, context: __SerdeContext): InternalServerErrorException => {
  return {
    className: __expectString(output.className),
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    className: __expectString(output.className),
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListEnvironmentsResult
 */
const de_ListEnvironmentsResult = (output: any, context: __SerdeContext): ListEnvironmentsResult => {
  return {
    environmentIds: output.environmentIds != null ? de_EnvironmentIdList(output.environmentIds, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1NotFoundException
 */
const de_NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    className: __expectString(output.className),
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
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
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TooManyRequestsException
 */
const de_TooManyRequestsException = (output: any, context: __SerdeContext): TooManyRequestsException => {
  return {
    className: __expectString(output.className),
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateEnvironmentMembershipResult
 */
const de_UpdateEnvironmentMembershipResult = (
  output: any,
  context: __SerdeContext
): UpdateEnvironmentMembershipResult => {
  return {
    membership: output.membership != null ? de_EnvironmentMember(output.membership, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateEnvironmentResult
 */
const de_UpdateEnvironmentResult = (output: any, context: __SerdeContext): UpdateEnvironmentResult => {
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
