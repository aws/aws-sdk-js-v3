// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
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
import { v4 as generateIdempotencyToken } from "uuid";

import {
  CancelResourceRequestCommandInput,
  CancelResourceRequestCommandOutput,
} from "../commands/CancelResourceRequestCommand";
import { CreateResourceCommandInput, CreateResourceCommandOutput } from "../commands/CreateResourceCommand";
import { DeleteResourceCommandInput, DeleteResourceCommandOutput } from "../commands/DeleteResourceCommand";
import { GetResourceCommandInput, GetResourceCommandOutput } from "../commands/GetResourceCommand";
import {
  GetResourceRequestStatusCommandInput,
  GetResourceRequestStatusCommandOutput,
} from "../commands/GetResourceRequestStatusCommand";
import {
  ListResourceRequestsCommandInput,
  ListResourceRequestsCommandOutput,
} from "../commands/ListResourceRequestsCommand";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "../commands/ListResourcesCommand";
import { UpdateResourceCommandInput, UpdateResourceCommandOutput } from "../commands/UpdateResourceCommand";
import { CloudControlServiceException as __BaseException } from "../models/CloudControlServiceException";
import {
  AlreadyExistsException,
  CancelResourceRequestInput,
  CancelResourceRequestOutput,
  ClientTokenConflictException,
  ConcurrentModificationException,
  ConcurrentOperationException,
  CreateResourceInput,
  CreateResourceOutput,
  DeleteResourceInput,
  DeleteResourceOutput,
  GeneralServiceException,
  GetResourceInput,
  GetResourceOutput,
  GetResourceRequestStatusInput,
  GetResourceRequestStatusOutput,
  HandlerFailureException,
  HandlerInternalFailureException,
  InvalidCredentialsException,
  InvalidRequestException,
  ListResourceRequestsInput,
  ListResourceRequestsOutput,
  ListResourcesInput,
  ListResourcesOutput,
  NetworkFailureException,
  NotStabilizedException,
  NotUpdatableException,
  Operation,
  OperationStatus,
  PrivateTypeException,
  ProgressEvent,
  RequestTokenNotFoundException,
  ResourceConflictException,
  ResourceDescription,
  ResourceNotFoundException,
  ResourceRequestStatusFilter,
  ServiceInternalErrorException,
  ServiceLimitExceededException,
  ThrottlingException,
  TypeNotFoundException,
  UnsupportedActionException,
  UpdateResourceInput,
  UpdateResourceOutput,
} from "../models/models_0";

/**
 * serializeAws_json1_0CancelResourceRequestCommand
 */
export const se_CancelResourceRequestCommand = async (
  input: CancelResourceRequestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelResourceRequest");
  let body: any;
  body = JSON.stringify(se_CancelResourceRequestInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateResourceCommand
 */
export const se_CreateResourceCommand = async (
  input: CreateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateResource");
  let body: any;
  body = JSON.stringify(se_CreateResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteResourceCommand
 */
export const se_DeleteResourceCommand = async (
  input: DeleteResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResource");
  let body: any;
  body = JSON.stringify(se_DeleteResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetResourceCommand
 */
export const se_GetResourceCommand = async (
  input: GetResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResource");
  let body: any;
  body = JSON.stringify(se_GetResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetResourceRequestStatusCommand
 */
export const se_GetResourceRequestStatusCommand = async (
  input: GetResourceRequestStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResourceRequestStatus");
  let body: any;
  body = JSON.stringify(se_GetResourceRequestStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListResourceRequestsCommand
 */
export const se_ListResourceRequestsCommand = async (
  input: ListResourceRequestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResourceRequests");
  let body: any;
  body = JSON.stringify(se_ListResourceRequestsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListResourcesCommand
 */
export const se_ListResourcesCommand = async (
  input: ListResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResources");
  let body: any;
  body = JSON.stringify(se_ListResourcesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateResourceCommand
 */
export const se_UpdateResourceCommand = async (
  input: UpdateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateResource");
  let body: any;
  body = JSON.stringify(se_UpdateResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0CancelResourceRequestCommand
 */
export const de_CancelResourceRequestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelResourceRequestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelResourceRequestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelResourceRequestOutput(data, context);
  const response: CancelResourceRequestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CancelResourceRequestCommandError
 */
const de_CancelResourceRequestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelResourceRequestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudcontrol#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "RequestTokenNotFoundException":
    case "com.amazonaws.cloudcontrol#RequestTokenNotFoundException":
      throw await de_RequestTokenNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateResourceCommand
 */
export const de_CreateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateResourceOutput(data, context);
  const response: CreateResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0CreateResourceCommandError
 */
const de_CreateResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.cloudcontrol#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "ClientTokenConflictException":
    case "com.amazonaws.cloudcontrol#ClientTokenConflictException":
      throw await de_ClientTokenConflictExceptionRes(parsedOutput, context);
    case "ConcurrentOperationException":
    case "com.amazonaws.cloudcontrol#ConcurrentOperationException":
      throw await de_ConcurrentOperationExceptionRes(parsedOutput, context);
    case "GeneralServiceException":
    case "com.amazonaws.cloudcontrol#GeneralServiceException":
      throw await de_GeneralServiceExceptionRes(parsedOutput, context);
    case "HandlerFailureException":
    case "com.amazonaws.cloudcontrol#HandlerFailureException":
      throw await de_HandlerFailureExceptionRes(parsedOutput, context);
    case "HandlerInternalFailureException":
    case "com.amazonaws.cloudcontrol#HandlerInternalFailureException":
      throw await de_HandlerInternalFailureExceptionRes(parsedOutput, context);
    case "InvalidCredentialsException":
    case "com.amazonaws.cloudcontrol#InvalidCredentialsException":
      throw await de_InvalidCredentialsExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudcontrol#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NetworkFailureException":
    case "com.amazonaws.cloudcontrol#NetworkFailureException":
      throw await de_NetworkFailureExceptionRes(parsedOutput, context);
    case "NotStabilizedException":
    case "com.amazonaws.cloudcontrol#NotStabilizedException":
      throw await de_NotStabilizedExceptionRes(parsedOutput, context);
    case "NotUpdatableException":
    case "com.amazonaws.cloudcontrol#NotUpdatableException":
      throw await de_NotUpdatableExceptionRes(parsedOutput, context);
    case "PrivateTypeException":
    case "com.amazonaws.cloudcontrol#PrivateTypeException":
      throw await de_PrivateTypeExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cloudcontrol#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudcontrol#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceInternalErrorException":
    case "com.amazonaws.cloudcontrol#ServiceInternalErrorException":
      throw await de_ServiceInternalErrorExceptionRes(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.cloudcontrol#ServiceLimitExceededException":
      throw await de_ServiceLimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cloudcontrol#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "TypeNotFoundException":
    case "com.amazonaws.cloudcontrol#TypeNotFoundException":
      throw await de_TypeNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedActionException":
    case "com.amazonaws.cloudcontrol#UnsupportedActionException":
      throw await de_UnsupportedActionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteResourceCommand
 */
export const de_DeleteResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteResourceOutput(data, context);
  const response: DeleteResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0DeleteResourceCommandError
 */
const de_DeleteResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.cloudcontrol#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "ClientTokenConflictException":
    case "com.amazonaws.cloudcontrol#ClientTokenConflictException":
      throw await de_ClientTokenConflictExceptionRes(parsedOutput, context);
    case "ConcurrentOperationException":
    case "com.amazonaws.cloudcontrol#ConcurrentOperationException":
      throw await de_ConcurrentOperationExceptionRes(parsedOutput, context);
    case "GeneralServiceException":
    case "com.amazonaws.cloudcontrol#GeneralServiceException":
      throw await de_GeneralServiceExceptionRes(parsedOutput, context);
    case "HandlerFailureException":
    case "com.amazonaws.cloudcontrol#HandlerFailureException":
      throw await de_HandlerFailureExceptionRes(parsedOutput, context);
    case "HandlerInternalFailureException":
    case "com.amazonaws.cloudcontrol#HandlerInternalFailureException":
      throw await de_HandlerInternalFailureExceptionRes(parsedOutput, context);
    case "InvalidCredentialsException":
    case "com.amazonaws.cloudcontrol#InvalidCredentialsException":
      throw await de_InvalidCredentialsExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudcontrol#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NetworkFailureException":
    case "com.amazonaws.cloudcontrol#NetworkFailureException":
      throw await de_NetworkFailureExceptionRes(parsedOutput, context);
    case "NotStabilizedException":
    case "com.amazonaws.cloudcontrol#NotStabilizedException":
      throw await de_NotStabilizedExceptionRes(parsedOutput, context);
    case "NotUpdatableException":
    case "com.amazonaws.cloudcontrol#NotUpdatableException":
      throw await de_NotUpdatableExceptionRes(parsedOutput, context);
    case "PrivateTypeException":
    case "com.amazonaws.cloudcontrol#PrivateTypeException":
      throw await de_PrivateTypeExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cloudcontrol#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudcontrol#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceInternalErrorException":
    case "com.amazonaws.cloudcontrol#ServiceInternalErrorException":
      throw await de_ServiceInternalErrorExceptionRes(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.cloudcontrol#ServiceLimitExceededException":
      throw await de_ServiceLimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cloudcontrol#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "TypeNotFoundException":
    case "com.amazonaws.cloudcontrol#TypeNotFoundException":
      throw await de_TypeNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedActionException":
    case "com.amazonaws.cloudcontrol#UnsupportedActionException":
      throw await de_UnsupportedActionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetResourceCommand
 */
export const de_GetResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourceOutput(data, context);
  const response: GetResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetResourceCommandError
 */
const de_GetResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.cloudcontrol#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "GeneralServiceException":
    case "com.amazonaws.cloudcontrol#GeneralServiceException":
      throw await de_GeneralServiceExceptionRes(parsedOutput, context);
    case "HandlerFailureException":
    case "com.amazonaws.cloudcontrol#HandlerFailureException":
      throw await de_HandlerFailureExceptionRes(parsedOutput, context);
    case "HandlerInternalFailureException":
    case "com.amazonaws.cloudcontrol#HandlerInternalFailureException":
      throw await de_HandlerInternalFailureExceptionRes(parsedOutput, context);
    case "InvalidCredentialsException":
    case "com.amazonaws.cloudcontrol#InvalidCredentialsException":
      throw await de_InvalidCredentialsExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudcontrol#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NetworkFailureException":
    case "com.amazonaws.cloudcontrol#NetworkFailureException":
      throw await de_NetworkFailureExceptionRes(parsedOutput, context);
    case "NotStabilizedException":
    case "com.amazonaws.cloudcontrol#NotStabilizedException":
      throw await de_NotStabilizedExceptionRes(parsedOutput, context);
    case "NotUpdatableException":
    case "com.amazonaws.cloudcontrol#NotUpdatableException":
      throw await de_NotUpdatableExceptionRes(parsedOutput, context);
    case "PrivateTypeException":
    case "com.amazonaws.cloudcontrol#PrivateTypeException":
      throw await de_PrivateTypeExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cloudcontrol#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudcontrol#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceInternalErrorException":
    case "com.amazonaws.cloudcontrol#ServiceInternalErrorException":
      throw await de_ServiceInternalErrorExceptionRes(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.cloudcontrol#ServiceLimitExceededException":
      throw await de_ServiceLimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cloudcontrol#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "TypeNotFoundException":
    case "com.amazonaws.cloudcontrol#TypeNotFoundException":
      throw await de_TypeNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedActionException":
    case "com.amazonaws.cloudcontrol#UnsupportedActionException":
      throw await de_UnsupportedActionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetResourceRequestStatusCommand
 */
export const de_GetResourceRequestStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceRequestStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResourceRequestStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourceRequestStatusOutput(data, context);
  const response: GetResourceRequestStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0GetResourceRequestStatusCommandError
 */
const de_GetResourceRequestStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceRequestStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "RequestTokenNotFoundException":
    case "com.amazonaws.cloudcontrol#RequestTokenNotFoundException":
      throw await de_RequestTokenNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListResourceRequestsCommand
 */
export const de_ListResourceRequestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceRequestsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResourceRequestsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResourceRequestsOutput(data, context);
  const response: ListResourceRequestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListResourceRequestsCommandError
 */
const de_ListResourceRequestsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceRequestsCommandOutput> => {
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
 * deserializeAws_json1_0ListResourcesCommand
 */
export const de_ListResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResourcesOutput(data, context);
  const response: ListResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0ListResourcesCommandError
 */
const de_ListResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.cloudcontrol#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "GeneralServiceException":
    case "com.amazonaws.cloudcontrol#GeneralServiceException":
      throw await de_GeneralServiceExceptionRes(parsedOutput, context);
    case "HandlerFailureException":
    case "com.amazonaws.cloudcontrol#HandlerFailureException":
      throw await de_HandlerFailureExceptionRes(parsedOutput, context);
    case "HandlerInternalFailureException":
    case "com.amazonaws.cloudcontrol#HandlerInternalFailureException":
      throw await de_HandlerInternalFailureExceptionRes(parsedOutput, context);
    case "InvalidCredentialsException":
    case "com.amazonaws.cloudcontrol#InvalidCredentialsException":
      throw await de_InvalidCredentialsExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudcontrol#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NetworkFailureException":
    case "com.amazonaws.cloudcontrol#NetworkFailureException":
      throw await de_NetworkFailureExceptionRes(parsedOutput, context);
    case "NotStabilizedException":
    case "com.amazonaws.cloudcontrol#NotStabilizedException":
      throw await de_NotStabilizedExceptionRes(parsedOutput, context);
    case "NotUpdatableException":
    case "com.amazonaws.cloudcontrol#NotUpdatableException":
      throw await de_NotUpdatableExceptionRes(parsedOutput, context);
    case "PrivateTypeException":
    case "com.amazonaws.cloudcontrol#PrivateTypeException":
      throw await de_PrivateTypeExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cloudcontrol#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudcontrol#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceInternalErrorException":
    case "com.amazonaws.cloudcontrol#ServiceInternalErrorException":
      throw await de_ServiceInternalErrorExceptionRes(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.cloudcontrol#ServiceLimitExceededException":
      throw await de_ServiceLimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cloudcontrol#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "TypeNotFoundException":
    case "com.amazonaws.cloudcontrol#TypeNotFoundException":
      throw await de_TypeNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedActionException":
    case "com.amazonaws.cloudcontrol#UnsupportedActionException":
      throw await de_UnsupportedActionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateResourceCommand
 */
export const de_UpdateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateResourceOutput(data, context);
  const response: UpdateResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_0UpdateResourceCommandError
 */
const de_UpdateResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.cloudcontrol#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "ClientTokenConflictException":
    case "com.amazonaws.cloudcontrol#ClientTokenConflictException":
      throw await de_ClientTokenConflictExceptionRes(parsedOutput, context);
    case "ConcurrentOperationException":
    case "com.amazonaws.cloudcontrol#ConcurrentOperationException":
      throw await de_ConcurrentOperationExceptionRes(parsedOutput, context);
    case "GeneralServiceException":
    case "com.amazonaws.cloudcontrol#GeneralServiceException":
      throw await de_GeneralServiceExceptionRes(parsedOutput, context);
    case "HandlerFailureException":
    case "com.amazonaws.cloudcontrol#HandlerFailureException":
      throw await de_HandlerFailureExceptionRes(parsedOutput, context);
    case "HandlerInternalFailureException":
    case "com.amazonaws.cloudcontrol#HandlerInternalFailureException":
      throw await de_HandlerInternalFailureExceptionRes(parsedOutput, context);
    case "InvalidCredentialsException":
    case "com.amazonaws.cloudcontrol#InvalidCredentialsException":
      throw await de_InvalidCredentialsExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.cloudcontrol#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "NetworkFailureException":
    case "com.amazonaws.cloudcontrol#NetworkFailureException":
      throw await de_NetworkFailureExceptionRes(parsedOutput, context);
    case "NotStabilizedException":
    case "com.amazonaws.cloudcontrol#NotStabilizedException":
      throw await de_NotStabilizedExceptionRes(parsedOutput, context);
    case "NotUpdatableException":
    case "com.amazonaws.cloudcontrol#NotUpdatableException":
      throw await de_NotUpdatableExceptionRes(parsedOutput, context);
    case "PrivateTypeException":
    case "com.amazonaws.cloudcontrol#PrivateTypeException":
      throw await de_PrivateTypeExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cloudcontrol#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudcontrol#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceInternalErrorException":
    case "com.amazonaws.cloudcontrol#ServiceInternalErrorException":
      throw await de_ServiceInternalErrorExceptionRes(parsedOutput, context);
    case "ServiceLimitExceededException":
    case "com.amazonaws.cloudcontrol#ServiceLimitExceededException":
      throw await de_ServiceLimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cloudcontrol#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "TypeNotFoundException":
    case "com.amazonaws.cloudcontrol#TypeNotFoundException":
      throw await de_TypeNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedActionException":
    case "com.amazonaws.cloudcontrol#UnsupportedActionException":
      throw await de_UnsupportedActionExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0AlreadyExistsExceptionRes
 */
const de_AlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AlreadyExistsException(body, context);
  const exception = new AlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ClientTokenConflictExceptionRes
 */
const de_ClientTokenConflictExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientTokenConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClientTokenConflictException(body, context);
  const exception = new ClientTokenConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConcurrentModificationException(body, context);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ConcurrentOperationExceptionRes
 */
const de_ConcurrentOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConcurrentOperationException(body, context);
  const exception = new ConcurrentOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0GeneralServiceExceptionRes
 */
const de_GeneralServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GeneralServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_GeneralServiceException(body, context);
  const exception = new GeneralServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0HandlerFailureExceptionRes
 */
const de_HandlerFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HandlerFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_HandlerFailureException(body, context);
  const exception = new HandlerFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0HandlerInternalFailureExceptionRes
 */
const de_HandlerInternalFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HandlerInternalFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_HandlerInternalFailureException(body, context);
  const exception = new HandlerInternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidCredentialsExceptionRes
 */
const de_InvalidCredentialsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCredentialsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidCredentialsException(body, context);
  const exception = new InvalidCredentialsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0NetworkFailureExceptionRes
 */
const de_NetworkFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NetworkFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NetworkFailureException(body, context);
  const exception = new NetworkFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0NotStabilizedExceptionRes
 */
const de_NotStabilizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotStabilizedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NotStabilizedException(body, context);
  const exception = new NotStabilizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0NotUpdatableExceptionRes
 */
const de_NotUpdatableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotUpdatableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NotUpdatableException(body, context);
  const exception = new NotUpdatableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0PrivateTypeExceptionRes
 */
const de_PrivateTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PrivateTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PrivateTypeException(body, context);
  const exception = new PrivateTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0RequestTokenNotFoundExceptionRes
 */
const de_RequestTokenNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestTokenNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RequestTokenNotFoundException(body, context);
  const exception = new RequestTokenNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceConflictExceptionRes
 */
const de_ResourceConflictExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceConflictException(body, context);
  const exception = new ResourceConflictException({
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
 * deserializeAws_json1_0ServiceInternalErrorExceptionRes
 */
const de_ServiceInternalErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceInternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceInternalErrorException(body, context);
  const exception = new ServiceInternalErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ServiceLimitExceededExceptionRes
 */
const de_ServiceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceLimitExceededException(body, context);
  const exception = new ServiceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0TypeNotFoundExceptionRes
 */
const de_TypeNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TypeNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TypeNotFoundException(body, context);
  const exception = new TypeNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0UnsupportedActionExceptionRes
 */
const de_UnsupportedActionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedActionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedActionException(body, context);
  const exception = new UnsupportedActionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_0CancelResourceRequestInput
 */
const se_CancelResourceRequestInput = (input: CancelResourceRequestInput, context: __SerdeContext): any => {
  return {
    ...(input.RequestToken != null && { RequestToken: input.RequestToken }),
  };
};

/**
 * serializeAws_json1_0CreateResourceInput
 */
const se_CreateResourceInput = (input: CreateResourceInput, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DesiredState != null && { DesiredState: input.DesiredState }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
    ...(input.TypeVersionId != null && { TypeVersionId: input.TypeVersionId }),
  };
};

/**
 * serializeAws_json1_0DeleteResourceInput
 */
const se_DeleteResourceInput = (input: DeleteResourceInput, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
    ...(input.TypeVersionId != null && { TypeVersionId: input.TypeVersionId }),
  };
};

/**
 * serializeAws_json1_0GetResourceInput
 */
const se_GetResourceInput = (input: GetResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
    ...(input.TypeVersionId != null && { TypeVersionId: input.TypeVersionId }),
  };
};

/**
 * serializeAws_json1_0GetResourceRequestStatusInput
 */
const se_GetResourceRequestStatusInput = (input: GetResourceRequestStatusInput, context: __SerdeContext): any => {
  return {
    ...(input.RequestToken != null && { RequestToken: input.RequestToken }),
  };
};

/**
 * serializeAws_json1_0ListResourceRequestsInput
 */
const se_ListResourceRequestsInput = (input: ListResourceRequestsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceRequestStatusFilter != null && {
      ResourceRequestStatusFilter: se_ResourceRequestStatusFilter(input.ResourceRequestStatusFilter, context),
    }),
  };
};

/**
 * serializeAws_json1_0ListResourcesInput
 */
const se_ListResourcesInput = (input: ListResourcesInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceModel != null && { ResourceModel: input.ResourceModel }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
    ...(input.TypeVersionId != null && { TypeVersionId: input.TypeVersionId }),
  };
};

/**
 * serializeAws_json1_0Operations
 */
const se_Operations = (input: (Operation | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0OperationStatuses
 */
const se_OperationStatuses = (input: (OperationStatus | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0ResourceRequestStatusFilter
 */
const se_ResourceRequestStatusFilter = (input: ResourceRequestStatusFilter, context: __SerdeContext): any => {
  return {
    ...(input.OperationStatuses != null && {
      OperationStatuses: se_OperationStatuses(input.OperationStatuses, context),
    }),
    ...(input.Operations != null && { Operations: se_Operations(input.Operations, context) }),
  };
};

/**
 * serializeAws_json1_0UpdateResourceInput
 */
const se_UpdateResourceInput = (input: UpdateResourceInput, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.PatchDocument != null && { PatchDocument: input.PatchDocument }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.TypeName != null && { TypeName: input.TypeName }),
    ...(input.TypeVersionId != null && { TypeVersionId: input.TypeVersionId }),
  };
};

/**
 * deserializeAws_json1_0AlreadyExistsException
 */
const de_AlreadyExistsException = (output: any, context: __SerdeContext): AlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0CancelResourceRequestOutput
 */
const de_CancelResourceRequestOutput = (output: any, context: __SerdeContext): CancelResourceRequestOutput => {
  return {
    ProgressEvent: output.ProgressEvent != null ? de_ProgressEvent(output.ProgressEvent, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ClientTokenConflictException
 */
const de_ClientTokenConflictException = (output: any, context: __SerdeContext): ClientTokenConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ConcurrentModificationException
 */
const de_ConcurrentModificationException = (output: any, context: __SerdeContext): ConcurrentModificationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ConcurrentOperationException
 */
const de_ConcurrentOperationException = (output: any, context: __SerdeContext): ConcurrentOperationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0CreateResourceOutput
 */
const de_CreateResourceOutput = (output: any, context: __SerdeContext): CreateResourceOutput => {
  return {
    ProgressEvent: output.ProgressEvent != null ? de_ProgressEvent(output.ProgressEvent, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteResourceOutput
 */
const de_DeleteResourceOutput = (output: any, context: __SerdeContext): DeleteResourceOutput => {
  return {
    ProgressEvent: output.ProgressEvent != null ? de_ProgressEvent(output.ProgressEvent, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GeneralServiceException
 */
const de_GeneralServiceException = (output: any, context: __SerdeContext): GeneralServiceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0GetResourceOutput
 */
const de_GetResourceOutput = (output: any, context: __SerdeContext): GetResourceOutput => {
  return {
    ResourceDescription:
      output.ResourceDescription != null ? de_ResourceDescription(output.ResourceDescription, context) : undefined,
    TypeName: __expectString(output.TypeName),
  } as any;
};

/**
 * deserializeAws_json1_0GetResourceRequestStatusOutput
 */
const de_GetResourceRequestStatusOutput = (output: any, context: __SerdeContext): GetResourceRequestStatusOutput => {
  return {
    ProgressEvent: output.ProgressEvent != null ? de_ProgressEvent(output.ProgressEvent, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0HandlerFailureException
 */
const de_HandlerFailureException = (output: any, context: __SerdeContext): HandlerFailureException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0HandlerInternalFailureException
 */
const de_HandlerInternalFailureException = (output: any, context: __SerdeContext): HandlerInternalFailureException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidCredentialsException
 */
const de_InvalidCredentialsException = (output: any, context: __SerdeContext): InvalidCredentialsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidRequestException
 */
const de_InvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ListResourceRequestsOutput
 */
const de_ListResourceRequestsOutput = (output: any, context: __SerdeContext): ListResourceRequestsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceRequestStatusSummaries:
      output.ResourceRequestStatusSummaries != null
        ? de_ResourceRequestStatusSummaries(output.ResourceRequestStatusSummaries, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListResourcesOutput
 */
const de_ListResourcesOutput = (output: any, context: __SerdeContext): ListResourcesOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceDescriptions:
      output.ResourceDescriptions != null ? de_ResourceDescriptions(output.ResourceDescriptions, context) : undefined,
    TypeName: __expectString(output.TypeName),
  } as any;
};

/**
 * deserializeAws_json1_0NetworkFailureException
 */
const de_NetworkFailureException = (output: any, context: __SerdeContext): NetworkFailureException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0NotStabilizedException
 */
const de_NotStabilizedException = (output: any, context: __SerdeContext): NotStabilizedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0NotUpdatableException
 */
const de_NotUpdatableException = (output: any, context: __SerdeContext): NotUpdatableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0PrivateTypeException
 */
const de_PrivateTypeException = (output: any, context: __SerdeContext): PrivateTypeException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ProgressEvent
 */
const de_ProgressEvent = (output: any, context: __SerdeContext): ProgressEvent => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    EventTime:
      output.EventTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventTime))) : undefined,
    Identifier: __expectString(output.Identifier),
    Operation: __expectString(output.Operation),
    OperationStatus: __expectString(output.OperationStatus),
    RequestToken: __expectString(output.RequestToken),
    ResourceModel: __expectString(output.ResourceModel),
    RetryAfter:
      output.RetryAfter != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RetryAfter))) : undefined,
    StatusMessage: __expectString(output.StatusMessage),
    TypeName: __expectString(output.TypeName),
  } as any;
};

/**
 * deserializeAws_json1_0RequestTokenNotFoundException
 */
const de_RequestTokenNotFoundException = (output: any, context: __SerdeContext): RequestTokenNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceConflictException
 */
const de_ResourceConflictException = (output: any, context: __SerdeContext): ResourceConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceDescription
 */
const de_ResourceDescription = (output: any, context: __SerdeContext): ResourceDescription => {
  return {
    Identifier: __expectString(output.Identifier),
    Properties: __expectString(output.Properties),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceDescriptions
 */
const de_ResourceDescriptions = (output: any, context: __SerdeContext): ResourceDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceDescription(entry, context);
    });
  return retVal;
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
 * deserializeAws_json1_0ResourceRequestStatusSummaries
 */
const de_ResourceRequestStatusSummaries = (output: any, context: __SerdeContext): ProgressEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProgressEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ServiceInternalErrorException
 */
const de_ServiceInternalErrorException = (output: any, context: __SerdeContext): ServiceInternalErrorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceLimitExceededException
 */
const de_ServiceLimitExceededException = (output: any, context: __SerdeContext): ServiceLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0TypeNotFoundException
 */
const de_TypeNotFoundException = (output: any, context: __SerdeContext): TypeNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0UnsupportedActionException
 */
const de_UnsupportedActionException = (output: any, context: __SerdeContext): UnsupportedActionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0UpdateResourceOutput
 */
const de_UpdateResourceOutput = (output: any, context: __SerdeContext): UpdateResourceOutput => {
  return {
    ProgressEvent: output.ProgressEvent != null ? de_ProgressEvent(output.ProgressEvent, context) : undefined,
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `CloudApiService.${operation}`,
  };
}

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
